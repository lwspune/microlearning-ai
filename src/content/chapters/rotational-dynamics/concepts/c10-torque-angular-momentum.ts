import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`Why is a door's handle fixed far from its hinges, not next to them?`,
    reveal: t`The turning effect of a push, its torque, grows with the distance from the axis. The same push far from the hinges swings the door much more easily.`,
  },
  explanation: {
    intuition: [
      t`A **torque** is the turning effect of a force about an axis.`,
      t`Torque changes rotation as force changes straight-line motion.`,
      t`The rotational partner of momentum is **angular momentum**: $L = I\omega$ for a rigid body.`,
      t`Torque is the rate at which angular momentum changes: $\tau = \dfrac{dL}{dt}$.`,
      t`For a rigid body this becomes $\tau = I\alpha$, just as $F = ma$.`,
    ],
    formal: [
      {
        title: "Angular momentum of a rigid body",
        points: [
          t`A particle's angular momentum about O is $\vec{L} = \vec{r} \times \vec{p}$.`,
          t`In a rigid body, a particle at distance $r$ from the axis has momentum $mr\omega$, so $L = mr^2\omega$.`,
          t`Summing over the body: $L = \left(\sum mr^2\right)\omega = I\omega$.`,
          t`SI unit: kg m²/s; $\vec{L}$ points along the axis, like $\vec{\omega}$.`,
        ],
      },
      {
        title: "Torque and angular acceleration",
        points: [
          t`**Torque** $\vec{\tau} = \vec{r} \times \vec{F}$, of size $rF\sin\theta$, in N m.`,
          t`Torque is the rate of change of angular momentum: $\tau = \dfrac{dL}{dt}$.`,
          t`With $I$ fixed: $\tau = I\dfrac{d\omega}{dt} = I\alpha$.`,
          t`A steady torque taking $\omega_1$ to $\omega_2$ in time $t$: $\tau = \dfrac{I(\omega_2 - \omega_1)}{t}$.`,
          t`If $\alpha = 0$, the net torque is zero, though the body may still be turning.`,
          t`Torque has the dimensions of energy, $[M^1L^2T^{-2}]$, but it is not an energy.`,
        ],
      },
      {
        title: "Work and power",
        points: [
          t`A torque $\tau$ turning a body through $\theta$ radians does work $W = \tau\theta$.`,
          t`Power is the rate of doing work: $P = \tau\omega$.`,
          t`Use $\theta$ in radians: $N$ revolutions are $2\pi N$ rad.`,
          t`From rest, the work done becomes rotational K.E.: $\tau\theta = \dfrac{1}{2}I\omega^2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A wheel with moment of inertia $0.2\ \mathrm{kg\,m^2}$ goes from rest to $300\ \mathrm{rpm}$ in $5\ \mathrm{s}$ under a steady torque. Find the torque.`,
      steps: [
        t`$\omega = 2\pi \times \dfrac{300}{60} = 10\pi\ \mathrm{rad/s}$.`,
        t`Its angular momentum grows from $0$ to $L = I\omega = 0.2 \times 10\pi = 2\pi$.`,
        t`A steady torque: $\tau = \dfrac{\Delta L}{t} = \dfrac{2\pi}{5}$.`,
        t`$\tau = 0.4\pi \approx 1.26\ \mathrm{N\,m}$.`,
      ],
      answer: t`$\tau \approx 1.26\ \mathrm{N\,m}$`,
    },
    visualSpec: t`Push on a door at different distances from its hinges and watch the torque, and how fast the door picks up angular momentum, change.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Leaves the time in minutes.",
      remediation: "SI time is in seconds: multiply minutes by 60 before dividing.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Confuses torque with angular momentum, taking $\tau = I\omega$.`,
      remediation: t`$L = I\omega$ is angular momentum. Torque is its rate of change: $\tau = I\alpha = \dfrac{\Delta L}{t}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Divides the kinetic energy by the time.",
      remediation: t`Energy over time is a power, in watts. Torque comes from the change of angular momentum: $\tau = \dfrac{I\Delta\omega}{t}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Puts in a $\dfrac{1}{2}$, as if work or power were like kinetic energy.`,
      remediation: t`Work is $\tau\theta$ and power is $\tau\omega$, with no $\dfrac{1}{2}$. The $\dfrac{1}{2}$ belongs only in $\dfrac{1}{2}I\omega^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Keeps the angle in revolutions.",
      remediation: t`$W = \tau\theta$ needs $\theta$ in radians: $N$ revolutions are $2\pi N$ rad.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M6",
      mistake: "Reads rpm as revolutions per second.",
      remediation: t`rpm counts revolutions per minute: divide by 60, then multiply by $2\pi$ for rad/s.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M7",
      mistake: t`Forgets the $2\pi$, using the frequency as $\omega$.`,
      remediation: t`$\omega = 2\pi n$: one revolution is $2\pi$ radians.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M8",
      mistake: t`Uses the distance moved by the rim, $R\theta$, in place of the angle.`,
      remediation: t`Torque already includes the lever arm. Work is $\tau\theta$ with $\theta$ in radians, not torque times a distance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Thinks the moment of inertia depends on how the body is moving.",
      remediation: t`$I = \sum mr^2$ depends only on the masses and their distances from the axis. It does not change when the body speeds up or slows down.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks zero angular acceleration means the body has stopped turning.",
      remediation: t`$\alpha = 0$ means $\omega$ is steady, not zero. Then $\tau = I\alpha = 0$, while $L = I\omega$ can be large.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.27" },
      stem: t`A wheel with moment of inertia $1\ \mathrm{kg\,m^2}$ spins at $30\ \mathrm{rad/s}$. Friction at its axle brings it to rest in $10$ minutes. What is the average friction torque?`,
      verify: { kind: "value", inputs: { I: "1", w0: "30", t_min: "10" }, params: { ask: "tau_stop" } },
      options: [
        { key: "A", text: t`$3\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M1", value: "3" },
        { key: "B", text: t`$30\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M2", value: "30" },
        { key: "C", text: t`$0.75\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M3", value: "0.750000000000000" },
        { key: "D", text: t`$0.05\ \mathrm{N\,m}$`, correct: true, value: "0.0500000000000000" },
      ],
      solution: {
        steps: [
          t`$t = 600\ \mathrm{s}$. The angular momentum falls from $I\omega_0 = 30$ to $0$.`,
          t`$\tau = \dfrac{\Delta L}{t} = \dfrac{30}{600} = 0.05\ \mathrm{N\,m}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Solved Ex.1.9" },
      stem: t`A ceiling fan with moment of inertia $2\ \mathrm{kg\,m^2}$ reaches its full speed of $60\ \mathrm{rpm}$ from rest in $2\pi$ seconds, under a steady torque. What is its power rating?`,
      verify: { kind: "value", inputs: { I: "2", rpm: "60", t: "2*pi" }, params: { ask: "fan_power" } },
      options: [
        { key: "A", text: t`$12.6\ \mathrm{W}$`, correct: true, value: "12.6000000000000" },
        { key: "B", text: t`$79\ \mathrm{W}$`, correct: false, misconceptionId: "C10-M2", value: "79" },
        { key: "C", text: t`$6.28\ \mathrm{W}$`, correct: false, misconceptionId: "C10-M4", value: "6.28000000000000" },
        { key: "D", text: t`$45200\ \mathrm{W}$`, correct: false, misconceptionId: "C10-M6", value: "45200" },
      ],
      solution: {
        steps: [
          t`$\omega = 2\pi \times \dfrac{60}{60} = 2\pi\ \mathrm{rad/s}$, so $\alpha = \dfrac{2\pi}{2\pi} = 1\ \mathrm{rad/s^2}$.`,
          t`$\tau = I\alpha = 2\ \mathrm{N\,m}$.`,
          t`$P = \tau\omega = 2 \times 2\pi \approx 12.6\ \mathrm{W}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.23" },
      stem: t`A motor turns a flywheel of radius $1.5\ \mathrm{m}$ with a steady torque of $2000\ \mathrm{N\,m}$, starting from rest. How much work does it do in the first 4 revolutions?`,
      verify: { kind: "value", inputs: { tau: "2000", N: "4", R: "1.5" }, params: { ask: "work" } },
      options: [
        { key: "A", text: t`$75400\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M8", value: "75400" },
        { key: "B", text: t`$50300\ \mathrm{J}$`, correct: true, value: "50300" },
        { key: "C", text: t`$25100\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M4", value: "25100" },
        { key: "D", text: t`$8000\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M5", value: "8000" },
      ],
      solution: {
        steps: [
          t`$\theta = 2\pi \times 4 = 8\pi\ \mathrm{rad}$.`,
          t`$W = \tau\theta = 2000 \times 8\pi$ $\approx 50300\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.1(iii)" },
      stem: t`A body rotates about a fixed axis with zero angular acceleration. Which quantity must then be zero?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "zero" } },
      options: [
        { key: "A", text: t`Its moment of inertia`, correct: false, misconceptionId: "C10-M9", value: "moment_of_inertia" },
        { key: "B", text: t`Its angular velocity`, correct: false, misconceptionId: "C10-M10", value: "angular_velocity" },
        { key: "C", text: t`The torque on it`, correct: true, value: "torque" },
        { key: "D", text: t`Its angular momentum`, correct: false, misconceptionId: "C10-M2", value: "angular_momentum" },
      ],
      solution: {
        steps: [
          t`$\tau = I\alpha$, and $I$ is never zero.`,
          t`So $\alpha = 0$ makes the torque zero; $\omega$, $L$ and $I$ need not be zero.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.8" },
      stem: t`A wheel with moment of inertia $0.5\ \mathrm{kg\,m^2}$ goes from rest to $120\ \mathrm{rpm}$ in $4\ \mathrm{s}$ under a steady torque. How large is the torque?`,
      verify: { kind: "value", inputs: { I: "0.5", rpm: "120", t: "4" }, params: { ask: "tau_speedup" } },
      options: [
        { key: "A", text: t`$1.57\ \mathrm{N\,m}$`, correct: true, value: "1.57000000000000" },
        { key: "B", text: t`$6.28\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M2", value: "6.28000000000000" },
        { key: "C", text: t`$94.2\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M6", value: "94.2000000000000" },
        { key: "D", text: t`$0.25\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C10-M7", value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`$\omega = 2\pi \times \dfrac{120}{60} = 4\pi\ \mathrm{rad/s}$, so $\alpha = \dfrac{4\pi}{4} = \pi\ \mathrm{rad/s^2}$.`,
          t`$\tau = I\alpha = 0.5\pi \approx 1.57\ \mathrm{N\,m}$.`,
        ],
      },
    },
  ],
};
