import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`An equation mixes $z$ and $\bar z$: $z + \bar z = 6$. **Can you find $z$ from this alone?**`,
    reveal: t`Only its real part. $z + \bar z = 2x = 6$ gives $x = 3$, but $y$ could be anything. You need both parts to pin $z$ down.`,
  },
  explanation: {
    intuition: [
      t`An equation with only $z$ in it, like $2z = 6 + 4i$, is solved by dividing through: $z = 3 + 2i$.`,
      t`Recall: the **conjugate** of $z = x + iy$ is $\bar z = x - iy$, with the sign of $i$ flipped.`,
      t`With $z$ and $\bar z$ together, you can't just divide through: $4z - \bar z$ is not $3z$.`,
      t`Instead put $z = x + iy$ and $\bar z = x - iy$, where the unknowns $x$ and $y$ are real.`,
      t`Simplify each side into a **real part**, with no $i$, plus $i$ times an **imaginary part**.`,
      t`**Equate parts**, real with real and imaginary with imaginary: one complex equation becomes two equations in $x$ and $y$.`,
    ],
    formal: [
      {
        title: "Substitute and collect",
        points: [
          t`The equation has the form $az + b\bar z = c$, where $a$, $b$ and $c$ are given complex numbers.`,
          t`Substitute $z = x + iy$ and $\bar z = x - iy$, where $x$ and $y$ are real.`,
          t`Don't treat $\bar z$ as if it were $z$: they differ unless $z$ is real.`,
          t`Expand both sides, and replace any $i^2$ with $-1$.`,
          t`Collect into the form $(\ldots) + i(\ldots)$: the real part, plus $i$ times the imaginary part.`,
        ],
      },
      {
        title: "Equate parts and solve",
        points: [
          t`Recall: two complex numbers are equal only when their real parts and their imaginary parts are both equal.`,
          t`So equate the real parts of the two sides: that is one equation in $x$ and $y$.`,
          t`Then equate the imaginary parts: that is a second equation.`,
          t`Each is a **real equation**: no $i$ is left in it.`,
          t`Match real with real and imaginary with imaginary, never a real part with an imaginary part.`,
          t`Solve the two real equations together for $x$ and $y$, then write $z = x + iy$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $4z - \bar z = 6 + 10i$.`,
      steps: [
        t`Substitute: $4(x + iy) - (x - iy) = 3x + 5iy$.`,
        t`Equate parts: $3x = 6$ and $5y = 10$.`,
        t`So $x = 2$ and $y = 2$.`,
      ],
      answer: t`$z = 2 + 2i$`,
    },
    visualSpec: t`Two sliders set $x$ and $y$. The left side of the equation moves as a point on the Argand plane and turns green when it lands on the point for the right side.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Treating $\bar z$ as $z$`,
      remediation: t`$\bar z = x - iy$, not $x + iy$. Substitute both separately before collecting terms.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M2",
      mistake: "Equating a real part with an imaginary part",
      remediation: "Match real with real and imaginary with imaginary.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C08-M3",
      mistake: "A sign slip in the imaginary part",
      remediation: t`Recheck the $iy$ terms: $\bar z$ contributes $-iy$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`Solve $2z + 3\bar z = 10 - i$.`,
      verify: { kind: "value", inputs: { a: "2", b: "3", c: "10-I" } },
      options: [
        { key: "A", text: t`$2 + i$`, correct: true, value: "2 + I" },
        { key: "B", text: t`$2 - \frac{i}{5}$`, correct: false, misconceptionId: "C08-M1", value: "2 - I/5" },
        { key: "C", text: t`$- \frac{1}{5} - 10 i$`, correct: false, misconceptionId: "C08-M2", value: "-1/5 - 10*I" },
        { key: "D", text: t`$2 - i$`, correct: false, misconceptionId: "C08-M3", value: "2 - I" },
      ],
      solution: {
        steps: [
          t`Substitute $z = x + iy$: $2(x + iy) + 3(x - iy) = 5x - iy$.`,
          t`Equate parts: $5x = 10$ and $-y = -1$.`,
          t`So $x = 2$, $y = 1$, and $z = 2 + i$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`Solve $z - 2\bar z = 3 + 6i$.`,
      verify: { kind: "value", inputs: { a: "1", b: "-2", c: "3+6*I" } },
      options: [
        { key: "A", text: t`$-3 - 6 i$`, correct: false, misconceptionId: "C08-M1", value: "-3 - 6*I" },
        { key: "B", text: t`$-6 + i$`, correct: false, misconceptionId: "C08-M2", value: "-6 + I" },
        { key: "C", text: t`$-3 - 2 i$`, correct: false, misconceptionId: "C08-M3", value: "-3 - 2*I" },
        { key: "D", text: t`$-3 + 2 i$`, correct: true, value: "-3 + 2*I" },
      ],
      solution: {
        steps: [
          t`Substitute $z = x + iy$: $(x + iy) - 2(x - iy) = -x + 3iy$.`,
          t`Equate parts: $-x = 3$ and $3y = 6$.`,
          t`So $x = -3$, $y = 2$, and $z = -3 + 2i$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`Solve $z + 2\bar z = 9 - 2i$.`,
      verify: { kind: "value", inputs: { a: "1", b: "2", c: "9-2*I" } },
      options: [
        { key: "A", text: t`$3 - \frac{2 i}{3}$`, correct: false, misconceptionId: "C08-M1", value: "3 - 2*I/3" },
        { key: "B", text: t`$- \frac{2}{3} - 9 i$`, correct: false, misconceptionId: "C08-M2", value: "-2/3 - 9*I" },
        { key: "C", text: t`$3 - 2 i$`, correct: false, misconceptionId: "C08-M3", value: "3 - 2*I" },
        { key: "D", text: t`$3 + 2 i$`, correct: true, value: "3 + 2*I" },
      ],
      solution: {
        steps: [
          t`Substitute $z = x + iy$: $(x + iy) + 2(x - iy) = 3x - iy$.`,
          t`Equate parts: $3x = 9$ and $-y = -2$.`,
          t`So $x = 3$, $y = 2$, and $z = 3 + 2i$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Solve $2z - i\bar z = 4 + i$.`,
      verify: { kind: "value", inputs: { a: "2", b: "-I", c: "4+I" } },
      options: [
        { key: "A", text: t`$2 + 3 i$`, correct: false, misconceptionId: "C08-M2", value: "2 + 3*I" },
        { key: "B", text: t`$3 - 2 i$`, correct: false, misconceptionId: "C08-M3", value: "3 - 2*I" },
        { key: "C", text: t`$3 + 2 i$`, correct: true, value: "3 + 2*I" },
        { key: "D", text: t`$\frac{7}{5} + \frac{6 i}{5}$`, correct: false, misconceptionId: "C08-M1", value: "7/5 + 6*I/5" },
      ],
      solution: {
        steps: [
          t`Substitute: $2(x + iy) - i(x - iy) = 2x + 2iy - ix + i^2 y = (2x - y) + i(2y - x)$.`,
          t`Equate parts: $2x - y = 4$ and $2y - x = 1$.`,
          t`From the second, $x = 2y - 1$. Then $2(2y - 1) - y = 4$ gives $y = 2$, so $x = 3$.`,
          t`So $z = 3 + 2i$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Solve $3z + \bar z = 8 + 4i$.`,
      verify: { kind: "value", inputs: { a: "3", b: "1", c: "8+4*I" } },
      options: [
        { key: "A", text: t`$2 - 2 i$`, correct: false, misconceptionId: "C08-M3", value: "2 - 2*I" },
        { key: "B", text: t`$2 + 2 i$`, correct: true, value: "2 + 2*I" },
        { key: "C", text: t`$2 + i$`, correct: false, misconceptionId: "C08-M1", value: "2 + I" },
        { key: "D", text: t`$1 + 4 i$`, correct: false, misconceptionId: "C08-M2", value: "1 + 4*I" },
      ],
      solution: {
        steps: [
          t`Substitute $z = x + iy$: $3(x + iy) + (x - iy) = 4x + 2iy$.`,
          t`Equate parts: $4x = 8$ and $2y = 4$.`,
          t`So $x = 2$, $y = 2$, and $z = 2 + 2i$.`,
        ],
      },
    },
  ],
};
