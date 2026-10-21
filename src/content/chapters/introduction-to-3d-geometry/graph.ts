import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Introduction to Three Dimensional Geometry prerequisite graph: NCERT Class 11 Ch.11 as rationalised,
 * built for CBSE (PLAN.md "CBSE Maths course", phase 2). The MH Board books teach 3D coordinates only
 * through Std XII vectors, which a Class 11 student hasn't met.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault `CBSE Class 11` subtopics.
 */
const S = (sub: string) => `cbse-11/introduction-to-three-dimensional-geometry#${sub}`;
const AXES = S("Coordinate Axes and Planes in Space");
const POINT = S("Coordinates of a Point in Space");
const DISTANCE = S("Distance Between Two Points");

export const graph: GraphNode[] = [
  // Points in space
  {
    id: "C01", slug: "coordinates-in-space", title: "Axes, planes and octants", group: "Points in space", tier: "core",
    oneLiner: t`Three perpendicular axes give each point a triple $(x, y, z)$; the coordinate planes split space into $8$ octants, told apart by the signs`,
    prereqs: [], ext: ["coordinates in a plane"], sources: [AXES, POINT],
  },
  {
    id: "C02", slug: "distance-in-space", title: "Distance between two points", group: "Distances", tier: "core",
    oneLiner: t`$PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$: the plane formula with a third square`,
    prereqs: ["C01"], ext: [], sources: [DISTANCE],
  },
  {
    id: "C03", slug: "shapes-from-distances", title: "Collinear points and shapes", group: "Distances", tier: "core",
    oneLiner: t`Points are collinear when two distances add up to the third; side lengths show an isosceles, right-angled or equilateral triangle, or a parallelogram`,
    prereqs: ["C02"], ext: ["Pythagoras' theorem"], sources: [DISTANCE],
  },
  {
    id: "C04", slug: "midpoint-and-centroid", title: "Mid-point and centroid", group: "Distances", tier: "core",
    oneLiner: t`Average the coordinates: two points for the mid-point, three vertices for the centroid; a parallelogram's diagonals share their mid-point`,
    prereqs: ["C02"], ext: [], sources: [POINT, DISTANCE],
  },
  {
    id: "C05", slug: "loci-in-space", title: "Loci from distances", group: "Distances", tier: "adv",
    oneLiner: t`Write the condition with the distance formula for a general point $P(x, y, z)$, square, and simplify to the equation of the set`,
    prereqs: ["C02"], ext: [], sources: [DISTANCE],
  },
];
