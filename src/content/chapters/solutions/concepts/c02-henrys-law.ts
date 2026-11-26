import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A sealed bottle of soda water shows no bubbles, yet it fizzes the moment you open it. Nothing was added. What changed?`,
    reveal: t`The pressure of $\ce{CO2}$ above the drink. Sealed, it is high, so a lot of $\ce{CO2}$ stays dissolved. Opened, it drops to the tiny $\ce{CO2}$ pressure of air, the solubility drops with it, and the extra gas escapes as bubbles.`,
  },
  explanation: {
    intuition: [
      t`Gas molecules above a liquid keep entering it, and dissolved ones keep leaving.`,
      t`Crowd more gas molecules into the space above, a higher pressure, and more of them enter.`,
      t`So a gas dissolves more under a higher pressure.`,
      t`Double the pressure of the gas and its solubility doubles.`,
      t`Only the gas's own share of the pressure counts: its **partial pressure**.`,
    ],
    formal: [
      {
        title: "Henry's law",
        points: [
          t`**Henry's law**: at constant temperature, the solubility of a gas in a liquid is directly proportional to its partial pressure.`,
          t`$S = K_H P$`,
          t`$S$ is the solubility in $\mathrm{mol\,L^{-1}}$; $P$ is the gas's partial pressure above the liquid.`,
          t`$K_H$, the **Henry's law constant**, depends on the gas, the solvent and the temperature.`,
          t`Its unit is $\mathrm{mol\,L^{-1}\,bar^{-1}}$: it is the solubility at a partial pressure of $1$ bar.`,
        ],
      },
      {
        title: "Using the law",
        points: [
          t`Put $P$ in the pressure unit of $K_H$: $760$ mm Hg $= 1$ atm $= 1.013$ bar.`,
          t`In a gas mixture, a gas's **partial pressure** is its mole fraction times the total pressure (Dalton's law).`,
          t`For one gas at two pressures: $\dfrac{S_1}{S_2} = \dfrac{P_1}{P_2}$.`,
          t`A solubility in grams per litre becomes $\mathrm{mol\,L^{-1}}$ on dividing by the molar mass.`,
        ],
      },
      {
        title: "Where it holds",
        points: [
          t`It holds at low pressures, for a gas that does not react with the solvent.`,
          t`$\ce{NH3}$ reacts with water, so it does not follow Henry's law.`,
          t`Soft drinks are bottled under a high $\ce{CO2}$ pressure to dissolve more gas.`,
          t`Raising the temperature lowers a gas's solubility, so $K_H$ falls as the liquid warms.`,
        ],
      },
    ],
    worked: {
      prompt: t`The Henry's law constant of $\ce{O2}$ in water at $25^\circ\mathrm{C}$ is $1.3 \times 10^{-3}\ \mathrm{mol\,L^{-1}\,bar^{-1}}$. In air its partial pressure is $0.21$ bar. How much $\ce{O2}$ dissolves in a litre of water, in mol and in mg?`,
      steps: [
        t`$S = K_H P$ $= 1.3 \times 10^{-3} \times 0.21$`,
        t`$S = 2.73 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`,
        t`Mass per litre $= 2.73 \times 10^{-4} \times 32$ $= 8.74 \times 10^{-3}$ g.`,
        t`That is $8.74$ mg of $\ce{O2}$ per litre.`,
      ],
      answer: t`$2.73 \times 10^{-4}$ mol, or $8.74$ mg, per litre`,
    },
    visualSpec: t`Push a piston down on a gas above water and watch more molecules cross into the liquid, the solubility rising in step with the pressure.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Thinks solubility falls as pressure rises: uses $S = K_H / P$.`,
      remediation: t`Higher pressure pushes more gas in: $S = K_H P$, so the solubility rises in proportion to the pressure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Uses the total pressure of a gas mixture instead of the gas's partial pressure.",
      remediation: "Only the gas's own share counts: its partial pressure is its mole fraction times the total pressure.",
      fallback: { kind: "ext", topic: "Dalton's law of partial pressures (Std XI Chemistry)" },
    },
    {
      id: "C02-M3",
      mistake: t`Puts the pressure in mm Hg straight into $S = K_H P$.`,
      remediation: t`$P$ must be in the unit of $K_H$: divide mm Hg by $760$ to get atm, then multiply by $1.013$ for bar.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Treats a solubility in grams per litre as if it were in moles per litre.",
      remediation: t`$K_H$ here is in $\mathrm{mol\,L^{-1}}$ per unit pressure: first divide the grams per litre by the molar mass.`,
      fallback: { kind: "ext", topic: "mole concept (Std XI Chemistry)" },
    },
    {
      id: "C02-M5",
      mistake: t`Takes $K_H$ itself as the solubility, whatever the pressure.`,
      remediation: t`$K_H$ is the solubility at $1$ bar only; at another partial pressure multiply by it: $S = K_H P$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Uses $S = P / K_H$, mixing up the form of Henry's law.`,
      remediation: t`With $K_H$ in $\mathrm{mol\,L^{-1}}$ per unit pressure, the law is $S = K_H P$: multiply, don't divide.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M5 gives the key when the partial pressure is $1$ bar; C02-M2 gives the key for a pure gas.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#20" },
      stem: t`The Henry's law constant of $\ce{CH3Br}$ in water is $0.159\ \mathrm{mol\,dm^{-3}\,bar^{-1}}$ at $25^\circ\mathrm{C}$. What is its solubility at $25^\circ\mathrm{C}$ when its partial pressure is $0.164$ bar?`,
      verify: { kind: "value", inputs: { KH: "0.159", P: "0.164" }, params: { ask: "S" } },
      options: [
        { key: "A", text: t`$0.0261\ \mathrm{mol\,dm^{-3}}$`, correct: true, value: "0.0261000000000000" },
        { key: "B", text: t`$0.97\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C02-M1", value: "0.970000000000000" },
        { key: "C", text: t`$0.159\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C02-M5", value: "0.159000000000000" },
        { key: "D", text: t`$1.03\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C02-M6", value: "1.03000000000000" },
      ],
      solution: {
        steps: [
          t`$S = K_H P$ $= 0.159 \times 0.164$`,
          t`$S = 0.0261\ \mathrm{mol\,dm^{-3}}$`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.2" },
      stem: t`The Henry's law constant of methyl bromide ($\ce{CH3Br}$) is $0.159\ \mathrm{mol\,L^{-1}\,bar^{-1}}$ at $25^\circ\mathrm{C}$. What is its solubility in water at $25^\circ\mathrm{C}$ and a pressure of $152$ mm Hg? (Take $1\ \mathrm{atm} = 760$ mm Hg $= 1.013$ bar.)`,
      verify: { kind: "value", inputs: { KH: "0.159", P_mmHg: "152", atm_bar: "1.013" }, params: { ask: "S", unit: "bar" } },
      options: [
        { key: "A", text: t`$0.785\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C02-M1", value: "0.785000000000000" },
        { key: "B", text: t`$24.2\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C02-M3", value: "24.2000000000000" },
        { key: "C", text: t`$1.27\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C02-M6", value: "1.27000000000000" },
        { key: "D", text: t`$0.0322\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "0.0322000000000000" },
      ],
      solution: {
        steps: [
          t`$P = \dfrac{152}{760}$ atm $= 0.2$ atm`,
          t`$0.2 \times 1.013 = 0.2026$ bar`,
          t`$S = K_H P$ $= 0.159 \times 0.2026$ $= 0.0322\ \mathrm{mol\,L^{-1}}$`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.8" },
      stem: t`Fish need at least $3.8$ mg of $\ce{O2}$ per litre of water. The solubility of $\ce{O2}$ at $0^\circ\mathrm{C}$ and $1$ atm partial pressure is $2.2 \times 10^{-3}\ \mathrm{mol\,L^{-1}}$. What partial pressure of $\ce{O2}$ is needed? ($\ce{O2} = 32\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { KH: "2.2e-3", mg_per_L: "3.8", M: "32" }, params: { ask: "P", sf: "2" } },
      options: [
        { key: "A", text: t`$2.6 \times 10^{-7}\ \mathrm{atm}$`, correct: false, misconceptionId: "C02-M6", value: "2.60000000000000e-7" },
        { key: "B", text: t`$0.054\ \mathrm{atm}$`, correct: true, value: "0.0540000000000000" },
        { key: "C", text: t`$19\ \mathrm{atm}$`, correct: false, misconceptionId: "C02-M1", value: "19" },
        { key: "D", text: t`$1.7\ \mathrm{atm}$`, correct: false, misconceptionId: "C02-M4", value: "1.70000000000000" },
      ],
      solution: {
        steps: [
          t`$S = \dfrac{3.8 \times 10^{-3}\ \mathrm{g\,L^{-1}}}{32\ \mathrm{g\,mol^{-1}}}$ $= 1.19 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`,
          t`$K_H = 2.2 \times 10^{-3}\ \mathrm{mol\,L^{-1}\,atm^{-1}}$, the solubility at $1$ atm.`,
          t`$P = \dfrac{S}{K_H}$ $= \dfrac{1.19 \times 10^{-4}}{2.2 \times 10^{-3}}$ $= 0.054$ atm`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Solved Ex.2.1" },
      stem: t`The solubility of $\ce{N2}$ in water at $25^\circ\mathrm{C}$ is $6.85 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$ at $1$ bar. A gas mixture at a total pressure of $2$ bar is $40\%$ $\ce{N2}$ by moles. What is the solubility of $\ce{N2}$ in water under this mixture at $25^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { KH: "6.85e-4", x: "0.4", Ptot: "2" }, params: { ask: "S" } },
      options: [
        { key: "A", text: t`$6.85 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C02-M5", value: "0.000685000000000000" },
        { key: "B", text: t`$5.48 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "0.000548000000000000" },
        { key: "C", text: t`$8.56 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C02-M1", value: "0.000856000000000000" },
        { key: "D", text: t`$1.37 \times 10^{-3}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C02-M2", value: "0.00137000000000000" },
      ],
      solution: {
        steps: [
          t`Partial pressure of $\ce{N2}$ $= 0.4 \times 2 = 0.8$ bar.`,
          t`$K_H = 6.85 \times 10^{-4}\ \mathrm{mol\,L^{-1}\,bar^{-1}}$, the solubility at $1$ bar.`,
          t`$S = K_H P$ $= 6.85 \times 10^{-4} \times 0.8$ $= 5.48 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solutions-12-pyq#10" },
      stem: t`Complete the statement of Henry's law: at constant temperature, the solubility of a gas in a liquid is ...`,
      verify: { kind: "value", inputs: {  }, params: { ask: "statement" } },
      options: [
        { key: "A", text: t`fixed for each gas and liquid, whatever the pressure above it`, correct: false, misconceptionId: "C02-M5", value: "fixed_solubility" },
        { key: "B", text: t`directly proportional to the partial pressure of the gas above the liquid`, correct: true, value: "proportional_partial" },
        { key: "C", text: t`inversely proportional to the pressure of the gas above the liquid`, correct: false, misconceptionId: "C02-M1", value: "inverse_pressure" },
        { key: "D", text: t`directly proportional to the total pressure above the liquid`, correct: false, misconceptionId: "C02-M2", value: "proportional_total" },
      ],
      solution: {
        steps: [
          t`Higher pressure of a gas pushes more of it into the liquid.`,
          t`Only that gas's own partial pressure counts: $S = K_H P$.`,
          t`So the solubility is directly proportional to the gas's partial pressure.`,
        ],
      },
    },
  ],
};
