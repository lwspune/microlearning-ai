import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`$\ce{CH3-CH2-CH(CH3)-Cl}$ looks like propane carrying a methyl group and a chlorine: 1-chloro-1-methylpropane. Is that its IUPAC name?`,
    reveal: t`No. The methyl group on the last carbon extends the chain to four carbons. Numbered from the chlorine end, it is **2-chlorobutane**.`,
  },
  explanation: {
    intuition: [
      t`In IUPAC names the halogen is a **prefix**: fluoro, chloro, bromo, iodo.`,
      t`The parent is the longest carbon chain that carries the halogen (and the C=C, if any).`,
      t`Number the chain so that the substituents get the lowest locants.`,
      t`Write the prefixes in alphabetical order, each with its locant.`,
      t`Common names say alkyl + halide: $\ce{CH3-CH2-Br}$ is ethyl bromide, IUPAC bromoethane.`,
    ],
    formal: [
      {
        title: "Choosing the parent chain",
        points: [
          t`Find the **longest chain** of carbons that holds the C–X carbon.`,
          t`The chain may bend through a group written as a branch, such as $\ce{CH(CH3)}$ or $\ce{C2H5}$.`,
          t`If there is a C=C, the parent chain must contain both of its carbons.`,
          t`The parent name ends in -ane, or -ene for a chain with a C=C.`,
          t`Halogens and alkyl groups are both prefixes on that parent.`,
        ],
      },
      {
        title: "Numbering the chain",
        points: [
          t`A C=C gets the lowest possible number first: pent-2-ene, not pent-3-ene.`,
          t`Then the substituents together get the **lowest set of locants**.`,
          t`Compare the sets term by term: $\{2,4\}$ beats $\{3,5\}$ at the first term.`,
          t`The halogen gets no priority over an alkyl group in this count.`,
          t`If both ends give the same set, the prefix first in the alphabet gets the lower number.`,
        ],
      },
      {
        title: "Writing the name",
        points: [
          t`List prefixes alphabetically: bromo, chloro, ethyl, iodo, methyl.`,
          t`Multiplying prefixes di-, tri- show repeats but are ignored in the alphabet.`,
          t`Example: $\ce{CH3-CH(Cl)-CH(CH3)-CH2-CH3}$ is 2-chloro-3-methylpentane.`,
          t`Commas separate numbers; hyphens join numbers to words: 1,2-dichloroethane.`,
        ],
      },
      {
        title: "Common names and rings",
        points: [
          t`$\ce{(CH3)2CH-Cl}$ is isopropyl chloride, IUPAC 2-chloropropane.`,
          t`$\ce{(CH3)3C-Br}$ is tert-butyl bromide, IUPAC 2-bromo-2-methylpropane.`,
          t`$\ce{CH2=CH-Cl}$ is vinyl chloride and $\ce{C6H5-CH2-Cl}$ is benzyl chloride.`,
          t`On a ring, number round it for the lowest set: 1-chloro-4-ethylcyclohexane.`,
          t`On benzene, 1,2-, 1,3- and 1,4- are also called ortho (o-), meta (m-) and para (p-).`,
        ],
      },
      {
        title: "Dihalogen compounds",
        points: [
          t`Two X on the **same** carbon: a **geminal** (gem) dihalide, such as $\ce{CH3-CHCl2}$.`,
          t`Its IUPAC name is 1,1-dichloroethane; common name ethylidene chloride.`,
          t`Two X on **adjacent** carbons: a **vicinal** (vic) dihalide, such as $\ce{Cl-CH2-CH2-Cl}$.`,
          t`Its IUPAC name is 1,2-dichloroethane; common name ethylene dichloride.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name a benzene ring that carries two Cl atoms para to each other and a $\ce{CH3}$ group on a carbon next to one Cl.`,
      steps: [
        t`The parent is benzene; the three substituents need locants.`,
        t`Start at the Cl next to $\ce{CH3}$ and count towards it: Cl 1, $\ce{CH3}$ 2, Cl 4.`,
        t`That set, $\{1,2,4\}$, beats every other way round, such as $\{1,3,4\}$.`,
        t`Alphabetical order: chloro before methyl (ignore di-).`,
      ],
      answer: t`1,4-Dichloro-2-methylbenzene.`,
    },
    visualSpec: t`Drag a numbering arrow onto either end of a drawn chain and watch the locant set and the name update, with the lower set lighting up.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Treats the halogen as the principal group and numbers from the end nearer it.",
      remediation: "In IUPAC names the halogen is only a prefix. Give the C=C the lowest number first, then the lowest locant set to all substituents together.",
      fallback: { kind: "ext", topic: "IUPAC nomenclature (Std XI Chemistry)" },
    },
    {
      id: "C02-M2",
      mistake: "Takes the chain as written in a straight line, missing a branch that makes it longer.",
      remediation: t`Trace every path through the carbons. A group written as a branch, such as $\ce{C2H5}$ or one of two $\ce{CH3}$ groups, can extend the parent chain.`,
      fallback: { kind: "ext", topic: "IUPAC nomenclature (Std XI Chemistry)" },
    },
    {
      id: "C02-M3",
      mistake: "Writes the alkyl prefixes before the halogen prefixes instead of in alphabetical order.",
      remediation: "Halogen and alkyl prefixes are listed together in alphabetical order: bromo, chloro, ethyl, methyl.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Numbers from the end nearer the alkyl branch, as if the branch had to get the lowest number.",
      remediation: "No single substituent has priority. Choose the end that gives the C=C, then the whole set of locants, the lowest numbers.",
      fallback: { kind: "ext", topic: "IUPAC nomenclature (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (i-a)" },
      stem: t`The IUPAC name of $\ce{CH3-CH=C(CH3)-CH(CH3)-Br}$ is`,
      verify: { kind: "value", inputs: {  }, params: { n: "5", db: "2", subs: "3:methyl,4:bromo", drawn: "4;2;3:methyl,4:methyl,4:bromo" } },
      options: [
        { key: "A", text: t`2-bromo-3-methylpent-3-ene`, correct: false, misconceptionId: "C02-M1", value: "nm_2_bromo_3_methylpent_3_ene" },
        { key: "B", text: t`1-bromo-1,2-dimethylbut-2-ene`, correct: false, misconceptionId: "C02-M2", value: "nm_1_bromo_1_2_dimethylbut_2_ene" },
        { key: "C", text: t`4-bromo-3-methylpent-2-ene`, correct: true, value: "nm_4_bromo_3_methylpent_2_ene" },
        { key: "D", text: t`3-methyl-4-bromopent-2-ene`, correct: false, misconceptionId: "C02-M3", value: "nm_3_methyl_4_bromopent_2_ene" },
      ],
      solution: {
        steps: [
          t`The methyl on the C–Br carbon extends the chain: five carbons with a C=C.`,
          t`From the left the C=C is at 2; from the right at 3. Number from the left.`,
          t`Then methyl is on carbon 3 and Br on carbon 4.`,
          t`Alphabetically, bromo comes before methyl: 4-bromo-3-methylpent-2-ene.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (i-b)" },
      stem: t`The IUPAC name of $\ce{CH3-CH(Cl)-CH2-CH(C2H5)-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { n: "6", subs: "2:chloro,4:methyl", drawn: "5;;2:chloro,4:ethyl" } },
      options: [
        { key: "A", text: t`2-chloro-4-methylhexane`, correct: true, value: "nm_2_chloro_4_methylhexane" },
        { key: "B", text: t`4-methyl-2-chlorohexane`, correct: false, misconceptionId: "C02-M3", value: "nm_4_methyl_2_chlorohexane" },
        { key: "C", text: t`5-chloro-3-methylhexane`, correct: false, misconceptionId: "C02-M4", value: "nm_5_chloro_3_methylhexane" },
        { key: "D", text: t`2-chloro-4-ethylpentane`, correct: false, misconceptionId: "C02-M2", value: "nm_2_chloro_4_ethylpentane" },
      ],
      solution: {
        steps: [
          t`The ethyl group extends the chain: the longest chain has six carbons.`,
          t`From the left: Cl at 2, methyl at 4, set $\{2,4\}$. From the right: $\{3,5\}$.`,
          t`$\{2,4\}$ is lower, and chloro comes before methyl: 2-chloro-4-methylhexane.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (i-b)" },
      stem: t`The IUPAC name of $\ce{CH3-CH(CH3)-CH2-CH2-CHCl-C2H5}$ is`,
      verify: { kind: "value", inputs: {  }, params: { n: "7", subs: "2:methyl,5:chloro", drawn: "5;;2:methyl,5:chloro,5:ethyl" } },
      options: [
        { key: "A", text: t`2-methyl-5-chloroheptane`, correct: false, misconceptionId: "C02-M3", value: "nm_2_methyl_5_chloroheptane" },
        { key: "B", text: t`3-chloro-6-methylheptane`, correct: false, misconceptionId: "C02-M1", value: "nm_3_chloro_6_methylheptane" },
        { key: "C", text: t`1-chloro-1-ethyl-4-methylpentane`, correct: false, misconceptionId: "C02-M2", value: "nm_1_chloro_1_ethyl_4_methylpentane" },
        { key: "D", text: t`5-chloro-2-methylheptane`, correct: true, value: "nm_5_chloro_2_methylheptane" },
      ],
      solution: {
        steps: [
          t`The ethyl group extends the chain: the longest chain has seven carbons.`,
          t`From the left: methyl 2, Cl 5, set $\{2,5\}$. From the right: $\{3,6\}$.`,
          t`$\{2,5\}$ is lower, even though Cl gets 5 rather than 3.`,
          t`Alphabetically: 5-chloro-2-methylheptane.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`The IUPAC name of $\ce{(CH3)3C-CH2-CH(Br)-CH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { n: "5", subs: "2:methyl,2:methyl,4:bromo", drawn: "4;;1:methyl,1:methyl,1:methyl,3:bromo" } },
      options: [
        { key: "A", text: t`2,2-dimethyl-4-bromopentane`, correct: false, misconceptionId: "C02-M3", value: "nm_2_2_dimethyl_4_bromopentane" },
        { key: "B", text: t`4-bromo-2,2-dimethylpentane`, correct: true, value: "nm_4_bromo_2_2_dimethylpentane" },
        { key: "C", text: t`2-bromo-4,4-dimethylpentane`, correct: false, misconceptionId: "C02-M1", value: "nm_2_bromo_4_4_dimethylpentane" },
        { key: "D", text: t`3-bromo-1,1,1-trimethylbutane`, correct: false, misconceptionId: "C02-M2", value: "nm_3_bromo_1_1_1_trimethylbutane" },
      ],
      solution: {
        steps: [
          t`$\ce{(CH3)3C-}$ holds three methyls; one of them continues the chain: five carbons.`,
          t`From the left: methyls 2, 2, Br 4, set $\{2,2,4\}$. From the right: $\{2,4,4\}$.`,
          t`$\{2,2,4\}$ wins at the second term: 4-bromo-2,2-dimethylpentane.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (i-a)" },
      stem: t`The IUPAC name of $\ce{Cl-CH2-CH=CH-CH(CH3)2}$ is`,
      verify: { kind: "value", inputs: {  }, params: { n: "5", db: "2", subs: "1:chloro,4:methyl", drawn: "4;2;1:chloro,4:methyl,4:methyl" } },
      options: [
        { key: "A", text: t`1-chloro-4-methylpent-2-ene`, correct: true, value: "nm_1_chloro_4_methylpent_2_ene" },
        { key: "B", text: t`4-chloro-1,1-dimethylbut-2-ene`, correct: false, misconceptionId: "C02-M2", value: "nm_4_chloro_1_1_dimethylbut_2_ene" },
        { key: "C", text: t`4-methyl-1-chloropent-2-ene`, correct: false, misconceptionId: "C02-M3", value: "nm_4_methyl_1_chloropent_2_ene" },
        { key: "D", text: t`5-chloro-2-methylpent-3-ene`, correct: false, misconceptionId: "C02-M4", value: "nm_5_chloro_2_methylpent_3_ene" },
      ],
      solution: {
        steps: [
          t`One methyl of $\ce{CH(CH3)2}$ continues the chain: five carbons with a C=C.`,
          t`From the Cl end the C=C is at 2; from the other end at 3. Number from the Cl end.`,
          t`Then Cl is at 1 and methyl at 4: 1-chloro-4-methylpent-2-ene.`,
        ],
      },
    },
  ],
};
