import { createFileRoute } from "@tanstack/react-router";
import { MailCheck, MessageCircle } from "lucide-react";
import { useCallback } from "react";

import { ContactForm } from "@/components/site/ContactForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { translations, type Lang } from "@/content/translations";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  // Arabic is the default; French is selected with ?lang=fr so the choice survives reloads and links.
  validateSearch: (search: Record<string, unknown>): { lang?: "fr" } =>
    search["lang"] === "fr" ? { lang: "fr" } : {},
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => ({ lang: (deps.lang ?? "ar") as Lang }),
  head: ({ loaderData }) => {
    const lang: Lang = loaderData?.lang ?? "ar";
    const meta = translations[lang].contact.meta;
    const url = lang === "fr" ? "/contact?lang=fr" : "/contact";
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:locale", content: lang === "fr" ? "fr_MA" : "ar_MA" },
        { property: "og:site_name", content: "Sabourti Education" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: meta.title },
        { name: "twitter:description", content: meta.description },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ar", href: "/contact" },
        { rel: "alternate", hrefLang: "fr", href: "/contact?lang=fr" },
        { rel: "alternate", hrefLang: "x-default", href: "/contact" },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { lang: searchLang } = Route.useSearch();
  const lang: Lang = searchLang ?? "ar";
  const navigate = Route.useNavigate();

  const setLang = useCallback(
    (next: Lang) => {
      navigate({
        to: "/contact",
        search: next === "fr" ? { lang: "fr" } : {},
        replace: true,
        resetScroll: false,
      });
    },
    [navigate],
  );

  const t = translations[lang];

  return (
    <I18nProvider lang={lang} setLang={setLang}>
      <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} id="top" className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-navy px-4 py-2 font-semibold text-navy-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          {t.common.skipToContent}
        </a>
        <SiteHeader home={false} />
        <main id="main" tabIndex={-1} className="outline-none">
          <section aria-labelledby="contact-title" className="relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-glow" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-dots [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
            />
            <div className="container-page grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 lg:py-24">
              <div className="text-start lg:sticky lg:top-24">
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm font-bold text-secondary-foreground shadow-soft backdrop-blur">
                  <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                  {t.contact.eyebrow}
                </p>
                <h1
                  id="contact-title"
                  className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl"
                >
                  {t.contact.title}
                </h1>
                <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">{t.contact.subtitle}</p>
                <div
                  aria-hidden="true"
                  className="mt-8 hidden items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3 text-sm font-medium text-muted-foreground lg:flex"
                >
                  <MailCheck className="size-5 shrink-0 text-primary" />
                  <span>Sabourti Education</span>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
        <SiteFooter home={false} />
      </div>
    </I18nProvider>
  );
}
