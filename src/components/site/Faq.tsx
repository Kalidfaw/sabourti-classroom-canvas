import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const { t } = useI18n();
  const f = t.faq;

  return (
    <section id="faq" tabIndex={-1} aria-labelledby="faq-title" className="py-24 outline-none sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <SectionHeading id="faq-title" eyebrow={f.eyebrow} title={f.title} description={f.description} />

        <Reveal>
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 shadow-soft sm:px-8">
            {f.items.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="gap-4 py-5 text-start font-display text-base font-bold text-foreground hover:text-primary hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
