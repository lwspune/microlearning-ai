import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Millions of sperms are deposited, yet only one fertilizes the egg. How are the rest kept out?`,
    reveal: t`Once one sperm enters, the cortical reaction changes the egg's coverings and blocks all others.`,
  },
  explanation: {
    intuition: [
      t`**Fertilization** is the fusion of a haploid sperm and ovum into a diploid **zygote**.`,
      t`In humans it is internal, in the **ampulla** of the oviduct.`,
      t`The two pronuclei fuse, so the zygote has **one** nucleus.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`**Capacitation**: sperms become able to fertilize after hours in the female tract.`,
          t`**Acrosome reaction**: lytic enzymes dissolve the corona radiata and zona pellucida.`,
          t`The sperm enters; the egg finishes meiosis II.`,
          t`**Cortical reaction**: the egg's membrane becomes a fertilization membrane and the zona's sperm receptors are switched off.`,
          t`The pronuclei fuse: a diploid zygote.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does the ovum complete meiosis II only at fertilization?`,
      steps: [
        t`It is released as a secondary oocyte.`,
        t`Sperm entry triggers meiosis II.`,
      ],
      answer: t`Sperm entry triggers it`,
    },
    visualSpec: t`A sperm's head entering the egg and the zona hardening behind it.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Counts two nuclei.",
      remediation: "The two pronuclei fuse into one.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Counts four.",
      remediation: "The zygote is one cell with one nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Counts eight.",
      remediation: "One nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks the uterus.",
      remediation: "The uterus is where the embryo implants.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks the isthmus.",
      remediation: "Fertilization is in the ampulla.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks the vagina.",
      remediation: "Semen is deposited there; fertilization is in the oviduct.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks spermiation.",
      remediation: "Spermiation releases sperms in the testis.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks the acrosome reaction.",
      remediation: "That comes later, at the egg.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks implantation.",
      remediation: "Implantation is about day 7.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Credits mitochondria alone.",
      remediation: "Energy moves the sperm; enzymes get it through.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Credits the tail alone.",
      remediation: "Swimming alone can't cross the zona.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Credits the egg's pull.",
      remediation: "The sperm's acrosome enzymes do the work.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks the acrosome reaction.",
      remediation: "That lets the sperm in; the cortical reaction keeps others out.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks capacitation.",
      remediation: "Capacitation readies sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks cleavage.",
      remediation: "Cleavage follows fertilization.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(1)" },
      stem: t`The number of nuclei in a zygote is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nuclei" } },
      options: [
        { key: "A", text: t`four`, correct: false, misconceptionId: "C07-M2", value: "4" },
        { key: "B", text: t`eight`, correct: false, misconceptionId: "C07-M3", value: "8" },
        { key: "C", text: t`one`, correct: true, value: "1" },
        { key: "D", text: t`two`, correct: false, misconceptionId: "C07-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`The male and female pronuclei fuse.`,
          t`One nucleus.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q2(5)" },
      stem: t`In humans, fertilization takes place in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "site" } },
      options: [
        { key: "A", text: t`uterus`, correct: false, misconceptionId: "C07-M4", value: "uterus" },
        { key: "B", text: t`isthmus of the fallopian tube`, correct: false, misconceptionId: "C07-M5", value: "isthmus" },
        { key: "C", text: t`vagina`, correct: false, misconceptionId: "C07-M6", value: "vagina" },
        { key: "D", text: t`ampulla of the fallopian tube`, correct: true, value: "ampulla" },
      ],
      solution: {
        steps: [
          t`The ampulla is the middle part of the oviduct.`,
          t`Fertilization happens there.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(10)" },
      stem: t`Sperms become able to fertilize only after some hours in the female tract. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "capacitation" } },
      options: [
        { key: "A", text: t`implantation`, correct: false, misconceptionId: "C07-M9", value: "implantation" },
        { key: "B", text: t`capacitation`, correct: true, value: "capacitation" },
        { key: "C", text: t`spermiation`, correct: false, misconceptionId: "C07-M7", value: "spermiation" },
        { key: "D", text: t`the acrosome reaction`, correct: false, misconceptionId: "C07-M8", value: "acrosome_reaction" },
      ],
      solution: {
        steps: [
          t`Sperms are activated in the female tract.`,
          t`Capacitation.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q6(3)" },
      stem: t`A sperm gets through the corona radiata and zona pellucida using`,
      verify: { kind: "value", inputs: {  }, params: { q: "acrosome_reaction" } },
      options: [
        { key: "A", text: t`lytic enzymes released by the acrosome`, correct: true, value: "lytic_enzymes" },
        { key: "B", text: t`energy from its mitochondria alone`, correct: false, misconceptionId: "C07-M10", value: "mitochondria_energy" },
        { key: "C", text: t`the beating of its tail alone`, correct: false, misconceptionId: "C07-M11", value: "tail_beats" },
        { key: "D", text: t`an attraction from the egg alone`, correct: false, misconceptionId: "C07-M12", value: "egg_attracts" },
      ],
      solution: {
        steps: [
          t`The acrosome releases lytic enzymes.`,
          t`They dissolve the egg's coverings.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q6(3)" },
      stem: t`Entry of more than one sperm into the egg is prevented by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "polyspermy" } },
      options: [
        { key: "A", text: t`acrosome reaction`, correct: false, misconceptionId: "C07-M13", value: "acrosome_reaction" },
        { key: "B", text: t`capacitation`, correct: false, misconceptionId: "C07-M14", value: "capacitation" },
        { key: "C", text: t`cleavage`, correct: false, misconceptionId: "C07-M15", value: "cleavage" },
        { key: "D", text: t`cortical reaction`, correct: true, value: "cortical_reaction" },
      ],
      solution: {
        steps: [
          t`After one sperm enters, the egg's coverings change.`,
          t`The cortical reaction.`,
        ],
      },
    },
  ],
};
