import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Push a box along the floor and it stops soon after you stop pushing. Aristotle concluded that a body needs a force to keep moving. Was he right?`,
    reveal: t`No. The floor's friction is a force that stops the box. On smoother floors it slides further; with no opposing force at all it would never stop. A force is needed to **change** motion, not to keep it.`,
  },
  explanation: {
    intuition: [
      t`A **force** is a push or a pull that can change a body's motion.`,
      t`With no net force, a body at rest stays at rest and a moving body keeps moving in a straight line.`,
      t`A net force changes the body's velocity: the bigger the force, the bigger the change.`,
      t`The same force changes the velocity of a heavier body less.`,
      t`Forces come in pairs: if A pushes B, then B pushes A back, equally and oppositely.`,
      t`These laws hold for observers who are not themselves accelerating.`,
    ],
    formal: [
      {
        title: "First law: inertia",
        points: [
          t`**First law:** a body stays at rest, or in uniform motion along a straight line, unless an external unbalanced force acts on it.`,
          t`**Inertia** is this tendency of a body to keep its state of rest or of uniform motion.`,
          t`Rest and uniform motion are alike: both need an unbalanced force to change.`,
          t`Moving bodies stop in daily life because friction and air resistance oppose them (Galileo, correcting **Aristotle's fallacy**).`,
          t`So the law defines force: whatever changes a body's state of motion.`,
        ],
      },
      {
        title: "Second law: force and momentum",
        points: [
          t`**Linear momentum** is $\vec{p} = m\vec{v}$, mass times velocity.`,
          t`**Second law:** the net force equals the rate of change of momentum, $\vec{F} = \dfrac{d\vec{p}}{dt}$.`,
          t`For a body of fixed mass this is $\vec{F} = m\vec{a}$; the unit of force, $1\ \mathrm{N}$, is $1\ \mathrm{kg\,m/s^2}$.`,
          t`A jet throws out mass at a rate $\dfrac{dm}{dt}$ with speed $v$, so the force on it is $F = \dfrac{dm}{dt}v$.`,
          t`For water from a bore of area $A$, $\dfrac{dm}{dt} = \rho Av$, so $F = \rho Av^2$.`,
        ],
      },
      {
        title: "Third law: action and reaction",
        points: [
          t`**Third law:** to every action there is an equal and opposite reaction.`,
          t`If A exerts $\vec{F}$ on B, then B exerts $-\vec{F}$ on A.`,
          t`The two forces act on **different** bodies, so they never cancel each other.`,
          t`The Earth pulls a book down; the reaction is the book pulling the Earth up.`,
          t`The table's push on the book is a different force; it balances the weight only because the book is at rest.`,
        ],
      },
      {
        title: "Strings and connected bodies",
        points: [
          t`A light, inextensible string pulls with the same **tension** $T$ at both ends.`,
          t`Apply $F = ma$ to each body separately, with the forces acting on that body only.`,
          t`In an **Atwood machine**, masses $m_1 < m_2$ hang over a pulley and move with the same size of acceleration.`,
          t`$m_2g - T = m_2a$ and $T - m_1g = m_1a$.`,
          t`So $a$ $= \dfrac{(m_2 - m_1)g}{m_1 + m_2}$ and $T = \dfrac{2m_1m_2g}{m_1 + m_2}$.`,
          t`$T$ lies between the two weights: it is not the weight of either mass.`,
        ],
      },
      {
        title: "Inertial frames",
        points: [
          t`A **frame of reference** is the place, with its clocks and scales, from which we measure motion.`,
          t`An **inertial frame** is one that is not accelerating; Newton's laws hold in it.`,
          t`In an accelerating (**non-inertial**) frame, you feel pushed opposite to the frame's acceleration.`,
          t`A scale in a lift reads the normal force $N$: $N - mg = ma$, with $a$ upwards positive.`,
          t`Lift accelerating up: $N = m(g + a)$; accelerating down: $N = m(g - a)$.`,
          t`The direction of the acceleration counts, not the direction of motion.`,
        ],
      },
    ],
    worked: {
      prompt: t`An Atwood machine carries masses of $4\ \mathrm{kg}$ and $6\ \mathrm{kg}$. Find the acceleration of the masses and the tension in the string. ($g = 9.8\ \mathrm{m/s^2}$)`,
      steps: [
        t`The $6\ \mathrm{kg}$ mass goes down, the $4\ \mathrm{kg}$ mass goes up, both with acceleration $a$.`,
        t`Net force on the whole string-and-masses: $(6 - 4)g$ $= 19.6\ \mathrm{N}$, moving $10\ \mathrm{kg}$.`,
        t`$a = \dfrac{19.6}{10}$ $= 1.96\ \mathrm{m/s^2}$.`,
        t`For the $4\ \mathrm{kg}$ mass: $T - 4g = 4a$, so $T = 4(9.8 + 1.96)$ $\approx 47.0\ \mathrm{N}$.`,
      ],
      answer: t`$a = 1.96\ \mathrm{m/s^2}$; $T \approx 47.0\ \mathrm{N}$`,
    },
    visualSpec: t`Set two masses on an Atwood machine and watch the acceleration and the tension change; set the lift's acceleration and watch the scale reading.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks steady motion pushes you, as if motion itself needs a force.",
      remediation: "In uniform motion along a straight line nothing changes, so you feel no push (first law). Only acceleration does.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Takes the normal force as the reaction to the weight.",
      remediation: "A third-law pair acts on two different bodies. The weight is the Earth pulling the book; its reaction is the book pulling the Earth.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks action and reaction cancel each other.",
      remediation: "Action and reaction act on different bodies, so they can never cancel: each changes the motion of its own body.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Takes the tension (or the scale reading) as the weight, as if nothing accelerated.",
      remediation: t`A string or scale supplies the weight only at rest. When the body accelerates, use $T - mg = ma$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Uses $g - a$ for an upward acceleration.`,
      remediation: t`Pulling a load upwards with acceleration $a$ needs $T - mg = ma$, so $T = m(g + a)$: more than the weight.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Takes the net force on the masses as the tension.",
      remediation: t`$(m_2 - m_1)g$ is the net force on the whole system. Find $a$ from it, then $T$ from one mass: $T - m_1g = m_1a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Drops the $2$ in $T = \dfrac{2m_1m_2g}{m_1 + m_2}$.`,
      remediation: t`From $T = m_1(g + a)$ with $a$ $= \dfrac{(m_2 - m_1)g}{m_1 + m_2}$, $T = \dfrac{2m_1m_2g}{m_1 + m_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Counts only the masses below the mass under the string.",
      remediation: t`The 6th string holds the 6th mass and all below it: $11 - 6 = 5$ masses.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: t`Forgets the weight and gives $N = ma$.`,
      remediation: t`Two forces act on the person: $N$ up and $mg$ down. So $N - mg = ma$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Takes the mass of water thrown out per second as the force.",
      remediation: t`Force is the rate of change of **momentum**: each second $\rho Av$ of water gains speed $v$, so $F = \rho Av^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: t`Converts $\mathrm{cm^2}$ to $\mathrm{m^2}$ with $10^{-2}$.`,
      remediation: t`$1\ \mathrm{cm}$ $= 10^{-2}\ \mathrm{m}$, so $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: t`Leaves the density in $\mathrm{g/cc}$.`,
      remediation: t`Work in SI: $1\ \mathrm{g/cc}$ $= 1000\ \mathrm{kg/m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Takes the push on the support as the reaction to the weight.",
      remediation: "The weight is a pull between the book and the Earth, so its reaction acts on the Earth, not on the table.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks you are pushed the same way as the frame accelerates.",
      remediation: "In an accelerating frame you feel pushed **opposite** to its acceleration: a bus speeding up forwards throws you back.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Takes the direction of motion as the direction of the acceleration.",
      remediation: "Acceleration is the change of velocity. Moving one way and slowing down means accelerating the other way.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Solved Ex.4.1" },
      stem: t`A garden hose ejects water horizontally at $2\ \mathrm{m/s}$. The bore of the pipe has an area of $5\ \mathrm{cm^2}$, and water has a density of $1\ \mathrm{g/cc}$. What force must the gardener apply to hold the pipe still?`,
      verify: { kind: "value", inputs: { v: "2", A_cm2: "5" }, params: { ask: "hose" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{N}$`, correct: true, value: "2" },
        { key: "B", text: t`$1\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M10", value: "1" },
        { key: "C", text: t`$200\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M11", value: "200" },
        { key: "D", text: t`$0.002\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M12", value: "0.00200000000000000" },
      ],
      solution: {
        steps: [
          t`$A = 5 \times 10^{-4}\ \mathrm{m^2}$ and $\rho = 1000\ \mathrm{kg/m^3}$.`,
          t`Mass ejected per second: $\rho Av$ $= 1000 \times 5 \times 10^{-4} \times 2$ $= 1\ \mathrm{kg/s}$.`,
          t`$F = \dfrac{dm}{dt}v$ $= 1 \times 2$ $= 2\ \mathrm{N}$, pushing the pipe back, so the gardener holds it with $2\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Solved Ex.4.5" },
      stem: t`In an Atwood machine, masses of $3\ \mathrm{kg}$ and $5\ \mathrm{kg}$ hang from the two ends of a light, inextensible string passing over a frictionless pulley. What is the tension in the string? ($g = 9.8\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { m1: "3", m2: "5", g: "9.8" }, params: { ask: "atwood" } },
      options: [
        { key: "A", text: t`$36.8\ \mathrm{N}$`, correct: true, value: "36.8000000000000" },
        { key: "B", text: t`$49\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M4", value: "49" },
        { key: "C", text: t`$19.6\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M6", value: "19.6000000000000" },
        { key: "D", text: t`$18.4\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M7", value: "18.4000000000000" },
      ],
      solution: {
        steps: [
          t`$a = \dfrac{(5 - 3) \times 9.8}{8}$ $= 2.45\ \mathrm{m/s^2}$.`,
          t`For the $3\ \mathrm{kg}$ mass: $T = 3(9.8 + 2.45)$ $\approx 36.8\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (vii)" },
      stem: t`Ten identical masses $m$ hang one below the other on ten strings: string 1 is at the top, then a mass, then string 2, and so on. Holding the top string, the whole system is pulled upwards with an acceleration $\dfrac{g}{2}$. What is the tension in the 6th string from the top?`,
      verify: { kind: "value", inputs: { n: "10", k: "6", f: "1/2" }, params: { ask: "chain" } },
      options: [
        { key: "A", text: t`$6\,mg$`, correct: false, misconceptionId: "C01-M8", value: "6*g*m" },
        { key: "B", text: t`$2.5\,mg$`, correct: false, misconceptionId: "C01-M5", value: "5*g*m/2" },
        { key: "C", text: t`$7.5\,mg$`, correct: true, value: "15*g*m/2" },
        { key: "D", text: t`$5\,mg$`, correct: false, misconceptionId: "C01-M4", value: "5*g*m" },
      ],
      solution: {
        steps: [
          t`The 6th string holds masses 6 to 10: five masses, $5m$.`,
          t`For that load: $T - 5mg = 5m \times \dfrac{g}{2}$.`,
          t`$T = 5m \times \dfrac{3g}{2}$ $= 7.5\,mg$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (iii)" },
      stem: t`A person of mass $60\ \mathrm{kg}$ stands on a weighing machine in a lift. The lift is moving upwards but slowing down at $2\ \mathrm{m/s^2}$. What force does the machine record? ($g = 10\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { m: "60", a: "2", g: "10" }, params: { ask: "lift" } },
      options: [
        { key: "A", text: t`$480\ \mathrm{N}$`, correct: true, value: "480" },
        { key: "B", text: t`$720\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M15", value: "720" },
        { key: "C", text: t`$600\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M4", value: "600" },
        { key: "D", text: t`$120\ \mathrm{N}$`, correct: false, misconceptionId: "C01-M9", value: "120" },
      ],
      solution: {
        steps: [
          t`Moving up and slowing down: the acceleration is $2\ \mathrm{m/s^2}$ **downwards**.`,
          t`$mg - N = ma$, so $N = 60(10 - 2)$ $= 480\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.1 (i)" },
      stem: t`A book rests on a table. The Earth pulls it down with a force $W$, its weight. In Newton's third law, which force is the reaction to $W$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pair" } },
      options: [
        { key: "A", text: t`The book's upward pull on the Earth, which does not cancel $W$`, correct: true, value: "bookPullsEarth" },
        { key: "B", text: t`The table's upward push on the book, which cancels $W$`, correct: false, misconceptionId: "C01-M2", value: "tablePushesBook" },
        { key: "C", text: t`The book's upward pull on the Earth, which cancels $W$`, correct: false, misconceptionId: "C01-M3", value: "bookPullsEarthCancels" },
        { key: "D", text: t`The book's downward push on the table`, correct: false, misconceptionId: "C01-M13", value: "bookPushesTable" },
      ],
      solution: {
        steps: [
          t`$W$ is the Earth pulling the book. Its third-law partner is the book pulling the Earth, upwards, equally.`,
          t`The two act on different bodies, so they do not cancel. The table's push is a separate force on the book.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.2 (v)" },
      stem: t`You are inside a closed capsule and cannot see outside. Suddenly you feel pushed towards your right. Which of these could cause it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "capsule" } },
      options: [
        { key: "A", text: t`The capsule is moving towards your left at a steady speed`, correct: false, misconceptionId: "C01-M1", value: "steadyLeft" },
        { key: "B", text: t`The capsule is moving towards your left and slowing down`, correct: false, misconceptionId: "C01-M15", value: "slowingLeft" },
        { key: "C", text: t`The capsule is speeding up towards your left`, correct: true, value: "speedingLeft" },
        { key: "D", text: t`The capsule is speeding up towards your right`, correct: false, misconceptionId: "C01-M14", value: "speedingRight" },
      ],
      solution: {
        steps: [
          t`You feel pushed opposite to the capsule's acceleration, so the capsule accelerates to your left.`,
          t`Speeding up towards your left does this. Steady motion would give no push, and slowing down while moving left accelerates it to the right.`,
        ],
      },
    },
  ],
};
