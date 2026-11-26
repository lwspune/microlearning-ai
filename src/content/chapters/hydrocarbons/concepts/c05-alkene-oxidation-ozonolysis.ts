import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`An unknown alkene is treated with ozone and gives two molecules of ethanal. Without ever seeing the alkene, can we draw it?`,
    reveal: t`Yes. Ozonolysis cuts the C=C and puts an O on each half; joining the two ethanal carbons gives but-2-ene.`,
  },
  explanation: {
    intuition: [
      t`Mild oxidants add OH groups to the double bond.`,
      t`Strong oxidants and ozone split the double bond.`,
      t`Ozonolysis turns each half into a carbonyl compound.`,
      t`Working backwards from the carbonyls reveals the alkene.`,
    ],
    formal: [
      {
        title: "Oxidation",
        points: [
          t`Cold dilute alkaline $\ce{KMnO4}$: a 1,2-diol (pink colour vanishes, Baeyer's test).`,
          t`Hot acidic $\ce{KMnO4}$: splits C=C into acids, ketones or $\ce{CO2}$.`,
          t`But-2-ene → two ethanoic acid; $\ce{(CH3)2C=CH2}$ → acetone + $\ce{CO2}$.`,
        ],
      },
      {
        title: "Ozonolysis",
        points: [
          t`$\ce{O3}$, then Zn/water: each C=C carbon becomes C=O.`,
          t`Two ethanal → but-2-ene; acetone + ethanal → 2-methylbut-2-ene.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which alkene gives only acetone on ozonolysis?`,
      steps: [
        t`Join two acetone carbonyl carbons with C=C.`,
        t`$\ce{(CH3)2C=C(CH3)2}$.`,
      ],
      answer: t`2,3-dimethylbut-2-ene`,
    },
    visualSpec: t`Snip a double bond and cap each end with an oxygen, then reverse the process.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Picks alkaline $\ce{KMnO4}$.`,
      remediation: t`Cold alkaline $\ce{KMnO4}$ gives a diol; hot acidic splits the C=C.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks the hydration reagents.",
      remediation: t`$\ce{HgSO4}$/$\ce{H2SO4}$ hydrates alkynes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Picks NaOH/$\ce{H2O2}$.`,
      remediation: t`Splitting C=C into acetone and $\ce{CO2}$ needs acidic $\ce{KMnO4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Splits the C=C as with acid.",
      remediation: t`Cold dilute alkaline $\ce{KMnO4}$ only adds two OH.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Gives a ketone.",
      remediation: "Two OH groups are added: a diol.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Gives an alkyne.",
      remediation: "Oxidation adds OH; it does not remove H.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks but-1-ene.",
      remediation: "But-1-ene gives propanal and methanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks ethene.",
      remediation: "Ethene gives methanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks 2-methylpropene.",
      remediation: "That gives acetone and methanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks 2-methylpropene.",
      remediation: "That gives methanal, not ethanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks pent-2-ene.",
      remediation: "That gives ethanal and propanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks 3-methylbut-1-ene.",
      remediation: "That gives methanal and 2-methylpropanal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Gives the cold alkaline product.",
      remediation: t`Hot acidic $\ce{KMnO4}$ splits the C=C.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Stops at the aldehyde.",
      remediation: t`Acidic $\ce{KMnO4}$ oxidises aldehydes on to acids.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: t`Gives only $\ce{CO2}$.`,
      remediation: t`Only terminal $\ce{CH2}$ becomes $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.1 (C)" },
      stem: t`$\ce{(CH3)2C=CH2}$ → $\ce{CH3COCH3 + CO2 + H2O}$. The reagent is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acid_kmno4" } },
      options: [
        { key: "A", text: t`NaOH with $\ce{H2O2}$`, correct: false, misconceptionId: "C05-M3", value: "naoh_h2o2" },
        { key: "B", text: t`dil. $\ce{H2SO4}$ with 1 % $\ce{HgSO4}$`, correct: false, misconceptionId: "C05-M2", value: "hgso4_h2so4" },
        { key: "C", text: t`cold dilute alkaline $\ce{KMnO4}$`, correct: false, misconceptionId: "C05-M1", value: "alkaline_kmno4" },
        { key: "D", text: t`hot $\ce{KMnO4}$ with $\ce{H+}$`, correct: true, value: "acidic_kmno4" },
      ],
      solution: {
        steps: [
          t`The C=C is split; the $\ce{CH2}$ end becomes $\ce{CO2}$.`,
          t`Hot acidic $\ce{KMnO4}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (O)" },
      stem: t`But-2-ene is treated with cold, dilute alkaline $\ce{KMnO4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cold_alkaline" } },
      options: [
        { key: "A", text: t`butane-2,3-diol`, correct: true, value: "butane_2_3_diol" },
        { key: "B", text: t`butanone`, correct: false, misconceptionId: "C05-M5", value: "butanone" },
        { key: "C", text: t`but-2-yne`, correct: false, misconceptionId: "C05-M6", value: "but_2_yne" },
        { key: "D", text: t`ethanoic acid`, correct: false, misconceptionId: "C05-M4", value: "ethanoic_acid" },
      ],
      solution: {
        steps: [
          t`Cold dilute alkaline $\ce{KMnO4}$ adds two OH.`,
          t`Butane-2,3-diol.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (L)" },
      stem: t`An alkene gives 2 mol of ethanal on ozonolysis. The alkene is`,
      verify: { kind: "value", inputs: {  }, params: { q: "two_ethanal" } },
      options: [
        { key: "A", text: t`but-1-ene`, correct: false, misconceptionId: "C05-M7", value: "but_1_ene" },
        { key: "B", text: t`but-2-ene`, correct: true, value: "but_2_ene" },
        { key: "C", text: t`ethene`, correct: false, misconceptionId: "C05-M8", value: "ethene" },
        { key: "D", text: t`2-methylpropene`, correct: false, misconceptionId: "C05-M9", value: "methylpropene" },
      ],
      solution: {
        steps: [
          t`Join the two ethanal carbonyl carbons.`,
          t`$\ce{CH3CH=CHCH3}$: but-2-ene.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (M)" },
      stem: t`An alkene gives acetone and acetaldehyde on ozonolysis. The alkene is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetone_ethanal" } },
      options: [
        { key: "A", text: t`pent-2-ene`, correct: false, misconceptionId: "C05-M11", value: "pent_2_ene" },
        { key: "B", text: t`3-methylbut-1-ene`, correct: false, misconceptionId: "C05-M12", value: "methylbut_1_ene_3" },
        { key: "C", text: t`2-methylbut-2-ene`, correct: true, value: "methylbut_2_ene_2" },
        { key: "D", text: t`2-methylpropene`, correct: false, misconceptionId: "C05-M10", value: "methylpropene" },
      ],
      solution: {
        steps: [
          t`Join acetone's and ethanal's carbonyl carbons.`,
          t`$\ce{(CH3)2C=CHCH3}$: 2-methylbut-2-ene.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (O)" },
      stem: t`But-2-ene is heated with acidic $\ce{KMnO4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acid_but2ene" } },
      options: [
        { key: "A", text: t`only $\ce{CO2}$`, correct: false, misconceptionId: "C05-M15", value: "co2_only" },
        { key: "B", text: t`butane-2,3-diol`, correct: false, misconceptionId: "C05-M13", value: "butane_2_3_diol" },
        { key: "C", text: t`ethanal`, correct: false, misconceptionId: "C05-M14", value: "ethanal" },
        { key: "D", text: t`ethanoic acid`, correct: true, value: "ethanoic_acid" },
      ],
      solution: {
        steps: [
          t`Each half, $\ce{CH3CH}$=, becomes $\ce{CH3COOH}$.`,
          t`Ethanoic acid.`,
        ],
      },
    },
  ],
};
