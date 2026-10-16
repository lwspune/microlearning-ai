import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** A tick on the number line at `x`, its number below. */
const tick = (x: number): FigureElement[] => [
  { kind: "segment", from: [x, -0.1], to: [x, 0.1], tone: "muted" },
  { kind: "label", at: [x, -0.05], label: x < 0 ? `−${-x}` : `${x}`, labelAt: "s", tone: "muted" },
];

/** The real number line from −5 to 5, ticked at the whole numbers from −4 to 4. */
const numberLine: FigureElement[] = [
  { kind: "segment", from: [-5.2, 0], to: [5.2, 0], tone: "muted" },
  ...[-4, -3, -2, -1, 0, 1, 2, 3, 4].flatMap(tick),
];

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`No real number squares to $-1$: squares of real numbers are never negative. **So what could $\sqrt{-1}$ be?**`,
    reveal: t`A new number, called $i$, defined by $i^2 = -1$. Then every negative number has a square root: $\sqrt{-49} = 7i$, because $(7i)^2 = 49i^2 = -49$.`,
  },
  explanation: {
    intuition: [
      t`The **square** of a number is that number times itself: $2^2 = 4$ and $(-2)^2 = 4$.`,
      t`The **real numbers** are the numbers on the number line, and their squares are never negative.`,
      t`So no real number squares to $-1$: the negative side of the line is a gap.`,
      t`We add one new number, $i$, the **imaginary unit**, defined by $i^2 = -1$.`,
      t`Then every negative number has a square root: a real square root times $i$.`,
      t`Treat $i$ like a letter, and replace $i^2$ by $-1$ whenever it appears.`,
    ],
    figure: {
      alt: "A number line from −4 to 4. Arcs carry 2 and −2 to the same square, 4. The squares of real numbers fill the side from 0 rightwards; the negative side is a gap that no real square reaches. The new number i is defined so that its square, i² = −1, lands in that gap.",
      axes: "none",
      view: { x: [-5.6, 5.6], y: [-1.6, 3.7] },
      elements: [
        ...numberLine,
        { kind: "point", at: [-2, 0], step: 1 },
        { kind: "point", at: [2, 0], step: 1 },
        { kind: "arc", centre: [1, 0], r: 3, from: 0, to: 180, label: "(−2)² = 4", labelAt: "n", step: 1 },
        { kind: "arc", centre: [3, 0], r: 1, from: 0, to: 180, label: "2² = 4", labelAt: "nw", step: 1 },
        { kind: "point", at: [4, 0], step: 1 },
        { kind: "segment", from: [0, 0], to: [5, 0], tone: "good", step: 2 },
        { kind: "label", at: [2.5, -0.55], label: "real squares", labelAt: "s", tone: "good", step: 2 },
        { kind: "segment", from: [-5, 0], to: [0, 0], tone: "bad", step: 3 },
        { kind: "label", at: [-2.5, -0.55], label: "no real squares", labelAt: "s", tone: "bad", step: 3 },
        { kind: "point", at: [-1, 0], label: "i² = −1", labelAt: "n", step: 4 },
      ],
    },
    formal: [
      {
        title: "Square roots of negative numbers",
        points: [
          t`A **square root** of a number is a number whose square is that number.`,
          t`For $a > 0$, $(i\sqrt a)^2 = i^2 \cdot a = -a$.`,
          t`So $i\sqrt a$ is a square root of $-a$, and so is $-i\sqrt a$.`,
          t`The **principal root** $\sqrt{-a}$ is the one with the plus sign: $\sqrt{-a} = i\sqrt a$.`,
          t`For example, $\sqrt{-49} = i\sqrt{49} = 7i$.`,
        ],
      },
      {
        title: "When the product rule fails",
        points: [
          t`The **product rule** for roots says $\sqrt a\,\sqrt b = \sqrt{ab}$.`,
          t`It holds when at least one of $a$ and $b$ is non-negative, that is, zero or more.`,
          t`It **fails when both are negative**.`,
          t`For $\sqrt{-5}\cdot\sqrt{-20}$, the rule would give $\sqrt{(-5)(-20)} = \sqrt{100}$.`,
          t`That is $+10$, and it is wrong: the next slide finds $-10$.`,
        ],
      },
      {
        title: "Convert each root first",
        points: [
          t`Write each root in the form $i\sqrt{\ }$ first, then multiply.`,
          t`$\sqrt{-5} = i\sqrt5$ and $\sqrt{-20} = i\sqrt{20}$.`,
          t`Multiply: $(i\sqrt5)(i\sqrt{20})$ $= i^2\sqrt{100}$.`,
          t`Use $i^2 = -1$: the product is $-10$, not $+10$.`,
          t`The two $i$'s give $i^2 = -1$: that minus sign is what the product rule loses.`,
        ],
      },
    ],
    worked: {
      prompt: t`Simplify $\sqrt{-18}\cdot\sqrt{-2}$.`,
      steps: [
        t`Convert each root first: $\sqrt{-18} = i\sqrt{18}$ and $\sqrt{-2} = i\sqrt2$.`,
        t`Multiply: $i^2\sqrt{36} = 6i^2$.`,
        t`Use $i^2 = -1$: the product is $-6$.`,
      ],
      answer: t`$-6$`,
    },
    visualSpec: t`A number line with a 'square it' button: every point lands on the non-negative side. A vertical axis then appears for $i$, and squaring the point $i$ lands exactly on $-1$, filling the gap.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Using $\sqrt a\,\sqrt b = \sqrt{ab}$ when both numbers are negative`,
      remediation: t`That rule breaks when both are negative. Write each root as $i\sqrt{\ }$ first: $\sqrt{-a}\,\sqrt{-b} = (i\sqrt a)(i\sqrt b) = i^2\sqrt{ab} = -\sqrt{ab}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Using $i^2 = +1$`,
      remediation: t`$i^2 = -1$ by definition. That is the whole point of $i$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Moving the minus outside: $\sqrt{-a} = -\sqrt a$`,
      remediation: t`$-\sqrt a$ is still a real number, and its square is $+a$, not $-a$. The square root of a negative number is imaginary: $\sqrt{-a} = i\sqrt a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Squaring the number but not the $i$: $(ki)^2 = k^2 i$`,
      remediation: t`Square every factor: $(ki)^2 = k^2 i^2 = -k^2$.`,
      fallback: { kind: "ext", topic: "powers of a product" },
    },
    {
      id: "C01-M5",
      mistake: t`Dropping the minus sign: $\sqrt{-a} = \sqrt a$`,
      remediation: t`The minus sign doesn't disappear. It becomes the $i$: $\sqrt{-a} = i\sqrt a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Taking the negative root: $\sqrt{-a} = -i\sqrt a$`,
      remediation: t`Both $\pm i\sqrt a$ square to $-a$, but the symbol $\sqrt{-a}$ means the principal root, $+i\sqrt a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Combining under one root and keeping a minus: $\sqrt{-a}\,\sqrt{-b} = \sqrt{-ab}$`,
      remediation: t`These roots can't be combined directly. Convert each to $i\sqrt{\ }$ form, then multiply: the two $i$'s give $i^2 = -1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: t`Squaring the $i$ but not the number: $(ki)^2 = k i^2$`,
      remediation: t`A power applies to every factor: $(ki)^2 = k^2 i^2 = -k^2$.`,
      fallback: { kind: "ext", topic: "powers of a product" },
    },
    {
      id: "C01-M9",
      mistake: t`Dropping the roots after taking out $i$: $\sqrt{-a}\,\sqrt{-b} = i^2 ab$`,
      remediation: t`Only the minus comes out as $i$; the roots stay: $\sqrt{-a}\,\sqrt{-b} = (i\sqrt a)(i\sqrt b) = -\sqrt{ab}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 only shows when BOTH numbers under the roots are negative; with one negative, sqrt(a)sqrt(b) = sqrt(ab) is true, so those items can't detect it.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "authored" },
      stem: t`$\sqrt{-16} = ?$`,
      verify: { kind: "value", inputs: { a: "-16" }, params: { op: "sqrt" } },
      options: [
        { key: "A", text: t`$4 i$`, correct: true, value: "4*I" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C01-M3", value: "-4" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C01-M5", value: "4" },
        { key: "D", text: t`$- 4 i$`, correct: false, misconceptionId: "C01-M6", value: "-4*I" },
      ],
      solution: {
        steps: [
          t`The minus sign becomes the $i$: $\sqrt{-16} = i\sqrt{16}$.`,
          t`$\sqrt{16} = 4$, so $\sqrt{-16} = 4i$, the principal root (plus sign).`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`$\sqrt{-4}\cdot\sqrt{-9} = ?$`,
      verify: { kind: "value", inputs: { a: "-4", b: "-9" }, params: { op: "sqrt_prod" } },
      options: [
        { key: "A", text: t`$6 i$`, correct: false, misconceptionId: "C01-M7", value: "6*I" },
        { key: "B", text: t`$-6$`, correct: true, value: "-6" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C01-M1", value: "6" },
        { key: "D", text: t`$-36$`, correct: false, misconceptionId: "C01-M9", value: "-36" },
      ],
      solution: {
        steps: [
          t`Both numbers are negative, so convert each root first: $\sqrt{-4} = 2i$ and $\sqrt{-9} = 3i$.`,
          t`Multiply: $(2i)(3i) = 6i^2$.`,
          t`Use $i^2 = -1$: the product is $-6$, not $\sqrt{36} = 6$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`$(4i)^2 = ?$`,
      verify: { kind: "value", inputs: { k: "4" }, params: { op: "isq" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C01-M2", value: "16" },
        { key: "B", text: t`$16 i$`, correct: false, misconceptionId: "C01-M4", value: "16*I" },
        { key: "C", text: t`$-16$`, correct: true, value: "-16" },
        { key: "D", text: t`$-4$`, correct: false, misconceptionId: "C01-M8", value: "-4" },
      ],
      solution: {
        steps: [
          t`Square every factor: $(4i)^2 = 4^2 \cdot i^2 = 16i^2$.`,
          t`Use $i^2 = -1$: $(4i)^2 = -16$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`$\sqrt{-25} + \sqrt{-9} = ?$`,
      verify: { kind: "value", inputs: { a: "-25", b: "-9" }, params: { op: "sqrt_sum" } },
      options: [
        { key: "A", text: t`$8 i$`, correct: true, value: "8*I" },
        { key: "B", text: t`$-8$`, correct: false, misconceptionId: "C01-M3", value: "-8" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C01-M5", value: "8" },
        { key: "D", text: t`$- 8 i$`, correct: false, misconceptionId: "C01-M6", value: "-8*I" },
      ],
      solution: {
        steps: [
          t`Convert each root: $\sqrt{-25} = 5i$ and $\sqrt{-9} = 3i$.`,
          t`Add like terms: $5i + 3i = 8i$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`$\sqrt{-2}\cdot\sqrt{-8} = ?$`,
      verify: { kind: "value", inputs: { a: "-2", b: "-8" }, params: { op: "sqrt_prod" } },
      options: [
        { key: "A", text: t`$4 i$`, correct: false, misconceptionId: "C01-M7", value: "4*I" },
        { key: "B", text: t`$-4$`, correct: true, value: "-4" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C01-M1", value: "4" },
        { key: "D", text: t`$-16$`, correct: false, misconceptionId: "C01-M9", value: "-16" },
      ],
      solution: {
        steps: [
          t`Both numbers are negative, so convert each root first: $\sqrt{-2} = i\sqrt2$ and $\sqrt{-8} = i\sqrt8$.`,
          t`Multiply: $i^2\sqrt{16} = 4i^2$.`,
          t`Use $i^2 = -1$: the product is $-4$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`$\sqrt{-3}\cdot\sqrt{12} = ?$`,
      verify: { kind: "value", inputs: { a: "-3", b: "12" }, params: { op: "sqrt_prod" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C01-M5", value: "6" },
        { key: "B", text: t`$- 6 i$`, correct: false, misconceptionId: "C01-M6", value: "-6*I" },
        { key: "C", text: t`$6 i$`, correct: true, value: "6*I" },
        { key: "D", text: t`$-6$`, correct: false, misconceptionId: "C01-M3", value: "-6" },
      ],
      solution: {
        steps: [
          t`Only $-3$ is negative, so convert that root: $\sqrt{-3} = i\sqrt3$.`,
          t`Multiply: $i\sqrt3 \cdot \sqrt{12} = i\sqrt{36} = 6i$.`,
        ],
      },
    },
  ],
};
