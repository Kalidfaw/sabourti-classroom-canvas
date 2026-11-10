/**
 * Real screenshots of the Sabourti desktop app, identified by their original filenames.
 *
 * Each original upload is stored unchanged (used in the full-size viewer); `-960` / `-1600`
 * WebP copies are scaled-down versions of the same image for faster page loading.
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

/** Where on the page a screenshot is shown. Gallery groups live in the Showcase section. */
export type ScreenshotPlacement = "hero" | "lessons" | "geometry" | "measurement" | "teacher" | "download";

export type ShowcaseGroupId = Extract<ScreenshotPlacement, "lessons" | "geometry" | "measurement" | "teacher">;

export interface Screenshot {
  id: ScreenshotId;
  /** Original uploaded filename — the source of truth for what the image shows. */
  file: string;
  placement: ScreenshotPlacement;
  width: number;
  height: number;
  /** Untouched original, for the enlarged viewer. */
  original: string;
  /** Scaled WebP copy for the page. */
  src: string;
  srcSet: string;
}

const pointers = import.meta.glob<{ url: string }>("../assets/screenshots/*.asset.json", {
  eager: true,
  import: "default",
});

function assetUrl(name: string): string {
  const pointer = pointers[`../assets/screenshots/${name}.asset.json`];
  if (!pointer) throw new Error(`Missing screenshot asset: ${name}`);
  return pointer.url;
}

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
  const small = assetUrl(`${base}-960.webp`);
  const large = assetUrl(`${base}-1600.webp`);
  return {
    ...e,
    original: assetUrl(e.file),
    src: small,
    srcSet: `${small} 960w, ${large} 1600w`,
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
