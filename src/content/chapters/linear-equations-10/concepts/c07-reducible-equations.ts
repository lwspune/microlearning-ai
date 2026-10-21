import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Solve $\frac{1}{x} + \frac{1}{y} = 5$ and $\frac{1}{x} - \frac{1}{y} = 1$. The letters sit in denominators, so these are not linear. **Can elimination still work?**`,
    reveal: t`Yes. Treat $\frac{1}{x}$ and $\frac{1}{y}$ as the unknowns. Adding gives $\frac{2}{x} = 6$, so $\frac{1}{x} = 3$ and $x = \frac{1}{3}$. Then $\frac{1}{y} = 5 - 3 = 2$, so $y = \frac{1}{2}$.`,
  },
  explanation: {
    intuition: [
      t`In a **linear equation**, like $2x + 3y = 7$, no variable is squared or sits in a denominator.`,
      t`$\frac{4}{x} + \frac{5}{y} = 7$ is not linear in $x$ and $y$: they sit in denominators.`,
      t`But it is $4 \times \frac{1}{x} + 5 \times \frac{1}{y} = 7$.`,
      t`Write $m$ for $\frac{1}{x}$ and $n$ for $\frac{1}{y}$: it becomes $4m + 5n = 7$, a linear equation.`,
      t`Solve the new pair for $m$ and $n$ by elimination.`,
      t`Then go back: $\frac{1}{x} = m$, so $x = \frac{1}{m}$. The answer is $x$ and $y$, not $m$ and $n$.`,
    ],
    formal: [
      {
        title: "Reducible to linear form",
        points: [
          t`A pair is **reducible to linear form** when one replacement turns it into a linear pair.`,
          t`The replacement is a new letter for each repeated fraction, like $\frac{1}{x} = m$ and $\frac{1}{y} = n$.`,
          t`The same works for $\frac{1}{x + y} = p$ and $\frac{1}{x - y} = q$.`,
          t`It also works for $\frac{1}{2x + 1} = a$ and $\frac{1}{y - 3} = b$.`,
          t`Since $x$ and $y$ sit in denominators, $x \neq 0$ and $y \neq 0$.`,
        ],
      },
      {
        title: "The method in four steps",
        points: [
          t`**Step 1.** Write each term as a number times the fraction: $\frac{3}{x} = 3 \times \frac{1}{x}$.`,
          t`**Step 2.** Replace the fractions: $\frac{1}{x} = m$, $\frac{1}{y} = n$.`,
          t`**Step 3.** Solve the linear pair in $m$ and $n$ by elimination.`,
          t`**Step 4.** Go back: $\frac{1}{x} = m$ gives $x = \frac{1}{m}$; $\frac{1}{y} = n$ gives $y = \frac{1}{n}$.`,
          t`Check both answers in the original equations.`,
        ],
      },
      {
        title: "Going back from p and q",
        points: [
          t`With $\frac{1}{x + y} = p$, the value of $p$ is not $x$, and $\frac{1}{p}$ is not $x$ either.`,
          t`Turn the value upside down: $x + y = \frac{1}{p}$, and likewise $x - y = \frac{1}{q}$.`,
          t`For example, $p = \frac{1}{6}$ and $q = \frac{1}{2}$ give $x + y = 6$ and $x - y = 2$.`,
          t`Solve this second linear pair: adding gives $2x = 8$, so $x = 4$ and $y = 2$.`,
          t`In the same way, $\frac{1}{2x + 1} = a$ gives $2x + 1 = \frac{1}{a}$, then solve for $x$.`,
        ],
      },
      {
        title: "Numbers inside the denominator",
        points: [
          t`A number in the denominator stays there: $\frac{1}{3x} = \frac{1}{3} \times \frac{1}{x}$.`,
          t`So with $\frac{1}{x} = m$, the term $\frac{1}{3x}$ becomes $\frac{m}{3}$, not $3m$.`,
          t`Likewise $\frac{5}{2y} = \frac{5}{2} \times \frac{1}{y} = \frac{5n}{2}$.`,
          t`Clear these fractions by multiplying the whole equation by the LCM of the denominators.`,
          t`Move a constant term across with its sign changed: $\frac{m}{3} + 2 = 0$ becomes $\frac{m}{3} = -2$.`,
        ],
      },
      {
        title: "Fractions over xy",
        points: [
          t`Some equations come as one fraction over $xy$, like $\frac{5x + 3y}{xy} = 4$.`,
          t`Split the numerator: $\frac{5x}{xy} + \frac{3y}{xy}$.`,
          t`Cancel the common letter: $\frac{5x}{xy} = \frac{5}{y}$ and $\frac{3y}{xy} = \frac{3}{x}$.`,
          t`So the equation is $\frac{3}{x} + \frac{5}{y} = 4$: the $x$-term gives $\frac{1}{y}$.`,
          t`Don't just drop the $xy$: multiplying by $xy$ gives $5x + 3y = 4xy$, which is not linear.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve: $\frac{4}{x} + \frac{5}{y} = 7$ and $\frac{3}{x} + \frac{4}{y} = 5$.`,
      steps: [
        t`Put $\frac{1}{x} = m$ and $\frac{1}{y} = n$: $4m + 5n = 7$ (I) and $3m + 4n = 5$ (II).`,
        t`Multiply (I) by $3$ and (II) by $4$: $12m + 15n = 21$ and $12m + 16n = 20$.`,
        t`Subtract the first from the second: $n = -1$. Then (I) gives $4m - 5 = 7$, so $m = 3$.`,
        t`Go back: $\frac{1}{x} = 3$, so $x = \frac{1}{3}$; $\frac{1}{y} = -1$, so $y = -1$.`,
        t`Check: $\frac{4}{x} = 12$ and $\frac{5}{y} = -5$, and $12 - 5 = 7$.`,
      ],
      answer: t`$x = \frac{1}{3}$, $y = -1$`,
    },
    visualSpec: t`Two linked panels: on the left the line pair in $m$ and $n$ meeting at $(m, n)$; on the right the same solution sent back to $(x, y) = (\frac{1}{m}, \frac{1}{n})$, so the learner sees the two answers differ.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Treats the solution $(m, n)$ of the new pair as the answer for $x$ and $y$.`,
      remediation: t`$m$ and $n$ stand for $\frac{1}{x}$ and $\frac{1}{y}$, not for $x$ and $y$. Finish by going back: $\frac{1}{x} = m$ gives $x = \frac{1}{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`From $\frac{1}{x + y} = p$ writes $x + y = p$, dropping the reciprocal, then solves for $x$ and $y$.`,
      remediation: t`If $\frac{1}{x + y} = p$, then $x + y = \frac{1}{p}$. Turn each value upside down before you solve for $x$ and $y$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Goes back as if $p$ stood for $\frac{1}{x}$: takes $x = \frac{1}{p}$ and $y = \frac{1}{q}$ even when $p = \frac{1}{x + y}$.`,
      remediation: t`Here $\frac{1}{p}$ is $x + y$, not $x$. Write $x + y = \frac{1}{p}$ and $x - y = \frac{1}{q}$, then solve that pair for $x$ and $y$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Splits $\frac{bx + ay}{xy}$ as $\frac{b}{x} + \frac{a}{y}$, keeping each letter under itself.`,
      remediation: t`Cancel the common letter: $\frac{bx}{xy} = \frac{b}{y}$, so the $x$-term gives $\frac{1}{y}$, and the $y$-term gives $\frac{1}{x}$.`,
      fallback: { kind: "ext", topic: "cancelling common factors in algebraic fractions" },
    },
    {
      id: "C07-M5",
      mistake: t`Multiplies by $xy$ but leaves the right side as it was, so $\frac{2}{x} + \frac{3}{y} = 4$ becomes $2y + 3x = 4$.`,
      remediation: t`Multiplying by $xy$ multiplies the right side too: $2y + 3x = 4xy$, which is not linear. Put $\frac{1}{x} = m$ and $\frac{1}{y} = n$ instead.`,
      fallback: { kind: "ext", topic: "doing the same to both sides of an equation" },
    },
    {
      id: "C07-M6",
      mistake: t`Reads $\frac{1}{3x}$ as $\frac{3}{x}$, writing $3m$ instead of $\frac{m}{3}$.`,
      remediation: t`A number in the denominator stays there: $\frac{1}{3x} = \frac{1}{3} \times \frac{1}{x} = \frac{m}{3}$.`,
      fallback: { kind: "ext", topic: "multiplying fractions" },
    },
  ],
  engineNotes: [
    t`C07-M2 equals C07-M1, and C07-M3 equals the key, when the replaced fractions are just $\frac{1}{x}$ and $\frac{1}{y}$: diagnose them only with $\frac{1}{x + y}$ or $\frac{1}{2x + 1}$ type items.`,
    t`C07-M4 needs a fraction over $xy$; C07-M5 needs $\frac{1}{x}$, $\frac{1}{y}$ terms; C07-M6 needs a number inside a denominator, like $\frac{1}{3x}$.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.4 Q.1(2)" },
      stem: t`Solve: $\dfrac{10}{x + y} + \dfrac{2}{x - y} = 4$ and $\dfrac{15}{x + y} - \dfrac{5}{x - y} = -2$.`,
      verify: { kind: "value", inputs: { a1: "10", b1: "2", c1: "4", a2: "15", b2: "-5", c2: "-2" }, params: { form: "recip", U: "x + y", V: "x - y" } },
      options: [
        { key: "A", text: t`$x = \frac{3}{5},\ y = - \frac{2}{5}$`, correct: false, misconceptionId: "C07-M2", value: "3/5 - 2*I/5" },
        { key: "B", text: t`$x = 5,\ y = 1$`, correct: false, misconceptionId: "C07-M3", value: "5 + I" },
        { key: "C", text: t`$x = 3,\ y = 2$`, correct: true, value: "3 + 2*I" },
        { key: "D", text: t`$x = \frac{1}{5},\ y = 1$`, correct: false, misconceptionId: "C07-M1", value: "1/5 + I" },
      ],
      solution: {
        steps: [
          t`Put $\frac{1}{x + y} = m$, $\frac{1}{x - y} = n$: $10m + 2n = 4$, so $5m + n = 2$; and $15m - 5n = -2$.`,
          t`Multiply $5m + n = 2$ by $5$ and add: $40m = 8$, so $m = \frac{1}{5}$ and $n = 2 - 1 = 1$.`,
          t`Go back: $x + y = 5$ and $x - y = 1$.`,
          t`Add: $2x = 6$, so $x = 3$ and $y = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2016/Q4(ii)" },
      stem: t`Solve: $\dfrac{7}{2x + 1} + \dfrac{13}{y + 2} = 27$ and $\dfrac{13}{2x + 1} + \dfrac{7}{y + 2} = 33$.`,
      verify: { kind: "value", inputs: { a1: "7", b1: "13", c1: "27", a2: "13", b2: "7", c2: "33" }, params: { form: "recip", U: "2*x + 1", V: "y + 2" } },
      options: [
        { key: "A", text: t`$x = 2,\ y = 1$`, correct: false, misconceptionId: "C07-M1", value: "2 + I" },
        { key: "B", text: t`$x = \frac{1}{2},\ y = -1$`, correct: false, misconceptionId: "C07-M2", value: "1/2 - I" },
        { key: "C", text: t`$x = \frac{1}{2},\ y = 1$`, correct: false, misconceptionId: "C07-M3", value: "1/2 + I" },
        { key: "D", text: t`$x = - \frac{1}{4},\ y = -1$`, correct: true, value: "-1/4 - I" },
      ],
      solution: {
        steps: [
          t`Put $\frac{1}{2x + 1} = a$, $\frac{1}{y + 2} = b$: $7a + 13b = 27$ and $13a + 7b = 33$.`,
          t`Adding: $20a + 20b = 60$, so $a + b = 3$. Subtracting: $6a - 6b = 6$, so $a - b = 1$. So $a = 2$, $b = 1$.`,
          t`Go back: $2x + 1 = \frac{1}{2}$, so $2x = -\frac{1}{2}$ and $x = -\frac{1}{4}$.`,
          t`And $y + 2 = \frac{1}{1} = 1$, so $y = -1$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/PS1 Q.6(4)" },
      stem: t`Solve: $\dfrac{7x - 2y}{xy} = 17$ and $\dfrac{8x + 7y}{xy} = 38$.`,
      verify: { kind: "value", inputs: { a1: "-2", b1: "7", c1: "17", a2: "7", b2: "8", c2: "38" }, params: { form: "split" } },
      options: [
        { key: "A", text: t`$x = 3,\ y = 2$`, correct: false, misconceptionId: "C07-M5", value: "3 + 2*I" },
        { key: "B", text: t`$x = \frac{1}{2},\ y = \frac{1}{3}$`, correct: true, value: "1/2 + I/3" },
        { key: "C", text: t`$x = 2,\ y = 3$`, correct: false, misconceptionId: "C07-M1", value: "2 + 3*I" },
        { key: "D", text: t`$x = \frac{1}{3},\ y = \frac{1}{2}$`, correct: false, misconceptionId: "C07-M4", value: "1/3 + I/2" },
      ],
      solution: {
        steps: [
          t`Split: $\frac{7x - 2y}{xy} = \frac{7}{y} - \frac{2}{x}$ and $\frac{8x + 7y}{xy} = \frac{8}{y} + \frac{7}{x}$.`,
          t`Put $\frac{1}{x} = m$, $\frac{1}{y} = n$: $-2m + 7n = 17$ and $7m + 8n = 38$.`,
          t`Multiply the first by $7$, the second by $2$, and add: $65n = 195$, so $n = 3$. Then $-2m + 21 = 17$, so $m = 2$.`,
          t`Go back: $x = \frac{1}{2}$ and $y = \frac{1}{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q5(iii)" },
      stem: t`Solve: $\dfrac{1}{3x} - \dfrac{1}{4y} + 1 = 0$ and $\dfrac{1}{2x} + \dfrac{1}{4y} = -4$.`,
      verify: { kind: "value", inputs: { a1: "1/3", b1: "-1/4", c1: "-1", a2: "1/2", b2: "1/4", c2: "-4" }, params: { form: "recip" } },
      options: [
        { key: "A", text: t`$x = - \frac{1}{6},\ y = - \frac{1}{4}$`, correct: true, value: "-1/6 - I/4" },
        { key: "B", text: t`$x = -6,\ y = -4$`, correct: false, misconceptionId: "C07-M1", value: "-6 - 4*I" },
        { key: "C", text: t`$x = -4,\ y = -6$`, correct: false, misconceptionId: "C07-M5", value: "-4 - 6*I" },
        { key: "D", text: t`$x = -1,\ y = -2$`, correct: false, misconceptionId: "C07-M6", value: "-1 - 2*I" },
      ],
      solution: {
        steps: [
          t`Put $\frac{1}{x} = a$, $\frac{1}{y} = b$: $\frac{a}{3} - \frac{b}{4} = -1$ and $\frac{a}{2} + \frac{b}{4} = -4$.`,
          t`Multiply by $12$ and by $4$: $4a - 3b = -12$ and $2a + b = -16$.`,
          t`Multiply $2a + b = -16$ by $3$ and add: $10a = -60$, so $a = -6$ and $b = -16 + 12 = -4$.`,
          t`Go back: $x = -\frac{1}{6}$ and $y = -\frac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.4 Q.1(4)" },
      stem: t`Solve: $\dfrac{1}{3x + y} + \dfrac{1}{3x - y} = \dfrac{3}{5}$ and $\dfrac{1}{2(3x + y)} - \dfrac{1}{2(3x - y)} = -\dfrac{1}{5}$.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "1", c1: "3/5", a2: "1/2", b2: "-1/2", c2: "-1/5" }, params: { form: "recip", U: "3*x + y", V: "3*x - y" } },
      options: [
        { key: "A", text: t`$x = \frac{1}{10},\ y = - \frac{1}{5}$`, correct: false, misconceptionId: "C07-M2", value: "1/10 - I/5" },
        { key: "B", text: t`$x = 10,\ y = 2$`, correct: false, misconceptionId: "C07-M3", value: "10 + 2*I" },
        { key: "C", text: t`$x = \frac{8}{7},\ y = \frac{4}{7}$`, correct: false, misconceptionId: "C07-M6", value: "8/7 + 4*I/7" },
        { key: "D", text: t`$x = 2,\ y = 4$`, correct: true, value: "2 + 4*I" },
      ],
      solution: {
        steps: [
          t`Put $\frac{1}{3x + y} = m$, $\frac{1}{3x - y} = n$: $m + n = \frac{3}{5}$ and $\frac{m}{2} - \frac{n}{2} = -\frac{1}{5}$.`,
          t`Multiply the second by $2$: $m - n = -\frac{2}{5}$. Adding, $2m = \frac{1}{5}$, so $m = \frac{1}{10}$ and $n = \frac{1}{2}$.`,
          t`Go back: $3x + y = 10$ and $3x - y = 2$.`,
          t`Add: $6x = 12$, so $x = 2$ and $y = 10 - 6 = 4$.`,
        ],
      },
    },
  ],
};
