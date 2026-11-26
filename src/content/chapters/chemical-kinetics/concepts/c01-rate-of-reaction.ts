import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Hydrogen burns as $\ce{2H2 + O2 -> 2H2O}$, and hydrogen is used up twice as fast as oxygen. Which of the two is the rate of the reaction?`,
    reveal: t`Neither on its own. Divide each species' rate by its coefficient: half of hydrogen's rate equals oxygen's rate. That shared number is the rate of the reaction.`,
  },
  explanation: {
    intuition: [
      t`A **rate** tells how fast something changes with time.`,
      t`In a reaction, reactants are used up and products form, so their concentrations change.`,
      t`The rate of a reaction is how fast these concentrations change.`,
      t`Different species change at different speeds, in the ratio of their coefficients.`,
      t`Dividing each by its coefficient gives one rate for the whole reaction.`,
      t`The rate is fastest at the start and slows as the reactants run out.`,
    ],
    formal: [
      {
        title: "Average rate",
        points: [
          t`Square brackets give molar concentration: $[\ce{A}]$ is the concentration of A in $\mathrm{mol\,L^{-1}}$.`,
          t`The **rate of a reaction** is the change in concentration per unit time.`,
          t`For a reactant, the average rate is $-\dfrac{\Delta[\ce{A}]}{\Delta t}$; the minus sign makes it positive.`,
          t`For a product, the average rate is $+\dfrac{\Delta[\ce{B}]}{\Delta t}$, since $[\ce{B}]$ rises.`,
          t`Its unit is $\mathrm{mol\,L^{-1}\,s^{-1}}$, also written $\mathrm{mol\,dm^{-3}\,s^{-1}}$ or $\mathrm{M\,s^{-1}}$.`,
        ],
      },
      {
        title: "Instantaneous rate",
        points: [
          t`Plot $[\ce{A}]$ against $t$: the curve falls more and more slowly as A is used up.`,
          t`The average rate over an interval is the slope of the **chord** joining its two ends, made positive.`,
          t`Shrink the interval, $\Delta t \to 0$, and the chord turns into the **tangent** at one instant.`,
          t`The **instantaneous rate** is $-\dfrac{d[\ce{A}]}{dt}$: minus the slope of that tangent.`,
          t`So the rate at an instant is found by drawing a tangent to the curve there.`,
        ],
        figure: {
          alt: "[A] falls along a curve that flattens with time. A dashed chord joins the points at 10 s and 40 s: its slope is the average rate. A tangent touches the curve at 20 s: its slope is the instantaneous rate there.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 60], y: [0, 0.9] },
          elements: [
            { kind: "curve", points: [[0, 0.8], [1, 0.769], [2, 0.738], [3, 0.71], [4, 0.682], [5, 0.655], [6, 0.629], [7, 0.605], [8, 0.581], [9, 0.558], [10, 0.536], [11, 0.515], [12, 0.495], [13, 0.476], [14, 0.457], [15, 0.439], [16, 0.422], [17, 0.405], [18, 0.389], [19, 0.374], [20, 0.359], [21, 0.345], [22, 0.332], [23, 0.319], [24, 0.306], [25, 0.294], [26, 0.283], [27, 0.272], [28, 0.261], [29, 0.251], [30, 0.241], [31, 0.232], [32, 0.222], [33, 0.214], [34, 0.205], [35, 0.197], [36, 0.19], [37, 0.182], [38, 0.175], [39, 0.168], [40, 0.162], [41, 0.155], [42, 0.149], [43, 0.143], [44, 0.138], [45, 0.132], [46, 0.127], [47, 0.122], [48, 0.117], [49, 0.113], [50, 0.108], [51, 0.104], [52, 0.1], [53, 0.096], [54, 0.092], [55, 0.089], [56, 0.085], [57, 0.082], [58, 0.079], [59, 0.076], [60, 0.073]], step: 1 },
            { kind: "segment", from: [10, 0.5363], to: [40, 0.1615], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [10, 0.5363], tone: "muted", step: 2 },
            { kind: "point", at: [40, 0.1615], label: "chord", labelAt: "ne", tone: "muted", step: 2 },
            { kind: "segment", from: [0, 0.647], to: [45, 0], tone: "good", step: 3 },
            { kind: "point", at: [20, 0.3595], tone: "good", step: 3 },
            { kind: "label", at: [45, 0], label: "tangent", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "One rate for the reaction",
        points: [
          t`In $\ce{H2 + I2 -> 2HI}$, HI forms twice as fast as $\ce{H2}$ is used up.`,
          t`To get one rate, divide each species' rate by its coefficient in the balanced equation.`,
          t`For $a\ce{A} + b\ce{B} \rightarrow c\ce{C} + d\ce{D}$ the rate of reaction is`,
          t`$-\dfrac{1}{a}\dfrac{d[\ce{A}]}{dt}$ $= -\dfrac{1}{b}\dfrac{d[\ce{B}]}{dt}$ $= \dfrac{1}{c}\dfrac{d[\ce{C}]}{dt}$ $= \dfrac{1}{d}\dfrac{d[\ce{D}]}{dt}$.`,
          t`Reactants carry a minus sign, as their concentrations fall; products carry a plus sign.`,
          t`So a species with a bigger coefficient changes faster, in proportion to it.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{4NH3 + 5O2 -> 4NO + 6H2O}$, oxygen is used up at $0.060\ \mathrm{mol\,L^{-1}\,s^{-1}}$. Find the rate of reaction and the rate at which $\ce{NO}$ forms.`,
      steps: [
        t`Rate $= -\dfrac{1}{5}\dfrac{d[\ce{O2}]}{dt}$ $= \dfrac{0.060}{5}$ $= 0.012\ \mathrm{mol\,L^{-1}\,s^{-1}}$.`,
        t`Rate is also $\dfrac{1}{4}\dfrac{d[\ce{NO}]}{dt}$, so $\dfrac{d[\ce{NO}]}{dt} = 4 \times 0.012$.`,
        t`$\dfrac{d[\ce{NO}]}{dt} = 0.048\ \mathrm{mol\,L^{-1}\,s^{-1}}$, four fifths of oxygen's rate.`,
      ],
      answer: t`Rate of reaction $0.012$; $\ce{NO}$ forms at $0.048\ \mathrm{mol\,L^{-1}\,s^{-1}}$`,
    },
    visualSpec: t`Slide a time marker along a falling concentration curve and watch the tangent swing flatter, its slope (the instantaneous rate) shrinking, while a chord shows the average rate.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks every species is used up or formed at the same rate, ignoring the coefficients.",
      remediation: "Species change in the ratio of their coefficients. Divide each one's rate by its coefficient to get the one rate of reaction.",
      fallback: { kind: "ext", topic: "stoichiometry (Std XI Chemistry)" },
    },
    {
      id: "C01-M2",
      mistake: "Uses the coefficients upside down, multiplying where it should divide.",
      remediation: "The rate of reaction is each species' rate **divided** by its coefficient, so a species with a bigger coefficient changes faster.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Multiplies by the product's coefficient but forgets to divide by the reactant's.",
      remediation: "First divide by the reactant's coefficient to get the rate of reaction, then multiply by the product's coefficient.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Drops the minus sign on a reactant's term, or reads a minus sign as marking a product.",
      remediation: t`A reactant's concentration falls, so $\dfrac{d[\ce{A}]}{dt}$ is negative. The minus in $-\dfrac{d[\ce{A}]}{dt}$ marks a reactant and makes the rate positive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Takes the average rate from the start as the rate at an instant.",
      remediation: t`The instantaneous rate is minus the slope of the tangent at that instant. A chord from $t = 0$ gives only the average rate.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.1" },
      stem: t`In liquid bromine, $\ce{2N2O5(g) -> 4NO2(g) + O2(g)}$. $\ce{N2O5}$ disappears at $0.02\ \mathrm{mol\,dm^{-3}\,s^{-1}}$. The rate at which $\ce{NO2}$ is formed is`,
      verify: { kind: "value", inputs: { r: "0.02", a: "2", b: "4" }, params: { ask: "species" } },
      options: [
        { key: "A", text: t`$0.04\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: true, value: "0.0400000000000000" },
        { key: "B", text: t`$0.02\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "0.0200000000000000" },
        { key: "C", text: t`$0.01\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M2", value: "0.0100000000000000" },
        { key: "D", text: t`$0.08\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M3", value: "0.0800000000000000" },
      ],
      solution: {
        steps: [
          t`Rate of reaction $= \dfrac{1}{2}\left(-\dfrac{d[\ce{N2O5}]}{dt}\right)$ $= \dfrac{0.02}{2} = 0.01$.`,
          t`Rate $= \dfrac{1}{4}\dfrac{d[\ce{NO2}]}{dt}$, so $\dfrac{d[\ce{NO2}]}{dt} = 4 \times 0.01$.`,
          t`$\ce{NO2}$ forms at $0.04\ \mathrm{mol\,dm^{-3}\,s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.2 (i)" },
      stem: t`For $\ce{N2(g) + 3H2(g) -> 2NH3(g)}$, hydrogen is used up at $0.30\ \mathrm{mol\,dm^{-3}\,s^{-1}}$. The rate at which $\ce{NH3}$ is formed is`,
      verify: { kind: "value", inputs: { r: "0.30", a: "3", b: "2" }, params: { ask: "species" } },
      options: [
        { key: "A", text: t`$0.6\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M3", value: "0.600000000000000" },
        { key: "B", text: t`$0.3\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "0.300000000000000" },
        { key: "C", text: t`$0.45\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M2", value: "0.450000000000000" },
        { key: "D", text: t`$0.2\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: true, value: "0.200000000000000" },
      ],
      solution: {
        steps: [
          t`Rate of reaction $= \dfrac{1}{3}\left(-\dfrac{d[\ce{H2}]}{dt}\right)$ $= \dfrac{0.30}{3} = 0.10$.`,
          t`Rate $= \dfrac{1}{2}\dfrac{d[\ce{NH3}]}{dt}$, so $\dfrac{d[\ce{NH3}]}{dt} = 2 \times 0.10$.`,
          t`$\ce{NH3}$ forms at $0.20\ \mathrm{mol\,dm^{-3}\,s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.1" },
      stem: t`For $\ce{2N2O5(g) -> 4NO2(g) + O2(g)}$, $\dfrac{d[\ce{N2O5}]}{dt}$ $= -0.036\ \mathrm{mol\,dm^{-3}\,s^{-1}}$. The rate of the reaction is`,
      verify: { kind: "value", inputs: { d: "-0.036", a: "2" }, params: { ask: "reaction" } },
      options: [
        { key: "A", text: t`$0.072\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M2", value: "0.0720000000000000" },
        { key: "B", text: t`$-0.018\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M4", value: "-0.0180000000000000" },
        { key: "C", text: t`$0.018\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: true, value: "0.0180000000000000" },
        { key: "D", text: t`$0.036\ \mathrm{mol\,dm^{-3}\,s^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "0.0360000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{N2O5}$ is a reactant with coefficient $2$: rate $= -\dfrac{1}{2}\dfrac{d[\ce{N2O5}]}{dt}$.`,
          t`Rate $= -\dfrac{1}{2} \times (-0.036)$ $= 0.018\ \mathrm{mol\,dm^{-3}\,s^{-1}}$, a positive number.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#1" },
      stem: t`The rate of a reaction is written $-\dfrac{1}{3}\dfrac{d[\ce{A}]}{dt}$ $= \dfrac{1}{2}\dfrac{d[\ce{B}]}{dt}$ $= \dfrac{d[\ce{C}]}{dt}$. The reaction is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "equation" } },
      options: [
        { key: "A", text: t`$\ce{3A -> 2B + C}$`, correct: true, value: "eq_3a_2b_c" },
        { key: "B", text: t`$\ce{A -> B + C}$`, correct: false, misconceptionId: "C01-M1", value: "eq_a_b_c" },
        { key: "C", text: t`$\ce{2A -> 3B + 6C}$`, correct: false, misconceptionId: "C01-M2", value: "eq_2a_3b_6c" },
        { key: "D", text: t`$\ce{2B + C -> 3A}$`, correct: false, misconceptionId: "C01-M4", value: "eq_2b_c_3a" },
      ],
      solution: {
        steps: [
          t`The minus sign on the A term marks A as a reactant; its $\dfrac{1}{3}$ gives coefficient $3$.`,
          t`B and C carry plus signs, so they are products, with coefficients $2$ and $1$.`,
          t`The reaction is $\ce{3A -> 2B + C}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#5" },
      stem: t`For $\ce{2A -> B}$, the graph shows $[\ce{A}]$ against $t$. At $t = 0$, $[\ce{A}] = 0.82\ \mathrm{M}$. At $t = 20\ \mathrm{s}$, $[\ce{A}] = 0.30\ \mathrm{M}$, and the tangent there meets the axes at $0.60\ \mathrm{M}$ and $40\ \mathrm{s}$. The rate of the reaction at $t = 20\ \mathrm{s}$ is`,
      figure: {
        alt: "The concentration of A falls along a curve from 0.82 M at t = 0. At t = 20 s, where [A] = 0.30 M, a tangent touches the curve; it meets the axes at 0.60 M and 40 s.",
        axes: "xy",
        chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
        view: { x: [0, 50], y: [0, 0.9] },
        elements: [
          { kind: "curve", points: [[0, 0.816], [0.833, 0.782], [1.667, 0.75], [2.5, 0.72], [3.333, 0.69], [4.167, 0.662], [5, 0.635], [5.833, 0.609], [6.667, 0.584], [7.5, 0.56], [8.333, 0.538], [9.167, 0.516], [10, 0.495], [10.833, 0.474], [11.667, 0.455], [12.5, 0.437], [13.333, 0.419], [14.167, 0.402], [15, 0.385], [15.833, 0.369], [16.667, 0.354], [17.5, 0.34], [18.333, 0.326], [19.167, 0.313], [20, 0.3], [20.833, 0.288], [21.667, 0.276], [22.5, 0.265], [23.333, 0.254], [24.167, 0.244], [25, 0.234], [25.833, 0.224], [26.667, 0.215], [27.5, 0.206], [28.333, 0.198], [29.167, 0.19], [30, 0.182], [30.833, 0.175], [31.667, 0.167], [32.5, 0.161], [33.333, 0.154], [34.167, 0.148], [35, 0.142], [35.833, 0.136], [36.667, 0.13], [37.5, 0.125], [38.333, 0.12], [39.167, 0.115], [40, 0.11], [40.833, 0.106], [41.667, 0.102], [42.5, 0.097], [43.333, 0.093], [44.167, 0.09], [45, 0.086], [45.833, 0.082], [46.667, 0.079], [47.5, 0.076], [48.333, 0.073], [49.167, 0.07], [50, 0.067]] },
          { kind: "segment", from: [0, 0.6], to: [40, 0], tone: "good" },
          { kind: "point", at: [20, 0.3], label: "(20, 0.30)", labelAt: "ne" },
          { kind: "point", at: [40, 0], label: "40", labelAt: "ne", tone: "good" },
        ],
      },
      verify: { kind: "value", inputs: { y0: "0.60", T: "40", A0: "0.82", c1: "0.30", t1: "20", a: "2" }, params: { ask: "tangent" } },
      options: [
        { key: "A", text: t`$-0.0075\ \mathrm{M\,s^{-1}}$`, correct: false, misconceptionId: "C01-M4", value: "-0.00750000000000000" },
        { key: "B", text: t`$0.015\ \mathrm{M\,s^{-1}}$`, correct: false, misconceptionId: "C01-M1", value: "0.0150000000000000" },
        { key: "C", text: t`$0.0075\ \mathrm{M\,s^{-1}}$`, correct: true, value: "0.00750000000000000" },
        { key: "D", text: t`$0.013\ \mathrm{M\,s^{-1}}$`, correct: false, misconceptionId: "C01-M5", value: "0.0130000000000000" },
      ],
      solution: {
        steps: [
          t`The tangent falls $0.60\ \mathrm{M}$ in $40\ \mathrm{s}$: slope $= -0.015\ \mathrm{M\,s^{-1}}$, so $-\dfrac{d[\ce{A}]}{dt} = 0.015$.`,
          t`A has coefficient $2$: rate $= \dfrac{1}{2} \times 0.015$ $= 0.0075\ \mathrm{M\,s^{-1}}$.`,
        ],
        figure: {
          alt: "The tangent at t = 20 s runs from 0.60 M on the [A] axis down to 40 s on the t axis: a fall of 0.60 M in 40 s.",
          axes: "xy",
          chart: { x: 10, y: 0.2, xTitle: "t (s)", yTitle: "[A] (M)" },
          view: { x: [0, 50], y: [0, 0.9] },
          elements: [
            { kind: "curve", points: [[0, 0.816], [0.833, 0.782], [1.667, 0.75], [2.5, 0.72], [3.333, 0.69], [4.167, 0.662], [5, 0.635], [5.833, 0.609], [6.667, 0.584], [7.5, 0.56], [8.333, 0.538], [9.167, 0.516], [10, 0.495], [10.833, 0.474], [11.667, 0.455], [12.5, 0.437], [13.333, 0.419], [14.167, 0.402], [15, 0.385], [15.833, 0.369], [16.667, 0.354], [17.5, 0.34], [18.333, 0.326], [19.167, 0.313], [20, 0.3], [20.833, 0.288], [21.667, 0.276], [22.5, 0.265], [23.333, 0.254], [24.167, 0.244], [25, 0.234], [25.833, 0.224], [26.667, 0.215], [27.5, 0.206], [28.333, 0.198], [29.167, 0.19], [30, 0.182], [30.833, 0.175], [31.667, 0.167], [32.5, 0.161], [33.333, 0.154], [34.167, 0.148], [35, 0.142], [35.833, 0.136], [36.667, 0.13], [37.5, 0.125], [38.333, 0.12], [39.167, 0.115], [40, 0.11], [40.833, 0.106], [41.667, 0.102], [42.5, 0.097], [43.333, 0.093], [44.167, 0.09], [45, 0.086], [45.833, 0.082], [46.667, 0.079], [47.5, 0.076], [48.333, 0.073], [49.167, 0.07], [50, 0.067]], tone: "muted" },
            { kind: "segment", from: [0, 0.6], to: [40, 0], tone: "good", step: 1 },
            { kind: "point", at: [20, 0.3], label: "(20, 0.30)", labelAt: "ne" },
            { kind: "point", at: [40, 0], label: "40", labelAt: "ne", tone: "good", step: 1 },
          ],
        },
      },
    },
  ],
};
