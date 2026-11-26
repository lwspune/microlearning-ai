import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The mains supply at home is called $230\ \mathrm{V}$. Yet the voltage swings up to about $325\ \mathrm{V}$, down to $-325\ \mathrm{V}$, and averages zero over each cycle. What does the $230\ \mathrm{V}$ stand for?`,
    reveal: t`It is the **rms value**: a steady $230\ \mathrm{V}$ would heat a heater exactly as fast. The peak is $\sqrt{2}$ times as large: $230 \times 1.414 \approx 325\ \mathrm{V}$.`,
  },
  explanation: {
    intuition: [
      t`An **alternating e.m.f.** $e = e_0\sin\omega t$ rises, falls and reverses its direction every cycle.`,
      t`The **peak value** $e_0$ is the largest value it reaches in a cycle.`,
      t`Over a full cycle the positive and negative halves cancel, so the average is zero.`,
      t`Over a half cycle the average is $\dfrac{2e_0}{\pi} \approx 0.637\,e_0$.`,
      t`The **rms value** $\dfrac{e_0}{\sqrt{2}} \approx 0.707\,e_0$ is the steady value that heats a resistor at the same rate.`,
      t`AC voltmeters and ammeters read rms values.`,
    ],
    formal: [
      {
        title: "Describing an alternating e.m.f.",
        points: [
          t`An AC generator gives $e = e_0\sin\omega t$, where $e_0$ is the peak value.`,
          t`The **frequency** $f$ is the number of cycles each second; the **angular frequency** is $\omega = 2\pi f$.`,
          t`The **period**, the time of one cycle, is $T = \dfrac{1}{f}$ $= \dfrac{2\pi}{\omega}$.`,
          t`An alternating current is written the same way: $i = i_0\sin\omega t$.`,
          t`Work out $\omega t$ in radians before taking its sine.`,
        ],
      },
      {
        title: "Average value",
        points: [
          t`The **average value** over a time is the steady value giving the same area under the curve.`,
          t`Over a full cycle, each positive value is matched by an equal negative one: $e_{av} = 0$.`,
          t`So the average is taken over a half cycle, $0$ to $\dfrac{T}{2}$.`,
          t`$e_{av}$ $= \dfrac{2}{T}\displaystyle\int_0^{T/2} e_0\sin\omega t\,dt$ $= \dfrac{2e_0}{\pi}$.`,
          t`So $e_{av} \approx 0.637\,e_0$, and likewise $i_{av} = \dfrac{2i_0}{\pi}$.`,
        ],
      },
      {
        title: "Root mean square value",
        points: [
          t`The **rms value** is the square root of the mean of $e^2$ over a cycle.`,
          t`The mean of $\sin^2\omega t$ over a cycle is $\dfrac{1}{2}$, so $e_{rms}$ $= \dfrac{e_0}{\sqrt{2}} \approx 0.707\,e_0$.`,
          t`Likewise $i_{rms} = \dfrac{i_0}{\sqrt{2}}$; it is also called the **effective value**.`,
          t`A direct current $i_{rms}$ would heat a resistor at the same rate as the AC.`,
          t`AC meters read rms values, and a stated AC value is rms unless it says otherwise.`,
        ],
      },
      {
        title: "Useful ratios",
        points: [
          t`Peak from rms: $e_0$ $= \sqrt{2}\,e_{rms} \approx 1.414\,e_{rms}$.`,
          t`$e_{rms} > e_{av}$: their ratio is $\dfrac{\pi}{2\sqrt{2}} \approx 1.11$.`,
          t`To find when $i$ reaches a value, solve $i_0\sin\omega t = i$ for $t$.`,
          t`The peak comes at $\omega t = \dfrac{\pi}{2}$, a quarter period after the current was zero.`,
        ],
      },
    ],
    worked: {
      prompt: t`An alternating voltage is $e = 6\sin\left(100\pi t\right)$ volt. Find its peak value, frequency, period, rms value and its value at $t = 2\ \mathrm{ms}$.`,
      steps: [
        t`Compare with $e = e_0\sin\omega t$: $e_0 = 6\ \mathrm{V}$ and $\omega = 100\pi\ \mathrm{rad/s}$.`,
        t`$f = \dfrac{\omega}{2\pi}$ $= \dfrac{100\pi}{2\pi}$ $= 50\ \mathrm{Hz}$, so $T = \dfrac{1}{f}$ $= 0.02\ \mathrm{s}$.`,
        t`$e_{rms} = \dfrac{e_0}{\sqrt{2}}$ $= \dfrac{6}{1.414}$ $= 4.24\ \mathrm{V}$.`,
        t`At $t = 2 \times 10^{-3}\ \mathrm{s}$: $\omega t$ $= 100\pi \times 2 \times 10^{-3}$ $= 0.2\pi\ \mathrm{rad}$, that is $36^\circ$.`,
        t`$e = 6\sin 36^\circ$ $= 6 \times 0.588$ $= 3.53\ \mathrm{V}$.`,
      ],
      answer: t`$e_0 = 6\ \mathrm{V}$, $f = 50\ \mathrm{Hz}$, $T = 0.02\ \mathrm{s}$, $e_{rms} = 4.24\ \mathrm{V}$, $e = 3.53\ \mathrm{V}$`,
    },
    figure: {
      alt: "One cycle of an alternating e.m.f. against time. Step 1: the sine curve. Step 2: its crest, the peak value e₀. Step 3: a plus sign on the positive half and a minus sign on the equal negative half. Step 4: a dashed line over the first half at 0.637 e₀, the half-cycle average. Step 5: a line at 0.707 e₀, the rms value.",
      axes: "xy",
      chart: { x: 1, y: 0.5, xTitle: "t", yTitle: "e" },
      view: { x: [0, 4.6], y: [-1.55, 1.55] },
      elements: [
        { kind: "segment", from: [0, 0], to: [4.6, 0], dashed: true, tone: "muted" },
        { kind: "curve", points: [[0, 0], [0.048, 0.075], [0.096, 0.15], [0.144, 0.224], [0.192, 0.297], [0.24, 0.368], [0.287, 0.436], [0.335, 0.503], [0.383, 0.566], [0.431, 0.627], [0.479, 0.684], [0.527, 0.737], [0.575, 0.785], [0.623, 0.83], [0.671, 0.869], [0.719, 0.904], [0.767, 0.934], [0.815, 0.958], [0.862, 0.977], [0.91, 0.99], [0.958, 0.998], [1.006, 1], [1.054, 0.996], [1.102, 0.987], [1.15, 0.972], [1.198, 0.952], [1.246, 0.926], [1.294, 0.895], [1.342, 0.859], [1.39, 0.819], [1.438, 0.773], [1.485, 0.723], [1.533, 0.669], [1.581, 0.611], [1.629, 0.55], [1.677, 0.486], [1.725, 0.419], [1.773, 0.349], [1.821, 0.278], [1.869, 0.205], [1.917, 0.131], [1.965, 0.056], [2.012, -0.02], [2.06, -0.095], [2.108, -0.169], [2.156, -0.243], [2.204, -0.315], [2.252, -0.386], [2.3, -0.454], [2.348, -0.52], [2.396, -0.582], [2.444, -0.642], [2.492, -0.698], [2.54, -0.75], [2.587, -0.797], [2.635, -0.84], [2.683, -0.879], [2.731, -0.912], [2.779, -0.94], [2.827, -0.963], [2.875, -0.981], [2.923, -0.993], [2.971, -0.999], [3.019, -1], [3.067, -0.995], [3.115, -0.984], [3.162, -0.968], [3.21, -0.946], [3.258, -0.919], [3.306, -0.887], [3.354, -0.849], [3.402, -0.807], [3.45, -0.76], [3.498, -0.709], [3.546, -0.654], [3.594, -0.596], [3.642, -0.534], [3.69, -0.469], [3.737, -0.401], [3.785, -0.331], [3.833, -0.259], [3.881, -0.185], [3.929, -0.111], [3.977, -0.036], [4.025, 0.039], [4.073, 0.114], [4.121, 0.189], [4.169, 0.262], [4.217, 0.334], [4.265, 0.404], [4.312, 0.471], [4.36, 0.536], [4.408, 0.598], [4.456, 0.657], [4.504, 0.712], [4.552, 0.763], [4.6, 0.809]], step: 1 },
        { kind: "point", at: [1, 1], label: "e₀", labelAt: "n", step: 2 },
        { kind: "label", at: [1.55, 0.1], label: "+", labelAt: "n", tone: "good", step: 3 },
        { kind: "label", at: [3, -0.65], label: "−", labelAt: "n", tone: "bad", step: 3 },
        { kind: "segment", from: [0, 0.6366], to: [2, 0.6366], dashed: true, label: "2e₀/π", labelAt: "s", tone: "muted", step: 4 },
        { kind: "segment", from: [2.15, 0.7071], to: [4.6, 0.7071], label: "e₀/√2", labelAt: "n", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag a slider along one cycle of a sine wave and watch the running average of e fall to zero while the running rms settles at 0.707 of the peak.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Treats the rms value and the average value as the same.",
      remediation: t`They differ. The half-cycle average is $\dfrac{2i_0}{\pi} \approx 0.637\,i_0$, the rms value is $\dfrac{i_0}{\sqrt{2}} \approx 0.707\,i_0$, and the full-cycle average is zero.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Takes the rms value (the meter reading) as the peak value.",
      remediation: t`A meter reads the rms value. The peak is larger: $i_0 = \sqrt{2}\,i_{rms}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Turns the $\sqrt{2}$ the wrong way, making the rms value larger than the peak.`,
      remediation: t`The rms value is always below the peak: $i_{rms} = \dfrac{i_0}{\sqrt{2}}$, so $i_0 = \sqrt{2}\,i_{rms}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Takes the half-cycle average $\dfrac{2I_0}{\pi}$ as the average over a full cycle.`,
      remediation: t`The negative half cycle mirrors the positive half, so the full-cycle average is zero. $\dfrac{2I_0}{\pi}$ is the half-cycle average.`,
      fallback: { kind: "ext", topic: "definite integrals (Std XII Maths)" },
    },
    {
      id: "C01-M5",
      mistake: t`Works out $\sin\omega t$ with $\omega t$ taken in degrees.`,
      remediation: t`$\omega t$ comes out in radians: $100\pi \times \dfrac{1}{600}$ $= \dfrac{\pi}{6}$ rad, that is $30^\circ$.`,
      fallback: { kind: "ext", topic: "radian measure (Std XI Maths)" },
    },
    {
      id: "C01-M6",
      mistake: t`Takes $\omega$ and $f$ as the same.`,
      remediation: t`$\omega = 2\pi f$: a $50\ \mathrm{Hz}$ supply has $\omega = 100\pi\ \mathrm{rad/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Takes the time to reach the rms value as the time to reach the peak.",
      remediation: t`The peak comes at $\omega t = \dfrac{\pi}{2}$, a quarter period. The rms value comes earlier, where $\sin\omega t = \dfrac{1}{\sqrt{2}}$, at $\omega t = \dfrac{\pi}{4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Pictures the rise from zero to the peak as a straight line.",
      remediation: t`The value follows a sine curve, rising fast at first and slowly near the peak. Use $i_0\sin\omega t$, not a straight-line share.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Divides the half-cycle area by the whole period.",
      remediation: t`An average over a half cycle divides by the half period: $\dfrac{2}{T}\displaystyle\int_0^{T/2} e\,dt$ $= \dfrac{2e_0}{\pi}$.`,
      fallback: { kind: "ext", topic: "definite integrals (Std XII Maths)" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.1 (i)" },
      stem: t`The rms current in a $50\ \mathrm{Hz}$ AC circuit is $5\ \mathrm{A}$. What is the current $\dfrac{1}{300}\ \mathrm{s}$ after it was zero (and rising)?`,
      verify: { kind: "value", inputs: { irms: "5", f: "50", t: "1/300" }, params: { ask: "inst" } },
      options: [
        { key: "A", text: t`$6.12\ \mathrm{A}$`, correct: true, value: "6.12000000000000" },
        { key: "B", text: t`$6.8\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M1", value: "6.80000000000000" },
        { key: "C", text: t`$4.33\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M2", value: "4.33000000000000" },
        { key: "D", text: t`$3.06\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M3", value: "3.06000000000000" },
      ],
      solution: {
        steps: [
          t`Peak current $i_0 = \sqrt{2}\,i_{rms}$ $= 1.414 \times 5$ $= 7.07\ \mathrm{A}$.`,
          t`$\omega = 2\pi f$ $= 100\pi\ \mathrm{rad/s}$, so $\omega t = \dfrac{100\pi}{300}$ $= \dfrac{\pi}{3}$.`,
          t`$i = i_0\sin\dfrac{\pi}{3}$ $= 7.07 \times 0.866$ $= 6.12\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.12" },
      stem: t`The effective current in a $50\ \mathrm{Hz}$ AC circuit is $2\ \mathrm{A}$. What is the current $\dfrac{1}{600}\ \mathrm{s}$ after it was zero (and rising)?`,
      verify: { kind: "value", inputs: { irms: "2", f: "50", t: "1/600" }, params: { ask: "inst" } },
      options: [
        { key: "A", text: t`$1.41\ \mathrm{A}$`, correct: true, value: "1.41000000000000" },
        { key: "B", text: t`$1\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M2", value: "1" },
        { key: "C", text: t`$0.707\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M3", value: "0.707000000000000" },
        { key: "D", text: t`$0.0258\ \mathrm{A}$`, correct: false, misconceptionId: "C01-M5", value: "0.0258000000000000" },
      ],
      solution: {
        steps: [
          t`Peak current $i_0 = \sqrt{2} \times 2$ $= 2.83\ \mathrm{A}$.`,
          t`$\omega t$ $= 100\pi \times \dfrac{1}{600}$ $= \dfrac{\pi}{6}$ rad, that is $30^\circ$.`,
          t`$i = 2.83 \times \sin 30^\circ$ $= 2.83 \times 0.5$ $= 1.41\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.20" },
      stem: t`How long does a $50\ \mathrm{Hz}$ alternating current take to rise from zero to its rms value?`,
      verify: { kind: "value", inputs: { f: "50" }, params: { ask: "trms" } },
      options: [
        { key: "A", text: t`$3.54\ \mathrm{ms}$`, correct: false, misconceptionId: "C01-M8", value: "3.54000000000000" },
        { key: "B", text: t`$15.7\ \mathrm{ms}$`, correct: false, misconceptionId: "C01-M6", value: "15.7000000000000" },
        { key: "C", text: t`$2.5\ \mathrm{ms}$`, correct: true, value: "2.50000000000000" },
        { key: "D", text: t`$5\ \mathrm{ms}$`, correct: false, misconceptionId: "C01-M7", value: "5" },
      ],
      solution: {
        steps: [
          t`The current is $i = i_0\sin\omega t$, with $\omega = 2\pi f$ $= 100\pi\ \mathrm{rad/s}$.`,
          t`At the rms value, $i_0\sin\omega t$ $= \dfrac{i_0}{\sqrt{2}}$, so $\omega t = \dfrac{\pi}{4}$.`,
          t`$t = \dfrac{\pi}{4 \times 100\pi}$ $= \dfrac{1}{400}\ \mathrm{s}$ $= 2.5\ \mathrm{ms}$, one-eighth of a period.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.1(ii)" },
      stem: t`For an alternating current $i = I_0\sin\omega t$, what are its average value and its rms value over one complete cycle?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "full" } },
      options: [
        { key: "A", text: t`Average $0$, rms $\dfrac{I_0}{\sqrt{2}}$`, correct: true, value: "zero_rms" },
        { key: "B", text: t`Average $\dfrac{I_0}{\sqrt{2}}$, rms $\dfrac{I_0}{\sqrt{2}}$`, correct: false, misconceptionId: "C01-M1", value: "same_rms" },
        { key: "C", text: t`Average $\dfrac{2I_0}{\pi}$, rms $\dfrac{I_0}{\sqrt{2}}$`, correct: false, misconceptionId: "C01-M4", value: "half_avg" },
        { key: "D", text: t`Average $0$, rms $\sqrt{2}\,I_0$`, correct: false, misconceptionId: "C01-M3", value: "zero_root2" },
      ],
      solution: {
        steps: [
          t`Each value in the positive half cycle is matched by an equal negative one: the average over a full cycle is $0$.`,
          t`The mean of $\sin^2\omega t$ over a cycle is $\dfrac{1}{2}$, so the rms value is $\dfrac{I_0}{\sqrt{2}}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`An alternating e.m.f. is $e = 300\sin 100\pi t$ volt. What is its average value over a half cycle, from $t = 0$ to $t = 10\ \mathrm{ms}$?`,
      verify: { kind: "value", inputs: { e0: "300" }, params: { ask: "half" } },
      options: [
        { key: "A", text: t`$191\ \mathrm{V}$`, correct: true, value: "191" },
        { key: "B", text: t`$212\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M1", value: "212" },
        { key: "C", text: t`$150\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M8", value: "150" },
        { key: "D", text: t`$95.5\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M9", value: "95.5000000000000" },
      ],
      solution: {
        steps: [
          t`Here $e_0 = 300\ \mathrm{V}$; the half cycle runs from $0$ to $\dfrac{T}{2} = 10\ \mathrm{ms}$.`,
          t`$e_{av}$ $= \dfrac{2}{T}\displaystyle\int_0^{T/2} e_0\sin\omega t\,dt$ $= \dfrac{2e_0}{\pi}$.`,
          t`$e_{av} = \dfrac{2 \times 300}{\pi}$ $= 191\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.26" },
      stem: t`An alternating voltage is $e = 8\sin\left(628.4\,t\right)$ volt. What does an AC voltmeter connected across it read?`,
      verify: { kind: "value", inputs: { e0: "8" }, params: { ask: "rms" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M2", value: "8" },
        { key: "B", text: t`$11.3\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M3", value: "11.3000000000000" },
        { key: "C", text: t`$5.66\ \mathrm{V}$`, correct: true, value: "5.66000000000000" },
        { key: "D", text: t`$5.09\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M1", value: "5.09000000000000" },
      ],
      solution: {
        steps: [
          t`Compare with $e = e_0\sin\omega t$: the peak value is $e_0 = 8\ \mathrm{V}$.`,
          t`An AC voltmeter reads the rms value: $e_{rms} = \dfrac{8}{\sqrt{2}}$ $= 5.66\ \mathrm{V}$.`,
        ],
      },
    },
  ],
};
