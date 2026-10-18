import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The circle the powers of i sit on, and the initial arm: the arrow from 0 to 1. */
const cycleBase: FigureElement[] = [
  { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
  { kind: "segment", from: [0, 0], to: [1, 0], tone: "good" },
  { kind: "label", at: [0.75, 0], label: "start", labelAt: "n", tone: "good" },
];

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Work out $i^1, i^2, i^3, i^4, i^5$. **What do you notice?**`,
    reveal: t`They repeat every four: $i, -1, -i, 1$, then $i$ again. So every power of $i$ is one of just four values.`,
  },
  explanation: {
    intuition: [
      t`A **power** of $i$ multiplies $i$ by itself; the **exponent** counts the factors: $i^3 = i \cdot i \cdot i$.`,
      t`Multiplying by $i$ is a **quarter turn**: the arrow from $0$ to $1$ turns $90^\circ$ **anticlockwise**, against a clock's hands, to $i$.`,
      t`Recall $i^2 = -1$: a second quarter turn lands on $-1$.`,
      t`A third quarter turn lands straight down, on $i^3 = -i$.`,
      t`A fourth makes a full turn, back to $i^4 = 1$: the powers form a **cycle**, a loop that repeats.`,
      t`Every 4 factors make a full turn, so only the **remainder** on dividing the exponent by 4 matters.`,
    ],
    formal: [
      {
        title: "The first four powers",
        points: [
          t`$i^1 = i$: one quarter turn from $1$.`,
          t`$i^2 = -1$, by the definition of $i$.`,
          t`$i^3 = i^2 \cdot i = -1 \cdot i = -i$.`,
          t`$i^4 = (i^2)^2 = (-1)^2 = 1$, back at the start.`,
          t`Then $i^5 = i^4 \cdot i = i$, and the same four values come round again.`,
        ],
        figure: {
          alt: "The powers of i on a circle around the origin. An arm starts along the real axis at 1 and turns a quarter turn anticlockwise to i, then another to −1, another to −i, and a fourth back to 1.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            ...cycleBase,
            { kind: "turn", r: 1, to: 90, label: "i¹ = i", labelAt: "ne", step: 1 },
            { kind: "turn", r: 1, from: 90, to: 180, label: "i² = −1", labelAt: "nw", step: 2 },
            { kind: "turn", r: 1, from: 180, to: 270, label: "i³ = −i", labelAt: "se", step: 3 },
            { kind: "turn", r: 1, from: 270, to: 360, label: "i⁴ = 1", labelAt: "ne", step: 4 },
          ],
        },
      },
      {
        title: "Only the remainder matters",
        points: [
          t`Write any integer $n$ as $n = 4q + r$, where the **quotient** $q$ is an integer.`,
          t`The **remainder** $r$ is what is left over: $r \in \{0, 1, 2, 3\}$.`,
          t`Each block of four factors is $i^4 = 1$: a full turn, back to the start.`,
          t`So $i^n = i^r$: the blocks of four change nothing.`,
          t`For example, $6 = 4 \times 1 + 2$, so $i^6 = i^2 = -1$.`,
        ],
        figure: {
          alt: "An arm starts along the real axis at 1. Four quarter turns make one full turn, back to 1. Six quarter turns are one full turn and two more, landing at −1, where i² is.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            ...cycleBase,
            { kind: "turn", r: 1, to: 360, label: "i⁴ = 1", labelAt: "ne", step: 3 },
            { kind: "turn", r: 1, to: 540, label: "i⁶ = −1", labelAt: "nw", step: 5 },
          ],
        },
      },
      {
        title: "The value for each remainder",
        points: [
          t`Remainder $r$ means $r$ quarter turns from $1$, so $i^n = i^r$ exactly.`,
          t`Remainder $0$: $i^n = 1$.`,
          t`Remainder $1$: $i^n = i$.`,
          t`Remainder $2$: $i^n = -1$.`,
          t`Remainder $3$: $i^n = -i$.`,
        ],
        figure: {
          alt: "The four remainders on a circle around the origin: remainder 0 stays at 1; remainder 1 is one quarter turn to i; remainder 2 is two quarter turns to −1; remainder 3 is three quarter turns to −i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            ...cycleBase,
            { kind: "point", at: [1, 0], label: "r = 0: 1", labelAt: "ne", step: 2 },
            { kind: "turn", r: 1, to: 90, label: "r = 1: i", labelAt: "ne", step: 3 },
            { kind: "turn", r: 1, to: 180, label: "r = 2: −1", labelAt: "nw", step: 4 },
            { kind: "turn", r: 1, to: 270, label: "r = 3: −i", labelAt: "se", step: 5 },
          ],
        },
      },
      {
        title: "Negative exponents",
        points: [
          t`A **negative exponent** means one over the power: $i^{-2} = \frac{1}{i^2}$.`,
          t`Dividing by $i$ undoes a quarter turn, so it turns **clockwise**, the way a clock's hands go.`,
          t`Two clockwise quarter turns give $i^{-2} = \frac{1}{-1} = -1$.`,
          t`The same rule works, with the remainder $r$ still $0$, $1$, $2$ or $3$.`,
          t`Here $-2 = 4 \times (-1) + 2$, so $r = 2$.`,
          t`Remainder $2$ gives $-1$, which matches.`,
        ],
        figure: {
          alt: "An arm starts along the real axis at 1 and turns two quarter turns clockwise, landing at −1: that is i⁻². Two quarter turns anticlockwise, for remainder 2, land at the same point.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            ...cycleBase,
            { kind: "turn", r: 1, to: -180, tone: "bad", step: 3 },
            { kind: "label", at: [-1.15, -0.05], label: "i⁻² = −1", labelAt: "sw", tone: "bad", step: 3 },
            { kind: "turn", r: 1, to: 180, label: "r = 2", labelAt: "nw", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find $i^{58}$.`,
      steps: [
        t`Divide by 4: $58 = 4 \times 14 + 2$, so $r = 2$.`,
        t`$i^{58} = i^2 = -1$.`,
      ],
      answer: t`$-1$`,
      figure: {
        alt: "58 is 14 full turns plus 2 quarter turns, so i⁵⁸ lands where i² does, at −1.",
        view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
        elements: [
          ...cycleBase,
          { kind: "turn", r: 1, to: 180, label: "2 quarter turns", labelAt: "nw", step: 1 },
          { kind: "point", at: [-1, 0], step: 2 },
          { kind: "label", at: [-1.15, -0.05], label: "i⁵⁸ = −1", labelAt: "sw", step: 2 },
        ],
      },
    },
    figure: {
      alt: "The powers of i on a circle around the origin. An arm starts along the real axis at 1; each extra factor of i turns it a quarter turn anticlockwise, from 1 to i, −1, −i and back to 1.",
      view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
      elements: [
        ...cycleBase,
        { kind: "turn", r: 1, to: 90, label: "i¹ = i", labelAt: "ne", step: 2 },
        { kind: "turn", r: 1, from: 90, to: 180, label: "i² = −1", labelAt: "nw", step: 3 },
        { kind: "turn", r: 1, from: 180, to: 270, label: "i³ = −i", labelAt: "se", step: 4 },
        { kind: "turn", r: 1, from: 270, to: 360, label: "i⁴ = 1", labelAt: "ne", step: 5 },
      ],
    },
    visualSpec: t`A clock with four positions ($1$, $i$, $-1$, $-i$) and a hand that steps once for each factor of $i$. Typing an exponent spins the hand that many steps, showing that only the remainder matters.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`$i^3 = i$`,
      remediation: t`$i^3 = i^2\cdot i = -1\cdot i = -i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Off by one in the cycle: reading remainder $r$ as $i^{r+1}$`,
      remediation: t`Remainder $r$ means $i^n = i^r$ exactly: remainder 1 is $i$, remainder 2 is $-1$, remainder 3 is $-i$, remainder 0 is $1$.`,
      fallback: { kind: "ext", topic: "remainders on division" },
    },
    {
      id: "C02-M3",
      mistake: t`Pairing up $i^2 = -1$ and forgetting the leftover $i$ in an odd power`,
      remediation: t`For an odd power, one $i$ is left over after pairing: $i^{2k+1} = (i^2)^k\cdot i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Ignoring the minus in a negative exponent",
      remediation: t`$i^{-n} = \dfrac{1}{i^n}$, which is usually different from $i^n$. Find the remainder of $-n$ on division by 4 (between 0 and 3).`,
      fallback: { kind: "ext", topic: "negative exponents" },
    },
    {
      id: "C02-M5",
      mistake: t`$i^4 = -1$`,
      remediation: t`$i^4 = (i^2)^2 = (-1)^2 = 1$, so each full block of four powers is $1$ and only the remainder matters.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "authored" },
      stem: t`$i^{43} = ?$`,
      verify: { kind: "value", inputs: { n: "43" } },
      options: [
        { key: "A", text: t`$- i$`, correct: true, value: "-I" },
        { key: "B", text: t`$i$`, correct: false, misconceptionId: "C02-M1", value: "I" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
      ],
      solution: {
        steps: [
          t`Divide by 4: $43 = 4 \times 10 + 3$, so $r = 3$.`,
          t`$i^{43} = i^3 = i^2 \cdot i = -i$.`,
        ],
        figure: {
          alt: "The four powers of i on a circle a quarter turn apart. 43 has remainder 3, so it is 3 quarter turns round from 1 and lands at −i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 270, label: "3 quarter turns", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, -1], label: "i⁴³ = −i", labelAt: "se", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`$i^{-1} = ?$`,
      verify: { kind: "value", inputs: { n: "-1" } },
      options: [
        { key: "A", text: t`$i$`, correct: false, misconceptionId: "C02-M4", value: "I" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
        { key: "D", text: t`$- i$`, correct: true, value: "-I" },
      ],
      solution: {
        steps: [
          t`Find the remainder between 0 and 3: $-1 = 4 \times (-1) + 3$, so $r = 3$.`,
          t`$i^{-1} = i^3 = -i$. Check: $i \cdot (-i) = -i^2 = 1$.`,
        ],
        figure: {
          alt: "The four powers of i on a circle a quarter turn apart. −1 has remainder 3, so it is 3 quarter turns round from 1 and lands at −i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 270, label: "3 quarter turns", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, -1], label: "i⁻¹ = −i", labelAt: "se", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`$i^{37} = ?$`,
      verify: { kind: "value", inputs: { n: "37" } },
      options: [
        { key: "A", text: t`$i$`, correct: true, value: "I" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C02-M2", value: "-1" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M3", value: "1" },
        { key: "D", text: t`$- i$`, correct: false, misconceptionId: "C02-M5", value: "-I" },
      ],
      solution: {
        steps: [
          t`Divide by 4: $37 = 4 \times 9 + 1$, so $r = 1$.`,
          t`$i^{37} = i^1 = i$.`,
        ],
        figure: {
          alt: "The four powers of i on a circle a quarter turn apart. 37 has remainder 1, so it is 1 quarter turn round from 1 and lands at i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 90, label: "1 quarter turn", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 1], label: "i³⁷ = i", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`$i^{-3} = ?$`,
      verify: { kind: "value", inputs: { n: "-3" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C02-M3", value: "1" },
        { key: "B", text: t`$i$`, correct: true, value: "I" },
        { key: "C", text: t`$- i$`, correct: false, misconceptionId: "C02-M4", value: "-I" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M2", value: "-1" },
      ],
      solution: {
        steps: [
          t`Find the remainder between 0 and 3: $-3 = 4 \times (-1) + 1$, so $r = 1$.`,
          t`$i^{-3} = i^1 = i$. Check: $i^3 \cdot i = i^4 = 1$.`,
        ],
        figure: {
          alt: "The four powers of i on a circle a quarter turn apart. −3 has remainder 1, so it is 1 quarter turn round from 1 and lands at i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 90, label: "1 quarter turn", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 1], label: "i⁻³ = i", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`$i^{99} = ?$`,
      verify: { kind: "value", inputs: { n: "99" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
        { key: "B", text: t`$- i$`, correct: true, value: "-I" },
        { key: "C", text: t`$i$`, correct: false, misconceptionId: "C02-M1", value: "I" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
      ],
      solution: {
        steps: [
          t`Divide by 4: $99 = 4 \times 24 + 3$, so $r = 3$.`,
          t`$i^{99} = i^3 = -i$.`,
        ],
        figure: {
          alt: "The four powers of i on a circle a quarter turn apart. 99 has remainder 3, so it is 3 quarter turns round from 1 and lands at −i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 270, label: "3 quarter turns", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, -1], label: "i⁹⁹ = −i", labelAt: "se", step: 2 },
          ],
        },
      },
    },
  ],
};
