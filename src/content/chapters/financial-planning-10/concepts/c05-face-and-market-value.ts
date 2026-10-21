import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`A share has ₹ 10 printed on it, but it sells for ₹ 32 in the market. **What do 40 such shares cost?**`,
    reveal: t`₹ 1,280. You pay the market price, ₹ 32, for each share: $40 \times 32 = 1280$. The printed ₹ 10 is only its face value.`,
  },
  explanation: {
    intuition: [
      t`A company raises money by selling small equal parts of itself, called **shares**.`,
      t`The **face value** (FV) is the price printed on the share certificate.`,
      t`The **market value** (MV) is the price at which the share is bought or sold today.`,
      t`MV changes with demand; FV stays fixed.`,
      t`A buyer always pays the MV, not the FV.`,
      t`So the **sum invested** is the number of shares times the MV.`,
    ],
    formal: [
      {
        title: "Premium, discount and par",
        points: [
          t`If MV $>$ FV, the share is **at a premium**; the premium is MV $-$ FV.`,
          t`So MV $=$ FV $+$ premium.`,
          t`If MV $<$ FV, the share is **at a discount**; the discount is FV $-$ MV.`,
          t`So MV $=$ FV $-$ discount.`,
          t`If MV $=$ FV, the share is **at par**.`,
          t`Example: FV ₹ 10 at a premium of ₹ 22 gives MV ₹ 32.`,
        ],
      },
      {
        title: "Sum invested and number of shares",
        points: [
          t`Sum invested $=$ number of shares $\times$ MV.`,
          t`Number of shares $=$ sum invested $\div$ MV.`,
          t`Find the MV first when only FV and the premium or discount are given.`,
          t`Example: ₹ 6,400 at MV ₹ 32 buys $6400 \div 32 = 200$ shares.`,
        ],
      },
      {
        title: "Shares of several companies",
        points: [
          t`Find the MV and the sum invested for each company separately.`,
          t`Then add the sums to get the total investment.`,
          t`Company P: 40 shares at MV ₹ 60 cost $40 \times 60$ = ₹ 2,400.`,
          t`Company Q: FV ₹ 10 at a discount of ₹ 2 gives MV ₹ 8.`,
          t`100 such shares cost $100 \times 8$ = ₹ 800.`,
          t`Total investment = ₹ 2,400 $+$ ₹ 800 = ₹ 3,200.`,
        ],
      },
    ],
    worked: {
      prompt: t`Smt. Deshpande bought shares of FV ₹ 5 at a premium of ₹ 20. How many shares will she get for ₹ 20,000?`,
      steps: [
        t`MV $=$ FV $+$ premium $= 5 + 20 = 25$, so MV is ₹ 25.`,
        t`Each share costs its MV, ₹ 25, not its FV, ₹ 5.`,
        t`Number of shares $= 20000 \div 25$.`,
        t`$= 800$, so she gets 800 shares.`,
      ],
      answer: t`800 shares.`,
    },
    visualSpec: t`Drag the market value above and below a fixed face value line, and watch the label switch between premium, par and discount while the cost of a block of shares updates.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Uses the face value as the price of a share, so the sum invested is shares $\times$ FV.`,
      remediation: t`A share is bought and sold at its market value. Find MV $=$ FV $+$ premium (or $-$ discount) and use MV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Takes the premium or discount itself as the market value, or reads the MV as the premium or discount.",
      remediation: t`The premium or discount is only the gap between MV and FV. MV $=$ FV $+$ premium, or FV $-$ discount.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Reverses premium and discount: subtracts a premium from FV, or adds a discount to it.",
      remediation: "At a premium the share costs more than its FV, so add; at a discount it costs less, so subtract.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Finds the premium or discount by adding FV and MV.",
      remediation: t`The premium or discount is the difference between MV and FV. MV below FV means a discount of FV $-$ MV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Adds the premium (or takes off the discount) once on the whole lot: shares $\times$ FV $+$ premium.`,
      remediation: "The premium or discount is per share. Find the MV of one share first, then multiply by the number of shares.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C05-M4 applies only to finding the premium or discount; C05-M5 only to a sum invested.",
    "C05-M3 is not offered where FV minus the premium is not positive (Q6).",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q2(A)(iii)" },
      stem: t`A share has face value (FV) ₹ 200, and the share is at a discount of ₹ 50. What is its market value (MV)?`,
      verify: { kind: "value", inputs: { F: "200", d: "-50" }, params: { ask: "mv" } },
      options: [
        { key: "A", text: t`₹ 250`, correct: false, misconceptionId: "C05-M3", value: "250" },
        { key: "B", text: t`₹ 150`, correct: true, value: "150" },
        { key: "C", text: t`₹ 200`, correct: false, misconceptionId: "C05-M1", value: "200" },
        { key: "D", text: t`₹ 50`, correct: false, misconceptionId: "C05-M2", value: "50" },
      ],
      solution: {
        steps: [
          t`The share is at a discount, so MV $=$ FV $-$ discount.`,
          t`MV $= 200 - 50 = 150$, so MV is ₹ 150.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.1(1)" },
      stem: t`The face value of a share is ₹ 100 and its market value is ₹ 75. Which statement is correct?`,
      verify: { kind: "value", inputs: { F: "100", V: "75" }, params: { ask: "status" } },
      options: [
        { key: "A", text: t`The share is at a discount of ₹ 75`, correct: false, misconceptionId: "C05-M2", value: "-75" },
        { key: "B", text: t`The share is at a premium of ₹ 25`, correct: false, misconceptionId: "C05-M3", value: "25" },
        { key: "C", text: t`The share is at a premium of ₹ 175`, correct: false, misconceptionId: "C05-M4", value: "175" },
        { key: "D", text: t`The share is at a discount of ₹ 25`, correct: true, value: "-25" },
      ],
      solution: {
        steps: [
          t`MV $<$ FV, so the share is at a discount.`,
          t`Discount $=$ FV $-$ MV $= 100 - 75 = 25$.`,
          t`So the share is at a discount of ₹ 25.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q2(A)(iii)" },
      stem: t`Pushpmala invested ₹ 24,000 and bought shares of FV ₹ 20 at a premium of ₹ 4. How many shares did she buy?`,
      verify: { kind: "value", inputs: { S: "24000", F: "20", d: "4" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`1,000 shares`, correct: true, value: "1000" },
        { key: "B", text: t`1,200 shares`, correct: false, misconceptionId: "C05-M1", value: "1200" },
        { key: "C", text: t`6,000 shares`, correct: false, misconceptionId: "C05-M2", value: "6000" },
        { key: "D", text: t`1,500 shares`, correct: false, misconceptionId: "C05-M3", value: "1500" },
      ],
      solution: {
        steps: [
          t`MV $=$ FV $+$ premium $= 20 + 4 = 24$, so MV is ₹ 24.`,
          t`Number of shares $= 24000 \div 24$.`,
          t`$= 1000$, so she bought 1,000 shares.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.4" },
      stem: t`300 shares of FV ₹ 100 each were sold at a discount of ₹ 30. Find the amount received.`,
      verify: { kind: "value", inputs: { n1: "300", F1: "100", d1: "-30" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`₹ 39,000`, correct: false, misconceptionId: "C05-M3", value: "39000" },
        { key: "B", text: t`₹ 29,970`, correct: false, misconceptionId: "C05-M5", value: "29970" },
        { key: "C", text: t`₹ 21,000`, correct: true, value: "21000" },
        { key: "D", text: t`₹ 9,000`, correct: false, misconceptionId: "C05-M2", value: "9000" },
      ],
      solution: {
        steps: [
          t`MV $=$ FV $-$ discount $= 100 - 30 = 70$, so MV is ₹ 70.`,
          t`Amount received $= 300 \times 70$.`,
          t`$= 21000$, so the amount received is ₹ 21,000.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/RoR SolvedEx.4" },
      stem: t`Neel bought shares as follows. Company A: 350 shares, FV ₹ 10, premium ₹ 7. Company B: 2,750 shares, FV ₹ 5, discount ₹ 1. Company C: 50 shares, MV ₹ 150. Find his total investment.`,
      verify: { kind: "value", inputs: { n1: "350", F1: "10", d1: "7", n2: "2750", F2: "5", d2: "-1", n3: "50", V3: "150" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`₹ 24,450`, correct: true, value: "24450" },
        { key: "B", text: t`₹ 24,750`, correct: false, misconceptionId: "C05-M1", value: "24750" },
        { key: "C", text: t`₹ 25,050`, correct: false, misconceptionId: "C05-M3", value: "25050" },
        { key: "D", text: t`₹ 24,756`, correct: false, misconceptionId: "C05-M5", value: "24756" },
      ],
      solution: {
        steps: [
          t`A: MV $= 10 + 7 = 17$; $350 \times 17 = 5950$.`,
          t`B: MV $= 5 - 1 = 4$; $2750 \times 4 = 11000$.`,
          t`C: $50 \times 150 = 7500$.`,
          t`Total $= 5950 + 11000 + 7500$ $= 24450$, that is ₹ 24,450.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.3 Q.3" },
      stem: t`Joseph bought shares as follows. Company A: 200 shares, FV ₹ 2, premium ₹ 18. Company B: 45 shares, MV ₹ 500. Company C: 1 share, MV ₹ 10,540. Find his total investment.`,
      verify: { kind: "value", inputs: { n1: "200", F1: "2", d1: "18", n2: "45", V2: "500", n3: "1", V3: "10540" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`₹ 37,040`, correct: true, value: "37040" },
        { key: "B", text: t`₹ 33,440`, correct: false, misconceptionId: "C05-M1", value: "33440" },
        { key: "C", text: t`₹ 36,640`, correct: false, misconceptionId: "C05-M2", value: "36640" },
        { key: "D", text: t`₹ 33,458`, correct: false, misconceptionId: "C05-M5", value: "33458" },
      ],
      solution: {
        steps: [
          t`A: MV $= 2 + 18 = 20$; $200 \times 20 = 4000$.`,
          t`B: $45 \times 500 = 22500$.`,
          t`C: $1 \times 10540 = 10540$.`,
          t`Total $= 4000 + 22500 + 10540$ $= 37040$, that is ₹ 37,040.`,
        ],
      },
    },
  ],
};
