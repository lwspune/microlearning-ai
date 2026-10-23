import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Two sisters are $5$ and $10$ years old, so their ages are in the ratio $1 : 2$. Will their ages still be in the ratio $1 : 2$ after $5$ years?`,
    reveal: t`No. They will be $10$ and $15$, and $10 : 15 = 2 : 3$. Adding the same number to both changes the ratio, so we work with the ages, not the ratio's terms.`,
  },
  explanation: {
    intuition: [
      t`A ratio such as $3 : 5$ compares two quantities. It does not tell their actual sizes.`,
      t`The quantities could be $3$ and $5$, or $6$ and $10$, or $30$ and $50$.`,
      t`Each pair is $3k$ and $5k$ for some positive number $k$, called the **multiplier**.`,
      t`The question's other fact, such as a total or an age after some years, gives an equation in $k$.`,
      t`Solve for $k$, then multiply back: the answer is $3k$ or $5k$, not $k$ itself.`,
      t`After $4$ years, both people are $4$ years older: add $4$ to each age.`,
    ],
    formal: [
      {
        title: "Quantities as ak and bk",
        points: [
          t`Quantities in the ratio $a : b$ are written as $ak$ and $bk$, with the same $k$.`,
          t`Example: ₹ 600 is shared between Asha and Ravi in the ratio $2 : 3$.`,
          t`Asha gets $2k$ and Ravi gets $3k$, so $2k + 3k = 600$.`,
          t`$5k = 600$, so $k = 120$.`,
          t`Multiply back: Asha gets ₹ 240 and Ravi gets ₹ 360.`,
          t`Check: the shares add up to $600$, and $240 : 360 = 2 : 3$.`,
        ],
      },
      {
        title: "The same number added to both",
        points: [
          t`Ages now are in the ratio $3 : 4$. After $5$ years, they will be in the ratio $4 : 5$.`,
          t`Ages now are $3k$ and $4k$, so after $5$ years they are $3k + 5$ and $4k + 5$.`,
          t`Their ratio is $4 : 5$. Cross-multiply: $5(3k + 5) = 4(4k + 5)$.`,
          t`$15k + 25 = 16k + 20$, so $k = 5$.`,
          t`The present ages are $3 \times 5 = 15$ and $4 \times 5 = 20$ years.`,
          t`Check: after $5$ years they are $20$ and $25$, and $20 : 25 = 4 : 5$.`,
        ],
      },
      {
        title: "Other facts, other equations",
        points: [
          t`A **difference**: at a child's birth, the mother's age was the difference of their ages, $bk - ak$.`,
          t`**Angles**: adjacent angles of a parallelogram (angles at the two ends of one side) add up to $180^\circ$.`,
          t`A **product**: $10k \times 9k = 90k^2$, so the equation has $k^2$ in it.`,
          t`A **perimeter**: a rectangle with sides $3k$ and $k$ has perimeter $2(3k + k) = 8k$.`,
          t`In every case, solve for $k$ first.`,
          t`Then multiply back to get the quantity the question asks for.`,
        ],
      },
      {
        title: "Persons and days",
        points: [
          t`More persons finish a job in fewer days: persons and days are in **inverse proportion**.`,
          t`So persons $\times$ days stays the same. Call it the **person-days** of the job.`,
          t`Three persons build a house in $8$ days: the job is $3 \times 8 = 24$ person-days.`,
          t`To finish it in $6$ days, the number of persons is $24 \div 6 = 4$.`,
          t`Do not add or subtract: $2$ days fewer does not mean $2$ more persons.`,
        ],
      },
    ],
    worked: {
      prompt: t`The ratio of the present ages of Albert and Salim is $5 : 9$. Five years hence, the ratio of their ages will be $3 : 5$. Find their present ages.`,
      steps: [
        t`Let Albert's present age be $5k$ years and Salim's be $9k$ years.`,
        t`Five years hence they will be $5k + 5$ and $9k + 5$, in the ratio $3 : 5$.`,
        t`Cross-multiply: $5(5k + 5) = 3(9k + 5)$, so $25k + 25 = 27k + 15$.`,
        t`So $10 = 2k$, and $k = 5$.`,
        t`Albert is $5 \times 5 = 25$ years and Salim is $9 \times 5 = 45$ years. Check: $30 : 50 = 3 : 5$.`,
      ],
      answer: t`Albert is $25$ years old and Salim is $45$ years old.`,
    },
    visualSpec: t`Two bars in the ratio a : b are built from equal blocks of size k; drag k until the bars match the question's other fact, then read off the answer.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Takes the ratio's terms as the actual quantities: ages in the ratio 2 : 7 means the child is 2",
      remediation: t`A ratio only compares. Quantities in the ratio $a : b$ are $ak$ and $bk$; the question's other fact tells you $k$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "Stops one step early: gives the multiplier k (or the total person-days) as the answer",
      remediation: t`$k$ is only the multiplier. Multiply back to get $ak$ or $bk$. In a work problem, divide the person-days by the days.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Finds the quantity the question did not ask for (the mother's age instead of the child's)",
      remediation: t`Read the question again and give the quantity it asks for: $ak$ for the first, $bk$ for the second.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Gives the value after the change (the age after n years) instead of the present value",
      remediation: t`$ak + n$ is the value after $n$ is added. The question asks for the value now, which is $ak$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Treats persons and days as directly proportional: fewer days, fewer persons",
      remediation: t`More persons finish sooner, so persons and days are in inverse proportion: persons $\times$ days stays the same.`,
      fallback: { kind: "ext", topic: "inverse proportion (Std VIII)" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks in differences: finishing 4 days sooner needs 4 more persons",
      remediation: t`Persons and days change by multiplying, not by adding. Keep persons $\times$ days the same.`,
      fallback: { kind: "ext", topic: "inverse proportion (Std VIII)" },
    },
  ],
  engineNotes: [
    "C02-M4 needs a question where the same number is added to both quantities. C02-M5 and C02-M6 need a persons-and-days question, where C02-M1 and C02-M3 do not apply. C02-M1 gives the same value as C02-M2 when the asked term of the ratio equals k (24 bananas in 3 : 5): draw items where they differ.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.1 Q8" },
      stem: t`The ratio of the present ages of Rehana and her mother is $2 : 7$. After $2$ years, the ratio of their ages will be $1 : 3$. What is Rehana's present age (in years)?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ratio", a: "2", b: "7", fact: "shift", n: "2", c: "1", d: "3", ask: "1" } },
      options: [
        { key: "A", text: t`$8$`, correct: true, value: "8" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C02-M2", value: "4" },
        { key: "C", text: t`$28$`, correct: false, misconceptionId: "C02-M3", value: "28" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C02-M4", value: "10" },
      ],
      solution: {
        steps: [
          t`Let Rehana's age be $2k$ and her mother's $7k$. After $2$ years: $2k + 2$ and $7k + 2$.`,
          t`Their ratio is $1 : 3$, so $3(2k + 2) = 7k + 2$.`,
          t`$6k + 6 = 7k + 2$, so $k = 4$.`,
          t`Rehana's present age is $2 \times 4 = 8$ years.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.1 SolvedEx.5" },
      stem: t`The ratio of the number of mango trees to chikoo trees in an orchard is $2 : 3$. If $5$ more trees of each type are planted, the ratio becomes $5 : 7$. How many chikoo trees were in the orchard before the planting?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ratio", a: "2", b: "3", fact: "shift", n: "5", c: "5", d: "7", ask: "2" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C02-M1", value: "3" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C02-M2", value: "10" },
        { key: "C", text: t`$35$`, correct: false, misconceptionId: "C02-M4", value: "35" },
        { key: "D", text: t`$30$`, correct: true, value: "30" },
      ],
      solution: {
        steps: [
          t`Let the mango trees be $2k$ and the chikoo trees $3k$. After planting: $2k + 5$ and $3k + 5$.`,
          t`Their ratio is $5 : 7$, so $7(2k + 5) = 5(3k + 5)$.`,
          t`$14k + 35 = 15k + 25$, so $k = 10$.`,
          t`There were $3 \times 10 = 30$ chikoo trees.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.1 SolvedEx.6" },
      stem: t`The ratio of two numbers is $5 : 7$. If $40$ is added to each number, the ratio becomes $25 : 31$. Find the larger number.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ratio", a: "5", b: "7", fact: "shift", n: "40", c: "25", d: "31", ask: "2" } },
      options: [
        { key: "A", text: t`$124$`, correct: false, misconceptionId: "C02-M4", value: "124" },
        { key: "B", text: t`$84$`, correct: true, value: "84" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C02-M2", value: "12" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C02-M3", value: "60" },
      ],
      solution: {
        steps: [
          t`Let the numbers be $5k$ and $7k$. Adding $40$: $5k + 40$ and $7k + 40$.`,
          t`Their ratio is $25 : 31$, so $31(5k + 40)$ $= 25(7k + 40)$.`,
          t`$155k + 1240 = 175k + 1000$, so $20k = 240$ and $k = 12$.`,
          t`The larger number is $7 \times 12 = 84$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q4(i)" },
      stem: t`$\square ABCD$ is a parallelogram. The ratio of $\angle A$ and $\angle B$ is $5 : 4$. Find the measure of $\angle B$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ratio", a: "5", b: "4", fact: "sum", total: "180", ask: "2" } },
      options: [
        { key: "A", text: t`$100^\circ$`, correct: false, misconceptionId: "C02-M3", value: "100" },
        { key: "B", text: t`$80^\circ$`, correct: true, value: "80" },
        { key: "C", text: t`$4^\circ$`, correct: false, misconceptionId: "C02-M1", value: "4" },
        { key: "D", text: t`$20^\circ$`, correct: false, misconceptionId: "C02-M2", value: "20" },
      ],
      solution: {
        steps: [
          t`Adjacent angles of a parallelogram add up to $180^\circ$.`,
          t`Let $\angle A = 5k$ and $\angle B = 4k$. Then $9k = 180$, so $k = 20$.`,
          t`$\angle B = 4 \times 20 = 80^\circ$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q1(iv)" },
      stem: t`$32$ bananas were shared between Shubham and Anil in the ratio $3 : 5$. How many bananas did Shubham get?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ratio", a: "3", b: "5", fact: "sum", total: "32", ask: "1" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C02-M3", value: "20" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M1", value: "3" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C02-M2", value: "4" },
      ],
      solution: {
        steps: [
          t`Let Shubham get $3k$ and Anil $5k$ bananas. Then $3k + 5k = 32$.`,
          t`$8k = 32$, so $k = 4$.`,
          t`Shubham got $3 \times 4 = 12$ bananas.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.1 Q4" },
      stem: t`Six persons can build a small house in $12$ days. How many persons are needed to build the same house in $8$ days?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "work", p: "6", d1: "12", d2: "8" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$72$`, correct: false, misconceptionId: "C02-M2", value: "72" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C02-M5", value: "4" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C02-M6", value: "10" },
      ],
      solution: {
        steps: [
          t`More persons take fewer days, so persons $\times$ days stays the same.`,
          t`The job is $6 \times 12 = 72$ person-days.`,
          t`In $8$ days it needs $72 \div 8 = 9$ persons.`,
        ],
      },
    },
  ],
};
