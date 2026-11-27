import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Kingdom Animalia prerequisite graph (Balbharati Biology Std XI, Ch.4): symmetry, germ layers and body cavities, the non-chordate phyla from sponges to echinoderms, protochordates, and the vertebrate classes from cyclostomes to mammals.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/kingdom-animalia-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Basis
  {
    id: "C01", slug: "body-plan", title: "Symmetry, germ layers and body cavity", group: "Basis", tier: "core",
    oneLiner: t`Sponges are asymmetrical, cnidarians radial, most others bilateral; cnidarians are diploblastic with a blind-sac body; Ascaris is a pseudocoelomate with mesoderm in patches`,
    prereqs: [], ext: [], sources: [S("Animal Body Plan and Symmetry"), S("Platyhelminthes and Aschelminthes")],
  },
  // Non-chordates
  {
    id: "C02", slug: "lower-invertebrates", title: "Sponges, cnidarians and comb jellies", group: "Non-chordates", tier: "core",
    oneLiner: t`Porifera have ostia, an osculum and spicules; Cnidaria such as Aurelia have a medusa or polyp form; Ctenophora, a minor phylum, swim by comb plates`,
    prereqs: ["C01"], ext: [], sources: [S("Porifera, Cnidaria and Ctenophora")],
  },
  {
    id: "C03", slug: "higher-invertebrates", title: "Annelids to echinoderms", group: "Non-chordates", tier: "core",
    oneLiner: t`Annelids (parapodia) are the first with closed circulation; arthropods have a chitinous exoskeleton; molluscs a radula and calcareous shell; echinoderms tube feet and calcareous ossicles`,
    prereqs: ["C02"], ext: [], sources: [S("Annelida and Arthropoda"), S("Mollusca, Echinodermata and Hemichordata")],
  },
  // Chordates
  {
    id: "C04", slug: "protochordates", title: "Chordate features and protochordates", group: "Chordates", tier: "core",
    oneLiner: t`Chordates have a notochord, a dorsal hollow nerve cord and gill slits; urochordates such as Herdmania keep the notochord only in the larval tail, cephalochordates such as Amphioxus all life; Balanoglossus is a hemichordate`,
    prereqs: ["C03"], ext: [], sources: [S("Chordata and Protochordates"), S("Mollusca, Echinodermata and Hemichordata")],
  },
  // Vertebrates
  {
    id: "C05", slug: "fishes-amphibians", title: "Cyclostomes, fishes and amphibians", group: "Vertebrates", tier: "core",
    oneLiner: t`Cyclostomes are jawless; cartilaginous fishes such as Scoliodon have placoid scales and open gill clefts; bony fishes such as Rohu have an operculum and a venous heart; amphibians breathe through moist skin and undergo metamorphosis`,
    prereqs: ["C04"], ext: [], sources: [S("Cyclostomes, Pisces and Amphibia")],
  },
  {
    id: "C06", slug: "reptiles-birds-mammals", title: "Reptiles, birds and mammals", group: "Vertebrates", tier: "core",
    oneLiner: t`Reptiles have epidermal scales and a three-chambered heart (four in the crocodile); birds have beaks without teeth and hollow bones; mammals have mammary glands and a pinna`,
    prereqs: ["C05"], ext: [], sources: [S("Reptilia, Aves and Mammalia")],
  },
];
