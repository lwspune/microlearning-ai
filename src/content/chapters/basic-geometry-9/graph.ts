import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Basic Concepts in Geometry prerequisite graph (Balbharati Std IX Part 2, Ch.1): distance on a number line, betweenness, segments and conditional statements.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/basic-geometry-9#${sub}`;

export const graph: GraphNode[] = [
  // Distance
  {
    id: "C01", slug: "distance-on-a-number-line", title: "Distance on a number line", group: "Distance", tier: "core", visual: true,
    oneLiner: t`If A and B have co-ordinates $a$ and $b$, $d(A, B) = |a - b|$: the larger co-ordinate minus the smaller`,
    prereqs: [], ext: ["absolute value (Std IX Real Numbers)"], sources: [S("Co-ordinates of Points and Distance")],
  },
  {
    id: "C02", slug: "betweenness", title: "Betweenness", group: "Distance", tier: "core", visual: true,
    oneLiner: t`B is between A and C (A-B-C) when $d(A, B) + d(B, C) = d(A, C)$; then A, B and C are collinear`,
    prereqs: ["C01"], ext: [], sources: [S("Betweenness"), S("Point, Line and Plane")],
  },

  // Segments
  {
    id: "C03", slug: "segments-and-rays", title: "Segments, rays and the midpoint", group: "Segments", tier: "core", visual: true,
    oneLiner: t`Seg AB has length $l(AB) = d(A, B)$; congruent segments have equal lengths; the midpoint M of seg AB has $AM = MB = \frac{1}{2}AB$`,
    prereqs: ["C01"], ext: [], sources: [S("Line Segment, Ray and Congruence")],
  },

  // Proof
  {
    id: "C04", slug: "conditional-statements", title: "Conditional statements and converses", group: "Proof", tier: "core",
    oneLiner: t`In 'if p, then q', p is the given part (antecedent) and q the part to prove (consequent); the converse swaps them and need not be true`,
    prereqs: [], ext: [], sources: [S("Conditional Statements and Converse"), S("Proof")],
  },
];
