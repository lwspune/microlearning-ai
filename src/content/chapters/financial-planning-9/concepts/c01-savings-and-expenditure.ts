import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Meera spends $80\%$ of her pocket money and saves ₹ 50. Her friend says: add $80\%$ of ₹ 50 to ₹ 50, so she gets ₹ 90. Is that right?`,
    reveal: t`No. The ₹ 50 she saves is the other $20\%$ of her money. So $20\%$ of her money is ₹ 50, and all of it is ₹ 250.`,
  },
  explanation: {
    intuition: [
      t`**Income** is the money a person gets. **Expenditure** is the money they spend.`,
      t`**Savings** is what is left: savings $=$ income $-$ expenditure.`,
      t`A donation or an amount set aside also goes out of the income.`,
      t`If $p\%$ of the income goes out, then $(100 - p)\%$ of it is left.`,
      t`So the amount left is a known part of the income. That part leads back to the income.`,
      t`Always ask: this percent is a percent **of what**?`,
    ],
    formal: [
      {
        title: "Savings as a percentage",
        points: [
          t`Savings $=$ income $-$ expenditure.`,
          t`Example: income ₹ 25,000 and expenditure ₹ 21,000 give savings of ₹ 4,000.`,
          t`In percents: percent saved $= 100\% -$ percent spent.`,
          t`Spending $85\%$ means saving $100\% - 85\% = 15\%$ of the income.`,
          t`When several parts go out, add their percents first, then subtract the total from $100\%$.`,
        ],
      },
      {
        title: "Finding the income",
        points: [
          t`Let the income be $x$ rupees. Write the amount left as a percent of $x$.`,
          t`Example: Raj spends $70\%$ of his income and saves ₹ 600.`,
          t`He saves $100\% - 70\% = 30\%$, so $\frac{30}{100} \times x = 600$.`,
          t`$x = \frac{600 \times 100}{30} = 2000$. His income is ₹ 2,000.`,
          t`Check: $70\%$ of $2000$ is $1400$, and $2000 - 1400 = 600$.`,
          t`Do not add $70\%$ of ₹ 600 to ₹ 600: the percents are of the income, not of ₹ 600.`,
        ],
      },
      {
        title: "A percent of the balance",
        points: [
          t`The **balance** is the money still left after the first outgoings.`,
          t`Example: Rita spends $40\%$ of $x$. Her balance is $60\%$ of $x$, that is $\frac{60x}{100}$.`,
          t`She then gives $25\%$ of the **balance**, not $25\%$ of $x$.`,
          t`$25\%$ of $\frac{60x}{100}$ is $\frac{15x}{100}$.`,
          t`She is left with $\frac{60x}{100} - \frac{15x}{100} = \frac{45x}{100}$.`,
          t`A fixed amount from the balance: balance $-$ amount $=$ what is left.`,
        ],
      },
      {
        title: "Monthly amounts and new percents",
        points: [
          t`Put every amount in the same period. For a year, a monthly amount is multiplied by $12$.`,
          t`₹ 1,500 per month is $1500 \times 12 = 18000$ rupees in a year.`,
          t`When income and expenses both change, take the earlier income as $100$ units.`,
          t`Work out the new income, the new expenses, and the new savings in units.`,
          t`Percent saved now $= \frac{\text{new savings}}{\text{new income}} \times 100$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Ravi spends $75\%$ of his income. He puts $35\%$ of the balance in a bank. He is then left with ₹ 6,500. What is his income?`,
      steps: [
        t`Let his income be $x$ rupees. He spends $75\%$, so the balance is $25\%$ of $x$, that is $\frac{x}{4}$.`,
        t`$35\%$ of the balance goes to the bank, so $65\%$ of the balance is left.`,
        t`$\frac{65}{100} \times \frac{x}{4} = 6500$, so $\frac{13x}{80} = 6500$.`,
        t`$x = \frac{6500 \times 80}{13} = 40000$.`,
        t`Check: the balance is $10000$; $35\%$ of it is $3500$; $10000 - 3500 = 6500$.`,
      ],
      answer: t`Ravi's income is ₹ 40,000.`,
    },
    visualSpec: t`A bar for the income is cut into the parts that go out; drag the amount left and watch the whole bar's value change to match.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes every percent as a percent of the whole (earlier) income, even one 'of the balance' or 'of the earlier expenses'",
      remediation: t`Find the base of each percent. $10\%$ of the balance is $10\%$ of what is left, not of the income.`,
      fallback: { kind: "ext", topic: "percentage (Std VIII)" },
    },
    {
      id: "C01-M2",
      mistake: "Works backwards by adding the percent to the amount left: income = 180 + 90% of 180",
      remediation: t`The percents are of the income, not of the amount left. Write $(100 - p)\%$ of $x$ $=$ amount left, then solve for $x$.`,
      fallback: { kind: "ext", topic: "percentage (Std VIII)" },
    },
    {
      id: "C01-M3",
      mistake: "Uses the percent spent as the percent of the income that is left",
      remediation: t`If $p\%$ is spent, then $(100 - p)\%$ of the income is left. Use that percent with the amount left.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Leaves out one outgoing: the donation, the last amount set aside, or the rise in expenses",
      remediation: "List every amount that goes out, and take all of them away from the income.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Gives the amount spent (the outgoings) instead of the amount the question asks for",
      remediation: t`Savings $=$ income $-$ expenditure. Read again whether the question asks for the income, the amount left or the percent saved.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Takes the monthly amounts once, not 12 times, against a yearly income",
      remediation: t`Put every amount in the same period. For a year, a monthly amount is multiplied by $12$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1 needs a percent of the balance or of the earlier expenses. C01-M3 gives the key when the percents spent add up to $50\%$; draw items where they do not. C01-M6 needs monthly amounts against a yearly income.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.1 Q1" },
      stem: t`Alka spends $90\%$ of the money she receives every month and saves ₹ 180. How much money does she get every month?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "income", pcts: "90", left: "180" } },
      options: [
        { key: "A", text: t`₹ 1,800`, correct: true, value: "1800" },
        { key: "B", text: t`₹ 342`, correct: false, misconceptionId: "C01-M2", value: "342" },
        { key: "C", text: t`₹ 200`, correct: false, misconceptionId: "C01-M3", value: "200" },
        { key: "D", text: t`₹ 1,620`, correct: false, misconceptionId: "C01-M5", value: "1620" },
      ],
      solution: {
        steps: [
          t`Alka saves $100\% - 90\% = 10\%$ of her money.`,
          t`Let her money be $x$ rupees. Then $\frac{10}{100} \times x = 180$.`,
          t`$x = 180 \times 10 = 1800$. She gets ₹ 1,800 every month.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.1 Q5" },
      stem: t`Sameera spent $90\%$ of her income and donated $3\%$ of her income to socially useful causes. She was left with ₹ 2,100 at the end of the month. What was her income?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "income", pcts: "90,3", left: "2100" } },
      options: [
        { key: "A", text: t`₹ 30,000`, correct: true, value: "30000" },
        { key: "B", text: t`₹ 4,053`, correct: false, misconceptionId: "C01-M2", value: "4053" },
        { key: "C", text: t`₹ 21,000`, correct: false, misconceptionId: "C01-M4", value: "21000" },
        { key: "D", text: t`₹ 27,900`, correct: false, misconceptionId: "C01-M5", value: "27900" },
      ],
      solution: {
        steps: [
          t`She spent and donated $90\% + 3\% = 93\%$ of her income.`,
          t`So she was left with $100\% - 93\% = 7\%$ of it: $\frac{7x}{100} = 2100$.`,
          t`$x = \frac{2100 \times 100}{7} = 30000$. Her income was ₹ 30,000.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q2" },
      stem: t`Mr. Shekhar spends $60\%$ of his income. From the balance he donates ₹ 300 to an orphanage. He is then left with ₹ 3,300. What is his income?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "income", pcts: "60", bal_amt: "300", left: "3300" } },
      options: [
        { key: "A", text: t`₹ 6,000`, correct: false, misconceptionId: "C01-M3", value: "6000" },
        { key: "B", text: t`₹ 8,250`, correct: false, misconceptionId: "C01-M4", value: "8250" },
        { key: "C", text: t`₹ 9,000`, correct: true, value: "9000" },
        { key: "D", text: t`₹ 5,760`, correct: false, misconceptionId: "C01-M2", value: "5760" },
      ],
      solution: {
        steps: [
          t`Let his income be $x$. He spends $60\%$, so the balance is $\frac{40x}{100}$.`,
          t`He donates ₹ 300 from the balance: $\frac{40x}{100} - 300 = 3300$.`,
          t`$\frac{40x}{100} = 3600$, so $x = 9000$. His income is ₹ 9,000.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q5" },
      stem: t`Mr. Manohar gave $20\%$ of his income to his elder son and $30\%$ to his younger son. He gave $10\%$ of the balance as a donation to a school. He still had ₹ 1,80,000 for himself. What was his income?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "income", pcts: "20,30", bal_pct: "10", left: "180000" } },
      options: [
        { key: "A", text: t`₹ 4,00,000`, correct: true, value: "400000" },
        { key: "B", text: t`₹ 4,50,000`, correct: false, misconceptionId: "C01-M1", value: "450000" },
        { key: "C", text: t`₹ 2,97,000`, correct: false, misconceptionId: "C01-M2", value: "297000" },
        { key: "D", text: t`₹ 3,60,000`, correct: false, misconceptionId: "C01-M4", value: "360000" },
      ],
      solution: {
        steps: [
          t`He gave $20\% + 30\% = 50\%$ to his sons, so the balance is $\frac{x}{2}$.`,
          t`The donation is $10\%$ of the balance: $\frac{10}{100} \times \frac{x}{2} = \frac{x}{20}$.`,
          t`He is left with $\frac{x}{2} - \frac{x}{20} = \frac{9x}{20}$, so $\frac{9x}{20} = 180000$.`,
          t`$x = \frac{180000 \times 20}{9} = 400000$. His income was ₹ 4,00,000.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Investments SolvedEx.1" },
      stem: t`Shamrao's yearly income after taxes is ₹ 6,40,000. He pays ₹ 2,000 per month for insurance and $20\%$ of his yearly income into his provident fund. He puts aside ₹ 500 per month for emergencies. How much money does he have for the year's spending?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "left", income: "640000", pcts: "20", monthly: "2000,500" } },
      options: [
        { key: "A", text: t`₹ 4,82,000`, correct: true, value: "482000" },
        { key: "B", text: t`₹ 4,88,000`, correct: false, misconceptionId: "C01-M4", value: "488000" },
        { key: "C", text: t`₹ 1,58,000`, correct: false, misconceptionId: "C01-M5", value: "158000" },
        { key: "D", text: t`₹ 5,09,500`, correct: false, misconceptionId: "C01-M6", value: "509500" },
      ],
      solution: {
        steps: [
          t`Insurance for the year: $2000 \times 12 = 24000$. Emergencies: $500 \times 12 = 6000$.`,
          t`Provident fund: $\frac{20}{100} \times 640000 = 128000$.`,
          t`Total set aside: $24000 + 128000 + 6000$ $= 158000$.`,
          t`Left for spending: $640000 - 158000 = 482000$, that is ₹ 4,82,000.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q6" },
      stem: t`Kailash used to spend $85\%$ of his income. His income then increased by $36\%$, and his expenses increased by $40\%$ of his earlier expenses. What percentage of his new income does he save now?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "rate", e: "85", i: "36", j: "40" } },
      options: [
        { key: "A", text: t`$37.5\%$`, correct: false, misconceptionId: "C01-M4", value: "75/2" },
        { key: "B", text: t`$87.5\%$`, correct: false, misconceptionId: "C01-M5", value: "175/2" },
        { key: "C", text: t`$12.5\%$`, correct: true, value: "25/2" },
        { key: "D", text: t`$11\%$`, correct: false, misconceptionId: "C01-M1", value: "11" },
      ],
      solution: {
        steps: [
          t`Take his earlier income as $100$ units. He spent $85$ units.`,
          t`New income $= 136$ units. New expenses $= 85 + \frac{40}{100} \times 85$ $= 119$ units.`,
          t`New savings $= 136 - 119 = 17$ units.`,
          t`Percent saved now $= \frac{17}{136} \times 100 = 12.5\%$.`,
        ],
      },
    },
  ],
};
