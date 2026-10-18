import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Application of Definite Integration prerequisite graph (Balbharati Std XII Part 2, Ch.5).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/app-def-integration-12#${sub}`;

export const graph: GraphNode[] = [
  // Areas
  {
    id: "C01", slug: "area-under-a-curve", title: "Area between a curve and the X-axis", group: "Areas", tier: "core", visual: true,
    oneLiner: t`The area between $y = f(x)$, the X-axis and $x = a$, $x = b$ is $\int_a^b |y|\,dx$; a part below the axis gives a negative integral, so take its size`,
    prereqs: [], ext: ["definite integration"], sources: [S("Area Under a Curve")],
  },
  {
    id: "C02", slug: "area-with-y-axis", title: "Area between a curve and the Y-axis", group: "Areas", tier: "core", visual: true,
    oneLiner: t`Between $x = g(y)$, the Y-axis and $y = c$, $y = d$, the area is $\int_c^d |x|\,dy$: integrate along $y$ with horizontal strips`,
    prereqs: ["C01"], ext: [], sources: [S("Area Under a Curve")],
  },
  {
    id: "C03", slug: "areas-of-standard-curves", title: "Areas of circles, ellipses and parabolas", group: "Areas", tier: "core", visual: true,
    oneLiner: t`Use symmetry: find one quarter and multiply; the ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ encloses $\pi ab$, using $\int_0^a \sqrt{a^2 - x^2}\,dx = \dfrac{\pi a^2}{4}$`,
    prereqs: ["C01"], ext: ["equations of conics"], sources: [S("Area Under a Curve")],
  },
  {
    id: "C04", slug: "area-between-curves", title: "Area between two curves", group: "Areas", tier: "core", visual: true,
    oneLiner: t`Find where the curves meet, then integrate (upper $-$ lower) $dx$ between those points, or (right $-$ left) $dy$`,
    prereqs: ["C01"], ext: ["solving simultaneous equations"], sources: [S("Area Between Two Curves")],
  },
];
