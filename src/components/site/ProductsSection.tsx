import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

import { DasScreenshotFigure } from "./DasScreenshotFigure";
import { Reveal } from "./Reveal";
import { ScreenshotFigure } from "./ScreenshotFigure";
import { SectionHeading } from "./SectionHeading";

/** Equal-weight cards for the two Sabourti Education products. */
export function ProductsSection() {
  const { t } = useI18n();
  const p = t.home.products;

  const cards = [
    {
      key: "sabourti" as const,
      eyebrow: p.sabourti.tagline,
      name: p.sabourti.name,
      description: p.sabourti.description,
      features: p.sabourti.features,
      cta: p.sabourti.cta,
      href: "/apps/sabourti",
      figure: (
        <ScreenshotFigure
          id="lessonGeometry"
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
        />
      ),
    },
    {
      key: "docs-asset-studio" as const,
      eyebrow: p.docsAssetStudio.tagline,
      name: p.docsAssetStudio.name,
      description: p.docsAssetStudio.description,
      features: p.docsAssetStudio.features,
      cta: p.docsAssetStudio.cta,
      href: "/apps/docs-asset-studio",
      figure: (
        <DasScreenshotFigure
          id="dasMainInterface"
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
        />
      ),
    },
  ];

  return (
    <section id="products" tabIndex={-1} aria-labelledby="products-title" className="scroll-mt-24 py-12 outline-none sm:py-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="products-title"
            eyebrow={p.eyebrow}
            title={p.title}
            description={p.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {cards.map((card, i) => (
            <Reveal key={card.key} delay={i * 120}>
              <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-elevated">
                <div className="border-b border-border bg-muted/30 p-6 sm:p-8">
                  {card.figure}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-sm font-bold text-primary">{card.eyebrow}</p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-foreground">
                    {card.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{card.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-turquoise" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <Button asChild variant="hero" size="lg">
                      <a href={card.href}>
                        {card.cta}
                        <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
