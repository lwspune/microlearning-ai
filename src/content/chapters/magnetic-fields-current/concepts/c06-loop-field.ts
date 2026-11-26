import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Bend a straight wire into a circle and pass the same current. Every bit of the wire now sits the same distance from the centre, and every bit's field there points the same way. What do they add up to?`,
    reveal: t`A strong field along the axis: $B = \dfrac{\mu_0I}{2R}$ at the centre, $N$ times that for $N$ turns. A part of the circle, an arc of angle $\theta$, gives its share: $\dfrac{\mu_0I\theta}{4\pi R}$.`,
  },
  explanation: {
    intuition: [
      t`Every element of a circular loop is at the same distance $R$ from the centre, and at right angles to the line joining them.`,
      t`So by the Biot–Savart law each element's field at the centre has the same size and the same direction, along the axis.`,
      t`Adding them all gives the loop's field at its centre.`,
      t`A straight lead pointing at the centre adds nothing there, as $d\vec{l}$ is along $\vec{r}$.`,
    ],
    formal: [
      {
        title: "At the centre",
        points: [
          t`For an arc of angle $\theta$ (in radians): $B = \dfrac{\mu_0}{4\pi}\dfrac{I}{R^2} \times R\theta = \dfrac{\mu_0I\theta}{4\pi R}$.`,
          t`A full turn, $\theta = 2\pi$: $B = \dfrac{\mu_0I}{2R}$.`,
          t`A closely wound coil of $N$ turns: $B = \dfrac{\mu_0NI}{2R}$, with $R$ the radius.`,
          t`Its direction comes from the right-hand rule: fingers along the current, thumb along $\vec{B}$.`,
        ],
      },
      {
        title: "On the axis",
        points: [
          t`At a distance $x$ along the axis from the centre: $B = \dfrac{\mu_0NIR^2}{2\left(R^2 + x^2\right)^{3/2}}$.`,
          t`At $x = 0$ this is $\dfrac{\mu_0NI}{2R}$; far away it falls as $\dfrac{1}{x^3}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A coil of $50$ turns, each of radius $5\ \mathrm{cm}$, carries $2\ \mathrm{A}$. Find the field at its centre. (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      steps: [
        t`$B = \dfrac{\mu_0NI}{2R} = \dfrac{4\pi \times 10^{-7} \times 50 \times 2}{2 \times 0.05}$.`,
        t`$B = 4\pi \times 10^{-4}$.`,
        t`$B \approx 1.26 \times 10^{-3}\ \mathrm{T}$, along the coil's axis.`,
      ],
      answer: t`$1.26 \times 10^{-3}\ \mathrm{T}$`,
    },
    visualSpec: t`Bend a wire into an arc and then a full circle, watching the field at the centre grow with the angle enclosed.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Forgets the number of turns.",
      remediation: t`Each of the $N$ turns adds the same field at the centre: $B = \dfrac{\mu_0NI}{2R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Uses the diameter for $R$.`,
      remediation: t`$R$ is the radius of each turn.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Uses the straight wire's $\dfrac{\mu_0I}{2\pi r}$.`,
      remediation: t`A circle concentrates every element's field at its centre: $\dfrac{\mu_0I}{2R}$, with no $\pi$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Leaves the radius in cm.",
      remediation: t`Put $R$ in metres: $10\ \mathrm{cm} = 0.1\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Forgets the 2: takes $\dfrac{\mu_0NI}{R}$.`,
      remediation: t`From the arc formula with $\theta = 2\pi$: $\dfrac{\mu_0I \times 2\pi}{4\pi R} = \dfrac{\mu_0I}{2R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Uses the whole loop's field for an arc.",
      remediation: t`An arc gives only its share: $\dfrac{\mu_0I\theta}{4\pi R}$, with $\theta$ the angle it subtends.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: t`Drops the arc's angle $\pi$.`,
      remediation: t`A semicircle subtends $\theta = \pi$: $\dfrac{\mu_0I\pi}{4\pi R} = \dfrac{\mu_0I}{4R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Keeps the $R^2$ of the Biot–Savart law.`,
      remediation: t`Adding the elements multiplies by the arc length $R\theta$, cancelling one $R$: $\dfrac{\mu_0I\theta}{4\pi R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: t`Drops $R$ altogether.`,
      remediation: t`The field falls with the radius: $\dfrac{\mu_0I\theta}{4\pi R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Uses the field at the centre for a point on the axis.",
      remediation: t`Off the centre the field weakens: $\dfrac{\mu_0IR^2}{2\left(R^2 + x^2\right)^{3/2}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: t`Drops the $\dfrac{3}{2}$ power.`,
      remediation: t`The denominator is $\left(R^2 + x^2\right)^{3/2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Uses the straight-wire formula at the axial distance.",
      remediation: t`A loop's field on its axis follows $\dfrac{\mu_0IR^2}{2\left(R^2 + x^2\right)^{3/2}}$, not $\dfrac{\mu_0I}{2\pi x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Puts the arc's angle in degrees.",
      remediation: t`$\theta$ must be in radians: $90^\circ = \dfrac{\pi}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Counts the straight leads that point at the centre.",
      remediation: t`For a lead pointing at O, $d\vec{l}$ is along $\vec{r}$, so $\sin\theta = 0$: it adds nothing at O.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.12" },
      stem: t`A circular coil has $100$ turns, each of radius $8.0\ \mathrm{cm}$, and carries $0.40\ \mathrm{A}$. What is the magnetic field at its centre? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { N: "100", R_cm: "8", I: "0.4" }, params: { ask: "coil" } },
      options: [
        { key: "A", text: t`$3.14 \times 10^{-6}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M1", value: "3.14000000000000e-6" },
        { key: "B", text: t`$1.57 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M2", value: "0.000157000000000000" },
        { key: "C", text: t`$1 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M3", value: "0.000100000000000000" },
        { key: "D", text: t`$3.14 \times 10^{-4}\ \mathrm{T}$`, correct: true, value: "0.000314000000000000" },
      ],
      solution: {
        steps: [
          t`$B = \dfrac{\mu_0NI}{2R} = \dfrac{4\pi \times 10^{-7} \times 100 \times 0.4}{2 \times 0.08}$.`,
          t`$B \approx 3.14 \times 10^{-4}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.15" },
      stem: t`A circular coil has $200$ turns, each of radius $10\ \mathrm{cm}$, and carries $0.5\ \mathrm{A}$. What is the magnetic field at its centre? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { N: "200", R_cm: "10", I: "0.5" }, params: { ask: "coil" } },
      options: [
        { key: "A", text: t`$6.28 \times 10^{-4}\ \mathrm{T}$`, correct: true, value: "0.000628000000000000" },
        { key: "B", text: t`$6.28 \times 10^{-6}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M4", value: "6.28000000000000e-6" },
        { key: "C", text: t`$0.00126\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M5", value: "0.00126000000000000" },
        { key: "D", text: t`$2 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M3", value: "0.000200000000000000" },
      ],
      solution: {
        steps: [
          t`$B = \dfrac{\mu_0NI}{2R} = \dfrac{4\pi \times 10^{-7} \times 200 \times 0.5}{2 \times 0.1}$.`,
          t`$B = 2\pi \times 10^{-4} \approx 6.28 \times 10^{-4}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.1 (i)" },
      stem: t`A wire carrying a current $I$ runs straight towards a point P, round a semicircle of radius $R$ centred on P, and straight away from P again. What is the magnetic field at P?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "semi" } },
      options: [
        { key: "A", text: t`$\dfrac{\mu_0I}{4R}$`, correct: true, value: "mu0I_4R" },
        { key: "B", text: t`$\dfrac{\mu_0}{4\pi}\dfrac{I}{R}$`, correct: false, misconceptionId: "C06-M7", value: "mu0I_4piR" },
        { key: "C", text: t`$\dfrac{\mu_0}{4\pi}\dfrac{I}{R^2}$`, correct: false, misconceptionId: "C06-M8", value: "mu0I_4piR2" },
        { key: "D", text: t`$\dfrac{\mu_0I}{4\pi}$`, correct: false, misconceptionId: "C06-M9", value: "mu0I_4pi" },
      ],
      solution: {
        steps: [
          t`The straight parts point at P, so they add nothing there.`,
          t`The semicircle, $\theta = \pi$, gives $\dfrac{\mu_0I\pi}{4\pi R} = \dfrac{\mu_0I}{4R}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.11" },
      stem: t`A circular loop of radius $9.7\ \mathrm{cm}$ carries $2.3\ \mathrm{A}$. What is the magnetic field on its axis, $9.7\ \mathrm{cm}$ from its centre? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { R_cm: "9.7", x_cm: "9.7", I: "2.3" }, params: { ask: "axis" } },
      options: [
        { key: "A", text: t`$4.74 \times 10^{-6}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M12", value: "4.74000000000000e-6" },
        { key: "B", text: t`$5.27 \times 10^{-6}\ \mathrm{T}$`, correct: true, value: "5.27000000000000e-6" },
        { key: "C", text: t`$1.49 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M10", value: "1.49000000000000e-5" },
        { key: "D", text: t`$7.23 \times 10^{-7}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M11", value: "7.23000000000000e-7" },
      ],
      solution: {
        steps: [
          t`With $x = R$: $B = \dfrac{\mu_0IR^2}{2\left(2R^2\right)^{3/2}} = \dfrac{\mu_0I}{2R} \times \dfrac{1}{2\sqrt{2}}$.`,
          t`$\dfrac{\mu_0I}{2R} = 1.49 \times 10^{-5}\ \mathrm{T}$, so $B \approx 5.27 \times 10^{-6}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.5" },
      stem: t`A wire carrying $10\ \mathrm{A}$ runs straight in towards a point O, round a quarter circle of radius $5\ \mathrm{cm}$ centred on O, and straight out again. What is the magnetic field at O? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { deg: "90", R_cm: "5", I: "10" }, params: { ask: "arc" } },
      options: [
        { key: "A", text: t`$3.14 \times 10^{-5}\ \mathrm{T}$`, correct: true, value: "3.14000000000000e-5" },
        { key: "B", text: t`$0.0018\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M13", value: "0.00180000000000000" },
        { key: "C", text: t`$1.26 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M6", value: "0.000126000000000000" },
        { key: "D", text: t`$7.14 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C06-M14", value: "7.14000000000000e-5" },
      ],
      solution: {
        steps: [
          t`The radial straight parts add nothing at O. The arc has $\theta = \dfrac{\pi}{2}$.`,
          t`$B = \dfrac{\mu_0I\theta}{4\pi R} = \dfrac{10^{-7} \times 10 \times \pi/2}{0.05}$.`,
          t`$B \approx 3.14 \times 10^{-5}\ \mathrm{T}$.`,
        ],
      },
    },
  ],
};
