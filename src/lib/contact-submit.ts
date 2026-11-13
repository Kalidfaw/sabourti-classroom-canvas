/**
 * Server-side handler for the /contact form.
 *
 * Stores messages in a Cloudflare D1 database when a binding is present and
 * sends a notification email through Resend when `RESEND_API_KEY` is set.
 * Both integrations are optional at runtime: if the database binding is missing
 * the handler responds with DB_UNAVAILABLE (it never pretends a message was
 * saved), and if the email key is missing the message is stored with
 * email_status = 'pending' so it can be notified later.
 *
 * Bindings used (configured in the Cloudflare dashboard / Lovable, never in git):
 *   - CONTACT_DB (D1) — canonical binding for contact messages. `DB` is also accepted.
 *   - RESEND_API_KEY (secret) — enables the email notification.
 *   - RESEND_FROM (secret/var, optional) — verified sender, e.g. "Sabourti <contact@yourdomain>".
 *
 * Anti-spam: honeypot field (`website`), in-memory rate limit per client key.
 * No IP addresses or unnecessary personal data are stored.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { checkRateLimit } from "@/lib/rate-limit";

export const MAX_NAME_LEN = 80;
export const MAX_SUBJECT_LEN = 150;
export const MAX_MESSAGE_LEN = 2000;

const CONTACT_RECIPIENT = "khalfaw944@gmail.com";
const EMAIL_TIMEOUT_MS = 10_000;

export const contactInputSchema = z.object({
  // Optional on purpose: the form must be submittable without a name.
  name: z
    .string()
    .trim()
    .max(MAX_NAME_LEN)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : null)),
  subject: z.string().trim().min(1).max(MAX_SUBJECT_LEN),
  message: z.string().trim().min(1).max(MAX_MESSAGE_LEN),
  lang: z.enum(["ar", "fr"]).default("ar"),
  // Honeypot: humans never see or fill this field.
  website: z.string().trim().max(200).optional().default(""),
});

export type ContactInput = z.input<typeof contactInputSchema>;

export type SubmitContactResult =
  | { ok: true; id: string | null }
  | { ok: false; code: "VALIDATION" | "RATE_LIMITED" | "DB_UNAVAILABLE" | "SAVE_FAILED" };

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface D1PreparedStatementLike {
  bind(...values: unknown[]): D1PreparedStatementLike;
  run(): Promise<unknown>;
}
interface D1DatabaseLike {
  prepare(query: string): D1PreparedStatementLike;
}

function getEnv(): Record<string, unknown> {
  const g = globalThis as { __env__?: Record<string, unknown> };
  if (g.__env__ && typeof g.__env__ === "object") return g.__env__;
  // Node-based dev fallback (e.g. local preview scripts). Never required.
  if (typeof process !== "undefined" && process.env) {
    return { RESEND_API_KEY: process.env["RESEND_API_KEY"], RESEND_FROM: process.env["RESEND_FROM"] };
  }
  return {};
}

function getDb(env: Record<string, unknown>): D1DatabaseLike | null {
  const candidate = env["CONTACT_DB"] ?? env["DB"];
  if (candidate && typeof (candidate as D1DatabaseLike).prepare === "function") {
    return candidate as D1DatabaseLike;
  }
  return null;
}

async function getClientKey(): Promise<string> {
  try {
    const { getRequestIP, getRequestHeader } = await import("@tanstack/react-start/server");
    const ip = getRequestIP();
    if (ip) return String(ip);
    const cf = getRequestHeader("cf-connecting-ip");
    if (cf) return String(cf);
  } catch {
    // Server module unavailable (e.g. tests): fall back to a shared bucket.
  }
  return "unknown";
}

async function sendNotificationEmail(params: {
  apiKey: string;
  from: string;
  name: string | null;
  subject: string;
  message: string;
  lang: "ar" | "fr";
  createdAt: string;
}): Promise<boolean> {
  const { apiKey, from, name, subject, message, lang, createdAt } = params;
  const esc = escapeHtml;
  const langLabel = lang === "ar" ? "العربية (RTL)" : "Français (LTR)";
  const messageHtml = esc(message).replace(/\r?\n/g, "<br>");
  const html = `<!doctype html>
<html lang="ar" dir="rtl">
  <body style="margin:0;padding:24px;background:#f1f5f9;font-family:'Segoe UI',Tahoma,Arial,sans-serif;color:#0f172a">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden">
      <div style="background:linear-gradient(135deg,#4f46e5,#0284c7);padding:20px 24px">
        <h1 style="margin:0;font-size:18px;color:#ffffff">رسالة جديدة من موقع Sabourti</h1>
      </div>
      <div style="padding:20px 24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.8">
          <tr><td style="padding:6px 0;color:#64748b;width:120px;vertical-align:top">الاسم</td><td style="padding:6px 0">${esc(name ?? "—")}</td></tr>
          <tr><td style="padding:6px 0;color:#64748b;vertical-align:top">العنوان</td><td style="padding:6px 0"><strong>${esc(subject)}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#64748b;vertical-align:top">اللغة</td><td style="padding:6px 0">${esc(langLabel)}</td></tr>
          <tr><td style="padding:6px 0;color:#64748b;vertical-align:top">التاريخ</td><td style="padding:6px 0" dir="ltr">${esc(createdAt)} (UTC)</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
        <p style="margin:0 0 6px;color:#64748b;font-size:13px">نص الرسالة</p>
        <div style="white-space:normal;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;font-size:14px;line-height:1.9">${messageHtml}</div>
      </div>
    </div>
  </body>
</html>`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), EMAIL_TIMEOUT_MS);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_RECIPIENT],
        subject: `رسالة جديدة من موقع Sabourti — ${subject}`,
        html,
      }),
      signal: controller.signal,
    });
    return res.ok;
  } catch (error) {
    console.error("[contact] email send failed:", error instanceof Error ? error.message : "unknown error");
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export const submitContactMessage = createServerFn({ method: "POST" })
  .validator((input: unknown) => contactInputSchema.safeParse(input))
  .handler(async ({ data: parsed }): Promise<SubmitContactResult> => {
    if (!parsed.success) {
      return { ok: false, code: "VALIDATION" };
    }
    const { name, subject, message, lang, website } = parsed.data;

    // Honeypot: silently discard bot submissions. Never stored, never emailed.
    if (website && website.length > 0) {
      return { ok: true, id: null };
    }

    const rate = checkRateLimit(await getClientKey());
    if (!rate.allowed) {
      return { ok: false, code: "RATE_LIMITED" };
    }

    const env = getEnv();
    const db = getDb(env);
    if (!db) {
      // Never fake success when the database is not wired up.
      console.error("[contact] CONTACT_DB binding is not configured");
      return { ok: false, code: "DB_UNAVAILABLE" };
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    try {
      await db
        .prepare(
          "INSERT INTO contact_messages (id, name, subject, message, lang, created_at, email_status) VALUES (?, ?, ?, ?, ?, ?, 'pending')",
        )
        .bind(id, name, subject, message, lang, createdAt)
        .run();
    } catch (error) {
      console.error("[contact] failed to save message:", error instanceof Error ? error.message : "unknown error");
      return { ok: false, code: "SAVE_FAILED" };
    }

    // The message is safe in D1 at this point. Email is best-effort; failures
    // never lose or delete the stored message.
    const apiKey = typeof env["RESEND_API_KEY"] === "string" && env["RESEND_API_KEY"] ? env["RESEND_API_KEY"] : null;
    if (apiKey) {
      const from = typeof env["RESEND_FROM"] === "string" && env["RESEND_FROM"] ? env["RESEND_FROM"] : "Sabourti <onboarding@resend.dev>";
      const emailOk = await sendNotificationEmail({ apiKey, from, name, subject, message, lang, createdAt });
      try {
        await db
          .prepare("UPDATE contact_messages SET email_status = ? WHERE id = ?")
          .bind(emailOk ? "sent" : "failed", id)
          .run();
      } catch (error) {
        console.error("[contact] failed to update email_status:", error instanceof Error ? error.message : "unknown error");
      }
    }

    return { ok: true, id };
  });
