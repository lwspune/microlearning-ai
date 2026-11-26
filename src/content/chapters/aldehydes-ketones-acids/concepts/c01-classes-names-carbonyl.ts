import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Vanilla, cinnamon and almonds all owe their smell to aldehydes; nail-polish remover is a ketone, and vinegar an acid. All contain a $\ce{C=O}$ group. How do chemists tell the three families apart by name?`,
    reveal: t`By what else is on the carbonyl carbon: an H makes an aldehyde (-al), two carbons a ketone (-one), and an OH a carboxylic acid (-oic acid).`,
  },
  explanation: {
    intuition: [
      t`The **carbonyl group** is a carbon double bonded to oxygen, $\ce{>C=O}$.`,
      t`In an **aldehyde** the carbonyl carbon carries at least one H: $\ce{R-CHO}$.`,
      t`In a **ketone** it carries two carbon groups: $\ce{R-CO-R'}$.`,
      t`In a **carboxylic acid** it carries an OH: $\ce{R-COOH}$.`,
    ],
    formal: [
      {
        title: "IUPAC names",
        points: [
          t`Aldehydes: replace the alkane's $-e$ by $-al$; the CHO carbon is C1: $\ce{CH3CH2CHO}$ is propanal.`,
          t`Ketones: suffix $-one$, with the lowest locant for C=O: butan-2-one.`,
          t`Acids: suffix $-oic$ acid; the COOH carbon is C1: propanoic acid.`,
          t`The functional carbon counts as part of the chain.`,
        ],
      },
      {
        title: "Aliphatic and aromatic",
        points: [
          t`Aromatic aldehydes and ketones have the ring directly on the carbonyl carbon.`,
          t`Benzaldehyde, $\ce{C6H5CHO}$; acetophenone, $\ce{C6H5COCH3}$; benzoic acid, $\ce{C6H5COOH}$.`,
          t`If a $\ce{CH2}$ separates the ring from C=O, the compound is aliphatic, as in $\ce{C6H5CH2COOH}$.`,
          t`Common names survive: formaldehyde, acetone, acetic acid.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name $\ce{CH3-CH(CH3)-CH2-CHO}$ by IUPAC rules.`,
      steps: [
        t`The CHO carbon is C1; the longest chain through it has four carbons.`,
        t`The methyl branch sits on C3.`,
        t`Four carbons with $-al$: butanal.`,
      ],
      answer: t`3-Methylbutanal`,
    },
    visualSpec: t`Swap the groups on a carbonyl carbon between H, alkyl, aryl and OH, and watch the family and name change.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Numbers the chain from the wrong end.",
      remediation: "The CHO or COOH carbon is always C1; in ketones number so that C=O gets the lowest locant.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks the wrong chain or leaves the functional carbon out of it.",
      remediation: "The parent chain is the longest one that includes the carbonyl carbon, and that carbon is counted.",
      fallback: { kind: "ext", topic: "IUPAC nomenclature (Std XI Chemistry)" },
    },
    {
      id: "C01-M3",
      mistake: "Gives the common name when the IUPAC name is asked.",
      remediation: t`IUPAC names use the alkane stem with $-al$, $-one$ or $-oic$ acid.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Confuses aldehydes, ketones and acids.",
      remediation: "Look at the carbonyl carbon: H means aldehyde, two carbons ketone, OH carboxylic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls a carbonyl compound aromatic if a ring is anywhere in the molecule.",
      remediation: "Only a ring bonded directly to the carbonyl carbon makes it an aromatic aldehyde or ketone.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks any six-membered ring is aromatic.",
      remediation: "Cyclohexanone's ring is saturated; only a benzene ring is aromatic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#13" },
      stem: t`The IUPAC name of $\ce{CH3-CH2-CH(CH3)-CHO}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ald" } },
      options: [
        { key: "A", text: t`$\alpha$-methylbutyraldehyde`, correct: false, misconceptionId: "C01-M3", value: "common_ald" },
        { key: "B", text: t`3-methylbutanal`, correct: false, misconceptionId: "C01-M1", value: "methylbutanal_3" },
        { key: "C", text: t`2-ethylpropanal`, correct: false, misconceptionId: "C01-M2", value: "ethylpropanal_2" },
        { key: "D", text: t`2-methylbutanal`, correct: true, value: "methylbutanal_2" },
      ],
      solution: {
        steps: [
          t`The CHO carbon is C1; the longest chain through it has four carbons.`,
          t`Methyl on C2: 2-methylbutanal.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.4 (iii)" },
      stem: t`The IUPAC name of $\ce{CH3-CO-CH2-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ket" } },
      options: [
        { key: "A", text: t`butan-2-one`, correct: true, value: "butan_2_one" },
        { key: "B", text: t`butan-3-one`, correct: false, misconceptionId: "C01-M1", value: "butan_3_one" },
        { key: "C", text: t`ethyl methyl ketone`, correct: false, misconceptionId: "C01-M3", value: "ethyl_methyl_ketone" },
        { key: "D", text: t`butanal`, correct: false, misconceptionId: "C01-M4", value: "butanal" },
      ],
      solution: {
        steps: [
          t`Four carbons; number so C=O gets locant 2.`,
          t`So butan-2-one.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.4 (iii)" },
      stem: t`The IUPAC name of $\ce{CH3-CH2-COOH}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acid" } },
      options: [
        { key: "A", text: t`propionic acid`, correct: false, misconceptionId: "C01-M3", value: "propionic_acid" },
        { key: "B", text: t`propanoic acid`, correct: true, value: "propanoic_acid" },
        { key: "C", text: t`propanal`, correct: false, misconceptionId: "C01-M4", value: "propanal" },
        { key: "D", text: t`ethanoic acid`, correct: false, misconceptionId: "C01-M2", value: "ethanoic_acid" },
      ],
      solution: {
        steps: [
          t`The COOH carbon is C1 of a three-carbon chain.`,
          t`So propanoic acid.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.2 (i)" },
      stem: t`Which of these is an aromatic ketone?`,
      verify: { kind: "value", inputs: {  }, params: { q: "arom" } },
      options: [
        { key: "A", text: t`benzaldehyde, $\ce{C6H5-CHO}$`, correct: false, misconceptionId: "C01-M4", value: "benzaldehyde" },
        { key: "B", text: t`1-phenylpropan-2-one, $\ce{C6H5-CH2-CO-CH3}$`, correct: false, misconceptionId: "C01-M5", value: "phenylpropanone" },
        { key: "C", text: t`acetophenone, $\ce{C6H5-CO-CH3}$`, correct: true, value: "acetophenone" },
        { key: "D", text: t`cyclohexanone, $\ce{C6H10O}$`, correct: false, misconceptionId: "C01-M6", value: "cyclohexanone" },
      ],
      solution: {
        steps: [
          t`An aromatic ketone has the ring on the carbonyl carbon.`,
          t`Acetophenone, $\ce{C6H5COCH3}$, is the one.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`The IUPAC name of $\ce{CH3-CH2-CH2-CHO}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "butanal" } },
      options: [
        { key: "A", text: t`butanone`, correct: false, misconceptionId: "C01-M4", value: "butanone" },
        { key: "B", text: t`propanal`, correct: false, misconceptionId: "C01-M2", value: "propanal" },
        { key: "C", text: t`butyraldehyde`, correct: false, misconceptionId: "C01-M3", value: "butyraldehyde" },
        { key: "D", text: t`butanal`, correct: true, value: "butanal" },
      ],
      solution: {
        steps: [
          t`Four carbons, CHO carbon as C1.`,
          t`So butanal.`,
        ],
      },
    },
  ],
};
