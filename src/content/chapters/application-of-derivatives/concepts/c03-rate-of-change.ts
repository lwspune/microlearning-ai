import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A car has covered $s = t^2$ metres after $t$ seconds. At $t = 5$ it has gone $25$ m in $5$ s. **What does its speedometer show at that instant: $25$ m/s, $5$ m/s, or something else?**`,
    reveal: t`Something else. $25$ m is the distance, and $\dfrac{25}{5} = 5$ m/s is only the average over $5$ seconds. The car keeps speeding up, so at $t = 5$ it is faster than its average: the speedometer shows $\dfrac{ds}{dt} = 2t = 10$ m/s.`,
  },
  explanation: {
    intuition: [
      t`A **rate of change** tells how fast one quantity changes as another one changes.`,
      t`If $x$ changes by a small $\delta x$ and $y$ by $\delta y$, then $\dfrac{\delta y}{\delta x}$ is the average rate.`,
      t`Let $\delta x \to 0$: the limit $\dfrac{dy}{dx}$ is the rate at that very point.`,
      t`A circle's area is $A = \pi r^2$, so $\dfrac{dA}{dr} = 2\pi r$.`,
      t`At $r = 3$ cm the area is growing at $6\pi$ cm$^2$ per cm of radius.`,
      t`For motion, the rate of change of position is **velocity**; the rate of change of velocity is **acceleration**.`,
    ],
    formal: [
      {
        title: "Rate of change at a point",
        points: [
          t`If $y = f(x)$, the **rate of change** of $y$ with respect to $x$ is $\dfrac{dy}{dx} = f'(x)$.`,
          t`Example: for $y = \dfrac{x^2}{4}$, $\dfrac{dy}{dx} = \dfrac{x}{2}$, so at $x = 3$ the rate is $\dfrac{3}{2}$.`,
          t`That is the slope of the tangent at $\left(3, \dfrac{9}{4}\right)$: there, $y$ grows $\dfrac{3}{2}$ units per unit of $x$.`,
          t`It is not $y$ itself, $\dfrac{9}{4}$, nor the average $\dfrac{y}{x} = \dfrac{3}{4}$, the slope of the chord from $O$.`,
          t`Read the other way, $\dfrac{dx}{dy} = \dfrac{2}{3}$ is the rate of change of $x$ with respect to $y$.`,
          t`A positive rate means $y$ increases as $x$ increases; a negative rate means $y$ decreases.`,
        ],
        figure: {
          alt: "The curve y = x²/4. The point P(3, 9/4) is marked on it, then the tangent at P, with slope 3/2: the rate of change of y with respect to x there. Last, a dashed chord from the origin O to P, with slope y/x = 3/4: only an average.",
          axes: "xy",
          view: { x: [-0.5, 4], y: [-0.75, 3.5] },
          elements: [
            { kind: "curve", points: [[-0.5, 0.062], [-0.447, 0.05], [-0.394, 0.039], [-0.341, 0.029], [-0.287, 0.021], [-0.234, 0.014], [-0.181, 0.008], [-0.128, 0.004], [-0.075, 0.001], [-0.022, 0], [0.031, 0], [0.084, 0.002], [0.137, 0.005], [0.191, 0.009], [0.244, 0.015], [0.297, 0.022], [0.35, 0.031], [0.403, 0.041], [0.456, 0.052], [0.509, 0.065], [0.562, 0.079], [0.616, 0.095], [0.669, 0.112], [0.722, 0.13], [0.775, 0.15], [0.828, 0.171], [0.881, 0.194], [0.934, 0.218], [0.988, 0.244], [1.041, 0.271], [1.094, 0.299], [1.147, 0.329], [1.2, 0.36], [1.253, 0.393], [1.306, 0.427], [1.359, 0.462], [1.413, 0.499], [1.466, 0.537], [1.519, 0.577], [1.572, 0.618], [1.625, 0.66], [1.678, 0.704], [1.731, 0.749], [1.784, 0.796], [1.837, 0.844], [1.891, 0.894], [1.944, 0.945], [1.997, 0.997], [2.05, 1.051], [2.103, 1.106], [2.156, 1.162], [2.209, 1.22], [2.263, 1.28], [2.316, 1.341], [2.369, 1.403], [2.422, 1.466], [2.475, 1.531], [2.528, 1.598], [2.581, 1.666], [2.634, 1.735], [2.688, 1.806], [2.741, 1.878], [2.794, 1.951], [2.847, 2.026], [2.9, 2.103], [2.953, 2.18], [3.006, 2.259], [3.059, 2.34], [3.112, 2.422], [3.166, 2.505], [3.219, 2.59], [3.272, 2.676], [3.325, 2.764], [3.378, 2.853], [3.431, 2.943], [3.484, 3.035], [3.537, 3.128], [3.591, 3.223], [3.644, 3.319], [3.697, 3.417], [3.75, 3.516]], step: 1 },
            { kind: "label", at: [0.9, 3.2], label: "y = x²/4", labelAt: "e", step: 1 },
            { kind: "point", at: [3, 2.25], label: "P(3, 9/4)", labelAt: "nw", step: 2 },
            { kind: "line", through: [[1.5, 0], [3, 2.25]], tone: "good", step: 3 },
            { kind: "label", at: [2.4, 0.4], label: "tangent: slope 3/2", labelAt: "e", tone: "good", step: 3 },
            { kind: "segment", from: [0, 0], to: [3, 2.25], dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [0.3, 1.9], label: "chord: y/x = 3/4", labelAt: "e", tone: "muted", step: 4 },
          ],
        },
      },
      {
        title: "Velocity and acceleration",
        points: [
          t`A particle moves along a line; its **displacement** $s$ is its directed distance from a fixed point $O$.`,
          t`When $s = f(t)$, its **velocity** is $v = \dfrac{ds}{dt}$, the rate of change of displacement.`,
          t`Its **acceleration** is $a = \dfrac{dv}{dt} = \dfrac{d^2s}{dt^2}$, the rate of change of velocity.`,
          t`$\dfrac{d^2s}{dt^2}$ means: differentiate $s$ twice. It is not $\left(\dfrac{ds}{dt}\right)^2$.`,
          t`Find $v(t)$ and $a(t)$ first, then put in the time: a number's derivative is $0$.`,
          t`With $s$ in metres and $t$ in seconds, $v$ is in m/s and $a$ in m/s$^2$.`,
        ],
      },
      {
        title: "Reading velocity and acceleration",
        points: [
          t`$v > 0$: the particle moves the way $s$ increases; $v < 0$: it moves back.`,
          t`$v = 0$: the particle is at rest for that instant. Solve $v(t) = 0$, not $s(t) = 0$.`,
          t`To find $v$ when $a = k$: solve $a(t) = k$ for $t \ge 0$, then put that $t$ in $v(t)$.`,
          t`School formulas $v = \dfrac{s}{t}$ and $a = \dfrac{v}{t}$ hold only when the rate stays constant.`,
          t`Otherwise they give an average: for $s = 2t^2$ at $t = 3$, $\dfrac{s}{t} = 6$ but $v = 4t = 12$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A particle moves along a line so that $s = t^3 - 6t^2 + 9t$ metres after $t$ seconds. Find its velocity and acceleration at $t = 4$, and its velocity when its acceleration is zero.`,
      steps: [
        t`Velocity: $v = \dfrac{ds}{dt} = 3t^2 - 12t + 9$.`,
        t`Acceleration: $a = \dfrac{dv}{dt} = 6t - 12$.`,
        t`At $t = 4$: $v = 48 - 48 + 9 = 9$ m/s and $a = 24 - 12 = 12$ m/s$^2$.`,
        t`$a = 0$ when $6t - 12 = 0$, so $t = 2$. Then $v = 12 - 24 + 9 = -3$ m/s: the particle is moving back.`,
      ],
      answer: t`At $t = 4$: $v = 9$ m/s, $a = 12$ m/s$^2$. When $a = 0$ (at $t = 2$): $v = -3$ m/s.`,
    },
    visualSpec: t`Drag a point along the graph of $y = f(x)$: its tangent and the chord from $O$ show the rate $\dfrac{dy}{dx}$ beside the average $\dfrac{y}{x}$. Below, a particle runs along a line as $t$ plays, with live readouts of $s$, $v$ and $a$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Takes the quantity itself for its rate, one derivative short: the displacement for the velocity, the velocity for the acceleration",
      remediation: t`A rate of change is a derivative: $v = \dfrac{ds}{dt}$ and $a = \dfrac{dv}{dt}$. The value of $s$ (or of $V$, $A$) tells how much, not how fast.`,
      fallback: { kind: "ext", topic: "meaning of the derivative" },
    },
    {
      id: "C03-M2",
      mistake: "Uses the constant-rate formulas v = s/t and a = v/t (an average from the start) for the rate at an instant",
      remediation: t`A ratio like $\dfrac{s}{t}$ or $\dfrac{V}{x}$ is an average from the start; it equals the rate only when the rate stays constant. Differentiate to get the rate at that instant.`,
      fallback: { kind: "ext", topic: "average and instantaneous rate of change" },
    },
    {
      id: "C03-M3",
      mistake: "Inverts the rate: gives dx/dy for the rate of change of y with respect to x",
      remediation: t`The rate of change of $y$ with respect to $x$ is $\dfrac{dy}{dx}$, the change in $y$ per unit change in $x$. Its reciprocal $\dfrac{dx}{dy}$ is the rate of $x$ with respect to $y$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Swaps velocity and acceleration: takes the second derivative as the velocity and the first as the acceleration",
      remediation: t`Velocity is the first derivative, $v = \dfrac{ds}{dt}$; acceleration is the second, $a = \dfrac{d^2s}{dt^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Reads d²s/dt² as (ds/dt)²: squares the velocity to get the acceleration",
      remediation: t`$\dfrac{d^2s}{dt^2}$ means differentiate $s$ twice, $\dfrac{d}{dt}\left(\dfrac{ds}{dt}\right)$; it is not the square of $\dfrac{ds}{dt}$.`,
      fallback: { kind: "ext", topic: "second order derivatives" },
    },
  ],
  engineNotes: [
    "C03-M4 gives the same answer as C03-M1 on an 'acceleration at time t' item (both give ds/dt): diagnose C03-M4 on velocity items or on 'velocity when the acceleration is k'.",
    "C03-M2 gives the key when the rate is constant (s = ct, or a quantity linear in x): use a function whose rate varies.",
    "C03-M3 applies only to a first-order rate (it is modelled on geometric rates such as dV/dx); C03-M5 only to items involving the acceleration.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/app-derivatives-12/2.1.4 SolvedEx.1" },
      stem: t`A car covers $s = 4t^2 + 3t$ metres in $t$ seconds. Its velocity at $t = 20$ seconds, in m/s, is:`,
      verify: { kind: "value", inputs: { f: "4*t**2 + 3*t", a: "20" }, params: { ask: "d1" } },
      options: [
        { key: "A", text: t`$83$`, correct: false, misconceptionId: "C03-M2", value: "83" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C03-M4", value: "8" },
        { key: "C", text: t`$163$`, correct: true, value: "163" },
        { key: "D", text: t`$1660$`, correct: false, misconceptionId: "C03-M1", value: "1660" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{ds}{dt} = 8t + 3$.`,
          t`At $t = 20$: $v = 160 + 3 = 163$ m/s.`,
          t`$s(20) = 1660$ m is the distance covered, and $\dfrac{s}{t} = 83$ m/s only the average.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/app-derivatives-12/2.1.4 SolvedEx.2" },
      stem: t`A particle's displacement at time $t$ seconds is $s = 2t^3 - 5t^2 + 4t - 3$ feet. Its acceleration at $t = 2$ seconds, in ft/sec$^2$, is:`,
      verify: { kind: "value", inputs: { f: "2*t**3 - 5*t**2 + 4*t - 3", a: "2" }, params: { ask: "d2" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C03-M2", value: "4" },
        { key: "B", text: t`$64$`, correct: false, misconceptionId: "C03-M5", value: "64" },
        { key: "C", text: t`$14$`, correct: true, value: "14" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C03-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{ds}{dt} = 6t^2 - 10t + 4$.`,
          t`$a = \dfrac{dv}{dt} = 12t - 10$.`,
          t`At $t = 2$: $a = 24 - 10 = 14$ ft/sec$^2$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`A particle moves along a line so that $s = t^3 - 3t^2 - 9t + 5$ metres at time $t$ seconds. Its velocity, in m/s, at the instant its acceleration is zero is:`,
      verify: { kind: "value", inputs: { f: "t**3 - 3*t**2 - 9*t + 5", k: "0" }, params: { ask: "v_at_a" } },
      options: [
        { key: "A", text: t`$-22$`, correct: false, misconceptionId: "C03-M1", value: "-22" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C03-M4", value: "12" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C03-M5", value: "0" },
        { key: "D", text: t`$-12$`, correct: true, value: "-12" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{ds}{dt} = 3t^2 - 6t - 9$ and $a = \dfrac{dv}{dt} = 6t - 6$.`,
          t`$a = 0$ when $6t - 6 = 0$, so $t = 1$.`,
          t`Then $v = 3 - 6 - 9 = -12$ m/s: the particle is moving back.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/app-derivatives-12/Ex 2.1 Q.12" },
      stem: t`The rate of change of the volume of a cube with respect to its edge $x$, when $x = 2$ cm, in cm$^3$ per cm, is:`,
      verify: { kind: "value", inputs: { f: "x**3", a: "2" }, params: { ask: "d1" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C03-M2", value: "4" },
        { key: "B", text: t`$\frac{1}{12}$`, correct: false, misconceptionId: "C03-M3", value: "1/12" },
        { key: "C", text: t`$12$`, correct: true, value: "12" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C03-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`$V = x^3$, so $\dfrac{dV}{dx} = 3x^2$.`,
          t`At $x = 2$: $\dfrac{dV}{dx} = 3(2)^2 = 12$ cm$^3$ per cm.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/app-derivatives-12/Ex 2.1 Q.10" },
      stem: t`An equilateral triangle of side $x$ cm has area $A = \dfrac{\sqrt{3}}{4}x^2$ cm$^2$. The rate of change of $A$ with respect to $x$, when $x = 3$, in cm$^2$ per cm, is:`,
      verify: { kind: "value", inputs: { f: "sqrt(3)/4*x**2", a: "3" }, params: { ask: "d1" } },
      options: [
        { key: "A", text: t`$\frac{3 \sqrt{3}}{2}$`, correct: true, value: "3*sqrt(3)/2" },
        { key: "B", text: t`$\frac{9 \sqrt{3}}{4}$`, correct: false, misconceptionId: "C03-M1", value: "9*sqrt(3)/4" },
        { key: "C", text: t`$\frac{3 \sqrt{3}}{4}$`, correct: false, misconceptionId: "C03-M2", value: "3*sqrt(3)/4" },
        { key: "D", text: t`$\frac{2 \sqrt{3}}{9}$`, correct: false, misconceptionId: "C03-M3", value: "2*sqrt(3)/9" },
      ],
      solution: {
        steps: [
          t`$\dfrac{dA}{dx} = \dfrac{\sqrt{3}}{4} \cdot 2x = \dfrac{\sqrt{3}}{2}x$.`,
          t`At $x = 3$: $\dfrac{dA}{dx} = \dfrac{3\sqrt{3}}{2}$ cm$^2$ per cm.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`A stone thrown straight up is $h = 40t - 5t^2$ metres high after $t$ seconds. Its velocity at $t = 3$ seconds, in m/s, is:`,
      verify: { kind: "value", inputs: { f: "40*t - 5*t**2", a: "3" }, params: { ask: "d1" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$75$`, correct: false, misconceptionId: "C03-M1", value: "75" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C03-M2", value: "25" },
        { key: "D", text: t`$-10$`, correct: false, misconceptionId: "C03-M4", value: "-10" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{dh}{dt} = 40 - 10t$.`,
          t`At $t = 3$: $v = 40 - 30 = 10$ m/s, so the stone is still rising.`,
          t`Its height then, $75$ m, is how high it is, not how fast it moves.`,
        ],
      },
    },
  ],
};
