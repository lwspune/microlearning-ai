import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`The tops of $1 + \frac{2}{2} + \frac{3}{4} + \frac{4}{8} + \frac{5}{16} + \cdots$ grow forever. **Can the sum still be a finite number?**`,
    reveal: t`Yes. Call it $S$ and halve every term: $\frac{S}{2} = \frac{1}{2} + \frac{2}{4} + \frac{3}{8} + \cdots$. Line it up one place to the right and subtract: $S - \frac{S}{2} = 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = 2$, a plain G.P. So $\frac{S}{2} = 2$ and $S = 4$. The halving bottoms win over the growing tops.`,
  },
  explanation: {
    intuition: t`Each term is an A.P. number times a G.P. number: $1 \times 1$, $2 \times 2$, $3 \times 4$, $\ldots$ The sum is not a G.P., because $\frac{t_2}{t_1} \ne \frac{t_3}{t_2}$. But multiply the whole sum by the G.P.'s ratio $r$ and shift it one place: each term now sits under a term with the same power of $r$. Subtracting, the A.P. parts differ by $d$ every time, so what is left is a G.P. you can already sum. Then divide by $1 - r$ to get back to $S$.`,
    formal: t`**What it is.** An arithmetico-geometric series has $t_n = [a + (n - 1)d]\,r^{n-1}$: the $n$th term of an A.P. ($a$, $d$) times the $n$th term of a G.P. (first term $1$, ratio $r$). Split each term into its two factors to read off $a$, $d$ and $r$.

**Multiply by $r$ and subtract.** Under $S_n = a + (a + d)r + (a + 2d)r^2 + \cdots$ write $rS_n$, shifted one place. Subtracting gives
$$(1 - r)S_n = a + \underbrace{dr + dr^2 + \cdots + dr^{n-1}}_{\text{G.P.: first term } dr,\ n - 1 \text{ terms}} - [a + (n - 1)d]\,r^n$$
The last piece is the end term of $rS_n$: nothing in $S_n$ cancels it.

**Sum of $n$ terms** ($r \ne 1$)
$$S_n = \frac{a}{1 - r} + \frac{dr(1 - r^{n-1})}{(1 - r)^2} - \frac{[a + (n - 1)d]\,r^n}{1 - r}$$

**Sum to infinity** ($|r| < 1$): the end term shrinks to $0$, so
$$S_\infty = \frac{a}{1 - r} + \frac{dr}{(1 - r)^2}$$
The square is there because you divide by $1 - r$ twice: once to sum the G.P. of $d$s, once more to turn $(1 - r)S$ into $S$.

**Check $|r|$, not $\frac{t_2}{t_1}$.** The series is not a G.P., so the ratio of its first two terms means nothing. The sum to infinity exists when the G.P. factor's $|r| < 1$.`,
    worked: {
      prompt: t`Find $t_n$ and the sum of $n$ terms of $1, 4, 12, 32, 80, 192, \ldots$`,
      steps: [
        t`Split the terms: $1 \times 1$, $2 \times 2$, $3 \times 4$, $4 \times 8$, $5 \times 16$. The first factors are the A.P. $1, 2, 3, \ldots$ ($a = 1$, $d = 1$); the second are the G.P. $1, 2, 4, \ldots$ ($r = 2$). So $t_n = n \cdot 2^{n-1}$.`,
        t`$S_n = 1 + 2 \cdot 2 + 3 \cdot 2^2 + \cdots + n \cdot 2^{n-1}$, and $2S_n = 1 \cdot 2 + 2 \cdot 2^2 + \cdots + (n - 1)2^{n-1} + n \cdot 2^n$, shifted one place.`,
        t`Subtract: $S_n - 2S_n = 1 + 2 + 2^2 + \cdots + 2^{n-1} - n \cdot 2^n = (2^n - 1) - n \cdot 2^n$.`,
        t`So $-S_n = 2^n - 1 - n \cdot 2^n$, giving $S_n = 1 + (n - 1)2^n$. Check $n = 3$: $1 + 4 + 12 = 17 = 1 + 2 \times 8$.`,
      ],
      answer: t`$t_n = n \cdot 2^{n-1}$ and $S_n = 1 + (n - 1)2^n$.`,
    },
    visualSpec: t`Two rows of bars: the terms of $S$ and, under them, the terms of $rS$ shifted one place; dragging $n$ adds terms, and subtracting the rows leaves the first term, a row of G.P. bars $dr, dr^2, \ldots$, and one stray end bar.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Treats the series as a G.P. with ratio $\frac{t_2}{t_1}$ and uses the G.P. sum formula`,
      remediation: t`Check the ratio twice: $\frac{t_2}{t_1} \ne \frac{t_3}{t_2}$, so this is not a G.P. Split each term into an A.P. factor times a G.P. factor, then multiply by $r$ and subtract.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C12-M2",
      mistake: t`Divides by $1 - r$ only once: $S_\infty = \frac{a}{1 - r} + \frac{dr}{1 - r}$, the square dropped`,
      remediation: t`After subtracting, the left side is $(1 - r)S$, so divide the whole right side by $1 - r$, including the G.P. sum $\frac{dr}{1 - r}$. That makes $\frac{dr}{(1 - r)^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: t`Drops the end term $[a + (n - 1)d]\,r^n$ of $rS_n$ when subtracting`,
      remediation: t`The shifted row $rS_n$ ends one place later than $S_n$, so its last term $[a + (n - 1)d]\,r^n$ has nothing to cancel against. Subtract it, just as $ar^n$ is left over in the G.P. sum.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C12-M4",
      mistake: t`Sums the G.P. of $d$s from $d$ instead of $dr$: takes $dr + dr^2 + \cdots$ as $d + dr + \cdots$`,
      remediation: t`After subtracting, the first term $a$ stands alone and the G.P. starts at $dr$: $dr + dr^2 + \cdots = \frac{dr}{1 - r}$ for an infinite sum. Write out the first two terms of the G.P. before you use its formula.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C12-M3 applies only to a sum of n terms. When r > 1 it gives a negative sum for a series of positive terms, so its items use 0 < r < 1.",
    t`On a sum to infinity, C12-M1 gives 'No finite sum' when $|t_2/t_1| \ge 1$ even though $|r| < 1$ (C12-Q2).`,
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q33" },
      stem: t`The sum to infinity of $1 + \frac{4}{5} + \frac{7}{25} + \frac{10}{125} + \frac{13}{625} + \cdots$ is:`,
      verify: { kind: "value", inputs: { a: "1", d: "3", r: "1/5" }, params: { ask: "inf" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C12-M1", value: "5" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C12-M2", value: "2" },
        { key: "C", text: t`$\frac{95}{16}$`, correct: false, misconceptionId: "C12-M4", value: "95/16" },
        { key: "D", text: t`$\frac{35}{16}$`, correct: true, value: "35/16" },
      ],
      solution: {
        steps: [
          t`The tops $1, 4, 7, 10, \ldots$ are an A.P. with $a = 1$, $d = 3$; the bottoms give the G.P. factor $r = \frac{1}{5}$.`,
          t`$S - \frac{1}{5}S = 1 + \frac{3}{5} + \frac{3}{25} + \frac{3}{125} + \cdots = 1 + \frac{\frac{3}{5}}{1 - \frac{1}{5}} = 1 + \frac{3}{4} = \frac{7}{4}$.`,
          t`$\frac{4}{5}S = \frac{7}{4}$, so $S = \frac{35}{16}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.5 Q2(iii)" },
      stem: t`The sum to infinity of $1 - \frac{4}{3} + \frac{7}{9} - \frac{10}{27} + \cdots$ is:`,
      verify: { kind: "value", inputs: { a: "1", d: "3", r: "-1/3" }, params: { ask: "inf" } },
      options: [
        { key: "A", text: t`$\frac{39}{16}$`, correct: false, misconceptionId: "C12-M4", value: "39/16" },
        { key: "B", text: t`$\frac{3}{16}$`, correct: true, value: "3/16" },
        { key: "C", text: t`No finite sum`, correct: false, misconceptionId: "C12-M1", value: "no_finite_sum" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C12-M2", value: "0" },
      ],
      solution: {
        steps: [
          t`The terms are $1 \times 1$, $4 \times \left(-\frac{1}{3}\right)$, $7 \times \frac{1}{9}$, $\ldots$: $a = 1$, $d = 3$, $r = -\frac{1}{3}$. Since $|r| < 1$ the sum exists, though $\frac{t_2}{t_1} = -\frac{4}{3}$.`,
          t`$S - rS = 1 + 3\left(-\frac{1}{3}\right) + 3\left(\frac{1}{9}\right) + \cdots = 1 + \frac{-1}{1 + \frac{1}{3}} = 1 - \frac{3}{4} = \frac{1}{4}$.`,
          t`$(1 - r)S = \frac{4}{3}S = \frac{1}{4}$, so $S = \frac{3}{16}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.5 Q2(ii)" },
      stem: t`The sum to infinity of $3 + \frac{6}{5} + \frac{9}{25} + \frac{12}{125} + \frac{15}{625} + \cdots$ is:`,
      verify: { kind: "value", inputs: { a: "3", d: "3", r: "1/5" }, params: { ask: "inf" } },
      options: [
        { key: "A", text: t`$\frac{135}{16}$`, correct: false, misconceptionId: "C12-M4", value: "135/16" },
        { key: "B", text: t`$\frac{75}{16}$`, correct: true, value: "75/16" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C12-M1", value: "5" },
        { key: "D", text: t`$\frac{9}{2}$`, correct: false, misconceptionId: "C12-M2", value: "9/2" },
      ],
      solution: {
        steps: [
          t`The tops $3, 6, 9, \ldots$ are an A.P. with $a = 3$, $d = 3$; the bottoms give $r = \frac{1}{5}$.`,
          t`$S - \frac{1}{5}S = 3 + \frac{3}{5} + \frac{3}{25} + \cdots = 3 + \frac{\frac{3}{5}}{1 - \frac{1}{5}} = 3 + \frac{3}{4} = \frac{15}{4}$.`,
          t`$\frac{4}{5}S = \frac{15}{4}$, so $S = \frac{75}{16}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.5 Q1(iv)" },
      stem: t`The sum of the first $6$ terms of $3, 12, 36, 96, 240, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "3", d: "3", r: "2", n: "6" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$1056$`, correct: false, misconceptionId: "C12-M4", value: "1056" },
        { key: "B", text: t`$963$`, correct: true, value: "963" },
        { key: "C", text: t`$4095$`, correct: false, misconceptionId: "C12-M1", value: "4095" },
        { key: "D", text: t`$1335$`, correct: false, misconceptionId: "C12-M2", value: "1335" },
      ],
      solution: {
        steps: [
          t`Split: $3 \times 1$, $6 \times 2$, $9 \times 4$, $12 \times 8$, $15 \times 16$. So $a = 3$, $d = 3$, $r = 2$, and $t_6 = 18 \times 32 = 576$.`,
          t`$S_6 - 2S_6 = 3 + 3 \cdot 2 + 3 \cdot 4 + 3 \cdot 8 + 3 \cdot 16 + 3 \cdot 32 - 18 \cdot 64 = 3 \times 63 - 1152 = -963$.`,
          t`So $S_6 = 963$. Check: $3 + 12 + 36 + 96 + 240 + 576 = 963$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.5 Q1(ii)" },
      stem: t`For $x = \frac{1}{2}$, the sum of the first $6$ terms of $1, 4x, 7x^2, 10x^3, 13x^4, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "1", d: "3", r: "1/2", n: "6" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{125}{16}$`, correct: false, misconceptionId: "C12-M3", value: "125/16" },
        { key: "B", text: t`$\frac{105}{8}$`, correct: false, misconceptionId: "C12-M4", value: "105/8" },
        { key: "C", text: t`$\frac{117}{16}$`, correct: true, value: "117/16" },
        { key: "D", text: t`$63$`, correct: false, misconceptionId: "C12-M1", value: "63" },
      ],
      solution: {
        steps: [
          t`Here $a = 1$, $d = 3$, $r = x = \frac{1}{2}$; the 6th term's A.P. factor is $1 + 5 \times 3 = 16$.`,
          t`$S_6 - \frac{1}{2}S_6 = 1 + 3\left(\frac{1}{2} + \frac{1}{4} + \cdots + \frac{1}{32}\right) - \frac{16}{64} = 1 + \frac{93}{32} - \frac{1}{4} = \frac{117}{32}$.`,
          t`$\frac{1}{2}S_6 = \frac{117}{32}$, so $S_6 = \frac{117}{16}$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.5 Q1(i)" },
      stem: t`For $x = \frac{1}{3}$, the sum of the first $4$ terms of $2, 4x, 6x^2, 8x^3, 10x^4, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "2", d: "2", r: "1/3", n: "4" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{103}{27}$`, correct: false, misconceptionId: "C12-M2", value: "103/27" },
        { key: "B", text: t`$\frac{40}{9}$`, correct: false, misconceptionId: "C12-M3", value: "40/9" },
        { key: "C", text: t`$\frac{194}{27}$`, correct: false, misconceptionId: "C12-M4", value: "194/27" },
        { key: "D", text: t`$\frac{116}{27}$`, correct: true, value: "116/27" },
      ],
      solution: {
        steps: [
          t`Here $a = 2$, $d = 2$, $r = x = \frac{1}{3}$; the 4th term's A.P. factor is $8$.`,
          t`$S_4 - \frac{1}{3}S_4 = 2 + \frac{2}{3} + \frac{2}{9} + \frac{2}{27} - \frac{8}{81} = \frac{240}{81} - \frac{8}{81} = \frac{232}{81}$.`,
          t`$\frac{2}{3}S_4 = \frac{232}{81}$, so $S_4 = \frac{116}{27}$.`,
        ],
      },
    },
  ],
};
