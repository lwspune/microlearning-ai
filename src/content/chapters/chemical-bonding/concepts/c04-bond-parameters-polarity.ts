import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$\ce{CO2}$ and $\ce{H2O}$ both have polar bonds, yet water dissolves salt and dry ice does not. Why does one behave as polar and the other not?`,
    reveal: t`$\ce{CO2}$ is straight, so its two bond dipoles cancel. Bent water's dipoles add up.`,
  },
  explanation: {
    intuition: [
      t`Bonds have lengths, strengths and angles.`,
      t`More bonds between two atoms pull them closer and hold them tighter.`,
      t`Unequal sharing makes a bond polar.`,
      t`A molecule's polarity depends on how its bond dipoles add up.`,
    ],
    formal: [
      {
        title: "Bond parameters",
        points: [
          t`Bond length: distance between bonded nuclei.`,
          t`Bond enthalpy: energy needed to break one mole of bonds.`,
          t`C–C 348, C=C 612, C≡C 837 kJ/mol: higher bond order, shorter and stronger.`,
          t`Strength: covalent > hydrogen bond > van der Waals.`,
        ],
      },
      {
        title: "Polarity",
        points: [
          t`A bond between atoms of different electronegativity is polar.`,
          t`Dipole moment = charge × distance.`,
          t`Symmetric molecules ($\ce{CO2}$, $\ce{BF3}$, $\ce{CH4}$) have zero dipole moment.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $\ce{BF3}$ polar?`,
      steps: [
        t`Each B–F bond is polar.`,
        t`Trigonal planar: the three dipoles cancel.`,
      ],
      answer: t`No, it is nonpolar`,
    },
    visualSpec: t`Draw each bond as an arrow and add the arrows to find the molecule's overall dipole.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Ranks van der Waals forces above hydrogen bonds.",
      remediation: "Hydrogen bonds are stronger than van der Waals forces.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Ranks hydrogen bonds above covalent bonds.",
      remediation: "Covalent bonds are far stronger than hydrogen bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Reverses the order.",
      remediation: "Covalent > hydrogen bond > van der Waals.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks unsaturation lengthens bonds.",
      remediation: "More bonds pull the atoms closer: shorter.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks bond length does not change.",
      remediation: "C–C 154, C=C 134, C≡C 120 pm: it shortens.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks the length rises then falls.",
      remediation: "It falls steadily from single to triple.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks single bonds are strongest.",
      remediation: "Bond enthalpy rises with bond order.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks double bonds are strongest.",
      remediation: "837 kJ/mol for C≡C beats 612 for C=C.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks all are equally stable.",
      remediation: "Their bond enthalpies differ widely.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks C=O is nonpolar.",
      remediation: "O is more electronegative than C: the bond is polar.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Ignores the molecule's symmetry.",
      remediation: t`Linear $\ce{CO2}$'s two dipoles cancel.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Reverses bond and molecule.",
      remediation: "The bonds are polar; the molecule is not.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks HF is ionic.",
      remediation: "HF is a polar covalent molecule.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks H is more electronegative.",
      remediation: "F is the most electronegative element.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Puts a lone pair on H.",
      remediation: "H has no lone pair; F has three.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.1 (B)" },
      stem: t`Which lists bonds and forces from strongest to weakest?`,
      verify: { kind: "value", inputs: {  }, params: { q: "strength" } },
      options: [
        { key: "A", text: t`hydrogen bond > covalent > van der Waals`, correct: false, misconceptionId: "C04-M2", value: "h_cov_vdw" },
        { key: "B", text: t`covalent > hydrogen bond > van der Waals`, correct: true, value: "cov_h_vdw" },
        { key: "C", text: t`van der Waals > hydrogen bond > covalent`, correct: false, misconceptionId: "C04-M3", value: "vdw_h_cov" },
        { key: "D", text: t`covalent > van der Waals > hydrogen bond`, correct: false, misconceptionId: "C04-M1", value: "cov_vdw_h" },
      ],
      solution: {
        steps: [
          t`Covalent bonds are strongest.`,
          t`Then hydrogen bonds, then van der Waals.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.4 (a)" },
      stem: t`As unsaturation increases from C–C to C=C to C≡C, the bond length`,
      verify: { kind: "value", inputs: {  }, params: { q: "unsaturation" } },
      options: [
        { key: "A", text: t`increases`, correct: false, misconceptionId: "C04-M4", value: "increases" },
        { key: "B", text: t`stays the same`, correct: false, misconceptionId: "C04-M5", value: "unchanged" },
        { key: "C", text: t`decreases`, correct: true, value: "decreases" },
        { key: "D", text: t`first increases, then decreases`, correct: false, misconceptionId: "C04-M6", value: "rises_falls" },
      ],
      solution: {
        steps: [
          t`More shared pairs pull the atoms closer.`,
          t`Bond length decreases.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.4 (b)" },
      stem: t`The C–C bond enthalpies are 348 (ethane), 612 (ethene) and 837 kJ/mol (ethyne). Which carbon-carbon bond is the most stable?`,
      verify: { kind: "value", inputs: {  }, params: { q: "stable" } },
      options: [
        { key: "A", text: t`ethene's`, correct: false, misconceptionId: "C04-M8", value: "ethene" },
        { key: "B", text: t`all are equally stable`, correct: false, misconceptionId: "C04-M9", value: "all_equal" },
        { key: "C", text: t`ethane's`, correct: false, misconceptionId: "C04-M7", value: "ethane" },
        { key: "D", text: t`ethyne's`, correct: true, value: "ethyne" },
      ],
      solution: {
        steps: [
          t`Largest bond enthalpy: 837 kJ/mol.`,
          t`Ethyne's C≡C.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.1 (D)" },
      stem: t`Which is true for $\ce{CO2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "co2" } },
      options: [
        { key: "A", text: t`C=O bonds polar; molecule nonpolar`, correct: true, value: "polar_bond_nonpolar_molecule" },
        { key: "B", text: t`C=O bonds polar; molecule polar`, correct: false, misconceptionId: "C04-M11", value: "polar_both" },
        { key: "C", text: t`C=O bonds nonpolar; molecule polar`, correct: false, misconceptionId: "C04-M12", value: "nonpolar_bond_polar_molecule" },
        { key: "D", text: t`C=O bonds nonpolar; molecule nonpolar`, correct: false, misconceptionId: "C04-M10", value: "nonpolar_both" },
      ],
      solution: {
        steps: [
          t`Each C=O is polar.`,
          t`Linear: the dipoles cancel, so the molecule is nonpolar.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (H)" },
      stem: t`HF is a polar molecule because`,
      verify: { kind: "value", inputs: {  }, params: { q: "hf" } },
      options: [
        { key: "A", text: t`H carries a lone pair`, correct: false, misconceptionId: "C04-M15", value: "lone_pair_h" },
        { key: "B", text: t`F is far more electronegative, so the shared pair lies nearer F`, correct: true, value: "f_electronegative" },
        { key: "C", text: t`HF is an ionic compound`, correct: false, misconceptionId: "C04-M13", value: "ionic" },
        { key: "D", text: t`H is more electronegative than F`, correct: false, misconceptionId: "C04-M14", value: "h_electronegative" },
      ],
      solution: {
        steps: [
          t`F pulls the shared pair towards itself.`,
          t`H becomes δ+, F δ−.`,
        ],
      },
    },
  ],
};
