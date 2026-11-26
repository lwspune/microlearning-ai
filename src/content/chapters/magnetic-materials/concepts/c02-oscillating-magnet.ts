import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Nudge a compass needle and it does not just settle: it swings to and fro a few times first. Could the time of a swing measure the Earth's field?`,
    reveal: t`Yes. Twisted a little, the magnet performs angular S.H.M. with $T = 2\pi\sqrt{\dfrac{I}{mB}}$. Time the swings, and the field follows.`,
  },
  explanation: {
    intuition: [
      t`A magnet turned slightly from the field direction feels a torque pulling it back.`,
      t`For small angles that torque is proportional to the angle: the magnet performs **angular S.H.M.**`,
      t`A stronger field or a stronger magnet pulls back harder, so it swings faster.`,
      t`A heavier, longer magnet has more moment of inertia, so it swings more slowly.`,
    ],
    formal: [
      {
        title: "The period",
        points: [
          t`Restoring torque: $\tau$ $= -mB\sin\theta \approx -mB\theta$ for small $\theta$.`,
          t`With moment of inertia $I$: $I\dfrac{d^2\theta}{dt^2}$ $= -mB\theta$, angular S.H.M.`,
          t`So $T = 2\pi\sqrt{\dfrac{I}{mB}}$, and rearranged, $mB = \dfrac{4\pi^2I}{T^2}$.`,
          t`$T$ is the time for one oscillation: total time divided by the number of oscillations.`,
        ],
      },
      {
        title: "Moment of inertia of a bar",
        points: [
          t`A bar of mass $M$, sides $l$ and $b$ across the axis of turning: $I$ $= \dfrac{M\left(l^2 + b^2\right)}{12}$.`,
          t`A thin magnet of length $L$: $I = \dfrac{ML^2}{12}$.`,
          t`Cut across into halves: each has $I' = \dfrac{I}{8}$ and $m' = \dfrac{m}{2}$, so $T' = \dfrac{T}{2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A magnet of moment of inertia $2 \times 10^{-6}\ \mathrm{kg\,m^2}$ and moment $0.5\ \mathrm{A\,m^2}$ makes $20$ oscillations in $40\ \mathrm{s}$ in a field. Find the field.`,
      steps: [
        t`$T = \dfrac{40}{20} = 2\ \mathrm{s}$.`,
        t`$B = \dfrac{4\pi^2I}{T^2m}$ $= \dfrac{4\pi^2 \times 2 \times 10^{-6}}{4 \times 0.5}$.`,
        t`$B \approx 3.95 \times 10^{-5}\ \mathrm{T}$.`,
      ],
      answer: t`$3.95 \times 10^{-5}\ \mathrm{T}$`,
    },
    visualSpec: t`Twist a magnet in a field, let it go, and time its swings as you change the field's strength.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Takes the frequency as the period.",
      remediation: t`$T$ is time per oscillation: $10$ per minute means $T = 6\ \mathrm{s}$, not $\dfrac{1}{6}$.`,
      fallback: { kind: "ext", topic: "period and frequency (Oscillations, Ch.5)" },
    },
    {
      id: "C02-M2",
      mistake: t`Leaves $\mathrm{cm^2}$ unconverted.`,
      remediation: t`$1\ \mathrm{g\,cm^2}$ $= 10^{-3} \times 10^{-4}$ $= 10^{-7}\ \mathrm{kg\,m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Leaves the field in gauss.",
      remediation: t`$1$ gauss $= 10^{-4}\ \mathrm{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Keeps the magnetic moment unchanged when the magnet is cut in half.",
      remediation: t`Each half keeps the pole strength but has half the length: $m' = \dfrac{m}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks a smaller magnet swings more slowly.",
      remediation: t`$I$ falls eightfold but $m$ only twofold: $T \propto \sqrt{\dfrac{I}{m}}$ halves.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Drops the square root.",
      remediation: t`$T = 2\pi\sqrt{\dfrac{I}{mB}}$: $\sqrt{\dfrac{1/8}{1/2}}$ $= \dfrac{1}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Uses the total time as the period.",
      remediation: t`Divide by the number of oscillations: $T = \dfrac{6}{10}$ $= 0.6\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Forgets the $4\pi^2$.`,
      remediation: t`Squaring $T = 2\pi\sqrt{\dfrac{I}{mB}}$ gives $T^2 = \dfrac{4\pi^2I}{mB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Takes the moment of inertia about the wrong axis.",
      remediation: t`Turning about a vertical axis, the sides across it are the horizontal ones, $l$ and $b$: $I$ $= \dfrac{M\left(l^2 + b^2\right)}{12}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Uses a thin rod's moment of inertia for a block.",
      remediation: t`A block has breadth as well as length across the axis: $I$ $= \dfrac{M\left(l^2 + b^2\right)}{12}$.`,
      fallback: { kind: "ext", topic: "moment of inertia (Rotational Dynamics, Ch.1)" },
    },
    {
      id: "C02-M11",
      mistake: "Leaves the sides in mm.",
      remediation: t`Put the sides in metres before squaring: $40\ \mathrm{mm} = 0.04\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: t`Takes the period as proportional to $B$.`,
      remediation: t`A stronger field pulls back harder, so the magnet swings faster: $T \propto \dfrac{1}{\sqrt{B}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: t`Takes the period as proportional to $\dfrac{1}{B}$.`,
      remediation: t`$T = 2\pi\sqrt{\dfrac{I}{mB}}$: four times $B$ halves $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks the period does not depend on the field.",
      remediation: t`The field supplies the restoring torque: $T \propto \dfrac{1}{\sqrt{B}}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Solved Ex.11.1" },
      stem: t`A bar magnet of moment of inertia $500\ \mathrm{g\,cm^2}$ makes $10$ oscillations per minute in a horizontal plane, where the horizontal component of the Earth's field is $0.36$ gauss. What is its magnetic moment? ($1$ gauss $= 10^{-4}\ \mathrm{T}$.)`,
      verify: { kind: "value", inputs: { I_gcm2: "500", N: "10", G: "0.36" }, params: { ask: "m" } },
      options: [
        { key: "A", text: t`$1.52\ \mathrm{A\,m^2}$`, correct: true, value: "1.52000000000000" },
        { key: "B", text: t`$1970\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C02-M1", value: "1970" },
        { key: "C", text: t`$15200\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C02-M2", value: "15200" },
        { key: "D", text: t`$1.52 \times 10^{-4}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C02-M3", value: "0.000152000000000000" },
      ],
      solution: {
        steps: [
          t`$T = \dfrac{60}{10} = 6\ \mathrm{s}$, $I$ $= 5 \times 10^{-5}\ \mathrm{kg\,m^2}$, $B = 3.6 \times 10^{-5}\ \mathrm{T}$.`,
          t`$m = \dfrac{4\pi^2I}{T^2B}$ $= \dfrac{4\pi^2 \times 5 \times 10^{-5}}{36 \times 3.6 \times 10^{-5}}$.`,
          t`$m \approx 1.52\ \mathrm{A\,m^2}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.1 (iv)" },
      stem: t`A bar magnet hung freely oscillates with period $T$. It is cut across into two equal halves, and one half is made to oscillate in the same field. What is the ratio $\dfrac{T'}{T}$ of the new period to the old?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "half" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{2\sqrt{2}}$`, correct: false, misconceptionId: "C02-M4", value: "one_over_2r2" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C02-M5", value: "two" },
        { key: "C", text: t`$\dfrac{1}{4}$`, correct: false, misconceptionId: "C02-M6", value: "quarter" },
        { key: "D", text: t`$\dfrac{1}{2}$`, correct: true, value: "half" },
      ],
      solution: {
        steps: [
          t`Each half has $\dfrac{M}{2}$ and $\dfrac{L}{2}$, so $I' = \dfrac{I}{8}$; the pole strength stays, so $m' = \dfrac{m}{2}$.`,
          t`$\dfrac{T'}{T}$ $= \sqrt{\dfrac{I'/m'}{I/m}}$ $= \sqrt{\dfrac{1}{4}}$ $= \dfrac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.8" },
      stem: t`A magnetic needle of moment $2 \times 10^{-2}\ \mathrm{A\,m^2}$ and moment of inertia $7.2 \times 10^{-7}\ \mathrm{kg\,m^2}$ makes $10$ complete oscillations in $6\ \mathrm{s}$ in a uniform field. What is the field?`,
      verify: { kind: "value", inputs: { I: "7.2e-7", m: "0.02", N: "10", t: "6" }, params: { ask: "B" } },
      options: [
        { key: "A", text: t`$3.95 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C02-M7", value: "3.95000000000000e-5" },
        { key: "B", text: t`$0.00395\ \mathrm{T}$`, correct: true, value: "0.00395000000000000" },
        { key: "C", text: t`$5.12 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C02-M1", value: "0.000512000000000000" },
        { key: "D", text: t`$1 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C02-M8", value: "0.000100000000000000" },
      ],
      solution: {
        steps: [
          t`$T = \dfrac{6}{10}$ $= 0.6\ \mathrm{s}$.`,
          t`$B = \dfrac{4\pi^2I}{T^2m}$ $= \dfrac{4\pi^2 \times 7.2 \times 10^{-7}}{0.36 \times 0.02}$.`,
          t`$B \approx 3.95 \times 10^{-3}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.10" },
      stem: t`A bar magnet of mass $120\ \mathrm{g}$ has sides $l = 40\ \mathrm{mm}$, $b = 100\ \mathrm{mm}$ and $h = 80\ \mathrm{mm}$, with $h$ vertical. It oscillates about a vertical axis in a horizontal field with a period of $\pi\ \mathrm{s}$. Its magnetic moment is $3.4\ \mathrm{A\,m^2}$. What is the field?`,
      verify: { kind: "value", inputs: { M_g: "120", l_mm: "40", b_mm: "100", h_mm: "80", T: "pi", m: "3.4" }, params: { ask: "box" } },
      options: [
        { key: "A", text: t`$136\ \mathrm{T}$`, correct: false, misconceptionId: "C02-M11", value: "136" },
        { key: "B", text: t`$1.36 \times 10^{-4}\ \mathrm{T}$`, correct: true, value: "0.000136000000000000" },
        { key: "C", text: t`$9.41 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C02-M9", value: "9.41000000000000e-5" },
        { key: "D", text: t`$1.88 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C02-M10", value: "1.88000000000000e-5" },
      ],
      solution: {
        steps: [
          t`About the vertical axis: $I$ $= \dfrac{0.12\left(0.04^2 + 0.1^2\right)}{12}$ $= 1.16 \times 10^{-4}\ \mathrm{kg\,m^2}$.`,
          t`$B = \dfrac{4\pi^2I}{T^2m}$ $= \dfrac{4\pi^2 \times 1.16 \times 10^{-4}}{\pi^2 \times 3.4}$.`,
          t`$B \approx 1.36 \times 10^{-4}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`A magnet oscillates in a uniform field. The field is made four times as strong. What happens to the period?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "scale" } },
      options: [
        { key: "A", text: t`It stays the same`, correct: false, misconceptionId: "C02-M14", value: "same" },
        { key: "B", text: t`It halves`, correct: true, value: "halves" },
        { key: "C", text: t`It becomes four times as long`, correct: false, misconceptionId: "C02-M12", value: "four_times" },
        { key: "D", text: t`It becomes a quarter`, correct: false, misconceptionId: "C02-M13", value: "quarter" },
      ],
      solution: {
        steps: [
          t`$T = 2\pi\sqrt{\dfrac{I}{mB}}$, so $T \propto \dfrac{1}{\sqrt{B}}$.`,
          t`Four times the field: $T$ falls by $\sqrt{4} = 2$, so it halves.`,
        ],
      },
    },
  ],
};
