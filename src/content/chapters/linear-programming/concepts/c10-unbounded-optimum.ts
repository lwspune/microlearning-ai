import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Maximise $Z = x + y$ over $x + y \ge 3$, $x, y \ge 0$. The corners $(3, 0)$ and $(0, 3)$ both give $Z = 3$. **Is $3$ the maximum?**`,
    reveal: t`No. $(100, 0)$ is in the region and gives $Z = 100$. The region runs off and $Z$ grows without limit: there is **no maximum**. But $3$ **is** the minimum, since every point has $x + y \ge 3$.`,
  },
  explanation: {
    intuition: t`On an unbounded region the corners still give the candidate, but you must check it. Draw the line $Z = M$ through the best corner. If part of the region lies on the better side of that line, $Z$ keeps improving forever and there is no optimum. If none does, $M$ is the answer.`,
    formal: t`**The rule (NCERT)**

If the region is unbounded, find $Z$ at every corner. Let $M$ be the largest value and $m$ the smallest.
- $M$ is the maximum only if the open half-plane $Z > M$ has no point in common with the region. Otherwise $Z$ has **no maximum**.
- $m$ is the minimum only if the open half-plane $Z < m$ has no point in common with the region. Otherwise $Z$ has **no minimum**.

**Quick check**

Which way does the region run off? If walking that way improves $Z$, there is no optimum. Test a far point such as $(100, 0)$ or $(0, 100)$.
- Positive coefficients, region running off right or up: $Z$ grows, so **no maximum**. A minimum still exists.
- $Z = x - 3y$ with the region running off upward: $Z$ falls, so **no minimum**.

**Unbounded is not empty**

An unbounded region has more points, not none. It can still have a minimum (or a maximum).`,
    worked: {
      prompt: t`Minimise $Z = 2x + 5y$ subject to $x + y \ge 4$, $x + 3y \ge 6$, $x, y \ge 0$.`,
      steps: [
        t`Shade the region: it is unbounded. Corners: $(0, 4)$ on $x + y = 4$, $(6, 0)$ on $x + 3y = 6$, and where the lines cross: subtracting gives $2y = 2$, so $(3, 1)$.`,
        t`$Z$ at the corners: $2(0) + 5(4) = 20$, $2(3) + 5(1) = 11$, $2(6) + 5(0) = 12$. The smallest is $m = 11$.`,
        t`Check $2x + 5y < 11$: draw $2x + 5y = 11$. It touches the region only at $(3, 1)$, and the side towards the origin holds no point of the region. Indeed $2x + 5y = \tfrac12(x + y) + \tfrac32(x + 3y)$ $\ge 2 + 9$ $= 11$.`,
      ],
      answer: t`Minimum $Z = 11$, at $(3, 1)$.`,
      figure: {
        alt: "The region x + y ≥ 4, x + 3y ≥ 6 in the first quadrant, shaded and open up and to the right, with corners (0, 4), (3, 1) and (6, 0) and their Z values 20, 11 and 12. The dashed line 2x + 5y = 11 touches the region only at (3, 1); the side Z < 11, towards the origin, is shaded grey and holds no point of the region.",
        axes: "xy",
        view: { x: [-0.75, 7.5], y: [-0.75, 5.5] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [1, 3]] }, { kind: "halfPlane", through: [[0, 2], [3, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
          { kind: "line", through: [[0, 4], [-1, 5]], step: 1 },
          { kind: "line", through: [[0, 2], [-3, 3]], step: 1 },
          { kind: "point", at: [0, 4], label: "(0, 4): Z = 20", labelAt: "e", step: 2 },
          { kind: "point", at: [3, 1], label: "(3, 1): Z = 11", labelAt: "ne", step: 2 },
          { kind: "point", at: [6, 0], label: "(6, 0): Z = 12", labelAt: "n", step: 2 },
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2.2], [-5, 4.2]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 3 },
          { kind: "line", through: [[0, 2.2], [-5, 4.2]], dashed: true, tone: "accent", step: 3 },
          { kind: "label", at: [1.2, 0.8], label: "Z < 11", tone: "muted", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The region x + y ≥ 3 in the first quadrant, shaded, with corners (3, 0) and (0, 3). The dashed line Z = 3 runs along its edge, a second dashed line Z = 6 lies further out inside the region, and arrows show Z growing as the region runs off towards (100, 0).",
      axes: "xy",
      view: { x: [-0.8, 8], y: [-0.8, 8] },
      elements: [
        { kind: "region", within: [{ kind: "halfPlane", through: [[0, 3], [1, 2]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
        { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "n", step: 1 },
        { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "e", step: 1 },
        { kind: "line", through: [[0, 3], [-1, 4]], dashed: true, tone: "accent", step: 2 },
        { kind: "label", at: [1, 2], label: "Z = 3", labelAt: "ne", step: 2 },
        { kind: "line", through: [[0, 6], [-1, 7]], dashed: true, tone: "muted", step: 3 },
        { kind: "label", at: [1.5, 4.5], label: "Z = 6", labelAt: "ne", tone: "muted", step: 3 },
        { kind: "vector", from: [2.5, 2.5], to: [5.5, 5.5], label: "Z grows", labelAt: "se", step: 3 },
        { kind: "vector", from: [4.5, 0.8], to: [7.7, 0.8], label: "(100, 0): Z = 100", labelAt: "n", tone: "bad", step: 4 },
      ],
    },
    visualSpec: t`Slide the dashed line Z = k across an unbounded region; the part of the region on the better side of the best corner's line lights up, and when it never runs out Z is tagged as having no optimum.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Taking the best corner without checking the unbounded region",
      remediation: t`On an unbounded region the best corner is only a candidate. Check the open half-plane $Z > M$ (or $Z < m$): if it meets the region, there is no optimum.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M2",
      mistake: "Thinking an unbounded region never has an optimum",
      remediation: t`An unbounded region can still have a minimum (or maximum). Check the half-plane $Z < m$ (or $Z > M$): if it misses the region, $m$ (or $M$) is the answer.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C10-M3",
      mistake: "Thinking an unbounded region has no feasible solution",
      remediation: "Unbounded means more points, not none. The corners themselves are feasible points.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C10-M4",
      mistake: "Mixing up the candidates: the smallest corner value for a maximum, the largest for a minimum",
      remediation: t`For a maximum the candidate is the largest corner value $M$, then check $Z > M$. For a minimum it is the smallest, $m$, then check $Z < m$. The other extreme is never the answer.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  engineNotes: [
    "C10-M1 gives the key whenever the optimum exists, so it is diagnosed only on items with no optimum (Q1, Q4, Q5).",
    "C10-M2 gives the key whenever there is no optimum, so it is diagnosed only on items where the optimum exists (Q2, Q3).",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "authored" },
      stem: t`Maximise $Z = 3x + 2y$ subject to $x + y \ge 8$, $3x + 5y \ge 15$, $x, y \ge 0$. The region is unbounded. Then:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 8", "3*x + 5*y >= 15"], z: "3*x + 2*y", goal: "max" } },
      options: [
        { key: "A", text: t`$24$`, correct: false, misconceptionId: "C10-M1", value: "24" },
        { key: "B", text: t`The LPP has no feasible solution`, correct: false, misconceptionId: "C10-M3", value: "empty" },
        { key: "C", text: t`There is no maximum: $Z$ grows without limit on the region`, correct: true, value: "nomax" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C10-M4", value: "16" },
      ],
      solution: {
        steps: [
          t`Corners: $x + y = 8$ meets the axes at $(8, 0)$ and $(0, 8)$. The line $3x + 5y = 15$ lies below it and never touches the region.`,
          t`$Z = 3x + 2y$ at the corners: $24$ and $16$. The largest is $M = 24$.`,
          t`The region is unbounded, so check $3x + 2y > 24$. The point $(100, 0)$ is in the region and gives $Z = 300 > 24$: that side meets the region.`,
          t`Walk right along the $x$-axis and $Z$ keeps rising. There is no maximum: $Z$ grows without limit on the region.`,
        ],
        figure: {
          alt: "The region x + y ≥ 8 in the first quadrant, shaded and open up and to the right; the line 3x + 5y = 15 is dashed and grey below it. Corners (8, 0) with Z = 24 and (0, 8) with Z = 16. The dashed line 3x + 2y = 24 passes through (8, 0); the side Z > 24, shaded grey, overlaps the region, and an arrow runs on towards (100, 0).",
          axes: "xy",
          view: { x: [-1.3, 12], y: [-1.3, 13] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 8], [1, 7]] }, { kind: "halfPlane", through: [[0, 3], [5, 0]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "line", through: [[0, 8], [-1, 9]], step: 1 },
            { kind: "line", through: [[0, 3], [-5, 6]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [0.5, 2.7], label: "3x + 5y = 15", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [8, 0], label: "(8, 0): Z = 24", labelAt: "n", step: 2 },
            { kind: "point", at: [0, 8], label: "(0, 8): Z = 16", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 12], [2, 9]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 3 },
            { kind: "line", through: [[0, 12], [-2, 15]], dashed: true, tone: "accent", step: 3 },
            { kind: "label", at: [4, 6], label: "Z = 24", labelAt: "ne", step: 3 },
            { kind: "label", at: [9.5, 8], label: "Z > 24", tone: "muted", step: 3 },
            { kind: "vector", from: [8.5, 1.8], to: [11.5, 1.8], label: "towards (100, 0)", labelAt: "n", tone: "bad", step: 3 },
            { kind: "label", at: [5, 11], label: "no maximum", tone: "bad", step: 4 },
          ],
        },
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`Minimise $Z = 3x + 2y$ subject to $x + y \ge 8$, $3x + 5y \ge 15$, $x, y \ge 0$. The region is unbounded. Then:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 8", "3*x + 5*y >= 15"], z: "3*x + 2*y", goal: "min" } },
      options: [
        { key: "A", text: t`$16$`, correct: true, value: "16" },
        { key: "B", text: t`There is no minimum: $Z$ falls without limit on the region`, correct: false, misconceptionId: "C10-M2", value: "nomin" },
        { key: "C", text: t`The LPP has no feasible solution`, correct: false, misconceptionId: "C10-M3", value: "empty" },
        { key: "D", text: t`$24$`, correct: false, misconceptionId: "C10-M4", value: "24" },
      ],
      solution: {
        steps: [
          t`Corners: $x + y = 8$ meets the axes at $(8, 0)$ and $(0, 8)$. The line $3x + 5y = 15$ lies below it and never touches the region.`,
          t`$Z = 3x + 2y$ at the corners: $24$ and $16$. The smallest is $m = 16$.`,
          t`The region is unbounded, so check $3x + 2y < 16$. On the region $3x + 2y = 2(x + y) + x \ge 16$, so that side holds no point of the region.`,
          t`The minimum is $16$, at $(0, 8)$.`,
        ],
        figure: {
          alt: "The region x + y ≥ 8 in the first quadrant, shaded and open up and to the right; the line 3x + 5y = 15 is dashed and grey below it. Corners (8, 0) with Z = 24 and (0, 8) with Z = 16. The dashed line 3x + 2y = 16 touches the region only at (0, 8); the side Z < 16, towards the origin, is shaded grey and misses the region.",
          axes: "xy",
          view: { x: [-1, 10], y: [-1, 10] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 8], [1, 7]] }, { kind: "halfPlane", through: [[0, 3], [5, 0]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "line", through: [[0, 8], [-1, 9]], step: 1 },
            { kind: "line", through: [[0, 3], [-5, 6]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [0.5, 2.7], label: "3x + 5y = 15", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [8, 0], label: "(8, 0): Z = 24", labelAt: "n", step: 2 },
            { kind: "point", at: [0, 8], label: "(0, 8): Z = 16", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 8], [-2, 11]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 3 },
            { kind: "line", through: [[0, 8], [-2, 11]], dashed: true, tone: "accent", step: 3 },
            { kind: "label", at: [1.2, 4], label: "Z < 16", labelAt: "e", tone: "muted", step: 3 },
            { kind: "label", at: [6, 6], label: "minimum 16", tone: "good", step: 4 },
          ],
        },
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`Minimise $Z = 3x + 5y$ subject to $x + 3y \ge 3$, $x + y \ge 2$, $x, y \ge 0$. The region is unbounded. Then:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 3*y >= 3", "x + y >= 2"], z: "3*x + 5*y", goal: "min" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`There is no minimum: $Z$ falls without limit on the region`, correct: false, misconceptionId: "C10-M2", value: "nomin" },
        { key: "C", text: t`The LPP has no feasible solution`, correct: false, misconceptionId: "C10-M3", value: "empty" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C10-M4", value: "10" },
      ],
      solution: {
        steps: [
          t`Corners: $(3, 0)$ on $x + 3y = 3$, $(0, 2)$ on $x + y = 2$, and where the two lines cross: subtracting gives $2y = 1$, so $(\tfrac32, \tfrac12)$.`,
          t`$Z = 3x + 5y$ at the corners: $9$, $10$ and $\tfrac92 + \tfrac52 = 7$. The smallest is $m = 7$.`,
          t`The region is unbounded, so check $3x + 5y < 7$. On the region $3x + 5y = 2(x + y) + (x + 3y) \ge 4 + 3 = 7$, so that side holds no point of the region.`,
          t`The minimum is $7$, at $(\tfrac32, \tfrac12)$.`,
        ],
        figure: {
          alt: "The region x + 3y ≥ 3, x + y ≥ 2 in the first quadrant, shaded and open up and to the right, with corners (3, 0), (3/2, 1/2) and (0, 2) and their Z values 9, 7 and 10. The dashed line 3x + 5y = 7 touches the region only at (3/2, 1/2); the side Z < 7, towards the origin, is shaded grey and misses the region.",
          axes: "xy",
          view: { x: [-0.55, 5.5], y: [-0.55, 4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [3, 0]] }, { kind: "halfPlane", through: [[0, 2], [1, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "line", through: [[0, 1], [-3, 2]], step: 1 },
            { kind: "line", through: [[0, 2], [-1, 3]], step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0): Z = 9", labelAt: "ne", step: 2 },
            { kind: "point", at: [1.5, 0.5], label: "(3/2, 1/2): Z = 7", labelAt: "ne", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, 2): Z = 10", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1.4], [-5, 4.4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 3 },
            { kind: "line", through: [[0, 1.4], [-5, 4.4]], dashed: true, tone: "accent", step: 3 },
            { kind: "label", at: [0.6, 0.5], label: "Z < 7", tone: "muted", step: 3 },
            { kind: "label", at: [3, 3], label: "minimum 7", tone: "good", step: 4 },
          ],
        },
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`Maximise $Z = 3x + 5y$ subject to $x + 3y \ge 3$, $x + y \ge 2$, $x, y \ge 0$. The region is unbounded. Then:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 3*y >= 3", "x + y >= 2"], z: "3*x + 5*y", goal: "max" } },
      options: [
        { key: "A", text: t`The LPP has no feasible solution`, correct: false, misconceptionId: "C10-M3", value: "empty" },
        { key: "B", text: t`There is no maximum: $Z$ grows without limit on the region`, correct: true, value: "nomax" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C10-M1", value: "10" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C10-M4", value: "7" },
      ],
      solution: {
        steps: [
          t`Corners: $(3, 0)$ on $x + 3y = 3$, $(0, 2)$ on $x + y = 2$, and where the two lines cross: subtracting gives $2y = 1$, so $(\tfrac32, \tfrac12)$.`,
          t`$Z = 3x + 5y$ at the corners: $9$, $10$ and $7$. The largest is $M = 10$.`,
          t`The region is unbounded, so check $3x + 5y > 10$. The point $(100, 0)$ is in the region ($100 \ge 3$, $100 \ge 2$) and gives $Z = 300 > 10$.`,
          t`Walk right and $Z$ keeps rising. There is no maximum: $Z$ grows without limit on the region.`,
        ],
        figure: {
          alt: "The region x + 3y ≥ 3, x + y ≥ 2 in the first quadrant, shaded and open up and to the right, with corners (3, 0), (3/2, 1/2) and (0, 2) and their Z values 9, 7 and 10. The dashed line 3x + 5y = 10 passes through (0, 2); the side Z > 10, shaded grey, overlaps the region, and an arrow runs on towards (100, 0).",
          axes: "xy",
          view: { x: [-0.6, 6], y: [-0.6, 4.5] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [3, 0]] }, { kind: "halfPlane", through: [[0, 2], [1, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "line", through: [[0, 1], [-3, 2]], step: 1 },
            { kind: "line", through: [[0, 2], [-1, 3]], step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0): Z = 9", labelAt: "ne", step: 2 },
            { kind: "point", at: [1.5, 0.5], label: "(3/2, 1/2): Z = 7", labelAt: "ne", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, 2): Z = 10", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [5, -1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 3 },
            { kind: "line", through: [[0, 2], [-5, 5]], dashed: true, tone: "accent", step: 3 },
            { kind: "label", at: [4.2, 3], label: "Z > 10", tone: "muted", step: 3 },
            { kind: "vector", from: [3.6, 1.3], to: [5.8, 1.3], label: "towards (100, 0)", labelAt: "n", tone: "bad", step: 3 },
            { kind: "label", at: [1.6, 3.9], label: "no maximum", tone: "bad", step: 4 },
          ],
        },
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`Minimise $Z = x - 2y$ subject to $x + y \ge 2$, $x - y \le 2$, $x, y \ge 0$. The region is unbounded. Then:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 2", "x - y <= 2"], z: "x - 2*y", goal: "min" } },
      options: [
        { key: "A", text: t`The LPP has no feasible solution`, correct: false, misconceptionId: "C10-M3", value: "empty" },
        { key: "B", text: t`There is no minimum: $Z$ falls without limit on the region`, correct: true, value: "nomin" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C10-M1", value: "-4" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C10-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`Corners: $x + y = 2$ and $x - y = 2$ meet at $(2, 0)$, and $x + y = 2$ meets the $y$-axis at $(0, 2)$.`,
          t`$Z = x - 2y$ at the corners: $2$ and $0 - 4 = -4$. The smallest is $m = -4$.`,
          t`The region is unbounded, so check $x - 2y < -4$. The point $(0, 100)$ is in the region ($100 \ge 2$, $-100 \le 2$) and gives $Z = -200 < -4$.`,
          t`Walk up and $Z$ keeps falling. There is no minimum: $Z$ falls without limit on the region.`,
        ],
        figure: {
          alt: "The region x + y ≥ 2, x − y ≤ 2 in the first quadrant, shaded and open upward, with corners (2, 0) and (0, 2) and their Z values 2 and −4. The dashed line x − 2y = −4 passes through (0, 2); the side Z < −4 above it, shaded grey, overlaps the region, and an arrow points up towards (0, 100).",
          axes: "xy",
          view: { x: [-0.8, 7], y: [-0.8, 8] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [1, 1]] }, { kind: "halfPlane", through: [[0, -2], [1, -1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "line", through: [[0, 2], [-1, 3]], step: 1 },
            { kind: "line", through: [[0, -2], [1, -1]], step: 1 },
            { kind: "label", at: [5, 3], label: "x − y ≤ 2", labelAt: "se", step: 1 },
            { kind: "point", at: [2, 0], label: "(2, 0): Z = 2", labelAt: "ne", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, 2): Z = −4", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [2, 3]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 3 },
            { kind: "line", through: [[0, 2], [2, 3]], dashed: true, tone: "accent", step: 3 },
            { kind: "label", at: [4, 6.5], label: "Z < −4", tone: "muted", step: 3 },
            { kind: "vector", from: [1.5, 3.5], to: [1.5, 7.5], label: "towards (0, 100)", labelAt: "e", tone: "bad", step: 3 },
            { kind: "label", at: [5.2, 5], label: "no minimum", tone: "bad", step: 4 },
          ],
        },
      },
    },
  ],
};
