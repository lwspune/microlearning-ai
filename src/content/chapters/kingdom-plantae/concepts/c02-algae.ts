import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Some sea weeds are green, some brown, some red. Why the different colours, if all photosynthesise?`,
    reveal: t`Each group has its own accessory pigments, which also decide how algae are classified.`,
  },
  explanation: {
    intuition: [
      t`Algae have a **thalloid** body, with no root, stem or leaves.`,
      t`They range from single cells to sea weeds over 60 m long.`,
      t`They are grouped by pigment, stored food and wall.`,
    ],
    formal: [
      {
        title: "Three classes",
        points: [
          t`**Chlorophyceae** (green): chlorophyll a, b; true **starch**; cellulose wall.`,
          t`**Phaeophyceae** (brown): chlorophyll a, c, **fucoxanthin**; **laminarin, mannitol**; wall with **algin**.`,
          t`**Rhodophyceae** (red): chlorophyll a, d, **phycoerythrin**; **floridean starch**.`,
        ],
      },
      {
        title: "Forms",
        points: [
          t`*Chlamydomonas*: unicellular, microscopic, motile.`,
          t`*Spirogyra*: unbranched filament.`,
          t`*Sargassum*: a huge macroscopic brown sea weed.`,
        ],
      },
    ],
    worked: {
      prompt: t`An alga stores floridean starch. What colour is it likely to be?`,
      steps: [
        t`Floridean starch is in Rhodophyceae.`,
        t`Their pigment is phycoerythrin.`,
      ],
      answer: t`Red`,
    },
    visualSpec: t`Three sea weeds, green, brown and red, each labelled with its pigment and stored food.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks fucoxanthin.",
      remediation: "That is brown algae.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks chlorophyll b.",
      remediation: "That is green algae.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks carotene.",
      remediation: "That is not the main one.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks floridean starch.",
      remediation: "That is red algae.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks true starch.",
      remediation: "That is green algae.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks glycogen.",
      remediation: "That is fungi and animals.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks Phaeophyceae.",
      remediation: "Those are brown.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks Rhodophyceae.",
      remediation: "Those are red.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks Cyanophyceae.",
      remediation: "Those are blue-green bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says filament.",
      remediation: "That is *Spirogyra*.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says macroscopic.",
      remediation: "That is *Sargassum*.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says colony.",
      remediation: "It is a single cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks Chlorophyceae.",
      remediation: "Their walls are cellulose.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks Rhodophyceae.",
      remediation: "Their walls have pectin.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks Cyanophyceae.",
      remediation: "Those are bacteria.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q3" },
      stem: t`Red algae (Rhodophyceae) get their colour from`,
      verify: { kind: "value", inputs: {  }, params: { q: "red" } },
      options: [
        { key: "A", text: t`phycoerythrin`, correct: true, value: "phycoerythrin_p" },
        { key: "B", text: t`fucoxanthin`, correct: false, misconceptionId: "C02-M1", value: "fucoxanthin_p" },
        { key: "C", text: t`chlorophyll b`, correct: false, misconceptionId: "C02-M2", value: "chlorophyll_b_p" },
        { key: "D", text: t`carotene`, correct: false, misconceptionId: "C02-M3", value: "carotene_p" },
      ],
      solution: {
        steps: [
          t`Red pigment.`,
          t`Phycoerythrin.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q3" },
      stem: t`Brown algae (Phaeophyceae) store food as`,
      verify: { kind: "value", inputs: {  }, params: { q: "brown_food" } },
      options: [
        { key: "A", text: t`floridean starch`, correct: false, misconceptionId: "C02-M4", value: "floridean_starch" },
        { key: "B", text: t`true starch alone`, correct: false, misconceptionId: "C02-M5", value: "true_starch" },
        { key: "C", text: t`glycogen`, correct: false, misconceptionId: "C02-M6", value: "glycogen_f" },
        { key: "D", text: t`laminarin and mannitol`, correct: true, value: "laminarin_mannitol" },
      ],
      solution: {
        steps: [
          t`Brown algae food.`,
          t`Laminarin and mannitol.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q3" },
      stem: t`Algae with chlorophyll a and b that store true starch are`,
      verify: { kind: "value", inputs: {  }, params: { q: "green" } },
      options: [
        { key: "A", text: t`Cyanophyceae`, correct: false, misconceptionId: "C02-M9", value: "cyanophyceae_a" },
        { key: "B", text: t`Chlorophyceae`, correct: true, value: "chlorophyceae_a" },
        { key: "C", text: t`Phaeophyceae`, correct: false, misconceptionId: "C02-M7", value: "phaeophyceae_a" },
        { key: "D", text: t`Rhodophyceae`, correct: false, misconceptionId: "C02-M8", value: "rhodophyceae_a" },
      ],
      solution: {
        steps: [
          t`Green algae.`,
          t`Chlorophyceae.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q8(B)" },
      stem: t`*Chlamydomonas* is`,
      verify: { kind: "value", inputs: {  }, params: { q: "chlamy" } },
      options: [
        { key: "A", text: t`a colony of cells`, correct: false, misconceptionId: "C02-M12", value: "colonial_a" },
        { key: "B", text: t`unicellular, microscopic and motile`, correct: true, value: "unicellular_motile" },
        { key: "C", text: t`an unbranched filament`, correct: false, misconceptionId: "C02-M10", value: "filamentous_a" },
        { key: "D", text: t`a huge sea weed`, correct: false, misconceptionId: "C02-M11", value: "macroscopic_a" },
      ],
      solution: {
        steps: [
          t`Single motile cell.`,
          t`Unicellular and motile.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q3" },
      stem: t`Algae whose cell walls contain algin are`,
      verify: { kind: "value", inputs: {  }, params: { q: "algin" } },
      options: [
        { key: "A", text: t`Cyanophyceae`, correct: false, misconceptionId: "C02-M15", value: "cyanophyceae_a" },
        { key: "B", text: t`Phaeophyceae`, correct: true, value: "phaeophyceae_a" },
        { key: "C", text: t`Chlorophyceae`, correct: false, misconceptionId: "C02-M13", value: "chlorophyceae_a" },
        { key: "D", text: t`Rhodophyceae`, correct: false, misconceptionId: "C02-M14", value: "rhodophyceae_a" },
      ],
      solution: {
        steps: [
          t`Algin walls.`,
          t`Phaeophyceae.`,
        ],
      },
    },
  ],
};
