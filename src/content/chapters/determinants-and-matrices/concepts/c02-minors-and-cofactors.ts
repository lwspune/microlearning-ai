import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Expand $\begin{vmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{vmatrix}$ along row 1 and you get $8$. Along row 2, with the signs $+ - +$: $1(2) - 3(4) + 1(2) = -8$. **Same determinant, two answers. Which one went wrong?**`,
    reveal: t`Row 2. The sign belongs to the entry's place in the whole determinant, not to its place in the row: entry $(i, j)$ gets $(-1)^{i+j}$, a checkerboard. Row 2 reads $- + -$, so $-1(2) + 3(4) - 1(2) = 8$. A minor carried with its sign is a cofactor, and any row's entries times their own cofactors give the determinant.`,
  },
  explanation: {
    intuition: t`Pick an entry, cover its row and its column, and a smaller determinant is left: that is the entry's **minor**. Give the minor a sign from a checkerboard of $+$ and $-$ and you have its **cofactor**. Cofactors are exactly what you multiply by when you expand: any row's (or column's) entries times their own cofactors add up to the determinant. A zero entry kills its term, so expand along the line with the most zeros.`,
    formal: t`**Minor.** The minor $M_{ij}$ of $a_{ij}$ is the determinant left after deleting row $i$ and column $j$. The first subscript is the row, the second the column. In $\begin{vmatrix} 2 & -3 \\ 4 & 7 \end{vmatrix}$, $M_{12} = 4$.

**Cofactor.** $C_{ij} = (-1)^{i+j}M_{ij}$ (also written $A_{ij}$). When $i + j$ is even it equals the minor; when odd, change the sign. So above, $C_{12} = -4$. The signs make a checkerboard:
$$\begin{vmatrix} + & - & + \\ - & + & - \\ + & - & + \end{vmatrix}$$

**Expanding with cofactors.** Along any row or column, the entries times their own cofactors give the determinant. Along row 2: $|A| = a_{21}C_{21} + a_{22}C_{22} + a_{23}C_{23}$. Every row and column gives the same value.

**Another row's cofactors give 0.** $a_{11}C_{21} + a_{12}C_{22} + a_{13}C_{23} = 0$. It is the expansion of a determinant whose row 2 is a copy of row 1, and a determinant with two equal rows is $0$.`,
    worked: {
      prompt: t`For $\begin{vmatrix} 1 & 2 & -3 \\ -2 & 0 & 4 \\ 5 & -1 & 3 \end{vmatrix}$, find the cofactors of row 2 and use them to evaluate the determinant.`,
      steps: [
        t`Delete row 2 and each column in turn: $M_{21} = \begin{vmatrix} 2 & -3 \\ -1 & 3 \end{vmatrix} = 6 - 3 = 3$, $M_{22} = \begin{vmatrix} 1 & -3 \\ 5 & 3 \end{vmatrix} = 3 + 15 = 18$, $M_{23} = \begin{vmatrix} 1 & 2 \\ 5 & -1 \end{vmatrix} = -1 - 10 = -11$.`,
        t`Row 2's signs are $- + -$: $C_{21} = -3$, $C_{22} = 18$, $C_{23} = 11$.`,
        t`Row 2's entries times their cofactors: $(-2)(-3) + 0(18) + 4(11) = 6 + 0 + 44 = 50$.`,
        t`Check: row 1's entries with row 2's cofactors must give $0$: $1(-3) + 2(18) + (-3)(11) = -3 + 36 - 33 = 0$.`,
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
