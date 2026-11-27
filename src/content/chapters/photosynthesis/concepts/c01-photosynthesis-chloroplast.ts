import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A leaf in sunlight gives off bubbles of oxygen. Which part of the leaf cell makes it?`,
    reveal: t`The chloroplast: only cells with chloroplasts trap light, split water and release oxygen.`,
  },
  explanation: {
    intuition: [
      t`**Photosynthesis** traps solar energy and stores it as chemical energy in food.`,
      t`It uses $\ce{CO2}$ and water, and gives out oxygen.`,
      t`It runs in the **chloroplast**: light steps in the thylakoids, dark steps in the stroma.`,
    ],
    formal: [
      {
        title: "Why it matters",
        points: [
          t`It is the only process that traps solar energy as food; all life depends on it.`,
          t`Its oxygen is used in aerobic respiration and forms the ozone layer.`,
          t`Past photosynthesis gave us fossil fuels: coal, petroleum and natural gas.`,
        ],
      },
      {
        title: "Inside the chloroplast",
        points: [
          t`The **light reaction** runs in the **thylakoid membranes** of the grana.`,
          t`The **dark reaction** enzymes lie in the **stroma**, outside the thylakoids.`,
          t`Chlorophyll has a **porphyrin** (tetrapyrrole) head and a long **phytol** tail.`,
        ],
      },
    ],
    worked: {
      prompt: t`A root cell has no chloroplasts. Can it evolve $\ce{CO2}$? Can it give out oxygen?`,
      steps: [
        t`It still respires, so it evolves $\ce{CO2}$.`,
        t`Oxygen comes only from water split in chloroplasts.`,
      ],
      answer: t`It evolves $\ce{CO2}$ but gives out no oxygen.`,
    },
    visualSpec: t`A chloroplast: stacks of thylakoids (grana) for the light reaction, and the stroma around them for the dark reaction.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks evolve CO₂.",
      remediation: "Respiration gives CO₂ without chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks water.",
      remediation: "Every living cell needs water.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks carbohydrates.",
      remediation: "Respiring cells still use food.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks phytin.",
      remediation: "Phytin is a seed phosphate store; the tail is phytol.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says pyrrole head.",
      remediation: "The head is the whole tetrapyrrole ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says pyrrole tail.",
      remediation: "The tail is the phytol chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks stroma.",
      remediation: "The stroma holds the dark reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks mitochondria.",
      remediation: "Mitochondria respire; they do not trap light.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks cytoplasm.",
      remediation: "The pigments are in the thylakoids.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says inside thylakoids.",
      remediation: "Thylakoids carry the pigments; the enzymes are in the stroma.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks mitochondria.",
      remediation: "Carbon is fixed in the chloroplast.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks cytoplasm.",
      remediation: "The enzymes are inside the chloroplast.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says releases energy.",
      remediation: "That is respiration; photosynthesis stores energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says plant alone.",
      remediation: "All organisms get food from it, directly or not.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says uses oxygen.",
      remediation: "It releases oxygen.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(A)" },
      stem: t`A cell that lacks chloroplasts does not`,
      verify: { kind: "value", inputs: {  }, params: { q: "no_chloroplast" } },
      options: [
        { key: "A", text: t`liberate oxygen`, correct: true, value: "liberate_oxygen" },
        { key: "B", text: t`evolve carbon dioxide`, correct: false, misconceptionId: "C01-M1", value: "evolve_co2" },
        { key: "C", text: t`require water`, correct: false, misconceptionId: "C01-M2", value: "require_water" },
        { key: "D", text: t`utilise carbohydrates`, correct: false, misconceptionId: "C01-M3", value: "use_carbohydrate" },
      ],
      solution: {
        steps: [
          t`No chloroplast: no water is split.`,
          t`It cannot liberate oxygen.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(G)" },
      stem: t`The head and the tail of a chlorophyll molecule are made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "head_tail" } },
      options: [
        { key: "A", text: t`porphyrin and phytol`, correct: true, value: "porphyrin_phytol" },
        { key: "B", text: t`porphyrin and phytin`, correct: false, misconceptionId: "C01-M4", value: "porphyrin_phytin" },
        { key: "C", text: t`pyrrole and tetrapyrrole`, correct: false, misconceptionId: "C01-M5", value: "pyrrole_tetrapyrrole" },
        { key: "D", text: t`tetrapyrrole and pyrrole`, correct: false, misconceptionId: "C01-M6", value: "tetrapyrrole_pyrrole" },
      ],
      solution: {
        steps: [
          t`Head: porphyrin ring.`,
          t`Tail: phytol.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(A)" },
      stem: t`The light reaction of photosynthesis takes place in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "light_site" } },
      options: [
        { key: "A", text: t`mitochondria`, correct: false, misconceptionId: "C01-M8", value: "mitochondria_c" },
        { key: "B", text: t`cytoplasm outside the chloroplast`, correct: false, misconceptionId: "C01-M9", value: "cytoplasm_c" },
        { key: "C", text: t`thylakoid membranes of the grana`, correct: true, value: "thylakoid_membrane" },
        { key: "D", text: t`stroma of the chloroplast`, correct: false, misconceptionId: "C01-M7", value: "stroma_c" },
      ],
      solution: {
        steps: [
          t`Pigments and photosystems sit in the thylakoids.`,
          t`Thylakoid membranes of the grana.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(D)" },
      stem: t`The enzymes of the dark reaction, which fix carbon, are located`,
      verify: { kind: "value", inputs: {  }, params: { q: "dark_site" } },
      options: [
        { key: "A", text: t`in the stroma, outside the thylakoids`, correct: true, value: "stroma_c" },
        { key: "B", text: t`inside the thylakoids`, correct: false, misconceptionId: "C01-M10", value: "inside_thylakoid" },
        { key: "C", text: t`in the mitochondria`, correct: false, misconceptionId: "C01-M11", value: "mitochondria_c" },
        { key: "D", text: t`in the cytoplasm outside the chloroplast`, correct: false, misconceptionId: "C01-M12", value: "cytoplasm_c" },
      ],
      solution: {
        steps: [
          t`ATP and $\ce{NADPH2}$ move into the stroma.`,
          t`The enzymes are in the stroma.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(I)" },
      stem: t`Photosynthesis is called the most important process in the biosphere because`,
      verify: { kind: "value", inputs: {  }, params: { q: "importance" } },
      options: [
        { key: "A", text: t`it is the only process that traps solar energy as food`, correct: true, value: "traps_solar_energy" },
        { key: "B", text: t`it releases energy from food`, correct: false, misconceptionId: "C01-M13", value: "releases_food_energy" },
        { key: "C", text: t`it makes food for the plant alone`, correct: false, misconceptionId: "C01-M14", value: "feeds_plant_only" },
        { key: "D", text: t`it uses up the oxygen of the air`, correct: false, misconceptionId: "C01-M15", value: "uses_up_oxygen" },
      ],
      solution: {
        steps: [
          t`It alone traps solar energy as food.`,
          t`All life depends on it.`,
        ],
      },
    },
  ],
};
