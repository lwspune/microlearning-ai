import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A shop pays ₹ 150 GST when it buys a fan. It collects ₹ 186 GST when it sells the fan. **Does the shop pay ₹ 186 to the government?**`,
    reveal: t`No. The ₹ 150 it paid on purchase is already with the government, so the shop gets credit for it. It pays only ₹ 186 $-$ ₹ 150 = ₹ 36.`,
  },
  explanation: {
    intuition: [
      t`A trader buys goods and pays GST on the purchase.`,
      t`The trader then sells the goods and collects GST on the sale.`,
      t`The GST paid on purchase is the **input tax**.`,
      t`The GST collected on sale is the **output tax**.`,
      t`The trader gets credit for the input tax already paid: the **input tax credit** (ITC).`,
      t`So the trader pays the government only output tax $-$ ITC.`,
    ],
    formal: [
      {
        title: "GST payable",
        points: [
          t`Input tax = GST paid at the time of purchase.`,
          t`ITC = the input tax, claimed as a credit.`,
          t`Output tax = GST collected at the time of sale.`,
          t`GST payable $=$ output tax $-$ ITC.`,
          t`Fan: GST payable $= 186 - 150$ = ₹ 36.`,
        ],
      },
      {
        title: "Payable CGST and SGST",
        points: [
          t`Within a state, the GST payable is split equally into CGST and SGST.`,
          t`Payable CGST $=$ payable SGST $= \frac{1}{2} \times$ GST payable.`,
          t`Fan: payable CGST $= \frac{36}{2}$ = ₹ 18, and payable SGST = ₹ 18.`,
          t`If taxable values are given, first find each tax from its value.`,
          t`Input tax $= r\%$ of the purchase value; output tax $= r\%$ of the sale value.`,
        ],
      },
      {
        title: "Along a trading chain",
        points: [
          t`Goods go from manufacturer to wholesaler to retailer to customer.`,
          t`Take taxable values ₹ 2,000, ₹ 2,400 and ₹ 3,000 at $5\%$ GST.`,
          t`The output taxes are ₹ 100, ₹ 120 and ₹ 150.`,
          t`Each trader's ITC is the GST on his own purchase, from the stage just before.`,
          t`Payable: manufacturer ₹ 100, wholesaler ₹ 20, retailer ₹ 30.`,
          t`Each pays GST on the value he adds; together ₹ 150, the GST the customer pays.`,
        ],
      },
    ],
    worked: {
      prompt: t`A wholesaler bought cookers for the taxable value ₹ 2,000 and sold them to a retailer for the taxable value ₹ 2,500. The rate of GST is $12\%$. Find the CGST and SGST payable by the wholesaler.`,
      steps: [
        t`Input tax $= \frac{12}{100} \times 2000$ = ₹ 240, so ITC = ₹ 240.`,
        t`Output tax $= \frac{12}{100} \times 2500$ = ₹ 300.`,
        t`GST payable $=$ output tax $-$ ITC $= 300 - 240$ = ₹ 60.`,
        t`Payable CGST $=$ payable SGST $= \frac{60}{2}$ = ₹ 30.`,
      ],
      answer: t`Payable CGST = ₹ 30 and payable SGST = ₹ 30.`,
    },
    visualSpec: t`Drag the taxable value at each stage of a manufacturer-wholesaler-retailer chain, and watch each trader's output tax split into the ITC from the stage before and the GST he pays on his value added.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Takes no input tax credit: pays the whole output tax (GST collected on sale) to the government.",
      remediation: t`The GST paid on purchase is already with the government. GST payable $=$ output tax $-$ ITC.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Adds the input tax to the output tax, as if GST is payable on both the purchase and the sale.",
      remediation: t`The input tax is a credit, so it is subtracted: GST payable $=$ output tax $-$ ITC.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Finds the GST payable correctly, then gives all of it as the CGST (or SGST) payable.",
      remediation: t`Within a state, the GST payable is split equally: payable CGST $=$ payable SGST $=$ half the GST payable.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: "Mixes up the input tax credit and the GST payable: gives the ITC as the amount to pay.",
      remediation: t`The ITC is the GST already paid on purchase. The amount to pay is what is left: output tax $-$ ITC.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Forgets the GST rate: gives the value added (sale value $-$ purchase value) as the GST payable.`,
      remediation: "GST is a percentage of a value. Find the output tax and the input tax at the GST rate, then subtract.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "In a trading chain, subtracts the GST paid at an earlier stage instead of the GST on the trader's own purchase.",
      remediation: "A trader's ITC is the GST he paid on his own purchase, the stage just before him. Use that tax as the ITC.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M3 applies only to CGST or SGST payable items (Q2, Q4, Q6); C04-M5 only where taxable values are given (Q2, Q3).",
    "C04-M6 applies only to trading-chain items (Q4, Q5, Q6).",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.2 Q.1" },
      stem: t`'Chetana Store' paid a total GST of ₹ 1,00,500 at the time of purchase and collected GST of ₹ 1,22,500 at the time of sale during July 2017. What is the GST payable by Chetana Store?`,
      verify: { kind: "value", inputs: { O: "122500", I: "100500" }, params: { ask: "payable" } },
      options: [
        { key: "A", text: t`₹ 2,23,000`, correct: false, misconceptionId: "C04-M2", value: "223000" },
        { key: "B", text: t`₹ 1,00,500`, correct: false, misconceptionId: "C04-M4", value: "100500" },
        { key: "C", text: t`₹ 22,000`, correct: true, value: "22000" },
        { key: "D", text: t`₹ 1,22,500`, correct: false, misconceptionId: "C04-M1", value: "122500" },
      ],
      solution: {
        steps: [
          t`Input tax = ₹ 1,00,500, so ITC = ₹ 1,00,500. Output tax = ₹ 1,22,500.`,
          t`GST payable $=$ output tax $-$ ITC $= 122500 - 100500$.`,
          t`$= 22000$, so the GST payable is ₹ 22,000.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q3(A)(i)" },
      stem: t`M/s. Jay Chemicals purchased a liquid soap having taxable value ₹ 8,000 and sold it to consumers for the taxable value ₹ 10,000. The rate of GST is $18\%$. What is the CGST payable by M/s. Jay Chemicals?`,
      verify: { kind: "value", inputs: { P: "8000", S: "10000", r: "18" }, params: { ask: "cgst" } },
      options: [
        { key: "A", text: t`₹ 900`, correct: false, misconceptionId: "C04-M1", value: "900" },
        { key: "B", text: t`₹ 360`, correct: false, misconceptionId: "C04-M3", value: "360" },
        { key: "C", text: t`₹ 1,000`, correct: false, misconceptionId: "C04-M5", value: "1000" },
        { key: "D", text: t`₹ 180`, correct: true, value: "180" },
      ],
      solution: {
        steps: [
          t`Input tax $= \frac{18}{100} \times 8000$ = ₹ 1,440, so ITC = ₹ 1,440.`,
          t`Output tax $= \frac{18}{100} \times 10000$ = ₹ 1,800.`,
          t`GST payable $= 1800 - 1440$ = ₹ 360.`,
          t`Payable CGST $= \frac{360}{2}$ = ₹ 180.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2019/Q4(iii)" },
      stem: t`Smt. Malhotra purchased solar panels for the taxable value of ₹ 85,000. She sold them for the taxable value of ₹ 90,000. The rate of GST is $5\%$. What is the amount of GST payable by her?`,
      verify: { kind: "value", inputs: { P: "85000", S: "90000", r: "5" }, params: { ask: "payable" } },
      options: [
        { key: "A", text: t`₹ 4,250`, correct: false, misconceptionId: "C04-M4", value: "4250" },
        { key: "B", text: t`₹ 5,000`, correct: false, misconceptionId: "C04-M5", value: "5000" },
        { key: "C", text: t`₹ 250`, correct: true, value: "250" },
        { key: "D", text: t`₹ 4,500`, correct: false, misconceptionId: "C04-M1", value: "4500" },
      ],
      solution: {
        steps: [
          t`Input tax $= \frac{5}{100} \times 85000$ = ₹ 4,250, so ITC = ₹ 4,250.`,
          t`Output tax $= \frac{5}{100} \times 90000$ = ₹ 4,500.`,
          t`GST payable $= 4500 - 4250$ = ₹ 250.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/ITC SolvedEx.4" },
      stem: t`A manufacturer sold a cycle to a wholesaler for the taxable value ₹ 4,000. The wholesaler sold it to a retailer for ₹ 4,800 (taxable value). The retailer sold it to a customer for ₹ 5,200 (taxable value). The rate of GST is $12\%$. What is the CGST payable by the retailer?`,
      verify: { kind: "value", inputs: { A: "4000", P: "4800", S: "5200", r: "12" }, params: { ask: "cgst" } },
      options: [
        { key: "A", text: t`₹ 312`, correct: false, misconceptionId: "C04-M1", value: "312" },
        { key: "B", text: t`₹ 48`, correct: false, misconceptionId: "C04-M3", value: "48" },
        { key: "C", text: t`₹ 72`, correct: false, misconceptionId: "C04-M6", value: "72" },
        { key: "D", text: t`₹ 24`, correct: true, value: "24" },
      ],
      solution: {
        steps: [
          t`The retailer bought for ₹ 4,800: ITC $= \frac{12}{100} \times 4800$ = ₹ 576.`,
          t`He sold for ₹ 5,200: output tax $= \frac{12}{100} \times 5200$ = ₹ 624.`,
          t`GST payable $= 624 - 576$ = ₹ 48.`,
          t`Payable CGST $= \frac{48}{2}$ = ₹ 24.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/PS4A Q.8" },
      stem: t`A wholesaler purchased electric goods for the taxable amount ₹ 1,50,000. He sold them to a retailer for the taxable amount ₹ 1,80,000. The retailer sold them to a customer for the taxable amount ₹ 2,20,000. The rate of GST is $18\%$. What is the GST payable by the retailer?`,
      verify: { kind: "value", inputs: { A: "150000", P: "180000", S: "220000", r: "18" }, params: { ask: "payable" } },
      options: [
        { key: "A", text: t`₹ 12,600`, correct: false, misconceptionId: "C04-M6", value: "12600" },
        { key: "B", text: t`₹ 7,200`, correct: true, value: "7200" },
        { key: "C", text: t`₹ 39,600`, correct: false, misconceptionId: "C04-M1", value: "39600" },
        { key: "D", text: t`₹ 72,000`, correct: false, misconceptionId: "C04-M2", value: "72000" },
      ],
      solution: {
        steps: [
          t`The retailer bought for ₹ 1,80,000: ITC $= \frac{18}{100} \times 180000$ = ₹ 32,400.`,
          t`He sold for ₹ 2,20,000: output tax $= \frac{18}{100} \times 220000$ = ₹ 39,600.`,
          t`GST payable $= 39600 - 32400$ = ₹ 7,200.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-financial-planning-10/Ex 4.2 Q.3" },
      stem: t`Amir Enterprise purchased chocolate sauce bottles and paid GST of ₹ 3,800. He sold them to Akbari Bros. and collected GST of ₹ 4,100. Akbari Bros. sold the bottles to Mayank Food Corner and collected GST of ₹ 4,500. What is the SGST payable by Akbari Bros.?`,
      verify: { kind: "value", inputs: { F: "3800", I: "4100", O: "4500" }, params: { ask: "cgst" } },
      options: [
        { key: "A", text: t`₹ 200`, correct: true, value: "200" },
        { key: "B", text: t`₹ 400`, correct: false, misconceptionId: "C04-M3", value: "400" },
        { key: "C", text: t`₹ 2,050`, correct: false, misconceptionId: "C04-M4", value: "2050" },
        { key: "D", text: t`₹ 350`, correct: false, misconceptionId: "C04-M6", value: "350" },
      ],
      solution: {
        steps: [
          t`Akbari Bros. paid ₹ 4,100 GST to Amir Enterprise, so its ITC = ₹ 4,100.`,
          t`It collected ₹ 4,500 on sale. GST payable $= 4500 - 4100$ = ₹ 400.`,
          t`Payable SGST $= \frac{400}{2}$ = ₹ 200.`,
        ],
      },
    },
  ],
};
