import { cn } from "@/lib/utils";

/**
 * Temporary typographic logo lockup "Sabourti | سبورتي".
 * Replace LogoMark / Logo with the final brand assets when available.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow",
        className,
      )}
    >
      <svg viewBox="0 0 32 32" className="size-[70%]" fill="none">
        <rect
          x="5"
          y="7"
          width="22"
          height="15"
          rx="2.5"
          className="stroke-primary-foreground"
          strokeWidth="2"
        />
        <path
          d="M9.5 17c1.6-2.6 3-3.6 4.2-1.8 1.1 1.7 2.4 1.5 4-.6 1.2-1.6 2.5-2 4-.6"
          className="stroke-primary-foreground"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M12 26h8" className="stroke-primary-foreground" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24.5" cy="10.5" r="2" className="fill-turquoise" />
      </svg>
    </span>
  );
}

export function Logo({ className, tone = "default" }: { className?: string; tone?: "default" | "light" }) {
  return (
    <span dir="ltr" className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "flex items-baseline gap-2 text-lg font-extrabold leading-none tracking-tight",
          tone === "light" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        <span className="font-[Bricolage_Grotesque,Manrope,sans-serif]">Sabourti</span>
        <span
          aria-hidden="true"
          className={cn("h-4 w-px self-center", tone === "light" ? "bg-navy-foreground/30" : "bg-border")}
        />
        <span lang="ar" className="font-[Cairo,sans-serif] text-[1.15em]">
          سبورتي
        </span>
      </span>
    </span>
  );
}
