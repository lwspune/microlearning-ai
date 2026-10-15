import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/**
 * The xy-plane drawn as plain axes (no grid or numbers: only directions matter here), with its quadrants;
 * the quadrant numerals appear at `quadrantStep` when given, else from the start.
 */
function planeOf(len: number, quadrantStep?: number): FigureElement[] {
  const q = len * 0.75;
  const step = quadrantStep === undefined ? {} : { step: quadrantStep };
  return [
    { kind: "segment", from: [-len, 0], to: [len, 0], tone: "muted" },
    { kind: "label", at: [len, 0], label: "x", labelAt: "s", tone: "muted" },
    { kind: "segment", from: [0, -len], to: [0, len], tone: "muted" },
    { kind: "label", at: [0, len], label: "y", labelAt: "w", tone: "muted" },
    { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
    { kind: "label", at: [q, q], label: "I", labelAt: "n", tone: "muted", ...step },
    { kind: "label", at: [-q, q], label: "II", labelAt: "n", tone: "muted", ...step },
    { kind: "label", at: [-q, -q], label: "III", labelAt: "n", tone: "muted", ...step },
    { kind: "label", at: [q, -q], label: "IV", labelAt: "n", tone: "muted", ...step },
  ];
}
const plane = planeOf(2.6);

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`One spoke of a wheel is turned $750^\circ$ anticlockwise. On an identical wheel, the same spoke is turned $330^\circ$ clockwise. **Do the two spokes end up pointing the same way?**`,
    reveal: t`Yes. $750^\circ = 2 \times 360^\circ + 30^\circ$, and two full turns change nothing, so the first spoke ends at $30^\circ$. Clockwise is negative: $-330^\circ$, and $-330^\circ + 360^\circ = 30^\circ$. Both end at $30^\circ$: the angles are **co-terminal**.`,
  },
  explanation: {
    intuition: [
      t`A **ray** is a half-line: it starts at a point and goes on without end in one direction.`,
      t`Think of an angle as a **turn** of a ray about its starting point.`,
      t`Take a ray $OA$: where it starts, before turning, is the **initial arm**.`,
      t`Turn it about $O$ until it lies along $OB$: where it stops, $OB$, is the **terminal arm**.`,
      t`This ray turned **anticlockwise**, against the hands of a clock.`,
      t`A ray can also turn **clockwise**, the way a clock's hands go.`,
    ],
    formal: [
      {
        title: "Directed angle",
        points: [
          t`An angle measured together with its direction of turn is a **directed angle**.`,
          t`Its size says how far the arm turned.`,
          t`Its sign says which way the arm turned.`,
          t`Anticlockwise turns are positive: $60^\circ$ is a turn of $60^\circ$ anticlockwise.`,
          t`Clockwise turns are negative: $-60^\circ$ is the same amount clockwise.`,
          t`The two end on different arms.`,
        ],
        figure: {
          alt: "From the initial arm OA, one arm turns 60° anticlockwise, upwards, and is labelled 60°, anticlockwise; another turns 60° clockwise, downwards, and is labelled −60°, clockwise. They end on different arms, mirror images in the initial arm.",
          axes: "none",
          view: { x: [-1, 3.4], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [0, 0], label: "O", labelAt: "w", tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.6, 0], label: "initial arm OA", labelAt: "s", tone: "good" },
            { kind: "turn", r: 2.4, to: 60, label: "60°, anticlockwise", labelAt: "w", step: 4 },
            { kind: "turn", r: 2.4, to: -60, label: "−60°, clockwise", labelAt: "w", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Standard position",
        points: [
          t`An angle is in **standard position** when its vertex is the origin $O$ and its initial arm lies along the positive $x$-axis.`,
          t`The axes cut the plane into four **quadrants**, I to IV.`,
          t`The angle lies in the quadrant that holds its terminal arm.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV, I top right and the rest in turn anticlockwise. The initial arm lies along the positive x-axis. An arm turns 130° anticlockwise from it and stops in Quadrant II, which is shaded.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, 2),
            { kind: "segment", from: [0, 0], to: [2.4, 0], label: "initial arm", labelAt: "n", tone: "good", step: 1 },
            { kind: "turn", r: 2.2, to: 130, label: "130°", labelAt: "w", step: 3 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 90, to: 180 }], tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Quadrant of an angle",
        points: [
          t`Between $0^\circ$ and $90^\circ$, the terminal arm lies in Quadrant I.`,
          t`Between $90^\circ$ and $180^\circ$, it lies in Quadrant II.`,
          t`Between $180^\circ$ and $270^\circ$, it lies in Quadrant III.`,
          t`Between $270^\circ$ and $360^\circ$, it lies in Quadrant IV.`,
          t`So $130^\circ$, between $90^\circ$ and $180^\circ$, lies in Quadrant II.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV and the initial arm along the positive x-axis. The axes are marked in turn 90°, 180°, 270° and 360°, the edges of the quadrants. An arm turns 130° anticlockwise and stops in Quadrant II, which is shaded.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...plane,
            { kind: "segment", from: [0, 0], to: [2.4, 0], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "label", at: [0, 2.2], label: "90°", labelAt: "e", step: 1 },
            { kind: "label", at: [-2.2, 0], label: "180°", labelAt: "n", step: 2 },
            { kind: "label", at: [0, -2.2], label: "270°", labelAt: "e", step: 3 },
            { kind: "label", at: [1.9, 0], label: "360°", labelAt: "s", step: 4 },
            { kind: "turn", r: 2.2, to: 130, label: "130°", labelAt: "w", step: 5 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 90, to: 180 }], tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Quadrantal angles",
        points: [
          t`When the terminal arm lies along an axis, it is in no quadrant: the angle is a **quadrantal angle**.`,
          t`$90^\circ$ ends on the positive $y$-axis.`,
          t`$180^\circ$ ends on the negative $x$-axis.`,
          t`$270^\circ$ ends on the negative $y$-axis.`,
          t`$0^\circ$ and $360^\circ$ end on the positive $x$-axis.`,
        ],
        figure: {
          alt: "The xy-plane. An arm starts on the positive x-axis at 0° and turns anticlockwise, stopping on each axis in turn: 90° on the positive y-axis, 180° on the negative x-axis, 270° on the negative y-axis. Each of these arms lies on an axis, in no quadrant.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...plane,
            { kind: "label", at: [2.2, 0], label: "0°", labelAt: "n", tone: "good" },
            { kind: "turn", r: 2.2, to: 90, label: "90°", labelAt: "e", step: 2 },
            { kind: "turn", r: 2.2, from: 90, to: 180, label: "180°", labelAt: "n", step: 3 },
            { kind: "turn", r: 2.2, from: 180, to: 270, label: "270°", labelAt: "e", step: 4 },
          ],
        },
      },
      {
        title: "Co-terminal angles",
        points: [
          t`Angles with the same initial arm and the same terminal arm are **co-terminal**.`,
          t`A full turn, $360^\circ$, brings the arm back to where it began.`,
          t`So co-terminal angles differ by whole turns: $\theta$ and $\theta + n \times 360^\circ$, where $n$ is any integer.`,
          t`For example, $30^\circ$ and $390^\circ = 30^\circ + 360^\circ$ are co-terminal.`,
          t`So is $-330^\circ = 30^\circ - 360^\circ$: all three end on the same arm.`,
        ],
        figure: {
          alt: "The xy-plane. An arm turns 30° anticlockwise. A second turns one full turn and 30° more, 390°, and a third turns 330° clockwise, −330°. All three stop on the same arm, 30° above the positive x-axis: they are co-terminal.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-3.4, 3.4] },
          elements: [
            ...planeOf(3.2),
            { kind: "turn", r: 1.3, to: 30, label: "30°", labelAt: "se", step: 4 },
            { kind: "turn", r: 2.1, to: 390, label: "390°", labelAt: "se", tone: "good", step: 4 },
            { kind: "turn", r: 3, to: -330, label: "−330°", labelAt: "se", tone: "bad", step: 5 },
            { kind: "label", at: [-3.2, -3.05], label: "same terminal arm: co-terminal", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "Half a turn apart",
        points: [
          t`$100^\circ$ and $280^\circ$ differ by $180^\circ$, half a turn.`,
          t`Their arms point opposite ways, so they are not co-terminal.`,
        ],
        figure: {
          alt: "The xy-plane. One arm turns 100° anticlockwise and stops just past the positive y-axis, in Quadrant II. Another turns 280° anticlockwise and stops just past the negative y-axis, in Quadrant IV. The two arms point opposite ways: they are not co-terminal.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...plane,
            { kind: "segment", from: [0, 0], to: [2.4, 0], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "turn", r: 2.2, to: 100, label: "100°", labelAt: "w", step: 1 },
            { kind: "turn", r: 1.6, to: 280, label: "280°", labelAt: "e", tone: "bad", step: 1 },
            { kind: "label", at: [-2.7, -2.6], label: "opposite arms: not co-terminal", labelAt: "e", step: 2 },
          ],
        },
      },
      {
        title: "Large or negative angles",
        points: [
          t`To see where a large or negative angle ends, add or subtract $360^\circ$ until it lies between $0^\circ$ and $360^\circ$.`,
          t`The angle you land on is the **smallest positive co-terminal angle**.`,
          t`The original angle lies in the same quadrant as this one.`,
          t`For example, $400^\circ - 360^\circ = 40^\circ$, so $400^\circ$ lies in Quadrant I.`,
          t`And $-200^\circ + 360^\circ = 160^\circ$, so $-200^\circ$ lies in Quadrant II.`,
        ],
        figure: {
          alt: "The xy-plane. An arm turns 400° anticlockwise, one full turn and 40° more, and stops 40° above the positive x-axis: 400° − 360° = 40°. Another arm turns 200° clockwise and stops in Quadrant II, on the same arm as 160°: −200° + 360° = 160°.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...plane,
            { kind: "turn", r: 2.2, to: 400, label: "400°", labelAt: "e", step: 4 },
            { kind: "label", at: [0.3, 2.5], label: "400° − 360° = 40°", labelAt: "e", step: 4 },
            { kind: "turn", r: 2.2, to: -200, label: "−200°", labelAt: "w", tone: "bad", step: 5 },
            { kind: "label", at: [-2.7, -2.2], label: "−200° + 360° = 160°", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the smallest positive angle co-terminal with $-820^\circ$, and the quadrant of $-820^\circ$.`,
      steps: [
        t`$-820^\circ$ is negative, so the arm turns clockwise: two full turns ($720^\circ$) and $100^\circ$ more.`,
        t`Add whole turns until the angle is positive. Three turns are $3 \times 360^\circ = 1080^\circ$, and $-820^\circ + 1080^\circ = 260^\circ$.`,
        t`$180^\circ < 260^\circ < 270^\circ$, so the terminal arm lies in Quadrant III.`,
      ],
      answer: t`The smallest positive co-terminal angle is $260^\circ$, and $-820^\circ$ lies in Quadrant III.`,
      figure: {
        alt: "The angle −820° in standard position: the arm turns clockwise two full turns and 100° more, stopping at 260°. Adding three full turns gives 260°, between 180° and 270°, so the terminal arm lies in Quadrant III.",
        axes: "none",
        view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
        elements: [
          ...plane,
          { kind: "label", at: [0.1, 2.5], label: "−820°, clockwise", labelAt: "e", step: 1 },
          { kind: "turn", r: 2.2, to: -820, step: 1 },
          { kind: "arc", centre: [0, 0], r: 0.45, from: 0, to: 260, step: 2, tone: "good" },
          { kind: "label", at: [-0.382, -2.167], label: "260°", labelAt: "w", tone: "good", step: 2 },
          { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A ray OA lies along the initial arm. It turns anticlockwise about O, against the hands of a clock, and stops along OB, the terminal arm.",
      axes: "none",
      view: { x: [-1, 3.4], y: [-0.8, 2.8] },
      elements: [
        { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
        { kind: "segment", from: [0, 0], to: [2.6, 0], label: "initial arm OA", labelAt: "s", tone: "good", step: 3 },
        { kind: "turn", r: 2.4, to: 60, label: "terminal arm OB", labelAt: "w", step: 4 },
        { kind: "label", at: [0.9, 0.55], label: "anticlockwise", labelAt: "e", step: 5 },
      ],
    },
    visualSpec: t`Drag the terminal arm round and round, either way; a counter shows the directed angle, its smallest positive co-terminal angle and the quadrant the arm is in.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Drops the minus sign: turns a negative angle anticlockwise (-140 read as 140)",
      remediation: t`A minus sign means clockwise: $-\alpha$ ends on a different arm from $\alpha$, its mirror image in the $x$-axis. Turn the right way, or add $360^\circ$ to a negative angle until it is positive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks a half turn brings the arm back: removes multiples of 180 instead of 360",
      remediation: t`Only a full turn, $360^\circ$, brings the arm back to where it was; half a turn, $180^\circ$, points it the opposite way. Add or subtract multiples of $360^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Starts the turn from the positive y-axis (as on a clock) instead of the positive x-axis",
      remediation: t`In standard position the initial arm lies along the positive $x$-axis, not up the $y$-axis as on a clock face. Start every turn from there.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Takes co-terminal to mean exactly one turn apart: removes 360 only once",
      remediation: t`Co-terminal angles differ by any whole number of turns: $360^\circ$, $720^\circ$, $1080^\circ$, and so on. Keep taking off $360^\circ$ until the angle lies between $0^\circ$ and $360^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Names the quadrant by the number of whole right angles in the reduced angle (k right angles and a bit: 'Quadrant k'), forgetting the part left over",
      remediation: t`$k$ whole right angles bring the arm to an axis; the part left over carries it into the next quadrant. So $k$ right angles and a bit more is quadrant $k + 1$: between $180^\circ$ and $270^\circ$ is Quadrant III.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Counts back from the next whole turn and drops the sign: reads a positive angle a short of a whole number of turns (945 = 1080 - 135) as a instead of -a",
      remediation: t`Counting back from the next whole turn keeps the direction. An angle $\alpha$ short of a whole number of turns stops $\alpha$ clockwise of the start, at $-\alpha$, not $\alpha$: $945^\circ = 1080^\circ - 135^\circ$ ends at $-135^\circ$, and $-135^\circ + 360^\circ = 225^\circ$. Simpler: take off whole turns until the angle lies between $0^\circ$ and $360^\circ$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1 applies only to negative angles. C01-M6 applies only to positive angles whose remainder after whole turns is over $180^\circ$; otherwise it gives the key.`,
    t`C01-M2 gives the key whenever the remainder after whole turns is under $180^\circ$ (Quadrants I and II); diagnose it with angles ending in Quadrant III or IV.`,
    "C01-M3 and C01-M5 apply only to quadrant questions, C01-M4 only to co-terminal angles of 720 degrees or more. C01-M5 cannot be detected in Quadrant I.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q1B(i)" },
      stem: t`An angle of $-140^\circ$ is drawn in standard position. Its terminal arm lies in:`,
      verify: { kind: "value", inputs: { t: "-140" }, params: { ask: "quadrant" } },
      options: [
        { key: "A", text: t`Quadrant III`, correct: true, value: "quadrant_III" },
        { key: "B", text: t`Quadrant II`, correct: false, misconceptionId: "C01-M1", value: "quadrant_II" },
        { key: "C", text: t`Quadrant I`, correct: false, misconceptionId: "C01-M2", value: "quadrant_I" },
        { key: "D", text: t`Quadrant IV`, correct: false, misconceptionId: "C01-M3", value: "quadrant_IV" },
      ],
      solution: {
        steps: [
          t`$-140^\circ$ is negative, so the arm turns $140^\circ$ **clockwise** from the positive $x$-axis.`,
          t`Clockwise, $-90^\circ$ is the negative $y$-axis and $-180^\circ$ is the negative $x$-axis. $-140^\circ$ stops between them.`,
          t`Check: $-140^\circ + 360^\circ = 220^\circ$, between $180^\circ$ and $270^\circ$. The terminal arm lies in **Quadrant III**.`,
        ],
        figure: {
          alt: "The angle −140°: the arm turns 140° clockwise from the positive x-axis, past −90° on the negative y-axis, and stops before −180° on the negative x-axis. It is co-terminal with 220°, in Quadrant III.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            { kind: "segment", from: [-2.6, 0], to: [2.6, 0], tone: "muted" },
            { kind: "label", at: [2.6, 0], label: "x", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, -2.6], to: [0, 2.6], tone: "muted" },
            { kind: "label", at: [0, 2.6], label: "y", labelAt: "w", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "nw", tone: "muted" },
            { kind: "label", at: [1.9, 1.9], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.9, 1.9], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.9, -1.9], label: "III", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.9, -1.9], label: "IV", labelAt: "n", tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 0.45, from: -140, to: 0, step: 1, label: "−140°", labelAt: "se" },
            { kind: "vector", to: [-1.685, -1.414], step: 1 },
            { kind: "label", at: [0, -2.4], label: "−90°", labelAt: "e", step: 2 },
            { kind: "label", at: [-2.4, 0], label: "−180°", labelAt: "n", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q1B(v)" },
      stem: t`The smallest positive angle co-terminal with $945^\circ$ is:`,
      verify: { kind: "value", inputs: { t: "945" }, params: { ask: "coterminal" } },
      options: [
        { key: "A", text: t`$225^\circ$`, correct: true, value: "225" },
        { key: "B", text: t`$135^\circ$`, correct: false, misconceptionId: "C01-M6", value: "135" },
        { key: "C", text: t`$45^\circ$`, correct: false, misconceptionId: "C01-M2", value: "45" },
        { key: "D", text: t`$585^\circ$`, correct: false, misconceptionId: "C01-M4", value: "585" },
      ],
      solution: {
        steps: [
          t`Co-terminal angles differ by whole turns of $360^\circ$. $945 = 2 \times 360 + 225$: two full turns and $225^\circ$ more.`,
          t`Take off both turns: $945^\circ - 720^\circ = 225^\circ$. Taking off only one leaves $585^\circ$, still more than a full turn.`,
          t`$225^\circ$ lies between $0^\circ$ and $360^\circ$, so the smallest positive co-terminal angle is $225^\circ$.`,
        ],
        figure: {
          alt: "The angle 945°: the arm turns anticlockwise two full turns and 225° more. The same arm is reached by turning 225° once, between 180° and 270°.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            { kind: "segment", from: [-2.6, 0], to: [2.6, 0], tone: "muted" },
            { kind: "label", at: [2.6, 0], label: "x", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, -2.6], to: [0, 2.6], tone: "muted" },
            { kind: "label", at: [0, 2.6], label: "y", labelAt: "w", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "se", tone: "muted" },
            { kind: "curve", points: [[0.6, 0], [0.602, 0.063], [0.597, 0.127], [0.585, 0.191], [0.566, 0.253], [0.541, 0.314], [0.509, 0.372], [0.471, 0.426], [0.427, 0.477], [0.378, 0.524], [0.324, 0.565], [0.265, 0.6], [0.202, 0.63], [0.136, 0.652], [0.067, 0.668], [-0.003, 0.676], [-0.075, 0.677], [-0.147, 0.671], [-0.218, 0.657], [-0.287, 0.635], [-0.355, 0.606], [-0.42, 0.569], [-0.48, 0.526], [-0.537, 0.476], [-0.588, 0.42], [-0.633, 0.358], [-0.672, 0.292], [-0.704, 0.222], [-0.728, 0.148], [-0.744, 0.071], [-0.753, -0.008], [-0.753, -0.087], [-0.745, -0.167], [-0.728, -0.245], [-0.703, -0.322], [-0.669, -0.397], [-0.628, -0.468], [-0.579, -0.535], [-0.524, -0.596], [-0.461, -0.652], [-0.393, -0.701], [-0.319, -0.743], [-0.241, -0.778], [-0.159, -0.804], [-0.074, -0.821], [0.012, -0.829], [0.1, -0.828], [0.187, -0.818], [0.274, -0.799], [0.358, -0.77], [0.44, -0.733], [0.517, -0.687], [0.59, -0.633], [0.657, -0.571], [0.717, -0.502], [0.77, -0.426], [0.815, -0.345], [0.852, -0.259], [0.879, -0.169], [0.897, -0.077], [0.906, 0.018], [0.904, 0.114], [0.892, 0.209], [0.87, 0.303], [0.838, 0.395], [0.796, 0.483], [0.745, 0.567], [0.685, 0.645], [0.617, 0.718], [0.541, 0.783], [0.459, 0.839], [0.37, 0.888], [0.277, 0.926], [0.179, 0.955], [0.078, 0.974], [-0.025, 0.982], [-0.128, 0.979], [-0.231, 0.965], [-0.333, 0.94], [-0.432, 0.905], [-0.527, 0.859], [-0.617, 0.803], [-0.701, 0.737], [-0.779, 0.663], [-0.848, 0.581], [-0.909, 0.491], [-0.96, 0.395], [-1.001, 0.293], [-1.031, 0.188], [-1.051, 0.079], [-1.058, -0.032], [-1.054, -0.143], [-1.038, -0.254], [-1.011, -0.363], [-0.971, -0.47], [-0.921, -0.572], [-0.86, -0.668], [-0.789, -0.758], [-0.709, -0.841], [-0.619, -0.914], [-0.522, -0.979], [-0.419, -1.033], [-0.31, -1.076], [-0.196, -1.108], [-0.079, -1.127], [0.04, -1.134], [0.159, -1.129], [0.278, -1.111], [0.395, -1.081], [0.508, -1.038], [0.617, -0.983], [0.72, -0.917], [0.815, -0.84], [0.903, -0.753], [0.981, -0.657], [1.049, -0.553], [1.106, -0.442], [1.151, -0.325], [1.184, -0.203], [1.204, -0.078], [1.21, 0.048], [1.204, 0.176], [1.184, 0.302], [1.15, 0.427], [1.104, 0.547], [1.045, 0.663], [0.973, 0.772], [0.891, 0.873], [0.797, 0.965], [0.695, 1.048], [0.583, 1.12], [0.464, 1.179], [0.34, 1.226], [0.21, 1.26], [0.077, 1.28], [-0.058, 1.287], [-0.193, 1.278], [-0.328, 1.256], [-0.459, 1.22], [-0.587, 1.169], [-0.709, 1.106], [-0.824, 1.029], [-0.931, 0.941], [-1.029, 0.841], [-1.115, 0.731], [-1.19, 0.613], [-1.253, 0.486], [-1.302, 0.354], [-1.337, 0.216], [-1.357, 0.075], [-1.363, -0.068], [-1.353, -0.212], [-1.328, -0.354], [-1.289, -0.493], [-1.234, -0.627], [-1.166, -0.756], [-1.084, -0.877], [-0.99, -0.99]], step: 1 },
            { kind: "label", at: [0.1, 1.55], label: "945°", labelAt: "e", step: 1 },
            { kind: "vector", to: [-1.556, -1.556], step: 1 },
            { kind: "arc", centre: [0, 0], r: 0.45, from: 0, to: 225, step: 2, tone: "good" },
            { kind: "label", at: [-1.556, -1.556], label: "945° − 720° = 225°", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q1B(vii)" },
      stem: t`An angle of $-80^\circ$ is drawn in standard position. Its terminal arm lies in:`,
      verify: { kind: "value", inputs: { t: "-80" }, params: { ask: "quadrant" } },
      options: [
        { key: "A", text: t`Quadrant II`, correct: false, misconceptionId: "C01-M2", value: "quadrant_II" },
        { key: "B", text: t`Quadrant III`, correct: false, misconceptionId: "C01-M5", value: "quadrant_III" },
        { key: "C", text: t`Quadrant IV`, correct: true, value: "quadrant_IV" },
        { key: "D", text: t`Quadrant I`, correct: false, misconceptionId: "C01-M1", value: "quadrant_I" },
      ],
      solution: {
        steps: [
          t`$-80^\circ$ is negative, so the arm turns $80^\circ$ **clockwise** from the positive $x$-axis.`,
          t`That is less than the $90^\circ$ to the negative $y$-axis, so the arm stops below the positive $x$-axis.`,
          t`Check: $-80^\circ + 360^\circ = 280^\circ$, between $270^\circ$ and $360^\circ$. The terminal arm lies in **Quadrant IV**.`,
        ],
        figure: {
          alt: "The angle −80°: the arm turns 80° clockwise from the positive x-axis and stops just short of the negative y-axis, in Quadrant IV. It is co-terminal with 280°.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            { kind: "segment", from: [-2.6, 0], to: [2.6, 0], tone: "muted" },
            { kind: "label", at: [2.6, 0], label: "x", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, -2.6], to: [0, 2.6], tone: "muted" },
            { kind: "label", at: [0, 2.6], label: "y", labelAt: "w", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "label", at: [1.9, 1.9], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.9, 1.9], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.9, -1.9], label: "III", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.9, -1.9], label: "IV", labelAt: "n", tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 0.45, from: -80, to: 0, step: 1, label: "−80°", labelAt: "e" },
            { kind: "vector", to: [0.382, -2.167], step: 1 },
            { kind: "label", at: [0, -2.4], label: "−90°", labelAt: "w", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q1B(ii)" },
      stem: t`An angle of $250^\circ$ is drawn in standard position. Its terminal arm lies in:`,
      verify: { kind: "value", inputs: { t: "250" }, params: { ask: "quadrant" } },
      options: [
        { key: "A", text: t`Quadrant III`, correct: true, value: "quadrant_III" },
        { key: "B", text: t`Quadrant I`, correct: false, misconceptionId: "C01-M2", value: "quadrant_I" },
        { key: "C", text: t`Quadrant IV`, correct: false, misconceptionId: "C01-M3", value: "quadrant_IV" },
        { key: "D", text: t`Quadrant II`, correct: false, misconceptionId: "C01-M5", value: "quadrant_II" },
      ],
      solution: {
        steps: [
          t`$250^\circ$ is positive, so the arm turns **anticlockwise** from the positive $x$-axis.`,
          t`$250^\circ = 180^\circ + 70^\circ$: past the negative $x$-axis at $180^\circ$, short of the negative $y$-axis at $270^\circ$.`,
          t`Between $180^\circ$ and $270^\circ$ is **Quadrant III**.`,
        ],
        figure: {
          alt: "The angle 250°: the arm turns anticlockwise past 180° on the negative x-axis and stops 70° further on, before 270° on the negative y-axis, in Quadrant III.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            { kind: "segment", from: [-2.6, 0], to: [2.6, 0], tone: "muted" },
            { kind: "label", at: [2.6, 0], label: "x", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, -2.6], to: [0, 2.6], tone: "muted" },
            { kind: "label", at: [0, 2.6], label: "y", labelAt: "w", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "se", tone: "muted" },
            { kind: "label", at: [1.9, 1.9], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.9, 1.9], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.9, -1.9], label: "III", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.9, -1.9], label: "IV", labelAt: "n", tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 0.45, from: 0, to: 250, step: 1, label: "250°", labelAt: "nw" },
            { kind: "vector", to: [-0.752, -2.067], step: 1 },
            { kind: "label", at: [-2.4, 0], label: "180°", labelAt: "n", step: 2 },
            { kind: "label", at: [0, -2.4], label: "270°", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`The smallest positive angle co-terminal with $1050^\circ$ is:`,
      verify: { kind: "value", inputs: { t: "1050" }, params: { ask: "coterminal" } },
      options: [
        { key: "A", text: t`$330^\circ$`, correct: true, value: "330" },
        { key: "B", text: t`$30^\circ$`, correct: false, misconceptionId: "C01-M6", value: "30" },
        { key: "C", text: t`$150^\circ$`, correct: false, misconceptionId: "C01-M2", value: "150" },
        { key: "D", text: t`$690^\circ$`, correct: false, misconceptionId: "C01-M4", value: "690" },
      ],
      solution: {
        steps: [
          t`$1050 = 2 \times 360 + 330$: two full turns and $330^\circ$ more.`,
          t`Take off both turns: $1050^\circ - 720^\circ = 330^\circ$, which lies between $0^\circ$ and $360^\circ$.`,
          t`So the smallest positive co-terminal angle is $330^\circ$. It is $30^\circ$ short of three turns, $1050^\circ = 1080^\circ - 30^\circ$: co-terminal with $-30^\circ$, not with $30^\circ$.`,
        ],
        figure: {
          alt: "The angle 1050°: the arm turns anticlockwise two full turns and 330° more, ending 30° below the positive x-axis, in Quadrant IV: the same arm as 330° and as −30°.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            { kind: "segment", from: [-2.6, 0], to: [2.6, 0], tone: "muted" },
            { kind: "label", at: [2.6, 0], label: "x", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, -2.6], to: [0, 2.6], tone: "muted" },
            { kind: "label", at: [0, 2.6], label: "y", labelAt: "w", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "curve", points: [[0.6, 0], [0.601, 0.063], [0.596, 0.127], [0.584, 0.19], [0.565, 0.251], [0.539, 0.311], [0.508, 0.369], [0.47, 0.423], [0.426, 0.473], [0.377, 0.519], [0.323, 0.559], [0.264, 0.594], [0.202, 0.623], [0.137, 0.645], [0.069, 0.66], [0, 0.669], [-0.07, 0.669], [-0.141, 0.663], [-0.211, 0.649], [-0.279, 0.627], [-0.346, 0.599], [-0.409, 0.563], [-0.469, 0.521], [-0.524, 0.472], [-0.574, 0.417], [-0.619, 0.357], [-0.657, 0.292], [-0.688, 0.224], [-0.712, 0.151], [-0.729, 0.077], [-0.737, 0], [-0.738, -0.078], [-0.73, -0.155], [-0.714, -0.232], [-0.69, -0.307], [-0.658, -0.38], [-0.619, -0.449], [-0.572, -0.515], [-0.518, -0.575], [-0.457, -0.63], [-0.391, -0.678], [-0.32, -0.719], [-0.245, -0.753], [-0.166, -0.779], [-0.084, -0.797], [0, -0.806], [0.085, -0.806], [0.169, -0.797], [0.253, -0.779], [0.335, -0.753], [0.414, -0.718], [0.49, -0.674], [0.561, -0.623], [0.626, -0.564], [0.685, -0.498], [0.737, -0.426], [0.782, -0.348], [0.818, -0.266], [0.846, -0.18], [0.865, -0.091], [0.874, 0], [0.874, 0.092], [0.864, 0.184], [0.845, 0.274], [0.815, 0.363], [0.777, 0.449], [0.73, 0.53], [0.674, 0.606], [0.609, 0.677], [0.538, 0.741], [0.46, 0.797], [0.376, 0.845], [0.287, 0.884], [0.194, 0.913], [0.098, 0.933], [0, 0.943], [-0.099, 0.942], [-0.198, 0.931], [-0.296, 0.91], [-0.391, 0.878], [-0.483, 0.836], [-0.57, 0.785], [-0.652, 0.724], [-0.728, 0.655], [-0.796, 0.578], [-0.856, 0.494], [-0.907, 0.404], [-0.949, 0.308], [-0.98, 0.208], [-1.001, 0.105], [-1.011, 0], [-1.01, -0.106], [-0.998, -0.212], [-0.975, -0.317], [-0.941, -0.419], [-0.896, -0.517], [-0.84, -0.611], [-0.775, -0.698], [-0.701, -0.779], [-0.619, -0.852], [-0.529, -0.916], [-0.432, -0.97], [-0.33, -1.014], [-0.223, -1.047], [-0.112, -1.07], [0, -1.08], [0.113, -1.079], [0.226, -1.065], [0.338, -1.04], [0.447, -1.003], [0.551, -0.955], [0.651, -0.896], [0.744, -0.826], [0.83, -0.747], [0.907, -0.659], [0.975, -0.563], [1.033, -0.46], [1.079, -0.351], [1.115, -0.237], [1.138, -0.12], [1.149, 0], [1.147, 0.121], [1.132, 0.241], [1.105, 0.359], [1.066, 0.475], [1.014, 0.586], [0.951, 0.691], [0.877, 0.79], [0.793, 0.881], [0.699, 0.962], [0.597, 1.034], [0.488, 1.095], [0.372, 1.145], [0.251, 1.182], [0.127, 1.206], [0, 1.217], [-0.128, 1.215], [-0.255, 1.199], [-0.38, 1.171], [-0.502, 1.129], [-0.62, 1.074], [-0.732, 1.007], [-0.836, 0.928], [-0.932, 0.839], [-1.018, 0.74], [-1.094, 0.631], [-1.158, 0.516], [-1.21, 0.393], [-1.249, 0.265], [-1.274, 0.134], [-1.286, 0], [-1.283, -0.135], [-1.267, -0.269], [-1.236, -0.402], [-1.191, -0.53], [-1.133, -0.654], [-1.062, -0.772], [-0.979, -0.882], [-0.885, -0.983], [-0.78, -1.073], [-0.666, -1.153], [-0.543, -1.22], [-0.414, -1.275], [-0.28, -1.316], [-0.141, -1.342], [0, -1.354], [0.142, -1.351], [0.283, -1.334], [0.423, -1.301], [0.558, -1.254], [0.689, -1.193], [0.812, -1.118], [0.928, -1.03], [1.034, -0.931], [1.129, -0.82], [1.212, -0.7]], step: 1 },
            { kind: "label", at: [0.1, 1.55], label: "1050°", labelAt: "e", step: 1 },
            { kind: "vector", to: [1.905, -1.1], step: 1 },
            { kind: "arc", centre: [0, 0], r: 0.45, from: 0, to: 330, step: 2, tone: "good" },
            { kind: "label", at: [1.905, -1.1], label: "330°", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [0.3, -2.3], label: "also −30°, not 30°", labelAt: "e", step: 3 },
          ],
        },
      },
    },
  ],
};
