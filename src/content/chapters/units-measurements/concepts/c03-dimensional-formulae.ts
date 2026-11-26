import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Speed, momentum, force and energy all have different units. Yet underneath, each is built only from mass, length and time. How can we see exactly how?`,
    reveal: t`By writing its **dimensions**: the powers of mass $M$, length $L$ and time $T$ it contains. Force, for example, is $\left[L^1M^1T^{-2}\right]$.`,
  },
  explanation: {
    intuition: [
      t`Every derived quantity is built from base quantities by multiplying and dividing.`,
      t`Its **dimensions** are the powers to which each base quantity is raised.`,
      t`We write them in square brackets: speed is length over time, $\left[L^1T^{-1}\right]$.`,
      t`Numbers like $\dfrac{1}{2}$ or $\pi$ have no dimensions.`,
      t`Quantities with the same dimensions, such as work and kinetic energy, are the same kind of thing.`,
    ],
    formal: [
      {
        title: "Dimensional formulae",
        points: [
          t`The **dimensional formula** of a quantity shows its dimensions in $M$, $L$, $T$ (and $I$ for current, $K$ for temperature).`,
          t`Build it from a defining formula: acceleration $= \dfrac{\text{velocity}}{\text{time}}$ $= \left[L^1T^{-2}\right]$.`,
          t`Force $= ma$: $\left[L^1M^1T^{-2}\right]$; work $= Fd$: $\left[L^2M^1T^{-2}\right]$; pressure $= \dfrac{F}{A}$: $\left[L^{-1}M^1T^{-2}\right]$.`,
          t`Pure numbers, and ratios like strain or angle, are **dimensionless**: $\left[L^0M^0T^0\right]$.`,
        ],
      },
      {
        title: "Working with dimensions",
        points: [
          t`Multiply quantities: add their powers. Divide: subtract them.`,
          t`A square root halves every power: $\sqrt{\left[T^2\right]}$ $= \left[T^1\right]$.`,
          t`Charge is current times time: $\left[I^1T^1\right]$.`,
          t`All energies, kinetic, potential or heat, share the dimensions $\left[L^2M^1T^{-2}\right]$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the dimensional formula of momentum, $p = mv$, and of power, $P = \dfrac{W}{t}$.`,
      steps: [
        t`Momentum: $\left[M^1\right] \times \left[L^1T^{-1}\right]$ $= \left[L^1M^1T^{-1}\right]$.`,
        t`Work is $\left[L^2M^1T^{-2}\right]$; dividing by time subtracts one from the power of $T$.`,
        t`Power: $\left[L^2M^1T^{-3}\right]$.`,
      ],
      answer: t`$\left[L^1M^1T^{-1}\right]$; $\left[L^2M^1T^{-3}\right]$`,
    },
    visualSpec: t`Build a quantity's formula step by step and watch the powers of M, L and T add and subtract.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Takes force for work.",
      remediation: t`Work is force times distance, so it has an extra $L$: $\left[L^2M^1T^{-2}\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Leaves out the mass.",
      remediation: t`$\left[L^1T^{-2}\right]$ is acceleration; force is mass times acceleration.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Confuses $T^{-2}$ with $T^{-1}$.`,
      remediation: t`Momentum $mv$ is $\left[L^1M^1T^{-1}\right]$; force is its rate of change, one more power of $T^{-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks energy has the dimensions of force.",
      remediation: t`Energy is force times distance: $\left[L^2M^1T^{-2}\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks energy has the dimensions of pressure.",
      remediation: t`Pressure is force per area, $\left[L^{-1}M^1T^{-2}\right]$; energy is $\left[L^2M^1T^{-2}\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks kinetic energy has the dimensions of momentum.",
      remediation: t`$\dfrac{1}{2}mv^2$ has $v$ squared: $\left[L^2M^1T^{-2}\right]$, not $\left[L^1M^1T^{-1}\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: t`Turns $\dfrac{l}{g}$ upside down.`,
      remediation: t`$\left[\dfrac{l}{g}\right]$ $= \dfrac{\left[L\right]}{\left[LT^{-2}\right]}$ $= \left[T^2\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Forgets the square root.",
      remediation: t`$\sqrt{\left[T^2\right]}$ $= \left[T^1\right]$: halve the powers.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: t`Forgets the leading $l$.`,
      remediation: t`$l\sqrt{\dfrac{l}{g}}$ is $l$ times a time: $\left[L^1T^1\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Treats the charge as dimensionless.",
      remediation: t`Charge is current times time: $\left[I^1T^1\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Multiplies instead of dividing.",
      remediation: t`$B = \dfrac{F}{ev}$: divide the force by charge and velocity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Gives charge the dimensions of current.",
      remediation: t`Charge is current times time, $\left[I^1T^1\right]$, not $\left[I^1\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Forgets to divide by the area.",
      remediation: t`Pressure is force per area: $\dfrac{\left[L^1M^1T^{-2}\right]}{\left[L^2\right]}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Multiplies by the area.",
      remediation: t`Pressure is force *per* area: divide by $\left[L^2\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Leaves out force's own power of length.",
      remediation: t`Force is $\left[L^1M^1T^{-2}\right]$; dividing by $\left[L^2\right]$ gives $\left[L^{-1}M^1T^{-2}\right]$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.1 (i)" },
      stem: t`$\left[L^1M^1T^{-2}\right]$ is the dimensional formula of which quantity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "LMT" } },
      options: [
        { key: "A", text: t`Acceleration`, correct: false, misconceptionId: "C03-M2", value: "accel_q" },
        { key: "B", text: t`Momentum`, correct: false, misconceptionId: "C03-M3", value: "momentum_q" },
        { key: "C", text: t`Force`, correct: true, value: "force_q" },
        { key: "D", text: t`Work`, correct: false, misconceptionId: "C03-M1", value: "work_q" },
      ],
      solution: {
        steps: [
          t`$F = ma$: $\left[M^1\right] \times \left[L^1T^{-2}\right]$.`,
          t`$\left[L^1M^1T^{-2}\right]$ is force.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.1 (iv)" },
      stem: t`Kinetic energy has the same dimensions as which of these?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ke" } },
      options: [
        { key: "A", text: t`Pressure`, correct: false, misconceptionId: "C03-M5", value: "pressure_k" },
        { key: "B", text: t`Momentum`, correct: false, misconceptionId: "C03-M6", value: "momentum_k" },
        { key: "C", text: t`Work`, correct: true, value: "work_k" },
        { key: "D", text: t`Force`, correct: false, misconceptionId: "C03-M4", value: "force_k" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{2}mv^2$: $\left[M^1\right]\left[L^1T^{-1}\right]^2$ $= \left[L^2M^1T^{-2}\right]$.`,
          t`Work, force times distance, has the same: $\left[L^2M^1T^{-2}\right]$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.2 (ii)" },
      stem: t`What are the dimensions of $l\sqrt{\dfrac{l}{g}}$, where $l$ is a length and $g$ the acceleration due to gravity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lsqrt" } },
      options: [
        { key: "A", text: t`$\left[L^1T^{-1}\right]$`, correct: false, misconceptionId: "C03-M7", value: "d_L_per_T" },
        { key: "B", text: t`$\left[L^1T^2\right]$`, correct: false, misconceptionId: "C03-M8", value: "d_LT2" },
        { key: "C", text: t`$\left[T^1\right]$`, correct: false, misconceptionId: "C03-M9", value: "d_T_only" },
        { key: "D", text: t`$\left[L^1T^1\right]$`, correct: true, value: "d_LT" },
      ],
      solution: {
        steps: [
          t`$\left[\dfrac{l}{g}\right]$ $= \dfrac{\left[L\right]}{\left[LT^{-2}\right]}$ $= \left[T^2\right]$, so $\sqrt{\dfrac{l}{g}}$ is $\left[T\right]$.`,
          t`$l\sqrt{\dfrac{l}{g}}$: $\left[L^1T^1\right]$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (iii)" },
      stem: t`A charge $e$ moving at velocity $v$ at right angles to a magnetic field $B$ feels a force $F = Bev$. What are the dimensions of $B$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "B" } },
      options: [
        { key: "A", text: t`$\left[L^2M^1T^{-2}I^1\right]$`, correct: false, misconceptionId: "C03-M11", value: "d_ML2T2I" },
        { key: "B", text: t`$\left[M^1T^{-1}I^{-1}\right]$`, correct: false, misconceptionId: "C03-M12", value: "d_MT1I" },
        { key: "C", text: t`$\left[M^1T^{-2}I^{-1}\right]$`, correct: true, value: "d_MT2I" },
        { key: "D", text: t`$\left[M^1T^{-1}\right]$`, correct: false, misconceptionId: "C03-M10", value: "d_MT1" },
      ],
      solution: {
        steps: [
          t`$B = \dfrac{F}{ev}$ $= \dfrac{\left[L^1M^1T^{-2}\right]}{\left[I^1T^1\right]\left[L^1T^{-1}\right]}$.`,
          t`$= \left[M^1T^{-2}I^{-1}\right]$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Pressure is force per unit area. What is its dimensional formula?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pressure" } },
      options: [
        { key: "A", text: t`$\left[L^{-1}M^1T^{-2}\right]$`, correct: true, value: "d_ML1T2" },
        { key: "B", text: t`$\left[L^1M^1T^{-2}\right]$`, correct: false, misconceptionId: "C03-M13", value: "d_MLT2" },
        { key: "C", text: t`$\left[L^3M^1T^{-2}\right]$`, correct: false, misconceptionId: "C03-M14", value: "d_ML3T2" },
        { key: "D", text: t`$\left[L^{-2}M^1T^{-2}\right]$`, correct: false, misconceptionId: "C03-M15", value: "d_ML2T2" },
      ],
      solution: {
        steps: [
          t`$P = \dfrac{F}{A}$ $= \dfrac{\left[L^1M^1T^{-2}\right]}{\left[L^2\right]}$.`,
          t`$= \left[L^{-1}M^1T^{-2}\right]$.`,
        ],
      },
    },
  ],
};
