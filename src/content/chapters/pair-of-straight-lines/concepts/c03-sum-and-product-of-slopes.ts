import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`The pair $6x^2 - 5xy + y^2 = 0$ is the lines $y = 2x$ and $y = 3x$. **Can you see the sum and the product of their slopes in the equation itself?**`,
    reveal: t`Yes. The sum is $2 + 3 = 5$ and the product is $2 \times 3 = 6$. In the equation $a = 6$, $2h = -5$ and $b = 1$, so $-\dfrac{2h}{b} = 5$ and $\dfrac{a}{b} = 6$. Both come straight from the coefficients, with no factorising.`,
  },
  explanation: {
    intuition: [
      t`Recall: the slopes of the pair $ax^2 + 2hxy + by^2 = 0$ are the roots of $bm^2 + 2hm + a = 0$.`,
      t`The roots of a quadratic have a sum and a product you can read off its coefficients.`,
      t`So the sum and the product of the slopes come straight from $a$, $h$ and $b$.`,
      t`No factorising and no surds: it works even when the slopes themselves are untidy.`,
      t`A question may give a condition on the slopes, such as one being twice the other.`,
      t`Writing that condition with the sum and product finds a missing coefficient.`,
    ],
    formal: [
      {
        title: "The two formulas",
        points: [
          t`The **auxiliary equation** $bm^2 + 2hm + a = 0$ comes from putting $y = mx$ in the pair; its roots are the slopes.`,
          t`For $pm^2 + qm + r = 0$, the roots add to $-\dfrac{q}{p}$ and multiply to $\dfrac{r}{p}$.`,
          t`Here $p = b$, $q = 2h$ and $r = a$.`,
          t`So the sum of the slopes is $m_1 + m_2 = -\dfrac{2h}{b}$.`,
          t`And their product is $m_1 m_2 = \dfrac{a}{b}$.`,
          t`Both need $b \ne 0$: if $b = 0$, one line is $x = 0$, which has no slope.`,
        ],
      },
      {
        title: "Read the coefficients carefully",
        points: [
          t`$2h$ is the **whole** coefficient of $xy$: in $x^2 + 6xy + 2y^2 = 0$, $2h = 6$.`,
          t`So the sum of its slopes is $-\dfrac{6}{2} = -3$, and the product is $\dfrac{1}{2}$.`,
          t`Divide by $b$, the coefficient of $y^2$, because a slope is $m = \dfrac{y}{x}$.`,
          t`Dividing by $a$ instead gives the sum and product of the reciprocals of the slopes.`,
          t`Keep the minus sign in the sum; the product has none.`,
        ],
      },
      {
        title: "Sum, product and difference",
        points: [
          t`To find a missing coefficient, write the condition in $m_1$ and $m_2$, then use the formulas.`,
          t`Sum is $t$ times the product: $-\dfrac{2h}{b} = t \cdot \dfrac{a}{b}$.`,
          t`For a difference, use $(m_1 - m_2)^2$ $= (m_1 + m_2)^2 - 4m_1m_2$.`,
          t`This is the **square** of the difference: if the slopes differ by $d$, set it equal to $d^2$.`,
          t`A question asking for the difference wants the positive square root of it.`,
        ],
      },
      {
        title: "Slopes in a given ratio",
        points: [
          t`If one slope is $n$ times the other, call the slopes $m$ and $nm$.`,
          t`The sum gives $(1 + n)m = -\dfrac{2h}{b}$.`,
          t`The product gives $nm^2 = \dfrac{a}{b}$.`,
          t`Find $m$ from one equation and put it in the other.`,
          t`When you reach $m^2 = c$ or $k^2 = c$, keep both roots, $\pm\sqrt{c}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $k$ if the slope of one of the lines given by $3x^2 + 4xy + ky^2 = 0$ is three times the slope of the other.`,
      steps: [
        t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 3$, $2h = 4$, $b = k$. Let the slopes be $m$ and $3m$.`,
        t`Sum: $m + 3m = -\dfrac{4}{k}$, so $m = -\dfrac{1}{k}$.`,
        t`Product: $m \cdot 3m = \dfrac{3}{k}$, so $m^2 = \dfrac{1}{k}$.`,
        t`Then $\dfrac{1}{k^2} = \dfrac{1}{k}$, and $k \ne 0$ (there must be a $y^2$ term), so $k = 1$.`,
      ],
      answer: t`$k = 1$. Check: $3x^2 + 4xy + y^2 = 0$ has slopes $-1$ and $-3$.`,
    },
    visualSpec: t`Drag $k$ in $x^2 + kxy - 2y^2 = 0$ to turn the two lines; live readouts show their slopes, sum and product beside $-\dfrac{2h}{b}$ and $\dfrac{a}{b}$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Divides by the coefficient of $x^2$: takes the slopes as roots of $am^2 + 2hm + b = 0$, so the sum is $-\dfrac{2h}{a}$ and the product $\dfrac{b}{a}$`,
      remediation: t`A slope is $m = \dfrac{y}{x}$, so putting $y = mx$ gives $bm^2 + 2hm + a = 0$. Divide by $b$, the coefficient of $y^2$: $m_1 + m_2 = -\dfrac{2h}{b}$, $m_1m_2 = \dfrac{a}{b}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes $h$ as the whole coefficient of $xy$, so the sum of the slopes comes out double`,
      remediation: t`The coefficient of $xy$ is $2h$, so $h$ is half of it. The sum of the slopes is $-\dfrac{2h}{b}$: minus the whole coefficient of $xy$, over $b$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Drops the minus sign: takes the sum of the slopes as $\dfrac{2h}{b}$`,
      remediation: t`The roots of $pm^2 + qm + r = 0$ add to $-\dfrac{q}{p}$, so $m_1 + m_2 = -\dfrac{2h}{b}$. Only the product, $\dfrac{a}{b}$, has no minus sign.`,
      fallback: { kind: "ext", topic: "sum and product of roots" },
    },
    {
      id: "C03-M4",
      mistake: t`Sets $(m_1 + m_2)^2 - 4m_1m_2$ equal to the difference of the slopes instead of its square`,
      remediation: t`$(m_1 + m_2)^2 - 4m_1m_2$ equals $(m_1 - m_2)^2$, the square of the difference. Set it equal to $d^2$, or take its square root to get the difference.`,
      fallback: { kind: "ext", topic: "sum and product of roots" },
    },
    {
      id: "C03-M5",
      mistake: t`Remembers the sum of the slopes as $-\dfrac{h}{b}$`,
      remediation: t`The sum of the slopes is $-\dfrac{2h}{b}$, with the $2$: it is minus the whole coefficient of $xy$, over $b$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Keeps only the positive square root, so one value of $k$ is lost`,
      remediation: t`$m^2 = c$ gives $m = \pm\sqrt{c}$, and $k^2 = c$ gives $k = \pm\sqrt{c}$. Keep both signs: each gives its own answer unless the question rules one out.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1 gives the key on 'one slope is n times the other' items: the reciprocals of the slopes keep the same ratio. Diagnose it with a sum, sum-and-product or difference item.",
    "C03-M3 gives the key whenever the condition squares the sum (difference and ratio items). Diagnose it with a sum or sum-and-product item.",
    "C03-M4 applies only to a difference of slopes, and C03-M6 only where the condition leads to a plus-or-minus root.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Solved (4.2) Ex.3" },
      stem: t`The sum of the slopes of the lines represented by $x^2 + 4xy - 7y^2 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "1", c: "4", b: "-7" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{8}{7}$`, correct: false, misconceptionId: "C03-M2", value: "8/7" },
        { key: "B", text: t`$- \frac{4}{7}$`, correct: false, misconceptionId: "C03-M3", value: "-4/7" },
        { key: "C", text: t`$\frac{4}{7}$`, correct: true, value: "4/7" },
        { key: "D", text: t`$-4$`, correct: false, misconceptionId: "C03-M1", value: "-4" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 1$, $2h = 4$, $b = -7$.`,
          t`$m_1 + m_2 = -\dfrac{2h}{b} = -\dfrac{4}{-7}$ $= \dfrac{4}{7}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.4 (i)" },
      stem: t`The sum of the slopes of the lines represented by $x^2 + kxy - 3y^2 = 0$ is twice their product. Then $k =$`,
      verify: { kind: "value", inputs: { a: "1", c: "k", b: "-3", t: "2" }, params: { ask: "k", cond: "sum_t_prod" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C03-M5", value: "-4" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C03-M1", value: "6" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 1$, $2h = k$, $b = -3$.`,
          t`Sum $= -\dfrac{k}{-3} = \dfrac{k}{3}$; product $= \dfrac{1}{-3} = -\dfrac{1}{3}$.`,
          t`$\dfrac{k}{3} = 2\left(-\dfrac{1}{3}\right)$, so $k = -2$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc I (4)" },
      stem: t`The difference between the slopes of the lines represented by $3x^2 - 4xy + y^2 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "3", c: "-4", b: "1" }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C03-M1", value: "2/3" },
        { key: "B", text: t`$2 \sqrt{13}$`, correct: false, misconceptionId: "C03-M2", value: "2*sqrt(13)" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C03-M4", value: "4" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Here $a = 3$, $2h = -4$, $b = 1$: sum $= 4$, product $= 3$.`,
          t`$(m_1 - m_2)^2 = 4^2 - 4(3) = 4$.`,
          t`So the difference is $\sqrt{4} = 2$. Indeed the slopes are $1$ and $3$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.4 (ii)" },
      stem: t`The slopes of the lines represented by $3x^2 + kxy - y^2 = 0$ differ by $4$. Then $k =$`,
      verify: { kind: "value", inputs: { a: "3", c: "k", b: "-1", d: "4" }, params: { ask: "k", cond: "diff" } },
      options: [
        { key: "A", text: t`$\pm 4$`, correct: false, misconceptionId: "C03-M5", value: "{-4, 4}" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M6", value: "2" },
        { key: "C", text: t`$\pm 2$`, correct: true, value: "{-2, 2}" },
        { key: "D", text: t`$\pm 1$`, correct: false, misconceptionId: "C03-M2", value: "{-1, 1}" },
      ],
      solution: {
        steps: [
          t`Here $a = 3$, $2h = k$, $b = -1$: sum $= k$, product $= -3$.`,
          t`$(m_1 - m_2)^2 = k^2 + 12$, and this must equal $4^2 = 16$.`,
          t`$k^2 = 4$, so $k = \pm 2$; both values give slopes that differ by $4$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.4 (iii)" },
      stem: t`The slope of one of the lines given by $kx^2 + 4xy - y^2 = 0$ exceeds the slope of the other by $8$. Then $k =$`,
      verify: { kind: "value", inputs: { a: "k", c: "4", b: "-1", d: "8" }, params: { ask: "k", cond: "diff" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C03-M4", value: "-2" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C03-M5", value: "15" },
      ],
      solution: {
        steps: [
          t`Here $a = k$, $2h = 4$, $b = -1$: sum $= 4$, product $= -k$.`,
          t`$(m_1 - m_2)^2 = 16 + 4k$, and this must equal $8^2 = 64$.`,
          t`$4k = 48$, so $k = 12$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Solved (4.2) Ex.8" },
      stem: t`The slope of one of the lines represented by $4x^2 + kxy + y^2 = 0$ is four times the slope of the other. Then $k =$`,
      verify: { kind: "value", inputs: { a: "4", c: "k", b: "1", n: "4" }, params: { ask: "k", cond: "ratio" } },
      options: [
        { key: "A", text: t`$\pm 5$`, correct: true, value: "{-5, 5}" },
        { key: "B", text: t`$\pm \frac{5}{2}$`, correct: false, misconceptionId: "C03-M2", value: "{-5/2, 5/2}" },
        { key: "C", text: t`$\pm 10$`, correct: false, misconceptionId: "C03-M5", value: "{-10, 10}" },
        { key: "D", text: t`$-5$`, correct: false, misconceptionId: "C03-M6", value: "-5" },
      ],
      solution: {
        steps: [
          t`Here $a = 4$, $2h = k$, $b = 1$. Let the slopes be $m$ and $4m$.`,
          t`Product: $4m^2 = 4$, so $m = \pm 1$.`,
          t`Sum: $5m = -k$, so $k = -5m$, giving $k = \pm 5$.`,
        ],
      },
    },
  ],
};
