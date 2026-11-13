import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";

import { BrandHero } from "@/components/site/BrandHero";
import { FinalCta } from "@/components/site/FinalCta";
import { IntegrationSection } from "@/components/site/IntegrationSection";
import { ProductsSection } from "@/components/site/ProductsSection";
import { ScreenshotViewerProvider } from "@/components/site/ScreenshotViewer";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { VisionSection } from "@/components/site/VisionSection";
import { translations, type Lang } from "@/content/translations";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  // Arabic is the default; French is selected with ?lang=fr so the choice survives reloads and links.
  validateSearch: (search: Record<string, unknown>): { lang?: "fr" } =>
    search["lang"] === "fr" ? { lang: "fr" } : {},
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => ({ lang: (deps.lang ?? "ar") as Lang }),
  head: ({ loaderData }) => {
    const lang: Lang = loaderData?.lang ?? "ar";
    const meta = translations[lang].meta;
    const url = lang === "fr" ? "/?lang=fr" : "/";
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
        { rel: "alternate", hrefLang: "ar", href: "/" },
        { rel: "alternate", hrefLang: "fr", href: "/?lang=fr" },
        { rel: "alternate", hrefLang: "x-default", href: "/" },
      ],
    };
  },
  component: Index,
});

function Index() {
  const { lang: searchLang } = Route.useSearch();
  const lang: Lang = searchLang ?? "ar";
  const navigate = Route.useNavigate();

  const setLang = useCallback(
    (next: Lang) => {
      navigate({
        to: "/",
        search: next === "fr" ? { lang: "fr" } : {},
        replace: true,
        resetScroll: false,
      });
    },
    [navigate],
  );

  const t = translations[lang];
  const brandNav = [
    { id: "products", label: t.home.nav.products },
    { id: "integration", label: t.home.nav.integration },
    { id: "vision", label: t.home.nav.vision },
  ];

  return (
    <I18nProvider lang={lang} setLang={setLang}>
      <ScreenshotViewerProvider>
      <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} id="top" className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-navy px-4 py-2 font-semibold text-navy-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          {t.common.skipToContent}
        </a>
        <SiteHeader navLinks={brandNav} cta={{ label: t.home.ctaHeader, href: "#products" }} />
        <main id="main" tabIndex={-1} className="outline-none">
          <BrandHero />
          <ProductsSection />
          <IntegrationSection />
          <VisionSection />
          <FinalCta />
        </main>
        <SiteFooter navLinks={brandNav} />
      </div>
      </ScreenshotViewerProvider>
    </I18nProvider>
  );
}
