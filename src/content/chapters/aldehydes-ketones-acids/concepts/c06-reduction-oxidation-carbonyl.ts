import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Warm an aldehyde with Tollens' reagent and the test tube's inside turns into a mirror. A ketone leaves it clear. Why does one coat the glass with silver?`,
    reveal: t`An aldehyde still has an H on its carbonyl carbon, so it is easily oxidised to an acid; in doing so it reduces $\ce{Ag+}$ to silver metal. A ketone has no such H.`,
  },
  explanation: {
    intuition: [
      t`Carbonyl compounds can be reduced: to alcohols, or all the way to hydrocarbons.`,
      t`Aldehydes are also easily oxidised, because the carbonyl carbon carries an H.`,
      t`Mild oxidising agents tell aldehydes from ketones by this difference.`,
      t`Ketones resist mild oxidation.`,
    ],
    formal: [
      {
        title: "Reduction",
        points: [
          t`$\ce{NaBH4}$ or $\ce{LiAlH4}$: aldehydes give primary, ketones secondary alcohols.`,
          t`**Clemmensen**: zinc amalgam and conc. HCl turn $\ce{C=O}$ into $\ce{CH2}$.`,
          t`**Wolff-Kishner**: hydrazine gives the hydrazone; KOH in ethylene glycol then gives $\ce{CH2}$.`,
          t`Acetophenone gives ethylbenzene either way.`,
        ],
      },
      {
        title: "Tollens' and Fehling's tests",
        points: [
          t`**Tollens' reagent**, ammoniacal $\ce{AgNO3}$: aldehydes give a silver mirror.`,
          t`**Fehling's solution**, alkaline $\ce{Cu^2+}$: aliphatic aldehydes give a red precipitate of $\ce{Cu2O}$.`,
          t`Benzaldehyde gives Tollens' and Schiff's tests but not Fehling's.`,
          t`Ketones and alcohols give neither test.`,
        ],
      },
    ],
    worked: {
      prompt: t`How can ethanal, benzaldehyde and propanone be told apart with Tollens' and Fehling's reagents?`,
      steps: [
        t`Tollens': ethanal and benzaldehyde give a silver mirror; propanone does not.`,
        t`Fehling's: only ethanal gives a red precipitate.`,
      ],
      answer: t`Ethanal: both positive; benzaldehyde: Tollens' only; propanone: neither`,
    },
    visualSpec: t`Run the same unknown through Tollens', Fehling's and 2,4-DNP tests and sort it as aliphatic aldehyde, aromatic aldehyde or ketone.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks aromatic aldehydes fail Tollens' test.",
      remediation: "All aldehydes, aromatic ones included, reduce Tollens' reagent.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks benzaldehyde fails Schiff's test.",
      remediation: "Benzaldehyde restores the pink colour of Schiff's reagent, like other aldehydes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks aromatic aldehydes do not add sodium bisulfite.",
      remediation: "Benzaldehyde forms a bisulfite adduct; it fails only Fehling's test.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Swaps the Clemmensen and Wolff-Kishner reagents.",
      remediation: "Clemmensen: Zn-Hg and conc. HCl (acid); Wolff-Kishner: hydrazine and KOH (base).",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks Clemmensen or Wolff-Kishner reduction gives the alcohol.",
      remediation: t`These reductions remove the oxygen completely: $\ce{C=O}$ becomes $\ce{CH2}$. $\ce{NaBH4}$ gives alcohols.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks the reagent leaves the ketone unchanged.",
      remediation: "Zinc amalgam and conc. HCl reduce aldehydes and ketones to hydrocarbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Thinks an alkene forms.",
      remediation: t`Both $\ce{CH2}$ hydrogens are added; no double bond remains.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Stops at the hydrazone.",
      remediation: t`Heating the hydrazone with KOH releases $\ce{N2}$ and leaves $\ce{CH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks ketones give a silver mirror.",
      remediation: "Ketones have no H on the carbonyl carbon, so mild oxidants leave them unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks alcohols give a silver mirror.",
      remediation: "Tollens' reagent is too mild to oxidise alcohols; only aldehydes reduce it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks every compound with oxygen reduces Tollens' reagent.",
      remediation: "Only aldehydes (and a few special compounds) give the silver mirror.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.1 (vi)" },
      stem: t`Benzaldehyde does NOT give a positive test with`,
      verify: { kind: "value", inputs: {  }, params: { q: "benz" } },
      options: [
        { key: "A", text: t`Tollens' reagent`, correct: false, misconceptionId: "C06-M1", value: "tollens" },
        { key: "B", text: t`Fehling's solution`, correct: true, value: "fehling" },
        { key: "C", text: t`sodium bisulfite solution`, correct: false, misconceptionId: "C06-M3", value: "bisulfite" },
        { key: "D", text: t`Schiff's reagent`, correct: false, misconceptionId: "C06-M2", value: "schiff" },
      ],
      solution: {
        steps: [
          t`Benzaldehyde gives Tollens', Schiff's and bisulfite tests.`,
          t`Being aromatic, it does not reduce Fehling's solution.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#21" },
      stem: t`What reagents are used in the Clemmensen reduction of a carbonyl group?`,
      verify: { kind: "value", inputs: {  }, params: { q: "clem" } },
      options: [
        { key: "A", text: t`sodium borohydride`, correct: false, misconceptionId: "C06-M5", value: "nabh4" },
        { key: "B", text: t`hydrazine, then KOH in ethylene glycol`, correct: false, misconceptionId: "C06-M4", value: "hydrazine_koh" },
        { key: "C", text: t`zinc amalgam and concentrated HCl`, correct: true, value: "zn_hg_hcl" },
        { key: "D", text: t`concentrated $\ce{H2SO4}$`, correct: false, misconceptionId: "C06-M7", value: "conc_h2so4" },
      ],
      solution: {
        steps: [
          t`Clemmensen uses zinc amalgam with concentrated HCl.`,
          t`It reduces $\ce{C=O}$ to $\ce{CH2}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (iii)" },
      stem: t`Cyclopentanone is heated with hydrazine and then with KOH in ethylene glycol. The final product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "wk" } },
      options: [
        { key: "A", text: t`cyclopentanone hydrazone`, correct: false, misconceptionId: "C06-M8", value: "hydrazone" },
        { key: "B", text: t`cyclopentanol`, correct: false, misconceptionId: "C06-M5", value: "cyclopentanol" },
        { key: "C", text: t`cyclopentene`, correct: false, misconceptionId: "C06-M7", value: "cyclopentene" },
        { key: "D", text: t`cyclopentane`, correct: true, value: "cyclopentane" },
      ],
      solution: {
        steps: [
          t`Hydrazine forms the hydrazone.`,
          t`KOH in glycol removes $\ce{N2}$: cyclopentane.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (i)" },
      stem: t`Which of ethanal, propanone and ethanol gives a silver mirror with Tollens' reagent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "tollens" } },
      options: [
        { key: "A", text: t`ethanal only`, correct: true, value: "ethanal" },
        { key: "B", text: t`all three`, correct: false, misconceptionId: "C06-M11", value: "all_three" },
        { key: "C", text: t`propanone`, correct: false, misconceptionId: "C06-M9", value: "propanone" },
        { key: "D", text: t`ethanol`, correct: false, misconceptionId: "C06-M10", value: "ethanol" },
      ],
      solution: {
        steps: [
          t`Only an aldehyde is oxidised by Tollens' reagent.`,
          t`So ethanal alone gives the mirror.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#21" },
      stem: t`Acetophenone, $\ce{C6H5COCH3}$, is heated with zinc amalgam and concentrated HCl. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetophenone" } },
      options: [
        { key: "A", text: t`1-phenylethanol, $\ce{C6H5CH(OH)CH3}$`, correct: false, misconceptionId: "C06-M5", value: "phenylethanol" },
        { key: "B", text: t`ethylbenzene, $\ce{C6H5CH2CH3}$`, correct: true, value: "ethylbenzene" },
        { key: "C", text: t`styrene, $\ce{C6H5CH=CH2}$`, correct: false, misconceptionId: "C06-M7", value: "styrene" },
        { key: "D", text: t`unchanged acetophenone`, correct: false, misconceptionId: "C06-M6", value: "unchanged" },
      ],
      solution: {
        steps: [
          t`Clemmensen turns $\ce{C=O}$ into $\ce{CH2}$.`,
          t`$\ce{C6H5COCH3}$ becomes ethylbenzene.`,
        ],
      },
    },
  ],
};
