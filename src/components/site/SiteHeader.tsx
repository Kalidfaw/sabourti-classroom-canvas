import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { sectionIds } from "@/content/translations";
import { scrollToSection, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { DownloadCta } from "./DownloadCta";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export function SiteHeader() {
  const { t, dir } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = sectionIds.map((id) => ({ id, label: t.nav[id] }));

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
        <a href="#top" className="rounded-xl" aria-label={t.common.brandName}>
          <Logo />
        </a>

        <nav aria-label={t.common.menu} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
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
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch compact />
          <DownloadCta className="hidden md:inline-flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="soft"
                size="icon"
                className="size-10 rounded-full lg:hidden"
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
                  <Logo alt={t.common.brandName} />
                </SheetTitle>
                <SheetDescription className="sr-only">{t.meta.description}</SheetDescription>
              </div>
              <nav aria-label={t.common.menu}>
                <ul className="flex flex-col gap-1">
                  {links.map((l) => (
                    <li key={l.id}>
                      <a
                        href={`#${l.id}`}
                        onClick={(e) => {
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
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <LanguageSwitch className="self-start" />
                <DownloadCta size="xl" className="w-full" onNavigate={() => setOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
