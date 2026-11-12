import { Feather, Monitor, MousePointerClick, Presentation, type LucideIcon } from "lucide-react";

import { useI18n } from "@/lib/i18n";

import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  classroom: Presentation,
  simple: MousePointerClick,
  desktop: Monitor,
  independent: Feather,
};

export function ValueStrip() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="values-title" className="relative">
      <div className="container-page">
        <h2 id="values-title" className="sr-only">
          {t.values.title}
        </h2>
        <Reveal>
          <ul className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((item, i) => {
              const Icon = icons[item.id] ?? Presentation;
              return (
                <li
                  key={item.id}
                  className="group flex gap-4 border-border p-6 transition-colors hover:bg-muted/50 max-sm:[&:not(:last-child)]:border-b sm:max-lg:[&:nth-child(-n+2)]:border-b sm:max-lg:odd:border-e lg:[&:not(:last-child)]:border-e"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
