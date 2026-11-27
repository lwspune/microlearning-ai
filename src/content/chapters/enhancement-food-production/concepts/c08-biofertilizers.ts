import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Paddy farmers float a small fern in their flooded fields. How does a fern fertilize rice?`,
    reveal: t`The fern *Azolla* carries a cyanobacterium, *Anabaena*, in its leaves, which fixes nitrogen from the air.`,
  },
  explanation: {
    intuition: [
      t`**Biofertilizers** are living microbes that enrich soil nutrients.`,
      t`Most fix nitrogen.`,
      t`They are cheaper and cleaner than chemical fertilizers.`,
    ],
    formal: [
      {
        title: "Nitrogen fixers",
        points: [
          t`Symbiotic: ***Rhizobium*** in legume root nodules.`,
          t`Free-living aerobic: ***Azotobacter***, *Beijerinckia*; anaerobic: ***Rhodospirillum***.`,
          t`Cyanobacteria: *Nostoc*, *Anabaena* (in ***Azolla***, for rice).`,
        ],
      },
      {
        title: "Fungi",
        points: [
          t`**Mycorrhiza**: a fungus in symbiosis with the roots of higher plants.`,
          t`Ecto- and endomycorrhiza.`,
          t`They help absorb phosphorus and water.`,
        ],
      },
    ],
    worked: {
      prompt: t`A farmer grows wheat, a non-legume. Which bacterial biofertilizer suits it?`,
      steps: [
        t`*Rhizobium* needs legume roots.`,
        t`*Azotobacter* lives free in the soil.`,
      ],
      answer: t`*Azotobacter*`,
    },
    visualSpec: t`A legume root with nodules, an Azolla frond, and fungal threads around a root.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks *Rhizobium*.",
      remediation: "*Rhizobium* is symbiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks *Nostoc*.",
      remediation: "*Nostoc* is a cyanobacterium.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks Bt.",
      remediation: "Bt is a biocontrol agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks *Azotobacter*.",
      remediation: "*Azotobacter* is aerobic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks *Beijerinckia*.",
      remediation: "*Beijerinckia* is aerobic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks *Rhizobium*.",
      remediation: "*Rhizobium* is symbiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks *Azotobacter*.",
      remediation: "*Azolla* suits flooded rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks *Azospirillum*.",
      remediation: "*Azolla* is the rice biofertilizer.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks *Bacillus*.",
      remediation: "*Bacillus* is not used for rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks bacteria and nodules.",
      remediation: "That is *Rhizobium*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks alga and fungus.",
      remediation: "That is a lichen.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks cyanobacteria and fern.",
      remediation: "That is *Azolla*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Says free in soil.",
      remediation: "That is *Azotobacter*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Says *Azolla* leaves.",
      remediation: "That is *Anabaena*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Says cereal roots.",
      remediation: "*Rhizobium* needs legumes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(3)" },
      stem: t`Which is a free-living bacterial biofertilizer?`,
      verify: { kind: "value", inputs: {  }, params: { q: "free" } },
      options: [
        { key: "A", text: t`*Azotobacter*`, correct: true, value: "azotobacter_b" },
        { key: "B", text: t`*Rhizobium*`, correct: false, misconceptionId: "C08-M1", value: "rhizobium_b" },
        { key: "C", text: t`*Nostoc*`, correct: false, misconceptionId: "C08-M2", value: "nostoc_b" },
        { key: "D", text: t`*Bacillus thuringiensis*`, correct: false, misconceptionId: "C08-M3", value: "bt_b" },
      ],
      solution: {
        steps: [
          t`Free-living, aerobic.`,
          t`*Azotobacter*.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(6)" },
      stem: t`A free-living anaerobic nitrogen fixer is`,
      verify: { kind: "value", inputs: {  }, params: { q: "anaerobic" } },
      options: [
        { key: "A", text: t`*Azotobacter*`, correct: false, misconceptionId: "C08-M4", value: "azotobacter_b" },
        { key: "B", text: t`*Beijerinckia*`, correct: false, misconceptionId: "C08-M5", value: "beijerinckia_b" },
        { key: "C", text: t`*Rhizobium*`, correct: false, misconceptionId: "C08-M6", value: "rhizobium_b" },
        { key: "D", text: t`*Rhodospirillum*`, correct: true, value: "rhodospirillum_b" },
      ],
      solution: {
        steps: [
          t`Free-living, anaerobic.`,
          t`*Rhodospirillum*.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2025 Q. 1(iii)" },
      stem: t`Farmers use which biofertilizer to raise the yield of rice?`,
      verify: { kind: "value", inputs: {  }, params: { q: "rice" } },
      options: [
        { key: "A", text: t`*Azotobacter*`, correct: false, misconceptionId: "C08-M7", value: "azotobacter_b" },
        { key: "B", text: t`*Azospirillum*`, correct: false, misconceptionId: "C08-M8", value: "azospirillum_b" },
        { key: "C", text: t`*Bacillus*`, correct: false, misconceptionId: "C08-M9", value: "bacillus_b" },
        { key: "D", text: t`*Azolla*`, correct: true, value: "azolla_f" },
      ],
      solution: {
        steps: [
          t`Fern with *Anabaena*.`,
          t`*Azolla*.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2024 Q. 24" },
      stem: t`Mycorrhiza is a symbiotic association of`,
      verify: { kind: "value", inputs: {  }, params: { q: "mycorrhiza" } },
      options: [
        { key: "A", text: t`an alga with a fungus`, correct: false, misconceptionId: "C08-M11", value: "alga_fungus" },
        { key: "B", text: t`a cyanobacterium with a fern`, correct: false, misconceptionId: "C08-M12", value: "cyanobacteria_fern" },
        { key: "C", text: t`a fungus with the roots of higher plants`, correct: true, value: "fungus_root" },
        { key: "D", text: t`bacteria with root nodules`, correct: false, misconceptionId: "C08-M10", value: "bacteria_nodule" },
      ],
      solution: {
        steps: [
          t`Fungus and root.`,
          t`A fungus with roots.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(2)" },
      stem: t`*Rhizobium* fixes nitrogen`,
      verify: { kind: "value", inputs: {  }, params: { q: "rhizobium" } },
      options: [
        { key: "A", text: t`in the roots of cereals`, correct: false, misconceptionId: "C08-M15", value: "cereal_roots" },
        { key: "B", text: t`in the root nodules of legumes`, correct: true, value: "legume_nodules" },
        { key: "C", text: t`free in the soil`, correct: false, misconceptionId: "C08-M13", value: "free_in_soil" },
        { key: "D", text: t`in the leaves of *Azolla*`, correct: false, misconceptionId: "C08-M14", value: "azolla_leaves" },
      ],
      solution: {
        steps: [
          t`Symbiotic in legumes.`,
          t`Root nodules of legumes.`,
        ],
      },
    },
  ],
};
