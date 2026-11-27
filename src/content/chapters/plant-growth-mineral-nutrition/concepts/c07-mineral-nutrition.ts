import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A plant makes its own food from air and water. Why does a farmer still add fertilizer?`,
    reveal: t`Photosynthesis makes sugars, but a plant cannot make elements. Nitrogen, potassium and the rest must come from the soil.`,
  },
  explanation: {
    intuition: [
      t`Plants take **essential elements** from the soil as ions.`,
      t`They are grouped by how much is needed.`,
      t`A missing element shows as a **deficiency symptom**.`,
    ],
    formal: [
      {
        title: "Macro and micro",
        points: [
          t`**Macronutrients**, needed in large amounts: C, H, O, N, P, K, Ca, Mg, S.`,
          t`**Micronutrients**, needed in traces: Fe, Mn, Zn, Cu, B, Mo, Cl, Ni.`,
          t`Zinc helps make auxin (3-IAA); molybdenum is needed for nitrogen metabolism.`,
        ],
      },
      {
        title: "Deficiency symptoms",
        points: [
          t`**Chlorosis**: loss of chlorophyll, so leaves turn yellow.`,
          t`**Necrosis**: death of tissue.`,
          t`**Stunting**: short, condensed growth.`,
        ],
      },
    ],
    worked: {
      prompt: t`Leaves of a crop turn yellow between the veins. What is the symptom called?`,
      steps: [
        t`Yellowing comes from loss of chlorophyll.`,
        t`Loss of chlorophyll is chlorosis.`,
      ],
      answer: t`Chlorosis`,
    },
    visualSpec: t`Three leaves: healthy green, yellowed (chlorosis) and with dead patches (necrosis).`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Says photosynthesis makes them.",
      remediation: "Photosynthesis makes compounds, not elements.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says enzymes make them.",
      remediation: "Enzymes cannot make elements.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says hormones make them.",
      remediation: "Hormones cannot make elements.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks stomata.",
      remediation: "That is potassium.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks chlorophyll.",
      remediation: "That is magnesium and iron.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks carbohydrates.",
      remediation: "Zinc is for auxin.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks yellow spots.",
      remediation: "That is chlorosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks darker green.",
      remediation: "Necrosis kills tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks wilting.",
      remediation: "Wilting is water loss.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks tissue death.",
      remediation: "That is necrosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks stunting.",
      remediation: "Stunting is short growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks wilting.",
      remediation: "Wilting is water loss.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks nitrogen.",
      remediation: "Nitrogen is a macronutrient.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks potassium.",
      remediation: "Potassium is a macronutrient.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks magnesium.",
      remediation: "Magnesium is a macronutrient.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(8)" },
      stem: t`Essential macroelements are`,
      verify: { kind: "value", inputs: {  }, params: { q: "source" } },
      options: [
        { key: "A", text: t`produced by enzymes`, correct: false, misconceptionId: "C07-M2", value: "from_enzymes" },
        { key: "B", text: t`produced by growth hormones`, correct: false, misconceptionId: "C07-M3", value: "from_hormones" },
        { key: "C", text: t`absorbed from the soil`, correct: true, value: "from_soil" },
        { key: "D", text: t`manufactured during photosynthesis`, correct: false, misconceptionId: "C07-M1", value: "from_photosynthesis" },
      ],
      solution: {
        steps: [
          t`Elements cannot be made.`,
          t`Absorbed from the soil.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(9)" },
      stem: t`A function of zinc is`,
      verify: { kind: "value", inputs: {  }, params: { q: "zinc" } },
      options: [
        { key: "A", text: t`closing of stomata`, correct: false, misconceptionId: "C07-M4", value: "stomata_closing" },
        { key: "B", text: t`synthesis of chlorophyll`, correct: false, misconceptionId: "C07-M5", value: "chlorophyll_synthesis" },
        { key: "C", text: t`oxidation of carbohydrates`, correct: false, misconceptionId: "C07-M6", value: "carbohydrate_oxidation" },
        { key: "D", text: t`biosynthesis of 3-IAA`, correct: true, value: "iaa_synthesis" },
      ],
      solution: {
        steps: [
          t`Zinc helps make auxin.`,
          t`Biosynthesis of 3-IAA.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(10)" },
      stem: t`Necrosis means`,
      verify: { kind: "value", inputs: {  }, params: { q: "necrosis" } },
      options: [
        { key: "A", text: t`wilting of leaves`, correct: false, misconceptionId: "C07-M9", value: "wilting_leaves" },
        { key: "B", text: t`death of tissue`, correct: true, value: "tissue_death" },
        { key: "C", text: t`yellow spots on the leaves`, correct: false, misconceptionId: "C07-M7", value: "yellow_spots" },
        { key: "D", text: t`darkening of the green colour of leaves`, correct: false, misconceptionId: "C07-M8", value: "darker_green" },
      ],
      solution: {
        steps: [
          t`Necrosis is tissue death.`,
          t`Death of tissue.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 2(v)" },
      stem: t`Chlorosis is`,
      verify: { kind: "value", inputs: {  }, params: { q: "chlorosis" } },
      options: [
        { key: "A", text: t`loss of chlorophyll, so the leaves turn yellow`, correct: true, value: "yellowing_leaves" },
        { key: "B", text: t`death of tissue`, correct: false, misconceptionId: "C07-M10", value: "tissue_death" },
        { key: "C", text: t`stunted growth`, correct: false, misconceptionId: "C07-M11", value: "stunted_growth" },
        { key: "D", text: t`wilting of leaves`, correct: false, misconceptionId: "C07-M12", value: "wilting_leaves" },
      ],
      solution: {
        steps: [
          t`Chlorophyll is lost.`,
          t`Leaves turn yellow.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q4(4)" },
      stem: t`Which of these is a micronutrient?`,
      verify: { kind: "value", inputs: {  }, params: { q: "micro" } },
      options: [
        { key: "A", text: t`Nitrogen`, correct: false, misconceptionId: "C07-M13", value: "nitrogen_el" },
        { key: "B", text: t`Potassium`, correct: false, misconceptionId: "C07-M14", value: "potassium_el" },
        { key: "C", text: t`Magnesium`, correct: false, misconceptionId: "C07-M15", value: "magnesium_el" },
        { key: "D", text: t`Molybdenum`, correct: true, value: "molybdenum_el" },
      ],
      solution: {
        steps: [
          t`Needed in traces.`,
          t`Molybdenum.`,
        ],
      },
    },
  ],
};
