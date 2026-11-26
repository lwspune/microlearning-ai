import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Lower temperatures give more ammonia at equilibrium, yet Haber's plants run hot, near 700 K. Why accept a smaller yield?`,
    reveal: t`At low temperature the reaction is far too slow. 700 K with an iron catalyst gives a good yield quickly enough: a compromise.`,
  },
  explanation: {
    intuition: [
      t`$\ce{N2 + 3H2 <=> 2NH3}$ is exothermic and reduces gas moles from 4 to 2.`,
      t`Le Chatelier says: high pressure and low temperature favour ammonia.`,
      t`But low temperature makes the reaction slow.`,
      t`Industry balances yield against rate.`,
    ],
    formal: [
      {
        title: "Conditions",
        points: [
          t`Pressure: about 200 atm, favouring fewer gas moles.`,
          t`Temperature: about 700 K, a compromise between yield and rate.`,
          t`Catalyst: iron, with $\ce{K2O}$ and Mo as promoters.`,
          t`Ammonia is liquefied and removed, shifting the equilibrium right.`,
        ],
      },
      {
        title: "K and temperature",
        points: [
          t`For an exothermic reaction, raising temperature lowers K.`,
          t`Unreacted $\ce{N2}$ and $\ce{H2}$ are recycled.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does increasing pressure raise the yield of ammonia?`,
      steps: [
        t`4 gas moles on the left, 2 on the right.`,
        t`Higher pressure favours fewer moles: right.`,
      ],
      answer: t`It shifts the equilibrium toward ammonia`,
    },
    visualSpec: t`Adjust pressure and temperature on a Haber plant and compare yield with rate.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks low pressure.",
      remediation: "Low pressure favours the side with more gas moles: reactants.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks pressure does not matter.",
      remediation: "Gas moles fall from 4 to 2, so pressure matters.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Calls the reaction endothermic.",
      remediation: "It is exothermic; pressure helps because of gas moles.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks high temperature raises the yield.",
      remediation: "Heating favours the endothermic reverse reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks a very low temperature.",
      remediation: "Yield would be high but the rate far too slow.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks temperature has no effect.",
      remediation: "Temperature changes both yield and rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks removal helps the catalyst.",
      remediation: "Removing product shifts the equilibrium right.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks removal raises K.",
      remediation: "K changes only with temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks it lowers the pressure.",
      remediation: "The point is to shift the equilibrium right.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks vanadium pentoxide.",
      remediation: t`$\ce{V2O5}$ is for the contact process.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks platinum.",
      remediation: "Platinum is for Ostwald's process.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks nickel.",
      remediation: "Nickel is for hydrogenating oils.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Thinks K rises with temperature.",
      remediation: "For an exothermic reaction K falls as T rises.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Thinks K is unchanged.",
      remediation: "K depends on temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Thinks K becomes zero.",
      remediation: "K decreases but stays positive.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (K)" },
      stem: t`In the Haber process a high pressure is used because`,
      verify: { kind: "value", inputs: {  }, params: { q: "pressure" } },
      options: [
        { key: "A", text: t`pressure does not affect the yield`, correct: false, misconceptionId: "C07-M2", value: "no_matter" },
        { key: "B", text: t`the reaction is endothermic`, correct: false, misconceptionId: "C07-M3", value: "high_endothermic" },
        { key: "C", text: t`low pressure would give more ammonia`, correct: false, misconceptionId: "C07-M1", value: "low_pressure" },
        { key: "D", text: t`the product side has fewer moles of gas`, correct: true, value: "high_fewer_moles" },
      ],
      solution: {
        steps: [
          t`4 gas moles become 2.`,
          t`High pressure favours ammonia.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (K)" },
      stem: t`In the Haber process a moderate temperature of about 700 K is used because`,
      verify: { kind: "value", inputs: {  }, params: { q: "temperature" } },
      options: [
        { key: "A", text: t`low temperature favours the yield but is too slow, so a compromise is chosen`, correct: true, value: "moderate_compromise" },
        { key: "B", text: t`the lowest possible temperature gives the best result`, correct: false, misconceptionId: "C07-M5", value: "very_low" },
        { key: "C", text: t`temperature has no effect`, correct: false, misconceptionId: "C07-M6", value: "no_effect" },
        { key: "D", text: t`high temperature raises the yield`, correct: false, misconceptionId: "C07-M4", value: "high_yield" },
      ],
      solution: {
        steps: [
          t`Low temperature: high yield but slow.`,
          t`About 700 K balances the two.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (K)" },
      stem: t`Ammonia is removed as it forms in the Haber process so that`,
      verify: { kind: "value", inputs: {  }, params: { q: "remove" } },
      options: [
        { key: "A", text: t`the pressure falls`, correct: false, misconceptionId: "C07-M9", value: "lowers_pressure" },
        { key: "B", text: t`the equilibrium shifts right, forming more ammonia`, correct: true, value: "shifts_right" },
        { key: "C", text: t`the catalyst can work`, correct: false, misconceptionId: "C07-M7", value: "helps_catalyst" },
        { key: "D", text: t`$K$ increases`, correct: false, misconceptionId: "C07-M8", value: "raises_k" },
      ],
      solution: {
        steps: [
          t`Removing a product lowers its concentration.`,
          t`The equilibrium shifts right.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (K)" },
      stem: t`The catalyst used in the Haber process is`,
      verify: { kind: "value", inputs: {  }, params: { q: "catalyst" } },
      options: [
        { key: "A", text: t`platinum`, correct: false, misconceptionId: "C07-M11", value: "platinum" },
        { key: "B", text: t`vanadium pentoxide`, correct: false, misconceptionId: "C07-M10", value: "v2o5" },
        { key: "C", text: t`iron`, correct: true, value: "iron" },
        { key: "D", text: t`nickel`, correct: false, misconceptionId: "C07-M12", value: "nickel" },
      ],
      solution: {
        steps: [
          t`Haber's process uses iron.`,
          t`With $\ce{K2O}$ and Mo as promoters.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`$\ce{N2 + 3H2 <=> 2NH3}$ is exothermic. Raising the temperature makes its $K$`,
      verify: { kind: "value", inputs: {  }, params: { q: "k_temp" } },
      options: [
        { key: "A", text: t`larger`, correct: false, misconceptionId: "C07-M13", value: "k_increases" },
        { key: "B", text: t`unchanged`, correct: false, misconceptionId: "C07-M14", value: "k_unchanged" },
        { key: "C", text: t`zero`, correct: false, misconceptionId: "C07-M15", value: "k_zero" },
        { key: "D", text: t`smaller`, correct: true, value: "k_decreases" },
      ],
      solution: {
        steps: [
          t`Heating favours the endothermic reverse reaction.`,
          t`K becomes smaller.`,
        ],
      },
    },
  ],
};
