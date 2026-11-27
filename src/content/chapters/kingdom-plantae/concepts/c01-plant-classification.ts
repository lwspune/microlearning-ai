import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A moss and a mango tree are both plants. What is the biggest difference in how they reproduce?`,
    reveal: t`The mango makes seeds; the moss makes only spores, with hidden sex organs.`,
  },
  explanation: {
    intuition: [
      t`Kingdom Plantae is divided first by seeds.`,
      t`**Cryptogamae** (*kryptos*: hidden) reproduce by spores.`,
      t`**Phanerogamae** (*phaneros*: visible) bear seeds.`,
    ],
    formal: [
      {
        title: "Cryptogamae",
        points: [
          t`**Thallophyta** (algae): body not divided into root, stem, leaves.`,
          t`**Bryophyta**: mosses and liverworts, with no vascular tissue.`,
          t`**Pteridophyta**: ferns, with vascular tissue but no seeds.`,
        ],
      },
      {
        title: "Phanerogamae",
        points: [
          t`**Gymnospermae**: naked seeds.`,
          t`**Angiospermae**: seeds enclosed in fruits.`,
          t`Angiosperms split into dicots and monocots.`,
        ],
      },
    ],
    worked: {
      prompt: t`Place the pea, jowar and a fern in the chart.`,
      steps: [
        t`Pea and jowar bear seeds in fruits: angiosperms (pea a dicot, jowar a monocot).`,
        t`The fern has spores and vascular tissue: Pteridophyta.`,
      ],
      answer: t`Pea, jowar: angiosperms; fern: pteridophyte`,
    },
    visualSpec: t`A tree chart: Plantae → Cryptogamae (Thallophyta, Bryophyta, Pteridophyta) and Phanerogamae (Gymnospermae, Angiospermae).`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks Cryptogamae.",
      remediation: "Those make spores.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks Thallophyta.",
      remediation: "Those make spores.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks Pteridophyta.",
      remediation: "Ferns make spores.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks Phanerogamae.",
      remediation: "Those make seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks Gymnospermae.",
      remediation: "Those make seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks Angiospermae.",
      remediation: "Those make seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says no vessels.",
      remediation: "Ferns are vascular.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says no leaves.",
      remediation: "Ferns have fronds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says no roots.",
      remediation: "Ferns have roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks Angiospermae.",
      remediation: "Angiosperms have true roots, stems and leaves.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks Pteridophyta.",
      remediation: "Ferns have true organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks Gymnospermae.",
      remediation: "Gymnosperms have true organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks seed plants.",
      remediation: "Those are phanerogams.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Mixes groups.",
      remediation: "Gymnosperms bear seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says algae only.",
      remediation: "Mosses and ferns count too.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(A)" },
      stem: t`Seed-producing plants with visible reproductive structures are`,
      verify: { kind: "value", inputs: {  }, params: { q: "seed" } },
      options: [
        { key: "A", text: t`Phanerogamae`, correct: true, value: "phanerogamae_g" },
        { key: "B", text: t`Cryptogamae`, correct: false, misconceptionId: "C01-M1", value: "cryptogamae_g" },
        { key: "C", text: t`Thallophyta`, correct: false, misconceptionId: "C01-M2", value: "thallophyta_g" },
        { key: "D", text: t`Pteridophyta`, correct: false, misconceptionId: "C01-M3", value: "pteridophyta_g" },
      ],
      solution: {
        steps: [
          t`Visible seeds.`,
          t`Phanerogamae.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(B)" },
      stem: t`Spore-producing plants with hidden sex organs are`,
      verify: { kind: "value", inputs: {  }, params: { q: "spore" } },
      options: [
        { key: "A", text: t`Cryptogamae`, correct: true, value: "cryptogamae_g" },
        { key: "B", text: t`Phanerogamae`, correct: false, misconceptionId: "C01-M4", value: "phanerogamae_g" },
        { key: "C", text: t`Gymnospermae`, correct: false, misconceptionId: "C01-M5", value: "gymnospermae_g" },
        { key: "D", text: t`Angiospermae`, correct: false, misconceptionId: "C01-M6", value: "angiospermae_g" },
      ],
      solution: {
        steps: [
          t`Hidden sex organs.`,
          t`Cryptogamae.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q5(B)" },
      stem: t`A fern is a vascular plant, yet it is not a phanerogam, because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "fern" } },
      options: [
        { key: "A", text: t`has no leaves`, correct: false, misconceptionId: "C01-M8", value: "no_leaves" },
        { key: "B", text: t`has no roots`, correct: false, misconceptionId: "C01-M9", value: "no_roots" },
        { key: "C", text: t`produces no seeds`, correct: true, value: "no_seeds" },
        { key: "D", text: t`has no vascular tissue`, correct: false, misconceptionId: "C01-M7", value: "no_vessels" },
      ],
      solution: {
        steps: [
          t`Spores, no seeds.`,
          t`It produces no seeds.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(C)" },
      stem: t`Plants whose body is not divided into root, stem and leaves belong to`,
      verify: { kind: "value", inputs: {  }, params: { q: "undifferentiated" } },
      options: [
        { key: "A", text: t`Thallophyta`, correct: true, value: "thallophyta_g" },
        { key: "B", text: t`Angiospermae`, correct: false, misconceptionId: "C01-M10", value: "angiospermae_g" },
        { key: "C", text: t`Pteridophyta`, correct: false, misconceptionId: "C01-M11", value: "pteridophyta_g" },
        { key: "D", text: t`Gymnospermae`, correct: false, misconceptionId: "C01-M12", value: "gymnospermae_g" },
      ],
      solution: {
        steps: [
          t`A thallus.`,
          t`Thallophyta.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(B)" },
      stem: t`Cryptogamae include`,
      verify: { kind: "value", inputs: {  }, params: { q: "crypto_groups" } },
      options: [
        { key: "A", text: t`Thallophyta, Bryophyta and Pteridophyta`, correct: true, value: "thallo_bryo_pterido" },
        { key: "B", text: t`Gymnospermae and Angiospermae`, correct: false, misconceptionId: "C01-M13", value: "gymno_angio" },
        { key: "C", text: t`Bryophyta and Gymnospermae`, correct: false, misconceptionId: "C01-M14", value: "bryo_gymno" },
        { key: "D", text: t`algae alone`, correct: false, misconceptionId: "C01-M15", value: "algae_only" },
      ],
      solution: {
        steps: [
          t`Three spore groups.`,
          t`Thallophyta, Bryophyta, Pteridophyta.`,
        ],
      },
    },
  ],
};
