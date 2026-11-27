import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A splinter makes the skin around it red and swollen. Where do the cells fighting the germs come from?`,
    reveal: t`From the blood: white cells squeeze out through the walls of capillaries to reach the infection.`,
  },
  explanation: {
    intuition: [
      t`WBCs (leucocytes) defend the body; all have a nucleus.`,
      t`Normal count: 5000–11000 per mm³.`,
      t`The **lymphatic system** returns tissue fluid to the blood.`,
    ],
    formal: [
      {
        title: "WBCs",
        points: [
          t`WBCs leave capillaries by **diapedesis**.`,
          t`**Monocytes** are the largest; they become macrophages.`,
          t`Too few WBCs: **leucopenia**; a temporary rise: **leucocytosis**.`,
        ],
      },
      {
        title: "Lymph",
        points: [
          t`Fluid in intercellular spaces is **interstitial (tissue) fluid**.`,
          t`Inside lymph vessels it is **lymph**.`,
          t`Lymph has WBCs but **no RBCs or platelets**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A blood test shows 3000 WBCs per mm³. What is this?`,
      steps: [
        t`Normal is 5000–11000.`,
        t`Below normal is leucopenia.`,
      ],
      answer: t`Leucopenia`,
    },
    visualSpec: t`A WBC squeezing through a gap in a capillary wall towards bacteria.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks erythrocytes.",
      remediation: "RBCs stay in vessels.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks thrombocytes.",
      remediation: "Platelets stay in vessels.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks adipocytes.",
      remediation: "Adipocytes are fat cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks eosinophil.",
      remediation: "Monocytes are larger.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks basophil.",
      remediation: "Monocytes are larger.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks lymphocyte.",
      remediation: "Monocytes are larger.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks leucocytosis.",
      remediation: "That is a rise.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks anaemia.",
      remediation: "Anaemia is about RBCs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks leukaemia.",
      remediation: "Leukaemia is a cancer.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks blood.",
      remediation: "Blood is in vessels.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks lymph.",
      remediation: "Lymph is in lymph vessels.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks water.",
      remediation: "It is a fluid with solutes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks WBCs.",
      remediation: "Lymph has lymphocytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks water.",
      remediation: "Lymph is mostly water.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks plasma.",
      remediation: "Lymph is plasma-like.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(8)" },
      stem: t`Diapedesis is performed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "diapedesis" } },
      options: [
        { key: "A", text: t`thrombocytes`, correct: false, misconceptionId: "C07-M2", value: "thrombocytes_c" },
        { key: "B", text: t`adipocytes`, correct: false, misconceptionId: "C07-M3", value: "adipocytes_c" },
        { key: "C", text: t`leucocytes`, correct: true, value: "leucocytes_c" },
        { key: "D", text: t`erythrocytes`, correct: false, misconceptionId: "C07-M1", value: "erythrocytes_c" },
      ],
      solution: {
        steps: [
          t`Squeezing through capillaries.`,
          t`Leucocytes.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2026 Q. 1(ix)" },
      stem: t`The largest white blood cell is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "largest" } },
      options: [
        { key: "A", text: t`eosinophil`, correct: false, misconceptionId: "C07-M4", value: "eosinophil_c" },
        { key: "B", text: t`basophil`, correct: false, misconceptionId: "C07-M5", value: "basophil_c" },
        { key: "C", text: t`lymphocyte`, correct: false, misconceptionId: "C07-M6", value: "lymphocyte_c" },
        { key: "D", text: t`monocyte`, correct: true, value: "monocyte_c" },
      ],
      solution: {
        steps: [
          t`Largest; forms macrophages.`,
          t`Monocyte.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2025 Q. 2(iii)" },
      stem: t`A fall in the WBC count below normal is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fewer" } },
      options: [
        { key: "A", text: t`leukaemia`, correct: false, misconceptionId: "C07-M9", value: "leukaemia_t" },
        { key: "B", text: t`leucopenia`, correct: true, value: "leucopenia_t" },
        { key: "C", text: t`leucocytosis`, correct: false, misconceptionId: "C07-M7", value: "leucocytosis_t" },
        { key: "D", text: t`anaemia`, correct: false, misconceptionId: "C07-M8", value: "anaemia_t" },
      ],
      solution: {
        steps: [
          t`Count below normal.`,
          t`Leucopenia.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(15)" },
      stem: t`The fluid in the intercellular spaces of the human body is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tissue" } },
      options: [
        { key: "A", text: t`interstitial fluid`, correct: true, value: "interstitial_f" },
        { key: "B", text: t`blood`, correct: false, misconceptionId: "C07-M10", value: "blood_f" },
        { key: "C", text: t`lymph`, correct: false, misconceptionId: "C07-M11", value: "lymph_f" },
        { key: "D", text: t`water`, correct: false, misconceptionId: "C07-M12", value: "water_f" },
      ],
      solution: {
        steps: [
          t`Between the cells.`,
          t`Interstitial fluid.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q6(3)" },
      stem: t`Lymph is like blood but lacks`,
      verify: { kind: "value", inputs: {  }, params: { q: "lymph" } },
      options: [
        { key: "A", text: t`WBCs`, correct: false, misconceptionId: "C07-M13", value: "no_wbc" },
        { key: "B", text: t`water`, correct: false, misconceptionId: "C07-M14", value: "no_water" },
        { key: "C", text: t`plasma`, correct: false, misconceptionId: "C07-M15", value: "no_plasma" },
        { key: "D", text: t`RBCs and platelets`, correct: true, value: "no_rbc_platelets" },
      ],
      solution: {
        steps: [
          t`Lymph has WBCs.`,
          t`RBCs and platelets.`,
        ],
      },
    },
  ],
};
