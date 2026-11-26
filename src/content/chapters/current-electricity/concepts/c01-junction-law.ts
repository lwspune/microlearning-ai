import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Three wires meet at a point. $5\ \mathrm{A}$ flows in along one and $3\ \mathrm{A}$ along another. Can the third wire carry anything but $8\ \mathrm{A}$ out?`,
    reveal: t`No. Charge cannot pile up at the meeting point, so $8\ \mathrm{A}$ must leave. That is Kirchhoff's first law: at any junction, the currents in equal the currents out.`,
  },
  explanation: {
    intuition: [
      t`A **junction** is a point in a circuit where three or more wires meet.`,
      t`A **current** is the rate of flow of charge: $I = \dfrac{q}{t}$.`,
      t`Charge cannot be created, destroyed or stored at a junction.`,
      t`So the charge that flows in each second equals the charge that flows out.`,
      t`In other words, the currents into a junction add up to the currents out of it.`,
    ],
    formal: [
      {
        title: "Kirchhoff's first law",
        points: [
          t`The book's statement: the algebraic sum of the currents at a junction is zero, $\Sigma I = 0$.`,
          t`**Algebraic** means with signs: currents towards the junction count $+$, currents away count $-$.`,
          t`For $I_1$, $I_2$ in and $I_3$, $I_4$ out: $I_1 + I_2 - I_3 - I_4 = 0$.`,
          t`The same thing: $I_1 + I_2 = I_3 + I_4$, the currents in equal the currents out.`,
          t`It is a statement of the **conservation of charge**.`,
        ],
      },
      {
        title: "Finding an unknown current",
        points: [
          t`Mark each current's direction from its arrow: in or out of the junction.`,
          t`Guess a direction for the unknown current, and write currents in = currents out.`,
          t`A negative answer means the current flows opposite to the guess.`,
          t`Current is a scalar: add the numbers, not arrows. The angles between the wires do not matter.`,
          t`Along a chain of junctions, solve one junction at a time, carrying each answer on.`,
        ],
      },
      {
        title: "A current dividing in two",
        points: [
          t`Two resistors $R_1$ and $R_2$ in **parallel** join the same two junctions, so they share one p.d. $V$.`,
          t`By Ohm's law $I_1 = \dfrac{V}{R_1}$ and $I_2 = \dfrac{V}{R_2}$: the smaller resistance carries more current.`,
          t`The junction law gives $I = I_1 + I_2$.`,
          t`Together: $I_2 = \dfrac{IR_1}{R_1 + R_2}$, and $I_1 = \dfrac{IR_2}{R_1 + R_2}$.`,
        ],
      },
      {
        title: "Where the law holds",
        points: [
          t`A resistor does not use up current: the current leaving it equals the current entering it.`,
          t`What a resistor takes is energy, converted to heat; the loop law deals with energy.`,
          t`Kirchhoff's laws hold for DC and for AC.`,
          t`For AC, apply them to the **instantaneous** values: the currents at the same instant.`,
        ],
      },
    ],
    worked: {
      prompt: t`At a junction P, $4\ \mathrm{A}$ and $2\ \mathrm{A}$ flow in and $7\ \mathrm{A}$ flows out. Find the current $I_4$ in the fourth wire, and its direction.`,
      steps: [
        t`Currents in: $4\ \mathrm{A}$ and $2\ \mathrm{A}$. Current out: $7\ \mathrm{A}$.`,
        t`Guess that $I_4$ flows out of P.`,
        t`In = out: $4 + 2 = 7 + I_4$, so $I_4 = -1\ \mathrm{A}$.`,
        t`The minus sign says the guess was wrong: $1\ \mathrm{A}$ flows into P along the fourth wire.`,
      ],
      answer: t`$1\ \mathrm{A}$, flowing into P`,
      figure: {
        alt: "A junction P with four wires. Step 1: 4 A flows in from the left, 2 A flows in from below and 7 A flows out upwards. Step 2: the fourth wire, to the right, with its current I₄ guessed as flowing out. Step 4: the arrow reversed: 1 A actually flows into P along that wire.",
        axes: "none",
        view: { x: [-3, 3], y: [-2.6, 2.6] },
        elements: [
          { kind: "segment", from: [0, 0], to: [-2.4, 0], step: 1 },
          { kind: "vector", from: [-1.74, 0], to: [-1.14, 0], label: "4 A", labelAt: "n", step: 1 },
          { kind: "segment", from: [0, 0], to: [0, -2.4], step: 1 },
          { kind: "vector", from: [0, -1.74], to: [0, -1.14], label: "2 A", labelAt: "w", step: 1 },
          { kind: "segment", from: [0, 0], to: [0, 2.4], step: 1 },
          { kind: "vector", from: [0, 1.14], to: [0, 1.74], label: "7 A", labelAt: "e", step: 1 },
          { kind: "segment", from: [0, 0], to: [2.4, 0], step: 2 },
          { kind: "vector", from: [1.62, 0], to: [2.22, 0], label: "I₄ ?", labelAt: "s", step: 2, tone: "muted" },
          { kind: "vector", from: [1.14, 0], to: [0.54, 0], label: "1 A", labelAt: "s", step: 4, tone: "good" },
          { kind: "point", at: [0, 0], label: "P", labelAt: "sw" },
        ],
      },
    },
    visualSpec: t`Drag the current in one wire of a junction and watch the current in the last wire change so that in always equals out.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Adds every current at a junction, whether it flows in or out.",
      remediation: t`Currents in count $+$ and currents out count $-$: the currents in equal the currents out.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Misreads an arrow, taking a current that leaves the junction as one that enters (the book's own slip in Solved Ex. 9.1).",
      remediation: "Read each arrow at the junction itself: an arrow pointing away is a current out, and it is subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Adds currents as vectors, using the angle between the wires.",
      remediation: "Current is a scalar. At a junction add the currents as numbers: the directions of the wires do not matter.",
      fallback: { kind: "ext", topic: "scalars and vectors (Std XI Physics)" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks a current splits equally between branches, whatever their resistances.",
      remediation: t`Parallel branches share one p.d., so $I = \dfrac{V}{R}$ in each: the smaller resistance takes the larger current.`,
      fallback: { kind: "ext", topic: "Ohm's law and electric current (Std XI Physics)" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks more current flows through the larger resistance.",
      remediation: t`With the same p.d. across both, $I = \dfrac{V}{R}$: the larger resistance carries the smaller current.`,
      fallback: { kind: "ext", topic: "Ohm's law and electric current (Std XI Physics)" },
    },
    {
      id: "C01-M6",
      mistake: "Takes the junction law as conservation of energy, mixing up Kirchhoff's two laws.",
      remediation: "The junction law conserves charge: none piles up at a junction. The loop law is the one about energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks Kirchhoff's laws hold only for steady (DC) currents.",
      remediation: "Charge and energy are conserved at every instant, so the laws hold for AC too, applied to instantaneous values.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Treats current as a flow of matter, so the junction law would conserve mass.",
      remediation: t`Current is a flow of charge, $I = \dfrac{q}{t}$. The junction law says charge is conserved.`,
      fallback: { kind: "ext", topic: "Ohm's law and electric current (Std XI Physics)" },
    },
    {
      id: "C01-M9",
      mistake: "Leaves out one branch at a junction.",
      remediation: "List every wire at the junction before writing in = out; each one carries its own current.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks a resistor uses up part of the current passing through it.",
      remediation: "The current out of a resistor equals the current into it; the resistor takes energy from the charges, not charge.",
      fallback: { kind: "ext", topic: "Ohm's law and electric current (Std XI Physics)" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Solved Ex.9.1" },
      stem: t`The figure shows the currents in part of a circuit. What is the current $I_6$?`,
      figure: {
        alt: "Part of a circuit: a straight wire through junctions B, C and D. I₁ = 17 A flows into B from the left; I₂ = 3 A leaves B downwards; I₃ flows from B to C; I₄ = 2 A leaves C downwards; I₅ flows from C to D; I₇ = 9 A leaves D upwards; I₆ flows on to the right of D.",
        axes: "none",
        view: { x: [-0.3, 10], y: [-2.1, 2.1] },
        elements: [
          { kind: "segment", from: [0, 0], to: [9.5, 0] },
          { kind: "segment", from: [2.2, 0], to: [2.2, -1.7] },
          { kind: "segment", from: [4.8, 0], to: [4.8, -1.7] },
          { kind: "segment", from: [7.4, 0], to: [7.4, 1.7] },
          { kind: "point", at: [2.2, 0], label: "B", labelAt: "ne" },
          { kind: "point", at: [4.8, 0], label: "C", labelAt: "ne" },
          { kind: "point", at: [7.4, 0], label: "D", labelAt: "sw" },
          { kind: "vector", from: [0.58, 0], to: [1.18, 0], label: "I₁ = 17 A", labelAt: "n" },
          { kind: "vector", from: [2.2, -0.635], to: [2.2, -1.235], label: "I₂ = 3 A", labelAt: "w" },
          { kind: "vector", from: [3.2, 0], to: [3.8, 0], label: "I₃", labelAt: "n" },
          { kind: "vector", from: [4.8, -0.635], to: [4.8, -1.235], label: "I₄ = 2 A", labelAt: "w" },
          { kind: "vector", from: [5.8, 0], to: [6.4, 0], label: "I₅", labelAt: "n" },
          { kind: "vector", from: [7.4, 0.635], to: [7.4, 1.235], label: "I₇ = 9 A", labelAt: "e" },
          { kind: "vector", from: [8.15, 0], to: [8.75, 0], label: "I₆", labelAt: "n" },
        ],
      },
      verify: { kind: "value", inputs: { I1: "17", I2: "3", I4: "2", I7: "9" }, params: { ask: "chain" } },
      options: [
        { key: "A", text: t`$3\ \mathrm{A}$`, correct: true, value: "3" },
        { key: "B", text: t`$31\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M1", value: "31" },
        { key: "C", text: t`$7\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M2", value: "7" },
        { key: "D", text: t`$12\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M9", value: "12" },
      ],
      solution: {
        steps: [
          t`At B: $I_1 = I_2 + I_3$, so $I_3 = 17 - 3 = 14\ \mathrm{A}$.`,
          t`At C, $I_4$ leaves: $I_3 = I_4 + I_5$, so $I_5 = 14 - 2 = 12\ \mathrm{A}$.`,
          t`At D, $I_7$ leaves: $I_5 = I_6 + I_7$, so $I_6 = 12 - 9 = 3\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.1 (i)" },
      stem: t`Kirchhoff's first law, $\Sigma I = 0$ at a junction, deals with the conservation of`,
      verify: { kind: "value", inputs: {  }, params: { ask: "law" } },
      options: [
        { key: "A", text: t`charge`, correct: true, value: "charge" },
        { key: "B", text: t`energy`, correct: false, misconceptionId: "C01-M6", value: "energy" },
        { key: "C", text: t`momentum`, correct: false, misconceptionId: "C01-M3", value: "momentum" },
        { key: "D", text: t`mass`, correct: false, misconceptionId: "C01-M8", value: "mass" },
      ],
      solution: {
        steps: [
          t`$\Sigma I = 0$ says the charge flowing into a junction each second equals the charge flowing out.`,
          t`Charge is neither created nor stored there: the law states the conservation of charge.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.2 (iv)" },
      stem: t`Which statement about Kirchhoff's laws is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ac" } },
      options: [
        { key: "A", text: t`The junction law is a statement of the conservation of energy.`, correct: false, misconceptionId: "C01-M6", value: "junction_energy" },
        { key: "B", text: t`A resistor uses up part of the current, so less current leaves it than enters it.`, correct: false, misconceptionId: "C01-M10", value: "used_up" },
        { key: "C", text: t`They hold for AC as well as DC, applied to the instantaneous currents and voltages.`, correct: true, value: "instantaneous" },
        { key: "D", text: t`They hold only for steady (DC) currents, not for AC.`, correct: false, misconceptionId: "C01-M7", value: "dc_only" },
      ],
      solution: {
        steps: [
          t`The junction law is conservation of charge and the loop law conservation of energy.`,
          t`Both hold at every instant, so the laws apply to AC as well as DC, using instantaneous values.`,
          t`A resistor converts energy, not charge: the current out of it equals the current in.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`Three wires meet at a junction P, as shown. Two of them, at right angles, carry $3\ \mathrm{A}$ and $4\ \mathrm{A}$. What current $I$ flows in the third wire?`,
      figure: {
        alt: "A junction P with three wires: 3 A flows in from the left, 4 A flows in from below, at right angles to it, and a current I flows out along the third wire, up and to the right.",
        axes: "none",
        view: { x: [-3, 3], y: [-2.6, 2.6] },
        elements: [
          { kind: "segment", from: [0, 0], to: [-2.4, 0] },
          { kind: "vector", from: [-1.74, 0], to: [-1.14, 0], label: "3 A", labelAt: "n" },
          { kind: "segment", from: [0, 0], to: [0, -2.4] },
          { kind: "vector", from: [0, -1.74], to: [0, -1.14], label: "4 A", labelAt: "w" },
          { kind: "segment", from: [0, 0], to: [1.6971, 1.6971] },
          { kind: "vector", from: [0.8061, 0.8061], to: [1.2304, 1.2304], label: "I", labelAt: "se" },
          { kind: "point", at: [0, 0], label: "P", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: { c1: "3", c2: "4" }, params: { ask: "node", dirs: "in,in", ang: "0,90", misread: "1", drop: "1" } },
      options: [
        { key: "A", text: t`$7\ \mathrm{A}$`, correct: true, value: "7" },
        { key: "B", text: t`$5\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M3", value: "5" },
        { key: "C", text: t`$1\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M2", value: "1" },
        { key: "D", text: t`$4\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M9", value: "4" },
      ],
      solution: {
        steps: [
          t`Both $3\ \mathrm{A}$ and $4\ \mathrm{A}$ flow into P.`,
          t`Current is a scalar, so the angle between the wires does not matter.`,
          t`In = out: $I = 3 + 4 = 7\ \mathrm{A}$, flowing out of P.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A current of $6\ \mathrm{A}$ reaches junction A and divides between a $2\ \Omega$ and a $4\ \Omega$ resistor joined in parallel between A and B. What current flows through the $4\ \Omega$ resistor?`,
      verify: { kind: "value", inputs: { I: "6", R1: "2", R2: "4" }, params: { ask: "div" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{A}$`, correct: true, value: "2" },
        { key: "B", text: t`$3\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M4", value: "3" },
        { key: "C", text: t`$4\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M5", value: "4" },
        { key: "D", text: t`$6\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M9", value: "6" },
      ],
      solution: {
        steps: [
          t`The two resistors share one p.d., so $I_1 R_1 = I_2 R_2$ and $I_1 + I_2 = 6\ \mathrm{A}$.`,
          t`$I_2 = \dfrac{IR_1}{R_1 + R_2} = \dfrac{6 \times 2}{2 + 4}$`,
          t`$= 2\ \mathrm{A}$ through the $4\ \Omega$ resistor (and $4\ \mathrm{A}$ through the $2\ \Omega$).`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`Four wires meet at a junction P, as shown. What is the current $I$?`,
      figure: {
        alt: "A junction P with four wires: 8 A flows in from the left, 3 A flows out upwards, 1 A flows out downwards, and a current I flows out to the right.",
        axes: "none",
        view: { x: [-3, 3], y: [-2.6, 2.6] },
        elements: [
          { kind: "segment", from: [0, 0], to: [-2.4, 0] },
          { kind: "vector", from: [-1.74, 0], to: [-1.14, 0], label: "8 A", labelAt: "n" },
          { kind: "segment", from: [0, 0], to: [0, 2.4] },
          { kind: "vector", from: [0, 1.14], to: [0, 1.74], label: "3 A", labelAt: "e" },
          { kind: "segment", from: [0, 0], to: [0, -2.4] },
          { kind: "vector", from: [0, -1.14], to: [0, -1.74], label: "1 A", labelAt: "e" },
          { kind: "segment", from: [0, 0], to: [2.4, 0] },
          { kind: "vector", from: [1.14, 0], to: [1.74, 0], label: "I", labelAt: "s" },
          { kind: "point", at: [0, 0], label: "P", labelAt: "sw" },
        ],
      },
      verify: { kind: "value", inputs: { c1: "8", c2: "3", c3: "1" }, params: { ask: "node", dirs: "in,out,out", misread: "2", drop: "3" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M2", value: "10" },
        { key: "B", text: t`$5\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M9", value: "5" },
        { key: "C", text: t`$4\ \mathrm{A}$`, correct: true, value: "4" },
        { key: "D", text: t`$12\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M1", value: "12" },
      ],
      solution: {
        steps: [
          t`In: $8\ \mathrm{A}$. Out: $3\ \mathrm{A}$, $1\ \mathrm{A}$ and $I$.`,
          t`In = out: $8 = 3 + 1 + I$.`,
          t`$I = 4\ \mathrm{A}$, flowing out of P.`,
        ],
      },
    },
  ],
};
