import type { Concept, Pt } from "../../../types.ts";

const t = String.raw;

/** The total of the first `terms` terms of the series for (1 + x)^(-1): 1 - x + x^2 - ... */
const partial = (terms: number) => (x: number) => {
  let sum = 0;
  for (let r = 0; r < terms; r++) sum += (-x) ** r;
  return sum;
};

/** Points on y = g(x) from x0 to x1, for a `curve` element. */
const sample = (g: (x: number) => number, x0: number, x1: number, n = 60): Pt[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const x = x0 + ((x1 - x0) * i) / n;
    return [+x.toFixed(3), +g(x).toFixed(3)];
  });

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Long division gives $\frac{1}{1 + x} = 1 - x + x^2 - x^3 + \ldots$ Put $x = 2$: is $\frac{1}{3} = 1 - 2 + 4 - 8 + \ldots$? **What went wrong?**`,
    reveal: t`Nothing in the division: the series is only true for $|x| < 1$. At $x = 0.1$ the totals $1, 0.9, 0.91, 0.909, \ldots$ close in on $\frac{1}{1.1} = 0.9090\ldots$ At $x = 2$ the terms double each time, so the totals never settle. A negative or fractional index always gives an endless series like this, and it holds only while the term after $1$ is smaller than $1$ in size.`,
  },
  explanation: {
    intuition: [
      t`The **index** is the power $n$ in $(1 + x)^n$; so far it has been a positive whole number.`,
      t`Recall: the coefficient of $x^r$ is then $^nC_r$, which is $\frac{n(n-1)\ldots(n-r+1)}{r!}$.`,
      t`From $x^{n+1}$ on, the top includes the factor $(n - n) = 0$, so the expansion stops after $n + 1$ terms.`,
      t`Now let $n$ be negative or a fraction, such as $-3$ or $\frac{1}{2}$: the coefficients keep the same pattern.`,
      t`Then no factor on top is ever $0$, so the terms never stop: the sum is endless.`,
      t`An endless sum makes sense only when its terms shrink, so the $x$ in $(1 + x)$ must be less than $1$ in size.`,
    ],
    formal: [
      {
        title: "The binomial series",
        points: [
          t`Let $n$ be any **rational** number: a whole number or a fraction, positive or negative.`,
          t`Write $|x|$ for the size of $x$ without its sign: $|x| < 1$ means $x$ lies between $-1$ and $1$.`,
          t`For $|x| < 1$, $(1 + x)^n$ equals an endless sum, the **binomial series**.`,
          t`Its first three terms are $1 + nx + \frac{n(n-1)}{2!}x^2$.`,
          t`The next is $\frac{n(n-1)(n-2)}{3!}x^3$, and the terms go on for ever.`,
        ],
      },
      {
        title: "Where the series holds",
        points: [
          t`Take $n = -1$: $(1 + x)^{-1}$ is $\frac{1}{1 + x}$, drawn as the solid curve.`,
          t`Every coefficient comes out as $1$ or $-1$, so its series is $1 - x + x^2 - x^3 + \ldots$`,
          t`The first three terms, $1 - x + x^2$, give the first dashed curve.`,
          t`The first six terms, $1 - x + x^2 - x^3 + x^4 - x^5$, give the second.`,
          t`Between $x = -1$ and $x = 1$, the six-term total is the closer one: more terms, closer still.`,
          t`For $|x| > 1$ the terms keep growing, so the totals swing ever further from the curve.`,
        ],
        figure: {
          alt: "The curve y = 1/(1 + x) for x from about −0.7 to 2, with two dashed curves: the total of the first three terms of its series, 1 − x + x², and of the first six, up to −x⁵. Upright lines mark x = −1 and x = 1. Between them both totals lie near the curve, the six-term one nearer. Beyond x = 1 the three-term total rises above the curve and the six-term total falls far below it.",
          axes: "xy",
          view: { x: [-1.3, 2.1], y: [-1.1, 3.6] },
          elements: [
            { kind: "curve", points: sample((x) => 1 / (1 + x), -0.714, 2.1), step: 1 },
            { kind: "label", at: [1.5, 0.4], label: "1/(1 + x)", labelAt: "n", step: 1 },
            { kind: "curve", points: sample(partial(3), -1.15, 2.05), dashed: true, tone: "muted", step: 3 },
            { kind: "label", at: [1.75, partial(3)(1.75)], label: "1 − x + x²", labelAt: "nw", tone: "muted", step: 3 },
            { kind: "curve", points: sample(partial(6), -0.775, 1.214), dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [0.92, -0.6], label: "1 − x + … − x⁵", labelAt: "w", tone: "good", step: 4 },
            { kind: "line", through: [[-1, -1], [-1, 3]], tone: "muted", step: 5 },
            { kind: "label", at: [-1, -0.8], label: "x = −1", labelAt: "e", tone: "muted", step: 5 },
            { kind: "line", through: [[1, -1], [1, 3]], tone: "muted", step: 5 },
            { kind: "label", at: [1, 3.3], label: "x = 1", labelAt: "e", tone: "muted", step: 5 },
          ],
        },
      },
      {
        title: "The general term",
        points: [
          t`Recall: the **general term** $T_{r+1}$ is the $(r + 1)$th term, the one with $x^r$.`,
          t`Here $T_{r+1}$ equals $\frac{n(n-1)(n-2)\ldots(n-r+1)}{r!}$ times $x^r$.`,
          t`On top are $r$ factors, starting at $n$ and each $1$ less; underneath is $r! = 1 \times 2 \times \ldots \times r$.`,
          t`For $n = -3$ the coefficients are $1$, $-3$, $\frac{(-3)(-4)}{2!} = 6$ and $\frac{(-3)(-4)(-5)}{3!} = -10$.`,
          t`So $(1 + x)^{-3} = 1 - 3x + 6x^2 - 10x^3 + \ldots$`,
          t`It is not $(1 - x)^3 = 1 - 3x + 3x^2 - x^3$: a negative index does more than flip signs.`,
        ],
      },
      {
        title: "Replace x by kx",
        points: [
          t`The series works with any small term in place of $x$, such as $kx$ for a number $k$.`,
          t`In $(1 + kx)^n$, each $x^r$ becomes $(kx)^r = k^r x^r$: raise the whole of $kx$.`,
          t`For example, $(1 - 2x)^{\frac{1}{2}}$ has $n = \frac{1}{2}$ and $-2x$ in place of $x$.`,
          t`Its $x^2$ term is $\frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2!}$ times $(-2x)^2$.`,
          t`That is $-\frac{1}{8} \cdot 4x^2 = -\frac{x^2}{2}$.`,
          t`The term after $1$ in the bracket is now $-2x$, so it holds for $|2x| < 1$, that is $|x| < \frac{1}{2}$.`,
        ],
      },
      {
        title: "Make the bracket start with 1",
        points: [
          t`The series needs a bracket that starts with $1$, so first rewrite $(a + bx)^n$.`,
          t`Take $a$ out of the bracket, dividing $bx$ by $a$: $a + bx = a\left(1 + \frac{bx}{a}\right)$.`,
          t`Raise both factors to the power $n$: $(a + bx)^n$ equals $a^n\left(1 + \frac{bx}{a}\right)^n$.`,
          t`So $a^n$ comes out in front, not $a$.`,
          t`The term after $1$ in the bracket is now $\frac{bx}{a}$, so it holds for $\left|\frac{bx}{a}\right| < 1$.`,
          t`That is $|x| < \left|\frac{a}{b}\right|$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the first three terms of $(2 + x)^{-2}$ and say for which $x$ the expansion holds.`,
      steps: [
        t`Make the bracket start with $1$: $(2 + x)^{-2} = 2^{-2}\left(1 + \frac{x}{2}\right)^{-2}$ $= \frac{1}{4}\left(1 + \frac{x}{2}\right)^{-2}$.`,
        t`It holds when $\left|\frac{x}{2}\right| < 1$, that is $|x| < 2$.`,
        t`Use $n = -2$ with $\frac{x}{2}$ in place of $x$: $1 + (-2)\left(\frac{x}{2}\right)$ $+ \frac{(-2)(-3)}{2!}\left(\frac{x}{2}\right)^2$ $= 1 - x + 3 \cdot \frac{x^2}{4}$.`,
        t`Multiply by $\frac{1}{4}$: $\frac{1}{4} - \frac{x}{4} + \frac{3x^2}{16}$.`,
      ],
      answer: t`$(2 + x)^{-2}$ $= \frac{1}{4} - \frac{x}{4} + \frac{3x^2}{16} + \ldots$, for $|x| < 2$.`,
    },
    visualSpec: t`Drag $x$ from $-1.5$ to $1.5$: the totals $1$, $1 - x$, $1 - x + x^2$, $\ldots$ of the series for $(1 + x)^{-1}$ hug the curve $\frac{1}{1 + x}$ inside $-1 < x < 1$ and fly away from it outside.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Does not raise the number in front of x: writes (kx)^r as k x^r, e.g. (2x)^2 = 2x^2",
      remediation: t`Raise the whole term: $(2x)^2 = 4x^2$, not $2x^2$, and $\left(-\frac{x}{3}\right)^3 = -\frac{x^3}{27}$. In $(1 + kx)^n$ the $r$th power is $(kx)^r = k^r x^r$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C08-M2",
      mistake: "Thinks a negative index only flips the signs: takes (1 + x)^(-n) to be (1 - x)^n, e.g. (1 + x)^(-3) = 1 - 3x + 3x^2 - x^3",
      remediation: t`Put the negative $n$ itself into $\frac{n(n-1)}{2!}$: for $n = -3$ it is $\frac{(-3)(-4)}{2!} = 6$, so $(1 + x)^{-3} = 1 - 3x + 6x^2 - \ldots$ The series never stops; it is not $(1 - x)^3$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M3",
      mistake: "Leaves out the r! under n(n - 1)...(n - r + 1)",
      remediation: t`Each coefficient has $r!$ underneath: the $x^2$ term is $\frac{n(n-1)}{2!}x^2$ and the $x^3$ term is $\frac{n(n-1)(n-2)}{3!}x^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Takes a^n out of (a + bx)^n but does not divide bx by a: writes a^n(1 + bx)^n",
      remediation: t`Take $a$ out of the whole bracket: $a + bx = a\left(1 + \frac{bx}{a}\right)$, so $(a + bx)^n = a^n\left(1 + \frac{bx}{a}\right)^n$. The small term is $\frac{bx}{a}$, and it needs $\left|\frac{bx}{a}\right| < 1$.`,
      fallback: { kind: "ext", topic: "taking out a common factor" },
    },
    {
      id: "C08-M5",
      mistake: "Solves |bx/a| < 1 upside down and gets |x| < |b/a|",
      remediation: t`Multiply both sides of $\left|\frac{bx}{a}\right| < 1$ by $\left|\frac{a}{b}\right|$: $|x| < \left|\frac{a}{b}\right|$. For $\left|\frac{4x}{3}\right| < 1$ that gives $|x| < \frac{3}{4}$, not $\frac{4}{3}$: at $x = 1$, $\frac{4x}{3} = \frac{4}{3}$ is already too big.`,
      fallback: { kind: "ext", topic: "modulus inequalities" },
    },
    {
      id: "C08-M6",
      mistake: "Believes the expansion always holds for |x| < 1, whatever multiplies x in the bracket",
      remediation: t`The condition is on the term after $1$, not on $x$ alone: $(1 + y)^n$ needs $|y| < 1$. For $(1 + 4x)^n$ that is $|4x| < 1$, so $|x| < \frac{1}{4}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M1 differs from the key only at x^2 and beyond, and only when the term after 1 is kx with k != ±1; C08-M3 only at x^2 and beyond.",
    "C08-M2 applies only to a negative index; C08-M4 only when the bracket does not start with 1 (a != 1).",
    "C08-M5 and C08-M6 apply only to items that ask where the expansion holds. There C08-M4 gives |x| < 1/|b|, which equals C08-M6 when |b| = 1, and C08-M5 equals C08-M6 when |a| = |b|: draw diagnosing items with |a|, |b| and 1 all different.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.4 Q3(i)" },
      stem: t`The first three terms of the expansion of $(1 + 2x)^{-4}$, for $|x| < \frac{1}{2}$, are`,
      verify: { kind: "value", inputs: { a: "1", b: "2", n: "-4", m: "3" }, params: { ask: "terms" } },
      options: [
        { key: "A", text: t`$1 - 8 x + 40 x^{2}$`, correct: true, value: "40*x**2 - 8*x + 1" },
        { key: "B", text: t`$1 - 8 x + 20 x^{2}$`, correct: false, misconceptionId: "C08-M1", value: "20*x**2 - 8*x + 1" },
        { key: "C", text: t`$1 - 8 x + 24 x^{2}$`, correct: false, misconceptionId: "C08-M2", value: "24*x**2 - 8*x + 1" },
        { key: "D", text: t`$1 - 8 x + 80 x^{2}$`, correct: false, misconceptionId: "C08-M3", value: "80*x**2 - 8*x + 1" },
      ],
      solution: {
        steps: [
          t`Use $(1 + y)^n$ with $n = -4$ and $y = 2x$.`,
          t`Second term: $(-4)(2x) = -8x$.`,
          t`Third term: $\frac{(-4)(-5)}{2!}(2x)^2 = 10 \times 4x^2 = 40x^2$.`,
          t`So $(1 + 2x)^{-4} = 1 - 8x + 40x^2 + \ldots$`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.4 Q3(iii)" },
      stem: t`The first three terms of the expansion of $(9 + 2x)^{\frac{1}{2}}$, for $|x| < \frac{9}{2}$, are`,
      verify: { kind: "value", inputs: { a: "9", b: "2", n: "1/2", m: "3" }, params: { ask: "terms" } },
      options: [
        { key: "A", text: t`$3 + \frac{x}{3} - \frac{x^{2}}{12}$`, correct: false, misconceptionId: "C08-M1", value: "-x**2/12 + x/3 + 3" },
        { key: "B", text: t`$3 + \frac{x}{3} - \frac{x^{2}}{27}$`, correct: false, misconceptionId: "C08-M3", value: "-x**2/27 + x/3 + 3" },
        { key: "C", text: t`$3 + 3 x - \frac{3 x^{2}}{2}$`, correct: false, misconceptionId: "C08-M4", value: "-3*x**2/2 + 3*x + 3" },
        { key: "D", text: t`$3 + \frac{x}{3} - \frac{x^{2}}{54}$`, correct: true, value: "-x**2/54 + x/3 + 3" },
      ],
      solution: {
        steps: [
          t`Make the bracket start with $1$: $(9 + 2x)^{\frac{1}{2}} = 9^{\frac{1}{2}}\left(1 + \frac{2x}{9}\right)^{\frac{1}{2}} = 3\left(1 + \frac{2x}{9}\right)^{\frac{1}{2}}$.`,
          t`With $n = \frac{1}{2}$: $1 + \frac{1}{2} \cdot \frac{2x}{9} + \frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2!}\left(\frac{2x}{9}\right)^2 = 1 + \frac{x}{9} - \frac{1}{8} \cdot \frac{4x^2}{81} = 1 + \frac{x}{9} - \frac{x^2}{162}$.`,
          t`Multiply by $3$: $(9 + 2x)^{\frac{1}{2}} = 3 + \frac{x}{3} - \frac{x^2}{54} + \ldots$`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.4 Q3(iv)" },
      stem: t`In the expansion of $(4 + 3x)^{-\frac{1}{2}}$ in powers of $x$, for $|x| < \frac{4}{3}$, the coefficient of $x^2$ is`,
      verify: { kind: "value", inputs: { a: "4", b: "3", n: "-1/2", r: "2" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$\frac{9}{64}$`, correct: false, misconceptionId: "C08-M1", value: "9/64" },
        { key: "B", text: t`$- \frac{9}{256}$`, correct: false, misconceptionId: "C08-M2", value: "-9/256" },
        { key: "C", text: t`$\frac{27}{16}$`, correct: false, misconceptionId: "C08-M4", value: "27/16" },
        { key: "D", text: t`$\frac{27}{256}$`, correct: true, value: "27/256" },
      ],
      solution: {
        steps: [
          t`$(4 + 3x)^{-\frac{1}{2}} = 4^{-\frac{1}{2}}\left(1 + \frac{3x}{4}\right)^{-\frac{1}{2}} = \frac{1}{2}\left(1 + \frac{3x}{4}\right)^{-\frac{1}{2}}$.`,
          t`The $x^2$ term inside: $\frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2!}\left(\frac{3x}{4}\right)^2 = \frac{3}{8} \cdot \frac{9x^2}{16} = \frac{27x^2}{128}$.`,
          t`Multiply by $\frac{1}{2}$: the coefficient of $x^2$ is $\frac{27}{256}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/4.4 SolvedEx.3" },
      stem: t`The expansion of $(2 - 3x)^{-\frac{1}{2}}$ in powers of $x$ is valid for`,
      verify: { kind: "value", inputs: { a: "2", b: "-3", n: "-1/2" }, params: { ask: "valid" } },
      options: [
        { key: "A", text: t`$|x| < \frac{3}{2}$`, correct: false, misconceptionId: "C08-M5", value: "Interval.open(-3/2, 3/2)" },
        { key: "B", text: t`$|x| < 1$`, correct: false, misconceptionId: "C08-M6", value: "Interval.open(-1, 1)" },
        { key: "C", text: t`$|x| < \frac{2}{3}$`, correct: true, value: "Interval.open(-2/3, 2/3)" },
        { key: "D", text: t`$|x| < \frac{1}{3}$`, correct: false, misconceptionId: "C08-M4", value: "Interval.open(-1/3, 1/3)" },
      ],
      solution: {
        steps: [
          t`Make the bracket start with $1$: $(2 - 3x)^{-\frac{1}{2}} = 2^{-\frac{1}{2}}\left(1 - \frac{3x}{2}\right)^{-\frac{1}{2}}$.`,
          t`The term after $1$ is $-\frac{3x}{2}$, so the expansion needs $\left|\frac{3x}{2}\right| < 1$.`,
          t`Multiply by $\frac{2}{3}$: $|x| < \frac{2}{3}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.4 Q3(v)" },
      stem: t`The expansion of $(5 - 3x)^{-\frac{1}{3}}$ in powers of $x$ is valid for`,
      verify: { kind: "value", inputs: { a: "5", b: "-3", n: "-1/3" }, params: { ask: "valid" } },
      options: [
        { key: "A", text: t`$|x| < 1$`, correct: false, misconceptionId: "C08-M6", value: "Interval.open(-1, 1)" },
        { key: "B", text: t`$|x| < \frac{5}{3}$`, correct: true, value: "Interval.open(-5/3, 5/3)" },
        { key: "C", text: t`$|x| < \frac{1}{3}$`, correct: false, misconceptionId: "C08-M4", value: "Interval.open(-1/3, 1/3)" },
        { key: "D", text: t`$|x| < \frac{3}{5}$`, correct: false, misconceptionId: "C08-M5", value: "Interval.open(-3/5, 3/5)" },
      ],
      solution: {
        steps: [
          t`Make the bracket start with $1$: $(5 - 3x)^{-\frac{1}{3}} = 5^{-\frac{1}{3}}\left(1 - \frac{3x}{5}\right)^{-\frac{1}{3}}$.`,
          t`The term after $1$ is $-\frac{3x}{5}$, so the expansion needs $\left|\frac{3x}{5}\right| < 1$.`,
          t`Multiply by $\frac{5}{3}$: $|x| < \frac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q18" },
      stem: t`In the expansion of $\left(1 - \frac{2x}{3}\right)^{-\frac{1}{2}}$, for $|x| < \frac{3}{2}$, the coefficient of $x^3$ is`,
      verify: { kind: "value", inputs: { a: "1", b: "-2/3", n: "-1/2", r: "3" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$\frac{1}{54}$`, correct: false, misconceptionId: "C08-M2", value: "1/54" },
        { key: "B", text: t`$\frac{5}{9}$`, correct: false, misconceptionId: "C08-M3", value: "5/9" },
        { key: "C", text: t`$\frac{5}{54}$`, correct: true, value: "5/54" },
        { key: "D", text: t`$\frac{5}{24}$`, correct: false, misconceptionId: "C08-M1", value: "5/24" },
      ],
      solution: {
        steps: [
          t`Use $(1 + y)^n$ with $n = -\frac{1}{2}$ and $y = -\frac{2x}{3}$.`,
          t`The $x^3$ term is $\frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\left(-\frac{5}{2}\right)}{3!}\left(-\frac{2x}{3}\right)^3 = \left(-\frac{15}{8} \div 6\right)\left(-\frac{8x^3}{27}\right)$.`,
          t`$= \left(-\frac{5}{16}\right)\left(-\frac{8x^3}{27}\right) = \frac{5x^3}{54}$, so the coefficient of $x^3$ is $\frac{5}{54}$.`,
        ],
      },
    },
  ],
};
