import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Solutions prerequisite graph (Balbharati Chemistry Std XII, Ch.2): solubility and Henry's law, Raoult's law, the four colligative properties, and electrolytes' van't Hoff factor.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/solutions-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Solubility
  {
    id: "C01", slug: "solubility", title: "Solubility of solids and gases", group: "Solubility", tier: "core",
    oneLiner: t`Solubility is the most solute a solvent holds at a temperature; heat raises it for endothermic dissolving and lowers it for gases`,
    prereqs: [], ext: [], sources: [S("Solubility and Capacity to Dissolve Solute")],
  },
  {
    id: "C02", slug: "henrys-law", title: "Henry's law", group: "Solubility", tier: "core",
    oneLiner: t`A gas's solubility is proportional to its partial pressure: $S = K_H P$`,
    prereqs: ["C01"], ext: [], sources: [S("Solubility and Capacity to Dissolve Solute")],
  },
  // Vapour pressure
  {
    id: "C03", slug: "raoults-law-liquids", title: "Raoult's law for two liquids", group: "Vapour pressure", tier: "core", visual: true,
    oneLiner: t`Each volatile component contributes $P_1 = x_1 P_1^0$, so $P = x_1 P_1^0 + x_2 P_2^0$; ideal solutions obey it, nonideal ones deviate`,
    prereqs: [], ext: ["mole fraction and molality (Std XI Chemistry)"], sources: [S("Vapour Pressure of Solutions of Liquids in Liquids")],
  },
  {
    id: "C04", slug: "vapour-pressure-lowering", title: "Lowering of vapour pressure", group: "Vapour pressure", tier: "core",
    oneLiner: t`A nonvolatile solute lowers the vapour pressure: $\dfrac{\Delta P}{P_1^0} = x_2$; colligative properties depend only on the number of solute particles`,
    prereqs: ["C03"], ext: [], sources: [S("Vapour Pressure Lowering"), S("Colligative Properties of Nonelectrolyte Solutions")],
  },
  // Colligative properties
  {
    id: "C05", slug: "boiling-point-elevation", title: "Elevation of boiling point", group: "Colligative properties", tier: "core", visual: true,
    oneLiner: t`$\Delta T_b = K_b m$: a solute raises the boiling point in proportion to its molality; molar mass from $\Delta T_b$`,
    prereqs: ["C04"], ext: [], sources: [S("Boiling Point Elevation")],
  },
  {
    id: "C06", slug: "freezing-point-depression", title: "Depression of freezing point", group: "Colligative properties", tier: "core",
    oneLiner: t`$\Delta T_f = K_f m$: a solute lowers the freezing point in proportion to its molality; molar mass from $\Delta T_f$`,
    prereqs: ["C04"], ext: [], sources: [S("Depression in Freezing Point")],
  },
  {
    id: "C07", slug: "osmotic-pressure", title: "Osmosis and osmotic pressure", group: "Colligative properties", tier: "core",
    oneLiner: t`Osmotic pressure $\pi = MRT$; isotonic solutions have equal $\pi$; reverse osmosis; molar mass from $\pi$`,
    prereqs: ["C04"], ext: [], sources: [S("Osmotic Pressure")],
  },
  // Electrolytes
  {
    id: "C08", slug: "vant-hoff-factor", title: "The van't Hoff factor", group: "Electrolytes", tier: "core",
    oneLiner: t`Electrolytes give more particles: $i$ = observed ÷ calculated colligative property, so $\Delta T_f = iK_f m$ and $\pi = iMRT$`,
    prereqs: ["C05", "C06", "C07"], ext: [], sources: [S("Colligative Properties of Electrolytes")],
  },
  {
    id: "C09", slug: "degree-of-dissociation", title: "Degree of dissociation from i", group: "Electrolytes", tier: "core",
    oneLiner: t`For a solute giving $n$ ions, $\alpha = \dfrac{i - 1}{n - 1}$; association makes $i < 1$`,
    prereqs: ["C08"], ext: [], sources: [S("Colligative Properties of Electrolytes")],
  },
];
