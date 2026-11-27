import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Water rises from the roots, and sugar goes down from the leaves. Do they use the same pipes?`,
    reveal: t`No: xylem carries water and minerals up, and phloem carries food from the leaves to other parts.`,
  },
  explanation: {
    intuition: [
      t`A **complex permanent tissue** has several cell types working as one.`,
      t`Plants have two: **xylem** and **phloem**.`,
      t`Each has conducting cells, parenchyma and fibres.`,
    ],
    formal: [
      {
        title: "Xylem",
        points: [
          t`Tracheids, vessels, xylem parenchyma and xylem fibres.`,
          t`Carries **water and minerals**; a dead tissue except xylem parenchyma.`,
          t`Xylem parenchyma conducts sideways and stores starch and tannins.`,
        ],
      },
      {
        title: "Phloem",
        points: [
          t`Sieve tubes, companion cells, phloem parenchyma and phloem fibres.`,
          t`Carries **organic food** from source to sink; living except the fibres.`,
          t`Pteridophytes and gymnosperms have **sieve cells** in place of sieve tubes.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which element of phloem is dead?`,
      steps: [
        t`Phloem is a living tissue.`,
        t`Only its fibres are dead.`,
      ],
      answer: t`Phloem fibres`,
    },
    visualSpec: t`Two columns: xylem with tracheids and vessels, phloem with sieve tubes and companion cells.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks parenchyma.",
      remediation: "It has one cell type.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks sclerenchyma.",
      remediation: "It is a simple tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks chlorenchyma.",
      remediation: "It is parenchyma with chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says food.",
      remediation: "Phloem carries food.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says gases.",
      remediation: "Xylem carries water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says both.",
      remediation: "Food is phloem's job.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks tracheids.",
      remediation: "Tracheids are dead.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks vessels.",
      remediation: "Vessels are dead.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks fibres.",
      remediation: "Xylem fibres are dead.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks sieve tubes.",
      remediation: "Sieve tubes are living.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks companion cells.",
      remediation: "Companion cells are living.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks parenchyma.",
      remediation: "Phloem parenchyma is living.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks sieve tubes.",
      remediation: "Those are in angiosperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks vessels.",
      remediation: "Vessels are xylem.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks tracheids.",
      remediation: "Tracheids are xylem.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q1(D)" },
      stem: t`______ is a complex permanent tissue.`,
      verify: { kind: "value", inputs: {  }, params: { q: "complex" } },
      options: [
        { key: "A", text: t`Sclerenchyma`, correct: false, misconceptionId: "C03-M2", value: "sclerenchyma_s" },
        { key: "B", text: t`Chlorenchyma`, correct: false, misconceptionId: "C03-M3", value: "chlorenchyma_t" },
        { key: "C", text: t`Xylem`, correct: true, value: "xylem_t" },
        { key: "D", text: t`Parenchyma`, correct: false, misconceptionId: "C03-M1", value: "parenchyma_s" },
      ],
      solution: {
        steps: [
          t`Several cell types.`,
          t`Xylem.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q4(B)" },
      stem: t`Xylem conducts`,
      verify: { kind: "value", inputs: {  }, params: { q: "conducts" } },
      options: [
        { key: "A", text: t`only gases`, correct: false, misconceptionId: "C03-M5", value: "gases_only" },
        { key: "B", text: t`both food and water equally`, correct: false, misconceptionId: "C03-M6", value: "food_and_water" },
        { key: "C", text: t`water and minerals`, correct: true, value: "water_minerals" },
        { key: "D", text: t`organic food from leaf to other parts`, correct: false, misconceptionId: "C03-M4", value: "organic_food" },
      ],
      solution: {
        steps: [
          t`Tracheids and vessels.`,
          t`Water and minerals.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q4(B)" },
      stem: t`The only living element of xylem is`,
      verify: { kind: "value", inputs: {  }, params: { q: "xylem_living" } },
      options: [
        { key: "A", text: t`tracheids`, correct: false, misconceptionId: "C03-M7", value: "tracheids_x" },
        { key: "B", text: t`vessels`, correct: false, misconceptionId: "C03-M8", value: "vessels_x" },
        { key: "C", text: t`xylem fibres`, correct: false, misconceptionId: "C03-M9", value: "xylem_fibres" },
        { key: "D", text: t`xylem parenchyma`, correct: true, value: "xylem_parenchyma" },
      ],
      solution: {
        steps: [
          t`Rest is dead.`,
          t`Xylem parenchyma.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q4(B)" },
      stem: t`The only dead element of phloem is`,
      verify: { kind: "value", inputs: {  }, params: { q: "phloem_dead" } },
      options: [
        { key: "A", text: t`companion cells`, correct: false, misconceptionId: "C03-M11", value: "companion_cells" },
        { key: "B", text: t`phloem parenchyma`, correct: false, misconceptionId: "C03-M12", value: "phloem_parenchyma" },
        { key: "C", text: t`phloem fibres`, correct: true, value: "phloem_fibres" },
        { key: "D", text: t`sieve tubes`, correct: false, misconceptionId: "C03-M10", value: "sieve_tubes" },
      ],
      solution: {
        steps: [
          t`Rest is living.`,
          t`Phloem fibres.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q4(B)" },
      stem: t`In pteridophytes and gymnosperms, food is conducted in phloem by`,
      verify: { kind: "value", inputs: {  }, params: { q: "gymno" } },
      options: [
        { key: "A", text: t`sieve cells`, correct: true, value: "sieve_cells" },
        { key: "B", text: t`sieve tubes with companion cells`, correct: false, misconceptionId: "C03-M13", value: "sieve_tubes" },
        { key: "C", text: t`vessels`, correct: false, misconceptionId: "C03-M14", value: "vessels_x" },
        { key: "D", text: t`tracheids`, correct: false, misconceptionId: "C03-M15", value: "tracheids_x" },
      ],
      solution: {
        steps: [
          t`No sieve tubes there.`,
          t`Sieve cells.`,
        ],
      },
    },
  ],
};
