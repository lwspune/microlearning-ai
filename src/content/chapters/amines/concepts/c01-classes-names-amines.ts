import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`tert-Butyl alcohol is a tertiary alcohol, but tert-butylamine is a primary amine. Both have the same carbon skeleton. Why the different labels?`,
    reveal: t`Alcohols are classified by the carbon that carries OH; amines by how many carbon groups sit on the nitrogen. tert-Butylamine's N has only one.`,
  },
  explanation: {
    intuition: [
      t`An **amine** is ammonia with one or more H atoms replaced by carbon groups.`,
      t`One carbon group on N: **primary**, $\ce{RNH2}$; two: **secondary**, $\ce{R2NH}$; three: **tertiary**, $\ce{R3N}$.`,
      t`Four carbon groups and a positive charge: a **quaternary ammonium** salt, $\ce{R4N+X-}$.`,
      t`Nitrogen is $sp^3$: three bonds and a lone pair, so amines are pyramidal.`,
    ],
    formal: [
      {
        title: "Classifying amines",
        points: [
          t`Count the carbon groups on N, not the substituents on the carbon.`,
          t`Aliphatic amines have alkyl groups on N; aromatic amines (arylamines) have N on the ring, as in aniline.`,
          t`Aryl groups count as carbon groups: diphenylamine, $\ce{(C6H5)2NH}$, is secondary.`,
        ],
      },
      {
        title: "Naming amines",
        points: [
          t`IUPAC: replace the alkane's $-e$ by $-amine$: $\ce{CH3CH2NH2}$ is ethanamine.`,
          t`The longest chain on N is the parent; other groups on N get the prefix N-, alphabetically.`,
          t`$\ce{CH3CH2N(CH3)CH2CH2CH3}$ is N-ethyl-N-methylpropan-1-amine.`,
          t`$\ce{C6H5NH2}$ is aniline (benzenamine); $\ce{C6H5CH2NH2}$ is benzylamine (phenylmethanamine).`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify and name $\ce{(CH3)2N-CH2CH3}$.`,
      steps: [
        t`N carries three carbon groups: a tertiary amine.`,
        t`Parent: ethanamine; two methyls on N.`,
      ],
      answer: t`Tertiary; N,N-dimethylethanamine`,
    },
    visualSpec: t`Replace the hydrogens on an ammonia molecule one by one with carbon groups and watch the class change.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Counts only N's three bonds and calls it $sp^2$.`,
      remediation: t`The lone pair is a fourth electron pair, so N is $sp^3$ and the amine pyramidal.`,
      fallback: { kind: "ext", topic: "hybridisation (Std XI Chemistry)" },
    },
    {
      id: "C01-M2",
      mistake: t`Counts five electron pairs around N, calling it $sp^3d$.`,
      remediation: t`N has three bond pairs and one lone pair: four pairs, $sp^3$.`,
      fallback: { kind: "ext", topic: "hybridisation (Std XI Chemistry)" },
    },
    {
      id: "C01-M3",
      mistake: t`Thinks the lone pair makes N $sp$.`,
      remediation: t`Four electron pairs in all (three bonds, one lone pair) need $sp^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Classifies an amine by the carbon carrying N, as for alcohols.",
      remediation: "Amines are classified by the number of carbon groups bonded to N.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks four carbons around nitrogen, or a ring, make it quaternary.",
      remediation: "A quaternary ammonium ion has four carbon groups on N itself and a positive charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Counts only alkyl groups on N, ignoring aryl groups.",
      remediation: t`Aryl groups count too: $\ce{C6H5N(CH3)2}$ is tertiary.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks the wrong parent chain.",
      remediation: "The longest carbon group on N is the parent alkanamine.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Does not list the N- prefixes alphabetically.",
      remediation: "Prefixes go in alphabetical order: N-ethyl before N-methyl.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Gives the common name when the IUPAC name is asked.",
      remediation: "IUPAC names end in -amine or use aniline with N- prefixes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Puts the N-substituent on the ring.",
      remediation: "In N-methylaniline the methyl is on N; 4-methylaniline has it on the ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Confuses aniline with benzylamine.",
      remediation: t`Aniline has N on the ring; benzylamine has N on a $\ce{CH2}$ next to the ring.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (i)" },
      stem: t`What is the hybridisation of nitrogen in a primary amine, $\ce{R-NH2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "hybrid" } },
      options: [
        { key: "A", text: t`$sp^3d$`, correct: false, misconceptionId: "C01-M2", value: "sp3d" },
        { key: "B", text: t`$sp^2$`, correct: false, misconceptionId: "C01-M1", value: "sp2" },
        { key: "C", text: t`$sp$`, correct: false, misconceptionId: "C01-M3", value: "sp" },
        { key: "D", text: t`$sp^3$`, correct: true, value: "sp3" },
      ],
      solution: {
        steps: [
          t`N has three bonds and one lone pair: four electron pairs.`,
          t`So N is $sp^3$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (ii)" },
      stem: t`tert-Butylamine, $\ce{(CH3)3C-NH2}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tert" } },
      options: [
        { key: "A", text: t`a primary amine: N carries one carbon group`, correct: true, value: "primary" },
        { key: "B", text: t`a tertiary amine: N sits on a tertiary carbon`, correct: false, misconceptionId: "C01-M4", value: "tertiary" },
        { key: "C", text: t`a quaternary ammonium compound`, correct: false, misconceptionId: "C01-M5", value: "quaternary" },
        { key: "D", text: t`a secondary amine`, correct: false, misconceptionId: "C01-M6", value: "secondary" },
      ],
      solution: {
        steps: [
          t`Count carbon groups on N: only the tert-butyl group.`,
          t`So it is a primary amine.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#18" },
      stem: t`Which of these is a secondary amine?`,
      verify: { kind: "value", inputs: {  }, params: { q: "secondary" } },
      options: [
        { key: "A", text: t`N,N-dimethylaniline, $\ce{C6H5N(CH3)2}$`, correct: false, misconceptionId: "C01-M6", value: "dimethylaniline" },
        { key: "B", text: t`diphenylamine, $\ce{(C6H5)2NH}$`, correct: true, value: "diphenylamine" },
        { key: "C", text: t`cyclohexylamine, $\ce{C6H11NH2}$`, correct: false, misconceptionId: "C01-M5", value: "cyclohexylamine" },
        { key: "D", text: t`isopropylamine, $\ce{(CH3)2CH-NH2}$`, correct: false, misconceptionId: "C01-M4", value: "isopropylamine" },
      ],
      solution: {
        steps: [
          t`Diphenylamine's N carries two phenyl groups.`,
          t`Two carbon groups on N: secondary.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.4 (i)" },
      stem: t`The IUPAC name of $\ce{CH3CH2-N(CH3)-CH2CH2CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "name" } },
      options: [
        { key: "A", text: t`N-methyl-N-ethylpropan-1-amine`, correct: false, misconceptionId: "C01-M8", value: "n_methyl_n_ethylpropan_1_amine" },
        { key: "B", text: t`N-methyl-N-propylethanamine`, correct: false, misconceptionId: "C01-M7", value: "n_methyl_n_propylethanamine" },
        { key: "C", text: t`N-ethyl-N-methylpropan-1-amine`, correct: true, value: "n_ethyl_n_methylpropan_1_amine" },
        { key: "D", text: t`ethylmethylpropylamine`, correct: false, misconceptionId: "C01-M9", value: "ethylmethylpropylamine" },
      ],
      solution: {
        steps: [
          t`The longest group on N, propyl, is the parent: propan-1-amine.`,
          t`Ethyl and methyl on N, alphabetically: N-ethyl-N-methyl.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#16" },
      stem: t`The IUPAC name of methylphenylamine, $\ce{C6H5-NH-CH3}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "aniline" } },
      options: [
        { key: "A", text: t`methylphenylamine`, correct: false, misconceptionId: "C01-M9", value: "methylphenylamine_common" },
        { key: "B", text: t`4-methylaniline`, correct: false, misconceptionId: "C01-M10", value: "methylaniline_4" },
        { key: "C", text: t`phenylmethanamine`, correct: false, misconceptionId: "C01-M11", value: "phenylmethanamine" },
        { key: "D", text: t`N-methylaniline (N-methylbenzenamine)`, correct: true, value: "n_methylaniline" },
      ],
      solution: {
        steps: [
          t`The parent is aniline; the methyl is on N.`,
          t`So N-methylaniline.`,
        ],
      },
    },
  ],
};
