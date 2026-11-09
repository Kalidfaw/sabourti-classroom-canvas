import { ArrowUp } from "lucide-react";

import { sectionIds } from "@/content/translations";
import { useI18n } from "@/lib/i18n";

import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)]">
        <div>
          <Logo tone="light" alt={t.common.brandName} />
          <p className="mt-4 max-w-sm leading-relaxed text-navy-muted">{t.footer.tagline}</p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="text-sm font-bold text-navy-foreground">
            {t.footer.linksTitle}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-navy-muted transition-colors hover:text-navy-foreground">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-navy-foreground">{t.footer.languageTitle}</h2>
          <LanguageSwitch tone="light" className="mt-4" />
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-navy-muted sm:flex-row">
          <p>
            © <span dir="ltr">{year}</span> {t.common.brandName}. {t.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-navy-foreground"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
