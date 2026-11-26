import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A capacitor's plates are separated by an insulator, so no charge can cross the gap. Yet a lamp in series with a capacitor lights up on the AC mains. How does the current get through?`,
    reveal: t`It never crosses the gap. On AC the plates charge one way, then the other, so charge surges back and forth in the wires every cycle. The capacitor limits that surge by its **capacitive reactance**, $X_C = \dfrac{1}{\omega C}$.`,
  },
  explanation: {
    intuition: [
      t`On DC a capacitor charges once and then the current stops: it blocks DC.`,
      t`On AC the voltage keeps reversing, so the plates keep charging and discharging: current flows in the circuit.`,
      t`The current is largest when the voltage is changing fastest, as it passes through zero.`,
      t`So the current peaks a quarter cycle *before* the voltage: it **leads** by $\dfrac{\pi}{2}$.`,
      t`The faster the reversals, or the bigger the capacitor, the more charge flows each second: $X_C$ falls.`,
    ],
    formal: [
      {
        title: "Current through a capacitor",
        points: [
          t`With $e = e_0\sin\omega t$ across $C$, the charge is $q = Ce_0\sin\omega t$.`,
          t`$i = \dfrac{dq}{dt}$ $= \omega Ce_0\cos\omega t$ $= i_0\sin\left(\omega t + \dfrac{\pi}{2}\right)$, with $i_0 = \omega Ce_0$.`,
          t`The current leads the voltage by $\dfrac{\pi}{2}$: the voltage lags the current.`,
        ],
      },
      {
        title: "Capacitive reactance",
        points: [
          t`$X_C = \dfrac{1}{\omega C}$ $= \dfrac{1}{2\pi fC}$, in ohm, so $i_{rms} = \dfrac{e_{rms}}{X_C}$.`,
          t`$X_C$ falls as $f$ or $C$ rises: doubling $f$ doubles the current.`,
          t`For DC, $f = 0$ and $X_C$ is infinite: no steady current.`,
          t`At very high frequency $X_C \to 0$, and the capacitor behaves like a plain wire.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $10\ \mu\mathrm{F}$ capacitor is connected to a $220\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. Find its reactance and the rms current.`,
      steps: [
        t`$X_C = \dfrac{1}{2\pi fC}$ $= \dfrac{1}{2\pi \times 50 \times 10 \times 10^{-6}}$ $\approx 318\ \Omega$.`,
        t`$i_{rms} = \dfrac{220}{318}$ $\approx 0.691\ \mathrm{A}$.`,
        t`The current leads the voltage by $\dfrac{\pi}{2}$.`,
      ],
      answer: t`$X_C \approx 318\ \Omega$; $i_{rms} \approx 0.691\ \mathrm{A}$`,
    },
    visualSpec: t`Turn up the frequency across a capacitor and watch the current grow, its peak always a quarter cycle ahead of the voltage's.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Uses $2\pi fC$, the form of an inductor's reactance.`,
      remediation: t`A capacitor passes faster changes more easily: $X_C = \dfrac{1}{2\pi fC}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Forgets the $2\pi$.`,
      remediation: t`$\omega = 2\pi f$, so $X_C = \dfrac{1}{2\pi fC}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Reads $\mu\mathrm{F}$ as $\mathrm{F}$.`,
      remediation: t`$1\ \mu\mathrm{F}$ $= 10^{-6}\ \mathrm{F}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Gives the peak current instead of the rms.",
      remediation: t`With an rms supply, $\dfrac{e_{rms}}{X_C}$ is already the rms current.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M5",
      mistake: t`Multiplies by $X_C$ instead of dividing.`,
      remediation: t`$i_{rms} = \dfrac{e_{rms}}{X_C}$, like $I = \dfrac{V}{R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Makes the voltage lead, as in an inductor.",
      remediation: "In a capacitor the current leads: it flows most as the voltage passes through zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks the voltage and current are half a cycle apart.",
      remediation: t`They are a quarter cycle apart: the phase difference is $\dfrac{\pi}{2}$, not $\pi$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks the voltage and current are in phase, as in a resistor.",
      remediation: t`$i = \dfrac{dq}{dt}$ peaks when $q$, and the voltage, pass through zero: a quarter cycle ahead.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: t`Divides $e_0$ by $\omega C$.`,
      remediation: t`$i_0 = \dfrac{e_0}{X_C}$ $= \omega Ce_0$: multiply by $\omega C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: t`Forgets $\omega$, taking $i_0 = Ce_0$.`,
      remediation: t`$Ce_0$ is the peak charge; the current is its rate of change, $\omega Ce_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: t`Thinks $X_C$ grows with $C$.`,
      remediation: t`$X_C = \dfrac{1}{2\pi fC}$ falls as $C$ grows, so more current flows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks a capacitor has no effect on AC.",
      remediation: t`A capacitor opposes AC by $X_C$; changing $C$ changes the current.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks a capacitor blocks AC as it blocks DC.",
      remediation: "On AC the plates keep charging and discharging, so current flows in the circuit.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.6(vi)" },
      stem: t`A capacitor of $0.5\ \mu\mathrm{F}$ is connected to an AC source of frequency $100\ \mathrm{Hz}$. What is its capacitive reactance?`,
      verify: { kind: "value", inputs: { f: "100", C_uF: "0.5" }, params: { ask: "XC" } },
      options: [
        { key: "A", text: t`$0.00318\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M3", value: "0.00318000000000000" },
        { key: "B", text: t`$3180\ \mathrm{\Omega}$`, correct: true, value: "3180" },
        { key: "C", text: t`$3.14 \times 10^{-4}\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M1", value: "0.000314000000000000" },
        { key: "D", text: t`$20000\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C05-M2", value: "20000" },
      ],
      solution: {
        steps: [
          t`$X_C = \dfrac{1}{2\pi fC}$ $= \dfrac{1}{2\pi \times 100 \times 0.5 \times 10^{-6}}$.`,
          t`$X_C \approx 3.18 \times 10^3\ \Omega$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.14" },
      stem: t`A capacitor of $15.0\ \mu\mathrm{F}$ is connected to a $220\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. What rms current flows?`,
      verify: { kind: "value", inputs: { erms: "220", f: "50", C_uF: "15" }, params: { ask: "irms" } },
      options: [
        { key: "A", text: t`$0.165\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M2", value: "0.165000000000000" },
        { key: "B", text: t`$1.47\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M4", value: "1.47000000000000" },
        { key: "C", text: t`$46700\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M5", value: "46700" },
        { key: "D", text: t`$1.04\ \mathrm{A}$`, correct: true, value: "1.04000000000000" },
      ],
      solution: {
        steps: [
          t`$X_C$ $= \dfrac{1}{2\pi \times 50 \times 15 \times 10^{-6}}$ $\approx 212\ \Omega$.`,
          t`$i_{rms}$ $= \dfrac{220}{212} \approx 1.04\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.5(i)" },
      stem: t`An AC voltage is applied to a pure capacitor. How does the voltage across the capacitor compare with the current?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "phase" } },
      options: [
        { key: "A", text: t`It lags behind the current by $\dfrac{\pi}{2}$`, correct: true, value: "v_lags" },
        { key: "B", text: t`It leads the current by $\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C05-M6", value: "v_leads" },
        { key: "C", text: t`It leads the current by $\pi$`, correct: false, misconceptionId: "C05-M7", value: "half_cycle" },
        { key: "D", text: t`It is in phase with the current`, correct: false, misconceptionId: "C05-M8", value: "in_phase" },
      ],
      solution: {
        steps: [
          t`$q = Ce$, so $i = \dfrac{dq}{dt}$ is largest as $e$ passes through zero.`,
          t`The current leads by $\dfrac{\pi}{2}$: the voltage lags behind it by $\dfrac{\pi}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Solved Ex.13.4" },
      stem: t`A capacitor of $2\ \mu\mathrm{F}$ is connected to an AC source of emf $e = 250\sin 100\pi t$. Which equation gives the current, in ampere?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$i = 3.98 \times 10^5\sin\left(100\pi t + \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C05-M9", value: "over_wC" },
        { key: "B", text: t`$i = 5 \times 10^{-4}\sin\left(100\pi t + \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C05-M10", value: "no_w" },
        { key: "C", text: t`$i = 0.157\sin\left(100\pi t + \dfrac{\pi}{2}\right)$`, correct: true, value: "lead" },
        { key: "D", text: t`$i = 0.157\sin\left(100\pi t - \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C05-M6", value: "lag" },
      ],
      solution: {
        steps: [
          t`$i_0 = \omega Ce_0$ $= 100\pi \times 2 \times 10^{-6} \times 250$ $\approx 0.157\ \mathrm{A}$.`,
          t`The current leads by $\dfrac{\pi}{2}$: $i$ $= 0.157\sin\left(100\pi t + \dfrac{\pi}{2}\right)$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.2 (i)" },
      stem: t`A lamp in series with a capacitor glows on an AC supply. What happens to its brightness if the capacitance is increased?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lamp" } },
      options: [
        { key: "A", text: t`It glows more brightly`, correct: true, value: "brighter" },
        { key: "B", text: t`It glows more dimly`, correct: false, misconceptionId: "C05-M11", value: "dimmer" },
        { key: "C", text: t`It does not change`, correct: false, misconceptionId: "C05-M12", value: "unchanged" },
        { key: "D", text: t`It goes out: a capacitor blocks the current`, correct: false, misconceptionId: "C05-M13", value: "goes_out" },
      ],
      solution: {
        steps: [
          t`A larger $C$ means a smaller $X_C = \dfrac{1}{2\pi fC}$.`,
          t`The circuit's opposition falls, more current flows, and the lamp glows more brightly.`,
        ],
      },
    },
  ],
};
