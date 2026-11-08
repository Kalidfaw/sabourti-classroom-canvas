import { ArrowLeft, CheckCircle2, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToSection, useI18n } from "@/lib/i18n";

import { DownloadCta } from "./DownloadCta";
import { WhiteboardMockup } from "./WhiteboardMockup";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
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

          <h1
            id="hero-title"
            className="mt-6 animate-rise font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-balance text-foreground [animation-delay:80ms] sm:text-5xl xl:text-[3.6rem]"
          >
            {h.titleStart} <span className="text-gradient">{h.titleHighlight}</span> {h.titleEnd}
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
                {t.cta.discover}
                <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
              </a>
            </Button>
            <DownloadCta variant="soft" size="xl" />
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

        <WhiteboardMockup className="animate-rise [animation-delay:200ms]" />
      </div>
    </section>
  );
}
