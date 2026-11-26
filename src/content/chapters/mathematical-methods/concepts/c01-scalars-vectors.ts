import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A friend says, ‘Walk $100\ \mathrm{m}$ and you will reach my house.’ You walk $100\ \mathrm{m}$ and you are nowhere near it. What did they forget to tell you?`,
    reveal: t`The **direction**. Mass or time needs only a number and a unit, but a displacement needs a direction too: it is a **vector**.`,
  },
  explanation: {
    intuition: [
      t`Some quantities need only a size: $2\ \mathrm{kg}$ of rice, $30\ \mathrm{s}$ of time.`,
      t`Others also need a direction: $5\ \mathrm{m}$ towards east is not $5\ \mathrm{m}$ towards west.`,
      t`A **scalar** has magnitude (size) only; a **vector** has magnitude and direction.`,
      t`We draw a vector as an arrow: its length shows the size, its head the direction.`,
      t`Doubling a vector doubles the arrow; a minus sign turns it round.`,
    ],
    formal: [
      {
        title: "Scalars and vectors",
        points: [
          t`A **scalar** is fully described by a number and a unit: mass, length, time, speed, work, energy, temperature.`,
          t`A **vector** also needs a direction: displacement, velocity, acceleration, force, momentum.`,
          t`A vector is written $\vec{A}$; its magnitude is $|\vec{A}|$ or simply $A$, never negative.`,
          t`Distance travelled is a scalar; **displacement**, the straight line from start to end with its direction, is a vector.`,
          t`Electric current flows along a wire, but it is a scalar: currents add as numbers, not as arrows.`,
        ],
      },
      {
        title: "Special vectors",
        points: [
          t`**Equal vectors** have the same magnitude and the same direction.`,
          t`The **negative** of $\vec{A}$, written $-\vec{A}$, has the same magnitude and the opposite direction.`,
          t`A **unit vector** has magnitude $1$; it only shows a direction. The unit vector along $\vec{A}$ is $\hat{A} = \dfrac{\vec{A}}{A}$.`,
          t`A **zero (null) vector** has magnitude zero and no definite direction.`,
        ],
      },
      {
        title: "Multiplying by a scalar",
        points: [
          t`$\lambda\vec{A}$ is a vector of magnitude $|\lambda|A$.`,
          t`For $\lambda > 0$ it points along $\vec{A}$; for $\lambda < 0$, opposite to $\vec{A}$.`,
          t`$\hat{i}$, $\hat{j}$, $\hat{k}$ are unit vectors along the $x$-, $y$- and $z$-axes.`,
          t`A vector can be written $\vec{A}$ $= A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$, as the next concepts show.`,
          t`Then $\lambda\vec{A}$ $= \lambda A_x\hat{i} + \lambda A_y\hat{j} + \lambda A_z\hat{k}$: every component is multiplied by $\lambda$.`,
          t`So two vectors point the same way when their components are in the same positive ratio.`,
        ],
      },
    ],
    worked: {
      prompt: t`Show that $\vec{a}$ $= 8\hat{i} - 4\hat{j} + 10\hat{k}$ and $\vec{b}$ $= 4\hat{i} - 2\hat{j} + 5\hat{k}$ have the same direction, and compare their magnitudes.`,
      steps: [
        t`Divide matching components: $\dfrac{8}{4} = \dfrac{-4}{-2}$ $= \dfrac{10}{5}$ $= 2$.`,
        t`So $\vec{a} = 2\vec{b}$: a positive multiple of $\vec{b}$.`,
        t`A positive multiple keeps the direction, so $\vec{a}$ and $\vec{b}$ point the same way.`,
        t`Its magnitude is $2$ times as large: $a = 2b$.`,
      ],
      answer: t`$\vec{a} = 2\vec{b}$: the same direction, twice the magnitude`,
    },
    visualSpec: t`Drag a slider for $\lambda$ and watch the arrow $\lambda\vec{A}$ stretch, shrink to nothing at $0$, and turn round as $\lambda$ goes negative.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks equal magnitudes make equal vectors.",
      remediation: "Equal vectors need the same magnitude **and** the same direction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks the same direction makes equal vectors.",
      remediation: "Two arrows pointing the same way are equal only if they are also the same length.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Mixes up equal vectors and negative vectors.",
      remediation: t`Same magnitude but opposite direction gives $-\vec{A}$, the negative vector, not an equal one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks anything that flows one way is a vector.",
      remediation: "Current flows along a wire but adds as a number, so it is a scalar; displacement is a vector.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Mixes up distance and displacement.",
      remediation: "Distance is the length of the path, a scalar; displacement, from start to end with its direction, is the vector.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Reads a minus sign as a direction.",
      remediation: t`$-5\ ^\circ\mathrm{C}$ is just a number below zero on a scale: temperature has no direction, so it is a scalar.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks a negative number changes only the size.",
      remediation: t`Multiplying by a negative number also turns the vector round: $-3\vec{A}$ points opposite to $\vec{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: t`Treats $\lambda\vec{A}$ as the number $\lambda A$, sign and all.`,
      remediation: t`A scalar times a vector is a vector of magnitude $|\lambda|A$; a magnitude is never negative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Divides by the number instead of multiplying.",
      remediation: t`$\lambda\vec{A}$ multiplies the magnitude by $|\lambda|$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks the same direction means components differ by the same amount.",
      remediation: t`Vectors in the same direction have components in the same **ratio**: $\dfrac{P_x}{Q_x}$ $= \dfrac{P_y}{Q_y}$ $= \dfrac{P_z}{Q_z}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Turns the ratio upside down.",
      remediation: t`If $\vec{P} = 3\vec{Q}$, each component of $\vec{Q}$ is a third of $\vec{P}$'s, not three times it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: t`Drops the minus sign in front of $m$.`,
      remediation: t`The $y$-component of $\vec{Q}$ is $-m$; set $-m$ equal to the value you find, then solve for $m$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks a negative number only turns the vector round, leaving its size.",
      remediation: t`$\lambda\vec{A}$ has magnitude $|\lambda|A$: the number scales the size too.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.1 (ii)" },
      stem: t`For two vectors to be equal, they should have the`,
      verify: { kind: "value", inputs: {  }, params: { ask: "equal" } },
      options: [
        { key: "A", text: t`same magnitude and direction`, correct: true, value: "same_size_and_direction" },
        { key: "B", text: t`same magnitude`, correct: false, misconceptionId: "C01-M1", value: "same_size" },
        { key: "C", text: t`same direction`, correct: false, misconceptionId: "C01-M2", value: "same_direction" },
        { key: "D", text: t`same magnitude but opposite direction`, correct: false, misconceptionId: "C01-M3", value: "same_size_opposite" },
      ],
      solution: {
        steps: [
          t`Two vectors are equal only when nothing about them differs.`,
          t`So they need the same magnitude and the same direction.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`Which of these is a vector quantity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`The displacement of a car, $40\ \mathrm{km}$ towards north`, correct: true, value: "displacement" },
        { key: "B", text: t`An electric current of $2\ \mathrm{A}$ flowing along a wire`, correct: false, misconceptionId: "C01-M4", value: "current" },
        { key: "C", text: t`The distance a runner covers, $400\ \mathrm{m}$ round a track`, correct: false, misconceptionId: "C01-M5", value: "distance" },
        { key: "D", text: t`A temperature of $-5\ ^\circ\mathrm{C}$`, correct: false, misconceptionId: "C01-M6", value: "temperature" },
      ],
      solution: {
        steps: [
          t`Distance, current and temperature are each given by a number and a unit alone.`,
          t`Displacement needs a direction as well, $40\ \mathrm{km}$ towards north, so it is the vector.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`A vector $\vec{A}$ has magnitude $5$ units and points towards north. What is $-3\vec{A}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "times" } },
      options: [
        { key: "A", text: t`$-15$ units, a scalar with no direction`, correct: false, misconceptionId: "C01-M8", value: "minus_fifteen_scalar" },
        { key: "B", text: t`$\dfrac{5}{3}$ units, towards south`, correct: false, misconceptionId: "C01-M9", value: "five_thirds_south" },
        { key: "C", text: t`$15$ units, towards south`, correct: true, value: "fifteen_south" },
        { key: "D", text: t`$15$ units, towards north`, correct: false, misconceptionId: "C01-M7", value: "fifteen_north" },
      ],
      solution: {
        steps: [
          t`The magnitude is $|-3| \times 5 = 15$ units.`,
          t`The minus sign reverses the direction: north becomes south.`,
          t`So $-3\vec{A}$ is $15$ units towards south, still a vector.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.9" },
      stem: t`$\vec{P} = 6\hat{i} - 3\hat{j} + 12\hat{k}$ and $\vec{Q} = 2\hat{i} - m\hat{j} + 4\hat{k}$ have the same direction. What is $m$?`,
      verify: { kind: "value", inputs: { px: "6", py: "-3", qx: "2" }, params: { ask: "m" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C01-M10", value: "7" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C01-M11", value: "9" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C01-M12", value: "-1" },
      ],
      solution: {
        steps: [
          t`The same direction needs the same ratio of components: $\dfrac{6}{2} = 3$, and $\dfrac{12}{4} = 3$.`,
          t`So $\dfrac{-3}{-m} = 3$, giving $-m = -1$.`,
          t`$m = 1$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A vector $\vec{A}$ has magnitude $6$ units. What is the magnitude of $\vec{B} = -\dfrac{1}{3}\vec{A}$?`,
      verify: { kind: "value", inputs: { lam: "-1/3", a: "6" }, params: { ask: "mag" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C01-M8", value: "-2" },
        { key: "C", text: t`$18$`, correct: false, misconceptionId: "C01-M9", value: "18" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C01-M13", value: "6" },
      ],
      solution: {
        steps: [
          t`The magnitude of $\lambda\vec{A}$ is $|\lambda|A$.`,
          t`$\left|-\dfrac{1}{3}\right| \times 6$ $= 2$ units; the minus sign only reverses the direction.`,
        ],
      },
    },
  ],
};
