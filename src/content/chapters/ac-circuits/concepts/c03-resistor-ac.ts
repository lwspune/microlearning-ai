import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`An electric heater runs on AC: its voltage reverses $100$ times a second. Does the current through the heater wire wait behind the voltage, or keep step with it?`,
    reveal: t`It keeps step. A resistor obeys Ohm's law at every instant, so $i = \dfrac{e}{R}$ rises, peaks and reverses exactly with $e$: they are **in phase**.`,
  },
  explanation: {
    intuition: [
      t`A **pure resistor** has resistance only: no inductance, no capacitance.`,
      t`Ohm's law holds at every instant, so $i = \dfrac{e}{R}$ at each moment.`,
      t`So $i$ rises, peaks and reverses together with $e$: they are **in phase**.`,
      t`Zero e.m.f. means zero current, at the same instant.`,
      t`A resistor's opposition to the current, $R$, does not depend on the frequency.`,
    ],
    formal: [
      {
        title: "Current through a resistor",
        points: [
          t`Apply $e = e_0\sin\omega t$ across a pure resistor $R$.`,
          t`Ohm's law at each instant gives $i = \dfrac{e}{R}$ $= \dfrac{e_0}{R}\sin\omega t$.`,
          t`So $i = i_0\sin\omega t$, with peak current $i_0 = \dfrac{e_0}{R}$.`,
          t`There is no extra phase constant: $i$ and $e$ are **in phase**, $\varphi = 0$.`,
        ],
      },
      {
        title: "The phasor picture",
        points: [
          t`In phase means the $i$ and $e$ phasors lie along the same line.`,
          t`Both turn together at $\omega$, so they stay along one line.`,
          t`Their projections reach their peaks, and zero, at the same instants.`,
        ],
      },
      {
        title: "rms values",
        points: [
          t`Divide $i_0 = \dfrac{e_0}{R}$ by $\sqrt{2}$ on both sides: $i_{rms} = \dfrac{e_{rms}}{R}$.`,
          t`So Ohm's law also holds between rms values, the meter readings.`,
          t`Use peak with peak, or rms with rms; never mix the two.`,
          t`$R$ is the same for every frequency, and for DC.`,
        ],
      },
    ],
    worked: {
      prompt: t`An e.m.f. $e = 311\sin\left(100\pi t\right)$ volt is applied across a $50\ \Omega$ resistor. Find the peak current, the rms current and the equation of the current.`,
      steps: [
        t`Peak current $i_0 = \dfrac{e_0}{R}$ $= \dfrac{311}{50}$ $= 6.22\ \mathrm{A}$.`,
        t`$i_{rms} = \dfrac{i_0}{\sqrt{2}}$ $= \dfrac{6.22}{1.414}$ $= 4.40\ \mathrm{A}$.`,
        t`Check with rms values: $e_{rms} = \dfrac{311}{1.414}$ $= 220\ \mathrm{V}$, and $\dfrac{220}{50} = 4.40\ \mathrm{A}$.`,
        t`The current is in phase with $e$: $i = 6.22\sin\left(100\pi t\right)$ A.`,
      ],
      answer: t`$i_0 = 6.22\ \mathrm{A}$, $i_{rms} = 4.40\ \mathrm{A}$, $i = 6.22\sin\left(100\pi t\right)$ A`,
    },
    figure: {
      alt: "Graphs against time over one cycle. Step 1: the e.m.f. e, a sine curve of peak e₀. Step 2: dashed, the current i through the resistor, a smaller sine curve rising, peaking and crossing zero at the same instants. Step 3: a dashed vertical line at t = 1 through both peaks: they peak together. Step 4: the two zero crossings marked at t = 2.",
      axes: "xy",
      chart: { x: 1, y: 0.5, xTitle: "t", yTitle: "e, i" },
      view: { x: [0, 4.6], y: [-1.55, 1.55] },
      elements: [
        { kind: "segment", from: [0, 0], to: [4.6, 0], dashed: true, tone: "muted" },
        { kind: "curve", points: [[0, 0], [0.048, 0.075], [0.096, 0.15], [0.144, 0.224], [0.192, 0.297], [0.24, 0.368], [0.287, 0.436], [0.335, 0.503], [0.383, 0.566], [0.431, 0.627], [0.479, 0.684], [0.527, 0.737], [0.575, 0.785], [0.623, 0.83], [0.671, 0.869], [0.719, 0.904], [0.767, 0.934], [0.815, 0.958], [0.862, 0.977], [0.91, 0.99], [0.958, 0.998], [1.006, 1], [1.054, 0.996], [1.102, 0.987], [1.15, 0.972], [1.198, 0.952], [1.246, 0.926], [1.294, 0.895], [1.342, 0.859], [1.39, 0.819], [1.438, 0.773], [1.485, 0.723], [1.533, 0.669], [1.581, 0.611], [1.629, 0.55], [1.677, 0.486], [1.725, 0.419], [1.773, 0.349], [1.821, 0.278], [1.869, 0.205], [1.917, 0.131], [1.965, 0.056], [2.012, -0.02], [2.06, -0.095], [2.108, -0.169], [2.156, -0.243], [2.204, -0.315], [2.252, -0.386], [2.3, -0.454], [2.348, -0.52], [2.396, -0.582], [2.444, -0.642], [2.492, -0.698], [2.54, -0.75], [2.587, -0.797], [2.635, -0.84], [2.683, -0.879], [2.731, -0.912], [2.779, -0.94], [2.827, -0.963], [2.875, -0.981], [2.923, -0.993], [2.971, -0.999], [3.019, -1], [3.067, -0.995], [3.115, -0.984], [3.162, -0.968], [3.21, -0.946], [3.258, -0.919], [3.306, -0.887], [3.354, -0.849], [3.402, -0.807], [3.45, -0.76], [3.498, -0.709], [3.546, -0.654], [3.594, -0.596], [3.642, -0.534], [3.69, -0.469], [3.737, -0.401], [3.785, -0.331], [3.833, -0.259], [3.881, -0.185], [3.929, -0.111], [3.977, -0.036], [4.025, 0.039], [4.073, 0.114], [4.121, 0.189], [4.169, 0.262], [4.217, 0.334], [4.265, 0.404], [4.312, 0.471], [4.36, 0.536], [4.408, 0.598], [4.456, 0.657], [4.504, 0.712], [4.552, 0.763], [4.6, 0.809]], step: 1 },
        { kind: "label", at: [1.3, 1.1], label: "e", labelAt: "e", step: 1 },
        { kind: "curve", points: [[0, 0], [0.048, 0.041], [0.096, 0.082], [0.144, 0.123], [0.192, 0.163], [0.24, 0.202], [0.287, 0.24], [0.335, 0.277], [0.383, 0.312], [0.431, 0.345], [0.479, 0.376], [0.527, 0.405], [0.575, 0.432], [0.623, 0.456], [0.671, 0.478], [0.719, 0.497], [0.767, 0.513], [0.815, 0.527], [0.862, 0.537], [0.91, 0.545], [0.958, 0.549], [1.006, 0.55], [1.054, 0.548], [1.102, 0.543], [1.15, 0.535], [1.198, 0.524], [1.246, 0.51], [1.294, 0.492], [1.342, 0.473], [1.39, 0.45], [1.438, 0.425], [1.485, 0.398], [1.533, 0.368], [1.581, 0.336], [1.629, 0.303], [1.677, 0.267], [1.725, 0.23], [1.773, 0.192], [1.821, 0.153], [1.869, 0.113], [1.917, 0.072], [1.965, 0.031], [2.012, -0.011], [2.06, -0.052], [2.108, -0.093], [2.156, -0.134], [2.204, -0.173], [2.252, -0.212], [2.3, -0.25], [2.348, -0.286], [2.396, -0.32], [2.444, -0.353], [2.492, -0.384], [2.54, -0.412], [2.587, -0.439], [2.635, -0.462], [2.683, -0.483], [2.731, -0.502], [2.779, -0.517], [2.827, -0.53], [2.875, -0.539], [2.923, -0.546], [2.971, -0.549], [3.019, -0.55], [3.067, -0.547], [3.115, -0.541], [3.162, -0.532], [3.21, -0.52], [3.258, -0.505], [3.306, -0.488], [3.354, -0.467], [3.402, -0.444], [3.45, -0.418], [3.498, -0.39], [3.546, -0.36], [3.594, -0.328], [3.642, -0.293], [3.69, -0.258], [3.737, -0.22], [3.785, -0.182], [3.833, -0.142], [3.881, -0.102], [3.929, -0.061], [3.977, -0.02], [4.025, 0.022], [4.073, 0.063], [4.121, 0.104], [4.169, 0.144], [4.217, 0.184], [4.265, 0.222], [4.312, 0.259], [4.36, 0.295], [4.408, 0.329], [4.456, 0.361], [4.504, 0.391], [4.552, 0.419], [4.6, 0.445]], dashed: true, tone: "good", step: 2 },
        { kind: "label", at: [0.55, 0.15], label: "i", labelAt: "e", tone: "good", step: 2 },
        { kind: "segment", from: [1, -0.15], to: [1, 1.3], dashed: true, tone: "muted", step: 3 },
        { kind: "label", at: [1, 1.3], label: "peaks together", labelAt: "n", tone: "muted", step: 3 },
        { kind: "point", at: [2, 0], label: "both zero", labelAt: "ne", step: 4 },
      ],
    },
    visualSpec: t`Drag a frequency slider: the e and i curves of a resistor squeeze together, always peaking at the same instants, and the current's peak stays the same.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Uses the peak voltage in place of the rms voltage.",
      remediation: t`$e_0$ in $e = e_0\sin\omega t$ is the peak. For the rms current, first find $e_{rms} = \dfrac{e_0}{\sqrt{2}}$, or divide $\dfrac{e_0}{R}$ by $\sqrt{2}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes the current in a resistor to lag the voltage by $\dfrac{\pi}{2}$.`,
      remediation: t`A resistor obeys Ohm's law at every instant, $i = \dfrac{e}{R}$, so the current peaks with the voltage: no phase difference.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Divides by $\sqrt{2}$ where no conversion is needed.`,
      remediation: t`Convert only between a peak and an rms value. $\dfrac{e_0}{R}$ is already the peak current, and a stated $220\ \mathrm{V}$ is already rms.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Multiplies by $\sqrt{2}$ to get an rms value.`,
      remediation: t`The rms value is the smaller one: $e_{rms} = \dfrac{e_0}{\sqrt{2}}$, so $i_{rms} = \dfrac{e_0}{\sqrt{2}\,R}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks a resistor's opposition to the current rises with frequency.",
      remediation: t`Resistance does not depend on frequency: at the same rms voltage, $i_{rms} = \dfrac{e_{rms}}{R}$ is the same at $50\ \mathrm{Hz}$ or $100\ \mathrm{Hz}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Treats the current as steady at its rms value.",
      remediation: t`The rms value is only a meter reading. At each instant $i = i_0\sin\omega t$, which goes up, down and reverses.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M7",
      mistake: t`Takes the current in a resistor to lead the voltage by $\dfrac{\pi}{2}$.`,
      remediation: t`Nothing in a resistor shifts the current ahead: $i = \dfrac{e}{R}$ at every instant, so they are in phase.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.25" },
      stem: t`An alternating voltage $e = 140\sin\left(314.2\,t\right)$ volt is connected across a pure resistor of $50\ \Omega$. What is the rms current through the resistor?`,
      verify: { kind: "value", inputs: { e0: "140", R: "50" }, params: { ask: "irms" } },
      options: [
        { key: "A", text: t`$1.4\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M3", value: "1.40000000000000" },
        { key: "B", text: t`$3.96\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M4", value: "3.96000000000000" },
        { key: "C", text: t`$1.98\ \mathrm{A}$`, correct: true, value: "1.98000000000000" },
        { key: "D", text: t`$2.8\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M1", value: "2.80000000000000" },
      ],
      solution: {
        steps: [
          t`Compare with $e = e_0\sin\omega t$: $e_0 = 140\ \mathrm{V}$.`,
          t`$e_{rms} = \dfrac{140}{\sqrt{2}}$ $= 99.0\ \mathrm{V}$.`,
          t`$i_{rms} = \dfrac{e_{rms}}{R}$ $= \dfrac{99.0}{50}$ $= 1.98\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`An e.m.f. $e = 200\sin\left(100\pi t\right)$ volt is applied across a $40\ \Omega$ resistor. What is the current at the instant when $e = 100\ \mathrm{V}$ and rising?`,
      verify: { kind: "value", inputs: { e0: "200", R: "40", th: "pi/6" }, params: { ask: "inst" } },
      options: [
        { key: "A", text: t`$3.54\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M6", value: "3.54000000000000" },
        { key: "B", text: t`$4.33\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M7", value: "4.33000000000000" },
        { key: "C", text: t`$2.5\ \mathrm{A}$`, correct: true, value: "2.50000000000000" },
        { key: "D", text: t`$-4.33\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M2", value: "-4.33000000000000" },
      ],
      solution: {
        steps: [
          t`$e = 100\ \mathrm{V}$ is half the peak, rising: $\sin\omega t = \dfrac{1}{2}$, $\omega t = \dfrac{\pi}{6}$.`,
          t`In a resistor $i$ is in phase with $e$, with $i_0 = \dfrac{200}{40}$ $= 5\ \mathrm{A}$.`,
          t`$i = 5\sin\dfrac{\pi}{6}$ $= 2.5\ \mathrm{A}$, which is just $\dfrac{e}{R} = \dfrac{100}{40}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Which statement about a pure resistor connected to an AC source is right?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "facts" } },
      options: [
        { key: "A", text: t`$i$ lags behind $e$ by $\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C03-M2", value: "lags_q" },
        { key: "B", text: t`Its opposition to the current rises with the frequency`, correct: false, misconceptionId: "C03-M5", value: "rises_with_f" },
        { key: "C", text: t`The current is steady at $\dfrac{e_{rms}}{R}$ while $e$ alternates`, correct: false, misconceptionId: "C03-M6", value: "steady_rms" },
        { key: "D", text: t`$i$ is in phase with $e$, and $i_0 = \dfrac{e_0}{R}$ at any frequency`, correct: true, value: "in_phase_any_f" },
      ],
      solution: {
        steps: [
          t`Ohm's law holds at every instant, $i = \dfrac{e}{R}$, so $i$ and $e$ peak together: in phase.`,
          t`$i_0 = \dfrac{e_0}{R}$, and $R$ does not depend on the frequency.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`A $100\ \Omega$ resistor is connected to a $220\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. The supply is changed to $220\ \mathrm{V}$, $100\ \mathrm{Hz}$. What rms current flows now?`,
      verify: { kind: "value", inputs: { erms: "220", R: "100", f1: "50", f2: "100" }, params: { ask: "freq" } },
      options: [
        { key: "A", text: t`$1.56\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M3", value: "1.56000000000000" },
        { key: "B", text: t`$3.11\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M4", value: "3.11000000000000" },
        { key: "C", text: t`$2.2\ \mathrm{A}$`, correct: true, value: "2.20000000000000" },
        { key: "D", text: t`$1.1\ \mathrm{A}$`, correct: false, misconceptionId: "C03-M5", value: "1.10000000000000" },
      ],
      solution: {
        steps: [
          t`A resistor's resistance does not change with frequency: still $100\ \mathrm{\Omega}$.`,
          t`$220\ \mathrm{V}$ is an rms value, so $i_{rms} = \dfrac{220}{100}$ $= 2.2\ \mathrm{A}$, the same as at $50\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`An e.m.f. $e = 120\sin\left(100\pi t\right)$ volt is applied across a pure resistor of $30\ \Omega$. Which equation gives the current, in ampere?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "eqn" } },
      options: [
        { key: "A", text: t`$i = 4\sin\left(100\pi t\right)$`, correct: true, value: "eqn_in_phase" },
        { key: "B", text: t`$i = 4\sin\left(100\pi t - \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C03-M2", value: "eqn_lag" },
        { key: "C", text: t`$i = 4\sin\left(100\pi t + \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C03-M7", value: "eqn_lead" },
        { key: "D", text: t`$i = 2.83\sin\left(100\pi t\right)$`, correct: false, misconceptionId: "C03-M3", value: "eqn_rms_amp" },
      ],
      solution: {
        steps: [
          t`Peak current $i_0 = \dfrac{e_0}{R}$ $= \dfrac{120}{30}$ $= 4\ \mathrm{A}$.`,
          t`The current is in phase with $e$, so it has the same phase: $i = 4\sin\left(100\pi t\right)$.`,
        ],
      },
    },
  ],
};
