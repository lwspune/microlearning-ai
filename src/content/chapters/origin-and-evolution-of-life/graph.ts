import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Origin and Evolution of Life prerequisite graph (Balbharati Biology Std XII, Ch.5): chemical evolution, evidences of evolution, fossils and the geological time scale, theories of evolution, natural selection, the Hardy–Weinberg principle, speciation and human evolution.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/evolution-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Origin of life
  {
    id: "C01", slug: "chemical-evolution", title: "Chemical evolution and the origin of life", group: "Origin of life", tier: "core",
    oneLiner: t`Oparin and Haldane: inorganic molecules formed organic ones, which gathered into coacervates and then the first cells; Urey and Miller made amino acids from CH₄, NH₃ and H₂ (1 : 2 : 2) with sparks`,
    prereqs: [], ext: [], sources: [S("Chemical Evolution of Life")],
  },
  // Evidence
  {
    id: "C02", slug: "evidences-of-evolution", title: "Evidences of evolution", group: "Evidence", tier: "core",
    oneLiner: t`Homologous organs (same plan, different use), analogous organs (different plan, same use), vestigial organs and connecting links such as *Archaeopteryx* and *Seymouria*`,
    prereqs: [], ext: [], sources: [S("Evidences of Organic Evolution")],
  },
  {
    id: "C03", slug: "fossils-time-scale", title: "Fossils and the geological time scale", group: "Evidence", tier: "core",
    oneLiner: t`Fossils in older rocks are simpler; the eras: Proterozoic invertebrates, Palaeozoic fishes and amphibians, Mesozoic reptiles (Jurassic dinosaurs), Cenozoic mammals`,
    prereqs: ["C02"], ext: [], sources: [S("Geological Time Scale"), S("Evidences of Organic Evolution")],
  },
  // Theories
  {
    id: "C04", slug: "theories-of-evolution", title: "Lamarckism, Darwinism and mutation theory", group: "Theories", tier: "core",
    oneLiner: t`Lamarck: acquired characters are inherited (disproved by Weismann's germplasm theory); Darwin: natural selection of small variations; de Vries: large, sudden mutations in *Oenothera*`,
    prereqs: [], ext: [], sources: [S("Organic Evolution"), S("Mutation Theory"), S("Darwinism")],
  },
  {
    id: "C05", slug: "natural-selection", title: "Variation and natural selection", group: "Theories", tier: "core",
    oneLiner: t`Mutation, recombination, gene flow and genetic drift change the gene pool; natural selection, as in industrial melanism, may be stabilizing, directional or disruptive`,
    prereqs: ["C04"], ext: [], sources: [S("Modern Synthetic Theory of Evolution"), S("Mechanism of Organic Evolution")],
  },
  // Population genetics
  {
    id: "C06", slug: "hardy-weinberg", title: "The Hardy–Weinberg principle", group: "Population genetics", tier: "core",
    oneLiner: t`In a large, randomly mating population with no disturbing forces, $p + q = 1$ and the genotypes stay at $p^2 + 2pq + q^2 = 1$`,
    prereqs: ["C05"], ext: [], sources: [S("Hardy-Weinberg Principle")],
  },
  {
    id: "C07", slug: "isolation-speciation", title: "Isolation, speciation and adaptive radiation", group: "Population genetics", tier: "core",
    oneLiner: t`Pre-mating and post-mating isolating mechanisms stop gene flow, so populations become new species; one ancestor radiating into many forms is adaptive radiation (Darwin's finches)`,
    prereqs: ["C05"], ext: [], sources: [S("Modern Synthetic Theory of Evolution"), S("Adaptive Radiation")],
  },
  // Human evolution
  {
    id: "C08", slug: "human-evolution", title: "Human evolution", group: "Human evolution", tier: "core",
    oneLiner: t`Apes are tailless; *Australopithecus* (450–600 cc) links ape and man; then *Homo habilis*, *Homo erectus* (900 cc), Neanderthal man (1400 cc) and *Homo sapiens* (1450 cc)`,
    prereqs: ["C03"], ext: [], sources: [S("Human Evolution")],
  },
];
