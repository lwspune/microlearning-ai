import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A crystal of salt grows in a solution, and a fire 'eats' fuel and spreads. Are they alive?`,
    reveal: t`No. A crystal grows only by adding material on its outside, and a fire cannot respond to its surroundings. Living things grow from within and respond.`,
  },
  explanation: {
    intuition: [
      t`Living things share some basic properties.`,
      t`Each is made of cells and is organised.`,
      t`Non-living things may show one property, never all.`,
    ],
    formal: [
      {
        title: "Properties of life",
        points: [
          t`**Growth** from within, by cell division and enlargement.`,
          t`**Metabolism**: all the chemical reactions that break down and build up molecules.`,
          t`**Reproduction** continues the race.`,
        ],
      },
      {
        title: "Responsiveness",
        points: [
          t`**Irritability** (responsiveness): reacting to changes around, as a cockroach does when touched.`,
          t`It is unique to living beings.`,
          t`**Decay** is breakdown after death: not a property of life.`,
        ],
      },
    ],
    worked: {
      prompt: t`A seed lies still for months. How can you tell it is alive?`,
      steps: [
        t`Give it water and warmth.`,
        t`A living seed responds by germinating and growing.`,
      ],
      answer: t`It germinates when conditions are right`,
    },
    visualSpec: t`A living cockroach reacting to a touch beside a salt crystal growing at its edges.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks metabolism.",
      remediation: "Metabolism is a property of life.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks growth.",
      remediation: "Growth is a property of life.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks reproduction.",
      remediation: "Reproduction is a property of life.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks metabolism.",
      remediation: "You cannot see metabolism quickly.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks growth.",
      remediation: "Growth is too slow to watch.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks reproduction.",
      remediation: "Reproduction is not instant.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says from outside.",
      remediation: "That is how crystals grow.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says only while young.",
      remediation: "Repair and cell growth go on.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says reversible.",
      remediation: "Growth is an increase.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says digestion alone.",
      remediation: "Digestion is one part.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says growth alone.",
      remediation: "Growth results from it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says excretion alone.",
      remediation: "Excretion is one part.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks mass increase.",
      remediation: "Crystals gain mass too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks movement.",
      remediation: "Rivers move too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks chemicals.",
      remediation: "Everything is made of chemicals.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q1(A)" },
      stem: t`Which is NOT a property of living beings?`,
      verify: { kind: "value", inputs: {  }, params: { q: "not_property" } },
      options: [
        { key: "A", text: t`Decay`, correct: true, value: "decay_p" },
        { key: "B", text: t`Metabolism`, correct: false, misconceptionId: "C01-M1", value: "metabolism_p" },
        { key: "C", text: t`Growth`, correct: false, misconceptionId: "C01-M2", value: "growth_p" },
        { key: "D", text: t`Reproduction`, correct: false, misconceptionId: "C01-M3", value: "reproduction_p" },
      ],
      solution: {
        steps: [
          t`It happens after death.`,
          t`Decay.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q1(C)" },
      stem: t`Students find two cockroaches in class and argue whether they are alive. Which property of life settles it?`,
      verify: { kind: "value", inputs: {  }, params: { q: "alive" } },
      options: [
        { key: "A", text: t`Irritability (response to a touch)`, correct: true, value: "irritability_p" },
        { key: "B", text: t`Metabolism`, correct: false, misconceptionId: "C01-M4", value: "metabolism_p" },
        { key: "C", text: t`Growth`, correct: false, misconceptionId: "C01-M5", value: "growth_p" },
        { key: "D", text: t`Reproduction`, correct: false, misconceptionId: "C01-M6", value: "reproduction_p" },
      ],
      solution: {
        steps: [
          t`Prod it and watch.`,
          t`Irritability.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Living things grow`,
      verify: { kind: "value", inputs: {  }, params: { q: "growth" } },
      options: [
        { key: "A", text: t`only while young`, correct: false, misconceptionId: "C01-M8", value: "only_young" },
        { key: "B", text: t`and then shrink back at will`, correct: false, misconceptionId: "C01-M9", value: "reversible_g" },
        { key: "C", text: t`from within, by cell division and enlargement`, correct: true, value: "from_within" },
        { key: "D", text: t`by adding material on the outside, like a crystal`, correct: false, misconceptionId: "C01-M7", value: "from_outside" },
      ],
      solution: {
        steps: [
          t`Cells divide and enlarge.`,
          t`From within.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q1(A)" },
      stem: t`Metabolism is`,
      verify: { kind: "value", inputs: {  }, params: { q: "metabolism" } },
      options: [
        { key: "A", text: t`all the chemical reactions that break down and build up molecules in the body`, correct: true, value: "break_and_build" },
        { key: "B", text: t`digestion alone`, correct: false, misconceptionId: "C01-M10", value: "only_digestion" },
        { key: "C", text: t`growth alone`, correct: false, misconceptionId: "C01-M11", value: "only_growth" },
        { key: "D", text: t`excretion alone`, correct: false, misconceptionId: "C01-M12", value: "only_excretion" },
      ],
      solution: {
        steps: [
          t`Breaking and building molecules.`,
          t`All chemical reactions in the body.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q1(C)" },
      stem: t`Which property is unique to living beings?`,
      verify: { kind: "value", inputs: {  }, params: { q: "unique" } },
      options: [
        { key: "A", text: t`Responsiveness to the surroundings`, correct: true, value: "responsiveness_p" },
        { key: "B", text: t`Increase in mass`, correct: false, misconceptionId: "C01-M13", value: "mass_increase" },
        { key: "C", text: t`Movement`, correct: false, misconceptionId: "C01-M14", value: "movement_only" },
        { key: "D", text: t`Being made of chemicals`, correct: false, misconceptionId: "C01-M15", value: "made_of_chemicals" },
      ],
      solution: {
        steps: [
          t`Only the living respond.`,
          t`Responsiveness.`,
        ],
      },
    },
  ],
};
