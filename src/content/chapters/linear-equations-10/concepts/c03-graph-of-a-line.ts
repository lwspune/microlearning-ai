import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Riya lists pairs that make $x + y = 5$ true: $(0, 5)$, $(2, 3)$, $(4, 1)$ and $(5, 0)$. **She plots them. What shape do they make?**`,
    reveal: t`They lie on one straight line. Every solution of $x + y = 5$ is on that line, and every point of the line is a solution. That line is the **graph** of the equation.`,
  },
  explanation: {
    intuition: [
      t`A **solution** of $x + y = 5$ is a pair of values that makes it true, like $x = 1$, $y = 4$.`,
      t`Write each solution as a point $(x, y)$: $(2, 3)$, $(5, 0)$ and $(0, 5)$ are solutions too.`,
      t`Plot them on graph paper: they all lie on one straight line.`,
      t`Every solution lies on this line, and every point of it is a solution, like $(-1, 6)$.`,
      t`This line is the **graph** of the equation; that is why such an equation is called **linear**.`,
      t`A point off the line is not a solution: at $(3, 3)$, $x + y = 6$, not $5$.`,
    ],
    formal: [
      {
        title: "A table of values",
        points: [
          t`To find a point of $2x + 3y = 12$, choose a value of $x$, say $x = 3$.`,
          t`Put it in: $2(3) + 3y = 12$, so $6 + 3y = 12$.`,
          t`Move $6$ across, changing its sign: $3y = 12 - 6 = 6$. Divide by $3$: $y = 2$.`,
          t`In the same way, $x = 0$ gives $y = 4$, and $x = 6$ gives $y = 0$.`,
          t`Given $y$ instead, put it in and solve for $x$: $y = 6$ gives $x = -3$.`,
          t`Write each pair as a point: $(-3, 6)$, $(0, 4)$, $(3, 2)$, $(6, 0)$.`,
        ],
        figure: {
          alt: "For 2x + 3y = 12: a dashed mark at x = 3 rises to the point (3, 2). Then (0, 4), (6, 0) and (−3, 6) appear.",
          axes: "xy",
          view: { x: [-4, 7], y: [-1, 7] },
          elements: [
            { kind: "segment", from: [3, 0], to: [3, 2], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [3, 1], label: "x = 3", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [3, 2], step: 3, label: "(3, 2)", labelAt: "ne" },
            { kind: "point", at: [0, 4], step: 4, label: "(0, 4)", labelAt: "ne" },
            { kind: "point", at: [6, 0], step: 4, label: "(6, 0)", labelAt: "n" },
            { kind: "point", at: [-3, 6], step: 5, label: "(−3, 6)", labelAt: "e" },
          ],
        },
      },
      {
        title: "Plot the points, join them",
        points: [
          t`Plot each point of the table on graph paper.`,
          t`The points lie on one straight line: draw it with a ruler.`,
          t`Two points are enough to fix a straight line.`,
          t`Plot a third point as a check: if it falls off the line, a value is wrong.`,
          t`Write the equation $2x + 3y = 12$ beside the line.`,
        ],
        figure: {
          alt: "The four points (−3, 6), (0, 4), (3, 2) and (6, 0) are plotted, then one straight line is drawn through them and labelled 2x + 3y = 12.",
          axes: "xy",
          view: { x: [-4, 7], y: [-1, 7] },
          elements: [
            { kind: "point", at: [-3, 6], step: 1, label: "(−3, 6)", labelAt: "e" },
            { kind: "point", at: [0, 4], step: 1, label: "(0, 4)", labelAt: "ne" },
            { kind: "point", at: [3, 2], step: 1, label: "(3, 2)", labelAt: "ne" },
            { kind: "point", at: [6, 0], step: 1, label: "(6, 0)", labelAt: "n" },
            { kind: "line", through: [[0, 4], [6, 0]], step: 2 },
            { kind: "point", at: [3, 2], tone: "good", step: 4 },
            { kind: "label", at: [4.5, 1.6], label: "2x + 3y = 12", labelAt: "ne", step: 5 },
          ],
        },
      },
      {
        title: "Where the line cuts the axes",
        points: [
          t`Every point on the X-axis has $y = 0$, like $(5, 0)$.`,
          t`So put $y = 0$: $2x = 12$, $x = 6$. The line cuts the X-axis at $(6, 0)$.`,
          t`Every point on the Y-axis has $x = 0$, like $(0, 5)$.`,
          t`So put $x = 0$: $3y = 12$, $y = 4$. The line cuts the Y-axis at $(0, 4)$.`,
          t`These two points are the quickest to find, so they are good points to plot.`,
        ],
        figure: {
          alt: "The line 2x + 3y = 12. The X-axis is marked y = 0 and the line meets it at (6, 0). The Y-axis is marked x = 0 and the line meets it at (0, 4).",
          axes: "xy",
          view: { x: [-4, 7], y: [-1, 7] },
          elements: [
            { kind: "line", through: [[0, 4], [6, 0]], tone: "muted" },
            { kind: "label", at: [-3.5, 0], label: "y = 0", labelAt: "n", tone: "good", step: 1 },
            { kind: "point", at: [6, 0], tone: "good", step: 2, label: "(6, 0)", labelAt: "n" },
            { kind: "label", at: [0, 6.2], label: "x = 0", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [0, 4], tone: "good", step: 4, label: "(0, 4)", labelAt: "ne" },
          ],
        },
      },
      {
        title: "Is a point on the line?",
        points: [
          t`A point lies on the graph exactly when its $x$ and $y$ make the equation true.`,
          t`$(-3, 6)$: $2(-3) + 3(6) = -6 + 18 = 12$. True, so it is on the line.`,
          t`$(3, 3)$: $2(3) + 3(3) = 15$, not $12$. So it is off the line.`,
          t`This finds a missing coefficient too: if $(3, 2)$ lies on $kx + 3y = 12$, then $3k + 6 = 12$.`,
          t`So $3k = 6$ and $k = 2$: the line is $2x + 3y = 12$.`,
        ],
        figure: {
          alt: "The line 2x + 3y = 12. The point (−3, 6) is on it. The point (3, 3) is hollow, just above the line. Then the point (3, 2) is marked on the line.",
          axes: "xy",
          view: { x: [-4, 7], y: [-1, 7] },
          elements: [
            { kind: "line", through: [[0, 4], [6, 0]], tone: "muted" },
            { kind: "label", at: [4.5, 1.6], label: "2x + 3y = 12", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [-3, 6], tone: "good", step: 2, label: "(−3, 6)", labelAt: "e" },
            { kind: "point", at: [3, 3], tone: "bad", hollow: true, step: 3, label: "(3, 3)", labelAt: "ne" },
            { kind: "point", at: [3, 2], step: 4, label: "(3, 2)", labelAt: "sw" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Complete the table for $x - 2y = 4$: find $y$ when $x = 2$ and when $x = 0$, and $x$ when $y = 0$. Then draw the graph.`,
      steps: [
        t`$x = 2$: $2 - 2y = 4$, so $-2y = 4 - 2 = 2$. Divide by $-2$: $y = -1$. Point $(2, -1)$.`,
        t`$x = 0$: $-2y = 4$, so $y = -2$. Point $(0, -2)$, where the line cuts the Y-axis.`,
        t`$y = 0$: $x - 0 = 4$, so $x = 4$. Point $(4, 0)$, where the line cuts the X-axis.`,
        t`Plot the three points and join them with a ruler: they lie on one straight line.`,
      ],
      answer: t`The table gives $(2, -1)$, $(0, -2)$ and $(4, 0)$; the graph of $x - 2y = 4$ is the straight line through them.`,
      figure: {
        alt: "For x − 2y = 4: the points (2, −1), (0, −2) and (4, 0) appear one by one, then the straight line through them.",
        axes: "xy",
        view: { x: [-2, 6], y: [-4, 2] },
        elements: [
          { kind: "point", at: [2, -1], step: 1, label: "(2, −1)", labelAt: "nw" },
          { kind: "point", at: [0, -2], step: 2, label: "(0, −2)", labelAt: "e" },
          { kind: "point", at: [4, 0], step: 3, label: "(4, 0)", labelAt: "nw" },
          { kind: "line", through: [[0, -2], [4, 0]], step: 4 },
          { kind: "label", at: [5, 0.5], label: "x − 2y = 4", labelAt: "n", step: 4 },
        ],
      },
    },
    figure: {
      alt: "Points (1, 4), then (2, 3), (5, 0) and (0, 5) are plotted. The straight line x + y = 5 is drawn through them. The point (−1, 6) is also on it. The point (3, 3) is hollow and off the line.",
      axes: "xy",
      view: { x: [-2, 7], y: [-1, 7] },
      elements: [
        { kind: "point", at: [1, 4], step: 1, label: "(1, 4)", labelAt: "ne" },
        { kind: "point", at: [2, 3], step: 2, label: "(2, 3)", labelAt: "ne" },
        { kind: "point", at: [5, 0], step: 2, label: "(5, 0)", labelAt: "n" },
        { kind: "point", at: [0, 5], step: 2, label: "(0, 5)", labelAt: "ne" },
        { kind: "line", through: [[0, 5], [5, 0]], step: 3 },
        { kind: "point", at: [-1, 6], tone: "good", step: 4, label: "(−1, 6)", labelAt: "e" },
        { kind: "label", at: [4.6, 1.6], label: "x + y = 5", labelAt: "ne", step: 5 },
        { kind: "point", at: [3, 3], tone: "bad", hollow: true, step: 6, label: "(3, 3)", labelAt: "ne" },
      ],
    },
    visualSpec: t`Drag a point along the line $x + y = 5$ and watch $x + y$ stay $5$; drag it off the line and the sum changes.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Thinks every point on the X-axis has $x = 0$ (and on the Y-axis $y = 0$), so sets the wrong variable to zero.`,
      remediation: t`On the X-axis every point has $y = 0$, like $(4, 0)$; on the Y-axis $x = 0$. To find where a line cuts the X-axis, put $y = 0$.`,
      fallback: { kind: "ext", topic: "points on the axes (Std IX Co-ordinate Geometry)" },
    },
    {
      id: "C03-M2",
      mistake: t`Moves a term to the other side without changing its sign: $4 + 5y = 19$ becomes $5y = 19 + 4$.`,
      remediation: t`A term that moves to the other side changes its sign: $4 + 5y = 19$ gives $5y = 19 - 4$.`,
      fallback: { kind: "ext", topic: "solving a linear equation in one variable" },
    },
    {
      id: "C03-M3",
      mistake: t`Stops at $5y = 15$ and gives $15$, without dividing by the coefficient of the unknown.`,
      remediation: t`Finish by dividing by the coefficient of the unknown: $5y = 15$ gives $y = 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Puts the given value in for the wrong variable: told $x = 1$, sets $y = 1$ and solves for $x$.`,
      remediation: t`Check which variable is given. To find $y$ when $x = 1$, the $1$ replaces $x$, and you solve for $y$.`,
      fallback: { kind: "ext", topic: "plotting points (Std IX Co-ordinate Geometry)" },
    },
    {
      id: "C03-M5",
      mistake: t`Subtracts the wrong way round, $5y = 4 - 19$, so the answer comes out with the wrong sign.`,
      remediation: t`Keep the order: $4 + 5y = 19$ gives $5y = 19 - 4$, not $4 - 19$. Put your answer back in the equation to check it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M3 gives the key when the unknown's coefficient is $1$, and equals C03-M5 when it is $-1$: diagnose it on items like Q1, Q5 and Q6.`,
    "C03-M1 applies only to where a line cuts an axis (Q5); C03-M2 and C03-M4 need a given value, so they don't apply there.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/PS1 Q.1(1)" },
      stem: t`To draw the graph of $4x + 5y = 19$, find $y$ when $x = 1$.`,
      verify: { kind: "value", inputs: { a: "4", b: "5", c: "19", x0: "1" }, params: { task: "y" } },
      options: [
        { key: "A", text: t`$15$`, correct: false, misconceptionId: "C03-M3", value: "15" },
        { key: "B", text: t`$-3$`, correct: false, misconceptionId: "C03-M5", value: "-3" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$\frac{23}{5}$`, correct: false, misconceptionId: "C03-M2", value: "23/5" },
      ],
      solution: {
        steps: [
          t`Put $x = 1$: $4(1) + 5y = 19$, so $4 + 5y = 19$.`,
          t`Move $4$ across, changing its sign: $5y = 19 - 4 = 15$.`,
          t`Divide by $5$: $y = 3$. The point $(1, 3)$ is on the graph.`,
        ],
        figure: {
          alt: "The line 4x + 5y = 19. A dashed mark rises from x = 1 to the point (1, 3) on the line.",
          axes: "xy",
          view: { x: [-2, 6], y: [-2, 5] },
          elements: [
            { kind: "line", through: [[1, 3], [6, -1]], tone: "muted" },
            { kind: "label", at: [3.6, 1.2], label: "4x + 5y = 19", labelAt: "ne", tone: "muted" },
            { kind: "segment", from: [1, 0], to: [1, 3], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [1, 1.5], label: "x = 1", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [1, 3], tone: "good", step: 3, label: "(1, 3)", labelAt: "ne" },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q1(A)(ii)" },
      stem: t`To draw the graph of $x + 2y = 4$, find $x$ when $y = 1$.`,
      verify: { kind: "value", inputs: { a: "1", b: "2", c: "4", y0: "1" }, params: { task: "x" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C03-M4", value: "3/2" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C03-M5", value: "-2" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C03-M2", value: "6" },
      ],
      solution: {
        steps: [
          t`Put $y = 1$: $x + 2(1) = 4$, so $x + 2 = 4$.`,
          t`Move $2$ across, changing its sign: $x = 4 - 2 = 2$.`,
          t`So $x = 2$, and the point $(2, 1)$ is on the graph.`,
        ],
        figure: {
          alt: "The line x + 2y = 4. A dashed mark runs across from y = 1 to the point (2, 1) on the line.",
          axes: "xy",
          view: { x: [-1, 5], y: [-1, 3] },
          elements: [
            { kind: "line", through: [[0, 2], [4, 0]], tone: "muted" },
            { kind: "label", at: [3, 0.6], label: "x + 2y = 4", labelAt: "ne", tone: "muted" },
            { kind: "segment", from: [0, 1], to: [2, 1], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [1, 1], label: "y = 1", labelAt: "n", tone: "muted", step: 1 },
            { kind: "point", at: [2, 1], tone: "good", step: 3, label: "(2, 1)", labelAt: "ne" },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.2 Q.1(II)" },
      stem: t`You are completing the table for the graph of $x - y = 4$. Which value of $y$ goes with $x = -1$?`,
      verify: { kind: "value", inputs: { a: "1", b: "-1", c: "4", x0: "-1" }, params: { task: "y" } },
      options: [
        { key: "A", text: t`$-3$`, correct: false, misconceptionId: "C03-M2", value: "-3" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M4", value: "3" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C03-M5", value: "5" },
        { key: "D", text: t`$-5$`, correct: true, value: "-5" },
      ],
      solution: {
        steps: [
          t`Put $x = -1$: $-1 - y = 4$.`,
          t`Move $-1$ across, changing its sign: $-y = 4 + 1 = 5$.`,
          t`Divide by $-1$: $y = -5$. The table gets the point $(-1, -5)$.`,
        ],
        figure: {
          alt: "The line x − y = 4. A dashed mark drops from x = −1 to the point (−1, −5) on the line.",
          axes: "xy",
          view: { x: [-3, 5], y: [-6, 2] },
          elements: [
            { kind: "line", through: [[0, -4], [4, 0]], tone: "muted" },
            { kind: "label", at: [4.2, 0.4], label: "x − y = 4", labelAt: "ne", tone: "muted" },
            { kind: "segment", from: [-1, 0], to: [-1, -5], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [-1, 0], label: "x = −1", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [-1, -5], tone: "good", step: 3, label: "(−1, −5)", labelAt: "e" },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q2(A)(i)" },
      stem: t`You are completing the table for the graph of $x - y = 1$. Find $x$ when $y = -3$.`,
      verify: { kind: "value", inputs: { a: "1", b: "-1", c: "1", y0: "-3" }, params: { task: "x" } },
      options: [
        { key: "A", text: t`$-4$`, correct: false, misconceptionId: "C03-M4", value: "-4" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M5", value: "2" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M2", value: "4" },
      ],
      solution: {
        steps: [
          t`Put $y = -3$: $x - (-3) = 1$, so $x + 3 = 1$.`,
          t`Move $3$ across, changing its sign: $x = 1 - 3 = -2$.`,
          t`So $x = -2$, and the point $(-2, -3)$ is on the graph.`,
        ],
        figure: {
          alt: "The line x − y = 1. A dashed mark runs across from y = −3 to the point (−2, −3) on the line.",
          axes: "xy",
          view: { x: [-4, 3], y: [-5, 2] },
          elements: [
            { kind: "line", through: [[0, -1], [1, 0]], tone: "muted" },
            { kind: "label", at: [1.4, 0.6], label: "x − y = 1", labelAt: "ne", tone: "muted" },
            { kind: "segment", from: [0, -3], to: [-2, -3], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [0, -3], label: "y = −3", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [-2, -3], tone: "good", step: 3, label: "(−2, −3)", labelAt: "nw" },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q2(iii)" },
      stem: t`At which point does the graph of $3x - 4y = -12$ cut the X-axis?`,
      verify: { kind: "value", inputs: { a: "3", b: "-4", c: "-12" }, params: { task: "xaxis" } },
      options: [
        { key: "A", text: t`$(-4, 0)$`, correct: true, value: "-4" },
        { key: "B", text: t`$(0, 3)$`, correct: false, misconceptionId: "C03-M1", value: "3*I" },
        { key: "C", text: t`$(-12, 0)$`, correct: false, misconceptionId: "C03-M3", value: "-12" },
        { key: "D", text: t`$(4, 0)$`, correct: false, misconceptionId: "C03-M5", value: "4" },
      ],
      solution: {
        steps: [
          t`Every point on the X-axis has $y = 0$.`,
          t`Put $y = 0$: $3x - 4(0) = -12$, so $3x = -12$ and $x = -4$.`,
          t`The line cuts the X-axis at $(-4, 0)$.`,
        ],
        figure: {
          alt: "The line 3x − 4y = −12. The X-axis is marked y = 0, and the line meets it at (−4, 0).",
          axes: "xy",
          view: { x: [-6, 2], y: [-2, 5] },
          elements: [
            { kind: "line", through: [[-4, 0], [0, 3]], tone: "muted" },
            { kind: "label", at: [-1.6, 3.4], label: "3x − 4y = −12", labelAt: "ne", tone: "muted" },
            { kind: "label", at: [1.2, 0], label: "y = 0", labelAt: "n", tone: "good", step: 1 },
            { kind: "point", at: [-4, 0], tone: "good", step: 3, label: "(−4, 0)", labelAt: "nw" },
          ],
        },
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q5(i)" },
      stem: t`The point $(2, 3)$ lies on the graph of $x + ay = 8$. Find the value of $a$.`,
      verify: { kind: "value", inputs: { p: "1", c: "8", x0: "2", y0: "3" }, params: { task: "coef" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$\frac{10}{3}$`, correct: false, misconceptionId: "C03-M2", value: "10/3" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C03-M3", value: "6" },
        { key: "D", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C03-M4", value: "5/2" },
      ],
      solution: {
        steps: [
          t`A point on the graph makes the equation true, so put $x = 2$ and $y = 3$.`,
          t`$2 + 3a = 8$, so $3a = 8 - 2 = 6$.`,
          t`Divide by $3$: $a = 2$. The line is $x + 2y = 8$.`,
        ],
        figure: {
          alt: "The point (2, 3) is marked, then the line x + 2y = 8 is drawn through it.",
          axes: "xy",
          view: { x: [-1, 9], y: [-1, 5] },
          elements: [
            { kind: "point", at: [2, 3], tone: "good", step: 1, label: "(2, 3)", labelAt: "ne" },
            { kind: "line", through: [[0, 4], [8, 0]], step: 3 },
            { kind: "label", at: [5, 1.6], label: "x + 2y = 8", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
  ],
};
