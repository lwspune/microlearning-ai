import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Indefinite Integration prerequisite graph (Balbharati Std XII Part 2, Ch.3).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/indef-integration-12#${sub}`;

export const graph: GraphNode[] = [
  // Antiderivatives
  {
    id: "C01", slug: "antiderivatives", title: "Integration as the reverse of differentiation", group: "Antiderivatives", tier: "core",
    oneLiner: t`$\int f(x)\,dx = F(x) + c$ when $F'(x) = f(x)$; use the standard formulae term by term, e.g. $\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + c$ for $n \ne -1$`,
    prereqs: [], ext: ["derivatives of standard functions"], sources: [S("Elementary Integration and Standard Formulae")],
  },
  {
    id: "C02", slug: "rewrite-then-integrate", title: "Rewriting before integrating", group: "Antiderivatives", tier: "core",
    oneLiner: t`Expand, divide out or use an identity first ($\sin^2 x = \frac{1 - \cos 2x}{2}$, $\tan^2 x = \sec^2 x - 1$) so every term matches a standard form`,
    prereqs: ["C01"], ext: ["trigonometric identities"], sources: [S("Elementary Integration and Standard Formulae")],
  },

  // Substitution
  {
    id: "C03", slug: "substitution", title: "Integration by substitution", group: "Substitution", tier: "core",
    oneLiner: t`Put $u = g(x)$ so that $g'(x)\,dx = du$: $\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$; in particular $\int \dfrac{f'(x)}{f(x)}\,dx = \log|f(x)| + c$`,
    prereqs: ["C01"], ext: ["chain rule"], sources: [S("Integration by Substitution")],
  },
  {
    id: "C04", slug: "trigonometric-integrals", title: "Powers and products of trigonometric functions", group: "Substitution", tier: "core",
    oneLiner: t`Turn products into sums ($2\cos A\cos B = \cos(A + B) + \cos(A - B)$); for $\sin^m x\cos^n x$ with an odd power, keep one factor and substitute for the other function`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("Integrals of Trigonometric Functions")],
  },
  {
    id: "C05", slug: "half-angle-substitution", title: "The substitution t = tan(x/2)", group: "Substitution", tier: "adv",
    oneLiner: t`For $\int \dfrac{dx}{a + b\sin x}$ or $\dfrac{dx}{a + b\cos x}$, put $t = \tan\dfrac{x}{2}$: $\sin x = \dfrac{2t}{1 + t^2}$, $\cos x = \dfrac{1 - t^2}{1 + t^2}$, $dx = \dfrac{2\,dt}{1 + t^2}$`,
    prereqs: ["C04"], ext: [], sources: [S("Integrals of Trigonometric Functions")],
  },

  // Quadratic forms
  {
    id: "C06", slug: "standard-quadratic-forms", title: "Standard integrals of quadratic forms", group: "Quadratic forms", tier: "core",
    oneLiner: t`$\int \dfrac{dx}{x^2 + a^2} = \dfrac{1}{a}\tan^{-1}\dfrac{x}{a}$, $\int \dfrac{dx}{x^2 - a^2} = \dfrac{1}{2a}\log\left|\dfrac{x - a}{x + a}\right|$, $\int \dfrac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\dfrac{x}{a}$, and the rest of the table`,
    prereqs: ["C03"], ext: [], sources: [S("Special Integrals of Quadratic Forms")],
  },
  {
    id: "C07", slug: "completing-the-square", title: "Completing the square", group: "Quadratic forms", tier: "core",
    oneLiner: t`Write $ax^2 + bx + c$ as $a\left[(x + p)^2 \pm q^2\right]$, then use the standard form with $x + p$ in place of $x$`,
    prereqs: ["C06"], ext: ["completing the square"], sources: [S("Special Integrals of Quadratic Forms")],
  },
  {
    id: "C08", slug: "linear-over-quadratic", title: "Integrals of (px + q) over a quadratic", group: "Quadratic forms", tier: "adv",
    oneLiner: t`Write $px + q = A\,\dfrac{d}{dx}(ax^2 + bx + c) + B$; the $A$ part gives a log or a root, the $B$ part a standard quadratic form`,
    prereqs: ["C07"], ext: [], sources: [S("Integrals of the Type (px+q) over a Quadratic")],
  },

  // Parts and partial fractions
  {
    id: "C09", slug: "integration-by-parts", title: "Integration by parts", group: "Parts and partial fractions", tier: "core",
    oneLiner: t`$\int u\,v\,dx = u\int v\,dx - \int \left(u'\int v\,dx\right)dx$; choose $u$ by LIATE (log, inverse trig, algebraic, trig, exponential)`,
    prereqs: ["C01"], ext: ["product rule"], sources: [S("Integration by Parts")],
  },
  {
    id: "C10", slug: "parts-special-forms", title: "Special forms from integration by parts", group: "Parts and partial fractions", tier: "adv",
    oneLiner: t`$\int e^x\left[f(x) + f'(x)\right]dx = e^x f(x) + c$; $\int \sqrt{a^2 - x^2}\,dx$ and its relatives; integrals that return to themselves, like $\int e^x\sin x\,dx$`,
    prereqs: ["C09"], ext: [], sources: [S("Integration by Parts")],
  },
  {
    id: "C11", slug: "partial-fractions", title: "Integration by partial fractions", group: "Parts and partial fractions", tier: "core",
    oneLiner: t`Split a proper rational function into $\dfrac{A}{x - a} + \dfrac{B}{x - b} + \dots$ (repeated and quadratic factors too), then integrate each piece`,
    prereqs: ["C03"], ext: ["partial fractions", "polynomial division"], sources: [S("Integration by Partial Fractions")],
  },
];
