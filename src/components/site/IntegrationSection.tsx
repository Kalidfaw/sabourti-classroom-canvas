import { ArrowDown, FileArchive, Import, Images } from "lucide-react";

import { useI18n } from "@/lib/i18n";

import { DasScreenshotFigure } from "./DasScreenshotFigure";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** The honest, hand-over flow between Docs Asset Studio (export ZIP) and Sabourti (import ZIP). */
export function IntegrationSection() {
  const { t } = useI18n();
  const i = t.home.integration;
  const icons = [Images, FileArchive, Import] as const;

  return (
    <section id="integration" tabIndex={-1} aria-labelledby="integration-title" className="scroll-mt-24 py-12 outline-none sm:py-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="integration-title"
            eyebrow={i.eyebrow}
            title={i.title}
            description={i.description}
          />
        </Reveal>

        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {i.steps.map((step, index) => {
            const Icon = icons[index] ?? Images;
            return (
              <Reveal key={step.title} as="li" delay={index * 110}>
                <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground"
                    >
                      <Icon className="size-6" />
                    </span>
                    <span aria-hidden="true" className="font-display text-3xl font-extrabold text-border">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  {index < i.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -end-5 top-1/2 z-10 hidden -translate-y-1/2 translate-y-3 sm:block"
                    >
                      <ArrowDown className="size-5 -rotate-90 text-muted-foreground/60 ltr:rotate-90" />
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>

        <div className="mt-10">
          <DasScreenshotFigure
            id="dasExportOptions"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="mx-auto max-w-3xl"
          />
          <p className="mt-5 text-center text-xs font-semibold text-muted-foreground">{i.note}</p>
        </div>
      </div>
    </section>
  );
}
