import { Minus, Square, X } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { LogoMark } from "./Logo";
import { ScreenshotImage } from "./ScreenshotFigure";

/** Hero visual: the real Sabourti start screen in a Windows-style window frame. */
export function HeroScreenshot({ className }: { className?: string }) {
  const { t } = useI18n();

  return (
    <figure className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-hero-glow opacity-90 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated ring-1 ring-foreground/5">
        <div
          aria-hidden="true"
          dir="ltr"
          className="flex h-9 items-center justify-between border-b border-border/70 bg-muted/80 ps-3"
        >
          <div className="flex min-w-0 items-center gap-2 text-[11px] font-semibold text-muted-foreground">
            <LogoMark className="h-5" />
            <span className="font-latin">Sabourti</span>
          </div>
          <div className="flex h-full items-stretch text-muted-foreground">
            <span className="flex w-10 items-center justify-center">
              <Minus className="size-3" />
            </span>
            <span className="flex w-10 items-center justify-center">
              <Square className="size-2.5" />
            </span>
            <span className="flex w-10 items-center justify-center">
              <X className="size-3.5" />
            </span>
          </div>
        </div>
        <ScreenshotImage id="dashboard" priority sizes="(min-width: 1280px) 680px, (min-width: 1024px) 54vw, 100vw" />
      </div>

      <figcaption className="mt-5 text-center text-sm font-semibold text-muted-foreground">
        {t.screenshots.dashboard.caption}
      </figcaption>
    </figure>
  );
}
