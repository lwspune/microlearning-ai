import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Sets prerequisite graph (Balbharati Std IX Part 1, Ch.1): sets, their kinds, and union and intersection with Venn diagrams.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/sets-9#${sub}`;

export const graph: GraphNode[] = [
  // Writing sets
  {
    id: "C01", slug: "sets-and-their-forms", title: "Sets: listing and rule methods", group: "Writing sets", tier: "core",
    oneLiner: t`A set is a well-defined collection; list its elements, $\{1, 4, 9\}$, or give a rule, $\{x \mid x = n^2,\ n \in \mathbb{N},\ n \le 3\}$`,
    prereqs: [], ext: ["the number sets $\\mathbb{N}$, $\\mathbb{W}$, $\\mathbb{I}$, $\\mathbb{Q}$ (Std VIII)"], sources: [S("Concept of a Set and Methods of Writing Sets")],
  },

  // Kinds of sets
  {
    id: "C02", slug: "types-of-sets", title: "Empty, finite and infinite sets", group: "Kinds of sets", tier: "core",
    oneLiner: t`$\varnothing$ has no elements; a finite set can be counted to an end, an infinite set cannot`,
    prereqs: ["C01"], ext: [], sources: [S("Types of Sets")],
  },
  {
    id: "C03", slug: "equal-sets-and-subsets", title: "Equal sets and subsets", group: "Kinds of sets", tier: "core",
    oneLiner: t`$A = B$ when they have exactly the same elements; $A \subseteq B$ when every element of $A$ is in $B$`,
    prereqs: ["C01"], ext: [], sources: [S("Types of Sets")],
  },
  {
    id: "C04", slug: "universal-set-and-complement", title: "Universal set and complement", group: "Kinds of sets", tier: "core", visual: true,
    oneLiner: t`The universal set $U$ holds every set in the problem; $A'$ is everything in $U$ that is not in $A$, and $(A')' = A$`,
    prereqs: ["C03"], ext: [], sources: [S("Types of Sets"), S("Operations on Sets — Intersection and Union")],
  },

  // Operations
  {
    id: "C05", slug: "union-and-intersection", title: "Union and intersection", group: "Operations", tier: "core", visual: true,
    oneLiner: t`$A \cup B$: in $A$ or $B$ or both; $A \cap B$: in both; $A \cap B = \varnothing$ means the sets are disjoint`,
    prereqs: ["C01"], ext: [], sources: [S("Operations on Sets — Intersection and Union"), S("Venn Diagrams")],
  },
  {
    id: "C06", slug: "reading-venn-diagrams", title: "Reading a Venn diagram", group: "Operations", tier: "core", visual: true,
    oneLiner: t`Each region of a Venn diagram is a set: read $A$, $B$, $A \cap B$, $A \cup B$ and $A'$ off the picture`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Venn Diagrams")],
  },
  {
    id: "C07", slug: "number-of-elements", title: "Number of elements in a union", group: "Operations", tier: "core", visual: true,
    oneLiner: t`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$: the overlap is counted once`,
    prereqs: ["C05"], ext: [], sources: [S("Number of Elements in a Set")],
  },
];
