import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A wire hangs between the poles of a magnet. Switch on a current and the wire jumps sideways, not towards either pole. Why sideways?`,
    reveal: t`A current is a stream of moving charges, and each feels a force $q\vec{v} \times \vec{B}$ at right angles to the field. Added up over the wire, they push it across the field: $F = BIl\sin\theta$.`,
  },
  explanation: {
    intuition: [
      t`A current in a wire is a stream of moving charges.`,
      t`In a magnetic field each moving charge feels a sideways force.`,
      t`Added together, these forces push the whole wire.`,
      t`The push is at right angles to both the wire and the field.`,
      t`A wire along the field feels no force at all.`,
    ],
    formal: [
      {
        title: "Size of the force",
        points: [
          t`A straight wire of length $l$ carrying current $I$ in a uniform field $\vec{B}$ feels $\vec{F} = I\vec{l} \times \vec{B}$.`,
          t`$\vec{l}$ has the wire's length and points along the current.`,
          t`Its size is $F = BIl\sin\theta$, where $\theta$ is the angle between the wire and $\vec{B}$.`,
          t`It is greatest, $BIl$, when the wire is at right angles to the field.`,
          t`It is zero when the wire lies along the field.`,
        ],
      },
      {
        title: "Direction of the force",
        points: [
          t`The force is at right angles to both the wire and the field.`,
          t`Right-hand rule: curl the fingers from $\vec{l}$ (the current) towards $\vec{B}$; the thumb gives $\vec{F}$.`,
          t`Fleming's left-hand rule gives the same: forefinger along $\vec{B}$, middle finger along $I$, thumb along $\vec{F}$.`,
          t`Reversing the current, or the field, reverses the force.`,
        ],
        figure: {
          alt: "A field into the page, shown by crosses. Step 1: a straight wire across the page carrying a current I to the right. Step 3: the force F on the wire points to the top of the page, at right angles to the wire and the field. Step 4: dashed, with the current reversed the force points down.",
          axes: "none",
          view: { x: [0, 10], y: [-2.7, 2.6] },
          elements: [
            { kind: "label", at: [1, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [1, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [3, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [3, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [5, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [5, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [7, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [7, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [9, -2.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [9, 2.1], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [0.4, 0], to: [9.6, 0], step: 1 },
            { kind: "vector", from: [6.6, 0.35], to: [8.4, 0.35], label: "I", labelAt: "n", step: 1 },
            { kind: "vector", from: [4, 0.15], to: [4, 1.5], label: "F", labelAt: "e", tone: "good", step: 3 },
            { kind: "vector", from: [4, -0.15], to: [4, -1.3], label: "F, I reversed", labelAt: "e", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "A closed loop in the field",
        points: [
          t`Round a closed loop, the small pieces $d\vec{l}$ add up to zero: the path ends where it starts.`,
          t`So in a uniform field the net force $I\left(\oint d\vec{l}\right) \times \vec{B}$ is zero.`,
          t`For a rectangle, the forces on opposite sides are equal and opposite.`,
          t`The forces may still act along different lines, so the loop can feel a **torque** and turn.`,
        ],
        figure: {
          alt: "A field into the page, shown by crosses. Step 1: a square loop in the page carrying a current clockwise. Step 2: on each side, a force of size BIl pointing outwards from the loop. Step 3: the forces on opposite sides are equal and opposite, so they add to zero.",
          axes: "none",
          view: { x: [-2.6, 5.6], y: [-2.6, 5.6] },
          elements: [
            { kind: "label", at: [-2, -2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [-2, 5], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [5, -2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [5, 5], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [1.5, 1.2], label: "⊗", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [0, 3], step: 1 },
            { kind: "segment", from: [0, 3], to: [3, 3], step: 1 },
            { kind: "segment", from: [3, 3], to: [3, 0], step: 1 },
            { kind: "segment", from: [3, 0], to: [0, 0], step: 1 },
            { kind: "vector", from: [2.6, 2.2], to: [2.6, 0.8], label: "I", labelAt: "w", step: 1 },
            { kind: "vector", from: [1.5, 0.1], to: [1.5, -1.3], label: "BIl", labelAt: "e", tone: "good", step: 2 },
            { kind: "vector", from: [1.5, 3.1], to: [1.5, 4.4], tone: "good", step: 2 },
            { kind: "vector", from: [0.1, 1.5], to: [-1.3, 1.5], tone: "good", step: 2 },
            { kind: "vector", from: [3.1, 1.5], to: [4.4, 1.5], tone: "good", step: 2 },
            { kind: "label", at: [1.5, -2], label: "net force = 0", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Holding up a wire",
        points: [
          t`A horizontal wire across a horizontal field can feel an upward force $BIl$.`,
          t`It floats when this balances its weight: $BIl = mg$.`,
          t`So the field needed is $B = \dfrac{mg}{Il}$, or the current needed is $I = \dfrac{mg}{Bl}$.`,
          t`Only the part of a circuit inside the field feels a force; a loop half in the field is pushed.`,
        ],
      },
    ],
    worked: {
      prompt: t`A horizontal wire $0.50\ \mathrm{m}$ long has a mass of $30\ \mathrm{g}$. It lies across a horizontal field of $0.20\ \mathrm{T}$. What current makes it float? ($g = 9.8\ \mathrm{m/s^2}$)`,
      steps: [
        t`The weight is $mg = 0.030 \times 9.8 = 0.294\ \mathrm{N}$.`,
        t`The wire floats when $BIl = mg$.`,
        t`$I = \dfrac{mg}{Bl} = \dfrac{0.294}{0.20 \times 0.50}$ $= 2.94\ \mathrm{A}$.`,
        t`The current must run the way that makes $I\vec{l} \times \vec{B}$ point up; the other way would press the wire down.`,
      ],
      answer: t`$I = 2.94\ \mathrm{A}$`,
    },
    visualSpec: t`Drag a wire round in a field into the page and watch the force arrow on it: largest across the field, zero along it, flipping when the current reverses.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses $\cos\theta$ in place of $\sin\theta$.`,
      remediation: t`The force is $BIl\sin\theta$: greatest when the wire is across the field, zero when it lies along it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: "Gets the direction of the force reversed.",
      remediation: t`Take $\vec{l} \times \vec{B}$ in that order, with $\vec{l}$ along the current: fingers from the current to the field, thumb along the force.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks the force on a wire acts along the field.",
      remediation: "The magnetic force is at right angles to the field, never along it.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: "Uses grams and centimetres without converting to kg and m.",
      remediation: t`Work in SI units: $1\ \mathrm{g} = 10^{-3}\ \mathrm{kg}$, $1\ \mathrm{cm} = 10^{-2}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Uses the mass $m$ for the weight $mg$.`,
      remediation: t`The magnetic force balances the weight, $mg$ in newtons, not the mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Adds the sizes of the forces on the sides of a closed loop.",
      remediation: "Forces are vectors: on opposite sides of a loop in a uniform field they point opposite ways and cancel.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks a loop with no net force cannot turn either.",
      remediation: "Equal and opposite forces along different lines make a couple: the loop feels a torque even though the net force is zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Turns the balance $BIl = mg$ upside down.`,
      remediation: t`From $BIl = mg$, the unknown goes alone on one side: $I = \dfrac{mg}{Bl}$, which grows with the weight.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks a closed loop never feels a net force, even when only part of it is in the field.",
      remediation: "The forces cancel only when every side is in the same uniform field. Here only the lower side is in the field, so it is pushed up.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: t`Drops the $\sin\theta$ and takes $BIl$ at every angle.`,
      remediation: t`Only the part of the wire across the field counts: $F = BIl\sin\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.1 (iv)" },
      stem: t`A straight copper rod $1\ \mathrm{m}$ long carries a current of $15\ \mathrm{A}$ from west to east at the Earth's equator. There the Earth's field is horizontal, $1.3 \times 10^{-4}\ \mathrm{T}$, from south to north. What force acts on the rod?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$1.95 \times 10^{-3}\ \mathrm{N}$, towards the north`, correct: false, misconceptionId: "C04-M3", value: "north" },
        { key: "B", text: t`Zero: the rod is at right angles to the field`, correct: false, misconceptionId: "C04-M1", value: "zero" },
        { key: "C", text: t`$1.95 \times 10^{-3}\ \mathrm{N}$, vertically upward`, correct: true, value: "up" },
        { key: "D", text: t`$1.95 \times 10^{-3}\ \mathrm{N}$, vertically downward`, correct: false, misconceptionId: "C04-M2", value: "down" },
      ],
      solution: {
        steps: [
          t`The rod (east) is at right angles to the field (north): $F = BIl$ $= 1.3 \times 10^{-4} \times 15 \times 1$ $= 1.95 \times 10^{-3}\ \mathrm{N}$.`,
          t`With $\hat{x}$ east, $\hat{y}$ north and $\hat{z}$ up, $\vec{l} \times \vec{B}$ is along $\hat{x} \times \hat{y} = \hat{z}$.`,
          t`So the force is $1.95 \times 10^{-3}\ \mathrm{N}$, vertically upward.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.2" },
      stem: t`A straight wire of mass $20\ \mathrm{g}$ and length $1\ \mathrm{m}$ is to be levitated by a current of $1\ \mathrm{A}$ in it and a horizontal magnetic field at right angles to it. What must the size of the field be? (Take $g = 9.8\ \mathrm{m/s^2}$.)`,
      verify: { kind: "value", inputs: { m_g: "20", L: "1", I: "1" }, params: { ask: "Blev" } },
      options: [
        { key: "A", text: t`$196\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M4", value: "196" },
        { key: "B", text: t`$0.02\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M5", value: "0.0200000000000000" },
        { key: "C", text: t`$5.1\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M8", value: "5.10000000000000" },
        { key: "D", text: t`$0.196\ \mathrm{T}$`, correct: true, value: "0.196000000000000" },
      ],
      solution: {
        steps: [
          t`$m = 20\ \mathrm{g} = 0.020\ \mathrm{kg}$, so the weight is $mg = 0.196\ \mathrm{N}$.`,
          t`The wire floats when $BIl = mg$: $B = \dfrac{mg}{Il} = \dfrac{0.196}{1 \times 1}$ $= 0.196\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`A straight wire $50\ \mathrm{cm}$ long carries $4.0\ \mathrm{A}$ in a uniform field of $0.30\ \mathrm{T}$. The wire makes an angle of $30^\circ$ with the field. What is the size of the force on it?`,
      verify: { kind: "value", inputs: { B: "0.30", I: "4.0", l_cm: "50", th: "30" }, params: { ask: "Fang" } },
      options: [
        { key: "A", text: t`$0.6\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M10", value: "0.600000000000000" },
        { key: "B", text: t`$30\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M4", value: "30" },
        { key: "C", text: t`$0.3\ \mathrm{N}$`, correct: true, value: "0.300000000000000" },
        { key: "D", text: t`$0.52\ \mathrm{N}$`, correct: false, misconceptionId: "C04-M1", value: "0.520000000000000" },
      ],
      solution: {
        steps: [
          t`$l = 50\ \mathrm{cm} = 0.50\ \mathrm{m}$ and $\sin 30^\circ = 0.5$.`,
          t`$F = BIl\sin\theta$ $= 0.30 \times 4.0 \times 0.50 \times 0.5$ $= 0.3\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Solved Ex.10.3" },
      stem: t`A square wire loop of side $a$, with a glass bulb of mass $m$ hanging from it, hangs with only its lower side in a uniform field $B$ out of the page (see the figure). What current $I$ in the loop holds it up?`,
      figure: {
        alt: "A square wire loop of side a hangs upright, with a glass bulb of mass m hanging from its lower side. A dashed box marks the field region, B out of the page (dots), which holds only the lower side of the loop. The current I in the lower side flows to the left, and the force F on it points up.",
        axes: "none",
        view: { x: [-1.6, 4], y: [-2, 3.2] },
        elements: [
          { kind: "segment", from: [0, 0], to: [2.4, 0] },
          { kind: "segment", from: [2.4, 0], to: [2.4, 2.4] },
          { kind: "segment", from: [2.4, 2.4], to: [0, 2.4], label: "a", labelAt: "n" },
          { kind: "segment", from: [0, 2.4], to: [0, 0] },
          { kind: "segment", from: [-1.2, -0.5], to: [3.6, -0.5], dashed: true, tone: "muted" },
          { kind: "segment", from: [3.6, -0.5], to: [3.6, 0.9], dashed: true, tone: "muted" },
          { kind: "segment", from: [3.6, 0.9], to: [-1.2, 0.9], dashed: true, tone: "muted" },
          { kind: "segment", from: [-1.2, 0.9], to: [-1.2, -0.5], dashed: true, tone: "muted" },
          { kind: "label", at: [-0.6, 0.15], label: "⊙", labelAt: "n", tone: "muted" },
          { kind: "label", at: [3, 0.15], label: "⊙", labelAt: "n", tone: "muted" },
          { kind: "label", at: [3.6, 0.9], label: "B", labelAt: "ne", tone: "muted" },
          { kind: "vector", from: [1.1, 0.3], to: [0.25, 0.3], label: "I", labelAt: "n" },
          { kind: "vector", from: [1.6, 0.15], to: [1.6, 1.4], label: "F", labelAt: "e", tone: "good" },
          { kind: "segment", from: [1.9, 0], to: [1.9, -1] },
          { kind: "circle", centre: [1.9, -1.35], r: 0.35 },
          { kind: "label", at: [2.3, -1.35], label: "m", labelAt: "e" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { ask: "loopI" } },
      options: [
        { key: "A", text: t`No current can: the forces on a closed loop always cancel`, correct: false, misconceptionId: "C04-M9", value: "no_current" },
        { key: "B", text: t`$I = \dfrac{m}{Ba}$`, correct: false, misconceptionId: "C04-M5", value: "m_Ba" },
        { key: "C", text: t`$I = \dfrac{Ba}{mg}$`, correct: false, misconceptionId: "C04-M8", value: "Ba_mg" },
        { key: "D", text: t`$I = \dfrac{mg}{Ba}$`, correct: true, value: "mg_Ba" },
      ],
      solution: {
        steps: [
          t`Only the lower side, of length $a$, is in the field; it feels an upward force $IBa$.`,
          t`The vertical sides inside the field feel equal and opposite sideways forces, which cancel.`,
          t`The loop hangs when $IBa = mg$, so $I = \dfrac{mg}{Ba}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.2(ii)" },
      stem: t`What is the net force on a closed loop of wire carrying a current in a uniform magnetic field?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "closed" } },
      options: [
        { key: "A", text: t`A force along the field, pushing the loop along it`, correct: false, misconceptionId: "C04-M3", value: "along_B" },
        { key: "B", text: t`Zero, though the loop may still feel a torque`, correct: true, value: "zero_torque" },
        { key: "C", text: t`The sum of the sizes $BIl$ of the forces on its sides`, correct: false, misconceptionId: "C04-M6", value: "sum_sides" },
        { key: "D", text: t`Zero, so the loop cannot turn either`, correct: false, misconceptionId: "C04-M7", value: "zero_no_turn" },
      ],
      solution: {
        steps: [
          t`$\vec{F} = I\left(\oint d\vec{l}\right) \times \vec{B}$, and $\oint d\vec{l} = 0$ round a closed path.`,
          t`So the net force is zero, but the forces on different sides can still form a couple and turn the loop.`,
        ],
      },
    },
  ],
};
