import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Permutations and Combinations prerequisite graph (Balbharati Std XI Part 2, Ch.3).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/permutations-combinations-11#${sub}`;

export const graph: GraphNode[] = [
  // Counting
  {
    id: "C01", slug: "sum-and-product-rules", title: "Adding or multiplying choices", group: "Counting", tier: "core",
    oneLiner: "One task OR another: add. One task AND then another: multiply",
    prereqs: [], ext: [], sources: [S("Fundamental Principles of Counting")],
  },
  {
    id: "C02", slug: "factorials", title: "Factorial notation", group: "Counting", tier: "core",
    oneLiner: t`$n! = n(n-1)!$, so $\frac{n!}{(n-2)!} = n(n-1)$; and $0! = 1$`,
    prereqs: [], ext: [], sources: [S("Factorial Notation")],
  },
  {
    id: "C03", slug: "repetition-allowed", title: "Arrangements with repetition", group: "Counting", tier: "core",
    oneLiner: t`Each of $r$ places can take any of $n$ things: $n^r$`,
    prereqs: ["C01"], ext: ["laws of indices"], sources: [S("Permutations with Repetition")],
  },

  // Permutations
  {
    id: "C04", slug: "npr", title: "Permutations: nPr", group: "Permutations", tier: "core",
    oneLiner: t`$^nP_r = \frac{n!}{(n-r)!}$ arrangements of $r$ out of $n$ different things`,
    prereqs: ["C01", "C02"], ext: [], sources: [S("Permutations of Distinct Objects")],
  },
  {
    id: "C05", slug: "arrangements-with-conditions", title: "Arrangements with conditions", group: "Permutations", tier: "core",
    oneLiner: "Fill the restricted places first; glue 'together' items into a block; 'never together' = all − together",
    prereqs: ["C04"], ext: [], sources: [S("Permutations of Distinct Objects")],
  },
  {
    id: "C06", slug: "identical-objects", title: "Arranging identical objects", group: "Permutations", tier: "core",
    oneLiner: t`$\frac{n!}{p!\,q!\,\ldots}$ when $p$ are alike, $q$ are alike, ...`,
    prereqs: ["C04"], ext: [], sources: [S("Permutations with Identical Objects")],
  },
  {
    id: "C07", slug: "circular-permutations", title: "Circular arrangements", group: "Permutations", tier: "core",
    oneLiner: t`Fix one seat: $(n-1)!$; a necklace or garland that can flip: $\frac{(n-1)!}{2}$`,
    prereqs: ["C04"], ext: [], sources: [S("Circular Permutations")],
  },
  {
    id: "C08", slug: "dictionary-rank", title: "Rank in the dictionary", group: "Permutations", tier: "adv",
    oneLiner: "Count the words that start with each smaller letter, then fix it and move on",
    prereqs: ["C05"], ext: [], sources: [S("Permutations of Distinct Objects")],
  },

  // Combinations
  {
    id: "C09", slug: "ncr", title: "Combinations: nCr", group: "Combinations", tier: "core",
    oneLiner: t`Order doesn't matter: $^nC_r = \frac{n!}{r!(n-r)!} = \frac{{}^nP_r}{r!}$`,
    prereqs: ["C04"], ext: [], sources: [S("Combinations")],
  },
  {
    id: "C10", slug: "ncr-properties", title: "Properties of nCr", group: "Combinations", tier: "core",
    oneLiner: t`$^nC_r = {}^nC_{n-r}$; $^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$; $^nC_x = {}^nC_y$ means $x = y$ or $x + y = n$`,
    prereqs: ["C09"], ext: [], sources: [S("Properties of Combinations")],
  },
  {
    id: "C11", slug: "selections-with-conditions", title: "Selections with conditions", group: "Combinations", tier: "core",
    oneLiner: "Pick from each group and multiply; 'at least one' = all − none",
    prereqs: ["C09"], ext: [], sources: [S("Combinations")],
  },
  {
    id: "C12", slug: "counting-in-geometry", title: "Lines, triangles and diagonals", group: "Combinations", tier: "core",
    oneLiner: t`Choose 2 points for a line, 3 for a triangle; a polygon has $^nC_2 - n$ diagonals`,
    prereqs: ["C09"], ext: [], sources: [S("Combinations")],
  },
  {
    id: "C13", slug: "dividing-into-groups", title: "Dividing into groups", group: "Combinations", tier: "adv",
    oneLiner: t`Groups of sizes $p, q, r$: $\frac{(p+q+r)!}{p!\,q!\,r!}$; divide by $k!$ for $k$ groups of equal size`,
    prereqs: ["C09"], ext: [], sources: [S("Combinations")],
  },
  {
    id: "C14", slug: "any-number-of-things", title: "Choosing any number of things", group: "Combinations", tier: "core",
    oneLiner: t`Each thing is in or out: $2^n$ selections, $2^n - 1$ with at least one`,
    prereqs: ["C03", "C09"], ext: [], sources: [S("Properties of Combinations")],
  },
];
