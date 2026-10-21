import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Geometric Constructions prerequisite graph (Balbharati Std X Part 2, Ch.4). The drawing stays on
 * paper; items ask for the order of steps, the measures used and what a construction gives
 * (owner, 2026-10-21). Std IX constructions (bisectors, circumcircle) come with the Std IX waves.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/geo-constructions-10#${sub}`;
const TANGENT = S("Construction of a Tangent to a Circle");

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "constructing-a-similar-triangle", title: "Constructing a similar triangle", group: "Constructions", tier: "core", visual: true,
    oneLiner: t`To make $\triangle A'BC'$ with $AB : A'B = m : n$, mark the larger of $m$ and $n$ equal parts on a ray from B, join, and draw parallels`,
    prereqs: [], ext: ["similar triangles (Std X Similarity)", "constructing a triangle from given parts (Std IX Constructions)"], sources: [S("Construction of a Similar Triangle")],
  },
  {
    id: "C02", slug: "tangent-at-a-point", title: "Tangent at a point on the circle", group: "Constructions", tier: "core", visual: true,
    oneLiner: t`With the centre: draw the radius and a perpendicular to it at the point; without it: use a chord and the angle in the alternate segment`,
    prereqs: [], ext: ["tangent and radius (Std X Circle)"], sources: [TANGENT],
  },
  {
    id: "C03", slug: "tangents-from-an-outside-point", title: "Tangents from an outside point", group: "Constructions", tier: "core", visual: true,
    oneLiner: t`Bisect OP, draw the circle on OP as diameter, and join P to where it cuts the circle; each tangent is $\sqrt{OP^2 - r^2}$ long`,
    prereqs: [], ext: ["angle in a semicircle (Std X Circle)"], sources: [TANGENT],
  },
];
