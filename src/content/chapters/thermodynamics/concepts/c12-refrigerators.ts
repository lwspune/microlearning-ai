import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`Put your hand behind a running refrigerator and you feel warm air. How can a machine that keeps food cold make the kitchen warmer?`,
    reveal: t`A refrigerator doesn't destroy heat; it pumps it out of the cold inside and dumps it, plus the work it uses, into the room behind it.`,
  },
  explanation: {
    intuition: [
      t`Heat flows by itself only from hot to cold.`,
      t`A **refrigerator** uses work to move heat the other way: out of its cold inside, into the warmer room.`,
      t`Each cycle it removes $Q_C$ from inside and dumps $Q_H = Q_C + W$ outside.`,
      t`A **heat pump** is the same machine used to warm a room, taking heat from the colder outdoors.`,
      t`How well it works is its **coefficient of performance**: useful heat moved per joule of work.`,
    ],
    formal: [
      {
        title: "The refrigeration cycle",
        points: [
          t`A refrigerant circulates through a compressor, a condenser, an expansion valve and an evaporator.`,
          t`In the evaporator, inside the cold chamber, the cold refrigerant takes in heat $Q_C$ and boils.`,
          t`The compressor does work $W$ on it, making it hot and at high pressure.`,
          t`In the condenser, the coils outside, it rejects heat $Q_H = Q_C + W$ and liquefies.`,
          t`The expansion valve then lowers its pressure and temperature, ready to start again.`,
        ],
      },
      {
        title: "Coefficient of performance",
        points: [
          t`Refrigerator: $\text{COP} = \dfrac{Q_C}{W}$, the heat removed per joule of work.`,
          t`Heat pump: $\text{COP} = \dfrac{Q_H}{W}$, the heat delivered per joule of work.`,
          t`For a Carnot refrigerator, $\dfrac{Q_C}{W} = \dfrac{T_C}{T_H - T_C}$; for a Carnot heat pump, $\dfrac{T_H}{T_H - T_C}$.`,
          t`The COP can exceed 1: moving heat takes less work than making it.`,
          t`The smaller the temperature gap, the higher the COP.`,
        ],
      },
    ],
    worked: {
      prompt: t`A Carnot refrigerator keeps its inside at $270\ \mathrm{K}$ in a kitchen at $300\ \mathrm{K}$. How much heat does it remove from inside for each $100\ \mathrm{J}$ of work, and how much does it dump into the kitchen?`,
      steps: [
        t`$\text{COP} = \dfrac{T_C}{T_H - T_C} = \dfrac{270}{30} = 9$.`,
        t`$Q_C = \text{COP} \times W = 9 \times 100 = 900\ \mathrm{J}$ removed from inside.`,
        t`$Q_H = Q_C + W = 900 + 100$.`,
        t`$Q_H = 1000\ \mathrm{J}$ dumped into the kitchen.`,
      ],
      answer: t`$Q_C = 900\ \mathrm{J}$, $Q_H = 1000\ \mathrm{J}$`,
    },
    visualSpec: t`Follow the refrigerant round the loop, watching heat go in at the evaporator inside and out at the condenser behind, with the compressor's work added.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Uses the heat pump's COP for a refrigerator.",
      remediation: t`A refrigerator's useful output is the heat removed from inside: $\text{COP} = \dfrac{Q_C}{W} = \dfrac{T_C}{T_H - T_C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: t`Takes the COP as $\dfrac{T_C}{T_H}$.`,
      remediation: t`The COP compares heat moved with work: $\dfrac{T_C}{T_H - T_C}$ for a refrigerator.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Gives the Carnot engine's efficiency instead.",
      remediation: t`$1 - \dfrac{T_C}{T_H}$ is an engine's efficiency. A refrigerator or heat pump is rated by its COP.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C12-M4",
      mistake: "Mixes up the condenser and the evaporator.",
      remediation: "The evaporator, inside, takes heat in; the condenser, outside, rejects it.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Thinks the refrigerant rejects heat inside the cold chamber.",
      remediation: "Inside, the refrigerant takes heat **in**; it rejects heat outside, in the condenser.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Thinks the compressor rejects the heat.",
      remediation: "The compressor does work on the refrigerant; the heat leaves in the condenser.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Uses the refrigerator's COP for a heat pump.",
      remediation: t`A heat pump's useful output is the heat delivered: $\text{COP} = \dfrac{Q_H}{W} = \dfrac{T_H}{T_H - T_C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: "Divides the work by the heat removed.",
      remediation: t`$\text{COP} = \dfrac{Q_C}{W}$: heat moved per joule of work.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M9",
      mistake: "Divides by the heat rejected instead of the work.",
      remediation: t`The COP compares heat removed with the work put in: $\dfrac{Q_C}{W}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M10",
      mistake: "Thinks a heat pump makes heat from electricity, like a heater.",
      remediation: "A heat pump moves heat from outdoors; it delivers more heat than the work it uses.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M11",
      mistake: "Gets the direction a heat pump moves heat wrong.",
      remediation: "To warm the room, it moves heat from the colder outdoors into the warmer room.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M12",
      mistake: "Thinks a heat pump needs no work.",
      remediation: "Heat will not flow by itself from cold to hot (the second law); the pump needs work.",
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.7" },
      stem: t`A Carnot refrigerator works between $250\ \mathrm{K}$ and $300\ \mathrm{K}$. What is its coefficient of performance?`,
      verify: { kind: "value", inputs: { T_C: "250", T_H: "300" }, params: { ask: "cop_T", kind: "fridge" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C12-M1", value: "6" },
        { key: "B", text: t`$0.833$`, correct: false, misconceptionId: "C12-M2", value: "0.833000000000000" },
        { key: "C", text: t`$0.167$`, correct: false, misconceptionId: "C12-M3", value: "0.167000000000000" },
        { key: "D", text: t`$5$`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`$\text{COP} = \dfrac{T_C}{T_H - T_C} = \dfrac{250}{300 - 250}$.`,
          t`$\text{COP} = \dfrac{250}{50} = 5$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.1 (v)" },
      stem: t`During a refrigeration cycle, where does the refrigerant reject heat?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reject" } },
      options: [
        { key: "A", text: t`In the compressor`, correct: false, misconceptionId: "C12-M6", value: "compressor" },
        { key: "B", text: t`In the condenser, the coils outside the cold chamber`, correct: true, value: "condenser" },
        { key: "C", text: t`In the evaporator`, correct: false, misconceptionId: "C12-M4", value: "evaporator" },
        { key: "D", text: t`Inside the cold chamber`, correct: false, misconceptionId: "C12-M5", value: "cold_chamber" },
      ],
      solution: {
        steps: [
          t`The hot, compressed refrigerant passes through the condenser coils outside the cold chamber.`,
          t`There it rejects heat to the room and liquefies.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "authored" },
      stem: t`Each cycle, a refrigerator removes $600\ \mathrm{J}$ of heat from its inside using $150\ \mathrm{J}$ of work. What is its coefficient of performance?`,
      verify: { kind: "value", inputs: { Q_C: "600", W: "150" }, params: { ask: "cop_Q" } },
      options: [
        { key: "A", text: t`$0.8$`, correct: false, misconceptionId: "C12-M9", value: "0.800000000000000" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C12-M1", value: "5" },
        { key: "D", text: t`$0.25$`, correct: false, misconceptionId: "C12-M8", value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`$\text{COP} = \dfrac{Q_C}{W} = \dfrac{600}{150}$.`,
          t`$\text{COP} = 4$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`How does a heat pump warm a room in winter?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pump" } },
      options: [
        { key: "A", text: t`It lets heat flow by itself from outdoors into the room, with no work`, correct: false, misconceptionId: "C12-M12", value: "no_work" },
        { key: "B", text: t`It uses work to move heat from the colder outdoors into the warmer room`, correct: true, value: "moves_heat_in" },
        { key: "C", text: t`It turns all the electrical energy it uses into heat, like a heater`, correct: false, misconceptionId: "C12-M10", value: "makes_heat" },
        { key: "D", text: t`It moves heat from the warmer room out to the colder outdoors`, correct: false, misconceptionId: "C12-M11", value: "moves_heat_out" },
      ],
      solution: {
        steps: [
          t`Heat will not flow by itself from the cold outdoors into the warm room.`,
          t`A heat pump uses work to move it there, delivering more heat than the work it uses.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`A Carnot heat pump keeps a room at $300\ \mathrm{K}$ while the outdoors is at $270\ \mathrm{K}$. What is its coefficient of performance?`,
      verify: { kind: "value", inputs: { T_C: "270", T_H: "300" }, params: { ask: "cop_T", kind: "pump" } },
      options: [
        { key: "A", text: t`$0.1$`, correct: false, misconceptionId: "C12-M3", value: "0.100000000000000" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C12-M7", value: "9" },
        { key: "C", text: t`$10$`, correct: true, value: "10" },
        { key: "D", text: t`$0.9$`, correct: false, misconceptionId: "C12-M2", value: "0.900000000000000" },
      ],
      solution: {
        steps: [
          t`A heat pump's useful output is the heat delivered: $\text{COP} = \dfrac{T_H}{T_H - T_C}$.`,
          t`$\text{COP} = \dfrac{300}{300 - 270} = 10$.`,
        ],
      },
    },
  ],
};
