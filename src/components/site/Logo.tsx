import logoHorizontal from "@/assets/screenshots/sabourti-logo-horizontal.png";
import logoSymbol from "@/assets/screenshots/sabourti-logo-symbol.png";
import { cn } from "@/lib/utils";

/** Intrinsic pixel sizes of the official crops, so the browser reserves the exact aspect ratio. */
const HORIZONTAL = { w: 650, h: 149 };
const SYMBOL = { w: 155, h: 146 };

/**
 * Official Sabourti symbol (tablet + pen), cut from the brand sheet without changes.
 * The outer white canvas is transparent; `framed` places it on a light tile for dark surfaces.
 */
export function LogoMark({
  className,
  framed = false,
  alt = "",
}: {
  className?: string;
  framed?: boolean;
  alt?: string;
}) {
  const img = (
    <img
      src={logoSymbol}
      width={SYMBOL.w}
      height={SYMBOL.h}
      alt={alt}
      decoding="async"
      className={cn("h-full w-auto object-contain")}
    />
  );

  if (!framed) {
    return <span className={cn("inline-flex shrink-0 items-center", className)}>{img}</span>;
  }
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl bg-card p-2 shadow-soft",
        className,
      )}
    >
      {img}
    </span>
  );
}

/**
 * Official horizontal Sabourti logo. Always laid out left-to-right (it is an image),
 * and positioned by the surrounding RTL/LTR flow.
 * `tone="light"` puts it on a light tile so it stays legible on navy backgrounds.
 */
export function Logo({
  className,
  tone = "default",
  alt = "",
}: {
  className?: string;
  tone?: "default" | "light";
  alt?: string;
}) {
  const img = (
    <img
      src={logoHorizontal}
      width={HORIZONTAL.w}
      height={HORIZONTAL.h}
      alt={alt}
      decoding="async"
      className={cn(
        "block h-full w-auto max-w-none object-contain",
        
      )}
    />
  );

  if (tone === "light") {
    return (
      <span className={cn("inline-flex h-14 items-center rounded-2xl bg-card px-4 py-2.5 shadow-soft", className)}>
        {img}
      </span>
    );
  }
  return <span className={cn("inline-flex h-9 items-center sm:h-10", className)}>{img}</span>;
}
