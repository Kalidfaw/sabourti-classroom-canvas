import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";
import { ArrowLeft, CheckCircle2, Monitor } from "lucide-react";

import { AppDownloads } from "@/components/site/AppDownloads";
import { DasScreenshotFigure } from "@/components/site/DasScreenshotFigure";
import { Features } from "@/components/site/Features";
import { Faq } from "@/components/site/Faq";
import { Reveal } from "@/components/site/Reveal";
import { ScreenshotFigure } from "@/components/site/ScreenshotFigure";
import { ScreenshotViewerProvider } from "@/components/site/ScreenshotViewer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Showcase } from "@/components/site/Showcase";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Teachers } from "@/components/site/Teachers";
import { Button } from "@/components/ui/button";
import { translations, type Lang } from "@/content/translations";
import { I18nProvider, scrollToSection } from "@/lib/i18n";

export const Route = createFileRoute("/apps/sabourti")({
  // Arabic is the default; French is selected with ?lang=fr so the choice survives reloads and links.
  validateSearch: (search: Record<string, unknown>): { lang?: "fr" } =>
    search["lang"] === "fr" ? { lang: "fr" } : {},
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => ({ lang: (deps.lang ?? "ar") as Lang }),
  head: ({ loaderData }) => {
    const lang: Lang = loaderData?.lang ?? "ar";
    const meta = translations[lang].sabourtiApp.meta;
    const url = lang === "fr" ? "/apps/sabourti?lang=fr" : "/apps/sabourti";
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:locale", content: lang === "fr" ? "fr_MA" : "ar_MA" },
        { property: "og:site_name", content: "Sabourti | سبورتي" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: meta.title },
        { name: "twitter:description", content: meta.description },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ar", href: "/apps/sabourti" },
        { rel: "alternate", hrefLang: "fr", href: "/apps/sabourti?lang=fr" },
        { rel: "alternate", hrefLang: "x-default", href: "/apps/sabourti" },
      ],
    };
  },
  component: SabourtiAppPage,
});

function SabourtiAppPage() {
  const { lang: searchLang } = Route.useSearch();
  const lang: Lang = searchLang ?? "ar";
  const navigate = Route.useNavigate();

  const setLang = useCallback(
    (next: Lang) => {
      navigate({
        to: "/apps/sabourti",
        search: next === "fr" ? { lang: "fr" } : {},
        replace: true,
        resetScroll: false,
      });
    },
    [navigate],
  );

  return (
    <I18nProvider lang={lang} setLang={setLang}>
      <ScreenshotViewerProvider>
        <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} id="top" className="min-h-screen font-sans">
          <a
            href="#main"
            className="sr-only z-50 rounded-lg bg-navy px-4 py-2 font-semibold text-navy-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
          >
            {translations[lang].common.skipToContent}
          </a>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            <ProductHero lang={lang} />
            <Features />
            <Showcase />
            <DocsAssetStudioImport lang={lang} />
            <Teachers />
            <Faq />
            <AppDownloads app="sabourti" copy={translations[lang].sabourtiApp.downloads} />
          </main>
          <SiteFooter />
        </div>
      </ScreenshotViewerProvider>
    </I18nProvider>
  );
}

/** Product hero: Sabourti identity with a real screenshot of the app. */
function ProductHero({ lang }: { lang: Lang }) {
  const h = translations[lang].sabourtiApp.hero;

  return (
    <section aria-labelledby="sabourti-hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-dots [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="container-page grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,7fr)] lg:gap-12 lg:pb-28 lg:pt-20">
        <div className="text-start">
          <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm font-bold text-secondary-foreground shadow-soft backdrop-blur">
            <Monitor className="size-4 text-primary" aria-hidden="true" />
            {h.eyebrow}
          </p>

          <h1 id="sabourti-hero-title" className="mt-6 animate-rise font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-balance text-foreground [animation-delay:80ms] sm:text-5xl xl:text-[3.6rem]">
            {h.name} <span className="text-gradient">{h.descriptor}</span>
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-pretty text-muted-foreground [animation-delay:160ms]">
            {h.subtitle}
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Button asChild variant="hero" size="xl">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                {h.primaryCta}
                <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("download");
                }}
              >
                {h.secondaryCta}
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex animate-rise flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground [animation-delay:320ms]">
            {h.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-turquoise" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise [animation-delay:200ms]">
          <ScreenshotFigure
            id="lessonGeometry"
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

/** Bridging section: Docs Asset Studio exports a ZIP that Sabourti imports directly. */
function DocsAssetStudioImport({ lang }: { lang: Lang }) {
  const d = translations[lang].sabourtiApp.integration;

  return (
    <section aria-labelledby="das-import-title" className="py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="grid items-center gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                <span aria-hidden="true" className="h-px w-6 bg-primary" />
                {d.eyebrow}
              </p>
              <h2 id="das-import-title" className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {d.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{d.description}</p>
              <ul className="mt-6 space-y-3">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-turquoise" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild variant="hero" size="lg">
                  <a href="/apps/docs-asset-studio">
                    {d.cta}
                    <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
                  </a>
                </Button>
              </div>
            </div>
            <DasScreenshotFigure
              id="dasExportOptions"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
