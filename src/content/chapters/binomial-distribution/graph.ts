import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Binomial Distribution prerequisite graph (Balbharati Std XII Part 2, Ch.8).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/binomial-12#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "bernoulli-trials", title: "Bernoulli trials", group: "Binomial distribution", tier: "core",
    oneLiner: "Trials are Bernoulli when there is a fixed number of them, each has only success or failure, they are independent, and the chance of success stays the same",
    prereqs: [], ext: ["independent events"], sources: [S("Bernoulli Trials")],
  },
  {
    id: "C02", slug: "binomial-probability", title: "The binomial probability", group: "Binomial distribution", tier: "core", visual: true,
    oneLiner: t`If $X \sim B(n, p)$, then $P(X = r) = {}^nC_r\,p^r q^{n - r}$ with $q = 1 - p$, for $r = 0, 1, \dots, n$`,
    prereqs: ["C01"], ext: ["combinations", "probability distributions"], sources: [S("The Binomial Distribution")],
  },
  {
    id: "C03", slug: "at-least-and-at-most", title: "At least, at most and word problems", group: "Binomial distribution", tier: "core",
    oneLiner: t`Add the needed terms, or use the complement: $P(X \ge 1) = 1 - q^n$; read $n$, $p$ and the event off the word problem first`,
    prereqs: ["C02"], ext: [], sources: [S("The Binomial Distribution")],
  },
  {
    id: "C04", slug: "binomial-mean-and-variance", title: "Mean and variance of a binomial distribution", group: "Binomial distribution", tier: "core",
    oneLiner: t`$E(X) = np$ and $\text{Var}(X) = npq$; from a given mean and variance, $q = \dfrac{\text{Var}}{\text{mean}}$, then $p$ and $n$`,
    prereqs: ["C02"], ext: [], sources: [S("Mean and Variance of a Binomial Distribution")],
  },
];
