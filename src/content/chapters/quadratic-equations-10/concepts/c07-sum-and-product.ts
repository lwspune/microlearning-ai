import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Without solving $x^2 - 10x + 21 = 0$, **can you say what its two roots add up to?**`,
    reveal: t`Yes: $10$. The roots are $3$ and $7$; their sum is $10$ and their product is $21$. Both numbers already sit in the equation.`,
  },
  explanation: {
    intuition: [
      t`A quadratic equation has two roots; we call them $\alpha$ (alpha) and $\beta$ (beta).`,
      t`Often we need only their **sum** $\alpha + \beta$ or their **product** $\alpha\beta$, not the roots.`,
      t`$x^2 - 7x + 10 = 0$ has roots $2$ and $5$: sum $7$, product $10$.`,
      t`The sum is the coefficient of $x$ with its sign changed.`,
      t`The product is the constant term.`,
      t`When $a \neq 1$, both are divided by $a$, so we never need to solve.`,
    ],
    formal: [
      {
        title: "Where the results come from",
        points: [
          t`Write $\Delta$ for $b^2 - 4ac$, the number under the root sign.`,
          t`By the quadratic formula, $\alpha = \dfrac{-b + \sqrt{\Delta}}{2a}$ and $\beta = \dfrac{-b - \sqrt{\Delta}}{2a}$.`,
          t`Add them: the $\sqrt{\Delta}$ terms cancel, so $\alpha + \beta = \dfrac{-2b}{2a}$ $= -\dfrac{b}{a}$.`,
          t`Multiply them, using $(p + q)(p - q) = p^2 - q^2$ on top.`,
          t`The top is $b^2 - \Delta = 4ac$, and the bottom is $4a^2$.`,
          t`So $\alpha\beta = \dfrac{4ac}{4a^2} = \dfrac{c}{a}$.`,
        ],
      },
      {
        title: "Reading the sum and product",
        points: [
          t`$\alpha + \beta = -\dfrac{b}{a}$: the sum has a minus sign in front.`,
          t`$\alpha\beta = \dfrac{c}{a}$: the product has no extra minus sign.`,
          t`Read $a$, $b$, $c$ with their signs: $5x^2 - 3x - 2 = 0$ has $a = 5$, $b = -3$, $c = -2$.`,
          t`So $\alpha + \beta = -\dfrac{-3}{5} = \dfrac{3}{5}$ and $\alpha\beta = \dfrac{-2}{5}$.`,
          t`Always divide by $a$; only when $a = 1$ is the sum $-b$ and the product $c$.`,
        ],
      },
      {
        title: "A condition that finds k",
        points: [
          t`If a coefficient contains $k$, then the sum and the product contain $k$ too.`,
          t`A sentence about the roots then becomes an equation in $k$.`,
          t`'The sum is double the product' means $\alpha + \beta = 2\alpha\beta$.`,
          t`A number outside a bracket multiplies every term: $2(k + 1) = 2k + 2$.`,
          t`'The difference of the roots is $d$' means $\alpha - \beta = d$.`,
          t`Add it to $\alpha + \beta$ to get $2\alpha$, halve, find $\beta$, then use $\alpha\beta = \dfrac{c}{a}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The difference between the roots of $x^2 - 13x + k = 0$ is $7$. Find $k$.`,
      steps: [
        t`Compare with $ax^2 + bx + c = 0$: $a = 1$, $b = -13$, $c = k$.`,
        t`$\alpha + \beta = -\dfrac{-13}{1} = 13$, and $\alpha - \beta = 7$ is given.`,
        t`Add the two equations: $2\alpha = 20$, so $\alpha = 10$. Then $\beta = 13 - 10 = 3$.`,
        t`$\alpha\beta = \dfrac{c}{a}$ gives $10 \times 3 = k$, so $k = 30$.`,
      ],
      answer: t`$k = 30$`,
    },
    visualSpec: t`Drag $b$ and $c$ in $x^2 + bx + c = 0$ and watch the two roots move, with their sum and product shown beside $-b$ and $c$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Takes the sum of the roots as $\dfrac{b}{a}$, dropping the minus sign.`,
      remediation: t`The sum is $\alpha + \beta = -\dfrac{b}{a}$: change the sign. For $x^2 - 5x + 6 = 0$ the sum is $5$, not $-5$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M2",
      mistake: t`Swaps the two results: takes the sum as $\dfrac{c}{a}$ and the product as $-\dfrac{b}{a}$.`,
      remediation: t`The sum comes from $b$, the coefficient of $x$: $\alpha + \beta = -\dfrac{b}{a}$. The product comes from the constant: $\alpha\beta = \dfrac{c}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Forgets to divide by $a$: takes the sum as $-b$ and the product as $c$.`,
      remediation: t`Both results are divided by $a$, the coefficient of $x^2$: $-\dfrac{b}{a}$ and $\dfrac{c}{a}$. Only when $a = 1$ is the sum just $-b$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Puts a minus sign on the product too: $\alpha\beta = -\dfrac{c}{a}$.`,
      remediation: t`Only the sum has the minus sign. The product is $\alpha\beta = \dfrac{c}{a}$, with $c$ keeping its own sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Adds $\alpha + \beta$ and $\alpha - \beta$, gets $2\alpha$, and forgets to halve it.`,
      remediation: t`Adding the two equations gives $2\alpha$, not $\alpha$. Divide by $2$ before you find $\beta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Multiplies only the first term of a bracket by $2$: $2(k + 3) = 2k + 3$.`,
      remediation: t`A number outside a bracket multiplies every term inside it: $2(k + 3) = 2k + 6$.`,
      fallback: { kind: "ext", topic: "multiplying out a bracket by a number" },
    },
  ],
  engineNotes: [
    "C07-M1 changes only the sum and C07-M4 only the product: M1 gives the key on product items and on difference items, M4 on sum items.",
    t`On 'sum is double the product' items C07-M1 and C07-M4 give the same $k$, so list only one of them.`,
    t`On 'sum is double the product' items C07-M2 equals doubling the wrong side, $2(\alpha + \beta) = \alpha\beta$; that error is not modelled separately.`,
    t`C07-M3 needs $a \neq 1$, and gives the key on 'sum is double the product' items, where $a$ cancels.`,
    t`C07-M5 applies only to difference items and C07-M6 only to 'double' items whose product is a $k$-term plus a number.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.1 (3)" },
      stem: t`$\alpha$ and $\beta$ are the roots of $2x^2 - 4x - 3 = 0$. Complete the activity: $\alpha + \beta = \square$. The box holds:`,
      verify: { kind: "value", inputs: { E: "2*x**2 - 4*x - 3" }, params: { var: "x", ask: "sum" } },
      options: [
        { key: "A", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C07-M2", value: "-3/2" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C07-M3", value: "4" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C07-M1", value: "-2" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + bx + c = 0$: $a = 2$, $b = -4$, $c = -3$.`,
          t`$\alpha + \beta = -\dfrac{b}{a} = -\dfrac{-4}{2}$.`,
          t`So $\alpha + \beta = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/The relation between roots of the quadratic equation and coefficients SolvedEx.1" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $2x^2 + 6x - 5 = 0$, then $\alpha \times \beta = $`,
      verify: { kind: "value", inputs: { E: "2*x**2 + 6*x - 5" }, params: { var: "x", ask: "product" } },
      options: [
        { key: "A", text: t`$-3$`, correct: false, misconceptionId: "C07-M2", value: "-3" },
        { key: "B", text: t`$-5$`, correct: false, misconceptionId: "C07-M3", value: "-5" },
        { key: "C", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C07-M4", value: "5/2" },
        { key: "D", text: t`$- \frac{5}{2}$`, correct: true, value: "-5/2" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + bx + c = 0$: $a = 2$, $b = 6$, $c = -5$.`,
          t`$\alpha \times \beta = \dfrac{c}{a} = \dfrac{-5}{2}$.`,
          t`So $\alpha \times \beta = -\dfrac{5}{2}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.5" },
      stem: t`The sum of the roots of $x^2 - 4kx + k + 3 = 0$ is double their product. The value of $k$ is:`,
      verify: { kind: "value", inputs: { E: "x**2 - 4*k*x + k + 3" }, params: { var: "x", ask: "double" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C07-M6", value: "3/2" },
        { key: "B", text: t`$3$`, correct: true, value: "3" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C07-M1", value: "-1" },
        { key: "D", text: t`$\frac{3}{7}$`, correct: false, misconceptionId: "C07-M2", value: "3/7" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + bx + c = 0$: $a = 1$, $b = -4k$, $c = k + 3$.`,
          t`$\alpha + \beta = -\dfrac{-4k}{1} = 4k$ and $\alpha\beta = k + 3$.`,
          t`The sum is double the product: $4k = 2(k + 3)$ $= 2k + 6$.`,
          t`So $2k = 6$ and $k = 3$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/The relation between roots of the quadratic equation and coefficients SolvedEx.2" },
      stem: t`The difference between the roots of $3x^2 - 39x + k = 0$ is $7$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { E: "3*x**2 - 39*x + k", d: "7" }, params: { var: "x", ask: "diff" } },
      options: [
        { key: "A", text: t`$90$`, correct: true, value: "90" },
        { key: "B", text: t`$368$`, correct: false, misconceptionId: "C07-M3", value: "368" },
        { key: "C", text: t`$-90$`, correct: false, misconceptionId: "C07-M4", value: "-90" },
        { key: "D", text: t`$-420$`, correct: false, misconceptionId: "C07-M5", value: "-420" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + bx + c = 0$: $a = 3$, $b = -39$, $c = k$.`,
          t`$\alpha + \beta = -\dfrac{-39}{3} = 13$, and $\alpha - \beta = 7$.`,
          t`Add: $2\alpha = 20$, so $\alpha = 10$ and $\beta = 13 - 10 = 3$.`,
          t`$\alpha\beta = \dfrac{c}{a}$ gives $30 = \dfrac{k}{3}$, so $k = 90$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/The relation between roots of the quadratic equation and coefficients SolvedEx.1" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $3y^2 + 12y + 4 = 0$, then $\alpha + \beta = $`,
      verify: { kind: "value", inputs: { E: "3*y**2 + 12*y + 4" }, params: { var: "y", ask: "sum" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C07-M1", value: "4" },
        { key: "B", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C07-M2", value: "4/3" },
        { key: "C", text: t`$-12$`, correct: false, misconceptionId: "C07-M3", value: "-12" },
        { key: "D", text: t`$-4$`, correct: true, value: "-4" },
      ],
      solution: {
        steps: [
          t`Compare with $ay^2 + by + c = 0$: $a = 3$, $b = 12$, $c = 4$.`,
          t`$\alpha + \beta = -\dfrac{b}{a} = -\dfrac{12}{3}$.`,
          t`So $\alpha + \beta = -4$.`,
        ],
      },
    },
  ],
};
