import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Ice melts into water and water freezes back into ice. A matchstick burns, but its ash and smoke never turn back into a matchstick. What makes the two changes different?`,
    reveal: t`Melting makes no new substance, so it reverses easily; burning makes new substances, so it cannot simply be undone.`,
  },
  explanation: {
    intuition: [
      t`A **physical change** alters the form, size or state of a substance.`,
      t`No new substance forms, and the change is usually easy to reverse.`,
      t`A **chemical change** turns substances into new ones with new properties.`,
      t`Signs: a new colour, a gas, a precipitate, or heat and light given out.`,
    ],
    formal: [
      {
        title: "Examples",
        points: [
          t`Physical: melting, boiling, dissolving sugar, crushing chalk, magnetising iron.`,
          t`Chemical: burning, rusting, curdling milk, cooking food, digestion.`,
          t`Mass is conserved in both kinds of change.`,
        ],
      },
      {
        title: "Both together",
        points: [
          t`A burning candle shows both.`,
          t`The wax melts and its vapour forms: physical.`,
          t`The vapour burns to $\ce{CO2}$ and water: chemical.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is the setting of curd from milk a physical or a chemical change?`,
      steps: [
        t`Curd has a new taste and texture.`,
        t`A new substance forms and milk cannot be got back.`,
        t`So it is a chemical change.`,
      ],
      answer: t`Chemical`,
    },
    visualSpec: t`Cards for everyday changes that the learner sorts into physical and chemical.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks burning paper.",
      remediation: "Burning makes ash and gases: chemical.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks rusting.",
      remediation: "Rust is a new substance: chemical.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks cooking an egg.",
      remediation: "Cooking changes the egg's proteins for good: chemical.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks melting wax.",
      remediation: "Melted wax is still wax: physical.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks boiling water.",
      remediation: "Steam is still water: physical.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks crushing chalk.",
      remediation: "Chalk powder is still chalk: physical.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Takes a change of shape as a sign.",
      remediation: "A new shape is still the same substance.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Takes a change of state as a sign.",
      remediation: "Melting and boiling make no new substance.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Takes dissolving as a sign.",
      remediation: "Dissolved sugar is still sugar; evaporating gets it back.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Calls the candle physical only.",
      remediation: "The wax also burns to new substances.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Calls the candle chemical only.",
      remediation: "The wax also melts, a physical change.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Calls it neither.",
      remediation: "Melting and burning are both changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Calls physical changes irreversible.",
      remediation: "Physical changes make no new substance and usually reverse.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Thinks they always absorb heat.",
      remediation: "Freezing and condensing give out heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Thinks mass changes.",
      remediation: "Mass is conserved in every change.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`Which of these is a physical change?`,
      verify: { kind: "value", inputs: {  }, params: { q: "physical" } },
      options: [
        { key: "A", text: t`dissolving sugar in water`, correct: true, value: "dissolving_sugar" },
        { key: "B", text: t`burning paper`, correct: false, misconceptionId: "C08-M1", value: "burning_paper" },
        { key: "C", text: t`rusting of iron`, correct: false, misconceptionId: "C08-M2", value: "rusting" },
        { key: "D", text: t`cooking an egg`, correct: false, misconceptionId: "C08-M3", value: "cooking_egg" },
      ],
      solution: {
        steps: [
          t`Dissolved sugar is still sugar.`,
          t`No new substance: physical.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`Which of these is a chemical change?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chemical" } },
      options: [
        { key: "A", text: t`melting of wax`, correct: false, misconceptionId: "C08-M4", value: "melting_wax" },
        { key: "B", text: t`boiling of water`, correct: false, misconceptionId: "C08-M5", value: "boiling_water" },
        { key: "C", text: t`crushing of chalk`, correct: false, misconceptionId: "C08-M6", value: "crushing_chalk" },
        { key: "D", text: t`curdling of milk`, correct: true, value: "curdling_milk" },
      ],
      solution: {
        steps: [
          t`Curd is a new substance.`,
          t`It cannot turn back into milk: chemical.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`Which observation shows that a chemical change has taken place?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sign" } },
      options: [
        { key: "A", text: t`the substance changes shape`, correct: false, misconceptionId: "C08-M7", value: "new_shape" },
        { key: "B", text: t`the substance changes state`, correct: false, misconceptionId: "C08-M8", value: "new_state" },
        { key: "C", text: t`the substance dissolves`, correct: false, misconceptionId: "C08-M9", value: "dissolves" },
        { key: "D", text: t`a new substance with new properties forms`, correct: true, value: "new_substance" },
      ],
      solution: {
        steps: [
          t`Only a chemical change makes new substances.`,
          t`A new substance with new properties is the sign.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A candle burns. The changes taking place are`,
      verify: { kind: "value", inputs: {  }, params: { q: "candle" } },
      options: [
        { key: "A", text: t`chemical only`, correct: false, misconceptionId: "C08-M11", value: "chemical_only" },
        { key: "B", text: t`neither physical nor chemical`, correct: false, misconceptionId: "C08-M12", value: "neither_kind" },
        { key: "C", text: t`both physical (wax melts) and chemical (wax burns)`, correct: true, value: "both_kinds" },
        { key: "D", text: t`physical only`, correct: false, misconceptionId: "C08-M10", value: "physical_only" },
      ],
      solution: {
        steps: [
          t`The wax melts: physical.`,
          t`The wax vapour burns: chemical.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`A physical change is usually`,
      verify: { kind: "value", inputs: {  }, params: { q: "nature" } },
      options: [
        { key: "A", text: t`one that changes the total mass`, correct: false, misconceptionId: "C08-M15", value: "mass_changes" },
        { key: "B", text: t`reversible, with no new substance formed`, correct: true, value: "reversible_no_new" },
        { key: "C", text: t`irreversible, with a new substance formed`, correct: false, misconceptionId: "C08-M13", value: "irreversible_new" },
        { key: "D", text: t`one that always absorbs heat`, correct: false, misconceptionId: "C08-M14", value: "absorb_heat" },
      ],
      solution: {
        steps: [
          t`Physical changes make no new substance.`,
          t`So they usually reverse.`,
        ],
      },
    },
  ],
};
