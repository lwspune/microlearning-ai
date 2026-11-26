import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Ethene molecules join into polythene with nothing left over. Diamines and diacids join into nylon, but a puddle of water collects. Why does one route make water and the other not?`,
    reveal: t`Ethene opens its double bond and adds whole. Nylon's monomers join by reacting their end groups, and each new link releases a water molecule.`,
  },
  explanation: {
    intuition: [
      t`**Addition** polymerization: unsaturated monomers open their double bonds and add on, losing nothing.`,
      t`It is a **chain growth** process, usually started by free radicals.`,
      t`**Condensation** polymerization: monomers with two reacting groups join, releasing a small molecule.`,
      t`It is a **step growth** process.`,
    ],
    formal: [
      {
        title: "Free-radical addition",
        points: [
          t`**Initiation**: an initiator such as benzoyl peroxide gives a free radical, which adds to $\ce{C=C}$.`,
          t`**Propagation**: the new radical adds monomer after monomer.`,
          t`**Termination**: two radicals combine and the chain stops.`,
          t`Examples: polythene, PVC, Teflon, polystyrene.`,
        ],
      },
      {
        title: "Condensation",
        points: [
          t`Each step loses water, HCl or methanol.`,
          t`Examples: nylon 6,6, terylene (PET), Bakelite.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is PVC an addition or a condensation polymer?`,
      steps: [
        t`Its monomer, $\ce{CH2=CHCl}$, has a C=C bond.`,
        t`It adds without losing any atoms.`,
      ],
      answer: t`Addition`,
    },
    visualSpec: t`Watch a radical march along a line of ethene molecules, and compare two monomers joining with a water molecule leaving.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks every polymer forms by addition.",
      remediation: "PET forms as its monomers join and lose water: condensation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Confuses polymerization with alkylation.",
      remediation: "No alkyl group is added; monomers join, losing water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks water is added.",
      remediation: "Water is released, not added, in condensation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks any polymer with a long carbon chain grows by addition.",
      remediation: "Nylon 6,6 forms by condensation, losing water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks two monomers heated together add.",
      remediation: "Terylene's two monomers condense, losing water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks cross-linked polymers grow by addition.",
      remediation: "Bakelite forms by condensation, losing water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Confuses free-radical with cationic initiation.",
      remediation: "A free radical, not a proton, starts the free-radical chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks water starts the chain.",
      remediation: "The initiator gives a free radical; water plays no part.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks every addition polymerization uses a Ziegler-Natta catalyst.",
      remediation: "Ziegler-Natta catalysts make HDP; free radicals make LDP and PVC.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Puts propagation first.",
      remediation: "A radical must first be made: initiation comes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Puts termination before propagation.",
      remediation: "The chain grows first, then stops.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Mixes condensation into free-radical addition.",
      remediation: "Addition has no condensation step; it begins with initiation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Confuses condensation with addition.",
      remediation: "Addition loses nothing; condensation releases a small molecule.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Thinks condensation needs free radicals.",
      remediation: t`Condensation joins reacting groups such as COOH and $\ce{NH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Thinks condensation needs C=C bonds.",
      remediation: "Condensation needs two reacting groups per monomer, not double bonds.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.1 (viii)" },
      stem: t`PET (terylene) is formed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "pet" } },
      options: [
        { key: "A", text: t`alkylation`, correct: false, misconceptionId: "C03-M2", value: "alkylation" },
        { key: "B", text: t`hydration`, correct: false, misconceptionId: "C03-M3", value: "hydration" },
        { key: "C", text: t`addition polymerization`, correct: false, misconceptionId: "C03-M1", value: "addition" },
        { key: "D", text: t`condensation polymerization`, correct: true, value: "condensation" },
      ],
      solution: {
        steps: [
          t`Ethylene glycol and terephthalic acid join.`,
          t`Water is released: condensation.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.2 (v)" },
      stem: t`Which of these is a chain-growth (addition) polymer?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chain" } },
      options: [
        { key: "A", text: t`polythene`, correct: true, value: "polythene" },
        { key: "B", text: t`Bakelite`, correct: false, misconceptionId: "C03-M6", value: "bakelite" },
        { key: "C", text: t`terylene`, correct: false, misconceptionId: "C03-M5", value: "terylene" },
        { key: "D", text: t`nylon 6,6`, correct: false, misconceptionId: "C03-M4", value: "nylon66" },
      ],
      solution: {
        steps: [
          t`Ethene's C=C bonds add in a chain.`,
          t`Polythene is a chain-growth polymer.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.5 (v)" },
      stem: t`In the free-radical polymerization of ethene, the chain is started by`,
      verify: { kind: "value", inputs: {  }, params: { q: "initiator" } },
      options: [
        { key: "A", text: t`a proton from an acid`, correct: false, misconceptionId: "C03-M7", value: "proton" },
        { key: "B", text: t`a free radical from an initiator such as benzoyl peroxide`, correct: true, value: "radical_peroxide" },
        { key: "C", text: t`a Ziegler-Natta catalyst`, correct: false, misconceptionId: "C03-M9", value: "ziegler_natta" },
        { key: "D", text: t`a water molecule`, correct: false, misconceptionId: "C03-M8", value: "water" },
      ],
      solution: {
        steps: [
          t`Benzoyl peroxide splits into free radicals.`,
          t`A radical adds to ethene and starts the chain.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`In what order do the steps of free-radical polymerization occur?`,
      verify: { kind: "value", inputs: {  }, params: { q: "steps" } },
      options: [
        { key: "A", text: t`initiation, termination, propagation`, correct: false, misconceptionId: "C03-M11", value: "init_term_prop" },
        { key: "B", text: t`condensation, propagation, termination`, correct: false, misconceptionId: "C03-M12", value: "cond_prop_term" },
        { key: "C", text: t`initiation, propagation, termination`, correct: true, value: "init_prop_term" },
        { key: "D", text: t`propagation, initiation, termination`, correct: false, misconceptionId: "C03-M10", value: "prop_init_term" },
      ],
      solution: {
        steps: [
          t`A radical is made, the chain grows, then stops.`,
          t`Initiation, propagation, termination.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.2 (iv)" },
      stem: t`In condensation polymerization, each step`,
      verify: { kind: "value", inputs: {  }, params: { q: "condensation" } },
      options: [
        { key: "A", text: t`needs monomers with C=C double bonds`, correct: false, misconceptionId: "C03-M15", value: "needs_c_c_double" },
        { key: "B", text: t`adds a monomer without losing any atoms`, correct: false, misconceptionId: "C03-M13", value: "no_atoms_lost" },
        { key: "C", text: t`needs a free radical`, correct: false, misconceptionId: "C03-M14", value: "free_radical" },
        { key: "D", text: t`joins two molecules and releases a small molecule such as water`, correct: true, value: "loses_small_molecule" },
      ],
      solution: {
        steps: [
          t`Two reacting groups join.`,
          t`A small molecule such as water is released.`,
        ],
      },
    },
  ],
};
