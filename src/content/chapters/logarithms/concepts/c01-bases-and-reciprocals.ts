import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Let $n = 100!$, the product $1 \times 2 \times 3 \times \cdots \times 100$. **What is** $\frac{1}{\log_2 n} + \frac{1}{\log_3 n}$ $+ \cdots + \frac{1}{\log_{100} n}$**?** Ninety-nine logs, and no calculator.`,
    reveal: t`Flip each term: $\frac{1}{\log_k n} = \log_n k$. Now all $99$ logs have base $n$, so the product rule joins them: $\log_n (2 \times 3 \times \cdots \times 100)$ $= \log_n (100!)$. That is $\log_n n = 1$.`,
  },
  explanation: {
    intuition: [
      t`You already know the product, quotient, power and change of base rules; this concept puts them to work.`,
      t`In $\log_a b$, the number $a$ is the **base** and $b$, the number whose log we take, is the **argument**.`,
      t`Swap the base and the argument and the log turns into its reciprocal: $\log_2 8 = 3$ but $\log_8 2 = \frac{1}{3}$.`,
      t`A power on the argument multiplies the log, and a power on the base divides it: $\log_4 8 = \frac{3}{2}$.`,
      t`A sum of reciprocals like $\frac{1}{\log_2 n} + \frac{1}{\log_3 n}$ flips into logs of base $n$, which join into one log.`,
      t`And raising a base to its own log undoes the log: $2^{\log_2 7} = 7$.`,
    ],
    formal: [
      {
        title: "The reciprocal rule",
        points: [
          t`By change of base, $\log_a b = \frac{\log b}{\log a}$ and $\log_b a = \frac{\log a}{\log b}$.`,
          t`Multiply them and everything cancels: $\log_a b \cdot \log_b a = 1$.`,
          t`So $\frac{1}{\log_b a} = \log_a b$: taking the reciprocal swaps the base and the argument.`,
          t`For example, $\frac{1}{\log_{25} 5} = \log_5 25 = 2$.`,
          t`The swap is not a minus sign: $\frac{1}{\log_b a}$ is not $\log_b \frac{1}{a} = -\log_b a$.`,
          t`A chain collapses the same way: $\log_a b \cdot \log_b c = \log_a c$.`,
        ],
      },
      {
        title: "A power in the base",
        points: [
          t`Write the base and the argument as powers of one number, $\log_{a^m} b^n$.`,
          t`Change of base gives $\frac{\log b^n}{\log a^m}$ $= \frac{n \log b}{m \log a}$.`,
          t`So $\log_{a^m} b^n = \frac{n}{m}\log_a b$: the argument's power on top, the base's below.`,
          t`For example, $\log_4 32 = \log_{2^2} 2^5 = \frac{5}{2}$.`,
          t`Check with $\log_4 16 = 2$: the rule gives $\frac{4}{2} = 2$, while $\frac{2}{4}$ or $2 \times 4$ fail.`,
          t`Roots are powers too: $\log_{\sqrt{3}} 9 = \log_{3^{1/2}} 3^2$ $= \frac{2}{1/2} = 4$.`,
        ],
      },
      {
        title: "Summing reciprocals",
        points: [
          t`Flip each term of the sum: $\frac{1}{\log_k n} = \log_n k$, so every log now has base $n$.`,
          t`The product rule joins them: $\log_n 2 + \log_n 3 + \cdots + \log_n k$ $= \log_n (2 \times 3 \times \cdots \times k)$.`,
          t`The bases multiply, never add: $\log_n 2 + \log_n 3 = \log_n 6$, not $\log_n 5$.`,
          t`**$k!$**, read $k$ factorial, means $1 \times 2 \times \cdots \times k$, so the sum is $\log_n (k!)$.`,
          t`When $n = k!$, the whole sum is $\log_n n = 1$.`,
          t`Read the other way, the sum is $\frac{1}{\log_{k!} n}$, a single reciprocal.`,
        ],
      },
      {
        title: "Nested roots",
        points: [
          t`A **nested root** is a root inside a root, like $\sqrt{a\sqrt{a}}$.`,
          t`Unwrap it from the inside: $a\sqrt{a} = a^{3/2}$, so $\sqrt{a\sqrt{a}} = a^{3/4}$.`,
          t`Each layer multiplies by $a$ and then halves the exponent: $\sqrt{a \cdot a^{3/4}} = a^{7/8}$.`,
          t`So the exponents are $\frac{1}{2}, \frac{3}{4}, \frac{7}{8}, \frac{15}{16}, \ldots$, each one short of $1$.`,
          t`Three nested roots give $a^{7/8}$, not the eighth root $a^{1/8}$.`,
          t`Then a log with base $a$ just reads off the exponent: $\log_a a^{7/8} = \frac{7}{8}$.`,
        ],
      },
      {
        title: "A base raised to its log",
        points: [
          t`$a^{\log_a x} = x$, because $\log_a x$ is exactly the power of $a$ that gives $x$.`,
          t`A multiple in the exponent becomes a power: $a^{k\log_a x} = (a^{\log_a x})^k$ $= x^k$.`,
          t`So $5^{3\log_5 2} = 2^3 = 8$, not $3 \times 2 = 6$.`,
          t`When the bases differ, match them first: $9^{\log_3 5} = 3^{2\log_3 5}$ $= 5^2 = 25$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the value of $\log_7 \log_7 \sqrt{7\sqrt{7\sqrt{7}}}$.`,
      steps: [
        t`Unwrap from the inside: $7\sqrt{7} = 7^{3/2}$, so $\sqrt{7\sqrt{7}} = 7^{3/4}$.`,
        t`One more layer: $7 \cdot 7^{3/4} = 7^{7/4}$, so the whole root is $7^{7/8}$.`,
        t`The inner log reads off the exponent: $\log_7 7^{7/8} = \frac{7}{8}$.`,
        t`The outer log: $\log_7 \frac{7}{8} = \log_7 7 - \log_7 8$ $= 1 - 3\log_7 2$.`,
      ],
      answer: t`$1 - 3\log_7 2$. Don't stop at $\frac{7}{8}$: there are two logs.`,
    },
    visualSpec: t`Slide the powers $m$ and $n$ in $\log_{a^m} b^n$ and watch the value $\frac{n}{m}\log_a b$ grow with $n$ and shrink with $m$.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Turning the fraction upside down: $\log_{a^m} b^n = \frac{m}{n}\log_a b$`,
      remediation: t`The argument's power goes on top and the base's power below: $\log_{a^m} b^n = \frac{n}{m}\log_a b$. Check with $\log_4 16 = \log_{2^2} 2^4 = \frac{4}{2} = 2$.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C01-M2",
      mistake: t`Multiplying both powers out in front: $\log_{a^m} b^n = mn\log_a b$`,
      remediation: t`Only the argument's power multiplies; the base's power divides, because $\log a^m = m\log a$ sits in the denominator. So $\log_{a^m} b^n = \frac{n}{m}\log_a b$.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C01-M3",
      mistake: t`Adding the arguments: $\log_n 2 + \log_n 3 = \log_n 5$`,
      remediation: t`Logs with one base add by multiplying their arguments (the product rule): $\log_n 2 + \log_n 3 = \log_n 6$.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C01-M4",
      mistake: t`Letting the logs cancel, reading $\log_a b = \frac{\log b}{\log a}$ as $\frac{b}{a}$`,
      remediation: t`$\frac{\log b}{\log a}$ is a fraction of two logs, and the logs don't cancel. Write both numbers as powers of one number: $\log_4 32 = \log_{2^2} 2^5 = \frac{5}{2}$, not $\frac{32}{4}$.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C01-M5",
      mistake: t`Reading nested square roots as one root: $\sqrt{a\sqrt{a\sqrt{a}}} = a^{1/8}$`,
      remediation: t`Unwrap from the inside: each layer multiplies by $a$, then halves the exponent. $\sqrt{a\sqrt{a}} = a^{3/4}$ and $\sqrt{a\sqrt{a\sqrt{a}}} = a^{7/8}$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C01-M6",
      mistake: t`Bringing a multiple in the exponent out as a factor: $a^{k\log_a x} = kx$`,
      remediation: t`The multiple becomes a power: $a^{k\log_a x} = (a^{\log_a x})^k$ $= x^k$. So $5^{3\log_5 2} = 2^3 = 8$, not $6$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    t`C01-M1 and C01-M2 give the same value when the argument's power is $1$ (both give $m\log_a b$), and C01-M1 gives the key when the two powers are equal. Each item's power-in-the-base log has two different powers, neither equal to $1$.`,
    t`C01-Q2 adapts 2018 Sep Q1, $\log_7 \log_7 \sqrt{7\sqrt{7\sqrt{7}}}$ (the worked example), to one log of four nested roots.`,
    t`C01-Q3 adapts the reciprocal sums of 2018 Apr Q19 and 2021 Apr Q9; the $n = 100!$ sum is the hook.`,
    t`C01-Q4 ($2^{\log_4 81}$) and C01-Q5 ($\log_{16} 27 \cdot \log_3 2$) are built on 2024 Apr Q7 ($a = b^p$ from $\log_b a = p$) and 2021 Sep Q40 ($\log_{10} 2 \cdot \log_2 10$), with powers in the base added.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q17" },
      stem: t`The value of $\log_9 27 + \log_8 32$ is:`,
      verify: { kind: "value", inputs: { t: "((3, 2, 3, 3), (2, 3, 2, 5))" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{19}{6}$`, correct: true, value: "19/6" },
        { key: "B", text: t`$\frac{19}{15}$`, correct: false, misconceptionId: "C01-M1", value: "19/15" },
        { key: "C", text: t`$21$`, correct: false, misconceptionId: "C01-M2", value: "21" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C01-M4", value: "7" },
      ],
      solution: {
        steps: [
          t`$\log_9 27 = \log_{3^2} 3^3 = \frac{3}{2}$.`,
          t`$\log_8 32 = \log_{2^3} 2^5 = \frac{5}{3}$.`,
          t`Add: $\frac{3}{2} + \frac{5}{3} = \frac{9 + 10}{6} = \frac{19}{6}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q1" },
      stem: t`The value of $\log_4 \sqrt{2\sqrt{2\sqrt{2\sqrt{2}}}}$ is:`,
      verify: { kind: "value", inputs: { a: "2", m: "2", L: "4" }, params: { ask: "nest" } },
      options: [
        { key: "A", text: t`$\frac{15}{32}$`, correct: true, value: "15/32" },
        { key: "B", text: t`$\frac{32}{15}$`, correct: false, misconceptionId: "C01-M1", value: "32/15" },
        { key: "C", text: t`$\frac{15}{8}$`, correct: false, misconceptionId: "C01-M2", value: "15/8" },
        { key: "D", text: t`$\frac{1}{32}$`, correct: false, misconceptionId: "C01-M5", value: "1/32" },
      ],
      solution: {
        steps: [
          t`Unwrap from the inside: $\sqrt{2 \cdot 2^{1/2}} = 2^{3/4}$, then $\sqrt{2 \cdot 2^{3/4}} = 2^{7/8}$.`,
          t`The outer layer: $\sqrt{2 \cdot 2^{7/8}} = 2^{15/16}$.`,
          t`$\log_4 2^{15/16} = \log_{2^2} 2^{15/16}$ $= \frac{15/16}{2} = \frac{15}{32}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q19" },
      stem: t`The value of $\dfrac{1}{\log_4 216} + \dfrac{1}{\log_9 216}$ is:`,
      verify: { kind: "value", inputs: { bases: "(4, 9)", n: "216", r: "6", m: "3", k: "2" }, params: { ask: "recip" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C01-M2", value: "6" },
        { key: "B", text: t`$\log_{216} 13$`, correct: false, misconceptionId: "C01-M3", value: "log(13)/(3*log(6))" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: true, value: "2/3" },
        { key: "D", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C01-M1", value: "3/2" },
      ],
      solution: {
        steps: [
          t`Flip each term: $\frac{1}{\log_4 216} = \log_{216} 4$ and $\frac{1}{\log_9 216} = \log_{216} 9$.`,
          t`Same base, so add by multiplying: $\log_{216} (4 \times 9) = \log_{216} 36$.`,
          t`$216 = 6^3$ and $36 = 6^2$, so $\log_{6^3} 6^2 = \frac{2}{3}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q7" },
      stem: t`The value of $2^{\log_4 81}$ is:`,
      verify: { kind: "value", inputs: { p: "2", r: "1", m: "2", q: "3", n: "4" }, params: { ask: "power" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C01-M1", value: "sqrt(3)" },
        { key: "C", text: t`$6561$`, correct: false, misconceptionId: "C01-M2", value: "6561" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C01-M6", value: "6" },
      ],
      solution: {
        steps: [
          t`$\log_4 81 = \log_{2^2} 3^4$ $= \frac{4}{2}\log_2 3 = 2\log_2 3$.`,
          t`So $2^{\log_4 81} = 2^{2\log_2 3}$ $= (2^{\log_2 3})^2$.`,
          t`$2^{\log_2 3} = 3$, so the value is $3^2 = 9$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q40" },
      stem: t`The value of $\log_{16} 27 \cdot \log_3 2$ is:`,
      verify: { kind: "value", inputs: { t: "((2, 4, 3, 3), (3, 1, 2, 1))" }, params: { ask: "prod" } },
      options: [
        { key: "A", text: t`$\frac{3}{4}$`, correct: true, value: "3/4" },
        { key: "B", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C01-M1", value: "4/3" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C01-M2", value: "12" },
        { key: "D", text: t`$\frac{9}{8}$`, correct: false, misconceptionId: "C01-M4", value: "9/8" },
      ],
      solution: {
        steps: [
          t`$\log_{16} 27 = \log_{2^4} 3^3 = \frac{3}{4}\log_2 3$.`,
          t`$\log_2 3 \cdot \log_3 2 = 1$, so the product is $\frac{3}{4} \times 1 = \frac{3}{4}$.`,
        ],
      },
    },
  ],
};
