import { Download } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { getDownloadHref, siteConfig } from "@/content/site-config";
import { scrollToSection, useI18n } from "@/lib/i18n";

/**
 * Download button used in the header and hero. Until a real installer URL is set in
 * site-config, it scrolls to the download section instead of pointing to a fake file.
 */
export function DownloadCta({
  variant = "hero",
  size = "pill",
  className,
  onNavigate,
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  onNavigate?: () => void;
}) {
  const { t } = useI18n();
  const href = getDownloadHref(siteConfig.download.url);
  const isAnchor = href.startsWith("#");

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={href}
        onClick={(e) => {
          if (!isAnchor) return;
          e.preventDefault();
          if (onNavigate) {
            onNavigate();
            window.setTimeout(() => scrollToSection("download"), 320);
          } else {
            scrollToSection("download");
          }
        }}
      >
        <Download aria-hidden="true" />
        {t.cta.download}
      </a>
    </Button>
  );
}
