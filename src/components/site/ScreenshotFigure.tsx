import { Maximize2 } from "lucide-react";

import { getScreenshot, type ScreenshotId } from "@/content/screenshots";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { useScreenshotViewer } from "./ScreenshotViewer";

/**
 * A real app screenshot at its natural proportions (never cropped or stretched).
 * Clicking opens the full-size viewer.
 */
export function ScreenshotImage({
  id,
  sizes,
  priority = false,
  className,
}: {
  id: ScreenshotId;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const { t } = useI18n();
  const open = useScreenshotViewer();
  const shot = getScreenshot(id);
  const copy = t.screenshots[id];

  return (
    <button
      type="button"
      onClick={() => open(id)}
      className={cn(
        "group/shot relative block w-full cursor-zoom-in overflow-hidden bg-card text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <img
        src={shot.src}
        srcSet={shot.srcSet}
        sizes={sizes}
        width={shot.width}
        height={shot.height}
        alt={copy.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full transition-transform duration-500 group-hover/shot:scale-[1.015]"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 end-3 flex size-9 items-center justify-center rounded-full bg-navy/80 text-navy-foreground opacity-0 shadow-soft backdrop-blur transition-opacity duration-300 group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
      >
        <Maximize2 className="size-4" />
      </span>
      <span className="sr-only">{t.showcase.enlarge}</span>
    </button>
  );
}

/** Screenshot in a rounded frame with its caption in the current language. */
export function ScreenshotFigure({
  id,
  sizes,
  tone = "default",
  className,
}: {
  id: ScreenshotId;
  sizes: string;
  tone?: "default" | "light";
  className?: string;
}) {
  const { t } = useI18n();

  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
          tone === "light" ? "border-navy-foreground/15" : "border-border",
        )}
      >
        <ScreenshotImage id={id} sizes={sizes} />
      </div>
      <figcaption
        className={cn(
          "text-sm font-semibold leading-relaxed",
          tone === "light" ? "text-navy-muted" : "text-muted-foreground",
        )}
      >
        {t.screenshots[id].caption}
      </figcaption>
    </figure>
  );
}
