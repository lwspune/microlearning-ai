import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Polynomials prerequisite graph (Balbharati Std IX Part 1, Ch.3): polynomials, their operations, the remainder and factor theorems and factorisation.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/polynomials-9#${sub}`;

export const graph: GraphNode[] = [
  // Polynomials
  {
    id: "C01", slug: "polynomials-and-degree", title: "Polynomials and their degree", group: "Polynomials", tier: "core",
    oneLiner: t`A polynomial has only whole-number powers of its variables; its degree is the highest power of a term ($m^3n^7$ has degree $10$)`,
    prereqs: [], ext: ["algebraic expressions (Std VIII)"], sources: [S("Degree of a Polynomial"), S("Introduction to Polynomials")],
  },
  {
    id: "C02", slug: "forms-of-a-polynomial", title: "Standard and coefficient forms", group: "Polynomials", tier: "core",
    oneLiner: t`Standard form lists the powers in descending order; coefficient form lists every coefficient with $0$ for a missing power: $x^3 - 2$ is $(1, 0, 0, -2)$`,
    prereqs: ["C01"], ext: [], sources: [S("Introduction to Polynomials")],
  },

  // Operations
  {
    id: "C03", slug: "adding-polynomials", title: "Adding and subtracting polynomials", group: "Operations", tier: "core",
    oneLiner: t`Combine like terms only; to subtract, change the sign of every term of the second polynomial`,
    prereqs: ["C01"], ext: [], sources: [S("Operations on Polynomials")],
  },
  {
    id: "C04", slug: "multiplying-polynomials", title: "Multiplying polynomials", group: "Operations", tier: "core",
    oneLiner: t`Multiply every term by every term and add the powers: $(x^5 - 1)(x^3 + 2)$ $= x^8 + 2x^5 - x^3 - 2$`,
    prereqs: ["C01"], ext: ["laws of indices (Std VIII)"], sources: [S("Operations on Polynomials")],
  },
  {
    id: "C05", slug: "dividing-polynomials", title: "Dividing polynomials", group: "Operations", tier: "core",
    oneLiner: t`Long division gives Dividend $=$ Divisor $\times$ Quotient $+$ Remainder, the remainder of lower degree than the divisor`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Operations on Polynomials")],
  },
  {
    id: "C06", slug: "synthetic-division", title: "Synthetic division", group: "Operations", tier: "core",
    oneLiner: t`To divide by $x - a$: write the coefficients, bring the first down, multiply by $a$ and add along; the last number is the remainder`,
    prereqs: ["C02", "C05"], ext: [], sources: [S("Synthetic Division")],
  },

  // Remainder and factor theorems
  {
    id: "C07", slug: "value-of-a-polynomial", title: "Value of a polynomial", group: "Remainder and factor theorems", tier: "core",
    oneLiner: t`$p(a)$ is the value of $p(x)$ at $x = a$: $p(x) = 2x^2 - 3x + 5$ gives $p(2) = 7$`,
    prereqs: ["C01"], ext: [], sources: [S("Value of a Polynomial")],
  },
  {
    id: "C08", slug: "remainder-theorem", title: "Remainder theorem", group: "Remainder and factor theorems", tier: "core",
    oneLiner: t`When $p(x)$ is divided by $x - a$, the remainder is $p(a)$; dividing by $x + 3$ means $a = -3$`,
    prereqs: ["C06", "C07"], ext: [], sources: [S("Remainder Theorem")],
  },
  {
    id: "C09", slug: "factor-theorem", title: "Factor theorem", group: "Remainder and factor theorems", tier: "core",
    oneLiner: t`$x - a$ is a factor of $p(x)$ exactly when $p(a) = 0$: test a factor, or find an unknown coefficient`,
    prereqs: ["C08"], ext: [], sources: [S("Factor Theorem")],
  },

  // Factorisation
  {
    id: "C10", slug: "factorising-quadratics", title: "Factorising quadratic polynomials", group: "Factorisation", tier: "core",
    oneLiner: t`Split the middle term: in $6x^2 - 5x - 6$, $6 \times (-6) = -36 = (-9) \times 4$, giving $(2x - 3)(3x + 2)$`,
    prereqs: ["C01"], ext: ["identities and factorisation (Std VIII)"], sources: [S("Factorization of Polynomials")],
  },
  {
    id: "C11", slug: "factorising-by-substitution", title: "Factorising by substitution", group: "Factorisation", tier: "adv",
    oneLiner: t`Replace a repeated expression by one letter: put $m = x^2 - x$ in $(x^2 - x)^2 - 8(x^2 - x) + 12$, factorise, then put it back`,
    prereqs: ["C10"], ext: [], sources: [S("Factorization of Polynomials")],
  },
];
