import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`An adult grows slow, cold and dull, with a low heart rate and puffy skin. Which gland is failing?`,
    reveal: t`The thyroid: too little thyroxine lowers the body's metabolic rate. In adults this is myxoedema.`,
  },
  explanation: {
    intuition: [
      t`The **pituitary**, below the hypothalamus, controls many other glands.`,
      t`The **thyroid** sets the metabolic rate.`,
      t`Too much or too little of a hormone causes disease.`,
    ],
    formal: [
      {
        title: "Pituitary",
        points: [
          t`Excess **GH**: gigantism in children, **acromegaly** in adults.`,
          t`Lack of **ADH**: **diabetes insipidus**, much dilute urine.`,
          t`TSH stimulates the thyroid.`,
        ],
      },
      {
        title: "Thyroid, parathyroid, thymus, pineal",
        points: [
          t`Low thyroxine: **cretinism** (infants), **myxoedema** (adults); high: **exophthalmic goitre**; iodine lack: simple goitre.`,
          t`**Parathormone** keeps blood $\ce{Ca^{2+}}$ up.`,
          t`**Thymus** (T-cell maturation) shrinks in adults; the **pineal** makes melatonin.`,
        ],
      },
    ],
    worked: {
      prompt: t`A child in an iodine-poor hill area has a swollen neck. What is it?`,
      steps: [
        t`Iodine is needed to make thyroxine.`,
        t`The thyroid enlarges.`,
      ],
      answer: t`Simple goitre`,
    },
    visualSpec: t`A body outline with pituitary, thyroid, parathyroids and thymus marked.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Says too little GH.",
      remediation: "Too little causes dwarfism.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks thyroxine.",
      remediation: "Thyroxine sets metabolism.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Picks parathormone.",
      remediation: "Parathormone sets calcium.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Picks diabetes mellitus.",
      remediation: "That is insulin.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Picks myxoedema.",
      remediation: "That is thyroid.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Picks Addison's.",
      remediation: "That is adrenal.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Picks early ageing.",
      remediation: "The parathyroids control calcium.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Picks myxoedema.",
      remediation: "That is thyroid.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Picks high blood pressure.",
      remediation: "Calcium is what is disturbed.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Picks cretinism.",
      remediation: "Cretinism is low thyroxine.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Picks myxoedema.",
      remediation: "Myxoedema is low thyroxine.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Picks simple goitre.",
      remediation: "Simple goitre is iodine lack.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Picks pineal.",
      remediation: "The pineal makes melatonin.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Picks thyroid.",
      remediation: "The thyroid stays active.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Picks pituitary.",
      remediation: "The pituitary stays active.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q2(8)" },
      stem: t`Abnormal elongation of the long bones of the arms and legs and of the lower jaw is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "bones" } },
      options: [
        { key: "A", text: t`excess thyroxine`, correct: false, misconceptionId: "C09-M2", value: "thyroxine_excess" },
        { key: "B", text: t`excess parathormone`, correct: false, misconceptionId: "C09-M3", value: "pth_excess" },
        { key: "C", text: t`excess growth hormone`, correct: true, value: "gh_excess" },
        { key: "D", text: t`too little growth hormone`, correct: false, misconceptionId: "C09-M1", value: "gh_deficit" },
      ],
      solution: {
        steps: [
          t`Excess GH in adults.`,
          t`Excess growth hormone.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2025 Q. 2(vi)" },
      stem: t`Lack of ADH reduces water reabsorption and increases urine output. The disorder is`,
      verify: { kind: "value", inputs: {  }, params: { q: "adh" } },
      options: [
        { key: "A", text: t`diabetes insipidus`, correct: true, value: "diabetes_insipidus" },
        { key: "B", text: t`diabetes mellitus`, correct: false, misconceptionId: "C09-M4", value: "diabetes_mellitus" },
        { key: "C", text: t`myxoedema`, correct: false, misconceptionId: "C09-M5", value: "myxoedema_d" },
        { key: "D", text: t`Addison's disease`, correct: false, misconceptionId: "C09-M6", value: "addisons_d" },
      ],
      solution: {
        steps: [
          t`ADH is lacking.`,
          t`Diabetes insipidus.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(6)" },
      stem: t`If a man's parathyroid glands are removed, the specific result is`,
      verify: { kind: "value", inputs: {  }, params: { q: "parathyroid" } },
      options: [
        { key: "A", text: t`early ageing`, correct: false, misconceptionId: "C09-M7", value: "early_ageing" },
        { key: "B", text: t`myxoedema`, correct: false, misconceptionId: "C09-M8", value: "myxoedema_d" },
        { key: "C", text: t`high blood pressure`, correct: false, misconceptionId: "C09-M9", value: "high_bp" },
        { key: "D", text: t`disturbance of blood $\ce{Ca^{2+}}$`, correct: true, value: "calcium_disturbed" },
      ],
      solution: {
        steps: [
          t`Parathormone controls calcium.`,
          t`Blood $\ce{Ca^{2+}}$ is disturbed.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2026 Q. 1(vii)" },
      stem: t`Weight loss, a raised BMR and protruding eyeballs are signs of`,
      verify: { kind: "value", inputs: {  }, params: { q: "eyeballs" } },
      options: [
        { key: "A", text: t`exophthalmic goitre`, correct: true, value: "exophthalmic_goitre" },
        { key: "B", text: t`cretinism`, correct: false, misconceptionId: "C09-M10", value: "cretinism_d" },
        { key: "C", text: t`myxoedema`, correct: false, misconceptionId: "C09-M11", value: "myxoedema_d" },
        { key: "D", text: t`simple goitre`, correct: false, misconceptionId: "C09-M12", value: "simple_goitre" },
      ],
      solution: {
        steps: [
          t`Hyperthyroidism in adults.`,
          t`Exophthalmic goitre.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 2(iii)" },
      stem: t`The endocrine gland that is prominent at birth but shrinks in adults is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "thymus" } },
      options: [
        { key: "A", text: t`thyroid`, correct: false, misconceptionId: "C09-M14", value: "thyroid_g" },
        { key: "B", text: t`pituitary`, correct: false, misconceptionId: "C09-M15", value: "pituitary_g" },
        { key: "C", text: t`thymus`, correct: true, value: "thymus_g" },
        { key: "D", text: t`pineal`, correct: false, misconceptionId: "C09-M13", value: "pineal_g" },
      ],
      solution: {
        steps: [
          t`T-cell gland of childhood.`,
          t`Thymus.`,
        ],
      },
    },
  ],
};
