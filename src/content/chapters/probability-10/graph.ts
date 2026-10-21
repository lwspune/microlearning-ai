import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Probability prerequisite graph (Balbharati Std X Part 1, Ch.5).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/alg-probability-10#${sub}`;
const SPACE = S("Sample Space and Events");
const PROB = S("Probability of an Event");

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "sample-space", title: "Sample space", group: "Outcomes and events", tier: "core",
    oneLiner: t`List every possible outcome: one coin gives $2$, one die $6$, two coins $4$, two dice $36$, a pack of cards $52$`,
    prereqs: [], ext: ["writing a set by listing (Std IX Sets)"], sources: [SPACE],
  },
  {
    id: "C02", slug: "events", title: "Events", group: "Outcomes and events", tier: "core",
    oneLiner: t`An event is the set of outcomes that meet a condition; $n(A)$ counts them`,
    prereqs: ["C01"], ext: [], sources: [SPACE],
  },
  {
    id: "C03", slug: "probability-of-an-event", title: "Probability of an event", group: "Probability", tier: "core",
    oneLiner: t`$P(A) = \frac{n(A)}{n(S)}$, so $0 \le P(A) \le 1$: $0$ for an impossible event, $1$ for a sure one`,
    prereqs: ["C02"], ext: [], sources: [PROB],
  },
  {
    id: "C04", slug: "two-coins-and-two-dice", title: "Two coins, two dice", group: "Probability", tier: "core",
    oneLiner: t`List the outcomes of both together before counting: $(2, 3)$ and $(3, 2)$ are different outcomes`,
    prereqs: ["C03"], ext: [], sources: [SPACE, PROB],
  },
  {
    id: "C05", slug: "playing-cards", title: "A pack of cards", group: "Probability", tier: "core",
    oneLiner: t`$52$ cards: $4$ suits of $13$, $26$ red and $26$ black, $12$ face cards, $4$ aces`,
    prereqs: ["C03"], ext: [], sources: [PROB],
  },
];
