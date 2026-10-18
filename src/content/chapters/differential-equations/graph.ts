import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Differential Equations prerequisite graph (Balbharati Std XII Part 2, Ch.6).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/diff-equations-12#${sub}`;

export const graph: GraphNode[] = [
  // Describing equations
  {
    id: "C01", slug: "order-and-degree", title: "Order and degree", group: "Describing equations", tier: "core",
    oneLiner: t`The order is the highest derivative present; the degree is its power once the equation is free of radicals and fractions in the derivatives`,
    prereqs: [], ext: ["higher order derivatives"], sources: [S("Order and Degree of a Differential Equation")],
  },
  {
    id: "C02", slug: "forming-equations", title: "Forming a differential equation", group: "Describing equations", tier: "core",
    oneLiner: t`Differentiate as many times as there are arbitrary constants, then eliminate the constants; the order equals their number`,
    prereqs: ["C01"], ext: [], sources: [S("Formation of a Differential Equation")],
  },
  {
    id: "C03", slug: "general-and-particular-solutions", title: "General and particular solutions", group: "Describing equations", tier: "core",
    oneLiner: t`A solution satisfies the equation; the general one has as many constants as the order, and a condition like $y(0) = 1$ fixes them for a particular solution`,
    prereqs: ["C01"], ext: [], sources: [S("Solution of a Differential Equation")],
  },

  // Solving
  {
    id: "C04", slug: "variables-separable", title: "Variables separable", group: "Solving", tier: "core",
    oneLiner: t`Write $\dfrac{dy}{dx} = f(x)\,g(y)$ as $\dfrac{dy}{g(y)} = f(x)\,dx$ and integrate both sides; add one constant`,
    prereqs: ["C03"], ext: ["indefinite integration"], sources: [S("Solution of a Differential Equation")],
  },
  {
    id: "C05", slug: "reducible-to-separable", title: "Reducing to variables separable", group: "Solving", tier: "adv",
    oneLiner: t`For $\dfrac{dy}{dx} = f(ax + by + c)$, put $v = ax + by + c$; the equation in $v$ and $x$ then separates`,
    prereqs: ["C04"], ext: [], sources: [S("Solution of a Differential Equation")],
  },
  {
    id: "C06", slug: "homogeneous-equations", title: "Homogeneous equations", group: "Solving", tier: "core",
    oneLiner: t`If $\dfrac{dy}{dx} = F\left(\dfrac{y}{x}\right)$, put $y = vx$ so $\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$, separate $v$ and $x$, then put back $v = \dfrac{y}{x}$`,
    prereqs: ["C04"], ext: [], sources: [S("Solution of a Differential Equation")],
  },
  {
    id: "C07", slug: "linear-equations", title: "Linear differential equations", group: "Solving", tier: "core",
    oneLiner: t`For $\dfrac{dy}{dx} + Py = Q$, multiply by $\text{I.F.} = e^{\int P\,dx}$: then $y\cdot\text{I.F.} = \int Q\cdot\text{I.F.}\,dx + c$`,
    prereqs: ["C04"], ext: ["integration by parts"], sources: [S("Solution of a Differential Equation")],
  },

  // Applications
  {
    id: "C08", slug: "growth-and-decay", title: "Growth and decay", group: "Applications", tier: "core", visual: true,
    oneLiner: t`If $\dfrac{dx}{dt} = kx$, then $x = x_0e^{kt}$: use two known values to find $k$, then the time or amount asked (population, radioactive decay, interest)`,
    prereqs: ["C04"], ext: ["logarithms"], sources: [S("Applications of Differential Equations")],
  },
  {
    id: "C09", slug: "other-applications", title: "Cooling, curves and other models", group: "Applications", tier: "adv", visual: true,
    oneLiner: t`Newton's law of cooling $\dfrac{d\theta}{dt} = -k(\theta - \theta_0)$; a curve from its slope condition; set up the equation, solve it, then use the given values`,
    prereqs: ["C08"], ext: [], sources: [S("Applications of Differential Equations"), S("Solution of a Differential Equation")],
  },
];
