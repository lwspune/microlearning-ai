import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Turn a radio's tuning knob and one station comes in loud and clear while all the others fade. The aerial picks up every station at once. How does the set pick out one?`,
    reveal: t`By resonance. The tuning circuit is an LCR circuit, and at one frequency, $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$, its two reactances cancel and the current leaps up. The knob changes $C$, and so $f_0$.`,
  },
  explanation: {
    intuition: [
      t`In a series LCR circuit, $X_L$ rises with frequency and $X_C$ falls.`,
      t`At one frequency they are equal, and their effects cancel.`,
      t`Then only $R$ opposes the current: the impedance is least and the current greatest.`,
      t`This is **series resonance**, at the **resonant frequency** $f_0$.`,
      t`The smaller $R$, the taller and sharper the peak: the circuit is more selective.`,
    ],
    formal: [
      {
        title: "The resonant frequency",
        points: [
          t`Resonance when $X_L = X_C$: $\omega_0L = \dfrac{1}{\omega_0C}$.`,
          t`So $\omega_0 = \dfrac{1}{\sqrt{LC}}$ and $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$: it depends on $L$ and $C$ only.`,
          t`At $f_0$, $Z = R$, the current $\dfrac{e_{rms}}{R}$ is greatest, and it is in phase with the voltage.`,
        ],
      },
      {
        title: "The Q factor",
        points: [
          t`The **Q factor** measures how sharp the resonance is: $Q = \dfrac{\omega_0L}{R}$ $= \dfrac{1}{R}\sqrt{\dfrac{L}{C}}$.`,
          t`A larger $Q$ means a narrower, sharper peak: the circuit picks out its own frequency better.`,
          t`$Q$ is also the voltage across $L$ (or $C$) at resonance divided by the supply voltage.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $0.5\ \mathrm{H}$ inductor, an $8\ \mu\mathrm{F}$ capacitor and a $20\ \Omega$ resistor are in series across a $100\ \mathrm{V}$ supply of variable frequency. Find the resonant frequency and the current at resonance.`,
      steps: [
        t`$\sqrt{LC}$ $= \sqrt{0.5 \times 8 \times 10^{-6}}$ $= 2 \times 10^{-3}\ \mathrm{s}$.`,
        t`$f_0$ $= \dfrac{1}{2\pi \times 2 \times 10^{-3}}$ $\approx 79.6\ \mathrm{Hz}$.`,
        t`At resonance $Z = R$, so $i_{rms} = \dfrac{100}{20}$ $= 5\ \mathrm{A}$.`,
      ],
      answer: t`$f_0 \approx 79.6\ \mathrm{Hz}$; $5\ \mathrm{A}$`,
    },
    visualSpec: t`Sweep the frequency through an LCR circuit and watch the current peak at f₀, sharper as R is made smaller.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Forgets the $2\pi$, giving $\omega_0$ for $f_0$.`,
      remediation: t`$\dfrac{1}{\sqrt{LC}}$ is $\omega_0$ in rad/s; divide by $2\pi$ for $f_0$ in Hz.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Forgets the square root.",
      remediation: t`$\omega_0^2 = \dfrac{1}{LC}$, so $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Takes the supply's frequency as the resonant frequency.",
      remediation: t`$f_0$ depends only on $L$ and $C$; the circuit resonates only if the supply is tuned to it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Finds the impedance at the supply's frequency, not at resonance.",
      remediation: t`At resonance $X_L = X_C$, so they cancel and $Z = R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks the impedance is zero at resonance.",
      remediation: t`Only the reactances cancel; the resistance remains: $Z = R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Adds the two equal reactances.",
      remediation: t`$X_L$ and $X_C$ act in opposite directions: $Z$ $= \sqrt{R^2 + \left(X_L - X_C\right)^2}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M7",
      mistake: t`Turns $Q$ upside down.`,
      remediation: t`$Q = \dfrac{\omega_0L}{R}$: a small $R$ gives a large $Q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Forgets the square root in $Q$.`,
      remediation: t`$Q$ $= \dfrac{1}{R}\sqrt{\dfrac{L}{C}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Uses $f_0$ in place of $\omega_0$.`,
      remediation: t`$Q = \dfrac{\omega_0L}{R}$ with $\omega_0 = 2\pi f_0$, in rad/s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks the current lags at resonance.",
      remediation: "At resonance the reactances cancel, so the circuit acts as a pure resistance: current and voltage are in phase.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks the current is least at series resonance.",
      remediation: t`In series, resonance makes $Z$ least, so the current is greatest; the current is least in parallel resonance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: t`Thinks a larger $Q$ widens the peak.`,
      remediation: t`A larger $Q$ means a sharper, narrower peak.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: t`Thinks a larger $Q$ raises the resonant frequency.`,
      remediation: t`$f_0 = \dfrac{1}{2\pi\sqrt{LC}}$ is set by $L$ and $C$; $Q$ changes only the sharpness.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: t`Thinks a larger $Q$ means more current at every frequency.`,
      remediation: t`Away from $f_0$ the reactances dominate; a smaller $R$ raises the current mainly near $f_0$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.13" },
      stem: t`A $0.1\ \mathrm{H}$ inductor, a $25\ \mu\mathrm{F}$ capacitor and a $15\ \Omega$ resistor are joined in series to a $120\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. What is the circuit's resonant frequency?`,
      verify: { kind: "value", inputs: { L: "0.1", C_uF: "25", R: "15", f_supply: "50" }, params: { ask: "f0" } },
      options: [
        { key: "A", text: t`$63700\ \mathrm{Hz}$`, correct: false, misconceptionId: "C07-M2", value: "63700" },
        { key: "B", text: t`$50\ \mathrm{Hz}$`, correct: false, misconceptionId: "C07-M3", value: "50" },
        { key: "C", text: t`$101\ \mathrm{Hz}$`, correct: true, value: "101" },
        { key: "D", text: t`$632\ \mathrm{Hz}$`, correct: false, misconceptionId: "C07-M1", value: "632" },
      ],
      solution: {
        steps: [
          t`$LC = 0.1 \times 25 \times 10^{-6}$ $= 2.5 \times 10^{-6}$, so $\sqrt{LC} \approx 1.58 \times 10^{-3}\ \mathrm{s}$.`,
          t`$f_0$ $= \dfrac{1}{2\pi \times 1.58 \times 10^{-3}}$ $\approx 101\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Solved Ex.13.5" },
      stem: t`A $0.1\ \mathrm{H}$ inductor, a $25\ \mu\mathrm{F}$ capacitor and a $15\ \Omega$ resistor are joined in series to a $120\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. If the supply's frequency is tuned to resonance, what is the circuit's impedance?`,
      verify: { kind: "value", inputs: { L: "0.1", C_uF: "25", R: "15", f_supply: "50" }, params: { ask: "Z0" } },
      options: [
        { key: "A", text: t`$97.1\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C07-M4", value: "97.1000000000000" },
        { key: "B", text: t`$0\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C07-M5", value: "0" },
        { key: "C", text: t`$127\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C07-M6", value: "127" },
        { key: "D", text: t`$15\ \mathrm{\Omega}$`, correct: true, value: "15" },
      ],
      solution: {
        steps: [
          t`At resonance $X_L = X_C$, so the reactances cancel.`,
          t`$Z = R = 15\ \Omega$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`A series circuit has $L = 0.1\ \mathrm{H}$, $C = 25\ \mu\mathrm{F}$ and $R = 15\ \Omega$. What is its Q factor?`,
      verify: { kind: "value", inputs: { L: "0.1", C_uF: "25", R: "15" }, params: { ask: "Q" } },
      options: [
        { key: "A", text: t`$0.671$`, correct: false, misconceptionId: "C07-M9", value: "0.671000000000000" },
        { key: "B", text: t`$4.22$`, correct: true, value: "4.22000000000000" },
        { key: "C", text: t`$0.237$`, correct: false, misconceptionId: "C07-M7", value: "0.237000000000000" },
        { key: "D", text: t`$267$`, correct: false, misconceptionId: "C07-M8", value: "267" },
      ],
      solution: {
        steps: [
          t`$\sqrt{\dfrac{L}{C}}$ $= \sqrt{\dfrac{0.1}{25 \times 10^{-6}}}$ $\approx 63.2\ \Omega$.`,
          t`$Q = \dfrac{63.2}{15} \approx 4.22$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`A series LCR circuit is driven at its resonant frequency. Which statement is true?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "state" } },
      options: [
        { key: "A", text: t`The current is greatest, and in phase with the voltage`, correct: true, value: "max_in_phase" },
        { key: "B", text: t`The impedance is zero`, correct: false, misconceptionId: "C07-M5", value: "Z_zero" },
        { key: "C", text: t`The current lags the voltage by $\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C07-M10", value: "lags" },
        { key: "D", text: t`The current is least`, correct: false, misconceptionId: "C07-M11", value: "least_I" },
      ],
      solution: {
        steps: [
          t`At resonance $X_L = X_C$, so $Z = R$, its least value.`,
          t`The current is greatest, and with no net reactance it is in phase with the voltage.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`Two series LCR circuits have the same $L$ and $C$, but the first has the higher Q factor. How do their current-against-frequency curves compare?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sharp" } },
      options: [
        { key: "A", text: t`The first has the wider, flatter peak`, correct: false, misconceptionId: "C07-M12", value: "wider" },
        { key: "B", text: t`The first peaks at a higher frequency`, correct: false, misconceptionId: "C07-M13", value: "higher_f0" },
        { key: "C", text: t`The first carries more current at every frequency`, correct: false, misconceptionId: "C07-M14", value: "larger_everywhere" },
        { key: "D", text: t`The first has the sharper, narrower peak`, correct: true, value: "sharper" },
      ],
      solution: {
        steps: [
          t`Same $L$ and $C$ means the same $f_0$.`,
          t`A higher $Q$ (smaller $R$) gives a sharper, narrower peak.`,
        ],
      },
    },
  ],
};
