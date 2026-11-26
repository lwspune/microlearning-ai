import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Energy Sources prerequisite graph: NDA's general-science energy sources, taught in neither the Std XI nor
 * the Std XII book (PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA").
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
export const graph: GraphNode[] = [
  {
    id: "C01", slug: "sources-of-energy", title: "Sources of energy", group: "Energy sources", tier: "core", visual: true,
    oneLiner: t`Renewable sources (sun, wind, flowing water, biomass, tides, the Earth's heat) are replenished; fossil and nuclear fuels are not`,
    prereqs: [], ext: ["forms of energy (Std IX Science)"],
    sources: ["nda/energy-sources#Energy Sources"],
  },
];
