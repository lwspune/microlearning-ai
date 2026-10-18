import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A flagpole leans so that it makes $25^\circ$ with the vertical. The vertical is the ground's normal. What angle does the pole make with the ground?`,
    reveal: t`$65^\circ$, not $25^\circ$. The normal stands at $90^\circ$ to the ground, so a line's angle with a plane is $90^\circ$ minus its angle with the normal. That swap turns $\cos$ into $\sin$.`,
  },
  explanation: {
    intuition: [
      t`A plane's **normal** $\vec n$ is a vector at right angles to every line in the plane.`,
      t`Tilt a plane and its normal tilts by the same amount.`,
      t`So the angle between two planes is the angle between their normals.`,
      t`A line's angle with a plane is the angle it makes with its **shadow** on the plane.`,
      t`The normal is at $90^\circ$ to that shadow, so the line meets the normal at $90^\circ - \theta$.`,
      t`We always report the acute angle, between $0^\circ$ and $90^\circ$.`,
    ],
    formal: [
      {
        title: "Angle between two planes",
        points: [
          t`Two planes that are not parallel meet in a line; look along that line.`,
          t`Each normal stands at $90^\circ$ to its own plane, so they turn through the same $\theta$.`,
          t`So $\cos\theta = \dfrac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$, for $\vec r\cdot\vec n_1 = d_1$ and $\vec r\cdot\vec n_2 = d_2$.`,
          t`The modulus keeps $\cos\theta \ge 0$, so $\theta$ is the acute angle.`,
          t`For $a_1x + b_1y + c_1z + d_1 = 0$, the normal is $(a_1, b_1, c_1)$; the constant plays no part.`,
        ],
        figure: {
          alt: "Two planes seen edge-on, so each looks like a line through O: one level, one tilted up by θ. A normal arrow stands at right angles to each plane: n₁ straight up, n₂ tilted the same way. The angle between the planes and the angle between the normals are both marked θ.",
          axes: "none",
          view: { x: [-3.2, 3.2], y: [-1.6, 3.4] },
          elements: [
            { kind: "line", through: [[-3, 0], [3, 0]], tone: "muted", label: "plane 1", labelAt: "s", step: 1 },
            { kind: "line", through: [[-1.8, -1.51], [1.8, 1.51]], tone: "muted", label: "plane 2", labelAt: "se", step: 1 },
            { kind: "point", at: [0, 0], step: 1, label: "O", labelAt: "s" },
            { kind: "vector", from: [0, 0], to: [0, 2.6], label: "n₁", labelAt: "n", tone: "accent", step: 2 },
            { kind: "vector", from: [0, 0], to: [-1.67, 1.99], label: "n₂", labelAt: "nw", tone: "accent", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 40, label: "θ", labelAt: "e", tone: "good", step: 2 },
            { kind: "angle", at: [0, 0], from: 90, to: 130, label: "θ", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Angle between line and plane",
        points: [
          t`Take the line $\vec r = \vec a + \lambda\vec b$ meeting the plane $\vec r\cdot\vec n = d$ at $A$.`,
          t`The normal $\vec n$ stands straight up from the plane at $A$.`,
          t`Drop a perpendicular from a point of the line: its foot traces the line's **shadow** $AM$.`,
          t`The angle $\theta$ between the line and the plane is the angle between the line and its shadow.`,
          t`The line meets the normal at $90^\circ - \theta$, and $\cos(90^\circ - \theta) = \sin\theta$.`,
          t`So $\sin\theta = \dfrac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$; only $\vec b$ matters, never the point $\vec a$.`,
        ],
        figure: {
          alt: "A plane drawn as a slanted parallelogram. A line along b leaves the plane at A and rises to P. A dashed drop from P meets the plane at M, so AM is the line's shadow on the plane. The normal n stands straight up from A. The angle θ between the line and its shadow is marked, and the angle 90° − θ between the line and the normal.",
          axes: "none",
          view: { x: [-3.8, 3.6], y: [-1.5, 4] },
          elements: [
            { kind: "segment", from: [-3.4, -0.8], to: [1.6, -0.8], tone: "muted" },
            { kind: "segment", from: [1.6, -0.8], to: [3.2, 1.2], tone: "muted" },
            { kind: "segment", from: [3.2, 1.2], to: [-1.8, 1.2], tone: "muted" },
            { kind: "segment", from: [-1.8, 1.2], to: [-3.4, -0.8], tone: "muted" },
            { kind: "point", at: [-0.6, 0.2], step: 1, label: "A", labelAt: "sw" },
            { kind: "vector", from: [-0.6, 0.2], to: [1.6, 2.4], label: "b", labelAt: "ne", step: 1 },
            { kind: "vector", from: [-0.6, 0.2], to: [-0.6, 3.4], label: "n", labelAt: "w", tone: "accent", step: 2 },
            { kind: "segment", from: [1.6, 2.4], to: [1.6, -0.4], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [-0.6, 0.2], to: [1.6, -0.4], tone: "good", step: 3 },
            { kind: "point", at: [1.6, -0.4], step: 3, label: "M", labelAt: "se" },
            { kind: "angle", at: [-0.6, 0.2], from: -15, to: 45, label: "θ", labelAt: "e", tone: "good", step: 4 },
            { kind: "angle", at: [-0.6, 0.2], from: 45, to: 90, tone: "bad", step: 5 },
            { kind: "label", at: [-0.55, 1.9], label: "90° − θ", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Lengths in the formulae",
        points: [
          t`$|\vec n|$ is the length of $\vec n = a\hat i + b\hat j + c\hat k$.`,
          t`$|\vec n| = \sqrt{a^2 + b^2 + c^2}$: the square root is part of the length.`,
          t`For instance $|\hat i + 2\hat j + 2\hat k| = \sqrt9 = 3$, not $9$.`,
          t`A normal can be scaled: $(1, 2, 2)$ and $(-2, -4, -4)$ give the same angles.`,
        ],
      },
      {
        title: "Parallel and perpendicular",
        points: [
          t`Planes are **perpendicular** when $\vec n_1\cdot\vec n_2 = 0$, so $\theta = 90^\circ$.`,
          t`Planes are **parallel** when $\vec n_2$ is a multiple of $\vec n_1$, so $\theta = 0^\circ$.`,
          t`A line is **parallel** to a plane when $\vec b\cdot\vec n = 0$, so $\sin\theta = 0$.`,
          t`A line is **perpendicular** to a plane when $\vec b$ is a multiple of $\vec n$, so $\theta = 90^\circ$.`,
          t`The conditions swap between the two cases because a line is compared with the normal at $90^\circ - \theta$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the acute angle between the line $\vec r = \lambda(\hat i - \hat j + \hat k)$ and the plane $\vec r\cdot(2\hat i - \hat j + \hat k) = 23$.`,
      steps: [
        t`The line's direction is $\vec b = \hat i - \hat j + \hat k$; the plane's normal is $\vec n = 2\hat i - \hat j + \hat k$.`,
        t`$\vec b\cdot\vec n = 2 + 1 + 1 = 4$.`,
        t`$|\vec b| = \sqrt3$ and $|\vec n| = \sqrt6$, so $|\vec b||\vec n| = \sqrt{18} = 3\sqrt2$.`,
        t`$\sin\theta = \dfrac{4}{3\sqrt2} = \dfrac{2\sqrt2}{3}$.`,
        t`So $\theta = \sin^{-1}\left(\frac{2\sqrt2}{3}\right)$, about $70.5^\circ$.`,
      ],
      answer: t`$\sin^{-1}\left(\frac{2\sqrt2}{3}\right)$. The line makes the other angle, $\cos^{-1}\left(\frac{2\sqrt2}{3}\right)$, with the normal.`,
    },
    visualSpec: t`Tilt a plane about a hinge line, or swing a line about its foot; the panel shows the normals, the shadow, $\theta$ and $90^\circ - \theta$ updating together.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Takes a line's angle with a plane to be its angle with the normal: $\cos\theta = \frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$.`,
      remediation: t`The normal is at $90^\circ$ to the plane, so the line meets the normal at $90^\circ - \theta$. Use $\sin\theta = \frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C10-M2",
      mistake: t`Uses $\sin\theta = \frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$ for two planes, as for a line and a plane.`,
      remediation: t`Two planes tilt by exactly as much as their normals, so the angle between planes is the angle between normals. Use $\cos\theta = \frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C10-M3",
      mistake: t`Leaves out the modulus, $\cos\theta = \frac{\vec n_1\cdot\vec n_2}{|\vec n_1||\vec n_2|}$, so a negative dot product gives an obtuse angle.`,
      remediation: t`The angle between planes is the acute one. Take $|\vec n_1\cdot\vec n_2|$, so $\cos\theta \ge 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Uses the line's point, the position vector $\vec a$, in place of its direction $\vec b$.`,
      remediation: t`Only the direction $\vec b$, the vector multiplied by $\lambda$, sets how the line tilts. The point $\vec a$ only places the line.`,
      fallback: { kind: "ext", topic: "equation of a line" },
    },
    {
      id: "C10-M5",
      mistake: t`Takes a length as the sum of squares, $|\vec n| = a^2 + b^2 + c^2$, forgetting the square root.`,
      remediation: t`$|\vec n| = \sqrt{a^2 + b^2 + c^2}$. For example $|\hat i + 2\hat j + 2\hat k| = \sqrt9 = 3$, not 9.`,
      fallback: { kind: "ext", topic: "magnitude of a vector" },
    },
  ],
  engineNotes: [
    t`C10-M3 gives the key when $\vec n_1\cdot\vec n_2 \ge 0$: draw planes items with a negative dot product (all of C10-Q1, Q2, Q5 have one).`,
    t`C10-M4 needs a line whose point is not the origin. C10-M1 and C10-M2 give the key only at $45^\circ$.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.12" },
      stem: t`Find the angle between the planes $\vec r\cdot(\hat i - 2\hat j + 3\hat k) + 4 = 0$ and $\vec r\cdot(2\hat i + \hat j - 3\hat k) + 7 = 0$.`,
      verify: { kind: "value", inputs: { n1: "(1, -2, 3)", n2: "(2, 1, -3)" }, params: { ask: "planes" } },
      options: [
        { key: "A", text: t`$\sin^{-1}\left(\frac{9}{14}\right)$`, correct: false, misconceptionId: "C10-M2", value: "asin(9/14)" },
        { key: "B", text: t`$\cos^{-1}\left(- \frac{9}{14}\right)$`, correct: false, misconceptionId: "C10-M3", value: "acos(-9/14)" },
        { key: "C", text: t`$\cos^{-1}\left(\frac{9}{196}\right)$`, correct: false, misconceptionId: "C10-M5", value: "acos(9/196)" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{9}{14}\right)$`, correct: true, value: "acos(9/14)" },
      ],
      solution: {
        steps: [
          t`The normals are $\vec n_1 = \hat i - 2\hat j + 3\hat k$ and $\vec n_2 = 2\hat i + \hat j - 3\hat k$.`,
          t`$\vec n_1\cdot\vec n_2 = 2 - 2 - 9 = -9$, and $|\vec n_1| = |\vec n_2| = \sqrt{14}$.`,
          t`$\cos\theta = \dfrac{|-9|}{\sqrt{14}\sqrt{14}} = \dfrac{9}{14}$, so $\theta = \cos^{-1}\left(\frac{9}{14}\right)$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.15" },
      stem: t`Find the measure of the angle between the planes $-5x + 2y - 3z + 7 = 0$ and $15x - 6y + 9z + 5 = 0$.`,
      verify: { kind: "value", inputs: { n1: "(-5, 2, -3)", n2: "(15, -6, 9)" }, params: { ask: "planes" } },
      options: [
        { key: "A", text: t`$0^\circ$`, correct: true, value: "0" },
        { key: "B", text: t`$90^\circ$`, correct: false, misconceptionId: "C10-M2", value: "pi/2" },
        { key: "C", text: t`$180^\circ$`, correct: false, misconceptionId: "C10-M3", value: "pi" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{1}{114}\right)$`, correct: false, misconceptionId: "C10-M5", value: "acos(1/114)" },
      ],
      solution: {
        steps: [
          t`The normals are $\vec n_1 = (-5, 2, -3)$ and $\vec n_2 = (15, -6, 9)$.`,
          t`$\vec n_2 = -3\vec n_1$, so the normals are parallel, and so are the planes.`,
          t`Check: $\cos\theta = \dfrac{|-75 - 12 - 27|}{\sqrt{38}\cdot 3\sqrt{38}}$ $= \dfrac{114}{114} = 1$.`,
          t`So $\theta = 0^\circ$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.4 Q.2" },
      stem: t`Find the acute angle between the line $\vec r = (\hat i + 2\hat j + 2\hat k)$ $+ \lambda(2\hat i + 3\hat j - 6\hat k)$ and the plane $\vec r\cdot(2\hat i - \hat j + \hat k) = 0$.`,
      verify: { kind: "value", inputs: { a: "(1, 2, 2)", b: "(2, 3, -6)", n: "(2, -1, 1)" }, params: { ask: "lineplane" } },
      options: [
        { key: "A", text: t`$\sin^{-1}\left(\frac{5}{294}\right)$`, correct: false, misconceptionId: "C10-M5", value: "asin(5/294)" },
        { key: "B", text: t`$\sin^{-1}\left(\frac{5 \sqrt{6}}{42}\right)$`, correct: true, value: "asin(5*sqrt(6)/42)" },
        { key: "C", text: t`$\cos^{-1}\left(\frac{5 \sqrt{6}}{42}\right)$`, correct: false, misconceptionId: "C10-M1", value: "acos(5*sqrt(6)/42)" },
        { key: "D", text: t`$\sin^{-1}\left(\frac{\sqrt{6}}{9}\right)$`, correct: false, misconceptionId: "C10-M4", value: "asin(sqrt(6)/9)" },
      ],
      solution: {
        steps: [
          t`The direction is $\vec b = 2\hat i + 3\hat j - 6\hat k$; the point $\hat i + 2\hat j + 2\hat k$ plays no part.`,
          t`With $\vec n = 2\hat i - \hat j + \hat k$: $\vec b\cdot\vec n = 4 - 3 - 6 = -5$.`,
          t`$|\vec b| = \sqrt{49} = 7$ and $|\vec n| = \sqrt6$.`,
          t`$\sin\theta = \dfrac{|-5|}{7\sqrt6} = \dfrac{5\sqrt6}{42}$, so $\theta = \sin^{-1}\left(\frac{5\sqrt6}{42}\right)$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.5 SolvedEx.13" },
      stem: t`Find the angle between the line $\vec r = (\hat i + 2\hat j + \hat k)$ $+ \lambda(\hat i + \hat j + \hat k)$ and the plane $\vec r\cdot(2\hat i - \hat j + \hat k) = 8$.`,
      verify: { kind: "value", inputs: { a: "(1, 2, 1)", b: "(1, 1, 1)", n: "(2, -1, 1)" }, params: { ask: "lineplane" } },
      options: [
        { key: "A", text: t`$\sin^{-1}\left(\frac{1}{6}\right)$`, correct: false, misconceptionId: "C10-M4", value: "asin(1/6)" },
        { key: "B", text: t`$\sin^{-1}\left(\frac{1}{9}\right)$`, correct: false, misconceptionId: "C10-M5", value: "asin(1/9)" },
        { key: "C", text: t`$\sin^{-1}\left(\frac{\sqrt{2}}{3}\right)$`, correct: true, value: "asin(sqrt(2)/3)" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{\sqrt{2}}{3}\right)$`, correct: false, misconceptionId: "C10-M1", value: "acos(sqrt(2)/3)" },
      ],
      solution: {
        steps: [
          t`$\vec b = \hat i + \hat j + \hat k$ and $\vec n = 2\hat i - \hat j + \hat k$.`,
          t`$\vec b\cdot\vec n = 2 - 1 + 1 = 2$; $|\vec b| = \sqrt3$, $|\vec n| = \sqrt6$.`,
          t`$\sin\theta = \dfrac{2}{\sqrt{18}} = \dfrac{2}{3\sqrt2} = \dfrac{\sqrt2}{3}$.`,
          t`So $\theta = \sin^{-1}\left(\frac{\sqrt2}{3}\right)$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.5 SolvedEx.12" },
      stem: t`Find the angle between the planes $x + y - 2z = 8$ and $-2x + y + z = 3$.`,
      verify: { kind: "value", inputs: { n1: "(1, 1, -2)", n2: "(-2, 1, 1)" }, params: { ask: "planes" } },
      options: [
        { key: "A", text: t`$60^\circ$`, correct: true, value: "pi/3" },
        { key: "B", text: t`$30^\circ$`, correct: false, misconceptionId: "C10-M2", value: "pi/6" },
        { key: "C", text: t`$120^\circ$`, correct: false, misconceptionId: "C10-M3", value: "2*pi/3" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{1}{12}\right)$`, correct: false, misconceptionId: "C10-M5", value: "acos(1/12)" },
      ],
      solution: {
        steps: [
          t`The normals are $\vec n_1 = (1, 1, -2)$ and $\vec n_2 = (-2, 1, 1)$.`,
          t`$\vec n_1\cdot\vec n_2 = -2 + 1 - 2 = -3$, and $|\vec n_1| = |\vec n_2| = \sqrt6$.`,
          t`$\cos\theta = \dfrac{|-3|}{6} = \dfrac12$, so $\theta = 60^\circ$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "authored" },
      stem: t`Find the angle between the line $\frac{x-3}{1} = \frac{y-1}{-2}$ $= \frac{z+1}{2}$ and the plane $2x - 4y + 4z + 5 = 0$.`,
      verify: { kind: "value", inputs: { a: "(3, 1, -1)", b: "(1, -2, 2)", n: "(2, -4, 4)" }, params: { ask: "lineplane" } },
      options: [
        { key: "A", text: t`$90^\circ$`, correct: true, value: "pi/2" },
        { key: "B", text: t`$0^\circ$`, correct: false, misconceptionId: "C10-M1", value: "0" },
        { key: "C", text: t`$\sin^{-1}\left(\frac{\sqrt{11}}{33}\right)$`, correct: false, misconceptionId: "C10-M4", value: "asin(sqrt(11)/33)" },
        { key: "D", text: t`$\sin^{-1}\left(\frac{1}{18}\right)$`, correct: false, misconceptionId: "C10-M5", value: "asin(1/18)" },
      ],
      solution: {
        steps: [
          t`The line has $\vec b = (1, -2, 2)$; the plane has $\vec n = (2, -4, 4)$.`,
          t`$\vec n = 2\vec b$, so the line runs along the normal.`,
          t`Check: $\sin\theta = \dfrac{|2 + 8 + 8|}{3 \cdot 6} = 1$.`,
          t`So $\theta = 90^\circ$: the line is perpendicular to the plane.`,
        ],
      },
    },
  ],
};
