import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A bill says ₹ 1,120, including $12\%$ GST. **Is the GST $12\%$ of ₹ 1,120, that is ₹ 134.40?**`,
    reveal: t`No. GST is $12\%$ of the taxable value, not of the total. The taxable value is ₹ 1,000, so the GST is ₹ 120, and ₹ 1,000 $+$ ₹ 120 = ₹ 1,120.`,
  },
  explanation: {
    intuition: [
      t`The **taxable value** is the price on which GST is charged.`,
      t`The **total value** (with GST) is the taxable value plus the GST.`,
      t`The GST rate is always a percentage of the taxable value.`,
      t`So the total is more than $100\%$ of the taxable value.`,
      t`At $18\%$ GST, the total is $118\%$ of the taxable value.`,
      t`To go back, divide the total by $\frac{118}{100}$; never take $18\%$ off the total.`,
    ],
    formal: [
      {
        title: "The total includes GST",
        points: [
          t`Let the taxable value be ₹ $x$ and the GST rate be $r\%$.`,
          t`GST $= \frac{r}{100}x$, so the total is $x + \frac{r}{100}x$.`,
          t`So total $= x \times \frac{100 + r}{100}$.`,
          t`For ₹ 1,000 at $12\%$: total $= 1000 \times \frac{112}{100}$ = ₹ 1,120.`,
        ],
      },
      {
        title: "Working back to the taxable value",
        points: [
          t`Divide the total by the same factor $\frac{100 + r}{100}$.`,
          t`Taxable value $=$ total $\times \frac{100}{100 + r}$.`,
          t`For the bill: $1120 \times \frac{100}{112} = 1000$, so the taxable value is ₹ 1,000.`,
          t`Then CGST $=$ SGST $= \frac{r}{2}\%$ of the taxable value.`,
          t`For the bill: CGST $= \frac{6}{100} \times 1000$ = ₹ 60, and SGST = ₹ 60.`,
          t`If only the CGST rate is given, double it to get the GST rate first.`,
        ],
      },
      {
        title: "Why not take the rate off",
        points: [
          t`$12\%$ of the total is $12\%$ of a bigger amount than the taxable value.`,
          t`So it gives too much GST: ₹ 134.40 instead of ₹ 120.`,
          t`Check every answer: taxable value $+$ CGST $+$ SGST must equal the total.`,
          t`₹ 1,000 $+$ ₹ 60 $+$ ₹ 60 = ₹ 1,120, so the answer is right.`,
        ],
      },
    ],
    worked: {
      prompt: t`The total value (with GST) of a mixer is ₹ 2,950. The rate of GST is $18\%$. Find the taxable value, the CGST and the SGST.`,
      steps: [
        t`Let the taxable value be ₹ $x$. Then $x \times \frac{118}{100} = 2950$.`,
        t`$x = 2950 \times \frac{100}{118} = 2500$, so the taxable value is ₹ 2,500.`,
        t`GST is $18\%$, so CGST $=$ SGST $= 9\%$.`,
        t`CGST $= \frac{9}{100} \times 2500$ = ₹ 225, and SGST = ₹ 225.`,
        t`Check: ₹ 2,500 $+$ ₹ 225 $+$ ₹ 225 = ₹ 2,950.`,
      ],
      answer: t`Taxable value = ₹ 2,500; CGST = SGST = ₹ 225.`,
    },
    visualSpec: t`Drag the GST rate for a fixed total, and watch a bar of the total split into the taxable value, CGST and SGST, beside a wrong bar that takes the rate off the total.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Takes the GST rate as a percentage of the total, so GST $= r\%$ of the total and the taxable value is the total minus that.`,
      remediation: t`The GST rate is a percentage of the taxable value, not of the total. Find the taxable value as total $\times \frac{100}{100 + r}$ first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Uses the CGST rate in place of the GST rate when working back, dividing by $\frac{100 + r/2}{100}$.`,
      remediation: t`The total includes both CGST and SGST, so use the whole GST rate: CGST $9\%$ means GST $18\%$, and the factor is $\frac{118}{100}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Multiplies the total by $\frac{100 + r}{100}$, adding GST to a total that already has it.`,
      remediation: t`The total already includes GST. Divide it by $\frac{100 + r}{100}$, that is, multiply by $\frac{100}{100 + r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Finds the taxable value correctly, then charges CGST and SGST each at the whole GST rate.",
      remediation: t`CGST and SGST are each half the GST rate: $12\%$ GST means $6\%$ CGST and $6\%$ SGST.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: "Mixes up the two parts of the total: gives the GST when asked for the taxable value, or the reverse.",
      remediation: "The total has two parts: taxable value and GST. Read which one the question asks for.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Mistaken answers that are not a whole number of paise are rounded to the paisa, as a student writes money.",
    "C03-M4 applies only to CGST and total-GST items; C03-M5 only to taxable-value and total-GST items.",
    "C03-M2 is offered only where the stem gives the CGST rate (Q3, Q5, Q6).",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.1 Q.5" },
      stem: t`The total value (with GST) of a remote-controlled toy car is ₹ 1,770. The rate of GST on toys is $18\%$. What is the taxable value of the toy car?`,
      verify: { kind: "value", inputs: { A: "1770", r: "18" }, params: { ask: "taxable" } },
      options: [
        { key: "A", text: t`₹ 2,088.60`, correct: false, misconceptionId: "C03-M3", value: "10443/5" },
        { key: "B", text: t`₹ 270`, correct: false, misconceptionId: "C03-M5", value: "270" },
        { key: "C", text: t`₹ 1,500`, correct: true, value: "1500" },
        { key: "D", text: t`₹ 1,451.40`, correct: false, misconceptionId: "C03-M1", value: "7257/5" },
      ],
      solution: {
        steps: [
          t`GST is $18\%$, so the total is $\frac{118}{100}$ of the taxable value.`,
          t`Taxable value $= 1770 \times \frac{100}{118}$.`,
          t`$= 1500$, so the taxable value is ₹ 1,500.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q3(A)(ii)" },
      stem: t`Complete the activity. The total value (with GST) of a remote-controlled toy car is ₹ 2,360, and the rate of GST is $18\%$. Let the taxable value be ₹ $x$, so $x + \frac{18}{100}x = 2360$. What is the total GST (CGST $+$ SGST) in the tax invoice?`,
      verify: { kind: "value", inputs: { A: "2360", r: "18" }, params: { ask: "gst" } },
      options: [
        { key: "A", text: t`₹ 720`, correct: false, misconceptionId: "C03-M4", value: "720" },
        { key: "B", text: t`₹ 2,000`, correct: false, misconceptionId: "C03-M5", value: "2000" },
        { key: "C", text: t`₹ 360`, correct: true, value: "360" },
        { key: "D", text: t`₹ 424.80`, correct: false, misconceptionId: "C03-M1", value: "2124/5" },
      ],
      solution: {
        steps: [
          t`$\frac{118}{100}x = 2360$, so $x = 2360 \times \frac{100}{118} = 2000$.`,
          t`GST is $18\%$, so CGST $=$ SGST $= \frac{9}{100} \times 2000$ = ₹ 180.`,
          t`Total GST = ₹ 180 $+$ ₹ 180 = ₹ 360.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.1 Q.6" },
      stem: t`'Tiptop Electronics' supplied an AC to a company for ₹ 51,200 (with GST). The rate of CGST on AC is $14\%$. What is the taxable value of the AC?`,
      verify: { kind: "value", inputs: { A: "51200", r: "28" }, params: { ask: "taxable" } },
      options: [
        { key: "A", text: t`₹ 36,864`, correct: false, misconceptionId: "C03-M1", value: "36864" },
        { key: "B", text: t`₹ 44,912.28`, correct: false, misconceptionId: "C03-M2", value: "1122807/25" },
        { key: "C", text: t`₹ 65,536`, correct: false, misconceptionId: "C03-M3", value: "65536" },
        { key: "D", text: t`₹ 40,000`, correct: true, value: "40000" },
      ],
      solution: {
        steps: [
          t`CGST is $14\%$, so SGST is $14\%$ and GST is $28\%$.`,
          t`Taxable value $= 51200 \times \frac{100}{128}$.`,
          t`$= 40000$, so the taxable value is ₹ 40,000.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4A Q.7" },
      stem: t`A dealer supplied a walky-talky set to a police control room for ₹ 84,000 (with GST). The rate of GST is $12\%$. What is the central GST (CGST) charged by the dealer?`,
      verify: { kind: "value", inputs: { A: "84000", r: "12" }, params: { ask: "cgst" } },
      options: [
        { key: "A", text: t`₹ 5,644.80`, correct: false, misconceptionId: "C03-M3", value: "28224/5" },
        { key: "B", text: t`₹ 9,000`, correct: false, misconceptionId: "C03-M4", value: "9000" },
        { key: "C", text: t`₹ 4,500`, correct: true, value: "4500" },
        { key: "D", text: t`₹ 5,040`, correct: false, misconceptionId: "C03-M1", value: "5040" },
      ],
      solution: {
        steps: [
          t`Taxable value $= 84000 \times \frac{100}{112}$ $= 75000$.`,
          t`GST is $12\%$, so the rate of CGST is $6\%$.`,
          t`CGST $= \frac{6}{100} \times 75000$ = ₹ 4,500.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q2(B)(iv)" },
      stem: t`A courier service agent charged a total of ₹ 590 (with GST) to courier a parcel from Nashik to Nagpur. The rates are CGST $9\%$ and SGST $9\%$. What is the CGST in the tax invoice?`,
      verify: { kind: "value", inputs: { A: "590", r: "18" }, params: { ask: "cgst" } },
      options: [
        { key: "A", text: t`₹ 45`, correct: true, value: "45" },
        { key: "B", text: t`₹ 53.10`, correct: false, misconceptionId: "C03-M1", value: "531/10" },
        { key: "C", text: t`₹ 48.72`, correct: false, misconceptionId: "C03-M2", value: "1218/25" },
        { key: "D", text: t`₹ 90`, correct: false, misconceptionId: "C03-M4", value: "90" },
      ],
      solution: {
        steps: [
          t`CGST $9\%$ and SGST $9\%$ make GST $18\%$.`,
          t`Taxable value $= 590 \times \frac{100}{118} = 500$.`,
          t`CGST $= \frac{9}{100} \times 500$ = ₹ 45.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q2(B)(iv)" },
      stem: t`The price of a wrist watch belt for the customer is ₹ 692.07, including GST at CGST $9\%$ and SGST $9\%$. What is the taxable value of the belt?`,
      verify: { kind: "value", inputs: { A: "69207/100", r: "18" }, params: { ask: "taxable" } },
      options: [
        { key: "A", text: t`₹ 586.50`, correct: true, value: "1173/2" },
        { key: "B", text: t`₹ 634.93`, correct: false, misconceptionId: "C03-M2", value: "63493/100" },
        { key: "C", text: t`₹ 816.64`, correct: false, misconceptionId: "C03-M3", value: "20416/25" },
        { key: "D", text: t`₹ 105.57`, correct: false, misconceptionId: "C03-M5", value: "10557/100" },
      ],
      solution: {
        steps: [
          t`CGST $9\%$ and SGST $9\%$ make GST $18\%$.`,
          t`Taxable value $= 692.07 \times \frac{100}{118}$.`,
          t`$= 586.50$, so the taxable value is ₹ 586.50.`,
        ],
      },
    },
  ],
};
