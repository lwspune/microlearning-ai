import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`For $x > 0$, find $\int x^x(1 + \log x)\,dx$. There is no formula for it in any table. **Can you still do it?**`,
    reveal: t`Yes. You know $\frac{d}{dx}(x^x) = x^x(1 + \log x)$, which is exactly the integrand. So the answer is $x^x + c$: integrating runs a derivative you already know backwards.`,
  },
  explanation: {
    intuition: [
      t`Differentiating turns a function into its rate of change: $x^5$ becomes $5x^4$.`,
      t`**Integration** runs this backwards: given $5x^4$, find a function whose derivative it is.`,
      t`$x^5$ works, but so does $x^5 + 7$: the $7$ vanishes when you differentiate.`,
      t`So the answer is a whole family, $x^5 + c$, one function for each constant $c$.`,
      t`Every derivative formula, read backwards, gives an integral formula.`,
      t`You can always check an answer: differentiate it, and you must get back what you integrated.`,
    ],
    formal: [
      {
        title: "Antiderivatives and the constant",
        points: [
          t`If $F'(x) = f(x)$, then $F(x)$ is an **antiderivative** of $f(x)$: a function whose derivative is $f(x)$.`,
          t`$x^2$ is an antiderivative of $2x$, since $\frac{d}{dx}(x^2) = 2x$.`,
          t`So are $x^2 + 2$ and $x^2 - 2$: a constant has derivative $0$.`,
          t`Shifting a curve up or down keeps its slope at every $x$, so all of $x^2 + c$ work.`,
          t`We write $\int 2x\,dx = x^2 + c$; $c$ is the **constant of integration**.`,
          t`In $\int f(x)\,dx$, $f(x)$ is the **integrand**, and $dx$ says $x$ is the variable.`,
        ],
        figure: {
          alt: "The parabola y = x² appears, labelled c = 0. Then y = x² + 2 and y = x² − 2 appear, the same curve shifted up and down by 2, labelled c = 2 and c = −2.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 6] },
          elements: [
            { kind: "curve", points: [[-3, 9], [-2.925, 8.556], [-2.85, 8.123], [-2.775, 7.701], [-2.7, 7.29], [-2.625, 6.891], [-2.55, 6.502], [-2.475, 6.126], [-2.4, 5.76], [-2.325, 5.406], [-2.25, 5.062], [-2.175, 4.731], [-2.1, 4.41], [-2.025, 4.101], [-1.95, 3.802], [-1.875, 3.516], [-1.8, 3.24], [-1.725, 2.976], [-1.65, 2.722], [-1.575, 2.481], [-1.5, 2.25], [-1.425, 2.031], [-1.35, 1.823], [-1.275, 1.626], [-1.2, 1.44], [-1.125, 1.266], [-1.05, 1.103], [-0.975, 0.951], [-0.9, 0.81], [-0.825, 0.681], [-0.75, 0.562], [-0.675, 0.456], [-0.6, 0.36], [-0.525, 0.276], [-0.45, 0.203], [-0.375, 0.141], [-0.3, 0.09], [-0.225, 0.051], [-0.15, 0.022], [-0.075, 0.006], [0, 0], [0.075, 0.006], [0.15, 0.022], [0.225, 0.051], [0.3, 0.09], [0.375, 0.141], [0.45, 0.203], [0.525, 0.276], [0.6, 0.36], [0.675, 0.456], [0.75, 0.562], [0.825, 0.681], [0.9, 0.81], [0.975, 0.951], [1.05, 1.102], [1.125, 1.266], [1.2, 1.44], [1.275, 1.626], [1.35, 1.822], [1.425, 2.031], [1.5, 2.25], [1.575, 2.481], [1.65, 2.723], [1.725, 2.976], [1.8, 3.24], [1.875, 3.516], [1.95, 3.803], [2.025, 4.101], [2.1, 4.41], [2.175, 4.731], [2.25, 5.062], [2.325, 5.406], [2.4, 5.76], [2.475, 6.126], [2.55, 6.502], [2.625, 6.891], [2.7, 7.29], [2.775, 7.701], [2.85, 8.122], [2.925, 8.556], [3, 9]], tone: "muted", step: 2 },
            { kind: "label", at: [0.1, 0], label: "c = 0", labelAt: "se", tone: "muted", step: 2 },
            { kind: "curve", points: [[-3, 11], [-2.925, 10.556], [-2.85, 10.123], [-2.775, 9.701], [-2.7, 9.29], [-2.625, 8.891], [-2.55, 8.502], [-2.475, 8.126], [-2.4, 7.76], [-2.325, 7.406], [-2.25, 7.062], [-2.175, 6.731], [-2.1, 6.41], [-2.025, 6.101], [-1.95, 5.803], [-1.875, 5.516], [-1.8, 5.24], [-1.725, 4.976], [-1.65, 4.723], [-1.575, 4.481], [-1.5, 4.25], [-1.425, 4.031], [-1.35, 3.823], [-1.275, 3.626], [-1.2, 3.44], [-1.125, 3.266], [-1.05, 3.103], [-0.975, 2.951], [-0.9, 2.81], [-0.825, 2.681], [-0.75, 2.562], [-0.675, 2.456], [-0.6, 2.36], [-0.525, 2.276], [-0.45, 2.203], [-0.375, 2.141], [-0.3, 2.09], [-0.225, 2.051], [-0.15, 2.022], [-0.075, 2.006], [0, 2], [0.075, 2.006], [0.15, 2.022], [0.225, 2.051], [0.3, 2.09], [0.375, 2.141], [0.45, 2.203], [0.525, 2.276], [0.6, 2.36], [0.675, 2.456], [0.75, 2.562], [0.825, 2.681], [0.9, 2.81], [0.975, 2.951], [1.05, 3.102], [1.125, 3.266], [1.2, 3.44], [1.275, 3.626], [1.35, 3.822], [1.425, 4.031], [1.5, 4.25], [1.575, 4.481], [1.65, 4.723], [1.725, 4.976], [1.8, 5.24], [1.875, 5.516], [1.95, 5.803], [2.025, 6.101], [2.1, 6.41], [2.175, 6.731], [2.25, 7.062], [2.325, 7.406], [2.4, 7.76], [2.475, 8.126], [2.55, 8.502], [2.625, 8.891], [2.7, 9.29], [2.775, 9.701], [2.85, 10.122], [2.925, 10.556], [3, 11]], tone: "good", step: 3 },
            { kind: "label", at: [0.1, 2], label: "c = 2", labelAt: "se", tone: "good", step: 3 },
            { kind: "curve", points: [[-3, 7], [-2.925, 6.556], [-2.85, 6.123], [-2.775, 5.701], [-2.7, 5.29], [-2.625, 4.891], [-2.55, 4.502], [-2.475, 4.126], [-2.4, 3.76], [-2.325, 3.406], [-2.25, 3.062], [-2.175, 2.731], [-2.1, 2.41], [-2.025, 2.101], [-1.95, 1.802], [-1.875, 1.516], [-1.8, 1.24], [-1.725, 0.976], [-1.65, 0.722], [-1.575, 0.481], [-1.5, 0.25], [-1.425, 0.031], [-1.35, -0.177], [-1.275, -0.374], [-1.2, -0.56], [-1.125, -0.734], [-1.05, -0.897], [-0.975, -1.049], [-0.9, -1.19], [-0.825, -1.319], [-0.75, -1.438], [-0.675, -1.544], [-0.6, -1.64], [-0.525, -1.724], [-0.45, -1.797], [-0.375, -1.859], [-0.3, -1.91], [-0.225, -1.949], [-0.15, -1.978], [-0.075, -1.994], [0, -2], [0.075, -1.994], [0.15, -1.978], [0.225, -1.949], [0.3, -1.91], [0.375, -1.859], [0.45, -1.797], [0.525, -1.724], [0.6, -1.64], [0.675, -1.544], [0.75, -1.438], [0.825, -1.319], [0.9, -1.19], [0.975, -1.049], [1.05, -0.898], [1.125, -0.734], [1.2, -0.56], [1.275, -0.374], [1.35, -0.178], [1.425, 0.031], [1.5, 0.25], [1.575, 0.481], [1.65, 0.723], [1.725, 0.976], [1.8, 1.24], [1.875, 1.516], [1.95, 1.803], [2.025, 2.101], [2.1, 2.41], [2.175, 2.731], [2.25, 3.062], [2.325, 3.406], [2.4, 3.76], [2.475, 4.126], [2.55, 4.502], [2.625, 4.891], [2.7, 5.29], [2.775, 5.701], [2.85, 6.122], [2.925, 6.556], [3, 7]], tone: "good", step: 3 },
            { kind: "label", at: [0.1, -2], label: "c = −2", labelAt: "se", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Powers of x",
        points: [
          t`Read $\frac{d}{dx}x^{n+1} = (n+1)x^n$ backwards to get the **power rule**.`,
          t`$\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + c$ for $n \ne -1$: raise the power by $1$, divide by the new power.`,
          t`Roots and reciprocals are powers: $\sqrt{x} = x^{1/2}$ and $\dfrac{1}{x^4} = x^{-4}$.`,
          t`For a negative power, adding $1$ moves towards zero: $-4 + 1 = -3$.`,
          t`So $\int x^{-4}\,dx = \dfrac{x^{-3}}{-3} + c$ $= -\dfrac{1}{3x^3} + c$.`,
          t`For $n = -1$ the rule would divide by $0$; instead $\int \dfrac{1}{x}\,dx = \log|x| + c$.`,
        ],
      },
      {
        title: "Constants and exponentials",
        points: [
          t`A constant $k$ is $kx^0$, so $\int k\,dx = kx + c$.`,
          t`$e^x$ is its own derivative, so $\int e^x\,dx = e^x + c$.`,
          t`$\frac{d}{dx}a^x = a^x\log a$, so $\int a^x\,dx = \dfrac{a^x}{\log a} + c$, for $a > 0$, $a \ne 1$.`,
          t`In $a^x$ the variable is the exponent, not the base, so the power rule does not apply.`,
        ],
      },
      {
        title: "Trigonometric functions",
        points: [
          t`$\int \cos x\,dx = \sin x + c$.`,
          t`$\int \sin x\,dx = -\cos x + c$, because $\frac{d}{dx}\cos x = -\sin x$.`,
          t`$\int \sec^2 x\,dx = \tan x + c$.`,
          t`$\int \operatorname{cosec}^2 x\,dx = -\cot x + c$.`,
          t`$\int \sec x\tan x\,dx = \sec x + c$.`,
          t`$\int \operatorname{cosec} x\cot x\,dx = -\operatorname{cosec} x + c$: like $\sin x$ and $\operatorname{cosec}^2 x$, it keeps a minus.`,
        ],
      },
      {
        title: "Term by term",
        points: [
          t`$\int [f(x) \pm g(x)]\,dx$ $= \int f(x)\,dx \pm \int g(x)\,dx$.`,
          t`$\int k f(x)\,dx = k\int f(x)\,dx$, for a constant $k$.`,
          t`So split the integrand into terms, and integrate each with its formula.`,
          t`Write one $c$ at the end: the constants from all the terms add up to one constant.`,
          t`Check by differentiating your answer: each term must give back its term of the integrand.`,
        ],
      },
      {
        title: "Finding f from f′",
        points: [
          t`Given $f'(x)$, integrate it: $f(x) = F(x) + c$, a whole family of functions.`,
          t`A given value, such as $f(1) = 4$, picks the one curve that passes through $(1, 4)$.`,
          t`For example, $f'(x) = 2x + 1$ gives $f(x) = x^2 + x + c$.`,
          t`$f(1) = 4$ means $1 + 1 + c = 4$, so $c = 2$.`,
          t`So $f(x) = x^2 + x + 2$. The constant is $2$, not the given value $4$.`,
        ],
        figure: {
          alt: "Three parabolas y = x² + x + c, for c = −2, 0 and 2, each the same curve shifted up or down. Then the one with c = 2 lights up: it is the one through the point (1, 4).",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 6] },
          elements: [
            { kind: "curve", points: [[-3, 4], [-2.925, 3.631], [-2.85, 3.273], [-2.775, 2.926], [-2.7, 2.59], [-2.625, 2.266], [-2.55, 1.952], [-2.475, 1.651], [-2.4, 1.36], [-2.325, 1.081], [-2.25, 0.812], [-2.175, 0.556], [-2.1, 0.31], [-2.025, 0.076], [-1.95, -0.148], [-1.875, -0.359], [-1.8, -0.56], [-1.725, -0.749], [-1.65, -0.928], [-1.575, -1.094], [-1.5, -1.25], [-1.425, -1.394], [-1.35, -1.527], [-1.275, -1.649], [-1.2, -1.76], [-1.125, -1.859], [-1.05, -1.948], [-0.975, -2.024], [-0.9, -2.09], [-0.825, -2.144], [-0.75, -2.188], [-0.675, -2.219], [-0.6, -2.24], [-0.525, -2.249], [-0.45, -2.248], [-0.375, -2.234], [-0.3, -2.21], [-0.225, -2.174], [-0.15, -2.127], [-0.075, -2.069], [0, -2], [0.075, -1.919], [0.15, -1.828], [0.225, -1.724], [0.3, -1.61], [0.375, -1.484], [0.45, -1.347], [0.525, -1.199], [0.6, -1.04], [0.675, -0.869], [0.75, -0.688], [0.825, -0.494], [0.9, -0.29], [0.975, -0.074], [1.05, 0.152], [1.125, 0.391], [1.2, 0.64], [1.275, 0.901], [1.35, 1.172], [1.425, 1.456], [1.5, 1.75], [1.575, 2.056], [1.65, 2.373], [1.725, 2.701], [1.8, 3.04], [1.875, 3.391], [1.95, 3.753], [2.025, 4.126], [2.1, 4.51], [2.175, 4.906], [2.25, 5.312], [2.325, 5.731], [2.4, 6.16], [2.475, 6.601], [2.55, 7.052], [2.625, 7.516], [2.7, 7.99], [2.775, 8.476], [2.85, 8.972], [2.925, 9.481], [3, 10]], tone: "muted", step: 3 },
            { kind: "curve", points: [[-3, 6], [-2.925, 5.631], [-2.85, 5.273], [-2.775, 4.926], [-2.7, 4.59], [-2.625, 4.266], [-2.55, 3.952], [-2.475, 3.651], [-2.4, 3.36], [-2.325, 3.081], [-2.25, 2.812], [-2.175, 2.556], [-2.1, 2.31], [-2.025, 2.076], [-1.95, 1.852], [-1.875, 1.641], [-1.8, 1.44], [-1.725, 1.251], [-1.65, 1.072], [-1.575, 0.906], [-1.5, 0.75], [-1.425, 0.606], [-1.35, 0.473], [-1.275, 0.351], [-1.2, 0.24], [-1.125, 0.141], [-1.05, 0.052], [-0.975, -0.024], [-0.9, -0.09], [-0.825, -0.144], [-0.75, -0.188], [-0.675, -0.219], [-0.6, -0.24], [-0.525, -0.249], [-0.45, -0.248], [-0.375, -0.234], [-0.3, -0.21], [-0.225, -0.174], [-0.15, -0.127], [-0.075, -0.069], [0, 0], [0.075, 0.081], [0.15, 0.172], [0.225, 0.276], [0.3, 0.39], [0.375, 0.516], [0.45, 0.653], [0.525, 0.801], [0.6, 0.96], [0.675, 1.131], [0.75, 1.312], [0.825, 1.506], [0.9, 1.71], [0.975, 1.926], [1.05, 2.152], [1.125, 2.391], [1.2, 2.64], [1.275, 2.901], [1.35, 3.172], [1.425, 3.456], [1.5, 3.75], [1.575, 4.056], [1.65, 4.373], [1.725, 4.701], [1.8, 5.04], [1.875, 5.391], [1.95, 5.753], [2.025, 6.126], [2.1, 6.51], [2.175, 6.906], [2.25, 7.312], [2.325, 7.731], [2.4, 8.16], [2.475, 8.601], [2.55, 9.052], [2.625, 9.516], [2.7, 9.99], [2.775, 10.476], [2.85, 10.972], [2.925, 11.481], [3, 12]], tone: "muted", step: 3 },
            { kind: "curve", points: [[-3, 8], [-2.925, 7.631], [-2.85, 7.273], [-2.775, 6.926], [-2.7, 6.59], [-2.625, 6.266], [-2.55, 5.952], [-2.475, 5.651], [-2.4, 5.36], [-2.325, 5.081], [-2.25, 4.812], [-2.175, 4.556], [-2.1, 4.31], [-2.025, 4.076], [-1.95, 3.853], [-1.875, 3.641], [-1.8, 3.44], [-1.725, 3.251], [-1.65, 3.072], [-1.575, 2.906], [-1.5, 2.75], [-1.425, 2.606], [-1.35, 2.473], [-1.275, 2.351], [-1.2, 2.24], [-1.125, 2.141], [-1.05, 2.053], [-0.975, 1.976], [-0.9, 1.91], [-0.825, 1.856], [-0.75, 1.812], [-0.675, 1.781], [-0.6, 1.76], [-0.525, 1.751], [-0.45, 1.752], [-0.375, 1.766], [-0.3, 1.79], [-0.225, 1.826], [-0.15, 1.873], [-0.075, 1.931], [0, 2], [0.075, 2.081], [0.15, 2.172], [0.225, 2.276], [0.3, 2.39], [0.375, 2.516], [0.45, 2.653], [0.525, 2.801], [0.6, 2.96], [0.675, 3.131], [0.75, 3.312], [0.825, 3.506], [0.9, 3.71], [0.975, 3.926], [1.05, 4.152], [1.125, 4.391], [1.2, 4.64], [1.275, 4.901], [1.35, 5.172], [1.425, 5.456], [1.5, 5.75], [1.575, 6.056], [1.65, 6.373], [1.725, 6.701], [1.8, 7.04], [1.875, 7.391], [1.95, 7.753], [2.025, 8.126], [2.1, 8.51], [2.175, 8.906], [2.25, 9.312], [2.325, 9.731], [2.4, 10.16], [2.475, 10.601], [2.55, 11.052], [2.625, 11.516], [2.7, 11.99], [2.775, 12.476], [2.85, 12.972], [2.925, 13.481], [3, 14]], tone: "muted", step: 3 },
            { kind: "label", at: [-0.4, -2.25], label: "c = −2", labelAt: "se", tone: "muted", step: 3 },
            { kind: "label", at: [-0.4, -0.25], label: "c = 0", labelAt: "se", tone: "muted", step: 3 },
            { kind: "curve", points: [[-3, 8], [-2.925, 7.631], [-2.85, 7.273], [-2.775, 6.926], [-2.7, 6.59], [-2.625, 6.266], [-2.55, 5.952], [-2.475, 5.651], [-2.4, 5.36], [-2.325, 5.081], [-2.25, 4.812], [-2.175, 4.556], [-2.1, 4.31], [-2.025, 4.076], [-1.95, 3.853], [-1.875, 3.641], [-1.8, 3.44], [-1.725, 3.251], [-1.65, 3.072], [-1.575, 2.906], [-1.5, 2.75], [-1.425, 2.606], [-1.35, 2.473], [-1.275, 2.351], [-1.2, 2.24], [-1.125, 2.141], [-1.05, 2.053], [-0.975, 1.976], [-0.9, 1.91], [-0.825, 1.856], [-0.75, 1.812], [-0.675, 1.781], [-0.6, 1.76], [-0.525, 1.751], [-0.45, 1.752], [-0.375, 1.766], [-0.3, 1.79], [-0.225, 1.826], [-0.15, 1.873], [-0.075, 1.931], [0, 2], [0.075, 2.081], [0.15, 2.172], [0.225, 2.276], [0.3, 2.39], [0.375, 2.516], [0.45, 2.653], [0.525, 2.801], [0.6, 2.96], [0.675, 3.131], [0.75, 3.312], [0.825, 3.506], [0.9, 3.71], [0.975, 3.926], [1.05, 4.152], [1.125, 4.391], [1.2, 4.64], [1.275, 4.901], [1.35, 5.172], [1.425, 5.456], [1.5, 5.75], [1.575, 6.056], [1.65, 6.373], [1.725, 6.701], [1.8, 7.04], [1.875, 7.391], [1.95, 7.753], [2.025, 8.126], [2.1, 8.51], [2.175, 8.906], [2.25, 9.312], [2.325, 9.731], [2.4, 10.16], [2.475, 10.601], [2.55, 11.052], [2.625, 11.516], [2.7, 11.99], [2.775, 12.476], [2.85, 12.972], [2.925, 13.481], [3, 14]], tone: "good", step: 4 },
            { kind: "point", at: [1, 4], label: "(1, 4)", labelAt: "nw", tone: "good", step: 4 },
            { kind: "label", at: [-0.4, 1.75], label: "c = 2", labelAt: "se", tone: "good", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`For $x \ne 0$, find $\displaystyle\int \left(4x^3 - \frac{3}{x^2} + 2\cos x - 5\right) dx$.`,
      steps: [
        t`Write the reciprocal as a power: $\dfrac{3}{x^2} = 3x^{-2}$.`,
        t`Power rule: $\int 4x^3\,dx = x^4$, and $\int 3x^{-2}\,dx = \dfrac{3x^{-1}}{-1} = -\dfrac{3}{x}$.`,
        t`Standard formulae: $\int 2\cos x\,dx = 2\sin x$, and $\int 5\,dx = 5x$.`,
        t`Collect the terms, minding the signs, with one $c$: $x^4 + \dfrac{3}{x} + 2\sin x - 5x + c$.`,
        t`Check: the derivative is $4x^3 - \dfrac{3}{x^2} + 2\cos x - 5$, the integrand.`,
      ],
      answer: t`$x^4 + \dfrac{3}{x} + 2\sin x - 5x + c$`,
    },
    visualSpec: t`Drag $c$ to slide the curve $y = x^2 + x + c$ up and down: its slope at each $x$ never changes, and the point $(1, 4)$ lights up when the curve passes through it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Differentiates the integrand instead of integrating it",
      remediation: "Integrating runs differentiation backwards: you want a function whose derivative is the integrand. Check your answer by differentiating it: you must get the integrand back.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Steps a negative power the wrong way: integrates x^(-5) as x^(-6)/(-6)",
      remediation: t`The power rule adds $1$ to the power, and for a negative power that moves towards zero: $-5 + 1 = -4$. So $\int x^{-5}\,dx = \dfrac{x^{-4}}{-4} + c$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C01-M3",
      mistake: "Uses the power rule on a^x, giving a^(x+1)/(x+1)",
      remediation: t`In $a^x$ the variable is the exponent, not the base, so the power rule does not apply. Use $\int a^x\,dx = \dfrac{a^x}{\log a} + c$.`,
      fallback: { kind: "ext", topic: "derivatives of exponential functions" },
    },
    {
      id: "C01-M4",
      mistake: "Drops the minus sign: integrates sin x as cos x (and cosec^2 x as cot x, cosec x cot x as cosec x)",
      remediation: t`Since $\frac{d}{dx}\cos x = -\sin x$, $\int \sin x\,dx = -\cos x + c$. Likewise $\operatorname{cosec}^2 x$ and $\operatorname{cosec} x\cot x$ integrate with a minus; check the sign by differentiating.`,
      fallback: { kind: "ext", topic: "derivatives of trigonometric functions" },
    },
    {
      id: "C01-M5",
      mistake: "Takes the given value f(a) as the constant c",
      remediation: t`Put $x = a$ into $F(x) + c$, set it equal to the given value, and solve for $c$. The constant equals the given value only when $F(a) = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Raises the power but does not divide by the new power",
      remediation: t`The power rule has two moves: raise the power by $1$, then divide by the new power. $\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + c$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M2 applies only to an integrand with a negative or fractional negative power other than $x^{-1}$; C01-M3 only with an $a^x$ term; C01-M4 only with a $\sin x$, $\operatorname{cosec}^2 x$ or $\operatorname{cosec} x\cot x$ term; C01-M6 only with a power other than $x^0$ and $x^{-1}$.`,
    t`C01-M5 (find-f items only) gives the key when $F(a) = 0$, e.g. $f'(x) = 3x^2$ with $f(0)$ given: diagnose it with a point where $F(a) \ne 0$.`,
    "Option values are antiderivatives: a distractor that differs from the key only by a constant would also be right. Every distractor here was checked to have a derivative different from the integrand.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 I (iv)" },
      stem: t`For $x > 0$, $\displaystyle\int \left(2x^3 - 5x + \frac{3}{x} + \frac{4}{x^5}\right) dx =$`,
      verify: { kind: "value", inputs: { f: "2*x**3 - 5*x + 3/x + 4/x**5" } },
      options: [
        { key: "A", text: t`$\dfrac{x^4}{2} - \dfrac{5x^2}{2} + 3\log x - \dfrac{1}{x^4} + c$`, correct: true, value: "c + x**4/2 - 5*x**2/2 + 3*log(x) - 1/x**4" },
        { key: "B", text: t`$6x^2 - 5 - \dfrac{3}{x^2} - \dfrac{20}{x^6} + c$`, correct: false, misconceptionId: "C01-M1", value: "c + 6*x**2 - 5 - 3/x**2 - 20/x**6" },
        { key: "C", text: t`$\dfrac{x^4}{2} - \dfrac{5x^2}{2} + 3\log x - \dfrac{2}{3x^6} + c$`, correct: false, misconceptionId: "C01-M2", value: "c + x**4/2 - 5*x**2/2 + 3*log(x) - 2/(3*x**6)" },
        { key: "D", text: t`$2x^4 - 5x^2 + 3\log x + \dfrac{4}{x^4} + c$`, correct: false, misconceptionId: "C01-M6", value: "c + 2*x**4 - 5*x**2 + 3*log(x) + 4/x**4" },
      ],
      solution: {
        steps: [
          t`Write the reciprocal as a power: $\dfrac{4}{x^5} = 4x^{-5}$. For $x > 0$, $\int \dfrac{3}{x}\,dx = 3\log x$.`,
          t`Power rule: $\int 2x^3\,dx = \dfrac{x^4}{2}$ and $\int 5x\,dx = \dfrac{5x^2}{2}$.`,
          t`$-5 + 1 = -4$, so $\int 4x^{-5}\,dx = \dfrac{4x^{-4}}{-4} = -\dfrac{1}{x^4}$.`,
          t`The integral is $\dfrac{x^4}{2} - \dfrac{5x^2}{2}$ $+ 3\log x - \dfrac{1}{x^4} + c$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/3.1 SolvedEx.1" },
      stem: t`$\displaystyle\int (x^3 + 3^x)\, dx =$`,
      verify: { kind: "value", inputs: { f: "x**3 + 3**x" } },
      options: [
        { key: "A", text: t`$\dfrac{x^4}{4} + \dfrac{3^x}{\log 3} + c$`, correct: true, value: "3**x/log(3) + c + x**4/4" },
        { key: "B", text: t`$3x^2 + 3^x \log 3 + c$`, correct: false, misconceptionId: "C01-M1", value: "3**x*log(3) + c + 3*x**2" },
        { key: "C", text: t`$\dfrac{x^4}{4} + \dfrac{3^{x+1}}{x+1} + c$`, correct: false, misconceptionId: "C01-M3", value: "(3**(x + 1) + (4*c + x**4)*(x + 1)/4)/(x + 1)" },
        { key: "D", text: t`$x^4 + \dfrac{3^x}{\log 3} + c$`, correct: false, misconceptionId: "C01-M6", value: "3**x/log(3) + c + x**4" },
      ],
      solution: {
        steps: [
          t`Power rule: $\int x^3\,dx = \dfrac{x^4}{4}$.`,
          t`In $3^x$ the variable is the exponent, so use $\int a^x\,dx = \dfrac{a^x}{\log a}$: $\int 3^x\,dx = \dfrac{3^x}{\log 3}$.`,
          t`The integral is $\dfrac{x^4}{4} + \dfrac{3^x}{\log 3} + c$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/3.1 SolvedEx.2" },
      stem: t`For $x > 0$, $\displaystyle\int \left(\sin x + \frac{1}{x} + \frac{1}{\sqrt[3]{x}}\right) dx =$`,
      verify: { kind: "value", inputs: { f: "sin(x) + 1/x + x**(-1/3)" } },
      options: [
        { key: "A", text: t`$-\cos x + \log x - \dfrac{3}{4x^{4/3}} + c$`, correct: false, misconceptionId: "C01-M2", value: "c + log(x) - cos(x) - 3/(4*x**(4/3))" },
        { key: "B", text: t`$\cos x + \log x + \dfrac{3}{2}x^{2/3} + c$`, correct: false, misconceptionId: "C01-M4", value: "c + 3*x**(2/3)/2 + log(x) + cos(x)" },
        { key: "C", text: t`$-\cos x + \log x + \dfrac{3}{2}x^{2/3} + c$`, correct: true, value: "c + 3*x**(2/3)/2 + log(x) - cos(x)" },
        { key: "D", text: t`$\cos x - \dfrac{1}{x^2} - \dfrac{1}{3x^{4/3}} + c$`, correct: false, misconceptionId: "C01-M1", value: "c + cos(x) - 1/x**2 - 1/(3*x**(4/3))" },
      ],
      solution: {
        steps: [
          t`$\int \sin x\,dx = -\cos x$, since $\frac{d}{dx}(-\cos x) = \sin x$. For $x > 0$, $\int \dfrac{1}{x}\,dx = \log x$.`,
          t`$\dfrac{1}{\sqrt[3]{x}} = x^{-1/3}$, and $-\dfrac{1}{3} + 1 = \dfrac{2}{3}$, so $\int x^{-1/3}\,dx = \dfrac{3}{2}x^{2/3}$.`,
          t`The integral is $-\cos x + \log x + \dfrac{3}{2}x^{2/3} + c$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 I (iii)" },
      stem: t`For $x > 0$, $\displaystyle\int \left(3\sec^2 x - \frac{4}{x} + \frac{1}{x\sqrt{x}} - 7\right) dx =$`,
      verify: { kind: "value", inputs: { f: "3*sec(x)**2 - 4/x + 1/(x*sqrt(x)) - 7" } },
      options: [
        { key: "A", text: t`$3\tan x - 4\log x - \dfrac{2}{\sqrt{x}} - 7x + c$`, correct: true, value: "c - 7*x - 4*log(x) + 3*tan(x) - 2/sqrt(x)" },
        { key: "B", text: t`$6\sec^2 x \tan x + \dfrac{4}{x^2} - \dfrac{3}{2x^{5/2}} + c$`, correct: false, misconceptionId: "C01-M1", value: "c + 6*tan(x)*sec(x)**2 + 4/x**2 - 3/(2*x**(5/2))" },
        { key: "C", text: t`$3\tan x - 4\log x - \dfrac{2}{5x^{5/2}} - 7x + c$`, correct: false, misconceptionId: "C01-M2", value: "c - 7*x - 4*log(x) + 3*tan(x) - 2/(5*x**(5/2))" },
        { key: "D", text: t`$3\tan x - 4\log x + \dfrac{1}{\sqrt{x}} - 7x + c$`, correct: false, misconceptionId: "C01-M6", value: "c - 7*x - 4*log(x) + 3*tan(x) + 1/sqrt(x)" },
      ],
      solution: {
        steps: [
          t`$\int 3\sec^2 x\,dx = 3\tan x$; for $x > 0$, $\int \dfrac{4}{x}\,dx = 4\log x$; and $\int 7\,dx = 7x$.`,
          t`$\dfrac{1}{x\sqrt{x}} = x^{-3/2}$, and $-\dfrac{3}{2} + 1 = -\dfrac{1}{2}$, so $\int x^{-3/2}\,dx = -2x^{-1/2}$ $= -\dfrac{2}{\sqrt{x}}$.`,
          t`The integral is $3\tan x - 4\log x$ $- \dfrac{2}{\sqrt{x}} - 7x + c$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 IV" },
      stem: t`If $f'(x) = x - \dfrac{3}{x^3}$ and $f(1) = \dfrac{11}{2}$, then $f(x) =$`,
      verify: { kind: "value", inputs: { fp: "x - 3/x**3", a: "1", fa: "11/2" } },
      options: [
        { key: "A", text: t`$\dfrac{x^2}{2} + \dfrac{3}{2x^2} + \dfrac{7}{2}$`, correct: true, value: "(x**2*(x**2 + 7) + 3)/(2*x**2)" },
        { key: "B", text: t`$\dfrac{x^2}{2} + \dfrac{3}{4x^4} + \dfrac{17}{4}$`, correct: false, misconceptionId: "C01-M2", value: "x**2/2 + 17/4 + 3/(4*x**4)" },
        { key: "C", text: t`$\dfrac{x^2}{2} + \dfrac{3}{2x^2} + \dfrac{11}{2}$`, correct: false, misconceptionId: "C01-M5", value: "(x**2*(x**2 + 11) + 3)/(2*x**2)" },
        { key: "D", text: t`$x^2 - \dfrac{3}{x^2} + \dfrac{15}{2}$`, correct: false, misconceptionId: "C01-M6", value: "x**2 + 15/2 - 3/x**2" },
      ],
      solution: {
        steps: [
          t`$f(x) = \int (x - 3x^{-3})\,dx$ $= \dfrac{x^2}{2} - \dfrac{3x^{-2}}{-2} + c$ $= \dfrac{x^2}{2} + \dfrac{3}{2x^2} + c$.`,
          t`Put $x = 1$: $f(1) = \dfrac{1}{2} + \dfrac{3}{2} + c = 2 + c$. This equals $\dfrac{11}{2}$, so $c = \dfrac{7}{2}$.`,
          t`So $f(x) = \dfrac{x^2}{2} + \dfrac{3}{2x^2} + \dfrac{7}{2}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`If $f'(x) = 2\sin x + 3x^2$ and $f(0) = 5$, then $f(x) =$`,
      verify: { kind: "value", inputs: { fp: "2*sin(x) + 3*x**2", a: "0", fa: "5" } },
      options: [
        { key: "A", text: t`$x^3 + 2\cos x + 3$`, correct: false, misconceptionId: "C01-M4", value: "x**3 + 2*cos(x) + 3" },
        { key: "B", text: t`$x^3 - 2\cos x + 5$`, correct: false, misconceptionId: "C01-M5", value: "x**3 - 2*cos(x) + 5" },
        { key: "C", text: t`$x^3 - 2\cos x + 7$`, correct: true, value: "x**3 - 2*cos(x) + 7" },
        { key: "D", text: t`$6x + 2\cos x + 3$`, correct: false, misconceptionId: "C01-M1", value: "6*x + 2*cos(x) + 3" },
      ],
      solution: {
        steps: [
          t`$f(x) = \int (2\sin x + 3x^2)\,dx$ $= -2\cos x + x^3 + c$.`,
          t`Put $x = 0$, with $\cos 0 = 1$: $f(0) = -2 + c$. This equals $5$, so $c = 7$.`,
          t`So $f(x) = x^3 - 2\cos x + 7$.`,
        ],
      },
    },
  ],
};
