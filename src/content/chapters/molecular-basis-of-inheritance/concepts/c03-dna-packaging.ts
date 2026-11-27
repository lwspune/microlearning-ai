import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`The DNA in one human cell would stretch about 2.2 metres, yet it fits in a nucleus a few micrometres wide. How?`,
    reveal: t`It is wound around histone proteins into nucleosomes, which coil and loop again and again.`,
  },
  explanation: {
    intuition: [
      t`Eukaryotic DNA is packed with **histone** proteins.`,
      t`Histones are positive (lysine, arginine); DNA is negative, so they cling.`,
      t`The basic unit of packing is the **nucleosome**.`,
    ],
    formal: [
      {
        title: "The nucleosome",
        points: [
          t`A histone octamer: two each of H2A, H2B, H3 and H4.`,
          t`About 146 base pairs of DNA wrap around it.`,
          t`**H1** binds the linker DNA between nucleosomes.`,
          t`Nucleosomes look like beads on a string.`,
        ],
      },
      {
        title: "Chromatin",
        points: [
          t`**Euchromatin**: loosely packed, lightly stained, actively transcribed.`,
          t`**Heterochromatin**: densely packed, darkly stained, inactive.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is heterochromatin rarely transcribed?`,
      steps: [
        t`Heterochromatin is densely packed.`,
        t`RNA polymerase can't reach the DNA easily.`,
      ],
      answer: t`It is too tightly packed`,
    },
    visualSpec: t`DNA winding around histone spools and coiling into a fibre.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Gives 200.",
      remediation: "About 200 bp includes the linker; the octamer holds 146.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Gives 54.",
      remediation: "That is roughly the linker length.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Gives 20.",
      remediation: "Far too few.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Includes H1.",
      remediation: "H1 is outside the core.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks H1 alone.",
      remediation: "The core has four kinds, two each.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks H1, H3, H4.",
      remediation: "The core is H2A, H2B, H3, H4.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Puts H1 in the core.",
      remediation: "H1 binds the linker.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says it's absent.",
      remediation: "H1 is present, on the linker.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Calls it DNA.",
      remediation: "H1 is a protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Calls them negative.",
      remediation: "DNA is negative; histones are positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Calls them neutral.",
      remediation: "Histones carry positive charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Calls them acidic.",
      remediation: "Histones are basic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks heterochromatin.",
      remediation: "Heterochromatin is dense and inactive.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks the centromere.",
      remediation: "The centromere joins chromatids.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks a nucleosome.",
      remediation: "A nucleosome is one packing unit.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2025 Q. 1(i)" },
      stem: t`The number of base pairs wrapped around one histone octamer of a nucleosome is about`,
      verify: { kind: "value", inputs: {  }, params: { q: "bp" } },
      options: [
        { key: "A", text: t`54`, correct: false, misconceptionId: "C03-M2", value: "54" },
        { key: "B", text: t`20`, correct: false, misconceptionId: "C03-M3", value: "20" },
        { key: "C", text: t`146`, correct: true, value: "146" },
        { key: "D", text: t`200`, correct: false, misconceptionId: "C03-M1", value: "200" },
      ],
      solution: {
        steps: [
          t`One nucleosome core holds about 146 bp.`,
          t`146.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(9)" },
      stem: t`The core histones of a nucleosome are`,
      verify: { kind: "value", inputs: {  }, params: { q: "core" } },
      options: [
        { key: "A", text: t`H1 alone`, correct: false, misconceptionId: "C03-M5", value: "h1_alone" },
        { key: "B", text: t`H1, H3 and H4`, correct: false, misconceptionId: "C03-M6", value: "h1_h3_h4" },
        { key: "C", text: t`H2A, H2B, H3 and H4`, correct: true, value: "h2a_h2b_h3_h4" },
        { key: "D", text: t`H1, H2A, H2B and H3`, correct: false, misconceptionId: "C03-M4", value: "h1_h2a_h2b_h3" },
      ],
      solution: {
        steps: [
          t`Two each of four histones.`,
          t`H2A, H2B, H3, H4.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2026 Q. 6" },
      stem: t`Histone H1`,
      verify: { kind: "value", inputs: {  }, params: { q: "h1" } },
      options: [
        { key: "A", text: t`is one of the core octamer`, correct: false, misconceptionId: "C03-M7", value: "in_core" },
        { key: "B", text: t`is absent from chromatin`, correct: false, misconceptionId: "C03-M8", value: "absent" },
        { key: "C", text: t`is itself DNA`, correct: false, misconceptionId: "C03-M9", value: "is_dna" },
        { key: "D", text: t`binds the linker DNA between nucleosomes`, correct: true, value: "linker" },
      ],
      solution: {
        steps: [
          t`H1 is outside the octamer.`,
          t`It binds the linker DNA.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q3(1)" },
      stem: t`Histones bind DNA tightly because histones are`,
      verify: { kind: "value", inputs: {  }, params: { q: "charge" } },
      options: [
        { key: "A", text: t`neutral`, correct: false, misconceptionId: "C03-M11", value: "neutral" },
        { key: "B", text: t`acidic`, correct: false, misconceptionId: "C03-M12", value: "acidic" },
        { key: "C", text: t`positively charged, rich in lysine and arginine`, correct: true, value: "positive" },
        { key: "D", text: t`negatively charged`, correct: false, misconceptionId: "C03-M10", value: "negative" },
      ],
      solution: {
        steps: [
          t`Lysine and arginine are basic.`,
          t`So histones are positive and grip negative DNA.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q3(1)" },
      stem: t`Loosely packed chromatin that is actively transcribed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "euchromatin" } },
      options: [
        { key: "A", text: t`euchromatin`, correct: true, value: "euchromatin" },
        { key: "B", text: t`heterochromatin`, correct: false, misconceptionId: "C03-M13", value: "heterochromatin" },
        { key: "C", text: t`the centromere`, correct: false, misconceptionId: "C03-M14", value: "centromere" },
        { key: "D", text: t`a single nucleosome`, correct: false, misconceptionId: "C03-M15", value: "nucleosome" },
      ],
      solution: {
        steps: [
          t`Loose, active chromatin.`,
          t`Euchromatin.`,
        ],
      },
    },
  ],
};
