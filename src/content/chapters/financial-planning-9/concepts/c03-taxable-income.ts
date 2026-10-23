import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Ravi is 30 and earns ₹ 3,00,000 a year. He puts ₹ 60,000 into PPF. A friend says: **3,00,000 is more than 2,50,000, so Ravi must pay income tax.** Is the friend right?`,
    reveal: t`No. The PPF saving is taken off first. Taxable income $= 300000 - 60000$ = ₹ 2,40,000. That is within the Nil limit of ₹ 2,50,000, so no tax is due.`,
  },
  explanation: {
    intuition: [
      t`**Income tax** is a tax the government collects on a person's yearly income.`,
      t`Not all of the income is taxed.`,
      t`Some savings and donations are taken off first; these are **deductions**.`,
      t`What is left is the **taxable income**.`,
      t`Each age group has a limit up to which the tax is Nil.`,
      t`If the taxable income is within that limit, no income tax is due.`,
    ],
    formal: [
      {
        title: "Financial year and PAN",
        points: [
          t`A **financial year** runs from 1 April to 31 March.`,
          t`Its income is assessed for tax in the next year, the **assessment year**.`,
          t`Income earned in 2017-18 has the assessment year 2018-19.`,
          t`A **PAN** (Permanent Account Number) is a 10-character code from the Income Tax Department.`,
          t`A taxpayer quotes the PAN when filing the income tax return.`,
        ],
      },
      {
        title: "Deductions: 80C and 80G",
        points: [
          t`Section **80C** lets some savings be taken off the yearly income.`,
          t`Examples: life insurance premium, provident fund (PF, GPF), PPF and NSC.`,
          t`Add these savings for the whole year; at most ₹ 1,50,000 is taken off.`,
          t`Section **80G**: donations to the PM's or CM's Relief Fund are taken off too.`,
          t`Taxable income $=$ total income $-$ deductions.`,
          t`Example: ₹ 5,40,000 with ₹ 1,80,000 of 80C savings gives ₹ 3,90,000.`,
        ],
      },
      {
        title: "The Nil limit by age",
        points: [
          t`A **slab** is a range of taxable income taxed in one way.`,
          t`Up to the age of 60 (Table I): Nil up to ₹ 2,50,000.`,
          t`Senior citizens, 60 to 80 years (Table II): Nil up to ₹ 3,00,000.`,
          t`Super senior citizens, above 80 years (Table III): Nil up to ₹ 5,00,000.`,
          t`Up to includes the limit itself; tax starts from ₹ 1 more.`,
          t`Taxable income above the person's limit means income tax is due.`,
        ],
      },
    ],
    worked: {
      prompt: t`Mr. Pawar is 63 and earns ₹ 4,70,000 a year. He pays a life insurance premium of ₹ 1,20,000 and puts ₹ 70,000 in PPF. He gives ₹ 30,000 to the CM's Relief Fund. Find his taxable income. Does he have to pay income tax?`,
      steps: [
        t`80C savings: $120000 + 70000 = 190000$. Only ₹ 1,50,000 is taken off.`,
        t`The ₹ 30,000 donation to the CM's Relief Fund is also taken off (80G).`,
        t`Taxable income $= 470000 - (150000 + 30000)$ = ₹ 2,90,000.`,
        t`He is 63, a senior citizen, so Table II applies: Nil up to ₹ 3,00,000.`,
        t`$290000 < 300000$, so he need not pay income tax.`,
      ],
      answer: t`Taxable income ₹ 2,90,000; no income tax is due.`,
    },
    visualSpec: t`Slide the income, the 80C savings and a donation, and watch a bar for the taxable income rise or fall against the Nil-limit line for the chosen age.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Takes off all the 80C savings, even beyond the ₹ 1,50,000 ceiling.",
      remediation: "Section 80C allows at most ₹ 1,50,000 in all. If the savings add up to more, take off only ₹ 1,50,000.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks only 80C savings are deducted, so leaves the relief-fund donation in the income.",
      remediation: "Donations to the PM's or CM's Relief Fund are deducted too, under section 80G. Take off the 80C amount and the donation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Uses the ₹ 2,50,000 Nil limit of Table I for every age.",
      remediation: "The Nil limit depends on age: ₹ 2,50,000 up to 60 years, ₹ 3,00,000 from 60 to 80, ₹ 5,00,000 above 80.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Also takes the Nil limit off, as if taxable income were only the part above the limit.",
      remediation: "Taxable income is total income minus the deductions only. The Nil limit is used after that, to decide whether tax is due.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Swaps the two senior-citizen tables: ₹ 5,00,000 for 60 to 80 years and ₹ 3,00,000 above 80.",
      remediation: "Senior citizens (60 to 80 years) pay Nil up to ₹ 3,00,000. Super senior citizens (above 80) pay Nil up to ₹ 5,00,000.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks a taxable income exactly equal to the Nil limit is already taxed.",
      remediation: "The Nil slab runs up to and including the limit, so the limit itself pays no tax. Tax starts from ₹ 1 more.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1 gives the key when the 80C savings are at most 1,50,000: diagnose it with savings above the ceiling (Q3, Q4, Q5).",
    "C03-M3 and C03-M5 give the key for anyone below 60: diagnose them with senior or super senior citizens (Q1, Q2, Q6).",
    "C03-M6 differs from the key only when a taxable income equals a Nil limit, or when the smallest taxed income is asked (Q1, Q2, Q6).",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.2 Q1(ii)" },
      stem: t`The table gives each person's age (in years) and taxable income (in rupees). $$\begin{array}{l|c|c} \text{Name} & \text{Age} & \text{Taxable income} \\ \hline \text{Nikita} & 27 & 234000 \\ \text{Kulkarni} & 36 & 327000 \\ \text{Mehta} & 44 & 582000 \\ \text{Kale} & 64 & 420000 \\ \text{Shinde} & 70 & 300000 \\ \text{Patel} & 30 & 250000 \end{array}$$ How many of them have to pay income tax?`,
      verify: { kind: "value", inputs: { k: "6" }, params: { ask: "count", people: "27:234000,36:327000,44:582000,64:420000,70:300000,30:250000" } },
      options: [
        { key: "A", text: t`2 people`, correct: false, misconceptionId: "C03-M5", value: "2" },
        { key: "B", text: t`5 people`, correct: false, misconceptionId: "C03-M6", value: "5" },
        { key: "C", text: t`3 people`, correct: true, value: "3" },
        { key: "D", text: t`4 people`, correct: false, misconceptionId: "C03-M3", value: "4" },
      ],
      solution: {
        steps: [
          t`Nil limits: ₹ 2,50,000 up to 60 years, ₹ 3,00,000 for 60 to 80, ₹ 5,00,000 above 80.`,
          t`Nikita (₹ 2,34,000) and Patel (exactly ₹ 2,50,000) are within ₹ 2,50,000: no tax.`,
          t`Kale is 64: $420000 > 300000$, so he pays. Shinde is 70: ₹ 3,00,000 is exactly his limit, so he does not.`,
          t`Kulkarni, Mehta and Kale pay income tax: 3 people.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.2 Q1(iv)" },
      stem: t`Mr. Bajaj is 64 years old. What is the smallest taxable income, in whole rupees, on which he has to pay income tax?`,
      verify: { kind: "value", inputs: { A: "64" }, params: { ask: "smallest" } },
      options: [
        { key: "A", text: t`₹ 5,00,001`, correct: false, misconceptionId: "C03-M5", value: "500001" },
        { key: "B", text: t`₹ 3,00,000`, correct: false, misconceptionId: "C03-M6", value: "300000" },
        { key: "C", text: t`₹ 3,00,001`, correct: true, value: "300001" },
        { key: "D", text: t`₹ 2,50,001`, correct: false, misconceptionId: "C03-M3", value: "250001" },
      ],
      solution: {
        steps: [
          t`Mr. Bajaj is 64, a senior citizen, so Table II applies.`,
          t`Tax is Nil up to ₹ 3,00,000, including ₹ 3,00,000 itself.`,
          t`The next slab starts at ₹ 3,00,001, so that is the smallest taxed income.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Mrs. Patil (age 42) earns ₹ 52,000 a month. Every month she puts ₹ 6,000 into her GPF. She also pays a life insurance premium of ₹ 90,000 a year and gives ₹ 12,000 to the CM's Relief Fund. What is her taxable income for the year?`,
      verify: { kind: "value", inputs: { I: "52000*12", S: "6000*12 + 90000", d: "12000", A: "42" }, params: { ask: "taxable" } },
      options: [
        { key: "A", text: t`₹ 4,50,000`, correct: false, misconceptionId: "C03-M1", value: "450000" },
        { key: "B", text: t`₹ 4,74,000`, correct: false, misconceptionId: "C03-M2", value: "474000" },
        { key: "C", text: t`₹ 2,12,000`, correct: false, misconceptionId: "C03-M4", value: "212000" },
        { key: "D", text: t`₹ 4,62,000`, correct: true, value: "462000" },
      ],
      solution: {
        steps: [
          t`Yearly income $= 52000 \times 12$ = ₹ 6,24,000.`,
          t`80C: GPF $= 6000 \times 12 = 72000$; $72000 + 90000 = 162000$.`,
          t`That is more than ₹ 1,50,000, so only ₹ 1,50,000 is taken off; the ₹ 12,000 donation is taken off in full.`,
          t`Taxable income $= 624000 - (150000 + 12000)$ = ₹ 4,62,000.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q1(i)" },
      stem: t`Mr. Joshi (age 50) has a total yearly income of ₹ 11,00,000. Under section 80C he paid an insurance premium of ₹ 80,000, put ₹ 60,000 in PPF and bought NSCs worth ₹ 30,000. He also gave ₹ 15,000 to the PM's Relief Fund. What is his taxable income?`,
      verify: { kind: "value", inputs: { I: "1100000", S: "80000 + 60000 + 30000", d: "15000", A: "50" }, params: { ask: "taxable" } },
      options: [
        { key: "A", text: t`₹ 9,50,000`, correct: false, misconceptionId: "C03-M2", value: "950000" },
        { key: "B", text: t`₹ 6,85,000`, correct: false, misconceptionId: "C03-M4", value: "685000" },
        { key: "C", text: t`₹ 9,35,000`, correct: true, value: "935000" },
        { key: "D", text: t`₹ 9,15,000`, correct: false, misconceptionId: "C03-M1", value: "915000" },
      ],
      solution: {
        steps: [
          t`80C savings: $80000 + 60000 + 30000 = 170000$.`,
          t`That is more than ₹ 1,50,000, so only ₹ 1,50,000 is taken off.`,
          t`The ₹ 15,000 donation to the PM's Relief Fund is taken off in full (80G).`,
          t`Taxable income $= 1100000 - (150000 + 15000)$ = ₹ 9,35,000.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Mrs. Gaikwad (age 66) has a yearly income of ₹ 7,20,000. She put ₹ 1,00,000 in PPF and bought NSCs worth ₹ 75,000. She also gave ₹ 25,000 to the PM's Relief Fund. What is her taxable income?`,
      verify: { kind: "value", inputs: { I: "720000", S: "100000 + 75000", d: "25000", A: "66" }, params: { ask: "taxable" } },
      options: [
        { key: "A", text: t`₹ 5,45,000`, correct: true, value: "545000" },
        { key: "B", text: t`₹ 5,20,000`, correct: false, misconceptionId: "C03-M1", value: "520000" },
        { key: "C", text: t`₹ 5,70,000`, correct: false, misconceptionId: "C03-M2", value: "570000" },
        { key: "D", text: t`₹ 2,45,000`, correct: false, misconceptionId: "C03-M4", value: "245000" },
      ],
      solution: {
        steps: [
          t`80C savings: $100000 + 75000 = 175000$, so only ₹ 1,50,000 is taken off.`,
          t`The ₹ 25,000 donation to the PM's Relief Fund is taken off in full (80G).`,
          t`Taxable income $= 720000 - (150000 + 25000)$ = ₹ 5,45,000.`,
          t`Her age decides only the Nil limit, not the taxable income.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.2 Q1(v)" },
      stem: t`Mr. Desilva is 81 years old. What is the smallest taxable income, in whole rupees, on which he has to pay income tax?`,
      verify: { kind: "value", inputs: { A: "81" }, params: { ask: "smallest" } },
      options: [
        { key: "A", text: t`₹ 5,00,001`, correct: true, value: "500001" },
        { key: "B", text: t`₹ 2,50,001`, correct: false, misconceptionId: "C03-M3", value: "250001" },
        { key: "C", text: t`₹ 3,00,001`, correct: false, misconceptionId: "C03-M5", value: "300001" },
        { key: "D", text: t`₹ 5,00,000`, correct: false, misconceptionId: "C03-M6", value: "500000" },
      ],
      solution: {
        steps: [
          t`Mr. Desilva is 81, above 80, so Table III applies.`,
          t`Tax is Nil up to ₹ 5,00,000, including ₹ 5,00,000 itself.`,
          t`So the smallest taxed income is ₹ 5,00,001.`,
        ],
      },
    },
  ],
};
