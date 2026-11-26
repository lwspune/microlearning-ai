import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Lifting $1\ \mathrm{kg}$ by $1\ \mathrm{m}$ takes $9.8\ \mathrm{J}$. Lifting it from the ground all the way to infinity is infinitely many metres. Does that take infinite energy?`,
    reveal: t`No: about $6.3 \times 10^{7}\ \mathrm{J}$ is enough. Gravity weakens as $\dfrac{1}{r^2}$, so the far-away metres cost almost nothing. The total is $\dfrac{GMm}{R}$, and it sets the zero of gravitational potential energy at infinity.`,
  },
  explanation: {
    intuition: [
      t`Lifting a body against gravity stores energy in it: its **gravitational potential energy** $U$.`,
      t`Gravity weakens with distance, so each metre of lift costs less the higher you go.`,
      t`Far enough away, at infinity, gravity has no hold, so we call $U$ zero there.`,
      t`Closer in, gravity has already pulled the body in, so $U$ is less than zero: it is negative.`,
      t`The **gravitational potential** $V$ is the same idea per kilogram: $U$ divided by the body's mass.`,
    ],
    formal: [
      {
        title: "Gravitational potential energy",
        points: [
          t`$U$ at a point is the work done to bring a body there from infinity, so $U = 0$ at infinity.`,
          t`For mass $m$ at a distance $r$ from the Earth's centre: $U = -\dfrac{GMm}{r}$.`,
          t`The minus sign says the body is bound: work is needed to pull it back out to infinity.`,
          t`$U$ rises, becoming less negative, as $r$ grows.`,
          t`Raising it from $r_1$ to $r_2$: $\Delta U$ $= GMm\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$, with each $r$ from the centre.`,
        ],
      },
      {
        title: "Gravitational potential",
        points: [
          t`The **gravitational potential** $V$ at a point is the potential energy per unit mass there: $V = \dfrac{U}{m}$.`,
          t`Outside the Earth, $V = -\dfrac{GM}{r}$, in $\mathrm{J/kg}$.`,
          t`$V$ is a scalar: it has a size and a sign but no direction.`,
          t`It is zero at infinity and negative everywhere else.`,
          t`Inside a uniform Earth, $V$ keeps falling towards the centre, where it is least: $-\dfrac{3GM}{2R}$.`,
        ],
      },
      {
        title: "Near the surface: mgh",
        points: [
          t`Raising $m$ from the surface by $h$: $\Delta U$ $= GMm\left(\dfrac{1}{R} - \dfrac{1}{R+h}\right)$ $= \dfrac{GMmh}{R(R+h)}$.`,
          t`When $h$ is much smaller than $R$, $R(R+h) \approx R^2$, so $\Delta U \approx \dfrac{GMm}{R^2}h$.`,
          t`With $g = \dfrac{GM}{R^2}$ this is the familiar $\Delta U = mgh$.`,
          t`For a height comparable with $R$, $g$ changes on the way up, so use the full formula.`,
          t`Taking a body at rest on the surface to infinity needs energy $\dfrac{GMm}{R} = mgR$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $200\ \mathrm{kg}$ load is raised from the Earth's surface to a height of $\dfrac{R}{2}$, where $R = 6400\ \mathrm{km}$. Find the gain in its potential energy, and compare it with $mgh$. Take $g = 9.8\ \mathrm{m/s^2}$.`,
      steps: [
        t`With $GM = gR^2$: $\Delta U$ $= mgR^2\left(\dfrac{1}{R} - \dfrac{1}{1.5R}\right)$ $= \dfrac{mgR}{3}$.`,
        t`$\Delta U$ $= \dfrac{200 \times 9.8 \times 6.4 \times 10^{6}}{3}$ $\approx 4.18 \times 10^{9}\ \mathrm{J}$.`,
        t`$mgh$ $= 200 \times 9.8 \times 3.2 \times 10^{6}$ $\approx 6.27 \times 10^{9}\ \mathrm{J}$.`,
        t`$mgh$ overestimates by half, because $g$ falls on the way up.`,
      ],
      answer: t`$4.18 \times 10^{9}\ \mathrm{J}$, against $6.27 \times 10^{9}\ \mathrm{J}$ from $mgh$`,
    },
    visualSpec: t`Drag a body away from the Earth and watch its $U = -\dfrac{GMm}{r}$ climb towards zero, with the $mgh$ line peeling away from the curve.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Measures $r$ from the Earth's surface instead of its centre.`,
      remediation: t`In $-\dfrac{GM}{r}$, $r$ is the distance from the centre: a height $h$ gives $r = R + h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gets the sign of the potential or potential energy wrong.",
      remediation: t`$U$ and $V$ are zero at infinity and negative nearer in; raising a body makes $U$ less negative, a gain.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Uses $mgh$ for a height comparable with the Earth's radius.`,
      remediation: t`$mgh$ assumes $g$ stays the same; over large heights use $GMm\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Divides by $r^2$, mixing up energy with force.`,
      remediation: t`Force and field go as $\dfrac{1}{r^2}$; potential energy and potential go as $\dfrac{1}{r}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M5",
      mistake: t`Uses $\dfrac{GMm}{2R}$, the energy that frees a body already in orbit.`,
      remediation: t`A body at rest on the surface has no kinetic energy to help: it needs the full $\dfrac{GMm}{R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Thinks the potential is least at the surface, where $g$ is greatest.`,
      remediation: t`$V$ is not $g$: going down into a uniform Earth, $V$ keeps falling all the way to the centre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks the potential is the same everywhere inside the Earth.",
      remediation: t`That holds inside a hollow shell; a solid Earth has mass beneath you, so $V$ keeps falling towards the centre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Gives the size of the final potential energy, forgetting the starting value.",
      remediation: t`The gain is final minus initial: $-\dfrac{GMm}{R+h} - \left(-\dfrac{GMm}{R}\right)$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Solved Ex.5.8" },
      stem: t`A body of mass $m$ is raised from a height $R_E$ above the Earth's surface to a height $\dfrac{5}{2}R_E$ above it. $R_E$ and $M_E$ are the Earth's radius and mass. What is the change in its potential energy?`,
      verify: { kind: "value", inputs: { a: "1", b: "5/2" }, params: { ask: "dU_R" } },
      options: [
        { key: "A", text: t`$1.5\,\dfrac{GM_Em}{R_E}$`, correct: false, misconceptionId: "C05-M3", value: "1.50000000000000" },
        { key: "B", text: t`$0.214\,\dfrac{GM_Em}{R_E}$`, correct: true, value: "0.214000000000000" },
        { key: "C", text: t`$0.6\,\dfrac{GM_Em}{R_E}$`, correct: false, misconceptionId: "C05-M1", value: "0.600000000000000" },
        { key: "D", text: t`$-0.214\,\dfrac{GM_Em}{R_E}$`, correct: false, misconceptionId: "C05-M2", value: "-0.214000000000000" },
      ],
      solution: {
        steps: [
          t`From the centre: $r_1 = R_E + R_E = 2R_E$ and $r_2 = R_E + \dfrac{5}{2}R_E$ $= 3.5R_E$.`,
          t`$\Delta U$ $= GM_Em\left(\dfrac{1}{2R_E} - \dfrac{1}{3.5R_E}\right)$ $= \dfrac{1.5}{7}\,\dfrac{GM_Em}{R_E}$.`,
          t`$\Delta U \approx 0.214\,\dfrac{GM_Em}{R_E}$, an increase.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (xii)" },
      stem: t`What is the gravitational potential due to the Earth at a point a height $2R_E$ above its surface? The Earth's mass is $6 \times 10^{24}\ \mathrm{kg}$, its radius $R_E = 6400\ \mathrm{km}$, and $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", M: "6*10**24", R: "6400", k: "2" }, params: { ask: "V" } },
      options: [
        { key: "A", text: t`$-3.13 \times 10^{7}\ \mathrm{J/kg}$`, correct: false, misconceptionId: "C05-M1", value: "-31300000" },
        { key: "B", text: t`$2.08 \times 10^{7}\ \mathrm{J/kg}$`, correct: false, misconceptionId: "C05-M2", value: "20800000" },
        { key: "C", text: t`$-1.09\ \mathrm{J/kg}$`, correct: false, misconceptionId: "C05-M4", value: "-1.09000000000000" },
        { key: "D", text: t`$-2.08 \times 10^{7}\ \mathrm{J/kg}$`, correct: true, value: "-20800000" },
      ],
      solution: {
        steps: [
          t`From the centre, $r = R_E + 2R_E = 3R_E$ $= 1.92 \times 10^{7}\ \mathrm{m}$.`,
          t`$V = -\dfrac{GM}{r}$ $= -\dfrac{6.67 \times 10^{-11} \times 6 \times 10^{24}}{1.92 \times 10^{7}}$ $\approx -2.08 \times 10^{7}\ \mathrm{J/kg}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (ix)" },
      stem: t`A planet has mass $6.4 \times 10^{24}\ \mathrm{kg}$ and radius $3.4 \times 10^{6}\ \mathrm{m}$. How much energy is needed to take an $800\ \mathrm{kg}$ object at rest on its surface to infinity? Take $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", M: "6.4*10**24", R: "3.4*10**6", m: "800" }, params: { ask: "remove" } },
      options: [
        { key: "A", text: t`$1 \times 10^{11}\ \mathrm{J}$`, correct: true, value: "100000000000" },
        { key: "B", text: t`$-1 \times 10^{11}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "-100000000000" },
        { key: "C", text: t`$29500\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "29500" },
        { key: "D", text: t`$5.02 \times 10^{10}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "50200000000" },
      ],
      solution: {
        steps: [
          t`At rest on the surface $U = -\dfrac{GMm}{R}$; at infinity $U = 0$.`,
          t`Energy needed $= \dfrac{GMm}{R}$ $= \dfrac{6.67 \times 10^{-11} \times 6.4 \times 10^{24} \times 800}{3.4 \times 10^{6}}$.`,
          t`$\approx 1.00 \times 10^{11}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.1 (iii)" },
      stem: t`Treating the Earth as a uniform sphere, its gravitational potential is least`,
      verify: { kind: "value", inputs: {  }, params: { ask: "vmin" } },
      options: [
        { key: "A", text: t`at an infinite distance.`, correct: false, misconceptionId: "C05-M2", value: "infinity_min" },
        { key: "B", text: t`equally at every point inside the Earth.`, correct: false, misconceptionId: "C05-M7", value: "inside_constant" },
        { key: "C", text: t`at the centre of the Earth.`, correct: true, value: "centre_min" },
        { key: "D", text: t`at the surface of the Earth.`, correct: false, misconceptionId: "C05-M6", value: "surface_min" },
      ],
      solution: {
        steps: [
          t`Outside the Earth $V = -\dfrac{GM}{r}$ falls as you come in, to $-\dfrac{GM}{R}$ at the surface.`,
          t`Inside a uniform Earth it keeps falling, to $-\dfrac{3GM}{2R}$ at the centre: the least value.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`A $10\ \mathrm{kg}$ body is raised from the Earth's surface to a height of $3R$, where $R = 6400\ \mathrm{km}$ is the Earth's radius. By how much does its gravitational potential energy increase? Take $g = 9.8\ \mathrm{m/s^2}$ at the surface.`,
      verify: { kind: "value", inputs: { m: "10", g: "9.8", R: "6400", k: "3" }, params: { ask: "raise" } },
      options: [
        { key: "A", text: t`$4.7 \times 10^{8}\ \mathrm{J}$`, correct: true, value: "470000000" },
        { key: "B", text: t`$-4.7 \times 10^{8}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "-470000000" },
        { key: "C", text: t`$1.88 \times 10^{9}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "1880000000" },
        { key: "D", text: t`$1.57 \times 10^{8}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M8", value: "157000000" },
      ],
      solution: {
        steps: [
          t`$r$ goes from $R$ to $4R$; with $GM = gR^2$, $\Delta U$ $= mgR^2\left(\dfrac{1}{R} - \dfrac{1}{4R}\right)$ $= \dfrac{3}{4}mgR$.`,
          t`$\Delta U$ $= 0.75 \times 10 \times 9.8 \times 6.4 \times 10^{6}$ $\approx 4.7 \times 10^{8}\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
