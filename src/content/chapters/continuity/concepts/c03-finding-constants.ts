import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$f(x) = x^2 + 1$ for $x < 2$, and $f(x) = kx - 1$ for $x \ge 2$. For one value of $k$ the two pieces join with no break. **Which value?**`,
    reveal: t`The left piece arrives at height $2^2 + 1 = 5$. The right piece starts at $f(2) = 2k - 1$. No break means $2k - 1 = 5$, so $k = 3$.`,
  },
  explanation: {
    intuition: [
      t`A **constant** is a letter, like $k$, that stands for one fixed number.`,
      t`Take $f(x) = x^2 + 1$ for $x < 2$ and $f(x) = kx - 1$ for $x \ge 2$.`,
      t`The **joining point**, $x = 2$, is where one formula stops and the next starts.`,
      t`With $k = 2$ the right piece starts at $3$, below the left piece's $5$: a break.`,
      t`Continuity needs the pieces to meet: $2k - 1 = 5$, so $k = 3$.`,
      t`So: find what each side tends to, set it equal to $f(a)$, and solve.`,
    ],
    formal: [
      {
        title: "Two conditions at the join",
        points: [
          t`Continuity at $x = a$ means both one-sided limits equal $f(a)$.`,
          t`**Left condition:** $\lim_{x \to a^-} f(x) = f(a)$, using the piece for $x < a$.`,
          t`**Right condition:** $\lim_{x \to a^+} f(x) = f(a)$, using the piece for $x > a$.`,
          t`Each condition is one equation in the constants.`,
          t`Two constants, such as $a$ and $b$, need both equations; often each side holds one.`,
          t`Keep every minus sign while finding a limit, such as $\sin(\pi + \theta) = -\sin \theta$.`,
        ],
      },
      {
        title: "When f(a) is the constant",
        points: [
          t`Often $f(x)$ is one formula for $x \ne a$, and $f(a) = k$.`,
          t`The same formula serves both sides, so find $\lim_{x \to a} f(x)$.`,
          t`Continuity forces $k$ to equal that limit; no other value works.`,
          t`At $x = a$ the formula usually gives $\frac{0}{0}$, which is not $0$: it means simplify first.`,
          t`Use a standard limit, top coefficient on top: $\frac{\sin 4x}{6x} \to \frac{4}{6} = \frac{2}{3}$.`,
          t`So for $f(x) = \frac{\sin 4x}{6x}$, $x \ne 0$, continuity at $0$ needs $f(0) = \frac{2}{3}$.`,
        ],
      },
      {
        title: "When no value works",
        points: [
          t`If the two one-sided limits differ, no single $f(a)$ can match both.`,
          t`This happens with $|x - a|$: it is $x - a$ on the right but $-(x - a)$ on the left.`,
          t`For example, $\frac{|x - 2|}{x - 2}$ tends to $-1$ from the left and $1$ from the right.`,
          t`So with $f(2) = k$, no value of $k$ makes it continuous at $2$.`,
          t`Check both sides, even when only one side holds the constant.`,
        ],
        figure: {
          alt: "The graph of |x − 2| / (x − 2): the horizontal line y = −1 to the left of x = 2 and y = 1 to the right, each ending in a hollow point at x = 2. The left side tends to −1 and the right side to 1.",
          axes: "xy",
          view: { x: [-0.5, 4.5], y: [-2, 2] },
          elements: [
            { kind: "segment", from: [-0.5, -1], to: [2, -1], step: 3 },
            { kind: "point", at: [2, -1], hollow: true, step: 3 },
            { kind: "label", at: [0.6, -1], label: "left: −1", labelAt: "s", step: 3 },
            { kind: "segment", from: [2, 1], to: [4.5, 1], step: 3 },
            { kind: "point", at: [2, 1], hollow: true, step: 3 },
            { kind: "label", at: [3.4, 1], label: "right: 1", labelAt: "n", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`$f(x) = \frac{\sin 3x}{2x} + a$ for $x < 0$, $f(0) = 5$, and $f(x) = \frac{e^{2x} - 1}{x} + b$ for $x > 0$. Find $a$ and $b$ so that $f$ is continuous at $x = 0$.`,
      steps: [
        t`Continuity at $0$ needs the left-hand limit and the right-hand limit both equal to $f(0) = 5$.`,
        t`Left: $\frac{\sin 3x}{2x} = \frac{3}{2} \cdot \frac{\sin 3x}{3x}$ $\to \frac{3}{2}$.`,
        t`So $\frac{3}{2} + a = 5$, giving $a = \frac{7}{2}$.`,
        t`Right: $\frac{e^{2x} - 1}{x} = 2 \cdot \frac{e^{2x} - 1}{2x}$ $\to 2$.`,
        t`So $2 + b = 5$, giving $b = 3$.`,
      ],
      answer: t`$a = \frac{7}{2}$ and $b = 3$.`,
    },
    figure: {
      alt: "The curve y = x² + 1 for x < 2, ending in a hollow point at (2, 5). The joining line x = 2 is dashed. With k = 2 the right piece y = 2x − 1 starts lower, at (2, 3), leaving a gap. With k = 3 the right piece y = 3x − 1 starts at (2, 5) and the pieces meet.",
      axes: "xy",
      view: { x: [-1.5, 4.5], y: [-1, 12] },
      elements: [
        { kind: "curve", points: [[-1.5, 3.25], [-1.413, 2.995], [-1.325, 2.756], [-1.238, 2.531], [-1.15, 2.322], [-1.062, 2.129], [-0.975, 1.951], [-0.887, 1.788], [-0.8, 1.64], [-0.713, 1.508], [-0.625, 1.391], [-0.537, 1.289], [-0.45, 1.202], [-0.363, 1.131], [-0.275, 1.076], [-0.188, 1.035], [-0.1, 1.01], [-0.012, 1], [0.075, 1.006], [0.163, 1.026], [0.25, 1.062], [0.337, 1.114], [0.425, 1.181], [0.513, 1.263], [0.6, 1.36], [0.688, 1.473], [0.775, 1.601], [0.862, 1.744], [0.95, 1.903], [1.038, 2.076], [1.125, 2.266], [1.212, 2.47], [1.3, 2.69], [1.388, 2.925], [1.475, 3.176], [1.562, 3.441], [1.65, 3.722], [1.737, 4.019], [1.825, 4.331], [1.913, 4.658], [2, 5]], step: 2 },
        { kind: "point", at: [2, 5], hollow: true, step: 2 },
        { kind: "label", at: [-1.2, 3.3], label: "y = x² + 1", labelAt: "ne", step: 2 },
        { kind: "segment", from: [2, -1], to: [2, 12], dashed: true, tone: "muted", step: 3 },
        { kind: "label", at: [2, 11], label: "x = 2", labelAt: "w", tone: "muted", step: 3 },
        { kind: "segment", from: [2, 3], to: [4.5, 8], tone: "bad", dashed: true, step: 4 },
        { kind: "point", at: [2, 3], tone: "bad", step: 4 },
        { kind: "label", at: [2, 3], label: "k = 2", labelAt: "se", tone: "bad", step: 4 },
        { kind: "segment", from: [2, 5], to: [4.3, 11.9], tone: "good", step: 5 },
        { kind: "point", at: [2, 5], tone: "good", step: 5 },
        { kind: "label", at: [3.5, 9.5], label: "k = 3", labelAt: "w", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag $k$ to slide the right-hand piece up or down; the gap at the joining point closes only at the one value of $k$ where the pieces meet.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Matching only the left-hand limit to f(a) and never checking the right-hand side",
      remediation: t`Continuity needs both one-sided limits to equal $f(a)$. Work out the right-hand limit as well; if the two sides differ, no value of the constant works.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: "Believing that the limit existing is enough, so f(a) can be any value",
      remediation: t`Continuity needs $f(a)$ to equal the limit, not just the limit to exist. Set $f(a)$, or the constant in it, equal to the limit and solve.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: "Reading an indeterminate form at face value: 0/0 as 0, or 1 to the power infinity as 1",
      remediation: t`$\frac{0}{0}$ and $1^\infty$ are not values; they say the limit still has to be found. Simplify first (factor, rationalise or use a standard limit), then let $x \to a$.`,
      fallback: { kind: "ext", topic: "indeterminate forms" },
    },
    {
      id: "C03-M4",
      mistake: "Turning a standard limit upside down, e.g. sin px / qx tending to q/p",
      remediation: t`In a standard limit the top's coefficient stays on top: $\frac{\sin px}{qx} \to \frac{p}{q}$ and $\frac{a^x - 1}{b^x - 1} \to \frac{\log a}{\log b}$.`,
      fallback: { kind: "ext", topic: "standard limits" },
    },
    {
      id: "C03-M5",
      mistake: "Losing a minus sign while working out a piece's limit",
      remediation: t`Keep every minus sign as you work out a limit: $\sin(\pi + \theta) = -\sin \theta$, $|x - a| = -(x - a)$ left of $a$, and $\cos 2x - 1 = -2\sin^2 x$. Recheck each sign before you solve.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1 gives the key whenever the two one-sided limits agree; diagnose it only on items where they differ (C03-Q3).",
    "C03-M5 is modelled from the piece as the student copies it (params slip_left / slip_right); a new item needs that param.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Ex 8.1 Q11(i)" },
      stem: t`$f(x) = \dfrac{24^x - 8^x - 3^x + 1}{12^x - 4^x - 3^x + 1}$ for $x \ne 0$, and $f(0) = k$. If $f$ is continuous at $x = 0$, then $k =$`,
      verify: { kind: "value", inputs: { a: "0" }, params: { left: "(24**x - 8**x - 3**x + 1)/(12**x - 4**x - 3**x + 1)", val: "k", unknowns: "k" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C03-M3", value: "0" },
        { key: "B", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C03-M4", value: "2/3" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "D", text: t`any value of $k$`, correct: false, misconceptionId: "C03-M2", value: "every_k" },
      ],
      solution: {
        steps: [
          t`The top factors as $(8^x - 1)(3^x - 1)$; the bottom as $(4^x - 1)(3^x - 1)$.`,
          t`Cancel $3^x - 1$ and divide top and bottom by $x$: $\frac{8^x - 1}{x} \to \log 8$ and $\frac{4^x - 1}{x} \to \log 4$.`,
          t`The limit is $\frac{\log 8}{\log 4} = \frac{3 \log 2}{2 \log 2}$ $= \frac{3}{2}$.`,
          t`Continuity needs $f(0)$ to equal it: $k = \frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Misc V Q2" },
      stem: t`$f(x) = \dfrac{45^x - 9^x - 5^x + 1}{(k^x - 1)(3^x - 1)}$ for $x \ne 0$, and $f(0) = \dfrac{2}{3}$. If $f$ is continuous at $x = 0$, then $k =$`,
      verify: { kind: "value", inputs: { a: "0" }, params: { left: "(45**x - 9**x - 5**x + 1)/((k**x - 1)*(3**x - 1))", val: "2/3", unknowns: "k", pos: "1" } },
      options: [
        { key: "A", text: t`no value of $k$`, correct: false, misconceptionId: "C03-M3", value: "no_k" },
        { key: "B", text: t`$5^{4/3}$`, correct: false, misconceptionId: "C03-M4", value: "5*5**(1/3)" },
        { key: "C", text: t`$125$`, correct: true, value: "125" },
        { key: "D", text: t`any $k > 0$ with $k \ne 1$`, correct: false, misconceptionId: "C03-M2", value: "every_k" },
      ],
      solution: {
        steps: [
          t`The top factors: $45^x - 9^x - 5^x + 1$ $= (9^x - 1)(5^x - 1)$.`,
          t`Divide each factor by $x$: the limit is $\frac{\log 9 \cdot \log 5}{\log k \cdot \log 3}$ $= \frac{2 \log 5}{\log k}$.`,
          t`Continuity: $\frac{2 \log 5}{\log k} = \frac{2}{3}$, so $\log k = 3 \log 5$ $= \log 125$.`,
          t`So $k = 125$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Misc II Q5" },
      stem: t`$f(x) = \dfrac{|x + 1|}{2x^2 + x - 1}$ for $x \ne -1$, and $f(-1) = k$. For which $k$ is $f$ continuous at $x = -1$?`,
      verify: { kind: "value", inputs: { a: "-1" }, params: { left: "Abs(x + 1)/(2*x**2 + x - 1)", right: "Abs(x + 1)/(2*x**2 + x - 1)", val: "k", unknowns: "k", slip_left: "(x + 1)/(2*x**2 + x - 1)" } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C03-M1", value: "1/3" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M3", value: "0" },
        { key: "C", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C03-M5", value: "-1/3" },
        { key: "D", text: t`no value of $k$`, correct: true, value: "no_k" },
      ],
      solution: {
        steps: [
          t`Factor the bottom: $2x^2 + x - 1 = (2x - 1)(x + 1)$.`,
          t`Right of $-1$, $|x + 1| = x + 1$, so $f(x) = \frac{1}{2x - 1} \to -\frac{1}{3}$.`,
          t`Left of $-1$, $|x + 1| = -(x + 1)$, so $f(x) = \frac{-1}{2x - 1} \to \frac{1}{3}$.`,
          t`The two sides differ, so no value of $k$ makes $f$ continuous at $-1$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/8.1 SolvedEx.8" },
      stem: t`$f(x) = \dfrac{\sin \pi x}{x - 1} + a$ for $x < 1$, $f(1) = 2\pi$, and $f(x) = \dfrac{1 + \cos \pi x}{\pi(1 - x)^2} + b$ for $x > 1$. If $f$ is continuous at $x = 1$, then $(a, b) =$`,
      verify: { kind: "value", inputs: { a: "1" }, params: { left: "sin(pi*x)/(x - 1) + a", right: "(1 + cos(pi*x))/(pi*(1 - x)**2) + b", val: "2*pi", unknowns: "a b", slip_left: "sin(pi*(x - 1))/(x - 1) + a" } },
      options: [
        { key: "A", text: t`$\left(2\pi + \frac{1}{\pi}, 2\pi - \frac{2}{\pi}\right)$`, correct: false, misconceptionId: "C03-M4", value: "(1/pi + 2*pi, -2/pi + 2*pi)" },
        { key: "B", text: t`$(\pi, \frac{3 \pi}{2})$`, correct: false, misconceptionId: "C03-M5", value: "(pi, 3*pi/2)" },
        { key: "C", text: t`$(3 \pi, \frac{3 \pi}{2})$`, correct: true, value: "(3*pi, 3*pi/2)" },
        { key: "D", text: t`$(2 \pi, 2 \pi)$`, correct: false, misconceptionId: "C03-M3", value: "(2*pi, 2*pi)" },
      ],
      solution: {
        steps: [
          t`Left: put $x = 1 + t$. Since $\sin(\pi + \pi t) = -\sin \pi t$, the fraction tends to $-\pi$.`,
          t`So $-\pi + a = 2\pi$, giving $a = 3\pi$.`,
          t`Right: put $x = 1 - \theta$. Then $1 + \cos \pi x = 1 - \cos \pi\theta$ $= 2\sin^2 \frac{\pi\theta}{2}$, and the fraction tends to $\frac{\pi}{2}$.`,
          t`So $\frac{\pi}{2} + b = 2\pi$, giving $b = \frac{3\pi}{2}$; $(a, b) = \left(3\pi, \frac{3\pi}{2}\right)$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Misc I Q9" },
      stem: t`$f(x) = \left(\dfrac{4 + 5x}{4 - 7x}\right)^{4/x}$ for $x \ne 0$, and $f(0) = k$. If $f$ is continuous at $x = 0$, then $k =$`,
      verify: { kind: "value", inputs: { a: "0" }, params: { left: "((4 + 5*x)/(4 - 7*x))**(4/x)", val: "k", unknowns: "k", slip_left: "((4 + 5*x)/(4 + 7*x))**(4/x)" } },
      options: [
        { key: "A", text: t`$e^{12}$`, correct: true, value: "exp(12)" },
        { key: "B", text: t`any value of $k$`, correct: false, misconceptionId: "C03-M2", value: "every_k" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "D", text: t`$e^{-2}$`, correct: false, misconceptionId: "C03-M5", value: "exp(-2)" },
      ],
      solution: {
        steps: [
          t`Divide top and bottom by $4$: $f(x) = \left(1 + \frac{5x}{4}\right)^{4/x} \div \left(1 - \frac{7x}{4}\right)^{4/x}$.`,
          t`Using $(1 + px)^{1/x} \to e^p$: the top tends to $e^5$ and the bottom to $e^{-7}$.`,
          t`So the limit is $\frac{e^5}{e^{-7}} = e^{12}$, and continuity gives $k = e^{12}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/continuity-11/Ex 8.1 Q10(ii)" },
      stem: t`$f(x) = \dfrac{\cos^2 x - \sin^2 x - 1}{\sqrt{3x^2 + 1} - 1}$ for $x \ne 0$. If $f$ is continuous at $x = 0$, then $f(0) =$`,
      verify: { kind: "value", inputs: { a: "0" }, params: { left: "(cos(x)**2 - sin(x)**2 - 1)/(sqrt(3*x**2 + 1) - 1)", val: "k", unknowns: "k", slip_left: "2*sin(x)**2/(sqrt(3*x**2 + 1) - 1)" } },
      options: [
        { key: "A", text: t`$- \frac{4}{3}$`, correct: true, value: "-4/3" },
        { key: "B", text: t`any value of $f(0)$`, correct: false, misconceptionId: "C03-M2", value: "every_k" },
        { key: "C", text: t`$- \frac{3}{4}$`, correct: false, misconceptionId: "C03-M4", value: "-3/4" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C03-M5", value: "4/3" },
      ],
      solution: {
        steps: [
          t`The top is $\cos 2x - 1 = -2\sin^2 x$.`,
          t`Multiply top and bottom by $\sqrt{3x^2 + 1} + 1$: the bottom becomes $3x^2$.`,
          t`So $f(x) = -\frac{2}{3} \cdot \frac{\sin^2 x}{x^2} \cdot \left(\sqrt{3x^2 + 1} + 1\right)$ $\to -\frac{2}{3} \cdot 2$.`,
          t`The limit is $-\frac{4}{3}$, so continuity gives $f(0) = -\frac{4}{3}$.`,
        ],
      },
    },
  ],
};
