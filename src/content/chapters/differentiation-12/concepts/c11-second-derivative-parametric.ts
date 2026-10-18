import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`If $x = t^2$ and $y = t^3$ with $t > 0$, is $\frac{d^2y}{dx^2}$ equal to $\frac{d^2y/dt^2}{d^2x/dt^2}$ $= \frac{6t}{2} = 3t$? Test it: here $y = x^{3/2}$.`,
    reveal: t`No. From $y = x^{3/2}$, $\frac{d^2y}{dx^2} = \frac{3}{4}x^{-1/2} = \frac{3}{4t}$. At $t = 1$ that is $\frac{3}{4}$, not $3$: second derivatives do not divide like first ones.`,
  },
  explanation: {
    intuition: [
      t`The **second derivative** $\frac{d^2y}{dx^2}$ says how fast the slope $\frac{dy}{dx}$ changes as $x$ changes.`,
      t`With parametric equations, the slope $\frac{dy}{dx}$ comes out in terms of the parameter $t$.`,
      t`Differentiating it in $t$ gives the change in slope per unit of $t$, not per unit of $x$.`,
      t`To change to per unit of $x$, divide by $\frac{dx}{dt}$, how far $x$ moves per unit of $t$.`,
      t`Dividing $\frac{d^2y}{dt^2}$ by $\frac{d^2x}{dt^2}$ has no such meaning, and it gives wrong answers.`,
      t`In an **implicit** equation, $y$ stays a function of $x$ every time you differentiate.`,
    ],
    formal: [
      {
        title: "Differentiate the slope, then divide",
        points: [
          t`Let $x = f(t)$, $y = g(t)$; then $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ is a function of $t$.`,
          t`$\frac{d^2y}{dx^2}$ means $\frac{d}{dx}\left(\frac{dy}{dx}\right)$: differentiate the slope with respect to $x$.`,
          t`Chain rule: $\frac{d}{dx}\left(\frac{dy}{dx}\right)$ $= \frac{d}{dt}\left(\frac{dy}{dx}\right)$ $\cdot \frac{dt}{dx}$, and $\frac{dt}{dx} = 1 \Big/ \frac{dx}{dt}$.`,
          t`So $\frac{d^2y}{dx^2}$ $= \frac{d}{dt}\left(\frac{dy}{dx}\right) \Big/ \frac{dx}{dt}$, provided $\frac{dx}{dt} \ne 0$.`,
          t`**Example:** $x = t^2$, $y = t^3$ give $\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$.`,
          t`Then $\frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}$, and $\frac{3}{2} \div 2t = \frac{3}{4t}$, as the hook found.`,
        ],
      },
      {
        title: "Tempting rules that fail",
        points: [
          t`For $x = t^2$, $y = t^3$ the answer is $\frac{3}{4t}$; each shortcut below misses it.`,
          t`Ratio of second derivatives, $\frac{6t}{2} = 3t$: the first-derivative rule does not carry over.`,
          t`Stopping at $\frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}$ gives a rate per unit of $t$, not of $x$.`,
          t`$\frac{d^2y}{dt^2} \div \left(\frac{dx}{dt}\right)^2$ $= \frac{3}{2t}$ treats $\frac{dt}{dx}$ as a constant; it changes with $t$.`,
          t`Squaring the slope, $\left(\frac{3t}{2}\right)^2$, misreads the 2 in $\frac{d^2y}{dx^2}$: it counts differentiations.`,
          t`**Expanded:** $\frac{d^2y}{dx^2} = \frac{x'y'' - y'x''}{(x')^3}$, with $'$ meaning $\frac{d}{dt}$; keep that order on top.`,
        ],
      },
      {
        title: "Implicit functions",
        points: [
          t`An **implicit** equation, like $x^2 + y^2 = 25$, links $x$ and $y$ without solving for $y$.`,
          t`Write $y_1 = \frac{dy}{dx}$ and $y_2 = \frac{d^2y}{dx^2}$.`,
          t`Once: $2x + 2yy_1 = 0$, so $x + yy_1 = 0$ and $y_1 = -\frac{x}{y}$.`,
          t`Again, with $y$ and $y_1$ both functions of $x$: $1 + y_1^2 + yy_2 = 0$.`,
          t`At $(3, 4)$: $y_1 = -\frac{3}{4}$, so $1 + \frac{9}{16} + 4y_2 = 0$ and $y_2 = -\frac{25}{64}$.`,
          t`Holding $y$ fixed the second time drops the $y_1^2$ term and wrongly gives $-\frac{1}{4}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $x = 2at^2$ and $y = 4at$, where $a$ is a non-zero constant, find $\frac{d^2y}{dx^2}$.`,
      steps: [
        t`$\frac{dx}{dt} = 4at$ and $\frac{dy}{dt} = 4a$, so $\frac{dy}{dx} = \frac{4a}{4at} = \frac{1}{t}$.`,
        t`Differentiate the slope in $t$: $\frac{d}{dt}\left(\frac{1}{t}\right) = -\frac{1}{t^2}$.`,
        t`Divide by $\frac{dx}{dt} = 4at$: $\frac{d^2y}{dx^2} = -\frac{1}{t^2} \cdot \frac{1}{4at}$ $= -\frac{1}{4at^3}$.`,
        t`Check: dividing second derivatives gives $\frac{0}{4a} = 0$, but this curve, $y^2 = 8ax$, is a parabola that bends.`,
      ],
      answer: t`$\frac{d^2y}{dx^2} = -\frac{1}{4at^3}$`,
    },
    visualSpec: t`A slider moves $t$ along $x = t^2$, $y = t^3$; readouts show $\frac{dy}{dx}$, its rate in $t$, and that rate divided by $\frac{dx}{dt}$, beside the curve's bending.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Divides the second derivatives, $\frac{d^2y}{dx^2} = \frac{d^2y/dt^2}{d^2x/dt^2}$, copying the rule for $\frac{dy}{dx}$.`,
      remediation: t`$\frac{d^2y}{dx^2}$ is the derivative of $\frac{dy}{dx}$ with respect to $x$: differentiate $\frac{dy}{dx}$ in $t$, then divide by $\frac{dx}{dt}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M2",
      mistake: t`Differentiates $\frac{dy}{dx}$ with respect to $t$ and stops, never dividing by $\frac{dx}{dt}$.`,
      remediation: t`$\frac{d}{dt}\left(\frac{dy}{dx}\right)$ is a rate per unit of $t$. The chain rule turns it into one per unit of $x$: multiply by $\frac{dt}{dx} = 1 \Big/ \frac{dx}{dt}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M3",
      mistake: t`Uses $\frac{d^2y}{dx^2} = \frac{d^2y}{dt^2} \cdot \left(\frac{dt}{dx}\right)^2$, as if $\frac{dt}{dx}$ were a constant.`,
      remediation: t`$\frac{dt}{dx}$ changes with $t$, so differentiating $\frac{dy}{dt} \cdot \frac{dt}{dx}$ needs the product rule. Use $\frac{d}{dt}\left(\frac{dy}{dx}\right) \Big/ \frac{dx}{dt}$ instead.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M4",
      mistake: t`Reads $\frac{d^2y}{dx^2}$ as $\left(\frac{dy}{dx}\right)^2$.`,
      remediation: t`The 2 in $\frac{d^2y}{dx^2}$ counts differentiations, it is not a square: differentiate $\frac{dy}{dx}$ once more.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M5",
      mistake: t`In an implicit equation, treats $y$ as a constant when differentiating the second time.`,
      remediation: t`$y$ is still a function of $x$, so every $y$ brings a $y_1$ when differentiated: $\frac{d}{dx}(yy_1) = y_1^2 + yy_2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M6",
      mistake: t`Takes a quotient's numerator the wrong way round, $uv' - vu'$, so the sign of $\frac{d^2y}{dx^2}$ flips.`,
      remediation: t`$\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}$: the bottom times the top's derivative comes first. Check the sign at the end.`,
      fallback: { kind: "ext", topic: "quotient rule" },
    },
  ],
  engineNotes: [
    "C11-M1, C11-M2 and C11-M3 apply to parametric items only (C11-Q1 to C11-Q4); C11-M5 to implicit items only (C11-Q5, C11-Q6).",
    t`C11-M3 gives the key when $\frac{d^2x}{dt^2} = 0$ ($x$ linear in $t$), and C11-M1 and C11-M3 both give 0 when $y$ is linear in $t$ (as in the worked example): draw diagnosing items from other curves.`,
    t`C11-M5 gives the key at a point where $y_1 = 0$, since the dropped terms carry a factor $y_1$.`,
    "C11-M6 (the sign flip) is the book's own distractor in Misc I Q.11 (C11-Q2).",
    t`C11-Q3 is Ex 1.5 Q.2 (iii) at $\theta = \frac{\pi}{6}$: the book's $\theta = \frac{\pi}{2}$ makes $\frac{dx}{d\theta} = 0$, where the parametric rule does not apply. C11-Q5 changes Ex 1.5 Q.3 (xi)'s constant 10 to $-4$ so the curve has the point $(1, -1)$; C11-Q6 is Misc II Q.7 (i) with $a = 1$, $b = \sqrt{7}$.`,
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.2 (iv)" },
      stem: t`If $x = a\cos\theta$ and $y = b\sin\theta$, where $a$ and $b$ are non-zero constants, then the value of $\dfrac{d^2y}{dx^2}$ at $\theta = \dfrac{\pi}{4}$ is`,
      verify: { kind: "value", inputs: { X: "a*cos(theta)", Y: "b*sin(theta)", at: "pi/4" }, params: { form: "par" } },
      options: [
        { key: "A", text: t`$-\dfrac{2\sqrt{2}\,b}{a^2}$`, correct: true, value: "-2*sqrt(2)*b/a**2" },
        { key: "B", text: t`$\dfrac{2b}{a}$`, correct: false, misconceptionId: "C11-M2", value: "2*b/a" },
        { key: "C", text: t`$-\dfrac{\sqrt{2}\,b}{a^2}$`, correct: false, misconceptionId: "C11-M3", value: "-sqrt(2)*b/a**2" },
        { key: "D", text: t`$\dfrac{b^2}{a^2}$`, correct: false, misconceptionId: "C11-M4", value: "b**2/a**2" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = -a\sin\theta$ and $\frac{dy}{d\theta} = b\cos\theta$, so $\frac{dy}{dx} = -\frac{b}{a}\cot\theta$.`,
          t`$\frac{d}{d\theta}\left(-\frac{b}{a}\cot\theta\right) = \frac{b}{a}\operatorname{cosec}^2\theta$; divide by $-a\sin\theta$: $\frac{d^2y}{dx^2}$ $= -\frac{b}{a^2\sin^3\theta}$.`,
          t`At $\theta = \frac{\pi}{4}$, $\sin^3\theta = \frac{1}{2\sqrt{2}}$, so $\frac{d^2y}{dx^2} = -\frac{2\sqrt{2}\,b}{a^2}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Misc I Q.11" },
      stem: t`If $x = a(\cos\theta + \theta\sin\theta)$ and $y = a(\sin\theta - \theta\cos\theta)$, where $a$ is a non-zero constant, then the value of $\dfrac{d^2y}{dx^2}$ at $\theta = \dfrac{\pi}{4}$ is`,
      verify: { kind: "value", inputs: { X: "a*(cos(theta) + theta*sin(theta))", Y: "a*(sin(theta) - theta*cos(theta))", at: "pi/4" }, params: { form: "par" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C11-M2", value: "2" },
        { key: "B", text: t`$-\dfrac{8\sqrt{2}}{a\pi}$`, correct: false, misconceptionId: "C11-M6", value: "-8*sqrt(2)/(pi*a)" },
        { key: "C", text: t`$\dfrac{8\sqrt{2}}{a\pi}$`, correct: true, value: "8*sqrt(2)/(pi*a)" },
        { key: "D", text: t`$\dfrac{4 + \pi}{4 - \pi}$`, correct: false, misconceptionId: "C11-M1", value: "(pi + 4)/(4 - pi)" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = a(-\sin\theta + \sin\theta + \theta\cos\theta)$ $= a\theta\cos\theta$, and likewise $\frac{dy}{d\theta} = a\theta\sin\theta$.`,
          t`So $\frac{dy}{dx} = \tan\theta$, and $\frac{d}{d\theta}(\tan\theta) = \sec^2\theta$.`,
          t`Divide by $a\theta\cos\theta$: $\frac{d^2y}{dx^2} = \frac{1}{a\theta\cos^3\theta}$.`,
          t`At $\theta = \frac{\pi}{4}$, $\cos^3\theta = \frac{1}{2\sqrt{2}}$: $\frac{d^2y}{dx^2} = \frac{2\sqrt{2}}{a\pi/4}$ $= \frac{8\sqrt{2}}{a\pi}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.2 (iii)" },
      stem: t`If $x = \sin\theta$ and $y = \sin^3\theta$, then the value of $\dfrac{d^2y}{dx^2}$ at $\theta = \dfrac{\pi}{6}$ is`,
      verify: { kind: "value", inputs: { X: "sin(theta)", Y: "sin(theta)**3", at: "pi/6" }, params: { form: "par" } },
      options: [
        { key: "A", text: t`$-\dfrac{15}{4}$`, correct: false, misconceptionId: "C11-M1", value: "-15/4" },
        { key: "B", text: t`$\dfrac{5}{2}$`, correct: false, misconceptionId: "C11-M3", value: "5/2" },
        { key: "C", text: t`$\dfrac{9}{16}$`, correct: false, misconceptionId: "C11-M4", value: "9/16" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = \cos\theta$ and $\frac{dy}{d\theta} = 3\sin^2\theta\cos\theta$, so $\frac{dy}{dx} = 3\sin^2\theta$.`,
          t`$\frac{d}{d\theta}(3\sin^2\theta) = 6\sin\theta\cos\theta$; divide by $\cos\theta$: $\frac{d^2y}{dx^2} = 6\sin\theta$.`,
          t`At $\theta = \frac{\pi}{6}$: $6 \cdot \frac{1}{2} = 3$. Check: $y = x^3$, so $y_2 = 6x = 3$ at $x = \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.2 (i)" },
      stem: t`If $x = a(\theta - \sin\theta)$ and $y = a(1 - \cos\theta)$, where $a$ is a non-zero constant, then the value of $\dfrac{d^2y}{dx^2}$ at $\theta = \dfrac{\pi}{3}$ is`,
      verify: { kind: "value", inputs: { X: "a*(theta - sin(theta))", Y: "a*(1 - cos(theta))", at: "pi/3" }, params: { form: "par" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C11-M2", value: "-2" },
        { key: "B", text: t`$\dfrac{2}{a}$`, correct: false, misconceptionId: "C11-M3", value: "2/a" },
        { key: "C", text: t`$-\dfrac{4}{a}$`, correct: true, value: "-4/a" },
        { key: "D", text: t`$\dfrac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C11-M1", value: "sqrt(3)/3" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = a(1 - \cos\theta)$, $\frac{dy}{d\theta} = a\sin\theta$, so $\frac{dy}{dx} = \frac{\sin\theta}{1 - \cos\theta}$ $= \cot\frac{\theta}{2}$.`,
          t`$\frac{d}{d\theta}\left(\cot\frac{\theta}{2}\right) = -\frac{1}{2}\operatorname{cosec}^2\frac{\theta}{2}$, which is $-\frac{1}{2} \cdot 4 = -2$ at $\theta = \frac{\pi}{3}$.`,
          t`There $\frac{dx}{d\theta} = a\left(1 - \frac{1}{2}\right) = \frac{a}{2}$, so $\frac{d^2y}{dx^2} = \frac{-2}{a/2} = -\frac{4}{a}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.3 (xi)" },
      stem: t`If $x^2 + 6xy + y^2 = -4$, then the value of $\dfrac{d^2y}{dx^2}$ at the point $(1, -1)$ is`,
      verify: { kind: "value", inputs: { F: "x**2 + 6*x*y + y**2 + 4", x0: "1", y0: "-1" }, params: { form: "imp" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C11-M4", value: "1" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C11-M5", value: "-2" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C11-M6", value: "4" },
        { key: "D", text: t`$-4$`, correct: true, value: "-4" },
      ],
      solution: {
        steps: [
          t`Differentiate and halve: $x + 3y + (3x + y)y_1 = 0$. At $(1, -1)$: $-2 + 2y_1 = 0$, so $y_1 = 1$.`,
          t`Again, $y$ and $y_1$ depending on $x$: $1 + 3y_1 + (3 + y_1)y_1$ $+ (3x + y)y_2 = 0$.`,
          t`At $(1, -1)$ with $y_1 = 1$: $1 + 3 + 4 + 2y_2 = 0$, so $y_2 = -4$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Misc II Q.7 (i)" },
      stem: t`If $y^2 = \cos^2 x + 7\sin^2 x$, then the value of $\dfrac{d^2y}{dx^2}$ at the point $\left(\dfrac{\pi}{4}, 2\right)$ is`,
      verify: { kind: "value", inputs: { F: "y**2 - cos(x)**2 - 7*sin(x)**2", x0: "pi/4", y0: "2" }, params: { form: "imp" } },
      options: [
        { key: "A", text: t`$\dfrac{9}{8}$`, correct: false, misconceptionId: "C11-M6", value: "9/8" },
        { key: "B", text: t`$-\dfrac{9}{8}$`, correct: true, value: "-9/8" },
        { key: "C", text: t`$\dfrac{9}{4}$`, correct: false, misconceptionId: "C11-M4", value: "9/4" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C11-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`Differentiate: $2yy_1 = -2\cos x\sin x + 14\sin x\cos x$, so $yy_1 = 3\sin 2x$.`,
          t`At $\left(\frac{\pi}{4}, 2\right)$: $2y_1 = 3$, so $y_1 = \frac{3}{2}$.`,
          t`Differentiate $yy_1 = 3\sin 2x$ again: $y_1^2 + yy_2 = 6\cos 2x$.`,
          t`At $x = \frac{\pi}{4}$: $\frac{9}{4} + 2y_2 = 0$, so $y_2 = -\frac{9}{8}$.`,
        ],
      },
    },
  ],
};
