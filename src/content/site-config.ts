/**
 * Editable product details for the Sabourti website.
 *
 * Leave a value as `null` until the real detail is confirmed: the site then shows a clear
 * "coming soon / to be confirmed" placeholder instead of an invented value.
 * Real app screenshots are listed in `screenshots.ts`.
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

export const siteConfig: {
  download: DownloadInfo;
} = {
  download: {
    url: null,
    version: null,
    fileSize: null,
    requirements: null,
  },
};

/** Where download buttons point: the installer when available, otherwise the download section. */
export function getDownloadHref(url: string | null): string {
  return url && url.trim().length > 0 ? url : "#download";
}
