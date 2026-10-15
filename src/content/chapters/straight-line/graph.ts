import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Straight Line prerequisite graph (Balbharati Std XI Part 1, Ch.5).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/straight-line-11#${sub}`;

export const graph: GraphNode[] = [
  // Locus and slope
  {
    id: "C01", slug: "locus", title: "Locus and its equation", group: "Locus and slope", tier: "core", visual: true,
    oneLiner: t`Write the condition on $P(x, y)$ with the distance formula, then simplify`,
    prereqs: [], ext: ["distance formula"], sources: [S("Locus and its Equation")],
  },
  {
    id: "C02", slug: "shift-of-origin", title: "Shift of origin", group: "Locus and slope", tier: "core", visual: true,
    oneLiner: t`Origin moved to $(h, k)$: $x = X + h$, $y = Y + k$; substitute, don't subtract the wrong way`,
    prereqs: ["C01"], ext: [], sources: [S("Shift of Origin")],
  },
  {
    id: "C03", slug: "slope", title: "Inclination and slope", group: "Locus and slope", tier: "core", visual: true,
    oneLiner: t`$m = \tan\theta = \frac{y_2 - y_1}{x_2 - x_1}$; equal slopes through a common point mean collinear`,
    prereqs: [], ext: ["values at standard angles"], sources: [S("Slope, Parallel and Perpendicular Lines")],
  },
  {
    id: "C04", slug: "parallel-and-perpendicular", title: "Parallel and perpendicular lines", group: "Locus and slope", tier: "core", visual: true,
    oneLiner: t`Parallel: $m_1 = m_2$; perpendicular: $m_1 m_2 = -1$ (or one vertical, one horizontal)`,
    prereqs: ["C03"], ext: [], sources: [S("Slope, Parallel and Perpendicular Lines")],
  },

  // Equations of a line
  {
    id: "C05", slug: "point-slope-and-two-point", title: "Point–slope and two-point forms", group: "Equations of a line", tier: "core", visual: true,
    oneLiner: t`$y - y_1 = m(x - x_1)$; through two points, $m$ from them first`,
    prereqs: ["C03"], ext: [], sources: [S("Equation of a Line in Standard Forms")],
  },
  {
    id: "C06", slug: "intercept-and-normal-forms", title: "Slope–intercept, intercept and normal forms", group: "Equations of a line", tier: "core", visual: true,
    oneLiner: t`$y = mx + c$; $\frac{x}{a} + \frac{y}{b} = 1$; $x\cos\alpha + y\sin\alpha = p$`,
    prereqs: ["C05"], ext: [], sources: [S("Equation of a Line in Standard Forms")],
  },
  {
    id: "C07", slug: "general-form", title: "The general form ax + by + c = 0", group: "Equations of a line", tier: "core",
    oneLiner: t`Slope $-\frac{a}{b}$, $x$-intercept $-\frac{c}{a}$, $y$-intercept $-\frac{c}{b}$`,
    prereqs: ["C06"], ext: [], sources: [S("General Form of the Equation of a Line")],
  },
  {
    id: "C08", slug: "lines-in-a-triangle", title: "Perpendiculars, medians and altitudes", group: "Equations of a line", tier: "core", visual: true,
    oneLiner: t`Parallel: same slope; perpendicular: slope $-\frac{1}{m}$. A median goes through a midpoint; an altitude is perpendicular to a side`,
    prereqs: ["C04", "C07"], ext: ["midpoint formula"], sources: [S("Equation of a Line in Standard Forms"), S("Slope, Parallel and Perpendicular Lines")],
  },

  // Angles and distances
  {
    id: "C09", slug: "angle-between-lines", title: "Angle between two lines", group: "Angles and distances", tier: "core", visual: true,
    oneLiner: t`$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$ gives the acute angle`,
    prereqs: ["C04", "C07"], ext: [], sources: [S("Angle Between Intersecting Lines")],
  },
  {
    id: "C10", slug: "point-to-line-distance", title: "Distance of a point from a line", group: "Angles and distances", tier: "core", visual: true,
    oneLiner: t`$\frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}$`,
    prereqs: ["C07"], ext: [], sources: [S("Distance of a Point from a Line")],
  },
  {
    id: "C11", slug: "parallel-lines-distance", title: "Distance between parallel lines", group: "Angles and distances", tier: "core", visual: true,
    oneLiner: t`Make the $x$ and $y$ coefficients equal first; then $\frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$`,
    prereqs: ["C10"], ext: [], sources: [S("Distance Between Two Parallel Lines")],
  },
  {
    id: "C12", slug: "family-of-lines", title: "Lines through an intersection", group: "Angles and distances", tier: "adv", visual: true,
    oneLiner: t`$L_1 + kL_2 = 0$ passes through the meeting point of $L_1 = 0$ and $L_2 = 0$; find $k$ from one more condition`,
    prereqs: ["C07"], ext: ["simultaneous linear equations"], sources: [S("Family of Lines")],
  },
];
