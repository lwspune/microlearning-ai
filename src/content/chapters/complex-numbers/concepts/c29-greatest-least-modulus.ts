import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c29: Concept = {
  id: "C29",
  status: "approved",
  hook: {
    prompt: t`$z$ can be anywhere on the circle $|z - 6 - 8i| = 3$. **How close can $z$ get to the origin?**`,
    reveal: t`$10 - 3 = 7$. The centre is $10$ from the origin, and the nearest point of the circle is $3$ closer, on the line through the origin and the centre.`,
  },
  explanation: {
    intuition: t`The nearest and farthest points of a circle from a point $c$ lie on the line through $c$ and the centre. So add or subtract the radius from the distance to the centre. If $c$ is inside a disc, the least distance is $0$.`,
    formal: t`For $z$ on the circle $|z - a| = r$, with $d = |a - c|$:
- greatest $|z - c| = d + r$
- least $|z - c| = |d - r|$

For the disc $|z - a| \le r$ the greatest value is the same, $d + r$. The least is $0$ if $c$ is inside ($d < r$), and $d - r$ otherwise.

Always check that the extreme point is allowed by the region.`,
    worked: {
      prompt: t`For $|z - 2i| \le 1$, find the greatest and least values of $|z|$.`,
      steps: [
        t`Distance from the origin to the centre: $d = |2i| = 2$.`,
        t`Greatest: $2 + 1 = 3$.`,
        t`The origin is outside the disc ($2 > 1$), so the least is $2 - 1 = 1$.`,
      ],
      answer: t`Greatest $3$, least $1$.`,
    },
    visualSpec: t`A circle or disc and a point $c$. The line through $c$ and the centre marks the nearest and farthest points; dragging $c$ inside the disc snaps the least distance to 0.`,
  },
  misconceptions: [
    {
      id: "C29-M1",
      mistake: "Giving the other extreme",
      remediation: t`The far point gives $d + r$; the near point gives $d - r$ (or $0$ inside a disc).`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C29-M2",
      mistake: t`Using $d - r$ when the point is inside the disc`,
      remediation: t`If $c$ is inside the disc, $z$ can sit right on it: the least value is $0$.`,
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C29-M3",
      mistake: t`Measuring the distance to the centre as $|p| + |q|$`,
      remediation: t`$|p + qi| = \sqrt{p^2 + q^2}$, the straight-line distance.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  items: [
    {
      id: "C29-Q1",
      source: { kind: "authored" },
      stem: t`On the circle $|z - 3 - 4i| = 2$, the greatest value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "3+4*I", r: "2", c: "0" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C29-M1", value: "3" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C29-M3", value: "9" },
        { key: "C", text: t`$7$`, correct: true, value: "7" },
      ],
    },
    {
      id: "C29-Q2",
      source: { kind: "authored" },
      stem: t`For $|z - 3 - 4i| \le 2$, the least value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "3+4*I", r: "2", c: "0" }, params: { want: "min", region: "disc" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C29-M1", value: "7" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C29-M3", value: "5" },
      ],
    },
    {
      id: "C29-Q3",
      source: { kind: "authored" },
      stem: t`For $|z - 1 - i| \le 3$, the least value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "1+I", r: "3", c: "0" }, params: { want: "min", region: "disc" } },
      options: [
        { key: "A", text: t`$\sqrt2 - 3$`, correct: false, misconceptionId: "C29-M2", value: "-3 + sqrt(2)" },
        { key: "B", text: t`$\sqrt{2} + 3$`, correct: false, misconceptionId: "C29-M1", value: "sqrt(2) + 3" },
        { key: "C", text: t`$0$`, correct: true, value: "0" },
      ],
    },
    {
      id: "C29-Q4",
      source: { kind: "authored" },
      stem: t`On the circle $|z + 2 - 2i| = 1$, the greatest value of $|z - 1 + 2i|$ is:`,
      verify: { kind: "value", inputs: { a: "-2+2*I", r: "1", c: "1-2*I" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C29-M3", value: "8" },
        { key: "B", text: t`$6$`, correct: true, value: "6" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C29-M1", value: "4" },
      ],
    },
    {
      id: "C29-Q5",
      source: { kind: "authored" },
      stem: t`On the circle $|z - 5| = 3$, the least value of $|z + 3i|$ is:`,
      verify: { kind: "value", inputs: { a: "5", r: "3", c: "-3*I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$\sqrt{34} - 3$`, correct: true, value: "-3 + sqrt(34)" },
        { key: "B", text: t`$3 + \sqrt{34}$`, correct: false, misconceptionId: "C29-M1", value: "3 + sqrt(34)" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C29-M3", value: "5" },
      ],
    },
  ],
};
