import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Sugar dissolves better in hot tea than in cold, yet a soft drink left in the sun goes flat faster. Why does heat help one solute and drive out the other?`,
    reveal: t`Dissolving sugar absorbs heat, so heating favours it. A gas releases heat as it dissolves, so heating favours the gas leaving. Temperature pushes each dissolving equilibrium the way that absorbs the heat.`,
  },
  explanation: {
    intuition: [
      t`A **solution** is a uniform mixture: the **solute** dissolves in the **solvent**, like salt in water.`,
      t`Keep stirring salt into a glass of water: at some point no more dissolves.`,
      t`That solution is **saturated**: it holds all the solute it can at that temperature.`,
      t`**Solubility** is that most amount, for example in grams of solute per $100$ g of water.`,
      t`Heating raises the solubility of a solid whose dissolving absorbs heat.`,
      t`Heating lowers the solubility of a gas, because a gas releases heat as it dissolves.`,
    ],
    formal: [
      {
        title: "Saturated solution and solubility",
        points: [
          t`In a **saturated solution**, solute dissolves and crystallises at the same rate: a **dynamic equilibrium**.`,
          t`$\text{solute} + \text{solvent} \rightleftharpoons \text{solution}$`,
          t`**Solubility** is the most solute that dissolves in a given amount of solvent at a given temperature.`,
          t`For example, $36$ g of $\ce{NaCl}$ saturates $100$ g of water at $20^\circ\mathrm{C}$.`,
          t`It depends on the solute, the solvent, the temperature and, for a gas, the pressure.`,
        ],
      },
      {
        title: "Temperature and solids",
        points: [
          t`**Le Chatelier's principle**: an equilibrium shifts so as to undo a change made to it.`,
          t`Heat added is undone by the direction that absorbs heat.`,
          t`Dissolving that absorbs heat ($\Delta_{\text{sol}}H > 0$): heating raises the solubility, as for $\ce{KCl}$ and $\ce{KNO3}$.`,
          t`Dissolving that releases heat ($\Delta_{\text{sol}}H < 0$): heating lowers it, as for $\ce{Li2SO4}$.`,
          t`Some solids, like $\ce{NaCl}$, change only a little with temperature.`,
          t`This is a guide, not a law: $\ce{CaCl2}$ releases heat as it dissolves, yet dissolves more when hot.`,
        ],
      },
      {
        title: "Temperature and gases",
        points: [
          t`A gas dissolving is like its vapour condensing into the liquid, which releases heat.`,
          t`So heating drives gas out of a liquid: a gas's solubility falls as the temperature rises.`,
          t`Warm water holds less oxygen, and a warm soft drink loses its $\ce{CO2}$ sooner.`,
          t`Pressure hardly changes a solid's solubility, but raises a gas's (Henry's law).`,
        ],
      },
      {
        title: "Cooling a saturated solution",
        points: [
          t`Cool a hot saturated solution of $\ce{KNO3}$: its solubility falls.`,
          t`The cold solution can hold only the cold solubility; the rest of the solute crystallises.`,
          t`Crystals $=$ solute dissolved $-$ what the cold water can hold.`,
          t`Scale the per-$100$ g solubilities to the actual mass of water first.`,
        ],
      },
    ],
    worked: {
      prompt: t`The solubility of $\ce{NH4Cl}$ is $55$ g per $100$ g of water at $60^\circ\mathrm{C}$ and $37$ g at $20^\circ\mathrm{C}$. A saturated solution made with $200$ g of water at $60^\circ\mathrm{C}$ is cooled to $20^\circ\mathrm{C}$. What mass of $\ce{NH4Cl}$ crystallises?`,
      steps: [
        t`At $60^\circ\mathrm{C}$, $200$ g of water holds $2 \times 55 = 110$ g.`,
        t`At $20^\circ\mathrm{C}$ it can hold only $2 \times 37 = 74$ g.`,
        t`The rest crystallises: $110 - 74 = 36$ g.`,
      ],
      answer: t`$36$ g of $\ce{NH4Cl}$`,
    },
    visualSpec: t`Slide the temperature and watch the solubility of a solid that absorbs heat rise while a gas's falls.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks heating always raises solubility, for gases too.",
      remediation: "Heating raises a solid's solubility only when dissolving absorbs heat. A gas releases heat as it dissolves, so heating lowers its solubility.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Applies Le Chatelier's principle backwards: thinks heating favours the direction that releases heat.",
      remediation: "Added heat is used up by the direction that absorbs heat. If dissolving absorbs heat, heating raises the solubility; if it releases heat, heating lowers it.",
      fallback: { kind: "ext", topic: "Le Chatelier's principle (Std XI Chemistry)" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks temperature changes only how fast a solute dissolves, not how much.",
      remediation: "Heat speeds up dissolving, but it also shifts the equilibrium: the solubility itself changes with temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Uses the per-100 g solubilities whatever the mass of water.",
      remediation: t`Solubility is per $100$ g of water: scale it to the water actually present before subtracting.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Gives the solute still dissolved after cooling instead of the mass that crystallises.",
      remediation: "The cold solubility is what stays dissolved; the crystals are what was dissolved minus that.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Takes all the dissolved solute as crystallising on cooling.",
      remediation: "The cold water still holds its cold solubility; only the excess over that crystallises.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 gives the key for a solid whose dissolving absorbs heat on heating; trend items pair such a solid with a gas so that M1, M2 and M3 differ from the key.",
    t`C01-M4 gives the key when the water is $100$ g and the solution was saturated when hot.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.5" },
      stem: t`Dissolving $\ce{KNO3}$ in water absorbs heat; dissolving $\ce{O2}$ releases heat. When the water is heated, how do their solubilities change?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "trend", heat1: "endo", heat2: "exo", change: "rise" } },
      options: [
        { key: "A", text: t`$\ce{KNO3}$ rises, $\ce{O2}$ falls`, correct: true, value: "up_down" },
        { key: "B", text: t`Both rise`, correct: false, misconceptionId: "C01-M1", value: "up_up" },
        { key: "C", text: t`$\ce{KNO3}$ falls, $\ce{O2}$ rises`, correct: false, misconceptionId: "C01-M2", value: "down_up" },
        { key: "D", text: t`Neither changes`, correct: false, misconceptionId: "C01-M3", value: "same_same" },
      ],
      solution: {
        steps: [
          t`Dissolving $\ce{KNO3}$ absorbs heat, so heating favours dissolving: its solubility rises.`,
          t`Dissolving $\ce{O2}$ releases heat, so heating favours the gas leaving: its solubility falls.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.5" },
      stem: t`Dissolving $\ce{KCl}$ in water absorbs heat; dissolving $\ce{CO2}$ releases heat. When the water is cooled, how do their solubilities change?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "trend", heat1: "endo", heat2: "exo", change: "fall" } },
      options: [
        { key: "A", text: t`$\ce{KCl}$ falls, $\ce{CO2}$ rises`, correct: true, value: "down_up" },
        { key: "B", text: t`Both fall`, correct: false, misconceptionId: "C01-M1", value: "down_down" },
        { key: "C", text: t`$\ce{KCl}$ rises, $\ce{CO2}$ falls`, correct: false, misconceptionId: "C01-M2", value: "up_down" },
        { key: "D", text: t`Neither changes`, correct: false, misconceptionId: "C01-M3", value: "same_same" },
      ],
      solution: {
        steps: [
          t`Cooling favours the direction that releases heat.`,
          t`Dissolving $\ce{KCl}$ absorbs heat, so on cooling it crystallises: its solubility falls.`,
          t`Dissolving $\ce{CO2}$ releases heat, so on cooling more dissolves: its solubility rises.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`The solubility of $\ce{KNO3}$ is $110$ g per $100$ g of water at $60^\circ\mathrm{C}$ and $32$ g at $20^\circ\mathrm{C}$. A saturated solution in $100$ g of water at $60^\circ\mathrm{C}$ is cooled to $20^\circ\mathrm{C}$. What mass of $\ce{KNO3}$ crystallises?`,
      verify: { kind: "value", inputs: { hot: "110", cold: "32", water: "100" }, params: { ask: "crystal" } },
      options: [
        { key: "A", text: t`$32\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M5", value: "32" },
        { key: "B", text: t`$110\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M6", value: "110" },
        { key: "C", text: t`$78\ \mathrm{g}$`, correct: true, value: "78" },
        { key: "D", text: t`$0\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`At $60^\circ\mathrm{C}$, $100$ g of water holds $110$ g of $\ce{KNO3}$.`,
          t`At $20^\circ\mathrm{C}$ it can hold only $32$ g.`,
          t`Crystals $= 110 - 32 = 78$ g.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`The solubility of $\ce{KNO3}$ is $110$ g per $100$ g of water at $60^\circ\mathrm{C}$ and $32$ g at $20^\circ\mathrm{C}$. A saturated solution made with $50$ g of water at $60^\circ\mathrm{C}$ is cooled to $20^\circ\mathrm{C}$. What mass of $\ce{KNO3}$ crystallises?`,
      verify: { kind: "value", inputs: { hot: "110", cold: "32", water: "50" }, params: { ask: "crystal" } },
      options: [
        { key: "A", text: t`$39\ \mathrm{g}$`, correct: true, value: "39" },
        { key: "B", text: t`$78\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M4", value: "78" },
        { key: "C", text: t`$16\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M5", value: "16" },
        { key: "D", text: t`$55\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M6", value: "55" },
      ],
      solution: {
        steps: [
          t`$50$ g of water is half of $100$ g, so it holds $55$ g at $60^\circ\mathrm{C}$.`,
          t`At $20^\circ\mathrm{C}$ it can hold only $16$ g.`,
          t`Crystals $= 55 - 16 = 39$ g.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solutions-12-chem/Ex Q.5" },
      stem: t`Dissolving $\ce{Li2SO4}$ in water releases heat; dissolving $\ce{KNO3}$ absorbs heat. When the water is heated, how do their solubilities change?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "trend", heat1: "exo", heat2: "endo", change: "rise" } },
      options: [
        { key: "A", text: t`$\ce{Li2SO4}$ falls, $\ce{KNO3}$ rises`, correct: true, value: "down_up" },
        { key: "B", text: t`Both rise`, correct: false, misconceptionId: "C01-M1", value: "up_up" },
        { key: "C", text: t`$\ce{Li2SO4}$ rises, $\ce{KNO3}$ falls`, correct: false, misconceptionId: "C01-M2", value: "up_down" },
        { key: "D", text: t`Neither changes`, correct: false, misconceptionId: "C01-M3", value: "same_same" },
      ],
      solution: {
        steps: [
          t`Dissolving $\ce{Li2SO4}$ releases heat, so heating favours crystallising: its solubility falls.`,
          t`Dissolving $\ce{KNO3}$ absorbs heat, so heating favours dissolving: its solubility rises.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`The solubility of $\ce{KCl}$ is $51$ g per $100$ g of water at $80^\circ\mathrm{C}$ and $34$ g at $20^\circ\mathrm{C}$. A solution of $40$ g of $\ce{KCl}$ in $100$ g of water at $80^\circ\mathrm{C}$ is cooled to $20^\circ\mathrm{C}$. What mass of $\ce{KCl}$ crystallises?`,
      verify: { kind: "value", inputs: { hot: "51", cold: "34", water: "100", dissolved: "40" }, params: { ask: "crystal" } },
      options: [
        { key: "A", text: t`$34\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M5", value: "34" },
        { key: "B", text: t`$40\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M6", value: "40" },
        { key: "C", text: t`$6\ \mathrm{g}$`, correct: true, value: "6" },
        { key: "D", text: t`$0\ \mathrm{g}$`, correct: false, misconceptionId: "C01-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`The solution holds $40$ g; at $80^\circ\mathrm{C}$ it is not even saturated.`,
          t`At $20^\circ\mathrm{C}$, $100$ g of water can hold only $34$ g.`,
          t`Crystals $= 40 - 34 = 6$ g.`,
        ],
      },
    },
  ],
};
