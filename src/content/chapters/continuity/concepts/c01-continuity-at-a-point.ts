import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`$g(x) = \frac{x^2 - 4}{x - 2}$ equals $x + 2$ for every $x \ne 2$. Can you draw its graph without lifting your pen? Which value of $g(2)$ would let you?`,
    reveal: t`No: $g(2)$ is not defined, so the line has a hole at $(2, 4)$. Setting $g(2) = 4$, the value the graph heads for, fills the hole. Then $g$ is continuous at $2$.`,
  },
  explanation: {
    intuition: [
      t`A function is **continuous** at $x = a$ when its graph runs through $x = a$ without a break.`,
      t`You could draw it there without lifting your pen.`,
      t`A **hole** is one break: $f(a)$ is not defined, so the graph has a hollow point at $a$.`,
      t`A **jump** is another: the graph arrives at different heights from the left and the right.`,
      t`A **moved point** is the third: the graph heads for one height, but $f(a)$ sits somewhere else.`,
      t`Continuity at $a$ rules out all three breaks.`,
    ],
    formal: [
      {
        title: "The three conditions",
        points: [
          t`$f$ is **continuous at** $x = a$ when three conditions all hold.`,
          t`First, $f(a)$ is defined: $a$ is in the **domain** of $f$, the set of $x$ where $f$ has a value.`,
          t`Second, $\lim_{x \to a} f(x)$ exists: the left-hand and right-hand limits are equal.`,
          t`Third, the limit equals the value: $\lim_{x \to a} f(x) = f(a)$.`,
          t`If any one fails, $f$ is **discontinuous** at $a$: not continuous there.`,
        ],
        figure: {
          alt: "The curve y = x²/4 + 1. Then the filled point (2, 2) on it, marked (a, f(a)). Then arrows along the curve close in on that point from the left and from the right. Then the point is marked limit = f(a).",
          axes: "xy",
          view: { x: [-1.5, 4.5], y: [-0.5, 5] },
          elements: [
            { kind: "curve", points: [[-1.5, 1.562], [-1.357, 1.461], [-1.215, 1.369], [-1.073, 1.288], [-0.93, 1.216], [-0.787, 1.155], [-0.645, 1.104], [-0.503, 1.063], [-0.36, 1.032], [-0.217, 1.012], [-0.075, 1.001], [0.068, 1.001], [0.21, 1.011], [0.353, 1.031], [0.495, 1.061], [0.638, 1.102], [0.78, 1.152], [0.923, 1.213], [1.065, 1.284], [1.208, 1.365], [1.35, 1.456], [1.493, 1.557], [1.635, 1.668], [1.777, 1.79], [1.92, 1.922], [2.062, 2.063], [2.205, 2.216], [2.348, 2.378], [2.49, 2.55], [2.633, 2.733], [2.775, 2.925], [2.918, 3.128], [3.06, 3.341], [3.202, 3.564], [3.345, 3.797], [3.487, 4.041], [3.63, 4.294], [3.772, 4.558], [3.915, 4.832], [4.058, 5.116], [4.2, 5.41]], step: 1 },
            { kind: "point", at: [2, 2], label: "(a, f(a))", labelAt: "se", step: 2 },
            { kind: "vector", from: [0, 1], to: [1.6, 1.64], tone: "good", step: 3 },
            { kind: "vector", from: [3.4, 3.89], to: [2.4, 2.44], tone: "good", step: 3 },
            { kind: "point", at: [2, 2], tone: "good", label: "limit = f(a)", labelAt: "nw", step: 4 },
          ],
        },
      },
      {
        title: "Substituting gives 0/0",
        points: [
          t`Take $f(x) = \frac{x^2 - 1}{x - 1}$ for $x \ne 1$.`,
          t`Putting $x = 1$ gives $\frac{0}{0}$. That is not a number, and it is not $0$.`,
          t`It doesn't say the limit fails to exist; it only says substitution can't decide.`,
          t`For $x \ne 1$, cancel $x - 1$: $f(x) = x + 1$.`,
          t`So $\lim_{x \to 1} f(x) = 2$: the graph heads for the point $(1, 2)$.`,
          t`But $f(1)$ is not defined, so the first condition fails: there is a hole at $(1, 2)$.`,
        ],
        figure: {
          alt: "The line y = x + 1 with a hollow point at (1, 2). Then the line is picked out as f(x) = x + 1. Then arrows along it close in on (1, 2) from both sides, marked limit 2. Then the hollow point is marked hole: no f(1).",
          axes: "xy",
          view: { x: [-2.5, 3.5], y: [-1, 4.5] },
          elements: [
            { kind: "curve", points: [[-2.5, -1.5], [0.5, 1.5], [3.5, 4.5]], step: 1 },
            { kind: "point", at: [1, 2], hollow: true, step: 1 },
            { kind: "curve", points: [[-2.5, -1.5], [0.5, 1.5], [3.5, 4.5]], tone: "good", step: 4 },
            { kind: "label", at: [2, 3], label: "f(x) = x + 1", labelAt: "se", tone: "good", step: 4 },
            { kind: "vector", from: [-1, 0], to: [0.7, 1.7], tone: "good", step: 5 },
            { kind: "vector", from: [3, 4], to: [1.3, 2.3], tone: "good", step: 5 },
            { kind: "label", at: [1, 2], label: "limit 2", labelAt: "se", tone: "good", step: 5 },
            { kind: "point", at: [1, 2], hollow: true, tone: "bad", label: "hole: no f(1)", labelAt: "nw", step: 6 },
          ],
        },
      },
      {
        title: "A function given in two lines",
        points: [
          t`Books often give $f$ in two lines: a formula for $x \ne a$, and a value at $a$.`,
          t`Say $f(x) = \frac{x^2 - 1}{x - 1}$ for $x \ne 1$, and $f(1) = 3$.`,
          t`The first line is used only near $1$, never at $1$: it gives the limit $2$.`,
          t`The second line alone gives the value: $f(1) = 3$ is defined.`,
          t`$2 \ne 3$: the third condition fails, so $f$ is discontinuous at $1$.`,
          t`Only $f(1) = 2$ makes $f$ continuous: for a continuous $f$, $f(a)$ is the limit.`,
        ],
        figure: {
          alt: "The line y = x + 1 with a hollow point at (1, 2), marked limit 2. Then the filled point (1, 3), marked f(1) = 3. Then a dashed gap between them. Then the filled point (1, 2), marked f(1) = 2, which fills the hole.",
          axes: "xy",
          view: { x: [-2.5, 3.5], y: [-1, 4.5] },
          elements: [
            { kind: "curve", points: [[-2.5, -1.5], [0.5, 1.5], [3.5, 4.5]], step: 2 },
            { kind: "point", at: [1, 2], hollow: true, step: 2 },
            { kind: "label", at: [1, 2], label: "limit 2", labelAt: "se", step: 3 },
            { kind: "point", at: [1, 3], label: "f(1) = 3", labelAt: "nw", step: 4 },
            { kind: "segment", from: [1, 2], to: [1, 3], dashed: true, tone: "bad", step: 5 },
            { kind: "point", at: [1, 2], tone: "good", label: "f(1) = 2", labelAt: "nw", step: 6 },
          ],
        },
      },
      {
        title: "When the limit does not exist",
        points: [
          t`The second condition needs the left-hand and right-hand limits to be equal.`,
          t`Take $f(x) = x + 1$ for $x < 0$, and $f(x) = x + 3$ for $x \ge 0$.`,
          t`From the left $f(x) \to 1$; from the right $f(x) \to 3$.`,
          t`$1 \ne 3$: the graph jumps, so $\lim_{x \to 0} f(x)$ does not exist.`,
          t`$f(0) = 3$ is defined, but that alone never makes $f$ continuous.`,
        ],
        figure: {
          alt: "The line y = x + 1 for x < 0, ending in a hollow point at (0, 1), and the line y = x + 3 for x ≥ 0, from the filled point (0, 3). Then arrows along each piece towards x = 0. Then a dashed gap from (0, 1) to (0, 3), marked jump. Then the filled point is marked f(0) = 3.",
          axes: "xy",
          view: { x: [-3.5, 2.5], y: [-1, 5] },
          elements: [
            { kind: "curve", points: [[-3.5, -2.5], [-1.75, -0.75], [0, 1]], step: 2 },
            { kind: "point", at: [0, 1], hollow: true, step: 2 },
            { kind: "curve", points: [[0, 3], [1.25, 4.25], [2.5, 5.5]], step: 2 },
            { kind: "point", at: [0, 3], step: 2 },
            { kind: "vector", from: [-2, -1], to: [-0.3, 0.7], tone: "good", step: 3 },
            { kind: "vector", from: [1.5, 4.5], to: [0.3, 3.3], tone: "good", step: 3 },
            { kind: "segment", from: [0, 1], to: [0, 3], dashed: true, tone: "bad", step: 4 },
            { kind: "label", at: [0, 2], label: "jump", labelAt: "e", tone: "bad", step: 4 },
            { kind: "label", at: [0, 3], label: "f(0) = 3", labelAt: "se", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Test whether $f$ is continuous at $x = -4$, where $f(x) = \frac{x^2 + 16x + 48}{x + 4}$ for $x \ne -4$, and $f(-4) = 8$.`,
      steps: [
        t`$f(-4) = 8$ is given, so $f$ is defined at $-4$.`,
        t`For $x \ne -4$: $x^2 + 16x + 48$ $= (x + 4)(x + 12)$, so $f(x) = x + 12$.`,
        t`So $\lim_{x \to -4} f(x) = -4 + 12 = 8$: the limit exists.`,
        t`The limit equals $f(-4) = 8$, so all three conditions hold.`,
      ],
      answer: t`$f$ is continuous at $x = -4$.`,
      figure: {
        alt: "The filled point (−4, 8), marked f(−4) = 8. Then the line y = x + 12 through it. Then arrows along the line close in on (−4, 8) from both sides, marked limit 8. Then the point turns green: the limit and the value agree.",
        axes: "xy",
        view: { x: [-8.5, 0.5], y: [3.5, 12.5] },
        elements: [
          { kind: "point", at: [-4, 8], label: "f(−4) = 8", labelAt: "nw", step: 1 },
          { kind: "curve", points: [[-8.5, 3.5], [-4, 8], [0.5, 12.5]], step: 2 },
          { kind: "vector", from: [-7, 5], to: [-4.3, 7.7], tone: "good", step: 3 },
          { kind: "vector", from: [-1, 11], to: [-3.7, 8.3], tone: "good", step: 3 },
          { kind: "label", at: [-4, 8], label: "limit 8", labelAt: "se", tone: "good", step: 3 },
          { kind: "point", at: [-4, 8], tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A graph drawn left to right. A point at (−4, 1.5) is marked no break here. Then a hollow point at (−2, 2.5), marked hole. Then at x = 0 the curve stops at the hollow point (0, 3.5) and starts again lower, at the filled point (0, 0.5), with a dashed gap marked jump. Then at x = 3 the curve has a hollow point at (3, 2), and the value sits above it at the filled point (3, 3.5), marked moved point.",
      axes: "xy",
      view: { x: [-5.5, 5.5], y: [-0.5, 5.5] },
      elements: [
        { kind: "curve", points: [[-5.5, 0.75], [-4.95, 1.025], [-4.4, 1.3], [-3.85, 1.575], [-3.3, 1.85], [-2.751, 2.125], [-2.201, 2.4], [-1.651, 2.675], [-1.101, 2.95], [-0.551, 3.225], [-0.001, 3.499]], step: 1 },
        { kind: "point", at: [0, 3.5], hollow: true, step: 1 },
        { kind: "curve", points: [[0, 0.5], [0.55, 0.775], [1.1, 1.05], [1.65, 1.325], [2.2, 1.6], [2.75, 1.875], [3.3, 2.15], [3.85, 2.425], [4.4, 2.7], [4.95, 2.975], [5.5, 3.25]], step: 1 },
        { kind: "point", at: [0, 0.5], step: 1 },
        { kind: "point", at: [-4, 1.5], tone: "good", label: "no break here", labelAt: "se", step: 2 },
        { kind: "point", at: [-2, 2.5], hollow: true, tone: "bad", label: "hole", labelAt: "nw", step: 3 },
        { kind: "segment", from: [0, 0.5], to: [0, 3.5], dashed: true, tone: "bad", step: 4 },
        { kind: "label", at: [0, 2], label: "jump", labelAt: "e", tone: "bad", step: 4 },
        { kind: "point", at: [3, 2], hollow: true, tone: "bad", step: 5 },
        { kind: "point", at: [3, 3.5], tone: "bad", label: "moved point", labelAt: "n", step: 5 },
      ],
    },
    visualSpec: t`Drag the dot $(a, f(a))$ up and down, or remove it, past a graph's hole, and watch the three conditions light up; continuity lights only when the dot fills the hole.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Checks only that $f(a)$ is defined: a value at $a$ makes $f$ continuous there.`,
      remediation: t`A value at $a$ is only the first condition. The limit must also exist and equal $f(a)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Checks only that $\lim_{x \to a} f(x)$ exists: a limit makes $f$ continuous at $a$, even with no $f(a)$.`,
      remediation: t`A limit can exist at a hole. Continuity also needs $f(a)$ to be defined and equal to the limit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Thinks $\frac{0}{0}$ on putting $x = a$ means the limit does not exist.`,
      remediation: t`$\frac{0}{0}$ only says substitution can't decide. Factorise, rationalise or use a standard limit to find the limit.`,
      fallback: { kind: "ext", topic: "limits" },
    },
    {
      id: "C01-M4",
      mistake: t`Reads $f(a)$ from the formula for $x \ne a$: its $\frac{0}{0}$ at $a$ makes $f(a)$ undefined, whatever the line for $x = a$ says.`,
      remediation: t`The formula for $x \ne a$ is never used at $a$. The value $f(a)$ comes from its own line, or from continuity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Takes $\frac{0}{0}$ to be $0$, so putting $x = a$ in the formula gives $f(a) = 0$.`,
      remediation: t`$\frac{0}{0}$ is not a number. When $f$ is continuous at $a$, $f(a)$ is the limit, found using $x \ne a$.`,
      fallback: { kind: "ext", topic: "limits" },
    },
    {
      id: "C01-M6",
      mistake: t`Inverts the limit: when the top is close to $pu$ and the bottom to $qu$, for a small $u$, takes $\frac{q}{p}$.`,
      remediation: t`Keep the top on top: if the top is close to $pu$ and the bottom to $qu$, for the same small $u$, the limit is $\frac{p}{q}$.`,
      fallback: { kind: "ext", topic: "standard limits" },
    },
  ],
  engineNotes: [
    t`C01-M1 and C01-M2 give the key when $f$ is continuous; they show on verdict items where a condition fails (M1 needs $f(a)$ given, M2 a limit that exists).`,
    t`C01-M3, C01-M4 and C01-M5 show only where putting $x = a$ in the formula gives $\frac{0}{0}$. C01-M4 gives the key when $f(a)$ is not defined; C01-M5 on a verdict item needs $f(a)$ not given.`,
    t`C01-M6 needs a limit other than $0$ and $\pm 1$. On a verdict item it shows when $f$ is continuous, or when the inverted limit equals $f(a)$; otherwise it gives the key.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Ex 8.1 Q1(iii)" },
      stem: t`$f(x) = \frac{x^2 - 9}{x - 3}$ for $x \ne 3$, and $f(3) = 8$. At $x = 3$, $f$ is`,
      verify: { kind: "value", inputs: { a: "3", c: "8" }, params: { ask: "verdict", g: "(x**2 - 9)/(x - 3)" } },
      options: [
        { key: "A", text: t`discontinuous: the limit is not $f(3)$`, correct: true, value: "limit_not_value" },
        { key: "B", text: t`continuous: $f(3)$ is defined`, correct: false, misconceptionId: "C01-M1", value: "continuous" },
        { key: "C", text: t`discontinuous: the limit does not exist`, correct: false, misconceptionId: "C01-M3", value: "no_limit" },
        { key: "D", text: t`discontinuous: $f(3)$ is not defined`, correct: false, misconceptionId: "C01-M4", value: "not_defined" },
      ],
      solution: {
        steps: [
          t`$f(3) = 8$ is given, so $f$ is defined at $3$.`,
          t`For $x \ne 3$, $\frac{x^2 - 9}{x - 3} = x + 3$, so $\lim_{x \to 3} f(x) = 6$.`,
          t`$6 \ne 8$: the limit is not $f(3)$, so $f$ is discontinuous at $x = 3$.`,
        ],
        figure: {
          alt: "The filled point (3, 8), marked f(3) = 8. Then the line y = x + 3 with a hollow point at (3, 6), marked limit 6. Then a dashed gap between (3, 6) and (3, 8).",
          axes: "xy",
          view: { x: [-1.5, 5.5], y: [-0.5, 9.5] },
          elements: [
            { kind: "point", at: [3, 8], label: "f(3) = 8", labelAt: "nw", step: 1 },
            { kind: "curve", points: [[-1.5, 1.5], [2, 5], [5.5, 8.5]], step: 2 },
            { kind: "point", at: [3, 6], hollow: true, label: "limit 6", labelAt: "se", step: 2 },
            { kind: "segment", from: [3, 6], to: [3, 8], dashed: true, tone: "bad", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Misc I Q1" },
      stem: t`$f(x) = \frac{2^{\cot x} - 1}{\pi - 2x}$ for $x \ne \frac{\pi}{2}$, and $f(\frac{\pi}{2}) = \log \sqrt{2}$. At $x = \frac{\pi}{2}$, $f$ is`,
      verify: { kind: "value", inputs: { a: "pi/2", c: "log(sqrt(2))" }, params: { ask: "verdict", g: "(2**cot(x) - 1)/(pi - 2*x)" } },
      options: [
        { key: "A", text: t`continuous: the limit equals $f(\frac{\pi}{2})$`, correct: true, value: "continuous" },
        { key: "B", text: t`discontinuous: the limit does not exist`, correct: false, misconceptionId: "C01-M3", value: "no_limit" },
        { key: "C", text: t`discontinuous: $f(\frac{\pi}{2})$ is not defined`, correct: false, misconceptionId: "C01-M4", value: "not_defined" },
        { key: "D", text: t`discontinuous: the limit is not $f(\frac{\pi}{2})$`, correct: false, misconceptionId: "C01-M6", value: "limit_not_value" },
      ],
      solution: {
        steps: [
          t`$f(\frac{\pi}{2}) = \log \sqrt{2}$ is given.`,
          t`Put $x = \frac{\pi}{2} + h$: $\cot x = -\tan h$, and $\pi - 2x = -2h$.`,
          t`$\frac{2^{-\tan h} - 1}{-\tan h} \to \log 2$ and $\frac{\tan h}{h} \to 1$, so the limit is $\frac{\log 2}{2}$.`,
          t`$\frac{\log 2}{2} = \log \sqrt{2} = f(\frac{\pi}{2})$, so $f$ is continuous at $x = \frac{\pi}{2}$.`,
        ],
        figure: {
          alt: "The filled point at x = π/2, height log √2, about 0.35, marked f(π/2) = log √2. Then the graph of f, a gently falling curve, which passes through that point. Then the point turns green: the limit is f(π/2).",
          axes: "xy",
          view: { x: [0.3, 2.9], y: [-0.3, 1.3] },
          elements: [
            { kind: "point", at: [1.571, 0.347], label: "f(π/2) = log √2", labelAt: "s", step: 1 },
            { kind: "curve", points: [[0.6, 0.904], [0.65, 0.808], [0.7, 0.733], [0.75, 0.673], [0.8, 0.623], [0.85, 0.582], [0.9, 0.547], [0.95, 0.517], [1, 0.491], [1.05, 0.469], [1.1, 0.449], [1.15, 0.432], [1.2, 0.417], [1.25, 0.404], [1.3, 0.392], [1.35, 0.381], [1.4, 0.372], [1.45, 0.363], [1.5, 0.356], [1.55, 0.349], [1.6, 0.343], [1.65, 0.338], [1.7, 0.333], [1.75, 0.329], [1.8, 0.326], [1.85, 0.323], [1.9, 0.32], [1.95, 0.318], [2, 0.317], [2.05, 0.316], [2.1, 0.315], [2.15, 0.315], [2.2, 0.315], [2.25, 0.315], [2.3, 0.317], [2.35, 0.318], [2.4, 0.32], [2.45, 0.322], [2.5, 0.325], [2.55, 0.329], [2.6, 0.332], [2.65, 0.336], [2.7, 0.341]], step: 3 },
            { kind: "point", at: [1.571, 0.347], tone: "good", step: 4 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Ex 8.1 Q2(ii)" },
      stem: t`$f(x) = \frac{x^2 + 18x - 19}{x - 1}$, with domain $\mathbb{R} - \{1\}$. At $x = 1$, $f$ is`,
      verify: { kind: "value", inputs: { a: "1" }, params: { ask: "verdict", g: "(x**2 + 18*x - 19)/(x - 1)" } },
      options: [
        { key: "A", text: t`discontinuous: the limit does not exist`, correct: false, misconceptionId: "C01-M3", value: "no_limit" },
        { key: "B", text: t`discontinuous: the limit is not $f(1)$`, correct: false, misconceptionId: "C01-M5", value: "limit_not_value" },
        { key: "C", text: t`discontinuous: $f(1)$ is not defined`, correct: true, value: "not_defined" },
        { key: "D", text: t`continuous: the limit exists`, correct: false, misconceptionId: "C01-M2", value: "continuous" },
      ],
      solution: {
        steps: [
          t`The domain leaves out $1$, so $f(1)$ is not defined.`,
          t`The limit still exists: $\frac{(x - 1)(x + 19)}{x - 1} = x + 19 \to 20$.`,
          t`But with no $f(1)$ the first condition fails, so $f$ is discontinuous at $x = 1$.`,
        ],
        figure: {
          alt: "A hollow point at (1, 20), marked no f(1). Then the line y = x + 19 through it, marked limit 20 at the hollow point.",
          axes: "xy",
          view: { x: [-2, 4], y: [16.5, 22.5] },
          elements: [
            { kind: "point", at: [1, 20], hollow: true, tone: "bad", label: "no f(1)", labelAt: "nw", step: 1 },
            { kind: "curve", points: [[-2, 17], [1, 20], [4, 23]], step: 2 },
            { kind: "label", at: [1, 20], label: "limit 20", labelAt: "se", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Ex 8.1 Q8(i)" },
      stem: t`$f(x) = \frac{\sqrt{3} - \tan x}{\pi - 3x}$ for $x \ne \frac{\pi}{3}$, and $f(\frac{\pi}{3}) = \frac{3}{4}$. At $x = \frac{\pi}{3}$, $f$ is`,
      verify: { kind: "value", inputs: { a: "pi/3", c: "3/4" }, params: { ask: "verdict", g: "(sqrt(3) - tan(x))/(pi - 3*x)" } },
      options: [
        { key: "A", text: t`discontinuous: the limit is not $f(\frac{\pi}{3})$`, correct: true, value: "limit_not_value" },
        { key: "B", text: t`discontinuous: the limit does not exist`, correct: false, misconceptionId: "C01-M3", value: "no_limit" },
        { key: "C", text: t`discontinuous: $f(\frac{\pi}{3})$ is not defined`, correct: false, misconceptionId: "C01-M4", value: "not_defined" },
        { key: "D", text: t`continuous: the limit equals $f(\frac{\pi}{3})$`, correct: false, misconceptionId: "C01-M6", value: "continuous" },
      ],
      solution: {
        steps: [
          t`$f(\frac{\pi}{3}) = \frac{3}{4}$ is given.`,
          t`Put $x = \frac{\pi}{3} + h$. Then $\pi - 3x = -3h$, and $\sqrt{3} - \tan x$ $= \frac{-4 \tan h}{1 - \sqrt{3} \tan h}$.`,
          t`So $f(x) = \frac{4}{3} \cdot \frac{\tan h}{h} \cdot \frac{1}{1 - \sqrt{3} \tan h}$ $\to \frac{4}{3}$.`,
          t`$\frac{4}{3} \ne \frac{3}{4}$: the limit is not $f(\frac{\pi}{3})$, so $f$ is discontinuous there.`,
        ],
        figure: {
          alt: "The filled point at x = π/3, height 3/4, marked f(π/3) = 3/4. Then the graph of f, a rising curve, with a hollow point at x = π/3, height 4/3, marked limit 4/3. Then a dashed gap between the two points.",
          axes: "xy",
          view: { x: [0.2, 1.6], y: [-0.2, 3.3] },
          elements: [
            { kind: "point", at: [1.047, 0.75], label: "f(π/3) = 3/4", labelAt: "se", step: 1 },
            { kind: "curve", points: [[0.3, 0.635], [0.327, 0.645], [0.354, 0.655], [0.381, 0.666], [0.408, 0.678], [0.435, 0.69], [0.462, 0.703], [0.489, 0.717], [0.516, 0.731], [0.543, 0.746], [0.57, 0.762], [0.597, 0.779], [0.624, 0.797], [0.651, 0.816], [0.678, 0.837], [0.705, 0.858], [0.732, 0.881], [0.759, 0.906], [0.786, 0.933], [0.813, 0.961], [0.84, 0.992], [0.867, 1.025], [0.894, 1.06], [0.921, 1.099], [0.948, 1.141], [0.975, 1.187], [1.002, 1.237], [1.029, 1.293], [1.056, 1.354], [1.083, 1.422], [1.11, 1.498], [1.137, 1.584], [1.164, 1.681], [1.191, 1.792], [1.218, 1.92], [1.245, 2.069], [1.272, 2.246], [1.299, 2.457], [1.326, 2.715], [1.353, 3.037], [1.38, 3.451]], step: 3 },
            { kind: "point", at: [1.047, 1.333], hollow: true, label: "limit 4/3", labelAt: "nw", step: 3 },
            { kind: "segment", from: [1.047, 0.75], to: [1.047, 1.333], dashed: true, tone: "bad", step: 4 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Misc I Q2" },
      stem: t`$f(x) = \frac{1 - \sqrt{2} \sin x}{\pi - 4x}$ for $x \ne \frac{\pi}{4}$ is continuous at $x = \frac{\pi}{4}$. Then $f(\frac{\pi}{4})$ is`,
      verify: { kind: "value", inputs: { a: "pi/4" }, params: { ask: "value", g: "(1 - sqrt(2)*sin(x))/(pi - 4*x)" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
        { key: "B", text: t`no number, as the limit does not exist`, correct: false, misconceptionId: "C01-M3", value: "no_limit" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C01-M5", value: "0" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C01-M6", value: "4" },
      ],
      solution: {
        steps: [
          t`Continuity at $\frac{\pi}{4}$ means $f(\frac{\pi}{4})$ is the limit there.`,
          t`Put $x = \frac{\pi}{4} + h$: $\sqrt{2} \sin x = \cos h + \sin h$, and $\pi - 4x = -4h$.`,
          t`$\frac{1 - \cos h - \sin h}{-4h} \to \frac{0 - 1}{-4}$, as $\frac{1 - \cos h}{h} \to 0$ and $\frac{\sin h}{h} \to 1$.`,
          t`So $f(\frac{\pi}{4}) = \frac{1}{4}$.`,
        ],
        figure: {
          alt: "The graph of f, a gently falling curve, with a hollow point at x = π/4, height 1/4. Then the hole is filled by the point (π/4, 1/4), marked f(π/4) = 1/4.",
          axes: "xy",
          view: { x: [-0.4, 2], y: [-0.4, 0.8] },
          elements: [
            { kind: "curve", points: [[-0.3, 0.327], [-0.25, 0.326], [-0.2, 0.325], [-0.15, 0.324], [-0.1, 0.322], [-0.05, 0.32], [0, 0.318], [0.05, 0.316], [0.1, 0.313], [0.15, 0.31], [0.2, 0.307], [0.25, 0.304], [0.3, 0.3], [0.35, 0.296], [0.4, 0.291], [0.45, 0.287], [0.5, 0.282], [0.55, 0.277], [0.6, 0.272], [0.65, 0.266], [0.7, 0.26], [0.75, 0.254], [0.8, 0.248], [0.85, 0.242], [0.9, 0.235], [0.95, 0.228], [1, 0.221], [1.05, 0.214], [1.1, 0.207], [1.15, 0.199], [1.2, 0.192], [1.25, 0.184], [1.3, 0.176], [1.35, 0.168], [1.4, 0.16], [1.45, 0.152], [1.5, 0.144], [1.55, 0.135], [1.6, 0.127], [1.65, 0.118], [1.7, 0.11], [1.75, 0.101], [1.8, 0.093], [1.85, 0.084], [1.9, 0.076]], step: 3 },
            { kind: "point", at: [0.785, 0.25], hollow: true, step: 3 },
            { kind: "point", at: [0.785, 0.25], tone: "good", label: "f(π/4) = 1/4", labelAt: "ne", step: 4 },
          ],
        },
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Misc I Q6" },
      stem: t`$f(x) = \frac{(16^x - 1)(9^x - 1)}{(27^x - 1)(32^x - 1)}$ for $x \ne 0$, and $f(0) = k$. If $f$ is continuous at $x = 0$, then $k$ is`,
      verify: { kind: "value", inputs: { a: "0" }, params: { ask: "value", g: "(16**x - 1)*(9**x - 1)/((27**x - 1)*(32**x - 1))" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C01-M5", value: "0" },
        { key: "B", text: t`$\frac{15}{8}$`, correct: false, misconceptionId: "C01-M6", value: "15/8" },
        { key: "C", text: t`$\frac{8}{15}$`, correct: true, value: "8/15" },
        { key: "D", text: t`not defined, as $x = 0$ gives $\frac{0}{0}$`, correct: false, misconceptionId: "C01-M4", value: "not_defined" },
      ],
      solution: {
        steps: [
          t`Continuity at $0$ means $k = \lim_{x \to 0} f(x)$.`,
          t`Divide each bracket by $x$: $\frac{a^x - 1}{x} \to \log a$.`,
          t`$k = \frac{\log 16 \cdot \log 9}{\log 27 \cdot \log 32}$ $= \frac{4 \log 2 \cdot 2 \log 3}{3 \log 3 \cdot 5 \log 2}$.`,
          t`So $k = \frac{8}{15}$.`,
        ],
        figure: {
          alt: "The graph of f, a falling curve, with a hollow point at (0, 8/15). Then the hole is filled by the point (0, 8/15), marked k = 8/15.",
          axes: "xy",
          view: { x: [-1.2, 1.2], y: [-0.3, 1.2] },
          elements: [
            { kind: "curve", points: [[-1, 0.893], [-0.951, 0.883], [-0.902, 0.873], [-0.854, 0.861], [-0.805, 0.849], [-0.756, 0.835], [-0.707, 0.821], [-0.659, 0.806], [-0.61, 0.791], [-0.561, 0.774], [-0.512, 0.757], [-0.463, 0.738], [-0.415, 0.719], [-0.366, 0.699], [-0.317, 0.679], [-0.268, 0.658], [-0.22, 0.636], [-0.171, 0.614], [-0.122, 0.591], [-0.073, 0.568], [-0.024, 0.545], [0.024, 0.522], [0.073, 0.498], [0.122, 0.475], [0.171, 0.452], [0.22, 0.429], [0.268, 0.407], [0.317, 0.385], [0.366, 0.363], [0.415, 0.342], [0.463, 0.322], [0.512, 0.302], [0.561, 0.283], [0.61, 0.265], [0.659, 0.248], [0.707, 0.231], [0.756, 0.216], [0.805, 0.201], [0.854, 0.187], [0.902, 0.173], [0.951, 0.161], [1, 0.149]], step: 3 },
            { kind: "point", at: [0, 0.533], hollow: true, step: 3 },
            { kind: "point", at: [0, 0.533], tone: "good", label: "k = 8/15", labelAt: "ne", step: 4 },
          ],
        },
      },
    },
  ],
};
