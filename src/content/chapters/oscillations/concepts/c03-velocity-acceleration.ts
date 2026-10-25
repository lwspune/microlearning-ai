import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A child on a swing seems to hang still for an instant at each end, then rushes through the bottom. Where is the swing fastest, and where is it speeding up most?`,
    reveal: t`It is fastest at the mean position, where the pull back is zero, and it stops at the extremes, where the pull, and so the acceleration, is greatest.`,
  },
  explanation: {
    intuition: [
      t`In S.H.M. the body is fastest at the mean position and stops at the extreme positions.`,
      t`Its speed at displacement $x$ is $v = \omega\sqrt{A^2 - x^2}$, where $A$ is the **amplitude**.`,
      t`Its acceleration is $a = -\omega^2x$: zero at the mean position, greatest at the extremes.`,
      t`So the speed is greatest where the acceleration is zero, and the other way round.`,
      t`The **path length**, from one extreme to the other, is $2A$.`,
    ],
    formal: [
      {
        title: "Velocity in S.H.M.",
        points: [
          t`From $\dfrac{d^2x}{dt^2} = -\omega^2x$: $v = \pm\omega\sqrt{A^2 - x^2}$.`,
          t`At the mean position, $x = 0$: $v_{max} = A\omega$.`,
          t`At the extremes, $x = \pm A$: $v = 0$.`,
          t`$v$ does not fall linearly with $x$: at $x = \dfrac{A}{2}$ it is still $\dfrac{\sqrt{3}}{2}v_{max}$.`,
        ],
      },
      {
        title: "Acceleration in S.H.M.",
        points: [
          t`$a = -\omega^2x$, always towards the mean position.`,
          t`At the extremes, $|a|$ is greatest: $a_{max} = A\omega^2$.`,
          t`Dividing, $\dfrac{a_{max}}{v_{max}} = \omega$, and $\dfrac{v_{max}^2}{a_{max}} = A$.`,
          t`A body resting on a vibrating support stays on it only while $A\omega^2 \le g$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A particle performs S.H.M. of amplitude $10\ \mathrm{cm}$ and period $2\pi\ \mathrm{s}$. Find its maximum speed, its speed $8\ \mathrm{cm}$ from the mean position, and its maximum acceleration.`,
      steps: [
        t`$\omega = \dfrac{2\pi}{T} = 1\ \mathrm{rad/s}$, so $v_{max} = A\omega = 10\ \mathrm{cm/s}$.`,
        t`At $x = 8\ \mathrm{cm}$: $v = \omega\sqrt{A^2 - x^2} = \sqrt{100 - 64}$.`,
        t`$v = 6\ \mathrm{cm/s}$.`,
        t`$a_{max} = A\omega^2 = 10\ \mathrm{cm/s^2}$.`,
      ],
      answer: t`$v_{max} = 10\ \mathrm{cm/s}$, $v = 6\ \mathrm{cm/s}$, $a_{max} = 10\ \mathrm{cm/s^2}$`,
    },
    visualSpec: t`Watch a mass on a spring with speed and acceleration arrows attached: the speed arrow is longest at the middle, the acceleration arrow at the ends.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Takes the path length as the amplitude.",
      remediation: t`The path runs from one extreme to the other: path length $= 2A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Takes the speed to fall linearly with displacement.",
      remediation: t`$v = \omega\sqrt{A^2 - x^2}$, not $\omega(A - x)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Mixes it up with where the kinetic and potential energies are equal.",
      remediation: t`That is at $\dfrac{A}{\sqrt{2}}$. Half the maximum speed needs $\sqrt{A^2 - x^2} = \dfrac{A}{2}$, so $x = \dfrac{\sqrt{3}}{2}A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Adds the squares: $v = \omega\sqrt{A^2 + x^2}$.`,
      remediation: t`The speed falls as the body moves out: $v = \omega\sqrt{A^2 - x^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Inverts the ratio for $\omega$.`,
      remediation: t`$\dfrac{a_{max}}{v_{max}} = \dfrac{A\omega^2}{A\omega} = \omega$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Takes $\omega$ as the period.`,
      remediation: t`$\omega$ is in rad/s; the period is $T = \dfrac{2\pi}{\omega}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M7",
      mistake: t`Forgets the $2\pi$ linking $\omega$ with $T$ or $n$.`,
      remediation: t`$T = \dfrac{2\pi}{\omega}$ and $n = \dfrac{\omega}{2\pi}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M8",
      mistake: "Leaves the amplitude in cm.",
      remediation: t`With $g$ in $\mathrm{m/s^2}$, $A$ must be in metres: $25\ \mathrm{cm} = 0.25\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: t`Takes $\omega^2 = gA$.`,
      remediation: t`The condition is $a_{max} = A\omega^2 = g$, so $\omega^2 = \dfrac{g}{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: t`Takes $v = \omega x$.`,
      remediation: t`$v = \omega\sqrt{A^2 - x^2}$: the speed is greatest at $x = 0$, not at the extremes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: t`Takes $\omega = 2\pi$ for a second's pendulum.`,
      remediation: t`A second's pendulum has period $2\ \mathrm{s}$, so $\omega = \dfrac{2\pi}{2} = \pi\ \mathrm{rad/s}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.8" },
      stem: t`A particle performs S.H.M. along a path $10\ \mathrm{cm}$ long. How far from the mean position is its speed half its maximum speed?`,
      verify: { kind: "value", inputs: { L: "10", f: "2" }, params: { ask: "x_half" } },
      options: [
        { key: "A", text: t`$2.5\ \mathrm{cm}$`, correct: false, misconceptionId: "C03-M2", value: "2.50000000000000" },
        { key: "B", text: t`$3.54\ \mathrm{cm}$`, correct: false, misconceptionId: "C03-M3", value: "3.54000000000000" },
        { key: "C", text: t`$4.33\ \mathrm{cm}$`, correct: true, value: "4.33000000000000" },
        { key: "D", text: t`$8.66\ \mathrm{cm}$`, correct: false, misconceptionId: "C03-M1", value: "8.66000000000000" },
      ],
      solution: {
        steps: [
          t`$A = \dfrac{10}{2} = 5\ \mathrm{cm}$. Set $\omega\sqrt{A^2 - x^2} = \dfrac{A\omega}{2}$: $A^2 - x^2 = \dfrac{A^2}{4}$.`,
          t`$x = \dfrac{\sqrt{3}}{2}A = 0.866 \times 5 \approx 4.33\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.1(vii)" },
      stem: t`A particle performing linear S.H.M. has a period of $6.28\ \mathrm{s}$ and a path length of $20\ \mathrm{cm}$. What is its speed when it is $6\ \mathrm{cm}$ from the mean position?`,
      verify: { kind: "value", inputs: { T: "6.28", L: "20", x: "6" }, params: { ask: "v_at" } },
      options: [
        { key: "A", text: t`$4\ \mathrm{cm/s}$`, correct: false, misconceptionId: "C03-M2", value: "4" },
        { key: "B", text: t`$11.7\ \mathrm{cm/s}$`, correct: false, misconceptionId: "C03-M4", value: "11.7000000000000" },
        { key: "C", text: t`$8\ \mathrm{cm/s}$`, correct: true, value: "8" },
        { key: "D", text: t`$19.1\ \mathrm{cm/s}$`, correct: false, misconceptionId: "C03-M1", value: "19.1000000000000" },
      ],
      solution: {
        steps: [
          t`$A = 10\ \mathrm{cm}$ and $\omega = \dfrac{2\pi}{6.28} = 1\ \mathrm{rad/s}$.`,
          t`$v = \omega\sqrt{A^2 - x^2} = \sqrt{100 - 36} = 8\ \mathrm{cm/s}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.2(viii)" },
      stem: t`A particle performing linear S.H.M. has a maximum speed of $25\ \mathrm{cm/s}$ and a maximum acceleration of $100\ \mathrm{cm/s^2}$. What is its period?`,
      verify: { kind: "value", inputs: { v_max: "25", a_max: "100" }, params: { ask: "T_from", sf: "4" } },
      options: [
        { key: "A", text: t`$25.13\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M5", value: "25.1300000000000" },
        { key: "B", text: t`$4\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M6", value: "4" },
        { key: "C", text: t`$0.25\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M7", value: "0.250000000000000" },
        { key: "D", text: t`$1.571\ \mathrm{s}$`, correct: true, value: "1.57100000000000" },
      ],
      solution: {
        steps: [
          t`$\omega = \dfrac{a_{max}}{v_{max}} = \dfrac{100}{25} = 4\ \mathrm{rad/s}$.`,
          t`$T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{4} \approx 1.571\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.23" },
      stem: t`A block rests on a piston that vibrates up and down in S.H.M. with an amplitude of $25\ \mathrm{cm}$. What is the highest frequency at which the block never leaves the piston? (Take $g \approx \pi^2\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { A: "0.25", g: "pi**2" }, params: { ask: "n_max" } },
      options: [
        { key: "A", text: t`$0.1\ \mathrm{Hz}$`, correct: false, misconceptionId: "C03-M8", value: "0.100000000000000" },
        { key: "B", text: t`$0.25\ \mathrm{Hz}$`, correct: false, misconceptionId: "C03-M9", value: "0.250000000000000" },
        { key: "C", text: t`$1\ \mathrm{Hz}$`, correct: true, value: "1" },
        { key: "D", text: t`$6.28\ \mathrm{Hz}$`, correct: false, misconceptionId: "C03-M7", value: "6.28000000000000" },
      ],
      solution: {
        steps: [
          t`The block stays on while $A\omega^2 \le g$, so $\omega_{max} = \sqrt{\dfrac{g}{A}} = \sqrt{\dfrac{\pi^2}{0.25}} = 2\pi\ \mathrm{rad/s}$.`,
          t`$n_{max} = \dfrac{\omega}{2\pi} = 1\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(ix)" },
      stem: t`A second's pendulum swings with an amplitude of $10\ \mathrm{cm}$. What is the speed of its bob when it is $6\ \mathrm{cm}$ from the mean position?`,
      verify: { kind: "value", inputs: { x: "6", A: "10" }, params: { ask: "v_sec" } },
      options: [
        { key: "A", text: t`$8\pi\ \mathrm{cm/s}$`, correct: true, value: "8*pi" },
        { key: "B", text: t`$4\pi\ \mathrm{cm/s}$`, correct: false, misconceptionId: "C03-M2", value: "4*pi" },
        { key: "C", text: t`$6\pi\ \mathrm{cm/s}$`, correct: false, misconceptionId: "C03-M10", value: "6*pi" },
        { key: "D", text: t`$16\pi\ \mathrm{cm/s}$`, correct: false, misconceptionId: "C03-M11", value: "16*pi" },
      ],
      solution: {
        steps: [
          t`A second's pendulum has $T = 2\ \mathrm{s}$, so $\omega = \pi\ \mathrm{rad/s}$.`,
          t`$v = \omega\sqrt{A^2 - x^2} = \pi\sqrt{100 - 36} = 8\pi\ \mathrm{cm/s}$.`,
        ],
      },
    },
  ],
};
