import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The same KCl solution is poured into two cells. In the second cell the electrodes are twice as far apart, and its resistance doubles. Did the solution's conductivity change?`,
    reveal: t`No. $\kappa = \dfrac{l/a}{R}$: doubling $l$ doubles $R$, so $\kappa$ stays the same. Conductivity belongs to the solution; the cell constant $l/a$ belongs to the cell.`,
  },
  explanation: {
    intuition: [
      t`In a solution of an electrolyte, moving ions carry the current, so the solution has a resistance $R$.`,
      t`The **conductance** $G$ is the ease of current flow: $G = 1/R$.`,
      t`$G$ is measured in $\Omega^{-1}$, also called siemens (S).`,
      t`$R$ also depends on the cell: electrodes farther apart or smaller give a larger $R$.`,
      t`**Conductivity** $\kappa$ removes this effect: it is the conductance of a $1\ \mathrm{cm}$ cube of solution.`,
    ],
    formal: [
      {
        title: "Resistivity and conductivity",
        points: [
          t`A solution between electrodes of area $a$ and separation $l$ has $R = \rho \dfrac{l}{a}$.`,
          t`$\rho$ is the **resistivity**, in $\Omega\,\mathrm{cm}$.`,
          t`**Conductivity** is its reciprocal: $\kappa = \dfrac{1}{\rho}$.`,
          t`So $\kappa = \dfrac{1}{R} \times \dfrac{l}{a}$ $= G \times \dfrac{l}{a}$.`,
          t`Unit of $\kappa$: $\Omega^{-1}\,\mathrm{cm^{-1}}$, or $\mathrm{S\,m^{-1}}$ in SI.`,
        ],
      },
      {
        title: "The cell constant",
        points: [
          t`The **cell constant** of a conductivity cell is $\dfrac{l}{a}$, in $\mathrm{cm^{-1}}$.`,
          t`It is fixed for a cell, so $\kappa = \dfrac{\text{cell constant}}{R}$.`,
          t`$l$ and $a$ cannot be measured accurately, so the cell constant is found by experiment.`,
          t`Fill the cell with a standard $\ce{KCl}$ solution, whose $\kappa$ is known, and measure $R$.`,
          t`Then cell constant $= \kappa_{\ce{KCl}} \times R_{\ce{KCl}}$.`,
        ],
      },
      {
        title: "Measuring a solution's conductivity",
        points: [
          t`$R$ is measured in a Wheatstone bridge, with A.C. so the electrodes do not electrolyse.`,
          t`Step 1: find the cell constant with standard $\ce{KCl}$.`,
          t`Step 2: measure $R$ of the test solution in the same cell.`,
          t`Step 3: $\kappa = \dfrac{\text{cell constant}}{R}$.`,
          t`A larger resistance in the same cell means a smaller conductivity.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell filled with $0.1\ \mathrm{M}$ $\ce{KCl}$ ($\kappa = 0.0129\ \Omega^{-1}\,\mathrm{cm^{-1}}$) has $R = 93\ \Omega$. The same cell with a test solution has $R = 600\ \Omega$. Find the test solution's conductivity.`,
      steps: [
        t`Cell constant $= \kappa_{\ce{KCl}} \times R_{\ce{KCl}}$ $= 0.0129 \times 93$.`,
        t`Cell constant $= 1.20\ \mathrm{cm^{-1}}$.`,
        t`For the test solution, $\kappa = \dfrac{\text{cell constant}}{R}$ $= \dfrac{1.20}{600}$.`,
        t`$\kappa = 2.00 \times 10^{-3}\ \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
      ],
      answer: t`$\kappa = 2.00 \times 10^{-3}\ \Omega^{-1}\,\mathrm{cm^{-1}}$`,
    },
    visualSpec: t`Slide the electrodes apart and shrink their area: the resistance and cell constant change together while the conductivity stays fixed.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Takes the cell constant upside down ($a/l$), so divides by it: $\kappa = \dfrac{1}{R \times \text{cell constant}}$.`,
      remediation: t`The cell constant is $l/a$ and $\kappa = G \times \dfrac{l}{a}$: multiply the conductance by the cell constant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Takes the conductance $1/R$ as the conductivity, leaving out the cell constant.`,
      remediation: t`$G = 1/R$ depends on the cell; conductivity is $\kappa = G \times \dfrac{l}{a}$, so bring in the cell constant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Drops the reciprocal: uses $R$ where the conductance $1/R$ belongs, so $\kappa = R \times \text{cell constant}$.`,
      remediation: t`Conductance is $G = 1/R$; so $\kappa = \dfrac{\text{cell constant}}{R}$ and cell constant $= \kappa R$.`,
      fallback: { kind: "ext", topic: "resistance and Ohm's law (Physics)" },
    },
    {
      id: "C01-M4",
      mistake: t`Works out the resistivity $\rho = R\dfrac{a}{l}$ and calls it the conductivity.`,
      remediation: t`Resistivity $\rho$ is in $\Omega\,\mathrm{cm}$; conductivity is its reciprocal, $\kappa = 1/\rho$, in $\Omega^{-1}\,\mathrm{cm^{-1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks conductivity belongs to the cell, so any solution in the same cell has the KCl value.",
      remediation: t`The cell constant belongs to the cell; $\kappa$ belongs to the solution: $\kappa = \dfrac{\text{cell constant}}{R}$ for each solution.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#2" },
      stem: t`A conductivity cell filled with $0.001\ \mathrm{M}$ $\ce{KCl}$ at $298\ \mathrm{K}$ has a resistance of $1500\ \Omega$. The conductivity of this solution is $1.46 \times 10^{-4}\ \Omega^{-1}\,\mathrm{cm^{-1}}$. What is the cell constant?`,
      verify: { kind: "value", inputs: { k: "1.46e-4", R: "1500" }, params: { ask: "cell_const" } },
      options: [
        { key: "A", text: t`$0.219\ \mathrm{cm^{-1}}$`, correct: true, value: "0.219000000000000" },
        { key: "B", text: t`$4.57\ \mathrm{cm^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "4.57000000000000" },
        { key: "C", text: t`$9.73 \times 10^{-8}\ \mathrm{cm^{-1}}$`, correct: false, misconceptionId: "C01-M3", value: "9.73000000000000e-8" },
        { key: "D", text: t`$1.03 \times 10^{7}\ \mathrm{cm^{-1}}$`, correct: false, misconceptionId: "C01-M4", value: "10300000" },
      ],
      solution: {
        steps: [
          t`Cell constant $= \kappa \times R$ for the standard solution.`,
          t`Cell constant $= 1.46 \times 10^{-4} \times 1500$ $= 0.219\ \mathrm{cm^{-1}}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#3" },
      stem: t`A $0.05\ \mathrm{M}$ $\ce{NaOH}$ solution has a resistance of $31.6\ \Omega$ in a conductivity cell of cell constant $0.367\ \mathrm{cm^{-1}}$. What is its conductivity?`,
      verify: { kind: "value", inputs: { R: "31.6", b: "0.367" }, params: { ask: "kappa" } },
      options: [
        { key: "A", text: t`$11.6\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M3", value: "11.6000000000000" },
        { key: "B", text: t`$0.0862\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "0.0862000000000000" },
        { key: "C", text: t`$0.0316\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M2", value: "0.0316000000000000" },
        { key: "D", text: t`$0.0116\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: true, value: "0.0116000000000000" },
      ],
      solution: {
        steps: [
          t`$\kappa = \dfrac{\text{cell constant}}{R}$ $= \dfrac{0.367}{31.6}$.`,
          t`$\kappa = 0.0116\ \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.5" },
      stem: t`A conductivity cell holding $0.01\ \mathrm{M}$ $\ce{KCl}$ ($\kappa = 0.00141\ \Omega^{-1}\,\mathrm{cm^{-1}}$) has a resistance of $604\ \Omega$. The same cell holding $0.001\ \mathrm{M}$ $\ce{AgNO3}$ has a resistance of $6530\ \Omega$. What is the conductivity of the $\ce{AgNO3}$ solution?`,
      verify: { kind: "value", inputs: { k1: "0.00141", R1: "604", R2: "6530" }, params: { ask: "kappa2" } },
      options: [
        { key: "A", text: t`$0.0152\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M3", value: "0.0152000000000000" },
        { key: "B", text: t`$0.00141\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M5", value: "0.00141000000000000" },
        { key: "C", text: t`$1.3 \times 10^{-4}\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: true, value: "0.000130000000000000" },
        { key: "D", text: t`$1.53 \times 10^{-4}\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M2", value: "0.000153000000000000" },
      ],
      solution: {
        steps: [
          t`Cell constant $= 0.00141 \times 604$ $= 0.852\ \mathrm{cm^{-1}}$.`,
          t`For $\ce{AgNO3}$: $\kappa = \dfrac{0.852}{6530}$.`,
          t`$\kappa = 1.30 \times 10^{-4}\ \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (vii)" },
      stem: t`Conductivity is found as $\kappa = \dfrac{\text{cell constant}}{R}$, with the cell constant in $\mathrm{cm^{-1}}$. In which unit is $\kappa$ then expressed?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`$\Omega^{-1}\,\mathrm{cm^{-1}}$`, correct: true, value: "ohm_inv_cm_inv" },
        { key: "B", text: t`$\Omega^{-1}\,\mathrm{cm}$`, correct: false, misconceptionId: "C01-M1", value: "ohm_inv_cm" },
        { key: "C", text: t`$\Omega^{-1}$`, correct: false, misconceptionId: "C01-M2", value: "ohm_inv" },
        { key: "D", text: t`$\Omega\,\mathrm{cm}$`, correct: false, misconceptionId: "C01-M4", value: "ohm_cm" },
      ],
      solution: {
        steps: [
          t`$R$ is in $\Omega$, so $\dfrac{1}{R}$ is in $\Omega^{-1}$.`,
          t`$\kappa = \text{cell constant} \times \dfrac{1}{R}$: unit $\mathrm{cm^{-1}} \times \Omega^{-1}$ $= \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`The electrodes of a conductivity cell are $1.5\ \mathrm{cm}$ apart and each has an area of $1.2\ \mathrm{cm^2}$. A solution in the cell has a resistance of $250\ \Omega$. What is its conductivity?`,
      verify: { kind: "value", inputs: { l: "1.5", a: "1.2", R: "250" }, params: { ask: "kappa" } },
      options: [
        { key: "A", text: t`$0.0032\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "0.00320000000000000" },
        { key: "B", text: t`$0.005\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: true, value: "0.00500000000000000" },
        { key: "C", text: t`$0.004\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M2", value: "0.00400000000000000" },
        { key: "D", text: t`$312\ \mathrm{\Omega^{-1}\,cm^{-1}}$`, correct: false, misconceptionId: "C01-M3", value: "312" },
      ],
      solution: {
        steps: [
          t`Cell constant $= \dfrac{l}{a} = \dfrac{1.5}{1.2}$ $= 1.25\ \mathrm{cm^{-1}}$.`,
          t`$\kappa = \dfrac{1.25}{250}$ $= 0.005\ \Omega^{-1}\,\mathrm{cm^{-1}}$.`,
        ],
      },
    },
  ],
};
