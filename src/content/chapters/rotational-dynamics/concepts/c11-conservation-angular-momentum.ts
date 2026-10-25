import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`An ice skater spinning with arms out pulls them in and spins much faster. Nobody pushed. Where did the extra spin come from?`,
    reveal: t`Nowhere new: the angular momentum $I\omega$ stays the same. Pulling the arms in cuts $I$, so $\omega$ has to rise.`,
  },
  explanation: {
    intuition: [
      t`If no external torque acts, a body's angular momentum cannot change.`,
      t`For a body turning about a fixed axis, that means $I\omega$ stays the same.`,
      t`If the body changes shape and $I$ falls, $\omega$ rises to keep $I\omega$ fixed.`,
      t`Skaters, divers and dancers use this to spin faster or slower.`,
      t`Forces inside a system cannot change its total angular momentum; only an outside torque can.`,
    ],
    formal: [
      {
        title: "The principle",
        points: [
          t`From $\tau = \dfrac{dL}{dt}$: if the net external torque is zero, $L$ is constant.`,
          t`So $I_1\omega_1 = I_2\omega_2$, or with frequencies, $I_1n_1 = I_2n_2$.`,
          t`$\vec{L}$ keeps its direction too: a spinning top or gyroscope holds its axis steady.`,
          t`For a system of bodies, the total angular momentum stays the same.`,
        ],
      },
      {
        title: "Using it",
        points: [
          t`Find $I$ before and after; a small lump stuck at distance $x$ from the axis adds $mx^2$.`,
          t`Then $\omega_2 = \dfrac{I_1\omega_1}{I_2}$: less $I$ means a faster spin.`,
          t`Kinetic energy is not conserved: $\dfrac{1}{2}I\omega^2$ changes whenever $I$ changes.`,
          t`A planet feels only the Sun's pull, along the line to the Sun, so no torque: its $L$ is conserved in any orbit.`,
          t`A diver tucks in to somersault faster, then stretches out to slow down before entering the water.`,
        ],
      },
    ],
    worked: {
      prompt: t`A turntable with moment of inertia $0.6\ \mathrm{kg\,m^2}$ spins freely at $45\ \mathrm{rpm}$. A $0.2\ \mathrm{kg}$ lump of clay sticks to it $0.5\ \mathrm{m}$ from the axis. What is its new speed?`,
      steps: [
        t`No external torque, so $I_1n_1 = I_2n_2$.`,
        t`$I_2 = I_1 + mx^2$ $= 0.6 + 0.2 \times 0.25$ $= 0.65\ \mathrm{kg\,m^2}$.`,
        t`$n_2 = \dfrac{I_1n_1}{I_2} = \dfrac{0.6 \times 45}{0.65}$.`,
        t`$n_2 \approx 41.5\ \mathrm{rpm}$.`,
      ],
      answer: t`$n_2 \approx 41.5\ \mathrm{rpm}$`,
    },
    visualSpec: t`Pull a skater's arms in and out with a slider and watch $I$ and $\omega$ change while a bar for $I\omega$ stays the same height.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Changes only the mass and forgets that the radius shrinks too.",
      remediation: t`$I \propto MR^2$. When the balloon loses water, both its mass and its radius shrink; track both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Changes only the radius and forgets that the mass changes too.",
      remediation: t`$I \propto MR^2$, so the lost mass counts as well as the smaller radius.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: t`Turns the ratio upside down, making $\omega$ grow with $I$.`,
      remediation: t`$I\omega$ is fixed, so $\omega$ goes the opposite way to $I$: $\omega_2 = \dfrac{I_1\omega_1}{I_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Uses the ring formula for a disc.",
      remediation: t`A uniform disc about its axis has $I = \dfrac{1}{2}MR^2$, not $MR^2$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M5",
      mistake: t`Forgets the square root, giving $x^2$ as $x$.`,
      remediation: t`The equation gives $x^2$; take its square root to find $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Conserves kinetic energy instead of angular momentum.",
      remediation: t`With no external torque, $I\omega$ stays fixed. The K.E. $\dfrac{1}{2}I\omega^2$ does change; when a lump sticks, some is lost as heat.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M7",
      mistake: "Thinks the principle applies only when the speed changes, as in an elliptical orbit.",
      remediation: t`It applies whenever the external torque is zero. A circular orbit keeps its $L$ too, simply with a steady speed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Thinks the principle needs uniform motion, as in a circular orbit.",
      remediation: t`In an elliptical orbit $r$ and $v$ both change, but $L = mvr$ stays the same: the planet speeds up near the Sun.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Thinks the Sun's pull exerts a torque on the planet.",
      remediation: t`The pull points along the line to the Sun, so $\vec{r} \times \vec{F} = 0$: there is no torque about the Sun.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: t`Thinks the spin stays the same when $I$ changes.`,
      remediation: t`It is $I\omega$ that stays fixed, so any change in $I$ must change $\omega$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Solved Ex.1.8" },
      stem: t`A spherical water balloon spins at $60\ \mathrm{rpm}$. Over time, $48.8\%$ of its water leaks out and it shrinks, keeping its shape. Neglecting outside torques, at what frequency does it now spin?`,
      verify: { kind: "value", inputs: { n1: "60", lost: "0.488" }, params: { ask: "balloon" } },
      options: [
        { key: "A", text: t`$183\ \mathrm{rpm}$`, correct: true, value: "183" },
        { key: "B", text: t`$117\ \mathrm{rpm}$`, correct: false, misconceptionId: "C11-M1", value: "117" },
        { key: "C", text: t`$93.8\ \mathrm{rpm}$`, correct: false, misconceptionId: "C11-M2", value: "93.8000000000000" },
        { key: "D", text: t`$19.7\ \mathrm{rpm}$`, correct: false, misconceptionId: "C11-M3", value: "19.7000000000000" },
      ],
      solution: {
        steps: [
          t`Mass left $= 0.512m_1$. With the same density, $R_2^3 = 0.512R_1^3$, so $R_2 = 0.8R_1$.`,
          t`$I \propto mR^2$: $\dfrac{I_2}{I_1} = 0.512 \times 0.64 \approx 0.328$.`,
          t`$n_2 = \dfrac{n_1}{0.328} = \dfrac{60}{0.328} \approx 183\ \mathrm{rpm}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.21" },
      stem: t`A potter's wheel is a uniform disc of mass $10\ \mathrm{kg}$ and radius $0.4\ \mathrm{m}$, spinning freely at $100\ \mathrm{rpm}$. A $1.6\ \mathrm{kg}$ lump of clay drops on and sticks at a distance $x$ from the centre, and the wheel slows to $80\ \mathrm{rpm}$. What is $x$?`,
      verify: { kind: "value", inputs: { M: "10", R: "0.4", m: "1.6", n1: "100", n2: "80" }, params: { ask: "clay" } },
      options: [
        { key: "A", text: t`$0.125\ \mathrm{m}$`, correct: false, misconceptionId: "C11-M5", value: "0.125000000000000" },
        { key: "B", text: t`$0.53\ \mathrm{m}$`, correct: false, misconceptionId: "C11-M6", value: "0.530000000000000" },
        { key: "C", text: t`$0.354\ \mathrm{m}$`, correct: true, value: "0.354000000000000" },
        { key: "D", text: t`$0.5\ \mathrm{m}$`, correct: false, misconceptionId: "C11-M4", value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`$I_1 = \dfrac{1}{2} \times 10 \times 0.4^2 = 0.8\ \mathrm{kg\,m^2}$; afterwards $I_2 = 0.8 + 1.6x^2$.`,
          t`$0.8 \times 100 = (0.8 + 1.6x^2) \times 80$ gives $x^2 = 0.125$.`,
          t`$x \approx 0.354\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.1 (v)" },
      stem: t`Consider a planet in an elliptical orbit and another in a circular orbit about the Sun. In which case is the planet's angular momentum about the Sun conserved?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "orbit" } },
      options: [
        { key: "A", text: t`Only in the elliptical orbit`, correct: false, misconceptionId: "C11-M7", value: "elliptical_only" },
        { key: "B", text: t`Only in the circular orbit`, correct: false, misconceptionId: "C11-M8", value: "circular_only" },
        { key: "C", text: t`In neither orbit`, correct: false, misconceptionId: "C11-M9", value: "neither" },
        { key: "D", text: t`In both orbits`, correct: true, value: "both" },
      ],
      solution: {
        steps: [
          t`The Sun's pull on a planet points along the line to the Sun, so its torque about the Sun is zero.`,
          t`So the planet's angular momentum is conserved in an elliptical orbit and in a circular one.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.5" },
      stem: t`A skater spins at $2$ rev/s with arms stretched out, with moment of inertia $6\ \mathrm{kg\,m^2}$. Pulling the arms in cuts it to $2\ \mathrm{kg\,m^2}$. What is the new spin rate?`,
      verify: { kind: "value", inputs: { I1: "6", n1: "2", I2: "2" }, params: { ask: "skater" } },
      options: [
        { key: "A", text: t`$3.46\ \mathrm{rev/s}$`, correct: false, misconceptionId: "C11-M6", value: "3.46000000000000" },
        { key: "B", text: t`$2\ \mathrm{rev/s}$`, correct: false, misconceptionId: "C11-M10", value: "2" },
        { key: "C", text: t`$6\ \mathrm{rev/s}$`, correct: true, value: "6" },
        { key: "D", text: t`$0.667\ \mathrm{rev/s}$`, correct: false, misconceptionId: "C11-M3", value: "0.667000000000000" },
      ],
      solution: {
        steps: [
          t`No external torque: $I_1n_1 = I_2n_2$.`,
          t`$n_2 = \dfrac{6 \times 2}{2} = 6\ \mathrm{rev/s}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.3(ii)" },
      stem: t`A disc spins freely at $30\ \mathrm{rad/s}$ about its axis. An identical disc, not spinning, is dropped gently onto it on the same axis, and the two turn together. What is their common angular speed?`,
      verify: { kind: "value", inputs: { w1: "30" }, params: { ask: "two_discs" } },
      options: [
        { key: "A", text: t`$60\ \mathrm{rad/s}$`, correct: false, misconceptionId: "C11-M3", value: "60" },
        { key: "B", text: t`$21.2\ \mathrm{rad/s}$`, correct: false, misconceptionId: "C11-M6", value: "21.2000000000000" },
        { key: "C", text: t`$30\ \mathrm{rad/s}$`, correct: false, misconceptionId: "C11-M10", value: "30" },
        { key: "D", text: t`$15\ \mathrm{rad/s}$`, correct: true, value: "15" },
      ],
      solution: {
        steps: [
          t`No external torque acts on the pair: $I\omega_1 = (I + I)\omega_2$.`,
          t`$\omega_2 = \dfrac{\omega_1}{2} = 15\ \mathrm{rad/s}$.`,
        ],
      },
    },
  ],
};
