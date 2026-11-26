import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Add a few drops of an orange reagent, 2,4-DNP, to acetone and a bright orange solid crashes out at once. Ethanol gives nothing. What does the reagent recognise?`,
    reveal: t`The $\ce{C=O}$ group. Its $\ce{NH2}$ end adds to the carbonyl carbon and water is lost, joining the two into a large, insoluble coloured solid.`,
  },
  explanation: {
    intuition: [
      t`A nucleophile adds to the $\delta+$ carbonyl carbon; the oxygen then picks up $\ce{H+}$.`,
      t`The $\ce{C=O}$ becomes $\ce{C-OH}$ with the nucleophile on the carbon.`,
      t`With ammonia derivatives the addition product then loses water, giving $\ce{C=N}$.`,
      t`Aldehydes and ketones both do this; aldehydes react faster.`,
    ],
    formal: [
      {
        title: "Adding HCN and bisulfite",
        points: [
          t`HCN (with a little base) adds to give a **cyanohydrin**: $\ce{(CH3)2C(OH)CN}$ from propanone.`,
          t`Sodium bisulfite adds to aldehydes and methyl ketones, giving crystalline adducts.`,
          t`Acid or alkali releases the carbonyl compound again, so this separates them from mixtures.`,
        ],
      },
      {
        title: "Adding alcohols",
        points: [
          t`With dry HCl, one alcohol molecule adds to give a **hemiacetal**, $\ce{RCH(OH)OR'}$.`,
          t`A second molecule replaces the OH, giving an **acetal**, $\ce{RCH(OR')2}$.`,
          t`Ethanal and methanol give $\ce{CH3CH(OCH3)2}$, ethanal dimethyl acetal.`,
        ],
      },
      {
        title: "Ammonia derivatives",
        points: [
          t`$\ce{H2N-Z}$ adds, then water is lost: $\ce{>C=O + H2N-Z}$ $\ce{-> >C=N-Z + H2O}$.`,
          t`Hydroxylamine gives an **oxime**; hydrazine a **hydrazone**.`,
          t`2,4-DNP gives an orange-yellow 2,4-dinitrophenylhydrazone: a test for any aldehyde or ketone.`,
        ],
      },
    ],
    worked: {
      prompt: t`What forms when ethanal reacts with HCN?`,
      steps: [
        t`$\ce{CN-}$ adds to the carbonyl carbon.`,
        t`The oxygen takes $\ce{H+}$, becoming OH.`,
      ],
      answer: t`$\ce{CH3CH(OH)CN}$, ethanal cyanohydrin`,
    },
    visualSpec: t`Bring different nucleophiles to a carbonyl carbon and watch which ones stay added and which go on to lose water.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Stops at the hemiacetal.",
      remediation: "With excess alcohol and dry HCl the hemiacetal goes on to the acetal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks an ester forms from an aldehyde and an alcohol.",
      remediation: "Esters come from acids and alcohols; an aldehyde with an alcohol gives a hemiacetal, then an acetal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks the alcohol simply forms an ether by itself.",
      remediation: "The alcohol adds to the carbonyl carbon; the carbonyl compound is part of the product.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks HCN reduces the C=O, leaving no OH.",
      remediation: t`HCN adds across $\ce{C=O}$: CN goes on carbon and H on oxygen, giving OH and CN on the same carbon.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Puts the nucleophile on the oxygen.",
      remediation: t`Nucleophiles attack the $\delta+$ carbon; the oxygen keeps its place and becomes OH.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks ketones do not undergo nucleophilic addition.",
      remediation: "Ketones add more slowly than aldehydes, but they do add: HCN, 2,4-DNP and others react with them.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks ammonia derivatives just add, with no water lost.",
      remediation: t`After adding, the product loses water, so a $\ce{C=N}$ double bond forms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Mixes up the products of hydroxylamine and hydrazine.",
      remediation: t`$\ce{NH2OH}$ gives an oxime, $\ce{C=NOH}$; $\ce{NH2NH2}$ gives a hydrazone, $\ce{C=NNH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks hydrazine simply reduces the ketone to an alcohol.",
      remediation: t`Hydrazine first condenses with $\ce{C=O}$ to give a hydrazone.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Confuses the 2,4-DNP test with Tollens' test.",
      remediation: "2,4-DNP gives an orange precipitate with any aldehyde or ketone; Tollens' silver mirror is for aldehydes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (iv)" },
      stem: t`Ethanal is treated with excess methanol in the presence of dry HCl. The final product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetal" } },
      options: [
        { key: "A", text: t`dimethyl ether, $\ce{CH3OCH3}$`, correct: false, misconceptionId: "C05-M3", value: "dimethyl_ether" },
        { key: "B", text: t`methyl acetate, $\ce{CH3COOCH3}$`, correct: false, misconceptionId: "C05-M2", value: "methyl_acetate" },
        { key: "C", text: t`the hemiacetal $\ce{CH3CH(OH)OCH3}$`, correct: false, misconceptionId: "C05-M1", value: "hemiacetal" },
        { key: "D", text: t`the acetal $\ce{CH3CH(OCH3)2}$`, correct: true, value: "acetal" },
      ],
      solution: {
        steps: [
          t`One methanol adds to give the hemiacetal.`,
          t`A second replaces the OH: $\ce{CH3CH(OCH3)2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`Propanone reacts with HCN (a little base present). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hcn" } },
      options: [
        { key: "A", text: t`$\ce{(CH3)2C(OH)CN}$, a cyanohydrin`, correct: true, value: "cyanohydrin" },
        { key: "B", text: t`$\ce{(CH3)2CH-O-CN}$`, correct: false, misconceptionId: "C05-M5", value: "cn_on_o" },
        { key: "C", text: t`none: ketones do not add HCN`, correct: false, misconceptionId: "C05-M6", value: "no_reaction" },
        { key: "D", text: t`$\ce{(CH3)2CHCN}$`, correct: false, misconceptionId: "C05-M4", value: "nitrile_no_oh" },
      ],
      solution: {
        steps: [
          t`$\ce{CN-}$ adds to the carbonyl carbon; O takes $\ce{H+}$.`,
          t`So $\ce{(CH3)2C(OH)CN}$ forms.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`Ethanal reacts with hydroxylamine, $\ce{NH2OH}$, in weak acid. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxime" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH(OH)NHOH}$, with no water lost`, correct: false, misconceptionId: "C05-M7", value: "addition_product" },
        { key: "B", text: t`ethanal oxime, $\ce{CH3CH=NOH}$`, correct: true, value: "oxime" },
        { key: "C", text: t`ethanal hydrazone, $\ce{CH3CH=NNH2}$`, correct: false, misconceptionId: "C05-M8", value: "hydrazone" },
        { key: "D", text: t`$\ce{CH3CH2-O-NH2}$`, correct: false, misconceptionId: "C05-M5", value: "o_bonded" },
      ],
      solution: {
        steps: [
          t`$\ce{NH2OH}$ adds to the carbonyl carbon.`,
          t`Water is lost, giving $\ce{CH3CH=NOH}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.1 (ii)" },
      stem: t`In the Wolff-Kishner reduction, what does a ketone first form with hydrazine, $\ce{NH2NH2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydrazone" } },
      options: [
        { key: "A", text: t`an oxime, $\ce{R2C=NOH}$`, correct: false, misconceptionId: "C05-M8", value: "oxime" },
        { key: "B", text: t`$\ce{R2C(OH)NHNH2}$, with no water lost`, correct: false, misconceptionId: "C05-M7", value: "addition_product" },
        { key: "C", text: t`a hydrazone, $\ce{R2C=NNH2}$`, correct: true, value: "hydrazone" },
        { key: "D", text: t`an alcohol, $\ce{R2CHOH}$`, correct: false, misconceptionId: "C05-M9", value: "alcohol" },
      ],
      solution: {
        steps: [
          t`Hydrazine adds and loses water.`,
          t`The ketone becomes the hydrazone $\ce{R2C=NNH2}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`What is seen when 2,4-dinitrophenylhydrazine (2,4-DNP) is added to ethanal and, separately, to propanone?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dnp" } },
      options: [
        { key: "A", text: t`A colourless solution with both: the adducts dissolve`, correct: false, misconceptionId: "C05-M7", value: "colourless_adduct" },
        { key: "B", text: t`A precipitate with ethanal only`, correct: false, misconceptionId: "C05-M6", value: "aldehydes_only" },
        { key: "C", text: t`A silver mirror with ethanal only`, correct: false, misconceptionId: "C05-M10", value: "silver_mirror" },
        { key: "D", text: t`An orange-yellow precipitate with both`, correct: true, value: "orange_ppt_both" },
      ],
      solution: {
        steps: [
          t`2,4-DNP condenses with any $\ce{C=O}$ group.`,
          t`Both give an orange-yellow precipitate.`,
        ],
      },
    },
  ],
};
