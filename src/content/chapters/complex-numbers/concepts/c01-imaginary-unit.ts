import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`No real number squares to $-1$: squares of real numbers are never negative. **So what could $\sqrt{-1}$ be?**`,
    reveal: t`A new number, called $i$, defined by $i^2 = -1$. Then every negative number has a square root: $\sqrt{-49} = 7i$, because $(7i)^2 = 49i^2 = -49$.`,
  },
  explanation: {
    intuition: t`Real numbers can't produce a negative square, so we add one new number that does: $i$, with $i^2 = -1$. The square root of any negative number is then a real square root times $i$. Treat $i$ like a letter, and replace $i^2$ by $-1$ whenever it appears.`,
    formal: t`$i$ is defined by $i^2 = -1$. For $a > 0$: $\sqrt{-a} = i\sqrt a$, the principal root (with a plus sign).

**The product rule needs care.** $\sqrt a\,\sqrt b = \sqrt{ab}$ holds when at least one of $a$, $b$ is non-negative, but it **fails when both are negative**:
$$\sqrt{-5}\cdot\sqrt{-20} = (i\sqrt5)(i\sqrt{20}) = i^2\sqrt{100} = -10, \text{ not } +10.$$
Convert each root to the form $i\sqrt{\ }$ first, then multiply.`,
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
