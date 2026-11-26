import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`A calculator divides 10.0 g by 3.0 mL and shows 3.333333333 g/mL. Should you copy all those 3s?`,
    reveal: t`No. A result cannot be more certain than the data that made it. 3.0 has two figures, so the answer is 3.3 g/mL.`,
  },
  explanation: {
    intuition: [
      t`Calculations cannot create precision the measurements did not have.`,
      t`So answers are rounded to match the least precise data.`,
      t`Sums follow decimal places; products and quotients follow significant figures.`,
      t`Rounding keeps a digit or raises it by one, depending on the next digit.`,
    ],
    formal: [
      {
        title: "Rounding rules",
        points: [
          t`Next digit less than 5: leave the last kept digit: 1.223 → 1.2.`,
          t`Next digit 5 or more: raise the last kept digit: 25.55 → 26.`,
          t`Keep the size of the number: 199 to two figures is $2.0 \times 10^2$.`,
        ],
      },
      {
        title: "In calculations",
        points: [
          t`Addition and subtraction: keep as many decimal places as the least precise number.`,
          t`Multiplication and division: keep as many significant figures as the least precise number.`,
          t`Round only the final answer.`,
        ],
      },
    ],
    worked: {
      prompt: t`Give 12.11 + 18.0 + 1.012 to the right precision.`,
      steps: [
        t`Sum = 31.122.`,
        t`18.0 has one decimal place, so round to 31.1.`,
      ],
      answer: t`31.1`,
    },
    visualSpec: t`Line up numbers by their decimal points and shade the columns that every number actually measured.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Rounds up when the next digit is under 5.",
      remediation: "Under 5: leave the last kept digit unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Keeps an extra figure.",
      remediation: "Two significant figures means two digits: 1.2.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Loses the decimal point.",
      remediation: "Rounding keeps the size of the number: 1.2, not 12.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Truncates the last digit.",
      remediation: "Rounding keeps the magnitude: 199 is about 200, not 19.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Changes the magnitude.",
      remediation: "199 g is about 200 g; 20 g is ten times smaller.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Writes 200, which hides how many figures are meant.",
      remediation: t`Use $2.0 \times 10^2$ to show two significant figures.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Keeps two decimal places.",
      remediation: "2.3 has only one decimal place, so the sum has one.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Uses significant figures for a sum.",
      remediation: "Sums follow decimal places, not significant figures.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Keeps every digit.",
      remediation: "Round to match the least precise data.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Truncates instead of rounding.",
      remediation: "4.767: the next digit is 6, so 4.7 rounds up to 4.8.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Rounds to one figure.",
      remediation: "4.2 has two figures, so keep two: 4.8.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Drops the trailing 5s.",
      remediation: "The digit after 25 is 5, so raise the 5 to 6.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Keeps three figures.",
      remediation: "Two significant figures: 26.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Rounds to one figure.",
      remediation: "Two figures are asked for: 26.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.8" },
      stem: t`Round 1.223 to two significant figures.`,
      verify: { kind: "value", inputs: {  }, params: { q: "r1223" } },
      options: [
        { key: "A", text: t`1.3`, correct: false, misconceptionId: "C02-M1", value: "r_1_3" },
        { key: "B", text: t`1.2`, correct: true, value: "r_1_2" },
        { key: "C", text: t`1.22`, correct: false, misconceptionId: "C02-M2", value: "r_1_22" },
        { key: "D", text: t`12`, correct: false, misconceptionId: "C02-M3", value: "r_12" },
      ],
      solution: {
        steps: [
          t`Keep 1.2; the next digit is 2.`,
          t`2 < 5, so 1.2.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.3 (B)" },
      stem: t`Round 199 g to two significant figures.`,
      verify: { kind: "value", inputs: {  }, params: { q: "r199" } },
      options: [
        { key: "A", text: t`19 g`, correct: false, misconceptionId: "C02-M4", value: "r_19" },
        { key: "B", text: t`20 g`, correct: false, misconceptionId: "C02-M5", value: "r_20" },
        { key: "C", text: t`$2.0 \times 10^{2}$ g`, correct: true, value: "r_2_0_e2" },
        { key: "D", text: t`200 g`, correct: false, misconceptionId: "C02-M6", value: "r_200" },
      ],
      solution: {
        steps: [
          t`Keep 1 and 9; the next digit is 9.`,
          t`Raise: 20, written $2.0 \times 10^2$ g.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.3 (D)" },
      stem: t`Add 2.3 g + 14.57 g + 0.0285 g and give the answer to the right precision.`,
      verify: { kind: "value", inputs: {  }, params: { q: "sum" } },
      options: [
        { key: "A", text: t`16.8985 g`, correct: false, misconceptionId: "C02-M9", value: "s_16_8985" },
        { key: "B", text: t`17 g`, correct: false, misconceptionId: "C02-M8", value: "s_17" },
        { key: "C", text: t`16.90 g`, correct: false, misconceptionId: "C02-M7", value: "s_16_90" },
        { key: "D", text: t`16.9 g`, correct: true, value: "s_16_9" },
      ],
      solution: {
        steps: [
          t`Sum = 16.8985.`,
          t`2.3 has one decimal place: 16.9 g.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (Q)" },
      stem: t`Multiply 4.2 cm by 1.135 cm and give the answer to the right number of significant figures.`,
      verify: { kind: "value", inputs: {  }, params: { q: "product" } },
      options: [
        { key: "A", text: t`$4.8\ \mathrm{cm^2}$`, correct: true, value: "m_4_8" },
        { key: "B", text: t`$5\ \mathrm{cm^2}$`, correct: false, misconceptionId: "C02-M11", value: "m_5" },
        { key: "C", text: t`$4.767\ \mathrm{cm^2}$`, correct: false, misconceptionId: "C02-M9", value: "m_4_767" },
        { key: "D", text: t`$4.7\ \mathrm{cm^2}$`, correct: false, misconceptionId: "C02-M10", value: "m_4_7" },
      ],
      solution: {
        steps: [
          t`4.2 × 1.135 = 4.767.`,
          t`4.2 has two figures: 4.8 $\mathrm{cm^2}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.3 (B)" },
      stem: t`Round 25.55 mL to two significant figures.`,
      verify: { kind: "value", inputs: {  }, params: { q: "r2555" } },
      options: [
        { key: "A", text: t`30 mL`, correct: false, misconceptionId: "C02-M14", value: "r_30" },
        { key: "B", text: t`26 mL`, correct: true, value: "r_26" },
        { key: "C", text: t`25 mL`, correct: false, misconceptionId: "C02-M12", value: "r_25" },
        { key: "D", text: t`25.6 mL`, correct: false, misconceptionId: "C02-M13", value: "r_25_6" },
      ],
      solution: {
        steps: [
          t`Keep 2 and 5; the next digit is 5.`,
          t`Raise: 26 mL.`,
        ],
      },
    },
  ],
};
