import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Police find one drop of blood at a crime scene: too little DNA to test. How can they get enough?`,
    reveal: t`PCR: a machine copies the DNA again and again, doubling it each cycle, until there are billions of copies.`,
  },
  explanation: {
    intuition: [
      t`The **polymerase chain reaction** amplifies DNA **in vitro**.`,
      t`It needs the DNA, two primers, the four dNTPs and a heat-stable polymerase.`,
      t`A thermal cycler repeats three steps.`,
    ],
    formal: [
      {
        title: "One cycle",
        points: [
          t`**Denaturation**, 90–98 °C: the strands separate.`,
          t`**Annealing**, 40–60 °C: primers bind.`,
          t`**Extension**, about 72 °C: ***Taq* polymerase** (from *Thermus aquaticus*) builds new strands.`,
        ],
      },
      {
        title: "Doubling",
        points: [
          t`Each cycle doubles the DNA.`,
          t`After $n$ cycles: $2^n$ copies.`,
          t`About 30 cycles give a billion copies in a few hours.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many copies after 5 cycles, from one molecule?`,
      steps: [
        t`Each cycle doubles.`,
        t`$2^5 = 32$.`,
      ],
      answer: t`32`,
    },
    visualSpec: t`A graph of DNA copies doubling cycle by cycle, with the three temperatures of one cycle beside it.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks chromatography.",
      remediation: "That separates mixtures.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks Southern blotting.",
      remediation: "That detects DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks electrophoresis.",
      remediation: "That separates DNA by size.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks denaturation.",
      remediation: "It needs 90–98 °C, which is reached.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks extension.",
      remediation: "Extension at 72 °C works.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says no step.",
      remediation: "Annealing needs below 70 °C.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Multiplies by 2.",
      remediation: "Copies double each cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Squares n.",
      remediation: "Copies double each cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Counts one cycle too few.",
      remediation: t`After 10 cycles, $2^{10}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Gives 40–60 °C.",
      remediation: "That is annealing.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Gives 72 °C.",
      remediation: "That is extension.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Gives 37 °C.",
      remediation: "That is body temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks ligase.",
      remediation: "Ligase joins fragments.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks a restriction enzyme.",
      remediation: "Those cut DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks human polymerase.",
      remediation: "It breaks down at 95 °C.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q1(3)" },
      stem: t`In vitro amplification of a DNA segment is`,
      verify: { kind: "value", inputs: {  }, params: { q: "amplify" } },
      options: [
        { key: "A", text: t`Southern blotting`, correct: false, misconceptionId: "C03-M2", value: "southern_blotting" },
        { key: "B", text: t`gel electrophoresis`, correct: false, misconceptionId: "C03-M3", value: "gel_electrophoresis" },
        { key: "C", text: t`the polymerase chain reaction`, correct: true, value: "pcr_t" },
        { key: "D", text: t`chromatography`, correct: false, misconceptionId: "C03-M1", value: "chromatography_t" },
      ],
      solution: {
        steps: [
          t`Copies DNA in a tube.`,
          t`PCR.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q3(2)" },
      stem: t`A PCR machine heats to 100 °C but cannot cool below 70 °C. Which step fails first?`,
      verify: { kind: "value", inputs: {  }, params: { q: "faulty" } },
      options: [
        { key: "A", text: t`Extension`, correct: false, misconceptionId: "C03-M5", value: "extension_s" },
        { key: "B", text: t`No step fails`, correct: false, misconceptionId: "C03-M6", value: "no_step" },
        { key: "C", text: t`Annealing of primers`, correct: true, value: "annealing_s" },
        { key: "D", text: t`Denaturation`, correct: false, misconceptionId: "C03-M4", value: "denaturation_s" },
      ],
      solution: {
        steps: [
          t`Annealing needs 40–60 °C.`,
          t`Annealing.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2024 Q. 19" },
      stem: t`Starting from one DNA molecule, how many copies does PCR give after 10 cycles?`,
      verify: { kind: "value", inputs: { n: "10" }, params: { q: "copies" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C03-M7", value: "20" },
        { key: "B", text: t`$100$`, correct: false, misconceptionId: "C03-M8", value: "100" },
        { key: "C", text: t`$512$`, correct: false, misconceptionId: "C03-M9", value: "512" },
        { key: "D", text: t`$1024$`, correct: true, value: "1024" },
      ],
      solution: {
        steps: [
          t`Doubling 10 times.`,
          t`$2^{10} = 1024$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(5)" },
      stem: t`In PCR, the two DNA strands are separated (denatured) at about`,
      verify: { kind: "value", inputs: {  }, params: { q: "denature" } },
      options: [
        { key: "A", text: t`72 °C`, correct: false, misconceptionId: "C03-M11", value: "t72" },
        { key: "B", text: t`37 °C`, correct: false, misconceptionId: "C03-M12", value: "t37" },
        { key: "C", text: t`90–98 °C`, correct: true, value: "t90_98" },
        { key: "D", text: t`40–60 °C`, correct: false, misconceptionId: "C03-M10", value: "t40_60" },
      ],
      solution: {
        steps: [
          t`Strands separate.`,
          t`90–98 °C.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2024 Q. 19" },
      stem: t`The enzyme that extends the primers in PCR, stable at high temperature, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "taq" } },
      options: [
        { key: "A", text: t`*Taq* polymerase`, correct: true, value: "taq_polymerase" },
        { key: "B", text: t`DNA ligase`, correct: false, misconceptionId: "C03-M13", value: "dna_ligase" },
        { key: "C", text: t`a restriction enzyme`, correct: false, misconceptionId: "C03-M14", value: "restriction_enzymes" },
        { key: "D", text: t`human DNA polymerase`, correct: false, misconceptionId: "C03-M15", value: "human_polymerase" },
      ],
      solution: {
        steps: [
          t`From a hot-spring bacterium.`,
          t`*Taq* polymerase.`,
        ],
      },
    },
  ],
};
