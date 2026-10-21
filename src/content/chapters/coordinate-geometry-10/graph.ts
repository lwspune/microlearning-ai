import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Co-ordinate Geometry prerequisite graph (Balbharati Std X Part 2, Ch.5).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/geo-coordinate-10#${sub}`;
const DISTANCE = S("Distance Formula");
const SECTION = S("Section Formula");
const SLOPE = S("Slope of a Line");

export const graph: GraphNode[] = [
  // Distance
  {
    id: "C01", slug: "distance-formula", title: "Distance formula", group: "Distance", tier: "core", visual: true,
    oneLiner: t`$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$; from the origin it is $\sqrt{x^2 + y^2}$`,
    prereqs: [], ext: ["plotting points (Std IX Co-ordinate Geometry)", "Pythagoras theorem (Std X Pythagoras)"], sources: [DISTANCE],
  },
  {
    id: "C02", slug: "collinearity-by-distance", title: "Collinear points by distances", group: "Distance", tier: "core", visual: true,
    oneLiner: t`Three points are collinear when the two shorter distances add up to the longest; otherwise they make a triangle`,
    prereqs: ["C01"], ext: [], sources: [DISTANCE],
  },
  {
    id: "C03", slug: "equidistant-points", title: "Equidistant points", group: "Distance", tier: "core", visual: true,
    oneLiner: t`A point equidistant from A and B satisfies $PA^2 = PB^2$: on an axis this fixes it, and the point equidistant from three vertices is the circumcentre`,
    prereqs: ["C01"], ext: [], sources: [DISTANCE],
  },
  {
    id: "C04", slug: "shapes-from-distances", title: "Naming shapes from distances", group: "Distance", tier: "adv", visual: true,
    oneLiner: t`Compare the sides and diagonals: equal opposite sides make a parallelogram, all sides equal a rhombus, and equal diagonals too a square`,
    prereqs: ["C01"], ext: ["properties of quadrilaterals (Std IX Quadrilaterals)"], sources: [DISTANCE],
  },

  // Section formula
  {
    id: "C05", slug: "section-formula", title: "Section formula", group: "Section formula", tier: "core", visual: true,
    oneLiner: t`P divides AB in the ratio $m : n$ at $\left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}\right)$; the midpoint is the average of the ends`,
    prereqs: [], ext: [], sources: [SECTION],
  },
  {
    id: "C06", slug: "ratio-of-division", title: "Finding the ratio of division", group: "Section formula", tier: "core", visual: true,
    oneLiner: t`Take the ratio as $k : 1$, equate one co-ordinate and solve for $k$; a point on the X-axis has $y = 0$`,
    prereqs: ["C05"], ext: [], sources: [SECTION],
  },
  {
    id: "C07", slug: "centroid", title: "Centroid of a triangle", group: "Section formula", tier: "core", visual: true,
    oneLiner: t`The centroid is $\left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$; given it, an unknown vertex follows`,
    prereqs: ["C05"], ext: [], sources: [SECTION],
  },

  // Slope
  {
    id: "C08", slug: "slope", title: "Slope of a line", group: "Slope", tier: "core", visual: true,
    oneLiner: t`Slope $m = \tan\theta = \frac{y_2 - y_1}{x_2 - x_1}$; it is $0$ along the X-axis, and a line parallel to the Y-axis has no slope`,
    prereqs: [], ext: ["trigonometric ratios of standard angles (Std IX Trigonometry)"], sources: [SLOPE],
  },
  {
    id: "C09", slug: "slopes-collinear-and-parallel", title: "Collinear points and parallel lines by slopes", group: "Slope", tier: "core", visual: true,
    oneLiner: t`Points are collinear when the slopes of AB and BC are equal, and lines are parallel exactly when their slopes are equal`,
    prereqs: ["C08"], ext: [], sources: [SLOPE],
  },
];
