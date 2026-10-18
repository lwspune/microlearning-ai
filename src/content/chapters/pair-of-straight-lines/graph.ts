import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Pair of Straight Lines prerequisite graph (Balbharati Std XII Part 1, Ch.4).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/pair-lines-12#${sub}`;

export const graph: GraphNode[] = [
  // Lines through the origin
  {
    id: "C01", slug: "combined-equation", title: "Combined equation of two lines", group: "Lines through the origin", tier: "core", visual: true,
    oneLiner: t`Multiply the two equations, each written $= 0$: $(a_1x + b_1y)(a_2x + b_2y) = 0$ gives a homogeneous equation of degree two`,
    prereqs: [], ext: ["equation of a line"], sources: [S("Combined Equation of a Pair of Lines")],
  },
  {
    id: "C02", slug: "separating-the-lines", title: "Separate equations from the combined one", group: "Lines through the origin", tier: "core", visual: true,
    oneLiner: t`Factorise $ax^2 + 2hxy + by^2 = 0$, or solve $bm^2 + 2hm + a = 0$ for the slopes $m = y/x$`,
    prereqs: ["C01"], ext: ["factorising quadratics"], sources: [S("Combined Equation of a Pair of Lines")],
  },
  {
    id: "C03", slug: "sum-and-product-of-slopes", title: "Sum and product of slopes", group: "Lines through the origin", tier: "core",
    oneLiner: t`$m_1 + m_2 = -\dfrac{2h}{b}$, $m_1m_2 = \dfrac{a}{b}$; use them to find a missing coefficient from a condition on the slopes`,
    prereqs: ["C02"], ext: ["sum and product of roots"], sources: [S("Combined Equation of a Pair of Lines")],
  },
  {
    id: "C04", slug: "angle-between-the-lines", title: "Angle between the lines", group: "Lines through the origin", tier: "core", visual: true,
    oneLiner: t`$\tan\theta = \left|\dfrac{2\sqrt{h^2 - ab}}{a + b}\right|$; perpendicular when $a + b = 0$, coincident when $h^2 = ab$`,
    prereqs: ["C03"], ext: ["angle between two lines"], sources: [S("Angle between a Pair of Lines")],
  },
  {
    id: "C05", slug: "lines-with-a-given-condition", title: "Pairs perpendicular or at an angle to given lines", group: "Lines through the origin", tier: "adv", visual: true,
    oneLiner: t`Through the origin, perpendicular to the pair $ax^2 + 2hxy + by^2 = 0$: $bx^2 - 2hxy + ay^2 = 0$; at an angle $\alpha$ to a line, from $\tan\alpha$`,
    prereqs: ["C04"], ext: [], sources: [S("Angle between a Pair of Lines"), S("Combined Equation of a Pair of Lines")],
  },
  {
    id: "C06", slug: "triangles-from-a-pair", title: "Triangles formed with a third line", group: "Lines through the origin", tier: "adv", visual: true,
    oneLiner: "Find where the pair meets the third line, then the angles or the area of the triangle; equal angles of 60° make it equilateral",
    prereqs: ["C04"], ext: ["area of a triangle from coordinates"], sources: [S("Angle between a Pair of Lines")],
  },
  {
    id: "C07", slug: "angle-bisectors", title: "Bisectors of the angles between the lines", group: "Lines through the origin", tier: "adv", visual: true,
    oneLiner: t`The joint equation of the bisectors of $ax^2 + 2hxy + by^2 = 0$ is $h(x^2 - y^2) = (a - b)xy$`,
    prereqs: ["C03"], ext: [], sources: [S("Angle Bisectors of a Pair of Lines")],
  },

  // General equation
  {
    id: "C08", slug: "general-second-degree", title: "When a general equation is a pair of lines", group: "General equation", tier: "core",
    oneLiner: t`$ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ is a pair of lines when $\begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = 0$ and $h^2 \ge ab$`,
    prereqs: ["C02"], ext: ["3 by 3 determinants"], sources: [S("General Second Degree Equation of Two Lines")],
  },
  {
    id: "C09", slug: "general-pair-properties", title: "Angle, parallel pair and point of intersection", group: "General equation", tier: "adv", visual: true,
    oneLiner: t`The angle depends only on $a, h, b$; the pair through a point parallel to $ax^2 + 2hxy + by^2 = 0$ shifts $x$ and $y$; the lines meet where the two separated lines cross`,
    prereqs: ["C04", "C08"], ext: [], sources: [S("General Second Degree Equation of Two Lines")],
  },
];
