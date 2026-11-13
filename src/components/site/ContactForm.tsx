import { AlertCircle, CheckCircle2, Home, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MAX_MESSAGE_LEN, MAX_NAME_LEN, MAX_SUBJECT_LEN, submitContactMessage } from "@/lib/contact-submit";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type ErrorCode = "subjectTooLong" | "messageTooLong" | "nameTooLong" | "subjectRequired" | "messageRequired" | "rateLimited" | "unavailable" | "generic";

export function ContactForm() {
  const { t, lang } = useI18n();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — invisible to humans
  const [status, setStatus] = useState<Status>("idle");
  const [errorCode, setErrorCode] = useState<ErrorCode | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ subject?: string; message?: string; name?: string }>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successTitleRef = useRef<HTMLHeadingElement>(null);

  const submitting = status === "submitting";

  useEffect(() => {
    if (status === "success") successTitleRef.current?.focus();
  }, [status]);

  function validate(): { subject?: string; message?: string; name?: string } {
    const errors: { subject?: string; message?: string; name?: string } = {};
    if (name.trim().length > MAX_NAME_LEN) errors.name = t.contact.form.errors.nameTooLong;
    if (subject.trim().length === 0) errors.subject = t.contact.form.errors.subjectRequired;
    else if (subject.trim().length > MAX_SUBJECT_LEN) errors.subject = t.contact.form.errors.subjectTooLong;
    if (message.trim().length === 0) errors.message = t.contact.form.errors.messageRequired;
    else if (message.trim().length > MAX_MESSAGE_LEN) errors.message = t.contact.form.errors.messageTooLong;
    return errors;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const errors = validate();
    setFieldErrors(errors);
    if (errors.name || errors.subject || errors.message) {
      if (errors.subject) subjectRef.current?.focus();
      else if (errors.message) messageRef.current?.focus();
      else nameRef.current?.focus();
      return;
    }

    setStatus("submitting");
    setErrorCode(null);
    try {
      const result = await submitContactMessage({
        data: { name, subject, message, lang, website },
      });
      if (result.ok) {
        setStatus("success");
        return;
      }
      setStatus("error");
      setErrorCode(
        result.code === "RATE_LIMITED" ? "rateLimited" : result.code === "VALIDATION" ? "generic" : "unavailable",
      );
    } catch {
      setStatus("error");
      setErrorCode("generic");
    }
  }

  function resetForm() {
    setName("");
    setSubject("");
    setMessage("");
    setWebsite("");
    setFieldErrors({});
    setErrorCode(null);
    setStatus("idle");
    // Return focus to the first field so the visitor can write another message.
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  if (status === "success") {
    const homeHref = lang === "fr" ? "/?lang=fr" : "/";
    return (
      <div
        className="animate-rise rounded-3xl border border-border bg-card p-8 text-center shadow-elevated sm:p-12"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow sm:size-20">
          <CheckCircle2 className="size-8 text-primary-foreground sm:size-10" aria-hidden="true" strokeWidth={2.2} />
        </div>
        <h2
          ref={successTitleRef}
          tabIndex={-1}
          className="mt-6 text-balance text-2xl font-extrabold tracking-tight text-foreground focus:outline-none sm:text-3xl"
        >
          {t.contact.success.title}
        </h2>
        <p className="mt-3 text-base font-semibold text-foreground">{t.contact.success.line1}</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted-foreground">{t.contact.success.line2}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <a href={homeHref}>
              <Home aria-hidden="true" />
              {t.contact.success.backHome}
            </a>
          </Button>
          <Button variant="soft" size="xl" onClick={resetForm}>
            <Send aria-hidden="true" />
            {t.contact.success.another}
          </Button>
        </div>
      </div>
    );
  }

  const remaining = (value: string, max: number) => Math.max(0, max - value.trim().length);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8"
      aria-describedby="contact-required-note"
    >
      <p id="contact-required-note" className="text-xs font-medium text-muted-foreground">
        {t.contact.form.requiredNote}
      </p>

      {/* Honeypot: hidden from humans, attractive to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-2xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive"
        >
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <span>{t.contact.form.errors[errorCode ?? "generic"]}</span>
        </div>
      )}

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="contact-name" className="text-sm font-bold">
            {t.contact.form.name}
          </Label>
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
            {t.contact.form.optional}
          </span>
        </div>
        <Input
          id="contact-name"
          ref={nameRef}
          type="text"
          autoComplete="name"
          maxLength={MAX_NAME_LEN}
          placeholder={t.contact.form.namePlaceholder}
          value={name}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 h-12 rounded-xl px-4 text-base"
        />
        {fieldErrors.name && (
          <p id="contact-name-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="contact-subject" className="text-sm font-bold">
            {t.contact.form.subject} <span aria-hidden="true" className="text-destructive">*</span>
          </Label>
          <span aria-hidden="true" className="text-[11px] font-medium tabular-nums text-muted-foreground">
            {remaining(subject, MAX_SUBJECT_LEN)} / {MAX_SUBJECT_LEN}
          </span>
        </div>
        <Input
          id="contact-subject"
          ref={subjectRef}
          type="text"
          required
          aria-required="true"
          maxLength={MAX_SUBJECT_LEN}
          placeholder={t.contact.form.subjectPlaceholder}
          value={subject}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.subject)}
          aria-describedby={fieldErrors.subject ? "contact-subject-error" : "contact-subject-hint"}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-2 h-12 rounded-xl px-4 text-base"
        />
        <p id="contact-subject-hint" className="mt-1.5 text-[11px] text-muted-foreground">
          {fieldErrors.subject ? null : t.contact.form.subjectHint}
        </p>
        {fieldErrors.subject && (
          <p id="contact-subject-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {fieldErrors.subject}
          </p>
        )}
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="contact-message" className="text-sm font-bold">
            {t.contact.form.message} <span aria-hidden="true" className="text-destructive">*</span>
          </Label>
          <span aria-hidden="true" className="text-[11px] font-medium tabular-nums text-muted-foreground">
            {remaining(message, MAX_MESSAGE_LEN)} / {MAX_MESSAGE_LEN}
          </span>
        </div>
        <Textarea
          id="contact-message"
          ref={messageRef}
          required
          aria-required="true"
          rows={5}
          maxLength={MAX_MESSAGE_LEN}
          placeholder={t.contact.form.messagePlaceholder}
          value={message}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 min-h-[140px] resize-y rounded-xl px-4 py-3 text-base leading-7"
        />
        {fieldErrors.message && (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        disabled={submitting}
        className="mt-6 w-full text-base"
      >
        {submitting ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            {t.contact.form.sending}
          </>
        ) : (
          <>
            <Send aria-hidden="true" />
            {t.contact.form.submit}
          </>
        )}
      </Button>
    </form>
  );
}
