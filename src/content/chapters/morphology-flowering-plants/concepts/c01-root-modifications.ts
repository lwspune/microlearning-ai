import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A radish and a maize plant both have roots, yet one is a fat white spindle and the other a tuft of thin threads. Why so different?`,
    reveal: t`Roots come in two systems, tap and adventitious, and many are modified for jobs like storing food, support or breathing.`,
  },
  explanation: {
    intuition: [
      t`The **tap root** grows from the **radicle**; **adventitious roots** grow from any other part.`,
      t`Tap roots are common in dicots; adventitious (fibrous) roots in monocots.`,
      t`Roots are **modified** to store food, give support or help in respiration.`,
    ],
    formal: [
      {
        title: "Tap and adventitious roots",
        points: [
          t`**Tap root**: from the radicle; the primary root persists with branches (pea, bean, sunflower).`,
          t`**Adventitious roots**: from the stem base, nodes or leaves; a cluster of equal roots (maize, wheat).`,
          t`The **region of maturation** forms most of the root; lateral roots arise here.`,
        ],
      },
      {
        title: "Modifications",
        points: [
          t`Food storage: **fusiform** (radish), **napiform** (beet), **fasciculated tuberous** (*Dahlia*).`,
          t`Support: **stilt roots** from lower nodes (maize, sugarcane, *Pandanus*).`,
          t`Breathing: **pneumatophores** of mangroves grow upwards and carry **lenticels**.`,
        ],
      },
    ],
    worked: {
      prompt: t`*Dahlia* has a cluster of swollen roots arising from one point at the stem base. What kind of root is this?`,
      steps: [
        t`A cluster from the stem base is not from the radicle: adventitious.`,
        t`Swollen with food, in a cluster: fasciculated tuberous.`,
      ],
      answer: t`Fasciculated tuberous roots`,
    },
    visualSpec: t`Two root systems side by side: one main tap root with branches, and a tuft of equal adventitious roots.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks the stem base.",
      remediation: "Roots from the stem base are adventitious.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks the nodes.",
      remediation: "Roots from nodes are adventitious.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks the plumule.",
      remediation: "The plumule forms the shoot.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks conical.",
      remediation: "Tapering at both ends is fusiform.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks napiform.",
      remediation: "Napiform is the beet shape.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks fasciculated.",
      remediation: "Radish is one swollen tap root, not a cluster.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks pneumatophores.",
      remediation: "Those grow upwards to breathe.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks clinging roots.",
      remediation: "Clinging roots stick a climber to a wall, as in English ivy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks fasciculated.",
      remediation: "Those store food; stilt roots support.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks support.",
      remediation: "Stilt roots support; these breathe.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks air moisture.",
      remediation: "That is the velamen of orchids.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks food storage.",
      remediation: "Lenticels are pores for gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks *Opuntia*.",
      remediation: "It is a desert xerophyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks mangrove.",
      remediation: "Mangroves live in saline swamps.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks lotus.",
      remediation: "Lotus is an aquatic plant.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q8(C)" },
      stem: t`A tap root develops from the`,
      verify: { kind: "value", inputs: {  }, params: { q: "origin" } },
      options: [
        { key: "A", text: t`radicle of the embryo`, correct: true, value: "radicle_r" },
        { key: "B", text: t`base of the stem`, correct: false, misconceptionId: "C01-M1", value: "stem_base" },
        { key: "C", text: t`nodes of the stem`, correct: false, misconceptionId: "C01-M2", value: "stem_nodes" },
        { key: "D", text: t`plumule of the embryo`, correct: false, misconceptionId: "C01-M3", value: "plumule_r" },
      ],
      solution: {
        steps: [
          t`The primary root.`,
          t`It grows from the radicle.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(A)" },
      stem: t`The radish root is swollen in the middle and tapers towards both ends. It is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "fusiform" } },
      options: [
        { key: "A", text: t`fusiform root`, correct: true, value: "fusiform_r" },
        { key: "B", text: t`conical root`, correct: false, misconceptionId: "C01-M4", value: "conical_r" },
        { key: "C", text: t`napiform root`, correct: false, misconceptionId: "C01-M5", value: "napiform_r" },
        { key: "D", text: t`fasciculated tuberous root`, correct: false, misconceptionId: "C01-M6", value: "fasciculated_r" },
      ],
      solution: {
        steps: [
          t`Swollen middle, tapering ends.`,
          t`Fusiform.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(C)" },
      stem: t`In maize, roots arise from the lower nodes, grow obliquely into the soil and give extra support. They are`,
      verify: { kind: "value", inputs: {  }, params: { q: "stilt" } },
      options: [
        { key: "A", text: t`clinging roots`, correct: false, misconceptionId: "C01-M8", value: "clinging_r" },
        { key: "B", text: t`fasciculated tuberous roots`, correct: false, misconceptionId: "C01-M9", value: "fasciculated_r" },
        { key: "C", text: t`stilt roots`, correct: true, value: "stilt_r" },
        { key: "D", text: t`pneumatophores`, correct: false, misconceptionId: "C01-M7", value: "pneumatophore_r" },
      ],
      solution: {
        steps: [
          t`Oblique roots from lower nodes.`,
          t`Stilt roots.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q5(D)" },
      stem: t`Mangroves in marshy places have roots that grow upwards and carry lenticels. These roots mainly help in`,
      verify: { kind: "value", inputs: {  }, params: { q: "breathing" } },
      options: [
        { key: "A", text: t`gaseous exchange for respiration`, correct: true, value: "gas_exchange" },
        { key: "B", text: t`mechanical support`, correct: false, misconceptionId: "C01-M10", value: "support_t" },
        { key: "C", text: t`absorbing moisture from the air`, correct: false, misconceptionId: "C01-M11", value: "air_moisture" },
        { key: "D", text: t`food storage`, correct: false, misconceptionId: "C01-M12", value: "food_storage" },
      ],
      solution: {
        steps: [
          t`Lenticels exchange gases.`,
          t`Respiration in waterlogged soil.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q1(A)" },
      stem: t`Which one of the following will grow better in a moist and shady region?`,
      verify: { kind: "value", inputs: {  }, params: { q: "orchid" } },
      options: [
        { key: "A", text: t`Orchid`, correct: true, value: "orchid_p" },
        { key: "B", text: t`*Opuntia*`, correct: false, misconceptionId: "C01-M13", value: "opuntia_p" },
        { key: "C", text: t`Mangrove`, correct: false, misconceptionId: "C01-M14", value: "mangrove_p" },
        { key: "D", text: t`Lotus`, correct: false, misconceptionId: "C01-M15", value: "lotus_p" },
      ],
      solution: {
        steps: [
          t`Epiphytes of moist rain forests.`,
          t`Orchid.`,
        ],
      },
    },
  ],
};
