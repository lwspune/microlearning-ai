import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`After a meal your blood sugar rises, then falls back within hours. What brings it down?`,
    reveal: t`Insulin, from the beta cells of the pancreas, which makes the liver and muscles store glucose.`,
  },
  explanation: {
    intuition: [
      t`The **pancreas**'s islets of Langerhans control blood glucose.`,
      t`The **adrenal** glands have a cortex and a medulla.`,
      t`The **gonads** make sex hormones.`,
    ],
    formal: [
      {
        title: "Pancreas and adrenals",
        points: [
          t`**Beta** cells (70%): insulin, lowers glucose. **Alpha** (20%): glucagon, raises it. Delta: somatostatin.`,
          t`Lack of insulin: diabetes mellitus (hyperglycaemia).`,
          t`Adrenal cortex: lack of corticoids is **Addison's disease**; excess is Cushing's syndrome.`,
        ],
      },
      {
        title: "Gonads",
        points: [
          t`After ovulation the follicle becomes the **corpus luteum**, which makes **progesterone**.`,
          t`Progesterone is the **anti-abortion hormone**: it keeps the uterus quiet.`,
          t`Testosterone, from Leydig cells, gives male characters.`,
        ],
      },
    ],
    worked: {
      prompt: t`Blood sugar falls during a long fast. Which cells respond, and how?`,
      steps: [
        t`Low glucose must be raised.`,
        t`Alpha cells release glucagon.`,
      ],
      answer: t`Alpha cells, with glucagon`,
    },
    visualSpec: t`An islet of Langerhans with alpha, beta and delta cells shaded differently.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Picks alpha.",
      remediation: "Alpha cells make glucagon.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Picks delta.",
      remediation: "Delta cells make somatostatin.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Picks PP cells.",
      remediation: "PP cells make pancreatic polypeptide.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Picks PTH – diabetes insipidus.",
      remediation: "That comes from ADH lack.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Picks LH – diabetes mellitus.",
      remediation: "That comes from insulin lack.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Picks thyroxine – tetany.",
      remediation: "Tetany comes from PTH lack.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Picks albicans.",
      remediation: "That is the later scar.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Picks spongiosum.",
      remediation: "That is penile tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Picks callosum.",
      remediation: "That is in the brain.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Picks estrogen.",
      remediation: "Estrogen builds the lining.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Picks relaxin.",
      remediation: "Relaxin helps birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Picks oxytocin.",
      remediation: "Oxytocin causes contractions.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Picks Cushing's.",
      remediation: "That is excess.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Picks Grave's.",
      remediation: "That is thyroid.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Picks diabetes insipidus.",
      remediation: "That is ADH.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 2(vi)" },
      stem: t`Insulin is made by which cells of the islets of Langerhans?`,
      verify: { kind: "value", inputs: {  }, params: { q: "insulin" } },
      options: [
        { key: "A", text: t`Alpha cells`, correct: false, misconceptionId: "C10-M1", value: "alpha_c" },
        { key: "B", text: t`Delta cells`, correct: false, misconceptionId: "C10-M2", value: "delta_c" },
        { key: "C", text: t`PP cells`, correct: false, misconceptionId: "C10-M3", value: "pp_c" },
        { key: "D", text: t`Beta cells`, correct: true, value: "beta_c" },
      ],
      solution: {
        steps: [
          t`About 70% of islet cells.`,
          t`Beta cells.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(11)" },
      stem: t`Which pair correctly matches a hormone with the disorder caused by its deficiency?`,
      verify: { kind: "value", inputs: {  }, params: { q: "pair" } },
      options: [
        { key: "A", text: t`Insulin – hyperglycaemia`, correct: true, value: "insulin_pair" },
        { key: "B", text: t`Parathyroid hormone – diabetes insipidus`, correct: false, misconceptionId: "C10-M4", value: "pth_pair" },
        { key: "C", text: t`Luteinising hormone – diabetes mellitus`, correct: false, misconceptionId: "C10-M5", value: "lh_pair" },
        { key: "D", text: t`Thyroxine – tetany`, correct: false, misconceptionId: "C10-M6", value: "thyroxine_pair" },
      ],
      solution: {
        steps: [
          t`Low insulin raises glucose.`,
          t`Insulin – hyperglycaemia.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(10)" },
      stem: t`After ovulation, the Graafian follicle changes into the`,
      verify: { kind: "value", inputs: {  }, params: { q: "follicle" } },
      options: [
        { key: "A", text: t`corpus callosum`, correct: false, misconceptionId: "C10-M9", value: "corpus_callosum" },
        { key: "B", text: t`corpus luteum`, correct: true, value: "corpus_luteum" },
        { key: "C", text: t`corpus albicans`, correct: false, misconceptionId: "C10-M7", value: "corpus_albicans" },
        { key: "D", text: t`corpus spongiosum`, correct: false, misconceptionId: "C10-M8", value: "corpus_spongiosum" },
      ],
      solution: {
        steps: [
          t`The ruptured follicle.`,
          t`Corpus luteum.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q2(5)" },
      stem: t`The anti-abortion hormone is`,
      verify: { kind: "value", inputs: {  }, params: { q: "abortion" } },
      options: [
        { key: "A", text: t`relaxin`, correct: false, misconceptionId: "C10-M11", value: "relaxin_h" },
        { key: "B", text: t`oxytocin`, correct: false, misconceptionId: "C10-M12", value: "oxytocin_h" },
        { key: "C", text: t`progesterone`, correct: true, value: "progesterone_h" },
        { key: "D", text: t`estrogen`, correct: false, misconceptionId: "C10-M10", value: "estrogen_h" },
      ],
      solution: {
        steps: [
          t`It keeps the uterus quiet.`,
          t`Progesterone.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2026 Q. 29" },
      stem: t`Hyposecretion of the adrenal corticoids causes`,
      verify: { kind: "value", inputs: {  }, params: { q: "corticoids" } },
      options: [
        { key: "A", text: t`Addison's disease`, correct: true, value: "addisons_d" },
        { key: "B", text: t`Cushing's syndrome`, correct: false, misconceptionId: "C10-M13", value: "cushings_d" },
        { key: "C", text: t`Grave's disease`, correct: false, misconceptionId: "C10-M14", value: "graves_d" },
        { key: "D", text: t`diabetes insipidus`, correct: false, misconceptionId: "C10-M15", value: "diabetes_insipidus" },
      ],
      solution: {
        steps: [
          t`Corticoids are lacking.`,
          t`Addison's disease.`,
        ],
      },
    },
  ],
};
