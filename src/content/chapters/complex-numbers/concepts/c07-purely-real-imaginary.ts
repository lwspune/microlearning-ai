import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`For which $k$ does $(k - 2) + 5i$ lie on the imaginary axis? **What has to vanish?**`,
    reveal: t`The real part: $k - 2 = 0$, so $k = 2$. Every point on the imaginary axis has real part zero.`,
  },
  explanation: {
    intuition: t`Purely real means no imaginary part; purely imaginary means no real part. So set the **other** part to zero. If the number is a fraction, rationalise it first: the condition applies to the simplified number, not to its numerator.`,
    formal: t`$z$ is **purely real** $\iff \operatorname{Im} z = 0 \iff z = \bar z$.

$z$ is **purely imaginary** $\iff \operatorname{Re} z = 0 \iff z = -\bar z$ (usually with $z \ne 0$ as well).

For a quotient $\dfrac pq$, rationalise to the form $x + iy$ first, then apply the condition. Whether the numerator alone is real or imaginary is **not** the test.`,
    worked: {
      prompt: t`For which real $x$ is $\dfrac{x + 2i}{1 - i}$ purely real?`,
      steps: [
        t`Rationalise: $\dfrac{(x + 2i)(1 + i)}{2} = \dfrac{(x - 2) + (x + 2)i}{2}$.`,
        t`Purely real means the imaginary part is zero: $x + 2 = 0$.`,
      ],
      answer: t`$x = -2$`,
    },
    visualSpec: t`A slider for the parameter moves $z$ across the Argand plane. The point turns green as it crosses the real axis (purely real) or the imaginary axis (purely imaginary).`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Setting the wrong part to zero",
      remediation: "Purely imaginary means the **real** part is zero; purely real means the **imaginary** part is zero.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M2",
      mistake: "Testing only the numerator of a fraction",
      remediation: "Rationalise first. A fraction can be purely real or purely imaginary even when its numerator isn't.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M3",
      mistake: t`Solving $ax + b = 0$ as $x = \dfrac ba$`,
      remediation: t`Move $b$ across with its sign changed: $x = -\dfrac ba$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $(x - 3) + (x + 2)i$ purely imaginary?`,
      verify: { kind: "value", inputs: {  }, params: { num: "(x-3) + (x+2)*I", want: "imag" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C07-M1", value: "-2" },
        { key: "C", text: t`$-3$`, correct: false, misconceptionId: "C07-M3", value: "-3" },
      ],
    },
    {
      id: "C07-Q2",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $(2x + 1) + (x - 4)i$ purely real?`,
      verify: { kind: "value", inputs: {  }, params: { num: "(2*x+1) + (x-4)*I", want: "real" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "-1/2" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C07-M3", value: "-4" },
      ],
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $\dfrac{x + i}{1 + i}$ purely imaginary?`,
      verify: { kind: "value", inputs: {  }, params: { num: "x + I", den: "1 + I", want: "imag" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C07-M2", value: "0" },
        { key: "B", text: t`$-1$`, correct: true, value: "-1" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
      ],
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $\dfrac{2 + xi}{3 + 4i}$ purely real?`,
      verify: { kind: "value", inputs: {  }, params: { num: "2 + x*I", den: "3 + 4*I", want: "real" } },
      options: [
        { key: "A", text: t`$\frac{8}{3}$`, correct: true, value: "8/3" },
        { key: "B", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C07-M1", value: "-3/2" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C07-M2", value: "0" },
        { key: "D", text: t`$- \frac{8}{3}$`, correct: false, misconceptionId: "C07-M3", value: "-8/3" },
      ],
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $(x + 3i)(2 + i)$ purely imaginary?`,
      verify: { kind: "value", inputs: {  }, params: { num: "(x + 3*I)*(2 + I)", want: "imag" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "B", text: t`$-6$`, correct: false, misconceptionId: "C07-M1", value: "-6" },
        { key: "C", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C07-M3", value: "-3/2" },
      ],
    },
  ],
};
