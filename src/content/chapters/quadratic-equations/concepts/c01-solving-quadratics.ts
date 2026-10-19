import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Find a number whose square is $6$ more than the number. You may spot $3$, since $9 = 3 + 6$. **Is there another?**`,
    reveal: t`Yes: $-2$, since $(-2)^2 = 4$ and $-2 + 6 = 4$. The number solves $x^2 = x + 6$, that is $x^2 - x - 6 = 0$, or $(x - 3)(x + 2) = 0$. A product is $0$ only when one of its factors is $0$, so $x = 3$ or $x = -2$.`,
  },
  explanation: {
    intuition: [
      t`An **equation** in $x$ says two expressions are equal; a value of $x$ that makes it true **solves** it.`,
      t`A **quadratic equation** has $x^2$ as the highest power of $x$, like $x^2 = x + 6$.`,
      t`Its solutions are called **roots**, and a quadratic has at most two of them.`,
      t`To find them, gather every term on one side, so that the other side is $0$.`,
      t`Then break that side into two factors: if a product is $0$, one of its factors is $0$.`,
      t`When it won't break up neatly, a formula gives the roots straight from the numbers in the equation.`,
    ],
    formal: [
      {
        title: "Standard form",
        points: [
          t`A **quadratic equation** in $x$ is one that can be written as $ax^2 + bx + c = 0$, with $a \neq 0$.`,
          t`The numbers $a$, $b$ and $c$ are its **coefficients**; they may be letters that stand for numbers.`,
          t`If $a = 0$, the $x^2$ term vanishes and the equation is linear, not quadratic.`,
          t`A **root** is a value of $x$ that makes the equation true.`,
          t`Before reading off $a$, $b$ and $c$, move every term to one side; a term changes sign as it crosses the $=$.`,
          t`So $3x^2 = 4x + 1$ becomes $3x^2 - 4x - 1 = 0$: $a = 3$, $b = -4$, $c = -1$.`,
        ],
      },
      {
        title: "The zero-product rule",
        points: [
          t`If $pq = 0$, then $p = 0$ or $q = 0$: a product is zero only when a factor is zero.`,
          t`So $(x - 5)(x + 1) = 0$ gives $x - 5 = 0$ or $x + 1 = 0$.`,
          t`That is $x = 5$ or $x = -1$: each root has the opposite sign to the number in its bracket.`,
          t`The rule needs $0$ on the other side: $(x - 5)(x + 1) = 7$ tells you nothing about either bracket.`,
          t`Never divide both sides by $x$: that throws away the root $x = 0$.`,
          t`Instead $x^2 = 4x$ becomes $x(x - 4) = 0$, so $x = 0$ or $x = 4$.`,
        ],
      },
      {
        title: "Splitting the middle term",
        points: [
          t`To **factorise** $ax^2 + bx + c$ is to write it as a product of two brackets.`,
          t`**Splitting the middle term**: find two numbers whose product is $ac$ and whose sum is $b$.`,
          t`For $3x^2 - 10x + 8$, $ac = 24$: $-6$ and $-4$ multiply to $24$ and add to $-10$.`,
          t`Split and group: $3x^2 - 6x - 4x + 8$ $= 3x(x - 2) - 4(x - 2)$.`,
          t`So $(3x - 4)(x - 2) = 0$, and $x = \frac{4}{3}$ or $x = 2$.`,
          t`The $a$ stays in the brackets: $(x - 6)(x - 4)$ is wrong, and $6$ and $4$ are not the roots.`,
        ],
      },
      {
        title: "Completing the square",
        points: [
          t`When no two numbers fit, make a **perfect square**, an expression of the form $(x + h)^2$.`,
          t`Take $x^2 + 4x - 1 = 0$, that is $x^2 + 4x = 1$.`,
          t`Add $4$, the square of half of $4$, to both sides: $(x + 2)^2 = 5$.`,
          t`A number whose square is $5$ is $\sqrt{5}$ or $-\sqrt{5}$, so $x + 2 = \pm\sqrt{5}$.`,
          t`So $x = -2 + \sqrt{5}$ or $x = -2 - \sqrt{5}$, written $x = -2 \pm \sqrt{5}$.`,
          t`Such roots contain a **surd**, a square root like $\sqrt{5}$ that no fraction equals.`,
        ],
      },
      {
        title: "The quadratic formula",
        points: [
          t`Completing the square on $ax^2 + bx + c = 0$ itself gives the **quadratic formula**: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.`,
          t`The $\pm$ gives two roots, one with $+$ and one with $-$: keep both.`,
          t`The whole top, $-b \pm \sqrt{b^2 - 4ac}$, is divided by $2a$, not by $2$.`,
          t`For $2x^2 + 2x - 1 = 0$: $b^2 - 4ac = 4 + 8 = 12$.`,
          t`So $x = \frac{-2 \pm \sqrt{12}}{4}$ $= \frac{-1 \pm \sqrt{3}}{2}$.`,
          t`If $b^2 - 4ac < 0$ there is no real root; the next concept studies this number.`,
        ],
      },
      {
        title: "When one root is given",
        points: [
          t`A given root makes the equation true, so put it in for $x$.`,
          t`Say $x = 4$ is a root of $x^2 + kx - 8 = 0$: then $16 + 4k - 8 = 0$, so $k = -2$.`,
          t`Now solve $x^2 - 2x - 8 = 0$: $(x - 4)(x + 2) = 0$.`,
          t`The roots are $4$, as given, and $-2$, the other root.`,
          t`Put in the root itself, $x = 4$, not $-4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $(a + b)x^2 - (a + b + c)x + c = 0$, where $a + b \neq 0$.`,
      steps: [
        t`The $x^2$ coefficient times the constant is $(a + b)c$; the coefficient of $x$ is $-(a + b + c)$.`,
        t`$-(a + b)$ and $-c$ multiply to $(a + b)c$ and add to $-(a + b + c)$: split with them.`,
        t`$(a + b)x^2 - (a + b)x - cx + c$ $= (a + b)x(x - 1) - c(x - 1)$.`,
        t`So $(x - 1)((a + b)x - c) = 0$: $x - 1 = 0$ or $(a + b)x - c = 0$.`,
      ],
      answer: t`$x = 1$ or $x = \frac{c}{a + b}$.`,
    },
    visualSpec: t`Drag $a$, $b$ and $c$: the parabola $y = ax^2 + bx + c$ moves, and its crossings with the $x$-axis, the roots, follow the two values of the formula.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Using the zero-product rule when the other side is not $0$: $(x - p)(x - q) = d$ read as $x - p = d$ or $x - q = d$`,
      remediation: t`A product tells you about its factors only when it equals $0$. Expand, move $d$ across to get $ax^2 + bx + c = 0$, then factorise again.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Dividing both sides by $x$, which loses the root $x = 0$`,
      remediation: t`Dividing by $x$ assumes $x \neq 0$, so the root $0$ disappears. Bring every term to one side and take out the common factor: $x(\ldots) = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Taking the number in each bracket as the root, so $(x - 2)(x + 3) = 0$ gives $-2$ and $3$; the same as starting the formula with $+b$, or putting in $-r$ for a given root $r$`,
      remediation: t`Set each bracket to $0$: $x - 2 = 0$ gives $x = 2$, so a root has the opposite sign to the number in its bracket. The formula starts with $-b$, and a given root goes in as it is.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Forgetting the $a$: dividing by $2$ instead of $2a$ in the formula, or factorising $x^2 + bx + ac$ and never dividing back by $a$`,
      remediation: t`The whole top of the formula is divided by $2a$. When you split the middle term, keep $a$ in the brackets: $3x^2 - 10x + 8 = (3x - 4)(x - 2)$.`,
      fallback: { kind: "ext", topic: "factorising expressions" },
    },
    {
      id: "C01-M5",
      mistake: t`Taking only the $+$ sign of $\pm$, or only the positive square root`,
      remediation: t`A positive number $d$ has two square roots, $\sqrt{d}$ and $-\sqrt{d}$. Keep both signs of $\pm$: when $b^2 - 4ac > 0$ there are two roots.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Moving a term to the other side without changing its sign, so $a$, $b$, $c$ are read off an equation not in standard form`,
      remediation: t`First write the equation as $ax^2 + bx + c = 0$: a term changes sign when it crosses the $=$. Only then read off $a$, $b$ and $c$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M4 gives the key whenever $a = 1$, and C01-M3 whenever the roots are $\pm d$ (such as $x^2 = 9$): diagnose them with $a \neq 1$ and roots that are not negatives of each other.`,
    t`On C01-Q4 C01-M5 gives $5$ only, the same as C01-M2; only C01-M2 is tagged there.`,
    t`On C01-Q5 C01-M3 and C01-M6 both give the other root $\frac{3}{2}$, so the item asks for $k$ too. C01-M4 there: $k$ found rightly, then $2x^2 - x - 6$ factorised as $(x - 4)(x + 3)$, keeping the root that is not $2 \times 2$.`,
    "C01-M1 applies only to a product of brackets equal to a nonzero number; C01-M6 only to an equation with a nonzero right side.",
    t`The worked example is NDA 2023 Sep Q37 (the equation with $k = c$). No numeric NDA PYQ in the pool comes down to solving one quadratic, so the items are NDA-style.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The roots of $2x^2 - 6x + 3 = 0$ are:`,
      verify: { kind: "value", inputs: { lhs: "2*x**2 - 6*x + 3", rhs: "0" }, params: { ask: "roots" } },
      options: [
        { key: "A", text: t`$\frac{3 \pm \sqrt{3}}{2}$`, correct: true, value: "{3/2 - sqrt(3)/2, sqrt(3)/2 + 3/2}" },
        { key: "B", text: t`$\frac{-3 \pm \sqrt{3}}{2}$`, correct: false, misconceptionId: "C01-M3", value: "{-3/2 - sqrt(3)/2, -3/2 + sqrt(3)/2}" },
        { key: "C", text: t`$3 \pm \sqrt{3}$`, correct: false, misconceptionId: "C01-M4", value: "{3 - sqrt(3), sqrt(3) + 3}" },
        { key: "D", text: t`$\frac{3 + \sqrt{3}}{2}$ only`, correct: false, misconceptionId: "C01-M5", value: "{sqrt(3)/2 + 3/2}" },
      ],
      solution: {
        steps: [
          t`$a = 2$, $b = -6$, $c = 3$, so $b^2 - 4ac = 36 - 24 = 12$.`,
          t`$x = \frac{6 \pm \sqrt{12}}{4}$ $= \frac{6 \pm 2\sqrt{3}}{4}$.`,
          t`Divide top and bottom by $2$: $x = \frac{3 \pm \sqrt{3}}{2}$, two roots.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The roots of $2x^2 + 5x = 3$ are:`,
      verify: { kind: "value", inputs: { lhs: "2*x**2 + 5*x", rhs: "3" }, params: { ask: "roots" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$ and $-3$`, correct: true, value: "{-3, 1/2}" },
        { key: "B", text: t`$-\frac{1}{2}$ and $3$`, correct: false, misconceptionId: "C01-M3", value: "{-1/2, 3}" },
        { key: "C", text: t`$1$ and $-6$`, correct: false, misconceptionId: "C01-M4", value: "{-6, 1}" },
        { key: "D", text: t`$-1$ and $-\frac{3}{2}$`, correct: false, misconceptionId: "C01-M6", value: "{-3/2, -1}" },
      ],
      solution: {
        steps: [
          t`Standard form first: $2x^2 + 5x - 3 = 0$, so $ac = -6$.`,
          t`$6$ and $-1$ multiply to $-6$ and add to $5$: $2x^2 + 6x - x - 3 = 0$.`,
          t`$2x(x + 3) - (x + 3) = 0$, so $(2x - 1)(x + 3) = 0$.`,
          t`$x = \frac{1}{2}$ or $x = -3$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The roots of $(x - 2)(x + 3) = 6$ are:`,
      verify: { kind: "value", inputs: { lhs: "(x - 2)*(x + 3)", rhs: "6" }, params: { ask: "roots" } },
      options: [
        { key: "A", text: t`$-3$ and $4$`, correct: false, misconceptionId: "C01-M3", value: "{-3, 4}" },
        { key: "B", text: t`$0$ and $-1$`, correct: false, misconceptionId: "C01-M6", value: "{-1, 0}" },
        { key: "C", text: t`$3$ and $-4$`, correct: true, value: "{-4, 3}" },
        { key: "D", text: t`$3$ and $8$`, correct: false, misconceptionId: "C01-M1", value: "{3, 8}" },
      ],
      solution: {
        steps: [
          t`The right side is not $0$, so expand first: $x^2 + x - 6 = 6$.`,
          t`$x^2 + x - 12 = 0$, that is $(x + 4)(x - 3) = 0$.`,
          t`$x = 3$ or $x = -4$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The roots of $x(2x - 3) = 7x$ are:`,
      verify: { kind: "value", inputs: { lhs: "x*(2*x - 3)", rhs: "7*x" }, params: { ask: "roots" } },
      options: [
        { key: "A", text: t`$0$ and $5$`, correct: true, value: "{0, 5}" },
        { key: "B", text: t`$5$ only`, correct: false, misconceptionId: "C01-M2", value: "{5}" },
        { key: "C", text: t`$0$ and $10$`, correct: false, misconceptionId: "C01-M4", value: "{0, 10}" },
        { key: "D", text: t`$0$ and $-2$`, correct: false, misconceptionId: "C01-M6", value: "{-2, 0}" },
      ],
      solution: {
        steps: [
          t`Don't divide by $x$. Move every term left: $2x^2 - 3x - 7x = 0$, that is $2x^2 - 10x = 0$.`,
          t`$2x(x - 5) = 0$, so $x = 0$ or $x = 5$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $x = 2$ is a root of $2x^2 + kx = 6$, then the value of $k$ and the other root are:`,
      verify: { kind: "value", inputs: { lhs: "2*x**2 + k*x", rhs: "6", r: "2" }, params: { ask: "root" } },
      options: [
        { key: "A", text: t`$k = -1$, other root $-\frac{3}{2}$`, correct: true, value: "(-1, -3/2)" },
        { key: "B", text: t`$k = 1$, other root $\frac{3}{2}$`, correct: false, misconceptionId: "C01-M3", value: "(1, 3/2)" },
        { key: "C", text: t`$k = -1$, other root $-3$`, correct: false, misconceptionId: "C01-M4", value: "(-1, -3)" },
        { key: "D", text: t`$k = -7$, other root $\frac{3}{2}$`, correct: false, misconceptionId: "C01-M6", value: "(-7, 3/2)" },
      ],
      solution: {
        steps: [
          t`Put $x = 2$ in $2x^2 + kx = 6$: $8 + 2k = 6$, so $k = -1$.`,
          t`The equation is $2x^2 - x - 6 = 0$; $ac = -12$ splits as $-4$ and $3$.`,
          t`$2x^2 - 4x + 3x - 6$ $= 2x(x - 2) + 3(x - 2)$ $= (2x + 3)(x - 2)$.`,
          t`So the other root is $x = -\frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The roots of $(x - 3)^2 = 7$ are:`,
      verify: { kind: "value", inputs: { lhs: "(x - 3)**2", rhs: "7" }, params: { ask: "roots" } },
      options: [
        { key: "A", text: t`$-3 \pm \sqrt{7}$`, correct: false, misconceptionId: "C01-M3", value: "{-3 - sqrt(7), -3 + sqrt(7)}" },
        { key: "B", text: t`$3 + \sqrt{7}$ only`, correct: false, misconceptionId: "C01-M5", value: "{sqrt(7) + 3}" },
        { key: "C", text: t`$3 \pm \sqrt{7}$`, correct: true, value: "{3 - sqrt(7), sqrt(7) + 3}" },
        { key: "D", text: t`$10$ only`, correct: false, misconceptionId: "C01-M1", value: "{10}" },
      ],
      solution: {
        steps: [
          t`A number whose square is $7$ is $\sqrt{7}$ or $-\sqrt{7}$, so $x - 3 = \pm\sqrt{7}$.`,
          t`$x = 3 + \sqrt{7}$ or $x = 3 - \sqrt{7}$.`,
        ],
      },
    },
  ],
};
