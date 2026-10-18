import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Probability Distributions prerequisite graph (Balbharati Std XII Part 2, Ch.7).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/prob-distributions-12#${sub}`;

export const graph: GraphNode[] = [
  // Discrete random variables
  {
    id: "C01", slug: "random-variables", title: "Random variables", group: "Discrete random variables", tier: "core",
    oneLiner: "A random variable gives a number to each outcome of an experiment; it is discrete when its values can be listed, continuous when they fill an interval",
    prereqs: [], ext: ["probability of an event", "sample space"], sources: [S("Random Variables and Their Types")],
  },
  {
    id: "C02", slug: "probability-mass-function", title: "Probability mass function", group: "Discrete random variables", tier: "core", visual: true,
    oneLiner: t`A p.m.f. lists $P(X = x)$ for each value: every probability is between $0$ and $1$ and they add to $1$; use the total to find an unknown $k$`,
    prereqs: ["C01"], ext: [], sources: [S("Probability Mass Function of a Discrete Random Variable")],
  },
  {
    id: "C03", slug: "distribution-from-experiment", title: "Writing a probability distribution", group: "Discrete random variables", tier: "core",
    oneLiner: "List every value the random variable can take, find the probability of each from the experiment, and check that they add to 1",
    prereqs: ["C02"], ext: ["counting with combinations"], sources: [S("Probability Mass Function of a Discrete Random Variable")],
  },
  {
    id: "C04", slug: "expected-value-and-variance", title: "Expected value and variance", group: "Discrete random variables", tier: "core",
    oneLiner: t`$E(X) = \sum x\,P(x)$; $\text{Var}(X) = \sum x^2P(x) - [E(X)]^2$; the standard deviation is $\sqrt{\text{Var}(X)}$`,
    prereqs: ["C02"], ext: [], sources: [S("Expected Value and Variance of a Random Variable")],
  },

  // Continuous random variables
  {
    id: "C05", slug: "probability-density-function", title: "Probability density function", group: "Continuous random variables", tier: "core", visual: true,
    oneLiner: t`A p.d.f. has $f(x) \ge 0$ and $\int f(x)\,dx = 1$ over its range; $P(a < X < b) = \int_a^b f(x)\,dx$, the area under the curve`,
    prereqs: ["C01"], ext: ["definite integration"], sources: [S("Continuous Random Variables and Probability Density Function")],
  },
  {
    id: "C06", slug: "cumulative-distribution", title: "Cumulative distribution function", group: "Continuous random variables", tier: "core", visual: true,
    oneLiner: t`$F(x) = P(X \le x)$: a running total of the p.m.f. for a discrete variable, $\int_{-\infty}^{x} f(t)\,dt$ for a continuous one`,
    prereqs: ["C02", "C05"], ext: [], sources: [S("Cumulative Distribution Function")],
  },
  {
    id: "C07", slug: "mean-of-continuous", title: "Expected value of a continuous random variable", group: "Continuous random variables", tier: "adv",
    oneLiner: t`$E(X) = \int x\,f(x)\,dx$ and $\text{Var}(X) = \int x^2 f(x)\,dx - [E(X)]^2$, with integrals in place of the sums`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Expected Value and Variance of a Random Variable")],
  },
];
