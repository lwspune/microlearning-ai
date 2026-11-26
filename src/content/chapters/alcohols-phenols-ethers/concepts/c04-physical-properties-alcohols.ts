import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Ethanol and dimethyl ether have the same formula, $\ce{C2H6O}$. Yet ethanol is a liquid that boils at $351\ \mathrm{K}$ and dimethyl ether a gas boiling at $248\ \mathrm{K}$. Why?`,
    reveal: t`Ethanol's OH hydrogen bonds to neighbouring molecules, holding them together; the ether has no H on oxygen, so its molecules attract only weakly.`,
  },
  explanation: {
    intuition: [
      t`A **hydrogen bond** is the attraction between H on an O (or N, F) and a lone pair on another such atom.`,
      t`Alcohols and phenols have O-H groups, so their molecules hydrogen bond to one another.`,
      t`Breaking these bonds takes extra energy, so they boil high.`,
      t`Ethers have no O-H, so they cannot hydrogen bond to one another.`,
      t`With water, though, both alcohols and ethers can form hydrogen bonds.`,
    ],
    formal: [
      {
        title: "Boiling points",
        points: [
          t`Alcohols boil far above ethers and alkanes of similar molar mass.`,
          t`Boiling points rise with chain length (stronger van der Waals forces).`,
          t`Branching lowers them: the molecules touch less.`,
          t`Butyl alcohols: n- $118$, iso- $108$, sec- $99.5$, tert- $83^\circ\mathrm{C}$.`,
        ],
      },
      {
        title: "Solubility in water",
        points: [
          t`Small alcohols mix with water, hydrogen bonding with it.`,
          t`Solubility falls as the carbon chain grows longer.`,
          t`Ethers accept hydrogen bonds from water, so small ethers dissolve a little.`,
          t`Alkanes cannot hydrogen bond at all, so they do not dissolve.`,
        ],
      },
      {
        title: "Intramolecular hydrogen bonds",
        points: [
          t`In o-nitrophenol the OH bonds to the neighbouring $\ce{NO2}$ inside the same molecule.`,
          t`Its OH is then not free to bond with water or other molecules.`,
          t`So o-nitrophenol is more volatile and less soluble than p-nitrophenol.`,
          t`p-Nitrophenol bonds between molecules and with water instead.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange propan-1-ol, methoxyethane and butane (all about $M = 60$) in increasing order of boiling point.`,
      steps: [
        t`Butane has only weak van der Waals forces.`,
        t`Methoxyethane is polar but cannot hydrogen bond to itself.`,
        t`Propan-1-ol hydrogen bonds through its OH.`,
      ],
      answer: t`Butane < methoxyethane < propan-1-ol`,
    },
    visualSpec: t`Switch hydrogen bonds on and off between molecules and watch the boiling point bar rise and fall.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Ranks boiling point or solubility by molar mass alone, ignoring hydrogen bonding.",
      remediation: "Hydrogen bonding through O-H raises boiling points far more than a small change in molar mass.",
      fallback: { kind: "ext", topic: "intermolecular forces (Std XI Chemistry)" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks branching raises the boiling point.",
      remediation: "Branched molecules are more compact and touch less, so their boiling points are lower.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks ethers hydrogen bond to one another like alcohols.",
      remediation: "An ether has no H on its oxygen, so its molecules cannot hydrogen bond to each other.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks a hydrogen bond inside the molecule helps it dissolve in water.",
      remediation: "An intramolecular hydrogen bond uses up the OH, so it cannot bond with water: solubility falls.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Reverses the order, or thinks the hydrocarbon boils higher.",
      remediation: "O-H compounds boil highest because of hydrogen bonding; then ethers; then alkanes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks ethers cannot hydrogen bond with water at all.",
      remediation: "An ether's oxygen has lone pairs that accept hydrogen bonds from water's H.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks a benzene ring stops phenol hydrogen bonding with water.",
      remediation: "Phenol's OH hydrogen bonds with water just as an alcohol's does.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks only dipole-dipole forces explain an alcohol's high boiling point.",
      remediation: "Alcohols are held mainly by hydrogen bonds, much stronger than ordinary dipole-dipole forces.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks any compound with C-H bonds can hydrogen bond with water.",
      remediation: "A hydrogen bond needs H on O, N or F, or a lone pair on O, N or F; C-H bonds do not count.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks a secondary alcohol hydrogen bonds most weakly.",
      remediation: "All four butyl alcohols hydrogen bond; branching decides the order, so the most branched (tertiary) boils lowest.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (i)" },
      stem: t`Arrange in increasing order of boiling point: (1) butan-1-ol, $\ce{CH3CH2CH2CH2OH}$; (2) 2-methoxypropane, $\ce{(CH3)2CH-O-CH3}$; (3) 2-methylpropan-2-ol, $\ce{(CH3)3C-OH}$.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`(3) < (2) < (1)`, correct: false, misconceptionId: "C04-M3", value: "tert_ether_n" },
        { key: "B", text: t`(1) < (3) < (2)`, correct: false, misconceptionId: "C04-M5", value: "n_tert_ether" },
        { key: "C", text: t`(2) < (3) < (1)`, correct: true, value: "ether_tert_n" },
        { key: "D", text: t`(2) < (1) < (3)`, correct: false, misconceptionId: "C04-M2", value: "ether_n_tert" },
      ],
      solution: {
        steps: [
          t`The ether (2) cannot hydrogen bond to itself: lowest.`,
          t`Both alcohols hydrogen bond; branched (3) boils below unbranched (1).`,
          t`So (2) < (3) < (1).`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.3" },
      stem: t`Of n-butyl, isobutyl, sec-butyl and tert-butyl alcohol (all $\ce{C4H9OH}$), which has the lowest boiling point?`,
      verify: { kind: "value", inputs: {  }, params: { q: "butyl" } },
      options: [
        { key: "A", text: t`n-butyl alcohol, the unbranched one`, correct: false, misconceptionId: "C04-M2", value: "n_butyl" },
        { key: "B", text: t`none: all four boil at the same temperature, having the same molar mass`, correct: false, misconceptionId: "C04-M1", value: "all_equal" },
        { key: "C", text: t`sec-butyl alcohol, the secondary one`, correct: false, misconceptionId: "C04-M10", value: "sec_butyl" },
        { key: "D", text: t`tert-butyl alcohol, the most branched`, correct: true, value: "tert_butyl" },
      ],
      solution: {
        steps: [
          t`All four have the same mass and hydrogen bond alike.`,
          t`Branching lowers the boiling point; tert-butyl alcohol is the most branched.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Solved Ex.11.4" },
      stem: t`Which is more soluble in water, o-nitrophenol or p-nitrophenol, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitro" } },
      options: [
        { key: "A", text: t`Equally soluble: they have the same molar mass`, correct: false, misconceptionId: "C04-M1", value: "equal" },
        { key: "B", text: t`Neither dissolves: the benzene ring stops hydrogen bonding with water`, correct: false, misconceptionId: "C04-M7", value: "neither" },
        { key: "C", text: t`p-Nitrophenol: its OH is free to hydrogen bond with water`, correct: true, value: "para_more" },
        { key: "D", text: t`o-Nitrophenol: its internal hydrogen bond makes it more polar`, correct: false, misconceptionId: "C04-M4", value: "ortho_more" },
      ],
      solution: {
        steps: [
          t`In o-nitrophenol the OH bonds to the neighbouring $\ce{NO2}$ inside the molecule.`,
          t`In p-nitrophenol the OH is free to hydrogen bond with water, so it dissolves more.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#22" },
      stem: t`Why does ethanol ($M = 46$) boil far above ethane ($M = 30$)?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ethanol" } },
      options: [
        { key: "A", text: t`Only because ethanol has the larger molar mass`, correct: false, misconceptionId: "C04-M1", value: "mass_only" },
        { key: "B", text: t`Only because ethanol is polar, with dipole-dipole attraction`, correct: false, misconceptionId: "C04-M8", value: "dipole_only" },
        { key: "C", text: t`It does not: ethane boils higher, being a hydrocarbon`, correct: false, misconceptionId: "C04-M5", value: "lower" },
        { key: "D", text: t`Ethanol molecules hydrogen bond to one another through their OH groups`, correct: true, value: "h_bonding" },
      ],
      solution: {
        steps: [
          t`Ethanol has an O-H group; ethane does not.`,
          t`Hydrogen bonds between ethanol molecules must be broken to boil it.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.1 (viii)" },
      stem: t`Which compound cannot form hydrogen bonds with water?`,
      verify: { kind: "value", inputs: {  }, params: { q: "noh" } },
      options: [
        { key: "A", text: t`none: all of them can, as each has C-H bonds`, correct: false, misconceptionId: "C04-M9", value: "none_all_bond" },
        { key: "B", text: t`butane, $\ce{CH3CH2CH2CH3}$`, correct: true, value: "butane" },
        { key: "C", text: t`methoxyethane, $\ce{CH3CH2-O-CH3}$`, correct: false, misconceptionId: "C04-M6", value: "methoxyethane" },
        { key: "D", text: t`phenol, $\ce{C6H5OH}$`, correct: false, misconceptionId: "C04-M7", value: "phenol" },
      ],
      solution: {
        steps: [
          t`Methoxyethane and phenol have O with lone pairs; phenol also has O-H.`,
          t`Butane has neither, so it cannot hydrogen bond with water.`,
        ],
      },
    },
  ],
};
