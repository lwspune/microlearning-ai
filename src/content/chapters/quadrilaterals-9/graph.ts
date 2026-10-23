import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Quadrilaterals prerequisite graph (Balbharati Std IX Part 2, Ch.5): parallelograms and their tests, the special parallelograms, the trapezium and the midpoint theorem.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/quadrilaterals-9#${sub}`;

export const graph: GraphNode[] = [
  // Parallelograms
  {
    id: "C01", slug: "parallelogram-properties", title: "Properties of a parallelogram", group: "Parallelograms", tier: "core", visual: true,
    oneLiner: t`Opposite sides and opposite angles are equal, adjacent angles add to $180^\circ$, and the diagonals bisect each other`,
    prereqs: [], ext: ["tests of congruence (Std IX Triangles)"], sources: [S("Parallelogram")],
  },
  {
    id: "C02", slug: "tests-for-a-parallelogram", title: "Tests for a parallelogram", group: "Parallelograms", tier: "core", visual: true,
    oneLiner: t`A quadrilateral is a parallelogram if both pairs of opposite sides (or angles) are equal, its diagonals bisect each other, or one pair of sides is equal and parallel`,
    prereqs: ["C01"], ext: [], sources: [S("Tests of parallelogram")],
  },

  // Special parallelograms
  {
    id: "C03", slug: "rhombus-rectangle-square", title: "Rhombus, rectangle and square", group: "Special parallelograms", tier: "core", visual: true,
    oneLiner: t`A rectangle's diagonals are equal, a rhombus's diagonals are perpendicular bisectors of each other, and a square's are both`,
    prereqs: ["C01"], ext: [], sources: [S("Rhombus"), S("Rectangles"), S("Square")],
  },

  // Trapezium
  {
    id: "C04", slug: "trapezium", title: "Trapezium", group: "Trapezium", tier: "core", visual: true,
    oneLiner: t`A trapezium has one pair of parallel sides; the angles between them on each side add to $180^\circ$, and an isosceles trapezium has equal base angles`,
    prereqs: [], ext: [], sources: [S("Trapezium")],
  },

  // Midpoint theorem
  {
    id: "C05", slug: "midpoint-theorem", title: "Midpoint theorem", group: "Midpoint theorem", tier: "core", visual: true,
    oneLiner: t`The segment joining the midpoints of two sides of a triangle is parallel to the third side and half of it`,
    prereqs: ["C02"], ext: [], sources: [S("Mid point theorem")],
  },
];
