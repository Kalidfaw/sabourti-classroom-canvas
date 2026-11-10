import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ScreenshotViewerProvider } from "@/components/site/ScreenshotViewer";
import { Showcase } from "@/components/site/Showcase";
import { screenshots } from "@/content/screenshots";
import { translations, type Lang } from "@/content/translations";
import { I18nProvider } from "@/lib/i18n";

function placementOf(file: string) {
  return screenshots.find((s) => s.file === file)?.placement;
}

describe("app screenshots", () => {
  it("places each uploaded screenshot in the section its filename names", () => {
    expect(placementOf("dashboard.jpg")).toBe("hero");
    expect(placementOf("empty-board.jpg")).toBe("lessons");
    expect(placementOf("Lesson_recorder.jpg")).toBe("lessons");
    expect(placementOf("lesson-geometry.jpg")).toBe("geometry");
    expect(placementOf("Mathematical_instruments.jpg")).toBe("measurement");
    expect(placementOf("Conversion_Tables.jpg")).toBe("measurement");
    expect(placementOf("teacher-tools.jpg")).toBe("teacher");
    expect(placementOf("random-student-wheel.jpg")).toBe("teacher");
    expect(placementOf("curtain.jpg")).toBe("teacher");
    expect(placementOf("Welcome_page.jpg")).toBe("download");
  });

  it("uses every screenshot exactly once", () => {
    const files = screenshots.map((s) => s.file);
    expect(new Set(files).size).toBe(10);
  });

  it.each<Lang>(["ar", "fr"])("has alt text and a caption for every screenshot in %s", (lang) => {
    for (const shot of screenshots) {
      const copy = translations[lang].screenshots[shot.id];
      expect(copy.alt.trim().length).toBeGreaterThan(20);
      expect(copy.caption.trim().length).toBeGreaterThan(5);
    }
  });

  it.each<Lang>(["ar", "fr"])("shows each gallery screenshot in its group, in %s", (lang) => {
    const { container } = render(
      <I18nProvider lang={lang} setLang={() => {}}>
        <ScreenshotViewerProvider>
          <Showcase />
        </ScreenshotViewerProvider>
      </I18nProvider>,
    );
    const t = translations[lang].screenshots;
    const group = (id: string) => within(container.querySelector(`[data-showcase-group="${id}"]`) as HTMLElement);

    expect(group("lessons").getByAltText(t.emptyBoard.alt)).toBeInTheDocument();
    expect(group("lessons").getByAltText(t.lessonRecorder.alt)).toBeInTheDocument();
    expect(group("geometry").getByAltText(t.lessonGeometry.alt)).toBeInTheDocument();
    expect(group("measurement").getByAltText(t.mathInstruments.alt)).toBeInTheDocument();
    expect(group("measurement").getByAltText(t.conversionTables.alt)).toBeInTheDocument();
    expect(group("teacher").getByAltText(t.teacherTools.alt)).toBeInTheDocument();
    expect(group("teacher").getByAltText(t.studentWheel.alt)).toBeInTheDocument();
    expect(group("teacher").getByAltText(t.curtain.alt)).toBeInTheDocument();
    expect(screen.queryByAltText(t.dashboard.alt)).toBeNull();
  });
});
