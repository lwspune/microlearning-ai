import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Animal Tissue prerequisite graph (Balbharati Biology Std XI, Ch.10): histology and the four basic tissues, epithelia and glands, cell junctions, areolar, adipose and dense connective tissue, cartilage and bone, the neuron, and smooth, skeletal and cardiac muscle.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/animal-tissue-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "histology-tissue-types", title: "Histology and types of tissues", group: "Basics", tier: "core",
    oneLiner: t`Histology studies the structure and arrangement of tissues; the four basic animal tissues are epithelial, connective, muscular and nervous`,
    prereqs: [], ext: [], sources: [S("Histology and Types of Tissues")],
  },
  // Epithelium
  {
    id: "C02", slug: "epithelium-glands", title: "Epithelia and glands", group: "Epithelium", tier: "core",
    oneLiner: t`Columnar epithelium lines the intestine, stratified epithelium forms the epidermis, ciliated epithelium lines the frog's buccal cavity; exocrine glands use ducts, endocrine glands do not`,
    prereqs: ["C01"], ext: [], sources: [S("Epithelial Tissue")],
  },
  {
    id: "C03", slug: "cell-junctions", title: "Cell junctions", group: "Epithelium", tier: "core",
    oneLiner: t`Epithelial cells are joined by tight junctions, adherens junctions, gap junctions, desmosomes and hemidesmosomes, each with its own job`,
    prereqs: ["C02"], ext: [], sources: [S("Epithelial Tissue")],
  },
  // Connective
  {
    id: "C04", slug: "areolar-adipose-dense", title: "Areolar, adipose and dense tissue", group: "Connective", tier: "core",
    oneLiner: t`Areolar tissue has a jelly-like matrix with white and yellow fibres and fibroblasts, mast cells, macrophages and fat cells; adipose tissue insulates; tendons join muscles to bones`,
    prereqs: ["C01"], ext: [], sources: [S("Connective Tissue")],
  },
  {
    id: "C05", slug: "cartilage-bone", title: "Cartilage and bone", group: "Connective", tier: "core",
    oneLiner: t`Cartilage has a chondrin matrix inside a perichondrium; elastic cartilage bends; bone has an ossein matrix inside a periosteum, and spongy bone holds red bone marrow`,
    prereqs: ["C04"], ext: [], sources: [S("Connective Tissue")],
  },
  // Nervous
  {
    id: "C06", slug: "nervous-tissue", title: "Nervous tissue", group: "Nervous", tier: "core",
    oneLiner: t`Neurons carry impulses: a multipolar neuron has one axon and many dendrons; afferent neurons carry impulses to the CNS and efferent neurons carry them to the effector`,
    prereqs: ["C01"], ext: [], sources: [S("Nervous Tissue")],
  },
  // Muscular
  {
    id: "C07", slug: "muscular-tissue", title: "Muscular tissue", group: "Muscular", tier: "core",
    oneLiner: t`Smooth muscle is spindle-shaped, non-striated and involuntary; skeletal muscle is striated, multinucleate and voluntary; cardiac muscle has intercalated discs`,
    prereqs: ["C01"], ext: [], sources: [S("Muscular Tissue")],
  },
];
