import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`However hard you throw a ball upwards, it comes back. Is there a speed so high that it never returns? Would a heavy ball need more speed than a light one?`,
    reveal: t`Yes: about $11.2\ \mathrm{km/s}$ from the Earth's surface, the **escape velocity**. And no: the same speed frees a pebble or a spacecraft, because the body's mass cancels from the energy balance.`,
  },
  explanation: {
    intuition: [
      t`A body thrown upwards trades kinetic energy for potential energy as it rises.`,
      t`With enough kinetic energy it reaches infinity, where gravity has no hold: it has escaped.`,
      t`The least launch speed that does this is the **escape velocity**; it does not depend on the body's mass.`,
      t`A satellite's total energy is negative: it is held, or **bound**, by the Earth.`,
      t`Inside an orbiting satellite everything falls together, so nothing presses on the floor: astronauts float.`,
    ],
    formal: [
      {
        title: "Escape velocity",
        points: [
          t`**Escape velocity** $v_e$ is the least speed with which a body thrown up from the surface never falls back.`,
          t`To escape it must reach infinity, where $U = 0$; arriving there with zero speed, its total energy is zero.`,
          t`So at launch $\dfrac{1}{2}mv_e^2 - \dfrac{GMm}{R}$ $= 0$.`,
          t`This gives $v_e = \sqrt{\dfrac{2GM}{R}}$ $= \sqrt{2gR}$, about $11.2\ \mathrm{km/s}$ for the Earth.`,
          t`The body's mass $m$ cancels: $v_e$ depends only on the planet's mass and radius.`,
          t`$v_e = \sqrt{2}\,v_c$, where $v_c = \sqrt{gR}$ is the speed of a satellite circling close to the surface.`,
        ],
      },
      {
        title: "Energy of a satellite",
        points: [
          t`In an orbit of radius $r$, $\dfrac{mv^2}{r} = \dfrac{GMm}{r^2}$, so its kinetic energy is $\dfrac{1}{2}mv^2 = \dfrac{GMm}{2r}$.`,
          t`Its potential energy is $-\dfrac{GMm}{r}$, twice the kinetic energy in size.`,
          t`Its total energy is $E = -\dfrac{GMm}{2r}$: negative, so the satellite is bound to the Earth.`,
          t`The **binding energy** is the least energy that frees a body from the Earth's gravity: it equals $-E$.`,
          t`For a satellite it is $\dfrac{GMm}{2r}$, equal to its kinetic energy.`,
          t`For a body at rest on the surface, with no kinetic energy, it is $\dfrac{GMm}{R}$.`,
        ],
      },
      {
        title: "Weightlessness",
        points: [
          t`We feel our weight through the upward push $N$ of the floor; a weighing machine reads this $N$.`,
          t`In **free fall** the floor falls with us at the same rate, so $N = 0$ and we feel weightless.`,
          t`A satellite and everything inside it fall freely round the Earth with the same acceleration.`,
          t`So the satellite's floor does not push on the astronaut, and the astronaut floats.`,
          t`Gravity still acts in orbit: it is what holds the satellite and the astronaut in their orbits.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $500\ \mathrm{kg}$ satellite circles the Earth at a height equal to the Earth's radius $R = 6400\ \mathrm{km}$. Find its kinetic, potential and total energy, and its binding energy. Take $g = 9.8\ \mathrm{m/s^2}$ at the surface.`,
      steps: [
        t`$r = 2R$ and $GM = gR^2$, so $KE = \dfrac{GMm}{2r}$ $= \dfrac{mgR}{4}$.`,
        t`$KE$ $= \dfrac{500 \times 9.8 \times 6.4 \times 10^{6}}{4}$ $\approx 7.84 \times 10^{9}\ \mathrm{J}$.`,
        t`$PE = -\dfrac{GMm}{r}$ $= -2 \times KE$ $\approx -1.57 \times 10^{10}\ \mathrm{J}$.`,
        t`$E = KE + PE$ $\approx -7.84 \times 10^{9}\ \mathrm{J}$, so the binding energy is $7.84 \times 10^{9}\ \mathrm{J}$.`,
      ],
      answer: t`$KE$ $= 7.84 \times 10^{9}\ \mathrm{J}$, $PE$ $= -1.57 \times 10^{10}\ \mathrm{J}$, $E$ $= -7.84 \times 10^{9}\ \mathrm{J}$, binding energy $7.84 \times 10^{9}\ \mathrm{J}$`,
    },
    visualSpec: t`Launch a body upwards at a speed you choose and watch its kinetic and potential energy bars: below $v_e$ it turns back, at $v_e$ it just reaches infinity.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Takes the escape speed as the orbital speed $\sqrt{gR}$.`,
      remediation: t`Escaping needs total energy zero: $\dfrac{1}{2}mv_e^2$ $= \dfrac{GMm}{R}$, so $v_e = \sqrt{2gR}$, $\sqrt{2}$ times the orbital speed.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M2",
      mistake: "Forgets to take the square root.",
      remediation: t`$v_e^2 = 2gR$, so $v_e = \sqrt{2gR}$: take the root at the end.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Thinks a heavier body needs a bigger escape speed.",
      remediation: t`Both the kinetic energy and the potential energy are proportional to $m$, so $m$ cancels: $v_e = \sqrt{\dfrac{2GM}{R}}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses $\dfrac{GMm}{r}$, the binding energy of a body at rest, for an orbiting satellite.`,
      remediation: t`An orbiting satellite already has kinetic energy $\dfrac{GMm}{2r}$, so it needs only $\dfrac{GMm}{2r}$ more.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Leaves the radius in kilometres.",
      remediation: t`Work in SI units: $R = 1740\ \mathrm{km}$ $= 1.74 \times 10^{6}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Takes the kinetic energy as the size of the potential energy.",
      remediation: t`In orbit $KE = \dfrac{GMm}{2r}$, half the size of $PE = -\dfrac{GMm}{r}$, and equal to the binding energy.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M7",
      mistake: "Gives the satellite's total energy, which is negative.",
      remediation: t`The total energy is $-\dfrac{GMm}{2r}$; kinetic and binding energy are both $+\dfrac{GMm}{2r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Gives the potential energy instead of the kinetic energy.",
      remediation: t`$PE = -\dfrac{GMm}{r}$ is negative; $KE = \dfrac{GMm}{2r}$ is positive and equals the binding energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Uses the height above the surface as the orbit radius.",
      remediation: t`The orbit radius is measured from the Earth's centre: $r = R + h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks there is no gravity at the satellite's height.",
      remediation: t`At a few hundred kilometres $g$ is still nearly $9\ \mathrm{m/s^2}$; gravity is what keeps the satellite in orbit.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks the satellite's walls shield the astronaut from gravity.",
      remediation: "Nothing blocks gravity; the astronaut floats because the astronaut and the satellite fall together.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Thinks the astronaut's mass becomes zero in orbit.",
      remediation: t`Mass never changes; only the floor's push $N$, which we feel as weight, drops to zero in free fall.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: t`Turns the change in $g$ upside down.`,
      remediation: t`A tenth of the mass with the same radius gives a tenth of $g$: $g' = 0.98\ \mathrm{m/s^2}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M14",
      mistake: "Thinks the escape speed depends on the planet's mass only, not its radius.",
      remediation: t`$v_e = \sqrt{\dfrac{2GM}{R}}$: a smaller radius with the same mass needs a bigger escape speed.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (ii)" },
      stem: t`At the Earth's surface $g = 9.8\ \mathrm{m/s^2}$ and the Earth's radius is $6400\ \mathrm{km}$. If the Earth were made of wood, its mass would be $10\%$ of what it is now, with the same diameter. What would the escape speed from its surface be?`,
      verify: { kind: "value", inputs: { g: "9.8", kg: "1/10", R: "6400", u: "1000" }, params: { ask: "vesc" } },
      options: [
        { key: "A", text: t`$1.25 \times 10^{7}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M2", value: "12500000" },
        { key: "B", text: t`$35400\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M13", value: "35400" },
        { key: "C", text: t`$3540\ \mathrm{m/s}$`, correct: true, value: "3540" },
        { key: "D", text: t`$2500\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M1", value: "2500" },
      ],
      solution: {
        steps: [
          t`Same radius, a tenth of the mass, so $g' = \dfrac{9.8}{10}$ $= 0.98\ \mathrm{m/s^2}$.`,
          t`$v_e = \sqrt{2g'R}$ $= \sqrt{2 \times 0.98 \times 6.4 \times 10^{6}}$ $\approx 3540\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "authored" },
      stem: t`On the Moon $g = 1.6\ \mathrm{m/s^2}$, and the Moon's radius is $1740\ \mathrm{km}$. What is the escape speed from the Moon's surface?`,
      verify: { kind: "value", inputs: { g: "1.6", kg: "1", R: "1740", u: "1000" }, params: { ask: "vesc" } },
      options: [
        { key: "A", text: t`$1670\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M1", value: "1670" },
        { key: "B", text: t`$5.57 \times 10^{6}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M2", value: "5570000" },
        { key: "C", text: t`$74.6\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M5", value: "74.6000000000000" },
        { key: "D", text: t`$2360\ \mathrm{m/s}$`, correct: true, value: "2360" },
      ],
      solution: {
        steps: [
          t`$R = 1.74 \times 10^{6}\ \mathrm{m}$.`,
          t`$v_e = \sqrt{2gR}$ $= \sqrt{2 \times 1.6 \times 1.74 \times 10^{6}}$ $\approx 2360\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.2 (ix)" },
      stem: t`Which statement about the escape speed from the Earth's surface is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "about" } },
      options: [
        { key: "A", text: t`It depends on the Earth's mass but not on its radius.`, correct: false, misconceptionId: "C07-M14", value: "mass_only" },
        { key: "B", text: t`It is $\sqrt{2}$ times the speed of a satellite circling close to the surface.`, correct: true, value: "root2_times_orbital" },
        { key: "C", text: t`It equals the speed of a satellite circling close to the surface.`, correct: false, misconceptionId: "C07-M1", value: "equals_orbital" },
        { key: "D", text: t`It is larger for a heavier body thrown from the surface.`, correct: false, misconceptionId: "C07-M3", value: "heavier_needs_more" },
      ],
      solution: {
        steps: [
          t`$v_e = \sqrt{\dfrac{2GM}{R}}$: it depends on the Earth's mass and radius, not on the body's mass.`,
          t`Close to the surface $v_c = \sqrt{\dfrac{GM}{R}}$, so $v_e = \sqrt{2}\,v_c$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.1 (iv)" },
      stem: t`The binding energy of a satellite in a circular orbit round a planet is $3 \times 10^{9}\ \mathrm{J}$. What is its kinetic energy?`,
      verify: { kind: "value", inputs: { BE: "3*10**9" }, params: { ask: "ke" } },
      options: [
        { key: "A", text: t`$3 \times 10^{9}\ \mathrm{J}$`, correct: true, value: "3000000000" },
        { key: "B", text: t`$6 \times 10^{9}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M6", value: "6000000000" },
        { key: "C", text: t`$-3 \times 10^{9}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M7", value: "-3000000000" },
        { key: "D", text: t`$-6 \times 10^{9}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M8", value: "-6000000000" },
      ],
      solution: {
        steps: [
          t`In orbit $KE = \dfrac{GMm}{2r}$ and the binding energy is also $\dfrac{GMm}{2r}$.`,
          t`So $KE$ equals the binding energy: $3 \times 10^{9}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (iii)" },
      stem: t`An artificial satellite of mass $2000\ \mathrm{kg}$ orbits $3600\ \mathrm{km}$ above the Earth's surface. The Earth's mass is $6 \times 10^{24}\ \mathrm{kg}$ and its radius $6400\ \mathrm{km}$; $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$. What is the satellite's binding energy?`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", M: "6*10**24", m: "2000", R: "6.4*10**6", h: "3.6*10**6" }, params: { ask: "be" } },
      options: [
        { key: "A", text: t`$8 \times 10^{10}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M4", value: "80000000000" },
        { key: "B", text: t`$-4 \times 10^{10}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M7", value: "-40000000000" },
        { key: "C", text: t`$1.11 \times 10^{11}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M9", value: "111000000000" },
        { key: "D", text: t`$4 \times 10^{10}\ \mathrm{J}$`, correct: true, value: "40000000000" },
      ],
      solution: {
        steps: [
          t`$r$ $= 6.4 \times 10^{6} + 3.6 \times 10^{6}$ $= 1.0 \times 10^{7}\ \mathrm{m}$.`,
          t`Binding energy $= \dfrac{GMm}{2r}$ $= \dfrac{6.67 \times 10^{-11} \times 6 \times 10^{24} \times 2000}{2 \times 10^{7}}$.`,
          t`$\approx 4.0 \times 10^{10}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.3 (vi)" },
      stem: t`Why does an astronaut in an orbiting satellite feel weightless?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "float" } },
      options: [
        { key: "A", text: t`The astronaut and the satellite fall towards the Earth together, so the floor does not push on the astronaut.`, correct: true, value: "falling_together" },
        { key: "B", text: t`There is no gravity at the satellite's height.`, correct: false, misconceptionId: "C07-M10", value: "no_gravity_there" },
        { key: "C", text: t`The satellite's walls shield the astronaut from the Earth's gravity.`, correct: false, misconceptionId: "C07-M11", value: "walls_shield" },
        { key: "D", text: t`The astronaut's mass becomes zero in orbit.`, correct: false, misconceptionId: "C07-M12", value: "mass_zero" },
      ],
      solution: {
        steps: [
          t`We feel weight through the floor's push on us, not through gravity directly.`,
          t`In orbit the astronaut and the satellite fall freely with the same acceleration, so the floor's push is zero.`,
        ],
      },
    },
  ],
};
