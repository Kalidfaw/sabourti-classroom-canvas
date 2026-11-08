import { ImageIcon } from "lucide-react";

import { siteConfig, type ScreenshotSlot } from "@/content/site-config";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ScreenshotFrame({ slot, label, large }: { slot: ScreenshotSlot; label: string; large?: boolean }) {
  const { t } = useI18n();

  return (
    <figure className="group flex h-full flex-col gap-3">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-elevated",
          large ? "aspect-[16/10]" : "aspect-[16/10]",
          slot.src ? "border-border" : "border-dashed border-primary/30",
        )}
      >
        {slot.src ? (
          <img src={slot.src} alt={label} loading="lazy" className="size-full object-cover" />
        ) : (
          <div
            data-screenshot-placeholder={slot.id}
            className="flex size-full flex-col items-center justify-center gap-3 bg-paper-grid p-6 text-center [--paper-unit:9px]"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-card text-primary shadow-soft">
              <ImageIcon className="size-5" aria-hidden="true" />
            </span>
            <span className={cn("font-display font-bold text-foreground", large ? "text-xl" : "text-base")}>
              {label}
            </span>
            <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-soft">
              {t.showcase.placeholder}
            </span>
          </div>
        )}
      </div>
      <figcaption className="text-sm font-semibold text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

export function Showcase() {
  const { t } = useI18n();
  const s = t.showcase;
  const [main, ...rest] = siteConfig.screenshots;

  return (
    <section
      id="showcase"
      tabIndex={-1}
      aria-labelledby="showcase-title"
      className="relative border-y border-border bg-muted/50 py-24 outline-none sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          id="showcase-title"
          eyebrow={s.eyebrow}
          title={s.title}
          description={s.description}
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-3">
            <ScreenshotFrame slot={main} label={s.slots[main.id]} large />
          </Reveal>
          {rest.map((slot, i) => (
            <Reveal key={slot.id} delay={(i + 1) * 80} className="lg:[&_.aspect-\[16\/10\]]:aspect-[16/7.2]">
              <ScreenshotFrame slot={slot} label={s.slots[slot.id]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
