import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Constructions of Triangles prerequisite graph (Balbharati Std IX Part 2, Ch.4): triangles from a base, a base angle and a sum or difference of sides, or from the perimeter.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/constructions-9#${sub}`;

export const graph: GraphNode[] = [
  // Constructions
  {
    id: "C01", slug: "base-angle-and-sum", title: "Base, base angle and sum of the other sides", group: "Constructions", tier: "core", visual: true,
    oneLiner: t`Mark the sum along the arm of the base angle; the perpendicular bisector of the segment from its end to the base's other end gives the third vertex`,
    prereqs: [], ext: ["the perpendicular bisector of a segment (Std VII)"], sources: [S("Construction Given Base, Base Angle and Sum of Remaining Sides")],
  },
  {
    id: "C02", slug: "base-angle-and-difference", title: "Base, base angle and difference of the other sides", group: "Constructions", tier: "core", visual: true,
    oneLiner: t`Mark the difference on the arm or on its extension, then use the perpendicular bisector again; which side is longer decides where`,
    prereqs: ["C01"], ext: [], sources: [S("Construction Given Base, Base Angle and Difference of Remaining Sides")],
  },
  {
    id: "C03", slug: "two-angles-and-perimeter", title: "Two angles and the perimeter", group: "Constructions", tier: "core", visual: true,
    oneLiner: t`Draw the perimeter as one segment with half of each base angle at its ends; perpendicular bisectors then cut off the base`,
    prereqs: [], ext: [], sources: [S("Construction Given Two Angles and Perimeter"), S("Construction Given Perimeter and Ratio of Sides")],
  },
];
