import { Clock, Monitor, Package, AppWindow, Download, Smartphone, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, type AppKey, type DownloadInfo } from "@/content/site-config";
import type { Dictionary } from "@/content/translations";
import { useI18n } from "@/lib/i18n";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type AppDownloadsCopy = Dictionary["sabourtiApp"]["downloads"] & {
  android?: { title: string; description: string };
};

/**
 * Dual download section for the app pages (Sabourti and Docs Asset Studio):
 * one Portable build and one Installer, plus an optional Android APK card when the
 * app ships one. Every option with a real GitHub Releases URL renders a direct
 * download button — never a fake link. Options without a URL render a clear
 * "coming soon / to be confirmed" state.
 */
export function AppDownloads({ app, copy }: { app: AppKey; copy: AppDownloadsCopy }) {
  const { t } = useI18n();
  const tbc = t.common.toBeConfirmed;
  const options = siteConfig.apps[app];

  const cards: Array<{
    key: string;
    icon: LucideIcon;
    title: string;
    description: string;
    info: DownloadInfo;
  }> = [
    { key: "portable", icon: Package, title: copy.portable.title, description: copy.portable.description, info: options.portable },
    { key: "installer", icon: AppWindow, title: copy.installer.title, description: copy.installer.description, info: options.installer },
    ...(options.android
      ? [
          {
            key: "android",
            icon: Smartphone,
            title: copy.android?.title ?? "",
            description: copy.android?.description ?? "",
            info: options.android,
          },
        ]
      : []),
  ];

  return (
    <section id="download" tabIndex={-1} aria-labelledby="app-downloads-title" className="scroll-mt-24 py-12 outline-none sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-8 text-navy-foreground shadow-elevated sm:p-12 lg:p-14">
            <div aria-hidden="true" className="absolute inset-0 bg-dots-light [mask-image:radial-gradient(60%_80%_at_80%_20%,black,transparent)]" />
            <div aria-hidden="true" className="absolute -end-24 -top-24 size-80 rounded-full bg-primary/40 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-32 -start-16 size-72 rounded-full bg-turquoise/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center">
              <div>
                <SectionHeading
                  id="app-downloads-title"
                  eyebrow={copy.eyebrow}
                  title={copy.title}
                  description={copy.description}
                  tone="light"
                />
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-muted">
                  <Monitor className="size-4" aria-hidden="true" />
                  {copy.note}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {cards.map(({ key, icon: Icon, title, description, info }) => {
                  const hasUrl = Boolean(info.url && info.url.trim());
                  return (
                    <div
                      key={key}
                      className="rounded-3xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 backdrop-blur"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-turquoise/20 text-turquoise">
                          <Icon className="size-6" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-bold text-navy-foreground">{title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-navy-muted">{description}</p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-navy-foreground/10 pt-5">
                        <dl className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-navy-muted">
                          <div>
                            <dt>{t.download.specs.version}</dt>
                            <dd className="mt-0.5 font-semibold text-navy-foreground">{info.version ?? tbc}</dd>
                          </div>
                          <div>
                            <dt>{t.download.specs.fileSize}</dt>
                            <dd className="mt-0.5 font-semibold text-navy-foreground">{info.fileSize ?? tbc}</dd>
                          </div>
                          {info.hash ? (
                            <div className="min-w-0 basis-full">
                              <dt>{t.download.specs.sha256}</dt>
                              <dd
                                dir="ltr"
                                className="mt-0.5 break-all font-mono text-[0.65rem] font-semibold text-navy-foreground"
                              >
                                {info.hash}
                              </dd>
                            </div>
                          ) : null}
                        </dl>

                        {hasUrl ? (
                          <Button asChild variant="on-navy" size="lg">
                            <a href={info.url ?? undefined} rel="noopener">
                              <Download aria-hidden="true" />
                              {title}
                            </a>
                          </Button>
                        ) : (
                          <span
                            role="status"
                            className="inline-flex items-center gap-2 rounded-full border border-dashed border-navy-foreground/30 px-4 py-2 text-xs font-bold text-navy-muted"
                          >
                            <Clock className="size-3.5" aria-hidden="true" />
                            {copy.pendingTitle}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
                <p className="text-xs leading-relaxed text-navy-muted">{copy.pendingDescription}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
