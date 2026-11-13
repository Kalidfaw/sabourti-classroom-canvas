import { GraduationCap, Monitor, Wrench } from "lucide-react";

import { useI18n } from "@/lib/i18n";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Brief brand-vision section: where Sabourti Education is heading, without marketing fluff. */
export function VisionSection() {
  const { t } = useI18n();
  const v = t.home.vision;
  const icons = [Wrench, Monitor, GraduationCap] as const;

  return (
    <section id="vision" tabIndex={-1} aria-labelledby="vision-title" className="scroll-mt-24 py-12 outline-none sm:py-16">
      <div className="container-page">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-14">
          <Reveal>
            <SectionHeading
              id="vision-title"
              eyebrow={v.eyebrow}
              title={v.title}
              description={v.description}
            />
          </Reveal>

          <ul className="grid gap-4">
            {v.points.map((point, index) => {
              const Icon = icons[index] ?? Wrench;
              return (
                <Reveal key={point.title} as="li" delay={index * 100}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-muted/40 p-5">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <h3 className="font-display font-bold text-foreground">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
