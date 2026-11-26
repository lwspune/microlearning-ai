import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Methanol, ethanol and propanol differ in size, yet all burn, all react with sodium and all form esters. What do they share?`,
    reveal: t`The OH functional group. It decides how they react, and they form a homologous series, each one $\ce{CH2}$ longer.`,
  },
  explanation: {
    intuition: [
      t`A **functional group** is the reactive part of a molecule.`,
      t`Compounds with the same group react alike.`,
      t`A **homologous series** shares a group and a general formula.`,
      t`Each member differs from the next by $\ce{CH2}$.`,
    ],
    formal: [
      {
        title: "Series",
        points: [
          t`Alkanes $\ce{C_nH_{2n+2}}$; alcohols $\ce{C_nH_{2n+1}OH}$.`,
          t`Successive members differ by $\ce{CH2}$, 14 u.`,
          t`Properties change gradually along a series.`,
        ],
      },
      {
        title: "Groups and rings",
        points: [
          t`–OH alcohol; –CHO aldehyde; >C=O ketone; –COOH acid; –O– ether.`,
          t`Carbocyclic (homocyclic) rings hold only C; heterocyclic rings include N, O or S.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the next homologue of $\ce{CH3CHO}$.`,
      steps: [
        t`Add one $\ce{CH2}$.`,
        t`$\ce{CH3CH2CHO}$, propanal.`,
      ],
      answer: t`$\ce{CH3CH2CHO}$`,
    },
    visualSpec: t`Line up the first members of a series and highlight the common group and the extra $\ce{CH2}$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Adds OH to the alkane formula.",
      remediation: t`OH replaces one H: $\ce{C_nH_{2n+1}OH}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Uses the alkene's H count.",
      remediation: t`Alcohols are saturated: $\ce{C_nH_{2n+1}OH}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Uses too few H.",
      remediation: t`$\ce{C_nH_{2n+1}OH}$ has $2n+2$ H in all.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Says $\ce{CH3}$.`,
      remediation: t`Members differ by one $\ce{CH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says one carbon only.",
      remediation: t`The carbon brings two hydrogens: $\ce{CH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Says $\ce{H2}$.`,
      remediation: t`A carbon is added too: $\ce{CH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Counts two steps.",
      remediation: t`Third higher: add three $\ce{CH2}$ units.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Counts one step.",
      remediation: "Third higher means three carbons more.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Changes the functional group.",
      remediation: "Homologues keep the same group: still an acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says aldehyde.",
      remediation: "An aldehyde C=O carries H; acetone's sits between two carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says ether.",
      remediation: "Ethers have C–O–C single bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says carboxylic acid.",
      remediation: "An acid needs COOH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Calls aniline heterocyclic.",
      remediation: "The ring holds only carbon; N is outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Calls it alicyclic.",
      remediation: "Benzene rings are aromatic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Calls it acyclic.",
      remediation: "Aniline has a benzene ring.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.15 (F)" },
      stem: t`The homologous series of alcohols has the general formula`,
      verify: { kind: "value", inputs: {  }, params: { q: "alcohols" } },
      options: [
        { key: "A", text: t`$\ce{C_nH_{2n+2}OH}$`, correct: false, misconceptionId: "C02-M1", value: "cn_h2n2_oh" },
        { key: "B", text: t`$\ce{C_nH_{2n+1}OH}$`, correct: true, value: "cn_h2n1_oh" },
        { key: "C", text: t`$\ce{C_nH_{2n}OH}$`, correct: false, misconceptionId: "C02-M2", value: "cn_h2n_oh" },
        { key: "D", text: t`$\ce{C_nH_{2n-1}OH}$`, correct: false, misconceptionId: "C02-M3", value: "cn_h2n_minus1_oh" },
      ],
      solution: {
        steps: [
          t`Alkane $\ce{C_nH_{2n+2}}$ with one H replaced by OH.`,
          t`$\ce{C_nH_{2n+1}OH}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.3" },
      stem: t`Successive members of a homologous series differ by`,
      verify: { kind: "value", inputs: {  }, params: { q: "differ" } },
      options: [
        { key: "A", text: t`a $\ce{CH3}$ group`, correct: false, misconceptionId: "C02-M4", value: "ch3" },
        { key: "B", text: t`one carbon atom only`, correct: false, misconceptionId: "C02-M5", value: "one_c" },
        { key: "C", text: t`a $\ce{CH2}$ group (14 u)`, correct: true, value: "ch2" },
        { key: "D", text: t`an $\ce{H2}$ unit`, correct: false, misconceptionId: "C02-M6", value: "h2" },
      ],
      solution: {
        steps: [
          t`Each member adds one carbon and two hydrogens.`,
          t`$\ce{CH2}$, 14 u.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.2" },
      stem: t`The third higher homologue of propanoic acid, $\ce{CH3CH2COOH}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "homologue" } },
      options: [
        { key: "A", text: t`hexanal`, correct: false, misconceptionId: "C02-M9", value: "hexanal" },
        { key: "B", text: t`butanoic acid`, correct: false, misconceptionId: "C02-M8", value: "butanoic" },
        { key: "C", text: t`pentanoic acid`, correct: false, misconceptionId: "C02-M7", value: "pentanoic" },
        { key: "D", text: t`hexanoic acid`, correct: true, value: "hexanoic" },
      ],
      solution: {
        steps: [
          t`Propanoic acid has 3 C.`,
          t`3 + 3 = 6 C: hexanoic acid.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (F)" },
      stem: t`The functional group in acetone, $\ce{CH3COCH3}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetone" } },
      options: [
        { key: "A", text: t`a ketone: C=O between two carbons`, correct: true, value: "ketone" },
        { key: "B", text: t`a carboxylic acid`, correct: false, misconceptionId: "C02-M12", value: "carboxylic" },
        { key: "C", text: t`an aldehyde`, correct: false, misconceptionId: "C02-M10", value: "aldehyde" },
        { key: "D", text: t`an ether`, correct: false, misconceptionId: "C02-M11", value: "ether" },
      ],
      solution: {
        steps: [
          t`C=O bonded to two carbons.`,
          t`A ketone.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.8 (D)" },
      stem: t`Aniline, $\ce{C6H5NH2}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "aniline" } },
      options: [
        { key: "A", text: t`an acyclic compound`, correct: false, misconceptionId: "C02-M15", value: "acyclic" },
        { key: "B", text: t`an aromatic carbocyclic compound, its N outside the ring`, correct: true, value: "carbocyclic_aromatic" },
        { key: "C", text: t`a heterocyclic compound`, correct: false, misconceptionId: "C02-M13", value: "heterocyclic" },
        { key: "D", text: t`an alicyclic compound`, correct: false, misconceptionId: "C02-M14", value: "alicyclic" },
      ],
      solution: {
        steps: [
          t`The ring is all carbon and aromatic.`,
          t`$\ce{NH2}$ is a substituent.`,
        ],
      },
    },
  ],
};
