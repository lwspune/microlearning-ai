import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Reducing an acid chloride with hydrogen usually runs all the way to an alcohol. Rosenmund stopped it at the aldehyde by deliberately poisoning his catalyst. Why would a weaker catalyst help?`,
    reveal: t`Aldehydes are easily reduced further. Palladium on barium sulfate, partly poisoned, is just strong enough to reduce $\ce{R-COCl}$ but too weak to reduce the aldehyde formed.`,
  },
  explanation: {
    intuition: [
      t`Aldehydes and ketones come from compounds at a neighbouring oxidation level.`,
      t`Alcohols are oxidised up to them; acids, acid chlorides, esters and nitriles are reduced down to them.`,
      t`Alkenes and alkynes give them by ozonolysis or hydration.`,
      t`Aldehydes oxidise and reduce easily, so mild, selective reagents are needed to stop there.`,
    ],
    formal: [
      {
        title: "From alkenes, alkynes and alcohols",
        points: [
          t`Oxidation or dehydrogenation of alcohols: primary give aldehydes, secondary give ketones.`,
          t`Ozonolysis, then Zn and water, splits $\ce{C=C}$: each carbon becomes a $\ce{C=O}$.`,
          t`Alkynes with $\ce{HgSO4}$ and dilute $\ce{H2SO4}$ add water; the enol rearranges to a carbonyl.`,
          t`Ethyne gives ethanal; other alkynes give ketones (propyne gives propanone).`,
        ],
      },
      {
        title: "From acid derivatives and nitriles",
        points: [
          t`**Rosenmund**: $\ce{RCOCl + H2}$ over Pd-$\ce{BaSO4}$ gives $\ce{RCHO}$.`,
          t`**Stephen**: nitriles with $\ce{SnCl2}$/HCl, then water, give aldehydes.`,
          t`Nitriles with a Grignard reagent, then water, give ketones.`,
          t`Esters with DIBAL-H at low temperature give aldehydes.`,
        ],
      },
      {
        title: "Aromatic carbonyl compounds",
        points: [
          t`**Etard**: toluene with $\ce{CrO2Cl2}$, then water, gives benzaldehyde.`,
          t`**Gattermann-Koch**: benzene with CO and HCl ($\ce{AlCl3}$, $\ce{CuCl}$) gives benzaldehyde.`,
          t`**Friedel-Crafts acylation**: benzene with $\ce{CH3COCl}$ and $\ce{AlCl3}$ gives acetophenone.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which carbonyl compounds form when but-2-ene is ozonised and the ozonide decomposed with Zn and water?`,
      steps: [
        t`Ozonolysis splits $\ce{CH3CH=CHCH3}$ at the double bond.`,
        t`Each half, $\ce{CH3CH=}$, becomes $\ce{CH3CHO}$.`,
      ],
      answer: t`Two molecules of ethanal`,
    },
    visualSpec: t`Pick a starting compound and a reagent, and see whether the reaction stops at the carbonyl or runs past it.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks a terminal alkyne other than ethyne gives an aldehyde on hydration.",
      remediation: "Water adds by Markovnikov's rule, so the OH, and then the C=O, ends up on the inner carbon: a ketone.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Stops at the enol formed by adding water to the alkyne.",
      remediation: "The enol rearranges at once to the more stable carbonyl compound (keto form).",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Loses a carbon in the product.",
      remediation: "These reactions keep the carbon skeleton; count the carbons of the starting compound.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks ozonolysis always gives aldehydes.",
      remediation: "A doubly bonded carbon carrying two alkyl groups becomes a ketone; one carrying H becomes an aldehyde.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Splits the molecule at the wrong bond.",
      remediation: t`Ozonolysis cuts only at the $\ce{C=C}$ bond.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Takes the reaction on to the carboxylic acid.",
      remediation: t`These are mild, selective methods; Zn dust, Pd-$\ce{BaSO4}$ and $\ce{SnCl2}$ stop at the aldehyde.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Over-reduces the starting compound.",
      remediation: t`A poisoned catalyst or $\ce{SnCl2}$ is too weak to reduce the aldehyde further; $\ce{LiAlH4}$ would reduce it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Gives a ketone where an aldehyde forms, or picks a reagent that adds a carbon group.",
      remediation: "Rosenmund, Stephen and Gattermann-Koch add only hydrogen, giving aldehydes; Grignard reagents give ketones.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks the HCl adds chlorine, giving the acyl chloride.",
      remediation: t`CO and HCl act together as formyl chloride, which puts a $\ce{-CHO}$ group on the ring.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#15" },
      stem: t`Propyne is hydrolysed in the presence of $1\%$ $\ce{HgSO4}$ and $40\%$ $\ce{H2SO4}$. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "propyne" } },
      options: [
        { key: "A", text: t`prop-1-en-2-ol, $\ce{CH2=C(OH)CH3}$`, correct: false, misconceptionId: "C03-M2", value: "enol" },
        { key: "B", text: t`ethanal, $\ce{CH3CHO}$`, correct: false, misconceptionId: "C03-M3", value: "ethanal" },
        { key: "C", text: t`propanal, $\ce{CH3CH2CHO}$`, correct: false, misconceptionId: "C03-M1", value: "propanal" },
        { key: "D", text: t`propanone, $\ce{CH3COCH3}$`, correct: true, value: "propanone" },
      ],
      solution: {
        steps: [
          t`Water adds to propyne by Markovnikov's rule, giving the enol $\ce{CH2=C(OH)CH3}$.`,
          t`The enol rearranges to propanone.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#18" },
      stem: t`2,3-Dimethylbut-2-ene, $\ce{(CH3)2C=C(CH3)2}$, is ozonised and the ozonide decomposed with zinc dust and water. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ozone" } },
      options: [
        { key: "A", text: t`acetone only (two molecules)`, correct: true, value: "acetone" },
        { key: "B", text: t`acetic acid`, correct: false, misconceptionId: "C03-M6", value: "acetic_acid" },
        { key: "C", text: t`acetone and propanal`, correct: false, misconceptionId: "C03-M5", value: "acetone_propanal" },
        { key: "D", text: t`acetaldehyde`, correct: false, misconceptionId: "C03-M4", value: "acetaldehyde" },
      ],
      solution: {
        steps: [
          t`Ozonolysis splits the $\ce{C=C}$ of $\ce{(CH3)2C=C(CH3)2}$.`,
          t`Each half, $\ce{(CH3)2C=}$, becomes acetone.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#6" },
      stem: t`Ethanoyl chloride, $\ce{CH3COCl}$, is treated with $\ce{H2}$ over palladium on barium sulfate (Rosenmund reduction). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rosenmund" } },
      options: [
        { key: "A", text: t`ethanol, $\ce{CH3CH2OH}$`, correct: false, misconceptionId: "C03-M7", value: "ethanol" },
        { key: "B", text: t`ethanal, $\ce{CH3CHO}$`, correct: true, value: "acetaldehyde" },
        { key: "C", text: t`propanone, $\ce{CH3COCH3}$`, correct: false, misconceptionId: "C03-M8", value: "propanone" },
        { key: "D", text: t`ethanoic acid, $\ce{CH3COOH}$`, correct: false, misconceptionId: "C03-M6", value: "ethanoic_acid" },
      ],
      solution: {
        steps: [
          t`The poisoned catalyst reduces $\ce{CH3COCl}$ only as far as the aldehyde.`,
          t`$\ce{CH3COCl + H2}$ $\ce{-> CH3CHO + HCl}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#7" },
      stem: t`Benzene is treated with carbon monoxide and HCl in the presence of anhydrous $\ce{AlCl3}$ and $\ce{CuCl}$ (Gattermann-Koch). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "gk" } },
      options: [
        { key: "A", text: t`benzoyl chloride, $\ce{C6H5COCl}$`, correct: false, misconceptionId: "C03-M9", value: "benzoyl_chloride" },
        { key: "B", text: t`acetophenone, $\ce{C6H5COCH3}$`, correct: false, misconceptionId: "C03-M8", value: "acetophenone" },
        { key: "C", text: t`benzaldehyde, $\ce{C6H5CHO}$`, correct: true, value: "benzaldehyde" },
        { key: "D", text: t`benzoic acid, $\ce{C6H5COOH}$`, correct: false, misconceptionId: "C03-M6", value: "benzoic_acid" },
      ],
      solution: {
        steps: [
          t`CO and HCl put a $\ce{-CHO}$ group on the ring.`,
          t`So benzene gives benzaldehyde.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#8" },
      stem: t`Which reagent converts ethanenitrile, $\ce{CH3CN}$, into ethanal?`,
      verify: { kind: "value", inputs: {  }, params: { q: "stephen" } },
      options: [
        { key: "A", text: t`boiling dilute acid`, correct: false, misconceptionId: "C03-M6", value: "dilute_acid" },
        { key: "B", text: t`$\ce{LiAlH4}$`, correct: false, misconceptionId: "C03-M7", value: "lialh4" },
        { key: "C", text: t`$\ce{CH3MgBr}$, then water`, correct: false, misconceptionId: "C03-M8", value: "ch3mgbr" },
        { key: "D", text: t`$\ce{SnCl2}$ and HCl, then water (Stephen reduction)`, correct: true, value: "sncl2" },
      ],
      solution: {
        steps: [
          t`$\ce{SnCl2}$/HCl reduces $\ce{CH3CN}$ to an imine salt.`,
          t`Water hydrolyses it to ethanal.`,
        ],
      },
    },
  ],
};
