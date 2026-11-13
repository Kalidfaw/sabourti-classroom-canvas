import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { sectionIds } from "@/content/translations";
import { scrollToSection, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { DownloadCta } from "./DownloadCta";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export function SiteHeader({
  home = true,
  navLinks,
  cta,
}: {
  home?: boolean;
  navLinks?: ReadonlyArray<{ id: string; label: string }>;
  /** When set, renders this link instead of the Sabourti DownloadCta. */
  cta?: { label: string; href: string };
}) {
  const { t, dir, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = (navLinks ?? sectionIds.map((id) => ({ id, label: t.nav[id] }))) as ReadonlyArray<{ id: string; label: string }>;
  const sectionHref = (id: string) => (home ? `#${id}` : lang === "fr" ? `/?lang=fr#${id}` : `/#${id}`);
  // The contact link keeps the active language (?lang=fr) — same translation convention as the rest of the site.
  const contactHref = lang === "fr" ? "/contact?lang=fr" : "/contact";
  // Keep 0.95rem/px-3.5 (original sizes). Desktop nav shows from lg in Arabic and xl in French (French labels are wider); the hamburger covers the smaller widths. The header CTA shows only where it fits without crowding the nav.
  const ctaVisibility = lang === "fr" ? "hidden md:inline-flex xl:hidden" : "hidden md:inline-flex lg:hidden xl:inline-flex";
  const productLinks = [
    { to: lang === "fr" ? "/apps/sabourti?lang=fr" : "/apps/sabourti", label: t.nav.productSabourti },
    { to: lang === "fr" ? "/apps/docs-asset-studio?lang=fr" : "/apps/docs-asset-studio", label: t.nav.productDocsAssetStudio },
    { to: contactHref, label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <a href={home ? "#top" : "/"} className="rounded-xl" aria-label={t.common.brandName}>
          <Logo alt={t.common.brandEducation} />
        </a>

        <nav aria-label={t.common.menu} className={cn("hidden", lang === "fr" ? "xl:block" : "lg:block")}>
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={sectionHref(l.id)}
                  className="group relative rounded-full px-3.5 py-2 text-[0.95rem] font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
            <li aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
            {productLinks.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  aria-current={pathname.startsWith(l.to.split("?")[0] ?? l.to) ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[0.95rem] font-bold transition-colors",
                    pathname.startsWith(l.to.split("?")[0] ?? l.to)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground hover:bg-secondary",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch compact />
          {cta ? (
            <Button asChild variant="hero" size="pill" className={ctaVisibility}>
              <a href={cta.href}>{cta.label}</a>
            </Button>
          ) : (
            <DownloadCta className={ctaVisibility} />
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="soft"
                size="icon"
                className={cn("size-10 rounded-full", lang === "fr" ? "xl:hidden" : "lg:hidden")}
                aria-label={t.common.menu}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={dir === "rtl" ? "left" : "right"}
              dir={dir}
              closeLabel={t.common.closeMenu}
              className="flex w-[85%] flex-col gap-8 border-border bg-background p-6 sm:max-w-sm"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <div>
                <SheetTitle className="text-start">
                  <Logo alt={t.common.brandEducation} />
                </SheetTitle>
                <SheetDescription className="sr-only">{t.meta.description}</SheetDescription>
              </div>
              <nav aria-label={t.common.menu}>
                <ul className="flex flex-col gap-1">
                  {links.map((l) => (
                    <li key={l.id}>
                      <a
                        href={sectionHref(l.id)}
                        onClick={(e) => {
                          if (!home) return;
                          e.preventDefault();
                          setOpen(false);
                          window.setTimeout(() => scrollToSection(l.id), 320);
                        }}
                        className="flex items-center rounded-xl px-4 py-3 text-lg font-bold text-foreground transition-colors hover:bg-secondary"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div aria-hidden="true" className="my-3 border-t border-border" />
                <ul className="flex flex-col gap-1">
                  {productLinks.map((l) => (
                    <li key={l.to}>
                      <a
                        href={l.to}
                        aria-current={pathname.startsWith(l.to.split("?")[0] ?? l.to) ? "page" : undefined}
                        className={cn(
                          "flex items-center rounded-xl px-4 py-3 text-lg font-extrabold transition-colors",
                          pathname.startsWith(l.to.split("?")[0] ?? l.to)
                            ? "bg-secondary text-secondary-foreground"
                            : "text-foreground hover:bg-secondary",
                        )}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <LanguageSwitch className="self-start" />
                {cta ? (
                  <Button asChild variant="hero" size="xl" className="w-full">
                    <a href={cta.href} onClick={() => setOpen(false)}>
                      {cta.label}
                    </a>
                  </Button>
                ) : (
                  <DownloadCta size="xl" className="w-full" onNavigate={() => setOpen(false)} />
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
