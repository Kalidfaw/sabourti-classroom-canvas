import { ArrowUp } from "lucide-react";

import { sectionIds } from "@/content/translations";
import { useI18n } from "@/lib/i18n";

import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export function SiteFooter({ home = true, navLinks }: { home?: boolean; navLinks?: ReadonlyArray<{ id: string; label: string }> }) {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();
  const sectionHref = (id: string) => (home ? `#${id}` : lang === "fr" ? `/?lang=fr#${id}` : `/#${id}`);
  const contactHref = lang === "fr" ? "/contact?lang=fr" : "/contact";
  const productLinks = [
    { to: lang === "fr" ? "/apps/sabourti?lang=fr" : "/apps/sabourti", label: t.nav.productSabourti },
    { to: lang === "fr" ? "/apps/docs-asset-studio?lang=fr" : "/apps/docs-asset-studio", label: t.nav.productDocsAssetStudio },
  ];
  const sectionLinks = navLinks ?? sectionIds.map((id) => ({ id, label: t.nav[id] }));

  return (
    <footer className="mt-12 bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)]">
        <div>
          <Logo tone="light" alt={t.common.brandEducation} />
          <p className="mt-4 max-w-sm leading-relaxed text-navy-muted">{t.footer.tagline}</p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="text-sm font-bold text-navy-foreground">
            {t.footer.linksTitle}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {sectionLinks.map((l) => (
              <li key={l.id}>
                <a href={sectionHref(l.id)} className="text-navy-muted transition-colors hover:text-navy-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={contactHref} className="text-navy-muted transition-colors hover:text-navy-foreground">
                {t.nav.contact}
              </a>
            </li>
          </ul>
          <h2 className="mt-6 text-sm font-bold text-navy-foreground">{t.footer.productsTitle}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {productLinks.map((l) => (
              <li key={l.to}>
                <a href={l.to} className="text-navy-muted transition-colors hover:text-navy-foreground">
                  {l.label}
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
            © <span dir="ltr">{year}</span> {t.common.brandEducation}. {t.footer.rights}
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
