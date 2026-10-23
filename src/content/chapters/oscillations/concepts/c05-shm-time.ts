import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`A pendulum takes 1 s to swing from the middle to one end. Does it take half a second to get halfway there?`,
    reveal: t`No. It moves fastest near the middle, so it covers the first half of the way in just a third of that second. To find when it reaches any point, use $x = A\sin\omega t$.`,
  },
  explanation: {
    intuition: [
      t`In S.H.M. the displacement changes with time as a sine: $x = A\sin\left(\omega t + \alpha\right)$.`,
      t`Starting at the mean position, $\alpha = 0$: $x = A\sin\omega t$.`,
      t`Starting at the positive extreme, $\alpha = \dfrac{\pi}{2}$: $x = A\cos\omega t$.`,
      t`The displacement does not change steadily with time: the body lingers near the extremes.`,
      t`From $x(t)$, differentiate for the velocity, and use $a = -\omega^2x$ for the acceleration.`,
    ],
    formal: [
      {
        title: "Displacement at any time",
        points: [
          t`$x = A\sin\left(\omega t + \alpha\right)$, with $\omega = \dfrac{2\pi}{T} = 2\pi n$.`,
          t`The epoch $\alpha$ comes from where the particle is at $t = 0$.`,
          t`To find **when** it reaches $x$, solve $\sin\left(\omega t + \alpha\right) = \dfrac{x}{A}$, with the angle in radians.`,
          t`Distance from the extreme, $d$, means $x = A - d$.`,
        ],
      },
      {
        title: "Velocity and acceleration at any time",
        points: [
          t`$v = \dfrac{dx}{dt} = A\omega\cos\left(\omega t + \alpha\right)$.`,
          t`$a = \dfrac{dv}{dt} = -A\omega^2\sin\left(\omega t + \alpha\right) = -\omega^2x$.`,
          t`Find $x$ at that time first, then the acceleration.`,
          t`$A\omega^2$ is only the largest acceleration, reached at the extremes.`,
        ],
      },
    ],
    worked: {
      prompt: t`A particle performs S.H.M. of amplitude $10\ \mathrm{cm}$ and period $12\ \mathrm{s}$, starting from the mean position. Where is it after $1\ \mathrm{s}$, and how fast is it moving?`,
      steps: [
        t`$\omega = \dfrac{2\pi}{12} = \dfrac{\pi}{6}\ \mathrm{rad/s}$, and $x = A\sin\omega t$.`,
        t`$x = 10\sin\dfrac{\pi}{6} = 5\ \mathrm{cm}$.`,
        t`$v = A\omega\cos\omega t = 10 \times \dfrac{\pi}{6} \times \cos\dfrac{\pi}{6}$.`,
        t`$v \approx 10 \times 0.524 \times 0.866 \approx 4.53\ \mathrm{cm/s}$.`,
      ],
      answer: t`$x = 5\ \mathrm{cm}$, $v \approx 4.53\ \mathrm{cm/s}$`,
    },
    visualSpec: t`Run a clock beside an oscillating mass and mark where it is every tenth of a period: the marks bunch up near the ends.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Uses cosine though the timing starts at the mean position.",
      remediation: t`From the mean position, $\alpha = 0$ and $x = A\sin\omega t$; $A\cos\omega t$ starts at an extreme.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: "Takes the angle in degrees as radians.",
      remediation: t`$\omega t$ is in radians: $\sin^{-1}\dfrac{1}{3} = 19.47^\circ = 0.3398\ \mathrm{rad}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Takes the displacement to change steadily with time.",
      remediation: t`The motion is fastest near the mean and slowest near the extremes: use $x = A\sin\left(\omega t + \alpha\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Uses $x = A\sin\omega t$ though the motion starts at an extreme.`,
      remediation: t`Starting at the positive extreme, $\alpha = \dfrac{\pi}{2}$: $x = A\cos\omega t$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: "Takes the distance travelled as the displacement.",
      remediation: t`Displacement is measured from the mean position: $1\ \mathrm{cm}$ from the extreme is $x = A - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Forgets the $2\pi$ in $\omega$.`,
      remediation: t`$\omega = 2\pi n = \dfrac{2\pi}{T}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M7",
      mistake: "Gives the maximum acceleration.",
      remediation: t`$A\omega^2$ is the acceleration at an extreme; at time $t$, $a = -\omega^2x$ with $x = A\sin\omega t$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M8",
      mistake: t`Leaves out $\omega$ when differentiating.`,
      remediation: t`By the chain rule, $\dfrac{d}{dt}\sin\omega t = \omega\cos\omega t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Gives the displacement instead of the velocity.",
      remediation: t`Velocity is the rate of change of displacement: $v = \dfrac{dx}{dt}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M10",
      mistake: t`Takes the derivative of $\sin$ as $\sin$.`,
      remediation: t`$\dfrac{d}{dt}\sin\omega t = \omega\cos\omega t$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.13" },
      stem: t`A simple pendulum performs S.H.M. with a period of $4\ \mathrm{s}$. How long after crossing the mean position is the bob's displacement one third of its amplitude?`,
      verify: { kind: "value", inputs: { T: "4", frac: "1/3" }, params: { ask: "t_frac", sf: "4" } },
      options: [
        { key: "A", text: t`$0.3333\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M3", value: "0.333300000000000" },
        { key: "B", text: t`$0.2163\ \mathrm{s}$`, correct: true, value: "0.216300000000000" },
        { key: "C", text: t`$0.7837\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M1", value: "0.783700000000000" },
        { key: "D", text: t`$12.4\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M2", value: "12.4000000000000" },
      ],
      solution: {
        steps: [
          t`$\omega = \dfrac{2\pi}{4} = \dfrac{\pi}{2}\ \mathrm{rad/s}$ and $\sin\omega t = \dfrac{1}{3}$, so $\omega t = 0.3398\ \mathrm{rad}$.`,
          t`$t = \dfrac{0.3398}{1.571} \approx 0.2163\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.2" },
      stem: t`A particle performs linear S.H.M. of period $4\ \mathrm{s}$ and amplitude $4\ \mathrm{cm}$. How long does it take to travel $1\ \mathrm{cm}$ from the positive extreme position?`,
      verify: { kind: "value", inputs: { T: "4", A: "4", d: "1" }, params: { ask: "t_ext" } },
      options: [
        { key: "A", text: t`$0.25\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M3", value: "0.250000000000000" },
        { key: "B", text: t`$0.54\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M4", value: "0.540000000000000" },
        { key: "C", text: t`$0.839\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M5", value: "0.839000000000000" },
        { key: "D", text: t`$0.46\ \mathrm{s}$`, correct: true, value: "0.460000000000000" },
      ],
      solution: {
        steps: [
          t`From the positive extreme, $x = A\cos\omega t$, and $x = 4 - 1 = 3\ \mathrm{cm}$: $\cos\dfrac{\pi t}{2} = \dfrac{3}{4}$.`,
          t`$\dfrac{\pi t}{2} = 0.7227\ \mathrm{rad}$, so $t \approx 0.46\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.10" },
      stem: t`A sewing-machine needle moves in S.H.M. of amplitude $4\ \mathrm{cm}$ and frequency $5\ \mathrm{Hz}$. What is the size of its acceleration $\dfrac{1}{30}\ \mathrm{s}$ after it crosses the mean position?`,
      verify: { kind: "value", inputs: { A_cm: "4", n: "5", t: "1/30" }, params: { ask: "a_at" } },
      options: [
        { key: "A", text: t`$34.2\ \mathrm{m/s^2}$`, correct: true, value: "34.2000000000000" },
        { key: "B", text: t`$19.7\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C05-M1", value: "19.7000000000000" },
        { key: "C", text: t`$0.166\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C05-M6", value: "0.166000000000000" },
        { key: "D", text: t`$39.5\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C05-M7", value: "39.5000000000000" },
      ],
      solution: {
        steps: [
          t`$\omega = 2\pi \times 5 = 10\pi\ \mathrm{rad/s}$; $x = 0.04\sin\dfrac{\pi}{3} \approx 0.0346\ \mathrm{m}$.`,
          t`$|a| = \omega^2x = (10\pi)^2 \times 0.0346 \approx 34.2\ \mathrm{m/s^2}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.2(vii)" },
      stem: t`A particle performs S.H.M. with displacement $x = 5\sin\dfrac{\pi t}{3}$ metres. What is its velocity at $t = 1\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { A: "5", w: "pi/3", t: "1" }, params: { ask: "v_at", sf: "4" } },
      options: [
        { key: "A", text: t`$4.33\ \mathrm{m/s}$`, correct: false, misconceptionId: "C05-M9", value: "4.33000000000000" },
        { key: "B", text: t`$4.534\ \mathrm{m/s}$`, correct: false, misconceptionId: "C05-M10", value: "4.53400000000000" },
        { key: "C", text: t`$2.618\ \mathrm{m/s}$`, correct: true, value: "2.61800000000000" },
        { key: "D", text: t`$2.5\ \mathrm{m/s}$`, correct: false, misconceptionId: "C05-M8", value: "2.50000000000000" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{dx}{dt} = 5 \times \dfrac{\pi}{3}\cos\dfrac{\pi t}{3}$.`,
          t`At $t = 1$: $v = \dfrac{5\pi}{3} \times \dfrac{1}{2} = \dfrac{5\pi}{6} \approx 2.618\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.3" },
      stem: t`A particle performing linear S.H.M. of period $6\ \mathrm{s}$ is at the positive extreme at $t = 0$. At $t = 7\ \mathrm{s}$, before reaching the mean position, it is $3\ \mathrm{cm}$ from that extreme. What is the amplitude?`,
      verify: { kind: "value", inputs: { T: "6", t: "7", d: "3" }, params: { ask: "A_from" } },
      options: [
        { key: "A", text: t`$6\ \mathrm{cm}$`, correct: true, value: "6" },
        { key: "B", text: t`$4.5\ \mathrm{cm}$`, correct: false, misconceptionId: "C05-M3", value: "4.50000000000000" },
        { key: "C", text: t`$22.4\ \mathrm{cm}$`, correct: false, misconceptionId: "C05-M4", value: "22.4000000000000" },
        { key: "D", text: t`$4.94\ \mathrm{cm}$`, correct: false, misconceptionId: "C05-M6", value: "4.94000000000000" },
      ],
      solution: {
        steps: [
          t`From the positive extreme, $x = A\cos\dfrac{2\pi t}{6}$; at $t = 7$, $\cos\dfrac{7\pi}{3} = \dfrac{1}{2}$, so $x = \dfrac{A}{2}$.`,
          t`$x = A - 3$, so $A - 3 = \dfrac{A}{2}$ and $A = 6\ \mathrm{cm}$.`,
        ],
      },
    },
  ],
};
