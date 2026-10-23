import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`A gas is warmed by the same amount twice: once in a sealed rigid can, once in a cylinder with a free piston. Which takes more heat?`,
    reveal: t`The cylinder. There the gas also pushes the piston out, doing work, so it needs extra heat: $C_P > C_V$.`,
  },
  explanation: {
    intuition: [
      t`A gas can be heated at constant volume or at constant pressure.`,
      t`At constant volume, all the heat goes into the gas's internal energy.`,
      t`At constant pressure, the gas also expands and does work on its surroundings.`,
      t`So more heat is needed at constant pressure: $C_P > C_V$.`,
      t`For one mole of an ideal gas, the extra heat is exactly $R$ per kelvin: **Mayer's relation**.`,
    ],
    formal: [
      {
        title: "Mayer's relation",
        points: [
          t`**Molar specific heat** is the heat that warms one mole by $1\ \mathrm{K}$: $C_V$ at constant volume, $C_P$ at constant pressure.`,
          t`At constant volume, $dQ = dU = C_V\,dT$.`,
          t`At constant pressure, $dQ = dU + P\,dV$, and for one mole $P\,dV = R\,dT$.`,
          t`So $C_P\,dT = C_V\,dT + R\,dT$, giving $C_P - C_V = R$.`,
          t`With heat in calories and specific heats per kilogram: $S_P - S_V = \dfrac{R}{MJ}$, where $J$ is the mechanical equivalent of heat.`,
        ],
      },
      {
        title: "Using the two specific heats",
        points: [
          t`$\gamma = \dfrac{C_P}{C_V}$, which is always greater than 1.`,
          t`Given $C_P - C_V$ and $\gamma$: $C_V = \dfrac{C_P - C_V}{\gamma - 1}$, then $C_P = \gamma C_V$.`,
          t`Given $C_V$: $\gamma = \dfrac{C_V + R}{C_V} = 1 + \dfrac{R}{C_V}$.`,
          t`Solids and liquids hardly expand, so for them $C_P$ and $C_V$ are almost equal.`,
        ],
      },
    ],
    worked: {
      prompt: t`The two specific heats of a gas differ by $4000\ \mathrm{J\,kg^{-1}K^{-1}}$, and their ratio is $1.4$. Find both.`,
      steps: [
        t`$C_P = \gamma C_V$ and $C_P - C_V = 4000$.`,
        t`$(\gamma - 1)C_V = 4000$, so $C_V = \dfrac{4000}{0.4}$.`,
        t`$C_V = 10000\ \mathrm{J\,kg^{-1}K^{-1}}$.`,
        t`$C_P = 1.4 \times 10000 = 14000\ \mathrm{J\,kg^{-1}K^{-1}}$.`,
      ],
      answer: t`$C_V = 10000$, $C_P = 14000\ \mathrm{J\,kg^{-1}K^{-1}}$`,
    },
    visualSpec: t`Heat a gas in a fixed can and in a piston cylinder side by side, and watch the cylinder need extra heat for the work its gas does.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Divides the difference by $\gamma$ instead of $\gamma - 1$.`,
      remediation: t`$C_P - C_V = \gamma C_V - C_V = (\gamma - 1)C_V$, so $C_V = \dfrac{C_P - C_V}{\gamma - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Multiplies the difference by $\gamma$.`,
      remediation: t`Write $C_P = \gamma C_V$ in $C_P - C_V$: $(\gamma - 1)C_V$ equals the difference, so divide by $\gamma - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Gives the other specific heat.",
      remediation: t`Check which one is asked: $C_P$ is always the larger.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Leaves out the molar mass.",
      remediation: t`Per kilogram, $S_P - S_V = \dfrac{R}{MJ}$; hydrogen's $M = 2$ must appear.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Turns the ratio upside down.",
      remediation: t`$J = \dfrac{R}{M(S_P - S_V)}$ joules per calorie, and $\gamma = \dfrac{C_P}{C_V}$: both come out greater than 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Uses one specific heat instead of the difference between them.",
      remediation: t`Mayer's relation links the difference, $S_P - S_V$, to $R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Writes $C_P + C_V = R$.`,
      remediation: t`$C_P$ exceeds $C_V$ by the work done in expanding: $C_P - C_V = R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Thinks $C_V$ is the larger of the two.`,
      remediation: t`At constant pressure the gas also does work, so it needs more heat: $C_P > C_V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Writes $\dfrac{C_P}{C_V} = R$.`,
      remediation: t`The ratio is $\gamma$, a pure number; Mayer's relation is about the difference, $C_P - C_V = R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Gives $\gamma - 1$ instead of $\gamma$.`,
      remediation: t`$\gamma = 1 + \dfrac{R}{C_V}$: remember to add the 1.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Solved Ex.3.4" },
      stem: t`The difference between the two specific heats of a gas is $8000\ \mathrm{J\,kg^{-1}K^{-1}}$, and their ratio is $1.65$. What is the specific heat at constant volume?`,
      verify: { kind: "value", inputs: { d: "8000", g: "1.65" }, params: { ask: "Cv", sf: "4" } },
      options: [
        { key: "A", text: t`$13200\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "13200" },
        { key: "B", text: t`$20310\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: false, misconceptionId: "C07-M3", value: "20310" },
        { key: "C", text: t`$12310\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: true, value: "12310" },
        { key: "D", text: t`$4848\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "4848" },
      ],
      solution: {
        steps: [
          t`$C_P = 1.65C_V$ and $C_P - C_V = 8000$, so $0.65C_V = 8000$.`,
          t`$C_V = \dfrac{8000}{0.65} \approx 1.231 \times 10^4\ \mathrm{J\,kg^{-1}K^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.14" },
      stem: t`The difference between the two specific heats of a gas is $9000\ \mathrm{J\,kg^{-1}K^{-1}}$, and their ratio is $1.5$. What is the specific heat at constant pressure?`,
      verify: { kind: "value", inputs: { d: "9000", g: "1.5" }, params: { ask: "Cp" } },
      options: [
        { key: "A", text: t`$15000\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "15000" },
        { key: "B", text: t`$22500\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "22500" },
        { key: "C", text: t`$18000\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: false, misconceptionId: "C07-M3", value: "18000" },
        { key: "D", text: t`$27000\ \mathrm{J\,kg^{-1}K^{-1}}$`, correct: true, value: "27000" },
      ],
      solution: {
        steps: [
          t`$1.5C_V - C_V = 9000$, so $C_V = 18000\ \mathrm{J\,kg^{-1}K^{-1}}$.`,
          t`$C_P = 18000 + 9000 = 27000\ \mathrm{J\,kg^{-1}K^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Solved Ex.3.3" },
      stem: t`For hydrogen gas ($M = 2$), $S_P = 3400$ and $S_V = 2400\ \mathrm{cal\,kg^{-1}K^{-1}}$, and $R = 8300\ \mathrm{J\,kmol^{-1}K^{-1}}$. Find the mechanical equivalent of heat $J$.`,
      verify: { kind: "value", inputs: { Sp: "3400", Sv: "2400", R: "8300", M: "2" }, params: { ask: "J" } },
      options: [
        { key: "A", text: t`$1.22\ \mathrm{J/cal}$`, correct: false, misconceptionId: "C07-M6", value: "1.22000000000000" },
        { key: "B", text: t`$4.15\ \mathrm{J/cal}$`, correct: true, value: "4.15000000000000" },
        { key: "C", text: t`$8.3\ \mathrm{J/cal}$`, correct: false, misconceptionId: "C07-M4", value: "8.30000000000000" },
        { key: "D", text: t`$0.241\ \mathrm{J/cal}$`, correct: false, misconceptionId: "C07-M5", value: "0.241000000000000" },
      ],
      solution: {
        steps: [
          t`$S_P - S_V = \dfrac{R}{MJ}$, with $M = 2$ for hydrogen.`,
          t`$1000 = \dfrac{8300}{2J}$, so $J = 4.15\ \mathrm{J/cal}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`Which equation is Mayer's relation between the molar specific heats of an ideal gas?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mayer" } },
      options: [
        { key: "A", text: t`$C_P - C_V = R$`, correct: true, value: "Cp_minus_Cv_R" },
        { key: "B", text: t`$C_P + C_V = R$`, correct: false, misconceptionId: "C07-M7", value: "Cp_plus_Cv_R" },
        { key: "C", text: t`$C_V - C_P = R$`, correct: false, misconceptionId: "C07-M8", value: "Cv_minus_Cp_R" },
        { key: "D", text: t`$\dfrac{C_P}{C_V} = R$`, correct: false, misconceptionId: "C07-M9", value: "Cp_over_Cv_R" },
      ],
      solution: {
        steps: [
          t`At constant pressure the gas also does work, $P\,dV = R\,dT$ per mole.`,
          t`So $C_P = C_V + R$: $C_P - C_V = R$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`A gas has a molar specific heat at constant volume of $20.8\ \mathrm{J\,mol^{-1}K^{-1}}$. Taking $R = 8.31\ \mathrm{J\,mol^{-1}K^{-1}}$, what is $\gamma = \dfrac{C_P}{C_V}$?`,
      verify: { kind: "value", inputs: { Cv: "20.8", R: "8.31" }, params: { ask: "gamma" } },
      options: [
        { key: "A", text: t`$0.715$`, correct: false, misconceptionId: "C07-M5", value: "0.715000000000000" },
        { key: "B", text: t`$0.6$`, correct: false, misconceptionId: "C07-M8", value: "0.600000000000000" },
        { key: "C", text: t`$0.4$`, correct: false, misconceptionId: "C07-M10", value: "0.400000000000000" },
        { key: "D", text: t`$1.4$`, correct: true, value: "1.40000000000000" },
      ],
      solution: {
        steps: [
          t`$\gamma = \dfrac{C_V + R}{C_V} = \dfrac{20.8 + 8.31}{20.8}$.`,
          t`$\gamma \approx 1.40$.`,
        ],
      },
    },
  ],
};
