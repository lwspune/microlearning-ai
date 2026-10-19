import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Team A's $2$ players average $90$ runs; team B's $8$ players average $40$ runs. **Is the average of all $10$ players $\frac{90 + 40}{2} = 65$?**`,
    reveal: t`No. Add up the runs: team A scored $2 \times 90 = 180$ and team B $8 \times 40 = 320$, so $500$ runs in all. Then $\frac{500}{10} = 50$. Team B has four times the players, so it pulls the average down towards its own $40$.`,
  },
  explanation: {
    intuition: [
      t`A group's **mean** $\bar{x}$ is its total divided by its size $n$, the number of observations in it.`,
      t`So a group's total is its size times its mean: $n\bar{x}$.`,
      t`To **combine** two groups is to pool all their observations into one list.`,
      t`The pooled total is the two totals added: $n_1\bar{x}_1 + n_2\bar{x}_2$.`,
      t`Divide it by the pooled size $n_1 + n_2$ to get the combined mean.`,
      t`A bigger group has more say, so the combined mean sits nearer that group's mean.`,
    ],
    formal: [
      {
        title: "The combined mean",
        points: [
          t`Group 1 has $n_1$ observations with mean $\bar{x}_1$; group 2 has $n_2$ with mean $\bar{x}_2$.`,
          t`The **combined mean** $\bar{x}_{12}$ is the mean of all $n_1 + n_2$ observations together.`,
          t`$\bar{x}_{12} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$.`,
          t`Each mean is **weighted** by its group's size: multiplied by it before adding.`,
          t`Example: $30$ men of mean age $40$ and $20$ women of mean age $35$.`,
          t`$\bar{x}_{12} = \frac{1200 + 700}{50}$ $= \frac{1900}{50} = 38$ years.`,
        ],
      },
      {
        title: "Not the average of means",
        points: [
          t`The combined mean always lies between $\bar{x}_1$ and $\bar{x}_2$.`,
          t`It sits nearer the bigger group's mean: $38$ is nearer the men's $40$.`,
          t`The plain average of the two means, $\frac{\bar{x}_1 + \bar{x}_2}{2}$, ignores the sizes.`,
          t`Here it gives $\frac{40 + 35}{2} = 37.5$, not $38$.`,
          t`It is right only when the groups are the same size, $n_1 = n_2$.`,
        ],
      },
      {
        title: "Three groups, or a ratio",
        points: [
          t`For three or more groups, add every group's total and divide by all the sizes added.`,
          t`$\bar{x} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2 + n_3\bar{x}_3}{n_1 + n_2 + n_3}$.`,
          t`Sometimes only the **ratio** of the sizes is given, like $1 : 4$: group 2 is four times group 1.`,
          t`Take the sizes as $k$ and $4k$; the $k$ cancels, so use $1$ and $4$ as they are.`,
          t`Means $40$ and $50$ in the ratio $1 : 4$: $\frac{40 + 200}{5} = 48$.`,
        ],
      },
      {
        title: "Finding a missing mean",
        points: [
          t`Given the combined mean, first rebuild the grand total: $(n_1 + n_2)\bar{x}_{12}$.`,
          t`Take away each known group's total, $n_1\bar{x}_1$.`,
          t`What is left belongs to the missing group alone.`,
          t`So divide it by that group's own size, $n_2$, not by $n_1 + n_2$.`,
        ],
      },
      {
        title: "Finding the group sizes",
        points: [
          t`Call $d_1$ and $d_2$ the distances of $\bar{x}_1$ and $\bar{x}_2$ from $\bar{x}_{12}$.`,
          t`The groups balance like a see-saw: $n_1 d_1 = n_2 d_2$.`,
          t`So $n_1 : n_2 = d_2 : d_1$: each size goes with the **other** group's distance.`,
          t`Men $40$, women $35$, combined $38$: $d_1 = 2$, $d_2 = 3$, so men : women $= 3 : 2$.`,
          t`A ratio $3 : 2$ splits the whole into $3 + 2 = 5$ parts: $50$ people are $30$ and $20$.`,
          t`For percentages, split $100$: the men are $\frac{3}{5}$, that is $60\%$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Three sections of $20$, $30$ and $50$ students have a combined mean of $62$ marks. Sections A and B have means $50$ and $60$. Find the mean of section C.`,
      steps: [
        t`The grand total is $(20 + 30 + 50) \times 62$ $= 100 \times 62 = 6200$.`,
        t`Section A's total is $20 \times 50 = 1000$; section B's is $30 \times 60 = 1800$.`,
        t`Section C's total is $6200 - 1000 - 1800$ $= 3400$.`,
        t`Divide by section C's own size: $\frac{3400}{50} = 68$.`,
      ],
      answer: t`Section C's mean is $68$ marks.`,
    },
    visualSpec: t`Drag two weights, sized by the groups, along a number line: the balance point is the combined mean, and it slides towards the heavier group.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Taking the plain average of the group means as the combined mean, as if the groups were the same size",
      remediation: t`Weight each mean by its group's size: $\bar{x}_{12} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$. The plain average of the means is right only when the groups are the same size.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: "Pairing each group's size with the other group's mean",
      remediation: t`Multiply each mean by its own group's size. Working backwards, $n_1 : n_2 = d_2 : d_1$, so the bigger group is the one whose mean is nearer the combined mean.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Dividing the sum of the group totals by the number of groups",
      remediation: t`A mean divides a total by the number of observations. Here that is $n_1 + n_2$, every member of both groups, not the $2$ groups.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M4",
      mistake: "Finding a missing group's mean by dividing what is left of the grand total by the combined size",
      remediation: "Once the known group's total is taken away, what is left belongs to the missing group alone, so divide by that group's own size.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M5",
      mistake: t`Taking the ratio of the smaller group to the bigger, like $1 : 4$, as the smaller group's share of the whole`,
      remediation: t`A ratio $1 : 4$ splits the whole into $1 + 4 = 5$ parts, so the smaller group is $\frac{1}{5}$ of the whole, not $\frac{1}{4}$.`,
      fallback: { kind: "ext", topic: "ratio and proportion" },
    },
  ],
  engineNotes: [
    "C05-M1 gives the key when the groups are the same size, and C05-M2 when the sizes or the means are equal: diagnose them with unequal groups and unequal means.",
    "C05-M3 applies only to combining groups (ask mean), C05-M4 only to a missing group mean (ask gmean), C05-M5 only to finding the group sizes (ask split).",
    t`C05-Q2 changes 2019 Sep Q120's combined mean from $60$ to $61$ kg: with $60$ the key is $50$ and $100$, and both C05-M1 and C05-M5 give $75$ and $75$. 2017 Apr Q105 (the same class, the number of boys) becomes C05-Q4, which asks the girls' mean instead.`,
    t`C05-Q5 is the combined-mean half of 2018 Sep Q116; its combined variance belongs to Measures of Dispersion. The PYQ's key, None of the above, is right: the combined mean is ₹$1800$ but the combined variance is about $3091$, not $81$ or $100$.`,
    "2021 Apr Q112 and 2017 Apr Q102 (observations discarded from one group) belong to C04, correcting the mean.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q105" },
      stem: t`A data set of $n$ observations has mean $2M$, while another data set of $2n$ observations has mean $M$. The mean of the combined data set is:`,
      verify: { kind: "value", inputs: { ns: "(n, 2*n)", ms: "(2*M, M)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$2nM$`, correct: false, misconceptionId: "C05-M3", value: "2*M*n" },
        { key: "B", text: t`$\frac{4M}{3}$`, correct: true, value: "4*M/3" },
        { key: "C", text: t`$\frac{3M}{2}$`, correct: false, misconceptionId: "C05-M1", value: "3*M/2" },
        { key: "D", text: t`$\frac{5M}{3}$`, correct: false, misconceptionId: "C05-M2", value: "5*M/3" },
      ],
      solution: {
        steps: [
          t`The totals are $n \times 2M = 2nM$ and $2n \times M = 2nM$.`,
          t`The combined size is $n + 2n = 3n$.`,
          t`Combined mean $= \frac{2nM + 2nM}{3n}$ $= \frac{4M}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q120" },
      stem: t`The mean weight of $150$ students in a class is $61$ kg. The mean weight of the boys is $70$ kg and that of the girls is $55$ kg. The numbers of boys and girls in the class are, respectively:`,
      verify: { kind: "value", inputs: { N: "150", c: "61", m1: "70", m2: "55" }, params: { ask: "split" } },
      options: [
        { key: "A", text: t`$75$ and $75$`, correct: false, misconceptionId: "C05-M1", value: "(75, 75)" },
        { key: "B", text: t`$90$ and $60$`, correct: false, misconceptionId: "C05-M2", value: "(90, 60)" },
        { key: "C", text: t`$100$ and $50$`, correct: false, misconceptionId: "C05-M5", value: "(100, 50)" },
        { key: "D", text: t`$60$ and $90$`, correct: true, value: "(60, 90)" },
      ],
      solution: {
        steps: [
          t`The distances from $61$ are $70 - 61 = 9$ for the boys and $61 - 55 = 6$ for the girls.`,
          t`Each size goes with the other distance: boys : girls $= 6 : 9 = 2 : 3$.`,
          t`Split $150$ into $5$ parts of $30$: $60$ boys and $90$ girls.`,
          t`Check: $\frac{60 \times 70 + 90 \times 55}{150}$ $= \frac{9150}{150} = 61$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q103" },
      stem: t`The average age of a combined group of men and women is $25$ years. The average age of the men is $26$ years and that of the women is $21$ years. The percentages of men and women in the group are, respectively:`,
      verify: { kind: "value", inputs: { N: "100", c: "25", m1: "26", m2: "21" }, params: { ask: "split" } },
      options: [
        { key: "A", text: t`$80\%$ and $20\%$`, correct: true, value: "(80, 20)" },
        { key: "B", text: t`$50\%$ and $50\%$`, correct: false, misconceptionId: "C05-M1", value: "(50, 50)" },
        { key: "C", text: t`$20\%$ and $80\%$`, correct: false, misconceptionId: "C05-M2", value: "(20, 80)" },
        { key: "D", text: t`$75\%$ and $25\%$`, correct: false, misconceptionId: "C05-M5", value: "(75, 25)" },
      ],
      solution: {
        steps: [
          t`The distances from $25$ are $26 - 25 = 1$ for the men and $25 - 21 = 4$ for the women.`,
          t`Each size goes with the other distance: men : women $= 4 : 1$.`,
          t`Split $100\%$ into $5$ parts of $20\%$: $80\%$ men and $20\%$ women.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Apr Q105" },
      stem: t`The mean weight of $150$ students in a class is $60$ kg. The class has $50$ boys, whose mean weight is $70$ kg. The mean weight of the girls is:`,
      verify: { kind: "value", inputs: { N: "150", c: "60", n1: "50", m1: "70" }, params: { ask: "gmean" } },
      options: [
        { key: "A", text: t`$40$ kg`, correct: false, misconceptionId: "C05-M2", value: "40" },
        { key: "B", text: t`$\frac{110}{3}$ kg`, correct: false, misconceptionId: "C05-M4", value: "110/3" },
        { key: "C", text: t`$55$ kg`, correct: true, value: "55" },
        { key: "D", text: t`$50$ kg`, correct: false, misconceptionId: "C05-M1", value: "50" },
      ],
      solution: {
        steps: [
          t`The grand total is $150 \times 60 = 9000$ kg; the boys' total is $50 \times 70 = 3500$ kg.`,
          t`The girls' total is $9000 - 3500 = 5500$ kg, and there are $150 - 50 = 100$ girls.`,
          t`The girls' mean weight is $\frac{5500}{100} = 55$ kg.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q116" },
      stem: t`Firm A has $500$ workers with an average monthly wage of ₹$1860$. Firm B, in the same industry, has $600$ workers with an average monthly wage of ₹$1750$. The average monthly wage of all the workers of the two firms together is:`,
      verify: { kind: "value", inputs: { ns: "(500, 600)", ms: "(1860, 1750)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`₹$1800$`, correct: true, value: "1800" },
        { key: "B", text: t`₹$1805$`, correct: false, misconceptionId: "C05-M1", value: "1805" },
        { key: "C", text: t`₹$1810$`, correct: false, misconceptionId: "C05-M2", value: "1810" },
        { key: "D", text: t`₹$990000$`, correct: false, misconceptionId: "C05-M3", value: "990000" },
      ],
      solution: {
        steps: [
          t`Firm A's total is $500 \times 1860$ $= 930000$; firm B's is $600 \times 1750$ $= 1050000$.`,
          t`Together: $1980000$ rupees for $1100$ workers.`,
          t`The combined average is $1980000 \div 1100$, that is ₹$1800$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The numbers of students in sections A and B are in the ratio $2 : 3$. The mean marks of section A are $72$ and those of section B are $62$. The mean marks of all the students of the two sections together are:`,
      verify: { kind: "value", inputs: { ns: "(2, 3)", ms: "(72, 62)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$66$`, correct: true, value: "66" },
        { key: "B", text: t`$67$`, correct: false, misconceptionId: "C05-M1", value: "67" },
        { key: "C", text: t`$68$`, correct: false, misconceptionId: "C05-M2", value: "68" },
        { key: "D", text: t`$165$`, correct: false, misconceptionId: "C05-M3", value: "165" },
      ],
      solution: {
        steps: [
          t`Take the sizes as $2k$ and $3k$; the $k$ cancels, so use $2$ and $3$.`,
          t`Combined mean $= \frac{2 \times 72 + 3 \times 62}{2 + 3}$ $= \frac{144 + 186}{5}$.`,
          t`$= \frac{330}{5} = 66$ marks.`,
        ],
      },
    },
  ],
};
