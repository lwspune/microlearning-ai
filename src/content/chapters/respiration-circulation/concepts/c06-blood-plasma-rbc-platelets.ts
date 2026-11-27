import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Spin a tube of blood fast, and it splits into a straw-coloured top and a red bottom. What are the two parts?`,
    reveal: t`Plasma on top, about 55%, and the cells below, mostly red blood cells.`,
  },
  explanation: {
    intuition: [
      t`Blood is a fluid **connective tissue**.`,
      t`It has **plasma** and **formed elements**: RBCs, WBCs and platelets.`,
      t`An adult has about 4–6 litres.`,
    ],
    formal: [
      {
        title: "Plasma and RBCs",
        points: [
          t`Plasma is **55%** of blood: 90% water, 7–8% proteins, salts and others.`,
          t`Mature RBCs have **no nucleus** and no mitochondria: more room for haemoglobin.`,
          t`**Haematocrit**: RBC volume ÷ total blood volume.`,
        ],
      },
      {
        title: "Platelets and clotting",
        points: [
          t`Platelets (thrombocytes) are fragments of **megakaryocytes**.`,
          t`Damage → thromboplastin → prothrombin to **thrombin**.`,
          t`Thrombin turns soluble fibrinogen into insoluble **fibrin**, which traps cells: a clot.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why do mature human RBCs lack a nucleus?`,
      steps: [
        t`The space is used for haemoglobin.`,
        t`More haemoglobin carries more oxygen.`,
      ],
      answer: t`To hold more haemoglobin`,
    },
    visualSpec: t`A centrifuged tube of blood: plasma above, a thin white band, RBCs below.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Gives 45%.",
      remediation: "45% is formed elements.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Gives 90%.",
      remediation: "90% is water in plasma.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Gives 7%.",
      remediation: "7–8% is plasma proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks neutrophil.",
      remediation: "All WBCs have a nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks basophil.",
      remediation: "All WBCs have a nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks lymphocyte.",
      remediation: "All WBCs have a nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks erythrocytes.",
      remediation: "RBCs form from stem cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks leucocytes.",
      remediation: "WBCs are whole cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks monocytes.",
      remediation: "Monocytes are WBCs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says WBC count.",
      remediation: "Haematocrit is about RBC volume.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says haemoglobin content.",
      remediation: "That is haemoglobin level.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says plasma ratio.",
      remediation: "Haematocrit measures RBCs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks prothrombin.",
      remediation: "Prothrombin becomes thrombin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks thromboplastin.",
      remediation: "Thromboplastin starts the cascade.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks heparin.",
      remediation: "Heparin prevents clotting.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q4(4)" },
      stem: t`Plasma forms about what share of blood?`,
      verify: { kind: "value", inputs: {  }, params: { q: "plasma" } },
      options: [
        { key: "A", text: t`45%`, correct: false, misconceptionId: "C06-M1", value: "p45" },
        { key: "B", text: t`90%`, correct: false, misconceptionId: "C06-M2", value: "p90" },
        { key: "C", text: t`7%`, correct: false, misconceptionId: "C06-M3", value: "p7" },
        { key: "D", text: t`55%`, correct: true, value: "p55" },
      ],
      solution: {
        steps: [
          t`The straw-coloured fluid.`,
          t`About 55%.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(10)" },
      stem: t`Which of these cells has no nucleus?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nucleus" } },
      options: [
        { key: "A", text: t`Red blood corpuscle`, correct: true, value: "rbc_cell" },
        { key: "B", text: t`Neutrophil`, correct: false, misconceptionId: "C06-M4", value: "neutrophil_cell" },
        { key: "C", text: t`Basophil`, correct: false, misconceptionId: "C06-M5", value: "basophil_cell" },
        { key: "D", text: t`Lymphocyte`, correct: false, misconceptionId: "C06-M6", value: "lymphocyte_cell" },
      ],
      solution: {
        steps: [
          t`Mature RBCs lose it.`,
          t`Red blood corpuscle.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 1(vii)" },
      stem: t`Cell fragments formed from megakaryocytes are`,
      verify: { kind: "value", inputs: {  }, params: { q: "megakaryocyte" } },
      options: [
        { key: "A", text: t`thrombocytes`, correct: true, value: "thrombocytes_c" },
        { key: "B", text: t`erythrocytes`, correct: false, misconceptionId: "C06-M7", value: "erythrocytes_c" },
        { key: "C", text: t`leucocytes`, correct: false, misconceptionId: "C06-M8", value: "leucocytes_c" },
        { key: "D", text: t`monocytes`, correct: false, misconceptionId: "C06-M9", value: "monocytes_c" },
      ],
      solution: {
        steps: [
          t`Fragments of megakaryocytes.`,
          t`Thrombocytes.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 26" },
      stem: t`Haematocrit is`,
      verify: { kind: "value", inputs: {  }, params: { q: "haematocrit" } },
      options: [
        { key: "A", text: t`the ratio of plasma to total blood volume`, correct: false, misconceptionId: "C06-M12", value: "plasma_ratio" },
        { key: "B", text: t`the ratio of RBC volume to total blood volume`, correct: true, value: "rbc_volume_ratio" },
        { key: "C", text: t`the number of WBCs per mm³`, correct: false, misconceptionId: "C06-M10", value: "wbc_count" },
        { key: "D", text: t`the haemoglobin in 100 ml of blood`, correct: false, misconceptionId: "C06-M11", value: "haemoglobin_content" },
      ],
      solution: {
        steps: [
          t`Packed RBCs over total blood.`,
          t`RBC volume ratio.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q4(5)" },
      stem: t`In clotting, thrombin converts soluble fibrinogen into`,
      verify: { kind: "value", inputs: {  }, params: { q: "fibrin" } },
      options: [
        { key: "A", text: t`insoluble fibrin`, correct: true, value: "fibrin_p" },
        { key: "B", text: t`prothrombin`, correct: false, misconceptionId: "C06-M13", value: "prothrombin_p" },
        { key: "C", text: t`thromboplastin`, correct: false, misconceptionId: "C06-M14", value: "thromboplastin_p" },
        { key: "D", text: t`heparin`, correct: false, misconceptionId: "C06-M15", value: "heparin_p" },
      ],
      solution: {
        steps: [
          t`Thrombin acts on fibrinogen.`,
          t`Fibrin.`,
        ],
      },
    },
  ],
};
