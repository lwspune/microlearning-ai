import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`In a transistor almost all the current from the emitter reaches the collector; only a trickle leaves by the base. Why does that tiny base current matter so much?`,
    reveal: t`Because it controls the rest. The collector current is a fixed multiple of it, $\beta$, often around $100$: a small change in $I_B$ makes a large change in $I_C$. That is how a transistor amplifies.`,
  },
  explanation: {
    intuition: [
      t`Charge carriers from the emitter cross the thin base; most reach the collector, a few leave by the base.`,
      t`So the emitter current splits: $I_E = I_B + I_C$, with $I_B$ much the smallest.`,
      t`The fraction reaching the collector is $\alpha = \dfrac{I_C}{I_E}$, just under $1$.`,
      t`Comparing the collector current with the base current gives $\beta = \dfrac{I_C}{I_B}$, often near $100$.`,
      t`The nearer $\alpha$ is to $1$, the larger $\beta$.`,
    ],
    formal: [
      {
        title: "The two current gains",
        points: [
          t`$I_E = I_B + I_C$ always.`,
          t`**Common-base** DC current gain $\alpha_{DC} = \dfrac{I_C}{I_E}$, a little less than $1$.`,
          t`**Common-emitter** DC current gain $\beta_{DC} = \dfrac{I_C}{I_B}$, typically $20$ to $200$.`,
        ],
      },
      {
        title: "Relating alpha and beta",
        points: [
          t`Divide $I_E = I_B + I_C$ by $I_C$: $\dfrac{1}{\alpha}$ $= \dfrac{1}{\beta} + 1$.`,
          t`So $\alpha = \dfrac{\beta}{1 + \beta}$ and $\beta = \dfrac{\alpha}{1 - \alpha}$.`,
          t`For $\alpha = 0.99$, $\beta = \dfrac{0.99}{0.01} = 99$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A transistor with $\beta = 50$ carries a base current of $40\ \mu\mathrm{A}$. Find its collector and emitter currents and $\alpha$.`,
      steps: [
        t`$I_C = \beta I_B$ $= 50 \times 40\ \mu\mathrm{A}$ $= 2\ \mathrm{mA}$.`,
        t`$I_E = I_B + I_C = 0.04 + 2$ $= 2.04\ \mathrm{mA}$.`,
        t`$\alpha = \dfrac{I_C}{I_E}$ $= \dfrac{2}{2.04}$ $\approx 0.980$.`,
      ],
      answer: t`$I_C = 2\ \mathrm{mA}$, $I_E = 2.04\ \mathrm{mA}$, $\alpha \approx 0.980$`,
    },
    visualSpec: t`Raise the base current a little and watch the collector current rise β times as much.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Gives the collector current instead of the base current.",
      remediation: t`$\alpha I_E$ is $I_C$; the base current is what is left: $I_B = I_E - I_C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Subtracts $\alpha$ itself from $I_E$.`,
      remediation: t`$\alpha$ is a fraction: $I_C = \alpha I_E$, then $I_B = I_E - I_C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Adds $I_C$ to $I_E$.`,
      remediation: t`The emitter current splits into the other two: $I_E = I_B + I_C$, so $I_B = I_E - I_C$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M4",
      mistake: t`Turns $\dfrac{I_C}{I_E}$ upside down.`,
      remediation: t`$\alpha = \dfrac{I_C}{I_E}$ is just under $1$, since $I_C < I_E$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Gives $\beta$ when $\alpha$ is asked for.`,
      remediation: t`Common base compares $I_C$ with $I_E$; common emitter compares $I_C$ with $I_B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Gives $\dfrac{I_B}{I_E}$.`,
      remediation: t`$\alpha$ is the share that reaches the collector: $\dfrac{I_C}{I_E}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Uses $\beta = \dfrac{\alpha}{\alpha - 1}$.`,
      remediation: t`With $\alpha < 1$ that gives a negative gain, which is impossible: $\beta = \dfrac{\alpha}{1 - \alpha}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Turns the relation upside down.",
      remediation: t`$\beta$ is large and $1 - \alpha$ small: $\beta = \dfrac{\alpha}{1 - \alpha}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Uses the form of $\alpha = \dfrac{\beta}{1 + \beta}$ for $\beta$.`,
      remediation: t`$\dfrac{\alpha}{1 + \alpha}$ would be less than $1$; $\beta = \dfrac{\alpha}{1 - \alpha}$ is large.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Gives $\alpha$ when $\beta$ is asked for.`,
      remediation: t`$\beta = \dfrac{I_C}{I_B}$ compares the collector current with the small base current.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: t`Gives $\dfrac{I_E}{I_B}$.`,
      remediation: t`$\beta$ uses the collector current: $\dfrac{I_C}{I_B}$, one less than $\dfrac{I_E}{I_B}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: t`Turns $\dfrac{I_C}{I_B}$ upside down.`,
      remediation: t`$\beta = \dfrac{I_C}{I_B}$ is large, since $I_B$ is small.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: t`Takes $\alpha$ as $\dfrac{1}{\beta}$.`,
      remediation: t`$\alpha = \dfrac{\beta}{1 + \beta}$, just under $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: t`Uses $\dfrac{\beta}{\beta - 1}$.`,
      remediation: t`That exceeds $1$; $\alpha = \dfrac{\beta}{1 + \beta}$ must be less than $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: t`Gives the base's share, $\dfrac{1}{1 + \beta}$.`,
      remediation: t`$\dfrac{1}{1 + \beta}$ $= \dfrac{I_B}{I_E}$; $\alpha$ is the collector's share, $\dfrac{\beta}{1 + \beta}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.18" },
      stem: t`The common-base DC current gain of a transistor is $0.967$. If the emitter current is $10\ \mathrm{mA}$, what is the base current?`,
      verify: { kind: "value", inputs: { alpha: "0.967", IE: "10" }, params: { ask: "IB" } },
      options: [
        { key: "A", text: t`$9.03\ \mathrm{mA}$`, correct: false, misconceptionId: "C07-M2", value: "9.03000000000000" },
        { key: "B", text: t`$19.7\ \mathrm{mA}$`, correct: false, misconceptionId: "C07-M3", value: "19.7000000000000" },
        { key: "C", text: t`$0.33\ \mathrm{mA}$`, correct: true, value: "0.330000000000000" },
        { key: "D", text: t`$9.67\ \mathrm{mA}$`, correct: false, misconceptionId: "C07-M1", value: "9.67000000000000" },
      ],
      solution: {
        steps: [
          t`$I_C = \alpha I_E = 0.967 \times 10$ $= 9.67\ \mathrm{mA}$.`,
          t`$I_B = I_E - I_C = 10 - 9.67$ $= 0.33\ \mathrm{mA}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.20" },
      stem: t`In a common-base connection, the emitter current is $6.28\ \mathrm{mA}$ and the collector current $6.20\ \mathrm{mA}$. What is the common-base DC current gain?`,
      verify: { kind: "value", inputs: { IE: "6.28", IC: "6.20" }, params: { ask: "alpha_I" } },
      options: [
        { key: "A", text: t`$1.01$`, correct: false, misconceptionId: "C07-M4", value: "1.01000000000000" },
        { key: "B", text: t`$77.5$`, correct: false, misconceptionId: "C07-M5", value: "77.5000000000000" },
        { key: "C", text: t`$0.0127$`, correct: false, misconceptionId: "C07-M6", value: "0.0127000000000000" },
        { key: "D", text: t`$0.987$`, correct: true, value: "0.987000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha = \dfrac{I_C}{I_E}$ $= \dfrac{6.20}{6.28}$.`,
          t`$\alpha \approx 0.987$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.20" },
      stem: t`How is the common-emitter current gain $\beta$ related to the common-base current gain $\alpha$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "relation" } },
      options: [
        { key: "A", text: t`$\beta = \dfrac{\alpha}{1 + \alpha}$`, correct: false, misconceptionId: "C07-M9", value: "a_over_1_plus_a" },
        { key: "B", text: t`$\beta = \dfrac{\alpha}{1 - \alpha}$`, correct: true, value: "a_over_1_minus_a" },
        { key: "C", text: t`$\beta = \dfrac{\alpha}{\alpha - 1}$`, correct: false, misconceptionId: "C07-M7", value: "a_over_a_minus_1" },
        { key: "D", text: t`$\beta = \dfrac{1 - \alpha}{\alpha}$`, correct: false, misconceptionId: "C07-M8", value: "one_minus_a_over_a" },
      ],
      solution: {
        steps: [
          t`$I_E = I_B + I_C$; divide by $I_C$: $\dfrac{1}{\alpha}$ $= \dfrac{1}{\beta} + 1$.`,
          t`So $\beta = \dfrac{\alpha}{1 - \alpha}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.19" },
      stem: t`A transistor has an emitter current of $10\ \mathrm{mA}$ and a collector current of $9.8\ \mathrm{mA}$. What is its common-emitter current gain $\beta$?`,
      verify: { kind: "value", inputs: { IE: "10", IC: "9.8" }, params: { ask: "beta_I" } },
      options: [
        { key: "A", text: t`$49$`, correct: true, value: "49" },
        { key: "B", text: t`$0.98$`, correct: false, misconceptionId: "C07-M10", value: "0.980000000000000" },
        { key: "C", text: t`$50$`, correct: false, misconceptionId: "C07-M11", value: "50" },
        { key: "D", text: t`$0.0204$`, correct: false, misconceptionId: "C07-M12", value: "0.0204000000000000" },
      ],
      solution: {
        steps: [
          t`$I_B = I_E - I_C = 10 - 9.8$ $= 0.2\ \mathrm{mA}$.`,
          t`$\beta = \dfrac{I_C}{I_B}$ $= \dfrac{9.8}{0.2}$ $= 49$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`A transistor has a common-emitter current gain $\beta = 99$. What is its common-base current gain $\alpha$?`,
      verify: { kind: "value", inputs: { beta: "99" }, params: { ask: "alpha_b" } },
      options: [
        { key: "A", text: t`$0.0101$`, correct: false, misconceptionId: "C07-M13", value: "0.0101000000000000" },
        { key: "B", text: t`$1.01$`, correct: false, misconceptionId: "C07-M14", value: "1.01000000000000" },
        { key: "C", text: t`$0.01$`, correct: false, misconceptionId: "C07-M15", value: "0.0100000000000000" },
        { key: "D", text: t`$0.99$`, correct: true, value: "0.990000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha = \dfrac{\beta}{1 + \beta}$ $= \dfrac{99}{100}$.`,
          t`$\alpha = 0.99$.`,
        ],
      },
    },
  ],
};
