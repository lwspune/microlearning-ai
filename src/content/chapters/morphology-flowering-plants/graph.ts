import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Morphology of Flowering Plants prerequisite graph (Balbharati Biology Std XI, Ch.9): tap and adventitious roots and their modifications, stem and leaf modifications, phyllotaxy and venation, racemose and cymose inflorescences, the flower's whorls and aestivation, placentation, and the parts of a dicot seed.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/morphology-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Vegetative
  {
    id: "C01", slug: "root-modifications", title: "The root and its modifications", group: "Vegetative", tier: "core",
    oneLiner: t`The tap root grows from the radicle, adventitious roots from any other part; roots are modified to store food (radish, Dahlia), give support (stilt roots) or breathe (pneumatophores)`,
    prereqs: [], ext: [], sources: [S("Root and its Modifications")],
  },
  {
    id: "C02", slug: "stem-modifications", title: "The stem and its modifications", group: "Vegetative", tier: "core",
    oneLiner: t`A stem has nodes, internodes and buds; it is modified underground (rhizome, bulb, corm), sub-aerially (stolon) or in the air (tendril, thorn, phylloclade)`,
    prereqs: ["C01"], ext: [], sources: [S("Stem and its Modifications")],
  },
  {
    id: "C03", slug: "leaf-modifications", title: "The leaf and its modifications", group: "Vegetative", tier: "core",
    oneLiner: t`Leaves are arranged by phyllotaxy (alternate, opposite, whorled), carry veins in a net or in parallel, may be simple or compound, and are modified into tendrils, spines and fleshy scale leaves`,
    prereqs: ["C02"], ext: [], sources: [S("Leaf and its Modifications")],
  },
  // Reproductive
  {
    id: "C04", slug: "inflorescence", title: "Inflorescence", group: "Reproductive", tier: "core",
    oneLiner: t`In a racemose inflorescence the peduncle grows on and the oldest flower is at the base; in a cymose one the axis ends in a flower and the oldest flower is at the apex`,
    prereqs: ["C02"], ext: [], sources: [S("Inflorescence")],
  },
  {
    id: "C05", slug: "flower-whorls-aestivation", title: "The flower: whorls, perianth and aestivation", group: "Reproductive", tier: "core",
    oneLiner: t`The ovary's level against the other whorls makes a flower hypogynous, perigynous or epigynous; tepals form a perianth; vexillary aestivation gives standard, wings and keel`,
    prereqs: ["C04"], ext: [], sources: [S("Flower")],
  },
  {
    id: "C06", slug: "placentation", title: "Placentation", group: "Reproductive", tier: "core",
    oneLiner: t`Ovules sit on the placenta: on a central axis in chambers (axile), on the inner wall (parietal), along one margin (marginal), at the base (basal) or on a free axis (free central)`,
    prereqs: ["C05"], ext: [], sources: [S("Flower")],
  },
  {
    id: "C07", slug: "dicot-seed", title: "The dicot seed", group: "Reproductive", tier: "core",
    oneLiner: t`A dicot seed has a seed coat (testa and tegmen) with a hilum and micropyle, and inside it two cotyledons and an embryonal axis of plumule and radicle`,
    prereqs: ["C01"], ext: [], sources: [S("Seed")],
  },
];
