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

/** Applications that ship from this site, each with a portable build and an installer. */
export type AppKey = "sabourti" | "docsAssetStudio";

export const siteConfig: {
  download: DownloadInfo;
  /** Per-app download info. `null` fields render as "coming soon / to be confirmed" placeholders. */
  apps: Record<AppKey, { portable: DownloadInfo; installer: DownloadInfo }>;
} = {
  download: {
    url: null,
    version: null,
    fileSize: null,
    requirements: null,
  },
  apps: {
    sabourti: {
      portable: { url: null, version: null, fileSize: null, requirements: null },
      installer: { url: null, version: null, fileSize: null, requirements: null },
    },
    docsAssetStudio: {
      portable: { url: null, version: null, fileSize: null, requirements: null },
      installer: { url: null, version: null, fileSize: null, requirements: null },
    },
  },
};

/** Where download buttons point: the installer when available, otherwise the download section. */
export function getDownloadHref(url: string | null): string {
  return url && url.trim().length > 0 ? url : "#download";
}
