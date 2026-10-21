import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Similarity prerequisite graph (Balbharati Std X Part 2, Ch.1).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/geo-similarity-10#${sub}`;
const AREAS = S("Ratio of Areas of Two Triangles");
const BPT = S("Basic Proportionality Theorem");
const BISECTOR = S("Property of an Angle Bisector of a Triangle");
const TESTS = S("Tests of Similarity of Triangles");
const SIMILAR_AREAS = S("Theorem of Areas of Similar Triangles");

export const graph: GraphNode[] = [
  // Areas and proportional segments
  {
    id: "C01", slug: "ratio-of-areas", title: "Ratio of areas of two triangles", group: "Areas and proportional segments", tier: "core", visual: true,
    oneLiner: t`$\frac{A_1}{A_2} = \frac{b_1 h_1}{b_2 h_2}$: with equal heights the areas are in the ratio of the bases, with equal bases in the ratio of the heights`,
    prereqs: [], ext: ["area of a triangle (Std IX)"], sources: [AREAS],
  },
  {
    id: "C02", slug: "basic-proportionality", title: "Basic proportionality theorem", group: "Areas and proportional segments", tier: "core", visual: true,
    oneLiner: t`A line parallel to one side cuts the other two sides in the same ratio, $\frac{AD}{DB} = \frac{AE}{EC}$; and if they are cut in the same ratio, the line is parallel`,
    prereqs: [], ext: ["parallel lines (Std IX Parallel Lines)"], sources: [BPT],
  },
  {
    id: "C03", slug: "parallel-lines-and-transversals", title: "Three parallel lines and two transversals", group: "Areas and proportional segments", tier: "core", visual: true,
    oneLiner: t`Three parallel lines cut any two transversals in the same ratio: $\frac{AB}{BC} = \frac{PQ}{QR}$`,
    prereqs: ["C02"], ext: [], sources: [BPT],
  },
  {
    id: "C04", slug: "angle-bisector-property", title: "Property of an angle bisector", group: "Areas and proportional segments", tier: "core", visual: true,
    oneLiner: t`The bisector of an angle of a triangle divides the opposite side in the ratio of the other two sides: $\frac{PS}{SQ} = \frac{PR}{RQ}$`,
    prereqs: [], ext: [], sources: [BISECTOR],
  },

  // Similar triangles
  {
    id: "C05", slug: "tests-of-similarity", title: "Tests of similarity", group: "Similar triangles", tier: "core", visual: true,
    oneLiner: t`Two triangles are similar by AAA (or AA), SAS (one angle and the sides around it in proportion) or SSS (all sides in proportion), with vertices matched in order`,
    prereqs: [], ext: ["congruence of triangles (Std IX Triangles)"], sources: [TESTS],
  },
  {
    id: "C06", slug: "using-similarity", title: "Using similar triangles", group: "Similar triangles", tier: "core", visual: true,
    oneLiner: t`In similar triangles the corresponding sides are in proportion: match the vertices, write the ratio, and find the unknown length`,
    prereqs: ["C05"], ext: [], sources: [TESTS],
  },
  {
    id: "C07", slug: "areas-of-similar-triangles", title: "Areas of similar triangles", group: "Similar triangles", tier: "core",
    oneLiner: t`The areas of similar triangles are in the ratio of the squares of corresponding sides: $\frac{A_1}{A_2} = \frac{a_1^2}{a_2^2}$`,
    prereqs: ["C05"], ext: [], sources: [SIMILAR_AREAS],
  },
];
