import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`$x^2 - xy - 6y^2 = 0$ is a single equation. **Yet its graph is two straight lines. How?**`,
    reveal: t`It factorises: $x^2 - xy - 6y^2$ $= (x - 3y)(x + 2y)$. A product is $0$ only when a factor is $0$. So every point lies on $x - 3y = 0$ or on $x + 2y = 0$: two lines through the origin.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **combined equation** like $x^2 - xy - 6y^2 = 0$ holds two lines through the origin at once.`,
      t`It came from multiplying the two line equations together and expanding.`,
      t`To **separate** the lines, undo that: factorise, $(x - 3y)(x + 2y) = 0$.`,
      t`A product is $0$ when one of its factors is $0$.`,
      t`So each factor set to $0$ is one line: $x - 3y = 0$ and $x + 2y = 0$.`,
      t`When it won't factorise neatly, find the two slopes $m = \dfrac{y}{x}$ from a quadratic instead.`,
    ],
    formal: [
      {
        title: "Factorise into two lines",
        points: [
          t`The **separate equations** are the two single-line equations whose product is the combined equation.`,
          t`Treat $y$ like a number and factorise as a quadratic in $x$: split the middle term.`,
          t`Example: $2x^2 - 5xy - 3y^2$ $= 2x^2 - 6xy + xy - 3y^2$.`,
          t`$= 2x(x - 3y) + y(x - 3y)$ $= (2x + y)(x - 3y)$.`,
          t`Set each factor to $0$: the lines are $2x + y = 0$ and $x - 3y = 0$.`,
          t`Check: multiplying the two back must give the combined equation exactly.`,
        ],
        figure: {
          alt: "The pair 2x² − 5xy − 3y² = 0 drawn plain, then its two lines labelled: 2x + y = 0, falling steeply, and x − 3y = 0, rising gently.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [1.342, -2.683]], step: 1, tone: "muted" },
            { kind: "line", through: [[0, 0], [2.846, 0.949]], step: 1, tone: "muted" },
            { kind: "line", through: [[0, 0], [1.342, -2.683]], step: 5 },
            { kind: "label", at: [1.431, -2.862], label: "2x + y = 0", labelAt: "ne", step: 5 },
            { kind: "line", through: [[0, 0], [2.846, 0.949]], step: 5, tone: "good" },
            { kind: "label", at: [3.036, 1.012], label: "x − 3y = 0", labelAt: "nw", step: 5, tone: "good" },
          ],
        },
      },
      {
        title: "A common factor",
        points: [
          t`If $b = 0$, the equation is $ax^2 + 2hxy = 0$, and $x$ is a common factor.`,
          t`Example: $x^2 + 3xy = 0$ gives $x(x + 3y) = 0$.`,
          t`So $x = 0$, the $Y$-axis, is one line, and $x + 3y = 0$ is the other.`,
          t`Never cancel $x$: dividing by it throws the $Y$-axis away.`,
          t`Likewise, if $a = 0$, $y$ is a common factor, and $y = 0$, the $X$-axis, is one line.`,
        ],
        figure: {
          alt: "The pair x² + 3xy = 0: the Y-axis, x = 0, and the line x + 3y = 0 falling gently through the origin.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0, 3]], step: 3, tone: "good" },
            { kind: "label", at: [0.1, 2.5], label: "x = 0", labelAt: "e", step: 3, tone: "good" },
            { kind: "line", through: [[0, 0], [2.846, -0.949]], step: 3 },
            { kind: "label", at: [3.036, -1.012], label: "x + 3y = 0", labelAt: "sw", step: 3 },
          ],
        },
      },
      {
        title: "No xy term",
        points: [
          t`If $h = 0$ and $a$, $b$ have opposite signs, $ax^2 + by^2$ is a **difference of squares**.`,
          t`Example: $4x^2 - 9y^2 = (2x)^2 - (3y)^2$.`,
          t`$= (2x - 3y)(2x + 3y)$: take the square roots of $4$ and $9$.`,
          t`Keep both signs: the lines are $2x - 3y = 0$ and $2x + 3y = 0$.`,
          t`Their slopes, $\dfrac{2}{3}$ and $-\dfrac{2}{3}$, make them mirror images in the $X$-axis.`,
        ],
        figure: {
          alt: "The pair 4x² − 9y² = 0: the lines 2x − 3y = 0 and 2x + 3y = 0, mirror images in the X-axis.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [2.496, 1.664]], step: 4 },
            { kind: "label", at: [2.663, 1.775], label: "2x − 3y = 0", labelAt: "nw", step: 4 },
            { kind: "line", through: [[0, 0], [2.496, -1.664]], step: 4, tone: "good" },
            { kind: "label", at: [2.663, -1.775], label: "2x + 3y = 0", labelAt: "sw", step: 4, tone: "good" },
          ],
        },
      },
      {
        title: "The auxiliary equation",
        points: [
          t`A line $y = mx$ has **slope** $m = \dfrac{y}{x}$: where it crosses $x = 1$, its height is $m$.`,
          t`Divide $ax^2 + 2hxy + by^2 = 0$ by $x^2$ and put $\dfrac{y}{x} = m$.`,
          t`This gives the **auxiliary equation** $bm^2 + 2hm + a = 0$, a quadratic in $m$.`,
          t`$b$, the $y^2$ coefficient, goes with $m^2$; the $m$ term is the whole $xy$ coefficient, $2h$.`,
          t`Example: $x^2 + xy - 6y^2 = 0$ gives $-6m^2 + m + 1 = 0$, or $6m^2 - m - 1 = 0$.`,
          t`$(2m - 1)(3m + 1) = 0$: slopes $\dfrac{1}{2}$, $-\dfrac{1}{3}$; lines $x - 2y = 0$, $x + 3y = 0$.`,
        ],
        figure: {
          alt: "The dashed line x = 1. The lines x − 2y = 0 and x + 3y = 0 cross it at heights 1/2 and −1/3, which are their slopes, the roots of the auxiliary equation.",
          axes: "xy",
          view: { x: [-1.5, 3.5], y: [-2.5, 2.5] },
          elements: [
            { kind: "line", through: [[1, -2.5], [1, 2.5]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [1, 2.2], label: "x = 1", labelAt: "e", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 0], [2.683, 1.342]], step: 6 },
            { kind: "label", at: [3, 1.5], label: "x − 2y = 0", labelAt: "nw", step: 6 },
            { kind: "line", through: [[0, 0], [2.846, -0.949]], step: 6, tone: "good" },
            { kind: "label", at: [3, -1], label: "x + 3y = 0", labelAt: "sw", step: 6, tone: "good" },
            { kind: "point", at: [1, 0.5], label: "m = 1/2", labelAt: "se", step: 6 },
            { kind: "point", at: [1, -0.333], label: "m = −1/3", labelAt: "sw", step: 6, tone: "good" },
          ],
        },
      },
      {
        title: "When it won't factorise",
        points: [
          t`If the auxiliary equation has no neat factors, solve it with the quadratic formula.`,
          t`Example: $x^2 - 4xy + y^2 = 0$ gives $m^2 - 4m + 1 = 0$.`,
          t`$m = \dfrac{4 \pm \sqrt{16 - 4}}{2}$ $= 2 \pm \sqrt{3}$.`,
          t`The lines are $y = (2 + \sqrt{3})x$ and $y = (2 - \sqrt{3})x$.`,
          t`In the book's form: $(2 + \sqrt{3})x - y = 0$ and $(2 - \sqrt{3})x - y = 0$.`,
        ],
        figure: {
          alt: "The lines with slopes 2 + √3, rising steeply, and 2 − √3, rising gently, each labelled with its slope.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.776, 2.898]], step: 3 },
            { kind: "label", at: [0.828, 3.091], label: "m = 2 + √3", labelAt: "se", step: 3 },
            { kind: "line", through: [[0, 0], [2.898, 0.776]], step: 3, tone: "good" },
            { kind: "label", at: [3.091, 0.828], label: "m = 2 − √3", labelAt: "nw", step: 3, tone: "good" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the separate equations of the lines represented by $2x^2 - 4xy - y^2 = 0$.`,
      steps: [
        t`Here $a = 2$, $2h = -4$, $b = -1$; no whole-number factors split $-4xy$.`,
        t`Divide by $x^2$, put $m = \dfrac{y}{x}$: $2 - 4m - m^2 = 0$, so $m^2 + 4m - 2 = 0$.`,
        t`$m = \dfrac{-4 \pm \sqrt{16 + 8}}{2}$ $= -2 \pm \sqrt{6}$.`,
        t`The lines $y = mx$ are $(\sqrt{6} - 2)x - y = 0$ and $(\sqrt{6} + 2)x + y = 0$.`,
      ],
      answer: t`$(\sqrt{6} - 2)x - y = 0$ and $(\sqrt{6} + 2)x + y = 0$`,
      figure: {
        alt: "The two lines, labelled with their slopes: √6 − 2, rising gently, and −2 − √6, falling steeply.",
        axes: "xy",
        view: { x: [-4, 4], y: [-4, 4] },
        elements: [
          { kind: "line", through: [[0, 0], [2.736, 1.23]], step: 3 },
          { kind: "label", at: [2.919, 1.312], label: "m = √6 − 2", labelAt: "nw", step: 3 },
          { kind: "line", through: [[0, 0], [0.658, -2.927]], step: 3, tone: "good" },
          { kind: "label", at: [0.702, -3.122], label: "m = −2 − √6", labelAt: "ne", step: 3, tone: "good" },
        ],
      },
    },
    figure: {
      alt: "Two lines through the origin, first plain, then labelled x − 3y = 0, rising gently, and x + 2y = 0, falling gently. Last, each is marked where x = 1: at heights 1/3 and −1/2, their slopes.",
      axes: "xy",
      view: { x: [-4, 4], y: [-4, 4] },
      elements: [
        { kind: "line", through: [[0, 0], [2.846, 0.949]], step: 1, tone: "muted" },
        { kind: "line", through: [[0, 0], [2.683, -1.342]], step: 1, tone: "muted" },
        { kind: "line", through: [[0, 0], [2.846, 0.949]], step: 5 },
        { kind: "label", at: [3.036, 1.012], label: "x − 3y = 0", labelAt: "nw", step: 5 },
        { kind: "line", through: [[0, 0], [2.683, -1.342]], step: 5, tone: "good" },
        { kind: "label", at: [2.862, -1.431], label: "x + 2y = 0", labelAt: "sw", step: 5, tone: "good" },
        { kind: "segment", from: [1, 0], to: [1, 0.333], dashed: true, step: 6 },
        { kind: "point", at: [1, 0.333], step: 6 },
        { kind: "segment", from: [1, 0], to: [1, -0.5], dashed: true, step: 6, tone: "good" },
        { kind: "point", at: [1, -0.5], step: 6, tone: "good" },
      ],
    },
    visualSpec: t`Drag $a$, $h$ and $b$: the two lines swing about the origin, and their crossings with $x = 1$ track the roots of $bm^2 + 2hm + a = 0$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Writes the auxiliary equation as $am^2 + 2hm + b = 0$, with $a$ and $b$ swapped: its roots are $x/y$, read as slopes.`,
      remediation: t`With $m = \dfrac{y}{x}$, dividing by $x^2$ puts $b$, the $y^2$ coefficient, with $m^2$: $bm^2 + 2hm + a = 0$. Swapping $a$ and $b$ gives the reciprocals of the slopes.`,
      fallback: { kind: "ext", topic: "slope of a line" },
    },
    {
      id: "C02-M2",
      mistake: "Loses the sign of the middle term when writing the lines, so every slope changes sign.",
      remediation: t`Copy each factor exactly, signs included: $(x - 4y)(\dots) = 0$ gives $x - 4y = 0$. Multiply your two lines back to check the $xy$ term.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Takes $h$ to be the whole $xy$ coefficient, so the $m$ term of the auxiliary equation is doubled.`,
      remediation: t`In $ax^2 + 2hxy + by^2$ the whole $xy$ coefficient is $2h$, and it is also the whole $m$ coefficient in $bm^2 + 2hm + a = 0$. Don't double it again.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Cancels the common factor $x$ (or $y$) and keeps one line, missing $x = 0$ (or $y = 0$).`,
      remediation: t`Take the common factor out instead of cancelling it: $x(ax + 2hy) = 0$ means $x = 0$ or $ax + 2hy = 0$. The $Y$-axis is one of the two lines.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Solves $x^2 = ky^2$ as $x = \pm ky$, forgetting the square root of $k$.`,
      remediation: t`From $x^2 = ky^2$, take the square root of $k$ too: $x = \pm\sqrt{k}\,y$. Square your lines back to check.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Takes only the positive square root, so finds one line (one slope) instead of two.",
      remediation: t`A square root has two signs: $y^2 = kx^2$ gives $y = \sqrt{k}\,x$ and $y = -\sqrt{k}\,x$. A pair always has two lines.`,
      fallback: { kind: "ext", topic: "factorising quadratics" },
    },
  ],
  engineNotes: [
    t`C02-M1 gives the key when $a = b$, and the same pair as C02-M2 when $a = -b$: draw M1 items with $a \ne \pm b$.`,
    t`C02-M2 and C02-M3 give the key when $h = 0$. C02-M4 needs $a = 0$ or $b = 0$. C02-M5 and C02-M6 need $h = 0$ with $a$, $b$ of opposite signs; C02-M5 gives the key when $a = -b$.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc I (3)" },
      stem: t`With $m = \dfrac{y}{x}$, the auxiliary equation of $2x^2 + 3xy - 9y^2 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "2", h: "3/2", b: "-9" }, params: { ask: "aux" } },
      options: [
        { key: "A", text: t`$9m^2 - 3m - 2 = 0$`, correct: true, value: "9*m**2 - 3*m - 2" },
        { key: "B", text: t`$2m^2 + 3m - 9 = 0$`, correct: false, misconceptionId: "C02-M1", value: "2*m**2 + 3*m - 9" },
        { key: "C", text: t`$9m^2 + 3m - 2 = 0$`, correct: false, misconceptionId: "C02-M2", value: "9*m**2 + 3*m - 2" },
        { key: "D", text: t`$9m^2 - 6m - 2 = 0$`, correct: false, misconceptionId: "C02-M3", value: "9*m**2 - 6*m - 2" },
      ],
      solution: {
        steps: [
          t`Divide by $x^2$ and put $\dfrac{y}{x} = m$: $2 + 3m - 9m^2 = 0$.`,
          t`The $y^2$ coefficient, $-9$, goes with $m^2$. Multiply by $-1$: $9m^2 - 3m - 2 = 0$.`,
          t`Check: $(3m - 2)(3m + 1) = 0$ gives slopes $\dfrac{2}{3}$, $-\dfrac{1}{3}$: the lines $2x - 3y = 0$, $x + 3y = 0$.`,
        ],
        figure: {
          alt: "The lines 2x − 3y = 0 and x + 3y = 0, each marked where x = 1: at heights 2/3 and −1/3, the roots of 9m² − 3m − 2 = 0.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [2.496, 1.664]], step: 3 },
            { kind: "label", at: [2.663, 1.775], label: "2x − 3y = 0", labelAt: "nw", step: 3 },
            { kind: "line", through: [[0, 0], [2.846, -0.949]], step: 3, tone: "good" },
            { kind: "label", at: [3.036, -1.012], label: "x + 3y = 0", labelAt: "sw", step: 3, tone: "good" },
            { kind: "segment", from: [1, 0], to: [1, 0.667], dashed: true, step: 3 },
            { kind: "point", at: [1, 0.667], step: 3 },
            { kind: "segment", from: [1, 0], to: [1, -0.333], dashed: true, step: 3, tone: "good" },
            { kind: "point", at: [1, -0.333], step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.3 (i)" },
      stem: t`The separate equations of the lines represented by $5x^2 - 8xy + 3y^2 = 0$ are:`,
      verify: { kind: "locus", inputs: { a: "5", h: "-4", b: "3" }, params: { ask: "lines" } },
      options: [
        { key: "A", text: t`$3x - 5y = 0$ and $x - y = 0$`, correct: false, misconceptionId: "C02-M1", value: "3*x**2 - 8*x*y + 5*y**2" },
        { key: "B", text: t`$5x + 3y = 0$ and $x + y = 0$`, correct: false, misconceptionId: "C02-M2", value: "5*x**2 + 8*x*y + 3*y**2" },
        { key: "C", text: t`$5x - y = 0$ and $x - 3y = 0$`, correct: false, misconceptionId: "C02-M3", value: "5*x**2 - 16*x*y + 3*y**2" },
        { key: "D", text: t`$5x - 3y = 0$ and $x - y = 0$`, correct: true, value: "5*x**2 - 8*x*y + 3*y**2" },
      ],
      solution: {
        steps: [
          t`Split $-8xy$ as $-5xy - 3xy$: their product is $15x^2y^2 = 5x^2 \cdot 3y^2$.`,
          t`$5x^2 - 5xy - 3xy + 3y^2$ $= 5x(x - y) - 3y(x - y)$ $= (5x - 3y)(x - y)$.`,
          t`So the lines are $5x - 3y = 0$ and $x - y = 0$.`,
        ],
        figure: {
          alt: "The lines 5x − 3y = 0 and x − y = 0, both rising through the origin, the first more steeply.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [1.543, 2.572]], step: 3 },
            { kind: "label", at: [1.95, 3.5], label: "5x − 3y = 0", labelAt: "w", step: 3 },
            { kind: "line", through: [[0, 0], [2.121, 2.121]], step: 3, tone: "good" },
            { kind: "label", at: [2.263, 2.263], label: "x − y = 0", labelAt: "se", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.2 (iii)" },
      stem: t`The separate equations of the lines represented by $x^2 - 4xy = 0$ are:`,
      verify: { kind: "locus", inputs: { a: "1", h: "-2", b: "0" }, params: { ask: "lines" } },
      options: [
        { key: "A", text: t`$x = 0$ and $x + 4y = 0$`, correct: false, misconceptionId: "C02-M2", value: "x*(x + 4*y)" },
        { key: "B", text: t`$x = 0$ and $x - 4y = 0$`, correct: true, value: "x*(x - 4*y)" },
        { key: "C", text: t`$x - 4y = 0$ only`, correct: false, misconceptionId: "C02-M4", value: "x - 4*y" },
        { key: "D", text: t`$y = 0$ and $4x - y = 0$`, correct: false, misconceptionId: "C02-M1", value: "y*(-4*x + y)" },
      ],
      solution: {
        steps: [
          t`Take out the common factor $x$: $x(x - 4y) = 0$.`,
          t`Either $x = 0$, the $Y$-axis, or $x - 4y = 0$. Don't cancel $x$: it is a line too.`,
          t`So the lines are $x = 0$ and $x - 4y = 0$.`,
        ],
        figure: {
          alt: "The Y-axis, x = 0, and the line x − 4y = 0 rising gently through the origin.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0, 3]], step: 2, tone: "good" },
            { kind: "label", at: [0.1, 2.5], label: "x = 0", labelAt: "e", step: 2, tone: "good" },
            { kind: "line", through: [[0, 0], [2.91, 0.728]], step: 2 },
            { kind: "label", at: [3.104, 0.776], label: "x − 4y = 0", labelAt: "nw", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.1 Ex 4.1 Q.2 (ii)" },
      stem: t`The separate equations of the lines represented by $5x^2 - 9y^2 = 0$ are:`,
      verify: { kind: "locus", inputs: { a: "5", h: "0", b: "-9" }, params: { ask: "lines" } },
      options: [
        { key: "A", text: t`$3x - \sqrt{5}\,y = 0$ and $3x + \sqrt{5}\,y = 0$`, correct: false, misconceptionId: "C02-M1", value: "-9*x**2 + 5*y**2" },
        { key: "B", text: t`$\sqrt{5}\,x - 3y = 0$ and $\sqrt{5}\,x + 3y = 0$`, correct: true, value: "5*x**2 - 9*y**2" },
        { key: "C", text: t`$5x - 9y = 0$ and $5x + 9y = 0$`, correct: false, misconceptionId: "C02-M5", value: "x**2 - 81*y**2/25" },
        { key: "D", text: t`$\sqrt{5}\,x - 3y = 0$ only`, correct: false, misconceptionId: "C02-M6", value: "x - 3*sqrt(5)*y/5" },
      ],
      solution: {
        steps: [
          t`A difference of squares: $(\sqrt{5}\,x)^2 - (3y)^2 = 0$.`,
          t`$(\sqrt{5}\,x - 3y)(\sqrt{5}\,x + 3y) = 0$: square roots of $5$ and $9$, and both signs.`,
          t`So the lines are $\sqrt{5}\,x - 3y = 0$ and $\sqrt{5}\,x + 3y = 0$.`,
        ],
        figure: {
          alt: "The lines √5 x − 3y = 0 and √5 x + 3y = 0, mirror images in the X-axis.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [2.405, 1.793]], step: 3 },
            { kind: "label", at: [2.566, 1.912], label: "√5 x − 3y = 0", labelAt: "nw", step: 3 },
            { kind: "line", through: [[0, 0], [2.405, -1.793]], step: 3, tone: "good" },
            { kind: "label", at: [2.566, -1.912], label: "√5 x + 3y = 0", labelAt: "sw", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc II Q.3 (iv)" },
      stem: t`The slopes of the lines represented by $2x^2 + 2xy - y^2 = 0$ are:`,
      verify: { kind: "value", inputs: { a: "2", h: "1", b: "-1" }, params: { ask: "slopes" } },
      options: [
        { key: "A", text: t`$2 + \sqrt{6}$ and $2 - \sqrt{6}$`, correct: false, misconceptionId: "C02-M3", value: "{2 - sqrt(6), 2 + sqrt(6)}" },
        { key: "B", text: t`$1 + \sqrt{3}$ and $1 - \sqrt{3}$`, correct: true, value: "{1 - sqrt(3), 1 + sqrt(3)}" },
        { key: "C", text: t`$\dfrac{-1 + \sqrt{3}}{2}$ and $\dfrac{-1 - \sqrt{3}}{2}$`, correct: false, misconceptionId: "C02-M1", value: "{-1/2 + sqrt(3)/2, -sqrt(3)/2 - 1/2}" },
        { key: "D", text: t`$-1 + \sqrt{3}$ and $-1 - \sqrt{3}$`, correct: false, misconceptionId: "C02-M2", value: "{-1 + sqrt(3), -sqrt(3) - 1}" },
      ],
      solution: {
        steps: [
          t`Divide by $x^2$, put $m = \dfrac{y}{x}$: $2 + 2m - m^2 = 0$, so $m^2 - 2m - 2 = 0$.`,
          t`$m = \dfrac{2 \pm \sqrt{4 + 8}}{2}$ $= 1 \pm \sqrt{3}$.`,
          t`The slopes are $1 + \sqrt{3}$ and $1 - \sqrt{3}$.`,
        ],
        figure: {
          alt: "The two lines, labelled with their slopes: 1 + √3, rising steeply, and 1 − √3, falling gently.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [1.031, 2.817]], step: 3 },
            { kind: "label", at: [1.1, 3.005], label: "m = 1 + √3", labelAt: "se", step: 3 },
            { kind: "line", through: [[0, 0], [2.421, -1.772]], step: 3, tone: "good" },
            { kind: "label", at: [2.582, -1.89], label: "m = 1 − √3", labelAt: "sw", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc II Q.3 (iii)" },
      stem: t`The slopes of the lines represented by $3x^2 - y^2 = 0$ are:`,
      verify: { kind: "value", inputs: { a: "3", h: "0", b: "-1" }, params: { ask: "slopes" } },
      options: [
        { key: "A", text: t`$\sqrt{3}$ and $-\sqrt{3}$`, correct: true, value: "{-sqrt(3), sqrt(3)}" },
        { key: "B", text: t`$\dfrac{1}{\sqrt{3}}$ and $-\dfrac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C02-M1", value: "{-sqrt(3)/3, sqrt(3)/3}" },
        { key: "C", text: t`$3$ and $-3$`, correct: false, misconceptionId: "C02-M5", value: "{-3, 3}" },
        { key: "D", text: t`$\sqrt{3}$ only`, correct: false, misconceptionId: "C02-M6", value: "{sqrt(3)}" },
      ],
      solution: {
        steps: [
          t`Divide by $x^2$, put $m = \dfrac{y}{x}$: $3 - m^2 = 0$, so $m^2 = 3$.`,
          t`A square root has two signs: $m = \sqrt{3}$ or $m = -\sqrt{3}$.`,
          t`The slopes are $\sqrt{3}$ and $-\sqrt{3}$: lines at $60^\circ$ and $120^\circ$ to the $X$-axis.`,
        ],
        figure: {
          alt: "The lines with slopes √3 and −√3, at 60° and 120° to the X-axis, mirror images in it.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [1.5, 2.598]], step: 3 },
            { kind: "label", at: [1.6, 2.771], label: "m = √3", labelAt: "se", step: 3 },
            { kind: "line", through: [[0, 0], [1.5, -2.598]], step: 3, tone: "good" },
            { kind: "label", at: [1.6, -2.771], label: "m = −√3", labelAt: "ne", step: 3, tone: "good" },
          ],
        },
      },
    },
  ],
};
