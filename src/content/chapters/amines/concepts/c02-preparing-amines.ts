import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Acetamide has two carbons. Treat it with bromine and alkali and you get methylamine, with one. Treat it with $\ce{LiAlH4}$ and you get ethylamine, with two. Where did the carbon go?`,
    reveal: t`In the Hofmann bromamide reaction the carbonyl carbon leaves as carbonate, so the amine has one carbon fewer. $\ce{LiAlH4}$ only removes the oxygen, keeping every carbon.`,
  },
  explanation: {
    intuition: [
      t`Amines are made by reducing nitrogen compounds or by putting nitrogen on a carbon chain.`,
      t`Reducing nitro compounds, nitriles and amides keeps or adds carbons.`,
      t`The Hofmann bromamide reaction removes one carbon.`,
      t`Alkyl halides with ammonia give a mixture; Gabriel synthesis gives pure primary amines.`,
    ],
    formal: [
      {
        title: "By reduction",
        points: [
          t`Nitro compounds: Sn/HCl or Fe/HCl turns $\ce{C6H5NO2}$ into aniline.`,
          t`Nitriles: $\ce{RCN}$ with Na/ethanol or $\ce{LiAlH4}$ gives $\ce{RCH2NH2}$.`,
          t`Amides: $\ce{LiAlH4}$ turns $\ce{RCONH2}$ into $\ce{RCH2NH2}$.`,
        ],
      },
      {
        title: "Hofmann bromamide degradation",
        points: [
          t`$\ce{RCONH2}$ with $\ce{Br2}$ and NaOH gives $\ce{RNH2}$.`,
          t`The amine has one carbon fewer than the amide.`,
          t`Acetamide gives methanamine.`,
        ],
      },
      {
        title: "From alkyl halides",
        points: [
          t`**Ammonolysis**: $\ce{RX}$ with $\ce{NH3}$ gives a mixture of primary, secondary, tertiary amines and a quaternary salt.`,
          t`**Gabriel synthesis**: potassium phthalimide with $\ce{RX}$, then hydrolysis, gives pure primary amines.`,
          t`Gabriel cannot make aniline: aryl halides do not substitute.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which amine forms when propanamide is treated with $\ce{Br2}$ and NaOH?`,
      steps: [
        t`Hofmann degradation removes the carbonyl carbon.`,
        t`$\ce{CH3CH2CONH2}$ becomes $\ce{CH3CH2NH2}$.`,
      ],
      answer: t`Ethanamine`,
    },
    visualSpec: t`Count the carbons from starting compound to amine for each route and see which keeps, adds or removes one.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks reducing a nitrile loses the nitrile carbon.",
      remediation: t`The CN carbon becomes $\ce{CH2}$; $\ce{RCN}$ gives $\ce{RCH2NH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Hydrolyses the starting compound to the acid instead.",
      remediation: "These reagents reduce or degrade; water and acid are needed for hydrolysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Stops the reduction at the aldehyde.",
      remediation: t`Na/ethanol and $\ce{LiAlH4}$ reduce nitriles all the way to amines.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Keeps all the carbons in the Hofmann bromamide reaction.",
      remediation: "The carbonyl carbon leaves, so the amine has one carbon fewer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Stops the Hofmann reaction at the N-bromoamide.",
      remediation: "The N-bromoamide rearranges and hydrolyses on to the amine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Confuses $\ce{LiAlH4}$ reduction of an amide with Hofmann degradation.`,
      remediation: t`$\ce{LiAlH4}$ keeps every carbon; only Hofmann degradation removes one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Thinks $\ce{LiAlH4}$ reduces an amide to an alcohol.`,
      remediation: t`The C-N bond stays; the amide's $\ce{C=O}$ becomes $\ce{CH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks Gabriel synthesis gives a mixture of amines.",
      remediation: "Phthalimide's N carries only one alkyl group, so only primary amines form.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks Gabriel synthesis can make aniline.",
      remediation: "Aryl halides do not undergo the needed substitution, so aniline cannot be made this way.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks ammonolysis gives only the primary amine.",
      remediation: "The amine formed is itself a nucleophile and reacts further, giving a mixture.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks ammonia removes HX, giving an alkene.",
      remediation: "Ammonia substitutes the halogen; elimination needs alcoholic KOH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks ammonia hydrolyses the halide like water.",
      remediation: "Ammonia's N attacks the carbon, giving amines, not alcohols.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks Gabriel synthesis gives secondary amines.",
      remediation: "Only one alkyl group goes onto phthalimide's N, so the product is primary.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#10" },
      stem: t`Propanenitrile (ethyl cyanide), $\ce{CH3CH2CN}$, is reduced with sodium and ethanol. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitrile" } },
      options: [
        { key: "A", text: t`ethanamine, $\ce{CH3CH2NH2}$`, correct: false, misconceptionId: "C02-M1", value: "ethanamine" },
        { key: "B", text: t`propan-1-amine, $\ce{CH3CH2CH2NH2}$`, correct: true, value: "propan_1_amine" },
        { key: "C", text: t`propanoic acid`, correct: false, misconceptionId: "C02-M2", value: "propanoic_acid" },
        { key: "D", text: t`propanal`, correct: false, misconceptionId: "C02-M3", value: "propanal" },
      ],
      solution: {
        steps: [
          t`Na/ethanol reduces $\ce{C#N}$ to $\ce{CH2NH2}$.`,
          t`$\ce{CH3CH2CN}$ gives $\ce{CH3CH2CH2NH2}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#6" },
      stem: t`Acetamide, $\ce{CH3CONH2}$, is warmed with bromine and aqueous NaOH (Hofmann bromamide degradation). The amine formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hofmann" } },
      options: [
        { key: "A", text: t`ethanamine, $\ce{CH3CH2NH2}$`, correct: false, misconceptionId: "C02-M4", value: "ethanamine" },
        { key: "B", text: t`none: the reaction stops at N-bromoacetamide`, correct: false, misconceptionId: "C02-M5", value: "n_bromoacetamide" },
        { key: "C", text: t`methanamine, $\ce{CH3NH2}$`, correct: true, value: "methanamine" },
        { key: "D", text: t`none: acetic acid forms`, correct: false, misconceptionId: "C02-M2", value: "acetic_acid" },
      ],
      solution: {
        steps: [
          t`Hofmann degradation removes the carbonyl carbon.`,
          t`$\ce{CH3CONH2}$ gives $\ce{CH3NH2}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#5" },
      stem: t`Acetamide is reduced with $\ce{LiAlH4}$ in ether. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "lialh4" } },
      options: [
        { key: "A", text: t`acetic acid, $\ce{CH3COOH}$`, correct: false, misconceptionId: "C02-M2", value: "acetic_acid" },
        { key: "B", text: t`ethanol, $\ce{CH3CH2OH}$`, correct: false, misconceptionId: "C02-M7", value: "ethanol" },
        { key: "C", text: t`methanamine, $\ce{CH3NH2}$`, correct: false, misconceptionId: "C02-M6", value: "methanamine" },
        { key: "D", text: t`ethanamine, $\ce{CH3CH2NH2}$`, correct: true, value: "ethanamine" },
      ],
      solution: {
        steps: [
          t`$\ce{LiAlH4}$ turns $\ce{C=O}$ into $\ce{CH2}$.`,
          t`$\ce{CH3CONH2}$ gives $\ce{CH3CH2NH2}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#1" },
      stem: t`Gabriel phthalimide synthesis is used to prepare`,
      verify: { kind: "value", inputs: {  }, params: { q: "gabriel" } },
      options: [
        { key: "A", text: t`pure primary aliphatic amines`, correct: true, value: "primary_only" },
        { key: "B", text: t`pure secondary amines`, correct: false, misconceptionId: "C02-M13", value: "secondary" },
        { key: "C", text: t`a mixture of primary, secondary and tertiary amines`, correct: false, misconceptionId: "C02-M8", value: "mixture" },
        { key: "D", text: t`primary amines, aniline included`, correct: false, misconceptionId: "C02-M9", value: "aniline_too" },
      ],
      solution: {
        steps: [
          t`Phthalimide's N takes one alkyl group.`,
          t`Hydrolysis frees a pure primary amine.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.3 (x)" },
      stem: t`Bromoethane is heated with alcoholic ammonia in a sealed tube (ammonolysis). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ammonolysis" } },
      options: [
        { key: "A", text: t`ethanol`, correct: false, misconceptionId: "C02-M12", value: "ethanol" },
        { key: "B", text: t`a mixture of primary, secondary and tertiary amines and a quaternary salt`, correct: true, value: "mixture" },
        { key: "C", text: t`ethanamine only`, correct: false, misconceptionId: "C02-M10", value: "ethylamine_only" },
        { key: "D", text: t`ethene`, correct: false, misconceptionId: "C02-M11", value: "ethene" },
      ],
      solution: {
        steps: [
          t`Ethylamine formed is itself a nucleophile.`,
          t`It reacts on: a mixture of amines and a quaternary salt.`,
        ],
      },
    },
  ],
};
