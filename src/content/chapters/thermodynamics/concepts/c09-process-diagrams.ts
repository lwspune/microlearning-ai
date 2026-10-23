import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`An engineer's notes show a gas's cycle on a graph of volume against temperature. To find the work it does, they need its $p$-$V$ diagram. How can they redraw it?`,
    reveal: t`Each step of the cycle keeps one quantity fixed. Spot which one from the $V$-$T$ graph, and $pV = nRT$ tells you how the step looks on the $p$-$V$ graph.`,
  },
  explanation: {
    intuition: [
      t`A gas's state can be plotted on a $p$-$V$, a $V$-$T$ or a $p$-$T$ diagram.`,
      t`Most processes keep one quantity fixed: pressure, volume or temperature.`,
      t`On a $p$-$V$ diagram, constant pressure is a horizontal line and constant volume a vertical one.`,
      t`Constant temperature gives a curve, $pV = $ constant: a hyperbola.`,
      t`$pV = nRT$ tells you what each process looks like on the other diagrams too.`,
    ],
    formal: [
      {
        title: "One process, three diagrams",
        points: [
          t`**Isobaric** ($p$ fixed): horizontal on $p$-$V$ and $p$-$T$; through the origin on $V$-$T$.`,
          t`**Isochoric** ($V$ fixed): vertical on $p$-$V$, horizontal on $V$-$T$; through the origin on $p$-$T$.`,
          t`**Isothermal** ($T$ fixed): a hyperbola on $p$-$V$; vertical on $V$-$T$ and $p$-$T$.`,
          t`At constant volume, $p \propto T$: cooling lowers the pressure.`,
        ],
        figure: {
          alt: "A p-V graph with three processes from state O: isobaric, horizontal; isochoric, vertical; isothermal, a hyperbola.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 8], y: [0, 4.5] },
          elements: [
            { kind: "point", at: [3, 3], label: "O", labelAt: "nw" },
            { kind: "vector", from: [3, 3], to: [6, 3] },
            { kind: "label", at: [6.05, 3], label: "isobaric", labelAt: "e" },
            { kind: "vector", from: [3, 3], to: [3, 0.8] },
            { kind: "label", at: [3.05, 0.8], label: "isochoric", labelAt: "e" },
            { kind: "curve", points: [[3, 3], [3.0875, 2.915], [3.175, 2.8346], [3.2625, 2.7586], [3.35, 2.6866], [3.4375, 2.6182], [3.525, 2.5532], [3.6125, 2.4913], [3.7, 2.4324], [3.7875, 2.3762], [3.875, 2.3226], [3.9625, 2.2713], [4.05, 2.2222], [4.1375, 2.1752], [4.225, 2.1302], [4.3125, 2.087], [4.4, 2.0455], [4.4875, 2.0056], [4.575, 1.9672], [4.6625, 1.9303], [4.75, 1.8947], [4.8375, 1.8605], [4.925, 1.8274], [5.0125, 1.7955], [5.1, 1.7647], [5.1875, 1.7349], [5.275, 1.7062], [5.3625, 1.6783], [5.45, 1.6514], [5.5375, 1.6253], [5.625, 1.6], [5.7125, 1.5755], [5.8, 1.5517], [5.8875, 1.5287], [5.975, 1.5063], [6.0625, 1.4845], [6.15, 1.4634], [6.2375, 1.4429], [6.325, 1.4229], [6.4125, 1.4035], [6.5, 1.3846]] },
            { kind: "label", at: [5.2, 1.85], label: "isothermal", labelAt: "e" },
          ],
        },
      },
      {
        title: "Redrawing a cycle",
        points: [
          t`Read each step: which quantity stays fixed, and which way the others change.`,
          t`On this $V$-$T$ diagram, A to B lies on a line through the origin: $V \propto T$, so it is isobaric.`,
          t`B to C is horizontal: $V$ fixed while $T$ falls, so it is isochoric and $p$ falls.`,
          t`C to A is vertical: $T$ fixed, so it is isothermal, a compression.`,
          t`Draw each step on the new axes, keeping the order of the states.`,
        ],
        figure: {
          alt: "A V-T diagram of a cycle: A to B along a straight line through the origin, B to C horizontally back to A's temperature, and C to A straight down.",
          chart: { x: 100, y: 1, xTitle: "T (K)", yTitle: "V (L)" },
          view: { x: [0, 700], y: [0, 5] },
          elements: [
            { kind: "vector", from: [300, 2], to: [600, 4] },
            { kind: "vector", from: [600, 4], to: [300, 4] },
            { kind: "vector", from: [300, 4], to: [300, 2] },
            { kind: "point", at: [300, 2], label: "A", labelAt: "se" },
            { kind: "point", at: [600, 4], label: "B", labelAt: "ne" },
            { kind: "point", at: [300, 4], label: "C", labelAt: "nw" },
            { kind: "segment", from: [0, 0], to: [300, 2], dashed: true, tone: "muted" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Redraw the cycle on the $V$-$T$ diagram above as a $p$-$V$ diagram. At A the gas is at $4 \times 10^{5}\ \mathrm{Pa}$, $2\ \mathrm{L}$ and $300\ \mathrm{K}$; B is at $600\ \mathrm{K}$.`,
      steps: [
        t`A to B: isobaric, $V$ doubling with $T$: a horizontal line from $2\ \mathrm{L}$ to $4\ \mathrm{L}$ at $4 \times 10^{5}\ \mathrm{Pa}$.`,
        t`B to C: isochoric at $4\ \mathrm{L}$, $T$ halving: $p$ halves to $2 \times 10^{5}\ \mathrm{Pa}$, a vertical line down.`,
        t`C to A: isothermal at $300\ \mathrm{K}$, $pV = 8$ throughout: a hyperbola back to A.`,
        t`The loop runs clockwise, so the gas does net work in each cycle.`,
      ],
      answer: t`A horizontal line, a vertical drop, then an isotherm back to A`,
      figure: {
        alt: "A p-V graph. At step 1, A to B, a horizontal line. At step 2, B to C, a vertical drop. At step 3, C back to A along a hyperbola.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 6], y: [0, 5] },
        elements: [
          { kind: "point", at: [2, 4], label: "A", labelAt: "nw", step: 1 },
          { kind: "vector", from: [2, 4], to: [4, 4], step: 1 },
          { kind: "point", at: [4, 4], label: "B", labelAt: "ne", step: 1 },
          { kind: "vector", from: [4, 4], to: [4, 2], step: 2 },
          { kind: "point", at: [4, 2], label: "C", labelAt: "se", step: 2 },
          { kind: "curve", points: [[2, 4], [2.05, 3.9024], [2.1, 3.8095], [2.15, 3.7209], [2.2, 3.6364], [2.25, 3.5556], [2.3, 3.4783], [2.35, 3.4043], [2.4, 3.3333], [2.45, 3.2653], [2.5, 3.2], [2.55, 3.1373], [2.6, 3.0769], [2.65, 3.0189], [2.7, 2.963], [2.75, 2.9091], [2.8, 2.8571], [2.85, 2.807], [2.9, 2.7586], [2.95, 2.7119], [3, 2.6667], [3.05, 2.623], [3.1, 2.5806], [3.15, 2.5397], [3.2, 2.5], [3.25, 2.4615], [3.3, 2.4242], [3.35, 2.3881], [3.4, 2.3529], [3.45, 2.3188], [3.5, 2.2857], [3.55, 2.2535], [3.6, 2.2222], [3.65, 2.1918], [3.7, 2.1622], [3.75, 2.1333], [3.8, 2.1053], [3.85, 2.0779], [3.9, 2.0513], [3.95, 2.0253], [4, 2]], step: 3 },
        ],
      },
    },
    figure: {
      alt: "A p-V graph with three processes from state O. At point 3, an isobaric one, horizontal, and an isochoric one, vertical. At point 4, an isothermal one, a falling curve.",
      chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
      view: { x: [0, 8], y: [0, 4.5] },
      elements: [
        { kind: "point", at: [3, 3], label: "O", labelAt: "nw" },
        { kind: "vector", from: [3, 3], to: [6, 3], step: 3 },
        { kind: "label", at: [6.05, 3], label: "isobaric", labelAt: "e", step: 3 },
        { kind: "vector", from: [3, 3], to: [3, 0.8], step: 3 },
        { kind: "label", at: [3.05, 0.8], label: "isochoric", labelAt: "e", step: 3 },
        { kind: "curve", points: [[3, 3], [3.0875, 2.915], [3.175, 2.8346], [3.2625, 2.7586], [3.35, 2.6866], [3.4375, 2.6182], [3.525, 2.5532], [3.6125, 2.4913], [3.7, 2.4324], [3.7875, 2.3762], [3.875, 2.3226], [3.9625, 2.2713], [4.05, 2.2222], [4.1375, 2.1752], [4.225, 2.1302], [4.3125, 2.087], [4.4, 2.0455], [4.4875, 2.0056], [4.575, 1.9672], [4.6625, 1.9303], [4.75, 1.8947], [4.8375, 1.8605], [4.925, 1.8274], [5.0125, 1.7955], [5.1, 1.7647], [5.1875, 1.7349], [5.275, 1.7062], [5.3625, 1.6783], [5.45, 1.6514], [5.5375, 1.6253], [5.625, 1.6], [5.7125, 1.5755], [5.8, 1.5517], [5.8875, 1.5287], [5.975, 1.5063], [6.0625, 1.4845], [6.15, 1.4634], [6.2375, 1.4429], [6.325, 1.4229], [6.4125, 1.4035], [6.5, 1.3846]], step: 4 },
        { kind: "label", at: [5.2, 1.85], label: "isothermal", labelAt: "e", step: 4 },
      ],
    },
    visualSpec: t`Trace one gas cycle on a $V$-$T$ diagram and watch the same steps appear, one by one, on its $p$-$V$ diagram.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Mixes up isobaric and isochoric.",
      remediation: t`Iso**baric** keeps $p$ fixed; iso**choric** keeps $V$ fixed.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C09-M2",
      mistake: "Mixes up isothermal and isobaric.",
      remediation: t`Isothermal keeps $T$ fixed; isobaric keeps $p$ fixed. Check which quantity the line holds constant.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M3",
      mistake: "Draws an isotherm as a hyperbola on every diagram.",
      remediation: t`Only on a $p$-$V$ diagram is an isotherm a hyperbola; with $T$ on an axis, $T$ fixed is a vertical line.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M4",
      mistake: "Takes an inverse proportion where it is direct.",
      remediation: t`At constant $p$, $V \propto T$; at constant $V$, $p \propto T$. Both give lines through the origin.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Mixes up isothermal and isochoric.",
      remediation: t`Isothermal keeps $T$ fixed; isochoric keeps $V$ fixed.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks the pressure rises as a gas cools at constant volume.",
      remediation: t`At constant volume $p \propto T$: as the gas cools, its pressure falls.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: t`Draws an isotherm on a $p$-$V$ diagram as a straight line.`,
      remediation: t`$pV = $ constant gives $p \propto \dfrac{1}{V}$, a hyperbola, not a straight line.`,
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.9" },
      stem: t`An ideal gas expands at constant pressure. What does this process look like on a $V$-$T$ diagram, with $V$ up and $T$ across?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isobar_VT" } },
      options: [
        { key: "A", text: t`A vertical straight line`, correct: false, misconceptionId: "C09-M2", value: "vertical" },
        { key: "B", text: t`A curve, a hyperbola`, correct: false, misconceptionId: "C09-M4", value: "hyperbola" },
        { key: "C", text: t`A straight line that passes through the origin`, correct: true, value: "through_origin" },
        { key: "D", text: t`A horizontal straight line`, correct: false, misconceptionId: "C09-M1", value: "horizontal" },
      ],
      solution: {
        steps: [
          t`At constant pressure, $V = \dfrac{nR}{p}T$, so $V \propto T$.`,
          t`On a $V$-$T$ diagram that is a straight line through the origin.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.9" },
      stem: t`An ideal gas is compressed at constant temperature. What does this process look like on a $V$-$T$ diagram, with $V$ up and $T$ across?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isotherm_VT" } },
      options: [
        { key: "A", text: t`A vertical straight line`, correct: true, value: "vertical" },
        { key: "B", text: t`A straight line that passes through the origin`, correct: false, misconceptionId: "C09-M2", value: "through_origin" },
        { key: "C", text: t`A curve, a hyperbola`, correct: false, misconceptionId: "C09-M3", value: "hyperbola" },
        { key: "D", text: t`A horizontal straight line`, correct: false, misconceptionId: "C09-M5", value: "horizontal" },
      ],
      solution: {
        steps: [
          t`At constant temperature, $T$ does not change while $V$ does.`,
          t`With $T$ across and $V$ up, that is a vertical line.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.9" },
      stem: t`On the $V$-$T$ diagram shown, the gas goes from B to C at constant volume while it cools. What does B to C look like on a $p$-$V$ diagram?`,
      figure: {
        alt: "A V-T diagram: from A, a straight line through the origin up to B; from B, a horizontal line back to C at A's temperature; from C, a vertical line down to A.",
        chart: { x: 100, y: 1, xTitle: "T (K)", yTitle: "V (L)" },
        view: { x: [0, 700], y: [0, 5] },
        elements: [
          { kind: "vector", from: [300, 2], to: [600, 4] },
          { kind: "vector", from: [600, 4], to: [300, 4] },
          { kind: "vector", from: [300, 4], to: [300, 2] },
          { kind: "point", at: [300, 2], label: "A", labelAt: "se" },
          { kind: "point", at: [600, 4], label: "B", labelAt: "ne" },
          { kind: "point", at: [300, 4], label: "C", labelAt: "nw" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { ask: "cooling_pV" } },
      options: [
        { key: "A", text: t`A horizontal line, the volume falling`, correct: false, misconceptionId: "C09-M1", value: "horizontal_V_falls" },
        { key: "B", text: t`A curve, a hyperbola`, correct: false, misconceptionId: "C09-M5", value: "hyperbola" },
        { key: "C", text: t`A vertical line, the pressure rising`, correct: false, misconceptionId: "C09-M6", value: "vertical_p_rises" },
        { key: "D", text: t`A vertical line, the pressure falling`, correct: true, value: "vertical_p_falls" },
      ],
      solution: {
        steps: [
          t`B to C keeps $V$ fixed, so on a $p$-$V$ diagram it is a vertical line.`,
          t`At constant $V$, $p \propto T$; $T$ falls, so $p$ falls: the line runs down.`,
        ],
        figure: {
          alt: "The cycle on a p-V diagram: A to B horizontal, B to C a vertical drop, C to A a hyperbola.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 6], y: [0, 5] },
          elements: [
            { kind: "point", at: [2, 4], label: "A", labelAt: "nw" },
            { kind: "vector", from: [2, 4], to: [4, 4] },
            { kind: "point", at: [4, 4], label: "B", labelAt: "ne" },
            { kind: "vector", from: [4, 4], to: [4, 2] },
            { kind: "point", at: [4, 2], label: "C", labelAt: "se" },
            { kind: "curve", points: [[2, 4], [2.05, 3.9024], [2.1, 3.8095], [2.15, 3.7209], [2.2, 3.6364], [2.25, 3.5556], [2.3, 3.4783], [2.35, 3.4043], [2.4, 3.3333], [2.45, 3.2653], [2.5, 3.2], [2.55, 3.1373], [2.6, 3.0769], [2.65, 3.0189], [2.7, 2.963], [2.75, 2.9091], [2.8, 2.8571], [2.85, 2.807], [2.9, 2.7586], [2.95, 2.7119], [3, 2.6667], [3.05, 2.623], [3.1, 2.5806], [3.15, 2.5397], [3.2, 2.5], [3.25, 2.4615], [3.3, 2.4242], [3.35, 2.3881], [3.4, 2.3529], [3.45, 2.3188], [3.5, 2.2857], [3.55, 2.2535], [3.6, 2.2222], [3.65, 2.1918], [3.7, 2.1622], [3.75, 2.1333], [3.8, 2.1053], [3.85, 2.0779], [3.9, 2.0513], [3.95, 2.0253], [4, 2]] },
          ],
        },
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.11" },
      stem: t`A fixed mass of ideal gas is heated at constant volume. What does this process look like on a $p$-$T$ diagram, with $p$ up and $T$ across?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isochore_pT" } },
      options: [
        { key: "A", text: t`A straight line that passes through the origin`, correct: true, value: "through_origin" },
        { key: "B", text: t`A horizontal straight line`, correct: false, misconceptionId: "C09-M1", value: "horizontal" },
        { key: "C", text: t`A curve, a hyperbola`, correct: false, misconceptionId: "C09-M4", value: "hyperbola" },
        { key: "D", text: t`A vertical straight line`, correct: false, misconceptionId: "C09-M5", value: "vertical" },
      ],
      solution: {
        steps: [
          t`At constant volume, $p = \dfrac{nR}{V}T$, so $p \propto T$.`,
          t`On a $p$-$T$ diagram that is a straight line through the origin.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.11" },
      stem: t`What does an isothermal process of an ideal gas look like on a $p$-$V$ diagram?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isotherm_pV" } },
      options: [
        { key: "A", text: t`A vertical straight line`, correct: false, misconceptionId: "C09-M5", value: "vertical" },
        { key: "B", text: t`A straight line sloping down`, correct: false, misconceptionId: "C09-M7", value: "sloping_line" },
        { key: "C", text: t`A curve, a hyperbola`, correct: true, value: "hyperbola" },
        { key: "D", text: t`A horizontal straight line`, correct: false, misconceptionId: "C09-M2", value: "horizontal" },
      ],
      solution: {
        steps: [
          t`At constant temperature, $pV = nRT$ is constant, so $p \propto \dfrac{1}{V}$.`,
          t`That is a hyperbola on a $p$-$V$ diagram.`,
        ],
      },
    },
  ],
};
