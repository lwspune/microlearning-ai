import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`Solve $\sin^{-1}x = \frac{2\pi}{3}$. Taking the sine of both sides gives $x = \sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2}$. **But $\sin^{-1}\frac{\sqrt{3}}{2} = \frac{\pi}{3}$, not $\frac{2\pi}{3}$. What went wrong?**`,
    reveal: t`$\sin^{-1}x$ always lies in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, so it is never $\frac{2\pi}{3}$: the equation has no solution. Taking the sine hid this, because $\frac{\pi}{3}$ and $\frac{2\pi}{3}$ have the same sine. So every root must be checked.`,
  },
  explanation: {
    intuition: [
      t`In an **equation in inverse functions**, the unknown sits inside $\sin^{-1}$, $\cos^{-1}$ or $\tan^{-1}$.`,
      t`First **combine** the inverse terms into one, using the properties you know.`,
      t`Then **take the ratio** of both sides: apply $\tan$ (or $\sin$, $\cos$) to get an ordinary equation in $x$.`,
      t`Solve that equation; it is often a quadratic.`,
      t`Different angles can share a tangent, so this step can bring in roots that don't belong.`,
      t`So check every root, and keep only those whose angles fit the principal ranges.`,
    ],
    formal: [
      {
        title: "Combine, then take tan",
        points: [
          t`Take $\tan^{-1}(x + 1) + \tan^{-1}(x - 1)$ $= \tan^{-1}\frac{8}{31}$.`,
          t`**Combine** with $\tan^{-1}a + \tan^{-1}b$ $= \tan^{-1}\frac{a + b}{1 - ab}$: here $a + b = 2x$, $1 - ab = 2 - x^2$.`,
          t`So the left side becomes $\tan^{-1}\frac{2x}{2 - x^2}$.`,
          t`**Take the ratio**: apply $\tan$ to both sides, since $\tan(\tan^{-1}u) = u$.`,
          t`$\frac{2x}{2 - x^2} = \frac{8}{31}$ gives $4x^2 + 31x - 8 = 0$.`,
          t`So $(4x - 1)(x + 8) = 0$. The **candidates**, answers still to be checked, are $x = \frac{1}{4}$ and $x = -8$.`,
        ],
      },
      {
        title: "Check every root",
        points: [
          t`Taking $\tan$ only shows that the two sides have the same tangent.`,
          t`$\tan$ repeats every $\pi$, so the left side might be $\tan^{-1}\frac{8}{31} - \pi$ instead.`,
          t`$x = \frac{1}{4}$: the left side meets the right side itself, so it is a solution.`,
          t`$x = -8$: $\tan^{-1}(-7) + \tan^{-1}(-9)$ is negative, so it lands on the lower line.`,
          t`Reject $x = -8$: the only solution is $x = \frac{1}{4}$.`,
          t`Reject a root only when it fails the original equation, never just for being negative.`,
        ],
        figure: {
          alt: "The graph of y = tan⁻¹(x + 1) + tan⁻¹(x − 1), rising from −π to π. A dashed line at y = tan⁻¹(8/31), just above the x-axis, meets it at x = 1/4, marked as correct. A second dashed line, π lower, meets it at x = −8, marked as wrong: there the left side is tan⁻¹(8/31) − π, which has the same tangent but is a different angle.",
          axes: "xy",
          view: { x: [-10, 4], y: [-3.6, 3.6] },
          elements: [
            { kind: "curve", points: [[-10, -2.94], [-9.9, -2.938], [-9.8, -2.936], [-9.7, -2.934], [-9.6, -2.932], [-9.5, -2.93], [-9.4, -2.927], [-9.3, -2.925], [-9.2, -2.923], [-9.1, -2.92], [-9, -2.918], [-8.9, -2.915], [-8.8, -2.912], [-8.7, -2.91], [-8.6, -2.907], [-8.5, -2.904], [-8.4, -2.901], [-8.3, -2.898], [-8.2, -2.895], [-8.1, -2.892], [-8, -2.889], [-7.9, -2.886], [-7.8, -2.882], [-7.7, -2.879], [-7.6, -2.875], [-7.5, -2.872], [-7.4, -2.868], [-7.3, -2.864], [-7.2, -2.86], [-7.1, -2.856], [-7, -2.852], [-6.9, -2.848], [-6.8, -2.843], [-6.7, -2.839], [-6.6, -2.834], [-6.5, -2.829], [-6.4, -2.824], [-6.3, -2.819], [-6.2, -2.814], [-6.1, -2.808], [-6, -2.802], [-5.9, -2.796], [-5.8, -2.79], [-5.7, -2.784], [-5.6, -2.777], [-5.5, -2.77], [-5.4, -2.763], [-5.3, -2.756], [-5.2, -2.748], [-5.1, -2.74], [-5, -2.731], [-4.9, -2.723], [-4.8, -2.714], [-4.7, -2.704], [-4.6, -2.694], [-4.5, -2.683], [-4.4, -2.672], [-4.3, -2.661], [-4.2, -2.649], [-4.1, -2.636], [-4, -2.622], [-3.9, -2.608], [-3.8, -2.593], [-3.7, -2.577], [-3.6, -2.56], [-3.5, -2.542], [-3.4, -2.523], [-3.3, -2.503], [-3.2, -2.481], [-3.1, -2.458], [-3, -2.433], [-2.9, -2.406], [-2.8, -2.377], [-2.7, -2.346], [-2.6, -2.312], [-2.5, -2.275], [-2.4, -2.235], [-2.3, -2.192], [-2.2, -2.144], [-2.1, -2.092], [-2, -2.034], [-1.9, -1.972], [-1.8, -1.903], [-1.7, -1.827], [-1.6, -1.744], [-1.5, -1.654], [-1.4, -1.557], [-1.3, -1.452], [-1.2, -1.342], [-1.1, -1.226], [-1, -1.107], [-0.9, -0.987], [-0.8, -0.866], [-0.7, -0.748], [-0.6, -0.632], [-0.5, -0.519], [-0.4, -0.41], [-0.3, -0.304], [-0.2, -0.201], [-0.1, -0.1], [0, 0], [0.1, 0.1], [0.2, 0.201], [0.3, 0.304], [0.4, 0.41], [0.5, 0.519], [0.6, 0.632], [0.7, 0.748], [0.8, 0.866], [0.9, 0.987], [1, 1.107], [1.1, 1.226], [1.2, 1.342], [1.3, 1.452], [1.4, 1.557], [1.5, 1.654], [1.6, 1.744], [1.7, 1.827], [1.8, 1.903], [1.9, 1.972], [2, 2.034], [2.1, 2.092], [2.2, 2.144], [2.3, 2.192], [2.4, 2.235], [2.5, 2.275], [2.6, 2.312], [2.7, 2.346], [2.8, 2.377], [2.9, 2.406], [3, 2.433], [3.1, 2.458], [3.2, 2.481], [3.3, 2.503], [3.4, 2.523], [3.5, 2.542], [3.6, 2.56], [3.7, 2.577], [3.8, 2.593], [3.9, 2.608], [4, 2.622]], step: 1 },
            { kind: "line", through: [[0, 0.253], [1, 0.253]], dashed: true, step: 1 },
            { kind: "label", at: [-6, 0.253], label: "y = tan⁻¹(8/31)", labelAt: "n", step: 1 },
            { kind: "line", through: [[0, -2.889], [1, -2.889]], dashed: true, step: 2 },
            { kind: "label", at: [-4, -2.889], label: "y = tan⁻¹(8/31) − π", labelAt: "s", step: 2 },
            { kind: "point", at: [0.25, 0.253], tone: "good", label: "x = 1/4", labelAt: "nw", step: 3 },
            { kind: "point", at: [-8, -2.889], tone: "bad", label: "x = −8", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "tan⁻¹ is not linear",
        points: [
          t`A **linear** rule would give $\tan^{-1}a + \tan^{-1}b = \tan^{-1}(a + b)$. That is false.`,
          t`Test it: $\tan^{-1}1 + \tan^{-1}1 = \frac{\pi}{2}$, but $\tan^{-1}2 < \frac{\pi}{2}$.`,
          t`Sum: $\tan^{-1}a + \tan^{-1}b$ $= \tan^{-1}\frac{a + b}{1 - ab}$, when $ab < 1$.`,
          t`Difference: $\tan^{-1}a - \tan^{-1}b$ $= \tan^{-1}\frac{a - b}{1 + ab}$, when $ab > -1$.`,
          t`Double: $2\tan^{-1}a = \tan^{-1}\frac{2a}{1 - a^2}$ when $|a| < 1$, not $\tan^{-1}2a$.`,
          t`The signs follow $\tan(A + B)$: it has $1 - \tan A\tan B$ below, a minus for a sum.`,
        ],
      },
      {
        title: "Sums beyond a right angle",
        points: [
          t`Each $\tan^{-1}$ lies in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, so a sum of two lies in $(-\pi, \pi)$.`,
          t`The sum formula gives the sum itself only when $ab < 1$.`,
          t`Example: $\tan^{-1}\sqrt{3} + \tan^{-1}1 = \frac{7\pi}{12}$, beyond $\frac{\pi}{2}$, with $ab = \sqrt{3} > 1$.`,
          t`So $ab < 1$ is a condition on the formula, not on the answer: a root with $ab > 1$ can be right.`,
          t`Sign test: two positive terms make a positive sum; two negative terms, a negative sum.`,
          t`For $\frac{\pi}{2}$ on the right, $\tan\frac{\pi}{2}$ is undefined: set $1 - ab = 0$, then check signs.`,
        ],
      },
      {
        title: "Equations with sin⁻¹ and cos⁻¹",
        points: [
          t`Use $\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$ to trade one function for the other.`,
          t`Take $\sin\left(\sin^{-1}\frac{1}{5} + \cos^{-1}x\right) = 1$.`,
          t`In its range the bracket has sine $1$ only at $\frac{\pi}{2}$, so the bracket is $\frac{\pi}{2}$.`,
          t`Then $\cos^{-1}x = \frac{\pi}{2} - \sin^{-1}\frac{1}{5}$ $= \cos^{-1}\frac{1}{5}$, so $x = \frac{1}{5}$.`,
          t`Don't split the sine over the sum: $\sin(A + B) \ne \sin A + \sin B$.`,
          t`A $\sin^{-1}$ term lies in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, which limits what the other side can be.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $\sin^{-1}(1 - x) - 2\sin^{-1}x = \frac{\pi}{2}$.`,
      steps: [
        t`Let $\sin^{-1}x = \alpha$, so $x = \sin\alpha$. Then $\sin^{-1}(1 - x) = \frac{\pi}{2} + 2\alpha$.`,
        t`Take the sine of both sides: $1 - x = \sin\left(\frac{\pi}{2} + 2\alpha\right)$ $= \cos 2\alpha$.`,
        t`$\cos 2\alpha = 1 - 2\sin^2\alpha = 1 - 2x^2$, so $1 - x = 1 - 2x^2$ and $x(2x - 1) = 0$.`,
        t`Check $x = 0$: $\sin^{-1}1 - 2\sin^{-1}0 = \frac{\pi}{2}$. It works.`,
        t`Check $x = \frac{1}{2}$: $\frac{\pi}{6} - \frac{\pi}{3} = -\frac{\pi}{6} \ne \frac{\pi}{2}$. Reject it.`,
      ],
      answer: t`$x = 0$.`,
    },
    visualSpec: t`Slide $x$ along the graph of the left side: the level line of the right side, and its copy $\pi$ lower, show which roots of the tan equation really solve the original one.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: "Takes tan of both sides and keeps every root of the algebraic equation without checking it in the original",
      remediation: t`Taking $\tan$ also solves the equation whose sides differ by $\pi$. Put each root back into the original equation and keep only those that fit.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C15-M2",
      mistake: "Treats tan^-1 as linear: tan^-1 a + tan^-1 b = tan^-1(a + b) and 2 tan^-1 a = tan^-1(2a)",
      remediation: t`$\tan^{-1}$ is not linear. Combine with $\tan^{-1}a + \tan^{-1}b$ $= \tan^{-1}\frac{a + b}{1 - ab}$ and $2\tan^{-1}a = \tan^{-1}\frac{2a}{1 - a^2}$.`,
      fallback: { kind: "concept", id: "C14" },
    },
    {
      id: "C15-M3",
      mistake: "Puts a plus in the denominator of the sum formula: (a + b)/(1 + ab), and 2a/(1 + a^2) for the double",
      remediation: t`For a sum the denominator is $1 - ab$, just as $\tan(A + B)$ has $1 - \tan A\tan B$ below. The plus belongs to a difference.`,
      fallback: { kind: "concept", id: "C14" },
    },
    {
      id: "C15-M4",
      mistake: "Rejects every root that is not positive out of habit, as if x had to be positive",
      remediation: t`Negative inputs are allowed: $\tan^{-1}(-a) = -\tan^{-1}a$. Reject a root only when it fails the original equation, so test each one.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C15-M5",
      mistake: "Rejects a root because ab > 1 (a^2 > 1 for a double), reading the formula's condition ab < 1 as a test of the answer",
      remediation: t`$ab < 1$ only says when the formula gives the sum directly; when $ab > 1$ the sum is beyond $\frac{\pi}{2}$ in size. Such a root can be right: check the sum's sign and size.`,
      fallback: { kind: "concept", id: "C14" },
    },
  ],
  engineNotes: [
    "C15-M1 gives the key when every root of the algebraic equation is valid, as in Misc II Q.25; draw it from items with a root to reject.",
    "C15-M4 gives the key when the valid roots are exactly the positive ones (Misc I Q.14); it shows only where a valid root is negative or zero.",
    t`C15-M5 gives the key unless a valid root has $ab \ge 1$ (a right side beyond $\pm\frac{\pi}{2}$) or a rejected root has $ab < 1$.`,
    t`With $\frac{\pi}{2}$ on the right (Misc II Q.29), C15-M2, C15-M3 and C15-M5 all give no solution, so that question can't hold three of them.`,
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.14" },
      stem: t`If $\tan^{-1}2x + \tan^{-1}3x = \frac{\pi}{4}$, then $x =$`,
      verify: { kind: "value", inputs: { lhs: "atan(2*x) + atan(3*x)", rhs: "pi/4" } },
      options: [
        { key: "A", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C15-M2", value: "{1/5}" },
        { key: "B", text: t`$\frac{1}{2}$ or $\frac{1}{3}$`, correct: false, misconceptionId: "C15-M3", value: "{1/3, 1/2}" },
        { key: "C", text: t`$\frac{1}{6}$`, correct: true, value: "{1/6}" },
        { key: "D", text: t`$\frac{1}{6}$ or $-1$`, correct: false, misconceptionId: "C15-M1", value: "{-1, 1/6}" },
      ],
      solution: {
        steps: [
          t`Combine and take tan: $\frac{2x + 3x}{1 - 6x^2}$ $= \tan\frac{\pi}{4} = 1$.`,
          t`So $6x^2 + 5x - 1 = 0$, i.e. $(6x - 1)(x + 1) = 0$: $x = \frac{1}{6}$ or $x = -1$.`,
          t`$x = -1$ makes both terms negative, so their sum is negative, not $\frac{\pi}{4}$: reject it.`,
          t`$x = \frac{1}{6}$ gives $ab = \frac{1}{6} < 1$, so the formula holds: $x = \frac{1}{6}$.`,
        ],
      },
    },
    {
      id: "C15-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.25" },
      stem: t`If $\tan^{-1}\frac{x - 1}{x - 2} + \tan^{-1}\frac{x + 1}{x + 2}$ $= \frac{\pi}{4}$, then $x =$`,
      verify: { kind: "value", inputs: { lhs: "atan((x - 1)/(x - 2)) + atan((x + 1)/(x + 2))", rhs: "pi/4" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C15-M2", value: "{0}" },
        { key: "B", text: t`No real value of $x$`, correct: false, misconceptionId: "C15-M3", value: "EmptySet" },
        { key: "C", text: t`$\frac{1}{\sqrt{2}}$ only`, correct: false, misconceptionId: "C15-M4", value: "{sqrt(2)/2}" },
        { key: "D", text: t`$\pm\frac{1}{\sqrt{2}}$`, correct: true, value: "{-sqrt(2)/2, sqrt(2)/2}" },
      ],
      solution: {
        steps: [
          t`With $a = \frac{x - 1}{x - 2}$, $b = \frac{x + 1}{x + 2}$: $a + b = \frac{2x^2 - 4}{x^2 - 4}$.`,
          t`And $1 - ab = \frac{-3}{x^2 - 4}$, so taking tan gives $\frac{2x^2 - 4}{-3} = 1$.`,
          t`$2x^2 = 1$, so $x = \pm\frac{1}{\sqrt{2}}$.`,
          t`Both give positive $a$, $b$ with $ab = \frac{1}{7} < 1$, so both work: $x = \pm\frac{1}{\sqrt{2}}$.`,
        ],
      },
    },
    {
      id: "C15-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.14 (numbers changed)" },
      stem: t`If $\tan^{-1}\frac{x}{2} + \tan^{-1}\frac{x}{3}$ $= \frac{3\pi}{4}$, then $x =$`,
      verify: { kind: "value", inputs: { lhs: "atan(x/2) + atan(x/3)", rhs: "3*pi/4" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C15-M5", value: "{-1}" },
        { key: "B", text: t`$-2$ or $-3$`, correct: false, misconceptionId: "C15-M3", value: "{-3, -2}" },
        { key: "C", text: t`$6$`, correct: true, value: "{6}" },
        { key: "D", text: t`$6$ or $-1$`, correct: false, misconceptionId: "C15-M1", value: "{-1, 6}" },
      ],
      solution: {
        steps: [
          t`Combine: $\frac{x/2 + x/3}{1 - x^2/6}$ $= \frac{5x}{6 - x^2}$. Take tan: it equals $\tan\frac{3\pi}{4} = -1$.`,
          t`$5x = x^2 - 6$, so $x^2 - 5x - 6 = 0$: $x = 6$ or $x = -1$.`,
          t`$x = -1$ makes both terms negative, so the sum is negative (it is $-\frac{\pi}{4}$): reject it.`,
          t`$x = 6$ gives $\tan^{-1}3 + \tan^{-1}2$: $ab = 6 > 1$ with both positive, so the sum is $\pi - \frac{\pi}{4} = \frac{3\pi}{4}$. So $x = 6$.`,
        ],
      },
    },
    {
      id: "C15-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 Ex3.3 Q.3 vi)" },
      stem: t`If $2\tan^{-1}x = \tan^{-1}\frac{3}{4}$, then $x =$`,
      verify: { kind: "value", inputs: { lhs: "2*atan(x)", rhs: "atan(3/4)" } },
      options: [
        { key: "A", text: t`$\frac{3}{8}$`, correct: false, misconceptionId: "C15-M2", value: "{3/8}" },
        { key: "B", text: t`$\frac{4 \pm \sqrt{7}}{3}$`, correct: false, misconceptionId: "C15-M3", value: "{4/3 - sqrt(7)/3, sqrt(7)/3 + 4/3}" },
        { key: "C", text: t`$\frac{1}{3}$`, correct: true, value: "{1/3}" },
        { key: "D", text: t`$\frac{1}{3}$ or $-3$`, correct: false, misconceptionId: "C15-M1", value: "{-3, 1/3}" },
      ],
      solution: {
        steps: [
          t`$2\tan^{-1}x = \tan^{-1}\frac{2x}{1 - x^2}$, so taking tan: $\frac{2x}{1 - x^2} = \frac{3}{4}$.`,
          t`$3x^2 + 8x - 3 = 0$, i.e. $(3x - 1)(x + 3) = 0$: $x = \frac{1}{3}$ or $x = -3$.`,
          t`$x = -3$ makes $2\tan^{-1}x$ negative, but $\tan^{-1}\frac{3}{4} > 0$: reject it.`,
          t`$x = \frac{1}{3}$ has $x^2 < 1$, so the formula holds: $x = \frac{1}{3}$.`,
        ],
      },
    },
    {
      id: "C15-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.14 (numbers changed)" },
      stem: t`If $\tan^{-1}2x + \tan^{-1}3x = -\frac{\pi}{4}$, then $x =$`,
      verify: { kind: "value", inputs: { lhs: "atan(2*x) + atan(3*x)", rhs: "-pi/4" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C15-M4", value: "{1}" },
        { key: "B", text: t`$-\frac{1}{5}$`, correct: false, misconceptionId: "C15-M2", value: "{-1/5}" },
        { key: "C", text: t`$-\frac{1}{6}$`, correct: true, value: "{-1/6}" },
        { key: "D", text: t`$-\frac{1}{6}$ or $1$`, correct: false, misconceptionId: "C15-M1", value: "{-1/6, 1}" },
      ],
      solution: {
        steps: [
          t`Combine and take tan: $\frac{5x}{1 - 6x^2}$ $= \tan\left(-\frac{\pi}{4}\right) = -1$.`,
          t`So $6x^2 - 5x - 1 = 0$, i.e. $(6x + 1)(x - 1) = 0$: $x = -\frac{1}{6}$ or $x = 1$.`,
          t`$x = 1$ makes both terms positive, so the sum is positive (it is $\frac{3\pi}{4}$): reject it.`,
          t`$x = -\frac{1}{6}$ gives $ab = \frac{1}{6} < 1$, so the formula holds: $x = -\frac{1}{6}$.`,
        ],
      },
    },
  ],
};
