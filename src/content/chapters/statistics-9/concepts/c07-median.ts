import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Five players scored $4$, $6$, $8$, $13$ and $94$ runs. Their mean is $25$, more than four of the five scores. Which single score better describes a typical player?`,
    reveal: t`The middle score, $8$: two players scored less and two scored more. This middle value is the **median**, and one huge score does not pull it up.`,
  },
  explanation: {
    intuition: [
      t`The **median** is the middle value of the data.`,
      t`First arrange the observations in **ascending order**, smallest to largest.`,
      t`Then half the observations lie below the median and half lie above it.`,
      t`With an odd number of observations, one value stands exactly in the middle.`,
      t`With an even number, two values share the middle; the median is their mean.`,
      t`For $3$, $5$, $9$ the median is $5$; for $3$, $5$, $9$, $11$ it is $7$.`,
    ],
    formal: [
      {
        title: "Arrange the data first",
        points: [
          t`Write the observations in ascending order before looking for the middle.`,
          t`Keep every repeated value: $5$, $7$, $7$ has three observations, not two.`,
          t`Count the observations; call the count $n$.`,
          t`The median is a **value** of the data, never a position or a count.`,
        ],
      },
      {
        title: "Odd number of observations",
        points: [
          t`When $n$ is odd, the middle observation is the $\left(\dfrac{n + 1}{2}\right)$th one.`,
          t`That observation itself is the median.`,
          t`For $n = 9$, the middle is the $\dfrac{9 + 1}{2} = 5$th observation.`,
          t`Data $12$, $15$, $20$, $26$, $31$: $n = 5$, so the median is the $3$rd value, $20$.`,
        ],
      },
      {
        title: "Even number of observations",
        points: [
          t`When $n$ is even, the $\dfrac{n}{2}$th and $\left(\dfrac{n}{2} + 1\right)$th observations share the middle.`,
          t`Median $=$ the mean of these two middle observations.`,
          t`Add the two middle values, then divide the sum by $2$.`,
          t`Data $4$, $8$, $11$, $15$, $17$, $20$: $n = 6$, so take the $3$rd and $4$th values.`,
          t`Median $= \dfrac{11 + 15}{2} = \dfrac{26}{2} = 13$.`,
        ],
      },
      {
        title: "Finding an unknown observation",
        points: [
          t`Sometimes the data is in order with an unknown $x$ in the middle, and the median is given.`,
          t`Write the median in terms of $x$, using the middle observation or observations.`,
          t`Make it equal to the given median and solve for $x$.`,
          t`Example: $8$ observations, $4$th $= x$, $5$th $= x + 4$, median $20$.`,
          t`$\dfrac{x + (x + 4)}{2} = 20$, so $2x + 4 = 40$ and $x = 18$.`,
          t`Check that the data is still in ascending order with this $x$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the median of $18$, $12$, $25$, $16$, $30$, $21$, $14$, $27$.`,
      steps: [
        t`Ascending order: $12$, $14$, $16$, $18$, $21$, $25$, $27$, $30$.`,
        t`There are $8$ observations, an even number.`,
        t`So the $\dfrac{8}{2} = 4$th and the $5$th observations are in the middle: $18$ and $21$.`,
        t`Median $= \dfrac{18 + 21}{2} = \dfrac{39}{2} = 19.5$.`,
      ],
      answer: t`The median is $19.5$.`,
    },
    visualSpec: t`A row of number cards that the student sorts by dragging; a marker then slides to the middle card, or between the two middle cards and shows their mean.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Takes the middle of the list as it is given, without arranging the data in order.",
      remediation: "The median is the middle of the data **in ascending order**. Arrange the observations first, then find the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`With an even number of observations, takes only one middle value (the $\dfrac{n}{2}$th) as the median.`,
      remediation: t`When the count is even, **two** observations share the middle. The median is their mean: add them and divide by $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Gives the middle position $\dfrac{n + 1}{2}$ as the median, instead of the observation at that position.`,
      remediation: t`$\dfrac{n + 1}{2}$ only tells you **where** the middle is. The median is the observation standing in that place.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Finds the mean (sum of observations divided by their number) instead of the median.",
      remediation: "The mean uses every observation; the median is only the **middle** value of the ordered data. Arrange the data and take the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`With an even number of observations, adds the two middle values but forgets to divide by $2$.`,
      remediation: t`The median is the **mean** of the two middle values, so their sum must be divided by $2$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q2" },
      stem: t`Find the median of the observations $59$, $75$, $68$, $70$, $74$, $75$, $83$.`,
      verify: { kind: "value", inputs: { obs: "(59, 75, 68, 70, 74, 75, 83)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C07-M3", value: "4" },
        { key: "B", text: t`$72$`, correct: false, misconceptionId: "C07-M4", value: "72" },
        { key: "C", text: t`$74$`, correct: true, value: "74" },
        { key: "D", text: t`$70$`, correct: false, misconceptionId: "C07-M1", value: "70" },
      ],
      solution: {
        steps: [
          t`Ascending order: $59$, $68$, $70$, $74$, $75$, $75$, $83$.`,
          t`There are $7$ observations, an odd number, so the middle one is the $\dfrac{7 + 1}{2} = 4$th.`,
          t`The $4$th observation is $74$, so the median is $74$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(ix)" },
      stem: t`What is the median of $7$, $10$, $7$, $5$, $9$, $10$?`,
      verify: { kind: "value", inputs: { obs: "(7, 10, 7, 5, 9, 10)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C07-M1", value: "6" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C07-M2", value: "7" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C07-M5", value: "16" },
        { key: "D", text: t`$8$`, correct: true, value: "8" },
      ],
      solution: {
        steps: [
          t`Ascending order: $5$, $7$, $7$, $9$, $10$, $10$.`,
          t`There are $6$ observations, so the $3$rd and $4$th are in the middle: $7$ and $9$.`,
          t`Median $= \dfrac{7 + 9}{2} = \dfrac{16}{2} = 8$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Central Tendency SolvedEx.4" },
      stem: t`Find the median of the data $30$, $25$, $32$, $23$, $48$, $36$, $40$, $33$, $21$, $43$.`,
      verify: { kind: "value", inputs: { obs: "(30, 25, 32, 23, 48, 36, 40, 33, 21, 43)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$33.1$`, correct: false, misconceptionId: "C07-M4", value: "331/10" },
        { key: "B", text: t`$32.5$`, correct: true, value: "65/2" },
        { key: "C", text: t`$32$`, correct: false, misconceptionId: "C07-M2", value: "32" },
        { key: "D", text: t`$5.5$`, correct: false, misconceptionId: "C07-M3", value: "11/2" },
      ],
      solution: {
        steps: [
          t`Ascending order: $21$, $23$, $25$, $30$, $32$, $33$, $36$, $40$, $43$, $48$.`,
          t`There are $10$ observations, so the $5$th and $6$th are in the middle: $32$ and $33$.`,
          t`Median $= \dfrac{32 + 33}{2} = \dfrac{65}{2} = 32.5$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q8" },
      stem: t`These $10$ observations are in ascending order: $2$, $3$, $5$, $9$, $x + 1$, $x + 3$, $14$, $16$, $19$, $25$. The median of the data is $11$. Find $x$.`,
      verify: { kind: "value", inputs: { known: "(2, 3, 5, 9, 14, 16, 19, 25)", a1: "1", b1: "1", a2: "1", b2: "3", M: "11" }, params: { kind: "unknown" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C07-M2", value: "10" },
        { key: "C", text: t`$3.5$`, correct: false, misconceptionId: "C07-M5", value: "7/2" },
        { key: "D", text: t`$6.5$`, correct: false, misconceptionId: "C07-M4", value: "13/2" },
      ],
      solution: {
        steps: [
          t`There are $10$ observations, so the median is the mean of the $5$th and $6$th: $x + 1$ and $x + 3$.`,
          t`$\dfrac{(x + 1) + (x + 3)}{2} = 11$, so $2x + 4 = 22$.`,
          t`$2x = 18$, so $x = 9$.`,
          t`Check: the $5$th and $6$th become $10$ and $12$, still in order, and their mean is $11$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q8" },
      stem: t`These $10$ observations are in ascending order: $45$, $47$, $50$, $52$, $x$, $x + 2$, $60$, $62$, $63$, $74$. Their median is $53$. Find $x$.`,
      verify: { kind: "value", inputs: { known: "(45, 47, 50, 52, 60, 62, 63, 74)", a1: "1", b1: "0", a2: "1", b2: "2", M: "53" }, params: { kind: "unknown" } },
      options: [
        { key: "A", text: t`$37.5$`, correct: false, misconceptionId: "C07-M4", value: "75/2" },
        { key: "B", text: t`$53$`, correct: false, misconceptionId: "C07-M2", value: "53" },
        { key: "C", text: t`$25.5$`, correct: false, misconceptionId: "C07-M5", value: "51/2" },
        { key: "D", text: t`$52$`, correct: true, value: "52" },
      ],
      solution: {
        steps: [
          t`There are $10$ observations, so the median is the mean of the $5$th and $6$th: $x$ and $x + 2$.`,
          t`$\dfrac{x + (x + 2)}{2} = 53$, so $2x + 2 = 106$.`,
          t`$2x = 104$, so $x = 52$.`,
          t`Check: the $4$th to $7$th observations become $52$, $52$, $54$, $60$, still in order.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Central Tendency SolvedEx.3" },
      stem: t`Find the median of $54$, $63$, $87$, $66$, $98$, $72$, $92$.`,
      verify: { kind: "value", inputs: { obs: "(54, 63, 87, 66, 98, 72, 92)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$72$`, correct: true, value: "72" },
        { key: "B", text: t`$76$`, correct: false, misconceptionId: "C07-M4", value: "76" },
        { key: "C", text: t`$66$`, correct: false, misconceptionId: "C07-M1", value: "66" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C07-M3", value: "4" },
      ],
      solution: {
        steps: [
          t`Ascending order: $54$, $63$, $66$, $72$, $87$, $92$, $98$.`,
          t`There are $7$ observations, so the middle one is the $\dfrac{7 + 1}{2} = 4$th.`,
          t`The $4$th observation is $72$, so the median is $72$.`,
        ],
      },
    },
  ],
};
