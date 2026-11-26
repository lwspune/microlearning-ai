import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`One compound was called 'acetoin' in one lab and 'methyl acetyl carbinol' in another. How do chemists everywhere agree on one name?`,
    reveal: t`IUPAC rules: the longest chain, the principal group's suffix, prefixes in alphabetical order and the lowest locants.`,
  },
  explanation: {
    intuition: [
      t`Find the longest chain holding the principal functional group.`,
      t`Number it so the principal group gets the lowest number.`,
      t`Name other groups as prefixes, in alphabetical order.`,
      t`Combine: prefixes + parent chain + suffix.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`Principal group priority: acid > aldehyde > ketone > alcohol > amine.`,
          t`Lowest locant to the principal group, then to multiple bonds and substituents.`,
          t`Ties: the alphabetically first prefix gets the lower number.`,
        ],
      },
      {
        title: "Examples",
        points: [
          t`$\ce{CH3CH(OH)COCH2CH3}$: 2-hydroxypentan-3-one.`,
          t`$\ce{CH2=CHCH=CH2}$: buta-1,3-diene ('a' added before a consonant suffix).`,
          t`$\ce{CH3CH(OH)CH2OH}$: propane-1,2-diol.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name $\ce{CH3CH(CH3)CH2CH3}$.`,
      steps: [
        t`Longest chain: 4 C, butane; methyl on C2 from the nearer end.`,
        t`2-methylbutane.`,
      ],
      answer: t`2-methylbutane`,
    },
    visualSpec: t`Highlight the parent chain, number it, then attach prefixes and suffix step by step.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Numbers from the wrong end.",
      remediation: "The principal group, the ketone, gets C3 either way; then OH gets the lower number, 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Makes OH the principal group.",
      remediation: "A ketone outranks an alcohol: suffix -one.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Uses the aldehyde suffix.",
      remediation: "C=O inside the chain is a ketone: -one.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Numbers from the wrong end.",
      remediation: t`COOH is C1, so $\ce{NH2}$ is on C3.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Makes the amine principal.",
      remediation: "The acid outranks the amine.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Leaves the COOH carbon out of the chain.",
      remediation: "The COOH carbon is C1 of a four-carbon chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Accepts the given name.",
      remediation: "With a tie, ethyl comes first alphabetically and takes the lower locant.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Orders prefixes by locant.",
      remediation: "Prefixes go alphabetically: ethyl before methyl.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Miscounts the chain.",
      remediation: "The parent chain is heptane.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Drops the 'a'.",
      remediation: "Add 'a' before 'di': buta-1,3-diene.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Numbers from the wrong end.",
      remediation: "Lowest locants: 1,3.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Writes -yne.",
      remediation: "Double bonds are -ene.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Numbers from the wrong end.",
      remediation: "Lowest locants: 1,2.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Drops 'di'.",
      remediation: "Two OH groups: -diol, keeping the 'e' of propane.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Makes one OH a prefix.",
      remediation: "Both OH groups are principal: -1,2-diol.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.4" },
      stem: t`The IUPAC name of $\ce{CH3-CH(OH)-CO-CH2-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydroxyketone" } },
      options: [
        { key: "A", text: t`3-oxopentan-2-ol`, correct: false, misconceptionId: "C03-M2", value: "oxopentan_2_ol_3" },
        { key: "B", text: t`2-hydroxypentan-3-al`, correct: false, misconceptionId: "C03-M3", value: "hydroxypentan_3_al" },
        { key: "C", text: t`4-hydroxypentan-3-one`, correct: false, misconceptionId: "C03-M1", value: "hydroxypentan_3_one_4" },
        { key: "D", text: t`2-hydroxypentan-3-one`, correct: true, value: "hydroxypentan_3_one_2" },
      ],
      solution: {
        steps: [
          t`Ketone on C3 of pentane; OH on C2.`,
          t`2-hydroxypentan-3-one.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.4" },
      stem: t`The IUPAC name of $\ce{CH3-CH(NH2)-CH2-COOH}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "amino_acid" } },
      options: [
        { key: "A", text: t`3-aminobutanoic acid`, correct: true, value: "aminobutanoic_3" },
        { key: "B", text: t`3-aminopropanoic acid`, correct: false, misconceptionId: "C03-M6", value: "aminopropanoic_3" },
        { key: "C", text: t`3-carboxybutan-2-amine`, correct: false, misconceptionId: "C03-M5", value: "carboxybutan_2_amine" },
        { key: "D", text: t`2-aminobutanoic acid`, correct: false, misconceptionId: "C03-M4", value: "aminobutanoic_2" },
      ],
      solution: {
        steps: [
          t`Four-carbon acid; COOH is C1.`,
          t`$\ce{NH2}$ on C3: 3-aminobutanoic acid.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (D)" },
      stem: t`A compound is named '5-ethyl-3-methylheptane'. Its correct IUPAC name is`,
      verify: { kind: "value", inputs: {  }, params: { q: "heptane" } },
      options: [
        { key: "A", text: t`5-ethyl-3-methylheptane, as given`, correct: false, misconceptionId: "C03-M7", value: "ethyl5_methyl3" },
        { key: "B", text: t`3-ethyl-5-methylheptane`, correct: true, value: "ethyl3_methyl5" },
        { key: "C", text: t`3-ethyl-5-methyloctane`, correct: false, misconceptionId: "C03-M9", value: "octane_name" },
        { key: "D", text: t`3-methyl-5-ethylheptane`, correct: false, misconceptionId: "C03-M8", value: "methyl3_ethyl5" },
      ],
      solution: {
        steps: [
          t`Locants are 3 and 5 either way.`,
          t`Ethyl, first alphabetically, takes 3.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.4" },
      stem: t`The IUPAC name of $\ce{CH2=CH-CH=CH2}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "diene" } },
      options: [
        { key: "A", text: t`buta-2,4-diene`, correct: false, misconceptionId: "C03-M11", value: "buta_2_4_diene" },
        { key: "B", text: t`buta-1,3-diyne`, correct: false, misconceptionId: "C03-M12", value: "butadiyne" },
        { key: "C", text: t`buta-1,3-diene`, correct: true, value: "buta_1_3_diene" },
        { key: "D", text: t`but-1,3-diene`, correct: false, misconceptionId: "C03-M10", value: "but_1_3_diene" },
      ],
      solution: {
        steps: [
          t`Four carbons, double bonds at 1 and 3.`,
          t`buta-1,3-diene.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.4" },
      stem: t`The IUPAC name of $\ce{CH3-CH(OH)-CH2-OH}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "diol" } },
      options: [
        { key: "A", text: t`2-hydroxypropan-1-ol`, correct: false, misconceptionId: "C03-M15", value: "hydroxypropan_1_ol" },
        { key: "B", text: t`propane-2,3-diol`, correct: false, misconceptionId: "C03-M13", value: "propane_2_3_diol" },
        { key: "C", text: t`propan-1,2-ol`, correct: false, misconceptionId: "C03-M14", value: "propan_1_2_ol" },
        { key: "D", text: t`propane-1,2-diol`, correct: true, value: "propane_1_2_diol" },
      ],
      solution: {
        steps: [
          t`Three carbons, OH on C1 and C2.`,
          t`propane-1,2-diol.`,
        ],
      },
    },
  ],
};
