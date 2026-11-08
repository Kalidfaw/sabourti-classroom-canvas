import {
  Crosshair,
  DraftingCompass,
  Eraser,
  Grid3x3,
  Highlighter,
  Info,
  Minus,
  MousePointer2,
  PenLine,
  Plus,
  Ruler,
  Save,
  Shapes,
  Square,
  Type,
  X,
} from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { LogoMark } from "./Logo";

const tools = [
  { icon: MousePointer2, active: false },
  { icon: PenLine, active: true },
  { icon: Highlighter, active: false },
  { icon: Eraser, active: false },
  { icon: Type, active: false },
  { icon: Shapes, active: false },
  { icon: Ruler, active: false },
  { icon: DraftingCompass, active: false },
  { icon: Crosshair, active: false },
];

const inkColors = ["bg-ink", "bg-ink-red", "bg-ink-green", "bg-highlight"];

const pageBackgrounds = ["bg-paper-plain", "bg-paper-ruled", "bg-paper-grid", "bg-paper-seyes"];

const thumbs = ["bg-paper-ruled", "bg-paper-seyes", "bg-paper-grid", "bg-paper-plain"];

/**
 * Illustrative (not real) interface preview of the Sabourti desktop app, built from UI elements.
 * The interface itself is hidden from assistive tech; the figcaption describes it.
 */
export function WhiteboardMockup({ className }: { className?: string }) {
  const { t, dir } = useI18n();
  const m = t.mockup;

  return (
    <figure className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-hero-glow opacity-90 blur-2xl"
      />

      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated ring-1 ring-foreground/5"
      >
        {/* Window title bar (Windows-style) */}
        <div
          dir="ltr"
          className="flex h-9 items-center justify-between border-b border-border/70 bg-muted/80 ps-3"
        >
          <div className="flex min-w-0 items-center gap-2 text-[11px] font-semibold text-muted-foreground">
            <LogoMark className="size-4 rounded-[5px] shadow-none" />
            <span className="font-latin">Sabourti</span>
            <span className="opacity-40">—</span>
            <span dir={dir} className="truncate">
              {m.windowTitle}
            </span>
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

        {/* Top bar */}
        <div className="flex h-10 items-center justify-between gap-3 border-b border-border/70 bg-card px-3">
          <div className="flex items-center gap-1.5">
            <Grid3x3 className="size-3.5 text-muted-foreground" />
            {pageBackgrounds.map((bg, i) => (
              <span
                key={bg}
                style={{ ["--paper-unit" as string]: "2px" }}
                className={cn(
                  "size-5 rounded-[5px] border border-border",
                  bg,
                  i === 3 && "ring-2 ring-primary ring-offset-1 ring-offset-card",
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
            <span className="hidden sm:inline">{m.page}</span>
            <span className="inline-flex items-center gap-1 rounded-md bg-accent px-2 py-1 text-accent-foreground">
              <Save className="size-3" />
              {m.saved}
            </span>
          </div>
        </div>

        <div className="flex">
          {/* Toolbar */}
          <div className="flex flex-col items-center gap-1 border-e border-border/70 bg-card p-1.5 sm:p-2">
            {tools.map(({ icon: Icon, active }, i) => (
              <span
                key={i}
                className={cn(
                  "flex size-6 items-center justify-center rounded-lg sm:size-8",
                  active
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground",
                  i > 5 && "hidden sm:flex",
                )}
              >
                <Icon className="size-3.5 sm:size-4" />
              </span>
            ))}
            <span className="my-1 h-px w-5 bg-border" />
            {inkColors.map((c, i) => (
              <span
                key={c}
                className={cn(
                  "size-3.5 rounded-full sm:size-4",
                  c,
                  i === 0 && "ring-2 ring-ink/30 ring-offset-1 ring-offset-card",
                )}
              />
            ))}
          </div>

          {/* Canvas */}
          <div className="relative aspect-[16/10] flex-1 overflow-hidden bg-paper-seyes [--paper-unit:6px] sm:[--paper-unit:8px]">
            <span className="absolute inset-y-0 start-[11%] w-px bg-paper-margin" />

            <p className="absolute start-[15%] top-[5%] font-display text-xl font-extrabold text-ink underline decoration-ink-red decoration-wavy decoration-2 underline-offset-[10px] sm:text-3xl">
              {m.lessonHeading}
            </p>

            <svg
              viewBox="0 0 640 400"
              direction="ltr"
              className="absolute inset-0 size-full"
              fill="none"
            >
              {/* Pie divided in quarters */}
              <path d="M170 230 L170 152 A78 78 0 0 1 248 230 Z" className="fill-primary/20" />
              <path d="M170 230 L248 230 A78 78 0 0 1 170 308 Z" className="fill-primary/20" />
              <circle
                cx="170"
                cy="230"
                r="78"
                pathLength={1}
                className="draw-path animate-draw stroke-ink"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M170 152 V308 M92 230 H248"
                pathLength={1}
                className="draw-path animate-draw stroke-ink [animation-delay:1.2s]"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Arrow */}
              <path
                d="M258 168 C 282 132, 300 128, 318 150"
                pathLength={1}
                className="draw-path animate-draw stroke-ink-red [animation-delay:1.8s]"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M306 148 L319 152 L320 138"
                className="stroke-ink-red"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Highlighter behind 1/2 */}
              <rect x="402" y="166" width="56" height="96" rx="14" className="fill-highlight/60" />

              {/* 2/4 = 1/2 */}
              <g className="fill-ink font-display" fontWeight="800" fontSize="38" textAnchor="middle">
                <text x="345" y="203">2</text>
                <text x="345" y="254">4</text>
                <text x="390" y="230" fontSize="34">=</text>
                <text x="430" y="203">1</text>
                <text x="430" y="254">2</text>
              </g>
              <path d="M327 214 H363 M412 214 H448" className="stroke-ink" strokeWidth="3.5" strokeLinecap="round" />

              {/* Ruler */}
              <g transform="translate(300 318) rotate(-6)">
                <rect width="290" height="40" rx="7" className="fill-turquoise/15 stroke-turquoise" strokeWidth="2" />
                {Array.from({ length: 28 }, (_, i) => (
                  <line
                    key={i}
                    x1={10 + i * 10}
                    x2={10 + i * 10}
                    y1="0"
                    y2={i % 5 === 0 ? 15 : 8}
                    className="stroke-turquoise"
                    strokeWidth="1.5"
                  />
                ))}
                {[0, 5, 10, 15, 20, 25].map((n) => (
                  <text
                    key={n}
                    x={10 + n * 10}
                    y="30"
                    fontSize="10"
                    textAnchor="middle"
                    className="fill-accent-foreground font-sans"
                    fontWeight="700"
                  >
                    {n / 5}
                  </text>
                ))}
              </g>

              {/* Set square */}
              <g>
                <path d="M520 92 L610 92 L520 202 Z" className="fill-primary/10 stroke-primary" strokeWidth="2" strokeLinejoin="round" />
                <path d="M536 108 L572 108 L536 152 Z" className="stroke-primary/50" strokeWidth="1.5" />
                <path d="M520 106 H534 V92" className="stroke-primary" strokeWidth="1.5" />
              </g>

              {/* Laser pointer */}
              <circle cx="474" cy="130" r="18" className="animate-laser origin-fill-center fill-laser/40" />
              <circle cx="474" cy="130" r="6" className="fill-laser" />
              <circle cx="474" cy="130" r="2.5" className="fill-paper" />
            </svg>
          </div>
        </div>

        {/* Pages strip */}
        <div className="flex items-center gap-2 border-t border-border/70 bg-muted/60 px-3 py-2">
          {thumbs.map((bg, i) => (
            <span key={i} className="flex flex-col items-center gap-0.5">
              <span
                style={{ ["--paper-unit" as string]: "2px" }}
                className={cn(
                  "h-7 w-11 rounded-md border border-border sm:h-8 sm:w-14",
                  bg,
                  i === 1 && "ring-2 ring-primary ring-offset-1 ring-offset-muted",
                )}
              />
              <span className="text-[9px] font-bold text-muted-foreground">{i + 1}</span>
            </span>
          ))}
          <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-md border border-dashed border-muted-foreground/40 text-muted-foreground sm:h-8 sm:w-8">
            <Plus className="size-3.5" />
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <div
        aria-hidden="true"
        className="absolute -start-4 top-[30%] hidden animate-float items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 text-xs font-bold text-foreground shadow-soft backdrop-blur md:flex"
      >
        <span
          style={{ ["--paper-unit" as string]: "2px" }}
          className="size-5 rounded-md border border-border bg-paper-seyes"
        />
        {m.chipSeyes}
      </div>
      <div
        aria-hidden="true"
        className="absolute -end-3 bottom-[22%] hidden animate-float-delayed items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 text-xs font-bold text-foreground shadow-soft backdrop-blur md:flex"
      >
        <span className="relative flex size-3">
          <span className="absolute inset-0 animate-ping rounded-full bg-laser/60" />
          <span className="relative size-3 rounded-full bg-laser" />
        </span>
        {m.chipLaser}
      </div>

      <figcaption className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
        <Info className="size-3.5" aria-hidden="true" />
        <span>{m.caption}</span>
        <span className="sr-only">. {m.description}</span>
      </figcaption>
    </figure>
  );
}
