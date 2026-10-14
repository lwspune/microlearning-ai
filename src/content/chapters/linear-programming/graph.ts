import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Linear Programming prerequisite graph — approved 2026-10-14.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault concept slugs — cetlpp-* MHT-CET. C10 is NCERT only.
 */
export const graph: GraphNode[] = [
  // Graphing
  {
    id: "C01", slug: "line-from-intercepts", title: "Boundary line from intercepts", group: "Graphing", tier: "core", visual: true,
    oneLiner: t`Draw $ax + by = c$ through its intercepts; $\frac{x}{a} + \frac{y}{b} = 1$`,
    prereqs: [], ext: ["coordinates", "straight lines"], sources: ["cetlpp-line-from-intercepts"],
  },
  {
    id: "C02", slug: "half-plane-test", title: "The half-plane test", group: "Graphing", tier: "core", visual: true,
    oneLiner: "Test one point and keep its side; not the origin when the line passes through it",
    prereqs: ["C01"], ext: ["linear inequalities"], sources: ["cetlpp-half-plane-test"],
  },
  {
    id: "C03", slug: "feasible-region", title: "The feasible region", group: "Graphing", tier: "core", visual: true,
    oneLiner: t`The overlap of every constraint, including $x \ge 0$ and $y \ge 0$`,
    prereqs: ["C02"], ext: [], sources: ["cetlpp-half-plane-test"],
  },
  {
    id: "C04", slug: "bounded-unbounded-empty", title: "Bounded, unbounded or empty", group: "Graphing", tier: "core", visual: true,
    oneLiner: "Classify the region before optimising: a first-quadrant region is not always bounded",
    prereqs: ["C03"], ext: [], sources: ["cetlpp-bounded-unbounded-empty"],
  },
  {
    id: "C05", slug: "corner-points", title: "Corner points", group: "Graphing", tier: "core", visual: true,
    oneLiner: "Solve pairs of boundary lines; drop any intersection another constraint rules out",
    prereqs: ["C03"], ext: ["simultaneous linear equations"],
    sources: ["cetlpp-vertices-of-the-feasible-region", "cetlpp-corners-from-intersections"],
  },

  // Reading figures
  {
    id: "C06", slug: "direction-from-shading", title: "≥ or ≤ from the shading", group: "Reading figures", tier: "core", visual: true,
    oneLiner: "Put a point from inside the shading into the line's expression; its sign fixes the inequality",
    prereqs: ["C02"], ext: [], sources: ["cetlpp-direction-from-a-test-point"],
  },
  {
    id: "C07", slug: "system-from-figure", title: "The system behind a figure", group: "Reading figures", tier: "core", visual: true,
    oneLiner: "Four or five lines: eliminate options one line at a time",
    prereqs: ["C06", "C03"], ext: [], sources: ["cetlpp-multi-constraint-figures"],
  },

  // Optimising
  {
    id: "C08", slug: "corner-point-method", title: "The corner-point method", group: "Optimising", tier: "core", visual: true,
    oneLiner: t`Evaluate $Z$ at every corner; the largest and smallest values are the max and min`,
    prereqs: ["C05"], ext: [], sources: ["cetlpp-corner-point-theorem", "cetlpp-corners-read-from-a-figure"],
  },
  {
    id: "C09", slug: "minimum-and-difference", title: "Minimum, negative coefficients, max − min", group: "Optimising", tier: "core", visual: true,
    oneLiner: "The minimum is not always at the origin, and the largest coordinates need not give the maximum",
    prereqs: ["C08"], ext: [], sources: ["cetlpp-minimum-and-difference"],
  },
  {
    id: "C10", slug: "unbounded-optimum", title: "Optimum over an unbounded region", group: "Optimising", tier: "core", visual: true,
    oneLiner: t`The best corner is the answer only if the half-plane $Z > M$ (or $Z < m$) misses the region`,
    prereqs: ["C08", "C04"], ext: [], sources: [],
  },
  {
    id: "C11", slug: "infinitely-many-optima", title: "Infinitely many optima", group: "Optimising", tier: "core", visual: true,
    oneLiner: "Two corners tie when the objective is parallel to an edge: every point between them is optimal",
    prereqs: ["C08"], ext: [], sources: ["cetlpp-infinitely-many-optima"],
  },

  // Word problems
  {
    id: "C12", slug: "formulating-an-lpp", title: "Formulating an LPP", group: "Word problems", tier: "core",
    oneLiner: "Name the variables, write the objective, and every constraint in one unit",
    prereqs: ["C03"], ext: [], sources: ["cetlpp-formulating-an-lpp"],
  },
  {
    id: "C13", slug: "solving-word-problems", title: "Solving a word problem end to end", group: "Word problems", tier: "core", visual: true,
    oneLiner: "Manufacturing, diet and transport: formulate, draw the region, compare the corners",
    prereqs: ["C12", "C08"], ext: [], sources: ["cetlpp-formulating-an-lpp"],
  },
];
