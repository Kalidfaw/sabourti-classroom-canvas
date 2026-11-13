import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/site/ContactForm";
import { translations } from "@/content/translations";
import {
  MAX_MESSAGE_LEN,
  MAX_SUBJECT_LEN,
  contactInputSchema,
  escapeHtml,
  submitContactMessage,
} from "@/lib/contact-submit";
import { checkRateLimit, resetRateLimits } from "@/lib/rate-limit";
import { I18nProvider } from "@/lib/i18n";

vi.mock("@/lib/contact-submit", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/lib/contact-submit")>();
  return { ...original, submitContactMessage: vi.fn() };
});

const mockSubmit = vi.mocked(submitContactMessage);

function renderForm(lang: "ar" | "fr" = "ar") {
  return render(
    <I18nProvider lang={lang} setLang={() => {}}>
      <ContactForm />
    </I18nProvider>,
  );
}

describe("contactInputSchema", () => {
  it("accepts a valid message without a name (name is optional)", () => {
    const result = contactInputSchema.safeParse({ subject: "فكرة", message: "نص الرسالة", lang: "ar" });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.name).toBeNull();
  });

  it("keeps an entered name", () => {
    const result = contactInputSchema.safeParse({ name: "أستاذ خالد", subject: "اقتراح", message: "تفاصيل", lang: "ar" });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.name).toBe("أستاذ خالد");
  });

  it("rejects an empty subject or message", () => {
    expect(contactInputSchema.safeParse({ subject: "", message: "نص", lang: "ar" }).success).toBe(false);
    expect(contactInputSchema.safeParse({ subject: "   ", message: "نص", lang: "ar" }).success).toBe(false);
    expect(contactInputSchema.safeParse({ subject: "عنوان", message: "", lang: "ar" }).success).toBe(false);
    expect(contactInputSchema.safeParse({ subject: "عنوان", message: "  ", lang: "ar" }).success).toBe(false);
  });

  it("enforces maximum lengths", () => {
    expect(contactInputSchema.safeParse({ subject: "أ".repeat(MAX_SUBJECT_LEN + 1), message: "نص", lang: "ar" }).success).toBe(false);
    expect(contactInputSchema.safeParse({ subject: "عنوان", message: "ر".repeat(MAX_MESSAGE_LEN + 1), lang: "ar" }).success).toBe(false);
    expect(contactInputSchema.safeParse({ name: "ن".repeat(81), subject: "عنوان", message: "نص", lang: "ar" }).success).toBe(false);
  });

  it("accepts messages exactly at the limits", () => {
    expect(contactInputSchema.safeParse({ subject: "أ".repeat(MAX_SUBJECT_LEN), message: "ر".repeat(MAX_MESSAGE_LEN), lang: "fr" }).success).toBe(true);
  });
});

describe("escapeHtml", () => {
  it("escapes HTML-significant characters", () => {
    expect(escapeHtml(`<b>&"'</b>`)).toBe("&lt;b&gt;&amp;&quot;&#39;&lt;/b&gt;");
  });
});

describe("rate limiter", () => {
  beforeEach(() => resetRateLimits());

  it("allows 5 submissions then blocks the 6th", () => {
    const now = 1_000_000;
    for (let i = 0; i < 5; i++) expect(checkRateLimit("ip-1", now + i * 1000).allowed).toBe(true);
    const blocked = checkRateLimit("ip-1", now + 5000);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("tracks keys independently", () => {
    const now = 1_000_000;
    for (let i = 0; i < 5; i++) checkRateLimit("ip-1", now + i * 1000);
    expect(checkRateLimit("ip-2", now + 5000).allowed).toBe(true);
  });

  it("allows submissions again after the window expires", () => {
    const now = 1_000_000;
    for (let i = 0; i < 5; i++) checkRateLimit("ip-1", now + i * 1000);
    expect(checkRateLimit("ip-1", now + 11 * 60 * 1000).allowed).toBe(true);
  });
});

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSubmit.mockReset();
  });

  it("renders the honeypot field hidden and untabbable", () => {
    const { container } = renderForm("ar");
    const honeypot = container.querySelector<HTMLInputElement>("#contact-website");
    expect(honeypot).not.toBeNull();
    expect(honeypot?.tabIndex).toBe(-1);
    expect(honeypot?.closest("[aria-hidden='true']")).not.toBeNull();
  });

  it("blocks an empty subject client-side and never calls the server", () => {
    const { container } = renderForm("ar");
    fireEvent.change(screen.getByLabelText(/رسالتك أو اقتراحك/), { target: { value: "محتوى صالح" } });
    fireEvent.submit(container.querySelector("form")!);
    expect(screen.getByText(translations.ar.contact.form.errors.subjectRequired)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("blocks an empty message client-side and never calls the server", () => {
    const { container } = renderForm("ar");
    fireEvent.change(screen.getByLabelText(/عنوان الرسالة/), { target: { value: "عنوان صالح" } });
    fireEvent.submit(container.querySelector("form")!);
    expect(screen.getByText(translations.ar.contact.form.errors.messageRequired)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("shows the Arabic thank-you view after a successful save and lets the visitor send another", async () => {
    mockSubmit.mockResolvedValue({ ok: true, id: "msg-1" });
    const { container } = renderForm("ar");
    fireEvent.change(screen.getByLabelText(/عنوان الرسالة/), { target: { value: "اقتراح رائع" } });
    fireEvent.change(screen.getByLabelText(/رسالتك أو اقتراحك/), { target: { value: "أتمنى إضافة تصحيح تلقائي" } });
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(translations.ar.contact.success.title)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: translations.ar.contact.form.submit })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: translations.ar.contact.success.another }));
    expect(screen.getByLabelText(/عنوان الرسالة/)).toHaveValue("");
    expect(screen.getByLabelText(/رسالتك أو اقتراحك/)).toHaveValue("");
  });

  it("shows the French thank-you view after a successful save", async () => {
    mockSubmit.mockResolvedValue({ ok: true, id: "msg-2" });
    const { container } = renderForm("fr");
    fireEvent.change(screen.getByLabelText(/Sujet/), { target: { value: "Suggestion" } });
    fireEvent.change(screen.getByLabelText(/Votre message ou suggestion/), { target: { value: "Une idée" } });
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(translations.fr.contact.success.title)).toBeInTheDocument();
  });

  it("shows a rate-limit error without any thank-you when the server rejects the burst", async () => {
    mockSubmit.mockResolvedValue({ ok: false, code: "RATE_LIMITED" });
    const { container } = renderForm("ar");
    fireEvent.change(screen.getByLabelText(/عنوان الرسالة/), { target: { value: "عنوان" } });
    fireEvent.change(screen.getByLabelText(/رسالتك أو اقتراحك/), { target: { value: "رسالة" } });
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(translations.ar.contact.form.errors.rateLimited)).toBeInTheDocument();
    expect(screen.queryByText(translations.ar.contact.success.title)).not.toBeInTheDocument();
  });

  it("shows a generic failure and never the thank-you when saving fails on the server", async () => {
    mockSubmit.mockResolvedValue({ ok: false, code: "DB_UNAVAILABLE" });
    const { container } = renderForm("fr");
    fireEvent.change(screen.getByLabelText(/Sujet/), { target: { value: "Suggestion" } });
    fireEvent.change(screen.getByLabelText(/Votre message ou suggestion/), { target: { value: "Une idée" } });
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(translations.fr.contact.form.errors.unavailable)).toBeInTheDocument();
    expect(screen.queryByText(translations.fr.contact.success.title)).not.toBeInTheDocument();
  });
});
