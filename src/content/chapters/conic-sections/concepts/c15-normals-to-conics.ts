import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`A ray of light hitting a curved mirror bounces off as if from the tangent there. Which line through the point of contact does the ray make equal angles with?`,
    reveal: t`The **normal**: the line through the point at right angles to the tangent.`,
  },
  explanation: {
    intuition: [
      t`The **normal** at a point of a curve is perpendicular to the tangent there.`,
      t`Its slope is $-\frac{1}{m}$ when the tangent's slope is $m$.`,
      t`So find the tangent's slope first, then turn it through a right angle.`,
      t`From one point, up to three normals can be drawn to a parabola.`,
    ],
    formal: [
      {
        title: "Parabola",
        points: [
          t`On $y^2 = 4ax$ at $(at^2, 2at)$, the tangent's slope is $\frac1t$.`,
          t`So the normal's slope is $-t$: $y = -tx + 2at + at^3$.`,
          t`In slope form: $y = mx - 2am - am^3$.`,
          t`It meets the parabola at $(am^2, -2am)$.`,
          t`This is a cubic in $m$, so at most three normals pass through a point.`,
        ],
      },
      {
        title: "Ellipse",
        points: [
          t`On $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, the normal at $(x_1, y_1)$ is:`,
          t`$\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2 - b^2$.`,
          t`It meets the x-axis at $x = \frac{(a^2 - b^2)x_1}{a^2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the normal to $y^2 = 4x$ at $(1, 2)$.`,
      steps: [
        t`Here $a = 1$, $t = 1$.`,
        t`Slope $-t = -1$: $y - 2 = -(x - 1)$`,
        t`$x + y = 3$`,
      ],
      answer: t`$x + y = 3$`,
    },
    visualSpec: t`Slide a point along a parabola and watch its tangent and normal turn together at right angles.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: "Uses the tangent.",
      remediation: t`The normal is perpendicular to the tangent: slope $-t$, not $\frac1t$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C15-M2",
      mistake: "Flips the slope's sign.",
      remediation: t`The normal's slope is $-t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M3",
      mistake: "Uses the tangent's slope inverted.",
      remediation: t`Perpendicular means slope $-\frac{1}{m_T} = -t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M4",
      mistake: "Says two.",
      remediation: t`The slope equation is a cubic in $m$: up to three.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M5",
      mistake: "Says one.",
      remediation: "A cubic can have three real roots: up to three normals.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M6",
      mistake: "Says four.",
      remediation: "Four normals is the ellipse's limit; a parabola's is three.",
      fallback: { kind: "none" },
    },
    {
      id: "C15-M7",
      mistake: t`Adds $b^2$.`,
      remediation: t`The constant is $a^2 - b^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M8",
      mistake: "Gives the tangent's intercept.",
      remediation: t`The tangent meets the x-axis at $\frac{a^2}{x_1}$; the normal at $\frac{(a^2 - b^2)x_1}{a^2}$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C15-M9",
      mistake: t`Forgets to divide by $a^2$.`,
      remediation: t`$x = \frac{(a^2 - b^2)x_1}{a^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M10",
      mistake: "Gives the tangent's intercept.",
      remediation: t`For the normal, $c = -2am - am^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M11",
      mistake: "Flips the sign.",
      remediation: t`$c = -2am - am^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M12",
      mistake: t`Drops $am^3$.`,
      remediation: t`Keep both terms: $-2am - am^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M13",
      mistake: "Flips the y sign.",
      remediation: t`The point is $(am^2, -2am)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M14",
      mistake: "Gives the tangent's point.",
      remediation: t`A tangent of slope $m$ touches at $\left(\frac{a}{m^2}, \frac{2a}{m}\right)$; a normal meets at $(am^2, -2am)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M15",
      mistake: "Drops the 2.",
      remediation: t`The point is $(am^2, -2am)$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "authored" },
      stem: t`The normal to $y^2 = 8x$ at the point $(8, 8)$ meets the x-axis at`,
      verify: { kind: "value", inputs: { a: "2", t: "2" }, params: { q: "axis" } },
      options: [
        { key: "A", text: t`$(4, 0)$`, correct: false, misconceptionId: "C15-M2", value: "4" },
        { key: "B", text: t`$(24, 0)$`, correct: false, misconceptionId: "C15-M3", value: "24" },
        { key: "C", text: t`$(12, 0)$`, correct: true, value: "12" },
        { key: "D", text: t`$(-8, 0)$`, correct: false, misconceptionId: "C15-M1", value: "-8" },
      ],
      solution: {
        steps: [
          t`$a = 2$, $t = 2$; slope $-2$.`,
          t`$y - 8 = -2(x - 8)$; put $y = 0$: $x = 12$.`,
        ],
      },
    },
    {
      id: "C15-Q2",
      source: { kind: "authored" },
      stem: t`The greatest number of normals that can be drawn to a parabola from one point is`,
      verify: { kind: "value", inputs: {  }, params: { q: "count" } },
      options: [
        { key: "A", text: t`2`, correct: false, misconceptionId: "C15-M4", value: "two_normals" },
        { key: "B", text: t`1`, correct: false, misconceptionId: "C15-M5", value: "one_normal" },
        { key: "C", text: t`4`, correct: false, misconceptionId: "C15-M6", value: "four_normals" },
        { key: "D", text: t`3`, correct: true, value: "three_normals" },
      ],
      solution: {
        steps: [
          t`$y = mx - 2am - am^3$ through a point is a cubic in $m$.`,
          t`At most three normals.`,
        ],
      },
    },
    {
      id: "C15-Q3",
      source: { kind: "authored" },
      stem: t`The normal to $\dfrac{x^2}{25} + \dfrac{y^2}{16} = 1$ at $\left(3, \dfrac{16}{5}\right)$ meets the x-axis at $x =$`,
      verify: { kind: "value", inputs: { A2: "25", B2: "16", x1: "3" }, params: { q: "ellipse" } },
      options: [
        { key: "A", text: t`$\frac{25}{3}$`, correct: false, misconceptionId: "C15-M8", value: "25/3" },
        { key: "B", text: t`$27$`, correct: false, misconceptionId: "C15-M9", value: "27" },
        { key: "C", text: t`$\frac{27}{25}$`, correct: true, value: "27/25" },
        { key: "D", text: t`$\frac{123}{25}$`, correct: false, misconceptionId: "C15-M7", value: "123/25" },
      ],
      solution: {
        steps: [
          t`$x = \frac{(25 - 16) \times 3}{25}$`,
          t`$= \frac{27}{25}$`,
        ],
      },
    },
    {
      id: "C15-Q4",
      source: { kind: "authored" },
      stem: t`The normal to $y^2 = 12x$ with slope $1$ is $y = x + c$, where $c =$`,
      verify: { kind: "value", inputs: { a: "3", m: "1" }, params: { q: "slope" } },
      options: [
        { key: "A", text: t`$9$`, correct: false, misconceptionId: "C15-M11", value: "9" },
        { key: "B", text: t`$-6$`, correct: false, misconceptionId: "C15-M12", value: "-6" },
        { key: "C", text: t`$-9$`, correct: true, value: "-9" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C15-M10", value: "3" },
      ],
      solution: {
        steps: [
          t`$a = 3$, $m = 1$`,
          t`$c = -6 - 3 = -9$`,
        ],
      },
    },
    {
      id: "C15-Q5",
      source: { kind: "authored" },
      stem: t`The normal to $y^2 = 4x$ with slope $-2$ meets the parabola at the point`,
      verify: { kind: "value", inputs: { a: "1", m: "-2" }, params: { q: "foot" } },
      options: [
        { key: "A", text: t`$(\frac{1}{4}, -1)$`, correct: false, misconceptionId: "C15-M14", value: "1/4 - I" },
        { key: "B", text: t`$(4, 2)$`, correct: false, misconceptionId: "C15-M15", value: "4 + 2*I" },
        { key: "C", text: t`$(4, 4)$`, correct: true, value: "4 + 4*I" },
        { key: "D", text: t`$(4, -4)$`, correct: false, misconceptionId: "C15-M13", value: "4 - 4*I" },
      ],
      solution: {
        steps: [
          t`$a = 1$, $m = -2$`,
          t`$(am^2, -2am) = (4, 4)$`,
        ],
      },
    },
  ],
};
