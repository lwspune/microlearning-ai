import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$x^2$ and $2^x$ are equal at $x = 2$: both are $4$. **Do their graphs have the same slope there?**`,
    reveal: t`No. $x^2$ follows the power rule: its slope is $2x$, which is $4$ at $x = 2$. $2^x$ follows its own rule: its slope is $2^x\log 2$, which is $4\log 2 \approx 2.77$. Same value, different rules: you must know which rule each function follows.`,
  },
  explanation: {
    intuition: [
      t`Recall: $f'(x)$ is the limit of $\frac{f(x + h) - f(x)}{h}$ as $h \to 0$.`,
      t`It is the slope of the tangent to $y = f(x)$; finding the limit every time is slow.`,
      t`So we find it once for each basic function and keep the results.`,
      t`These results are the **standard derivatives**: a table you use like a times table.`,
      t`Two shapes look alike: in $x^n$ the base varies, in $a^x$ the power varies.`,
      t`They follow different rules, so first ask which shape you have.`,
    ],
    formal: [
      {
        title: "Powers of x",
        points: [
          t`For any real power $n$: $\frac{d}{dx}x^n = nx^{n-1}$.`,
          t`Bring the power down as a factor, then lower the power by $1$: $\frac{d}{dx}x^5 = 5x^4$.`,
          t`A root is a power: $\sqrt{x} = x^{\frac{1}{2}}$, so $\frac{d}{dx}\sqrt{x} = \frac{1}{2\sqrt{x}}$.`,
          t`A **reciprocal** such as $\frac{1}{x^n}$ is first written as $x^{-n}$, a negative power.`,
          t`Then $\frac{d}{dx}x^{-n} = -nx^{-n-1}$: the minus comes down with the power.`,
          t`So $\frac{d}{dx}\frac{1}{x} = \frac{d}{dx}x^{-1}$ $= -\frac{1}{x^2}$.`,
        ],
      },
      {
        title: "Exponentials and logarithms",
        points: [
          t`Here **log** is the natural log, to base $e \approx 2.718$.`,
          t`In $a^x$ ($a > 0$) the base is a fixed number and the power varies.`,
          t`$\frac{d}{dx}a^x = a^x\log a$: the function keeps its form and gains $\log a$.`,
          t`With $a = e$, $\log e = 1$, so $\frac{d}{dx}e^x = e^x$: only $e^x$ is its own derivative.`,
          t`The power rule does not apply: $\frac{d}{dx}2^x = 2^x\log 2$, not $x \cdot 2^{x-1}$.`,
          t`For $x > 0$: $\frac{d}{dx}\log x = \frac{1}{x}$.`,
        ],
      },
      {
        title: "Trigonometric functions",
        points: [
          t`Angles are in radians; these rules need that.`,
          t`$\frac{d}{dx}\sin x = \cos x$, and $\frac{d}{dx}\cos x = -\sin x$.`,
          t`$\frac{d}{dx}\tan x = \sec^2 x$, and $\frac{d}{dx}\cot x$ $= -\operatorname{cosec}^2 x$.`,
          t`$\frac{d}{dx}\sec x = \sec x\tan x$, and $\frac{d}{dx}\operatorname{cosec} x$ $= -\operatorname{cosec} x\cot x$.`,
          t`Don't swap them: $\tan x$ gives $\sec^2 x$, while $\sec x$ gives $\sec x\tan x$.`,
          t`The **co-functions**, $\cos$, $\cot$ and $\operatorname{cosec}$, each have a minus in their derivative.`,
        ],
      },
      {
        title: "Reciprocals and constants",
        points: [
          t`$\operatorname{cosec} x = \frac{1}{\sin x}$, yet its derivative is not $\frac{1}{\cos x}$.`,
          t`Flipping a derivative over does not give the derivative of a reciprocal.`,
          t`Use the table for $\operatorname{cosec}$, $\sec$ and $\cot$; write $\frac{1}{x^n}$ as $x^{-n}$ first.`,
          t`A **constant**, a fixed number such as $7^7$ or $\log 2$, never changes: its derivative is $0$.`,
        ],
      },
      {
        title: "The slope at a point",
        points: [
          t`$f'(a)$ is the slope of the tangent to $y = f(x)$ at $x = a$.`,
          t`So differentiate first, to get $f'(x)$, and only then put $x = a$.`,
          t`For $f(x) = x^2$: $f'(x) = 2x$, so $f'(1) = 2$.`,
          t`Putting $x = 1$ in first gives just the number $f(1) = 1$.`,
          t`Its derivative is $0$: the slope of the flat line $y = 1$, not of the curve.`,
        ],
        figure: {
          alt: "The parabola y = x² with the point (1, 1) on it and its tangent, labelled slope 2. Then f(1) = 1 is marked, and the flat dashed line y = 1 through the point, labelled slope 0: it is not the tangent.",
          axes: "xy",
          view: { x: [-1.5, 2.5], y: [-1, 4] },
          elements: [
            { kind: "curve", points: [[-1.45, 2.103], [-1.407, 1.979], [-1.364, 1.86], [-1.321, 1.744], [-1.277, 1.632], [-1.234, 1.524], [-1.191, 1.419], [-1.148, 1.318], [-1.105, 1.221], [-1.062, 1.128], [-1.019, 1.038], [-0.976, 0.952], [-0.932, 0.87], [-0.889, 0.791], [-0.846, 0.716], [-0.803, 0.645], [-0.76, 0.578], [-0.717, 0.514], [-0.674, 0.454], [-0.631, 0.398], [-0.587, 0.345], [-0.544, 0.296], [-0.501, 0.251], [-0.458, 0.21], [-0.415, 0.172], [-0.372, 0.138], [-0.329, 0.108], [-0.286, 0.082], [-0.242, 0.059], [-0.199, 0.04], [-0.156, 0.024], [-0.113, 0.013], [-0.07, 0.005], [-0.027, 0.001], [0.016, 0], [0.059, 0.004], [0.103, 0.011], [0.146, 0.021], [0.189, 0.036], [0.232, 0.054], [0.275, 0.076], [0.318, 0.101], [0.361, 0.131], [0.404, 0.164], [0.448, 0.2], [0.491, 0.241], [0.534, 0.285], [0.577, 0.333], [0.62, 0.384], [0.663, 0.44], [0.706, 0.499], [0.749, 0.562], [0.793, 0.628], [0.836, 0.698], [0.879, 0.772], [0.922, 0.85], [0.965, 0.931], [1.008, 1.016], [1.051, 1.105], [1.094, 1.198], [1.137, 1.294], [1.181, 1.394], [1.224, 1.498], [1.267, 1.605], [1.31, 1.716], [1.353, 1.831], [1.396, 1.95], [1.439, 2.072], [1.483, 2.198], [1.526, 2.328], [1.569, 2.461], [1.612, 2.598], [1.655, 2.739], [1.698, 2.884], [1.741, 3.032], [1.784, 3.184], [1.827, 3.34], [1.871, 3.499], [1.914, 3.662], [1.957, 3.829], [2, 4]] },
            { kind: "label", at: [-1.4, 3.3], label: "y = x²", labelAt: "e" },
            { kind: "point", at: [1, 1], step: 1 },
            { kind: "line", through: [[1, 1], [2, 3]], tone: "good", step: 1 },
            { kind: "label", at: [1.6, 2.2], label: "slope 2", labelAt: "se", tone: "good", step: 3 },
            { kind: "label", at: [1, 1], label: "f(1) = 1", labelAt: "nw", step: 4 },
            { kind: "line", through: [[0, 1], [1, 1]], tone: "bad", dashed: true, step: 5 },
            { kind: "label", at: [2.4, 1], label: "y = 1, slope 0", labelAt: "sw", tone: "bad", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`If $f(x) = \dfrac{1}{x^{\frac{2}{3}}}$, find $f'(8)$.`,
      steps: [
        t`A reciprocal: write $f(x) = x^{-\frac{2}{3}}$, so $n = -\frac{2}{3}$.`,
        t`Power rule: $f'(x) = -\frac{2}{3}x^{-\frac{2}{3} - 1}$ $= -\frac{2}{3}x^{-\frac{5}{3}}$.`,
        t`Only now put $x = 8$: $8^{-\frac{5}{3}} = \frac{1}{2^5} = \frac{1}{32}$.`,
        t`$f'(8) = -\frac{2}{3} \cdot \frac{1}{32}$ $= -\frac{1}{48}$.`,
      ],
      answer: t`$f'(8) = -\frac{1}{48}$`,
    },
    visualSpec: t`Pick $x^n$, $a^x$ or a trigonometric function and drag a point along its graph; the tangent and its slope update beside the value the standard derivative gives there.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Differentiating $a^x$ with the power rule, as $x \cdot a^{x-1}$`,
      remediation: t`The power rule is for $x^n$, where the power is fixed. In $a^x$ the power varies, so use $\frac{d}{dx}a^x = a^x\log a$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Treating every $a^x$ like $e^x$, so that $\frac{d}{dx}a^x = a^x$`,
      remediation: t`$\frac{d}{dx}a^x = a^x\log a$. Only for $a = e$ is $\log a = 1$, so only $e^x$ is its own derivative.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Taking the derivative of $\frac{1}{u}$ as $\frac{1}{u'}$, the reciprocal of the derivative`,
      remediation: t`Flipping a derivative over does not differentiate a reciprocal. Write $\frac{1}{x^n}$ as $x^{-n}$, and use the table for $\operatorname{cosec}$, $\sec$ and $\cot$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C03-M4",
      mistake: t`Putting $x = a$ in before differentiating, so finding the derivative of a constant, $0$`,
      remediation: t`Differentiate first to get $f'(x)$, then put $x = a$. $f(a)$ is a fixed number, so its derivative is always $0$ and says nothing about the slope.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: t`Swapping the derivatives of $\tan$ and $\sec$, or of $\cot$ and $\operatorname{cosec}$`,
      remediation: t`$\tan x$ gives $\sec^2 x$ and $\sec x$ gives $\sec x\tan x$. Likewise $\cot x$ gives $-\operatorname{cosec}^2 x$ and $\operatorname{cosec} x$ gives $-\operatorname{cosec} x\cot x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Dropping the minus sign the rule produces",
      remediation: t`The co-functions $\cos$, $\cot$ and $\operatorname{cosec}$ have a minus in their derivatives. With a negative power $n$, the factor $n$ in $nx^{n-1}$ is negative too.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 I Q5" },
      stem: t`If $f(x) = 7^x$, then $f'(2) =$`,
      verify: { kind: "value", inputs: { a: "7", at: "2" }, params: { fn: "exp" } },
      options: [
        { key: "A", text: t`$49$`, correct: false, misconceptionId: "C03-M2", value: "49" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M4", value: "0" },
        { key: "C", text: t`$49\log 7$`, correct: true, value: "49*log(7)" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C03-M1", value: "14" },
      ],
      solution: {
        steps: [
          t`$7^x$ has a fixed base and a varying power, so $\frac{d}{dx}7^x = 7^x\log 7$.`,
          t`Only now put $x = 2$: $f'(2) = 7^2\log 7 = 49\log 7$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 I Q3" },
      stem: t`If $f(x) = \dfrac{1}{x^{\frac{3}{2}}}$, then $f'(4) =$`,
      verify: { kind: "value", inputs: { n: "-3/2", at: "4" }, params: { fn: "pow" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C03-M4", value: "0" },
        { key: "B", text: t`$\frac{3}{64}$`, correct: false, misconceptionId: "C03-M6", value: "3/64" },
        { key: "C", text: t`$- \frac{3}{64}$`, correct: true, value: "-3/64" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C03-M3", value: "1/3" },
      ],
      solution: {
        steps: [
          t`A reciprocal: write $f(x) = x^{-\frac{3}{2}}$, so $n = -\frac{3}{2}$.`,
          t`$f'(x) = -\frac{3}{2}x^{-\frac{5}{2}}$: the power drops from $-\frac{3}{2}$ to $-\frac{5}{2}$.`,
          t`At $x = 4$: $4^{-\frac{5}{2}} = \frac{1}{2^5} = \frac{1}{32}$, so $f'(4) = -\frac{3}{64}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 I Q3" },
      stem: t`$\dfrac{d}{dx}(\operatorname{cosec} x) =$`,
      verify: { kind: "value", inputs: {  }, params: { fn: "csc" } },
      options: [
        { key: "A", text: t`$\sec x$`, correct: false, misconceptionId: "C03-M3", value: "1/cos(x)" },
        { key: "B", text: t`$-\operatorname{cosec}^2 x$`, correct: false, misconceptionId: "C03-M5", value: "-csc(x)**2" },
        { key: "C", text: t`$\operatorname{cosec} x\cot x$`, correct: false, misconceptionId: "C03-M6", value: "cos(x)/sin(x)**2" },
        { key: "D", text: t`$-\operatorname{cosec} x\cot x$`, correct: true, value: "-cos(x)/sin(x)**2" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec} x$ is a co-function, so its derivative carries a minus sign.`,
          t`From the table: $\frac{d}{dx}\operatorname{cosec} x$ $= -\operatorname{cosec} x\cot x$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 I Q6" },
      stem: t`$\dfrac{d}{dx}(\cot x) =$`,
      verify: { kind: "value", inputs: {  }, params: { fn: "cot" } },
      options: [
        { key: "A", text: t`$-\operatorname{cosec} x\cot x$`, correct: false, misconceptionId: "C03-M5", value: "-cot(x)*csc(x)" },
        { key: "B", text: t`$\operatorname{cosec}^2 x$`, correct: false, misconceptionId: "C03-M6", value: "sin(x)**(-2)" },
        { key: "C", text: t`$-\operatorname{cosec}^2 x$`, correct: true, value: "-1/sin(x)**2" },
        { key: "D", text: t`$\cos^2 x$`, correct: false, misconceptionId: "C03-M3", value: "cos(x)**2" },
      ],
      solution: {
        steps: [
          t`$\cot x$ is a co-function, so its derivative carries a minus sign.`,
          t`From the table: $\frac{d}{dx}\cot x = -\operatorname{cosec}^2 x$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/9.1.4a SolvedEx.4" },
      stem: t`If $f(x) = \sec x$, then $f'\left(\frac{\pi}{3}\right) =$`,
      verify: { kind: "value", inputs: { at: "pi/3" }, params: { fn: "sec" } },
      options: [
        { key: "A", text: t`$2 \sqrt{3}$`, correct: true, value: "2*sqrt(3)" },
        { key: "B", text: t`$- \frac{2 \sqrt{3}}{3}$`, correct: false, misconceptionId: "C03-M3", value: "-2*sqrt(3)/3" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C03-M4", value: "0" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M5", value: "4" },
      ],
      solution: {
        steps: [
          t`From the table: $f'(x) = \sec x\tan x$.`,
          t`At $x = \frac{\pi}{3}$: $\sec\frac{\pi}{3} = 2$ and $\tan\frac{\pi}{3} = \sqrt{3}$.`,
          t`So $f'\left(\frac{\pi}{3}\right) = 2\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 I Q3" },
      stem: t`If $f(x) = 5^x$, then $f'(3) =$`,
      verify: { kind: "value", inputs: { a: "5", at: "3" }, params: { fn: "exp" } },
      options: [
        { key: "A", text: t`$125\log 5$`, correct: true, value: "125*log(5)" },
        { key: "B", text: t`$75$`, correct: false, misconceptionId: "C03-M1", value: "75" },
        { key: "C", text: t`$125$`, correct: false, misconceptionId: "C03-M2", value: "125" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C03-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`The base $5$ is fixed and the power varies, so $\frac{d}{dx}5^x = 5^x\log 5$.`,
          t`Only now put $x = 3$: $f'(3) = 5^3\log 5 = 125\log 5$.`,
        ],
      },
    },
  ],
};
