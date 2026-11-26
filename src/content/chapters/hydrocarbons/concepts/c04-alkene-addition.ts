import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`HBr can add to propene two ways, giving 1-bromopropane or 2-bromopropane. Nature prefers one, unless a trace of peroxide is present. Why?`,
    reveal: t`Normally H goes to the carbon with more H (Markovnikov), giving 2-bromopropane. Peroxide switches the mechanism to radicals, reversing the outcome for HBr.`,
  },
  explanation: {
    intuition: [
      t`The π bond of an alkene opens to add reagents.`,
      t`Alkenes add $\ce{H2}$, halogens, hydrogen halides and water.`,
      t`Unsymmetrical reagents follow Markovnikov's rule.`,
      t`HBr with peroxide adds the other way.`,
    ],
    formal: [
      {
        title: "Additions",
        points: [
          t`$\ce{H2}$/Ni → alkane; $\ce{Br2}$ → dibromide (bromine water decolourised).`,
          t`Markovnikov: H adds to the carbon with more H.`,
          t`Cold conc. $\ce{H2SO4}$, then water: propene → propan-2-ol.`,
        ],
      },
      {
        title: "Peroxide effect",
        points: [
          t`HBr + peroxide: anti-Markovnikov, Br on the carbon with more H.`,
          t`Propene → 1-bromopropane; 2-methylpropene → 1-bromo-2-methylpropane.`,
          t`Only HBr shows the peroxide effect.`,
        ],
      },
    ],
    worked: {
      prompt: t`What forms when 2-methylpropene reacts with HCl?`,
      steps: [
        t`H adds to the $\ce{CH2}$ carbon.`,
        t`Cl goes to the carbon with two methyls.`,
      ],
      answer: t`2-chloro-2-methylpropane`,
    },
    visualSpec: t`Add HBr across a C=C and place H and Br by Markovnikov's rule, then with peroxide.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Adds anti-Markovnikov without peroxide.",
      remediation: t`Without peroxide, H adds to $\ce{CH2}$: 2-bromopropane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Adds $\ce{Br2}$ instead.`,
      remediation: "HBr adds one H and one Br.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Reduces the alkene.",
      remediation: "HBr adds H and Br, not two H.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Ignores the peroxide.",
      remediation: "Peroxide reverses HBr addition.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Adds $\ce{Br2}$.`,
      remediation: "Only one Br is added from HBr.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Gives an alcohol.",
      remediation: "HBr adds Br, not OH.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Reduces the alkene.",
      remediation: "HBr adds H and Br.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Adds $\ce{Br2}$.`,
      remediation: "One Br only.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Adds water anti-Markovnikov.",
      remediation: "OH goes to the carbon with fewer H: propan-2-ol.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Reduces the alkene.",
      remediation: "Water adds, giving an alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Oxidises to an aldehyde.",
      remediation: "Hydration gives an alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks Br substitutes.",
      remediation: "Bromine adds across the double bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks bromine is only reduced.",
      remediation: "Br₂ joins the molecule as a dibromide.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks bromine dissolves.",
      remediation: "Bromine reacts, adding across C=C.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.4 (b)" },
      stem: t`Propene reacts with HBr (no peroxide). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "markovnikov" } },
      options: [
        { key: "A", text: t`1,2-dibromopropane`, correct: false, misconceptionId: "C04-M2", value: "dibromo" },
        { key: "B", text: t`2-bromopropane`, correct: true, value: "bromo_2" },
        { key: "C", text: t`propane`, correct: false, misconceptionId: "C04-M3", value: "propane" },
        { key: "D", text: t`1-bromopropane`, correct: false, misconceptionId: "C04-M1", value: "bromo_1" },
      ],
      solution: {
        steps: [
          t`H adds to the $\ce{CH2}$ end.`,
          t`2-bromopropane.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "authored" },
      stem: t`Propene reacts with HBr in the presence of a peroxide. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "peroxide" } },
      options: [
        { key: "A", text: t`2-bromopropane`, correct: false, misconceptionId: "C04-M4", value: "bromo_2" },
        { key: "B", text: t`1,2-dibromopropane`, correct: false, misconceptionId: "C04-M5", value: "dibromo" },
        { key: "C", text: t`1-bromopropane`, correct: true, value: "bromo_1" },
        { key: "D", text: t`propan-1-ol`, correct: false, misconceptionId: "C04-M6", value: "propanol_1" },
      ],
      solution: {
        steps: [
          t`Peroxide reverses the addition.`,
          t`1-bromopropane.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.4 (a)" },
      stem: t`2-Methylpropene, $\ce{(CH3)2C=CH2}$, reacts with HBr in the presence of a peroxide. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "isobutene" } },
      options: [
        { key: "A", text: t`2-methylpropane`, correct: false, misconceptionId: "C04-M7", value: "methylpropane" },
        { key: "B", text: t`1,2-dibromo-2-methylpropane`, correct: false, misconceptionId: "C04-M8", value: "dibromo" },
        { key: "C", text: t`2-bromo-2-methylpropane`, correct: false, misconceptionId: "C04-M4", value: "bromo_2_methyl_2" },
        { key: "D", text: t`1-bromo-2-methylpropane`, correct: true, value: "bromo_1_methyl_2" },
      ],
      solution: {
        steps: [
          t`With peroxide, Br goes to the $\ce{CH2}$ end.`,
          t`1-bromo-2-methylpropane.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (F)" },
      stem: t`Propene is treated with cold conc. $\ce{H2SO4}$, then warmed with water. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydration" } },
      options: [
        { key: "A", text: t`propan-2-ol`, correct: true, value: "propan_2_ol" },
        { key: "B", text: t`propane`, correct: false, misconceptionId: "C04-M10", value: "propane" },
        { key: "C", text: t`propanal`, correct: false, misconceptionId: "C04-M11", value: "propanal" },
        { key: "D", text: t`propan-1-ol`, correct: false, misconceptionId: "C04-M9", value: "propan_1_ol" },
      ],
      solution: {
        steps: [
          t`H to $\ce{CH2}$, $\ce{OSO3H}$ to the middle carbon, then hydrolysed.`,
          t`Propan-2-ol.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`Ethene decolourises bromine water because`,
      verify: { kind: "value", inputs: {  }, params: { q: "bromine_water" } },
      options: [
        { key: "A", text: t`bromine dissolves in ethene`, correct: false, misconceptionId: "C04-M14", value: "dissolves" },
        { key: "B", text: t`bromine adds across the C=C bond`, correct: true, value: "adds" },
        { key: "C", text: t`bromine replaces a hydrogen atom`, correct: false, misconceptionId: "C04-M12", value: "substitutes" },
        { key: "D", text: t`bromine is only reduced to HBr`, correct: false, misconceptionId: "C04-M13", value: "reduced_only" },
      ],
      solution: {
        steps: [
          t`$\ce{Br2}$ adds across C=C.`,
          t`The colour disappears.`,
        ],
      },
    },
  ],
};
