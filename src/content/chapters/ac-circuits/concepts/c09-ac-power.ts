import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A coil on the $230\ \mathrm{V}$ mains draws $1\ \mathrm{A}$, yet a wattmeter shows it using far less than $230\ \mathrm{W}$. Where does the rest of the energy go?`,
    reveal: t`Back to the supply. The coil's current lags the voltage, so for part of each cycle the coil returns the energy it took. The average power is $P = e_{rms}i_{rms}\cos\phi$, smaller than $e_{rms}i_{rms}$ by the **power factor** $\cos\phi$.`,
  },
  explanation: {
    intuition: [
      t`Power at an instant is the voltage times the current at that instant.`,
      t`In a resistor $e$ and $i$ rise and fall together, so the power is never negative.`,
      t`When $e$ and $i$ are out of phase, the power turns negative for part of each cycle: energy flows back to the source.`,
      t`So the average power is less than $e_{rms}i_{rms}$.`,
      t`The fraction actually used is the **power factor**, $\cos\phi$.`,
    ],
    formal: [
      {
        title: "Average power",
        points: [
          t`The **instantaneous power** is $P = ei$, the product of the values at one instant.`,
          t`Take $e = e_0\sin\omega t$ and $i$ $= i_0\sin\left(\omega t + \phi\right)$, and average $P$ over a complete cycle.`,
          t`Over a cycle, $\sin^2\omega t$ averages to $\dfrac{1}{2}$ and $\sin\omega t\cos\omega t$ to zero.`,
          t`So $P_{av} = \dfrac{e_0i_0}{2}\cos\phi$ $= e_{rms}i_{rms}\cos\phi$.`,
          t`With peak values, keep the $\dfrac{1}{2}$: $\dfrac{e_0i_0}{2} = e_{rms}i_{rms}$.`,
        ],
      },
      {
        title: "Power factor",
        points: [
          t`The **power factor** is $\cos\phi$, where $\phi$ is the phase difference between $e$ and $i$.`,
          t`From the impedance triangle, $\cos\phi = \dfrac{R}{Z}$.`,
          t`For a pure resistor $\phi = 0$, the power factor is 1, and $P_{av} = e_{rms}i_{rms}$.`,
          t`At resonance $Z = R$, so the power factor is again 1.`,
          t`In any series circuit $P_{av} = i_{rms}^2R$: only the resistance uses energy.`,
        ],
      },
      {
        title: "Wattless current",
        points: [
          t`In a pure inductor the current lags the voltage by $\dfrac{\pi}{2}$, and $P = ei$ changes sign every quarter cycle.`,
          t`The inductor stores energy in one quarter cycle and gives it back in the next, so $P_{av} = 0$.`,
          t`A pure capacitor does the same with its electric field: $\cos 90^\circ = 0$, so $P_{av} = 0$.`,
          t`A current that takes no average power is a **wattless current**.`,
        ],
        figure: {
          alt: "A pure inductor over two cycles. Step 1: the voltage e, the current i reaching each peak a quarter cycle later, and their product, the power p, positive and negative by turns. Step 2: a note that where p is negative the energy goes back to the source, so p averages to zero.",
          axes: "xy",
          chart: { x: 1, y: 0.5, xTitle: "t", yTitle: "e, i, p" },
          view: { x: [0, 8], y: [-1.8, 1.8] },
          elements: [
            { kind: "segment", from: [0, 0], to: [8, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.083, 0.131], [0.167, 0.259], [0.25, 0.383], [0.333, 0.5], [0.417, 0.609], [0.5, 0.707], [0.583, 0.793], [0.667, 0.866], [0.75, 0.924], [0.833, 0.966], [0.917, 0.991], [1, 1], [1.083, 0.991], [1.167, 0.966], [1.25, 0.924], [1.333, 0.866], [1.417, 0.793], [1.5, 0.707], [1.583, 0.609], [1.667, 0.5], [1.75, 0.383], [1.833, 0.259], [1.917, 0.131], [2, 0], [2.083, -0.131], [2.167, -0.259], [2.25, -0.383], [2.333, -0.5], [2.417, -0.609], [2.5, -0.707], [2.583, -0.793], [2.667, -0.866], [2.75, -0.924], [2.833, -0.966], [2.917, -0.991], [3, -1], [3.083, -0.991], [3.167, -0.966], [3.25, -0.924], [3.333, -0.866], [3.417, -0.793], [3.5, -0.707], [3.583, -0.609], [3.667, -0.5], [3.75, -0.383], [3.833, -0.259], [3.917, -0.131], [4, 0], [4.083, 0.131], [4.167, 0.259], [4.25, 0.383], [4.333, 0.5], [4.417, 0.609], [4.5, 0.707], [4.583, 0.793], [4.667, 0.866], [4.75, 0.924], [4.833, 0.966], [4.917, 0.991], [5, 1], [5.083, 0.991], [5.167, 0.966], [5.25, 0.924], [5.333, 0.866], [5.417, 0.793], [5.5, 0.707], [5.583, 0.609], [5.667, 0.5], [5.75, 0.383], [5.833, 0.259], [5.917, 0.131], [6, 0], [6.083, -0.131], [6.167, -0.259], [6.25, -0.383], [6.333, -0.5], [6.417, -0.609], [6.5, -0.707], [6.583, -0.793], [6.667, -0.866], [6.75, -0.924], [6.833, -0.966], [6.917, -0.991], [7, -1], [7.083, -0.991], [7.167, -0.966], [7.25, -0.924], [7.333, -0.866], [7.417, -0.793], [7.5, -0.707], [7.583, -0.609], [7.667, -0.5], [7.75, -0.383], [7.833, -0.259], [7.917, -0.131], [8, 0]], step: 1 },
            { kind: "curve", points: [[0, -0.8], [0.083, -0.793], [0.167, -0.773], [0.25, -0.739], [0.333, -0.693], [0.417, -0.635], [0.5, -0.566], [0.583, -0.487], [0.667, -0.4], [0.75, -0.306], [0.833, -0.207], [0.917, -0.104], [1, 0], [1.083, 0.104], [1.167, 0.207], [1.25, 0.306], [1.333, 0.4], [1.417, 0.487], [1.5, 0.566], [1.583, 0.635], [1.667, 0.693], [1.75, 0.739], [1.833, 0.773], [1.917, 0.793], [2, 0.8], [2.083, 0.793], [2.167, 0.773], [2.25, 0.739], [2.333, 0.693], [2.417, 0.635], [2.5, 0.566], [2.583, 0.487], [2.667, 0.4], [2.75, 0.306], [2.833, 0.207], [2.917, 0.104], [3, 0], [3.083, -0.104], [3.167, -0.207], [3.25, -0.306], [3.333, -0.4], [3.417, -0.487], [3.5, -0.566], [3.583, -0.635], [3.667, -0.693], [3.75, -0.739], [3.833, -0.773], [3.917, -0.793], [4, -0.8], [4.083, -0.793], [4.167, -0.773], [4.25, -0.739], [4.333, -0.693], [4.417, -0.635], [4.5, -0.566], [4.583, -0.487], [4.667, -0.4], [4.75, -0.306], [4.833, -0.207], [4.917, -0.104], [5, 0], [5.083, 0.104], [5.167, 0.207], [5.25, 0.306], [5.333, 0.4], [5.417, 0.487], [5.5, 0.566], [5.583, 0.635], [5.667, 0.693], [5.75, 0.739], [5.833, 0.773], [5.917, 0.793], [6, 0.8], [6.083, 0.793], [6.167, 0.773], [6.25, 0.739], [6.333, 0.693], [6.417, 0.635], [6.5, 0.566], [6.583, 0.487], [6.667, 0.4], [6.75, 0.306], [6.833, 0.207], [6.917, 0.104], [7, 0], [7.083, -0.104], [7.167, -0.207], [7.25, -0.306], [7.333, -0.4], [7.417, -0.487], [7.5, -0.566], [7.583, -0.635], [7.667, -0.693], [7.75, -0.739], [7.833, -0.773], [7.917, -0.793], [8, -0.8]], step: 1, tone: "muted" },
            { kind: "label", at: [1, 1], label: "e", labelAt: "n", step: 1 },
            { kind: "label", at: [6, 0.8], label: "i", labelAt: "n", step: 1, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.05, -0.063], [0.1, -0.124], [0.15, -0.182], [0.2, -0.235], [0.25, -0.283], [0.3, -0.324], [0.35, -0.356], [0.4, -0.38], [0.45, -0.395], [0.5, -0.4], [0.55, -0.395], [0.6, -0.38], [0.65, -0.356], [0.7, -0.324], [0.75, -0.283], [0.8, -0.235], [0.85, -0.182], [0.9, -0.124], [0.95, -0.063], [1, 0], [1.05, 0.063], [1.1, 0.124], [1.15, 0.182], [1.2, 0.235], [1.25, 0.283], [1.3, 0.324], [1.35, 0.356], [1.4, 0.38], [1.45, 0.395], [1.5, 0.4], [1.55, 0.395], [1.6, 0.38], [1.65, 0.356], [1.7, 0.324], [1.75, 0.283], [1.8, 0.235], [1.85, 0.182], [1.9, 0.124], [1.95, 0.063], [2, 0], [2.05, -0.063], [2.1, -0.124], [2.15, -0.182], [2.2, -0.235], [2.25, -0.283], [2.3, -0.324], [2.35, -0.356], [2.4, -0.38], [2.45, -0.395], [2.5, -0.4], [2.55, -0.395], [2.6, -0.38], [2.65, -0.356], [2.7, -0.324], [2.75, -0.283], [2.8, -0.235], [2.85, -0.182], [2.9, -0.124], [2.95, -0.063], [3, 0], [3.05, 0.063], [3.1, 0.124], [3.15, 0.182], [3.2, 0.235], [3.25, 0.283], [3.3, 0.324], [3.35, 0.356], [3.4, 0.38], [3.45, 0.395], [3.5, 0.4], [3.55, 0.395], [3.6, 0.38], [3.65, 0.356], [3.7, 0.324], [3.75, 0.283], [3.8, 0.235], [3.85, 0.182], [3.9, 0.124], [3.95, 0.063], [4, 0], [4.05, -0.063], [4.1, -0.124], [4.15, -0.182], [4.2, -0.235], [4.25, -0.283], [4.3, -0.324], [4.35, -0.356], [4.4, -0.38], [4.45, -0.395], [4.5, -0.4], [4.55, -0.395], [4.6, -0.38], [4.65, -0.356], [4.7, -0.324], [4.75, -0.283], [4.8, -0.235], [4.85, -0.182], [4.9, -0.124], [4.95, -0.063], [5, 0], [5.05, 0.063], [5.1, 0.124], [5.15, 0.182], [5.2, 0.235], [5.25, 0.283], [5.3, 0.324], [5.35, 0.356], [5.4, 0.38], [5.45, 0.395], [5.5, 0.4], [5.55, 0.395], [5.6, 0.38], [5.65, 0.356], [5.7, 0.324], [5.75, 0.283], [5.8, 0.235], [5.85, 0.182], [5.9, 0.124], [5.95, 0.063], [6, 0], [6.05, -0.063], [6.1, -0.124], [6.15, -0.182], [6.2, -0.235], [6.25, -0.283], [6.3, -0.324], [6.35, -0.356], [6.4, -0.38], [6.45, -0.395], [6.5, -0.4], [6.55, -0.395], [6.6, -0.38], [6.65, -0.356], [6.7, -0.324], [6.75, -0.283], [6.8, -0.235], [6.85, -0.182], [6.9, -0.124], [6.95, -0.063], [7, 0], [7.05, 0.063], [7.1, 0.124], [7.15, 0.182], [7.2, 0.235], [7.25, 0.283], [7.3, 0.324], [7.35, 0.356], [7.4, 0.38], [7.45, 0.395], [7.5, 0.4], [7.55, 0.395], [7.6, 0.38], [7.65, 0.356], [7.7, 0.324], [7.75, 0.283], [7.8, 0.235], [7.85, 0.182], [7.9, 0.124], [7.95, 0.063], [8, 0]], step: 1, tone: "good" },
            { kind: "label", at: [3.5, 0.4], label: "p", labelAt: "n", step: 1, tone: "good" },
            { kind: "label", at: [4, -1.3], label: "p < 0: energy given back", labelAt: "s", step: 2, tone: "bad" },
          ],
        },
      },
      {
        title: "Why power factor matters",
        points: [
          t`A load needs a certain power $e_{rms}i_{rms}\cos\phi$ at the fixed supply voltage.`,
          t`A low $\cos\phi$ means a larger current $i_{rms}$ for the same power.`,
          t`The line wires waste $i_{rms}^2R$ as heat, so a low power factor means a large loss in transmission.`,
          t`Power companies therefore want loads with a power factor close to 1.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $40\ \Omega$ resistor, an inductor of reactance $50\ \Omega$ and a capacitor of reactance $20\ \Omega$ are in series across a $100\ \mathrm{V}$ rms supply. Find the power factor and the average power.`,
      steps: [
        t`$Z$ $= \sqrt{40^2 + \left(50 - 20\right)^2}$ $= 50\ \Omega$.`,
        t`Power factor $\cos\phi = \dfrac{R}{Z}$ $= \dfrac{40}{50} = 0.8$.`,
        t`$i_{rms} = \dfrac{100}{50}$ $= 2\ \mathrm{A}$.`,
        t`$P_{av} = e_{rms}i_{rms}\cos\phi$ $= 100 \times 2 \times 0.8$ $= 160\ \mathrm{W}$; check: $i_{rms}^2R = 4 \times 40$ $= 160\ \mathrm{W}$.`,
      ],
      answer: t`Power factor $0.8$; $P_{av} = 160\ \mathrm{W}$`,
    },
    visualSpec: t`Slide the phase angle between e and i and watch the power curve sink below zero for longer, its average falling to zero at 90°.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Takes the given rms voltage as a peak value.",
      remediation: t`A supply's voltage is quoted as rms: use it as $e_{rms}$ directly.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: t`Uses peak values in $P = ei\cos\phi$ without the $\dfrac{1}{2}$.`,
      remediation: t`$P_{av} = \dfrac{e_0i_0}{2}\cos\phi$; the $\dfrac{1}{2}$ comes from averaging $\sin^2\omega t$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: "Thinks the average power over a cycle is zero because the average current is zero.",
      remediation: t`$e$ and $i$ change sign together, so $ei$ stays positive in a resistor; the power averages to $e_{rms}i_{rms}\cos\phi$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M4",
      mistake: t`Uses $\sin\phi$, or $\dfrac{X}{Z}$, as the power factor.`,
      remediation: t`The power factor is $\cos\phi = \dfrac{R}{Z}$: the resistance's share of the impedance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Leaves out the power factor.",
      remediation: t`When $e$ and $i$ are out of phase, $P_{av} = e_{rms}i_{rms}\cos\phi$, less than $e_{rms}i_{rms}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Takes the power factor as $\dfrac{R}{X_L}$.`,
      remediation: t`Divide by the impedance, not the reactance: $\cos\phi = \dfrac{R}{Z}$, with $Z = \sqrt{R^2 + X_L^2}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M7",
      mistake: "Ignores the inductor and takes the power factor as 1.",
      remediation: t`The inductor shifts the current's phase: $\cos\phi = \dfrac{R}{Z}$ is less than 1.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M8",
      mistake: "Thinks a capacitor turns the energy it draws into heat.",
      remediation: "A capacitor stores energy in its field and returns it a quarter cycle later; only resistance makes heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Thinks no current flows in a capacitor circuit on AC.",
      remediation: "On AC a capacitor charges and discharges every cycle, so a current flows; it is wattless, not zero.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C09-M10",
      mistake: "Thinks the energy builds up in the capacitor cycle after cycle.",
      remediation: "The capacitor charges and discharges every half cycle, so what it stores is given back each time.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: t`Takes $X_C = Z$, leaving out $R$.`,
      remediation: t`$Z = \dfrac{R}{\cos\phi}$ includes $R$: $X_C = \sqrt{Z^2 - R^2}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M12",
      mistake: t`Uses $f$ for $\omega$.`,
      remediation: t`$X_C = \dfrac{1}{\omega C}$ with $\omega = 2\pi f$, so $C = \dfrac{1}{2\pi fX_C}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.9" },
      stem: t`A $100\ \Omega$ resistor is connected to a $220\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. What is the net power consumed over a full cycle?`,
      verify: { kind: "value", inputs: { R: "100", erms: "220" }, params: { ask: "Pres" } },
      options: [
        { key: "A", text: t`$968\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M2", value: "968" },
        { key: "B", text: t`$0\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M3", value: "0" },
        { key: "C", text: t`$484\ \mathrm{W}$`, correct: true, value: "484" },
        { key: "D", text: t`$242\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M1", value: "242" },
      ],
      solution: {
        steps: [
          t`$220\ \mathrm{V}$ is the rms value: $i_{rms} = \dfrac{220}{100}$ $= 2.2\ \mathrm{A}$.`,
          t`For a resistor $\cos\phi = 1$: $P = 220 \times 2.2$ $= 484\ \mathrm{W}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.1 (iv)" },
      stem: t`In an AC circuit, $e = 150\sin 150t$ volt and $i = 150\sin\left(150t + \dfrac{\pi}{3}\right)$ ampere. What is the average power dissipated in the circuit?`,
      verify: { kind: "value", inputs: { e0: "150", i0: "150", phi: "pi/3" }, params: { ask: "Pphase", sf: "4" } },
      options: [
        { key: "A", text: t`$5625\ \mathrm{W}$`, correct: true, value: "5625" },
        { key: "B", text: t`$11250\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M2", value: "11250" },
        { key: "C", text: t`$0\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M3", value: "0" },
        { key: "D", text: t`$9743\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M4", value: "9743" },
      ],
      solution: {
        steps: [
          t`$e_0 = 150\ \mathrm{V}$, $i_0 = 150\ \mathrm{A}$, and $\phi = \dfrac{\pi}{3}$, so $\cos\phi = 0.5$.`,
          t`$P_{av} = \dfrac{e_0i_0}{2}\cos\phi$ $= \dfrac{150 \times 150}{2} \times 0.5$ $= 5625\ \mathrm{W}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.1 (ii)" },
      stem: t`A resistor of $500\ \Omega$ and an inductance of $1.2\ \mathrm{H}$ are in series with an AC source $V = 100\sqrt{2}\sin 1000t$. What is the power factor of the combination?`,
      verify: { kind: "value", inputs: { R: "500", L: "1.2", w: "1000" }, params: { ask: "pf" } },
      options: [
        { key: "A", text: t`$0.923$`, correct: false, misconceptionId: "C09-M4", value: "0.923000000000000" },
        { key: "B", text: t`$0.417$`, correct: false, misconceptionId: "C09-M6", value: "0.417000000000000" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C09-M7", value: "1" },
        { key: "D", text: t`$0.385$`, correct: true, value: "0.385000000000000" },
      ],
      solution: {
        steps: [
          t`$\omega = 1000\ \mathrm{rad/s}$, so $X_L = 1000 \times 1.2$ $= 1200\ \Omega$.`,
          t`$Z = \sqrt{500^2 + 1200^2}$ $= 1300\ \Omega$.`,
          t`$\cos\phi = \dfrac{R}{Z}$ $= \dfrac{500}{1300} \approx 0.385$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Solved Ex.13.8" },
      stem: t`A sinusoidal voltage of peak value $283\ \mathrm{V}$ and frequency $50\ \mathrm{Hz}$ is applied to a series LCR circuit with $R = 3\ \Omega$, $X_L = 8\ \Omega$ and $X_C = 4\ \Omega$. What average power does the circuit dissipate?`,
      verify: { kind: "value", inputs: { e0: "283", R: "3", XL: "8", XC: "4" }, params: { ask: "Plcr" } },
      options: [
        { key: "A", text: t`$4810\ \mathrm{W}$`, correct: true, value: "4810" },
        { key: "B", text: t`$9610\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M2", value: "9610" },
        { key: "C", text: t`$6410\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M4", value: "6410" },
        { key: "D", text: t`$8010\ \mathrm{W}$`, correct: false, misconceptionId: "C09-M5", value: "8010" },
      ],
      solution: {
        steps: [
          t`$Z$ $= \sqrt{3^2 + \left(8 - 4\right)^2}$ $= 5\ \Omega$, so $\cos\phi = \dfrac{3}{5} = 0.6$.`,
          t`$i_0 = \dfrac{283}{5}$ $= 56.6\ \mathrm{A}$.`,
          t`$P_{av} = \dfrac{e_0i_0}{2}\cos\phi$ $= \dfrac{283 \times 56.6}{2} \times 0.6$ $\approx 4810\ \mathrm{W}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.5" },
      stem: t`An ideal capacitor is connected to an AC supply. What happens to the energy it draws from the supply over a complete cycle?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "capP" } },
      options: [
        { key: "A", text: t`None is drawn, because no current flows through a capacitor`, correct: false, misconceptionId: "C09-M9", value: "no_current" },
        { key: "B", text: t`It builds up in the capacitor, cycle after cycle`, correct: false, misconceptionId: "C09-M10", value: "piles_up" },
        { key: "C", text: t`It is stored, then given back to the supply`, correct: true, value: "returns_it" },
        { key: "D", text: t`It is turned into heat, at a rate $e_{rms}i_{rms}$`, correct: false, misconceptionId: "C09-M8", value: "heats_it" },
      ],
      solution: {
        steps: [
          t`In a capacitor the current leads the voltage by $\dfrac{\pi}{2}$, so $\cos\phi = 0$.`,
          t`It stores energy in its field for a quarter cycle and returns it in the next: $P_{av} = 0$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.19" },
      stem: t`What capacitance, put in series with a $10\ \Omega$ resistor, makes the power factor $0.5$ on an $80\ \mathrm{V}$, $100\ \mathrm{Hz}$ AC supply?`,
      verify: { kind: "value", inputs: { R: "10", pf: "1/2", f: "100" }, params: { ask: "Cpf" } },
      options: [
        { key: "A", text: t`$577\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C09-M12", value: "577" },
        { key: "B", text: t`$91.9\ \mathrm{\mu F}$`, correct: true, value: "91.9000000000000" },
        { key: "C", text: t`$276\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C09-M4", value: "276" },
        { key: "D", text: t`$79.6\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C09-M11", value: "79.6000000000000" },
      ],
      solution: {
        steps: [
          t`$\cos\phi = \dfrac{R}{Z} = 0.5$, so $Z = \dfrac{10}{0.5} = 20\ \Omega$.`,
          t`$X_C = \sqrt{20^2 - 10^2}$ $\approx 17.32\ \Omega$.`,
          t`$C = \dfrac{1}{2\pi fX_C}$ $= \dfrac{1}{2\pi \times 100 \times 17.32}$ $\approx 9.19 \times 10^{-5}\ \mathrm{F}$ $= 91.9\ \mu\mathrm{F}$.`,
        ],
      },
    },
  ],
};
