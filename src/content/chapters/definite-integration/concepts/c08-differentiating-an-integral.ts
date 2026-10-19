import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`No standard formula integrates $e^{t^2}$. **Can you still find $\frac{d}{dx}\int_0^x e^{t^2}\,dt$?**`,
    reveal: t`Yes: it is $e^{x^2}$. Differentiating undoes integrating, so you never need the integral itself.`,
  },
  explanation: {
    intuition: [
      t`An integral with a variable limit, like $\phi(x) = \int_a^x f(t)\,dt$, is a **function** of $x$.`,
      t`Here $t$ is a **dummy variable**: it only runs from $a$ to $x$, and any letter would do.`,
      t`As $x$ moves, $\phi(x)$ changes at the rate $f(x)$, so $\phi'(x) = f(x)$.`,
      t`Differentiating an integral gives back the integrand; integrating a derivative gives back the change in the function.`,
      t`When the limit is $g(x)$, the chain rule adds the factor $g'(x)$.`,
      t`A constant limit adds nothing to the derivative.`,
    ],
    formal: [
      {
        title: "A function made by an integral",
        points: [
          t`Let $F$ be an antiderivative of $f$, so $F' = f$.`,
          t`By the fundamental theorem, $\phi(x) = \int_a^x f(t)\,dt$ $= F(x) - F(a)$.`,
          t`$F(a)$ is a constant, so $\phi'(x) = F'(x) = f(x)$.`,
          t`Equal limits give $0$: $\phi(a) = \int_a^a f(t)\,dt = 0$.`,
          t`So $\phi$ increases where $f(x) > 0$ and decreases where $f(x) < 0$.`,
          t`Example: $\phi(x) = \int_0^x (t - 1)(t - 3)\,dt$ increases for $x < 1$ and for $x > 3$.`,
        ],
      },
      {
        title: "When the limit is g(x)",
        points: [
          t`Now let the upper limit be a function $g(x)$, with $a$ a constant.`,
          t`Then $\int_a^{g(x)} f(t)\,dt = F(g(x)) - F(a)$.`,
          t`The chain rule gives $\frac{d}{dx}F(g(x)) = F'(g(x))\,g'(x)$.`,
          t`So $\frac{d}{dx}\int_a^{g(x)} f(t)\,dt$ $= f(g(x))\,g'(x)$.`,
          t`The constant $a$ gives $0$, not $-f(a)$: $F(a)$ is a fixed number.`,
          t`Example: $\frac{d}{dx}\int_0^{x^2} \sin t\,dt$ $= \sin(x^2)\cdot 2x$.`,
        ],
      },
      {
        title: "Both limits moving",
        points: [
          t`With limits $u(x)$ and $v(x)$, the integral is $F(v(x)) - F(u(x))$.`,
          t`Differentiate each term by the chain rule; the minus sign stays.`,
          t`**Leibniz rule:** $\frac{d}{dx}\int_{u}^{v} f(t)\,dt$ $= f(v)\,v' - f(u)\,u'$.`,
          t`A moving lower limit gives a minus: $\frac{d}{dx}\int_x^{5} f(t)\,dt = -f(x)$.`,
          t`The lower limit counts whenever it moves; only a constant limit drops out.`,
          t`Example: $\frac{d}{dx}\int_x^{x^2} \cos t\,dt$ $= 2x\cos(x^2) - \cos x$.`,
        ],
      },
      {
        title: "Integrating a derivative",
        points: [
          t`$f$ is an antiderivative of $f'$, so $\int_a^b f'(x)\,dx = f(b) - f(a)$.`,
          t`If $f(1) = f(4)$, then $\int_1^4 f'(x)\,dx = 0$, without knowing $f$.`,
          t`Spot an integrand that is a derivative: $\frac{d}{dx}x^x = x^x(1 + \ln x)$.`,
          t`So $\int_1^2 x^x(1 + \ln x)\,dx$ $= 2^2 - 1^1 = 3$.`,
          t`Put the limits into $f$, not into the integrand $f'$.`,
        ],
      },
      {
        title: "Watch for a jump",
        points: [
          t`The theorem needs the function $f$ to be continuous on all of $[a, b]$.`,
          t`A **jump** is a point where a graph breaks and restarts at another height.`,
          t`$\tan^{-1}\frac{1}{x}$ jumps at $x = 0$, from $-\frac{\pi}{2}$ just left to $\frac{\pi}{2}$ just right.`,
          t`Its derivative is $\frac{-1/x^2}{1 + 1/x^2} = -\frac{1}{1 + x^2}$, which has no jump.`,
          t`On $[-\sqrt{3}, \sqrt{3}]$ the integral is $-\left[\tan^{-1}x\right]_{-\sqrt3}^{\sqrt3}$ $= -\frac{2\pi}{3}$.`,
          t`The naive $\left[\tan^{-1}\frac{1}{x}\right]_{-\sqrt3}^{\sqrt3}$ gives $\frac{\pi}{3}$, which is wrong.`,
        ],
      },
    ],
    worked: {
      prompt: t`Let $\phi(x) = \displaystyle\int_x^{2x} e^{-t^2}\,dt$. Find $\phi'(x)$. Is $\phi$ increasing at $x = 0$?`,
      steps: [
        t`Limits: $u = x$, so $u' = 1$; $v = 2x$, so $v' = 2$.`,
        t`Upper term: $f(v)\,v' = e^{-4x^2}\cdot 2$.`,
        t`Lower term: $f(u)\,u' = e^{-x^2}\cdot 1$, and it is subtracted.`,
        t`So $\phi'(x) = 2e^{-4x^2} - e^{-x^2}$.`,
        t`At $x = 0$: $\phi'(0) = 2 - 1 = 1 > 0$, so $\phi$ is increasing there.`,
      ],
      answer: t`$\phi'(x) = 2e^{-4x^2} - e^{-x^2}$; yes, $\phi'(0) = 1 > 0$`,
    },
    visualSpec: t`A graph of $f(t)$ with the area from $a$ to a draggable $x$ shaded: as $x$ moves, the rate at which the area grows, read off a gauge, matches the height $f(x)$.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Dropping the chain-rule factor: $\frac{d}{dx}\int_a^{g(x)} f(t)\,dt = f(g(x))$`,
      remediation: t`Multiply by the limit's derivative: $\frac{d}{dx}\int_a^{g(x)} f(t)\,dt$ $= f(g(x))\,g'(x)$. It is the chain rule on $F(g(x))$.`,
      fallback: { kind: "ext", topic: "chain rule (Differentiation)" },
    },
    {
      id: "C08-M2",
      mistake: t`Adding the lower limit's term: $\frac{d}{dx}\int_u^v f(t)\,dt = f(v)\,v' + f(u)\,u'$`,
      remediation: t`The integral is $F(v) - F(u)$, so the lower limit's term is subtracted: $f(v)\,v' - f(u)\,u'$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M3",
      mistake: t`Letting a constant lower limit $a$ give $-f(a)$: $\frac{d}{dx}\int_a^{g(x)} f(t)\,dt = f(g(x))\,g'(x) - f(a)$`,
      remediation: t`A constant limit gives $F(a)$, a fixed number whose derivative is $0$. Only a moving limit adds a term.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M4",
      mistake: "Keeping only the upper limit, as if the lower limit never counts",
      remediation: t`Both limits count: a moving lower limit gives $-f(u)\,u'$, and $\int_a^b f'(x)\,dx = f(b) - f(a)$ needs $f(a)$ too.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M5",
      mistake: t`Putting the limits straight into the integrand: upper value minus lower value of $f$ (or of $f'$)`,
      remediation: t`For $\int_a^b f'(x)\,dx$ the limits go into $f$, not $f'$. For a derivative of an integral use $f(v)\,v' - f(u)\,u'$; a constant limit gives $0$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M6",
      mistake: t`Writing $\int_a^b g'(x)\,dx = g(b) - g(a)$ when $g$ jumps inside $[a, b]$`,
      remediation: t`The theorem needs a function continuous on $[a, b]$. Simplify the derivative first, then integrate it with a continuous antiderivative.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "C08-M1 needs a moving limit whose derivative is not 1; C08-M2 needs a moving lower limit, and so does C08-M4 on a derivative (on an integral of g' it needs G(a) not 0); C08-M3 needs a constant lower limit a with f(a) not 0; C08-M6 needs g to jump inside [a, b].",
    "When both limits move, C08-M1 and C08-M5 give the same answer: tag only one of them on such an item.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q90" },
      stem: t`For $x > 0$, let $\phi(x) = \displaystyle\int_x^{2x} \frac{dt}{t}$. What is $\phi'(x)$?`,
      verify: { kind: "value", inputs: { f: "1/t", u: "x", v: "2*x" }, params: { ask: "deriv" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$-\dfrac{1}{2x}$`, correct: false, misconceptionId: "C08-M1", value: "-1/(2*x)" },
        { key: "C", text: t`$\dfrac{2}{x}$`, correct: false, misconceptionId: "C08-M2", value: "2/x" },
        { key: "D", text: t`$\dfrac{1}{x}$`, correct: false, misconceptionId: "C08-M4", value: "1/x" },
      ],
      solution: {
        steps: [
          t`Limits: $u = x$, $u' = 1$; $v = 2x$, $v' = 2$.`,
          t`Leibniz rule: $\phi'(x) = \frac{1}{2x}\cdot 2$ $- \frac{1}{x}\cdot 1$.`,
          t`That is $\frac{1}{x} - \frac{1}{x} = 0$.`,
          t`Check: $\phi(x) = \ln 2x - \ln x = \ln 2$, a constant.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`For $-\frac{\pi}{2} < x < \frac{\pi}{2}$, $\dfrac{d}{dx}\displaystyle\int_0^{\tan x} \frac{dt}{1 + t^2} = ?$`,
      verify: { kind: "value", inputs: { f: "1/(1 + t**2)", u: "0", v: "tan(x)" }, params: { ask: "deriv" } },
      options: [
        { key: "A", text: t`$\cos^2 x$`, correct: false, misconceptionId: "C08-M1", value: "cos(x)**2" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C08-M3", value: "0" },
        { key: "C", text: t`$-\sin^2 x$`, correct: false, misconceptionId: "C08-M5", value: "-sin(x)**2" },
        { key: "D", text: t`$1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`The lower limit $0$ is constant, so it adds nothing.`,
          t`Upper term: $\frac{1}{1 + \tan^2 x}\cdot\sec^2 x$.`,
          t`$1 + \tan^2 x = \sec^2 x$, so the derivative is $1$.`,
          t`Check: the integral is $\tan^{-1}(\tan x) = x$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`$\dfrac{d}{dx}\displaystyle\int_{x^2}^{1} \sqrt{1 + t^3}\,dt = ?$`,
      verify: { kind: "value", inputs: { f: "sqrt(1 + t**3)", u: "x**2", v: "1" }, params: { ask: "deriv" } },
      options: [
        { key: "A", text: t`$-\sqrt{1 + x^6}$`, correct: false, misconceptionId: "C08-M1", value: "-sqrt(x**6 + 1)" },
        { key: "B", text: t`$2x\sqrt{1 + x^6}$`, correct: false, misconceptionId: "C08-M2", value: "2*x*sqrt(x**6 + 1)" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C08-M4", value: "0" },
        { key: "D", text: t`$-2x\sqrt{1 + x^6}$`, correct: true, value: "-2*x*sqrt(x**6 + 1)" },
      ],
      solution: {
        steps: [
          t`The upper limit $1$ is constant; the lower limit $x^2$ moves, with derivative $2x$.`,
          t`A moving lower limit gives $-f(u)\,u'$ $= -\sqrt{1 + (x^2)^3}\cdot 2x$.`,
          t`So the derivative is $-2x\sqrt{1 + x^6}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $\phi(x) = \displaystyle\int_1^{x^2} \frac{dt}{1 + t}$, what is $\phi'(2)$?`,
      verify: { kind: "value", inputs: { f: "1/(1 + t)", u: "1", v: "x**2", c: "2" }, params: { ask: "deriv" } },
      options: [
        { key: "A", text: t`$\frac{3}{10}$`, correct: false, misconceptionId: "C08-M3", value: "3/10" },
        { key: "B", text: t`$- \frac{3}{10}$`, correct: false, misconceptionId: "C08-M5", value: "-3/10" },
        { key: "C", text: t`$\frac{4}{5}$`, correct: true, value: "4/5" },
        { key: "D", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C08-M1", value: "1/5" },
      ],
      solution: {
        steps: [
          t`The lower limit $1$ is constant, so $\phi'(x) = \frac{1}{1 + x^2}\cdot 2x$.`,
          t`At $x = 2$: $\phi'(2) = \frac{1}{5}\cdot 4 = \frac{4}{5}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q85" },
      stem: t`What is $\displaystyle\int_{-1}^{1} \frac{d}{dx}\left(\tan^{-1}\frac{1}{x}\right) dx$ equal to?`,
      verify: { kind: "value", inputs: { g: "atan(1/x)", G: "-atan(x)", a: "-1", b: "1" }, params: { ask: "fprime" } },
      options: [
        { key: "A", text: t`$\frac{\pi}{2}$`, correct: false, misconceptionId: "C08-M6", value: "pi/2" },
        { key: "B", text: t`$- \frac{\pi}{2}$`, correct: true, value: "-pi/2" },
        { key: "C", text: t`$- \frac{\pi}{4}$`, correct: false, misconceptionId: "C08-M4", value: "-pi/4" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C08-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`$\tan^{-1}\frac{1}{x}$ jumps at $x = 0$, so $\left[\tan^{-1}\frac{1}{x}\right]_{-1}^{1}$ is not allowed.`,
          t`Simplify: $\frac{d}{dx}\tan^{-1}\frac{1}{x} = -\frac{1}{1 + x^2}$.`,
          t`So the integral is $-\left[\tan^{-1}x\right]_{-1}^{1}$ $= -\left(\frac{\pi}{4} + \frac{\pi}{4}\right) = -\frac{\pi}{2}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is $\displaystyle\int_{-1}^{\sqrt{3}} \frac{d}{dx}\left(\tan^{-1}\frac{1}{x}\right) dx$ equal to?`,
      verify: { kind: "value", inputs: { g: "atan(1/x)", G: "-atan(x)", a: "-1", b: "sqrt(3)" }, params: { ask: "fprime" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C08-M5", value: "1/4" },
        { key: "B", text: t`$\frac{5 \pi}{12}$`, correct: false, misconceptionId: "C08-M6", value: "5*pi/12" },
        { key: "C", text: t`$- \frac{7 \pi}{12}$`, correct: true, value: "-7*pi/12" },
        { key: "D", text: t`$- \frac{\pi}{3}$`, correct: false, misconceptionId: "C08-M4", value: "-pi/3" },
      ],
      solution: {
        steps: [
          t`$\tan^{-1}\frac{1}{x}$ jumps at $x = 0$, which lies inside $[-1, \sqrt{3}]$.`,
          t`Simplify: $\frac{d}{dx}\tan^{-1}\frac{1}{x} = -\frac{1}{1 + x^2}$.`,
          t`So the integral is $-\left[\tan^{-1}x\right]_{-1}^{\sqrt3}$ $= -\left(\frac{\pi}{3} + \frac{\pi}{4}\right) = -\frac{7\pi}{12}$.`,
        ],
      },
    },
  ],
};
