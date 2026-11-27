import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Sewage flows into a clean river, and a few kilometres down the fish start dying. Why there?`,
    reveal: t`Bacteria feeding on the sewage use up the dissolved oxygen: the water's BOD has risen, and fish suffocate.`,
  },
  explanation: {
    intuition: [
      t`Water is polluted by sewage, industrial waste and farm run-off.`,
      t`**BOD** (biochemical oxygen demand) measures organic pollution.`,
      t`Wastes can be biodegradable or not.`,
    ],
    formal: [
      {
        title: "Water pollution",
        points: [
          t`Organic waste raises **BOD**; dissolved oxygen falls; fish die.`,
          t`Extra phosphates and nitrates cause **eutrophication**.`,
          t`An **algal bloom** grows, dies and decays, using up oxygen.`,
        ],
      },
      {
        title: "Wastes",
        points: [
          t`Biodegradable: bagasse and press mud (sugar industry), food waste.`,
          t`**Ecosan** toilets compost excreta into **organic manure** in 8–9 months.`,
          t`Non-biodegradable: plastics, glass, metals.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is the BOD of clean water low?`,
      steps: [
        t`It has little organic matter.`,
        t`So microbes need little oxygen.`,
      ],
      answer: t`Little organic matter`,
    },
    visualSpec: t`A river with a sewage outfall and a falling dissolved-oxygen line downstream.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says more oxygen.",
      remediation: "Microbes use oxygen up.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says lower BOD.",
      remediation: "Organic waste raises BOD.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says no change.",
      remediation: "Oxygen falls.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks plastic.",
      remediation: "Plastic does not biodegrade.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks glass.",
      remediation: "Glass does not biodegrade.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks heavy metals.",
      remediation: "Metals do not biodegrade.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says cooling.",
      remediation: "Nutrients cause it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says salt.",
      remediation: "Nutrients cause it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says oil.",
      remediation: "Nutrients cause it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says cleaner water.",
      remediation: "Decay pollutes it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says more fish.",
      remediation: "Fish suffocate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says lower BOD.",
      remediation: "Decay raises BOD.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says drinking water.",
      remediation: "It makes manure.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says biogas.",
      remediation: "Ecosan is dry composting.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says chemical fertilizer.",
      remediation: "It makes organic manure.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q4(4)" },
      stem: t`Untreated sewage poured into a river`,
      verify: { kind: "value", inputs: {  }, params: { q: "sewage" } },
      options: [
        { key: "A", text: t`makes no difference`, correct: false, misconceptionId: "C05-M3", value: "no_change" },
        { key: "B", text: t`raises BOD, so dissolved oxygen falls and fish die`, correct: true, value: "high_bod" },
        { key: "C", text: t`adds oxygen to the water`, correct: false, misconceptionId: "C05-M1", value: "more_oxygen" },
        { key: "D", text: t`lowers BOD`, correct: false, misconceptionId: "C05-M2", value: "lower_bod" },
      ],
      solution: {
        steps: [
          t`Microbes use oxygen.`,
          t`BOD rises; fish die.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q2(1)" },
      stem: t`Biodegradable wastes of the sugar industry are`,
      verify: { kind: "value", inputs: {  }, params: { q: "sugar" } },
      options: [
        { key: "A", text: t`plastic`, correct: false, misconceptionId: "C05-M4", value: "plastic_waste" },
        { key: "B", text: t`glass`, correct: false, misconceptionId: "C05-M5", value: "glass_waste" },
        { key: "C", text: t`heavy metals`, correct: false, misconceptionId: "C05-M6", value: "heavy_metals" },
        { key: "D", text: t`bagasse and press mud`, correct: true, value: "bagasse_pressmud" },
      ],
      solution: {
        steps: [
          t`Sugarcane residues.`,
          t`Bagasse and press mud.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`Eutrophication of a lake is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "eutrophication" } },
      options: [
        { key: "A", text: t`enrichment with nutrients such as phosphates and nitrates`, correct: true, value: "nutrient_enrichment" },
        { key: "B", text: t`cooling of the water`, correct: false, misconceptionId: "C05-M7", value: "cooling_water" },
        { key: "C", text: t`salt entering the water`, correct: false, misconceptionId: "C05-M8", value: "salt_water" },
        { key: "D", text: t`an oil spill`, correct: false, misconceptionId: "C05-M9", value: "oil_spill" },
      ],
      solution: {
        steps: [
          t`Nutrient enrichment.`,
          t`Phosphates and nitrates.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`When an algal bloom dies and decays, the lake water`,
      verify: { kind: "value", inputs: {  }, params: { q: "bloom" } },
      options: [
        { key: "A", text: t`supports more fish`, correct: false, misconceptionId: "C05-M11", value: "more_fish" },
        { key: "B", text: t`has a lower BOD`, correct: false, misconceptionId: "C05-M12", value: "lower_bod" },
        { key: "C", text: t`loses dissolved oxygen`, correct: true, value: "oxygen_depletion" },
        { key: "D", text: t`becomes cleaner`, correct: false, misconceptionId: "C05-M10", value: "cleaner_water" },
      ],
      solution: {
        steps: [
          t`Decay uses oxygen.`,
          t`It loses dissolved oxygen.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q4(4)" },
      stem: t`In an Ecosan toilet, human excreta is composted by microbes into`,
      verify: { kind: "value", inputs: {  }, params: { q: "ecosan" } },
      options: [
        { key: "A", text: t`organic manure for farms`, correct: true, value: "organic_manure" },
        { key: "B", text: t`drinking water`, correct: false, misconceptionId: "C05-M13", value: "drinking_water" },
        { key: "C", text: t`biogas fuel`, correct: false, misconceptionId: "C05-M14", value: "biogas_fuel" },
        { key: "D", text: t`chemical fertilizer`, correct: false, misconceptionId: "C05-M15", value: "chemical_fertilizer" },
      ],
      solution: {
        steps: [
          t`Composted excreta.`,
          t`Organic manure.`,
        ],
      },
    },
  ],
};
