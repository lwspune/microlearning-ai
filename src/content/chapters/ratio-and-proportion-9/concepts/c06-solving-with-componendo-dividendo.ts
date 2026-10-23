import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Solve $\frac{\sqrt{x} + 1}{\sqrt{x} - 1} = 3$. Cross-multiplying gives a tangle of roots. Is there a quicker way?`,
    reveal: t`Yes. Componendo-dividendo gives $\frac{\sqrt{x}}{1} = \frac{3 + 1}{3 - 1} = 2$ at once. So $\sqrt{x} = 2$ and $x = 4$. Check: $\frac{2 + 1}{2 - 1} = 3$.`,
  },
  explanation: {
    intuition: [
      t`Some equations have a sum on top and a difference below, of the same two terms.`,
      t`**Componendo-dividendo** turns $\frac{a + b}{a - b}$ back into $\frac{a}{b}$.`,
      t`On the other side, $\frac{m}{n}$ becomes $\frac{m + n}{m - n}$: add on top, subtract below.`,
      t`The new equation $\frac{a}{b} = \frac{m + n}{m - n}$ is much easier to solve.`,
      t`If $a$ and $b$ are square roots or cubes, undo them next.`,
      t`Always check the answer in the given equation.`,
    ],
    formal: [
      {
        title: "The rule, read backwards",
        points: [
          t`From C05: if $\frac{a}{b} = \frac{c}{d}$, then $\frac{a + b}{a - b} = \frac{c + d}{c - d}$.`,
          t`It also works backwards. Start from $\frac{a + b}{a - b} = \frac{m}{n}$.`,
          t`Apply componendo-dividendo to both sides once more.`,
          t`On the left, the top is $(a + b) + (a - b) = 2a$.`,
          t`The bottom is $(a + b) - (a - b) = 2b$, and $\frac{2a}{2b} = \frac{a}{b}$.`,
          t`So $\frac{a}{b} = \frac{m + n}{m - n}$.`,
        ],
      },
      {
        title: "Solving step by step",
        points: [
          t`Example: solve $\frac{2x + 3}{2x - 3} = \frac{7}{5}$.`,
          t`The top is a sum and the bottom a difference of $2x$ and $3$.`,
          t`Componendo-dividendo: $\frac{2x}{3} = \frac{7 + 5}{7 - 5}$ $= \frac{12}{2} = 6$.`,
          t`So $2x = 18$ and $x = 9$.`,
          t`Check: $\frac{18 + 3}{18 - 3} = \frac{21}{15} = \frac{7}{5}$.`,
        ],
      },
      {
        title: "Undo the root or power",
        points: [
          t`Often $a$ and $b$ are roots or powers, like $\sqrt{x + 7}$ or $(3x - 4)^3$.`,
          t`Componendo-dividendo gives the ratio of these roots or powers, not of what is inside.`,
          t`Square both sides to remove square roots.`,
          t`Example: $\frac{\sqrt{p}}{\sqrt{q}} = \frac{3}{2}$ gives $\frac{p}{q} = \frac{9}{4}$.`,
          t`Take cube roots to remove cubes: $\frac{p^3}{q^3} = \frac{27}{8}$ gives $\frac{p}{q} = \frac{3}{2}$.`,
          t`Then cross-multiply and solve the simple equation.`,
        ],
      },
      {
        title: "When the minus is on top",
        points: [
          t`Suppose the equation is $\frac{a - b}{a + b} = \frac{m}{n}$.`,
          t`First use **invertendo** (flip both sides): $\frac{a + b}{a - b} = \frac{n}{m}$.`,
          t`Now componendo-dividendo gives $\frac{a}{b} = \frac{n + m}{n - m}$.`,
          t`Example: $\frac{a - b}{a + b} = \frac{1}{3}$ gives $\frac{a}{b} = \frac{3 + 1}{3 - 1} = 2$.`,
          t`Keep the order: $n - m$, not $m - n$. The wrong order flips the sign.`,
        ],
      },
      {
        title: "Equal tops: do not lose zero",
        points: [
          t`**Dividendo** (from C05): $\frac{a}{b} = \frac{c}{d}$ gives $\frac{a - b}{b} = \frac{c - d}{d}$.`,
          t`It can leave the same top on both sides: $\frac{x^2}{x + 5} = \frac{x^2}{2x + 1}$.`,
          t`Case 1: $x = 0$ makes both sides $0$. So $x = 0$ is a solution.`,
          t`Case 2: if $x \neq 0$, divide by $x^2$: $x + 5 = 2x + 1$, so $x = 4$.`,
          t`Both are solutions. Cancelling $x^2$ at the start loses $x = 0$.`,
          t`Sometimes multiply both sides by a number first, so that the tops match after dividendo.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve. $$\dfrac{\sqrt{x + 7} + \sqrt{x - 2}}{\sqrt{x + 7} - \sqrt{x - 2}} = \dfrac{5}{1}$$`,
      steps: [
        t`The top is a sum and the bottom a difference of $\sqrt{x + 7}$ and $\sqrt{x - 2}$.`,
        t`Componendo-dividendo: $\frac{2\sqrt{x + 7}}{2\sqrt{x - 2}}$ $= \frac{5 + 1}{5 - 1} = \frac{6}{4}$.`,
        t`So $\frac{\sqrt{x + 7}}{\sqrt{x - 2}} = \frac{3}{2}$. Square both sides: $\frac{x + 7}{x - 2} = \frac{9}{4}$.`,
        t`Cross-multiply: $4x + 28 = 9x - 18$, so $46 = 5x$.`,
        t`$x = \frac{46}{5}$. Check: $x + 7 = \frac{81}{5}$ and $x - 2 = \frac{36}{5}$, whose roots are in the ratio $9 : 6 = 3 : 2$.`,
      ],
      answer: t`$x = \frac{46}{5}$`,
    },
    visualSpec: t`A balance shows a/b on one pan and m/n on the other; pressing componendo-dividendo turns both pans at once, so the student sees why one side alone breaks the balance.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Turns the result upside down: writes a/b = (m - n)/(m + n)",
      remediation: t`Componendo-dividendo keeps the sum on top: $\frac{a + b}{a - b} = \frac{m}{n}$ gives $\frac{a}{b} = \frac{m + n}{m - n}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: "Forgets to undo the root or power: from sqrt(4x + 1)/sqrt(x + 3) = 5/3 writes (4x + 1)/(x + 3) = 5/3",
      remediation: "Componendo-dividendo gives the ratio of the roots (or cubes). Square both sides, or take cube roots, before you cross-multiply.",
      fallback: { kind: "ext", topic: "squares, cubes and their roots (Std VIII)" },
    },
    {
      id: "C06-M3",
      mistake: "Applies componendo-dividendo to the left side only, keeping m/n on the right",
      remediation: t`A rule must change both sides of an equation. When the left becomes $\frac{a}{b}$, the right becomes $\frac{m + n}{m - n}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Subtracts the wrong way round (n - m for m - n), or ignores which sign is on top",
      remediation: t`Watch the order of subtraction: $m - n$ and $n - m$ differ in sign. With the minus on top, use invertendo first. Check your answer in the given equation.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Cancels x^2 from both sides and loses the solution x = 0",
      remediation: t`Dividing by $x^2$ is allowed only when $x \neq 0$. First note that $x = 0$ makes both sides $0$, then cancel and solve for the other value.`,
      fallback: { kind: "ext", topic: "the zero-product rule: if pq = 0, then p = 0 or q = 0 (Std VIII)" },
    },
    {
      id: "C06-M6",
      mistake: "Stops at x = 0 and misses the case where the denominators are equal",
      remediation: t`$x = 0$ is one solution. For $x \neq 0$, divide by $x^2$: the denominators must then be equal, which gives a second solution.`,
      fallback: { kind: "ext", topic: "the zero-product rule: if pq = 0, then p = 0 or q = 0 (Std VIII)" },
    },
  ],
  engineNotes: [
    "C06-M4 gives the key's x on a square-root item (squaring hides the sign), so it is drawn only on cube, ratio and equal-top items. C06-M3 needs m/n to be a perfect power, so it appears on square-root and ratio items. C06-M2 applies only when the item asks for x.",
    "The book keeps only the positive square root: Ex 4.3 Q4(iii) also has x = 1/8 and Q4(v) also has x = -21/34, and Q4(i) also has x = 0. Q4(iii) is asked at the ratio stage here; Q4(i) and Q4(v) are not used as items.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q4(iv)" },
      stem: t`Solve the equation. $$\dfrac{\sqrt{4x + 1} + \sqrt{x + 3}}{\sqrt{4x + 1} - \sqrt{x + 3}} = \dfrac{4}{1}$$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cd", U: "4*x + 1", V: "x + 3", k: "1/2", top: "+", m: "4", n: "1", ask: "x" } },
      options: [
        { key: "A", text: t`$\frac{2}{91}$`, correct: false, misconceptionId: "C06-M1", value: "2/91" },
        { key: "B", text: t`$\frac{12}{7}$`, correct: false, misconceptionId: "C06-M2", value: "12/7" },
        { key: "C", text: t`$- \frac{47}{12}$`, correct: false, misconceptionId: "C06-M3", value: "-47/12" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Componendo-dividendo: $\frac{2\sqrt{4x + 1}}{2\sqrt{x + 3}}$ $= \frac{4 + 1}{4 - 1} = \frac{5}{3}$.`,
          t`Square both sides: $\frac{4x + 1}{x + 3} = \frac{25}{9}$.`,
          t`$9(4x + 1) = 25(x + 3)$, so $36x + 9 = 25x + 75$.`,
          t`$11x = 66$, so $x = 6$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q4(iii)" },
      stem: t`Using componendo-dividendo, the equation $$\dfrac{(2x + 1)^2 + (2x - 1)^2}{(2x + 1)^2 - (2x - 1)^2} = \dfrac{17}{8}$$ becomes $\dfrac{(2x + 1)^2}{(2x - 1)^2} = \square$. What is the value in the box?`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cd", U: "2*x + 1", V: "2*x - 1", k: "2", top: "+", m: "17", n: "8", ask: "ratio" } },
      options: [
        { key: "A", text: t`$\frac{25}{9}$`, correct: true, value: "25/9" },
        { key: "B", text: t`$\frac{9}{25}$`, correct: false, misconceptionId: "C06-M1", value: "9/25" },
        { key: "C", text: t`$\frac{17}{8}$`, correct: false, misconceptionId: "C06-M3", value: "17/8" },
        { key: "D", text: t`$- \frac{25}{9}$`, correct: false, misconceptionId: "C06-M4", value: "-25/9" },
      ],
      solution: {
        steps: [
          t`Let $a = (2x + 1)^2$ and $b = (2x - 1)^2$. Then $\frac{a + b}{a - b} = \frac{17}{8}$.`,
          t`Componendo-dividendo: $\frac{2a}{2b} = \frac{17 + 8}{17 - 8}$.`,
          t`So $\frac{(2x + 1)^2}{(2x - 1)^2} = \frac{25}{9}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q4(vi)" },
      stem: t`Solve the equation. $$\dfrac{(3x - 4)^3 - (x + 1)^3}{(3x - 4)^3 + (x + 1)^3} = \dfrac{61}{189}$$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cd", U: "3*x - 4", V: "x + 1", k: "3", top: "-", m: "61", n: "189", ask: "x" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$\frac{24}{11}$`, correct: false, misconceptionId: "C06-M1", value: "24/11" },
        { key: "C", text: t`$\frac{381}{67}$`, correct: false, misconceptionId: "C06-M2", value: "381/67" },
        { key: "D", text: t`$\frac{11}{17}$`, correct: false, misconceptionId: "C06-M4", value: "11/17" },
      ],
      solution: {
        steps: [
          t`Let $a = (3x - 4)^3$ and $b = (x + 1)^3$. Then $\frac{a - b}{a + b} = \frac{61}{189}$.`,
          t`Invertendo: $\frac{a + b}{a - b} = \frac{189}{61}$. Componendo-dividendo: $\frac{a}{b} = \frac{250}{128}$ $= \frac{125}{64}$.`,
          t`Take cube roots: $\frac{3x - 4}{x + 1} = \frac{5}{4}$.`,
          t`$12x - 16 = 5x + 5$, so $7x = 21$ and $x = 3$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.3 SolvedEx.7" },
      stem: t`Solve the equation. $$\dfrac{3x^2 + 5x + 7}{10x + 14} = \dfrac{3x^2 + 4x + 3}{8x + 6}$$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "x2", num1: "3*x**2 + 5*x + 7", den1: "10*x + 14", num2: "3*x**2 + 4*x + 3", den2: "8*x + 6", lin1: "10*x + 14", lin2: "8*x + 6" } },
      options: [
        { key: "A", text: t`$x = 0$ only`, correct: false, misconceptionId: "C06-M6", value: "{0}" },
        { key: "B", text: t`$x = 0$ or $x = -4$`, correct: true, value: "{-4, 0}" },
        { key: "C", text: t`$x = 0$ or $x = 4$`, correct: false, misconceptionId: "C06-M4", value: "{0, 4}" },
        { key: "D", text: t`$x = -4$ only`, correct: false, misconceptionId: "C06-M5", value: "{-4}" },
      ],
      solution: {
        steps: [
          t`Multiply both sides by $2$: $\frac{6x^2 + 10x + 14}{10x + 14}$ $= \frac{6x^2 + 8x + 6}{8x + 6}$.`,
          t`Dividendo: $\frac{6x^2}{10x + 14} = \frac{6x^2}{8x + 6}$.`,
          t`$x = 0$ makes both sides $0$, so $x = 0$ is a solution.`,
          t`If $x \neq 0$, divide by $6x^2$: $10x + 14 = 8x + 6$, so $2x = -8$ and $x = -4$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.3 SolvedEx.8" },
      stem: t`Solve the equation. $$\dfrac{\sqrt{3x + 1} - \sqrt{x + 1}}{\sqrt{3x + 1} + \sqrt{x + 1}} = \dfrac{1}{4}$$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "cd", U: "3*x + 1", V: "x + 1", k: "1/2", top: "-", m: "1", n: "4", ask: "x" } },
      options: [
        { key: "A", text: t`$8$`, correct: true, value: "8" },
        { key: "B", text: t`$- \frac{8}{33}$`, correct: false, misconceptionId: "C06-M1", value: "-8/33" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C06-M2", value: "1/2" },
        { key: "D", text: t`$- \frac{15}{47}$`, correct: false, misconceptionId: "C06-M3", value: "-15/47" },
      ],
      solution: {
        steps: [
          t`Let $a = \sqrt{3x + 1}$ and $b = \sqrt{x + 1}$. Invertendo: $\frac{a + b}{a - b} = \frac{4}{1}$.`,
          t`Componendo-dividendo: $\frac{a}{b} = \frac{4 + 1}{4 - 1} = \frac{5}{3}$.`,
          t`Square both sides: $\frac{3x + 1}{x + 1} = \frac{25}{9}$, so $27x + 9 = 25x + 25$.`,
          t`$2x = 16$, so $x = 8$.`,
        ],
      },
    },
  ],
};
