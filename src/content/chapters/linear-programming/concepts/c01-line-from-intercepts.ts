import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`To draw $2x + 5y = 20$ you need just two points. **Which two are quickest to find?**`,
    reveal: t`Where it crosses the axes. Put $y = 0$: $2x = 20$, so $(10, 0)$. Put $x = 0$: $5y = 20$, so $(0, 4)$. Join them.`,
  },
  explanation: {
    intuition: [
      t`In a **linear programming problem** (LPP), each condition on $x$ and $y$ is a **constraint**, like $2x + 5y \le 20$.`,
      t`Its **boundary line**, $2x + 5y = 20$, is the straight edge between the points that meet it and those that don't.`,
      t`Two points fix a line, and the quickest two are where it crosses the axes: its **intercepts**.`,
      t`On the $x$-axis $y = 0$, so $2x = 20$ and the line crosses at $(10, 0)$.`,
      t`On the $y$-axis $x = 0$, so $5y = 20$ and it crosses at $(0, 4)$.`,
      t`Join the two crossings: each one took just one division.`,
    ],
    formal: [
      {
        title: "Intercepts of a line",
        points: [
          t`Take a line $ax + by = c$, with $a$, $b$, $c$ not zero, such as $3x + 4y = 12$.`,
          t`The **$x$-intercept** is where it crosses the $x$-axis: put $y = 0$, so $ax = c$.`,
          t`That gives $\left(\dfrac{c}{a}, 0\right)$: here $x = \dfrac{12}{3} = 4$, so $(4, 0)$.`,
          t`The **$y$-intercept** is where it crosses the $y$-axis: put $x = 0$, so $by = c$.`,
          t`That gives $\left(0, \dfrac{c}{b}\right)$: here $y = \dfrac{12}{4} = 3$, so $(0, 3)$.`,
          t`Each time, divide $c$ by the coefficient of the variable that stays.`,
        ],
        figure: {
          alt: "The line 3x + 4y = 12. Putting y = 0 gives its x-intercept (4, 0); putting x = 0 gives its y-intercept (0, 3).",
          axes: "xy",
          view: { x: [-1, 5.5], y: [-1, 4] },
          elements: [
            { kind: "line", through: [[4, 0], [0, 3]], step: 1 },
            { kind: "label", at: [2.2, 1.6], label: "3x + 4y = 12", labelAt: "ne", step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", step: 3 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 5 },
          ],
        },
      },
      {
        title: "Intercept form",
        points: [
          t`The **intercept form** of a line is $\dfrac{x}{p} + \dfrac{y}{q} = 1$, like $\dfrac{x}{4} + \dfrac{y}{3} = 1$.`,
          t`Put $y = 0$: then $x = p$, so the line passes through $(p, 0)$.`,
          t`Put $x = 0$: then $y = q$, so it passes through $(0, q)$.`,
          t`So the intercepts sit in the equation, under $x$ and under $y$.`,
          t`Clear the fractions to get $ax + by = c$: multiplying by $12$ gives $3x + 4y = 12$.`,
        ],
        figure: {
          alt: "The line x/4 + y/3 = 1. It passes through (p, 0) = (4, 0) and (0, q) = (0, 3), the numbers under x and y. Clearing the fractions gives the same line as 3x + 4y = 12.",
          axes: "xy",
          view: { x: [-1, 5.5], y: [-1, 4] },
          elements: [
            { kind: "line", through: [[4, 0], [0, 3]], step: 1 },
            { kind: "label", at: [2.2, 1.6], label: "x/4 + y/3 = 1", labelAt: "ne", step: 1 },
            { kind: "point", at: [4, 0], label: "(p, 0)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [0, 3], label: "(0, q)", labelAt: "ne", tone: "good", step: 3 },
            { kind: "label", at: [2.2, 2.2], label: "3x + 4y = 12", labelAt: "ne", step: 5 },
          ],
        },
      },
      {
        title: "Lines parallel to an axis",
        points: [
          t`The line $x = k$ is **vertical**, running straight up and down, through $(k, 0)$.`,
          t`For $k \ne 0$ it never meets the $y$-axis, so it has no $y$-intercept.`,
          t`The line $y = k$ is **horizontal**, running straight across, through $(0, k)$.`,
          t`For $k \ne 0$ it never meets the $x$-axis, so it has no $x$-intercept.`,
        ],
        figure: {
          alt: "The vertical line x = 3 through (3, 0), and the horizontal line y = 2 through (0, 2).",
          axes: "xy",
          view: { x: [-1, 5], y: [-1, 4] },
          elements: [
            { kind: "line", through: [[3, 0], [3, 1]], step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "ne", step: 1 },
            { kind: "label", at: [3, 3.3], label: "x = 3", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 2], [1, 2]], step: 3 },
            { kind: "point", at: [0, 2], label: "(0, 2)", labelAt: "ne", step: 3 },
            { kind: "label", at: [4.2, 2], label: "y = 2", labelAt: "n", step: 3 },
          ],
        },
      },
      {
        title: "Lines through the origin",
        points: [
          t`The line $ax + by = 0$ passes through the **origin** $(0, 0)$, where the axes meet.`,
          t`Both its intercepts are $(0, 0)$, so they give only one point.`,
          t`So pick any other $x$ and solve for $y$ to get a second point.`,
          t`For $3x - 2y = 0$, put $x = 2$: $6 - 2y = 0$, so $y = 3$.`,
          t`Join $(0, 0)$ and $(2, 3)$ to draw the line.`,
        ],
        figure: {
          alt: "The line 3x − 2y = 0 through the origin (0, 0) and the point (2, 3), found by putting x = 2.",
          axes: "xy",
          view: { x: [-1.5, 4], y: [-1.5, 4] },
          elements: [
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "e", step: 4 },
            { kind: "line", through: [[0, 0], [2, 3]], step: 5 },
            { kind: "label", at: [2.4, 2.2], label: "3x − 2y = 0", labelAt: "e", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Draw the boundary line of $4x + 5y \le 40$.`,
      steps: [
        t`Put $y = 0$: $4x = 40$, so $x = 10$. Mark $(10, 0)$.`,
        t`Put $x = 0$: $5y = 40$, so $y = 8$. Mark $(0, 8)$.`,
        t`Join them: that is the line $4x + 5y = 40$.`,
      ],
      answer: t`The line through $(10, 0)$ and $(0, 8)$`,
      figure: {
        alt: "The line 4x + 5y = 40 drawn through its axis crossings (10, 0) and (0, 8).",
        axes: "xy",
        view: { x: [-1.2, 12], y: [-1.2, 10] },
        elements: [
          { kind: "point", at: [10, 0], label: "(10, 0)", labelAt: "ne", step: 1 },
          { kind: "point", at: [0, 8], label: "(0, 8)", labelAt: "ne", step: 2 },
          { kind: "line", through: [[0, 8], [-5, 12]], step: 3 },
          { kind: "label", at: [6.5, 4.6], label: "4x + 5y = 40", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The line 2x + 5y = 20 drawn through its axis crossings (10, 0) and (0, 4).",
      axes: "xy",
      view: { x: [-1.2, 12], y: [-1.2, 6] },
      elements: [
        { kind: "point", at: [10, 0], label: "(10, 0)", labelAt: "ne", step: 4 },
        { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "ne", step: 5 },
        { kind: "line", through: [[0, 4], [-5, 6]], step: 6 },
        { kind: "label", at: [6.5, 2.8], label: "2x + 5y = 20", step: 6 },
      ],
    },
    visualSpec: t`Drag the two axis crossings; the line through them redraws and its equation updates in both forms, $ax + by = c$ and $\dfrac{x}{p} + \dfrac{y}{q} = 1$.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Dividing by the wrong coefficient, which swaps the intercepts",
      remediation: t`On the $x$-axis $y = 0$, so the $y$-term vanishes and you divide $c$ by the coefficient of $x$. On the $y$-axis, divide by the coefficient of $y$.`,
      fallback: { kind: "ext", topic: "straight lines" },
    },
    {
      id: "C01-M2",
      mistake: "Reading the coefficients as the intercepts",
      remediation: t`$4x + 5y = 20$ does not cross the axes at $4$ and $5$: it crosses at $(5, 0)$ and $(0, 4)$. The intercepts are $\dfrac{c}{a}$ and $\dfrac{c}{b}$. Only in the form $\dfrac{x}{p} + \dfrac{y}{q} = 1$ do they sit in the equation.`,
      fallback: { kind: "ext", topic: "straight lines" },
    },
    {
      id: "C01-M3",
      mistake: t`Flipping the intercept form to $px + qy = 1$`,
      remediation: t`The line through $(p, 0)$ and $(0, q)$ is $\dfrac{x}{p} + \dfrac{y}{q} = 1$: the intercepts divide. Check: $(p, 0)$ gives $\dfrac{p}{p} = 1$.`,
      fallback: { kind: "ext", topic: "straight lines" },
    },
    {
      id: "C01-M4",
      mistake: t`Taking the constant $c$ as both intercepts, as for $x + y = c$`,
      remediation: t`Only when both coefficients are $1$ does the line cross at $c$. For $3x + 2y = 12$, put $y = 0$: $3x = 12$, so $x = 4$, not $12$. Divide $c$ by the coefficient.`,
      fallback: { kind: "ext", topic: "straight lines" },
    },
    {
      id: "C01-M5",
      mistake: t`Losing the minus sign in the slope $-\dfrac{q}{p}$`,
      remediation: t`From $(p, 0)$ to $(0, q)$ the line falls as $x$ grows, so its slope is $-\dfrac{q}{p}$. Check your equation at both intercepts: $(p, 0)$ must satisfy it too.`,
      fallback: { kind: "ext", topic: "straight lines" },
    },
  ],
  engineNotes: [
    "C01-M1 (swapped intercepts) gives the key when the two coefficients are equal; draw diagnosing items with a ≠ b.",
    "C01-M2 (coefficients as intercepts) gives the key when c = a² (x-intercept) or c = b² (y-intercept); avoid those inputs.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "authored" },
      stem: t`Where does the line $3x + 2y = 12$ cross the $x$-axis?`,
      verify: { kind: "value", inputs: {  }, params: { line: "3*x + 2*y = 12", ask: "x" } },
      options: [
        { key: "A", text: t`$(4, 0)$`, correct: true, value: "4" },
        { key: "B", text: t`$(6, 0)$`, correct: false, misconceptionId: "C01-M1", value: "6" },
        { key: "C", text: t`$(3, 0)$`, correct: false, misconceptionId: "C01-M2", value: "3" },
        { key: "D", text: t`$(12, 0)$`, correct: false, misconceptionId: "C01-M4", value: "12" },
      ],
      solution: {
        steps: [
          t`On the $x$-axis $y = 0$, so $3x = 12$.`,
          t`$x = 4$: the line crosses at $(4, 0)$.`,
        ],
        figure: {
          alt: "The line 3x + 2y = 12 crossing the x-axis at (4, 0).",
          axes: "xy",
          view: { x: [-0.75, 6], y: [-0.75, 7.5] },
          elements: [
            { kind: "line", through: [[0, 6], [-2, 9]], step: 1 },
            { kind: "label", at: [3, 3.6], label: "3x + 2y = 12", step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`Where does the line $5x + 2y = 20$ cross the $y$-axis?`,
      verify: { kind: "value", inputs: {  }, params: { line: "5*x + 2*y = 20", ask: "y" } },
      options: [
        { key: "A", text: t`$(0, 2)$`, correct: false, misconceptionId: "C01-M2", value: "2*I" },
        { key: "B", text: t`$(0, 10)$`, correct: true, value: "10*I" },
        { key: "C", text: t`$(0, 4)$`, correct: false, misconceptionId: "C01-M1", value: "4*I" },
        { key: "D", text: t`$(0, 20)$`, correct: false, misconceptionId: "C01-M4", value: "20*I" },
      ],
      solution: {
        steps: [
          t`On the $y$-axis $x = 0$, so $2y = 20$.`,
          t`$y = 10$: the line crosses at $(0, 10)$.`,
        ],
        figure: {
          alt: "The line 5x + 2y = 20 crossing the y-axis at (0, 10).",
          axes: "xy",
          view: { x: [-1.2, 6], y: [-1.2, 12] },
          elements: [
            { kind: "line", through: [[0, 10], [-2, 15]], step: 1 },
            { kind: "label", at: [3.2, 5], label: "5x + 2y = 20", step: 1 },
            { kind: "point", at: [0, 10], label: "(0, 10)", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`A boundary line cuts the axes at $(6, 0)$ and $(0, 4)$. Its equation is:`,
      verify: { kind: "locus", inputs: { p: "6", q: "4" }, params: { ask: "equation" } },
      options: [
        { key: "A", text: t`$3x + 2y = 12$`, correct: false, misconceptionId: "C01-M1", value: "3*x + 2*y - 12" },
        { key: "B", text: t`$6x + 4y = 1$`, correct: false, misconceptionId: "C01-M3", value: "6*x + 4*y - 1" },
        { key: "C", text: t`$2x + 3y = 12$`, correct: true, value: "2*x + 3*y - 12" },
        { key: "D", text: t`$2x - 3y = -12$`, correct: false, misconceptionId: "C01-M5", value: "2*x - 3*y + 12" },
      ],
      solution: {
        steps: [
          t`Intercept form: $\dfrac{x}{6} + \dfrac{y}{4} = 1$.`,
          t`Multiply by $12$: $2x + 3y = 12$.`,
          t`Check: $(6, 0)$ gives $12$ and $(0, 4)$ gives $12$.`,
        ],
        figure: {
          alt: "The line 2x + 3y = 12 through (6, 0) and (0, 4); both points check.",
          axes: "xy",
          view: { x: [-0.8, 8], y: [-0.8, 5.5] },
          elements: [
            { kind: "point", at: [6, 0], label: "(6, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[0, 4], [-3, 6]], step: 2 },
            { kind: "label", at: [4, 2.8], label: "2x + 3y = 12", step: 2 },
            { kind: "point", at: [6, 0], tone: "good", step: 3 },
            { kind: "point", at: [0, 4], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`The line $4x + 3y = 60$ meets the axes at:`,
      verify: { kind: "value", inputs: {  }, params: { line: "4*x + 3*y = 60", ask: "both" } },
      options: [
        { key: "A", text: t`$(20, 0)$ and $(0, 15)$`, correct: false, misconceptionId: "C01-M1", value: "20 + 15*I" },
        { key: "B", text: t`$(4, 0)$ and $(0, 3)$`, correct: false, misconceptionId: "C01-M2", value: "4 + 3*I" },
        { key: "C", text: t`$(15, 0)$ and $(0, 20)$`, correct: true, value: "15 + 20*I" },
        { key: "D", text: t`$(60, 0)$ and $(0, 60)$`, correct: false, misconceptionId: "C01-M4", value: "60 + 60*I" },
      ],
      solution: {
        steps: [
          t`Put $y = 0$: $4x = 60$, so $x = 15$. That gives $(15, 0)$.`,
          t`Put $x = 0$: $3y = 60$, so $y = 20$. That gives $(0, 20)$.`,
          t`The line meets the axes at $(15, 0)$ and $(0, 20)$.`,
        ],
        figure: {
          alt: "The line 4x + 3y = 60 meeting the axes at (15, 0) and (0, 20).",
          axes: "xy",
          view: { x: [-2.3, 18], y: [-2.3, 23] },
          elements: [
            { kind: "point", at: [15, 0], label: "(15, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 20], label: "(0, 20)", labelAt: "ne", step: 2 },
            { kind: "line", through: [[0, 20], [-3, 24]], step: 3 },
            { kind: "label", at: [9, 12.5], label: "4x + 3y = 60", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`Where does the line $\dfrac{x}{5} + \dfrac{y}{2} = 1$ cross the $x$-axis?`,
      verify: { kind: "value", inputs: {  }, params: { line: "x/5 + y/2 = 1", ask: "x" } },
      options: [
        { key: "A", text: t`$(\frac{1}{5}, 0)$`, correct: false, misconceptionId: "C01-M2", value: "1/5" },
        { key: "B", text: t`$(5, 0)$`, correct: true, value: "5" },
        { key: "C", text: t`$(2, 0)$`, correct: false, misconceptionId: "C01-M1", value: "2" },
        { key: "D", text: t`$(1, 0)$`, correct: false, misconceptionId: "C01-M4", value: "1" },
      ],
      solution: {
        steps: [
          t`On the $x$-axis $y = 0$, so $\dfrac{x}{5} = 1$.`,
          t`$x = 5$: the line crosses at $(5, 0)$, the number under $x$.`,
        ],
        figure: {
          alt: "The line x/5 + y/2 = 1 crossing the x-axis at (5, 0).",
          axes: "xy",
          view: { x: [-0.65, 6.5], y: [-0.65, 3] },
          elements: [
            { kind: "line", through: [[0, 2], [-0.5, 2.2]], step: 1 },
            { kind: "label", at: [3, 1.7], label: "x/5 + y/2 = 1", step: 1 },
            { kind: "point", at: [5, 0], label: "(5, 0)", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`A boundary line cuts the axes at $(8, 0)$ and $(0, 3)$. Its equation is:`,
      verify: { kind: "locus", inputs: { p: "8", q: "3" }, params: { ask: "equation" } },
      options: [
        { key: "A", text: t`$8x + 3y = 1$`, correct: false, misconceptionId: "C01-M3", value: "8*x + 3*y - 1" },
        { key: "B", text: t`$3x + 8y = 24$`, correct: true, value: "3*x + 8*y - 24" },
        { key: "C", text: t`$8x + 3y = 24$`, correct: false, misconceptionId: "C01-M1", value: "8*x + 3*y - 24" },
        { key: "D", text: t`$3x - 8y = -24$`, correct: false, misconceptionId: "C01-M5", value: "3*x - 8*y + 24" },
      ],
      solution: {
        steps: [
          t`Intercept form: $\dfrac{x}{8} + \dfrac{y}{3} = 1$.`,
          t`Multiply by $24$: $3x + 8y = 24$.`,
          t`Check: $(8, 0)$ gives $24$ and $(0, 3)$ gives $24$.`,
        ],
        figure: {
          alt: "The line 3x + 8y = 24 through (8, 0) and (0, 3); both points check.",
          axes: "xy",
          view: { x: [-1, 10], y: [-1, 4.5] },
          elements: [
            { kind: "point", at: [8, 0], label: "(8, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[0, 3], [-8, 6]], step: 2 },
            { kind: "label", at: [4.8, 2.2], label: "3x + 8y = 24", step: 2 },
            { kind: "point", at: [8, 0], tone: "good", step: 3 },
            { kind: "point", at: [0, 3], tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
