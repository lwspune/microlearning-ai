import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** Idea slide: where bracket i (0, 1, 2) of (a + b)³ sits across, and the height of each row. */
const COL = [1.5, 3.5, 5.5];
const ROW = { brackets: 5.6, aaa: 4.85, bba: 4.1, bab: 3.35, abb: 2.6 };

/** One way of multiplying out (a + b)³: the letter taken from each bracket, then the product. */
function picks(letters: string, y: number, product: string, step: number): FigureElement[] {
  return [
    ...[...letters].map((c, i): FigureElement => ({ kind: "label", at: [COL[i], y], label: c, labelAt: "n", tone: c === "b" ? "good" : undefined, step })),
    { kind: "label", at: [7.3, y], label: `→ ${product}`, labelAt: "n", tone: product === "ab²" ? "good" : undefined, step },
  ];
}

/** ᵏCⱼ, for the rows of Pascal's triangle drawn. */
const choose = (k: number, j: number): number => (j === 0 || j === k ? 1 : choose(k - 1, j - 1) + choose(k - 1, j));

/** Where ᵏCⱼ sits in the drawn triangle: row k one unit below row k - 1, entries one unit apart. */
const pascalAt = (k: number, j: number): Pt => [j - k / 2, 6 - k];

/** Pascal view: 400 px over 8.6 units. From a label's anchor up to the middle of its text, and a ring's radius. */
const LIFT = 0.33;
const RING = 0.34;

/** Row k of Pascal's triangle, labelled n = k, appearing at `step` (none: from the start). */
function pascalRow(k: number, step?: number): FigureElement[] {
  return [
    { kind: "label", at: [-4.3, 6 - k], label: `n = ${k}`, labelAt: "n", tone: "muted", step },
    ...Array.from({ length: k + 1 }, (_, j): FigureElement => ({ kind: "label", at: pascalAt(k, j), label: String(choose(k, j)), labelAt: "n", step })),
  ];
}

/** A ring round the entry ᵏCⱼ. */
const ring = (k: number, j: number, step: number): FigureElement => {
  const [x, y] = pascalAt(k, j);
  return { kind: "circle", centre: [x, y + LIFT], r: RING, tone: "good", step };
};

/** An arrow from the ring round ᵏCⱼ to the ring round the entry below it at [k + 1, j2], edge to edge. */
function arrowDown(k: number, j: number, j2: number, step: number): FigureElement {
  const [x1, y1] = pascalAt(k, j);
  const [x2, y2] = pascalAt(k + 1, j2);
  const [dx, dy] = [x2 - x1, y2 - y1];
  const len = Math.hypot(dx, dy);
  const [ux, uy] = [(dx / len) * RING, (dy / len) * RING];
  return { kind: "vector", from: [x1 + ux, y1 + LIFT + uy], to: [x2 - ux, y2 + LIFT - uy], tone: "good", step };
}

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Is $(x + 1)^3 = x^3 + 1$? **Try $x = 1$.**`,
    reveal: t`No. $(1 + 1)^3 = 8$, but $1^3 + 1 = 2$. Multiplying out gives $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$: four terms, not two. The middle terms carry the coefficients $3$ and $3$, which are $^3C_1$ and $^3C_2$.`,
  },
  explanation: {
    intuition: [
      t`$(a + b)^n$ means $n$ brackets $(a + b)$ multiplied together; here $n = 3$.`,
      t`To multiply out, take $a$ or $b$ from every bracket and multiply what you took: $a, a, a$ gives $a^3$.`,
      t`Taking $b$ from exactly $r$ brackets, and $a$ from the rest, gives $a^{n-r}b^r$: here $b, b, a$ gives $ab^2$.`,
      t`Recall: $^nC_r$ counts the ways to choose $r$ things from $n$; here, the $r$ brackets that give $b$.`,
      t`So $a^{n-r}b^r$ turns up $^nC_r$ times: its **coefficient**, the number in front of it, is $^nC_r$.`,
      t`$r$ runs from $0$ to $n$, so the **expansion**, $(a + b)^n$ multiplied out, has $n + 1$ terms.`,
    ],
    figure: {
      alt: "Three brackets, (a + b) (a + b) (a + b). Below them, one letter is taken from each bracket: a, a, a gives a³. Then b, b, a gives ab², with the b's highlighted; then b, a, b and a, b, b give ab² too. Three ways, ³C₂ = 3, so the term is 3ab². Last, the whole expansion: (a + b)³ = a³ + 3a²b + 3ab² + b³, four terms.",
      axes: "none",
      view: { x: [0.3, 9.1], y: [0.5, 6.3] },
      elements: [
        ...COL.map((x): FigureElement => ({ kind: "label", at: [x, ROW.brackets], label: "(a + b)", labelAt: "n", step: 1 })),
        ...picks("aaa", ROW.aaa, "a³", 2),
        ...picks("bba", ROW.bba, "ab²", 3),
        ...picks("bab", ROW.bab, "ab²", 4),
        ...picks("abb", ROW.abb, "ab²", 4),
        { kind: "segment", from: [8.3, ROW.abb + 0.15], to: [8.3, ROW.bba + 0.6], tone: "good", step: 5 },
        { kind: "label", at: [5, 1.75], label: "3 ways, ³C₂ = 3: the term is 3ab²", labelAt: "n", tone: "good", step: 5 },
        { kind: "label", at: [5, 0.9], label: "(a + b)³ = a³ + 3a²b + 3ab² + b³", labelAt: "n", step: 6 },
      ],
    },
    formal: [
      {
        title: "The binomial theorem",
        points: [
          t`A **binomial** is a sum of two terms, such as $a + b$ or $2x - 3$.`,
          t`The **binomial theorem** expands $(a + b)^n$ for any positive integer $n$: $1, 2, 3, \ldots$`,
          t`$(a + b)^n$ equals $^nC_0\,a^n + {}^nC_1\,a^{n-1}b$ $+ {}^nC_2\,a^{n-2}b^2 + \ldots + {}^nC_n\,b^n$.`,
          t`Each term is $^nC_r\,a^{n-r}b^r$, for $r = 0, 1, \ldots, n$.`,
        ],
      },
      {
        title: "Powers in each term",
        points: [
          t`There are $n + 1$ terms, one for each $r$ from $0$ to $n$.`,
          t`From term to term, the power of $a$ falls by one, from $n$ down to $0$.`,
          t`At the same time the power of $b$ rises by one, from $0$ up to $n$.`,
          t`In every term the two powers add to $n$: $(n - r) + r = n$.`,
        ],
      },
      {
        title: "Coefficients from Pascal's triangle",
        points: [
          t`Write the coefficients for $n = 0, 1, 2, 3$ in rows, each centred below the last: this is **Pascal's triangle**.`,
          t`For $n = 4$ the coefficients are $1, 4, 6, 4, 1$.`,
          t`For $n = 5$ they are $1, 5, 10, 10, 5, 1$.`,
          t`For $n = 6$ they are $1, 6, 15, 20, 15, 6, 1$.`,
          t`Each entry, except the $1$s at the ends, is the sum of the two just above it: $4 + 6 = 10$.`,
          t`The coefficients are **symmetric**, the same read from either end: $^nC_r = {}^nC_{n-r}$.`,
        ],
        figure: {
          alt: "Pascal's triangle, rows n = 0 to 3: 1; 1 1; 1 2 1; 1 3 3 1. Then rows n = 4, 5 and 6 appear one at a time: 1 4 6 4 1; 1 5 10 10 5 1; 1 6 15 20 15 6 1. The 4 and 6 in row 4 are ringed, with arrows down to the 10 between them in row 5. Last, the two 15s in row 6 are ringed, mirror images of each other, with the label ⁶C₂ = ⁶C₄ = 15.",
          axes: "none",
          view: { x: [-5, 3.6], y: [-0.85, 6.55] },
          elements: [
            ...[0, 1, 2, 3].flatMap((k) => pascalRow(k, 1)),
            ...pascalRow(4, 2),
            ...pascalRow(5, 3),
            ...pascalRow(6, 4),
            ring(4, 1, 5),
            ring(4, 2, 5),
            ring(5, 2, 5),
            arrowDown(4, 1, 2, 5),
            arrowDown(4, 2, 2, 5),
            ring(6, 2, 6),
            ring(6, 4, 6),
            { kind: "label", at: [0, -0.75], label: "⁶C₂ = ⁶C₄ = 15", labelAt: "n", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "A minus sign",
        points: [
          t`Write $(a - b)^n$ as $(a + (-b))^n$: the second term is $-b$.`,
          t`Even powers of $-b$ are positive, and odd powers are negative.`,
          t`So the signs alternate: $+, -, +, -, \ldots$`,
          t`The last term is $(-b)^n$: positive when $n$ is even, negative when $n$ is odd.`,
          t`For example, $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$.`,
        ],
      },
      {
        title: "Raise the whole term",
        points: [
          t`In $(2x + 3y)^n$, the first term is $a = 2x$, number and all.`,
          t`So its powers are $(2x)^2 = 4x^2$ and $(2x)^3 = 8x^3$.`,
          t`$(2x)^3$ is never $2x^3$: the $2$ is cubed too.`,
          t`Work out each power of $a$ and of $b$ in full.`,
          t`Then multiply each pair of powers by its coefficient, $^nC_r$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Expand $(3x - 2)^4$.`,
      steps: [
        t`$a = 3x$, $b = -2$, $n = 4$: five terms, with coefficients $1, 4, 6, 4, 1$.`,
        t`Powers of $3x$, falling: $81x^4, 27x^3, 9x^2, 3x, 1$. Powers of $-2$, rising: $1, -2, 4, -8, 16$.`,
        t`Multiply each coefficient by its two powers: $81x^4$, $4 \cdot 27x^3 \cdot (-2) = -216x^3$, $6 \cdot 9x^2 \cdot 4 = 216x^2$, $4 \cdot 3x \cdot (-8) = -96x$, $16$.`,
      ],
      answer: t`$(3x - 2)^4 = 81x^4 - 216x^3$ $+ 216x^2 - 96x + 16$.`,
    },
    visualSpec: t`Drag $n$ from $1$ to $7$ to grow Pascal's triangle; the chosen row lights up as the coefficients of $(a + b)^n$, with the powers of $a$ falling and the powers of $b$ rising beneath it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Raising only the variable inside a bracket: $(2x)^3$ taken as $2x^3$`,
      remediation: t`Raise the whole term, number and all: $(2x)^3 = 2^3x^3 = 8x^3$. Work out each power of $a$ and of $b$ in full before multiplying by $^nC_r$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C01-M2",
      mistake: t`Dropping the minus sign: expanding $(a - b)^n$ with every term positive`,
      remediation: t`Treat $(a - b)^n$ as $(a + (-b))^n$. Odd powers of $-b$ are negative, so the signs alternate $+, -, +, \ldots$`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Thinking $(a + b)^n$ has $n$ terms, so stopping one short and missing $b^n$`,
      remediation: t`$r$ runs from $0$ to $n$, so $(a + b)^n$ has $n + 1$ terms. The last one is $^nC_n\,b^n = b^n$: check you have counted $n + 1$ terms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Believing $(a + b)^n = a^n + b^n$`,
      remediation: t`A power of a sum is not the sum of the powers: even $(a + b)^2$ has the middle term $2ab$. All $n + 1$ terms $^nC_r\,a^{n-r}b^r$ appear, not just the first and last.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
    {
      id: "C01-M5",
      mistake: t`Using $^nP_r$ as the coefficients instead of $^nC_r$`,
      remediation: t`The coefficient counts the ways to choose which $r$ brackets give $b$, and order does not matter: it is $^nC_r$, not $^nP_r$. For $n = 5$ the coefficients are $1, 5, 10, 10, 5, 1$.`,
      fallback: { kind: "ext", topic: "combinations nCr" },
    },
  ],
  engineNotes: [
    t`C01-M1 gives the key when the numbers in front of the variables are $\pm 1$ (as in $(x - \frac{1}{x})^n$); diagnose it on items like $(2x^2 + 3)^n$.`,
    "C01-M2 applies only when the second term carries a minus sign (its model refuses otherwise). C01-M3 gives the key on any coefficient other than the last term's, and C01-M4 gives the key on the first and last terms.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q2(i)" },
      stem: t`Expand $(2x^2 + 3)^4$.`,
      verify: { kind: "value", inputs: { a: "2*x**2", b: "3", n: "4" }, params: { ask: "full" } },
      options: [
        { key: "A", text: t`$16 x^{8} + 96 x^{6} + 216 x^{4} + 216 x^{2} + 81$`, correct: true, value: "16*x**8 + 96*x**6 + 216*x**4 + 216*x**2 + 81" },
        { key: "B", text: t`$2 x^{8} + 24 x^{6} + 108 x^{4} + 216 x^{2} + 81$`, correct: false, misconceptionId: "C01-M1", value: "2*x**8 + 24*x**6 + 108*x**4 + 216*x**2 + 81" },
        { key: "C", text: t`$16 x^{8} + 96 x^{6} + 216 x^{4} + 216 x^{2}$`, correct: false, misconceptionId: "C01-M3", value: "x**2*(16*x**6 + 96*x**4 + 216*x**2 + 216)" },
        { key: "D", text: t`$16 x^{8} + 81$`, correct: false, misconceptionId: "C01-M4", value: "16*x**8 + 81" },
      ],
      solution: {
        steps: [
          t`$a = 2x^2$, $b = 3$, $n = 4$: five terms, with coefficients $1, 4, 6, 4, 1$.`,
          t`Powers of $2x^2$, falling: $16x^8, 8x^6, 4x^4, 2x^2, 1$. Powers of $3$, rising: $1, 3, 9, 27, 81$.`,
          t`Multiply: $16x^8$, $4 \cdot 8x^6 \cdot 3 = 96x^6$, $6 \cdot 4x^4 \cdot 9 = 216x^4$, $4 \cdot 2x^2 \cdot 27 = 216x^2$, $81$.`,
          t`$(2x^2 + 3)^4 = 16x^8 + 96x^6 + 216x^4 + 216x^2 + 81$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q2(ii)" },
      stem: t`The first three terms in the expansion of $\left(2x - \frac{1}{x}\right)^6$, in falling powers of $x$, add up to:`,
      verify: { kind: "value", inputs: { a: "2*x", b: "-1/x", n: "6" }, params: { ask: "first", k: "3" } },
      options: [
        { key: "A", text: t`$64 x^{6} - 192 x^{4} + 240 x^{2}$`, correct: true, value: "x**2*(64*x**4 - 192*x**2 + 240)" },
        { key: "B", text: t`$2 x^{6} - 12 x^{4} + 30 x^{2}$`, correct: false, misconceptionId: "C01-M1", value: "2*x**2*(x**4 - 6*x**2 + 15)" },
        { key: "C", text: t`$64 x^{6} + 192 x^{4} + 240 x^{2}$`, correct: false, misconceptionId: "C01-M2", value: "x**2*(64*x**4 + 192*x**2 + 240)" },
        { key: "D", text: t`$64 x^{6} - 192 x^{4} + 480 x^{2}$`, correct: false, misconceptionId: "C01-M5", value: "x**2*(64*x**4 - 192*x**2 + 480)" },
      ],
      solution: {
        steps: [
          t`$a = 2x$, $b = -\frac{1}{x}$, $n = 6$. The first three coefficients are $^6C_0 = 1$, $^6C_1 = 6$, $^6C_2 = 15$.`,
          t`$T_1 = (2x)^6 = 64x^6$. $T_2 = 6(2x)^5\left(-\frac{1}{x}\right) = 6 \cdot 32x^5 \cdot \left(-\frac{1}{x}\right) = -192x^4$.`,
          t`$T_3 = 15(2x)^4\left(-\frac{1}{x}\right)^2 = 15 \cdot 16x^4 \cdot \frac{1}{x^2} = 240x^2$.`,
          t`The sum is $64x^6 - 192x^4 + 240x^2$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q4" },
      stem: t`In the expansion of $(3x^2 + 2y)^5$, the coefficient of $x^6y^2$ is:`,
      verify: { kind: "value", inputs: { a: "3*x**2", b: "2*y", n: "5" }, params: { ask: "coeff", of: ["x**6*y**2"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C01-M4", value: "0" },
        { key: "B", text: t`$2160$`, correct: false, misconceptionId: "C01-M5", value: "2160" },
        { key: "C", text: t`$1080$`, correct: true, value: "1080" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C01-M1", value: "60" },
      ],
      solution: {
        steps: [
          t`$a = 3x^2$, $b = 2y$, $n = 5$. To get $x^6$, $3x^2$ is cubed, so $2y$ is squared: the term is $^5C_2(3x^2)^3(2y)^2$.`,
          t`$^5C_2 = 10$, $(3x^2)^3 = 27x^6$, $(2y)^2 = 4y^2$.`,
          t`The term is $10 \cdot 27 \cdot 4\,x^6y^2 = 1080x^6y^2$, so the coefficient is $1080$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q5" },
      stem: t`Expand $\left(x - \frac{1}{x}\right)^4$.`,
      verify: { kind: "value", inputs: { a: "x", b: "-1/x", n: "4" }, params: { ask: "full" } },
      options: [
        { key: "A", text: t`$x^{4} - 4 x^{2} + 6 - \frac{4}{x^{2}} + \frac{1}{x^{4}}$`, correct: true, value: "x**4 - 4*x**2 + 6 - 4/x**2 + x**(-4)" },
        { key: "B", text: t`$x^{4} + 4 x^{2} + 6 + \frac{4}{x^{2}} + \frac{1}{x^{4}}$`, correct: false, misconceptionId: "C01-M2", value: "x**4 + 4*x**2 + 6 + 4/x**2 + x**(-4)" },
        { key: "C", text: t`$x^{4} - 4 x^{2} + 6 - \frac{4}{x^{2}}$`, correct: false, misconceptionId: "C01-M3", value: "x**4 - 4*x**2 + 6 - 4/x**2" },
        { key: "D", text: t`$x^{4} + \frac{1}{x^{4}}$`, correct: false, misconceptionId: "C01-M4", value: "(x**8 + 1)/x**4" },
      ],
      solution: {
        steps: [
          t`$a = x$, $b = -\frac{1}{x}$, $n = 4$: five terms, with coefficients $1, 4, 6, 4, 1$ and signs alternating, since odd powers of $-\frac{1}{x}$ are negative.`,
          t`Each $x$ meets a $\frac{1}{x}$: $x^4$, $-4x^3 \cdot \frac{1}{x} = -4x^2$, $6x^2 \cdot \frac{1}{x^2} = 6$, $-4x \cdot \frac{1}{x^3} = -\frac{4}{x^2}$, $\frac{1}{x^4}$.`,
          t`$\left(x - \frac{1}{x}\right)^4 = x^4 - 4x^2 + 6 - \frac{4}{x^2} + \frac{1}{x^4}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q26" },
      stem: t`If $(1 - 2x)^6 = 1 + px + qx^2 + \ldots$, then $p + q$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-2*x", n: "6" }, params: { ask: "coeff", of: ["x", "x**2"] } },
      options: [
        { key: "A", text: t`$48$`, correct: true, value: "48" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C01-M1", value: "18" },
        { key: "C", text: t`$72$`, correct: false, misconceptionId: "C01-M2", value: "72" },
        { key: "D", text: t`$108$`, correct: false, misconceptionId: "C01-M5", value: "108" },
      ],
      solution: {
        steps: [
          t`$a = 1$, $b = -2x$, $n = 6$. Powers of $1$ are all $1$, so the term with $(-2x)^r$ is just $^6C_r(-2x)^r$.`,
          t`$T_2 = 6(-2x) = -12x$, so $p = -12$. $T_3 = 15(-2x)^2 = 15 \cdot 4x^2 = 60x^2$, so $q = 60$.`,
          t`$p + q = -12 + 60 = 48$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`The last term in the expansion of $(2x - 3)^5$ is:`,
      verify: { kind: "value", inputs: { a: "2*x", b: "-3", n: "5" }, params: { ask: "last" } },
      options: [
        { key: "A", text: t`$810 x$`, correct: false, misconceptionId: "C01-M3", value: "810*x" },
        { key: "B", text: t`$-29160$`, correct: false, misconceptionId: "C01-M5", value: "-29160" },
        { key: "C", text: t`$-243$`, correct: true, value: "-243" },
        { key: "D", text: t`$243$`, correct: false, misconceptionId: "C01-M2", value: "243" },
      ],
      solution: {
        steps: [
          t`$n = 5$, so there are $6$ terms; the last one is $^5C_5(2x)^0(-3)^5$.`,
          t`$^5C_5 = 1$ and $(-3)^5 = -243$, negative because the power is odd.`,
          t`The last term is $-243$.`,
        ],
      },
    },
  ],
};
