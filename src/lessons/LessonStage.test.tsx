import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { Figure } from "@/content/types";
import type { RenderedInline } from "@/lib/renderedText";
import { LessonStage } from "./LessonStage";
import type { RenderedSlide } from "./renderDeck";
import { SlideBody } from "./SlideBody";

const text = (t: string): RenderedInline[] => [{ type: "text", text: t, bold: false, italic: false }];
const FIG: Figure = {
  alt: "two steps",
  axes: "none",
  view: { x: [-2, 2], y: [-2, 2] },
  elements: [
    { kind: "point", at: [0, 0], label: "first", step: 1 },
    { kind: "point", at: [1, 1], label: "second", step: 2 },
  ],
};
const points: RenderedSlide = { id: "idea", title: "The idea", heading: text("The idea"), kind: "points", points: [text("Point one."), text("Point two."), text("Point three.")], figure: FIG };
const worked: RenderedSlide = { id: "worked-1", title: "Worked example", heading: text("Worked example"), kind: "worked", prompt: [], steps: [text("s1")], answer: null, step: 1 };

describe("SlideBody: points", () => {
  it("shows the points revealed so far, and the figure up to the same step", () => {
    const out = renderToStaticMarkup(<SlideBody slide={points} shown={2} />);
    expect(out).toContain("Point one.");
    expect(out).toContain("Point two.");
    expect(out).not.toContain("Point three.");
    expect(out).toContain(">second<");
  });

  it("shows every point when nothing says otherwise (the review preview's list)", () => {
    expect(renderToStaticMarkup(<SlideBody slide={points} />)).toContain("Point three.");
  });

  it("announces newly shown points to screen readers", () => {
    expect(renderToStaticMarkup(<SlideBody slide={points} shown={1} />)).toMatch(/<ul[^>]*aria-live="polite"/);
  });
});

describe("LessonStage", () => {
  const html = () => renderToStaticMarkup(<LessonStage slides={[points, worked]} label="T lesson" />);

  it("opens a points slide with its first point only", () => {
    const out = html();
    expect(out).toContain("Point one.");
    expect(out).not.toContain("Point two.");
    expect(out).not.toContain(">second<");
  });

  it("offers Next, and no Back on the first point of the first slide", () => {
    const out = html();
    expect(out).toMatch(/<button[^>]*>Next →<\/button>/);
    expect(out).toMatch(/<button[^>]*disabled=""[^>]*>← Back<\/button>/);
  });
});
