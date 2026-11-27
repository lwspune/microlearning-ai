import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Biodiversity, Conservation and Environmental Issues prerequisite graph (Balbharati Biology Std XII, Ch.15): levels and patterns of biodiversity, its loss, in situ and ex situ conservation, air and noise pollution, water pollution and wastes, and ozone depletion and global warming.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/biodiversity-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Biodiversity
  {
    id: "C01", slug: "biodiversity-patterns", title: "Levels and patterns of biodiversity", group: "Biodiversity", tier: "core",
    oneLiner: t`Diversity is genetic, species and ecological; it peaks in the stable, sunny tropics; species richness rises with area as S = CA^Z; Ehrlich's rivet popper hypothesis shows why each species matters`,
    prereqs: [], ext: [], sources: [S("Levels of Biodiversity"), S("Patterns of Biodiversity")],
  },
  {
    id: "C02", slug: "biodiversity-loss", title: "Loss of biodiversity", group: "Biodiversity", tier: "core",
    oneLiner: t`The evil quartet: habitat loss (the prime cause), over-exploitation, alien invaders such as Parthenium and water hyacinth, and co-extinction; IUCN lists species as endangered, extinct in the wild and more`,
    prereqs: ["C01"], ext: [], sources: [S("Loss of Biodiversity")],
  },
  {
    id: "C03", slug: "conservation", title: "Conserving biodiversity", group: "Biodiversity", tier: "core",
    oneLiner: t`In situ conservation protects species at home, in national parks and sacred groves; ex situ conservation uses zoos, tissue culture and cryopreservation at −196 °C; people like Saalumara Thimmakka plant and protect trees`,
    prereqs: ["C02"], ext: [], sources: [S("Conservation of Biodiversity"), S("Deforestation")],
  },
  // Pollution
  {
    id: "C04", slug: "air-noise-pollution", title: "Air and noise pollution", group: "Pollution", tier: "core",
    oneLiner: t`Particulates (solids and aerosols) and gases such as CO, which binds haemoglobin, foul the air; Bharat Stage norms limit vehicle emissions; loud noise is restricted after 10 pm`,
    prereqs: [], ext: [], sources: [S("Environmental Issues")],
  },
  {
    id: "C05", slug: "water-pollution-wastes", title: "Water pollution and wastes", group: "Pollution", tier: "core",
    oneLiner: t`Organic waste raises BOD and suffocates fish; extra nutrients cause eutrophication and algal blooms; biodegradable wastes such as bagasse and composted excreta can be recycled`,
    prereqs: ["C04"], ext: [], sources: [S("Environmental Issues")],
  },
  {
    id: "C06", slug: "ozone-global-warming", title: "Ozone depletion and global warming", group: "Pollution", tier: "core",
    oneLiner: t`Industrial CFCs release chlorine that destroys stratospheric ozone, worst over Antarctica; the Montreal Protocol (1987) curbs them; CO₂ and CH₄ trap infrared heat, warming the Earth`,
    prereqs: ["C04"], ext: [], sources: [S("Ozone Depletion"), S("Greenhouse Effect and Global Warming")],
  },
];
