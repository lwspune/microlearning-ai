import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A bottle of hydrogen peroxide is labelled '20 volume', not '6 %'. What does a volume strength tell you?`,
    reveal: t`One litre of it releases 20 litres of oxygen at STP when it decomposes.`,
  },
  explanation: {
    intuition: [
      t`Industry makes dihydrogen from steam and hot coke.`,
      t`Hydrogen peroxide is made by electrolysing sulfuric acid.`,
      t`$\ce{H2O2}$ decomposes into water and oxygen.`,
      t`Its strength is often given as a volume of oxygen.`,
    ],
    formal: [
      {
        title: "Dihydrogen",
        points: [
          t`$\ce{C + H2O}$ $\ce{->[1270 K] CO + H2}$ (water gas).`,
          t`Water gas shift: $\ce{CO + H2O}$ $\ce{-> CO2 + H2}$.`,
        ],
      },
      {
        title: "Hydrogen peroxide",
        points: [
          t`Electrolysis of 50 % $\ce{H2SO4}$ gives $\ce{H2S2O8}$, hydrolysed to $\ce{H2O2}$.`,
          t`$\ce{2H2O2 -> 2H2O + O2}$.`,
          t`'$x$ volume': 1 L gives $x$ L of $\ce{O2}$ at STP.`,
          t`Strength (g/L) = $\tfrac{x}{22.4} \times 2 \times 34$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the strength in g/L of '11.2 volume' $\ce{H2O2}$?`,
      steps: [
        t`$\ce{O2}$: 11.2 ÷ 22.4 = 0.5 mol, so $\ce{H2O2}$ = 1 mol.`,
        t`1 × 34 = 34 g/L.`,
      ],
      answer: t`34 g/L`,
    },
    visualSpec: t`Let a litre of peroxide decompose and collect its oxygen in litre flasks.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Gives the shift-reaction products.",
      remediation: t`Steam and coke give CO and $\ce{H2}$; $\ce{CO2}$ comes in a second step.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says methane.",
      remediation: t`Coke and steam give water gas, CO + $\ce{H2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks steam splits into its elements.",
      remediation: t`Carbon takes the oxygen: CO and $\ce{H2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Says $\ce{SO2}$.`,
      remediation: t`Oxidation gives peroxodisulphuric acid, not $\ce{SO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says oxygen only.",
      remediation: t`Hydrolysis of $\ce{H2S2O8}$ gives $\ce{H2O2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Stops before hydrolysis.",
      remediation: t`Hydrolysing $\ce{H2S2O8}$ gives $\ce{H2O2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Ignores the 2 : 1 ratio.",
      remediation: t`Two $\ce{H2O2}$ give one $\ce{O2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Gives grams per litre.",
      remediation: "Divide by 10 for grams per 100 mL.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Uses the mass of $\ce{O2}$.`,
      remediation: t`Find the mass of $\ce{H2O2}$ (34 g/mol).`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Reads '10 volume' as 10 % by mass.",
      remediation: t`It means 10 L of $\ce{O2}$ per litre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Reads it as 10 mol per litre.",
      remediation: "It is a volume of oxygen released.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Scales the volumes wrongly.",
      remediation: t`1 L of solution gives 10 L of $\ce{O2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says hydrogen and oxygen.",
      remediation: t`$\ce{H2O2}$ gives water and oxygen.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says water and hydrogen.",
      remediation: "The gas released is oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says ozone.",
      remediation: t`$\ce{H2O2}$ gives ordinary oxygen, $\ce{O2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.3 (B)" },
      stem: t`Steam passed over red-hot coke at about 1270 K gives`,
      verify: { kind: "value", inputs: {  }, params: { q: "water_gas" } },
      options: [
        { key: "A", text: t`$\ce{CO2}$ and $\ce{H2}$ only`, correct: false, misconceptionId: "C02-M1", value: "co2_h2" },
        { key: "B", text: t`CO and $\ce{H2}$ (water gas)`, correct: true, value: "co_h2" },
        { key: "C", text: t`methane`, correct: false, misconceptionId: "C02-M2", value: "methane" },
        { key: "D", text: t`$\ce{O2}$ and $\ce{H2}$`, correct: false, misconceptionId: "C02-M3", value: "o2_h2" },
      ],
      solution: {
        steps: [
          t`$\ce{C + H2O -> CO + H2}$.`,
          t`Water gas.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.2 (B)" },
      stem: t`50 % sulfuric acid is electrolytically oxidised and the product hydrolysed. The final product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "electrolysis" } },
      options: [
        { key: "A", text: t`$\ce{SO2}$`, correct: false, misconceptionId: "C02-M4", value: "so2" },
        { key: "B", text: t`$\ce{O2}$ only`, correct: false, misconceptionId: "C02-M5", value: "o2_only" },
        { key: "C", text: t`$\ce{H2O2}$`, correct: true, value: "h2o2" },
        { key: "D", text: t`$\ce{H2S2O8}$, unchanged`, correct: false, misconceptionId: "C02-M6", value: "h2s2o8" },
      ],
      solution: {
        steps: [
          t`Electrolysis gives $\ce{H2S2O8}$.`,
          t`Hydrolysis gives $\ce{H2O2}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Solved Ex.8.8" },
      stem: t`What is the percentage strength (g per 100 mL) of a '45.4 volume' $\ce{H2O2}$ solution? $\ce{2H2O2 -> 2H2O + O2}$`,
      verify: { kind: "value", inputs: { v: "45.4" }, params: { q: "volume_pct" } },
      options: [
        { key: "A", text: t`$6.49\%$`, correct: false, misconceptionId: "C02-M9", value: "6.49000000000000" },
        { key: "B", text: t`$138\%$`, correct: false, misconceptionId: "C02-M8", value: "138" },
        { key: "C", text: t`$6.89\%$`, correct: false, misconceptionId: "C02-M7", value: "6.89000000000000" },
        { key: "D", text: t`$13.8\%$`, correct: true, value: "13.8000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{O2}$: 45.4 ÷ 22.4 = 2.03 mol; $\ce{H2O2}$: 4.05 mol = 138 g/L.`,
          t`13.8 g per 100 mL: 13.8 %.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`A '10 volume' hydrogen peroxide solution means that`,
      verify: { kind: "value", inputs: {  }, params: { q: "ten_volume" } },
      options: [
        { key: "A", text: t`1 L of it gives 10 L of oxygen at STP`, correct: true, value: "ten_litres_o2" },
        { key: "B", text: t`10 mL of it gives 1 L of oxygen`, correct: false, misconceptionId: "C02-M12", value: "ten_ml_one_litre" },
        { key: "C", text: t`it is 10 % $\ce{H2O2}$ by mass`, correct: false, misconceptionId: "C02-M10", value: "ten_pct" },
        { key: "D", text: t`it contains 10 mol of $\ce{H2O2}$ per litre`, correct: false, misconceptionId: "C02-M11", value: "ten_molar" },
      ],
      solution: {
        steps: [
          t`Volume strength measures oxygen released.`,
          t`1 L gives 10 L of $\ce{O2}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Hydrogen peroxide slowly decomposes into`,
      verify: { kind: "value", inputs: {  }, params: { q: "decompose" } },
      options: [
        { key: "A", text: t`ozone`, correct: false, misconceptionId: "C02-M15", value: "ozone" },
        { key: "B", text: t`water and oxygen`, correct: true, value: "water_oxygen" },
        { key: "C", text: t`hydrogen and oxygen`, correct: false, misconceptionId: "C02-M13", value: "hydrogen_oxygen" },
        { key: "D", text: t`water and hydrogen`, correct: false, misconceptionId: "C02-M14", value: "water_hydrogen" },
      ],
      solution: {
        steps: [
          t`$\ce{2H2O2 -> 2H2O + O2}$.`,
          t`Water and oxygen.`,
        ],
      },
    },
  ],
};
