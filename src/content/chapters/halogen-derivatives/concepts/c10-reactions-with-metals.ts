import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Chemists can join two small carbon chains into one bigger molecule using just sodium metal. How can a metal build carbon-carbon bonds?`,
    reveal: t`Sodium takes the halogens away as $\ce{NaX}$, and the two alkyl groups left behind join to each other: $\ce{2R-X + 2Na -> R-R + 2NaX}$.`,
  },
  explanation: {
    intuition: [
      t`Active metals such as sodium and magnesium react with the halogen of alkyl and aryl halides.`,
      t`Sodium removes the halogens and joins two carbon groups: a new $\ce{C-C}$ bond.`,
      t`Magnesium instead slips in between carbon and halogen, giving a **Grignard reagent**, $\ce{RMgX}$.`,
      t`In $\ce{RMgX}$ the carbon carries a partial negative charge, so it grabs any acidic hydrogen.`,
      t`Both reactions need dry ether, with no water present.`,
    ],
    formal: [
      {
        title: "Wurtz and Fittig reactions",
        points: [
          t`**Wurtz**: $\ce{2R-X + 2Na}$ $\ce{-> R-R + 2NaX}$, in dry ether.`,
          t`$\ce{2CH3Br + 2Na}$ $\ce{-> CH3-CH3 + 2NaBr}$: the product has twice the carbons.`,
          t`**Fittig**: two aryl halides join: $\ce{2C6H5Cl + 2Na}$ $\ce{-> C6H5-C6H5 + 2NaCl}$ (biphenyl).`,
          t`**Wurtz-Fittig**: an alkyl and an aryl halide join: $\ce{C6H5Br + CH3Br}$ with Na gives toluene.`,
        ],
      },
      {
        title: "Grignard reagents",
        points: [
          t`$\ce{R-X + Mg}$ $\ce{-> RMgX}$, in dry ether: an alkyl magnesium halide.`,
          t`Aryl halides react too: $\ce{C6H5Br + Mg}$ $\ce{-> C6H5MgBr}$.`,
          t`The $\ce{C-Mg}$ bond is polar, with carbon slightly negative.`,
          t`So $\ce{RMgX}$ is a strong base and a strong nucleophile.`,
        ],
      },
      {
        title: "Why everything must be dry",
        points: [
          t`Water's acidic hydrogen goes straight to the carbon: $\ce{RMgX + H2O}$ $\ce{-> RH + Mg(OH)X}$.`,
          t`So water turns a Grignard reagent into an alkane and destroys it.`,
          t`Alcohols and acids do the same, so Grignard reactions use dry ether and dry apparatus.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is formed when 1-bromopropane is heated with sodium in dry ether?`,
      steps: [
        t`Sodium removes $\ce{Br}$ from two molecules as $\ce{NaBr}$.`,
        t`The two $\ce{CH3CH2CH2-}$ groups join end to end.`,
        t`$\ce{CH3CH2CH2-CH2CH2CH3}$ has six carbons in a row.`,
      ],
      answer: t`Hexane, $\ce{CH3(CH2)4CH3}$`,
    },
    visualSpec: t`Pull the halogens off two alkyl halides with sodium and snap the leftover carbon groups together.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Thinks the metal just replaces the halogen by hydrogen, without joining two groups.",
      remediation: t`In Wurtz and Fittig reactions sodium removes both halogens and the two carbon groups join: $\ce{2R-X -> R-R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Treats the organometallic compound as the final product, unaffected by later reagents.",
      remediation: t`Compounds like $\ce{RMgX}$ react at once with water to give the alkane $\ce{RH}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks water turns a Grignard reagent into an alcohol.",
      remediation: t`Water gives its $\ce{H}$ to the negative carbon: $\ce{RMgX + H2O}$ $\ce{-> RH + Mg(OH)X}$, an alkane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Thinks Grignard reactions do not need dry conditions.",
      remediation: t`Even a trace of water destroys $\ce{RMgX}$, so dry ether and dry apparatus are essential.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Thinks aryl halides do not react with sodium or magnesium.",
      remediation: t`Aryl halides react with active metals too: Fittig coupling with Na, and $\ce{ArMgX}$ with Mg.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M6",
      mistake: "Writes the Wurtz product of a branched halide as a straight chain.",
      remediation: "The two groups join through the carbons that held the halogen, so branches stay where they were.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: t`Thinks sodium or water makes the halide lose $\ce{HX}$, giving an alkene.`,
      remediation: t`Elimination needs a strong base such as alcoholic $\ce{KOH}$; sodium couples, and water simply protonates $\ce{RMgX}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Thinks magnesium couples two halides as sodium does.",
      remediation: t`Magnesium inserts between carbon and halogen to give $\ce{RMgX}$; it does not join two groups.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#4" },
      stem: t`2-Bromopropane, $\ce{(CH3)2CHBr}$, is heated with sodium in dry ether. The main organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "wurtz" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH2CH3}$, propane`, correct: false, misconceptionId: "C10-M1", value: "propane" },
        { key: "B", text: t`$\ce{CH3CH=CH2}$, propene`, correct: false, misconceptionId: "C10-M7", value: "propene" },
        { key: "C", text: t`$\ce{CH3(CH2)4CH3}$, hexane`, correct: false, misconceptionId: "C10-M6", value: "hexane" },
        { key: "D", text: t`$\ce{(CH3)2CH-CH(CH3)2}$, 2,3-dimethylbutane`, correct: true, value: "dimethylbutane_23" },
      ],
      solution: {
        steps: [
          t`Sodium removes $\ce{Br}$ from two molecules; the two isopropyl groups join.`,
          t`They join through C2, the carbon that held Br.`,
          t`$\ce{(CH3)2CH-CH(CH3)2}$ is 2,3-dimethylbutane.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (vi-d)" },
      stem: t`Chlorobenzene is heated with sodium in dry ether. The main organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fittig" } },
      options: [
        { key: "A", text: t`biphenyl, $\ce{C6H5-C6H5}$`, correct: true, value: "biphenyl" },
        { key: "B", text: t`benzene, $\ce{C6H6}$`, correct: false, misconceptionId: "C10-M1", value: "benzene" },
        { key: "C", text: t`none: aryl halides do not react with sodium`, correct: false, misconceptionId: "C10-M5", value: "no_reaction" },
        { key: "D", text: t`phenylsodium, $\ce{C6H5Na}$, as the final product`, correct: false, misconceptionId: "C10-M2", value: "phenylsodium" },
      ],
      solution: {
        steps: [
          t`This is the Fittig reaction: sodium removes Cl from two molecules.`,
          t`The two phenyl rings join: biphenyl, $\ce{C6H5-C6H5}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (ix)" },
      stem: t`Chlorocyclohexane, $\ce{C6H11Cl}$, reacts with magnesium in dry ether to give A. A is then treated with water to give B. What is B?`,
      verify: { kind: "value", inputs: {  }, params: { q: "grig" } },
      options: [
        { key: "A", text: t`cyclohexene, $\ce{C6H10}$`, correct: false, misconceptionId: "C10-M7", value: "cyclohexene" },
        { key: "B", text: t`cyclohexane, $\ce{C6H12}$`, correct: true, value: "cyclohexane" },
        { key: "C", text: t`cyclohexanol, $\ce{C6H11OH}$`, correct: false, misconceptionId: "C10-M3", value: "cyclohexanol" },
        { key: "D", text: t`$\ce{C6H11MgCl}$ unchanged: water does not affect it`, correct: false, misconceptionId: "C10-M2", value: "unchanged_rmgx" },
      ],
      solution: {
        steps: [
          t`A is the Grignard reagent, $\ce{C6H11MgCl}$.`,
          t`Water gives $\ce{H}$ to the carbon: $\ce{C6H11MgCl + H2O}$ $\ce{-> C6H12 + Mg(OH)Cl}$.`,
          t`So B is cyclohexane.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.3 (iii)" },
      stem: t`Why must reactions using a Grignard reagent be carried out under anhydrous conditions?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dry" } },
      options: [
        { key: "A", text: t`Water turns $\ce{RMgX}$ into an alcohol, $\ce{ROH}$`, correct: false, misconceptionId: "C10-M3", value: "water_gives_alcohol" },
        { key: "B", text: t`Water makes the reagent lose $\ce{HX}$, giving an alkene`, correct: false, misconceptionId: "C10-M7", value: "water_gives_alkene" },
        { key: "C", text: t`Water destroys the reagent at once, turning $\ce{RMgX}$ into the alkane $\ce{RH}$`, correct: true, value: "water_destroys_alkane" },
        { key: "D", text: t`It need not be: water only slows the reaction a little`, correct: false, misconceptionId: "C10-M4", value: "water_only_slows" },
      ],
      solution: {
        steps: [
          t`The carbon of $\ce{RMgX}$ is strongly basic.`,
          t`It takes $\ce{H}$ from water at once, giving $\ce{RH}$; the reagent is lost.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (v-d)" },
      stem: t`Chlorobenzene is treated with magnesium in dry ether. The product A is`,
      verify: { kind: "value", inputs: {  }, params: { q: "phmg" } },
      options: [
        { key: "A", text: t`phenylmagnesium chloride, $\ce{C6H5MgCl}$`, correct: true, value: "phenylmagnesium_chloride" },
        { key: "B", text: t`benzene, $\ce{C6H6}$`, correct: false, misconceptionId: "C10-M1", value: "benzene" },
        { key: "C", text: t`none: aryl halides do not react with magnesium`, correct: false, misconceptionId: "C10-M5", value: "no_reaction" },
        { key: "D", text: t`biphenyl, as magnesium joins two rings like sodium`, correct: false, misconceptionId: "C10-M8", value: "biphenyl" },
      ],
      solution: {
        steps: [
          t`Magnesium inserts between the ring carbon and chlorine.`,
          t`A is the Grignard reagent phenylmagnesium chloride, $\ce{C6H5MgCl}$.`,
        ],
      },
    },
  ],
};
