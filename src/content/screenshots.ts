/**
 * Real screenshots of the Sabourti desktop app, identified by their original filenames.
 *
 * Only the local 960px WebP copies are bundled (used on the page and in the full-size
 * viewer); the original uploads and the 1600px copies were not restored to this repo.
 * Alt text and captions live in `translations.ts` under `screenshots.<id>`.
 */

export type ScreenshotId =
  | "dashboard"
  | "emptyBoard"
  | "lessonRecorder"
  | "lessonGeometry"
  | "mathInstruments"
  | "conversionTables"
  | "teacherTools"
  | "studentWheel"
  | "curtain"
  | "welcome";

/** Docs Asset Studio screenshots, shown only on /apps/docs-asset-studio. */
export type DocsAssetStudioScreenshotId =
  | "dasMainInterface"
  | "dasFileUpload"
  | "dasExtractedGallery"
  | "dasSelectionTools"
  | "dasImageSplitting"
  | "dasImageEditor"
  | "dasAppSettings"
  | "dasExportOptions";

/** Where on the page a screenshot is shown. Gallery groups live in the Showcase section. */
export type ScreenshotPlacement = "hero" | "lessons" | "geometry" | "measurement" | "teacher" | "download" | "das";

export type ShowcaseGroupId = Extract<ScreenshotPlacement, "lessons" | "geometry" | "measurement" | "teacher">;

export interface Screenshot {
  id: ScreenshotId;
  /** Original uploaded filename — the source of truth for what the image shows. */
  file: string;
  placement: ScreenshotPlacement;
  width: number;
  height: number;
  /** Full-size image for the enlarged viewer (falls back to the 960px copy; originals not in repo). */
  original: string;
  /** Scaled WebP copy for the page. */
  src: string;
  srcSet: string;
}

/** Docs Asset Studio screenshot: same shape, narrow id. */
export interface DocsAssetStudioScreenshot extends Omit<Screenshot, "id"> {
  id: DocsAssetStudioScreenshotId;
}

/** The fullscreen viewer can cycle through either app's screenshots. */
export type AnyScreenshot = Screenshot | DocsAssetStudioScreenshot;

import dashboard960 from "../assets/screenshots/dashboard-960.webp";
import emptyBoard960 from "../assets/screenshots/empty-board-960.webp";
import lessonRecorder960 from "../assets/screenshots/Lesson_recorder-960.webp";
import lessonGeometry960 from "../assets/screenshots/lesson-geometry-960.webp";
import mathInstruments960 from "../assets/screenshots/Mathematical_instruments-960.webp";
import conversionTables960 from "../assets/screenshots/Conversion_Tables-960.webp";
import teacherTools960 from "../assets/screenshots/teacher-tools-960.webp";
import studentWheel960 from "../assets/screenshots/random-student-wheel-960.webp";
import curtain960 from "../assets/screenshots/curtain-960.webp";
import welcome960 from "../assets/screenshots/Welcome_page-960.webp";
import dasMainInterface960 from "../assets/screenshots/main-interface-960.webp";
import dasFileUpload960 from "../assets/screenshots/file-upload-area-960.webp";
import dasExtractedGallery960 from "../assets/screenshots/extracted-images-gallery-960.webp";
import dasSelectionTools960 from "../assets/screenshots/image-selection-and-tools-960.webp";
import dasImageSplitting960 from "../assets/screenshots/image-splitting-960.webp";
import dasImageEditor960 from "../assets/screenshots/image-editor_2-960.webp";
import dasAppSettings960 from "../assets/screenshots/app-settings-960.webp";
import dasExportOptions960 from "../assets/screenshots/export-options-960.webp";

/**
 * Local 960px WebP copies, imported so Vite bundles them with hashed URLs.
 * Only the 960px copies are available in this repository; the original uploads
 * and the 1600px copies were not restored, so the viewer shows the 960px image.
 */
const localImages: Record<string, string> = {
  dashboard: dashboard960,
  "empty-board": emptyBoard960,
  Lesson_recorder: lessonRecorder960,
  "lesson-geometry": lessonGeometry960,
  Mathematical_instruments: mathInstruments960,
  Conversion_Tables: conversionTables960,
  "teacher-tools": teacherTools960,
  "random-student-wheel": studentWheel960,
  curtain: curtain960,
  Welcome_page: welcome960,
  "main-interface": dasMainInterface960,
  "file-upload-area": dasFileUpload960,
  "extracted-images-gallery": dasExtractedGallery960,
  "image-selection-and-tools": dasSelectionTools960,
  "image-splitting": dasImageSplitting960,
  "image-editor_2": dasImageEditor960,
  "app-settings": dasAppSettings960,
  "export-options": dasExportOptions960,
};

const entries: Array<Pick<Screenshot, "id" | "file" | "placement" | "width" | "height">> = [
  { id: "dashboard", file: "dashboard.jpg", placement: "hero", width: 1870, height: 927 },
  { id: "emptyBoard", file: "empty-board.jpg", placement: "lessons", width: 1600, height: 1000 },
  { id: "lessonRecorder", file: "Lesson_recorder.jpg", placement: "lessons", width: 1868, height: 928 },
  { id: "lessonGeometry", file: "lesson-geometry.jpg", placement: "geometry", width: 1600, height: 1000 },
  { id: "mathInstruments", file: "Mathematical_instruments.jpg", placement: "measurement", width: 1872, height: 929 },
  { id: "conversionTables", file: "Conversion_Tables.jpg", placement: "measurement", width: 1872, height: 930 },
  { id: "teacherTools", file: "teacher-tools.jpg", placement: "teacher", width: 1863, height: 926 },
  { id: "studentWheel", file: "random-student-wheel.jpg", placement: "teacher", width: 1600, height: 1000 },
  { id: "curtain", file: "curtain.jpg", placement: "teacher", width: 1600, height: 1000 },
  { id: "welcome", file: "Welcome_page.jpg", placement: "download", width: 1863, height: 931 },
];

/** All screenshots in the order they appear on the page (also the viewer's order). */
export const screenshots: Screenshot[] = entries.map((e) => {
  const base = e.file.replace(/\.[^.]+$/, "");
  const src = localImages[base];
  if (!src) throw new Error(`Missing screenshot asset: ${e.file}`);
  return {
    ...e,
    original: src,
    src,
    srcSet: `${src} 960w`,
  };
});

export const showcaseGroups: ShowcaseGroupId[] = ["lessons", "geometry", "measurement", "teacher"];

export function screenshotsFor(placement: ScreenshotPlacement): Screenshot[] {
  return screenshots.filter((s) => s.placement === placement);
}

export function getScreenshot(id: ScreenshotId): Screenshot {
  const shot = screenshots.find((s) => s.id === id);
  if (!shot) throw new Error(`Unknown screenshot: ${id}`);
  return shot;
}

const dasEntries: Array<Pick<DocsAssetStudioScreenshot, "id" | "file" | "placement" | "width" | "height">> = [
  { id: "dasMainInterface", file: "main-interface.png", placement: "das", width: 960, height: 478 },
  { id: "dasFileUpload", file: "file-upload-area.png", placement: "das", width: 960, height: 331 },
  { id: "dasExtractedGallery", file: "extracted-images-gallery.png", placement: "das", width: 960, height: 479 },
  { id: "dasSelectionTools", file: "image-selection-and-tools.png", placement: "das", width: 960, height: 515 },
  { id: "dasImageSplitting", file: "image-splitting.png", placement: "das", width: 960, height: 519 },
  { id: "dasImageEditor", file: "image-editor_2.png", placement: "das", width: 960, height: 520 },
  { id: "dasAppSettings", file: "app-settings.png", placement: "das", width: 960, height: 667 },
  { id: "dasExportOptions", file: "export-options.png", placement: "das", width: 960, height: 514 },
];

/** Docs Asset Studio screenshots, in page order (also the viewer's order). */
export const docsAssetStudioScreenshots: DocsAssetStudioScreenshot[] = dasEntries.map((e) => {
  const base = e.file.replace(/\.[^.]+$/, "");
  const src = localImages[base];
  if (!src) throw new Error(`Missing screenshot asset: ${e.file}`);
  return {
    ...e,
    original: src,
    src,
    srcSet: `${src} 960w`,
  };
});

export function getDocsAssetStudioScreenshot(id: DocsAssetStudioScreenshotId): DocsAssetStudioScreenshot {
  const shot = docsAssetStudioScreenshots.find((s) => s.id === id);
  if (!shot) throw new Error(`Unknown Docs Asset Studio screenshot: ${id}`);
  return shot;
}
