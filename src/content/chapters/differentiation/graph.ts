import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Differentiation prerequisite graph (Balbharati Std XI Part 2, Ch.9).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/differentiation-11#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "first-principle", title: "Derivative from first principles", group: "The derivative", tier: "core", visual: true,
    oneLiner: t`$f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}$: the slope of the tangent`,
    prereqs: [], ext: ["limits"], sources: [S("Derivative by the Method of First Principle"), S("Definition of the Derivative and Differentiability")],
  },
  {
    id: "C02", slug: "differentiability", title: "Differentiability and continuity", group: "The derivative", tier: "core", visual: true,
    oneLiner: "Left and right derivatives must agree; differentiable implies continuous, but |x| is continuous with a corner at 0",
    prereqs: ["C01"], ext: ["continuity"], sources: [S("Relationship Between Differentiability and Continuity"), S("Definition of the Derivative and Differentiability")],
  },
  {
    id: "C03", slug: "standard-derivatives", title: "Standard derivatives", group: "Rules", tier: "core",
    oneLiner: t`$\frac{d}{dx}x^n = nx^{n-1}$, $\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}e^x = e^x$, $\frac{d}{dx}\log x = \frac{1}{x}$, $\frac{d}{dx}a^x = a^x\log a$`,
    prereqs: ["C01"], ext: [], sources: [S("Derivatives of Standard Functions"), S("Derivatives of Algebraic Functions"), S("Derivatives of Trigonometric Functions"), S("Derivatives of Logarithmic and Exponential Functions")],
  },
  {
    id: "C04", slug: "sum-rule", title: "Sums and constant multiples", group: "Rules", tier: "core",
    oneLiner: t`$(u \pm v)' = u' \pm v'$ and $(ku)' = ku'$; expand or split first`,
    prereqs: ["C03"], ext: [], sources: [S("Rules of Differentiation")],
  },
  {
    id: "C05", slug: "product-rule", title: "The product rule", group: "Rules", tier: "core",
    oneLiner: t`$(uv)' = uv' + vu'$, not $u'v'$`,
    prereqs: ["C04"], ext: [], sources: [S("Rules of Differentiation")],
  },
  {
    id: "C06", slug: "quotient-rule", title: "The quotient rule", group: "Rules", tier: "core",
    oneLiner: t`$\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}$: denominator first in the numerator`,
    prereqs: ["C04"], ext: [], sources: [S("Rules of Differentiation")],
  },
];
