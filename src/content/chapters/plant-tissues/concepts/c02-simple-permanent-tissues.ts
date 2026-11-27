import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A young stem bends without snapping, yet jute rope is very strong. Which tissues give this?`,
    reveal: t`Collenchyma, living cells with thickened corners, supports young stems; sclerenchyma fibres with lignified walls give jute its strength.`,
  },
  explanation: {
    intuition: [
      t`A **simple permanent tissue** has one type of cell.`,
      t`The three are **parenchyma**, **collenchyma** and **sclerenchyma**.`,
      t`They differ mainly in their cell walls.`,
    ],
    formal: [
      {
        title: "Parenchyma and collenchyma",
        points: [
          t`**Parenchyma**: living cells, thin cellulose walls; it stores food and photosynthesises.`,
          t`With many chloroplasts, as in leaf mesophyll, it is **chlorenchyma**.`,
          t`**Collenchyma**: living cells; corners thickened with cellulose and pectin.`,
        ],
      },
      {
        title: "Sclerenchyma",
        points: [
          t`Living when formed, **dead at maturity**; no cytoplasm.`,
          t`Walls thick by **uniform deposition of lignin**; the lumen is narrow.`,
          t`**Fibres** give strength (jute, flax, hemp); **sclereids** give stiffness.`,
        ],
      },
    ],
    worked: {
      prompt: t`A tissue has dead cells with thick, evenly lignified walls. Name it.`,
      steps: [
        t`Dead at maturity.`,
        t`Uniform lignin: sclerenchyma.`,
      ],
      answer: t`Sclerenchyma`,
    },
    visualSpec: t`Three cells side by side: thin-walled parenchyma, corner-thickened collenchyma, thick-walled sclerenchyma.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says dead.",
      remediation: "That is sclerenchyma.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says both.",
      remediation: "All collenchyma cells are living.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says meristematic.",
      remediation: "It is a permanent tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks corners.",
      remediation: "That is collenchyma.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks thin cellulose.",
      remediation: "That is parenchyma.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks suberin.",
      remediation: "Suberin is in cork.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says living, thick.",
      remediation: "That is collenchyma.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says living, thin.",
      remediation: "That is parenchyma.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says wide lumen.",
      remediation: "Thick walls leave a narrow lumen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks collenchyma.",
      remediation: "Fibres are sclerenchyma.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks parenchyma.",
      remediation: "Parenchyma is thin-walled.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks vessels.",
      remediation: "Vessels conduct water.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks collenchyma.",
      remediation: "Its walls have thick corners.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks sclerenchyma.",
      remediation: "It is dead and thick-walled.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks epidermis.",
      remediation: "Epidermal cells are compact.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q1(C)" },
      stem: t`Collenchyma is a type of ______ tissue.`,
      verify: { kind: "value", inputs: {  }, params: { q: "collenchyma" } },
      options: [
        { key: "A", text: t`living`, correct: true, value: "living_t" },
        { key: "B", text: t`dead`, correct: false, misconceptionId: "C02-M1", value: "dead_t" },
        { key: "C", text: t`living and dead`, correct: false, misconceptionId: "C02-M2", value: "living_and_dead" },
        { key: "D", text: t`meristematic`, correct: false, misconceptionId: "C02-M3", value: "meristematic_t" },
      ],
      solution: {
        steps: [
          t`Cells have cytoplasm.`,
          t`Living.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(C)" },
      stem: t`The thick wall of a sclerenchyma cell is due to`,
      verify: { kind: "value", inputs: {  }, params: { q: "lignin" } },
      options: [
        { key: "A", text: t`cellulose and pectin at the corners`, correct: false, misconceptionId: "C02-M4", value: "corner_pectin" },
        { key: "B", text: t`a thin layer of cellulose`, correct: false, misconceptionId: "C02-M5", value: "thin_cellulose" },
        { key: "C", text: t`a coat of suberin`, correct: false, misconceptionId: "C02-M6", value: "suberin_wall" },
        { key: "D", text: t`uniform deposition of lignin`, correct: true, value: "uniform_lignin" },
      ],
      solution: {
        steps: [
          t`Evenly thickened.`,
          t`Lignin.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(C)" },
      stem: t`A mature sclerenchyma cell is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mature_scl" } },
      options: [
        { key: "A", text: t`dead, with a wide lumen`, correct: false, misconceptionId: "C02-M9", value: "dead_wide" },
        { key: "B", text: t`dead, with a narrow lumen`, correct: true, value: "dead_narrow" },
        { key: "C", text: t`living, with thick corners`, correct: false, misconceptionId: "C02-M7", value: "living_thick" },
        { key: "D", text: t`living, with thin walls`, correct: false, misconceptionId: "C02-M8", value: "living_thin" },
      ],
      solution: {
        steps: [
          t`No cytoplasm; thick walls.`,
          t`Dead, narrow lumen.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(C)" },
      stem: t`Commercial fibres such as jute, flax and hemp come from`,
      verify: { kind: "value", inputs: {  }, params: { q: "jute" } },
      options: [
        { key: "A", text: t`xylem vessels`, correct: false, misconceptionId: "C02-M12", value: "xylem_vessels" },
        { key: "B", text: t`sclerenchyma fibres`, correct: true, value: "sclerenchyma_f" },
        { key: "C", text: t`collenchyma`, correct: false, misconceptionId: "C02-M10", value: "collenchyma_s" },
        { key: "D", text: t`parenchyma`, correct: false, misconceptionId: "C02-M11", value: "parenchyma_s" },
      ],
      solution: {
        steps: [
          t`Long, strong cells.`,
          t`Sclerenchyma fibres.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q7(b)" },
      stem: t`Loosely arranged, thin-walled living cells full of chloroplasts, with intercellular spaces, form`,
      verify: { kind: "value", inputs: {  }, params: { q: "chloro" } },
      options: [
        { key: "A", text: t`epidermal cells`, correct: false, misconceptionId: "C02-M15", value: "epidermal_c" },
        { key: "B", text: t`chlorenchyma`, correct: true, value: "chlorenchyma_t" },
        { key: "C", text: t`collenchyma`, correct: false, misconceptionId: "C02-M13", value: "collenchyma_s" },
        { key: "D", text: t`sclerenchyma`, correct: false, misconceptionId: "C02-M14", value: "sclerenchyma_s" },
      ],
      solution: {
        steps: [
          t`Parenchyma with chloroplasts.`,
          t`Chlorenchyma.`,
        ],
      },
    },
  ],
};
