import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Enhancement of Food Production prerequisite graph (Balbharati Biology Std XII, Ch.11): plant breeding, tissue culture and single cell protein, animal husbandry, fisheries, bee keeping and lac culture, and microbes at home, in industry, in sewage treatment and biogas, as biofertilizers and as biocontrol agents.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/food-production-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Crops
  {
    id: "C01", slug: "plant-breeding", title: "Plant breeding", group: "Crops", tier: "core",
    oneLiner: t`Hybridization starts from germplasm, the collection of a crop's alleles; X-rays and UV rays are physical mutagens for mutation breeding; India's hybrids include Ratna rice and Ganga-3 maize`,
    prereqs: [], ext: [], sources: [S("Plant Breeding")],
  },
  {
    id: "C02", slug: "tissue-culture-scp", title: "Tissue culture and single cell protein", group: "Crops", tier: "core",
    oneLiner: t`An explant on nutrient medium forms a callus and many plantlets quickly (micropropagation); microbes such as the alga Spirulina and the yeast Candida utilis give single cell protein`,
    prereqs: ["C01"], ext: [], sources: [S("Tissue Culture"), S("Single Cell Protein")],
  },
  // Animals
  {
    id: "C03", slug: "animal-husbandry", title: "Animal husbandry", group: "Animals", tier: "core",
    oneLiner: t`A breed is a group related by descent; crossing species gives hybrids such as the mule; MOET multiplies superior hybrids; Ranikhet is a viral poultry disease`,
    prereqs: [], ext: [], sources: [S("Animal Husbandry")],
  },
  {
    id: "C04", slug: "fishery-bees-lac", title: "Fisheries, bee keeping and lac culture", group: "Animals", tier: "core",
    oneLiner: t`Estuaries, where rivers meet the sea, give estuarine fisheries; Apis dorsata is the wild rock bee; the lac insect Tachardia lacca secretes lac, which is purified into shellac`,
    prereqs: ["C03"], ext: [], sources: [S("Animal Husbandry")],
  },
  // Microbes
  {
    id: "C05", slug: "microbes-household", title: "Microbes in the kitchen", group: "Microbes", tier: "core",
    oneLiner: t`Lactic acid bacteria turn milk into curd and check harmful microbes; Leuconostoc and Streptococcus puff up idli batter with CO₂; baker's yeast makes bread rise`,
    prereqs: [], ext: [], sources: [S("Microbes in Human Welfare")],
  },
  {
    id: "C06", slug: "microbes-industry", title: "Microbes in industry", group: "Microbes", tier: "core",
    oneLiner: t`Saccharomyces ferments barley malt into beer and makes ethanol; Streptomyces venezuelae gives chloromycetin; Pseudomonas denitrificans gives vitamin B₁₂; streptokinase busts clots`,
    prereqs: ["C05"], ext: [], sources: [S("Role of Microbes in Industrial Production")],
  },
  {
    id: "C07", slug: "sewage-biogas", title: "Sewage treatment and biogas", group: "Microbes", tier: "core",
    oneLiner: t`Primary treatment removes floating debris physically; secondary treatment uses aerobic bacterial flocs; anaerobic methanogens make biogas, 50–60% methane`,
    prereqs: ["C05"], ext: [], sources: [S("Microbes in Sewage Treatment"), S("Microbes in Energy Generation")],
  },
  {
    id: "C08", slug: "biofertilizers", title: "Biofertilizers", group: "Microbes", tier: "core",
    oneLiner: t`Rhizobium fixes nitrogen in legume nodules; Azotobacter (aerobic) and Rhodospirillum (anaerobic) are free-living fixers; Azolla with Anabaena feeds rice; mycorrhiza is a fungus–root partnership`,
    prereqs: ["C05"], ext: [], sources: [S("Microbes as Biofertilizers")],
  },
  {
    id: "C09", slug: "biocontrol", title: "Biocontrol agents", group: "Microbes", tier: "core",
    oneLiner: t`Bt's cry protein kills caterpillars; Trichoderma checks soil fungi; Nosema attacks grasshoppers; Alternaria crassa kills water hyacinth and Phytophthora palmivora milk weed`,
    prereqs: ["C08"], ext: [], sources: [S("Microbes as Biocontrol Agents")],
  },
];
