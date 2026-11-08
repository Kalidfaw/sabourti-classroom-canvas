import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
  tone = "default",
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 text-sm font-bold",
          tone === "light" ? "text-turquoise" : "text-primary",
        )}
      >
        <span
          aria-hidden="true"
          className={cn("h-px w-6", tone === "light" ? "bg-turquoise" : "bg-primary")}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl",
          tone === "light" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            tone === "light" ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
