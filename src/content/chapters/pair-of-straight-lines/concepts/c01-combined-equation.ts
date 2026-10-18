import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`The $X$-axis is $y = 0$ and the $Y$-axis is $x = 0$. **Can one equation describe both axes at once?**`,
    reveal: t`Yes: $xy = 0$. A product is $0$ exactly when one factor is $0$, so $xy = 0$ holds where $x = 0$ or $y = 0$: on one axis or the other.`,
  },
  explanation: {
    intuition: [
      t`One equation can describe two lines at once, such as $y = 2x$ and $y = -x$.`,
      t`A point lies on the pair when it lies on the first line or on the second.`,
      t`Write each line with $0$ on the right: $y - 2x = 0$ and $y + x = 0$.`,
      t`A product is $0$ exactly when one of its factors is $0$.`,
      t`So $(y - 2x)(y + x) = 0$ holds on both lines, and nowhere else.`,
      t`Multiplied out, it is $y^2 - xy - 2x^2 = 0$: one equation for the pair.`,
    ],
    formal: [
      {
        title: "The joint equation",
        points: [
          t`Write each line with $0$ on the right, as $u = 0$ and $v = 0$.`,
          t`Here $u$ and $v$ stand for expressions in $x$ and $y$, such as $x + y - 2$.`,
          t`A point is on the pair when $u = 0$ there, or $v = 0$ there.`,
          t`A product is $0$ exactly when one of its factors is $0$.`,
          t`So the pair is $uv = 0$: the **combined equation**, or **joint equation**, of the two lines.`,
        ],
        figure: {
          alt: "Two lines, u = 0 and v = 0, crossing at (0, 1). The point P lies on u = 0 and the point Q lies on v = 0. At each of them one factor is 0, so uv = 0 at both.",
          axes: "xy",
          view: { x: [-3, 3.5], y: [-2, 3.5] },
          elements: [
            { kind: "line", through: [[-2, 0], [2, 2]], label: "u = 0", labelAt: "se", step: 1 },
            { kind: "line", through: [[1, 0], [-1, 2]], label: "v = 0", labelAt: "ne", step: 1 },
            { kind: "point", at: [2, 2], label: "P: u = 0", labelAt: "se", tone: "good", step: 3 },
            { kind: "point", at: [-1, 2], label: "Q: v = 0", labelAt: "sw", tone: "good", step: 3 },
            { kind: "label", at: [0.5, -1.4], label: "uv = 0 at P and at Q", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "Lines through the origin",
        points: [
          t`Lines through the origin have no constant term: $a_1x + b_1y = 0$ and $a_2x + b_2y = 0$.`,
          t`Multiply them: $(a_1x + b_1y)(a_2x + b_2y) = 0$.`,
          t`Two of its four terms are in $xy$, so it is $a_1a_2x^2 + (a_1b_2 + a_2b_1)xy$ $+ b_1b_2y^2 = 0$.`,
          t`The **degree** of a term is its total power of $x$ and $y$: $x^2$, $xy$ and $y^2$ have degree two.`,
          t`An equation is **homogeneous** when all its terms have the same degree.`,
          t`This one is homogeneous of degree two, written $ax^2 + 2hxy + by^2 = 0$.`,
        ],
        figure: {
          alt: "Two lines through the origin, a₁x + b₁y = 0 and a₂x + b₂y = 0. Their joint equation is ax² + 2hxy + by² = 0, with every term of degree two.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            { kind: "point", at: [0, 0], step: 1 },
            { kind: "line", through: [[0, 0], [2, 1]], label: "a₁x + b₁y = 0", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, 0], [-1, 2]], label: "a₂x + b₂y = 0", labelAt: "e", step: 1 },
            { kind: "label", at: [-2.8, -2.5], label: "ax² + 2hxy + by² = 0", labelAt: "e", step: 6 },
          ],
        },
      },
      {
        title: "From slopes to the equation",
        points: [
          t`The line through the origin with slope $m$ is $y = mx$, that is $y - mx = 0$.`,
          t`Slopes $1$ and $-4$ give the lines $y - x = 0$ and $y + 4x = 0$.`,
          t`Their joint equation is $(y - x)(y + 4x) = 0$.`,
          t`That is $y^2 + 3xy - 4x^2 = 0$, or $4x^2 - 3xy - y^2 = 0$.`,
          t`Mind the sign: $y + mx = 0$ has slope $-m$, not $m$.`,
        ],
        figure: {
          alt: "Through the origin, the line y − x = 0 of slope 1 and the line y + 4x = 0 of slope −4. Their joint equation is 4x² − 3xy − y² = 0. A dashed line y + x = 0, of slope −1, is marked wrong for slope 1.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            { kind: "line", through: [[0, 0], [1, 1]], label: "y − x = 0", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, 0], [-0.5, 2]], label: "y + 4x = 0", labelAt: "e", step: 2 },
            { kind: "label", at: [0.3, -2.5], label: "(y − x)(y + 4x) = 0", labelAt: "e", step: 3 },
            { kind: "line", through: [[0, 0], [-1, 1]], dashed: true, tone: "bad", step: 5 },
            { kind: "label", at: [-2.9, 0.45], label: "y + x = 0: slope −1", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Lines not through the origin",
        points: [
          t`A line parallel to the $Y$-axis keeps one $x$-value all along it: here $x = 1$.`,
          t`A line parallel to the $X$-axis keeps one $y$-value: here $y = -2$.`,
          t`Their joint equation is $(x - 1)(y + 2) = 0$, so $xy + 2x - y - 2 = 0$.`,
          t`It has $x$, $y$ and constant terms too, so it is not homogeneous.`,
          t`Dropping those terms leaves $xy = 0$: the two axes, a different pair.`,
        ],
        figure: {
          alt: "The vertical line x = 1 and the horizontal line y = −2 meet at (1, −2). Their joint equation is xy + 2x − y − 2 = 0. The two axes are marked wrong: they are xy = 0, a different pair.",
          axes: "xy",
          view: { x: [-3, 3.5], y: [-3.5, 2.5] },
          elements: [
            { kind: "line", through: [[1, 0], [1, 1]], label: "x = 1", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, -2], [1, -2]], label: "y = −2", labelAt: "s", step: 2 },
            { kind: "label", at: [-2.9, 1.9], label: "xy + 2x − y − 2 = 0", labelAt: "e", step: 3 },
            { kind: "segment", from: [-3, 0], to: [3.5, 0], tone: "bad", dashed: true, step: 5 },
            { kind: "segment", from: [0, -3.5], to: [0, 2.5], tone: "bad", dashed: true, step: 5 },
            { kind: "label", at: [-2.5, 0], label: "xy = 0", labelAt: "n", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Adding gives one line",
        points: [
          t`Adding the equations gives $u + v = 0$, of degree one: a single line.`,
          t`For $x - y = 0$ and $x + y - 4 = 0$, the sum is $2x - 4 = 0$, the line $x = 2$.`,
          t`It passes through $(2, 2)$, where the two lines meet, and misses the rest of them.`,
          t`Only the product $(x - y)(x + y - 4) = 0$ holds on all of both lines.`,
        ],
        figure: {
          alt: "The lines x − y = 0 and x + y − 4 = 0 meet at (2, 2). Their sum, 2x − 4 = 0, is the dashed vertical line x = 2, marked wrong: it shares only the point (2, 2) with the pair. The product (x − y)(x + y − 4) = 0 is the pair itself.",
          axes: "xy",
          view: { x: [-1, 5], y: [-1, 5] },
          elements: [
            { kind: "line", through: [[0, 0], [1, 1]], label: "x − y = 0", labelAt: "se", step: 1 },
            { kind: "line", through: [[4, 0], [0, 4]], label: "x + y − 4 = 0", labelAt: "e", step: 1 },
            { kind: "line", through: [[2, 0], [2, 1]], dashed: true, tone: "bad", label: "x = 2", labelAt: "e", step: 2 },
            { kind: "point", at: [2, 2], label: "(2, 2)", labelAt: "e", step: 3 },
            { kind: "label", at: [-0.8, 4.6], label: "(x − y)(x + y − 4) = 0", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the combined equation of the lines $x + y - 2 = 0$ and $2x - y + 2 = 0$.`,
      steps: [
        t`The joint equation of $u = 0$ and $v = 0$ is $uv = 0$: here $(x + y - 2)(2x - y + 2) = 0$.`,
        t`Multiply each term of the first bracket into the second: $x(2x - y + 2)$ $+ y(2x - y + 2)$ $- 2(2x - y + 2) = 0$.`,
        t`That gives $2x^2 - xy + 2x$ $+ 2xy - y^2 + 2y$ $- 4x + 2y - 4 = 0$.`,
        t`Collect like terms: $2x^2 + xy - y^2$ $- 2x + 4y - 4 = 0$.`,
        t`Check with $(0, 2)$, where the lines meet: $-4 + 8 - 4 = 0$.`,
      ],
      answer: t`$2x^2 + xy - y^2 - 2x + 4y - 4 = 0$`,
      figure: {
        alt: "The lines x + y − 2 = 0 and 2x − y + 2 = 0 meet at (0, 2). Their joint equation is 2x² + xy − y² − 2x + 4y − 4 = 0, which (0, 2) satisfies.",
        axes: "xy",
        view: { x: [-3, 3.5], y: [-2, 4.5] },
        elements: [
          { kind: "line", through: [[0, 2], [2, 0]], label: "x + y − 2 = 0", labelAt: "sw", step: 1 },
          { kind: "line", through: [[-1, 0], [0, 2]], label: "2x − y + 2 = 0", labelAt: "se", step: 1 },
          { kind: "point", at: [0, 2], label: "(0, 2)", labelAt: "e", tone: "good", step: 5 },
        ],
      },
    },
    figure: {
      alt: "The lines y = 2x and y = −x cross at the origin. The point (1, 2) lies on y = 2x and (−2, 2) lies on y = −x, so both satisfy (y − 2x)(y + x) = 0. The point (2, 1) lies on neither line, and there the product is −9, not 0.",
      axes: "xy",
      view: { x: [-3.5, 3.5], y: [-3, 3.5] },
      elements: [
        { kind: "line", through: [[0, 0], [1, 2]], label: "y = 2x", labelAt: "e", step: 1 },
        { kind: "line", through: [[0, 0], [-1, 1]], label: "y = −x", labelAt: "ne", step: 1 },
        { kind: "point", at: [1, 2], label: "(1, 2)", labelAt: "e", tone: "good", step: 2 },
        { kind: "point", at: [-2, 2], label: "(−2, 2)", labelAt: "w", tone: "good", step: 2 },
        { kind: "point", at: [2, 1], label: "(2, 1): −9 ≠ 0", labelAt: "se", tone: "bad", hollow: true, step: 5 },
        { kind: "label", at: [0.2, -2.5], label: "y² − xy − 2x² = 0", labelAt: "e", step: 6 },
      ],
    },
    visualSpec: t`Drag two lines; their joint equation $uv = 0$ updates, and a test point lights up when it lies on either line.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Adds the two equations, $u + v = 0$, instead of multiplying them.`,
      remediation: t`A point on the pair makes $u = 0$ or $v = 0$, and that is $uv = 0$. Adding gives $u + v = 0$, just one line through the point where the two lines meet.`,
      fallback: { kind: "ext", topic: "zero product rule" },
    },
    {
      id: "C01-M2",
      mistake: t`Multiplies like terms only ($x$ by $x$, $y$ by $y$, constant by constant) and drops the cross terms.`,
      remediation: t`Multiply every term of one bracket by every term of the other. The $xy$ term comes from the cross products: $(a_1b_2 + a_2b_1)xy$.`,
      fallback: { kind: "ext", topic: "multiplying polynomials" },
    },
    {
      id: "C01-M3",
      mistake: "Believes the joint equation of any two lines is homogeneous, so keeps only the degree-two terms.",
      remediation: t`Only lines through the origin give a homogeneous equation. When a line misses the origin, keep the $x$, $y$ and constant terms of the product.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Writes the line through the origin with slope $m$ as $y + mx = 0$.`,
      remediation: t`The line through the origin with slope $m$ is $y = mx$, that is $y - mx = 0$. The line $y + mx = 0$ has slope $-m$.`,
      fallback: { kind: "ext", topic: "equation of a line" },
    },
    {
      id: "C01-M5",
      mistake: t`Swaps the axes: writes the line parallel to the $X$-axis as $x = c$, and the one parallel to the $Y$-axis as $y = c$.`,
      remediation: t`A line parallel to the $Y$-axis keeps one $x$-value: $x = h$. A line parallel to the $X$-axis keeps one $y$-value: $y = k$.`,
      fallback: { kind: "ext", topic: "equation of a line" },
    },
    {
      id: "C01-M6",
      mistake: t`Keeps only one of the two $xy$ products when expanding $(a_1x + b_1y)(a_2x + b_2y)$.`,
      remediation: t`Expanding gives two $xy$ products, $a_1b_2xy$ and $b_1a_2xy$; add both to get the middle term.`,
      fallback: { kind: "ext", topic: "multiplying polynomials" },
    },
  ],
  engineNotes: [
    "C01-M3 gives the key when both lines pass through the origin; diagnose it with a pair that misses the origin.",
    "C01-M2 cannot be shown when each line has only one variable (lines parallel to the axes); C01-M5 only applies to such lines.",
    "C01-M1 always yields a degree-one equation, so its option is a single line.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Solved (4.2) Ex.1" },
      stem: t`The combined equation of the lines $2x + 3y = 0$ and $x - 2y = 0$ is`,
      verify: { kind: "locus", inputs: { a1: "2", b1: "3", c1: "0", a2: "1", b2: "-2", c2: "0" }, params: { form: "lines" } },
      options: [
        { key: "A", text: t`$2x^2 - xy - 6y^2 = 0$`, correct: true, value: "2*x**2 - x*y - 6*y**2" },
        { key: "B", text: t`$3x + y = 0$`, correct: false, misconceptionId: "C01-M1", value: "3*x + y" },
        { key: "C", text: t`$2x^2 - 6y^2 = 0$`, correct: false, misconceptionId: "C01-M2", value: "2*x**2 - 6*y**2" },
        { key: "D", text: t`$2x^2 - 4xy - 6y^2 = 0$`, correct: false, misconceptionId: "C01-M6", value: "2*x**2 - 4*x*y - 6*y**2" },
      ],
      solution: {
        steps: [
          t`The joint equation is the product: $(2x + 3y)(x - 2y) = 0$.`,
          t`Expand, keeping both $xy$ products: $2x^2 - 4xy + 3xy - 6y^2 = 0$.`,
          t`So it is $2x^2 - xy - 6y^2 = 0$, homogeneous of degree two.`,
        ],
        figure: {
          alt: "The lines 2x + 3y = 0 and x − 2y = 0 through the origin. Their joint equation is 2x² − xy − 6y² = 0.",
          axes: "xy",
          view: { x: [-3.5, 3.5], y: [-3, 3] },
          elements: [
            { kind: "line", through: [[0, 0], [3, -2]], label: "2x + 3y = 0", labelAt: "ne", step: 1 },
            { kind: "line", through: [[0, 0], [2, 1]], label: "x − 2y = 0", labelAt: "se", step: 1 },
            { kind: "label", at: [-3.3, 2.5], label: "2x² − xy − 6y² = 0", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.1 (ii)" },
      stem: t`The combined equation of the lines $x + 2y - 1 = 0$ and $x - 3y + 2 = 0$ is`,
      verify: { kind: "locus", inputs: { a1: "1", b1: "2", c1: "-1", a2: "1", b2: "-3", c2: "2" }, params: { form: "lines" } },
      options: [
        { key: "A", text: t`$x^2 - xy - 6y^2 + x + 7y - 2 = 0$`, correct: true, value: "x**2 - x*y + x - 6*y**2 + 7*y - 2" },
        { key: "B", text: t`$2x - y + 1 = 0$`, correct: false, misconceptionId: "C01-M1", value: "2*x - y + 1" },
        { key: "C", text: t`$x^2 - 6y^2 - 2 = 0$`, correct: false, misconceptionId: "C01-M2", value: "x**2 - 6*y**2 - 2" },
        { key: "D", text: t`$x^2 - xy - 6y^2 = 0$`, correct: false, misconceptionId: "C01-M3", value: "x**2 - x*y - 6*y**2" },
      ],
      solution: {
        steps: [
          t`The joint equation is $(x + 2y - 1)(x - 3y + 2) = 0$.`,
          t`Expand: $x^2 - 3xy + 2x$ $+ 2xy - 6y^2 + 4y$ $- x + 3y - 2 = 0$.`,
          t`Collect: $x^2 - xy - 6y^2$ $+ x + 7y - 2 = 0$. The lines miss the origin, so the $x$, $y$ and constant terms stay.`,
        ],
        figure: {
          alt: "The lines x + 2y − 1 = 0 and x − 3y + 2 = 0, neither through the origin, meeting at (−0.2, 0.6). Their joint equation is x² − xy − 6y² + x + 7y − 2 = 0.",
          axes: "xy",
          view: { x: [-3, 3], y: [-2.5, 3] },
          elements: [
            { kind: "line", through: [[1, 0], [-1, 1]], label: "x + 2y − 1 = 0", labelAt: "ne", step: 1 },
            { kind: "line", through: [[-2, 0], [1, 1]], label: "x − 3y + 2 = 0", labelAt: "se", step: 1 },
            { kind: "label", at: [-2.9, -2.1], label: "x² − xy − 6y² + x + 7y − 2 = 0", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc II Q.1 (iii)" },
      stem: t`The joint equation of the lines through the origin with slopes $2$ and $3$ is`,
      verify: { kind: "locus", inputs: { m1: "2", m2: "3" }, params: { form: "slopes" } },
      options: [
        { key: "A", text: t`$6x^2 + y^2 = 0$`, correct: false, misconceptionId: "C01-M2", value: "6*x**2 + y**2" },
        { key: "B", text: t`$6x^2 + 5xy + y^2 = 0$`, correct: false, misconceptionId: "C01-M4", value: "6*x**2 + 5*x*y + y**2" },
        { key: "C", text: t`$6x^2 - 5xy + y^2 = 0$`, correct: true, value: "6*x**2 - 5*x*y + y**2" },
        { key: "D", text: t`$5x - 2y = 0$`, correct: false, misconceptionId: "C01-M1", value: "5*x - 2*y" },
      ],
      solution: {
        steps: [
          t`The lines are $y = 2x$ and $y = 3x$, that is $y - 2x = 0$ and $y - 3x = 0$.`,
          t`Joint equation: $(y - 2x)(y - 3x) = 0$, so $y^2 - 5xy + 6x^2 = 0$.`,
          t`In the book's order: $6x^2 - 5xy + y^2 = 0$.`,
        ],
        figure: {
          alt: "The lines y = 2x and y = 3x through the origin. Their joint equation is 6x² − 5xy + y² = 0.",
          axes: "xy",
          view: { x: [-2.5, 2.5], y: [-3.5, 3.5] },
          elements: [
            { kind: "line", through: [[0, 0], [1, 2]], label: "y = 2x", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, 0], [1, 3]], label: "y = 3x", labelAt: "nw", step: 1 },
            { kind: "label", at: [-2.4, -3], label: "6x² − 5xy + y² = 0", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.1 (iii)" },
      stem: t`The joint equation of the lines through $(2, 3)$ parallel to the co-ordinate axes is`,
      verify: { kind: "locus", inputs: { h: "2", k: "3" }, params: { form: "axes" } },
      options: [
        { key: "A", text: t`$xy - 3x - 2y + 6 = 0$`, correct: true, value: "x*y - 3*x - 2*y + 6" },
        { key: "B", text: t`$x + y - 5 = 0$`, correct: false, misconceptionId: "C01-M1", value: "x + y - 5" },
        { key: "C", text: t`$xy = 0$`, correct: false, misconceptionId: "C01-M3", value: "x*y" },
        { key: "D", text: t`$xy - 2x - 3y + 6 = 0$`, correct: false, misconceptionId: "C01-M5", value: "x*y - 2*x - 3*y + 6" },
      ],
      solution: {
        steps: [
          t`Through $(2, 3)$, the line parallel to the $Y$-axis is $x = 2$, and the one parallel to the $X$-axis is $y = 3$.`,
          t`Joint equation: $(x - 2)(y - 3) = 0$.`,
          t`Expand: $xy - 3x - 2y + 6 = 0$.`,
        ],
        figure: {
          alt: "Through (2, 3), the vertical line x = 2 and the horizontal line y = 3. Their joint equation is xy − 3x − 2y + 6 = 0.",
          axes: "xy",
          view: { x: [-1, 5], y: [-1, 5] },
          elements: [
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[2, 0], [2, 1]], label: "x = 2", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 3], [1, 3]], label: "y = 3", labelAt: "n", step: 1 },
            { kind: "label", at: [-0.9, 4.5], label: "xy − 3x − 2y + 6 = 0", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc II Q.1 (ix)" },
      stem: t`The joint equation of the lines at a distance of $9$ units from the $Y$-axis is`,
      verify: { kind: "locus", inputs: { d: "9" }, params: { form: "dist_y" } },
      options: [
        { key: "A", text: t`$x^2 - 81 = 0$`, correct: true, value: "x**2 - 81" },
        { key: "B", text: t`$2x = 0$`, correct: false, misconceptionId: "C01-M1", value: "2*x" },
        { key: "C", text: t`$x^2 = 0$`, correct: false, misconceptionId: "C01-M3", value: "x**2" },
        { key: "D", text: t`$y^2 - 81 = 0$`, correct: false, misconceptionId: "C01-M5", value: "y**2 - 81" },
      ],
      solution: {
        steps: [
          t`A point $9$ units from the $Y$-axis has $x = 9$ or $x = -9$.`,
          t`So the lines are $x - 9 = 0$ and $x + 9 = 0$, both parallel to the $Y$-axis.`,
          t`Joint equation: $(x - 9)(x + 9) = 0$, that is $x^2 - 81 = 0$.`,
        ],
        figure: {
          alt: "The vertical lines x = 9 and x = −9, each 9 units from the y-axis. Their joint equation is x² − 81 = 0.",
          axes: "xy",
          view: { x: [-12, 12], y: [-9, 9] },
          elements: [
            { kind: "segment", from: [0, 4], to: [9, 4], dashed: true, tone: "muted", label: "9", labelAt: "n", step: 1 },
            { kind: "segment", from: [-9, 4], to: [0, 4], dashed: true, tone: "muted", label: "9", labelAt: "n", step: 1 },
            { kind: "line", through: [[9, 0], [9, 1]], label: "x = 9", labelAt: "e", step: 2 },
            { kind: "line", through: [[-9, 0], [-9, 1]], label: "x = −9", labelAt: "w", step: 2 },
            { kind: "label", at: [-5, -7], label: "x² − 81 = 0", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc II Q.1 (viii)" },
      stem: t`The joint equation of the lines through the origin with slopes $1 + \sqrt{3}$ and $1 - \sqrt{3}$ is`,
      verify: { kind: "locus", inputs: { m1: "1 + sqrt(3)", m2: "1 - sqrt(3)" }, params: { form: "slopes" } },
      options: [
        { key: "A", text: t`$2x^2 - y^2 = 0$`, correct: false, misconceptionId: "C01-M2", value: "2*x**2 - y**2" },
        { key: "B", text: t`$2x^2 - 2xy - y^2 = 0$`, correct: false, misconceptionId: "C01-M4", value: "2*x**2 - 2*x*y - y**2" },
        { key: "C", text: t`$2x^2 + 2xy - y^2 = 0$`, correct: true, value: "2*x**2 + 2*x*y - y**2" },
        { key: "D", text: t`$2x - 2y = 0$`, correct: false, misconceptionId: "C01-M1", value: "2*x - 2*y" },
      ],
      solution: {
        steps: [
          t`The lines are $y - m_1x = 0$ and $y - m_2x = 0$, with $m_1 = 1 + \sqrt{3}$ and $m_2 = 1 - \sqrt{3}$.`,
          t`Multiply: $(y - m_1x)(y - m_2x)$ $= y^2 - (m_1 + m_2)xy + m_1m_2x^2$.`,
          t`Here $m_1 + m_2 = 2$ and $m_1m_2 = 1 - 3 = -2$.`,
          t`So $y^2 - 2xy - 2x^2 = 0$, that is $2x^2 + 2xy - y^2 = 0$.`,
        ],
        figure: {
          alt: "Through the origin, the line of slope 1 + √3 (about 2.7) and the line of slope 1 − √3 (about −0.7). Their joint equation is 2x² + 2xy − y² = 0.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            { kind: "line", through: [[0, 0], [1, 2.732]], label: "slope 1 + √3", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 0], [3, -2.1959999999999997]], label: "slope 1 − √3", labelAt: "ne", step: 1 },
            { kind: "label", at: [-2.9, -2.6], label: "2x² + 2xy − y² = 0", labelAt: "e", step: 4 },
          ],
        },
      },
    },
  ],
};
