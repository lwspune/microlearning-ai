import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** Centres of the grid's three columns (second factors) and three rows (first factors). */
const COLS = [2.5, 4, 5.5];
const ROWS = [4, 3, 2];
const FIRST = [1, 2, 3];
const SECOND = [4, 5, 6];
/** A label anchored this far below a cell's centre sits in the middle of the cell. */
const MID = 0.3;

/**
 * (1 + 2 + 3)(4 + 5 + 6) as a multiplication grid. The diagonal cells are the series
 * 1 × 4 + 2 × 5 + 3 × 6 (point 2); the rest are cross products (point 3); all nine make 90 (point 4).
 */
const GRID: FigureElement[] = [
  ...[4.5, 3.5, 2.5, 1.5].map((y): FigureElement => (
    { kind: "segment", from: [1.75, y], to: [6.25, y], tone: "muted", step: 2 }
  )),
  ...[1.75, 3.25, 4.75, 6.25].map((x): FigureElement => (
    { kind: "segment", from: [x, 1.5], to: [x, 4.5], tone: "muted", step: 2 }
  )),
  { kind: "label", at: [1, 5 - MID], label: "×", tone: "muted", step: 2 },
  ...SECOND.map((b, j): FigureElement => ({ kind: "label", at: [COLS[j], 5 - MID], label: `${b}`, step: 2 })),
  ...FIRST.map((a, i): FigureElement => ({ kind: "label", at: [1, ROWS[i] - MID], label: `${a}`, step: 2 })),
  ...FIRST.flatMap((a, i) => SECOND.map((b, j): FigureElement => ({
    kind: "label",
    at: [COLS[j], ROWS[i] - MID],
    label: `${a * b}`,
    tone: i === j ? "good" : "bad",
    step: i === j ? 2 : 3,
  }))),
  { kind: "label", at: [4, 0.8 - MID], label: "series: 4 + 10 + 18 = 32", tone: "good", step: 2 },
  { kind: "label", at: [4, 0 - MID], label: "all nine: 6 × 15 = 90", tone: "bad", step: 4 },
];
const GRID_VIEW = { x: [0, 7.5] as [number, number], y: [-0.6, 5.6] as [number, number] };

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`$1 \times 4 + 2 \times 5 + 3 \times 6 = 32$. A friend says it equals $(1 + 2 + 3)(4 + 5 + 6)$. **Is that right?**`,
    reveal: t`No: $(1 + 2 + 3)(4 + 5 + 6) = 6 \times 15 = 90$. Multiplying two sums also makes cross products like $1 \times 5$ and $2 \times 6$ that are not in the series. Instead, write the $r$th term, $r(r + 3) = r^2 + 3r$, and add each part: $(1 + 4 + 9) + 3(1 + 2 + 3) = 14 + 18 = 32$.`,
  },
  explanation: {
    intuition: [
      t`A **series** is a sum of terms, like $1 \times 5 + 3 \times 7 + 5 \times 9 + \ldots$.`,
      t`Its terms $5, 21, 45, \ldots$ have no fixed gap or ratio: it is neither an A.P. nor a G.P.`,
      t`But each term is built the same way from its **position** $r$, its place in the list: 1st, 2nd, 3rd, ...`,
      t`Write $t_r$ for the **$r$th term**, the term in position $r$: here $t_r = (2r - 1)(2r + 3)$.`,
      t`Multiply it out, and $t_r$ becomes a mix of $r^2$, $r$ and a **constant**, a plain number.`,
      t`Recall: you can add $r^2$, $r$ and $1$ from $r = 1$ to $n$, so add each part on its own and combine.`,
    ],
    formal: [
      {
        title: "Find the rth term",
        points: [
          t`Each term here is a product of two **factors**, numbers multiplied together.`,
          t`The first factors $1, 3, 5, \ldots$ form an A.P., and so do the second factors $5, 7, 9, \ldots$.`,
          t`Recall: an A.P. with first term $a$ and common difference $d$ has $r$th term $a + (r - 1)d$.`,
          t`First factors: $a = 1$ and $d = 2$, so $1 + (r - 1)2 = 2r - 1$.`,
          t`Second factors: $a = 5$ and $d = 2$, so $5 + (r - 1)2 = 2r + 3$.`,
          t`So $t_r = (2r - 1)(2r + 3)$.`,
        ],
      },
      {
        title: "Expand the rth term",
        points: [
          t`To **expand** brackets, multiply every part of one bracket by every part of the other.`,
          t`So $(2r - 1)(2r + 3)$ equals $4r^2 + 6r - 2r - 3$.`,
          t`Collect the $r$ terms: $t_r = 4r^2 + 4r - 3$.`,
        ],
      },
      {
        title: "Split the sum",
        points: [
          t`Recall: $S_n = \sum_{r=1}^{n} t_r$ is $t_1 + t_2 + \ldots + t_n$, the sum of the first $n$ terms.`,
          t`$\sum$ splits over $+$ and $-$: $\sum (t_r + u_r) = \sum t_r + \sum u_r$.`,
          t`A number multiplying every term comes out in front: $\sum a\,t_r = a\sum t_r$.`,
          t`A constant is added once for each $r$, so $\sum_{r=1}^{n} c = cn$.`,
          t`For example, $\sum_{r=1}^{n} (5r^2 + 4r - 3)$ equals $5\sum r^2 + 4\sum r - 3n$.`,
        ],
      },
      {
        title: "Sum each power of r",
        points: [
          t`Then put in the three sums of powers, each from $r = 1$ to $n$.`,
          t`The sum of $r$: $\sum r = \frac{n(n+1)}{2}$.`,
          t`The sum of squares: $\sum r^2 = \frac{n(n+1)(2n+1)}{6}$.`,
          t`The sum of cubes: $\sum r^3 = \left(\frac{n(n+1)}{2}\right)^2$.`,
          t`Check: put $n = 1$ in your $S_n$, and you must get the first term back.`,
        ],
      },
      {
        title: "Σ never splits over ×",
        points: [
          t`$\sum$ does not split over $\times$: $\sum (t_r u_r)$ is not $\sum t_r \times \sum u_r$.`,
          t`Take $1 \times 4 + 2 \times 5 + 3 \times 6$: its terms $4$, $10$ and $18$ add up to $32$.`,
          t`But $(1 + 2 + 3)(4 + 5 + 6)$ multiplies every first factor by every second factor.`,
          t`That adds all nine products in the grid: $6 \times 15 = 90$.`,
          t`The extra six, like $1 \times 5$ and $2 \times 6$, are **cross products**: they are not terms of the series.`,
          t`So never sum the factors separately: expand $t_r$ first, then sum each part.`,
        ],
        figure: {
          alt: "A multiplication grid: the first factors 1, 2, 3 down the side and the second factors 4, 5, 6 along the top. The three cells on the diagonal, 4, 10 and 18, are the terms of the series 1 × 4 + 2 × 5 + 3 × 6, which add up to 32. The other six cells, 5, 6, 8, 12, 12 and 15, are cross products such as 1 × 5 and 2 × 6. The product of the sums, 6 × 15 = 90, adds all nine cells.",
          axes: "none",
          view: GRID_VIEW,
          elements: GRID,
        },
      },
      {
        title: "Ratio problems",
        points: [
          t`Some problems set one series divided by another equal to a number, and ask for $n$.`,
          t`Sum the top series and the bottom series separately, each from its own $t_r$.`,
          t`Cancel the factors the two sums share.`,
          t`Then set the fraction equal to the number, and solve for $n$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $1 \times 5 + 3 \times 7 + 5 \times 9 + 7 \times 11 + \ldots$ up to $n$ terms.`,
      steps: [
        t`First factors $1, 3, 5, \ldots$: an A.P. with $a = 1$, $d = 2$, so $1 + (r - 1)2 = 2r - 1$. Second factors $5, 7, 9, \ldots$: $5 + (r - 1)2 = 2r + 3$. So $t_r = (2r - 1)(2r + 3)$.`,
        t`Expand: $t_r = 4r^2 + 6r - 2r - 3$ $= 4r^2 + 4r - 3$.`,
        t`Sum each part: $S_n = 4\sum r^2 + 4\sum r - 3n$ $= \frac{4n(n+1)(2n+1)}{6}$ $+ \frac{4n(n+1)}{2} - 3n$.`,
        t`Take out $\frac{n}{3}$: $S_n = \frac{n}{3}[2(2n^2 + 3n + 1)$ $+ 6(n + 1) - 9]$ $= \frac{n}{3}(4n^2 + 12n - 1)$. Check: $n = 1$ gives $\frac{15}{3} = 5 = 1 \times 5$.`,
      ],
      answer: t`$S_n = \frac{n}{3}(4n^2 + 12n - 1)$.`,
    },
    visualSpec: t`Drag $n$ to grow $1 \times 5 + 3 \times 7 + \ldots$ as a row of rectangles; each rectangle splits into a $4r^2$ part, a $4r$ part and a $-3$ strip, and three running totals update as $4\sum r^2$, $4\sum r$ and $-3n$.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: "Taking the Σ of a product as the product of the Σs: Σ(2r − 1)(2r + 3) = Σ(2r − 1) × Σ(2r + 3)",
      remediation: t`$\sum$ splits over $+$ and $-$, not over $\times$: a product of two sums also contains cross products that are not in the series. Multiply the brackets out first, then sum each power of $r$ on its own.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C14-M2",
      mistake: "Taking the Σ of a constant as the constant itself: Σ 3 = 3",
      remediation: t`A constant is added once for every term: $\sum_{r=1}^{n} c = c + c + \ldots + c = cn$. So $\sum_{r=1}^{n} 3 = 3n$, not $3$.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C14-M3",
      mistake: "Writing the rth term of each A.P. of factors as a + rd, so t_r is really the next term",
      remediation: t`The $r$th term of an A.P. is $a + (r - 1)d$. Put $r = 1$ in your $t_r$: it must give the first term of the series.`,
      fallback: { kind: "ext", topic: "arithmetic progressions" },
    },
    {
      id: "C14-M4",
      mistake: "Expanding brackets by multiplying only the first parts and the last parts: (2r − 1)(2r + 3) = 4r² − 3",
      remediation: t`Every part of one bracket multiplies every part of the other: $(2r - 1)(2r + 3) = 4r^2 + 6r - 2r - 3 = 4r^2 + 4r - 3$. The middle terms count.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
  ],
  engineNotes: [
    "C14-M3 needs a series written out term by term (given: terms); on a Σ-given item there is no t_r to build.",
    "C14-M2 needs a constant term in the expanded t_r; C14-M1 and C14-M4 need t_r to be a product of brackets.",
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.6 Q5" },
      stem: t`$5 \times 7 + 9 \times 11 + 13 \times 15 + \ldots$ up to $n$ terms equals:`,
      verify: { kind: "value", inputs: { n: "n" }, params: { t: ["4*r + 1", "4*r + 3"], given: "terms", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{n \left(16 n^{2} + 96 n + 185\right)}{3}$`, correct: false, misconceptionId: "C14-M3", value: "n*(16*n**2 + 96*n + 185)/3" },
        { key: "B", text: t`$\frac{n \left(16 n^{2} + 48 n + 41\right)}{3}$`, correct: true, value: "n*(16*n**2 + 48*n + 41)/3" },
        { key: "C", text: t`$n^{2} \left(2 n + 3\right) \left(2 n + 5\right)$`, correct: false, misconceptionId: "C14-M1", value: "n**2*(4*n**2 + 16*n + 15)" },
        { key: "D", text: t`$\frac{16 n^{3} + 48 n^{2} + 32 n + 9}{3}$`, correct: false, misconceptionId: "C14-M2", value: "16*n**3/3 + 16*n**2 + 32*n/3 + 3" },
      ],
      solution: {
        steps: [
          t`First factors $5, 9, 13, \ldots$: $5 + (r - 1)4 = 4r + 1$. Second factors $7, 11, 15, \ldots$: $4r + 3$. So $t_r = (4r + 1)(4r + 3) = 16r^2 + 16r + 3$.`,
          t`$S_n = 16\sum r^2 + 16\sum r + 3n = \frac{8n(n+1)(2n+1)}{3} + 8n(n+1) + 3n$.`,
          t`$S_n = \frac{n}{3}\left[8(2n^2 + 3n + 1) + 24(n + 1) + 9\right] = \frac{n(16n^2 + 48n + 41)}{3}$. Check: $n = 1$ gives $\frac{105}{3} = 35 = 5 \times 7$.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.6 Q1" },
      stem: t`$\displaystyle\sum_{r=1}^{n} (r + 1)(2r - 1) = \ ?$`,
      verify: { kind: "value", inputs: { n: "n" }, params: { t: ["r + 1", "2*r - 1"], given: "sigma", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{n \left(4 n^{2} + 9 n - 1\right)}{6}$`, correct: true, value: "n*(4*n**2 + 9*n - 1)/6" },
        { key: "B", text: t`$\frac{n^{3} \left(n + 3\right)}{2}$`, correct: false, misconceptionId: "C14-M1", value: "n**3*(n + 3)/2" },
        { key: "C", text: t`$\frac{4 n^{3} + 9 n^{2} + 5 n - 6}{6}$`, correct: false, misconceptionId: "C14-M2", value: "2*n**3/3 + 3*n**2/2 + 5*n/6 - 1" },
        { key: "D", text: t`$\frac{n \left(n + 2\right) \left(2 n - 1\right)}{3}$`, correct: false, misconceptionId: "C14-M4", value: "n*(2*n**2 + 3*n - 2)/3" },
      ],
      solution: {
        steps: [
          t`Expand: $(r + 1)(2r - 1) = 2r^2 - r + 2r - 1 = 2r^2 + r - 1$.`,
          t`Sum each part: $2\sum r^2 + \sum r - n = \frac{n(n+1)(2n+1)}{3} + \frac{n(n+1)}{2} - n$.`,
          t`$= \frac{n}{6}\left[2(2n^2 + 3n + 1) + 3(n + 1) - 6\right] = \frac{n(4n^2 + 9n - 1)}{6}$. Check: $n = 1$ gives $2 = (1 + 1)(2 - 1)$.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q14" },
      stem: t`$2 \times 6 + 4 \times 9 + 6 \times 12 + \ldots$ up to $n$ terms equals:`,
      verify: { kind: "value", inputs: { n: "n" }, params: { t: ["2*r", "3*r + 3"], given: "terms", ask: "sum" } },
      options: [
        { key: "A", text: t`$2 n \left(n + 1\right) \left(n + 2\right)$`, correct: true, value: "2*n*(n**2 + 3*n + 2)" },
        { key: "B", text: t`$\frac{3 n^{2} \left(n + 1\right) \left(n + 3\right)}{2}$`, correct: false, misconceptionId: "C14-M1", value: "3*n**2*(n**2 + 4*n + 3)/2" },
        { key: "C", text: t`$2 n \left(n^{2} + 6 n + 11\right)$`, correct: false, misconceptionId: "C14-M3", value: "2*n*(n**2 + 6*n + 11)" },
        { key: "D", text: t`$n \left(n + 1\right) \left(2 n + 1\right)$`, correct: false, misconceptionId: "C14-M4", value: "n*(2*n**2 + 3*n + 1)" },
      ],
      solution: {
        steps: [
          t`First factors $2, 4, 6, \ldots$: $2r$. Second factors $6, 9, 12, \ldots$: $6 + (r - 1)3 = 3r + 3$. So $t_r = 2r(3r + 3) = 6r^2 + 6r$.`,
          t`$S_n = 6\sum r^2 + 6\sum r = n(n+1)(2n+1) + 3n(n+1)$.`,
          t`$S_n = n(n+1)(2n + 1 + 3) = 2n(n+1)(n+2)$. Check: $n = 1$ gives $12 = 2 \times 6$.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.6 Q8" },
      stem: t`$1 \times 3 \times 5 + 3 \times 5 \times 7 + 5 \times 7 \times 9 + \ldots$ up to $n$ terms equals:`,
      verify: { kind: "value", inputs: { n: "n" }, params: { t: ["2*r - 1", "2*r + 1", "2*r + 3"], given: "terms", ask: "sum" } },
      options: [
        { key: "A", text: t`$2 n^{4} + 8 n^{3} + 7 n^{2} + n - 3$`, correct: false, misconceptionId: "C14-M2", value: "2*n**4 + 8*n**3 + 7*n**2 + n - 3" },
        { key: "B", text: t`$n \left(n + 4\right) \left(2 n^{2} + 8 n + 11\right)$`, correct: false, misconceptionId: "C14-M3", value: "n*(2*n**3 + 16*n**2 + 43*n + 44)" },
        { key: "C", text: t`$n \left(2 n^{3} + 4 n^{2} + 2 n - 3\right)$`, correct: false, misconceptionId: "C14-M4", value: "n*(2*n**3 + 4*n**2 + 2*n - 3)" },
        { key: "D", text: t`$n \left(n + 2\right) \left(2 n^{2} + 4 n - 1\right)$`, correct: true, value: "n*(2*n**3 + 8*n**2 + 7*n - 2)" },
      ],
      solution: {
        steps: [
          t`The three factors are $2r - 1$, $2r + 1$, $2r + 3$. Since $(2r - 1)(2r + 1) = 4r^2 - 1$, $t_r = (4r^2 - 1)(2r + 3) = 8r^3 + 12r^2 - 2r - 3$.`,
          t`$S_n = 8\sum r^3 + 12\sum r^2 - 2\sum r - 3n = 2n^2(n+1)^2 + 2n(n+1)(2n+1) - n(n+1) - 3n$.`,
          t`Take out $n$: $S_n = n\left[(2n^3 + 4n^2 + 2n) + (4n^2 + 6n + 2) - (n + 1) - 3\right] = n(2n^3 + 8n^2 + 7n - 2)$.`,
          t`This factorises as $n(n+2)(2n^2 + 4n - 1)$. Check: $n = 1$ gives $1 \times 3 \times 5 = 15$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q18" },
      stem: t`To find $n$ when $\dfrac{1 + 2 + 3 + \ldots \text{ to } n \text{ terms}}{1 \times 2 + 2 \times 3 + 3 \times 4 + \ldots \text{ to } n \text{ terms}} = \dfrac{3}{22}$, first simplify the left side. It equals:`,
      verify: { kind: "value", inputs: { n: "n" }, params: { t: ["r"], d: ["r", "r + 1"], given: "terms", ask: "ratio" } },
      options: [
        { key: "A", text: t`$\frac{2}{n \left(n + 3\right)}$`, correct: false, misconceptionId: "C14-M1", value: "2/(n*(n + 3))" },
        { key: "B", text: t`$\frac{3 \left(n + 3\right)}{2 \left(n^{2} + 6 n + 11\right)}$`, correct: false, misconceptionId: "C14-M3", value: "3*(n + 3)/(2*(n**2 + 6*n + 11))" },
        { key: "C", text: t`$\frac{3}{2 n + 1}$`, correct: false, misconceptionId: "C14-M4", value: "3/(2*n + 1)" },
        { key: "D", text: t`$\frac{3}{2 \left(n + 2\right)}$`, correct: true, value: "3/(2*(n + 2))" },
      ],
      solution: {
        steps: [
          t`Top: $1 + 2 + \ldots + n = \frac{n(n+1)}{2}$.`,
          t`Bottom: $t_r = r(r + 1) = r^2 + r$, so the sum is $\frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2} = \frac{n(n+1)(2n+4)}{6} = \frac{n(n+1)(n+2)}{3}$.`,
          t`Ratio: $\frac{n(n+1)}{2} \times \frac{3}{n(n+1)(n+2)} = \frac{3}{2(n+2)}$. Setting it equal to $\frac{3}{22}$ gives $n + 2 = 11$, so $n = 9$.`,
        ],
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q20" },
      stem: t`To find $n$ when $\dfrac{1 \times 3 + 2 \times 5 + 3 \times 7 + \ldots \text{ to } n \text{ terms}}{1^3 + 2^3 + 3^3 + \ldots \text{ to } n \text{ terms}} = \dfrac{5}{9}$, first simplify the left side. It equals:`,
      verify: { kind: "value", inputs: { n: "n" }, params: { t: ["r", "2*r + 1"], d: ["r", "r", "r"], given: "terms", ask: "ratio" } },
      options: [
        { key: "A", text: t`$\frac{2 \left(4 n^{2} + 21 n + 35\right)}{3 \left(n + 3\right) \left(n^{2} + 3 n + 4\right)}$`, correct: false, misconceptionId: "C14-M3", value: "2*(4*n**2 + 21*n + 35)/(3*(n + 3)*(n**2 + 3*n + 4))" },
        { key: "B", text: t`$\frac{4 \left(2 n + 1\right)}{3 n \left(n + 1\right)}$`, correct: false, misconceptionId: "C14-M4", value: "4*(2*n + 1)/(3*n*(n + 1))" },
        { key: "C", text: t`$\frac{2 \left(4 n + 5\right)}{3 n \left(n + 1\right)}$`, correct: true, value: "2*(4*n + 5)/(3*n*(n + 1))" },
        { key: "D", text: t`$\frac{4 \left(n + 2\right)}{n \left(n + 1\right)^{2}}$`, correct: false, misconceptionId: "C14-M1", value: "4*(n + 2)/(n*(n + 1)**2)" },
      ],
      solution: {
        steps: [
          t`Top: $t_r = r(2r + 1) = 2r^2 + r$, so the sum is $\frac{n(n+1)(2n+1)}{3} + \frac{n(n+1)}{2} = \frac{n(n+1)(4n+5)}{6}$.`,
          t`Bottom: $\sum r^3 = \frac{n^2(n+1)^2}{4}$.`,
          t`Ratio: $\frac{n(n+1)(4n+5)}{6} \times \frac{4}{n^2(n+1)^2} = \frac{2(4n+5)}{3n(n+1)}$.`,
          t`Setting it equal to $\frac{5}{9}$: $18(4n + 5) = 15n(n + 1)$, so $5n^2 - 19n - 30 = 0$, or $(n - 5)(5n + 6) = 0$. So $n = 5$.`,
        ],
      },
    },
  ],
};
