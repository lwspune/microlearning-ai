import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Villagers in many parts of India never cut the trees of their sacred grove. Is that conservation?`,
    reveal: t`Yes: in situ conservation. The forest and everything in it is protected in its own place.`,
  },
  explanation: {
    intuition: [
      t`Conservation keeps species and habitats from being lost.`,
      t`**In situ**: in the natural habitat.`,
      t`**Ex situ**: outside it.`,
    ],
    formal: [
      {
        title: "In situ and ex situ",
        points: [
          t`In situ: national parks (Kanha), sanctuaries, biosphere reserves, **sacred groves**.`,
          t`Ex situ: zoos, botanical gardens, seed banks, **tissue culture**.`,
          t`**Cryopreservation**: gametes stored at **−196 °C**.`,
        ],
      },
      {
        title: "People and traditions",
        points: [
          t`Indian traditions protect sacred groves and sacred animals.`,
          t`**Saalumara Thimmakka** planted and tended 385 banyan trees along a highway.`,
          t`Utilitarian reasons: food, medicine, timber, ecosystem services.`,
        ],
      },
    ],
    worked: {
      prompt: t`Seeds of rare rice varieties are kept in a cold store. Which kind of conservation is this?`,
      steps: [
        t`The seeds are outside their habitat.`,
        t`That is ex situ.`,
      ],
      answer: t`Ex situ`,
    },
    visualSpec: t`Two columns: in situ (park, sacred grove) and ex situ (zoo, seed bank, liquid nitrogen tank).`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks zoos.",
      remediation: "Zoos are ex situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks tissue culture.",
      remediation: "Tissue culture is ex situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks cryopreservation.",
      remediation: "Cryopreservation is ex situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks zoos.",
      remediation: "That is ex situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks seed banks.",
      remediation: "That is ex situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks freezing.",
      remediation: "That is ex situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives −20 °C.",
      remediation: "That is a freezer.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Gives 0 °C.",
      remediation: "That is ice.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Gives −80 °C.",
      remediation: "It is liquid nitrogen, −196 °C.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks tissue culture.",
      remediation: "That grows tissues.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks sacred groves.",
      remediation: "Those are in situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks national parks.",
      remediation: "Those are in situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says Chipko.",
      remediation: "Chipko was led by others.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says seed bank.",
      remediation: "She planted trees.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says national park.",
      remediation: "She planted trees.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q1(2)" },
      stem: t`Select the odd one out on the basis of *ex situ* conservation.`,
      verify: { kind: "value", inputs: {  }, params: { q: "odd" } },
      options: [
        { key: "A", text: t`Tissue culture`, correct: false, misconceptionId: "C03-M2", value: "tissue_culture_t" },
        { key: "B", text: t`Cryopreservation`, correct: false, misconceptionId: "C03-M3", value: "cryopreservation_t" },
        { key: "C", text: t`Sacred groves`, correct: true, value: "sacred_groves" },
        { key: "D", text: t`Zoological park`, correct: false, misconceptionId: "C03-M1", value: "zoo_park" },
      ],
      solution: {
        steps: [
          t`Protected at home.`,
          t`Sacred groves.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2026 Q. 23" },
      stem: t`In situ conservation protects a species`,
      verify: { kind: "value", inputs: {  }, params: { q: "insitu" } },
      options: [
        { key: "A", text: t`in a seed bank`, correct: false, misconceptionId: "C03-M5", value: "seed_bank" },
        { key: "B", text: t`by freezing its gametes`, correct: false, misconceptionId: "C03-M6", value: "cryopreservation_t" },
        { key: "C", text: t`in its natural habitat, as in Kanha National Park`, correct: true, value: "natural_habitat" },
        { key: "D", text: t`in a zoo`, correct: false, misconceptionId: "C03-M4", value: "zoo_park" },
      ],
      solution: {
        steps: [
          t`In the natural habitat.`,
          t`Natural habitat.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q2(2)" },
      stem: t`In cryopreservation, gametes are stored at`,
      verify: { kind: "value", inputs: {  }, params: { q: "temp" } },
      options: [
        { key: "A", text: t`−20 °C`, correct: false, misconceptionId: "C03-M7", value: "minus20" },
        { key: "B", text: t`0 °C`, correct: false, misconceptionId: "C03-M8", value: "zero_c" },
        { key: "C", text: t`−80 °C`, correct: false, misconceptionId: "C03-M9", value: "minus80" },
        { key: "D", text: t`−196 °C`, correct: true, value: "minus196" },
      ],
      solution: {
        steps: [
          t`Liquid nitrogen.`,
          t`−196 °C.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q2(2)" },
      stem: t`Storing the gametes of endangered species at very low temperature is`,
      verify: { kind: "value", inputs: {  }, params: { q: "gametes" } },
      options: [
        { key: "A", text: t`a sacred grove`, correct: false, misconceptionId: "C03-M11", value: "sacred_groves" },
        { key: "B", text: t`a national park`, correct: false, misconceptionId: "C03-M12", value: "national_park" },
        { key: "C", text: t`cryopreservation`, correct: true, value: "cryopreservation_t" },
        { key: "D", text: t`tissue culture`, correct: false, misconceptionId: "C03-M10", value: "tissue_culture_t" },
      ],
      solution: {
        steps: [
          t`Frozen gametes.`,
          t`Cryopreservation.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q4(2)" },
      stem: t`Saalumara Thimmakka of Karnataka is honoured for`,
      verify: { kind: "value", inputs: {  }, params: { q: "thimmakka" } },
      options: [
        { key: "A", text: t`planting and tending 385 banyan trees along a highway`, correct: true, value: "banyan_planting" },
        { key: "B", text: t`leading the Chipko movement`, correct: false, misconceptionId: "C03-M13", value: "chipko_leader" },
        { key: "C", text: t`founding a seed bank`, correct: false, misconceptionId: "C03-M14", value: "seed_bank_founder" },
        { key: "D", text: t`founding a national park`, correct: false, misconceptionId: "C03-M15", value: "park_founder" },
      ],
      solution: {
        steps: [
          t`385 banyan trees.`,
          t`Planting banyan trees.`,
        ],
      },
    },
  ],
};
