import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`You hold a heavy bag perfectly still for ten minutes and your arms ache. How much work have you done on the bag?`,
    reveal: t`None. In physics, work needs a displacement: $W = Fs\cos\theta$, and the bag never moved, so $s = 0$. Your tired muscles used energy, but none of it went into the bag.`,
  },
  explanation: {
    intuition: [
      t`A force does **work** when its point of application moves along the force.`,
      t`Only the part of the force along the motion counts.`,
      t`A force against the motion does negative work; a force across it does none.`,
      t`**Kinetic energy** is the energy a body has because it is moving.`,
      t`The net work done on a body equals the gain in its kinetic energy.`,
      t`**Power** is how fast work is done.`,
    ],
    formal: [
      {
        title: "Work by a constant force",
        points: [
          t`Work is the dot product of the force and the displacement: $W = \vec{F} \cdot \vec{s}$.`,
          t`So $W = Fs\cos\theta$, where $\theta$ is the angle between $\vec{F}$ and $\vec{s}$.`,
          t`The unit is the **joule**: $1\ \mathrm{J} = 1\ \mathrm{N\,m}$.`,
          t`$\theta < 90^\circ$: positive work; $\theta = 90^\circ$: zero work; $\theta > 90^\circ$: negative work.`,
          t`This formula needs a force that stays constant over the whole displacement.`,
        ],
      },
      {
        title: "Work by a variable force",
        points: [
          t`Split the path into small steps $dx$; over each, the work is $F\,dx$.`,
          t`Add them up: $W$ $= \displaystyle\int_{x_1}^{x_2} F\,dx$.`,
          t`On an $F$-$x$ graph, this is the area under the curve between $x_1$ and $x_2$.`,
          t`A force that changes linearly gives a trapezium: $W$ $= \dfrac{F_1 + F_2}{2}(x_2 - x_1)$.`,
          t`Positions in cm must be changed to m before they go into a formula in SI units.`,
        ],
      },
      {
        title: "The work-energy theorem",
        points: [
          t`A body of mass $m$ and speed $v$ has kinetic energy $K = \dfrac{1}{2}mv^2$.`,
          t`With momentum $p = mv$, this is also $K = \dfrac{p^2}{2m}$.`,
          t`**Work-energy theorem:** the net work on a body equals its change in kinetic energy, $W = \Delta K$.`,
          t`From $v^2 = u^2 + 2as$ and $F = ma$: $Fs$ $= \dfrac{1}{2}mv^2 - \dfrac{1}{2}mu^2$.`,
          t`Friction does negative work, so it takes kinetic energy away as heat.`,
        ],
      },
      {
        title: "Energy and power",
        points: [
          t`Raising a mass $m$ through a height $h$ takes work $mgh$, stored as potential energy.`,
          t`Work and energy have the same unit and turn into each other: two sides of a coin.`,
          t`Average power is $P = \dfrac{W}{t}$; the unit is the **watt**, $1\ \mathrm{W} = 1\ \mathrm{J/s}$.`,
          t`Instantaneous power is $P = \dfrac{dW}{dt}$ $= \vec{F} \cdot \vec{v}$.`,
          t`A constant force $F$ on a mass $m$ from rest gives $v = \dfrac{Ft}{m}$, so $P = \dfrac{F^2t}{m}$ grows with $t$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $4\ \mathrm{kg}$ block slides at $6\ \mathrm{m/s}$ onto a rough floor and stops after $9\ \mathrm{m}$. Find the work done by friction and the friction force.`,
      steps: [
        t`Initial kinetic energy: $\dfrac{1}{2} \times 4 \times 6^2$ $= 72\ \mathrm{J}$; final: $0$.`,
        t`Work-energy theorem: $W = \Delta K$ $= 0 - 72$ $= -72\ \mathrm{J}$.`,
        t`Friction acts against the motion: $W = -f \times 9$.`,
        t`$f = \dfrac{72}{9}$ $= 8\ \mathrm{N}$.`,
      ],
      answer: t`$W = -72\ \mathrm{J}$; $f = 8\ \mathrm{N}$`,
    },
    visualSpec: t`Drag the end of a force-displacement graph and watch the shaded area, the work, fill in as the body moves.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Uses $W = Fs$, ignoring the angle between the force and the motion.`,
      remediation: t`Only the part of the force along the motion does work: $W = Fs\cos\theta$.`,
      fallback: { kind: "ext", topic: "dot product (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C03-M2",
      mistake: t`Uses $\sin\theta$ in place of $\cos\theta$.`,
      remediation: t`$\theta$ is the angle between the force and the displacement, so the part along the motion is $F\cos\theta$.`,
      fallback: { kind: "ext", topic: "dot product (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C03-M3",
      mistake: t`Forgets the $\dfrac{1}{2}$ in $K = \dfrac{1}{2}mv^2$.`,
      remediation: t`$W = \dfrac{1}{2}mv^2$ from rest, so $v = \sqrt{\dfrac{2W}{m}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Treats the force as constant at its starting value.",
      remediation: t`The force changes as the body moves. For a linear change use the average force, or the area under the $F$-$x$ graph.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Treats the force as constant at its final value.",
      remediation: t`A variable force does work $\displaystyle\int F\,dx$, not its final value times the displacement.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Multiplies by the final position instead of the displacement.",
      remediation: t`Work uses the displacement, $x_2 - x_1$, not where the body ends up.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Evaluates the integral at the upper limit only.",
      remediation: "A definite integral is the primitive at the upper limit **minus** the primitive at the lower limit.",
      fallback: { kind: "ext", topic: "definite integrals" },
    },
    {
      id: "C03-M8",
      mistake: "Puts positions in cm into a formula written for metres.",
      remediation: t`$F$ is given with $x$ in metres: change $10\ \mathrm{cm}$ and $30\ \mathrm{cm}$ to $0.1\ \mathrm{m}$ and $0.3\ \mathrm{m}$ first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks the heavier body gets more kinetic energy.",
      remediation: t`With equal momentum, $K = \dfrac{p^2}{2m}$: the lighter body moves faster and has more kinetic energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks equal momenta mean equal kinetic energies.",
      remediation: t`Momentum is $mv$ but kinetic energy is $\dfrac{1}{2}mv^2$; with the same $p$, $K = \dfrac{p^2}{2m}$ depends on $m$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: t`Compares $v^2$ alone and drops the mass in $\dfrac{1}{2}mv^2$.`,
      remediation: t`The lighter body is $4$ times faster, but $K = \dfrac{1}{2}mv^2$ also has its smaller mass: $K = \dfrac{p^2}{2m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Leaves the time in minutes.",
      remediation: t`Power in watts needs the time in seconds: $20\ \mathrm{min}$ $= 1200\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Takes one litre of oil as one kilogram.",
      remediation: t`One litre is $1000\ \mathrm{cc}$; at $0.8\ \mathrm{g/cc}$ its mass is $0.8\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: t`Uses $mh$ for the work, not $mgh$.`,
      remediation: t`Lifting needs a force equal to the weight $mg$, so the work is $mgh$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`A $2\ \mathrm{kg}$ box rests on a smooth horizontal floor. A rope pulls it with a force of $40\ \mathrm{N}$ at $60^\circ$ to the floor, and the box moves $5\ \mathrm{m}$ along the floor. What is its speed then?`,
      verify: { kind: "value", inputs: { m: "2", F: "40", th: "60", s: "5" }, params: { ask: "pull" } },
      options: [
        { key: "A", text: t`$13.2\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M2", value: "13.2000000000000" },
        { key: "B", text: t`$7.07\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M3", value: "7.07000000000000" },
        { key: "C", text: t`$10\ \mathrm{m/s}$`, correct: true, value: "10" },
        { key: "D", text: t`$14.1\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M1", value: "14.1000000000000" },
      ],
      solution: {
        steps: [
          t`$W = Fs\cos 60^\circ$ $= 40 \times 5 \times 0.5$ $= 100\ \mathrm{J}$.`,
          t`The floor is smooth, so this is the net work: $100$ $= \dfrac{1}{2} \times 2 \times v^2$.`,
          t`$v^2 = 100$, so $v = 10\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (ix)" },
      stem: t`A force decreases linearly from $8\ \mathrm{N}$ to $4\ \mathrm{N}$ while it moves an object along its line from $x = 2\ \mathrm{m}$ to $x = 5\ \mathrm{m}$. How much work does it do?`,
      verify: { kind: "value", inputs: { F1: "8", F2: "4", x1: "2", x2: "5" }, params: { ask: "linear" } },
      options: [
        { key: "A", text: t`$12\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M5", value: "12" },
        { key: "B", text: t`$30\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M6", value: "30" },
        { key: "C", text: t`$18\ \mathrm{J}$`, correct: true, value: "18" },
        { key: "D", text: t`$24\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M4", value: "24" },
      ],
      solution: {
        steps: [
          t`The work is the trapezium under the $F$-$x$ graph: average force $\dfrac{8 + 4}{2}$ $= 6\ \mathrm{N}$.`,
          t`Displacement $5 - 2 = 3\ \mathrm{m}$, so $W = 6 \times 3$ $= 18\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Solved Ex.4.4" },
      stem: t`In a certain region a force, in newton, varies as $F = 3x^2 - 2x + 1$ with $x$ in metre. It moves an object from $x = 10\ \mathrm{cm}$ to $x = 30\ \mathrm{cm}$. How much work does it do?`,
      verify: { kind: "value", inputs: { a: "3", b: "-2", c: "1", x1_cm: "10", x2_cm: "30" }, params: { ask: "integral" } },
      options: [
        { key: "A", text: t`$0.237\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M7", value: "0.237000000000000" },
        { key: "B", text: t`$25200\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M8", value: "25200" },
        { key: "C", text: t`$0.134\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M5", value: "0.134000000000000" },
        { key: "D", text: t`$0.146\ \mathrm{J}$`, correct: true, value: "0.146000000000000" },
      ],
      solution: {
        steps: [
          t`$W$ $= \displaystyle\int_{0.1}^{0.3} (3x^2 - 2x + 1)\,dx$ $= \left[x^3 - x^2 + x\right]_{0.1}^{0.3}$.`,
          t`At $0.3$: $0.027 - 0.09 + 0.3$ $= 0.237$; at $0.1$: $0.001 - 0.01 + 0.1$ $= 0.091$.`,
          t`$W = 0.237 - 0.091$ $= 0.146\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (ii)" },
      stem: t`A lighter body A of mass $2\ \mathrm{kg}$ and a heavier body B of mass $8\ \mathrm{kg}$ are at rest. Each is given the same linear momentum. What is the ratio $\dfrac{K_A}{K_B}$ of their kinetic energies?`,
      verify: { kind: "value", inputs: { mA: "2", mB: "8" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M10", value: "1" },
        { key: "B", text: t`$16$`, correct: false, misconceptionId: "C03-M11", value: "16" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$0.25$`, correct: false, misconceptionId: "C03-M9", value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`$K = \dfrac{p^2}{2m}$, and $p$ is the same for both.`,
          t`$\dfrac{K_A}{K_B}$ $= \dfrac{m_B}{m_A}$ $= \dfrac{8}{2}$ $= 4$: the lighter body has more.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (vi)" },
      stem: t`$30000$ litre of oil of density $0.8\ \mathrm{g/cc}$ is pumped from a ship into a storage tank $15\ \mathrm{m}$ higher, in $20$ minutes. What is the power of the pump? ($g = 10\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { V_L: "30000", rho: "4/5", h: "15", t_min: "20", g: "10" }, params: { ask: "pump" } },
      options: [
        { key: "A", text: t`$3000\ \mathrm{W}$`, correct: true, value: "3000" },
        { key: "B", text: t`$1.8 \times 10^{5}\ \mathrm{W}$`, correct: false, misconceptionId: "C03-M12", value: "180000" },
        { key: "C", text: t`$3750\ \mathrm{W}$`, correct: false, misconceptionId: "C03-M13", value: "3750" },
        { key: "D", text: t`$300\ \mathrm{W}$`, correct: false, misconceptionId: "C03-M14", value: "300" },
      ],
      solution: {
        steps: [
          t`Mass: $30000 \times 0.8$ $= 24000\ \mathrm{kg}$.`,
          t`Work: $mgh = 24000 \times 10 \times 15$ $= 3.6 \times 10^6\ \mathrm{J}$.`,
          t`$P = \dfrac{3.6 \times 10^6}{1200}$ $= 3000\ \mathrm{W}$.`,
        ],
      },
    },
  ],
};
