import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`A scheme is worth ₹ 50 crore and has 2 crore units, each of face value ₹ 10. Ravi invests ₹ 1,000. **Does he get 100 units?**`,
    reveal: t`No. He pays today's value of a unit, the NAV: ₹ 50 crore $\div$ 2 crore units = ₹ 25. So he gets $1000 \div 25 = 40$ units.`,
  },
  explanation: {
    intuition: [
      t`A **mutual fund** collects money from many investors and invests it in shares and bonds.`,
      t`A scheme's money is split into equal parts called **units**.`,
      t`The **NAV** (net asset value) is the value of one unit today.`,
      t`The NAV changes every day as the scheme's investments rise or fall.`,
      t`You buy units at today's NAV, not at the face value.`,
      t`So more money buys more units: units $=$ amount $\div$ NAV.`,
    ],
    formal: [
      {
        title: "Finding the NAV",
        points: [
          t`NAV $=$ total value of the scheme $\div$ number of units.`,
          t`For ₹ 50 crore and 2 crore units: NAV $= 50 \div 2$ = ₹ 25.`,
          t`The word crore cancels: crore rupees $\div$ crore units gives rupees per unit.`,
          t`If the value and the units are in different scales, write both in lakh first.`,
          t`$1$ crore $= 100$ lakh, so ₹ 6 crore = ₹ 600 lakh.`,
          t`With 40 lakh units: NAV $= 600 \div 40$ = ₹ 15.`,
        ],
      },
      {
        title: "Units for an amount",
        points: [
          t`Each unit costs one NAV.`,
          t`So units allotted $=$ amount invested $\div$ NAV.`,
          t`₹ 1,000 at NAV ₹ 25 buys $1000 \div 25 = 40$ units.`,
          t`The amount needed $=$ number of units $\times$ NAV.`,
          t`100 units at NAV ₹ 25 cost $100 \times 25$ = ₹ 2,500.`,
          t`Check: units $\times$ NAV must give back the amount.`,
        ],
      },
      {
        title: "Face value is not NAV",
        points: [
          t`A unit's **face value** is the price at which it was first issued, often ₹ 10.`,
          t`The NAV moves away from the face value as the scheme gains or loses.`,
          t`Buyers pay the NAV, so never divide by the face value.`,
          t`Keep the decimal point in the NAV: ₹ 18.40 is not ₹ 1,840.`,
        ],
      },
    ],
    worked: {
      prompt: t`A mutual fund scheme worth ₹ 4 crore has issued 25 lakh units. Neha invests ₹ 8,000 in it. Find the NAV and the number of units she gets.`,
      steps: [
        t`Write both in lakh: ₹ 4 crore = ₹ 400 lakh.`,
        t`NAV $= 400 \div 25 = 16$, so the NAV is ₹ 16.`,
        t`Units $=$ amount $\div$ NAV $= 8000 \div 16 = 500$.`,
        t`Check: $500 \times 16 = 8000$, which is her investment.`,
      ],
      answer: t`NAV = ₹ 16; Neha gets 500 units.`,
    },
    visualSpec: t`Drag the scheme's total value and the number of units to see the NAV change, then drag an investment and watch it split into units of one NAV each.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Multiplies the amount by the NAV to get the units, or divides the units by the NAV to get the amount.",
      remediation: t`Each unit costs one NAV. So units $=$ amount $\div$ NAV, and amount $=$ units $\times$ NAV.`,
      fallback: { kind: "ext", topic: "unitary method: cost of one, cost of many" },
    },
    {
      id: "C09-M2",
      mistake: "Divides the number of units by the total value of the scheme.",
      remediation: "NAV is rupees per unit, so divide the total value by the number of units.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Divides the value in rupees by the bare number of units, dropping the lakh or crore on the units.",
      remediation: "Write the value and the units in the same scale, both in lakh, before dividing. Then the scale words cancel.",
      fallback: { kind: "ext", topic: "lakh and crore (Indian place value)" },
    },
    {
      id: "C09-M4",
      mistake: "Takes 1 crore as 10 lakh when writing both in lakh.",
      remediation: t`$1$ crore $= 100$ lakh, so ₹ 3 crore = ₹ 300 lakh.`,
      fallback: { kind: "ext", topic: "lakh and crore (Indian place value)" },
    },
    {
      id: "C09-M5",
      mistake: "Ignores the decimal point in the NAV, reading ₹ 14.20 as 1420.",
      remediation: "Keep the decimal point: a NAV of ₹ 14.20 is fourteen rupees twenty paise.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Uses the face value of a unit in place of the NAV.",
      remediation: "Units are bought at today's NAV. The face value is only the price at which units were first issued.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Mistaken money answers that are not a whole number of paise are rounded to the paisa, as a student writes money.",
    "C09-M2 and C09-M3 apply only to NAV items; C09-M4 only where the value and the units are in different scales (crore and lakh).",
    "C09-M5 applies only where the NAV has paise; C09-M6 only where the stem gives the face value of a unit.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/MF SolvedEx.1" },
      stem: t`The total value of a mutual fund scheme is ₹ 12 crore, and it has issued 80 lakh units. What is the NAV of one unit?`,
      verify: { kind: "value", inputs: { V: "12", Vs: "10000000", U: "80", Us: "100000" }, params: { ask: "nav" } },
      options: [
        { key: "A", text: t`₹ 15,00,000`, correct: false, misconceptionId: "C09-M3", value: "1500000" },
        { key: "B", text: t`₹ 1.50`, correct: false, misconceptionId: "C09-M4", value: "3/2" },
        { key: "C", text: t`₹ 15`, correct: true, value: "15" },
        { key: "D", text: t`₹ 0.07`, correct: false, misconceptionId: "C09-M2", value: "7/100" },
      ],
      solution: {
        steps: [
          t`Write both in lakh: ₹ 12 crore = ₹ 1,200 lakh.`,
          t`NAV $= 1200 \div 80 = 15$.`,
          t`So the NAV of one unit is ₹ 15.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/MF SolvedEx.2" },
      stem: t`The units of a mutual fund scheme have a face value of ₹ 10 each. Today the NAV of one unit is ₹ 12.50. How many units will be allotted for an investment of ₹ 10,000?`,
      verify: { kind: "value", inputs: { A: "10000", N: "25/2", F: "10" }, params: { ask: "units" } },
      options: [
        { key: "A", text: t`800 units`, correct: true, value: "800" },
        { key: "B", text: t`1,25,000 units`, correct: false, misconceptionId: "C09-M1", value: "125000" },
        { key: "C", text: t`8 units`, correct: false, misconceptionId: "C09-M5", value: "8" },
        { key: "D", text: t`1,000 units`, correct: false, misconceptionId: "C09-M6", value: "1000" },
      ],
      solution: {
        steps: [
          t`Units are bought at the NAV, ₹ 12.50, not at the face value.`,
          t`Units $= 10000 \div 12.50 = 800$.`,
          t`So 800 units are allotted.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.1(3)" },
      stem: t`Choose the correct alternative. The face value of a unit in a mutual fund scheme is ₹ 10, and its NAV is ₹ 10.65. What is the amount required to buy 500 such units?`,
      verify: { kind: "value", inputs: { n: "500", N: "1065/100", F: "10" }, params: { ask: "amount" } },
      options: [
        { key: "A", text: t`₹ 46.95`, correct: false, misconceptionId: "C09-M1", value: "939/20" },
        { key: "B", text: t`₹ 5,32,500`, correct: false, misconceptionId: "C09-M5", value: "532500" },
        { key: "C", text: t`₹ 5,000`, correct: false, misconceptionId: "C09-M6", value: "5000" },
        { key: "D", text: t`₹ 5,325`, correct: true, value: "5325" },
      ],
      solution: {
        steps: [
          t`Units are bought at the NAV, ₹ 10.65, not at the face value.`,
          t`Amount $= 500 \times 10.65 = 5325$.`,
          t`So the amount required is ₹ 5,325.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/MF SolvedEx.2" },
      stem: t`A mutual fund scheme worth ₹ 9 crore has issued 60 lakh units, each of face value ₹ 10. Mr Joshi invests ₹ 6,000 in the scheme. How many units will he get?`,
      verify: { kind: "value", inputs: { A: "6000", V: "9", Vs: "10000000", U: "60", Us: "100000", F: "10" }, params: { ask: "units" } },
      options: [
        { key: "A", text: t`400 units`, correct: true, value: "400" },
        { key: "B", text: t`90,000 units`, correct: false, misconceptionId: "C09-M1", value: "90000" },
        { key: "C", text: t`4,000 units`, correct: false, misconceptionId: "C09-M4", value: "4000" },
        { key: "D", text: t`600 units`, correct: false, misconceptionId: "C09-M6", value: "600" },
      ],
      solution: {
        steps: [
          t`₹ 9 crore = ₹ 900 lakh, so NAV $= 900 \div 60 = 15$.`,
          t`Units $= 6000 \div 15 = 400$.`,
          t`So Mr Joshi gets 400 units.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/MF SolvedEx.1" },
      stem: t`A mutual fund scheme has a total value of ₹ 7.2 crore, and 36 lakh units have been issued. What is the NAV of one unit?`,
      verify: { kind: "value", inputs: { V: "72/10", Vs: "10000000", U: "36", Us: "100000" }, params: { ask: "nav" } },
      options: [
        { key: "A", text: t`₹ 20,00,000`, correct: false, misconceptionId: "C09-M3", value: "2000000" },
        { key: "B", text: t`₹ 2`, correct: false, misconceptionId: "C09-M4", value: "2" },
        { key: "C", text: t`₹ 20`, correct: true, value: "20" },
        { key: "D", text: t`₹ 0.05`, correct: false, misconceptionId: "C09-M2", value: "1/20" },
      ],
      solution: {
        steps: [
          t`Write both in lakh: ₹ 7.2 crore = ₹ 720 lakh.`,
          t`NAV $= 720 \div 36 = 20$.`,
          t`So the NAV of one unit is ₹ 20.`,
        ],
      },
    },
  ],
};
