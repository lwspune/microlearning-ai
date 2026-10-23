import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Triangles prerequisite graph (Balbharati Std IX Part 2, Ch.3): the angles of a triangle, congruence, isosceles and right triangles, inequalities and similarity.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/triangles-9#${sub}`;

export const graph: GraphNode[] = [
  // Angles
  {
    id: "C01", slug: "angle-sum-and-exterior-angle", title: "Angle sum and exterior angle", group: "Angles", tier: "core", visual: true,
    oneLiner: t`The angles of a triangle add to $180^\circ$; an exterior angle equals the sum of the two remote interior angles`,
    prereqs: [], ext: ["angles made by a transversal (Std IX Parallel Lines)"], sources: [S("Theorem of remote interior angles of a triangle")],
  },

  // Congruence
  {
    id: "C02", slug: "congruence-tests", title: "Tests of congruence", group: "Congruence", tier: "core", visual: true,
    oneLiner: t`Triangles are congruent by SAS, ASA, AAS, SSS or, if right-angled, hypotenuse-side; then their corresponding parts are equal`,
    prereqs: [], ext: [], sources: [S("Congruence of triangles")],
  },
  {
    id: "C03", slug: "isosceles-triangle-theorem", title: "Isosceles triangle theorem", group: "Congruence", tier: "core", visual: true,
    oneLiner: t`Angles opposite equal sides are equal, and sides opposite equal angles are equal; an equilateral triangle's angles are all $60^\circ$`,
    prereqs: ["C02"], ext: [], sources: [S("Theorem of an isosceles triangle")],
  },
  {
    id: "C04", slug: "right-triangle-properties", title: "The median on the hypotenuse and the 30-60-90 triangle", group: "Congruence", tier: "core", visual: true,
    oneLiner: t`In a right triangle the median to the hypotenuse is half the hypotenuse; the side opposite $30^\circ$ is half the hypotenuse`,
    prereqs: ["C03"], ext: [], sources: [S("Property of median on hypotenuse of a right angled triangle")],
  },
  {
    id: "C05", slug: "medians-and-centroid", title: "Medians and the centroid", group: "Congruence", tier: "core", visual: true,
    oneLiner: t`The three medians meet at the centroid G, which divides each median in the ratio $2 : 1$ from the vertex`,
    prereqs: [], ext: [], sources: [S("Median of a triangle")],
  },
  {
    id: "C06", slug: "bisector-theorems", title: "Perpendicular bisector and angle bisector theorems", group: "Congruence", tier: "core", visual: true,
    oneLiner: t`A point on the perpendicular bisector of a segment is equidistant from its ends; a point on an angle bisector is equidistant from the arms`,
    prereqs: ["C02"], ext: [], sources: [S("Angle bisector theorem")],
  },

  // Inequalities
  {
    id: "C07", slug: "sides-and-angles", title: "Greater side, greater angle", group: "Inequalities", tier: "core", visual: true,
    oneLiner: t`In a triangle the greater side faces the greater angle (and the converse); any two sides add to more than the third`,
    prereqs: ["C01"], ext: [], sources: [S("Properties of inequalities of sides and angles of a triangle")],
  },

  // Similarity
  {
    id: "C08", slug: "similar-triangles", title: "Similar triangles", group: "Similarity", tier: "core", visual: true,
    oneLiner: t`Similar triangles have equal corresponding angles and corresponding sides in one ratio: $\triangle XYZ \sim \triangle LMN$ gives $\frac{XY}{LM} = \frac{YZ}{MN} = \frac{XZ}{LN}$`,
    prereqs: [], ext: [], sources: [S("Similar triangles")],
  },
];
