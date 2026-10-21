import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A restaurant bill shows food ₹ 400, CGST ₹ 10 and SGST ₹ 10. The menu says GST is $5\%$. **Has the restaurant charged $5\%$ twice?**`,
    reveal: t`No. $5\%$ of ₹ 400 is ₹ 20. Inside one state, GST is shared equally: ₹ 10 is CGST for the Centre and ₹ 10 is SGST for the State.`,
  },
  explanation: {
    intuition: [
      t`A bill adds a tax to the price of what you buy: the **Goods and Services Tax**, or GST.`,
      t`Two governments collect this tax: the Central Government and the State Government.`,
      t`When the seller and buyer are in the same state, the two governments share the GST equally.`,
      t`So a $28\%$ GST shows on the bill as $14\%$ for the Centre and $14\%$ for the State.`,
      t`When the goods go to another state, the Centre collects the whole GST as one tax.`,
      t`The buyer pays the price plus the whole GST.`,
    ],
    formal: [
      {
        title: "GST and the taxable value",
        points: [
          t`GST started in India on 1 July 2017, as one tax on goods and services.`,
          t`The **taxable value** is the price of the goods or service before tax.`,
          t`GST is charged as a percentage of the taxable value.`,
          t`The GST rates are $0\%$, $5\%$, $12\%$, $18\%$ and $28\%$.`,
          t`Essential commodities, such as fresh vegetables, have a GST rate of $0\%$.`,
          t`A **tax invoice** is the bill that shows the taxable value and each tax on it.`,
        ],
      },
      {
        title: "CGST and SGST within a state",
        points: [
          t`A sale within one state is charged two equal taxes.`,
          t`**CGST** (Central GST) goes to the Central Government; **SGST** (State GST) goes to the State Government.`,
          t`Each of CGST and SGST is half the GST rate: $28\% = 14\% + 14\%$.`,
          t`Going back, GST is CGST plus SGST: CGST $2.5\%$ means GST $2.5\% + 2.5\% = 5\%$.`,
          t`In a union territory, **UTGST** takes the place of SGST.`,
          t`Pune and Nagpur are both in Maharashtra, so a sale between them is within the state.`,
        ],
      },
      {
        title: "IGST between two states",
        points: [
          t`**IGST** (Integrated GST) is charged when goods or services go from one state to another.`,
          t`IGST is charged at the whole GST rate, and there is no CGST or SGST.`,
          t`The Centre collects IGST and later gives the buyer's state its share.`,
          t`Example: goods worth ₹ 10,000 go from Pune (Maharashtra) to Indore (Madhya Pradesh) at $12\%$ GST.`,
          t`IGST $= \frac{12}{100} \times 10000 = 1200$, so the invoice shows IGST ₹ 1,200.`,
          t`Check the states, not the cities: two cities in one state means CGST and SGST.`,
        ],
      },
      {
        title: "Amounts on the tax invoice",
        points: [
          t`For several articles, first find the taxable value: number of articles times the value of one.`,
          t`CGST is the CGST rate percent of the taxable value; SGST is the same amount.`,
          t`Example: ₹ 2,000 at $12\%$ GST, so CGST $= \frac{6}{100} \times 2000 = 120$.`,
          t`SGST is also ₹ 120, so the total GST is $120 + 120 = 240$, that is ₹ 240.`,
          t`The customer pays taxable value $+$ CGST $+$ SGST: $2000 + 240 = 2240$, that is ₹ 2,240.`,
          t`To find the rate: rate of GST $=$ total GST $\div$ taxable value $\times 100$.`,
        ],
      },
      {
        title: "GSTIN, B2B and B2C",
        points: [
          t`A trader registered under GST gets a **GSTIN**, a GST identification number.`,
          t`A GSTIN has 15 alpha-numerals, that is, letters and digits.`,
          t`The first 2 digits are the state code (27 for Maharashtra); the next 10 are the trader's PAN.`,
          t`The last 3 characters complete the number: $2 + 10 + 3 = 15$.`,
          t`**B2B** (business to business): a registered dealer sells to another registered dealer.`,
          t`**B2C** (business to consumer): a dealer sells to a customer, who pays GST in the price.`,
        ],
      },
    ],
    worked: {
      prompt: t`A shop in Pune sells a mixer to a customer in Pune. The taxable value is ₹ 3,500 and the rate of GST is $18\%$. Find the CGST, the SGST and the price for the customer.`,
      steps: [
        t`The sale is within Maharashtra, so the tax is CGST and SGST, each half of $18\%$: $9\%$.`,
        t`CGST $= \frac{9}{100} \times 3500 = 315$, that is ₹ 315.`,
        t`SGST is the same amount: ₹ 315. Total GST $= 315 + 315 = 630$.`,
        t`Price for the customer $= 3500 + 630 = 4130$, that is ₹ 4,130.`,
      ],
      answer: t`CGST ₹ 315, SGST ₹ 315, and the customer pays ₹ 4,130.`,
    },
    visualSpec: t`Drag the GST rate and flip a switch between same state and other state; the bill splits the tax into equal CGST and SGST halves or shows one IGST amount.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Charging the whole GST rate as CGST and again as SGST (and reading a CGST rate or amount as the GST)",
      remediation: t`Within a state, GST is split into two equal halves: CGST is half the GST rate and SGST is the other half. So GST $=$ CGST $+$ SGST.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Swapping part and whole: doubling the GST rate to get CGST, or halving the CGST rate to get GST",
      remediation: "GST is the whole and CGST, SGST are its two halves. Halve the GST rate to get CGST; add CGST and SGST to get GST.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Charging only half the GST: CGST alone within a state (leaving out SGST), or IGST at half the rate between states",
      remediation: t`The buyer pays the whole GST. Within a state that is both halves, CGST $+$ SGST; between states it is IGST at the whole rate.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Mixing up the two cases: IGST for a sale inside one state, or CGST and SGST for a sale between two states",
      remediation: "Check the states, not the cities. Within one state: CGST and SGST. From one state to another: IGST at the whole rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Working out the tax on one article when the invoice has several",
      remediation: "Tax is charged on the whole taxable value: first multiply the value of one article by the number of articles.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Finding the rate as total GST divided by taxable value, without multiplying by 100",
      remediation: t`A fraction becomes a percentage when you multiply by $100$: rate $=$ total GST $\div$ taxable value $\times 100$.`,
      fallback: { kind: "ext", topic: "writing a fraction as a percentage (percentages)" },
    },
  ],
  engineNotes: [
    "C01-M3 applies only to price and tax-amount items (Q4, Q5, Q6); C01-M4 only to items that ask which taxes apply (Q1, Q5 within a state; Q6 between states).",
    "C01-M5 applies only when the invoice has more than one article (Q3, Q6); C01-M6 only when the rate is found from amounts (Q2).",
    "C01-M1 and C01-M2 apply only within a state: between states their halving never happens, so Q6 cannot catch them.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q2(B)(iii)" },
      stem: t`'Pawan Medical' supplies medicines to customers in its own state. On some medicines the rate of GST is $12\%$. What are the rates of the taxes on its tax invoice?`,
      verify: { kind: "value", inputs: { r: "12" }, params: { ask: "split", within: "yes" } },
      options: [
        { key: "A", text: t`CGST $6\%$ and SGST $6\%$`, correct: true, value: "(6, 6, 0)" },
        { key: "B", text: t`CGST $12\%$ and SGST $12\%$`, correct: false, misconceptionId: "C01-M1", value: "(12, 12, 0)" },
        { key: "C", text: t`CGST $24\%$ and SGST $24\%$`, correct: false, misconceptionId: "C01-M2", value: "(24, 24, 0)" },
        { key: "D", text: t`IGST $12\%$`, correct: false, misconceptionId: "C01-M4", value: "(0, 0, 12)" },
      ],
      solution: {
        steps: [
          t`Pawan Medical sells within its own state, so the taxes are CGST and SGST, not IGST.`,
          t`Each is half the GST rate: $12 \div 2 = 6$.`,
          t`So the invoice shows CGST $6\%$ and SGST $6\%$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q2(B)(iv)" },
      stem: t`A courier agent charged a total of ₹ 590 to send a parcel from Nashik to Nagpur. On the tax invoice, the taxable value is ₹ 500, CGST is ₹ 45 and SGST is ₹ 45. Find the rate of GST charged for this service.`,
      verify: { kind: "value", inputs: { t: "500", c: "45", s: "45" }, params: { ask: "rate", within: "yes" } },
      options: [
        { key: "A", text: t`$18\%$`, correct: true, value: "18" },
        { key: "B", text: t`$9\%$`, correct: false, misconceptionId: "C01-M1", value: "9" },
        { key: "C", text: t`$4.5\%$`, correct: false, misconceptionId: "C01-M2", value: "9/2" },
        { key: "D", text: t`$0.18\%$`, correct: false, misconceptionId: "C01-M6", value: "9/50" },
      ],
      solution: {
        steps: [
          t`Total GST $=$ CGST $+$ SGST $= 45 + 45 = 90$, that is ₹ 90.`,
          t`Rate of GST $= \frac{90}{500} \times 100$.`,
          t`$= 18$, so the rate of GST is $18\%$ (CGST $9\%$ and SGST $9\%$).`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.1 Q.3" },
      stem: t`'M/s. Real Paint' sold $2$ tins of lustre paint to a customer in the same state. The taxable value of each tin is ₹ 2,800 and the rate of GST is $28\%$. Find the amount of CGST on the tax invoice.`,
      verify: { kind: "value", inputs: { n: "2", v: "2800", r: "28" }, params: { ask: "cgst", within: "yes" } },
      options: [
        { key: "A", text: t`₹ 3,136`, correct: false, misconceptionId: "C01-M2", value: "3136" },
        { key: "B", text: t`₹ 392`, correct: false, misconceptionId: "C01-M5", value: "392" },
        { key: "C", text: t`₹ 784`, correct: true, value: "784" },
        { key: "D", text: t`₹ 1,568`, correct: false, misconceptionId: "C01-M1", value: "1568" },
      ],
      solution: {
        steps: [
          t`Taxable value of 2 tins $= 2 \times 2800 = 5600$, that is ₹ 5,600.`,
          t`The sale is within the state, so the rate of CGST $= 28 \div 2 = 14\%$.`,
          t`CGST $= \frac{14}{100} \times 5600 = 784$, so CGST is ₹ 784.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q2(B)(iv)" },
      stem: t`A shop sells a wrist watch belt to a customer in the same state. The taxable value of the belt is ₹ 586 and the rate of GST is $18\%$. What is the price of the belt for the customer?`,
      verify: { kind: "value", inputs: { v: "586", r: "18" }, params: { ask: "price", within: "yes" } },
      options: [
        { key: "A", text: t`₹ 691.48`, correct: true, value: "17287/25" },
        { key: "B", text: t`₹ 796.96`, correct: false, misconceptionId: "C01-M1", value: "19924/25" },
        { key: "C", text: t`₹ 1,007.92`, correct: false, misconceptionId: "C01-M2", value: "25198/25" },
        { key: "D", text: t`₹ 638.74`, correct: false, misconceptionId: "C01-M3", value: "31937/50" },
      ],
      solution: {
        steps: [
          t`Within the state, the rate of CGST $=$ rate of SGST $= 18 \div 2 = 9\%$.`,
          t`CGST $= \frac{9}{100} \times 586 = 52.74$, and SGST is also ₹ 52.74.`,
          t`Price $= 586 + 52.74 + 52.74$ $= 691.48$, so the customer pays ₹ 691.48.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4A Q.4" },
      stem: t`A trader from Surat, Gujarat sold cotton clothes to a trader in Rajkot, Gujarat. The taxable value of the clothes is ₹ 2,50,000 and the rate of GST is $5\%$. Which taxes does the trader in Rajkot pay, and how much?`,
      verify: { kind: "value", inputs: { v: "250000", r: "5" }, params: { ask: "taxes", within: "yes" } },
      options: [
        { key: "A", text: t`CGST ₹ 6,250 and SGST ₹ 6,250`, correct: true, value: "(6250, 6250, 0)" },
        { key: "B", text: t`CGST ₹ 12,500 and SGST ₹ 12,500`, correct: false, misconceptionId: "C01-M1", value: "(12500, 12500, 0)" },
        { key: "C", text: t`CGST ₹ 6,250 only`, correct: false, misconceptionId: "C01-M3", value: "(6250, 0, 0)" },
        { key: "D", text: t`IGST ₹ 12,500`, correct: false, misconceptionId: "C01-M4", value: "(0, 0, 12500)" },
      ],
      solution: {
        steps: [
          t`Surat and Rajkot are both in Gujarat, so the sale is within one state: CGST and SGST, not IGST.`,
          t`GST $= \frac{5}{100} \times 250000 = 12500$, that is ₹ 12,500.`,
          t`Half each: CGST ₹ 6,250 and SGST ₹ 6,250.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4A Q.4" },
      stem: t`A trader in Thane, Maharashtra sold $3$ water purifiers to a shop in Indore, Madhya Pradesh. The taxable value of each purifier is ₹ 8,400 and the rate of GST is $18\%$. Which tax does the tax invoice show, and how much?`,
      verify: { kind: "value", inputs: { n: "3", v: "8400", r: "18" }, params: { ask: "taxes", within: "no" } },
      options: [
        { key: "A", text: t`CGST ₹ 2,268 and SGST ₹ 2,268`, correct: false, misconceptionId: "C01-M4", value: "(2268, 2268, 0)" },
        { key: "B", text: t`IGST ₹ 1,512`, correct: false, misconceptionId: "C01-M5", value: "(0, 0, 1512)" },
        { key: "C", text: t`IGST ₹ 4,536`, correct: true, value: "(0, 0, 4536)" },
        { key: "D", text: t`IGST ₹ 2,268`, correct: false, misconceptionId: "C01-M3", value: "(0, 0, 2268)" },
      ],
      solution: {
        steps: [
          t`Thane is in Maharashtra and Indore is in Madhya Pradesh: the sale is between two states, so the tax is IGST.`,
          t`Taxable value $= 3 \times 8400 = 25200$, that is ₹ 25,200.`,
          t`IGST is at the whole rate: $\frac{18}{100} \times 25200 = 4536$, so IGST ₹ 4,536.`,
        ],
      },
    },
  ],
};
