import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`One litre of hydrogen and one litre of chlorine make two litres of hydrogen chloride. If gases were made of single atoms, how could one litre of each give two?`,
    reveal: t`They couldn't. Avogadro saw that hydrogen and chlorine must exist as two-atom molecules, $\ce{H2}$ and $\ce{Cl2}$, each splitting to give two HCl.`,
  },
  explanation: {
    intuition: [
      t`Dalton explained the mass laws with atoms: tiny, indivisible, combining in whole numbers.`,
      t`But gas volumes puzzled him.`,
      t`Avogadro proposed that equal gas volumes hold equal numbers of molecules.`,
      t`With diatomic molecules, the volume ratios made sense.`,
    ],
    formal: [
      {
        title: "Avogadro's law",
        points: [
          t`Equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules.`,
          t`$\ce{H2 + Cl2 -> 2HCl}$: 1 volume + 1 volume → 2 volumes.`,
        ],
      },
      {
        title: "Dalton's atomic theory",
        points: [
          t`Matter is made of indivisible atoms.`,
          t`Atoms of one element are identical in mass and properties; different elements differ.`,
          t`Atoms combine in simple whole-number ratios to form compounds.`,
          t`In reactions atoms are rearranged, not created or destroyed.`,
          t`Atoms are now known to be divisible (electrons, protons, neutrons).`,
        ],
      },
    ],
    worked: {
      prompt: t`How many volumes of ammonia do 1 volume of $\ce{N2}$ and 3 of $\ce{H2}$ give?`,
      steps: [
        t`$\ce{N2 + 3H2 -> 2NH3}$.`,
        t`Volumes follow the molecule numbers: 1 + 3 → 2.`,
      ],
      answer: t`2 volumes`,
    },
    visualSpec: t`Fill equal boxes with different gases and count the molecules in each.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says equal masses hold equal numbers of molecules.",
      remediation: "Equal volumes, not masses, hold equal numbers of molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says equal volumes hold equal numbers of atoms.",
      remediation: t`The law counts molecules; $\ce{O3}$ and $\ce{O2}$ have different atoms per molecule.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "States Boyle's law.",
      remediation: "Boyle's law relates volume and pressure; Avogadro's relates volume and number of molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Scales the number of molecules with molar mass.",
      remediation: "Equal volumes hold equal numbers of molecules, heavy or light.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks lighter gases hold more molecules.",
      remediation: "Equal volumes hold equal numbers, whatever the mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks equal volumes have equal masses.",
      remediation: t`$\ce{O2}$ molecules are 16 times heavier, so 2 L of $\ce{O2}$ is 16 times heavier.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Lets atoms split.",
      remediation: "Atoms do not split; diatomic molecules split into atoms that recombine.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks gases expand on reacting.",
      remediation: "At the same T and P, volume tracks the number of molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Credits larger HCl molecules.",
      remediation: "Gas volume depends on the number of molecules, not their size.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Rejects the whole-number postulate.",
      remediation: "Atoms still combine in simple ratios; only indivisibility was disproved.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Rejects conservation of atoms.",
      remediation: "Chemical reactions still neither create nor destroy atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Rejects fixed ratios in compounds.",
      remediation: "Compounds still have fixed atom ratios.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says molecules never break apart.",
      remediation: "Molecules do break apart; atoms are conserved.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Cites gas volume ratios.",
      remediation: "Volume ratios are Gay-Lussac's law; mass is conserved because atoms are.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says all atoms have the same mass.",
      remediation: "Atoms of different elements differ in mass.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.2 (A)" },
      stem: t`Avogadro's law states that`,
      verify: { kind: "value", inputs: {  }, params: { q: "statement" } },
      options: [
        { key: "A", text: t`equal volumes of all gases contain equal numbers of atoms`, correct: false, misconceptionId: "C04-M2", value: "equal_atoms" },
        { key: "B", text: t`equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules`, correct: true, value: "equal_volumes_molecules" },
        { key: "C", text: t`the volume of a gas is inversely proportional to its pressure`, correct: false, misconceptionId: "C04-M3", value: "boyle" },
        { key: "D", text: t`equal masses of all gases contain equal numbers of molecules`, correct: false, misconceptionId: "C04-M1", value: "equal_masses" },
      ],
      solution: {
        steps: [
          t`Same T and P, equal volumes.`,
          t`Equal numbers of molecules.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "authored" },
      stem: t`At the same temperature and pressure, 2 L of hydrogen and 2 L of oxygen contain`,
      verify: { kind: "value", inputs: {  }, params: { q: "same_volume" } },
      options: [
        { key: "A", text: t`16 times as many $\ce{O2}$ molecules as $\ce{H2}$ molecules`, correct: false, misconceptionId: "C04-M4", value: "o2_sixteen_times" },
        { key: "B", text: t`16 times as many $\ce{H2}$ molecules as $\ce{O2}$ molecules`, correct: false, misconceptionId: "C04-M5", value: "h2_sixteen_times" },
        { key: "C", text: t`the same number of molecules`, correct: true, value: "same_molecules" },
        { key: "D", text: t`the same mass of gas`, correct: false, misconceptionId: "C04-M6", value: "same_mass" },
      ],
      solution: {
        steps: [
          t`Avogadro's law applies to every gas.`,
          t`The same number of molecules.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`1 volume of hydrogen and 1 volume of chlorine give 2 volumes of hydrogen chloride. Avogadro explained this by proposing that`,
      verify: { kind: "value", inputs: {  }, params: { q: "hcl" } },
      options: [
        { key: "A", text: t`gases expand when they react`, correct: false, misconceptionId: "C04-M8", value: "gases_expand" },
        { key: "B", text: t`HCl molecules are twice as large`, correct: false, misconceptionId: "C04-M9", value: "larger_hcl" },
        { key: "C", text: t`atoms split in half during the reaction`, correct: false, misconceptionId: "C04-M7", value: "atoms_split" },
        { key: "D", text: t`hydrogen and chlorine exist as diatomic molecules`, correct: true, value: "diatomic" },
      ],
      solution: {
        steps: [
          t`$\ce{H2 + Cl2 -> 2HCl}$.`,
          t`One molecule of each gives two, so the gases are diatomic.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Which postulate of Dalton's atomic theory is no longer accepted?`,
      verify: { kind: "value", inputs: {  }, params: { q: "rejected" } },
      options: [
        { key: "A", text: t`atoms are indivisible`, correct: true, value: "indivisible" },
        { key: "B", text: t`atoms are neither created nor destroyed in a reaction`, correct: false, misconceptionId: "C04-M11", value: "not_created" },
        { key: "C", text: t`a compound has a fixed ratio of atoms`, correct: false, misconceptionId: "C04-M12", value: "fixed_ratio" },
        { key: "D", text: t`atoms combine in simple whole-number ratios`, correct: false, misconceptionId: "C04-M10", value: "whole_number_ratio" },
      ],
      solution: {
        steps: [
          t`Atoms contain electrons, protons and neutrons.`,
          t`So atoms are divisible.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`Dalton's theory explains the law of conservation of mass because`,
      verify: { kind: "value", inputs: {  }, params: { q: "mass" } },
      options: [
        { key: "A", text: t`all atoms have the same mass`, correct: false, misconceptionId: "C04-M15", value: "same_mass_atoms" },
        { key: "B", text: t`atoms are only rearranged in a reaction, not created or destroyed`, correct: true, value: "rearranged" },
        { key: "C", text: t`molecules never break apart`, correct: false, misconceptionId: "C04-M13", value: "molecules_intact" },
        { key: "D", text: t`gases combine in simple volume ratios`, correct: false, misconceptionId: "C04-M14", value: "gas_volumes" },
      ],
      solution: {
        steps: [
          t`Reactions only rearrange atoms.`,
          t`The total mass of atoms does not change.`,
        ],
      },
    },
  ],
};
