import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A virus can be stored as a crystal on a shelf for years. Is it alive?`,
    reveal: t`Only inside a host cell. Outside, it is inactive; inside, it takes over the cell to copy itself.`,
  },
  explanation: {
    intuition: [
      t`Viruses are **acellular**: nucleic acid inside a protein coat (capsid).`,
      t`They have no cell machinery of their own.`,
      t`**Viroids** are even simpler.`,
    ],
    formal: [
      {
        title: "Viruses",
        points: [
          t`Each has **DNA or RNA**, never both.`,
          t`**TMV** (tobacco mosaic virus): a rod of RNA inside capsomeres.`,
          t`**Bacteriophages** infect bacteria: head, collar, sheath, tail fibres; usually DNA.`,
        ],
      },
      {
        title: "Viroids",
        points: [
          t`**T. O. Diener (1971)**: potato spindle tuber disease.`,
          t`A small, **single-stranded RNA** with **no protein coat**.`,
          t`Animal viruses cause mumps, herpes and AIDS; plant viruses cause mosaics and leaf curl.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why are viruses not placed in any of the five kingdoms?`,
      steps: [
        t`They are not cells.`,
        t`They are active only inside a host.`,
      ],
      answer: t`They are acellular`,
    },
    visualSpec: t`A rod-shaped TMV and a bacteriophage with its head and tail fibres.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks bacteriophage.",
      remediation: "Phages have a protein coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks plant virus.",
      remediation: "Viruses have a coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks animal virus.",
      remediation: "Viruses have a coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says DNA.",
      remediation: "TMV has RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says sphere.",
      remediation: "TMV is a rod.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says both.",
      remediation: "A virus has one.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says plants.",
      remediation: "Phages infect bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says humans.",
      remediation: "Phages infect bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says it is a bacterium.",
      remediation: "It is a virus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says it grows.",
      remediation: "It is inactive outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says it divides.",
      remediation: "It copies only in a host.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says it photosynthesises.",
      remediation: "It has no machinery.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says both.",
      remediation: "Never both together.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says protein only.",
      remediation: "Protein is the coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says neither.",
      remediation: "It has one nucleic acid.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q1(A)" },
      stem: t`Which has single-stranded RNA and no protein coat?`,
      verify: { kind: "value", inputs: {  }, params: { q: "viroid" } },
      options: [
        { key: "A", text: t`Bacteriophage`, correct: false, misconceptionId: "C06-M1", value: "bacteriophage_v" },
        { key: "B", text: t`Plant virus`, correct: false, misconceptionId: "C06-M2", value: "plant_virus_v" },
        { key: "C", text: t`Animal virus`, correct: false, misconceptionId: "C06-M3", value: "animal_virus_v" },
        { key: "D", text: t`Viroid`, correct: true, value: "viroid_v" },
      ],
      solution: {
        steps: [
          t`Bare RNA.`,
          t`Viroid.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q5(C)" },
      stem: t`Tobacco mosaic virus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tmv" } },
      options: [
        { key: "A", text: t`a rod with RNA inside`, correct: true, value: "rna_rod" },
        { key: "B", text: t`a rod with DNA inside`, correct: false, misconceptionId: "C06-M4", value: "dna_rod" },
        { key: "C", text: t`a sphere with RNA`, correct: false, misconceptionId: "C06-M5", value: "rna_sphere" },
        { key: "D", text: t`a particle with both DNA and RNA`, correct: false, misconceptionId: "C06-M6", value: "dna_and_rna" },
      ],
      solution: {
        steps: [
          t`Rod of RNA.`,
          t`An RNA rod.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q7(D)" },
      stem: t`A bacteriophage is a virus that`,
      verify: { kind: "value", inputs: {  }, params: { q: "phage" } },
      options: [
        { key: "A", text: t`infects bacteria`, correct: true, value: "infects_bacteria" },
        { key: "B", text: t`infects plants`, correct: false, misconceptionId: "C06-M7", value: "infects_plants" },
        { key: "C", text: t`infects humans`, correct: false, misconceptionId: "C06-M8", value: "infects_humans" },
        { key: "D", text: t`is itself a bacterium`, correct: false, misconceptionId: "C06-M9", value: "is_a_bacterium" },
      ],
      solution: {
        steps: [
          t`Bacteria eater.`,
          t`It infects bacteria.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q6" },
      stem: t`Outside a host cell, a virus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "outside" } },
      options: [
        { key: "A", text: t`photosynthesising`, correct: false, misconceptionId: "C06-M12", value: "photosynthesises_v" },
        { key: "B", text: t`inactive`, correct: true, value: "inactive_v" },
        { key: "C", text: t`growing`, correct: false, misconceptionId: "C06-M10", value: "grows_v" },
        { key: "D", text: t`dividing`, correct: false, misconceptionId: "C06-M11", value: "divides_v" },
      ],
      solution: {
        steps: [
          t`No host, no activity.`,
          t`Inactive.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q6" },
      stem: t`The genetic material of a virus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "genetic" } },
      options: [
        { key: "A", text: t`either DNA or RNA, never both`, correct: true, value: "dna_or_rna" },
        { key: "B", text: t`both DNA and RNA`, correct: false, misconceptionId: "C06-M13", value: "both_dna_rna" },
        { key: "C", text: t`protein only`, correct: false, misconceptionId: "C06-M14", value: "protein_only" },
        { key: "D", text: t`neither`, correct: false, misconceptionId: "C06-M15", value: "neither_v" },
      ],
      solution: {
        steps: [
          t`One nucleic acid.`,
          t`DNA or RNA, never both.`,
        ],
      },
    },
  ],
};
