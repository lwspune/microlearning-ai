import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "draft",
  hook: {
    prompt: t`One lift goes 5 floors up. Another goes 5 floors down, which we write as $-5$. Which lift travelled farther?`,
    reveal: t`Neither. Both travelled 5 floors. A distance has no sign: $|5| = 5$ and $|-5| = 5$. This is the absolute value.`,
  },
  explanation: {
    intuition: [
      t`The **absolute value** of a number is its distance from $0$ on the number line.`,
      t`We write it between two upright bars: $|x|$, read as the absolute value of $x$.`,
      t`$5$ and $-5$ are both $5$ units from $0$, so $|5| = 5$ and $|-5| = 5$.`,
      t`$0$ is at zero distance from itself, so $|0| = 0$.`,
      t`A distance is never negative, so $|x|$ is never negative.`,
      t`When the bars hold a calculation, work it out first, then take the absolute value.`,
    ],
    formal: [
      {
        title: "The rule for |x|",
        points: [
          t`If $x > 0$, then $|x| = x$. For example, $|3| = 3$.`,
          t`If $x = 0$, then $|x| = 0$.`,
          t`If $x < 0$, then $|x| = -x$. For example, $|-3| = -(-3) = 3$.`,
          t`Here $-x$ means the opposite of $x$. It is positive because $x$ is negative.`,
          t`So a positive number stays as it is: $|3|$ is $3$, never $-3$.`,
        ],
      },
      {
        title: "Work inside the bars first",
        points: [
          t`Simplify what is inside the bars to one number first.`,
          t`$|9 - 5| = |4| = 4$.`,
          t`$|8 - 13| = |-5| = 5$.`,
          t`Do not make each number positive first: $|8 - 13|$ is $5$, not $8 + 13$.`,
          t`Inside the bars, BODMAS still holds: multiply before you add or subtract.`,
          t`Only then take the absolute value of that one number.`,
        ],
      },
      {
        title: "Bars inside a longer expression",
        points: [
          t`Each pair of bars gives its own value. Then do the rest of the sum.`,
          t`$|8| - |-3| = 8 - 3$ $= 5$.`,
          t`$|8| \times |4| = 8 \times 4$ $= 32$.`,
          t`A minus sign outside the bars stays: $-|-5| = -5$, since $|-5| = 5$.`,
          t`Only what is between the bars becomes non-negative.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the value: $|2 \times 3 - 11| - |-4|$`,
      steps: [
        t`Work inside the first bars, multiplying first: $2 \times 3 = 6$, so $6 - 11 = -5$.`,
        t`$-5 < 0$, so $|-5| = -(-5) = 5$.`,
        t`$|-4| = 4$. The minus sign in front of these bars stays.`,
        t`So the value is $5 - 4 = 1$.`,
      ],
      answer: t`$|2 \times 3 - 11| - |-4| = 1$`,
    },
    visualSpec: t`Drag a point along a number line: a rope from 0 to the point shows its length as the absolute value, and the length stays positive as the point crosses to the left of 0.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Makes every number inside the bars positive before working it out: |a − b| = |a| + |b| (|8 − 13| = 21)",
      remediation: t`Work out what is inside the bars first, then take the absolute value: $|8 - 13| = |-5| = 5$, not $8 + 13$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: "Reads the bars as ordinary brackets and keeps a negative result (|8 − 13| = −5)",
      remediation: t`An absolute value is a distance, so it is never negative: $|-5| = 5$. After working inside the bars, take the distance from $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Thinks the bars always change the sign: |x| = −x for every x (|13| = −13)",
      remediation: t`$|x| = -x$ only when $x$ is negative. A positive number stays as it is: $|13| = 13$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Works the operations inside the bars from left to right, ignoring BODMAS (|12 − 5 × 3| = |7 × 3| = 21)",
      remediation: t`Inside the bars, BODMAS still holds: multiply before you subtract. $|12 - 5 \times 3| = |12 - 15|$ $= 3$.`,
      fallback: { kind: "ext", topic: "order of operations, BODMAS (Std VIII)" },
    },
    {
      id: "C12-M5",
      mistake: "Thinks the bars also cancel a minus sign just in front of them (8 − |−3| = 11, −|−5| = 5)",
      remediation: t`Only what is inside the bars becomes non-negative. A minus sign outside stays: $-|-5| = -5$, and $8 - |-3| = 8 - 3 = 5$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C12-M2 gives the key when every pair of bars holds a positive value, and C12-M3 when every pair holds a negative one; C12-M1 needs a sum inside the bars, C12-M4 mixed operations, C12-M5 a minus sign before bars. Each item uses only models that differ from the key and from each other on it.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q1(ii)" },
      stem: t`Find the value: $|4 - 9| - |-2|$`,
      verify: { kind: "value", inputs: {  }, params: { expr: "A(4-9)-A(-2)" } },
      options: [
        { key: "A", text: t`$11$`, correct: false, misconceptionId: "C12-M1", value: "11" },
        { key: "B", text: t`$-3$`, correct: false, misconceptionId: "C12-M2", value: "-3" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C12-M5", value: "7" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$|4 - 9| = |-5| = 5$ and $|-2| = 2$.`,
          t`The minus sign in front of $|-2|$ stays: $5 - 2$.`,
          t`So the value is $3$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q1(i)" },
      stem: t`Find the value: $|15 - 2| - |3 - 8|$`,
      verify: { kind: "value", inputs: {  }, params: { expr: "A(15-2)-A(3-8)" } },
      options: [
        { key: "A", text: t`$-18$`, correct: false, misconceptionId: "C12-M3", value: "-18" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C12-M1", value: "6" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C12-M2", value: "18" },
      ],
      solution: {
        steps: [
          t`$|15 - 2| = |13| = 13$, since $13 > 0$.`,
          t`$|3 - 8| = |-5| = 5$.`,
          t`So the value is $13 - 5 = 8$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q1(iii)" },
      stem: t`Find the value: $|7| \times |-4| - |-6|$`,
      verify: { kind: "value", inputs: {  }, params: { expr: "A(7)*A(-4)-A(-6)" } },
      options: [
        { key: "A", text: t`$34$`, correct: false, misconceptionId: "C12-M5", value: "34" },
        { key: "B", text: t`$22$`, correct: true, value: "22" },
        { key: "C", text: t`$-22$`, correct: false, misconceptionId: "C12-M2", value: "-22" },
        { key: "D", text: t`$-34$`, correct: false, misconceptionId: "C12-M3", value: "-34" },
      ],
      solution: {
        steps: [
          t`$|7| = 7$ and $|-4| = 4$, so $|7| \times |-4| = 28$.`,
          t`$|-6| = 6$, and the minus sign in front of it stays.`,
          t`So the value is $28 - 6 = 22$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q1(x)" },
      stem: t`Choose the correct alternative. The value of $|12 - (13 + 7) \times 4|$ is`,
      verify: { kind: "value", inputs: {  }, params: { expr: "A(12-(13+7)*4)" } },
      options: [
        { key: "A", text: t`$32$`, correct: false, misconceptionId: "C12-M4", value: "32" },
        { key: "B", text: t`$68$`, correct: true, value: "68" },
        { key: "C", text: t`$92$`, correct: false, misconceptionId: "C12-M1", value: "92" },
        { key: "D", text: t`$-68$`, correct: false, misconceptionId: "C12-M2", value: "-68" },
      ],
      solution: {
        steps: [
          t`Inside the bars, the bracket first: $13 + 7 = 20$.`,
          t`Then multiply: $20 \times 4 = 80$, so $12 - 80 = -68$.`,
          t`$|-68| = 68$, so the value is $68$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/2.5 SolvedEx.2" },
      stem: t`Find the value: $-|6 - 2 \times 5|$`,
      verify: { kind: "value", inputs: {  }, params: { expr: "-A(6-2*5)" } },
      options: [
        { key: "A", text: t`$-20$`, correct: false, misconceptionId: "C12-M4", value: "-20" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C12-M5", value: "4" },
        { key: "C", text: t`$-4$`, correct: true, value: "-4" },
        { key: "D", text: t`$-16$`, correct: false, misconceptionId: "C12-M1", value: "-16" },
      ],
      solution: {
        steps: [
          t`Inside the bars, multiply first: $2 \times 5 = 10$, so $6 - 10 = -4$.`,
          t`$|-4| = 4$.`,
          t`The minus sign outside the bars stays, so the value is $-4$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "authored" },
      stem: t`Find the value: $|3 - 4 \times 2| + |10 - 1|$`,
      verify: { kind: "value", inputs: {  }, params: { expr: "A(3-4*2)+A(10-1)" } },
      options: [
        { key: "A", text: t`$22$`, correct: false, misconceptionId: "C12-M1", value: "22" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C12-M3", value: "-4" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C12-M4", value: "11" },
        { key: "D", text: t`$14$`, correct: true, value: "14" },
      ],
      solution: {
        steps: [
          t`Multiply first: $3 - 4 \times 2 = 3 - 8 = -5$, so $|-5| = 5$.`,
          t`$|10 - 1| = |9| = 9$.`,
          t`So the value is $5 + 9 = 14$.`,
        ],
      },
    },
  ],
};
