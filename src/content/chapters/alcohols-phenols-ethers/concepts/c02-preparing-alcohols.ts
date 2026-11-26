import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Water adds to propene in acid to give propan-2-ol. Yet a two-step route with borane gives propan-1-ol instead. How can the same alkene put OH on different carbons?`,
    reveal: t`Acid adds $\ce{H+}$ first, making the more stable carbocation, so OH lands on the middle carbon (Markovnikov). Borane adds B to the end carbon, which then becomes OH (anti-Markovnikov).`,
  },
  explanation: {
    intuition: [
      t`Alcohols are made by adding water to alkenes, or by reducing carbonyl compounds.`,
      t`The route decides which carbon gets the OH.`,
      t`Grignard reagents add a carbon group to a carbonyl carbon, building a bigger alcohol.`,
      t`The carbonyl carbon always becomes the carbon that holds the OH.`,
    ],
    formal: [
      {
        title: "From alkenes",
        points: [
          t`**Acid-catalysed hydration**: dilute $\ce{H2SO4}$ adds $\ce{H2O}$ by Markovnikov's rule.`,
          t`Propene gives propan-2-ol.`,
          t`**Hydroboration-oxidation**: $\ce{B2H6}$, then $\ce{H2O2}$ and $\ce{NaOH}$, adds OH to the less substituted carbon.`,
          t`Propene gives propan-1-ol.`,
        ],
      },
      {
        title: "Reducing carbonyl compounds",
        points: [
          t`$\ce{NaBH4}$ or $\ce{LiAlH4}$ (or $\ce{H2}$ over Ni) adds hydrogen across $\ce{C=O}$.`,
          t`Aldehydes give primary alcohols; ketones give secondary alcohols.`,
          t`Propanone, $\ce{CH3COCH3}$, gives propan-2-ol.`,
          t`$\ce{LiAlH4}$ also reduces carboxylic acids and esters to primary alcohols.`,
        ],
      },
      {
        title: "Grignard reagents and carbonyls",
        points: [
          t`$\ce{RMgX}$ adds its R group to the carbonyl carbon; water then gives the alcohol.`,
          t`Methanal, $\ce{HCHO}$, gives a **primary** alcohol with one carbon more than R.`,
          t`Other aldehydes give **secondary** alcohols; ketones give **tertiary** ones.`,
          t`$\ce{CH3CHO + CH3MgBr}$, then water, gives propan-2-ol.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which alcohol forms when propanone reacts with $\ce{CH3MgBr}$ and the product is hydrolysed?`,
      steps: [
        t`$\ce{CH3-}$ adds to the carbonyl carbon of $\ce{CH3COCH3}$.`,
        t`That carbon now carries three methyl groups and, after water, an OH.`,
        t`$\ce{(CH3)3C-OH}$: a tertiary alcohol.`,
      ],
      answer: t`2-Methylpropan-2-ol`,
    },
    visualSpec: t`Choose a carbonyl compound and a Grignard reagent, snap the R group onto the carbonyl carbon, and read off the alcohol's class.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Swaps the two hydrations: thinks acid gives the anti-Markovnikov alcohol and hydroboration the Markovnikov one.",
      remediation: "Acid hydration puts OH on the more substituted carbon; hydroboration-oxidation puts it on the less substituted one.",
      fallback: { kind: "ext", topic: "addition to alkenes (Std XI Chemistry)" },
    },
    {
      id: "C02-M2",
      mistake: t`Thinks a hydride reducer such as $\ce{LiAlH4}$ adds water to an alkene.`,
      remediation: t`$\ce{LiAlH4}$ reduces $\ce{C=O}$ groups; it does not hydrate a $\ce{C=C}$ bond.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks hydrogen with a catalyst turns an alkene into an alcohol.",
      remediation: t`$\ce{H2}$ over Pd or Ni adds only hydrogen: an alkene becomes an alkane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks hydroboration-oxidation stops at an aldehyde.",
      remediation: t`$\ce{H2O2}$ and $\ce{NaOH}$ replace the boron by OH, giving the alcohol directly.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Loses track of the carbonyl carbon: puts the OH on the end of the chain, or leaves that carbon out.",
      remediation: "The carbonyl carbon itself becomes the carbon that carries the OH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks a Grignard reagent only reduces the carbonyl, adding no carbon.",
      remediation: t`$\ce{RMgX}$ adds its R group to the carbonyl carbon, so the alcohol gains R's carbons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Thinks every aldehyde gives a secondary alcohol with $\ce{RMgX}$, or that two R groups add.`,
      remediation: "Methanal gives a primary alcohol, other aldehydes secondary ones; only one R group adds to an aldehyde.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Thinks $\ce{NaBH4}$ removes the oxygen completely.`,
      remediation: t`$\ce{NaBH4}$ adds hydrogen across $\ce{C=O}$, giving $\ce{C-OH}$; it does not remove the oxygen.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Thinks $\ce{NaBH4}$ reduces only aldehydes.`,
      remediation: t`$\ce{NaBH4}$ reduces both aldehydes and ketones: ketones give secondary alcohols.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (ii)" },
      stem: t`Which reagent best converts 1-methylcyclohex-1-ene into 2-methylcyclohexan-1-ol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "reagent" } },
      options: [
        { key: "A", text: t`$\ce{B2H6}$, then $\ce{H2O2}$ and $\ce{NaOH}$`, correct: true, value: "hydroboration" },
        { key: "B", text: t`Conc. $\ce{H2SO4}$ and water`, correct: false, misconceptionId: "C02-M1", value: "acid_hydration" },
        { key: "C", text: t`$\ce{LiAlH4}$`, correct: false, misconceptionId: "C02-M2", value: "lialh4" },
        { key: "D", text: t`$\ce{H2}$ over Pd`, correct: false, misconceptionId: "C02-M3", value: "h2_pd" },
      ],
      solution: {
        steps: [
          t`The OH must go on C2, the less substituted carbon of the double bond.`,
          t`That is anti-Markovnikov addition: hydroboration-oxidation.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.2 (i)" },
      stem: t`Hydroboration-oxidation of propene, $\ce{CH3-CH=CH2}$, gives`,
      verify: { kind: "value", inputs: {  }, params: { q: "propene" } },
      options: [
        { key: "A", text: t`propan-2-ol, $\ce{CH3CH(OH)CH3}$`, correct: false, misconceptionId: "C02-M1", value: "propan_2_ol" },
        { key: "B", text: t`propane, $\ce{CH3CH2CH3}$`, correct: false, misconceptionId: "C02-M3", value: "propane" },
        { key: "C", text: t`propanal, $\ce{CH3CH2CHO}$`, correct: false, misconceptionId: "C02-M4", value: "propanal" },
        { key: "D", text: t`propan-1-ol, $\ce{CH3CH2CH2OH}$`, correct: true, value: "propan_1_ol" },
      ],
      solution: {
        steps: [
          t`Boron adds to the end carbon, $\ce{CH2}$, and is replaced by OH.`,
          t`So propene gives propan-1-ol.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#2" },
      stem: t`Acetaldehyde, $\ce{CH3CHO}$, reacts with $\ce{CH3MgBr}$ in dry ether, and the product is hydrolysed. The alcohol formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "grig_ald" } },
      options: [
        { key: "A", text: t`2-methylpropan-2-ol, $\ce{(CH3)3COH}$`, correct: false, misconceptionId: "C02-M7", value: "methylpropan_2_ol" },
        { key: "B", text: t`propan-2-ol, $\ce{CH3CH(OH)CH3}$`, correct: true, value: "propan_2_ol" },
        { key: "C", text: t`propan-1-ol, $\ce{CH3CH2CH2OH}$`, correct: false, misconceptionId: "C02-M5", value: "propan_1_ol" },
        { key: "D", text: t`ethanol, $\ce{CH3CH2OH}$`, correct: false, misconceptionId: "C02-M6", value: "ethanol" },
      ],
      solution: {
        steps: [
          t`$\ce{CH3-}$ adds to the carbonyl carbon of $\ce{CH3CHO}$.`,
          t`That carbon ends with two methyl groups and an OH: $\ce{CH3CH(OH)CH3}$.`,
          t`So the product is propan-2-ol.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#5" },
      stem: t`Propanone, $\ce{CH3COCH3}$, is reduced with sodium borohydride, $\ce{NaBH4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nabh4" } },
      options: [
        { key: "A", text: t`no change: $\ce{NaBH4}$ does not reduce ketones`, correct: false, misconceptionId: "C02-M9", value: "unchanged" },
        { key: "B", text: t`propan-1-ol, $\ce{CH3CH2CH2OH}$`, correct: false, misconceptionId: "C02-M5", value: "propan_1_ol" },
        { key: "C", text: t`propan-2-ol, $\ce{CH3CH(OH)CH3}$`, correct: true, value: "propan_2_ol" },
        { key: "D", text: t`propane, $\ce{CH3CH2CH3}$`, correct: false, misconceptionId: "C02-M8", value: "propane" },
      ],
      solution: {
        steps: [
          t`$\ce{NaBH4}$ adds hydrogen across $\ce{C=O}$ of the ketone.`,
          t`$\ce{CH3COCH3}$ becomes $\ce{CH3CH(OH)CH3}$, propan-2-ol.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Methanal, $\ce{HCHO}$, reacts with $\ce{CH3CH2MgBr}$ in dry ether, and the product is hydrolysed. The alcohol formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "grig_hcho" } },
      options: [
        { key: "A", text: t`propan-1-ol, $\ce{CH3CH2CH2OH}$, a primary alcohol`, correct: true, value: "propan_1_ol" },
        { key: "B", text: t`ethanol, $\ce{CH3CH2OH}$`, correct: false, misconceptionId: "C02-M5", value: "ethanol_ch" },
        { key: "C", text: t`propan-2-ol, $\ce{CH3CH(OH)CH3}$, a secondary alcohol`, correct: false, misconceptionId: "C02-M7", value: "propan_2_ol" },
        { key: "D", text: t`methanol, $\ce{CH3OH}$`, correct: false, misconceptionId: "C02-M6", value: "methanol" },
      ],
      solution: {
        steps: [
          t`$\ce{CH3CH2-}$ adds to the carbon of $\ce{HCHO}$.`,
          t`After water: $\ce{CH3CH2-CH2OH}$, propan-1-ol, a primary alcohol.`,
        ],
      },
    },
  ],
};
