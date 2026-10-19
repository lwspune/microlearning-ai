import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Solving $\log_4 (x - 1) = \log_2 (x - 3)$ gives $x = 2$ and $x = 5$. **How many solutions does the equation really have?**`,
    reveal: t`Only one. At $x = 2$, the argument $x - 3$ is $-1$, and no power of $2$ is negative, so $\log_2 (-1)$ does not exist. At $x = 5$ both sides are $1$: $\log_4 4 = \log_2 2$. So $x = 5$ is the only solution.`,
  },
  explanation: {
    intuition: [
      t`A **logarithmic equation** has the unknown inside a logarithm, like $\log_2 (x - 3) = 1$.`,
      t`The number inside a log is its **argument**: in $\log_2 (x - 3)$ it is $x - 3$.`,
      t`$\log_a N$ exists only when $N > 0$, since no power of $a$ is zero or negative.`,
      t`The plan: rewrite the equation without logs, then solve it as usual.`,
      t`Removing the logs can bring in extra roots that make an argument zero or negative.`,
      t`So every root goes back into the original equation before it counts.`,
    ],
    formal: [
      {
        title: "Domain before solving",
        points: [
          t`The **domain** of the equation is the set of $x$ for which every log in it is defined.`,
          t`Each argument must be positive: $\log_2 (x - 3)$ needs $x - 3 > 0$, so $x > 3$.`,
          t`Zero is not allowed either: $\log_2 0$ does not exist.`,
          t`With several logs, all the conditions must hold at once.`,
          t`For $\log_4 (x - 1) = \log_2 (x - 3)$: $x > 1$ and $x > 3$, so $x > 3$.`,
          t`A base containing $x$ must also be positive and not $1$.`,
        ],
      },
      {
        title: "Removing the logarithm",
        points: [
          t`**Exponential form:** $\log_a N = k$ means $N = a^k$.`,
          t`So $\log_2 (x - 3) = 3$ gives $x - 3 = 2^3 = 8$, and $x = 11$.`,
          t`The base is the number raised to the power: $2^3$, never $3^2$.`,
          t`Two logs to the **same base** drop together: $\log_a M = \log_a N$ gives $M = N$.`,
          t`A sum of logs first becomes one log: $\log_a M + \log_a N = \log_a MN$.`,
          t`So $\log_2 x + \log_2 (x + 2) = 3$ gives $x(x + 2) = 2^3 = 8$.`,
        ],
      },
      {
        title: "Bring logs to one base",
        points: [
          t`Logs to different bases can't be compared or added as they stand.`,
          t`Rewrite them in one base: $\log_{a^2} N = \frac{1}{2}\log_a N$, the power going underneath.`,
          t`So $\log_4 N = \frac{1}{2}\log_2 N$ and $\log_9 N = \frac{1}{2}\log_3 N$.`,
          t`Example: $\log_2 x + \log_4 x = 6$ becomes $\log_2 x + \frac{1}{2}\log_2 x = 6$.`,
          t`So $\frac{3}{2}\log_2 x = 6$, $\log_2 x = 4$ and $x = 2^4 = 16$.`,
          t`And $\log_4 (x - 1) = \log_2 (x - 3)$ becomes $\log_2 (x - 1) = \log_2 (x - 3)^2$.`,
        ],
      },
      {
        title: "Check every root",
        points: [
          t`Without logs the equation is an ordinary one, often a quadratic: solve it as usual.`,
          t`$x - 1 = (x - 3)^2$ gives $x^2 - 7x + 10 = 0$, so $x = 2$ or $x = 5$.`,
          t`Put each root into every original argument; reject it if any argument is $0$ or negative.`,
          t`$x = 2$ makes $x - 3 = -1$: rejected. $x = 5$ gives arguments $4$ and $2$: kept.`,
          t`The **number of solutions** is the number of roots that survive: here one.`,
          t`Test the arguments, not the sign of $x$: a negative $x$ can still be a solution.`,
        ],
      },
      {
        title: "Logs in A.P.",
        points: [
          t`Three numbers $p, q, r$ are in **A.P.** (arithmetic progression) when $2q = p + r$.`,
          t`They are in **G.P.** (geometric progression) when $q^2 = pr$.`,
          t`If $\log a$, $\log b$, $\log c$ are in A.P., then $2\log b = \log a + \log c$.`,
          t`That is $\log b^2 = \log ac$, so $b^2 = ac$: the numbers $a, b, c$ are in G.P.`,
          t`Example: $\log 2$, $\log x$, $\log 8$ in A.P. give $x^2 = 16$, so $x = 4$, as $x > 0$.`,
          t`With $t = 2^x$ inside the logs, solve for $t$, keep only $t > 0$, then $x = \log_2 t$.`,
        ],
      },
      {
        title: "Terms in G.P.",
        points: [
          t`Take $\log_x 16$, $16^x$, $\log_2 x$ in G.P.: the middle term squared is the outer two multiplied.`,
          t`So $(16^x)^2 = \log_x 16 \cdot \log_2 x$.`,
          t`In one base: $\log_x 16 = \frac{\log 16}{\log x}$ and $\log_2 x = \frac{\log x}{\log 2}$.`,
          t`$\log x$ cancels, leaving $\frac{\log 16}{\log 2} = \log_2 16 = 4$.`,
          t`So $16^{2x} = 4 = 16^{1/2}$, giving $2x = \frac{1}{2}$ and $x = \frac{1}{4}$.`,
          t`Check: $x = \frac{1}{4}$ is positive and not $1$, so it is a valid base.`,
        ],
      },
      {
        title: "Logs inside a function",
        points: [
          t`A function can be built from a log: $f(x) = \log_{10} (1 + x)$.`,
          t`Then $f(4) = \log_{10} 5$ and $f(1) = \log_{10} 2$.`,
          t`So $4f(4) + 5f(1) - \log_{10} 2$ $= 4\log_{10} 5 + 4\log_{10} 2$.`,
          t`By the product rule this is $4\log_{10} 10 = 4$.`,
          t`An unknown in an exponent, as in $2^x = 7$, is the next concept.`,
          t`An equation in $(\log x)^2$ is a quadratic in $\log x$: see Quadratic Equations.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many solutions does $\log_9 (x + 6) = \log_3 x$ have?`,
      steps: [
        t`Domain: $x + 6 > 0$ and $x > 0$, so $x > 0$.`,
        t`One base: $\log_9 (x + 6)$ $= \frac{1}{2}\log_3 (x + 6)$, so $\log_3 (x + 6) = 2\log_3 x$ $= \log_3 x^2$.`,
        t`Same base on both sides, so $x + 6 = x^2$: $x^2 - x - 6 = 0$, $(x - 3)(x + 2) = 0$.`,
        t`$x = -2$ fails $x > 0$. $x = 3$ passes: $\log_9 9 = 1 = \log_3 3$.`,
      ],
      answer: t`One solution, $x = 3$.`,
    },
    visualSpec: t`Slide $x$ along a number line: each argument glows where it is positive, and a root of the log-free equation turns red when it falls outside the shared domain.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Keeping every root of the log-free equation without checking that each logarithm is defined",
      remediation: t`A root counts only if every log in the original equation is defined there. Put each root into every argument and reject it if any argument is $0$ or negative.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C03-M2",
      mistake: t`Turning the change of base upside down: $\log_{a^2} N = 2\log_a N$`,
      remediation: t`Change of base puts the power of the base underneath: $\log_{a^2} N = \frac{\log_a N}{\log_a a^2}$ $= \frac{1}{2}\log_a N$, not $2\log_a N$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Mixing up which number is the base when switching between $\log_a N = k$ and $a^k = N$`,
      remediation: t`$\log_a N = k$ means $N = a^k$: the base is the number raised to the power. So $\log_3 N = 2$ gives $N = 3^2$, not $2^3$; and $2^x = 5$ gives $x = \log_2 5$, not $\log_5 2$.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C03-M4",
      mistake: t`Adding logs by adding the numbers: $\log M + \log N = \log (M + N)$`,
      remediation: t`The product rule multiplies: $\log M + \log N = \log MN$. Adding two logs never adds the numbers inside them.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C03-M5",
      mistake: "Reading logs in A.P. as numbers in A.P.",
      remediation: t`If $\log a$, $\log b$, $\log c$ are in A.P., then $2\log b = \log a + \log c$, so $b^2 = ac$: the numbers themselves are in G.P., not A.P.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C03-M6",
      mistake: "Treating logs to different bases as if they had the same base",
      remediation: t`Logs to different bases can't be equated or added as they stand. First bring them to one base, using $\log_{a^2} N = \frac{1}{2}\log_a N$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C03-M1 needs a root that breaks the domain. In the A.P. items (C03-Q3, C03-Q5) the extra root is a negative $t = a^x$, which gives no real $x$ at all, so C03-M1 is not tagged there.`,
    t`C03-Q1, C03-Q2 and C03-Q4 change the numbers of NDA 2024 Apr Q27, $\log_4 (x - 1) = \log_2 (x - 3)$, now the hook. Its C03-M2 and C03-M6 equations both have no real root, and four different counts can't all come from models, so the items ask for the solutions rather than their number.`,
    t`C03-M6 gives no real value on C03-Q1: its only root, $x = 1$, makes both arguments $0$.`,
    t`C03-Q5 changes the numbers of NDA 2021 Sep Q3 (C03-Q3). NDA 2023 Apr Q14 (logs in G.P.) and 2019 Apr Q72 ($4f(4) + 5f(1) - \log_{10} 2$) are taught on slides with fixed numbers: their natural slips are not modelled here.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q27" },
      stem: t`The real values of $x$ that satisfy $\log_4 (3x - 3) = \log_2 (x - 1)$ are:`,
      verify: { kind: "value", inputs: { b: "2", m: "3", p: "-3", n: "1", q: "-1" }, params: { ask: "base" } },
      options: [
        { key: "A", text: t`$x = \frac{10}{9}$ only`, correct: false, misconceptionId: "C03-M2", value: "{10/9}" },
        { key: "B", text: t`no real value of $x$`, correct: false, misconceptionId: "C03-M6", value: "EmptySet" },
        { key: "C", text: t`$x = 4$ only`, correct: true, value: "{4}" },
        { key: "D", text: t`$x = 1$ or $x = 4$`, correct: false, misconceptionId: "C03-M1", value: "{1, 4}" },
      ],
      solution: {
        steps: [
          t`Domain: $3x - 3 > 0$ and $x - 1 > 0$, so $x > 1$.`,
          t`$\log_4 (3x - 3)$ $= \frac{1}{2}\log_2 (3x - 3)$, so $\log_2 (3x - 3) = \log_2 (x - 1)^2$.`,
          t`$3(x - 1) = (x - 1)^2$ gives $(x - 1)(x - 4) = 0$: $x = 1$ or $x = 4$.`,
          t`$x = 1$ makes both arguments $0$, so it is rejected. Only $x = 4$ works: $\log_4 9 = \log_2 3$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q27" },
      stem: t`The real values of $x$ that satisfy $\log_3 x + \log_3 (x - 8) = 2$ are:`,
      verify: { kind: "value", inputs: { b: "3", p: "0", q: "-8", k: "2" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$x = 4 + 2\sqrt{6}$ only`, correct: false, misconceptionId: "C03-M3", value: "{4 + 2*sqrt(6)}" },
        { key: "B", text: t`$x = \frac{17}{2}$ only`, correct: false, misconceptionId: "C03-M4", value: "{17/2}" },
        { key: "C", text: t`$x = 9$ only`, correct: true, value: "{9}" },
        { key: "D", text: t`$x = -1$ or $x = 9$`, correct: false, misconceptionId: "C03-M1", value: "{-1, 9}" },
      ],
      solution: {
        steps: [
          t`Domain: $x > 0$ and $x - 8 > 0$, so $x > 8$.`,
          t`Product rule: $\log_3 x(x - 8) = 2$, so $x(x - 8) = 3^2 = 9$.`,
          t`$x^2 - 8x - 9 = 0$ gives $(x - 9)(x + 1) = 0$: $x = 9$ or $x = -1$.`,
          t`$x = -1$ fails $x > 8$, so only $x = 9$ works.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q3" },
      stem: t`If $\log_{10} 2$, $\log_{10} (2^x - 1)$ and $\log_{10} (2^x + 3)$ are in A.P., then $x$ is equal to:`,
      verify: { kind: "value", inputs: { a: "2", c: "2", p: "1", q: "3" }, params: { ask: "ap" } },
      options: [
        { key: "A", text: t`$\log_5 2$`, correct: false, misconceptionId: "C03-M3", value: "log(2)/log(5)" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M4", value: "2" },
        { key: "C", text: t`$\log_2 7$`, correct: false, misconceptionId: "C03-M5", value: "log(7)/log(2)" },
        { key: "D", text: t`$\log_2 5$`, correct: true, value: "log(5)/log(2)" },
      ],
      solution: {
        steps: [
          t`A.P.: twice the middle log is the sum of the outer two, so $\log_{10} (2^x - 1)^2$ $= \log_{10} 2(2^x + 3)$.`,
          t`So $(2^x - 1)^2 = 2(2^x + 3)$. With $t = 2^x$: $t^2 - 4t - 5 = 0$, so $(t - 5)(t + 1) = 0$.`,
          t`$t = 2^x > 0$ rules out $t = -1$. Then $2^x = 5$ gives $x = \log_2 5$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q27" },
      stem: t`If $\log_3 x + \log_9 x = 6$, then $x$ is equal to:`,
      verify: { kind: "value", inputs: { b: "3", k: "6" }, params: { ask: "mixed" } },
      options: [
        { key: "A", text: t`$64$`, correct: false, misconceptionId: "C03-M3", value: "64" },
        { key: "B", text: t`$27$`, correct: false, misconceptionId: "C03-M6", value: "27" },
        { key: "C", text: t`$81$`, correct: true, value: "81" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C03-M2", value: "9" },
      ],
      solution: {
        steps: [
          t`$\log_9 x = \frac{1}{2}\log_3 x$, so $\log_3 x + \frac{1}{2}\log_3 x = 6$.`,
          t`$\frac{3}{2}\log_3 x = 6$ gives $\log_3 x = 4$.`,
          t`So $x = 3^4 = 81$, which is positive.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q3" },
      stem: t`If $\log_{10} 4$, $\log_{10} (3^x - 1)$ and $\log_{10} (3^x + 7)$ are in A.P., then $x$ is equal to:`,
      verify: { kind: "value", inputs: { a: "3", c: "4", p: "1", q: "7" }, params: { ask: "ap" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M3", value: "1/2" },
        { key: "C", text: t`$\log_3 5$`, correct: false, misconceptionId: "C03-M4", value: "log(5)/log(3)" },
        { key: "D", text: t`$\log_3 13$`, correct: false, misconceptionId: "C03-M5", value: "log(13)/log(3)" },
      ],
      solution: {
        steps: [
          t`A.P.: twice the middle log is the sum of the outer two, so $\log_{10} (3^x - 1)^2$ $= \log_{10} 4(3^x + 7)$.`,
          t`So $(3^x - 1)^2 = 4(3^x + 7)$. With $t = 3^x$: $t^2 - 6t - 27 = 0$, so $(t - 9)(t + 3) = 0$.`,
          t`$t = 3^x > 0$ rules out $t = -3$. Then $3^x = 9$ gives $x = 2$.`,
        ],
      },
    },
  ],
};
