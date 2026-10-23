import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Thermodynamics prerequisite graph (Balbharati Physics Std XII, Ch.4): heat, work and internal energy,
 * the first law and its processes, and heat engines, the second law and refrigerators.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/thermodynamics-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Heat and work
  {
    id: "C01", slug: "system-equilibrium", title: "Systems and thermal equilibrium", group: "Heat and work", tier: "core",
    oneLiner: t`A system exchanges energy with its surroundings; two systems each in equilibrium with a third are in equilibrium with each other`,
    prereqs: [], ext: [], sources: [S("Heat, Internal Energy and Work"), S("Thermodynamic State Variables and the p-V Diagram")],
  },
  {
    id: "C02", slug: "internal-energy", title: "Internal energy, heat and work", group: "Heat and work", tier: "core",
    oneLiner: t`A system's internal energy changes when heat flows in or out, or when work is done`,
    prereqs: ["C01"], ext: ["degrees of freedom (Kinetic Theory, Ch.3)"], sources: [S("Heat, Internal Energy and Work")],
  },
  {
    id: "C03", slug: "work-pv", title: "Work done by a gas", group: "Heat and work", tier: "core", visual: true,
    oneLiner: t`A gas expanding at pressure $P$ does work $W = P\,\Delta V$, the area under its $p$-$V$ curve`,
    prereqs: ["C02"], ext: [], sources: [S("Heat, Internal Energy and Work"), S("Thermodynamic State Variables and the p-V Diagram")],
  },
  // First law and processes
  {
    id: "C04", slug: "first-law", title: "First law of thermodynamics", group: "First law and processes", tier: "core",
    oneLiner: t`Heat supplied goes into internal energy and work: $Q = \Delta U + W$`,
    prereqs: ["C03"], ext: [], sources: [S("First Law of Thermodynamics")],
  },
  {
    id: "C05", slug: "isobaric-isochoric", title: "Isobaric and isochoric processes", group: "First law and processes", tier: "core",
    oneLiner: t`At constant pressure $W = P\,\Delta V$; at constant volume $W = 0$ and all the heat goes into internal energy`,
    prereqs: ["C04"], ext: [], sources: [S("Thermodynamic Processes")],
  },
  {
    id: "C06", slug: "isothermal", title: "Isothermal process", group: "First law and processes", tier: "core", visual: true,
    oneLiner: t`At constant temperature $\Delta U = 0$, so $Q = W = nRT\ln\dfrac{V_2}{V_1}$`,
    prereqs: ["C04"], ext: ["logarithms"], sources: [S("Thermodynamic Processes")],
  },
  {
    id: "C07", slug: "adiabatic", title: "Adiabatic process", group: "First law and processes", tier: "core", visual: true,
    oneLiner: t`With no heat exchanged, $PV^\gamma$ stays constant and $W = \dfrac{P_1V_1 - P_2V_2}{\gamma - 1}$`,
    prereqs: ["C06"], ext: ["specific heats (Kinetic Theory, Ch.3)"], sources: [S("Thermodynamic Processes")],
  },
  {
    id: "C08", slug: "cyclic-process", title: "Cyclic process", group: "First law and processes", tier: "core", visual: true,
    oneLiner: t`A system back at its start has $\Delta U = 0$, so $Q = W$, the area enclosed by the cycle`,
    prereqs: ["C04"], ext: [], sources: [S("Thermodynamic Processes"), S("Thermodynamic State Variables and the p-V Diagram")],
  },
  {
    id: "C09", slug: "process-diagrams", title: "p-V, V-T and p-T diagrams", group: "First law and processes", tier: "adv", visual: true,
    oneLiner: t`The same cycle drawn on different axes: each process keeps one quantity fixed`,
    prereqs: ["C05", "C06"], ext: [], sources: [S("Thermodynamic State Variables and the p-V Diagram")],
  },
  // Engines and refrigerators
  {
    id: "C10", slug: "heat-engines", title: "Heat engines and the second law", group: "Engines and refrigerators", tier: "core",
    oneLiner: t`An engine turns only part of the heat it takes in into work: $\eta = \dfrac{W}{Q_H} = 1 - \dfrac{Q_C}{Q_H}$`,
    prereqs: ["C08"], ext: [], sources: [S("Heat Engines"), S("Second Law of Thermodynamics")],
  },
  {
    id: "C11", slug: "carnot-engine", title: "Carnot engine", group: "Engines and refrigerators", tier: "core", visual: true,
    oneLiner: t`The ideal engine, two isothermals and two adiabatics, has the highest efficiency: $\eta = 1 - \dfrac{T_C}{T_H}$`,
    prereqs: ["C07", "C10"], ext: [], sources: [S("Carnot Cycle and Carnot Engine")],
  },
  {
    id: "C12", slug: "refrigerators", title: "Refrigerators and heat pumps", group: "Engines and refrigerators", tier: "core",
    oneLiner: t`Work pumps heat from cold to hot; a refrigerator's coefficient of performance is $\dfrac{Q_C}{W} = \dfrac{T_C}{T_H - T_C}$`,
    prereqs: ["C11"], ext: [], sources: [S("Refrigerators and Heat Pumps")],
  },
];
