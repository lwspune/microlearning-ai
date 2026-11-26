import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`In the acetate ion one O seems double-bonded and the other single-bonded, yet both C–O bonds are measured equal. How?`,
    reveal: t`Neither drawing is the real ion. It is a resonance hybrid: the double bond and the charge are spread over both oxygens.`,
  },
  explanation: {
    intuition: [
      t`Some molecules need two or more Lewis structures.`,
      t`These resonance structures differ only in where electrons are.`,
      t`The real molecule is a single hybrid, more stable than any one structure.`,
      t`Resonance needs π electrons or lone pairs next to π bonds.`,
    ],
    formal: [
      {
        title: "Rules",
        points: [
          t`Atoms stay put; only π and lone-pair electrons move.`,
          t`More stable structures: no separated charges; negative charge on electronegative atoms.`,
          t`Equivalent structures (acetate, formate) give equal bonds.`,
        ],
      },
      {
        title: "Conjugation",
        points: [
          t`Alternating single and double bonds form a conjugated system: $\ce{CH2=CH-CH=CH2}$.`,
          t`Double bonds separated by a $\ce{CH2}$ are isolated, not conjugated.`,
        ],
      },
    ],
    worked: {
      prompt: t`Does buta-1,3-diene show resonance?`,
      steps: [
        t`Its two C=C are joined by a single bond.`,
        t`Conjugated π electrons delocalise: yes.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`Push curly arrows around acetate and watch the charge spread over both oxygens.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Thinks any lone pair gives resonance.",
      remediation: "A lone pair needs an adjacent π bond to delocalise into.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks σ bonds delocalise.",
      remediation: "Ethane has only σ bonds: no resonance.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Thinks any ring has resonance.",
      remediation: "Cyclohexane has no π bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Counts isolated double bonds.",
      remediation: t`A $\ce{CH2}$ between the C=C bonds breaks conjugation.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks both.",
      remediation: "Only II has alternating double and single bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks neither.",
      remediation: "II's C=C–C=C is conjugated.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks structures are separate molecules.",
      remediation: "There is one molecule, a hybrid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Moves atoms.",
      remediation: "Only electrons move between resonance structures.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks the molecule flips.",
      remediation: "The hybrid exists all the time; it does not flip.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Prefers the most charges.",
      remediation: "Charge separation makes a structure less stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Prefers positive charge on O.",
      remediation: "Positive charge on electronegative O is unfavourable.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Weights all equally.",
      remediation: "Non-equivalent structures contribute unequally.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Keeps one C=O fixed.",
      remediation: "The two structures are equivalent: bonds are equal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Puts the charge on C.",
      remediation: "The charge is shared by the two oxygens.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Denies resonance.",
      remediation: t`$\ce{HCOO-}$ has two equivalent structures.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.10" },
      stem: t`Which species is stabilised by resonance?`,
      verify: { kind: "value", inputs: {  }, params: { q: "shows" } },
      options: [
        { key: "A", text: t`ethane`, correct: false, misconceptionId: "C07-M2", value: "ethane" },
        { key: "B", text: t`cyclohexane`, correct: false, misconceptionId: "C07-M3", value: "cyclohexane" },
        { key: "C", text: t`methanol, $\ce{CH3OH}$`, correct: false, misconceptionId: "C07-M1", value: "methanol" },
        { key: "D", text: t`the acetate ion, $\ce{CH3COO-}$`, correct: true, value: "acetate" },
      ],
      solution: {
        steps: [
          t`Acetate's charge can sit on either O.`,
          t`It is resonance stabilised.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.8" },
      stem: t`Which contains a conjugated system of π bonds? (I) $\ce{CH2=CH-CH2-CH=CH2}$ (II) $\ce{CH2=CH-CH=CH-CH3}$`,
      verify: { kind: "value", inputs: {  }, params: { q: "conjugated" } },
      options: [
        { key: "A", text: t`II only`, correct: true, value: "second" },
        { key: "B", text: t`both`, correct: false, misconceptionId: "C07-M5", value: "both" },
        { key: "C", text: t`neither`, correct: false, misconceptionId: "C07-M6", value: "neither" },
        { key: "D", text: t`I only`, correct: false, misconceptionId: "C07-M4", value: "first" },
      ],
      solution: {
        steps: [
          t`II: C=C–C=C, alternating.`,
          t`I: a $\ce{CH2}$ separates the double bonds.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.7 (A)" },
      stem: t`Resonance structures of a molecule`,
      verify: { kind: "value", inputs: {  }, params: { q: "hybrid" } },
      options: [
        { key: "A", text: t`rapidly flip from one to another`, correct: false, misconceptionId: "C07-M9", value: "flips" },
        { key: "B", text: t`differ only in electron positions; the real molecule is a hybrid of them`, correct: true, value: "electrons_only_hybrid" },
        { key: "C", text: t`are separate molecules in equilibrium`, correct: false, misconceptionId: "C07-M7", value: "equilibrium" },
        { key: "D", text: t`differ in the positions of atoms`, correct: false, misconceptionId: "C07-M8", value: "atoms_move" },
      ],
      solution: {
        steps: [
          t`Only electrons move between structures.`,
          t`The real molecule is the hybrid.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (E)" },
      stem: t`Of two resonance structures of acetic acid, the more favourable one is`,
      verify: { kind: "value", inputs: {  }, params: { q: "favourable" } },
      options: [
        { key: "A", text: t`the one with a positive charge on O`, correct: false, misconceptionId: "C07-M11", value: "positive_on_o" },
        { key: "B", text: t`the one with the most charges`, correct: false, misconceptionId: "C07-M10", value: "most_charges" },
        { key: "C", text: t`the one with no separated charges`, correct: true, value: "no_separated_charge" },
        { key: "D", text: t`neither: all contribute equally`, correct: false, misconceptionId: "C07-M12", value: "all_equal" },
      ],
      solution: {
        steps: [
          t`Charge separation costs energy.`,
          t`The neutral structure is more favourable.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.9" },
      stem: t`In the formate ion, $\ce{HCOO-}$,`,
      verify: { kind: "value", inputs: {  }, params: { q: "formate" } },
      options: [
        { key: "A", text: t`one C=O and one C–O bond always remain`, correct: false, misconceptionId: "C07-M13", value: "fixed_double" },
        { key: "B", text: t`the negative charge sits on carbon`, correct: false, misconceptionId: "C07-M14", value: "charge_on_c" },
        { key: "C", text: t`there is no resonance`, correct: false, misconceptionId: "C07-M15", value: "no_resonance" },
        { key: "D", text: t`two equivalent resonance structures make both C–O bonds equal`, correct: true, value: "equivalent_equal_bonds" },
      ],
      solution: {
        steps: [
          t`Two equivalent structures.`,
          t`Both C–O bonds are equal.`,
        ],
      },
    },
  ],
};
