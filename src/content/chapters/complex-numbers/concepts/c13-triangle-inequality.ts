import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`$\lvert z \rvert = 2$, so $z$ lies on a circle of radius 2. **How far can $z$ be from the point $-5$?**`,
    reveal: t`At most $7$ (at $z = 2$, the far side) and at least $3$ (at $z = -2$, the near side). The distance ranges from $5 - 2$ to $5 + 2$.`,
  },
  explanation: {
    intuition: t`The triangle inequality says a detour is never shorter than the direct route: $\lvert z_1 + z_2 \rvert \le \lvert z_1 \rvert + \lvert z_2 \rvert$. For $z$ on the circle $\lvert z \rvert = r$, the distance to a fixed point is greatest on the far side of the circle and least on the near side.`,
    formal: t`**Triangle inequality:** $\big\lvert \lvert z_1 \rvert - \lvert z_2 \rvert \big\rvert \le \lvert z_1 + z_2 \rvert \le \lvert z_1 \rvert + \lvert z_2 \rvert$.

If $\lvert z \rvert = r$, then for a fixed $c$:
- the greatest value of $\lvert z + c \rvert$ is $r + \lvert c \rvert$
- the least value is $\big\lvert r - \lvert c \rvert \big\rvert$

Both values are reached, at the two points of the circle in line with $0$ and $-c$.`,
    worked: {
      prompt: t`If $\lvert z \rvert = 5$, find the least value of $\lvert z - 3i \rvert$.`,
      steps: [
        t`Here $c = -3i$, so $\lvert c \rvert = 3$.`,
        t`Least value: $\lvert 5 - 3 \rvert = 2$, reached at $z = 5i$.`,
      ],
      answer: t`$2$`,
    },
    visualSpec: t`A circle $\lvert z \rvert = r$ and a fixed point $-c$. Dragging $z$ around the circle shows the distance live, with the far and near points marked as the greatest and least values.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Giving the other extreme (greatest for least, or least for greatest)",
      remediation: t`The far side of the circle gives the greatest distance, $r + \lvert c \rvert$; the near side gives the least, $\big\lvert r - \lvert c \rvert \big\rvert$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: t`Writing the least value as $\lvert c \rvert - r$ when the circle is the bigger one`,
      remediation: t`A distance can't be negative. The least value is $\big\lvert r - \lvert c \rvert \big\rvert$; when $r > \lvert c \rvert$ that is $r - \lvert c \rvert$.`,
      fallback: { kind: "ext", topic: "absolute value" },
    },
    {
      id: "C13-M3",
      mistake: t`Measuring $\lvert a + ib \rvert$ as $\lvert a \rvert + \lvert b \rvert$`,
      remediation: t`$\lvert a + ib \rvert = \sqrt{a^2 + b^2}$, the straight-line distance, not $\lvert a \rvert + \lvert b \rvert$.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  engineNotes: [
    "C13-M2 only differs from the key when r > |c| (C13-Q3, C13-Q6).",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 2$, the greatest value of $\lvert z + 3 - 4i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "2", c: "3-4*I" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C13-M1", value: "3" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C13-M3", value: "9" },
        { key: "C", text: t`$7$`, correct: true, value: "7" },
      ],
    },
    {
      id: "C13-Q2",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 4$, the least value of $\lvert z - 6 - 8i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "4", c: "-6-8*I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$14$`, correct: false, misconceptionId: "C13-M1", value: "14" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C13-M3", value: "10" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
      ],
    },
    {
      id: "C13-Q3",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 7$, the least value of $\lvert z + 3 + 4i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "7", c: "3+4*I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C13-M3", value: "0" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C13-M2", value: "-2" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C13-M1", value: "12" },
      ],
    },
    {
      id: "C13-Q4",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 3$, the greatest value of $\lvert z - 5 + 12i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "3", c: "-5+12*I" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$16$`, correct: true, value: "16" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C13-M1", value: "10" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C13-M3", value: "20" },
      ],
    },
    {
      id: "C13-Q5",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 1$, the least value of $\lvert z - 1 - i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "1", c: "-1-I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$-1 + \sqrt{2}$`, correct: true, value: "-1 + sqrt(2)" },
        { key: "B", text: t`$1 + \sqrt{2}$`, correct: false, misconceptionId: "C13-M1", value: "1 + sqrt(2)" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C13-M3", value: "1" },
      ],
    },
    {
      id: "C13-Q6",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 4$, the least value of $\lvert z + 1 - i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "4", c: "1-I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$-4 + \sqrt{2}$`, correct: false, misconceptionId: "C13-M2", value: "-4 + sqrt(2)" },
        { key: "B", text: t`$\sqrt{2} + 4$`, correct: false, misconceptionId: "C13-M1", value: "sqrt(2) + 4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C13-M3", value: "2" },
        { key: "D", text: t`$4 - \sqrt{2}$`, correct: true, value: "4 - sqrt(2)" },
      ],
    },
  ],
};
