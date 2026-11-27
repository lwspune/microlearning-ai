import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A testis must make millions of sperms. If each meiosis gives four, how many meioses make 80 sperms?`,
    reveal: t`Twenty: each diploid cell gives four haploid cells, each of which becomes a sperm.`,
  },
  explanation: {
    intuition: [
      t`After meiosis I, a short rest: **interkinesis**.`,
      t`**Meiosis II** separates the chromatids, like mitosis.`,
      t`Result: **four haploid cells** from one diploid cell.`,
    ],
    formal: [
      {
        title: "Meiosis II",
        points: [
          t`A **homotypic** division: chromosome number does not change.`,
          t`Chromatids of each chromosome separate.`,
          t`Cells formed by meiosis have half the body cells' number: an onion with 16 in its leaf has **8** in its pollen.`,
        ],
      },
      {
        title: "Significance",
        points: [
          t`Keeps the chromosome number constant from generation to generation.`,
          t`**Crossing over** and random assortment create variation.`,
          t`Variation is the raw material for **evolution**; linked genes can be separated by crossing over.`,
        ],
      },
    ],
    worked: {
      prompt: t`A human body cell has 46 chromosomes. How many does a sperm have?`,
      steps: [
        t`Meiosis halves the number.`,
        t`$46 \div 2 = 23$.`,
      ],
      answer: t`23`,
    },
    visualSpec: t`One diploid cell dividing twice into four haploid cells.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks interphase I.",
      remediation: "There is no DNA copying between.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks interphase II.",
      remediation: "The link is interkinesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks anaphase I.",
      remediation: "That is within meiosis I.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Divides by 2.",
      remediation: "Each meiosis gives four.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Gives one per meiosis.",
      remediation: "Each meiosis gives four.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Divides by 8.",
      remediation: "Each meiosis gives four.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Keeps it at 16.",
      remediation: "Pollen is haploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Doubles it.",
      remediation: "Meiosis halves it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Quarters it.",
      remediation: "Meiosis halves it once.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says identical.",
      remediation: "Crossing over makes them differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says doubles.",
      remediation: "Meiosis halves.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says no role.",
      remediation: "Variation drives evolution.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says mitosis.",
      remediation: "Mitosis has no crossing over.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says synapsis.",
      remediation: "Pairing alone does not swap.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says never.",
      remediation: "Crossing over can separate them.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(A)" },
      stem: t`The connecting link between meiosis I and meiosis II is`,
      verify: { kind: "value", inputs: {  }, params: { q: "link" } },
      options: [
        { key: "A", text: t`interphase II`, correct: false, misconceptionId: "C04-M2", value: "interphase_two" },
        { key: "B", text: t`anaphase I`, correct: false, misconceptionId: "C04-M3", value: "anaphase_one" },
        { key: "C", text: t`interkinesis`, correct: true, value: "interkinesis_s" },
        { key: "D", text: t`interphase I`, correct: false, misconceptionId: "C04-M1", value: "interphase_one" },
      ],
      solution: {
        steps: [
          t`Short rest between.`,
          t`Interkinesis.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(E)" },
      stem: t`How many meiotic divisions are needed to form 80 sperms?`,
      verify: { kind: "value", inputs: { s: "80" }, params: { q: "sperms" } },
      options: [
        { key: "A", text: t`$40$`, correct: false, misconceptionId: "C04-M4", value: "40" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C04-M5", value: "80" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C04-M6", value: "10" },
        { key: "D", text: t`$20$`, correct: true, value: "20" },
      ],
      solution: {
        steps: [
          t`$80 \div 4$.`,
          t`20.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q6" },
      stem: t`An onion leaf cell has 16 chromosomes. How many does its pollen grain have?`,
      verify: { kind: "value", inputs: { n: "16" }, params: { q: "pollen" } },
      options: [
        { key: "A", text: t`$32$`, correct: false, misconceptionId: "C04-M8", value: "32" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C04-M9", value: "4" },
        { key: "C", text: t`$8$`, correct: true, value: "8" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C04-M7", value: "16" },
      ],
      solution: {
        steps: [
          t`$16 \div 2$.`,
          t`8.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q2(F)" },
      stem: t`Meiosis helps evolution because`,
      verify: { kind: "value", inputs: {  }, params: { q: "evolution" } },
      options: [
        { key: "A", text: t`it keeps the offspring identical`, correct: false, misconceptionId: "C04-M10", value: "keeps_identical" },
        { key: "B", text: t`it doubles the chromosomes`, correct: false, misconceptionId: "C04-M11", value: "doubles_chromosomes" },
        { key: "C", text: t`it plays no role`, correct: false, misconceptionId: "C04-M12", value: "no_role" },
        { key: "D", text: t`crossing over creates genetic variation`, correct: true, value: "crossing_variation" },
      ],
      solution: {
        steps: [
          t`Variation.`,
          t`Crossing over creates variation.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q2(D)" },
      stem: t`Two genes on the same chromosome can still be separated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "linked" } },
      options: [
        { key: "A", text: t`nothing: they never separate`, correct: false, misconceptionId: "C04-M15", value: "never_separate" },
        { key: "B", text: t`crossing over in prophase I`, correct: true, value: "crossing_over" },
        { key: "C", text: t`mitosis alone`, correct: false, misconceptionId: "C04-M13", value: "mitosis_only" },
        { key: "D", text: t`synapsis alone`, correct: false, misconceptionId: "C04-M14", value: "synapsis_only" },
      ],
      solution: {
        steps: [
          t`Exchange of segments.`,
          t`Crossing over.`,
        ],
      },
    },
  ],
};
