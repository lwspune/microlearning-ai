import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Linear Equations in Two Variables prerequisite graph (Balbharati Std IX Part 1, Ch.5): simultaneous equations by elimination and substitution, and word problems.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/linear-equations-9#${sub}`;

export const graph: GraphNode[] = [
  // Equations
  {
    id: "C01", slug: "equations-in-two-variables", title: "Linear equations in two variables", group: "Equations", tier: "core",
    oneLiner: t`$x + y = 7$ has many solutions, each a pair such as $(3, 4)$; two such equations taken together are simultaneous equations`,
    prereqs: [], ext: ["linear equations in one variable (Std VIII)"], sources: [S("Linear Equations in Two Variables")],
  },

  // Methods
  {
    id: "C02", slug: "elimination", title: "Solving by elimination", group: "Methods", tier: "core",
    oneLiner: t`Make one variable's coefficients equal, add or subtract the equations to remove it, solve, then substitute back`,
    prereqs: ["C01"], ext: [], sources: [S("Elimination Method")],
  },
  {
    id: "C03", slug: "substitution", title: "Solving by substitution", group: "Methods", tier: "core",
    oneLiner: t`Write $y$ (or $x$) from one equation in terms of the other variable, put it into the second equation and solve`,
    prereqs: ["C01"], ext: [], sources: [S("Substitution Method")],
  },
  {
    id: "C04", slug: "equations-with-fractions", title: "Equations with fractions", group: "Methods", tier: "adv",
    oneLiner: t`Clear the denominators first; in $\frac{2}{x} + \frac{3}{y} = 13$, put $p = \frac{1}{x}$ and $q = \frac{1}{y}$`,
    prereqs: ["C02"], ext: [], sources: [S("Substitution Method")],
  },

  // Word problems
  {
    id: "C05", slug: "forming-equations", title: "Word problems: forming two equations", group: "Word problems", tier: "core",
    oneLiner: t`Name the two unknowns $x$ and $y$, write one equation for each fact (ages, prices, notes, fractions), then solve`,
    prereqs: ["C02"], ext: [], sources: [S("Word Problems on Simultaneous Equations")],
  },
  {
    id: "C06", slug: "two-digit-numbers", title: "Two-digit numbers", group: "Word problems", tier: "core",
    oneLiner: t`A number with tens digit $x$ and units digit $y$ is $10x + y$; with the digits swapped it is $10y + x$`,
    prereqs: ["C05"], ext: [], sources: [S("Word Problems on Simultaneous Equations")],
  },
  {
    id: "C07", slug: "shapes-incomes-and-journeys", title: "Word problems: shapes, incomes and journeys", group: "Word problems", tier: "adv",
    oneLiner: t`The angles of a triangle add to $180^\circ$, savings are income minus expenses, distance is speed times time: each fact is an equation`,
    prereqs: ["C05"], ext: [], sources: [S("Word Problems on Simultaneous Equations")],
  },
];
