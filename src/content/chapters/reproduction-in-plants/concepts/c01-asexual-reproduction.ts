import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A farmer wants a whole orchard of mango trees exactly like one tree that bears the sweetest fruit. Planting its seeds won't do it. What will?`,
    reveal: t`Vegetative propagation, such as grafting: the new plants come from the tree's own body, so they are clones, true to type.`,
  },
  explanation: {
    intuition: [
      t`**Asexual reproduction** needs one parent and no gametes.`,
      t`The offspring come from the parent's body by mitosis.`,
      t`So they are **clones**: genetically identical to the parent.`,
      t`In plants this is **vegetative propagation**, from roots, stems, leaves or buds.`,
    ],
    formal: [
      {
        title: "Natural methods",
        points: [
          t`**Runners** creep along the ground and root at the nodes: grass, strawberry.`,
          t`**Rhizomes** (ginger), **stem tubers** (potato) and **bulbs** (onion) store food and bear buds.`,
          t`**Leaf buds** on the leaf margins of *Bryophyllum* grow into new plants.`,
        ],
      },
      {
        title: "Artificial methods",
        points: [
          t`**Cutting**: a piece of stem, root or leaf is planted to root.`,
          t`**Layering**: a branch is bent into the soil and roots while still attached.`,
          t`**Grafting**: a shoot (the **scion**) is joined onto a rooted plant (the **stock**).`,
          t`**Micropropagation**: many plants from a little tissue on a nutrient medium.`,
        ],
      },
    ],
    worked: {
      prompt: t`Rose and sugarcane are grown from pieces of stem planted in soil. Which method is this, and how will the new plants compare with the parent?`,
      steps: [
        t`Planting a piece of stem to root is cutting.`,
        t`It is vegetative, so no gametes are involved.`,
        t`The new plants are clones of the parent.`,
      ],
      answer: t`Stem cutting; the new plants are clones of the parent`,
    },
    visualSpec: t`Cards of plants that flip to show how each one propagates.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks the offspring vary.",
      remediation: "Asexual offspring come by mitosis from one parent, so they are identical.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Calls them haploid.",
      remediation: "Mitosis keeps the parent's chromosome number.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls them hybrids.",
      remediation: "A hybrid needs two parents; asexual reproduction has one.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Swaps scion and stock.",
      remediation: "The stock is the rooted plant below; the scion is the shoot joined on top.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls it a cutting.",
      remediation: "A cutting is planted on its own; in grafting the scion is joined to a stock.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Calls it a layer.",
      remediation: "Layering roots a branch still on the parent; grafting joins a scion to a stock.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks bulbs.",
      remediation: "Bulbs, as in onion, are underground; runners creep along the ground.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks stem tubers.",
      remediation: "Tubers, as in potato, are swollen underground stems.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks leaf buds.",
      remediation: "Leaf buds are *Bryophyllum*'s way; strawberry uses runners.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks stem tubers.",
      remediation: "Potato uses stem tubers; *Bryophyllum* grows buds on its leaf margins.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks rhizomes.",
      remediation: "Ginger uses rhizomes; *Bryophyllum* uses leaf buds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks bulbs.",
      remediation: "Onion uses bulbs; *Bryophyllum* uses leaf buds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks layering.",
      remediation: "Layering roots a whole branch; tissue culture uses a little tissue in a medium.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks grafting.",
      remediation: "Grafting joins two plants; tissue culture grows many from a little tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks cutting.",
      remediation: "A cutting is a whole piece of stem; tissue culture uses tiny tissue on a medium.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "authored" },
      stem: t`Offspring produced by asexual reproduction are`,
      verify: { kind: "value", inputs: {  }, params: { q: "clone" } },
      options: [
        { key: "A", text: t`clones: genetically identical to the parent`, correct: true, value: "clones" },
        { key: "B", text: t`genetically varied, like sexual offspring`, correct: false, misconceptionId: "C01-M1", value: "varied_offspring" },
        { key: "C", text: t`haploid`, correct: false, misconceptionId: "C01-M2", value: "haploid_offspring" },
        { key: "D", text: t`hybrids of two parents`, correct: false, misconceptionId: "C01-M3", value: "hybrids" },
      ],
      solution: {
        steps: [
          t`Asexual reproduction uses mitosis from one parent.`,
          t`The offspring are clones.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2024 Q. 30" },
      stem: t`In grafting, the shoot part of the desired plant that is joined on top is called the`,
      verify: { kind: "value", inputs: {  }, params: { q: "grafting" } },
      options: [
        { key: "A", text: t`scion`, correct: true, value: "scion" },
        { key: "B", text: t`stock`, correct: false, misconceptionId: "C01-M4", value: "stock" },
        { key: "C", text: t`cutting`, correct: false, misconceptionId: "C01-M5", value: "cutting_piece" },
        { key: "D", text: t`layer`, correct: false, misconceptionId: "C01-M6", value: "layer" },
      ],
      solution: {
        steps: [
          t`The rooted lower plant is the stock.`,
          t`The shoot joined on top is the scion.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Strawberry and grasses spread by stems that grow along the ground and root at their nodes. These are`,
      verify: { kind: "value", inputs: {  }, params: { q: "runner" } },
      options: [
        { key: "A", text: t`stem tubers`, correct: false, misconceptionId: "C01-M8", value: "stem_tubers" },
        { key: "B", text: t`leaf buds`, correct: false, misconceptionId: "C01-M9", value: "leaf_buds" },
        { key: "C", text: t`runners`, correct: true, value: "runners" },
        { key: "D", text: t`bulbs`, correct: false, misconceptionId: "C01-M7", value: "bulbs" },
      ],
      solution: {
        steps: [
          t`Strawberry stems creep along the ground and root at their nodes.`,
          t`Such stems are runners.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`*Bryophyllum* gives new plants from`,
      verify: { kind: "value", inputs: {  }, params: { q: "bryophyllum" } },
      options: [
        { key: "A", text: t`buds on the margins of its leaves`, correct: true, value: "leaf_buds" },
        { key: "B", text: t`stem tubers`, correct: false, misconceptionId: "C01-M10", value: "stem_tubers" },
        { key: "C", text: t`rhizomes`, correct: false, misconceptionId: "C01-M11", value: "rhizomes" },
        { key: "D", text: t`bulbs`, correct: false, misconceptionId: "C01-M12", value: "bulbs" },
      ],
      solution: {
        steps: [
          t`*Bryophyllum*'s leaf margins bear buds.`,
          t`Each bud grows into a new plant.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`Raising many plants from a small piece of tissue grown on a nutrient medium in sterile conditions is`,
      verify: { kind: "value", inputs: {  }, params: { q: "culture" } },
      options: [
        { key: "A", text: t`micropropagation (tissue culture)`, correct: true, value: "micropropagation" },
        { key: "B", text: t`layering`, correct: false, misconceptionId: "C01-M13", value: "layering" },
        { key: "C", text: t`grafting`, correct: false, misconceptionId: "C01-M14", value: "grafting" },
        { key: "D", text: t`cutting`, correct: false, misconceptionId: "C01-M15", value: "cutting" },
      ],
      solution: {
        steps: [
          t`Many plants from a little tissue on a medium in sterile conditions.`,
          t`This is micropropagation.`,
        ],
      },
    },
  ],
};
