import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`At the bottom of a deep mine you are closer to the Earth's centre. Do you weigh more there or less?`,
    reveal: t`Less. The rock above you pulls you up as much as the rock below it pulls you down, so only the smaller ball of rock beneath you counts. Going down, $g$ falls; it is zero at the centre.`,
  },
  explanation: {
    intuition: [
      t`$g = \dfrac{GM}{R^2}$ holds only at the surface; it changes as you go up, go down, or move round the Earth.`,
      t`Going up takes you farther from the centre, so $g$ falls.`,
      t`Going down, less of the Earth lies beneath you, so $g$ falls too, reaching zero at the centre.`,
      t`The Earth bulges at the equator, so a point there is farther from the centre than a pole.`,
      t`The Earth's spin also uses up part of gravity at the equator, so $g$ is least there and greatest at the poles.`,
    ],
    formal: [
      {
        title: "Height above the surface",
        points: [
          t`At a **height** $h$ above the surface, the distance from the Earth's centre is $R + h$.`,
          t`So $g_h = \dfrac{GM}{(R+h)^2}$ $= g\left(\dfrac{R}{R+h}\right)^2$.`,
          t`When $h$ is much smaller than $R$: $g_h \approx g\left(1 - \dfrac{2h}{R}\right)$.`,
          t`So near the surface $g$ falls by about $0.03\%$ for every kilometre of height.`,
          t`When $h$ is not small compared with $R$, use the exact form, not the approximation.`,
        ],
      },
      {
        title: "Depth below the surface",
        points: [
          t`At a **depth** $d$, the shell of rock above you pulls equally in all directions, so its pull cancels.`,
          t`Only the sphere of radius $R - d$ beneath you pulls; for a uniform Earth its mass is $M\dfrac{(R-d)^3}{R^3}$.`,
          t`So $g_d = \dfrac{GM(R-d)}{R^3}$ $= g\left(1 - \dfrac{d}{R}\right)$: a straight-line fall with depth.`,
          t`At the centre $d = R$, so $g = 0$ and a body there has no weight.`,
          t`Outside the Earth $g$ falls as $\dfrac{1}{r^2}$, so $g$ is greatest at the surface itself.`,
        ],
        figure: {
          alt: "g, as a fraction of its surface value, against the distance r from the Earth's centre in units of R. At the start, a dot at the surface, r = R, where the fraction is 1. Step 3: inside the Earth a straight line rising from the centre to 1 at the surface, r = R. Step 4: a dot at the centre, where g is 0. Step 5: outside the Earth a curve falling as 1/r², to about 0.1 at r = 3R.",
          axes: "xy",
          chart: { x: 0.5, y: 0.25, xTitle: "r / R", yTitle: "g / g at surface" },
          view: { x: [0, 3.2], y: [0, 1.25] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1, 1]], step: 3 },
            { kind: "point", at: [1, 1], label: "surface", labelAt: "ne" },
            { kind: "point", at: [0, 0], step: 4 },
            { kind: "label", at: [0.2, 0.05], label: "centre", labelAt: "e", step: 4 },
            { kind: "curve", points: [[1, 1], [1.037, 0.931], [1.073, 0.868], [1.11, 0.812], [1.147, 0.761], [1.183, 0.714], [1.22, 0.672], [1.257, 0.633], [1.293, 0.598], [1.33, 0.565], [1.367, 0.535], [1.403, 0.508], [1.44, 0.482], [1.477, 0.459], [1.513, 0.437], [1.55, 0.416], [1.587, 0.397], [1.623, 0.379], [1.66, 0.363], [1.697, 0.347], [1.733, 0.333], [1.77, 0.319], [1.807, 0.306], [1.843, 0.294], [1.88, 0.283], [1.917, 0.272], [1.953, 0.262], [1.99, 0.253], [2.027, 0.243], [2.063, 0.235], [2.1, 0.227], [2.137, 0.219], [2.173, 0.212], [2.21, 0.205], [2.247, 0.198], [2.283, 0.192], [2.32, 0.186], [2.357, 0.18], [2.393, 0.175], [2.43, 0.169], [2.467, 0.164], [2.503, 0.16], [2.54, 0.155], [2.577, 0.151], [2.613, 0.146], [2.65, 0.142], [2.687, 0.139], [2.723, 0.135], [2.76, 0.131], [2.797, 0.128], [2.833, 0.125], [2.87, 0.121], [2.907, 0.118], [2.943, 0.115], [2.98, 0.113], [3.017, 0.11], [3.053, 0.107], [3.09, 0.105], [3.127, 0.102], [3.163, 0.1], [3.2, 0.098]], step: 5 },
          ],
        },
      },
      {
        title: "Latitude and the Earth's spin",
        points: [
          t`The Earth is slightly flattened: its equator is about $21\ \mathrm{km}$ farther from the centre than its poles.`,
          t`The **latitude** $\lambda$ of a place is its angle north or south of the equator, seen from the centre.`,
          t`The spinning Earth carries a place at latitude $\lambda$ round a circle of radius $R\cos\lambda$.`,
          t`Part of gravity supplies the centripetal force for that circle, so $g' = g - R\omega^2\cos^2\lambda$.`,
          t`The drop $R\omega^2\cos^2\lambda$ is largest at the equator, $\lambda = 0^\circ$, and zero at the poles.`,
          t`Both effects make $g$ least at the equator, about $9.78\ \mathrm{m/s^2}$, and greatest at the poles, about $9.83\ \mathrm{m/s^2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Take $g = 9.8\ \mathrm{m/s^2}$ at the surface and $R = 6400\ \mathrm{km}$. Compare $g$ at a height of $64\ \mathrm{km}$ with $g$ at a depth of $64\ \mathrm{km}$.`,
      steps: [
        t`$64\ \mathrm{km}$ is small beside $R$, so $g_h$ $= g\left(1 - \dfrac{2h}{R}\right)$ $= 9.8 \times \left(1 - \dfrac{128}{6400}\right)$.`,
        t`$g_h = 9.8 \times 0.98$ $\approx 9.60\ \mathrm{m/s^2}$.`,
        t`$g_d$ $= g\left(1 - \dfrac{d}{R}\right)$ $= 9.8 \times 0.99$ $\approx 9.70\ \mathrm{m/s^2}$.`,
        t`Near the surface, $g$ falls twice as fast going up as going down.`,
      ],
      answer: t`$9.60\ \mathrm{m/s^2}$ at the height; $9.70\ \mathrm{m/s^2}$ at the depth`,
    },
    visualSpec: t`Move a body from the Earth's centre out to space and watch a meter of $g$ rise in a straight line to the surface, then fall as $1/r^2$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses the depth rule $g\left(1 - \dfrac{h}{R}\right)$ for a height.`,
      remediation: t`Above the surface $g_h$ $= g\left(\dfrac{R}{R+h}\right)^2 \approx g\left(1 - \dfrac{2h}{R}\right)$: the factor is $2h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Uses the height rule $g\left(1 - \dfrac{2d}{R}\right)$ for a depth.`,
      remediation: t`Below the surface $g_d$ $= g\left(1 - \dfrac{d}{R}\right)$, with no factor $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Thinks $g$ grows on going down, because the centre is nearer.`,
      remediation: t`Below the surface only the sphere beneath you pulls, and it shrinks faster than the distance: $g_d$ $= g\left(1 - \dfrac{d}{R}\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Applies $\dfrac{GM}{r^2}$ inside the Earth, as if the whole mass still pulled.`,
      remediation: t`Inside, the shell above you cancels its own pull; only the mass beneath counts, so $g$ falls to zero at the centre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Thinks $g$ is the same everywhere.`,
      remediation: t`$g$ depends on the distance from the centre and on the spin: it changes with height, depth and latitude.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M6",
      mistake: t`Thinks $g$ is greatest at the equator.`,
      remediation: t`The equator is farthest from the centre and its spin takes away $R\omega^2$, so $g$ is least there.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Takes the height as the distance from the centre.",
      remediation: t`Distance in $\dfrac{GM}{r^2}$ is measured from the centre: $r = R + h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Uses $\cos\lambda$ instead of $\cos^2\lambda$.`,
      remediation: t`The centripetal acceleration is $R\omega^2\cos\lambda$; only its part along the vertical, a further $\cos\lambda$, reduces $g$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: t`Uses $\sin^2\lambda$, measuring the latitude from the pole.`,
      remediation: t`Latitude is measured from the equator, so the drop is $R\omega^2\cos^2\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Ignores the latitude and uses the drop at the equator.",
      remediation: t`Away from the equator the circle is smaller: multiply $R\omega^2$ by $\cos^2\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: t`Reads "falls by $10\%$" as "falls to $10\%$".`,
      remediation: t`Falling by $10\%$ leaves $90\%$: $\dfrac{g_h}{g} = 0.9$, so $\dfrac{2h}{R} = 0.1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Multiplies by $2$ instead of dividing when solving $\dfrac{2h}{R} = 0.1$.`,
      remediation: t`$\dfrac{2h}{R} = 0.1$ gives $h = \dfrac{0.1R}{2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Solved Ex.5.7" },
      stem: t`At what height above the Earth's surface does $g$ fall by $10\%$ of its value at the surface? Take the Earth's radius as $6400\ \mathrm{km}$ and treat the height as small compared with it.`,
      verify: { kind: "value", inputs: { R: "6400", f: "1/10" }, params: { ask: "hfrac" } },
      options: [
        { key: "A", text: t`$2880\ \mathrm{km}$`, correct: false, misconceptionId: "C04-M11", value: "2880" },
        { key: "B", text: t`$1280\ \mathrm{km}$`, correct: false, misconceptionId: "C04-M12", value: "1280" },
        { key: "C", text: t`$320\ \mathrm{km}$`, correct: true, value: "320" },
        { key: "D", text: t`$640\ \mathrm{km}$`, correct: false, misconceptionId: "C04-M1", value: "640" },
      ],
      solution: {
        steps: [
          t`$g$ falls by $10\%$, so $\dfrac{g_h}{g} = 0.9$ $= 1 - \dfrac{2h}{R}$.`,
          t`$\dfrac{2h}{R} = 0.1$, so $h = \dfrac{R}{20}$ $= \dfrac{6400}{20}$ $= 320\ \mathrm{km}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "authored" },
      stem: t`$g = 9.8\ \mathrm{m/s^2}$ at the Earth's surface, and the Earth's radius is $6400\ \mathrm{km}$. Treating the Earth as a uniform sphere, what is $g$ at a depth of $1600\ \mathrm{km}$?`,
      verify: { kind: "value", inputs: { g: "9.8", R: "6400", d: "1600" }, params: { ask: "gdepth" } },
      options: [
        { key: "A", text: t`$4.9\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M2", value: "4.90000000000000" },
        { key: "B", text: t`$12.2\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M3", value: "12.2000000000000" },
        { key: "C", text: t`$17.4\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M4", value: "17.4000000000000" },
        { key: "D", text: t`$7.35\ \mathrm{m/s^2}$`, correct: true, value: "7.35000000000000" },
      ],
      solution: {
        steps: [
          t`Inside the Earth $g_d$ $= g\left(1 - \dfrac{d}{R}\right)$.`,
          t`$g_d$ $= 9.8 \times \left(1 - \dfrac{1600}{6400}\right)$ $= 9.8 \times 0.75$ $\approx 7.35\ \mathrm{m/s^2}$.`,
        ],
        figure: {
          alt: "g, as a fraction of its surface value, against the distance r from the Earth's centre in units of R. At the start, a dot at the surface, r = R, where the fraction is 1. Step 3: inside the Earth a straight line rising from the centre to 1 at the surface, r = R. Step 4: a dot at the centre, where g is 0. Step 5: outside the Earth a curve falling as 1/r², to about 0.1 at r = 3R. A dot at r = 0.75R, a depth of 1600 km, where g is 0.75 of its surface value.",
          axes: "xy",
          chart: { x: 0.5, y: 0.25, xTitle: "r / R", yTitle: "g / g at surface" },
          view: { x: [0, 3.2], y: [0, 1.25] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1, 1]] },
            { kind: "point", at: [1, 1], label: "surface", labelAt: "ne" },
            { kind: "point", at: [0, 0] },
            { kind: "label", at: [0.2, 0.05], label: "centre", labelAt: "e" },
            { kind: "curve", points: [[1, 1], [1.037, 0.931], [1.073, 0.868], [1.11, 0.812], [1.147, 0.761], [1.183, 0.714], [1.22, 0.672], [1.257, 0.633], [1.293, 0.598], [1.33, 0.565], [1.367, 0.535], [1.403, 0.508], [1.44, 0.482], [1.477, 0.459], [1.513, 0.437], [1.55, 0.416], [1.587, 0.397], [1.623, 0.379], [1.66, 0.363], [1.697, 0.347], [1.733, 0.333], [1.77, 0.319], [1.807, 0.306], [1.843, 0.294], [1.88, 0.283], [1.917, 0.272], [1.953, 0.262], [1.99, 0.253], [2.027, 0.243], [2.063, 0.235], [2.1, 0.227], [2.137, 0.219], [2.173, 0.212], [2.21, 0.205], [2.247, 0.198], [2.283, 0.192], [2.32, 0.186], [2.357, 0.18], [2.393, 0.175], [2.43, 0.169], [2.467, 0.164], [2.503, 0.16], [2.54, 0.155], [2.577, 0.151], [2.613, 0.146], [2.65, 0.142], [2.687, 0.139], [2.723, 0.135], [2.76, 0.131], [2.797, 0.128], [2.833, 0.125], [2.87, 0.121], [2.907, 0.118], [2.943, 0.115], [2.98, 0.113], [3.017, 0.11], [3.053, 0.107], [3.09, 0.105], [3.127, 0.102], [3.163, 0.1], [3.2, 0.098]] },
            { kind: "point", at: [0.75, 0.75], tone: "good", step: 2 },
            { kind: "segment", from: [0.77, 0.7], to: [0.84, 0.36], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [0.7, 0.3], label: "d = 1600 km", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (vi)" },
      stem: t`Find the acceleration due to gravity at a height of $300\ \mathrm{km}$ above the Earth's surface. The Earth's mass is $5.98 \times 10^{24}\ \mathrm{kg}$ and its radius $6400\ \mathrm{km}$; $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", M: "5.98*10**24", R: "6400", h: "300" }, params: { ask: "gheight" } },
      options: [
        { key: "A", text: t`$9.74\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M5", value: "9.74000000000000" },
        { key: "B", text: t`$4430\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M7", value: "4430" },
        { key: "C", text: t`$8.89\ \mathrm{m/s^2}$`, correct: true, value: "8.89000000000000" },
        { key: "D", text: t`$9.28\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M1", value: "9.28000000000000" },
      ],
      solution: {
        steps: [
          t`$300\ \mathrm{km}$ is not small beside $R$; use $g_h = \dfrac{GM}{(R+h)^2}$ with $R + h$ $= 6.7 \times 10^{6}\ \mathrm{m}$.`,
          t`$g_h$ $= \dfrac{6.67 \times 10^{-11} \times 5.98 \times 10^{24}}{(6.7 \times 10^{6})^2}$ $= \dfrac{3.99 \times 10^{14}}{4.49 \times 10^{13}}$.`,
          t`$g_h \approx 8.89\ \mathrm{m/s^2}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.1 (i)" },
      stem: t`The value of the acceleration due to gravity is greatest`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gmax" } },
      options: [
        { key: "A", text: t`at the equator of the Earth.`, correct: false, misconceptionId: "C04-M6", value: "at_equator" },
        { key: "B", text: t`at the centre of the Earth.`, correct: false, misconceptionId: "C04-M4", value: "at_centre" },
        { key: "C", text: t`equally everywhere: it does not vary.`, correct: false, misconceptionId: "C04-M5", value: "same_everywhere" },
        { key: "D", text: t`at the poles of the Earth.`, correct: true, value: "at_pole" },
      ],
      solution: {
        steps: [
          t`The poles are nearest the Earth's centre, so $\dfrac{GM}{R^2}$ is largest there.`,
          t`A pole does not go round a circle as the Earth spins, so spin takes nothing away: $g$ is greatest at the poles.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.1 (ii)" },
      stem: t`The weight of a particle at the centre of the Earth is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "centre" } },
      options: [
        { key: "A", text: t`greater than at the poles.`, correct: false, misconceptionId: "C04-M3", value: "more_than_poles" },
        { key: "B", text: t`zero.`, correct: true, value: "zero_weight" },
        { key: "C", text: t`infinite.`, correct: false, misconceptionId: "C04-M4", value: "infinite_weight" },
        { key: "D", text: t`the same as at other places.`, correct: false, misconceptionId: "C04-M5", value: "same_weight" },
      ],
      solution: {
        steps: [
          t`$g_d$ $= g\left(1 - \dfrac{d}{R}\right)$, and at the centre $d = R$.`,
          t`So $g = 0$ there, and the weight $mg$ is zero.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`The Earth spins at $\omega = 7.27 \times 10^{-5}\ \mathrm{rad/s}$, and its radius is $6400\ \mathrm{km}$. By how much does its spin reduce $g$ at latitude $60^\circ$?`,
      verify: { kind: "value", inputs: { R: "6400", w: "7.27*10**-5", lat: "pi/3" }, params: { ask: "spin" } },
      options: [
        { key: "A", text: t`$0.00846\ \mathrm{m/s^2}$`, correct: true, value: "0.00846000000000000" },
        { key: "B", text: t`$0.0169\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M8", value: "0.0169000000000000" },
        { key: "C", text: t`$0.0254\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M9", value: "0.0254000000000000" },
        { key: "D", text: t`$0.0338\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C04-M10", value: "0.0338000000000000" },
      ],
      solution: {
        steps: [
          t`The drop is $R\omega^2\cos^2\lambda$, with $\cos 60^\circ = 0.5$.`,
          t`$R\omega^2$ $= 6.4 \times 10^{6} \times (7.27 \times 10^{-5})^2$ $\approx 0.0338\ \mathrm{m/s^2}$.`,
          t`Drop $= 0.0338 \times 0.25$ $\approx 0.00846\ \mathrm{m/s^2}$.`,
        ],
      },
    },
  ],
};
