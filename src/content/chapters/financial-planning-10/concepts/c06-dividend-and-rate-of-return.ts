import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`A company pays a $10\%$ dividend on its shares of FV ₹ 100. Riya bought one share for ₹ 100; Om bought one for ₹ 200. **Did they earn the same return?**`,
    reveal: t`No. Both get ₹ 10, because the dividend is $10\%$ of the FV. But Riya gets ₹ 10 on ₹ 100 paid, a $10\%$ return. Om gets ₹ 10 on ₹ 200 paid, only a $5\%$ return.`,
  },
  explanation: {
    intuition: [
      t`When a company makes a profit, it pays a part of it to its shareholders. This is the **dividend**.`,
      t`The company declares the dividend as a percentage of the **face value** (FV), the value printed on the share.`,
      t`An investor pays the **market value** (MV) for a share, which may be more or less than the FV.`,
      t`So every share of the same FV gets the same dividend, whatever price was paid for it.`,
      t`The **rate of return** is the dividend as a percentage of the money paid.`,
      t`A share bought at a higher MV gives a smaller rate of return.`,
    ],
    formal: [
      {
        title: "Dividend on the face value",
        points: [
          t`The dividend is always a percentage of the FV, never of the MV.`,
          t`Dividend on one share $= \frac{\text{rate}}{100} \times$ FV.`,
          t`A $12\%$ dividend on a share of FV ₹ 10 is $\frac{12}{100} \times 10$ = ₹ 1.20.`,
          t`Total dividend $=$ number of shares $\times$ dividend on one share.`,
          t`For 300 such shares: $300 \times 1.20$ = ₹ 360.`,
        ],
      },
      {
        title: "Rate of return",
        points: [
          t`The **rate of return** compares the dividend with the MV paid for the share.`,
          t`Rate of return $=$ $\frac{\text{dividend}}{\text{MV}}$ $\times 100$, for one share.`,
          t`For many shares, use total dividend $\div$ sum invested $\times 100$: the answer is the same.`,
          t`FV ₹ 10, MV ₹ 30, $12\%$ dividend: $\frac{1.20}{30} \times 100 = 4\%$.`,
          t`The rate of return equals the dividend rate only when MV $=$ FV (a share at par).`,
        ],
      },
      {
        title: "Which investment is better",
        points: [
          t`To compare two investments, compare their rates of return, not their dividend rates.`,
          t`Company P: FV ₹ 100, $10\%$ dividend, MV ₹ 125.`,
          t`Its rate of return is $\frac{10}{125} \times 100 = 8\%$.`,
          t`Company Q: FV ₹ 100, $9\%$ dividend, MV ₹ 90.`,
          t`Its rate of return is $\frac{9}{90} \times 100 = 10\%$.`,
          t`So Q is more profitable, though P declares the higher dividend.`,
        ],
      },
    ],
    worked: {
      prompt: t`Seema bought 40 shares of FV ₹ 20 at an MV of ₹ 50 each. The company declared a $15\%$ dividend. Find the total dividend and the rate of return.`,
      steps: [
        t`Dividend on one share $= \frac{15}{100} \times 20$ = ₹ 3.`,
        t`Total dividend $= 40 \times 3$ = ₹ 120.`,
        t`Sum invested $= 40 \times 50$ = ₹ 2,000.`,
        t`Rate of return $= \frac{120}{2000} \times 100 = 6\%$.`,
        t`Check with one share: $\frac{3}{50} \times 100 = 6\%$.`,
      ],
      answer: t`Total dividend = ₹ 120; rate of return $= 6\%$.`,
    },
    visualSpec: t`Drag the MV of a share with a fixed FV and dividend rate, and watch the dividend stay the same while the rate of return falls as the MV rises.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Takes the dividend as a percentage of the market value, so the rate of return comes out equal to the dividend rate.",
      remediation: t`The dividend is always a percentage of the face value, whatever the MV. Find $\frac{\text{rate}}{100} \times$ FV first, then divide by the MV for the rate of return.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: t`Takes a $d\%$ dividend as ₹ $d$ on every share, whatever the face value.`,
      remediation: t`A $d\%$ dividend means $d$ rupees for every ₹ 100 of face value. For one share, find $\frac{d}{100} \times$ FV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Swaps FV and MV: works out the dividend on the MV and divides it by the FV.",
      remediation: t`The dividend comes from the FV; the money paid is the MV. Rate of return $=$ dividend on one share $\div$ MV $\times 100$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Divides the dividend on one share by the whole sum invested.",
      remediation: t`Compare like with like: dividend on one share $\div$ MV of one share, or total dividend $\div$ sum invested.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M5",
      mistake: "Forgets to divide by 100 when finding the dividend rate of the face value.",
      remediation: t`A percentage of an amount is $\frac{\text{rate}}{100} \times$ amount. So a $50\%$ dividend on FV ₹ 10 is ₹ 5.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Gives the dividend on one share when the total dividend is asked.",
      remediation: t`Total dividend $=$ number of shares $\times$ dividend on one share.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M2 gives the key whenever the FV is ₹ 100, so it appears only on items with another FV.",
    "C06-M3 and C06-M4 apply only to rate-of-return items (C06-M4 needs several shares); C06-M5 only to dividend amounts; C06-M6 only to total-dividend items.",
    "Comparison items have the value (company, rate of return of that company).",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.1(2)" },
      stem: t`A share of face value ₹ 10 is bought at a market value of ₹ 40. The company declares a $50\%$ dividend. What is the dividend received on this share?`,
      verify: { kind: "value", inputs: { F: "10", M: "40", d: "50" }, params: { ask: "dps" } },
      options: [
        { key: "A", text: t`₹ 20`, correct: false, misconceptionId: "C06-M1", value: "20" },
        { key: "B", text: t`₹ 50`, correct: false, misconceptionId: "C06-M2", value: "50" },
        { key: "C", text: t`₹ 500`, correct: false, misconceptionId: "C06-M5", value: "500" },
        { key: "D", text: t`₹ 5`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`The dividend is a percentage of the FV, not of the MV.`,
          t`Dividend on one share $= \frac{50}{100} \times 10$ = ₹ 5.`,
          t`The MV of ₹ 40 does not change the dividend.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q3(B)(iii)" },
      stem: t`50 shares of face value ₹ 10 were purchased at a market value of ₹ 25 each. The company declared a $30\%$ dividend on the shares. What is the total dividend received?`,
      verify: { kind: "value", inputs: { F: "10", M: "25", d: "30", n: "50" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 150`, correct: true, value: "150" },
        { key: "B", text: t`₹ 375`, correct: false, misconceptionId: "C06-M1", value: "375" },
        { key: "C", text: t`₹ 1,500`, correct: false, misconceptionId: "C06-M2", value: "1500" },
        { key: "D", text: t`₹ 3`, correct: false, misconceptionId: "C06-M6", value: "3" },
      ],
      solution: {
        steps: [
          t`Dividend on one share $= \frac{30}{100} \times 10$ = ₹ 3.`,
          t`Total dividend $= 50 \times 3$ = ₹ 150.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.3 Q.2" },
      stem: t`Mr. Amol purchased 50 shares of face value ₹ 10 when the market value of a share was ₹ 8. The company gave a $20\%$ dividend. What is the rate of return on his investment?`,
      verify: { kind: "value", inputs: { F: "10", M: "8", d: "20", n: "50" }, params: { ask: "ror" } },
      options: [
        { key: "A", text: t`$25\%$`, correct: true, value: "25" },
        { key: "B", text: t`$250\%$`, correct: false, misconceptionId: "C06-M2", value: "250" },
        { key: "C", text: t`$16\%$`, correct: false, misconceptionId: "C06-M3", value: "16" },
        { key: "D", text: t`$0.5\%$`, correct: false, misconceptionId: "C06-M4", value: "1/2" },
      ],
      solution: {
        steps: [
          t`Dividend on one share $= \frac{20}{100} \times 10$ = ₹ 2.`,
          t`Each share cost an MV of ₹ 8.`,
          t`Rate of return $= \frac{2}{8} \times 100 = 25\%$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q3(A)(i)" },
      stem: t`Complete the activity. Shri Maniklal purchased 200 shares of FV ₹ 100 for MV ₹ 160 each. The company paid a $12\%$ dividend. Sum invested $= 160 \times 200$ = ₹ 32,000. What is the rate of return on his investment?`,
      verify: { kind: "value", inputs: { F: "100", M: "160", d: "12", n: "200" }, params: { ask: "ror" } },
      options: [
        { key: "A", text: t`$0.0375\%$`, correct: false, misconceptionId: "C06-M4", value: "3/80" },
        { key: "B", text: t`$7.5\%$`, correct: true, value: "15/2" },
        { key: "C", text: t`$12\%$`, correct: false, misconceptionId: "C06-M1", value: "12" },
        { key: "D", text: t`$19.2\%$`, correct: false, misconceptionId: "C06-M3", value: "96/5" },
      ],
      solution: {
        steps: [
          t`Dividend on one share $= \frac{12}{100} \times 100$ = ₹ 12.`,
          t`Total dividend $= 200 \times 12$ = ₹ 2,400.`,
          t`Rate of return $= \frac{2400}{32000} \times 100$ $= 7.5\%$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.3 Q.6" },
      stem: t`The shares of two companies have the same face value, ₹ 10. Company A: dividend $16\%$, MV ₹ 8. Company B: dividend $20\%$, MV ₹ 12. Which investment is more profitable, and what is its rate of return?`,
      verify: { kind: "value", inputs: { F: "10", dA: "16", MA: "8", dB: "20", MB: "12" }, params: { ask: "compare" } },
      options: [
        { key: "A", text: t`Company A, $20\%$`, correct: true, value: "(A, 20)" },
        { key: "B", text: t`Company B, $20\%$`, correct: false, misconceptionId: "C06-M1", value: "(B, 20)" },
        { key: "C", text: t`Company A, $200\%$`, correct: false, misconceptionId: "C06-M2", value: "(A, 200)" },
        { key: "D", text: t`Company B, $24\%$`, correct: false, misconceptionId: "C06-M3", value: "(B, 24)" },
      ],
      solution: {
        steps: [
          t`A: dividend $= \frac{16}{100} \times 10$ = ₹ 1.60, so the return is $\frac{1.60}{8} \times 100 = 20\%$.`,
          t`B: dividend $= \frac{20}{100} \times 10$ = ₹ 2, so the return is $\frac{2}{12} \times 100$ $= 16.67\%$ (approx.).`,
          t`$20\% > 16.67\%$, so Company A is more profitable, with a $20\%$ rate of return.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q3(A)(ii)" },
      stem: t`Shri Shantilal purchased 150 shares of FV ₹ 10 for MV ₹ 15 each. The company paid a dividend at $12\%$. What is the rate of return on his investment?`,
      verify: { kind: "value", inputs: { F: "10", M: "15", d: "12", n: "150" }, params: { ask: "ror" } },
      options: [
        { key: "A", text: t`$80\%$`, correct: false, misconceptionId: "C06-M2", value: "80" },
        { key: "B", text: t`$18\%$`, correct: false, misconceptionId: "C06-M3", value: "18" },
        { key: "C", text: t`$8\%$`, correct: true, value: "8" },
        { key: "D", text: t`$12\%$`, correct: false, misconceptionId: "C06-M1", value: "12" },
      ],
      solution: {
        steps: [
          t`Dividend on one share $= \frac{12}{100} \times 10$ = ₹ 1.20.`,
          t`Each share cost an MV of ₹ 15.`,
          t`Rate of return $= \frac{1.20}{15} \times 100 = 8\%$.`,
        ],
      },
    },
  ],
};
