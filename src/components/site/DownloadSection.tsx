import { Clock, Download, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, type DownloadInfo } from "@/content/site-config";
import { useI18n } from "@/lib/i18n";

import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";
import { ScreenshotFigure } from "./ScreenshotFigure";
import { SectionHeading } from "./SectionHeading";

export function DownloadSection({ download = siteConfig.download }: { download?: DownloadInfo }) {
  const { t, lang } = useI18n();
  const d = t.download;
  const tbc = t.common.toBeConfirmed;
  const hasUrl = Boolean(download.url && download.url.trim());

  const specs: { label: string; value: string | null; ltr?: boolean }[] = [
    { label: d.specs.platform, value: d.platformValue, ltr: true },
    { label: d.specs.version, value: download.version, ltr: true },
    { label: d.specs.fileSize, value: download.fileSize, ltr: true },
    { label: d.specs.requirements, value: download.requirements?.[lang] ?? null },
  ];

  return (
    <section id="download" tabIndex={-1} aria-labelledby="download-title" className="py-12 outline-none sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-8 text-navy-foreground shadow-elevated sm:p-12 lg:p-16">
            <div aria-hidden="true" className="absolute inset-0 bg-dots-light [mask-image:radial-gradient(60%_80%_at_80%_20%,black,transparent)]" />
            <div aria-hidden="true" className="absolute -end-24 -top-24 size-80 rounded-full bg-primary/40 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-32 -start-16 size-72 rounded-full bg-turquoise/20 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center">
              <div>
                <LogoMark framed className="h-16" />
                <SectionHeading
                  id="download-title"
                  eyebrow={d.eyebrow}
                  title={d.title}
                  description={d.description}
                  tone="light"
                  className="mt-6"
                />

                <div className="mt-8">
                  {hasUrl ? (
                    <Button asChild variant="on-navy" size="xl">
                      <a href={download.url ?? undefined} rel="noopener">
                        <Download aria-hidden="true" />
                        {d.button}
                      </a>
                    </Button>
                  ) : (
                    <div
                      role="status"
                      className="inline-flex max-w-xl items-start gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5 backdrop-blur"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-turquoise/20 text-turquoise">
                        <Clock className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-lg font-bold text-navy-foreground">{d.pendingTitle}</p>
                        <p className="mt-1 text-sm leading-relaxed text-navy-muted">{d.pendingDescription}</p>
                      </div>
                    </div>
                  )}
                </div>

                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-muted">
                  <Monitor className="size-4" aria-hidden="true" />
                  {d.platformNote}
                </p>
              </div>

              <div className="space-y-6">
              <ScreenshotFigure
                id="welcome"
                tone="light"
                sizes="(min-width: 1280px) 440px, (min-width: 1024px) 36vw, 100vw"
              />
              <div className="rounded-3xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 backdrop-blur sm:p-8">
                <h3 className="font-display text-lg font-bold text-navy-foreground">{d.specsTitle}</h3>
                <dl className="mt-5 divide-y divide-navy-foreground/10">
                  {specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4 py-3.5">
                      <dt className="text-sm text-navy-muted">{s.label}</dt>
                      <dd
                        dir={s.value && s.ltr ? "ltr" : undefined}
                        className={
                          s.value
                            ? "text-end font-semibold text-navy-foreground"
                            : "rounded-md border border-dashed border-navy-foreground/25 px-2 py-0.5 text-xs font-semibold text-navy-muted"
                        }
                        data-placeholder={s.value ? undefined : "true"}
                      >
                        {s.value ?? tbc}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
