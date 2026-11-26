import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`2-Bromobutane loses HBr to give an alkene. The double bond could form on either side. Which way does it go?`,
    reveal: t`Mostly towards the more substituted alkene, but-2-ene: Saytzeff's rule.`,
  },
  explanation: {
    intuition: [
      t`Alkenes are made by removing small molecules from saturated compounds.`,
      t`Alcoholic KOH removes HX from alkyl halides.`,
      t`Hot concentrated acid removes water from alcohols.`,
      t`Zinc removes two halogens from neighbouring carbons.`,
    ],
    formal: [
      {
        title: "Elimination",
        points: [
          t`Dehydrohalogenation: RX + alc. KOH → alkene.`,
          t`Dehydration: alcohol + hot conc. $\ce{H2SO4}$ → alkene.`,
          t`Saytzeff: the more substituted alkene is the major product.`,
          t`Dehalogenation: vicinal dihalide + Zn → alkene.`,
        ],
      },
      {
        title: "Geometrical isomers",
        points: [
          t`Each C=C carbon must carry two different groups.`,
          t`$\ce{CH2=}$ or $\ce{(CH3)2C=}$ ends rule out cis-trans isomers.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which alkene forms when ethanol is heated with conc. $\ce{H2SO4}$ at 443 K?`,
      steps: [
        t`Water is removed from ethanol.`,
        t`$\ce{CH2=CH2}$.`,
      ],
      answer: t`Ethene`,
    },
    visualSpec: t`Remove H and X from neighbouring carbons and see which alkene can form.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Expects reduction.",
      remediation: "Alcoholic KOH removes HCl.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Removes two HX.",
      remediation: "A monohalide loses one HX: an alkene.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Expects substitution by OH.",
      remediation: "Aqueous KOH substitutes; alcoholic KOH eliminates.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Expects reduction.",
      remediation: "Hot acid dehydrates the alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Expects an ether.",
      remediation: "Ethers form at lower temperatures; at 373 K with 60 % acid, an alkene forms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Expects oxidation.",
      remediation: "Sulfuric acid here dehydrates, not oxidises.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks the less substituted alkene.",
      remediation: "Saytzeff: the more substituted but-2-ene is major.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Expects reduction.",
      remediation: "Alcoholic KOH eliminates HBr.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Expects substitution.",
      remediation: "Alcoholic KOH favours elimination.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: t`Picks a $\ce{=CH2}$ alkene.`,
      remediation: "Two H on one carbon rule out cis-trans.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks an alkene with two methyls on one carbon.",
      remediation: "Identical groups on one carbon rule out cis-trans.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks none.",
      remediation: "In option c each carbon has a methyl and an ethyl.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Expects reduction.",
      remediation: "Zinc removes both Br atoms, leaving a C=C.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Removes too much.",
      remediation: "Removing two Br gives one double bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Expects a diol.",
      remediation: "Zinc removes Br; no OH is added.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.1 (E)" },
      stem: t`1-Chloropropane is heated with alcoholic KOH. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "chloropropane" } },
      options: [
        { key: "A", text: t`propyne`, correct: false, misconceptionId: "C03-M2", value: "propyne" },
        { key: "B", text: t`propan-1-ol`, correct: false, misconceptionId: "C03-M3", value: "propanol" },
        { key: "C", text: t`propane`, correct: false, misconceptionId: "C03-M1", value: "propane" },
        { key: "D", text: t`propene`, correct: true, value: "propene" },
      ],
      solution: {
        steps: [
          t`Alcoholic KOH removes HCl.`,
          t`Propene.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.3 (b)" },
      stem: t`Propan-2-ol is heated with 60 % $\ce{H2SO4}$ at 373 K. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "dehydration" } },
      options: [
        { key: "A", text: t`propene`, correct: true, value: "propene" },
        { key: "B", text: t`propanal`, correct: false, misconceptionId: "C03-M6", value: "propanal" },
        { key: "C", text: t`diisopropyl ether`, correct: false, misconceptionId: "C03-M5", value: "ether" },
        { key: "D", text: t`propane`, correct: false, misconceptionId: "C03-M4", value: "propane" },
      ],
      solution: {
        steps: [
          t`Hot acid removes water.`,
          t`Propene.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`2-Bromobutane is heated with alcoholic KOH. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "saytzeff" } },
      options: [
        { key: "A", text: t`but-1-ene`, correct: false, misconceptionId: "C03-M7", value: "but_1_ene" },
        { key: "B", text: t`but-2-ene`, correct: true, value: "but_2_ene" },
        { key: "C", text: t`butan-2-ol`, correct: false, misconceptionId: "C03-M9", value: "butan_2_ol" },
        { key: "D", text: t`butane`, correct: false, misconceptionId: "C03-M8", value: "butane" },
      ],
      solution: {
        steps: [
          t`H can leave C1 or C3.`,
          t`The more substituted but-2-ene is major.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (J)" },
      stem: t`Which alkene shows geometrical isomerism?`,
      verify: { kind: "value", inputs: {  }, params: { q: "geometric" } },
      options: [
        { key: "A", text: t`$\ce{(CH3)2C=CH2}$`, correct: false, misconceptionId: "C03-M11", value: "option_b" },
        { key: "B", text: t`none of these`, correct: false, misconceptionId: "C03-M12", value: "none" },
        { key: "C", text: t`$\ce{CH3-C(C2H5)=C(C2H5)-CH3}$`, correct: true, value: "option_c" },
        { key: "D", text: t`$\ce{CH3CH2-C(=CH2)-CH3}$`, correct: false, misconceptionId: "C03-M10", value: "option_a" },
      ],
      solution: {
        steps: [
          t`Each C=C carbon has $\ce{CH3}$ and $\ce{C2H5}$.`,
          t`Cis and trans forms exist.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.5" },
      stem: t`1,2-Dibromopropane is heated with zinc dust. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "dehalogenation" } },
      options: [
        { key: "A", text: t`propane-1,2-diol`, correct: false, misconceptionId: "C03-M15", value: "diol" },
        { key: "B", text: t`propane`, correct: false, misconceptionId: "C03-M13", value: "propane" },
        { key: "C", text: t`propyne`, correct: false, misconceptionId: "C03-M14", value: "propyne" },
        { key: "D", text: t`propene`, correct: true, value: "propene" },
      ],
      solution: {
        steps: [
          t`Zn removes both Br atoms.`,
          t`Propene.`,
        ],
      },
    },
  ],
};
