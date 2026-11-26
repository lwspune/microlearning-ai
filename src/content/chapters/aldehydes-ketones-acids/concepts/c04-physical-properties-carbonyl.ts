import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Ethanol and dimethyl ether share a formula, as do propanal and acetone. Yet ethanoic acid, though only slightly heavier than propan-1-ol, boils almost $20\ \mathrm{K}$ higher. What extra holds the acid together?`,
    reveal: t`Two acid molecules hydrogen bond to each other twice over, forming a dimer; boiling has to pull these pairs apart.`,
  },
  explanation: {
    intuition: [
      t`Aldehydes and ketones are polar, so their molecules attract one another.`,
      t`But they have no H on oxygen, so they cannot hydrogen bond to each other.`,
      t`So they boil above alkanes and ethers but below alcohols of similar mass.`,
      t`Carboxylic acids hydrogen bond strongly, pairing into dimers, so they boil highest.`,
    ],
    formal: [
      {
        title: "Boiling points",
        points: [
          t`For similar molar mass: alkanes < ethers < aldehydes and ketones < alcohols < carboxylic acids.`,
          t`Aldehydes and ketones: dipole-dipole attraction only.`,
          t`Acids: two hydrogen bonds per pair of molecules, a **dimer**.`,
        ],
      },
      {
        title: "Solubility and uses",
        points: [
          t`Small aldehydes, ketones and acids dissolve in water: water hydrogen bonds to their oxygen.`,
          t`Solubility falls as the carbon chain grows.`,
          t`**Formalin** is a $40\%$ solution of methanal in water, used to preserve specimens.`,
          t`Many carbonyl compounds have strong smells: vanillin, cinnamaldehyde, acetophenone (pistachio).`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange butane, propanal and propan-1-ol (all about $M = 58$–$60$) in increasing order of boiling point.`,
      steps: [
        t`Butane: weak van der Waals forces only.`,
        t`Propanal: polar, with dipole-dipole attraction.`,
        t`Propan-1-ol: hydrogen bonds.`,
      ],
      answer: t`Butane < propanal < propan-1-ol`,
    },
    visualSpec: t`Line up molecules of similar mass and switch on dipole attractions and hydrogen bonds to see their boiling points rise.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks aldehydes and ketones hydrogen bond to one another.",
      remediation: "They have no H on O or N, so they cannot hydrogen bond to each other; they only accept hydrogen bonds from water.",
      fallback: { kind: "ext", topic: "intermolecular forces (Std XI Chemistry)" },
    },
    {
      id: "C04-M2",
      mistake: "Ranks boiling points or solubility by molar mass alone.",
      remediation: "For molecules of similar mass, the kind of attraction decides: hydrogen bonds > dipoles > van der Waals.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks carboxylic acids boil below alcohols.",
      remediation: "Acids form hydrogen-bonded dimers, so they boil above alcohols of similar mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks formalin is pure methanal.",
      remediation: t`Methanal is a gas; formalin is its $40\%$ solution in water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Confuses methanal (formaldehyde) with methanol.",
      remediation: t`Methanal is $\ce{HCHO}$, an aldehyde; methanol is $\ce{CH3OH}$, an alcohol.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks carbonyl compounds are non-polar, so they neither attract one another nor dissolve in water.",
      remediation: t`The $\ce{C=O}$ group is strongly polar: it raises boiling points and lets small molecules dissolve in water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks C-H hydrogens form hydrogen bonds with water.",
      remediation: "Hydrogen bonds need H on O, N or F; water's H bonds to the carbonyl oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks carboxylic acids are ionic compounds.",
      remediation: "Acids are covalent; they ionise only slightly in water. Their high boiling points come from hydrogen-bonded dimers.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Reverses the order of boiling points.",
      remediation: "Hydrogen bonding (alcohols) > dipole attraction (aldehydes) > van der Waals forces (alkanes).",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.2 (ix)" },
      stem: t`Arrange formaldehyde, ethane and methyl alcohol in increasing order of boiling point.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`formaldehyde < ethane < methyl alcohol`, correct: false, misconceptionId: "C04-M6", value: "hcho_ethane_meoh" },
        { key: "B", text: t`ethane < formaldehyde < methyl alcohol`, correct: true, value: "ethane_hcho_meoh" },
        { key: "C", text: t`methyl alcohol < formaldehyde < ethane`, correct: false, misconceptionId: "C04-M9", value: "meoh_hcho_ethane" },
        { key: "D", text: t`ethane < methyl alcohol < formaldehyde`, correct: false, misconceptionId: "C04-M1", value: "ethane_meoh_hcho" },
      ],
      solution: {
        steps: [
          t`Ethane has only van der Waals forces; formaldehyde is polar; methyl alcohol hydrogen bonds.`,
          t`So ethane < formaldehyde < methyl alcohol.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.2 (viii)" },
      stem: t`What is formalin?`,
      verify: { kind: "value", inputs: {  }, params: { q: "formalin" } },
      options: [
        { key: "A", text: t`pure liquid methanal`, correct: false, misconceptionId: "C04-M4", value: "pure_methanal" },
        { key: "B", text: t`a $40\%$ solution of methanol in water`, correct: false, misconceptionId: "C04-M5", value: "aq_methanol" },
        { key: "C", text: t`a $40\%$ solution of methanal in water`, correct: true, value: "aq_methanal_40" },
        { key: "D", text: t`methanal gas bubbled through, but not dissolved in, water`, correct: false, misconceptionId: "C04-M6", value: "suspension" },
      ],
      solution: {
        steps: [
          t`Methanal is a gas at room temperature.`,
          t`Formalin is its $40\%$ solution in water.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`Why do methanal, ethanal and propanone dissolve in water?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dissolve" } },
      options: [
        { key: "A", text: t`Their C-H hydrogens hydrogen bond to water`, correct: false, misconceptionId: "C04-M7", value: "ch_bonds" },
        { key: "B", text: t`Only because their molecules are light`, correct: false, misconceptionId: "C04-M2", value: "light_only" },
        { key: "C", text: t`They do not: carbonyl compounds are non-polar`, correct: false, misconceptionId: "C04-M6", value: "do_not_dissolve" },
        { key: "D", text: t`Their carbonyl oxygen accepts hydrogen bonds from water`, correct: true, value: "accept_h_bonds" },
      ],
      solution: {
        steps: [
          t`Water's H hydrogen bonds to the carbonyl oxygen.`,
          t`So small aldehydes and ketones dissolve.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#23" },
      stem: t`Why do carboxylic acids boil higher than alcohols of similar molar mass?`,
      verify: { kind: "value", inputs: {  }, params: { q: "acids" } },
      options: [
        { key: "A", text: t`Their molecules pair up as hydrogen-bonded dimers`, correct: true, value: "dimers" },
        { key: "B", text: t`Only because acids are heavier`, correct: false, misconceptionId: "C04-M2", value: "mass_only" },
        { key: "C", text: t`Carboxylic acids are ionic compounds`, correct: false, misconceptionId: "C04-M8", value: "ionic" },
        { key: "D", text: t`They do not: alcohols boil higher`, correct: false, misconceptionId: "C04-M3", value: "alcohols_higher" },
      ],
      solution: {
        steps: [
          t`Two acid molecules hydrogen bond to each other twice, forming a dimer.`,
          t`Boiling must break these bonds, so acids boil higher.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`Propanal ($M = 58$) boils at $322\ \mathrm{K}$, propan-1-ol ($M = 60$) at $370\ \mathrm{K}$. Why does propanal boil lower?`,
      verify: { kind: "value", inputs: {  }, params: { q: "propanal" } },
      options: [
        { key: "A", text: t`Propanal is non-polar`, correct: false, misconceptionId: "C04-M6", value: "nonpolar" },
        { key: "B", text: t`Propanal molecules cannot hydrogen bond to one another`, correct: true, value: "no_self_h_bond" },
        { key: "C", text: t`It does not: propanal's C=O hydrogen bonds more strongly`, correct: false, misconceptionId: "C04-M1", value: "propanal_higher" },
        { key: "D", text: t`Only because propanal is slightly lighter`, correct: false, misconceptionId: "C04-M2", value: "lighter" },
      ],
      solution: {
        steps: [
          t`Propan-1-ol hydrogen bonds through its OH; propanal has no O-H.`,
          t`So propanal molecules attract each other less and it boils lower.`,
        ],
      },
    },
  ],
};
