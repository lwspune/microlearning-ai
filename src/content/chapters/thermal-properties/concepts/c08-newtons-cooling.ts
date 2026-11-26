import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A cup of tea drops from $90\ ^\circ\mathrm{C}$ to $80\ ^\circ\mathrm{C}$ in a couple of minutes, but takes far longer to drop from $40$ to $30\ ^\circ\mathrm{C}$. Why does it slow down?`,
    reveal: t`How fast a body loses heat depends on how much hotter it is than its surroundings. As the tea nears room temperature, that difference shrinks, and so does the rate of cooling: **Newton's law of cooling**.`,
  },
  explanation: {
    intuition: [
      t`A hot body left in a room cools until it reaches room temperature.`,
      t`It cools fastest at first, when it is much hotter than its surroundings.`,
      t`As it nears room temperature it cools more and more slowly.`,
      t`How much hotter it is than its surroundings, $T - T_0$, is its **excess temperature**.`,
      t`Newton found that the rate of cooling is proportional to this excess temperature.`,
    ],
    formal: [
      {
        title: "Rate of cooling",
        points: [
          t`The **rate of cooling** $\dfrac{dT}{dt}$ is how fast the temperature falls, for example in $^\circ\mathrm{C/min}$.`,
          t`On a graph of $T$ against $t$, the **cooling curve**, it is the slope of the tangent.`,
          t`The tangent is steep at the start and gentler later: the rate of cooling keeps falling.`,
        ],
        figure: {
          alt: "The cooling curve, temperature T against time t. Step 1: a point P on the curve near the start. Step 2: the tangent at P, its slope marked as the rate of cooling. Step 3: a later point Q with a much gentler tangent.",
          axes: "xy",
          chart: { x: 10, y: 20, xTitle: "t (min)", yTitle: "T (°C)" },
          view: { x: [0, 40], y: [20, 100] },
          elements: [
            { kind: "curve", points: [[0, 90], [0.5, 87.074], [1, 84.29], [1.5, 81.642], [2, 79.124], [2.5, 76.728], [3, 74.449], [3.5, 72.281], [4, 70.219], [4.5, 68.258], [5, 66.392], [5.5, 64.617], [6, 62.929], [6.5, 61.323], [7, 59.795], [7.5, 58.342], [8, 56.96], [8.5, 55.645], [9, 54.394], [9.5, 53.204], [10, 52.073], [10.5, 50.996], [11, 49.972], [11.5, 48.998], [12, 48.072], [12.5, 47.19], [13, 46.352], [13.5, 45.554], [14, 44.796], [14.5, 44.074], [15, 43.388], [15.5, 42.735], [16, 42.114], [16.5, 41.523], [17, 40.961], [17.5, 40.426], [18, 39.918], [18.5, 39.434], [19, 38.974], [19.5, 38.536], [20, 38.12], [20.5, 37.724], [21, 37.347], [21.5, 36.989], [22, 36.648], [22.5, 36.324], [23, 36.016], [23.5, 35.722], [24, 35.443], [24.5, 35.178], [25, 34.925], [25.5, 34.685], [26, 34.456], [26.5, 34.239], [27, 34.032], [27.5, 33.836], [28, 33.649], [28.5, 33.471], [29, 33.301], [29.5, 33.14], [30, 32.987], [30.5, 32.842], [31, 32.703], [31.5, 32.571], [32, 32.446], [32.5, 32.326], [33, 32.213], [33.5, 32.105], [34, 32.002], [34.5, 31.905], [35, 31.812], [35.5, 31.723], [36, 31.639], [36.5, 31.559], [37, 31.483], [37.5, 31.411], [38, 31.342], [38.5, 31.277], [39, 31.215], [39.5, 31.155], [40, 31.099]] },
            { kind: "segment", from: [0, 30], to: [40, 30], dashed: true, tone: "muted" },
            { kind: "label", at: [34, 29], label: "room T₀", labelAt: "s" },
            { kind: "point", at: [4, 70.219], step: 1, label: "P", labelAt: "ne" },
            { kind: "segment", from: [0.5, 84.296], to: [10, 46.088], tone: "good", step: 2 },
            { kind: "label", at: [7.5, 47], label: "slope = dT/dt", labelAt: "sw", tone: "good", step: 2 },
            { kind: "point", at: [22, 36.648], step: 3, label: "Q", labelAt: "ne" },
            { kind: "segment", from: [15, 41.302], to: [29, 31.994], tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Newton's law of cooling",
        points: [
          t`**Newton's law of cooling**: the rate of cooling of a body is directly proportional to its excess temperature over the surroundings.`,
          t`$\dfrac{dT}{dt} = C(T - T_0)$, where $T_0$ is the temperature of the surroundings.`,
          t`$C$ is a constant that depends on the body's surface and its surroundings.`,
          t`Halve the excess temperature and the rate of cooling halves.`,
          t`The law holds only when the excess temperature is small.`,
        ],
        figure: {
          alt: "Rate of cooling against excess temperature T − T₀. Step 1: a straight line through the origin. Step 3: the line marked slope = C. Step 4: two points: an excess of 40 °C gives 2 °C/min, and an excess of 20 °C gives 1 °C/min, half as much.",
          axes: "xy",
          chart: { x: 10, y: 0.5, xTitle: "T − T₀ (°C)", yTitle: "rate (°C/min)" },
          view: { x: [0, 60], y: [0, 3] },
          elements: [
            { kind: "segment", from: [0, 0], to: [60, 3], step: 1 },
            { kind: "label", at: [45, 1.4], label: "slope = C", labelAt: "e", step: 3 },
            { kind: "segment", from: [40, 0], to: [40, 2], dashed: true, tone: "muted", step: 4 },
            { kind: "point", at: [40, 2], tone: "good", step: 4, label: "2 °C/min", labelAt: "nw" },
            { kind: "segment", from: [20, 0], to: [20, 1], dashed: true, tone: "muted", step: 4 },
            { kind: "point", at: [20, 1], tone: "good", step: 4, label: "1 °C/min", labelAt: "nw" },
          ],
        },
      },
      {
        title: "Checking the law",
        points: [
          t`Hot water in a calorimeter is left to cool, and its temperature is read every minute.`,
          t`A graph of $T$ against $t$ gives the cooling curve, steep at first and flatter later.`,
          t`Tangents at several temperatures give the rate of cooling at each.`,
          t`Rate of cooling against $T - T_0$ then comes out a straight line through the origin, as the law says.`,
        ],
        figure: {
          alt: "The experiment's cooling curve, temperature T against time t. Step 2: the curve, falling towards room temperature. Step 3: tangents at three points, steep, middle and gentle, giving the rate of cooling at each.",
          axes: "xy",
          chart: { x: 10, y: 20, xTitle: "t (min)", yTitle: "T (°C)" },
          view: { x: [0, 40], y: [20, 100] },
          elements: [
            { kind: "segment", from: [0, 30], to: [40, 30], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [34, 29], label: "room T₀", labelAt: "s", step: 2 },
            { kind: "curve", points: [[0, 90], [0.5, 87.074], [1, 84.29], [1.5, 81.642], [2, 79.124], [2.5, 76.728], [3, 74.449], [3.5, 72.281], [4, 70.219], [4.5, 68.258], [5, 66.392], [5.5, 64.617], [6, 62.929], [6.5, 61.323], [7, 59.795], [7.5, 58.342], [8, 56.96], [8.5, 55.645], [9, 54.394], [9.5, 53.204], [10, 52.073], [10.5, 50.996], [11, 49.972], [11.5, 48.998], [12, 48.072], [12.5, 47.19], [13, 46.352], [13.5, 45.554], [14, 44.796], [14.5, 44.074], [15, 43.388], [15.5, 42.735], [16, 42.114], [16.5, 41.523], [17, 40.961], [17.5, 40.426], [18, 39.918], [18.5, 39.434], [19, 38.974], [19.5, 38.536], [20, 38.12], [20.5, 37.724], [21, 37.347], [21.5, 36.989], [22, 36.648], [22.5, 36.324], [23, 36.016], [23.5, 35.722], [24, 35.443], [24.5, 35.178], [25, 34.925], [25.5, 34.685], [26, 34.456], [26.5, 34.239], [27, 34.032], [27.5, 33.836], [28, 33.649], [28.5, 33.471], [29, 33.301], [29.5, 33.14], [30, 32.987], [30.5, 32.842], [31, 32.703], [31.5, 32.571], [32, 32.446], [32.5, 32.326], [33, 32.213], [33.5, 32.105], [34, 32.002], [34.5, 31.905], [35, 31.812], [35.5, 31.723], [36, 31.639], [36.5, 31.559], [37, 31.483], [37.5, 31.411], [38, 31.342], [38.5, 31.277], [39, 31.215], [39.5, 31.155], [40, 31.099]], step: 2 },
            { kind: "segment", from: [0.5, 85.561], to: [8, 52.225], tone: "good", step: 3 },
            { kind: "segment", from: [6, 58.915], to: [18, 37.229], tone: "good", step: 3 },
            { kind: "segment", from: [17, 39.253], to: [31, 31.633], tone: "good", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A metal sphere cools at $0.05\ ^\circ\mathrm{C/s}$ at $70\ ^\circ\mathrm{C}$, and at $0.025\ ^\circ\mathrm{C/s}$ at $50\ ^\circ\mathrm{C}$. Find the temperature of the surroundings, and the rate of cooling at $40\ ^\circ\mathrm{C}$.`,
      steps: [
        t`Newton's law at each temperature: $0.05 = C(70 - T_0)$ and $0.025 = C(50 - T_0)$.`,
        t`Dividing: $2 = \dfrac{70 - T_0}{50 - T_0}$, so $100 - 2T_0 = 70 - T_0$ and $T_0 = 30\ ^\circ\mathrm{C}$.`,
        t`Then $C = \dfrac{0.05}{70 - 30}$ $= 1.25 \times 10^{-3}\ \mathrm{s^{-1}}$.`,
        t`At $40\ ^\circ\mathrm{C}$: rate $= 1.25 \times 10^{-3} \times 10$ $= 0.0125\ ^\circ\mathrm{C/s}$.`,
      ],
      answer: t`$T_0 = 30\ ^\circ\mathrm{C}$; $0.0125\ ^\circ\mathrm{C/s}$`,
      figure: {
        alt: "Rate of cooling against the body's temperature T. Step 1: two measured points, 0.05 °C/s at 70 °C and 0.025 °C/s at 50 °C. Step 2: the straight line through them extended down to zero rate at 30 °C, marked T₀. Step 4: the point at 40 °C, rate 0.0125 °C/s.",
        axes: "xy",
        chart: { x: 10, y: 0.01, xTitle: "T (°C)", yTitle: "rate (°C/s)" },
        view: { x: [20, 80], y: [0, 0.06] },
        elements: [
          { kind: "point", at: [70, 0.05], step: 1, label: "0.05", labelAt: "nw" },
          { kind: "point", at: [50, 0.025], step: 1, label: "0.025", labelAt: "nw" },
          { kind: "segment", from: [30, 0], to: [74, 0.055], tone: "good", step: 2 },
          { kind: "point", at: [30, 0], tone: "good", step: 2 },
          { kind: "segment", from: [30, 0], to: [26, 0.011], dashed: true, tone: "muted", step: 2 },
          { kind: "label", at: [26, 0.011], label: "T₀ = 30 °C", labelAt: "n", tone: "good", step: 2 },
          { kind: "point", at: [40, 0.0125], step: 4, label: "0.0125", labelAt: "se" },
        ],
      },
    },
    figure: {
      alt: "A cooling curve: temperature T against time t, for a body starting at 90 °C in a room at 30 °C. Step 1: the curve falls towards a dashed line at room temperature. Step 2: a steep tangent at the start, marked fast. Step 3: a gentle tangent later, marked slow. Step 4: the gap between the curve and the room line at t = 14 min, marked T − T₀.",
      axes: "xy",
      chart: { x: 10, y: 20, xTitle: "t (min)", yTitle: "T (°C)" },
      view: { x: [0, 40], y: [20, 100] },
      elements: [
        { kind: "curve", points: [[0, 90], [0.5, 87.074], [1, 84.29], [1.5, 81.642], [2, 79.124], [2.5, 76.728], [3, 74.449], [3.5, 72.281], [4, 70.219], [4.5, 68.258], [5, 66.392], [5.5, 64.617], [6, 62.929], [6.5, 61.323], [7, 59.795], [7.5, 58.342], [8, 56.96], [8.5, 55.645], [9, 54.394], [9.5, 53.204], [10, 52.073], [10.5, 50.996], [11, 49.972], [11.5, 48.998], [12, 48.072], [12.5, 47.19], [13, 46.352], [13.5, 45.554], [14, 44.796], [14.5, 44.074], [15, 43.388], [15.5, 42.735], [16, 42.114], [16.5, 41.523], [17, 40.961], [17.5, 40.426], [18, 39.918], [18.5, 39.434], [19, 38.974], [19.5, 38.536], [20, 38.12], [20.5, 37.724], [21, 37.347], [21.5, 36.989], [22, 36.648], [22.5, 36.324], [23, 36.016], [23.5, 35.722], [24, 35.443], [24.5, 35.178], [25, 34.925], [25.5, 34.685], [26, 34.456], [26.5, 34.239], [27, 34.032], [27.5, 33.836], [28, 33.649], [28.5, 33.471], [29, 33.301], [29.5, 33.14], [30, 32.987], [30.5, 32.842], [31, 32.703], [31.5, 32.571], [32, 32.446], [32.5, 32.326], [33, 32.213], [33.5, 32.105], [34, 32.002], [34.5, 31.905], [35, 31.812], [35.5, 31.723], [36, 31.639], [36.5, 31.559], [37, 31.483], [37.5, 31.411], [38, 31.342], [38.5, 31.277], [39, 31.215], [39.5, 31.155], [40, 31.099]], step: 1 },
        { kind: "segment", from: [0, 30], to: [40, 30], dashed: true, tone: "muted", step: 1 },
        { kind: "label", at: [34, 29], label: "room T₀", labelAt: "s", step: 1 },
        { kind: "segment", from: [0, 90], to: [8, 42], tone: "good", step: 2 },
        { kind: "label", at: [5.5, 48], label: "fast", labelAt: "sw", tone: "good", step: 2 },
        { kind: "segment", from: [12, 44.616], to: [28, 31.624], tone: "good", step: 3 },
        { kind: "label", at: [24, 40], label: "slow", labelAt: "ne", tone: "good", step: 3 },
        { kind: "segment", from: [14, 30], to: [14, 44.796], step: 4 },
        { kind: "label", at: [13.6, 37], label: "T − T₀", labelAt: "w", step: 4 },
      ],
    },
    visualSpec: t`Set a hot body's starting temperature and the room's, and watch the cooling curve flatten as its excess temperature, and so its rate of cooling, shrinks.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Takes the rate of cooling as proportional to the body's own temperature.",
      remediation: t`The rate depends on how much hotter the body is than its surroundings: use $T - T_0$, not $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Thinks a smaller excess temperature gives faster cooling.",
      remediation: t`The rate is directly proportional to $T - T_0$: a smaller excess means slower cooling.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks a body cools at the same rate at every temperature.",
      remediation: t`The rate of cooling falls as the excess temperature falls: $\dfrac{dT}{dt} = C(T - T_0)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Gives the excess temperature as the answer.",
      remediation: t`$T - T_0 = 20\ ^\circ\mathrm{C}$ is the excess: the tea's temperature is $30 + 20$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Thinks the cooling curve is a straight line.",
      remediation: "The rate of cooling falls as the excess temperature falls, so the curve gets flatter with time.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks cooling speeds up with time.",
      remediation: "The body cools fastest at the start, when its excess temperature is largest.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks a body can cool below its surroundings on its own.",
      remediation: "Heat flows out only while the body is hotter than its surroundings, so it levels off at room temperature.",
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M8",
      mistake: "Confuses the rate-excess graph with the cooling curve.",
      remediation: t`Rate $= C(T - T_0)$ is a direct proportion: its graph is a straight line through the origin.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Thinks the rate of cooling does not depend on the excess temperature.",
      remediation: t`The rate grows in proportion to $T - T_0$, so the graph rises.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks a hotter body cools more slowly.",
      remediation: "A bigger excess temperature means faster cooling: the graph rises from the origin.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks the law holds for any excess temperature.",
      remediation: "Newton's law holds only for small differences between the body and its surroundings.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the law needs a vacuum.",
      remediation: "The law describes ordinary cooling in air, by convection and radiation together, for small excess temperatures.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Thinks the law applies only once the body reaches room temperature.",
      remediation: "At room temperature the body stops cooling; the law describes cooling while it is a little hotter.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.20" },
      stem: t`A metal sphere cools at $1.6\ ^\circ\mathrm{C/min}$ when its temperature is $70\ ^\circ\mathrm{C}$. The surroundings are at $30\ ^\circ\mathrm{C}$. At what rate does it cool when its temperature is $40\ ^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { r1: "1.6", T1: "70", T2: "40", T0: "30" }, params: { ask: "rate" } },
      options: [
        { key: "A", text: t`$0.4\ \mathrm{^\circ C/min}$`, correct: true, value: "0.400000000000000" },
        { key: "B", text: t`$0.914\ \mathrm{^\circ C/min}$`, correct: false, misconceptionId: "C08-M1", value: "0.914000000000000" },
        { key: "C", text: t`$6.4\ \mathrm{^\circ C/min}$`, correct: false, misconceptionId: "C08-M2", value: "6.40000000000000" },
        { key: "D", text: t`$1.6\ \mathrm{^\circ C/min}$`, correct: false, misconceptionId: "C08-M3", value: "1.60000000000000" },
      ],
      solution: {
        steps: [
          t`At $70\ ^\circ\mathrm{C}$ the excess is $40\ ^\circ\mathrm{C}$: $C = \dfrac{1.6}{40}$ $= 0.04\ \mathrm{min^{-1}}$.`,
          t`At $40\ ^\circ\mathrm{C}$ the excess is $10\ ^\circ\mathrm{C}$: rate $= 0.04 \times 10$ $= 0.4\ ^\circ\mathrm{C/min}$.`,
        ],
        figure: {
          alt: "Rate of cooling against excess temperature. Step 1: the point for an excess of 40 °C at 1.6 °C/min, and the straight line through it and the origin. Step 2: at an excess of 10 °C the line gives 0.4 °C/min.",
          axes: "xy",
          chart: { x: 10, y: 0.5, xTitle: "T − T₀ (°C)", yTitle: "rate (°C/min)" },
          view: { x: [0, 50], y: [0, 2] },
          elements: [
            { kind: "segment", from: [0, 0], to: [50, 2], step: 1 },
            { kind: "point", at: [40, 1.6], step: 1, label: "1.6", labelAt: "nw" },
            { kind: "segment", from: [10, 0], to: [10, 0.4], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [10, 0.4], tone: "good", step: 2, label: "0.4", labelAt: "nw" },
          ],
        },
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`A cup of tea at $80\ ^\circ\mathrm{C}$ cools at $5\ ^\circ\mathrm{C/min}$ in a room at $30\ ^\circ\mathrm{C}$. At what temperature will it be cooling at $2\ ^\circ\mathrm{C/min}$?`,
      verify: { kind: "value", inputs: { r1: "5", T1: "80", r2: "2", T0: "30" }, params: { ask: "temp" } },
      options: [
        { key: "A", text: t`$32\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C08-M1", value: "32" },
        { key: "B", text: t`$155\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C08-M2", value: "155" },
        { key: "C", text: t`$20\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C08-M4", value: "20" },
        { key: "D", text: t`$50\ \mathrm{^\circ C}$`, correct: true, value: "50" },
      ],
      solution: {
        steps: [
          t`$C = \dfrac{5}{80 - 30}$ $= 0.1\ \mathrm{min^{-1}}$.`,
          t`Rate $2\ ^\circ\mathrm{C/min}$ needs an excess of $\dfrac{2}{0.1}$ $= 20\ ^\circ\mathrm{C}$.`,
          t`$T = 30 + 20 = 50\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.2 (xv)" },
      stem: t`Hot water in a calorimeter is left to cool in a room, and its temperature is plotted against time. What does this cooling curve look like?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "curve" } },
      options: [
        { key: "A", text: t`A straight line, falling steadily until it reaches room temperature`, correct: false, misconceptionId: "C08-M5", value: "straight_fall" },
        { key: "B", text: t`It falls slowly at first, then faster and faster`, correct: false, misconceptionId: "C08-M6", value: "slow_then_fast" },
        { key: "C", text: t`It falls steadily and carries on below room temperature`, correct: false, misconceptionId: "C08-M7", value: "below_room" },
        { key: "D", text: t`Steep at first, then flatter and flatter, levelling off at room temperature`, correct: true, value: "steep_then_level" },
      ],
      solution: {
        steps: [
          t`At first the excess temperature is large, so the water cools fast: the curve is steep.`,
          t`As the excess shrinks the cooling slows, and the curve levels off at room temperature.`,
        ],
        figure: {
          alt: "A cooling curve falling steeply from 90 °C, then more and more slowly towards the room-temperature line at 30 °C. Step 2: a steep tangent at the start and a gentle one later.",
          axes: "xy",
          chart: { x: 10, y: 20, xTitle: "t (min)", yTitle: "T (°C)" },
          view: { x: [0, 40], y: [20, 100] },
          elements: [
            { kind: "curve", points: [[0, 90], [0.5, 87.074], [1, 84.29], [1.5, 81.642], [2, 79.124], [2.5, 76.728], [3, 74.449], [3.5, 72.281], [4, 70.219], [4.5, 68.258], [5, 66.392], [5.5, 64.617], [6, 62.929], [6.5, 61.323], [7, 59.795], [7.5, 58.342], [8, 56.96], [8.5, 55.645], [9, 54.394], [9.5, 53.204], [10, 52.073], [10.5, 50.996], [11, 49.972], [11.5, 48.998], [12, 48.072], [12.5, 47.19], [13, 46.352], [13.5, 45.554], [14, 44.796], [14.5, 44.074], [15, 43.388], [15.5, 42.735], [16, 42.114], [16.5, 41.523], [17, 40.961], [17.5, 40.426], [18, 39.918], [18.5, 39.434], [19, 38.974], [19.5, 38.536], [20, 38.12], [20.5, 37.724], [21, 37.347], [21.5, 36.989], [22, 36.648], [22.5, 36.324], [23, 36.016], [23.5, 35.722], [24, 35.443], [24.5, 35.178], [25, 34.925], [25.5, 34.685], [26, 34.456], [26.5, 34.239], [27, 34.032], [27.5, 33.836], [28, 33.649], [28.5, 33.471], [29, 33.301], [29.5, 33.14], [30, 32.987], [30.5, 32.842], [31, 32.703], [31.5, 32.571], [32, 32.446], [32.5, 32.326], [33, 32.213], [33.5, 32.105], [34, 32.002], [34.5, 31.905], [35, 31.812], [35.5, 31.723], [36, 31.639], [36.5, 31.559], [37, 31.483], [37.5, 31.411], [38, 31.342], [38.5, 31.277], [39, 31.215], [39.5, 31.155], [40, 31.099]], step: 1 },
            { kind: "segment", from: [0, 30], to: [40, 30], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [34, 29], label: "room T₀", labelAt: "s", step: 1 },
            { kind: "segment", from: [0.5, 86.492], to: [8, 49.65], tone: "good", step: 2 },
            { kind: "segment", from: [17, 39.253], to: [31, 31.633], tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`For a body cooling in a room, the rate of cooling is plotted against the excess temperature $T - T_0$ (body minus surroundings). For small excesses, what does the graph look like?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "graph" } },
      options: [
        { key: "A", text: t`A horizontal straight line`, correct: false, misconceptionId: "C08-M9", value: "horizontal_line" },
        { key: "B", text: t`A straight line sloping downwards`, correct: false, misconceptionId: "C08-M10", value: "falling_line" },
        { key: "C", text: t`A straight line through the origin`, correct: true, value: "line_through_origin" },
        { key: "D", text: t`A curve, steep at first and then flattening out`, correct: false, misconceptionId: "C08-M8", value: "flattening_curve" },
      ],
      solution: {
        steps: [
          t`Newton's law: rate $= C(T - T_0)$, a direct proportion.`,
          t`So the graph is a straight line through the origin, with slope $C$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Newton's law of cooling says the rate of cooling is proportional to the excess temperature of a body over its surroundings. When does the law hold?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "valid" } },
      options: [
        { key: "A", text: t`Only once the body has reached room temperature`, correct: false, misconceptionId: "C08-M13", value: "at_room_temp" },
        { key: "B", text: t`When the body is only a little hotter than its surroundings`, correct: true, value: "small_excess" },
        { key: "C", text: t`For any excess temperature, however large`, correct: false, misconceptionId: "C08-M11", value: "any_excess" },
        { key: "D", text: t`Only when the body cools in a vacuum`, correct: false, misconceptionId: "C08-M12", value: "vacuum_only" },
      ],
      solution: {
        steps: [
          t`Experiments match the law only when the body is a little hotter than its surroundings.`,
          t`For large excess temperatures the rate of cooling is no longer proportional to $T - T_0$.`,
        ],
      },
    },
  ],
};
