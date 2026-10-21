import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Pythagoras Theorem prerequisite graph (Balbharati Std X Part 2, Ch.2).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/pythagoras-10#${sub}`;
const THEOREM = S("Pythagoras Theorem and its Converse");

export const graph: GraphNode[] = [
  // The theorem
  {
    id: "C01", slug: "pythagoras-theorem", title: "Pythagoras theorem", group: "The theorem", tier: "core", visual: true,
    oneLiner: t`In a right-angled triangle, $(\text{hypotenuse})^2$ is the sum of the squares of the other two sides: find any side from the other two`,
    prereqs: [], ext: ["squares and square roots (Std IX Real Numbers)"], sources: [THEOREM],
  },
  {
    id: "C02", slug: "converse-and-triplets", title: "The converse and Pythagorean triplets", group: "The theorem", tier: "core", visual: true,
    oneLiner: t`If the square of the longest side equals the sum of the squares of the other two, the angle opposite it is right; such whole numbers form a Pythagorean triplet`,
    prereqs: ["C01"], ext: [], sources: [THEOREM, S("Pythagorean Triplet")],
  },
  {
    id: "C03", slug: "special-right-triangles", title: "30°–60°–90° and 45°–45°–90° triangles", group: "The theorem", tier: "core", visual: true,
    oneLiner: t`Opposite $30^\circ$ the side is half the hypotenuse, opposite $60^\circ$ it is $\frac{\sqrt{3}}{2}$ of it; in a $45^\circ$ triangle each side is $\frac{1}{\sqrt{2}}$ of the hypotenuse`,
    prereqs: ["C01"], ext: [], sources: [S("Property of 30-60-90 and 45-45-90 Triangles")],
  },
  {
    id: "C04", slug: "geometric-mean", title: "Theorem of geometric mean", group: "The theorem", tier: "core", visual: true,
    oneLiner: t`The altitude to the hypotenuse of a right triangle is the geometric mean of the two parts it cuts: $QN^2 = PN \times NR$`,
    prereqs: ["C01"], ext: ["similar triangles (Std X Similarity)"], sources: [S("Theorem of Geometric Mean")],
  },

  // Beyond right angles
  {
    id: "C05", slug: "acute-and-obtuse-angle-results", title: "Squares of sides opposite acute and obtuse angles", group: "Beyond right angles", tier: "adv", visual: true,
    oneLiner: t`With AD $\perp$ BC: opposite an acute angle $AB^2 = BC^2 + AC^2 - 2BC \cdot DC$; opposite an obtuse angle the $2BC \cdot DC$ is added`,
    prereqs: ["C01"], ext: [], sources: [S("Application of Pythagoras Theorem")],
  },
  {
    id: "C06", slug: "apollonius-theorem", title: "Apollonius theorem", group: "Beyond right angles", tier: "core", visual: true,
    oneLiner: t`For a median AM: $AB^2 + AC^2 = 2AM^2 + 2BM^2$; it finds a median or a side, and the diagonals of a parallelogram`,
    prereqs: ["C01"], ext: [], sources: [S("Apollonius Theorem")],
  },
];
