import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`India's population tripled after 1950, yet famines became rare. What fed the extra people?`,
    reveal: t`Better crop varieties: plant breeders crossed and selected plants for high yield and disease resistance.`,
  },
  explanation: {
    intuition: [
      t`**Plant breeding** changes a crop's heredity to improve it.`,
      t`**Hybridization** is the chief method.`,
      t`**Mutation breeding** creates new variation.`,
    ],
    formal: [
      {
        title: "Steps of hybridization",
        points: [
          t`Collect variability: all the alleles of a crop form its **germplasm**.`,
          t`Choose parents, cross them, and select the best offspring.`,
          t`Test, then release the new variety.`,
        ],
      },
      {
        title: "Results",
        points: [
          t`Hybrids: **Ratna** (rice), **Ganga-3** (maize), CO-12 (jowar), Niphad (bajra).`,
          t`Sugarcane: *S. barberi* (North India) and high-sugar *S. officinarum* (South), crossed at Coimbatore.`,
          t`Mutagens: **physical** (X-rays, UV) and chemical.`,
        ],
      },
    ],
    worked: {
      prompt: t`A breeder wants a rust-resistant wheat. Where should she look for the gene first?`,
      steps: [
        t`Wild relatives carry useful alleles.`,
        t`These are kept in the germplasm collection.`,
      ],
      answer: t`In the germplasm`,
    },
    visualSpec: t`Two parent plants crossed, their offspring tested in rows, the best one selected.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks Ganga-3.",
      remediation: "Ganga-3 is maize.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks CO-12.",
      remediation: "CO-12 is jowar.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks Niphad.",
      remediation: "Niphad is bajra.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks Ratna.",
      remediation: "Ratna is rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks CO-12.",
      remediation: "CO-12 is jowar.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks Niphad.",
      remediation: "Niphad is bajra.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks *S. barberi*.",
      remediation: "*S. barberi* is North Indian.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks *Oryza sativa*.",
      remediation: "That is rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks *Zea mays*.",
      remediation: "That is maize.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks genome.",
      remediation: "A genome is one organism's genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks hybrid.",
      remediation: "A hybrid is one cross.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks clone.",
      remediation: "A clone is a copy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks chemical.",
      remediation: "Chemicals are a separate group.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks hormones.",
      remediation: "Hormones are not mutagens.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks fertilizers.",
      remediation: "Fertilizers feed plants.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 6" },
      stem: t`A semi-dwarf, better-yielding hybrid variety of rice is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rice" } },
      options: [
        { key: "A", text: t`Ratna`, correct: true, value: "ratna_v" },
        { key: "B", text: t`Ganga-3`, correct: false, misconceptionId: "C01-M1", value: "ganga3_v" },
        { key: "C", text: t`CO-12`, correct: false, misconceptionId: "C01-M2", value: "co12_v" },
        { key: "D", text: t`Niphad`, correct: false, misconceptionId: "C01-M3", value: "niphad_v" },
      ],
      solution: {
        steps: [
          t`Semi-dwarf rice.`,
          t`Ratna.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 6" },
      stem: t`A hybrid variety of maize is`,
      verify: { kind: "value", inputs: {  }, params: { q: "maize" } },
      options: [
        { key: "A", text: t`Ganga-3`, correct: true, value: "ganga3_v" },
        { key: "B", text: t`Ratna`, correct: false, misconceptionId: "C01-M4", value: "ratna_v" },
        { key: "C", text: t`CO-12`, correct: false, misconceptionId: "C01-M5", value: "co12_v" },
        { key: "D", text: t`Niphad`, correct: false, misconceptionId: "C01-M6", value: "niphad_v" },
      ],
      solution: {
        steps: [
          t`Maize hybrid.`,
          t`Ganga-3.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2025 Q. 24" },
      stem: t`The thick-stemmed, high-sugar sugarcane native to South India is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sugarcane" } },
      options: [
        { key: "A", text: t`*Oryza sativa*`, correct: false, misconceptionId: "C01-M8", value: "oryza_sativa" },
        { key: "B", text: t`*Zea mays*`, correct: false, misconceptionId: "C01-M9", value: "zea_mays" },
        { key: "C", text: t`*Saccharum officinarum*`, correct: true, value: "s_officinarum" },
        { key: "D", text: t`*Saccharum barberi*`, correct: false, misconceptionId: "C01-M7", value: "s_barberi" },
      ],
      solution: {
        steps: [
          t`South Indian, high sugar.`,
          t`*Saccharum officinarum*.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q4(6)" },
      stem: t`The collection of all the diverse alleles of a crop is its`,
      verify: { kind: "value", inputs: {  }, params: { q: "germplasm" } },
      options: [
        { key: "A", text: t`germplasm`, correct: true, value: "germplasm_c" },
        { key: "B", text: t`genome`, correct: false, misconceptionId: "C01-M10", value: "genome_c" },
        { key: "C", text: t`hybrid`, correct: false, misconceptionId: "C01-M11", value: "hybrid_c" },
        { key: "D", text: t`clone`, correct: false, misconceptionId: "C01-M12", value: "clone_c" },
      ],
      solution: {
        steps: [
          t`All the alleles of a crop.`,
          t`Germplasm.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q4(5)" },
      stem: t`In mutation breeding, X-rays and UV rays are used as`,
      verify: { kind: "value", inputs: {  }, params: { q: "mutagens" } },
      options: [
        { key: "A", text: t`physical mutagens`, correct: true, value: "physical_mutagens" },
        { key: "B", text: t`chemical mutagens`, correct: false, misconceptionId: "C01-M13", value: "chemical_mutagens" },
        { key: "C", text: t`plant hormones`, correct: false, misconceptionId: "C01-M14", value: "plant_hormones" },
        { key: "D", text: t`fertilizers`, correct: false, misconceptionId: "C01-M15", value: "fertilizers_m" },
      ],
      solution: {
        steps: [
          t`Radiation.`,
          t`Physical mutagens.`,
        ],
      },
    },
  ],
};
