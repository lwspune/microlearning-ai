import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * States of Matter prerequisite graph (Balbharati Chemistry Std XI, Ch.10): properties of gases and units, intermolecular forces, the gas laws, the ideal gas equation, partial pressures, kinetic theory and real gases, and the liquid state.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/states-of-matter-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Gases
  {
    id: "C01", slug: "gas-properties-units", title: "Gases, pressure and temperature", group: "Gases", tier: "core",
    oneLiner: t`Gases fill their container, compress and diffuse; pressure in Pa, bar, atm ($1\ \mathrm{atm} = 1.013 \times 10^5\ \mathrm{Pa}$) and mm Hg; gas laws use kelvin`,
    prereqs: [], ext: [], sources: [S("Characteristic Properties of Gases")],
  },
  // Forces
  {
    id: "C02", slug: "intermolecular-forces", title: "Intermolecular forces", group: "Forces", tier: "core",
    oneLiner: t`Dispersion (London) forces act between all molecules and grow with polarizability; polar molecules add dipole–dipole forces; N–H, O–H and F–H give hydrogen bonds`,
    prereqs: [], ext: ["bond polarity (Chemical Bonding)"], sources: [S("Intermolecular Forces")],
  },
  // Gas laws
  {
    id: "C03", slug: "gas-laws", title: "Boyle's and Charles' laws", group: "Gas laws", tier: "core", visual: true,
    oneLiner: t`At fixed $T$, $PV$ is constant (Boyle); at fixed $P$, $V/T$ is constant (Charles); at fixed $V$, $P/T$ is constant (Gay-Lussac)`,
    prereqs: ["C01"], ext: [], sources: [S("Gas Laws")],
  },
  {
    id: "C04", slug: "ideal-gas-equation", title: "The ideal gas equation", group: "Gas laws", tier: "core",
    oneLiner: t`$PV = nRT$, so $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$ for a fixed amount, and molar mass $M = \dfrac{dRT}{P}$`,
    prereqs: ["C03"], ext: [], sources: [S("Ideal Gas Equation")],
  },
  {
    id: "C05", slug: "partial-pressures", title: "Dalton's law of partial pressures", group: "Gas laws", tier: "core",
    oneLiner: t`In a mixture each gas exerts its own pressure, $p_i = x_i P$, and the total is their sum`,
    prereqs: ["C04"], ext: [], sources: [S("Ideal Gas Equation")],
  },
  {
    id: "C06", slug: "kinetic-theory-real-gases", title: "Kinetic theory and real gases", group: "Gas laws", tier: "core",
    oneLiner: t`Kinetic theory assumes point molecules with no attractions; real gases deviate at high pressure and low temperature and liquefy only below their critical temperature`,
    prereqs: ["C04"], ext: [], sources: [S("Kinetic Molecular Theory of Gases"), S("Liquefaction of Gases and Critical Constants")],
  },
  // Liquids
  {
    id: "C07", slug: "liquid-state", title: "Vapour pressure, surface tension and viscosity", group: "Liquids", tier: "core",
    oneLiner: t`A liquid boils when its vapour pressure equals the outside pressure, so lower pressure means a lower boiling point; surface tension and viscosity rise with intermolecular forces`,
    prereqs: ["C02"], ext: [], sources: [S("Liquid State")],
  },
];
