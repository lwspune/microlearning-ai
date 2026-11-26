import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Every cell in your body holds about two metres of DNA, a code written in just four letters. How can a four-letter code copy itself exactly?`,
    reveal: t`Each letter pairs with only one partner: A with T, G with C. One strand fixes the sequence of the other.`,
  },
  explanation: {
    intuition: [
      t`Nucleic acids are long chains of **nucleotides**.`,
      t`A nucleotide = nitrogen base + pentose sugar + phosphate; without phosphate it is a **nucleoside**.`,
      t`Sugar and phosphate alternate to form the backbone; the bases stick out.`,
      t`In DNA two strands pair through their bases into a double helix.`,
    ],
    formal: [
      {
        title: "DNA and RNA",
        points: [
          t`DNA: 2-deoxyribose; bases A, G, C, T; double helix.`,
          t`RNA: ribose; bases A, G, C, U (uracil in place of thymine); usually a single strand.`,
          t`A and G are purines; C, T and U are pyrimidines.`,
        ],
      },
      {
        title: "Base pairing",
        points: [
          t`A pairs with T (two H bonds); G pairs with C (three H bonds).`,
          t`So DNA has equal amounts of A and T, and of G and C.`,
          t`The two strands run in opposite directions: 5′-ACG-3′ pairs with 3′-TGC-5′.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the complementary strand of 5′-CGTTTAAG-3′.`,
      steps: [
        t`Replace each base by its partner: C→G, G→C, T→A, A→T.`,
        t`The new strand runs the opposite way.`,
      ],
      answer: t`3′-GCAAATTC-5′`,
    },
    visualSpec: t`Zip two DNA strands together, matching each base to its only partner.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Thinks adenine is found only in RNA.",
      remediation: "Adenine is in both; only uracil is RNA-only.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks guanine is found only in RNA.",
      remediation: "Guanine is in both DNA and RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Confuses cytosine with uracil.",
      remediation: "Both are pyrimidines, but only uracil is replaced by thymine in DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks A-U pairs join two RNA strands.",
      remediation: "RNA is usually a single strand; its backbone is sugar-phosphate.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks RNA is a double helix.",
      remediation: "DNA is the double helix; RNA is usually single-stranded.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks G-C pairs join two RNA strands.",
      remediation: "Pairing between two strands is a DNA feature; RNA is single-stranded.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Writes U in place of T in DNA.",
      remediation: "DNA uses thymine; uracil is in RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Copies the strand instead of pairing it.",
      remediation: "Each base is replaced by its partner: A↔T, G↔C.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Reverses the strand instead of pairing it.",
      remediation: "Pair each base, A↔T and G↔C, and write the new strand 3′ to 5′.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks A and T turn into each other on hydrolysis.",
      remediation: "The bases come out unchanged; their amounts match because they pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks each nucleotide holds one A and one T.",
      remediation: "Each nucleotide has one base; A and T sit on opposite strands.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Credits equal molar masses.",
      remediation: "Their masses differ; equal amounts come from A-T pairing.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Describes a nucleoside.",
      remediation: "Base + sugar is a nucleoside; a nucleotide also has a phosphate.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Leaves out the sugar.",
      remediation: "The sugar links base and phosphate; all three are needed.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Confuses nucleotides with amino acids.",
      remediation: "Nucleotides have nitrogen bases, not amino acids.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#21" },
      stem: t`Which of these bases is not present in DNA?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dna_base" } },
      options: [
        { key: "A", text: t`guanine`, correct: false, misconceptionId: "C07-M2", value: "guanine" },
        { key: "B", text: t`cytosine`, correct: false, misconceptionId: "C07-M3", value: "cytosine" },
        { key: "C", text: t`adenine`, correct: false, misconceptionId: "C07-M1", value: "adenine" },
        { key: "D", text: t`uracil`, correct: true, value: "uracil" },
      ],
      solution: {
        steps: [
          t`DNA has A, G, C and T.`,
          t`Uracil occurs only in RNA.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.1 (vi)" },
      stem: t`RNA has`,
      verify: { kind: "value", inputs: {  }, params: { q: "rna" } },
      options: [
        { key: "A", text: t`a sugar-phosphate (P-S-P-S) backbone`, correct: true, value: "psps_backbone" },
        { key: "B", text: t`a double helix`, correct: false, misconceptionId: "C07-M5", value: "double_helix" },
        { key: "C", text: t`G-C base pairs joining two strands`, correct: false, misconceptionId: "C07-M6", value: "g_c_pairs" },
        { key: "D", text: t`A-U base pairs joining two strands`, correct: false, misconceptionId: "C07-M4", value: "a_u_pairs" },
      ],
      solution: {
        steps: [
          t`RNA is a single strand.`,
          t`Its backbone alternates sugar and phosphate: P-S-P-S.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Solved Ex.14.6" },
      stem: t`What is the complementary strand of the DNA segment 5′-ACGTAC-3′?`,
      verify: { kind: "value", inputs: {  }, params: { q: "complement" } },
      options: [
        { key: "A", text: t`3′-CATGCA-5′`, correct: false, misconceptionId: "C07-M9", value: "catgca" },
        { key: "B", text: t`3′-TGCATG-5′`, correct: true, value: "tgcatg" },
        { key: "C", text: t`3′-UGCAUG-5′`, correct: false, misconceptionId: "C07-M7", value: "ugcaug" },
        { key: "D", text: t`3′-ACGTAC-5′`, correct: false, misconceptionId: "C07-M8", value: "acgtac" },
      ],
      solution: {
        steps: [
          t`Pair each base: A→T, C→G, G→C, T→A.`,
          t`Antiparallel: 3′-TGCATG-5′.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.2 (ii)" },
      stem: t`On complete hydrolysis, DNA gives equal amounts of adenine and thymine because`,
      verify: { kind: "value", inputs: {  }, params: { q: "chargaff" } },
      options: [
        { key: "A", text: t`every nucleotide contains one adenine and one thymine`, correct: false, misconceptionId: "C07-M11", value: "one_each" },
        { key: "B", text: t`adenine and thymine turn into each other on hydrolysis`, correct: false, misconceptionId: "C07-M10", value: "interconvert" },
        { key: "C", text: t`in the double helix adenine always pairs with thymine`, correct: true, value: "a_pairs_t" },
        { key: "D", text: t`adenine and thymine have the same molar mass`, correct: false, misconceptionId: "C07-M12", value: "same_mass" },
      ],
      solution: {
        steps: [
          t`In the double helix, every A pairs with a T.`,
          t`So their amounts are equal.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#19" },
      stem: t`A nucleotide is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "nucleotide" } },
      options: [
        { key: "A", text: t`a nitrogen base and a pentose sugar only`, correct: false, misconceptionId: "C07-M13", value: "base_sugar" },
        { key: "B", text: t`a nitrogen base and a phosphate group only`, correct: false, misconceptionId: "C07-M14", value: "base_phosphate" },
        { key: "C", text: t`an amino acid, a sugar and a phosphate group`, correct: false, misconceptionId: "C07-M15", value: "amino_acid" },
        { key: "D", text: t`a nitrogen base, a pentose sugar and a phosphate group`, correct: true, value: "base_sugar_phosphate" },
      ],
      solution: {
        steps: [
          t`Nucleoside = base + sugar.`,
          t`Adding a phosphate makes a nucleotide.`,
        ],
      },
    },
  ],
};
