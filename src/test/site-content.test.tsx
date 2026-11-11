import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DownloadSection } from "@/components/site/DownloadSection";
import { ScreenshotViewerProvider } from "@/components/site/ScreenshotViewer";
import { getDownloadHref, siteConfig } from "@/content/site-config";
import { translations } from "@/content/translations";
import { I18nProvider } from "@/lib/i18n";

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]));
  }
  return typeof value;
}

describe("site content", () => {
  it("has the same structure in Arabic and French", () => {
    expect(shape(translations.fr)).toEqual(shape(translations.ar));
  });

  it("ships without an invented installer URL, version or file size", () => {
    expect(siteConfig.download.url).toBeNull();
    expect(siteConfig.download.version).toBeNull();
    expect(siteConfig.download.fileSize).toBeNull();
  });

  it("points download buttons at the download section until a real URL exists", () => {
    expect(getDownloadHref(null)).toBe("#download");
    expect(getDownloadHref("")).toBe("#download");
    expect(getDownloadHref("https://example.com/Sabourti-setup.exe")).toBe(
      "https://example.com/Sabourti-setup.exe",
    );
  });

  it("shows the 'link coming soon' notice and no download link without a URL", () => {
    render(
      <I18nProvider lang="ar" setLang={() => {}}>
        <ScreenshotViewerProvider>
          <DownloadSection download={{ url: null, version: null, fileSize: null, requirements: null }} />
        </ScreenshotViewerProvider>
      </I18nProvider>,
    );
    expect(screen.getByText("رابط التحميل سيُضاف قريباً")).toBeInTheDocument();
    expect(screen.queryByRole("link")).toBeNull();
  });

  it("shows a real download link once a URL is configured", () => {
    render(
      <I18nProvider lang="fr" setLang={() => {}}>
        <ScreenshotViewerProvider>
          <DownloadSection
            download={{ url: "https://example.com/setup.exe", version: "1.2.3", fileSize: null, requirements: null }}
          />
        </ScreenshotViewerProvider>
      </I18nProvider>,
    );
    expect(screen.getByRole("link", { name: /Télécharger l’installateur/ })).toHaveAttribute(
      "href",
      "https://example.com/setup.exe",
    );
    expect(screen.getByText("1.2.3")).toBeInTheDocument();
  });
});
