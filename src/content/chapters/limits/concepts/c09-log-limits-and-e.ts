import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`As $x \to 0$, the base of $(1 + x)^{\frac{1}{x}}$ tends to $1$, and $1$ to any power is $1$. Yet $1.01^{100} \approx 2.705$ and $1.001^{1000} \approx 2.717$. **What is it heading for?**`,
    reveal: t`Not $1$. The base creeps towards $1$ while the power $\frac{1}{x}$ shoots up, and the two balance at the number $e \approx 2.718$. A base near $1$ raised to a huge power need not be near $1$.`,
  },
  explanation: {
    intuition: [
      t`In this chapter $\log$ means $\log_e$, the natural logarithm, as in the book.`,
      t`Near $0$, $\log(1 + x)$ is almost exactly $x$: at $x = 0.01$ it is $0.00995$.`,
      t`So the fraction $\frac{\log(1 + x)}{x}$ settles on $1$ as $x \to 0$.`,
      t`The number $e \approx 2.718$ is where $(1 + x)^{\frac{1}{x}}$ settles as $x \to 0$.`,
      t`An **indeterminate form**, like $\frac{0}{0}$ or $1^\infty$, does not by itself tell you the limit.`,
      t`The two facts are one: the $\log$ of $(1 + x)^{\frac{1}{x}}$ is exactly $\frac{\log(1 + x)}{x}$.`,
    ],
    formal: [
      {
        title: "The two standard limits",
        points: [
          t`**Result 1:** $\lim_{x \to 0} \frac{\log(1 + x)}{x} = 1$.`,
          t`**Result 2:** $\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e$.`,
          t`They are linked: $\log\left[(1 + x)^{\frac{1}{x}}\right]$ $= \frac{\log(1 + x)}{x}$, which tends to $1 = \log e$.`,
          t`At $x = 0$ they read $\frac{0}{0}$ and $1^\infty$, so putting $x = 0$ tells you nothing.`,
        ],
        figure: {
          alt: "Two curves for x from −0.8 to 3. The curve y = log(1 + x)/x falls through heights near 1 and has a hollow point at (0, 1): it is not defined at x = 0 but tends to 1 there. The curve y = (1 + x)^(1/x) falls through heights near 2.7 and has a hollow point at (0, e), with e about 2.718.",
          axes: "xy",
          view: { x: [-0.8, 3], y: [-0.5, 5] },
          elements: [
            { kind: "curve", points: [[-0.8, 2.012], [-0.753, 1.856], [-0.705, 1.732], [-0.658, 1.63], [-0.61, 1.544], [-0.562, 1.47], [-0.515, 1.405], [-0.468, 1.348], [-0.42, 1.297], [-0.373, 1.251], [-0.325, 1.209], [-0.278, 1.171], [-0.23, 1.136], [-0.183, 1.104], [-0.135, 1.074], [-0.088, 1.046], [-0.04, 1.021], [0.007, 0.996], [0.055, 0.973], [0.103, 0.952], [0.15, 0.932], [0.197, 0.913], [0.245, 0.894], [0.292, 0.877], [0.34, 0.861], [0.387, 0.845], [0.435, 0.83], [0.482, 0.816], [0.53, 0.802], [0.577, 0.789], [0.625, 0.777], [0.672, 0.765], [0.72, 0.753], [0.767, 0.742], [0.815, 0.731], [0.863, 0.721], [0.91, 0.711], [0.957, 0.701], [1.005, 0.692], [1.052, 0.683], [1.1, 0.674], [1.147, 0.666], [1.195, 0.658], [1.242, 0.65], [1.29, 0.642], [1.338, 0.635], [1.385, 0.628], [1.432, 0.621], [1.48, 0.614], [1.527, 0.607], [1.575, 0.601], [1.622, 0.594], [1.67, 0.588], [1.717, 0.582], [1.765, 0.576], [1.812, 0.571], [1.86, 0.565], [1.907, 0.56], [1.955, 0.554], [2.002, 0.549], [2.05, 0.544], [2.098, 0.539], [2.145, 0.534], [2.192, 0.529], [2.24, 0.525], [2.287, 0.52], [2.335, 0.516], [2.383, 0.511], [2.43, 0.507], [2.478, 0.503], [2.525, 0.499], [2.572, 0.495], [2.62, 0.491], [2.667, 0.487], [2.715, 0.483], [2.763, 0.48], [2.81, 0.476], [2.857, 0.472], [2.905, 0.469], [2.952, 0.465], [3, 0.462]], step: 1 },
            { kind: "point", at: [0, 1], hollow: true, label: "(0, 1)", labelAt: "ne", step: 1 },
            { kind: "label", at: [1.2, 1.2], label: "y = log(1 + x)/x", labelAt: "e", step: 1 },
            { kind: "curve", points: [[-0.8, 7.477], [-0.753, 6.396], [-0.705, 5.65], [-0.658, 5.102], [-0.61, 4.682], [-0.562, 4.348], [-0.515, 4.076], [-0.468, 3.85], [-0.42, 3.658], [-0.373, 3.494], [-0.325, 3.351], [-0.278, 3.226], [-0.23, 3.115], [-0.183, 3.017], [-0.135, 2.928], [-0.088, 2.848], [-0.04, 2.775], [0.007, 2.708], [0.055, 2.647], [0.103, 2.591], [0.15, 2.539], [0.197, 2.491], [0.245, 2.446], [0.292, 2.404], [0.34, 2.365], [0.387, 2.328], [0.435, 2.294], [0.482, 2.261], [0.53, 2.231], [0.577, 2.202], [0.625, 2.175], [0.672, 2.149], [0.72, 2.124], [0.767, 2.1], [0.815, 2.078], [0.863, 2.057], [0.91, 2.036], [0.957, 2.017], [1.005, 1.998], [1.052, 1.98], [1.1, 1.963], [1.147, 1.947], [1.195, 1.931], [1.242, 1.915], [1.29, 1.901], [1.338, 1.887], [1.385, 1.873], [1.432, 1.86], [1.48, 1.847], [1.527, 1.835], [1.575, 1.823], [1.622, 1.812], [1.67, 1.801], [1.717, 1.79], [1.765, 1.779], [1.812, 1.769], [1.86, 1.759], [1.907, 1.75], [1.955, 1.741], [2.002, 1.732], [2.05, 1.723], [2.098, 1.714], [2.145, 1.706], [2.192, 1.698], [2.24, 1.69], [2.287, 1.682], [2.335, 1.675], [2.383, 1.668], [2.43, 1.661], [2.478, 1.654], [2.525, 1.647], [2.572, 1.64], [2.62, 1.634], [2.667, 1.628], [2.715, 1.622], [2.763, 1.616], [2.81, 1.61], [2.857, 1.604], [2.905, 1.598], [2.952, 1.593], [3, 1.587]], step: 2, tone: "accent" },
            { kind: "point", at: [0, 2.718], hollow: true, label: "(0, e)", labelAt: "ne", step: 2, tone: "accent" },
            { kind: "label", at: [1.2, 2.6], label: "y = (1 + x)^(1/x)", labelAt: "e", step: 2, tone: "accent" },
          ],
        },
      },
      {
        title: "Using the first result",
        points: [
          t`For a constant $k \ne 0$: $\frac{\log(1 + kx)}{x}$ $= k \cdot \frac{\log(1 + kx)}{kx}$.`,
          t`As $x \to 0$, $kx \to 0$ too, so the last fraction tends to $1$.`,
          t`So $\lim_{x \to 0} \frac{\log(1 + kx)}{x} = k$.`,
          t`Example: $\frac{\log(1 + 7x)}{x} \to 7$, not $\frac{1}{7}$.`,
          t`A minus makes $k$ negative: $\frac{\log(1 - 2x)}{x} \to -2$.`,
        ],
      },
      {
        title: "Using the second result",
        points: [
          t`Make the power match the inside: $(1 + kx)^{\frac{1}{x}}$ $= \left[(1 + kx)^{\frac{1}{kx}}\right]^k$.`,
          t`The bracket tends to $e$, so $(1 + kx)^{\frac{1}{x}} \to e^k$.`,
          t`A constant $m$ in the power multiplies the exponent: $(1 + kx)^{\frac{m}{x}} \to e^{km}$.`,
          t`The minus stays: $(1 - 3x)^{\frac{1}{x}} \to e^{-3}$.`,
          t`**$1^\infty$ is not $1$.** The base tends to $1$, but the power grows; the limit depends on both.`,
        ],
      },
      {
        title: "First make it 1 + small",
        points: [
          t`Both results need exactly $1 +$ (something small); a constant in front must come out first.`,
          t`$a + bx = a\left(1 + \frac{b}{a}x\right)$, so the coefficient that counts is $\frac{b}{a}$, not $b$.`,
          t`For logs, $\log a$ splits off: $\log(5 + x)$ $= \log 5 + \log\left(1 + \frac{x}{5}\right)$.`,
          t`In a quotient like $\frac{a + bx}{a + dx}$, the two $a$'s cancel and leave $\frac{1 + \frac{b}{a}x}{1 + \frac{d}{a}x}$.`,
          t`Then use the result on top and bottom separately, and divide.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\displaystyle\lim_{x \to 0} \left(\frac{3x + 2}{2 - 5x}\right)^{\frac{1}{3x}}$.`,
      steps: [
        t`Take $2$ out of top and bottom: $\frac{2 + 3x}{2 - 5x}$ $= \frac{1 + \frac{3x}{2}}{1 - \frac{5x}{2}}$.`,
        t`Top: $\left(1 + \frac{3x}{2}\right)^{\frac{1}{x}} \to e^{\frac{3}{2}}$.`,
        t`Bottom: $\left(1 - \frac{5x}{2}\right)^{\frac{1}{x}} \to e^{-\frac{5}{2}}$; the minus stays.`,
        t`So with power $\frac{1}{x}$ the quotient tends to $e^{\frac{3}{2} + \frac{5}{2}} = e^4$.`,
        t`The power $\frac{1}{3x}$ is a third of $\frac{1}{x}$: the limit is $\left(e^4\right)^{\frac{1}{3}} = e^{\frac{4}{3}}$.`,
      ],
      answer: t`$e^{\frac{4}{3}}$`,
    },
    visualSpec: t`Drag $k$: the curve $y = (1 + kx)^{\frac{1}{x}}$ moves so that its hole at $x = 0$ sits at height $e^k$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Reads $1^\infty$ as $1$: the base tends to $1$, and $1$ to any power is $1$.`,
      remediation: t`$1^\infty$ is an indeterminate form: the base nears $1$ while the power grows. Use $(1 + kx)^{\frac{1}{x}} \to e^k$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C09-M2",
      mistake: t`Treats $a + bx$ like $1 + bx$ without taking out $a$, so the coefficient used is $b$ instead of $\frac{b}{a}$.`,
      remediation: t`The standard results need $1 +$ (something small). Write $a + bx = a\left(1 + \frac{b}{a}x\right)$ first: the coefficient is $\frac{b}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Matches the coefficient the wrong way round: $(1 + kx)^{\frac{1}{x}} \to e^{\frac{1}{k}}$ and $\frac{\log(1 + kx)}{x} \to \frac{1}{k}$.`,
      remediation: t`Make the power match the inside: $(1 + kx)^{\frac{1}{x}} = \left[(1 + kx)^{\frac{1}{kx}}\right]^k \to e^k$. Likewise $\frac{\log(1 + kx)}{x} \to k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Loses the minus in $1 - qx$: takes $(1 - qx)^{\frac{1}{x}} \to e^q$ and $\frac{\log(1 - qx)}{x} \to q$.`,
      remediation: t`$1 - qx$ is $1 + (-q)x$, so $k = -q$ and $(1 - qx)^{\frac{1}{x}} \to e^{-q}$. Dividing by it then adds $q$ to the exponent.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Mixes up the two results: gives a power's limit as its exponent alone (no $e$), or a log quotient's limit as $e$ to that number.`,
      remediation: t`$\frac{\log(1 + kx)}{x} \to k$, a plain number, while $(1 + kx)^{\frac{1}{x}} \to e^k$, a power of $e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Ignores the constant in a power $\frac{m}{x}$, working as if the power were $\frac{1}{x}$.`,
      remediation: t`$(1 + kx)^{\frac{m}{x}} = \left[(1 + kx)^{\frac{1}{x}}\right]^m \to e^{km}$: the $m$ multiplies the exponent.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    t`C09-M1 and C09-M6 apply to powers only; C09-M6 needs a power $\frac{m}{x}$ with $m \ne 1$. C09-M2 needs a constant other than $1$ in front of $x$'s bracket; C09-M4 needs a minus sign.`,
    t`Avoid $\left(\frac{1 + kx}{1 - kx}\right)^{\frac{1}{x}}$ with C09-M1 and C09-M4 together: both give $1$. C09-M3 gives the key when every coefficient is $\pm 1$.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/7.6 SolvedEx.3" },
      stem: t`$\lim_{x \to 0} \left(1 + \dfrac{5x}{6}\right)^{\frac{1}{x}}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(1 + 5*x/6)**(1/x)", kind: "pow", num: "1,5/6" } },
      options: [
        { key: "A", text: t`$e^{\frac{6}{5}}$`, correct: false, misconceptionId: "C09-M3", value: "exp(6/5)" },
        { key: "B", text: t`$\frac{5}{6}$`, correct: false, misconceptionId: "C09-M5", value: "5/6" },
        { key: "C", text: t`$e^{\frac{5}{6}}$`, correct: true, value: "exp(5/6)" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C09-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`Match the power to the inside: $\left(1 + \frac{5x}{6}\right)^{\frac{1}{x}}$ $= \left[\left(1 + \frac{5x}{6}\right)^{\frac{6}{5x}}\right]^{\frac{5}{6}}$.`,
          t`The bracket tends to $e$, so the limit is $e^{\frac{5}{6}}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 II Q2" },
      stem: t`$\lim_{x \to 0} \left(\dfrac{3 + x}{3 - x}\right)^{\frac{1}{x}}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "((3 + x)/(3 - x))**(1/x)", kind: "pow", num: "3,1", den: "3,-1" } },
      options: [
        { key: "A", text: t`$e^{\frac{2}{3}}$`, correct: true, value: "exp(2/3)" },
        { key: "B", text: t`$e^{2}$`, correct: false, misconceptionId: "C09-M2", value: "exp(2)" },
        { key: "C", text: t`$e^{6}$`, correct: false, misconceptionId: "C09-M3", value: "exp(6)" },
        { key: "D", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C09-M5", value: "2/3" },
      ],
      solution: {
        steps: [
          t`Take $3$ out of top and bottom: $\frac{3 + x}{3 - x}$ $= \frac{1 + \frac{x}{3}}{1 - \frac{x}{3}}$.`,
          t`Top: $\left(1 + \frac{x}{3}\right)^{\frac{1}{x}} \to e^{\frac{1}{3}}$. Bottom: $\left(1 - \frac{x}{3}\right)^{\frac{1}{x}} \to e^{-\frac{1}{3}}$.`,
          t`So the limit is $e^{\frac{1}{3} + \frac{1}{3}} = e^{\frac{2}{3}}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 II Q3" },
      stem: t`$\lim_{x \to 0} \left(\dfrac{5x + 3}{3 - 2x}\right)^{\frac{2}{x}}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "((5*x + 3)/(3 - 2*x))**(2/x)", kind: "pow", num: "3,5", den: "3,-2", m: "2" } },
      options: [
        { key: "A", text: t`$e^{14}$`, correct: false, misconceptionId: "C09-M2", value: "exp(14)" },
        { key: "B", text: t`$e^{2}$`, correct: false, misconceptionId: "C09-M4", value: "exp(2)" },
        { key: "C", text: t`$e^{\frac{7}{3}}$`, correct: false, misconceptionId: "C09-M6", value: "exp(7/3)" },
        { key: "D", text: t`$e^{\frac{14}{3}}$`, correct: true, value: "exp(14/3)" },
      ],
      solution: {
        steps: [
          t`Take $3$ out of top and bottom: $\frac{3 + 5x}{3 - 2x}$ $= \frac{1 + \frac{5x}{3}}{1 - \frac{2x}{3}}$.`,
          t`With power $\frac{1}{x}$: top $\to e^{\frac{5}{3}}$, bottom $\to e^{-\frac{2}{3}}$, so the quotient $\to e^{\frac{7}{3}}$.`,
          t`The power $\frac{2}{x}$ is twice $\frac{1}{x}$: the limit is $\left(e^{\frac{7}{3}}\right)^2 = e^{\frac{14}{3}}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.6 II Q4" },
      stem: t`Here $\log$ is to base $e$. $\lim_{x \to 0} \dfrac{\log(3 - x) - \log(3 + x)}{x}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(log(3 - x) - log(3 + x))/x", kind: "log", num: "3,-1", den: "3,1" } },
      options: [
        { key: "A", text: t`$- \frac{2}{3}$`, correct: true, value: "-2/3" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C09-M2", value: "-2" },
        { key: "C", text: t`$-6$`, correct: false, misconceptionId: "C09-M3", value: "-6" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C09-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`Split off $\log 3$: $\log(3 - x) = \log 3 + \log\left(1 - \frac{x}{3}\right)$, and likewise for $3 + x$.`,
          t`The $\log 3$'s cancel, leaving $\frac{\log\left(1 - \frac{x}{3}\right)}{x}$ $- \frac{\log\left(1 + \frac{x}{3}\right)}{x}$.`,
          t`These tend to $-\frac{1}{3}$ and $\frac{1}{3}$, so the limit is $-\frac{1}{3} - \frac{1}{3} = -\frac{2}{3}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Misc I Q9" },
      stem: t`$\lim_{x \to 0} \left(\dfrac{3 + 5x}{3 - 4x}\right)^{\frac{1}{x}}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "((3 + 5*x)/(3 - 4*x))**(1/x)", kind: "pow", num: "3,5", den: "3,-4" } },
      options: [
        { key: "A", text: t`$e^{9}$`, correct: false, misconceptionId: "C09-M2", value: "exp(9)" },
        { key: "B", text: t`$e^{\frac{1}{3}}$`, correct: false, misconceptionId: "C09-M4", value: "exp(1/3)" },
        { key: "C", text: t`$e^{3}$`, correct: true, value: "exp(3)" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C09-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`Take $3$ out of top and bottom: $\frac{3 + 5x}{3 - 4x}$ $= \frac{1 + \frac{5x}{3}}{1 - \frac{4x}{3}}$.`,
          t`Top: $\left(1 + \frac{5x}{3}\right)^{\frac{1}{x}} \to e^{\frac{5}{3}}$. Bottom: $\left(1 - \frac{4x}{3}\right)^{\frac{1}{x}} \to e^{-\frac{4}{3}}$.`,
          t`So the limit is $e^{\frac{5}{3} + \frac{4}{3}} = e^3$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Misc II Q12" },
      stem: t`Here $\log$ is to base $e$. $\lim_{x \to 2} \dfrac{\log x - \log 2}{x - 2}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { f: "(log(x) - log(2))/(x - 2)", at: "2", kind: "log", num: "2,1" } },
      options: [
        { key: "A", text: t`$e^{\frac{1}{2}}$`, correct: false, misconceptionId: "C09-M5", value: "exp(1/2)" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: true, value: "1/2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C09-M2", value: "1" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C09-M3", value: "2" },
      ],
      solution: {
        steps: [
          t`Put $x = 2 + h$: as $x \to 2$, $h \to 0$, and the fraction becomes $\frac{\log(2 + h) - \log 2}{h}$.`,
          t`The top is $\log\frac{2 + h}{2} = \log\left(1 + \frac{h}{2}\right)$.`,
          t`So the limit is $\lim_{h \to 0} \frac{\log\left(1 + \frac{h}{2}\right)}{h} = \frac{1}{2}$.`,
        ],
      },
    },
  ],
};
