import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A medicine leaves the blood so that the same fraction of what is left goes every hour. Will the last trace ever be gone?`,
    reveal: t`Not in theory: each hour removes a fraction, never all of what is left. This is first order behaviour, and the logarithm of the amount falls in a straight line.`,
  },
  explanation: {
    intuition: [
      t`In a **first order** reaction, the rate is proportional to $[\ce{A}]$ itself.`,
      t`As A is used up, the reaction slows down in step with it.`,
      t`So the same fraction of A reacts in each equal interval of time.`,
      t`$[\ce{A}]$ therefore falls along a curve that flattens out and never quite reaches zero.`,
      t`Its logarithm, $\ln[\ce{A}]$, falls in a straight line instead.`,
    ],
    formal: [
      {
        title: "Integrating the rate law",
        points: [
          t`For a first order reaction $\ce{A ->}$ products, rate $= -\dfrac{d[\ce{A}]}{dt} = k[\ce{A}]$.`,
          t`Let $[\ce{A}]_0$ be the concentration at $t = 0$ and $[\ce{A}]_t$ that at time $t$.`,
          t`Integrating gives $\ln\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = kt$, so $[\ce{A}]_t = [\ce{A}]_0e^{-kt}$.`,
          t`$[\ce{A}]$ falls fast at first, then more and more slowly, and never quite reaches zero.`,
        ],
        figure: {
          alt: "[A] against t: it starts at [A]₀ and falls along a curve, steeply at first and then more and more slowly, approaching zero but never reaching it.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 65], y: [0, 0.9] },
          elements: [
            { kind: "curve", points: [[0, 0.8], [1.083, 0.758], [2.167, 0.718], [3.25, 0.68], [4.333, 0.644], [5.417, 0.61], [6.5, 0.578], [7.583, 0.548], [8.667, 0.519], [9.75, 0.491], [10.833, 0.465], [11.917, 0.441], [13, 0.418], [14.083, 0.396], [15.167, 0.375], [16.25, 0.355], [17.333, 0.336], [18.417, 0.319], [19.5, 0.302], [20.583, 0.286], [21.667, 0.271], [22.75, 0.256], [23.833, 0.243], [24.917, 0.23], [26, 0.218], [27.083, 0.207], [28.167, 0.196], [29.25, 0.185], [30.333, 0.176], [31.417, 0.166], [32.5, 0.158], [33.583, 0.149], [34.667, 0.141], [35.75, 0.134], [36.833, 0.127], [37.917, 0.12], [39, 0.114], [40.083, 0.108], [41.167, 0.102], [42.25, 0.097], [43.333, 0.092], [44.417, 0.087], [45.5, 0.082], [46.583, 0.078], [47.667, 0.074], [48.75, 0.07], [49.833, 0.066], [50.917, 0.063], [52, 0.059], [53.083, 0.056], [54.167, 0.053], [55.25, 0.051], [56.333, 0.048], [57.417, 0.045], [58.5, 0.043], [59.583, 0.041], [60.667, 0.039], [61.75, 0.036], [62.833, 0.035], [63.917, 0.033], [65, 0.031]], step: 1 },
            { kind: "label", at: [0, 0.8], label: "[A]₀", labelAt: "ne", step: 2 },
            { kind: "label", at: [40, 0.12], label: "[A] = [A]₀e⁻ᵏᵗ", labelAt: "ne", step: 3 },
          ],
        },
      },
      {
        title: "The log form",
        points: [
          t`Since $\ln x = 2.303\log_{10}x$, the law becomes`,
          t`$k = \dfrac{2.303}{t}\log_{10}\dfrac{[\ce{A}]_0}{[\ce{A}]_t}$.`,
          t`Only the ratio of concentrations matters, so any unit, or percentages, will do.`,
          t`If $x\%$ has reacted, $(100 - x)\%$ is left, so $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{100}{100 - x}$.`,
          t`The unit of $k$ is time$^{-1}$, such as $\mathrm{s^{-1}}$ or $\mathrm{min^{-1}}$.`,
        ],
        figure: {
          alt: "Percentage of A left against t: from 100% it falls along a curve; at t = 20 s, 75% is left, so 25% has reacted.",
          axes: "xy",
          chart: { x: 10, y: 20, xTitle: "t (s)", yTitle: "A left (%)" },
          view: { x: [0, 65], y: [0, 110] },
          elements: [
            { kind: "curve", points: [[0, 100], [1.083, 98.454], [2.167, 96.931], [3.25, 95.432], [4.333, 93.956], [5.417, 92.503], [6.5, 91.073], [7.583, 89.664], [8.667, 88.278], [9.75, 86.912], [10.833, 85.568], [11.917, 84.245], [13, 82.942], [14.083, 81.659], [15.167, 80.397], [16.25, 79.153], [17.333, 77.929], [18.417, 76.724], [19.5, 75.538], [20.583, 74.369], [21.667, 73.219], [22.75, 72.087], [23.833, 70.972], [24.917, 69.875], [26, 68.794], [27.083, 67.73], [28.167, 66.683], [29.25, 65.651], [30.333, 64.636], [31.417, 63.637], [32.5, 62.652], [33.583, 61.684], [34.667, 60.73], [35.75, 59.79], [36.833, 58.866], [37.917, 57.955], [39, 57.059], [40.083, 56.177], [41.167, 55.308], [42.25, 54.453], [43.333, 53.611], [44.417, 52.782], [45.5, 51.965], [46.583, 51.162], [47.667, 50.37], [48.75, 49.591], [49.833, 48.825], [50.917, 48.069], [52, 47.326], [53.083, 46.594], [54.167, 45.874], [55.25, 45.164], [56.333, 44.466], [57.417, 43.778], [58.5, 43.101], [59.583, 42.435], [60.667, 41.778], [61.75, 41.132], [62.833, 40.496], [63.917, 39.87], [65, 39.253]], step: 1 },
            { kind: "point", at: [20, 75], label: "75% left", labelAt: "sw", step: 4 },
            { kind: "segment", from: [20, 75], to: [20, 100], tone: "bad", label: "25% reacted", labelAt: "e", step: 4 },
            { kind: "segment", from: [0, 100], to: [20, 100], dashed: true, tone: "muted", step: 4 },
          ],
        },
      },
      {
        title: "Straight-line plots",
        points: [
          t`Taking logs: $\ln[\ce{A}]_t = \ln[\ce{A}]_0 - kt$, a straight-line equation.`,
          t`So $\ln[\ce{A}]$ against $t$ is a straight line of slope $-k$ and intercept $\ln[\ce{A}]_0$.`,
          t`In base 10, $\log_{10}[\ce{A}]$ against $t$ is a line of slope $-\dfrac{k}{2.303}$.`,
          t`A straight $\ln[\ce{A}]$ plot is the test that a reaction is first order.`,
        ],
        figure: {
          alt: "ln[A] against t is a straight line falling from ln[A]₀ on the vertical axis. A slope triangle shows it falls by kΔt for every Δt: its slope is −k.",
          axes: "xy",
          chart: { x: 10, y: 1, xTitle: "t (s)", yTitle: "ln[A]" },
          view: { x: [0, 45], y: [0, 4.5] },
          elements: [
            { kind: "segment", from: [0, 3.912], to: [40, 1.912], step: 1 },
            { kind: "label", at: [0, 3.912], label: "ln[A]₀", labelAt: "ne", step: 2 },
            { kind: "segment", from: [10, 3.412], to: [30, 3.412], dashed: true, tone: "good", step: 2 },
            { kind: "segment", from: [30, 3.412], to: [30, 2.412], dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [20, 3.412], label: "Δt", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [30, 2.912], label: "−kΔt", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [40, 1.912], label: "slope −k", labelAt: "s", step: 2 },
          ],
        },
      },
      {
        title: "Gas phase reactions",
        points: [
          t`For $\ce{A(g) -> B(g) + C(g)}$ at constant volume, each gas's pressure measures its amount; A starts at $P_i$.`,
          t`If A's pressure falls by $x$, then $P_{\ce{A}} = P_i - x$, and B and C each have pressure $x$.`,
          t`The total pressure is $P = P_i + x$, so $x = P - P_i$ and $P_{\ce{A}} = 2P_i - P$.`,
          t`So $k = \dfrac{2.303}{t}\log_{10}\dfrac{P_i}{2P_i - P}$.`,
        ],
        figure: {
          alt: "Pressures against t for A(g) → B(g) + C(g) starting from Pᵢ. The pressure of A falls from Pᵢ towards zero, while the total pressure rises from Pᵢ towards 2Pᵢ.",
          axes: "xy",
          chart: { x: 10, y: 0.5, xTitle: "t (s)", yTitle: "P (bar)" },
          view: { x: [0, 65], y: [0, 2.2] },
          elements: [
            { kind: "label", at: [0, 1], label: "Pᵢ", labelAt: "e", step: 1 },
            { kind: "curve", points: [[0, 1], [1.083, 0.958], [2.167, 0.917], [3.25, 0.878], [4.333, 0.841], [5.417, 0.805], [6.5, 0.771], [7.583, 0.738], [8.667, 0.707], [9.75, 0.677], [10.833, 0.648], [11.917, 0.621], [13, 0.595], [14.083, 0.569], [15.167, 0.545], [16.25, 0.522], [17.333, 0.5], [18.417, 0.479], [19.5, 0.458], [20.583, 0.439], [21.667, 0.42], [22.75, 0.403], [23.833, 0.385], [24.917, 0.369], [26, 0.353], [27.083, 0.338], [28.167, 0.324], [29.25, 0.31], [30.333, 0.297], [31.417, 0.285], [32.5, 0.273], [33.583, 0.261], [34.667, 0.25], [35.75, 0.239], [36.833, 0.229], [37.917, 0.219], [39, 0.21], [40.083, 0.201], [41.167, 0.193], [42.25, 0.185], [43.333, 0.177], [44.417, 0.169], [45.5, 0.162], [46.583, 0.155], [47.667, 0.149], [48.75, 0.142], [49.833, 0.136], [50.917, 0.13], [52, 0.125], [53.083, 0.12], [54.167, 0.115], [55.25, 0.11], [56.333, 0.105], [57.417, 0.101], [58.5, 0.096], [59.583, 0.092], [60.667, 0.088], [61.75, 0.085], [62.833, 0.081], [63.917, 0.078], [65, 0.074]], step: 2 },
            { kind: "label", at: [50, 0.1353], label: "A", labelAt: "n", step: 2 },
            { kind: "curve", points: [[0, 1], [1.083, 1.042], [2.167, 1.083], [3.25, 1.122], [4.333, 1.159], [5.417, 1.195], [6.5, 1.229], [7.583, 1.262], [8.667, 1.293], [9.75, 1.323], [10.833, 1.352], [11.917, 1.379], [13, 1.405], [14.083, 1.431], [15.167, 1.455], [16.25, 1.478], [17.333, 1.5], [18.417, 1.521], [19.5, 1.542], [20.583, 1.561], [21.667, 1.58], [22.75, 1.597], [23.833, 1.615], [24.917, 1.631], [26, 1.647], [27.083, 1.662], [28.167, 1.676], [29.25, 1.69], [30.333, 1.703], [31.417, 1.715], [32.5, 1.727], [33.583, 1.739], [34.667, 1.75], [35.75, 1.761], [36.833, 1.771], [37.917, 1.781], [39, 1.79], [40.083, 1.799], [41.167, 1.807], [42.25, 1.815], [43.333, 1.823], [44.417, 1.831], [45.5, 1.838], [46.583, 1.845], [47.667, 1.851], [48.75, 1.858], [49.833, 1.864], [50.917, 1.87], [52, 1.875], [53.083, 1.88], [54.167, 1.885], [55.25, 1.89], [56.333, 1.895], [57.417, 1.899], [58.5, 1.904], [59.583, 1.908], [60.667, 1.912], [61.75, 1.915], [62.833, 1.919], [63.917, 1.922], [65, 1.926]], step: 3, tone: "good" },
            { kind: "label", at: [50, 1.8647], label: "total P", labelAt: "s", tone: "good", step: 3 },
            { kind: "segment", from: [0, 2], to: [65, 2], dashed: true, tone: "muted", step: 3 },
            { kind: "label", at: [0, 2], label: "2Pᵢ", labelAt: "ne", tone: "muted", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`In a first order reaction, $[\ce{A}]$ falls from $0.60\ \mathrm{M}$ to $0.45\ \mathrm{M}$ in $15\ \mathrm{min}$. Find $k$, and $[\ce{A}]$ after $30\ \mathrm{min}$.`,
      steps: [
        t`$k = \dfrac{2.303}{t}\log_{10}\dfrac{[\ce{A}]_0}{[\ce{A}]_t}$ $= \dfrac{2.303}{15}\log_{10}\dfrac{0.60}{0.45}$.`,
        t`$\log_{10}1.333 = 0.1249$, so $k = 0.0192\ \mathrm{min^{-1}}$.`,
        t`In each $15\ \mathrm{min}$, $[\ce{A}]$ keeps $\dfrac{0.45}{0.60} = 0.75$ of its value.`,
        t`$30\ \mathrm{min}$ is two such intervals: $[\ce{A}] = 0.60 \times 0.75^2$ $= 0.338\ \mathrm{M}$.`,
      ],
      answer: t`$k = 0.0192\ \mathrm{min^{-1}}$; $[\ce{A}] = 0.338\ \mathrm{M}$ after $30\ \mathrm{min}$`,
      figure: {
        alt: "[A] falls from 0.60 M to 0.45 M in the first 15 min, and to 0.338 M at 30 min: three quarters of its value kept in each 15 min.",
        axes: "xy",
        chart: { x: 10, y: 0.1, xTitle: "t (min)", yTitle: "[A] (M)" },
        view: { x: [0, 40], y: [0, 0.7] },
        elements: [
          { kind: "curve", points: [[0, 0.6], [0.667, 0.592], [1.333, 0.585], [2, 0.577], [2.667, 0.57], [3.333, 0.563], [4, 0.556], [4.667, 0.549], [5.333, 0.542], [6, 0.535], [6.667, 0.528], [7.333, 0.521], [8, 0.515], [8.667, 0.508], [9.333, 0.502], [10, 0.495], [10.667, 0.489], [11.333, 0.483], [12, 0.477], [12.667, 0.471], [13.333, 0.465], [14, 0.459], [14.667, 0.453], [15.333, 0.447], [16, 0.441], [16.667, 0.436], [17.333, 0.43], [18, 0.425], [18.667, 0.419], [19.333, 0.414], [20, 0.409], [20.667, 0.404], [21.333, 0.399], [22, 0.393], [22.667, 0.388], [23.333, 0.384], [24, 0.379], [24.667, 0.374], [25.333, 0.369], [26, 0.364], [26.667, 0.36], [27.333, 0.355], [28, 0.351], [28.667, 0.346], [29.333, 0.342], [30, 0.337], [30.667, 0.333], [31.333, 0.329], [32, 0.325], [32.667, 0.321], [33.333, 0.317], [34, 0.313], [34.667, 0.309], [35.333, 0.305], [36, 0.301], [36.667, 0.297], [37.333, 0.293], [38, 0.289], [38.667, 0.286], [39.333, 0.282], [40, 0.279]], tone: "muted" },
          { kind: "label", at: [0, 0.6], label: "0.60", labelAt: "ne", step: 1 },
          { kind: "point", at: [15, 0.45], label: "0.45", labelAt: "ne", step: 1 },
          { kind: "point", at: [30, 0.3375], label: "0.338", labelAt: "ne", step: 4 },
        ],
      },
    },
    figure: {
      alt: "[A] against t for a first order reaction. Starting at 0.8 M, [A] keeps the same fraction of its value in each 10 s, so it falls along a curve that flattens out and never reaches zero.",
      axes: "xy",
      chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
      view: { x: [0, 45], y: [0, 0.9] },
      elements: [
        { kind: "curve", points: [[0, 0.8], [0.75, 0.77], [1.5, 0.741], [2.25, 0.713], [3, 0.686], [3.75, 0.661], [4.5, 0.636], [5.25, 0.612], [6, 0.589], [6.75, 0.567], [7.5, 0.545], [8.25, 0.525], [9, 0.505], [9.75, 0.486], [10.5, 0.468], [11.25, 0.45], [12, 0.433], [12.75, 0.417], [13.5, 0.401], [14.25, 0.386], [15, 0.372], [15.75, 0.358], [16.5, 0.344], [17.25, 0.331], [18, 0.319], [18.75, 0.307], [19.5, 0.295], [20.25, 0.284], [21, 0.274], [21.75, 0.263], [22.5, 0.253], [23.25, 0.244], [24, 0.235], [24.75, 0.226], [25.5, 0.217], [26.25, 0.209], [27, 0.201], [27.75, 0.194], [28.5, 0.187], [29.25, 0.18], [30, 0.173], [30.75, 0.166], [31.5, 0.16], [32.25, 0.154], [33, 0.148], [33.75, 0.143], [34.5, 0.137], [35.25, 0.132], [36, 0.127], [36.75, 0.122], [37.5, 0.118], [38.25, 0.113], [39, 0.109], [39.75, 0.105], [40.5, 0.101], [41.25, 0.097], [42, 0.094], [42.75, 0.09], [43.5, 0.087], [44.25, 0.083], [45, 0.08]], step: 1 },
        { kind: "point", at: [10, 0.48], step: 3 },
        { kind: "point", at: [20, 0.288], step: 3 },
        { kind: "point", at: [30, 0.1728], step: 3 },
      ],
    },
    visualSpec: t`Drag $k$ and watch the $[\ce{A}]$ curve decay faster or slower beside its $\ln[\ce{A}]$ plot, which stays a straight line whose slope tracks $-k$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Treats $\log_{10}$ as if it were $\ln$, dropping the $2.303$ or putting it where it does not belong.`,
      remediation: t`$\ln x = 2.303\log_{10}x$. With $\log_{10}$, $k = \dfrac{2.303}{t}\log_{10}\dfrac{[\ce{A}]_0}{[\ce{A}]_t}$; the $\ln[\ce{A}]$ plot has slope $-k$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C04-M2",
      mistake: t`Writes the ratio upside down, $\dfrac{[\ce{A}]_t}{[\ce{A}]_0}$, or gives the falling line a positive slope.`,
      remediation: t`$[\ce{A}]_0$ goes on top, so the log is positive and so is $k$. $\ln[\ce{A}]$ falls with time, so its slope is $-k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Takes the percentage reacted as the percentage remaining, or the reverse.",
      remediation: t`If $x\%$ has reacted, $(100 - x)\%$ is left, and $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{100}{100 - x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Takes the rise in total pressure, $P - P_i$, as the pressure of A.`,
      remediation: t`$P - P_i$ is the pressure of each product. A has $P_i - (P - P_i) = 2P_i - P$ left.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Thinks $[\ce{A}]$ falls in a straight line, $[\ce{A}]_t = [\ce{A}]_0 - kt$.`,
      remediation: t`In a first order reaction the rate falls as A is used up, so $[\ce{A}]_t = [\ce{A}]_0e^{-kt}$. Only $\ln[\ce{A}]$ falls in a straight line.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#9" },
      stem: t`In a first order reaction $\ce{X -> Y}$, $40\%$ of the sample remains unreacted after $45$ minutes. The rate constant is`,
      verify: { kind: "value", inputs: { pct: "40", t: "45" }, params: { ask: "k_pct", given: "remaining" } },
      options: [
        { key: "A", text: t`$0.0114\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C04-M3", value: "0.0114000000000000" },
        { key: "B", text: t`$0.0133\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C04-M5", value: "0.0133000000000000" },
        { key: "C", text: t`$0.0204\ \mathrm{min^{-1}}$`, correct: true, value: "0.0204000000000000" },
        { key: "D", text: t`$0.00884\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C04-M1", value: "0.00884000000000000" },
      ],
      solution: {
        steps: [
          t`$40\%$ is left, so $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{100}{40} = 2.5$.`,
          t`$k = \dfrac{2.303}{45}\log_{10}2.5$ $= \dfrac{2.303 \times 0.3979}{45}$.`,
          t`$k = 0.0204\ \mathrm{min^{-1}}$.`,
        ],
        figure: {
          alt: "Percentage of the sample left against t: it falls from 100% to 40% at 45 min.",
          axes: "xy",
          chart: { x: 10, y: 20, xTitle: "t (min)", yTitle: "A left (%)" },
          view: { x: [0, 65], y: [0, 110] },
          elements: [
            { kind: "curve", points: [[0, 100], [1.083, 97.818], [2.167, 95.683], [3.25, 93.595], [4.333, 91.553], [5.417, 89.555], [6.5, 87.601], [7.583, 85.69], [8.667, 83.82], [9.75, 81.991], [10.833, 80.201], [11.917, 78.451], [13, 76.739], [14.083, 75.065], [15.167, 73.427], [16.25, 71.825], [17.333, 70.257], [18.417, 68.724], [19.5, 67.225], [20.583, 65.758], [21.667, 64.323], [22.75, 62.919], [23.833, 61.546], [24.917, 60.203], [26, 58.889], [27.083, 57.604], [28.167, 56.347], [29.25, 55.118], [30.333, 53.915], [31.417, 52.739], [32.5, 51.588], [33.583, 50.462], [34.667, 49.361], [35.75, 48.284], [36.833, 47.23], [37.917, 46.2], [39, 45.191], [40.083, 44.205], [41.167, 43.241], [42.25, 42.297], [43.333, 41.374], [44.417, 40.471], [45.5, 39.588], [46.583, 38.724], [47.667, 37.879], [48.75, 37.053], [49.833, 36.244], [50.917, 35.453], [52, 34.68], [53.083, 33.923], [54.167, 33.183], [55.25, 32.459], [56.333, 31.75], [57.417, 31.058], [58.5, 30.38], [59.583, 29.717], [60.667, 29.068], [61.75, 28.434], [62.833, 27.814], [63.917, 27.207], [65, 26.613]], tone: "muted" },
            { kind: "point", at: [45, 40], label: "40% left", labelAt: "ne", step: 1 },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.1 (v)" },
      stem: t`For a first order reaction, which plot against time $t$ is a straight line, and what is its slope?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "plot" } },
      options: [
        { key: "A", text: t`$\ln[\ce{A}]$, with slope $-\dfrac{k}{2.303}$`, correct: false, misconceptionId: "C04-M1", value: "ln_minus_k_over_2303" },
        { key: "B", text: t`$\ln[\ce{A}]$, with slope $+k$`, correct: false, misconceptionId: "C04-M2", value: "ln_plus_k" },
        { key: "C", text: t`$[\ce{A}]$ itself, with slope $-k$`, correct: false, misconceptionId: "C04-M5", value: "conc_minus_k" },
        { key: "D", text: t`$\ln[\ce{A}]$, with slope $-k$`, correct: true, value: "ln_minus_k" },
      ],
      solution: {
        steps: [
          t`$\ln[\ce{A}]_t = \ln[\ce{A}]_0 - kt$ has the form $y = c + mx$.`,
          t`So $\ln[\ce{A}]$ against $t$ is the straight line, and its slope is $-k$.`,
        ],
        figure: {
          alt: "ln[A] against t: a straight line falling from ln[A]₀, of slope −k.",
          axes: "xy",
          chart: { x: 10, y: 1, xTitle: "t (s)", yTitle: "ln[A]" },
          view: { x: [0, 45], y: [0, 4.5] },
          elements: [
            { kind: "segment", from: [0, 3.912], to: [40, 1.912] },
            { kind: "label", at: [40, 1.912], label: "slope −k", labelAt: "s", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.10" },
      stem: t`$\ce{SO2Cl2(g) -> SO2(g) + Cl2(g)}$ is first order. At constant volume the total pressure is $0.5\ \mathrm{bar}$ at the start and $0.6\ \mathrm{bar}$ after $100\ \mathrm{s}$. The rate constant is`,
      verify: { kind: "value", inputs: { Pi: "0.5", P: "0.6", t: "100" }, params: { ask: "k_gas" } },
      options: [
        { key: "A", text: t`$-0.00223\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C04-M2", value: "-0.00223000000000000" },
        { key: "B", text: t`$0.0161\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C04-M4", value: "0.0161000000000000" },
        { key: "C", text: t`$0.00223\ \mathrm{s^{-1}}$`, correct: true, value: "0.00223000000000000" },
        { key: "D", text: t`$9.69 \times 10^{-4}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C04-M1", value: "0.000969000000000000" },
      ],
      solution: {
        steps: [
          t`$P_{\ce{A}} = 2P_i - P$ $= 1.0 - 0.6 = 0.4\ \mathrm{bar}$.`,
          t`$k = \dfrac{2.303}{100}\log_{10}\dfrac{0.5}{0.4}$ $= \dfrac{2.303 \times 0.0969}{100}$.`,
          t`$k = 2.23 \times 10^{-3}\ \mathrm{s^{-1}}$.`,
        ],
        figure: {
          alt: "Pressures against t from 0.5 bar: at 100 s the total pressure is 0.6 bar and the pressure of SO₂Cl₂ is 0.4 bar.",
          axes: "xy",
          chart: { x: 20, y: 0.2, xTitle: "t (s)", yTitle: "P (bar)" },
          view: { x: [0, 130], y: [0, 0.8] },
          elements: [
            { kind: "curve", points: [[0, 0.5], [2.167, 0.498], [4.333, 0.495], [6.5, 0.493], [8.667, 0.49], [10.833, 0.488], [13, 0.486], [15.167, 0.483], [17.333, 0.481], [19.5, 0.479], [21.667, 0.476], [23.833, 0.474], [26, 0.472], [28.167, 0.47], [30.333, 0.467], [32.5, 0.465], [34.667, 0.463], [36.833, 0.461], [39, 0.458], [41.167, 0.456], [43.333, 0.454], [45.5, 0.452], [47.667, 0.45], [49.833, 0.447], [52, 0.445], [54.167, 0.443], [56.333, 0.441], [58.5, 0.439], [60.667, 0.437], [62.833, 0.435], [65, 0.432], [67.167, 0.43], [69.333, 0.428], [71.5, 0.426], [73.667, 0.424], [75.833, 0.422], [78, 0.42], [80.167, 0.418], [82.333, 0.416], [84.5, 0.414], [86.667, 0.412], [88.833, 0.41], [91, 0.408], [93.167, 0.406], [95.333, 0.404], [97.5, 0.402], [99.667, 0.4], [101.833, 0.398], [104, 0.396], [106.167, 0.395], [108.333, 0.393], [110.5, 0.391], [112.667, 0.389], [114.833, 0.387], [117, 0.385], [119.167, 0.383], [121.333, 0.381], [123.5, 0.38], [125.667, 0.378], [127.833, 0.376], [130, 0.374]], tone: "muted" },
            { kind: "curve", points: [[0, 0.5], [2.167, 0.502], [4.333, 0.505], [6.5, 0.507], [8.667, 0.51], [10.833, 0.512], [13, 0.514], [15.167, 0.517], [17.333, 0.519], [19.5, 0.521], [21.667, 0.524], [23.833, 0.526], [26, 0.528], [28.167, 0.53], [30.333, 0.533], [32.5, 0.535], [34.667, 0.537], [36.833, 0.539], [39, 0.542], [41.167, 0.544], [43.333, 0.546], [45.5, 0.548], [47.667, 0.55], [49.833, 0.553], [52, 0.555], [54.167, 0.557], [56.333, 0.559], [58.5, 0.561], [60.667, 0.563], [62.833, 0.565], [65, 0.568], [67.167, 0.57], [69.333, 0.572], [71.5, 0.574], [73.667, 0.576], [75.833, 0.578], [78, 0.58], [80.167, 0.582], [82.333, 0.584], [84.5, 0.586], [86.667, 0.588], [88.833, 0.59], [91, 0.592], [93.167, 0.594], [95.333, 0.596], [97.5, 0.598], [99.667, 0.6], [101.833, 0.602], [104, 0.604], [106.167, 0.605], [108.333, 0.607], [110.5, 0.609], [112.667, 0.611], [114.833, 0.613], [117, 0.615], [119.167, 0.617], [121.333, 0.619], [123.5, 0.62], [125.667, 0.622], [127.833, 0.624], [130, 0.626]], tone: "good" },
            { kind: "point", at: [100, 0.4], label: "A: 0.4", labelAt: "sw", step: 1 },
            { kind: "point", at: [100, 0.6], label: "total: 0.6", labelAt: "se", tone: "good", step: 1 },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#16" },
      stem: t`For the first order gas reaction $\ce{A(g) -> B(g) + C(g)}$, $P_i$ is the initial pressure and $P$ the total pressure at time $t$. The integrated rate law is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gas_eq" } },
      options: [
        { key: "A", text: t`$k = \dfrac{1}{t}$ $\log_{10}\dfrac{P_i}{2P_i - P}$`, correct: false, misconceptionId: "C04-M1", value: "gas_no_2303" },
        { key: "B", text: t`$k = \dfrac{2.303}{t}$ $\log_{10}\dfrac{2P_i - P}{P_i}$`, correct: false, misconceptionId: "C04-M2", value: "gas_inverted" },
        { key: "C", text: t`$k = \dfrac{2.303}{t}$ $\log_{10}\dfrac{P_i}{P - P_i}$`, correct: false, misconceptionId: "C04-M4", value: "gas_rise" },
        { key: "D", text: t`$k = \dfrac{2.303}{t}$ $\log_{10}\dfrac{P_i}{2P_i - P}$`, correct: true, value: "gas_key" },
      ],
      solution: {
        steps: [
          t`A's pressure falls by $x$, and B and C each gain $x$: $P = P_i + x$.`,
          t`So $P_{\ce{A}} = P_i - x = 2P_i - P$.`,
          t`Then $k = \dfrac{2.303}{t}\log_{10}\dfrac{P_i}{2P_i - P}$.`,
        ],
        figure: {
          alt: "The pressure of A falls from Pᵢ while the total pressure rises from Pᵢ towards 2Pᵢ.",
          axes: "xy",
          chart: { x: 10, y: 0.5, xTitle: "t (s)", yTitle: "P (bar)" },
          view: { x: [0, 65], y: [0, 2.2] },
          elements: [
            { kind: "curve", points: [[0, 1], [1.083, 0.958], [2.167, 0.917], [3.25, 0.878], [4.333, 0.841], [5.417, 0.805], [6.5, 0.771], [7.583, 0.738], [8.667, 0.707], [9.75, 0.677], [10.833, 0.648], [11.917, 0.621], [13, 0.595], [14.083, 0.569], [15.167, 0.545], [16.25, 0.522], [17.333, 0.5], [18.417, 0.479], [19.5, 0.458], [20.583, 0.439], [21.667, 0.42], [22.75, 0.403], [23.833, 0.385], [24.917, 0.369], [26, 0.353], [27.083, 0.338], [28.167, 0.324], [29.25, 0.31], [30.333, 0.297], [31.417, 0.285], [32.5, 0.273], [33.583, 0.261], [34.667, 0.25], [35.75, 0.239], [36.833, 0.229], [37.917, 0.219], [39, 0.21], [40.083, 0.201], [41.167, 0.193], [42.25, 0.185], [43.333, 0.177], [44.417, 0.169], [45.5, 0.162], [46.583, 0.155], [47.667, 0.149], [48.75, 0.142], [49.833, 0.136], [50.917, 0.13], [52, 0.125], [53.083, 0.12], [54.167, 0.115], [55.25, 0.11], [56.333, 0.105], [57.417, 0.101], [58.5, 0.096], [59.583, 0.092], [60.667, 0.088], [61.75, 0.085], [62.833, 0.081], [63.917, 0.078], [65, 0.074]], tone: "muted" },
            { kind: "curve", points: [[0, 1], [1.083, 1.042], [2.167, 1.083], [3.25, 1.122], [4.333, 1.159], [5.417, 1.195], [6.5, 1.229], [7.583, 1.262], [8.667, 1.293], [9.75, 1.323], [10.833, 1.352], [11.917, 1.379], [13, 1.405], [14.083, 1.431], [15.167, 1.455], [16.25, 1.478], [17.333, 1.5], [18.417, 1.521], [19.5, 1.542], [20.583, 1.561], [21.667, 1.58], [22.75, 1.597], [23.833, 1.615], [24.917, 1.631], [26, 1.647], [27.083, 1.662], [28.167, 1.676], [29.25, 1.69], [30.333, 1.703], [31.417, 1.715], [32.5, 1.727], [33.583, 1.739], [34.667, 1.75], [35.75, 1.761], [36.833, 1.771], [37.917, 1.781], [39, 1.79], [40.083, 1.799], [41.167, 1.807], [42.25, 1.815], [43.333, 1.823], [44.417, 1.831], [45.5, 1.838], [46.583, 1.845], [47.667, 1.851], [48.75, 1.858], [49.833, 1.864], [50.917, 1.87], [52, 1.875], [53.083, 1.88], [54.167, 1.885], [55.25, 1.89], [56.333, 1.895], [57.417, 1.899], [58.5, 1.904], [59.583, 1.908], [60.667, 1.912], [61.75, 1.915], [62.833, 1.919], [63.917, 1.922], [65, 1.926]], tone: "good" },
            { kind: "label", at: [48.75, 0.1423], label: "A", labelAt: "n" },
            { kind: "label", at: [48.75, 1.8577], label: "total P", labelAt: "s", tone: "good" },
            { kind: "label", at: [0, 1], label: "Pᵢ", labelAt: "e" },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (vii)" },
      stem: t`A first order reaction takes $40$ minutes for $30\%$ of the reactant to decompose. The rate constant is`,
      verify: { kind: "value", inputs: { pct: "30", t: "40" }, params: { ask: "k_pct", given: "reacted" } },
      options: [
        { key: "A", text: t`$0.0075\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C04-M5", value: "0.00750000000000000" },
        { key: "B", text: t`$0.00892\ \mathrm{min^{-1}}$`, correct: true, value: "0.00892000000000000" },
        { key: "C", text: t`$0.00387\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C04-M1", value: "0.00387000000000000" },
        { key: "D", text: t`$0.0301\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C04-M3", value: "0.0301000000000000" },
      ],
      solution: {
        steps: [
          t`$30\%$ has reacted, so $70\%$ is left: $\dfrac{[\ce{A}]_0}{[\ce{A}]_t} = \dfrac{100}{70}$.`,
          t`$k = \dfrac{2.303}{40}\log_{10}1.429$ $= \dfrac{2.303 \times 0.1549}{40}$.`,
          t`$k = 0.00892\ \mathrm{min^{-1}}$.`,
        ],
        figure: {
          alt: "Percentage of reactant left against t: it falls from 100% to 70% at 40 min.",
          axes: "xy",
          chart: { x: 10, y: 20, xTitle: "t (min)", yTitle: "A left (%)" },
          view: { x: [0, 65], y: [0, 110] },
          elements: [
            { kind: "curve", points: [[0, 100], [1.083, 99.038], [2.167, 98.086], [3.25, 97.143], [4.333, 96.209], [5.417, 95.284], [6.5, 94.368], [7.583, 93.46], [8.667, 92.562], [9.75, 91.672], [10.833, 90.79], [11.917, 89.917], [13, 89.053], [14.083, 88.197], [15.167, 87.349], [16.25, 86.509], [17.333, 85.677], [18.417, 84.853], [19.5, 84.037], [20.583, 83.229], [21.667, 82.429], [22.75, 81.636], [23.833, 80.851], [24.917, 80.074], [26, 79.304], [27.083, 78.542], [28.167, 77.786], [29.25, 77.038], [30.333, 76.298], [31.417, 75.564], [32.5, 74.838], [33.583, 74.118], [34.667, 73.405], [35.75, 72.7], [36.833, 72], [37.917, 71.308], [39, 70.623], [40.083, 69.943], [41.167, 69.271], [42.25, 68.605], [43.333, 67.945], [44.417, 67.292], [45.5, 66.645], [46.583, 66.004], [47.667, 65.37], [48.75, 64.741], [49.833, 64.118], [50.917, 63.502], [52, 62.891], [53.083, 62.287], [54.167, 61.688], [55.25, 61.095], [56.333, 60.507], [57.417, 59.925], [58.5, 59.349], [59.583, 58.779], [60.667, 58.213], [61.75, 57.654], [62.833, 57.099], [63.917, 56.55], [65, 56.007]], tone: "muted" },
            { kind: "point", at: [40, 70], label: "70% left", labelAt: "ne", step: 1 },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (i)" },
      stem: t`A first order reaction has $k = 0.0241\ \mathrm{min^{-1}}$. Starting at $20\ \mathrm{mmol\,dm^{-3}}$, the concentration of the reactant after $38$ minutes is`,
      verify: { kind: "value", inputs: { A0: "20", k: "0.0241", t: "38" }, params: { ask: "conc" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{mmol\,dm^{-3}}$`, correct: true, value: "8" },
        { key: "B", text: t`$2.43\ \mathrm{mmol\,dm^{-3}}$`, correct: false, misconceptionId: "C04-M1", value: "2.43000000000000" },
        { key: "C", text: t`$50\ \mathrm{mmol\,dm^{-3}}$`, correct: false, misconceptionId: "C04-M2", value: "50" },
        { key: "D", text: t`$19.1\ \mathrm{mmol\,dm^{-3}}$`, correct: false, misconceptionId: "C04-M5", value: "19.1000000000000" },
      ],
      solution: {
        steps: [
          t`$kt = 0.0241 \times 38 = 0.916$.`,
          t`$[\ce{A}]_t = [\ce{A}]_0e^{-kt} = 20\,e^{-0.916}$ $= 20 \times 0.400$.`,
          t`$[\ce{A}]_t = 8.0\ \mathrm{mmol\,dm^{-3}}$.`,
        ],
        figure: {
          alt: "Concentration against t: it falls along a curve from 20 to 8.0 mmol dm⁻³ at 38 min.",
          axes: "xy",
          chart: { x: 10, y: 5, xTitle: "t (min)", yTitle: "[A] (mmol dm⁻³)" },
          view: { x: [0, 65], y: [0, 24] },
          elements: [
            { kind: "curve", points: [[0, 20], [1.083, 19.485], [2.167, 18.982], [3.25, 18.493], [4.333, 18.017], [5.417, 17.552], [6.5, 17.1], [7.583, 16.659], [8.667, 16.23], [9.75, 15.812], [10.833, 15.404], [11.917, 15.007], [13, 14.621], [14.083, 14.244], [15.167, 13.877], [16.25, 13.519], [17.333, 13.171], [18.417, 12.831], [19.5, 12.501], [20.583, 12.179], [21.667, 11.865], [22.75, 11.559], [23.833, 11.261], [24.917, 10.971], [26, 10.688], [27.083, 10.413], [28.167, 10.144], [29.25, 9.883], [30.333, 9.628], [31.417, 9.38], [32.5, 9.138], [33.583, 8.903], [34.667, 8.673], [35.75, 8.45], [36.833, 8.232], [37.917, 8.02], [39, 7.813], [40.083, 7.612], [41.167, 7.416], [42.25, 7.225], [43.333, 7.039], [44.417, 6.857], [45.5, 6.68], [46.583, 6.508], [47.667, 6.341], [48.75, 6.177], [49.833, 6.018], [50.917, 5.863], [52, 5.712], [53.083, 5.565], [54.167, 5.421], [55.25, 5.281], [56.333, 5.145], [57.417, 5.013], [58.5, 4.884], [59.583, 4.758], [60.667, 4.635], [61.75, 4.516], [62.833, 4.399], [63.917, 4.286], [65, 4.175]], tone: "muted" },
            { kind: "label", at: [0, 20], label: "20", labelAt: "ne" },
            { kind: "point", at: [38, 8], label: "8.0", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
  ],
};
