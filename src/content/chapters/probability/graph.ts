import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Probability prerequisite graph (Balbharati Std XI Part 1, Ch.9).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/probability-11#${sub}`;

export const graph: GraphNode[] = [
  // Events
  {
    id: "C01", slug: "sample-space", title: "Sample space and events", group: "Events", tier: "core",
    oneLiner: "List every outcome once; mutually exclusive, exhaustive, complementary and equally likely events",
    prereqs: [], ext: ["sets"], sources: [S("Basic Terminology and Sample Space")],
  },
  {
    id: "C02", slug: "classical-probability", title: "Probability of an event", group: "Events", tier: "core",
    oneLiner: t`$P(A) = \frac{n(A)}{n(S)}$ when outcomes are equally likely; $0 \le P(A) \le 1$`,
    prereqs: ["C01"], ext: [], sources: [S("Probability of an Event and its Elementary Properties")],
  },
  {
    id: "C03", slug: "probability-by-counting", title: "Probability by counting", group: "Events", tier: "core",
    oneLiner: t`Count $n(A)$ and $n(S)$ with $^nC_r$: cards, balls, committees`,
    prereqs: ["C02"], ext: ["combinations nCr"], sources: [S("Probability of an Event and its Elementary Properties")],
  },
  {
    id: "C04", slug: "complement-and-odds", title: "Complement and odds", group: "Events", tier: "core",
    oneLiner: t`$P(A') = 1 - P(A)$; odds in favour $a : b$ means $P(A) = \frac{a}{a + b}$`,
    prereqs: ["C02"], ext: [], sources: [S("Probability of an Event and its Elementary Properties"), S("Odds")],
  },

  // Rules
  {
    id: "C05", slug: "addition-theorem", title: "The addition theorem", group: "Rules", tier: "core",
    oneLiner: t`$P(A \cup B) = P(A) + P(B) - P(A \cap B)$; just add only for mutually exclusive events`,
    prereqs: ["C04"], ext: [], sources: [S("Addition Theorem")],
  },
  {
    id: "C06", slug: "three-events", title: "Addition for three events", group: "Rules", tier: "adv",
    oneLiner: "Add the three, subtract the pairs, add back the triple",
    prereqs: ["C05"], ext: [], sources: [S("Addition Theorem")],
  },
  {
    id: "C07", slug: "conditional-probability", title: "Conditional probability", group: "Rules", tier: "core",
    oneLiner: t`$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$: $B$ has happened, so $B$ is the new sample space`,
    prereqs: ["C05"], ext: [], sources: [S("Conditional Probability and the Multiplication Theorem")],
  },
  {
    id: "C08", slug: "multiplication-theorem", title: "The multiplication theorem", group: "Rules", tier: "core",
    oneLiner: t`$P(A \cap B) = P(A)\,P(B \mid A)$: draws without replacement change the second probability`,
    prereqs: ["C07"], ext: [], sources: [S("Conditional Probability and the Multiplication Theorem")],
  },
  {
    id: "C09", slug: "independent-events", title: "Independent events", group: "Rules", tier: "core",
    oneLiner: t`$P(A \cap B) = P(A)\,P(B)$; "at least one" $= 1 - P(\text{none})$`,
    prereqs: ["C08"], ext: [], sources: [S("Independent Events")],
  },
  {
    id: "C10", slug: "total-probability-bayes", title: "Total probability and Bayes' theorem", group: "Rules", tier: "core",
    oneLiner: t`$P(E_i \mid A) = \frac{P(E_i)P(A \mid E_i)}{\sum_j P(E_j)P(A \mid E_j)}$: work backwards from the result`,
    prereqs: ["C08"], ext: [], sources: [S("Bayes' Theorem")],
  },
];
