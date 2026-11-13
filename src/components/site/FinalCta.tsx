import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

import { Reveal } from "./Reveal";

/** Closing call to action: discover both apps. */
export function FinalCta() {
  const { t } = useI18n();
  const c = t.home.finalCta;

  return (
    <section aria-labelledby="final-cta-title" className="py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy px-8 py-12 text-center text-navy-foreground shadow-elevated sm:px-16 sm:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-dots-light [mask-image:radial-gradient(60%_80%_at_50%_0%,black,transparent)]" />
            <div aria-hidden="true" className="absolute -end-20 -top-20 size-72 rounded-full bg-primary/40 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 -start-20 size-72 rounded-full bg-turquoise/20 blur-3xl" />

            <div className="relative">
              <h2 id="final-cta-title" className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                {c.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-muted">{c.description}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="on-navy" size="xl">
                  <a href="/apps/sabourti">
                    {c.sabourtiCta}
                    <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="on-navy"
                  size="xl"
                  className="bg-navy-foreground/15 text-navy-foreground shadow-none ring-1 ring-navy-foreground/40 backdrop-blur hover:bg-navy-foreground/25"
                >
                  <a href="/apps/docs-asset-studio">
                    {c.dasCta}
                    <ArrowLeft aria-hidden="true" className="ltr:rotate-180" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
