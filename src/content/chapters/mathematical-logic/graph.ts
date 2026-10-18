import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Mathematical Logic prerequisite graph (Balbharati Std XII Part 1, Ch.1).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/logic-12#${sub}`;

export const graph: GraphNode[] = [
  // Statements
  {
    id: "C01", slug: "statements", title: "Statements and truth values", group: "Statements", tier: "core",
    oneLiner: "A statement is a sentence that is either true or false, not both; questions, commands and open sentences are not",
    prereqs: [], ext: [], sources: [S("Statements and Logical Connectives")],
  },
  {
    id: "C02", slug: "logical-connectives", title: "Logical connectives", group: "Statements", tier: "core",
    oneLiner: t`$\sim, \wedge, \vee, \to, \leftrightarrow$: write a sentence in symbols and find its truth value; $p \to q$ is false only when $p$ is T and $q$ is F`,
    prereqs: ["C01"], ext: [], sources: [S("Statements and Logical Connectives")],
  },
  {
    id: "C03", slug: "truth-tables", title: "Truth tables", group: "Statements", tier: "core",
    oneLiner: t`$n$ simple statements give $2^n$ rows; build the table column by column, inside brackets first`,
    prereqs: ["C02"], ext: [], sources: [S("Truth Tables of Compound Statements")],
  },

  // Equivalence
  {
    id: "C04", slug: "tautology-contradiction", title: "Tautology, contradiction, contingency", group: "Equivalence", tier: "core",
    oneLiner: "All T in the last column: tautology; all F: contradiction; a mix: contingency",
    prereqs: ["C03"], ext: [], sources: [S("Tautology, Contradiction and Contingency")],
  },
  {
    id: "C05", slug: "logical-equivalence", title: "Logical equivalence and laws", group: "Equivalence", tier: "core",
    oneLiner: t`Equal last columns mean $\equiv$; $p \to q \equiv \sim p \vee q$, De Morgan's, distributive and absorption laws`,
    prereqs: ["C03"], ext: [], sources: [S("Logical Equivalence and Algebra of Statements")],
  },
  {
    id: "C06", slug: "converse-inverse-contrapositive", title: "Converse, inverse, contrapositive", group: "Equivalence", tier: "core",
    oneLiner: t`For $p \to q$: converse $q \to p$, inverse $\sim p \to \sim q$, contrapositive $\sim q \to \sim p$, which alone is equivalent`,
    prereqs: ["C02"], ext: [], sources: [S("Converse, Inverse and Contrapositive")],
  },
  {
    id: "C07", slug: "negation", title: "Negating compound statements", group: "Equivalence", tier: "core",
    oneLiner: t`$\sim(p \wedge q) \equiv \sim p \vee \sim q$; $\sim(p \to q) \equiv p \wedge \sim q$; $\sim(p \leftrightarrow q) \equiv (p \wedge \sim q) \vee (q \wedge \sim p)$`,
    prereqs: ["C05"], ext: [], sources: [S("Quantifiers, Duality and Negation of Statements")],
  },
  {
    id: "C08", slug: "quantifiers", title: "Quantifiers and their negation", group: "Equivalence", tier: "core",
    oneLiner: t`$\forall$ (for all) and $\exists$ (there exists); the negation swaps them and negates the condition`,
    prereqs: ["C02"], ext: ["sets"], sources: [S("Quantifiers, Duality and Negation of Statements")],
  },
  {
    id: "C09", slug: "duality", title: "Duality", group: "Equivalence", tier: "core",
    oneLiner: t`The dual swaps $\wedge$ and $\vee$, and $t$ and $c$; $\sim$ stays as it is`,
    prereqs: ["C02"], ext: [], sources: [S("Quantifiers, Duality and Negation of Statements")],
  },

  // Switching circuits
  {
    id: "C10", slug: "switching-circuits", title: "Switching circuits", group: "Switching circuits", tier: "core", visual: true,
    oneLiner: t`Series is $\wedge$, parallel is $\vee$, a switch always opposite to $S$ is $\sim S$; write the statement of a circuit and draw the circuit of a statement`,
    prereqs: ["C02"], ext: [], sources: [S("Application of Logic to Switching Circuits")],
  },
  {
    id: "C11", slug: "simplifying-circuits", title: "Simplifying circuits", group: "Switching circuits", tier: "adv", visual: true,
    oneLiner: "Simplify the circuit's statement with the laws of logic, then draw the simpler equivalent circuit",
    prereqs: ["C05", "C10"], ext: [], sources: [S("Application of Logic to Switching Circuits")],
  },
];
