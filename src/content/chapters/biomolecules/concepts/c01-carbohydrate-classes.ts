import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Table sugar, the starch in rice and the cellulose in cotton are all carbohydrates. One dissolves and tastes sweet; the others do neither. What puts them in one family?`,
    reveal: t`All are built from simple sugar units. They differ in how many units are joined: one, a few, or thousands.`,
  },
  explanation: {
    intuition: [
      t`Carbohydrates are polyhydroxy aldehydes or ketones, or compounds that give them on hydrolysis.`,
      t`**Monosaccharides** cannot be hydrolysed further: glucose, fructose.`,
      t`**Oligosaccharides** give 2–10 units: sucrose and maltose are disaccharides.`,
      t`**Polysaccharides** give many units: starch, cellulose, glycogen.`,
    ],
    formal: [
      {
        title: "Naming monosaccharides",
        points: [
          t`An **aldose** has a CHO group; a **ketose** has a C=O inside the chain.`,
          t`Count all the carbons: triose, tetrose, pentose, hexose, heptose.`,
          t`Glucose is an aldohexose; fructose is a ketohexose.`,
        ],
      },
      {
        title: "Reducing sugars",
        points: [
          t`Sugars with a free or ring-openable carbonyl reduce Tollens' and Fehling's reagents.`,
          t`All monosaccharides, maltose and lactose are reducing sugars.`,
          t`Sucrose is nonreducing.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify ribose, $\ce{CHO-(CHOH)3-CH2OH}$.`,
      steps: [
        t`It has a CHO group: an aldose.`,
        t`Carbons: 1 + 3 + 1 = 5, a pentose.`,
      ],
      answer: t`An aldopentose`,
    },
    visualSpec: t`Sort sugars into a tree: by number of units, then by aldose or ketose and carbon count.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Misses a terminal $\ce{CH2OH}$ when counting carbons.`,
      remediation: t`Count every carbon, both $\ce{CH2OH}$ ends included.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks every sugar carbonyl is an aldehyde.",
      remediation: "A C=O inside the chain is a ketone, so the sugar is a ketose.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Counts only the CHOH groups.",
      remediation: t`The name counts all carbons: CHOH, C=O and $\ce{CH2OH}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Leaves out the carbonyl carbon when counting.",
      remediation: "The C=O carbon is part of the chain: fructose has six.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks a sugar with many OH groups is an oligosaccharide.",
      remediation: "Oligo- and poly- count sugar units, not OH groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks glucose's ring form cannot reduce.",
      remediation: "The ring opens in solution to give a free CHO, so glucose reduces.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks ketoses never reduce Tollens' reagent.",
      remediation: "In alkaline solution fructose reduces Tollens' reagent; it is a reducing sugar.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks all disaccharides are nonreducing.",
      remediation: "Maltose and lactose keep a free anomeric carbon and reduce; sucrose does not.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks oligo- means many.",
      remediation: "Oligosaccharides give 2–10 units; many units make a polysaccharide.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks starch is a disaccharide.",
      remediation: "Starch gives hundreds of glucose units: a polysaccharide.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks starch cannot be hydrolysed.",
      remediation: "Acid or enzymes hydrolyse starch to glucose.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks mono- refers to one OH group.",
      remediation: "Mono- means one sugar unit: it cannot be hydrolysed further.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks mono- refers to one carbon atom.",
      remediation: "Monosaccharides have three to seven carbons; mono- means one unit.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Defines monosaccharides by taste.",
      remediation: "The definition is about hydrolysis, not sweetness.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.1 (i)" },
      stem: t`$\ce{CH2OH-CO-(CHOH)4-CH2OH}$ is an example of`,
      verify: { kind: "value", inputs: {  }, params: { q: "heptose" } },
      options: [
        { key: "A", text: t`a ketotetrose`, correct: false, misconceptionId: "C01-M3", value: "ketotetrose" },
        { key: "B", text: t`a ketohexose`, correct: false, misconceptionId: "C01-M1", value: "ketohexose" },
        { key: "C", text: t`an aldoheptose`, correct: false, misconceptionId: "C01-M2", value: "aldoheptose" },
        { key: "D", text: t`a ketoheptose`, correct: true, value: "ketoheptose" },
      ],
      solution: {
        steps: [
          t`The C=O is inside the chain: a ketose.`,
          t`Carbons: 1 + 1 + 4 + 1 = 7, a heptose.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`Fructose, $\ce{C6H12O6}$, has its carbonyl group on C-2. Fructose is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fructose" } },
      options: [
        { key: "A", text: t`a ketohexose`, correct: true, value: "ketohexose" },
        { key: "B", text: t`an aldohexose`, correct: false, misconceptionId: "C01-M2", value: "aldohexose" },
        { key: "C", text: t`a ketopentose`, correct: false, misconceptionId: "C01-M4", value: "ketopentose" },
        { key: "D", text: t`an oligosaccharide`, correct: false, misconceptionId: "C01-M5", value: "oligosaccharide" },
      ],
      solution: {
        steps: [
          t`The C=O on C-2 is a ketone.`,
          t`Six carbons: a ketohexose.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#3" },
      stem: t`Which of these is a nonreducing sugar?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nonreducing" } },
      options: [
        { key: "A", text: t`fructose`, correct: false, misconceptionId: "C01-M7", value: "fructose" },
        { key: "B", text: t`sucrose`, correct: true, value: "sucrose" },
        { key: "C", text: t`maltose`, correct: false, misconceptionId: "C01-M8", value: "maltose" },
        { key: "D", text: t`glucose`, correct: false, misconceptionId: "C01-M6", value: "glucose" },
      ],
      solution: {
        steps: [
          t`Sucrose has no free anomeric carbon.`,
          t`It cannot reduce Tollens' reagent.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`Starch gives hundreds of glucose units on hydrolysis. Starch is`,
      verify: { kind: "value", inputs: {  }, params: { q: "starch" } },
      options: [
        { key: "A", text: t`a disaccharide`, correct: false, misconceptionId: "C01-M10", value: "disaccharide" },
        { key: "B", text: t`an oligosaccharide`, correct: false, misconceptionId: "C01-M9", value: "oligosaccharide" },
        { key: "C", text: t`a polysaccharide`, correct: true, value: "polysaccharide" },
        { key: "D", text: t`a monosaccharide`, correct: false, misconceptionId: "C01-M11", value: "monosaccharide" },
      ],
      solution: {
        steps: [
          t`Hundreds of units on hydrolysis.`,
          t`So starch is a polysaccharide.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`Monosaccharides are carbohydrates that`,
      verify: { kind: "value", inputs: {  }, params: { q: "mono" } },
      options: [
        { key: "A", text: t`taste sweet`, correct: false, misconceptionId: "C01-M14", value: "sweet" },
        { key: "B", text: t`have only one OH group`, correct: false, misconceptionId: "C01-M12", value: "one_oh" },
        { key: "C", text: t`have only one carbon atom`, correct: false, misconceptionId: "C01-M13", value: "one_carbon" },
        { key: "D", text: t`cannot be hydrolysed into simpler carbohydrates`, correct: true, value: "not_hydrolysable" },
      ],
      solution: {
        steps: [
          t`Mono- means one sugar unit.`,
          t`It cannot be hydrolysed to simpler carbohydrates.`,
        ],
      },
    },
  ],
};
