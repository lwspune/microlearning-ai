import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Living World prerequisite graph (Balbharati Biology Std XI, Ch.1): the basic properties of life, taxonomic aids such as herbaria, keys and museums, botanical gardens, zoos and biodiversity parks, and conserving biodiversity.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/living-world-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Life
  {
    id: "C01", slug: "properties-of-life", title: "Basic properties of life", group: "Life", tier: "core",
    oneLiner: t`Living things grow from within, carry out metabolism, reproduce and respond to their surroundings; responsiveness is unique to the living, and decay comes only after death`,
    prereqs: [], ext: [], sources: [S("Basic Principles of Life")],
  },
  // Taxonomic aids
  {
    id: "C02", slug: "taxonomic-aids", title: "Herbaria, keys and museums", group: "Taxonomic aids", tier: "core",
    oneLiner: t`A herbarium sheet holds a dried, pressed, labelled plant; dichotomous keys sort organisms by contrasting characters; floras and manuals list an area's species; museums keep preserved specimens`,
    prereqs: ["C01"], ext: [], sources: [S("Herbarium")],
  },
  {
    id: "C03", slug: "gardens-zoos-parks", title: "Botanical gardens, zoos and biodiversity parks", group: "Taxonomic aids", tier: "core",
    oneLiner: t`Botanical gardens grow labelled living plants from around the world (Kolkata, Kew); zoos keep wild animals in conditions like their home; biodiversity parks grow self-sustaining communities on degraded land`,
    prereqs: ["C02"], ext: [], sources: [S("Botanical Gardens"), S("Zoological Parks")],
  },
  // Conservation
  {
    id: "C04", slug: "conserving-biodiversity", title: "Conserving biodiversity", group: "Conservation", tier: "core",
    oneLiner: t`In situ conservation protects organisms at home, as in sacred groves; ex situ conservation keeps them elsewhere, as in zoos; over-exploitation by a growing population is a main cause of loss`,
    prereqs: ["C03"], ext: [], sources: [S("Conservation of Biodiversity")],
  },
];
