import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Every line through the origin is $y = mx$, each with its own slope $m$. Can one equation, with no $m$ in it, describe all of them at once?`,
    reveal: t`Yes. Differentiate: $\frac{dy}{dx} = m$. Put that back for $m$: $y = x\frac{dy}{dx}$. Every line $y = mx$ satisfies it, whatever $m$ is.`,
  },
  explanation: {
    intuition: [
      t`A **family** of curves is one equation with a letter that may take any value, like $y = mx$.`,
      t`Such a letter is an **arbitrary constant**: each value of it gives one curve of the family.`,
      t`The family's **differential equation** links $x$, $y$ and derivatives, with no arbitrary constant left in it.`,
      t`Every curve of the family satisfies it, whatever values the constants take.`,
      t`To find it, differentiate once for each constant, then eliminate the constants.`,
      t`So $n$ arbitrary constants give a differential equation of order $n$.`,
    ],
    formal: [
      {
        title: "Counting the arbitrary constants",
        points: [
          t`Count only **essential** constants: ones that cannot be merged into fewer.`,
          t`$y = Ae^{x + 2}$ has one: $Ae^{x + 2} = (Ae^2)e^x$, and $e^2$ is a fixed number.`,
          t`$y = c^2 + \frac{c}{x}$ has one too: $c^2$ is fixed as soon as $c$ is.`,
          t`$y = A\cos x + B\sin x$ has two, $A$ and $B$, since neither fixes the other.`,
          t`Numbers given in the question are not arbitrary: in circles of radius $9$, the $9$ stays.`,
        ],
      },
      {
        title: "The method",
        points: [
          t`**Step 1:** count the arbitrary constants; call the number $n$.`,
          t`**Step 2:** differentiate the equation $n$ times with respect to $x$.`,
          t`You now have $n + 1$ equations: the original one and its $n$ derivatives.`,
          t`**Step 3:** use them to eliminate all $n$ constants.`,
          t`The result has order $n$, and every curve of the family satisfies it.`,
        ],
      },
      {
        title: "One constant: an example",
        points: [
          t`Take $y^2 = 4ax$: one constant, $a$, so differentiate once.`,
          t`$y$ depends on $x$, so $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$, and $\frac{d}{dx}(4ax) = 4a$.`,
          t`This gives $2y\frac{dy}{dx} = 4a$, which still contains $a$.`,
          t`Divide both sides of the original equation by $x$: $4a = \frac{y^2}{x}$.`,
          t`So $2y\frac{dy}{dx} = \frac{y^2}{x}$, that is, $2x\frac{dy}{dx} = y$.`,
        ],
      },
      {
        title: "Families described in words",
        points: [
          t`First write the family's equation, then mark which letters are free.`,
          t`Circles touching the X-axis at the origin, above it, have centre $(0, k)$ and radius $k$.`,
          t`Their equation is $x^2 + (y - k)^2 = k^2$, that is, $x^2 + y^2 = 2ky$.`,
          t`Only $k$ is free, so the differential equation has order $1$.`,
        ],
        figure: {
          alt: "Three circles above the X-axis, of radius 1, 2 and 3, each touching the X-axis at the origin. Their centres lie on the Y-axis.",
          axes: "xy",
          view: { x: [-4, 4], y: [-1, 7] },
          elements: [
            { kind: "circle", centre: [0, 1], r: 1, step: 2 },
            { kind: "circle", centre: [0, 2], r: 2, step: 2 },
            { kind: "circle", centre: [0, 3], r: 3, step: 2 },
            { kind: "point", at: [0, 3], label: "(0, k)", labelAt: "nw", step: 2 },
            { kind: "segment", from: [0, 3], to: [3, 3], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [0.7, 2.75], label: "k", labelAt: "s", tone: "muted", step: 2 },
          ],
        },
      },
      {
        title: "Differentiate with care",
        points: [
          t`**Chain rule:** multiply by the derivative of the inside, so $\frac{d}{dx}e^{3x} = 3e^{3x}$.`,
          t`Since $y$ depends on $x$, $\frac{d}{dx}(y^3) = 3y^2\frac{dy}{dx}$, not $3y^2$.`,
          t`**Product rule:** $\frac{d}{dx}\left(x\frac{dy}{dx}\right) = \frac{dy}{dx} + x\frac{d^2y}{dx^2}$.`,
          t`**Signs:** $\frac{d}{dx}\cos x = -\sin x$, and $(-u)^2 = u^2$.`,
          t`**Check:** the answer has no arbitrary constant, and each family curve satisfies it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Form the differential equation by eliminating the arbitrary constants from $y = c_1e^{3x} + c_2e^{2x}$.`,
      steps: [
        t`Two constants, so differentiate twice: $\frac{dy}{dx} = 3c_1e^{3x} + 2c_2e^{2x}$.`,
        t`Again: $\frac{d^2y}{dx^2} = 9c_1e^{3x} + 4c_2e^{2x}$.`,
        t`Remove $c_2$: $\frac{dy}{dx} - 2y = c_1e^{3x}$, and $\frac{d^2y}{dx^2} - 2\frac{dy}{dx} = 3c_1e^{3x}$.`,
        t`So $\frac{d^2y}{dx^2} - 2\frac{dy}{dx}$ $= 3\left(\frac{dy}{dx} - 2y\right)$, and both constants are gone.`,
        t`Collect terms: $\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$, of order $2$, as two constants promised.`,
      ],
      answer: t`$\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$`,
    },
    visualSpec: t`Drag a slider for the constant and watch the curve change, while the differential equation stays the same for every curve.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Overlooks an arbitrary constant: treats a free letter (the $B$ in $Be^{-5x}$, or the $h$ of a centre moving along a line) as fixed, so the family looks smaller than it is.`,
      remediation: "List every letter that can take any value, including the position of a centre that moves along a line. Differentiate once for each and eliminate them all: the order equals their number.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Treats a term holding the arbitrary constant, like $2ax$, as a constant, so its derivative is taken as $0$.`,
      remediation: t`Only $a$ is constant; $2ax$ changes with $x$, and its derivative is $2a$. Keep it, then eliminate $a$ using the original equation.`,
      fallback: { kind: "ext", topic: "differentiation" },
    },
    {
      id: "C02-M3",
      mistake: t`Isolating a constant, forgets to divide by the factor multiplying it: takes $2a = x^2 + y^2$ from $x^2 + y^2 = 2ax$.`,
      remediation: t`To isolate a constant, divide by everything that multiplies it: $x^2 + y^2 = 2ax$ gives $2a = \frac{x^2 + y^2}{x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Drops the inner derivative (chain rule): takes $\frac{d}{dx}\cos(\log x)$ as $-\sin(\log x)$, $\frac{d}{dx}e^{5x}$ as $e^{5x}$, or $\frac{d}{dx}(y^2)$ as $2y$.`,
      remediation: t`By the chain rule, multiply by the derivative of the inside: $\frac{d}{dx}e^{5x} = 5e^{5x}$, and since $y$ depends on $x$, $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$.`,
      fallback: { kind: "ext", topic: "chain rule" },
    },
    {
      id: "C02-M5",
      mistake: t`Loses or misplaces a minus sign: takes $\frac{d}{du}\cos u$ as $+\sin u$, $(-5)^2$ as $-25$, $(-u)^2$ as $-u^2$, or flips a sign when isolating a constant.`,
      remediation: t`Track every minus sign: $\frac{d}{du}\cos u = -\sin u$, $(-u)^2 = u^2$, and a term changes sign only when it crosses the $=$ sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Product rule: differentiates only one factor, taking $\frac{d}{dx}\left(y\frac{dy}{dx}\right)$ as $y\frac{d^2y}{dx^2}$, or $\frac{d}{dx}\left(x\frac{dy}{dx}\right)$ as $x\frac{d^2y}{dx^2}$.`,
      remediation: t`Both factors depend on $x$, so use the product rule: $\frac{d}{dx}\left(y\frac{dy}{dx}\right) = \left(\frac{dy}{dx}\right)^2 + y\frac{d^2y}{dx^2}$.`,
      fallback: { kind: "ext", topic: "product rule" },
    },
  ],
  engineNotes: [
    "Every option was checked by substituting the family: the key vanishes for all values of the constants, and every distractor does not.",
    "C02-M1's answer depends on which constant is overlooked; the items fix it (B in Q3, h in Q4).",
    "C02-M5 is a sign slip whose form depends on the family: the derivative of cos (Q1), (-5)^2 = -25 (Q3), (-u)^2 = -u^2 (Q4), a = x - y dy/dx from x - a = -y dy/dx (Q5).",
    "C02-M4 in Q2 and C02-M1 in Q3 and Q4 give first-order equations, which a learner who knows that the order equals the number of constants rules out at once.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.3 Exercise Q.1 iii)" },
      stem: t`The differential equation obtained by eliminating the arbitrary constants $A$ and $B$ from $y = A\cos(\log x) + B\sin(\log x)$ is`,
      verify: { kind: "value", inputs: {  }, params: { fam: "coslog" } },
      options: [
        { key: "A", text: t`$x^2\frac{d^2y}{dx^2} + x\frac{dy}{dx} + y = 0$`, correct: true, value: "x**2*y2 + x*y1 + y" },
        { key: "B", text: t`$\frac{d^2y}{dx^2} + y = 0$`, correct: false, misconceptionId: "C02-M4", value: "y + y2" },
        { key: "C", text: t`$x^2\frac{d^2y}{dx^2} + x\frac{dy}{dx} - y = 0$`, correct: false, misconceptionId: "C02-M5", value: "x**2*y2 + x*y1 - y" },
        { key: "D", text: t`$x^2\frac{d^2y}{dx^2} + y = 0$`, correct: false, misconceptionId: "C02-M6", value: "x**2*y2 + y" },
      ],
      solution: {
        steps: [
          t`Two constants, so differentiate twice. By the chain rule, $\frac{dy}{dx} = \frac{-A\sin(\log x) + B\cos(\log x)}{x}$.`,
          t`So $x\frac{dy}{dx} = -A\sin(\log x) + B\cos(\log x)$. Differentiate both sides, using the product rule on the left.`,
          t`$x\frac{d^2y}{dx^2} + \frac{dy}{dx}$ $= -\frac{A\cos(\log x) + B\sin(\log x)}{x}$ $= -\frac{y}{x}$.`,
          t`Multiply by $x$: $x^2\frac{d^2y}{dx^2} + x\frac{dy}{dx} + y = 0$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.3 Exercise Q.1 ii)" },
      stem: t`The differential equation obtained by eliminating the arbitrary constants $A$ and $B$ from $Ax^2 + By^2 = 1$ is`,
      verify: { kind: "value", inputs: {  }, params: { fam: "ellipse" } },
      options: [
        { key: "A", text: t`$y\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^2$ $- y\frac{dy}{dx} = 0$`, correct: false, misconceptionId: "C02-M3", value: "-y*y1 + y*y2 + y1**2" },
        { key: "B", text: t`$x\frac{dy}{dx} = y$`, correct: false, misconceptionId: "C02-M4", value: "x*y1 - y" },
        { key: "C", text: t`$xy\frac{d^2y}{dx^2} - y\frac{dy}{dx} = 0$`, correct: false, misconceptionId: "C02-M6", value: "y*(x*y2 - y1)" },
        { key: "D", text: t`$xy\frac{d^2y}{dx^2} + x\left(\frac{dy}{dx}\right)^2$ $- y\frac{dy}{dx} = 0$`, correct: true, value: "x*y*y2 + x*y1**2 - y*y1" },
      ],
      solution: {
        steps: [
          t`Two constants, so differentiate twice: $2Ax + 2By\frac{dy}{dx} = 0$, so $Ax + By\frac{dy}{dx} = 0$.`,
          t`Again, with the product rule on $y\frac{dy}{dx}$: $A + B\left(\frac{dy}{dx}\right)^2 + By\frac{d^2y}{dx^2} = 0$.`,
          t`From the first, $A = -\frac{By}{x}\frac{dy}{dx}$. Substitute, divide by $B$ and multiply by $x$.`,
          t`$xy\frac{d^2y}{dx^2} + x\left(\frac{dy}{dx}\right)^2$ $- y\frac{dy}{dx} = 0$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.3 Exercise Q.1 v)" },
      stem: t`The differential equation obtained by eliminating the arbitrary constants $A$ and $B$ from $y = Ae^{5x} + Be^{-5x}$ is`,
      verify: { kind: "value", inputs: { k: "5" }, params: { fam: "exp", drop: "B" } },
      options: [
        { key: "A", text: t`$\frac{d^2y}{dx^2} = 5\frac{dy}{dx}$`, correct: false, misconceptionId: "C02-M5", value: "-5*y1 + y2" },
        { key: "B", text: t`$\frac{d^2y}{dx^2} = 25y$`, correct: true, value: "-25*y + y2" },
        { key: "C", text: t`$\frac{dy}{dx} = 5y$`, correct: false, misconceptionId: "C02-M1", value: "-5*y + y1" },
        { key: "D", text: t`$\frac{d^2y}{dx^2} = y$`, correct: false, misconceptionId: "C02-M4", value: "-y + y2" },
      ],
      solution: {
        steps: [
          t`Two constants, so differentiate twice: $\frac{dy}{dx} = 5Ae^{5x} - 5Be^{-5x}$.`,
          t`$\frac{d^2y}{dx^2} = 25Ae^{5x} + 25Be^{-5x}$, since $(-5)^2 = 25$.`,
          t`That is $25(Ae^{5x} + Be^{-5x}) = 25y$, so $\frac{d^2y}{dx^2} = 25y$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc I (4)" },
      stem: t`The differential equation of all circles having their centres on the line $y = 5$ and touching the X-axis is`,
      verify: { kind: "value", inputs: { k: "5" }, params: { fam: "circ", drop: "h" } },
      options: [
        { key: "A", text: t`$(y - 5)^2\left[1 - \left(\frac{dy}{dx}\right)^2\right] = 25$`, correct: false, misconceptionId: "C02-M5", value: "y**2*y1**2 - y**2 - 10*y*y1**2 + 10*y + 25*y1**2" },
        { key: "B", text: t`$(y - 5)^2\left[1 + \left(\frac{dy}{dx}\right)^2\right] = 25$`, correct: true, value: "y**2*y1**2 + y**2 - 10*y*y1**2 - 10*y + 25*y1**2" },
        { key: "C", text: t`$x + (y - 5)\frac{dy}{dx} = 0$`, correct: false, misconceptionId: "C02-M1", value: "x + y*y1 - 5*y1" },
        { key: "D", text: t`$(y - 5)^2\left[1 + 4\left(\frac{dy}{dx}\right)^2\right] = 25$`, correct: false, misconceptionId: "C02-M3", value: "4*y**2*y1**2 + y**2 - 40*y*y1**2 - 10*y + 100*y1**2" },
      ],
      solution: {
        steps: [
          t`The centre $(h, 5)$ lies on $y = 5$; touching the X-axis makes the radius $5$. So $(x - h)^2 + (y - 5)^2 = 25$, with one constant, $h$.`,
          t`Differentiate once: $2(x - h) + 2(y - 5)\frac{dy}{dx} = 0$, so $x - h = -(y - 5)\frac{dy}{dx}$.`,
          t`Substitute: $(y - 5)^2\left(\frac{dy}{dx}\right)^2 + (y - 5)^2 = 25$, that is, $(y - 5)^2\left[1 + \left(\frac{dy}{dx}\right)^2\right] = 25$.`,
        ],
        figure: {
          alt: "Circles of radius 5 with centres on the dashed line y = 5. Each one touches the X-axis.",
          axes: "xy",
          view: { x: [-10, 10], y: [-3, 12] },
          elements: [
            { kind: "line", through: [[-10, 5], [10, 5]], dashed: true, tone: "muted", label: "y = 5", step: 1 },
            { kind: "circle", centre: [-4, 5], r: 5, step: 1 },
            { kind: "circle", centre: [4, 5], r: 5, tone: "muted", step: 1 },
            { kind: "point", at: [-4, 5], label: "(h, 5)", labelAt: "nw", step: 1 },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc II Q.4 i)" },
      stem: t`The differential equation of all circles which pass through the origin and whose centres lie on the X-axis is`,
      verify: { kind: "value", inputs: {  }, params: { fam: "origin" } },
      options: [
        { key: "A", text: t`$x^2 - 2xy\frac{dy}{dx} = y^2$`, correct: false, misconceptionId: "C02-M5", value: "-x**2 + 2*x*y*y1 + y**2" },
        { key: "B", text: t`$x^2 + 2xy\frac{dy}{dx} = y^2$`, correct: true, value: "x**2 + 2*x*y*y1 - y**2" },
        { key: "C", text: t`$x + y\frac{dy}{dx} = 0$`, correct: false, misconceptionId: "C02-M2", value: "x + y*y1" },
        { key: "D", text: t`$2x + 2y\frac{dy}{dx} = x^2 + y^2$`, correct: false, misconceptionId: "C02-M3", value: "-x**2 + 2*x - y**2 + 2*y*y1" },
      ],
      solution: {
        steps: [
          t`The centre is $(a, 0)$ and the circle passes through the origin, so the radius is $a$: $(x - a)^2 + y^2 = a^2$, that is, $x^2 + y^2 = 2ax$.`,
          t`One constant, so differentiate once: $2x + 2y\frac{dy}{dx} = 2a$.`,
          t`From the equation, $2a = \frac{x^2 + y^2}{x}$.`,
          t`So $2x^2 + 2xy\frac{dy}{dx} = x^2 + y^2$, that is, $x^2 + 2xy\frac{dy}{dx} = y^2$.`,
        ],
        figure: {
          alt: "Three circles through the origin with centres on the X-axis: centres (1, 0), (2, 0) and (−1.5, 0).",
          axes: "xy",
          view: { x: [-3.5, 4.5], y: [-3.5, 3.5] },
          elements: [
            { kind: "circle", centre: [1, 0], r: 1, step: 2 },
            { kind: "circle", centre: [2, 0], r: 2, step: 2 },
            { kind: "circle", centre: [-1.5, 0], r: 1.5, tone: "muted", step: 1 },
            { kind: "point", at: [2, 0], label: "(a, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 0], step: 1 },
          ],
        },
      },
    },
  ],
};
