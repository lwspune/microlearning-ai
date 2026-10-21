import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Quadratic Equations prerequisite graph (Balbharati Std X Part 1, Ch.2). The pool's other
 * Quadratic Equations chapter is NDA's; this one follows the Std X book step by step.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/alg-quadratic-equations-10#${sub}`;
const FORM = S("Standard Form of a Quadratic Equation");
const ROOTS = S("Roots of a Quadratic Equation");
const FACTOR = S("Solving by Factorisation");
const FORMULA = S("Solving by Formula and Completing the Square");
const NATURE = S("Nature of Roots (Discriminant)");
const RELATION = S("Relation between Roots and Coefficients");
const WORD = S("Word Problems and Applications");

export const graph: GraphNode[] = [
  // The equation and its roots
  {
    id: "C01", slug: "quadratic-or-not", title: "Is it a quadratic equation?", group: "The equation and its roots", tier: "core",
    oneLiner: t`After simplifying, the highest power of the variable is exactly $2$: write it as $ax^2 + bx + c = 0$ with $a \neq 0$ and read $a$, $b$, $c$`,
    prereqs: [], ext: ["polynomials and their degree (Std IX Polynomials)"], sources: [FORM],
  },
  {
    id: "C02", slug: "roots", title: "Roots of a quadratic equation", group: "The equation and its roots", tier: "core",
    oneLiner: t`A root makes the equation true: substitute it to check, or to find an unknown coefficient $k$`,
    prereqs: ["C01"], ext: [], sources: [ROOTS, FORM],
  },

  // Solving
  {
    id: "C03", slug: "factorisation", title: "Solving by factorisation", group: "Solving", tier: "core",
    oneLiner: t`Split the middle term into two parts whose product is $ac$; if $(x - p)(x - q) = 0$ then $x = p$ or $x = q$`,
    prereqs: ["C02"], ext: ["factorising quadratic expressions (Std IX Polynomials)"], sources: [FACTOR],
  },
  {
    id: "C04", slug: "completing-the-square", title: "Completing the square", group: "Solving", tier: "core",
    oneLiner: t`Make the coefficient of $x^2$ one, add $\left(\frac{b}{2}\right)^2$ to both sides, then take square roots`,
    prereqs: ["C02"], ext: [], sources: [FORMULA],
  },
  {
    id: "C05", slug: "quadratic-formula", title: "The quadratic formula", group: "Solving", tier: "core",
    oneLiner: t`$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, with $a$, $b$, $c$ read from $ax^2 + bx + c = 0$`,
    prereqs: ["C02"], ext: [], sources: [FORMULA],
  },

  // Roots and coefficients
  {
    id: "C06", slug: "nature-of-roots", title: "Nature of roots", group: "Roots and coefficients", tier: "core",
    oneLiner: t`$\Delta = b^2 - 4ac$: $\Delta > 0$ real and unequal, $\Delta = 0$ real and equal, $\Delta < 0$ not real`,
    prereqs: ["C05"], ext: [], sources: [NATURE],
  },
  {
    id: "C07", slug: "sum-and-product", title: "Sum and product of the roots", group: "Roots and coefficients", tier: "core",
    oneLiner: t`$\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$, read off without solving; a condition on them finds $k$`,
    prereqs: ["C05"], ext: [], sources: [RELATION],
  },
  {
    id: "C08", slug: "expressions-in-the-roots", title: "Expressions in the roots", group: "Roots and coefficients", tier: "adv",
    oneLiner: t`$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ and $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$`,
    prereqs: ["C07"], ext: [], sources: [RELATION],
  },
  {
    id: "C09", slug: "forming-equations", title: "Forming an equation from its roots", group: "Roots and coefficients", tier: "core",
    oneLiner: t`$x^2 - (\alpha + \beta)x + \alpha\beta = 0$: the sum of the roots, then their product`,
    prereqs: ["C07"], ext: [], sources: [RELATION],
  },

  // Word problems
  {
    id: "C10", slug: "word-problems", title: "Word problems", group: "Word problems", tier: "core",
    oneLiner: t`Form the equation, solve it, and keep only the root that makes sense: no negative ages, lengths or counts`,
    prereqs: ["C03"], ext: [], sources: [WORD],
  },
];
