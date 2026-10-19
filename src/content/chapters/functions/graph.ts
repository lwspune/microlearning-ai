import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Functions prerequisite graph (Balbharati Std XI Part 2, Ch.6).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/functions-11#${sub}`;

export const graph: GraphNode[] = [
  // Functions
  {
    id: "C01", slug: "what-is-a-function", title: "What makes a relation a function", group: "Functions", tier: "core",
    oneLiner: "Every element of the domain has exactly one image; a vertical line meets the graph at most once",
    prereqs: [], ext: ["relations"], sources: [S("Functions and Types of Functions"), S("Representation and Graph of a Function")],
  },
  {
    id: "C02", slug: "value-of-a-function", title: "Values of a function", group: "Functions", tier: "core",
    oneLiner: t`$f(a)$: put $a$ for every $x$, brackets and all; $f(x + 1)$ is a new expression, not $f(x) + 1$`,
    prereqs: ["C01"], ext: [], sources: [S("Functions and Types of Functions")],
  },
  {
    id: "C03", slug: "domain-and-range", title: "Domain and range", group: "Functions", tier: "core",
    oneLiner: "Exclude zero denominators, negatives under even roots and non-positive log arguments",
    prereqs: ["C02"], ext: ["inequalities as intervals"], sources: [S("Functions and Types of Functions"), S("Some Basic Functions")],
  },
  {
    id: "C04", slug: "one-one-and-onto", title: "One-one, onto and how many functions", group: "Functions", tier: "core",
    oneLiner: t`One-one: different inputs, different outputs; onto: every co-domain element is hit; $n^m$ functions from $m$ to $n$ elements`,
    prereqs: ["C01"], ext: ["permutations"], sources: [S("Functions and Types of Functions")],
  },

  // Basic functions
  {
    id: "C05", slug: "modulus-and-signum", title: "Modulus and signum", group: "Basic functions", tier: "core", visual: true,
    oneLiner: t`$|x| = x$ for $x \ge 0$ and $-x$ for $x < 0$; $\operatorname{sgn}x = \frac{|x|}{x}$, with $\operatorname{sgn}0 = 0$`,
    prereqs: ["C02"], ext: [], sources: [S("Some Basic Functions")],
  },
  {
    id: "C06", slug: "greatest-integer", title: "Greatest integer and fractional part", group: "Basic functions", tier: "core", visual: true,
    oneLiner: t`$[x]$ is the integer at or below $x$: $[-2.3] = -3$, not $-2$; $\{x\} = x - [x]$`,
    prereqs: ["C02"], ext: [], sources: [S("Some Basic Functions")],
  },
  {
    id: "C07", slug: "logarithms", title: "Logarithm rules", group: "Basic functions", tier: "core",
    oneLiner: t`$\log mn = \log m + \log n$, $\log m^k = k\log m$, $\log_a b = \frac{\log b}{\log a}$; $\log_a x = y \iff a^y = x$`,
    prereqs: [], ext: ["laws of indices"], sources: [S("Some Basic Functions")],
  },
  {
    id: "C08", slug: "piecewise-functions", title: "Piecewise defined functions", group: "Basic functions", tier: "core", visual: true,
    oneLiner: "Find which piece the input falls in first, including which piece owns the boundary",
    prereqs: ["C02"], ext: [], sources: [S("Piecewise Defined Functions")],
  },

  // Combining functions
  {
    id: "C09", slug: "algebra-of-functions", title: "Algebra of functions", group: "Combining functions", tier: "core",
    oneLiner: t`$(f + g)(x) = f(x) + g(x)$; $\frac{f}{g}$ needs $g(x) \ne 0$ as well as both domains`,
    prereqs: ["C03"], ext: [], sources: [S("Algebra of Functions")],
  },
  {
    id: "C10", slug: "composition", title: "Composition of functions", group: "Combining functions", tier: "core",
    oneLiner: t`$(f \circ g)(x) = f(g(x))$: $g$ acts first; $f \circ g \ne g \circ f$ in general`,
    prereqs: ["C02"], ext: [], sources: [S("Composition of Functions")],
  },
  {
    id: "C11", slug: "inverse-functions", title: "Inverse functions", group: "Combining functions", tier: "core",
    oneLiner: t`Only a one-one onto $f$ has $f^{-1}$: write $y = f(x)$, solve for $x$; $f^{-1}(x) \ne \frac{1}{f(x)}$`,
    prereqs: ["C04", "C10"], ext: [], sources: [S("Inverse Functions")],
  },

  // NDA: not in the book (PLAN.md "NDA Maths course", phase 2c)
  {
    id: "C12", slug: "functional-equations", title: "Functional equations", group: "Functions", tier: "adv",
    oneLiner: t`Find $f$ from a rule it obeys: put in clever values such as $x = 0$ or $x \to \frac{1}{x}$, or recognise $f(x + y) = f(x) + f(y)$ and its relatives`,
    prereqs: ["C02"], ext: [], sources: [`nda/functions#Functional Equations`],
  },
];
