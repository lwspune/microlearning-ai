import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Put an inductor and a capacitor side by side across a supply, both drawing current. At one frequency the supply delivers almost nothing, though each branch carries a large current. Where does that current go?`,
    reveal: t`Round and round between the coil and the capacitor. At resonance their currents are equal and opposite, so they cancel in the supply line: the pair's impedance is greatest. This is **parallel resonance**.`,
  },
  explanation: {
    intuition: [
      t`In parallel, $L$ and $C$ share the same voltage.`,
      t`The inductor's current lags that voltage by $\dfrac{\pi}{2}$; the capacitor's leads it by $\dfrac{\pi}{2}$.`,
      t`So the two branch currents are always opposite in phase.`,
      t`At the frequency where $X_L = X_C$, they are also equal, and they cancel in the supply line.`,
      t`The circuit then blocks its own frequency: a **rejector circuit**.`,
    ],
    formal: [
      {
        title: "Parallel resonance",
        points: [
          t`Condition: $X_L = X_C$, so again $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$.`,
          t`With a resistor $R$ in parallel: $\dfrac{1}{Z}$ $= \sqrt{\dfrac{1}{R^2} + \left(\dfrac{1}{X_C} - \dfrac{1}{X_L}\right)^2}$.`,
          t`At $f_0$, $\dfrac{1}{Z}$ is least: the impedance is greatest and the line current least.`,
          t`For ideal $L$ and $C$ alone, the line current is zero, while equal currents circulate in the two branches.`,
        ],
      },
      {
        title: "Series and parallel compared",
        points: [
          t`Both resonate at $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$.`,
          t`Series: impedance least, current greatest: an **acceptor** circuit, used in tuning.`,
          t`Parallel: impedance greatest, line current least: a **rejector** circuit, used to block one frequency.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $2\ \mathrm{H}$ coil and a $2\ \mu\mathrm{F}$ capacitor are in parallel. Find the resonant frequency and the reactance of each at that frequency.`,
      steps: [
        t`$\sqrt{LC}$ $= \sqrt{2 \times 2 \times 10^{-6}}$ $= 2 \times 10^{-3}\ \mathrm{s}$.`,
        t`$f_0$ $= \dfrac{1}{2\pi \times 2 \times 10^{-3}}$ $\approx 79.6\ \mathrm{Hz}$.`,
        t`$X_L = \omega_0L$ $= \dfrac{L}{\sqrt{LC}}$ $= \dfrac{2}{2 \times 10^{-3}}$ $= 1000\ \Omega$, and $X_C$ is the same.`,
      ],
      answer: t`$f_0 \approx 79.6\ \mathrm{Hz}$; $X_L = X_C = 1000\ \Omega$`,
    },
    visualSpec: t`Sweep the frequency across L and C in parallel and watch the branch currents grow equal and the line current fall to a minimum at f₀.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Mixes up $\omega_0$ and $f_0$.`,
      remediation: t`$\omega_0 = \dfrac{1}{\sqrt{LC}}$ in rad/s; $f_0 = \dfrac{\omega_0}{2\pi}$ in Hz.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M2",
      mistake: "Forgets the square root.",
      remediation: t`$f_0 = \dfrac{1}{2\pi\sqrt{LC}}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M3",
      mistake: t`Reads $\mu\mathrm{F}$ as $\mathrm{F}$.`,
      remediation: t`$1\ \mu\mathrm{F}$ $= 10^{-6}\ \mathrm{F}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Mixes up parallel and series resonance.",
      remediation: t`In series the impedance is least at $f_0$; in parallel it is greatest, and the line current least.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M5",
      mistake: "Thinks no current flows in the branches at resonance.",
      remediation: t`Each branch carries $\dfrac{V}{X}$; only their sum in the line cancels.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks the line current leads the voltage at resonance.",
      remediation: t`The reactive branch currents cancel, leaving only the in-phase current through $R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: t`Takes $X_L = R$ as the condition.`,
      remediation: t`Resonance is when the two reactances are equal: $X_L = X_C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Takes $X_C = 0$ as the condition.`,
      remediation: t`Resonance is when the two reactances are equal: $X_L = X_C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: t`Takes $L = C$ as the condition.`,
      remediation: t`$L$ and $C$ are different quantities; resonance needs $\omega L = \dfrac{1}{\omega C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Adds the two reactances.",
      remediation: t`Each reactance is $\omega_0L$; they are equal, not added: $X_L = \dfrac{L}{\sqrt{LC}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks each reactance vanishes at resonance.",
      remediation: t`$X_L$ and $X_C$ are equal, not zero; their branch currents cancel only in the line.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Adds the sizes of the branch currents.",
      remediation: "The branch currents are opposite in phase: in the line they subtract, and at resonance cancel.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Takes one branch's current as the line current.",
      remediation: "The line carries both branch currents together, and at resonance they cancel.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: t`Divides by $X_L + X_C$, as if the two were in series.`,
      remediation: "In parallel each branch has the whole voltage; it is the currents that combine.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.11" },
      stem: t`A $5\ \mathrm{H}$ inductor and a $5\ \mu\mathrm{F}$ capacitor are joined in parallel. What is the resonant frequency of the circuit?`,
      verify: { kind: "value", inputs: { L: "5", C_uF: "5" }, params: { ask: "f0" } },
      options: [
        { key: "A", text: t`$31.8\ \mathrm{Hz}$`, correct: true, value: "31.8000000000000" },
        { key: "B", text: t`$200\ \mathrm{Hz}$`, correct: false, misconceptionId: "C08-M1", value: "200" },
        { key: "C", text: t`$6370\ \mathrm{Hz}$`, correct: false, misconceptionId: "C08-M2", value: "6370" },
        { key: "D", text: t`$0.0318\ \mathrm{Hz}$`, correct: false, misconceptionId: "C08-M3", value: "0.0318000000000000" },
      ],
      solution: {
        steps: [
          t`$\sqrt{LC}$ $= \sqrt{5 \times 5 \times 10^{-6}}$ $= 5 \times 10^{-3}\ \mathrm{s}$.`,
          t`$f_0$ $= \dfrac{1}{2\pi \times 5 \times 10^{-3}}$ $\approx 31.8\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.11" },
      stem: t`A $5\ \mathrm{H}$ inductor and a $5\ \mu\mathrm{F}$ capacitor are joined in parallel. What is the inductor's reactance at the resonant frequency?`,
      verify: { kind: "value", inputs: { L: "5", C_uF: "5" }, params: { ask: "XL0" } },
      options: [
        { key: "A", text: t`$6280\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M1", value: "6280" },
        { key: "B", text: t`$2000\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M10", value: "2000" },
        { key: "C", text: t`$0\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C08-M11", value: "0" },
        { key: "D", text: t`$1000\ \mathrm{\Omega}$`, correct: true, value: "1000" },
      ],
      solution: {
        steps: [
          t`$\omega_0 = \dfrac{1}{\sqrt{LC}}$ $= 200\ \mathrm{rad/s}$.`,
          t`$X_L = \omega_0L$ $= 200 \times 5$ $= 1000\ \Omega$, equal to $X_C$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`A $5\ \mathrm{H}$ inductor and a $5\ \mu\mathrm{F}$ capacitor are joined in parallel. They are fed from a $100\ \mathrm{V}$ rms supply tuned to their resonant frequency. Taking the coil and capacitor as ideal, what current does the supply deliver?`,
      verify: { kind: "value", inputs: { L: "5", C_uF: "5", V: "100" }, params: { ask: "line" } },
      options: [
        { key: "A", text: t`$0.2\ \mathrm{A}$`, correct: false, misconceptionId: "C08-M12", value: "0.200000000000000" },
        { key: "B", text: t`$0.1\ \mathrm{A}$`, correct: false, misconceptionId: "C08-M13", value: "0.100000000000000" },
        { key: "C", text: t`$0.05\ \mathrm{A}$`, correct: false, misconceptionId: "C08-M14", value: "0.0500000000000000" },
        { key: "D", text: t`$0\ \mathrm{A}$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`Each branch carries $\dfrac{100}{1000}$ $= 0.1\ \mathrm{A}$, the coil's lagging and the capacitor's leading.`,
          t`They are equal and opposite, so the supply line carries $0\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.25" },
      stem: t`An inductor, a capacitor and a resistor are joined in parallel across an AC supply. At parallel resonance, which is true?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "state" } },
      options: [
        { key: "A", text: t`No current flows in the inductor or the capacitor`, correct: false, misconceptionId: "C08-M5", value: "no_branch" },
        { key: "B", text: t`The line current leads the voltage by $\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C08-M6", value: "leads" },
        { key: "C", text: t`The impedance is greatest and the line current least`, correct: true, value: "Z_max" },
        { key: "D", text: t`The impedance is least and the line current greatest`, correct: false, misconceptionId: "C08-M4", value: "Z_min" },
      ],
      solution: {
        steps: [
          t`At $f_0$ the inductor and capacitor currents cancel in the line.`,
          t`So the line current is least and the impedance greatest.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.25" },
      stem: t`What is the condition for resonance in a parallel circuit of an inductor and a capacitor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cond" } },
      options: [
        { key: "A", text: t`$L = C$`, correct: false, misconceptionId: "C08-M9", value: "L_eq_C" },
        { key: "B", text: t`$X_L = X_C$`, correct: true, value: "XL_eq_XC" },
        { key: "C", text: t`$X_L = R$`, correct: false, misconceptionId: "C08-M7", value: "XL_eq_R" },
        { key: "D", text: t`$X_C = 0$`, correct: false, misconceptionId: "C08-M8", value: "XC_zero" },
      ],
      solution: {
        steps: [
          t`The branch currents cancel when they are equal: $\dfrac{V}{X_L} = \dfrac{V}{X_C}$.`,
          t`So $X_L = X_C$.`,
        ],
      },
    },
  ],
};
