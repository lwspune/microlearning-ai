import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Half of a DNA molecule is enough to rebuild the other half exactly. How?`,
    reveal: t`Its bases pair strictly: A with T, G with C. Each strand spells out its partner.`,
  },
  explanation: {
    intuition: [
      t`**Nucleic acids** are polynucleotides.`,
      t`A **nucleotide**: a pentose sugar, phosphoric acid and a nitrogen base.`,
      t`DNA and RNA differ in sugar and one base.`,
    ],
    formal: [
      {
        title: "DNA",
        points: [
          t`Deoxyribose; bases A, T, G, C; double-stranded.`,
          t`**A pairs with T** (two H bonds), **G with C** (**three H bonds**).`,
          t`Chargaff: A = T and G = C, so $\%A = 50 - \%C$.`,
        ],
      },
      {
        title: "RNA",
        points: [
          t`**Ribose** and **uracil** (in place of thymine); usually single-stranded.`,
          t`**mRNA**: carries the code for the amino acid sequence.`,
          t`**tRNA** brings amino acids; **rRNA** forms ribosomes.`,
        ],
      },
    ],
    worked: {
      prompt: t`A DNA has 20% adenine. What is its guanine?`,
      steps: [
        t`T = A = 20%, so A + T = 40%.`,
        t`G + C = 60%, so G = 30%.`,
      ],
      answer: t`30%`,
    },
    visualSpec: t`A short DNA ladder with A–T rungs (two lines) and G–C rungs (three lines).`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Subtracts C from 100.",
      remediation: "Subtract G too (100 − 28 = 72), then halve: A = 36%.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Forgets to halve.",
      remediation: "A and T share the rest.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Sets A equal to C.",
      remediation: "A pairs with T.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says two.",
      remediation: "That is A–T.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says one.",
      remediation: "G–C has three.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says four.",
      remediation: "G–C has three.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says deoxyribose and thymine.",
      remediation: "That is DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says ribose and thymine.",
      remediation: "RNA has uracil.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says deoxyribose and uracil.",
      remediation: "RNA has ribose.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says carries amino acids.",
      remediation: "That is tRNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says forms ribosomes.",
      remediation: "That is rRNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says stores energy.",
      remediation: "That is ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says sugar and base.",
      remediation: "That is a nucleoside.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says amino acid.",
      remediation: "That is protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says glycerol.",
      remediation: "That is a lipid.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q6" },
      stem: t`A double-stranded DNA has 14% cytosine. What percentage of adenine does it have?`,
      verify: { kind: "value", inputs: { c: "14" }, params: { q: "chargaff" } },
      options: [
        { key: "A", text: t`$86$`, correct: false, misconceptionId: "C06-M1", value: "86" },
        { key: "B", text: t`$72$`, correct: false, misconceptionId: "C06-M2", value: "72" },
        { key: "C", text: t`$14$`, correct: false, misconceptionId: "C06-M3", value: "14" },
        { key: "D", text: t`$36$`, correct: true, value: "36" },
      ],
      solution: {
        steps: [
          t`C = G = 14%, so A + T = 72%.`,
          t`A = 36%.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q2(A)" },
      stem: t`A guanine–cytosine pair in DNA is held by how many hydrogen bonds?`,
      verify: { kind: "value", inputs: {  }, params: { q: "gc" } },
      options: [
        { key: "A", text: t`Three`, correct: true, value: "three_h" },
        { key: "B", text: t`Two`, correct: false, misconceptionId: "C06-M4", value: "two_h" },
        { key: "C", text: t`One`, correct: false, misconceptionId: "C06-M5", value: "one_h" },
        { key: "D", text: t`Four`, correct: false, misconceptionId: "C06-M6", value: "four_h" },
      ],
      solution: {
        steps: [
          t`Strongest pair.`,
          t`Three.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(J)" },
      stem: t`RNA differs from DNA in having`,
      verify: { kind: "value", inputs: {  }, params: { q: "rna" } },
      options: [
        { key: "A", text: t`ribose and uracil`, correct: true, value: "ribose_uracil" },
        { key: "B", text: t`deoxyribose and thymine`, correct: false, misconceptionId: "C06-M7", value: "deoxyribose_thymine" },
        { key: "C", text: t`ribose and thymine`, correct: false, misconceptionId: "C06-M8", value: "ribose_thymine" },
        { key: "D", text: t`deoxyribose and uracil`, correct: false, misconceptionId: "C06-M9", value: "deoxyribose_uracil" },
      ],
      solution: {
        steps: [
          t`RNA's sugar and base.`,
          t`Ribose and uracil.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q5(J)" },
      stem: t`Messenger RNA`,
      verify: { kind: "value", inputs: {  }, params: { q: "mrna" } },
      options: [
        { key: "A", text: t`stores energy`, correct: false, misconceptionId: "C06-M12", value: "stores_energy" },
        { key: "B", text: t`carries the genetic information for the order of amino acids`, correct: true, value: "carries_code" },
        { key: "C", text: t`carries amino acids to the ribosome`, correct: false, misconceptionId: "C06-M10", value: "carries_amino_acids" },
        { key: "D", text: t`forms the ribosomes`, correct: false, misconceptionId: "C06-M11", value: "forms_ribosomes" },
      ],
      solution: {
        steps: [
          t`Messenger.`,
          t`It carries the genetic code.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q5(I)" },
      stem: t`A nucleotide is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "nucleotide" } },
      options: [
        { key: "A", text: t`a pentose sugar, phosphoric acid and a nitrogen base`, correct: true, value: "sugar_phosphate_base" },
        { key: "B", text: t`a sugar and a base only`, correct: false, misconceptionId: "C06-M13", value: "sugar_base_only" },
        { key: "C", text: t`an amino acid and phosphate`, correct: false, misconceptionId: "C06-M14", value: "amino_acid_phosphate" },
        { key: "D", text: t`glycerol and a fatty acid`, correct: false, misconceptionId: "C06-M15", value: "glycerol_fatty_acid" },
      ],
      solution: {
        steps: [
          t`Three parts.`,
          t`Sugar, phosphate and base.`,
        ],
      },
    },
  ],
};
