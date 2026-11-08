import { createContext, useContext, useMemo, type ReactNode } from "react";

import { translations, type Dictionary, type Lang } from "@/content/translations";

interface I18nValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  lang,
  setLang,
  children,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  children: ReactNode;
}) {
  const value = useMemo<I18nValue>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", t: translations[lang], setLang }),
    [lang, setLang],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

/** Smoothly scrolls to a section (honours reduced motion) and moves focus there. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  el.focus({ preventScroll: true });
  history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`);
}
