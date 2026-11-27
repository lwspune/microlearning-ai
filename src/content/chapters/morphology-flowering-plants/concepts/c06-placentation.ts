import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Cut a papaya and its seeds cling to the sides, yet China rose ovules sit on a central axis. Why the difference?`,
    reveal: t`The ovules sat on different placentas in the ovary: this is placentation.`,
  },
  explanation: {
    intuition: [
      t`The **placenta** is the soft fertile tissue in the ovary that bears ovules.`,
      t`**Placentation** is the way the ovules are arranged on it.`,
      t`Seeds keep the positions their ovules had.`,
    ],
    formal: [
      {
        title: "Many-chambered or walled",
        points: [
          t`**Axile**: ovules on the central axis of a multilocular ovary (China rose, cotton).`,
          t`**Parietal**: ovules on the inner wall of a unilocular, syncarpous ovary (papaya).`,
          t`**Marginal**: a pod-like unilocular ovary, ovules in a row along the margin.`,
        ],
      },
      {
        title: "One chamber, central or basal",
        points: [
          t`**Basal**: a single ovule at the base of a unilocular ovary.`,
          t`**Free central**: ovules on a central axis not joined to the wall.`,
          t`Free central has no partitions; axile has chambers.`,
        ],
      },
    ],
    worked: {
      prompt: t`A pod-like, one-chambered ovary has ovules in one row along its fused margins. Name the placentation.`,
      steps: [
        t`One chamber, ovules along the margin.`,
        t`That is the marginal type.`,
      ],
      answer: t`Marginal`,
    },
    visualSpec: t`Five ovary cross sections showing axile, parietal, marginal, basal and free central placentation.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says sepals in the bud.",
      remediation: "That is aestivation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says leaves on the stem.",
      remediation: "That is phyllotaxy.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says flowers on an axis.",
      remediation: "That is inflorescence.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says free central.",
      remediation: "Free central has no chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says parietal.",
      remediation: "Parietal ovules are on the wall.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says marginal.",
      remediation: "Marginal is one chamber, one row.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says axile.",
      remediation: "Axile ovules are at the centre.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says marginal.",
      remediation: "Marginal is a pod with one row.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says basal.",
      remediation: "Basal has a single ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says free central.",
      remediation: "Free central has many ovules.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says marginal.",
      remediation: "Marginal ovules are along the margin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says axile.",
      remediation: "Axile needs several chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says axile.",
      remediation: "Axile has partitions.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says basal.",
      remediation: "Basal has one ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says parietal.",
      remediation: "Parietal ovules are on the wall.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(K)" },
      stem: t`Placentation is the arrangement of`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`sepals and petals in the bud`, correct: false, misconceptionId: "C06-M1", value: "sepals_bud" },
        { key: "B", text: t`leaves on the stem`, correct: false, misconceptionId: "C06-M2", value: "leaves_stem" },
        { key: "C", text: t`flowers on the peduncle`, correct: false, misconceptionId: "C06-M3", value: "flowers_axis" },
        { key: "D", text: t`ovules on the placenta in the ovary`, correct: true, value: "ovules_placenta" },
      ],
      solution: {
        steps: [
          t`Ovules on the placenta.`,
          t`Placentation.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(K)" },
      stem: t`In China rose and cotton, ovules sit on the central axis of a multilocular ovary. The placentation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "china_rose" } },
      options: [
        { key: "A", text: t`Axile`, correct: true, value: "axile_p" },
        { key: "B", text: t`Free central`, correct: false, misconceptionId: "C06-M4", value: "free_central_p" },
        { key: "C", text: t`Parietal`, correct: false, misconceptionId: "C06-M5", value: "parietal_p" },
        { key: "D", text: t`Marginal`, correct: false, misconceptionId: "C06-M6", value: "marginal_p" },
      ],
      solution: {
        steps: [
          t`Central axis, chambers.`,
          t`Axile.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(J)" },
      stem: t`When a papaya is cut open, all its seeds are attached to the sides. The placentation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "papaya" } },
      options: [
        { key: "A", text: t`Parietal`, correct: true, value: "parietal_p" },
        { key: "B", text: t`Axile`, correct: false, misconceptionId: "C06-M7", value: "axile_p" },
        { key: "C", text: t`Marginal`, correct: false, misconceptionId: "C06-M8", value: "marginal_p" },
        { key: "D", text: t`Basal`, correct: false, misconceptionId: "C06-M9", value: "basal_p" },
      ],
      solution: {
        steps: [
          t`Ovules on the inner wall.`,
          t`Parietal.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q6" },
      stem: t`A unilocular ovary has a single ovule at its base. The placentation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "single_ovule" } },
      options: [
        { key: "A", text: t`Axile`, correct: false, misconceptionId: "C06-M12", value: "axile_p" },
        { key: "B", text: t`Basal`, correct: true, value: "basal_p" },
        { key: "C", text: t`Free central`, correct: false, misconceptionId: "C06-M10", value: "free_central_p" },
        { key: "D", text: t`Marginal`, correct: false, misconceptionId: "C06-M11", value: "marginal_p" },
      ],
      solution: {
        steps: [
          t`One ovule at the base.`,
          t`Basal.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q6" },
      stem: t`Ovules sit on a central axis that is not joined to the ovary wall, with no partitions. The placentation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "free_axis" } },
      options: [
        { key: "A", text: t`Free central`, correct: true, value: "free_central_p" },
        { key: "B", text: t`Axile`, correct: false, misconceptionId: "C06-M13", value: "axile_p" },
        { key: "C", text: t`Basal`, correct: false, misconceptionId: "C06-M14", value: "basal_p" },
        { key: "D", text: t`Parietal`, correct: false, misconceptionId: "C06-M15", value: "parietal_p" },
      ],
      solution: {
        steps: [
          t`Free axis, no partitions.`,
          t`Free central.`,
        ],
      },
    },
  ],
};
