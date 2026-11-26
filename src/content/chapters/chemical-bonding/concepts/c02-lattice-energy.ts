import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Table salt melts at 1074 K; magnesium oxide only above 3000 K. Both are ionic solids built the same way. Why is one so much harder to break up?`,
    reveal: t`$\ce{Mg^{2+}}$ and $\ce{O^{2-}}$ carry double charges and are smaller, so they attract far more strongly: MgO has a much larger lattice energy.`,
  },
  explanation: {
    intuition: [
      t`In an ionic solid, ions are held in a lattice by attraction.`,
      t`**Lattice energy** is the energy released when gaseous ions form the solid.`,
      t`The larger it is, the more stable the compound.`,
      t`Higher charges and smaller ions give larger lattice energies.`,
    ],
    formal: [
      {
        title: "Lattice energy",
        points: [
          t`Energy released when gaseous ions come together to form one mole of an ionic solid.`,
          t`It measures the stability of an ionic compound.`,
          t`Same anion, higher cation charge: larger lattice energy.`,
          t`Same charges, smaller ions: larger lattice energy.`,
          t`$\ce{AlCl3}$ 5492 > $\ce{BeF2}$ 3020 > $\ce{CaCl2}$ 2258 > LiCl 853 > NaCl 788 kJ/mol.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which has the larger lattice energy, KCl or NaCl?`,
      steps: [
        t`Same charges.`,
        t`$\ce{Na+}$ is smaller than $\ce{K+}$, so the ions are closer.`,
      ],
      answer: t`NaCl`,
    },
    visualSpec: t`Shrink the ions and raise their charges, and watch the attraction holding the lattice together grow.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Reverses the order.",
      remediation: "Higher charges and smaller ions give larger lattice energies.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Lets small size outweigh charge.",
      remediation: t`$\ce{Al^{3+}}$'s triple charge puts $\ce{AlCl3}$ first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks 1 : 1 salts are most stable.",
      remediation: "Singly charged LiCl and NaCl have the smallest lattice energies.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Confuses lattice energy with ionisation energy.",
      remediation: "Ionisation energy removes an electron from one atom.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Confuses it with electronegativity.",
      remediation: "Electronegativity is an atom's pull on shared electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Confuses it with bond length.",
      remediation: "Lattice energy, not bond length, measures an ionic solid's stability.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks heavier formulas mean higher lattice energy.",
      remediation: "Charge and size decide, not mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks all 1 : 1 salts are equal.",
      remediation: t`$\ce{Mg^{2+}O^{2-}}$ has double charges.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks molar masses are needed.",
      remediation: "Compare the ions' charges and sizes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks bigger ions attract more.",
      remediation: "Smaller ions get closer and attract more.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks equal charges mean equal lattice energy.",
      remediation: t`Size matters too: $\ce{Li+}$ is smaller than $\ce{Na+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks only the anion matters.",
      remediation: "Both ions matter; here the cations differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Confuses it with electron gain.",
      remediation: "Electron gain enthalpy concerns one atom gaining an electron.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Confuses it with melting.",
      remediation: "Lattice energy forms the solid from gaseous ions.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (B)" },
      stem: t`Arrange $\ce{BeF2}$, $\ce{AlCl3}$, LiCl, $\ce{CaCl2}$ and NaCl in decreasing order of lattice energy.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`NaCl > LiCl > $\ce{CaCl2}$ > $\ce{BeF2}$ > $\ce{AlCl3}$`, correct: false, misconceptionId: "C02-M1", value: "na_li_ca_be_al" },
        { key: "B", text: t`$\ce{AlCl3}$ > $\ce{BeF2}$ > $\ce{CaCl2}$ > LiCl > NaCl`, correct: true, value: "al_be_ca_li_na" },
        { key: "C", text: t`$\ce{BeF2}$ > $\ce{AlCl3}$ > $\ce{CaCl2}$ > LiCl > NaCl`, correct: false, misconceptionId: "C02-M2", value: "be_al_ca_li_na" },
        { key: "D", text: t`LiCl > NaCl > $\ce{BeF2}$ > $\ce{CaCl2}$ > $\ce{AlCl3}$`, correct: false, misconceptionId: "C02-M3", value: "li_na_be_ca_al" },
      ],
      solution: {
        steps: [
          t`Higher charges first: $\ce{Al^{3+}}$, then $\ce{Be^{2+}}$ (small), then $\ce{Ca^{2+}}$.`,
          t`Then LiCl > NaCl ($\ce{Li+}$ smaller).`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (A)" },
      stem: t`The stability of an ionic compound is measured by its`,
      verify: { kind: "value", inputs: {  }, params: { q: "stability" } },
      options: [
        { key: "A", text: t`ionisation energy`, correct: false, misconceptionId: "C02-M4", value: "ionisation_energy" },
        { key: "B", text: t`electronegativity`, correct: false, misconceptionId: "C02-M5", value: "electronegativity" },
        { key: "C", text: t`lattice energy`, correct: true, value: "lattice_energy" },
        { key: "D", text: t`bond length`, correct: false, misconceptionId: "C02-M6", value: "bond_length" },
      ],
      solution: {
        steps: [
          t`Lattice energy measures how strongly ions are held.`,
          t`So it measures stability.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`Which has the higher lattice energy, NaCl or MgO?`,
      verify: { kind: "value", inputs: {  }, params: { q: "charge" } },
      options: [
        { key: "A", text: t`it cannot be told without molar masses`, correct: false, misconceptionId: "C02-M9", value: "need_masses" },
        { key: "B", text: t`they are equal, both being 1 : 1`, correct: false, misconceptionId: "C02-M8", value: "equal" },
        { key: "C", text: t`NaCl`, correct: false, misconceptionId: "C02-M7", value: "nacl" },
        { key: "D", text: t`MgO`, correct: true, value: "mgo" },
      ],
      solution: {
        steps: [
          t`MgO has 2+ and 2− ions.`,
          t`Higher charges: higher lattice energy.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Which has the higher lattice energy, LiCl or NaCl?`,
      verify: { kind: "value", inputs: {  }, params: { q: "size" } },
      options: [
        { key: "A", text: t`LiCl`, correct: true, value: "licl" },
        { key: "B", text: t`it depends only on the chloride ion`, correct: false, misconceptionId: "C02-M12", value: "anion_only" },
        { key: "C", text: t`NaCl`, correct: false, misconceptionId: "C02-M10", value: "nacl" },
        { key: "D", text: t`they are equal, the charges being equal`, correct: false, misconceptionId: "C02-M11", value: "equal" },
      ],
      solution: {
        steps: [
          t`Same charges.`,
          t`$\ce{Li+}$ is smaller: LiCl.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (A)" },
      stem: t`Lattice energy is the energy`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`needed to melt one mole of the solid`, correct: false, misconceptionId: "C02-M14", value: "melt" },
        { key: "B", text: t`released when gaseous ions come together to form one mole of the ionic solid`, correct: true, value: "ions_form_solid" },
        { key: "C", text: t`needed to remove an electron from a gaseous atom`, correct: false, misconceptionId: "C02-M4", value: "remove_electron" },
        { key: "D", text: t`released when a gaseous atom gains an electron`, correct: false, misconceptionId: "C02-M13", value: "gain_electron" },
      ],
      solution: {
        steps: [
          t`Gaseous ions form the solid.`,
          t`The energy released is the lattice energy.`,
        ],
      },
    },
  ],
};
