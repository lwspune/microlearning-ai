import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Noise-cancelling headphones add a second sound to the noise you hear, yet you hear less. How can adding a sound make it quieter?`,
    reveal: t`Displacements add. The headphones make a wave of the same amplitude in antiphase with the noise, so each crest meets a trough and the two cancel: destructive interference.`,
  },
  explanation: {
    intuition: [
      t`Two waves can pass through the same point of a medium at the same time.`,
      t`There each particle's displacement is the sum of the two displacements.`,
      t`Crest meeting crest gives a bigger wave; crest meeting trough gives a smaller one.`,
      t`This adding up of waves is called **interference**.`,
      t`Which happens depends on the **phase difference** $\varphi$ between the waves at that point.`,
      t`After crossing, each wave travels on unchanged.`,
    ],
    formal: [
      {
        title: "The principle of superposition",
        points: [
          t`When two or more waves pass through a point, the resultant displacement is the vector sum of their displacements.`,
          t`For waves along one line this is $y = y_1 + y_2$.`,
          t`Each wave moves on as if the other were not there.`,
          t`**Coherent** sources keep a constant phase difference, so the pattern stays steady.`,
        ],
      },
      {
        title: "The resultant amplitude",
        points: [
          t`Take two waves of the same frequency: $y_1 = A_1\sin\omega t$ and $y_2 = A_2\sin\left(\omega t + \varphi\right)$.`,
          t`Their sum is again a wave of that frequency: $y = A\sin\left(\omega t + \theta\right)$.`,
          t`Its amplitude is $A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\varphi}$.`,
          t`Its phase is given by $\tan\theta = \dfrac{A_2\sin\varphi}{A_1 + A_2\cos\varphi}$.`,
          t`The plus sign before $2A_1A_2\cos\varphi$ is the parallelogram law of vector addition.`,
        ],
      },
      {
        title: "Constructive interference",
        points: [
          t`When $\varphi = 0, 2\pi, 4\pi, \ldots = 2p\pi$, the waves are in phase: crest on crest.`,
          t`Then $\cos\varphi = 1$ and $A = A_1 + A_2$, the largest possible amplitude.`,
        ],
        figure: {
          alt: "Constructive interference. Step 1: wave 1, amplitude A₁, and dashed, wave 2, amplitude A₂, in phase with it: crest on crest. Step 2: their sum, a wave of amplitude A₁ + A₂, marked on the right.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 11], y: [-2.2, 2.2] },
          elements: [
            { kind: "segment", from: [0, 0], to: [8, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.083, 0.131], [0.167, 0.259], [0.25, 0.383], [0.333, 0.5], [0.417, 0.609], [0.5, 0.707], [0.583, 0.793], [0.667, 0.866], [0.75, 0.924], [0.833, 0.966], [0.917, 0.991], [1, 1], [1.083, 0.991], [1.167, 0.966], [1.25, 0.924], [1.333, 0.866], [1.417, 0.793], [1.5, 0.707], [1.583, 0.609], [1.667, 0.5], [1.75, 0.383], [1.833, 0.259], [1.917, 0.131], [2, 0], [2.083, -0.131], [2.167, -0.259], [2.25, -0.383], [2.333, -0.5], [2.417, -0.609], [2.5, -0.707], [2.583, -0.793], [2.667, -0.866], [2.75, -0.924], [2.833, -0.966], [2.917, -0.991], [3, -1], [3.083, -0.991], [3.167, -0.966], [3.25, -0.924], [3.333, -0.866], [3.417, -0.793], [3.5, -0.707], [3.583, -0.609], [3.667, -0.5], [3.75, -0.383], [3.833, -0.259], [3.917, -0.131], [4, 0], [4.083, 0.131], [4.167, 0.259], [4.25, 0.383], [4.333, 0.5], [4.417, 0.609], [4.5, 0.707], [4.583, 0.793], [4.667, 0.866], [4.75, 0.924], [4.833, 0.966], [4.917, 0.991], [5, 1], [5.083, 0.991], [5.167, 0.966], [5.25, 0.924], [5.333, 0.866], [5.417, 0.793], [5.5, 0.707], [5.583, 0.609], [5.667, 0.5], [5.75, 0.383], [5.833, 0.259], [5.917, 0.131], [6, 0], [6.083, -0.131], [6.167, -0.259], [6.25, -0.383], [6.333, -0.5], [6.417, -0.609], [6.5, -0.707], [6.583, -0.793], [6.667, -0.866], [6.75, -0.924], [6.833, -0.966], [6.917, -0.991], [7, -1], [7.083, -0.991], [7.167, -0.966], [7.25, -0.924], [7.333, -0.866], [7.417, -0.793], [7.5, -0.707], [7.583, -0.609], [7.667, -0.5], [7.75, -0.383], [7.833, -0.259], [7.917, -0.131], [8, 0]], tone: "muted", step: 1 },
            { kind: "curve", points: [[0, 0], [0.083, 0.078], [0.167, 0.155], [0.25, 0.23], [0.333, 0.3], [0.417, 0.365], [0.5, 0.424], [0.583, 0.476], [0.667, 0.52], [0.75, 0.554], [0.833, 0.58], [0.917, 0.595], [1, 0.6], [1.083, 0.595], [1.167, 0.58], [1.25, 0.554], [1.333, 0.52], [1.417, 0.476], [1.5, 0.424], [1.583, 0.365], [1.667, 0.3], [1.75, 0.23], [1.833, 0.155], [1.917, 0.078], [2, 0], [2.083, -0.078], [2.167, -0.155], [2.25, -0.23], [2.333, -0.3], [2.417, -0.365], [2.5, -0.424], [2.583, -0.476], [2.667, -0.52], [2.75, -0.554], [2.833, -0.58], [2.917, -0.595], [3, -0.6], [3.083, -0.595], [3.167, -0.58], [3.25, -0.554], [3.333, -0.52], [3.417, -0.476], [3.5, -0.424], [3.583, -0.365], [3.667, -0.3], [3.75, -0.23], [3.833, -0.155], [3.917, -0.078], [4, 0], [4.083, 0.078], [4.167, 0.155], [4.25, 0.23], [4.333, 0.3], [4.417, 0.365], [4.5, 0.424], [4.583, 0.476], [4.667, 0.52], [4.75, 0.554], [4.833, 0.58], [4.917, 0.595], [5, 0.6], [5.083, 0.595], [5.167, 0.58], [5.25, 0.554], [5.333, 0.52], [5.417, 0.476], [5.5, 0.424], [5.583, 0.365], [5.667, 0.3], [5.75, 0.23], [5.833, 0.155], [5.917, 0.078], [6, 0], [6.083, -0.078], [6.167, -0.155], [6.25, -0.23], [6.333, -0.3], [6.417, -0.365], [6.5, -0.424], [6.583, -0.476], [6.667, -0.52], [6.75, -0.554], [6.833, -0.58], [6.917, -0.595], [7, -0.6], [7.083, -0.595], [7.167, -0.58], [7.25, -0.554], [7.333, -0.52], [7.417, -0.476], [7.5, -0.424], [7.583, -0.365], [7.667, -0.3], [7.75, -0.23], [7.833, -0.155], [7.917, -0.078], [8, 0]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [8.6, 0], to: [8.6, 1], label: "A₁", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [9.9, 0], to: [9.9, 0.6], label: "A₂", labelAt: "e", tone: "muted", step: 1 },
            { kind: "curve", points: [[0, 0], [0.083, 0.209], [0.167, 0.414], [0.25, 0.612], [0.333, 0.8], [0.417, 0.974], [0.5, 1.131], [0.583, 1.269], [0.667, 1.386], [0.75, 1.478], [0.833, 1.545], [0.917, 1.586], [1, 1.6], [1.083, 1.586], [1.167, 1.545], [1.25, 1.478], [1.333, 1.386], [1.417, 1.269], [1.5, 1.131], [1.583, 0.974], [1.667, 0.8], [1.75, 0.612], [1.833, 0.414], [1.917, 0.209], [2, 0], [2.083, -0.209], [2.167, -0.414], [2.25, -0.612], [2.333, -0.8], [2.417, -0.974], [2.5, -1.131], [2.583, -1.269], [2.667, -1.386], [2.75, -1.478], [2.833, -1.545], [2.917, -1.586], [3, -1.6], [3.083, -1.586], [3.167, -1.545], [3.25, -1.478], [3.333, -1.386], [3.417, -1.269], [3.5, -1.131], [3.583, -0.974], [3.667, -0.8], [3.75, -0.612], [3.833, -0.414], [3.917, -0.209], [4, 0], [4.083, 0.209], [4.167, 0.414], [4.25, 0.612], [4.333, 0.8], [4.417, 0.974], [4.5, 1.131], [4.583, 1.269], [4.667, 1.386], [4.75, 1.478], [4.833, 1.545], [4.917, 1.586], [5, 1.6], [5.083, 1.586], [5.167, 1.545], [5.25, 1.478], [5.333, 1.386], [5.417, 1.269], [5.5, 1.131], [5.583, 0.974], [5.667, 0.8], [5.75, 0.612], [5.833, 0.414], [5.917, 0.209], [6, 0], [6.083, -0.209], [6.167, -0.414], [6.25, -0.612], [6.333, -0.8], [6.417, -0.974], [6.5, -1.131], [6.583, -1.269], [6.667, -1.386], [6.75, -1.478], [6.833, -1.545], [6.917, -1.586], [7, -1.6], [7.083, -1.586], [7.167, -1.545], [7.25, -1.478], [7.333, -1.386], [7.417, -1.269], [7.5, -1.131], [7.583, -0.974], [7.667, -0.8], [7.75, -0.612], [7.833, -0.414], [7.917, -0.209], [8, 0]], tone: "good", step: 2 },
            { kind: "segment", from: [8.6, -1.6], to: [8.6, 0], label: "A₁ + A₂", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Destructive interference",
        points: [
          t`When $\varphi = \pi, 3\pi, \ldots = (2p + 1)\pi$, the waves are in antiphase: crest on trough.`,
          t`Then $\cos\varphi = -1$ and $A = \left|A_1 - A_2\right|$, the smallest possible amplitude.`,
          t`The waves cancel completely only when $A_1 = A_2$.`,
        ],
        figure: {
          alt: "Destructive interference. Step 1: wave 1, amplitude A₁, and dashed, wave 2, amplitude A₂, in antiphase: crest on trough. Step 2: their sum, a small wave of amplitude A₁ − A₂, marked on the right.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 11], y: [-2.2, 2.2] },
          elements: [
            { kind: "segment", from: [0, 0], to: [8, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.083, 0.131], [0.167, 0.259], [0.25, 0.383], [0.333, 0.5], [0.417, 0.609], [0.5, 0.707], [0.583, 0.793], [0.667, 0.866], [0.75, 0.924], [0.833, 0.966], [0.917, 0.991], [1, 1], [1.083, 0.991], [1.167, 0.966], [1.25, 0.924], [1.333, 0.866], [1.417, 0.793], [1.5, 0.707], [1.583, 0.609], [1.667, 0.5], [1.75, 0.383], [1.833, 0.259], [1.917, 0.131], [2, 0], [2.083, -0.131], [2.167, -0.259], [2.25, -0.383], [2.333, -0.5], [2.417, -0.609], [2.5, -0.707], [2.583, -0.793], [2.667, -0.866], [2.75, -0.924], [2.833, -0.966], [2.917, -0.991], [3, -1], [3.083, -0.991], [3.167, -0.966], [3.25, -0.924], [3.333, -0.866], [3.417, -0.793], [3.5, -0.707], [3.583, -0.609], [3.667, -0.5], [3.75, -0.383], [3.833, -0.259], [3.917, -0.131], [4, 0], [4.083, 0.131], [4.167, 0.259], [4.25, 0.383], [4.333, 0.5], [4.417, 0.609], [4.5, 0.707], [4.583, 0.793], [4.667, 0.866], [4.75, 0.924], [4.833, 0.966], [4.917, 0.991], [5, 1], [5.083, 0.991], [5.167, 0.966], [5.25, 0.924], [5.333, 0.866], [5.417, 0.793], [5.5, 0.707], [5.583, 0.609], [5.667, 0.5], [5.75, 0.383], [5.833, 0.259], [5.917, 0.131], [6, 0], [6.083, -0.131], [6.167, -0.259], [6.25, -0.383], [6.333, -0.5], [6.417, -0.609], [6.5, -0.707], [6.583, -0.793], [6.667, -0.866], [6.75, -0.924], [6.833, -0.966], [6.917, -0.991], [7, -1], [7.083, -0.991], [7.167, -0.966], [7.25, -0.924], [7.333, -0.866], [7.417, -0.793], [7.5, -0.707], [7.583, -0.609], [7.667, -0.5], [7.75, -0.383], [7.833, -0.259], [7.917, -0.131], [8, 0]], tone: "muted", step: 1 },
            { kind: "curve", points: [[0, 0], [0.083, -0.078], [0.167, -0.155], [0.25, -0.23], [0.333, -0.3], [0.417, -0.365], [0.5, -0.424], [0.583, -0.476], [0.667, -0.52], [0.75, -0.554], [0.833, -0.58], [0.917, -0.595], [1, -0.6], [1.083, -0.595], [1.167, -0.58], [1.25, -0.554], [1.333, -0.52], [1.417, -0.476], [1.5, -0.424], [1.583, -0.365], [1.667, -0.3], [1.75, -0.23], [1.833, -0.155], [1.917, -0.078], [2, 0], [2.083, 0.078], [2.167, 0.155], [2.25, 0.23], [2.333, 0.3], [2.417, 0.365], [2.5, 0.424], [2.583, 0.476], [2.667, 0.52], [2.75, 0.554], [2.833, 0.58], [2.917, 0.595], [3, 0.6], [3.083, 0.595], [3.167, 0.58], [3.25, 0.554], [3.333, 0.52], [3.417, 0.476], [3.5, 0.424], [3.583, 0.365], [3.667, 0.3], [3.75, 0.23], [3.833, 0.155], [3.917, 0.078], [4, 0], [4.083, -0.078], [4.167, -0.155], [4.25, -0.23], [4.333, -0.3], [4.417, -0.365], [4.5, -0.424], [4.583, -0.476], [4.667, -0.52], [4.75, -0.554], [4.833, -0.58], [4.917, -0.595], [5, -0.6], [5.083, -0.595], [5.167, -0.58], [5.25, -0.554], [5.333, -0.52], [5.417, -0.476], [5.5, -0.424], [5.583, -0.365], [5.667, -0.3], [5.75, -0.23], [5.833, -0.155], [5.917, -0.078], [6, 0], [6.083, 0.078], [6.167, 0.155], [6.25, 0.23], [6.333, 0.3], [6.417, 0.365], [6.5, 0.424], [6.583, 0.476], [6.667, 0.52], [6.75, 0.554], [6.833, 0.58], [6.917, 0.595], [7, 0.6], [7.083, 0.595], [7.167, 0.58], [7.25, 0.554], [7.333, 0.52], [7.417, 0.476], [7.5, 0.424], [7.583, 0.365], [7.667, 0.3], [7.75, 0.23], [7.833, 0.155], [7.917, 0.078], [8, 0]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [8.6, 0], to: [8.6, 1], label: "A₁", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [9.9, 0], to: [9.9, 0.6], label: "A₂", labelAt: "e", tone: "muted", step: 1 },
            { kind: "curve", points: [[0, 0], [0.083, 0.052], [0.167, 0.104], [0.25, 0.153], [0.333, 0.2], [0.417, 0.244], [0.5, 0.283], [0.583, 0.317], [0.667, 0.346], [0.75, 0.37], [0.833, 0.386], [0.917, 0.397], [1, 0.4], [1.083, 0.397], [1.167, 0.386], [1.25, 0.37], [1.333, 0.346], [1.417, 0.317], [1.5, 0.283], [1.583, 0.244], [1.667, 0.2], [1.75, 0.153], [1.833, 0.104], [1.917, 0.052], [2, 0], [2.083, -0.052], [2.167, -0.104], [2.25, -0.153], [2.333, -0.2], [2.417, -0.244], [2.5, -0.283], [2.583, -0.317], [2.667, -0.346], [2.75, -0.37], [2.833, -0.386], [2.917, -0.397], [3, -0.4], [3.083, -0.397], [3.167, -0.386], [3.25, -0.37], [3.333, -0.346], [3.417, -0.317], [3.5, -0.283], [3.583, -0.244], [3.667, -0.2], [3.75, -0.153], [3.833, -0.104], [3.917, -0.052], [4, 0], [4.083, 0.052], [4.167, 0.104], [4.25, 0.153], [4.333, 0.2], [4.417, 0.244], [4.5, 0.283], [4.583, 0.317], [4.667, 0.346], [4.75, 0.37], [4.833, 0.386], [4.917, 0.397], [5, 0.4], [5.083, 0.397], [5.167, 0.386], [5.25, 0.37], [5.333, 0.346], [5.417, 0.317], [5.5, 0.283], [5.583, 0.244], [5.667, 0.2], [5.75, 0.153], [5.833, 0.104], [5.917, 0.052], [6, 0], [6.083, -0.052], [6.167, -0.104], [6.25, -0.153], [6.333, -0.2], [6.417, -0.244], [6.5, -0.283], [6.583, -0.317], [6.667, -0.346], [6.75, -0.37], [6.833, -0.386], [6.917, -0.397], [7, -0.4], [7.083, -0.397], [7.167, -0.386], [7.25, -0.37], [7.333, -0.346], [7.417, -0.317], [7.5, -0.283], [7.583, -0.244], [7.667, -0.2], [7.75, -0.153], [7.833, -0.104], [7.917, -0.052], [8, 0]], tone: "good", step: 2 },
            { kind: "segment", from: [8.6, -1.4], to: [8.6, -1], label: "A₁ − A₂", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Intensity",
        points: [
          t`The **intensity** $I$ of a wave is the energy it carries per second per unit area; $I \propto A^2$.`,
          t`So $I_{\max} \propto \left(A_1 + A_2\right)^2$ and $I_{\min} \propto \left(A_1 - A_2\right)^2$.`,
          t`Then $\dfrac{I_{\max}}{I_{\min}} = \dfrac{\left(A_1 + A_2\right)^2}{\left(A_1 - A_2\right)^2}$.`,
          t`Given intensities $I_1$ and $I_2$, first find $\dfrac{A_1}{A_2} = \sqrt{\dfrac{I_1}{I_2}}$.`,
        ],
      },
      {
        title: "Path difference and phase",
        points: [
          t`The **path difference** $\Delta$ at a point is the difference of its distances from the two sources.`,
          t`It gives a phase difference $\dfrac{2\pi}{\lambda}\Delta$, with $\lambda = \dfrac{v}{n}$.`,
          t`Sources in phase: maximum where $\Delta = p\lambda$, minimum where $\Delta = (2p + 1)\dfrac{\lambda}{2}$.`,
          t`Sources $\pi$ out of phase: add $\pi$ to the phase difference, so the two conditions swap.`,
          t`Between two sources, a point $x$ from the midpoint has path difference $2x$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two waves of the same frequency have amplitudes $12\ \mathrm{mm}$ and $5\ \mathrm{mm}$ and a phase difference of $\dfrac{\pi}{2}$. Find the resultant amplitude, and $\dfrac{I_{\max}}{I_{\min}}$ when they interfere.`,
      steps: [
        t`$A^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\varphi$, with $\cos\dfrac{\pi}{2} = 0$.`,
        t`$A^2 = 144 + 25 + 0 = 169$, so $A = 13\ \mathrm{mm}$.`,
        t`$I_{\max} \propto \left(12 + 5\right)^2 = 289$ and $I_{\min} \propto \left(12 - 5\right)^2 = 49$.`,
        t`$\dfrac{I_{\max}}{I_{\min}} = \dfrac{289}{49} = 5.90$.`,
      ],
      answer: t`$A = 13\ \mathrm{mm}$ and $\dfrac{I_{\max}}{I_{\min}} = 5.90$`,
    },
    visualSpec: t`Drag a slider for the phase difference and watch two waves and their sum change from crest-on-crest to crest-on-trough.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Adds the amplitudes whatever the phase difference.",
      remediation: t`Amplitudes add straight only for waves in phase. In general $A^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\varphi$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: "Adds the intensities (squares of the amplitudes) instead of the displacements.",
      remediation: t`Superposition adds displacements, so the cross term $2A_1A_2\cos\varphi$ stays. Intensities add only for incoherent sources.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Uses the triangle's cosine rule, with a minus sign before $2A_1A_2\cos\varphi$.`,
      remediation: t`The resultant is the diagonal of the parallelogram of $A_1$ and $A_2$: $A^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\varphi$.`,
      fallback: { kind: "ext", topic: "addition of vectors (Std XI Physics)" },
    },
    {
      id: "C04-M4",
      mistake: "Takes destructive interference to cancel the waves completely.",
      remediation: t`In antiphase the amplitude is $\left|A_1 - A_2\right|$; it is zero only when $A_1 = A_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Takes the intensity as proportional to the amplitude.",
      remediation: t`Intensity goes as the square of the amplitude: $I \propto A^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Takes the intensity ratio of the two waves as their amplitude ratio.",
      remediation: t`$I \propto A^2$, so $\dfrac{A_1}{A_2} = \sqrt{\dfrac{I_1}{I_2}}$; a $16 : 1$ intensity ratio is a $4 : 1$ amplitude ratio.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: t`Takes the phase difference as $\dfrac{\Delta}{\lambda}$, leaving out $2\pi$.`,
      remediation: t`One wavelength of path is one whole cycle, $2\pi$ rad: $\Delta\varphi = \dfrac{2\pi}{\lambda}\Delta$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M8",
      mistake: "Ignores the sources' own phase difference.",
      remediation: t`The phase difference at a point is the sources' own phase difference plus $\dfrac{2\pi}{\lambda}\Delta$. For sources $\pi$ out of phase the midpoint is a minimum.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M9",
      mistake: t`Writes the phase difference as $\dfrac{2\pi\lambda}{\Delta}$, the ratio upside down.`,
      remediation: t`The phase difference grows with the path difference: $\Delta\varphi = \dfrac{2\pi\Delta}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: t`Takes the wavelength as $\dfrac{n}{v}$.`,
      remediation: t`$v = n\lambda$, so $\lambda = \dfrac{v}{n}$, in metres.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M11",
      mistake: "Takes the shift from the midpoint as the path difference.",
      remediation: t`Moving $x$ towards one source brings it $x$ nearer and the other $x$ farther: the path difference is $2x$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M1 gives the key when $\varphi = 2p\pi$; diagnose it with other phase differences.`,
    t`C04-M4 applies only to waves in antiphase, and gives the key when $A_1 = A_2$; use unequal amplitudes.`,
    "C04-M8 gives the key when the sources are in phase; diagnose it with sources out of phase.",
    t`C04-M10 gives the key when $n = v$ in SI units, as in the book's Ex Q.12 ($330\ \mathrm{Hz}$, $330\ \mathrm{m/s}$).`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.6" },
      stem: t`Two waves of the same frequency, $y_1 = 3\sin\omega t$ and $y_2 = 4\sin\left(\omega t + \dfrac{\pi}{3}\right)$, with $y$ in cm, interfere. What is the amplitude of the resultant wave?`,
      verify: { kind: "value", inputs: { a1: "3", a2: "4", phi: "pi/3" }, params: { ask: "R" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M2", value: "5" },
        { key: "B", text: t`$3.61\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M3", value: "3.61000000000000" },
        { key: "C", text: t`$6.08\ \mathrm{cm}$`, correct: true, value: "6.08000000000000" },
        { key: "D", text: t`$7\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M1", value: "7" },
      ],
      solution: {
        steps: [
          t`$A^2 = 3^2 + 4^2 + 2 \times 3 \times 4\cos\dfrac{\pi}{3}$.`,
          t`$A^2 = 9 + 16 + 12 = 37$.`,
          t`$A = \sqrt{37} = 6.08\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.6" },
      stem: t`Two waves of the same frequency and amplitudes $5\ \mathrm{cm}$ and $3\ \mathrm{cm}$ meet at a point with a phase difference of $\pi$. What is the amplitude of the resultant wave there?`,
      verify: { kind: "value", inputs: { a1: "5", a2: "3", phi: "pi" }, params: { ask: "R" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M1", value: "8" },
        { key: "B", text: t`$5.83\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M2", value: "5.83000000000000" },
        { key: "C", text: t`$0\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M4", value: "0" },
        { key: "D", text: t`$2\ \mathrm{cm}$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`A phase difference of $\pi$ is antiphase: $\cos\pi = -1$.`,
          t`$A = \left|5 - 3\right| = 2\ \mathrm{cm}$.`,
          t`The amplitudes differ, so the waves do not cancel completely.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Solved Ex.6.1" },
      stem: t`Two waves of the same frequency on a string, $y_1 = 6\sin\left(20x - 30t\right)$ and $y_2 = 2\sin\left(20x - 30t + \varphi\right)$, with $x$ and $y$ in cm, interfere. Taking the intensity as the square of the amplitude, what are the maximum and minimum intensities?`,
      verify: { kind: "value", inputs: { a1: "6", a2: "2" }, params: { ask: "imm" } },
      options: [
        { key: "A", text: t`$I_{\max} = 64$, $I_{\min} = 0$`, correct: false, misconceptionId: "C04-M4", value: "(64, 0)" },
        { key: "B", text: t`$I_{\max} = 8$, $I_{\min} = 4$`, correct: false, misconceptionId: "C04-M5", value: "(8, 4)" },
        { key: "C", text: t`$I_{\max} = 64$, $I_{\min} = 16$`, correct: true, value: "(64, 16)" },
        { key: "D", text: t`$I_{\max} = 40$, $I_{\min} = 32$`, correct: false, misconceptionId: "C04-M2", value: "(40, 32)" },
      ],
      solution: {
        steps: [
          t`The amplitudes are $A_1 = 6\ \mathrm{cm}$ and $A_2 = 2\ \mathrm{cm}$.`,
          t`$I_{\max} = \left(6 + 2\right)^2 = 64$ when the waves are in phase.`,
          t`$I_{\min} = \left(6 - 2\right)^2 = 16$ when they are in antiphase.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Two coherent waves of the same frequency have intensities in the ratio $16 : 1$. What is the ratio $\dfrac{I_{\max}}{I_{\min}}$ when they interfere?`,
      verify: { kind: "value", inputs: { i1: "16", i2: "1" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1.13$`, correct: false, misconceptionId: "C04-M2", value: "1.13000000000000" },
        { key: "B", text: t`$1.67$`, correct: false, misconceptionId: "C04-M5", value: "1.67000000000000" },
        { key: "C", text: t`$1.28$`, correct: false, misconceptionId: "C04-M6", value: "1.28000000000000" },
        { key: "D", text: t`$2.78$`, correct: true, value: "2.78000000000000" },
      ],
      solution: {
        steps: [
          t`$I \propto A^2$, so $\dfrac{A_1}{A_2} = \sqrt{16} = 4$.`,
          t`$\dfrac{I_{\max}}{I_{\min}} = \dfrac{\left(4 + 1\right)^2}{\left(4 - 1\right)^2} = \dfrac{25}{9}$.`,
          t`$\dfrac{25}{9} = 2.78$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.13" },
      stem: t`Two sources in phase emit sound of frequency $500\ \mathrm{Hz}$; the speed of sound is $340\ \mathrm{m/s}$. What is the phase difference between the two waves at a point $5.2\ \mathrm{m}$ from one source and $5.0\ \mathrm{m}$ from the other?`,
      verify: { kind: "value", inputs: { v: "340", n: "500", d1: "26/5", d2: "5", src: "0" }, params: { ask: "path" } },
      options: [
        { key: "A", text: t`$0.855\ \mathrm{rad}$`, correct: false, misconceptionId: "C04-M10", value: "0.855000000000000" },
        { key: "B", text: t`$1.85\ \mathrm{rad}$`, correct: true, value: "1.85000000000000" },
        { key: "C", text: t`$0.294\ \mathrm{rad}$`, correct: false, misconceptionId: "C04-M7", value: "0.294000000000000" },
        { key: "D", text: t`$21.4\ \mathrm{rad}$`, correct: false, misconceptionId: "C04-M9", value: "21.4000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{v}{n} = \dfrac{340}{500} = 0.68\ \mathrm{m}$.`,
          t`The path difference is $5.2 - 5.0 = 0.2\ \mathrm{m}$, and the sources are in phase.`,
          t`$\Delta\varphi = \dfrac{2\pi}{\lambda}\Delta = \dfrac{2\pi \times 0.2}{0.68}$`,
          t`$\approx 1.85\ \mathrm{rad}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.12" },
      stem: t`Two sources $4\ \mathrm{m}$ apart emit sound of the same amplitude and frequency, $165\ \mathrm{Hz}$, but $180^\circ$ out of phase. The speed of sound is $330\ \mathrm{m/s}$. How far from the midpoint between them is the nearest point of maximum intensity on the line joining them?`,
      verify: { kind: "value", inputs: { v: "330", n: "165", src: "pi" }, params: { ask: "maxpos" } },
      options: [
        { key: "A", text: t`$0.5\ \mathrm{m}$`, correct: true, value: "0.500000000000000" },
        { key: "B", text: t`$0\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M8", value: "0" },
        { key: "C", text: t`$0.125\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M10", value: "0.125000000000000" },
        { key: "D", text: t`$1\ \mathrm{m}$`, correct: false, misconceptionId: "C04-M11", value: "1" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{v}{n} = \dfrac{330}{165} = 2\ \mathrm{m}$.`,
          t`A point $x$ from the midpoint has path difference $2x$.`,
          t`The sources are $\pi$ out of phase, so a maximum needs $2x$ to be an odd multiple of $\dfrac{\lambda}{2} = 1\ \mathrm{m}$.`,
          t`The nearest is $2x = 1\ \mathrm{m}$, so $x = 0.5\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
