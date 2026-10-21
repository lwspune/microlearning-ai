import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`A shirt has a printed price of ₹ 2,000. The shop gives $10\%$ off and charges $5\%$ GST. **Is the bill ₹ 2,000 $- 10\% + 5\%$, that is ₹ 1,900?**`,
    reveal: t`No. The discount comes off first: ₹ 2,000 $-$ ₹ 200 $=$ ₹ 1,800. GST is $5\%$ of ₹ 1,800, that is ₹ 90. The bill is ₹ 1,890, not ₹ 1,900.`,
  },
  explanation: {
    intuition: [
      t`The **printed price** is the price marked on the article.`,
      t`A **discount** is an amount the shop takes off the printed price.`,
      t`What is left after the discount is the **taxable value**: the price on which GST is charged.`,
      t`GST is then added on top of the taxable value.`,
      t`So the order is always: discount first, GST second.`,
      t`Within a state the GST is split equally into CGST and SGST, and the invoice shows both.`,
    ],
    formal: [
      {
        title: "Discount comes first",
        points: [
          t`The discount is a percentage of the printed price.`,
          t`Discount $= \frac{\text{rate}}{100} \times$ printed price.`,
          t`Taxable value $=$ printed price $-$ discount.`,
          t`A ₹ 800 bag at $25\%$ off: discount $= \frac{25}{100} \times 800$ = ₹ 200.`,
          t`So its taxable value is ₹ 800 $-$ ₹ 200 = ₹ 600.`,
        ],
      },
      {
        title: "GST on the taxable value",
        points: [
          t`GST $= \frac{\text{rate}}{100} \times$ taxable value.`,
          t`CGST and SGST are each half the GST rate: $18\%$ GST is $9\%$ CGST and $9\%$ SGST.`,
          t`For the bag at $12\%$ GST: CGST $= \frac{6}{100} \times 600$ = ₹ 36, and SGST = ₹ 36.`,
          t`Amount paid $=$ taxable value $+$ CGST $+$ SGST.`,
          t`For the bag: ₹ 600 $+$ ₹ 36 $+$ ₹ 36 = ₹ 672.`,
        ],
      },
      {
        title: "Why the order matters",
        points: [
          t`GST on the printed price would tax money the customer never pays.`,
          t`The discount comes off the price itself, not only off the tax.`,
          t`The two percentages are of different amounts, so you cannot just add and subtract them.`,
          t`$10\%$ off and then $10\%$ GST on ₹ 100 gives ₹ 99, not ₹ 100.`,
        ],
      },
    ],
    worked: {
      prompt: t`A mobile phone has a printed price of ₹ 12,000. The shop gives a $20\%$ discount and charges $18\%$ GST on the discounted price. Find the CGST, the SGST and the amount paid.`,
      steps: [
        t`Discount $= \frac{20}{100} \times 12000$ = ₹ 2,400.`,
        t`Taxable value = ₹ 12,000 $-$ ₹ 2,400 = ₹ 9,600.`,
        t`GST is $18\%$, so CGST $=$ SGST $= 9\%$.`,
        t`CGST $= \frac{9}{100} \times 9600$ = ₹ 864, and SGST = ₹ 864.`,
        t`Amount paid = ₹ 9,600 $+$ ₹ 864 $+$ ₹ 864 = ₹ 11,328.`,
      ],
      answer: t`CGST = SGST = ₹ 864; amount paid = ₹ 11,328.`,
    },
    visualSpec: t`Drag the discount rate and the GST rate for a fixed printed price, and watch a bar split into discount, taxable value, CGST and SGST, with the amount paid beside it.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Charges GST on the printed price instead of on the discounted price.",
      remediation: "GST is charged on the taxable value, the price after the discount. Take the discount off first, then find GST on what is left.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Charges CGST and SGST each at the whole GST rate.",
      remediation: t`CGST and SGST are each half the GST rate: $18\%$ GST means $9\%$ CGST and $9\%$ SGST.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Adds only the CGST (half the rate) and forgets the SGST.",
      remediation: "The invoice has both CGST and SGST, and together they make the whole GST. Add both to the taxable value.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Pays the printed price plus GST, as if the discount only lowered the tax.",
      remediation: t`The discount comes off the price itself. The customer pays the taxable value (printed price $-$ discount) plus GST.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Takes the taxable value as the amount paid and forgets to add GST.",
      remediation: t`The amount paid is taxable value $+$ CGST $+$ SGST. GST is added on top of the discounted price.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Uses the discount amount itself as the taxable value.",
      remediation: t`The discount is the part taken off. The taxable value is what is left: printed price $-$ discount.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M1 gives the key when there is no discount; on amount-paid items it equals taking the two rates as one net rate on the printed price, which is not modelled separately.",
    "C02-M3 applies to amount-paid and total-GST items, C02-M4 and C02-M5 only to amount-paid items, and C02-M6 only to CGST and total-GST items with a discount.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q3(A)(i)" },
      stem: t`Shreekar bought a laptop with a $10\%$ discount on the printed price of ₹ 50,000. $18\%$ GST was charged on the discounted price. What is the CGST shown in the tax invoice?`,
      verify: { kind: "value", inputs: { P: "50000", d: "10", r: "18" }, params: { ask: "cgst" } },
      options: [
        { key: "A", text: t`₹ 4,050`, correct: true, value: "4050" },
        { key: "B", text: t`₹ 4,500`, correct: false, misconceptionId: "C02-M1", value: "4500" },
        { key: "C", text: t`₹ 8,100`, correct: false, misconceptionId: "C02-M2", value: "8100" },
        { key: "D", text: t`₹ 450`, correct: false, misconceptionId: "C02-M6", value: "450" },
      ],
      solution: {
        steps: [
          t`Discount $= \frac{10}{100} \times 50000$ = ₹ 5,000.`,
          t`Taxable value = ₹ 50,000 $-$ ₹ 5,000 = ₹ 45,000.`,
          t`GST is $18\%$, so the rate of CGST is $9\%$.`,
          t`CGST $= \frac{9}{100} \times 45000$ = ₹ 4,050.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.1 Q.7" },
      stem: t`Prasad bought a washing machine from 'Maharashtra Electronic Goods'. A $5\%$ discount was given on the printed price of ₹ 40,000, and GST was charged at $28\%$. What was the purchase price of the washing machine?`,
      verify: { kind: "value", inputs: { P: "40000", d: "5", r: "28" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 49,200`, correct: false, misconceptionId: "C02-M1", value: "49200" },
        { key: "B", text: t`₹ 43,320`, correct: false, misconceptionId: "C02-M3", value: "43320" },
        { key: "C", text: t`₹ 50,640`, correct: false, misconceptionId: "C02-M4", value: "50640" },
        { key: "D", text: t`₹ 48,640`, correct: true, value: "48640" },
      ],
      solution: {
        steps: [
          t`Discount $= \frac{5}{100} \times 40000$ = ₹ 2,000, so the taxable value is ₹ 38,000.`,
          t`GST is $28\%$, so CGST $=$ SGST $= 14\%$.`,
          t`CGST $= \frac{14}{100} \times 38000$ = ₹ 5,320, and SGST = ₹ 5,320.`,
          t`Purchase price = ₹ 38,000 $+$ ₹ 5,320 $+$ ₹ 5,320 = ₹ 48,640.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4A Q.3" },
      stem: t`A ready-made garment shopkeeper gives a $5\%$ discount on a dress of ₹ 1,000 and charges $5\%$ GST on the remaining amount. What is the purchase price of the dress for the customer?`,
      verify: { kind: "value", inputs: { P: "1000", d: "5", r: "5" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 1,047.50`, correct: false, misconceptionId: "C02-M4", value: "2095/2" },
        { key: "B", text: t`₹ 997.50`, correct: true, value: "1995/2" },
        { key: "C", text: t`₹ 1,000`, correct: false, misconceptionId: "C02-M1", value: "1000" },
        { key: "D", text: t`₹ 950`, correct: false, misconceptionId: "C02-M5", value: "950" },
      ],
      solution: {
        steps: [
          t`Discount $= \frac{5}{100} \times 1000$ = ₹ 50, so the taxable value is ₹ 950.`,
          t`GST $= \frac{5}{100} \times 950$ = ₹ 47.50 (CGST ₹ 23.75 and SGST ₹ 23.75).`,
          t`Purchase price = ₹ 950 $+$ ₹ 47.50 = ₹ 997.50.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4A Q.2" },
      stem: t`A dealer gave a $10\%$ discount on a showpiece of ₹ 25,000. GST of $28\%$ was charged on the discounted price. What is the total amount shown in the tax invoice?`,
      verify: { kind: "value", inputs: { P: "25000", d: "10", r: "28" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 31,300`, correct: false, misconceptionId: "C02-M4", value: "31300" },
        { key: "B", text: t`₹ 28,800`, correct: true, value: "28800" },
        { key: "C", text: t`₹ 35,100`, correct: false, misconceptionId: "C02-M2", value: "35100" },
        { key: "D", text: t`₹ 22,500`, correct: false, misconceptionId: "C02-M5", value: "22500" },
      ],
      solution: {
        steps: [
          t`Discount $= \frac{10}{100} \times 25000$ = ₹ 2,500, so the taxable value is ₹ 22,500.`,
          t`GST is $28\%$, so CGST $=$ SGST $= 14\%$.`,
          t`CGST $= \frac{14}{100} \times 22500$ = ₹ 3,150, and SGST = ₹ 3,150.`,
          t`Total in the invoice = ₹ 22,500 $+$ ₹ 3,150 $+$ ₹ 3,150 = ₹ 28,800.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q3(A)(i)" },
      stem: t`Shreekar bought a laptop with a $20\%$ discount on the printed price of ₹ 45,000. $18\%$ GST was charged on the discounted price. What amount did Shreekar pay?`,
      verify: { kind: "value", inputs: { P: "45000", d: "20", r: "18" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`₹ 36,000`, correct: false, misconceptionId: "C02-M5", value: "36000" },
        { key: "B", text: t`₹ 42,480`, correct: true, value: "42480" },
        { key: "C", text: t`₹ 48,960`, correct: false, misconceptionId: "C02-M2", value: "48960" },
        { key: "D", text: t`₹ 39,240`, correct: false, misconceptionId: "C02-M3", value: "39240" },
      ],
      solution: {
        steps: [
          t`Discount $= \frac{20}{100} \times 45000$ = ₹ 9,000, so the taxable value is ₹ 36,000.`,
          t`GST is $18\%$, so CGST $=$ SGST $= 9\%$.`,
          t`CGST $= \frac{9}{100} \times 36000$ = ₹ 3,240, and SGST = ₹ 3,240.`,
          t`Amount paid = ₹ 36,000 $+$ ₹ 3,240 $+$ ₹ 3,240 = ₹ 42,480.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Tax Invoice SolvedEx.3" },
      stem: t`Complete the activity. Shreekar bought a laptop with a $15\%$ discount on the printed price of ₹ 60,000; $18\%$ GST was charged on the discounted price. Discount $= \frac{15}{100} \times 60000$ = ₹ 9,000. What is the total GST (CGST $+$ SGST) in the tax invoice?`,
      verify: { kind: "value", inputs: { P: "60000", d: "15", r: "18" }, params: { ask: "gst" } },
      options: [
        { key: "A", text: t`₹ 9,180`, correct: true, value: "9180" },
        { key: "B", text: t`₹ 10,800`, correct: false, misconceptionId: "C02-M1", value: "10800" },
        { key: "C", text: t`₹ 4,590`, correct: false, misconceptionId: "C02-M3", value: "4590" },
        { key: "D", text: t`₹ 1,620`, correct: false, misconceptionId: "C02-M6", value: "1620" },
      ],
      solution: {
        steps: [
          t`Taxable value = ₹ 60,000 $-$ ₹ 9,000 = ₹ 51,000.`,
          t`GST is $18\%$, so CGST $=$ SGST $= 9\%$.`,
          t`CGST $= \frac{9}{100} \times 51000$ = ₹ 4,590, and SGST = ₹ 4,590.`,
          t`Total GST = ₹ 4,590 $+$ ₹ 4,590 = ₹ 9,180.`,
        ],
      },
    },
  ],
};
