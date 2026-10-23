import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Ravi is 30 years old. His taxable income is ₹ 5,10,000. He says: **I am in the $20\%$ slab, so my income tax is $20\%$ of ₹ 5,10,000 = ₹ 1,02,000.** Is he right?`,
    reveal: t`No. Only the ₹ 10,000 above ₹ 5,00,000 is taxed at $20\%$, which is ₹ 2,000. The slab below adds a fixed ₹ 12,500. His income tax is ₹ 14,500, before the cess.`,
  },
  explanation: {
    intuition: [
      t`**Income tax** is a share of your income that you pay to the government.`,
      t`The **taxable income** (income after deductions) is cut into parts called **slabs**.`,
      t`Each slab has its own rate: Nil, $5\%$, $20\%$ or $30\%$.`,
      t`Each part of the income is taxed only at the rate of its own slab.`,
      t`Add the tax on the parts to get the income tax.`,
      t`Then add a small **cess** on that tax to get the tax payable.`,
    ],
    formal: [
      {
        title: "Table I: under 60",
        points: [
          t`Table I is for individuals up to 60 years of age.`,
          t`Up to ₹ 2,50,000: Nil.`,
          t`₹ 2,50,001 to ₹ 5,00,000: $5\%$ of (taxable income $- 250000$).`,
          t`₹ 5,00,001 to ₹ 10,00,000: ₹ 12,500 $+ 20\%$ of (taxable income $- 500000$).`,
          t`Above ₹ 10,00,000: ₹ 1,12,500 $+ 30\%$ of (taxable income $- 1000000$).`,
          t`Find the row that holds the taxable income, and use only that row.`,
        ],
      },
      {
        title: "Where the fixed amounts come from",
        points: [
          t`A row's fixed amount is the tax on all the slabs below it, added up.`,
          t`The slab ₹ 2,50,001 to ₹ 5,00,000 is ₹ 2,50,000 wide, taxed at $5\%$.`,
          t`$5\%$ of $250000 = 12500$, the fixed amount in the next row.`,
          t`The next ₹ 5,00,000 at $20\%$ adds ₹ 1,00,000: $12500 + 100000 = 112500$.`,
          t`So only the part above a slab's start is taxed at that slab's rate.`,
          t`Never use one rate for the whole taxable income.`,
        ],
      },
      {
        title: "Table II: senior citizens",
        points: [
          t`Table II is for **senior citizens**, people aged 60 to 80 years.`,
          t`Up to ₹ 3,00,000: Nil.`,
          t`₹ 3,00,001 to ₹ 5,00,000: $5\%$ of (taxable income $- 300000$).`,
          t`₹ 5,00,001 to ₹ 10,00,000: ₹ 10,000 $+ 20\%$ of (taxable income $- 500000$).`,
          t`Above ₹ 10,00,000: ₹ 1,10,000 $+ 30\%$ of (taxable income $- 1000000$).`,
          t`Here $5\%$ of $200000 = 10000$, the tax on ₹ 3,00,001 to ₹ 5,00,000.`,
        ],
      },
      {
        title: "Adding the cess",
        points: [
          t`A **cess** is an extra charge worked out as a percentage of the income tax.`,
          t`Education cess $= 2\%$ of the income tax.`,
          t`Secondary and higher education cess $= 1\%$ of the income tax.`,
          t`Tax payable $=$ income tax $+$ both cesses.`,
          t`Example: income tax ₹ 20,000 gives cesses ₹ 400 and ₹ 200, so ₹ 20,600 is payable.`,
          t`A person under 60 with taxable income ₹ 2,30,000 pays Nil tax, so Nil cess too.`,
        ],
      },
    ],
    worked: {
      prompt: t`Mrs. Patil is 40 years old. Her taxable income is ₹ 8,20,000. Find the income tax payable.`,
      steps: [
        t`She is under 60, so use Table I. ₹ 8,20,000 lies in the slab ₹ 5,00,001 to ₹ 10,00,000.`,
        t`Part above ₹ 5,00,000: $820000 - 500000 = 320000$.`,
        t`Income tax $= 12500 + 20\%$ of $320000$ $= 12500 + 64000 = 76500$.`,
        t`Education cess $= 2\%$ of $76500 = 1530$. Secondary and higher education cess $= 1\%$ of $76500 = 765$.`,
        t`Tax payable $= 76500 + 1530 + 765$ $= 78795$.`,
      ],
      answer: t`Mrs. Patil's income tax payable is ₹ 78,795.`,
    },
    visualSpec: t`Drag the taxable income along a bar cut into slabs and watch each part's tax fill in at its own rate, with the cess added on top.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Taxes the whole taxable income at the rate of its slab (for example $30\%$ of all of it).`,
      remediation: "Only the part above the slab's start is taxed at that slab's rate. Use the row's fixed amount plus the rate on the part above the start.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Taxes only the part in the top slab and leaves out the row's fixed amount for the slabs below.",
      remediation: "The slabs below are taxed too. Add the row's fixed amount (₹ 12,500, ₹ 1,12,500, ₹ 10,000 or ₹ 1,10,000) to the tax on the top part.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Stops at the income tax and does not add the cess.",
      remediation: t`Tax payable is the income tax plus $2\%$ education cess and $1\%$ secondary and higher education cess, both on the income tax.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Uses the wrong table for the person's age (Table II for someone under 60, or Table I for a senior citizen).",
      remediation: "Under 60, use Table I (Nil up to ₹ 2,50,000). From 60 to 80, use Table II (Nil up to ₹ 3,00,000).",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: "Works out the cess as a percentage of the taxable income instead of the income tax.",
      remediation: t`Both cesses are percentages of the income tax, not of the income: $2\%$ and $1\%$ of the income tax.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Adds only the $2\%$ education cess and forgets the $1\%$ secondary and higher education cess.`,
      remediation: t`There are two cesses: $2\%$ education cess and $1\%$ secondary and higher education cess. Add both.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "The stems print the book's Table I and Table II as the rate on each part of the taxable income (same numbers; the book's fixed amounts are the sums of the lower parts).",
    "The book's printed answers for Prob Q8(i) and Q8(ii) (2,13,000 and 7,500) leave out the cess: they are C04-M3, the key adds the cess as the chapter's worked examples do.",
    "C04-M2 needs a slab with a fixed amount (the 20% or 30% slab); C04-M3 is not used when the cess itself is asked for (Q6).",
    "Q6 keeps Mr. Ahmed from SolvedEx.2 with a new taxable income, so it lies in the 20% slab.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Income Tax SolvedEx.1" },
      stem: t`Each part of the taxable income is taxed at its own rate (income in lakh rupees; 1 lakh = ₹ 1,00,000): $$\begin{array}{l|c|c} \text{Income} & \text{Under 60} & \text{60 to 80} \\ \hline \text{up to } 2.5 & \text{Nil} & \text{Nil} \\ 2.5 \text{ to } 3 & 5\% & \text{Nil} \\ 3 \text{ to } 5 & 5\% & 5\% \\ 5 \text{ to } 10 & 20\% & 20\% \\ \text{above } 10 & 30\% & 30\% \end{array}$$ Then $2\%$ education cess and $1\%$ secondary and higher education cess are added, on the income tax. Mr. Mhatre is 50 years old. His taxable income is ₹ 10,50,000. What is the income tax payable, with both cesses?`,
      verify: { kind: "value", inputs: { I: "1050000", age: "50" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 15,450`, correct: false, misconceptionId: "C04-M2", value: "15450" },
        { key: "B", text: t`₹ 1,27,500`, correct: false, misconceptionId: "C04-M3", value: "127500" },
        { key: "C", text: t`₹ 1,31,325`, correct: true, value: "131325" },
        { key: "D", text: t`₹ 3,24,450`, correct: false, misconceptionId: "C04-M1", value: "324450" },
      ],
      solution: {
        steps: [
          t`He is under 60, so use Table I. ₹ 10,50,000 is above ₹ 10,00,000.`,
          t`Income tax $= 112500 + 30\%$ of $50000$ $= 112500 + 15000 = 127500$.`,
          t`Education cess $= 2550$. Secondary and higher education cess $= 1275$.`,
          t`Tax payable $= 127500 + 2550 + 1275$ = ₹ 1,31,325.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q8(ii)" },
      stem: t`Each part of the taxable income is taxed at its own rate (income in lakh rupees; 1 lakh = ₹ 1,00,000): $$\begin{array}{l|c|c} \text{Income} & \text{Under 60} & \text{60 to 80} \\ \hline \text{up to } 2.5 & \text{Nil} & \text{Nil} \\ 2.5 \text{ to } 3 & 5\% & \text{Nil} \\ 3 \text{ to } 5 & 5\% & 5\% \\ 5 \text{ to } 10 & 20\% & 20\% \\ \text{above } 10 & 30\% & 30\% \end{array}$$ Then $2\%$ education cess and $1\%$ secondary and higher education cess are added, on the income tax. Mr. Khan is 65 years old. His taxable income is ₹ 4,50,000. What is the income tax payable, with both cesses?`,
      verify: { kind: "value", inputs: { I: "450000", age: "65" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 10,300`, correct: false, misconceptionId: "C04-M4", value: "10300" },
        { key: "B", text: t`₹ 21,000`, correct: false, misconceptionId: "C04-M5", value: "21000" },
        { key: "C", text: t`₹ 7,650`, correct: false, misconceptionId: "C04-M6", value: "7650" },
        { key: "D", text: t`₹ 7,725`, correct: true, value: "7725" },
      ],
      solution: {
        steps: [
          t`He is 65, so use Table II. ₹ 4,50,000 lies in the slab ₹ 3,00,001 to ₹ 5,00,000.`,
          t`Income tax $= 5\%$ of $(450000 - 300000)$ $= 5\%$ of $150000 = 7500$.`,
          t`Education cess $= 150$. Secondary and higher education cess $= 75$.`,
          t`Tax payable $= 7500 + 150 + 75$ = ₹ 7,725.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Income Tax SolvedEx.3" },
      stem: t`Each part of the taxable income is taxed at its own rate (income in lakh rupees; 1 lakh = ₹ 1,00,000): $$\begin{array}{l|c|c} \text{Income} & \text{Under 60} & \text{60 to 80} \\ \hline \text{up to } 2.5 & \text{Nil} & \text{Nil} \\ 2.5 \text{ to } 3 & 5\% & \text{Nil} \\ 3 \text{ to } 5 & 5\% & 5\% \\ 5 \text{ to } 10 & 20\% & 20\% \\ \text{above } 10 & 30\% & 30\% \end{array}$$ Then $2\%$ education cess and $1\%$ secondary and higher education cess are added, on the income tax. Mrs. Hinduja is 50 years old. Last year her taxable income was ₹ 16,30,000. What is the income tax payable, with both cesses?`,
      verify: { kind: "value", inputs: { I: "1630000", age: "50" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 3,50,400`, correct: false, misconceptionId: "C04-M5", value: "350400" },
        { key: "B", text: t`₹ 3,07,530`, correct: false, misconceptionId: "C04-M6", value: "307530" },
        { key: "C", text: t`₹ 3,10,545`, correct: true, value: "310545" },
        { key: "D", text: t`₹ 1,94,670`, correct: false, misconceptionId: "C04-M2", value: "194670" },
      ],
      solution: {
        steps: [
          t`She is under 60, so use Table I. ₹ 16,30,000 is above ₹ 10,00,000.`,
          t`Income tax $= 112500 + 30\%$ of $630000$ $= 112500 + 189000 = 301500$.`,
          t`Education cess $= 6030$. Secondary and higher education cess $= 3015$.`,
          t`Tax payable $= 301500 + 6030 + 3015$ = ₹ 3,10,545.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.2 Q2" },
      stem: t`Each part of the taxable income is taxed at its own rate (income in lakh rupees; 1 lakh = ₹ 1,00,000): $$\begin{array}{l|c|c} \text{Income} & \text{Under 60} & \text{60 to 80} \\ \hline \text{up to } 2.5 & \text{Nil} & \text{Nil} \\ 2.5 \text{ to } 3 & 5\% & \text{Nil} \\ 3 \text{ to } 5 & 5\% & 5\% \\ 5 \text{ to } 10 & 20\% & 20\% \\ \text{above } 10 & 30\% & 30\% \end{array}$$ Then $2\%$ education cess and $1\%$ secondary and higher education cess are added, on the income tax. Mr. Kartarsingh is 48 years old. After his deductions, his taxable income is ₹ 4,41,000. What is the income tax payable, with both cesses?`,
      verify: { kind: "value", inputs: { I: "441000", age: "48" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 7,261.50`, correct: false, misconceptionId: "C04-M4", value: "14523/2" },
        { key: "B", text: t`₹ 9,550`, correct: false, misconceptionId: "C04-M3", value: "9550" },
        { key: "C", text: t`₹ 22,711.50`, correct: false, misconceptionId: "C04-M1", value: "45423/2" },
        { key: "D", text: t`₹ 9,836.50`, correct: true, value: "19673/2" },
      ],
      solution: {
        steps: [
          t`He is under 60, so use Table I. ₹ 4,41,000 lies in the slab ₹ 2,50,001 to ₹ 5,00,000.`,
          t`Income tax $= 5\%$ of $(441000 - 250000)$ $= 5\%$ of $191000 = 9550$.`,
          t`Education cess $= 191$. Secondary and higher education cess $= 95.50$.`,
          t`Tax payable $= 9550 + 191 + 95.50$ = ₹ 9,836.50.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q8(i)" },
      stem: t`Each part of the taxable income is taxed at its own rate (income in lakh rupees; 1 lakh = ₹ 1,00,000): $$\begin{array}{l|c|c} \text{Income} & \text{Under 60} & \text{60 to 80} \\ \hline \text{up to } 2.5 & \text{Nil} & \text{Nil} \\ 2.5 \text{ to } 3 & 5\% & \text{Nil} \\ 3 \text{ to } 5 & 5\% & 5\% \\ 5 \text{ to } 10 & 20\% & 20\% \\ \text{above } 10 & 30\% & 30\% \end{array}$$ Then $2\%$ education cess and $1\%$ secondary and higher education cess are added, on the income tax. Mr. Kadam is 35 years old and has a taxable income of ₹ 13,35,000. What is the income tax payable, with both cesses?`,
      verify: { kind: "value", inputs: { I: "1335000", age: "35" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 2,16,815`, correct: false, misconceptionId: "C04-M4", value: "216815" },
        { key: "B", text: t`₹ 2,19,390`, correct: true, value: "219390" },
        { key: "C", text: t`₹ 2,13,000`, correct: false, misconceptionId: "C04-M3", value: "213000" },
        { key: "D", text: t`₹ 4,12,515`, correct: false, misconceptionId: "C04-M1", value: "412515" },
      ],
      solution: {
        steps: [
          t`He is under 60, so use Table I. ₹ 13,35,000 is above ₹ 10,00,000.`,
          t`Income tax $= 112500 + 30\%$ of $335000$ $= 112500 + 100500 = 213000$.`,
          t`Education cess $= 4260$. Secondary and higher education cess $= 2130$.`,
          t`Tax payable $= 213000 + 4260 + 2130$ = ₹ 2,19,390.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Income Tax SolvedEx.2" },
      stem: t`Each part of the taxable income is taxed at its own rate (income in lakh rupees; 1 lakh = ₹ 1,00,000): $$\begin{array}{l|c|c} \text{Income} & \text{Under 60} & \text{60 to 80} \\ \hline \text{up to } 2.5 & \text{Nil} & \text{Nil} \\ 2.5 \text{ to } 3 & 5\% & \text{Nil} \\ 3 \text{ to } 5 & 5\% & 5\% \\ 5 \text{ to } 10 & 20\% & 20\% \\ \text{above } 10 & 30\% & 30\% \end{array}$$ Then $2\%$ education cess and $1\%$ secondary and higher education cess are added, on the income tax. Mr. Ahmed is 62 years old. His taxable income is ₹ 7,20,000. How much is the education cess and the secondary and higher education cess together?`,
      verify: { kind: "value", inputs: { I: "720000", age: "62" }, params: { ask: "cess" } },
      options: [
        { key: "A", text: t`₹ 1,620`, correct: true, value: "1620" },
        { key: "B", text: t`₹ 21,600`, correct: false, misconceptionId: "C04-M5", value: "21600" },
        { key: "C", text: t`₹ 1,695`, correct: false, misconceptionId: "C04-M4", value: "1695" },
        { key: "D", text: t`₹ 1,320`, correct: false, misconceptionId: "C04-M2", value: "1320" },
      ],
      solution: {
        steps: [
          t`He is 62, so use Table II. ₹ 7,20,000 lies in the slab ₹ 5,00,001 to ₹ 10,00,000.`,
          t`Income tax $= 10000 + 20\%$ of $220000$ $= 10000 + 44000 = 54000$.`,
          t`Education cess $= 2\%$ of $54000 = 1080$. Secondary and higher education cess $= 1\%$ of $54000 = 540$.`,
          t`Both cesses together $= 1080 + 540$ = ₹ 1,620.`,
        ],
      },
    },
  ],
};
