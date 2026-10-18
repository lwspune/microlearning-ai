import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Solve $\sin\theta = \tan\theta$ by dividing both sides by $\sin\theta$: $1 = \frac{1}{\cos\theta}$, so $\cos\theta = 1$ and $\theta = 2n\pi$. **But $\theta = \pi$ works too: $\sin\pi = 0 = \tan\pi$. Where did it go?**`,
    reveal: t`Dividing by $\sin\theta$ assumed $\sin\theta \ne 0$, and threw away every root where it is $0$. Factorise instead: $\sin\theta(\cos\theta - 1) = 0$ gives $\sin\theta = 0$ or $\cos\theta = 1$, so $\theta = n\pi$.`,
  },
  explanation: {
    intuition: [
      t`We can already solve the **standard forms** $\sin\theta = k$, $\cos\theta = k$ and $\tan\theta = k$.`,
      t`Most equations aren't in a standard form, but a few moves bring them there.`,
      t`**Factorise**: a product is $0$ exactly when one of its factors is $0$, so each factor is a standard form.`,
      t`**Use an identity**, like $\sec^2\theta = 1 + \tan^2\theta$, to leave a single ratio.`,
      t`**Combine** $a\cos\theta + b\sin\theta$ into the cosine of one shifted angle.`,
      t`Never divide by a factor that can be $0$: the roots that make it $0$ disappear.`,
    ],
    formal: [
      {
        title: "Factorise, don't divide",
        points: [
          t`Take $\sin 2\theta = \sin\theta$. Write $\sin 2\theta = 2\sin\theta\cos\theta$ and bring every term to one side.`,
          t`A **common factor** is one that appears in every term: here, $\sin\theta$.`,
          t`Take it out: $\sin\theta(2\cos\theta - 1) = 0$.`,
          t`So $\sin\theta = 0$ or $\cos\theta = \frac{1}{2}$: $\theta = n\pi$ or $\theta = 2n\pi \pm \frac{\pi}{3}$.`,
          t`Dividing by $\sin\theta$ instead leaves only $\cos\theta = \frac{1}{2}$, and loses $\theta = n\pi$.`,
          t`Divide only by a number or factor that is never $0$, like $2$ or $\sqrt{2}$.`,
        ],
      },
      {
        title: "Identities that leave one ratio",
        points: [
          t`An **identity** is true for every angle, so it can replace part of an equation.`,
          t`$\sec^2\theta = 1 + \tan^2\theta$ turns an equation in $\sec$ and $\tan$ into one in $\tan$ alone.`,
          t`Likewise $\cos^2\theta = 1 - \sin^2\theta$ leaves only $\sin\theta$.`,
          t`Take $2\cos^2\theta + 3\sin\theta = 0$: it becomes $2\sin^2\theta - 3\sin\theta - 2 = 0$.`,
          t`That factorises: $(2\sin\theta + 1)(\sin\theta - 2) = 0$.`,
          t`$\sin\theta = 2$ is impossible, so $\sin\theta = -\frac{1}{2}$: $\theta = n\pi + (-1)^n\left(-\frac{\pi}{6}\right)$.`,
        ],
      },
      {
        title: "Sums into products",
        points: [
          t`A **sum-to-product formula** turns a sum of sines or cosines into a product, ready to factorise.`,
          t`For cosines: $\cos C + \cos D$ $= 2\cos\frac{C + D}{2}\cos\frac{C - D}{2}$.`,
          t`Take $\cos 3\theta + \cos\theta = 0$: it becomes $2\cos 2\theta\cos\theta = 0$.`,
          t`So $\cos 2\theta = 0$ or $\cos\theta = 0$.`,
          t`$2\theta = 2n\pi \pm \frac{\pi}{2}$ gives $\theta = n\pi \pm \frac{\pi}{4}$; $\cos\theta = 0$ gives $\theta = 2n\pi \pm \frac{\pi}{2}$.`,
          t`With three terms, pair the outer two first: the middle term often becomes the common factor.`,
        ],
      },
      {
        title: "Both sides are angles",
        points: [
          t`In $\cos 3\theta = \cos 2\theta$ both sides are cosines of angles in $\theta$.`,
          t`$\cos A = \cos B$ gives $A = 2n\pi \pm B$: solve with each sign.`,
          t`Plus: $3\theta = 2n\pi + 2\theta$, so $\theta = 2n\pi$.`,
          t`Minus: $3\theta = 2n\pi - 2\theta$, so $5\theta = 2n\pi$ and $\theta = \frac{2n\pi}{5}$.`,
          t`Each $2n\pi$ is a $\frac{2n\pi}{5}$ too, so the general solution is $\theta = \frac{2n\pi}{5}$.`,
          t`If one side is a sine, change it first: $\sin x = \cos\left(\frac{\pi}{2} - x\right)$.`,
        ],
      },
      {
        title: "One cosine from two terms",
        points: [
          t`In $a\cos\theta + b\sin\theta = c$, divide every term, the right side too, by $\sqrt{a^2 + b^2}$.`,
          t`Take $\cos\theta - \sin\theta = 1$: divide by $\sqrt{1 + 1} = \sqrt{2}$.`,
          t`Read $\frac{1}{\sqrt{2}}$ as $\cos\frac{\pi}{4}$ and $\sin\frac{\pi}{4}$: $\cos\theta\cos\frac{\pi}{4} - \sin\theta\sin\frac{\pi}{4}$ $= \frac{1}{\sqrt{2}}$.`,
          t`$\cos(A + B)$ $= \cos A\cos B - \sin A\sin B$, so the left side is $\cos\left(\theta + \frac{\pi}{4}\right)$.`,
          t`A minus between the terms gives a plus inside the cosine; a plus gives a minus.`,
          t`So $\theta + \frac{\pi}{4} = 2n\pi \pm \frac{\pi}{4}$: $\theta = 2n\pi$ or $\theta = 2n\pi - \frac{\pi}{2}$.`,
        ],
      },
      {
        title: "Squaring adds roots",
        points: [
          t`Squaring $\cos\theta - \sin\theta = 1$ gives $1 - \sin 2\theta = 1$, so $\sin 2\theta = 0$.`,
          t`That gives $\theta = \frac{n\pi}{2}$: in one turn, $0$, $\frac{\pi}{2}$, $\pi$ and $\frac{3\pi}{2}$.`,
          t`But at $\frac{\pi}{2}$ and $\pi$ the left side is $-1$, not $1$.`,
          t`Squaring also solves $\cos\theta - \sin\theta = -1$, since $(-1)^2 = 1$ as well.`,
          t`Only $0$ and $\frac{3\pi}{2}$ remain, as before. So don't square; if you must, check every root.`,
        ],
        figure: {
          alt: "The graph of y = cos θ − sin θ for θ from 0 to 2π, with dashed lines y = 1 and y = −1. Squaring gives four angles, 0, π/2, π and 3π/2. At π/2 and π the curve is on y = −1, so they are extra roots, marked as wrong. Only 0 and 3π/2, where the curve meets y = 1, solve the original equation.",
          axes: "xy",
          view: { x: [-0.4, 6.8], y: [-1.9, 1.9] },
          elements: [
            { kind: "curve", points: [[0, 1], [0.052, 0.946], [0.105, 0.89], [0.157, 0.831], [0.209, 0.77], [0.262, 0.707], [0.314, 0.642], [0.367, 0.575], [0.419, 0.507], [0.471, 0.437], [0.524, 0.366], [0.576, 0.294], [0.628, 0.221], [0.681, 0.148], [0.733, 0.074], [0.785, 0], [0.838, -0.074], [0.89, -0.148], [0.942, -0.221], [0.995, -0.294], [1.047, -0.366], [1.1, -0.437], [1.152, -0.507], [1.204, -0.575], [1.257, -0.642], [1.309, -0.707], [1.361, -0.77], [1.414, -0.831], [1.466, -0.89], [1.518, -0.946], [1.571, -1], [1.623, -1.051], [1.676, -1.099], [1.728, -1.144], [1.78, -1.186], [1.833, -1.225], [1.885, -1.26], [1.937, -1.292], [1.99, -1.32], [2.042, -1.345], [2.094, -1.366], [2.147, -1.383], [2.199, -1.397], [2.251, -1.406], [2.304, -1.412], [2.356, -1.414], [2.409, -1.412], [2.461, -1.406], [2.513, -1.397], [2.566, -1.383], [2.618, -1.366], [2.67, -1.345], [2.723, -1.32], [2.775, -1.292], [2.827, -1.26], [2.88, -1.225], [2.932, -1.186], [2.985, -1.144], [3.037, -1.099], [3.089, -1.051], [3.142, -1], [3.194, -0.946], [3.246, -0.89], [3.299, -0.831], [3.351, -0.77], [3.403, -0.707], [3.456, -0.642], [3.508, -0.575], [3.56, -0.507], [3.613, -0.437], [3.665, -0.366], [3.718, -0.294], [3.77, -0.221], [3.822, -0.148], [3.875, -0.074], [3.927, 0], [3.979, 0.074], [4.032, 0.148], [4.084, 0.221], [4.136, 0.294], [4.189, 0.366], [4.241, 0.437], [4.294, 0.507], [4.346, 0.575], [4.398, 0.642], [4.451, 0.707], [4.503, 0.77], [4.555, 0.831], [4.608, 0.89], [4.66, 0.946], [4.712, 1], [4.765, 1.051], [4.817, 1.099], [4.869, 1.144], [4.922, 1.186], [4.974, 1.225], [5.027, 1.26], [5.079, 1.292], [5.131, 1.32], [5.184, 1.345], [5.236, 1.366], [5.288, 1.383], [5.341, 1.397], [5.393, 1.406], [5.445, 1.412], [5.498, 1.414], [5.55, 1.412], [5.603, 1.406], [5.655, 1.397], [5.707, 1.383], [5.76, 1.366], [5.812, 1.345], [5.864, 1.32], [5.917, 1.292], [5.969, 1.26], [6.021, 1.225], [6.074, 1.186], [6.126, 1.144], [6.178, 1.099], [6.231, 1.051], [6.283, 1]], step: 1 },
            { kind: "line", through: [[0, 1], [1, 1]], dashed: true, step: 1 },
            { kind: "label", at: [3.3, 1], label: "y = 1", labelAt: "n", step: 1 },
            { kind: "point", at: [0, 1], step: 2, tone: "muted" },
            { kind: "point", at: [1.571, -1], step: 2, tone: "muted" },
            { kind: "point", at: [3.142, -1], step: 2, tone: "muted" },
            { kind: "point", at: [4.712, 1], step: 2, tone: "muted" },
            { kind: "point", at: [1.571, -1], step: 3, tone: "bad", label: "π/2", labelAt: "s" },
            { kind: "point", at: [3.142, -1], step: 3, tone: "bad", label: "π", labelAt: "s" },
            { kind: "line", through: [[0, -1], [1, -1]], dashed: true, step: 4 },
            { kind: "label", at: [5.6, -1], label: "y = −1", labelAt: "s", step: 4 },
            { kind: "point", at: [0, 1], step: 5, tone: "good", label: "0", labelAt: "nw" },
            { kind: "point", at: [4.712, 1], step: 5, tone: "good", label: "3π/2", labelAt: "nw" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the general solution of $\tan^3\theta = 3\tan\theta$.`,
      steps: [
        t`Bring every term to one side: $\tan^3\theta - 3\tan\theta = 0$. Don't divide by $\tan\theta$: it can be $0$.`,
        t`Take out the common factor: $\tan\theta(\tan^2\theta - 3) = 0$.`,
        t`$\tan\theta = 0$ gives $\theta = n\pi$.`,
        t`$\tan^2\theta = 3$ gives $\tan\theta = \pm\sqrt{3}$ $= \tan\left(\pm\frac{\pi}{3}\right)$, so $\theta = n\pi \pm \frac{\pi}{3}$.`,
      ],
      answer: t`$\theta = n\pi$ or $\theta = n\pi \pm \frac{\pi}{3}$, $n \in Z$.`,
    },
    visualSpec: t`Drag a level line $y = c$ across the graph of $y = a\cos\theta + b\sin\theta$; its crossings light up as solutions, and its mirror $y = -c$ shows the extra roots that squaring would add.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Divides both sides by a common factor that can be 0, so the roots of that factor are lost",
      remediation: t`Dividing by a factor assumes it isn't $0$, and throws away the angles where it is. Take the factor out instead: a product is $0$ when either factor is $0$.`,
      fallback: { kind: "ext", topic: "solving equations by factorising" },
    },
    {
      id: "C05-M2",
      mistake: "In cos A = cos B, writes only A = 2n pi + B and drops the minus branch",
      remediation: t`$\cos A = \cos B$ gives $A = 2n\pi \pm B$. The minus sign gives a second family: solve both and keep every family.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: "Gets the sign of the shift wrong when writing one cosine: cos(theta - beta) for cos theta cos beta - sin theta sin beta, or sin x as cos(x + pi/2)",
      remediation: t`$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$: the sign inside the cosine is the opposite of the sign between the terms. Likewise $\sin x = \cos\left(\frac{\pi}{2} - x\right)$, not $\cos\left(\frac{\pi}{2} + x\right)$.`,
      fallback: { kind: "ext", topic: "compound angle formulae" },
    },
    {
      id: "C05-M4",
      mistake: "Squares both sides of a cos theta + b sin theta = c and keeps every root of the squared equation",
      remediation: t`Squaring also solves the equation with $-c$ on the right, so it adds roots. Write the left side as one cosine instead, or check each root in the original equation.`,
      fallback: { kind: "ext", topic: "checking roots after squaring" },
    },
    {
      id: "C05-M5",
      mistake: "For a multiple angle, divides only the angle by the multiple, not the period",
      remediation: t`Divide the whole general solution by the multiple: $3\theta = n\pi + \alpha$ gives $\theta = \frac{n\pi}{3} + \frac{\alpha}{3}$. The period shrinks too.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M6",
      mistake: "Ignores the sign of a negative value: solves f(m theta) = |k|",
      remediation: t`The sign picks the angle: $\tan x = -1$ means $x = n\pi + \frac{3\pi}{4}$, and $\cos x = -\frac{1}{2}$ means $x = 2n\pi \pm \frac{2\pi}{3}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C05-M1, C05-M5 and C05-M6 act on the factors an equation splits into: C05-M1 needs a common factor, C05-M5 a multiple angle, C05-M6 a factor with a negative value.",
    t`C05-M2 and C05-M3 apply to $\cos A = \cos B$ and to $a\cos\theta + b\sin\theta = c$; C05-M4 only where squaring adds roots (it gives the key for $\sec^2 2\theta = 1 - \tan 2\theta$).`,
    t`C05-M2 gives the key when the minus family contains the plus family, as in $\cos 3\theta = \cos 2\theta$; draw it from items where they differ.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G8" },
      stem: t`The general solution of $\sec^2 2\theta = 1 - \tan 2\theta$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { lhs: "sec(2*theta)**2", rhs: "1 - tan(2*theta)" }, params: { pieces: "tan,2,0,c;tan,2,-1" } },
      options: [
        { key: "A", text: t`$\theta = \frac{n\pi}{2}$ or $\theta = \frac{n\pi}{2} + \frac{\pi}{8}$`, correct: false, misconceptionId: "C05-M6", value: "{0, pi/8, pi/2, 5*pi/8, pi, 9*pi/8, 3*pi/2, 13*pi/8, 2*pi, 17*pi/8, 5*pi/2, 21*pi/8, 3*pi, 25*pi/8, 7*pi/2, 29*pi/8}" },
        { key: "B", text: t`$\theta = \frac{n\pi}{2}$ or $\theta = \frac{n\pi}{2} + \frac{3\pi}{8}$`, correct: true, value: "{0, 3*pi/8, pi/2, 7*pi/8, pi, 11*pi/8, 3*pi/2, 15*pi/8, 2*pi, 19*pi/8, 5*pi/2, 23*pi/8, 3*pi, 27*pi/8, 7*pi/2, 31*pi/8}" },
        { key: "C", text: t`$\theta = \frac{n\pi}{2} + \frac{3\pi}{8}$`, correct: false, misconceptionId: "C05-M1", value: "{3*pi/8, 7*pi/8, 11*pi/8, 15*pi/8, 19*pi/8, 23*pi/8, 27*pi/8, 31*pi/8}" },
        { key: "D", text: t`$\theta = n\pi$ or $\theta = n\pi + \frac{3\pi}{8}$`, correct: false, misconceptionId: "C05-M5", value: "{0, 3*pi/8, pi, 11*pi/8, 2*pi, 19*pi/8, 3*pi, 27*pi/8}" },
      ],
      solution: {
        steps: [
          t`Use $\sec^2 2\theta = 1 + \tan^2 2\theta$: then $\tan^2 2\theta + \tan 2\theta = 0$.`,
          t`Factorise, don't divide: $\tan 2\theta(\tan 2\theta + 1) = 0$, so $\tan 2\theta = 0$ or $\tan 2\theta = -1$.`,
          t`$\tan 2\theta = 0$: $2\theta = n\pi$. $\tan 2\theta = -1 = \tan\frac{3\pi}{4}$: $2\theta = n\pi + \frac{3\pi}{4}$.`,
          t`Divide by $2$: $\theta = \frac{n\pi}{2}$ or $\theta = \frac{n\pi}{2} + \frac{3\pi}{8}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G9" },
      stem: t`The general solution of $\sin\theta + \sin 3\theta + \sin 5\theta = 0$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { lhs: "sin(theta) + sin(3*theta) + sin(5*theta)", rhs: "0" }, params: { pieces: "sin,3,0,c;cos,2,-1/2" } },
      options: [
        { key: "A", text: t`$\theta = n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C05-M1", value: "{pi/3, 2*pi/3, 4*pi/3, 5*pi/3, 7*pi/3, 8*pi/3, 10*pi/3, 11*pi/3}" },
        { key: "B", text: t`$\theta = n\pi$ or $\theta = 2n\pi \pm \frac{\pi}{3}$`, correct: false, misconceptionId: "C05-M5", value: "{0, pi/3, pi, 5*pi/3, 2*pi, 7*pi/3, 3*pi, 11*pi/3}" },
        { key: "C", text: t`$\theta = \frac{n\pi}{3}$ or $\theta = n\pi \pm \frac{\pi}{6}$`, correct: false, misconceptionId: "C05-M6", value: "{0, pi/6, pi/3, 2*pi/3, 5*pi/6, pi, 7*pi/6, 4*pi/3, 5*pi/3, 11*pi/6, 2*pi, 13*pi/6, 7*pi/3, 8*pi/3, 17*pi/6, 3*pi, 19*pi/6, 10*pi/3, 11*pi/3, 23*pi/6}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{3}$`, correct: true, value: "{0, pi/3, 2*pi/3, pi, 4*pi/3, 5*pi/3, 2*pi, 7*pi/3, 8*pi/3, 3*pi, 10*pi/3, 11*pi/3}" },
      ],
      solution: {
        steps: [
          t`Pair the outer terms: $\sin 5\theta + \sin\theta$ $= 2\sin 3\theta\cos 2\theta$.`,
          t`So $\sin 3\theta(2\cos 2\theta + 1) = 0$: $\sin 3\theta = 0$ or $\cos 2\theta = -\frac{1}{2}$.`,
          t`$3\theta = n\pi$ gives $\theta = \frac{n\pi}{3}$; $2\theta = 2n\pi \pm \frac{2\pi}{3}$ gives $\theta = n\pi \pm \frac{\pi}{3}$.`,
          t`Every $n\pi \pm \frac{\pi}{3}$ is a multiple of $\frac{\pi}{3}$, so the general solution is $\theta = \frac{n\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 Ex.Q7 iii)" },
      stem: t`The general solution of $\cos\theta + \sin\theta = 1$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { lhs: "cos(theta) + sin(theta)", rhs: "1" }, params: { cmp: "1,1,1" } },
      options: [
        { key: "A", text: t`$\theta = 2n\pi$ or $\theta = 2n\pi + \frac{\pi}{2}$`, correct: true, value: "{0, pi/2, 2*pi, 5*pi/2}" },
        { key: "B", text: t`$\theta = 2n\pi + \frac{\pi}{2}$`, correct: false, misconceptionId: "C05-M2", value: "{pi/2, 5*pi/2}" },
        { key: "C", text: t`$\theta = 2n\pi$ or $\theta = 2n\pi - \frac{\pi}{2}$`, correct: false, misconceptionId: "C05-M3", value: "{0, 3*pi/2, 2*pi, 7*pi/2}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{2}$`, correct: false, misconceptionId: "C05-M4", value: "{0, pi/2, pi, 3*pi/2, 2*pi, 5*pi/2, 3*pi, 7*pi/2}" },
      ],
      solution: {
        steps: [
          t`Divide by $\sqrt{1 + 1} = \sqrt{2}$: $\cos\theta\cos\frac{\pi}{4} + \sin\theta\sin\frac{\pi}{4}$ $= \frac{1}{\sqrt{2}}$.`,
          t`The left side is $\cos\left(\theta - \frac{\pi}{4}\right)$, so $\cos\left(\theta - \frac{\pi}{4}\right) = \cos\frac{\pi}{4}$.`,
          t`$\theta - \frac{\pi}{4} = 2n\pi \pm \frac{\pi}{4}$: $\theta = 2n\pi + \frac{\pi}{2}$ or $\theta = 2n\pi$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.6" },
      stem: t`If $\sqrt{3}\cos x - \sin x = 1$, then the general value of $x$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { lhs: "sqrt(3)*cos(theta) - sin(theta)", rhs: "1" }, params: { cmp: "sqrt(3),-1,1" } },
      options: [
        { key: "A", text: t`$x = 2n\pi \pm \frac{\pi}{3} + \frac{\pi}{6}$`, correct: false, misconceptionId: "C05-M3", value: "{pi/2, 11*pi/6, 5*pi/2, 23*pi/6}" },
        { key: "B", text: t`$x = n\pi \pm \frac{\pi}{3} - \frac{\pi}{6}$`, correct: false, misconceptionId: "C05-M4", value: "{pi/6, pi/2, 7*pi/6, 3*pi/2, 13*pi/6, 5*pi/2, 19*pi/6, 7*pi/2}" },
        { key: "C", text: t`$x = 2n\pi \pm \frac{\pi}{3} - \frac{\pi}{6}$`, correct: true, value: "{pi/6, 3*pi/2, 13*pi/6, 7*pi/2}" },
        { key: "D", text: t`$x = 2n\pi + \frac{\pi}{3} - \frac{\pi}{6}$`, correct: false, misconceptionId: "C05-M2", value: "{pi/6, 13*pi/6}" },
      ],
      solution: {
        steps: [
          t`Divide by $\sqrt{3 + 1} = 2$: $\frac{\sqrt{3}}{2}\cos x - \frac{1}{2}\sin x = \frac{1}{2}$.`,
          t`The left side is $\cos x\cos\frac{\pi}{6} - \sin x\sin\frac{\pi}{6}$ $= \cos\left(x + \frac{\pi}{6}\right)$.`,
          t`So $\cos\left(x + \frac{\pi}{6}\right) = \cos\frac{\pi}{3}$: $x + \frac{\pi}{6} = 2n\pi \pm \frac{\pi}{3}$.`,
          t`Hence $x = 2n\pi \pm \frac{\pi}{3} - \frac{\pi}{6}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.1 SolvedEx.G7" },
      stem: t`The general solution of $\cos 5\theta = \sin 3\theta$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { lhs: "cos(5*theta)", rhs: "sin(3*theta)" }, params: { cc: "5,-3,pi/2" } },
      options: [
        { key: "A", text: t`$\theta = n\pi - \frac{\pi}{4}$ or $\theta = \frac{n\pi}{4} + \frac{\pi}{16}$`, correct: true, value: "{pi/16, 5*pi/16, 9*pi/16, 3*pi/4, 13*pi/16, 17*pi/16, 21*pi/16, 25*pi/16, 7*pi/4, 29*pi/16, 33*pi/16, 37*pi/16, 41*pi/16, 11*pi/4, 45*pi/16, 49*pi/16, 53*pi/16, 57*pi/16, 15*pi/4, 61*pi/16}" },
        { key: "B", text: t`$\theta = \frac{n\pi}{4} + \frac{\pi}{16}$`, correct: false, misconceptionId: "C05-M2", value: "{pi/16, 5*pi/16, 9*pi/16, 13*pi/16, 17*pi/16, 21*pi/16, 25*pi/16, 29*pi/16, 33*pi/16, 37*pi/16, 41*pi/16, 45*pi/16, 49*pi/16, 53*pi/16, 57*pi/16, 61*pi/16}" },
        { key: "C", text: t`$\theta = n\pi + \frac{\pi}{4}$ or $\theta = \frac{n\pi}{4} - \frac{\pi}{16}$`, correct: false, misconceptionId: "C05-M3", value: "{3*pi/16, pi/4, 7*pi/16, 11*pi/16, 15*pi/16, 19*pi/16, 5*pi/4, 23*pi/16, 27*pi/16, 31*pi/16, 35*pi/16, 9*pi/4, 39*pi/16, 43*pi/16, 47*pi/16, 51*pi/16, 13*pi/4, 55*pi/16, 59*pi/16, 63*pi/16}" },
        { key: "D", text: t`$\theta = 2n\pi - \frac{\pi}{4}$ or $\theta = 2n\pi + \frac{\pi}{16}$`, correct: false, misconceptionId: "C05-M5", value: "{pi/16, 7*pi/4, 33*pi/16, 15*pi/4}" },
      ],
      solution: {
        steps: [
          t`Change the sine: $\sin 3\theta = \cos\left(\frac{\pi}{2} - 3\theta\right)$, so $\cos 5\theta = \cos\left(\frac{\pi}{2} - 3\theta\right)$.`,
          t`Then $5\theta = 2n\pi \pm \left(\frac{\pi}{2} - 3\theta\right)$, with both signs.`,
          t`Plus: $8\theta = 2n\pi + \frac{\pi}{2}$, so $\theta = \frac{n\pi}{4} + \frac{\pi}{16}$.`,
          t`Minus: $2\theta = 2n\pi - \frac{\pi}{2}$, so $\theta = n\pi - \frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.4 (iii)" },
      stem: t`The general solution of $\sin\theta - \cos\theta = 1$ is ($n \in Z$):`,
      verify: { kind: "value", inputs: { lhs: "sin(theta) - cos(theta)", rhs: "1" }, params: { cmp: "-1,1,1" } },
      options: [
        { key: "A", text: t`$\theta = 2n\pi + \frac{\pi}{2}$ or $\theta = 2n\pi + \pi$`, correct: true, value: "{pi/2, pi, 5*pi/2, 3*pi}" },
        { key: "B", text: t`$\theta = 2n\pi + \pi$`, correct: false, misconceptionId: "C05-M2", value: "{pi, 3*pi}" },
        { key: "C", text: t`$\theta = 2n\pi - \frac{\pi}{2}$ or $\theta = 2n\pi - \pi$`, correct: false, misconceptionId: "C05-M3", value: "{pi, 3*pi/2, 3*pi, 7*pi/2}" },
        { key: "D", text: t`$\theta = \frac{n\pi}{2}$`, correct: false, misconceptionId: "C05-M4", value: "{0, pi/2, pi, 3*pi/2, 2*pi, 5*pi/2, 3*pi, 7*pi/2}" },
      ],
      solution: {
        steps: [
          t`Write it as $-\cos\theta + \sin\theta = 1$ and divide by $\sqrt{2}$, using $\cos\frac{3\pi}{4} = -\frac{1}{\sqrt{2}}$, $\sin\frac{3\pi}{4} = \frac{1}{\sqrt{2}}$.`,
          t`The left side becomes $\cos\theta\cos\frac{3\pi}{4} + \sin\theta\sin\frac{3\pi}{4}$ $= \cos\left(\theta - \frac{3\pi}{4}\right)$.`,
          t`So $\cos\left(\theta - \frac{3\pi}{4}\right) = \cos\frac{\pi}{4}$: $\theta - \frac{3\pi}{4} = 2n\pi \pm \frac{\pi}{4}$.`,
          t`Hence $\theta = 2n\pi + \pi$ or $\theta = 2n\pi + \frac{\pi}{2}$. Check: $\sin\pi - \cos\pi = 1$.`,
        ],
      },
    },
  ],
};
