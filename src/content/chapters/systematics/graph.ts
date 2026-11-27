import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Systematics of Living Organisms prerequisite graph (Balbharati Biology Std XI, Ch.2): binomial nomenclature, Whittaker's five kingdoms, Monera, Protista and Fungi, and the acellular viruses and viroids.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/systematics-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Naming
  {
    id: "C01", slug: "nomenclature", title: "Binomial nomenclature", group: "Naming", tier: "core",
    oneLiner: t`Linnaeus (1753) gave each organism a two-part name: a capitalised generic epithet and a lower-case specific epithet, then the author's abbreviation, as in Helianthus annuus L.`,
    prereqs: [], ext: [], sources: [S("Nomenclature")],
  },
  // Classification
  {
    id: "C02", slug: "five-kingdoms", title: "Whittaker's five kingdoms", group: "Classification", tier: "core",
    oneLiner: t`Linnaeus's two kingdoms could not place bacteria, fungi or Euglena; Whittaker (1969) proposed Monera, Protista, Fungi, Plantae and Animalia, leaving out viruses`,
    prereqs: ["C01"], ext: [], sources: [S("Five Kingdom Classification")],
  },
  // Kingdoms
  {
    id: "C03", slug: "kingdom-monera", title: "Kingdom Monera", group: "Kingdoms", tier: "core",
    oneLiner: t`Unicellular prokaryotes with a nucleoid, 70S ribosomes and a peptidoglycan wall; shaped as bacillus (rod), coccus (sphere), vibrio (comma) or spirillum (spiral); mostly heterotrophs, but cyanobacteria photosynthesise`,
    prereqs: ["C02"], ext: [], sources: [S("Kingdom Monera")],
  },
  {
    id: "C04", slug: "kingdom-protista", title: "Kingdom Protista", group: "Kingdoms", tier: "core",
    oneLiner: t`Unicellular eukaryotes: diatoms with silica walls, dinoflagellates such as Gonyaulax (red tide), Euglena, and protozoans that are amoeboid (Entamoeba), ciliate (Paramoecium) or sporozoan (Plasmodium)`,
    prereqs: ["C02"], ext: [], sources: [S("Kingdom Protista")],
  },
  {
    id: "C05", slug: "kingdom-fungi", title: "Kingdom Fungi", group: "Kingdoms", tier: "core",
    oneLiner: t`Heterotrophs with chitin walls and extracellular digestion: Rhizopus (algal fungi), Aspergillus and yeast (sac fungi), mushrooms (club fungi); they give food, yeast and antibiotics, and form lichens and mycorrhiza`,
    prereqs: ["C02"], ext: [], sources: [S("Kingdom Fungi")],
  },
  // Acellular
  {
    id: "C06", slug: "viruses-viroids", title: "Viruses and viroids", group: "Acellular", tier: "core",
    oneLiner: t`Viruses are nucleic acid (DNA or RNA) in a protein coat, active only in a host: TMV is a rod of RNA, bacteriophages infect bacteria; viroids are bare single-stranded RNA`,
    prereqs: ["C02"], ext: [], sources: [S("Acellular Organisms")],
  },
];
