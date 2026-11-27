import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A marigold looks like one flower. Why does the book say it is not one flower?`,
    reveal: t`It is an inflorescence: many small florets packed together on one axis.`,
  },
  explanation: {
    intuition: [
      t`An **inflorescence** is an axis bearing flowers in a definite way: a **peduncle** and its flowers.`,
      t`**Racemose**: the axis keeps growing. **Cymose**: the axis ends in a flower.`,
      t`Flowers maturing at different times raise the chances of pollination.`,
    ],
    formal: [
      {
        title: "Racemose",
        points: [
          t`The peduncle grows without limit; the apical bud stays free.`,
          t`The oldest flowers are at the base: **acropetal** succession.`,
          t`If the peduncle is disc shaped, the flowers open **centripetally**. Example of racemose: pea.`,
        ],
      },
      {
        title: "Cymose",
        points: [
          t`The peduncle's growth is limited; the apical meristem ends in a flower.`,
          t`The oldest flower is at the apex: **basipetal** succession.`,
          t`On a peduncle compressed from the top, flowers open **centrifugally**; *Datura* is solitary.`,
        ],
      },
    ],
    worked: {
      prompt: t`An axis ends in a mature flower and has younger buds below it. Racemose or cymose?`,
      steps: [
        t`The apex ends in a flower, so growth is limited.`,
        t`Oldest at the apex is basipetal: cymose.`,
      ],
      answer: t`Cymose`,
    },
    visualSpec: t`Two flowering axes: one still growing with buds at the top, one ending in an open flower.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says apex.",
      remediation: "Apex-oldest is cymose.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says middle.",
      remediation: "Age rises steadily to the base.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says same age.",
      remediation: "Flowers mature at different times.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says acropetal.",
      remediation: "Acropetal is racemose.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says centripetal.",
      remediation: "That is a racemose opening order.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says all together.",
      remediation: "The apex flower is oldest.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says unlimited.",
      remediation: "Cyme means limited growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says a cluster.",
      remediation: "Solitary means single.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says once in life.",
      remediation: "Solitary means each flower borne singly.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says one flower.",
      remediation: "It is many florets.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says many petals.",
      remediation: "The 'petals' are ray florets.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says solitary cyme.",
      remediation: "It is many flowers, not one.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says male.",
      remediation: "Ray florets have no stamens.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says single petals.",
      remediation: "Each ray is a whole floret, not a petal.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says bisexual.",
      remediation: "Both reproductive whorls are absent.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(B)" },
      stem: t`In a racemose inflorescence, the oldest flower is`,
      verify: { kind: "value", inputs: {  }, params: { q: "oldest_racemose" } },
      options: [
        { key: "A", text: t`in the middle`, correct: false, misconceptionId: "C04-M2", value: "in_middle" },
        { key: "B", text: t`nowhere: all flowers are the same age`, correct: false, misconceptionId: "C04-M3", value: "same_age" },
        { key: "C", text: t`at the base`, correct: true, value: "at_base" },
        { key: "D", text: t`at the apex`, correct: false, misconceptionId: "C04-M1", value: "at_apex" },
      ],
      solution: {
        steps: [
          t`Racemose: acropetal.`,
          t`Oldest at the base.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(H)" },
      stem: t`In a cymose inflorescence, the flowers are borne in`,
      verify: { kind: "value", inputs: {  }, params: { q: "cymose_succession" } },
      options: [
        { key: "A", text: t`acropetal succession`, correct: false, misconceptionId: "C04-M4", value: "acropetal_s" },
        { key: "B", text: t`centripetal succession`, correct: false, misconceptionId: "C04-M5", value: "centripetal_s" },
        { key: "C", text: t`no order: all open together`, correct: false, misconceptionId: "C04-M6", value: "all_together" },
        { key: "D", text: t`basipetal succession`, correct: true, value: "basipetal_s" },
      ],
      solution: {
        steps: [
          t`Cymose: oldest at the apex.`,
          t`Basipetal.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q2(C)" },
      stem: t`*Hibiscus* is described as a solitary cyme. This means its flowers are borne`,
      verify: { kind: "value", inputs: {  }, params: { q: "solitary_cyme" } },
      options: [
        { key: "A", text: t`in a cluster, on a limited axis`, correct: false, misconceptionId: "C04-M8", value: "cluster_limited" },
        { key: "B", text: t`only once in the plant's life`, correct: false, misconceptionId: "C04-M9", value: "one_per_plant" },
        { key: "C", text: t`singly, at the end of a limited axis`, correct: true, value: "single_limited" },
        { key: "D", text: t`singly, on an axis that keeps growing`, correct: false, misconceptionId: "C04-M7", value: "single_unlimited" },
      ],
      solution: {
        steps: [
          t`Cyme: limited axis.`,
          t`Solitary: flowers singly.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(I)" },
      stem: t`A teacher shows a marigold 'flower' and says it is not one flower. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "marigold" } },
      options: [
        { key: "A", text: t`one large flower`, correct: false, misconceptionId: "C04-M10", value: "one_flower" },
        { key: "B", text: t`one flower with many rows of petals`, correct: false, misconceptionId: "C04-M11", value: "many_petals" },
        { key: "C", text: t`a solitary cyme`, correct: false, misconceptionId: "C04-M12", value: "solitary_cyme" },
        { key: "D", text: t`an inflorescence of many small florets`, correct: true, value: "inflorescence_t" },
      ],
      solution: {
        steps: [
          t`Many florets together.`,
          t`An inflorescence.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(I)" },
      stem: t`The outer ray florets of marigold are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ray_florets" } },
      options: [
        { key: "A", text: t`bisexual: both whorls present`, correct: false, misconceptionId: "C04-M15", value: "bisexual_f" },
        { key: "B", text: t`neuter: both reproductive whorls are absent`, correct: true, value: "neuter_f" },
        { key: "C", text: t`male: only stamens`, correct: false, misconceptionId: "C04-M13", value: "male_f" },
        { key: "D", text: t`single petals of one large flower`, correct: false, misconceptionId: "C04-M14", value: "female_f" },
      ],
      solution: {
        steps: [
          t`No reproductive whorls.`,
          t`Neuter.`,
        ],
      },
    },
  ],
};
