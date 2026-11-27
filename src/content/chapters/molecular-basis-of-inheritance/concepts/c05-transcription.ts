import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A gene stays in the nucleus, but proteins are made in the cytoplasm. How does the message get out?`,
    reveal: t`The gene is copied into mRNA, which leaves the nucleus: that copying is transcription.`,
  },
  explanation: {
    intuition: [
      t`**Transcription** copies DNA into RNA.`,
      t`**RNA polymerase** reads the **template strand**.`,
      t`It makes mRNA, tRNA and rRNA.`,
    ],
    formal: [
      {
        title: "The process",
        points: [
          t`A transcription unit: promoter, structural gene, terminator.`,
          t`Initiation: RNA polymerase binds the promoter.`,
          t`Elongation: RNA grows complementary to the template.`,
          t`Termination: at the terminator the RNA is released.`,
        ],
      },
      {
        title: "Processing in eukaryotes",
        points: [
          t`The first transcript is **hnRNA**, with exons and introns.`,
          t`**Capping**: a cap is added at the $5'$ end.`,
          t`**Tailing**: a poly-A tail is added at the $3'$ end.`,
          t`**Splicing**: introns are removed, exons joined: mRNA.`,
        ],
      },
    ],
    worked: {
      prompt: t`An hnRNA has four exons and three introns. After splicing, what does the mRNA hold?`,
      steps: [
        t`Splicing removes introns.`,
        t`The four exons are joined.`,
      ],
      answer: t`The four exons joined`,
    },
    visualSpec: t`RNA polymerase gliding along DNA, the new RNA peeling off behind it.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks DNA polymerase.",
      remediation: "DNA polymerase replicates DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks a restriction enzyme.",
      remediation: "Restriction enzymes cut DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks RNase.",
      remediation: "RNase breaks RNA down.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says tRNA to mRNA.",
      remediation: "Transcription starts from DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says mRNA to protein.",
      remediation: "That is translation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says mRNA to tRNA.",
      remediation: "Transcription starts from DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks capping.",
      remediation: "Capping adds to the 5′ end.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks tailing.",
      remediation: "Tailing adds poly-A.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks translation.",
      remediation: "Translation makes protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks capping.",
      remediation: "Capping is at the 5′ end.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks splicing.",
      remediation: "Splicing removes introns.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks replication.",
      remediation: "Replication copies DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks the coding strand.",
      remediation: "The coding strand matches the RNA; the template is read.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks both strands.",
      remediation: "Only the template is read.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks mRNA.",
      remediation: "mRNA is the product.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(4)" },
      stem: t`The enzyme needed for transcription is`,
      verify: { kind: "value", inputs: {  }, params: { q: "enzyme" } },
      options: [
        { key: "A", text: t`RNase`, correct: false, misconceptionId: "C05-M3", value: "rnase" },
        { key: "B", text: t`RNA polymerase`, correct: true, value: "rna_polymerase" },
        { key: "C", text: t`DNA polymerase`, correct: false, misconceptionId: "C05-M1", value: "dna_polymerase" },
        { key: "D", text: t`a restriction enzyme`, correct: false, misconceptionId: "C05-M2", value: "restriction_enzyme" },
      ],
      solution: {
        steps: [
          t`RNA is made by RNA polymerase.`,
          t`RNA polymerase.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(5)" },
      stem: t`Transcription is the transfer of genetic information from`,
      verify: { kind: "value", inputs: {  }, params: { q: "definition" } },
      options: [
        { key: "A", text: t`tRNA to mRNA`, correct: false, misconceptionId: "C05-M4", value: "trna_to_mrna" },
        { key: "B", text: t`mRNA to protein`, correct: false, misconceptionId: "C05-M5", value: "mrna_to_protein" },
        { key: "C", text: t`mRNA to tRNA`, correct: false, misconceptionId: "C05-M6", value: "mrna_to_trna" },
        { key: "D", text: t`DNA to RNA`, correct: true, value: "dna_to_rna" },
      ],
      solution: {
        steps: [
          t`Information goes DNA → RNA.`,
          t`DNA to RNA.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2024 Q. 15" },
      stem: t`Removing the introns from hnRNA is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "splicing" } },
      options: [
        { key: "A", text: t`splicing`, correct: true, value: "splicing" },
        { key: "B", text: t`capping`, correct: false, misconceptionId: "C05-M7", value: "capping" },
        { key: "C", text: t`tailing`, correct: false, misconceptionId: "C05-M8", value: "tailing" },
        { key: "D", text: t`translation`, correct: false, misconceptionId: "C05-M9", value: "translation" },
      ],
      solution: {
        steps: [
          t`Introns are cut out.`,
          t`Splicing.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2025 Q. 29" },
      stem: t`Adding a string of adenine nucleotides to the 3' end of hnRNA is`,
      verify: { kind: "value", inputs: {  }, params: { q: "polya" } },
      options: [
        { key: "A", text: t`splicing`, correct: false, misconceptionId: "C05-M11", value: "splicing" },
        { key: "B", text: t`replication`, correct: false, misconceptionId: "C05-M12", value: "replication" },
        { key: "C", text: t`tailing`, correct: true, value: "tailing" },
        { key: "D", text: t`capping`, correct: false, misconceptionId: "C05-M10", value: "capping" },
      ],
      solution: {
        steps: [
          t`A poly-A tail at the 3′ end.`,
          t`Tailing.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q5(2)" },
      stem: t`During transcription, RNA is copied from`,
      verify: { kind: "value", inputs: {  }, params: { q: "template" } },
      options: [
        { key: "A", text: t`the template strand of DNA`, correct: true, value: "template_strand" },
        { key: "B", text: t`the coding strand of DNA`, correct: false, misconceptionId: "C05-M13", value: "coding_strand" },
        { key: "C", text: t`both DNA strands`, correct: false, misconceptionId: "C05-M14", value: "both_strands" },
        { key: "D", text: t`mRNA`, correct: false, misconceptionId: "C05-M15", value: "mrna" },
      ],
      solution: {
        steps: [
          t`RNA polymerase reads one strand.`,
          t`The template strand.`,
        ],
      },
    },
  ],
};
