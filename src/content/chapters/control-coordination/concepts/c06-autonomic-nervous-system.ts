import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`In a fright your heart pounds and your mouth goes dry, though you never chose this. What took over?`,
    reveal: t`The sympathetic nervous system, which prepares the body to fight or flee.`,
  },
  explanation: {
    intuition: [
      t`The **autonomic nervous system** controls involuntary organs.`,
      t`It has two parts that work against each other.`,
      t`Together they keep balance.`,
    ],
    formal: [
      {
        title: "Sympathetic",
        points: [
          t`**Fight or flight**: faster heart beat, more blood to muscles.`,
          t`Relaxes the urinary bladder.`,
          t`Its postganglionic fibres release **noradrenaline** and adrenaline.`,
        ],
      },
      {
        title: "Parasympathetic",
        points: [
          t`**Rest and digest**: slower heart beat.`,
          t`**Contracts** the urinary bladder.`,
          t`It releases acetylcholine. The **adrenal medulla** secretes the sympathetic hormones too.`,
        ],
      },
    ],
    worked: {
      prompt: t`After a heavy meal you feel relaxed and sleepy. Which part is active?`,
      steps: [
        t`Digestion and rest are favoured.`,
        t`That is the parasympathetic system.`,
      ],
      answer: t`Parasympathetic`,
    },
    visualSpec: t`Two columns, sympathetic and parasympathetic, with arrows to heart, bladder and pupils.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks parasympathetic.",
      remediation: "That calms the body.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks somatic.",
      remediation: "Somatic nerves move skeletal muscles.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks voluntary control.",
      remediation: "The response is involuntary.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says slower.",
      remediation: "Parasympathetic slows it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says it stops.",
      remediation: "It speeds up.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says unchanged.",
      remediation: "It speeds up.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says relaxes.",
      remediation: "Sympathetic relaxes it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says unchanged.",
      remediation: "Parasympathetic contracts it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says blocks urine.",
      remediation: "It helps empty the bladder.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks acetylcholine.",
      remediation: "That is parasympathetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks dopamine.",
      remediation: "Dopamine is a brain transmitter.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks insulin.",
      remediation: "Insulin is a hormone.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks cortisol.",
      remediation: "Cortisol is from the cortex.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says it slows the heart.",
      remediation: "It speeds the heart.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says pituitary control.",
      remediation: "It is under nerves.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q7(5)" },
      stem: t`Krishna sees a bus accident; his heart races and his hands go cold. This is the work of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "accident" } },
      options: [
        { key: "A", text: t`parasympathetic nervous system`, correct: false, misconceptionId: "C06-M1", value: "parasympathetic_s" },
        { key: "B", text: t`somatic nervous system`, correct: false, misconceptionId: "C06-M2", value: "somatic_s" },
        { key: "C", text: t`voluntary control of the cerebrum`, correct: false, misconceptionId: "C06-M3", value: "voluntary_s" },
        { key: "D", text: t`sympathetic nervous system`, correct: true, value: "sympathetic_s" },
      ],
      solution: {
        steps: [
          t`Fight or flight.`,
          t`Sympathetic.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q5(3)" },
      stem: t`The sympathetic nervous system makes the heart beat`,
      verify: { kind: "value", inputs: {  }, params: { q: "heart" } },
      options: [
        { key: "A", text: t`faster`, correct: true, value: "accelerates_h" },
        { key: "B", text: t`slower`, correct: false, misconceptionId: "C06-M4", value: "slows_h" },
        { key: "C", text: t`stop`, correct: false, misconceptionId: "C06-M5", value: "stops_h" },
        { key: "D", text: t`unchanged`, correct: false, misconceptionId: "C06-M6", value: "no_effect" },
      ],
      solution: {
        steps: [
          t`Sympathetic speeds the heart.`,
          t`Faster.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q5(3)" },
      stem: t`The parasympathetic nervous system makes the urinary bladder`,
      verify: { kind: "value", inputs: {  }, params: { q: "bladder" } },
      options: [
        { key: "A", text: t`contract`, correct: true, value: "contracts_b" },
        { key: "B", text: t`relax`, correct: false, misconceptionId: "C06-M7", value: "relaxes_b" },
        { key: "C", text: t`unchanged`, correct: false, misconceptionId: "C06-M8", value: "no_effect" },
        { key: "D", text: t`block urine`, correct: false, misconceptionId: "C06-M9", value: "blocks_urine" },
      ],
      solution: {
        steps: [
          t`Parasympathetic empties the bladder.`,
          t`Contract.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q5(10)" },
      stem: t`At their effector organs, sympathetic postganglionic fibres release`,
      verify: { kind: "value", inputs: {  }, params: { q: "fibres" } },
      options: [
        { key: "A", text: t`insulin`, correct: false, misconceptionId: "C06-M12", value: "insulin_t" },
        { key: "B", text: t`noradrenaline (and adrenaline)`, correct: true, value: "noradrenaline_t" },
        { key: "C", text: t`acetylcholine`, correct: false, misconceptionId: "C06-M10", value: "acetylcholine_t" },
        { key: "D", text: t`dopamine`, correct: false, misconceptionId: "C06-M11", value: "dopamine_t" },
      ],
      solution: {
        steps: [
          t`Adrenergic fibres.`,
          t`Noradrenaline.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q5(10)" },
      stem: t`The adrenal medulla works with the sympathetic nervous system because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "medulla" } },
      options: [
        { key: "A", text: t`secretes the same adrenaline and noradrenaline`, correct: true, value: "same_hormones" },
        { key: "B", text: t`secretes cortisol`, correct: false, misconceptionId: "C06-M13", value: "secretes_cortisol" },
        { key: "C", text: t`slows the heart`, correct: false, misconceptionId: "C06-M14", value: "slows_heart" },
        { key: "D", text: t`is controlled by the pituitary`, correct: false, misconceptionId: "C06-M15", value: "pituitary_control" },
      ],
      solution: {
        steps: [
          t`Same hormones as the fibres.`,
          t`Adrenaline and noradrenaline.`,
        ],
      },
    },
  ],
};
