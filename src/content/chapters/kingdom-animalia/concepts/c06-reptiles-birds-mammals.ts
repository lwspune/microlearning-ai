import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Birds need to be light to fly. How has their skeleton been lightened?`,
    reveal: t`Their bones are hollow and filled with air, and toothless beaks replace heavy jaws.`,
  },
  explanation: {
    intuition: [
      t`Reptiles are the first true land vertebrates.`,
      t`Birds evolved for flight.`,
      t`Mammals feed young on milk.`,
    ],
    formal: [
      {
        title: "Reptiles and birds",
        points: [
          t`**Reptilia**: dry skin with **epidermal** scales; three-chambered heart, but the **crocodile**'s is nearly four.`,
          t`No pinna: only a tympanum.`,
          t`**Aves**: feathers, **beak without teeth**, **hollow (pneumatic) bones**, air sacs; scales on the legs; nucleated RBCs.`,
        ],
      },
      {
        title: "Mammals",
        points: [
          t`**Mammary glands**, modified sweat glands, give milk.`,
          t`Hair, and an external ear (**pinna**).`,
          t`Aquatic mammals include the dolphin and whale.`,
        ],
      },
    ],
    worked: {
      prompt: t`A dolphin lives in the sea and swims like a fish. Why is it a mammal?`,
      steps: [
        t`It feeds its young on milk.`,
        t`It breathes air with lungs.`,
      ],
      answer: t`It has mammary glands`,
    },
    visualSpec: t`A bird's hollow bone cut open beside a mammal's solid bone.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says scales.",
      remediation: "Birds have scales on their legs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says nucleated RBCs.",
      remediation: "Bird RBCs are nucleated.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says hollow bones.",
      remediation: "Bird bones are hollow.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks snake.",
      remediation: "Snakes have three chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks lizard.",
      remediation: "Lizards have three chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks turtle.",
      remediation: "Turtles have three chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says birds too.",
      remediation: "Birds have no pinna.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says reptiles too.",
      remediation: "Reptiles have a tympanum.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says all three.",
      remediation: "Only mammals have a pinna.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says both dermal.",
      remediation: "Snake scales are epidermal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says both epidermal.",
      remediation: "Fish scales are dermal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Reverses them.",
      remediation: "Fish scales are dermal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says salivary.",
      remediation: "Mammary glands are modified sweat glands.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says tear.",
      remediation: "Mammary glands are modified sweat glands.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says thyroid.",
      remediation: "Thyroid is endocrine.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q1(D)" },
      stem: t`Which is NOT true of birds?`,
      verify: { kind: "value", inputs: {  }, params: { q: "birds" } },
      options: [
        { key: "A", text: t`Presence of scales`, correct: false, misconceptionId: "C06-M1", value: "scales_b" },
        { key: "B", text: t`Nucleated RBCs`, correct: false, misconceptionId: "C06-M2", value: "nucleated_rbc" },
        { key: "C", text: t`Hollow bones`, correct: false, misconceptionId: "C06-M3", value: "hollow_bones" },
        { key: "D", text: t`Presence of teeth`, correct: true, value: "teeth_b" },
      ],
      solution: {
        steps: [
          t`Beaks have no teeth.`,
          t`Presence of teeth.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(A)" },
      stem: t`Which reptile has a nearly four-chambered heart?`,
      verify: { kind: "value", inputs: {  }, params: { q: "four" } },
      options: [
        { key: "A", text: t`Crocodile`, correct: true, value: "crocodile_a" },
        { key: "B", text: t`Snake`, correct: false, misconceptionId: "C06-M4", value: "snake_a" },
        { key: "C", text: t`Lizard`, correct: false, misconceptionId: "C06-M5", value: "lizard_a" },
        { key: "D", text: t`Turtle`, correct: false, misconceptionId: "C06-M6", value: "turtle_a" },
      ],
      solution: {
        steps: [
          t`Divided ventricle.`,
          t`Crocodile.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(C)" },
      stem: t`An external ear (pinna) is found in`,
      verify: { kind: "value", inputs: {  }, params: { q: "pinna" } },
      options: [
        { key: "A", text: t`mammals only`, correct: true, value: "mammals_only" },
        { key: "B", text: t`mammals and birds`, correct: false, misconceptionId: "C06-M7", value: "birds_too" },
        { key: "C", text: t`mammals and reptiles`, correct: false, misconceptionId: "C06-M8", value: "reptiles_too" },
        { key: "D", text: t`mammals, birds and reptiles`, correct: false, misconceptionId: "C06-M9", value: "all_three" },
      ],
      solution: {
        steps: [
          t`External ear.`,
          t`Mammals only.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(I)" },
      stem: t`Fish and snakes both have scales. They differ because`,
      verify: { kind: "value", inputs: {  }, params: { q: "scales" } },
      options: [
        { key: "A", text: t`snake scales are dermal, fish scales epidermal`, correct: false, misconceptionId: "C06-M12", value: "reversed_s" },
        { key: "B", text: t`snake scales are epidermal, fish scales dermal`, correct: true, value: "epidermal_vs_dermal" },
        { key: "C", text: t`both are dermal`, correct: false, misconceptionId: "C06-M10", value: "both_dermal" },
        { key: "D", text: t`both are epidermal`, correct: false, misconceptionId: "C06-M11", value: "both_epidermal" },
      ],
      solution: {
        steps: [
          t`Different origins.`,
          t`Snake epidermal, fish dermal.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q5(C)" },
      stem: t`Mammary glands, which make milk, are modified`,
      verify: { kind: "value", inputs: {  }, params: { q: "mammary" } },
      options: [
        { key: "A", text: t`sweat glands`, correct: true, value: "sweat_glands" },
        { key: "B", text: t`salivary glands`, correct: false, misconceptionId: "C06-M13", value: "salivary_glands" },
        { key: "C", text: t`tear glands`, correct: false, misconceptionId: "C06-M14", value: "tear_glands" },
        { key: "D", text: t`thyroid glands`, correct: false, misconceptionId: "C06-M15", value: "thyroid_glands" },
      ],
      solution: {
        steps: [
          t`Milk glands.`,
          t`Sweat glands.`,
        ],
      },
    },
  ],
};
