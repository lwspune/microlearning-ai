import type { Concept, Figure, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The hook's region 2x + y ≤ 8, x ≤ 3, y ≤ 4, x, y ≥ 0; it appears at `step` when given. */
function hookRegion(step?: number): FigureElement {
  return {
    kind: "region",
    within: [{ kind: "halfPlane", through: [[0, 8], [-1, 10]] }, { kind: "halfPlane", through: [[3, 0], [3, 1]] }, { kind: "halfPlane", through: [[0, 4], [-1, 4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }],
    ...(step === undefined ? {} : { step }),
  };
}

/** The hook region's corners off the tied edge, (0, 0), (3, 0) and (0, 4), muted, at `step` when given. */
function otherCorners(step?: number): FigureElement[] {
  const at = step === undefined ? {} : { step };
  return [
    { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted", ...at },
    { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "ne", tone: "muted", ...at },
    { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "e", tone: "muted", ...at },
  ];
}

/** The line 2x + y = 8, which holds the edge from (3, 2) to (2, 4). */
const edgeLine: [[number, number], [number, number]] = [[3, 2], [2, 4]];

const hookView: Figure["view"] = { x: [-0.54, 5.4], y: [-0.54, 5.4] };

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Maximise $Z = 2x + y$ over $2x + y \le 8$, $x \le 3$, $y \le 4$, $x, y \ge 0$. The corners $(3, 2)$ and $(2, 4)$ both give the largest value, $Z = 8$. **How many points of the region give the maximum?**`,
    reveal: t`Infinitely many. Both corners lie on the edge $2x + y = 8$, and $Z = 2x + y$ equals $8$ at **every** point of that edge, such as $(2.5, 3)$. The whole segment between the two corners is optimal, not just its ends.`,
  },
  explanation: {
    intuition: [
      t`We want $Z = 2x + y$ as large as possible on the region $2x + y \le 8$, $x \le 3$, $y \le 4$, $x, y \ge 0$.`,
      t`Recall: the points where $Z$ takes one value $k$ lie on a line, $Z = k$: here $Z = 4$.`,
      t`Raise $k$ and the line slides outwards, staying parallel: here to $Z = 6$.`,
      t`Usually the line last touches the region at a single corner, where two edges (sides) meet.`,
      t`But these lines run parallel to the edge on $2x + y = 8$, so $Z = 8$ lies along that whole edge.`,
      t`So every point of that edge is **optimal**, giving the best $Z$: $(2.5, 3)$ gives $5 + 3 = 8$.`,
    ],
    formal: [
      {
        title: "A tie at two corners",
        points: [
          t`Two corners are **adjacent** when one edge of the region joins them, like $A$ and $B$.`,
          t`Say $Z$ takes its optimum at both $A$ and $B$: here $Z = 8$ at each.`,
          t`Then $Z$ takes that same value at every point of the segment $AB$.`,
          t`That is because the edge lies on the line $Z = 8$ itself.`,
          t`A segment has infinitely many points, so there are **infinitely many** optimal solutions, never exactly two.`,
          t`The optimal **value** is still one number: the maximum is $8$.`,
        ],
        figure: {
          alt: "The region 2x + y ≤ 8, x ≤ 3, y ≤ 4 in the first quadrant, shaded, with corners (0, 0), (3, 0) and (0, 4). The adjacent corners A (3, 2) and B (2, 4) both give Z = 8. The edge AB is highlighted, the dashed line Z = 8 runs along it, more points of the edge appear, and a label reads: maximum 8.",
          axes: "xy",
          view: hookView,
          elements: [
            hookRegion(),
            ...otherCorners(),
            { kind: "point", at: [3, 2], label: "A", labelAt: "w", step: 1 },
            { kind: "point", at: [2, 4], label: "B", labelAt: "sw", step: 1 },
            { kind: "label", at: [3, 2], label: "Z = 8", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [2, 4], label: "Z = 8", labelAt: "ne", tone: "good", step: 2 },
            { kind: "line", through: edgeLine, tone: "accent", dashed: true, step: 4 },
            { kind: "segment", from: [3, 2], to: [2, 4], tone: "good", step: 3 },
            { kind: "label", at: [3.6, 0.8], label: "Z = 8", labelAt: "e", tone: "accent", step: 4 },
            { kind: "point", at: [2.75, 2.5], tone: "good", step: 5 },
            { kind: "point", at: [2.5, 3], tone: "good", step: 5 },
            { kind: "point", at: [2.25, 3.5], tone: "good", step: 5 },
            { kind: "label", at: [3.3, 4.6], label: "maximum 8", labelAt: "e", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Spot a parallel edge",
        points: [
          t`To spot a tie early, look for an edge parallel to the lines $Z = k$.`,
          t`Test with coefficients: they must be **proportional**, one set a fixed multiple of the other.`,
          t`For example, $Z = 4x + 2y$ equals $2(2x + y)$.`,
          t`So every line $Z = k$ is parallel to any edge $2x + y = c$: here $Z = 16$ lies along one.`,
          t`A parallel edge is only a **candidate**, a possible place for the optimum.`,
          t`So compare $Z$ at every corner: the tie must be at the best value, as $16$ is here.`,
        ],
        figure: {
          alt: "The region 2x + y ≤ 8, x ≤ 3, y ≤ 4 in the first quadrant, shaded, with its edge on 2x + y = 8 highlighted. Dashed lines Z = 8 and Z = 12 for Z = 4x + 2y run parallel to it, and the dashed line Z = 16 lies along it. The corners are labelled with Z: (0, 0) 0, (3, 0) 12, (3, 2) 16, (2, 4) 16, (0, 4) 8, so the tie at 16 is the largest.",
          axes: "xy",
          view: hookView,
          elements: [
            hookRegion(),
            { kind: "segment", from: [3, 2], to: [2, 4], step: 1 },
            { kind: "label", at: [2.5, 3], label: "2x + y = 8", labelAt: "w", step: 1 },
            { kind: "line", through: [[0, 4], [-1, 6]], tone: "muted", dashed: true, step: 3 },
            { kind: "label", at: [1.25, 1.5], label: "Z = 8", labelAt: "e", tone: "muted", step: 3 },
            { kind: "line", through: [[0, 6], [-1, 8]], tone: "muted", dashed: true, step: 3 },
            { kind: "label", at: [2.25, 1.5], label: "Z = 12", labelAt: "e", tone: "muted", step: 3 },
            { kind: "line", through: edgeLine, tone: "accent", dashed: true, step: 4 },
            { kind: "label", at: [3.6, 0.8], label: "Z = 16", labelAt: "e", tone: "accent", step: 4 },
            { kind: "point", at: [0, 0], label: "Z = 0", labelAt: "ne", tone: "muted", step: 6 },
            { kind: "point", at: [3, 0], label: "Z = 12", labelAt: "ne", tone: "muted", step: 6 },
            { kind: "point", at: [0, 4], label: "Z = 8", labelAt: "se", tone: "muted", step: 6 },
            { kind: "point", at: [3, 2], label: "Z = 16", labelAt: "e", tone: "good", step: 6 },
            { kind: "point", at: [2, 4], label: "Z = 16", labelAt: "ne", tone: "good", step: 6 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Maximise $Z = 2x + 2y$ subject to $x + y \le 5$, $x \le 4$, $y \le 3$, $x, y \ge 0$. Where is the maximum?`,
      steps: [
        t`Corners: $(0, 0)$, $(4, 0)$, $(4, 1)$, $(2, 3)$, $(0, 3)$. $Z$ there: $0$, $8$, $10$, $10$, $6$.`,
        t`The largest value, $10$, is a tie at $(4, 1)$ and $(2, 3)$. Both lie on the edge $x + y = 5$, and $Z = 2(x + y)$ is parallel to it.`,
        t`Every point of that edge gives $Z = 2 \times 5 = 10$. For example $(3, 2)$: $6 + 4 = 10$.`,
      ],
      answer: t`Maximum $Z = 10$ at every point of the segment joining $(4, 1)$ and $(2, 3)$: infinitely many optimal points.`,
      figure: {
        alt: "The region x + y ≤ 5, x ≤ 4, y ≤ 3 in the first quadrant, shaded, with corners (0, 0), (4, 0), (4, 1), (2, 3) and (0, 3). The corners (4, 1) and (2, 3) both give Z = 10. The edge between them, on x + y = 5, is highlighted, and its point (3, 2) also gives Z = 10.",
        axes: "xy",
        view: { x: [-0.6599999999999999, 6.6], y: [-0.6599999999999999, 4.8] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 5], [-1, 6]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[0, 3], [-1, 3]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
          { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted", step: 1 },
          { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw", tone: "muted", step: 1 },
          { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "se", tone: "muted", step: 1 },
          { kind: "point", at: [4, 1], label: "(4, 1), Z = 10", labelAt: "e", tone: "good", step: 1 },
          { kind: "point", at: [2, 3], label: "(2, 3), Z = 10", labelAt: "ne", tone: "good", step: 1 },
          { kind: "line", through: [[0, 5], [-1, 6]], tone: "muted", dashed: true, step: 2 },
          { kind: "label", at: [1.2, 3.8], label: "x + y = 5", labelAt: "ne", tone: "muted", step: 2 },
          { kind: "segment", from: [4, 1], to: [2, 3], tone: "good", step: 2 },
          { kind: "point", at: [3, 2], label: "(3, 2), Z = 10", labelAt: "ne", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The region 2x + y ≤ 8, x ≤ 3, y ≤ 4 in the first quadrant, shaded, with corners (0, 0), (3, 0), (3, 2), (2, 4) and (0, 4). Dashed lines Z = 4 and Z = 6 run parallel to the edge 2x + y = 8, and the dashed line Z = 8 lies along it. That edge, from (3, 2) to (2, 4), is highlighted: Z = 8 at both corners and at (2.5, 3) between them.",
      axes: "xy",
      view: hookView,
      elements: [
        hookRegion(1),
        ...otherCorners(1),
        { kind: "line", through: [[0, 4], [-1, 6]], tone: "muted", dashed: true, step: 2 },
        { kind: "label", at: [1.25, 1.5], label: "Z = 4", labelAt: "e", tone: "muted", step: 2 },
        { kind: "line", through: [[0, 6], [-1, 8]], tone: "muted", dashed: true, step: 3 },
        { kind: "label", at: [2.25, 1.5], label: "Z = 6", labelAt: "e", tone: "muted", step: 3 },
        { kind: "line", through: edgeLine, tone: "accent", dashed: true, step: 5 },
        { kind: "label", at: [3.6, 0.8], label: "Z = 8", labelAt: "e", tone: "accent", step: 5 },
        { kind: "segment", from: [3, 2], to: [2, 4], tone: "good", step: 5 },
        { kind: "point", at: [3, 2], label: "(3, 2), Z = 8", labelAt: "e", tone: "good", step: 5 },
        { kind: "point", at: [2, 4], label: "(2, 4), Z = 8", labelAt: "ne", tone: "good", step: 5 },
        { kind: "point", at: [2.5, 3], label: "(2.5, 3), Z = 8", labelAt: "ne", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`Slide the line Z = k across the region; when it is parallel to an edge, the whole edge lights up at the optimum, and dragging a point along that edge keeps Z fixed.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Stopping at the first optimal corner",
      remediation: t`Compare $Z$ at every corner. A tie means a whole edge is optimal.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M2",
      mistake: "Counting only the two tied corners",
      remediation: t`Every point between them gives the same $Z$, so there are infinitely many.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M3",
      mistake: "Thinking a tie at two corners means there is no optimum",
      remediation: t`A tie does not cancel the optimum. $Z$ still reaches its best value, at both corners and at every point between them: the optimum is not unique, but it exists.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  engineNotes: [
    "In the 'where' items (C11-Q4, C11-Q5) the C11-M1 option names the tied corner nearer the x-axis.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`How many points of the feasible region give the maximum of $Z = x + y$, subject to $x + y \le 4$, $x \le 3$, $y \le 3$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y <= 4", "x <= 3", "y <= 3"], z: "x + y", goal: "max", ask: "count" } },
      options: [
        { key: "A", text: t`Exactly two`, correct: false, misconceptionId: "C11-M2", value: "2" },
        { key: "B", text: t`Infinitely many`, correct: true, value: "infinitely_many" },
        { key: "C", text: t`Exactly one`, correct: false, misconceptionId: "C11-M1", value: "1" },
        { key: "D", text: "None: the tie means there is no maximum", correct: false, misconceptionId: "C11-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`Corners: $(0, 0)$, $(3, 0)$, $(3, 1)$, $(1, 3)$, $(0, 3)$. $Z = x + y$ there: $0$, $3$, $4$, $4$, $3$.`,
          t`The maximum $4$ is a tie at $(3, 1)$ and $(1, 3)$. Both lie on the edge $x + y = 4$, which is parallel to $Z = x + y$.`,
          t`Every point of that edge, such as $(2, 2)$, gives $Z = 4$. So **infinitely many** points give the maximum.`,
        ],
        figure: {
          alt: "The region x + y ≤ 4, x ≤ 3, y ≤ 3 in the first quadrant, shaded, with corners (0, 0), (3, 0), (3, 1), (1, 3) and (0, 3). The corners (3, 1) and (1, 3) both give Z = 4, and the edge between them, on x + y = 4, is highlighted, with (2, 2) on it also giving Z = 4.",
          axes: "xy",
          view: { x: [-0.45999999999999996, 4.6], y: [-0.45999999999999996, 4.4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [-1, 5]] }, { kind: "halfPlane", through: [[3, 0], [3, 1]] }, { kind: "halfPlane", through: [[0, 3], [-1, 3]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "se", tone: "muted", step: 1 },
            { kind: "point", at: [3, 1], label: "(3, 1), Z = 4", labelAt: "e", tone: "good", step: 1 },
            { kind: "point", at: [1, 3], label: "(1, 3), Z = 4", labelAt: "ne", tone: "good", step: 1 },
            { kind: "segment", from: [3, 1], to: [1, 3], tone: "good", step: 2 },
            { kind: "point", at: [2, 2], label: "(2, 2), Z = 4", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`How many points of the feasible region give the maximum of $Z = 2x + 4y$, subject to $x + 2y \le 8$, $x \le 6$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 2*y <= 8", "x <= 6"], z: "2*x + 4*y", goal: "max", ask: "count" } },
      options: [
        { key: "A", text: t`Infinitely many`, correct: true, value: "infinitely_many" },
        { key: "B", text: t`Exactly one`, correct: false, misconceptionId: "C11-M1", value: "1" },
        { key: "C", text: t`Exactly two`, correct: false, misconceptionId: "C11-M2", value: "2" },
        { key: "D", text: "None: the tie means there is no maximum", correct: false, misconceptionId: "C11-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`Corners: $(0, 0)$, $(6, 0)$, $(6, 1)$, $(0, 4)$. $Z = 2x + 4y$ there: $0$, $12$, $12 + 4 = 16$, $16$.`,
          t`The maximum $16$ is a tie at $(6, 1)$ and $(0, 4)$. Both lie on the edge $x + 2y = 8$, and $Z = 2(x + 2y)$ is parallel to it.`,
          t`Every point of that edge gives $Z = 2 \times 8 = 16$, such as $(2, 3)$: $4 + 12 = 16$. So **infinitely many** points give the maximum.`,
        ],
        figure: {
          alt: "The region x + 2y ≤ 8, x ≤ 6 in the first quadrant, shaded, with corners (0, 0), (6, 0), (6, 1) and (0, 4). The corners (6, 1) and (0, 4) both give Z = 16, and the edge between them, on x + 2y = 8, is highlighted, with (2, 3) on it also giving Z = 16.",
          axes: "xy",
          view: { x: [-0.8400000000000001, 8.4], y: [-0.8400000000000001, 5] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [-2, 5]] }, { kind: "halfPlane", through: [[6, 0], [6, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [6, 0], label: "(6, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [6, 1], label: "(6, 1), Z = 16", labelAt: "e", tone: "good", step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4), Z = 16", labelAt: "ne", tone: "good", step: 1 },
            { kind: "segment", from: [6, 1], to: [0, 4], tone: "good", step: 2 },
            { kind: "point", at: [2, 3], label: "(2, 3), Z = 16", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`How many points of the feasible region give the minimum of $Z = 3x + 3y$, subject to $x + y \ge 2$, $x \le 3$, $y \le 3$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 2", "x <= 3", "y <= 3"], z: "3*x + 3*y", goal: "min", ask: "count" } },
      options: [
        { key: "A", text: t`Exactly one`, correct: false, misconceptionId: "C11-M1", value: "1" },
        { key: "B", text: t`Exactly two`, correct: false, misconceptionId: "C11-M2", value: "2" },
        { key: "C", text: t`Infinitely many`, correct: true, value: "infinitely_many" },
        { key: "D", text: "None: the tie means there is no minimum", correct: false, misconceptionId: "C11-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`Corners: $(2, 0)$, $(3, 0)$, $(3, 3)$, $(0, 3)$, $(0, 2)$. $Z = 3x + 3y$ there: $6$, $9$, $18$, $9$, $6$.`,
          t`The minimum $6$ is a tie at $(2, 0)$ and $(0, 2)$. Both lie on the edge $x + y = 2$, and $Z = 3(x + y)$ is parallel to it.`,
          t`Every point of that edge, such as $(1, 1)$, gives $Z = 3 \times 2 = 6$. So **infinitely many** points give the minimum.`,
        ],
        figure: {
          alt: "The region x + y ≥ 2, x ≤ 3, y ≤ 3 in the first quadrant, shaded, with corners (2, 0), (3, 0), (3, 3), (0, 3) and (0, 2). The corners (2, 0) and (0, 2) both give the smallest Z, 6, and the edge between them, on x + y = 2, is highlighted, with (1, 1) on it also giving Z = 6.",
          axes: "xy",
          view: { x: [-0.44000000000000006, 4.4], y: [-0.44000000000000006, 4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [1, 1]] }, { kind: "halfPlane", through: [[3, 0], [3, 1]] }, { kind: "halfPlane", through: [[0, 3], [-1, 3]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [3, 3], label: "(3, 3)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [2, 0], label: "(2, 0), Z = 6", labelAt: "nw", tone: "good", step: 1 },
            { kind: "point", at: [0, 2], label: "(0, 2), Z = 6", labelAt: "e", tone: "good", step: 1 },
            { kind: "segment", from: [2, 0], to: [0, 2], tone: "good", step: 2 },
            { kind: "point", at: [1, 1], label: "(1, 1), Z = 6", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`Where does $Z = x + 2y$ reach its maximum, subject to $2x + y \le 10$, $x + 2y \le 8$, $x \le 4$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["2*x + y <= 10", "x + 2*y <= 8", "x <= 4"], z: "x + 2*y", goal: "max", ask: "where" } },
      options: [
        { key: "A", text: t`Only at the two points $(4, 2)$ and $(0, 4)$`, correct: false, misconceptionId: "C11-M2", value: "twopoints" },
        { key: "B", text: t`At every point of the segment joining $(4, 2)$ and $(0, 4)$`, correct: true, value: "segment" },
        { key: "C", text: t`Only at $(4, 2)$`, correct: false, misconceptionId: "C11-M1", value: "4 + 2*I" },
        { key: "D", text: t`Nowhere: the tie means $Z$ has no maximum`, correct: false, misconceptionId: "C11-M3", value: "nomax" },
      ],
      solution: {
        steps: [
          t`Corners: $(0, 0)$, $(4, 0)$, $(4, 2)$, $(0, 4)$; the line $2x + y = 10$ only touches the region at $(4, 2)$. $Z = x + 2y$ there: $0$, $4$, $4 + 4 = 8$, $8$.`,
          t`The maximum $8$ is a tie at $(4, 2)$ and $(0, 4)$. Both lie on the edge $x + 2y = 8$, the same line as $Z = 8$.`,
          t`Every point between them, such as $(2, 3)$: $2 + 6 = 8$, gives the maximum. So $Z$ is greatest at every point of the segment joining $(4, 2)$ and $(0, 4)$.`,
        ],
        figure: {
          alt: "The region 2x + y ≤ 10, x + 2y ≤ 8, x ≤ 4 in the first quadrant, shaded, with corners (0, 0), (4, 0), (4, 2) and (0, 4). The line 2x + y = 10, dashed, touches the region only at (4, 2). The corners (4, 2) and (0, 4) both give Z = 8, and the edge between them, on x + 2y = 8, is highlighted, with (2, 3) on it also giving Z = 8.",
          axes: "xy",
          view: { x: [-0.6599999999999999, 6.6], y: [-0.6599999999999999, 5] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 10], [-1, 12]] }, { kind: "halfPlane", through: [[0, 4], [-2, 5]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "line", through: [[0, 10], [-1, 12]], tone: "muted", dashed: true, step: 1 },
            { kind: "label", at: [4.75, 0.5], label: "2x + y = 10", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [4, 2], label: "(4, 2), Z = 8", labelAt: "ne", tone: "good", step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4), Z = 8", labelAt: "ne", tone: "good", step: 1 },
            { kind: "segment", from: [4, 2], to: [0, 4], tone: "good", step: 2 },
            { kind: "point", at: [2, 3], label: "(2, 3), Z = 8", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`Where does $Z = 3x + y$ reach its maximum, subject to $x + y \le 6$, $3x + y \le 12$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y <= 6", "3*x + y <= 12"], z: "3*x + y", goal: "max", ask: "where" } },
      options: [
        { key: "A", text: t`At every point of the segment joining $(4, 0)$ and $(3, 3)$`, correct: true, value: "segment" },
        { key: "B", text: t`Only at $(4, 0)$`, correct: false, misconceptionId: "C11-M1", value: "4" },
        { key: "C", text: t`Only at the two points $(4, 0)$ and $(3, 3)$`, correct: false, misconceptionId: "C11-M2", value: "twopoints" },
        { key: "D", text: t`Nowhere: the tie means $Z$ has no maximum`, correct: false, misconceptionId: "C11-M3", value: "nomax" },
      ],
      solution: {
        steps: [
          t`Corners: $(0, 0)$, $(4, 0)$, $(3, 3)$, $(0, 6)$. $Z = 3x + y$ there: $0$, $12$, $9 + 3 = 12$, $6$.`,
          t`The maximum $12$ is a tie at $(4, 0)$ and $(3, 3)$. Both lie on the edge $3x + y = 12$, the same line as $Z = 12$.`,
          t`Every point between them, such as $(3.5, 1.5)$: $10.5 + 1.5 = 12$, gives the maximum. So $Z$ is greatest at every point of the segment joining $(4, 0)$ and $(3, 3)$.`,
        ],
        figure: {
          alt: "The region x + y ≤ 6, 3x + y ≤ 12 in the first quadrant, shaded, with corners (0, 0), (4, 0), (3, 3) and (0, 6). The corners (4, 0) and (3, 3) both give Z = 12, and the edge between them, on 3x + y = 12, is highlighted, with (3.5, 1.5) on it also giving Z = 12.",
          axes: "xy",
          view: { x: [-0.6799999999999999, 6.6], y: [-0.6799999999999999, 6.8] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [-1, 7]] }, { kind: "halfPlane", through: [[0, 12], [-1, 15]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [0, 6], label: "(0, 6)", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0), Z = 12", labelAt: "ne", tone: "good", step: 1 },
            { kind: "point", at: [3, 3], label: "(3, 3), Z = 12", labelAt: "ne", tone: "good", step: 1 },
            { kind: "segment", from: [4, 0], to: [3, 3], tone: "good", step: 2 },
            { kind: "point", at: [3.5, 1.5], label: "(3.5, 1.5), Z = 12", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
