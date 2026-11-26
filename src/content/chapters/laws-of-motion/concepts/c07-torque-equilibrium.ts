import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Try pushing a door open with your hand right next to the hinges. Then push at the handle, on the far edge. Why is the same push so much more effective at the handle?`,
    reveal: t`The turning effect of a force, its **torque**, is the force times its perpendicular distance from the axis. At the handle that distance is largest, so the same push gives the most torque.`,
  },
  explanation: {
    intuition: [
      t`A force can turn a body about an axis as well as push it along.`,
      t`The turning effect grows with the force and with its distance from the axis.`,
      t`It is largest when the force is at right angles to the line from the axis.`,
      t`Two equal and opposite forces along different lines turn a body without moving it along.`,
      t`A body is balanced when nothing pushes it along and nothing turns it.`,
    ],
    formal: [
      {
        title: "Moment of a force",
        points: [
          t`The **moment of a force**, or **torque**, about a point O is $\vec{\tau}$ $= \vec{r} \times \vec{F}$.`,
          t`Here $\vec{r}$ is the position vector, from O, of the point where the force acts.`,
          t`Its size is $\tau = rF\sin\theta$, where $\theta$ is the angle between $\vec{r}$ and $\vec{F}$.`,
          t`$r\sin\theta$ is the perpendicular distance of the force's line of action from O, so $\tau = F \times$ (perpendicular distance).`,
          t`Its unit is $\mathrm{N\,m}$; a force whose line passes through O has no moment about O.`,
        ],
      },
      {
        title: "Couples",
        points: [
          t`A **couple** is a pair of equal and opposite forces with different lines of action.`,
          t`Its net force is zero, so it gives no translation, only rotation.`,
          t`Its torque is $Fd$, where $d$ is the perpendicular distance between the two lines.`,
          t`This is the same about every point: any distance to the axis cancels between the two forces.`,
          t`Turning a tap or a steering wheel applies a couple.`,
        ],
      },
      {
        title: "Mechanical equilibrium",
        points: [
          t`A body is in **mechanical equilibrium** when it has no linear or angular acceleration.`,
          t`**Translational equilibrium:** the net force on it is zero, $\sum\vec{F} = 0$.`,
          t`**Rotational equilibrium:** the net torque about any point is zero, $\sum\vec{\tau} = 0$.`,
          t`Take moments about a point that unknown forces pass through: their moments vanish.`,
          t`A uniform body's weight acts at its middle; never leave it out.`,
        ],
      },
      {
        title: "Centre of gravity",
        points: [
          t`The **centre of gravity** is the point through which the body's whole weight acts.`,
          t`Where $g$ is the same over the body, it coincides with the centre of mass.`,
          t`For a very tall body, like a mountain, $g$ varies and the two points differ.`,
          t`A body balances on a pivot when its centre of gravity is directly above or below the pivot.`,
          t`A supported body topples when its weight's moment about the edge support can no longer be balanced.`,
        ],
      },
    ],
    worked: {
      prompt: t`A uniform plank of mass $40\ \mathrm{kg}$ hangs from two vertical cables $3\ \mathrm{m}$ apart, each able to bear $600\ \mathrm{N}$. A boy of mass $60\ \mathrm{kg}$ stands at the centre. How far can he walk from the centre towards one cable? ($g = 10\ \mathrm{m/s^2}$)`,
      steps: [
        t`Weights: plank $400\ \mathrm{N}$ at the centre, boy $600\ \mathrm{N}$ at distance $x$ from the centre.`,
        t`Moments about cable 1, which is $1.5\ \mathrm{m}$ from the centre: $T_2 \times 3$ $= 400(1.5) + 600(1.5 + x)$.`,
        t`So $T_2 = 500 + 200x$.`,
        t`Cable 2 holds while $500 + 200x \le 600$, that is $x \le 0.5\ \mathrm{m}$.`,
      ],
      answer: t`$0.5\ \mathrm{m}$ either way from the centre`,
    },
    visualSpec: t`Drag a person along a plank resting on two supports and watch the support forces change until one reaches zero and the plank tips.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Uses $\tau = rF$, ignoring the angle.`,
      remediation: t`Only the perpendicular distance counts: $\tau = rF\sin\theta$.`,
      fallback: { kind: "ext", topic: "cross product (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C07-M2",
      mistake: "Takes the wrong component: cos for sin, or the height for the horizontal distance.",
      remediation: "The moment arm is the **perpendicular** distance from the axis to the force's line of action; for a vertical weight, a horizontal distance.",
      fallback: { kind: "ext", topic: "cross product (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C07-M3",
      mistake: "Leaves out the body's own weight.",
      remediation: "A uniform rod, plank or ladder has its own weight acting at its middle. Include its moment.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Turns the ratio of the tensions upside down.",
      remediation: "The string nearer the load carries more of it: it is the larger tension.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Puts the whole of the boy's weight on the nearer string.",
      remediation: "The boy's weight is shared between the strings in the inverse ratio of his distances from them; take moments to find the shares.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Leaves the distance in cm.",
      remediation: t`$25\ \mathrm{cm} = 0.25\ \mathrm{m}$: torque in $\mathrm{N\,m}$ needs metres.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Gives only the distance past the second support.",
      remediation: t`The question asks from the starting support: add the $2\ \mathrm{m}$ between the supports.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Measures the plank weight's moment arm from the end, not from the support.",
      remediation: "The plank tips about the second support, so the arm of its weight is from its middle to that support.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Leaves the climber out of the ground's normal reaction.",
      remediation: t`The ground holds up everything: $N = (M + m)g$, so the largest friction is $\mu(M + m)g$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks a couple has no effect because its forces cancel.",
      remediation: t`A couple's forces cancel as a push, but not as a turn: they act along different lines, giving a torque $Fd$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M11",
      mistake: "Adds the moments of the two forces, ignoring that they turn opposite ways.",
      remediation: t`About O one force turns anticlockwise and the other clockwise: subtract, $F(a + d) - Fa = Fd$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Counts only the farther force.",
      remediation: t`Both forces have moments about O. The nearer one's moment $Fa$ is opposite, so the total is $Fd$, whatever $a$ is.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.2 (xviii)" },
      stem: t`A force of $30\ \mathrm{N}$ is applied to a spanner $25\ \mathrm{cm}$ from the nut, at $30^\circ$ to the length of the spanner. What torque does it apply about the nut?`,
      verify: { kind: "value", inputs: { F: "30", r_cm: "25", th: "30" }, params: { ask: "spanner" } },
      options: [
        { key: "A", text: t`$6.5\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C07-M2", value: "6.50000000000000" },
        { key: "B", text: t`$375\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C07-M6", value: "375" },
        { key: "C", text: t`$3.75\ \mathrm{N\,m}$`, correct: true, value: "3.75000000000000" },
        { key: "D", text: t`$7.5\ \mathrm{N\,m}$`, correct: false, misconceptionId: "C07-M1", value: "7.50000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 0.25\ \mathrm{m}$ and $\sin 30^\circ = 0.5$.`,
          t`$\tau = rF\sin\theta$ $= 0.25 \times 30 \times 0.5$ $= 3.75\ \mathrm{N\,m}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.1 (vi)" },
      stem: t`A uniform rod of mass $m$ is held horizontal by two vertical strings tied at its ends. A boy of mass $2m$ hangs from the rod at one quarter of its length from one end. What is the ratio of the tension in the string nearer the boy to that in the other string?`,
      verify: { kind: "value", inputs: { mr: "1", mb: "2", f: "1/4" }, params: { ask: "rod" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C07-M3", value: "3" },
        { key: "B", text: t`$0.5$`, correct: false, misconceptionId: "C07-M4", value: "0.500000000000000" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C07-M5", value: "5" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Rod length $L$; moments about the far end: $T_{near}L$ $= mg\dfrac{L}{2} + 2mg\dfrac{3L}{4}$, so $T_{near} = 2mg$.`,
          t`Forces: $T_{near} + T_{far} = 3mg$, so $T_{far} = mg$.`,
          t`Ratio $= \dfrac{2mg}{mg} = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (xiv)" },
      stem: t`A uniform plank $4\ \mathrm{m}$ long of mass $30\ \mathrm{kg}$ rests on two supports, each $1\ \mathrm{m}$ from an end. A person of mass $75\ \mathrm{kg}$ starts at one support and walks towards the far end. How far from the starting support can the person walk before the plank topples?`,
      verify: { kind: "value", inputs: { L: "4", mp: "30", a: "1", mm: "75" }, params: { ask: "plank" } },
      options: [
        { key: "A", text: t`$2.8\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M8", value: "2.80000000000000" },
        { key: "B", text: t`$2.4\ \mathrm{m}$`, correct: true, value: "2.40000000000000" },
        { key: "C", text: t`$2\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M3", value: "2" },
        { key: "D", text: t`$0.4\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M7", value: "0.400000000000000" },
      ],
      solution: {
        steps: [
          t`Supports at $1\ \mathrm{m}$ and $3\ \mathrm{m}$ from one end; the plank's weight acts at $2\ \mathrm{m}$, $1\ \mathrm{m}$ inside the second support.`,
          t`Past the second support by $x$, it tips when $75gx = 30g \times 1$: $x = 0.4\ \mathrm{m}$.`,
          t`From the starting support: $2 + 0.4$ $= 2.4\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (xv)" },
      stem: t`A uniform ladder $2\ \mathrm{m}$ long of mass $10\ \mathrm{kg}$ leans against a smooth wall with its foot $1.2\ \mathrm{m}$ from the wall. The ground can give a horizontal friction of at most half the normal reaction. A monkey of mass $20\ \mathrm{kg}$ climbs the ladder. How far along the ladder can it climb before the ladder slips? ($g = 10\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { L: "2", b: "6/5", M: "10", m: "20", mu: "1/2", g: "10" }, params: { ask: "ladder" } },
      options: [
        { key: "A", text: t`$1.5\ \mathrm{m}$`, correct: true, value: "1.50000000000000" },
        { key: "B", text: t`$2\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M3", value: "2" },
        { key: "C", text: t`$1\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M2", value: "1" },
        { key: "D", text: t`$0.167\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M9", value: "0.167000000000000" },
      ],
      solution: {
        steps: [
          t`Height of the top: $\sqrt{2^2 - 1.2^2}$ $= 1.6\ \mathrm{m}$. $N = 30 \times 10 = 300\ \mathrm{N}$, so the wall's push $R$ is at most $150\ \mathrm{N}$.`,
          t`Moments about the foot, with the monkey $s$ along the ladder: $R(1.6) = 100(0.6) + 200(0.6s)$.`,
          t`$240 = 60 + 120s$, so $s = 1.5\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.2 (xix)" },
      stem: t`Two equal and opposite forces $F$ act on a body along parallel lines a distance $d$ apart, forming a couple. A point O lies on the perpendicular joining their lines of action, outside the pair, a distance $a$ from the nearer force, as shown. What is the total moment of the two forces about an axis through O, at right angles to their plane?`,
      figure: {
        alt: "An axis O on the left. A distance a to its right, a force F points up; a further distance d to the right, an equal force F points down.",
        axes: "none",
        view: { x: [0, 10], y: [-2.4, 2.4] },
        elements: [
          { kind: "point", at: [1, 0], label: "O", labelAt: "w" },
          { kind: "segment", from: [1, 0], to: [9, 0], dashed: true, tone: "muted" },
          { kind: "vector", from: [4, 0], to: [4, 1.8], label: "F", labelAt: "e", tone: "good" },
          { kind: "vector", from: [8, 0], to: [8, -1.8], label: "F", labelAt: "e", tone: "good" },
          { kind: "label", at: [2.5, 0], label: "a", labelAt: "s" },
          { kind: "label", at: [6, 0], label: "d", labelAt: "s" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { ask: "couple" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C07-M10", value: "0" },
        { key: "B", text: t`$F(2a + d)$`, correct: false, misconceptionId: "C07-M11", value: "F*(2*a + d)" },
        { key: "C", text: t`$F(a + d)$`, correct: false, misconceptionId: "C07-M12", value: "F*(a + d)" },
        { key: "D", text: t`$Fd$`, correct: true, value: "F*d" },
      ],
      solution: {
        steps: [
          t`The far force, at $a + d$, turns one way: moment $F(a + d)$. The near force, at $a$, turns the other way: $Fa$.`,
          t`Total $= F(a + d) - Fa$ $= Fd$, the same for any $a$.`,
        ],
      },
    },
  ],
};
