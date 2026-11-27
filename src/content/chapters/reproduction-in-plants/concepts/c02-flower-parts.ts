import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A hibiscus flower is colourful, but which of its parts actually make the next generation?`,
    reveal: t`The stamens, which make pollen, and the pistil, which holds the ovules: the flower's sex organs.`,
  },
  explanation: {
    intuition: [
      t`The **flower** is the organ of sexual reproduction in angiosperms.`,
      t`Its male whorl, the **androecium**, is made of stamens.`,
      t`Its female whorl, the **gynoecium**, is made of one or more pistils.`,
      t`Sepals (calyx) and petals (corolla) protect and attract; they make no gametes.`,
    ],
    formal: [
      {
        title: "Stamen and pistil",
        points: [
          t`A **stamen** is a stalk, the **filament**, bearing an **anther**.`,
          t`The anther makes **pollen grains**, which are the male gametophytes.`,
          t`A **pistil** has a **stigma**, a **style** and an **ovary**.`,
          t`The stigma collects pollen; the ovary holds the **ovules**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which part of a pistil connects the stigma to the ovary?`,
      steps: [
        t`The pistil is stigma, style and ovary, from top to bottom.`,
        t`The style lies between them.`,
      ],
      answer: t`The style`,
    },
    visualSpec: t`A flower that pulls apart into calyx, corolla, androecium and gynoecium.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks the gynoecium.",
      remediation: "The gynoecium is the female whorl; stamens form the androecium.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks the corolla.",
      remediation: "The corolla is the petals; it makes no gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks the calyx.",
      remediation: "The calyx is the sepals; it protects the bud.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks the ovule.",
      remediation: "Ovules are female and lie in the ovary; pollen forms in anthers.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks the stigma.",
      remediation: "The stigma receives pollen; it doesn't make it.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks the filament.",
      remediation: "The filament is the stalk; the anther on it makes pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks the anther.",
      remediation: "The anther is male; ovules are in the ovary.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks the style.",
      remediation: "The style is the stalk of the pistil; ovules sit in the ovary.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks the stigma.",
      remediation: "The stigma is at the top; ovules sit in the ovary.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks the ovary.",
      remediation: "The ovary holds ovules; the stigma receives pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks the style.",
      remediation: "The style carries the pollen tube; the stigma receives the pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks the filament.",
      remediation: "The filament is part of the stamen, not the pistil.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Calls it the male gamete.",
      remediation: "The pollen grain is a gametophyte that later forms two male gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Calls it the microsporangium.",
      remediation: "The microsporangium is the pollen sac in the anther that makes pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Calls it the female gametophyte.",
      remediation: "The female gametophyte is the embryo sac in the ovule.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q5" },
      stem: t`The male whorl of a flower, made of stamens, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "male" } },
      options: [
        { key: "A", text: t`androecium`, correct: true, value: "androecium" },
        { key: "B", text: t`gynoecium`, correct: false, misconceptionId: "C02-M1", value: "gynoecium" },
        { key: "C", text: t`corolla`, correct: false, misconceptionId: "C02-M2", value: "corolla" },
        { key: "D", text: t`calyx`, correct: false, misconceptionId: "C02-M3", value: "calyx" },
      ],
      solution: {
        steps: [
          t`Stamens make up the male whorl.`,
          t`It is the androecium.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q5" },
      stem: t`Pollen grains are produced in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "pollen" } },
      options: [
        { key: "A", text: t`ovule`, correct: false, misconceptionId: "C02-M4", value: "ovule" },
        { key: "B", text: t`stigma`, correct: false, misconceptionId: "C02-M5", value: "stigma" },
        { key: "C", text: t`filament`, correct: false, misconceptionId: "C02-M6", value: "filament" },
        { key: "D", text: t`anther`, correct: true, value: "anther" },
      ],
      solution: {
        steps: [
          t`A stamen is a filament bearing an anther.`,
          t`The anther makes the pollen.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`Ovules are borne inside the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ovules" } },
      options: [
        { key: "A", text: t`stigma`, correct: false, misconceptionId: "C02-M9", value: "stigma" },
        { key: "B", text: t`ovary`, correct: true, value: "ovary" },
        { key: "C", text: t`anther`, correct: false, misconceptionId: "C02-M7", value: "anther" },
        { key: "D", text: t`style`, correct: false, misconceptionId: "C02-M8", value: "style" },
      ],
      solution: {
        steps: [
          t`The pistil is stigma, style and ovary.`,
          t`The ovary holds the ovules.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q5" },
      stem: t`The part of the pistil that receives pollen grains is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "receives" } },
      options: [
        { key: "A", text: t`filament`, correct: false, misconceptionId: "C02-M12", value: "filament" },
        { key: "B", text: t`stigma`, correct: true, value: "stigma" },
        { key: "C", text: t`ovary`, correct: false, misconceptionId: "C02-M10", value: "ovary" },
        { key: "D", text: t`style`, correct: false, misconceptionId: "C02-M11", value: "style" },
      ],
      solution: {
        steps: [
          t`The stigma is the top of the pistil.`,
          t`It receives the pollen grains.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q5" },
      stem: t`A pollen grain represents the`,
      verify: { kind: "value", inputs: {  }, params: { q: "represents" } },
      options: [
        { key: "A", text: t`female gametophyte`, correct: false, misconceptionId: "C02-M15", value: "female_gametophyte" },
        { key: "B", text: t`male gametophyte`, correct: true, value: "male_gametophyte" },
        { key: "C", text: t`male gamete`, correct: false, misconceptionId: "C02-M13", value: "male_gamete" },
        { key: "D", text: t`microsporangium`, correct: false, misconceptionId: "C02-M14", value: "microsporangium" },
      ],
      solution: {
        steps: [
          t`A pollen grain later forms two male gametes.`,
          t`So it is the male gametophyte.`,
        ],
      },
    },
  ],
};
