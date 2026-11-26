import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Hang a light coil from a thread so it can turn freely, and pass a current through it. With no magnet near, it slowly swings round and settles facing north. Why?`,
    reveal: t`A current loop is a magnetic dipole, like a tiny bar magnet, of moment $m = NIA$. In the Earth's field it turns until $\vec{m}$ lines up with $\vec{B}$, where its energy is least.`,
  },
  explanation: {
    intuition: [
      t`A current loop makes a field like that of a small bar magnet.`,
      t`One face of the loop acts as a north pole and the other as a south pole.`,
      t`Its strength as a magnet is its **magnetic dipole moment**, $m$.`,
      t`More turns, more current or a bigger loop give a stronger magnet: $m = NIA$.`,
      t`In a magnetic field the loop turns to line its moment up with the field, like a compass needle.`,
    ],
    formal: [
      {
        title: "Magnetic dipole moment",
        points: [
          t`For $N$ turns, each of area $A$, carrying a current $I$: $\vec{m} = NI\vec{A}$.`,
          t`$\vec{A}$ is the **area vector**: of size $A$, along the normal to the loop's plane.`,
          t`$A = \pi R^2$ for a circle of radius $R$, and $A = lb$ for an $l \times b$ rectangle.`,
          t`Sense of $\vec{m}$: curl the right-hand fingers along the current; the thumb gives $\vec{m}$.`,
          t`Unit: $\mathrm{A\,m^2}$, the same as $\mathrm{J/T}$.`,
        ],
        figure: {
          alt: "A flat circular loop drawn as an ellipse, seen slightly from above. Step 1: an arrow on its front edge shows the current I running left to right, anticlockwise as seen from above. Step 4: the moment m, an arrow up from the loop's centre along its axis, where the right-hand thumb points.",
          axes: "none",
          view: { x: [-4, 4], y: [-1.6, 2.8] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 2.4, ry: 0.7, tone: "muted" },
            { kind: "vector", from: [-0.4, -0.7], to: [0.4, -0.7], step: 1, label: "I", labelAt: "s" },
            { kind: "point", at: [0, 0], step: 4 },
            { kind: "vector", from: [0, 0], to: [0, 2.3], step: 4, tone: "good", label: "m", labelAt: "e" },
          ],
        },
      },
      {
        title: "A loop as a magnetic dipole",
        points: [
          t`The face where the current is seen running anticlockwise is the north pole; $\vec{m}$ points out of it.`,
          t`Far along the axis, $B = \dfrac{\mu_0NIR^2}{2x^3}$ $= \dfrac{\mu_0}{4\pi}\dfrac{2m}{x^3}$, as for a bar magnet.`,
          t`At the centre of one turn, $B = \dfrac{\mu_0I}{2R}$, with $I = \dfrac{m}{\pi R^2}$.`,
          t`So at the centre, $B = \dfrac{\mu_0m}{2\pi R^3}$.`,
        ],
      },
      {
        title: "Potential energy in a field",
        points: [
          t`In a uniform field $\vec{B}$, a dipole at angle $\theta$ to it has $U = -\vec{m} \cdot \vec{B}$ $= -mB\cos\theta$.`,
          t`$\theta = 0$: $U = -mB$, the least. $\vec{m}$ along $\vec{B}$ is **stable** equilibrium.`,
          t`$\theta = 180^\circ$: $U = +mB$, the greatest. $\vec{m}$ against $\vec{B}$ is **unstable** equilibrium.`,
          t`$\theta = 90^\circ$: $U = 0$.`,
          t`Work done in turning it from $\theta_1$ to $\theta_2$: $W = mB\left(\cos\theta_1 - \cos\theta_2\right)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A circular coil of $500$ turns encloses an area of $1.26 \times 10^{-4}\ \mathrm{m^2}$ and carries $100\ \mu\mathrm{A}$. Find its magnetic moment.`,
      steps: [
        t`$I = 100\ \mu\mathrm{A} = 10^{-4}\ \mathrm{A}$.`,
        t`$m = NIA$ $= 500 \times 10^{-4} \times 1.26 \times 10^{-4}$.`,
        t`$m = 6.3 \times 10^{-6}\ \mathrm{A\,m^2}$, along the coil's axis.`,
      ],
      answer: t`$6.3 \times 10^{-6}\ \mathrm{A\,m^2}$`,
    },
    visualSpec: t`Turn a current loop in a uniform field and watch its energy $-mB\cos\theta$ rise from $-mB$ to $+mB$ as $\vec{m}$ swings round.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Uses the diameter as the radius.",
      remediation: t`Halve the diameter first: $14\ \mathrm{cm}$ across gives $R = 7\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Forgets the number of turns.",
      remediation: t`Each turn adds its own moment: $m = NIA$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Leaves a length in cm or an area in cm².",
      remediation: t`Work in metres: $1\ \mathrm{cm^2} = 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Uses the loop's perimeter, such as $2\pi R$, in place of its area.`,
      remediation: t`$m = IA$ uses the area the loop encloses: $\pi R^2$ for a circle, $a^2$ for a square.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Finds the current from the straight wire's $\dfrac{\mu_0I}{2\pi R}$.`,
      remediation: t`At the centre of a circular loop $B = \dfrac{\mu_0I}{2R}$, with no $\pi$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M6",
      mistake: t`Drops the 2 in $B = \dfrac{\mu_0I}{2R}$ at a loop's centre.`,
      remediation: t`The field at the centre of one turn is $\dfrac{\mu_0I}{2R}$, so $I = \dfrac{2RB}{\mu_0}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks the moment lies in the plane of the loop, along the current.",
      remediation: t`$\vec{m}$ is along the area vector: at right angles to the loop's plane, along its axis.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Gets the sense of the moment backwards.",
      remediation: t`Curl the right-hand fingers along the current; the thumb gives $\vec{m}$. Anticlockwise as seen: towards you.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: t`Drops the minus sign: takes $U = +mB\cos\theta$.`,
      remediation: t`$U = -mB\cos\theta$: the energy is least, $-mB$, when $\vec{m}$ lies along $\vec{B}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: t`Uses $\sin\theta$ in the energy, mixing it up with the torque.`,
      remediation: t`The torque is $mB\sin\theta$, but the energy is $U = -mB\cos\theta$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.31" },
      stem: t`A circular coil of $300$ turns and diameter $14\ \mathrm{cm}$ carries a current of $15\ \mathrm{A}$. What is the magnitude of its magnetic dipole moment?`,
      verify: { kind: "value", inputs: { N: "300", D_cm: "14", I: "15" }, params: { ask: "coil" } },
      options: [
        { key: "A", text: t`$69.3\ \mathrm{A\,m^2}$`, correct: true, value: "69.3000000000000" },
        { key: "B", text: t`$277\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C08-M1", value: "277" },
        { key: "C", text: t`$0.231\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C08-M2", value: "0.231000000000000" },
        { key: "D", text: t`$1980\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C08-M4", value: "1980" },
      ],
      solution: {
        steps: [
          t`$R = 7\ \mathrm{cm} = 0.07\ \mathrm{m}$, so $A = \pi R^2$ $= 1.54 \times 10^{-2}\ \mathrm{m^2}$.`,
          t`$m = NIA = 300 \times 15 \times 1.54 \times 10^{-2}$.`,
          t`$m \approx 69.3\ \mathrm{A\,m^2}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.10" },
      stem: t`The magnetic field at the centre of a circular loop of radius $12.3\ \mathrm{cm}$, carrying a current, is $6.4 \times 10^{-6}\ \mathrm{T}$. What is the magnetic moment of the loop? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { R_cm: "12.3", B: "6.4e-6" }, params: { ask: "fromB" } },
      options: [
        { key: "A", text: t`$0.187\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C08-M5", value: "0.187000000000000" },
        { key: "B", text: t`$0.0298\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C08-M6", value: "0.0298000000000000" },
        { key: "C", text: t`$59500\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C08-M3", value: "59500" },
        { key: "D", text: t`$0.0595\ \mathrm{A\,m^2}$`, correct: true, value: "0.0595000000000000" },
      ],
      solution: {
        steps: [
          t`$B = \dfrac{\mu_0I}{2R}$, so $I = \dfrac{2RB}{\mu_0}$.`,
          t`$I = \dfrac{2 \times 0.123 \times 6.4 \times 10^{-6}}{4\pi \times 10^{-7}}$ $= 1.253\ \mathrm{A}$.`,
          t`$m = I\pi R^2 = 1.253 \times \pi \times 0.123^2$.`,
          t`$m \approx 5.95 \times 10^{-2}\ \mathrm{A\,m^2}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`A single circular loop of radius $R$ has a magnetic dipole moment $m$. What is the magnetic field at its centre, in terms of $m$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "centre" } },
      options: [
        { key: "A", text: t`$\dfrac{\mu_0m}{\pi R^3}$`, correct: false, misconceptionId: "C08-M6", value: "mu0m_piR3" },
        { key: "B", text: t`$\dfrac{\mu_0m}{2\pi^2R^3}$`, correct: false, misconceptionId: "C08-M5", value: "mu0m_2pi2R3" },
        { key: "C", text: t`$\dfrac{\mu_0m}{4\pi R^2}$`, correct: false, misconceptionId: "C08-M4", value: "mu0m_4piR2" },
        { key: "D", text: t`$\dfrac{\mu_0m}{2\pi R^3}$`, correct: true, value: "mu0m_2piR3" },
      ],
      solution: {
        steps: [
          t`$m = I\pi R^2$, so $I = \dfrac{m}{\pi R^2}$.`,
          t`$B = \dfrac{\mu_0I}{2R} = \dfrac{\mu_0m}{2\pi R^3}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A square loop of side $a$ lies in the plane of the page and carries a current $I$, running anticlockwise as you look at it. What is its magnetic dipole moment?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "square" } },
      options: [
        { key: "A", text: t`$Ia^2$, in the plane of the page, along a side`, correct: false, misconceptionId: "C08-M7", value: "Ia2_plane" },
        { key: "B", text: t`$4Ia$, out of the page towards you`, correct: false, misconceptionId: "C08-M4", value: "perim_Ia_out" },
        { key: "C", text: t`$Ia^2$, out of the page towards you`, correct: true, value: "Ia2_out" },
        { key: "D", text: t`$Ia^2$, into the page`, correct: false, misconceptionId: "C08-M8", value: "Ia2_in" },
      ],
      solution: {
        steps: [
          t`The area is $a^2$, so $m = Ia^2$.`,
          t`Fingers curled anticlockwise as you look: the thumb, and $\vec{m}$, point out of the page towards you.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`A coil of $100$ turns, each of area $20\ \mathrm{cm^2}$, carries $0.5\ \mathrm{A}$ in a uniform magnetic field of $0.4\ \mathrm{T}$. Its magnetic moment makes $60^\circ$ with the field. What is its magnetic potential energy?`,
      verify: { kind: "value", inputs: { N: "100", A_cm2: "20", I: "0.5", B: "0.4", deg: "60" }, params: { ask: "U" } },
      options: [
        { key: "A", text: t`$-2 \times 10^{-4}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M2", value: "-0.000200000000000000" },
        { key: "B", text: t`$-0.02\ \mathrm{J}$`, correct: true, value: "-0.0200000000000000" },
        { key: "C", text: t`$0.02\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M9", value: "0.0200000000000000" },
        { key: "D", text: t`$-0.0346\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M10", value: "-0.0346000000000000" },
      ],
      solution: {
        steps: [
          t`$m = NIA = 100 \times 0.5 \times 20 \times 10^{-4}$ $= 0.1\ \mathrm{A\,m^2}$.`,
          t`$U = -mB\cos\theta = -0.1 \times 0.4 \times \cos 60^\circ$.`,
          t`$U = -0.02\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
