import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`For $y = x^3$, is $\frac{d^2y}{dx^2}$ the same as $\left(\frac{dy}{dx}\right)^2$? **The 2 sits where a square would go.**`,
    reveal: t`No. $\frac{dy}{dx} = 3x^2$, so $\left(\frac{dy}{dx}\right)^2 = 9x^4$. But differentiating $3x^2$ again gives $\frac{d^2y}{dx^2} = 6x$: the 2 counts differentiations.`,
  },
  explanation: {
    intuition: [
      t`The derivative $\frac{dy}{dx}$ is itself a function of $x$, so it can be differentiated again.`,
      t`Its derivative is the **second derivative**, written $\frac{d^2y}{dx^2}$, $y_2$ or $f''(x)$.`,
      t`It tells how fast the slope changes as $x$ moves.`,
      t`Differentiating $n$ times gives the $n$th derivative, $\frac{d^ny}{dx^n}$ or $y_n$.`,
      t`For $e^{ax}$, $\sin ax$, $\frac{1}{ax + b}$ and similar, every step makes the same change.`,
      t`Spot that change and you can write $y_n$ for any $n$.`,
    ],
    formal: [
      {
        title: "Second derivative",
        points: [
          t`The **second derivative** is the derivative of the derivative: $\frac{d^2y}{dx^2}$ $= \frac{d}{dx}\left(\frac{dy}{dx}\right)$.`,
          t`The book writes $\frac{dy}{dx}$ as $y_1$ and $\frac{d^2y}{dx^2}$ as $y_2$.`,
          t`The 2 in $\frac{d^2y}{dx^2}$ counts differentiations; it is not a square.`,
          t`Example: $y = x^3$ gives $y_1 = 3x^2$ and $y_2 = 6x$.`,
          t`But $\left(\frac{dy}{dx}\right)^2 = 9x^4$, a different function.`,
          t`For $y_2$ at a point, differentiate twice first, then put in the value of $x$.`,
        ],
      },
      {
        title: "Second derivative of a product",
        points: [
          t`Let $y = uv$, where $u$ and $v$ are functions of $x$.`,
          t`The product rule gives $y_1 = u'v + uv'$.`,
          t`Differentiate each of these two products again by the product rule.`,
          t`**Rule:** $(uv)'' = u''v + 2u'v' + uv''$.`,
          t`Both products give a term $u'v'$, so the middle term is $2u'v'$; don't drop it.`,
          t`Example: $\frac{d^2}{dx^2}(x\,e^{x})$ $= 0 + 2e^{x} + xe^{x}$.`,
        ],
      },
      {
        title: "Repeated inner factor",
        points: [
          t`Let $a$ and $b$ be constants, so the inside $ax + b$ has derivative $a$.`,
          t`By the chain rule, each differentiation of a function of $ax + b$ brings out one factor $a$.`,
          t`So $n$ differentiations bring out $a^{n}$, not just $a$.`,
          t`Example: $\frac{d^2}{dx^2}e^{3x}$ $= 3\cdot 3e^{3x} = 9e^{3x}$.`,
          t`**Rule:** $\frac{d^n}{dx^n}e^{ax + b} = a^{n}e^{ax + b}$.`,
          t`For a constant base $c > 0$: $\frac{d^n}{dx^n}c^{px + q}$ $= (p\log c)^{n}c^{px + q}$.`,
        ],
      },
      {
        title: "Sine and cosine",
        points: [
          t`Differentiating $\sin\theta$ gives $\cos\theta$ $= \sin\left(\theta + \frac{\pi}{2}\right)$: the wave moves on by $\frac{\pi}{2}$.`,
          t`Differentiating $\cos\theta$ gives $-\sin\theta$ $= \cos\left(\theta + \frac{\pi}{2}\right)$: the same shift.`,
          t`So for $\sin(ax + b)$, each step multiplies by $a$ and adds $\frac{\pi}{2}$ to the angle.`,
          t`**Rule:** $\frac{d^n}{dx^n}\sin(ax + b)$ $= a^{n}\sin\left(ax + b + \frac{n\pi}{2}\right)$.`,
          t`Likewise $\frac{d^n}{dx^n}\cos(ax + b)$ $= a^{n}\cos\left(ax + b + \frac{n\pi}{2}\right)$.`,
          t`Check $n = 2$: $\frac{d^2}{dx^2}\sin x$ $= \sin(x + \pi) = -\sin x$.`,
        ],
        figure: {
          alt: "The curve y = sin x and, appearing next, the curve y = cos x, the same wave moved π/2 to the left. An arrow from the lowest point of sin x at x = 3π/2 to the lowest point of cos x at x = π marks the shift of π/2.",
          axes: "xy",
          view: { x: [-0.5, 7], y: [-1.6, 1.6] },
          elements: [
            { kind: "curve", points: [[-0.5, -0.479], [-0.406, -0.395], [-0.312, -0.307], [-0.219, -0.217], [-0.125, -0.125], [-0.031, -0.031], [0.062, 0.062], [0.156, 0.156], [0.25, 0.247], [0.344, 0.337], [0.438, 0.424], [0.531, 0.507], [0.625, 0.585], [0.719, 0.658], [0.812, 0.726], [0.906, 0.787], [1, 0.841], [1.094, 0.888], [1.188, 0.927], [1.281, 0.958], [1.375, 0.981], [1.469, 0.995], [1.562, 1], [1.656, 0.996], [1.75, 0.984], [1.844, 0.963], [1.938, 0.934], [2.031, 0.896], [2.125, 0.85], [2.219, 0.797], [2.312, 0.737], [2.406, 0.671], [2.5, 0.598], [2.594, 0.521], [2.688, 0.439], [2.781, 0.353], [2.875, 0.263], [2.969, 0.172], [3.062, 0.079], [3.156, -0.015], [3.25, -0.108], [3.344, -0.201], [3.438, -0.292], [3.531, -0.38], [3.625, -0.465], [3.719, -0.546], [3.812, -0.622], [3.906, -0.692], [4, -0.757], [4.094, -0.815], [4.188, -0.865], [4.281, -0.908], [4.375, -0.944], [4.469, -0.97], [4.562, -0.989], [4.656, -0.998], [4.75, -0.999], [4.844, -0.991], [4.938, -0.975], [5.031, -0.95], [5.125, -0.916], [5.219, -0.875], [5.312, -0.825], [5.406, -0.769], [5.5, -0.706], [5.594, -0.636], [5.688, -0.561], [5.781, -0.481], [5.875, -0.397], [5.969, -0.309], [6.062, -0.219], [6.156, -0.127], [6.25, -0.033], [6.344, 0.061], [6.438, 0.154], [6.531, 0.246], [6.625, 0.335], [6.719, 0.422], [6.812, 0.505], [6.906, 0.584], [7, 0.657]] },
            { kind: "label", at: [1.57, 1], label: "y = sin x", labelAt: "n" },
            { kind: "curve", points: [[-0.5, 0.878], [-0.406, 0.919], [-0.312, 0.952], [-0.219, 0.976], [-0.125, 0.992], [-0.031, 1], [0.062, 0.998], [0.156, 0.988], [0.25, 0.969], [0.344, 0.941], [0.438, 0.906], [0.531, 0.862], [0.625, 0.811], [0.719, 0.753], [0.812, 0.688], [0.906, 0.617], [1, 0.54], [1.094, 0.459], [1.188, 0.374], [1.281, 0.286], [1.375, 0.195], [1.469, 0.102], [1.562, 0.008], [1.656, -0.085], [1.75, -0.178], [1.844, -0.27], [1.938, -0.359], [2.031, -0.444], [2.125, -0.526], [2.219, -0.604], [2.312, -0.676], [2.406, -0.742], [2.5, -0.801], [2.594, -0.854], [2.688, -0.899], [2.781, -0.936], [2.875, -0.965], [2.969, -0.985], [3.062, -0.997], [3.156, -1], [3.25, -0.994], [3.344, -0.98], [3.438, -0.957], [3.531, -0.925], [3.625, -0.885], [3.719, -0.838], [3.812, -0.783], [3.906, -0.722], [4, -0.654], [4.094, -0.58], [4.188, -0.501], [4.281, -0.418], [4.375, -0.331], [4.469, -0.241], [4.562, -0.149], [4.656, -0.056], [4.75, 0.038], [4.844, 0.131], [4.938, 0.223], [5.031, 0.313], [5.125, 0.401], [5.219, 0.485], [5.312, 0.565], [5.406, 0.64], [5.5, 0.709], [5.594, 0.772], [5.688, 0.828], [5.781, 0.877], [5.875, 0.918], [5.969, 0.951], [6.062, 0.976], [6.156, 0.992], [6.25, 0.999], [6.344, 0.998], [6.438, 0.988], [6.531, 0.969], [6.625, 0.942], [6.719, 0.907], [6.812, 0.863], [6.906, 0.812], [7, 0.754]], tone: "good", dashed: true, step: 1 },
            { kind: "label", at: [6.28, 1], label: "y = cos x", labelAt: "nw", tone: "good", step: 1 },
            { kind: "vector", from: [4.71, -1], to: [3.14, -1], label: "π/2", labelAt: "s", tone: "muted", step: 1 },
          ],
        },
      },
      {
        title: "Powers, reciprocals and logs",
        points: [
          t`For $y = (ax + b)^{m}$, each step brings down the **current** power: $m$, then $m - 1$, then $m - 2$.`,
          t`So $y_n = m(m - 1)\cdots(m - n + 1)$ $\times a^{n}(ax + b)^{m - n}$.`,
          t`For $\frac{1}{ax + b}$, $m = -1$, and the factors are $(-1)(-2)\cdots(-n) = (-1)^{n}n!$.`,
          t`Here $n!$, read **$n$ factorial**, is $1\cdot 2\cdot 3\cdots n$; so $\frac{d^n}{dx^n}\frac{1}{ax + b}$ $= \frac{(-1)^{n}n!\,a^{n}}{(ax + b)^{n + 1}}$.`,
          t`For $\log(ax + b)$, $y_1 = \frac{a}{ax + b}$; then use the reciprocal rule $n - 1$ more times.`,
          t`So $\frac{d^n}{dx^n}\log(ax + b)$ $= \frac{(-1)^{n - 1}(n - 1)!\,a^{n}}{(ax + b)^{n}}$.`,
        ],
      },
      {
        title: "Exponential times sine",
        points: [
          t`For $y = e^{ax}\sin(bx + c)$, write $a = r\cos\alpha$ and $b = r\sin\alpha$.`,
          t`Then $r = \sqrt{a^2 + b^2}$ and $\alpha = \tan^{-1}\frac{b}{a}$.`,
          t`$y_1 = e^{ax}[a\sin(bx + c) + b\cos(bx + c)]$ $= r\,e^{ax}\sin(bx + c + \alpha)$.`,
          t`So each step multiplies by $r$ and adds $\alpha$ to the angle.`,
          t`**Rule:** $y_n = (a^2 + b^2)^{\frac{n}{2}}e^{ax}$ $\sin(bx + c + n\alpha)$.`,
          t`The same holds with $\cos$ in place of $\sin$.`,
        ],
      },
      {
        title: "Five traps",
        points: [
          t`$\frac{d^2y}{dx^2}$ is not $\left(\frac{dy}{dx}\right)^2$.`,
          t`$(uv)''$ has a middle term: $u''v + 2u'v' + uv''$.`,
          t`The inner factor $a$ comes out $n$ times: $a^{n}$, not $a$.`,
          t`$\frac{d}{dx}\cos u = -\sin u\cdot u'$; each step of $\sin$ or $\cos$ adds $\frac{\pi}{2}$ to the angle.`,
          t`Powers fall each step: $\frac{d^3}{dx^3}\frac{1}{x} = -\frac{6}{x^4}$, not $-\frac{1}{x^4}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\frac{d^2y}{dx^2}$ for $y = x^2\sin 3x$.`,
      steps: [
        t`Take $u = x^2$ and $v = \sin 3x$, so $u' = 2x$ and $u'' = 2$.`,
        t`By the chain rule, $v' = 3\cos 3x$ and $v'' = -9\sin 3x$.`,
        t`Use $(uv)'' = u''v + 2u'v' + uv''$.`,
        t`$y_2 = 2\sin 3x + 2(2x)(3\cos 3x)$ $- 9x^2\sin 3x$.`,
        t`So $y_2 = (2 - 9x^2)\sin 3x$ $+ 12x\cos 3x$.`,
      ],
      answer: t`$\frac{d^2y}{dx^2} = (2 - 9x^2)\sin 3x$ $+ 12x\cos 3x$`,
    },
    visualSpec: t`A slider moves $x$ along $y = \sin x$, with the graphs of $y_1$ and $y_2$ drawn below it, so the shift of $\frac{\pi}{2}$ at each step shows.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Reading $\frac{d^2y}{dx^2}$ as $\left(\frac{dy}{dx}\right)^2$, and $\frac{d^ny}{dx^n}$ as $\left(\frac{dy}{dx}\right)^n$`,
      remediation: t`$\frac{d^2y}{dx^2}$ means differentiate $\frac{dy}{dx}$ once more; the 2 counts differentiations, it is not a square.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Taking the inner factor only once: $\frac{d^n}{dx^n}f(ax + b) = a\,f^{(n)}(ax + b)$`,
      remediation: t`Every differentiation uses the chain rule again, so each brings out another $a$: $n$ steps give $a^{n}$, as in $\frac{d^2}{dx^2}e^{3x} = 9e^{3x}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M3",
      mistake: t`Dropping the middle term of a product: $(uv)'' = u''v + uv''$`,
      remediation: t`Differentiate $u'v + uv'$ term by term: each term gives a $u'v'$, so $(uv)'' = u''v + 2u'v' + uv''$.`,
      fallback: { kind: "ext", topic: "product rule" },
    },
    {
      id: "C10-M4",
      mistake: t`Bringing down the starting power every time, so no $n!$: $\frac{d^n}{dx^n}\frac{1}{ax + b}$ $= \frac{(-1)^{n}a^{n}}{(ax + b)^{n + 1}}$`,
      remediation: t`The power falls by 1 each step, so the factors are $-1, -2, \ldots, -n$, giving $(-1)^{n}n!$; for $\log(ax + b)$ it is $(-1)^{n - 1}(n - 1)!$.`,
      fallback: { kind: "ext", topic: "power rule" },
    },
    {
      id: "C10-M5",
      mistake: t`Dropping the minus sign: $\frac{d}{dx}\cos u = \sin u\cdot u'$`,
      remediation: t`$\frac{d}{dx}\cos u = -\sin u\cdot u'$; when you differentiate again, carry that minus sign through.`,
      fallback: { kind: "ext", topic: "derivatives of trigonometric functions" },
    },
    {
      id: "C10-M6",
      mistake: t`Leaving out the phase shift: $\frac{d^n}{dx^n}\sin(ax + b) = a^{n}\sin(ax + b)$, as if sine repeated like $e^{ax}$`,
      remediation: t`Each differentiation turns $\sin$ into $\cos$ and back, which adds $\frac{\pi}{2}$ to the angle: $\frac{d^n}{dx^n}\sin(ax + b)$ $= a^{n}\sin\left(ax + b + \frac{n\pi}{2}\right)$, and the same for $\cos$.`,
      fallback: { kind: "ext", topic: "derivatives of trigonometric functions" },
    },
  ],
  engineNotes: [
    "params.form is prod (y = u*v; inputs u, v and au, av, the x-coefficient inside each factor), recip, log, sin or cos (y = f(ax + b); inputs a, b). Input k is the order, a whole number or the symbol n; at is the point when the item asks for a value.",
    "C10-M2 gives the key when the inner factor is 1 or -1; C10-M4 gives the key for k = 1 (and k = 2 with log); C10-M6 gives the key when k is a multiple of 4; C10-M5 gives the key for sin(ax + b) when k leaves remainder 0 or 1 on division by 4, and for cos(ax + b) when it leaves 0 or 3; C10-M3 needs the second derivative of a product. Draw diagnosing items away from these.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.1 (iii)" },
      stem: t`If $y = e^{4x}\cos 5x$, then $\dfrac{d^2y}{dx^2} =$`,
      verify: { kind: "value", inputs: { u: "exp(4*x)", v: "cos(5*x)", au: "4", av: "5", k: "2" }, params: { form: "prod" } },
      options: [
        { key: "A", text: t`$-e^{4x}(\cos 5x + 40\sin 5x)$`, correct: false, misconceptionId: "C10-M2", value: "-(40*sin(5*x) + cos(5*x))*exp(4*x)" },
        { key: "B", text: t`$-9e^{4x}\cos 5x$`, correct: false, misconceptionId: "C10-M3", value: "-9*exp(4*x)*cos(5*x)" },
        { key: "C", text: t`$e^{4x}(41\cos 5x + 40\sin 5x)$`, correct: false, misconceptionId: "C10-M5", value: "(40*sin(5*x) + 41*cos(5*x))*exp(4*x)" },
        { key: "D", text: t`$-e^{4x}(9\cos 5x + 40\sin 5x)$`, correct: true, value: "-(40*sin(5*x) + 9*cos(5*x))*exp(4*x)" },
      ],
      solution: {
        steps: [
          t`Take $u = e^{4x}$ and $v = \cos 5x$: $u' = 4e^{4x}$, $u'' = 16e^{4x}$.`,
          t`$v' = -5\sin 5x$ and $v'' = -25\cos 5x$.`,
          t`$y_2 = u''v + 2u'v' + uv''$ $= 16e^{4x}\cos 5x$ $- 40e^{4x}\sin 5x$ $- 25e^{4x}\cos 5x$.`,
          t`So $y_2 = -e^{4x}(9\cos 5x + 40\sin 5x)$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.1 (ii)" },
      stem: t`If $y = e^{2x}\tan x$, then the value of $\dfrac{d^2y}{dx^2}$ at $x = \dfrac{\pi}{4}$ is`,
      verify: { kind: "value", inputs: { u: "exp(2*x)", v: "tan(x)", au: "2", av: "1", k: "2", at: "pi/4" }, params: { form: "prod" } },
      options: [
        { key: "A", text: t`$16e^{\frac{\pi}{2}}$`, correct: true, value: "16*exp(pi/2)" },
        { key: "B", text: t`$16e^{\pi}$`, correct: false, misconceptionId: "C10-M1", value: "16*exp(pi)" },
        { key: "C", text: t`$14e^{\frac{\pi}{2}}$`, correct: false, misconceptionId: "C10-M2", value: "14*exp(pi/2)" },
        { key: "D", text: t`$8e^{\frac{\pi}{2}}$`, correct: false, misconceptionId: "C10-M3", value: "8*exp(pi/2)" },
      ],
      solution: {
        steps: [
          t`Take $u = e^{2x}$: $u' = 2e^{2x}$ and $u'' = 4e^{2x}$.`,
          t`Take $v = \tan x$: $v' = \sec^2 x$ and $v'' = 2\sec^2 x\tan x$.`,
          t`At $x = \frac{\pi}{4}$: $\tan x = 1$ and $\sec^2 x = 2$, so $v' = 2$ and $v'' = 4$.`,
          t`$y_2 = u''v + 2u'v' + uv''$ $= e^{\frac{\pi}{2}}(4 + 8 + 4)$ $= 16e^{\frac{\pi}{2}}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.4 (x)" },
      stem: t`If $y = \dfrac{1}{3x - 5}$, then $\dfrac{d^ny}{dx^n} =$`,
      verify: { kind: "value", inputs: { a: "3", b: "-5", k: "n" }, params: { form: "recip" } },
      options: [
        { key: "A", text: t`$\dfrac{(-1)^n\,3^n}{(3x - 5)^{n + 1}}$`, correct: false, misconceptionId: "C10-M4", value: "(-3)**n*(3*x - 5)**(-n - 1)" },
        { key: "B", text: t`$\dfrac{(-1)^n\,n!\,3^n}{(3x - 5)^{n + 1}}$`, correct: true, value: "(-3)**n*(3*x - 5)**(-n - 1)*gamma(n + 1)" },
        { key: "C", text: t`$\dfrac{(-1)^n\,3^n}{(3x - 5)^{2n}}$`, correct: false, misconceptionId: "C10-M1", value: "(-3/(3*x - 5)**2)**n" },
        { key: "D", text: t`$\dfrac{(-1)^n\,n!\cdot 3}{(3x - 5)^{n + 1}}$`, correct: false, misconceptionId: "C10-M2", value: "3*(-3)**n*(3*x - 5)**(-n - 1)*gamma(n + 1)/3**n" },
      ],
      solution: {
        steps: [
          t`Write $y = (3x - 5)^{-1}$, so $y_1 = (-1)(3x - 5)^{-2}\cdot 3$.`,
          t`$y_2 = (-1)(-2)(3x - 5)^{-3}\cdot 3^2$ and $y_3 = (-1)(-2)(-3)$ $\times (3x - 5)^{-4}\cdot 3^3$.`,
          t`After $n$ steps the factors are $(-1)(-2)\cdots(-n) = (-1)^{n}n!$ and $3^{n}$.`,
          t`So $y_n = \frac{(-1)^{n}\,n!\,3^{n}}{(3x - 5)^{n + 1}}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.4 (ix)" },
      stem: t`If $y = \log(2x + 3)$, then the value of $\dfrac{d^4y}{dx^4}$ at $x = -1$ is`,
      verify: { kind: "value", inputs: { a: "2", b: "3", k: "4", at: "-1" }, params: { form: "log" } },
      options: [
        { key: "A", text: t`$-12$`, correct: false, misconceptionId: "C10-M2", value: "-12" },
        { key: "B", text: t`$-16$`, correct: false, misconceptionId: "C10-M4", value: "-16" },
        { key: "C", text: t`$-96$`, correct: true, value: "-96" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C10-M1", value: "16" },
      ],
      solution: {
        steps: [
          t`$y_1 = \frac{2}{2x + 3} = 2(2x + 3)^{-1}$.`,
          t`$y_2 = -4(2x + 3)^{-2}$ and $y_3 = 16(2x + 3)^{-3}$.`,
          t`$y_4 = 16(-3)(2x + 3)^{-4}\cdot 2$ $= -96(2x + 3)^{-4}$.`,
          t`At $x = -1$, $2x + 3 = 1$, so $y_4 = -96$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.4 (viii)" },
      stem: t`If $y = \cos(3 - 2x)$, then $\dfrac{d^ny}{dx^n} =$`,
      verify: { kind: "value", inputs: { a: "-2", b: "3", k: "n" }, params: { form: "cos" } },
      options: [
        { key: "A", text: t`$(-2)^n\cos\left(3 - 2x + \frac{n\pi}{2}\right)$`, correct: true, value: "(-2)**n*cos(pi*n/2 - 2*x + 3)" },
        { key: "B", text: t`$2^n\sin^n(3 - 2x)$`, correct: false, misconceptionId: "C10-M1", value: "(-2*sin(2*x - 3))**n" },
        { key: "C", text: t`$-2\cos\left(3 - 2x + \frac{n\pi}{2}\right)$`, correct: false, misconceptionId: "C10-M2", value: "-2*cos(pi*n/2 - 2*x + 3)" },
        { key: "D", text: t`$(-2)^n\cos(3 - 2x)$`, correct: false, misconceptionId: "C10-M6", value: "(-2)**n*cos(2*x - 3)" },
      ],
      solution: {
        steps: [
          t`Here the inside is $3 - 2x$, so $a = -2$.`,
          t`Each step multiplies by $-2$ and adds $\frac{\pi}{2}$ to the angle.`,
          t`Check: $y_1 = 2\sin(3 - 2x)$ $= (-2)\cos\left(3 - 2x + \frac{\pi}{2}\right)$.`,
          t`So $y_n = (-2)^{n}\cos\left(3 - 2x + \frac{n\pi}{2}\right)$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.4 (vii)" },
      stem: t`If $y = \sin(2x + 1)$, then $\dfrac{d^3y}{dx^3} =$`,
      verify: { kind: "value", inputs: { a: "2", b: "1", k: "3" }, params: { form: "sin" } },
      options: [
        { key: "A", text: t`$-8\cos(2x + 1)$`, correct: true, value: "-8*cos(2*x + 1)" },
        { key: "B", text: t`$8\cos^3(2x + 1)$`, correct: false, misconceptionId: "C10-M1", value: "8*cos(2*x + 1)**3" },
        { key: "C", text: t`$8\cos(2x + 1)$`, correct: false, misconceptionId: "C10-M5", value: "8*cos(2*x + 1)" },
        { key: "D", text: t`$8\sin(2x + 1)$`, correct: false, misconceptionId: "C10-M6", value: "8*sin(2*x + 1)" },
      ],
      solution: {
        steps: [
          t`$y_1 = 2\cos(2x + 1)$.`,
          t`$y_2 = -4\sin(2x + 1)$, since $\frac{d}{dx}\cos u = -\sin u\cdot u'$.`,
          t`$y_3 = -8\cos(2x + 1)$.`,
        ],
      },
    },
  ],
};
