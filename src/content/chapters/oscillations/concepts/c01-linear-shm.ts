import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Pull a mass on a spring down a little and let go. It bobs up and down, again and again, through the same point. What keeps it coming back?`,
    reveal: t`The spring always pulls it back towards where it rests, and harder the further it is displaced. That kind of pull makes **simple harmonic motion**.`,
  },
  explanation: {
    intuition: [
      t`A motion that repeats itself in equal intervals of time is **periodic**; one that goes to and fro about a point is an **oscillation**.`,
      t`The point the body rests at is its **mean position**.`,
      t`Displace it, and a **restoring force** pulls it back towards the mean position.`,
      t`If that force is proportional to the displacement, the motion is **simple harmonic**: $F = -kx$.`,
      t`The minus sign says the force always points back towards the mean position.`,
    ],
    formal: [
      {
        title: "Linear S.H.M.",
        points: [
          t`**Linear S.H.M.**: periodic motion along a straight line, with a restoring force towards the mean position proportional to the displacement.`,
          t`$F = -kx$, where $x$ is the displacement from the mean position.`,
          t`$k$ is the **force constant**: the restoring force per unit displacement, in N/m.`,
          t`Double the displacement, and the restoring force doubles.`,
        ],
      },
      {
        title: "Acceleration in S.H.M.",
        points: [
          t`By Newton's second law, $a = \dfrac{F}{m} = -\dfrac{k}{m}x$.`,
          t`So the acceleration is also proportional to the displacement, and points towards the mean position.`,
          t`At the mean position, $x = 0$: no force and no acceleration.`,
          t`At the extreme positions, the force and acceleration are greatest.`,
        ],
      },
    ],
    worked: {
      prompt: t`A body of mass $0.8\ \mathrm{kg}$ performs linear S.H.M. It feels a restoring force of $0.4\ \mathrm{N}$ when $4\ \mathrm{cm}$ from its mean position. Find the force constant, and its acceleration when it is $2\ \mathrm{cm}$ from the mean position.`,
      steps: [
        t`$k = \dfrac{F}{x} = \dfrac{0.4}{0.04} = 10\ \mathrm{N/m}$.`,
        t`At $x = 0.02\ \mathrm{m}$: $a = -\dfrac{k}{m}x$.`,
        t`$a = -\dfrac{10}{0.8} \times 0.02$.`,
        t`$a = -0.25\ \mathrm{m/s^2}$, towards the mean position.`,
      ],
      answer: t`$k = 10\ \mathrm{N/m}$, $a = -0.25\ \mathrm{m/s^2}$`,
    },
    visualSpec: t`Pull a mass on a spring to different displacements and watch the restoring-force arrow grow in step with the displacement, always pointing home.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Leaves the displacement in cm.",
      remediation: t`With $F$ in newtons, $x$ must be in metres: $1\ \mathrm{cm} = 0.01\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Multiplies the force by the displacement.",
      remediation: t`$F = kx$ in size, so $k = \dfrac{F}{x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Divides the force by the mass.",
      remediation: t`$\dfrac{F}{m}$ is an acceleration. The force constant is $k = \dfrac{F}{x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Drops the minus sign of the acceleration.",
      remediation: t`$a = -\dfrac{k}{m}x$: the acceleration points back towards the mean position.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks the restoring force is the same at every displacement.",
      remediation: t`In S.H.M. the restoring force is proportional to the displacement: $F = -kx$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks the force points away from the mean position.",
      remediation: t`A **restoring** force pulls the body back: $F = -kx$, opposite to the displacement.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks every to-and-fro motion along a line is S.H.M.",
      remediation: "It is S.H.M. only if the restoring force is proportional to the displacement.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks the force shrinks as the displacement grows.",
      remediation: t`$F = -kx$: the further from the mean position, the larger the force.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: t`Takes the force as proportional to $x^2$.`,
      remediation: t`In S.H.M. the force goes as $x$ itself: $F = -kx$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.1" },
      stem: t`A body of mass $0.2\ \mathrm{kg}$ performs linear S.H.M. It feels a restoring force of $0.2\ \mathrm{N}$ when it is $4\ \mathrm{cm}$ from its mean position. What is the force constant?`,
      verify: { kind: "value", inputs: { F: "0.2", x_cm: "4", m: "0.2" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{N/m}$`, correct: true, value: "5" },
        { key: "B", text: t`$0.05\ \mathrm{N/m}$`, correct: false, misconceptionId: "C01-M1", value: "0.0500000000000000" },
        { key: "C", text: t`$0.008\ \mathrm{N/m}$`, correct: false, misconceptionId: "C01-M2", value: "0.00800000000000000" },
        { key: "D", text: t`$1\ \mathrm{N/m}$`, correct: false, misconceptionId: "C01-M3", value: "1" },
      ],
      solution: {
        steps: [
          t`$x = 4\ \mathrm{cm} = 0.04\ \mathrm{m}$.`,
          t`$k = \dfrac{F}{x} = \dfrac{0.2}{0.04} = 5\ \mathrm{N/m}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Solved Ex.5.1" },
      stem: t`A body of mass $0.2\ \mathrm{kg}$ performs linear S.H.M. It feels a restoring force of $0.2\ \mathrm{N}$ when $4\ \mathrm{cm}$ from its mean position. What is its acceleration when it is $1\ \mathrm{cm}$ from the mean position?`,
      verify: { kind: "value", inputs: { F0: "0.2", x0_cm: "4", m: "0.2", x_cm: "1" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`$-0.25\ \mathrm{m/s^2}$`, correct: true, value: "-0.250000000000000" },
        { key: "B", text: t`$-25\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C01-M1", value: "-25" },
        { key: "C", text: t`$0.25\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C01-M4", value: "0.250000000000000" },
        { key: "D", text: t`$-1\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C01-M5", value: "-1" },
      ],
      solution: {
        steps: [
          t`$k = \dfrac{0.2}{0.04} = 5\ \mathrm{N/m}$.`,
          t`$a = -\dfrac{k}{m}x = -\dfrac{5}{0.2} \times 0.01 = -0.25\ \mathrm{m/s^2}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.16" },
      stem: t`What is linear simple harmonic motion?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "define" } },
      options: [
        { key: "A", text: t`Periodic motion along a line, with a force away from the mean position proportional to the displacement`, correct: false, misconceptionId: "C01-M6", value: "away_from_mean" },
        { key: "B", text: t`Any periodic motion to and fro along a straight line`, correct: false, misconceptionId: "C01-M7", value: "any_periodic" },
        { key: "C", text: t`Periodic motion along a line, with a restoring force towards the mean position proportional to the displacement`, correct: true, value: "restoring_prop_x" },
        { key: "D", text: t`Periodic motion along a line, with a restoring force of the same size at every point`, correct: false, misconceptionId: "C01-M5", value: "constant_force" },
      ],
      solution: {
        steps: [
          t`Linear S.H.M. is periodic motion along a line.`,
          t`Its restoring force points to the mean position and is proportional to the displacement: $F = -kx$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.13" },
      stem: t`A body performing linear S.H.M. feels a restoring force of $0.4\ \mathrm{N}$ when it is $4\ \mathrm{cm}$ from its mean position. What restoring force does it feel $6\ \mathrm{cm}$ from the mean position?`,
      verify: { kind: "value", inputs: { F1: "0.4", x1: "4", x2: "6" }, params: { ask: "F2" } },
      options: [
        { key: "A", text: t`$0.6\ \mathrm{N}$`, correct: true, value: "0.600000000000000" },
        { key: "B", text: t`$0.4\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M5", value: "0.400000000000000" },
        { key: "C", text: t`$0.267\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M8", value: "0.267000000000000" },
        { key: "D", text: t`$0.9\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M9", value: "0.900000000000000" },
      ],
      solution: {
        steps: [
          t`$F \propto x$, so $F_2 = F_1 \times \dfrac{x_2}{x_1}$.`,
          t`$F_2 = 0.4 \times \dfrac{6}{4} = 0.6\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.2 (i)" },
      stem: t`Which force law, with $F$ in newtons and $x$ the displacement from the mean position in metres, gives linear S.H.M.?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`$F = -4x$`, correct: true, value: "minus_4x" },
        { key: "B", text: t`$F = -4$`, correct: false, misconceptionId: "C01-M5", value: "minus_4" },
        { key: "C", text: t`$F = 4x$`, correct: false, misconceptionId: "C01-M6", value: "plus_4x" },
        { key: "D", text: t`$F = -4x^2$`, correct: false, misconceptionId: "C01-M9", value: "minus_4x2" },
      ],
      solution: {
        steps: [
          t`S.H.M. needs $F = -kx$: proportional to $x$ and opposite to it.`,
          t`$F = -4x$ fits, with $k = 4\ \mathrm{N/m}$.`,
        ],
      },
    },
  ],
};
