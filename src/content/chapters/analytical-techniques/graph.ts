import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Some Analytical Techniques prerequisite graph (Balbharati Chemistry Std XI, Ch.3): filtration and crystallisation, distillation, solvent extraction and chromatography.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/analytical-techniques-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Separation
  {
    id: "C01", slug: "filtration-crystallisation", title: "Filtration and crystallisation", group: "Separation", tier: "core",
    oneLiner: t`Filtration leaves a residue and passes a filtrate; crystallisation purifies a solid from a solvent that dissolves it hot but not cold`,
    prereqs: [], ext: [], sources: [S("Purification of Solids")],
  },
  {
    id: "C02", slug: "distillation", title: "Distillation", group: "Separation", tier: "core",
    oneLiner: t`Simple distillation separates liquids with very different boiling points, fractional distillation close ones; reduced pressure for liquids that decompose; water enters the condenser at the bottom`,
    prereqs: [], ext: [], sources: [S("Distillation")],
  },
  {
    id: "C03", slug: "solvent-extraction", title: "Solvent extraction", group: "Separation", tier: "core",
    oneLiner: t`A solute moves from one liquid into an immiscible solvent that dissolves it better, in a separating funnel; several small extractions beat one large one`,
    prereqs: [], ext: [], sources: [S("Solvent Extraction")],
  },
  // Chromatography
  {
    id: "C04", slug: "chromatography-principle", title: "Principle of chromatography", group: "Chromatography", tier: "core",
    oneLiner: t`Components spread between a stationary and a mobile phase and move at different rates; $R_f = \dfrac{\text{distance moved by the substance}}{\text{distance moved by the solvent}}$`,
    prereqs: [], ext: [], sources: [S("Chromatographic Techniques")],
  },
  {
    id: "C05", slug: "types-of-chromatography", title: "Column, thin layer and paper chromatography", group: "Chromatography", tier: "core",
    oneLiner: t`Column, thin layer (TLC) and paper chromatography differ in their stationary phase; spot above the solvent; see colourless spots by UV light or iodine`,
    prereqs: ["C04"], ext: [], sources: [S("Chromatographic Techniques")],
  },
];
