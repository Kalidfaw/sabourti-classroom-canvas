import { createFileRoute } from "@tanstack/react-router";
import { useCallback, type ReactNode } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  CopyX,
  FileStack,
  Files,
  GitCompare,
  Images,
  LayoutGrid,
  Monitor,
  Tags,
  Wand2,
  type LucideIcon,
} from "lucide-react";

import { AppDownloads } from "@/components/site/AppDownloads";
import { DasScreenshotFigure } from "@/components/site/DasScreenshotFigure";
import { Reveal } from "@/components/site/Reveal";
import { ScreenshotViewerProvider } from "@/components/site/ScreenshotViewer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { docsAssetStudioScreenshots } from "@/content/screenshots";
import { translations, type Lang } from "@/content/translations";
import { I18nProvider, scrollToSection } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/apps/docs-asset-studio")({
  // Arabic is the default; French is selected with ?lang=fr so the choice survives reloads and links.
  validateSearch: (search: Record<string, unknown>): { lang?: "fr" } =>
    search["lang"] === "fr" ? { lang: "fr" } : {},
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => ({ lang: (deps.lang ?? "ar") as Lang }),
  head: ({ loaderData }) => {
    const lang: Lang = loaderData?.lang ?? "ar";
    const meta = translations[lang].docsAssetStudio.meta;
    const url = lang === "fr" ? "/apps/docs-asset-studio?lang=fr" : "/apps/docs-asset-studio";
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
        { rel: "alternate", hrefLang: "ar", href: "/apps/docs-asset-studio" },
        { rel: "alternate", hrefLang: "fr", href: "/apps/docs-asset-studio?lang=fr" },
        { rel: "alternate", hrefLang: "x-default", href: "/apps/docs-asset-studio" },
      ],
    };
  },
  component: DocsAssetStudioPage,
});

const featureIcons: Record<string, LucideIcon> = {
  extract: FileStack,
  gallery: Images,
  similarity: GitCompare,
  duplicates: CopyX,
  naming: Tags,
  editor: Wand2,
};

function DocsAssetStudioPage() {
  const { lang: searchLang } = Route.useSearch();
  const lang: Lang = searchLang ?? "ar";
  const navigate = Route.useNavigate();

  const setLang = useCallback(
    (next: Lang) => {
      navigate({
        to: "/apps/docs-asset-studio",
        search: next === "fr" ? { lang: "fr" } : {},
        replace: true,
        resetScroll: false,
      });
    },
    [navigate],
  );

  // DAS has no FAQ section, so the FAQ nav entry is hidden on this page only (other pages keep it).
  // All entries point to in-page DAS sections that actually exist.
  const dasNavLinks = (["features", "showcase", "teachers", "download"] as const).map(
    (id) => ({ id, label: translations[lang].nav[id] }),
  );

  return (
    <I18nProvider lang={lang} setLang={setLang}>
      <ScreenshotViewerProvider items={docsAssetStudioScreenshots}>
        <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} id="top" className="min-h-screen font-sans">
          <a
            href="#main"
            className="sr-only z-50 rounded-lg bg-navy px-4 py-2 font-semibold text-navy-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
          >
            {translations[lang].common.skipToContent}
          </a>
          <SiteHeader home={true} navLinks={dasNavLinks} />
          <main id="main" tabIndex={-1} className="outline-none">
            <ProductHero lang={lang} />
            <Workflow lang={lang} />
            <FeaturesGrid lang={lang} />
            <GallerySection lang={lang} />
            <SplittingSection lang={lang} />
            <EditorSection lang={lang} />
            <ExportToSabourtiSection lang={lang} />
            <SettingsSection lang={lang} />
            <AppDownloads app="docsAssetStudio" copy={translations[lang].docsAssetStudio.downloads} />
          </main>
          <SiteFooter home={true} navLinks={dasNavLinks} />
        </div>
      </ScreenshotViewerProvider>
    </I18nProvider>
  );
}

/** Product hero: dark Docs Asset Studio identity with a real screenshot of the app. */
function ProductHero({ lang }: { lang: Lang }) {
  const h = translations[lang].docsAssetStudio.hero;

  return (
    <section aria-labelledby="das-hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-dots [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="container-page grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,7fr)] lg:gap-12 lg:pb-28 lg:pt-20">
        <div className="text-start">
          <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-turquoise/40 bg-turquoise/10 px-3.5 py-1.5 text-sm font-bold text-primary shadow-soft backdrop-blur">
            <Monitor className="size-4 text-turquoise" aria-hidden="true" />
            {h.eyebrow}
          </p>

          <h1
            id="das-hero-title"
            className="mt-6 animate-rise font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-balance text-foreground [animation-delay:80ms] sm:text-5xl xl:text-[3.4rem]"
          >
            <span dir="ltr" className="block w-fit">
              {h.productName}
            </span>
            <span className="mt-2 block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-primary sm:text-3xl xl:text-4xl">
              {h.descriptor}
            </span>
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
                <span dir="ltr">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise [animation-delay:200ms]">
          <DasScreenshotFigure
            id="dasMainInterface"
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
            className="[&_img]:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/** Three-step workflow: drop documents → review the extraction → export to Sabourti. */
function Workflow({ lang }: { lang: Lang }) {
  const w = translations[lang].docsAssetStudio.workflow;

  return (
    <section aria-labelledby="das-workflow-title" id="teachers" className="scroll-mt-24 py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="das-workflow-title" eyebrow={w.eyebrow} title={w.title} description={w.description} />
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {w.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-turquoise to-primary font-display text-lg font-extrabold text-white"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div>
              <DasScreenshotFigure
                id="dasFileUpload"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <p className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-turquoise/30 bg-turquoise/10 px-4 py-2 text-xs font-bold text-primary">
                <Files className="size-4 text-turquoise" aria-hidden="true" />
                <span dir="ltr">{w.formatsNote}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Capability grid: extraction, gallery, similarity, duplicates, naming, editor. */
function FeaturesGrid({ lang }: { lang: Lang }) {
  const f = translations[lang].docsAssetStudio.features;

  return (
    <section aria-labelledby="das-features-title" id="features" className="scroll-mt-24 py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="das-features-title" eyebrow={f.eyebrow} title={f.title} description={f.description} />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {f.items.map((item) => {
            const Icon = featureIcons[item.id] ?? LayoutGrid;
            return (
              <Reveal key={item.id}>
                <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/40 hover:shadow-elevated">
                  <span
                    aria-hidden="true"
                    className="flex size-12 items-center justify-center rounded-2xl bg-turquoise/15 text-primary transition-colors duration-300 group-hover:bg-turquoise/25"
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Checkmarked point list used across the detail sections. */
function PointsList({ points }: { points: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-foreground">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-turquoise" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
  );
}

/** Shared two-column detail section: copy on one side, screenshot on the other. */
function DetailSection({
  id,
  headingId,
  eyebrow,
  title,
  description,
  points,
  figure,
  flip = false,
}: {
  /** Optional scroll target id for in-page navigation. */
  id?: string;
  headingId: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  figure: ReactNode;
  flip?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={headingId} className="py-12 sm:py-16">
      <div className="container-page">
        <div
          className={cn(
            "grid items-center gap-10 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-2 lg:gap-14",
          )}
        >
          <div className={cn(flip && "lg:order-2")}>
            <SectionHeading id={headingId} eyebrow={eyebrow} title={title} description={description} />
            <PointsList points={points} />
          </div>
          <div className={cn(flip && "lg:order-1")}>{figure}</div>
        </div>
      </div>
    </section>
  );
}

/** Dedicated section for the extracted-images gallery screenshot. */
function GallerySection({ lang }: { lang: Lang }) {
  const s = translations[lang].docsAssetStudio.gallery;
  return (
    <DetailSection
      id="showcase"
      headingId="das-gallery-title"
      eyebrow={s.eyebrow}
      title={s.title}
      description={s.description}
      points={s.points}
      figure={<DasScreenshotFigure id="dasExtractedGallery" sizes="(min-width: 1024px) 45vw, 100vw" />}
    />
  );
}

/** Image splitting: one composite image segmented into independent cells. */
function SplittingSection({ lang }: { lang: Lang }) {
  const s = translations[lang].docsAssetStudio.splitting;
  return (
    <DetailSection
      headingId="das-splitting-title"
      eyebrow={s.eyebrow}
      title={s.title}
      description={s.description}
      points={s.points}
      flip
      figure={<DasScreenshotFigure id="dasImageSplitting" sizes="(min-width: 1024px) 45vw, 100vw" />}
    />
  );
}

/** Image editor + multi-selection with duplicate detection. */
function EditorSection({ lang }: { lang: Lang }) {
  const s = translations[lang].docsAssetStudio.editor;
  return (
    <section aria-labelledby="das-editor-title" className="py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading id="das-editor-title" eyebrow={s.eyebrow} title={s.title} description={s.description} />
        <PointsList points={s.points} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <DasScreenshotFigure id="dasImageEditor" sizes="(min-width: 1024px) 48vw, 100vw" />
          <DasScreenshotFigure id="dasSelectionTools" sizes="(min-width: 1024px) 48vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

/** Export to Sabourti: the recommended one-click ZIP hand-off. */
function ExportToSabourtiSection({ lang }: { lang: Lang }) {
  const s = translations[lang].docsAssetStudio.exportToSabourti;
  return (
    <DetailSection
      headingId="das-export-title"
      eyebrow={s.eyebrow}
      title={s.title}
      description={s.description}
      points={s.points}
      figure={
        <div>
          <DasScreenshotFigure id="dasExportOptions" sizes="(min-width: 1024px) 45vw, 100vw" />
          <div className="mt-6">
            <Button asChild variant="hero" size="lg">
              <a href="/apps/sabourti">
                {s.cta}
                <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
              </a>
            </Button>
          </div>
        </div>
      }
    />
  );
}

/** Settings panel: margins, minimum size, similarity sensitivity, naming template. */
function SettingsSection({ lang }: { lang: Lang }) {
  const s = translations[lang].docsAssetStudio.settings;
  return (
    <DetailSection
      headingId="das-settings-title"
      eyebrow={s.eyebrow}
      title={s.title}
      description={s.description}
      points={s.points}
      flip
      figure={<DasScreenshotFigure id="dasAppSettings" sizes="(min-width: 1024px) 38vw, (min-width: 768px) 60vw, 90vw" />}
    />
  );
}
