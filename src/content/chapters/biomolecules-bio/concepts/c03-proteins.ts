import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Hair, muscle, antibodies and the haemoglobin in blood all look different. What do they have in common?`,
    reveal: t`All are proteins: chains of amino acids, folded into different shapes for different jobs.`,
  },
  explanation: {
    intuition: [
      t`**Proteins** are chains of 100 to 3000 amino acids.`,
      t`Amino acids are joined by **peptide bonds** (–CO–NH–), with water removed.`,
      t`Structure decides function.`,
    ],
    formal: [
      {
        title: "Structure",
        points: [
          t`Primary: the amino acid sequence.`,
          t`**Secondary**: helix or pleated sheet held by **hydrogen bonds**.`,
          t`Tertiary and quaternary: folding, held partly by **disulphide** bonds of **cysteine**.`,
        ],
      },
      {
        title: "Types and roles",
        points: [
          t`**Simple** (only amino acids, e.g. histones); **conjugated** (with a prosthetic group, e.g. **haemoglobin**: globin + haem); derived.`,
          t`Collagen: strength of connective tissue.`,
          t`**Myosin**: muscle contraction. IgG: antibody.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is haemoglobin a conjugated protein?`,
      steps: [
        t`It has a protein part, globin.`,
        t`It has a non-protein haem group.`,
      ],
      answer: t`It carries a prosthetic group`,
    },
    visualSpec: t`Two amino acids joining by a peptide bond, losing a water molecule.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks disulphide.",
      remediation: "That links chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks glycosidic.",
      remediation: "That links sugars.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks hydrogen.",
      remediation: "That holds the helix.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks simple.",
      remediation: "It has a haem group.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks derived.",
      remediation: "It is not broken down.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks fibrous.",
      remediation: "Haemoglobin is globular; its haem group makes it conjugated.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks peptide bonds.",
      remediation: "Those form the chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks disulphide bonds.",
      remediation: "Those are tertiary.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks ionic bonds.",
      remediation: "Hydrogen bonds hold it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks glycine.",
      remediation: "Glycine has no sulphur.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks lysine.",
      remediation: "Lysine has no sulphur.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks alanine.",
      remediation: "Alanine has no sulphur.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks collagen.",
      remediation: "Collagen gives strength.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks histone.",
      remediation: "Histones pack DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks immunoglobulin.",
      remediation: "That is an antibody.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(C)" },
      stem: t`Amino acids in a polypeptide are joined by which bond?`,
      verify: { kind: "value", inputs: {  }, params: { q: "join" } },
      options: [
        { key: "A", text: t`Glycosidic`, correct: false, misconceptionId: "C03-M2", value: "glycosidic_j" },
        { key: "B", text: t`Hydrogen`, correct: false, misconceptionId: "C03-M3", value: "hydrogen_j" },
        { key: "C", text: t`None of these (a peptide bond)`, correct: true, value: "none_of_these" },
        { key: "D", text: t`Disulphide`, correct: false, misconceptionId: "C03-M1", value: "disulphide_j" },
      ],
      solution: {
        steps: [
          t`Peptide bond not listed.`,
          t`None of these.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(F)" },
      stem: t`Haemoglobin, a protein with the prosthetic group haem, is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "haemoglobin" } },
      options: [
        { key: "A", text: t`derived protein`, correct: false, misconceptionId: "C03-M5", value: "derived_p" },
        { key: "B", text: t`fibrous protein`, correct: false, misconceptionId: "C03-M6", value: "fibrous_p" },
        { key: "C", text: t`conjugated protein`, correct: true, value: "conjugated_p" },
        { key: "D", text: t`simple protein`, correct: false, misconceptionId: "C03-M4", value: "simple_p" },
      ],
      solution: {
        steps: [
          t`Globin plus haem.`,
          t`Conjugated protein.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(H)" },
      stem: t`The secondary structure of a protein (helix or pleated sheet) is held by`,
      verify: { kind: "value", inputs: {  }, params: { q: "secondary" } },
      options: [
        { key: "A", text: t`peptide bonds`, correct: false, misconceptionId: "C03-M7", value: "peptide_bonds" },
        { key: "B", text: t`disulphide bonds`, correct: false, misconceptionId: "C03-M8", value: "disulphide_bonds" },
        { key: "C", text: t`ionic bonds`, correct: false, misconceptionId: "C03-M9", value: "ionic_bonds" },
        { key: "D", text: t`hydrogen bonds`, correct: true, value: "hydrogen_bonds" },
      ],
      solution: {
        steps: [
          t`Helix and sheet.`,
          t`Hydrogen bonds.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q4(B)" },
      stem: t`The amino acid that forms disulphide bridges between polypeptides is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cysteine" } },
      options: [
        { key: "A", text: t`lysine`, correct: false, misconceptionId: "C03-M11", value: "lysine_a" },
        { key: "B", text: t`alanine`, correct: false, misconceptionId: "C03-M12", value: "alanine_a" },
        { key: "C", text: t`cysteine`, correct: true, value: "cysteine_a" },
        { key: "D", text: t`glycine`, correct: false, misconceptionId: "C03-M10", value: "glycine_a" },
      ],
      solution: {
        steps: [
          t`Sulphur amino acid.`,
          t`Cysteine.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q4(A)" },
      stem: t`The protein responsible, with actin, for muscle contraction is`,
      verify: { kind: "value", inputs: {  }, params: { q: "muscle" } },
      options: [
        { key: "A", text: t`myosin`, correct: true, value: "myosin_p" },
        { key: "B", text: t`collagen`, correct: false, misconceptionId: "C03-M13", value: "collagen_p" },
        { key: "C", text: t`histone`, correct: false, misconceptionId: "C03-M14", value: "histone_p" },
        { key: "D", text: t`immunoglobulin`, correct: false, misconceptionId: "C03-M15", value: "immunoglobulin_p" },
      ],
      solution: {
        steps: [
          t`With actin.`,
          t`Myosin.`,
        ],
      },
    },
  ],
};
