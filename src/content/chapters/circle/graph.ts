import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Circle prerequisite graph (Balbharati Std XI Part 1, Ch.6).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/circle-11#${sub}`;

export const graph: GraphNode[] = [
  // Equations
  {
    id: "C01", slug: "centre-radius-form", title: "Centre–radius form", group: "Equations of a circle", tier: "core", visual: true,
    oneLiner: t`$(x - h)^2 + (y - k)^2 = r^2$: the signs inside are opposite to the centre's`,
    prereqs: [], ext: ["distance formula"], sources: [S("Different Forms of the Equation of a Circle")],
  },
  {
    id: "C02", slug: "diameter-form", title: "Diameter form", group: "Equations of a circle", tier: "core", visual: true,
    oneLiner: t`Ends of a diameter $A(x_1, y_1)$, $B(x_2, y_2)$: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$`,
    prereqs: ["C01"], ext: [], sources: [S("Different Forms of the Equation of a Circle")],
  },
  {
    id: "C03", slug: "general-equation", title: "The general equation", group: "Equations of a circle", tier: "core", visual: true,
    oneLiner: t`$x^2 + y^2 + 2gx + 2fy + c = 0$: centre $(-g, -f)$, radius $\sqrt{g^2 + f^2 - c}$`,
    prereqs: ["C01"], ext: ["completing the square"], sources: [S("General Equation of a Circle")],
  },
  {
    id: "C04", slug: "circle-from-conditions", title: "Finding a circle from conditions", group: "Equations of a circle", tier: "core", visual: true,
    oneLiner: "Through three points, touching an axis, centre on a line: each condition is one equation in g, f, c",
    prereqs: ["C03"], ext: ["simultaneous linear equations"], sources: [S("General Equation of a Circle"), S("Different Forms of the Equation of a Circle")],
  },
  {
    id: "C05", slug: "parametric-form", title: "Parametric form", group: "Equations of a circle", tier: "core", visual: true,
    oneLiner: t`$x = h + r\cos\theta$, $y = k + r\sin\theta$ traces the circle once as $\theta$ goes round`,
    prereqs: ["C01"], ext: ["trigonometric functions"], sources: [S("Parametric Form of a Circle")],
  },

  // Tangents
  {
    id: "C06", slug: "tangent-at-a-point", title: "Tangent at a point", group: "Tangents", tier: "core", visual: true,
    oneLiner: t`Replace $x^2$ by $xx_1$, $2x$ by $x + x_1$ (and the same for $y$): $xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$`,
    prereqs: ["C03"], ext: [], sources: [S("Tangent and the Condition of Tangency")],
  },
  {
    id: "C07", slug: "condition-of-tangency", title: "Condition of tangency", group: "Tangents", tier: "core", visual: true,
    oneLiner: t`$y = mx + c$ touches $x^2 + y^2 = a^2$ when $c^2 = a^2(1 + m^2)$: the distance from the centre equals $r$`,
    prereqs: ["C01"], ext: ["distance of a point from a line"], sources: [S("Tangent and the Condition of Tangency")],
  },
  {
    id: "C08", slug: "tangents-from-a-point", title: "Tangents from a point; director circle", group: "Tangents", tier: "adv", visual: true,
    oneLiner: t`Length of tangent $= \sqrt{S_{11}}$; perpendicular tangents to $x^2 + y^2 = a^2$ meet on $x^2 + y^2 = 2a^2$`,
    prereqs: ["C03", "C07"], ext: [], sources: [S("Tangents from a Point and the Director Circle")],
  },

  // Two circles (MHT-CET; the book has it only in a side box)
  {
    id: "C09", slug: "two-circles", title: "Two circles and their common tangents", group: "Two circles", tier: "adv", visual: true,
    oneLiner: t`Compare the distance between the centres with $r_1 + r_2$ and $|r_1 - r_2|$: it decides touching, cutting and the number of common tangents`,
    prereqs: ["C03"], ext: ["distance formula"],
    sources: ["cetcir-relative-position-and-common-tangents", "cetcir-touching-conditions"],
  },
];
