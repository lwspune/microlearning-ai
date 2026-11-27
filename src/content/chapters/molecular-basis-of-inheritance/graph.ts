import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Molecular Basis of Inheritance prerequisite graph (Balbharati Biology Std XII, Ch.4): DNA as the genetic material, the structure and packaging of DNA, replication, transcription, the genetic code, translation, the lac operon, genomes and DNA fingerprinting.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/molecular-inheritance-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Genetic material
  {
    id: "C01", slug: "dna-genetic-material", title: "DNA is the genetic material", group: "Genetic material", tier: "core",
    oneLiner: t`Griffith's transformation of *Streptococcus*; Avery, MacLeod and McCarty showed only DNase stops it; Hershey and Chase found ³²P (DNA), not ³⁵S (protein), entering bacteria`,
    prereqs: [], ext: [], sources: [S("The Genetic Material is DNA")],
  },
  {
    id: "C02", slug: "dna-rna-structure", title: "Structure of DNA and RNA", group: "Genetic material", tier: "core",
    oneLiner: t`DNA is a double helix of antiparallel strands: A pairs with T (two H-bonds), G with C (three); RNA is single-stranded, with ribose and uracil in place of thymine`,
    prereqs: ["C01"], ext: [], sources: [S("The Genetic Material is DNA")],
  },
  {
    id: "C03", slug: "dna-packaging", title: "DNA packaging", group: "Genetic material", tier: "core",
    oneLiner: t`About 146 base pairs wrap a histone octamer (two each of H2A, H2B, H3, H4) to form a nucleosome; H1 holds the linker; loose euchromatin is active, dense heterochromatin is not`,
    prereqs: ["C02"], ext: [], sources: [S("DNA Packaging")],
  },
  // Copying and reading DNA
  {
    id: "C04", slug: "dna-replication", title: "DNA replication", group: "Copying and reading DNA", tier: "core",
    oneLiner: t`Semiconservative (Meselson and Stahl), in the S phase: helicase unwinds, topoisomerase relieves supercoils, RNA primers start strands, the lagging strand forms Okazaki fragments joined by ligase`,
    prereqs: ["C02"], ext: [], sources: [S("DNA Replication")],
  },
  {
    id: "C05", slug: "transcription", title: "Transcription", group: "Copying and reading DNA", tier: "core",
    oneLiner: t`RNA polymerase copies the template strand into RNA; in eukaryotes hnRNA is capped, given a poly-A tail and spliced to remove introns, giving mRNA`,
    prereqs: ["C02"], ext: [], sources: [S("Protein Synthesis")],
  },
  {
    id: "C06", slug: "genetic-code", title: "The genetic code", group: "Copying and reading DNA", tier: "core",
    oneLiner: t`Codons are triplets: 64 in all, 61 for amino acids, AUG the start, UAA, UAG and UGA stops; the code is commaless, non-overlapping, degenerate and nearly universal`,
    prereqs: ["C05"], ext: [], sources: [S("Protein Synthesis")],
  },
  {
    id: "C07", slug: "translation", title: "Translation", group: "Copying and reading DNA", tier: "core",
    oneLiner: t`On ribosomes in the cytoplasm: met-tRNA binds AUG, the large subunit joins, tRNAs bring amino acids by anticodon, peptide bonds form, and a stop codon ends the chain`,
    prereqs: ["C06"], ext: [], sources: [S("Protein Synthesis")],
  },
  // Regulation and genomes
  {
    id: "C08", slug: "lac-operon", title: "Gene regulation: the lac operon", group: "Regulation and genomes", tier: "core",
    oneLiner: t`Jacob and Monod: a regulator makes a repressor that binds the operator; lactose, the inducer, removes it so the structural genes are transcribed; trp is repressible`,
    prereqs: ["C05"], ext: [], sources: [S("Operon Concept")],
  },
  {
    id: "C09", slug: "genome-hgp", title: "Genomes and the Human Genome Project", group: "Regulation and genomes", tier: "core",
    oneLiner: t`A genome is an organism's complete set of DNA; the HGP (1990–2003) read about 3 × 10⁹ base pairs, of which under 2% code for proteins`,
    prereqs: ["C02"], ext: [], sources: [S("Genomics"), S("Human Genome Project")],
  },
  {
    id: "C10", slug: "dna-fingerprinting", title: "DNA fingerprinting", group: "Regulation and genomes", tier: "core",
    oneLiner: t`VNTRs differ between people: isolate DNA, cut it with restriction enzymes, separate by gel electrophoresis, transfer by Southern blotting, and probe; PCR amplifies small samples`,
    prereqs: ["C09"], ext: [], sources: [S("DNA Fingerprinting")],
  },
];
