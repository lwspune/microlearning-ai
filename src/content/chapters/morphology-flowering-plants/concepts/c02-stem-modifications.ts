import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Ginger grows under the soil like a root. Why do botanists call it a stem?`,
    reveal: t`Because it has nodes, internodes, scale leaves and buds: the marks of a stem, never of a root.`,
  },
  explanation: {
    intuition: [
      t`A stem has **nodes**, **internodes** and **buds**; a root has none of these.`,
      t`Stems are modified underground, sub-aerially or in the air.`,
      t`A modified stem may look like a root, a leaf or a spike, but its origin shows it is a stem.`,
    ],
    formal: [
      {
        title: "Underground and sub-aerial",
        points: [
          t`**Rhizome**: horizontal, with nodes, scale leaves and buds (ginger, turmeric).`,
          t`**Bulb**: a discoid stem with fleshy scale leaves (onion); a **corm** stores food (*Colocasia*).`,
          t`**Stolon**: a lateral branch bends to the soil and its bud forms a new plant (*Mentha*).`,
        ],
      },
      {
        title: "Aerial",
        points: [
          t`**Stem tendril**: from an axillary bud, helps climbing (*Passiflora*).`,
          t`**Thorn**: the apical bud becomes hard and pointed (*Carissa*).`,
          t`**Phylloclade**: a flat green stem does photosynthesis; leaves are spines (*Opuntia*).`,
        ],
      },
    ],
    worked: {
      prompt: t`A wiry, coiled outgrowth arises from the axil, between a leaf and the stem. What is it?`,
      steps: [
        t`It arises in the axil, so it comes from an axillary bud.`,
        t`An axillary bud modified to coil is a stem tendril.`,
      ],
      answer: t`A stem tendril`,
    },
    visualSpec: t`A ginger rhizome lying flat with its nodes, scale leaves and buds labelled.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Swaps them.",
      remediation: "Beet is a napiform root.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says Arum is a leaf.",
      remediation: "*Arum* stores food in a corm, a stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says an inflorescence.",
      remediation: "The food store is a corm, a stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Says stored food.",
      remediation: "Roots store food too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says underground.",
      remediation: "Roots are underground too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Says colour.",
      remediation: "Colour does not show the organ.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks rhizome.",
      remediation: "A rhizome grows under the soil.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks bulb.",
      remediation: "A bulb is a discoid stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks tendril.",
      remediation: "A tendril coils; it forms no new plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says a whole leaf.",
      remediation: "That is the spine of *Opuntia*.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says a root.",
      remediation: "Thorns grow on the shoot.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says leaf apex.",
      remediation: "That forms the tendril of *Gloriosa*.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says a leaf.",
      remediation: "It has nodes and internodes: a stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says tendril.",
      remediation: "Tendrils are thin and wiry.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says rhizome.",
      remediation: "A rhizome is underground.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q1(D)" },
      stem: t`Beet and *Arum* both store food for perennation. Which is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "beet_arum" } },
      options: [
        { key: "A", text: t`Beet is a root but *Arum* is a stem`, correct: true, value: "beet_root_arum_stem" },
        { key: "B", text: t`Beet is a stem but *Arum* is a root`, correct: false, misconceptionId: "C02-M1", value: "beet_stem_arum_root" },
        { key: "C", text: t`Beet is a stem but *Arum* is a leaf`, correct: false, misconceptionId: "C02-M2", value: "beet_stem_arum_leaf" },
        { key: "D", text: t`Beet is a stem but *Arum* is an inflorescence`, correct: false, misconceptionId: "C02-M3", value: "beet_stem_arum_infl" },
      ],
      solution: {
        steps: [
          t`Beet: a napiform root.`,
          t`*Arum*: a corm, a stem.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(E)" },
      stem: t`Ginger grows under the soil, yet it is a stem and not a root, because it has`,
      verify: { kind: "value", inputs: {  }, params: { q: "rhizome" } },
      options: [
        { key: "A", text: t`stored food`, correct: false, misconceptionId: "C02-M4", value: "stores_food" },
        { key: "B", text: t`an underground position`, correct: false, misconceptionId: "C02-M5", value: "underground_t" },
        { key: "C", text: t`a brownish colour`, correct: false, misconceptionId: "C02-M6", value: "brown_colour" },
        { key: "D", text: t`nodes, internodes, scale leaves and buds`, correct: true, value: "nodes_buds" },
      ],
      solution: {
        steps: [
          t`Nodes, scale leaves and buds.`,
          t`Only stems have them.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(F)" },
      stem: t`In *Mentha*, a slender branch from the base of the main axis bends to the ground and its terminal bud forms a new plant. This branch is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "stolon" } },
      options: [
        { key: "A", text: t`stem tendril`, correct: false, misconceptionId: "C02-M9", value: "stem_tendril" },
        { key: "B", text: t`stolon`, correct: true, value: "stolon_s" },
        { key: "C", text: t`rhizome`, correct: false, misconceptionId: "C02-M7", value: "rhizome_s" },
        { key: "D", text: t`bulb`, correct: false, misconceptionId: "C02-M8", value: "bulb_s" },
      ],
      solution: {
        steps: [
          t`Bends to soil, new plant.`,
          t`Stolon.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q2(B)" },
      stem: t`The thorn of *Carissa* is a modified`,
      verify: { kind: "value", inputs: {  }, params: { q: "thorn" } },
      options: [
        { key: "A", text: t`leaf apex`, correct: false, misconceptionId: "C02-M12", value: "leaf_apex" },
        { key: "B", text: t`apical bud (a stem)`, correct: true, value: "apical_bud" },
        { key: "C", text: t`whole leaf`, correct: false, misconceptionId: "C02-M10", value: "whole_leaf" },
        { key: "D", text: t`root`, correct: false, misconceptionId: "C02-M11", value: "root_t" },
      ],
      solution: {
        steps: [
          t`Apical bud hardens.`,
          t`A modified stem.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(B)" },
      stem: t`A leafless xerophyte has a flat, green, fleshy stem covered with spines. The flat stem is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "phylloclade" } },
      options: [
        { key: "A", text: t`rhizome`, correct: false, misconceptionId: "C02-M15", value: "rhizome_s" },
        { key: "B", text: t`phylloclade`, correct: true, value: "phylloclade_s" },
        { key: "C", text: t`leaf`, correct: false, misconceptionId: "C02-M13", value: "leaf_t" },
        { key: "D", text: t`stem tendril`, correct: false, misconceptionId: "C02-M14", value: "stem_tendril" },
      ],
      solution: {
        steps: [
          t`Flat green stem.`,
          t`Phylloclade.`,
        ],
      },
    },
  ],
};
