import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Ravi buys 10 shares of FV ₹ 100 at MV ₹ 200. He gets a $15\%$ dividend, then sells them at MV ₹ 190. **The MV fell, so did he lose money?**`,
    reveal: t`Not yet. The fall costs him $10 \times 10$ = ₹ 100, but the dividend brings $10 \times 15$ = ₹ 150. Before brokerage he is ₹ 50 up.`,
  },
  explanation: {
    intuition: [
      t`A share deal has three money moves: buying, the dividend, and selling.`,
      t`**Money out** is what you pay to buy: MV plus brokerage plus GST on it.`,
      t`**Money in** is the dividend plus what the sale brings.`,
      t`The sale brings the MV minus brokerage minus GST on it.`,
      t`If money in is more than money out, it is a **gain**; if less, a **loss**.`,
      t`A percentage gain or loss is always taken on the money paid out.`,
    ],
    formal: [
      {
        title: "Money paid to buy",
        points: [
          t`**Brokerage** is the broker's fee, a percentage of the MV.`,
          t`GST is $18\%$ of the brokerage.`,
          t`Cost of one share $=$ MV $+$ brokerage $+$ GST.`,
          t`Say Ravi pays $0.5\%$ brokerage: $0.5\%$ of 200 = ₹ 1, and GST = ₹ 0.18.`,
          t`So one share costs ₹ 201.18, and 10 shares cost ₹ 2,011.80.`,
          t`If brokerage is a fixed amount per trade, add it once for each trade.`,
        ],
      },
      {
        title: "Money received",
        points: [
          t`Dividend is a percentage of the **FV**, not the MV.`,
          t`Ravi: $15\%$ of 100 = ₹ 15 a share, so ₹ 150 for 10 shares.`,
          t`Selling price of one share $=$ MV $-$ brokerage $-$ GST.`,
          t`Ravi: $190 - 0.95 - 0.171$ = ₹ 188.879 a share, so ₹ 1,888.79.`,
          t`If the shares are sold in lots, find each lot's amount and add.`,
          t`Total received $=$ sale money $+$ dividend $=$ ₹ 2,038.79 for Ravi.`,
        ],
      },
      {
        title: "Gain, loss and percentage",
        points: [
          t`Compare the total received with the total paid.`,
          t`Gain $=$ received $-$ paid, when the received amount is more.`,
          t`Loss $=$ paid $-$ received, when the paid amount is more.`,
          t`Ravi: $2038.79 - 2011.80 = 26.99$, a gain of ₹ 26.99.`,
          t`Percentage gain $= \frac{\text{gain}}{\text{total paid}} \times 100$.`,
          t`Ravi: $\frac{26.99}{2011.80} \times 100 \approx 1.34\%$ gain.`,
        ],
      },
    ],
    worked: {
      prompt: t`Mr. Patil bought 60 shares of FV ₹ 10 at MV ₹ 50, paying $0.5\%$ brokerage and $18\%$ GST on it. He received a $25\%$ dividend, then sold all 60 shares at MV ₹ 45, paying the same brokerage and GST. Find his gain or loss.`,
      steps: [
        t`Buy: brokerage ₹ 0.25 and GST ₹ 0.045, so one share costs ₹ 50.295. Paid $= 60 \times 50.295$ = ₹ 3,017.70.`,
        t`Dividend $= 25\%$ of 10 = ₹ 2.50 a share, so $60 \times 2.50$ = ₹ 150.`,
        t`Sell: brokerage ₹ 0.225 and GST ₹ 0.0405, so one share brings ₹ 44.7345. Sale $= 60 \times 44.7345$ = ₹ 2,684.07.`,
        t`Received $= 2684.07 + 150$ = ₹ 2,834.07, which is less than ₹ 3,017.70.`,
        t`Loss $= 3017.70 - 2834.07$ = ₹ 183.63.`,
      ],
      answer: t`Mr. Patil made a loss of ₹ 183.63.`,
    },
    visualSpec: t`Drag the selling MV and the dividend rate, and watch a money-out bar and a money-in bar, with the gap between them marked gain or loss.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Leaves out the dividend, comparing only the sale money with the money paid.",
      remediation: "The dividend is money the shares brought in. Add it to the sale money before comparing with the amount paid.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Adds brokerage and GST to the MV when selling, as when buying.",
      remediation: "You pay brokerage and its GST at every trade. When buying, add them to the MV; when selling, take them off the MV.",
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M3",
      mistake: "Leaves out brokerage and GST, comparing only the market values and the dividend.",
      remediation: "Brokerage and GST are real costs. Add them to the purchase and take them off the sale before comparing.",
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M4",
      mistake: "Takes the dividend as a percentage of the MV instead of the FV.",
      remediation: t`Dividend is always a percentage of the face value: a $10\%$ dividend on FV ₹ 10 is ₹ 1 a share, whatever the MV.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M5",
      mistake: "Finds the percentage gain on the money received instead of the money paid.",
      remediation: t`A percentage gain or loss is taken on the money you paid out: $\frac{\text{gain}}{\text{total paid}} \times 100$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Subtracts the wrong way round, so a gain is called a loss and a loss a gain.",
      remediation: "Compare first: money in more than money out is a gain; money in less than money out is a loss.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Mistaken money answers that are not a whole number of paise are rounded to the paisa; percentages are rounded to two decimal places.",
    "C08-M1 and C08-M4 need a dividend in the question (not Q4); C08-M5 applies only to percentage items (Q2, Q6).",
    "Q1, Q2, Q3 and Q4 have no GST, as in the textbook; there C08-M3 leaves out the brokerage only.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Brokerage SolvedEx.5" },
      stem: t`Nalinitai invested ₹ 6,024, brokerage included, in shares of FV ₹ 10 when the MV was ₹ 60. After taking a $60\%$ dividend, she sold all the shares at MV ₹ 50. She paid $0.4\%$ brokerage at each stage (no GST in this question). What was her total gain or loss?`,
      verify: { kind: "value", inputs: { S: "6024", F: "10", Mb: "60", d: "60", b: "2/5", s1: "50" }, params: { ask: "amount" } },
      options: [
        { key: "A", text: t`Loss of ₹ 444`, correct: true, value: "-444" },
        { key: "B", text: t`Loss of ₹ 1,044`, correct: false, misconceptionId: "C08-M1", value: "-1044" },
        { key: "C", text: t`Loss of ₹ 404`, correct: false, misconceptionId: "C08-M2", value: "-404" },
        { key: "D", text: t`Gain of ₹ 2,556`, correct: false, misconceptionId: "C08-M4", value: "2556" },
      ],
      solution: {
        steps: [
          t`Brokerage $0.4\%$ of 60 = ₹ 0.24, so one share costs ₹ 60.24. Shares $= 6024 \div 60.24 = 100$.`,
          t`Dividend $= 60\%$ of 10 = ₹ 6 a share, so ₹ 600. Sale: $50 - 0.20 = 49.80$ a share, so ₹ 4,980.`,
          t`Received $= 4980 + 600$ = ₹ 5,580, less than ₹ 6,024.`,
          t`Loss $= 6024 - 5580$ = ₹ 444.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.11" },
      stem: t`Smt. Anagha Doshi bought 22 shares of FV ₹ 100 at MV ₹ 660. After taking a $20\%$ dividend, she sold all the shares at MV ₹ 650. She paid $0.1\%$ brokerage on each trade (no GST in this question). What is her gain or loss as a percentage of the total amount she paid, correct to two decimal places?`,
      verify: { kind: "value", inputs: { n: "22", F: "100", Mb: "660", d: "20", b: "1/10", s1: "650" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`Gain of 1.51%`, correct: false, misconceptionId: "C08-M2", value: "151/100" },
        { key: "B", text: t`Gain of 1.30%`, correct: false, misconceptionId: "C08-M5", value: "13/10" },
        { key: "C", text: t`Loss of 1.32%`, correct: false, misconceptionId: "C08-M6", value: "-33/25" },
        { key: "D", text: t`Gain of 1.32%`, correct: true, value: "33/25" },
      ],
      solution: {
        steps: [
          t`Paid $= 22 \times 660 = 14520$, plus brokerage ₹ 14.52, so ₹ 14,534.52.`,
          t`Dividend $= 22 \times 20$ = ₹ 440. Sale $= 14300 - 14.30$ = ₹ 14,285.70.`,
          t`Received = ₹ 14,725.70, so the gain is $14725.70 - 14534.52$ = ₹ 191.18.`,
          t`Gain $= \frac{191.18}{14534.52} \times 100 \approx 1.32\%$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.4 Q.5" },
      stem: t`Mr. D'souza bought 200 shares of FV ₹ 50 at a premium of ₹ 100. He received a $50\%$ dividend on them. Then he sold 100 shares at a discount of ₹ 10, and the other 100 at a premium of ₹ 75. He paid a brokerage of ₹ 20 for each trade (no GST in this question). Did he gain or lose, and by how much?`,
      verify: { kind: "value", inputs: { n: "200", F: "50", Mb: "150", d: "50", k: "20", n1: "100", s1: "40", s2: "125" }, params: { ask: "amount" } },
      options: [
        { key: "A", text: t`Loss of ₹ 13,560`, correct: false, misconceptionId: "C08-M1", value: "-13560" },
        { key: "B", text: t`Gain of ₹ 1,440`, correct: false, misconceptionId: "C08-M4", value: "1440" },
        { key: "C", text: t`Gain of ₹ 8,560`, correct: false, misconceptionId: "C08-M6", value: "8560" },
        { key: "D", text: t`Loss of ₹ 8,560`, correct: true, value: "-8560" },
      ],
      solution: {
        steps: [
          t`MV $= 50 + 100 = 150$, so paid $= 200 \times 150 + 20$ = ₹ 30,020.`,
          t`Dividend $= 50\%$ of 50 = ₹ 25 a share, so $200 \times 25$ = ₹ 5,000.`,
          t`Sales: $100 \times 40 - 20$ = ₹ 3,980 and $100 \times 125 - 20$ = ₹ 12,480.`,
          t`Received = ₹ 21,460, less than ₹ 30,020, so the loss is ₹ 8,560.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4B Q.6" },
      stem: t`Smt. Mita Agrawal invested ₹ 10,200 in shares when the MV was ₹ 100, and paid the brokerage on top of this sum. She sold 60 shares when the MV was ₹ 125, and the rest when the MV was ₹ 90. She paid $0.1\%$ brokerage on each trade (no GST in this question). Did she make a gain or a loss, and how much?`,
      verify: { kind: "value", inputs: { n: "102", F: "10", Mb: "100", b: "1/10", n1: "60", s1: "125", s2: "90" }, params: { ask: "amount" } },
      options: [
        { key: "A", text: t`Gain of ₹ 1,080`, correct: false, misconceptionId: "C08-M3", value: "1080" },
        { key: "B", text: t`Loss of ₹ 1,058.52`, correct: false, misconceptionId: "C08-M6", value: "-26463/25" },
        { key: "C", text: t`Gain of ₹ 1,058.52`, correct: true, value: "26463/25" },
        { key: "D", text: t`Gain of ₹ 1,081.08`, correct: false, misconceptionId: "C08-M2", value: "27027/25" },
      ],
      solution: {
        steps: [
          t`Shares $= 10200 \div 100 = 102$. Paid $= 10200 + 10.20$ = ₹ 10,210.20.`,
          t`60 shares: $7500 - 7.50$ = ₹ 7,492.50. The other 42: $3780 - 3.78$ = ₹ 3,776.22.`,
          t`Received = ₹ 11,268.72, more than ₹ 10,210.20.`,
          t`Gain $= 11268.72 - 10210.20$ = ₹ 1,058.52.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q4(ii)" },
      stem: t`Smt. Tejaswini bought 100 shares of FV ₹ 80 at MV ₹ 900. She paid $0.5\%$ brokerage and $18\%$ GST on the brokerage. She received a $15\%$ dividend, then sold all 100 shares at MV ₹ 950, again paying $0.5\%$ brokerage and $18\%$ GST on it. What was her total gain or loss?`,
      verify: { kind: "value", inputs: { n: "100", F: "80", Mb: "900", d: "15", b: "1/2", g: "18", s1: "950" }, params: { ask: "amount" } },
      options: [
        { key: "A", text: t`Gain of ₹ 17,408.50`, correct: false, misconceptionId: "C08-M4", value: "34817/2" },
        { key: "B", text: t`Gain of ₹ 5,108.50`, correct: true, value: "10217/2" },
        { key: "C", text: t`Gain of ₹ 3,908.50`, correct: false, misconceptionId: "C08-M1", value: "7817/2" },
        { key: "D", text: t`Gain of ₹ 6,200`, correct: false, misconceptionId: "C08-M3", value: "6200" },
      ],
      solution: {
        steps: [
          t`Buy: $900 + 4.50 + 0.81 = 905.31$ a share, so paid = ₹ 90,531.`,
          t`Dividend $= 15\%$ of 80 = ₹ 12 a share, so ₹ 1,200.`,
          t`Sell: $950 - 4.75 - 0.855 = 944.395$ a share, so ₹ 94,439.50.`,
          t`Received = ₹ 95,639.50, so the gain is $95639.50 - 90531$ = ₹ 5,108.50.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q3(B)(iii)" },
      stem: t`50 shares of FV ₹ 10 were bought at MV ₹ 25. The company declared a $30\%$ dividend. Later all 50 shares were sold at MV ₹ 30. The brokerage was $0.2\%$ on each trade, with $18\%$ GST on the brokerage. What is the gain or loss as a percentage of the total amount paid, correct to two decimal places?`,
      verify: { kind: "value", inputs: { n: "50", F: "10", Mb: "25", d: "30", b: "1/5", g: "18", s1: "30" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`Gain of 32.00%`, correct: false, misconceptionId: "C08-M3", value: "32" },
        { key: "B", text: t`Gain of 23.90%`, correct: false, misconceptionId: "C08-M5", value: "239/10" },
        { key: "C", text: t`Gain of 31.41%`, correct: true, value: "3141/100" },
        { key: "D", text: t`Gain of 19.43%`, correct: false, misconceptionId: "C08-M1", value: "1943/100" },
      ],
      solution: {
        steps: [
          t`Buy: $25 + 0.05 + 0.009 = 25.059$ a share, so paid = ₹ 1,252.95.`,
          t`Dividend $= 50 \times 3$ = ₹ 150. Sell: $30 - 0.06 - 0.0108 = 29.9292$ a share, so ₹ 1,496.46.`,
          t`Received = ₹ 1,646.46, so the gain is ₹ 393.51.`,
          t`Gain $= \frac{393.51}{1252.95} \times 100 \approx 31.41\%$.`,
        ],
      },
    },
  ],
};
