import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A DNA sample is 20% adenine. Can you work out its cytosine without measuring it?`,
    reveal: t`Yes: adenine pairs with thymine and guanine with cytosine, so thymine is 20%, leaving 60% for G and C: cytosine 30%.`,
  },
  explanation: {
    intuition: [
      t`DNA and RNA are polymers of **nucleotides**: a sugar, a phosphate and a base.`,
      t`DNA is a **double helix** (Watson and Crick, 1953).`,
      t`Its bases pair: A with T, G with C.`,
    ],
    formal: [
      {
        title: "DNA",
        points: [
          t`The two strands are **antiparallel**: one $5' \to 3'$, the other $3' \to 5'$.`,
          t`A–T pairs have two hydrogen bonds; G–C pairs have three.`,
          t`So A = T and G = C in amount (Chargaff's rule).`,
          t`The sugar is deoxyribose.`,
        ],
      },
      {
        title: "RNA",
        points: [
          t`Usually single-stranded, with ribose sugar.`,
          t`Uracil replaces thymine and pairs with adenine.`,
          t`Three kinds: mRNA, tRNA and rRNA.`,
        ],
      },
    ],
    worked: {
      prompt: t`A DNA sample has 18% guanine. What is its adenine content?`,
      steps: [
        t`G = C = 18%, so G + C = 36%.`,
        t`A + T = 64%, so A = 32%.`,
      ],
      answer: t`32%`,
    },
    visualSpec: t`A twisting ladder whose rungs are A–T and G–C pairs.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks guanine.",
      remediation: "Guanine is in both DNA and RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks cytosine.",
      remediation: "Cytosine is in both.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks adenine.",
      remediation: "Adenine is in both; uracil replaces thymine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks guanine.",
      remediation: "Adenine pairs with thymine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks cytosine.",
      remediation: "Cytosine pairs with guanine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Gives three bonds.",
      remediation: "A–T has two hydrogen bonds; G–C has three.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Sets C equal to A.",
      remediation: "C equals G, not A.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Gives G + C.",
      remediation: "G + C is 60%; C alone is half.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Gives all but A.",
      remediation: "Subtract A and T, then halve.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Calls them parallel.",
      remediation: "They run in opposite directions.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Calls them random.",
      remediation: "The directions are fixed and opposite.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Puts them end to end.",
      remediation: "They lie side by side.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says both double.",
      remediation: "RNA is usually single.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says both single.",
      remediation: "DNA is double.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Reverses them.",
      remediation: "DNA is the double helix.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(7)" },
      stem: t`In RNA, which base takes the place of thymine?`,
      verify: { kind: "value", inputs: {  }, params: { q: "uracil" } },
      options: [
        { key: "A", text: t`uracil`, correct: true, value: "uracil" },
        { key: "B", text: t`guanine`, correct: false, misconceptionId: "C02-M1", value: "guanine" },
        { key: "C", text: t`cytosine`, correct: false, misconceptionId: "C02-M2", value: "cytosine" },
        { key: "D", text: t`adenine`, correct: false, misconceptionId: "C02-M3", value: "adenine" },
      ],
      solution: {
        steps: [
          t`RNA has uracil instead of thymine.`,
          t`Uracil.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`In DNA, adenine pairs with`,
      verify: { kind: "value", inputs: {  }, params: { q: "pairing" } },
      options: [
        { key: "A", text: t`guanine`, correct: false, misconceptionId: "C02-M4", value: "guanine" },
        { key: "B", text: t`cytosine`, correct: false, misconceptionId: "C02-M5", value: "cytosine" },
        { key: "C", text: t`thymine, by three hydrogen bonds`, correct: false, misconceptionId: "C02-M6", value: "thymine_three" },
        { key: "D", text: t`thymine, by two hydrogen bonds`, correct: true, value: "thymine_two" },
      ],
      solution: {
        steps: [
          t`A pairs with T.`,
          t`By two hydrogen bonds.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`A DNA sample has 20% adenine. What percentage of its bases is cytosine?`,
      verify: { kind: "value", inputs: { a: "20" }, params: { q: "chargaff" } },
      options: [
        { key: "A", text: t`$80\%$`, correct: false, misconceptionId: "C02-M9", value: "80" },
        { key: "B", text: t`$30\%$`, correct: true, value: "30" },
        { key: "C", text: t`$20\%$`, correct: false, misconceptionId: "C02-M7", value: "20" },
        { key: "D", text: t`$60\%$`, correct: false, misconceptionId: "C02-M8", value: "60" },
      ],
      solution: {
        steps: [
          t`A = T = 20%, so G + C = 60%.`,
          t`C = 30%.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`The two strands of a DNA double helix run`,
      verify: { kind: "value", inputs: {  }, params: { q: "antiparallel" } },
      options: [
        { key: "A", text: t`end to end in one line`, correct: false, misconceptionId: "C02-M12", value: "end_to_end" },
        { key: "B", text: t`antiparallel: one $5' \to 3'$, the other $3' \to 5'$`, correct: true, value: "antiparallel" },
        { key: "C", text: t`parallel, in the same direction`, correct: false, misconceptionId: "C02-M10", value: "parallel" },
        { key: "D", text: t`in random directions`, correct: false, misconceptionId: "C02-M11", value: "random_direction" },
      ],
      solution: {
        steps: [
          t`One strand runs 5′→3′, the other 3′→5′.`,
          t`Antiparallel.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q5(5)" },
      stem: t`Which is true of DNA and RNA?`,
      verify: { kind: "value", inputs: {  }, params: { q: "strands" } },
      options: [
        { key: "A", text: t`DNA is single-stranded, RNA double-stranded`, correct: false, misconceptionId: "C02-M15", value: "dna_single_rna_double" },
        { key: "B", text: t`DNA is double-stranded, RNA usually single-stranded`, correct: true, value: "dna_double_rna_single" },
        { key: "C", text: t`both are double-stranded`, correct: false, misconceptionId: "C02-M13", value: "both_double" },
        { key: "D", text: t`both are single-stranded`, correct: false, misconceptionId: "C02-M14", value: "both_single" },
      ],
      solution: {
        steps: [
          t`DNA is a double helix.`,
          t`RNA is usually single-stranded.`,
        ],
      },
    },
  ],
};
