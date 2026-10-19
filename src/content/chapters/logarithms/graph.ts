import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Logarithms prerequisite graph: what NDA asks beyond the rules taught in Functions (C07,
 * "Logarithm rules": the definition, product, quotient, power and change of base), which NDA's
 * Logarithms chapter takes in first (PLAN.md "NDA Maths course", phase 2b).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
const S = (sub: string) => `nda/logarithms#${sub}`;
const IDENTITIES = S("Logarithm Identities, Change of Base, and Sums");
const EQUATIONS = S("Solving Logarithmic Equations and Applications");

export const graph: GraphNode[] = [
  // Working with logarithms
  {
    id: "C01", slug: "bases-and-reciprocals", title: "Changing bases and summing reciprocals", group: "Working with logarithms", tier: "core",
    oneLiner: t`$\log_a b \cdot \log_b a = 1$ and $\log_{a^m} b^n = \frac{n}{m}\log_a b$; a sum of $\frac{1}{\log_k n}$ becomes one logarithm`,
    prereqs: [], ext: ["logarithm rules (Functions)"], sources: [IDENTITIES],
  },
  {
    id: "C02", slug: "sign-and-size", title: "The sign and size of a logarithm", group: "Working with logarithms", tier: "core",
    oneLiner: t`For a base above $1$, $\log_a x$ is negative when $0 < x < 1$ and grows with $x$; a base below $1$ reverses both`,
    prereqs: [], ext: ["logarithm rules (Functions)"], sources: [IDENTITIES, EQUATIONS],
  },

  // Equations
  {
    id: "C03", slug: "logarithmic-equations", title: "Logarithmic equations", group: "Equations", tier: "core",
    oneLiner: t`Bring the logs to one base, rewrite in exponential form, then keep only roots that make every logarithm defined`,
    prereqs: ["C01", "C02"], ext: [], sources: [EQUATIONS],
  },
  {
    id: "C04", slug: "unknown-in-the-exponent", title: "The unknown in the exponent", group: "Equations", tier: "adv",
    oneLiner: t`Take logarithms of both sides to bring $x$ down from the exponent, using a given value such as $\log_{10} 2 = 0.3010$`,
    prereqs: ["C01"], ext: ["laws of indices"], sources: [EQUATIONS],
  },
];
