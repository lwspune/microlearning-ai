import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A galvanometer's scale is evenly marked: twice the current, twice the deflection. A coil turning in an ordinary uniform field would not behave like that. What does the galvanometer do differently?`,
    reveal: t`It makes its field **radial**, so the coil's plane always lies along $\vec{B}$. The torque stays $NIAB$ at every deflection, and balancing it against the fibre's twist gives a deflection proportional to $I$.`,
  },
  explanation: {
    intuition: [
      t`In a uniform field the forces on the sides of a current loop add to zero.`,
      t`But two of them act along different lines, so they form a couple and turn the loop.`,
      t`The couple turns the loop's magnetic moment $\vec{m}$ towards $\vec{B}$.`,
      t`A moving coil galvanometer uses this turning to measure a current.`,
      t`A twisted fibre or spring resists the turning, so the coil settles where the two torques balance.`,
    ],
    formal: [
      {
        title: "Torque on a coil",
        points: [
          t`Take a rectangular coil of $N$ turns, sides $l$ and $b$, with its plane along a uniform field $\vec{B}$.`,
          t`The sides of length $l$ feel forces $NBIl$, equal and opposite, $b$ apart.`,
          t`So the couple is $\tau = NBIl \times b = NIAB$, with $A = lb$.`,
          t`With $\theta$ between $\vec{B}$ and the coil's **normal**: $\tau = NIAB\sin\theta$.`,
          t`In vector form, with $\vec{m} = NI\vec{A}$: $\vec{\tau} = \vec{m} \times \vec{B}$, of size $mB\sin\theta$.`,
          t`$\tau$ is greatest when the plane lies along $\vec{B}$, and zero when it is at right angles to $\vec{B}$.`,
        ],
      },
      {
        title: "The moving coil galvanometer",
        points: [
          t`A coil of many turns hangs from a phosphor bronze fibre between the concave poles of a magnet.`,
          t`A soft iron cylinder sits inside the coil, without touching it.`,
          t`The concave poles and the cylinder make the field **radial**, along radii like the spokes of a wheel.`,
          t`So as the coil turns, its plane always lies along $\vec{B}$, and $\tau = NIAB$ at every deflection.`,
          t`The twisted fibre gives a **restoring torque** $k\phi$ for a deflection $\phi$, $k$ being its twist constant.`,
        ],
        figure: {
          alt: "Top view of a moving coil galvanometer. Step 1: the concave north pole on the left and south pole on the right, and the coil's two sides, a dot and a cross, with its plane dashed between them. Step 2: the soft iron cylinder, a circle in the middle. Step 3: field lines along radii, from the north pole into the cylinder and out of it to the south pole. Step 4: the coil turned clockwise through 30 degrees, the way the forces on its sides turn it, its plane still lying along a radius, along the field.",
          axes: "none",
          view: { x: [-4, 4], y: [-2.7, 2.7] },
          elements: [
            { kind: "arc", centre: [0, 0], r: 2.1, from: 120, to: 240, step: 1, tone: "bad", label: "N", labelAt: "w" },
            { kind: "arc", centre: [0, 0], r: 2.1, from: -60, to: 60, step: 1, tone: "good", label: "S", labelAt: "e" },
            { kind: "segment", from: [-1.25, 0], to: [1.25, 0], dashed: true, tone: "muted", step: 1 },
            { kind: "circle", centre: [-1.5, 0], r: 0.25, step: 1 },
            { kind: "point", at: [-1.5, 0], step: 1 },
            { kind: "circle", centre: [1.5, 0], r: 0.25, step: 1 },
            { kind: "segment", from: [1.3232, -0.1768], to: [1.6768, 0.1768], step: 1 },
            { kind: "segment", from: [1.3232, 0.1768], to: [1.6768, -0.1768], step: 1 },
            { kind: "circle", centre: [0, 0], r: 0.9, step: 2, tone: "muted" },
            { kind: "vector", from: [-1.1758, 1.6793], to: [-0.5449, 0.7782], step: 3, tone: "muted" },
            { kind: "vector", from: [-1.9264, -0.7011], to: [-0.8927, -0.3249], step: 3, tone: "muted" },
            { kind: "vector", from: [-1.4496, -1.4496], to: [-0.6718, -0.6718], step: 3, tone: "muted" },
            { kind: "vector", from: [0.5449, -0.7782], to: [1.1758, -1.6793], step: 3, tone: "muted" },
            { kind: "vector", from: [0.8927, 0.3249], to: [1.9264, 0.7011], step: 3, tone: "muted" },
            { kind: "vector", from: [0.6718, 0.6718], to: [1.4496, 1.4496], step: 3, tone: "muted" },
            { kind: "segment", from: [-1.0825, 0.625], to: [1.0825, -0.625], dashed: true, tone: "muted", step: 4 },
            { kind: "circle", centre: [-1.299, 0.75], r: 0.25, step: 4, tone: "good" },
            { kind: "point", at: [-1.299, 0.75], step: 4, tone: "good" },
            { kind: "circle", centre: [1.299, -0.75], r: 0.25, step: 4, tone: "good" },
            { kind: "segment", from: [1.1222, -0.9268], to: [1.4758, -0.5732], step: 4, tone: "good" },
            { kind: "segment", from: [1.1222, -0.5732], to: [1.4758, -0.9268], step: 4, tone: "good" },
          ],
        },
      },
      {
        title: "Current sensitivity",
        points: [
          t`The coil comes to rest where the two torques balance: $NIAB = k\phi$.`,
          t`So $\phi = \dfrac{NAB}{k}I$: the deflection is proportional to the current, and the scale is uniform.`,
          t`**Current sensitivity** is the deflection per unit current: $S_i = \dfrac{\phi}{I} = \dfrac{NAB}{k}$.`,
          t`More turns, a bigger coil, a stronger field or a weaker fibre make it more sensitive.`,
          t`With $k$ given per degree, $\phi$ comes out in degrees: no change to radians.`,
        ],
      },
      {
        title: "Advantages and limits",
        points: [
          t`It is very sensitive, and its scale is uniform.`,
          t`Its strong magnet makes it hardly affected by stray magnetic fields.`,
          t`A coil wound on a metal frame comes to rest quickly: it is **dead-beat**.`,
          t`It measures only direct current: with AC the coil just vibrates about zero.`,
          t`Its fine fibre is delicate, and a large current can burn out the coil.`,
        ],
      },
    ],
    worked: {
      prompt: t`A galvanometer coil of $40$ turns, $4\ \mathrm{cm} \times 2.5\ \mathrm{cm}$, hangs in a radial field of $0.1\ \mathrm{T}$. Its fibre's twist constant is $2 \times 10^{-9}\ \mathrm{N\,m}$ per degree. Find its current sensitivity and the deflection for $1\ \mu\mathrm{A}$.`,
      steps: [
        t`$A = 0.04 \times 0.025 = 10^{-3}\ \mathrm{m^2}$.`,
        t`$S_i = \dfrac{NAB}{k} = \dfrac{40 \times 10^{-3} \times 0.1}{2 \times 10^{-9}}$.`,
        t`$S_i = 2 \times 10^{6}$ degree per ampere.`,
        t`For $1\ \mu\mathrm{A}$: $\phi = S_iI = 2 \times 10^{6} \times 10^{-6} = 2^\circ$.`,
      ],
      answer: t`$2 \times 10^{6}$ degree/A; $2^\circ$`,
    },
    visualSpec: t`Turn the coil of a galvanometer in a uniform field and then in a radial one, watching the torque change with the angle in one and stay fixed in the other.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Takes $\theta$ in $NIAB\sin\theta$ from the coil's plane, so thinks the torque is greatest with the plane at right angles to $\vec{B}$.`,
      remediation: t`$\theta$ is the angle between $\vec{B}$ and the coil's normal, $\vec{m}$. The torque is greatest when the plane lies along $\vec{B}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Forgets the number of turns.",
      remediation: t`Each turn feels the same couple: $\tau = NIAB$, and $\vec{m} = NI\vec{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Changes the angle to radians though the twist constant is per degree.",
      remediation: t`With $k$ in $\mathrm{N\,m}$ per degree, use $\phi$ in degrees in $NIAB = k\phi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Leaves the coil's area in cm².",
      remediation: t`Work in metres: $5\ \mathrm{cm} \times 3\ \mathrm{cm} = 0.05 \times 0.03 = 1.5 \times 10^{-3}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Thinks a uniform field would do as well as a radial one.",
      remediation: t`In a uniform field the torque $NIAB\sin\theta$ changes as the coil turns. A radial field keeps it $NIAB$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks the radial field supplies the restoring torque.",
      remediation: t`The magnet's field gives the deflecting torque $NIAB$; the twisted fibre or spring gives the restoring torque $k\phi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: t`Writes the torque as a dot product, $\vec{m} \cdot \vec{B}$.`,
      remediation: t`A dot product is a scalar; $-\vec{m} \cdot \vec{B}$ is the energy. The torque is $\vec{\tau} = \vec{m} \times \vec{B}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M8",
      mistake: t`Reverses the cross product: $\vec{B} \times \vec{m}$.`,
      remediation: t`$\vec{\tau} = \vec{m} \times \vec{B}$: it turns $\vec{m}$ towards $\vec{B}$. The reverse order points the other way.`,
      fallback: { kind: "ext", topic: "magnetic field and the vector product (Std XI Physics)" },
    },
    {
      id: "C09-M9",
      mistake: t`Turns the sensitivity upside down: $\dfrac{k}{NAB}$.`,
      remediation: t`Sensitivity is deflection per unit current: $\dfrac{\phi}{I} = \dfrac{NAB}{k}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.14" },
      stem: t`A moving coil galvanometer has a rectangular coil of $50$ turns, $5\ \mathrm{cm} \times 3\ \mathrm{cm}$, in a radial magnetic field of $0.05\ \mathrm{T}$. The twist constant of its spring is $1.5 \times 10^{-9}\ \mathrm{N\,m}$ per degree. What current gives a deflection of $30^\circ$?`,
      verify: { kind: "value", inputs: { N: "50", l_cm: "5", b_cm: "3", B: "0.05", k: "1.5e-9", deg: "30" }, params: { ask: "I" } },
      options: [
        { key: "A", text: t`$1.2 \times 10^{-9}\ \mathrm{A}$`, correct: false, misconceptionId: "C09-M4", value: "1.20000000000000e-9" },
        { key: "B", text: t`$6 \times 10^{-4}\ \mathrm{A}$`, correct: false, misconceptionId: "C09-M2", value: "0.000600000000000000" },
        { key: "C", text: t`$1.2 \times 10^{-5}\ \mathrm{A}$`, correct: true, value: "1.20000000000000e-5" },
        { key: "D", text: t`$2.09 \times 10^{-7}\ \mathrm{A}$`, correct: false, misconceptionId: "C09-M3", value: "2.09000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$A = 0.05 \times 0.03 = 1.5 \times 10^{-3}\ \mathrm{m^2}$.`,
          t`$NIAB = k\phi$, so $I = \dfrac{k\phi}{NAB}$ $= \dfrac{1.5 \times 10^{-9} \times 30}{50 \times 1.5 \times 10^{-3} \times 0.05}$.`,
          t`$I = 1.2 \times 10^{-5}\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.30" },
      stem: t`A moving coil galvanometer has $10$ turns, each $12\ \mathrm{cm}$ long and $8\ \mathrm{cm}$ broad, in a radial magnetic field of $10^{-2}\ \mathrm{T}$. The twist constant of its phosphor bronze fibre is $12 \times 10^{-9}\ \mathrm{N\,m}$ per degree. What deflection does a current of $125\ \mu\mathrm{A}$ produce?`,
      verify: { kind: "value", inputs: { N: "10", l_cm: "12", b_cm: "8", I_uA: "125", B: "1/100", k: "12e-9" }, params: { ask: "theta" } },
      options: [
        { key: "A", text: t`$10^\circ$`, correct: true, value: "10" },
        { key: "B", text: t`$573^\circ$`, correct: false, misconceptionId: "C09-M3", value: "573" },
        { key: "C", text: t`$100000^\circ$`, correct: false, misconceptionId: "C09-M4", value: "100000" },
        { key: "D", text: t`$1^\circ$`, correct: false, misconceptionId: "C09-M2", value: "1" },
      ],
      solution: {
        steps: [
          t`$A = 0.12 \times 0.08 = 9.6 \times 10^{-3}\ \mathrm{m^2}$.`,
          t`$\phi = \dfrac{NIAB}{k}$ $= \dfrac{10 \times 125 \times 10^{-6} \times 9.6 \times 10^{-3} \times 10^{-2}}{12 \times 10^{-9}}$.`,
          t`$\phi = \dfrac{1.2 \times 10^{-7}}{1.2 \times 10^{-8}} = 10^\circ$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.6(v)" },
      stem: t`The rectangular coil of a moving coil galvanometer has $100$ turns, each of area $15\ \mathrm{cm^2}$, in a radial magnetic field of $0.03\ \mathrm{T}$. The twist constant of the fibre is $15 \times 10^{-10}\ \mathrm{N\,m}$ per degree. What is its current sensitivity?`,
      verify: { kind: "value", inputs: { N: "100", A_cm2: "15", B: "0.03", k: "15e-10" }, params: { ask: "S" } },
      options: [
        { key: "A", text: t`$3.33 \times 10^{-7}\ \mathrm{degree/A}$`, correct: false, misconceptionId: "C09-M9", value: "3.33000000000000e-7" },
        { key: "B", text: t`$3 \times 10^{10}\ \mathrm{degree/A}$`, correct: false, misconceptionId: "C09-M4", value: "30000000000" },
        { key: "C", text: t`$30000\ \mathrm{degree/A}$`, correct: false, misconceptionId: "C09-M2", value: "30000" },
        { key: "D", text: t`$3 \times 10^{6}\ \mathrm{degree/A}$`, correct: true, value: "3000000" },
      ],
      solution: {
        steps: [
          t`$A = 15 \times 10^{-4}\ \mathrm{m^2}$.`,
          t`$S_i = \dfrac{NAB}{k} = \dfrac{100 \times 15 \times 10^{-4} \times 0.03}{15 \times 10^{-10}}$.`,
          t`$S_i = 3 \times 10^{6}$ degree/A.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.2(iv)" },
      stem: t`A coil of $N$ turns, each of area vector $\vec{A}$, carries a current $I$ in a uniform magnetic field $\vec{B}$. Its magnetic dipole moment is $\vec{m}$. Which gives the torque on it, in vector form?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "vec" } },
      options: [
        { key: "A", text: t`$\vec{\tau} = \vec{m} \times \vec{B}$`, correct: true, value: "m_cross_B" },
        { key: "B", text: t`$\tau = \vec{m} \cdot \vec{B}$`, correct: false, misconceptionId: "C09-M7", value: "m_dot_B" },
        { key: "C", text: t`$\vec{\tau} = \vec{B} \times \vec{m}$`, correct: false, misconceptionId: "C09-M8", value: "B_cross_m" },
        { key: "D", text: t`$\vec{\tau} = I\vec{A} \times \vec{B}$`, correct: false, misconceptionId: "C09-M2", value: "IA_cross_B" },
      ],
      solution: {
        steps: [
          t`The torque's size is $mB\sin\theta$, and it turns $\vec{m}$ towards $\vec{B}$.`,
          t`That is the cross product $\vec{\tau} = \vec{m} \times \vec{B}$, with $\vec{m} = NI\vec{A}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Ch.10 Q.3" },
      stem: t`Why is the magnetic field in a moving coil galvanometer made radial?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "radial" } },
      options: [
        { key: "A", text: t`So the field supplies the restoring torque that brings the coil back to zero`, correct: false, misconceptionId: "C09-M6", value: "restoring" },
        { key: "B", text: t`So the coil's plane stays at right angles to the field, where the torque is greatest`, correct: false, misconceptionId: "C09-M1", value: "plane_perp_B" },
        { key: "C", text: t`So the coil's plane lies along the field at every deflection, making the deflection proportional to $I$`, correct: true, value: "plane_along_B" },
        { key: "D", text: t`So the field lines are parallel and evenly spaced, the same as a uniform field`, correct: false, misconceptionId: "C09-M5", value: "uniform" },
      ],
      solution: {
        steps: [
          t`In a radial field the coil's plane lies along $\vec{B}$ at every position, so $\theta = 90^\circ$ always.`,
          t`The torque stays $NIAB$, and $NIAB = k\phi$ gives $\phi \propto I$: a uniform scale.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "authored" },
      stem: t`A rectangular coil of $20$ turns, $10\ \mathrm{cm} \times 5\ \mathrm{cm}$, carries $2\ \mathrm{A}$ in a uniform magnetic field of $0.5\ \mathrm{T}$. The plane of the coil makes $30^\circ$ with the field. What torque acts on it?`,
      verify: { kind: "value", inputs: { N: "20", l_cm: "10", b_cm: "5", I: "2", B: "0.5", plane_deg: "30" }, params: { ask: "tau" } },
      options: [
        { key: "A", text: t`$866\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C09-M4", value: "866" },
        { key: "B", text: t`$0.0866\ \mathrm{N\,m}$`, correct: true, value: "0.0866000000000000" },
        { key: "C", text: t`$0.05\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C09-M1", value: "0.0500000000000000" },
        { key: "D", text: t`$0.00433\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C09-M2", value: "0.00433000000000000" },
      ],
      solution: {
        steps: [
          t`The plane makes $30^\circ$ with $\vec{B}$, so the normal makes $60^\circ$.`,
          t`$m = NIA = 20 \times 2 \times 0.005 = 0.2\ \mathrm{A\,m^2}$.`,
          t`$\tau = mB\sin 60^\circ = 0.2 \times 0.5 \times 0.866$ $\approx 0.0866\ \mathrm{N\,m}$.`,
        ],
      },
    },
  ],
};
