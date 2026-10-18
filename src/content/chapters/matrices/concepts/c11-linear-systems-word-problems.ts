import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`2 pens and 3 notebooks cost Rs. 70, and a notebook costs Rs. 10 more than a pen. Let a pen cost $p$ and a notebook $n$. **Is the second condition $n - p = 10$ or $p - n = 10$?**`,
    reveal: t`$n - p = 10$: the notebook is the dearer one, so it comes first. With $2p + 3n = 70$ this gives $p = 8$ and $n = 18$, and indeed $18 - 8 = 10$. The other way round gives $p = 20$ and $n = 10$, which makes the pen dearer.`,
  },
  explanation: {
    intuition: [
      t`A **word problem** gives a system of equations in sentences instead of symbols.`,
      t`First name the unknowns: let $x$, $y$, $z$ stand for the quantities you don't know.`,
      t`Each condition in the problem becomes one linear equation in them.`,
      t`Together the equations form $AX = B$, solved by $X = A^{-1}B$.`,
      t`The last step goes back to words: answer what was asked, in its units.`,
    ],
    formal: [
      {
        title: "From sentences to equations",
        points: [
          t`Name each unknown in words, with its unit: let $x$ be the cost of one pen, in rupees.`,
          t`Each condition in the problem gives exactly one equation.`,
          t`'The sum of three numbers is 10' gives $x + y + z = 10$.`,
          t`'$P$ is $d$ more than $Q$' means $P - Q = d$: the larger minus the smaller.`,
          t`'$Q$ subtracted from $P$ gives $d$' also means $P - Q = d$.`,
          t`'$P$ is double $Q$' gives $P = 2Q$, that is $P - 2Q = 0$.`,
        ],
      },
      {
        title: "Rates, prices and profits",
        points: [
          t`$r\%$ of an amount $x$ is $\frac{r}{100}x$, not $rx$.`,
          t`To clear the fractions, multiply both sides by 100: the right side is multiplied too.`,
          t`So $\frac{5}{100}x = 40$ becomes $5x = 4000$.`,
          t`The **selling price** is what the shop charges: the cost price plus the profit.`,
          t`With cost price $x$ and a profit of Rs. 200, one item sells for $x + 200$.`,
          t`Move every known number to the right before writing the matrix form.`,
        ],
      },
      {
        title: "The matrix form AX = B",
        points: [
          t`Write each equation with the unknowns in one order, $x, y, z$, and the constant on the right.`,
          t`Row $i$ of $A$ holds the coefficients of condition $i$, read across.`,
          t`A missing unknown gets a 0: $y + 3z = 5$ gives the row $(0, 1, 3)$.`,
          t`$X$ is the column of unknowns and $B$ the column of constants.`,
          t`If $|A| \neq 0$, then $X = A^{-1}B$, where $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
        ],
      },
      {
        title: "Answer the question asked",
        points: [
          t`$X$ gives the unknowns, but the question may ask for something built from them.`,
          t`Five pens cost $5x$; a selling price is the cost price plus the profit.`,
          t`Check the values in the original sentences, not just in the equations.`,
          t`Costs and amounts must make sense: a negative price means a mistake.`,
          t`Give the answer in the problem's units: Rs. 450, not just 450.`,
        ],
      },
    ],
    worked: {
      prompt: t`The sum of three numbers is 6. If we multiply the third number by 3 and add it to the second, we get 11. Adding the first and third numbers gives double the second. Find the numbers using matrices.`,
      steps: [
        t`Let the numbers be $x, y, z$. Then $x + y + z = 6$ and $y + 3z = 11$.`,
        t`First plus third is double the second: $x + z = 2y$, so $x - 2y + z = 0$.`,
        t`So $AX = B$ with $A = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 3 \\ 1 & -2 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 6 \\ 11 \\ 0 \end{bmatrix}$.`,
        t`$|A| = 1(7) - 1(-3) + 1(-1) = 9$ and $\operatorname{adj}A = \begin{bmatrix} 7 & -3 & 2 \\ 3 & 0 & -3 \\ -1 & 3 & 1 \end{bmatrix}$.`,
        t`$X = \frac{1}{9}(\operatorname{adj}A)B$ $= \frac{1}{9}\begin{bmatrix} 9 \\ 18 \\ 27 \end{bmatrix}$, so $x = 1$, $y = 2$, $z = 3$. Check: $1 + 3 = 2 \times 2$.`,
      ],
      answer: t`The numbers are 1, 2 and 3.`,
    },
    visualSpec: t`Drag each sentence of the problem onto a row of $A$: its coefficients drop into place across the row, its constant falls into $B$, and the solved $X$ lights up the quantity the question asks for.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Takes a difference the wrong way round: '$P$ is $d$ more than $Q$' or '$Q$ subtracted from $P$ gives $d$' written as $Q - P = d$`,
      remediation: t`'$P$ is $d$ more than $Q$' means $P - Q = d$, and '$Q$ subtracted from $P$' is $P - Q$. Test with numbers: 5 is 2 more than 3, and $5 - 3 = 2$.`,
      fallback: { kind: "ext", topic: "writing word statements as equations" },
    },
    {
      id: "C11-M2",
      mistake: t`Uses a rate of $r\%$ as $r$, writing $6x$ for $6\%$ of $x$, but keeps the income on the right unchanged`,
      remediation: t`$r\%$ of $x$ is $\frac{r}{100}x$. Multiplying by 100 to clear the fractions multiplies the right side too, so an income of 350 becomes 35000.`,
      fallback: { kind: "ext", topic: "percentages" },
    },
    {
      id: "C11-M3",
      mistake: t`Uses $\operatorname{adj}A$ in place of $A^{-1}$, leaving out $\frac{1}{|A|}$`,
      remediation: t`$A^{-1} = \frac{1}{|A|}\operatorname{adj}A$, so $X = \frac{1}{|A|}(\operatorname{adj}A)B$. Without the $\frac{1}{|A|}$ every unknown comes out $|A|$ times too big.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C11-M4",
      mistake: t`Writes each condition's coefficients down a column of $A$ instead of across a row, so solves $A^TX = B$`,
      remediation: t`Each condition is one **row** of $A$: its coefficients go across, in the order $x, y, z$. Then row $i$ of $AX$ is the left side of condition $i$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M5",
      mistake: t`Stops at the unknown: gives $x$ when the question asks for something built from it, like $12x$ or the selling price $x + 1000$`,
      remediation: t`$X$ gives the unknowns, which are not always the answer. Reread the question and compute what it asks for: a dozen pencils cost $12x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: t`Drops the second quantity of a comparison: '$P$ is $d$ more than $Q$' or '$Q$ subtracted from $P$ gives $d$' written as $P = d$`,
      remediation: t`Both sentences compare two quantities, so both appear in the equation: $P - Q = d$. Writing $P = d$ says $P$ itself is $d$.`,
      fallback: { kind: "ext", topic: "writing word statements as equations" },
    },
  ],
  engineNotes: [
    "C11-M1 and C11-M6 apply only to a problem with a comparison condition (C11-Q2, C11-Q4); C11-M2 only to percentage rates (C11-Q2); C11-M5 only when the asked quantity is built from an unknown (C11-Q1, C11-Q3, C11-Q5).",
    "C11-M1 gives the key when the comparison's difference is 0 (Misc II Q.3: first + third = double the second). C11-M3 gives the key when |A| = 1 (Misc II Q.8).",
    "C11-M4 gives the key when A is symmetric (the book's Ex 2.3 Q.5 T.V. problem, so C11-Q3 changes its second condition). Its values equal those of building A^{-1} from the untransposed cofactor matrix (a C04 slip), so the two can't be told apart.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.4" },
      stem: t`The cost of 4 pencils, 3 pens and 2 books is Rs. 150. The cost of 1 pencil, 2 pens and 3 books is Rs. 125. The cost of 6 pencils, 2 pens and 3 books is Rs. 175. Using matrices, the cost of **a dozen pencils**, in rupees, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[4, 3, 2], [1, 2, 3], [6, 2, 3]])", B: "Matrix([150, 125, 175])" }, params: { ask: "12*x", var: "x" } },
      options: [
        { key: "A", text: t`$120$`, correct: true, value: "120" },
        { key: "B", text: t`$3000$`, correct: false, misconceptionId: "C11-M3", value: "3000" },
        { key: "C", text: t`$60$`, correct: false, misconceptionId: "C11-M4", value: "60" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C11-M5", value: "10" },
      ],
      solution: {
        steps: [
          t`Let a pencil, a pen and a book cost $x, y, z$ rupees: $AX = B$ with $A = \begin{bmatrix} 4 & 3 & 2 \\ 1 & 2 & 3 \\ 6 & 2 & 3 \end{bmatrix}$, $B = \begin{bmatrix} 150 \\ 125 \\ 175 \end{bmatrix}$.`,
          t`$|A| = 25$ and $\operatorname{adj}A = \begin{bmatrix} 0 & -5 & 5 \\ 15 & 0 & -10 \\ -10 & 10 & 5 \end{bmatrix}$.`,
          t`$X = \frac{1}{25}(\operatorname{adj}A)B$ $= \frac{1}{25}\begin{bmatrix} 250 \\ 500 \\ 625 \end{bmatrix}$ $= \begin{bmatrix} 10 \\ 20 \\ 25 \end{bmatrix}$.`,
          t`A pencil costs Rs. 10, so a dozen pencils cost $12 \times 10 = 120$ rupees.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.7" },
      stem: t`An amount of Rs. 5000 is invested in three types of investments, at interest rates $6\%$, $7\%$ and $8\%$ per annum respectively. The total annual income from them is Rs. 350. The annual income from the first two is Rs. 70 more than the income from the third. Using matrices, the amount invested at $8\%$, in rupees, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1, 1], [6/100, 7/100, 8/100], [6/100, 7/100, -8/100]])", B: "Matrix([5000, 350, 70])" }, params: { ask: "z", cmp: "3", pct: "2,3" } },
      options: [
        { key: "A", text: t`$17.5$`, correct: false, misconceptionId: "C11-M2", value: "35/2" },
        { key: "B", text: t`$3500$`, correct: false, misconceptionId: "C11-M6", value: "3500" },
        { key: "C", text: t`$1750$`, correct: true, value: "1750" },
        { key: "D", text: t`$2625$`, correct: false, misconceptionId: "C11-M1", value: "2625" },
      ],
      solution: {
        steps: [
          t`Let $x, y, z$ rupees be invested at $6\%$, $7\%$, $8\%$: $x + y + z = 5000$.`,
          t`Total income: $\frac{6x + 7y + 8z}{100} = 350$, so $6x + 7y + 8z = 35000$.`,
          t`First two minus third is 70: $6x + 7y - 8z = 7000$.`,
          t`$|A| = -16$ and $(\operatorname{adj}A)B$ $= (-28000, -24000, -28000)$, so $X = (1750, 1500, 1750)$: Rs. 1750 is invested at $8\%$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.5" },
      stem: t`The total cost of 3 T.V. sets and 2 V.C.R.s is Rs. 35000. The shopkeeper wants a profit of Rs. 1000 per T.V. set and Rs. 500 per V.C.R. Selling 1 T.V. set and 2 V.C.R.s brings him a total revenue of Rs. 19000. Using matrices, the **selling price** of a T.V. set, in rupees, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 2], [1, 2]])", B: "Matrix([35000, 17000])" }, params: { ask: "x + 1000", var: "x" } },
      options: [
        { key: "A", text: t`$37000$`, correct: false, misconceptionId: "C11-M3", value: "37000" },
        { key: "B", text: t`$14250$`, correct: false, misconceptionId: "C11-M4", value: "14250" },
        { key: "C", text: t`$9000$`, correct: false, misconceptionId: "C11-M5", value: "9000" },
        { key: "D", text: t`$10000$`, correct: true, value: "10000" },
      ],
      solution: {
        steps: [
          t`Let a T.V. set and a V.C.R. cost $x$ and $y$ rupees: $3x + 2y = 35000$.`,
          t`They sell for $x + 1000$ and $y + 500$: $(x + 1000) + 2(y + 500) = 19000$, so $x + 2y = 17000$.`,
          t`$|A| = 4$ and $\operatorname{adj}A = \begin{bmatrix} 2 & -2 \\ -1 & 3 \end{bmatrix}$, so $X = \frac{1}{4}\begin{bmatrix} 36000 \\ 16000 \end{bmatrix}$ $=\begin{bmatrix} 9000 \\ 4000 \end{bmatrix}$.`,
          t`The selling price of a T.V. set is $9000 + 1000 = 10000$ rupees.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.4" },
      stem: t`Three numbers add up to 2. If 2 times the second number is subtracted from the sum of the first and third, we get 8. If 3 times the first number is added to the sum of the second and third, we get 4. Using matrices, the numbers (first, second, third) are:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1, 1], [1, -2, 1], [3, 1, 1]])", B: "Matrix([2, 8, 4])" }, params: { cmp: "2" } },
      options: [
        { key: "A", text: t`$(\frac{19}{3}, - \frac{4}{3}, -1)$`, correct: false, misconceptionId: "C11-M4", value: "(19/3, -4/3, -1)" },
        { key: "B", text: t`$(1, -6, 7)$`, correct: false, misconceptionId: "C11-M6", value: "(1, -6, 7)" },
        { key: "C", text: t`$(1, -2, 3)$`, correct: true, value: "(1, -2, 3)" },
        { key: "D", text: t`$(1, \frac{10}{3}, - \frac{7}{3})$`, correct: false, misconceptionId: "C11-M1", value: "(1, 10/3, -7/3)" },
      ],
      solution: {
        steps: [
          t`Let the numbers be $x, y, z$: $x + y + z = 2$, $(x + z) - 2y = 8$ and $3x + (y + z) = 4$.`,
          t`$|A| = 6$ and $\operatorname{adj}A = \begin{bmatrix} -3 & 0 & 3 \\ 2 & -2 & 0 \\ 7 & 2 & -3 \end{bmatrix}$, with $B = \begin{bmatrix} 2 \\ 8 \\ 4 \end{bmatrix}$.`,
          t`$X = \frac{1}{6}(\operatorname{adj}A)B$ $= \frac{1}{6}\begin{bmatrix} 6 \\ -12 \\ 18 \end{bmatrix}$, so the numbers are $1, -2, 3$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.3" },
      stem: t`The cost of 4 pencils, 3 pens and 2 erasers is Rs. 60. The cost of 2 pencils, 4 pens and 6 erasers is Rs. 90, and the cost of 6 pencils, 2 pens and 3 erasers is Rs. 70. Using matrices, the cost of **a box of 10 pencils**, in rupees, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[4, 3, 2], [2, 4, 6], [6, 2, 3]])", B: "Matrix([60, 90, 70])" }, params: { ask: "10*x", var: "x" } },
      options: [
        { key: "A", text: t`$2500$`, correct: false, misconceptionId: "C11-M3", value: "2500" },
        { key: "B", text: t`$260$`, correct: false, misconceptionId: "C11-M4", value: "260" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C11-M5", value: "5" },
        { key: "D", text: t`$50$`, correct: true, value: "50" },
      ],
      solution: {
        steps: [
          t`Let a pencil, a pen and an eraser cost $x, y, z$ rupees: $A = \begin{bmatrix} 4 & 3 & 2 \\ 2 & 4 & 6 \\ 6 & 2 & 3 \end{bmatrix}$, $B = \begin{bmatrix} 60 \\ 90 \\ 70 \end{bmatrix}$.`,
          t`$|A| = 50$ and $\operatorname{adj}A = \begin{bmatrix} 0 & -5 & 10 \\ 30 & 0 & -20 \\ -20 & 10 & 10 \end{bmatrix}$.`,
          t`$X = \frac{1}{50}\begin{bmatrix} 250 \\ 400 \\ 400 \end{bmatrix}$ $=\begin{bmatrix} 5 \\ 8 \\ 8 \end{bmatrix}$.`,
          t`A pencil costs Rs. 5, so a box of 10 pencils costs $10 \times 5 = 50$ rupees.`,
        ],
      },
    },
  ],
};
