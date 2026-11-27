import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`After a long sprint your legs ache and cramp. Why?`,
    reveal: t`Short of oxygen, the muscles respired anaerobically and lactic acid piled up: muscle fatigue.`,
  },
  explanation: {
    intuition: [
      t`Rapid stimuli keep a muscle contracted: **tetanus**.`,
      t`**Lactic acid** from anaerobic work causes **fatigue**.`,
      t`Myoglobin-rich **red fibres** resist fatigue; **white fibres** tire sooner.`,
    ],
    formal: [
      {
        title: "Tetanus and fatigue",
        points: [
          t`When stimuli come so rapidly the muscle cannot relax, it stays in a sustained contraction: **tetanus**.`,
          t`In strenuous exercise oxygen falls short, so pyruvic acid is reduced to **lactic acid**.`,
          t`Lactic acid causes tiredness, pain and cramps: **muscle fatigue**.`,
        ],
      },
      {
        title: "Red and white fibres",
        points: [
          t`**Red fibres** have much **myoglobin**, an iron-containing red pigment that carries oxygen.`,
          t`They get oxygen from myoglobin and haemoglobin, so they keep respiring aerobically.`,
          t`**White fibres** have little myoglobin; they turn anaerobic, make less ATP and lactic acid.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sprinter's thigh fibres are mostly white. Will they tire fast or slow in a long race?`,
      steps: [
        t`White fibres have little myoglobin, so oxygen soon runs short.`,
        t`They turn anaerobic and lactic acid builds up.`,
      ],
      answer: t`Fast`,
    },
    visualSpec: t`A row of stimulus marks close together under one flat, sustained contraction curve: tetanus.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks pyruvic acid.",
      remediation: "Pyruvic acid is used up, not stored.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks malic acid.",
      remediation: "Malic acid is a Krebs intermediate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks succinic acid.",
      remediation: "Succinic acid is a Krebs intermediate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says single contraction.",
      remediation: "The head is held for a long time.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says no contraction.",
      remediation: "Muscles must hold the head up.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says fatigue.",
      remediation: "Holding steady is a contraction, not fatigue.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says single stimulus.",
      remediation: "One stimulus gives one contraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says lactic build-up.",
      remediation: "That causes fatigue.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says slow stimuli.",
      remediation: "Long gaps let the muscle relax.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says little myoglobin.",
      remediation: "That is the white fibre.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says anaerobic.",
      remediation: "Red fibres stay aerobic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says more lactic acid.",
      remediation: "Red fibres avoid lactic acid build-up.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says more ATP.",
      remediation: "Anaerobic glycolysis yields less ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says no waste.",
      remediation: "It produces lactic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says pyruvic acid piles up.",
      remediation: "Pyruvic acid is reduced to lactic acid.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(C)" },
      stem: t`Muscle fatigue is due to the accumulation of`,
      verify: { kind: "value", inputs: {  }, params: { q: "fatigue" } },
      options: [
        { key: "A", text: t`malic acid`, correct: false, misconceptionId: "C03-M2", value: "malic_acid" },
        { key: "B", text: t`succinic acid`, correct: false, misconceptionId: "C03-M3", value: "succinic_acid" },
        { key: "C", text: t`lactic acid`, correct: true, value: "lactic_acid" },
        { key: "D", text: t`pyruvic acid`, correct: false, misconceptionId: "C03-M1", value: "pyruvic_acid" },
      ],
      solution: {
        steps: [
          t`Anaerobic product.`,
          t`Lactic acid.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(A)" },
      stem: t`While you read your assignment, your neck muscles hold your head steady for a long time. They show`,
      verify: { kind: "value", inputs: {  }, params: { q: "neck" } },
      options: [
        { key: "A", text: t`no contraction at all`, correct: false, misconceptionId: "C03-M5", value: "no_contraction" },
        { key: "B", text: t`muscle fatigue`, correct: false, misconceptionId: "C03-M6", value: "fatigue_t" },
        { key: "C", text: t`a sustained contraction of the tetanus type`, correct: true, value: "tetanus_t" },
        { key: "D", text: t`a single contraction followed by relaxation`, correct: false, misconceptionId: "C03-M4", value: "single_contraction" },
      ],
      solution: {
        steps: [
          t`Head held steady.`,
          t`Tetanus.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(A)" },
      stem: t`Tetanus, a steady sustained contraction, arises when`,
      verify: { kind: "value", inputs: {  }, params: { q: "tetanus_cause" } },
      options: [
        { key: "A", text: t`a single strong stimulus reaches the muscle`, correct: false, misconceptionId: "C03-M7", value: "single_stimulus" },
        { key: "B", text: t`lactic acid builds up in the muscle`, correct: false, misconceptionId: "C03-M8", value: "lactic_build_up" },
        { key: "C", text: t`stimuli arrive slowly with long gaps between them`, correct: false, misconceptionId: "C03-M9", value: "slow_stimuli" },
        { key: "D", text: t`stimuli arrive so rapidly that the muscle has no time to relax`, correct: true, value: "rapid_stimuli" },
      ],
      solution: {
        steps: [
          t`No time to relax.`,
          t`Rapid stimuli.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(F)" },
      stem: t`A red muscle fibre can work for a long period because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "red" } },
      options: [
        { key: "A", text: t`respires anaerobically`, correct: false, misconceptionId: "C03-M11", value: "anaerobic_t" },
        { key: "B", text: t`produces more lactic acid`, correct: false, misconceptionId: "C03-M12", value: "more_lactic" },
        { key: "C", text: t`is rich in myoglobin, so it gets oxygen from myoglobin and haemoglobin`, correct: true, value: "much_myoglobin" },
        { key: "D", text: t`has very little myoglobin`, correct: false, misconceptionId: "C03-M10", value: "little_myoglobin" },
      ],
      solution: {
        steps: [
          t`Two oxygen sources.`,
          t`Much myoglobin.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(F)" },
      stem: t`A white fibre short of oxygen contracts anaerobically. Anaerobic glycolysis`,
      verify: { kind: "value", inputs: {  }, params: { q: "anaerobic" } },
      options: [
        { key: "A", text: t`yields less ATP and produces lactic acid`, correct: true, value: "less_atp_lactic" },
        { key: "B", text: t`yields more ATP and produces lactic acid`, correct: false, misconceptionId: "C03-M13", value: "more_atp_lactic" },
        { key: "C", text: t`yields less ATP and leaves no waste`, correct: false, misconceptionId: "C03-M14", value: "less_atp_no_waste" },
        { key: "D", text: t`yields less ATP and piles up pyruvic acid`, correct: false, misconceptionId: "C03-M15", value: "pyruvic_builds" },
      ],
      solution: {
        steps: [
          t`Anaerobic glycolysis.`,
          t`Less ATP, lactic acid.`,
        ],
      },
    },
  ],
};
