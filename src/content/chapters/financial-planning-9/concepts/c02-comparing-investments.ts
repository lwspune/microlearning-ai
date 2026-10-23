import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Asha invested ₹ 1,00,000 and gained ₹ 10,000. Bala invested ₹ 40,000 and gained ₹ 6,000. **Asha gained more rupees. Did she invest better?**`,
    reveal: t`No. Asha gained $\frac{10000}{100000} \times 100 = 10\%$. Bala gained $\frac{6000}{40000} \times 100 = 15\%$. Each ₹ 100 of Bala's money earned more.`,
  },
  explanation: {
    intuition: [
      t`To **invest** is to put money somewhere so that it grows.`,
      t`The **gain** (profit) is the amount you get back minus the sum you put in.`,
      t`Two people may put in very different sums.`,
      t`So we ask: how much did each ₹ 100 put in earn?`,
      t`That is the **percent gain**, found on the sum invested.`,
      t`The investment with the bigger percent gain is the more profitable one.`,
    ],
    formal: [
      {
        title: "Percent gain",
        points: [
          t`Gain $=$ amount received $-$ sum invested.`,
          t`Percent gain $= \frac{\text{gain}}{\text{sum invested}} \times 100$.`,
          t`Always divide by the sum invested, never by the amount received.`,
          t`Example: ₹ 60,000 invested grows to ₹ 75,000 in a mutual fund.`,
          t`Gain $= 75000 - 60000$ = ₹ 15,000.`,
          t`Percent gain $= \frac{15000}{60000} \times 100 = 25\%$.`,
        ],
      },
      {
        title: "Compound interest",
        points: [
          t`In **compound interest**, each year's interest is added to the principal.`,
          t`The next year's interest is then found on this bigger sum.`,
          t`Amount after $n$ years: $A = P\left(1 + \frac{R}{100}\right)^n$.`,
          t`Compound interest $I = A - P$.`,
          t`Example: ₹ 20,000 at $5\%$ for 2 years gives $A = 20000 \times 1.1025$ = ₹ 22,050.`,
          t`So $I$ = ₹ 2,050, more than the simple interest of ₹ 2,000.`,
        ],
      },
      {
        title: "Bank or mutual fund?",
        points: [
          t`A **mutual fund** collects money from many people and invests it; its value can rise or fall.`,
          t`For the bank deposit, find the compound interest, then its percent gain.`,
          t`For the mutual fund, gain $=$ amount got back $-$ sum invested, then its percent gain.`,
          t`Compare the two percent gains, not the rupees gained.`,
          t`The bigger percent gain is the more profitable investment.`,
        ],
      },
      {
        title: "Profit after a loss",
        points: [
          t`Sometimes a capital first gains or loses, and then gains or loses again.`,
          t`The second percentage is taken on what is left, not on the original capital.`,
          t`So you cannot just add or subtract the two percentages.`,
          t`Example: ₹ 10,000 gains $10\%$ to ₹ 11,000, then loses $10\%$ of that, ₹ 1,100.`,
          t`It ends at ₹ 9,900: a loss of ₹ 100, which is $1\%$ of ₹ 10,000.`,
          t`Find each new amount step by step, then compare with the original capital.`,
        ],
      },
    ],
    worked: {
      prompt: t`Mrs. Desai kept ₹ 2,00,000 in a bank at $9\%$ compound interest for 2 years. Mr. Gokhale invested ₹ 1,00,000 in a mutual fund and got ₹ 1,20,000 after 2 years. Whose investment was more profitable?`,
      steps: [
        t`Bank: $A = 200000 \times (1.09)^2$ $= 200000 \times 1.1881$ = ₹ 2,37,620.`,
        t`Compound interest $= 237620 - 200000$ = ₹ 37,620.`,
        t`Percent gain $= \frac{37620}{200000} \times 100 = 18.81\%$.`,
        t`Mutual fund: gain $= 120000 - 100000$ = ₹ 20,000, so percent gain $= \frac{20000}{100000} \times 100 = 20\%$.`,
        t`$20\% > 18.81\%$. Mrs. Desai gained more rupees, but Mr. Gokhale's money grew faster.`,
      ],
      answer: t`Mr. Gokhale's mutual fund investment was more profitable ($20\%$ against $18.81\%$).`,
    },
    visualSpec: t`Slide the sums invested and the amounts got back for two investments, and watch bars for the rupees gained and for the percent gain, which can rank them differently.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Compares the two investments by the rupees gained, not by the percent gain.",
      remediation: t`The sums invested differ, so compare percent gains: $\frac{\text{gain}}{\text{sum invested}} \times 100$ for each.`,
      fallback: { kind: "ext", topic: "percentages (Std VIII)" },
    },
    {
      id: "C02-M2",
      mistake: t`Uses simple interest $\frac{PRn}{100}$ for a deposit at compound interest.`,
      remediation: t`In compound interest the interest is added each year. Use $A = P\left(1 + \frac{R}{100}\right)^n$, then $I = A - P$.`,
      fallback: { kind: "ext", topic: "compound interest (Std VIII)" },
    },
    {
      id: "C02-M3",
      mistake: "Mixes up the amount and the gain (interest), using one where the other is asked for.",
      remediation: t`The amount is everything you get back. The gain or interest is only the extra: amount $-$ sum invested.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Finds the percent gain or loss on the amount received instead of on the sum invested.",
      remediation: t`A percent gain or loss is always found on the sum invested (the original capital): $\frac{\text{gain}}{\text{sum invested}} \times 100$.`,
      fallback: { kind: "ext", topic: "percentages (Std VIII)" },
    },
    {
      id: "C02-M5",
      mistake: t`Adds successive percentages that were taken on different amounts, so a $20\%$ loss then a $5\%$ profit is taken as a $15\%$ loss.`,
      remediation: "The second percentage is taken on what is left after the first. Find each new amount, then compare it with the original capital.",
      fallback: { kind: "ext", topic: "percentages (Std VIII)" },
    },
    {
      id: "C02-M6",
      mistake: "Finds the interest for the first year only.",
      remediation: t`The deposit grows for all $n$ years. Use the power $n$ in $A = P\left(1 + \frac{R}{100}\right)^n$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Percentages are rounded to two decimal places, rupee amounts to the paisa.",
    "C02-M1 needs two investments to compare (Q1, Q6); C02-M5 needs two successive percentages (Q4); C02-M6 needs a bank deposit (Q3, Q5).",
    "In Q1 and Q6 the option value is the figure that decides the comparison: the percent gain, or the rupees gained for C02-M1.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Investments SolvedEx.2" },
      stem: t`Mr. Shah invested ₹ 3,20,000 in a bank at $10\%$ compound interest for 2 years. He also invested ₹ 2,40,000 in a mutual fund and got ₹ 3,05,000 after 2 years. Which investment was more profitable?`,
      verify: { kind: "value", inputs: { P: "320000", R: "10", n: "2", F: "240000", Af: "305000" }, params: { ask: "better" } },
      options: [
        { key: "A", text: t`The mutual fund, with a $27.08\%$ gain`, correct: true, value: "677/25" },
        { key: "B", text: t`The bank deposit, with a gain of ₹ 67,200`, correct: false, misconceptionId: "C02-M1", value: "67200" },
        { key: "C", text: t`The mutual fund, with a $21.31\%$ gain`, correct: false, misconceptionId: "C02-M4", value: "2131/100" },
        { key: "D", text: t`The mutual fund, with a $127.08\%$ gain`, correct: false, misconceptionId: "C02-M3", value: "3177/25" },
      ],
      solution: {
        steps: [
          t`Bank: $I = 320000\left[(1.1)^2 - 1\right]$ $= 320000 \times 0.21$ = ₹ 67,200, a $21\%$ gain.`,
          t`Mutual fund: gain $= 305000 - 240000$ = ₹ 65,000.`,
          t`Percent gain $= \frac{65000}{240000} \times 100 \approx 27.08\%$.`,
          t`$27.08\% > 21\%$, so the mutual fund was more profitable, though it gained fewer rupees.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.1 Q4" },
      stem: t`Mr. Sayyad kept ₹ 40,000 in a bank at $8\%$ compound interest for 2 years. What percent gain did his investment give?`,
      verify: { kind: "value", inputs: { P: "40000", R: "8", n: "2" }, params: { ask: "bank_pct" } },
      options: [
        { key: "A", text: t`$16\%$`, correct: false, misconceptionId: "C02-M2", value: "16" },
        { key: "B", text: t`$116.64\%$`, correct: false, misconceptionId: "C02-M3", value: "2916/25" },
        { key: "C", text: t`$14.27\%$`, correct: false, misconceptionId: "C02-M4", value: "1427/100" },
        { key: "D", text: t`$16.64\%$`, correct: true, value: "416/25" },
      ],
      solution: {
        steps: [
          t`$A = 40000 \times (1.08)^2$ $= 40000 \times 1.1664$ = ₹ 46,656.`,
          t`Compound interest $= 46656 - 40000$ = ₹ 6,656.`,
          t`Percent gain $= \frac{6656}{40000} \times 100 = 16.64\%$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q3" },
      stem: t`Mr. Ramniklal invested ₹ 1,40,000 in a bank at $8\%$ compound interest for 2 years. How much compound interest did he get?`,
      verify: { kind: "value", inputs: { P: "140000", R: "8", n: "2" }, params: { ask: "ci" } },
      options: [
        { key: "A", text: t`₹ 11,200`, correct: false, misconceptionId: "C02-M6", value: "11200" },
        { key: "B", text: t`₹ 23,296`, correct: true, value: "23296" },
        { key: "C", text: t`₹ 22,400`, correct: false, misconceptionId: "C02-M2", value: "22400" },
        { key: "D", text: t`₹ 1,63,296`, correct: false, misconceptionId: "C02-M3", value: "163296" },
      ],
      solution: {
        steps: [
          t`$A = 140000 \times (1.08)^2$ $= 140000 \times 1.1664$ = ₹ 1,63,296.`,
          t`Compound interest $= 163296 - 140000$ = ₹ 23,296.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Ex 6.1 Q2" },
      stem: t`Sumit started a business with a capital of ₹ 50,000. In the first year he lost $20\%$ of it. He put the remaining capital into a new business and made a $5\%$ profit on it. What is his loss as a percentage of his original capital?`,
      verify: { kind: "value", inputs: { P: "50000", r1: "-20", r2: "5" }, params: { ask: "loss_pct" } },
      options: [
        { key: "A", text: t`$84\%$`, correct: false, misconceptionId: "C02-M3", value: "84" },
        { key: "B", text: t`$16\%$`, correct: true, value: "16" },
        { key: "C", text: t`$15\%$`, correct: false, misconceptionId: "C02-M5", value: "15" },
        { key: "D", text: t`$19.05\%$`, correct: false, misconceptionId: "C02-M4", value: "381/20" },
      ],
      solution: {
        steps: [
          t`First year: $20\%$ of 50,000 = ₹ 10,000 lost, so ₹ 40,000 is left.`,
          t`Second year: $5\%$ of 40,000 = ₹ 2,000 profit, so the capital becomes ₹ 42,000.`,
          t`Loss on the original capital $= 50000 - 42000$ = ₹ 8,000.`,
          t`Loss percent $= \frac{8000}{50000} \times 100 = 16\%$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/financial-planning-9/Prob Q4" },
      stem: t`A savings account had ₹ 24,000. After adding ₹ 56,000 to it, the whole sum was put in a bank at $7.5\%$ compound interest. What will the total amount be after 3 years?`,
      verify: { kind: "value", inputs: { P: "80000", R: "15/2", n: "3" }, params: { ask: "amount" } },
      options: [
        { key: "A", text: t`₹ 86,000`, correct: false, misconceptionId: "C02-M6", value: "86000" },
        { key: "B", text: t`₹ 99,383.75`, correct: true, value: "397535/4" },
        { key: "C", text: t`₹ 98,000`, correct: false, misconceptionId: "C02-M2", value: "98000" },
        { key: "D", text: t`₹ 19,383.75`, correct: false, misconceptionId: "C02-M3", value: "77535/4" },
      ],
      solution: {
        steps: [
          t`Sum invested $= 24000 + 56000$ = ₹ 80,000.`,
          t`$(1.075)^3 = 1.242296875$.`,
          t`$A = 80000 \times 1.242296875$ = ₹ 99,383.75.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`Mrs. Joshi kept ₹ 1,00,000 in a bank at $10\%$ compound interest for 2 years. Mr. Kale invested ₹ 2,00,000 in a mutual fund and got ₹ 2,41,000 after 2 years. Which investment was more profitable?`,
      verify: { kind: "value", inputs: { P: "100000", R: "10", n: "2", F: "200000", Af: "241000" }, params: { ask: "better" } },
      options: [
        { key: "A", text: t`Mrs. Joshi's bank deposit, with a $21\%$ gain`, correct: true, value: "21" },
        { key: "B", text: t`Mr. Kale's mutual fund, with a gain of ₹ 41,000`, correct: false, misconceptionId: "C02-M1", value: "41000" },
        { key: "C", text: t`Mr. Kale's mutual fund, with a $20.5\%$ gain`, correct: false, misconceptionId: "C02-M2", value: "41/2" },
        { key: "D", text: t`Mrs. Joshi's bank deposit, with a $17.36\%$ gain`, correct: false, misconceptionId: "C02-M4", value: "434/25" },
      ],
      solution: {
        steps: [
          t`Bank: $I = 100000\left[(1.1)^2 - 1\right]$ = ₹ 21,000, a $21\%$ gain.`,
          t`Mutual fund: gain $= 241000 - 200000$ = ₹ 41,000.`,
          t`Percent gain $= \frac{41000}{200000} \times 100 = 20.5\%$.`,
          t`$21\% > 20.5\%$, so Mrs. Joshi's bank deposit was more profitable.`,
        ],
      },
    },
  ],
};
