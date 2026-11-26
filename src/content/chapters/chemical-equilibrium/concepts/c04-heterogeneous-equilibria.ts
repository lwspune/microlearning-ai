import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Heat limestone in a closed furnace and the $\ce{CO2}$ pressure settles at one value, whether there is 1 kg or 10 kg of limestone. Why doesn't the amount of solid matter?`,
    reveal: t`A pure solid's concentration is fixed, so it drops out of K: $K_p = p_{\ce{CO2}}$ alone.`,
  },
  explanation: {
    intuition: [
      t`In a **homogeneous** equilibrium all species are in one phase.`,
      t`In a **heterogeneous** one they are in different phases.`,
      t`Pure solids and liquids have constant concentrations.`,
      t`So they are left out of K.`,
    ],
    formal: [
      {
        title: "Writing K",
        points: [
          t`$\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$: $K_p = p_{\ce{CO2}}$.`,
          t`$\ce{2NaHCO3(s)}$ $\ce{<=> Na2CO3(s) + CO2(g) + H2O(g)}$: $K_c = [\ce{CO2}][\ce{H2O}]$.`,
          t`Its unit is $\mathrm{mol^2\,dm^{-6}}$.`,
        ],
      },
      {
        title: "Shifting",
        points: [
          t`Adding an ion common to a solid's equilibrium shifts it back to the solid.`,
          t`$\ce{AgCl(s) <=> Ag+ + Cl-}$: adding $\ce{Cl-}$ precipitates more AgCl.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $K_c$ for $\ce{C(s) + H2O(g) <=> CO(g) + H2(g)}$.`,
      steps: [
        t`Leave out solid carbon.`,
        t`Products over the remaining reactant.`,
      ],
      answer: t`$K_c = \dfrac{[\ce{CO}][\ce{H2}]}{[\ce{H2O}]}$`,
    },
    visualSpec: t`Add more solid to a heterogeneous equilibrium and see the gas pressure stay put.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Includes the solids.",
      remediation: "Pure solids are left out of K.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Inverts the expression.",
      remediation: t`$\ce{CO2}$ is a product: it goes on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Writes concentrations of solids.",
      remediation: "Solids have constant concentrations and are left out.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks K never has a unit.",
      remediation: t`$K_c$'s unit depends on the powers: here $\mathrm{mol^2\,dm^{-6}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Counts one gas.",
      remediation: "Two gaseous products: two concentrations multiply.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Inverts the unit.",
      remediation: t`Products on top: $\mathrm{mol^2\,dm^{-6}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks gas with solids is homogeneous.",
      remediation: "Two solids and a gas are three phases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks a solid with its ions is homogeneous.",
      remediation: "Solid and solution are different phases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks one substance means homogeneous.",
      remediation: "Liquid and vapour are two phases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks solids do not react.",
      remediation: "Solids react; their concentration simply does not change.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks they are too heavy.",
      remediation: "Mass doesn't matter; constant concentration does.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Gives solids zero concentration.",
      remediation: "Their concentration is constant, not zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Shifts it right.",
      remediation: "Adding a product ion shifts the equilibrium back.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks equilibria with solids don't shift.",
      remediation: "The ions' concentrations still respond to changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks K changes.",
      remediation: "Only temperature changes K; the position shifts.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "authored" },
      stem: t`For $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$, the equilibrium constant is`,
      verify: { kind: "value", inputs: {  }, params: { q: "caco3" } },
      options: [
        { key: "A", text: t`$K_p = \dfrac{1}{p_{\ce{CO2}}}$`, correct: false, misconceptionId: "C04-M2", value: "inverse_co2" },
        { key: "B", text: t`$K_p = p_{\ce{CO2}}$`, correct: true, value: "p_co2" },
        { key: "C", text: t`$K_c = \dfrac{[\ce{CaO}][\ce{CO2}]}{[\ce{CaCO3}]}$`, correct: false, misconceptionId: "C04-M3", value: "conc_solids" },
        { key: "D", text: t`$K_p = \dfrac{p_{\ce{CaO}}\,p_{\ce{CO2}}}{p_{\ce{CaCO3}}}$`, correct: false, misconceptionId: "C04-M1", value: "with_solids" },
      ],
      solution: {
        steps: [
          t`Leave out solid $\ce{CaCO3}$ and CaO.`,
          t`$K_p = p_{\ce{CO2}}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Solved Ex.12.4" },
      stem: t`For $\ce{2NaHCO3(s)}$ $\ce{<=> Na2CO3(s) + CO2(g) + H2O(g)}$, the unit of $K_c$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "unit" } },
      options: [
        { key: "A", text: t`none: $K$ has no unit`, correct: false, misconceptionId: "C04-M4", value: "no_unit" },
        { key: "B", text: t`$\mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C04-M5", value: "mol_dm_minus3" },
        { key: "C", text: t`$\mathrm{mol^2\,dm^{-6}}$`, correct: true, value: "mol2_dm_minus6" },
        { key: "D", text: t`$\mathrm{mol^{-2}\,dm^{6}}$`, correct: false, misconceptionId: "C04-M6", value: "mol_minus2_dm6" },
      ],
      solution: {
        steps: [
          t`$K_c = [\ce{CO2}][\ce{H2O}]$.`,
          t`$(\mathrm{mol\,dm^{-3}})^2 = \mathrm{mol^2\,dm^{-6}}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`Which is a homogeneous equilibrium?`,
      verify: { kind: "value", inputs: {  }, params: { q: "homogeneous" } },
      options: [
        { key: "A", text: t`$\ce{BaSO4(s) <=> Ba^{2+}(aq) + SO4^{2-}(aq)}$`, correct: false, misconceptionId: "C04-M8", value: "baso4_system" },
        { key: "B", text: t`$\ce{H2O(l) <=> H2O(g)}$`, correct: false, misconceptionId: "C04-M9", value: "water_vapour" },
        { key: "C", text: t`$\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$`, correct: false, misconceptionId: "C04-M7", value: "caco3_system" },
        { key: "D", text: t`$\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$`, correct: true, value: "ammonia_gases" },
      ],
      solution: {
        steps: [
          t`All three species are gases.`,
          t`One phase: homogeneous.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Solved Ex.12.4" },
      stem: t`Pure solids and liquids are left out of the equilibrium constant because`,
      verify: { kind: "value", inputs: {  }, params: { q: "omit_solids" } },
      options: [
        { key: "A", text: t`their concentration is constant`, correct: true, value: "constant_concentration" },
        { key: "B", text: t`they are too heavy`, correct: false, misconceptionId: "C04-M11", value: "too_heavy" },
        { key: "C", text: t`their concentration is zero`, correct: false, misconceptionId: "C04-M12", value: "zero_concentration" },
        { key: "D", text: t`they do not react`, correct: false, misconceptionId: "C04-M10", value: "do_not_react" },
      ],
      solution: {
        steps: [
          t`A pure solid's concentration is set by its density.`,
          t`It is constant, so it is absorbed into K.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.3 (E)" },
      stem: t`Chloride ions are added to $\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)}$. The equilibrium`,
      verify: { kind: "value", inputs: {  }, params: { q: "agcl" } },
      options: [
        { key: "A", text: t`stays put, but $K$ changes`, correct: false, misconceptionId: "C04-M15", value: "k_changes" },
        { key: "B", text: t`shifts left: more AgCl precipitates`, correct: true, value: "shifts_left" },
        { key: "C", text: t`shifts right: more AgCl dissolves`, correct: false, misconceptionId: "C04-M13", value: "shifts_right" },
        { key: "D", text: t`does not shift, as a solid is present`, correct: false, misconceptionId: "C04-M14", value: "no_shift" },
      ],
      solution: {
        steps: [
          t`Adding $\ce{Cl-}$ raises a product.`,
          t`Equilibrium shifts left: AgCl precipitates.`,
        ],
      },
    },
  ],
};
