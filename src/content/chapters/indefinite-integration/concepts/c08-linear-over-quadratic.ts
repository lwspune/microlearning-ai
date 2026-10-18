import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`$\int \frac{2x + 2}{x^2 + 2x + 3}\,dx$ $= \log|x^2 + 2x + 3| + c$, because the top is the derivative of the bottom. **What if the top is $2x + 7$ instead?**`,
    reveal: t`Split the top: $2x + 7 = (2x + 2) + 5$. The $2x + 2$ part still gives $\log|x^2 + 2x + 3|$. The $5$ is left over the quadratic, and $x^2 + 2x + 3 = (x + 1)^2 + 2$ is a standard form. So the answer is $\log|x^2 + 2x + 3|$ $+ \frac{5}{\sqrt{2}}\tan^{-1}\frac{x + 1}{\sqrt{2}} + c$.`,
  },
  explanation: {
    intuition: [
      t`Recall: a top that is the derivative of the bottom gives a log, $\int \frac{f'(x)}{f(x)}\,dx = \log|f(x)| + c$.`,
      t`For a quadratic $Q = ax^2 + bx + c$, the derivative $Q' = 2ax + b$ is linear.`,
      t`A linear top $px + q$ is rarely exactly $Q'$, but it is always a multiple of $Q'$ plus a constant.`,
      t`So split it: $px + q = A\,Q' + B$, where $A$ and $B$ are numbers.`,
      t`The $A\,Q'$ piece integrates at once: to a log over $Q$, to a root over $\sqrt{Q}$.`,
      t`The leftover $B$ over $Q$ or $\sqrt{Q}$ is a standard form, after completing the square.`,
    ],
    formal: [
      {
        title: "Finding A and B",
        points: [
          t`Let $Q = ax^2 + bx + c$; its derivative is $Q' = 2ax + b$.`,
          t`Write $px + q = A(2ax + b) + B$, where $A$ and $B$ are constants.`,
          t`Compare the $x$ terms: $2aA = p$, so $A = \frac{p}{2a}$.`,
          t`Compare the constants: $Ab + B = q$, so $B = q - Ab$, not just $q$.`,
          t`Example: $5x + 2 = A(2x + 2) + B$ gives $A = \frac{5}{2}$, $B = 2 - 5 = -3$.`,
          t`Check by expanding: $\frac{5}{2}(2x + 2) - 3 = 5x + 2$.`,
        ],
      },
      {
        title: "The quadratic as the denominator",
        points: [
          t`Split: $\int \frac{px + q}{Q}\,dx$ $= A\int \frac{Q'}{Q}\,dx + B\int \frac{dx}{Q}$.`,
          t`The first integral is $\log|Q|$, since its top is the derivative of its bottom.`,
          t`For the second, complete the square in $Q$ and use a standard form.`,
          t`$(x + h)^2 + k^2$ gives a $\tan^{-1}$; $(x + h)^2 - k^2$ gives the log of a ratio.`,
          t`Keep both parts: $B$ is $0$ only when $px + q$ is exactly a multiple of $Q'$.`,
        ],
      },
      {
        title: "The root as the denominator",
        points: [
          t`Split: $\int \frac{px + q}{\sqrt{Q}}\,dx$ $= A\int \frac{Q'}{\sqrt{Q}}\,dx + B\int \frac{dx}{\sqrt{Q}}$.`,
          t`Put $u = Q$, so $du = Q'\,dx$: the first integral becomes $\int u^{-1/2}\,du$.`,
          t`That is $2\sqrt{u} = 2\sqrt{Q}$: a root, not a log.`,
          t`Check: $\frac{d}{dx}\left(2\sqrt{Q}\right) = \frac{2Q'}{2\sqrt{Q}} = \frac{Q'}{\sqrt{Q}}$.`,
          t`For $\int \frac{dx}{\sqrt{Q}}$ with $a = 1$, $(x + h)^2 \pm k^2$ gives $\log\left|x + h + \sqrt{Q}\right|$.`,
          t`With $a = -1$, $k^2 - (x + h)^2$ gives $\sin^{-1}\frac{x + h}{k}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \dfrac{2x + 1}{x^2 + 4x - 5}\,dx$.`,
      steps: [
        t`$Q = x^2 + 4x - 5$ has $Q' = 2x + 4$. Write $2x + 1 = A(2x + 4) + B$.`,
        t`$x$ terms: $2A = 2$, so $A = 1$. Constants: $4A + B = 1$, so $B = -3$.`,
        t`$A$ part: $\int \frac{2x + 4}{x^2 + 4x - 5}\,dx$ $= \log|x^2 + 4x - 5|$.`,
        t`$B$ part: $Q = (x + 2)^2 - 3^2$, so $\int \frac{dx}{Q}$ $= \frac{1}{6}\log\left|\frac{x - 1}{x + 5}\right|$. Times $-3$, this is $-\frac{1}{2}\log\left|\frac{x - 1}{x + 5}\right|$.`,
      ],
      answer: t`$\log|x^2 + 4x - 5|$ $- \frac{1}{2}\log\left|\frac{x - 1}{x + 5}\right| + c$`,
    },
    visualSpec: t`Drag $p$ and $q$ to change the top $px + q$; the split $A\,Q' + B$ updates, with the $A$ part and the $B$ part in two colours and the integral each one gives.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Taking $B = q$: leaving the constant of the top as it stands`,
      remediation: t`$A\,Q'$ already has a constant term, $Ab$. Compare constants: $Ab + B = q$, so $B = q - Ab$.`,
      fallback: { kind: "ext", topic: "comparing coefficients" },
    },
    {
      id: "C08-M2",
      mistake: t`Taking the derivative of $ax^2 + bx + c$ as $ax + b$, so $A = \frac{p}{a}$`,
      remediation: t`The derivative of $ax^2 + bx + c$ is $2ax + b$. Comparing the $x$ terms gives $2aA = p$, so $A = \frac{p}{2a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Integrating $\frac{Q'}{\sqrt{Q}}$ like $\frac{Q'}{Q}$, to $\log|Q|$`,
      remediation: t`Only $\frac{Q'}{Q}$ gives a log. With $u = Q$, $\int \frac{Q'}{\sqrt{Q}}\,dx = \int u^{-1/2}\,du = 2\sqrt{Q}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C08-M4",
      mistake: t`Treating the whole top as a multiple of $Q'$ and dropping the $B$ part`,
      remediation: t`$px + q$ is a multiple of $Q'$ only when $B = 0$. Find $B$, and add $B$ times the standard integral of $\frac{1}{Q}$ or $\frac{1}{\sqrt{Q}}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C08-M5",
      mistake: t`Moving $Ab$ across with the wrong sign: $B = q + Ab$`,
      remediation: t`From $Ab + B = q$, subtract $Ab$ from both sides: $B = q - Ab$. Check by expanding $A\,Q' + B$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C08-M1 and C08-M5 give the key when $b = 0$ (no $x$ term in $Q$): draw a diagnosing item with $b \ne 0$.`,
    t`C08-M3 shows only on integrals over $\sqrt{Q}$, and C08-M4 only on items that ask for the integral.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(C) I (i)" },
      stem: t`To find $\int \dfrac{3x + 4}{x^2 + 6x + 5}\,dx$, write $3x + 4$ $= A\,\dfrac{d}{dx}(x^2 + 6x + 5) + B$. Then:`,
      verify: { kind: "value", inputs: { p: "3", q: "4", a: "1", b: "6", c: "5" }, params: { form: "frac", ask: "AB" } },
      options: [
        { key: "A", text: t`$A = \frac{3}{2},\ B = -5$`, correct: true, value: "(3/2, -5)" },
        { key: "B", text: t`$A = \frac{3}{2},\ B = 4$`, correct: false, misconceptionId: "C08-M1", value: "(3/2, 4)" },
        { key: "C", text: t`$A = 3,\ B = -14$`, correct: false, misconceptionId: "C08-M2", value: "(3, -14)" },
        { key: "D", text: t`$A = \frac{3}{2},\ B = 13$`, correct: false, misconceptionId: "C08-M5", value: "(3/2, 13)" },
      ],
      solution: {
        steps: [
          t`$\frac{d}{dx}(x^2 + 6x + 5) = 2x + 6$, so $3x + 4 = A(2x + 6) + B$.`,
          t`$x$ terms: $2A = 3$, so $A = \frac{3}{2}$.`,
          t`Constants: $6A + B = 4$, so $B = 4 - 9 = -5$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(C) I (v)" },
      stem: t`To find $\int \dfrac{7x + 3}{\sqrt{3 + 2x - x^2}}\,dx$, write $7x + 3$ $= A\,\dfrac{d}{dx}(3 + 2x - x^2) + B$. Then:`,
      verify: { kind: "value", inputs: { p: "7", q: "3", a: "-1", b: "2", c: "3" }, params: { form: "root", ask: "AB" } },
      options: [
        { key: "A", text: t`$A = - \frac{7}{2},\ B = 3$`, correct: false, misconceptionId: "C08-M1", value: "(-7/2, 3)" },
        { key: "B", text: t`$A = -7,\ B = 17$`, correct: false, misconceptionId: "C08-M2", value: "(-7, 17)" },
        { key: "C", text: t`$A = - \frac{7}{2},\ B = -4$`, correct: false, misconceptionId: "C08-M5", value: "(-7/2, -4)" },
        { key: "D", text: t`$A = - \frac{7}{2},\ B = 10$`, correct: true, value: "(-7/2, 10)" },
      ],
      solution: {
        steps: [
          t`$\frac{d}{dx}(3 + 2x - x^2) = 2 - 2x$, so $7x + 3 = A(2 - 2x) + B$.`,
          t`$x$ terms: $-2A = 7$, so $A = -\frac{7}{2}$.`,
          t`Constants: $2A + B = 3$, so $B = 3 + 7 = 10$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/3.2C SolvedEx.1" },
      stem: t`To find $\int \dfrac{2x - 3}{3x^2 + 4x + 5}\,dx$, write $2x - 3$ $= A\,\dfrac{d}{dx}(3x^2 + 4x + 5) + B$. Then:`,
      verify: { kind: "value", inputs: { p: "2", q: "-3", a: "3", b: "4", c: "5" }, params: { form: "frac", ask: "AB" } },
      options: [
        { key: "A", text: t`$A = \frac{1}{3},\ B = -3$`, correct: false, misconceptionId: "C08-M1", value: "(1/3, -3)" },
        { key: "B", text: t`$A = \frac{2}{3},\ B = - \frac{17}{3}$`, correct: false, misconceptionId: "C08-M2", value: "(2/3, -17/3)" },
        { key: "C", text: t`$A = \frac{1}{3},\ B = - \frac{5}{3}$`, correct: false, misconceptionId: "C08-M5", value: "(1/3, -5/3)" },
        { key: "D", text: t`$A = \frac{1}{3},\ B = - \frac{13}{3}$`, correct: true, value: "(1/3, -13/3)" },
      ],
      solution: {
        steps: [
          t`$\frac{d}{dx}(3x^2 + 4x + 5) = 6x + 4$, so $2x - 3 = A(6x + 4) + B$.`,
          t`$x$ terms: $6A = 2$, so $A = \frac{1}{3}$.`,
          t`Constants: $4A + B = -3$, so $B = -3 - \frac{4}{3} = -\frac{13}{3}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(C) I (ii)" },
      stem: t`With $Q = x^2 + 4x + 5$, $\int \dfrac{2x + 5}{Q}\,dx$ equals:`,
      verify: { kind: "value", inputs: { p: "2", q: "5", a: "1", b: "4", c: "5" }, params: { form: "frac", ask: "int" } },
      options: [
        { key: "A", text: t`$2\log|Q| - 3\tan^{-1}(x + 2) + c$`, correct: false, misconceptionId: "C08-M2", value: "2*log(Abs(x**2 + 4*x + 5)) - 3*atan(x + 2)" },
        { key: "B", text: t`$\log|Q| + c$`, correct: false, misconceptionId: "C08-M4", value: "log(Abs(x**2 + 4*x + 5))" },
        { key: "C", text: t`$\log|Q| + \tan^{-1}(x + 2) + c$`, correct: true, value: "log(Abs(x**2 + 4*x + 5)) + atan(x + 2)" },
        { key: "D", text: t`$\log|Q| + 5\tan^{-1}(x + 2) + c$`, correct: false, misconceptionId: "C08-M1", value: "log(Abs(x**2 + 4*x + 5)) + 5*atan(x + 2)" },
      ],
      solution: {
        steps: [
          t`$Q' = 2x + 4$, and $2x + 5 = (2x + 4) + 1$: $A = 1$, $B = 1$.`,
          t`$A$ part: $\int \frac{2x + 4}{Q}\,dx = \log|Q|$.`,
          t`$B$ part: $Q = (x + 2)^2 + 1$, so $\int \frac{dx}{Q} = \tan^{-1}(x + 2)$.`,
          t`Together: $\log|Q| + \tan^{-1}(x + 2) + c$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(C) I (v)" },
      stem: t`With $Q = 8 + 2x - x^2$ and $-2 < x < 4$, $\int \dfrac{x + 2}{\sqrt{Q}}\,dx$ equals:`,
      verify: { kind: "value", inputs: { p: "1", q: "2", a: "-1", b: "2", c: "8" }, params: { form: "root", ask: "int" } },
      options: [
        { key: "A", text: t`$-\sqrt{Q} + c$`, correct: false, misconceptionId: "C08-M4", value: "-sqrt(-x**2 + 2*x + 8)" },
        { key: "B", text: t`$-\sqrt{Q} + 3\sin^{-1}\dfrac{x - 1}{3} + c$`, correct: true, value: "-sqrt(-x**2 + 2*x + 8) + 3*asin(x/3 - 1/3)" },
        { key: "C", text: t`$-\sqrt{Q} + 2\sin^{-1}\dfrac{x - 1}{3} + c$`, correct: false, misconceptionId: "C08-M1", value: "-sqrt(-x**2 + 2*x + 8) + 2*asin(x/3 - 1/3)" },
        { key: "D", text: t`$-\frac{1}{2}\log|Q| + 3\sin^{-1}\dfrac{x - 1}{3} + c$`, correct: false, misconceptionId: "C08-M3", value: "-log(Abs(-x**2 + 2*x + 8))/2 + 3*asin(x/3 - 1/3)" },
      ],
      solution: {
        steps: [
          t`$Q' = 2 - 2x$. In $x + 2 = A(2 - 2x) + B$: $-2A = 1$, so $A = -\frac{1}{2}$; $2A + B = 2$, so $B = 3$.`,
          t`$A$ part: $\int \frac{Q'}{\sqrt{Q}}\,dx = 2\sqrt{Q}$, so it gives $-\frac{1}{2}\cdot 2\sqrt{Q} = -\sqrt{Q}$.`,
          t`$B$ part: $Q = 9 - (x - 1)^2$, so $\int \frac{dx}{\sqrt{Q}} = \sin^{-1}\frac{x - 1}{3}$.`,
          t`Together: $-\sqrt{Q} + 3\sin^{-1}\frac{x - 1}{3} + c$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(C) I (iv)" },
      stem: t`With $Q = x^2 + 2x + 5$, $\int \dfrac{x + 3}{\sqrt{Q}}\,dx$ equals:`,
      verify: { kind: "value", inputs: { p: "1", q: "3", a: "1", b: "2", c: "5" }, params: { form: "root", ask: "int" } },
      options: [
        { key: "A", text: t`$2\sqrt{Q} + \log\left|x + 1 + \sqrt{Q}\right| + c$`, correct: false, misconceptionId: "C08-M2", value: "2*sqrt(x**2 + 2*x + 5) + log(Abs(x + sqrt(x**2 + 2*x + 5) + 1))" },
        { key: "B", text: t`$\frac{1}{2}\log|Q| + 2\log\left|x + 1 + \sqrt{Q}\right| + c$`, correct: false, misconceptionId: "C08-M3", value: "2*log(Abs(x + sqrt(x**2 + 2*x + 5) + 1)) + log(Abs(x**2 + 2*x + 5))/2" },
        { key: "C", text: t`$\sqrt{Q} + 2\log\left|x + 1 + \sqrt{Q}\right| + c$`, correct: true, value: "sqrt(x**2 + 2*x + 5) + 2*log(Abs(x + sqrt(x**2 + 2*x + 5) + 1))" },
        { key: "D", text: t`$\sqrt{Q} + 3\log\left|x + 1 + \sqrt{Q}\right| + c$`, correct: false, misconceptionId: "C08-M1", value: "sqrt(x**2 + 2*x + 5) + 3*log(Abs(x + sqrt(x**2 + 2*x + 5) + 1))" },
      ],
      solution: {
        steps: [
          t`$Q' = 2x + 2$, and $x + 3 = \frac{1}{2}(2x + 2) + 2$: $A = \frac{1}{2}$, $B = 2$.`,
          t`$A$ part: $\frac{1}{2}\int \frac{Q'}{\sqrt{Q}}\,dx = \frac{1}{2}\cdot 2\sqrt{Q} = \sqrt{Q}$.`,
          t`$B$ part: $Q = (x + 1)^2 + 2^2$, so $\int \frac{dx}{\sqrt{Q}} = \log\left|x + 1 + \sqrt{Q}\right|$.`,
          t`Together: $\sqrt{Q} + 2\log\left|x + 1 + \sqrt{Q}\right| + c$.`,
        ],
      },
    },
  ],
};
