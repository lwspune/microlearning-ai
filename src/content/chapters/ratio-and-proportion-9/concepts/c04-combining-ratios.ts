import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A recipe uses flour : sugar $= 2 : 3$ and sugar : butter $= 4 : 5$. Is flour : sugar : butter $= 2 : 3 : 5$?`,
    reveal: t`No. Sugar is $3$ parts in one ratio and $4$ in the other. Make it $12$ in both: $8 : 12$ and $12 : 15$. So the ratio is $8 : 12 : 15$.`,
  },
  explanation: {
    intuition: [
      t`A **ratio** $a : b$ compares two quantities. It means $\frac{a}{b}$.`,
      t`Multiplying both terms by the same number keeps the ratio: $2 : 1 = 8 : 4$.`,
      t`In $a : b$ and $b : c$, the letter $b$ is the **common term**.`,
      t`To join the two ratios, first make $b$ the same number in both.`,
      t`Take $a : b = 2 : 1 = 8 : 4$ and $b : c = 4 : 1$.`,
      t`Now $b$ is $4$ in both, so $a : b : c = 8 : 4 : 1$.`,
    ],
    formal: [
      {
        title: "Equal ratios",
        points: [
          t`For any number $k \neq 0$, $\frac{a}{b} = \frac{ak}{bk}$.`,
          t`So we may multiply **both** terms of a ratio by the same number $k$.`,
          t`$\frac{3}{4} = \frac{3 \times 5}{4 \times 5}$ $= \frac{15}{20}$.`,
          t`$k$ may be a decimal: $\frac{3}{4} = \frac{3 \times 0.5}{4 \times 0.5}$ $= \frac{1.5}{2}$.`,
          t`Multiplying only one term changes the ratio: $\frac{3}{4 \times 5} = \frac{3}{20}$.`,
          t`Adding the same number also changes it: $\frac{3 + 1}{4 + 1} = \frac{4}{5}$.`,
        ],
      },
      {
        title: "Joining two ratios",
        points: [
          t`Let $a : b = 4 : 5$ and $b : c = 3 : 2$.`,
          t`$b$ is $5$ in one ratio and $3$ in the other. The LCM of $5$ and $3$ is $15$.`,
          t`Multiply both terms of $4 : 5$ by $3$: $a : b = 12 : 15$.`,
          t`Multiply both terms of $3 : 2$ by $5$: $b : c = 15 : 10$.`,
          t`Now $b = 15$ in both, so $a : b : c = 12 : 15 : 10$.`,
          t`Read off $a : c = 12 : 10 = 6 : 5$.`,
        ],
      },
      {
        title: "Value of an expression",
        points: [
          t`Let $a : b = 5 : 2$ and $b : c = 3 : 1$. Find $\frac{2a}{b + c}$.`,
          t`$\frac{a}{b} = \frac{5}{2}$, so $a = \frac{5}{2}b$. $\frac{b}{c} = 3$, so $b = 3c$.`,
          t`So $a = \frac{5}{2} \times 3c = \frac{15}{2}c$.`,
          t`$\frac{2a}{b + c} = \frac{15c}{3c + c}$ $= \frac{15c}{4c}$.`,
          t`$c$ cancels, so the value is $\frac{15}{4}$.`,
          t`In the same way, $\frac{a}{c} = \frac{a}{b} \times \frac{b}{c}$: multiply the ratios, never divide.`,
        ],
      },
      {
        title: "Equations from equal ratios",
        points: [
          t`In $a : b = c : d$, $a$ and $d$ are the **extremes**; $b$ and $c$ are the **means**.`,
          t`Product of extremes = product of means: $ad = bc$.`,
          t`Solve $(x + 3) : (x + 11)$ $= (x - 2) : (x + 1)$.`,
          t`$(x + 3)(x + 1) = (x + 11)(x - 2)$.`,
          t`$x^2 + 4x + 3 = x^2 + 9x - 22$, so $25 = 5x$.`,
          t`So $x = 5$. Check: $8 : 16 = 3 : 6$, both $1 : 2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $a : b = 2 : 1$ and $b : c = 4 : 1$, find the value of $\left(\dfrac{a^4}{32b^2c^2}\right)^3$.`,
      steps: [
        t`$a : b = 2 : 1$, so $a = 2b$. $b : c = 4 : 1$, so $b = 4c$.`,
        t`So $a = 2 \times 4c = 8c$.`,
        t`$\frac{a^4}{32b^2c^2}$ $= \frac{(8c)^4}{32 \times (4c)^2 \times c^2}$.`,
        t`$= \frac{4096c^4}{512c^4} = 8$.`,
        t`So the value is $8^3 = 512$.`,
      ],
      answer: t`$512$`,
    },
    visualSpec: t`Two bars for a : b and b : c; drag a multiplier on each until the two b bars are the same length, and the three bars a, b, c line up as a : b : c.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Joins a : b and b : c as they stand, without making b the same: a : b : c = p : q : s",
      remediation: t`Before joining, make the common term $b$ the same number in both ratios. Use the LCM of its two values.`,
      fallback: { kind: "ext", topic: "equivalent ratios (Std VIII)" },
    },
    {
      id: "C04-M2",
      mistake: "Makes two terms equal by adding the same number to both terms of a ratio (2 : 1 becomes 5 : 4)",
      remediation: t`Adding the same number to both terms changes a ratio. Multiply both terms instead: $\frac{a}{b} = \frac{ak}{bk}$.`,
      fallback: { kind: "ext", topic: "equivalent ratios (Std VIII)" },
    },
    {
      id: "C04-M3",
      mistake: "Multiplies only one term by the factor: makes b the LCM but leaves a and c, or multiplies only the x term of a bracket",
      remediation: "Multiply **every** term by the factor: both terms of a ratio, and every term inside a bracket.",
      fallback: { kind: "ext", topic: "equivalent ratios (Std VIII)" },
    },
    {
      id: "C04-M4",
      mistake: "Finds a : c by dividing the ratios, (a/b) ÷ (b/c), instead of multiplying them",
      remediation: t`$\frac{a}{c} = \frac{a}{b} \times \frac{b}{c}$: the $b$ cancels only when you multiply.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "From a : b = c : d, multiplies the wrong pairs: a × c = b × d",
      remediation: t`In $a : b = c : d$, the product of the extremes equals the product of the means: $ad = bc$.`,
      fallback: { kind: "ext", topic: "proportion (Std VIII)" },
    },
    {
      id: "C04-M6",
      mistake: "Moves a constant term across '=' without changing its sign",
      remediation: t`When a term moves to the other side of $=$, its sign changes: $3x + 6 = 2x + 10$ gives $3x - 2x = 10 - 6$.`,
      fallback: { kind: "ext", topic: "solving linear equations (Std VIII)" },
    },
  ],
  engineNotes: [
    t`C04-M1 gives the key when $b$ has the same value in both ratios; C04-M2 and C04-M3 need the two values of $b$ to differ. C04-M1 and C04-M3 agree on $a : c$, so a : c items tag only one of them. C04-M4 is modelled for $a : c$ only; C04-M5 for a blank or an equation $a : b = c : d$; C04-M6 for equations with a constant term on the left.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.2 SolvedEx.4" },
      stem: t`If $a : b = 3 : 4$ and $b : c = 6 : 5$, then $a : b : c = ?$`,
      verify: { kind: "value", inputs: {  }, params: { kind: "abc", ab: "3:4", bc: "6:5" } },
      options: [
        { key: "A", text: t`$5 : 6 : 5$`, correct: false, misconceptionId: "C04-M2", value: "(5, 6, 5)" },
        { key: "B", text: t`$3 : 12 : 5$`, correct: false, misconceptionId: "C04-M3", value: "(3, 12, 5)" },
        { key: "C", text: t`$9 : 12 : 10$`, correct: true, value: "(9, 12, 10)" },
        { key: "D", text: t`$3 : 4 : 5$`, correct: false, misconceptionId: "C04-M1", value: "(3, 4, 5)" },
      ],
      solution: {
        steps: [
          t`$b$ is $4$ in one ratio and $6$ in the other. Make it $12$, the LCM.`,
          t`Both terms of $3 : 4$ times $3$: $a : b = 9 : 12$.`,
          t`Both terms of $6 : 5$ times $2$: $b : c = 12 : 10$.`,
          t`So $a : b : c = 9 : 12 : 10$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q5(ii)" },
      stem: t`If $a : b = 3 : 1$ and $b : c = 5 : 1$, find the value of $\dfrac{a^2}{7bc}$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "expr", ab: "3:1", bc: "5:1", expr: "a**2/(7*b*c)" } },
      options: [
        { key: "A", text: t`$\frac{9}{7}$`, correct: false, misconceptionId: "C04-M1", value: "9/7" },
        { key: "B", text: t`$\frac{7}{5}$`, correct: false, misconceptionId: "C04-M2", value: "7/5" },
        { key: "C", text: t`$\frac{9}{35}$`, correct: false, misconceptionId: "C04-M3", value: "9/35" },
        { key: "D", text: t`$\frac{45}{7}$`, correct: true, value: "45/7" },
      ],
      solution: {
        steps: [
          t`$a = 3b$ and $b = 5c$, so $a = 15c$.`,
          t`$\frac{a^2}{7bc}$ $= \frac{(15c)^2}{7 \times 5c \times c}$.`,
          t`$= \frac{225c^2}{35c^2} = \frac{45}{7}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.2 SolvedEx.4" },
      stem: t`If $a : b = 5 : 6$ and $b : c = 4 : 3$, find $a : c$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ac", ab: "5:6", bc: "4:3" } },
      options: [
        { key: "A", text: t`$1 : 1$`, correct: false, misconceptionId: "C04-M2", value: "1" },
        { key: "B", text: t`$5 : 8$`, correct: false, misconceptionId: "C04-M4", value: "5/8" },
        { key: "C", text: t`$10 : 9$`, correct: true, value: "10/9" },
        { key: "D", text: t`$5 : 3$`, correct: false, misconceptionId: "C04-M1", value: "5/3" },
      ],
      solution: {
        steps: [
          t`$\frac{a}{c} = \frac{a}{b} \times \frac{b}{c}$ $= \frac{5}{6} \times \frac{4}{3}$.`,
          t`$= \frac{20}{18} = \frac{10}{9}$.`,
          t`So $a : c = 10 : 9$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q1(i)" },
      stem: t`Using $\dfrac{a}{b} = \dfrac{ak}{bk}$, find the number in the box: $\dfrac{5}{7} = \dfrac{35}{\square}$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "blank", prop: "5|7|35|?" } },
      options: [
        { key: "A", text: t`$37$`, correct: false, misconceptionId: "C04-M2", value: "37" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C04-M3", value: "7" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C04-M5", value: "25" },
        { key: "D", text: t`$49$`, correct: true, value: "49" },
      ],
      solution: {
        steps: [
          t`$35 = 5 \times 7$, so here $k = 7$.`,
          t`Multiply the other term by $7$ too: $7 \times 7 = 49$.`,
          t`So $\frac{5}{7} = \frac{35}{49}$, and the box holds $49$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q7" },
      stem: t`Find $x$ if $(x + 2) : (x + 5) = 2 : 3$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "eq", prop: "x + 2|x + 5|2|3" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C04-M6", value: "16" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C04-M3", value: "3" },
        { key: "D", text: t`$-11$`, correct: false, misconceptionId: "C04-M5", value: "-11" },
      ],
      solution: {
        steps: [
          t`Product of extremes = product of means: $3(x + 2) = 2(x + 5)$.`,
          t`$3x + 6 = 2x + 10$, so $3x - 2x = 10 - 6$.`,
          t`So $x = 4$. Check: $6 : 9 = 2 : 3$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.2 SolvedEx.4" },
      stem: t`If $a : b = 3 : 2$ and $b : c = 5 : 3$, find $a : c$.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "ac", ab: "3:2", bc: "5:3" } },
      options: [
        { key: "A", text: t`$5 : 2$`, correct: true, value: "5/2" },
        { key: "B", text: t`$1 : 1$`, correct: false, misconceptionId: "C04-M1", value: "1" },
        { key: "C", text: t`$2 : 1$`, correct: false, misconceptionId: "C04-M2", value: "2" },
        { key: "D", text: t`$9 : 10$`, correct: false, misconceptionId: "C04-M4", value: "9/10" },
      ],
      solution: {
        steps: [
          t`$\frac{a}{c} = \frac{a}{b} \times \frac{b}{c}$ $= \frac{3}{2} \times \frac{5}{3}$.`,
          t`$= \frac{15}{6} = \frac{5}{2}$.`,
          t`So $a : c = 5 : 2$.`,
        ],
      },
    },
  ],
};
