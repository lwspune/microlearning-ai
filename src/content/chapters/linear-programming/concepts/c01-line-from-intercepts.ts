import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`To draw $2x + 5y = 20$ you need just two points. **Which two are quickest to find?**`,
    reveal: t`Where it crosses the axes. Put $y = 0$: $2x = 20$, so $(10, 0)$. Put $x = 0$: $5y = 20$, so $(0, 4)$. Join them.`,
  },
  explanation: {
    intuition: t`Every LPP constraint has a straight boundary line, and the quickest way to draw it is from where it crosses the axes. On the $x$-axis $y = 0$; on the $y$-axis $x = 0$. Each crossing then takes just one division.`,
    formal: t`**Intercepts of $ax + by = c$:**
- $x$-intercept: put $y = 0$, giving $\left(\dfrac{c}{a}, 0\right)$
- $y$-intercept: put $x = 0$, giving $\left(0, \dfrac{c}{b}\right)$

**Intercept form:** $\dfrac{x}{p} + \dfrac{y}{q} = 1$ is the line through $(p, 0)$ and $(0, q)$. The intercepts sit under $x$ and $y$. Clear the fractions to get $ax + by = c$.

**Special lines:**
- $x = k$: vertical, through $(k, 0)$
- $y = k$: horizontal, through $(0, k)$
- $ax + by = 0$: passes through the origin, so both intercepts are $(0, 0)$. Pick any other $x$ and solve for $y$ to get a second point.`,
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
        { kind: "point", at: [10, 0], label: "(10, 0)", labelAt: "ne", step: 1 },
        { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "ne", step: 2 },
        { kind: "line", through: [[0, 4], [-5, 6]], step: 3 },
        { kind: "label", at: [6.5, 2.8], label: "2x + 5y = 20", step: 3 },
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
