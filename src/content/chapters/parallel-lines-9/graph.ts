import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Parallel Lines prerequisite graph (Balbharati Std IX Part 2, Ch.2): angles made by a transversal, and the properties and tests of parallel lines.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/parallel-lines-9#${sub}`;

export const graph: GraphNode[] = [
  // Transversals
  {
    id: "C01", slug: "angles-made-by-a-transversal", title: "Angles made by a transversal", group: "Transversals", tier: "core", visual: true,
    oneLiner: t`A transversal cuts two lines at eight angles: pairs of corresponding, alternate and interior angles`,
    prereqs: [], ext: ["linear pair and vertically opposite angles (Std VIII)"], sources: [S("Pairs of Angles Formed by a Transversal")],
  },

  // Parallel lines
  {
    id: "C02", slug: "properties-of-parallel-lines", title: "Properties of parallel lines", group: "Parallel lines", tier: "core", visual: true,
    oneLiner: t`When the lines are parallel, corresponding angles are equal, alternate angles are equal, and interior angles add to $180^\circ$`,
    prereqs: ["C01"], ext: [], sources: [S("Properties of Parallel Lines")],
  },
  {
    id: "C03", slug: "tests-for-parallel-lines", title: "Tests for parallel lines", group: "Parallel lines", tier: "core", visual: true,
    oneLiner: t`Two lines are parallel if one pair of corresponding or alternate angles is equal, or a pair of interior angles adds to $180^\circ$`,
    prereqs: ["C02"], ext: [], sources: [S("Tests of Parallelness of Two Lines")],
  },
  {
    id: "C04", slug: "using-parallel-lines", title: "Using parallel lines in a figure", group: "Parallel lines", tier: "adv", visual: true,
    oneLiner: t`Draw a line parallel to the given ones through a corner, or extend a side, then chain the equal and supplementary angles`,
    prereqs: ["C02"], ext: [], sources: [S("Use of Properties of Parallel Lines")],
  },
];
