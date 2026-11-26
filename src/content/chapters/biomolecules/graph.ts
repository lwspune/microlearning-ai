import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Biomolecules prerequisite graph (Balbharati Chemistry Std XII, Ch.14): carbohydrates, glucose, di- and polysaccharides, amino acids, proteins, enzymes and nucleic acids.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/biomolecules-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Carbohydrates
  {
    id: "C01", slug: "carbohydrate-classes", title: "Classes of carbohydrates", group: "Carbohydrates", tier: "core",
    oneLiner: t`Carbohydrates are mono-, oligo- or polysaccharides; monosaccharides are aldoses or ketoses (glucose an aldohexose, fructose a ketohexose); reducing sugars reduce Tollens' reagent`,
    prereqs: [], ext: [], sources: [S("Carbohydrates")],
  },
  {
    id: "C02", slug: "glucose-structure", title: "The structure of glucose", group: "Carbohydrates", tier: "core",
    oneLiner: t`Reactions prove glucose's open chain (CHO, five OH, six carbons in a row); it exists as cyclic $\alpha$ and $\beta$ pyranoses; D and L by the lowest chiral carbon`,
    prereqs: ["C01"], ext: [], sources: [S("Carbohydrates")],
  },
  {
    id: "C03", slug: "di-polysaccharides", title: "Disaccharides and polysaccharides", group: "Carbohydrates", tier: "core",
    oneLiner: t`Sucrose is nonreducing and its hydrolysis inverts rotation; maltose and lactose are reducing; starch, cellulose and glycogen are glucose polymers`,
    prereqs: ["C02"], ext: [], sources: [S("Carbohydrates")],
  },
  // Proteins
  {
    id: "C04", slug: "amino-acids", title: "Amino acids", group: "Proteins", tier: "core",
    oneLiner: t`$\alpha$-Amino acids exist as zwitterions (high melting, amphoteric); essential amino acids must come from food`,
    prereqs: [], ext: [], sources: [S("Proteins")],
  },
  {
    id: "C05", slug: "protein-structure", title: "Peptides and protein structure", group: "Proteins", tier: "core",
    oneLiner: t`Peptide bonds join amino acids; proteins have primary, secondary ($\alpha$-helix, $\beta$-sheet), tertiary (including disulfide links) and quaternary structure; heat denatures them`,
    prereqs: ["C04"], ext: [], sources: [S("Proteins")],
  },
  {
    id: "C06", slug: "enzymes", title: "Enzymes", group: "Proteins", tier: "core",
    oneLiner: t`Enzymes are protein catalysts, specific to their substrates (lock and key), working under mild conditions`,
    prereqs: ["C05"], ext: [], sources: [S("Proteins")],
  },
  // Nucleic acids
  {
    id: "C07", slug: "nucleic-acids", title: "Nucleic acids", group: "Nucleic acids", tier: "core",
    oneLiner: t`Nucleotides are base + sugar + phosphate; DNA (deoxyribose, A T G C, double helix with A–T and G–C pairs) and RNA (ribose, U for T, single strand)`,
    prereqs: [], ext: [], sources: [S("Nucleic Acids")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C08", slug: "vitamins", title: "Vitamins", group: "Vitamins", tier: "core",
    oneLiner: t`Fat-soluble vitamins A, D, E and K are stored in the body; water-soluble B and C must be eaten regularly; each deficiency causes its own disease`,
    prereqs: [], ext: [],
    sources: ["cbse/biomolecules#Vitamins", "jee-main/biomolecules#Enzymes and Vitamins", "neet/biomolecules#Vitamins and Nucleic Acids"],
  },
];
