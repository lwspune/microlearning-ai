import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A dividing cell spends most of its life looking as if nothing is happening. What is it doing?`,
    reveal: t`Getting ready: in interphase it grows, copies its DNA and prepares, before the short burst of division.`,
  },
  explanation: {
    intuition: [
      t`The **cell cycle** is the sequence from one division to the next.`,
      t`**Interphase** is long; the **M phase** (division) is short.`,
      t`Checkpoints control the cycle.`,
    ],
    formal: [
      {
        title: "Phases",
        points: [
          t`**G₁** (8 h or more): growth; the main control point.`,
          t`**S** (6–8 h): DNA replication; **histones** made; DNA content doubles.`,
          t`**G₂** (2–5 h): preparation; then **M** (1–3 h): mitosis and cytokinesis.`,
        ],
      },
      {
        title: "Control and amitosis",
        points: [
          t`Loss of control, mainly at G₁, lets cells divide endlessly: cancer.`,
          t`**Amitosis** (direct division): the nucleus constricts and splits.`,
          t`No spindle forms and the nuclear membrane stays, as in *Paramoecium*.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell has just copied its DNA but not yet divided. Which phase is it in?`,
      steps: [
        t`DNA is copied in S.`,
        t`The next phase before M is G₂.`,
      ],
      answer: t`$\mathrm{G_2}$`,
    },
    visualSpec: t`A circular cell cycle: G₁, S, G₂ and M, with their durations.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks G₁.",
      remediation: "G₁ is growth before copying.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks G₂.",
      remediation: "G₂ comes after copying.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks G₀.",
      remediation: "G₀ is a resting state.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks G₁.",
      remediation: "Histones come with DNA in S.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks G₂.",
      remediation: "Histones come with DNA in S.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks M.",
      remediation: "M is division.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks S.",
      remediation: "S takes 6–8 h.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks G₂.",
      remediation: "G₂ takes 2–5 h.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks M.",
      remediation: "M takes 1–3 h.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks S.",
      remediation: "The main check is in G₁.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks telophase.",
      remediation: "That is the end of division.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks cytokinesis.",
      remediation: "That splits the cytoplasm.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks mitosis.",
      remediation: "Mitosis has a spindle.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks meiosis.",
      remediation: "Meiosis has a spindle.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks budding.",
      remediation: "Budding is an outgrowth.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(D)" },
      stem: t`The DNA content of a cell doubles during the`,
      verify: { kind: "value", inputs: {  }, params: { q: "dna" } },
      options: [
        { key: "A", text: t`S phase`, correct: true, value: "s_phase" },
        { key: "B", text: t`$\mathrm{G_1}$ phase`, correct: false, misconceptionId: "C01-M1", value: "g1_phase" },
        { key: "C", text: t`$\mathrm{G_2}$ phase`, correct: false, misconceptionId: "C01-M2", value: "g2_phase" },
        { key: "D", text: t`$\mathrm{G_0}$ phase`, correct: false, misconceptionId: "C01-M3", value: "g0_phase" },
      ],
      solution: {
        steps: [
          t`DNA replication.`,
          t`S phase.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(I)" },
      stem: t`Histone proteins are synthesised during the`,
      verify: { kind: "value", inputs: {  }, params: { q: "histones" } },
      options: [
        { key: "A", text: t`S phase`, correct: true, value: "s_phase" },
        { key: "B", text: t`$\mathrm{G_1}$ phase`, correct: false, misconceptionId: "C01-M4", value: "g1_phase" },
        { key: "C", text: t`$\mathrm{G_2}$ phase`, correct: false, misconceptionId: "C01-M5", value: "g2_phase" },
        { key: "D", text: t`M phase`, correct: false, misconceptionId: "C01-M6", value: "m_phase" },
      ],
      solution: {
        steps: [
          t`With DNA.`,
          t`S phase.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q3(A)" },
      stem: t`The longest sub-phase of interphase, lasting 8 hours or more, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "longest" } },
      options: [
        { key: "A", text: t`$\mathrm{G_2}$`, correct: false, misconceptionId: "C01-M8", value: "g2_phase" },
        { key: "B", text: t`M`, correct: false, misconceptionId: "C01-M9", value: "m_phase" },
        { key: "C", text: t`$\mathrm{G_1}$`, correct: true, value: "g1_phase" },
        { key: "D", text: t`S`, correct: false, misconceptionId: "C01-M7", value: "s_phase" },
      ],
      solution: {
        steps: [
          t`8 hours or more.`,
          t`$\mathrm{G_1}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q2(C)" },
      stem: t`Cancer cells divide out of control. The cell-cycle phase whose control has failed is mainly`,
      verify: { kind: "value", inputs: {  }, params: { q: "cancer" } },
      options: [
        { key: "A", text: t`$\mathrm{G_1}$ of interphase`, correct: true, value: "g1_phase" },
        { key: "B", text: t`S phase`, correct: false, misconceptionId: "C01-M10", value: "s_phase" },
        { key: "C", text: t`telophase`, correct: false, misconceptionId: "C01-M11", value: "telophase_p" },
        { key: "D", text: t`cytokinesis`, correct: false, misconceptionId: "C01-M12", value: "cytokinesis_p" },
      ],
      solution: {
        steps: [
          t`Main checkpoint.`,
          t`$\mathrm{G_1}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q2(E)" },
      stem: t`*Paramoecium* divides with no spindle and without its nuclear membrane disappearing. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "paramoecium" } },
      options: [
        { key: "A", text: t`amitosis`, correct: true, value: "amitosis_d" },
        { key: "B", text: t`mitosis`, correct: false, misconceptionId: "C01-M13", value: "mitosis_d" },
        { key: "C", text: t`meiosis`, correct: false, misconceptionId: "C01-M14", value: "meiosis_d" },
        { key: "D", text: t`budding`, correct: false, misconceptionId: "C01-M15", value: "budding_d" },
      ],
      solution: {
        steps: [
          t`No spindle.`,
          t`Amitosis.`,
        ],
      },
    },
  ],
};
