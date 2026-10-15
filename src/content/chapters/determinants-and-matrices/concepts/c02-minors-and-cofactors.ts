import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/**
 * A number or sign whose text is centred at [x, y]. A label's text sits about 15 px above its
 * anchor, so `lift` is 15 px in the figure's units (400 px across the view).
 */
const at = (x: number, y: number, label: string, lift: number, step?: number, tone?: FigureElement["tone"]): FigureElement => ({
  kind: "label", at: [x, y - lift], label, labelAt: "n", step, tone,
});

/** A shaded box from [x0, y0] to [x1, y1]: four half-planes, walked anticlockwise. */
const box = (x0: number, y0: number, x1: number, y1: number, tone: FigureElement["tone"], step: number): FigureElement => ({
  kind: "region",
  within: [
    { kind: "halfPlane", through: [[x0, y0], [x1, y0]] },
    { kind: "halfPlane", through: [[x1, y0], [x1, y1]] },
    { kind: "halfPlane", through: [[x1, y1], [x0, y1]] },
    { kind: "halfPlane", through: [[x0, y1], [x0, y0]] },
  ],
  tone,
  step,
});

/** The outline of the box from [x0, y0] to [x1, y1]. */
const outline = (x0: number, y0: number, x1: number, y1: number, step: number): FigureElement[] =>
  ([[[x0, y0], [x1, y0]], [[x1, y0], [x1, y1]], [[x1, y1], [x0, y1]], [[x0, y1], [x0, y0]]] as const).map(
    ([from, to]): FigureElement => ({ kind: "segment", from: [...from], to: [...to], tone: "good", step }),
  );

/** A determinant's two bars, at x0 and x1, from y0 up to y1. */
const bars = (x0: number, x1: number, y0: number, y1: number, step?: number, tone: FigureElement["tone"] = "muted"): FigureElement[] => [
  { kind: "segment", from: [x0, y0], to: [x0, y1], tone, step },
  { kind: "segment", from: [x1, y0], to: [x1, y1], tone, step },
];

/** The hook's determinant, entry (i, j) centred at x = j, y = 4 - i. Both figures: views 9 units wide, so 15 px is 0.35. */
const HOOK = [[2, 1, 0], [1, 3, 1], [0, 1, 2]];
const LIFT = 0.35;

/** The checkerboard sign of entry (i, j). */
const sign = (i: number, j: number): string => ((i + j) % 2 === 0 ? "+" : "−");

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Expand $\begin{vmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{vmatrix}$ along row 1 and you get $8$. Along row 2, with the signs $+ - +$: $1(2) - 3(4) + 1(2) = -8$. **Same determinant, two answers. Which one went wrong?**`,
    reveal: t`Row 2. The sign belongs to the entry's place in the whole determinant, not to its place in the row: entry $(i, j)$ gets $(-1)^{i+j}$, a checkerboard. Row 2 reads $- + -$, so $-1(2) + 3(4) - 1(2) = 8$. A minor carried with its sign is a cofactor, and any row's entries times their own cofactors give the determinant.`,
  },
  explanation: {
    intuition: [
      t`Recall: a determinant's numbers are its **entries**, set in **rows** across and **columns** down.`,
      t`Pick an entry, and cover its row and its column.`,
      t`A smaller determinant is left: its value is the entry's **minor**.`,
      t`Give the minor a sign, $+$ or $-$, set by the entry's place: that is its **cofactor**.`,
      t`To **expand** along a row, multiply each entry by its own cofactor and add: that gives the determinant.`,
      t`Any row or column gives the same value, so pick the one with most zeros: each zero's term is $0$.`,
    ],
    figure: {
      alt: "The determinant with rows 2 1 0, 1 3 1 and 0 1 2. The entry 1 in row 1, column 2 is ringed, and its row and its column are greyed out. The four entries left, 1 1 and 0 2, are ringed and appear on the right as a smaller determinant, the minor, equal to 2. Last, the label: sign −, cofactor −2.",
      axes: "none",
      view: { x: [-1.1, 7.9], y: [-0.35, 4.2] },
      elements: [
        ...bars(0.45, 3.55, 0.55, 3.45),
        ...HOOK.flatMap((row, i) => row.map((a, j) => at(j + 1, 3 - i, String(a), LIFT))),
        box(0.55, 2.55, 3.45, 3.45, "muted", 2),
        box(1.55, 0.55, 2.45, 3.45, "muted", 2),
        { kind: "circle", centre: [2, 3], r: 0.32, step: 2 },
        { kind: "label", at: [0.3, 3], label: "row 1", labelAt: "w", tone: "muted", step: 2 },
        { kind: "label", at: [2, 3.5], label: "column 2", labelAt: "n", tone: "muted", step: 2 },
        ...[[1, 2], [3, 2], [1, 1], [3, 1]].map(([x, y]): FigureElement => ({ kind: "circle", centre: [x, y], r: 0.32, tone: "good", step: 3 })),
        ...bars(4.55, 6.45, 0.65, 2.35, 3, "good"),
        at(5, 2, "1", LIFT, 3, "good"),
        at(6, 2, "1", LIFT, 3, "good"),
        at(5, 1, "0", LIFT, 3, "good"),
        at(6, 1, "2", LIFT, 3, "good"),
        { kind: "label", at: [6.65, 1.5], label: "= 2", labelAt: "e", step: 3 },
        { kind: "label", at: [5.5, 2.45], label: "minor", labelAt: "n", tone: "good", step: 3 },
        { kind: "label", at: [5.5, -0.2], label: "sign −, cofactor −2", labelAt: "n", step: 4 },
      ],
    },
    formal: [
      {
        title: "Minor of an entry",
        points: [
          t`$a_{ij}$ is the entry in row $i$ and column $j$: the first subscript is the row, the second the column.`,
          t`The **minor** $M_{ij}$ of $a_{ij}$ is the determinant left after deleting row $i$ and column $j$.`,
          t`For example, in $\begin{vmatrix} 2 & -3 \\ 4 & 7 \end{vmatrix}$, the entry $a_{12} = -3$ is in row 1 and column 2.`,
          t`Deleting row 1 and column 2 leaves only $4$, so $M_{12} = 4$.`,
        ],
      },
      {
        title: "Cofactor of an entry",
        points: [
          t`The **cofactor** of $a_{ij}$ is $C_{ij} = (-1)^{i+j}M_{ij}$, also written $A_{ij}$.`,
          t`When $i + j$ is even, $(-1)^{i+j} = 1$, so the cofactor equals the minor.`,
          t`When $i + j$ is odd, $(-1)^{i+j} = -1$, so change the minor's sign.`,
          t`In the example above, $1 + 2 = 3$ is odd, so $C_{12} = -4$.`,
        ],
      },
      {
        title: "The checkerboard of signs",
        points: [
          t`Write each entry's sign, $(-1)^{i+j}$, in the entry's own place.`,
          t`Row 1 reads $+ - +$.`,
          t`Row 2 reads $- + -$.`,
          t`Row 3 reads $+ - +$.`,
          t`Next-door signs always differ, like the squares of a **checkerboard**, with $+$ at the top left.`,
          t`So row 2 and column 2 go $- + -$, not $+ - +$.`,
        ],
        figure: {
          alt: "The bars of a 3 × 3 determinant. Its signs appear row by row: + − +, then − + −, then + − +. The four − places are shaded, showing the checkerboard with + at the top left. Last, row 2 and column 2 are outlined: both read − + −.",
          axes: "none",
          view: { x: [-2.5, 6.5], y: [0.2, 4.45] },
          elements: [
            ...bars(0.3, 3.7, 0.4, 3.6),
            ...[1, 2, 3].flatMap((i) => [1, 2, 3].map((j) => at(j, 4 - i, sign(i, j), LIFT, i + 1))),
            ...[[1, 2], [2, 1], [2, 3], [3, 2]].map(([i, j]) => box(j - 0.45, 3.55 - i, j + 0.45, 4.45 - i, "muted", 5)),
            ...outline(0.5, 1.5, 3.5, 2.5, 6),
            ...outline(1.5, 0.5, 2.5, 3.5, 6),
            { kind: "label", at: [0.2, 2], label: "row 2", labelAt: "w", tone: "good", step: 6 },
            { kind: "label", at: [2, 3.55], label: "column 2", labelAt: "n", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Expanding with cofactors",
        points: [
          t`Along any row or column, the entries times their own cofactors add up to the determinant.`,
          t`Write the determinant as $|A|$.`,
          t`Along row 2, $|A|$ equals $a_{21}C_{21} + a_{22}C_{22}$ $+ a_{23}C_{23}$.`,
          t`Along row 1 the signs are $+ - +$: this is the expansion you already know.`,
          t`Every row and every column gives the same value.`,
        ],
      },
      {
        title: "Another row's cofactors give zero",
        points: [
          t`Now multiply row 1's entries by row 2's cofactors, and add.`,
          t`The sum is $a_{11}C_{21} + a_{12}C_{22}$ $+ a_{13}C_{23}$, and it always equals $0$.`,
          t`Row 2's cofactors never use row 2's own entries.`,
          t`So the sum expands, along row 2, the determinant with row 2 replaced by a copy of row 1.`,
          t`A determinant with two equal rows is $0$, so the sum is $0$.`,
          t`Any row with another row's cofactors gives $0$; only its own cofactors give the determinant.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\begin{vmatrix} 1 & 2 & -3 \\ -2 & 0 & 4 \\ 5 & -1 & 3 \end{vmatrix}$, find the cofactors of row 2 and use them to evaluate the determinant.`,
      steps: [
        t`Delete row 2 and each column in turn: $M_{21} = \begin{vmatrix} 2 & -3 \\ -1 & 3 \end{vmatrix}$ $= 6 - 3 = 3$, $M_{22} = \begin{vmatrix} 1 & -3 \\ 5 & 3 \end{vmatrix}$ $= 3 + 15 = 18$, $M_{23} = \begin{vmatrix} 1 & 2 \\ 5 & -1 \end{vmatrix}$ $= -1 - 10 = -11$.`,
        t`Row 2's signs are $- + -$: $C_{21} = -3$, $C_{22} = 18$, $C_{23} = 11$.`,
        t`Row 2's entries times their cofactors: $(-2)(-3) + 0(18) + 4(11)$ $= 6 + 0 + 44 = 50$.`,
        t`Check: row 1's entries with row 2's cofactors must give $0$: $1(-3) + 2(18) + (-3)(11)$ $= -3 + 36 - 33 = 0$.`,
      ],
      answer: t`$C_{21} = -3$, $C_{22} = 18$, $C_{23} = 11$, and the determinant is $50$.`,
    },
    visualSpec: t`Tap any entry of a $3 \times 3$ determinant: its row and column grey out, the $2 \times 2$ minor that is left lights up, and the checkerboard sign on that square turns the minor into the cofactor.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`The cofactor is the same as the minor: the sign $(-1)^{i+j}$ is left off`,
      remediation: t`A cofactor is the minor with a sign: $C_{ij} = (-1)^{i+j}M_{ij}$. When $i + j$ is odd, change the minor's sign.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Uses the first row's signs $+ - +$ along every row and column`,
      remediation: t`The sign belongs to the entry's place in the whole determinant: a checkerboard with $+$ at the top left. Row 2 and column 2 go $- + -$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Swaps the subscripts: for $M_{ij}$ deletes row $j$ and column $i$`,
      remediation: t`In $a_{ij}$ the first subscript is the row and the second the column. For $M_{ij}$, delete row $i$ and column $j$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Evaluates the $2 \times 2$ minor as $ad + bc$ instead of $ad - bc$`,
      remediation: t`A $2 \times 2$ determinant $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ is $ad - bc$: subtract the second product. Keep the signs of negative entries inside the products.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Takes the cofactor to include its entry: $C_{ij} = a_{ij}(-1)^{i+j}M_{ij}$, the whole expansion term`,
      remediation: t`The cofactor is only $(-1)^{i+j}M_{ij}$; it never contains its own entry $a_{ij}$. The product $a_{ij}C_{ij}$ is one term of an expansion.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Believes a row's entries times any row's cofactors give $|A|$`,
      remediation: t`Only a row's entries times its **own** cofactors give $|A|$. With another row's cofactors the sum is $0$: it expands a determinant with two equal rows.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M1 gives the key on a cofactor with $i + j$ even; diagnose it on a cofactor with $i + j$ odd, or on an expansion.`,
    "C02-M2 gives the key along row 1, row 3, column 1 or column 3; diagnose it on an expansion along row 2 or column 2. On a single cofactor it always matches the key or C02-M1, so it is not offered there.",
    t`C02-M3 gives the key on the diagonal ($i = j$) and on symmetric determinants.`,
    t`C02-M5 gives the key when $a_{ij} = 1$.`,
    "C02-M6 applies only to a row's entries times another row's cofactors.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q5" },
      stem: t`In $D = \begin{vmatrix} 2 & -3 & 5 \\ 6 & 0 & 4 \\ 1 & 5 & -7 \end{vmatrix}$, the cofactor $C_{21}$ of the entry $a_{21} = 6$ is:`,
      verify: { kind: "value", inputs: { D: "Matrix([[2, -3, 5], [6, 0, 4], [1, 5, -7]])", i: "2", j: "1" }, params: { ask: "cofactor" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C02-M1", value: "-4" },
        { key: "C", text: t`$-46$`, correct: false, misconceptionId: "C02-M4", value: "-46" },
        { key: "D", text: t`$24$`, correct: false, misconceptionId: "C02-M5", value: "24" },
      ],
      solution: {
        steps: [
          t`Delete row 2 and column 1: $M_{21} = \begin{vmatrix} -3 & 5 \\ 5 & -7 \end{vmatrix} = 21 - 25 = -4$.`,
          t`$2 + 1 = 3$ is odd, so the sign is $-$: $C_{21} = (-1)^{3}(-4) = 4$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q4" },
      stem: t`In $D = \begin{vmatrix} 2 & -1 & 3 \\ 1 & 2 & -1 \\ 5 & 7 & 2 \end{vmatrix}$, the cofactor $C_{12}$ of the entry $a_{12} = -1$ is:`,
      verify: { kind: "value", inputs: { D: "Matrix([[2, -1, 3], [1, 2, -1], [5, 7, 2]])", i: "1", j: "2" }, params: { ask: "cofactor" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C02-M1", value: "7" },
        { key: "B", text: t`$23$`, correct: false, misconceptionId: "C02-M3", value: "23" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M4", value: "3" },
        { key: "D", text: t`$-7$`, correct: true, value: "-7" },
      ],
      solution: {
        steps: [
          t`Delete row 1 and column 2: $M_{12} = \begin{vmatrix} 1 & -1 \\ 5 & 2 \end{vmatrix} = 2 + 5 = 7$.`,
          t`$1 + 2 = 3$ is odd, so the sign is $-$: $C_{12} = (-1)^{3}(7) = -7$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q4(ii)" },
      stem: t`In $D = \begin{vmatrix} 1 & -1 & 2 \\ 3 & 0 & -2 \\ 1 & 0 & 3 \end{vmatrix}$, the cofactor $C_{32}$ of the entry $a_{32} = 0$ is:`,
      verify: { kind: "value", inputs: { D: "Matrix([[1, -1, 2], [3, 0, -2], [1, 0, 3]])", i: "3", j: "2" }, params: { ask: "cofactor" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C02-M5", value: "0" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$-8$`, correct: false, misconceptionId: "C02-M1", value: "-8" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
      ],
      solution: {
        steps: [
          t`Delete row 3 and column 2: $M_{32} = \begin{vmatrix} 1 & 2 \\ 3 & -2 \end{vmatrix} = -2 - 6 = -8$.`,
          t`$3 + 2 = 5$ is odd, so the sign is $-$: $C_{32} = (-1)^{5}(-8) = 8$.`,
          t`The entry $a_{32} = 0$ plays no part: a cofactor never contains its own entry.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.1.3 SolvedEx.3" },
      stem: t`Expanding $\begin{vmatrix} 1 & -1 & 2 \\ -2 & 3 & 5 \\ -2 & 0 & -1 \end{vmatrix}$ along its second row, $a_{21}C_{21} + a_{22}C_{22} + a_{23}C_{23}$ equals:`,
      verify: { kind: "value", inputs: { D: "Matrix([[1, -1, 2], [-2, 3, 5], [-2, 0, -1]])", k: "2" }, params: { ask: "expand", line: "row" } },
      options: [
        { key: "A", text: t`$-23$`, correct: false, misconceptionId: "C02-M4", value: "-23" },
        { key: "B", text: t`$21$`, correct: true, value: "21" },
        { key: "C", text: t`$-3$`, correct: false, misconceptionId: "C02-M1", value: "-3" },
        { key: "D", text: t`$-21$`, correct: false, misconceptionId: "C02-M2", value: "-21" },
      ],
      solution: {
        steps: [
          t`Delete row 2 and each column: $M_{21} = \begin{vmatrix} -1 & 2 \\ 0 & -1 \end{vmatrix} = 1$, $M_{22} = \begin{vmatrix} 1 & 2 \\ -2 & -1 \end{vmatrix} = -1 + 4 = 3$, $M_{23} = \begin{vmatrix} 1 & -1 \\ -2 & 0 \end{vmatrix} = 0 - 2 = -2$.`,
          t`Row 2's signs are $- + -$: $C_{21} = -1$, $C_{22} = 3$, $C_{23} = 2$.`,
          t`$(-2)(-1) + 3(3) + 5(2) = 2 + 9 + 10 = 21$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q6" },
      stem: t`Expanding $\begin{vmatrix} -1 & 1 & 2 \\ -2 & 3 & -4 \\ -3 & 4 & 0 \end{vmatrix}$ along its third column, $a_{13}C_{13} + a_{23}C_{23} + a_{33}C_{33}$ equals:`,
      verify: { kind: "value", inputs: { D: "Matrix([[-1, 1, 2], [-2, 3, -4], [-3, 4, 0]])", k: "3" }, params: { ask: "expand", line: "col" } },
      options: [
        { key: "A", text: t`$-62$`, correct: false, misconceptionId: "C02-M4", value: "-62" },
        { key: "B", text: t`$-2$`, correct: true, value: "-2" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C02-M1", value: "6" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C02-M3", value: "12" },
      ],
      solution: {
        steps: [
          t`Delete column 3 and each row: $M_{13} = \begin{vmatrix} -2 & 3 \\ -3 & 4 \end{vmatrix} = -8 + 9 = 1$, $M_{23} = \begin{vmatrix} -1 & 1 \\ -3 & 4 \end{vmatrix} = -4 + 3 = -1$, $M_{33} = \begin{vmatrix} -1 & 1 \\ -2 & 3 \end{vmatrix} = -3 + 2 = -1$.`,
          t`Column 3's signs are $+ - +$: $C_{13} = 1$, $C_{23} = 1$, $C_{33} = -1$.`,
          t`$2(1) + (-4)(1) + 0(-1) = 2 - 4 + 0 = -2$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q4(i)" },
      stem: t`For $D = \begin{vmatrix} -1 & 0 & 4 \\ -2 & 1 & 3 \\ 0 & -4 & 2 \end{vmatrix}$, the entries of row 2 times the cofactors of row 1, $a_{21}C_{11} + a_{22}C_{12} + a_{23}C_{13}$, equal:`,
      verify: { kind: "value", inputs: { D: "Matrix([[-1, 0, 4], [-2, 1, 3], [0, -4, 2]])", r: "2", s: "1" }, params: { ask: "alien" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$-8$`, correct: false, misconceptionId: "C02-M1", value: "-8" },
        { key: "C", text: t`$48$`, correct: false, misconceptionId: "C02-M4", value: "48" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C02-M6", value: "18" },
      ],
      solution: {
        steps: [
          t`Row 1's cofactors, signs $+ - +$: $C_{11} = \begin{vmatrix} 1 & 3 \\ -4 & 2 \end{vmatrix} = 14$, $C_{12} = -\begin{vmatrix} -2 & 3 \\ 0 & 2 \end{vmatrix} = 4$, $C_{13} = \begin{vmatrix} -2 & 1 \\ 0 & -4 \end{vmatrix} = 8$.`,
          t`Row 2's entries times them: $(-2)(14) + 1(4) + 3(8) = -28 + 4 + 24 = 0$.`,
          t`Another row's cofactors always give $0$. Row 1's own entries give the determinant: $-1(14) + 0(4) + 4(8) = 18$.`,
        ],
      },
    },
  ],
};
