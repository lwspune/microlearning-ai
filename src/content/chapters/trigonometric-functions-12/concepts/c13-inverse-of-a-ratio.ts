import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`A calculator gives $\sin^{-1}(\sin\frac{4\pi}{5})$ $= \frac{\pi}{5}$, not $\frac{4\pi}{5}$. **Is the calculator wrong?**`,
    reveal: t`No. $\sin^{-1}$ returns only angles in $[-\frac{\pi}{2}, \frac{\pi}{2}]$, and $\frac{4\pi}{5}$ is outside. $\frac{\pi}{5}$ is the angle in that range with the same sine: $\sin\frac{4\pi}{5} = \sin(\pi - \frac{4\pi}{5})$ $= \sin\frac{\pi}{5}$.`,
  },
  explanation: {
    intuition: [
      t`$\sin^{-1}$ undoes $\sin$, but it only ever returns angles in $[-\frac{\pi}{2}, \frac{\pi}{2}]$.`,
      t`Many angles share each sine: $\frac{\pi}{6}$, $\frac{5\pi}{6}$ and $\frac{13\pi}{6}$ all have sine $\frac{1}{2}$.`,
      t`$\sin^{-1}\frac{1}{2}$ must pick one of them: the one in its range, $\frac{\pi}{6}$.`,
      t`So $\sin^{-1}(\sin x)$ gives back $x$ only when $x$ is already in the range.`,
      t`Otherwise it gives the angle in the range that has the same sine as $x$.`,
      t`$\cos^{-1}(\cos x)$ and $\tan^{-1}(\tan x)$ work the same way, each with its own range.`,
    ],
    formal: [
      {
        title: "Inside the principal range",
        points: [
          t`**Recall:** $\sin^{-1}c$ is the one angle in $[-\frac{\pi}{2}, \frac{\pi}{2}]$ whose sine is $c$.`,
          t`So $\sin^{-1}(\sin x)$ always lands in $[-\frac{\pi}{2}, \frac{\pi}{2}]$, whatever $x$ is.`,
          t`If $x$ is in that range, the answer is $x$ itself: $\sin^{-1}(\sin\frac{\pi}{5}) = \frac{\pi}{5}$.`,
          t`Likewise $\cos^{-1}(\cos x) = x$ for $x \in [0, \pi]$.`,
          t`And $\tan^{-1}(\tan x) = x$ for $x \in (-\frac{\pi}{2}, \frac{\pi}{2})$.`,
          t`The other order is simpler: $\sin(\sin^{-1}c) = c$ for every $c \in [-1, 1]$.`,
        ],
      },
      {
        title: "Outside the range: sine",
        points: [
          t`On $[-\frac{\pi}{2}, \frac{\pi}{2}]$, $\sin^{-1}(\sin x) = x$: the graph is the line $y = x$.`,
          t`For $x \in [\frac{\pi}{2}, \frac{3\pi}{2}]$, use $\sin(\pi - x) = \sin x$: the answer is $\pi - x$.`,
          t`For $x \in [\frac{3\pi}{2}, \frac{5\pi}{2}]$, take off a whole turn: the answer is $x - 2\pi$.`,
          t`Every answer stays between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$, so the graph zigzags.`,
          t`Example: $\sin^{-1}(\sin\frac{2\pi}{3})$ $= \pi - \frac{2\pi}{3} = \frac{\pi}{3}$.`,
        ],
        figure: {
          alt: "The graph of y = sin⁻¹(sin x) for x from −π/2 to 5π/2. It is the line y = x on [−π/2, π/2], falls as y = π − x on [π/2, 3π/2], and rises as y = x − 2π on [3π/2, 5π/2], always staying between the dashed lines y = π/2 and y = −π/2. The point (2π/3, π/3) is marked.",
          axes: "none",
          view: { x: [-2.4, 8.6], y: [-2.4, 2.4] },
          elements: [
            { kind: "segment", from: [-2.1, 0], to: [8.3, 0], tone: "muted" },
            { kind: "label", at: [8.3, 0], label: "x", labelAt: "n", tone: "muted" },
            { kind: "segment", from: [0, -2.2], to: [0, 2.2], tone: "muted" },
            { kind: "label", at: [0, 2.2], label: "y", labelAt: "e", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "segment", from: [-1.571, -0.08], to: [-1.571, 0.08], tone: "muted" },
            { kind: "label", at: [-1.571, 0], label: "−π/2", labelAt: "n", tone: "muted" },
            { kind: "segment", from: [1.571, -0.08], to: [1.571, 0.08], tone: "muted" },
            { kind: "label", at: [1.571, 0], label: "π/2", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [3.142, -0.08], to: [3.142, 0.08], tone: "muted" },
            { kind: "label", at: [3.142, 0], label: "π", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [4.712, -0.08], to: [4.712, 0.08], tone: "muted" },
            { kind: "label", at: [4.712, 0], label: "3π/2", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [6.283, -0.08], to: [6.283, 0.08], tone: "muted" },
            { kind: "label", at: [6.283, 0], label: "2π", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [7.854, -0.08], to: [7.854, 0.08], tone: "muted" },
            { kind: "label", at: [7.854, 0], label: "5π/2", labelAt: "s", tone: "muted" },
            { kind: "curve", points: [[-1.571, -1.571], [-0.785, -0.785], [0, 0], [0.785, 0.785], [1.571, 1.571]], tone: "good", step: 1 },
            { kind: "label", at: [0.9, 0.9], label: "y = x", labelAt: "nw", tone: "good", step: 1 },
            { kind: "curve", points: [[1.571, 1.571], [2.356, 0.785], [3.142, 0], [3.927, -0.785], [4.712, -1.571]], tone: "accent", step: 2 },
            { kind: "label", at: [2.75, 0.392], label: "π − x", labelAt: "ne", tone: "accent", step: 2 },
            { kind: "curve", points: [[4.712, -1.571], [5.498, -0.785], [6.283, 0], [7.069, 0.785], [7.854, 1.571]], tone: "accent", step: 3 },
            { kind: "label", at: [6.75, 0.4], label: "x − 2π", labelAt: "w", tone: "accent", step: 3 },
            { kind: "segment", from: [-2.1, 1.571], to: [8.3, 1.571], dashed: true, tone: "muted", step: 4 },
            { kind: "segment", from: [-2.1, -1.571], to: [8.3, -1.571], dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [-2.1, 1.571], label: "y = π/2", labelAt: "n", tone: "muted", step: 4 },
            { kind: "label", at: [-2.1, -1.571], label: "y = −π/2", labelAt: "s", tone: "muted", step: 4 },
            { kind: "point", at: [2.094, 1.047], label: "(2π/3, π/3)", labelAt: "ne", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Cosine and tangent",
        points: [
          t`Each function has its own rule: $\pi - x$ works for sine alone.`,
          t`Cosine: $\cos(2\pi - x) = \cos x$, so for $x \in [\pi, 2\pi]$ the answer is $2\pi - x$.`,
          t`Example: $\cos^{-1}(\cos\frac{4\pi}{3})$ $= 2\pi - \frac{4\pi}{3} = \frac{2\pi}{3}$.`,
          t`Tangent repeats every $\pi$: $\tan(x - \pi) = \tan x$.`,
          t`So subtract whole multiples of $\pi$ until the angle lies in $(-\frac{\pi}{2}, \frac{\pi}{2})$.`,
          t`Example: $\tan^{-1}(\tan\frac{5\pi}{4})$ $= \frac{5\pi}{4} - \pi = \frac{\pi}{4}$.`,
        ],
      },
      {
        title: "Two checks before answering",
        points: [
          t`**Range check:** the answer must lie in the principal range, not just share the ratio.`,
          t`Taking off whole turns is not always enough: $\frac{4\pi}{3} - 2\pi = -\frac{2\pi}{3}$ is outside $[0, \pi]$.`,
          t`**Sign check:** $\sin^{-1}$ and $\tan^{-1}$ of a negative ratio are negative angles.`,
          t`$\cos^{-1}$ of a negative ratio is an obtuse angle, in $(\frac{\pi}{2}, \pi]$.`,
          t`So $\cos^{-1}(\cos\frac{4\pi}{3})$ is $\frac{2\pi}{3}$, not $\frac{\pi}{3}$, since $\cos\frac{4\pi}{3} = -\frac{1}{2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\sin^{-1}(\sin\frac{7\pi}{5})$.`,
      steps: [
        t`$\frac{7\pi}{5}$ is not in $[-\frac{\pi}{2}, \frac{\pi}{2}]$, so the answer is not $\frac{7\pi}{5}$.`,
        t`$\frac{7\pi}{5}$ lies in $[\frac{\pi}{2}, \frac{3\pi}{2}]$, so use $\sin(\pi - x) = \sin x$.`,
        t`$\pi - \frac{7\pi}{5} = -\frac{2\pi}{5}$, which lies in $[-\frac{\pi}{2}, \frac{\pi}{2}]$.`,
        t`Sign check: $\sin\frac{7\pi}{5} < 0$, and $-\frac{2\pi}{5}$ is negative too.`,
      ],
      answer: t`$\sin^{-1}(\sin\frac{7\pi}{5}) = -\frac{2\pi}{5}$`,
    },
    visualSpec: t`Drag $x$ along the axis: a point rides the zigzag graph of $y = \sin^{-1}(\sin x)$, and a readout names the angle in the range with the same sine.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: t`Cancels $\sin^{-1}$ against $\sin$ and answers $x$, even when $x$ is outside the principal range`,
      remediation: t`$\sin^{-1}(\sin x) = x$ only for $x$ in $[-\frac{\pi}{2}, \frac{\pi}{2}]$ ($[0, \pi]$ for $\cos^{-1}$). Outside it, find the angle in the range with the same ratio.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M2",
      mistake: "Drops the sign of a negative ratio and answers with the acute angle",
      remediation: t`Keep the sign: $\sin^{-1}$ and $\tan^{-1}$ of a negative number are negative, and $\cos^{-1}$ of a negative number is obtuse, as $\cos^{-1}(-c) = \pi - \cos^{-1}c$.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M3",
      mistake: t`Takes off whole turns of $2\pi$ and stops, without checking the answer is in the principal range`,
      remediation: t`Removing $2\pi$ keeps the ratio, but the answer must also lie in the principal range. If it doesn't, use $\pi - x$ for sine, $2\pi - x$ for cosine, or a shift by $\pi$ for tangent.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M4",
      mistake: t`Uses sine's rule $\pi - x$ for every function once $x$ is outside the range`,
      remediation: t`$\sin(\pi - x) = \sin x$, but $\cos(\pi - x) = -\cos x$ and $\tan(\pi - x) = -\tan x$. Use $2\pi - x$ for cosine and $x - k\pi$ for tangent, then check the answer is in the range.`,
      fallback: { kind: "ext", topic: "trigonometric ratios of allied angles" },
    },
    {
      id: "C13-M5",
      mistake: t`Shifts $x$ by a multiple of $\pi$ to bring it into the range, for every function`,
      remediation: t`Only tangent repeats every $\pi$: $\sin(x - \pi) = -\sin x$ and $\cos(x - \pi) = -\cos x$. For sine use $\pi - x$, for cosine $2\pi - x$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios of allied angles" },
    },
  ],
  engineNotes: [
    t`C13-M2 needs a numeric angle whose ratio is negative. C13-M4 gives the key for sine when $x \in [\frac{\pi}{2}, \frac{3\pi}{2}]$; C13-M5 always gives the key for tangent.`,
    t`For sine or cosine with $x$ in $(\pi, \frac{3\pi}{2})$, C13-M2 and C13-M5 give the same angle (C13-Q5: $4 - \pi$ is tagged C13-M2); diagnose C13-M5 from C13-Q4 or C13-Q6.`,
    t`C13-M3 gives the key whenever $x$ minus whole turns already lies in the principal range.`,
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 SolvedEx.2 i)" },
      stem: t`$\sin^{-1}\left(\sin\frac{5\pi}{3}\right) =$`,
      verify: { kind: "value", inputs: { x: "5*pi/3" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$- \frac{\pi}{3}$`, correct: true, value: "-pi/3" },
        { key: "B", text: t`$\frac{5 \pi}{3}$`, correct: false, misconceptionId: "C13-M1", value: "5*pi/3" },
        { key: "C", text: t`$\frac{\pi}{3}$`, correct: false, misconceptionId: "C13-M2", value: "pi/3" },
        { key: "D", text: t`$- \frac{2 \pi}{3}$`, correct: false, misconceptionId: "C13-M4", value: "-2*pi/3" },
      ],
      solution: {
        steps: [
          t`$\frac{5\pi}{3}$ is outside $[-\frac{\pi}{2}, \frac{\pi}{2}]$; take off a whole turn: $\frac{5\pi}{3} - 2\pi = -\frac{\pi}{3}$.`,
          t`$\sin(-\frac{\pi}{3}) = \sin\frac{5\pi}{3}$, and $-\frac{\pi}{3}$ lies in the range.`,
          t`So $\sin^{-1}(\sin\frac{5\pi}{3}) = -\frac{\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.11" },
      stem: t`$\cos^{-1}\left(\cos\frac{7\pi}{6}\right) =$`,
      verify: { kind: "value", inputs: { x: "7*pi/6" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$\frac{5 \pi}{6}$`, correct: true, value: "5*pi/6" },
        { key: "B", text: t`$\frac{7 \pi}{6}$`, correct: false, misconceptionId: "C13-M1", value: "7*pi/6" },
        { key: "C", text: t`$\frac{\pi}{6}$`, correct: false, misconceptionId: "C13-M2", value: "pi/6" },
        { key: "D", text: t`$- \frac{5 \pi}{6}$`, correct: false, misconceptionId: "C13-M3", value: "-5*pi/6" },
      ],
      solution: {
        steps: [
          t`$\frac{7\pi}{6}$ is outside $[0, \pi]$, so the answer is not $\frac{7\pi}{6}$.`,
          t`$\cos(2\pi - x) = \cos x$, and $2\pi - \frac{7\pi}{6} = \frac{5\pi}{6}$ lies in $[0, \pi]$.`,
          t`Sign check: $\cos\frac{7\pi}{6} = -\frac{\sqrt{3}}{2} < 0$, so the answer is obtuse: $\frac{5\pi}{6}$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 SolvedEx.2 ii)" },
      stem: t`$\tan^{-1}\left(\tan\frac{11\pi}{4}\right) =$`,
      verify: { kind: "value", inputs: { x: "11*pi/4" }, params: { f: "tan" } },
      options: [
        { key: "A", text: t`$- \frac{7 \pi}{4}$`, correct: false, misconceptionId: "C13-M4", value: "-7*pi/4" },
        { key: "B", text: t`$- \frac{\pi}{4}$`, correct: true, value: "-pi/4" },
        { key: "C", text: t`$\frac{\pi}{4}$`, correct: false, misconceptionId: "C13-M2", value: "pi/4" },
        { key: "D", text: t`$\frac{3 \pi}{4}$`, correct: false, misconceptionId: "C13-M3", value: "3*pi/4" },
      ],
      solution: {
        steps: [
          t`Tangent repeats every $\pi$: $\frac{11\pi}{4} - 3\pi = -\frac{\pi}{4}$.`,
          t`$-\frac{\pi}{4}$ lies in $(-\frac{\pi}{2}, \frac{\pi}{2})$, so $\tan^{-1}(\tan\frac{11\pi}{4}) = -\frac{\pi}{4}$.`,
          t`Check: $\tan\frac{11\pi}{4} = \tan\frac{3\pi}{4} = -1$, and $\tan^{-1}(-1) = -\frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "authored" },
      stem: t`If $\pi < x < 2\pi$, then $\cos^{-1}(\cos x) =$`,
      verify: { kind: "value", inputs: { x: "x", s: "3*pi/2" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$x - 2\pi$`, correct: false, misconceptionId: "C13-M3", value: "x - 2*pi" },
        { key: "B", text: t`$\pi - x$`, correct: false, misconceptionId: "C13-M4", value: "pi - x" },
        { key: "C", text: t`$x - \pi$`, correct: false, misconceptionId: "C13-M5", value: "x - pi" },
        { key: "D", text: t`$2\pi - x$`, correct: true, value: "-x + 2*pi" },
      ],
      solution: {
        steps: [
          t`For $\pi < x < 2\pi$, $x$ is outside $[0, \pi]$.`,
          t`$\cos(2\pi - x) = \cos x$, and $0 < 2\pi - x < \pi$.`,
          t`So $\cos^{-1}(\cos x) = 2\pi - x$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "authored" },
      stem: t`$\sin^{-1}(\sin 4) =$ (the angle $4$ is in radians)`,
      verify: { kind: "value", inputs: { x: "4" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\pi - 4$`, correct: true, value: "-4 + pi" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C13-M1", value: "4" },
        { key: "C", text: t`$4 - \pi$`, correct: false, misconceptionId: "C13-M2", value: "4 - pi" },
        { key: "D", text: t`$4 - 2\pi$`, correct: false, misconceptionId: "C13-M3", value: "4 - 2*pi" },
      ],
      solution: {
        steps: [
          t`$4$ lies between $\frac{\pi}{2} \approx 1.57$ and $\frac{3\pi}{2} \approx 4.71$, outside $[-\frac{\pi}{2}, \frac{\pi}{2}]$.`,
          t`There $\sin(\pi - 4) = \sin 4$, and $\pi - 4 \approx -0.86$ lies in $[-\frac{\pi}{2}, \frac{\pi}{2}]$.`,
          t`So $\sin^{-1}(\sin 4) = \pi - 4$.`,
        ],
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "authored" },
      stem: t`If $\pi < x < \frac{3\pi}{2}$, then $\sin^{-1}(\sin x) =$`,
      verify: { kind: "value", inputs: { x: "x", s: "5*pi/4" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$x$`, correct: false, misconceptionId: "C13-M1", value: "x" },
        { key: "B", text: t`$x - 2\pi$`, correct: false, misconceptionId: "C13-M3", value: "x - 2*pi" },
        { key: "C", text: t`$x - \pi$`, correct: false, misconceptionId: "C13-M5", value: "x - pi" },
        { key: "D", text: t`$\pi - x$`, correct: true, value: "pi - x" },
      ],
      solution: {
        steps: [
          t`For $\pi < x < \frac{3\pi}{2}$, $x$ is outside $[-\frac{\pi}{2}, \frac{\pi}{2}]$.`,
          t`$\sin(\pi - x) = \sin x$, and $-\frac{\pi}{2} < \pi - x < 0$.`,
          t`So $\sin^{-1}(\sin x) = \pi - x$.`,
        ],
      },
    },
  ],
};
