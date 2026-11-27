import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A cut on your skin heals with new cells that are exact copies of the old. How are they copied so exactly?`,
    reveal: t`By mitosis: each chromosome is copied and the two copies are pulled to opposite sides, one set to each new cell.`,
  },
  explanation: {
    intuition: [
      t`**Mitosis** is equational division: two daughter cells, each like the parent.`,
      t`It has four stages, then cytokinesis.`,
      t`It keeps the chromosome number constant: a **homotypic** division.`,
    ],
    formal: [
      {
        title: "Stages",
        points: [
          t`**Prophase**: chromatin condenses; the nuclear membrane and nucleolus fade; the **spindle forms**.`,
          t`**Metaphase**: chromosomes line up on the **equatorial plate**, spindle fibres on their centromeres.`,
          t`**Anaphase**: chromatids separate and move to **opposite poles**. **Telophase**: nuclear membranes reappear; **daughter nuclei** form.`,
        ],
      },
      {
        title: "Significance",
        points: [
          t`Growth and repair.`,
          t`Equal sharing of chromosomes and cytoplasm.`,
          t`Asexual reproduction in many organisms.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell's chromosomes are lined up at the middle. Which stage?`,
      steps: [
        t`Lining up at the equator.`,
        t`That is the metaphase plate.`,
      ],
      answer: t`Metaphase`,
    },
    visualSpec: t`Four cells in a row: prophase, metaphase, anaphase and telophase.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks metaphase.",
      remediation: "The spindle is complete by then.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks anaphase.",
      remediation: "Anaphase uses the spindle.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks telophase.",
      remediation: "The spindle breaks down.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks prophase.",
      remediation: "Chromosomes are still condensing.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks anaphase.",
      remediation: "They are moving apart.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks telophase.",
      remediation: "They are at the poles.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks condensation.",
      remediation: "That is true of prophase.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks chromatids.",
      remediation: "That is true of anaphase.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks membrane.",
      remediation: "That is true of telophase.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks metaphase.",
      remediation: "They are separated now.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks prophase.",
      remediation: "They are not separated yet.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks interphase.",
      remediation: "No chromosomes are seen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says halves.",
      remediation: "That is meiosis I.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says doubles.",
      remediation: "Mitosis keeps the number.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says looks.",
      remediation: "The point is the number.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(C)" },
      stem: t`The spindle apparatus forms during`,
      verify: { kind: "value", inputs: {  }, params: { q: "spindle" } },
      options: [
        { key: "A", text: t`Prophase`, correct: true, value: "prophase_p" },
        { key: "B", text: t`Metaphase`, correct: false, misconceptionId: "C02-M1", value: "metaphase_p" },
        { key: "C", text: t`Anaphase`, correct: false, misconceptionId: "C02-M2", value: "anaphase_p" },
        { key: "D", text: t`Telophase`, correct: false, misconceptionId: "C02-M3", value: "telophase_p" },
      ],
      solution: {
        steps: [
          t`Spindle appears.`,
          t`Prophase.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(G)" },
      stem: t`Chromosomes line up at the equatorial plane during`,
      verify: { kind: "value", inputs: {  }, params: { q: "equator" } },
      options: [
        { key: "A", text: t`Prophase`, correct: false, misconceptionId: "C02-M4", value: "prophase_p" },
        { key: "B", text: t`Anaphase`, correct: false, misconceptionId: "C02-M5", value: "anaphase_p" },
        { key: "C", text: t`Telophase`, correct: false, misconceptionId: "C02-M6", value: "telophase_p" },
        { key: "D", text: t`Metaphase`, correct: true, value: "metaphase_p" },
      ],
      solution: {
        steps: [
          t`Equatorial plate.`,
          t`Metaphase.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(H)" },
      stem: t`Which statement about mitosis is incorrect?`,
      verify: { kind: "value", inputs: {  }, params: { q: "incorrect" } },
      options: [
        { key: "A", text: t`The nuclear membrane reappears in telophase.`, correct: false, misconceptionId: "C02-M9", value: "membrane_telophase" },
        { key: "B", text: t`Daughter nuclei are formed at metaphase.`, correct: true, value: "nuclei_metaphase" },
        { key: "C", text: t`Chromatin condenses in prophase.`, correct: false, misconceptionId: "C02-M7", value: "condense_prophase" },
        { key: "D", text: t`Daughter chromatids separate in anaphase.`, correct: false, misconceptionId: "C02-M8", value: "chromatids_anaphase" },
      ],
      solution: {
        steps: [
          t`Nuclei form in telophase.`,
          t`Daughter nuclei are formed at metaphase.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q2(B)" },
      stem: t`In an onion root tip, a cell shows two groups of chromosomes at opposite ends. It is in`,
      verify: { kind: "value", inputs: {  }, params: { q: "two_groups" } },
      options: [
        { key: "A", text: t`Interphase`, correct: false, misconceptionId: "C02-M12", value: "interphase_p" },
        { key: "B", text: t`Anaphase`, correct: true, value: "anaphase_p" },
        { key: "C", text: t`Metaphase`, correct: false, misconceptionId: "C02-M10", value: "metaphase_p" },
        { key: "D", text: t`Prophase`, correct: false, misconceptionId: "C02-M11", value: "prophase_p" },
      ],
      solution: {
        steps: [
          t`Groups at the poles.`,
          t`Anaphase.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q2(G)" },
      stem: t`Mitosis and meiosis II are called homotypic divisions because`,
      verify: { kind: "value", inputs: {  }, params: { q: "homotypic" } },
      options: [
        { key: "A", text: t`the daughter cells only look alike`, correct: false, misconceptionId: "C02-M15", value: "same_shape_only" },
        { key: "B", text: t`the daughter cells keep the parent cell's chromosome number`, correct: true, value: "same_number" },
        { key: "C", text: t`they halve the chromosome number`, correct: false, misconceptionId: "C02-M13", value: "halves_number" },
        { key: "D", text: t`they double the chromosome number`, correct: false, misconceptionId: "C02-M14", value: "doubles_number" },
      ],
      solution: {
        steps: [
          t`Same number.`,
          t`Daughter cells keep the chromosome number.`,
        ],
      },
    },
  ],
};
