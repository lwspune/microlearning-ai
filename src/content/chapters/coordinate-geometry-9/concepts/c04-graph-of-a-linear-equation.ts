import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`$(0, 4)$, $(1, 3)$ and $(4, 0)$ are three solutions of $x + y = 4$. If you plot them and join them, do you get a triangle?`,
    reveal: t`No. All three lie on one straight line. Every solution of $x + y = 4$ lies on that line: it is the graph of the equation.`,
  },
  explanation: {
    intuition: [
      t`A **solution** of $x + y = 4$ is a pair $(x, y)$ that makes it true, like $(0, 4)$.`,
      t`$(1, 3)$ and $(4, 0)$ are solutions too: $1 + 3$ and $4 + 0$ also make 4.`,
      t`Plot them: all three lie on one straight line.`,
      t`Every point of this line is a solution too, like $(2, 2)$ and $(5, -1)$.`,
      t`So this line is the **graph** of $x + y = 4$: the picture of all its solutions.`,
      t`Two points fix a line; plot a third as a check.`,
    ],
    formal: [
      {
        title: "A table of solutions",
        points: [
          t`A **linear equation in two variables** has the form $ax + by = c$, $a$ and $b$ not both 0, like $2x - y = 1$.`,
          t`Write $y$ alone: move $2x$ across, changing its sign, $-y = 1 - 2x$, so $y = 2x - 1$.`,
          t`Choose easy values of $x$: $x = 0$ gives $y = -1$, and $x = 1$ gives $y = 1$.`,
          t`A third value, $x = 2$, gives $y = 3$. Each pair is one column of the table.`,
          t`Plot $(0, -1)$, $(1, 1)$, $(2, 3)$ and join them with a ruler: that line is the graph.`,
          t`If the three points are not in one line, check the table again.`,
        ],
        figure: {
          alt: "The points (0, −1), (1, 1) and (2, 3) are plotted from the table of 2x − y = 1. A straight line is drawn through all three: the graph of y = 2x − 1.",
          axes: "xy",
          view: { x: [-3, 4], y: [-3, 4] },
          elements: [
            { kind: "label", at: [-2.8, 3.4], label: "2x − y = 1", labelAt: "e", step: 1 },
            { kind: "label", at: [-2.8, 2.6], label: "y = 2x − 1", labelAt: "e", step: 2 },
            { kind: "point", at: [0, -1], label: "(0, −1)", labelAt: "se", step: 3 },
            { kind: "point", at: [1, 1], label: "(1, 1)", labelAt: "se", step: 3 },
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "se", step: 4 },
            { kind: "line", through: [[0, -1], [1, 1]], step: 5 },
          ],
        },
      },
      {
        title: "Does a point lie on it?",
        points: [
          t`A point lies on the graph exactly when its co-ordinates make the equation true.`,
          t`Test $P(3, 5)$ in $2x - y = 1$: $2(3) - 5 = 1$. True, so $P$ is on the line.`,
          t`Test $Q(4, 2)$: $2(4) - 2 = 6$, not 1. So $Q$ is not on the line.`,
          t`Keep the order, $x$ first: $(5, 3)$ gives $2(5) - 3 = 7$, so it is not on it.`,
        ],
        figure: {
          alt: "The line 2x − y = 1 is drawn. P(3, 5) is marked on it. Q(4, 2) is marked off the line, and so is the point (5, 3).",
          axes: "xy",
          view: { x: [-2, 6], y: [-2, 6] },
          elements: [
            { kind: "line", through: [[0, -1], [1, 1]], step: 1 },
            { kind: "label", at: [2, 0.6], label: "2x − y = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [3, 5], label: "P(3, 5)", labelAt: "e", step: 2, tone: "good" },
            { kind: "point", at: [4, 2], label: "Q(4, 2)", labelAt: "e", step: 3, tone: "bad" },
            { kind: "point", at: [5, 3], label: "(5, 3)", labelAt: "w", step: 4, tone: "bad" },
          ],
        },
      },
      {
        title: "The line y = x",
        points: [
          t`On the graph of $y = x$, the two co-ordinates of every point are equal, like $(2, 2)$.`,
          t`$(-3, -3)$, $(0, 0)$ and $(2, 2)$ are on it; plot them and join them.`,
          t`The line passes through the origin and runs through quadrants I and III.`,
          t`So any point on the line $y = x$ has the form $(a, a)$.`,
          t`$(2, -2)$ is not on it, because its co-ordinates are not equal.`,
        ],
        figure: {
          alt: "The points (−3, −3), (0, 0) and (2, 2) are plotted and joined: the line y = x passes through the origin, through quadrants I and III. The point (2, −2) is marked off the line.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "point", at: [2, 2], label: "(2, 2)", labelAt: "e", step: 1 },
            { kind: "point", at: [-3, -3], label: "(−3, −3)", labelAt: "e", step: 2 },
            { kind: "point", at: [0, 0], label: "O(0, 0)", labelAt: "nw", step: 2 },
            { kind: "line", through: [[0, 0], [1, 1]], step: 3 },
            { kind: "label", at: [2.2, 3.2], label: "y = x", labelAt: "w", step: 3 },
            { kind: "label", at: [2.5, 1], label: "I", step: 3 },
            { kind: "label", at: [-2.5, -1], label: "III", step: 3 },
            { kind: "point", at: [2, -2], label: "(2, −2)", labelAt: "e", step: 5, tone: "bad" },
          ],
        },
      },
      {
        title: "Where it meets the axes",
        points: [
          t`On the X-axis, $y = 0$. Put $y = 0$ in $3x + 4y = 12$: $3x = 12$, so $x = 4$.`,
          t`On the Y-axis, $x = 0$. Put $x = 0$: $4y = 12$, so $y = 3$.`,
          t`Join $(4, 0)$ and $(0, 3)$: these two points are often the easiest to find.`,
        ],
        figure: {
          alt: "The line 3x + 4y = 12 is drawn. It crosses the X-axis at (4, 0) and the Y-axis at (0, 3).",
          axes: "xy",
          view: { x: [-2, 6], y: [-2, 5] },
          elements: [
            { kind: "line", through: [[-1, 0], [1, 0]], tone: "good", step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[0, -1], [0, 1]], tone: "good", step: 2 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 2 },
            { kind: "line", through: [[4, 0], [0, 3]], step: 3 },
            { kind: "label", at: [2.2, 2.4], label: "3x + 4y = 12", labelAt: "ne", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Draw the graph of $x + y = 2$.`,
      steps: [
        t`Put $x = 0$: $y = 2$. So $A(0, 2)$ is on the graph.`,
        t`Put $x = 2$: $2 + y = 2$, so $y = 0$. So $B(2, 0)$ is on the graph.`,
        t`A third point checks the work: $x = 1$ gives $y = 1$, so $C(1, 1)$.`,
        t`Plot $A$, $B$ and $C$. They lie on one line; draw it with a ruler.`,
      ],
      answer: t`The graph of $x + y = 2$ is the straight line through $(0, 2)$, $(1, 1)$ and $(2, 0)$.`,
      figure: {
        alt: "The points A(0, 2), B(2, 0) and C(1, 1) are plotted one by one and joined by a straight line, the graph of x + y = 2.",
        axes: "xy",
        view: { x: [-2, 4], y: [-2, 4] },
        elements: [
          { kind: "point", at: [0, 2], label: "A(0, 2)", labelAt: "ne", step: 1 },
          { kind: "point", at: [2, 0], label: "B(2, 0)", labelAt: "ne", step: 2 },
          { kind: "point", at: [1, 1], label: "C(1, 1)", labelAt: "ne", step: 3 },
          { kind: "line", through: [[0, 2], [2, 0]], step: 4 },
          { kind: "label", at: [3, 1.6], label: "x + y = 2", labelAt: "n", step: 4 },
        ],
      },
    },
    figure: {
      alt: "Three points (0, 4), (1, 3) and (4, 0) are plotted. A straight line is drawn through them. Two more points on the line, (2, 2) and (5, −1), are marked, and the line is labelled x + y = 4.",
      axes: "xy",
      view: { x: [-2, 6], y: [-2, 6] },
      elements: [
        { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "ne", step: 1 },
        { kind: "point", at: [1, 3], label: "(1, 3)", labelAt: "ne", step: 2 },
        { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", step: 2 },
        { kind: "line", through: [[0, 4], [4, 0]], step: 3 },
        { kind: "point", at: [2, 2], label: "(2, 2)", labelAt: "ne", step: 4, tone: "good" },
        { kind: "point", at: [5, -1], label: "(5, −1)", labelAt: "sw", step: 4, tone: "good" },
        { kind: "label", at: [4.6, 2], label: "x + y = 4", labelAt: "n", step: 5 },
      ],
    },
    visualSpec: t`Type $a$, $b$ and $c$; points of the table drop onto the grid one by one and a ruler line snaps through them, and a dragged point turns green only when it satisfies $ax + by = c$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Moves a term across the = sign without changing its sign: from $ax + by = c$ writes $by = c + ax$.`,
      remediation: t`A term that moves to the other side of = changes its sign: $ax + by = c$ gives $by = c - ax$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable (Std VIII)" },
    },
    {
      id: "C04-M2",
      mistake: t`Finds the right values but writes the point as $(y, x)$.`,
      remediation: t`A point is an ordered pair: write the $x$ co-ordinate first and the $y$ co-ordinate second.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M3",
      mistake: t`Forgets to divide by the coefficient: takes $by = k$ to mean $y = k$.`,
      remediation: t`After you get $by = k$, divide both sides by $b$, sign included, to get $y$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Puts the zero in the wrong co-ordinate: for the X-axis takes $x = 0$, for the Y-axis $y = 0$.`,
      remediation: t`Every point of the X-axis has $y = 0$, and every point of the Y-axis has $x = 0$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M5",
      mistake: t`Puts the given value in for the wrong variable: given $x$, substitutes it for $y$.`,
      remediation: t`Put the given value in place of its own letter: a given $x$ replaces $x$, and you then solve for $y$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C04-M3 gives the key when the unknown's coefficient is 1; C04-M2 when the point has $x = y$; C04-M5 when $a = b$ (as in $x + y = 2$); diagnose them away from these cases.`,
    "C04-M1 gives the key when the given value is 0, and does not apply to axis items, where C04-M4 is the conceptual check.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/coordinate-geometry-9/Ex 7.2 Q9(iii)" },
      stem: t`On the graph of $2x + y = 1$, which point has $x = -1$?`,
      verify: { kind: "value", inputs: { a: "2", b: "1", c: "1", g: "-1" }, params: { task: "x" } },
      options: [
        { key: "A", text: t`$(3, -1)$`, correct: false, misconceptionId: "C04-M2", value: "(3, -1)" },
        { key: "B", text: t`$(-1, 1)$`, correct: false, misconceptionId: "C04-M5", value: "(-1, 1)" },
        { key: "C", text: t`$(-1, 3)$`, correct: true, value: "(-1, 3)" },
        { key: "D", text: t`$(-1, -1)$`, correct: false, misconceptionId: "C04-M1", value: "(-1, -1)" },
      ],
      solution: {
        steps: [
          t`Put $x = -1$ in $2x + y = 1$: $-2 + y = 1$.`,
          t`Move $-2$ across and change its sign: $y = 1 + 2 = 3$.`,
          t`Write $x$ first: the point is $(-1, 3)$.`,
        ],
        figure: {
          alt: "The line 2x + y = 1 is drawn. A dashed segment up from −1 on the X-axis meets it at the point (−1, 3).",
          axes: "xy",
          view: { x: [-3, 3], y: [-2, 4] },
          elements: [
            { kind: "line", through: [[0, 1], [1, -1]] },
            { kind: "label", at: [1.5, -1.5], label: "2x + y = 1", labelAt: "e" },
            { kind: "segment", from: [-1, 0], to: [-1, 3], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-1, 3], label: "(−1, 3)", labelAt: "w", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/coordinate-geometry-9/Ex 7.2 Q9(ii)" },
      stem: t`On the graph of $3x - y = 0$, which point has $x = -2$?`,
      verify: { kind: "value", inputs: { a: "3", b: "-1", c: "0", g: "-2" }, params: { task: "x" } },
      options: [
        { key: "A", text: t`$(-2, 6)$`, correct: false, misconceptionId: "C04-M1", value: "(-2, 6)" },
        { key: "B", text: t`$(-6, -2)$`, correct: false, misconceptionId: "C04-M2", value: "(-6, -2)" },
        { key: "C", text: t`$(-2, - \frac{2}{3})$`, correct: false, misconceptionId: "C04-M5", value: "(-2, -2/3)" },
        { key: "D", text: t`$(-2, -6)$`, correct: true, value: "(-2, -6)" },
      ],
      solution: {
        steps: [
          t`Put $x = -2$ in $3x - y = 0$: $-6 - y = 0$.`,
          t`Move $-6$ across and change its sign: $-y = 6$, so $y = -6$.`,
          t`Write $x$ first: the point is $(-2, -6)$. The line passes through $O$.`,
        ],
        figure: {
          alt: "The line 3x − y = 0 is drawn through the origin. A dashed segment down from −2 on the X-axis meets it at (−2, −6).",
          axes: "xy",
          view: { x: [-4, 3], y: [-7, 3] },
          elements: [
            { kind: "line", through: [[0, 0], [1, 3]] },
            { kind: "label", at: [0.9, 2.5], label: "3x − y = 0", labelAt: "e" },
            { kind: "segment", from: [-2, -0.55], to: [-2, -6], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-2, -6], label: "(−2, −6)", labelAt: "e", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`The point $(2, k)$ lies on the graph of $3x + 2y = 12$. What is $k$?`,
      verify: { kind: "value", inputs: { a: "3", b: "2", c: "12", g: "2" }, params: { task: "x", out: "val" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C04-M3", value: "6" },
        { key: "B", text: t`$\frac{8}{3}$`, correct: false, misconceptionId: "C04-M5", value: "8/3" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C04-M1", value: "9" },
      ],
      solution: {
        steps: [
          t`A point lies on the graph when its co-ordinates make the equation true.`,
          t`Put $x = 2$ and $y = k$: $6 + 2k = 12$, so $2k = 6$.`,
          t`Divide by 2: $k = 3$. The point $(2, 3)$ is on the line.`,
        ],
        figure: {
          alt: "The line 3x + 2y = 12 is drawn. A dashed segment up from 2 on the X-axis meets it at (2, 3).",
          axes: "xy",
          view: { x: [-1, 6], y: [-1, 7] },
          elements: [
            { kind: "line", through: [[4, 0], [0, 6]] },
            { kind: "label", at: [4.3, 0.4], label: "3x + 2y = 12", labelAt: "ne" },
            { kind: "segment", from: [2, 0], to: [2, 3], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "e", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/coordinate-geometry-9/Ex 7.2 Q9(i)" },
      stem: t`Where does the graph of $2x - 3y = 6$ cross the X-axis?`,
      verify: { kind: "value", inputs: { a: "2", b: "-3", c: "6" }, params: { task: "xaxis" } },
      options: [
        { key: "A", text: t`$(0, 3)$`, correct: false, misconceptionId: "C04-M2", value: "(0, 3)" },
        { key: "B", text: t`$(6, 0)$`, correct: false, misconceptionId: "C04-M3", value: "(6, 0)" },
        { key: "C", text: t`$(0, -2)$`, correct: false, misconceptionId: "C04-M4", value: "(0, -2)" },
        { key: "D", text: t`$(3, 0)$`, correct: true, value: "(3, 0)" },
      ],
      solution: {
        steps: [
          t`Every point of the X-axis has $y = 0$.`,
          t`Put $y = 0$ in $2x - 3y = 6$: $2x = 6$, so $x = 3$.`,
          t`The graph crosses the X-axis at $(3, 0)$.`,
        ],
        figure: {
          alt: "The line 2x − 3y = 6 is drawn. The X-axis is highlighted; the line crosses it at (3, 0).",
          axes: "xy",
          view: { x: [-2, 5], y: [-4, 2] },
          elements: [
            { kind: "line", through: [[3, 0], [0, -2]] },
            { kind: "label", at: [4.2, 1.3], label: "2x − 3y = 6", labelAt: "w" },
            { kind: "line", through: [[-1, 0], [1, 0]], tone: "good", step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "nw", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/coordinate-geometry-9/Ex 7.2 Q9(iii)" },
      stem: t`Where does the graph of $x - 2y = 4$ cross the Y-axis?`,
      verify: { kind: "value", inputs: { a: "1", b: "-2", c: "4" }, params: { task: "yaxis" } },
      options: [
        { key: "A", text: t`$(4, 0)$`, correct: false, misconceptionId: "C04-M4", value: "(4, 0)" },
        { key: "B", text: t`$(0, -2)$`, correct: true, value: "(0, -2)" },
        { key: "C", text: t`$(-2, 0)$`, correct: false, misconceptionId: "C04-M2", value: "(-2, 0)" },
        { key: "D", text: t`$(0, 4)$`, correct: false, misconceptionId: "C04-M3", value: "(0, 4)" },
      ],
      solution: {
        steps: [
          t`Every point of the Y-axis has $x = 0$.`,
          t`Put $x = 0$ in $x - 2y = 4$: $-2y = 4$.`,
          t`Divide by $-2$: $y = -2$. The graph crosses the Y-axis at $(0, -2)$.`,
        ],
        figure: {
          alt: "The line x − 2y = 4 is drawn. The Y-axis is highlighted; the line crosses it at (0, −2).",
          axes: "xy",
          view: { x: [-2, 5], y: [-4, 2] },
          elements: [
            { kind: "line", through: [[4, 0], [0, -2]] },
            { kind: "label", at: [4.6, 0.6], label: "x − 2y = 4", labelAt: "w" },
            { kind: "line", through: [[0, -1], [0, 1]], tone: "good", step: 1 },
            { kind: "point", at: [0, -2], label: "(0, −2)", labelAt: "se", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`On the graph of $2x + 3y = 5$, which point has $y = 3$?`,
      verify: { kind: "value", inputs: { a: "2", b: "3", c: "5", g: "3" }, params: { task: "y" } },
      options: [
        { key: "A", text: t`$(-2, 3)$`, correct: true, value: "(-2, 3)" },
        { key: "B", text: t`$(7, 3)$`, correct: false, misconceptionId: "C04-M1", value: "(7, 3)" },
        { key: "C", text: t`$(3, -2)$`, correct: false, misconceptionId: "C04-M2", value: "(3, -2)" },
        { key: "D", text: t`$(-4, 3)$`, correct: false, misconceptionId: "C04-M3", value: "(-4, 3)" },
      ],
      solution: {
        steps: [
          t`Put $y = 3$ in $2x + 3y = 5$: $2x + 9 = 5$.`,
          t`Move 9 across and change its sign: $2x = 5 - 9 = -4$.`,
          t`Divide by 2: $x = -2$. Write $x$ first: $(-2, 3)$.`,
        ],
        figure: {
          alt: "The line 2x + 3y = 5 is drawn. A dashed segment across from 3 on the Y-axis meets it at (−2, 3).",
          axes: "xy",
          view: { x: [-4, 4], y: [-2, 4] },
          elements: [
            { kind: "line", through: [[1, 1], [4, -1]] },
            { kind: "label", at: [2.5, 1.1], label: "2x + 3y = 5", labelAt: "ne" },
            { kind: "segment", from: [-0.5, 3], to: [-2, 3], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-2, 3], label: "(−2, 3)", labelAt: "sw", step: 3, tone: "good" },
          ],
        },
      },
    },
  ],
};
