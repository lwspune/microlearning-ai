import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Linear Equations in Two Variables prerequisite graph (Balbharati Std X Part 1, Ch.1).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/alg-linear-equations-10#${sub}`;
const METHODS = S("Methods of Solving Linear Equations");
const GRAPH = S("Graph of Linear Equations");
const CRAMER = S("Determinant Method (Cramer's Rule)");
const REDUCIBLE = S("Equations Reducible to Linear Form");
const WORD = S("Word Problems and Applications");

export const graph: GraphNode[] = [
  // Solving a pair
  {
    id: "C01", slug: "elimination", title: "Solving by elimination", group: "Solving a pair", tier: "core",
    oneLiner: t`Make the coefficients of one variable equal, add or subtract to remove it, then substitute back for the other`,
    prereqs: [], ext: ["linear equations in two variables (Std IX Linear Equations in Two Variables)"], sources: [METHODS],
  },
  {
    id: "C02", slug: "swapped-coefficients", title: "Equations with swapped coefficients", group: "Solving a pair", tier: "adv",
    oneLiner: t`When $ax + by = c$ and $bx + ay = d$, add and subtract them to get $x + y$ and $x - y$ first`,
    prereqs: ["C01"], ext: [], sources: [METHODS, REDUCIBLE],
  },

  // Graphs
  {
    id: "C03", slug: "graph-of-a-line", title: "Graph of a linear equation", group: "Graphs", tier: "core", visual: true,
    oneLiner: t`Choose values of $x$, find each $y$, and plot the points: every solution lies on one straight line`,
    prereqs: [], ext: ["plotting points (Std IX Co-ordinate Geometry)"], sources: [GRAPH],
  },
  {
    id: "C04", slug: "graphical-solution", title: "Solving graphically", group: "Graphs", tier: "core", visual: true,
    oneLiner: t`The two lines meet at the solution $(x, y)$; parallel lines never meet, so then there is none`,
    prereqs: ["C03"], ext: [], sources: [GRAPH],
  },

  // Determinants
  {
    id: "C05", slug: "value-of-a-determinant", title: "Value of a determinant", group: "Determinants", tier: "core",
    oneLiner: t`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$: the down-right product minus the up-right one`,
    prereqs: [], ext: [], sources: [CRAMER],
  },
  {
    id: "C06", slug: "cramers-rule", title: "Cramer's rule", group: "Determinants", tier: "core",
    oneLiner: t`Write both as $ax + by = c$; then $x = \frac{D_x}{D}$ and $y = \frac{D_y}{D}$, and $D \neq 0$ means exactly one solution`,
    prereqs: ["C05"], ext: [], sources: [CRAMER, S("Consistency of Simultaneous Equations")],
  },

  // Reducible equations and word problems
  {
    id: "C07", slug: "reducible-equations", title: "Equations reducible to linear form", group: "Reducible equations and word problems", tier: "core",
    oneLiner: t`Put $\frac{1}{x} = m$ and $\frac{1}{y} = n$ (or $\frac{1}{x + y} = p$), solve the linear pair, then go back to $x$ and $y$`,
    prereqs: ["C01"], ext: [], sources: [REDUCIBLE],
  },
  {
    id: "C08", slug: "forming-two-equations", title: "Word problems: forming two equations", group: "Reducible equations and word problems", tier: "core",
    oneLiner: t`Name the two unknowns and turn each sentence into an equation: numbers, ages, digits, fractions, money`,
    prereqs: ["C01"], ext: [], sources: [WORD],
  },
  {
    id: "C09", slug: "speed-and-boat-problems", title: "Speed and boat problems", group: "Reducible equations and word problems", tier: "adv",
    oneLiner: t`Upstream speed is $x - y$, downstream $x + y$; time $=$ distance $\div$ speed gives equations in $\frac{1}{x - y}$ and $\frac{1}{x + y}$`,
    prereqs: ["C07", "C08"], ext: [], sources: [WORD],
  },
];
