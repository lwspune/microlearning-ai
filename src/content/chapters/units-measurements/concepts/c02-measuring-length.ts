import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`No tape measure reaches the stars, yet astronomers know the distances to thousands of them. How can you measure a distance you can never travel?`,
    reveal: t`With angles. Look at a star from two points far apart and it seems to shift against the distant background. That tiny shift, the **parallax**, together with the distance between the two points, gives the star's distance: $D = \dfrac{b}{\theta}$.`,
  },
  explanation: {
    intuition: [
      t`Hold up a finger and look at it with one eye, then the other: it jumps against the background.`,
      t`The farther the finger, the smaller the jump. That apparent shift is **parallax**.`,
      t`Viewing a distant object from two points $A$ and $B$ a **baseline** $b$ apart, the lines of sight meet at a small angle $\theta$.`,
      t`For a far object, $\theta$ in radian is the baseline divided by the distance: $\theta = \dfrac{b}{D}$.`,
      t`The same idea, angle times distance, gives the size of a far object from the angle it fills.`,
    ],
    formal: [
      {
        title: "The parallax method",
        points: [
          t`Observe the object from two points $A$ and $B$ a baseline $b$ apart, and measure the parallax angle $\theta$.`,
          t`For $D \gg b$, the arc and the chord are nearly equal: $\theta = \dfrac{b}{D}$, so $D = \dfrac{b}{\theta}$.`,
          t`$\theta$ must be in radian: $1^\circ$ $= \dfrac{\pi}{180}\ \mathrm{rad}$, $1' \approx 2.91 \times 10^{-4}\ \mathrm{rad}$, $1\ \mathrm{rad} = 206265''$.`,
          t`The farther the object, the smaller the parallax.`,
        ],
        figure: {
          alt: "The parallax method: baseline b between A and B, the parallax θ at the star, and its distance D = b/θ.",
          axes: "none",
          view: { x: [-1.6, 9.6], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [8, 0], label: "star", labelAt: "e", step: 1 },
            { kind: "point", at: [0, 1], label: "A", labelAt: "w", step: 1 },
            { kind: "point", at: [0, -1], label: "B", labelAt: "w", step: 1 },
            { kind: "segment", from: [0, 1], to: [0, -1], label: "b", labelAt: "w", tone: "good", step: 1 },
            { kind: "segment", from: [0, 1], to: [8, 0], tone: "muted", step: 1 },
            { kind: "segment", from: [0, -1], to: [8, 0], tone: "muted", step: 1 },
            { kind: "arc", centre: [8, 0], r: 2.2, from: 172.8749836510982, to: 187.1250163489018, step: 2 },
            { kind: "label", at: [5.2, 0], label: "θ", labelAt: "w", step: 2 },
            { kind: "segment", from: [0, -1.9], to: [8, -1.9], label: "D", labelAt: "s", dashed: true, step: 3 },
          ],
        },
      },
      {
        title: "Size from angular diameter",
        points: [
          t`A far object of diameter $d$ at distance $D$ fills an angle $\alpha$, its **angular diameter**.`,
          t`For small $\alpha$ in radian: $d = D\alpha$.`,
          t`Knowing the distance and measuring the angle gives the size of the Moon, the Sun or a planet.`,
        ],
        figure: {
          alt: "An observer O and a far object of diameter d at distance D. Step 1: the lines of sight to its two edges. Step 2: the angle α between them, its angular diameter.",
          axes: "none",
          view: { x: [-1.6, 9.6], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [0, 0], label: "O", labelAt: "w", step: 1 },
            { kind: "segment", from: [8, -1.2], to: [8, 1.2], label: "d", labelAt: "e", tone: "good", step: 1 },
            { kind: "segment", from: [0, 0], to: [8, 1.2], tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [8, -1.2], tone: "muted", step: 1 },
            { kind: "arc", centre: [0, 0], r: 2.2, from: -8.530765609948133, to: 8.530765609948133, step: 2 },
            { kind: "label", at: [2.5, 0], label: "α", labelAt: "e", step: 2 },
            { kind: "segment", from: [0, -1.9], to: [8, -1.9], label: "D", labelAt: "s", dashed: true, step: 2 },
          ],
        },
      },
      {
        title: "Units of large distances",
        points: [
          t`**Astronomical unit**: the mean Earth-Sun distance, $1\ \mathrm{AU}$ $= 1.496 \times 10^{11}\ \mathrm{m}$.`,
          t`**Light year**: the distance light travels in a year, $9.46 \times 10^{15}\ \mathrm{m}$; a distance, not a time.`,
          t`**Parsec**: the distance at which $1\ \mathrm{AU}$ subtends $1''$, about $3.26$ light years.`,
        ],
        figure: {
          alt: "A star 1 parsec away: seen from the two ends of a baseline of 1 AU on each side of the Sun, its parallax is 1 second of arc.",
          axes: "none",
          view: { x: [-1.6, 9.6], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [8, 0], label: "star", labelAt: "e", step: 1 },
            { kind: "point", at: [0, 1], label: "A", labelAt: "w", step: 1 },
            { kind: "point", at: [0, -1], label: "B", labelAt: "w", step: 1 },
            { kind: "segment", from: [0, 1], to: [0, -1], label: "2 AU", labelAt: "w", tone: "good", step: 1 },
            { kind: "segment", from: [0, 1], to: [8, 0], tone: "muted", step: 1 },
            { kind: "segment", from: [0, -1], to: [8, 0], tone: "muted", step: 1 },
            { kind: "arc", centre: [8, 0], r: 2.2, from: 172.8749836510982, to: 187.1250163489018, step: 2 },
            { kind: "label", at: [5.2, 0], label: "2″", labelAt: "w", step: 2 },
            { kind: "segment", from: [0, -1.9], to: [8, -1.9], label: "1 parsec", labelAt: "s", dashed: true, step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`The nearest star is $4.2$ light years away. What parallax does it show from two points of the Earth's orbit $2\ \mathrm{AU}$ apart? ($1\ \mathrm{AU}$ $= 1.496 \times 10^{11}\ \mathrm{m}$, $1$ light year $= 9.46 \times 10^{15}\ \mathrm{m}$.)`,
      steps: [
        t`$b = 2 \times 1.496 \times 10^{11}$ $= 2.99 \times 10^{11}\ \mathrm{m}$; $D = 4.2 \times 9.46 \times 10^{15}$ $= 3.97 \times 10^{16}\ \mathrm{m}$.`,
        t`$\theta = \dfrac{b}{D}$ $= \dfrac{2.99 \times 10^{11}}{3.97 \times 10^{16}}$ $\approx 7.53 \times 10^{-6}\ \mathrm{rad}$.`,
        t`In seconds of arc: $7.53 \times 10^{-6} \times 206265$ $\approx 1.55''$.`,
      ],
      answer: t`About $1.55''$`,
      figure: {
        alt: "The star 4.2 light years away. Step 1: the baseline of 2 AU. Step 2: the parallax θ. Step 3: the distance 4.2 ly.",
        axes: "none",
        view: { x: [-1.6, 9.6], y: [-2.6, 2.6] },
        elements: [
          { kind: "point", at: [8, 0], label: "star", labelAt: "e", step: 1 },
          { kind: "point", at: [0, 1], label: "A", labelAt: "w", step: 1 },
          { kind: "point", at: [0, -1], label: "B", labelAt: "w", step: 1 },
          { kind: "segment", from: [0, 1], to: [0, -1], label: "2 AU", labelAt: "w", tone: "good", step: 1 },
          { kind: "segment", from: [0, 1], to: [8, 0], tone: "muted", step: 1 },
          { kind: "segment", from: [0, -1], to: [8, 0], tone: "muted", step: 1 },
          { kind: "arc", centre: [8, 0], r: 2.2, from: 172.8749836510982, to: 187.1250163489018, step: 2 },
          { kind: "label", at: [5.2, 0], label: "θ", labelAt: "w", step: 2 },
          { kind: "segment", from: [0, -1.9], to: [8, -1.9], label: "4.2 ly", labelAt: "s", dashed: true, step: 3 },
        ],
      },
    },
    figure: {
      alt: "A far star seen from two points A and B a baseline b apart. Step 2: the small angle θ at the star between the two lines of sight, the parallax. Step 3: the star's distance D.",
      axes: "none",
      view: { x: [-1.6, 9.6], y: [-2.6, 2.6] },
      elements: [
        { kind: "point", at: [8, 0], label: "star", labelAt: "e", step: 1 },
        { kind: "point", at: [0, 1], label: "A", labelAt: "w", step: 1 },
        { kind: "point", at: [0, -1], label: "B", labelAt: "w", step: 1 },
        { kind: "segment", from: [0, 1], to: [0, -1], label: "b", labelAt: "w", tone: "good", step: 1 },
        { kind: "segment", from: [0, 1], to: [8, 0], tone: "muted", step: 1 },
        { kind: "segment", from: [0, -1], to: [8, 0], tone: "muted", step: 1 },
        { kind: "arc", centre: [8, 0], r: 2.2, from: 172.8749836510982, to: 187.1250163489018, step: 2 },
        { kind: "label", at: [5.2, 0], label: "θ", labelAt: "w", step: 2 },
        { kind: "segment", from: [0, -1.9], to: [8, -1.9], label: "D", labelAt: "s", dashed: true, step: 3 },
      ],
    },
    visualSpec: t`Move a star nearer and farther and watch the parallax angle between two lines of sight grow and shrink.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Uses one AU as the baseline.",
      remediation: t`Opposite points of the orbit are a whole diameter apart: $2\ \mathrm{AU}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Leaves the angle in radian.",
      remediation: t`$1\ \mathrm{rad} = 206265''$: multiply to get seconds of arc.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Divides the distance by the baseline.",
      remediation: t`$\theta = \dfrac{b}{D}$: a far star gives a *small* angle.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Uses degrees as if they were radians.",
      remediation: t`Convert first: $1^\circ 54'$ $= 114' \approx 0.0332\ \mathrm{rad}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Reads $1^\circ 54'$ as $1.54^\circ$.`,
      remediation: t`There are $60'$ in a degree: $1^\circ 54' = 1.9^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Divides the distance by the angle.",
      remediation: t`For a size, multiply: $d = D\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Converts seconds of arc as if they were minutes.",
      remediation: t`$1''$ $= \dfrac{1}{206265}\ \mathrm{rad} \approx 4.85 \times 10^{-6}\ \mathrm{rad}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Uses the seconds of arc as radians.",
      remediation: t`Convert to radian first: $35.72'' \approx 1.73 \times 10^{-4}\ \mathrm{rad}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks the farther star has the larger parallax.",
      remediation: t`$\theta = \dfrac{b}{D}$: the larger $D$, the smaller the angle.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks parallax depends only on the baseline.",
      remediation: t`$\theta = \dfrac{b}{D}$ depends on the distance too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks stars are too far to show any parallax.",
      remediation: "Nearby stars show parallaxes of about a second of arc, which telescopes can measure.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks a light year is a time.",
      remediation: "It is the *distance* light travels in a year.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks a light year is a speed.",
      remediation: "It is a distance: the speed of light times one year.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks a light year measures brightness.",
      remediation: "Despite the word 'light', it is a distance.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Mixes metres and kilometres.",
      remediation: t`The distance is in km, so $d = D\alpha$ comes out in km.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.2" },
      stem: t`A star is $5.5$ light years from the Earth. What parallax does it show when viewed from two opposite points of the Earth's orbit, $2\ \mathrm{AU}$ apart? (Take $1\ \mathrm{AU}$ $= 1.496 \times 10^{11}\ \mathrm{m}$, $1$ light year $= 9.46 \times 10^{15}\ \mathrm{m}$, $1\ \mathrm{rad} = 206265''$.)`,
      verify: { kind: "value", inputs: { D_ly: "5.5", AU: "1.496e11", ly: "9.46e15" }, params: { ask: "parallax" } },
      options: [
        { key: "A", text: t`$1.19\ \mathrm{arcsec}$`, correct: true, value: "1.19000000000000" },
        { key: "B", text: t`$0.593\ \mathrm{arcsec}$`, correct: false, misconceptionId: "C02-M1", value: "0.593000000000000" },
        { key: "C", text: t`$5.75 \times 10^{-6}\ \mathrm{arcsec}$`, correct: false, misconceptionId: "C02-M2", value: "5.75000000000000e-6" },
        { key: "D", text: t`$3.59 \times 10^{10}\ \mathrm{arcsec}$`, correct: false, misconceptionId: "C02-M3", value: "35900000000" },
      ],
      solution: {
        steps: [
          t`$b = 2 \times 1.496 \times 10^{11}$ $= 2.992 \times 10^{11}\ \mathrm{m}$; $D$ $= 5.5 \times 9.46 \times 10^{15}$ $= 5.203 \times 10^{16}\ \mathrm{m}$.`,
          t`$\theta$ $= \dfrac{b}{D} \approx 5.75 \times 10^{-6}\ \mathrm{rad}$ $\approx 5.75 \times 10^{-6} \times 206265$ $\approx 1.19''$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.3" },
      stem: t`The Moon is $3.84 \times 10^8\ \mathrm{m}$ from the Earth. Viewed from two diametrically opposite points on the Earth, the angle subtended at the Moon is $1^\circ 54'$. What is the Earth's diameter?`,
      verify: { kind: "value", inputs: { deg: "1", min: "54", D_m: "3.84e8" }, params: { ask: "earth" } },
      options: [
        { key: "A", text: t`$7.3 \times 10^{8}\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M4", value: "730000000" },
        { key: "B", text: t`$1.03 \times 10^{7}\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M5", value: "10300000" },
        { key: "C", text: t`$1.16 \times 10^{10}\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M6", value: "11600000000" },
        { key: "D", text: t`$1.27 \times 10^{7}\ \mathrm{m}$`, correct: true, value: "12700000" },
      ],
      solution: {
        steps: [
          t`$\theta = 1^\circ 54'$ $= 114' \approx 114 \times 2.91 \times 10^{-4}$ $\approx 0.0332\ \mathrm{rad}$.`,
          t`Diameter $= D\theta$ $= 3.84 \times 10^8 \times 0.0332$ $\approx 1.27 \times 10^7\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (xiii)" },
      stem: t`When Jupiter is $824.7$ million km from the Earth, its angular diameter is $35.72''$. What is its diameter? ($1\ \mathrm{rad} = 206265''$.)`,
      verify: { kind: "value", inputs: { arcsec: "35.72", D_km: "8.247e8" }, params: { ask: "jupiter" } },
      options: [
        { key: "A", text: t`$1.43 \times 10^{8}\ \mathrm{km}$`, correct: false, misconceptionId: "C02-M15", value: "143000000" },
        { key: "B", text: t`$1.43 \times 10^{5}\ \mathrm{km}$`, correct: true, value: "143000" },
        { key: "C", text: t`$8.57 \times 10^{6}\ \mathrm{km}$`, correct: false, misconceptionId: "C02-M7", value: "8570000" },
        { key: "D", text: t`$2.95 \times 10^{10}\ \mathrm{km}$`, correct: false, misconceptionId: "C02-M8", value: "29500000000" },
      ],
      solution: {
        steps: [
          t`$\alpha$ $= \dfrac{35.72}{206265} \approx 1.73 \times 10^{-4}\ \mathrm{rad}$.`,
          t`$d = D\alpha$ $= 8.247 \times 10^8 \times 1.73 \times 10^{-4}$ $\approx 1.43 \times 10^5\ \mathrm{km}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.2 (i)" },
      stem: t`Star A is farther from the Earth than star B. Seen from the two ends of the same baseline, which star shows the larger parallax angle?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "nearer" } },
      options: [
        { key: "A", text: t`Neither: stars are too far to show any parallax`, correct: false, misconceptionId: "C02-M11", value: "neither_par" },
        { key: "B", text: t`Star B, the nearer one`, correct: true, value: "nearer_B" },
        { key: "C", text: t`Star A, the farther one`, correct: false, misconceptionId: "C02-M9", value: "farther_A" },
        { key: "D", text: t`Both the same: the angle depends only on the baseline`, correct: false, misconceptionId: "C02-M10", value: "equal_par" },
      ],
      solution: {
        steps: [
          t`With the same baseline, $\theta = \dfrac{b}{D}$.`,
          t`The nearer star, B, has the smaller $D$ and so the larger parallax.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.1 (iii)" },
      stem: t`A light year is a unit of which quantity?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ly" } },
      options: [
        { key: "A", text: t`Brightness`, correct: false, misconceptionId: "C02-M14", value: "brightness_u" },
        { key: "B", text: t`Distance`, correct: true, value: "distance_u" },
        { key: "C", text: t`Time`, correct: false, misconceptionId: "C02-M12", value: "time_u" },
        { key: "D", text: t`Speed`, correct: false, misconceptionId: "C02-M13", value: "speed_u" },
      ],
      solution: {
        steps: [
          t`A light year is how far light travels in one year.`,
          t`So it measures distance: $9.46 \times 10^{15}\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
