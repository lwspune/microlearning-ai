import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { Figure } from "@/content/types";
import { FigureView } from "./FigureView";

const fig: Figure = {
  alt: "The point 3 + 4i and its distance 5 from the origin",
  view: { x: [-3, 5], y: [-1, 5] }, // 8 units wide: 50px per unit
  elements: [
    { kind: "point", at: [3, 4], label: "3 + 4i" },
    { kind: "segment", from: [0, 0], to: [3, 4], label: "5", step: 2 },
    { kind: "circle", centre: [0, 0], r: 5, dashed: true, step: 3 },
  ],
};

const html = (props: Parameters<typeof FigureView>[0]) => renderToStaticMarkup(<FigureView {...props} />);

describe("FigureView", () => {
  it("is an image named by its alt text, for screen readers", () => {
    const out = html({ figure: fig });
    expect(out).toMatch(/<svg[^>]*role="img"/);
    expect(out).toContain(`<title`);
    expect(out).toContain(fig.alt);
  });

  it("escapes label text instead of injecting markup", () => {
    const out = html({ figure: { ...fig, elements: [{ kind: "label", at: [1, 1], label: "<script>x</script>" }] } });
    expect(out).not.toContain("<script>");
    expect(out).toContain("&lt;script&gt;");
  });

  it("shows everything by default", () => {
    const out = html({ figure: fig });
    expect(out).toContain("3 + 4i");
    expect(out).toContain(">5<");
    expect(out).toMatch(/<circle[^>]*r="250"/);
  });

  it("in a worked example, shows elements up to the current step only", () => {
    const out = html({ figure: fig, upTo: 2 });
    expect(out).toContain(">5<");
    expect(out).not.toMatch(/<circle[^>]*r="250"/);
  });

  it("animates only the elements the current step introduces", () => {
    const out = html({ figure: fig, upTo: 2 });
    expect(out.match(/fig-(in|draw)/g)).toHaveLength(2); // the segment draws in, its label fades in
  });

  it("draws dashed strokes with real dashes (pathLength would stretch one dash over the whole stroke)", () => {
    const out = html({
      figure: {
        ...fig,
        elements: [
          { kind: "circle", centre: [0, 0], r: 2, dashed: true },
          { kind: "segment", from: [0, 0], to: [3, 4], dashed: true },
          { kind: "line", through: [[0, 0], [1, 1]], dashed: true },
        ],
      },
    });
    const dashed = out.match(/<(circle|line)[^>]*stroke-dasharray="7 6"[^>]*>/g) ?? [];
    expect(dashed).toHaveLength(3);
    for (const el of dashed) expect(el).not.toContain("pathLength");
  });

  it("keeps labels inside the frame, even when anchored at its edge", () => {
    // 400 x 300 frame; labels anchored on the top and right edges.
    const out = html({
      figure: {
        ...fig,
        elements: [
          { kind: "label", at: [5, 5], label: "a long label at the corner" },
          { kind: "point", at: [5, 0], label: "edge", labelAt: "e" },
        ],
      },
    });
    const texts = [...out.matchAll(/<text x="([\d.-]+)" y="([\d.-]+)" text-anchor="(\w+)"[^>]*font-size="15"[^>]*>([^<]+)</g)];
    expect(texts).toHaveLength(2);
    for (const [, x, y, anchor, label] of texts) {
      const w = label.length * 8.5;
      const left = anchor === "start" ? +x : anchor === "end" ? +x - w : +x - w / 2;
      expect(left).toBeGreaterThanOrEqual(0);
      expect(left + w).toBeLessThanOrEqual(400);
      expect(+y).toBeGreaterThanOrEqual(14);
      expect(+y).toBeLessThanOrEqual(300);
    }
  });

  it("in sequence mode, delays each step's elements in turn", () => {
    const out = html({ figure: fig, stagger: 1 });
    expect(out).toContain("animation-delay:1s");
    expect(out).toContain("animation-delay:2s");
  });
});
