import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`You heat a gas in a cylinder with a free piston. The gas warms up, and the piston rises. Where did the heat you supplied go?`,
    reveal: t`Part of it raised the gas's internal energy, and the rest became work lifting the piston. Energy is never lost: this is the **first law of thermodynamics**.`,
  },
  explanation: {
    intuition: [
      t`Energy cannot be created or destroyed, only moved or changed in form.`,
      t`Heat $Q$ supplied to a system has two places to go.`,
      t`Some raises its internal energy, by $\Delta U$.`,
      t`The rest is the work $W$ the system does on its surroundings.`,
      t`So $Q = \Delta U + W$: the **first law of thermodynamics**.`,
    ],
    formal: [
      {
        title: "The first law",
        points: [
          t`**First law**: $Q = \Delta U + W$, or $\Delta U = Q - W$.`,
          t`It is the law of conservation of energy, applied to heat and work.`,
          t`$Q$ is the heat added **to** the system; heat given out counts as negative.`,
          t`$W$ is the work done **by** the system; work done on it counts as negative.`,
          t`$\Delta U$ depends only on the first and last states, though $Q$ and $W$ depend on the path.`,
        ],
      },
      {
        title: "Using the signs",
        points: [
          t`A gas heated and expanding: $Q > 0$ and $W > 0$, and $\Delta U = Q - W$.`,
          t`A gas compressed and giving out heat: both $Q$ and $W$ are negative.`,
          t`In a rigid container, $W = 0$, so $\Delta U = Q$.`,
          t`With no heat exchanged, $Q = 0$, so $\Delta U = -W$.`,
          t`Write each quantity with its sign first, then substitute.`,
        ],
      },
    ],
    worked: {
      prompt: t`A system gives out $130\ \mathrm{kJ}$ of heat while $109\ \mathrm{kJ}$ of work is done on it. Find the change in its internal energy.`,
      steps: [
        t`Heat is given out, so $Q = -130\ \mathrm{kJ}$.`,
        t`Work is done on the system, so $W = -109\ \mathrm{kJ}$.`,
        t`$\Delta U = Q - W = -130 - (-109)$.`,
        t`$\Delta U = -21\ \mathrm{kJ}$: the internal energy falls by $21\ \mathrm{kJ}$.`,
      ],
      answer: t`$\Delta U = -21\ \mathrm{kJ}$`,
    },
    visualSpec: t`Feed heat into a gas under a free piston and split it into two bars as it goes: one for the rise in internal energy, one for the work lifting the piston.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Adds the work: $\Delta U = Q + W$.`,
      remediation: t`Work done by the system carries energy out of it: $\Delta U = Q - W$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Leaves out the work done.",
      remediation: t`A system that expands spends some of the heat on work: $\Delta U = Q - W$, not $Q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Reverses the law: $\Delta U = W - Q$.`,
      remediation: t`Heat added raises $U$ and work done by the system lowers it: $\Delta U = Q - W$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Leaves the volume in litres.",
      remediation: t`With $p$ in Pa, $V$ must be in $\mathrm{m^3}$: $1\ \mathrm{L} = 10^{-3}\ \mathrm{m^3}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: "Counts heat given out by the system as heat taken in.",
      remediation: t`$Q$ is heat added to the system. Heat the system gives out is negative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks a pressure rise at constant volume means work is done.",
      remediation: t`Work needs the boundary to move. In a rigid chamber $\Delta V = 0$, so $W = 0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks a closed system's internal energy cannot change.",
      remediation: "A closed system cannot gain or lose matter, but heat and work still change its internal energy.",
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.1 (i)" },
      stem: t`A gas in a closed container is heated with $10\ \mathrm{J}$ of energy. It pushes the lid up through $2\ \mathrm{m}$ with a force of $3\ \mathrm{N}$. What is the change in the internal energy of the gas?`,
      verify: { kind: "value", inputs: { Q: "10", F: "3", d: "2" }, params: { ask: "lid" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M2", value: "10" },
        { key: "B", text: t`$-4\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "-4" },
        { key: "C", text: t`$4\ \mathrm{J}$`, correct: true, value: "4" },
        { key: "D", text: t`$16\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "16" },
      ],
      solution: {
        steps: [
          t`Work done by the gas: $W = Fd = 3 \times 2 = 6\ \mathrm{J}$.`,
          t`$\Delta U = Q - W = 10 - 6 = 4\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.4" },
      stem: t`A gas in a cylinder with a frictionless piston expands against a constant pressure of $1.013 \times 10^{5}\ \mathrm{Pa}$, from $5$ litres to $10$ litres. It takes in $400\ \mathrm{J}$ of heat. What is the change in its internal energy?`,
      verify: { kind: "value", inputs: { Q: "400", p: "1.013e5", V1: "5", V2: "10" }, params: { ask: "gas", sf: "4" } },
      options: [
        { key: "A", text: t`$906.5\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M1", value: "906.500000000000" },
        { key: "B", text: t`$106.5\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M3", value: "106.500000000000" },
        { key: "C", text: t`$-5.061 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C04-M4", value: "-506100" },
        { key: "D", text: t`$-106.5\ \mathrm{J}$`, correct: true, value: "-106.500000000000" },
      ],
      solution: {
        steps: [
          t`$W = p\,\Delta V = 1.013 \times 10^{5} \times 5 \times 10^{-3} = 506.5\ \mathrm{J}$.`,
          t`$\Delta U = Q - W = 400 - 506.5 = -106.5\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.4" },
      stem: t`$104\ \mathrm{kJ}$ of work is done on a gas, and the gas gives out $125\ \mathrm{kJ}$ of heat. What is the change in its internal energy?`,
      verify: { kind: "value", inputs: { Q_out: "125", W_on: "104" }, params: { ask: "out" } },
      options: [
        { key: "A", text: t`$21\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M3", value: "21" },
        { key: "B", text: t`$229\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M5", value: "229" },
        { key: "C", text: t`$-21\ \mathrm{kJ}$`, correct: true, value: "-21" },
        { key: "D", text: t`$-229\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M1", value: "-229" },
      ],
      solution: {
        steps: [
          t`Heat given out: $Q = -125\ \mathrm{kJ}$. Work done on the gas: $W = -104\ \mathrm{kJ}$.`,
          t`$\Delta U = Q - W = -125 - (-104) = -21\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.3" },
      stem: t`$1.0\ \mathrm{kg}$ of water is boiled to steam at $100^\circ\mathrm{C}$ and a pressure of $1.01 \times 10^{5}\ \mathrm{Pa}$. Its volume goes from $1.0 \times 10^{-3}\ \mathrm{m^3}$ to $1.671\ \mathrm{m^3}$, and $L = 2256\ \mathrm{kJ/kg}$. What is the change in its internal energy?`,
      verify: { kind: "value", inputs: { m: "1", L: "2256", p: "1.01e5", V1: "1e-3", V2: "1.671" }, params: { ask: "boil", sf: "4" } },
      options: [
        { key: "A", text: t`$2425\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M1", value: "2425" },
        { key: "B", text: t`$2256\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M2", value: "2256" },
        { key: "C", text: t`$-2087\ \mathrm{kJ}$`, correct: false, misconceptionId: "C04-M3", value: "-2087" },
        { key: "D", text: t`$2087\ \mathrm{kJ}$`, correct: true, value: "2087" },
      ],
      solution: {
        steps: [
          t`$Q = mL = 2256\ \mathrm{kJ}$, and $W = p\,\Delta V = 1.01 \times 10^{5} \times 1.670 \approx 168.7\ \mathrm{kJ}$.`,
          t`$\Delta U = Q - W = 2256 - 168.7 \approx 2087\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.3 (iii)" },
      stem: t`Fuel and oxygen burn in a rigid, sealed chamber standing in a water bath, and the water warms up. Taking the fuel and oxygen as the system, what are the signs of $Q$, $W$ and $\Delta U$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "signs" } },
      options: [
        { key: "A", text: t`$Q < 0$, $W = 0$, $\Delta U = 0$`, correct: false, misconceptionId: "C04-M7", value: "Qneg_W0_dU0" },
        { key: "B", text: t`$Q < 0$, $W = 0$, $\Delta U < 0$`, correct: true, value: "Qneg_W0_dUneg" },
        { key: "C", text: t`$Q > 0$, $W = 0$, $\Delta U > 0$`, correct: false, misconceptionId: "C04-M5", value: "Qpos_W0_dUpos" },
        { key: "D", text: t`$Q < 0$, $W > 0$, $\Delta U < 0$`, correct: false, misconceptionId: "C04-M6", value: "Qneg_Wpos_dUneg" },
      ],
      solution: {
        steps: [
          t`Heat flows out into the water, so $Q < 0$. The chamber is rigid, so $W = 0$.`,
          t`$\Delta U = Q - W = Q < 0$: the internal energy falls.`,
        ],
      },
    },
  ],
};
