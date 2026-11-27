import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Organisms and Populations prerequisite graph (Balbharati Biology Std XII, Ch.13): biotic and abiotic factors, how organisms respond and adapt, population attributes, exponential and logistic growth, and the positive and negative interactions between species.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/organisms-populations-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Organisms
  {
    id: "C01", slug: "organism-environment", title: "Organisms and their environment", group: "Organisms", tier: "core",
    oneLiner: t`Living (biotic) and non-living (abiotic) factors shape a habitat; salinity sorts water animals into narrow-range stenohaline and wide-range euryhaline species`,
    prereqs: [], ext: [], sources: [S("Organisms and the Environment"), S("Major Abiotic Factors")],
  },
  {
    id: "C02", slug: "responses-adaptations", title: "Responses to stress and adaptations", group: "Organisms", tier: "core",
    oneLiner: t`Organisms regulate, conform, migrate or suspend activity: polar bears hibernate in winter, snails aestivate in summer, seeds stay dormant; body temperature of ectotherms follows the surroundings`,
    prereqs: ["C01"], ext: [], sources: [S("Major Abiotic Factors"), S("Adaptation")],
  },
  // Populations
  {
    id: "C03", slug: "population-attributes", title: "Population attributes", group: "Populations", tier: "core",
    oneLiner: t`A population is one species in one area; births and immigration add to it, deaths and emigration remove from it; natality and mortality are absolute (ideal) or realized (actual)`,
    prereqs: ["C01"], ext: [], sources: [S("Population")],
  },
  {
    id: "C04", slug: "population-growth", title: "Population growth", group: "Populations", tier: "core",
    oneLiner: t`With unlimited resources a population grows exponentially in a J-shaped curve; limited resources give a logistic, S-shaped curve that levels off at the carrying capacity K`,
    prereqs: ["C03"], ext: [], sources: [S("Population")],
  },
  // Interactions
  {
    id: "C05", slug: "positive-interactions", title: "Mutualism and commensalism", group: "Interactions", tier: "core",
    oneLiner: t`In mutualism both species gain, as in lichens and hummingbirds with flowers; in commensalism one gains and the other is unaffected, as with orchids on mango trees and clown fish in sea anemones`,
    prereqs: ["C01"], ext: [], sources: [S("Population Interactions")],
  },
  {
    id: "C06", slug: "negative-interactions", title: "Parasitism, predation and defences", group: "Interactions", tier: "core",
    oneLiner: t`Parasites gain at the host's cost (the koel lays eggs in a crow's nest); predation underlies biological pest control; prey defend themselves with thorns, chemicals and camouflage`,
    prereqs: ["C05"], ext: [], sources: [S("Population Interactions")],
  },
];
