import { BookOpen, Calculator, Check, FlaskConical, PenTool, type LucideIcon } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const subjectStyle: Record<string, { icon: LucideIcon; bg: string; sampleLang?: string }> = {
  arabic: { icon: BookOpen, bg: "bg-paper-ruled", sampleLang: "ar" },
  french: { icon: PenTool, bg: "bg-paper-seyes", sampleLang: "fr" },
  math: { icon: Calculator, bg: "bg-paper-grid" },
  science: { icon: FlaskConical, bg: "bg-paper-plain" },
};

export function Teachers() {
  const { t } = useI18n();
  const s = t.teachers;

  return (
    <section id="teachers" tabIndex={-1} aria-labelledby="teachers-title" className="py-24 outline-none sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
        <Reveal>
          <SectionHeading id="teachers-title" eyebrow={s.eyebrow} title={s.title} description={s.description} />
          <ul className="mt-8 space-y-4">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base font-semibold text-foreground">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {s.subjects.map((subject, i) => {
            const style = subjectStyle[subject.id] ?? subjectStyle.science;
            const Icon = style.icon;
            return (
              <Reveal as="li" key={subject.id} delay={i * 80} className={cn(i % 2 === 1 && "sm:translate-y-8")}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div
                    aria-hidden="true"
                    className={cn("relative flex h-28 items-center justify-center border-b border-border [--paper-unit:7px]", style.bg)}
                  >
                    <span
                      lang={style.sampleLang}
                      dir={style.sampleLang === "ar" ? "rtl" : "ltr"}
                      className="font-display text-4xl font-extrabold text-ink transition-transform duration-300 group-hover:scale-110"
                    >
                      {subject.sample}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground">{subject.title}</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{subject.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
