import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`$X$ has p.d.f. $f(x) = 2x$ for $0 < x < 1$, so values near $1$ are likelier than values near $0$. **Is the mean of $X$ the midpoint, $\frac12$?**`,
    reveal: t`No. Weight each value by its density: $E(X) = \int_0^1 x \cdot 2x\,dx$ $= \frac23$. The mean leans towards where $f$ is bigger, like the balance point of a see-saw.`,
  },
  explanation: {
    intuition: [
      t`A **p.d.f.** $f(x)$ shows where a continuous random variable's values crowd; areas under it are probabilities.`,
      t`For a discrete variable, $E(X) = \sum x\,p(x)$: each value times its probability.`,
      t`A thin **strip** at $x$, of width $dx$, holds probability $f(x)\,dx$.`,
      t`Add $x \cdot f(x)\,dx$ over all the strips: a sum of thin strips is an integral.`,
      t`So $E(X) = \int x\,f(x)\,dx$: the balance point of the area under $f$.`,
      t`For $f(x) = 2x$ on $(0, 1)$ it is $\frac23$, right of the midpoint $\frac12$.`,
    ],
    formal: [
      {
        title: "Mean from the p.d.f.",
        points: [
          t`The **expected value**, or **mean**, of a continuous $X$ with p.d.f. $f(x)$ is $E(X) = \int x\,f(x)\,dx$.`,
          t`Integrate over the interval where $f(x) \ne 0$; outside it the integrand is $0$.`,
          t`The integral takes the place of the sum in $E(X) = \sum x\,p(x)$.`,
          t`The mean always lies inside that interval.`,
          t`It is the midpoint only when $f$ is symmetric about the midpoint.`,
        ],
      },
      {
        title: "Variance from the p.d.f.",
        points: [
          t`$E(X^2) = \int x^2 f(x)\,dx$: the same integral with $x^2$ in place of $x$.`,
          t`The **variance** measures the spread about the mean:`,
          t`$\text{Var}(X) = E(X^2) - [E(X)]^2$.`,
          t`Square the mean before you subtract it.`,
          t`The **standard deviation** is $\sigma = \sqrt{\text{Var}(X)}$.`,
          t`A variance is never negative, so a negative answer means a slip.`,
        ],
      },
      {
        title: "The order of work",
        points: [
          t`**Step 1.** If $f$ has an unknown constant, solve $\int f(x)\,dx = 1$ for it.`,
          t`**Step 2.** Find $E(X) = \int x\,f(x)\,dx$ with that constant in place.`,
          t`**Step 3.** Find $E(X^2) = \int x^2 f(x)\,dx$.`,
          t`**Step 4.** $\text{Var}(X) = E(X^2) - [E(X)]^2$.`,
          t`Check: $E(X)$ lies inside the interval and $\text{Var}(X) > 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`$X$ has p.d.f. $f(x) = k(1 + x)$ for $0 < x < 2$, and $f(x) = 0$ otherwise. Find $E(X)$ and $\text{Var}(X)$.`,
      steps: [
        t`Total area $1$: $\int_0^2 k(1 + x)\,dx$ $= k(2 + 2) = 4k = 1$, so $k = \frac14$.`,
        t`$E(X) = \frac14\int_0^2 (x + x^2)\,dx$ $= \frac14\left(2 + \frac83\right) = \frac76$.`,
        t`$E(X^2) = \frac14\int_0^2 (x^2 + x^3)\,dx$ $= \frac14\left(\frac83 + 4\right) = \frac53$.`,
        t`$\text{Var}(X) = \frac53 - \frac{49}{36}$ $= \frac{60 - 49}{36} = \frac{11}{36}$.`,
      ],
      answer: t`$E(X) = \frac76$ and $\text{Var}(X) = \frac{11}{36}$.`,
    },
    figure: {
      alt: "The p.d.f. f(x) = 2x on 0 < x < 1, a sloping line with the area under it shaded. A thin strip under the line near x = 0.7 is marked f(x) dx. Then a dashed line marks the mean E(X) = 2/3, the balance point of the area, and a second dashed line marks the midpoint 1/2, to its left.",
      axes: "xy",
      view: { x: [-0.25, 1.65], y: [-0.3, 2.3] },
      elements: [
        { kind: "region", within: [{ kind: "halfPlane", through: [[1, 2], [0, 0]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }, { kind: "halfPlane", through: [[1, 0], [1, 1]] }], step: 1 },
        { kind: "segment", from: [0, 0], to: [1, 2], step: 1 },
        { kind: "segment", from: [1, 2], to: [1, 0], step: 1 },
        { kind: "label", at: [1, 2], label: "f(x) = 2x", labelAt: "e", step: 1 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[1, 2], [0, 0]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }, { kind: "halfPlane", through: [[1, 0], [1, 1]] }, { kind: "halfPlane", through: [[0.7, 1], [0.7, 0]] }, { kind: "halfPlane", through: [[0.75, 0], [0.75, 1]] }], tone: "good", step: 3 },
        { kind: "label", at: [0.78, 0.3], label: "f(x) dx", labelAt: "e", tone: "good", step: 3 },
        { kind: "segment", from: [0.6666666666666666, 0], to: [0.6666666666666666, 1.3333333333333333], dashed: true, tone: "good", step: 5 },
        { kind: "label", at: [0.6666666666666666, 1.3333333333333333], label: "E(X) = 2/3", labelAt: "nw", tone: "good", step: 5 },
        { kind: "segment", from: [0.5, 0], to: [0.5, 1], dashed: true, tone: "muted", step: 6 },
        { kind: "label", at: [0.5, 1], label: "midpoint 1/2", labelAt: "nw", tone: "muted", step: 6 },
      ],
    },
    visualSpec: t`Drag the shape of a p.d.f. on an interval; a pivot under the shaded area slides to its balance point $E(X)$, and a bar beside it shows $\text{Var}(X)$ growing as the area spreads out.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Taking the mean to be the midpoint of the interval, whatever the p.d.f.",
      remediation: t`The mean weights each value by its density: $E(X) = \int x\,f(x)\,dx$. It is the midpoint only when $f$ is symmetric about it.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M2",
      mistake: "Stopping at the integral of x² f(x) for the variance",
      remediation: t`$\int x^2 f(x)\,dx$ is $E(X^2)$, not the variance. Subtract the square of the mean: $\text{Var}(X) = E(X^2) - [E(X)]^2$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M3",
      mistake: "Subtracting E(X) instead of its square in the variance",
      remediation: t`Square the mean before subtracting it: $\text{Var}(X) = E(X^2) - [E(X)]^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Working with the unknown constant as 1 instead of finding it",
      remediation: t`First make the total area $1$: solve $\int f(x)\,dx = 1$ for the constant, then use its value in every integral.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M5",
      mistake: "Integrating x² f(x) for the mean",
      remediation: t`The mean uses $x$ to the first power: $E(X) = \int x\,f(x)\,dx$. The integral of $x^2 f(x)$ is $E(X^2)$, used for the variance.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M6",
      mistake: "Leaving f(x) out and integrating x alone",
      remediation: t`Each value counts in proportion to its density, so integrate $x\,f(x)$, not $x$ alone.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    "C07-M1 gives the key when f is symmetric about the midpoint of its interval (a uniform p.d.f., k(4 - x^2) on (-2, 2)): draw diagnosing items from a lopsided f.",
    "C07-M2 gives the key when E(X) = 0, and C07-M3 when E(X) = 0 or 1.",
    "C07-M4 gives the key when the constant is already 1, and does not apply when the constant is an interval end.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.2 Q.10" },
      stem: t`A continuous random variable $X$ has p.d.f. $f(x) = \dfrac{c}{x}$ for $1 < x < 3$, and $f(x) = 0$ otherwise, where $c > 0$ is a constant and $\log$ is the natural logarithm. Then $E(X) =$`,
      verify: { kind: "value", inputs: { f: "c/x", a: "1", b: "3" }, params: { find: "E", unknown: "c" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C07-M1", value: "2" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C07-M6", value: "4" },
        { key: "C", text: t`$\dfrac{2}{\log 3}$`, correct: true, value: "2/log(3)" },
        { key: "D", text: t`$\dfrac{4}{\log 3}$`, correct: false, misconceptionId: "C07-M5", value: "4/log(3)" },
      ],
      solution: {
        steps: [
          t`Total area $1$: $\int_1^3 \frac{c}{x}\,dx = c\log 3 = 1$, so $c = \frac{1}{\log 3}$.`,
          t`$E(X) = \int_1^3 x \cdot \frac{c}{x}\,dx$ $= c\int_1^3 dx = 2c$.`,
          t`So $E(X) = \frac{2}{\log 3} \approx 1.82$, inside $(1, 3)$ as a mean must be.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/7.4 SolvedEx.7" },
      stem: t`A continuous random variable $X$ has p.d.f. $f(x) = kx^2(1 - x)$ for $0 < x < 1$, and $f(x) = 0$ otherwise. Then $E(X) =$`,
      verify: { kind: "value", inputs: { f: "k*x**2*(1 - x)", a: "0", b: "1" }, params: { find: "E", unknown: "k" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "1/2" },
        { key: "B", text: t`$\frac{1}{20}$`, correct: false, misconceptionId: "C07-M4", value: "1/20" },
        { key: "C", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C07-M5", value: "2/5" },
        { key: "D", text: t`$\frac{3}{5}$`, correct: true, value: "3/5" },
      ],
      solution: {
        steps: [
          t`Total area $1$: $\int_0^1 kx^2(1 - x)\,dx$ $= k\left(\frac13 - \frac14\right) = \frac{k}{12}$, so $k = 12$.`,
          t`$E(X) = \int_0^1 12x^3(1 - x)\,dx$ $= 12\left(\frac14 - \frac15\right)$.`,
          t`$E(X) = \frac{12}{20} = \frac35$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.2 Q.3 (i)" },
      stem: t`The error $X$ in measuring a reaction temperature is a continuous random variable with p.d.f. $f(x) = \dfrac{x^2}{3}$ for $-1 < x < 2$, and $f(x) = 0$ otherwise. Then $E(X) =$`,
      verify: { kind: "value", inputs: { f: "x**2/3", a: "-1", b: "2" }, params: { find: "E" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C07-M6", value: "3/2" },
        { key: "B", text: t`$\frac{5}{4}$`, correct: true, value: "5/4" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "1/2" },
        { key: "D", text: t`$\frac{11}{5}$`, correct: false, misconceptionId: "C07-M5", value: "11/5" },
      ],
      solution: {
        steps: [
          t`$E(X) = \int_{-1}^{2} x \cdot \frac{x^2}{3}\,dx$ $= \int_{-1}^{2} \frac{x^3}{3}\,dx$.`,
          t`$= \left[\frac{x^4}{12}\right]_{-1}^{2}$ $= \frac{16 - 1}{12} = \frac{15}{12}$.`,
          t`$E(X) = \frac54$: right of the midpoint $\frac12$, since $f$ is bigger near $x = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.2 Q.5 (i)" },
      stem: t`The time $X$ (in hours) for which a student keeps a library book has p.d.f. $f(x) = 0.5x$ for $0 \le x \le 2$, and $f(x) = 0$ otherwise. Then $\text{Var}(X) =$`,
      verify: { kind: "value", inputs: { f: "x/2", a: "0", b: "2" }, params: { find: "Var" } },
      options: [
        { key: "A", text: t`$\frac{2}{9}$`, correct: true, value: "2/9" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C07-M2", value: "2" },
        { key: "D", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C07-M3", value: "2/3" },
      ],
      solution: {
        steps: [
          t`$E(X) = \int_0^2 x \cdot \frac{x}{2}\,dx$ $= \left[\frac{x^3}{6}\right]_0^2 = \frac43$.`,
          t`$E(X^2) = \int_0^2 \frac{x^3}{2}\,dx$ $= \left[\frac{x^4}{8}\right]_0^2 = 2$.`,
          t`$\text{Var}(X) = 2 - \left(\frac43\right)^2$ $= 2 - \frac{16}{9} = \frac29$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/7.4 SolvedEx.1" },
      stem: t`A continuous random variable $X$ has p.d.f. $f(x) = kx^2$ for $0 < x < 1$, and $f(x) = 0$ otherwise. Then $\text{Var}(X) =$`,
      verify: { kind: "value", inputs: { f: "k*x**2", a: "0", b: "1" }, params: { find: "Var", unknown: "k" } },
      options: [
        { key: "A", text: t`$\frac{7}{20}$`, correct: false, misconceptionId: "C07-M1", value: "7/20" },
        { key: "B", text: t`$\frac{3}{5}$`, correct: false, misconceptionId: "C07-M2", value: "3/5" },
        { key: "C", text: t`$\frac{11}{80}$`, correct: false, misconceptionId: "C07-M4", value: "11/80" },
        { key: "D", text: t`$\frac{3}{80}$`, correct: true, value: "3/80" },
      ],
      solution: {
        steps: [
          t`Total area $1$: $\int_0^1 kx^2\,dx = \frac{k}{3} = 1$, so $k = 3$.`,
          t`$E(X) = \int_0^1 3x^3\,dx = \frac34$ and $E(X^2) = \int_0^1 3x^4\,dx = \frac35$.`,
          t`$\text{Var}(X) = \frac35 - \frac{9}{16}$ $= \frac{48 - 45}{80} = \frac{3}{80}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/7.4 SolvedEx.2" },
      stem: t`A continuous random variable $X$ has p.d.f. $f(x) = \dfrac{x^3}{4}$ for $0 < x < c$, and $f(x) = 0$ otherwise, where $c$ is a constant. Then $\text{Var}(X) =$`,
      verify: { kind: "value", inputs: { f: "x**3/4", a: "0", b: "c" }, params: { find: "Var", unknown: "c" } },
      options: [
        { key: "A", text: t`$\frac{8}{75}$`, correct: true, value: "8/75" },
        { key: "B", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C07-M1", value: "5/3" },
        { key: "C", text: t`$\frac{8}{3}$`, correct: false, misconceptionId: "C07-M2", value: "8/3" },
        { key: "D", text: t`$\frac{16}{15}$`, correct: false, misconceptionId: "C07-M3", value: "16/15" },
      ],
      solution: {
        steps: [
          t`Total area $1$: $\int_0^c \frac{x^3}{4}\,dx = \frac{c^4}{16} = 1$, so $c = 2$ (the interval needs $c > 0$).`,
          t`$E(X) = \int_0^2 \frac{x^4}{4}\,dx$ $= \frac{32}{20} = \frac85$.`,
          t`$E(X^2) = \int_0^2 \frac{x^5}{4}\,dx$ $= \frac{64}{24} = \frac83$.`,
          t`$\text{Var}(X) = \frac83 - \frac{64}{25}$ $= \frac{200 - 192}{75} = \frac{8}{75}$.`,
        ],
      },
    },
  ],
};
