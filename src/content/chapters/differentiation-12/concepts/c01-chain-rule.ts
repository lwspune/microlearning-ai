import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Expand $(2x + 1)^2 = 4x^2 + 4x + 1$: its derivative is $8x + 4$. **So why does the power rule's $2(2x + 1)$ give only half of it?**`,
    reveal: t`The power rule alone treats $2x + 1$ like a plain $x$. But $2x + 1$ grows twice as fast as $x$, so multiply by its derivative, $2$: $2(2x + 1)\cdot 2 = 8x + 4$.`,
  },
  explanation: {
    intuition: [
      t`A **composite function** is a function of a function, like $\sin(x^2)$: square $x$ first, then take the sine.`,
      t`The function applied last is the **outside**; what it acts on is the **inside**.`,
      t`When $x$ changes, the inside changes, and that change drives the outside.`,
      t`If $u$ moves 3 times as fast as $x$, and $y$ twice as fast as $u$, then $y$ moves 6 times as fast.`,
      t`Rates multiply, so differentiate the outside, keep the inside as it is, and multiply by the inside's derivative.`,
      t`Example: $\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$.`,
    ],
    formal: [
      {
        title: "The chain rule",
        points: [
          t`Let $y = f(u)$ and $u = g(x)$ be differentiable, so that $y = f[g(x)]$.`,
          t`**Chain rule:** $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$.`,
          t`In function notation: $\frac{d}{dx}f[g(x)]$ $= f'[g(x)]\cdot g'(x)$.`,
          t`The outside's derivative $f'$ is taken at $g(x)$, the inside, not at $x$.`,
          t`Example: $\frac{d}{dx}\tan(5x) = \sec^2(5x)\cdot 5$ $= 5\sec^2 5x$.`,
        ],
      },
      {
        title: "Why the rule holds",
        points: [
          t`Let $x$ change by a small amount $\Delta x$; then $u$ changes by $\Delta u$, and $y$ by $\Delta y$.`,
          t`When $\Delta u \neq 0$, $\frac{\Delta y}{\Delta x} = \frac{\Delta y}{\Delta u}\cdot\frac{\Delta u}{\Delta x}$.`,
          t`As $\Delta x \to 0$, $\Delta u \to 0$ too, because $g$ is continuous.`,
          t`Taking limits gives $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$.`,
        ],
      },
      {
        title: "Powers and roots of a function",
        points: [
          t`A **power of a function**, $[g(x)]^n$, has outside $u^n$ and inside $g(x)$.`,
          t`So $\frac{d}{dx}[g(x)]^n = n[g(x)]^{n-1}\cdot g'(x)$.`,
          t`A root is the power $\frac{1}{2}$: $\frac{d}{dx}\sqrt{g(x)} = \frac{g'(x)}{2\sqrt{g(x)}}$.`,
          t`A function in the denominator is a negative power: $\frac{1}{g^n} = g^{-n}$.`,
          t`Subtract 1 from a negative index too: $-4$ becomes $-5$, not $-3$.`,
          t`Example: $\frac{d}{dx}(x^2 + 1)^{-2}$ $= -2(x^2 + 1)^{-3}\cdot 2x$.`,
        ],
      },
      {
        title: "Chains of three functions",
        points: [
          t`Some functions have three layers, like $\sin^3(2x)$: double $x$, take the sine, then cube.`,
          t`Work from the outside in, writing one derivative for each layer.`,
          t`$\frac{d}{dx}f\{g[h(x)]\}$ $= f'\{g[h(x)]\}\cdot g'[h(x)]\cdot h'(x)$.`,
          t`Example: $\frac{d}{dx}\sin^3(2x)$ $= 3\sin^2(2x)\cdot\cos(2x)\cdot 2$.`,
          t`Three layers give three factors: count them before you finish.`,
        ],
      },
      {
        title: "Values from a table",
        points: [
          t`To find $\frac{d}{dx}f[g(x)]$ at $x = a$, first find the inside, $g(a)$.`,
          t`Then read $f'$ at $g(a)$, not at $a$.`,
          t`Multiply by $g'(a)$: the answer is $f'[g(a)]\cdot g'(a)$.`,
          t`Example: if $g(1) = 3$, $g'(1) = 2$ and $f'(3) = 5$, the derivative at $x = 1$ is $5 \times 2 = 10$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = \cos^3(x^2 + 1)$ with respect to $x$.`,
      steps: [
        t`Three layers: $x^2 + 1$ inside, then the cosine, then the cube.`,
        t`Outside: $\frac{d}{du}u^3 = 3u^2$, which gives the factor $3\cos^2(x^2 + 1)$.`,
        t`Middle: $\frac{d}{du}\cos u = -\sin u$, kept at the inside: $-\sin(x^2 + 1)$.`,
        t`Inside: $\frac{d}{dx}(x^2 + 1) = 2x$.`,
        t`Multiply the three factors: $3\cos^2(x^2 + 1)$ $\cdot(-\sin(x^2 + 1))\cdot 2x$.`,
      ],
      answer: t`$\frac{dy}{dx}$ $= -6x\cos^2(x^2 + 1)\sin(x^2 + 1)$`,
    },
    visualSpec: t`Two linked gears: turn $x$ and watch $u$ turn $g'(x)$ times as fast, and $y$ turn $f'(u)$ times as fast as $u$, so $y$ turns at the product of the two rates.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Leaving off the derivative of the innermost function: $\frac{d}{dx}\sin(x^2) = \cos(x^2)$`,
      remediation: t`Every layer gives a factor, down to the innermost one. Multiply by the inside's derivative: $\frac{d}{dx}f[g(x)] = f'[g(x)]\cdot g'(x)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Taking the outside's derivative at $x$ instead of at the inside: $\frac{d}{dx}\sin(x^2) = \cos x\cdot 2x$`,
      remediation: t`Keep the inside as it is when you differentiate the outside: $f'$ is taken at $g(x)$, so $\frac{d}{dx}f[g(x)] = f'[g(x)]\cdot g'(x)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Putting the inside's derivative inside the outside's derivative: $\frac{d}{dx}\sin(x^2) = \cos 2x$, $\frac{d}{dx}g^2 = 2g'$`,
      remediation: t`The inside stays as it is inside $f'$; its derivative multiplies from outside: $\frac{d}{dx}f[g(x)] = f'[g(x)]\cdot g'(x)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Moving a negative index towards zero: $\frac{d}{dx}g^{-5} = -5g^{-4}g'$`,
      remediation: t`The power rule always subtracts 1 from the index, and $-5 - 1 = -6$: $\frac{d}{dx}g^{-5} = -5g^{-6}g'$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C01-M5",
      mistake: t`Skipping the middle layer of a three-layer chain: $\frac{d}{dx}\sin^3(2x) = 3\sin^2(2x)\cdot 2$`,
      remediation: t`Each layer gives one factor, so three layers give three: $f'\{g[h(x)]\}\cdot g'[h(x)]\cdot h'(x)$. Don't drop the middle one.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "The models read the layers from the inputs: outer and an optional mid (in u), and inner (in x); a is the point when the item asks for a value. A table item gives a, g, gp and fp as (x, value) pairs and asks for the derivative of f[g(x)] at a.",
    "C01-M4 needs an outer layer k*u**n with n < 0; C01-M5 needs three layers (a mid input). On a three-layer item C01-M1 drops the innermost factor and C01-M5 the middle one.",
    "C01-M2 gives the key when the inside is x itself; C01-M3 needs f' at g'(a), so a table item must list it.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.1 (i)" },
      stem: t`If $y = (x^3 - 2x - 1)^5$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { outer: "u**5", inner: "x**3 - 2*x - 1" } },
      options: [
        { key: "A", text: t`$5(x^3 - 2x - 1)^4(3x^2 - 2)$`, correct: true, value: "(15*x**2 - 10)*(-x**3 + 2*x + 1)**4" },
        { key: "B", text: t`$5(x^3 - 2x - 1)^4$`, correct: false, misconceptionId: "C01-M1", value: "5*(-x**3 + 2*x + 1)**4" },
        { key: "C", text: t`$5x^4(3x^2 - 2)$`, correct: false, misconceptionId: "C01-M2", value: "x**4*(15*x**2 - 10)" },
        { key: "D", text: t`$5(3x^2 - 2)^4$`, correct: false, misconceptionId: "C01-M3", value: "5*(3*x**2 - 2)**4" },
      ],
      solution: {
        steps: [
          t`Outside $u^5$, inside $u = x^3 - 2x - 1$, so $\frac{du}{dx} = 3x^2 - 2$.`,
          t`$\frac{dy}{dx} = 5u^4\cdot\frac{du}{dx}$ $= 5(x^3 - 2x - 1)^4(3x^2 - 2)$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.2 (i)" },
      stem: t`If $y = \cos(x^2 + a^2)$, where $a$ is a constant, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { outer: "cos(u)", inner: "x**2 + a**2" } },
      options: [
        { key: "A", text: t`$-2x\sin(x^2 + a^2)$`, correct: true, value: "-2*x*sin(a**2 + x**2)" },
        { key: "B", text: t`$-\sin(x^2 + a^2)$`, correct: false, misconceptionId: "C01-M1", value: "-sin(a**2 + x**2)" },
        { key: "C", text: t`$-2x\sin x$`, correct: false, misconceptionId: "C01-M2", value: "-2*x*sin(x)" },
        { key: "D", text: t`$-\sin 2x$`, correct: false, misconceptionId: "C01-M3", value: "-sin(2*x)" },
      ],
      solution: {
        steps: [
          t`Outside $\cos u$, inside $u = x^2 + a^2$; $a$ is a constant, so $\frac{du}{dx} = 2x$.`,
          t`$\frac{dy}{dx} = -\sin u\cdot\frac{du}{dx}$ $= -2x\sin(x^2 + a^2)$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.1.3 SolvedEx.1 (vi)" },
      stem: t`If $y = \dfrac{3}{(2x^2 - 7)^5}$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { outer: "3*u**(-5)", inner: "2*x**2 - 7" } },
      options: [
        { key: "A", text: t`$\dfrac{-15}{(2x^2 - 7)^6}$`, correct: false, misconceptionId: "C01-M1", value: "-15/(2*x**2 - 7)**6" },
        { key: "B", text: t`$\dfrac{-60}{x^5}$`, correct: false, misconceptionId: "C01-M2", value: "-60/x**5" },
        { key: "C", text: t`$\dfrac{-60x}{(2x^2 - 7)^6}$`, correct: true, value: "-60*x/(2*x**2 - 7)**6" },
        { key: "D", text: t`$\dfrac{-60x}{(2x^2 - 7)^4}$`, correct: false, misconceptionId: "C01-M4", value: "-60*x/(2*x**2 - 7)**4" },
      ],
      solution: {
        steps: [
          t`Write $y = 3(2x^2 - 7)^{-5}$: outside $3u^{-5}$, inside $u = 2x^2 - 7$.`,
          t`$\frac{dy}{dx} = -15u^{-6}\cdot 4x$, since $-5 - 1 = -6$.`,
          t`So $\frac{dy}{dx} = \frac{-60x}{(2x^2 - 7)^6}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.1.3 SolvedEx.2 (ii)" },
      stem: t`If $y = \cot^2(x^3)$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { outer: "u**2", mid: "cot(u)", inner: "x**3" } },
      options: [
        { key: "A", text: t`$-6x^2\cot(x^3)\operatorname{cosec}^2(x^3)$`, correct: true, value: "-6*x**2*cot(x**3)/sin(x**3)**2" },
        { key: "B", text: t`$6x^2\cot(x^3)$`, correct: false, misconceptionId: "C01-M5", value: "6*x**2*cot(x**3)" },
        { key: "C", text: t`$-2\cot(x^3)\operatorname{cosec}^2(x^3)$`, correct: false, misconceptionId: "C01-M1", value: "-2*cot(x**3)/sin(x**3)**2" },
        { key: "D", text: t`$-6x^2\operatorname{cosec}^2(x^3)$`, correct: false, misconceptionId: "C01-M3", value: "-6*x**2/sin(x**3)**2" },
      ],
      solution: {
        steps: [
          t`Three layers: $y = u^2$, $u = \cot v$, $v = x^3$.`,
          t`One factor per layer: $2\cot(x^3)$, then $-\operatorname{cosec}^2(x^3)$, then $3x^2$.`,
          t`Multiply: $\frac{dy}{dx}$ $= -6x^2\cot(x^3)\operatorname{cosec}^2(x^3)$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.4 (i)" },
      stem: t`For two functions $f$ and $g$: $g(2) = 6$, $g'(2) = 4$, $f'(2) = -3$, $f'(4) = 5$ and $f'(6) = -4$. If $r(x) = f[g(x)]$, then $r'(2) =$`,
      verify: { kind: "value", inputs: { a: "2", g: "((2, 6), (4, 4), (6, 2))", gp: "((2, 4), (4, -6), (6, 7))", fp: "((2, -3), (4, 5), (6, -4))" } },
      options: [
        { key: "A", text: t`$-16$`, correct: true, value: "-16" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C01-M1", value: "-4" },
        { key: "C", text: t`$-12$`, correct: false, misconceptionId: "C01-M2", value: "-12" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C01-M3", value: "5" },
      ],
      solution: {
        steps: [
          t`By the chain rule, $r'(2) = f'[g(2)]\cdot g'(2)$.`,
          t`The inside is $g(2) = 6$, so read $f'(6) = -4$; and $g'(2) = 4$.`,
          t`$r'(2) = -4 \times 4 = -16$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.2 (iv)" },
      stem: t`If $y = \sqrt{\tan\sqrt{x}}$, then the value of $\dfrac{dy}{dx}$ at $x = \dfrac{\pi^2}{16}$ is`,
      verify: { kind: "value", inputs: { outer: "sqrt(u)", mid: "tan(u)", inner: "sqrt(x)", a: "pi**2/16" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
        { key: "B", text: t`$\frac{8}{\pi^{2}}$`, correct: false, misconceptionId: "C01-M2", value: "8/pi**2" },
        { key: "C", text: t`$\frac{2}{\pi}$`, correct: true, value: "2/pi" },
        { key: "D", text: t`$\frac{1}{\pi}$`, correct: false, misconceptionId: "C01-M5", value: "1/pi" },
      ],
      solution: {
        steps: [
          t`Three layers: $y = \sqrt{u}$, $u = \tan v$, $v = \sqrt{x}$.`,
          t`One factor per layer: $\frac{1}{2\sqrt{\tan\sqrt{x}}}$, then $\sec^2\sqrt{x}$, then $\frac{1}{2\sqrt{x}}$.`,
          t`At $x = \frac{\pi^2}{16}$: $\sqrt{x} = \frac{\pi}{4}$, $\tan\frac{\pi}{4} = 1$, $\sec^2\frac{\pi}{4} = 2$.`,
          t`$\frac{dy}{dx} = \frac{1}{2}\cdot 2\cdot\frac{2}{\pi} = \frac{2}{\pi}$.`,
        ],
      },
    },
  ],
};
