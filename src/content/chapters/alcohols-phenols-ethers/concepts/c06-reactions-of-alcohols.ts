import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A breath test for alcohol once used orange dichromate that turned green. Methanol, ethanol and propan-2-ol turn it green, but 2-methylpropan-2-ol does not. Why does one alcohol refuse?`,
    reveal: t`Oxidising an alcohol removes the H from the carbon carrying OH. 2-Methylpropan-2-ol is tertiary: that carbon has no H, so it resists.`,
  },
  explanation: {
    intuition: [
      t`Alcohols react in three main ways: losing water, losing hydrogen, or swapping OH for a halogen.`,
      t`Losing water gives an alkene (**dehydration**).`,
      t`Losing hydrogen from O-H and the next C-H gives a carbonyl compound (**oxidation**).`,
      t`Replacing OH by a halogen gives an alkyl halide.`,
    ],
    formal: [
      {
        title: "Dehydration",
        points: [
          t`Heated with conc. $\ce{H2SO4}$ (or $\ce{Al2O3}$), alcohols lose water to give alkenes.`,
          t`Tertiary alcohols dehydrate most easily, primary ones least.`,
          t`When there is a choice, the more substituted alkene forms mainly (Saytzeff).`,
          t`Butan-2-ol gives mainly but-2-ene, less but-1-ene.`,
        ],
      },
      {
        title: "Oxidation",
        points: [
          t`Oxidation needs a hydrogen on the carbon that carries OH.`,
          t`Primary alcohols give aldehydes (PCC stops here), then carboxylic acids with $\ce{K2Cr2O7}$/$\ce{H+}$.`,
          t`Secondary alcohols give ketones.`,
          t`Tertiary alcohols have no such H and resist oxidation.`,
        ],
      },
      {
        title: "Making alkyl halides",
        points: [
          t`With HX: $\ce{ROH + HX -> RX + H2O}$; tertiary alcohols react fastest.`,
          t`With $\ce{PCl5}$: $\ce{ROH + PCl5}$ $\ce{-> RCl + POCl3 + HCl}$.`,
          t`With $\ce{SOCl2}$: $\ce{ROH + SOCl2}$ $\ce{-> RCl + SO2 + HCl}$; the by-products are gases.`,
        ],
      },
    ],
    worked: {
      prompt: t`What forms when (a) propan-2-ol and (b) propan-1-ol are oxidised with PCC?`,
      steps: [
        t`(a) Propan-2-ol is secondary: it gives the ketone propanone.`,
        t`(b) Propan-1-ol is primary: PCC stops at the aldehyde, propanal.`,
      ],
      answer: t`(a) Propanone, $\ce{CH3COCH3}$; (b) propanal, $\ce{CH3CH2CHO}$`,
    },
    visualSpec: t`Count the hydrogens on the carbon carrying OH, then try to oxidise primary, secondary and tertiary alcohols in turn.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Reverses the Saytzeff rule: thinks the less substituted alkene forms mainly.",
      remediation: "The more substituted alkene is more stable and is the major product.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks the reagent gives an ether, leaves the alcohol unchanged, or simply moves the OH.",
      remediation: t`Conc. $\ce{H2SO4}$ on heating removes water to give an alkene; PCC oxidises; $\ce{SOCl2}$ substitutes Cl.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks tertiary alcohols oxidise most easily.",
      remediation: "Oxidation needs an H on the carbon carrying OH; a tertiary alcohol has none, so it resists.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks PCC oxidises a primary alcohol all the way to the acid.",
      remediation: "PCC is mild: it stops at the aldehyde; acidified dichromate goes on to the acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks oxidation burns the alcohol completely.",
      remediation: t`Mild oxidising agents remove just two hydrogens, giving a carbonyl compound, not $\ce{CO2}$ and water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Thinks only $\ce{PCl5}$ converts alcohols into chlorides.`,
      remediation: t`HCl, $\ce{PCl3}$, $\ce{PCl5}$ and $\ce{SOCl2}$ all do; $\ce{SOCl2}$ is handy as its by-products are gases.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Hydrates the alkene anti-Markovnikov when acid is used, or uses the wrong hydration.",
      remediation: "Acid-catalysed hydration puts OH on the more substituted carbon, turning propene into propan-2-ol.",
      fallback: { kind: "ext", topic: "addition to alkenes (Std XI Chemistry)" },
    },
    {
      id: "C06-M8",
      mistake: t`Thinks $\ce{SOCl2}$ dehydrates an alcohol to an alkene.`,
      remediation: t`$\ce{SOCl2}$ replaces OH by Cl, giving an alkyl chloride with $\ce{SO2}$ and $\ce{HCl}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks secondary alcohols resist oxidation.",
      remediation: "A secondary alcohol has one H on its OH carbon, so it oxidises to a ketone; only tertiary ones resist.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks a larger alcohol resists oxidation more.",
      remediation: "Size does not matter; what matters is whether the OH carbon carries a hydrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks reducing the aldehyde from a primary alcohol gives the secondary alcohol.",
      remediation: "Reducing propanal simply gives back propan-1-ol; the OH stays on the end carbon.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.6" },
      stem: t`Butan-2-ol is heated with conc. $\ce{H2SO4}$. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "dehyd" } },
      options: [
        { key: "A", text: t`but-1-ene, $\ce{CH2=CHCH2CH3}$`, correct: false, misconceptionId: "C06-M1", value: "but_1_ene_major" },
        { key: "B", text: t`di-sec-butyl ether`, correct: false, misconceptionId: "C06-M2", value: "ether" },
        { key: "C", text: t`butan-1-ol`, correct: false, misconceptionId: "C06-M7", value: "butan_1_ol" },
        { key: "D", text: t`but-2-ene, $\ce{CH3CH=CHCH3}$`, correct: true, value: "but_2_ene_major" },
      ],
      solution: {
        steps: [
          t`Conc. $\ce{H2SO4}$ removes water from butan-2-ol.`,
          t`By Saytzeff's rule the more substituted alkene, but-2-ene, is the major product.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (iv)" },
      stem: t`Which alcohol resists oxidation most: ethanol, propan-2-ol, 2-methylpropan-2-ol, butan-2-ol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "resist" } },
      options: [
        { key: "A", text: t`2-methylpropan-2-ol`, correct: true, value: "tert_butyl" },
        { key: "B", text: t`ethanol`, correct: false, misconceptionId: "C06-M3", value: "ethanol" },
        { key: "C", text: t`propan-2-ol`, correct: false, misconceptionId: "C06-M9", value: "propan_2_ol" },
        { key: "D", text: t`butan-2-ol`, correct: false, misconceptionId: "C06-M10", value: "butan_2_ol" },
      ],
      solution: {
        steps: [
          t`Oxidation needs an H on the OH carbon.`,
          t`2-Methylpropan-2-ol is tertiary, with no such H: it resists most.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.8" },
      stem: t`Ethanol is oxidised with pyridinium chlorochromate (PCC). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pcc" } },
      options: [
        { key: "A", text: t`ethanoic acid, $\ce{CH3COOH}$`, correct: false, misconceptionId: "C06-M4", value: "ethanoic_acid" },
        { key: "B", text: t`ethanal, $\ce{CH3CHO}$`, correct: true, value: "ethanal" },
        { key: "C", text: t`carbon dioxide and water`, correct: false, misconceptionId: "C06-M5", value: "co2_water" },
        { key: "D", text: t`no change: PCC does not oxidise primary alcohols`, correct: false, misconceptionId: "C06-M2", value: "unchanged" },
      ],
      solution: {
        steps: [
          t`Ethanol is primary; PCC is a mild oxidant.`,
          t`It stops at the aldehyde: ethanal, $\ce{CH3CHO}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.7" },
      stem: t`How is propan-1-ol converted into propan-2-ol?`,
      verify: { kind: "value", inputs: {  }, params: { q: "convert" } },
      options: [
        { key: "A", text: t`Oxidise it to propanal, then reduce it with $\ce{NaBH4}$`, correct: false, misconceptionId: "C06-M11", value: "oxidise_then_reduce" },
        { key: "B", text: t`Dehydrate to propene, then hydroboration-oxidation`, correct: false, misconceptionId: "C06-M7", value: "dehydrate_then_hydroborate" },
        { key: "C", text: t`Dehydrate to propene, then add water in acid (Markovnikov)`, correct: true, value: "dehydrate_then_hydrate" },
        { key: "D", text: t`Just heat it: the OH moves to the middle carbon`, correct: false, misconceptionId: "C06-M2", value: "heat_alone" },
      ],
      solution: {
        steps: [
          t`Dehydrate propan-1-ol to propene ($\ce{Al2O3}$, $623\ \mathrm{K}$).`,
          t`Acid hydration adds OH to the middle carbon: propan-2-ol.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (iii)" },
      stem: t`Ethanol is warmed with thionyl chloride, $\ce{SOCl2}$. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "socl2" } },
      options: [
        { key: "A", text: t`ethene and $\ce{SO2}$`, correct: false, misconceptionId: "C06-M8", value: "ethene" },
        { key: "B", text: t`no reaction: only $\ce{PCl5}$ converts alcohols to chlorides`, correct: false, misconceptionId: "C06-M6", value: "ethanol_unchanged" },
        { key: "C", text: t`diethyl ether and $\ce{SO2}$`, correct: false, misconceptionId: "C06-M2", value: "ether" },
        { key: "D", text: t`chloroethane, with $\ce{SO2}$ and $\ce{HCl}$ gases`, correct: true, value: "chloroethane_gases" },
      ],
      solution: {
        steps: [
          t`$\ce{SOCl2}$ replaces OH by Cl.`,
          t`$\ce{C2H5OH + SOCl2}$ $\ce{-> C2H5Cl + SO2 + HCl}$.`,
        ],
      },
    },
  ],
};
