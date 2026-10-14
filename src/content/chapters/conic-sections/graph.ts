import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Conic Sections prerequisite graph (Balbharati Std XI Part 1, Ch.7).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/conic-sections-11#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "focus-directrix-eccentricity", title: "Focus, directrix and eccentricity", group: "Conics", tier: "core", visual: true,
    oneLiner: t`$\frac{SP}{PM} = e$: a parabola when $e = 1$, an ellipse when $e < 1$, a hyperbola when $e > 1$`,
    prereqs: [], ext: ["distance formula", "distance of a point from a line"], sources: [S("Parabola — Standard Equation and Tracing")],
  },

  // Parabola
  {
    id: "C02", slug: "parabola-standard", title: "The parabola y² = 4ax", group: "Parabola", tier: "core", visual: true,
    oneLiner: t`Focus $(a, 0)$, directrix $x = -a$, latus rectum $4a$, axis along $x$`,
    prereqs: ["C01"], ext: [], sources: [S("Parabola — Standard Equation and Tracing")],
  },
  {
    id: "C03", slug: "parabola-other-forms", title: "The other three parabolas", group: "Parabola", tier: "core", visual: true,
    oneLiner: t`$y^2 = -4ax$ opens left; $x^2 = 4ay$ up, $x^2 = -4ay$ down: the squared variable is across the axis`,
    prereqs: ["C02"], ext: [], sources: [S("Parabola — Other Standard and Parametric Forms")],
  },
  {
    id: "C04", slug: "parabola-parametric", title: "Parametric points and focal distance", group: "Parabola", tier: "core", visual: true,
    oneLiner: t`$(at^2, 2at)$ lies on $y^2 = 4ax$; its focal distance is $a + x_1$`,
    prereqs: ["C02"], ext: [], sources: [S("Parabola — Other Standard and Parametric Forms")],
  },
  {
    id: "C05", slug: "parabola-tangents", title: "Tangents to a parabola", group: "Parabola", tier: "core", visual: true,
    oneLiner: t`At $(x_1, y_1)$: $yy_1 = 2a(x + x_1)$; $y = mx + c$ touches when $c = \frac{a}{m}$`,
    prereqs: ["C04"], ext: [], sources: [S("Tangents to a Parabola")],
  },

  // Ellipse
  {
    id: "C06", slug: "ellipse-standard", title: "The ellipse x²/a² + y²/b² = 1", group: "Ellipse", tier: "core", visual: true,
    oneLiner: t`$b^2 = a^2(1 - e^2)$; foci $(\pm ae, 0)$, directrices $x = \pm\frac{a}{e}$, latus rectum $\frac{2b^2}{a}$`,
    prereqs: ["C01"], ext: [], sources: [S("Ellipse — Standard Equation and Properties")],
  },
  {
    id: "C07", slug: "ellipse-from-data", title: "Finding an ellipse from its data", group: "Ellipse", tier: "core", visual: true,
    oneLiner: "Foci, vertices, eccentricity or latus rectum: turn each into an equation in a and b",
    prereqs: ["C06"], ext: [], sources: [S("Ellipse — Standard Equation and Properties")],
  },
  {
    id: "C08", slug: "ellipse-focal-property", title: "Focal distances of an ellipse", group: "Ellipse", tier: "core", visual: true,
    oneLiner: t`$SP = a - ex_1$, $S'P = a + ex_1$, so $SP + S'P = 2a$ for every point`,
    prereqs: ["C06"], ext: [], sources: [S("Ellipse — Standard Equation and Properties")],
  },
  {
    id: "C09", slug: "ellipse-tangents", title: "Tangents to an ellipse", group: "Ellipse", tier: "core", visual: true,
    oneLiner: t`At $(x_1, y_1)$: $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$; $y = mx + c$ touches when $c^2 = a^2m^2 + b^2$`,
    prereqs: ["C06"], ext: [], sources: [S("Tangents to an Ellipse")],
  },
  {
    id: "C10", slug: "auxiliary-director-circles", title: "Auxiliary and director circles", group: "Ellipse", tier: "adv", visual: true,
    oneLiner: t`Auxiliary circle $x^2 + y^2 = a^2$; perpendicular tangents meet on $x^2 + y^2 = a^2 + b^2$`,
    prereqs: ["C09"], ext: [], sources: [S("Auxiliary and Director Circles of an Ellipse"), S("Tangents to an Ellipse")],
  },

  // Hyperbola
  {
    id: "C11", slug: "hyperbola-standard", title: "The hyperbola x²/a² − y²/b² = 1", group: "Hyperbola", tier: "core", visual: true,
    oneLiner: t`$b^2 = a^2(e^2 - 1)$; foci $(\pm ae, 0)$, latus rectum $\frac{2b^2}{a}$; the minus sign picks the axis`,
    prereqs: ["C01"], ext: [], sources: [S("Hyperbola — Standard Equation and Properties")],
  },
  {
    id: "C12", slug: "hyperbola-from-data", title: "Finding a hyperbola from its data", group: "Hyperbola", tier: "core", visual: true,
    oneLiner: t`Foci, vertices, eccentricity: $a$ is half the transverse axis, and now $a^2e^2 = a^2 + b^2$`,
    prereqs: ["C11"], ext: [], sources: [S("Hyperbola — Standard Equation and Properties")],
  },
  {
    id: "C13", slug: "hyperbola-tangents", title: "Tangents to a hyperbola", group: "Hyperbola", tier: "core", visual: true,
    oneLiner: t`At $(x_1, y_1)$: $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$; $y = mx + c$ touches when $c^2 = a^2m^2 - b^2$`,
    prereqs: ["C11"], ext: [], sources: [S("Tangents to a Hyperbola")],
  },
  {
    id: "C14", slug: "asymptotes", title: "Asymptotes and the director circle", group: "Hyperbola", tier: "adv", visual: true,
    oneLiner: t`Asymptotes $y = \pm\frac{b}{a}x$; perpendicular tangents meet on $x^2 + y^2 = a^2 - b^2$`,
    prereqs: ["C13"], ext: [], sources: [S("Hyperbola — Standard Equation and Properties"), S("Tangents to a Hyperbola")],
  },
];
