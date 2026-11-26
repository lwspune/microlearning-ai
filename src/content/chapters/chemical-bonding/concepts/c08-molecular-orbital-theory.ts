import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Pour liquid oxygen between the poles of a strong magnet and it sticks there. A simple Lewis structure, O=O with all electrons paired, says it shouldn't. What's missing?`,
    reveal: t`Molecular orbital theory: it puts two of oxygen's electrons unpaired in antibonding orbitals, which makes $\ce{O2}$ magnetic.`,
  },
  explanation: {
    intuition: [
      t`In MO theory, atomic orbitals combine into molecular orbitals spread over the whole molecule.`,
      t`Each combination gives a lower-energy **bonding** MO and a higher-energy **antibonding** MO.`,
      t`Electrons fill MOs as they fill atomic orbitals.`,
      t`Bond order and magnetism follow from the filling.`,
    ],
    formal: [
      {
        title: "Bond order",
        points: [
          t`Bond order $= \tfrac12(N_b - N_a)$.`,
          t`Higher bond order: shorter, stronger bond.`,
          t`Bond order 0: the molecule does not exist ($\ce{He2}$).`,
          t`$\ce{H2}$ 1, $\ce{N2}$ 3, $\ce{O2}$ 2.`,
        ],
      },
      {
        title: "Magnetism",
        points: [
          t`Unpaired electrons make a molecule paramagnetic.`,
          t`$\ce{O2}$ has two unpaired electrons in its π* orbitals.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the bond order of $\ce{N2}$ (10 bonding, 4 antibonding electrons).`,
      steps: [
        t`$\tfrac12(10 - 4)$.`,
        t`= 3.`,
      ],
      answer: t`3`,
    },
    visualSpec: t`Fill a molecular orbital diagram electron by electron and read off the bond order.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Credits hybridisation.",
      remediation: t`Hybridisation explains shapes, not $\ce{O2}$'s unpaired electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Credits valence bond theory.",
      remediation: t`VBT pairs all of $\ce{O2}$'s electrons; only MO theory finds two unpaired.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Credits VSEPR.",
      remediation: "VSEPR predicts shapes only.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Forgets the half.",
      remediation: t`Bond order $= \tfrac12(N_b - N_a)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Adds the two counts.",
      remediation: "Antibonding electrons cancel bonding ones: subtract.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Subtracts the wrong way.",
      remediation: t`Bonding minus antibonding: $\tfrac12(N_b - N_a)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: t`Thinks $\ce{He2}$ is stable.`,
      remediation: "Zero bond order means no net bonding.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Gives $\ce{He2}$ a single bond.`,
      remediation: "The antibonding electrons cancel the bonding ones.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: t`Thinks $\ce{He2}$ is paramagnetic.`,
      remediation: t`All four electrons are paired; and $\ce{He2}$ does not exist.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: t`Thinks all of $\ce{O2}$'s electrons pair.`,
      remediation: "Its two π* electrons occupy separate orbitals, unpaired.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Credits the double bond.",
      remediation: "Bond order does not make a molecule magnetic; unpaired electrons do.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Puts the unpaired electrons in bonding orbitals.",
      remediation: "They are in the antibonding π* orbitals.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.1 (E)" },
      stem: t`The paramagnetism of $\ce{O2}$ is explained by`,
      verify: { kind: "value", inputs: {  }, params: { q: "explains" } },
      options: [
        { key: "A", text: t`hybridisation`, correct: false, misconceptionId: "C08-M1", value: "hybridisation" },
        { key: "B", text: t`molecular orbital theory`, correct: true, value: "mot" },
        { key: "C", text: t`valence bond theory`, correct: false, misconceptionId: "C08-M2", value: "vbt" },
        { key: "D", text: t`VSEPR theory`, correct: false, misconceptionId: "C08-M3", value: "vsepr" },
      ],
      solution: {
        steps: [
          t`Only MO theory finds unpaired electrons in $\ce{O2}$.`,
          t`So MO theory explains its paramagnetism.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (H)" },
      stem: t`Bond order is given by ($N_b$: bonding electrons, $N_a$: antibonding electrons)`,
      verify: { kind: "value", inputs: {  }, params: { q: "formula" } },
      options: [
        { key: "A", text: t`$N_b - N_a$`, correct: false, misconceptionId: "C08-M4", value: "b_minus_a" },
        { key: "B", text: t`$\tfrac12(N_b + N_a)$`, correct: false, misconceptionId: "C08-M5", value: "half_b_plus_a" },
        { key: "C", text: t`$\tfrac12(N_b - N_a)$`, correct: true, value: "half_b_minus_a" },
        { key: "D", text: t`$\tfrac12(N_a - N_b)$`, correct: false, misconceptionId: "C08-M6", value: "a_minus_b" },
      ],
      solution: {
        steps: [
          t`Bonding electrons hold the atoms; antibonding weaken.`,
          t`$\tfrac12(N_b - N_a)$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`$\ce{O2}$ has 10 bonding and 6 antibonding electrons. What is its bond order?`,
      verify: { kind: "value", inputs: { Nb: "10", Na: "6" }, params: { q: "bond_order" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C08-M4", value: "4" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C08-M5", value: "8" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C08-M6", value: "-2" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`$\tfrac12(10 - 6)$.`,
          t`= 2.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`$\ce{He2}$ has 2 bonding and 2 antibonding electrons, so bond order 0. This means`,
      verify: { kind: "value", inputs: {  }, params: { q: "he2" } },
      options: [
        { key: "A", text: t`$\ce{He2}$ does not exist`, correct: true, value: "does_not_exist" },
        { key: "B", text: t`$\ce{He2}$ is paramagnetic`, correct: false, misconceptionId: "C08-M9", value: "paramagnetic" },
        { key: "C", text: t`$\ce{He2}$ has a single bond`, correct: false, misconceptionId: "C08-M8", value: "single_bond" },
        { key: "D", text: t`$\ce{He2}$ is very stable`, correct: false, misconceptionId: "C08-M7", value: "very_stable" },
      ],
      solution: {
        steps: [
          t`No net bonding.`,
          t`$\ce{He2}$ does not exist.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (I)" },
      stem: t`$\ce{O2}$ is paramagnetic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "paramagnetic" } },
      options: [
        { key: "A", text: t`it has unpaired electrons in bonding σ orbitals`, correct: false, misconceptionId: "C08-M12", value: "unpaired_bonding" },
        { key: "B", text: t`it has two unpaired electrons in antibonding π* orbitals`, correct: true, value: "unpaired_antibonding" },
        { key: "C", text: t`all its electrons are paired`, correct: false, misconceptionId: "C08-M10", value: "all_paired" },
        { key: "D", text: t`it has a double bond`, correct: false, misconceptionId: "C08-M11", value: "double_bond" },
      ],
      solution: {
        steps: [
          t`Two electrons sit singly in the π* orbitals.`,
          t`Unpaired electrons: paramagnetic.`,
        ],
      },
    },
  ],
};
