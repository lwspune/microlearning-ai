import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Plant Tissues and Anatomy prerequisite graph (Balbharati Biology Std XI, Ch.8): meristems, simple and complex permanent tissues, stomata and vascular bundles, the anatomy of root, stem and leaf, secondary growth, wood and cork.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/plant-tissues-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Tissues
  {
    id: "C01", slug: "meristematic-tissue", title: "Meristematic tissue", group: "Tissues", tier: "core",
    oneLiner: t`By position, meristems are apical (tips; length), intercalary (at nodes, mainly monocots, short lived) and lateral (cambium; girth); behind the tip, cells become permanent`,
    prereqs: [], ext: [], sources: [S("Meristematic Tissue")],
  },
  {
    id: "C02", slug: "simple-permanent-tissues", title: "Simple permanent tissues", group: "Tissues", tier: "core",
    oneLiner: t`Parenchyma has thin cellulose walls; collenchyma is living with corners thickened by cellulose and pectin; sclerenchyma is dead at maturity with uniformly lignified walls`,
    prereqs: ["C01"], ext: [], sources: [S("Permanent Tissue")],
  },
  {
    id: "C03", slug: "complex-permanent-tissues", title: "Complex permanent tissues", group: "Tissues", tier: "core",
    oneLiner: t`Xylem (tracheids, vessels, parenchyma, fibres) carries water and minerals; phloem (sieve tubes, companion cells, parenchyma, fibres) carries food from source to sink`,
    prereqs: ["C02"], ext: [], sources: [S("Permanent Tissue")],
  },
  {
    id: "C04", slug: "tissue-systems", title: "Stomata and vascular bundles", group: "Tissues", tier: "core",
    oneLiner: t`A stoma is guarded by kidney-shaped (dicot) or dumbbell-shaped (monocot) guard cells; bundles are radial, conjoint collateral (open or closed) or concentric (always closed)`,
    prereqs: ["C03"], ext: [], sources: [S("Tissue Systems")],
  },
  // Anatomy
  {
    id: "C05", slug: "root-stem-leaf-anatomy", title: "Anatomy of root, stem and leaf", group: "Anatomy", tier: "core",
    oneLiner: t`Dicot root: 2 to 6 radial bundles; monocot root: polyarch with a large pith; sunflower stem: collenchyma hypodermis; dicot leaf dorsiventral, monocot leaf isobilateral`,
    prereqs: ["C04"], ext: [], sources: [S("Anatomy of Root, Stem and Leaf")],
  },
  // Growth
  {
    id: "C06", slug: "secondary-growth", title: "Secondary growth", group: "Growth", tier: "core",
    oneLiner: t`In a dicot stem intrafascicular and interfascicular cambium join into a ring that forms secondary xylem inside and secondary phloem outside; closed monocot bundles cannot`,
    prereqs: ["C05"], ext: [], sources: [S("Secondary Growth")],
  },
  {
    id: "C07", slug: "wood-and-cork", title: "Wood and cork cambium", group: "Growth", tier: "core",
    oneLiner: t`Spring wood is light and broad, autumn wood dark and dense, so seasons make rings; heartwood is durable; cork cambium forms suberized cork outside and phelloderm inside`,
    prereqs: ["C06"], ext: [], sources: [S("Wood"), S("Cork Cambium")],
  },
];
