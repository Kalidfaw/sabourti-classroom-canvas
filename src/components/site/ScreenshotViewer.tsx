import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useState, type KeyboardEvent, type ReactNode } from "react";

import { screenshots, type ScreenshotId } from "@/content/screenshots";
import { useI18n } from "@/lib/i18n";

const ViewerContext = createContext<((id: ScreenshotId) => void) | null>(null);

export function useScreenshotViewer() {
  const open = useContext(ViewerContext);
  if (!open) throw new Error("useScreenshotViewer must be used inside ScreenshotViewerProvider");
  return open;
}

/** Full-size, click-to-enlarge viewer for every screenshot on the page, with previous / next. */
export function ScreenshotViewerProvider({ children }: { children: ReactNode }) {
  const { t, dir } = useI18n();
  const v = t.showcase.viewer;
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((id: ScreenshotId) => {
    const i = screenshots.findIndex((s) => s.id === id);
    if (i >= 0) setIndex(i);
  }, []);

  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? i : (i + delta + screenshots.length) % screenshots.length)),
    [],
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    // Follow reading direction: in Arabic (RTL) the left arrow moves forward.
    const forward = dir === "rtl" ? e.key === "ArrowLeft" : e.key === "ArrowRight";
    step(forward ? 1 : -1);
  };

  const shot = index === null ? null : screenshots[index];
  const copy = shot ? t.screenshots[shot.id] : null;
  const Prev = dir === "rtl" ? ChevronRight : ChevronLeft;
  const Next = dir === "rtl" ? ChevronLeft : ChevronRight;

  const value = useMemo(() => open, [open]);

  return (
    <ViewerContext.Provider value={value}>
      {children}
      <DialogPrimitive.Root open={shot !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            dir={dir}
            onKeyDown={onKeyDown}
            aria-label={v.label}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-3 outline-none sm:p-8 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          >
            {shot && copy ? (
              <>
                <DialogPrimitive.Title className="sr-only">{copy.caption}</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">{copy.alt}</DialogPrimitive.Description>

                <div className="flex w-full max-w-7xl items-center justify-between gap-3 text-navy-foreground">
                  <span dir="ltr" className="rounded-full bg-navy-foreground/10 px-3 py-1 text-sm font-bold tabular-nums">
                    {(index ?? 0) + 1} / {screenshots.length}
                  </span>
                  <DialogPrimitive.Close
                    className="flex size-11 items-center justify-center rounded-full bg-navy-foreground/10 transition-colors hover:bg-navy-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
                    aria-label={v.close}
                  >
                    <X className="size-5" aria-hidden="true" />
                  </DialogPrimitive.Close>
                </div>

                <div className="relative flex min-h-0 w-full max-w-7xl flex-1 items-center justify-center">
                  <img
                    key={shot.id}
                    src={shot.original}
                    width={shot.width}
                    height={shot.height}
                    alt={copy.alt}
                    decoding="async"
                    className="max-h-full w-auto max-w-full rounded-xl bg-card object-contain shadow-elevated ring-1 ring-navy-foreground/15"
                  />
                </div>

                <div className="flex w-full max-w-7xl items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label={v.previous}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
                  >
                    <Prev className="size-5" aria-hidden="true" />
                  </button>
                  <p className="text-center text-sm font-semibold text-navy-foreground text-pretty sm:text-base">
                    {copy.caption}
                  </p>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label={v.next}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
                  >
                    <Next className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </>
            ) : null}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </ViewerContext.Provider>
  );
}
