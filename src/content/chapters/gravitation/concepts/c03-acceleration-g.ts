import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`On the Moon an astronaut dropped a hammer and a feather together, and they landed together. A heavier body is pulled harder, so why doesn't it fall faster?`,
    reveal: t`The pull $\dfrac{GMm}{R^2}$ grows with the body's mass $m$, but so does the mass to be accelerated. They cancel: every body falls with the same $g = \dfrac{GM}{R^2}$, set by the planet alone.`,
  },
  explanation: {
    intuition: [
      t`A body falling freely near the Earth speeds up at a steady rate, the **acceleration due to gravity** $g$.`,
      t`The force that pulls it down is its **weight**, the Earth's gravitational pull on it.`,
      t`Weight comes from Newton's law of gravitation, with the Earth's mass acting as if at its centre.`,
      t`The body's own mass cancels, so $g$ depends only on the Earth's mass and radius.`,
      t`So measuring $g$ and the Earth's radius lets us find the Earth's mass, a way to weigh the Earth.`,
    ],
    formal: [
      {
        title: "g at the surface",
        points: [
          t`Let the Earth have mass $M$ and radius $R$; a body of mass $m$ rests on its surface.`,
          t`The Earth pulls it with $F = \dfrac{GMm}{R^2}$, as if all of $M$ were at the centre.`,
          t`This pull is the body's weight $mg$, so $mg = \dfrac{GMm}{R^2}$.`,
          t`Cancel $m$: $g = \dfrac{GM}{R^2}$, the same for every body at that place.`,
          t`At the Earth's surface $g \approx 9.8\ \mathrm{m/s^2}$.`,
        ],
      },
      {
        title: "Mass and density of the Earth",
        points: [
          t`Rearrange $g = \dfrac{GM}{R^2}$: $M = \dfrac{gR^2}{G}$.`,
          t`With $g$, $R$ and $G$ measured, this gives $M \approx 6 \times 10^{24}\ \mathrm{kg}$.`,
          t`The **mean density** $\rho$ is mass per unit volume: $\rho$ $= \dfrac{M}{\frac{4}{3}\pi R^3}$.`,
          t`Put in $M = \dfrac{gR^2}{G}$: $\rho = \dfrac{3g}{4\pi GR}$, about $5.5 \times 10^{3}\ \mathrm{kg/m^3}$.`,
          t`Use SI units throughout: $R$ in metres, never in km.`,
        ],
      },
      {
        title: "Mass and weight",
        points: [
          t`**Mass** is the quantity of matter in a body; it is the same everywhere.`,
          t`**Weight** $W = mg$ is the gravitational force on the body, in newtons.`,
          t`A **kilogram weight** is the weight of $1\ \mathrm{kg}$ on the Earth: $1\ \mathrm{kg\ wt}$ $= 9.8\ \mathrm{N}$.`,
          t`On a planet of mass $M_p$ and radius $R_p$: $\dfrac{g_p}{g}$ $= \dfrac{M_p}{M}\left(\dfrac{R}{R_p}\right)^2$.`,
          t`The body's weight changes in that same ratio, while its mass does not change.`,
        ],
      },
    ],
    worked: {
      prompt: t`At Jupiter's surface $g = 24.8\ \mathrm{m/s^2}$, and its radius is $7.0 \times 10^{7}\ \mathrm{m}$. Find Jupiter's mass and mean density. Take $G$ $= 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      steps: [
        t`$M = \dfrac{gR^2}{G}$ $= \dfrac{24.8 \times (7.0 \times 10^{7})^2}{6.67 \times 10^{-11}}$.`,
        t`$M$ $= \dfrac{1.22 \times 10^{17}}{6.67 \times 10^{-11}}$ $\approx 1.82 \times 10^{27}\ \mathrm{kg}$.`,
        t`$\rho = \dfrac{3g}{4\pi GR}$ $= \dfrac{3 \times 24.8}{4\pi \times 6.67 \times 10^{-11} \times 7.0 \times 10^{7}}$.`,
        t`$\rho = \dfrac{74.4}{0.0587}$ $\approx 1.27 \times 10^{3}\ \mathrm{kg/m^3}$, about a quarter of the Earth's.`,
      ],
      answer: t`$1.82 \times 10^{27}\ \mathrm{kg}$; $1.27 \times 10^{3}\ \mathrm{kg/m^3}$`,
    },
    visualSpec: t`Choose a planet's mass and radius and watch $g$ and a body's weight change while its mass stays fixed.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Takes $g$ as $\dfrac{GM}{R}$, with the radius not squared.`,
      remediation: t`Gravity is an inverse square law, so $g = \dfrac{GM}{R^2}$: square the radius.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: "Leaves the radius in kilometres.",
      remediation: t`$G$ is in $\mathrm{N\,m^2/kg^2}$, so the radius must be in metres: $1\ \mathrm{km} = 1000\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks a body's weight is the same everywhere, like its mass.",
      remediation: t`Weight is $mg$, and $g$ differs from planet to planet, so the weight changes with it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Thinks a body's mass changes when $g$ changes.`,
      remediation: "Mass is the quantity of matter in the body; moving it to another planet does not change it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Thinks $g$ depends only on the planet's mass, not its radius.`,
      remediation: t`$g = \dfrac{GM}{R^2}$: a bigger radius puts the surface farther from the centre and lowers $g$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Divides by $R^2$ instead of multiplying when rearranging $g = \dfrac{GM}{R^2}$.`,
      remediation: t`Multiply both sides by $R^2$ first: $gR^2 = GM$, then divide by the other factor.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Turns the ratio upside down.",
      remediation: t`$\dfrac{g_p}{g}$ $= \dfrac{M_p}{M}\left(\dfrac{R}{R_p}\right)^2$: the mass ratio on top, the radius ratio squared below.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Swaps the meanings of mass and weight.",
      remediation: t`Mass is the matter in the body and never changes; weight is the pull of gravity on it, $mg$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Solved Ex.5.4" },
      stem: t`At the Earth's surface $g = 9.81\ \mathrm{m/s^2}$, and the Earth's radius is $6370\ \mathrm{km}$. What is the mass of the Earth? Take $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { g: "9.81", G: "6.67*10**-11", R: "6370", u: "1000" }, params: { ask: "mass" } },
      options: [
        { key: "A", text: t`$5.97 \times 10^{18}\ \mathrm{kg}$`, correct: false, misconceptionId: "C03-M2", value: "5970000000000000000" },
        { key: "B", text: t`$0.00362\ \mathrm{kg}$`, correct: false, misconceptionId: "C03-M6", value: "0.00362000000000000" },
        { key: "C", text: t`$5.97 \times 10^{24}\ \mathrm{kg}$`, correct: true, value: "5970000000000000281018368" },
        { key: "D", text: t`$9.37 \times 10^{17}\ \mathrm{kg}$`, correct: false, misconceptionId: "C03-M1", value: "937000000000000000" },
      ],
      solution: {
        steps: [
          t`$R = 6370\ \mathrm{km}$ $= 6.37 \times 10^{6}\ \mathrm{m}$.`,
          t`$M = \dfrac{gR^2}{G}$ $= \dfrac{9.81 \times (6.37 \times 10^{6})^2}{6.67 \times 10^{-11}}$ $\approx 5.97 \times 10^{24}\ \mathrm{kg}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Solved Ex.5.5" },
      stem: t`The Moon's mass is $\dfrac{1}{80}$ of the Earth's and its diameter is $\dfrac{1}{4}$ of the Earth's. If $g = 9.8\ \mathrm{m/s^2}$ on the Earth, what is the acceleration due to gravity on the Moon's surface?`,
      verify: { kind: "value", inputs: { w: "9.8", km: "1/80", kr: "1/4" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$0.123\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C03-M5", value: "0.123000000000000" },
        { key: "B", text: t`$49\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C03-M7", value: "49" },
        { key: "C", text: t`$1.96\ \mathrm{m/s^2}$`, correct: true, value: "1.96000000000000" },
        { key: "D", text: t`$0.49\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C03-M1", value: "0.490000000000000" },
      ],
      solution: {
        steps: [
          t`The diameters are in the ratio $1 : 4$, so the radii are too: $\dfrac{R_m}{R} = \dfrac{1}{4}$.`,
          t`$\dfrac{g_m}{g}$ $= \dfrac{M_m}{M}\left(\dfrac{R}{R_m}\right)^2$ $= \dfrac{1}{80} \times 16$ $= \dfrac{1}{5}$.`,
          t`$g_m = \dfrac{9.8}{5}$ $= 1.96\ \mathrm{m/s^2}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (xi)" },
      stem: t`A body weighs $5.6\ \mathrm{kg\ wt}$ on the Earth. What would it weigh on a planet with $7$ times the Earth's mass and twice its radius?`,
      verify: { kind: "value", inputs: { w: "5.6", km: "7", kr: "2" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$5.6\ \mathrm{kg\ wt}$`, correct: false, misconceptionId: "C03-M3", value: "5.60000000000000" },
        { key: "B", text: t`$19.6\ \mathrm{kg\ wt}$`, correct: false, misconceptionId: "C03-M1", value: "19.6000000000000" },
        { key: "C", text: t`$39.2\ \mathrm{kg\ wt}$`, correct: false, misconceptionId: "C03-M5", value: "39.2000000000000" },
        { key: "D", text: t`$9.8\ \mathrm{kg\ wt}$`, correct: true, value: "9.80000000000000" },
      ],
      solution: {
        steps: [
          t`The mass is unchanged; the weight goes as $g$.`,
          t`$\dfrac{g_p}{g}$ $= 7 \times \left(\dfrac{1}{2}\right)^2$ $= 1.75$.`,
          t`$W_p = 5.6 \times 1.75$ $= 9.8\ \mathrm{kg\ wt}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (viii)" },
      stem: t`Mars has radius $3.4 \times 10^{3}\ \mathrm{km}$ and mass $6.4 \times 10^{23}\ \mathrm{kg}$. What is the acceleration due to gravity at its surface? Take $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", M: "6.4*10**23", R: "3.4*10**3", u: "1000" }, params: { ask: "gsurf" } },
      options: [
        { key: "A", text: t`$1.26 \times 10^{7}\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C03-M1", value: "12600000" },
        { key: "B", text: t`$4.27 \times 10^{13}\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C03-M5", value: "42700000000000" },
        { key: "C", text: t`$3.69\ \mathrm{m/s^2}$`, correct: true, value: "3.69000000000000" },
        { key: "D", text: t`$3.69 \times 10^{6}\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C03-M2", value: "3690000" },
      ],
      solution: {
        steps: [
          t`$R = 3.4 \times 10^{6}\ \mathrm{m}$.`,
          t`$g = \dfrac{GM}{R^2}$ $= \dfrac{6.67 \times 10^{-11} \times 6.4 \times 10^{23}}{(3.4 \times 10^{6})^2}$.`,
          t`$g$ $= \dfrac{4.27 \times 10^{13}}{1.16 \times 10^{13}}$ $\approx 3.69\ \mathrm{m/s^2}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.2 (x)" },
      stem: t`A body is taken from the Earth to another planet. What happens to its mass and its weight?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "planets" } },
      options: [
        { key: "A", text: t`Its mass stays the same; its weight changes.`, correct: true, value: "mass_same_weight_changes" },
        { key: "B", text: t`Both its mass and its weight stay the same.`, correct: false, misconceptionId: "C03-M3", value: "both_same" },
        { key: "C", text: t`Both its mass and its weight change.`, correct: false, misconceptionId: "C03-M4", value: "both_change" },
        { key: "D", text: t`Its mass changes; its weight stays the same.`, correct: false, misconceptionId: "C03-M8", value: "mass_changes_weight_same" },
      ],
      solution: {
        steps: [
          t`Mass is the quantity of matter in the body, so it stays the same.`,
          t`Weight is $mg$, and $g = \dfrac{GM}{R^2}$ differs on the new planet, so the weight changes.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (x)" },
      stem: t`The Earth's mass is $6 \times 10^{24}\ \mathrm{kg}$, its radius $6400\ \mathrm{km}$, and $g = 9.8\ \mathrm{m/s^2}$ at its surface. What value of the universal gravitational constant do these give?`,
      verify: { kind: "value", inputs: { g: "9.8", M: "6*10**24", R: "6400", u: "1000" }, params: { ask: "G" } },
      options: [
        { key: "A", text: t`$6.69 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$`, correct: true, value: "6.69000000000000e-11" },
        { key: "B", text: t`$6.69 \times 10^{-17}\ \mathrm{N\,m^2/kg^2}$`, correct: false, misconceptionId: "C03-M2", value: "6.69000000000000e-17" },
        { key: "C", text: t`$3.99 \times 10^{-38}\ \mathrm{N\,m^2/kg^2}$`, correct: false, misconceptionId: "C03-M6", value: "3.99000000000000e-38" },
        { key: "D", text: t`$1.05 \times 10^{-17}\ \mathrm{N\,m^2/kg^2}$`, correct: false, misconceptionId: "C03-M1", value: "1.05000000000000e-17" },
      ],
      solution: {
        steps: [
          t`$R = 6400\ \mathrm{km}$ $= 6.4 \times 10^{6}\ \mathrm{m}$, and $G = \dfrac{gR^2}{M}$.`,
          t`$G$ $= \dfrac{9.8 \times (6.4 \times 10^{6})^2}{6 \times 10^{24}}$ $= \dfrac{4.01 \times 10^{14}}{6 \times 10^{24}}$.`,
          t`$G \approx 6.69 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
        ],
      },
    },
  ],
};
