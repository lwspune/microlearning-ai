import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Adsorption and Colloids prerequisite graph (Balbharati Chemistry Std XI, Ch.11): adsorption, physisorption and chemisorption, factors and the Freundlich isotherm, applications and catalysis, colloids, their preparation and properties.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/adsorption-colloids-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Adsorption
  {
    id: "C01", slug: "adsorption-basics", title: "Adsorption", group: "Adsorption", tier: "core",
    oneLiner: t`Adsorption gathers molecules on a surface (adsorbate on adsorbent); absorption spreads them through the bulk; adsorption is exothermic`,
    prereqs: [], ext: [], sources: [S("Adsorption")],
  },
  {
    id: "C02", slug: "physisorption-chemisorption", title: "Physisorption and chemisorption", group: "Adsorption", tier: "core",
    oneLiner: t`Physisorption is van der Waals attraction: reversible, not specific, low enthalpy, falls on heating; chemisorption forms bonds: specific, irreversible, high enthalpy`,
    prereqs: ["C01"], ext: [], sources: [S("Types of Adsorption")],
  },
  {
    id: "C03", slug: "adsorption-factors-isotherm", title: "Factors and the Freundlich isotherm", group: "Adsorption", tier: "core", visual: true,
    oneLiner: t`More surface area, more easily liquefied gases, higher pressure and lower temperature raise adsorption; Freundlich: $\dfrac{x}{m} = kP^{1/n}$, so $\log\dfrac{x}{m} = \log k + \dfrac1n\log P$`,
    prereqs: ["C02"], ext: ["logarithms"], sources: [S("Factors Affecting Adsorption of Gases on Solids"), S("Adsorption Isotherm")],
  },
  {
    id: "C04", slug: "adsorption-uses-catalysis", title: "Uses of adsorption and catalysis", group: "Adsorption", tier: "core",
    oneLiner: t`Adsorption decolourises sugar (animal charcoal), runs gas masks and chromatography; catalysts are homogeneous or heterogeneous, helped by promoters and stopped by poisons`,
    prereqs: ["C01"], ext: [], sources: [S("Applications of Adsorption"), S("Catalysis")],
  },
  // Colloids
  {
    id: "C05", slug: "colloid-types", title: "Colloids and their types", group: "Colloids", tier: "core",
    oneLiner: t`Colloidal particles are 1–1000 nm; a dispersed phase sits in a dispersion medium (sols, gels, emulsions, foams); sols are lyophilic or lyophobic; soap forms micelles`,
    prereqs: [], ext: [], sources: [S("Colloids")],
  },
  {
    id: "C06", slug: "colloid-preparation", title: "Preparing and purifying colloids", group: "Colloids", tier: "core",
    oneLiner: t`Bredig's arc method and peptisation make sols; dialysis through a membrane purifies them`,
    prereqs: ["C05"], ext: [], sources: [S("Colloids")],
  },
  {
    id: "C07", slug: "colloid-properties", title: "Properties of colloids", group: "Colloids", tier: "core",
    oneLiner: t`Colloids scatter light (Tyndall effect), jiggle (Brownian motion), carry charge (electrophoresis) and coagulate faster with higher-charged ions (Hardy-Schulze); emulsions are oil-in-water or water-in-oil`,
    prereqs: ["C05"], ext: [], sources: [S("Colloids")],
  },
];
