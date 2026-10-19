import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`The roots of $x^2 - 7x + 10 = 0$ are $2$ and $5$. Add them, then multiply them. **Where have you already seen $7$ and $10$?**`,
    reveal: t`In the equation itself. Expanding $(x - \alpha)(x - \beta)$ always gives $x^2 - (\alpha + \beta)x + \alpha\beta$, and here $x^2 - 7x + 10 = (x - 2)(x - 5)$. So when the $x^2$ term is plain $x^2$, the sum is minus the $x$ coefficient and the product is the constant.`,
  },
  explanation: {
    intuition: [
      t`A **root** of an equation is a value of $x$ that makes it true.`,
      t`A quadratic $ax^2 + bx + c = 0$, with $a \neq 0$, has two roots; call them $\alpha$ (alpha) and $\beta$ (beta).`,
      t`The numbers $a$, $b$, $c$ are its **coefficients**: $a$ multiplies $x^2$, $b$ multiplies $x$, and $c$ stands alone.`,
      t`Knowing the roots, the quadratic must be $a(x - \alpha)(x - \beta)$: it is $0$ exactly at $\alpha$ and $\beta$.`,
      t`Expand it: $ax^2 - a(\alpha + \beta)x + a\alpha\beta$.`,
      t`Compare with $ax^2 + bx + c$: the sum $\alpha + \beta$ and the product $\alpha\beta$ are hidden in $b$ and $c$.`,
    ],
    formal: [
      {
        title: "The two relations",
        points: [
          t`Match the $x$ terms: $-a(\alpha + \beta) = b$, so $\alpha + \beta = -\frac{b}{a}$.`,
          t`Match the constants: $a\alpha\beta = c$, so $\alpha\beta = \frac{c}{a}$.`,
          t`The sum carries a minus sign; the product does not.`,
          t`Both divide by $a$; only when $a = 1$ is the sum just $-b$ and the product just $c$.`,
          t`For $2x^2 + 7x - 3 = 0$: the sum is $-\frac{7}{2}$ and the product is $-\frac{3}{2}$.`,
          t`These two facts are **Vieta's relations**: they give the sum and product without solving.`,
        ],
      },
      {
        title: "Standard form first",
        points: [
          t`**Standard form** is $ax^2 + bx + c = 0$: every term on one side, $0$ on the other.`,
          t`$a$ is the number multiplying $x^2$, wherever that term is printed, not the first number you see.`,
          t`In $3 + 2x - 5x^2 = 0$: $a = -5$, $b = 2$, $c = 3$, so the sum is $\frac{2}{5}$.`,
          t`Move terms across and expand brackets before you read anything off.`,
          t`$x(x + 3) = 4(x + 1)$ becomes $x^2 - x - 4 = 0$: sum $1$, product $-4$.`,
          t`Clear fractions first too, by multiplying through by every denominator.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`When a coefficient contains an unknown $k$, a given sum or product becomes an equation in $k$.`,
          t`The product of the roots of $kx^2 - 9x + 6 = 0$ is $2$: $\frac{6}{k} = 2$, so $k = 3$.`,
          t`Check that $a \neq 0$ for your $k$, or the equation is no longer quadratic.`,
          t`The sum equals the product when $-\frac{b}{a} = \frac{c}{a}$, that is when $c = -b$.`,
          t`Any $a$ works there, so infinitely many quadratics have their sum equal to their product.`,
        ],
      },
      {
        title: "One root known",
        points: [
          t`If one root $r$ is known, the other root $\beta$ follows from one relation.`,
          t`From the sum: $\beta = -\frac{b}{a} - r$.`,
          t`From the product: $\beta = \frac{c}{ar}$, when $r \neq 0$.`,
          t`Pick the relation that avoids the unknown coefficient.`,
          t`$4$ is a root of $x^2 + kx - 12 = 0$: the product is $-12$, so $\beta = -3$.`,
        ],
      },
      {
        title: "The coefficient-sum shortcut",
        points: [
          t`Put $x = 1$ into $ax^2 + bx + c$: you get $a + b + c$.`,
          t`So if $a + b + c = 0$, then $x = 1$ is a root.`,
          t`The other root comes from the product: $1 \times \beta = \frac{c}{a}$, so $\beta = \frac{c}{a}$.`,
          t`$5x^2 - 8x + 3 = 0$: $5 - 8 + 3 = 0$, so the roots are $1$ and $\frac{3}{5}$.`,
          t`Watch for coefficients like $b - c$, $c - a$, $a - b$: they always add to $0$.`,
          t`The other root is $\frac{c}{a}$ only when the known root is $1$; otherwise divide by that root.`,
        ],
      },
    ],
    worked: {
      prompt: t`The sum of the roots of $\frac{1}{2x + p} + \frac{1}{2x + q}$ $= \frac{1}{r}$ is $0$. Find $r$.`,
      steps: [
        t`Multiply by $r(2x + p)(2x + q)$: $r(2x + q) + r(2x + p)$ $= (2x + p)(2x + q)$.`,
        t`Expand both sides: $4rx + r(p + q)$ $= 4x^2 + 2(p + q)x + pq$.`,
        t`Bring every term to one side: $a = 4$, $b = 2(p + q) - 4r$, $c = pq - r(p + q)$.`,
        t`The sum $-\frac{b}{a}$ is $0$ exactly when $b = 0$: $2(p + q) - 4r = 0$.`,
      ],
      answer: t`$r = \frac{p + q}{2}$.`,
    },
    visualSpec: t`Drag two roots along a number line: the equation $x^2 - (\alpha + \beta)x + \alpha\beta = 0$ updates, its coefficients tracking their sum and product.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Taking the sum of the roots as $\frac{b}{a}$, without the minus sign`,
      remediation: t`The sum is $\alpha + \beta = -\frac{b}{a}$: it comes from $-a(\alpha + \beta) = b$. Only the product, $\frac{c}{a}$, has no minus sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Forgetting to divide by $a$: taking the sum as $-b$ and the product as $c$`,
      remediation: t`Both relations divide by $a$, the coefficient of $x^2$: $\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$. Only when $a = 1$ can you skip it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Reading $a$, $b$, $c$ in the order the terms are printed, not by the powers of $x$`,
      remediation: t`Put the equation in standard form, $ax^2 + bx + c = 0$, first: $a$ is the number multiplying $x^2$, wherever that term is printed.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Putting a minus sign on the product too: $\alpha\beta = -\frac{c}{a}$`,
      remediation: t`The product is $\alpha\beta = \frac{c}{a}$, with no minus sign: it comes from $a\alpha\beta = c$. Only the sum, $-\frac{b}{a}$, carries one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Taking the other root as $\frac{c}{a}$ whatever the known root is`,
      remediation: t`The product gives $r\beta = \frac{c}{a}$, so $\beta = \frac{c}{ar}$. The other root is just $\frac{c}{a}$ only when the known root is $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Swapping the relations: taking the sum as $\frac{c}{a}$ and the product as $-\frac{b}{a}$`,
      remediation: t`The sum comes from the $x$ term, $\alpha + \beta = -\frac{b}{a}$; the product comes from the constant, $\alpha\beta = \frac{c}{a}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M1 changes only the sum and C03-M4 only the product. When the given sum is $0$ (as in NDA 2026 Sep Q28, the worked example) the sign errors give the key, so diagnose them with a nonzero sum or product.`,
    "C03-M3 applies only to an equation printed out of standard order (params printed = cba, as in C03-Q1).",
    t`C03-M5 gives the key when the known root is $1$, so it is not tagged on C03-Q6.`,
    "C03-Q6 is NDA 2017 Sep Q5. C03-Q5 takes the one-root-given form of NDA 2021 Apr Q113 (whose roots are complex cube roots of unity) to a real equation.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The sum of the roots of $6 + 5x - 4x^2 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "-4", b: "5", c: "6" }, params: { ask: "sum", printed: "cba" } },
      options: [
        { key: "A", text: t`$-5$`, correct: false, misconceptionId: "C03-M2", value: "-5" },
        { key: "B", text: t`$- \frac{5}{6}$`, correct: false, misconceptionId: "C03-M3", value: "-5/6" },
        { key: "C", text: t`$\frac{5}{4}$`, correct: true, value: "5/4" },
        { key: "D", text: t`$- \frac{5}{4}$`, correct: false, misconceptionId: "C03-M1", value: "-5/4" },
      ],
      solution: {
        steps: [
          t`In standard form, by powers of $x$: $-4x^2 + 5x + 6 = 0$, so $a = -4$, $b = 5$, $c = 6$.`,
          t`The sum is $-\frac{b}{a} = -\frac{5}{-4}$ $= \frac{5}{4}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The product of the roots of $3x^2 + 8x - 5 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "8", c: "-5" }, params: { ask: "prod" } },
      options: [
        { key: "A", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C03-M4", value: "5/3" },
        { key: "B", text: t`$- \frac{8}{3}$`, correct: false, misconceptionId: "C03-M6", value: "-8/3" },
        { key: "C", text: t`$- \frac{5}{3}$`, correct: true, value: "-5/3" },
        { key: "D", text: t`$-5$`, correct: false, misconceptionId: "C03-M2", value: "-5" },
      ],
      solution: {
        steps: [
          t`Here $a = 3$, $b = 8$, $c = -5$.`,
          t`The product is $\frac{c}{a} = -\frac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If the sum of the roots of $(k + 1)x^2 - (3k - 1)x$ $+ k - 2 = 0$ is $2$, then $k$ is:`,
      verify: { kind: "value", inputs: { a: "k + 1", b: "-(3*k - 1)", c: "k - 2", t: "2" }, params: { ask: "k_sum" } },
      options: [
        { key: "A", text: t`$- \frac{1}{5}$`, correct: false, misconceptionId: "C03-M1", value: "-1/5" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M2", value: "1" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C03-M6", value: "-4" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`The sum is $-\frac{b}{a} = \frac{3k - 1}{k + 1}$.`,
          t`$\frac{3k - 1}{k + 1} = 2$ gives $3k - 1 = 2k + 2$, so $k = 3$.`,
          t`Check: $a = 4 \neq 0$, and $4x^2 - 8x + 1 = 0$ has sum $\frac{8}{4} = 2$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If the product of the roots of $(k + 3)x^2 - (k + 1)x$ $+ 2k - 9 = 0$ is $-1$, then $k$ is:`,
      verify: { kind: "value", inputs: { a: "k + 3", b: "-(k + 1)", c: "2*k - 9", t: "-1" }, params: { ask: "k_prod" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C03-M4", value: "12" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C03-M6", value: "-2" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M2", value: "4" },
      ],
      solution: {
        steps: [
          t`The product is $\frac{c}{a} = \frac{2k - 9}{k + 3}$.`,
          t`$\frac{2k - 9}{k + 3} = -1$ gives $2k - 9 = -k - 3$, so $k = 2$.`,
          t`Check: $5x^2 - 3x - 5 = 0$ has product $\frac{-5}{5} = -1$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q113" },
      stem: t`One root of $2x^2 + kx - 15 = 0$ is $3$. The other root is:`,
      verify: { kind: "value", inputs: { a: "2", b: "k", c: "-15", r: "3" }, params: { ask: "other_prod" } },
      options: [
        { key: "A", text: t`$- \frac{5}{2}$`, correct: true, value: "-5/2" },
        { key: "B", text: t`$-5$`, correct: false, misconceptionId: "C03-M2", value: "-5" },
        { key: "C", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C03-M4", value: "5/2" },
        { key: "D", text: t`$- \frac{15}{2}$`, correct: false, misconceptionId: "C03-M5", value: "-15/2" },
      ],
      solution: {
        steps: [
          t`The product needs no $k$: $3\beta = \frac{c}{a} = -\frac{15}{2}$.`,
          t`So $\beta = -\frac{15}{2} \div 3 = -\frac{5}{2}$.`,
          t`Check: $k = -1$ here, and $2x^2 - x - 15$ $= (x - 3)(2x + 5)$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q5" },
      stem: t`The roots of $(q - r)x^2 + (r - p)x$ $+ (p - q) = 0$, where $q \neq r$, are:`,
      verify: { kind: "value", inputs: { a: "q - r", b: "r - p", c: "p - q" }, params: { ask: "roots1" } },
      options: [
        { key: "A", text: t`$1$ and $\frac{p - q}{q - r}$`, correct: true, value: "{1, (p - q)/(q - r)}" },
        { key: "B", text: t`$1$ and $p - q$`, correct: false, misconceptionId: "C03-M2", value: "{1, p - q}" },
        { key: "C", text: t`$1$ and $\frac{q - p}{q - r}$`, correct: false, misconceptionId: "C03-M4", value: "{1, (-p + q)/(q - r)}" },
        { key: "D", text: t`$1$ and $\frac{p - r}{q - r}$`, correct: false, misconceptionId: "C03-M6", value: "{1, (p - r)/(q - r)}" },
      ],
      solution: {
        steps: [
          t`Add the coefficients: $(q - r) + (r - p) + (p - q) = 0$, so $x = 1$ is a root.`,
          t`The product is $\frac{c}{a} = \frac{p - q}{q - r}$, and one root is $1$.`,
          t`So the roots are $1$ and $\frac{p - q}{q - r}$.`,
        ],
      },
    },
  ],
};
