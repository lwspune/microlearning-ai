import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Switch off the current through a big electromagnet and a bright spark can leap across the switch. The battery is already cut off. Where does that energy come from?`,
    reveal: t`From the magnetic field. Building up the current took work against the coil's back emf, and that work was stored in the field: $U = \dfrac{1}{2}LI^2$. When the current collapses, the field gives it back.`,
  },
  explanation: {
    intuition: [
      t`While the current in a coil is rising, the coil's emf pushes back against it.`,
      t`The source must do work against that emf to raise the current.`,
      t`That work is not lost: it is stored in the coil's magnetic field.`,
      t`When the current falls, the field returns the energy, keeping the current going for a moment.`,
    ],
    formal: [
      {
        title: "Energy stored",
        points: [
          t`At current $i$, the source does work at rate $P = |e|i = Li\dfrac{di}{dt}$.`,
          t`So $dW = Li\,di$; adding up from $0$ to $I$ gives $U = \dfrac{1}{2}LI^2$.`,
          t`$U$ depends on the final current only, not on how quickly it was built up.`,
          t`Doubling the current stores four times the energy.`,
        ],
      },
      {
        title: "Energy in the field",
        points: [
          t`For a solenoid, $L = \mu_0n^2lA$ and $B = \mu_0nI$, so $U$ $= \dfrac{B^2}{2\mu_0}\left(Al\right)$.`,
          t`The energy per unit volume of a magnetic field is $u = \dfrac{B^2}{2\mu_0}$.`,
          t`This holds for any magnetic field, not only inside a solenoid.`,
        ],
      },
    ],
    worked: {
      prompt: t`A coil of self-inductance $0.2\ \mathrm{H}$ carries a steady current of $5\ \mathrm{A}$. Find the energy stored in its magnetic field.`,
      steps: [
        t`$U = \dfrac{1}{2}LI^2$.`,
        t`$U$ $= \dfrac{1}{2} \times 0.2 \times 5^2$.`,
        t`$U = 2.5\ \mathrm{J}$.`,
      ],
      answer: t`$2.5\ \mathrm{J}$`,
    },
    visualSpec: t`Raise the current in a coil step by step and watch the stored energy grow as the square of the current.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Forgets the $\dfrac{1}{2}$.`,
      remediation: t`The current, and the opposing emf, grow from zero, so the work adds up to $\dfrac{1}{2}LI^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Forgets to square the current.",
      remediation: t`$U = \dfrac{1}{2}LI^2$: the energy grows as the square of the current.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Reads $\mathrm{mH}$ as $\mathrm{H}$.`,
      remediation: t`$1\ \mathrm{mH}$ $= 10^{-3}\ \mathrm{H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Forgets to square $B$.`,
      remediation: t`The energy density is $u = \dfrac{B^2}{2\mu_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: t`Multiplies by $\mu_0$ instead of dividing.`,
      remediation: t`$u = \dfrac{B^2}{2\mu_0}$; $\mu_0$ is in the denominator.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Thinks the energy is turned to heat in the wire.",
      remediation: "An ideal coil has no resistance, so no heat: the work is stored in the magnetic field.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Thinks the energy is in an electric field.",
      remediation: "That is how a capacitor stores energy; a coil stores it in its magnetic field.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Thinks a steady current stores no energy.",
      remediation: t`The emf acts only while the current changes, but the energy put in then stays in the field: $U = \dfrac{1}{2}LI^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Squares the change in current.",
      remediation: t`$\Delta U$ $= \dfrac{1}{2}L\left(I_2^2 - I_1^2\right)$, not $\dfrac{1}{2}L\left(I_2 - I_1\right)^2$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.1 (v)" },
      stem: t`What energy is stored in an inductor of $20\ \mathrm{mH}$ once a steady current of $1\ \mathrm{A}$ has been built up in it?`,
      verify: { kind: "value", inputs: { L_mH: "20", I: "1" }, params: { ask: "U" } },
      options: [
        { key: "A", text: t`$0.02\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M1", value: "0.0200000000000000" },
        { key: "B", text: t`$10\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M3", value: "10" },
        { key: "C", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M8", value: "0" },
        { key: "D", text: t`$0.01\ \mathrm{J}$`, correct: true, value: "0.0100000000000000" },
      ],
      solution: {
        steps: [
          t`$U = \dfrac{1}{2}LI^2$ $= \dfrac{1}{2} \times 20 \times 10^{-3} \times 1^2$.`,
          t`$U = 0.01\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`A coil of $50\ \mathrm{mH}$ stores $0.4\ \mathrm{J}$ in its magnetic field. What current flows in it?`,
      verify: { kind: "value", inputs: { L_mH: "50", U: "0.4" }, params: { ask: "I" } },
      options: [
        { key: "A", text: t`$4\ \mathrm{A}$`, correct: true, value: "4" },
        { key: "B", text: t`$2.83\ \mathrm{A}$`, correct: false, misconceptionId: "C10-M1", value: "2.83000000000000" },
        { key: "C", text: t`$16\ \mathrm{A}$`, correct: false, misconceptionId: "C10-M2", value: "16" },
        { key: "D", text: t`$0.126\ \mathrm{A}$`, correct: false, misconceptionId: "C10-M3", value: "0.126000000000000" },
      ],
      solution: {
        steps: [
          t`$I = \sqrt{\dfrac{2U}{L}}$ $= \sqrt{\dfrac{2 \times 0.4}{0.05}}$ $= \sqrt{16}$.`,
          t`$I = 4\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.8" },
      stem: t`What is the energy stored per unit volume in a region where the magnetic field is $0.2\ \mathrm{T}$? (Take $\mu_0$ $= 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { B: "0.2" }, params: { ask: "u" } },
      options: [
        { key: "A", text: t`$2.51 \times 10^{-8}\ \mathrm{J/m^3}$`, correct: false, misconceptionId: "C10-M5", value: "2.51000000000000e-8" },
        { key: "B", text: t`$15900\ \mathrm{J/m^3}$`, correct: true, value: "15900" },
        { key: "C", text: t`$31800\ \mathrm{J/m^3}$`, correct: false, misconceptionId: "C10-M1", value: "31800" },
        { key: "D", text: t`$79600\ \mathrm{J/m^3}$`, correct: false, misconceptionId: "C10-M4", value: "79600" },
      ],
      solution: {
        steps: [
          t`$u = \dfrac{B^2}{2\mu_0}$ $= \dfrac{0.2^2}{2 \times 4\pi \times 10^{-7}}$.`,
          t`$u \approx 1.59 \times 10^4\ \mathrm{J/m^3}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.28(i)" },
      stem: t`A steady current flows in an ideal coil of no resistance. Where is the energy that was spent in building up the current?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "where" } },
      options: [
        { key: "A", text: t`In an electric field between the turns`, correct: false, misconceptionId: "C10-M7", value: "e_field" },
        { key: "B", text: t`Nowhere: a steady current stores no energy`, correct: false, misconceptionId: "C10-M8", value: "nowhere" },
        { key: "C", text: t`In the magnetic field of the coil`, correct: true, value: "mag_field" },
        { key: "D", text: t`Turned to heat in the wire`, correct: false, misconceptionId: "C10-M6", value: "heat" },
      ],
      solution: {
        steps: [
          t`The work done against the back emf while the current grew is not turned to heat: the coil has no resistance.`,
          t`It is stored in the coil's magnetic field, $\dfrac{1}{2}LI^2$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`The current in a coil of $0.5\ \mathrm{H}$ is raised from $2\ \mathrm{A}$ to $4\ \mathrm{A}$. How much more energy does the coil now store?`,
      verify: { kind: "value", inputs: { L: "0.5", I1: "2", I2: "4" }, params: { ask: "dU" } },
      options: [
        { key: "A", text: t`$3\ \mathrm{J}$`, correct: true, value: "3" },
        { key: "B", text: t`$6\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M1", value: "6" },
        { key: "C", text: t`$0.5\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M2", value: "0.500000000000000" },
        { key: "D", text: t`$1\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M9", value: "1" },
      ],
      solution: {
        steps: [
          t`$\Delta U$ $= \dfrac{1}{2}L\left(I_2^2 - I_1^2\right)$ $= \dfrac{1}{2} \times 0.5 \times \left(16 - 4\right)$.`,
          t`$\Delta U = 3\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
