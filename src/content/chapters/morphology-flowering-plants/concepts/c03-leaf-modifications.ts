import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Onion and garlic grow under the soil. Are we eating roots when we eat them?`,
    reveal: t`No: we eat fleshy scale leaves that store food on a tiny discoid stem.`,
  },
  explanation: {
    intuition: [
      t`**Phyllotaxy** is the arrangement of leaves on the stem; it lets leaves get light.`,
      t`**Venation** is the arrangement of veins and veinlets in the lamina.`,
      t`Leaves are modified into **tendrils**, **spines** and fleshy **scale leaves**.`,
    ],
    formal: [
      {
        title: "Phyllotaxy and venation",
        points: [
          t`**Alternate**: one leaf per node (mango); **whorled**: many per node (*Nerium*).`,
          t`**Opposite**: a pair per node; **decussate** (*Calotropis*) or **superposed** (jamun).`,
          t`Veins conduct water, minerals and food; **reticulate** veins form a net (*Datura*).`,
        ],
      },
      {
        title: "Leaf types and modifications",
        points: [
          t`A **compound leaf** has its lamina divided into leaflets on a **rachis**, the midrib.`,
          t`**Leaf tendril**: a leaf part coils to climb; the leaf tip in *Gloriosa*.`,
          t`**Spines**: whole leaves (*Opuntia*); **fleshy scale leaves** store food in bulbs.`,
        ],
      },
    ],
    worked: {
      prompt: t`In *Calotropis* each node has a pair of leaves, and the next pair stands at right angles. Name the phyllotaxy.`,
      steps: [
        t`A pair at each node: opposite.`,
        t`Pairs at right angles lie in two planes: decussate.`,
      ],
      answer: t`Opposite decussate`,
    },
    visualSpec: t`Three shoots side by side: one leaf per node, a pair per node, and many leaves per node.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks alternate.",
      remediation: "Alternate has one leaf per node.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks decussate.",
      remediation: "Decussate pairs are at right angles.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks whorled.",
      remediation: "Whorled has many leaves per node.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says the stem.",
      remediation: "The stem is a small disc at the base.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says roots.",
      remediation: "The roots are at the base.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says dry scales.",
      remediation: "Dry outer scales are peeled off.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says water only.",
      remediation: "Veins also carry minerals and food.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says food only.",
      remediation: "Veins also carry water and minerals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says support only.",
      remediation: "Veins also conduct.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says a stem branch.",
      remediation: "Leaflets are parts of one leaf.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says petiole.",
      remediation: "The rachis bears the leaflets.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says lateral vein.",
      remediation: "The rachis is the main axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says stem tendril.",
      remediation: "This comes from the leaf apex.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says spine.",
      remediation: "A spine is stiff, not coiled.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says a root.",
      remediation: "It is part of the leaf.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q1(B)" },
      stem: t`A plant has a pair of leaves at each node, and all the pairs lie in one plane. The arrangement is`,
      verify: { kind: "value", inputs: {  }, params: { q: "superposed" } },
      options: [
        { key: "A", text: t`decussate phyllotaxy`, correct: false, misconceptionId: "C03-M2", value: "decussate_p" },
        { key: "B", text: t`whorled phyllotaxy`, correct: false, misconceptionId: "C03-M3", value: "whorled_p" },
        { key: "C", text: t`superposed phyllotaxy`, correct: true, value: "superposed_p" },
        { key: "D", text: t`alternate phyllotaxy`, correct: false, misconceptionId: "C03-M1", value: "alternate_p" },
      ],
      solution: {
        steps: [
          t`A pair at each node.`,
          t`Pairs in one plane: superposed.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(G)" },
      stem: t`An onion is a tunicated bulb. When we eat onion slices, we eat its`,
      verify: { kind: "value", inputs: {  }, params: { q: "onion" } },
      options: [
        { key: "A", text: t`adventitious roots`, correct: false, misconceptionId: "C03-M5", value: "adventitious_roots" },
        { key: "B", text: t`dry outer scale leaves`, correct: false, misconceptionId: "C03-M6", value: "dry_scale_leaves" },
        { key: "C", text: t`fleshy scale leaves`, correct: true, value: "fleshy_scale_leaves" },
        { key: "D", text: t`discoid stem`, correct: false, misconceptionId: "C03-M4", value: "discoid_stem" },
      ],
      solution: {
        steps: [
          t`Fleshy layers on a discoid stem.`,
          t`Fleshy scale leaves.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(G)" },
      stem: t`The veins of a leaf conduct`,
      verify: { kind: "value", inputs: {  }, params: { q: "veins" } },
      options: [
        { key: "A", text: t`water only`, correct: false, misconceptionId: "C03-M7", value: "water_only" },
        { key: "B", text: t`food only`, correct: false, misconceptionId: "C03-M8", value: "food_only" },
        { key: "C", text: t`nothing: they only support the lamina`, correct: false, misconceptionId: "C03-M9", value: "support_only" },
        { key: "D", text: t`water, minerals and food`, correct: true, value: "water_minerals_food" },
      ],
      solution: {
        steps: [
          t`Conduction and framework.`,
          t`Water, minerals and food.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(H)" },
      stem: t`Coconut and *Mimosa* both have compound leaves. The rachis that bears their leaflets represents the`,
      verify: { kind: "value", inputs: {  }, params: { q: "rachis" } },
      options: [
        { key: "A", text: t`petiole`, correct: false, misconceptionId: "C03-M11", value: "petiole_t" },
        { key: "B", text: t`lateral vein`, correct: false, misconceptionId: "C03-M12", value: "lateral_vein" },
        { key: "C", text: t`midrib`, correct: true, value: "midrib_t" },
        { key: "D", text: t`branch of a stem`, correct: false, misconceptionId: "C03-M10", value: "stem_branch" },
      ],
      solution: {
        steps: [
          t`Leaflets on a common axis.`,
          t`The rachis is the midrib.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(E)" },
      stem: t`In *Gloriosa*, the long leaf apex curls around a support. This structure is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "gloriosa" } },
      options: [
        { key: "A", text: t`leaf tip tendril`, correct: true, value: "leaf_tip_tendril" },
        { key: "B", text: t`stem tendril`, correct: false, misconceptionId: "C03-M13", value: "stem_tendril" },
        { key: "C", text: t`spine`, correct: false, misconceptionId: "C03-M14", value: "spine_t" },
        { key: "D", text: t`adventitious root`, correct: false, misconceptionId: "C03-M15", value: "adventitious_root" },
      ],
      solution: {
        steps: [
          t`The leaf apex coils.`,
          t`Leaf tip tendril.`,
        ],
      },
    },
  ],
};
