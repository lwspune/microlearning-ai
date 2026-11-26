import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Trimethylamine and n-propylamine have the same formula, $\ce{C3H9N}$. Trimethylamine is a gas on a cool day; n-propylamine is a liquid until 322 K. What does n-propylamine have that trimethylamine lacks?`,
    reveal: t`N-H bonds. n-Propylamine's molecules hydrogen bond to each other; trimethylamine has no H on N, so it cannot.`,
  },
  explanation: {
    intuition: [
      t`Primary and secondary amines have N-H bonds, so their molecules hydrogen bond to one another.`,
      t`Tertiary amines have no N-H bond, so they cannot.`,
      t`N is less electronegative than O, so N-H hydrogen bonds are weaker than O-H ones.`,
      t`So amines boil above alkanes but below alcohols of similar mass.`,
    ],
    formal: [
      {
        title: "Boiling points",
        points: [
          t`Isomeric amines: primary > secondary > tertiary.`,
          t`n-Propylamine (322 K) > ethylmethylamine (310 K) > trimethylamine (276 K).`,
          t`Branching lowers bp: n-butylamine > isobutylamine > sec-butylamine > tert-butylamine.`,
          t`Similar mass: alkane < amine < alcohol, e.g. propane < ethanamine < ethanol.`,
        ],
      },
      {
        title: "Solubility",
        points: [
          t`Lower aliphatic amines dissolve in water: they hydrogen bond with it.`,
          t`Solubility falls as the hydrocarbon part grows; aniline is only slightly soluble.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which boils higher: ethanamine or N-methylmethanamine (both $\ce{C2H7N}$)?`,
      steps: [
        t`Ethanamine has two N-H bonds; N-methylmethanamine has one.`,
        t`More N-H bonds mean more hydrogen bonding.`,
      ],
      answer: t`Ethanamine`,
    },
    visualSpec: t`Compare primary, secondary and tertiary amine molecules and count the hydrogen bonds each can make to its neighbours.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks the compact, branched isomer has the strongest attractions.",
      remediation: "Branching shrinks the surface that touches neighbours, so van der Waals forces and bp fall.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Thinks an $\ce{NH2}$ on an inner carbon hydrogen bonds better.`,
      remediation: t`An inner $\ce{NH2}$ is more crowded and the molecule more branched, so the bp is lower.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks extra methyl branches add van der Waals attraction.",
      remediation: "Branching makes the molecule more compact; the straight chain has the most contact and the highest bp.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks more alkyl groups on N mean stronger attractions and a higher bp.",
      remediation: "Each alkyl group on N replaces an N-H bond, so hydrogen bonding and bp fall.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks secondary amines hydrogen bond most.",
      remediation: "Primary amines have two N-H bonds, secondary only one.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks isomers boil at the same temperature because they have the same mass.",
      remediation: "Hydrogen bonding and shape differ between isomers, so their bps differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks N-H hydrogen bonds are stronger than O-H ones.",
      remediation: "O is more electronegative than N, so O-H hydrogen bonds are stronger.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks amines do not hydrogen bond.",
      remediation: "Primary and secondary amines have N-H bonds and do hydrogen bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks hydrogen bonding lowers the boiling point.",
      remediation: "Hydrogen bonds hold molecules together, so more energy is needed: bp rises.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks a tertiary amine's N has no lone pair.",
      remediation: "Tertiary amines keep the lone pair; they lack an N-H bond.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks isomers have different molar masses.",
      remediation: "Isomers share a formula, so their molar masses are equal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks boiling breaks covalent bonds.",
      remediation: "Boiling separates molecules; only the forces between them are overcome.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Thinks amines ionise completely in water.",
      remediation: "Amines are weak bases; only a small fraction is protonated.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Thinks amines are nonpolar.",
      remediation: "The C-N and N-H bonds are polar, and the lone pair makes amines polar.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Thinks amines react with water to give alcohols.",
      remediation: "Amines dissolve unchanged; water does not break the C-N bond.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (iii)" },
      stem: t`Which of these isomers has the highest boiling point?`,
      verify: { kind: "value", inputs: {  }, params: { q: "butyl" } },
      options: [
        { key: "A", text: t`sec-butylamine, $\ce{CH3CH2CH(CH3)NH2}$`, correct: false, misconceptionId: "C03-M2", value: "sec_butylamine" },
        { key: "B", text: t`isobutylamine, $\ce{(CH3)2CHCH2NH2}$`, correct: false, misconceptionId: "C03-M3", value: "isobutylamine" },
        { key: "C", text: t`tert-butylamine, $\ce{(CH3)3CNH2}$`, correct: false, misconceptionId: "C03-M1", value: "tert_butylamine" },
        { key: "D", text: t`n-butylamine, $\ce{CH3CH2CH2CH2NH2}$`, correct: true, value: "n_butylamine" },
      ],
      solution: {
        steps: [
          t`All four are primary amines; only their shape differs.`,
          t`The straight chain has the most contact: n-butylamine.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.2 (viii)" },
      stem: t`Arrange n-propylamine, ethylmethylamine and trimethylamine (all $\ce{C3H9N}$) in increasing order of boiling point.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`trimethylamine < ethylmethylamine < n-propylamine`, correct: true, value: "tri_lt_ethylmethyl_lt_propyl" },
        { key: "B", text: t`all three boil at the same temperature`, correct: false, misconceptionId: "C03-M6", value: "all_equal" },
        { key: "C", text: t`trimethylamine < n-propylamine < ethylmethylamine`, correct: false, misconceptionId: "C03-M5", value: "tri_lt_propyl_lt_ethylmethyl" },
        { key: "D", text: t`n-propylamine < ethylmethylamine < trimethylamine`, correct: false, misconceptionId: "C03-M4", value: "propyl_lt_ethylmethyl_lt_tri" },
      ],
      solution: {
        steps: [
          t`N-H bonds: propylamine 2, ethylmethylamine 1, trimethylamine 0.`,
          t`So trimethylamine < ethylmethylamine < n-propylamine.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Propane, ethanamine and ethanol have molar masses 44, 45 and 46 g/mol. Arrange them in increasing order of boiling point.`,
      verify: { kind: "value", inputs: {  }, params: { q: "alcohol" } },
      options: [
        { key: "A", text: t`propane < ethanol < ethanamine`, correct: false, misconceptionId: "C03-M7", value: "propane_lt_ethanol_lt_amine" },
        { key: "B", text: t`propane < ethanamine < ethanol`, correct: true, value: "propane_lt_amine_lt_ethanol" },
        { key: "C", text: t`ethanol < ethanamine < propane`, correct: false, misconceptionId: "C03-M9", value: "ethanol_lt_amine_lt_propane" },
        { key: "D", text: t`propane = ethanamine < ethanol`, correct: false, misconceptionId: "C03-M8", value: "propane_eq_amine_lt_ethanol" },
      ],
      solution: {
        steps: [
          t`Propane cannot hydrogen bond; N-H bonds are weaker than O-H.`,
          t`So propane < ethanamine < ethanol.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`Trimethylamine boils at 276 K but its isomer n-propylamine at 322 K. Why is trimethylamine's boiling point so low?`,
      verify: { kind: "value", inputs: {  }, params: { q: "tertiary" } },
      options: [
        { key: "A", text: t`it has a smaller molar mass`, correct: false, misconceptionId: "C03-M11", value: "smaller_mass" },
        { key: "B", text: t`its C-N bonds are weaker and break on boiling`, correct: false, misconceptionId: "C03-M12", value: "weaker_c_n" },
        { key: "C", text: t`it has no N-H bond, so its molecules cannot hydrogen bond to each other`, correct: true, value: "no_n_h" },
        { key: "D", text: t`its nitrogen has no lone pair`, correct: false, misconceptionId: "C03-M10", value: "no_lone_pair" },
      ],
      solution: {
        steps: [
          t`Trimethylamine's N carries three methyl groups and no H.`,
          t`Without N-H it cannot hydrogen bond to itself.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Methanamine and ethanamine dissolve readily in water because`,
      verify: { kind: "value", inputs: {  }, params: { q: "soluble" } },
      options: [
        { key: "A", text: t`they react with water to give alcohols and ammonia`, correct: false, misconceptionId: "C03-M15", value: "hydrolyse" },
        { key: "B", text: t`they ionise completely into $\ce{RNH3+}$ and $\ce{OH-}$`, correct: false, misconceptionId: "C03-M13", value: "ionise_completely" },
        { key: "C", text: t`they are nonpolar molecules`, correct: false, misconceptionId: "C03-M14", value: "nonpolar" },
        { key: "D", text: t`their N-H and lone pair form hydrogen bonds with water`, correct: true, value: "h_bond_water" },
      ],
      solution: {
        steps: [
          t`The amine's N-H and lone pair hydrogen bond with water.`,
          t`Small amines therefore mix freely.`,
        ],
      },
    },
  ],
};
