import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Kingdom Plantae prerequisite graph (Balbharati Biology Std XI, Ch.3): cryptogams and phanerogams, algae, bryophytes, pteridophytes, gymnosperms, angiosperms with dicots and monocots, and plant life cycles.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/kingdom-plantae-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Plants
  {
    id: "C01", slug: "plant-classification", title: "Classifying plants", group: "Plants", tier: "core",
    oneLiner: t`Cryptogamae (Thallophyta, Bryophyta, Pteridophyta) reproduce by spores with hidden sex organs; Phanerogamae (gymnosperms and angiosperms) bear seeds`,
    prereqs: [], ext: [], sources: [S("Classification of Kingdom Plantae")],
  },
  // Cryptogams
  {
    id: "C02", slug: "algae", title: "Algae", group: "Cryptogams", tier: "core",
    oneLiner: t`Thalloid bodies with no root, stem or leaf: green algae store starch (chlorophyll a, b), brown algae store laminarin and mannitol (fucoxanthin), red algae store floridean starch (phycoerythrin)`,
    prereqs: ["C01"], ext: [], sources: [S("Algae")],
  },
  {
    id: "C03", slug: "bryophytes", title: "Bryophytes", group: "Cryptogams", tier: "core",
    oneLiner: t`Amphibious plants needing water for fertilization; rhizoids instead of roots; the haploid gametophyte dominates and the sporophyte (foot, seta, capsule) depends on it, as in Funaria`,
    prereqs: ["C02"], ext: [], sources: [S("Bryophytes")],
  },
  {
    id: "C04", slug: "pteridophytes", title: "Pteridophytes", group: "Cryptogams", tier: "core",
    oneLiner: t`The first vascular, true land plants, with roots, stem and leaves; the diploid sporophyte dominates; they bear spores, not seeds, as in the fern Nephrolepis`,
    prereqs: ["C03"], ext: [], sources: [S("Pteridophytes")],
  },
  // Phanerogams
  {
    id: "C05", slug: "gymnosperms", title: "Gymnosperms", group: "Phanerogams", tier: "core",
    oneLiner: t`Seed plants whose seeds are naked on megasporophylls; Sequoia sempervirens is the tallest plant, Zamia pygmaea the smallest gymnosperm and Ginkgo a living fossil`,
    prereqs: ["C04"], ext: [], sources: [S("Gymnosperms")],
  },
  {
    id: "C06", slug: "angiosperms", title: "Angiosperms: dicots and monocots", group: "Phanerogams", tier: "core",
    oneLiner: t`Seeds enclosed in a fruit and double fertilization; dicots have tap roots, reticulate venation, flowers in 4s or 5s and cambium; monocots have adventitious roots, parallel venation, flowers in 3s and closed bundles`,
    prereqs: ["C05"], ext: [], sources: [S("Angiosperms")],
  },
  // Life cycles
  {
    id: "C07", slug: "plant-life-cycles", title: "Life cycles and alternation of generations", group: "Life cycles", tier: "core",
    oneLiner: t`Sporophyte (2n) → meiosis → spores → gametophyte (n) → gametes → fertilization → zygote; haplontic cycles keep only the zygote diploid, haplo-diplontic cycles have both multicellular phases`,
    prereqs: ["C03"], ext: [], sources: [S("Plant Life Cycles and Alternation of Generations")],
  },
];
