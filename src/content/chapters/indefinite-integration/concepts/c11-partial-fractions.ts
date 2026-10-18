import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`You can integrate $\frac{1}{x - 1}$ and $\frac{1}{x + 2}$. **Can you find $\int \frac{3}{(x - 1)(x + 2)}\,dx$?**`,
    reveal: t`Split it: $\frac{3}{(x - 1)(x + 2)} = \frac{1}{x - 1} - \frac{1}{x + 2}$. Check by adding: the top is $(x + 2) - (x - 1) = 3$. So the integral is $\log|x - 1| - \log|x + 2| + c$.`,
  },
  explanation: {
    intuition: [
      t`A **rational function** is a fraction $\frac{N(x)}{D(x)}$ whose top and bottom are polynomials.`,
      t`Adding fractions is easy: $\frac{1}{x} + \frac{1}{x + 1} = \frac{2x + 1}{x(x + 1)}$.`,
      t`**Partial fractions** run this backwards: they split one fraction into simple pieces.`,
      t`Each piece has one factor of the bottom as its own bottom.`,
      t`Each simple piece integrates at once: to a log, or by the power rule.`,
      t`So: factorise the bottom, split the fraction, then integrate piece by piece.`,
    ],
    formal: [
      {
        title: "Proper fractions first",
        points: [
          t`A fraction is **proper** when the degree of its top is less than the degree of its bottom.`,
          t`Partial fractions work only for proper fractions.`,
          t`If it is **improper**, divide first: $\frac{N}{D} = Q + \frac{R}{D}$, with quotient $Q$ and remainder $R$.`,
          t`Example: $\frac{x^2 + x - 1}{x^2 + x - 6}$ $= 1 + \frac{5}{x^2 + x - 6}$.`,
          t`Integrate $Q$ as a polynomial, and split only $\frac{R}{D}$.`,
        ],
      },
      {
        title: "Distinct linear factors",
        points: [
          t`Factorise the bottom fully, keeping its leading coefficient: $2x^2 + x - 1 = (2x - 1)(x + 1)$.`,
          t`Each linear factor $px + q$ gets a piece $\frac{A}{px + q}$, with $A$ a constant.`,
          t`Example: $\frac{x + 5}{(x - 1)(x + 2)}$ $= \frac{A}{x - 1} + \frac{B}{x + 2}$.`,
          t`Clear the fractions: $x + 5 = A(x + 2) + B(x - 1)$.`,
          t`Put $x = 1$, the **root** of $x - 1$ (the value that makes it zero): $6 = 3A$, so $A = 2$.`,
          t`Put $x = -2$, the root of $x + 2$: $3 = -3B$, so $B = -1$.`,
        ],
      },
      {
        title: "Integrating each piece",
        points: [
          t`With $u = px + q$, $du = p\,dx$: $\int \frac{dx}{px + q} = \frac{1}{p}\log|px + q| + c$.`,
          t`So $\int \frac{dx}{3x + 1} = \frac{1}{3}\log|3x + 1| + c$, not $\log|3x + 1|$.`,
          t`Watch $p = -1$: $\int \frac{dx}{1 - x} = -\log|1 - x| + c$.`,
          t`The example above: $\int \frac{x + 5}{(x - 1)(x + 2)}\,dx$ $= 2\log|x - 1| - \log|x + 2| + c$.`,
          t`Check by differentiating: $\frac{2}{x - 1} - \frac{1}{x + 2}$ adds back to the integrand.`,
        ],
      },
      {
        title: "Repeated factors",
        points: [
          t`A **repeated factor** appears more than once in the bottom, like $(x - 1)^2$.`,
          t`It needs one piece for each power: $\frac{A}{x - 1} + \frac{B}{(x - 1)^2}$.`,
          t`Example: $\frac{x + 3}{(x - 1)^2(x + 1)}$ $= \frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 1}$.`,
          t`Clear fractions and put $x = 1$, then $x = -1$: $B = 2$ and $C = \frac{1}{2}$.`,
          t`No root is left for $A$: compare the $x^2$ terms, $0 = A + C$, so $A = -\frac{1}{2}$.`,
          t`The squared piece is not a log: $\int \frac{2}{(x - 1)^2}\,dx = -\frac{2}{x - 1} + c$.`,
        ],
      },
      {
        title: "Quadratic factors",
        points: [
          t`A quadratic with no real roots, like $x^2 + x + 1$, has no linear factors.`,
          t`Its piece needs a linear top: $\frac{Bx + C}{x^2 + x + 1}$, not just a constant.`,
          t`Example: $\frac{1}{x^3 - 1} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + x + 1}$.`,
          t`Integrate $\frac{Bx + C}{x^2 + x + 1}$ like any linear top over a quadratic.`,
          t`If $x$ appears only as $x^2$, put $t = x^2$ just to split: $\frac{x^2}{(x^2 + 1)(x^2 + 4)} = \frac{t}{(t + 1)(t + 4)}$.`,
          t`That splits as $-\frac{1}{3(t + 1)} + \frac{4}{3(t + 4)}$; then put back $t = x^2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \dfrac{12x^2 - 2x - 9}{(4x^2 - 1)(x + 3)}\,dx$.`,
      steps: [
        t`$4x^2 - 1 = (2x - 1)(2x + 1)$. The top has degree 2, the bottom degree 3: proper. Write $\frac{A}{2x - 1} + \frac{B}{2x + 1} + \frac{C}{x + 3}$.`,
        t`Clear fractions: $12x^2 - 2x - 9$ $= A(2x + 1)(x + 3)$ $+ B(2x - 1)(x + 3)$ $+ C(2x - 1)(2x + 1)$.`,
        t`$x = \frac{1}{2}$: $-7 = 7A$, so $A = -1$. $x = -\frac{1}{2}$: $-5 = -5B$, so $B = 1$. $x = -3$: $105 = 35C$, so $C = 3$.`,
        t`Integrate, dividing by each $x$ coefficient: $-\frac{1}{2}\log|2x - 1|$ $+ \frac{1}{2}\log|2x + 1|$ $+ 3\log|x + 3| + c$.`,
      ],
      answer: t`$-\frac{1}{2}\log|2x - 1| + \frac{1}{2}\log|2x + 1|$ $+ 3\log|x + 3| + c$`,
    },
    visualSpec: t`Drag the constants $A$ and $B$; the curves of $\frac{A}{x - 1}$, $\frac{B}{x + 2}$ and their sum update, and the sum snaps onto the given fraction's curve when both are right.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Splitting an improper fraction straight into partial fractions, so the polynomial part of the answer is lost",
      remediation: t`Partial fractions need a proper fraction: top degree below bottom degree. Divide first, $\frac{N}{D} = Q + \frac{R}{D}$, and integrate $Q$ too.`,
      fallback: { kind: "ext", topic: "polynomial division" },
    },
    {
      id: "C11-M2",
      mistake: t`Integrating $\frac{A}{px + q}$ to $A\log|px + q|$, missing the factor $\frac{1}{p}$`,
      remediation: t`Put $u = px + q$, so $dx = \frac{du}{p}$: $\int \frac{A}{px + q}\,dx = \frac{A}{p}\log|px + q| + c$. For $1 - x$, $p = -1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C11-M3",
      mistake: t`Integrating the repeated-factor piece $\frac{B}{(x + a)^2}$ to a log, like $\frac{B}{x + a}$`,
      remediation: t`Only a first power gives a log. By the power rule, $\int \frac{dx}{(x + a)^2} = -\frac{1}{x + a} + c$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M4",
      mistake: t`Finding the constant over $x + a$ by putting $x = a$ instead of $x = -a$: the root's sign flipped`,
      remediation: t`The constant over a factor comes from putting $x$ equal to its root, the value that makes it zero: for $x + 3$, $x = -3$; for $3x - 7$, $x = \frac{7}{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: t`Writing only $\frac{B}{(x + a)^2}$ for a repeated factor $(x + a)^2$, leaving out $\frac{A}{x + a}$`,
      remediation: t`A repeated factor $(x + a)^2$ needs both pieces, $\frac{A}{x + a} + \frac{B}{(x + a)^2}$. Find $A$ by comparing coefficients.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: t`Dropping the leading coefficient when factorising the bottom, e.g. $3x^2 - 2x - 1$ as $(x - 1)(x + \frac{1}{3})$`,
      remediation: t`Keep the leading coefficient: $3x^2 - 2x - 1 = (x - 1)(3x + 1)$ and $4 - 3x - x^2 = (4 + x)(1 - x)$. Check by expanding.`,
      fallback: { kind: "ext", topic: "factorising quadratics" },
    },
  ],
  engineNotes: [
    "C11-M1 shows only on improper fractions, and C11-M3 and C11-M5 only on repeated factors.",
    t`C11-M2 gives the key when every factor is $x + q$; C11-M6 gives it when the bottom's leading coefficient is 1.`,
    t`C11-M4 gives the key for a piece whose root is 0, and does not apply when two roots are opposite, as in $x^2 - 1$.`,
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.4 I (iii)" },
      stem: t`If $\int \dfrac{12x + 3}{6x^2 + 13x - 63}\,dx$ $= \alpha\log|3x - 7|$ $+ \beta\log|2x + 9| + c$, then:`,
      verify: { kind: "value", inputs: { N: "12*x + 3", D: "6*x**2 + 13*x - 63" }, params: { fac: "(3*x - 7)*(2*x + 9)", ask: "logs", roots: "7/3,-9/2" } },
      options: [
        { key: "A", text: t`$\alpha = \frac{31}{41},\ \beta = \frac{51}{41}$`, correct: true, value: "(31/41, 51/41)" },
        { key: "B", text: t`$\alpha = \frac{93}{41},\ \beta = \frac{102}{41}$`, correct: false, misconceptionId: "C11-M2", value: "(93/41, 102/41)" },
        { key: "C", text: t`$\alpha = - \frac{25}{13},\ \beta = \frac{57}{13}$`, correct: false, misconceptionId: "C11-M4", value: "(-25/13, 57/13)" },
        { key: "D", text: t`$\alpha = \frac{186}{41},\ \beta = \frac{306}{41}$`, correct: false, misconceptionId: "C11-M6", value: "(186/41, 306/41)" },
      ],
      solution: {
        steps: [
          t`$6x^2 + 13x - 63 = (3x - 7)(2x + 9)$. Write $12x + 3 = A(2x + 9) + B(3x - 7)$.`,
          t`$x = \frac{7}{3}$: $31 = \frac{41}{3}A$, so $A = \frac{93}{41}$. $x = -\frac{9}{2}$: $-51 = -\frac{41}{2}B$, so $B = \frac{102}{41}$.`,
          t`$\int \frac{A}{3x - 7}\,dx = \frac{A}{3}\log|3x - 7|$, so $\alpha = \frac{31}{41}$. Likewise $\beta = \frac{B}{2} = \frac{51}{41}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.4 I (vi)" },
      stem: t`Find $\int \dfrac{6x^3 + 5x^2 - 7}{3x^2 - 2x - 1}\,dx$.`,
      verify: { kind: "value", inputs: { N: "6*x**3 + 5*x**2 - 7", D: "3*x**2 - 2*x - 1" }, params: { fac: "(x - 1)*(3*x + 1)", ask: "int" } },
      options: [
        { key: "A", text: t`$x^2 + 3x + \log|x - 1|$ $+ 5\log|3x + 1| + c$`, correct: false, misconceptionId: "C11-M2", value: "x**2 + 3*x + log(Abs(x - 1)) + 5*log(Abs(3*x + 1))" },
        { key: "B", text: t`$x^2 + 3x + 3\log|x - 1|$ $+ 5\log|3x + 1| + c$`, correct: false, misconceptionId: "C11-M6", value: "x**2 + 3*x + 3*log(Abs(x - 1)) + 5*log(Abs(3*x + 1))" },
        { key: "C", text: t`$x^2 + 3x + \log|x - 1|$ $+ \frac{5}{3}\log|3x + 1| + c$`, correct: true, value: "x**2 + 3*x + log(Abs(x - 1)) + 5*log(Abs(3*x + 1))/3" },
        { key: "D", text: t`$\log|x - 1| + \frac{5}{3}\log|3x + 1| + c$`, correct: false, misconceptionId: "C11-M1", value: "log(Abs(x - 1)) + 5*log(Abs(3*x + 1))/3" },
      ],
      solution: {
        steps: [
          t`Improper, so divide: $6x^3 + 5x^2 - 7$ $= (2x + 3)(3x^2 - 2x - 1) + 8x - 4$.`,
          t`$\frac{8x - 4}{(x - 1)(3x + 1)} = \frac{A}{x - 1} + \frac{B}{3x + 1}$. $x = 1$: $4 = 4A$, $A = 1$. $x = -\frac{1}{3}$: $-\frac{20}{3} = -\frac{4}{3}B$, $B = 5$.`,
          t`Integrate: $x^2 + 3x + \log|x - 1|$ $+ \frac{5}{3}\log|3x + 1| + c$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.4 I (xiii)" },
      stem: t`Find $\int \dfrac{3x - 2}{(x + 1)^2(x + 3)}\,dx$.`,
      verify: { kind: "value", inputs: { N: "3*x - 2", D: "(x + 1)**2*(x + 3)" }, params: { fac: "(x + 1)**2*(x + 3)", ask: "int" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}\log|x + 1| - \frac{11}{4}\log|x + 3| + c$`, correct: false, misconceptionId: "C11-M3", value: "log(Abs(x + 1))/4 - 11*log(Abs(x + 3))/4" },
        { key: "B", text: t`$-\frac{7}{16}\log|x + 1| + \frac{7}{16}\log|x + 3|$ $- \frac{1}{4(x + 1)} + c$`, correct: false, misconceptionId: "C11-M4", value: "(7*(x + 1)*(-log(Abs(x + 1)) + log(Abs(x + 3))) - 4)/(16*(x + 1))" },
        { key: "C", text: t`$-\frac{11}{4}\log|x + 3| + \frac{5}{2(x + 1)} + c$`, correct: false, misconceptionId: "C11-M5", value: "(-11*(x + 1)*log(Abs(x + 3)) + 10)/(4*(x + 1))" },
        { key: "D", text: t`$\frac{11}{4}\log|x + 1| - \frac{11}{4}\log|x + 3|$ $+ \frac{5}{2(x + 1)} + c$`, correct: true, value: "(11*(x + 1)*(log(Abs(x + 1)) - log(Abs(x + 3))) + 10)/(4*(x + 1))" },
      ],
      solution: {
        steps: [
          t`Write $3x - 2 = A(x + 1)(x + 3)$ $+ B(x + 3) + C(x + 1)^2$, with $B$ over $(x + 1)^2$.`,
          t`$x = -1$: $-5 = 2B$, $B = -\frac{5}{2}$. $x = -3$: $-11 = 4C$, $C = -\frac{11}{4}$. $x^2$ terms: $0 = A + C$, $A = \frac{11}{4}$.`,
          t`$\int \frac{B}{(x + 1)^2}\,dx = -\frac{B}{x + 1} = \frac{5}{2(x + 1)}$.`,
          t`So the integral is $\frac{11}{4}\log|x + 1| - \frac{11}{4}\log|x + 3|$ $+ \frac{5}{2(x + 1)} + c$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.4 I (xiv)" },
      stem: t`Find $\int \dfrac{5x^2 + 20x + 6}{x^3 + 2x^2 + x}\,dx$.`,
      verify: { kind: "value", inputs: { N: "5*x**2 + 20*x + 6", D: "x**3 + 2*x**2 + x" }, params: { fac: "x*(x + 1)**2", ask: "int" } },
      options: [
        { key: "A", text: t`$6\log|x| - \log|x + 1|$ $- \frac{31}{x + 1} + c$`, correct: false, misconceptionId: "C11-M4", value: "((x + 1)*(6*log(Abs(x)) - log(Abs(x + 1))) - 31)/(x + 1)" },
        { key: "B", text: t`$6\log|x| - \frac{9}{x + 1} + c$`, correct: false, misconceptionId: "C11-M5", value: "3*(2*(x + 1)*log(Abs(x)) - 3)/(x + 1)" },
        { key: "C", text: t`$6\log|x| - \log|x + 1|$ $- \frac{9}{x + 1} + c$`, correct: true, value: "((x + 1)*(6*log(Abs(x)) - log(Abs(x + 1))) - 9)/(x + 1)" },
        { key: "D", text: t`$6\log|x| + 8\log|x + 1| + c$`, correct: false, misconceptionId: "C11-M3", value: "6*log(Abs(x)) + 8*log(Abs(x + 1))" },
      ],
      solution: {
        steps: [
          t`$x^3 + 2x^2 + x = x(x + 1)^2$. Write $5x^2 + 20x + 6$ $= A(x + 1)^2 + Bx(x + 1) + Cx$.`,
          t`$x = 0$: $A = 6$. $x = -1$: $-9 = -C$, $C = 9$. $x^2$ terms: $5 = A + B$, $B = -1$.`,
          t`$\int \frac{9}{(x + 1)^2}\,dx = -\frac{9}{x + 1}$, so the integral is $6\log|x| - \log|x + 1|$ $- \frac{9}{x + 1} + c$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.4 I (iv)" },
      stem: t`If $\int \dfrac{2x}{4 - 3x - x^2}\,dx$ $= \alpha\log|x + 4|$ $+ \beta\log|1 - x| + c$, then:`,
      verify: { kind: "value", inputs: { N: "2*x", D: "4 - 3*x - x**2" }, params: { fac: "(4 + x)*(1 - x)", ask: "logs", roots: "-4,1" } },
      options: [
        { key: "A", text: t`$\alpha = - \frac{8}{5},\ \beta = \frac{2}{5}$`, correct: false, misconceptionId: "C11-M2", value: "(-8/5, 2/5)" },
        { key: "B", text: t`$\alpha = - \frac{8}{3},\ \beta = \frac{2}{3}$`, correct: false, misconceptionId: "C11-M4", value: "(-8/3, 2/3)" },
        { key: "C", text: t`$\alpha = \frac{8}{5},\ \beta = \frac{2}{5}$`, correct: false, misconceptionId: "C11-M6", value: "(8/5, 2/5)" },
        { key: "D", text: t`$\alpha = - \frac{8}{5},\ \beta = - \frac{2}{5}$`, correct: true, value: "(-8/5, -2/5)" },
      ],
      solution: {
        steps: [
          t`$4 - 3x - x^2 = (4 + x)(1 - x)$. Write $2x = A(1 - x) + B(4 + x)$.`,
          t`$x = -4$: $-8 = 5A$, $A = -\frac{8}{5}$. $x = 1$: $2 = 5B$, $B = \frac{2}{5}$.`,
          t`$\int \frac{B}{1 - x}\,dx = -B\log|1 - x|$, so $\alpha = -\frac{8}{5}$ and $\beta = -\frac{2}{5}$.`,
        ],
      },
    },
  ],
};
