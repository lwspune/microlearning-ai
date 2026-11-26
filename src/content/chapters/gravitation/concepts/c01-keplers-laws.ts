import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The Earth is nearest the Sun in early January and farthest from it in early July. In which month does it move faster along its path?`,
    reveal: t`In January. The line from the Sun to the Earth sweeps out equal areas in equal times, so when that line is short the Earth must move faster. This is Kepler's second law.`,
  },
  explanation: {
    intuition: [
      t`A planet's path round the Sun is its **orbit**; Kepler found three rules for orbits from careful observations.`,
      t`An orbit is an **ellipse**, a stretched circle, with the Sun at one **focus**, a point off the centre.`,
      t`The line from the Sun to the planet sweeps out equal areas in equal times.`,
      t`So the planet moves fastest when nearest the Sun and slowest when farthest from it.`,
      t`The **period** $T$, the time for one orbit, grows with the orbit's size $a$: $T^2 \propto a^3$.`,
    ],
    formal: [
      {
        title: "Law of orbits",
        points: [
          t`An **ellipse** is a closed curve whose distances from two fixed points, its **foci**, always add to the same total.`,
          t`Half its longest diameter is the **semi-major axis** $a$, the orbit's size.`,
          t`**Law of orbits:** every planet moves in an ellipse, with the Sun at one focus.`,
          t`The **perihelion** is the orbit's point nearest the Sun; the **aphelion** is its farthest point.`,
          t`The planets' ellipses are nearly circles, so $a$ is about the orbit's radius $r$.`,
        ],
        figure: {
          alt: "Step 1: an ellipse with its centre O and two foci, F′ on the left and the right one. Step 2: the semi-major axis a, half the longest diameter, drawn below. Step 3: the Sun at the right focus and a planet on the ellipse. Step 4: the perihelion, the nearest point to the Sun, on the right end, and the aphelion, the farthest, on the left end.",
          axes: "none",
          view: { x: [-5.4, 5.4], y: [-3.2, 2.7] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 2, step: 1 },
            { kind: "point", at: [2.2361, 0], step: 1 },
            { kind: "point", at: [0, 0], label: "O", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [-2.2361, 0], label: "F′", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [-1.2679, 1.8126], label: "planet", labelAt: "nw", step: 3 },
            { kind: "segment", from: [-3, -2.45], to: [0, -2.45], label: "a", labelAt: "s", tone: "good", step: 2 },
            { kind: "label", at: [3, 0], label: "perihelion", labelAt: "se", tone: "muted", step: 4 },
            { kind: "label", at: [-3, 0], label: "aphelion", labelAt: "nw", tone: "muted", step: 4 },
            { kind: "label", at: [2.2361, 0], label: "Sun", labelAt: "n", step: 3 },
          ],
        },
      },
      {
        title: "Law of areas",
        points: [
          t`The **radius vector** is the line joining the Sun to the planet.`,
          t`**Law of areas:** the radius vector sweeps out equal areas in equal intervals of time.`,
          t`Near the Sun the radius vector is short, so the planet covers a longer arc to sweep the same area.`,
          t`So a planet moves fastest at perihelion and slowest at aphelion.`,
          t`At those two points the velocity is at right angles to the radius vector.`,
          t`There the area swept in a short time $\Delta t$ is $\dfrac{1}{2}rv\,\Delta t$, so $r_1v_1 = r_2v_2$.`,
        ],
        figure: {
          alt: "Step 1: the elliptical orbit, the Sun at a focus and the line from the Sun to the planet. Step 2: two shaded areas swept in equal times, a short fat one near the Sun and a long thin one near the farthest point. Step 4: a long velocity arrow at the nearest point and a short one at the farthest point. Step 5: the distances r₁ from the Sun to the nearest point and r₂ to the farthest point.",
          axes: "none",
          view: { x: [-5.4, 5.4], y: [-3.2, 2.7] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 2, step: 1 },
            { kind: "point", at: [2.2361, 0], step: 1 },
            { kind: "point", at: [-1.2679, 1.8126], label: "planet", labelAt: "nw", step: 1 },
            { kind: "segment", from: [2.2361, 0], to: [-1.2679, 1.8126], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[2.2361, 0], [3, 0]] }, { kind: "halfPlane", through: [[3, 0], [2.9191, 0.4612]] }, { kind: "halfPlane", through: [[2.9191, 0.4612], [2.6809, 0.8976]] }, { kind: "halfPlane", through: [[2.6809, 0.8976], [2.2981, 1.2856]] }, { kind: "halfPlane", through: [[2.2981, 1.2856], [1.7915, 1.6042]] }, { kind: "halfPlane", through: [[1.7915, 1.6042], [1.1882, 1.8364]] }, { kind: "halfPlane", through: [[1.1882, 1.8364], [0.5209, 1.9696]] }, { kind: "halfPlane", through: [[0.5209, 1.9696], [2.2361, 0]] }], tone: "good", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[2.2361, 0], [-2.7816, 0.7492]] }, { kind: "halfPlane", through: [[-2.7816, 0.7492], [-2.8477, 0.6291]] }, { kind: "halfPlane", through: [[-2.8477, 0.6291], [-2.9022, 0.5064]] }, { kind: "halfPlane", through: [[-2.9022, 0.5064], [-2.9449, 0.3816]] }, { kind: "halfPlane", through: [[-2.9449, 0.3816], [-2.9755, 0.2553]] }, { kind: "halfPlane", through: [[-2.9755, 0.2553], [-2.9939, 0.1279]] }, { kind: "halfPlane", through: [[-2.9939, 0.1279], [-3, 0]] }, { kind: "halfPlane", through: [[-3, 0], [2.2361, 0]] }], tone: "good", step: 2 },
            { kind: "vector", from: [3, 0], to: [3, 1.5], label: "fast", labelAt: "e", step: 4 },
            { kind: "vector", from: [-3, 0], to: [-3, -0.55], label: "slow", labelAt: "w", step: 4 },
            { kind: "segment", from: [2.2361, 0], to: [3, 0], label: "r₁", labelAt: "s", tone: "good", step: 5 },
            { kind: "segment", from: [-3, 0], to: [0.6, 0], label: "r₂", labelAt: "s", tone: "good", step: 5 },
            { kind: "segment", from: [0.6, 0], to: [2.2361, 0], tone: "good", step: 5 },
            { kind: "label", at: [2.2361, 0], label: "Sun", labelAt: "sw", step: 1 },
          ],
        },
      },
      {
        title: "Law of periods",
        points: [
          t`The **period** $T$ of a planet is the time it takes to go once round its orbit.`,
          t`**Law of periods:** $T^2 \propto a^3$, so $\dfrac{T^2}{a^3}$ is the same for every planet of the Sun.`,
          t`For two planets: $\left(\dfrac{T_2}{T_1}\right)^2$ $= \left(\dfrac{a_2}{a_1}\right)^3$.`,
          t`Double the orbit's size and the period grows $2^{3/2} \approx 2.83$ times, not twice.`,
          t`The law holds for any bodies going round one centre, such as the satellites of one planet.`,
          t`Kepler found the laws from observations; Newton's law of gravitation later explained them.`,
        ],
        figure: {
          alt: "Step 1: the Sun at the centre and a small near-circular orbit of size a₁ with period T₁. Step 2: a bigger orbit of size a₂ with a longer period T₂.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-2.9, 2.9] },
          elements: [
            { kind: "point", at: [0, 0], label: "Sun", labelAt: "w" },
            { kind: "circle", centre: [0, 0], r: 1.1, step: 1 },
            { kind: "segment", from: [0, 0], to: [0.8426, 0.7071], label: "a₁", labelAt: "nw", tone: "good", step: 1 },
            { kind: "label", at: [0, -1.1], label: "T₁", labelAt: "n", tone: "muted", step: 1 },
            { kind: "circle", centre: [0, 0], r: 2.5, step: 2 },
            { kind: "segment", from: [0, 0], to: [2.1651, -1.25], label: "a₂", labelAt: "ne", tone: "good", step: 2 },
            { kind: "label", at: [0, 2.5], label: "T₂", labelAt: "s", tone: "muted", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Jupiter goes round the Sun once in $11.9$ years. Find its distance from the Sun in **AU**, where $1\ \mathrm{AU}$ is the Earth's mean distance from the Sun.`,
      steps: [
        t`Both orbit the Sun, so $\left(\dfrac{T_J}{T_E}\right)^2$ $= \left(\dfrac{a_J}{a_E}\right)^3$, with $T_E = 1$ year, $a_E = 1\ \mathrm{AU}$.`,
        t`$\left(\dfrac{a_J}{1\ \mathrm{AU}}\right)^3$ $= 11.9^2$ $= 141.6$.`,
        t`$a_J = \sqrt[3]{141.6}\ \mathrm{AU}$ $\approx 5.21\ \mathrm{AU}$.`,
      ],
      answer: t`$5.21\ \mathrm{AU}$`,
      figure: {
        alt: "Step 1: the Sun at the centre and the Earth's small orbit, of radius 1 AU, taking 1 year. Step 2: Jupiter's much bigger orbit, taking 11.9 years. Step 3: Jupiter's orbit radius, a = 5.21 AU.",
        axes: "none",
        view: { x: [-3.6, 3.6], y: [-3.5, 3.5] },
        elements: [
          { kind: "point", at: [0, 0], label: "Sun", labelAt: "w" },
          { kind: "circle", centre: [0, 0], r: 0.8, step: 1 },
          { kind: "label", at: [0, 0.8], label: "Earth: 1 AU, 1 year", labelAt: "n", tone: "muted", step: 1 },
          { kind: "circle", centre: [0, 0], r: 3.1, step: 2 },
          { kind: "point", at: [1.9926, -2.3747], label: "Jupiter", labelAt: "se", step: 2 },
          { kind: "label", at: [0, 2.8], label: "T = 11.9 years", labelAt: "s", tone: "muted", step: 2 },
          { kind: "segment", from: [0, 0], to: [1.9926, -2.3747], label: "a = 5.21 AU", labelAt: "sw", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "Step 1: an ellipse, a planet's orbit, with the Sun inside it off to the right. Step 2: the ellipse's centre O and its other focus F′; the Sun sits at a focus, not at the centre. Step 3: two shaded areas swept by the line from the Sun in equal times: a short fat one near the Sun and a long thin one far away. Step 4: a long velocity arrow at the nearest point (fast) and a short one at the farthest point (slow). Step 5: the semi-major axis a, half the longest diameter.",
      axes: "none",
      view: { x: [-5.4, 5.4], y: [-3.2, 2.7] },
      elements: [
        { kind: "ellipse", centre: [0, 0], rx: 3, ry: 2, step: 1 },
        { kind: "point", at: [2.2361, 0], label: "Sun", labelAt: "s", step: 1 },
        { kind: "point", at: [0, 0], label: "O", labelAt: "s", tone: "muted", step: 2 },
        { kind: "point", at: [-2.2361, 0], label: "F′", labelAt: "s", tone: "muted", step: 2 },
        { kind: "point", at: [-1.2679, 1.8126], label: "planet", labelAt: "nw", step: 1 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[2.2361, 0], [3, 0]] }, { kind: "halfPlane", through: [[3, 0], [2.9191, 0.4612]] }, { kind: "halfPlane", through: [[2.9191, 0.4612], [2.6809, 0.8976]] }, { kind: "halfPlane", through: [[2.6809, 0.8976], [2.2981, 1.2856]] }, { kind: "halfPlane", through: [[2.2981, 1.2856], [1.7915, 1.6042]] }, { kind: "halfPlane", through: [[1.7915, 1.6042], [1.1882, 1.8364]] }, { kind: "halfPlane", through: [[1.1882, 1.8364], [0.5209, 1.9696]] }, { kind: "halfPlane", through: [[0.5209, 1.9696], [2.2361, 0]] }], tone: "good", step: 3 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[2.2361, 0], [-2.7816, 0.7492]] }, { kind: "halfPlane", through: [[-2.7816, 0.7492], [-2.8477, 0.6291]] }, { kind: "halfPlane", through: [[-2.8477, 0.6291], [-2.9022, 0.5064]] }, { kind: "halfPlane", through: [[-2.9022, 0.5064], [-2.9449, 0.3816]] }, { kind: "halfPlane", through: [[-2.9449, 0.3816], [-2.9755, 0.2553]] }, { kind: "halfPlane", through: [[-2.9755, 0.2553], [-2.9939, 0.1279]] }, { kind: "halfPlane", through: [[-2.9939, 0.1279], [-3, 0]] }, { kind: "halfPlane", through: [[-3, 0], [2.2361, 0]] }], tone: "good", step: 3 },
        { kind: "vector", from: [3, 0], to: [3, 1.5], label: "fast", labelAt: "e", step: 4 },
        { kind: "vector", from: [-3, 0], to: [-3, -0.55], label: "slow", labelAt: "w", step: 4 },
        { kind: "segment", from: [-3, -2.45], to: [0, -2.45], label: "a", labelAt: "s", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag a planet round an ellipse and watch the swept areas for equal times stay equal while its speed changes.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes the period as proportional to the orbit's size.",
      remediation: t`The law of periods is $T^2 \propto a^3$: the period grows as $a^{3/2}$, faster than $a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Swaps the powers, using $T^3 \propto a^2$.`,
      remediation: t`It is the square of the period and the cube of the size: $T^2 \propto a^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks a bigger orbit has a shorter period.",
      remediation: t`A bigger orbit takes longer: in $T^2 \propto a^3$ a larger $a$ gives a larger $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks a planet moves at a steady speed round its orbit.",
      remediation: t`Equal areas in equal times means a faster planet where the radius vector is short: $r_1v_1 = r_2v_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Puts the Sun at the centre of the ellipse.",
      remediation: "Kepler's first law puts the Sun at one focus of the ellipse, not at its centre.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks a planet moves fastest when farthest from the Sun.",
      remediation: t`The radius vector is longest at aphelion, so the planet moves slowest there: $v_2 = \dfrac{r_1v_1}{r_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Takes the speed as varying like the force, as $\dfrac{1}{r^2}$.`,
      remediation: t`Equal areas give $rv$ the same at perihelion and aphelion, so the speed varies as $\dfrac{1}{r}$ there.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Solved Ex.5.1" },
      stem: t`The Earth goes round the Sun once in $365$ days. If the distance between the Sun and the Earth became three times what it is now, how long would a year last?`,
      verify: { kind: "value", inputs: { T1: "365", r1: "1", r2: "3" }, params: { ask: "period", sf: "4" } },
      options: [
        { key: "A", text: t`$1897\ \mathrm{days}$`, correct: true, value: "1897" },
        { key: "B", text: t`$1095\ \mathrm{days}$`, correct: false, misconceptionId: "C01-M1", value: "1095" },
        { key: "C", text: t`$759.2\ \mathrm{days}$`, correct: false, misconceptionId: "C01-M2", value: "759.200000000000" },
        { key: "D", text: t`$70.24\ \mathrm{days}$`, correct: false, misconceptionId: "C01-M3", value: "70.2400000000000" },
      ],
      solution: {
        steps: [
          t`Law of periods: $\dfrac{T_2}{T_1}$ $= \left(\dfrac{r_2}{r_1}\right)^{3/2}$ $= 3^{3/2} = \sqrt{27}$.`,
          t`$T_2 = 365 \times \sqrt{27}$ $\approx 1897$ days.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (iv)" },
      stem: t`Two satellites A and B go round the same planet, with periods of $1$ hour and $8$ hours. The radius of B's orbit is $4 \times 10^{4}\ \mathrm{km}$. What is the radius of A's orbit?`,
      verify: { kind: "value", inputs: { T1: "8", r1: "40000", T2: "1" }, params: { ask: "radius" } },
      options: [
        { key: "A", text: t`$10000\ \mathrm{km}$`, correct: true, value: "10000" },
        { key: "B", text: t`$5000\ \mathrm{km}$`, correct: false, misconceptionId: "C01-M1", value: "5000" },
        { key: "C", text: t`$1770\ \mathrm{km}$`, correct: false, misconceptionId: "C01-M2", value: "1770" },
        { key: "D", text: t`$1.6 \times 10^{5}\ \mathrm{km}$`, correct: false, misconceptionId: "C01-M3", value: "160000" },
      ],
      solution: {
        steps: [
          t`Same planet, so $\left(\dfrac{r_A}{r_B}\right)^3$ $= \left(\dfrac{T_A}{T_B}\right)^2$ $= \left(\dfrac{1}{8}\right)^2$ $= \dfrac{1}{64}$.`,
          t`$\dfrac{r_A}{r_B} = \dfrac{1}{4}$, so $r_A = \dfrac{4 \times 10^{4}}{4}$ $= 10000\ \mathrm{km}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.3 (xii)" },
      stem: t`Which statement about a planet's orbit round the Sun is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "orbit" } },
      options: [
        { key: "A", text: t`It is an ellipse with the Sun at its centre, and the planet moves at a steady speed.`, correct: false, misconceptionId: "C01-M5", value: "sun_centre" },
        { key: "B", text: t`It is an ellipse with the Sun at one focus, and the planet moves fastest when farthest from the Sun.`, correct: false, misconceptionId: "C01-M6", value: "focus_fast_far" },
        { key: "C", text: t`It is an ellipse with the Sun at one focus, and the planet moves fastest when nearest the Sun.`, correct: true, value: "focus_fast_near" },
        { key: "D", text: t`It is an ellipse with the Sun at one focus, and the planet moves at a steady speed.`, correct: false, misconceptionId: "C01-M4", value: "focus_steady" },
      ],
      solution: {
        steps: [
          t`Law of orbits: the orbit is an ellipse with the Sun at one focus.`,
          t`Law of areas: equal areas in equal times, so the planet is fastest where it is nearest the Sun.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`A planet is $1.0 \times 10^{11}\ \mathrm{m}$ from the Sun at its nearest point and $1.5 \times 10^{11}\ \mathrm{m}$ at its farthest. At its nearest point it moves at $36\ \mathrm{km/s}$. How fast does it move at its farthest point?`,
      verify: { kind: "value", inputs: { r1: "1", r2: "3/2", v1: "36" }, params: { ask: "speed" } },
      options: [
        { key: "A", text: t`$24\ \mathrm{km/s}$`, correct: true, value: "24" },
        { key: "B", text: t`$36\ \mathrm{km/s}$`, correct: false, misconceptionId: "C01-M4", value: "36" },
        { key: "C", text: t`$54\ \mathrm{km/s}$`, correct: false, misconceptionId: "C01-M6", value: "54" },
        { key: "D", text: t`$16\ \mathrm{km/s}$`, correct: false, misconceptionId: "C01-M7", value: "16" },
      ],
      solution: {
        steps: [
          t`At the nearest and farthest points equal areas give $r_1v_1 = r_2v_2$.`,
          t`$v_2 = \dfrac{r_1v_1}{r_2}$ $= \dfrac{1.0 \times 36}{1.5}$ $= 24\ \mathrm{km/s}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`The Earth goes round the Sun in $365$ days at a mean distance of $1.5 \times 10^{11}\ \mathrm{m}$. Mercury goes round in $88$ days. What is Mercury's mean distance from the Sun?`,
      verify: { kind: "value", inputs: { T1: "365", r1: "1.5*10**11", T2: "88" }, params: { ask: "radius" } },
      options: [
        { key: "A", text: t`$5.81 \times 10^{10}\ \mathrm{m}$`, correct: true, value: "58100000000" },
        { key: "B", text: t`$3.62 \times 10^{10}\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M1", value: "36200000000" },
        { key: "C", text: t`$1.78 \times 10^{10}\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M2", value: "17800000000" },
        { key: "D", text: t`$3.87 \times 10^{11}\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M3", value: "387000000000" },
      ],
      solution: {
        steps: [
          t`Both orbit the Sun, so $\dfrac{r_M}{r_E}$ $= \left(\dfrac{T_M}{T_E}\right)^{2/3}$ $= \left(\dfrac{88}{365}\right)^{2/3}$ $\approx 0.387$.`,
          t`$r_M$ $= 0.387 \times 1.5 \times 10^{11}$ $\approx 5.81 \times 10^{10}\ \mathrm{m}$.`,
        ],
      },
    },
  ],
};
