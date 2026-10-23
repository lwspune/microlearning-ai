import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`A ribbon is $2$ m long and another is $50$ cm long. Riya says their lengths are in the ratio $2 : 50$, that is $1 : 25$. Is she right?`,
    reveal: t`No. $2$ m $= 200$ cm, so the ratio is $200 : 50$, that is $4 : 1$. The first ribbon is four times as long, not one twenty-fifth.`,
  },
  explanation: {
    intuition: [
      t`A **ratio** $a : b$ compares two quantities by division: it is the number $\dfrac{a}{b}$.`,
      t`The quantities must be in the **same unit**. Only then is the ratio a plain number.`,
      t`Multiplying or dividing both terms by the same non-zero number does not change a ratio.`,
      t`A ratio is in **reduced form** when its terms have no common factor except $1$.`,
      t`A **percentage** is a ratio whose second term is $100$: $60\% = 60 : 100$.`,
      t`So $15 : 25 = 3 : 5 = 60 : 100 = 60\%$.`,
    ],
    formal: [
      {
        title: "Reducing a ratio",
        points: [
          t`Find the **HCF** (highest common factor) of the two terms.`,
          t`Divide both terms by the HCF.`,
          t`For $72 : 60$, the HCF of $72$ and $60$ is $12$.`,
          t`$\dfrac{72}{60} = \dfrac{72 \div 12}{60 \div 12}$ $= \dfrac{6}{5}$, so $72 : 60 = 6 : 5$.`,
          t`The order matters: $6 : 5$ (first to second) is not $5 : 6$.`,
        ],
      },
      {
        title: "Quantities in different units",
        points: [
          t`First write both quantities in the smaller unit, then reduce.`,
          t`$5$ litre and $2500$ ml: $5$ litre $= 5000$ ml.`,
          t`$5000 : 2500 = 2 : 1$.`,
          t`Use the right factor: $1$ km $= 1000$ m, $1$ kg $= 1000$ g, $1$ m $= 100$ cm.`,
          t`For area, $1$ sq. m $= 100 \times 100 = 10000$ sq. cm.`,
          t`For time, $1$ year $= 12$ months and $1$ minute $= 60$ seconds, not $10$ or $100$.`,
        ],
      },
      {
        title: "Ratio to percentage",
        points: [
          t`Make the second term $100$, or multiply the ratio by $100$ and write $\%$.`,
          t`$47 : 50 = \dfrac{47 \times 2}{50 \times 2}$ $= \dfrac{94}{100} = 94\%$.`,
          t`$\dfrac{7}{16} = \dfrac{7 \times 100}{16}\%$ $= 43.75\%$.`,
          t`The percentage compares the first term with the **second term**, not with their total.`,
        ],
      },
      {
        title: "Percentage to ratio",
        points: [
          t`Write $p\%$ as $p : 100$, then reduce.`,
          t`$75\% = 75 : 100 = 3 : 4$, dividing both terms by $25$.`,
          t`For a decimal, multiply **both** terms by the same power of $10$.`,
          t`$0.64\% = 0.64 : 100$ $= 64 : 10000$.`,
          t`Dividing both terms by $16$: $64 : 10000 = 4 : 625$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the ratio of $1.5$ kg to $2500$ g in reduced form, and then as a percentage.`,
      steps: [
        t`Write both in grams: $1.5$ kg $= 1.5 \times 1000 = 1500$ g.`,
        t`The ratio is $1500 : 2500$.`,
        t`The HCF of $1500$ and $2500$ is $500$. Dividing both terms by $500$ gives $3 : 5$.`,
        t`$\dfrac{3}{5} = \dfrac{3 \times 20}{5 \times 20}$ $= \dfrac{60}{100}$.`,
        t`So the ratio is $3 : 5$, which is $60\%$.`,
      ],
      answer: t`$3 : 5$, that is $60\%$`,
    },
    visualSpec: t`Two bars stand for the two quantities; dragging a unit switch redraws both in one unit, and a slider divides both bars into equal blocks of the HCF so the reduced ratio can be counted.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Compares the numbers as they are written, without writing both quantities in one unit (or keeps only the larger units of a mixed quantity).",
      remediation: "A ratio compares quantities in the same unit. Convert both to the smaller unit first, then reduce.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Converts with a wrong factor: $1$ km $= 100$ m, $1$ sq. m $= 100$ sq. cm, or reads $3$ years $4$ months as $3.4$ years.`,
      remediation: t`Use the true factor: $1$ km $= 1000$ m, $1$ cm $= 10$ mm, $1$ sq. m $= 10000$ sq. cm, $1$ year $= 12$ months.`,
      fallback: { kind: "ext", topic: "units of measurement (Std VIII)" },
    },
    {
      id: "C01-M3",
      mistake: "Writes the ratio the wrong way round: second quantity to first.",
      remediation: "Keep the order the question gives: the first quantity is the first term of the ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Treats $a : b$ as $a$ out of the total $a + b$ ($1 : 4$ as $1$ out of $5$, $p\%$ as $p : (100 - p)$).`,
      remediation: t`$a : b$ compares $a$ with $b$ itself, so it equals $\dfrac{a}{b}$. Likewise $p\%$ is $p : 100$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Forgets the $100$: writes $a : b$ as $\dfrac{a}{b}\%$, or $p\%$ as $p : 1$.`,
      remediation: t`A percentage has $100$ as its second term: multiply $\dfrac{a}{b}$ by $100$, and write $p\%$ as $p : 100$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q1(ii)" },
      stem: t`What is the ratio of $1$ mm to $1$ cm?`,
      verify: { kind: "value", inputs: { a: "1", fa: "1", b: "1", fb: "10", wfa: "1", wfb: "100" }, params: { kind: "units" } },
      options: [
        { key: "A", text: t`$1 : 10$`, correct: true, value: "1/10" },
        { key: "B", text: t`$1 : 1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
        { key: "C", text: t`$1 : 100$`, correct: false, misconceptionId: "C01-M2", value: "1/100" },
        { key: "D", text: t`$10 : 1$`, correct: false, misconceptionId: "C01-M3", value: "10" },
      ],
      solution: {
        steps: [
          t`Write both in millimetres: $1$ cm $= 10$ mm.`,
          t`The ratio is $1 : 10$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.1 SolvedEx.3" },
      stem: t`A rectangular field is $1.2$ km long and $400$ m broad. What is the ratio of its length to its breadth, in reduced form?`,
      verify: { kind: "value", inputs: { a: "6/5", fa: "1000", b: "400", fb: "1", wfa: "100", wfb: "1" }, params: { kind: "units" } },
      options: [
        { key: "A", text: t`$3 : 1$`, correct: true, value: "3" },
        { key: "B", text: t`$3 : 1000$`, correct: false, misconceptionId: "C01-M1", value: "3/1000" },
        { key: "C", text: t`$3 : 10$`, correct: false, misconceptionId: "C01-M2", value: "3/10" },
        { key: "D", text: t`$1 : 3$`, correct: false, misconceptionId: "C01-M3", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Write both in metres: $1.2$ km $= 1.2 \times 1000 = 1200$ m.`,
          t`Length to breadth is $1200 : 400$.`,
          t`Dividing both terms by $400$ gives $3 : 1$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.1 Q2(iv)" },
      stem: t`What is the reduced form of the ratio of $3$ years $4$ months to $5$ years $8$ months?`,
      verify: { kind: "value", inputs: { a1: "3", a2: "4", b1: "5", b2: "8", f: "12", wf: "10" }, params: { kind: "mixed" } },
      options: [
        { key: "A", text: t`$17 : 29$`, correct: false, misconceptionId: "C01-M2", value: "17/29" },
        { key: "B", text: t`$17 : 10$`, correct: false, misconceptionId: "C01-M3", value: "17/10" },
        { key: "C", text: t`$10 : 17$`, correct: true, value: "10/17" },
        { key: "D", text: t`$3 : 5$`, correct: false, misconceptionId: "C01-M1", value: "3/5" },
      ],
      solution: {
        steps: [
          t`$1$ year $= 12$ months, so $3$ years $4$ months $= 36 + 4 = 40$ months.`,
          t`$5$ years $8$ months $= 60 + 8 = 68$ months.`,
          t`The ratio is $40 : 68$. Dividing both terms by $4$ gives $10 : 17$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q7(iv)" },
      stem: t`What is the reduced form of the ratio of $4$ sq. m to $800$ sq. cm?`,
      verify: { kind: "value", inputs: { a: "4", fa: "10000", b: "800", fb: "1", wfa: "100", wfb: "1" }, params: { kind: "units" } },
      options: [
        { key: "A", text: t`$50 : 1$`, correct: true, value: "50" },
        { key: "B", text: t`$1 : 200$`, correct: false, misconceptionId: "C01-M1", value: "1/200" },
        { key: "C", text: t`$1 : 2$`, correct: false, misconceptionId: "C01-M2", value: "1/2" },
        { key: "D", text: t`$1 : 50$`, correct: false, misconceptionId: "C01-M3", value: "1/50" },
      ],
      solution: {
        steps: [
          t`$1$ sq. m $= 100 \times 100 = 10000$ sq. cm.`,
          t`So $4$ sq. m $= 40000$ sq. cm, and the ratio is $40000 : 800$.`,
          t`Dividing both terms by $800$ gives $50 : 1$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.1 SolvedEx.4" },
      stem: t`The ratio of Mahesh's expenditure to his income is $1 : 4$. What percentage of his income does he spend?`,
      verify: { kind: "value", inputs: { a: "1", b: "4" }, params: { kind: "to_pct" } },
      options: [
        { key: "A", text: t`$25\%$`, correct: true, value: "25" },
        { key: "B", text: t`$400\%$`, correct: false, misconceptionId: "C01-M3", value: "400" },
        { key: "C", text: t`$20\%$`, correct: false, misconceptionId: "C01-M4", value: "20" },
        { key: "D", text: t`$0.25\%$`, correct: false, misconceptionId: "C01-M5", value: "1/4" },
      ],
      solution: {
        steps: [
          t`Expenditure to income is $\dfrac{1}{4}$.`,
          t`$\dfrac{1}{4} = \dfrac{1 \times 25}{4 \times 25}$ $= \dfrac{25}{100}$.`,
          t`So Mahesh spends $25\%$ of his income.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.1 Q3(iii)" },
      stem: t`Express $6.25\%$ as a ratio in reduced form.`,
      verify: { kind: "value", inputs: { p: "25/4" }, params: { kind: "to_ratio" } },
      options: [
        { key: "A", text: t`$1 : 15$`, correct: false, misconceptionId: "C01-M4", value: "1/15" },
        { key: "B", text: t`$25 : 4$`, correct: false, misconceptionId: "C01-M5", value: "25/4" },
        { key: "C", text: t`$1 : 16$`, correct: true, value: "1/16" },
        { key: "D", text: t`$16 : 1$`, correct: false, misconceptionId: "C01-M3", value: "16" },
      ],
      solution: {
        steps: [
          t`$6.25\% = 6.25 : 100$.`,
          t`Multiply both terms by $100$: $625 : 10000$.`,
          t`Dividing both terms by $625$ gives $1 : 16$.`,
        ],
      },
    },
  ],
};
