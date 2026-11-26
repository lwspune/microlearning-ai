import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`An oxygen atom weighs about $2.66 \times 10^{-23}$ g. Writing masses like that is clumsy. How do chemists weigh atoms more conveniently?`,
    reveal: t`They compare each atom with a carbon-12 atom. On that scale, oxygen's mass is simply 16 u.`,
  },
  explanation: {
    intuition: [
      t`Atoms are too light to weigh in grams conveniently.`,
      t`The atomic mass unit, u, is $\tfrac{1}{12}$ of a carbon-12 atom's mass.`,
      t`Most elements are mixtures of isotopes, so their atomic mass is an average.`,
      t`A molecule's mass is the sum of its atoms' masses.`,
    ],
    formal: [
      {
        title: "Atomic mass",
        points: [
          t`$1\ \mathrm{u} = \tfrac{1}{12}$ × mass of one $^{12}\mathrm{C}$ atom $= 1.66056 \times 10^{-24}$ g.`,
          t`Average atomic mass $= \dfrac{\sum (\text{isotope mass} \times \text{abundance})}{100}$.`,
        ],
      },
      {
        title: "Molecular and formula mass",
        points: [
          t`Molecular mass: sum of atomic masses in a molecule: $\ce{H2O}$ = 2(1) + 16 = 18 u.`,
          t`Formula mass: the same sum for an ionic formula unit: NaCl = 23 + 35.5 = 58.5 u.`,
          t`A subscript outside brackets multiplies everything inside.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the molecular mass of ethanol, $\ce{C2H5OH}$.`,
      steps: [
        t`C: 2 × 12 = 24; H: 6 × 1 = 6; O: 16.`,
        t`24 + 6 + 16 = 46.`,
      ],
      answer: t`46 u`,
    },
    visualSpec: t`Put atoms on a balance against carbon-12 twelfths, then add up the atoms of a molecule.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Takes 1 u as one hydrogen atom.",
      remediation: t`The modern standard is carbon-12: 1 u is $\tfrac{1}{12}$ of its mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Uses the old oxygen scale.",
      remediation: t`The modern standard is $\tfrac{1}{12}$ of a carbon-12 atom.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Confuses 1 u with a mole of carbon.",
      remediation: "1 u is a tiny mass for one atom; a mole of carbon-12 is 12 g.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Averages the isotope masses without weights.",
      remediation: "Weight each mass by its abundance.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Swaps the abundances.",
      remediation: "Multiply each isotope's mass by its own abundance.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Forgets to divide by 100.",
      remediation: "Abundances are percentages: divide the sum by 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Counts each element once.",
      remediation: "Add every atom: 2 C, 4 H and 2 O.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Uses atomic numbers.",
      remediation: "Atomic number counts protons; use atomic masses.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Leaves out the H of COOH.",
      remediation: t`$\ce{CH3COOH}$ has four H atoms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Ignores the 2 outside the bracket.",
      remediation: t`$\ce{(NO3)2}$ means two nitrate groups.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Applies the 2 to N only.",
      remediation: t`The 2 multiplies all of $\ce{NO3}$: 2 N and 6 O.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Treats nitrate as NO.",
      remediation: t`Nitrate is $\ce{NO3}$: three O atoms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Forgets to multiply by the number of atoms.",
      remediation: "18 atoms × 1.008 u each.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Multiplies by Avogadro's number.",
      remediation: "N_A converts moles to particles; here we count atoms directly.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Divides instead of multiplying.",
      remediation: "Total mass = number of atoms × mass of one.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.5 (A)" },
      stem: t`One atomic mass unit (1 u) is defined as`,
      verify: { kind: "value", inputs: {  }, params: { q: "u" } },
      options: [
        { key: "A", text: t`the mass of one mole of carbon`, correct: false, misconceptionId: "C05-M3", value: "mole_carbon" },
        { key: "B", text: t`$\tfrac{1}{16}$ of the mass of one oxygen atom`, correct: false, misconceptionId: "C05-M2", value: "sixteenth_o" },
        { key: "C", text: t`the mass of one hydrogen atom`, correct: false, misconceptionId: "C05-M1", value: "one_h_atom" },
        { key: "D", text: t`$\tfrac{1}{12}$ of the mass of one carbon-12 atom`, correct: true, value: "twelfth_c12" },
      ],
      solution: {
        steps: [
          t`Carbon-12 is the standard.`,
          t`1 u is $\tfrac{1}{12}$ of its mass.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (G)" },
      stem: t`Boron is 19.60 % $^{10}\mathrm{B}$ (10.013 u) and 80.40 % $^{11}\mathrm{B}$ (11.009 u). Find its average atomic mass.`,
      verify: { kind: "value", inputs: { m1: "10.013", a1: "19.60", m2: "11.009", a2: "80.40" }, params: { q: "boron" } },
      options: [
        { key: "A", text: t`$10.8\ \mathrm{u}$`, correct: true, value: "10.8000000000000" },
        { key: "B", text: t`$10.2\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M5", value: "10.2000000000000" },
        { key: "C", text: t`$1080\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M6", value: "1080" },
        { key: "D", text: t`$10.5\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M4", value: "10.5000000000000" },
      ],
      solution: {
        steps: [
          t`(10.013 × 19.60 + 11.009 × 80.40) ÷ 100.`,
          t`= 10.81 ≈ 10.8 u.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.2 (D)" },
      stem: t`Find the molecular mass of acetic acid, $\ce{CH3COOH}$. (C = 12, H = 1, O = 16)`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetic" } },
      options: [
        { key: "A", text: t`$29\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M7", value: "29" },
        { key: "B", text: t`$60\ \mathrm{u}$`, correct: true, value: "60" },
        { key: "C", text: t`$32\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M8", value: "32" },
        { key: "D", text: t`$59\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M9", value: "59" },
      ],
      solution: {
        steps: [
          t`$\ce{C2H4O2}$: 2(12) + 4(1) + 2(16).`,
          t`= 60 u.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Solved Ex.1.4" },
      stem: t`Find the formula mass of $\ce{Cu(NO3)2}$. (Cu = 63.5, N = 14, O = 16)`,
      verify: { kind: "value", inputs: {  }, params: { q: "cu_nitrate" } },
      options: [
        { key: "A", text: t`$139.5\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M11", value: "139.500000000000" },
        { key: "B", text: t`$123.5\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M12", value: "123.500000000000" },
        { key: "C", text: t`$187.5\ \mathrm{u}$`, correct: true, value: "187.500000000000" },
        { key: "D", text: t`$125.5\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M10", value: "125.500000000000" },
      ],
      solution: {
        steps: [
          t`Cu + 2N + 6O = 63.5 + 28 + 96.`,
          t`= 187.5 u.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (C)" },
      stem: t`An atom of hydrogen has a mass of 1.008 u. What is the mass of 18 hydrogen atoms?`,
      verify: { kind: "value", inputs: { n: "18", m: "1.008" }, params: { q: "h18" } },
      options: [
        { key: "A", text: t`$0.056\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M15", value: "0.0560000000000000" },
        { key: "B", text: t`$1.008\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M13", value: "1.00800000000000" },
        { key: "C", text: t`$1.09 \times 10^{25}\ \mathrm{u}$`, correct: false, misconceptionId: "C05-M14", value: "10900000000000000192937984" },
        { key: "D", text: t`$18.144\ \mathrm{u}$`, correct: true, value: "18.1440000000000" },
      ],
      solution: {
        steps: [
          t`18 × 1.008 u.`,
          t`= 18.144 u.`,
        ],
      },
    },
  ],
};
