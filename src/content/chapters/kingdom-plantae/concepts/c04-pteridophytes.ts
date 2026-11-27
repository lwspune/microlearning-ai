import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A fern can grow a metre tall, while a moss stays tiny. What lets the fern grow bigger?`,
    reveal: t`Vascular tissue: xylem and phloem carry water and food, so the fern can build true roots, stems and leaves.`,
  },
  explanation: {
    intuition: [
      t`**Pteridophytes** are ferns and their relatives.`,
      t`They are the **first vascular, true land plants**.`,
      t`They are the only vascular cryptogams.`,
    ],
    formal: [
      {
        title: "Features",
        points: [
          t`The diploid **sporophyte** is dominant, with true roots, stem and leaves.`,
          t`The gametophyte is small and short-lived.`,
          t`They reproduce by **spores**: no seeds, no flowers.`,
        ],
      },
      {
        title: "Example",
        points: [
          t`*Nephrolepis*: fronds, blades, a rhizome and roots.`,
          t`Spores form on the back of leaflets.`,
          t`Vascular, yet cryptogams, because they bear no seeds.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why are ferns called cryptogams though they have vascular tissue?`,
      steps: [
        t`Cryptogams reproduce by spores.`,
        t`Ferns bear no seeds.`,
      ],
      answer: t`They bear spores, not seeds`,
    },
    visualSpec: t`A fern frond with spore patches on the underside of its leaflets.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks capsule.",
      remediation: "That is a moss part.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks gametophyte.",
      remediation: "That is small in ferns.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks embryo.",
      remediation: "The embryo becomes the sporophyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks Bryophyta.",
      remediation: "Mosses lack vascular tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks gymnosperms.",
      remediation: "Gymnosperms came later.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks Thallophyta.",
      remediation: "Algae lack vascular tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says no vascular tissue.",
      remediation: "Ferns are vascular.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says no roots.",
      remediation: "Ferns have roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says aquatic.",
      remediation: "Most live on land; even aquatic ones like *Azolla* are cryptogams because they bear spores.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks moss.",
      remediation: "Mosses have no fronds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks alga.",
      remediation: "Algae have no rhizome.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks gymnosperm.",
      remediation: "Ferns have no seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says seeds.",
      remediation: "Cryptogams have none.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says non-vascular.",
      remediation: "That is bryophytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says flowers.",
      remediation: "Cryptogams have none.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(A)" },
      stem: t`The dominant phase in pteridophytes is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "dominant" } },
      options: [
        { key: "A", text: t`gametophyte`, correct: false, misconceptionId: "C04-M2", value: "gametophyte_d" },
        { key: "B", text: t`embryo`, correct: false, misconceptionId: "C04-M3", value: "embryo_d" },
        { key: "C", text: t`sporophyte`, correct: true, value: "sporophyte_d" },
        { key: "D", text: t`capsule`, correct: false, misconceptionId: "C04-M1", value: "capsule_d" },
      ],
      solution: {
        steps: [
          t`Fern plant body.`,
          t`Sporophyte.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(E)" },
      stem: t`The first vascular, true land plants are`,
      verify: { kind: "value", inputs: {  }, params: { q: "first" } },
      options: [
        { key: "A", text: t`Bryophyta`, correct: false, misconceptionId: "C04-M4", value: "bryophyta_g" },
        { key: "B", text: t`Gymnospermae`, correct: false, misconceptionId: "C04-M5", value: "gymnospermae_g" },
        { key: "C", text: t`Thallophyta`, correct: false, misconceptionId: "C04-M6", value: "thallophyta_g" },
        { key: "D", text: t`Pteridophyta`, correct: true, value: "pteridophyta_g" },
      ],
      solution: {
        steps: [
          t`First vascular plants.`,
          t`Pteridophyta.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q5(B)" },
      stem: t`Ferns are cryptogams because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "fern_not_phanero" } },
      options: [
        { key: "A", text: t`have no roots`, correct: false, misconceptionId: "C04-M8", value: "no_roots_f" },
        { key: "B", text: t`live only in water`, correct: false, misconceptionId: "C04-M9", value: "aquatic_f" },
        { key: "C", text: t`reproduce by spores, with no seeds or flowers`, correct: true, value: "spores_no_seeds" },
        { key: "D", text: t`have no vascular tissue`, correct: false, misconceptionId: "C04-M7", value: "no_vascular" },
      ],
      solution: {
        steps: [
          t`Spores only.`,
          t`No seeds.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q8(D)" },
      stem: t`*Nephrolepis*, with fronds and a rhizome, is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "nephrolepis" } },
      options: [
        { key: "A", text: t`moss`, correct: false, misconceptionId: "C04-M10", value: "moss_p" },
        { key: "B", text: t`alga`, correct: false, misconceptionId: "C04-M11", value: "alga_p" },
        { key: "C", text: t`gymnosperm`, correct: false, misconceptionId: "C04-M12", value: "gymnosperm_p" },
        { key: "D", text: t`fern`, correct: true, value: "fern_p" },
      ],
      solution: {
        steps: [
          t`Fronds and rhizome.`,
          t`A fern.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q9(E)" },
      stem: t`Pteridophytes are the only cryptogams that`,
      verify: { kind: "value", inputs: {  }, params: { q: "unique" } },
      options: [
        { key: "A", text: t`bear flowers`, correct: false, misconceptionId: "C04-M15", value: "flowering_cryptogam" },
        { key: "B", text: t`have vascular tissues`, correct: true, value: "vascular_cryptogam" },
        { key: "C", text: t`bear seeds`, correct: false, misconceptionId: "C04-M13", value: "seed_cryptogam" },
        { key: "D", text: t`live on land with no vascular tissue`, correct: false, misconceptionId: "C04-M14", value: "non_vascular_land" },
      ],
      solution: {
        steps: [
          t`Vascular cryptogams.`,
          t`They have vascular tissues.`,
        ],
      },
    },
  ],
};
