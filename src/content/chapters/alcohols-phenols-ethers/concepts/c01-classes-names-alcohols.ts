import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Ethanol, phenol and diethyl ether all contain an oxygen bonded to carbon. Yet one is a drink's alcohol, one an antiseptic acid and one an anaesthetic. How do chemists sort and name them?`,
    reveal: t`By what the oxygen is attached to: OH on an alkyl carbon makes an alcohol, OH on a benzene ring a phenol, and O between two carbon groups an ether.`,
  },
  explanation: {
    intuition: [
      t`An **alcohol** has an OH group on an $sp^3$ carbon: $\ce{R-OH}$.`,
      t`A **phenol** has the OH directly on a benzene ring: $\ce{Ar-OH}$.`,
      t`An **ether** has an oxygen joining two carbon groups: $\ce{R-O-R'}$.`,
      t`Alcohols are sorted by how many OH groups they carry, and by the carbon that holds the OH.`,
    ],
    formal: [
      {
        title: "Classifying alcohols",
        points: [
          t`By OH groups: **monohydric** (one), **dihydric** (two, ethane-1,2-diol), **trihydric** (three, glycerol).`,
          t`By the OH carbon: **primary** (bonded to one carbon), **secondary** (two), **tertiary** (three).`,
          t`$\ce{CH3CH2OH}$ is primary, $\ce{(CH3)2CHOH}$ secondary, $\ce{(CH3)3COH}$ tertiary.`,
          t`OH on a carbon next to a ring, as in benzyl alcohol $\ce{C6H5CH2OH}$, is still an alcohol (benzylic).`,
        ],
      },
      {
        title: "Naming alcohols",
        points: [
          t`Choose the longest chain that holds the OH carbon or carbons.`,
          t`Number it so the OH carbons get the lowest locants.`,
          t`Replace the alkane's final $-e$ by $-ol$: butan-2-ol.`,
          t`Two OH groups keep the $e$ and add $-diol$: butane-1,3-diol.`,
        ],
      },
      {
        title: "Naming ethers",
        points: [
          t`Ethers are named as **alkoxyalkanes**.`,
          t`The smaller group becomes the alkoxy prefix: $\ce{CH3O-}$ is methoxy.`,
          t`$\ce{CH3-O-CH2CH3}$ is methoxyethane; its common name is ethyl methyl ether.`,
          t`Aryl ethers: $\ce{C6H5-O-CH3}$ is methoxybenzene, or anisole.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify and name $\ce{(CH3)3C-OH}$.`,
      steps: [
        t`The OH carbon is bonded to three methyl carbons: a tertiary alcohol.`,
        t`The longest chain through the OH carbon has three carbons, with a methyl branch.`,
        t`Number to give the OH carbon locant 2: 2-methylpropan-2-ol.`,
      ],
      answer: t`A tertiary alcohol, 2-methylpropan-2-ol`,
    },
    visualSpec: t`Drag an OH group between an alkyl carbon, a ring carbon and the middle of a chain, and watch the class and name change.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes primary, secondary or tertiary from the number of OH groups.",
      remediation: "Primary, secondary and tertiary count the carbons bonded to the OH carbon; the number of OH groups gives mono-, di- or trihydric.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Counts every carbon in the molecule, for the class or the chain.",
      remediation: "Count only the carbons bonded to the OH carbon for the class, and only the longest chain through the OH carbons for the name.",
      fallback: { kind: "ext", topic: "IUPAC nomenclature (Std XI Chemistry)" },
    },
    {
      id: "C01-M3",
      mistake: "Numbers the chain from the end that gives the OH a higher locant.",
      remediation: "Number from the end that gives the OH carbons the lowest locants.",
      fallback: { kind: "ext", topic: "IUPAC nomenclature (Std XI Chemistry)" },
    },
    {
      id: "C01-M4",
      mistake: "In an ether, takes the larger group as the alkoxy prefix.",
      remediation: "The smaller group is the alkoxy prefix and the larger one the parent alkane: 1-methoxypropane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls any OH compound with a benzene ring a phenol.",
      remediation: "A phenol needs the OH on the ring itself; OH on a side-chain carbon, as in benzyl alcohol, makes an alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Breaks the suffix rule: drops the 'di' of a diol, or names OH as a hydroxy prefix.",
      remediation: t`OH is named by the suffix $-ol$; two OH groups give $-diol$, keeping the $e$: butane-1,3-diol.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Gives the common name when the IUPAC name is asked.",
      remediation: "IUPAC names come from the longest chain and locants: sec-butyl alcohol is butan-2-ol.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Takes mono-, di- or trihydric from the carbons bonded to the OH carbon.",
      remediation: "Hydric counts OH groups: propan-2-ol has one, so it is monohydric (and secondary).",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Calls an aryl ether, with O on the ring, a phenol.",
      remediation: t`A phenol needs OH on the ring; $\ce{C6H5-O-CH3}$ has no OH, so it is an ether (anisole).`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks any six-membered carbon ring is a benzene ring.",
      remediation: "Cyclohexane's ring is saturated; only a benzene ring makes an OH compound a phenol.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#1" },
      stem: t`Propan-2-ol, $\ce{(CH3)2CH-OH}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "iso" } },
      options: [
        { key: "A", text: t`a secondary alcohol: the OH carbon is bonded to two carbons`, correct: true, value: "secondary" },
        { key: "B", text: t`a primary alcohol: it has one OH group`, correct: false, misconceptionId: "C01-M1", value: "primary_one_oh" },
        { key: "C", text: t`a tertiary alcohol: it has three carbons`, correct: false, misconceptionId: "C01-M2", value: "tertiary_three_c" },
        { key: "D", text: t`a dihydric alcohol: the OH carbon is bonded to two carbons`, correct: false, misconceptionId: "C01-M8", value: "dihydric_two_c" },
      ],
      solution: {
        steps: [
          t`The OH carbon of $\ce{(CH3)2CH-OH}$ is bonded to two methyl carbons.`,
          t`So it is a secondary alcohol (and monohydric, with one OH).`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.1" },
      stem: t`Which of these compounds is a phenol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "phenol" } },
      options: [
        { key: "A", text: t`benzyl alcohol, $\ce{C6H5-CH2-OH}$`, correct: false, misconceptionId: "C01-M5", value: "benzyl_alcohol" },
        { key: "B", text: t`2-methylphenol, $\ce{CH3-C6H4-OH}$`, correct: true, value: "cresol" },
        { key: "C", text: t`cyclohexanol, $\ce{C6H11-OH}$`, correct: false, misconceptionId: "C01-M10", value: "cyclohexanol" },
        { key: "D", text: t`anisole, $\ce{C6H5-O-CH3}$`, correct: false, misconceptionId: "C01-M9", value: "anisole" },
      ],
      solution: {
        steps: [
          t`A phenol has OH directly on a benzene ring.`,
          t`Only 2-methylphenol, $\ce{CH3-C6H4-OH}$, has that.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.6 (ii)" },
      stem: t`The IUPAC name of $\ce{CH3-CH(OH)-CH(CH3)-CH2-OH}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "diol" } },
      options: [
        { key: "A", text: t`2-methylbutan-1,3-ol`, correct: false, misconceptionId: "C01-M6", value: "methylbutan_13_ol" },
        { key: "B", text: t`pentane-1,3-diol`, correct: false, misconceptionId: "C01-M2", value: "pentane_13_diol" },
        { key: "C", text: t`2-methylbutane-1,3-diol`, correct: true, value: "methylbutane_13_diol" },
        { key: "D", text: t`3-methylbutane-2,4-diol`, correct: false, misconceptionId: "C01-M3", value: "methylbutane_24_diol_3" },
      ],
      solution: {
        steps: [
          t`The longest chain through both OH carbons has four carbons, with a methyl branch.`,
          t`Number from the $\ce{CH2OH}$ end: OH on C1 and C3, methyl on C2.`,
          t`So the name is 2-methylbutane-1,3-diol.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.5 (a)" },
      stem: t`The IUPAC name of $\ce{CH3-O-CH2CH2CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ether" } },
      options: [
        { key: "A", text: t`methyl propyl ether`, correct: false, misconceptionId: "C01-M7", value: "methyl_propyl_ether" },
        { key: "B", text: t`propoxymethane`, correct: false, misconceptionId: "C01-M4", value: "propoxymethane" },
        { key: "C", text: t`3-methoxypropane`, correct: false, misconceptionId: "C01-M3", value: "methoxypropane_3" },
        { key: "D", text: t`1-methoxypropane`, correct: true, value: "methoxypropane_1" },
      ],
      solution: {
        steps: [
          t`The smaller group, $\ce{CH3O-}$, is the methoxy prefix.`,
          t`It sits on C1 of propane: 1-methoxypropane.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.2 (iii)" },
      stem: t`The IUPAC name of $\ce{CH3-CH(OH)-CH2-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "butanol" } },
      options: [
        { key: "A", text: t`2-hydroxybutane`, correct: false, misconceptionId: "C01-M6", value: "hydroxybutane_2" },
        { key: "B", text: t`butan-3-ol`, correct: false, misconceptionId: "C01-M3", value: "butan_3_ol" },
        { key: "C", text: t`butan-2-ol`, correct: true, value: "butan_2_ol" },
        { key: "D", text: t`sec-butyl alcohol`, correct: false, misconceptionId: "C01-M7", value: "sec_butyl_alcohol" },
      ],
      solution: {
        steps: [
          t`The chain has four carbons; number from the end nearer the OH.`,
          t`OH is on C2: butan-2-ol.`,
        ],
      },
    },
  ],
};
