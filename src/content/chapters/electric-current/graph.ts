import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Electric Current Through Conductors prerequisite graph (Balbharati Physics Std XI, Ch.11): current and drift speed, Ohm's law, resistivity and its change with temperature, resistor combinations, electrical power, emf and cells.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/electric-current-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Current
  {
    id: "C01", slug: "drift-speed", title: "Electric current and drift speed", group: "Current", tier: "core",
    oneLiner: t`Current is the rate of flow of charge, $I = \dfrac{q}{t}$; in a wire $I = nAev_d$, with a drift speed of only about $\mathrm{mm/s}$`,
    prereqs: [], ext: [], sources: [S("Electric Current and Drift Speed")],
  },
  {
    id: "C02", slug: "ohms-law", title: "Ohm's law", group: "Current", tier: "core", visual: true,
    oneLiner: t`$V = IR$ for ohmic conductors, a straight $V$-$I$ line; diodes and lamps are non-ohmic`,
    prereqs: ["C01"], ext: [], sources: [S("Ohm's Law and its Limitations")],
  },
  // Resistance
  {
    id: "C03", slug: "resistivity", title: "Resistivity and temperature", group: "Resistance", tier: "core",
    oneLiner: t`$R = \rho\dfrac{L}{A}$; a metal's resistance rises with temperature as $R_T = R_0(1 + \alpha T)$`,
    prereqs: ["C02"], ext: [], sources: [S("Resistivity and Variation with Temperature")],
  },
  {
    id: "C04", slug: "resistor-combinations", title: "Combining resistors", group: "Resistance", tier: "core", visual: true,
    oneLiner: t`In series $R = R_1 + R_2 + \dots$; in parallel $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \dots$; colour bands give a resistor's value`,
    prereqs: ["C02"], ext: [], sources: [S("Resistors and Combination of Resistors")],
  },
  // Energy
  {
    id: "C05", slug: "electric-power", title: "Electrical energy and power", group: "Energy", tier: "core",
    oneLiner: t`$P = VI = I^2R = \dfrac{V^2}{R}$; energy $= Pt$, billed in $\mathrm{kWh}$`,
    prereqs: ["C02"], ext: [], sources: [S("Electrical Energy and Power")],
  },
  {
    id: "C06", slug: "emf-cells", title: "EMF and combinations of cells", group: "Energy", tier: "core", visual: true,
    oneLiner: t`A cell of emf $E$ and internal resistance $r$ gives $I = \dfrac{E}{R + r}$; cells in series add emfs, identical cells in parallel share the current`,
    prereqs: ["C04"], ext: [], sources: [S("Electromotive Force"), S("Cells in Series and Parallel")],
  },
  {
    id: "C07", slug: "electricity-at-home", title: "Electricity at home", group: "Energy", tier: "core", visual: true,
    oneLiner: t`Appliances run in parallel on the mains; energy is billed in kWh; a fuse melts and the earth wire carries current away when a fault draws too much`,
    prereqs: ["C05"], ext: [],
    sources: ["nda/electricity-and-magnetism#Electrical Devices"],
  },
];
