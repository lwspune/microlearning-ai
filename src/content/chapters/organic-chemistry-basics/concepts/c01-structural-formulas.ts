import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Drawing every C and H of a long molecule is slow. Organic chemists draw a zig-zag line instead. How can a line show a whole molecule?`,
    reveal: t`In a bond-line formula every corner and end is a carbon, and hydrogens are understood to fill each carbon's four bonds.`,
  },
  explanation: {
    intuition: [
      t`One molecule can be written as a complete, condensed or bond-line formula.`,
      t`Complete formulas show every bond; condensed ones group atoms.`,
      t`Bond-line formulas show only the carbon skeleton and other atoms.`,
      t`Carbons are classed by how many other carbons they bond to.`,
    ],
    formal: [
      {
        title: "Formulas",
        points: [
          t`Complete: every atom and bond drawn.`,
          t`Condensed: $\ce{CH3CH2CH2CH3}$, $\ce{(CH3)3CH}$.`,
          t`Bond-line: corners and ends are C; H on C is not drawn.`,
        ],
      },
      {
        title: "Classifying carbons",
        points: [
          t`Primary (1°): bonded to one carbon; secondary (2°): two.`,
          t`Tertiary (3°): three; quaternary (4°): four.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify each carbon in propane, $\ce{CH3CH2CH3}$.`,
      steps: [
        t`End carbons bond to one carbon: primary.`,
        t`The middle carbon bonds to two: secondary.`,
      ],
      answer: t`Two 1° and one 2°`,
    },
    visualSpec: t`Convert a molecule between complete, condensed and bond-line formulas.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Counts only the methyl branches.",
      remediation: "C2 bonds to three methyls and C3: four carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks a carbon with no H is primary.",
      remediation: "Classify by attached carbons: four makes it quaternary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Counts only the chain neighbours.",
      remediation: "Branches are carbons too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Counts every carbon.",
      remediation: "The central carbon bonds to three others: tertiary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Counts the central carbon.",
      remediation: "Primary carbons are the three methyls.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Counts only the chain ends.",
      remediation: "All three methyls are primary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Takes corners for H atoms.",
      remediation: "Corners are carbons; H on C is not drawn.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Takes corners for bonds only.",
      remediation: "Each corner is a carbon atom.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Takes corners for O atoms.",
      remediation: "Heteroatoms are written in; corners are carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Writes butane.",
      remediation: "Butane is the straight chain; 2-methylpropane is branched.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Writes neopentane.",
      remediation: t`$\ce{(CH3)4C}$ has five carbons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Writes 2-methylbutane.",
      remediation: "That has five carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Leaves out the methyl groups.",
      remediation: "Hexadecane (16) + four methyls (4) = 20.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Uses the last locant.",
      remediation: "Locants give positions, not counts.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Counts tetramethyl as one carbon.",
      remediation: "Tetra means four methyl groups.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (I)" },
      stem: t`In 2,2-dimethylbutane, $\ce{(CH3)3C-CH2CH3}$, carbon 2 is`,
      verify: { kind: "value", inputs: {  }, params: { q: "classify" } },
      options: [
        { key: "A", text: t`secondary`, correct: false, misconceptionId: "C01-M3", value: "secondary" },
        { key: "B", text: t`tertiary`, correct: false, misconceptionId: "C01-M1", value: "tertiary" },
        { key: "C", text: t`primary`, correct: false, misconceptionId: "C01-M2", value: "primary" },
        { key: "D", text: t`quaternary`, correct: true, value: "quaternary" },
      ],
      solution: {
        steps: [
          t`C2 bonds to three methyl carbons and C3.`,
          t`Four carbons: quaternary.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (I)" },
      stem: t`How many primary carbon atoms does 2-methylpropane, $\ce{(CH3)3CH}$, have?`,
      verify: { kind: "value", inputs: {  }, params: { q: "primary_count" } },
      options: [
        { key: "A", text: t`3`, correct: true, value: "three" },
        { key: "B", text: t`4`, correct: false, misconceptionId: "C01-M4", value: "four" },
        { key: "C", text: t`1`, correct: false, misconceptionId: "C01-M5", value: "one" },
        { key: "D", text: t`2`, correct: false, misconceptionId: "C01-M6", value: "two" },
      ],
      solution: {
        steps: [
          t`Three methyl carbons each bond to one carbon.`,
          t`Three primary carbons.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (B)" },
      stem: t`In a bond-line formula, each corner and line end stands for`,
      verify: { kind: "value", inputs: {  }, params: { q: "bond_line" } },
      options: [
        { key: "A", text: t`a bond, with no atom`, correct: false, misconceptionId: "C01-M8", value: "bond_only" },
        { key: "B", text: t`a carbon atom carrying enough H atoms to make four bonds`, correct: true, value: "carbon_with_h" },
        { key: "C", text: t`an oxygen atom`, correct: false, misconceptionId: "C01-M9", value: "oxygen" },
        { key: "D", text: t`a hydrogen atom`, correct: false, misconceptionId: "C01-M7", value: "hydrogen" },
      ],
      solution: {
        steps: [
          t`Corners and ends are carbons.`,
          t`Hydrogens fill the remaining bonds.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (C)" },
      stem: t`The condensed formula of 2-methylpropane is`,
      verify: { kind: "value", inputs: {  }, params: { q: "condensed" } },
      options: [
        { key: "A", text: t`$\ce{(CH3)4C}$`, correct: false, misconceptionId: "C01-M11", value: "neopentane" },
        { key: "B", text: t`$\ce{CH3CH2CH2CH3}$`, correct: false, misconceptionId: "C01-M10", value: "butane" },
        { key: "C", text: t`$\ce{(CH3)3CH}$`, correct: true, value: "ch3_3_ch" },
        { key: "D", text: t`$\ce{CH3CH(CH3)CH2CH3}$`, correct: false, misconceptionId: "C01-M12", value: "methylbutane" },
      ],
      solution: {
        steps: [
          t`Three methyls on one CH.`,
          t`$\ce{(CH3)3CH}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.9" },
      stem: t`Phytane is 2,6,10,14-tetramethylhexadecane. How many carbon atoms does it have?`,
      verify: { kind: "value", inputs: {  }, params: { q: "phytane" } },
      options: [
        { key: "A", text: t`17`, correct: false, misconceptionId: "C01-M15", value: "seventeen" },
        { key: "B", text: t`16`, correct: false, misconceptionId: "C01-M13", value: "sixteen" },
        { key: "C", text: t`14`, correct: false, misconceptionId: "C01-M14", value: "fourteen" },
        { key: "D", text: t`20`, correct: true, value: "twenty" },
      ],
      solution: {
        steps: [
          t`Hexadecane: 16 carbons.`,
          t`Plus four methyls: 20.`,
        ],
      },
    },
  ],
};
