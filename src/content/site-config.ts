/**
 * Editable product details for the Sabourti website.
 *
 * Leave a value as `null` until the real detail is confirmed: the site then shows a clear
 * "coming soon / to be confirmed" placeholder instead of an invented value.
 */

export type Localized = { ar: string; fr: string };

export interface DownloadInfo {
  /** Direct URL to the Windows installer (e.g. a GitHub release asset). */
  url: string | null;
  /** Current version, e.g. "1.0.0". */
  version: string | null;
  /** Installer size, e.g. "12 MB". */
  fileSize: string | null;
  /** Minimum system requirements, in both languages. */
  requirements: Localized | null;
}

export interface ScreenshotSlot {
  id: "main" | "backgrounds" | "geometry" | "pages";
  /** Path or URL of a real screenshot. `null` shows a labelled placeholder. */
  src: string | null;
}

export const siteConfig: {
  download: DownloadInfo;
  screenshots: ScreenshotSlot[];
} = {
  download: {
    url: null,
    version: null,
    fileSize: null,
    requirements: null,
  },
  screenshots: [
    { id: "main", src: null },
    { id: "backgrounds", src: null },
    { id: "geometry", src: null },
    { id: "pages", src: null },
  ],
};

/** Where download buttons point: the installer when available, otherwise the download section. */
export function getDownloadHref(url: string | null): string {
  return url && url.trim().length > 0 ? url : "#download";
}
