import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`The region $x + y \ge 5$, $x, y \ge 0$. **Is there a largest $x$ in it?**`,
    reveal: t`No. $(100, 0)$, $(1000, 0)$, … are all in it. The region runs off to infinity: it is **unbounded**.`,
  },
  explanation: {
    intuition: t`Look at the shape before you optimise. **Bounded:** a closed polygon you could draw a circle around. **Unbounded:** it runs off to infinity in some direction. **Empty:** no point at all, because the constraints contradict each other.`,
    formal: t`**Bounded:** some constraint caps $x$ and some caps $y$. For example $x + y \le 6$ caps both, since $x, y \ge 0$.

**Unbounded:** you can walk off to infinity and stay inside. Test a far point such as $(100, 0)$ or $(0, 100)$ against every constraint.

**Empty:** prove it by combining the inequalities. $x + y \ge 8$ and $x + 2y \le 6$: since $y \ge 0$, $x + 2y \ge x + y \ge 8 > 6$. No point fits both.

**The signs alone don't decide it:**
- $x - 2y \le 2$ uses only $\le$, yet $(0, 100)$ satisfies it: unbounded.
- $x + y \ge 1$, $x \le 3$, $y \le 2$ has a $\ge$, yet it is bounded.`,
    worked: {
      prompt: t`Is the region $x - y \le 2$, $x + 2y \ge 4$, $x, y \ge 0$ bounded?`,
      steps: [
        t`Shade it: above $x + 2y = 4$ and above $x - y = 2$, in the first quadrant.`,
        t`Does anything cap $y$? Try a far point, $(0, 100)$: $0 - 100 = -100 \le 2$ and $0 + 200 = 200 \ge 4$. It is in.`,
        t`The region runs off upward: it is **unbounded**.`,
      ],
      answer: t`Unbounded`,
      figure: {
        alt: "The region above x + 2y = 4 and above x − y = 2 in the first quadrant, shaded; it has no top edge, and an arrow points straight up through it towards (0, 100).",
        axes: "xy",
        view: { x: [-0.8, 8], y: [-0.8, 8] },
        elements: [
          { kind: "line", through: [[0, 2], [-2, 3]], step: 1 },
          { kind: "label", at: [2, 1], label: "x + 2y ≥ 4", labelAt: "sw", step: 1 },
          { kind: "line", through: [[0, -2], [1, -1]], step: 1 },
          { kind: "label", at: [5, 3], label: "x − y ≤ 2", labelAt: "se", step: 1 },
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, -2], [1, -1]] }, { kind: "halfPlane", through: [[0, 2], [2, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
          { kind: "vector", from: [1.5, 3.5], to: [1.5, 7.5], label: "towards (0, 100)", labelAt: "e", step: 2 },
          { kind: "label", at: [5, 6], label: "unbounded", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The line x + y = 5 and the shaded region above it in the first quadrant; an arrow along the x-axis shows the region running on to (100, 0) and beyond, so it is unbounded.",
      axes: "xy",
      view: { x: [-0.9, 9], y: [-0.9, 9] },
      elements: [
        { kind: "line", through: [[0, 5], [-1, 6]], step: 1 },
        { kind: "label", at: [2.6, 1.4], label: "x + y = 5", labelAt: "sw", step: 1 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[0, 5], [1, 4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 2 },
        { kind: "label", at: [5, 5], label: "x + y ≥ 5", step: 2 },
        { kind: "vector", from: [5.5, 1], to: [8.7, 1], label: "on to (100, 0)", labelAt: "n", step: 3 },
      ],
    },
    visualSpec: t`Drag the constraint lines; the shaded region is tagged bounded, unbounded or empty as it changes, with an arrow showing the open direction when it is unbounded.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Judging by the signs: any $\ge$ means unbounded, all $\le$ means bounded`,
      remediation: t`Look at the region, not the signs. $x - 2y \le 2$ uses only $\le$ and is unbounded; $x + y \ge 1$, $x \le 3$, $y \le 2$ has a $\ge$ and is bounded.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M2",
      mistake: "Thinking every first-quadrant region is bounded",
      remediation: t`$x \ge 0$ and $y \ge 0$ close only two sides. Unless other constraints cap both $x$ and $y$, the region runs off.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: "Calling an unbounded region empty",
      remediation: "Unbounded means too many points, not none. Empty means the constraints contradict each other.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: t`Thinking a $\ge$ and a $\le$ constraint always contradict`,
      remediation: "Opposite signs keep opposite sides of different lines, and those sides usually overlap. Test a point.",
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "authored" },
      stem: t`The region $2x + 3y \le 18$, $x + y \ge 10$, $x, y \ge 0$ is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["2*x + 3*y <= 18", "x + y >= 10"] } },
      options: [
        { key: "A", text: t`Bounded`, correct: false, misconceptionId: "C04-M2", value: "1" },
        { key: "B", text: t`Empty: no point satisfies them all`, correct: true, value: "3" },
        { key: "C", text: t`Unbounded`, correct: false, misconceptionId: "C04-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`$2x + 3y \le 18$ keeps the triangle under the line through $(9, 0)$ and $(0, 6)$.`,
          t`$x + y \ge 10$ keeps the side beyond the line through $(10, 0)$ and $(0, 10)$. The two shadings never meet.`,
          t`Check: with $y \ge 0$, $2x + 3y = 2(x + y) + y \ge 20 > 18$. No point fits both: the region is **empty**.`,
        ],
        figure: {
          alt: "Two separate shadings that do not overlap: the triangle under 2x + 3y = 18, and the side of x + y = 10 away from the origin. No point lies in both.",
          axes: "xy",
          view: { x: [-1.2, 12], y: [-1.2, 11] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [-3, 8]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 1 },
            { kind: "line", through: [[0, 6], [-3, 8]], step: 1 },
            { kind: "label", at: [0.8, 2.4], label: "2x + 3y ≤ 18", labelAt: "e", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 10], [1, 9]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 2 },
            { kind: "line", through: [[0, 10], [-1, 11]], step: 2 },
            { kind: "label", at: [7.5, 5.5], label: "x + y ≥ 10", labelAt: "ne", step: 2 },
            { kind: "label", at: [7, 8.5], label: "no point in both", tone: "bad", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "authored" },
      stem: t`The region $-x + y \le 1$, $-x + 3y \le 9$, $x, y \ge 0$ is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["-x + y <= 1", "-x + 3*y <= 9"] } },
      options: [
        { key: "A", text: t`Empty: no point satisfies them all`, correct: false, misconceptionId: "C04-M3", value: "3" },
        { key: "B", text: t`Unbounded`, correct: true, value: "2" },
        { key: "C", text: t`Bounded`, correct: false, misconceptionId: "C04-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`Shade the first-quadrant side of $-x + y = 1$ and of $-x + 3y = 9$ that holds $(0, 0)$.`,
          t`Nothing caps $x$. Try a far point, $(100, 0)$: $-100 \le 1$ and $-100 \le 9$, so it is in.`,
          t`The region runs off to the right: **unbounded**.`,
        ],
        figure: {
          alt: "The region under −x + y = 1 and under −x + 3y = 9 in the first quadrant, shaded; it is open to the right, and an arrow along it points towards (100, 0).",
          axes: "xy",
          view: { x: [-0.9, 9], y: [-0.9, 6.5] },
          elements: [
            { kind: "line", through: [[0, 1], [-1, 0]], step: 1 },
            { kind: "label", at: [2.2, 2.4], label: "−x + y ≤ 1", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, 3], [-3, 2]], step: 1 },
            { kind: "label", at: [6, 5], label: "−x + 3y ≤ 9", labelAt: "nw", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [-1, 0]] }, { kind: "halfPlane", through: [[0, 3], [-3, 2]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "vector", from: [4, 1], to: [8.5, 1], label: "towards (100, 0)", labelAt: "n", step: 2 },
            { kind: "label", at: [6, 2.8], label: "unbounded", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`The region $x + y \ge 2$, $x \le 4$, $y \le 3$, $x, y \ge 0$ is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 2", "x <= 4", "y <= 3"] } },
      options: [
        { key: "A", text: t`Unbounded`, correct: false, misconceptionId: "C04-M1", value: "2" },
        { key: "B", text: t`Empty: no point satisfies them all`, correct: false, misconceptionId: "C04-M4", value: "3" },
        { key: "C", text: t`Bounded`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`$x \le 4$ caps $x$ and $y \le 3$ caps $y$: the region fits inside the box $0 \le x \le 4$, $0 \le y \le 3$.`,
          t`$(2, 1)$ is in it: $2 + 1 = 3 \ge 2$, $2 \le 4$, $1 \le 3$. So it is not empty.`,
          t`A closed pentagon with a corner cut off by $x + y = 2$: **bounded**.`,
        ],
        figure: {
          alt: "The pentagon with corners (2, 0), (4, 0), (4, 3), (0, 3) and (0, 2), shaded, closed in by x ≤ 4, y ≤ 3 and x + y ≥ 2; the point (2, 1) lies inside.",
          axes: "xy",
          view: { x: [-0.55, 5.5], y: [-0.55, 4.5] },
          elements: [
            { kind: "line", through: [[4, 0], [4, 1]], step: 1 },
            { kind: "label", at: [4, 4], label: "x ≤ 4", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 3], [-1, 3]], step: 1 },
            { kind: "label", at: [4.8, 3], label: "y ≤ 3", labelAt: "n", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [1, 1]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[0, 3], [-1, 3]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [2, 1], tone: "good", label: "(2, 1)", labelAt: "e", step: 2 },
            { kind: "line", through: [[0, 2], [-1, 3]], step: 3 },
            { kind: "label", at: [2.2, 0.35], label: "x + y ≥ 2", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`The region $x + 2y \le 4$, $x + y \ge 6$, $x, y \ge 0$ is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 2*y <= 4", "x + y >= 6"] } },
      options: [
        { key: "A", text: t`Unbounded`, correct: false, misconceptionId: "C04-M1", value: "2" },
        { key: "B", text: t`Bounded`, correct: false, misconceptionId: "C04-M2", value: "1" },
        { key: "C", text: t`Empty: no point satisfies them all`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$x + 2y \le 4$ keeps the triangle under the line through $(4, 0)$ and $(0, 2)$.`,
          t`$x + y \ge 6$ keeps the side beyond the line through $(6, 0)$ and $(0, 6)$. The two shadings never meet.`,
          t`Check: with $y \ge 0$, $x + 2y \ge x + y \ge 6 > 4$. No point fits both: the region is **empty**.`,
        ],
        figure: {
          alt: "Two separate shadings that do not overlap: the triangle under x + 2y = 4, and the side of x + y = 6 away from the origin. No point lies in both.",
          axes: "xy",
          view: { x: [-0.75, 7.5], y: [-0.75, 7] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [-2, 3]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 1 },
            { kind: "line", through: [[0, 2], [-2, 3]], step: 1 },
            { kind: "label", at: [0.25, 2.45], label: "x + 2y ≤ 4", labelAt: "e", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [1, 5]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 2 },
            { kind: "line", through: [[0, 6], [-1, 7]], step: 2 },
            { kind: "label", at: [4.9, 2.6], label: "x + y ≥ 6", labelAt: "e", step: 2 },
            { kind: "label", at: [4.5, 5.5], label: "no point in both", tone: "bad", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`The region $x + y \ge 4$, $x - y \le 2$, $x, y \ge 0$ is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 4", "x - y <= 2"] } },
      options: [
        { key: "A", text: t`Unbounded`, correct: true, value: "2" },
        { key: "B", text: t`Bounded`, correct: false, misconceptionId: "C04-M2", value: "1" },
        { key: "C", text: t`Empty: no point satisfies them all`, correct: false, misconceptionId: "C04-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`Shade the first-quadrant side of $x + y = 4$ away from $(0, 0)$, and the side of $x - y = 2$ that holds $(0, 0)$.`,
          t`Nothing caps $y$. Try a far point, $(0, 100)$: $100 \ge 4$ and $-100 \le 2$, so it is in.`,
          t`The region runs off upward: **unbounded**.`,
        ],
        figure: {
          alt: "The region above x + y = 4 and above x − y = 2 in the first quadrant, shaded; it has no top edge, and an arrow points up through it towards (0, 100).",
          axes: "xy",
          view: { x: [-0.9, 8], y: [-0.9, 9] },
          elements: [
            { kind: "line", through: [[0, 4], [-1, 5]], step: 1 },
            { kind: "label", at: [0.4, 2.6], label: "x + y ≥ 4", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, -2], [1, -1]], step: 1 },
            { kind: "label", at: [5, 3], label: "x − y ≤ 2", labelAt: "se", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [1, 3]] }, { kind: "halfPlane", through: [[0, -2], [1, -1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "vector", from: [2, 4.5], to: [2, 8.2], label: "towards (0, 100)", labelAt: "e", step: 2 },
            { kind: "label", at: [4.5, 6.5], label: "unbounded", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`The region $x + y \ge 3$, $2x + y \le 8$, $y \le 4$, $x, y \ge 0$ is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 3", "2*x + y <= 8", "y <= 4"] } },
      options: [
        { key: "A", text: t`Empty: no point satisfies them all`, correct: false, misconceptionId: "C04-M4", value: "3" },
        { key: "B", text: t`Bounded`, correct: true, value: "1" },
        { key: "C", text: t`Unbounded`, correct: false, misconceptionId: "C04-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`$2x + y \le 8$ caps $x$ (at most $4$) and $y \le 4$ caps $y$: the region is closed in.`,
          t`$(2, 2)$ is in it: $2 + 2 = 4 \ge 3$, $4 + 2 = 6 \le 8$, $2 \le 4$. So it is not empty.`,
          t`A closed pentagon: **bounded**.`,
        ],
        figure: {
          alt: "The pentagon with corners (3, 0), (4, 0), (2, 4), (0, 4) and (0, 3), shaded, closed in by 2x + y ≤ 8, y ≤ 4 and x + y ≥ 3; the point (2, 2) lies inside.",
          axes: "xy",
          view: { x: [-0.55, 5.5], y: [-0.55, 5.5] },
          elements: [
            { kind: "line", through: [[0, 8], [-1, 10]], step: 1 },
            { kind: "label", at: [3.5, 1], label: "2x + y ≤ 8", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 4], [-1, 4]], step: 1 },
            { kind: "label", at: [0.8, 4], label: "y ≤ 4", labelAt: "n", step: 1 },
            { kind: "line", through: [[0, 3], [-1, 4]], step: 1 },
            { kind: "label", at: [0.35, 1.6], label: "x + y ≥ 3", labelAt: "se", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 3], [1, 2]] }, { kind: "halfPlane", through: [[0, 8], [-1, 10]] }, { kind: "halfPlane", through: [[0, 4], [-1, 4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [2, 2], tone: "good", label: "(2, 2)", labelAt: "w", step: 2 },
          ],
        },
      },
    },
  ],
};
