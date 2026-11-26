import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Methane ($M$ = 16) boils at 112 K, but water ($M$ = 18) at 373 K. Their molecules are almost the same mass. Why such a gap?`,
    reveal: t`Water molecules hydrogen bond to each other; methane molecules feel only weak dispersion forces.`,
  },
  explanation: {
    intuition: [
      t`Molecules attract each other with **intermolecular forces**.`,
      t`Dispersion forces act between all molecules and grow with size.`,
      t`Polar molecules also attract by dipole–dipole forces.`,
      t`H bonded to N, O or F gives the strongest: hydrogen bonds.`,
    ],
    formal: [
      {
        title: "Kinds of force",
        points: [
          t`**Dispersion (London)**: temporary dipoles; all molecules; grow with polarizability (Ar, $\ce{Cl2}$, $\ce{CCl4}$).`,
          t`**Dipole–dipole**: between polar molecules ($\ce{CHCl3}$, $\ce{CH2Cl2}$).`,
          t`**Hydrogen bonds**: H on N, O or F to a lone pair ($\ce{CH3OH}$, $\ce{HNO3}$).`,
        ],
      },
      {
        title: "States",
        points: [
          t`Forces: solids > liquids > gases.`,
          t`Stronger forces mean higher melting and boiling points.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the forces between $\ce{CH2=CH2}$ molecules.`,
      steps: [
        t`Ethene is nonpolar and has no H on N, O or F.`,
        t`Only dispersion forces.`,
      ],
      answer: t`London dispersion forces`,
    },
    visualSpec: t`Zoom into molecules and show the attractions between neighbours, from weak dispersion to hydrogen bonds.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks argon is polar.",
      remediation: "A single atom has no permanent dipole.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Sees hydrogen bonding where there is none.",
      remediation: "Hydrogen bonds need H on N, O or F.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Calls the force ionic.",
      remediation: "These are neutral molecules, not ions.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Sees only dispersion in methanol.",
      remediation: "Methanol's O–H gives hydrogen bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Stops at dipole–dipole.",
      remediation: "O–H hydrogen bonds are stronger than ordinary dipole forces.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Calls methanol ionic.",
      remediation: "Methanol is a covalent molecule.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Calls $\ce{CHCl3}$ nonpolar.`,
      remediation: "The C–Cl dipoles do not cancel: it is polar.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks liquids have weaker forces than gases.",
      remediation: "Liquid molecules are close and attract more.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks liquids have stronger forces than solids.",
      remediation: "Solids hold their particles more tightly.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks liquids are like gases.",
      remediation: "Liquids have much stronger forces.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Ties dispersion to bond polarity.",
      remediation: "Dispersion grows with size and polarizability.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Ties it to H on N, O or F.",
      remediation: "That is the condition for hydrogen bonding.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Ties it to temperature.",
      remediation: "Dispersion depends on the molecule's size.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (H)" },
      stem: t`The only intermolecular force between argon atoms is`,
      verify: { kind: "value", inputs: {  }, params: { q: "argon" } },
      options: [
        { key: "A", text: t`dipole–dipole attraction`, correct: false, misconceptionId: "C02-M1", value: "dipole_dipole" },
        { key: "B", text: t`London dispersion`, correct: true, value: "dispersion" },
        { key: "C", text: t`hydrogen bonding`, correct: false, misconceptionId: "C02-M2", value: "hydrogen_bond" },
        { key: "D", text: t`ionic attraction`, correct: false, misconceptionId: "C02-M3", value: "ionic" },
      ],
      solution: {
        steps: [
          t`Argon atoms are nonpolar.`,
          t`Only dispersion forces.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (G)" },
      stem: t`The strongest intermolecular force in methanol, $\ce{CH3OH}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "methanol" } },
      options: [
        { key: "A", text: t`dispersion forces only`, correct: false, misconceptionId: "C02-M4", value: "dispersion_only" },
        { key: "B", text: t`dipole–dipole forces only`, correct: false, misconceptionId: "C02-M5", value: "dipole_only" },
        { key: "C", text: t`hydrogen bonding`, correct: true, value: "hydrogen_bond" },
        { key: "D", text: t`ionic attraction`, correct: false, misconceptionId: "C02-M6", value: "ionic" },
      ],
      solution: {
        steps: [
          t`Methanol has an O–H group.`,
          t`Hydrogen bonding.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (G)" },
      stem: t`Besides dispersion forces, $\ce{CHCl3}$ molecules attract each other by`,
      verify: { kind: "value", inputs: {  }, params: { q: "chloroform" } },
      options: [
        { key: "A", text: t`ionic attraction`, correct: false, misconceptionId: "C02-M3", value: "ionic" },
        { key: "B", text: t`nothing else: it is nonpolar`, correct: false, misconceptionId: "C02-M7", value: "nothing_else" },
        { key: "C", text: t`hydrogen bonding`, correct: false, misconceptionId: "C02-M2", value: "hydrogen_bond" },
        { key: "D", text: t`dipole–dipole forces`, correct: true, value: "dipole_dipole" },
      ],
      solution: {
        steps: [
          t`$\ce{CHCl3}$ is polar, with no H on N, O or F.`,
          t`Dipole–dipole forces.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.1 (C)" },
      stem: t`Intermolecular forces in liquids are`,
      verify: { kind: "value", inputs: {  }, params: { q: "liquids" } },
      options: [
        { key: "A", text: t`stronger than in gases but weaker than in solids`, correct: true, value: "between" },
        { key: "B", text: t`the same as in gases`, correct: false, misconceptionId: "C02-M10", value: "same_as_gas" },
        { key: "C", text: t`weaker than in gases`, correct: false, misconceptionId: "C02-M8", value: "weaker_than_gas" },
        { key: "D", text: t`stronger than in solids`, correct: false, misconceptionId: "C02-M9", value: "stronger_than_solid" },
      ],
      solution: {
        steps: [
          t`Liquid particles are close but mobile.`,
          t`Forces lie between those of gases and solids.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (E)" },
      stem: t`London dispersion forces grow stronger with`,
      verify: { kind: "value", inputs: {  }, params: { q: "dispersion" } },
      options: [
        { key: "A", text: t`temperature`, correct: false, misconceptionId: "C02-M13", value: "temperature" },
        { key: "B", text: t`the size and polarizability of the molecules`, correct: true, value: "size_polarizability" },
        { key: "C", text: t`the polarity of the bonds`, correct: false, misconceptionId: "C02-M11", value: "bond_polarity" },
        { key: "D", text: t`the number of H atoms on N, O or F`, correct: false, misconceptionId: "C02-M12", value: "h_on_nof" },
      ],
      solution: {
        steps: [
          t`Larger molecules have more easily distorted electron clouds.`,
          t`Dispersion grows with polarizability.`,
        ],
      },
    },
  ],
};
