import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A charged capacitor is connected across a coil, with no battery anywhere. A meter shows the current swinging back and forth thousands of times a second. What keeps it going?`,
    reveal: t`The energy itself. It passes from the capacitor's electric field to the coil's magnetic field and back, over and over, at $f = \dfrac{1}{2\pi\sqrt{LC}}$. Only resistance, turning it into heat, makes the swing die away.`,
  },
  explanation: {
    intuition: [
      t`A charged capacitor stores energy in its **electric field**; a coil carrying a current stores energy in its **magnetic field**.`,
      t`Join them, and the capacitor pushes a current through the coil.`,
      t`The coil's back emf slows the current's growth, then keeps it flowing after the capacitor is empty.`,
      t`So the capacitor charges up the other way, and the whole process runs back.`,
      t`The energy swings between the two fields, like a pendulum's energy between height and speed.`,
    ],
    formal: [
      {
        title: "The LC circuit",
        points: [
          t`An **LC circuit** is a charged capacitor connected across an inductor, with no source.`,
          t`The capacitor discharges through the coil, and the growing current builds a magnetic field.`,
          t`When the capacitor is empty, the coil's induced emf keeps the current flowing.`,
          t`So the capacitor charges with the opposite sign, and then discharges back the other way.`,
          t`The charge and current **oscillate**: these are **LC oscillations**.`,
        ],
      },
      {
        title: "Energy swaps",
        points: [
          t`At $t = 0$ the capacitor holds all the energy, $\dfrac{1}{2}CV^2$, in its electric field.`,
          t`As it discharges, the current grows and the coil stores energy $\dfrac{1}{2}Li^2$.`,
          t`At $t = \dfrac{T}{4}$ the capacitor is empty and the current greatest: all the energy is magnetic.`,
          t`At $t = \dfrac{T}{2}$ the capacitor is fully charged the other way: all the energy is electric again.`,
          t`With no resistance, the total stays $\dfrac{1}{2}CV^2$ and the swaps go on for ever.`,
        ],
        figure: {
          alt: "Energy against time over one period T. Step 1: the capacitor's energy, all of it at t = 0, falling to zero at T/4. Step 2: the inductor's energy, rising from zero as the capacitor's falls. Step 3: at T/4 the energy is all in the inductor. Step 4: at T/2 it is all in the capacitor again. Step 5: dashed, the total, constant.",
          axes: "xy",
          chart: { x: 0.25, y: 0.5, xTitle: "t (periods)", yTitle: "energy" },
          view: { x: [0, 1], y: [0, 1.4] },
          elements: [
            { kind: "curve", points: [[0, 1], [0.008, 0.997], [0.017, 0.989], [0.025, 0.976], [0.033, 0.957], [0.042, 0.933], [0.05, 0.905], [0.058, 0.872], [0.067, 0.835], [0.075, 0.794], [0.083, 0.75], [0.092, 0.703], [0.1, 0.655], [0.108, 0.604], [0.117, 0.552], [0.125, 0.5], [0.133, 0.448], [0.142, 0.396], [0.15, 0.345], [0.158, 0.297], [0.167, 0.25], [0.175, 0.206], [0.183, 0.165], [0.192, 0.128], [0.2, 0.095], [0.208, 0.067], [0.217, 0.043], [0.225, 0.024], [0.233, 0.011], [0.242, 0.003], [0.25, 0], [0.258, 0.003], [0.267, 0.011], [0.275, 0.024], [0.283, 0.043], [0.292, 0.067], [0.3, 0.095], [0.308, 0.128], [0.317, 0.165], [0.325, 0.206], [0.333, 0.25], [0.342, 0.297], [0.35, 0.345], [0.358, 0.396], [0.367, 0.448], [0.375, 0.5], [0.383, 0.552], [0.392, 0.604], [0.4, 0.655], [0.408, 0.703], [0.417, 0.75], [0.425, 0.794], [0.433, 0.835], [0.442, 0.872], [0.45, 0.905], [0.458, 0.933], [0.467, 0.957], [0.475, 0.976], [0.483, 0.989], [0.492, 0.997], [0.5, 1], [0.508, 0.997], [0.517, 0.989], [0.525, 0.976], [0.533, 0.957], [0.542, 0.933], [0.55, 0.905], [0.558, 0.872], [0.567, 0.835], [0.575, 0.794], [0.583, 0.75], [0.592, 0.703], [0.6, 0.655], [0.608, 0.604], [0.617, 0.552], [0.625, 0.5], [0.633, 0.448], [0.642, 0.396], [0.65, 0.345], [0.658, 0.297], [0.667, 0.25], [0.675, 0.206], [0.683, 0.165], [0.692, 0.128], [0.7, 0.095], [0.708, 0.067], [0.717, 0.043], [0.725, 0.024], [0.733, 0.011], [0.742, 0.003], [0.75, 0], [0.758, 0.003], [0.767, 0.011], [0.775, 0.024], [0.783, 0.043], [0.792, 0.067], [0.8, 0.095], [0.808, 0.128], [0.817, 0.165], [0.825, 0.206], [0.833, 0.25], [0.842, 0.297], [0.85, 0.345], [0.858, 0.396], [0.867, 0.448], [0.875, 0.5], [0.883, 0.552], [0.892, 0.604], [0.9, 0.655], [0.908, 0.703], [0.917, 0.75], [0.925, 0.794], [0.933, 0.835], [0.942, 0.872], [0.95, 0.905], [0.958, 0.933], [0.967, 0.957], [0.975, 0.976], [0.983, 0.989], [0.992, 0.997], [1, 1]], step: 1 },
            { kind: "label", at: [0.06, 0.87], label: "C", labelAt: "ne", step: 1 },
            { kind: "curve", points: [[0, 0], [0.008, 0.003], [0.017, 0.011], [0.025, 0.024], [0.033, 0.043], [0.042, 0.067], [0.05, 0.095], [0.058, 0.128], [0.067, 0.165], [0.075, 0.206], [0.083, 0.25], [0.092, 0.297], [0.1, 0.345], [0.108, 0.396], [0.117, 0.448], [0.125, 0.5], [0.133, 0.552], [0.142, 0.604], [0.15, 0.655], [0.158, 0.703], [0.167, 0.75], [0.175, 0.794], [0.183, 0.835], [0.192, 0.872], [0.2, 0.905], [0.208, 0.933], [0.217, 0.957], [0.225, 0.976], [0.233, 0.989], [0.242, 0.997], [0.25, 1], [0.258, 0.997], [0.267, 0.989], [0.275, 0.976], [0.283, 0.957], [0.292, 0.933], [0.3, 0.905], [0.308, 0.872], [0.317, 0.835], [0.325, 0.794], [0.333, 0.75], [0.342, 0.703], [0.35, 0.655], [0.358, 0.604], [0.367, 0.552], [0.375, 0.5], [0.383, 0.448], [0.392, 0.396], [0.4, 0.345], [0.408, 0.297], [0.417, 0.25], [0.425, 0.206], [0.433, 0.165], [0.442, 0.128], [0.45, 0.095], [0.458, 0.067], [0.467, 0.043], [0.475, 0.024], [0.483, 0.011], [0.492, 0.003], [0.5, 0], [0.508, 0.003], [0.517, 0.011], [0.525, 0.024], [0.533, 0.043], [0.542, 0.067], [0.55, 0.095], [0.558, 0.128], [0.567, 0.165], [0.575, 0.206], [0.583, 0.25], [0.592, 0.297], [0.6, 0.345], [0.608, 0.396], [0.617, 0.448], [0.625, 0.5], [0.633, 0.552], [0.642, 0.604], [0.65, 0.655], [0.658, 0.703], [0.667, 0.75], [0.675, 0.794], [0.683, 0.835], [0.692, 0.872], [0.7, 0.905], [0.708, 0.933], [0.717, 0.957], [0.725, 0.976], [0.733, 0.989], [0.742, 0.997], [0.75, 1], [0.758, 0.997], [0.767, 0.989], [0.775, 0.976], [0.783, 0.957], [0.792, 0.933], [0.8, 0.905], [0.808, 0.872], [0.817, 0.835], [0.825, 0.794], [0.833, 0.75], [0.842, 0.703], [0.85, 0.655], [0.858, 0.604], [0.867, 0.552], [0.875, 0.5], [0.883, 0.448], [0.892, 0.396], [0.9, 0.345], [0.908, 0.297], [0.917, 0.25], [0.925, 0.206], [0.933, 0.165], [0.942, 0.128], [0.95, 0.095], [0.958, 0.067], [0.967, 0.043], [0.975, 0.024], [0.983, 0.011], [0.992, 0.003], [1, 0]], step: 2, tone: "good" },
            { kind: "label", at: [0.19, 0.87], label: "L", labelAt: "nw", step: 2, tone: "good" },
            { kind: "point", at: [0.25, 1], label: "all in L", labelAt: "n", step: 3, tone: "good" },
            { kind: "point", at: [0.5, 1], label: "all in C", labelAt: "n", step: 4 },
            { kind: "segment", from: [0, 1], to: [1, 1], dashed: true, tone: "muted", step: 5 },
            { kind: "label", at: [0.88, 1], label: "total", labelAt: "n", step: 5, tone: "muted" },
          ],
        },
      },
      {
        title: "Natural frequency",
        points: [
          t`The charge oscillates at the **natural frequency** $f = \dfrac{1}{2\pi\sqrt{LC}}$.`,
          t`At this frequency $\omega L = \dfrac{1}{\omega C}$: $X_L = X_C$, so the net reactance is zero.`,
          t`The period is $T = 2\pi\sqrt{LC}$; the energy swaps from one field to the other twice each period.`,
          t`A real circuit has some resistance, so the oscillations die away as heat is produced.`,
        ],
      },
      {
        title: "Maximum current",
        points: [
          t`Energy is conserved: $\dfrac{1}{2}CV^2$ $= \dfrac{1}{2}Li_0^2$, with $V$ the capacitor's starting voltage.`,
          t`So the maximum current is $i_0 = V\sqrt{\dfrac{C}{L}}$.`,
          t`Turned round, $L = \dfrac{CV^2}{i_0^2}$ when $i_0$ is known.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $4\ \mu\mathrm{F}$ capacitor is charged to $50\ \mathrm{V}$ and connected across a pure $10\ \mathrm{mH}$ coil. Find the frequency of oscillation, the energy stored and the maximum current.`,
      steps: [
        t`$LC$ $= 10^{-2} \times 4 \times 10^{-6}$ $= 4 \times 10^{-8}$, so $\sqrt{LC}$ $= 2 \times 10^{-4}\ \mathrm{s}$.`,
        t`$f$ $= \dfrac{1}{2\pi \times 2 \times 10^{-4}}$ $\approx 796\ \mathrm{Hz}$.`,
        t`Energy $= \dfrac{1}{2}CV^2$ $= \dfrac{1}{2} \times 4 \times 10^{-6} \times 50^2$ $= 5 \times 10^{-3}\ \mathrm{J}$.`,
        t`$\dfrac{1}{2}Li_0^2$ $= 5 \times 10^{-3}$, so $i_0^2 = 1$ and $i_0 = 1\ \mathrm{A}$.`,
      ],
      answer: t`$f \approx 796\ \mathrm{Hz}$; $5 \times 10^{-3}\ \mathrm{J}$; $i_0 = 1\ \mathrm{A}$`,
    },
    visualSpec: t`Watch a capacitor's charge drain through a coil and refill the other way, with two bars showing the energy passing between the electric and magnetic fields.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Takes $\dfrac{1}{\sqrt{LC}}$ as the frequency, leaving out $2\pi$.`,
      remediation: t`$\dfrac{1}{\sqrt{LC}}$ is $\omega$ in rad/s; $f = \dfrac{\omega}{2\pi}$ $= \dfrac{1}{2\pi\sqrt{LC}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Leaves out the square root.",
      remediation: t`$\omega^2 = \dfrac{1}{LC}$, so $f = \dfrac{1}{2\pi\sqrt{LC}}$ and $C = \dfrac{1}{4\pi^2f^2L}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Gets a unit prefix wrong ($\mu$ or $\mathrm{m}$).`,
      remediation: t`$1\ \mu\mathrm{H}$ $= 10^{-6}\ \mathrm{H}$, $1\ \mathrm{mH}$ $= 10^{-3}\ \mathrm{H}$, $1\ \mu\mathrm{F}$ $= 10^{-6}\ \mathrm{F}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Leaves out the squares in the energy balance.",
      remediation: t`The energies are $\dfrac{1}{2}CV^2$ and $\dfrac{1}{2}Li_0^2$: both are squared.`,
      fallback: { kind: "ext", topic: "energy stored in a capacitor (Electrostatics, Ch.8)" },
    },
    {
      id: "C10-M5",
      mistake: t`Keeps the $\dfrac{1}{2}$ on one side only.`,
      remediation: t`Both energies carry $\dfrac{1}{2}$: $\dfrac{1}{2}CV^2$ $= \dfrac{1}{2}Li_0^2$, so the halves cancel.`,
      fallback: { kind: "ext", topic: "energy stored in an inductor (Electromagnetic Induction, Ch.12)" },
    },
    {
      id: "C10-M6",
      mistake: t`Turns $\dfrac{C}{L}$ upside down.`,
      remediation: t`From $CV^2 = Li_0^2$, $i_0 = V\sqrt{\dfrac{C}{L}}$: a larger $L$ means a smaller current.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Adds the two reactances.",
      remediation: t`$X_L$ and $X_C$ act opposite ways, so the net reactance is $X_L - X_C$, zero at the natural frequency.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Takes the net reactance as infinite.",
      remediation: t`In series, $X_L = X_C$ cancel to zero; an infinite impedance belongs to $L$ and $C$ in parallel.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Leaves out the capacitor's reactance.",
      remediation: t`Both reactances count: the net reactance is $X_L - X_C$, and they are equal at the natural frequency.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks the capacitor takes half a period to empty.",
      remediation: t`At $\dfrac{T}{2}$ the capacitor is fully charged the other way; it is empty, with all the energy magnetic, at $\dfrac{T}{4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Thinks the energy reaches the inductor only after a full period.",
      remediation: t`After a full period the circuit is back where it started, energy in the capacitor; the energy is all magnetic at $\dfrac{T}{4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Thinks some energy always stays in the capacitor.",
      remediation: "When the capacitor is fully discharged its energy is zero: at that instant all the energy is in the inductor.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.21" },
      stem: t`What capacitance will make a $101.4\ \mu\mathrm{H}$ inductance oscillate at a frequency of $1\ \mathrm{MHz}$?`,
      verify: { kind: "value", inputs: { L_uH: "101.4", f: "10**6" }, params: { ask: "C_pF", sf: "4" } },
      options: [
        { key: "A", text: t`$9862\ \mathrm{pF}$`, correct: false, misconceptionId: "C10-M1", value: "9862" },
        { key: "B", text: t`$1.57 \times 10^{9}\ \mathrm{pF}$`, correct: false, misconceptionId: "C10-M2", value: "1570000000" },
        { key: "C", text: t`$0.2498\ \mathrm{pF}$`, correct: false, misconceptionId: "C10-M3", value: "0.249800000000000" },
        { key: "D", text: t`$249.8\ \mathrm{pF}$`, correct: true, value: "249.800000000000" },
      ],
      solution: {
        steps: [
          t`$f = \dfrac{1}{2\pi\sqrt{LC}}$ gives $C = \dfrac{1}{4\pi^2f^2L}$.`,
          t`$C$ $= \dfrac{1}{4\pi^2 \times 10^{12} \times 101.4 \times 10^{-6}}$ $\approx 2.498 \times 10^{-10}\ \mathrm{F}$.`,
          t`That is $249.8\ \mathrm{pF}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.22" },
      stem: t`A $10\ \mu\mathrm{F}$ capacitor is charged to $25\ \mathrm{V}$. The battery is disconnected and a pure $100\ \mathrm{mH}$ coil is connected across the capacitor, so that LC oscillations are set up. What is the maximum current in the coil?`,
      verify: { kind: "value", inputs: { C_uF: "10", V: "25", L_mH: "100" }, params: { ask: "i0" } },
      options: [
        { key: "A", text: t`$0.25\ \mathrm{A}$`, correct: true, value: "0.250000000000000" },
        { key: "B", text: t`$0.0025\ \mathrm{A}$`, correct: false, misconceptionId: "C10-M4", value: "0.00250000000000000" },
        { key: "C", text: t`$0.177\ \mathrm{A}$`, correct: false, misconceptionId: "C10-M5", value: "0.177000000000000" },
        { key: "D", text: t`$2500\ \mathrm{A}$`, correct: false, misconceptionId: "C10-M6", value: "2500" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{2}CV^2$ $= \dfrac{1}{2}Li_0^2$, so $i_0 = V\sqrt{\dfrac{C}{L}}$.`,
          t`$i_0$ $= 25\sqrt{\dfrac{10 \times 10^{-6}}{0.1}}$ $= 25 \times 10^{-2}$ $= 0.25\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.23" },
      stem: t`A $100\ \mu\mathrm{F}$ capacitor is charged from a $50\ \mathrm{V}$ supply. The supply is removed and the capacitor is connected across an inductance; the largest current through the inductance is $5\ \mathrm{A}$. What is the inductance?`,
      verify: { kind: "value", inputs: { C_uF: "100", V: "50", i0: "5" }, params: { ask: "L" } },
      options: [
        { key: "A", text: t`$0.005\ \mathrm{H}$`, correct: false, misconceptionId: "C10-M5", value: "0.00500000000000000" },
        { key: "B", text: t`$0.01\ \mathrm{H}$`, correct: true, value: "0.0100000000000000" },
        { key: "C", text: t`$10000\ \mathrm{H}$`, correct: false, misconceptionId: "C10-M3", value: "10000" },
        { key: "D", text: t`$0.001\ \mathrm{H}$`, correct: false, misconceptionId: "C10-M4", value: "0.00100000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{2}CV^2$ $= \dfrac{1}{2}Li_0^2$, so $L = \dfrac{CV^2}{i_0^2}$.`,
          t`$L$ $= \dfrac{100 \times 10^{-6} \times 50^2}{5^2}$ $= 0.01\ \mathrm{H}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.2 (v)" },
      stem: t`An ideal inductor and capacitor are joined in series. What is the net reactance of the circuit at its natural frequency?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "X" } },
      options: [
        { key: "A", text: t`Infinite`, correct: false, misconceptionId: "C10-M8", value: "infinite_X" },
        { key: "B", text: t`$X_L$, the inductor's reactance`, correct: false, misconceptionId: "C10-M9", value: "equals_XL" },
        { key: "C", text: t`Zero`, correct: true, value: "zero_X" },
        { key: "D", text: t`$2X_L$, twice the inductor's reactance`, correct: false, misconceptionId: "C10-M7", value: "twice_XL" },
      ],
      solution: {
        steps: [
          t`At the natural frequency $\omega L = \dfrac{1}{\omega C}$, so $X_L = X_C$.`,
          t`They act opposite ways, so the net reactance $X_L - X_C$ is zero.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`A $2\ \mathrm{mH}$ coil is connected across a charged $5\ \mu\mathrm{F}$ capacitor. At what frequency does the circuit oscillate?`,
      verify: { kind: "value", inputs: { L_mH: "2", C_uF: "5" }, params: { ask: "f" } },
      options: [
        { key: "A", text: t`$1590\ \mathrm{Hz}$`, correct: true, value: "1590" },
        { key: "B", text: t`$10000\ \mathrm{Hz}$`, correct: false, misconceptionId: "C10-M1", value: "10000" },
        { key: "C", text: t`$1.59 \times 10^{7}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C10-M2", value: "15900000" },
        { key: "D", text: t`$50.3\ \mathrm{Hz}$`, correct: false, misconceptionId: "C10-M3", value: "50.3000000000000" },
      ],
      solution: {
        steps: [
          t`$LC$ $= 2 \times 10^{-3} \times 5 \times 10^{-6}$ $= 10^{-8}$, so $\sqrt{LC} = 10^{-4}\ \mathrm{s}$.`,
          t`$f = \dfrac{1}{2\pi \times 10^{-4}}$ $\approx 1590\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "authored" },
      stem: t`A charged capacitor is connected across an ideal inductor at $t = 0$. The charge then oscillates with period $T$. When is all the energy first stored in the inductor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "when" } },
      options: [
        { key: "A", text: t`At $t = \dfrac{T}{4}$`, correct: true, value: "quarter_T" },
        { key: "B", text: t`At $t = \dfrac{T}{2}$`, correct: false, misconceptionId: "C10-M10", value: "half_T" },
        { key: "C", text: t`At $t = T$`, correct: false, misconceptionId: "C10-M11", value: "full_T" },
        { key: "D", text: t`Never: part of it always stays in the capacitor`, correct: false, misconceptionId: "C10-M12", value: "never_all" },
      ],
      solution: {
        steps: [
          t`At $t = 0$ all the energy is in the capacitor.`,
          t`A quarter period later it has fully discharged and the current is greatest.`,
          t`So at $t = \dfrac{T}{4}$ all the energy is in the inductor.`,
        ],
      },
    },
  ],
};
