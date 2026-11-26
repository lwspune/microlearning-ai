import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A coil of thick copper wire has almost no resistance, yet on the $50\ \mathrm{Hz}$ mains it lets only a small current through. What is holding the current back?`,
    reveal: t`The coil's own back emf. The current is always changing, so the coil keeps inducing an emf against it. That opposition is the **inductive reactance**, $X_L = \omega L$.`,
  },
  explanation: {
    intuition: [
      t`On AC the current in a coil never stops changing, so the coil never stops inducing a back emf.`,
      t`That back emf limits the current, just as a resistance would: the **inductive reactance** $X_L$.`,
      t`Faster changes mean a larger back emf, so $X_L$ grows with frequency; on steady DC it is zero.`,
      t`The emf is largest when the current is changing fastest, as it passes through zero.`,
      t`So the current reaches its peak a quarter cycle after the emf: it **lags** by $\dfrac{\pi}{2}$.`,
    ],
    formal: [
      {
        title: "Current through an inductor",
        points: [
          t`With $e = e_0\sin\omega t$ across a pure inductor, $e = L\dfrac{di}{dt}$.`,
          t`Integrating, $i$ $= -\dfrac{e_0}{\omega L}\cos\omega t$ $= i_0\sin\left(\omega t - \dfrac{\pi}{2}\right)$.`,
          t`The peak current is $i_0 = \dfrac{e_0}{\omega L}$.`,
          t`The current lags the emf by $\dfrac{\pi}{2}$: when one is at its peak, the other is zero.`,
        ],
      },
      {
        title: "Inductive reactance",
        points: [
          t`$X_L = \omega L = 2\pi fL$, in ohm, so $i_0 = \dfrac{e_0}{X_L}$ and $i_{rms} = \dfrac{e_{rms}}{X_L}$.`,
          t`$X_L$ is proportional to $f$: doubling $f$ halves the current.`,
          t`For DC, $f = 0$ and $X_L = 0$: a pure inductor does not oppose a steady current.`,
        ],
      },
    ],
    worked: {
      prompt: t`A coil of inductance $0.5\ \mathrm{H}$ and negligible resistance is connected to a $220\ \mathrm{V}$, $50\ \mathrm{Hz}$ supply. Find its reactance and the rms current.`,
      steps: [
        t`$X_L = 2\pi fL$ $= 2\pi \times 50 \times 0.5$ $\approx 157\ \Omega$.`,
        t`$i_{rms} = \dfrac{e_{rms}}{X_L}$ $= \dfrac{220}{157}$.`,
        t`$i_{rms} \approx 1.40\ \mathrm{A}$, lagging the voltage by $\dfrac{\pi}{2}$.`,
      ],
      answer: t`$X_L \approx 157\ \Omega$; $i_{rms} \approx 1.40\ \mathrm{A}$`,
    },
    visualSpec: t`Raise the frequency across a coil and watch the current shrink, its peak always a quarter cycle behind the voltage's.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses $f$ for $\omega$.`,
      remediation: t`$\omega = 2\pi f$, so $X_L = 2\pi fL$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Reads $\mathrm{mH}$ as $\mathrm{H}$.`,
      remediation: t`$1\ \mathrm{mH}$ $= 10^{-3}\ \mathrm{H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Uses $\dfrac{1}{\omega L}$, the form of a capacitor's reactance.`,
      remediation: t`An inductor opposes faster changes more: $X_L = \omega L$ grows with $\omega$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks the current and voltage are in phase, as in a resistor.",
      remediation: t`In an inductor the current lags the voltage by $\dfrac{\pi}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Gives the rms voltage for the voltage at that instant.",
      remediation: "The rms value is an average measure; at the current's peak the voltage is passing through zero.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks the current and voltage are in antiphase.",
      remediation: t`They are a quarter cycle apart, $\dfrac{\pi}{2}$, not half a cycle.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M7",
      mistake: "Mixes up the peak and rms values.",
      remediation: t`An amplitude is a peak value; rms $= \dfrac{\text{peak}}{\sqrt{2}}$, and AC meters read rms.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M8",
      mistake: t`Divides the current by $X_L$ instead of multiplying.`,
      remediation: t`$e = iX_L$, like $V = IR$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Makes the current lead the voltage, as in a capacitor.",
      remediation: t`In an inductor the back emf delays the current: it lags by $\dfrac{\pi}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: t`Divides the peak emf by $L$ instead of by $X_L$.`,
      remediation: t`$i_0 = \dfrac{e_0}{X_L}$ with $X_L = \omega L$ $= 100\pi \times \dfrac{1}{\pi}$ $= 100\ \Omega$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Gives the half-cycle average instead of the rms value.",
      remediation: t`AC meters read rms: $\dfrac{i_0}{\sqrt{2}}$, not the average $\dfrac{2i_0}{\pi}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M12",
      mistake: t`Multiplies by $\sqrt{2}$ instead of dividing.`,
      remediation: t`The rms value is less than the peak: $i_{rms} = \dfrac{i_0}{\sqrt{2}}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M13",
      mistake: t`Thinks $X_L$ falls as the frequency rises.`,
      remediation: t`Faster changes induce a larger back emf: $X_L = 2\pi fL$ rises with $f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: t`Thinks $X_L$ does not depend on the frequency.`,
      remediation: t`$X_L = 2\pi fL$: it is proportional to $f$, unlike a resistance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: t`Takes $X_L$ as proportional to $f^2$.`,
      remediation: t`$X_L = 2\pi fL$ is proportional to $f$ itself, so doubling $f$ halves the current.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Solved Ex.13.3" },
      stem: t`An inductor of $200\ \mathrm{mH}$ is connected to an AC source of peak emf $210\ \mathrm{V}$ and frequency $50\ \mathrm{Hz}$. What is the peak current?`,
      verify: { kind: "value", inputs: { e0: "210", f: "50", L_mH: "200" }, params: { ask: "i0" } },
      options: [
        { key: "A", text: t`$0.00334\ \mathrm{A}$`, correct: false, misconceptionId: "C04-M2", value: "0.00334000000000000" },
        { key: "B", text: t`$13200\ \mathrm{A}$`, correct: false, misconceptionId: "C04-M3", value: "13200" },
        { key: "C", text: t`$3.34\ \mathrm{A}$`, correct: true, value: "3.34000000000000" },
        { key: "D", text: t`$21\ \mathrm{A}$`, correct: false, misconceptionId: "C04-M1", value: "21" },
      ],
      solution: {
        steps: [
          t`$X_L = 2\pi fL$ $= 2\pi \times 50 \times 0.2$ $\approx 62.8\ \Omega$.`,
          t`$i_0 = \dfrac{e_0}{X_L}$ $= \dfrac{210}{62.8}$ $\approx 3.34\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Solved Ex.13.3" },
      stem: t`A pure inductor is connected to an AC source of peak emf $210\ \mathrm{V}$. What is the source voltage at the instant the current is at its peak?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "v_at" } },
      options: [
        { key: "A", text: t`$210\ \mathrm{V}$`, correct: false, misconceptionId: "C04-M4", value: "peak_v" },
        { key: "B", text: t`$148\ \mathrm{V}$`, correct: false, misconceptionId: "C04-M5", value: "rms_v" },
        { key: "C", text: t`$-210\ \mathrm{V}$`, correct: false, misconceptionId: "C04-M6", value: "neg_peak" },
        { key: "D", text: t`$0\ \mathrm{V}$`, correct: true, value: "zero_v" },
      ],
      solution: {
        steps: [
          t`In a pure inductor the current lags the voltage by $\dfrac{\pi}{2}$.`,
          t`So when the current is at its peak, the voltage is passing through zero: $0\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.15" },
      stem: t`A circuit holds only an inductor of $2\ \mathrm{H}$. The current through it is a sine wave of amplitude $0.25\ \mathrm{A}$ and frequency $60\ \mathrm{Hz}$. What is the rms potential difference across the inductor?`,
      verify: { kind: "value", inputs: { i0: "0.25", f: "60", L: "2" }, params: { ask: "erms" } },
      options: [
        { key: "A", text: t`$188\ \mathrm{V}$`, correct: false, misconceptionId: "C04-M7", value: "188" },
        { key: "B", text: t`$2.34 \times 10^{-4}\ \mathrm{V}$`, correct: false, misconceptionId: "C04-M8", value: "0.000234000000000000" },
        { key: "C", text: t`$133\ \mathrm{V}$`, correct: true, value: "133" },
        { key: "D", text: t`$21.2\ \mathrm{V}$`, correct: false, misconceptionId: "C04-M1", value: "21.2000000000000" },
      ],
      solution: {
        steps: [
          t`$X_L = 2\pi \times 60 \times 2$ $\approx 754\ \Omega$; $i_{rms} = \dfrac{0.25}{\sqrt{2}}$ $\approx 0.177\ \mathrm{A}$.`,
          t`$e_{rms} = i_{rms}X_L$ $\approx 0.177 \times 754$ $\approx 133\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.16" },
      stem: t`An alternating emf $e = 220\sin 100\pi t$ is applied to a pure inductor of $\dfrac{1}{\pi}\ \mathrm{H}$. Which equation gives the current, in ampere?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$i = 2.2\sin\left(100\pi t + \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C04-M9", value: "lead" },
        { key: "B", text: t`$i = 2.2\sin 100\pi t$`, correct: false, misconceptionId: "C04-M4", value: "in_phase" },
        { key: "C", text: t`$i = 220\pi\sin\left(100\pi t - \dfrac{\pi}{2}\right)$`, correct: false, misconceptionId: "C04-M10", value: "over_L" },
        { key: "D", text: t`$i = 2.2\sin\left(100\pi t - \dfrac{\pi}{2}\right)$`, correct: true, value: "lag" },
      ],
      solution: {
        steps: [
          t`$X_L = \omega L$ $= 100\pi \times \dfrac{1}{\pi}$ $= 100\ \Omega$, so $i_0 = \dfrac{220}{100}$ $= 2.2\ \mathrm{A}$.`,
          t`The current lags by $\dfrac{\pi}{2}$: $i$ $= 2.2\sin\left(100\pi t - \dfrac{\pi}{2}\right)$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ac-circuits-12-phy/Ex Q.16" },
      stem: t`An alternating emf $e = 220\sin 100\pi t$ is applied to a pure inductor of $\dfrac{1}{\pi}\ \mathrm{H}$. What does an AC ammeter in the circuit read?`,
      verify: { kind: "value", inputs: { e0: "220", w_over_pi: "100", L_over_pi_inv: "1" }, params: { ask: "irms" } },
      options: [
        { key: "A", text: t`$3.11\ \mathrm{A}$`, correct: false, misconceptionId: "C04-M12", value: "3.11000000000000" },
        { key: "B", text: t`$1.56\ \mathrm{A}$`, correct: true, value: "1.56000000000000" },
        { key: "C", text: t`$2.2\ \mathrm{A}$`, correct: false, misconceptionId: "C04-M7", value: "2.20000000000000" },
        { key: "D", text: t`$1.4\ \mathrm{A}$`, correct: false, misconceptionId: "C04-M11", value: "1.40000000000000" },
      ],
      solution: {
        steps: [
          t`$X_L = 100\ \Omega$, so $i_0 = 2.2\ \mathrm{A}$.`,
          t`The meter reads rms: $\dfrac{2.2}{\sqrt{2}} \approx 1.56\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`A pure inductor is connected to an AC source of fixed rms voltage. The frequency is doubled. What happens to the current?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "fx2" } },
      options: [
        { key: "A", text: t`It halves`, correct: true, value: "halves" },
        { key: "B", text: t`It doubles`, correct: false, misconceptionId: "C04-M13", value: "doubles" },
        { key: "C", text: t`It stays the same`, correct: false, misconceptionId: "C04-M14", value: "same" },
        { key: "D", text: t`It falls to a quarter`, correct: false, misconceptionId: "C04-M15", value: "quarter" },
      ],
      solution: {
        steps: [
          t`$X_L = 2\pi fL$ doubles when $f$ doubles.`,
          t`$i_{rms} = \dfrac{e_{rms}}{X_L}$, so the current halves.`,
        ],
      },
    },
  ],
};
