import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Mosses green the walls only in the monsoon. Why do they need the rain?`,
    reveal: t`Their sperms must swim through water to reach the egg: no water, no fertilization.`,
  },
  explanation: {
    intuition: [
      t`**Bryophytes** are mosses and liverworts.`,
      t`They are the **amphibious** plants: on land, but needing water to fertilize.`,
      t`They have **rhizoids**, not true roots, and no vascular tissue.`,
    ],
    formal: [
      {
        title: "Generations",
        points: [
          t`The haploid **gametophyte** is the dominant, green, independent plant.`,
          t`The diploid **sporophyte** (**foot, seta, capsule**) grows on it.`,
          t`The sporophyte depends partly or wholly on the gametophyte.`,
        ],
      },
      {
        title: "Examples",
        points: [
          t`*Funaria* (moss): main axis with leaf-like parts, rhizoids.`,
          t`*Riccia*, *Marchantia* (liverworts): flat thalli.`,
          t`Rhizoids fix the plant and absorb water.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which part of a moss is diploid?`,
      steps: [
        t`The sporophyte forms from the zygote.`,
        t`It is foot, seta and capsule.`,
      ],
      answer: t`The sporophyte`,
    },
    visualSpec: t`A Funaria plant: green gametophyte with rhizoids, a sporophyte with foot, seta and capsule on top.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Says both independent.",
      remediation: "The sporophyte relies on the gametophyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Reverses it.",
      remediation: "The gametophyte dominates.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Says hidden gametophyte.",
      remediation: "It is the visible plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks Pteridophyta.",
      remediation: "Ferns have true roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks gymnosperms.",
      remediation: "They have true roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks angiosperms.",
      remediation: "They have true roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says in the sea.",
      remediation: "They live on land.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says breathing water.",
      remediation: "Water is for fertilization.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says gills.",
      remediation: "Plants have no gills.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says root, stem, leaf.",
      remediation: "Those are sporophyte organs of ferns.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says rhizoids.",
      remediation: "Those are gametophyte parts.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says frond.",
      remediation: "That is a fern.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks sporophyte.",
      remediation: "That depends on the gametophyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks embryo.",
      remediation: "The embryo is tiny.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks capsule.",
      remediation: "That is part of the sporophyte.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(C)" },
      stem: t`In bryophytes,`,
      verify: { kind: "value", inputs: {  }, params: { q: "dependence" } },
      options: [
        { key: "A", text: t`the gametophyte depends on the sporophyte`, correct: false, misconceptionId: "C03-M2", value: "gametophyte_dependent" },
        { key: "B", text: t`the gametophyte is inconspicuous`, correct: false, misconceptionId: "C03-M3", value: "gametophyte_hidden" },
        { key: "C", text: t`the sporophyte depends partly on the gametophyte`, correct: true, value: "sporophyte_dependent" },
        { key: "D", text: t`both generations are independent`, correct: false, misconceptionId: "C03-M1", value: "both_independent" },
      ],
      solution: {
        steps: [
          t`Sporophyte relies on gametophyte.`,
          t`Partly dependent.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q7" },
      stem: t`A plant on a wet wall has root-like rhizoids but no true roots. It belongs to`,
      verify: { kind: "value", inputs: {  }, params: { q: "rhizoids" } },
      options: [
        { key: "A", text: t`Gymnospermae`, correct: false, misconceptionId: "C03-M5", value: "gymnospermae_g" },
        { key: "B", text: t`Angiospermae`, correct: false, misconceptionId: "C03-M6", value: "angiospermae_g" },
        { key: "C", text: t`Bryophyta`, correct: true, value: "bryophyta_g" },
        { key: "D", text: t`Pteridophyta`, correct: false, misconceptionId: "C03-M4", value: "pteridophyta_g" },
      ],
      solution: {
        steps: [
          t`Rhizoids.`,
          t`Bryophyta.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(D)" },
      stem: t`Bryophytes are called amphibious plants because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "amphibious" } },
      options: [
        { key: "A", text: t`live in the sea`, correct: false, misconceptionId: "C03-M7", value: "live_in_sea" },
        { key: "B", text: t`take in water to breathe`, correct: false, misconceptionId: "C03-M8", value: "breathe_water" },
        { key: "C", text: t`have gills`, correct: false, misconceptionId: "C03-M9", value: "have_gills" },
        { key: "D", text: t`live on land but need water for fertilization`, correct: true, value: "water_fertilization" },
      ],
      solution: {
        steps: [
          t`Water for sperms.`,
          t`They need water for fertilization.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q8(C)" },
      stem: t`The sporophyte of *Funaria* consists of`,
      verify: { kind: "value", inputs: {  }, params: { q: "sporophyte_parts" } },
      options: [
        { key: "A", text: t`rhizoids and main axis`, correct: false, misconceptionId: "C03-M11", value: "rhizoid_axis" },
        { key: "B", text: t`frond and rhizome`, correct: false, misconceptionId: "C03-M12", value: "frond_rhizome" },
        { key: "C", text: t`foot, seta and capsule`, correct: true, value: "foot_seta_capsule" },
        { key: "D", text: t`root, stem and leaves`, correct: false, misconceptionId: "C03-M10", value: "root_stem_leaf" },
      ],
      solution: {
        steps: [
          t`Three parts.`,
          t`Foot, seta and capsule.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(C)" },
      stem: t`The dominant, independent plant body of a moss is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "dominant" } },
      options: [
        { key: "A", text: t`gametophyte`, correct: true, value: "gametophyte_d" },
        { key: "B", text: t`sporophyte`, correct: false, misconceptionId: "C03-M13", value: "sporophyte_d" },
        { key: "C", text: t`embryo`, correct: false, misconceptionId: "C03-M14", value: "embryo_d" },
        { key: "D", text: t`capsule`, correct: false, misconceptionId: "C03-M15", value: "capsule_d" },
      ],
      solution: {
        steps: [
          t`Green moss plant.`,
          t`Gametophyte.`,
        ],
      },
    },
  ],
};
