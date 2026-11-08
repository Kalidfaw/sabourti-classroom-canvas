import {
  DraftingCompass,
  Eraser,
  FileStack,
  Grid3x3,
  Highlighter,
  MousePointer2,
  PenLine,
  Save,
  Shapes,
  Type,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const featureIcons: Record<string, LucideIcon> = {
  draw: PenLine,
  pages: FileStack,
  backgrounds: Grid3x3,
  geometry: DraftingCompass,
  teacher: Highlighter,
};

const drawToolIcons: LucideIcon[] = [PenLine, PenLine, Eraser, MousePointer2, Type, Shapes];
const backgroundClasses = ["bg-paper-plain", "bg-paper-ruled", "bg-paper-grid", "bg-paper-seyes"];

function DrawVisual({ tags }: { tags: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <ul className="flex flex-wrap content-start gap-2">
        {tags.map((tag, i) => {
          const Icon = drawToolIcons[i] ?? PenLine;
          return (
            <li
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold text-secondary-foreground"
            >
              <Icon className="size-3.5 text-primary" aria-hidden="true" />
              {tag}
            </li>
          );
        })}
      </ul>
      <div
        aria-hidden="true"
        className="relative h-36 overflow-hidden rounded-2xl border border-border bg-paper-grid [--paper-unit:7px]"
      >
        <svg viewBox="0 0 300 140" className="absolute inset-0 size-full" fill="none">
          <path
            d="M24 92 C 48 40, 72 40, 84 80 S 120 120, 140 70 S 180 20, 200 64"
            pathLength={1}
            className="draw-path stroke-ink transition-[stroke-dashoffset] duration-1000 group-hover:[stroke-dashoffset:0]"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect x="214" y="36" width="62" height="62" rx="10" className="stroke-ink-red" strokeWidth="3" strokeDasharray="6 6" />
          <circle cx="245" cy="67" r="18" className="fill-primary/20 stroke-primary" strokeWidth="3" />
          <rect x="16" y="108" width="120" height="16" rx="8" className="fill-highlight/60" />
        </svg>
      </div>
    </div>
  );
}

function PagesVisual() {
  return (
    <div aria-hidden="true" className="relative h-36">
      {["bg-paper-ruled", "bg-paper-grid", "bg-paper-seyes"].map((bg, i) => (
        <span
          key={bg}
          className={cn(
            "absolute top-2 h-28 w-[58%] rounded-xl border border-border shadow-soft transition-transform duration-500 [--paper-unit:5px]",
            bg,
            i === 0 && "start-0 -rotate-6 group-hover:-translate-x-1 group-hover:-rotate-9",
            i === 1 && "start-[18%] rotate-0",
            i === 2 && "start-[36%] rotate-6 group-hover:translate-x-1 group-hover:rotate-9",
          )}
        />
      ))}
      <span className="absolute bottom-0 end-0 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground shadow-soft">
        <Save className="size-3.5" />1 · 2 · 3
      </span>
    </div>
  );
}

function BackgroundsVisual({ tags }: { tags: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {tags.map((tag, i) => (
        <li key={tag} className="flex flex-col gap-1.5">
          <span
            aria-hidden="true"
            className={cn(
              "h-16 rounded-xl border border-border transition-transform duration-300 group-hover:-translate-y-0.5 [--paper-unit:5px]",
              backgroundClasses[i],
            )}
          />
          <span className="text-sm font-semibold text-secondary-foreground">{tag}</span>
        </li>
      ))}
    </ul>
  );
}

function GeometryVisual() {
  return (
    <div aria-hidden="true" className="relative h-36 overflow-hidden rounded-2xl border border-border bg-paper-grid [--paper-unit:6px]">
      <svg viewBox="0 0 300 140" className="absolute inset-0 size-full" fill="none" direction="ltr">
        <g className="transition-transform duration-700 group-hover:-rotate-3" style={{ transformOrigin: "150px 100px" }}>
          <rect x="30" y="82" width="240" height="32" rx="6" className="fill-turquoise/15 stroke-turquoise" strokeWidth="2" />
          {Array.from({ length: 23 }, (_, i) => (
            <line key={i} x1={40 + i * 10} x2={40 + i * 10} y1="82" y2={i % 5 === 0 ? 96 : 90} className="stroke-turquoise" strokeWidth="1.5" />
          ))}
        </g>
        <path d="M70 70 L190 70 L70 18 Z" className="fill-primary/10 stroke-primary" strokeWidth="2" strokeLinejoin="round" />
        <path d="M70 58 H82 V70" className="stroke-primary" strokeWidth="1.5" />
        <path d="M210 70 L250 22 L276 70 Z" className="stroke-ink" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function TeacherVisual() {
  return (
    <div aria-hidden="true" className="relative h-36 overflow-hidden rounded-2xl border border-border bg-paper-ruled px-5 pt-5 [--paper-unit:8px]">
      <div className="space-y-3">
        <span className="block h-2.5 w-[70%] rounded-full bg-ink/25" />
        <span className="relative block w-[85%]">
          <span className="absolute -inset-x-1 -inset-y-1.5 origin-[inline-start] scale-x-90 rounded-md bg-highlight/70 transition-transform duration-500 group-hover:scale-x-100" />
          <span className="relative block h-2.5 rounded-full bg-ink/45" />
        </span>
        <span className="block h-2.5 w-[55%] rounded-full bg-ink/25" />
      </div>
      <span className="absolute bottom-6 end-8 flex size-4">
        <span className="absolute inset-0 animate-ping rounded-full bg-laser/60" />
        <span className="relative size-4 rounded-full bg-laser ring-4 ring-laser/20" />
      </span>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  className,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
}) {
  return (
    <Reveal delay={delay} as="article" className={cn("h-full", className)}>
      <div className="group flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated sm:p-7">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold leading-snug text-foreground">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="mt-auto">{children}</div>
      </div>
    </Reveal>
  );
}

export function Features() {
  const { t } = useI18n();
  const f = t.features;
  const item = (id: string) => {
    const found = f.items.find((i) => i.id === id);
    if (!found) throw new Error(`Missing feature copy: ${id}`);
    return found;
  };
  const card = (id: string) => ({
    icon: featureIcons[id] ?? PenLine,
    title: item(id).title,
    description: item(id).description,
  });

  return (
    <section id="features" tabIndex={-1} aria-labelledby="features-title" className="py-24 outline-none sm:py-32">
      <div className="container-page">
        <SectionHeading id="features-title" eyebrow={f.eyebrow} title={f.title} description={f.description} />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <FeatureCard {...card("draw")} className="lg:col-span-2">
            <DrawVisual tags={item("draw").tags} />
          </FeatureCard>
          <FeatureCard {...card("pages")} delay={80}>
            <PagesVisual />
          </FeatureCard>
          <FeatureCard {...card("backgrounds")}>
            <BackgroundsVisual tags={item("backgrounds").tags} />
          </FeatureCard>
          <FeatureCard {...card("geometry")} delay={80}>
            <GeometryVisual />
          </FeatureCard>
          <FeatureCard {...card("teacher")} delay={160}>
            <TeacherVisual />
            <ul className="mt-4 flex flex-wrap gap-2">
              {item("teacher").tags.map((tag) => (
                <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
