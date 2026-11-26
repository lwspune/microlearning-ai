import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Blue copper sulfate crystals turn white when heated, and lose over a third of their mass. Where does all that mass go?`,
    reveal: t`Into steam. $\ce{CuSO4.5H2O}$ is 36 % water of crystallisation, driven off by heat.`,
  },
  explanation: {
    intuition: [
      t`Percentage composition tells what share of a compound's mass each part supplies.`,
      t`Work from one mole: each part's mass over the molar mass.`,
      t`Water of crystallisation is part of the formula and counts.`,
      t`Turned round, a percentage can give a molar mass.`,
    ],
    formal: [
      {
        title: "Mass percent",
        points: [
          t`Mass % of a part $= \dfrac{\text{its mass in one mole}}{\text{molar mass}} \times 100$.`,
          t`Multiply each atomic mass by its count in the formula.`,
          t`For hydrates, include $n\ \ce{H2O}$ in the molar mass.`,
          t`The percentages add up to 100.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the percentage of carbon in $\ce{CO2}$?`,
      steps: [
        t`$\ce{CO2}$ = 12 + 32 = 44 g/mol.`,
        t`12 ÷ 44 × 100 = 27.3 %.`,
      ],
      answer: t`27.3 %`,
    },
    visualSpec: t`Slice a pie chart of one mole of a compound into each element's share of the mass.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Counts one water.",
      remediation: t`$\ce{5H2O}$ means five waters: 90 g per mole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Divides by the anhydrous salt's mass.",
      remediation: "Divide by the hydrate's full molar mass, water included.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Counts only the O of water.",
      remediation: "Each water is 18 g: both H atoms count.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Uses the atomic number.",
      remediation: "Use iron's atomic mass, 56, not its atomic number, 26.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Counts the seven waters as one.",
      remediation: t`$\ce{7H2O}$ is 126 g per mole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Counts one atom of the element.",
      remediation: "Use the number of atoms in the formula.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Counts atoms instead of masses.",
      remediation: "Mass percent uses masses, not numbers of atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Ignores the number of atoms per molecule.",
      remediation: "Four Fe atoms: 4 × 56 g per mole of haemoglobin.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Forgets the factor of 100.",
      remediation: "A percentage is a fraction × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Multiplies by the fraction.",
      remediation: "Molar mass = mass of Fe per mole ÷ its fraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Leaves out potassium.",
      remediation: t`Use the whole formula: $\ce{K2Cr2O7}$ = 294 g/mol.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (K)" },
      stem: t`What is the percentage of water in $\ce{CuSO4.5H2O}$? (Cu = 63.5, S = 32, O = 16, H = 1)`,
      verify: { kind: "value", inputs: {  }, params: { q: "water_cuso4" } },
      options: [
        { key: "A", text: t`$56.4\%$`, correct: false, misconceptionId: "C04-M2", value: "56.4000000000000" },
        { key: "B", text: t`$36.1\%$`, correct: true, value: "36.1000000000000" },
        { key: "C", text: t`$32.1\%$`, correct: false, misconceptionId: "C04-M3", value: "32.1000000000000" },
        { key: "D", text: t`$7.21\%$`, correct: false, misconceptionId: "C04-M1", value: "7.21000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{CuSO4.5H2O}$ = 249.5 g/mol; water = 90 g.`,
          t`90 ÷ 249.5 × 100 = 36.1 %.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (F)" },
      stem: t`What is the percentage of iron in green vitriol, $\ce{FeSO4.7H2O}$? (Fe = 56, S = 32, O = 16, H = 1)`,
      verify: { kind: "value", inputs: {  }, params: { q: "fe_green" } },
      options: [
        { key: "A", text: t`$36.8\%$`, correct: false, misconceptionId: "C04-M2", value: "36.8000000000000" },
        { key: "B", text: t`$9.35\%$`, correct: false, misconceptionId: "C04-M4", value: "9.35000000000000" },
        { key: "C", text: t`$20.1\%$`, correct: true, value: "20.1000000000000" },
        { key: "D", text: t`$32.9\%$`, correct: false, misconceptionId: "C04-M5", value: "32.9000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{FeSO4.7H2O}$ = 278 g/mol.`,
          t`56 ÷ 278 × 100 = 20.1 %.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`What is the percentage of nitrogen in urea, $\ce{CO(NH2)2}$? (C = 12, O = 16, N = 14, H = 1)`,
      verify: { kind: "value", inputs: {  }, params: { q: "n_urea" } },
      options: [
        { key: "A", text: t`$25\%$`, correct: false, misconceptionId: "C04-M7", value: "25" },
        { key: "B", text: t`$0.467\%$`, correct: false, misconceptionId: "C04-M9", value: "0.467000000000000" },
        { key: "C", text: t`$23.3\%$`, correct: false, misconceptionId: "C04-M6", value: "23.3000000000000" },
        { key: "D", text: t`$46.7\%$`, correct: true, value: "46.7000000000000" },
      ],
      solution: {
        steps: [
          t`Urea = 60 g/mol; N = 28 g.`,
          t`28 ÷ 60 × 100 = 46.7 %.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (G)" },
      stem: t`Haemoglobin contains 0.335 % iron, with four Fe atoms per molecule. Find its molar mass. (Fe = 56)`,
      verify: { kind: "value", inputs: { pct: "0.335", n: "4" }, params: { q: "haemoglobin" } },
      options: [
        { key: "A", text: t`$66900\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "66900" },
        { key: "B", text: t`$669\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M9", value: "669" },
        { key: "C", text: t`$0.75\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M10", value: "0.750000000000000" },
        { key: "D", text: t`$16700\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C04-M8", value: "16700" },
      ],
      solution: {
        steps: [
          t`4 Fe = 224 g per mole is 0.335 % of M.`,
          t`M = 224 ÷ 0.00335 = 66 900 g/mol.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (E)" },
      stem: t`What is the percentage of chromium in $\ce{K2Cr2O7}$? (K = 39, Cr = 52, O = 16)`,
      verify: { kind: "value", inputs: {  }, params: { q: "cr_dichromate" } },
      options: [
        { key: "A", text: t`$0.354\%$`, correct: false, misconceptionId: "C04-M9", value: "0.354000000000000" },
        { key: "B", text: t`$35.4\%$`, correct: true, value: "35.4000000000000" },
        { key: "C", text: t`$17.7\%$`, correct: false, misconceptionId: "C04-M6", value: "17.7000000000000" },
        { key: "D", text: t`$48.1\%$`, correct: false, misconceptionId: "C04-M11", value: "48.1000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{K2Cr2O7}$ = 294 g/mol; Cr = 104 g.`,
          t`104 ÷ 294 × 100 = 35.4 %.`,
        ],
      },
    },
  ],
};
