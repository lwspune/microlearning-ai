import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Chemical Thermodynamics prerequisite graph (Balbharati Chemistry Std XII, Ch.4): terms, pressure-volume work, the first law, enthalpy, thermochemistry and Hess's law, entropy and Gibbs energy.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/thermodynamics-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "thermodynamic-terms", title: "System, state and properties", group: "Basics", tier: "core",
    oneLiner: t`Open, closed and isolated systems; state functions depend only on the state; intensive properties do not depend on amount, extensive ones do`,
    prereqs: [], ext: [], sources: [S("Terms Used in Thermodynamics")],
  },
  // Work and energy
  {
    id: "C02", slug: "pv-work", title: "Pressure-volume work", group: "Work and energy", tier: "core",
    oneLiner: t`Expansion against a constant external pressure does work $W = -P_{ext}\Delta V$; work done on the system is positive; free expansion does none`,
    prereqs: ["C01"], ext: [], sources: [S("Pressure-Volume Work and Maximum Work")],
  },
  {
    id: "C03", slug: "maximum-work", title: "Reversible maximum work", group: "Work and energy", tier: "core",
    oneLiner: t`A reversible isothermal expansion does the maximum work: $W_{max} = -2.303\,nRT\log_{10}\dfrac{V_2}{V_1}$`,
    prereqs: ["C02"], ext: ["logarithms"], sources: [S("Pressure-Volume Work and Maximum Work")],
  },
  {
    id: "C04", slug: "first-law", title: "The first law of thermodynamics", group: "Work and energy", tier: "core",
    oneLiner: t`$\Delta U = Q + W$: energy is conserved; $\Delta U = 0$ in an isothermal ideal-gas change, $Q = 0$ in an adiabatic one`,
    prereqs: ["C02"], ext: [], sources: [S("First Law of Thermodynamics")],
  },
  // Enthalpy
  {
    id: "C05", slug: "enthalpy", title: "Enthalpy, ΔH and ΔU", group: "Enthalpy", tier: "core",
    oneLiner: t`$H = U + PV$; at constant pressure $\Delta H = Q_p$; for gas reactions $\Delta H = \Delta U + \Delta n_g RT$ and the work is $-\Delta n_g RT$`,
    prereqs: ["C04"], ext: [], sources: [S("Enthalpy and Enthalpies of Physical Transformations")],
  },
  {
    id: "C06", slug: "phase-change-enthalpies", title: "Enthalpies of physical changes", group: "Enthalpy", tier: "core",
    oneLiner: t`Enthalpies of fusion, vaporization, sublimation and atomization; the heat for a phase change is $n\,\Delta H$`,
    prereqs: ["C05"], ext: [], sources: [S("Enthalpy and Enthalpies of Physical Transformations")],
  },
  // Thermochemistry
  {
    id: "C07", slug: "enthalpy-of-formation", title: "Standard enthalpies of reaction", group: "Thermochemistry", tier: "core",
    oneLiner: t`$\Delta_r H^0 = \sum \Delta_f H^0(\text{products}) - \sum \Delta_f H^0(\text{reactants})$; an element in its standard state has $\Delta_f H^0 = 0$; enthalpy of combustion`,
    prereqs: ["C05"], ext: [], sources: [S("Thermochemistry")],
  },
  {
    id: "C08", slug: "hess-law", title: "Hess's law", group: "Thermochemistry", tier: "core",
    oneLiner: t`Thermochemical equations add like algebra: reversing flips the sign of $\Delta H$, scaling scales it, so an unknown $\Delta H$ comes from known ones`,
    prereqs: ["C07"], ext: [], sources: [S("Thermochemistry")],
  },
  {
    id: "C09", slug: "bond-enthalpies", title: "Reaction enthalpy from bond enthalpies", group: "Thermochemistry", tier: "core",
    oneLiner: t`$\Delta_r H^0 = \sum$ (bonds broken) $- \sum$ (bonds formed), in bond enthalpies`,
    prereqs: ["C05"], ext: [], sources: [S("Thermochemistry")],
  },
  // Spontaneity
  {
    id: "C10", slug: "entropy", title: "Entropy and the second law", group: "Spontaneity", tier: "core",
    oneLiner: t`Entropy measures disorder; a spontaneous change raises $\Delta S_{total}$; $\Delta S_{surr} = -\dfrac{\Delta H}{T}$`,
    prereqs: ["C05"], ext: [], sources: [S("Spontaneity and Entropy")],
  },
  {
    id: "C11", slug: "gibbs-energy", title: "Gibbs energy and spontaneity", group: "Spontaneity", tier: "core",
    oneLiner: t`$\Delta G = \Delta H - T\Delta S$; a reaction is spontaneous when $\Delta G < 0$; the signs of $\Delta H$ and $\Delta S$ decide at which temperatures`,
    prereqs: ["C10"], ext: [], sources: [S("Spontaneity and Entropy")],
  },
  {
    id: "C12", slug: "gibbs-and-equilibrium", title: "Gibbs energy and equilibrium constant", group: "Spontaneity", tier: "core",
    oneLiner: t`$\Delta G^0 = -2.303\,RT\log_{10} K$: a negative $\Delta G^0$ means $K > 1$`,
    prereqs: ["C11"], ext: ["equilibrium constant (Std XI Chemistry)"], sources: [S("Spontaneity and Entropy")],
  },
];
