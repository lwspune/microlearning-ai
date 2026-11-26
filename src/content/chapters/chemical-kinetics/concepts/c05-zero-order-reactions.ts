import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A candle burns down by the same length every hour, however tall it still is. Can a chemical reaction behave like that?`,
    reveal: t`Yes. A zero order reaction uses up the same amount of reactant every second, whatever is left, until it runs out.`,
  },
  explanation: {
    intuition: [
      t`Some reactions run at a steady pace, whatever the concentration.`,
      t`An example is a gas decomposing on a hot metal surface that is fully covered.`,
      t`Only the surface reacts, so adding more gas does not speed it up.`,
      t`Such a reaction is **zero order**: its rate does not depend on $[\ce{A}]$.`,
      t`So $[\ce{A}]$ falls by the same amount every second, in a straight line.`,
    ],
    formal: [
      {
        title: "Zero order rate law",
        points: [
          t`A **zero order** reaction has rate $= k[\ce{A}]^0 = k$.`,
          t`The rate stays $k$ whatever $[\ce{A}]$ is, as long as some A is left.`,
          t`Doubling $[\ce{A}]$ leaves the rate unchanged.`,
          t`$\ce{2N2O -> 2N2 + O2}$ on hot platinum is zero order, despite the coefficient $2$.`,
          t`The unit of $k$ is that of a rate, $\mathrm{mol\,L^{-1}\,s^{-1}}$.`,
        ],
        figure: {
          alt: "Rate against [A] for a zero order reaction: a horizontal line at height k. Doubling [A] leaves the rate where it was.",
          axes: "xy",
          chart: { x: 0.2, y: 0.1, xTitle: "[A] (M)", yTitle: "rate (M s⁻¹)" },
          view: { x: [0, 1.1], y: [0, 0.5] },
          elements: [
            { kind: "segment", from: [0, 0.3], to: [1, 0.3], step: 1 },
            { kind: "label", at: [1, 0.3], label: "rate = k", labelAt: "n", step: 1 },
            { kind: "point", at: [0.4, 0.3], label: "[A]", labelAt: "s", tone: "good", step: 3 },
            { kind: "point", at: [0.8, 0.3], label: "2[A]", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Integrated rate law",
        points: [
          t`$-\dfrac{d[\ce{A}]}{dt} = k$; integrate from $[\ce{A}]_0$ at $t = 0$ to $[\ce{A}]_t$ at time $t$.`,
          t`$[\ce{A}]_t = [\ce{A}]_0 - kt$, or $k = \dfrac{[\ce{A}]_0 - [\ce{A}]_t}{t}$.`,
          t`So $[\ce{A}]$ against $t$ is a straight line of slope $-k$ and intercept $[\ce{A}]_0$.`,
          t`A is used up completely at $t = \dfrac{[\ce{A}]_0}{k}$, and the reaction stops.`,
        ],
        figure: {
          alt: "[A] against t: a straight line starting at [A]₀ on the vertical axis and falling with slope −k until it reaches zero at t = [A]₀/k.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 50], y: [0, 1] },
          elements: [
            { kind: "segment", from: [0, 0.8], to: [40, 0], step: 1 },
            { kind: "label", at: [0, 0.8], label: "[A]₀", labelAt: "ne", step: 3 },
            { kind: "segment", from: [10, 0.6], to: [20, 0.6], dashed: true, tone: "good", step: 3 },
            { kind: "segment", from: [20, 0.6], to: [20, 0.4], dashed: true, tone: "good", step: 3 },
            { kind: "label", at: [20, 0.5], label: "slope −k", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [40, 0], label: "[A]₀/k", labelAt: "ne", step: 4 },
          ],
        },
      },
      {
        title: "Half life",
        points: [
          t`The **half life** $t_{1/2}$ is the time for $[\ce{A}]$ to fall to half its starting value.`,
          t`Put $[\ce{A}]_t = \dfrac{[\ce{A}]_0}{2}$: $\dfrac{[\ce{A}]_0}{2} = [\ce{A}]_0 - kt_{1/2}$.`,
          t`So $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$.`,
          t`It is proportional to $[\ce{A}]_0$: double the start, double the half life.`,
          t`The rest of A goes in one more half life, since the rate does not slow down.`,
        ],
        figure: {
          alt: "[A] against t: the line falls from [A]₀ to [A]₀/2 at t½ = [A]₀/2k, and on to zero at [A]₀/k, only one more half life later.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 50], y: [0, 1] },
          elements: [
            { kind: "segment", from: [0, 0.8], to: [40, 0], tone: "muted" },
            { kind: "label", at: [0, 0.8], label: "[A]₀", labelAt: "ne" },
            { kind: "segment", from: [0, 0.4], to: [20, 0.4], dashed: true, tone: "good", step: 2 },
            { kind: "segment", from: [20, 0.4], to: [20, 0], dashed: true, tone: "good", step: 3 },
            { kind: "point", at: [20, 0.4], label: "[A]₀/2", labelAt: "ne", tone: "good", step: 2 },
            { kind: "label", at: [20, 0], label: "t½", labelAt: "ne", tone: "good", step: 3 },
            { kind: "point", at: [40, 0], label: "[A]₀/k", labelAt: "ne", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A zero order reaction has $k = 0.0030\ \mathrm{mol\,L^{-1}\,s^{-1}}$ and $[\ce{A}]_0 = 0.36\ \mathrm{mol\,L^{-1}}$. Find $[\ce{A}]$ after $40\ \mathrm{s}$, the half life, and when A runs out.`,
      steps: [
        t`$[\ce{A}]_t = [\ce{A}]_0 - kt$ $= 0.36 - 0.0030 \times 40$ $= 0.24\ \mathrm{mol\,L^{-1}}$.`,
        t`$t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$ $= \dfrac{0.36}{2 \times 0.0030}$ $= 60\ \mathrm{s}$.`,
        t`A runs out when $[\ce{A}]_t = 0$: $t = \dfrac{0.36}{0.0030}$ $= 120\ \mathrm{s}$, twice the half life.`,
      ],
      answer: t`$0.24\ \mathrm{mol\,L^{-1}}$; $t_{1/2} = 60\ \mathrm{s}$; A runs out at $120\ \mathrm{s}$`,
      figure: {
        alt: "[A] against t from 0.36 mol L⁻¹: 0.24 at 40 s, half (0.18) at 60 s, and zero at 120 s.",
        axes: "xy",
        chart: { x: 20, y: 0.1, xTitle: "t (s)", yTitle: "[A] (mol L⁻¹)" },
        view: { x: [0, 140], y: [0, 0.42] },
        elements: [
          { kind: "segment", from: [0, 0.36], to: [120, 0], tone: "muted" },
          { kind: "label", at: [0, 0.36], label: "0.36", labelAt: "ne" },
          { kind: "point", at: [40, 0.24], label: "(40, 0.24)", labelAt: "ne", step: 1 },
          { kind: "point", at: [60, 0.18], label: "t½ = 60", labelAt: "ne", tone: "good", step: 2 },
          { kind: "point", at: [120, 0], label: "120", labelAt: "n", step: 3 },
        ],
      },
    },
    figure: {
      alt: "[A] against t for a zero order reaction: it falls by the same 0.2 M in every 10 s, so the points lie on a straight line that reaches zero at 40 s.",
      axes: "xy",
      chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
      view: { x: [0, 45], y: [0, 0.9] },
      elements: [
        { kind: "segment", from: [0, 0.8], to: [40, 0], step: 1 },
        { kind: "point", at: [10, 0.6], step: 5 },
        { kind: "point", at: [20, 0.4], step: 5 },
        { kind: "point", at: [30, 0.2], step: 5 },
        { kind: "point", at: [40, 0], step: 5 },
      ],
    },
    visualSpec: t`Drag $k$ and $[\ce{A}]_0$ and watch the straight $[\ce{A}]$ line tilt and shift, with $t_{1/2}$ and the time A runs out marked on it.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Applies the first order law to a zero order reaction: an exponential fall, and $t_{1/2} = \dfrac{0.693}{k}$.`,
      remediation: t`Zero order means a constant rate, so $[\ce{A}]_t = [\ce{A}]_0 - kt$ and $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M2",
      mistake: t`Takes the half life as the time for all of A to react, $\dfrac{[\ce{A}]_0}{k}$.`,
      remediation: t`The half life is the time for half of A to go: set $[\ce{A}]_t = \dfrac{[\ce{A}]_0}{2}$ to get $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Moves the $2$ to the wrong side when solving for the half life, $\dfrac{2[\ce{A}]_0}{k}$.`,
      remediation: t`From $kt_{1/2} = \dfrac{[\ce{A}]_0}{2}$, divide both sides by $k$: $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Thinks zero order means the reaction does not go, so $[\ce{A}]$ stays constant.`,
      remediation: t`Zero order means the rate does not depend on $[\ce{A}]$. The rate is $k$, not zero, so $[\ce{A}]$ falls steadily.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M5",
      mistake: t`Adds $kt$ instead of subtracting it, $[\ce{A}]_t = [\ce{A}]_0 + kt$.`,
      remediation: t`A reactant is used up, so its concentration falls: $[\ce{A}]_t = [\ce{A}]_0 - kt$, a line of slope $-k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Takes the order from the coefficient in the equation.",
      remediation: t`Order is found by experiment. A zero order reaction's rate does not change with $[\ce{A}]$, whatever the coefficient.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#12" },
      stem: t`The half life of a zero order reaction $\ce{A ->}$ product is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "thalf_eq" } },
      options: [
        { key: "A", text: t`$\dfrac{2[\ce{A}]_0}{k}$`, correct: false, misconceptionId: "C05-M3", value: "two_a0_over_k" },
        { key: "B", text: t`$\dfrac{[\ce{A}]_0}{2k}$`, correct: true, value: "a0_over_2k" },
        { key: "C", text: t`$\dfrac{0.693}{k}$`, correct: false, misconceptionId: "C05-M1", value: "ln2_over_k" },
        { key: "D", text: t`$\dfrac{[\ce{A}]_0}{k}$`, correct: false, misconceptionId: "C05-M2", value: "a0_over_k" },
      ],
      solution: {
        steps: [
          t`Set $[\ce{A}]_t = \dfrac{[\ce{A}]_0}{2}$ in $[\ce{A}]_t = [\ce{A}]_0 - kt$.`,
          t`$kt_{1/2} = \dfrac{[\ce{A}]_0}{2}$, so $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$.`,
        ],
        figure: {
          alt: "The straight [A] line falls from [A]₀ to [A]₀/2 at t½ = [A]₀/2k.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 50], y: [0, 1] },
          elements: [
            { kind: "segment", from: [0, 0.8], to: [40, 0], tone: "muted" },
            { kind: "label", at: [0, 0.8], label: "[A]₀", labelAt: "ne" },
            { kind: "point", at: [20, 0.4], label: "[A]₀/2", labelAt: "ne", tone: "good", step: 1 },
            { kind: "segment", from: [20, 0.4], to: [20, 0], dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [20, 0], label: "t½", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#17" },
      stem: t`A zero order reaction has $k = 0.004\ \mathrm{mol\,L^{-1}\,s^{-1}}$ and $[\ce{A}]_0 = 0.80\ \mathrm{mol\,L^{-1}}$. After $100\ \mathrm{s}$, $[\ce{A}]$ is`,
      verify: { kind: "value", inputs: { A0: "0.80", k: "0.004", t: "100" }, params: { ask: "conc" } },
      options: [
        { key: "A", text: t`$0.536\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C05-M1", value: "0.536000000000000" },
        { key: "B", text: t`$0.8\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C05-M4", value: "0.800000000000000" },
        { key: "C", text: t`$1.2\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C05-M5", value: "1.20000000000000" },
        { key: "D", text: t`$0.4\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "0.400000000000000" },
      ],
      solution: {
        steps: [
          t`Zero order: $[\ce{A}]_t = [\ce{A}]_0 - kt$.`,
          t`$[\ce{A}]_t = 0.80 - 0.004 \times 100$ $= 0.80 - 0.40$.`,
          t`$[\ce{A}]_t = 0.40\ \mathrm{mol\,L^{-1}}$.`,
        ],
        figure: {
          alt: "[A] falls in a straight line from 0.80 to 0.40 mol L⁻¹ at 100 s.",
          axes: "xy",
          chart: { x: 50, y: 0.2, xTitle: "t (s)", yTitle: "[A] (mol L⁻¹)" },
          view: { x: [0, 220], y: [0, 1] },
          elements: [
            { kind: "segment", from: [0, 0.8], to: [200, 0], tone: "muted" },
            { kind: "label", at: [0, 0.8], label: "0.80", labelAt: "ne" },
            { kind: "point", at: [100, 0.4], label: "(100, 0.40)", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.3 (v)" },
      stem: t`For a zero order reaction, the graph of $[\ce{A}]$ against time $t$ is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "plot" } },
      options: [
        { key: "A", text: t`a straight line of slope $-k$ and intercept $[\ce{A}]_0$`, correct: true, value: "line_minus_k" },
        { key: "B", text: t`a falling curve; $\ln[\ce{A}]$ against $t$ is the straight line`, correct: false, misconceptionId: "C05-M1", value: "curve_ln_line" },
        { key: "C", text: t`a horizontal line at $[\ce{A}]_0$`, correct: false, misconceptionId: "C05-M4", value: "horizontal_line" },
        { key: "D", text: t`a straight line of slope $+k$ and intercept $[\ce{A}]_0$`, correct: false, misconceptionId: "C05-M5", value: "line_plus_k" },
      ],
      solution: {
        steps: [
          t`$[\ce{A}]_t = [\ce{A}]_0 - kt$ has the form $y = c + mx$.`,
          t`So $[\ce{A}]$ against $t$ is a straight line of slope $-k$ and intercept $[\ce{A}]_0$.`,
        ],
        figure: {
          alt: "[A] against t: a straight line from [A]₀ falling with slope −k.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 50], y: [0, 1] },
          elements: [
            { kind: "segment", from: [0, 0.8], to: [40, 0] },
            { kind: "label", at: [0, 0.8], label: "[A]₀", labelAt: "ne", step: 2 },
            { kind: "label", at: [25, 0.3], label: "slope −k", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#3" },
      stem: t`A zero order reaction starts at $[\ce{A}]_0 = 0.50\ \mathrm{mol\,L^{-1}}$, with $k = 0.0125\ \mathrm{mol\,L^{-1}\,s^{-1}}$. Its half life is`,
      verify: { kind: "value", inputs: { A0: "0.50", k: "0.0125" }, params: { ask: "thalf" } },
      options: [
        { key: "A", text: t`$40\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M2", value: "40" },
        { key: "B", text: t`$80\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M3", value: "80" },
        { key: "C", text: t`$20\ \mathrm{s}$`, correct: true, value: "20" },
        { key: "D", text: t`$55.4\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M1", value: "55.4000000000000" },
      ],
      solution: {
        steps: [
          t`$t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$ $= \dfrac{0.50}{2 \times 0.0125}$.`,
          t`$t_{1/2} = \dfrac{0.50}{0.025} = 20\ \mathrm{s}$.`,
        ],
        figure: {
          alt: "[A] falls in a straight line from 0.50 mol L⁻¹, reaching 0.25 at 20 s and zero at 40 s.",
          axes: "xy",
          chart: { x: 10, y: 0.1, xTitle: "t (s)", yTitle: "[A] (mol L⁻¹)" },
          view: { x: [0, 50], y: [0, 0.6] },
          elements: [
            { kind: "segment", from: [0, 0.5], to: [40, 0], tone: "muted" },
            { kind: "label", at: [0, 0.5], label: "0.50", labelAt: "ne" },
            { kind: "point", at: [20, 0.25], label: "t½ = 20 s", labelAt: "ne", tone: "good", step: 2 },
            { kind: "segment", from: [20, 0.25], to: [20, 0], dashed: true, tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#25" },
      stem: t`The decomposition $\ce{2NH3(g) -> N2(g) + 3H2(g)}$ on hot platinum is zero order. If $[\ce{NH3}]$ is doubled, the rate`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rate_double" } },
      options: [
        { key: "A", text: t`stays the same`, correct: true, value: "rate_same" },
        { key: "B", text: t`doubles`, correct: false, misconceptionId: "C05-M1", value: "rate_doubles" },
        { key: "C", text: t`stays zero, since a zero order reaction does not go`, correct: false, misconceptionId: "C05-M4", value: "rate_stays_zero" },
        { key: "D", text: t`becomes four times as fast`, correct: false, misconceptionId: "C05-M6", value: "rate_four_times" },
      ],
      solution: {
        steps: [
          t`Zero order: rate $= k[\ce{NH3}]^0 = k$, whatever $[\ce{NH3}]$ is.`,
          t`So doubling $[\ce{NH3}]$ leaves the rate the same; the $2$ in the equation does not set the order.`,
        ],
        figure: {
          alt: "Rate against [NH₃]: a horizontal line, so the rate at 2c equals the rate at c.",
          axes: "xy",
          chart: { x: 0.2, y: 0.1, xTitle: "[NH₃] (M)", yTitle: "rate (M s⁻¹)" },
          view: { x: [0, 1.1], y: [0, 0.5] },
          elements: [
            { kind: "segment", from: [0, 0.3], to: [1, 0.3] },
            { kind: "label", at: [1, 0.3], label: "rate = k", labelAt: "n" },
            { kind: "point", at: [0.4, 0.3], label: "c", labelAt: "s", tone: "good", step: 2 },
            { kind: "point", at: [0.8, 0.3], label: "2c", labelAt: "s", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
