import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Doubling the pressure of a gas over charcoal does not double the amount adsorbed. How does adsorption depend on pressure?`,
    reveal: t`It rises with pressure but less and less steeply as the surface fills, following the Freundlich isotherm, $x/m = kP^{1/n}$.`,
  },
  explanation: {
    intuition: [
      t`The more surface, the more adsorption: finely divided solids work best.`,
      t`Easily liquefied gases are adsorbed most.`,
      t`Higher pressure and lower temperature increase adsorption.`,
      t`The Freundlich isotherm describes how adsorption depends on pressure.`,
    ],
    formal: [
      {
        title: "Factors",
        points: [
          t`Surface area: finely divided or porous adsorbents adsorb more.`,
          t`Nature of the gas: higher critical temperature, more adsorption ($\ce{NH3}$ > $\ce{N2}$ > $\ce{H2}$).`,
          t`Lower temperature and higher pressure favour adsorption.`,
        ],
        figure: {
          alt: "x/m against P at two temperatures: the curve for the lower temperature lies above the curve for the higher one, so more gas is adsorbed when it is colder.",
          axes: "xy",
          chart: { x: 4, y: 2, xTitle: "P", yTitle: "x/m" },
          view: { x: [0, 17], y: [0, 11] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.2, 1.118], [0.4, 1.581], [0.6, 1.936], [0.8, 2.236], [1, 2.5], [1.2, 2.739], [1.4, 2.958], [1.6, 3.162], [1.8, 3.354], [2, 3.536], [2.2, 3.708], [2.4, 3.873], [2.6, 4.031], [2.8, 4.183], [3, 4.33], [3.2, 4.472], [3.4, 4.61], [3.6, 4.743], [3.8, 4.873], [4, 5], [4.2, 5.123], [4.4, 5.244], [4.6, 5.362], [4.8, 5.477], [5, 5.59], [5.2, 5.701], [5.4, 5.809], [5.6, 5.916], [5.8, 6.021], [6, 6.124], [6.2, 6.225], [6.4, 6.325], [6.6, 6.423], [6.8, 6.519], [7, 6.614], [7.2, 6.708], [7.4, 6.801], [7.6, 6.892], [7.8, 6.982], [8, 7.071], [8.2, 7.159], [8.4, 7.246], [8.6, 7.331], [8.8, 7.416], [9, 7.5], [9.2, 7.583], [9.4, 7.665], [9.6, 7.746], [9.8, 7.826], [10, 7.906], [10.2, 7.984], [10.4, 8.062], [10.6, 8.139], [10.8, 8.216], [11, 8.292], [11.2, 8.367], [11.4, 8.441], [11.6, 8.515], [11.8, 8.588], [12, 8.66], [12.2, 8.732], [12.4, 8.803], [12.6, 8.874], [12.8, 8.944], [13, 9.014], [13.2, 9.083], [13.4, 9.152], [13.6, 9.22], [13.8, 9.287], [14, 9.354], [14.2, 9.421], [14.4, 9.487], [14.6, 9.552], [14.8, 9.618], [15, 9.682], [15.2, 9.747], [15.4, 9.811], [15.6, 9.874], [15.8, 9.937], [16, 10]], step: 1 },
            { kind: "curve", points: [[0, 0], [0.2, 0.671], [0.4, 0.949], [0.6, 1.162], [0.8, 1.342], [1, 1.5], [1.2, 1.643], [1.4, 1.775], [1.6, 1.897], [1.8, 2.012], [2, 2.121], [2.2, 2.225], [2.4, 2.324], [2.6, 2.419], [2.8, 2.51], [3, 2.598], [3.2, 2.683], [3.4, 2.766], [3.6, 2.846], [3.8, 2.924], [4, 3], [4.2, 3.074], [4.4, 3.146], [4.6, 3.217], [4.8, 3.286], [5, 3.354], [5.2, 3.421], [5.4, 3.486], [5.6, 3.55], [5.8, 3.612], [6, 3.674], [6.2, 3.735], [6.4, 3.795], [6.6, 3.854], [6.8, 3.912], [7, 3.969], [7.2, 4.025], [7.4, 4.08], [7.6, 4.135], [7.8, 4.189], [8, 4.243], [8.2, 4.295], [8.4, 4.347], [8.6, 4.399], [8.8, 4.45], [9, 4.5], [9.2, 4.55], [9.4, 4.599], [9.6, 4.648], [9.8, 4.696], [10, 4.743], [10.2, 4.791], [10.4, 4.837], [10.6, 4.884], [10.8, 4.93], [11, 4.975], [11.2, 5.02], [11.4, 5.065], [11.6, 5.109], [11.8, 5.153], [12, 5.196], [12.2, 5.239], [12.4, 5.282], [12.6, 5.324], [12.8, 5.367], [13, 5.408], [13.2, 5.45], [13.4, 5.491], [13.6, 5.532], [13.8, 5.572], [14, 5.612], [14.2, 5.652], [14.4, 5.692], [14.6, 5.731], [14.8, 5.771], [15, 5.809], [15.2, 5.848], [15.4, 5.886], [15.6, 5.925], [15.8, 5.962], [16, 6]], step: 1, tone: "muted" },
            { kind: "label", at: [11, 9.2], label: "lower T", labelAt: "nw", step: 2 },
            { kind: "label", at: [16, 6], label: "higher T", labelAt: "nw", tone: "muted", step: 2 },
          ],
        },
      },
      {
        title: "Freundlich isotherm",
        points: [
          t`$\dfrac{x}{m} = kP^{1/n}$, with $n > 1$, at constant temperature.`,
          t`$x$: mass adsorbed; $m$: mass of adsorbent.`,
        ],
        figure: {
          alt: "The Freundlich curve x/m = kP^(1/n) with k = 2, n = 2: at P = 4, x/m = 4; at P = 16, x/m = 8. Four times the pressure only doubles the amount adsorbed.",
          axes: "xy",
          chart: { x: 4, y: 2, xTitle: "P", yTitle: "x/m" },
          view: { x: [0, 17], y: [0, 11] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.2, 0.894], [0.4, 1.265], [0.6, 1.549], [0.8, 1.789], [1, 2], [1.2, 2.191], [1.4, 2.366], [1.6, 2.53], [1.8, 2.683], [2, 2.828], [2.2, 2.966], [2.4, 3.098], [2.6, 3.225], [2.8, 3.347], [3, 3.464], [3.2, 3.578], [3.4, 3.688], [3.6, 3.795], [3.8, 3.899], [4, 4], [4.2, 4.099], [4.4, 4.195], [4.6, 4.29], [4.8, 4.382], [5, 4.472], [5.2, 4.561], [5.4, 4.648], [5.6, 4.733], [5.8, 4.817], [6, 4.899], [6.2, 4.98], [6.4, 5.06], [6.6, 5.138], [6.8, 5.215], [7, 5.292], [7.2, 5.367], [7.4, 5.441], [7.6, 5.514], [7.8, 5.586], [8, 5.657], [8.2, 5.727], [8.4, 5.797], [8.6, 5.865], [8.8, 5.933], [9, 6], [9.2, 6.066], [9.4, 6.132], [9.6, 6.197], [9.8, 6.261], [10, 6.325], [10.2, 6.387], [10.4, 6.45], [10.6, 6.512], [10.8, 6.573], [11, 6.633], [11.2, 6.693], [11.4, 6.753], [11.6, 6.812], [11.8, 6.87], [12, 6.928], [12.2, 6.986], [12.4, 7.043], [12.6, 7.099], [12.8, 7.155], [13, 7.211], [13.2, 7.266], [13.4, 7.321], [13.6, 7.376], [13.8, 7.43], [14, 7.483], [14.2, 7.537], [14.4, 7.589], [14.6, 7.642], [14.8, 7.694], [15, 7.746], [15.2, 7.797], [15.4, 7.849], [15.6, 7.899], [15.8, 7.95], [16, 8]], step: 1 },
            { kind: "point", at: [4, 4], label: "(4, 4)", labelAt: "se", step: 2 },
            { kind: "point", at: [16, 8], label: "(16, 8)", labelAt: "nw", step: 2 },
          ],
        },
      },
      {
        title: "Testing it",
        points: [
          t`$\log\dfrac{x}{m} = \log k + \dfrac1n \log P$.`,
          t`A straight line: slope $1/n$, intercept $\log k$.`,
        ],
        figure: {
          alt: "log(x/m) against log P is a straight line. It cuts the vertical axis at log k and rises with slope 1/n.",
          axes: "xy",
          chart: { x: 0.5, y: 0.5, xTitle: "log P", yTitle: "log(x/m)" },
          view: { x: [0, 2.2], y: [0, 1.6] },
          elements: [
            { kind: "segment", from: [0, 0.3], to: [2, 1.3], step: 1 },
            { kind: "label", at: [0, 0.3], label: "log k", labelAt: "se", step: 2 },
            { kind: "segment", from: [0.6, 0.6], to: [1.6, 0.6], dashed: true, tone: "good", step: 2 },
            { kind: "segment", from: [1.6, 0.6], to: [1.6, 1.1], dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [1.6, 0.85], label: "slope 1/n", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`For a gas, $k = 3$ and $n = 2$. Find $x/m$ at $P = 4$.`,
      steps: [
        t`$\dfrac{x}{m} = 3 \times 4^{1/2}$.`,
        t`$= 3 \times 2 = 6$.`,
      ],
      answer: t`6`,
      figure: {
        alt: "x/m = 3P^(1/2): at P = 4 the curve gives x/m = 6.",
        axes: "xy",
        chart: { x: 4, y: 2, xTitle: "P", yTitle: "x/m" },
        view: { x: [0, 17], y: [0, 13] },
        elements: [
          { kind: "curve", points: [[0, 0], [0.2, 1.342], [0.4, 1.897], [0.6, 2.324], [0.8, 2.683], [1, 3], [1.2, 3.286], [1.4, 3.55], [1.6, 3.795], [1.8, 4.025], [2, 4.243], [2.2, 4.45], [2.4, 4.648], [2.6, 4.837], [2.8, 5.02], [3, 5.196], [3.2, 5.367], [3.4, 5.532], [3.6, 5.692], [3.8, 5.848], [4, 6], [4.2, 6.148], [4.4, 6.293], [4.6, 6.434], [4.8, 6.573], [5, 6.708], [5.2, 6.841], [5.4, 6.971], [5.6, 7.099], [5.8, 7.225], [6, 7.348], [6.2, 7.47], [6.4, 7.589], [6.6, 7.707], [6.8, 7.823], [7, 7.937], [7.2, 8.05], [7.4, 8.161], [7.6, 8.27], [7.8, 8.379], [8, 8.485], [8.2, 8.591], [8.4, 8.695], [8.6, 8.798], [8.8, 8.899], [9, 9], [9.2, 9.099], [9.4, 9.198], [9.6, 9.295], [9.8, 9.391], [10, 9.487], [10.2, 9.581], [10.4, 9.675], [10.6, 9.767], [10.8, 9.859], [11, 9.95], [11.2, 10.04], [11.4, 10.129], [11.6, 10.218], [11.8, 10.305], [12, 10.392], [12.2, 10.479], [12.4, 10.564], [12.6, 10.649], [12.8, 10.733], [13, 10.817], [13.2, 10.9], [13.4, 10.982], [13.6, 11.063], [13.8, 11.145], [14, 11.225], [14.2, 11.305], [14.4, 11.384], [14.6, 11.463], [14.8, 11.541], [15, 11.619], [15.2, 11.696], [15.4, 11.773], [15.6, 11.849], [15.8, 11.925], [16, 12]], step: 1 },
          { kind: "segment", from: [4, 0], to: [4, 6], dashed: true, tone: "muted", step: 1 },
          { kind: "point", at: [4, 6], label: "(4, 6)", labelAt: "se", step: 2 },
        ],
      },
    },
    figure: {
      alt: "Mass of gas adsorbed per gram of adsorbent, x/m, against pressure: it rises steeply at low pressure, then more and more slowly as the surface fills.",
      axes: "xy",
      chart: { x: 4, y: 2, xTitle: "P", yTitle: "x/m" },
      view: { x: [0, 17], y: [0, 11] },
      elements: [
        { kind: "curve", points: [[0, 0], [0.2, 0.894], [0.4, 1.265], [0.6, 1.549], [0.8, 1.789], [1, 2], [1.2, 2.191], [1.4, 2.366], [1.6, 2.53], [1.8, 2.683], [2, 2.828], [2.2, 2.966], [2.4, 3.098], [2.6, 3.225], [2.8, 3.347], [3, 3.464], [3.2, 3.578], [3.4, 3.688], [3.6, 3.795], [3.8, 3.899], [4, 4], [4.2, 4.099], [4.4, 4.195], [4.6, 4.29], [4.8, 4.382], [5, 4.472], [5.2, 4.561], [5.4, 4.648], [5.6, 4.733], [5.8, 4.817], [6, 4.899], [6.2, 4.98], [6.4, 5.06], [6.6, 5.138], [6.8, 5.215], [7, 5.292], [7.2, 5.367], [7.4, 5.441], [7.6, 5.514], [7.8, 5.586], [8, 5.657], [8.2, 5.727], [8.4, 5.797], [8.6, 5.865], [8.8, 5.933], [9, 6], [9.2, 6.066], [9.4, 6.132], [9.6, 6.197], [9.8, 6.261], [10, 6.325], [10.2, 6.387], [10.4, 6.45], [10.6, 6.512], [10.8, 6.573], [11, 6.633], [11.2, 6.693], [11.4, 6.753], [11.6, 6.812], [11.8, 6.87], [12, 6.928], [12.2, 6.986], [12.4, 7.043], [12.6, 7.099], [12.8, 7.155], [13, 7.211], [13.2, 7.266], [13.4, 7.321], [13.6, 7.376], [13.8, 7.43], [14, 7.483], [14.2, 7.537], [14.4, 7.589], [14.6, 7.642], [14.8, 7.694], [15, 7.746], [15.2, 7.797], [15.4, 7.849], [15.6, 7.899], [15.8, 7.95], [16, 8]], step: 1 },
        { kind: "label", at: [10, 7.6], label: "x/m = kP^(1/n)", labelAt: "nw", step: 3 },
      ],
    },
    visualSpec: t`Raise the pressure over an adsorbent and plot how much gas it holds.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks a fine powder is lighter.",
      remediation: "Its mass is the same; its surface area is far larger.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks fine particles are hotter.",
      remediation: "More surface area, not heat, increases adsorption.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks it reacts faster.",
      remediation: "Adsorption depends on surface area.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks the lightest gas.",
      remediation: t`$\ce{H2}$ is hard to liquefy and is adsorbed least.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks the most abundant gas.",
      remediation: t`Ease of liquefaction decides: $\ce{NH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks the most reactive gas.",
      remediation: "For physisorption, the most easily liquefied gas is adsorbed most.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: t`Divides $P$ by $n$.`,
      remediation: t`$P^{1/n}$ is a root: $16^{1/2} = 4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Raises $P$ to the power $n$.`,
      remediation: t`The power is $1/n$, not $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Drops the power.",
      remediation: t`$x/m$ grows as $P^{1/n}$, not $P$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Gives the intercept.",
      remediation: t`The intercept is $\log k$; take its antilog.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Takes the antilog of the slope.",
      remediation: t`The slope gives $1/n$; the intercept gives $\log k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: t`Uses $e$ instead of 10.`,
      remediation: t`$\log$ is base 10: $k = 10^{0.3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: t`Writes $P^n$.`,
      remediation: t`Adsorption grows more slowly than $P$: the power is $1/n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: t`Writes $k/P$.`,
      remediation: "Adsorption rises with pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: t`Writes $kP$.`,
      remediation: t`The curve flattens: $P^{1/n}$ with $n > 1$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (H)" },
      stem: t`A finely divided substance is a better adsorbent because`,
      verify: { kind: "value", inputs: {  }, params: { q: "fine" } },
      options: [
        { key: "A", text: t`its particles are hotter`, correct: false, misconceptionId: "C03-M2", value: "hotter" },
        { key: "B", text: t`it reacts faster chemically`, correct: false, misconceptionId: "C03-M3", value: "reacts_faster" },
        { key: "C", text: t`it is lighter`, correct: false, misconceptionId: "C03-M1", value: "lighter" },
        { key: "D", text: t`it has a larger surface area`, correct: true, value: "more_area" },
      ],
      solution: {
        steps: [
          t`Dividing a solid finely exposes more surface.`,
          t`More surface, more adsorption.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.7 (a)" },
      stem: t`Which gas is adsorbed most by charcoal?`,
      verify: { kind: "value", inputs: {  }, params: { q: "gas" } },
      options: [
        { key: "A", text: t`$\ce{NH3}$, the most easily liquefied`, correct: true, value: "ammonia" },
        { key: "B", text: t`$\ce{O2}$`, correct: false, misconceptionId: "C03-M6", value: "oxygen" },
        { key: "C", text: t`$\ce{N2}$`, correct: false, misconceptionId: "C03-M5", value: "nitrogen" },
        { key: "D", text: t`$\ce{H2}$`, correct: false, misconceptionId: "C03-M4", value: "hydrogen" },
      ],
      solution: {
        steps: [
          t`$\ce{NH3}$ has the highest critical temperature.`,
          t`It is adsorbed most.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`For a gas, $\dfrac{x}{m} = kP^{1/n}$ with $k = 2$ and $n = 2$. Find $\dfrac{x}{m}$ at $P = 16$ (same units).`,
      verify: { kind: "value", inputs: { k: "2", n: "2", P: "16" }, params: { q: "xm" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C03-M7", value: "16" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$32$`, correct: false, misconceptionId: "C03-M9", value: "32" },
        { key: "D", text: t`$512$`, correct: false, misconceptionId: "C03-M8", value: "512" },
      ],
      solution: {
        steps: [
          t`$\dfrac{x}{m} = 2 \times 16^{1/2}$.`,
          t`$= 2 \times 4 = 8$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.4 (B)" },
      stem: t`A plot of $\log\dfrac{x}{m}$ against $\log P$ is a straight line with slope 0.5 and intercept 0.3. Find $k$.`,
      verify: { kind: "value", inputs: { c: "0.3", s: "0.5" }, params: { q: "k_from_plot" } },
      options: [
        { key: "A", text: t`$3.16$`, correct: false, misconceptionId: "C03-M11", value: "3.16000000000000" },
        { key: "B", text: t`$1.35$`, correct: false, misconceptionId: "C03-M12", value: "1.35000000000000" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$0.3$`, correct: false, misconceptionId: "C03-M10", value: "0.300000000000000" },
      ],
      solution: {
        steps: [
          t`Intercept $= \log k = 0.3$.`,
          t`$k = 10^{0.3} = 2$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.2 (C)" },
      stem: t`The Freundlich adsorption isotherm is`,
      verify: { kind: "value", inputs: {  }, params: { q: "equation" } },
      options: [
        { key: "A", text: t`$\dfrac{x}{m} = kP$`, correct: false, misconceptionId: "C03-M15", value: "k_p" },
        { key: "B", text: t`$\dfrac{x}{m} = kP^{n}$`, correct: false, misconceptionId: "C03-M13", value: "k_p_n" },
        { key: "C", text: t`$\dfrac{x}{m} = \dfrac{k}{P}$`, correct: false, misconceptionId: "C03-M14", value: "k_over_p" },
        { key: "D", text: t`$\dfrac{x}{m} = kP^{1/n}$`, correct: true, value: "k_p_1_over_n" },
      ],
      solution: {
        steps: [
          t`Adsorption rises with pressure, ever more slowly.`,
          t`$\dfrac{x}{m} = kP^{1/n}$.`,
        ],
      },
    },
  ],
};
