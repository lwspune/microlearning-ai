import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A microphone gives a signal of a few millivolts, yet a loudspeaker needs several volts to fill a hall. Where does the extra energy come from?`,
    reveal: t`From the battery. A transistor does not create energy: its small base signal controls a much larger collector current drawn from the supply, $V_{CC}$, and that current makes a large copy of the signal across a load.`,
  },
  explanation: {
    intuition: [
      t`An **amplifier** makes a large copy of a small signal.`,
      t`A small change in the base current $I_B$ makes a change $\beta$ times as large in $I_C$.`,
      t`Passing $I_C$ through a large **load resistance** $R_L$ turns it into a large voltage change.`,
      t`The extra energy comes from the collector supply $V_{CC}$, not from the transistor.`,
      t`In the **common-emitter** (CE) circuit the emitter is shared by the input and the output.`,
    ],
    formal: [
      {
        title: "Biasing for amplification",
        points: [
          t`The transistor must work in its **active region**: emitter-base forward, collector-base reverse biased.`,
          t`A DC **bias** sets a steady $I_B$ and $I_C$; the signal then rides up and down on it.`,
          t`Without bias the base junction would block the negative half of the signal and cut it off.`,
          t`In saturation or at cut-off $I_C$ no longer follows $I_B$, so the output is clipped.`,
        ],
      },
      {
        title: "The common-emitter amplifier",
        points: [
          t`The input signal goes between base and emitter; the output is taken between collector and emitter.`,
          t`The input is a forward-biased junction: a low **input resistance** $R_{in}$.`,
          t`The output side has the load $R_L$ in series with the collector, fed by $V_{CC}$.`,
          t`CE gives the largest current gain and power gain of the three connections.`,
        ],
      },
      {
        title: "Voltage and power gain",
        points: [
          t`**Current gain**: $\beta$ $= \dfrac{\Delta I_C}{\Delta I_B}$.`,
          t`**Voltage gain**: $A_V$ $= \dfrac{\Delta V_{out}}{\Delta V_{in}}$ $= \beta \dfrac{R_L}{R_{in}}$.`,
          t`**Power gain** is current gain times voltage gain: $A_P = \beta A_V$.`,
          t`Convert both resistances to the same unit before dividing.`,
        ],
      },
      {
        title: "Phase reversal",
        points: [
          t`The output voltage is $V_{CE} = V_{CC} - I_C R_L$.`,
          t`As the input rises, $I_B$ and $I_C$ rise, so the drop $I_C R_L$ grows and $V_{CE}$ falls.`,
          t`So the output falls when the input rises: it is **180° out of phase**, inverted.`,
          t`The phase reversal does not depend on the size of $R_L$; only the gain does.`,
        ],
        figure: {
          alt: "Voltage against time. Step 1: a small input signal, a sine wave. Step 3: the output, a much larger sine wave that is a trough wherever the input is a crest: 180° out of phase.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "t", yTitle: "V" },
          view: { x: [0, 8], y: [-1.62, 1.62] },
          elements: [
            { kind: "segment", from: [0, 0], to: [8, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.083, 0.052], [0.167, 0.104], [0.25, 0.153], [0.333, 0.2], [0.417, 0.244], [0.5, 0.283], [0.583, 0.317], [0.667, 0.346], [0.75, 0.37], [0.833, 0.386], [0.917, 0.397], [1, 0.4], [1.083, 0.397], [1.167, 0.386], [1.25, 0.37], [1.333, 0.346], [1.417, 0.317], [1.5, 0.283], [1.583, 0.244], [1.667, 0.2], [1.75, 0.153], [1.833, 0.104], [1.917, 0.052], [2, 0], [2.083, -0.052], [2.167, -0.104], [2.25, -0.153], [2.333, -0.2], [2.417, -0.244], [2.5, -0.283], [2.583, -0.317], [2.667, -0.346], [2.75, -0.37], [2.833, -0.386], [2.917, -0.397], [3, -0.4], [3.083, -0.397], [3.167, -0.386], [3.25, -0.37], [3.333, -0.346], [3.417, -0.317], [3.5, -0.283], [3.583, -0.244], [3.667, -0.2], [3.75, -0.153], [3.833, -0.104], [3.917, -0.052], [4, 0], [4.083, 0.052], [4.167, 0.104], [4.25, 0.153], [4.333, 0.2], [4.417, 0.244], [4.5, 0.283], [4.583, 0.317], [4.667, 0.346], [4.75, 0.37], [4.833, 0.386], [4.917, 0.397], [5, 0.4], [5.083, 0.397], [5.167, 0.386], [5.25, 0.37], [5.333, 0.346], [5.417, 0.317], [5.5, 0.283], [5.583, 0.244], [5.667, 0.2], [5.75, 0.153], [5.833, 0.104], [5.917, 0.052], [6, 0], [6.083, -0.052], [6.167, -0.104], [6.25, -0.153], [6.333, -0.2], [6.417, -0.244], [6.5, -0.283], [6.583, -0.317], [6.667, -0.346], [6.75, -0.37], [6.833, -0.386], [6.917, -0.397], [7, -0.4], [7.083, -0.397], [7.167, -0.386], [7.25, -0.37], [7.333, -0.346], [7.417, -0.317], [7.5, -0.283], [7.583, -0.244], [7.667, -0.2], [7.75, -0.153], [7.833, -0.104], [7.917, -0.052], [8, 0]], step: 1 },
            { kind: "label", at: [1, 0.4], label: "input", labelAt: "ne", step: 1 },
            { kind: "curve", points: [[0, 0], [0.083, -0.157], [0.167, -0.311], [0.25, -0.459], [0.333, -0.6], [0.417, -0.731], [0.5, -0.849], [0.583, -0.952], [0.667, -1.039], [0.75, -1.109], [0.833, -1.159], [0.917, -1.19], [1, -1.2], [1.083, -1.19], [1.167, -1.159], [1.25, -1.109], [1.333, -1.039], [1.417, -0.952], [1.5, -0.849], [1.583, -0.731], [1.667, -0.6], [1.75, -0.459], [1.833, -0.311], [1.917, -0.157], [2, 0], [2.083, 0.157], [2.167, 0.311], [2.25, 0.459], [2.333, 0.6], [2.417, 0.731], [2.5, 0.849], [2.583, 0.952], [2.667, 1.039], [2.75, 1.109], [2.833, 1.159], [2.917, 1.19], [3, 1.2], [3.083, 1.19], [3.167, 1.159], [3.25, 1.109], [3.333, 1.039], [3.417, 0.952], [3.5, 0.849], [3.583, 0.731], [3.667, 0.6], [3.75, 0.459], [3.833, 0.311], [3.917, 0.157], [4, 0], [4.083, -0.157], [4.167, -0.311], [4.25, -0.459], [4.333, -0.6], [4.417, -0.731], [4.5, -0.849], [4.583, -0.952], [4.667, -1.039], [4.75, -1.109], [4.833, -1.159], [4.917, -1.19], [5, -1.2], [5.083, -1.19], [5.167, -1.159], [5.25, -1.109], [5.333, -1.039], [5.417, -0.952], [5.5, -0.849], [5.583, -0.731], [5.667, -0.6], [5.75, -0.459], [5.833, -0.311], [5.917, -0.157], [6, 0], [6.083, 0.157], [6.167, 0.311], [6.25, 0.459], [6.333, 0.6], [6.417, 0.731], [6.5, 0.849], [6.583, 0.952], [6.667, 1.039], [6.75, 1.109], [6.833, 1.159], [6.917, 1.19], [7, 1.2], [7.083, 1.19], [7.167, 1.159], [7.25, 1.109], [7.333, 1.039], [7.417, 0.952], [7.5, 0.849], [7.583, 0.731], [7.667, 0.6], [7.75, 0.459], [7.833, 0.311], [7.917, 0.157], [8, 0]], tone: "good", step: 3 },
            { kind: "label", at: [3, 1.2], label: "output", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A CE amplifier has $\beta = 50$, $R_L = 6\ \mathrm{k\Omega}$ and $R_{in} = 1.5\ \mathrm{k\Omega}$. Find its voltage gain and power gain, and the output for an input of peak $10\ \mathrm{mV}$.`,
      steps: [
        t`$A_V = \beta \dfrac{R_L}{R_{in}}$ $= 50 \times \dfrac{6}{1.5}$ $= 200$.`,
        t`$A_P = \beta A_V$ $= 50 \times 200$ $= 10000$.`,
        t`Output peak $= A_V \times 10\ \mathrm{mV}$ $= 2000\ \mathrm{mV}$ $= 2\ \mathrm{V}$.`,
        t`It is inverted: $180^\circ$ out of phase with the input.`,
      ],
      answer: t`$A_V = 200$, $A_P = 10000$, output peak $2\ \mathrm{V}$, inverted`,
    },
    visualSpec: t`Feed a small sine wave into a CE amplifier and watch a large, upside-down copy come out, growing as you raise β or the load resistance.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Biases the amplifier in saturation, so that the most current flows.",
      remediation: t`In saturation $I_C$ no longer follows $I_B$, so the signal is lost. An amplifier works in the active region: emitter junction forward, collector junction reverse.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M2",
      mistake: "Biases the amplifier at cut-off, so that no current is wasted.",
      remediation: "At cut-off almost no current flows whatever the input, so nothing is amplified. The active region needs the emitter junction forward biased.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks no DC bias is needed: the signal alone drives the transistor.",
      remediation: "The emitter junction conducts only when forward biased; without bias the negative halves of the signal are cut off. A DC bias keeps it in the active region.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M4",
      mistake: "Thinks the output of a CE amplifier is in phase with the input.",
      remediation: t`$V_{CE} = V_{CC} - I_C R_L$: when the input raises $I_C$, the output voltage falls. The output is inverted.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Thinks the output is a quarter cycle out of phase.",
      remediation: t`There is no capacitor or coil to shift the phase by $90^\circ$. A rising input lowers $V_{CE}$ at once: $180^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks the phase shift depends on the load resistance.",
      remediation: t`$R_L$ sets how large the output is, not its phase: a larger $I_C$ always means a smaller $V_{CE}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: t`Leaves $\beta$ out of the voltage gain.`,
      remediation: t`The output current is $\beta$ times the input current, so $A_V = \beta \dfrac{R_L}{R_{in}}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M8",
      mistake: "Turns the resistance ratio upside down.",
      remediation: t`The large load resistance gives the large output voltage: $A_V = \beta \dfrac{R_L}{R_{in}}$, with $R_L$ on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: t`Puts $R_L$ in $\mathrm{k\Omega}$ over $R_{in}$ in $\Omega$.`,
      remediation: t`Use one unit for both: $2\ \mathrm{k\Omega} = 2000\ \Omega$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Adds the current gain and the voltage gain.",
      remediation: t`Power is current times voltage, so the gains multiply: $A_P = \beta A_V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Takes the power gain to be the voltage gain.",
      remediation: t`The current is amplified too, so $A_P = \beta A_V$, much larger than $A_V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: t`Squares the voltage gain, since $P = \dfrac{V^2}{R}$.`,
      remediation: t`$\dfrac{V^2}{R}$ would need the same $R$ at input and output, but $R_L \neq R_{in}$. Use $A_P = \beta A_V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Thinks the common-emitter input resistance is high.",
      remediation: "The input of a CE amplifier is the forward-biased emitter-base junction: its resistance is low.",
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.16" },
      stem: t`Which method of biasing is used to operate a transistor as an amplifier?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bias" } },
      options: [
        { key: "A", text: t`Emitter-base junction forward biased, collector-base junction reverse biased`, correct: true, value: "active_bias_8" },
        { key: "B", text: t`Both junctions forward biased, so that the most current flows`, correct: false, misconceptionId: "C08-M1", value: "saturation_8" },
        { key: "C", text: t`Both junctions reverse biased, so that no current is wasted`, correct: false, misconceptionId: "C08-M2", value: "cutoff_8" },
        { key: "D", text: t`No DC bias at all: the input signal alone drives the transistor`, correct: false, misconceptionId: "C08-M3", value: "no_bias" },
      ],
      solution: {
        steps: [
          t`An amplifier must work in the active region, where $I_C$ follows $I_B$.`,
          t`So the emitter-base junction is forward biased and the collector-base junction reverse biased.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`In a common-emitter amplifier, what is the phase difference between the output voltage and the input voltage?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "phase" } },
      options: [
        { key: "A", text: t`$0^\circ$: the output is in phase`, correct: false, misconceptionId: "C08-M4", value: "in_phase" },
        { key: "B", text: t`$90^\circ$: the output lags by a quarter cycle`, correct: false, misconceptionId: "C08-M5", value: "deg90" },
        { key: "C", text: t`It depends on the load resistance`, correct: false, misconceptionId: "C08-M6", value: "depends_load" },
        { key: "D", text: t`$180^\circ$: the output is inverted`, correct: true, value: "deg180" },
      ],
      solution: {
        steps: [
          t`$V_{CE} = V_{CC} - I_C R_L$; a rising input raises $I_C$ and so lowers $V_{CE}$.`,
          t`The output falls as the input rises: they are $180^\circ$ out of phase.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`A common-emitter amplifier has $\beta = 80$, a load resistance of $2\ \mathrm{k\Omega}$ and an input resistance of $500\ \Omega$. What is its voltage gain?`,
      verify: { kind: "value", inputs: { beta: "80", RL_k: "2", Rin: "500" }, params: { ask: "AV" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C08-M7", value: "4" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C08-M8", value: "20" },
        { key: "C", text: t`$0.32$`, correct: false, misconceptionId: "C08-M9", value: "0.320000000000000" },
        { key: "D", text: t`$320$`, correct: true, value: "320" },
      ],
      solution: {
        steps: [
          t`$R_L = 2\ \mathrm{k\Omega}$ $= 2000\ \Omega$.`,
          t`$A_V = \beta \dfrac{R_L}{R_{in}}$ $= 80 \times \dfrac{2000}{500}$ $= 320$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A common-emitter amplifier has a current gain $\beta = 60$ and a voltage gain of $120$. What is its power gain?`,
      verify: { kind: "value", inputs: { beta: "60", AV: "120" }, params: { ask: "AP" } },
      options: [
        { key: "A", text: t`$120$`, correct: false, misconceptionId: "C08-M11", value: "120" },
        { key: "B", text: t`$14400$`, correct: false, misconceptionId: "C08-M12", value: "14400" },
        { key: "C", text: t`$7200$`, correct: true, value: "7200" },
        { key: "D", text: t`$180$`, correct: false, misconceptionId: "C08-M10", value: "180" },
      ],
      solution: {
        steps: [
          t`Power gain is current gain times voltage gain.`,
          t`$A_P = \beta A_V$ $= 60 \times 120$ $= 7200$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Why is the common-emitter configuration the one most used for amplifiers?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "why_ce" } },
      options: [
        { key: "A", text: t`It needs no DC bias`, correct: false, misconceptionId: "C08-M3", value: "needs_no_bias" },
        { key: "B", text: t`It gives the largest current gain and power gain`, correct: true, value: "largest_gains" },
        { key: "C", text: t`Its output is in phase with its input`, correct: false, misconceptionId: "C08-M4", value: "in_phase_ce" },
        { key: "D", text: t`Its input resistance is very high`, correct: false, misconceptionId: "C08-M13", value: "high_input_R" },
      ],
      solution: {
        steps: [
          t`Its input is a forward-biased junction (low resistance) and its output a reverse-biased one (high resistance).`,
          t`With a current gain $\beta$ as well, CE gives the largest current gain and power gain.`,
        ],
      },
    },
  ],
};
