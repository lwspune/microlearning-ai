import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`In a car engine, burning fuel heats the gas in a cylinder, and the gas shoves a piston down. Where does the work that turns the wheels come from?`,
    reveal: t`The hot gas presses on the piston and moves it: it does work $p\,\Delta V$. On a $p$-$V$ graph, that work is the area under the gas's path.`,
  },
  explanation: {
    intuition: [
      t`A gas presses on every wall of its container, including a movable piston.`,
      t`When it pushes the piston out, it does work on the surroundings.`,
      t`At constant pressure, that work is pressure times the change in volume: $W = p\,\Delta V$.`,
      t`On a graph of $p$ against $V$, this is the area under the path.`,
      t`Squeeze the gas instead, and the work done by it is negative.`,
    ],
    formal: [
      {
        title: "Work done by a gas",
        points: [
          t`A gas at pressure $p$ pushes a piston of area $A$ with force $F = pA$.`,
          t`Moving the piston out by $dx$, it does work $dW = pA\,dx = p\,dV$.`,
          t`At constant pressure, $W = p\left(V_f - V_i\right) = p\,\Delta V$.`,
          t`Use SI units: $p$ in Pa and $V$ in $\mathrm{m^3}$, with $1\ \mathrm{L} = 10^{-3}\ \mathrm{m^3}$.`,
        ],
        figure: {
          alt: "A p-V graph: a horizontal path from A to B at constant pressure. At point 3, the rectangle under it is shaded: its area is p times the change in volume.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 5] },
          elements: [
            { kind: "vector", from: [2, 4], to: [6, 4] },
            { kind: "point", at: [2, 4], label: "A", labelAt: "nw" },
            { kind: "point", at: [6, 4], label: "B", labelAt: "ne" },
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2, 0], [6, 0]] }, { kind: "halfPlane", through: [[6, 0], [6, 4]] }, { kind: "halfPlane", through: [[6, 4], [2, 4]] }, { kind: "halfPlane", through: [[2, 4], [2, 0]] }], step: 3 },
            { kind: "label", at: [3.2, 1.6], label: "W = pΔV", labelAt: "ne", step: 3 },
          ],
        },
      },
      {
        title: "Work as area under the path",
        points: [
          t`In general $W = \displaystyle\int_{V_i}^{V_f} p\,dV$: the area under the $p$-$V$ path.`,
          t`When the gas expands, $W$ is positive: the gas does work on its surroundings.`,
          t`When it is compressed, $W$ is negative: the surroundings do work on the gas.`,
          t`At constant volume, $\Delta V = 0$, so no work is done, however the pressure changes.`,
          t`The work depends on the path, not just on the first and last states.`,
        ],
        figure: {
          alt: "A p-V graph: a straight path from state 1 up to state 2 as the gas expands, with the area under it shaded. At point 4, a vertical path where the volume stays fixed: no area, so no work.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 5] },
          elements: [
            { kind: "vector", from: [1, 1], to: [3, 3] },
            { kind: "point", at: [1, 1], label: "1", labelAt: "nw" },
            { kind: "point", at: [3, 3], label: "2", labelAt: "nw" },
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1, 0], [3, 0]] }, { kind: "halfPlane", through: [[3, 0], [3, 3]] }, { kind: "halfPlane", through: [[3, 3], [1, 1]] }, { kind: "halfPlane", through: [[1, 1], [1, 0]] }] },
            { kind: "vector", from: [5, 4], to: [5, 1], step: 4 },
            { kind: "label", at: [5, 2.5], label: "W = 0", labelAt: "e", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A gas of volume $0.5\ \mathrm{m^3}$ in a cylinder is expanded to double its volume at a constant pressure of $1.01 \times 10^{5}\ \mathrm{Pa}$. How much work does it do?`,
      steps: [
        t`The volume goes from $0.5\ \mathrm{m^3}$ to $1.0\ \mathrm{m^3}$, so $\Delta V = 0.5\ \mathrm{m^3}$.`,
        t`At constant pressure, $W = p\,\Delta V$.`,
        t`$W = 1.01 \times 10^{5} \times 0.5$.`,
        t`$W = 5.05 \times 10^{4}\ \mathrm{J}$, positive: the gas does work on its surroundings.`,
      ],
      answer: t`$W = 5.05 \times 10^{4}\ \mathrm{J}$`,
      figure: {
        alt: "A p-V graph: a horizontal path at 1.01 times 10 to the 5 pascals from 0.5 to 1.0 cubic metres. At step 2, the rectangle under it is shaded.",
        chart: { x: 0.2, y: 0.5, xTitle: "V (m³)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 1.2], y: [0, 1.5] },
        elements: [
          { kind: "vector", from: [0.5, 1.01], to: [1, 1.01], step: 1 },
          { kind: "point", at: [0.5, 1.01], label: "i", labelAt: "nw", step: 1 },
          { kind: "point", at: [1, 1.01], label: "f", labelAt: "ne", step: 1 },
          { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[0.5, 0], [1, 0]] }, { kind: "halfPlane", through: [[1, 0], [1, 1.01]] }, { kind: "halfPlane", through: [[1, 1.01], [0.5, 1.01]] }, { kind: "halfPlane", through: [[0.5, 1.01], [0.5, 0]] }], step: 2 },
        ],
      },
    },
    figure: {
      alt: "A p-V graph. First a horizontal path from A to B, the gas expanding at constant pressure. Then the rectangle under it shaded, its area the work done.",
      chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
      view: { x: [0, 7], y: [0, 5] },
      elements: [
        { kind: "vector", from: [2, 4], to: [6, 4], step: 1 },
        { kind: "point", at: [2, 4], label: "A", labelAt: "nw", step: 1 },
        { kind: "point", at: [6, 4], label: "B", labelAt: "ne", step: 1 },
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2, 0], [6, 0]] }, { kind: "halfPlane", through: [[6, 0], [6, 4]] }, { kind: "halfPlane", through: [[6, 4], [2, 4]] }, { kind: "halfPlane", through: [[2, 4], [2, 0]] }], step: 2 },
        { kind: "label", at: [3.2, 1.6], label: "W = pΔV", labelAt: "ne", step: 3 },
      ],
    },
    visualSpec: t`Drag a piston out at constant pressure and watch the shaded rectangle under the $p$-$V$ path grow; push it back in and watch the work turn negative.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Gets the sign of the work wrong.",
      remediation: "Work done by the gas is positive when it expands and negative when it is compressed.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes the work as pressure times volume, $W = pV$.`,
      remediation: t`Work depends on the change in volume: $W = p\,\Delta V$. A gas that does not move its boundary does no work.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Takes the area under the path as a triangle.",
      remediation: t`The work is the whole area under the path, down to the $V$ axis: a rectangle or a trapezium here, not a triangle.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Leaves the volume in litres.",
      remediation: t`With $p$ in Pa, $V$ must be in $\mathrm{m^3}$: $1\ \mathrm{L} = 10^{-3}\ \mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks a change of pressure alone does work.",
      remediation: t`Work needs the boundary to move. At constant volume $\Delta V = 0$, so $W = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Uses only the starting pressure when the pressure changes.",
      remediation: t`When $p$ changes, take the area under the path: for a straight path, the average pressure times $\Delta V$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.29" },
      stem: t`A gas in a cylinder starts at a pressure of $2 \times 10^{5}\ \mathrm{N/m^2}$ and a volume of $6 \times 10^{-3}\ \mathrm{m^3}$. It is compressed at constant pressure, with $150\ \mathrm{J}$ of work done on it. What is its final volume?`,
      verify: { kind: "value", inputs: { p: "2e5", Vi: "6e-3", W_on: "150" }, params: { ask: "Vf" } },
      options: [
        { key: "A", text: t`$7.5 \times 10^{-4}\ \mathrm{m^3}$`, correct: false, misconceptionId: "C03-M2", value: "0.000750000000000000" },
        { key: "B", text: t`$0.0045\ \mathrm{m^3}$`, correct: false, misconceptionId: "C03-M3", value: "0.00450000000000000" },
        { key: "C", text: t`$0.00525\ \mathrm{m^3}$`, correct: true, value: "0.00525000000000000" },
        { key: "D", text: t`$0.00675\ \mathrm{m^3}$`, correct: false, misconceptionId: "C03-M1", value: "0.00675000000000000" },
      ],
      solution: {
        steps: [
          t`Work done by the gas is $W = -150\ \mathrm{J}$, so $\Delta V = \dfrac{W}{p} = \dfrac{-150}{2 \times 10^{5}} = -7.5 \times 10^{-4}\ \mathrm{m^3}$.`,
          t`$V_f = 6 \times 10^{-3} - 7.5 \times 10^{-4} = 5.25 \times 10^{-3}\ \mathrm{m^3}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.12" },
      stem: t`A gas goes from state A to state B at a constant pressure of $6 \times 10^{5}\ \mathrm{Pa}$, as shown. How much work does it do?`,
      figure: {
        alt: "A p-V graph: a horizontal path from A at 2 litres to B at 6 litres, at 6 times 10 to the 5 pascals.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 7], y: [0, 7] },
        elements: [
          { kind: "vector", from: [2, 6], to: [6, 6] },
          { kind: "point", at: [2, 6], label: "A", labelAt: "nw" },
          { kind: "point", at: [6, 6], label: "B", labelAt: "ne" },
        ],
      },
      verify: { kind: "value", inputs: { p: "6e5", Va: "2", Vb: "6" }, params: { ask: "W_p", unit: "1e-3" } },
      options: [
        { key: "A", text: t`$1200\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M3", value: "1200" },
        { key: "B", text: t`$2.4 \times 10^{6}\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M4", value: "2400000" },
        { key: "C", text: t`$2400\ \mathrm{J}$`, correct: true, value: "2400" },
        { key: "D", text: t`$-2400\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M1", value: "-2400" },
      ],
      solution: {
        steps: [
          t`$\Delta V = 6 - 2 = 4\ \mathrm{L} = 4 \times 10^{-3}\ \mathrm{m^3}$.`,
          t`$W = p\,\Delta V = 6 \times 10^{5} \times 4 \times 10^{-3} = 2400\ \mathrm{J}$.`,
        ],
        figure: {
          alt: "The rectangle under the path from A to B shaded: its area is the work done.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 7], y: [0, 7] },
          elements: [
            { kind: "vector", from: [2, 6], to: [6, 6] },
            { kind: "point", at: [2, 6], label: "A", labelAt: "nw" },
            { kind: "point", at: [6, 6], label: "B", labelAt: "ne" },
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[2, 0], [6, 0]] }, { kind: "halfPlane", through: [[6, 0], [6, 6]] }, { kind: "halfPlane", through: [[6, 6], [2, 6]] }, { kind: "halfPlane", through: [[2, 6], [2, 0]] }] },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.3 (iv)" },
      stem: t`In which of these does the gas do positive work?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "positive" } },
      options: [
        { key: "A", text: t`A gas being compressed by a piston pushed in`, correct: false, misconceptionId: "C03-M1", value: "compressed" },
        { key: "B", text: t`A gas held at a steady pressure and volume`, correct: false, misconceptionId: "C03-M2", value: "steady_p_and_V" },
        { key: "C", text: t`A gas whose pressure rises in a rigid, sealed container`, correct: false, misconceptionId: "C03-M5", value: "pressure_rise_rigid" },
        { key: "D", text: t`A gas expanding in a cylinder, pushing a piston out`, correct: true, value: "expanding" },
      ],
      solution: {
        steps: [
          t`A gas does positive work when it expands, pushing its boundary out.`,
          t`Compression gives negative work, and a fixed volume gives none, whatever the pressure does.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.12" },
      stem: t`A gas goes from state C to state D at a constant pressure of $2 \times 10^{5}\ \mathrm{Pa}$, as shown. How much work does the gas do?`,
      figure: {
        alt: "A p-V graph: a horizontal path from C at 6 litres back to D at 2 litres, at 2 times 10 to the 5 pascals.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 7], y: [0, 7] },
        elements: [
          { kind: "vector", from: [6, 2], to: [2, 2] },
          { kind: "point", at: [6, 2], label: "C", labelAt: "ne" },
          { kind: "point", at: [2, 2], label: "D", labelAt: "nw" },
        ],
      },
      verify: { kind: "value", inputs: { p: "2e5", Va: "6", Vb: "2" }, params: { ask: "W_p", unit: "1e-3" } },
      options: [
        { key: "A", text: t`$400\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M2", value: "400" },
        { key: "B", text: t`$-8 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M4", value: "-800000" },
        { key: "C", text: t`$-800\ \mathrm{J}$`, correct: true, value: "-800" },
        { key: "D", text: t`$800\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M1", value: "800" },
      ],
      solution: {
        steps: [
          t`$\Delta V = 2 - 6 = -4\ \mathrm{L} = -4 \times 10^{-3}\ \mathrm{m^3}$.`,
          t`$W = p\,\Delta V = 2 \times 10^{5} \times \left(-4 \times 10^{-3}\right) = -800\ \mathrm{J}$: work is done on the gas.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`A gas expands along the straight path shown, from $1\ \mathrm{L}$ at $3 \times 10^{5}\ \mathrm{Pa}$ to $4\ \mathrm{L}$ at $1 \times 10^{5}\ \mathrm{Pa}$. How much work does it do?`,
      figure: {
        alt: "A p-V graph: a straight path sloping down from 1 litre at 3 times 10 to the 5 pascals to 4 litres at 1 times 10 to the 5 pascals.",
        chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
        view: { x: [0, 5], y: [0, 4] },
        elements: [
          { kind: "vector", from: [1, 3], to: [4, 1] },
          { kind: "point", at: [1, 3], label: "1", labelAt: "ne" },
          { kind: "point", at: [4, 1], label: "2", labelAt: "ne" },
        ],
      },
      verify: { kind: "value", inputs: { p1: "3e5", p2: "1e5", V1: "1", V2: "4" }, params: { ask: "W_line" } },
      options: [
        { key: "A", text: t`$600\ \mathrm{J}$`, correct: true, value: "600" },
        { key: "B", text: t`$300\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M3", value: "300" },
        { key: "C", text: t`$6 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M4", value: "600000" },
        { key: "D", text: t`$900\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M6", value: "900" },
      ],
      solution: {
        steps: [
          t`The area under the path is a trapezium: average pressure $2 \times 10^{5}\ \mathrm{Pa}$, $\Delta V = 3 \times 10^{-3}\ \mathrm{m^3}$.`,
          t`$W = 2 \times 10^{5} \times 3 \times 10^{-3} = 600\ \mathrm{J}$.`,
        ],
        figure: {
          alt: "The trapezium under the sloping path from state 1 to state 2 shaded: its area is the work done.",
          chart: { x: 1, y: 1, xTitle: "V (L)", yTitle: "p (10⁵ Pa)" },
          view: { x: [0, 5], y: [0, 4] },
          elements: [
            { kind: "vector", from: [1, 3], to: [4, 1] },
            { kind: "point", at: [1, 3], label: "1", labelAt: "ne" },
            { kind: "point", at: [4, 1], label: "2", labelAt: "ne" },
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[1, 0], [4, 0]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[4, 1], [1, 3]] }, { kind: "halfPlane", through: [[1, 3], [1, 0]] }] },
          ],
        },
      },
    },
  ],
};
