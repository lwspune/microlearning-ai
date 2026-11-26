import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`A grocer sells rice by the kilogram, not by the grain. Chemists face the same problem with atoms. What is their kilogram?`,
    reveal: t`The mole: $6.022 \times 10^{23}$ particles. A mole of any substance weighs its formula mass in grams.`,
  },
  explanation: {
    intuition: [
      t`Atoms are counted in moles, as eggs are counted in dozens.`,
      t`One mole = $6.022 \times 10^{23}$ particles (Avogadro's number).`,
      t`A mole of a substance has a mass equal to its formula mass in grams: its molar mass.`,
      t`So moles link mass, number of particles and number of atoms.`,
    ],
    formal: [
      {
        title: "Conversions",
        points: [
          t`$n = \dfrac{m}{M}$ (moles = mass ÷ molar mass).`,
          t`Number of particles $= n \times N_A$, with $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
          t`Atoms of an element in a compound = moles of compound × atoms per formula.`,
          t`12 g of carbon is a mole of atoms; 12 u is the mass of one atom.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many moles and molecules are there in 22 g of $\ce{CO2}$?`,
      steps: [
        t`$n = 22 \div 44 = 0.5$ mol.`,
        t`$0.5 \times 6.022 \times 10^{23} = 3.011 \times 10^{23}$.`,
      ],
      answer: t`0.5 mol; $3.011 \times 10^{23}$ molecules`,
    },
    visualSpec: t`Move between mass, moles and particles on a three-way conversion map.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Gives the molar mass.",
      remediation: "Mass = moles × molar mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Gives the moles back.",
      remediation: "Convert: mass = moles × molar mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Divides the molar mass by the given quantity.",
      remediation: "Moles = mass ÷ molar mass; mass = moles × molar mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Uses the wrong formula for urea.",
      remediation: t`Urea is $\ce{CO(NH2)2}$: 60 g/mol.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Multiplies mass by molar mass.",
      remediation: "Divide: moles = mass ÷ molar mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Gives the moles of atoms.",
      remediation: t`Multiply moles by $N_A$ to count atoms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: t`Counts $\ce{I2}$ molecules.`,
      remediation: t`Each $\ce{I2}$ has two atoms; count atoms: 254 ÷ 127 = 2 mol of atoms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Multiplies the mass by $N_A$.`,
      remediation: t`First convert mass to moles, then multiply by $N_A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Gives the cost per gram.",
      remediation: "Multiply the cost per gram by 180 g per mole.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Divides the grams bought by the molar mass.",
      remediation: "Cost per mole = cost per gram × molar mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Multiplies the total cost by the molar mass.",
      remediation: "Use the cost per gram, not the total cost.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Counts H atoms in one molecule.",
      remediation: "Multiply by the moles of compound: 2 × 4.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Gives the moles of molecules.",
      remediation: "Each molecule has 4 H atoms: 4 × 2 mol.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Doubles the H count.",
      remediation: t`$\ce{CH3CHO}$ has 4 H atoms, not 8.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (G)" },
      stem: t`How many grams of water are there in 0.25 mol of it? ($\ce{H2O}$ = 18 g/mol)`,
      verify: { kind: "value", inputs: { n: "0.25" }, params: { q: "water_mass" } },
      options: [
        { key: "A", text: t`$18\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M1", value: "18" },
        { key: "B", text: t`$4.5\ \mathrm{g}$`, correct: true, value: "4.50000000000000" },
        { key: "C", text: t`$72\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M3", value: "72" },
        { key: "D", text: t`$0.25\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M2", value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`$m = n \times M$.`,
          t`0.25 × 18 = 4.5 g.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Solved Ex.1.5" },
      stem: t`How many moles of urea, $\ce{CO(NH2)2}$, are there in 5.6 g of it? (C = 12, N = 14, O = 16, H = 1)`,
      verify: { kind: "value", inputs: { m: "5.6" }, params: { q: "urea_moles" } },
      options: [
        { key: "A", text: t`$0.127\ \mathrm{mol}$`, correct: false, misconceptionId: "C06-M4", value: "0.127000000000000" },
        { key: "B", text: t`$10.7\ \mathrm{mol}$`, correct: false, misconceptionId: "C06-M3", value: "10.7000000000000" },
        { key: "C", text: t`$0.0933\ \mathrm{mol}$`, correct: true, value: "0.0933000000000000" },
        { key: "D", text: t`$336\ \mathrm{mol}$`, correct: false, misconceptionId: "C06-M5", value: "336" },
      ],
      solution: {
        steps: [
          t`Urea = 12 + 16 + 2(14 + 2) = 60 g/mol.`,
          t`5.6 ÷ 60 = 0.0933 mol.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (D)" },
      stem: t`How many atoms are there in 254 g of iodine? (I = 127)`,
      verify: { kind: "value", inputs: { m: "254", A: "127" }, params: { q: "iodine_atoms" } },
      options: [
        { key: "A", text: t`$1.53 \times 10^{26}$`, correct: false, misconceptionId: "C06-M8", value: "152999999999999994748731392" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C06-M6", value: "2" },
        { key: "C", text: t`$6.02 \times 10^{23}$`, correct: false, misconceptionId: "C06-M7", value: "601999999999999995805696" },
        { key: "D", text: t`$1.2 \times 10^{24}$`, correct: true, value: "1200000000000000033554432" },
      ],
      solution: {
        steps: [
          t`254 ÷ 127 = 2 mol of I atoms.`,
          t`2 × 6.022 × $10^{23}$ = 1.20 × $10^{24}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (F)" },
      stem: t`Arjun bought 250 g of glucose, $\ce{C6H12O6}$ (180 g/mol), for Rs 40. What is the cost in rupees of one mole of glucose?`,
      verify: { kind: "value", inputs: { m: "250", cost: "40" }, params: { q: "glucose_cost" } },
      options: [
        { key: "A", text: t`$28.8$`, correct: true, value: "28.8000000000000" },
        { key: "B", text: t`$7200$`, correct: false, misconceptionId: "C06-M11", value: "7200" },
        { key: "C", text: t`$0.16$`, correct: false, misconceptionId: "C06-M9", value: "0.160000000000000" },
        { key: "D", text: t`$55.6$`, correct: false, misconceptionId: "C06-M10", value: "55.6000000000000" },
      ],
      solution: {
        steps: [
          t`Cost per gram = 40 ÷ 250 = Rs 0.16.`,
          t`0.16 × 180 = Rs 28.8 per mole.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (M)" },
      stem: t`How many moles of hydrogen atoms are there in 2 mol of acetaldehyde, $\ce{CH3CHO}$?`,
      verify: { kind: "value", inputs: { n: "2" }, params: { q: "h_moles" } },
      options: [
        { key: "A", text: t`$4\ \mathrm{mol}$`, correct: false, misconceptionId: "C06-M12", value: "4" },
        { key: "B", text: t`$8\ \mathrm{mol}$`, correct: true, value: "8" },
        { key: "C", text: t`$2\ \mathrm{mol}$`, correct: false, misconceptionId: "C06-M13", value: "2" },
        { key: "D", text: t`$16\ \mathrm{mol}$`, correct: false, misconceptionId: "C06-M14", value: "16" },
      ],
      solution: {
        steps: [
          t`Each $\ce{CH3CHO}$ has 4 H atoms.`,
          t`2 × 4 = 8 mol of H atoms.`,
        ],
      },
    },
  ],
};
