import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Limits prerequisite graph (Balbharati Std XI Part 2, Ch.7).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/limits-11#${sub}`;

export const graph: GraphNode[] = [
  // Idea and algebra
  {
    id: "C01", slug: "one-sided-limits", title: "Limits and one-sided limits", group: "The idea", tier: "core", visual: true,
    oneLiner: t`$\lim_{x \to a} f(x)$ exists only when the left-hand and right-hand limits are equal; $f(a)$ itself doesn't matter`,
    prereqs: [], ext: ["functions"], sources: [S("Definition of a Limit and One-Sided Limits")],
  },
  {
    id: "C02", slug: "substitution", title: "Algebra of limits and substitution", group: "The idea", tier: "core",
    oneLiner: "Limits of sums, products and quotients are sums, products and quotients of limits; if substituting gives a number, that's the limit",
    prereqs: ["C01"], ext: [], sources: [S("Algebra of Limits"), S("Substitution Method")],
  },

  // 0/0 forms
  {
    id: "C03", slug: "factorization", title: "Cancelling the common factor", group: "0/0 forms", tier: "core",
    oneLiner: t`$\frac{0}{0}$ at $x = a$ means $(x - a)$ divides both: factorise, cancel, substitute`,
    prereqs: ["C02"], ext: ["factorising polynomials"], sources: [S("Method of Factorization")],
  },
  {
    id: "C04", slug: "rationalization", title: "Rationalizing", group: "0/0 forms", tier: "core",
    oneLiner: t`Multiply by the conjugate $\sqrt{a} + \sqrt{b}$ to clear the root, then cancel`,
    prereqs: ["C03"], ext: ["surds"], sources: [S("Method of Rationalization")],
  },
  {
    id: "C05", slug: "standard-power-limit", title: "The limit of (xⁿ − aⁿ)/(x − a)", group: "0/0 forms", tier: "core",
    oneLiner: t`$\lim_{x \to a}\frac{x^n - a^n}{x - a} = na^{n-1}$, for any rational $n$`,
    prereqs: ["C03"], ext: [], sources: [S("Method of Factorization"), S("Algebra of Limits")],
  },

  // Special limits
  {
    id: "C06", slug: "limits-at-infinity", title: "Limits at infinity", group: "Special limits", tier: "core",
    oneLiner: t`Divide by the highest power of $x$ in the denominator; $\frac{1}{x^k} \to 0$`,
    prereqs: ["C02"], ext: [], sources: [S("Limits at Infinity and Infinite Limits")],
  },
  {
    id: "C07", slug: "trigonometric-limits", title: "Trigonometric limits", group: "Special limits", tier: "core",
    oneLiner: t`$\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$ with $\theta$ in radians; make the angle and the denominator match`,
    prereqs: ["C03"], ext: ["trigonometric identities"], sources: [S("Limits of Trigonometric Functions")],
  },
  {
    id: "C08", slug: "exponential-limits", title: "Exponential limits", group: "Special limits", tier: "core",
    oneLiner: t`$\lim_{x \to 0}\frac{a^x - 1}{x} = \log a$ and $\lim_{x \to 0}\frac{e^x - 1}{x} = 1$`,
    prereqs: ["C03"], ext: ["logarithms"], sources: [S("Limits of Exponential and Logarithmic Functions")],
  },
  {
    id: "C09", slug: "log-limits-and-e", title: "Logarithmic limits and e", group: "Special limits", tier: "core",
    oneLiner: t`$\lim_{x \to 0}\frac{\log(1 + x)}{x} = 1$ and $\lim_{x \to 0}(1 + x)^{\frac{1}{x}} = e$`,
    prereqs: ["C08"], ext: [], sources: [S("Limits of Exponential and Logarithmic Functions")],
  },
];
