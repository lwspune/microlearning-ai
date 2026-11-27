import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Identical twins share their DNA, but any two other people can be told apart from a drop of blood. What differs?`,
    reveal: t`The number of repeats in certain DNA regions, VNTRs, differs from person to person.`,
  },
  explanation: {
    intuition: [
      t`**DNA fingerprinting** identifies people from their DNA.`,
      t`Its key: **VNTRs**, short sequences repeated a different number of times in each person.`,
      t`It was developed by Alec Jeffreys.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`Isolate the DNA.`,
          t`Cut it with **restriction endonucleases**, the molecular scissors.`,
          t`Separate the fragments by **gel electrophoresis**.`,
          t`Transfer them to a membrane: **Southern blotting**.`,
          t`Hybridize with a labelled probe and read the bands.`,
        ],
      },
      {
        title: "Uses",
        points: [
          t`**PCR** makes many copies from a tiny sample.`,
          t`Forensics, paternity disputes, and identifying remains.`,
        ],
      },
    ],
    worked: {
      prompt: t`A child's DNA bands match half of the mother's and half of one man's. What does this suggest?`,
      steps: [
        t`A child inherits half its DNA from each parent.`,
        t`The man is likely the father.`,
      ],
      answer: t`He is likely the father`,
    },
    visualSpec: t`A gel with banded lanes for suspects and a crime-scene sample.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Picks ligases.",
      remediation: "Ligases join DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Picks polymerases.",
      remediation: "Polymerases build DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Picks transcriptase.",
      remediation: "Transcriptase makes RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Picks exons.",
      remediation: "Exons code proteins; VNTRs vary.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Picks codons.",
      remediation: "Codons are shared.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Picks histones.",
      remediation: "Histones are proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Digests first.",
      remediation: "DNA must be isolated first.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Runs the gel before digesting.",
      remediation: "Cut first, then separate.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Reverses it.",
      remediation: "Isolate, digest, separate, blot.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Picks electrophoresis.",
      remediation: "Electrophoresis separates fragments.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Picks PCR.",
      remediation: "PCR copies DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Picks hybridization.",
      remediation: "Hybridization adds the probe.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Says it cuts DNA.",
      remediation: "Restriction enzymes cut.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Says it separates.",
      remediation: "Electrophoresis separates.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Says it joins.",
      remediation: "Ligase joins.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(2)" },
      stem: t`The molecular knives of DNA are`,
      verify: { kind: "value", inputs: {  }, params: { q: "knives" } },
      options: [
        { key: "A", text: t`ligases`, correct: false, misconceptionId: "C10-M1", value: "ligases" },
        { key: "B", text: t`polymerases`, correct: false, misconceptionId: "C10-M2", value: "polymerases" },
        { key: "C", text: t`transcriptase`, correct: false, misconceptionId: "C10-M3", value: "transcriptase" },
        { key: "D", text: t`restriction endonucleases`, correct: true, value: "endonucleases" },
      ],
      solution: {
        steps: [
          t`They cut DNA at specific sites.`,
          t`Restriction endonucleases.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2026 Q. 2(vi)" },
      stem: t`The key factor in DNA profiling is`,
      verify: { kind: "value", inputs: {  }, params: { q: "vntr" } },
      options: [
        { key: "A", text: t`VNTRs (variable number tandem repeats)`, correct: true, value: "vntrs" },
        { key: "B", text: t`exons`, correct: false, misconceptionId: "C10-M4", value: "exons" },
        { key: "C", text: t`codons`, correct: false, misconceptionId: "C10-M5", value: "codons" },
        { key: "D", text: t`histones`, correct: false, misconceptionId: "C10-M6", value: "histones" },
      ],
      solution: {
        steps: [
          t`Repeat numbers differ between people.`,
          t`VNTRs.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2024 Q. 4" },
      stem: t`The right order of steps in DNA fingerprinting is`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`blotting, electrophoresis, digestion, isolation`, correct: false, misconceptionId: "C10-M9", value: "blot_gel_digest_isolate" },
        { key: "B", text: t`isolate DNA, restriction digestion, gel electrophoresis, Southern blotting`, correct: true, value: "isolate_digest_gel_blot" },
        { key: "C", text: t`restriction digestion, isolate DNA, electrophoresis, blotting`, correct: false, misconceptionId: "C10-M7", value: "digest_isolate_gel_blot" },
        { key: "D", text: t`isolate DNA, electrophoresis, restriction digestion, blotting`, correct: false, misconceptionId: "C10-M8", value: "isolate_gel_digest_blot" },
      ],
      solution: {
        steps: [
          t`Isolate, digest, separate, blot.`,
          t`In that order.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(5)" },
      stem: t`Transferring DNA fragments from the gel to a nitrocellulose sheet is`,
      verify: { kind: "value", inputs: {  }, params: { q: "southern" } },
      options: [
        { key: "A", text: t`PCR`, correct: false, misconceptionId: "C10-M11", value: "pcr" },
        { key: "B", text: t`hybridization`, correct: false, misconceptionId: "C10-M12", value: "hybridization" },
        { key: "C", text: t`Southern blotting`, correct: true, value: "southern_blotting" },
        { key: "D", text: t`gel electrophoresis`, correct: false, misconceptionId: "C10-M10", value: "electrophoresis" },
      ],
      solution: {
        steps: [
          t`Fragments move from gel to membrane.`,
          t`Southern blotting.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(5)" },
      stem: t`In DNA fingerprinting, PCR is used to`,
      verify: { kind: "value", inputs: {  }, params: { q: "pcr" } },
      options: [
        { key: "A", text: t`make many copies of a small DNA sample`, correct: true, value: "amplify" },
        { key: "B", text: t`cut DNA`, correct: false, misconceptionId: "C10-M13", value: "cut" },
        { key: "C", text: t`separate DNA fragments`, correct: false, misconceptionId: "C10-M14", value: "separate" },
        { key: "D", text: t`join DNA fragments`, correct: false, misconceptionId: "C10-M15", value: "join" },
      ],
      solution: {
        steps: [
          t`PCR copies DNA many times.`,
          t`It amplifies small samples.`,
        ],
      },
    },
  ],
};
