import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The x-position of column k in a row figure, `gap` apart: one column per term. */
const col = (k: number, gap = 1.6) => +(2.2 + gap * k).toFixed(2);

/** The idea slide's column gap: wider, for terms like "n − 1". */
const WIDE = 1.9;

/** The heights of the rows on the idea slide: the sum, the sum backwards, and the column totals. */
const ROW_TOP = 3.2;
const ROW_BACK = 2.2;
const ROW_SUM = 1.1;

/**
 * One row of a sum: `name` (if any) then `terms` in columns `first` onwards, joined by "+".
 * Every element appears at `step`, in `tone` (default accent).
 */
function row(name: string, y: number, terms: string[], step: number, tone?: FigureElement["tone"], first = 0, gap = 1.6): FigureElement[] {
  const els: FigureElement[] = name ? [{ kind: "label", at: [0.6, y], label: name, step }] : [];
  terms.forEach((label, i) => {
    const k = first + i;
    els.push({ kind: "label", at: [col(k, gap), y], label, tone, step });
    if (i > 0) els.push({ kind: "label", at: [col(k, gap) - gap / 2 + 0.05, y], label: "+", tone: "muted", step });
  });
  return els;
}

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`$1^3 + 2^3 + 3^3 + 4^3 = 100$, and $1 + 2 + 3 + 4 = 10$. **Is $100 = 10^2$ a coincidence?**`,
    reveal: t`No. $1^3 + 2^3 = 9 = 3^2$ and $1^3 + 2^3 + 3^3 = 36 = 6^2$: the first $n$ cubes always add up to the square of $1 + 2 + \ldots + n$. So $\sum r^3 = \left[\frac{n(n+1)}{2}\right]^2$. Squares are different: $1^2 + 2^2 = 5$, not $3^2$.`,
  },
  explanation: {
    intuition: [
      t`$\Sigma$, the Greek capital letter **sigma**, means "add up".`,
      t`$\sum_{r=1}^{n} r$ adds $r$ as it counts $1, 2, \ldots, n$: it is $1 + 2 + \ldots + n$.`,
      t`Write the same sum backwards under it: $n + (n - 1) + \ldots + 1$.`,
      t`Each column then adds up to $n + 1$.`,
      t`There are $n$ columns, so twice the sum is $n(n + 1)$, and $\sum r = \frac{n(n+1)}{2}$.`,
      t`Sums of squares and of cubes have formulas too, so you never add term by term.`,
    ],
    figure: {
      alt: "The sum S = 1 + 2 + 3 + ⋯ + n written as a row, and below it the same sum backwards, S = n + (n − 1) + (n − 2) + ⋯ + 1, so that 1 sits over n, 2 over n − 1, and so on. Under a line, each column adds to n + 1, so 2S is n + 1 added n times: 2S = n(n + 1), and S = n(n + 1)/2.",
      axes: "none",
      view: { x: [0, 11.4], y: [-1.2, 4] },
      elements: [
        ...row("S =", ROW_TOP, ["1", "2", "3", "⋯", "n"], 2, undefined, 0, WIDE),
        ...row("S =", ROW_BACK, ["n", "n − 1", "n − 2", "⋯", "1"], 3, undefined, 0, WIDE),
        { kind: "segment", from: [0.6, ROW_SUM + 0.75], to: [11, ROW_SUM + 0.75], tone: "muted", step: 4 },
        ...row("2S =", ROW_SUM, ["n + 1", "n + 1", "n + 1", "⋯", "n + 1"], 4, "good", 0, WIDE),
        { kind: "label", at: [1.2, 0.1], label: "n columns, so 2S = n(n + 1)", tone: "good", step: 5 },
        { kind: "label", at: [1.2, -0.8], label: "S = n(n + 1)/2", tone: "good", step: 5 },
      ],
    },
    formal: [
      {
        title: "The three formulas",
        points: [
          t`Each sum on this slide runs from $r = 1$ to $r = n$.`,
          t`The first $n$ **natural numbers**, the counting numbers $1$ to $n$, add to $\sum r = \frac{n(n+1)}{2}$.`,
          t`Their squares add to $\sum r^2 = \frac{n(n+1)(2n+1)}{6}$.`,
          t`Their cubes add to $\sum r^3$ $= \left[\frac{n(n+1)}{2}\right]^2$.`,
          t`Only the cubes give the square of $\sum r$.`,
          t`Test with $n = 2$: $1^2 + 2^2 = 5$, but $1^3 + 2^3 = 9 = 3^2$.`,
        ],
      },
      {
        title: "Splitting a sum",
        points: [
          t`Let $a_r$ and $b_r$ be terms worked out from $r$, such as $r^2$ or $3r$.`,
          t`A sum or difference splits: $\sum (a_r \pm b_r)$ equals $\sum a_r \pm \sum b_r$.`,
          t`A **constant**, a number that does not change with $r$, comes out in front: $\sum k\,a_r = k \sum a_r$.`,
          t`A constant on its own is added once for each $r$: $\sum_{r=1}^{n} k = nk$.`,
          t`A **polynomial** in $r$ adds powers of $r$ times constants, like $3r^2 - 2r + 1$.`,
          t`So the sum of a polynomial splits into $\sum r^3$, $\sum r^2$, $\sum r$ and $\sum 1$, each with its formula.`,
        ],
      },
      {
        title: "Sums not starting at 1",
        points: [
          t`The formulas add from $r = 1$, but a sum may start later: $3^2 + 4^2 + \ldots + 29^2$.`,
          t`Add from $1^2$ to $29^2$ instead, then take off the extra terms.`,
          t`The extra terms end just **before** the first term you want: at $2^2$, not $3^2$.`,
          t`The numbers below and above $\Sigma$ are its **limits**: the first and last values of $r$.`,
          t`So the sum is $\sum_{r=1}^{29} r^2 - \sum_{r=1}^{2} r^2$ $= 8555 - 5 = 8550$.`,
          t`In general, $\sum_{r=a}^{b}$ equals $\sum_{r=1}^{b} - \sum_{r=1}^{a-1}$.`,
        ],
        figure: {
          alt: "The squares 1², 2², 3², 4², ⋯, 29² in a row. The terms wanted, 3² to 29², are highlighted. A bracket under the whole row is labelled r = 1 to 29, and a shorter bracket under 1² and 2² only, the extra terms, is labelled r = 1 to 2: it stops just before 3². The result, 8555 − 5 = 8550, is shown below.",
          axes: "none",
          view: { x: [1.4, 11.8], y: [-2, 2.6] },
          elements: [
            ...row("", 1.5, ["3²", "4²", "⋯", "29²"], 1, undefined, 2),
            ...row("", 1.5, ["1²", "2²"], 2, "muted"),
            { kind: "label", at: [col(2) - 0.75, 1.5], label: "+", tone: "muted", step: 2 },
            { kind: "segment", from: [col(0) - 0.2, 1.1], to: [col(5) + 0.9, 1.1], step: 2 },
            { kind: "label", at: [5.6, 1.1], label: "r = 1 to 29", labelAt: "s", step: 2 },
            { kind: "segment", from: [col(0) - 0.2, -0.3], to: [col(1) + 0.6, -0.3], tone: "bad", step: 3 },
            { kind: "label", at: [col(0) + 0.6, -0.3], label: "r = 1 to 2", labelAt: "s", tone: "bad", step: 3 },
            { kind: "label", at: [6.6, -0.9], label: "8555 − 5 = 8550", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Sums of brackets",
        points: [
          t`In a series of brackets, every bracket follows one pattern in $r$: the **general term**.`,
          t`For example, $(2^2 - 1^2) + (4^2 - 3^2) + \ldots$ has general term $(2r)^2 - (2r - 1)^2$.`,
          t`Expand it first: $(2r)^2 - (2r - 1)^2 = 4r - 1$.`,
          t`Then find the $r$ of the first and of the last bracket: those are the limits.`,
          t`Sum the expanded term between those limits, splitting it as before.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $(70^2 - 69^2) + (68^2 - 67^2) + (66^2 - 65^2) + \ldots + (2^2 - 1^2)$.`,
      steps: [
        t`Each bracket is $(2r)^2 - (2r - 1)^2$: $r = 35$ gives $70^2 - 69^2$ and $r = 1$ gives $2^2 - 1^2$. So $r$ runs from $1$ to $35$.`,
        t`Expand: $(2r)^2 - (2r - 1)^2$ $= 4r^2 - (4r^2 - 4r + 1)$ $= 4r - 1$. The sum is $\sum_{r=1}^{35} (4r - 1)$.`,
        t`Split it: $4\sum_{r=1}^{35} r$ $- \sum_{r=1}^{35} 1$ $= 4 \times \frac{35 \times 36}{2} - 35$ $= 2520 - 35$ $= 2485$.`,
      ],
      answer: t`$2485$. Check: each bracket $a^2 - b^2 = a + b$ here, so the total is $1 + 2 + \ldots + 70 = \frac{70 \times 71}{2} = 2485$.`,
    },
    visualSpec: t`Drag $n$ to build a staircase of $1, 2, \ldots, n$ unit squares; a flipped copy fits on top to make an $n \times (n + 1)$ rectangle, so the staircase is half of $n(n + 1)$.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "For a sum starting at r = a, subtracting the sum up to a instead of up to a - 1, which removes the first term as well",
      remediation: t`To keep the first term, subtract the sum that ends just before it: $\sum_{r=a}^{b} = \sum_{r=1}^{b} - \sum_{r=1}^{a-1}$. For $5^2 + 6^2 + \ldots + 9^2$, subtract $\sum_{r=1}^{4} r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: "Adding a constant only once: taking the sum of k for r = 1 to n as k instead of nk",
      remediation: t`A constant is added once for every value of $r$, so $\sum_{r=1}^{n} k = nk$. In $\sum_{r=1}^{n} (4r - 1)$ the $-1$s add up to $-n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M3",
      mistake: "Mixing up the formulas: (n(n+1)/2)^2 for the sum of squares, n(n+1)(2n+1)/6 for the sum of cubes",
      remediation: t`$\sum r^2 = \frac{n(n+1)(2n+1)}{6}$ and $\sum r^3 = \left[\frac{n(n+1)}{2}\right]^2$: only the cubes give the square of $\sum r$. Check with $n = 2$: $1^2 + 2^2 = 5$ and $1^3 + 2^3 = 9$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M4",
      mistake: "Treating a sum that starts at r = a as if it started at r = 1: counting the terms and putting that count in the formula as n",
      remediation: t`The formulas add from $r = 1$. $5^2 + 6^2 + \ldots + 9^2$ has $5$ terms but is not $1^2 + \ldots + 5^2$: it is $\sum_{r=1}^{9} r^2 - \sum_{r=1}^{4} r^2$. For brackets, find the $r$ of the first and last bracket.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C13-M1 and C13-M4 give nothing to detect when the sum starts at r = 1: draw items with a lower limit above 1.",
    "C13-M2 needs a general term with a constant (e.g. 8r - 7 or a bracket that expands to 4r - 1); C13-M3 needs an r^2 or r^3 term.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q17" },
      stem: t`$12^2 + 13^2 + 14^2 + \ldots + 20^2 = ?$`,
      verify: { kind: "value", inputs: { a: "12", b: "20" }, params: { f: "r**2" } },
      options: [
        { key: "A", text: t`$2364$`, correct: true, value: "2364" },
        { key: "B", text: t`$2220$`, correct: false, misconceptionId: "C13-M1", value: "2220" },
        { key: "C", text: t`$39744$`, correct: false, misconceptionId: "C13-M3", value: "39744" },
        { key: "D", text: t`$285$`, correct: false, misconceptionId: "C13-M4", value: "285" },
      ],
      solution: {
        steps: [
          t`Subtract the squares before $12^2$: $12^2 + \ldots + 20^2 = \sum_{r=1}^{20} r^2 - \sum_{r=1}^{11} r^2$.`,
          t`$\sum_{r=1}^{20} r^2 = \frac{20 \times 21 \times 41}{6} = 2870$ and $\sum_{r=1}^{11} r^2 = \frac{11 \times 12 \times 23}{6} = 506$.`,
          t`$2870 - 506 = 2364$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "authored" },
      stem: t`$6^3 + 7^3 + 8^3 + \ldots + 15^3 = ?$`,
      verify: { kind: "value", inputs: { a: "6", b: "15" }, params: { f: "r**3" } },
      options: [
        { key: "A", text: t`$14175$`, correct: true, value: "14175" },
        { key: "B", text: t`$13959$`, correct: false, misconceptionId: "C13-M1", value: "13959" },
        { key: "C", text: t`$1185$`, correct: false, misconceptionId: "C13-M3", value: "1185" },
        { key: "D", text: t`$3025$`, correct: false, misconceptionId: "C13-M4", value: "3025" },
      ],
      solution: {
        steps: [
          t`Subtract the cubes before $6^3$: $6^3 + \ldots + 15^3 = \sum_{r=1}^{15} r^3 - \sum_{r=1}^{5} r^3$.`,
          t`$\sum_{r=1}^{15} r^3 = \left[\frac{15 \times 16}{2}\right]^2 = 120^2 = 14400$ and $\sum_{r=1}^{5} r^3 = \left[\frac{5 \times 6}{2}\right]^2 = 15^2 = 225$.`,
          t`$14400 - 225 = 14175$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.7.2 SolvedEx.1" },
      stem: t`$\displaystyle\sum_{r=11}^{20} (8r - 7) = ?$`,
      verify: { kind: "value", inputs: { a: "11", b: "20" }, params: { f: "8*r - 7" } },
      options: [
        { key: "A", text: t`$370$`, correct: false, misconceptionId: "C13-M4", value: "370" },
        { key: "B", text: t`$1170$`, correct: true, value: "1170" },
        { key: "C", text: t`$1089$`, correct: false, misconceptionId: "C13-M1", value: "1089" },
        { key: "D", text: t`$1240$`, correct: false, misconceptionId: "C13-M2", value: "1240" },
      ],
      solution: {
        steps: [
          t`$\sum_{r=1}^{n} (8r - 7) = 8 \times \frac{n(n+1)}{2} - 7n = 4n^2 - 3n$. The sum from $r = 11$ is this with $n = 20$ minus this with $n = 10$.`,
          t`$n = 20$: $1600 - 60 = 1540$. $n = 10$: $400 - 30 = 370$.`,
          t`$1540 - 370 = 1170$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q19" },
      stem: t`$(50^2 - 49^2) + (48^2 - 47^2) + (46^2 - 45^2) + \ldots + (10^2 - 9^2) = ?$`,
      verify: { kind: "value", inputs: { a: "5", b: "25" }, params: { f: "(2*r)**2 - (2*r - 1)**2" } },
      options: [
        { key: "A", text: t`$1220$`, correct: false, misconceptionId: "C13-M1", value: "1220" },
        { key: "B", text: t`$1260$`, correct: false, misconceptionId: "C13-M2", value: "1260" },
        { key: "C", text: t`$903$`, correct: false, misconceptionId: "C13-M4", value: "903" },
        { key: "D", text: t`$1239$`, correct: true, value: "1239" },
      ],
      solution: {
        steps: [
          t`Each bracket is $(2r)^2 - (2r - 1)^2 = 4r - 1$. The first, $50^2 - 49^2$, has $r = 25$; the last, $10^2 - 9^2$, has $r = 5$. So the sum is $\sum_{r=5}^{25} (4r - 1)$.`,
          t`$\sum_{r=1}^{n} (4r - 1) = 4 \times \frac{n(n+1)}{2} - n = 2n(n+1) - n$. With $n = 25$: $1300 - 25 = 1275$. With $n = 4$: $40 - 4 = 36$.`,
          t`$1275 - 36 = 1239$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.6 Q2" },
      stem: t`$\displaystyle\sum_{r=6}^{15} (3r^2 - 2r + 1) = ?$`,
      verify: { kind: "value", inputs: { a: "6", b: "15" }, params: { f: "3*r**2 - 2*r + 1" } },
      options: [
        { key: "A", text: t`$3355$`, correct: true, value: "3355" },
        { key: "B", text: t`$3345$`, correct: false, misconceptionId: "C13-M2", value: "3345" },
        { key: "C", text: t`$42325$`, correct: false, misconceptionId: "C13-M3", value: "42325" },
        { key: "D", text: t`$3258$`, correct: false, misconceptionId: "C13-M1", value: "3258" },
      ],
      solution: {
        steps: [
          t`$\sum_{r=1}^{n} (3r^2 - 2r + 1) = 3 \times \frac{n(n+1)(2n+1)}{6} - 2 \times \frac{n(n+1)}{2} + n$. Take this at $n = 15$ minus at $n = 5$.`,
          t`$n = 15$: $3 \times 1240 - 2 \times 120 + 15 = 3720 - 240 + 15 = 3495$. $n = 5$: $3 \times 55 - 2 \times 15 + 5 = 165 - 30 + 5 = 140$.`,
          t`$3495 - 140 = 3355$.`,
        ],
      },
    },
  ],
};
