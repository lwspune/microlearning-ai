import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`DNA has only four bases, yet proteins use twenty amino acids. How can four letters spell twenty words?`,
    reveal: t`In triplets: three bases make a codon, and 4 × 4 × 4 = 64 codons is plenty for twenty amino acids.`,
  },
  explanation: {
    intuition: [
      t`The **genetic code** links base sequences to amino acids.`,
      t`A **codon** is a triplet of bases on mRNA.`,
      t`There are $4^3 = 64$ codons: 61 for amino acids, 3 stops.`,
    ],
    formal: [
      {
        title: "Features",
        points: [
          t`**Triplet**: one codon, one amino acid.`,
          t`**Commaless**: no gaps between codons.`,
          t`**Non-overlapping**: each base belongs to one codon.`,
          t`**Degenerate**: most amino acids have several codons.`,
          t`**Nearly universal**: the same in almost all organisms.`,
        ],
      },
      {
        title: "Special codons",
        points: [
          t`**AUG**: the start codon, for methionine.`,
          t`**UAA, UAG, UGA**: stop codons.`,
          t`The matching triplet on DNA's template strand is the **codogen**.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many bases code for a protein of 100 amino acids, not counting the stop codon?`,
      steps: [
        t`One codon per amino acid.`,
        t`$100 \times 3 = 300$ bases.`,
      ],
      answer: t`300`,
    },
    visualSpec: t`A 64-cell codon wheel with start and stop codons highlighted.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Counts bases.",
      remediation: "Three amino acids need three codons; 9 is the bases.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Doubles.",
      remediation: "One codon per amino acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Gives one.",
      remediation: "Each amino acid needs its own codon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks UAA.",
      remediation: "UAA is a stop codon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks UAG.",
      remediation: "UAG is a stop codon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks UGA.",
      remediation: "UGA is a stop codon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Thinks codons overlap.",
      remediation: "Commaless means no gaps, not overlap.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks one codon per amino acid.",
      remediation: "That is not what commaless means.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Confuses it with universal.",
      remediation: "Universal means shared by organisms.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Reverses it.",
      remediation: "Each codon codes one amino acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Calls it overlapping.",
      remediation: "The code is non-overlapping.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks there are no stops.",
      remediation: "There are three stops.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Gives 64.",
      remediation: "Three of the 64 are stops.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Gives 20.",
      remediation: "20 is the amino acids.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Gives 3.",
      remediation: "3 is the stops.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(8)" },
      stem: t`How many codons are needed to specify three amino acids?`,
      verify: { kind: "value", inputs: {  }, params: { q: "codons" } },
      options: [
        { key: "A", text: t`9`, correct: false, misconceptionId: "C06-M1", value: "9" },
        { key: "B", text: t`6`, correct: false, misconceptionId: "C06-M2", value: "6" },
        { key: "C", text: t`1`, correct: false, misconceptionId: "C06-M3", value: "1" },
        { key: "D", text: t`3`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`One codon per amino acid.`,
          t`3 codons.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2025 Q. 1(vi)" },
      stem: t`The initiation codon of mRNA is`,
      verify: { kind: "value", inputs: {  }, params: { q: "start" } },
      options: [
        { key: "A", text: t`AUG`, correct: true, value: "aug" },
        { key: "B", text: t`UAA`, correct: false, misconceptionId: "C06-M4", value: "uaa" },
        { key: "C", text: t`UAG`, correct: false, misconceptionId: "C06-M5", value: "uag" },
        { key: "D", text: t`UGA`, correct: false, misconceptionId: "C06-M6", value: "uga" },
      ],
      solution: {
        steps: [
          t`AUG starts every mRNA.`,
          t`AUG.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(2)" },
      stem: t`The genetic code is called commaless because`,
      verify: { kind: "value", inputs: {  }, params: { q: "commaless" } },
      options: [
        { key: "A", text: t`there are no gaps between codons`, correct: true, value: "no_gaps" },
        { key: "B", text: t`codons overlap`, correct: false, misconceptionId: "C06-M7", value: "overlapping" },
        { key: "C", text: t`each amino acid has one codon`, correct: false, misconceptionId: "C06-M8", value: "one_codon_each" },
        { key: "D", text: t`it is the same in all organisms`, correct: false, misconceptionId: "C06-M9", value: "universal" },
      ],
      solution: {
        steps: [
          t`Codons follow one another without gaps.`,
          t`Commaless.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(8)" },
      stem: t`Degeneracy of the genetic code means`,
      verify: { kind: "value", inputs: {  }, params: { q: "degenerate" } },
      options: [
        { key: "A", text: t`there are no stop codons`, correct: false, misconceptionId: "C06-M12", value: "no_stop" },
        { key: "B", text: t`an amino acid can have more than one codon`, correct: true, value: "many_codons" },
        { key: "C", text: t`one codon codes for several amino acids`, correct: false, misconceptionId: "C06-M10", value: "one_codon_many" },
        { key: "D", text: t`codons overlap`, correct: false, misconceptionId: "C06-M11", value: "overlap" },
      ],
      solution: {
        steps: [
          t`Several codons can code one amino acid.`,
          t`Degeneracy.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2026 Q. 20" },
      stem: t`Of the 64 codons, how many code for amino acids?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sense" } },
      options: [
        { key: "A", text: t`61`, correct: true, value: "61" },
        { key: "B", text: t`64`, correct: false, misconceptionId: "C06-M13", value: "64" },
        { key: "C", text: t`20`, correct: false, misconceptionId: "C06-M14", value: "20" },
        { key: "D", text: t`3`, correct: false, misconceptionId: "C06-M15", value: "3" },
      ],
      solution: {
        steps: [
          t`64 minus 3 stops.`,
          t`61.`,
        ],
      },
    },
  ],
};
