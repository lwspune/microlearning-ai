import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Your left and right hands are mirror images of each other. So why will a left-hand glove not fit your right hand?`,
    reveal: t`Mirror images need not be **superimposable**. Hands are not: they are **chiral**. A molecule whose carbon holds four different groups is chiral in the same way, and its two mirror-image forms are optical isomers.`,
  },
  explanation: {
    intuition: [
      t`An object that cannot be placed exactly over its mirror image is **chiral**, like a hand.`,
      t`A carbon bonded to four **different** groups is a **chiral carbon** (asymmetric carbon).`,
      t`A molecule with one chiral carbon exists as two mirror-image forms called **enantiomers**.`,
      t`Enantiomers turn the plane of polarised light by equal angles in opposite directions.`,
      t`An equal mixture of the two, a **racemic mixture**, does not turn the light at all.`,
    ],
    formal: [
      {
        title: "Plane-polarised light",
        points: [
          t`Ordinary light vibrates in all planes; a Nicol prism lets through only one plane.`,
          t`That light is **plane-polarised light**.`,
          t`An **optically active** substance rotates the plane of this light.`,
          t`Rotation to the right (clockwise) is **dextrorotatory**: (+) or $d$.`,
          t`Rotation to the left (anticlockwise) is **laevorotatory**: (−) or $l$.`,
          t`The angle of rotation is measured with a **polarimeter**.`,
        ],
      },
      {
        title: "Chiral carbon atoms",
        points: [
          t`Look at each $sp^3$ carbon and list its four groups, including H.`,
          t`Compare whole groups, not just the first atom: $\ce{CH3}$ and $\ce{C2H5}$ are different groups.`,
          t`If all four differ, the carbon is chiral, often marked with an asterisk.`,
          t`In 2-chlorobutane, C-2 holds H, Cl, $\ce{CH3}$ and $\ce{C2H5}$: it is chiral.`,
          t`A $\ce{CH2}$ or $\ce{CH3}$ carbon has two equal H atoms, so it is never chiral.`,
          t`Holding a halogen does not make a carbon chiral; four different groups do.`,
        ],
      },
      {
        title: "Enantiomers",
        points: [
          t`A chiral molecule and its mirror image cannot be superimposed.`,
          t`The two forms are **enantiomers**, a kind of **optical isomer**.`,
          t`They have the same melting point, boiling point and density.`,
          t`Both are optically active, and they rotate light by the same angle.`,
          t`One is (+), the other (−): the directions are opposite.`,
          t`A molecule that is superimposable on its mirror image is **achiral** and inactive.`,
        ],
      },
      {
        title: "Racemic mixture",
        points: [
          t`A **racemic mixture** holds equal amounts of the (+) and (−) enantiomers.`,
          t`Each molecule in it is chiral and rotates the light.`,
          t`But the equal and opposite rotations cancel, so the mixture is optically inactive.`,
          t`This cancelling between two kinds of molecule is **external compensation**.`,
          t`It is written (±) or $dl$, as in (±)-2-chlorobutane.`,
        ],
      },
    ],
    worked: {
      prompt: t`Does 1-chloro-2-methylbutane, $\ce{Cl-CH2-CH(CH3)-CH2-CH3}$, show optical isomerism?`,
      steps: [
        t`C-1 carries Cl but also two H atoms, so it is not chiral.`,
        t`C-2 holds H, $\ce{CH3}$, $\ce{C2H5}$ and $\ce{CH2Cl}$: four different groups.`,
        t`So C-2 is a chiral carbon, and the molecule is chiral.`,
        t`It exists as two enantiomers that rotate light equally in opposite directions.`,
      ],
      answer: t`Yes: C-2 is chiral, so there are two enantiomers, (+) and (−).`,
    },
    visualSpec: t`Hold a carbon with four coloured groups in front of a mirror and rotate its image to try to superimpose the two; swap two groups to make them equal and watch chirality vanish.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks every carbon carrying the halogen (or OH) is chiral.",
      remediation: t`A carbon is chiral only if all four of its groups differ. $\ce{CH2Cl}$ or $\ce{CHBr(C2H5)2}$ is not chiral, while a carbon with no halogen can be.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: t`Compares only the atoms bonded directly to the carbon, so $\ce{CH3}$ and $\ce{C2H5}$ look the same.`,
      remediation: t`Compare whole groups. $\ce{CH3}$ and $\ce{C2H5}$ both start with C, but they are different groups.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks three different groups are enough for a chiral carbon.",
      remediation: t`All four groups must differ. A carbon with two identical groups, such as the two H of a $\ce{CH2}$, is not chiral.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks the two enantiomers rotate plane-polarised light the same way.",
      remediation: "Enantiomers rotate the plane by the same angle in **opposite** directions: one is (+), the other (−).",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks only one enantiomer is optically active and the other is inactive.",
      remediation: "Both enantiomers are optically active. They differ only in the direction of rotation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks a racemic mixture is inactive because its molecules are achiral.",
      remediation: "Every molecule in a racemic mixture is chiral. The mixture is inactive because equal and opposite rotations cancel (external compensation).",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (iii)" },
      stem: t`How many chiral carbon atoms does $\ce{CH3-CH(Cl)-CH(CH3)-CH2-CH3}$ have?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "count", smiles: "CC(Cl)C(C)CC" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C05-M3", value: "3" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C05-M1", value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C05-M2", value: "0" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`C-2 holds H, Cl, $\ce{CH3}$ and $\ce{CH(CH3)C2H5}$: chiral.`,
          t`C-3 holds H, $\ce{CH3}$, $\ce{C2H5}$ and $\ce{CHCl-CH3}$: chiral, though it has no Cl.`,
          t`C-4 is a $\ce{CH2}$ and the end carbons are $\ce{CH3}$: none of them is chiral.`,
          t`So there are 2 chiral carbons.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (iii)" },
      stem: t`Which of these molecules are chiral? (a) $\ce{CH3-CH(OH)-CH2-CH3}$, (b) $\ce{CH3-CH2-CH(Br)-CH2-CH3}$, (c) $\ce{CH3-CH2-CH2-CH2Br}$, (d) $\ce{CH3-CH(CH3)-CH2-CH3}$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "which", set: "CC(O)CC,CCC(Br)CC,CCCCBr,CC(C)CC" } },
      options: [
        { key: "A", text: t`none of them`, correct: false, misconceptionId: "C05-M2", value: "ch_none" },
        { key: "B", text: t`(a) only`, correct: true, value: "ch_a" },
        { key: "C", text: t`all four`, correct: false, misconceptionId: "C05-M3", value: "ch_all" },
        { key: "D", text: t`(a), (b) and (c)`, correct: false, misconceptionId: "C05-M1", value: "ch_abc" },
      ],
      solution: {
        steps: [
          t`(a) C-2 holds H, OH, $\ce{CH3}$ and $\ce{C2H5}$: chiral.`,
          t`(b) C-3 holds H, Br and two $\ce{C2H5}$ groups: not chiral.`,
          t`(c) has only $\ce{CH2}$ and $\ce{CH3}$ carbons; (d) C-2 holds two $\ce{CH3}$ groups.`,
          t`So only (a) is chiral.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (v)" },
      stem: t`How many of these are chiral molecules: 1-bromobutane, 2-bromo-2-methylpropane, 2-bromobutane, 3-bromopentane?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "many", set: "CCCCBr,CC(C)(C)Br,CC(Br)CC,CCC(Br)CC" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C05-M1", value: "4" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C05-M2", value: "0" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C05-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`1-Bromobutane: the C–Br carbon is a $\ce{CH2}$, so no chiral carbon.`,
          t`2-Bromo-2-methylpropane: C-2 holds three $\ce{CH3}$ groups; 3-bromopentane: C-3 holds two $\ce{C2H5}$.`,
          t`2-Bromobutane: C-2 holds H, Br, $\ce{CH3}$ and $\ce{C2H5}$: chiral.`,
          t`So only 1 of the four is chiral.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.5" },
      stem: t`Pure (+)-2-chlorobutane rotates the plane of plane-polarised light to the right. An equimolar mixture of (+)- and (−)-2-chlorobutane`,
      verify: { kind: "value", inputs: {  }, params: { kind: "racemic" } },
      options: [
        { key: "A", text: t`rotates it to the right by half as much, as only the (+) form is active`, correct: false, misconceptionId: "C05-M5", value: "rac_half" },
        { key: "B", text: t`is optically inactive, because its molecules are achiral`, correct: false, misconceptionId: "C05-M6", value: "rac_achiral" },
        { key: "C", text: t`is optically inactive, because the equal and opposite rotations cancel`, correct: true, value: "rac_cancel" },
        { key: "D", text: t`rotates the plane to the right, as each of the two forms does`, correct: false, misconceptionId: "C05-M4", value: "rac_same_way" },
      ],
      solution: {
        steps: [
          t`The (−) form rotates the plane by the same angle to the left.`,
          t`In an equimolar mixture the two rotations are equal and opposite.`,
          t`They cancel: the racemic mixture is optically inactive, though each molecule is chiral.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`How many chiral carbon atoms does $\ce{Cl-CH2-CH2-CH(Cl)-CH3}$ have?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "count", smiles: "ClCCC(Cl)C" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C05-M1", value: "2" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C05-M2", value: "0" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C05-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`C-1 and C-2 are $\ce{CH2}$ groups, and C-4 is a $\ce{CH3}$: not chiral.`,
          t`C-3 holds H, Cl, $\ce{CH3}$ and $\ce{CH2-CH2Cl}$: four different groups.`,
          t`So there is 1 chiral carbon.`,
        ],
      },
    },
  ],
};
