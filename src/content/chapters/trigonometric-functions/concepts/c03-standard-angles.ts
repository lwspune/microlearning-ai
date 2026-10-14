import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: $\cos 1^\circ \cdot \cos 2^\circ \cdot \cos 3^\circ \cdots \cos 179^\circ = ?$`,
    reveal: t`$0$. One of the factors is $\cos 90^\circ$. At $90^\circ$ the point on the terminal arm is $(0, 1)$, so $\cos 90^\circ = \frac{x}{r} = 0$. One zero factor makes the whole product $0$, whatever the other $178$ factors are.`,
  },
  explanation: {
    intuition: t`Every value comes from one point $P(x, y)$ on the terminal arm: $\sin\theta = \frac{y}{r}$, $\cos\theta = \frac{x}{r}$. At $30^\circ$, $45^\circ$ and $60^\circ$ the half-square and the half equilateral triangle give exact sides, so the values are exact surds. On the axes, take $r = 1$: the point is $(\pm 1, 0)$ or $(0, \pm 1)$, and you read $\cos\theta$ and $\sin\theta$ straight off it. So you never guess a value: picture the point, read $x$ and $y$.`,
    formal: t`**The table**

$$\begin{array}{c|ccccc} \theta & 0^\circ & 30^\circ & 45^\circ & 60^\circ & 90^\circ \\ \hline \sin\theta & 0 & \frac{1}{2} & \frac{1}{\sqrt{2}} & \frac{\sqrt{3}}{2} & 1 \\ \cos\theta & 1 & \frac{\sqrt{3}}{2} & \frac{1}{\sqrt{2}} & \frac{1}{2} & 0 \\ \tan\theta & 0 & \frac{1}{\sqrt{3}} & 1 & \sqrt{3} & \text{not defined} \end{array}$$

Sine climbs from $0$ to $1$; cosine falls from $1$ to $0$. In radians: $30^\circ = \frac{\pi}{6}$, $45^\circ = \frac{\pi}{4}$, $60^\circ = \frac{\pi}{3}$, $90^\circ = \frac{\pi}{2}$.

**The axes** (with $r = 1$, $\cos\theta = x$ and $\sin\theta = y$)

- $0^\circ$ and $360^\circ$: $(1, 0)$, so $\cos = 1$, $\sin = 0$.
- $90^\circ$: $(0, 1)$, so $\cos = 0$, $\sin = 1$.
- $180^\circ = \pi$: $(-1, 0)$, so $\cos = -1$, $\sin = 0$.
- $270^\circ = \frac{3\pi}{2}$: $(0, -1)$, so $\cos = 0$, $\sin = -1$.

**The other three are reciprocals**

$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, $\cot\theta = \frac{1}{\tan\theta}$: e.g. $\operatorname{cosec} 30^\circ = 2$. A value is not defined where its denominator is $0$: $\tan 90^\circ$, $\sec 90^\circ$, $\cot 0^\circ$, $\operatorname{cosec} 0^\circ$.

**Evaluating an expression**

Find each angle first ($\sin 2\theta$ is the sine of the angle $2\theta$), then put in each value, then do the powers: $\sin^2\theta = (\sin\theta)^2$.

**Long products**

A factor equal to $0$ makes the whole product $0$. In $\tan 1^\circ \tan 2^\circ \cdots \tan 89^\circ$, pair $\tan\theta$ with $\tan(90^\circ - \theta) = \cot\theta$: each pair is $1$, and the middle factor is $\tan 45^\circ = 1$, so the product is $1$.`,
    worked: {
      prompt: t`If $\theta = 60^\circ$, find $\frac{1 + \tan^2\theta}{2\tan\theta}$.`,
      steps: [
        t`$\tan 60^\circ = \frac{\sin 60^\circ}{\cos 60^\circ} = \frac{\sqrt{3}/2}{1/2} = \sqrt{3}$.`,
        t`Square it: $\tan^2 60^\circ = 3$, so the numerator is $1 + 3 = 4$.`,
        t`The denominator is $2\sqrt{3}$, so the value is $\frac{4}{2\sqrt{3}} = \frac{2}{\sqrt{3}}$.`,
      ],
      answer: t`$\frac{2}{\sqrt{3}}$`,
    },
    visualSpec: t`Drag a point round a circle of radius $1$; it snaps to $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$ and the axes, and shows its co-ordinates $(x, y)$ as $(\cos\theta, \sin\theta)$ in exact surds.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Mixing up $30^\circ$ and $60^\circ$: $\sin 30^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{\sqrt{3}}{2}$, $\tan 60^\circ = \frac{1}{\sqrt{3}}$`,
      remediation: t`At $30^\circ$ the point is $(\sqrt{3}, 1)$ with $r = 2$, so $\sin 30^\circ = \frac{1}{2}$ and $\cos 30^\circ = \frac{\sqrt{3}}{2}$. Sine grows from $0^\circ$ to $90^\circ$, so $\sin 30^\circ = \frac{1}{2}$ is the smaller one and $\sin 60^\circ = \frac{\sqrt{3}}{2}$ the larger.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`On the axes, reading sine and cosine the wrong way round: $\cos 90^\circ = 1$, $\sin 0^\circ = 1$, $\sin 180^\circ = -1$`,
      remediation: t`On an axis take $r = 1$: $\cos\theta$ is the $x$-co-ordinate of the point and $\sin\theta$ the $y$-co-ordinate. At $90^\circ$ the point is $(0, 1)$, so $\cos 90^\circ = 0$ and $\sin 90^\circ = 1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Dropping the minus sign on the negative axes: $\cos 180^\circ = 1$, $\sin 270^\circ = 1$`,
      remediation: t`At $180^\circ$ the point is $(-1, 0)$, so $\cos 180^\circ = -1$; at $270^\circ$ it is $(0, -1)$, so $\sin 270^\circ = -1$. A point on the negative half of an axis gives a negative value.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Pairing the reciprocals wrongly: $\sec\theta = \frac{1}{\sin\theta}$, $\operatorname{cosec}\theta = \frac{1}{\cos\theta}$`,
      remediation: t`$\sec\theta = \frac{1}{\cos\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: each pairs a co-function with a plain one, so $\sec$ goes with $\cos$ and $\operatorname{cosec}$ with $\sin$. So $\operatorname{cosec} 30^\circ = \frac{1}{\sin 30^\circ} = 2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: t`Taking a multiple out of the function: $\sin 2\theta = 2\sin\theta$, $\cos 3\theta = 3\cos\theta$`,
      remediation: t`$\sin 2\theta$ is the sine of the angle $2\theta$: work out $2\theta$ first, then take its sine. For $\theta = 30^\circ$, $\sin 2\theta = \sin 60^\circ = \frac{\sqrt{3}}{2}$, not $2\sin 30^\circ = 1$.`,
      fallback: { kind: "ext", topic: "function notation" },
    },
    {
      id: "C03-M6",
      mistake: t`Dropping the power: $\sec^2 60^\circ$ worked out as $\sec 60^\circ$`,
      remediation: t`$\cos^2\theta$ means $(\cos\theta)^2$: find the value, then square it. For example $\cos^2 30^\circ = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M1 changes only $30^\circ$ and $60^\circ$ terms. On a lone $\sec$ or $\operatorname{cosec}$ of $30^\circ$ or $60^\circ$ it gives the same value as C03-M4 ($\frac{1}{\sin 60^\circ} = \operatorname{cosec} 60^\circ$), so the two separate only when another $30^\circ$ or $60^\circ$ term is present.`,
    t`C03-M2 and C03-M3 apply only to axis angles; C03-M3 only where an axis value is negative, and an even power hides it ($\sin^2 270^\circ = 1$ either way).`,
    t`C03-M5 needs a multiple of $\theta$ inside a function; C03-M6 needs a power of a value other than $0$ or $1$.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q8(i)" },
      stem: t`The value of $4\cot 45^\circ - \sec^2 60^\circ + \sin 30^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { expr: "4*cot(45) - sec(60)**2 + sin(30)" } },
      options: [
        { key: "A", text: t`$\frac{19}{6}$`, correct: false, misconceptionId: "C03-M4", value: "19/6" },
        { key: "B", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C03-M6", value: "5/2" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: true, value: "1/2" },
        { key: "D", text: t`$\frac{8}{3} + \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(3)/2 + 8/3" },
      ],
      solution: {
        steps: [
          t`$\cot 45^\circ = 1$, $\sin 30^\circ = \frac{1}{2}$ and $\sec 60^\circ = \frac{1}{\cos 60^\circ} = 2$.`,
          t`Square it: $\sec^2 60^\circ = 2^2 = 4$.`,
          t`$4(1) - 4 + \frac{1}{2} = \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.3" },
      stem: t`The value of $\cos 0 + 2\cos\pi + 3\sin^2\frac{3\pi}{2}$ is:`,
      verify: { kind: "value", inputs: {  }, params: { expr: "cos(0) + 2*cos(180) + 3*sin(270)**2" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C03-M3", value: "6" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C03-M6", value: "-4" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
      ],
      solution: {
        steps: [
          t`With $r = 1$: $\cos 0 = 1$ from $(1, 0)$, $\cos\pi = -1$ from $(-1, 0)$, and $\sin\frac{3\pi}{2} = -1$ from $(0, -1)$.`,
          t`Square it: $\sin^2\frac{3\pi}{2} = (-1)^2 = 1$.`,
          t`$1 + 2(-1) + 3(1) = 2$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.2" },
      stem: t`If $\theta = 30^\circ$, then $\cos 2\theta + \sin 3\theta$ is equal to:`,
      verify: { kind: "value", inputs: { t: "30" }, params: { expr: "cos(2*t) + sin(3*t)" } },
      options: [
        { key: "A", text: t`$1 + \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(3)/2 + 1" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M2", value: "1/2" },
        { key: "C", text: t`$\frac{3}{2} + \sqrt{3}$`, correct: false, misconceptionId: "C03-M5", value: "3/2 + sqrt(3)" },
        { key: "D", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
      ],
      solution: {
        steps: [
          t`Find the angles first: $2\theta = 60^\circ$ and $3\theta = 90^\circ$.`,
          t`$\cos 60^\circ = \frac{1}{2}$ and $\sin 90^\circ = 1$, from the point $(0, 1)$.`,
          t`$\frac{1}{2} + 1 = \frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q5(i)" },
      stem: t`The value of $\sin 30^\circ + \cos 45^\circ + \cos 180^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { expr: "sin(30) + cos(45) + cos(180)" } },
      options: [
        { key: "A", text: t`$\frac{1 + \sqrt{2}}{2}$`, correct: false, misconceptionId: "C03-M2", value: "1/2 + sqrt(2)/2" },
        { key: "B", text: t`$\frac{3 + \sqrt{2}}{2}$`, correct: false, misconceptionId: "C03-M3", value: "sqrt(2)/2 + 3/2" },
        { key: "C", text: t`$\frac{\sqrt{2} - 1}{2}$`, correct: true, value: "-1/2 + sqrt(2)/2" },
        { key: "D", text: t`$\frac{\sqrt{3} + \sqrt{2} - 2}{2}$`, correct: false, misconceptionId: "C03-M1", value: "-1 + sqrt(2)/2 + sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$\sin 30^\circ = \frac{1}{2}$ and $\cos 45^\circ = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.`,
          t`At $180^\circ$ the point is $(-1, 0)$, so $\cos 180^\circ = -1$.`,
          t`$\frac{1}{2} + \frac{\sqrt{2}}{2} - 1 = \frac{\sqrt{2} - 1}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q5(ii)" },
      stem: t`The value of $\operatorname{cosec}^2 45^\circ + \cot 30^\circ + \sec 60^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { expr: "cosec(45)**2 + cot(30) + sec(60)" } },
      options: [
        { key: "A", text: t`$4 + \sqrt{3}$`, correct: true, value: "sqrt(3) + 4" },
        { key: "B", text: t`$2 + \sqrt{3}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(3) + 2" },
        { key: "C", text: t`$2 + \frac{5\sqrt{3}}{3}$`, correct: false, misconceptionId: "C03-M4", value: "2 + 5*sqrt(3)/3" },
        { key: "D", text: t`$2 + \sqrt{2} + \sqrt{3}$`, correct: false, misconceptionId: "C03-M6", value: "sqrt(2) + sqrt(3) + 2" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec} 45^\circ = \frac{1}{\sin 45^\circ} = \sqrt{2}$, so $\operatorname{cosec}^2 45^\circ = 2$.`,
          t`$\cot 30^\circ = \frac{\cos 30^\circ}{\sin 30^\circ} = \sqrt{3}$ and $\sec 60^\circ = \frac{1}{\cos 60^\circ} = 2$.`,
          t`$2 + \sqrt{3} + 2 = 4 + \sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q4" },
      stem: t`If $\theta = 45^\circ$, then $2\sin 2\theta + \cos^2\theta$ is equal to:`,
      verify: { kind: "value", inputs: { t: "45" }, params: { expr: "2*sin(2*t) + cos(t)**2" } },
      options: [
        { key: "A", text: t`$\frac{5}{2}$`, correct: true, value: "5/2" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M2", value: "1/2" },
        { key: "C", text: t`$2\sqrt{2} + \frac{1}{2}$`, correct: false, misconceptionId: "C03-M5", value: "1/2 + 2*sqrt(2)" },
        { key: "D", text: t`$2 + \frac{\sqrt{2}}{2}$`, correct: false, misconceptionId: "C03-M6", value: "sqrt(2)/2 + 2" },
      ],
      solution: {
        steps: [
          t`Find the angle first: $2\theta = 90^\circ$, so $\sin 2\theta = \sin 90^\circ = 1$.`,
          t`$\cos 45^\circ = \frac{1}{\sqrt{2}}$, so $\cos^2 45^\circ = \frac{1}{2}$.`,
          t`$2(1) + \frac{1}{2} = \frac{5}{2}$.`,
        ],
      },
    },
  ],
};
