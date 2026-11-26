import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Ethanol is a drink and dimethyl ether a refrigerant gas, yet both are $\ce{C2H6O}$. How can the same formula give such different substances?`,
    reveal: t`They are isomers: the same atoms joined differently, here into different functional groups.`,
  },
  explanation: {
    intuition: [
      t`Isomers share a molecular formula but differ in structure.`,
      t`Structural isomers differ in how atoms are joined.`,
      t`Geometrical isomers differ in arrangement around a C=C.`,
      t`Different structures give different properties.`,
    ],
    formal: [
      {
        title: "Structural isomerism",
        points: [
          t`Chain: different skeletons (butane, 2-methylpropane).`,
          t`Position: the group moves (butan-1-ol, butan-2-ol).`,
          t`Functional group: different groups (butan-2-ol, diethyl ether).`,
          t`Metamerism: different groups on one functional group (diethylamine, N-methylpropylamine).`,
        ],
      },
      {
        title: "Geometrical isomerism",
        points: [
          t`C=C cannot rotate, so groups can be cis (same side) or trans.`,
          t`Each double-bond carbon needs two different groups: but-2-ene, not but-1-ene.`,
        ],
      },
    ],
    worked: {
      prompt: t`What kind of isomers are propan-1-ol and propan-2-ol?`,
      steps: [
        t`Same chain and group.`,
        t`Only the OH's position differs.`,
      ],
      answer: t`Position isomers`,
    },
    visualSpec: t`Rearrange the same set of atoms into different isomers and sort them by type.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says position isomerism.",
      remediation: "The C=C stays put; groups differ in spatial arrangement.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says chain isomerism.",
      remediation: "The skeleton is fixed; cis and trans forms differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says tautomerism.",
      remediation: "Tautomers interconvert by moving H; this is cis-trans.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says chain isomers.",
      remediation: "Both are straight-chain secondary amines; the groups on N differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says position isomers.",
      remediation: "N stays in the chain; the alkyl groups around it differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says functional group isomers.",
      remediation: "Both are secondary amines.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says metamers.",
      remediation: "Metamers share a functional group; alcohol and ether differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says position isomers.",
      remediation: "The functional groups differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says chain isomers.",
      remediation: "The functional groups differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says position isomers.",
      remediation: "No group moves; the skeletons differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says geometrical isomers.",
      remediation: "These are alkanes with no C=C.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says metamers.",
      remediation: "Metamers need a functional group.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks but-1-ene has no C=C.",
      remediation: "It has one, between C1 and C2.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks C=C rotates freely.",
      remediation: "A C=C cannot rotate.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks it has fewer carbons.",
      remediation: t`Both are $\ce{C4H8}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.15 (C)" },
      stem: t`Which type of isomerism does $\ce{CH3CH=CHCH3}$ show?`,
      verify: { kind: "value", inputs: {  }, params: { q: "butene2" } },
      options: [
        { key: "A", text: t`chain`, correct: false, misconceptionId: "C04-M2", value: "chain" },
        { key: "B", text: t`geometrical`, correct: true, value: "geometrical" },
        { key: "C", text: t`tautomerism`, correct: false, misconceptionId: "C04-M3", value: "tautomerism" },
        { key: "D", text: t`position`, correct: false, misconceptionId: "C04-M1", value: "position" },
      ],
      solution: {
        steps: [
          t`Each C=C carbon carries H and $\ce{CH3}$.`,
          t`Geometrical (cis-trans).`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.5 (A)" },
      stem: t`$\ce{CH3CH2-NH-CH2CH3}$ and $\ce{CH3-NH-CH2CH2CH3}$ are`,
      verify: { kind: "value", inputs: {  }, params: { q: "amines" } },
      options: [
        { key: "A", text: t`chain isomers`, correct: false, misconceptionId: "C04-M4", value: "chain" },
        { key: "B", text: t`position isomers`, correct: false, misconceptionId: "C04-M5", value: "position" },
        { key: "C", text: t`metamers`, correct: true, value: "metamers" },
        { key: "D", text: t`functional group isomers`, correct: false, misconceptionId: "C04-M6", value: "functional_group" },
      ],
      solution: {
        steps: [
          t`Both are secondary amines.`,
          t`Different groups on N: metamers.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.5 (B)" },
      stem: t`Butan-2-ol and diethyl ether, $\ce{CH3CH2-O-CH2CH3}$, are`,
      verify: { kind: "value", inputs: {  }, params: { q: "alcohol_ether" } },
      options: [
        { key: "A", text: t`position isomers`, correct: false, misconceptionId: "C04-M8", value: "position" },
        { key: "B", text: t`chain isomers`, correct: false, misconceptionId: "C04-M9", value: "chain" },
        { key: "C", text: t`metamers`, correct: false, misconceptionId: "C04-M7", value: "metamers" },
        { key: "D", text: t`functional group isomers`, correct: true, value: "functional_group" },
      ],
      solution: {
        steps: [
          t`Alcohol and ether: different groups.`,
          t`Functional group isomers.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Butane and 2-methylpropane are`,
      verify: { kind: "value", inputs: {  }, params: { q: "butanes" } },
      options: [
        { key: "A", text: t`chain isomers`, correct: true, value: "chain" },
        { key: "B", text: t`geometrical isomers`, correct: false, misconceptionId: "C04-M11", value: "geometrical" },
        { key: "C", text: t`metamers`, correct: false, misconceptionId: "C04-M12", value: "metamers" },
        { key: "D", text: t`position isomers`, correct: false, misconceptionId: "C04-M10", value: "position" },
      ],
      solution: {
        steps: [
          t`Straight chain versus branched.`,
          t`Chain isomers.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`But-2-ene has cis and trans isomers but but-1-ene does not, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "butene1" } },
      options: [
        { key: "A", text: t`but-1-ene has fewer carbon atoms`, correct: false, misconceptionId: "C04-M15", value: "fewer_carbons" },
        { key: "B", text: t`in but-1-ene, C1 carries two identical H atoms`, correct: true, value: "two_h_on_c1" },
        { key: "C", text: t`but-1-ene has no C=C bond`, correct: false, misconceptionId: "C04-M13", value: "no_double_bond" },
        { key: "D", text: t`rotation is free about a C=C bond`, correct: false, misconceptionId: "C04-M14", value: "free_rotation" },
      ],
      solution: {
        steps: [
          t`C1 of but-1-ene carries two H atoms.`,
          t`No cis-trans pair is possible.`,
        ],
      },
    },
  ],
};
