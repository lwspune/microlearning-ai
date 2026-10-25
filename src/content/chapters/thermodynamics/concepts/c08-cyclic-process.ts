import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`A car engine's gas is heated, pushes the piston, is pushed back and starts again, thousands of times a minute. If it keeps coming back to where it began, how does it do any useful work?`,
    reveal: t`Over each cycle its internal energy returns to the same value, but the work out on expansion is larger than the work in on compression. The difference, the area of the loop, is useful work.`,
  },
  explanation: {
    intuition: [
      t`In a **cyclic process**, a system goes through a series of changes and comes back to its starting state.`,
      t`Its internal energy is back where it began: $\Delta U = 0$.`,
      t`So by the first law, the net heat taken in equals the net work done: $Q = W$.`,
      t`On a $p$-$V$ diagram the net work is the area enclosed by the loop.`,
      t`Run clockwise, the gas does net work, like an engine; anticlockwise, work is done on it, like a refrigerator.`,
    ],
    formal: [
      {
        title: "Cyclic process",
        points: [
          t`A **cyclic process** takes a system through changes back to its first state.`,
          t`Internal energy is a state variable, so over a cycle $\Delta U = 0$.`,
          t`The first law then gives $Q = W$: the net heat in equals the net work out.`,
          t`$Q$ and $W$ are not zero themselves; only their difference is.`,
        ],
        figure: {
          alt: "A p-V graph: a rectangular cycle A to B to C to D and back to A, which ends where it started.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 5] },
          elements: [
            { kind: "vector", from: [1.5, 4], to: [5.5, 4] },
            { kind: "vector", from: [5.5, 4], to: [5.5, 1.5] },
            { kind: "vector", from: [5.5, 1.5], to: [1.5, 1.5] },
            { kind: "vector", from: [1.5, 1.5], to: [1.5, 4] },
            { kind: "point", at: [1.5, 4], label: "A", labelAt: "nw" },
            { kind: "point", at: [5.5, 4], label: "B", labelAt: "ne" },
            { kind: "point", at: [5.5, 1.5], label: "C", labelAt: "se" },
            { kind: "point", at: [1.5, 1.5], label: "D", labelAt: "sw" },
          ],
        },
      },
      {
        title: "Net work: the enclosed area",
        points: [
          t`On expansion, from A to B, the gas does positive work: the area under AB.`,
          t`On compression, from C to D, work is done on it: minus the area under CD.`,
          t`The net work is the difference: the area enclosed by the loop.`,
          t`Clockwise, the net work done by the gas is positive; anticlockwise, it is negative.`,
        ],
        figure: {
          alt: "A p-V graph of the cycle A B C D. At point 1, the area under AB shaded. At point 3, the enclosed area shaded darker: the net work, the area under AB minus the area under CD.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 5] },
          elements: [
            { kind: "vector", from: [1.5, 4], to: [5.5, 4] },
            { kind: "vector", from: [5.5, 4], to: [5.5, 1.5] },
            { kind: "vector", from: [5.5, 1.5], to: [1.5, 1.5] },
            { kind: "vector", from: [1.5, 1.5], to: [1.5, 4] },
            { kind: "point", at: [1.5, 4], label: "A", labelAt: "nw" },
            { kind: "point", at: [5.5, 4], label: "B", labelAt: "ne" },
            { kind: "point", at: [5.5, 1.5], label: "C", labelAt: "se" },
            { kind: "point", at: [1.5, 1.5], label: "D", labelAt: "sw" },
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1.5, 0], [5.5, 0]] }, { kind: "halfPlane", through: [[5.5, 0], [5.5, 4]] }, { kind: "halfPlane", through: [[5.5, 4], [1.5, 4]] }, { kind: "halfPlane", through: [[1.5, 4], [1.5, 0]] }], step: 1 },
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1.5, 1.5], [5.5, 1.5]] }, { kind: "halfPlane", through: [[5.5, 1.5], [5.5, 4]] }, { kind: "halfPlane", through: [[5.5, 4], [1.5, 4]] }, { kind: "halfPlane", through: [[1.5, 4], [1.5, 1.5]] }], step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A gas goes round the cycle $A \to B \to C \to D \to A$: $A$ ($1\ \mathrm{L}$, $4 \times 10^{5}\ \mathrm{Pa}$), $B$ ($4\ \mathrm{L}$, $4 \times 10^{5}\ \mathrm{Pa}$), $C$ ($4\ \mathrm{L}$, $1 \times 10^{5}\ \mathrm{Pa}$), $D$ ($1\ \mathrm{L}$, $1 \times 10^{5}\ \mathrm{Pa}$). Find the net work per cycle and the net heat taken in.`,
      steps: [
        t`$A \to B$: $W = 4 \times 10^{5} \times 3 \times 10^{-3} = 1200\ \mathrm{J}$.`,
        t`$B \to C$ and $D \to A$ are at constant volume: no work. $C \to D$: $W = 1 \times 10^{5} \times \left(-3 \times 10^{-3}\right)$ $= -300\ \mathrm{J}$.`,
        t`Net work $= 1200 - 300 = 900\ \mathrm{J}$, the enclosed area $3 \times 10^{5} \times 3 \times 10^{-3}$.`,
        t`$\Delta U = 0$ over the cycle, so $Q = W = 900\ \mathrm{J}$.`,
      ],
      answer: t`$W = Q = 900\ \mathrm{J}$ per cycle`,
      figure: {
        alt: "A p-V graph of the cycle. At step 1, the path A to B with the area under it shaded. At step 2, the rest of the cycle. At step 3, the enclosed area shaded darker: the net work.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 7], y: [0, 5] },
        elements: [
          { kind: "vector", from: [1, 4], to: [4, 4], step: 1 },
          { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1, 0], [4, 0]] }, { kind: "halfPlane", through: [[4, 0], [4, 4]] }, { kind: "halfPlane", through: [[4, 4], [1, 4]] }, { kind: "halfPlane", through: [[1, 4], [1, 0]] }], step: 1 },
          { kind: "vector", from: [4, 4], to: [4, 1], step: 2 },
          { kind: "vector", from: [4, 1], to: [1, 1], step: 2 },
          { kind: "vector", from: [1, 1], to: [1, 4], step: 2 },
          { kind: "vector", from: [1, 4], to: [4, 4], step: 2 },
          { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1, 1], [4, 1]] }, { kind: "halfPlane", through: [[4, 1], [4, 4]] }, { kind: "halfPlane", through: [[4, 4], [1, 4]] }, { kind: "halfPlane", through: [[1, 4], [1, 1]] }], step: 3 },
          { kind: "point", at: [1, 4], label: "A", labelAt: "nw", step: 1 },
          { kind: "point", at: [4, 4], label: "B", labelAt: "ne", step: 1 },
          { kind: "point", at: [4, 1], label: "C", labelAt: "se", step: 2 },
          { kind: "point", at: [1, 1], label: "D", labelAt: "sw", step: 2 },
        ],
      },
    },
    figure: {
      alt: "A p-V graph. First a rectangular cycle A to B to C to D and back to A, run clockwise. At point 4, the area enclosed by the loop shaded: the net work done.",
      chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
      view: { x: [0, 7], y: [0, 5] },
      elements: [
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1.5, 1.5], [5.5, 1.5]] }, { kind: "halfPlane", through: [[5.5, 1.5], [5.5, 4]] }, { kind: "halfPlane", through: [[5.5, 4], [1.5, 4]] }, { kind: "halfPlane", through: [[1.5, 4], [1.5, 1.5]] }], step: 4 },
        { kind: "vector", from: [1.5, 4], to: [5.5, 4], step: 1 },
        { kind: "vector", from: [5.5, 4], to: [5.5, 1.5], step: 1 },
        { kind: "vector", from: [5.5, 1.5], to: [1.5, 1.5], step: 1 },
        { kind: "vector", from: [1.5, 1.5], to: [1.5, 4], step: 1 },
        { kind: "point", at: [1.5, 4], label: "A", labelAt: "nw", step: 1 },
        { kind: "point", at: [5.5, 4], label: "B", labelAt: "ne", step: 1 },
        { kind: "point", at: [5.5, 1.5], label: "C", labelAt: "se", step: 1 },
        { kind: "point", at: [1.5, 1.5], label: "D", labelAt: "sw", step: 1 },
        { kind: "label", at: [2.8, 2.5], label: "W = area", labelAt: "ne", step: 4 },
      ],
    },
    visualSpec: t`Run a gas round a loop on its $p$-$V$ diagram, clockwise and then anticlockwise, and watch the shaded net work flip sign.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Thinks no net work is done because the system returns to its start.",
      remediation: t`Only $\Delta U$ is zero over a cycle. The net work is the area enclosed by the loop.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Thinks no net heat flows over a cycle.",
      remediation: t`$\Delta U = 0$, so $Q = W$: the net heat equals the net work, which need not be zero.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Forgets that $\Delta U = 0$ over a cycle.`,
      remediation: t`$U$ depends only on the state, and a cycle ends in its starting state: $\Delta U = 0$, so $W = Q$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M4",
      mistake: "Gives the work for one cycle only.",
      remediation: "The area of the loop is the work per cycle; multiply by the number of cycles.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Uses the full widths of the ellipse instead of its semi-axes.",
      remediation: t`An ellipse's area is $\pi ab$, with $a$ and $b$ half its widths.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Uses the rectangle round the loop instead of the loop itself.",
      remediation: t`The work is the area inside the loop, $\pi ab$ for an ellipse, not the box around it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Gets the sign of the net work or heat wrong.",
      remediation: t`Clockwise loops give positive net work by the gas; and $Q = W$, sign included.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Thinks $\Delta U$ equals the net work over a cycle.`,
      remediation: t`Over a cycle $\Delta U = 0$, so $Q = W$, not $2W$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M9",
      mistake: "Takes the area under the top path only.",
      remediation: "The return path takes work back: the net work is the area under the top minus the area under the bottom.",
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(vii)" },
      stem: t`In a cyclic process, with $\Delta U$ the change in internal energy, $W$ the work done by the system and $Q$ the heat supplied, which is true?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "law" } },
      options: [
        { key: "A", text: t`$W = Q$`, correct: true, value: "W_equals_Q" },
        { key: "B", text: t`$W = 0$`, correct: false, misconceptionId: "C08-M1", value: "W_zero" },
        { key: "C", text: t`$Q = 0$`, correct: false, misconceptionId: "C08-M2", value: "Q_zero" },
        { key: "D", text: t`$\Delta U = Q$`, correct: false, misconceptionId: "C08-M3", value: "dU_equals_Q" },
      ],
      solution: {
        steps: [
          t`The system returns to its starting state, so $\Delta U = 0$.`,
          t`$Q = \Delta U + W$ gives $W = Q$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.10" },
      stem: t`A gas is taken round the elliptical cycle shown, which just reaches $V = 2 \times 10^{-3}$ and $6 \times 10^{-3}\ \mathrm{m^3}$, and $p = 1 \times 10^{5}$ and $11 \times 10^{5}\ \mathrm{Pa}$. How much work does it do in $25$ cycles?`,
      figure: {
        alt: "A p-V graph: a closed elliptical loop centred at 4 times 10 to the minus 3 cubic metres and 6 times 10 to the 5 pascals, reaching from 2 to 6 on the volume axis and from 1 to 11 on the pressure axis.",
        chart: { x: 1, y: 2, xTitle: "V (10⁻³ m³)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 8], y: [0, 12] },
        elements: [
          { kind: "curve", points: [[6, 6], [5.9829, 6.6526], [5.9319, 7.2941], [5.8478, 7.9134], [5.7321, 8.5], [5.5867, 9.0438], [5.4142, 9.5355], [5.2175, 9.9668], [5, 10.3301], [4.7654, 10.6194], [4.5176, 10.8296], [4.2611, 10.9572], [4, 11], [3.7389, 10.9572], [3.4824, 10.8296], [3.2346, 10.6194], [3, 10.3301], [2.7825, 9.9668], [2.5858, 9.5355], [2.4133, 9.0438], [2.2679, 8.5], [2.1522, 7.9134], [2.0681, 7.2941], [2.0171, 6.6526], [2, 6], [2.0171, 5.3474], [2.0681, 4.7059], [2.1522, 4.0866], [2.2679, 3.5], [2.4133, 2.9562], [2.5858, 2.4645], [2.7825, 2.0332], [3, 1.6699], [3.2346, 1.3806], [3.4824, 1.1704], [3.7389, 1.0428], [4, 1], [4.2611, 1.0428], [4.5176, 1.1704], [4.7654, 1.3806], [5, 1.6699], [5.2175, 2.0332], [5.4142, 2.4645], [5.5867, 2.9562], [5.7321, 3.5], [5.8478, 4.0866], [5.9319, 4.7059], [5.9829, 5.3474], [6, 6]] },
        ],
      },
      verify: { kind: "value", inputs: { N: "25", V1: "2e-3", V2: "6e-3", p1: "1e5", p2: "11e5" }, params: { ask: "ellipse" } },
      options: [
        { key: "A", text: t`$3142\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M4", value: "3142" },
        { key: "B", text: t`$3.142 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M5", value: "314200" },
        { key: "C", text: t`$1 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M6", value: "100000" },
        { key: "D", text: t`$78540\ \mathrm{J}$`, correct: true, value: "78540" },
      ],
      solution: {
        steps: [
          t`The loop is an ellipse with semi-axes $a = 2 \times 10^{-3}\ \mathrm{m^3}$ and $b = 5 \times 10^{5}\ \mathrm{Pa}$: one cycle gives $W = \pi ab = \pi \times 10^{3} \approx 3142\ \mathrm{J}$.`,
          t`$25$ cycles: $W = 25 \times 3142 \approx 7.854 \times 10^{4}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.8" },
      stem: t`Over one complete cycle, the net work done by a system is $-1000\ \mathrm{J}$. What is the net heat supplied to it?`,
      verify: { kind: "value", inputs: { W: "-1000" }, params: { ask: "Q_cycle" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "B", text: t`$1000\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M7", value: "1000" },
        { key: "C", text: t`$-2000\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M8", value: "-2000" },
        { key: "D", text: t`$-1000\ \mathrm{J}$`, correct: true, value: "-1000" },
      ],
      solution: {
        steps: [
          t`Over a cycle $\Delta U = 0$, so $Q = W$.`,
          t`$Q = -1000\ \mathrm{J}$: the system gives out $1000\ \mathrm{J}$ of heat.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.8" },
      stem: t`A gas is taken round a cycle that runs clockwise on its $p$-$V$ diagram. What does that tell you?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "direction" } },
      options: [
        { key: "A", text: t`Net work is done on the gas, equal to the area enclosed by the loop`, correct: false, misconceptionId: "C08-M7", value: "work_on_gas" },
        { key: "B", text: t`The net work done by the gas is the area under the top of the loop`, correct: false, misconceptionId: "C08-M9", value: "area_under_top" },
        { key: "C", text: t`The gas does net work on its surroundings, equal to the area enclosed by the loop`, correct: true, value: "positive_enclosed" },
        { key: "D", text: t`No net work is done, since the gas ends where it started`, correct: false, misconceptionId: "C08-M1", value: "no_net_work" },
      ],
      solution: {
        steps: [
          t`Clockwise, the expansion runs along the top, at higher pressure, and the compression along the bottom.`,
          t`So the work out exceeds the work in: the gas does net positive work, the area enclosed.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.12" },
      stem: t`A gas is taken round the cycle $A \to B \to C \to D \to A$ shown. How much net work does it do per cycle?`,
      figure: {
        alt: "A p-V graph: a rectangular cycle, A at 2 litres and 6 times 10 to the 5 pascals, B at 6 litres and the same pressure, C at 6 litres and 2 times 10 to the 5 pascals, D at 2 litres and that pressure, run clockwise.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 7], y: [0, 7] },
        elements: [
          { kind: "vector", from: [2, 6], to: [6, 6] },
          { kind: "vector", from: [6, 6], to: [6, 2] },
          { kind: "vector", from: [6, 2], to: [2, 2] },
          { kind: "vector", from: [2, 2], to: [2, 6] },
          { kind: "point", at: [2, 6], label: "A", labelAt: "nw" },
          { kind: "point", at: [6, 6], label: "B", labelAt: "ne" },
          { kind: "point", at: [6, 2], label: "C", labelAt: "se" },
          { kind: "point", at: [2, 2], label: "D", labelAt: "sw" },
        ],
      },
      verify: { kind: "value", inputs: { V1: "2", V2: "6", p1: "2e5", p2: "6e5" }, params: { ask: "rectangle" } },
      options: [
        { key: "A", text: t`$2400\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M9", value: "2400" },
        { key: "B", text: t`$1600\ \mathrm{J}$`, correct: true, value: "1600" },
        { key: "C", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M1", value: "0" },
        { key: "D", text: t`$-1600\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M7", value: "-1600" },
      ],
      solution: {
        steps: [
          t`$A \to B$: $W = 6 \times 10^{5} \times 4 \times 10^{-3} = 2400\ \mathrm{J}$; $C \to D$: $W = 2 \times 10^{5} \times \left(-4 \times 10^{-3}\right) = -800\ \mathrm{J}$.`,
          t`The vertical sides do no work, so the net work is $2400 - 800 = 1600\ \mathrm{J}$, the enclosed area.`,
        ],
        figure: {
          alt: "The rectangular cycle A B C D with the enclosed area shaded: the net work.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 7] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2, 2], [6, 2]] }, { kind: "halfPlane", through: [[6, 2], [6, 6]] }, { kind: "halfPlane", through: [[6, 6], [2, 6]] }, { kind: "halfPlane", through: [[2, 6], [2, 2]] }] },
            { kind: "vector", from: [2, 6], to: [6, 6] },
            { kind: "vector", from: [6, 6], to: [6, 2] },
            { kind: "vector", from: [6, 2], to: [2, 2] },
            { kind: "vector", from: [2, 2], to: [2, 6] },
            { kind: "point", at: [2, 6], label: "A", labelAt: "nw" },
            { kind: "point", at: [6, 6], label: "B", labelAt: "ne" },
            { kind: "point", at: [6, 2], label: "C", labelAt: "se" },
            { kind: "point", at: [2, 2], label: "D", labelAt: "sw" },
          ],
        },
      },
    },
  ],
};
