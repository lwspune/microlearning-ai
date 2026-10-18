import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Both $y = x^2 + 1$ and $y = x^2 - 7$ satisfy $\dfrac{dy}{dx} = 2x$. **How many solutions does this equation have, and which one passes through $(1, 5)$?**`,
    reveal: t`Infinitely many: $y = x^2 + c$ works for every constant $c$, since the $c$ disappears when you differentiate. Through $(1, 5)$: $5 = 1 + c$, so $c = 4$ and the solution is $y = x^2 + 4$.`,
  },
  explanation: {
    intuition: [
      t`A **solution** of a differential equation is a relation between $x$ and $y$, free of derivatives, that satisfies it.`,
      t`Each curve $y = x^2 + c$ has slope $2x$, so each one solves $\dfrac{dy}{dx} = 2x$.`,
      t`Here $c$ is an **arbitrary constant**: a letter that may take any value, each value giving another solution.`,
      t`The **general solution** keeps $c$ free, so it describes the whole family of curves.`,
      t`A condition such as $y(1) = 5$ picks out one curve: $5 = 1 + c$, so $c = 4$.`,
      t`That one curve, $y = x^2 + 4$, is a **particular solution**.`,
    ],
    formal: [
      {
        title: "Verifying a solution",
        points: [
          t`To **verify** a solution, find the derivatives the equation needs, then substitute them.`,
          t`Take $y = \log x + c$ and the equation $x\dfrac{d^2y}{dx^2} + \dfrac{dy}{dx} = 0$.`,
          t`Here $\dfrac{dy}{dx} = \dfrac{1}{x}$ and $\dfrac{d^2y}{dx^2} = -\dfrac{1}{x^2}$.`,
          t`Substituting: $x\left(-\dfrac{1}{x^2}\right) + \dfrac{1}{x}$ $= 0$ for every $x$, so it is a solution.`,
          t`For a relation like $y\sec x = \tan x + c$, differentiate both sides with respect to $x$.`,
          t`The constant drops out; if what is left rearranges to the equation, the relation is a solution.`,
        ],
      },
      {
        title: "The general solution",
        points: [
          t`The **general solution** has as many arbitrary constants as the **order** of the equation.`,
          t`Recall: the order is that of the highest derivative; the **degree**, its power, does not count here.`,
          t`Reaching $y$ from $\dfrac{d^2y}{dx^2}$ takes two integrations, and each one adds a constant.`,
          t`Order $1$: one constant, as in $y = cx$ for $x\dfrac{dy}{dx} = y$.`,
          t`Order $2$: two constants, as in $y = e^{-x} + Ax + B$ for $e^x\dfrac{d^2y}{dx^2} = 1$.`,
          t`A solution with fewer constants than the order is a solution, but not the general one.`,
        ],
      },
      {
        title: "Fixing the constant",
        points: [
          t`A **particular solution** is the general solution with each constant given a fixed value.`,
          t`An **initial condition**, such as $y = 3$ when $x = 2$, written $y(2) = 3$, fixes one constant.`,
          t`Put both values into the general solution, $x = 2$ for $x$ and $y = 3$ for $y$, then solve for $c$.`,
          t`The constant is not simply the given $y$: for $y = x^2 + c$ with $y(1) = 5$, $c = 4$.`,
          t`Nor is it $0$, unless the condition makes it $0$.`,
        ],
      },
      {
        title: "Two constants, two conditions",
        points: [
          t`An equation of order $n$ needs $n$ conditions to fix all $n$ constants.`,
          t`For order $2$ these are often $y$ at two points, or $y$ and $\dfrac{dy}{dx}$ at one point.`,
          t`Each condition gives one equation in the constants; solve them together.`,
        ],
      },
    ],
    worked: {
      prompt: t`$y = a + \dfrac{b}{x}$ is a solution of $x\dfrac{d^2y}{dx^2} + 2\dfrac{dy}{dx} = 0$. Check that it is the general solution, then find the particular solution with $y(1) = 5$ and $y(2) = 4$.`,
      steps: [
        t`$\dfrac{dy}{dx} = -\dfrac{b}{x^2}$ and $\dfrac{d^2y}{dx^2} = \dfrac{2b}{x^3}$, so $x \cdot \dfrac{2b}{x^3} - \dfrac{2b}{x^2}$ $= 0$: it is a solution.`,
        t`The equation has order $2$, and the solution has $2$ arbitrary constants, $a$ and $b$: it is the general solution.`,
        t`$y(1) = 5$ gives $a + b = 5$, and $y(2) = 4$ gives $a + \dfrac{b}{2} = 4$.`,
        t`Subtracting, $\dfrac{b}{2} = 1$, so $b = 2$ and $a = 3$.`,
      ],
      answer: t`The particular solution is $y = 3 + \dfrac{2}{x}$.`,
    },
    figure: {
      alt: "Three parabolas y = x² + c, for c = −2, 0 and 2, stacked one above another: each has slope 2x, so each solves dy/dx = 2x. Then one more parabola, y = x² + 4, is highlighted with the point (1, 5) on it: the one curve of the family through that point.",
      axes: "xy",
      view: { x: [-4, 4], y: [-3, 8] },
      elements: [
        { kind: "curve", points: [[-3.2, 8.24], [-3.12, 7.734], [-3.04, 7.242], [-2.96, 6.762], [-2.88, 6.294], [-2.8, 5.84], [-2.72, 5.398], [-2.64, 4.97], [-2.56, 4.554], [-2.48, 4.15], [-2.4, 3.76], [-2.32, 3.382], [-2.24, 3.018], [-2.16, 2.666], [-2.08, 2.326], [-2, 2], [-1.92, 1.686], [-1.84, 1.386], [-1.76, 1.098], [-1.68, 0.822], [-1.6, 0.56], [-1.52, 0.31], [-1.44, 0.074], [-1.36, -0.15], [-1.28, -0.362], [-1.2, -0.56], [-1.12, -0.746], [-1.04, -0.918], [-0.96, -1.078], [-0.88, -1.226], [-0.8, -1.36], [-0.72, -1.482], [-0.64, -1.59], [-0.56, -1.686], [-0.48, -1.77], [-0.4, -1.84], [-0.32, -1.898], [-0.24, -1.942], [-0.16, -1.974], [-0.08, -1.994], [0, -2], [0.08, -1.994], [0.16, -1.974], [0.24, -1.942], [0.32, -1.898], [0.4, -1.84], [0.48, -1.77], [0.56, -1.686], [0.64, -1.59], [0.72, -1.482], [0.8, -1.36], [0.88, -1.226], [0.96, -1.078], [1.04, -0.918], [1.12, -0.746], [1.2, -0.56], [1.28, -0.362], [1.36, -0.15], [1.44, 0.074], [1.52, 0.31], [1.6, 0.56], [1.68, 0.822], [1.76, 1.098], [1.84, 1.386], [1.92, 1.686], [2, 2], [2.08, 2.326], [2.16, 2.666], [2.24, 3.018], [2.32, 3.382], [2.4, 3.76], [2.48, 4.15], [2.56, 4.554], [2.64, 4.97], [2.72, 5.398], [2.8, 5.84], [2.88, 6.294], [2.96, 6.762], [3.04, 7.242], [3.12, 7.734], [3.2, 8.24]], tone: "muted", step: 2 },
        { kind: "curve", points: [[-2.85, 8.123], [-2.779, 7.721], [-2.708, 7.331], [-2.636, 6.95], [-2.565, 6.579], [-2.494, 6.219], [-2.422, 5.869], [-2.351, 5.528], [-2.28, 5.198], [-2.209, 4.879], [-2.138, 4.569], [-2.066, 4.269], [-1.995, 3.98], [-1.924, 3.701], [-1.853, 3.432], [-1.781, 3.173], [-1.71, 2.924], [-1.639, 2.686], [-1.567, 2.457], [-1.496, 2.239], [-1.425, 2.031], [-1.354, 1.833], [-1.282, 1.645], [-1.211, 1.467], [-1.14, 1.3], [-1.069, 1.142], [-0.997, 0.995], [-0.926, 0.858], [-0.855, 0.731], [-0.784, 0.614], [-0.712, 0.508], [-0.641, 0.411], [-0.57, 0.325], [-0.499, 0.249], [-0.427, 0.183], [-0.356, 0.127], [-0.285, 0.081], [-0.214, 0.046], [-0.143, 0.02], [-0.071, 0.005], [0, 0], [0.071, 0.005], [0.143, 0.02], [0.214, 0.046], [0.285, 0.081], [0.356, 0.127], [0.427, 0.183], [0.499, 0.249], [0.57, 0.325], [0.641, 0.411], [0.712, 0.508], [0.784, 0.614], [0.855, 0.731], [0.926, 0.858], [0.998, 0.995], [1.069, 1.142], [1.14, 1.3], [1.211, 1.467], [1.283, 1.645], [1.354, 1.833], [1.425, 2.031], [1.496, 2.239], [1.568, 2.457], [1.639, 2.686], [1.71, 2.924], [1.781, 3.173], [1.852, 3.432], [1.924, 3.701], [1.995, 3.98], [2.066, 4.269], [2.137, 4.569], [2.209, 4.879], [2.28, 5.198], [2.351, 5.528], [2.422, 5.869], [2.494, 6.219], [2.565, 6.579], [2.636, 6.95], [2.708, 7.331], [2.779, 7.721], [2.85, 8.123]], tone: "muted", step: 2 },
        { kind: "curve", points: [[-2.45, 8.003], [-2.389, 7.706], [-2.328, 7.417], [-2.266, 7.136], [-2.205, 6.862], [-2.144, 6.596], [-2.083, 6.337], [-2.021, 6.085], [-1.96, 5.842], [-1.899, 5.605], [-1.838, 5.376], [-1.776, 5.155], [-1.715, 4.941], [-1.654, 4.735], [-1.593, 4.536], [-1.531, 4.345], [-1.47, 4.161], [-1.409, 3.985], [-1.348, 3.816], [-1.286, 3.654], [-1.225, 3.501], [-1.164, 3.354], [-1.103, 3.216], [-1.041, 3.084], [-0.98, 2.96], [-0.919, 2.844], [-0.858, 2.735], [-0.796, 2.634], [-0.735, 2.54], [-0.674, 2.454], [-0.613, 2.375], [-0.551, 2.304], [-0.49, 2.24], [-0.429, 2.184], [-0.367, 2.135], [-0.306, 2.094], [-0.245, 2.06], [-0.184, 2.034], [-0.123, 2.015], [-0.061, 2.004], [0, 2], [0.061, 2.004], [0.123, 2.015], [0.184, 2.034], [0.245, 2.06], [0.306, 2.094], [0.367, 2.135], [0.429, 2.184], [0.49, 2.24], [0.551, 2.304], [0.613, 2.375], [0.674, 2.454], [0.735, 2.54], [0.796, 2.634], [0.857, 2.735], [0.919, 2.844], [0.98, 2.96], [1.041, 3.084], [1.103, 3.216], [1.164, 3.354], [1.225, 3.501], [1.286, 3.654], [1.348, 3.816], [1.409, 3.985], [1.47, 4.161], [1.531, 4.345], [1.593, 4.536], [1.654, 4.735], [1.715, 4.941], [1.776, 5.155], [1.837, 5.376], [1.899, 5.605], [1.96, 5.842], [2.021, 6.085], [2.083, 6.337], [2.144, 6.596], [2.205, 6.862], [2.266, 7.136], [2.328, 7.417], [2.389, 7.706], [2.45, 8.003]], tone: "muted", step: 2 },
        { kind: "curve", points: [[-2, 8], [-1.95, 7.803], [-1.9, 7.61], [-1.85, 7.423], [-1.8, 7.24], [-1.75, 7.062], [-1.7, 6.89], [-1.65, 6.723], [-1.6, 6.56], [-1.55, 6.402], [-1.5, 6.25], [-1.45, 6.103], [-1.4, 5.96], [-1.35, 5.822], [-1.3, 5.69], [-1.25, 5.562], [-1.2, 5.44], [-1.15, 5.322], [-1.1, 5.21], [-1.05, 5.103], [-1, 5], [-0.95, 4.902], [-0.9, 4.81], [-0.85, 4.723], [-0.8, 4.64], [-0.75, 4.562], [-0.7, 4.49], [-0.65, 4.422], [-0.6, 4.36], [-0.55, 4.303], [-0.5, 4.25], [-0.45, 4.202], [-0.4, 4.16], [-0.35, 4.123], [-0.3, 4.09], [-0.25, 4.062], [-0.2, 4.04], [-0.15, 4.022], [-0.1, 4.01], [-0.05, 4.003], [0, 4], [0.05, 4.003], [0.1, 4.01], [0.15, 4.022], [0.2, 4.04], [0.25, 4.062], [0.3, 4.09], [0.35, 4.123], [0.4, 4.16], [0.45, 4.203], [0.5, 4.25], [0.55, 4.303], [0.6, 4.36], [0.65, 4.422], [0.7, 4.49], [0.75, 4.562], [0.8, 4.64], [0.85, 4.723], [0.9, 4.81], [0.95, 4.902], [1, 5], [1.05, 5.102], [1.1, 5.21], [1.15, 5.322], [1.2, 5.44], [1.25, 5.562], [1.3, 5.69], [1.35, 5.822], [1.4, 5.96], [1.45, 6.103], [1.5, 6.25], [1.55, 6.402], [1.6, 6.56], [1.65, 6.723], [1.7, 6.89], [1.75, 7.062], [1.8, 7.24], [1.85, 7.423], [1.9, 7.61], [1.95, 7.803], [2, 8]], tone: "good", step: 5 },
        { kind: "point", at: [1, 5], label: "(1, 5)", labelAt: "se", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag $c$ to slide the curve $y = x^2 + c$ up and down through the family of solutions of $\dfrac{dy}{dx} = 2x$; drag a point and the one curve through it lights up as the particular solution, with its $c$ shown.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Counting the arbitrary constants from the degree of the equation instead of its order",
      remediation: "The general solution has as many arbitrary constants as the order, the order of the highest derivative. The power on that derivative, the degree, does not add constants.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Taking a particular solution to be the general solution with c = 0",
      remediation: t`A particular solution gives $c$ the value the condition forces. Put the given $x$ and $y$ into the general solution and solve for $c$; it is $0$ only if that is what comes out.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Taking the constant to be the given value of y",
      remediation: t`The constant is not the given $y$. Put both given values into the general solution, then solve for $c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Swapping the condition's values: putting the given y in for x and the given x in for y",
      remediation: t`In a condition such as $y = 1$ when $x = 2$, put $x = 2$ and $y = 1$ into the general solution. Keep each value with its own letter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Believing a general solution always has one arbitrary constant, like the one +c of an integration",
      remediation: t`Only a first-order equation has one constant. An equation of order $n$ has $n$ arbitrary constants in its general solution, and $n$ conditions are needed to fix them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Counting the constants from the largest power in the equation, the way a cubic has three roots",
      remediation: "Powers do not decide the count. Only the order, that of the highest derivative present, gives the number of arbitrary constants.",
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C03-M1 gives the key when the degree equals the order, C03-M5 when the order is 1, and C03-M6 when the largest power on any derivative equals the order: draw count items where order, degree, largest power and 1 all differ.",
    t`C03-M2 gives the key when the condition forces $c = 0$ (as in Misc I (12), where $x = y = 0$), C03-M3 when the general solution at $x_0$ reduces to $c = y_0$ (such as $y = x^2 + c$ with a condition at $x = 0$), and C03-M4 when $x_0 = y_0$: draw diagnosing items where these differ from the key.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`The general solution of $\left(\dfrac{d^2y}{dx^2}\right)^3$ $+ \left(\dfrac{dy}{dx}\right)^4 + y = 0$ contains how many arbitrary constants?`,
      verify: { kind: "value", inputs: { L: "p2**3 + p1**4 + y", R: "0" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M5", value: "1" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C03-M6", value: "4" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C03-M1", value: "3" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\dfrac{d^2y}{dx^2}$, so the order is $2$.`,
          t`Its power $3$ is the degree, and the $4$ on $\dfrac{dy}{dx}$ is just a power: neither decides the count.`,
          t`The general solution has as many arbitrary constants as the order: $2$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`How many conditions, such as $y(0) = 1$, are needed to fix a particular solution of $\left(\dfrac{d^3y}{dx^3}\right)^2$ $+ x\left(\dfrac{dy}{dx}\right)^5 = y$?`,
      verify: { kind: "value", inputs: { L: "p3**2 + x*p1**5", R: "y" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M5", value: "1" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C03-M6", value: "5" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C03-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\dfrac{d^3y}{dx^3}$, so the order is $3$; its power $2$ is only the degree.`,
          t`So the general solution has $3$ arbitrary constants.`,
          t`Each condition fixes one constant, so $3$ conditions are needed.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.4 Q.11" },
      stem: t`The general solution of $x\,dy + 2y\,dx = 0$ is $x^2 y = c$. Its particular solution with $y = 1$ when $x = 2$ is:`,
      verify: { kind: "value", inputs: { G: "x**2*y - c", D: "x*p1 + 2*y", x0: "2", y0: "1" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$y = 0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "B", text: t`$y = \dfrac{1}{x^2}$`, correct: false, misconceptionId: "C03-M3", value: "x**(-2)" },
        { key: "C", text: t`$y = \dfrac{2}{x^2}$`, correct: false, misconceptionId: "C03-M4", value: "2/x**2" },
        { key: "D", text: t`$y = \dfrac{4}{x^2}$`, correct: true, value: "4/x**2" },
      ],
      solution: {
        steps: [
          t`Check: $x^2 y = c$ gives $x^2\,dy + 2xy\,dx = 0$, that is $x(x\,dy + 2y\,dx) = 0$.`,
          t`Put $x = 2$ and $y = 1$: $4 \cdot 1 = c$, so $c = 4$.`,
          t`The particular solution is $x^2 y = 4$, that is $y = \dfrac{4}{x^2}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.1 (i)" },
      stem: t`$xy = \log y + c$ is the general solution of $\dfrac{dy}{dx} = \dfrac{y^2}{1 - xy}$. On the particular solution with $y = 1$ when $x = 3$, what is $x$ when $y = e$?`,
      verify: { kind: "value", inputs: { G: "x*y - log(y) - c", D: "(1 - x*y)*p1 - y**2", x0: "3", y0: "1", y1: "E" }, params: { ask: "x_at" } },
      options: [
        { key: "A", text: t`$\dfrac{2}{e}$`, correct: false, misconceptionId: "C03-M3", value: "2*exp(-1)" },
        { key: "B", text: t`$\dfrac{4 - \log 3}{e}$`, correct: false, misconceptionId: "C03-M4", value: "(4 - log(3))*exp(-1)" },
        { key: "C", text: t`$\dfrac{4}{e}$`, correct: true, value: "4*exp(-1)" },
        { key: "D", text: t`$\dfrac{1}{e}$`, correct: false, misconceptionId: "C03-M2", value: "exp(-1)" },
      ],
      solution: {
        steps: [
          t`Put $x = 3$ and $y = 1$ in $xy = \log y + c$: $3 = 0 + c$, so $c = 3$.`,
          t`The particular solution is $xy = \log y + 3$.`,
          t`At $y = e$: $ex = 1 + 3$, so $x = \dfrac{4}{e}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.3 (iii)" },
      stem: t`$y = c\,x\log x$ is the general solution of $y(1 + \log x)\dfrac{dx}{dy}$ $- x\log x = 0$. On the particular solution with $y = e^2$ when $x = e$, the value of $y$ at $x = e^2$ is:`,
      verify: { kind: "value", inputs: { G: "y - c*x*log(x)", D: "y*(1 + log(x)) - x*log(x)*p1", x0: "E", y0: "exp(2)", x1: "exp(2)" }, params: { ask: "y_at" } },
      options: [
        { key: "A", text: t`$2e^3$`, correct: true, value: "2*exp(3)" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "C", text: t`$2e^4$`, correct: false, misconceptionId: "C03-M3", value: "2*exp(4)" },
        { key: "D", text: t`$e$`, correct: false, misconceptionId: "C03-M4", value: "E" },
      ],
      solution: {
        steps: [
          t`Put $x = e$ and $y = e^2$ in $y = c\,x\log x$: $e^2 = c \cdot e \cdot 1$, so $c = e$.`,
          t`The particular solution is $y = e\,x\log x$.`,
          t`At $x = e^2$: $y = e \cdot e^2 \cdot 2 = 2e^3$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc II Q.2 v)" },
      stem: t`$x^2 = y^2(2\log y + c)$ is the general solution of $x^2 + y^2 = xy\dfrac{dx}{dy}$. On the particular solution with $x = 2$ when $y = 1$, the positive value of $x$ when $y = e$ is:`,
      verify: { kind: "value", inputs: { G: "x**2 - y**2*(2*log(y) + c)", D: "(x**2 + y**2)*p1 - x*y", x0: "2", y0: "1", y1: "E" }, params: { ask: "x_at" } },
      options: [
        { key: "A", text: t`$e\sqrt{6}$`, correct: true, value: "sqrt(6)*E" },
        { key: "B", text: t`$e\sqrt{2}$`, correct: false, misconceptionId: "C03-M2", value: "sqrt(2)*E" },
        { key: "C", text: t`$e\sqrt{3}$`, correct: false, misconceptionId: "C03-M3", value: "sqrt(3)*E" },
        { key: "D", text: t`$\dfrac{e}{2}\sqrt{9 - 8\log 2}$`, correct: false, misconceptionId: "C03-M4", value: "E*sqrt(9 - log(256))/2" },
      ],
      solution: {
        steps: [
          t`Put $x = 2$ and $y = 1$ in $x^2 = y^2(2\log y + c)$: $4 = 1 \cdot (0 + c)$, so $c = 4$.`,
          t`The particular solution is $x^2 = y^2(2\log y + 4)$.`,
          t`At $y = e$: $x^2 = e^2(2 + 4) = 6e^2$, so the positive value is $x = e\sqrt{6}$.`,
        ],
      },
    },
  ],
};
