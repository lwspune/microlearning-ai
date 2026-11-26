import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Modern Periodic Table prerequisite graph (Balbharati Chemistry Std XI, Ch.7): the long form table, position from configuration, blocks, atomic and ionic radii, ionisation enthalpy, electron gain enthalpy and electronegativity, and metallic character.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/periodic-table-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // The table
  {
    id: "C01", slug: "modern-periodic-table", title: "The modern periodic table", group: "The table", tier: "core",
    oneLiner: t`Elements in order of atomic number: 7 periods and 18 groups in s, p, d and f blocks; the period number is the valence shell, and lanthanoids and actinoids sit below`,
    prereqs: [], ext: ["electronic configuration (Structure of Atom)"], sources: [S("Structure of the Modern Periodic Table"), S("Periodic Table and Electronic Configuration")],
  },
  {
    id: "C02", slug: "position-from-configuration", title: "Group and period from configuration", group: "The table", tier: "core",
    oneLiner: t`The last subshell filled gives the block; $ns^2np^5$ is group 17; s-block group $=$ valence electrons, p-block group $= 10 +$ valence electrons`,
    prereqs: ["C01"], ext: [], sources: [S("Periodic Table and Electronic Configuration")],
  },
  {
    id: "C03", slug: "block-characteristics", title: "Characteristics of the blocks", group: "The table", tier: "core",
    oneLiner: t`s-block: reactive metals; p-block: metals, metalloids and nonmetals; d-block: coloured ions and variable oxidation states (Cu²⁺ coloured, Zn²⁺ not); f-block`,
    prereqs: ["C02"], ext: [], sources: [S("Blockwise Characteristics of Elements")],
  },
  // Trends
  {
    id: "C04", slug: "atomic-ionic-radii", title: "Atomic and ionic radii", group: "Trends", tier: "core",
    oneLiner: t`Radii shrink across a period (rising effective nuclear charge) and grow down a group; cations are smaller and anions larger than their atoms; isoelectronic ions shrink as $Z$ rises`,
    prereqs: ["C02"], ext: [], sources: [S("Periodic Trends in Elemental Properties")],
  },
  {
    id: "C05", slug: "ionisation-enthalpy", title: "Ionisation enthalpy", group: "Trends", tier: "core",
    oneLiner: t`Ionisation enthalpy rises across a period and falls down a group; the second is always larger; half-filled and full subshells cause dips (Be > B, N > O)`,
    prereqs: ["C04"], ext: [], sources: [S("Periodic Trends in Elemental Properties")],
  },
  {
    id: "C06", slug: "electron-gain-electronegativity", title: "Electron gain enthalpy and electronegativity", group: "Trends", tier: "core",
    oneLiner: t`Electron gain enthalpy is measurable, electronegativity is not; both grow across a period and fall down a group, with Cl more negative than F in electron gain`,
    prereqs: ["C04"], ext: [], sources: [S("Periodic Trends in Elemental Properties")],
  },
  {
    id: "C07", slug: "metallic-character-oxides", title: "Metallic character and oxides", group: "Trends", tier: "core",
    oneLiner: t`Metallic character falls across a period and rises down a group; oxides go from basic ($\ce{Na2O}$) through amphoteric ($\ce{Al2O3}$) to acidic ($\ce{CO2}$)`,
    prereqs: ["C05"], ext: [], sources: [S("Periodic Trends in Elemental Properties")],
  },
];
