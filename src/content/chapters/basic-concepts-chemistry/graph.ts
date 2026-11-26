import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Some Basic Concepts of Chemistry prerequisite graph (Balbharati Chemistry Std XI, Ch.1): matter, SI units and temperature, the laws of chemical combination, Avogadro's law, atomic and molecular masses, the mole and molar volume.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/basic-concepts-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Matter
  {
    id: "C01", slug: "classifying-matter", title: "Elements, compounds and mixtures", group: "Matter", tier: "core",
    oneLiner: t`Matter is pure (elements, compounds with fixed composition) or a mixture, homogeneous (uniform) or heterogeneous`,
    prereqs: [], ext: [], sources: [S("Nature of Matter and Its Classification")],
  },
  {
    id: "C02", slug: "si-units-temperature", title: "SI units and temperature scales", group: "Matter", tier: "core",
    oneLiner: t`The seven SI base units (kg, m, s, K, A, mol, cd); $T(\mathrm{K}) = t(^\circ\mathrm{C}) + 273.15$ and $^\circ\mathrm{F} = \tfrac95\,{}^\circ\mathrm{C} + 32$`,
    prereqs: [], ext: [], sources: [S("Properties of Matter and Measurement")],
  },
  // Laws
  {
    id: "C03", slug: "laws-of-combination", title: "Laws of chemical combination", group: "Laws", tier: "core",
    oneLiner: t`Mass is conserved; a compound has fixed proportions by mass; masses of one element combining with a fixed mass of another are in simple ratios; gas volumes too`,
    prereqs: ["C01"], ext: [], sources: [S("Laws of Chemical Combination")],
  },
  {
    id: "C04", slug: "avogadro-dalton", title: "Avogadro's law and Dalton's theory", group: "Laws", tier: "core",
    oneLiner: t`Equal volumes of gases at the same temperature and pressure hold equal numbers of molecules; Dalton's atomic theory explains the laws`,
    prereqs: ["C03"], ext: [], sources: [S("Avogadro Law and Dalton's Atomic Theory")],
  },
  // The mole
  {
    id: "C05", slug: "atomic-molecular-mass", title: "Atomic, molecular and formula mass", group: "The mole", tier: "core",
    oneLiner: t`Atomic masses are in u ($\tfrac{1}{12}$ of a carbon-12 atom); average atomic mass weights isotopes by abundance; molecular and formula masses add atomic masses`,
    prereqs: ["C01"], ext: [], sources: [S("Atomic and Molecular Masses")],
  },
  {
    id: "C06", slug: "mole-concept", title: "The mole and molar mass", group: "The mole", tier: "core",
    oneLiner: t`One mole is $6.022 \times 10^{23}$ particles; moles $=$ mass ÷ molar mass, so mass, moles, molecules and atoms convert into each other`,
    prereqs: ["C05"], ext: [], sources: [S("Mole Concept and Molar Mass")],
  },
  {
    id: "C07", slug: "molar-volume", title: "Moles of gases", group: "The mole", tier: "core",
    oneLiner: t`A mole of any gas at STP occupies $22.4\ \mathrm{dm^3}$, so gas volume, moles and mass convert into each other`,
    prereqs: ["C04", "C06"], ext: [], sources: [S("Moles and Gases")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C08", slug: "physical-chemical-changes", title: "Physical and chemical changes", group: "Matter", tier: "core",
    oneLiner: t`A physical change alters form or state and makes no new substance (melting, dissolving); a chemical change makes new substances (burning, rusting)`,
    prereqs: ["C01"], ext: [],
    sources: ["nda/matter-and-its-states#Physical vs Chemical Changes"],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C09", slug: "types-of-reactions", title: "Types of chemical reactions", group: "Matter", tier: "core",
    oneLiner: t`Combination, decomposition (by heat, light or electricity), displacement by a more reactive element, and double displacement; each exothermic or endothermic`,
    prereqs: ["C08"], ext: [],
    sources: ["nda/chemical-reactions#Types of Reactions: Combination, Decomposition, Displacement"],
  },
];
