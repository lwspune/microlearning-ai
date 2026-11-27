import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A Mumbai zoo keeps penguins, birds of the cold south. Why don't they just die in the heat?`,
    reveal: t`They are acclimatised and kept in conditions close to their natural home, so they can survive and be studied.`,
  },
  explanation: {
    intuition: [
      t`Some taxonomic aids keep organisms **alive**.`,
      t`They help study, teaching and conservation.`,
      t`Each gives conditions close to the natural habitat.`,
    ],
    formal: [
      {
        title: "Gardens and zoos",
        points: [
          t`**Botanical gardens** grow labelled living plants from around the world, e.g. Kolkata (a banyan over 255 years old) and Kew in England.`,
          t`Green houses give plants from other regions controlled conditions.`,
          t`**Zoological parks** keep wild animals in captivity with habitat-like conditions; animals are **acclimatised**.`,
        ],
      },
      {
        title: "Biodiversity parks",
        points: [
          t`An ecological assemblage of plants and animals.`,
          t`It forms a **self-sustaining** community on degraded land.`,
          t`Example: Late Uttamrao Patil biodiversity park, Gureghar, Mahabaleshwar.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does each plant in a botanical garden carry a label?`,
      steps: [
        t`The label gives scientific and common names.`,
        t`That helps visitors identify it.`,
      ],
      answer: t`For identification`,
    },
    visualSpec: t`Three panels: a labelled botanical garden, a zoo enclosure, a biodiversity park on once-barren land.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks zoo.",
      remediation: "Zoos keep animals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks biodiversity park.",
      remediation: "That is a self-sustaining community.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks herbarium.",
      remediation: "A herbarium keeps dried plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks botanical garden.",
      remediation: "That is planted and tended.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks zoo.",
      remediation: "Zoos keep animals in captivity.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks museum.",
      remediation: "Museums keep preserved specimens.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says to breed faster.",
      remediation: "It is to survive.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says to tame them.",
      remediation: "It is to survive.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says not needed.",
      remediation: "Their home is very different.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says no water.",
      remediation: "Plants still need water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says hiding.",
      remediation: "It is for conditions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says faster growth.",
      remediation: "It copies the home climate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks penguins.",
      remediation: "Penguins are in a zoo.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks herbarium.",
      remediation: "It is a living garden.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks tea.",
      remediation: "It is a botanical garden.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q2" },
      stem: t`Living plants from different parts of the world, grown systematically and labelled, make up a`,
      verify: { kind: "value", inputs: {  }, params: { q: "garden" } },
      options: [
        { key: "A", text: t`biodiversity park`, correct: false, misconceptionId: "C03-M2", value: "biodiversity_park_a" },
        { key: "B", text: t`herbarium`, correct: false, misconceptionId: "C03-M3", value: "herbarium_a" },
        { key: "C", text: t`botanical garden`, correct: true, value: "botanical_garden_a" },
        { key: "D", text: t`zoological park`, correct: false, misconceptionId: "C03-M1", value: "zoological_park_a" },
      ],
      solution: {
        steps: [
          t`Living plants, labelled.`,
          t`Botanical garden.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q2" },
      stem: t`A self-sustaining community of plants and animals developed on degraded land, as at Gureghar near Mahabaleshwar, is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "bpark" } },
      options: [
        { key: "A", text: t`zoological park`, correct: false, misconceptionId: "C03-M5", value: "zoological_park_a" },
        { key: "B", text: t`museum`, correct: false, misconceptionId: "C03-M6", value: "museum_a" },
        { key: "C", text: t`biodiversity park`, correct: true, value: "biodiversity_park_a" },
        { key: "D", text: t`botanical garden`, correct: false, misconceptionId: "C03-M4", value: "botanical_garden_a" },
      ],
      solution: {
        steps: [
          t`Self-sustaining on degraded land.`,
          t`Biodiversity park.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(A)" },
      stem: t`Humboldt penguins in a Mumbai zoo had to be acclimatised, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "penguins" } },
      options: [
        { key: "A", text: t`it makes them breed faster`, correct: false, misconceptionId: "C03-M7", value: "breed_faster" },
        { key: "B", text: t`it tames them`, correct: false, misconceptionId: "C03-M8", value: "to_tame" },
        { key: "C", text: t`it is not really needed`, correct: false, misconceptionId: "C03-M9", value: "not_needed" },
        { key: "D", text: t`each animal is suited to its natural habitat and must adjust slowly to new conditions`, correct: true, value: "suited_to_habitat" },
      ],
      solution: {
        steps: [
          t`Suited to home conditions.`,
          t`They must adjust slowly.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(D)" },
      stem: t`A botanical garden has a green house so that plants from other regions`,
      verify: { kind: "value", inputs: {  }, params: { q: "greenhouse" } },
      options: [
        { key: "A", text: t`are hidden from visitors`, correct: false, misconceptionId: "C03-M11", value: "hide_plants" },
        { key: "B", text: t`simply grow faster`, correct: false, misconceptionId: "C03-M12", value: "faster_growth_only" },
        { key: "C", text: t`get controlled conditions like their natural habitat`, correct: true, value: "controlled_conditions" },
        { key: "D", text: t`need no water`, correct: false, misconceptionId: "C03-M10", value: "no_water_needed" },
      ],
      solution: {
        steps: [
          t`Climate control.`,
          t`Controlled conditions.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q2" },
      stem: t`The botanical garden at Kolkata is famous for its`,
      verify: { kind: "value", inputs: {  }, params: { q: "kolkata" } },
      options: [
        { key: "A", text: t`banyan tree more than 255 years old`, correct: true, value: "old_banyan" },
        { key: "B", text: t`penguins`, correct: false, misconceptionId: "C03-M13", value: "penguins_k" },
        { key: "C", text: t`herbarium alone`, correct: false, misconceptionId: "C03-M14", value: "herbarium_only" },
        { key: "D", text: t`tea estate`, correct: false, misconceptionId: "C03-M15", value: "tea_estate" },
      ],
      solution: {
        steps: [
          t`A very old tree.`,
          t`Its old banyan.`,
        ],
      },
    },
  ],
};
