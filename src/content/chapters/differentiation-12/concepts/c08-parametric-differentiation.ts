import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`A ball thrown from the ground is at $x = 4t$, $y = 10t - 5t^2$ metres after $t$ seconds. At the start, $x$ grows at $4$ m/s and $y$ at $10$ m/s. What is the slope of its path at the start?`,
    reveal: t`Each instant it moves $4$ across for every $10$ up, so the slope is $\frac{10}{4} = \frac{5}{2}$: the rate of $y$ over the rate of $x$. Check: its path is $y = \frac{5x}{2} - \frac{5x^2}{16}$, with slope $\frac{5}{2}$ at $x = 0$.`,
  },
  explanation: {
    intuition: [
      t`A **parameter** is a helper variable, such as time $t$, on which both $x$ and $y$ depend.`,
      t`As $t$ runs, the point $(x, y)$ moves and traces a curve.`,
      t`Near $t = 1$, in one unit of time, $x$ grows by about $\frac{dx}{dt} = 2$.`,
      t`In the same time, $y$ grows by about $\frac{dy}{dt} = 1$.`,
      t`The slope is rise over run: $\frac{dy}{dx} = \frac{1}{2}$, the ratio of the two rates.`,
      t`So we never need $y$ as a function of $x$: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$.`,
    ],
    formal: [
      {
        title: "The parametric rule",
        points: [
          t`Let $x = f(t)$ and $y = g(t)$; these are **parametric equations**, and $t$ is the parameter.`,
          t`Each value of $t$ gives one point $(f(t), g(t))$ of the curve.`,
          t`By the chain rule, $\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$.`,
          t`Divide by $\frac{dx}{dt}$: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$, provided $\frac{dx}{dt} \ne 0$.`,
          t`**Example:** $x = t^2$, $y = t^3$ give $\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$.`,
        ],
        figure: {
          alt: "The curve x = t², y = t³, which comes in from below, has a sharp point at the origin at t = 0 and leaves upwards. The point at t = 1 is (1, 1), where the tangent has slope 3/2.",
          axes: "xy",
          view: { x: [-1.5, 3.5], y: [-2.5, 2.5] },
          elements: [
            { kind: "curve", points: [[1.823, -2.46], [1.75, -2.316], [1.68, -2.177], [1.61, -2.044], [1.543, -1.916], [1.476, -1.794], [1.411, -1.677], [1.348, -1.565], [1.286, -1.458], [1.225, -1.357], [1.166, -1.26], [1.109, -1.168], [1.053, -1.08], [0.998, -0.997], [0.945, -0.918], [0.893, -0.844], [0.843, -0.774], [0.794, -0.707], [0.746, -0.645], [0.701, -0.586], [0.656, -0.531], [0.613, -0.48], [0.572, -0.432], [0.531, -0.387], [0.493, -0.346], [0.456, -0.308], [0.42, -0.272], [0.386, -0.239], [0.353, -0.21], [0.321, -0.182], [0.292, -0.157], [0.263, -0.135], [0.236, -0.115], [0.211, -0.097], [0.187, -0.081], [0.164, -0.066], [0.143, -0.054], [0.123, -0.043], [0.105, -0.034], [0.088, -0.026], [0.073, -0.02], [0.059, -0.014], [0.047, -0.01], [0.036, -0.007], [0.026, -0.004], [0.018, -0.002], [0.012, -0.001], [0.007, -0.001], [0.003, 0], [0.001, 0], [0, 0], [0.001, 0], [0.003, 0], [0.007, 0.001], [0.012, 0.001], [0.018, 0.002], [0.026, 0.004], [0.036, 0.007], [0.047, 0.01], [0.059, 0.014], [0.073, 0.02], [0.088, 0.026], [0.105, 0.034], [0.123, 0.043], [0.143, 0.054], [0.164, 0.066], [0.187, 0.081], [0.211, 0.097], [0.236, 0.115], [0.263, 0.135], [0.292, 0.157], [0.321, 0.182], [0.353, 0.21], [0.386, 0.239], [0.42, 0.272], [0.456, 0.308], [0.493, 0.346], [0.531, 0.387], [0.572, 0.432], [0.613, 0.48], [0.656, 0.531], [0.701, 0.586], [0.746, 0.645], [0.794, 0.707], [0.843, 0.774], [0.893, 0.844], [0.945, 0.918], [0.998, 0.997], [1.053, 1.08], [1.109, 1.168], [1.166, 1.26], [1.225, 1.357], [1.286, 1.458], [1.348, 1.565], [1.411, 1.677], [1.476, 1.794], [1.543, 1.916], [1.61, 2.044], [1.68, 2.177], [1.75, 2.316], [1.823, 2.46]], step: 1 },
            { kind: "label", at: [-1.4, 2.1], label: "x = t², y = t³", labelAt: "e", step: 1 },
            { kind: "point", at: [1, 1], label: "t = 1", labelAt: "nw", step: 2 },
            { kind: "segment", from: [-0.1, -0.65], to: [2.1, 2.65], tone: "good", step: 5 },
            { kind: "label", at: [1.4, 1.5], label: "slope 3/2", labelAt: "se", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "The slope at a given value",
        points: [
          t`**Example:** $x = 2\cos t$, $y = 2\sin t$ trace the circle of radius $2$.`,
          t`$\frac{dx}{dt} = -2\sin t$ and $\frac{dy}{dt} = 2\cos t$, so $\frac{dy}{dx} = -\cot t$.`,
          t`The answer may stay in terms of $t$; it need not be rewritten in $x$.`,
          t`At $t = \frac{\pi}{3}$ the point is $(1, \sqrt{3})$ and the slope is $-\cot\frac{\pi}{3} = -\frac{1}{\sqrt{3}}$.`,
          t`Check: the tangent is perpendicular to the radius, whose slope is $\sqrt{3}$.`,
          t`If $\frac{dx}{dt} = 0$ but $\frac{dy}{dt} \ne 0$, the tangent is vertical, as at $t = 0$.`,
        ],
        figure: {
          alt: "The circle x = 2cos t, y = 2sin t of radius 2. At t = π/3 the point is (1, √3), where the tangent has slope −1/√3; the radius to that point, slope √3, is perpendicular to it. At t = 0, the point (2, 0), the tangent is vertical.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, step: 1 },
            { kind: "label", at: [-2.9, -2.6], label: "x = 2cos t, y = 2sin t", labelAt: "e", step: 1 },
            { kind: "point", at: [1, 1.732], label: "t = π/3", labelAt: "ne", step: 4 },
            { kind: "segment", from: [-0.6, 2.656], to: [2.6, 0.808], tone: "good", step: 4 },
            { kind: "label", at: [-0.65, 2.66], label: "slope −1/√3", labelAt: "w", tone: "good", step: 4 },
            { kind: "segment", from: [0, 0], to: [1, 1.732], tone: "muted", step: 5 },
            { kind: "label", at: [0.5, 0.87], label: "slope √3", labelAt: "e", tone: "muted", step: 5 },
            { kind: "point", at: [2, 0], label: "t = 0", labelAt: "ne", step: 6 },
            { kind: "segment", from: [2, -1.2], to: [2, 1.2], dashed: true, tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Divide, the right way up",
        points: [
          t`**Example:** $x = 2t$, $y = t^2$ at $t = 2$ give $\frac{dx}{dt} = 2$ and $\frac{dy}{dt} = 4$.`,
          t`Right: $\frac{dy}{dx} = \frac{4}{2} = 2$, the slope of the tangent.`,
          t`Upside down, $\frac{2}{4} = \frac{1}{2}$ is the rate of $x$ against $y$, not $y$ against $x$.`,
          t`$\frac{dy}{dt} = 4$ alone says how fast $y$ grows in time, not along $x$.`,
          t`Multiplying, $4 \times 2 = 8$, misreads the chain rule: $\frac{dt}{dx} = \frac{1}{dx/dt}$.`,
        ],
        figure: {
          alt: "The parabola x = 2t, y = t² with the point (4, 4) at t = 2. The tangent there has slope 2. Two red dashed lines through the same point, of slopes 1/2 and 4, are marked wrong.",
          axes: "xy",
          view: { x: [-1, 6.5], y: [-1, 6.5] },
          elements: [
            { kind: "curve", points: [[-1, 0.25], [-0.938, 0.22], [-0.876, 0.192], [-0.814, 0.166], [-0.752, 0.141], [-0.69, 0.119], [-0.628, 0.099], [-0.566, 0.08], [-0.504, 0.064], [-0.442, 0.049], [-0.38, 0.036], [-0.318, 0.025], [-0.256, 0.016], [-0.194, 0.009], [-0.132, 0.004], [-0.07, 0.001], [-0.008, 0], [0.054, 0.001], [0.116, 0.003], [0.178, 0.008], [0.24, 0.014], [0.302, 0.023], [0.364, 0.033], [0.426, 0.045], [0.488, 0.06], [0.55, 0.076], [0.612, 0.094], [0.674, 0.114], [0.736, 0.135], [0.798, 0.159], [0.86, 0.185], [0.922, 0.213], [0.984, 0.242], [1.046, 0.274], [1.108, 0.307], [1.17, 0.342], [1.232, 0.379], [1.294, 0.419], [1.356, 0.46], [1.418, 0.503], [1.48, 0.548], [1.542, 0.594], [1.604, 0.643], [1.666, 0.694], [1.728, 0.746], [1.79, 0.801], [1.852, 0.857], [1.914, 0.916], [1.976, 0.976], [2.038, 1.038], [2.1, 1.103], [2.162, 1.169], [2.224, 1.237], [2.286, 1.306], [2.348, 1.378], [2.41, 1.452], [2.472, 1.528], [2.534, 1.605], [2.596, 1.685], [2.658, 1.766], [2.72, 1.85], [2.782, 1.935], [2.844, 2.022], [2.906, 2.111], [2.968, 2.202], [3.03, 2.295], [3.092, 2.39], [3.154, 2.487], [3.216, 2.586], [3.278, 2.686], [3.34, 2.789], [3.402, 2.893], [3.464, 3], [3.526, 3.108], [3.588, 3.218], [3.65, 3.331], [3.712, 3.445], [3.774, 3.561], [3.836, 3.679], [3.898, 3.799], [3.96, 3.92], [4.022, 4.044], [4.084, 4.17], [4.146, 4.297], [4.208, 4.427], [4.27, 4.558], [4.332, 4.692], [4.394, 4.827], [4.456, 4.964], [4.518, 5.103], [4.58, 5.244], [4.642, 5.387], [4.704, 5.532], [4.766, 5.679], [4.828, 5.827], [4.89, 5.978], [4.952, 6.131], [5.014, 6.285], [5.076, 6.441], [5.138, 6.6], [5.2, 6.76]] },
            { kind: "point", at: [4, 4], label: "t = 2", labelAt: "nw", step: 1 },
            { kind: "segment", from: [2.6, 1.2], to: [5.1, 6.2], tone: "good", step: 2 },
            { kind: "label", at: [2.6, 1.2], label: "slope 2 ✓", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [1.2, 2.6], to: [6.4, 5.2], dashed: true, tone: "bad", step: 3 },
            { kind: "label", at: [1.2, 2.6], label: "slope 1/2 ✗", labelAt: "s", tone: "bad", step: 3 },
            { kind: "segment", from: [3.5, 2], to: [4.55, 6.2], dashed: true, tone: "bad", step: 4 },
            { kind: "label", at: [3.5, 2], label: "slope 4 ✗", labelAt: "se", tone: "bad", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`If $x = t + \frac{1}{t}$ and $y = \frac{1}{t^2}$, find $\frac{dy}{dx}$ at $t = \frac{1}{2}$.`,
      steps: [
        t`Differentiate each in $t$: $\frac{dx}{dt} = 1 - \frac{1}{t^2}$ and $\frac{dy}{dt} = -\frac{2}{t^3}$.`,
        t`Put $t = \frac{1}{2}$: $\frac{dx}{dt} = 1 - 4 = -3$ and $\frac{dy}{dt} = -16$.`,
        t`Divide, $y$'s rate on top: $\frac{dy}{dx} = \frac{-16}{-3} = \frac{16}{3}$.`,
        t`Check the sign: as $t$ grows here, $x$ and $y$ both fall, so the curve rises to the right.`,
      ],
      answer: t`$\frac{dy}{dx} = \frac{16}{3}$`,
      figure: {
        alt: "The curve x = t + 1/t, y = 1/t² for t > 0. It comes down steeply from the top, reaches (2, 1) at t = 1 and then runs right, close above the x-axis. At t = 1/2 the point is (2.5, 4), where the tangent has slope 16/3.",
        axes: "xy",
        view: { x: [-0.5, 6], y: [-0.5, 6.5] },
        elements: [
          { kind: "curve", points: [[3.012, 6.925], [2.855, 5.982], [2.722, 5.219], [2.61, 4.593], [2.514, 4.073], [2.431, 3.637], [2.361, 3.267], [2.3, 2.951], [2.248, 2.679], [2.203, 2.442], [2.164, 2.236], [2.131, 2.055], [2.103, 1.895], [2.079, 1.753], [2.059, 1.626], [2.043, 1.512], [2.03, 1.411], [2.019, 1.319], [2.011, 1.235], [2.005, 1.16], [2.002, 1.091], [2, 1.028], [2, 0.97], [2.002, 0.917], [2.005, 0.869], [2.009, 0.824], [2.015, 0.782], [2.022, 0.744], [2.03, 0.708], [2.039, 0.675], [2.049, 0.644], [2.059, 0.615], [2.071, 0.588], [2.083, 0.563], [2.096, 0.539], [2.11, 0.517], [2.124, 0.496], [2.139, 0.477], [2.154, 0.458], [2.17, 0.441], [2.186, 0.424], [2.203, 0.409], [2.221, 0.394], [2.238, 0.38], [2.256, 0.367], [2.275, 0.355], [2.294, 0.343], [2.313, 0.331], [2.332, 0.321], [2.352, 0.31], [2.372, 0.301], [2.392, 0.291], [2.413, 0.282], [2.434, 0.274], [2.455, 0.266], [2.476, 0.258], [2.498, 0.251], [2.519, 0.244], [2.541, 0.237], [2.564, 0.23], [2.586, 0.224], [2.608, 0.218], [2.631, 0.212], [2.654, 0.207], [2.677, 0.201], [2.7, 0.196], [2.723, 0.191], [2.747, 0.187], [2.77, 0.182], [2.794, 0.178], [2.818, 0.173], [2.842, 0.169], [2.866, 0.165], [2.89, 0.162], [2.914, 0.158], [2.938, 0.154], [2.963, 0.151], [2.987, 0.148], [3.012, 0.144], [3.037, 0.141], [3.062, 0.138], [3.087, 0.135], [3.112, 0.132], [3.137, 0.13], [3.162, 0.127], [3.187, 0.124], [3.213, 0.122], [3.238, 0.12], [3.263, 0.117], [3.289, 0.115], [3.314, 0.113], [3.34, 0.111], [3.366, 0.108], [3.392, 0.106], [3.417, 0.104], [3.443, 0.103], [3.469, 0.101], [3.495, 0.099], [3.521, 0.097], [3.547, 0.095], [3.574, 0.094], [3.6, 0.092], [3.626, 0.09], [3.652, 0.089], [3.679, 0.087], [3.705, 0.086], [3.731, 0.084], [3.758, 0.083], [3.784, 0.082], [3.811, 0.08], [3.837, 0.079], [3.864, 0.078], [3.891, 0.077], [3.917, 0.075], [3.944, 0.074], [3.971, 0.073], [3.998, 0.072], [4.024, 0.071], [4.051, 0.07], [4.078, 0.069], [4.105, 0.068], [4.132, 0.067], [4.159, 0.066], [4.186, 0.065], [4.213, 0.064], [4.24, 0.063], [4.267, 0.062], [4.294, 0.061], [4.321, 0.06], [4.348, 0.059], [4.376, 0.059], [4.403, 0.058], [4.43, 0.057], [4.457, 0.056], [4.485, 0.055], [4.512, 0.055], [4.539, 0.054], [4.567, 0.053], [4.594, 0.052], [4.621, 0.052], [4.649, 0.051], [4.676, 0.05], [4.703, 0.05], [4.731, 0.049], [4.758, 0.049], [4.786, 0.048], [4.813, 0.047], [4.841, 0.047], [4.868, 0.046], [4.896, 0.046], [4.924, 0.045], [4.951, 0.045], [4.979, 0.044], [5.006, 0.043], [5.034, 0.043], [5.062, 0.042], [5.089, 0.042], [5.117, 0.041], [5.145, 0.041], [5.172, 0.04], [5.2, 0.04]] },
          { kind: "label", at: [2.4, 2.4], label: "x = t + 1/t, y = 1/t²", labelAt: "e" },
          { kind: "point", at: [2.5, 4], label: "t = 1/2", labelAt: "e", step: 1 },
          { kind: "segment", from: [2.15, 2.133], to: [2.85, 5.867], tone: "good", step: 3 },
          { kind: "label", at: [2.85, 5.87], label: "slope 16/3", labelAt: "e", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The curve traced by x = 2t, y = 3t − t² as t runs from 0 to 3, an arch from (0, 0) to (6, 0). At t = 1 the point is (2, 2). An arrow 2 units to the right shows dx/dt = 2, then an arrow 1 unit up shows dy/dt = 1; the tangent through (2, 2) runs along both arrows and has slope 1/2.",
      axes: "xy",
      view: { x: [-0.5, 6.5], y: [-2.5, 4.5] },
      elements: [
        { kind: "curve", points: [[0, 0], [0.06, 0.089], [0.12, 0.176], [0.18, 0.262], [0.24, 0.346], [0.3, 0.427], [0.36, 0.508], [0.42, 0.586], [0.48, 0.662], [0.54, 0.737], [0.6, 0.81], [0.66, 0.881], [0.72, 0.95], [0.78, 1.018], [0.84, 1.084], [0.9, 1.147], [0.96, 1.21], [1.02, 1.27], [1.08, 1.328], [1.14, 1.385], [1.2, 1.44], [1.26, 1.493], [1.32, 1.544], [1.38, 1.594], [1.44, 1.642], [1.5, 1.688], [1.56, 1.732], [1.62, 1.774], [1.68, 1.814], [1.74, 1.853], [1.8, 1.89], [1.86, 1.925], [1.92, 1.958], [1.98, 1.99], [2.04, 2.02], [2.1, 2.048], [2.16, 2.074], [2.22, 2.098], [2.28, 2.12], [2.34, 2.141], [2.4, 2.16], [2.46, 2.177], [2.52, 2.192], [2.58, 2.206], [2.64, 2.218], [2.7, 2.228], [2.76, 2.236], [2.82, 2.242], [2.88, 2.246], [2.94, 2.249], [3, 2.25], [3.06, 2.249], [3.12, 2.246], [3.18, 2.242], [3.24, 2.236], [3.3, 2.227], [3.36, 2.218], [3.42, 2.206], [3.48, 2.192], [3.54, 2.177], [3.6, 2.16], [3.66, 2.141], [3.72, 2.12], [3.78, 2.098], [3.84, 2.074], [3.9, 2.047], [3.96, 2.02], [4.02, 1.99], [4.08, 1.958], [4.14, 1.925], [4.2, 1.89], [4.26, 1.853], [4.32, 1.814], [4.38, 1.774], [4.44, 1.732], [4.5, 1.688], [4.56, 1.642], [4.62, 1.594], [4.68, 1.544], [4.74, 1.493], [4.8, 1.44], [4.86, 1.385], [4.92, 1.328], [4.98, 1.27], [5.04, 1.21], [5.1, 1.147], [5.16, 1.084], [5.22, 1.018], [5.28, 0.95], [5.34, 0.881], [5.4, 0.81], [5.46, 0.737], [5.52, 0.662], [5.58, 0.586], [5.64, 0.508], [5.7, 0.428], [5.76, 0.346], [5.82, 0.262], [5.88, 0.176], [5.94, 0.089], [6, 0]], step: 1 },
        { kind: "label", at: [0.2, -1.5], label: "x = 2t, y = 3t − t²", labelAt: "e", step: 1 },
        { kind: "point", at: [2, 2], label: "t = 1", labelAt: "nw", step: 2 },
        { kind: "vector", from: [2, 2], to: [4, 2], tone: "muted", step: 3 },
        { kind: "label", at: [3, 1.9], label: "dx/dt = 2", labelAt: "s", tone: "muted", step: 3 },
        { kind: "vector", from: [4, 2], to: [4, 3], tone: "muted", step: 4 },
        { kind: "label", at: [4.1, 2.5], label: "dy/dt = 1", labelAt: "e", tone: "muted", step: 4 },
        { kind: "line", through: [[2, 2], [4, 3]], tone: "good", step: 5 },
        { kind: "label", at: [5.2, 3.6], label: "slope 1/2", labelAt: "nw", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag t along a slider: the point moves along the curve, arrows show dx/dt and dy/dt, and the tangent through the point has slope equal to their ratio.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Turns the ratio upside down: $\frac{dy}{dx} = \frac{dx/dt}{dy/dt}$.`,
      remediation: t`Keep $y$'s rate on top: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$. The upside-down ratio is $\frac{dx}{dy}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Takes $\frac{dy}{dt}$ as the slope and never divides by $\frac{dx}{dt}$.`,
      remediation: t`$\frac{dy}{dt}$ is how fast $y$ changes with $t$. The slope compares it with how fast $x$ changes: divide by $\frac{dx}{dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Multiplies the rates, $\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dx}{dt}$, reading $\frac{dt}{dx}$ in the chain rule as $\frac{dx}{dt}$.`,
      remediation: t`The chain rule gives $\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx}$, and $\frac{dt}{dx} = \frac{1}{dx/dt}$: so divide the rates, don't multiply them.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M4",
      mistake: t`Drops the minus sign in the derivative of $\cos$, $\cot$ or $\operatorname{cosec}$, e.g. $\frac{d}{d\theta}\cos\theta = \sin\theta$.`,
      remediation: t`The co-functions differentiate with a minus sign: $(\cos\theta)' = -\sin\theta$, $(\cot\theta)' = -\operatorname{cosec}^2\theta$, $(\operatorname{cosec}\theta)' = -\operatorname{cosec}\theta\cot\theta$.`,
      fallback: { kind: "ext", topic: "derivatives of trigonometric functions" },
    },
    {
      id: "C08-M5",
      mistake: t`Stops the chain rule early inside $\frac{dx}{dt}$ or $\frac{dy}{dt}$: $\frac{d}{d\theta}\sin^3\theta = 3\sin^2\theta$, $\frac{d}{dt}\sin\frac{\pi t}{2} = \cos\frac{\pi t}{2}$.`,
      remediation: t`Each rate is a chain-rule derivative: multiply by the inner function's derivative, as in $\frac{d}{d\theta}\sin^3\theta = 3\sin^2\theta\cos\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C08-M4 gives the key when both $x$ and $y$ are co-functions whose dropped signs cancel (C08-Q2, C08-Q5), so it is not tagged there; C08-Q3, C08-Q4 and C08-Q6 diagnose it.`,
    t`C08-M5 gives the key when neither $x$ nor $y$ has a function of a function (C08-Q1, C08-Q2, C08-Q3); C08-Q4, C08-Q5 and C08-Q6 diagnose it.`,
    t`Options in $t$ or $\theta$ compare as expressions in a plain symbol: C08-Q3's key value is $\frac{b(1 - \cos\theta)}{a\sin\theta}$, shown in the book's form $\frac{b}{a}\tan\frac{\theta}{2}$.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.1 (i)" },
      stem: t`If $x = at^2$ and $y = 2at$, where $a$ is a non-zero constant, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { X: "a*t**2", Y: "2*a*t" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{t}$`, correct: true, value: "1/t" },
        { key: "B", text: t`$t$`, correct: false, misconceptionId: "C08-M1", value: "t" },
        { key: "C", text: t`$2a$`, correct: false, misconceptionId: "C08-M2", value: "2*a" },
        { key: "D", text: t`$4a^2t$`, correct: false, misconceptionId: "C08-M3", value: "4*a**2*t" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{dt} = 2at$ and $\frac{dy}{dt} = 2a$.`,
          t`$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{2a}{2at}$ $= \frac{1}{t}$.`,
        ],
        figure: {
          alt: "The parabola x = at², y = 2at drawn with a = 1, that is y² = 4x. At t = 1 the point is (1, 2) and the tangent has slope 1/t = 1.",
          axes: "xy",
          view: { x: [-1, 5], y: [-3.5, 3.5] },
          elements: [
            { kind: "curve", points: [[3.062, -3.5], [2.941, -3.43], [2.822, -3.36], [2.706, -3.29], [2.592, -3.22], [2.481, -3.15], [2.372, -3.08], [2.265, -3.01], [2.161, -2.94], [2.059, -2.87], [1.96, -2.8], [1.863, -2.73], [1.769, -2.66], [1.677, -2.59], [1.588, -2.52], [1.501, -2.45], [1.416, -2.38], [1.334, -2.31], [1.254, -2.24], [1.177, -2.17], [1.103, -2.1], [1.03, -2.03], [0.96, -1.96], [0.893, -1.89], [0.828, -1.82], [0.766, -1.75], [0.706, -1.68], [0.648, -1.61], [0.593, -1.54], [0.54, -1.47], [0.49, -1.4], [0.442, -1.33], [0.397, -1.26], [0.354, -1.19], [0.314, -1.12], [0.276, -1.05], [0.24, -0.98], [0.207, -0.91], [0.176, -0.84], [0.148, -0.77], [0.123, -0.7], [0.099, -0.63], [0.078, -0.56], [0.06, -0.49], [0.044, -0.42], [0.031, -0.35], [0.02, -0.28], [0.011, -0.21], [0.005, -0.14], [0.001, -0.07], [0, 0], [0.001, 0.07], [0.005, 0.14], [0.011, 0.21], [0.02, 0.28], [0.031, 0.35], [0.044, 0.42], [0.06, 0.49], [0.078, 0.56], [0.099, 0.63], [0.123, 0.7], [0.148, 0.77], [0.176, 0.84], [0.207, 0.91], [0.24, 0.98], [0.276, 1.05], [0.314, 1.12], [0.354, 1.19], [0.397, 1.26], [0.442, 1.33], [0.49, 1.4], [0.54, 1.47], [0.593, 1.54], [0.648, 1.61], [0.706, 1.68], [0.766, 1.75], [0.828, 1.82], [0.893, 1.89], [0.96, 1.96], [1.03, 2.03], [1.102, 2.1], [1.177, 2.17], [1.254, 2.24], [1.334, 2.31], [1.416, 2.38], [1.501, 2.45], [1.588, 2.52], [1.677, 2.59], [1.769, 2.66], [1.863, 2.73], [1.96, 2.8], [2.059, 2.87], [2.161, 2.94], [2.265, 3.01], [2.372, 3.08], [2.481, 3.15], [2.592, 3.22], [2.706, 3.29], [2.822, 3.36], [2.941, 3.43], [3.062, 3.5]], step: 1 },
            { kind: "label", at: [3.1, -3], label: "a = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [1, 2], label: "t = 1", labelAt: "nw", step: 2 },
            { kind: "segment", from: [-0.25, 0.75], to: [2.25, 3.25], tone: "good", step: 2 },
            { kind: "label", at: [1.6, 1.5], label: "slope 1", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.1 (ii)" },
      stem: t`If $x = a\cot\theta$ and $y = b\operatorname{cosec}\theta$, where $a$ and $b$ are non-zero constants, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { X: "a*cot(theta)", Y: "b*csc(theta)" } },
      options: [
        { key: "A", text: t`$\dfrac{a}{b}\sec\theta$`, correct: false, misconceptionId: "C08-M1", value: "a/(b*cos(theta))" },
        { key: "B", text: t`$-b\operatorname{cosec}\theta\cot\theta$`, correct: false, misconceptionId: "C08-M2", value: "-b*cot(theta)*csc(theta)" },
        { key: "C", text: t`$ab\operatorname{cosec}^3\theta\cot\theta$`, correct: false, misconceptionId: "C08-M3", value: "a*b*cos(theta)/sin(theta)**4" },
        { key: "D", text: t`$\dfrac{b}{a}\cos\theta$`, correct: true, value: "b*cos(theta)/a" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = -a\operatorname{cosec}^2\theta$ and $\frac{dy}{d\theta} = -b\operatorname{cosec}\theta\cot\theta$.`,
          t`$\frac{dy}{dx} = \frac{-b\operatorname{cosec}\theta\cot\theta}{-a\operatorname{cosec}^2\theta}$ $= \frac{b}{a} \cdot \frac{\cot\theta}{\operatorname{cosec}\theta}$.`,
          t`$\frac{\cot\theta}{\operatorname{cosec}\theta} = \frac{\cos\theta}{\sin\theta} \cdot \sin\theta$ $= \cos\theta$, so $\frac{dy}{dx} = \frac{b}{a}\cos\theta$.`,
        ],
        figure: {
          alt: "The curve x = a cot θ, y = b cosec θ drawn with a = b = 1 for 0 < θ < π: the upper branch of y² − x² = 1. At θ = π/3 the point is (1/√3, 2/√3), where the tangent has slope cos θ = 1/2.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 1, b: 1, axis: "y", branch: 1, step: 1 },
            { kind: "label", at: [-2.8, -2.6], label: "a = b = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [0.577, 1.155], label: "θ = π/3", labelAt: "nw", step: 3 },
            { kind: "segment", from: [-0.623, 0.555], to: [1.777, 1.755], tone: "good", step: 3 },
            { kind: "label", at: [1.78, 1.75], label: "slope 1/2", labelAt: "se", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.1 (v)" },
      stem: t`If $x = a(1 - \cos\theta)$ and $y = b(\theta - \sin\theta)$, where $a$ and $b$ are non-zero constants, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { X: "a*(1 - cos(theta))", Y: "b*(theta - sin(theta))" } },
      options: [
        { key: "A", text: t`$-\dfrac{b}{a}\tan\dfrac{\theta}{2}$`, correct: false, misconceptionId: "C08-M4", value: "b*(cos(theta) - 1)/(a*sin(theta))" },
        { key: "B", text: t`$\dfrac{a}{b}\cot\dfrac{\theta}{2}$`, correct: false, misconceptionId: "C08-M1", value: "-a*sin(theta)/(b*(cos(theta) - 1))" },
        { key: "C", text: t`$ab\sin\theta(1 - \cos\theta)$`, correct: false, misconceptionId: "C08-M3", value: "a*b*(1 - cos(theta))*sin(theta)" },
        { key: "D", text: t`$\dfrac{b}{a}\tan\dfrac{\theta}{2}$`, correct: true, value: "b*(1 - cos(theta))/(a*sin(theta))" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = a\sin\theta$ (the minus of $-\cos\theta$ cancels) and $\frac{dy}{d\theta} = b(1 - \cos\theta)$.`,
          t`$\frac{dy}{dx} = \frac{b(1 - \cos\theta)}{a\sin\theta}$ $= \frac{b}{a} \cdot \frac{2\sin^2(\theta/2)}{2\sin(\theta/2)\cos(\theta/2)}$.`,
          t`So $\frac{dy}{dx} = \frac{b}{a}\tan\frac{\theta}{2}$.`,
        ],
        figure: {
          alt: "The curve x = a(1 − cos θ), y = b(θ − sin θ) drawn with a = b = 1 for 0 ≤ θ ≤ π, rising from the origin to (2, π). At θ = π/2 the point is (1, π/2 − 1), where the tangent has slope tan(π/4) = 1.",
          axes: "xy",
          view: { x: [-1, 3.5], y: [-0.5, 4] },
          elements: [
            { kind: "curve", points: [[0, 0], [0, 0], [0.002, 0], [0.004, 0], [0.008, 0], [0.012, 0.001], [0.018, 0.001], [0.024, 0.002], [0.031, 0.003], [0.04, 0.004], [0.049, 0.005], [0.059, 0.007], [0.07, 0.009], [0.082, 0.011], [0.095, 0.014], [0.109, 0.017], [0.124, 0.021], [0.139, 0.025], [0.156, 0.03], [0.173, 0.035], [0.191, 0.041], [0.21, 0.047], [0.229, 0.054], [0.25, 0.061], [0.271, 0.069], [0.293, 0.078], [0.315, 0.088], [0.339, 0.098], [0.363, 0.109], [0.387, 0.121], [0.412, 0.133], [0.438, 0.147], [0.464, 0.161], [0.491, 0.176], [0.518, 0.192], [0.546, 0.209], [0.574, 0.226], [0.603, 0.245], [0.632, 0.264], [0.661, 0.284], [0.691, 0.306], [0.721, 0.328], [0.751, 0.351], [0.782, 0.375], [0.813, 0.4], [0.844, 0.426], [0.875, 0.453], [0.906, 0.481], [0.937, 0.51], [0.969, 0.54], [1, 0.571], [1.031, 0.603], [1.063, 0.636], [1.094, 0.669], [1.125, 0.704], [1.156, 0.74], [1.187, 0.777], [1.218, 0.815], [1.249, 0.854], [1.279, 0.893], [1.309, 0.934], [1.339, 0.975], [1.368, 1.018], [1.397, 1.061], [1.426, 1.106], [1.454, 1.151], [1.482, 1.197], [1.509, 1.244], [1.536, 1.292], [1.562, 1.341], [1.588, 1.39], [1.613, 1.44], [1.637, 1.491], [1.661, 1.543], [1.685, 1.596], [1.707, 1.649], [1.729, 1.703], [1.75, 1.758], [1.771, 1.813], [1.79, 1.869], [1.809, 1.925], [1.827, 1.983], [1.844, 2.04], [1.861, 2.098], [1.876, 2.157], [1.891, 2.216], [1.905, 2.276], [1.918, 2.336], [1.93, 2.396], [1.941, 2.457], [1.951, 2.518], [1.96, 2.58], [1.969, 2.642], [1.976, 2.704], [1.982, 2.766], [1.988, 2.828], [1.992, 2.891], [1.996, 2.953], [1.998, 3.016], [2, 3.079], [2, 3.142]], step: 1 },
            { kind: "label", at: [-0.9, 3.6], label: "a = b = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [1, 0.571], label: "θ = π/2", labelAt: "nw", step: 3 },
            { kind: "segment", from: [0.25, -0.179], to: [1.75, 1.321], tone: "good", step: 3 },
            { kind: "label", at: [1.5, 0.5], label: "slope 1", labelAt: "se", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.2 (ii)" },
      stem: t`If $x = a\cos^3\theta$ and $y = a\sin^3\theta$, where $a$ is a non-zero constant, then the value of $\dfrac{dy}{dx}$ at $\theta = \dfrac{\pi}{3}$ is`,
      verify: { kind: "value", inputs: { X: "a*cos(theta)**3", Y: "a*sin(theta)**3", at: "pi/3" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C08-M5", value: "3" },
        { key: "B", text: t`$-\dfrac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C08-M1", value: "-sqrt(3)/3" },
        { key: "C", text: t`$-\sqrt{3}$`, correct: true, value: "-sqrt(3)" },
        { key: "D", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C08-M4", value: "sqrt(3)" },
      ],
      solution: {
        steps: [
          t`Chain rule: $\frac{dx}{d\theta} = -3a\cos^2\theta\sin\theta$ and $\frac{dy}{d\theta} = 3a\sin^2\theta\cos\theta$.`,
          t`$\frac{dy}{dx} = \frac{3a\sin^2\theta\cos\theta}{-3a\cos^2\theta\sin\theta}$ $= -\tan\theta$.`,
          t`At $\theta = \frac{\pi}{3}$: $\frac{dy}{dx} = -\tan\frac{\pi}{3} = -\sqrt{3}$.`,
        ],
        figure: {
          alt: "The star-shaped curve x = a cos³θ, y = a sin³θ drawn with a = 1, with cusps at (±1, 0) and (0, ±1). At θ = π/3 the point is (1/8, 3√3/8), where the tangent has slope −√3.",
          axes: "xy",
          view: { x: [-1.3, 1.3], y: [-1.3, 1.3] },
          elements: [
            { kind: "curve", points: [[1, 0], [0.999, 0], [0.994, 0], [0.987, 0.001], [0.977, 0.002], [0.964, 0.004], [0.948, 0.007], [0.929, 0.01], [0.909, 0.015], [0.886, 0.022], [0.86, 0.03], [0.833, 0.039], [0.804, 0.05], [0.773, 0.063], [0.741, 0.077], [0.707, 0.094], [0.673, 0.112], [0.638, 0.132], [0.602, 0.154], [0.566, 0.178], [0.53, 0.203], [0.493, 0.23], [0.457, 0.259], [0.422, 0.289], [0.387, 0.321], [0.354, 0.354], [0.321, 0.387], [0.289, 0.422], [0.259, 0.457], [0.23, 0.493], [0.203, 0.53], [0.178, 0.566], [0.154, 0.602], [0.132, 0.638], [0.112, 0.673], [0.094, 0.707], [0.077, 0.741], [0.063, 0.773], [0.05, 0.804], [0.039, 0.833], [0.03, 0.86], [0.022, 0.886], [0.015, 0.909], [0.01, 0.929], [0.007, 0.948], [0.004, 0.964], [0.002, 0.977], [0.001, 0.987], [0, 0.994], [0, 0.999], [0, 1], [0, 0.999], [0, 0.994], [-0.001, 0.987], [-0.002, 0.977], [-0.004, 0.964], [-0.007, 0.948], [-0.01, 0.929], [-0.015, 0.909], [-0.022, 0.886], [-0.03, 0.86], [-0.039, 0.833], [-0.05, 0.804], [-0.063, 0.773], [-0.077, 0.741], [-0.094, 0.707], [-0.112, 0.673], [-0.132, 0.638], [-0.154, 0.602], [-0.178, 0.566], [-0.203, 0.53], [-0.23, 0.493], [-0.259, 0.457], [-0.289, 0.422], [-0.321, 0.387], [-0.354, 0.354], [-0.387, 0.321], [-0.422, 0.289], [-0.457, 0.259], [-0.493, 0.23], [-0.53, 0.203], [-0.566, 0.178], [-0.602, 0.154], [-0.638, 0.132], [-0.673, 0.112], [-0.707, 0.094], [-0.741, 0.077], [-0.773, 0.063], [-0.804, 0.05], [-0.833, 0.039], [-0.86, 0.03], [-0.886, 0.022], [-0.909, 0.015], [-0.929, 0.01], [-0.948, 0.007], [-0.964, 0.004], [-0.977, 0.002], [-0.987, 0.001], [-0.994, 0], [-0.999, 0], [-1, 0], [-0.999, 0], [-0.994, 0], [-0.987, -0.001], [-0.977, -0.002], [-0.964, -0.004], [-0.948, -0.007], [-0.929, -0.01], [-0.909, -0.015], [-0.886, -0.022], [-0.86, -0.03], [-0.833, -0.039], [-0.804, -0.05], [-0.773, -0.063], [-0.741, -0.077], [-0.707, -0.094], [-0.673, -0.112], [-0.638, -0.132], [-0.602, -0.154], [-0.566, -0.178], [-0.53, -0.203], [-0.493, -0.23], [-0.457, -0.259], [-0.422, -0.289], [-0.387, -0.321], [-0.354, -0.354], [-0.321, -0.387], [-0.289, -0.422], [-0.259, -0.457], [-0.23, -0.493], [-0.203, -0.53], [-0.178, -0.566], [-0.154, -0.602], [-0.132, -0.638], [-0.112, -0.673], [-0.094, -0.707], [-0.077, -0.741], [-0.063, -0.773], [-0.05, -0.804], [-0.039, -0.833], [-0.03, -0.86], [-0.022, -0.886], [-0.015, -0.909], [-0.01, -0.929], [-0.007, -0.948], [-0.004, -0.964], [-0.002, -0.977], [-0.001, -0.987], [0, -0.994], [0, -0.999], [0, -1], [0, -0.999], [0, -0.994], [0.001, -0.987], [0.002, -0.977], [0.004, -0.964], [0.007, -0.948], [0.01, -0.929], [0.015, -0.909], [0.022, -0.886], [0.03, -0.86], [0.039, -0.833], [0.05, -0.804], [0.063, -0.773], [0.077, -0.741], [0.094, -0.707], [0.112, -0.673], [0.132, -0.638], [0.154, -0.602], [0.178, -0.566], [0.203, -0.53], [0.23, -0.493], [0.259, -0.457], [0.289, -0.422], [0.321, -0.387], [0.354, -0.354], [0.387, -0.321], [0.422, -0.289], [0.457, -0.259], [0.493, -0.23], [0.53, -0.203], [0.566, -0.178], [0.602, -0.154], [0.638, -0.132], [0.673, -0.112], [0.707, -0.094], [0.741, -0.077], [0.773, -0.063], [0.804, -0.05], [0.833, -0.039], [0.86, -0.03], [0.886, -0.022], [0.909, -0.015], [0.929, -0.01], [0.948, -0.007], [0.964, -0.004], [0.977, -0.002], [0.987, -0.001], [0.994, 0], [0.999, 0], [1, 0]], step: 1 },
            { kind: "label", at: [0.6, -1.1], label: "a = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [0.125, 0.65], label: "θ = π/3", labelAt: "ne", step: 3 },
            { kind: "segment", from: [-0.175, 1.169], to: [0.425, 0.13], tone: "good", step: 3 },
            { kind: "label", at: [-0.2, 1.17], label: "slope −√3", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.2 (i)" },
      stem: t`If $x = \operatorname{cosec}^2\theta$ and $y = \cot^3\theta$, then the value of $\dfrac{dy}{dx}$ at $\theta = \dfrac{\pi}{6}$ is`,
      verify: { kind: "value", inputs: { X: "csc(theta)**2", Y: "cot(theta)**3", at: "pi/6" } },
      options: [
        { key: "A", text: t`$\dfrac{2}{3\sqrt{3}}$`, correct: false, misconceptionId: "C08-M1", value: "2*sqrt(3)/9" },
        { key: "B", text: t`$\dfrac{3\sqrt{3}}{2}$`, correct: true, value: "3*sqrt(3)/2" },
        { key: "C", text: t`$\dfrac{9}{4}$`, correct: false, misconceptionId: "C08-M5", value: "9/4" },
        { key: "D", text: t`$-36$`, correct: false, misconceptionId: "C08-M2", value: "-36" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{d\theta} = 2\operatorname{cosec}\theta \cdot (-\operatorname{cosec}\theta\cot\theta)$ $= -2\operatorname{cosec}^2\theta\cot\theta$.`,
          t`$\frac{dy}{d\theta} = -3\cot^2\theta\operatorname{cosec}^2\theta$, so $\frac{dy}{dx} = \frac{3\cot^2\theta}{2\cot\theta}$ $= \frac{3}{2}\cot\theta$.`,
          t`At $\theta = \frac{\pi}{6}$, $\cot\theta = \sqrt{3}$, so $\frac{dy}{dx} = \frac{3\sqrt{3}}{2}$.`,
        ],
        figure: {
          alt: "The curve x = cosec²θ, y = cot³θ, which starts at (1, 0) and rises steeply to the right. At θ = π/6 the point is (4, 3√3), where the tangent has slope 3√3/2, about 2.6.",
          axes: "xy",
          view: { x: [-0.5, 6.5], y: [-1.5, 6.5] },
          elements: [
            { kind: "curve", points: [[5.286, 8.872], [5.055, 8.165], [4.84, 7.524], [4.639, 6.943], [4.452, 6.414], [4.277, 5.932], [4.113, 5.493], [3.959, 5.091], [3.815, 4.723], [3.679, 4.385], [3.551, 4.075], [3.431, 3.79], [3.317, 3.527], [3.21, 3.285], [3.108, 3.061], [3.012, 2.854], [2.921, 2.663], [2.835, 2.485], [2.753, 2.321], [2.675, 2.168], [2.601, 2.027], [2.531, 1.895], [2.464, 1.772], [2.401, 1.658], [2.34, 1.551], [2.282, 1.452], [2.227, 1.359], [2.174, 1.272], [2.124, 1.191], [2.076, 1.115], [2.03, 1.045], [1.985, 0.978], [1.943, 0.916], [1.903, 0.858], [1.864, 0.803], [1.827, 0.752], [1.791, 0.704], [1.757, 0.659], [1.724, 0.617], [1.693, 0.577], [1.663, 0.54], [1.634, 0.505], [1.606, 0.472], [1.579, 0.441], [1.553, 0.412], [1.529, 0.384], [1.505, 0.359], [1.482, 0.334], [1.46, 0.312], [1.438, 0.29], [1.418, 0.27], [1.398, 0.251], [1.379, 0.234], [1.361, 0.217], [1.344, 0.201], [1.327, 0.187], [1.31, 0.173], [1.295, 0.16], [1.28, 0.148], [1.265, 0.136], [1.251, 0.126], [1.238, 0.116], [1.225, 0.107], [1.212, 0.098], [1.2, 0.09], [1.189, 0.082], [1.178, 0.075], [1.167, 0.068], [1.157, 0.062], [1.147, 0.056], [1.138, 0.051], [1.129, 0.046], [1.12, 0.041], [1.112, 0.037], [1.104, 0.033], [1.096, 0.03], [1.089, 0.026], [1.082, 0.023], [1.075, 0.021], [1.069, 0.018], [1.063, 0.016], [1.057, 0.014], [1.052, 0.012], [1.047, 0.01], [1.042, 0.009], [1.037, 0.007], [1.033, 0.006], [1.029, 0.005], [1.025, 0.004], [1.022, 0.003], [1.019, 0.003], [1.016, 0.002], [1.013, 0.002], [1.011, 0.001], [1.009, 0.001], [1.007, 0.001], [1.005, 0], [1.004, 0], [1.002, 0], [1.001, 0], [1.001, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1.001, 0], [1.001, 0], [1.002, 0], [1.004, 0], [1.005, 0], [1.007, -0.001], [1.009, -0.001], [1.011, -0.001], [1.013, -0.002], [1.016, -0.002], [1.019, -0.003], [1.022, -0.003], [1.026, -0.004], [1.029, -0.005], [1.033, -0.006], [1.038, -0.007], [1.042, -0.009], [1.047, -0.01], [1.052, -0.012], [1.058, -0.014], [1.063, -0.016], [1.069, -0.018], [1.076, -0.021], [1.082, -0.024], [1.089, -0.027], [1.096, -0.03], [1.104, -0.034], [1.112, -0.037], [1.12, -0.042], [1.129, -0.046], [1.138, -0.051], [1.148, -0.057], [1.157, -0.062], [1.168, -0.069], [1.178, -0.075], [1.189, -0.082], [1.201, -0.09], [1.213, -0.098], [1.225, -0.107], [1.238, -0.116], [1.252, -0.126], [1.266, -0.137], [1.28, -0.149], [1.296, -0.161], [1.311, -0.174], [1.328, -0.187], [1.345, -0.202], [1.362, -0.218], [1.38, -0.235], [1.399, -0.252], [1.419, -0.271], [1.44, -0.291], [1.461, -0.313], [1.483, -0.336], [1.506, -0.36], [1.53, -0.386]], step: 1 },
            { kind: "point", at: [4, 5.196], label: "θ = π/6", labelAt: "nw", step: 3 },
            { kind: "segment", from: [3.55, 4.027], to: [4.45, 6.365], tone: "good", step: 3 },
            { kind: "label", at: [3.55, 4.03], label: "slope 3√3/2", labelAt: "se", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.2 (iii)" },
      stem: t`If $x = t^2 + t + 1$ and $y = \sin\left(\dfrac{\pi t}{2}\right) + \cos\left(\dfrac{\pi t}{2}\right)$, then the value of $\dfrac{dy}{dx}$ at $t = 1$ is`,
      verify: { kind: "value", inputs: { X: "t**2 + t + 1", Y: "sin(pi*t/2) + cos(pi*t/2)", at: "1" } },
      options: [
        { key: "A", text: t`$-\dfrac{1}{3}$`, correct: false, misconceptionId: "C08-M5", value: "-1/3" },
        { key: "B", text: t`$-\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C08-M2", value: "-pi/2" },
        { key: "C", text: t`$-\dfrac{\pi}{6}$`, correct: true, value: "-pi/6" },
        { key: "D", text: t`$\dfrac{\pi}{6}$`, correct: false, misconceptionId: "C08-M4", value: "pi/6" },
      ],
      solution: {
        steps: [
          t`$\frac{dx}{dt} = 2t + 1$, which is $3$ at $t = 1$.`,
          t`$\frac{dy}{dt} = \frac{\pi}{2}\cos\frac{\pi t}{2}$ $- \frac{\pi}{2}\sin\frac{\pi t}{2}$, which is $\frac{\pi}{2}(0 - 1) = -\frac{\pi}{2}$ at $t = 1$.`,
          t`$\frac{dy}{dx} = \frac{-\pi/2}{3} = -\frac{\pi}{6}$.`,
        ],
        figure: {
          alt: "The curve x = t² + t + 1, y = sin(πt/2) + cos(πt/2) for −1/2 ≤ t ≤ 2, an arch that peaks near (1.75, 1.41). At t = 1 the point is (3, 1), where the tangent has slope −π/6, about −0.52.",
          axes: "xy",
          view: { x: [-0.5, 7.5], y: [-3, 3.5] },
          elements: [
            { kind: "curve", points: [[0.75, 0], [0.751, 0.056], [0.752, 0.111], [0.756, 0.166], [0.76, 0.221], [0.766, 0.276], [0.772, 0.33], [0.781, 0.384], [0.79, 0.437], [0.801, 0.489], [0.812, 0.541], [0.826, 0.592], [0.84, 0.642], [0.856, 0.691], [0.873, 0.739], [0.891, 0.786], [0.91, 0.831], [0.931, 0.876], [0.953, 0.918], [0.976, 0.96], [1, 1], [1.026, 1.038], [1.052, 1.075], [1.081, 1.111], [1.11, 1.144], [1.141, 1.176], [1.173, 1.206], [1.206, 1.234], [1.24, 1.26], [1.276, 1.284], [1.312, 1.307], [1.351, 1.327], [1.39, 1.345], [1.431, 1.361], [1.472, 1.375], [1.516, 1.387], [1.56, 1.397], [1.606, 1.404], [1.652, 1.41], [1.701, 1.413], [1.75, 1.414], [1.801, 1.413], [1.853, 1.41], [1.906, 1.404], [1.96, 1.397], [2.016, 1.387], [2.072, 1.375], [2.131, 1.361], [2.19, 1.345], [2.251, 1.327], [2.312, 1.307], [2.376, 1.284], [2.44, 1.26], [2.506, 1.234], [2.573, 1.206], [2.641, 1.176], [2.71, 1.144], [2.781, 1.111], [2.853, 1.075], [2.926, 1.038], [3, 1], [3.076, 0.96], [3.152, 0.918], [3.231, 0.876], [3.31, 0.831], [3.391, 0.786], [3.472, 0.739], [3.556, 0.691], [3.64, 0.642], [3.726, 0.592], [3.812, 0.541], [3.901, 0.489], [3.99, 0.437], [4.081, 0.384], [4.173, 0.33], [4.266, 0.276], [4.36, 0.221], [4.456, 0.166], [4.553, 0.111], [4.651, 0.056], [4.75, 0], [4.851, -0.056], [4.952, -0.111], [5.056, -0.166], [5.16, -0.221], [5.266, -0.276], [5.372, -0.33], [5.481, -0.384], [5.59, -0.437], [5.701, -0.489], [5.812, -0.541], [5.926, -0.592], [6.04, -0.642], [6.156, -0.691], [6.273, -0.739], [6.391, -0.786], [6.51, -0.831], [6.631, -0.876], [6.753, -0.918], [6.876, -0.96], [7, -1]], step: 1 },
            { kind: "point", at: [3, 1], label: "t = 1", labelAt: "sw", step: 1 },
            { kind: "segment", from: [1.8, 1.628], to: [4.2, 0.372], tone: "good", step: 3 },
            { kind: "label", at: [1.8, 1.63], label: "slope −π/6", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
