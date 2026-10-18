import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Differentiate $y = \sin^{-1}\left(\frac{2x}{1 + x^2}\right)$ for $-1 < x < 1$. **Straight through the chain rule the algebra is long. Can you do it in one line?**`,
    reveal: t`Put $x = \tan\theta$: $\frac{2\tan\theta}{1 + \tan^2\theta} = \sin 2\theta$. So $y = 2\theta = 2\tan^{-1}x$, and $\frac{dy}{dx} = \frac{2}{1 + x^2}$.`,
  },
  explanation: {
    intuition: [
      t`Some arguments hide a trig formula: $\frac{2x}{1 + x^2}$ is $\sin 2\theta$ when $x = \tan\theta$.`,
      t`A **substitution** renames $x$ as a trig function of a new angle $\theta$.`,
      t`The inverse function then undoes the trig function: $\sin^{-1}(\sin 2\theta) = 2\theta$.`,
      t`What is left, like $2\tan^{-1}x$, is quick to differentiate.`,
      t`The catch: an inverse function undoes only inside its **principal range**, the angles it gives, so check where the angle lies.`,
    ],
    formal: [
      {
        title: "Spot the shape",
        points: [
          t`The argument of the inverse function often hides a double- or triple-angle formula.`,
          t`For $\frac{2x}{1 - x^2}$, $\frac{2x}{1 + x^2}$ or $\frac{1 - x^2}{1 + x^2}$, put $x = \tan\theta$.`,
          t`For $2x\sqrt{1 - x^2}$ or $3x - 4x^3$, put $x = \sin\theta$.`,
          t`For $\sqrt{\frac{1 - x}{1 + x}}$ or $4x^3 - 3x$, put $x = \cos\theta$.`,
          t`If $4x^2$ or $x^3$ sits where $x^2$ should, put $2x$ or $x^{\frac{3}{2}}$ equal to $\tan\theta$.`,
        ],
      },
      {
        title: "Simplify, then differentiate",
        points: [
          t`Take $y = \tan^{-1}\left(\frac{2x}{1 - x^2}\right)$ with $-1 < x < 1$.`,
          t`Put $x = \tan\theta$, so $\theta = \tan^{-1}x$.`,
          t`Then $\frac{2x}{1 - x^2} = \frac{2\tan\theta}{1 - \tan^2\theta}$ $= \tan 2\theta$.`,
          t`So $y = \tan^{-1}(\tan 2\theta) = 2\theta$ $= 2\tan^{-1}x$.`,
          t`Differentiate the simple form: $\frac{dy}{dx} = \frac{2}{1 + x^2}$.`,
        ],
      },
      {
        title: "Check the range",
        points: [
          t`The **principal range** is the set of angles an inverse function gives: $[0, \pi]$ for $\cos^{-1}$.`,
          t`With $x = \tan\theta$, $\theta$ lies in $(-\frac{\pi}{2}, \frac{\pi}{2})$, so $2\theta$ lies in $(-\pi, \pi)$.`,
          t`Take $y = \cos^{-1}\left(\frac{1 - x^2}{1 + x^2}\right)$ $= \cos^{-1}(\cos 2\theta)$.`,
          t`For $x > 0$, $2\theta$ is in $(0, \pi)$, so $y = 2\theta = 2\tan^{-1}x$.`,
          t`For $x < 0$, $-2\theta$ is in $(0, \pi)$, so $y = -2\theta = -2\tan^{-1}x$.`,
          t`The two slopes differ in sign, so a question states the range of $x$.`,
        ],
        figure: {
          alt: "The graph of y = cos⁻¹((1 − x²)/(1 + x²)): a V shape with its corner at the origin. For x > 0 it is y = 2 tan⁻¹ x, rising; for x < 0 it is y = −2 tan⁻¹ x, falling.",
          axes: "xy",
          view: { x: [-4, 4], y: [-1, 4] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.05, 0.1], [0.1, 0.199], [0.15, 0.298], [0.2, 0.395], [0.25, 0.49], [0.3, 0.583], [0.35, 0.673], [0.4, 0.761], [0.45, 0.846], [0.5, 0.927], [0.55, 1.006], [0.6, 1.081], [0.65, 1.153], [0.7, 1.221], [0.75, 1.287], [0.8, 1.349], [0.85, 1.409], [0.9, 1.466], [0.95, 1.52], [1, 1.571], [1.05, 1.62], [1.1, 1.666], [1.15, 1.71], [1.2, 1.752], [1.25, 1.792], [1.3, 1.83], [1.35, 1.866], [1.4, 1.901], [1.45, 1.934], [1.5, 1.966], [1.55, 1.996], [1.6, 2.024], [1.65, 2.052], [1.7, 2.078], [1.75, 2.103], [1.8, 2.127], [1.85, 2.15], [1.9, 2.173], [1.95, 2.194], [2, 2.214], [2.05, 2.234], [2.1, 2.253], [2.15, 2.271], [2.2, 2.288], [2.25, 2.305], [2.3, 2.321], [2.35, 2.337], [2.4, 2.352], [2.45, 2.367], [2.5, 2.381], [2.55, 2.394], [2.6, 2.407], [2.65, 2.42], [2.7, 2.432], [2.75, 2.444], [2.8, 2.456], [2.85, 2.467], [2.9, 2.477], [2.95, 2.488], [3, 2.498], [3.05, 2.508], [3.1, 2.518], [3.15, 2.527], [3.2, 2.536], [3.25, 2.545], [3.3, 2.553], [3.35, 2.561], [3.4, 2.569], [3.45, 2.577], [3.5, 2.585], [3.55, 2.592], [3.6, 2.6], [3.65, 2.607], [3.7, 2.614], [3.75, 2.62], [3.8, 2.627], [3.85, 2.633], [3.9, 2.64], [3.95, 2.646], [4, 2.652]], step: 4 },
            { kind: "label", at: [1.2, 1], label: "y = 2 tan⁻¹ x", labelAt: "se", step: 4 },
            { kind: "curve", points: [[-4, 2.652], [-3.95, 2.646], [-3.9, 2.64], [-3.85, 2.633], [-3.8, 2.627], [-3.75, 2.62], [-3.7, 2.614], [-3.65, 2.607], [-3.6, 2.6], [-3.55, 2.592], [-3.5, 2.585], [-3.45, 2.577], [-3.4, 2.569], [-3.35, 2.561], [-3.3, 2.553], [-3.25, 2.545], [-3.2, 2.536], [-3.15, 2.527], [-3.1, 2.518], [-3.05, 2.508], [-3, 2.498], [-2.95, 2.488], [-2.9, 2.477], [-2.85, 2.467], [-2.8, 2.456], [-2.75, 2.444], [-2.7, 2.432], [-2.65, 2.42], [-2.6, 2.407], [-2.55, 2.394], [-2.5, 2.381], [-2.45, 2.367], [-2.4, 2.352], [-2.35, 2.337], [-2.3, 2.321], [-2.25, 2.305], [-2.2, 2.288], [-2.15, 2.271], [-2.1, 2.253], [-2.05, 2.234], [-2, 2.214], [-1.95, 2.194], [-1.9, 2.173], [-1.85, 2.15], [-1.8, 2.127], [-1.75, 2.103], [-1.7, 2.078], [-1.65, 2.052], [-1.6, 2.024], [-1.55, 1.996], [-1.5, 1.966], [-1.45, 1.934], [-1.4, 1.901], [-1.35, 1.866], [-1.3, 1.83], [-1.25, 1.792], [-1.2, 1.752], [-1.15, 1.71], [-1.1, 1.666], [-1.05, 1.62], [-1, 1.571], [-0.95, 1.52], [-0.9, 1.466], [-0.85, 1.409], [-0.8, 1.349], [-0.75, 1.287], [-0.7, 1.221], [-0.65, 1.153], [-0.6, 1.081], [-0.55, 1.006], [-0.5, 0.927], [-0.45, 0.846], [-0.4, 0.761], [-0.35, 0.673], [-0.3, 0.583], [-0.25, 0.49], [-0.2, 0.395], [-0.15, 0.298], [-0.1, 0.199], [-0.05, 0.1], [0, 0]], step: 5, tone: "bad" },
            { kind: "label", at: [-1.2, 1], label: "y = −2 tan⁻¹ x", labelAt: "sw", step: 5, tone: "bad" },
          ],
        },
      },
      {
        title: "Match the outer function",
        points: [
          t`The formula may give a different trig function from the outer inverse.`,
          t`In $\cos^{-1}\left(2x\sqrt{1 - x^2}\right)$, $x = \sin\theta$ gives $\cos^{-1}(\sin 2\theta)$.`,
          t`Rewrite with $\sin\phi = \cos\left(\frac{\pi}{2} - \phi\right)$: $\cos^{-1}\left(\cos\left(\frac{\pi}{2} - 2\theta\right)\right)$.`,
          t`For $|x| < \frac{1}{\sqrt{2}}$, $\frac{\pi}{2} - 2\theta$ is in $(0, \pi)$, so $y = \frac{\pi}{2} - 2\sin^{-1}x$.`,
          t`So $\frac{dy}{dx} = -\frac{2}{\sqrt{1 - x^2}}$, not $+\frac{2}{\sqrt{1 - x^2}}$.`,
        ],
      },
      {
        title: "Finish with the chain rule",
        points: [
          t`The answer is $\frac{dy}{dx}$: $y = 2\theta$ only gives $\frac{dy}{d\theta} = 2$.`,
          t`Since $\theta$ is a function of $x$, multiply by $\frac{d\theta}{dx}$.`,
          t`In $\tan^{-1}\left(\frac{4x}{1 - 4x^2}\right)$, put $2x = \tan\theta$, so $\theta = \tan^{-1}(2x)$.`,
          t`Then $y = 2\tan^{-1}(2x)$, and $\frac{d\theta}{dx} = \frac{2}{1 + 4x^2}$ carries the factor $2$.`,
          t`So $\frac{dy}{dx} = 2 \cdot \frac{2}{1 + 4x^2}$ $= \frac{4}{1 + 4x^2}$ for $|x| < \frac{1}{2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = \sin^{-1}\left(\frac{1 - 25x^2}{1 + 25x^2}\right)$ for $x > 0$.`,
      steps: [
        t`The shape is $\frac{1 - t^2}{1 + t^2}$ with $t = 5x$: put $5x = \tan\theta$, so $\theta = \tan^{-1}(5x)$.`,
        t`The argument becomes $\frac{1 - \tan^2\theta}{1 + \tan^2\theta} = \cos 2\theta$ $= \sin\left(\frac{\pi}{2} - 2\theta\right)$.`,
        t`For $x > 0$, $\theta$ is in $\left(0, \frac{\pi}{2}\right)$, so $\frac{\pi}{2} - 2\theta$ is in $(-\frac{\pi}{2}, \frac{\pi}{2})$.`,
        t`So $y = \frac{\pi}{2} - 2\theta$ $= \frac{\pi}{2} - 2\tan^{-1}(5x)$.`,
        t`$\frac{dy}{dx} = -2 \cdot \frac{5}{1 + 25x^2}$ $= -\frac{10}{1 + 25x^2}$.`,
      ],
      answer: t`$\frac{dy}{dx} = -\frac{10}{1 + 25x^2}$`,
    },
    visualSpec: t`A slider for $x$ on the graph of $y = \cos^{-1}\left(\frac{1 - x^2}{1 + x^2}\right)$, with $\theta = \tan^{-1}x$ and $2\theta$ drawn on a unit circle: as $x$ crosses $0$, $2\theta$ leaves $[0, \pi]$ and the slope flips sign.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Using the simplified form outside its range: taking $\cos^{-1}(\cos 2\theta) = 2\theta$ even when $x < 0$`,
      remediation: t`An inverse function undoes only inside its principal range. Find where the angle lies for the stated $x$; for example, when $x < 0$, $\cos^{-1}(\cos 2\theta) = -2\theta$.`,
      fallback: { kind: "ext", topic: "principal values of inverse trigonometric functions" },
    },
    {
      id: "C05-M2",
      mistake: t`Reading $y$ straight off the inner angle: taking $\cos^{-1}(\sin 3\theta) = 3\theta$`,
      remediation: t`Match the outer function first: $\sin 3\theta = \cos\left(\frac{\pi}{2} - 3\theta\right)$, so $\cos^{-1}(\sin 3\theta) = \frac{\pi}{2} - 3\theta$ in the principal range.`,
      fallback: { kind: "ext", topic: "trigonometric functions of allied angles" },
    },
    {
      id: "C05-M3",
      mistake: t`Stopping at $\frac{dy}{d\theta}$: from $y = 2\theta$, giving $\frac{dy}{dx} = 2$`,
      remediation: t`$\theta$ is a function of $x$, so finish with the chain rule: $\frac{dy}{dx} = \frac{dy}{d\theta} \cdot \frac{d\theta}{dx}$, with $\theta = \tan^{-1}x$ or $\sin^{-1}x$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: t`Forgetting the derivative of the substituted quantity: with $3x = \tan\theta$, taking $\frac{d\theta}{dx} = \frac{1}{1 + 9x^2}$`,
      remediation: t`Multiply by the derivative of what you put equal to $\tan\theta$: if $3x = \tan\theta$, then $\frac{d\theta}{dx} = \frac{3}{1 + 9x^2}$, not $\frac{1}{1 + 9x^2}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: t`Dropping the multiple of $\theta$: taking $\tan^{-1}(\tan 2\theta)$ as $\theta$`,
      remediation: t`Keep the multiple of $\theta$: $\tan^{-1}(\tan 2\theta) = 2\theta$ and $\tan^{-1}\left(\tan\frac{\theta}{2}\right) = \frac{\theta}{2}$, and it stays in $\frac{dy}{dx}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Giving $\cos^{-1}$ a plus-sign derivative: $\frac{d}{dx}\cos^{-1}u = \frac{1}{\sqrt{1 - u^2}} \cdot \frac{du}{dx}$`,
      remediation: t`The derivative of $\cos^{-1}u$ has a minus sign: $\frac{d}{dx}\cos^{-1}u = -\frac{1}{\sqrt{1 - u^2}} \cdot \frac{du}{dx}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    "Inputs: f is y; t is the quantity put equal to tan θ, sin θ or cos θ (params.sub); m is the multiple of θ in the angle inside the outer inverse function (-1 for tan(π/4 − θ)); s is a sample x in the stem's range; std a sample x in the usual range (just above 0); at, when present, the point the item asks about.",
    "The key is sympy's derivative of f, with each sqrt of a square opened by its sign at s; it never uses the substitution.",
    "C05-M1 gives the key when the stem's range is the usual one, and equals C05-M2 on Q1 and Q2 (no co-function step there): list one of them. C05-M2 gives the key when no co-function step is needed and the range is the usual one. C05-M4 needs t ≠ x; C05-M5 needs |m| ≠ 1 and equals C05-M2 when m = −1; C05-M6 applies only to x = cos θ substitutions.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.2.6 SolvedEx.5 (v)" },
      stem: t`If $y = \cos^{-1}\left(\frac{1 - 9x^2}{1 + 9x^2}\right)$, where $x < 0$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "acos((1 - 9*x**2)/(1 + 9*x**2))", t: "3*x", m: "2", s: "-1/5", std: "1/10" }, params: { sub: "tan" } },
      options: [
        { key: "A", text: t`$-\frac{2}{1 + 9x^2}$`, correct: false, misconceptionId: "C05-M4", value: "-2/(9*x**2 + 1)" },
        { key: "B", text: t`$-\frac{6}{1 + 9x^2}$`, correct: true, value: "-6/(9*x**2 + 1)" },
        { key: "C", text: t`$\frac{6}{1 + 9x^2}$`, correct: false, misconceptionId: "C05-M1", value: "6/(9*x**2 + 1)" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C05-M3", value: "-2" },
      ],
      solution: {
        steps: [
          t`Put $3x = \tan\theta$, so $\theta = \tan^{-1}(3x)$; then $y = \cos^{-1}(\cos 2\theta)$.`,
          t`For $x < 0$, $\theta$ is in $(-\frac{\pi}{2}, 0)$, so $-2\theta$ is in $(0, \pi)$.`,
          t`$\cos 2\theta = \cos(-2\theta)$, so $y = -2\theta$ $= -2\tan^{-1}(3x)$.`,
          t`$\frac{dy}{dx} = -2 \cdot \frac{3}{1 + 9x^2}$ $= -\frac{6}{1 + 9x^2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.9 (iv)" },
      stem: t`If $y = \sin^{-1}\left(2x\sqrt{1 - x^2}\right)$, where $\frac{1}{\sqrt{2}} < x < 1$, then the value of $\frac{dy}{dx}$ at $x = \frac{4}{5}$ is`,
      verify: { kind: "value", inputs: { f: "asin(2*x*sqrt(1 - x**2))", t: "x", m: "2", s: "4/5", std: "1/10", at: "4/5" }, params: { sub: "sin" } },
      options: [
        { key: "A", text: t`$\frac{10}{3}$`, correct: false, misconceptionId: "C05-M1", value: "10/3" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C05-M3", value: "-2" },
        { key: "C", text: t`$-\frac{5}{3}$`, correct: false, misconceptionId: "C05-M5", value: "-5/3" },
        { key: "D", text: t`$-\frac{10}{3}$`, correct: true, value: "-10/3" },
      ],
      solution: {
        steps: [
          t`Put $x = \sin\theta$: $2x\sqrt{1 - x^2} = 2\sin\theta\cos\theta$ $= \sin 2\theta$.`,
          t`For $\frac{1}{\sqrt{2}} < x < 1$, $\theta$ is in $(\frac{\pi}{4}, \frac{\pi}{2})$, so $2\theta$ is in $(\frac{\pi}{2}, \pi)$.`,
          t`$\sin 2\theta = \sin(\pi - 2\theta)$, with $\pi - 2\theta$ in $(0, \frac{\pi}{2})$: $y = \pi - 2\sin^{-1}x$.`,
          t`$\frac{dy}{dx} = -\frac{2}{\sqrt{1 - x^2}}$; at $x = \frac{4}{5}$, $\sqrt{1 - x^2} = \frac{3}{5}$, so $\frac{dy}{dx} = -\frac{10}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.9 (v)" },
      stem: t`If $y = \cos^{-1}(3x - 4x^3)$, where $-\frac{1}{2} < x < \frac{1}{2}$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "acos(3*x - 4*x**3)", t: "x", m: "3", s: "1/5", std: "1/10" }, params: { sub: "sin" } },
      options: [
        { key: "A", text: t`$-\frac{3}{\sqrt{1 - x^2}}$`, correct: true, value: "-3/sqrt(1 - x**2)" },
        { key: "B", text: t`$\frac{3}{\sqrt{1 - x^2}}$`, correct: false, misconceptionId: "C05-M2", value: "3/sqrt(1 - x**2)" },
        { key: "C", text: t`$-3$`, correct: false, misconceptionId: "C05-M3", value: "-3" },
        { key: "D", text: t`$-\frac{1}{\sqrt{1 - x^2}}$`, correct: false, misconceptionId: "C05-M5", value: "-1/sqrt(1 - x**2)" },
      ],
      solution: {
        steps: [
          t`Put $x = \sin\theta$: $3x - 4x^3 = 3\sin\theta - 4\sin^3\theta$ $= \sin 3\theta$.`,
          t`Match the outer function: $\sin 3\theta = \cos\left(\frac{\pi}{2} - 3\theta\right)$.`,
          t`For $-\frac{1}{2} < x < \frac{1}{2}$, $3\theta$ is in $(-\frac{\pi}{2}, \frac{\pi}{2})$, so $\frac{\pi}{2} - 3\theta$ is in $(0, \pi)$.`,
          t`So $y = \frac{\pi}{2} - 3\sin^{-1}x$, and $\frac{dy}{dx} = -\frac{3}{\sqrt{1 - x^2}}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.9 (xi)" },
      stem: t`If $y = \tan^{-1}\left(\frac{2x^{\frac{5}{2}}}{1 - x^5}\right)$, where $0 < x < 1$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "atan(2*x**(5/2)/(1 - x**5))", t: "x**(5/2)", m: "2", s: "1/2", std: "1/10" }, params: { sub: "tan" } },
      options: [
        { key: "A", text: t`$\frac{2}{1 + x^5}$`, correct: false, misconceptionId: "C05-M4", value: "2/(x**5 + 1)" },
        { key: "B", text: t`$\frac{5x^{\frac{3}{2}}}{2(1 + x^5)}$`, correct: false, misconceptionId: "C05-M5", value: "5*x**(3/2)/(2*(x**5 + 1))" },
        { key: "C", text: t`$\frac{5x^{\frac{3}{2}}}{1 + x^5}$`, correct: true, value: "5*x**(3/2)/(x**5 + 1)" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C05-M3", value: "2" },
      ],
      solution: {
        steps: [
          t`Put $x^{\frac{5}{2}} = \tan\theta$; then $x^5 = \tan^2\theta$, and the argument is $\tan 2\theta$.`,
          t`For $0 < x < 1$, $\theta$ is in $(0, \frac{\pi}{4})$, so $y = 2\theta$ $= 2\tan^{-1}\left(x^{\frac{5}{2}}\right)$.`,
          t`$\frac{dy}{dx} = \frac{2}{1 + x^5} \cdot \frac{5}{2}x^{\frac{3}{2}}$ $= \frac{5x^{\frac{3}{2}}}{1 + x^5}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.2.6 SolvedEx.5 (vii)" },
      stem: t`If $y = \tan^{-1}\left(\sqrt{\frac{3 - x}{3 + x}}\right)$, where $-3 < x < 3$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "atan(sqrt((3 - x)/(3 + x)))", t: "x/3", m: "1/2", s: "1", std: "1/10" }, params: { sub: "cos" } },
      options: [
        { key: "A", text: t`$-\frac{1}{2\sqrt{9 - x^2}}$`, correct: true, value: "-1/(2*sqrt(9 - x**2))" },
        { key: "B", text: t`$-\frac{3}{2\sqrt{9 - x^2}}$`, correct: false, misconceptionId: "C05-M4", value: "-3/(2*sqrt(9 - x**2))" },
        { key: "C", text: t`$-\frac{1}{\sqrt{9 - x^2}}$`, correct: false, misconceptionId: "C05-M5", value: "-1/sqrt(9 - x**2)" },
        { key: "D", text: t`$\frac{1}{2\sqrt{9 - x^2}}$`, correct: false, misconceptionId: "C05-M6", value: "1/(2*sqrt(9 - x**2))" },
      ],
      solution: {
        steps: [
          t`Put $x = 3\cos\theta$ with $\theta$ in $(0, \pi)$, so $\theta = \cos^{-1}\frac{x}{3}$.`,
          t`$\frac{3 - x}{3 + x} = \frac{1 - \cos\theta}{1 + \cos\theta}$ $= \tan^2\frac{\theta}{2}$, and $\tan\frac{\theta}{2} > 0$.`,
          t`So $y = \tan^{-1}\left(\tan\frac{\theta}{2}\right)$ $= \frac{1}{2}\cos^{-1}\frac{x}{3}$.`,
          t`$\frac{dy}{dx} = \frac{1}{2} \cdot \frac{-1}{\sqrt{1 - \frac{x^2}{9}}} \cdot \frac{1}{3}$ $= -\frac{1}{2\sqrt{9 - x^2}}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.9 (xii)" },
      stem: t`If $y = \cot^{-1}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)$, where $x > 0$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "acot((1 - sqrt(x))/(1 + sqrt(x)))", t: "sqrt(x)", m: "-1", s: "4", std: "1/10" }, params: { sub: "tan" } },
      options: [
        { key: "A", text: t`$\frac{1}{2\sqrt{x}(1 + x)}$`, correct: true, value: "1/(2*sqrt(x)*(x + 1))" },
        { key: "B", text: t`$-\frac{1}{2\sqrt{x}(1 + x)}$`, correct: false, misconceptionId: "C05-M2", value: "-1/(2*sqrt(x)*(x + 1))" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C05-M3", value: "1" },
        { key: "D", text: t`$\frac{1}{1 + x}$`, correct: false, misconceptionId: "C05-M4", value: "1/(x + 1)" },
      ],
      solution: {
        steps: [
          t`Put $\sqrt{x} = \tan\theta$ with $\theta$ in $(0, \frac{\pi}{2})$; as $\tan\frac{\pi}{4} = 1$, the argument is $\tan\left(\frac{\pi}{4} - \theta\right)$.`,
          t`Match the outer function: $\tan\left(\frac{\pi}{4} - \theta\right) = \cot\left(\frac{\pi}{4} + \theta\right)$, and $\frac{\pi}{4} + \theta$ is in $(0, \pi)$.`,
          t`So $y = \frac{\pi}{4} + \theta$ $= \frac{\pi}{4} + \tan^{-1}\sqrt{x}$.`,
          t`$\frac{dy}{dx} = \frac{1}{1 + x} \cdot \frac{1}{2\sqrt{x}}$ $= \frac{1}{2\sqrt{x}(1 + x)}$.`,
        ],
      },
    },
  ],
};
