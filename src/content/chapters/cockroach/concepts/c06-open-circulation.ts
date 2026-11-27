import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Cut a cockroach and its blood is not red. Why?`,
    reveal: t`Its blood, haemolymph, has no pigment and does not carry oxygen.`,
  },
  explanation: {
    intuition: [
      t`Cockroach has an **open** circulatory system.`,
      t`Blood bathes the organs in the **haemocoel**.`,
      t`A long dorsal heart pumps it forward.`,
    ],
    formal: [
      {
        title: "Blood and sinuses",
        points: [
          t`**Haemolymph**: colourless plasma with seven types of haemocytes.`,
          t`Diaphragms divide the haemocoel into pericardial, perivisceral and perineural sinuses.`,
          t`The ventral nerve cord lies in the **perineural** sinus.`,
        ],
      },
      {
        title: "Heart and beat",
        points: [
          t`The **heart** has 13 chambers: ten abdominal, three thoracic.`,
          t`**Diastole**: alary muscles contract; blood enters through the **ostia**.`,
          t`**Systole**: ostia close; blood goes out through the dorsal aorta to the head.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why can blood not flow back out of the heart through the ostia?`,
      steps: [
        t`Each ostium has valves.`,
        t`They allow flow only from sinus into heart.`,
      ],
      answer: t`Valves of the ostia`,
    },
    visualSpec: t`A cross-section showing three sinuses stacked: pericardial, perivisceral, perineural.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says closed.",
      remediation: "Blood flows into open sinuses.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says no system.",
      remediation: "It has a heart and aorta.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says double.",
      remediation: "It is open, through sinuses.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says no cells.",
      remediation: "It has seven types of haemocytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says only water.",
      remediation: "Plasma carries solutes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says no nutrients.",
      remediation: "Plasma is rich in nutrients.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Counts abdomen only.",
      remediation: "Three thoracic chambers too.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Counts ostia chambers.",
      remediation: "The 13th has no ostia.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says four.",
      remediation: "Four chambers are the human heart.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says pericardial.",
      remediation: "That holds the heart.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says perivisceral.",
      remediation: "That holds the gut and fat bodies.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says dorsal aorta.",
      remediation: "The aorta is a blood vessel.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says aorta outflow.",
      remediation: "That happens in systole.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says ostia close.",
      remediation: "They close in systole.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says ostia outflow.",
      remediation: "Ostia valves allow only inflow.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(G)" },
      stem: t`The circulatory system of the cockroach is`,
      verify: { kind: "value", inputs: {  }, params: { q: "type" } },
      options: [
        { key: "A", text: t`closed: blood always stays in vessels`, correct: false, misconceptionId: "C06-M1", value: "closed_vessels" },
        { key: "B", text: t`absent: it has no heart`, correct: false, misconceptionId: "C06-M2", value: "no_system" },
        { key: "C", text: t`double, as in human beings`, correct: false, misconceptionId: "C06-M3", value: "double_circuit" },
        { key: "D", text: t`open: blood flows through the sinuses of the haemocoel`, correct: true, value: "open_sinuses" },
      ],
      solution: {
        steps: [
          t`Haemocoel sinuses.`,
          t`Open system.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(G)" },
      stem: t`The haemolymph of the cockroach is colourless because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "colour" } },
      options: [
        { key: "A", text: t`has no pigment`, correct: true, value: "no_pigment" },
        { key: "B", text: t`has no blood cells`, correct: false, misconceptionId: "C06-M4", value: "no_cells" },
        { key: "C", text: t`is only water`, correct: false, misconceptionId: "C06-M5", value: "only_water" },
        { key: "D", text: t`carries no nutrients`, correct: false, misconceptionId: "C06-M6", value: "no_nutrients" },
      ],
      solution: {
        steps: [
          t`No pigment.`,
          t`Colourless.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(G)" },
      stem: t`How many chambers are present in the heart of cockroach?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chambers" } },
      options: [
        { key: "A", text: t`13`, correct: true, value: "thirteen_c" },
        { key: "B", text: t`10`, correct: false, misconceptionId: "C06-M7", value: "ten_c" },
        { key: "C", text: t`12`, correct: false, misconceptionId: "C06-M8", value: "twelve_c" },
        { key: "D", text: t`4`, correct: false, misconceptionId: "C06-M9", value: "four_c" },
      ],
      solution: {
        steps: [
          t`Ten plus three.`,
          t`13 chambers.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(G)" },
      stem: t`The ventral nerve cord lies in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "sinus" } },
      options: [
        { key: "A", text: t`dorsal aorta`, correct: false, misconceptionId: "C06-M12", value: "dorsal_aorta" },
        { key: "B", text: t`perineural sinus`, correct: true, value: "perineural_s" },
        { key: "C", text: t`pericardial sinus`, correct: false, misconceptionId: "C06-M10", value: "pericardial_s" },
        { key: "D", text: t`perivisceral sinus`, correct: false, misconceptionId: "C06-M11", value: "perivisceral_s" },
      ],
      solution: {
        steps: [
          t`Ventral sinus.`,
          t`Perineural.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(G)" },
      stem: t`During diastole of the cockroach heart,`,
      verify: { kind: "value", inputs: {  }, params: { q: "diastole" } },
      options: [
        { key: "A", text: t`blood enters the heart through the ostia`, correct: true, value: "ostia_inflow" },
        { key: "B", text: t`blood is pushed out through the dorsal aorta`, correct: false, misconceptionId: "C06-M13", value: "aorta_outflow" },
        { key: "C", text: t`the ostia are closed by their valves`, correct: false, misconceptionId: "C06-M14", value: "ostia_close" },
        { key: "D", text: t`blood leaves the heart through the ostia`, correct: false, misconceptionId: "C06-M15", value: "ostia_outflow" },
      ],
      solution: {
        steps: [
          t`Alary muscles contract.`,
          t`Blood enters through ostia.`,
        ],
      },
    },
  ],
};
