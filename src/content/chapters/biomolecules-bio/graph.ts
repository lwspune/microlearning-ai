import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Biomolecules prerequisite graph (Balbharati Biology Std XI, Ch.6): macromolecules and metabolism, carbohydrates, proteins, lipids, enzymes and nucleic acids.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/biomolecules-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "biomolecules-metabolism", title: "Biomolecules and metabolism", group: "Basics", tier: "core",
    oneLiner: t`Monosaccharides, amino acids and nucleotides join into macromolecules; metabolism is all the cell's catabolic and anabolic reactions, drawing on a metabolic pool; secondary metabolites serve people, not the organism`,
    prereqs: [], ext: [], sources: [S("Biomolecules in the Cell")],
  },
  // Molecules
  {
    id: "C02", slug: "carbohydrates", title: "Carbohydrates", group: "Molecules", tier: "core",
    oneLiner: t`Mono-, oligo- and polysaccharides linked by glycosidic bonds; reducing sugars have a free aldehyde or ketone group and reduce Benedict's reagent; starch, glycogen and cellulose are homopolysaccharides; plants move sucrose`,
    prereqs: ["C01"], ext: [], sources: [S("Carbohydrates")],
  },
  {
    id: "C03", slug: "proteins", title: "Proteins", group: "Molecules", tier: "core",
    oneLiner: t`Amino acids joined by peptide bonds; hydrogen bonds hold the secondary structure and cysteine forms disulphide bridges; proteins are simple (histones), conjugated (haemoglobin) or derived, and work as collagen, myosin and antibodies`,
    prereqs: ["C01"], ext: [], sources: [S("Proteins")],
  },
  {
    id: "C04", slug: "lipids", title: "Lipids", group: "Molecules", tier: "core",
    oneLiner: t`Saturated fatty acids (palmitic, stearic) have no double bonds, unsaturated ones do; linoleic, linolenic and arachidonic acids are essential; a phospholipid is glycerol, two fatty acids and a phosphate`,
    prereqs: ["C01"], ext: [], sources: [S("Lipids")],
  },
  // Catalysts
  {
    id: "C05", slug: "enzymes", title: "Enzymes", group: "Catalysts", tier: "core",
    oneLiner: t`Protein catalysts (ribozymes apart): apoenzyme plus cofactor is the holoenzyme; a low Km means high affinity; Koshland's induced fit replaced Fischer's lock and key; sucrase is a hydrolase`,
    prereqs: ["C03"], ext: [], sources: [S("Properties and Nature of Enzymes"), S("Classification and Nomenclature of Enzymes")],
  },
  // Molecules
  {
    id: "C06", slug: "nucleic-acids", title: "Nucleic acids", group: "Molecules", tier: "core",
    oneLiner: t`Nucleotides of sugar, phosphate and base; DNA pairs A with T and G with C (three hydrogen bonds), so A + T + G + C = 100% with A = T and G = C; RNA has ribose and uracil, and comes as mRNA, tRNA and rRNA`,
    prereqs: ["C01"], ext: [], sources: [S("Nucleic Acids")],
  },
];
