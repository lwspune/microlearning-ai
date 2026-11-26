import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Astronomy and Space prerequisite graph: NDA's general-science astronomy, taught in neither the Std XI nor
 * the Std XII book (PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA").
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
export const graph: GraphNode[] = [
  {
    id: "C01", slug: "solar-system-and-universe", title: "The solar system and the universe", group: "Astronomy", tier: "core", visual: true,
    oneLiner: t`The Sun is a star with eight planets; space is measured in astronomical units, light years and parsecs`,
    prereqs: [], ext: ["Kepler's laws (Gravitation, Ch.5)"],
    sources: ["nda/astronomy-and-space#Astronomy and Space"],
  },
];
