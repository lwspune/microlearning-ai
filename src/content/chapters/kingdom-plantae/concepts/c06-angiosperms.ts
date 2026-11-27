import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A maize plant grows tall but never thick, while a mango trunk widens year after year. Why?`,
    reveal: t`Mango, a dicot, has cambium that adds new wood; maize, a monocot, has closed bundles with no cambium.`,
  },
  explanation: {
    intuition: [
      t`**Angiosperms** are flowering plants with seeds **enclosed** in fruits.`,
      t`Only they show **double fertilization**.`,
      t`They split into **dicots** and **monocots**.`,
    ],
    formal: [
      {
        title: "Dicotyledonae",
        points: [
          t`**Tap root** system; **reticulate** venation.`,
          t`Flowers **tetramerous or pentamerous** (parts in 4s or 5s).`,
          t`Open bundles with cambium: secondary growth. E.g. sunflower, China rose.`,
        ],
      },
      {
        title: "Monocotyledonae",
        points: [
          t`**Adventitious** roots; **parallel** venation.`,
          t`Flowers **trimerous** (parts in 3s).`,
          t`Closed bundles, **no cambium**: no increase in girth. E.g. maize, jowar.`,
        ],
      },
    ],
    worked: {
      prompt: t`A flower has 3 petals and its leaves have parallel veins. Dicot or monocot?`,
      steps: [
        t`Parts in 3s and parallel venation mark monocots.`,
        t`So it is a monocot.`,
      ],
      answer: t`Monocot`,
    },
    visualSpec: t`Two columns: a dicot leaf with a net of veins and a monocot leaf with parallel veins.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks collateral bundles.",
      remediation: "Gymnosperms have them too.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks radial bundles.",
      remediation: "Those are in roots of many plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks seeds.",
      remediation: "Gymnosperms have seeds too.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says chlorophyll.",
      remediation: "Both have chlorophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says autotrophy.",
      remediation: "Both are autotrophs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says siphonogamy.",
      remediation: "Both have pollen tubes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says it has cambium.",
      remediation: "Monocots lack cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says no xylem.",
      remediation: "Maize has xylem.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says short life.",
      remediation: "Even old maize stays thin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks reticulate.",
      remediation: "That is dicots.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says no veins.",
      remediation: "Leaves have veins.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks dichotomous.",
      remediation: "That is ferns and *Ginkgo*.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks adventitious.",
      remediation: "That is monocots.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks rhizoids.",
      remediation: "That is bryophytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says no roots.",
      remediation: "Dicots have roots.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(D)" },
      stem: t`A characteristic found only in angiosperms is`,
      verify: { kind: "value", inputs: {  }, params: { q: "character" } },
      options: [
        { key: "A", text: t`collateral vascular bundles`, correct: false, misconceptionId: "C06-M1", value: "collateral_bundles" },
        { key: "B", text: t`radial vascular bundles`, correct: false, misconceptionId: "C06-M2", value: "radial_bundles" },
        { key: "C", text: t`seed formation`, correct: false, misconceptionId: "C06-M3", value: "seed_formation" },
        { key: "D", text: t`double fertilization`, correct: true, value: "double_fertilization" },
      ],
      solution: {
        steps: [
          t`Only angiosperms.`,
          t`Double fertilization.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(E)" },
      stem: t`Angiosperms differ from gymnosperms in having`,
      verify: { kind: "value", inputs: {  }, params: { q: "differ" } },
      options: [
        { key: "A", text: t`enclosed seeds`, correct: true, value: "enclosed_seed" },
        { key: "B", text: t`chlorophyll in their leaves`, correct: false, misconceptionId: "C06-M4", value: "chlorophyll_leaves" },
        { key: "C", text: t`autotrophic nutrition`, correct: false, misconceptionId: "C06-M5", value: "autotrophy_a" },
        { key: "D", text: t`siphonogamy`, correct: false, misconceptionId: "C06-M6", value: "siphonogamy_a" },
      ],
      solution: {
        steps: [
          t`Angio: enclosed.`,
          t`Enclosed seeds.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q6" },
      stem: t`The girth of a maize plant does not increase over time, because its vascular bundles`,
      verify: { kind: "value", inputs: {  }, params: { q: "maize" } },
      options: [
        { key: "A", text: t`are closed, with no cambium`, correct: true, value: "no_cambium" },
        { key: "B", text: t`have cambium`, correct: false, misconceptionId: "C06-M7", value: "has_cambium" },
        { key: "C", text: t`have no xylem`, correct: false, misconceptionId: "C06-M8", value: "no_xylem" },
        { key: "D", text: t`die within a season`, correct: false, misconceptionId: "C06-M9", value: "short_life" },
      ],
      solution: {
        steps: [
          t`Closed bundles.`,
          t`No cambium.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q4(b)" },
      stem: t`Monocot leaves, as in maize and jowar, have`,
      verify: { kind: "value", inputs: {  }, params: { q: "venation" } },
      options: [
        { key: "A", text: t`dichotomous venation`, correct: false, misconceptionId: "C06-M12", value: "dichotomous_v" },
        { key: "B", text: t`parallel venation`, correct: true, value: "parallel_v" },
        { key: "C", text: t`reticulate venation`, correct: false, misconceptionId: "C06-M10", value: "reticulate_v" },
        { key: "D", text: t`no veins`, correct: false, misconceptionId: "C06-M11", value: "no_veins" },
      ],
      solution: {
        steps: [
          t`Monocot leaves.`,
          t`Parallel venation.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q4(a)" },
      stem: t`Dicots such as sunflower and China rose have a`,
      verify: { kind: "value", inputs: {  }, params: { q: "roots" } },
      options: [
        { key: "A", text: t`tap root system`, correct: true, value: "tap_root" },
        { key: "B", text: t`adventitious root system`, correct: false, misconceptionId: "C06-M13", value: "adventitious_root" },
        { key: "C", text: t`rhizoids`, correct: false, misconceptionId: "C06-M14", value: "rhizoids_r" },
        { key: "D", text: t`no roots`, correct: false, misconceptionId: "C06-M15", value: "no_roots_r" },
      ],
      solution: {
        steps: [
          t`Dicot roots.`,
          t`Tap root system.`,
        ],
      },
    },
  ],
};
