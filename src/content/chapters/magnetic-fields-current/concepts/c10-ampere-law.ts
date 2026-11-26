import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A cable television lead carries a signal current in along its core and back along its outer braid, yet a compass held beside it does not move. Why not?`,
    reveal: t`Ampère's law: round a loop enclosing the whole cable, $\oint\vec{B} \cdot d\vec{l} = \mu_0\left(I - I\right) = 0$. With no net current threading the loop, the field outside is zero.`,
  },
  explanation: {
    intuition: [
      t`Walk round a closed loop, adding up the part of $\vec{B}$ along each step: that sum is the **line integral** $\oint\vec{B} \cdot d\vec{l}$.`,
      t`**Ampère's circuital law**: this sum equals $\mu_0$ times the current threading the loop.`,
      t`Only currents passing through the loop count; currents outside it add nothing.`,
      t`With enough symmetry, $B$ is the same all along a well-chosen loop, and the law gives $B$ at once.`,
    ],
    formal: [
      {
        title: "Ampère's circuital law",
        points: [
          t`$\oint\vec{B} \cdot d\vec{l} = \mu_0I$, with $I$ the net current through the loop.`,
          t`Sign: curl the right hand's fingers along the loop; current along the thumb counts positive.`,
          t`A current running past the loop without threading it contributes zero.`,
        ],
      },
      {
        title: "A long straight wire",
        points: [
          t`Outside, a circle of radius $r$ has $B$ along it and constant: $B \times 2\pi r = \mu_0I$.`,
          t`So $B = \dfrac{\mu_0I}{2\pi r}$, as from the Biot–Savart law.`,
          t`Inside a wire of radius $R$ with uniform current, the circle encloses $I\dfrac{r^2}{R^2}$.`,
          t`So inside $B = \dfrac{\mu_0Ir}{2\pi R^2} = \dfrac{\mu_0Jr}{2}$, rising from zero at the axis.`,
        ],
      },
      {
        title: "A coaxial cable",
        points: [
          t`Between the core and the sheath, only the core's current $I$ is enclosed: $B = \dfrac{\mu_0I}{2\pi r}$.`,
          t`Outside the sheath, $+I$ and $-I$ are both enclosed: the net current is zero, so $B = 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A long straight wire of radius $4\ \mathrm{mm}$ carries $8\ \mathrm{A}$ spread evenly over its cross-section. Find $B$ at $2\ \mathrm{mm}$ and at $8\ \mathrm{mm}$ from its axis.`,
      steps: [
        t`Inside, at $r = 2\ \mathrm{mm}$: $B = \dfrac{\mu_0Ir}{2\pi R^2}$ $= \dfrac{2 \times 10^{-7} \times 8 \times 0.002}{0.004^2}$.`,
        t`$B = 2 \times 10^{-4}\ \mathrm{T}$.`,
        t`Outside, at $r = 8\ \mathrm{mm}$: $B = \dfrac{\mu_0I}{2\pi r} = \dfrac{2 \times 10^{-7} \times 8}{0.008}$ $= 2 \times 10^{-4}\ \mathrm{T}$.`,
      ],
      answer: t`$2 \times 10^{-4}\ \mathrm{T}$ at both points`,
    },
    visualSpec: t`Drag an Amperian loop around a set of wires and watch the sum of B along it track only the currents it encloses.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Counts only the core's current outside a coaxial cable.",
      remediation: t`A loop outside the sheath encloses both conductors: $I - I = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Adds the sizes of two opposite currents.",
      remediation: "Currents threading the loop in opposite directions count with opposite signs.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Uses the sheath's radius for every point outside.",
      remediation: t`The loop through the point has the point's own radius $r$; but here the enclosed current is zero anyway.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Thinks the sheath cancels the field between the conductors.",
      remediation: t`A loop between the core and the sheath encloses only the core's current: $B = \dfrac{\mu_0I}{2\pi r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: t`Forgets the $2\pi$ of the loop's length.`,
      remediation: t`The circle's length is $2\pi r$: $B \times 2\pi r = \mu_0I$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Uses $4\pi$, as in the Biot–Savart constant.`,
      remediation: t`Ampère's law uses the loop's length, $2\pi r$: $B = \dfrac{\mu_0I}{2\pi r}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C10-M7",
      mistake: "Forgets the 2 inside a wire.",
      remediation: t`$B \times 2\pi r = \mu_0J\pi r^2$ gives $B = \dfrac{\mu_0Jr}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Uses the outside formula inside the wire.",
      remediation: t`Inside, the loop encloses only part of the current, $I\dfrac{r^2}{R^2}$, so $B$ grows with $r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: t`Takes $B$ as growing with $r^2$ inside.`,
      remediation: t`The enclosed current grows as $r^2$ but the loop's length as $r$: $B \propto r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Ignores the loop's sense when signing the current.",
      remediation: "Curl the right hand along the loop: a current opposite to the thumb counts negative.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Counts a current that passes near the loop without threading it.",
      remediation: "Only current passing through a surface bounded by the loop counts.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: t`Thinks $\oint\vec{B} \cdot d\vec{l}$ is always zero for a closed loop.`,
      remediation: t`It is zero only when no net current threads the loop; otherwise it is $\mu_0I$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Thinks the magnetic field is zero inside a conductor.",
      remediation: "That is true of the electric field in electrostatics; a current-carrying wire has a magnetic field inside it.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Solved Ex.10.7" },
      stem: t`A coaxial cable has a central core of radius $a$ and an outer cylindrical sheath of radius $b$. They carry equal currents $I$, in opposite directions. What is the magnetic field at a distance $r > b$ from the axis?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "coax_out" } },
      options: [
        { key: "A", text: t`$\dfrac{\mu_0I}{2\pi r}$`, correct: false, misconceptionId: "C10-M1", value: "core_only" },
        { key: "B", text: t`$\dfrac{\mu_0I}{\pi r}$`, correct: false, misconceptionId: "C10-M2", value: "both_add" },
        { key: "C", text: t`$\dfrac{\mu_0I}{2\pi b}$`, correct: false, misconceptionId: "C10-M3", value: "outer_radius" },
        { key: "D", text: t`Zero`, correct: true, value: "zero" },
      ],
      solution: {
        steps: [
          t`A loop of radius $r > b$ encloses $+I$ in the core and $-I$ in the sheath.`,
          t`Net current enclosed is zero, so $\oint\vec{B} \cdot d\vec{l} = 0$ and $B = 0$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Solved Ex.10.7" },
      stem: t`The core of a coaxial cable carries $2\ \mathrm{A}$, and the sheath carries $2\ \mathrm{A}$ back. What is the magnetic field between them, $1\ \mathrm{cm}$ from the axis? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { I: "2", r_cm: "1" }, params: { ask: "coax_mid" } },
      options: [
        { key: "A", text: t`$4 \times 10^{-5}\ \mathrm{T}$`, correct: true, value: "4.00000000000000e-5" },
        { key: "B", text: t`$0\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M4", value: "0" },
        { key: "C", text: t`$2.51 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M5", value: "0.000251000000000000" },
        { key: "D", text: t`$2 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M6", value: "2.00000000000000e-5" },
      ],
      solution: {
        steps: [
          t`Between the conductors the loop encloses only the core's $2\ \mathrm{A}$.`,
          t`$B = \dfrac{\mu_0I}{2\pi r} = \dfrac{2 \times 10^{-7} \times 2}{0.01} = 4 \times 10^{-5}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.21" },
      stem: t`A long straight wire carries a current of uniform density $J$ across its cross-section. What is the magnetic field inside it, at a distance $r$ from its axis?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "inside_j" } },
      options: [
        { key: "A", text: t`$\dfrac{\mu_0Jr^2}{2}$`, correct: false, misconceptionId: "C10-M9", value: "half_jr2" },
        { key: "B", text: t`$\dfrac{\mu_0Jr}{2}$`, correct: true, value: "half_jr" },
        { key: "C", text: t`$\mu_0Jr$`, correct: false, misconceptionId: "C10-M7", value: "jr" },
        { key: "D", text: t`$\dfrac{\mu_0J}{2\pi r}$`, correct: false, misconceptionId: "C10-M8", value: "outside_form" },
      ],
      solution: {
        steps: [
          t`A circle of radius $r$ encloses $J\pi r^2$.`,
          t`$B \times 2\pi r = \mu_0J\pi r^2$, so $B = \dfrac{\mu_0Jr}{2}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.1 (ii)" },
      stem: t`A current $I$ threads Amperian loop a, which is traversed in the sense opposite to the one the right-hand rule gives for $I$. The same current runs past loop b without threading it. What is $\oint\vec{B} \cdot d\vec{l}$ for loops a and b, in that order?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "loops" } },
      options: [
        { key: "A", text: t`$-\mu_0I$ and $-\mu_0I$`, correct: false, misconceptionId: "C10-M11", value: "neg_neg" },
        { key: "B", text: t`$0$ and $0$`, correct: false, misconceptionId: "C10-M12", value: "zero_zero" },
        { key: "C", text: t`$-\mu_0I$ and $0$`, correct: true, value: "neg_zero" },
        { key: "D", text: t`$\mu_0I$ and $0$`, correct: false, misconceptionId: "C10-M10", value: "pos_zero" },
      ],
      solution: {
        steps: [
          t`Loop a is threaded by $I$ against its right-hand sense: $-\mu_0I$.`,
          t`Loop b is not threaded by any current: $0$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.21" },
      stem: t`A long straight wire of radius $2\ \mathrm{cm}$ carries $10\ \mathrm{A}$, spread evenly over its cross-section. What is the magnetic field inside it, $1\ \mathrm{cm}$ from its axis? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { I: "10", r_cm: "1", R_cm: "2" }, params: { ask: "inside" } },
      options: [
        { key: "A", text: t`$5 \times 10^{-5}\ \mathrm{T}$`, correct: true, value: "5.00000000000000e-5" },
        { key: "B", text: t`$2 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M8", value: "0.000200000000000000" },
        { key: "C", text: t`$1 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M7", value: "0.000100000000000000" },
        { key: "D", text: t`$0\ \mathrm{T}$`, correct: false, misconceptionId: "C10-M13", value: "0" },
      ],
      solution: {
        steps: [
          t`Inside: $B = \dfrac{\mu_0Ir}{2\pi R^2} = \dfrac{2 \times 10^{-7} \times 10 \times 0.01}{0.02^2}$.`,
          t`$B = 5 \times 10^{-5}\ \mathrm{T}$.`,
        ],
      },
    },
  ],
};
