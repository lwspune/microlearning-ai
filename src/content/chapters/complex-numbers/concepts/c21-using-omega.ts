import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c21: Concept = {
  id: "C21",
  status: "approved",
  hook: {
    prompt: t`$1 + \omega + \omega^2 = 0$. **Write $1 + \omega$ as a single term.**`,
    reveal: t`$1 + \omega = -\omega^2$. Any two of $1, \omega, \omega^2$ add to minus the third.`,
  },
  explanation: {
    intuition: [
      t`Recall: $\omega$ is a cube root of $1$ other than $1$ itself, so $\omega^3 = 1$.`,
      t`Recall too: the three cube roots of $1$ add to zero, $1 + \omega + \omega^2 = 0$.`,
      t`So any two of $1$, $\omega$, $\omega^2$, a **pair**, add to minus the one left over, the **third**.`,
      t`To **group** terms is to bracket them so that such a pair appears.`,
      t`Swapping the pair for minus the third turns a messy bracket into a number times one power of $\omega$.`,
      t`Then $\omega^3 = 1$ finishes the job.`,
    ],
    formal: [
      {
        title: "A pair is minus the third",
        points: [
          t`Start from $1 + \omega + \omega^2 = 0$.`,
          t`Take $\omega^2$ from both sides: $1 + \omega = -\omega^2$.`,
          t`Take $\omega$ from both sides: $1 + \omega^2 = -\omega$.`,
          t`Take $1$ from both sides: $\omega + \omega^2 = -1$.`,
          t`Keep the minus: $1 + \omega^2$ is $-\omega$, not $\omega$.`,
        ],
        figure: {
          alt: "The cube roots of unity 1, ω and ω² as arrows from the origin to the unit circle. Adding two of the arrows, by completing a parallelogram, lands opposite the third: 1 + ω is −ω², 1 + ω² is −ω and ω + ω² is −1.",
          view: { x: [-2.6, 2.6], y: [-1.6, 1.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "vector", to: [1, 0], label: "1", labelAt: "n", step: 1 },
            { kind: "vector", to: [-0.5, 0.866], label: "ω", labelAt: "nw", step: 1 },
            { kind: "vector", to: [-0.5, -0.866], label: "ω²", labelAt: "sw", step: 1 },
            { kind: "segment", from: [1, 0], to: [0.5, 0.866], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [-0.5, 0.866], to: [0.5, 0.866], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [0.5, 0.866], label: "1 + ω = −ω²", labelAt: "ne", tone: "good", step: 2 },
            { kind: "segment", from: [1, 0], to: [0.5, -0.866], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [-0.5, -0.866], to: [0.5, -0.866], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [0.5, -0.866], label: "1 + ω² = −ω", labelAt: "se", tone: "good", step: 3 },
            { kind: "segment", from: [-0.5, 0.866], to: [-1, 0], dashed: true, tone: "muted", step: 4 },
            { kind: "segment", from: [-0.5, -0.866], to: [-1, 0], dashed: true, tone: "muted", step: 4 },
            { kind: "point", at: [-1, 0], label: "ω + ω² = −1", labelAt: "nw", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Grouping a bracket",
        points: [
          t`A **coefficient** is the number in front of a term: in $q\omega$ it is $q$.`,
          t`In $p + q\omega + p\omega^2$, the first and last terms share the coefficient $p$.`,
          t`Take out the common $p$: $p(1 + \omega^2) + q\omega$.`,
          t`Swap the pair for minus the third: $p(-\omega) + q\omega$.`,
          t`So $p + q\omega + p\omega^2$ equals $(q - p)\omega$, a single term.`,
        ],
      },
      {
        title: "Simplify first, then raise",
        points: [
          t`A **power** of a bracket multiplies the whole bracket by itself.`,
          t`A power doesn't split over a sum: $(a + b)^n \ne a^n + b^n$.`,
          t`So first simplify the bracket to a single term, such as $c\omega$.`,
          t`Then raise that term to the power: $(c\omega)^n = c^n\omega^n$.`,
          t`Recall: $\omega^3 = 1$, so only the remainder of $n$ on division by $3$ matters.`,
        ],
      },
      {
        title: "Roots of z³ = k",
        points: [
          t`Recall: the three cube roots of $1$ are $1$, $\omega$ and $\omega^2$.`,
          t`Let $c$ be the **real cube root** of $k$: the real number with $c^3 = k$.`,
          t`Then the roots of $z^3 = k$ are $c$, $c\omega$ and $c\omega^2$.`,
          t`Each one cubes to $k$: $(c\omega)^3 = c^3\omega^3 = k$.`,
          t`So scale **all three** cube roots of $1$, not just the real one.`,
          t`For example, the real cube root of $64$ is $4$, so $z^3 = 64$ has roots $4$, $4\omega$, $4\omega^2$.`,
        ],
        figure: {
          alt: "The cube roots of unity 1, ω and ω² as arrows from the origin to the unit circle. Each is scaled by the real cube root c, drawn here as 2: the roots of z³ = k are the arrows c, cω and cω², on a circle of radius c, in the same three directions.",
          view: { x: [-2.8, 2.8], y: [-2.3, 2.3] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted", step: 1 },
            { kind: "vector", to: [1, 0], label: "1", labelAt: "n", tone: "muted", step: 1 },
            { kind: "vector", to: [-0.5, 0.866], tone: "muted", step: 1 },
            { kind: "label", at: [-0.8, 0.66], label: "ω", labelAt: "w", tone: "muted", step: 1 },
            { kind: "vector", to: [-0.5, -0.866], tone: "muted", step: 1 },
            { kind: "label", at: [-0.8, -0.66], label: "ω²", labelAt: "w", tone: "muted", step: 1 },
            { kind: "vector", to: [2, 0], label: "c", labelAt: "ne", tone: "good", step: 2 },
            { kind: "circle", centre: [0, 0], r: 2, dashed: true, tone: "good", step: 3 },
            { kind: "vector", to: [-1, 1.732], label: "cω", labelAt: "nw", tone: "good", step: 3 },
            { kind: "vector", to: [-1, -1.732], label: "cω²", labelAt: "sw", tone: "good", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Simplify $(3 + 3\omega + 7\omega^2)^3$.`,
      steps: [
        t`Group: $3(1 + \omega) + 7\omega^2$ $= -3\omega^2 + 7\omega^2$ $= 4\omega^2$.`,
        t`Cube: $(4\omega^2)^3 = 64\omega^6 = 64$.`,
      ],
      answer: t`$64$`,
    },
    visualSpec: t`The three points $1$, $\omega$ and $\omega^2$ as arrows from the origin. Dragging the coefficients scales each arrow; equal coefficients visibly cancel, leaving one arrow.`,
  },
  misconceptions: [
    {
      id: "C21-M1",
      mistake: t`Dropping the sign: $1 + \omega^2 = \omega$`,
      remediation: t`$1 + \omega + \omega^2 = 0$ gives $1 + \omega^2 = -\omega$: keep the minus.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M2",
      mistake: t`$1 + \omega^2 = -\omega^2$`,
      remediation: t`Taking $\omega$ out of $1 + \omega + \omega^2 = 0$ leaves $1 + \omega^2 = -\omega$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M3",
      mistake: "Raising each term to the power separately",
      remediation: "A power doesn't split over a sum. Simplify the bracket to one term first, then raise it to the power.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C21-M4",
      mistake: t`Forgetting to scale $\omega$ and $\omega^2$ by the real cube root`,
      remediation: t`All three roots of $z^3 = k$ are scaled: $c$, $c\omega$, $c\omega^2$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M5",
      mistake: t`Giving the roots of $z^3 = -k$ instead of $z^3 = k$`,
      remediation: t`Check the sign: the real cube root of $8$ is $2$, and of $-27$ is $-3$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M6",
      mistake: t`Treating the power as a multiple: $(c\omega)^n = nc\,\omega^n$`,
      remediation: t`A power multiplies the term by itself: $(c\omega)^n = c^n\omega^n$, so $(2\omega)^4 = 16\,\omega^4$, not $8\,\omega^4$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C21-M7",
      mistake: t`Taking the cube root of $k$ as $\frac{k}{3}$`,
      remediation: t`The real cube root $c$ satisfies $c^3 = k$: the cube root of $64$ is $4$, not $\frac{64}{3}$.`,
      fallback: { kind: "ext", topic: "cube roots" },
    },
  ],
  items: [
    {
      id: "C21-Q1",
      source: { kind: "authored" },
      stem: t`$(1 + \omega^2)^3 = ?$`,
      verify: { kind: "value", inputs: { p: "1", q: "0", n: "3" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C21-M1", value: "1" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C21-M3", value: "2" },
        { key: "D", text: t`$-3$`, correct: false, misconceptionId: "C21-M6", value: "-3" },
      ],
      solution: {
        steps: [
          t`From $1 + \omega + \omega^2 = 0$: $1 + \omega^2 = -\omega$.`,
          t`Cube: $(-\omega)^3 = -\omega^3 = -1$.`,
        ],
      },
    },
    {
      id: "C21-Q2",
      source: { kind: "authored" },
      stem: t`$(1 - \omega + \omega^2)^4 = ?$`,
      verify: { kind: "value", inputs: { p: "1", q: "-1", n: "4" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C21-M1", value: "0" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C21-M2", value: "1" },
        { key: "C", text: t`$16 \omega$`, correct: true, value: "16*omega" },
        { key: "D", text: t`$-8 \omega$`, correct: false, misconceptionId: "C21-M6", value: "-8*omega" },
      ],
      solution: {
        steps: [
          t`Group: $(1 + \omega^2) - \omega = -\omega - \omega = -2\omega$.`,
          t`Raise to the 4th power: $(-2\omega)^4 = 16\omega^4$.`,
          t`$\omega^4 = \omega^3 \cdot \omega = \omega$, so the result is $16\omega$.`,
        ],
      },
    },
    {
      id: "C21-Q3",
      source: { kind: "authored" },
      stem: t`$(2 + 5\omega + 2\omega^2)^6 = ?$`,
      verify: { kind: "value", inputs: { p: "2", q: "5", n: "6" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$729$`, correct: true, value: "729" },
        { key: "B", text: t`$117649$`, correct: false, misconceptionId: "C21-M1", value: "117649" },
        { key: "C", text: t`$15753$`, correct: false, misconceptionId: "C21-M3", value: "15753" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C21-M6", value: "18" },
      ],
      solution: {
        steps: [
          t`Group: $2(1 + \omega^2) + 5\omega = -2\omega + 5\omega = 3\omega$.`,
          t`Raise to the 6th power: $(3\omega)^6 = 729\,\omega^6 = 729$, since $\omega^6 = (\omega^3)^2 = 1$.`,
        ],
      },
    },
    {
      id: "C21-Q4",
      source: { kind: "authored" },
      stem: t`$(2 - \omega + 2\omega^2)^3 = ?$`,
      verify: { kind: "value", inputs: { p: "2", q: "-1", n: "3" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$-27$`, correct: true, value: "-27" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C21-M1", value: "1" },
        { key: "C", text: t`$6 \omega + 3$`, correct: false, misconceptionId: "C21-M2", value: "6*omega + 3" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C21-M3", value: "15" },
      ],
      solution: {
        steps: [
          t`Group: $2(1 + \omega^2) - \omega = -2\omega - \omega = -3\omega$.`,
          t`Cube: $(-3\omega)^3 = -27\omega^3 = -27$.`,
        ],
      },
    },
    {
      id: "C21-Q5",
      source: { kind: "authored" },
      stem: t`The roots of $z^3 = 8$ are:`,
      verify: { kind: "value", inputs: { k: "8" }, params: { op: "cube_roots" } },
      options: [
        { key: "A", text: t`$2,\ 2\omega,\ 2\omega^2$`, correct: true, value: "2*omega" },
        { key: "B", text: t`$2,\ \omega,\ \omega^2$`, correct: false, misconceptionId: "C21-M4", value: "omega" },
        { key: "C", text: t`$-2,\ -2\omega,\ -2\omega^2$`, correct: false, misconceptionId: "C21-M5", value: "-2*omega**2" },
        { key: "D", text: t`$\frac{8}{3},\ \frac{8}{3}\omega,\ \frac{8}{3}\omega^2$`, correct: false, misconceptionId: "C21-M7", value: "8*omega/3" },
      ],
      solution: {
        steps: [
          t`The real cube root of $8$ is $2$.`,
          t`Scale all three cube roots of unity by $2$: the roots are $2$, $2\omega$ and $2\omega^2$.`,
        ],
      },
    },
    {
      id: "C21-Q6",
      source: { kind: "authored" },
      stem: t`The roots of $z^3 = -27$ are:`,
      verify: { kind: "value", inputs: { k: "-27" }, params: { op: "cube_roots" } },
      options: [
        { key: "A", text: t`$3,\ 3\omega,\ 3\omega^2$`, correct: false, misconceptionId: "C21-M5", value: "3*omega" },
        { key: "B", text: t`$-3,\ -3\omega,\ -3\omega^2$`, correct: true, value: "-3*omega**2" },
        { key: "C", text: t`$-3,\ \omega,\ \omega^2$`, correct: false, misconceptionId: "C21-M4", value: "omega" },
        { key: "D", text: t`$-9,\ -9\omega,\ -9\omega^2$`, correct: false, misconceptionId: "C21-M7", value: "-9*omega**2" },
      ],
      solution: {
        steps: [
          t`The real cube root of $-27$ is $-3$.`,
          t`Scale all three cube roots of unity by $-3$: the roots are $-3$, $-3\omega$ and $-3\omega^2$.`,
        ],
      },
    },
  ],
};
