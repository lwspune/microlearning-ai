import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`A pea pod and the peas inside it both come from one flower. Which flower part became the pod, and which became each pea?`,
    reveal: t`The ovary became the pod (the fruit), and each fertilized ovule became a pea (a seed).`,
  },
  explanation: {
    intuition: [
      t`After fertilization the flower changes into fruit and seeds.`,
      t`Each **ovule** becomes a **seed**.`,
      t`The **ovary** becomes the **fruit**; its wall becomes the pericarp.`,
      t`Pollination and fertilization are needed for seeds and, usually, for the fruit.`,
    ],
    formal: [
      {
        title: "From ovule to seed",
        points: [
          t`Outer integument → **testa**; inner integument → **tegmen**.`,
          t`Zygote → **embryo**; primary endosperm nucleus → endosperm.`,
          t`Funicle → stalk of the seed; its scar → **hilum**.`,
          t`Micropyle stays as a pore in the seed coat.`,
        ],
      },
      {
        title: "Seed types",
        points: [
          t`**Non-endospermic**: food stored in the cotyledons, as in bean and pea.`,
          t`**Endospermic**: endosperm remains, as in maize, castor and coconut.`,
        ],
      },
    ],
    worked: {
      prompt: t`What does the inner integument of an ovule become?`,
      steps: [
        t`The integuments become the seed coat.`,
        t`The inner one becomes the tegmen.`,
      ],
      answer: t`The tegmen`,
    },
    visualSpec: t`An ovule turning into a seed, each part sliding into its new name.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Says the seed.",
      remediation: "Ovules become seeds; the ovary becomes the fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Says the embryo.",
      remediation: "The embryo comes from the zygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Says the seed coat.",
      remediation: "The seed coat comes from the integuments.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Says the tegmen.",
      remediation: "The inner integument becomes the tegmen; the outer, the testa.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Says the pericarp.",
      remediation: "The pericarp is the fruit wall, from the ovary.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Says the hilum.",
      remediation: "The hilum is a scar left by the funicle.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Says the micropyle.",
      remediation: "The micropyle is a pore; the hilum is the scar.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Says the chalaza.",
      remediation: "The chalaza is the base of the ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Says the funicle.",
      remediation: "The funicle is the stalk itself; its scar is the hilum.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Picks maize.",
      remediation: "Maize keeps its endosperm: endospermic.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Picks castor.",
      remediation: "Castor keeps its endosperm.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Picks coconut.",
      remediation: "Coconut is rich in endosperm.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Says the endosperm.",
      remediation: "The endosperm comes from the primary endosperm nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Says the seed coat.",
      remediation: "The seed coat comes from the integuments.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: "Says the fruit wall.",
      remediation: "The fruit wall comes from the ovary wall.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(9)" },
      stem: t`After fertilization, the ovary develops into the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ovary" } },
      options: [
        { key: "A", text: t`fruit`, correct: true, value: "fruit" },
        { key: "B", text: t`seed`, correct: false, misconceptionId: "C11-M1", value: "seed" },
        { key: "C", text: t`embryo`, correct: false, misconceptionId: "C11-M2", value: "embryo" },
        { key: "D", text: t`seed coat`, correct: false, misconceptionId: "C11-M3", value: "seed_coat" },
      ],
      solution: {
        steps: [
          t`Ovules become seeds.`,
          t`The ovary around them becomes the fruit.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q7" },
      stem: t`The outer integument of the ovule becomes the seed's`,
      verify: { kind: "value", inputs: {  }, params: { q: "testa" } },
      options: [
        { key: "A", text: t`pericarp`, correct: false, misconceptionId: "C11-M5", value: "pericarp" },
        { key: "B", text: t`hilum`, correct: false, misconceptionId: "C11-M6", value: "hilum" },
        { key: "C", text: t`testa`, correct: true, value: "testa" },
        { key: "D", text: t`tegmen`, correct: false, misconceptionId: "C11-M4", value: "tegmen" },
      ],
      solution: {
        steps: [
          t`The integuments become the seed coat.`,
          t`The outer one becomes the testa.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q6" },
      stem: t`The scar on a seed where it was attached to the stalk is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "hilum" } },
      options: [
        { key: "A", text: t`micropyle`, correct: false, misconceptionId: "C11-M7", value: "micropyle" },
        { key: "B", text: t`chalaza`, correct: false, misconceptionId: "C11-M8", value: "chalaza" },
        { key: "C", text: t`funicle`, correct: false, misconceptionId: "C11-M9", value: "funicle" },
        { key: "D", text: t`hilum`, correct: true, value: "hilum" },
      ],
      solution: {
        steps: [
          t`The funicle attached the ovule to the ovary.`,
          t`Its scar on the seed is the hilum.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q6" },
      stem: t`Which seed is non-endospermic, its food stored in the cotyledons?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nonendo" } },
      options: [
        { key: "A", text: t`castor`, correct: false, misconceptionId: "C11-M11", value: "castor" },
        { key: "B", text: t`coconut`, correct: false, misconceptionId: "C11-M12", value: "coconut" },
        { key: "C", text: t`bean`, correct: true, value: "bean" },
        { key: "D", text: t`maize`, correct: false, misconceptionId: "C11-M10", value: "maize" },
      ],
      solution: {
        steps: [
          t`Bean stores food in its cotyledons.`,
          t`It is non-endospermic.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q7" },
      stem: t`After fertilization, the zygote develops into the`,
      verify: { kind: "value", inputs: {  }, params: { q: "zygote" } },
      options: [
        { key: "A", text: t`endosperm`, correct: false, misconceptionId: "C11-M13", value: "endosperm" },
        { key: "B", text: t`seed coat`, correct: false, misconceptionId: "C11-M14", value: "seed_coat" },
        { key: "C", text: t`fruit wall`, correct: false, misconceptionId: "C11-M15", value: "pericarp" },
        { key: "D", text: t`embryo`, correct: true, value: "embryo" },
      ],
      solution: {
        steps: [
          t`The zygote is the fertilized egg.`,
          t`It develops into the embryo.`,
        ],
      },
    },
  ],
};
