import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`The line $\vec r = \lambda(\hat i + \hat j)$ lies on the floor. The line $\vec r = \hat k + \mu\hat j$ runs one unit above it. They never meet. Is there an angle between them?`,
    reveal: t`Yes, $45^\circ$. Lower the upper line onto the floor without turning it: it crosses the first at $45^\circ$. The angle between lines is the angle between their directions, $\hat i + \hat j$ and $\hat j$.`,
  },
  explanation: {
    intuition: [
      t`A line's **direction vector** $\vec b$ points along it; its components are the line's **direction ratios**.`,
      t`The angle between two lines is the angle between their direction vectors.`,
      t`Points on the lines only place them; they never change the angle.`,
      t`Even lines that never meet have an angle: slide one, without turning it, until they cross.`,
      t`Crossing lines make two angles, an acute one and an obtuse one; we report the acute one.`,
      t`A zero dot product of the directions means the lines are perpendicular.`,
    ],
    formal: [
      {
        title: "Angle between two lines",
        points: [
          t`Take the lines $\vec r = \vec a_1 + \lambda\vec b_1$ and $\vec r = \vec a_2 + \mu\vec b_2$.`,
          t`$\vec b_1$ and $\vec b_2$ say which way each line runs; $\vec a_1$, $\vec a_2$ are points on them.`,
          t`The angle $\theta$ between the lines is the angle between $\vec b_1$ and $\vec b_2$.`,
          t`Moving a line parallel to itself keeps $\theta$, so $\vec a_1$ and $\vec a_2$ play no part.`,
          t`So **skew lines**, which neither meet nor are parallel, still have an angle.`,
        ],
      },
      {
        title: "Take the acute angle",
        points: [
          t`A line has no arrowhead: $\vec b$ and $-\vec b$ give the same line.`,
          t`So two crossing lines make two angles, $\theta$ and $180^\circ - \theta$.`,
          t`The angle between the lines is the **acute** one, $0^\circ \le \theta \le 90^\circ$.`,
          t`Hence $\cos\theta = \frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}$, with a modulus on top.`,
          t`Without the modulus, a negative $\vec b_1\cdot\vec b_2$ gives the obtuse angle instead.`,
        ],
        figure: {
          alt: "Two straight lines cross at a point. One carries two opposite arrows, b and −b, showing a line has no single direction. At the crossing the lines make an acute angle θ and an obtuse angle 180° − θ.",
          axes: "none",
          view: { x: [-3.5, 3.5], y: [-3.5, 3.5] },
          elements: [
            { kind: "line", through: [[-3, -1.09], [3, 1.09]], tone: "muted", step: 1 },
            { kind: "vector", from: [0, 0], to: [1.7, 0.62], label: "b", labelAt: "se", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [-1.7, -0.62], label: "−b", labelAt: "se", tone: "accent", step: 1 },
            { kind: "line", through: [[-0.53, -3], [0.53, 3]], tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: 80, to: 200, label: "180° − θ", labelAt: "nw", tone: "bad", step: 2 },
            { kind: "angle", at: [0, 0], from: 20, to: 80, label: "θ", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Using direction ratios",
        points: [
          t`Let the lines have direction ratios $a_1, b_1, c_1$ and $a_2, b_2, c_2$.`,
          t`The top of $\cos\theta$ is $|a_1a_2 + b_1b_2 + c_1c_2|$.`,
          t`The bottom is $\sqrt{a_1^2 + b_1^2 + c_1^2}$ $\times \sqrt{a_2^2 + b_2^2 + c_2^2}$.`,
          t`Direction ratios are any multiple of the direction, so dividing by these lengths is essential.`,
          t`Only **direction cosines** $l, m, n$, a unit vector's components, give $\cos\theta = |l_1l_2 + m_1m_2 + n_1n_2|$.`,
          t`Scaling a direction, say $2, -4, 6$ to $1, -2, 3$, never changes $\theta$.`,
        ],
      },
      {
        title: "Reading the direction ratios",
        points: [
          t`The denominators are the ratios only in the form $\frac{x - x_1}{a} = \frac{y - y_1}{b}$ $= \frac{z - z_1}{c}$.`,
          t`There each numerator starts with $x$, $y$ or $z$ itself: plus sign, coefficient 1.`,
          t`A minus in front: $\frac{2 - x}{5} = \frac{x - 2}{-5}$, so the ratio is $-5$.`,
          t`A coefficient: $\frac{3y - 6}{4} = \frac{y - 2}{4/3}$, so the ratio is $\frac43$.`,
          t`Equal expressions: $4x = 2y = -z$ is $\frac{x}{1/4} = \frac{y}{1/2} = \frac{z}{-1}$.`,
          t`So its ratios are $\frac14, \frac12, -1$, or $1, 2, -4$ after multiplying by 4.`,
        ],
      },
      {
        title: "Perpendicular lines",
        points: [
          t`Two lines are **perpendicular** when $\theta = 90^\circ$, that is $\cos\theta = 0$.`,
          t`That happens exactly when $\vec b_1\cdot\vec b_2 = 0$.`,
          t`In direction ratios: $a_1a_2 + b_1b_2 + c_1c_2 = 0$.`,
          t`The lengths don't matter here, since zero divided by anything is zero.`,
          t`To find an unknown that makes lines perpendicular, read each ratio correctly, then solve this equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the acute angle between the lines $\frac{x-3}{2} = \frac{y+1}{1}$ $= \frac{z-4}{-1}$ and $\frac{1-x}{1} = \frac{2y-3}{2}$ $= \frac{z+2}{2}$.`,
      steps: [
        t`The first line is in standard form, so $\vec b_1 = 2\hat i + \hat j - \hat k$.`,
        t`In the second, $1 - x = -(x - 1)$ and $2y - 3 = 2\left(y - \frac32\right)$.`,
        t`So it is $\frac{x-1}{-1} = \frac{y - 3/2}{1}$ $= \frac{z+2}{2}$, and $\vec b_2 = -\hat i + \hat j + 2\hat k$.`,
        t`$\vec b_1\cdot\vec b_2 = -2 + 1 - 2 = -3$, and $|\vec b_1| = |\vec b_2| = \sqrt6$.`,
        t`$\cos\theta = \frac{|-3|}{\sqrt6\sqrt6} = \frac12$, so $\theta = 60^\circ$.`,
      ],
      answer: t`$60^\circ$. The other angle at the crossing, $120^\circ$, is the obtuse one.`,
    },
    visualSpec: t`Turn one line about the crossing point; the panel shows both angles, marks the acute $\theta$, and shows $\vec b_1\cdot\vec b_2$ changing sign as the lines pass $90^\circ$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Uses the points on the lines (their position vectors $\vec a_1$, $\vec a_2$) in the formula instead of the direction vectors.`,
      remediation: t`The angle between lines is the angle between their directions $\vec b_1$ and $\vec b_2$. Points only place the lines; sliding a line parallel to itself keeps the angle.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Reads the denominators as the direction ratios whatever the numerators are: $\frac{1-x}{3}$ gives $3$, $\frac{7y-14}{2}$ gives $2$, and $2x = 3y = -z$ gives $1, 1, 1$.`,
      remediation: t`Denominators are the ratios only when each numerator is $x - x_1$, $y - y_1$ or $z - z_1$. Rewrite first: $\frac{1-x}{3} = \frac{x-1}{-3}$ and $\frac{7y-14}{2} = \frac{y-2}{2/7}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Leaves out the modulus in $\cos\theta = \frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}$, so a negative dot product gives the obtuse angle.`,
      remediation: t`Crossing lines make angles $\theta$ and $180^\circ - \theta$, and the angle between the lines is the acute one. Take $|\vec b_1\cdot\vec b_2|$, so $\cos\theta \ge 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Uses $\cos\theta = |a_1a_2 + b_1b_2 + c_1c_2|$ with direction ratios, without dividing by the lengths.`,
      remediation: t`That form is only for direction cosines, which come from unit vectors. With direction ratios, divide by $\sqrt{a_1^2 + b_1^2 + c_1^2}$ and $\sqrt{a_2^2 + b_2^2 + c_2^2}$.`,
      fallback: { kind: "ext", topic: "direction ratios" },
    },
    {
      id: "C02-M5",
      mistake: t`Ignores a minus sign in front of $x$, $y$ or $z$: reads the ratio of $\frac{1-x}{3}$ as $3$, though it does divide by a coefficient.`,
      remediation: t`$1 - x = -(x - 1)$, so $\frac{1-x}{3} = \frac{x-1}{-3}$ and the ratio is $-3$. In the same way $-z$ in $2x = 3y = -z$ gives the ratio $-1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M6",
      mistake: t`Forgets to divide by the coefficient of $x$, $y$ or $z$: reads the ratio of $\frac{7y-14}{2k}$ as $2k$, and $2x = 3y = -z$ as $1, 1, -1$, though it handles a minus sign.`,
      remediation: t`Make each coefficient 1 first: $\frac{7y-14}{2k} = \frac{y-2}{2k/7}$, so the ratio is $\frac{2k}{7}$. Likewise $2x = \frac{x}{1/2}$ gives the ratio $\frac12$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C02-M3 gives the key when $\vec b_1\cdot\vec b_2 \ge 0$, and C02-M4 gives an impossible cosine when $|\vec b_1\cdot\vec b_2| > 1$: diagnose them with angle items whose dot product is $-1$ (C02-Q1, C02-Q2).`,
    "C02-M1 needs both lines away from the origin. C02-M2, C02-M5 and C02-M6 give the key unless a numerator has a minus sign or a coefficient other than 1; perpendicularity items can only catch these three.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc A Q.12" },
      stem: t`Let $\theta$ be the acute angle between the lines $\frac{x-1}{1} = \frac{y-2}{-1}$ $= \frac{z-3}{2}$ and $\frac{x+1}{2} = \frac{y-2}{1}$ $= \frac{z-1}{-1}$. Then $\cos\theta =$`,
      verify: { kind: "value", inputs: { P1: "(1, 2, 3)", d1: "(1, -1, 2)", P2: "(-1, 2, 1)", d2: "(2, 1, -1)" }, params: { ask: "cos" } },
      options: [
        { key: "A", text: t`$\frac{1}{6}$`, correct: true, value: "1/6" },
        { key: "B", text: t`$\frac{\sqrt{21}}{7}$`, correct: false, misconceptionId: "C02-M1", value: "sqrt(21)/7" },
        { key: "C", text: t`$- \frac{1}{6}$`, correct: false, misconceptionId: "C02-M3", value: "-1/6" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C02-M4", value: "1" },
      ],
      solution: {
        steps: [
          t`The directions are $\vec b_1 = \hat i - \hat j + 2\hat k$ and $\vec b_2 = 2\hat i + \hat j - \hat k$; the points play no part.`,
          t`$\vec b_1\cdot\vec b_2 = 2 - 1 - 2 = -1$, and $|\vec b_1| = |\vec b_2| = \sqrt6$.`,
          t`$\cos\theta = \frac{|-1|}{\sqrt6\sqrt6} = \frac16$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc A Q.14" },
      stem: t`Find the acute angle between the lines $x = -y,\ z = 1$ and $y = z,\ x = 2$.`,
      verify: { kind: "value", inputs: { P1: "(0, 0, 1)", d1: "(1, -1, 0)", P2: "(2, 0, 0)", d2: "(0, 1, 1)" }, params: { ask: "angle" } },
      options: [
        { key: "A", text: t`$90^\circ$`, correct: false, misconceptionId: "C02-M1", value: "pi/2" },
        { key: "B", text: t`$120^\circ$`, correct: false, misconceptionId: "C02-M3", value: "2*pi/3" },
        { key: "C", text: t`$0^\circ$`, correct: false, misconceptionId: "C02-M4", value: "0" },
        { key: "D", text: t`$60^\circ$`, correct: true, value: "pi/3" },
      ],
      solution: {
        steps: [
          t`On $x = -y,\ z = 1$ the points are $(t, -t, 1)$, so $\vec b_1 = \hat i - \hat j$.`,
          t`On $y = z,\ x = 2$ the points are $(2, t, t)$, so $\vec b_2 = \hat j + \hat k$.`,
          t`$\vec b_1\cdot\vec b_2 = -1$, and $|\vec b_1||\vec b_2| = \sqrt2\cdot\sqrt2 = 2$.`,
          t`$\cos\theta = \frac{|-1|}{2} = \frac12$, so $\theta = 60^\circ$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.1 SolvedEx.9" },
      stem: t`Find the acute angle between the line $\vec r = (\hat i + 2\hat j + 3\hat k)$ $+ \lambda(2\hat i - 2\hat j + \hat k)$ and the line $\frac{2-x}{4} = \frac{2y-1}{2}$ $= \frac{z+1}{1}$.`,
      verify: { kind: "value", inputs: { P1: "(1, 2, 3)", d1: "(2, -2, 1)", P2: "(2, 1/2, -1)", d2: "(4, 2, 1)", p2: "(-1, 2, 1)" }, params: { ask: "angle" } },
      options: [
        { key: "A", text: t`$135^\circ$`, correct: false, misconceptionId: "C02-M3", value: "3*pi/4" },
        { key: "B", text: t`$45^\circ$`, correct: true, value: "pi/4" },
        { key: "C", text: t`$90^\circ$`, correct: false, misconceptionId: "C02-M1", value: "pi/2" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{5 \sqrt{21}}{63}\right)$`, correct: false, misconceptionId: "C02-M2", value: "acos(5*sqrt(21)/63)" },
      ],
      solution: {
        steps: [
          t`The first line has $\vec b_1 = 2\hat i - 2\hat j + \hat k$, with $|\vec b_1| = 3$.`,
          t`The second is $\frac{x-2}{-4} = \frac{y - 1/2}{1}$ $= \frac{z+1}{1}$, so $\vec b_2 = -4\hat i + \hat j + \hat k$.`,
          t`$\vec b_1\cdot\vec b_2 = -8 - 2 + 1 = -9$, and $|\vec b_2| = \sqrt{18} = 3\sqrt2$.`,
          t`$\cos\theta = \frac{|-9|}{3 \cdot 3\sqrt2} = \frac{1}{\sqrt2}$, so $\theta = 45^\circ$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.9" },
      stem: t`Find the angle between the lines $2x = 3y = -z$ and $6x = -y = -4z$.`,
      verify: { kind: "value", inputs: { P1: "(0, 0, 0)", d1: "(1, 1, 1)", p1: "(2, 3, -1)", P2: "(0, 0, 0)", d2: "(1, 1, 1)", p2: "(6, -1, -4)" }, params: { ask: "angle" } },
      options: [
        { key: "A", text: t`$\cos^{-1}\left(\frac{1}{3}\right)$`, correct: false, misconceptionId: "C02-M6", value: "acos(1/3)" },
        { key: "B", text: t`$90^\circ$`, correct: true, value: "pi/2" },
        { key: "C", text: t`$0^\circ$`, correct: false, misconceptionId: "C02-M2", value: "0" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{48 \sqrt{157}}{1099}\right)$`, correct: false, misconceptionId: "C02-M5", value: "acos(48*sqrt(157)/1099)" },
      ],
      solution: {
        steps: [
          t`$2x = 3y = -z$ is $\frac{x}{1/2} = \frac{y}{1/3} = \frac{z}{-1}$: ratios $3, 2, -6$ after multiplying by 6.`,
          t`$6x = -y = -4z$ is $\frac{x}{1/6} = \frac{y}{-1} = \frac{z}{-1/4}$: ratios $2, -12, -3$ after multiplying by 12.`,
          t`$3(2) + 2(-12) + (-6)(-3)$ $= 6 - 24 + 18 = 0$.`,
          t`So the lines are perpendicular, and the angle is $90^\circ$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc A Q.11" },
      stem: t`Find $k$ so that the lines $\frac{1-x}{3} = \frac{7y-14}{2k}$ $= \frac{z-3}{2}$ and $\frac{7-7x}{3k} = \frac{y-5}{1}$ $= \frac{6-z}{5}$ are at right angles.`,
      verify: { kind: "value", inputs: { P1: "(1, 2, 3)", d1: "(3, 2*k, 2)", p1: "(-1, 7, 1)", P2: "(1, 5, 6)", d2: "(3*k, 1, 5)", p2: "(-7, 1, -1)" }, params: { ask: "perp" } },
      options: [
        { key: "A", text: t`$\frac{10}{11}$`, correct: false, misconceptionId: "C02-M6", value: "10/11" },
        { key: "B", text: t`$\frac{70}{11}$`, correct: true, value: "70/11" },
        { key: "C", text: t`$- \frac{10}{11}$`, correct: false, misconceptionId: "C02-M2", value: "-10/11" },
        { key: "D", text: t`$- \frac{70}{11}$`, correct: false, misconceptionId: "C02-M5", value: "-70/11" },
      ],
      solution: {
        steps: [
          t`The first line is $\frac{x-1}{-3} = \frac{y-2}{2k/7}$ $= \frac{z-3}{2}$: ratios $-3, \frac{2k}{7}, 2$.`,
          t`The second is $\frac{x-1}{-3k/7} = \frac{y-5}{1}$ $= \frac{z-6}{-5}$: ratios $-\frac{3k}{7}, 1, -5$.`,
          t`Perpendicular: $\frac{9k}{7} + \frac{2k}{7} - 10 = 0$.`,
          t`So $\frac{11k}{7} = 10$ and $k = \frac{70}{11}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.1" },
      stem: t`The line $\frac{x}{3} = \frac{y}{4} = \frac{z}{1}$ is perpendicular to the line $\frac{1-x}{k} = \frac{2y+4}{3}$ $= \frac{z-3}{k-1}$. Find $k$.`,
      verify: { kind: "value", inputs: { P1: "(0, 0, 0)", d1: "(3, 4, 1)", P2: "(1, -2, 3)", d2: "(k, 3, k - 1)", p2: "(-1, 2, 1)" }, params: { ask: "perp" } },
      options: [
        { key: "A", text: t`$\frac{5}{2}$`, correct: true, value: "5/2" },
        { key: "B", text: t`$- \frac{11}{4}$`, correct: false, misconceptionId: "C02-M2", value: "-11/4" },
        { key: "C", text: t`$- \frac{5}{4}$`, correct: false, misconceptionId: "C02-M5", value: "-5/4" },
        { key: "D", text: t`$\frac{11}{2}$`, correct: false, misconceptionId: "C02-M6", value: "11/2" },
      ],
      solution: {
        steps: [
          t`The first line has ratios $3, 4, 1$.`,
          t`The second is $\frac{x-1}{-k} = \frac{y+2}{3/2}$ $= \frac{z-3}{k-1}$: ratios $-k, \frac32, k - 1$.`,
          t`Perpendicular: $-3k + 6 + k - 1 = 0$, so $-2k + 5 = 0$ and $k = \frac52$.`,
        ],
      },
    },
  ],
};
