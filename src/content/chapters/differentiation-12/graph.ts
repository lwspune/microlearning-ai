import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Differentiation prerequisite graph (Balbharati Std XII Part 2, Ch.1).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/differentiation-12#${sub}`;

export const graph: GraphNode[] = [
  // Composite and inverse functions
  {
    id: "C01", slug: "chain-rule", title: "The chain rule", group: "Composite and inverse functions", tier: "core",
    oneLiner: t`If $y = f(u)$ and $u = g(x)$, then $\dfrac{dy}{dx} = \dfrac{dy}{du}\cdot\dfrac{du}{dx}$: differentiate the outside, keep the inside, multiply by the inside's derivative`,
    prereqs: [], ext: ["derivatives of standard functions", "product and quotient rules"], sources: [S("Derivatives of Composite Functions (Chain Rule)")],
  },
  {
    id: "C02", slug: "chain-rule-exp-log", title: "Chain rule with exponentials and logarithms", group: "Composite and inverse functions", tier: "core",
    oneLiner: t`$\dfrac{d}{dx}e^{u} = e^{u}u'$, $\dfrac{d}{dx}a^{u} = a^{u}\log a\cdot u'$, $\dfrac{d}{dx}\log u = \dfrac{u'}{u}$; simplify logs of products first`,
    prereqs: ["C01"], ext: ["laws of logarithms"], sources: [S("Derivatives of Composite Functions (Chain Rule)")],
  },
  {
    id: "C03", slug: "inverse-functions", title: "Derivative of an inverse function", group: "Composite and inverse functions", tier: "core", visual: true,
    oneLiner: t`If $y = f(x)$ has inverse $x = g(y)$, then $g'(y) = \dfrac{1}{f'(x)}$ at the matching point: the slopes of a graph and its mirror in $y = x$ are reciprocals`,
    prereqs: ["C01"], ext: ["inverse of a function"], sources: [S("Derivatives of Inverse Functions")],
  },
  {
    id: "C04", slug: "inverse-trig-derivatives", title: "Derivatives of inverse trigonometric functions", group: "Composite and inverse functions", tier: "core",
    oneLiner: t`$\dfrac{d}{dx}\sin^{-1}x = \dfrac{1}{\sqrt{1 - x^2}}$, $\dfrac{d}{dx}\tan^{-1}x = \dfrac{1}{1 + x^2}$, $\dfrac{d}{dx}\sec^{-1}x = \dfrac{1}{|x|\sqrt{x^2 - 1}}$; with the chain rule for $\sin^{-1}u$`,
    prereqs: ["C03"], ext: ["inverse trigonometric functions"], sources: [S("Derivatives of Inverse Trigonometric Functions")],
  },
  {
    id: "C05", slug: "inverse-trig-substitution", title: "Simplifying by substitution first", group: "Composite and inverse functions", tier: "adv",
    oneLiner: t`Put $x = \tan\theta$, $\sin\theta$ or $\cos\theta$ so that $\tan^{-1}\dfrac{2x}{1 - x^2}$ becomes $2\theta = 2\tan^{-1}x$, then differentiate the simple form`,
    prereqs: ["C04"], ext: ["multiple-angle formulas"], sources: [S("Derivatives of Inverse Trigonometric Functions")],
  },

  // Other ways to differentiate
  {
    id: "C06", slug: "logarithmic-differentiation", title: "Logarithmic differentiation", group: "Other ways to differentiate", tier: "core",
    oneLiner: t`Take $\log$ of both sides to turn products, quotients and powers like $x^{x}$ into sums, differentiate, then multiply back by $y$`,
    prereqs: ["C02"], ext: ["laws of logarithms"], sources: [S("Logarithmic Differentiation")],
  },
  {
    id: "C07", slug: "implicit-differentiation", title: "Implicit differentiation", group: "Other ways to differentiate", tier: "core",
    oneLiner: t`Differentiate every term in $x$, writing $\dfrac{d}{dx}(y^n) = ny^{n-1}\dfrac{dy}{dx}$, then collect the $\dfrac{dy}{dx}$ terms and solve`,
    prereqs: ["C01"], ext: [], sources: [S("Derivatives of Implicit Functions")],
  },
  {
    id: "C08", slug: "parametric-differentiation", title: "Parametric functions", group: "Other ways to differentiate", tier: "core", visual: true,
    oneLiner: t`If $x = f(t)$ and $y = g(t)$, then $\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}$, the slope of the curve traced as $t$ varies`,
    prereqs: ["C01"], ext: [], sources: [S("Derivatives of Parametric Functions")],
  },
  {
    id: "C09", slug: "one-function-wrt-another", title: "Differentiating one function with respect to another", group: "Other ways to differentiate", tier: "core",
    oneLiner: t`The derivative of $u$ with respect to $v$ is $\dfrac{du}{dv} = \dfrac{du/dx}{dv/dx}$`,
    prereqs: ["C08"], ext: [], sources: [S("Differentiation of One Function with respect to Another")],
  },

  // Higher order derivatives
  {
    id: "C10", slug: "second-derivative", title: "Second and higher derivatives", group: "Higher order derivatives", tier: "core",
    oneLiner: t`Differentiate $\dfrac{dy}{dx}$ again for $\dfrac{d^2y}{dx^2}$; for $e^{ax}$, $\sin ax$ and similar, spot the $n$th derivative's pattern`,
    prereqs: ["C02"], ext: [], sources: [S("Higher Order Derivatives")],
  },
  {
    id: "C11", slug: "second-derivative-parametric", title: "Second derivative of parametric and implicit functions", group: "Higher order derivatives", tier: "adv",
    oneLiner: t`For $x = f(t)$, $y = g(t)$: $\dfrac{d^2y}{dx^2} = \dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)\Big/\dfrac{dx}{dt}$, not the ratio of second derivatives`,
    prereqs: ["C08", "C10"], ext: [], sources: [S("Higher Order Derivatives")],
  },
  {
    id: "C12", slug: "derivative-relations", title: "Showing a relation between derivatives", group: "Higher order derivatives", tier: "adv",
    oneLiner: t`To show $(1 - x^2)y_2 - xy_1 + m^2y = 0$: find $y_1$, clear roots or fractions, differentiate again, then substitute back`,
    prereqs: ["C10"], ext: [], sources: [S("Higher Order Derivatives")],
  },
];
