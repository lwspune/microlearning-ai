import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Definite Integration prerequisite graph (Balbharati Std XII Part 2, Ch.4).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/def-integration-12#${sub}`;

export const graph: GraphNode[] = [
  // Evaluating
  {
    id: "C01", slug: "limit-of-a-sum", title: "Definite integral as the limit of a sum", group: "Evaluating", tier: "core", visual: true,
    oneLiner: t`$\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{r=1}^{n} h\,f(a + rh)$ with $h = \dfrac{b - a}{n}$: the total area of thin rectangles`,
    prereqs: [], ext: ["sums of n terms", "limits"], sources: [S("Definite Integral as a Limit of a Sum")],
  },
  {
    id: "C02", slug: "fundamental-theorem", title: "The fundamental theorem of integral calculus", group: "Evaluating", tier: "core",
    oneLiner: t`If $F'(x) = f(x)$, then $\int_a^b f(x)\,dx = F(b) - F(a)$: find any antiderivative and subtract its values at the limits`,
    prereqs: [], ext: ["indefinite integration"], sources: [S("Fundamental Theorem of Integral Calculus")],
  },
  {
    id: "C03", slug: "substitution-with-limits", title: "Substitution in a definite integral", group: "Evaluating", tier: "core",
    oneLiner: t`When you put $u = g(x)$, change the limits too: $x = a$ becomes $u = g(a)$, $x = b$ becomes $u = g(b)$; then never go back to $x$`,
    prereqs: ["C02"], ext: ["integration by substitution"], sources: [S("Methods of Evaluation of Definite Integrals")],
  },
  {
    id: "C04", slug: "parts-and-fractions-definite", title: "Parts and partial fractions with limits", group: "Evaluating", tier: "core",
    oneLiner: t`$\int_a^b u\,v\,dx = \left[u\int v\,dx\right]_a^b - \int_a^b \left(u'\int v\,dx\right)dx$; split rational functions first, then evaluate`,
    prereqs: ["C02"], ext: ["integration by parts", "partial fractions"], sources: [S("Methods of Evaluation of Definite Integrals")],
  },

  // Properties
  {
    id: "C05", slug: "basic-properties", title: "Basic properties and splitting the interval", group: "Properties", tier: "core", visual: true,
    oneLiner: t`$\int_a^b = -\int_b^a$, $\int_a^b = \int_a^c + \int_c^b$; split at the point where $|x - c|$ or a piecewise function changes form`,
    prereqs: ["C02"], ext: [], sources: [S("Properties of Definite Integrals")],
  },
  {
    id: "C06", slug: "king-property", title: "The property f(a + b − x)", group: "Properties", tier: "adv", visual: true,
    oneLiner: t`$\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx$; add the two forms when they sum to something simple, as in $\int_0^{\pi/2}\dfrac{\sqrt{\sin x}}{\sqrt{\sin x} + \sqrt{\cos x}}\,dx = \dfrac{\pi}{4}$`,
    prereqs: ["C05"], ext: [], sources: [S("Properties of Definite Integrals")],
  },
  {
    id: "C07", slug: "odd-even-properties", title: "Odd and even functions, and the 2a property", group: "Properties", tier: "adv", visual: true,
    oneLiner: t`$\int_{-a}^{a} f(x)\,dx$ is $0$ for odd $f$ and $2\int_0^a f(x)\,dx$ for even $f$; $\int_0^{2a} f(x)\,dx = 2\int_0^a f(x)\,dx$ when $f(2a - x) = f(x)$`,
    prereqs: ["C05"], ext: ["odd and even functions"], sources: [S("Properties of Definite Integrals")],
  },
];
