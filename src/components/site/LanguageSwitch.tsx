import { languageNames, type Lang } from "@/content/translations";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const order: Lang[] = ["ar", "fr"];

export function LanguageSwitch({
  className,
  tone = "default",
  compact = false,
}: {
  className?: string;
  tone?: "default" | "light";
  compact?: boolean;
}) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.common.languageLabel}
      className={cn(
        "inline-flex items-center rounded-full border p-1 text-sm font-semibold",
        tone === "light"
          ? "border-navy-foreground/20 bg-navy-foreground/5"
          : "border-border bg-card/80 shadow-soft",
        className,
      )}
    >
      {order.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={languageNames[code].full}
            onClick={() => !active && setLang(code)}
            className={cn(
              "relative cursor-pointer rounded-full px-3 py-1.5 leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? tone === "light"
                  ? "bg-navy-foreground text-navy"
                  : "bg-navy text-navy-foreground shadow-soft"
                : tone === "light"
                  ? "text-navy-muted hover:text-navy-foreground"
                  : "text-muted-foreground hover:text-foreground",
            )}
          >
            {compact ? (
              <>
                <span className="sm:hidden">{languageNames[code].short}</span>
                <span className="hidden sm:inline">{languageNames[code].full}</span>
              </>
            ) : (
              languageNames[code].full
            )}
          </button>
        );
      })}
    </div>
  );
}
