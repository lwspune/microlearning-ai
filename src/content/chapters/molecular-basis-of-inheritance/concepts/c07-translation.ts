import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`An mRNA leaves the nucleus as a string of codons. How does a cell turn it into a chain of amino acids?`,
    reveal: t`Ribosomes read it codon by codon while tRNAs bring the matching amino acids and peptide bonds join them.`,
  },
  explanation: {
    intuition: [
      t`**Translation** builds a polypeptide from mRNA.`,
      t`It happens on **ribosomes** in the **cytoplasm**.`,
      t`**tRNA** carries amino acids; its **anticodon** pairs with the codon.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`Charging: each amino acid joins its tRNA.`,
          t`Initiation: met-tRNA binds the start codon AUG on the small subunit.`,
          t`The large subunit joins.`,
          t`Elongation: the next tRNA binds; a **peptide bond** forms.`,
          t`Termination: a stop codon releases the chain.`,
        ],
      },
    ],
    worked: {
      prompt: t`The anticodon of a tRNA is UAC. Which codon does it read?`,
      steps: [
        t`Anticodons pair with codons.`,
        t`UAC pairs with AUG.`,
      ],
      answer: t`AUG`,
    },
    visualSpec: t`A ribosome sliding along mRNA as tRNAs drop off amino acids.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks the nucleus.",
      remediation: "Transcription is in the nucleus; translation in the cytoplasm.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks the nucleolus.",
      remediation: "The nucleolus makes rRNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks lysosomes.",
      remediation: "Lysosomes digest.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Starts with the second tRNA.",
      remediation: "Initiation comes first, with met-tRNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Starts with subunits joining.",
      remediation: "met-tRNA binds the small subunit first.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Starts with the peptide bond.",
      remediation: "Bonds form only after two tRNAs bind.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks mRNA.",
      remediation: "mRNA has codons.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks rRNA.",
      remediation: "rRNA forms ribosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks DNA.",
      remediation: "DNA has no anticodons.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks hydrogen bonds.",
      remediation: "Hydrogen bonds pair bases.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks glycosidic bonds.",
      remediation: "Those join sugars.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks phosphodiester bonds.",
      remediation: "Those join nucleotides.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks AUG.",
      remediation: "AUG starts translation.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks the end of a tRNA.",
      remediation: "Stop codons end it.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks an intron.",
      remediation: "Introns are removed before translation.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(3)" },
      stem: t`Translation takes place in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "site" } },
      options: [
        { key: "A", text: t`nucleolus`, correct: false, misconceptionId: "C07-M2", value: "nucleolus" },
        { key: "B", text: t`lysosomes`, correct: false, misconceptionId: "C07-M3", value: "lysosome" },
        { key: "C", text: t`cytoplasm`, correct: true, value: "cytoplasm" },
        { key: "D", text: t`nucleus`, correct: false, misconceptionId: "C07-M1", value: "nucleus" },
      ],
      solution: {
        steps: [
          t`Ribosomes are in the cytoplasm.`,
          t`Translation is there.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(10)" },
      stem: t`Order these steps of translation: i. met-tRNA binds the start codon; ii. a peptide bond forms between two amino acids; iii. the second tRNA binds; iv. the small and large ribosomal subunits join.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`iii, iv, i, ii`, correct: false, misconceptionId: "C07-M4", value: "iii_iv_i_ii" },
        { key: "B", text: t`iv, iii, ii, i`, correct: false, misconceptionId: "C07-M5", value: "iv_iii_ii_i" },
        { key: "C", text: t`ii, iii, iv, i`, correct: false, misconceptionId: "C07-M6", value: "ii_iii_iv_i" },
        { key: "D", text: t`i, iv, iii, ii`, correct: true, value: "i_iv_iii_ii" },
      ],
      solution: {
        steps: [
          t`Initiation, subunits join, second tRNA, peptide bond.`,
          t`i, iv, iii, ii.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(4)" },
      stem: t`The anticodon is found on`,
      verify: { kind: "value", inputs: {  }, params: { q: "anticodon" } },
      options: [
        { key: "A", text: t`DNA`, correct: false, misconceptionId: "C07-M9", value: "dna" },
        { key: "B", text: t`tRNA`, correct: true, value: "trna" },
        { key: "C", text: t`mRNA`, correct: false, misconceptionId: "C07-M7", value: "mrna" },
        { key: "D", text: t`rRNA`, correct: false, misconceptionId: "C07-M8", value: "rrna" },
      ],
      solution: {
        steps: [
          t`Anticodons are on tRNA.`,
          t`tRNA.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q5(3)" },
      stem: t`Amino acids in a polypeptide are joined by`,
      verify: { kind: "value", inputs: {  }, params: { q: "bond" } },
      options: [
        { key: "A", text: t`peptide bonds`, correct: true, value: "peptide" },
        { key: "B", text: t`hydrogen bonds`, correct: false, misconceptionId: "C07-M10", value: "hydrogen" },
        { key: "C", text: t`glycosidic bonds`, correct: false, misconceptionId: "C07-M11", value: "glycosidic" },
        { key: "D", text: t`phosphodiester bonds`, correct: false, misconceptionId: "C07-M12", value: "phosphodiester" },
      ],
      solution: {
        steps: [
          t`Amino acids are linked by peptide bonds.`,
          t`Peptide bonds.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q5(3)" },
      stem: t`Translation stops when the ribosome reaches`,
      verify: { kind: "value", inputs: {  }, params: { q: "stop" } },
      options: [
        { key: "A", text: t`an AUG codon`, correct: false, misconceptionId: "C07-M13", value: "aug" },
        { key: "B", text: t`the end of a tRNA`, correct: false, misconceptionId: "C07-M14", value: "trna_end" },
        { key: "C", text: t`an intron`, correct: false, misconceptionId: "C07-M15", value: "intron" },
        { key: "D", text: t`a stop codon`, correct: true, value: "stop_codon" },
      ],
      solution: {
        steps: [
          t`A stop codon has no tRNA.`,
          t`Translation stops there.`,
        ],
      },
    },
  ],
};
