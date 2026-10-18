import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$\cos\theta = \frac{1}{2}$ when $\theta = \frac{\pi}{3}$. Name a negative angle, and two angles beyond $2\pi$, where it also holds.`,
    reveal: t`$-\frac{\pi}{3}$ works, since $\cos(-\theta) = \cos\theta$. Adding $2\pi$ to each gives $\frac{5\pi}{3}$ and $\frac{7\pi}{3}$; adding $4\pi$ to $-\frac{\pi}{3}$ gives $\frac{11\pi}{3}$. Every answer is $2n\pi \pm \frac{\pi}{3}$ for some integer $n$.`,
  },
  explanation: {
    intuition: [
      t`A **general solution** gives every angle that solves an equation, using an integer $n$.`,
      t`Cosine repeats every full turn: $\cos(\theta + 2\pi) = \cos\theta$.`,
      t`Cosine is even: $\cos(-\alpha) = \cos\alpha$, so $\alpha$ and $-\alpha$ both work.`,
      t`So $\cos\theta = \cos\alpha$ gives $\theta = 2n\pi \pm \alpha$.`,
      t`Tangent repeats every half turn: $\tan(\theta + \pi) = \tan\theta$.`,
      t`So $\tan\theta = \tan\alpha$ gives $\theta = n\pi + \alpha$, with no $\pm$.`,
    ],
    formal: [
      {
        title: "Cosine: two families",
        points: [
          t`On the **unit circle** (radius $1$, centre $O$), $\cos\theta$ is the $x$-coordinate of the point at angle $\theta$.`,
          t`The vertical line $x = \cos\alpha$ meets the circle twice: at angle $\alpha$ and at angle $-\alpha$.`,
          t`Each extra full turn of $2\pi$ lands on the same two points.`,
          t`So $\theta = 2n\pi + \alpha$ or $\theta = 2n\pi - \alpha$, where $n \in Z$.`,
          t`In short, $\cos\theta = \cos\alpha$ gives $\theta = 2n\pi \pm \alpha$.`,
          t`Take $\alpha$ from $0$ to $\pi$: a negative value needs an obtuse $\alpha$, from $\cos(\pi - A) = -\cos A$.`,
        ],
        figure: {
          alt: "The unit circle with centre O. The arm at angle α ends at a point in the first quadrant. Then the dashed vertical line x = cos α meets the circle again below the axis, at the point at angle −α.",
          axes: "xy",
          view: { x: [-1.7, 1.7], y: [-1.7, 1.7] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [0.5, 0.866], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 60, step: 1 },
            { kind: "point", at: [0.5, 0.866], label: "α", labelAt: "ne", step: 1 },
            { kind: "line", through: [[0.5, -1], [0.5, 1]], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [0.5, 1.35], label: "x = cos α", labelAt: "e", tone: "muted", step: 2 },
            { kind: "segment", from: [0, 0], to: [0.5, -0.866], tone: "good", step: 2 },
            { kind: "angle", at: [0, 0], from: -60, to: 0, tone: "good", step: 2 },
            { kind: "point", at: [0.5, -0.866], label: "−α", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Tangent: one family",
        points: [
          t`$\tan\theta$ is the slope of the arm from $O$ to the point at angle $\theta$.`,
          t`The line through $O$ with that slope meets the circle twice: at $\alpha$ and at $\pi + \alpha$.`,
          t`These are half a turn apart, so the solutions repeat every $\pi$.`,
          t`So $\tan\theta = \tan\alpha$ gives $\theta = n\pi + \alpha$, where $n \in Z$.`,
          t`No $\pm$ here: $\tan(-\alpha) = -\tan\alpha$, not $\tan\alpha$.`,
          t`Example: $\tan\theta = -\sqrt{3} = \tan\frac{2\pi}{3}$, so $\theta = n\pi + \frac{2\pi}{3}$.`,
        ],
        figure: {
          alt: "The unit circle with centre O. The arm at angle α = 2π/3 ends at a point in the second quadrant. Then the line through O along that arm meets the circle again in the fourth quadrant, at angle π + α = 5π/3.",
          axes: "xy",
          view: { x: [-1.7, 1.7], y: [-1.7, 1.7] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [-0.5, 0.866], step: 1 },
            { kind: "point", at: [-0.5, 0.866], label: "α = 2π/3", labelAt: "nw", step: 1 },
            { kind: "line", through: [[-0.5, 0.866], [0.5, -0.866]], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [0.5, -0.866], label: "π + α = 5π/3", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Reciprocals and multiple angles",
        points: [
          t`Turn $\sec$ into $\cos$ and $\cot$ into $\tan$ first: $\sec\theta = k$ means $\cos\theta = \frac{1}{k}$.`,
          t`For $\cos m\theta = \cos\alpha$, solve for $m\theta$ first: $m\theta = 2n\pi \pm \alpha$.`,
          t`Then divide **every** term by $m$: $\theta = \frac{2n\pi}{m} \pm \frac{\alpha}{m}$.`,
          t`Likewise $\tan m\theta = \tan\alpha$ gives $\theta = \frac{n\pi}{m} + \frac{\alpha}{m}$.`,
          t`One answer can look different: $n\pi - \frac{\pi}{6}$ and $n\pi + \frac{5\pi}{6}$ give the same angles.`,
          t`So compare two forms by listing a few of their angles, not by their look.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the general solution of $\cos 3\theta = -\frac{\sqrt{3}}{2}$.`,
      steps: [
        t`$\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$ and $\cos(\pi - A) = -\cos A$, so $-\frac{\sqrt{3}}{2} = \cos\frac{5\pi}{6}$.`,
        t`The equation is $\cos 3\theta = \cos\frac{5\pi}{6}$, so $3\theta = 2n\pi \pm \frac{5\pi}{6}$.`,
        t`Divide every term by $3$: $\theta = \frac{2n\pi}{3} \pm \frac{5\pi}{18}$.`,
        t`Check $n = 0$: $3 \cdot \frac{5\pi}{18} = \frac{5\pi}{6}$, and $\cos\frac{5\pi}{6} = -\frac{\sqrt{3}}{2}$.`,
      ],
      answer: t`$\theta = \frac{2n\pi}{3} \pm \frac{5\pi}{18}$, where $n \in Z$.`,
    },
    visualSpec: t`Drag $\alpha$ round the unit circle: the line $x = \cos\alpha$ marks the two cosine solutions, the line through $O$ the two tangent solutions, and extra turns stack copies of them.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`For $\cos\theta = \cos\alpha$, keeps only $\theta = 2n\pi + \alpha$ and drops $-\alpha$`,
      remediation: t`Cosine is even, $\cos(-\alpha) = \cos\alpha$, so $-\alpha$ is a solution too. The general solution is $\theta = 2n\pi \pm \alpha$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios of negative angles" },
    },
    {
      id: "C03-M2",
      mistake: t`Carries cosine's $\pm$ over to tangent: $\theta = n\pi \pm \alpha$`,
      remediation: t`$\tan(-\alpha) = -\tan\alpha$, so $-\alpha$ does not solve $\tan\theta = \tan\alpha$. For tangent the general solution is $\theta = n\pi + \alpha$ only.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Swaps the periods: $n\pi \pm \alpha$ for cosine, $2n\pi + \alpha$ for tangent`,
      remediation: t`Cosine repeats every $2\pi$ and tangent every $\pi$. So $\cos\theta = \cos\alpha$ gives $2n\pi \pm \alpha$, and $\tan\theta = \tan\alpha$ gives $n\pi + \alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Uses the sine form $\theta = n\pi + (-1)^n\alpha$ for cosine`,
      remediation: t`$n\pi + (-1)^n\alpha$ is the general solution for sine only. For $\cos\theta = \cos\alpha$ it is $\theta = 2n\pi \pm \alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Ignores the sign of a negative value and uses the acute angle",
      remediation: t`For a negative value, $\alpha$ is obtuse: use $\cos(\pi - A) = -\cos A$ or $\tan(\pi - A) = -\tan A$ to find it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: t`For $\cos m\theta$ or $\tan m\theta$, divides only $\alpha$ by $m$ and leaves $2n\pi$ or $n\pi$ as it is`,
      remediation: t`Solve for $m\theta$ first, then divide every term by $m$: $m\theta = n\pi + \alpha$ gives $\theta = \frac{n\pi}{m} + \frac{\alpha}{m}$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
  ],
  engineNotes: [
    t`Options compare by their solution sets over $0 \le \theta < 4\pi$, since one general solution has many forms.`,
    "M1 and M4 apply to cosine only, M2 to tangent only, M5 to negative values only, M6 to multiple angles only.",
    t`M3 gives the key for $\cos\theta = 0$ and M2 for $\tan\theta = 0$: draw diagnosing items from other values.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G2 ii)" },
      stem: t`The general solution of $\cos\theta = -\frac{1}{2}$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { k: "-1/2" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$\theta = n\pi + (-1)^n\frac{2\pi}{3}$`, correct: false, misconceptionId: "C03-M4", value: "{pi/3, 2*pi/3, 7*pi/3, 8*pi/3}" },
        { key: "B", text: t`$\theta = 2n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C03-M5", value: "{pi/3, 5*pi/3, 7*pi/3, 11*pi/3}" },
        { key: "C", text: t`$\theta = 2n\pi \pm \frac{2\pi}{3}$`, correct: true, value: "{2*pi/3, 4*pi/3, 8*pi/3, 10*pi/3}" },
        { key: "D", text: t`$\theta = 2n\pi + \frac{2\pi}{3}$`, correct: false, misconceptionId: "C03-M1", value: "{2*pi/3, 8*pi/3}" },
      ],
      solution: {
        steps: [
          t`$\cos\frac{\pi}{3} = \frac{1}{2}$ and $\cos(\pi - A) = -\cos A$, so $-\frac{1}{2} = \cos\frac{2\pi}{3}$.`,
          t`$\cos\theta = \cos\alpha$ gives $\theta = 2n\pi \pm \alpha$.`,
          t`So $\theta = 2n\pi \pm \frac{2\pi}{3}$, where $n \in Z$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q4 iii)" },
      stem: t`The general solution of $\tan\theta = -1$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { k: "-1" }, params: { f: "tan" } },
      options: [
        { key: "A", text: t`$\theta = 2n\pi + \frac{3\pi}{4}$`, correct: false, misconceptionId: "C03-M3", value: "{3*pi/4, 11*pi/4}" },
        { key: "B", text: t`$\theta = n\pi + \frac{\pi}{4}$`, correct: false, misconceptionId: "C03-M5", value: "{pi/4, 5*pi/4, 9*pi/4, 13*pi/4}" },
        { key: "C", text: t`$\theta = n\pi + \frac{3\pi}{4}$`, correct: true, value: "{3*pi/4, 7*pi/4, 11*pi/4, 15*pi/4}" },
        { key: "D", text: t`$\theta = n\pi \pm \frac{3\pi}{4}$`, correct: false, misconceptionId: "C03-M2", value: "{pi/4, 3*pi/4, 5*pi/4, 7*pi/4, 9*pi/4, 11*pi/4, 13*pi/4, 15*pi/4}" },
      ],
      solution: {
        steps: [
          t`$\tan\frac{\pi}{4} = 1$ and $\tan(\pi - A) = -\tan A$, so $-1 = \tan\frac{3\pi}{4}$.`,
          t`$\tan\theta = \tan\alpha$ gives $\theta = n\pi + \alpha$: tangent repeats every $\pi$, with no $\pm$.`,
          t`So $\theta = n\pi + \frac{3\pi}{4}$, where $n \in Z$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.3" },
      stem: t`The general solution of $\sec x = \sqrt{2}$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { k: "sqrt(2)" }, params: { f: "sec" } },
      options: [
        { key: "A", text: t`$x = 2n\pi + \frac{\pi}{4}$`, correct: false, misconceptionId: "C03-M1", value: "{pi/4, 9*pi/4}" },
        { key: "B", text: t`$x = n\pi \pm \frac{\pi}{4}$`, correct: false, misconceptionId: "C03-M3", value: "{pi/4, 3*pi/4, 5*pi/4, 7*pi/4, 9*pi/4, 11*pi/4, 13*pi/4, 15*pi/4}" },
        { key: "C", text: t`$x = n\pi + (-1)^n\frac{\pi}{4}$`, correct: false, misconceptionId: "C03-M4", value: "{pi/4, 3*pi/4, 9*pi/4, 11*pi/4}" },
        { key: "D", text: t`$x = 2n\pi \pm \frac{\pi}{4}$`, correct: true, value: "{pi/4, 7*pi/4, 9*pi/4, 15*pi/4}" },
      ],
      solution: {
        steps: [
          t`Turn it over: $\cos x = \frac{1}{\sqrt{2}} = \cos\frac{\pi}{4}$.`,
          t`$\cos x = \cos\alpha$ gives $x = 2n\pi \pm \alpha$.`,
          t`So $x = 2n\pi \pm \frac{\pi}{4}$, where $n \in Z$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G4 i)" },
      stem: t`The general solution of $\cos 2\theta = -\frac{1}{\sqrt{2}}$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { k: "-1/sqrt(2)", m: "2" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$\theta = \frac{n\pi}{2} \pm \frac{3\pi}{8}$`, correct: false, misconceptionId: "C03-M3", value: "{pi/8, 3*pi/8, 5*pi/8, 7*pi/8, 9*pi/8, 11*pi/8, 13*pi/8, 15*pi/8, 17*pi/8, 19*pi/8, 21*pi/8, 23*pi/8, 25*pi/8, 27*pi/8, 29*pi/8, 31*pi/8}" },
        { key: "B", text: t`$\theta = n\pi + \frac{3\pi}{8}$`, correct: false, misconceptionId: "C03-M1", value: "{3*pi/8, 11*pi/8, 19*pi/8, 27*pi/8}" },
        { key: "C", text: t`$\theta = n\pi \pm \frac{3\pi}{8}$`, correct: true, value: "{3*pi/8, 5*pi/8, 11*pi/8, 13*pi/8, 19*pi/8, 21*pi/8, 27*pi/8, 29*pi/8}" },
        { key: "D", text: t`$\theta = 2n\pi \pm \frac{3\pi}{8}$`, correct: false, misconceptionId: "C03-M6", value: "{3*pi/8, 13*pi/8, 19*pi/8, 29*pi/8}" },
      ],
      solution: {
        steps: [
          t`$\cos\frac{\pi}{4} = \frac{1}{\sqrt{2}}$ and $\cos(\pi - A) = -\cos A$, so $-\frac{1}{\sqrt{2}} = \cos\frac{3\pi}{4}$.`,
          t`So $2\theta = 2n\pi \pm \frac{3\pi}{4}$.`,
          t`Divide every term by $2$: $\theta = n\pi \pm \frac{3\pi}{8}$, where $n \in Z$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q5 iii)" },
      stem: t`The general solution of $\cot 4\theta = -1$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { k: "-1", m: "4" }, params: { f: "cot" } },
      options: [
        { key: "A", text: t`$\theta = \frac{n\pi}{4} + \frac{3\pi}{16}$`, correct: true, value: "{3*pi/16, 7*pi/16, 11*pi/16, 15*pi/16, 19*pi/16, 23*pi/16, 27*pi/16, 31*pi/16, 35*pi/16, 39*pi/16, 43*pi/16, 47*pi/16, 51*pi/16, 55*pi/16, 59*pi/16, 63*pi/16}" },
        { key: "B", text: t`$\theta = n\pi + \frac{3\pi}{16}$`, correct: false, misconceptionId: "C03-M6", value: "{3*pi/16, 19*pi/16, 35*pi/16, 51*pi/16}" },
        { key: "C", text: t`$\theta = \frac{n\pi}{4} \pm \frac{3\pi}{16}$`, correct: false, misconceptionId: "C03-M2", value: "{pi/16, 3*pi/16, 5*pi/16, 7*pi/16, 9*pi/16, 11*pi/16, 13*pi/16, 15*pi/16, 17*pi/16, 19*pi/16, 21*pi/16, 23*pi/16, 25*pi/16, 27*pi/16, 29*pi/16, 31*pi/16, 33*pi/16, 35*pi/16, 37*pi/16, 39*pi/16, 41*pi/16, 43*pi/16, 45*pi/16, 47*pi/16, 49*pi/16, 51*pi/16, 53*pi/16, 55*pi/16, 57*pi/16, 59*pi/16, 61*pi/16, 63*pi/16}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{4} + \frac{\pi}{16}$`, correct: false, misconceptionId: "C03-M5", value: "{pi/16, 5*pi/16, 9*pi/16, 13*pi/16, 17*pi/16, 21*pi/16, 25*pi/16, 29*pi/16, 33*pi/16, 37*pi/16, 41*pi/16, 45*pi/16, 49*pi/16, 53*pi/16, 57*pi/16, 61*pi/16}" },
      ],
      solution: {
        steps: [
          t`Turn it over: $\tan 4\theta = -1 = \tan\frac{3\pi}{4}$.`,
          t`So $4\theta = n\pi + \frac{3\pi}{4}$.`,
          t`Divide every term by $4$: $\theta = \frac{n\pi}{4} + \frac{3\pi}{16}$, where $n \in Z$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q5 ii)" },
      stem: t`The general solution of $\tan\frac{2\theta}{3} = \sqrt{3}$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { k: "sqrt(3)", m: "2/3" }, params: { f: "tan" } },
      options: [
        { key: "A", text: t`$\theta = \frac{3n\pi}{2} + \frac{\pi}{2}$`, correct: true, value: "{pi/2, 2*pi, 7*pi/2}" },
        { key: "B", text: t`$\theta = n\pi + \frac{\pi}{2}$`, correct: false, misconceptionId: "C03-M6", value: "{pi/2, 3*pi/2, 5*pi/2, 7*pi/2}" },
        { key: "C", text: t`$\theta = \frac{3n\pi}{2} \pm \frac{\pi}{2}$`, correct: false, misconceptionId: "C03-M2", value: "{pi/2, pi, 2*pi, 5*pi/2, 7*pi/2}" },
        { key: "D", text: t`$\theta = 3n\pi + \frac{\pi}{2}$`, correct: false, misconceptionId: "C03-M3", value: "{pi/2, 7*pi/2}" },
      ],
      solution: {
        steps: [
          t`$\sqrt{3} = \tan\frac{\pi}{3}$, so $\frac{2\theta}{3} = n\pi + \frac{\pi}{3}$.`,
          t`Multiply every term by $\frac{3}{2}$: $\theta = \frac{3n\pi}{2} + \frac{\pi}{2}$, where $n \in Z$.`,
        ],
      },
    },
  ],
};
