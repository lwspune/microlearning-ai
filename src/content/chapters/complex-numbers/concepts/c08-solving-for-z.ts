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
    intuition: t`When $z$ and $\bar z$ appear together, you can't just divide through. Put $z = x + iy$ and $\bar z = x - iy$, simplify each side into real and imaginary parts, then equate parts. One complex equation gives two real equations for $x$ and $y$.`,
    formal: t`To solve $az + b\bar z = c$:
- Substitute $z = x + iy$ and $\bar z = x - iy$.
- Collect into the form $(\ldots) + i(\ldots)$.
- Equate real parts and imaginary parts, then solve the two real equations.

Don't treat $\bar z$ as if it were $z$: they differ unless $z$ is real.`,
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
    },
  ],
};
