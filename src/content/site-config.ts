/**
 * Editable product details for the Sabourti website.
 *
 * Leave a value as `null` until the real detail is confirmed: the site then shows a clear
 * "coming soon / to be confirmed" placeholder instead of an invented value.
 * Real app screenshots are listed in `screenshots.ts`.
 */

export type Localized = { ar: string; fr: string };

export interface DownloadInfo {
  /** Direct URL to the release asset (e.g. a GitHub release). */
  url: string | null;
  /** Current version, e.g. "1.0.0". */
  version: string | null;
  /** File size, e.g. "12 MB". */
  fileSize: string | null;
  /** Minimum system requirements, in both languages. */
  requirements: Localized | null;
  /** SHA-256 checksum of the file, when available. */
  hash?: string | null;
}

/** Applications that ship from this site, each with a portable build and an installer. */
export type AppKey = "sabourti" | "docsAssetStudio";

export const siteConfig: {
  download: DownloadInfo;
  /** Per-app download info. `null` fields render as "coming soon / to be confirmed" placeholders. */
  apps: Record<AppKey, { portable: DownloadInfo; installer: DownloadInfo; android?: DownloadInfo }>;
} = {
  download: {
    url: null,
    version: null,
    fileSize: null,
    requirements: null,
  },
  apps: {
    sabourti: {
      portable: {
        url: "https://github.com/Kalidfaw/sabourti-classroom-canvas/releases/download/sabourti-v1.0.0/Sabourati-Portable-1.0.0-x64.zip",
        version: "1.0.0",
        fileSize: "106 MB",
        requirements: null,
      },
      installer: {
        url: "https://github.com/Kalidfaw/sabourti-classroom-canvas/releases/download/sabourti-v1.0.0/Sabourati-Setup-1.0.0-x64.exe",
        version: "1.0.0",
        fileSize: "117 MB",
        requirements: null,
      },
    },
    docsAssetStudio: {
      portable: {
        url: "https://github.com/Kalidfaw/sabourti-classroom-canvas/releases/download/docs-asset-studio-v1.0.0/Docs.Asset.Studio-1.0.0-portable.zip",
        version: "1.0.0",
        fileSize: "98.6 MB",
        requirements: null,
      },
      installer: {
        url: "https://github.com/Kalidfaw/sabourti-classroom-canvas/releases/download/docs-asset-studio-v1.0.0/Docs.Asset.Studio-1.0.0-.exe",
        version: "1.0.0",
        fileSize: "108 MB",
        requirements: null,
      },
      android: {
        url: "https://github.com/Kalidfaw/sabourti-classroom-canvas/releases/download/docs-asset-studio-v1.0.0/Docs.Asset.Studio-1.0.0-.apk",
        version: "1.0.0",
        fileSize: "5.11 MB",
        requirements: null,
        hash: "477f65a0dc7805cdd8550867c3cb55c4ca5d8071a6aeafb7ee67e9de920f9631",
      },
    },
  },
};

/** Where download buttons point: the installer when available, otherwise the download section. */
export function getDownloadHref(url: string | null): string {
  return url && url.trim().length > 0 ? url : "#download";
}
