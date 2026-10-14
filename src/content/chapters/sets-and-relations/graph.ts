import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Sets and Relations prerequisite graph (Balbharati Std XI Part 2, Ch.5).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
export const graph: GraphNode[] = [
  // Sets
  {
    id: "C01", slug: "roster-and-set-builder", title: "Roster and set-builder form", group: "Sets", tier: "core",
    oneLiner: t`List a set from its rule: each element once, and only the ones the rule allows`,
    prereqs: [], ext: ["number systems N, W, Z, Q, R"], sources: ["mh-sb-11/sets-relations-11#Sets and their Representation"],
  },
  {
    id: "C02", slug: "subsets-and-power-set", title: "Subsets and the power set", group: "Sets", tier: "core",
    oneLiner: t`A set with $n$ elements has $2^n$ subsets, counting $\varnothing$ and itself`,
    prereqs: ["C01"], ext: [], sources: ["mh-sb-11/sets-relations-11#Types of Sets and Number of Elements"],
  },
  {
    id: "C03", slug: "union-and-intersection", title: "Union and intersection", group: "Sets", tier: "core", visual: true,
    oneLiner: t`$A \cup B$: in either; $A \cap B$: in both`,
    prereqs: ["C01"], ext: [], sources: ["mh-sb-11/sets-relations-11#Operations on Sets"],
  },
  {
    id: "C04", slug: "difference-and-complement", title: "Difference and complement", group: "Sets", tier: "core", visual: true,
    oneLiner: t`$A - B$: in $A$ but not $B$; $A'$: in $U$ but not $A$`,
    prereqs: ["C03"], ext: [], sources: ["mh-sb-11/sets-relations-11#Operations on Sets"],
  },
  {
    id: "C05", slug: "de-morgans-laws", title: "De Morgan's laws", group: "Sets", tier: "core", visual: true,
    oneLiner: t`$(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$`,
    prereqs: ["C04"], ext: [], sources: ["mh-sb-11/sets-relations-11#Operations on Sets"],
  },

  // Counting with sets
  {
    id: "C06", slug: "counting-two-sets", title: "Counting with two sets", group: "Counting with sets", tier: "core", visual: true,
    oneLiner: t`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$; "only A" and "neither" from the Venn diagram`,
    prereqs: ["C04"], ext: [], sources: ["mh-sb-11/sets-relations-11#Types of Sets and Number of Elements"],
  },
  {
    id: "C07", slug: "counting-three-sets", title: "Counting with three sets", group: "Counting with sets", tier: "core", visual: true,
    oneLiner: "Add the singles, subtract the pairs, add back the triple; fill the Venn diagram from the centre out",
    prereqs: ["C06"], ext: [], sources: ["mh-sb-11/sets-relations-11#Types of Sets and Number of Elements"],
  },
  {
    id: "C08", slug: "least-and-greatest-overlap", title: "Least and greatest overlap", group: "Counting with sets", tier: "adv", visual: true,
    oneLiner: t`$n(A \cap B)$ is at least $n(A) + n(B) - n(U)$ and at most the smaller of $n(A)$, $n(B)$`,
    prereqs: ["C06"], ext: [], sources: ["mh-sb-11/sets-relations-11#Types of Sets and Number of Elements"],
  },

  // Intervals
  {
    id: "C09", slug: "interval-notation", title: "Interval notation", group: "Intervals", tier: "core", visual: true,
    oneLiner: t`Square bracket: the end is in; round bracket: it isn't; $\infty$ always gets a round one`,
    prereqs: ["C01"], ext: ["inequalities on the number line"], sources: ["mh-sb-11/sets-relations-11#Intervals"],
  },
  {
    id: "C10", slug: "operations-on-intervals", title: "Operations on intervals", group: "Intervals", tier: "core", visual: true,
    oneLiner: "Union, intersection, difference and complement of intervals, read off the number line",
    prereqs: ["C04", "C09"], ext: [], sources: ["mh-sb-11/sets-relations-11#Intervals"],
  },
  {
    id: "C11", slug: "inequalities-as-intervals", title: "Solving inequalities as intervals", group: "Intervals", tier: "core", visual: true,
    oneLiner: "Linear: flip the sign when dividing by a negative; quadratic and rational: test the sign between critical points",
    prereqs: ["C09"], ext: ["factorising quadratics"], sources: ["mh-sb-11/sets-relations-11#Intervals"],
  },

  // Relations
  {
    id: "C12", slug: "cartesian-product", title: "Ordered pairs and the Cartesian product", group: "Relations", tier: "core",
    oneLiner: t`$(a, b) = (c, d)$ only when $a = c$ and $b = d$; $n(A \times B) = n(A)\,n(B)$`,
    prereqs: ["C01"], ext: [], sources: ["mh-sb-11/sets-relations-11#Ordered Pairs and the Cartesian Product"],
  },
  {
    id: "C13", slug: "relation-domain-range", title: "Relations: domain, co-domain and range", group: "Relations", tier: "core",
    oneLiner: t`A relation is a subset of $A \times B$; its domain is the first entries used, its range the second`,
    prereqs: ["C12"], ext: [], sources: ["mh-sb-11/sets-relations-11#Relations — Domain, Co-domain and Range"],
  },
  {
    id: "C14", slug: "counting-relations", title: "How many relations", group: "Relations", tier: "core",
    oneLiner: t`Every subset of $A \times B$ is a relation: $2^{mn}$ of them`,
    prereqs: ["C02", "C12"], ext: [], sources: ["mh-sb-11/sets-relations-11#Relations — Domain, Co-domain and Range"],
  },
  {
    id: "C15", slug: "reflexive-symmetric-transitive", title: "Reflexive, symmetric, transitive", group: "Relations", tier: "core",
    oneLiner: t`Check every $(a, a)$; every $(a, b)$ has its $(b, a)$; every chain $(a, b), (b, c)$ closes with $(a, c)$`,
    prereqs: ["C13"], ext: [], sources: ["mh-sb-11/sets-relations-11#Types of Relations"],
  },
  {
    id: "C16", slug: "equivalence-relations", title: "Equivalence relations", group: "Relations", tier: "core",
    oneLiner: "Reflexive, symmetric and transitive together; it splits the set into classes",
    prereqs: ["C15"], ext: [], sources: ["mh-sb-11/sets-relations-11#Types of Relations"],
  },
];
