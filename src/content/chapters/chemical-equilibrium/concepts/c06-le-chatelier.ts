import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Squeeze a syringe of brown $\ce{NO2}$ and $\ce{N2O4}$ and the colour first darkens, then fades. Why does the mixture fight back?`,
    reveal: t`Le Chatelier: an equilibrium shifts to oppose a change. Higher pressure favours fewer gas molecules, so brown $\ce{NO2}$ turns into colourless $\ce{N2O4}$.`,
  },
  explanation: {
    intuition: [
      t`Disturb an equilibrium and it shifts to undo the disturbance.`,
      t`Add a substance: the equilibrium uses it up; remove one: it makes more.`,
      t`Raise the pressure: it shifts to fewer gas moles.`,
      t`Heat it: it shifts in the endothermic direction.`,
    ],
    formal: [
      {
        title: "Changes",
        points: [
          t`Concentration: shifts away from an added species.`,
          t`Pressure: shifts toward fewer gas moles; no shift if $\Delta n = 0$.`,
          t`Temperature: heating favours the endothermic direction and changes K.`,
          t`Catalyst: no shift; equilibrium is reached faster.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{N2O4 <=> 2NO2}$ (endothermic), what does heating do?`,
      steps: [
        t`Heating favours the endothermic, forward direction.`,
        t`More $\ce{NO2}$: the gas darkens.`,
      ],
      answer: t`Shifts right`,
    },
    visualSpec: t`Push on an equilibrium in different ways and watch it lean back.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Increases the volume.",
      remediation: "Lower pressure favours more gas moles: more B.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Adds a catalyst.",
      remediation: "A catalyst does not shift equilibrium.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Removes B.",
      remediation: "Removing B shifts forward, using up A.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Removes NO.",
      remediation: "Removing a reactant shifts left.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Adds NOCl.",
      remediation: "Adding product shifts left, using some NOCl up.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Removes $\ce{Cl2}$.`,
      remediation: "Removing a reactant shifts left.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Shifts right.",
      remediation: "Equal gas moles on both sides: no shift.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Shifts left.",
      remediation: "Two moles of gas on each side: volume has no effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says it cannot be predicted.",
      remediation: t`$\Delta n = 0$: it is unaltered.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks K rises.",
      remediation: "Pressure shifts the position; only temperature changes K.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks K falls.",
      remediation: "K depends only on temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks K becomes zero.",
      remediation: "K is unchanged by pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks a catalyst shifts it right.",
      remediation: "A catalyst speeds both directions equally.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Thinks a catalyst raises K.",
      remediation: "K is unchanged by a catalyst.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks a catalyst shifts it left.",
      remediation: "No shift; just a faster approach.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.1 (B)" },
      stem: t`For $\ce{A <=> 2B}$ + heat, the number of A molecules increases if`,
      verify: { kind: "value", inputs: {  }, params: { q: "more_a" } },
      options: [
        { key: "A", text: t`the volume is increased`, correct: false, misconceptionId: "C06-M1", value: "increase_volume" },
        { key: "B", text: t`the temperature is raised`, correct: true, value: "raise_temperature" },
        { key: "C", text: t`B is removed`, correct: false, misconceptionId: "C06-M3", value: "remove_b" },
        { key: "D", text: t`a catalyst is added`, correct: false, misconceptionId: "C06-M2", value: "add_catalyst" },
      ],
      solution: {
        steps: [
          t`The forward reaction releases heat.`,
          t`Heating favours the backward reaction: more A.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.1 (C)" },
      stem: t`For $\ce{Cl2(g) + 2NO(g) <=> 2NOCl(g)}$, the concentration of NOCl increases on`,
      verify: { kind: "value", inputs: {  }, params: { q: "nocl" } },
      options: [
        { key: "A", text: t`adding NOCl`, correct: false, misconceptionId: "C06-M5", value: "add_nocl" },
        { key: "B", text: t`removing NO`, correct: false, misconceptionId: "C06-M4", value: "remove_no" },
        { key: "C", text: t`adding $\ce{Cl2}$`, correct: true, value: "add_cl2" },
        { key: "D", text: t`removing $\ce{Cl2}$`, correct: false, misconceptionId: "C06-M6", value: "remove_cl2" },
      ],
      solution: {
        steps: [
          t`Adding $\ce{Cl2}$ raises a reactant.`,
          t`The equilibrium shifts right: more NOCl.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`The volume of $\ce{H2(g) + I2(g) <=> 2HI(g)}$ is increased at constant temperature. The equilibrium`,
      verify: { kind: "value", inputs: {  }, params: { q: "volume" } },
      options: [
        { key: "A", text: t`cannot be predicted`, correct: false, misconceptionId: "C06-M9", value: "unpredictable" },
        { key: "B", text: t`shifts to the right`, correct: false, misconceptionId: "C06-M7", value: "shifts_right" },
        { key: "C", text: t`shifts to the left`, correct: false, misconceptionId: "C06-M8", value: "shifts_left" },
        { key: "D", text: t`is unaltered`, correct: true, value: "unaltered" },
      ],
      solution: {
        steps: [
          t`2 moles of gas on each side.`,
          t`Volume change: no shift.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (F)" },
      stem: t`Changing the pressure on a gaseous equilibrium`,
      verify: { kind: "value", inputs: {  }, params: { q: "pressure_k" } },
      options: [
        { key: "A", text: t`leaves $K$ unchanged: only temperature changes $K$`, correct: true, value: "k_unchanged" },
        { key: "B", text: t`makes $K$ zero`, correct: false, misconceptionId: "C06-M12", value: "k_zero" },
        { key: "C", text: t`increases $K$`, correct: false, misconceptionId: "C06-M10", value: "k_rises" },
        { key: "D", text: t`decreases $K$`, correct: false, misconceptionId: "C06-M11", value: "k_falls" },
      ],
      solution: {
        steps: [
          t`Pressure only shifts the position.`,
          t`K changes only with temperature.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.3 (C)" },
      stem: t`Adding a catalyst to an equilibrium mixture`,
      verify: { kind: "value", inputs: {  }, params: { q: "catalyst" } },
      options: [
        { key: "A", text: t`shifts it to the right`, correct: false, misconceptionId: "C06-M13", value: "shifts_right" },
        { key: "B", text: t`does not shift it, but equilibrium is reached faster`, correct: true, value: "no_shift_faster" },
        { key: "C", text: t`increases $K$`, correct: false, misconceptionId: "C06-M14", value: "raises_k" },
        { key: "D", text: t`shifts it to the left`, correct: false, misconceptionId: "C06-M15", value: "shifts_left" },
      ],
      solution: {
        steps: [
          t`A catalyst speeds both reactions equally.`,
          t`No shift; faster approach.`,
        ],
      },
    },
  ],
};
