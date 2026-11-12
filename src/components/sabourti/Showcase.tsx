import { GraduationCap, Presentation, Ruler, Shapes, type LucideIcon } from "lucide-react";

import { screenshotsFor, showcaseGroups, type ShowcaseGroupId } from "@/content/screenshots";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { ScreenshotFigure } from "./ScreenshotFigure";
import { SectionHeading } from "./SectionHeading";

const groupIcons: Record<ShowcaseGroupId, LucideIcon> = {
  lessons: Presentation,
  geometry: Shapes,
  measurement: Ruler,
  teacher: GraduationCap,
};

export function Showcase() {
  const { t } = useI18n();
  const s = t.showcase;

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

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {showcaseGroups.map((groupId, gi) => {
            const group = s.groups[groupId];
            const shots = screenshotsFor(groupId);
            const Icon = groupIcons[groupId];
            const flipped = gi % 2 === 1;
            // An odd number of follow-up shots leaves the last one full width, so rows never have gaps.
            const lastIsWide = (shots.length - 1) % 2 === 1;

            return (
              <div
                key={groupId}
                data-showcase-group={groupId}
                className={cn(
                  "grid items-start gap-8 lg:gap-12",
                  flipped
                    ? "lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]"
                    : "lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]",
                )}
              >
                <Reveal className={cn("lg:sticky lg:top-28", flipped && "lg:order-2")}>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold leading-snug text-foreground sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-pretty text-muted-foreground">
                    {group.description}
                  </p>
                </Reveal>

                <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2">
                  {shots.map((shot, i) => {
                    const wide = i === 0 || (lastIsWide && i === shots.length - 1);
                    return (
                      <Reveal key={shot.id} delay={i * 80} className={cn(wide && "sm:col-span-2")}>
                        <ScreenshotFigure
                          id={shot.id}
                          sizes={
                            wide
                              ? "(min-width: 1280px) 780px, (min-width: 1024px) 62vw, 100vw"
                              : "(min-width: 1280px) 380px, (min-width: 640px) 46vw, 100vw"
                          }
                        />
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
