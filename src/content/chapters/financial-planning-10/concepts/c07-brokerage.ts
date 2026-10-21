import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`You buy one share of MV ₹ 1,000 through a broker who charges $0.1\%$. **Is ₹ 1,000 all you pay?**`,
    reveal: t`No. You also pay brokerage, $0.1\%$ of ₹ 1,000 = ₹ 1, and $18\%$ GST on that ₹ 1, which is ₹ 0.18. So you pay ₹ 1,001.18.`,
  },
  explanation: {
    intuition: [
      t`A **share broker** buys and sells shares for you and charges a fee called **brokerage**.`,
      t`Brokerage is a small percentage of the market value (MV) of the shares.`,
      t`The broker gives a service, so GST at $18\%$ is charged on the brokerage alone.`,
      t`When you buy, you pay the MV plus the brokerage plus the GST.`,
      t`When you sell, the brokerage and the GST come off the MV you get.`,
      t`So buying costs a little more than the MV, and selling brings a little less.`,
    ],
    formal: [
      {
        title: "Brokerage",
        points: [
          t`Brokerage is always a percentage of the MV, never of the FV.`,
          t`Brokerage $= \frac{\text{rate}}{100} \times$ MV.`,
          t`MV ₹ 1,000 at $0.1\%$: brokerage $= \frac{0.1}{100} \times 1000$ = ₹ 1.`,
          t`For many shares, first find the total MV: number of shares $\times$ MV.`,
          t`Then take the rate of brokerage on this total.`,
        ],
      },
      {
        title: "GST on brokerage",
        points: [
          t`The rate of GST on brokerage is $18\%$: CGST $9\%$ and SGST $9\%$.`,
          t`GST is charged on the brokerage only, not on the MV of the shares.`,
          t`GST $= \frac{18}{100} \times$ brokerage.`,
          t`Brokerage ₹ 1: GST $= \frac{18}{100} \times 1$ = ₹ 0.18.`,
          t`That is CGST ₹ 0.09 and SGST ₹ 0.09.`,
        ],
      },
      {
        title: "Buying and selling",
        points: [
          t`Buying: purchase value $=$ MV $+$ brokerage $+$ GST.`,
          t`Buy at MV ₹ 1,000: $1000 + 1 + 0.18$ = ₹ 1,001.18.`,
          t`Selling: amount received $=$ MV $-$ brokerage $-$ GST.`,
          t`Sell at MV ₹ 1,000: $1000 - 1 - 0.18$ = ₹ 998.82.`,
          t`A **contract note** is the broker's bill: it lists the MV, brokerage, CGST, SGST and total.`,
        ],
      },
      {
        title: "Shares from a total",
        points: [
          t`Sometimes the sum paid already includes the brokerage and the GST.`,
          t`Then first find the cost of one share: MV $+$ brokerage $+$ GST.`,
          t`Number of shares $=$ sum paid $\div$ cost of one share.`,
          t`MV ₹ 1,000 at $0.1\%$: one share costs ₹ 1,001.18.`,
          t`So ₹ 10,011.80 buys $10011.80 \div 1001.18 = 10$ shares.`,
          t`Dividing by the MV alone gives too many shares.`,
        ],
      },
    ],
    worked: {
      prompt: t`Smt. Aruna Thakkar purchased 100 shares when the MV is ₹ 1,200. She paid brokerage at $0.3\%$ and $18\%$ GST on brokerage. Find the total amount she paid.`,
      steps: [
        t`Value of 100 shares $= 100 \times 1200$ = ₹ 1,20,000.`,
        t`Brokerage is on the MV: $\frac{0.3}{100} \times 120000$ = ₹ 360.`,
        t`GST is on the brokerage: $\frac{18}{100} \times 360$ = ₹ 64.80.`,
        t`She is buying, so add: $120000 + 360 + 64.80$ $= 120424.80$.`,
      ],
      answer: t`She paid ₹ 1,20,424.80 in all.`,
    },
    visualSpec: t`Drag the MV, the rate of brokerage and a buy/sell switch, and watch a bar of the MV grow by the brokerage and GST on buying, or shrink by them on selling.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Takes the brokerage as a percentage of the FV instead of the MV.",
      remediation: "Brokerage is always a percentage of the MV, the price at which the share is traded. Use the MV, not the FV.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M2",
      mistake: t`Charges the $18\%$ GST on the MV of the shares instead of on the brokerage.`,
      remediation: t`GST is charged on the broker's service only. Take $18\%$ of the brokerage, not of the MV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Turns the direction round: takes the brokerage and GST off when buying, or adds them when selling.",
      remediation: "The buyer pays the broker on top of the MV, so add. The seller pays the broker out of the MV, so subtract.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Leaves out the GST on brokerage and adds or subtracts only the brokerage.",
      remediation: t`Brokerage always carries $18\%$ GST. Add (or take off) both the brokerage and the GST on it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Charges only the CGST ($9\%$) on the brokerage and forgets the SGST.`,
      remediation: t`GST on brokerage is $18\%$: CGST $9\%$ plus SGST $9\%$. Count both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Divides the whole sum paid by the MV alone, though the sum includes brokerage and GST.",
      remediation: t`The sum paid covers the MV, the brokerage and the GST. Divide it by the cost of one share: MV $+$ brokerage $+$ GST.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Mistaken money answers that are not a whole number of paise are rounded to the paisa; a mistaken number of shares is rounded down to a whole share.",
    "C07-M1 is offered only where the stem gives the FV (Q1, Q3, Q4, Q5); C07-M3 never on the charges-only item (Q3); C07-M6 only on the number-of-shares item (Q5).",
    "Q2 adds 18% GST to the board question (which had brokerage only), to keep the item in this concept's scope.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.4 Q.1" },
      stem: t`A share of FV ₹ 100 has a market value of ₹ 250. The rate of brokerage is $0.2\%$ and the rate of GST on brokerage is $18\%$. What is the purchase value of the share?`,
      verify: { kind: "value", inputs: { m: "250", f: "100", b: "1/5", g: "18" }, params: { ask: "buy" } },
      options: [
        { key: "A", text: t`₹ 295.50`, correct: false, misconceptionId: "C07-M2", value: "591/2" },
        { key: "B", text: t`₹ 249.41`, correct: false, misconceptionId: "C07-M3", value: "24941/100" },
        { key: "C", text: t`₹ 250.59`, correct: true, value: "25059/100" },
        { key: "D", text: t`₹ 250.24`, correct: false, misconceptionId: "C07-M1", value: "6256/25" },
      ],
      solution: {
        steps: [
          t`Brokerage is on the MV: $\frac{0.2}{100} \times 250$ = ₹ 0.50.`,
          t`GST $= \frac{18}{100} \times 0.50$ = ₹ 0.09.`,
          t`Purchase value $= 250 + 0.50 + 0.09$, that is ₹ 250.59.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q2(B)(iv)" },
      stem: t`A share is sold for the market value of ₹ 2,000. Brokerage is paid at the rate of $0.5\%$, and GST at $18\%$ is charged on the brokerage. What is the amount received after the sale?`,
      verify: { kind: "value", inputs: { m: "2000", b: "1/2", g: "18" }, params: { ask: "sell" } },
      options: [
        { key: "A", text: t`₹ 2,011.80`, correct: false, misconceptionId: "C07-M3", value: "10059/5" },
        { key: "B", text: t`₹ 1,990`, correct: false, misconceptionId: "C07-M4", value: "1990" },
        { key: "C", text: t`₹ 1,989.10`, correct: false, misconceptionId: "C07-M5", value: "19891/10" },
        { key: "D", text: t`₹ 1,988.20`, correct: true, value: "9941/5" },
      ],
      solution: {
        steps: [
          t`Brokerage $= \frac{0.5}{100} \times 2000$ = ₹ 10.`,
          t`GST $= \frac{18}{100} \times 10$ = ₹ 1.80.`,
          t`On selling, subtract: $2000 - 10 - 1.80$, that is ₹ 1,988.20.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q1(B)(iii)" },
      stem: t`The face value of a share is ₹ 100 and its market value is ₹ 150. The rate of brokerage is $2\%$ and the rate of GST on brokerage is $18\%$. How much is paid as brokerage and GST together on one share?`,
      verify: { kind: "value", inputs: { m: "150", f: "100", b: "2", g: "18" }, params: { ask: "charges" } },
      options: [
        { key: "A", text: t`₹ 3`, correct: false, misconceptionId: "C07-M4", value: "3" },
        { key: "B", text: t`₹ 3.54`, correct: true, value: "177/50" },
        { key: "C", text: t`₹ 2.36`, correct: false, misconceptionId: "C07-M1", value: "59/25" },
        { key: "D", text: t`₹ 30`, correct: false, misconceptionId: "C07-M2", value: "30" },
      ],
      solution: {
        steps: [
          t`Brokerage is on the MV: $\frac{2}{100} \times 150$ = ₹ 3.`,
          t`GST $= \frac{18}{100} \times 3$ = ₹ 0.54.`,
          t`Together: $3 + 0.54$, that is ₹ 3.54.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q4(ii)" },
      stem: t`Smt. Tejaswini purchased 100 shares of FV ₹ 80 when the MV is ₹ 900. She paid brokerage at the rate of $0.5\%$ and $18\%$ GST on brokerage. What is the total amount she paid for the 100 shares?`,
      verify: { kind: "value", inputs: { m: "900", f: "80", b: "1/2", g: "18", n: "100" }, params: { ask: "buy" } },
      options: [
        { key: "A", text: t`₹ 90,531`, correct: true, value: "90531" },
        { key: "B", text: t`₹ 90,047.20`, correct: false, misconceptionId: "C07-M1", value: "450236/5" },
        { key: "C", text: t`₹ 89,469`, correct: false, misconceptionId: "C07-M3", value: "89469" },
        { key: "D", text: t`₹ 90,490.50`, correct: false, misconceptionId: "C07-M5", value: "180981/2" },
      ],
      solution: {
        steps: [
          t`Value of 100 shares $= 100 \times 900$ = ₹ 90,000.`,
          t`Brokerage $= \frac{0.5}{100} \times 90000$ = ₹ 450, and GST $= \frac{18}{100} \times 450$ = ₹ 81.`,
          t`On buying, add: $90000 + 450 + 81$, that is ₹ 90,531.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.8" },
      stem: t`Shri. Aditya Sanghavi invested ₹ 50,118 in shares of FV ₹ 100 when the market value is ₹ 50. The rate of brokerage is $0.2\%$ and the rate of GST on brokerage is $18\%$. How many shares did he purchase?`,
      verify: { kind: "value", inputs: { m: "50", f: "100", b: "1/5", g: "18", S: "50118" }, params: { ask: "shares" } },
      options: [
        { key: "A", text: t`997 shares`, correct: false, misconceptionId: "C07-M1", value: "997" },
        { key: "B", text: t`848 shares`, correct: false, misconceptionId: "C07-M2", value: "848" },
        { key: "C", text: t`1,002 shares`, correct: false, misconceptionId: "C07-M6", value: "1002" },
        { key: "D", text: t`1,000 shares`, correct: true, value: "1000" },
      ],
      solution: {
        steps: [
          t`Brokerage per share $= \frac{0.2}{100} \times 50$ = ₹ 0.10.`,
          t`GST per share $= \frac{18}{100} \times 0.10$ = ₹ 0.018.`,
          t`Cost of one share $= 50 + 0.10 + 0.018$ = ₹ 50.118.`,
          t`Number of shares $= 50118 \div 50.118$ $= 1000$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.4 Q.3" },
      stem: t`A contract note shows 75 shares sold (S) at an MV of ₹ 200 each. Brokerage is $0.2\%$, with CGST $9\%$ and SGST $9\%$ on the brokerage. What is the total value the seller receives?`,
      verify: { kind: "value", inputs: { m: "200", b: "1/5", g: "18", n: "75" }, params: { ask: "sell" } },
      options: [
        { key: "A", text: t`₹ 14,964.60`, correct: true, value: "74823/5" },
        { key: "B", text: t`₹ 12,270`, correct: false, misconceptionId: "C07-M2", value: "12270" },
        { key: "C", text: t`₹ 14,970`, correct: false, misconceptionId: "C07-M4", value: "14970" },
        { key: "D", text: t`₹ 14,967.30`, correct: false, misconceptionId: "C07-M5", value: "149673/10" },
      ],
      solution: {
        steps: [
          t`Value of 75 shares $= 75 \times 200$ = ₹ 15,000.`,
          t`Brokerage $= \frac{0.2}{100} \times 15000$ = ₹ 30.`,
          t`CGST $=$ SGST $= \frac{9}{100} \times 30$ = ₹ 2.70.`,
          t`On selling, subtract: $15000 - 30 - 2.70 - 2.70$, that is ₹ 14,964.60.`,
        ],
      },
    },
  ],
};
