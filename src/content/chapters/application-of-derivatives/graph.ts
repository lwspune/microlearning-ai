import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Application of Derivatives prerequisite graph (Balbharati Std XII Part 2, Ch.2).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/app-derivatives-12#${sub}`;

export const graph: GraphNode[] = [
  // Tangents and rates
  {
    id: "C01", slug: "tangent-and-normal", title: "Tangent and normal at a point", group: "Tangents and rates", tier: "core", visual: true,
    oneLiner: t`The tangent at $(x_1, y_1)$ has slope $m = \left(\dfrac{dy}{dx}\right)_{(x_1, y_1)}$: $y - y_1 = m(x - x_1)$; the normal has slope $-\dfrac{1}{m}$`,
    prereqs: [], ext: ["equation of a line", "implicit differentiation"], sources: [S("Tangents and Normals")],
  },
  {
    id: "C02", slug: "tangents-with-conditions", title: "Tangents with a given slope", group: "Tangents and rates", tier: "core", visual: true,
    oneLiner: t`Set $\dfrac{dy}{dx}$ equal to the slope wanted (parallel: equal; perpendicular: $-\dfrac{1}{m}$) and solve for the points of contact`,
    prereqs: ["C01"], ext: [], sources: [S("Tangents and Normals")],
  },
  {
    id: "C03", slug: "rate-of-change", title: "Derivative as a rate of change", group: "Tangents and rates", tier: "core",
    oneLiner: t`$\dfrac{dy}{dx}$ is the rate at which $y$ changes with $x$; for motion $s(t)$, velocity $v = \dfrac{ds}{dt}$ and acceleration $a = \dfrac{dv}{dt}$`,
    prereqs: [], ext: ["derivatives of standard functions"], sources: [S("Derivative as a Rate Measure"), S("Velocity, Acceleration and Jerk")],
  },
  {
    id: "C04", slug: "related-rates", title: "Related rates", group: "Tangents and rates", tier: "core", visual: true,
    oneLiner: t`Write the relation between the quantities, differentiate both sides with respect to $t$, then substitute the known rates and values`,
    prereqs: ["C03"], ext: ["mensuration formulas", "similar triangles"], sources: [S("Derivative as a Rate Measure")],
  },
  {
    id: "C05", slug: "approximations", title: "Approximations", group: "Tangents and rates", tier: "core", visual: true,
    oneLiner: t`Near $a$, the curve hugs its tangent: $f(a + h) \approx f(a) + h\,f'(a)$, as in $\sqrt{8.95} \approx 3 - \dfrac{0.05}{6}$`,
    prereqs: ["C01"], ext: [], sources: [S("Approximations")],
  },

  // Mean value theorems
  {
    id: "C06", slug: "rolles-theorem", title: "Rolle's theorem", group: "Mean value theorems", tier: "core", visual: true,
    oneLiner: t`If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$ and $f(a) = f(b)$, then $f'(c) = 0$ for some $c$ in $(a, b)$: a horizontal tangent`,
    prereqs: [], ext: ["continuity", "differentiability"], sources: [S("Rolle's Theorem")],
  },
  {
    id: "C07", slug: "mean-value-theorem", title: "Lagrange's mean value theorem", group: "Mean value theorems", tier: "core", visual: true,
    oneLiner: t`If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, some $c$ in $(a, b)$ has $f'(c) = \dfrac{f(b) - f(a)}{b - a}$: a tangent parallel to the chord`,
    prereqs: ["C06"], ext: [], sources: [S("Lagrange's Mean Value Theorem")],
  },

  // Increasing functions and extremes
  {
    id: "C08", slug: "increasing-decreasing", title: "Increasing and decreasing functions", group: "Increasing functions and extremes", tier: "core", visual: true,
    oneLiner: t`$f$ increases where $f'(x) > 0$ and decreases where $f'(x) < 0$: find where $f' = 0$ and test the sign of $f'$ between those points`,
    prereqs: [], ext: ["solving inequalities"], sources: [S("Increasing and Decreasing Functions")],
  },
  {
    id: "C09", slug: "maxima-and-minima", title: "Local maxima and minima", group: "Increasing functions and extremes", tier: "core", visual: true,
    oneLiner: t`At a critical point $f'(c) = 0$: a maximum if $f''(c) < 0$, a minimum if $f''(c) > 0$; or watch $f'$ change sign from $+$ to $-$ (maximum) or $-$ to $+$`,
    prereqs: ["C08"], ext: ["second derivative"], sources: [S("Maxima and Minima")],
  },
  {
    id: "C10", slug: "optimisation", title: "Greatest and least values in problems", group: "Increasing functions and extremes", tier: "adv", visual: true,
    oneLiner: "Write the quantity to optimise in one variable using the constraint, find its critical point, and check it is the maximum or minimum asked for",
    prereqs: ["C09"], ext: ["mensuration formulas"], sources: [S("Maxima and Minima")],
  },
];
