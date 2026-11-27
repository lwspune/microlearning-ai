import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Ecosystems and Energy Flow prerequisite graph (Balbharati Biology Std XII, Ch.14): productivity, decomposition, trophic levels and the 10% law, ecological pyramids, ecological succession, and the carbon and phosphorus cycles.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/ecosystems-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Ecosystem
  {
    id: "C01", slug: "productivity", title: "Ecosystem and productivity", group: "Ecosystem", tier: "core",
    oneLiner: t`Primary productivity is the rate at which plants make biomass, in g/m²/day; less than 50% of sunlight is photosynthetically active; NPP = GPP − respiration`,
    prereqs: [], ext: [], sources: [S("Ecosystem"), S("Energy Flow")],
  },
  {
    id: "C02", slug: "decomposition", title: "Decomposition", group: "Ecosystem", tier: "core",
    oneLiner: t`Saprotrophs break down detritus by fragmentation, leaching, catabolism, humification (forming humus) and mineralization (releasing inorganic nutrients)`,
    prereqs: ["C01"], ext: [], sources: [S("Ecosystem")],
  },
  // Energy
  {
    id: "C03", slug: "energy-flow", title: "Trophic levels and energy flow", group: "Energy", tier: "core",
    oneLiner: t`Energy flows one way, producer → herbivore → carnivore; only about 10% passes to each next level; food chains interlink into food webs`,
    prereqs: ["C01"], ext: [], sources: [S("Energy Flow")],
  },
  {
    id: "C04", slug: "ecological-pyramids", title: "Ecological pyramids", group: "Energy", tier: "core",
    oneLiner: t`Elton's pyramids of number, biomass and energy: a single tree gives an inverted pyramid of numbers, the ocean an inverted pyramid of biomass, but the energy pyramid is always upright`,
    prereqs: ["C03"], ext: [], sources: [S("Ecological Pyramids")],
  },
  // Change
  {
    id: "C05", slug: "ecological-succession", title: "Ecological succession", group: "Change", tier: "core",
    oneLiner: t`Primary succession starts on bare ground (rock, lava, a landslide) with pioneers such as lichens or, in water, phytoplankton; seral stages lead to a stable climax community`,
    prereqs: [], ext: [], sources: [S("Ecological Succession")],
  },
  {
    id: "C06", slug: "nutrient-cycles", title: "Carbon and phosphorus cycles", group: "Change", tier: "core",
    oneLiner: t`The carbon cycle is gaseous, with the atmosphere and oceans (71% of carbon) as reservoirs and rocks and fossil fuels as sinks; the phosphorus cycle is sedimentary, and phosphorus limits productivity`,
    prereqs: ["C02"], ext: [], sources: [S("Nutrient Cycles")],
  },
];
