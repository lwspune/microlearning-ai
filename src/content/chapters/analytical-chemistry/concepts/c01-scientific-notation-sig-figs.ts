import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`One student writes a mass as 15000 g; another writes $1.50 \times 10^4$ g. Are they reporting the same measurement?`,
    reveal: t`Not quite. $1.50 \times 10^4$ says the balance was good to three figures; 15000 hides how many of those zeros were measured.`,
  },
  explanation: {
    intuition: [
      t`Chemistry spans huge and tiny numbers, so we write them as $N \times 10^n$.`,
      t`The digits we report should be the ones we actually measured: the **significant figures**.`,
      t`The last significant figure is the uncertain one.`,
      t`Zeros that only place the decimal point are not significant.`,
    ],
    formal: [
      {
        title: "Scientific notation",
        points: [
          t`Write $N \times 10^n$ with $1 \le N < 10$.`,
          t`Moving the point left raises $n$; moving it right lowers $n$: $0.0003498 = 3.498 \times 10^{-4}$.`,
          t`Multiply: multiply the $N$'s and add the exponents.`,
        ],
      },
      {
        title: "Counting significant figures",
        points: [
          t`All nonzero digits count.`,
          t`Zeros between nonzero digits count: 6.022 has four.`,
          t`Leading zeros never count: 0.00025 has two.`,
          t`Trailing zeros after a decimal point count: 1.50 has three.`,
          t`The power of ten never counts.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many significant figures are in 0.002030?`,
      steps: [
        t`Leading zeros 0.00 do not count.`,
        t`2, 0, 3 and the trailing 0 after the decimal do.`,
      ],
      answer: t`4`,
    },
    visualSpec: t`Highlight the significant digits of a number and slide its decimal point to write it in scientific notation.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Drops a trailing zero after the decimal point.",
      remediation: "A trailing zero after the point was measured: 1.50 has three figures.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Counts the digits of the power of ten.",
      remediation: t`The power of ten only places the point; count the digits of $N$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Writes the number out and counts every digit.",
      remediation: t`Placeholder zeros are not significant; count the digits of $N$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Skips a zero between nonzero digits.",
      remediation: "A zero between nonzero digits is significant: 6.022 has four.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Counts every digit of the number written out.",
      remediation: t`Only the digits of $N$ count: 6.022 has four.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Counts leading zeros.",
      remediation: "Leading zeros only place the point; they never count.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Counts the zeros after the decimal point.",
      remediation: "Zeros before the first nonzero digit never count.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks a number below 1 has one significant figure.",
      remediation: "Count from the first nonzero digit: 25 gives two.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Flips the sign of the exponent.",
      remediation: "A number below 1 has a negative power of ten.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: t`Leaves $N$ outside the range 1 to 10.`,
      remediation: "Move the point until one nonzero digit is before it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Miscounts the places moved.",
      remediation: "From 0.0003498 to 3.498 the point moves four places.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: t`Adds the $N$'s.`,
      remediation: t`Multiply the $N$'s: 5.6 × 6.9 = 38.64.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Multiplies the exponents.",
      remediation: t`Add the exponents: $10^5 \times 10^8 = 10^{13}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (D)" },
      stem: t`How many significant figures are there in $1.50 \times 10^{4}$ g?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sf_150" } },
      options: [
        { key: "A", text: t`5`, correct: false, misconceptionId: "C01-M3", value: "five" },
        { key: "B", text: t`2`, correct: false, misconceptionId: "C01-M1", value: "two" },
        { key: "C", text: t`6`, correct: false, misconceptionId: "C01-M2", value: "six" },
        { key: "D", text: t`3`, correct: true, value: "three" },
      ],
      solution: {
        steps: [
          t`Count the digits of 1.50: 1, 5 and the trailing 0.`,
          t`Three significant figures.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (E)" },
      stem: t`How many significant figures are there in Avogadro's constant, $6.022 \times 10^{23}\ \mathrm{mol^{-1}}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sf_avogadro" } },
      options: [
        { key: "A", text: t`4`, correct: true, value: "four" },
        { key: "B", text: t`3`, correct: false, misconceptionId: "C01-M4", value: "three" },
        { key: "C", text: t`8`, correct: false, misconceptionId: "C01-M2", value: "eight" },
        { key: "D", text: t`24`, correct: false, misconceptionId: "C01-M5", value: "twenty_four" },
      ],
      solution: {
        steps: [
          t`Count the digits of 6.022.`,
          t`Four significant figures.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.3 (A)" },
      stem: t`How many significant figures are there in 0.00025 kg?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sf_small" } },
      options: [
        { key: "A", text: t`5`, correct: false, misconceptionId: "C01-M7", value: "five" },
        { key: "B", text: t`2`, correct: true, value: "two" },
        { key: "C", text: t`1`, correct: false, misconceptionId: "C01-M8", value: "one" },
        { key: "D", text: t`6`, correct: false, misconceptionId: "C01-M6", value: "six" },
      ],
      solution: {
        steps: [
          t`0.00025: leading zeros do not count.`,
          t`2 and 5: two significant figures.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.4 (A)" },
      stem: t`Write 0.0003498 in scientific notation.`,
      verify: { kind: "value", inputs: {  }, params: { q: "notation" } },
      options: [
        { key: "A", text: t`$34.98 \times 10^{-5}$`, correct: false, misconceptionId: "C01-M10", value: "e_3498_m5_big" },
        { key: "B", text: t`$3.498 \times 10^{4}$`, correct: false, misconceptionId: "C01-M9", value: "e_3498_p4" },
        { key: "C", text: t`$3.498 \times 10^{-4}$`, correct: true, value: "e_3498_m4" },
        { key: "D", text: t`$3.498 \times 10^{-3}$`, correct: false, misconceptionId: "C01-M11", value: "e_3498_m3" },
      ],
      solution: {
        steps: [
          t`Move the point four places right: 3.498.`,
          t`$3.498 \times 10^{-4}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.3" },
      stem: t`Evaluate $(5.6 \times 10^{5}) \times (6.9 \times 10^{8})$ in scientific notation.`,
      verify: { kind: "value", inputs: {  }, params: { q: "product" } },
      options: [
        { key: "A", text: t`$38.64 \times 10^{13}$`, correct: false, misconceptionId: "C01-M10", value: "p_3864_e13" },
        { key: "B", text: t`$12.5 \times 10^{13}$`, correct: false, misconceptionId: "C01-M12", value: "p_125_e13" },
        { key: "C", text: t`$3.9 \times 10^{40}$`, correct: false, misconceptionId: "C01-M13", value: "p_39_e40" },
        { key: "D", text: t`$3.9 \times 10^{14}$`, correct: true, value: "p_39_e14" },
      ],
      solution: {
        steps: [
          t`5.6 × 6.9 = 38.64; $10^{5+8} = 10^{13}$.`,
          t`$38.64 \times 10^{13} = 3.9 \times 10^{14}$ (two figures).`,
        ],
      },
    },
  ],
};
