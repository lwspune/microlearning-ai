import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`$f$ doubles a number, then adds $3$, so $f(4) = 11$. **Is $f^{-1}(11)$ equal to $\frac{1}{11}$?**`,
    reveal: t`No. $f^{-1}$ runs $f$ backwards: it takes $11$ back to the input that gave it. Undo the last step first: $11 - 3 = 8$, then halve: $4$. So $f^{-1}(11) = 4$. The number $\frac{1}{11}$ is $\frac{1}{f(4)}$, a reciprocal, which is something else.`,
  },
  explanation: {
    intuition: [
      t`A function $f$ takes an input $x$ to an output $f(x)$; its **inverse**, $f^{-1}$, runs it backwards.`,
      t`If $f(4) = 11$, then $f^{-1}(11) = 4$: each output goes back to its input.`,
      t`$f(x) = 2x + 3$ doubles, then adds $3$; so $f^{-1}$ subtracts $3$, then halves.`,
      t`The undoing runs in reverse order, like taking off your shoes before your socks.`,
      t`The $-1$ in $f^{-1}$ is a label, not a power: $f^{-1}(x)$ is not $\frac{1}{f(x)}$.`,
      t`Going back only works when each output came from exactly one input.`,
    ],
    formal: [
      {
        title: "When an inverse exists",
        points: [
          t`$f : A \to B$ has an **inverse function** $f^{-1} : B \to A$ only when $f$ is one-one and onto.`,
          t`One-one: no two inputs share an output, so going back never has two answers.`,
          t`Onto: every element of $B$ is an output, so $f^{-1}$ has an input to return for each.`,
          t`$f(x) = x^2$ on $\mathrm{R}$ fails: $f(3) = f(-3) = 9$, so $f^{-1}(9)$ has no single value.`,
          t`When $f^{-1}$ exists, $f^{-1}(y) = x$ exactly when $f(x) = y$.`,
        ],
      },
      {
        title: "Finding the rule",
        points: [
          t`**Step 1.** Write $y = f(x)$; for example $y = 4x - 5$.`,
          t`**Step 2.** Solve for $x$: $4x = y + 5$, so $x = \frac{y + 5}{4}$.`,
          t`The $-5$ crossed the $=$ sign as $+5$: a term changes sign when it moves across.`,
          t`**Step 3.** This $x$ is $f^{-1}(y)$; rename $y$ as $x$: $f^{-1}(x) = \frac{x + 5}{4}$.`,
          t`For one value, solve $f(x) = c$ directly: $4x - 5 = 7$ gives $x = 3$, so $f^{-1}(7) = 3$.`,
        ],
      },
      {
        title: "Checking an inverse",
        points: [
          t`$f^{-1}$ undoes $f$, and $f$ undoes $f^{-1}$: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.`,
          t`Check: $f\left(\frac{x + 5}{4}\right) = (x + 5) - 5$ $= x$.`,
          t`Two functions $f$ and $g$ with $f(g(x)) = x$ and $g(f(x)) = x$ are **inverse functions** of each other.`,
          t`Not the reciprocal: $f^{-1}(x) = \frac{x + 5}{4}$, but $\frac{1}{f(x)} = \frac{1}{4x - 5}$.`,
          t`Not the same steps in order: $f$ multiplies by $4$, then subtracts $5$, so $f^{-1}$ adds $5$ first, then divides by $4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Does $f(x) = \frac{2x + 1}{x - 3}$, from $\mathrm{R} - \{3\}$ to $\mathrm{R} - \{2\}$, have an inverse? If so, find it.`,
      steps: [
        t`One-one: $f(x_1) = f(x_2)$ gives $(2x_1 + 1)(x_2 - 3)$ $= (2x_2 + 1)(x_1 - 3)$, which simplifies to $-7x_1 = -7x_2$, so $x_1 = x_2$.`,
        t`Write $y = \frac{2x + 1}{x - 3}$: then $y(x - 3) = 2x + 1$, so $xy - 2x = 3y + 1$.`,
        t`$x(y - 2) = 3y + 1$, so $x = \frac{3y + 1}{y - 2}$, an input for every $y \ne 2$: $f$ is onto.`,
        t`Rename $y$ as $x$: $f^{-1}(x) = \frac{3x + 1}{x - 2}$. Check: $f(4) = 9$ and $f^{-1}(9) = \frac{28}{7} = 4$.`,
      ],
      answer: t`Yes: $f$ is one-one and onto, and $f^{-1}(x) = \frac{3x + 1}{x - 2}$, $x \ne 2$.`,
    },
    visualSpec: t`Drag a point along the graph of $y = f(x)$ and watch its mirror image in the line $y = x$ trace the graph of $y = f^{-1}(x)$; for $y = x^2$ two points share a height and the mirror image fails the function test.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Reads the $-1$ in $f^{-1}$ as a power, taking $f^{-1}(x)$ to be $\frac{1}{f(x)}$`,
      remediation: t`The $-1$ in $f^{-1}$ names the inverse; it is not a power. $f^{-1}(c)$ is the input $x$ with $f(x) = c$, found by solving, not $\frac{1}{f(c)}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Forgets to invert: works out $f(c)$ for $f^{-1}(c)$, or gives $f$ as its own inverse`,
      remediation: t`$f^{-1}(c)$ asks which input gives the output $c$. Set $f(x) = c$ and solve for $x$, rather than putting $c$ into $f$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C11-M3",
      mistake: t`Undoes the steps of $f$ in the same order instead of the reverse order`,
      remediation: t`Undo the last step first. If $f$ multiplies by $a$ and then adds $b$, then $f^{-1}$ subtracts $b$ and then divides by $a$: $f^{-1}(x) = \frac{x - b}{a}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M4",
      mistake: t`Carries a term across the $=$ sign without changing its sign`,
      remediation: t`A term changes sign when it moves across the $=$ sign: $y = ax + b$ gives $ax = y - b$, so $x = \frac{y - b}{a}$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
    {
      id: "C11-M5",
      mistake: "Finds an inverse value for a function that is not one-one, keeping one of the inputs",
      remediation: t`Check one-one first. If two inputs share an output, as $3$ and $-3$ do for $x^2$, then $f^{-1}$ does not exist: it could not choose which input to return.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    t`C11-M3 applies only to a rule of the form $ax^n + b$, and C11-M4 only when the rule has a constant term; on other rules the engine must not tag them.`,
    "C11-M5 shows only on a function that is not one-one (C11-Q4); on a one-one function it gives the key.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.2 SolvedEx.7" },
      stem: t`$f$ is a one-one onto function with $f(x) = 9 - 5x$. Then $f^{-1}(-1)$ is:`,
      verify: { kind: "value", inputs: { a: "-1" }, params: { f: "9 - 5*x" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$14$`, correct: false, misconceptionId: "C11-M2", value: "14" },
        { key: "C", text: t`$- \frac{44}{5}$`, correct: false, misconceptionId: "C11-M3", value: "-44/5" },
        { key: "D", text: t`$- \frac{8}{5}$`, correct: false, misconceptionId: "C11-M4", value: "-8/5" },
      ],
      solution: {
        steps: [
          t`Let $f^{-1}(-1) = m$; then $f(m) = -1$.`,
          t`$9 - 5m = -1$, so $5m = 10$ and $m = 2$.`,
          t`Check: $f(2) = 9 - 10 = -1$. So $f^{-1}(-1) = 2$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc I Q7" },
      stem: t`$f(x) = \frac{2x + 1}{1 - 3x}$ maps $\mathrm{R} - \{\frac{1}{3}\}$ one-one onto $\mathrm{R} - \{-\frac{2}{3}\}$. Then $f^{-1}(x)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(2*x + 1)/(1 - 3*x)" } },
      options: [
        { key: "A", text: t`$\frac{2x + 1}{1 - 3x}$`, correct: false, misconceptionId: "C11-M2", value: "(-2*x - 1)/(3*x - 1)" },
        { key: "B", text: t`$\frac{x + 1}{2 - 3x}$`, correct: false, misconceptionId: "C11-M4", value: "(-x - 1)/(3*x - 2)" },
        { key: "C", text: t`$\frac{x - 1}{3x + 2}$`, correct: true, value: "(x - 1)/(3*x + 2)" },
        { key: "D", text: t`$\frac{1 - 3x}{2x + 1}$`, correct: false, misconceptionId: "C11-M1", value: "(1 - 3*x)/(2*x + 1)" },
      ],
      solution: {
        steps: [
          t`Write $y = \frac{2x + 1}{1 - 3x}$: then $y(1 - 3x) = 2x + 1$.`,
          t`$y - 3xy = 2x + 1$, so $y - 1 = 2x + 3xy$ $= x(3y + 2)$.`,
          t`$x = \frac{y - 1}{3y + 2}$; rename $y$ as $x$: $f^{-1}(x) = \frac{x - 1}{3x + 2}$.`,
          t`Check: $f(0) = 1$ and $f^{-1}(1) = \frac{0}{5} = 0$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc II Q4" },
      stem: t`$f : \mathrm{R} \to \mathrm{R}$, $f(x) = 5x^3 - 8$, is one-one and onto. Then $f^{-1}(x)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { f: "5*x**3 - 8" } },
      options: [
        { key: "A", text: t`$\frac{1}{5x^3 - 8}$`, correct: false, misconceptionId: "C11-M1", value: "1/(5*x**3 - 8)" },
        { key: "B", text: t`$\frac{\sqrt[3]{x}}{5} + 8$`, correct: false, misconceptionId: "C11-M3", value: "x**(1/3)/5 + 8" },
        { key: "C", text: t`$\sqrt[3]{\frac{x - 8}{5}}$`, correct: false, misconceptionId: "C11-M4", value: "5**(2/3)*(x - 8)**(1/3)/5" },
        { key: "D", text: t`$\sqrt[3]{\frac{x + 8}{5}}$`, correct: true, value: "5**(2/3)*(x + 8)**(1/3)/5" },
      ],
      solution: {
        steps: [
          t`Write $y = 5x^3 - 8$; carry $-8$ across as $+8$: $5x^3 = y + 8$.`,
          t`$x^3 = \frac{y + 8}{5}$, so $x = \sqrt[3]{\frac{y + 8}{5}}$.`,
          t`Rename $y$ as $x$: $f^{-1}(x) = \sqrt[3]{\frac{x + 8}{5}}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.2 Q5(a)" },
      stem: t`$f : \mathrm{R} \to \mathrm{R}$ is given by $f(x) = 5x^2$. What can you say about $f^{-1}(20)$?`,
      verify: { kind: "value", inputs: { a: "20" }, params: { f: "5*x**2" } },
      options: [
        { key: "A", text: t`$f^{-1}(20) = 2000$`, correct: false, misconceptionId: "C11-M2", value: "2000" },
        { key: "B", text: t`$f^{-1}(20) = 2$`, correct: false, misconceptionId: "C11-M5", value: "2" },
        { key: "C", text: t`$f^{-1}$ does not exist`, correct: true, value: "no_inverse" },
        { key: "D", text: t`$f^{-1}(20) = \frac{1}{2000}$`, correct: false, misconceptionId: "C11-M1", value: "1/2000" },
      ],
      solution: {
        steps: [
          t`Solve $f(x) = 20$: $5x^2 = 20$ gives $x^2 = 4$, so $x = 2$ or $x = -2$.`,
          t`Two inputs share the output $20$: $f(2) = f(-2) = 20$, so $f$ is not one-one.`,
          t`So $f$ has no inverse function, and $f^{-1}(20)$ does not exist.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc II Q5" },
      stem: t`$f : \mathrm{R} \to \mathrm{R}$, $f(x) = \frac{3x}{5} + 2$, is one-one and onto. Then $f^{-1}(x)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { f: "3*x/5 + 2" } },
      options: [
        { key: "A", text: t`$\frac{5}{3x + 10}$`, correct: false, misconceptionId: "C11-M1", value: "5/(3*x + 10)" },
        { key: "B", text: t`$\frac{5x}{3} - 2$`, correct: false, misconceptionId: "C11-M3", value: "5*x/3 - 2" },
        { key: "C", text: t`$\frac{5(x + 2)}{3}$`, correct: false, misconceptionId: "C11-M4", value: "5*x/3 + 10/3" },
        { key: "D", text: t`$\frac{5(x - 2)}{3}$`, correct: true, value: "5*x/3 - 10/3" },
      ],
      solution: {
        steps: [
          t`Write $y = \frac{3x}{5} + 2$; carry $2$ across as $-2$: $\frac{3x}{5} = y - 2$.`,
          t`Multiply both sides by $\frac{5}{3}$: $x = \frac{5(y - 2)}{3}$.`,
          t`Rename $y$ as $x$: $f^{-1}(x) = \frac{5(x - 2)}{3}$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.2 Q5(c)" },
      stem: t`$f : \mathrm{R} \to \mathrm{R}$, $f(x) = \frac{6x - 7}{3}$, is one-one and onto. Then $f^{-1}(3)$ is:`,
      verify: { kind: "value", inputs: { a: "3" }, params: { f: "(6*x - 7)/3" } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C11-M4", value: "1/3" },
        { key: "B", text: t`$\frac{8}{3}$`, correct: true, value: "8/3" },
        { key: "C", text: t`$\frac{3}{11}$`, correct: false, misconceptionId: "C11-M1", value: "3/11" },
        { key: "D", text: t`$\frac{11}{3}$`, correct: false, misconceptionId: "C11-M2", value: "11/3" },
      ],
      solution: {
        steps: [
          t`$f^{-1}(3)$ is the $x$ with $f(x) = 3$: $\frac{6x - 7}{3} = 3$.`,
          t`$6x - 7 = 9$, so $6x = 16$ and $x = \frac{8}{3}$.`,
          t`Check: $f\left(\frac{8}{3}\right) = \frac{16 - 7}{3} = 3$. So $f^{-1}(3) = \frac{8}{3}$.`,
        ],
      },
    },
  ],
};
