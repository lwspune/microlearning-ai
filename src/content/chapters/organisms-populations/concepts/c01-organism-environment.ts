import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A sea fish dropped into a river soon dies, though the water is clean. What kills it?`,
    reveal: t`The low salt: its body is built for sea water, and in fresh water it cannot control the water and salts in its body.`,
  },
  explanation: {
    intuition: [
      t`**Ecology** studies how organisms interact with each other and their surroundings.`,
      t`Living things make up the **biotic** factors; non-living ones the **abiotic** factors.`,
      t`Several interacting populations form a **community**.`,
    ],
    formal: [
      {
        title: "Factors",
        points: [
          t`Biotic: plants, animals, microbes (pathogens, parasites, predators).`,
          t`Abiotic: temperature, water, light, soil.`,
          t`Each organism is suited to a range of each factor.`,
        ],
      },
      {
        title: "Salinity",
        points: [
          t`Sea water: **30–35 ppt**; fresh water: below 5 ppt.`,
          t`**Stenohaline**: narrow salinity range (most marine fish).`,
          t`**Euryhaline**: wide range.`,
        ],
      },
    ],
    worked: {
      prompt: t`Salmon move between rivers and the sea. What does that make them?`,
      steps: [
        t`They tolerate both fresh and salt water.`,
        t`A wide salinity range is euryhaline.`,
      ],
      answer: t`Euryhaline`,
    },
    visualSpec: t`A habitat with biotic parts (plants, animals) and abiotic parts (sun, water, soil) labelled.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks abiotic.",
      remediation: "Abiotic means non-living.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks direct.",
      remediation: "That is not a category here.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks indirect.",
      remediation: "That is not a category here.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks niche.",
      remediation: "A niche is a role.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks population.",
      remediation: "A population is one species.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks ecosystem.",
      remediation: "An ecosystem includes the abiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says it survives.",
      remediation: "It is stenohaline.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says it grows faster.",
      remediation: "It suffers osmotic stress.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says it adapts.",
      remediation: "It cannot change quickly.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Gives below 5.",
      remediation: "That is fresh water.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Gives over 100.",
      remediation: "That is hypersaline.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Gives zero.",
      remediation: "Sea water is salty.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks stenohaline.",
      remediation: "That is a narrow range.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks eurythermal.",
      remediation: "That is about temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks stenothermal.",
      remediation: "That is about temperature.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q1(1)" },
      stem: t`Which factor of an ecosystem includes plants, animals and microorganisms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "biotic" } },
      options: [
        { key: "A", text: t`Biotic factor`, correct: true, value: "biotic_f" },
        { key: "B", text: t`Abiotic factor`, correct: false, misconceptionId: "C01-M1", value: "abiotic_f" },
        { key: "C", text: t`Direct factor`, correct: false, misconceptionId: "C01-M2", value: "direct_f" },
        { key: "D", text: t`Indirect factor`, correct: false, misconceptionId: "C01-M3", value: "indirect_f" },
      ],
      solution: {
        steps: [
          t`Living things.`,
          t`Biotic factor.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q1(2)" },
      stem: t`Individuals of different species living in the same habitat and interacting form a`,
      verify: { kind: "value", inputs: {  }, params: { q: "community" } },
      options: [
        { key: "A", text: t`biotic community`, correct: true, value: "biotic_community" },
        { key: "B", text: t`ecological niche`, correct: false, misconceptionId: "C01-M4", value: "niche_c" },
        { key: "C", text: t`population`, correct: false, misconceptionId: "C01-M5", value: "population_c" },
        { key: "D", text: t`ecosystem`, correct: false, misconceptionId: "C01-M6", value: "ecosystem_c" },
      ],
      solution: {
        steps: [
          t`Many species interacting.`,
          t`Biotic community.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(2)" },
      stem: t`A marine fish is put in a freshwater aquarium. It will generally`,
      verify: { kind: "value", inputs: {  }, params: { q: "marine" } },
      options: [
        { key: "A", text: t`grow faster`, correct: false, misconceptionId: "C01-M8", value: "grows_faster" },
        { key: "B", text: t`become euryhaline`, correct: false, misconceptionId: "C01-M9", value: "turns_euryhaline" },
        { key: "C", text: t`not survive: most marine fish are stenohaline and face osmotic problems`, correct: true, value: "stenohaline_dies" },
        { key: "D", text: t`survive easily`, correct: false, misconceptionId: "C01-M7", value: "survives_easily" },
      ],
      solution: {
        steps: [
          t`Narrow salinity range.`,
          t`It will not survive.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(2)" },
      stem: t`The salinity of sea water is about`,
      verify: { kind: "value", inputs: {  }, params: { q: "salinity" } },
      options: [
        { key: "A", text: t`30–35 ppt`, correct: true, value: "s30_35" },
        { key: "B", text: t`less than 5 ppt`, correct: false, misconceptionId: "C01-M10", value: "below_5" },
        { key: "C", text: t`over 100 ppt`, correct: false, misconceptionId: "C01-M11", value: "above_100" },
        { key: "D", text: t`0 ppt`, correct: false, misconceptionId: "C01-M12", value: "zero_s" },
      ],
      solution: {
        steps: [
          t`Sea water.`,
          t`30–35 ppt.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(2)" },
      stem: t`Organisms that tolerate a wide range of salinity are`,
      verify: { kind: "value", inputs: {  }, params: { q: "wide" } },
      options: [
        { key: "A", text: t`euryhaline`, correct: true, value: "euryhaline_o" },
        { key: "B", text: t`stenohaline`, correct: false, misconceptionId: "C01-M13", value: "stenohaline_o" },
        { key: "C", text: t`eurythermal`, correct: false, misconceptionId: "C01-M14", value: "eurythermal_o" },
        { key: "D", text: t`stenothermal`, correct: false, misconceptionId: "C01-M15", value: "stenothermal_o" },
      ],
      solution: {
        steps: [
          t`Wide salinity range.`,
          t`Euryhaline.`,
        ],
      },
    },
  ],
};
