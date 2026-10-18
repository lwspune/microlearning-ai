import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`$\sin\theta = \frac{1}{\sqrt{2}}$ at $\frac{\pi}{4}$ and at $\frac{3\pi}{4}$, and again after every full turn. **Can one formula list every solution?**`,
    reveal: t`Yes: $\theta = n\pi + (-1)^n\frac{\pi}{4}$, for every integer $n$. Even $n$ gives $\frac{\pi}{4}$, $\frac{9\pi}{4}$, and so on; odd $n$ gives $\pi - \frac{\pi}{4} = \frac{3\pi}{4}$, $\frac{11\pi}{4}$, and so on.`,
  },
  explanation: {
    intuition: [
      t`To **solve** an equation such as $\sin\theta = \frac{1}{\sqrt{2}}$ is to find every angle $\theta$ that makes it true.`,
      t`Recall: its **principal solutions**, the ones in $[0, 2\pi)$, are $\frac{\pi}{4}$ and $\frac{3\pi}{4}$.`,
      t`Sine repeats every $2\pi$, so $\frac{\pi}{4} + 2\pi$ and $\frac{3\pi}{4} + 2\pi$ are solutions too, and so on.`,
      t`So there are infinitely many solutions, in two families: one from each principal solution.`,
      t`The **general solution** is one formula, using an integer $n$, that lists them all.`,
      t`If no angle has the sine you need, the equation has no solution at all.`,
    ],
    formal: [
      {
        title: "The rule for sine",
        points: [
          t`Here $\sin\theta = \frac{1}{\sqrt{2}} = \sin\frac{\pi}{4}$, so take $\alpha = \frac{\pi}{4}$.`,
          t`**Rule:** if $\sin\theta = \sin\alpha$, then $\theta = n\pi + (-1)^n\alpha$, where $n \in \mathbb{Z}$, any integer.`,
          t`Even $n = 2m$ gives $\theta = 2m\pi + \alpha$: here $\frac{\pi}{4}$, $\frac{9\pi}{4}$, and so on.`,
          t`Odd $n = 2m + 1$ gives $\theta = (2m + 1)\pi - \alpha$: here $\frac{3\pi}{4}$, $\frac{11\pi}{4}$, and so on.`,
          t`So $(-1)^n$ switches families: it adds $\alpha$ when $n$ is even and subtracts it when $n$ is odd.`,
        ],
        figure: {
          alt: "The graph of y = sin θ for θ from 0 to 4π and the dashed line y = 1/√2. The line meets the graph at π/4 and 9π/4, one family, and at 3π/4 and 11π/4, the other family.",
          axes: "none",
          view: { x: [-0.7, 8.9], y: [-2, 2] },
          elements: [
            { kind: "segment", from: [-0.4, 0], to: [8.6, 0], tone: "muted" },
            { kind: "label", at: [8.6, 0], label: "θ", labelAt: "n", tone: "muted" },
            { kind: "segment", from: [0, -1.85], to: [0, 1.85], tone: "muted" },
            { kind: "label", at: [0, 1.85], label: "y", labelAt: "e", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "segment", from: [4, -0.08], to: [4, 0.08], tone: "muted" },
            { kind: "label", at: [4, 0], label: "2π", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [8, -0.08], to: [8, 0.08], tone: "muted" },
            { kind: "label", at: [8, 0], label: "4π", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [-0.08, 1.5], to: [0.08, 1.5], tone: "muted" },
            { kind: "label", at: [0, 1.5], label: "1", labelAt: "w", tone: "muted" },
            { kind: "segment", from: [-0.08, -1.5], to: [0.08, -1.5], tone: "muted" },
            { kind: "label", at: [0, -1.5], label: "−1", labelAt: "w", tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.05, 0.118], [0.1, 0.235], [0.15, 0.35], [0.2, 0.464], [0.25, 0.574], [0.3, 0.681], [0.35, 0.784], [0.4, 0.882], [0.45, 0.974], [0.5, 1.061], [0.55, 1.141], [0.6, 1.214], [0.65, 1.279], [0.7, 1.337], [0.75, 1.386], [0.8, 1.427], [0.85, 1.459], [0.9, 1.482], [0.95, 1.495], [1, 1.5], [1.05, 1.495], [1.1, 1.482], [1.15, 1.459], [1.2, 1.427], [1.25, 1.386], [1.3, 1.337], [1.35, 1.279], [1.4, 1.214], [1.45, 1.141], [1.5, 1.061], [1.55, 0.974], [1.6, 0.882], [1.65, 0.784], [1.7, 0.681], [1.75, 0.574], [1.8, 0.464], [1.85, 0.35], [1.9, 0.235], [1.95, 0.118], [2, 0], [2.05, -0.118], [2.1, -0.235], [2.15, -0.35], [2.2, -0.464], [2.25, -0.574], [2.3, -0.681], [2.35, -0.784], [2.4, -0.882], [2.45, -0.974], [2.5, -1.061], [2.55, -1.141], [2.6, -1.214], [2.65, -1.279], [2.7, -1.337], [2.75, -1.386], [2.8, -1.427], [2.85, -1.459], [2.9, -1.482], [2.95, -1.495], [3, -1.5], [3.05, -1.495], [3.1, -1.482], [3.15, -1.459], [3.2, -1.427], [3.25, -1.386], [3.3, -1.337], [3.35, -1.279], [3.4, -1.214], [3.45, -1.141], [3.5, -1.061], [3.55, -0.974], [3.6, -0.882], [3.65, -0.784], [3.7, -0.681], [3.75, -0.574], [3.8, -0.464], [3.85, -0.35], [3.9, -0.235], [3.95, -0.118], [4, 0], [4.05, 0.118], [4.1, 0.235], [4.15, 0.35], [4.2, 0.464], [4.25, 0.574], [4.3, 0.681], [4.35, 0.784], [4.4, 0.882], [4.45, 0.974], [4.5, 1.061], [4.55, 1.141], [4.6, 1.214], [4.65, 1.279], [4.7, 1.337], [4.75, 1.386], [4.8, 1.427], [4.85, 1.459], [4.9, 1.482], [4.95, 1.495], [5, 1.5], [5.05, 1.495], [5.1, 1.482], [5.15, 1.459], [5.2, 1.427], [5.25, 1.386], [5.3, 1.337], [5.35, 1.279], [5.4, 1.214], [5.45, 1.141], [5.5, 1.061], [5.55, 0.974], [5.6, 0.882], [5.65, 0.784], [5.7, 0.681], [5.75, 0.574], [5.8, 0.464], [5.85, 0.35], [5.9, 0.235], [5.95, 0.118], [6, 0], [6.05, -0.118], [6.1, -0.235], [6.15, -0.35], [6.2, -0.464], [6.25, -0.574], [6.3, -0.681], [6.35, -0.784], [6.4, -0.882], [6.45, -0.974], [6.5, -1.061], [6.55, -1.141], [6.6, -1.214], [6.65, -1.279], [6.7, -1.337], [6.75, -1.386], [6.8, -1.427], [6.85, -1.459], [6.9, -1.482], [6.95, -1.495], [7, -1.5], [7.05, -1.495], [7.1, -1.482], [7.15, -1.459], [7.2, -1.427], [7.25, -1.386], [7.3, -1.337], [7.35, -1.279], [7.4, -1.214], [7.45, -1.141], [7.5, -1.061], [7.55, -0.974], [7.6, -0.882], [7.65, -0.784], [7.7, -0.681], [7.75, -0.574], [7.8, -0.464], [7.85, -0.35], [7.9, -0.235], [7.95, -0.118], [8, 0]], step: 1 },
            { kind: "segment", from: [0, 1.061], to: [8.4, 1.061], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [7.1, 1.061], label: "y = 1/√2", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [0.5, 1.061], label: "π/4", labelAt: "se", tone: "good", step: 3 },
            { kind: "point", at: [4.5, 1.061], label: "9π/4", labelAt: "nw", tone: "good", step: 3 },
            { kind: "point", at: [1.5, 1.061], label: "3π/4", labelAt: "ne", step: 4 },
            { kind: "point", at: [5.5, 1.061], label: "11π/4", labelAt: "ne", step: 4 },
          ],
        },
      },
      {
        title: "Choosing α",
        points: [
          t`First write the right side as the sine of a known angle $\alpha$.`,
          t`Any such $\alpha$ works: another choice gives the same solutions, written differently.`,
          t`Keep a minus sign: $-\frac{1}{2}$ is $\sin\left(-\frac{\pi}{6}\right)$, so $\alpha = -\frac{\pi}{6}$.`,
          t`Then $\sin\theta = -\frac{1}{2}$ gives $\theta = n\pi - (-1)^n\frac{\pi}{6}$.`,
          t`For $\operatorname{cosec}\theta = c$, flip it first: $\sin\theta = \frac{1}{c}$, then find $\alpha$.`,
        ],
      },
      {
        title: "Multiple angles",
        points: [
          t`For $\sin k\theta = \sin\alpha$, apply the rule to the whole angle $k\theta$.`,
          t`That gives $k\theta = n\pi + (-1)^n\alpha$.`,
          t`Then divide **every** term by $k$: $\theta = \frac{n\pi}{k}$ $+ (-1)^n\frac{\alpha}{k}$.`,
          t`Example: $\sin 2\theta = \frac{\sqrt{3}}{2} = \sin\frac{\pi}{3}$, so $2\theta = n\pi + (-1)^n\frac{\pi}{3}$.`,
          t`Halve both terms: $\theta = \frac{n\pi}{2} + (-1)^n\frac{\pi}{6}$.`,
        ],
      },
      {
        title: "When there is no solution",
        points: [
          t`Whatever the angle, $-1 \le \sin\theta \le 1$.`,
          t`So $2\sin\theta = 3$, which needs $\sin\theta = \frac{3}{2}$, has **no solution**.`,
          t`Likewise $3\sin\theta = 5$ needs $\sin\theta = \frac{5}{3} > 1$: no solution.`,
          t`A negative value inside the range is fine: $\sin\theta = -\frac{1}{2}$ has solutions.`,
          t`For cosec, flip first: $\operatorname{cosec}\theta = \frac{1}{2}$ needs $\sin\theta = 2$, so no solution.`,
        ],
        figure: {
          alt: "The graph of y = sin θ for θ from 0 to 4π stays between the dashed lines y = 1 and y = −1. The dashed line y = 3/2 lies above it and never meets it: sin θ = 3/2 has no solution.",
          axes: "none",
          view: { x: [-0.7, 8.9], y: [-2, 2.75] },
          elements: [
            { kind: "segment", from: [-0.4, 0], to: [8.6, 0], tone: "muted" },
            { kind: "label", at: [8.6, 0], label: "θ", labelAt: "n", tone: "muted" },
            { kind: "segment", from: [0, -1.85], to: [0, 2.6], tone: "muted" },
            { kind: "label", at: [0, 2.6], label: "y", labelAt: "e", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "segment", from: [4, -0.08], to: [4, 0.08], tone: "muted" },
            { kind: "label", at: [4, 0], label: "2π", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [8, -0.08], to: [8, 0.08], tone: "muted" },
            { kind: "label", at: [8, 0], label: "4π", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [-0.08, 1.5], to: [0.08, 1.5], tone: "muted" },
            { kind: "label", at: [0, 1.5], label: "1", labelAt: "w", tone: "muted" },
            { kind: "segment", from: [-0.08, -1.5], to: [0.08, -1.5], tone: "muted" },
            { kind: "label", at: [0, -1.5], label: "−1", labelAt: "w", tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.05, 0.118], [0.1, 0.235], [0.15, 0.35], [0.2, 0.464], [0.25, 0.574], [0.3, 0.681], [0.35, 0.784], [0.4, 0.882], [0.45, 0.974], [0.5, 1.061], [0.55, 1.141], [0.6, 1.214], [0.65, 1.279], [0.7, 1.337], [0.75, 1.386], [0.8, 1.427], [0.85, 1.459], [0.9, 1.482], [0.95, 1.495], [1, 1.5], [1.05, 1.495], [1.1, 1.482], [1.15, 1.459], [1.2, 1.427], [1.25, 1.386], [1.3, 1.337], [1.35, 1.279], [1.4, 1.214], [1.45, 1.141], [1.5, 1.061], [1.55, 0.974], [1.6, 0.882], [1.65, 0.784], [1.7, 0.681], [1.75, 0.574], [1.8, 0.464], [1.85, 0.35], [1.9, 0.235], [1.95, 0.118], [2, 0], [2.05, -0.118], [2.1, -0.235], [2.15, -0.35], [2.2, -0.464], [2.25, -0.574], [2.3, -0.681], [2.35, -0.784], [2.4, -0.882], [2.45, -0.974], [2.5, -1.061], [2.55, -1.141], [2.6, -1.214], [2.65, -1.279], [2.7, -1.337], [2.75, -1.386], [2.8, -1.427], [2.85, -1.459], [2.9, -1.482], [2.95, -1.495], [3, -1.5], [3.05, -1.495], [3.1, -1.482], [3.15, -1.459], [3.2, -1.427], [3.25, -1.386], [3.3, -1.337], [3.35, -1.279], [3.4, -1.214], [3.45, -1.141], [3.5, -1.061], [3.55, -0.974], [3.6, -0.882], [3.65, -0.784], [3.7, -0.681], [3.75, -0.574], [3.8, -0.464], [3.85, -0.35], [3.9, -0.235], [3.95, -0.118], [4, 0], [4.05, 0.118], [4.1, 0.235], [4.15, 0.35], [4.2, 0.464], [4.25, 0.574], [4.3, 0.681], [4.35, 0.784], [4.4, 0.882], [4.45, 0.974], [4.5, 1.061], [4.55, 1.141], [4.6, 1.214], [4.65, 1.279], [4.7, 1.337], [4.75, 1.386], [4.8, 1.427], [4.85, 1.459], [4.9, 1.482], [4.95, 1.495], [5, 1.5], [5.05, 1.495], [5.1, 1.482], [5.15, 1.459], [5.2, 1.427], [5.25, 1.386], [5.3, 1.337], [5.35, 1.279], [5.4, 1.214], [5.45, 1.141], [5.5, 1.061], [5.55, 0.974], [5.6, 0.882], [5.65, 0.784], [5.7, 0.681], [5.75, 0.574], [5.8, 0.464], [5.85, 0.35], [5.9, 0.235], [5.95, 0.118], [6, 0], [6.05, -0.118], [6.1, -0.235], [6.15, -0.35], [6.2, -0.464], [6.25, -0.574], [6.3, -0.681], [6.35, -0.784], [6.4, -0.882], [6.45, -0.974], [6.5, -1.061], [6.55, -1.141], [6.6, -1.214], [6.65, -1.279], [6.7, -1.337], [6.75, -1.386], [6.8, -1.427], [6.85, -1.459], [6.9, -1.482], [6.95, -1.495], [7, -1.5], [7.05, -1.495], [7.1, -1.482], [7.15, -1.459], [7.2, -1.427], [7.25, -1.386], [7.3, -1.337], [7.35, -1.279], [7.4, -1.214], [7.45, -1.141], [7.5, -1.061], [7.55, -0.974], [7.6, -0.882], [7.65, -0.784], [7.7, -0.681], [7.75, -0.574], [7.8, -0.464], [7.85, -0.35], [7.9, -0.235], [7.95, -0.118], [8, 0]] },
            { kind: "segment", from: [0, 1.5], to: [8.4, 1.5], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [0, -1.5], to: [8.4, -1.5], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [0, 2.25], to: [8.4, 2.25], dashed: true, tone: "bad", step: 2 },
            { kind: "label", at: [5, 2.25], label: "y = 3/2: never met", labelAt: "n", tone: "bad", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the general solution of $\sin 3\theta = -\frac{\sqrt{3}}{2}$.`,
      steps: [
        t`$-\frac{\sqrt{3}}{2}$ is $\sin\left(-\frac{\pi}{3}\right)$, so take $\alpha = -\frac{\pi}{3}$, keeping the minus sign.`,
        t`Apply the rule to the whole angle $3\theta$: $3\theta = n\pi - (-1)^n\frac{\pi}{3}$.`,
        t`Divide every term by $3$: $\theta = \frac{n\pi}{3} - (-1)^n\frac{\pi}{9}$.`,
        t`Check $n = 0$: $\theta = -\frac{\pi}{9}$, so $3\theta = -\frac{\pi}{3}$, whose sine is $-\frac{\sqrt{3}}{2}$.`,
      ],
      answer: t`$\theta = \frac{n\pi}{3} - (-1)^n\frac{\pi}{9}$, $n \in \mathbb{Z}$`,
    },
    visualSpec: t`Drag a horizontal line $y = c$ across the sine graph: its crossings light up in two colours, one per family, and all vanish once $c$ leaves $[-1, 1]$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Drops the $(-1)^n$ and writes $\theta = n\pi + \alpha$, as if sine repeated every $\pi$`,
      remediation: t`Sine repeats every $2\pi$, not $\pi$: $\sin(\alpha + \pi) = -\sin\alpha$. The rule is $\theta = n\pi + (-1)^n\alpha$; on odd $n$ the $(-1)^n$ turns $\alpha$ into $\pi - \alpha$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Uses the cosine form $\theta = 2n\pi \pm \alpha$ for a sine equation`,
      remediation: t`$\theta = 2n\pi \pm \alpha$ is the rule for $\cos\theta = \cos\alpha$. For sine the two angles in a turn are $\alpha$ and $\pi - \alpha$, so $\theta = n\pi + (-1)^n\alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`For $\sin k\theta$, divides only $\alpha$ by $k$ and leaves $n\pi$ as it is`,
      remediation: t`The rule gives $k\theta = n\pi + (-1)^n\alpha$. Divide every term by $k$: $\theta = \frac{n\pi}{k} + (-1)^n\frac{\alpha}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Drops the minus sign of a negative value and uses the $\alpha$ of the positive value`,
      remediation: t`Keep the sign when you choose $\alpha$: $-\frac{1}{2} = \sin\left(-\frac{\pi}{6}\right)$, so $\alpha = -\frac{\pi}{6}$. With $\alpha = \frac{\pi}{6}$ you would be solving $\sin\theta = +\frac{1}{2}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Gives only the family $\theta = 2n\pi + \alpha$ and misses the angles $\pi - \alpha$`,
      remediation: t`Sine takes each value twice in a turn, at $\alpha$ and at $\pi - \alpha$. The rule $\theta = n\pi + (-1)^n\alpha$ gives both families: $2m\pi + \alpha$ for even $n$, $(2m + 1)\pi - \alpha$ for odd $n$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M6",
      mistake: t`Reads $\operatorname{cosec}\theta = c$ as $\sin\theta = c$`,
      remediation: t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, so $\operatorname{cosec}\theta = c$ means $\sin\theta = \frac{1}{c}$. Flip it first, then check it lies in $[-1, 1]$ and find $\alpha$.`,
      fallback: { kind: "ext", topic: "reciprocal trigonometric ratios" },
    },
  ],
  engineNotes: [
    t`C02-M3 applies only to multiple angles ($\sin k\theta$, $k > 1$), C02-M4 only to negative values, and C02-M6 only to cosec equations; draw a diagnosing item from those.`,
    t`Options are compared by their solution sets over $[0, 4\pi)$, so equivalent forms of a general solution count as the same answer.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G2 i)" },
      stem: t`The general solution of $\sin\theta = -\frac{\sqrt{3}}{2}$ is ($n \in \mathbb{Z}$):`,
      verify: { kind: "value", inputs: { k: "1", s: "-sqrt(3)/2", a: "4*pi/3" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\theta = n\pi + (-1)^n\frac{4\pi}{3}$`, correct: true, value: "{4*pi/3, 5*pi/3, 10*pi/3, 11*pi/3}" },
        { key: "B", text: t`$\theta = n\pi + \frac{4\pi}{3}$`, correct: false, misconceptionId: "C02-M1", value: "{pi/3, 4*pi/3, 7*pi/3, 10*pi/3}" },
        { key: "C", text: t`$\theta = 2n\pi \pm \frac{4\pi}{3}$`, correct: false, misconceptionId: "C02-M2", value: "{2*pi/3, 4*pi/3, 8*pi/3, 10*pi/3}" },
        { key: "D", text: t`$\theta = n\pi + (-1)^n\frac{\pi}{3}$`, correct: false, misconceptionId: "C02-M4", value: "{pi/3, 2*pi/3, 7*pi/3, 8*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\sin\frac{4\pi}{3} = -\sin\frac{\pi}{3}$ $= -\frac{\sqrt{3}}{2}$, so take $\alpha = \frac{4\pi}{3}$.`,
          t`By the rule, $\theta = n\pi + (-1)^n\frac{4\pi}{3}$, $n \in \mathbb{Z}$.`,
          t`Taking $\alpha = -\frac{\pi}{3}$ gives the same solutions, written $\theta = n\pi - (-1)^n\frac{\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q5 i)" },
      stem: t`The general solution of $\sin 2\theta = \frac{1}{2}$ is ($n \in \mathbb{Z}$):`,
      verify: { kind: "value", inputs: { k: "2", s: "1/2", a: "pi/6" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\theta = \frac{n\pi}{2} + \frac{\pi}{12}$`, correct: false, misconceptionId: "C02-M1", value: "{pi/12, 7*pi/12, 13*pi/12, 19*pi/12, 25*pi/12, 31*pi/12, 37*pi/12, 43*pi/12}" },
        { key: "B", text: t`$\theta = n\pi + (-1)^n\frac{\pi}{12}$`, correct: false, misconceptionId: "C02-M3", value: "{pi/12, 11*pi/12, 25*pi/12, 35*pi/12}" },
        { key: "C", text: t`$\theta = n\pi + \frac{\pi}{12}$`, correct: false, misconceptionId: "C02-M5", value: "{pi/12, 13*pi/12, 25*pi/12, 37*pi/12}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{2} + (-1)^n\frac{\pi}{12}$`, correct: true, value: "{pi/12, 5*pi/12, 13*pi/12, 17*pi/12, 25*pi/12, 29*pi/12, 37*pi/12, 41*pi/12}" },
      ],
      solution: {
        steps: [
          t`$\frac{1}{2} = \sin\frac{\pi}{6}$, so $2\theta = n\pi + (-1)^n\frac{\pi}{6}$.`,
          t`Divide every term by $2$: $\theta = \frac{n\pi}{2} + (-1)^n\frac{\pi}{12}$, $n \in \mathbb{Z}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.2 (i)" },
      stem: t`The general solution of $\sin 2\theta = -\frac{1}{\sqrt{2}}$ is ($n \in \mathbb{Z}$):`,
      verify: { kind: "value", inputs: { k: "2", s: "-1/sqrt(2)", a: "-pi/4" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\theta = n\pi \pm \frac{\pi}{8}$`, correct: false, misconceptionId: "C02-M2", value: "{pi/8, 7*pi/8, 9*pi/8, 15*pi/8, 17*pi/8, 23*pi/8, 25*pi/8, 31*pi/8}" },
        { key: "B", text: t`$\theta = \frac{n\pi}{2} - (-1)^n\frac{\pi}{8}$`, correct: true, value: "{5*pi/8, 7*pi/8, 13*pi/8, 15*pi/8, 21*pi/8, 23*pi/8, 29*pi/8, 31*pi/8}" },
        { key: "C", text: t`$\theta = n\pi - (-1)^n\frac{\pi}{8}$`, correct: false, misconceptionId: "C02-M3", value: "{9*pi/8, 15*pi/8, 25*pi/8, 31*pi/8}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{2} + (-1)^n\frac{\pi}{8}$`, correct: false, misconceptionId: "C02-M4", value: "{pi/8, 3*pi/8, 9*pi/8, 11*pi/8, 17*pi/8, 19*pi/8, 25*pi/8, 27*pi/8}" },
      ],
      solution: {
        steps: [
          t`$-\frac{1}{\sqrt{2}}$ is $\sin\left(-\frac{\pi}{4}\right)$: keep the sign, $\alpha = -\frac{\pi}{4}$.`,
          t`Apply the rule to $2\theta$: $2\theta = n\pi - (-1)^n\frac{\pi}{4}$.`,
          t`Divide every term by $2$: $\theta = \frac{n\pi}{2} - (-1)^n\frac{\pi}{8}$, $n \in \mathbb{Z}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q4 ii)" },
      stem: t`The general solution of $\operatorname{cosec}\theta = -\sqrt{2}$ is ($n \in \mathbb{Z}$):`,
      verify: { kind: "value", inputs: { k: "1", s: "-sqrt(2)", a: "-pi/4" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$\theta = 2n\pi - \frac{\pi}{4}$`, correct: false, misconceptionId: "C02-M5", value: "{7*pi/4, 15*pi/4}" },
        { key: "B", text: t`$\theta = n\pi - (-1)^n\frac{\pi}{4}$`, correct: true, value: "{5*pi/4, 7*pi/4, 13*pi/4, 15*pi/4}" },
        { key: "C", text: t`No solution`, correct: false, misconceptionId: "C02-M6", value: "EmptySet" },
        { key: "D", text: t`$\theta = n\pi + (-1)^n\frac{\pi}{4}$`, correct: false, misconceptionId: "C02-M4", value: "{pi/4, 3*pi/4, 9*pi/4, 11*pi/4}" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec}\theta = -\sqrt{2}$ means $\sin\theta = -\frac{1}{\sqrt{2}}$, which lies in $[-1, 1]$.`,
          t`$-\frac{1}{\sqrt{2}}$ is $\sin\left(-\frac{\pi}{4}\right)$, so $\alpha = -\frac{\pi}{4}$.`,
          t`By the rule, $\theta = n\pi - (-1)^n\frac{\pi}{4}$, $n \in \mathbb{Z}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G3 i)" },
      stem: t`The general solution of $\operatorname{cosec}\theta = 2$ is ($n \in \mathbb{Z}$):`,
      verify: { kind: "value", inputs: { k: "1", s: "2", a: "pi/6" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$\theta = 2n\pi \pm \frac{\pi}{6}$`, correct: false, misconceptionId: "C02-M2", value: "{pi/6, 11*pi/6, 13*pi/6, 23*pi/6}" },
        { key: "B", text: t`$\theta = n\pi + (-1)^n\frac{\pi}{6}$`, correct: true, value: "{pi/6, 5*pi/6, 13*pi/6, 17*pi/6}" },
        { key: "C", text: t`No solution`, correct: false, misconceptionId: "C02-M6", value: "EmptySet" },
        { key: "D", text: t`$\theta = n\pi + \frac{\pi}{6}$`, correct: false, misconceptionId: "C02-M1", value: "{pi/6, 7*pi/6, 13*pi/6, 19*pi/6}" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec}\theta = 2$ means $\sin\theta = \frac{1}{2}$, which lies in $[-1, 1]$.`,
          t`$\frac{1}{2} = \sin\frac{\pi}{6}$, so $\theta = n\pi + (-1)^n\frac{\pi}{6}$, $n \in \mathbb{Z}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G4 iii)" },
      stem: t`The general solution of $\sin 4\theta = \frac{\sqrt{3}}{2}$ is ($n \in \mathbb{Z}$):`,
      verify: { kind: "value", inputs: { k: "4", s: "sqrt(3)/2", a: "pi/3" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\theta = \frac{n\pi}{4} + (-1)^n\frac{\pi}{12}$`, correct: true, value: "{pi/12, pi/6, 7*pi/12, 2*pi/3, 13*pi/12, 7*pi/6, 19*pi/12, 5*pi/3, 25*pi/12, 13*pi/6, 31*pi/12, 8*pi/3, 37*pi/12, 19*pi/6, 43*pi/12, 11*pi/3}" },
        { key: "B", text: t`$\theta = n\pi + (-1)^n\frac{\pi}{12}$`, correct: false, misconceptionId: "C02-M3", value: "{pi/12, 11*pi/12, 25*pi/12, 35*pi/12}" },
        { key: "C", text: t`$\theta = \frac{n\pi}{2} + \frac{\pi}{12}$`, correct: false, misconceptionId: "C02-M5", value: "{pi/12, 7*pi/12, 13*pi/12, 19*pi/12, 25*pi/12, 31*pi/12, 37*pi/12, 43*pi/12}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{2} \pm \frac{\pi}{12}$`, correct: false, misconceptionId: "C02-M2", value: "{pi/12, 5*pi/12, 7*pi/12, 11*pi/12, 13*pi/12, 17*pi/12, 19*pi/12, 23*pi/12, 25*pi/12, 29*pi/12, 31*pi/12, 35*pi/12, 37*pi/12, 41*pi/12, 43*pi/12, 47*pi/12}" },
      ],
      solution: {
        steps: [
          t`$\frac{\sqrt{3}}{2} = \sin\frac{\pi}{3}$, so $4\theta = n\pi + (-1)^n\frac{\pi}{3}$.`,
          t`Divide every term by $4$: $\theta = \frac{n\pi}{4} + (-1)^n\frac{\pi}{12}$, $n \in \mathbb{Z}$.`,
        ],
      },
    },
  ],
};
