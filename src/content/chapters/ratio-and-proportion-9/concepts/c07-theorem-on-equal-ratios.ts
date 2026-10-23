import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`$\dfrac{2}{5} = \dfrac{6}{15}$. Add the numerators and add the denominators: $\dfrac{2 + 6}{5 + 15}$. Is this bigger than, smaller than, or equal to $\dfrac{2}{5}$?`,
    reveal: t`Equal: $\dfrac{8}{20} = \dfrac{2}{5}$. When ratios are equal, adding numerators and adding denominators gives the same ratio again. This is the theorem on equal ratios.`,
  },
  explanation: {
    intuition: [
      t`Think of $\dfrac{2}{5}$ as $2$ red beads for every $5$ beads.`,
      t`A bag with $6$ red out of $15$ has the same ratio, $\dfrac{6}{15} = \dfrac{2}{5}$.`,
      t`Pour the two bags together: $8$ red out of $20$, still $\dfrac{2}{5}$.`,
      t`Mixing two equal ratios cannot change the ratio. This works for any number of equal ratios.`,
      t`Taking $3$ bags of one kind keeps the ratio too: multiply both parts by $3$.`,
      t`It works only for **equal** ratios: $\dfrac{1}{2}$ and $\dfrac{1}{3}$ give $\dfrac{2}{5}$, which is neither.`,
    ],
    formal: [
      {
        title: "The theorem",
        points: [
          t`Let $\dfrac{a}{b} = \dfrac{c}{d} = k$. Then $a = bk$ and $c = dk$.`,
          t`Add them: $a + c = bk + dk$ $= (b + d)k$.`,
          t`So $\dfrac{a + c}{b + d} = k$, provided $b + d \neq 0$.`,
          t`**Theorem on equal ratios**: each ratio equals (sum of the numerators) $\div$ (sum of the denominators).`,
          t`For three ratios: $\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{e}{f}$ $= \dfrac{a + c + e}{b + d + f}$.`,
        ],
      },
      {
        title: "With multipliers",
        points: [
          t`Multiply the numerator and the denominator of a ratio by the same number $l$: $\dfrac{la}{lb} = \dfrac{a}{b}$.`,
          t`So $\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{la + mc}{lb + md}$, for any numbers $l$ and $m$.`,
          t`Each multiplier goes with its own denominator: $l$ with $b$, $m$ with $d$.`,
          t`Example: $\dfrac{a}{3} = \dfrac{b}{7} = \dfrac{4a + 9b}{4 \times 3 + 9 \times 7}$ $= \dfrac{4a + 9b}{75}$.`,
          t`A minus sign stays with its multiplier: $\dfrac{4a - 9b}{12 - 63} = \dfrac{4a - 9b}{-51}$.`,
        ],
      },
      {
        title: "Finding the common ratio",
        points: [
          t`Given $\dfrac{x}{3} = \dfrac{y}{2} = \dfrac{z}{5}$ and $x + 4y - z = 30$.`,
          t`Use the multipliers $1$, $4$ and $-1$ from the given sum.`,
          t`Each ratio $= \dfrac{x + 4y - z}{3 + 8 - 5} = \dfrac{30}{6} = 5$.`,
          t`This $5$ is the **common ratio** $k$, not the answer yet.`,
          t`Multiply back: $x = 3 \times 5 = 15$, $y = 10$ and $z = 25$.`,
          t`Check: $15 + 40 - 25 = 30$.`,
        ],
      },
      {
        title: "Each ratio from the sums",
        points: [
          t`Sometimes the numerators and denominators are expressions in $x$, $y$, $z$.`,
          t`Add all the numerators, add all the denominators, and simplify.`,
          t`Example: $\dfrac{a}{x + y} = \dfrac{b}{y + z} = \dfrac{c}{z + x}$.`,
          t`Each ratio $= \dfrac{a + b + c}{2(x + y + z)}$, when $x + y + z \neq 0$.`,
          t`To subtract, use the multiplier $-1$: $\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{a - c}{b - d}$.`,
        ],
      },
      {
        title: "Solving an equation",
        points: [
          t`Solve $\dfrac{14x^2 - 6x + 8}{10x^2 + 4x + 7} = \dfrac{7x - 3}{5x + 2}$.`,
          t`If $x = 0$, the two sides are $\dfrac{8}{7}$ and $-\dfrac{3}{2}$: not equal. So $x \neq 0$.`,
          t`Multiply both parts of the right side by $2x$: $\dfrac{14x^2 - 6x}{10x^2 + 4x}$.`,
          t`Subtract its parts from the left side's parts (multiplier $-1$): each ratio $= \dfrac{8}{7}$.`,
          t`So $\dfrac{7x - 3}{5x + 2} = \dfrac{8}{7}$, and $49x - 21 = 40x + 16$.`,
          t`$9x = 37$, so $x = \dfrac{37}{9}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\dfrac{x}{4} = \dfrac{y}{3} = \dfrac{z}{2}$ and $2x - 3y + 5z = 18$, find $x$, $y$ and $z$.`,
      steps: [
        t`Use the multipliers $2$, $-3$ and $5$ from the given sum.`,
        t`Each ratio $= \dfrac{2x - 3y + 5z}{2 \times 4 - 3 \times 3 + 5 \times 2}$.`,
        t`The denominator is $8 - 9 + 10 = 9$, so each ratio $= \dfrac{18}{9} = 2$.`,
        t`Multiply back: $x = 4 \times 2 = 8$, $y = 3 \times 2 = 6$, $z = 2 \times 2 = 4$.`,
        t`Check: $16 - 18 + 20 = 18$.`,
      ],
      answer: t`$x = 8$, $y = 6$ and $z = 4$.`,
    },
    visualSpec: t`Two bags of beads with equal red-to-total ratios; drag to pour one into the other (or add copies of a bag) and watch the combined ratio stay the same.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Drops the multipliers from the denominator: the blank in (4a + 9b)/? is just 3 + 7",
      remediation: t`Each multiplier goes on both parts of its ratio: $\dfrac{4a}{4 \times 3}$ and $\dfrac{9b}{9 \times 7}$. The denominator is $4 \times 3 + 9 \times 7$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Multiplies by the multipliers but drops the minus sign of a negative one",
      remediation: t`A negative multiplier stays negative in the denominator too: $\dfrac{-3y}{-3 \times 5}$. Keep the same signs as the numerator.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Writes only the multipliers in the denominator: (4a + 9b) over 4 + 9",
      remediation: t`Each multiplier must multiply its own denominator. For $\dfrac{a}{3}$ and $\dfrac{b}{7}$, $4a + 9b$ goes over $4 \times 3 + 9 \times 7$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Writes the common ratio upside down: the sum of the denominators over the sum of the numerators",
      remediation: t`Each ratio is (sum of the numerators) $\div$ (sum of the denominators), in the same order as the ratios.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Stops at the common ratio k and gives it as the answer",
      remediation: t`The theorem gives the common ratio $k$. Multiply back to get the quantity asked, or solve for $x$ from the ratio.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "When cross-multiplying, multiplies only one term of the bracket: 3(1 + 2y) becomes 3 + 2y",
      remediation: t`Multiply every term inside the bracket: $3(1 + 2y) = 3 + 6y$.`,
      fallback: { kind: "ext", topic: "expanding brackets (Std VIII)" },
    },
  ],
  engineNotes: [
    "C07-M1, C07-M2 and C07-M3 need a fill-the-blank or find-a-quantity question with multipliers; C07-M2 needs a negative multiplier. C07-M4 and C07-M5 need a question that asks for a quantity after the common ratio. C07-M6 needs an equation solved from the common ratio.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.4 Q1(i)" },
      stem: t`Fill in the blank: $\dfrac{x}{7} = \dfrac{y}{3} = \dfrac{7x - 9y}{\square}$. The number in the box is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "blank", dens: "7,3", mults: "7,-9" } },
      options: [
        { key: "A", text: t`$76$`, correct: false, misconceptionId: "C07-M2", value: "76" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C07-M3", value: "-2" },
        { key: "C", text: t`$22$`, correct: true, value: "22" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C07-M1", value: "10" },
      ],
      solution: {
        steps: [
          t`Multiply the first ratio by $7$ and the second by $-9$, top and bottom.`,
          t`By the theorem, the denominator is $7 \times 7 - 9 \times 3$.`,
          t`$49 - 27 = 22$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.4 Q1(ii)" },
      stem: t`Fill in the blank: $\dfrac{a}{3} = \dfrac{b}{4} = \dfrac{c}{7} = \dfrac{a - 2b + 3c}{\square}$. The number in the box is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "blank", dens: "3,4,7", mults: "1,-2,3" } },
      options: [
        { key: "A", text: t`$14$`, correct: false, misconceptionId: "C07-M1", value: "14" },
        { key: "B", text: t`$32$`, correct: false, misconceptionId: "C07-M2", value: "32" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C07-M3", value: "2" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`The multipliers are $1$, $-2$ and $3$, with the denominators $3$, $4$ and $7$.`,
          t`The denominator is $1 \times 3 - 2 \times 4 + 3 \times 7$.`,
          t`$3 - 8 + 21 = 16$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`If $\dfrac{a}{2} = \dfrac{b}{5} = \dfrac{c}{3}$ and $3a - b + 2c = 21$, find $c$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "solve", dens: "2,5,3", mults: "3,-1,2", S: "21", ask: "2" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C07-M5", value: "3" },
        { key: "B", text: t`$9$`, correct: true, value: "9" },
        { key: "C", text: t`$\frac{63}{10}$`, correct: false, misconceptionId: "C07-M1", value: "63/10" },
        { key: "D", text: t`$\frac{63}{17}$`, correct: false, misconceptionId: "C07-M2", value: "63/17" },
      ],
      solution: {
        steps: [
          t`Use the multipliers $3$, $-1$ and $2$ from the given sum.`,
          t`Each ratio $= \dfrac{3a - b + 2c}{6 - 5 + 6} = \dfrac{21}{7} = 3$.`,
          t`So $\dfrac{c}{3} = 3$, and $c = 9$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`If $\dfrac{p}{5} = \dfrac{q}{2} = \dfrac{r}{7}$ and $2p + 3q - r = 18$, find $q$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "solve", dens: "5,2,7", mults: "2,3,-1", S: "18", ask: "1" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C07-M3", value: "9" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M4", value: "1" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C07-M5", value: "2" },
      ],
      solution: {
        steps: [
          t`Use the multipliers $2$, $3$ and $-1$ from the given sum.`,
          t`Each ratio $= \dfrac{2p + 3q - r}{10 + 6 - 7} = \dfrac{18}{9} = 2$.`,
          t`So $\dfrac{q}{2} = 2$, and $q = 4$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.4 Q4(ii)" },
      stem: t`Solve: $\dfrac{5y^2 + 40y - 12}{5y + 10y^2 - 4} = \dfrac{y + 8}{1 + 2y}$. Then $y =$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "eqn", a: "1", b: "8", d: "2", e: "1", m: "5", C: "-12", F: "-4" } },
      options: [
        { key: "A", text: t`$-23$`, correct: false, misconceptionId: "C07-M4", value: "-23" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C07-M5", value: "3" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C07-M6", value: "5" },
        { key: "D", text: t`$1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`$y = 0$ gives $3$ and $8$: not equal, so $y \neq 0$. Multiply the right side's parts by $5y$: $\dfrac{5y^2 + 40y}{5y + 10y^2}$.`,
          t`Subtract these from the left side's parts: each ratio $= \dfrac{-12}{-4} = 3$.`,
          t`So $\dfrac{y + 8}{1 + 2y} = 3$: $y + 8 = 3 + 6y$.`,
          t`$5 = 5y$, so $y = 1$.`,
        ],
      },
    },
  ],
};
