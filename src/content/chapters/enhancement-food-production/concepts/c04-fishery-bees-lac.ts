import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Honey, fish and a shiny wood polish all come from animals farmers raise. Which animal makes the polish?`,
    reveal: t`A tiny insect, the lac insect, which coats twigs with resin that becomes shellac.`,
  },
  explanation: {
    intuition: [
      t`Animal husbandry includes fisheries, bee keeping and lac culture.`,
      t`Each gives food or useful products.`,
      t`Each needs care in rearing.`,
    ],
    formal: [
      {
        title: "Fisheries and bees",
        points: [
          t`Fisheries: inland, marine and **estuarine** (where a river meets the sea, e.g. Sunderbans).`,
          t`By-products: fish oil, fish meal, guano, isinglass.`,
          t`Bees: *Apis dorsata* (wild rock bee), *A. florea* (little bee), *A. mellifera* and *A. indica* (domesticated).`,
        ],
      },
      {
        title: "Lac culture",
        points: [
          t`The female lac insect *Tachardia lacca* secretes lac on twigs of ber, peepal, palas.`,
          t`Washed and filtered lac is **shellac**.`,
          t`Used in varnishes, polish and sealing wax.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is lac washed and filtered before use?`,
      steps: [
        t`Raw lac is mixed with twigs and insects.`,
        t`Purifying it gives shellac.`,
      ],
      answer: t`To make pure shellac`,
    },
    visualSpec: t`A twig coated in lac with the insects embedded.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks a lake.",
      remediation: "An estuary meets the sea.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks deep sea.",
      remediation: "An estuary is coastal.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks a pond.",
      remediation: "An estuary meets the sea.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks *A. mellifera*.",
      remediation: "That is the European bee.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks *A. indica*.",
      remediation: "That is the Indian bee.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks *A. florea*.",
      remediation: "That is the little bee.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks *Apis*.",
      remediation: "*Apis* makes honey.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks *Bombyx*.",
      remediation: "*Bombyx* makes silk.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks *Culex*.",
      remediation: "*Culex* is a mosquito.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks raw lac.",
      remediation: "Shellac is purified.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks beeswax.",
      remediation: "Beeswax is from bees.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks silk gum.",
      remediation: "Silk gum is from silkworms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks lac.",
      remediation: "These come from fish.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks sericulture.",
      remediation: "These come from fish.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks bee keeping.",
      remediation: "These come from fish.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(8)" },
      stem: t`An estuary is a place where`,
      verify: { kind: "value", inputs: {  }, params: { q: "estuary" } },
      options: [
        { key: "A", text: t`the sea is deepest`, correct: false, misconceptionId: "C04-M2", value: "deep_sea" },
        { key: "B", text: t`a farm pond is dug`, correct: false, misconceptionId: "C04-M3", value: "farm_pond" },
        { key: "C", text: t`a river meets the sea`, correct: true, value: "river_meets_sea" },
        { key: "D", text: t`a freshwater lake forms`, correct: false, misconceptionId: "C04-M1", value: "freshwater_lake" },
      ],
      solution: {
        steps: [
          t`River meets sea.`,
          t`An estuary.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(7)" },
      stem: t`The wild rock bee is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rockbee" } },
      options: [
        { key: "A", text: t`*Apis mellifera*`, correct: false, misconceptionId: "C04-M4", value: "apis_mellifera" },
        { key: "B", text: t`*Apis indica*`, correct: false, misconceptionId: "C04-M5", value: "apis_indica" },
        { key: "C", text: t`*Apis florea*`, correct: false, misconceptionId: "C04-M6", value: "apis_florea" },
        { key: "D", text: t`*Apis dorsata*`, correct: true, value: "apis_dorsata" },
      ],
      solution: {
        steps: [
          t`The wild rock bee.`,
          t`*Apis dorsata*.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2024 Q. 26" },
      stem: t`Lac is secreted by`,
      verify: { kind: "value", inputs: {  }, params: { q: "lac" } },
      options: [
        { key: "A", text: t`*Bombyx mori*`, correct: false, misconceptionId: "C04-M8", value: "bombyx_mori" },
        { key: "B", text: t`*Culex*`, correct: false, misconceptionId: "C04-M9", value: "culex_m" },
        { key: "C", text: t`*Tachardia lacca*`, correct: true, value: "tachardia_lacca" },
        { key: "D", text: t`*Apis mellifera*`, correct: false, misconceptionId: "C04-M7", value: "apis_mellifera" },
      ],
      solution: {
        steps: [
          t`The lac insect.`,
          t`*Tachardia lacca*.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(9)" },
      stem: t`Shellac is`,
      verify: { kind: "value", inputs: {  }, params: { q: "shellac" } },
      options: [
        { key: "A", text: t`raw lac on the twigs`, correct: false, misconceptionId: "C04-M10", value: "raw_lac" },
        { key: "B", text: t`beeswax`, correct: false, misconceptionId: "C04-M11", value: "beeswax_p" },
        { key: "C", text: t`silk gum`, correct: false, misconceptionId: "C04-M12", value: "silk_gum" },
        { key: "D", text: t`lac purified by washing and filtering`, correct: true, value: "purified_lac" },
      ],
      solution: {
        steps: [
          t`Washed and filtered lac.`,
          t`Purified lac.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(6)" },
      stem: t`Fish oil, fish meal, fish guano and isinglass are`,
      verify: { kind: "value", inputs: {  }, params: { q: "byproducts" } },
      options: [
        { key: "A", text: t`products of bee keeping`, correct: false, misconceptionId: "C04-M15", value: "honey_products" },
        { key: "B", text: t`by-products of fisheries`, correct: true, value: "fish_byproducts" },
        { key: "C", text: t`products of lac culture`, correct: false, misconceptionId: "C04-M13", value: "lac_products" },
        { key: "D", text: t`products of sericulture`, correct: false, misconceptionId: "C04-M14", value: "silk_products" },
      ],
      solution: {
        steps: [
          t`Guano, isinglass, meal.`,
          t`Fishery by-products.`,
        ],
      },
    },
  ],
};
