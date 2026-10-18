import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Ravi solves $\tan^2\theta = \frac{1}{3}$ as $\tan\theta = \frac{1}{\sqrt{3}}$, so $\theta = n\pi + \frac{\pi}{6}$. **Is $\theta = \frac{5\pi}{6}$ a solution he missed?**`,
    reveal: t`Yes. $\tan\frac{5\pi}{6} = -\frac{1}{\sqrt{3}}$, and its square is $\frac{1}{3}$ too. Ravi dropped the negative root. The two signs together give $\theta = n\pi \pm \frac{\pi}{6}$.`,
  },
  explanation: {
    intuition: [
      t`A **square** hides a sign: $x^2 = 4$ means $x = 2$ or $x = -2$.`,
      t`So $\tan^2\theta = \frac{1}{3}$ means $\tan\theta = \frac{1}{\sqrt{3}}$ or $\tan\theta = -\frac{1}{\sqrt{3}}$.`,
      t`Each sign gives its own family of angles; drop one and you lose half the answers.`,
      t`The plus sign gives $\theta = n\pi + \frac{\pi}{6}$; the minus sign gives $\theta = n\pi - \frac{\pi}{6}$.`,
      t`Together they make one answer: $\theta = n\pi \pm \frac{\pi}{6}$.`,
      t`The same happens with $\sin^2\theta$ and $\cos^2\theta$: one rule, $\theta = n\pi \pm \alpha$.`,
    ],
    formal: [
      {
        title: "Why both signs count",
        points: [
          t`On the **unit circle**, of radius 1, the point at angle $\theta$ has height $\sin\theta$.`,
          t`$\sin^2\theta = \sin^2\alpha$ means the height is $\sin\alpha$ or $-\sin\alpha$.`,
          t`Height $\sin\alpha$: in one turn, $\theta = \alpha$ or $\theta = \pi - \alpha$.`,
          t`Height $-\sin\alpha$: $\theta = \pi + \alpha$ or $\theta = 2\pi - \alpha$.`,
          t`Opposite ends of a diameter differ by $\pi$: $\alpha$ and $\pi + \alpha$, $\pi - \alpha$ and $2\pi - \alpha$.`,
          t`So every solution is $n\pi + \alpha$ or $n\pi - \alpha$: $\theta = n\pi \pm \alpha$.`,
        ],
        figure: {
          alt: "A unit circle. An arm turns from the initial arm to the angle α, about 40°. Dashed lines mark the heights sin α and −sin α. At height sin α the circle meets the angles α and π − α; at height −sin α it meets π + α and 2π − α. Then two dashed diameters join α to π + α and π − α to 2π − α.",
          axes: "xy",
          view: { x: [-1.6, 1.6], y: [-1.6, 1.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [1, 0], tone: "good", label: "initial arm", labelAt: "s", step: 1 },
            { kind: "turn", r: 1, to: 40, label: "α", labelAt: "ne", step: 1 },
            { kind: "point", at: [0.766, 0.643], step: 1 },
            { kind: "line", through: [[0, 0.643], [1, 0.643]], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [1.32, 0.643], label: "sin α", labelAt: "n", tone: "muted", step: 2 },
            { kind: "line", through: [[0, -0.643], [1, -0.643]], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [1.32, -0.643], label: "−sin α", labelAt: "s", tone: "muted", step: 2 },
            { kind: "point", at: [-0.766, 0.643], label: "π − α", labelAt: "nw", step: 3 },
            { kind: "point", at: [-0.766, -0.643], label: "π + α", labelAt: "sw", step: 4 },
            { kind: "point", at: [0.766, -0.643], label: "2π − α", labelAt: "s", step: 4 },
            { kind: "segment", from: [0.766, 0.643], to: [-0.766, -0.643], dashed: true, tone: "good", step: 5 },
            { kind: "segment", from: [-0.766, 0.643], to: [0.766, -0.643], dashed: true, tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "One rule for all three",
        points: [
          t`$\sin^2\theta = \sin^2\alpha$ gives $\theta = n\pi \pm \alpha$, where $n \in Z$.`,
          t`$\cos^2\theta = \cos^2\alpha$ gives $\theta = n\pi \pm \alpha$ as well.`,
          t`$\tan^2\theta = \tan^2\alpha$ gives $\theta = n\pi \pm \alpha$ as well.`,
          t`A square repeats every $\pi$: $\sin(\theta + \pi) = -\sin\theta$, and the square loses the minus.`,
          t`So the step is $n\pi$, never $2n\pi$, for all three.`,
        ],
      },
      {
        title: "The book's proof",
        points: [
          t`Use $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$ on both sides of $\sin^2\theta = \sin^2\alpha$.`,
          t`Then $\cos 2\theta = \cos 2\alpha$.`,
          t`The cosine rule gives $2\theta = 2n\pi \pm 2\alpha$.`,
          t`Halve **every** term: $\theta = n\pi \pm \alpha$.`,
          t`$\cos^2\theta = \frac{1 + \cos 2\theta}{2}$ leads to the same $\cos 2\theta = \cos 2\alpha$.`,
        ],
      },
      {
        title: "Finding the angle alpha",
        points: [
          t`First get the square alone: divide by its coefficient, giving $\sin^2\theta = k$.`,
          t`Write $k$ as a square, then take the **positive** root: $\alpha$ is acute with $\sin\alpha = \sqrt{k}$.`,
          t`Read $\alpha$ from the ratio in the equation: $\sin\frac{\pi}{6} = \frac{1}{2}$, but $\cos\frac{\pi}{3} = \frac{1}{2}$.`,
          t`$\sin^2\theta = 1$ gives $\alpha = \frac{\pi}{2}$, so $\theta = n\pi \pm \frac{\pi}{2}$.`,
          t`A square is never negative: $\cos^2\theta = -1$ has **no solution**.`,
          t`$\sin^2\theta$ and $\cos^2\theta$ never exceed 1: $\sin^2\theta = 2$ has no solution either.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the general solution of $4\cos^2\theta = 3$.`,
      steps: [
        t`Get the square alone: $\cos^2\theta = \frac{3}{4}$.`,
        t`Write it as a square: $\frac{3}{4} = \left(\frac{\sqrt{3}}{2}\right)^2$, and $\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$.`,
        t`So $\cos^2\theta = \cos^2\frac{\pi}{6}$, with $\alpha = \frac{\pi}{6}$.`,
        t`Both signs count: $\cos^2\theta = \cos^2\alpha$ gives $\theta = n\pi \pm \alpha$.`,
      ],
      answer: t`$\theta = n\pi \pm \frac{\pi}{6}$, where $n \in Z$.`,
    },
    visualSpec: t`Drag α round the unit circle: the four angles α, π − α, π + α and 2π − α move together, pairing up across two diameters.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Keeps only the positive root: solves $\sin\theta = \sqrt{k}$ (or $\cos$, $\tan$) with that ratio's own general solution, losing the angles where the ratio is negative.`,
      remediation: t`A square hides a sign: $\cos^2\theta = \cos^2\alpha$ means $\cos\theta = \pm\cos\alpha$, and likewise for $\sin$ and $\tan$. Both signs together give $\theta = n\pi \pm \alpha$.`,
      fallback: { kind: "ext", topic: "roots of real numbers" },
    },
    {
      id: "C04-M2",
      mistake: t`Forgets the square root: takes $\alpha$ with $\sin\alpha = k$ instead of $\sin\alpha = \sqrt{k}$.`,
      remediation: t`Write the value as a square first, e.g. $\frac{1}{2} = \left(\frac{1}{\sqrt{2}}\right)^2$. Then $\alpha$ comes from the root, $\frac{1}{\sqrt{2}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Keeps the $\pm$ but uses the cosine pattern $2n\pi \pm \alpha$ for every squared ratio.`,
      remediation: t`A square repeats every $\pi$, since $\sin(\theta + \pi) = -\sin\theta$. So the step is $n\pi$: $\theta = n\pi \pm \alpha$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: t`Reads $\alpha$ from the wrong ratio in the table, so gets $\frac{\pi}{2} - \alpha$ in place of $\alpha$.`,
      remediation: t`Read $\alpha$ from the ratio the equation uses: $\sin\frac{\pi}{6} = \frac{1}{2}$, but $\cos\frac{\pi}{3} = \frac{1}{2}$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios of standard angles" },
    },
    {
      id: "C04-M5",
      mistake: t`Turns the equation into $\cos 2\theta = \cos 2\alpha$, then forgets to halve: $\theta = 2n\pi \pm 2\alpha$.`,
      remediation: t`$\cos 2\theta = \cos 2\alpha$ gives $2\theta = 2n\pi \pm 2\alpha$. Divide every term by 2: $\theta = n\pi \pm \alpha$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M1 and C04-M3 give the same answer for $\cos^2\theta$ (both $2n\pi \pm \alpha$): diagnose C04-M3 with $\sin^2\theta$ or $\tan^2\theta$ items.`,
    t`C04-M4 gives the key when $\alpha = \frac{\pi}{4}$; C04-M2 needs $k$ itself to be a standard value (e.g. $\frac{1}{2}$), and for $\tan^2\theta = 1$ it gives the key.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G5 i)" },
      stem: t`The general solution of $4\cos^2\theta = 1$ is $\theta =$ ______, where $n \in Z$.`,
      verify: { kind: "value", inputs: { k: "1/4" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$n\pi \pm \frac{\pi}{6}$`, correct: false, misconceptionId: "C04-M4", value: "{pi/6, 5*pi/6, 7*pi/6, 11*pi/6}" },
        { key: "B", text: t`$2n\pi \pm \frac{2\pi}{3}$`, correct: false, misconceptionId: "C04-M5", value: "{2*pi/3, 4*pi/3}" },
        { key: "C", text: t`$n\pi \pm \frac{\pi}{3}$`, correct: true, value: "{pi/3, 2*pi/3, 4*pi/3, 5*pi/3}" },
        { key: "D", text: t`$2n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M1", value: "{pi/3, 5*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\cos^2\theta = \frac{1}{4} = \left(\frac{1}{2}\right)^2$, and $\cos\frac{\pi}{3} = \frac{1}{2}$.`,
          t`So $\cos^2\theta = \cos^2\frac{\pi}{3}$.`,
          t`Both signs count: $\theta = n\pi \pm \frac{\pi}{3}$. For instance $\frac{2\pi}{3}$ works, as $\cos\frac{2\pi}{3} = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G5 ii)" },
      stem: t`The general solution of $4\sin^2\theta = 3$ is $\theta =$ ______, where $n \in Z$.`,
      verify: { kind: "value", inputs: { k: "3/4" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$n\pi + (-1)^n\frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M1", value: "{pi/3, 2*pi/3}" },
        { key: "B", text: t`$2n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M3", value: "{pi/3, 5*pi/3}" },
        { key: "C", text: t`$n\pi \pm \frac{\pi}{6}$`, correct: false, misconceptionId: "C04-M4", value: "{pi/6, 5*pi/6, 7*pi/6, 11*pi/6}" },
        { key: "D", text: t`$n\pi \pm \frac{\pi}{3}$`, correct: true, value: "{pi/3, 2*pi/3, 4*pi/3, 5*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\sin^2\theta = \frac{3}{4} = \left(\frac{\sqrt{3}}{2}\right)^2$, and $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$.`,
          t`So $\sin^2\theta = \sin^2\frac{\pi}{3}$.`,
          t`Both signs count: $\theta = n\pi \pm \frac{\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.4 (ii)" },
      stem: t`The general solution of $\tan^2\theta = 3$ is $\theta =$ ______, where $n \in Z$.`,
      verify: { kind: "value", inputs: { k: "3" }, params: { f: "tan" } },
      options: [
        { key: "A", text: t`$2n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M3", value: "{pi/3, 5*pi/3}" },
        { key: "B", text: t`$n\pi \pm \frac{\pi}{6}$`, correct: false, misconceptionId: "C04-M4", value: "{pi/6, 5*pi/6, 7*pi/6, 11*pi/6}" },
        { key: "C", text: t`$n\pi \pm \frac{\pi}{3}$`, correct: true, value: "{pi/3, 2*pi/3, 4*pi/3, 5*pi/3}" },
        { key: "D", text: t`$n\pi + \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M1", value: "{pi/3, 4*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\tan^2\theta = 3 = (\sqrt{3})^2$, and $\tan\frac{\pi}{3} = \sqrt{3}$.`,
          t`So $\tan^2\theta = \tan^2\frac{\pi}{3}$.`,
          t`Both signs count: $\theta = n\pi \pm \frac{\pi}{3}$. For instance $\tan\frac{2\pi}{3} = -\sqrt{3}$ also squares to 3.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`The general solution of $2\sin^2\theta = 1$ is $\theta =$ ______, where $n \in Z$.`,
      verify: { kind: "value", inputs: { k: "1/2" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$n\pi + (-1)^n\frac{\pi}{4}$`, correct: false, misconceptionId: "C04-M1", value: "{pi/4, 3*pi/4}" },
        { key: "B", text: t`$n\pi \pm \frac{\pi}{6}$`, correct: false, misconceptionId: "C04-M2", value: "{pi/6, 5*pi/6, 7*pi/6, 11*pi/6}" },
        { key: "C", text: t`$2n\pi \pm \frac{\pi}{4}$`, correct: false, misconceptionId: "C04-M3", value: "{pi/4, 7*pi/4}" },
        { key: "D", text: t`$n\pi \pm \frac{\pi}{4}$`, correct: true, value: "{pi/4, 3*pi/4, 5*pi/4, 7*pi/4}" },
      ],
      solution: {
        steps: [
          t`$\sin^2\theta = \frac{1}{2} = \left(\frac{1}{\sqrt{2}}\right)^2$, and $\sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
          t`So $\sin^2\theta = \sin^2\frac{\pi}{4}$.`,
          t`Both signs count: $\theta = n\pi \pm \frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`The general solution of $2\cos^2\theta = 1$ is $\theta =$ ______, where $n \in Z$.`,
      verify: { kind: "value", inputs: { k: "1/2" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$2n\pi \pm \frac{\pi}{2}$`, correct: false, misconceptionId: "C04-M5", value: "{pi/2, 3*pi/2}" },
        { key: "B", text: t`$n\pi \pm \frac{\pi}{4}$`, correct: true, value: "{pi/4, 3*pi/4, 5*pi/4, 7*pi/4}" },
        { key: "C", text: t`$2n\pi \pm \frac{\pi}{4}$`, correct: false, misconceptionId: "C04-M1", value: "{pi/4, 7*pi/4}" },
        { key: "D", text: t`$n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M2", value: "{pi/3, 2*pi/3, 4*pi/3, 5*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\cos^2\theta = \frac{1}{2} = \left(\frac{1}{\sqrt{2}}\right)^2$, and $\cos\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
          t`So $\cos^2\theta = \cos^2\frac{\pi}{4}$.`,
          t`Both signs count: $\theta = n\pi \pm \frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q6 ii)" },
      stem: t`The general solution of $4\sin^2\theta = 1$ is $\theta =$ ______, where $n \in Z$.`,
      verify: { kind: "value", inputs: { k: "1/4" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$n\pi \pm \frac{\pi}{6}$`, correct: true, value: "{pi/6, 5*pi/6, 7*pi/6, 11*pi/6}" },
        { key: "B", text: t`$n\pi + (-1)^n\frac{\pi}{6}$`, correct: false, misconceptionId: "C04-M1", value: "{pi/6, 5*pi/6}" },
        { key: "C", text: t`$n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M4", value: "{pi/3, 2*pi/3, 4*pi/3, 5*pi/3}" },
        { key: "D", text: t`$2n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M5", value: "{pi/3, 5*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\sin^2\theta = \frac{1}{4} = \left(\frac{1}{2}\right)^2$, and $\sin\frac{\pi}{6} = \frac{1}{2}$.`,
          t`So $\sin^2\theta = \sin^2\frac{\pi}{6}$.`,
          t`Both signs count: $\theta = n\pi \pm \frac{\pi}{6}$.`,
        ],
      },
    },
  ],
};
