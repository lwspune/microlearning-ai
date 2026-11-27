import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Two touching cells both hold water. Which way will water flow between them?`,
    reveal: t`Towards the cell that 'wants' water more: the one with the larger diffusion pressure deficit (DPD).`,
  },
  explanation: {
    intuition: [
      t`Solutes in the cell sap pull water in: **osmotic pressure (O.P.)**.`,
      t`Water entering presses on the wall: **turgor pressure (T.P.)**; the wall presses back with **wall pressure**.`,
      t`Their difference is the cell's net pull on water: the **DPD**.`,
    ],
    formal: [
      {
        title: "DPD",
        points: [
          t`$\text{DPD} = \text{O.P.} - \text{T.P.}$`,
          t`In a **fully turgid** cell T.P. = O.P., so DPD = 0.`,
          t`In a flaccid cell T.P. = 0, so DPD = O.P., its maximum.`,
        ],
      },
      {
        title: "Water potential",
        points: [
          t`**Water potential** ($\psi_w$) is DPD with its sign reversed; pure water at atmospheric pressure has $\psi_w = 0$.`,
          t`Water moves from **higher** $\psi_w$ to **lower** $\psi_w$: from lower DPD to **higher DPD**.`,
          t`Extra pressure on water **raises** its water potential.`,
        ],
      },
    ],
    worked: {
      prompt: t`Cell A has O.P. 10 atm, T.P. 4 atm; cell B has O.P. 8 atm, T.P. 5 atm. Which way does water move?`,
      steps: [
        t`DPD of A $= 10 - 4 = 6$ atm; DPD of B $= 8 - 5 = 3$ atm.`,
        t`Water moves to the higher DPD.`,
      ],
      answer: t`From B to A`,
    },
    visualSpec: t`Two cells side by side, an arrow from the low-DPD cell to the high-DPD cell.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks turgor pressure.",
      remediation: "Water follows DPD, not T.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks wall pressure.",
      remediation: "Wall pressure only balances T.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks incipient plasmolysis.",
      remediation: "That is a stage, not a gradient.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Adds the pressures.",
      remediation: "T.P. is subtracted from O.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Subtracts the wrong way.",
      remediation: "DPD = O.P. − T.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Gives O.P. alone.",
      remediation: "T.P. must be subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says DPD equals O.P.",
      remediation: "That is a flaccid cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says DPD is maximum.",
      remediation: "Maximum DPD is in a flaccid cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says DPD is negative.",
      remediation: "T.P. cannot exceed O.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks lower DPD.",
      remediation: "Water moves to higher DPD.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks higher T.P.",
      remediation: "High T.P. lowers the pull.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks higher water potential.",
      remediation: "Water moves to lower water potential.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says it decreases.",
      remediation: "Pressure raises water potential.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says no change.",
      remediation: "Pressure raises water potential.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says it becomes zero.",
      remediation: "Pure water is already zero.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(3)" },
      stem: t`Water moves from cell to cell because of differences in`,
      verify: { kind: "value", inputs: {  }, params: { q: "moves" } },
      options: [
        { key: "A", text: t`wall pressure`, correct: false, misconceptionId: "C03-M2", value: "wall_pressure" },
        { key: "B", text: t`incipient plasmolysis`, correct: false, misconceptionId: "C03-M3", value: "incipient_plasmolysis" },
        { key: "C", text: t`DPD`, correct: true, value: "dpd" },
        { key: "D", text: t`turgor pressure`, correct: false, misconceptionId: "C03-M1", value: "turgor_pressure" },
      ],
      solution: {
        steps: [
          t`Water follows the deficit.`,
          t`DPD.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`A cell has an osmotic pressure of 12 atm and a turgor pressure of 8 atm. What is its DPD (in atm)?`,
      verify: { kind: "value", inputs: { o: "12", t: "8" }, params: { q: "dpd" } },
      options: [
        { key: "A", text: t`$-4$`, correct: false, misconceptionId: "C03-M5", value: "-4" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C03-M6", value: "12" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$20$`, correct: false, misconceptionId: "C03-M4", value: "20" },
      ],
      solution: {
        steps: [
          t`$\text{DPD} = 12 - 8$.`,
          t`$4$ atm.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2026 Q. 2(iii)" },
      stem: t`In a fully turgid cell, turgor pressure equals wall pressure. Its DPD is then`,
      verify: { kind: "value", inputs: {  }, params: { q: "turgid" } },
      options: [
        { key: "A", text: t`equal to its osmotic pressure`, correct: false, misconceptionId: "C03-M7", value: "equals_op" },
        { key: "B", text: t`at its maximum`, correct: false, misconceptionId: "C03-M8", value: "at_maximum" },
        { key: "C", text: t`negative`, correct: false, misconceptionId: "C03-M9", value: "negative" },
        { key: "D", text: t`zero`, correct: true, value: "zero_dpd" },
      ],
      solution: {
        steps: [
          t`T.P. equals O.P.`,
          t`DPD is zero.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q3(8)" },
      stem: t`Between two adjacent cells, water moves into the cell with the`,
      verify: { kind: "value", inputs: {  }, params: { q: "direction" } },
      options: [
        { key: "A", text: t`higher turgor pressure`, correct: false, misconceptionId: "C03-M11", value: "higher_tp" },
        { key: "B", text: t`higher water potential`, correct: false, misconceptionId: "C03-M12", value: "higher_potential" },
        { key: "C", text: t`higher DPD`, correct: true, value: "higher_dpd" },
        { key: "D", text: t`lower DPD`, correct: false, misconceptionId: "C03-M10", value: "lower_dpd" },
      ],
      solution: {
        steps: [
          t`Higher DPD means stronger pull.`,
          t`The cell with higher DPD.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(3)" },
      stem: t`Applying pressure greater than atmospheric to pure water makes its water potential`,
      verify: { kind: "value", inputs: {  }, params: { q: "pressure" } },
      options: [
        { key: "A", text: t`increase`, correct: true, value: "increases" },
        { key: "B", text: t`decrease`, correct: false, misconceptionId: "C03-M13", value: "decreases" },
        { key: "C", text: t`stay the same`, correct: false, misconceptionId: "C03-M14", value: "unchanged" },
        { key: "D", text: t`become zero`, correct: false, misconceptionId: "C03-M15", value: "becomes_zero" },
      ],
      solution: {
        steps: [
          t`Pressure adds to water potential.`,
          t`It increases.`,
        ],
      },
    },
  ],
};
