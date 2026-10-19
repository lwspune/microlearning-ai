import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Quadratic Equations prerequisite graph: Std X theory the Std XI/XII books assume and NDA asks
 * hard (PLAN.md "NDA Maths course", phase 2a). Real coefficients throughout; complex roots are
 * the Complex Numbers chapter's.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
const S = (sub: string) => `nda/quadratic-equations#${sub}`;
const NATURE = S("Nature of Roots and Boundary Conditions");
const VIETA = S("Vieta's Relations and Root-Coefficient Identities");
const SPECIAL = S("Special Quadratics — Parametric, Logarithmic, Constructed");

export const graph: GraphNode[] = [
  // Roots
  {
    id: "C01", slug: "solving-quadratics", title: "Solving a quadratic equation", group: "Roots", tier: "core",
    oneLiner: t`Factorise, or use $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ for $ax^2 + bx + c = 0$, $a \neq 0$`,
    prereqs: [], ext: ["factorising expressions"], sources: [NATURE],
  },
  {
    id: "C02", slug: "nature-of-roots", title: "The discriminant and the nature of roots", group: "Roots", tier: "core",
    oneLiner: t`$D = b^2 - 4ac$: $D > 0$ two real roots, $D = 0$ equal roots, $D < 0$ no real roots; rational roots need $D$ a perfect square`,
    prereqs: ["C01"], ext: [], sources: [NATURE],
  },

  // Roots and coefficients
  {
    id: "C03", slug: "sum-and-product-of-roots", title: "Sum and product of the roots", group: "Roots and coefficients", tier: "core",
    oneLiner: t`$\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$, read off without solving`,
    prereqs: ["C01"], ext: [], sources: [VIETA],
  },
  {
    id: "C04", slug: "expressions-in-the-roots", title: "Expressions in the roots", group: "Roots and coefficients", tier: "core",
    oneLiner: t`Rewrite $\alpha^2 + \beta^2$, $\alpha^3 + \beta^3$, $(\alpha - \beta)^2$ and $\frac{1}{\alpha} + \frac{1}{\beta}$ in terms of $\alpha + \beta$ and $\alpha\beta$`,
    prereqs: ["C03"], ext: [], sources: [VIETA],
  },
  {
    id: "C05", slug: "forming-equations", title: "Forming an equation from its roots", group: "Roots and coefficients", tier: "core",
    oneLiner: t`$x^2 - (\text{sum})x + \text{product} = 0$; for new roots like $\frac{1}{\alpha}$ or $\alpha^2$, find their sum and product first`,
    prereqs: ["C04"], ext: [], sources: [VIETA, SPECIAL],
  },
  {
    id: "C06", slug: "relations-between-roots", title: "Relations between the roots", group: "Roots and coefficients", tier: "adv",
    oneLiner: t`A condition such as "one root is twice the other" or "the roots are reciprocal" becomes an equation in the coefficients`,
    prereqs: ["C03"], ext: [], sources: [VIETA],
  },
  {
    id: "C07", slug: "common-roots", title: "Common roots", group: "Roots and coefficients", tier: "adv",
    oneLiner: t`A shared root satisfies both equations; both roots shared means the coefficients are in proportion`,
    prereqs: ["C03"], ext: [], sources: [NATURE, VIETA],
  },

  // Conditions on a quadratic
  {
    id: "C08", slug: "sign-and-extreme-value", title: "Sign and extreme value of a quadratic", group: "Conditions on a quadratic", tier: "core", visual: true,
    oneLiner: t`$ax^2 + bx + c > 0$ for every $x$ exactly when $a > 0$ and $D < 0$; its least (or greatest) value is $-\frac{D}{4a}$`,
    prereqs: ["C02"], ext: [], sources: [NATURE],
  },
  {
    id: "C09", slug: "roots-of-given-signs", title: "Roots of given signs", group: "Conditions on a quadratic", tier: "adv",
    oneLiner: t`Both roots positive needs $D \ge 0$, sum $> 0$, product $> 0$; roots of opposite signs need only product $< 0$`,
    prereqs: ["C02", "C03"], ext: [], sources: [NATURE],
  },
  {
    id: "C10", slug: "reducible-equations", title: "Equations that reduce to quadratics", group: "Conditions on a quadratic", tier: "adv",
    oneLiner: t`Substitute $t = 2^x$, $t = \log x$, $t = x + \frac{1}{x}$ or $t = |x|$, solve the quadratic in $t$, then keep only the values $t$ can take`,
    prereqs: ["C01"], ext: ["logarithm rules (Functions)", "laws of indices"], sources: [SPECIAL],
  },
];
