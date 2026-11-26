import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Glucose, acetic acid and formaldehyde all analyse to the same percentages of C, H and O. How can three different compounds share one composition?`,
    reveal: t`They share the simplest ratio, $\ce{CH2O}$: the empirical formula. Their molecular formulas are different multiples of it.`,
  },
  explanation: {
    intuition: [
      t`Analysis gives percentages; we want a formula.`,
      t`Convert each percentage to moles, then find the simplest whole-number ratio.`,
      t`That gives the **empirical formula**.`,
      t`The molar mass tells how many empirical units make one molecule.`,
    ],
    formal: [
      {
        title: "Empirical formula",
        points: [
          t`Take 100 g: each % becomes grams.`,
          t`Divide by atomic masses to get moles.`,
          t`Divide by the smallest; multiply to clear halves (1.5 → ×2).`,
          t`Find any missing element by difference from 100 %.`,
        ],
      },
      {
        title: "Molecular formula",
        points: [
          t`$n = \dfrac{\text{molar mass}}{\text{empirical formula mass}}$.`,
          t`Molecular formula = $n$ × empirical formula.`,
        ],
      },
    ],
    worked: {
      prompt: t`A metal oxide (M = 56) contains 70.0 % M. Find its empirical formula.`,
      steps: [
        t`M: 70 ÷ 56 = 1.25; O: 30 ÷ 16 = 1.875.`,
        t`Ratio 1 : 1.5 = 2 : 3.`,
      ],
      answer: t`$\ce{M2O3}$`,
    },
    visualSpec: t`Turn percentage bars into mole bars, then into a whole-number ratio of atoms.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Takes the mass percentages as the atom ratio.",
      remediation: "Divide each percentage by its atomic mass first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Divides by atomic numbers.",
      remediation: "Use atomic masses: C = 12, not 6.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Gives a molecular formula.",
      remediation: t`The empirical formula is the simplest ratio: $\ce{CH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Rounds 1.5 down to 1.",
      remediation: "1 : 1.5 is not a whole-number ratio; double it to 2 : 3.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Rounds 1.5 up to 2.",
      remediation: "Double 1 : 1.5 to get 2 : 3.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Swaps the two elements.",
      remediation: "A gives 1.01 mol and B 1.51 mol: A : B = 2 : 3.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Forgets the element found by difference.",
      remediation: "Oxygen makes up the remaining percentage; include it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Divides oxygen's percentage by 32.",
      remediation: "Count O atoms: divide by 16.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Stops at the empirical formula.",
      remediation: t`Find $n$ = 180 ÷ 30 = 6 and multiply.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Assumes the molecular formula is twice the empirical one.",
      remediation: t`Here $n$ = 60 ÷ 60 = 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: t`Multiplies only carbon by $n$.`,
      remediation: t`Multiply every subscript by $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: t`Takes $n$ from the carbon mass.`,
      remediation: t`$n$ = molar mass ÷ empirical formula mass = 180 ÷ 30.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (I)" },
      stem: t`A hydrocarbon contains 79.87 % carbon and 20.13 % hydrogen. Its empirical formula is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydrocarbon" } },
      options: [
        { key: "A", text: t`$\ce{C2H6}$`, correct: false, misconceptionId: "C05-M3", value: "f_c2h6" },
        { key: "B", text: t`$\ce{C2H3}$`, correct: false, misconceptionId: "C05-M2", value: "f_c2h3" },
        { key: "C", text: t`$\ce{C4H}$`, correct: false, misconceptionId: "C05-M1", value: "f_c4h" },
        { key: "D", text: t`$\ce{CH3}$`, correct: true, value: "f_ch3" },
      ],
      solution: {
        steps: [
          t`C: 79.87 ÷ 12 = 6.66; H: 20.13 ÷ 1 = 20.13.`,
          t`Ratio 1 : 3: $\ce{CH3}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (H)" },
      stem: t`Elements A (atomic mass 75) and B (atomic mass 16) form a compound with 75.8 % A. Its formula is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ab" } },
      options: [
        { key: "A", text: t`$\ce{A2B3}$`, correct: true, value: "f_a2b3" },
        { key: "B", text: t`$\ce{AB2}$`, correct: false, misconceptionId: "C05-M5", value: "f_ab2" },
        { key: "C", text: t`$\ce{A3B2}$`, correct: false, misconceptionId: "C05-M6", value: "f_a3b2" },
        { key: "D", text: t`AB`, correct: false, misconceptionId: "C05-M4", value: "f_ab" },
      ],
      solution: {
        steps: [
          t`A: 75.8 ÷ 75 = 1.01; B: 24.2 ÷ 16 = 1.51.`,
          t`1 : 1.5 = 2 : 3: $\ce{A2B3}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.10" },
      stem: t`A compound of molar mass 159 contains 39.62 % copper, 20.13 % sulfur and the rest oxygen. Its formula is (Cu = 63, S = 32, O = 16)`,
      verify: { kind: "value", inputs: {  }, params: { q: "copper" } },
      options: [
        { key: "A", text: t`CuS`, correct: false, misconceptionId: "C05-M7", value: "f_cus" },
        { key: "B", text: t`$\ce{CuSO4}$`, correct: true, value: "f_cuso4" },
        { key: "C", text: t`$\ce{CuSO2}$`, correct: false, misconceptionId: "C05-M8", value: "f_cuso2" },
        { key: "D", text: t`$\ce{Cu2SO2}$`, correct: false, misconceptionId: "C05-M1", value: "f_cu2so2" },
      ],
      solution: {
        steps: [
          t`Cu 0.629, S 0.629, O 40.25 ÷ 16 = 2.52.`,
          t`1 : 1 : 4: $\ce{CuSO4}$ = 159, so $n$ = 1.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (K)" },
      stem: t`A compound has 20 % C, 6.7 % H, 46.67 % N and the rest oxygen; its molar mass is 60. Its molecular formula is`,
      verify: { kind: "value", inputs: {  }, params: { q: "urea" } },
      options: [
        { key: "A", text: t`$\ce{CH4N2}$`, correct: false, misconceptionId: "C05-M7", value: "f_ch4n2" },
        { key: "B", text: t`$\ce{C2H8N4O}$`, correct: false, misconceptionId: "C05-M8", value: "f_c2h8n4o" },
        { key: "C", text: t`$\ce{CH4N2O}$`, correct: true, value: "f_ch4n2o" },
        { key: "D", text: t`$\ce{C2H8N4O2}$`, correct: false, misconceptionId: "C05-M10", value: "f_c2h8n4o2" },
      ],
      solution: {
        steps: [
          t`C 1.67, H 6.7, N 3.33, O 26.63 ÷ 16 = 1.66.`,
          t`1 : 4 : 2 : 1: $\ce{CH4N2O}$ = 60, so $n$ = 1.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (M)" },
      stem: t`A sugar has the empirical formula $\ce{CH2O}$ and molar mass 180. Its molecular formula is`,
      verify: { kind: "value", inputs: {  }, params: { q: "glucose" } },
      options: [
        { key: "A", text: t`$\ce{C15H30O15}$`, correct: false, misconceptionId: "C05-M12", value: "f_c15h30o15" },
        { key: "B", text: t`$\ce{CH2O}$`, correct: false, misconceptionId: "C05-M9", value: "f_ch2o" },
        { key: "C", text: t`$\ce{C6H2O}$`, correct: false, misconceptionId: "C05-M11", value: "f_c6h2o" },
        { key: "D", text: t`$\ce{C6H12O6}$`, correct: true, value: "f_c6h12o6" },
      ],
      solution: {
        steps: [
          t`$n$ = 180 ÷ 30 = 6.`,
          t`$\ce{C6H12O6}$.`,
        ],
      },
    },
  ],
};
