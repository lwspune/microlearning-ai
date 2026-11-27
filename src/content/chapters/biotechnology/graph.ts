import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Biotechnology prerequisite graph (Balbharati Biology Std XII, Ch.12): restriction enzymes, cloning vectors and the steps of rDNA technology, PCR, recombinant proteins, transgenic plants and animals, gene therapy, and biopatents and biopiracy.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/biotechnology-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Tools
  {
    id: "C01", slug: "restriction-enzymes", title: "Restriction enzymes", group: "Tools", tier: "core",
    oneLiner: t`Molecular scissors that cut both strands at palindromic sites 4–8 nucleotides long, such as EcoRI (GAATTC) and HindIII (AAGCTT), breaking phosphodiester bonds and leaving sticky or blunt ends`,
    prereqs: [], ext: [], sources: [S("Principles and Processes of Biotechnology")],
  },
  {
    id: "C02", slug: "vectors-cloning", title: "Vectors and gene cloning", group: "Tools", tier: "core",
    oneLiner: t`A vector such as plasmid pBR322 needs an ori, a marker gene and a unique cutting site; donor and vector are cut with the same enzyme, joined by ligase, and taken up by Ca²⁺-treated host cells`,
    prereqs: ["C01"], ext: [], sources: [S("Methodology for rDNA Technology"), S("Principles and Processes of Biotechnology")],
  },
  {
    id: "C03", slug: "pcr", title: "Polymerase chain reaction", group: "Tools", tier: "core",
    oneLiner: t`PCR copies DNA in vitro: denaturation (90–98 °C), annealing of primers (40–60 °C) and extension by Taq polymerase; each cycle doubles the DNA, so n cycles give 2ⁿ copies`,
    prereqs: ["C01"], ext: [], sources: [S("Principles and Processes of Biotechnology")],
  },
  // Applications
  {
    id: "C04", slug: "recombinant-proteins", title: "Recombinant proteins", group: "Applications", tier: "core",
    oneLiner: t`Bacteria with human genes make insulin (chains A and B in separate pBR322 plasmids), TPA to dissolve clots, erythropoietin for anaemia, relaxin for parturition and α₁-antitrypsin for emphysema`,
    prereqs: ["C02"], ext: [], sources: [S("Applications of Biotechnology")],
  },
  {
    id: "C05", slug: "transgenic-plants", title: "Transgenic plants", group: "Applications", tier: "core",
    oneLiner: t`Bt cotton resists insects, Flavr Savr tomato lasts longer, golden rice carries β-carotene, iron-rich rice carries ferritin, and Arabidopsis genes improve oil crops`,
    prereqs: ["C02"], ext: [], sources: [S("Applications of Biotechnology")],
  },
  {
    id: "C06", slug: "transgenic-animals-gene-therapy", title: "Transgenic animals and gene therapy", group: "Applications", tier: "core",
    oneLiner: t`Transgenic mice carry oncogenes for cancer research; pigs are bred for heart transplants; somatic gene therapy treats only the patient, while germ line therapy, passed to offspring, is discouraged`,
    prereqs: ["C02"], ext: [], sources: [S("Applications of Biotechnology")],
  },
  // Society
  {
    id: "C07", slug: "biopatent-biopiracy", title: "Biopatents, biopiracy and bioethics", group: "Society", tier: "core",
    oneLiner: t`A biopatent protects a biological invention such as a GM strain; biopiracy takes biological resources and traditional knowledge without benefit-sharing, as with neem, basmati and turmeric`,
    prereqs: ["C05"], ext: [], sources: [S("Biopatent and Biopiracy")],
  },
];
