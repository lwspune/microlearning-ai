import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`A taxi charges $f(d) = 20d + 50$ rupees for a ride of $d$ km, so a $10$ km ride costs $f(10) = 250$. **Does an $11$ km ride cost $f(10) + 1 = 251$?**`,
    reveal: t`No. The extra $1$ goes into the input, the distance: $f(11) = 20(11) + 50 = 270$. The rule then multiplies it by $20$. So $f(10 + 1)$ is a new value, not $f(10) + 1$.`,
  },
  explanation: {
    intuition: [
      t`A **function** $f$ is a rule: it takes an **input** $x$ and gives one **output**, written $f(x)$.`,
      t`$f(x) = x^2 + 1$ means: square the input, then add $1$.`,
      t`The **value** of $f$ at $a$, written $f(a)$, is the output when the input is $a$.`,
      t`To find it, put $a$ in place of every $x$ in the rule: $f(3) = 3^2 + 1 = 10$.`,
      t`The input can be an expression too: $f(x + 1) = (x + 1)^2 + 1$ $= x^2 + 2x + 2$.`,
      t`That is not $f(x) + 1 = x^2 + 2$: changing the input is not changing the output.`,
    ],
    formal: [
      {
        title: "Substitute in brackets",
        points: [
          t`To find $f(a)$, replace **every** $x$ in the rule by $a$, written inside brackets.`,
          t`For $f(x) = x^2 - 4x$: $f(-1) = (-1)^2 - 4(-1) = 1 + 4 = 5$.`,
          t`Without brackets, $-1^2$ reads as $-(1^2) = -1$, and the value comes out wrong.`,
          t`Powers come before products: $3x^2$ at $x = 2$ is $3 \times 4 = 12$, not $6^2$.`,
          t`A letter input works the same way: $f(2k) = (2k)^2 - 4(2k) = 4k^2 - 8k$.`,
        ],
      },
      {
        title: "A new input, a new expression",
        points: [
          t`$f(x + 1)$ is the output when the input is $x + 1$.`,
          t`For $f(x) = x^2 - 4x$: $f(x + 1) = (x + 1)^2 - 4(x + 1)$.`,
          t`Expand in full: $(x + 1)^2 = x^2 + 2x + 1$, never $x^2 + 1$.`,
          t`So $f(x + 1) = x^2 + 2x + 1 - 4x - 4$ $= x^2 - 2x - 3$.`,
          t`$f(x) + 1 = x^2 - 4x + 1$ is different: it adds $1$ to the output instead.`,
          t`And $f$ is not a number: $f(x + 1)$ is not $f(x) + f(1)$, and $f(2x)$ is not $2f(x)$.`,
        ],
      },
      {
        title: "Finding constants from values",
        points: [
          t`A rule may hold an unknown **constant**, a fixed number written as a letter, like $p$ in $f(x) = px + 5$.`,
          t`$f(2) = 11$ says: input $2$ gives output $11$; it is not input $11$ giving $2$.`,
          t`So put $2$ for $x$ and set the result equal to $11$: $2p + 5 = 11$, so $p = 3$.`,
          t`Now the rule is $f(x) = 3x + 5$, so $f(6) = 3(6) + 5 = 23$.`,
          t`No shortcuts: $f(6)$ is not $3 f(2) = 33$, nor $f(2) + 4 = 15$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $f(x) = 2x^2 + x - 1$, find $f(x + 2)$.`,
      steps: [
        t`Put $(x + 2)$ for every $x$: $f(x + 2) = 2(x + 2)^2 + (x + 2) - 1$.`,
        t`Expand the square in full: $(x + 2)^2 = x^2 + 4x + 4$, so $2(x + 2)^2 = 2x^2 + 8x + 8$.`,
        t`Add up: $2x^2 + 8x + 8 + x + 2 - 1$ $= 2x^2 + 9x + 9$.`,
        t`Check at $x = 0$: $f(2) = 8 + 2 - 1 = 9$, and $2(0)^2 + 9(0) + 9 = 9$.`,
      ],
      answer: t`$f(x + 2) = 2x^2 + 9x + 9$, not $f(x) + 2 = 2x^2 + x + 1$.`,
    },
    visualSpec: t`Drag the input $a$ along the $x$-axis and watch $f(a)$ move on the curve, beside $f(a) + 1$, which only lifts the output.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Takes $f(x + c)$ as $f(x) + c$: the change is made to the output, not the input.`,
      remediation: t`$f(x + 1)$ is the output when the **input** is $x + 1$: put $(x + 1)$ for every $x$ in the rule. Adding $1$ to the output gives $f(x) + 1$, a different expression.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Treats $f$ like a number multiplying its input, so $f(p + q) = f(p) + f(q)$ and $f(kx) = k f(x)$.`,
      remediation: t`$f$ is a rule, not a number: $f(x + 1)$ is not $f(x) + f(1)$, and $f(2x)$ is not $2f(x)$. Put the whole input into the rule and simplify.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Reads $f(a) = b$ the wrong way round: $b$ as the input and $a$ as the output.`,
      remediation: t`$f(a) = b$ means input $a$ gives output $b$. Put $a$ for $x$ in the rule and set the result equal to $b$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: t`Writes the input in without brackets, so $(-3)^2$ becomes $-3^2 = -9$ and $-3(x + 1)$ becomes $-3x + 1$.`,
      remediation: t`Put the input in brackets before simplifying: $(-3)^2 = 9$ and $-3(x + 1) = -3x - 3$.`,
      fallback: { kind: "ext", topic: "brackets and order of operations" },
    },
    {
      id: "C02-M5",
      mistake: t`Expands a power of a sum as the sum of the powers: $(p + q)^2 = p^2 + q^2$.`,
      remediation: t`A power of a sum is not the sum of the powers: $(p + q)^2 = p^2 + 2pq + q^2$, so $(x - 1)^2 = x^2 - 2x + 1$.`,
      fallback: { kind: "ext", topic: "expanding (a + b)^2" },
    },
    {
      id: "C02-M6",
      mistake: t`Reads $cx^2$ as $(cx)^2$, multiplying by the coefficient before squaring.`,
      remediation: t`Powers come before products: $2x^2$ at $x = 3$ is $2 \times 9 = 18$, not $6^2 = 36$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M4 (no brackets) gives the key for a positive number input; diagnose it with a negative or a sum input.",
    t`C02-M1, C02-M2 and C02-M5 need an input like $x + c$ or $kx$; C02-M3 needs an item with given values $f(a) = b$.`,
    t`C02-M6 gives the key when every squared term has coefficient $1$.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.1 SolvedEx.1" },
      stem: t`If $f(x) = 2x^2 - 3x + 4$, then $f(-2t)$ equals`,
      verify: { kind: "value", inputs: { u: "-2*t" }, params: { f: "2*x**2 - 3*x + 4", var: "x", utext: "-2*t" } },
      options: [
        { key: "A", text: t`$8t^2 + 6t + 4$`, correct: true, value: "8*t**2 + 6*t + 4" },
        { key: "B", text: t`$-4t^2 + 6t + 4$`, correct: false, misconceptionId: "C02-M4", value: "-4*t**2 + 6*t + 4" },
        { key: "C", text: t`$16t^2 + 6t + 4$`, correct: false, misconceptionId: "C02-M6", value: "16*t**2 + 6*t + 4" },
        { key: "D", text: t`$-4t^2 + 6t - 8$`, correct: false, misconceptionId: "C02-M2", value: "-4*t**2 + 6*t - 8" },
      ],
      solution: {
        steps: [
          t`Put $(-2t)$ for every $x$: $f(-2t) = 2(-2t)^2 - 3(-2t) + 4$.`,
          t`$(-2t)^2 = 4t^2$, so $2(-2t)^2 = 8t^2$; and $-3(-2t) = 6t$.`,
          t`So $f(-2t) = 8t^2 + 6t + 4$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.1 Q4(d)" },
      stem: t`If $f(m) = m^2 - 3m + 1$, then $f(x + 1)$ equals`,
      verify: { kind: "value", inputs: { u: "x + 1" }, params: { f: "m**2 - 3*m + 1", var: "m" } },
      options: [
        { key: "A", text: t`$x^2 - 3x + 2$`, correct: false, misconceptionId: "C02-M1", value: "x**2 - 3*x + 2" },
        { key: "B", text: t`$x^2 - 3x$`, correct: false, misconceptionId: "C02-M2", value: "x*(x - 3)" },
        { key: "C", text: t`$x^2 - 3x - 1$`, correct: false, misconceptionId: "C02-M5", value: "x**2 - 3*x - 1" },
        { key: "D", text: t`$x^2 - x - 1$`, correct: true, value: "x**2 - x - 1" },
      ],
      solution: {
        steps: [
          t`Put $(x + 1)$ for every $m$: $f(x + 1) = (x + 1)^2 - 3(x + 1) + 1$.`,
          t`Expand: $x^2 + 2x + 1 - 3x - 3 + 1$.`,
          t`So $f(x + 1) = x^2 - x - 1$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.1 Q4(f)" },
      stem: t`If $f(m) = m^2 - 3m + 1$, then $\dfrac{f(2 + h) - f(2)}{h}$, for $h \ne 0$, equals`,
      verify: { kind: "value", inputs: { a: "2" }, params: { f: "m**2 - 3*m + 1", var: "m", ask: "diffq" } },
      options: [
        { key: "A", text: t`$h - 3$`, correct: false, misconceptionId: "C02-M5", value: "h - 3" },
        { key: "B", text: t`$h + 1$`, correct: true, value: "h + 1" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "D", text: t`$h - 3 + \dfrac{1}{h}$`, correct: false, misconceptionId: "C02-M2", value: "h - 3 + 1/h" },
      ],
      solution: {
        steps: [
          t`$f(2 + h) = (2 + h)^2 - 3(2 + h) + 1 = 4 + 4h + h^2 - 6 - 3h + 1 = h^2 + h - 1$.`,
          t`$f(2) = 4 - 6 + 1 = -1$, so $f(2 + h) - f(2) = h^2 + h$.`,
          t`Divide by $h \ne 0$: the quotient is $h + 1$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc II Q8" },
      stem: t`If $f(x) = 3x^4 - 5x^2 + 7$, then $f(x - 1)$ equals`,
      verify: { kind: "value", inputs: { u: "x - 1" }, params: { f: "3*x**4 - 5*x**2 + 7", var: "x", utext: "x - 1" } },
      options: [
        { key: "A", text: t`$3x^4 - 5x^2 + 5$`, correct: false, misconceptionId: "C02-M5", value: "3*x**4 - 5*x**2 + 5" },
        { key: "B", text: t`$3x^4 - 12x^3 + 13x^2 - 2x + 5$`, correct: true, value: "3*x**4 - 12*x**3 + 13*x**2 - 2*x + 5" },
        { key: "C", text: t`$3x^4 - 5x^2 + 6$`, correct: false, misconceptionId: "C02-M1", value: "3*x**4 - 5*x**2 + 6" },
        { key: "D", text: t`$-2x + 5$`, correct: false, misconceptionId: "C02-M4", value: "5 - 2*x" },
      ],
      solution: {
        steps: [
          t`Put $(x - 1)$ for every $x$: $f(x - 1) = 3(x - 1)^4 - 5(x - 1)^2 + 7$.`,
          t`$(x - 1)^2 = x^2 - 2x + 1$ and $(x - 1)^4 = x^4 - 4x^3 + 6x^2 - 4x + 1$.`,
          t`So $f(x - 1) = 3x^4 - 12x^3 + 18x^2 - 12x + 3 - 5x^2 + 10x - 5 + 7$.`,
          t`Collect terms: $f(x - 1) = 3x^4 - 12x^3 + 13x^2 - 2x + 5$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc II Q9" },
      stem: t`If $f(x) = 3x + a$ and $f(1) = 7$, then $f(4)$ equals`,
      verify: { kind: "value", inputs: { u: "4" }, params: { f: "3*x + a", var: "x", ask: "fit", unknowns: "a", given: "1=7" } },
      options: [
        { key: "A", text: t`$-8$`, correct: false, misconceptionId: "C02-M3", value: "-8" },
        { key: "B", text: t`$16$`, correct: true, value: "16" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C02-M1", value: "10" },
        { key: "D", text: t`$28$`, correct: false, misconceptionId: "C02-M2", value: "28" },
      ],
      solution: {
        steps: [
          t`$f(1) = 7$ says input $1$ gives output $7$: $3(1) + a = 7$, so $a = 4$.`,
          t`The rule is $f(x) = 3x + 4$.`,
          t`So $f(4) = 3(4) + 4 = 16$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc I Q8" },
      stem: t`If $f(x) = 2x^2 + bx + c$, $f(0) = 3$ and $f(2) = 1$, then $f(1)$ equals`,
      verify: { kind: "value", inputs: { u: "1" }, params: { f: "2*x**2 + b*x + c", var: "x", ask: "fit", unknowns: "b c", given: "0=3;2=1" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C02-M6", value: "-2" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C02-M3", value: "2" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C02-M2", value: "1/2" },
      ],
      solution: {
        steps: [
          t`$f(0) = 2(0)^2 + b(0) + c = c$, so $c = 3$.`,
          t`$f(2) = 2(2)^2 + 2b + 3 = 11 + 2b = 1$, so $2b = -10$ and $b = -5$.`,
          t`So $f(x) = 2x^2 - 5x + 3$, and $f(1) = 2 - 5 + 3 = 0$.`,
        ],
      },
    },
  ],
};
