import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Allyl chloride, $\ce{CH2=CH-CH2-Cl}$, and vinyl chloride, $\ce{CH2=CH-Cl}$, both have a C=C and a Cl. Aqueous KOH replaces the Cl of one easily but hardly touches the other. Why?`,
    reveal: t`Look at the carbon that carries Cl. In allyl chloride it is an $sp^3$ carbon **next to** the C=C (allylic). In vinyl chloride it is a carbon **of** the C=C (vinylic), and that C–Cl bond is partly double, so it is hard to break.`,
  },
  explanation: {
    intuition: [
      t`A **halogen derivative** is a hydrocarbon with one or more H atoms replaced by halogen atoms (X = F, Cl, Br, I).`,
      t`Its class depends on the carbon that carries X, not on the rest of the molecule.`,
      t`X on an $sp^3$ carbon of a saturated chain: an **alkyl halide**.`,
      t`X on the $sp^3$ carbon next to a C=C or a benzene ring: **allylic** or **benzylic**.`,
      t`X on a carbon of the C=C or of the ring itself: **vinylic** or **aryl**.`,
    ],
    formal: [
      {
        title: "Counting halogen atoms",
        points: [
          t`One X atom gives a **monohalogen** compound, such as $\ce{CH3-CH2-Cl}$.`,
          t`Two X atoms give a **dihalogen** compound, such as $\ce{Cl-CH2-CH2-Cl}$.`,
          t`Three or more give **trihalogen** and **polyhalogen** compounds, such as $\ce{CHCl3}$.`,
          t`The rest of this chapter is mostly about monohalogen compounds.`,
        ],
      },
      {
        title: "Primary, secondary, tertiary",
        points: [
          t`In an alkyl halide, X sits on an $sp^3$ carbon of a saturated chain.`,
          t`Count the **carbon** atoms bonded to that C–X carbon. Do not count H or X.`,
          t`One carbon: **primary** (1°), as in $\ce{CH3-CH2-CH2-Cl}$.`,
          t`Two carbons: **secondary** (2°), as in $\ce{CH3-CH(Cl)-CH3}$.`,
          t`Three carbons: **tertiary** (3°), as in $\ce{(CH3)3C-Cl}$.`,
        ],
      },
      {
        title: "Allylic and benzylic halides",
        points: [
          t`An **allylic** carbon is the $sp^3$ carbon next to a C=C.`,
          t`X on an allylic carbon gives an **allylic halide**: $\ce{CH2=CH-CH2-X}$.`,
          t`A **benzylic** carbon is the $sp^3$ carbon joined to a benzene ring.`,
          t`X on a benzylic carbon gives a **benzylic halide**: $\ce{C6H5-CH2-X}$.`,
          t`A C=C or ring further away does not count: then it is an ordinary alkyl halide.`,
        ],
      },
      {
        title: "Vinylic and aryl halides",
        points: [
          t`In these, X is bonded to an $sp^2$ carbon.`,
          t`X on a carbon of a C=C gives a **vinylic halide**: $\ce{CH2=CH-X}$.`,
          t`X on a carbon of a benzene ring gives an **aryl halide**: $\ce{C6H5-X}$.`,
          t`A lone pair on X spreads into the C=C or ring by resonance.`,
          t`So their C–X bond has partial double bond character: it is shorter and stronger.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify $\ce{CH3-CH=CH-CH2-Br}$ (1-bromobut-2-ene).`,
      steps: [
        t`Find the carbon carrying Br: the $\ce{CH2}$ at the right-hand end.`,
        t`That carbon has only single bonds, so it is $sp^3$: not vinylic.`,
        t`Its neighbour is a $\ce{CH=}$ carbon, which is part of the C=C.`,
        t`X on the $sp^3$ carbon next to a C=C makes it allylic.`,
      ],
      answer: t`An allylic halide.`,
    },
    visualSpec: t`Slide a chlorine atom along a chain that holds a C=C and a benzene ring, and watch its class label change at each carbon.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Counts the hydrogen atoms on the C–X carbon instead of the carbon atoms, so a $\ce{CH}$ reads as primary and a $\ce{CH2}$ as secondary.`,
      remediation: t`The degree counts the **carbon** atoms bonded to the C–X carbon. $\ce{R2CH-X}$ has two, so it is secondary; $\ce{R-CH2-X}$ has one, so it is primary.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Calls a halide allylic or benzylic whenever the molecule has a C=C or a benzene ring anywhere.",
      remediation: "Allylic and benzylic need X on the carbon **right next to** the C=C or ring. If X is further away, classify it as an ordinary alkyl halide.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Mixes up 'on' and 'next to': thinks vinylic and aryl mean X is next to the C=C or ring, and allylic and benzylic mean X is on it.",
      remediation: t`Vinylic and aryl: X is **on** a carbon of the C=C or ring ($sp^2$). Allylic and benzylic: X is on the $sp^3$ carbon **next to** it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Mixes up the chain and ring names: vinylic for a ring carbon, aryl for a C=C carbon, and likewise benzylic and allylic.",
      remediation: "The ring names come from benzene: aryl (on the ring) and benzylic (next to it). The chain names come from the C=C: vinylic (on it) and allylic (next to it).",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Ignores the C=C or ring and names every halide primary, secondary or tertiary by counting carbons.",
      remediation: t`First check the C–X carbon and its neighbours for a C=C or a ring. Only a halide with X on an $sp^3$ carbon away from them is a 1°, 2° or 3° alkyl halide.`,
      fallback: { kind: "ext", topic: "hybridisation of carbon (Std XI Chemistry)" },
    },
    {
      id: "C01-M6",
      mistake: "Counts the halogen as one of the groups on the C–X carbon, so the degree comes out one too high.",
      remediation: "Count only the carbon atoms bonded to the C–X carbon. X itself is not counted, and neither are H atoms.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#2" },
      stem: t`By the kind of carbon its halogen is bonded to, $\ce{CH2=CH-Cl}$ is`,
      verify: { kind: "value", inputs: {  }, params: { smiles: "C=CCl" } },
      options: [
        { key: "A", text: t`an allylic halide`, correct: false, misconceptionId: "C01-M3", value: "allylic" },
        { key: "B", text: t`a vinylic halide`, correct: true, value: "vinylic" },
        { key: "C", text: t`an aryl halide`, correct: false, misconceptionId: "C01-M4", value: "aryl" },
        { key: "D", text: t`a primary (1°) alkyl halide`, correct: false, misconceptionId: "C01-M5", value: "primary_alkyl" },
      ],
      solution: {
        steps: [
          t`Cl is bonded to the $\ce{CH}$ carbon, which is part of the C=C.`,
          t`That carbon is $sp^2$, and X on a carbon of a C=C is vinylic.`,
          t`So $\ce{CH2=CH-Cl}$ is a vinylic halide.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (viii)" },
      stem: t`By the kind of carbon its halogen is bonded to, $\ce{C6H5-CH2-Cl}$ is`,
      verify: { kind: "value", inputs: {  }, params: { smiles: "c1ccccc1CCl" } },
      options: [
        { key: "A", text: t`an aryl halide`, correct: false, misconceptionId: "C01-M3", value: "aryl" },
        { key: "B", text: t`an allylic halide`, correct: false, misconceptionId: "C01-M4", value: "allylic" },
        { key: "C", text: t`a primary (1°) alkyl halide`, correct: false, misconceptionId: "C01-M5", value: "primary_alkyl" },
        { key: "D", text: t`a benzylic halide`, correct: true, value: "benzylic" },
      ],
      solution: {
        steps: [
          t`Cl is on the $\ce{CH2}$ carbon, which has only single bonds: $sp^3$.`,
          t`That carbon is joined directly to the benzene ring.`,
          t`X on the $sp^3$ carbon next to a ring makes it a benzylic halide.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (i-a)" },
      stem: t`By the kind of carbon its halogen is bonded to, $\ce{CH3-CH=C(CH3)-CH(CH3)-Br}$ is`,
      verify: { kind: "value", inputs: {  }, params: { smiles: "CC=C(C)C(C)Br" } },
      options: [
        { key: "A", text: t`a benzylic halide`, correct: false, misconceptionId: "C01-M4", value: "benzylic" },
        { key: "B", text: t`a secondary (2°) alkyl halide`, correct: false, misconceptionId: "C01-M5", value: "secondary_alkyl" },
        { key: "C", text: t`an allylic halide`, correct: true, value: "allylic" },
        { key: "D", text: t`a vinylic halide`, correct: false, misconceptionId: "C01-M3", value: "vinylic" },
      ],
      solution: {
        steps: [
          t`Br is on the $\ce{CH}$ carbon at the right, which has only single bonds: $sp^3$.`,
          t`Its neighbour $\ce{C(CH3)}$ is one end of the C=C.`,
          t`X on the $sp^3$ carbon next to a C=C makes it an allylic halide.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`By the kind of carbon its halogen is bonded to, $\ce{C6H5-CH2-CH(Br)-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { smiles: "c1ccccc1CC(Br)C" } },
      options: [
        { key: "A", text: t`a secondary (2°) alkyl halide`, correct: true, value: "secondary_alkyl" },
        { key: "B", text: t`a primary (1°) alkyl halide`, correct: false, misconceptionId: "C01-M1", value: "primary_alkyl" },
        { key: "C", text: t`a benzylic halide`, correct: false, misconceptionId: "C01-M2", value: "benzylic" },
        { key: "D", text: t`a tertiary (3°) alkyl halide`, correct: false, misconceptionId: "C01-M6", value: "tertiary_alkyl" },
      ],
      solution: {
        steps: [
          t`Br is on the $\ce{CH}$ carbon, which is not next to the ring: a $\ce{CH2}$ lies between.`,
          t`So it is not benzylic; it is an ordinary alkyl halide.`,
          t`The C–Br carbon is bonded to two carbons ($\ce{CH2}$ and $\ce{CH3}$).`,
          t`Two carbons make it a secondary (2°) alkyl halide.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (ii-e)" },
      stem: t`By the kind of carbon its halogen is bonded to, $\ce{CH3-C6H4-Cl}$ is`,
      verify: { kind: "value", inputs: {  }, params: { smiles: "Cc1ccc(Cl)cc1" } },
      options: [
        { key: "A", text: t`a benzylic halide`, correct: false, misconceptionId: "C01-M3", value: "benzylic" },
        { key: "B", text: t`a vinylic halide`, correct: false, misconceptionId: "C01-M4", value: "vinylic" },
        { key: "C", text: t`a secondary (2°) alkyl halide`, correct: false, misconceptionId: "C01-M5", value: "secondary_alkyl" },
        { key: "D", text: t`an aryl halide`, correct: true, value: "aryl" },
      ],
      solution: {
        steps: [
          t`Cl is bonded directly to a carbon of the benzene ring.`,
          t`A ring carbon is $sp^2$; the $\ce{CH3}$ group on the ring does not change that.`,
          t`X on a carbon of a benzene ring makes it an aryl halide.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (viii)" },
      stem: t`By the kind of carbon its halogen is bonded to, $\ce{CH2=CH-CH2-CH(Cl)-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { smiles: "C=CCC(Cl)C" } },
      options: [
        { key: "A", text: t`a tertiary (3°) alkyl halide`, correct: false, misconceptionId: "C01-M6", value: "tertiary_alkyl" },
        { key: "B", text: t`a secondary (2°) alkyl halide`, correct: true, value: "secondary_alkyl" },
        { key: "C", text: t`a primary (1°) alkyl halide`, correct: false, misconceptionId: "C01-M1", value: "primary_alkyl" },
        { key: "D", text: t`an allylic halide`, correct: false, misconceptionId: "C01-M2", value: "allylic" },
      ],
      solution: {
        steps: [
          t`Cl is on the $\ce{CH}$ carbon; a $\ce{CH2}$ separates it from the C=C.`,
          t`So it is not allylic; it is an ordinary alkyl halide.`,
          t`The C–Cl carbon is bonded to two carbons, so it is secondary (2°).`,
        ],
      },
    },
  ],
};
