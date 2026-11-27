import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Putting $x = 1$ in $(1 + x)^n$ adds the coefficients. How could you add $1\,{}^nC_1 + 2\,{}^nC_2 + \dots + n\,{}^nC_n$ instead?`,
    reveal: t`Differentiate first: $n(1 + x)^{n-1} = \sum r\,{}^nC_r x^{r-1}$, then put $x = 1$ to get $n2^{n-1}$.`,
  },
  explanation: {
    intuition: [
      t`$(1 + x)^n = \sum {}^nC_r x^r$ holds for every $x$.`,
      t`So we may differentiate or integrate both sides.`,
      t`Differentiating brings down a factor $r$; integrating divides by $r + 1$.`,
      t`Then put $x = 1$ (or $-1$) to read off the sum.`,
    ],
    formal: [
      {
        title: "Differentiating",
        points: [
          t`$\sum r\,{}^nC_r = n2^{n-1}$.`,
          t`Twice: $\sum r(r - 1)\,{}^nC_r = n(n - 1)2^{n-2}$.`,
          t`So $\sum r^2\,{}^nC_r = n(n + 1)2^{n-2}$.`,
          t`With $x = -1$: $\sum (-1)^r r\,{}^nC_r = 0$ for $n \ge 2$.`,
        ],
      },
      {
        title: "Integrating and squaring",
        points: [
          t`Integrate from 0 to 1: $\sum \frac{^nC_r}{r + 1} = \frac{2^{n+1} - 1}{n + 1}$.`,
          t`Compare coefficients of $x^n$ in $(1 + x)^n(1 + x)^n$:`,
          t`$\sum (^nC_r)^2 = {}^{2n}C_n$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\displaystyle\sum_{r=0}^{8} r\,{}^8C_r$.`,
      steps: [
        t`$\sum r\,{}^nC_r = n2^{n-1}$`,
        t`$8 \times 2^7 = 1024$`,
      ],
      answer: t`$1024$`,
    },
    visualSpec: t`Bar charts of $^nC_r$ and $r\,{}^nC_r$ side by side, their totals $2^n$ and $n2^{n-1}$ shown above.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Forgets to differentiate.",
      remediation: t`$2^n$ adds the coefficients only; the factor $r$ needs a derivative.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C11-M2",
      mistake: t`Keeps $2^n$.`,
      remediation: t`Differentiating lowers the power: $n2^{n-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: t`Uses $n - 1$.`,
      remediation: t`The factor brought down is $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Forgets the minus 1.",
      remediation: t`Integrating from 0 to 1 subtracts the value at 0: $\frac{2^{n+1} - 1}{n + 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: t`Integrates only $2^n$.`,
      remediation: t`$\int_0^1 (1 + x)^n dx = \frac{2^{n+1} - 1}{n + 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Integrates the wrong power.",
      remediation: t`The power rises to $n + 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: t`Squares $2^n$.`,
      remediation: t`Square of the sum is not the sum of squares: $^{2n}C_n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Forgets the squares.",
      remediation: t`$\sum {}^nC_r = 2^n$; the squares give $^{2n}C_n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Squares the middle one.",
      remediation: t`Add every square: $^{2n}C_n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: t`Uses $n^2$.`,
      remediation: t`$\sum r^2\,{}^nC_r = n(n + 1)2^{n-2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Stops at the first derivative.",
      remediation: t`That gives $\sum r\,{}^nC_r$; $r^2$ needs one more step.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Uses only the second derivative.",
      remediation: t`$r^2 = r(r - 1) + r$: add both sums.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Forgets the sign.",
      remediation: t`With $x = -1$ the terms alternate and cancel.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: t`Gives $-n$.`,
      remediation: t`$n(1 - 1)^{n-1} = 0$ for $n \ge 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: t`Gives $n$.`,
      remediation: t`$n(1 - 1)^{n-1} = 0$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`$\displaystyle\sum_{r=0}^{10} r\,{}^{10}C_r =$`,
      verify: { kind: "value", inputs: { n: "10" }, params: { q: "r" } },
      options: [
        { key: "A", text: t`$5120$`, correct: true, value: "5120" },
        { key: "B", text: t`$1024$`, correct: false, misconceptionId: "C11-M1", value: "1024" },
        { key: "C", text: t`$10240$`, correct: false, misconceptionId: "C11-M2", value: "10240" },
        { key: "D", text: t`$4608$`, correct: false, misconceptionId: "C11-M3", value: "4608" },
      ],
      solution: {
        steps: [
          t`$n2^{n-1}$ with $n = 10$`,
          t`$10 \times 2^9 = 5120$`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`$\displaystyle\sum_{r=0}^{9} \frac{^9C_r}{r + 1} =$`,
      verify: { kind: "value", inputs: { n: "9" }, params: { q: "frac" } },
      options: [
        { key: "A", text: t`$\frac{256}{5}$`, correct: false, misconceptionId: "C11-M5", value: "256/5" },
        { key: "B", text: t`$\frac{511}{9}$`, correct: false, misconceptionId: "C11-M6", value: "511/9" },
        { key: "C", text: t`$\frac{1023}{10}$`, correct: true, value: "1023/10" },
        { key: "D", text: t`$\frac{512}{5}$`, correct: false, misconceptionId: "C11-M4", value: "512/5" },
      ],
      solution: {
        steps: [
          t`$\frac{2^{10} - 1}{10}$`,
          t`$= \frac{1023}{10}$`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`$(^6C_0)^2 + (^6C_1)^2 + \dots + (^6C_6)^2 =$`,
      verify: { kind: "value", inputs: { n: "6" }, params: { q: "sq" } },
      options: [
        { key: "A", text: t`$4096$`, correct: false, misconceptionId: "C11-M7", value: "4096" },
        { key: "B", text: t`$64$`, correct: false, misconceptionId: "C11-M8", value: "64" },
        { key: "C", text: t`$400$`, correct: false, misconceptionId: "C11-M9", value: "400" },
        { key: "D", text: t`$924$`, correct: true, value: "924" },
      ],
      solution: {
        steps: [
          t`$^{12}C_6$`,
          t`$= 924$`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`$\displaystyle\sum_{r=0}^{5} r^2\,{}^5C_r =$`,
      verify: { kind: "value", inputs: { n: "5" }, params: { q: "r2" } },
      options: [
        { key: "A", text: t`$80$`, correct: false, misconceptionId: "C11-M11", value: "80" },
        { key: "B", text: t`$160$`, correct: false, misconceptionId: "C11-M12", value: "160" },
        { key: "C", text: t`$240$`, correct: true, value: "240" },
        { key: "D", text: t`$400$`, correct: false, misconceptionId: "C11-M10", value: "400" },
      ],
      solution: {
        steps: [
          t`$n(n + 1)2^{n-2}$ with $n = 5$`,
          t`$5 \times 6 \times 8 = 240$`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`$\displaystyle\sum_{r=0}^{7} (-1)^r\,r\,{}^7C_r =$`,
      verify: { kind: "value", inputs: { n: "7" }, params: { q: "alt" } },
      options: [
        { key: "A", text: t`$448$`, correct: false, misconceptionId: "C11-M13", value: "448" },
        { key: "B", text: t`$-7$`, correct: false, misconceptionId: "C11-M14", value: "-7" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C11-M15", value: "7" },
        { key: "D", text: t`$0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`Differentiate, put $x = -1$: $7(1 - 1)^6$`,
          t`$= 0$`,
        ],
      },
    },
  ],
};
