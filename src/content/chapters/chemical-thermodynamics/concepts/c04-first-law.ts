import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A bicycle pump gets warm when you push the handle in quickly, though no flame touches it. Where does the energy come from?`,
    reveal: t`From your work. Work done on the gas raises its internal energy, $\Delta U = Q + W$, even with no heat supplied.`,
  },
  explanation: {
    intuition: [
      t`Every system stores energy in the motion and attractions of its particles: its **internal energy** $U$.`,
      t`$U$ changes only when energy crosses the boundary, as heat $Q$ or as work $W$.`,
      t`Energy is neither created nor destroyed: what goes in shows up as a change in $U$.`,
      t`Heat absorbed and work done on the system both raise $U$.`,
      t`Heat given out and work done by the system both lower $U$.`,
    ],
    formal: [
      {
        title: "The first law",
        points: [
          t`**First law**: energy can neither be created nor destroyed; an isolated system's energy is constant.`,
          t`For any change, $\Delta U = Q + W$.`,
          t`$Q$ is positive when heat is absorbed and negative when heat is released.`,
          t`$W$ is positive when work is done on the system and negative when work is done by it.`,
          t`$U$ is a state function: $\Delta U$ depends only on the initial and final states.`,
        ],
      },
      {
        title: "Special processes",
        points: [
          t`**Isothermal** change of an ideal gas: $U$ depends only on $T$, so $\Delta U = 0$ and $Q = -W$.`,
          t`So in an isothermal expansion, all the heat absorbed goes out as work.`,
          t`**Adiabatic**: no heat crosses, $Q = 0$, so $\Delta U = W$.`,
          t`An adiabatic expansion does work at the cost of $U$, so the gas cools.`,
          t`**Isochoric**: $\Delta V = 0$, so $W = 0$ and $\Delta U = Q_v$.`,
          t`**Isobaric**: $\Delta U = Q_p - P_{ext}\Delta V$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A system releases $1.2\ \mathrm{kJ}$ of heat while $0.8\ \mathrm{kJ}$ of work is done on it. Find $\Delta U$.`,
      steps: [
        t`Heat is released: $Q = -1.2\ \mathrm{kJ}$.`,
        t`Work is done on the system: $W = +0.8\ \mathrm{kJ}$.`,
        t`$\Delta U = Q + W = -1.2 + 0.8$ $= -0.4\ \mathrm{kJ}$.`,
        t`The internal energy falls by $0.4\ \mathrm{kJ}$.`,
      ],
      answer: t`$\Delta U = -0.4\ \mathrm{kJ}$`,
    },
    visualSpec: t`Feed heat in and let the gas push a piston; bars for Q, W and ΔU show the energy balance.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses $\Delta U = Q - W$ with the book's $W$, flipping the sign of the work.`,
      remediation: t`In this book $W$ is work done **on** the system, so $\Delta U = Q + W$; work done by the system enters as a negative $W$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: "Takes heat released by the system as positive.",
      remediation: t`Heat absorbed is positive and heat released is negative: $Q$ is counted from the system's side.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Swaps isothermal and adiabatic: takes $\Delta U = 0$ when no heat flows.`,
      remediation: t`Isothermal means constant $T$, so $\Delta U = 0$; adiabatic means $Q = 0$, so $\Delta U = W$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: t`Swaps adiabatic and isochoric: writes $\Delta U = Q$ for an adiabatic process.`,
      remediation: t`Adiabatic means no heat, $Q = 0$, so $\Delta U = W$; isochoric means no work, $W = 0$, so $\Delta U = Q$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: "Takes both signs from the surroundings' side: heat absorbed negative, work done by the system positive.",
      remediation: "Signs are taken from the system's side: energy entering it, as heat or as work, is positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Leaves the work in $\mathrm{L\,bar}$ as if it were joules.`,
      remediation: t`Convert the work to joules before using it: $1\ \mathrm{L\,bar} = 100\ \mathrm{J}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#15" },
      stem: t`A system absorbs $640\ \mathrm{J}$ of heat and does $260\ \mathrm{J}$ of work. What is the change in its internal energy?`,
      verify: { kind: "value", inputs: { q: "640", w: "260" }, params: { ask: "dU", qdir: "in", wdir: "by" } },
      options: [
        { key: "A", text: t`$-900\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M2", value: "-900" },
        { key: "B", text: t`$-380\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M5", value: "-380" },
        { key: "C", text: t`$+380\ \mathrm{J}$`, correct: true, value: "380" },
        { key: "D", text: t`$+900\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "900" },
      ],
      solution: {
        steps: [
          t`Heat absorbed: $Q = +640\ \mathrm{J}$; work done by the system: $W = -260\ \mathrm{J}$.`,
          t`$\Delta U = 640 - 260 = +380\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.8" },
      stem: t`In a reaction, $500\ \mathrm{J}$ of work is done on the system and its internal energy rises by $300\ \mathrm{J}$. What is $Q$?`,
      verify: { kind: "value", inputs: { dU: "300", w: "500" }, params: { ask: "Q", wdir: "on" } },
      options: [
        { key: "A", text: t`$+800\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "800" },
        { key: "B", text: t`$+200\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M2", value: "200" },
        { key: "C", text: t`$-800\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M5", value: "-800" },
        { key: "D", text: t`$-200\ \mathrm{J}$`, correct: true, value: "-200" },
      ],
      solution: {
        steps: [
          t`Work done on the system: $W = +500\ \mathrm{J}$; and $\Delta U = +300\ \mathrm{J}$.`,
          t`$Q = \Delta U - W = 300 - 500$ $= -200\ \mathrm{J}$.`,
          t`The system releases $200\ \mathrm{J}$ of heat.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (ii)" },
      stem: t`A gas in a well insulated container expands against a constant external pressure of $2.5\ \mathrm{bar}$ from $2.5\ \mathrm{L}$ to $4.5\ \mathrm{L}$. What is $\Delta U$ of the gas? ($1\ \mathrm{L\,bar} = 100\ \mathrm{J}$)`,
      verify: { kind: "value", inputs: { P: "2.5", V1: "2.5", V2: "4.5" }, params: { ask: "adiabatic" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "0" },
        { key: "B", text: t`$-5\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M6", value: "-5" },
        { key: "C", text: t`$-500\ \mathrm{J}$`, correct: true, value: "-500" },
        { key: "D", text: t`$+500\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "500" },
      ],
      solution: {
        steps: [
          t`Well insulated: $Q = 0$, so $\Delta U = W$.`,
          t`$W = -2.5 \times (4.5 - 2.5)$ $= -5\ \mathrm{L\,bar}$.`,
          t`$\Delta U = W = -5 \times 100 = -500\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#2" },
      stem: t`For an adiabatic process, the first law of thermodynamics becomes`,
      verify: { kind: "value", inputs: {  }, params: { ask: "adiabatic_law" } },
      options: [
        { key: "A", text: t`$\Delta U = -W$`, correct: false, misconceptionId: "C04-M1", value: "dU_eq_minus_W" },
        { key: "B", text: t`$Q = -W$`, correct: false, misconceptionId: "C04-M3", value: "Q_eq_minus_W" },
        { key: "C", text: t`$\Delta U = Q$`, correct: false, misconceptionId: "C04-M4", value: "dU_eq_Q" },
        { key: "D", text: t`$\Delta U = W$`, correct: true, value: "dU_eq_W" },
      ],
      solution: {
        steps: [
          t`Adiabatic means no heat crosses the boundary: $Q = 0$.`,
          t`$\Delta U = Q + W$ becomes $\Delta U = W$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#23" },
      stem: t`A system absorbs $6\ \mathrm{kJ}$ of heat and does $1.5\ \mathrm{kJ}$ of work on its surroundings. What is the change in internal energy?`,
      verify: { kind: "value", inputs: { q: "6", w: "1.5" }, params: { ask: "dU", qdir: "in", wdir: "by" } },
      options: [
        { key: "A", text: t`$-4.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M5", value: "-4.50000000000000" },
        { key: "B", text: t`$+4.5\ \mathrm{kJ}$`, correct: true, value: "4.50000000000000" },
        { key: "C", text: t`$+7.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M1", value: "7.50000000000000" },
        { key: "D", text: t`$-7.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M2", value: "-7.50000000000000" },
      ],
      solution: {
        steps: [
          t`Heat absorbed: $Q = +6\ \mathrm{kJ}$; work done by the system: $W = -1.5\ \mathrm{kJ}$.`,
          t`$\Delta U = 6 - 1.5 = +4.5\ \mathrm{kJ}$.`,
        ],
      },
    },
  ],
};
