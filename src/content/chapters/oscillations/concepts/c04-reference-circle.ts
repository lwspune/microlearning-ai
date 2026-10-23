import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Watch a peg on a turning wheel from the side, level with the wheel. The peg seems to move straight up and down, slowing at the top and bottom. What motion is that?`,
    reveal: t`It is S.H.M. The shadow, or projection, of steady circular motion on a diameter is simple harmonic. The angle round the circle is the motion's **phase**.`,
  },
  explanation: {
    intuition: [
      t`Let a particle P go round a circle of radius $A$ at steady angular speed $\omega$.`,
      t`The radius OP turns through angle $\theta = \omega t + \alpha$ in time $t$.`,
      t`The foot M of the perpendicular from P to a diameter moves to and fro along it.`,
      t`M's position is $x = A\sin\theta$: it performs S.H.M. of amplitude $A$ and angular frequency $\omega$.`,
      t`The angle $\theta$, the **phase**, tells where M is and which way it is moving.`,
    ],
    formal: [
      {
        title: "S.H.M. from circular motion",
        points: [
          t`The circle P moves on is the **reference circle**; P is the **reference particle**.`,
          t`M, the projection of P on a diameter, has $x = A\sin\left(\omega t + \alpha\right)$.`,
          t`Differentiating, $v = A\omega\cos\left(\omega t + \alpha\right)$ and $a = -\omega^2x$: S.H.M.`,
          t`One turn of P is one full oscillation of M: $T = \dfrac{2\pi}{\omega}$.`,
        ],
        figure: {
          alt: "A reference circle: P on the circle, the radius OP at angle theta, and M, its projection on the vertical diameter, at x = A sin theta. At point 3, M's velocity along the diameter.",
          axes: "none",
          view: { x: [-3.2, 3.2], y: [-2.8, 2.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, -2.3], to: [0, 2.3], dashed: true, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.532, 1.286], label: "P", labelAt: "ne" },
            { kind: "segment", from: [0, 0], to: [1.532, 1.286] },
            { kind: "angle", at: [0, 0], from: 0, to: 40, label: "θ" },
            { kind: "segment", from: [1.532, 1.286], to: [0, 1.286], dashed: true, tone: "muted" },
            { kind: "point", at: [0, 1.286], label: "M", labelAt: "w" },
            { kind: "vector", from: [0.3, 1.286], to: [0.3, 1.736], label: "v", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Phase and epoch",
        points: [
          t`**Phase** $\theta = \omega t + \alpha$ fixes the state: where M is and which way it moves.`,
          t`The **epoch** $\alpha$ is the phase at $t = 0$.`,
          t`$v = A\omega\cos\theta$: if $x$ and $\cos\theta$ have the same sign, M moves away from the mean position.`,
          t`Each full oscillation adds $2\pi$ to the phase.`,
          t`The acceleration is $\pi$ ahead of the displacement, the velocity $\dfrac{\pi}{2}$ ahead.`,
        ],
        figure: {
          alt: "A reference circle with P at 150 degrees: M is above the mean position, and its velocity points down, towards the mean position.",
          axes: "none",
          view: { x: [-3.2, 3.2], y: [-2.8, 2.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, -2.3], to: [0, 2.3], dashed: true, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [-1.732, 1], label: "P", labelAt: "nw" },
            { kind: "segment", from: [0, 0], to: [-1.732, 1] },
            { kind: "angle", at: [0, 0], from: 0, to: 150, label: "θ" },
            { kind: "segment", from: [-1.732, 1], to: [0, 1], dashed: true, tone: "muted" },
            { kind: "point", at: [0, 1], label: "M", labelAt: "e" },
            { kind: "vector", from: [-0.3, 1], to: [-0.3, 0.55], label: "v", labelAt: "e", tone: "good" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A particle performs S.H.M., $x = A\sin\theta$. Describe its state when its phase is $240^\circ$.`,
      steps: [
        t`$240^\circ$ is less than $360^\circ$, so it is in its 1st oscillation.`,
        t`$x = A\sin 240^\circ = -\dfrac{\sqrt{3}}{2}A$: below the mean position.`,
        t`$v = A\omega\cos 240^\circ = -\dfrac{A\omega}{2}$: moving in the negative direction.`,
        t`$x$ and $v$ are both negative, so it is moving away from the mean position, towards the negative extreme.`,
      ],
      answer: t`1st oscillation, at $-\dfrac{\sqrt{3}}{2}A$, moving towards the negative extreme`,
      figure: {
        alt: "A reference circle with P at 240 degrees. At step 2, M below the mean position. At step 3, M's velocity, pointing down, away from the mean position.",
        axes: "none",
        view: { x: [-3.2, 3.2], y: [-2.8, 2.8] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
          { kind: "segment", from: [0, -2.3], to: [0, 2.3], dashed: true, tone: "muted" },
          { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
          { kind: "point", at: [-1, -1.732], label: "P", labelAt: "nw" },
          { kind: "segment", from: [0, 0], to: [-1, -1.732] },
          { kind: "angle", at: [0, 0], from: 0, to: 240, label: "θ" },
          { kind: "segment", from: [-1, -1.732], to: [0, -1.732], dashed: true, tone: "muted", step: 2 },
          { kind: "point", at: [0, -1.732], label: "M", labelAt: "e", step: 2 },
          { kind: "vector", from: [-0.3, -1.732], to: [-0.3, -2.182], label: "v", labelAt: "e", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A reference circle centred at O with a vertical diameter. First the particle P on the circle. Then the radius OP at angle theta. Then M, the foot of the perpendicular from P on the diameter. Last, M's velocity, along the diameter.",
      axes: "none",
      view: { x: [-3.2, 3.2], y: [-2.8, 2.8] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted", step: 1 },
        { kind: "segment", from: [0, -2.3], to: [0, 2.3], dashed: true, tone: "muted", step: 1 },
        { kind: "point", at: [0, 0], label: "O", labelAt: "sw", step: 1 },
        { kind: "point", at: [1.532, 1.286], label: "P", labelAt: "ne", step: 1 },
        { kind: "segment", from: [0, 0], to: [1.532, 1.286], step: 2 },
        { kind: "angle", at: [0, 0], from: 0, to: 40, label: "θ", step: 2 },
        { kind: "segment", from: [1.532, 1.286], to: [0, 1.286], dashed: true, tone: "muted", step: 3 },
        { kind: "point", at: [0, 1.286], label: "M", labelAt: "w", step: 3 },
        { kind: "vector", from: [0.3, 1.286], to: [0.3, 1.736], label: "v", labelAt: "e", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Turn the reference particle round its circle and watch its projection slide up and down the diameter, slowing at the ends.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Counts the completed oscillations instead of the current one.",
      remediation: t`After $3 \times 360^\circ$ the particle has finished 3 oscillations and is in its 4th.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks the wrong quadrant for the direction of motion.",
      remediation: t`$v = A\omega\cos\theta$: the sign of $\cos\theta$ shows the direction. Check it against the sign of $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Uses cosine instead of sine.",
      remediation: t`Here $x = A\sin\theta$; its velocity is $A\omega\cos\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Gives only the phase within the current oscillation.",
      remediation: t`Add $2\pi$ for each oscillation already completed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Gives the velocity's phase lead instead.",
      remediation: t`Velocity leads displacement by $\dfrac{\pi}{2}$; acceleration, $a = -\omega^2x$, leads by $\pi$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks the acceleration is in step with the displacement.",
      remediation: t`$a = -\omega^2x$: the acceleration is always opposite to the displacement, $\pi$ out of phase.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M7",
      mistake: "Takes the acceleration as a quarter cycle behind.",
      remediation: t`$a = -\omega^2x$ is exactly opposite to $x$: a phase difference of $\pi$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks the projection moves along the diameter at a steady speed.",
      remediation: t`$v = A\omega\cos\theta$: the projection is fastest at the centre and stops at the ends.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Takes the amplitude as the diameter.",
      remediation: t`The projection goes from $-A$ to $+A$: the amplitude is the radius.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks one turn gives half an oscillation.",
      remediation: "In one turn the projection goes up, down and back: one full oscillation.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Takes the epoch as zero whenever the motion just starts.",
      remediation: t`$\alpha = 0$ only if the particle starts at the mean position moving outwards; here $\sin\alpha = \dfrac{1}{2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.7" },
      stem: t`A particle performs linear S.H.M., $x = A\sin\theta$. Describe its state of oscillation when its phase angle is $1110^\circ$.`,
      verify: { kind: "value", inputs: { deg: "1110" }, params: { ask: "state" } },
      options: [
        { key: "A", text: t`In its 4th oscillation, at $+\dfrac{A}{2}$, moving towards the mean position`, correct: false, misconceptionId: "C04-M2", value: "osc4_x1over2_in" },
        { key: "B", text: t`In its 4th oscillation, at $+\dfrac{\sqrt{3}}{2}A$, moving towards the mean position`, correct: false, misconceptionId: "C04-M3", value: "osc4_xsqrt3over2_in" },
        { key: "C", text: t`In its 4th oscillation, at $+\dfrac{A}{2}$, moving towards the positive extreme`, correct: true, value: "osc4_x1over2_out" },
        { key: "D", text: t`In its 3rd oscillation, at $+\dfrac{A}{2}$, moving towards the positive extreme`, correct: false, misconceptionId: "C04-M1", value: "osc3_x1over2_out" },
      ],
      solution: {
        steps: [
          t`$1110^\circ = 3 \times 360^\circ + 30^\circ$: 3 oscillations done, so it is in its 4th.`,
          t`$x = A\sin 30^\circ = \dfrac{A}{2}$ and $\cos 30^\circ > 0$: moving away from the mean, towards the positive extreme.`,
        ],
        figure: {
          alt: "The reference circle with P at 30 degrees: M at A over 2 above the mean position, moving up, towards the positive extreme.",
          axes: "none",
          view: { x: [-3.2, 3.2], y: [-2.8, 2.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, -2.3], to: [0, 2.3], dashed: true, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [1.732, 1], label: "P", labelAt: "ne" },
            { kind: "segment", from: [0, 0], to: [1.732, 1] },
            { kind: "angle", at: [0, 0], from: 0, to: 30, label: "θ" },
            { kind: "segment", from: [1.732, 1], to: [0, 1], dashed: true, tone: "muted" },
            { kind: "point", at: [0, 1], label: "M", labelAt: "w" },
            { kind: "vector", from: [0.3, 1], to: [0.3, 1.45], label: "v", labelAt: "e", tone: "good" },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.8" },
      stem: t`A particle in linear S.H.M., $x = A\sin\theta$, is completing its third oscillation. It is at $x = -\dfrac{\sqrt{3}}{2}A$, heading towards the mean position. What is its phase angle?`,
      verify: { kind: "value", inputs: { osc: "3", xr: "-sqrt(3)/2" }, params: { ask: "phase" } },
      options: [
        { key: "A", text: t`$\frac{23 \pi}{3}$`, correct: false, misconceptionId: "C04-M1", value: "23*pi/3" },
        { key: "B", text: t`$\frac{16 \pi}{3}$`, correct: false, misconceptionId: "C04-M2", value: "16*pi/3" },
        { key: "C", text: t`$\frac{5 \pi}{3}$`, correct: false, misconceptionId: "C04-M4", value: "5*pi/3" },
        { key: "D", text: t`$\frac{17 \pi}{3}$`, correct: true, value: "17*pi/3" },
      ],
      solution: {
        steps: [
          t`$\sin\theta_1 = -\dfrac{\sqrt{3}}{2}$ heading to the mean position needs $\cos\theta_1 > 0$: $\theta_1 = 2\pi - \dfrac{\pi}{3} = \dfrac{5\pi}{3}$.`,
          t`Two oscillations are done, so $\theta = 4\pi + \dfrac{5\pi}{3} = \dfrac{17\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.1(v)" },
      stem: t`A particle starts S.H.M. from its mean position. What is the phase difference between its displacement and its acceleration?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "x_a" } },
      options: [
        { key: "A", text: t`$2 \pi$`, correct: false, misconceptionId: "C04-M6", value: "2*pi" },
        { key: "B", text: t`$\frac{3 \pi}{2}$`, correct: false, misconceptionId: "C04-M7", value: "3*pi/2" },
        { key: "C", text: t`$\pi$`, correct: true, value: "pi" },
        { key: "D", text: t`$\frac{\pi}{2}$`, correct: false, misconceptionId: "C04-M5", value: "pi/2" },
      ],
      solution: {
        steps: [
          t`$x = A\sin\omega t$ and $a = -A\omega^2\sin\omega t = A\omega^2\sin\left(\omega t + \pi\right)$.`,
          t`So the acceleration leads the displacement by $\pi$ rad.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.3" },
      stem: t`A particle moves round a circle of radius $A$ with steady angular speed $\omega$. What does its projection on a diameter do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ucm" } },
      options: [
        { key: "A", text: t`It moves along the diameter at a steady speed`, correct: false, misconceptionId: "C04-M8", value: "uniform" },
        { key: "B", text: t`It performs S.H.M. of amplitude $2A$ and angular frequency $\omega$`, correct: false, misconceptionId: "C04-M9", value: "amplitude_2A" },
        { key: "C", text: t`It performs one oscillation for every two turns of the particle`, correct: false, misconceptionId: "C04-M10", value: "half_per_rev" },
        { key: "D", text: t`It performs S.H.M. of amplitude $A$ and angular frequency $\omega$`, correct: true, value: "shm_A_omega" },
      ],
      solution: {
        steps: [
          t`The projection is at $x = A\sin\left(\omega t + \alpha\right)$.`,
          t`That is S.H.M. of amplitude $A$, the radius, and angular frequency $\omega$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`A particle performs S.H.M., $x = A\sin\left(\omega t + \alpha\right)$. At $t = 0$ it is at $x = \dfrac{A}{2}$, moving away from the mean position. What is its epoch $\alpha$?`,
      verify: { kind: "value", inputs: { xr: "1/2" }, params: { ask: "epoch" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C04-M11", value: "0" },
        { key: "B", text: t`$\frac{\pi}{6}$`, correct: true, value: "pi/6" },
        { key: "C", text: t`$\frac{5 \pi}{6}$`, correct: false, misconceptionId: "C04-M2", value: "5*pi/6" },
        { key: "D", text: t`$\frac{\pi}{3}$`, correct: false, misconceptionId: "C04-M3", value: "pi/3" },
      ],
      solution: {
        steps: [
          t`$\sin\alpha = \dfrac{1}{2}$, so $\alpha = \dfrac{\pi}{6}$ or $\dfrac{5\pi}{6}$.`,
          t`Moving away from the mean needs $\cos\alpha > 0$: $\alpha = \dfrac{\pi}{6}$.`,
        ],
      },
    },
  ],
};
