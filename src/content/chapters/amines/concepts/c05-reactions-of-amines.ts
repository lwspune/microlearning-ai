import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Three test tubes hold ethylamine, diethylamine and triethylamine. One reagent, benzenesulfonyl chloride, can tell them apart. How?`,
    reveal: t`Ethylamine's product keeps an acidic N-H and dissolves in NaOH; diethylamine's product has no N-H left and does not; triethylamine does not react at all.`,
  },
  explanation: {
    intuition: [
      t`Amines react through the lone pair on N, and through the H atoms on N.`,
      t`The number of N-H bonds decides which reactions happen, so reactions tell the classes apart.`,
      t`Tertiary amines have no N-H, so they are not acylated and do not react with Hinsberg's reagent.`,
      t`Only primary amines give the carbylamine test and, if aliphatic, $\ce{N2}$ with nitrous acid.`,
    ],
    formal: [
      {
        title: "Alkylation and acylation",
        points: [
          t`Alkyl halides add one alkyl group per step, ending in a quaternary salt: $\ce{CH3NH2}$ needs 3 $\ce{CH3I}$ to give $\ce{(CH3)4N+I-}$.`,
          t`Acid chlorides and anhydrides replace an N-H hydrogen by an acyl group, giving amides.`,
          t`Primary and secondary amines are acylated; tertiary amines are not.`,
        ],
      },
      {
        title: "Tests",
        points: [
          t`**Carbylamine**: a primary amine, $\ce{CHCl3}$ and alcoholic KOH give a foul-smelling isocyanide, $\ce{RNC}$.`,
          t`**Nitrous acid**: primary aliphatic amines give an alcohol and $\ce{N2}$ gas; secondary amines give yellow N-nitrosamines.`,
          t`**Hinsberg's reagent** ($\ce{C6H5SO2Cl}$): the primary product dissolves in NaOH; the secondary does not; tertiary amines do not react.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many moles of $\ce{CH3Br}$ convert ethanamine into N,N-dimethylethanamine?`,
      steps: [
        t`Ethanamine, $\ce{C2H5NH2}$, has two N-H hydrogens.`,
        t`Each $\ce{CH3Br}$ replaces one of them.`,
      ],
      answer: t`2 mol`,
    },
    visualSpec: t`Line up primary, secondary and tertiary amines and run each test, watching which N-H hydrogens get used up.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Thinks secondary amines give $\ce{N2}$ with nitrous acid.`,
      remediation: t`Secondary amines give N-nitrosamines; only primary aliphatic amines release $\ce{N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Thinks tertiary amines give $\ce{N2}$ with nitrous acid.`,
      remediation: t`Tertiary aliphatic amines only form salts with nitrous acid; no $\ce{N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Thinks any amine with an N-H gives $\ce{N2}$.`,
      remediation: t`$\ce{N2}$ needs two H on N to leave as water: only primary amines.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks any amine with an N-H gives the carbylamine test.",
      remediation: t`The isocyanide $\ce{R-NC}$ needs N to lose both its H atoms: only primary amines.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks tertiary amines give the carbylamine test.",
      remediation: "Tertiary amines have no N-H, so no isocyanide can form.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks primary amines do not give the carbylamine test.",
      remediation: "The carbylamine test is the test for primary amines.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks acyl chlorides react only with secondary and tertiary amines.",
      remediation: "Acylation replaces an N-H hydrogen; primary amines have two and react readily.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks secondary amines have no replaceable hydrogen.",
      remediation: "A secondary amine has one N-H hydrogen, which an acyl group replaces.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks aniline is too weak a base to be acylated.",
      remediation: "Aniline is acylated readily: acetanilide is made this way.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks the sulfonamide from a secondary amine is acidic.",
      remediation: "It has no H left on N, so it does not dissolve in NaOH.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Thinks tertiary amines form sulfonamides.",
      remediation: "Tertiary amines have no N-H, so they do not react with Hinsberg's reagent.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks sulfonamides never dissolve in alkali.",
      remediation: "The primary sulfonamide keeps an acidic N-H and dissolves in NaOH as its salt.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Counts all four methyl groups on the quaternary N.",
      remediation: "Methylamine already carries one methyl group, so only three more are needed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: t`Thinks one $\ce{CH3I}$ gives the quaternary salt.`,
      remediation: t`Each $\ce{CH3I}$ adds one methyl group; three are needed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Counts only the two N-H hydrogens.",
      remediation: t`After both H are replaced, one more $\ce{CH3I}$ adds to the lone pair to make the salt.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (v)" },
      stem: t`Which type of aliphatic amine gives off nitrogen gas with nitrous acid ($\ce{NaNO2}$ + dil. HCl)?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitrous" } },
      options: [
        { key: "A", text: t`both primary and secondary amines`, correct: false, misconceptionId: "C05-M3", value: "primary_and_secondary" },
        { key: "B", text: t`tertiary amines`, correct: false, misconceptionId: "C05-M2", value: "tertiary" },
        { key: "C", text: t`secondary amines`, correct: false, misconceptionId: "C05-M1", value: "secondary" },
        { key: "D", text: t`primary amines`, correct: true, value: "primary" },
      ],
      solution: {
        steps: [
          t`$\ce{RNH2 + HNO2 -> ROH + N2 + H2O}$.`,
          t`Only primary aliphatic amines give $\ce{N2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (vi)" },
      stem: t`The carbylamine test (chloroform and alcoholic KOH) is given by`,
      verify: { kind: "value", inputs: {  }, params: { q: "carbylamine" } },
      options: [
        { key: "A", text: t`primary amines`, correct: true, value: "primary" },
        { key: "B", text: t`tertiary amines`, correct: false, misconceptionId: "C05-M5", value: "tertiary" },
        { key: "C", text: t`both secondary and tertiary amines`, correct: false, misconceptionId: "C05-M6", value: "secondary_and_tertiary" },
        { key: "D", text: t`secondary amines`, correct: false, misconceptionId: "C05-M4", value: "secondary" },
      ],
      solution: {
        steps: [
          t`The isocyanide $\ce{R-NC}$ forms when N loses both H atoms.`,
          t`Only primary amines have two.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (vii)" },
      stem: t`Which of these does not react with acetyl chloride?`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetyl" } },
      options: [
        { key: "A", text: t`ethylamine, $\ce{C2H5NH2}$`, correct: false, misconceptionId: "C05-M7", value: "ethylamine" },
        { key: "B", text: t`triethylamine, $\ce{(C2H5)3N}$`, correct: true, value: "triethylamine" },
        { key: "C", text: t`diethylamine, $\ce{(C2H5)2NH}$`, correct: false, misconceptionId: "C05-M8", value: "diethylamine" },
        { key: "D", text: t`aniline, $\ce{C6H5NH2}$`, correct: false, misconceptionId: "C05-M9", value: "aniline" },
      ],
      solution: {
        steps: [
          t`Acylation replaces an N-H hydrogen.`,
          t`Triethylamine has none, so it does not react.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (viii)" },
      stem: t`After reacting with Hinsberg's reagent (benzenesulfonyl chloride), which product dissolves in aqueous NaOH?`,
      verify: { kind: "value", inputs: {  }, params: { q: "hinsberg" } },
      options: [
        { key: "A", text: t`the one from triethylamine`, correct: false, misconceptionId: "C05-M11", value: "triethylamine" },
        { key: "B", text: t`none: sulfonamides never dissolve in alkali`, correct: false, misconceptionId: "C05-M12", value: "none" },
        { key: "C", text: t`the one from ethylamine`, correct: true, value: "ethylamine" },
        { key: "D", text: t`the one from diethylamine`, correct: false, misconceptionId: "C05-M10", value: "diethylamine" },
      ],
      solution: {
        steps: [
          t`Ethylamine gives $\ce{C6H5SO2NHC2H5}$, whose N-H is acidic.`,
          t`It dissolves in NaOH as a salt.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#15" },
      stem: t`How many moles of methyl iodide are needed to turn 1 mol of methylamine into tetramethylammonium iodide?`,
      verify: { kind: "value", inputs: {  }, params: { q: "methyl" } },
      options: [
        { key: "A", text: t`2`, correct: false, misconceptionId: "C05-M15", value: "two" },
        { key: "B", text: t`4`, correct: false, misconceptionId: "C05-M13", value: "four" },
        { key: "C", text: t`1`, correct: false, misconceptionId: "C05-M14", value: "one" },
        { key: "D", text: t`3`, correct: true, value: "three" },
      ],
      solution: {
        steps: [
          t`Two $\ce{CH3I}$ replace methylamine's two N-H hydrogens.`,
          t`A third adds to the lone pair: 3 mol in all.`,
        ],
      },
    },
  ],
};
