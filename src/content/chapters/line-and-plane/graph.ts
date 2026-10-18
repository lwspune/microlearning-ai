import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Line and Plane prerequisite graph (Balbharati Std XII Part 1, Ch.6).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/line-planes-12#${sub}`;

export const graph: GraphNode[] = [
  // Lines
  {
    id: "C01", slug: "equation-of-a-line", title: "Vector and Cartesian equations of a line", group: "Lines", tier: "core", visual: true,
    oneLiner: t`Through $\vec a$ along $\vec b$: $\vec r = \vec a + \lambda\vec b$, or $\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}$; through two points, take $\vec b = \vec B - \vec A$`,
    prereqs: [], ext: ["vectors in space", "direction ratios"], sources: [S("Vector and Cartesian Equations of a Line")],
  },
  {
    id: "C02", slug: "angle-between-lines", title: "Angle between two lines", group: "Lines", tier: "core",
    oneLiner: t`$\cos\theta = \dfrac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}$ from the direction vectors; perpendicular when $a_1a_2 + b_1b_2 + c_1c_2 = 0$`,
    prereqs: ["C01"], ext: ["dot product"], sources: [S("Vector and Cartesian Equations of a Line")],
  },
  {
    id: "C03", slug: "point-to-line", title: "Distance of a point from a line", group: "Lines", tier: "core", visual: true,
    oneLiner: t`Write the foot as $\vec a + \lambda\vec b$, make $\overrightarrow{PM}\cdot\vec b = 0$ to find $\lambda$, then measure $PM$`,
    prereqs: ["C01"], ext: ["dot product"], sources: [S("Distance of a Point from a Line")],
  },
  {
    id: "C04", slug: "shortest-distance", title: "Shortest distance between two lines", group: "Lines", tier: "core", visual: true,
    oneLiner: t`Skew lines: $d = \dfrac{|(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}$; parallel lines: $d = \dfrac{|(\vec a_2 - \vec a_1)\times\vec b|}{|\vec b|}$`,
    prereqs: ["C01"], ext: ["cross product", "scalar triple product"], sources: [S("Skew Lines and Shortest Distance")],
  },
  {
    id: "C05", slug: "intersecting-and-coplanar-lines", title: "Intersecting and coplanar lines", group: "Lines", tier: "core",
    oneLiner: t`Two lines are coplanar (meet or are parallel) when $(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2) = 0$; find the meeting point by equating the parameters`,
    prereqs: ["C04"], ext: [], sources: [S("Coplanarity of Two Lines"), S("Skew Lines and Shortest Distance")],
  },

  // Planes
  {
    id: "C06", slug: "equation-of-a-plane", title: "Equation of a plane from a normal", group: "Planes", tier: "core", visual: true,
    oneLiner: t`Through $\vec a$ with normal $\vec n$: $\vec r\cdot\vec n = \vec a\cdot\vec n$, i.e. $ax + by + cz = d$; normal form $\vec r\cdot\hat n = p$ with $p$ the distance from O`,
    prereqs: [], ext: ["dot product"], sources: [S("Equations of a Plane")],
  },
  {
    id: "C07", slug: "plane-through-points", title: "Plane through three points or containing lines", group: "Planes", tier: "core",
    oneLiner: t`Take the normal as a cross product of two directions in the plane, or set the determinant of $\vec r - \vec a$ and the two directions to $0$`,
    prereqs: ["C06"], ext: ["cross product"], sources: [S("Equations of a Plane"), S("Coplanarity of Two Lines")],
  },
  {
    id: "C08", slug: "foot-from-origin", title: "Foot of the perpendicular and intercepts", group: "Planes", tier: "core", visual: true,
    oneLiner: t`The foot from O to $ax + by + cz = d$ is $\dfrac{d}{a^2 + b^2 + c^2}(a, b, c)$; intercept form $\dfrac{x}{a} + \dfrac{y}{b} + \dfrac{z}{c} = 1$`,
    prereqs: ["C06"], ext: [], sources: [S("Equations of a Plane")],
  },
  {
    id: "C09", slug: "point-to-plane", title: "Distance of a point from a plane", group: "Planes", tier: "core",
    oneLiner: t`$d = \dfrac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}}$, or $\dfrac{|\vec p\cdot\vec n - d|}{|\vec n|}$ in vector form`,
    prereqs: ["C06"], ext: [], sources: [S("Distance of a Point from a Plane")],
  },
  {
    id: "C10", slug: "angle-between-planes", title: "Angle between planes, and a line and a plane", group: "Planes", tier: "core",
    oneLiner: t`Between planes, the angle between their normals; between a line and a plane, $\sin\theta = \dfrac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$`,
    prereqs: ["C06"], ext: ["dot product"], sources: [S("Angle Between Planes and Line-Plane Angle")],
  },
  {
    id: "C11", slug: "line-and-plane-together", title: "A line meeting or lying in a plane", group: "Planes", tier: "adv",
    oneLiner: t`Put the line's general point into the plane to find where they meet; the line lies in the plane when $\vec b\cdot\vec n = 0$ and one point satisfies it`,
    prereqs: ["C01", "C10"], ext: [], sources: [S("Angle Between Planes and Line-Plane Angle"), S("Equations of a Plane")],
  },
];
