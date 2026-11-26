import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Squeeze a sealed syringe of air to half its volume and it pushes back twice as hard. Warm it, and it pushes the plunger out. What rules decide how much?`,
    reveal: t`Boyle's law links pressure and volume; Charles' law links volume and temperature.`,
  },
  explanation: {
    intuition: [
      t`For a fixed amount of gas, pressure, volume and temperature are linked.`,
      t`Squeezing a gas at constant temperature raises its pressure.`,
      t`Heating a gas at constant pressure makes it expand.`,
      t`Temperatures in these laws must be in kelvin.`,
    ],
    formal: [
      {
        title: "Boyle's law",
        points: [
          t`At constant $n$ and $T$: $PV$ = constant.`,
          t`$P_1V_1 = P_2V_2$.`,
        ],
        figure: {
          alt: "Boyle's law: P against V at constant temperature is a hyperbola. Halving the volume from 6 L to 3 L doubles the pressure from 2 atm to 4 atm.",
          axes: "xy",
          chart: { x: 2, y: 2, xTitle: "V (L)", yTitle: "P (atm)" },
          view: { x: [0, 13], y: [0, 13] },
          elements: [
            { kind: "curve", points: [[0.95, 12.632], [1.094, 10.965], [1.239, 9.687], [1.383, 8.676], [1.527, 7.856], [1.672, 7.178], [1.816, 6.607], [1.961, 6.12], [2.105, 5.701], [2.249, 5.335], [2.394, 5.013], [2.538, 4.728], [2.683, 4.473], [2.827, 4.245], [2.971, 4.039], [3.116, 3.852], [3.26, 3.681], [3.404, 3.525], [3.549, 3.381], [3.693, 3.249], [3.838, 3.127], [3.982, 3.014], [4.126, 2.908], [4.271, 2.81], [4.415, 2.718], [4.559, 2.632], [4.704, 2.551], [4.848, 2.475], [4.993, 2.404], [5.137, 2.336], [5.281, 2.272], [5.426, 2.212], [5.57, 2.154], [5.714, 2.1], [5.859, 2.048], [6.003, 1.999], [6.147, 1.952], [6.292, 1.907], [6.436, 1.864], [6.581, 1.824], [6.725, 1.784], [6.869, 1.747], [7.014, 1.711], [7.158, 1.676], [7.303, 1.643], [7.447, 1.611], [7.591, 1.581], [7.736, 1.551], [7.88, 1.523], [8.024, 1.495], [8.169, 1.469], [8.313, 1.444], [8.457, 1.419], [8.602, 1.395], [8.746, 1.372], [8.891, 1.35], [9.035, 1.328], [9.179, 1.307], [9.324, 1.287], [9.468, 1.267], [9.612, 1.248], [9.757, 1.23], [9.901, 1.212], [10.046, 1.195], [10.19, 1.178], [10.334, 1.161], [10.479, 1.145], [10.623, 1.13], [10.768, 1.114], [10.912, 1.1], [11.056, 1.085], [11.201, 1.071], [11.345, 1.058], [11.489, 1.044], [11.634, 1.031], [11.778, 1.019], [11.922, 1.007], [12.067, 0.994], [12.211, 0.983], [12.356, 0.971], [12.5, 0.96]], step: 1 },
            { kind: "point", at: [6, 2], label: "6 L, 2 atm", labelAt: "ne", step: 2 },
            { kind: "point", at: [3, 4], label: "3 L, 4 atm", labelAt: "ne", step: 2 },
            { kind: "label", at: [8, 9], label: "PV = constant", labelAt: "ne", step: 2 },
          ],
        },
      },
      {
        title: "Charles' law",
        points: [
          t`At constant $n$ and $P$: $V/T$ = constant.`,
          t`$\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$, with $T$ in kelvin.`,
        ],
        figure: {
          alt: "Charles' law: volume against kelvin temperature at constant pressure is a straight line. Extended backwards (dashed), it reaches zero volume at 0 K.",
          axes: "xy",
          chart: { x: 100, y: 1, xTitle: "T (K)", yTitle: "V (L)" },
          view: { x: [0, 420], y: [0, 4.5] },
          elements: [
            { kind: "segment", from: [0, 0], to: [200, 2], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [200, 2], to: [400, 4], step: 1 },
            { kind: "label", at: [0, 0], label: "0 K", labelAt: "ne", step: 2 },
            { kind: "label", at: [300, 3], label: "V/T = constant", labelAt: "nw", step: 2 },
          ],
        },
      },
      {
        title: "Gay-Lussac's law",
        points: [
          t`At constant $n$ and $V$: $P/T$ = constant.`,
          t`Hot-air balloons rise because heated air expands and becomes less dense.`,
        ],
        figure: {
          alt: "Gay-Lussac's law: pressure against kelvin temperature at constant volume is a straight line through the origin; doubling T from 200 K to 400 K doubles P.",
          axes: "xy",
          chart: { x: 100, y: 0.5, xTitle: "T (K)", yTitle: "P (atm)" },
          view: { x: [0, 420], y: [0, 2.3] },
          elements: [
            { kind: "segment", from: [0, 0], to: [400, 2], step: 1 },
            { kind: "point", at: [200, 1], label: "200 K, 1 atm", labelAt: "se", step: 2 },
            { kind: "point", at: [400, 2], label: "400 K, 2 atm", labelAt: "nw", step: 2 },
            { kind: "label", at: [100, 1.6], label: "P/T = constant", labelAt: "ne", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A gas occupies 25 mL at 1 atm. Find its volume at 1.25 atm, temperature unchanged.`,
      steps: [
        t`$P_1V_1 = P_2V_2$: $1 \times 25 = 1.25 \times V_2$.`,
        t`$V_2 = 25 \div 1.25 = 20$ mL.`,
      ],
      answer: t`20 mL`,
      figure: {
        alt: "P against V for the gas, PV = 25: the point (25 mL, 1 atm) moves along the curve to (20 mL, 1.25 atm).",
        axes: "xy",
        chart: { x: 10, y: 0.5, xTitle: "V (mL)", yTitle: "P (atm)" },
        view: { x: [0, 40], y: [0, 2.2] },
        elements: [
          { kind: "curve", points: [[11.5, 2.174], [11.856, 2.109], [12.213, 2.047], [12.569, 1.989], [12.925, 1.934], [13.281, 1.882], [13.637, 1.833], [13.994, 1.787], [14.35, 1.742], [14.706, 1.7], [15.062, 1.66], [15.419, 1.621], [15.775, 1.585], [16.131, 1.55], [16.488, 1.516], [16.844, 1.484], [17.2, 1.453], [17.556, 1.424], [17.913, 1.396], [18.269, 1.368], [18.625, 1.342], [18.981, 1.317], [19.337, 1.293], [19.694, 1.269], [20.05, 1.247], [20.406, 1.225], [20.762, 1.204], [21.119, 1.184], [21.475, 1.164], [21.831, 1.145], [22.188, 1.127], [22.544, 1.109], [22.9, 1.092], [23.256, 1.075], [23.613, 1.059], [23.969, 1.043], [24.325, 1.028], [24.681, 1.013], [25.038, 0.999], [25.394, 0.984], [25.75, 0.971], [26.106, 0.958], [26.462, 0.945], [26.819, 0.932], [27.175, 0.92], [27.531, 0.908], [27.887, 0.896], [28.244, 0.885], [28.6, 0.874], [28.956, 0.863], [29.312, 0.853], [29.669, 0.843], [30.025, 0.833], [30.381, 0.823], [30.738, 0.813], [31.094, 0.804], [31.45, 0.795], [31.806, 0.786], [32.163, 0.777], [32.519, 0.769], [32.875, 0.76], [33.231, 0.752], [33.587, 0.744], [33.944, 0.737], [34.3, 0.729], [34.656, 0.721], [35.013, 0.714], [35.369, 0.707], [35.725, 0.7], [36.081, 0.693], [36.438, 0.686], [36.794, 0.679], [37.15, 0.673], [37.506, 0.667], [37.862, 0.66], [38.219, 0.654], [38.575, 0.648], [38.931, 0.642], [39.288, 0.636], [39.644, 0.631], [40, 0.625]], step: 1 },
          { kind: "point", at: [25, 1], label: "25 mL, 1 atm", labelAt: "ne", step: 1 },
          { kind: "point", at: [20, 1.25], label: "20 mL, 1.25 atm", labelAt: "ne", step: 2 },
        ],
      },
    },
    figure: {
      alt: "Pressure against volume for a fixed amount of gas at constant temperature: a curve falling steeply, then gently. At V = 2, 4 and 6 L the pressure is 6, 3 and 2 atm: PV stays 12 each time.",
      axes: "xy",
      chart: { x: 2, y: 2, xTitle: "V (L)", yTitle: "P (atm)" },
      view: { x: [0, 13], y: [0, 13] },
      elements: [
        { kind: "curve", points: [[0.95, 12.632], [1.094, 10.965], [1.239, 9.687], [1.383, 8.676], [1.527, 7.856], [1.672, 7.178], [1.816, 6.607], [1.961, 6.12], [2.105, 5.701], [2.249, 5.335], [2.394, 5.013], [2.538, 4.728], [2.683, 4.473], [2.827, 4.245], [2.971, 4.039], [3.116, 3.852], [3.26, 3.681], [3.404, 3.525], [3.549, 3.381], [3.693, 3.249], [3.838, 3.127], [3.982, 3.014], [4.126, 2.908], [4.271, 2.81], [4.415, 2.718], [4.559, 2.632], [4.704, 2.551], [4.848, 2.475], [4.993, 2.404], [5.137, 2.336], [5.281, 2.272], [5.426, 2.212], [5.57, 2.154], [5.714, 2.1], [5.859, 2.048], [6.003, 1.999], [6.147, 1.952], [6.292, 1.907], [6.436, 1.864], [6.581, 1.824], [6.725, 1.784], [6.869, 1.747], [7.014, 1.711], [7.158, 1.676], [7.303, 1.643], [7.447, 1.611], [7.591, 1.581], [7.736, 1.551], [7.88, 1.523], [8.024, 1.495], [8.169, 1.469], [8.313, 1.444], [8.457, 1.419], [8.602, 1.395], [8.746, 1.372], [8.891, 1.35], [9.035, 1.328], [9.179, 1.307], [9.324, 1.287], [9.468, 1.267], [9.612, 1.248], [9.757, 1.23], [9.901, 1.212], [10.046, 1.195], [10.19, 1.178], [10.334, 1.161], [10.479, 1.145], [10.623, 1.13], [10.768, 1.114], [10.912, 1.1], [11.056, 1.085], [11.201, 1.071], [11.345, 1.058], [11.489, 1.044], [11.634, 1.031], [11.778, 1.019], [11.922, 1.007], [12.067, 0.994], [12.211, 0.983], [12.356, 0.971], [12.5, 0.96]], step: 1 },
        { kind: "point", at: [2, 6], label: "(2, 6)", labelAt: "ne", step: 2 },
        { kind: "point", at: [4, 3], label: "(4, 3)", labelAt: "ne", step: 2 },
        { kind: "point", at: [6, 2], label: "(6, 2)", labelAt: "ne", step: 2 },
      ],
    },
    visualSpec: t`Push a piston in, then heat the gas, and plot how pressure and volume respond.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Inverts the pressure ratio.",
      remediation: t`Higher pressure means smaller volume: $V_2 = V_1P_1/P_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Leaves the volume unchanged.",
      remediation: "Changing the pressure changes the volume.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Squares the ratio.",
      remediation: t`$V$ is inversely proportional to $P$, not to $P^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Inverts the temperature ratio.",
      remediation: t`Heating expands a gas: $V_2 = V_1T_2/T_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Uses Celsius temperatures.",
      remediation: "Convert to kelvin first.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Leaves the volume unchanged.",
      remediation: "Volume changes with kelvin temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the bubble shrinks.",
      remediation: "Pressure falls as the bubble rises, so it expands.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks it stays the same.",
      remediation: "Less pressure on the bubble lets it grow.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks warmer water shrinks it.",
      remediation: "Warming would expand it too; mainly the falling pressure makes it grow.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.1 (E)" },
      stem: t`At constant temperature, the pressure on $22.4\ \mathrm{dm^3}$ of a gas is raised from 105 kPa to 210 kPa. The new volume is`,
      verify: { kind: "value", inputs: { V: "22.4", P1: "105", P2: "210" }, params: { q: "boyle" } },
      options: [
        { key: "A", text: t`$22.4\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C03-M2", value: "22.4000000000000" },
        { key: "B", text: t`$5.6\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C03-M3", value: "5.60000000000000" },
        { key: "C", text: t`$44.8\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C03-M1", value: "44.8000000000000" },
        { key: "D", text: t`$11.2\ \mathrm{dm^{3}}$`, correct: true, value: "11.2000000000000" },
      ],
      solution: {
        steps: [
          t`$V_2 = 22.4 \times 105 \div 210$.`,
          t`$= 11.2\ \mathrm{dm^3}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.1" },
      stem: t`A gas occupies 25 mL at 1 atm. Find its volume at 1.25 atm at the same temperature.`,
      verify: { kind: "value", inputs: { V: "25", P1: "1", P2: "1.25" }, params: { q: "boyle" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{mL}$`, correct: true, value: "20" },
        { key: "B", text: t`$16\ \mathrm{mL}$`, correct: false, misconceptionId: "C03-M3", value: "16" },
        { key: "C", text: t`$25\ \mathrm{mL}$`, correct: false, misconceptionId: "C03-M2", value: "25" },
        { key: "D", text: t`$31.2\ \mathrm{mL}$`, correct: false, misconceptionId: "C03-M1", value: "31.2000000000000" },
      ],
      solution: {
        steps: [
          t`$V_2 = 25 \times 1 \div 1.25$.`,
          t`$= 20$ mL.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.2" },
      stem: t`At 300 K a gas occupies $1 \times 10^{-4}\ \mathrm{dm^3}$. Find its volume at 450 K at the same pressure.`,
      verify: { kind: "value", inputs: { V: "1e-4", T1: "300", T2: "450" }, params: { q: "charles" } },
      options: [
        { key: "A", text: t`$6.67 \times 10^{-5}\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C03-M4", value: "6.67000000000000e-5" },
        { key: "B", text: t`$1.5 \times 10^{-4}\ \mathrm{dm^{3}}$`, correct: true, value: "0.000150000000000000" },
        { key: "C", text: t`$1 \times 10^{-4}\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C03-M6", value: "0.000100000000000000" },
        { key: "D", text: t`$6.59 \times 10^{-4}\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C03-M5", value: "0.000659000000000000" },
      ],
      solution: {
        steps: [
          t`$V_2 = 1 \times 10^{-4} \times 450 \div 300$.`,
          t`$= 1.5 \times 10^{-4}\ \mathrm{dm^3}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.5 (D)" },
      stem: t`A hot air balloon has a volume of $2800\ \mathrm{m^3}$ at $99\ ^\circ\mathrm{C}$. What is its volume when the air cools to $80\ ^\circ\mathrm{C}$ at constant pressure?`,
      verify: { kind: "value", inputs: { V: "2800", t1: "99", t2: "80" }, params: { q: "charles_c" } },
      options: [
        { key: "A", text: t`$2263\ \mathrm{m^{3}}$`, correct: false, misconceptionId: "C03-M5", value: "2263" },
        { key: "B", text: t`$2800\ \mathrm{m^{3}}$`, correct: false, misconceptionId: "C03-M6", value: "2800" },
        { key: "C", text: t`$2657\ \mathrm{m^{3}}$`, correct: true, value: "2657" },
        { key: "D", text: t`$2951\ \mathrm{m^{3}}$`, correct: false, misconceptionId: "C03-M4", value: "2951" },
      ],
      solution: {
        steps: [
          t`$T_1 = 372.15$ K, $T_2 = 353.15$ K.`,
          t`$V_2 = 2800 \times 353.15 \div 372.15 = 2657\ \mathrm{m^3}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.2 (D)" },
      stem: t`A bubble of methane rises from the bottom of the North Sea. As it rises, it`,
      verify: { kind: "value", inputs: {  }, params: { q: "bubble" } },
      options: [
        { key: "A", text: t`shrinks, because the water above is warmer`, correct: false, misconceptionId: "C03-M9", value: "shrinks_warm" },
        { key: "B", text: t`shrinks, because the pressure on it rises`, correct: false, misconceptionId: "C03-M7", value: "shrinks" },
        { key: "C", text: t`stays the same size`, correct: false, misconceptionId: "C03-M8", value: "same" },
        { key: "D", text: t`grows, because the pressure on it falls`, correct: true, value: "grows" },
      ],
      solution: {
        steps: [
          t`Water pressure falls as the bubble rises.`,
          t`By Boyle's law, it grows.`,
        ],
      },
    },
  ],
};
