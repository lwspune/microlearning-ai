import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Two numbers have sum $4$ and product $1$. **Find the sum of their squares** without finding the numbers.`,
    reveal: t`Call them $\alpha$ and $\beta$. $(\alpha + \beta)^2 = \alpha^2 + 2\alpha\beta + \beta^2$, so $\alpha^2 + \beta^2$ $= 4^2 - 2 \times 1 = 14$. The numbers are $2 \pm \sqrt{3}$, but you never needed them.`,
  },
  explanation: {
    intuition: [
      t`Let $\alpha$ and $\beta$ be the roots of a quadratic equation.`,
      t`You can read $\alpha + \beta$ and $\alpha\beta$ straight from the equation.`,
      t`Many other expressions in the roots can be built from these two.`,
      t`For example, $\alpha^2 + \beta^2$, $\alpha^3 + \beta^3$ and $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$.`,
      t`So you can find their values without solving the equation.`,
      t`The tools are the identities for $(a + b)^2$ and $(a + b)^3$.`,
    ],
    formal: [
      {
        title: "Sum and product first",
        points: [
          t`Write the equation as $ax^2 + bx + c = 0$ and read $a$, $b$, $c$.`,
          t`Then $\alpha + \beta = -\dfrac{b}{a}$ and $\alpha\beta = \dfrac{c}{a}$.`,
          t`Keep the minus sign in $-\dfrac{b}{a}$, and divide both by $a$.`,
          t`Every value in this concept is built from these two numbers.`,
        ],
      },
      {
        title: "Sum of the squares",
        points: [
          t`Start from $(\alpha + \beta)^2 = \alpha^2 + 2\alpha\beta + \beta^2$.`,
          t`Take $2\alpha\beta$ to the other side.`,
          t`So $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$.`,
          t`The square of the sum is **not** the sum of the squares: $2\alpha\beta$ must come off.`,
        ],
      },
      {
        title: "Sum of the cubes",
        points: [
          t`Start from $(\alpha + \beta)^3$ $= \alpha^3 + \beta^3 + 3\alpha\beta(\alpha + \beta)$.`,
          t`Take $3\alpha\beta(\alpha + \beta)$ to the other side.`,
          t`So $\alpha^3 + \beta^3$ $= (\alpha + \beta)^3$ $- 3\alpha\beta(\alpha + \beta)$.`,
          t`The last term has three factors: $3$, $\alpha\beta$ and $(\alpha + \beta)$.`,
        ],
      },
      {
        title: "Square of the difference",
        points: [
          t`Start from $(\alpha - \beta)^2 = \alpha^2 - 2\alpha\beta + \beta^2$.`,
          t`Replace $\alpha^2 + \beta^2$ by $(\alpha + \beta)^2 - 2\alpha\beta$.`,
          t`So $(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta$.`,
          t`Two lots of $2\alpha\beta$ come off, which makes $4\alpha\beta$.`,
        ],
      },
      {
        title: "Fractions in the roots",
        points: [
          t`Add fractions over a common denominator, never by adding the denominators.`,
          t`$\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\beta + \alpha}{\alpha\beta}$, the sum over the product.`,
          t`$\dfrac{\alpha}{\beta} + \dfrac{\beta}{\alpha} = \dfrac{\alpha^2 + \beta^2}{\alpha\beta}$.`,
          t`Find $\alpha^2 + \beta^2$ first, then divide by $\alpha\beta$.`,
        ],
      },
      {
        title: "Working backwards",
        points: [
          t`Sometimes $\alpha + \beta$ and $\alpha^3 + \beta^3$ are given, and $\alpha\beta$ is unknown.`,
          t`Put the given values into the cube identity.`,
          t`This gives a linear equation in $\alpha\beta$.`,
          t`Solve it, changing the sign of each term you move across $=$.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\alpha$ and $\beta$ are the roots of $x^2 - 6x + 4 = 0$. Find $\alpha^2 + \beta^2$ and $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$.`,
      steps: [
        t`Compare with $ax^2 + bx + c = 0$: $a = 1$, $b = -6$, $c = 4$.`,
        t`$\alpha + \beta = -\dfrac{b}{a} = 6$ and $\alpha\beta = \dfrac{c}{a} = 4$.`,
        t`$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ $= 36 - 8 = 28$.`,
        t`$\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\alpha + \beta}{\alpha\beta} = \dfrac{6}{4} = \dfrac{3}{2}$.`,
      ],
      answer: t`$\alpha^2 + \beta^2 = 28$ and $\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{3}{2}$.`,
    },
    visualSpec: t`Sliders for $\alpha + \beta$ and $\alpha\beta$, with $\alpha^2 + \beta^2$, $\alpha^3 + \beta^3$ and $(\alpha - \beta)^2$ updating beside the identities.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Believes the square of the sum is the sum of the squares, and drops the correction term: $\alpha^2 + \beta^2 = (\alpha + \beta)^2$, $\alpha^3 + \beta^3 = (\alpha + \beta)^3$, $(\alpha - \beta)^2 = \alpha^2 + \beta^2$.`,
      remediation: t`$(\alpha + \beta)^2$ also contains $2\alpha\beta$, so $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$. Always take off the extra term.`,
      fallback: { kind: "ext", topic: "expanding (a + b)^2 and (a - b)^2 (Std IX Polynomials)" },
    },
    {
      id: "C08-M2",
      mistake: t`Adds the correction term instead of subtracting it: $(\alpha + \beta)^2 + 2\alpha\beta$, $(\alpha + \beta)^3 + 3\alpha\beta(\alpha + \beta)$, $(\alpha + \beta)^2 + 4\alpha\beta$.`,
      remediation: t`The extra term is inside $(\alpha + \beta)^2$ or $(\alpha + \beta)^3$, so it is subtracted: $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Takes $\alpha + \beta = \dfrac{b}{a}$, dropping the minus sign.`,
      remediation: t`The sum of the roots is $\alpha + \beta = -\dfrac{b}{a}$: keep the minus sign.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M4",
      mistake: t`Forgets to divide by $a$: takes $\alpha + \beta = -b$ and $\alpha\beta = c$.`,
      remediation: t`Divide by $a$, the coefficient of $x^2$: $\alpha + \beta = -\dfrac{b}{a}$ and $\alpha\beta = \dfrac{c}{a}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M5",
      mistake: t`Drops the factor $(\alpha + \beta)$: $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta$.`,
      remediation: t`The cube identity is $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$: the last term keeps $(\alpha + \beta)$.`,
      fallback: { kind: "ext", topic: "expanding (a + b)^3" },
    },
    {
      id: "C08-M6",
      mistake: t`Solving $t = s^3 - 3\alpha\beta s$ for $\alpha\beta$, moves $t$ across $=$ without changing its sign.`,
      remediation: t`A term that crosses $=$ changes its sign: $35 = 125 - 15\alpha\beta$ gives $15\alpha\beta = 125 - 35$.`,
      fallback: { kind: "ext", topic: "transposing terms in an equation" },
    },
  ],
  engineNotes: [
    t`C08-M3 changes only odd powers of the sum: it gives the key for $\alpha^2 + \beta^2$, $(\alpha - \beta)^2$ and $\dfrac{\alpha}{\beta} + \dfrac{\beta}{\alpha}$; diagnose it with $\alpha^3 + \beta^3$ or $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$.`,
    t`C08-M4 gives the key when $a = 1$, and always on $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$; draw items with $a \neq 1$.`,
    t`C08-M5 and C08-M6 apply only to cubes and to finding $\alpha\beta$ backwards; C08-M1, C08-M3 and C08-M4 need the equation, not the given sum.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.6 (2)" },
      stem: t`$\alpha$ and $\beta$ are the roots of $y^2 - 2y - 7 = 0$. Find $\alpha^3 + \beta^3$.`,
      verify: { kind: "value", inputs: { a: "1", b: "-2", c: "-7" }, params: { out: "cube" } },
      options: [
        { key: "A", text: t`$50$`, correct: true, value: "50" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C08-M1", value: "8" },
        { key: "C", text: t`$-34$`, correct: false, misconceptionId: "C08-M2", value: "-34" },
        { key: "D", text: t`$-50$`, correct: false, misconceptionId: "C08-M3", value: "-50" },
      ],
      solution: {
        steps: [
          t`$a = 1$, $b = -2$, $c = -7$: so $\alpha + \beta = 2$ and $\alpha\beta = -7$.`,
          t`$\alpha^3 + \beta^3 = (\alpha + \beta)^3$ $- 3\alpha\beta(\alpha + \beta)$.`,
          t`$= 2^3 - 3 \times (-7) \times 2$ $= 8 + 42$.`,
          t`So $\alpha^3 + \beta^3 = 50$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.6 (1)" },
      stem: t`$\alpha$ and $\beta$ are the roots of $2y^2 + 6y - 3 = 0$. Find $\alpha^2 + \beta^2$.`,
      verify: { kind: "value", inputs: { a: "2", b: "6", c: "-3" }, params: { out: "sq" } },
      options: [
        { key: "A", text: t`$9$`, correct: false, misconceptionId: "C08-M1", value: "9" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C08-M2", value: "6" },
        { key: "C", text: t`$42$`, correct: false, misconceptionId: "C08-M4", value: "42" },
        { key: "D", text: t`$12$`, correct: true, value: "12" },
      ],
      solution: {
        steps: [
          t`$a = 2$, $b = 6$, $c = -3$: so $\alpha + \beta = -\dfrac{6}{2} = -3$.`,
          t`$\alpha\beta = \dfrac{-3}{2}$.`,
          t`$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ $= 9 - 2 \times \left(-\dfrac{3}{2}\right)$.`,
          t`$= 9 + 3$, so $\alpha^2 + \beta^2 = 12$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q4(i)" },
      stem: t`For a quadratic equation with roots $\alpha$ and $\beta$, $\alpha + \beta = 5$ and $\alpha^3 + \beta^3 = 35$. Find $\alpha\beta$.`,
      verify: { kind: "value", inputs: { s: "5", t: "35" }, params: { out: "prod" } },
      options: [
        { key: "A", text: t`$-6$`, correct: false, misconceptionId: "C08-M2", value: "-6" },
        { key: "B", text: t`$30$`, correct: false, misconceptionId: "C08-M5", value: "30" },
        { key: "C", text: t`$\frac{32}{3}$`, correct: false, misconceptionId: "C08-M6", value: "32/3" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`$\alpha^3 + \beta^3 = (\alpha + \beta)^3$ $- 3\alpha\beta(\alpha + \beta)$.`,
          t`Put in the values: $35 = 5^3 - 3\alpha\beta \times 5$ $= 125 - 15\alpha\beta$.`,
          t`So $15\alpha\beta = 125 - 35 = 90$.`,
          t`$\alpha\beta = \dfrac{90}{15} = 6$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.10" },
      stem: t`$\alpha$ and $\beta$ are the roots of $2x^2 + 2(p + q)x + p^2 + q^2 = 0$. Find $(\alpha - \beta)^2$.`,
      verify: { kind: "value", inputs: { a: "2", b: "2*(p + q)", c: "p**2 + q**2" }, params: { out: "diff" } },
      options: [
        { key: "A", text: t`$3p^2 + 2pq + 3q^2$`, correct: false, misconceptionId: "C08-M2", value: "2*p**2 + 2*q**2 + (p + q)**2" },
        { key: "B", text: t`$8pq$`, correct: false, misconceptionId: "C08-M4", value: "8*p*q" },
        { key: "C", text: t`$-(p - q)^2$`, correct: true, value: "-(p - q)**2" },
        { key: "D", text: t`$2pq$`, correct: false, misconceptionId: "C08-M1", value: "2*p*q" },
      ],
      solution: {
        steps: [
          t`$\alpha + \beta = -\dfrac{2(p + q)}{2} = -(p + q)$.`,
          t`$\alpha\beta = \dfrac{p^2 + q^2}{2}$.`,
          t`$(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta$ $= (p + q)^2 - 2(p^2 + q^2)$.`,
          t`$= p^2 + 2pq + q^2 - 2p^2 - 2q^2$ $= -p^2 + 2pq - q^2$ $= -(p - q)^2$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`$\alpha$ and $\beta$ are the roots of $3x^2 + 6x + 2 = 0$. Find $\dfrac{\alpha}{\beta} + \dfrac{\beta}{\alpha}$.`,
      verify: { kind: "value", inputs: { a: "3", b: "6", c: "2" }, params: { out: "ratio" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C08-M4", value: "16" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C08-M1", value: "6" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C08-M2", value: "8" },
      ],
      solution: {
        steps: [
          t`$a = 3$, $b = 6$, $c = 2$: so $\alpha + \beta = -2$ and $\alpha\beta = \dfrac{2}{3}$.`,
          t`$\alpha^2 + \beta^2 = (-2)^2 - 2 \times \dfrac{2}{3}$ $= 4 - \dfrac{4}{3} = \dfrac{8}{3}$.`,
          t`$\dfrac{\alpha}{\beta} + \dfrac{\beta}{\alpha} = \dfrac{\alpha^2 + \beta^2}{\alpha\beta}$ $= \dfrac{8}{3} \div \dfrac{2}{3}$.`,
          t`$= \dfrac{8}{3} \times \dfrac{3}{2} = 4$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q4(i)" },
      stem: t`The sum of the two roots of a quadratic equation is $7$ and the sum of their cubes is $91$. Find the product of the roots.`,
      verify: { kind: "value", inputs: { s: "7", t: "91" }, params: { out: "prod" } },
      options: [
        { key: "A", text: t`$84$`, correct: false, misconceptionId: "C08-M5", value: "84" },
        { key: "B", text: t`$\frac{62}{3}$`, correct: false, misconceptionId: "C08-M6", value: "62/3" },
        { key: "C", text: t`$12$`, correct: true, value: "12" },
        { key: "D", text: t`$-12$`, correct: false, misconceptionId: "C08-M2", value: "-12" },
      ],
      solution: {
        steps: [
          t`Let the roots be $\alpha$ and $\beta$: $\alpha + \beta = 7$ and $\alpha^3 + \beta^3 = 91$.`,
          t`$91 = 7^3 - 3\alpha\beta \times 7$ $= 343 - 21\alpha\beta$.`,
          t`So $21\alpha\beta = 343 - 91 = 252$.`,
          t`$\alpha\beta = \dfrac{252}{21} = 12$.`,
        ],
      },
    },
  ],
};
