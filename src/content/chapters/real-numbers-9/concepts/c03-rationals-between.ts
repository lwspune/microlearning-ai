import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Name a number between $0.7$ and $0.8$. Now name one between $0.7$ and $0.71$. **Can you always find one more?**`,
    reveal: t`$0.75$ works, and so does $0.705$. Add a decimal place whenever you need room: you never run out. Between any two rational numbers lie infinitely many more.`,
  },
  explanation: {
    intuition: [
      t`A **rational number** can be written as $\frac{p}{q}$, where $p$ and $q$ are integers and $q \ne 0$.`,
      t`No whole number lies between $2$ and $3$, but $2.5$ does.`,
      t`To find a number between two numbers, go halfway: take their **average**.`,
      t`The average of two rational numbers is rational, and it lies between them.`,
      t`Then go halfway again, between the average and one end, and again.`,
      t`This never stops, so between any two rational numbers lie **infinitely many** rational numbers.`,
    ],
    formal: [
      {
        title: "The average lies between",
        points: [
          t`The **average** of two numbers is their sum divided by $2$: $\frac{a + b}{2}$.`,
          t`If $a < b$, their average lies exactly halfway between $a$ and $b$.`,
          t`Example: between $\frac{1}{5}$ and $\frac{1}{2}$, first add over a common denominator.`,
          t`$\frac{1}{5} + \frac{1}{2}$ $= \frac{2}{10} + \frac{5}{10}$ $= \frac{7}{10}$, never $\frac{2}{7}$.`,
          t`Halve the sum: $\frac{7}{10} \div 2 = \frac{7}{20}$.`,
          t`Check: $\frac{4}{20} < \frac{7}{20} < \frac{10}{20}$, so it lies between them.`,
        ],
      },
      {
        title: "Halfway is not half the gap",
        points: [
          t`The **gap** between two numbers is the larger minus the smaller.`,
          t`The gap between $\frac{1}{5}$ and $\frac{1}{2}$ is $\frac{1}{2} - \frac{1}{5} = \frac{3}{10}$.`,
          t`Half the gap, $\frac{3}{20}$, is how far to move from the smaller number.`,
          t`$\frac{1}{5} + \frac{3}{20}$ $= \frac{4}{20} + \frac{3}{20}$ $= \frac{7}{20}$, the same as the average.`,
          t`So halfway is $\frac{7}{20}$, not $\frac{3}{20}$.`,
        ],
      },
      {
        title: "More decimal places",
        points: [
          t`No number with one decimal place lies between $1.6$ and $1.7$.`,
          t`A zero at the end changes nothing: $1.6 = 1.60$ and $1.7 = 1.70$.`,
          t`Now $1.61, 1.62, \ldots, 1.69$ lie between them: nine numbers.`,
          t`With three places, $1.600$ and $1.700$, there are $99$ of them.`,
          t`Each new place gives more, like $1.615$ between $1.61$ and $1.62$.`,
          t`The places never run out, so **infinitely many** rational numbers lie between $1.6$ and $1.7$.`,
        ],
      },
      {
        title: "Negative numbers",
        points: [
          t`On a number line, the number further to the left is smaller.`,
          t`So $-1.7 < -1.6$, even though $7 > 6$.`,
          t`The numbers between them are the $x$ with $-1.70 < x < -1.60$.`,
          t`For example, $-1.62$, $-1.65$ and $-1.68$ lie between them.`,
          t`The average works too: $-1.7 + (-1.6) = -3.3$ and $-3.3 \div 2 = -1.65$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write three rational numbers between $\frac{1}{3}$ and $\frac{1}{2}$.`,
      steps: [
        t`Use a common denominator: $\frac{1}{3} = \frac{2}{6}$ and $\frac{1}{2} = \frac{3}{6}$. No sixth lies between them.`,
        t`Their average: $\frac{2}{6} + \frac{3}{6} = \frac{5}{6}$, and $\frac{5}{6} \div 2 = \frac{5}{12}$.`,
        t`For more, use a bigger denominator: $\frac{1}{3} = \frac{8}{24}$ and $\frac{1}{2} = \frac{12}{24}$.`,
        t`So $\frac{9}{24}$, $\frac{10}{24}$ and $\frac{11}{24}$ lie between them, and $\frac{10}{24} = \frac{5}{12}$ is the average.`,
      ],
      answer: t`$\frac{3}{8}$, $\frac{5}{12}$ and $\frac{11}{24}$ (and infinitely many more).`,
    },
    visualSpec: t`Drag two points on a number line; each tap drops their average between them, again and again, and zooming in always shows room for more.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Counts only the numbers written with the given decimal places, so thinks no number lies between 5.2 and 5.3",
      remediation: t`Write the numbers with one more decimal place: $1.6 = 1.60$ and $1.7 = 1.70$. Then $1.61, 1.62, \ldots$ lie between them.`,
      fallback: { kind: "ext", topic: "equivalent decimals, such as 5.2 = 5.20 (Std VIII)" },
    },
    {
      id: "C03-M2",
      mistake: "Adds one decimal place and thinks that list holds every number between, so counts 9 between 5.2 and 5.3",
      remediation: t`You can always add another decimal place: $1.615$ lies between $1.61$ and $1.62$. The list never ends, so there are infinitely many.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks exactly one number lies between two numbers: their average",
      remediation: "The average is only one of them. Take the average of it and either end and you get another, and so on without end.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Finds halfway by adding the two numbers and forgets to divide by 2",
      remediation: t`Halfway is the **average**: add the two numbers, then divide by $2$. Check that your answer lies between them.`,
      fallback: { kind: "ext", topic: "the average of two numbers (Std VIII)" },
    },
    {
      id: "C03-M5",
      mistake: "Takes half the gap between the two numbers as the halfway number",
      remediation: t`Half the gap is how far to move, not where you land. Add it to the smaller number, or take $\frac{a + b}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Adds two fractions by adding the numerators and adding the denominators, then halves",
      remediation: t`Add fractions over a common denominator: $\frac{1}{5} + \frac{1}{2} = \frac{2}{10} + \frac{5}{10}$, which is $\frac{7}{10}$, not $\frac{2}{7}$.`,
      fallback: { kind: "ext", topic: "adding fractions with different denominators (Std VIII)" },
    },
  ],
  engineNotes: [
    "C03-M1, C03-M2 and C03-M3 apply only to 'how many lie between' items (Q1, Q2); C03-M4, C03-M5 and C03-M6 only to 'halfway' items (Q3 to Q6).",
    "C03-M5 gives the key when the smaller number is 0: draw halfway items whose ends are both non-zero.",
    "C03-M1 and C03-M3 agree when exactly one number with the given decimal places lies between (like 2.4 and 2.6): avoid such pairs.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.2 Q4(iii)" },
      stem: t`How many rational numbers lie between $5.2$ and $5.3$?`,
      verify: { kind: "value", inputs: { a: "52/10", b: "53/10" }, params: { ask: "count", d: "1" } },
      options: [
        { key: "A", text: t`$9$`, correct: false, misconceptionId: "C03-M2", value: "9" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "C", text: t`Infinitely many`, correct: true, value: "infinitely_many" },
        { key: "D", text: t`None`, correct: false, misconceptionId: "C03-M1", value: "0" },
      ],
      solution: {
        steps: [
          t`Write both with two decimal places: $5.2 = 5.20$ and $5.3 = 5.30$.`,
          t`Now $5.21, 5.22, \ldots, 5.29$ lie between them.`,
          t`With three places, $5.201, 5.202, \ldots$ lie between too, and the places never run out.`,
          t`So infinitely many rational numbers lie between $5.2$ and $5.3$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.2 Q4(ii)" },
      stem: t`How many rational numbers lie between $-2.3$ and $-2.33$?`,
      verify: { kind: "value", inputs: { a: "-23/10", b: "-233/100" }, params: { ask: "count", d: "2" } },
      options: [
        { key: "A", text: t`$29$`, correct: false, misconceptionId: "C03-M2", value: "29" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "C", text: t`Infinitely many`, correct: true, value: "infinitely_many" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C03-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`On a number line, $-2.33$ is to the left of $-2.3$, so $-2.33 < -2.3$.`,
          t`Write both with three places: $-2.330 < x < -2.300$, so $-2.310$ and $-2.325$ lie between.`,
          t`More places always give more, like $-2.3255$, so infinitely many rational numbers lie between them.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Which rational number lies exactly halfway between $\frac{1}{4}$ and $\frac{2}{3}$?`,
      verify: { kind: "value", inputs: { a: "1/4", b: "2/3" }, params: { ask: "mid" } },
      options: [
        { key: "A", text: t`$\frac{11}{12}$`, correct: false, misconceptionId: "C03-M4", value: "11/12" },
        { key: "B", text: t`$\frac{5}{24}$`, correct: false, misconceptionId: "C03-M5", value: "5/24" },
        { key: "C", text: t`$\frac{3}{14}$`, correct: false, misconceptionId: "C03-M6", value: "3/14" },
        { key: "D", text: t`$\frac{11}{24}$`, correct: true, value: "11/24" },
      ],
      solution: {
        steps: [
          t`Use the denominator $12$: $\frac{1}{4} = \frac{3}{12}$ and $\frac{2}{3} = \frac{8}{12}$.`,
          t`Add: $\frac{3}{12} + \frac{8}{12} = \frac{11}{12}$.`,
          t`Halve: $\frac{11}{12} \div 2 = \frac{11}{24}$.`,
          t`Check: $\frac{6}{24} < \frac{11}{24} < \frac{16}{24}$. Halfway is $\frac{11}{24}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`Which rational number lies exactly halfway between $-\frac{3}{4}$ and $\frac{1}{2}$?`,
      verify: { kind: "value", inputs: { a: "-3/4", b: "1/2" }, params: { ask: "mid" } },
      options: [
        { key: "A", text: t`$\frac{5}{8}$`, correct: false, misconceptionId: "C03-M5", value: "5/8" },
        { key: "B", text: t`$- \frac{1}{6}$`, correct: false, misconceptionId: "C03-M6", value: "-1/6" },
        { key: "C", text: t`$- \frac{1}{8}$`, correct: true, value: "-1/8" },
        { key: "D", text: t`$- \frac{1}{4}$`, correct: false, misconceptionId: "C03-M4", value: "-1/4" },
      ],
      solution: {
        steps: [
          t`Add: $-\frac{3}{4} + \frac{1}{2}$ $= -\frac{3}{4} + \frac{2}{4}$ $= -\frac{1}{4}$.`,
          t`Halve: $-\frac{1}{4} \div 2 = -\frac{1}{8}$.`,
          t`Check: $-\frac{6}{8} < -\frac{1}{8} < \frac{4}{8}$. Halfway is $-\frac{1}{8}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Which rational number lies exactly halfway between $-\frac{2}{5}$ and $-\frac{1}{3}$?`,
      verify: { kind: "value", inputs: { a: "-2/5", b: "-1/3" }, params: { ask: "mid" } },
      options: [
        { key: "A", text: t`$- \frac{11}{30}$`, correct: true, value: "-11/30" },
        { key: "B", text: t`$- \frac{11}{15}$`, correct: false, misconceptionId: "C03-M4", value: "-11/15" },
        { key: "C", text: t`$\frac{1}{30}$`, correct: false, misconceptionId: "C03-M5", value: "1/30" },
        { key: "D", text: t`$- \frac{3}{16}$`, correct: false, misconceptionId: "C03-M6", value: "-3/16" },
      ],
      solution: {
        steps: [
          t`Use the denominator $15$: $-\frac{2}{5} = -\frac{6}{15}$ and $-\frac{1}{3} = -\frac{5}{15}$.`,
          t`Add: $-\frac{6}{15} - \frac{5}{15}$ $= -\frac{11}{15}$.`,
          t`Halve: $-\frac{11}{15} \div 2 = -\frac{11}{30}$.`,
          t`Check: $-\frac{12}{30} < -\frac{11}{30} < -\frac{10}{30}$. Halfway is $-\frac{11}{30}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`Which rational number lies exactly halfway between $-1$ and $\frac{2}{5}$?`,
      verify: { kind: "value", inputs: { a: "-1", b: "2/5" }, params: { ask: "mid" } },
      options: [
        { key: "A", text: t`$- \frac{3}{10}$`, correct: true, value: "-3/10" },
        { key: "B", text: t`$- \frac{3}{5}$`, correct: false, misconceptionId: "C03-M4", value: "-3/5" },
        { key: "C", text: t`$\frac{7}{10}$`, correct: false, misconceptionId: "C03-M5", value: "7/10" },
        { key: "D", text: t`$\frac{1}{12}$`, correct: false, misconceptionId: "C03-M6", value: "1/12" },
      ],
      solution: {
        steps: [
          t`Write $-1$ as $-\frac{5}{5}$. Add: $-\frac{5}{5} + \frac{2}{5} = -\frac{3}{5}$.`,
          t`Halve: $-\frac{3}{5} \div 2 = -\frac{3}{10}$.`,
          t`Check: $-\frac{10}{10} < -\frac{3}{10} < \frac{4}{10}$. Halfway is $-\frac{3}{10}$.`,
        ],
      },
    },
  ],
};
