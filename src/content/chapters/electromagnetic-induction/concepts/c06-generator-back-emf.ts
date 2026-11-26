import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A power station's generator is just a coil turning in a magnetic field. Yet steam, falling water or wind must push hard to keep it turning. Why does a spinning coil need a push at all?`,
    reveal: t`Because the current it delivers feels a force from the field that opposes the turning, by Lenz's law. The work done against that force is the electrical energy delivered, and the coil's emf is $e = NBA\omega\sin\omega t$.`,
  },
  explanation: {
    intuition: [
      t`A **generator** turns a coil in a magnetic field, so the flux through the coil keeps changing.`,
      t`The changing flux induces an emf, which reverses every half turn: an **alternating emf**.`,
      t`The emf is largest when the coil's sides cut straight across the field.`,
      t`A **motor** is the same coil and field, but a supply makes it turn.`,
      t`A turning motor coil also generates an emf, the **back emf**, which opposes the supply.`,
      t`In both, the induced current opposes the motion, so energy is conserved.`,
    ],
    formal: [
      {
        title: "Flux through a turning coil",
        points: [
          t`A coil of $N$ turns, each of area $A$, turns at a steady $\omega$ in a uniform field $\vec{B}$.`,
          t`Its **normal**, the line at right angles to its plane, makes an angle $\theta = \omega t$ with $\vec{B}$.`,
          t`The flux through one turn is $\Phi = BA\cos\omega t$.`,
          t`The flux linkage is $N\Phi = NBA\cos\omega t$, greatest when the coil's plane is across $\vec{B}$.`,
        ],
        figure: {
          alt: "A coil seen edge-on, as a line through its axis O, in a field B pointing right (arrows above and below). Step 1: the coil. Step 2: its normal n turns from along B to an angle θ = ωt with B.",
          axes: "none",
          view: { x: [-3.4, 3.6], y: [-2.6, 2.6] },
          elements: [
            { kind: "vector", from: [-3.2, 2.2], to: [3, 2.2], label: "B", labelAt: "e", tone: "muted" },
            { kind: "vector", from: [-3.2, -2.2], to: [3, -2.2], label: "B", labelAt: "e", tone: "muted" },
            { kind: "segment", from: [0.9642, -1.1491], to: [-0.9642, 1.1491], step: 1 },
            { kind: "label", at: [0.9642, -1.1491], label: "coil", labelAt: "w", step: 1 },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", step: 1 },
            { kind: "turn", centre: [0, 0], r: 1.7, from: 0, to: 40, tone: "good", label: "n", labelAt: "ne", step: 2 },
            { kind: "label", at: [1.25, 0.45], label: "θ = ωt", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "The induced emf",
        points: [
          t`The flux linkage $NBA\cos\omega t$ rises and falls as the coil turns.`,
          t`Faraday's law gives $e = -\dfrac{d(N\Phi)}{dt}$ $= NBA\omega\sin\omega t$.`,
          t`Its peak is $e_0 = NBA\omega$, so $e = e_0\sin\omega t$, reversing every half turn.`,
          t`The emf is greatest when the flux is zero: the coil's plane lies along $\vec{B}$.`,
          t`It is zero when the flux is greatest: the plane is across $\vec{B}$ and the sides move along it.`,
        ],
        figure: {
          alt: "Over one turn, ωt from 0° to 360°. Step 1: dashed, the flux linkage NΦ, a cosine: greatest at 0° and 360°, zero at 90° and 270°. Step 2: solid, the emf e, a sine. Step 3: its peak e₀ at 90°. Step 4: a green line at 90°, where the flux is zero and the emf greatest. Step 5: a red mark at 180°, where the flux is greatest (in size) and the emf zero.",
          axes: "xy",
          chart: { x: 90, y: 1, xTitle: "ωt (°)", yTitle: "e, NΦ" },
          view: { x: [0, 360], y: [-1.55, 1.55] },
          elements: [
            { kind: "curve", points: [[0, 1], [3.75, 0.998], [7.5, 0.991], [11.25, 0.981], [15, 0.966], [18.75, 0.947], [22.5, 0.924], [26.25, 0.897], [30, 0.866], [33.75, 0.831], [37.5, 0.793], [41.25, 0.752], [45, 0.707], [48.75, 0.659], [52.5, 0.609], [56.25, 0.556], [60, 0.5], [63.75, 0.442], [67.5, 0.383], [71.25, 0.321], [75, 0.259], [78.75, 0.195], [82.5, 0.131], [86.25, 0.065], [90, 0], [93.75, -0.065], [97.5, -0.131], [101.25, -0.195], [105, -0.259], [108.75, -0.321], [112.5, -0.383], [116.25, -0.442], [120, -0.5], [123.75, -0.556], [127.5, -0.609], [131.25, -0.659], [135, -0.707], [138.75, -0.752], [142.5, -0.793], [146.25, -0.831], [150, -0.866], [153.75, -0.897], [157.5, -0.924], [161.25, -0.947], [165, -0.966], [168.75, -0.981], [172.5, -0.991], [176.25, -0.998], [180, -1], [183.75, -0.998], [187.5, -0.991], [191.25, -0.981], [195, -0.966], [198.75, -0.947], [202.5, -0.924], [206.25, -0.897], [210, -0.866], [213.75, -0.831], [217.5, -0.793], [221.25, -0.752], [225, -0.707], [228.75, -0.659], [232.5, -0.609], [236.25, -0.556], [240, -0.5], [243.75, -0.442], [247.5, -0.383], [251.25, -0.321], [255, -0.259], [258.75, -0.195], [262.5, -0.131], [266.25, -0.065], [270, 0], [273.75, 0.065], [277.5, 0.131], [281.25, 0.195], [285, 0.259], [288.75, 0.321], [292.5, 0.383], [296.25, 0.442], [300, 0.5], [303.75, 0.556], [307.5, 0.609], [311.25, 0.659], [315, 0.707], [318.75, 0.752], [322.5, 0.793], [326.25, 0.831], [330, 0.866], [333.75, 0.897], [337.5, 0.924], [341.25, 0.947], [345, 0.966], [348.75, 0.981], [352.5, 0.991], [356.25, 0.998], [360, 1]], dashed: true, tone: "muted", step: 1 },
            { kind: "curve", points: [[0, 0], [3.75, 0.065], [7.5, 0.131], [11.25, 0.195], [15, 0.259], [18.75, 0.321], [22.5, 0.383], [26.25, 0.442], [30, 0.5], [33.75, 0.556], [37.5, 0.609], [41.25, 0.659], [45, 0.707], [48.75, 0.752], [52.5, 0.793], [56.25, 0.831], [60, 0.866], [63.75, 0.897], [67.5, 0.924], [71.25, 0.947], [75, 0.966], [78.75, 0.981], [82.5, 0.991], [86.25, 0.998], [90, 1], [93.75, 0.998], [97.5, 0.991], [101.25, 0.981], [105, 0.966], [108.75, 0.947], [112.5, 0.924], [116.25, 0.897], [120, 0.866], [123.75, 0.831], [127.5, 0.793], [131.25, 0.752], [135, 0.707], [138.75, 0.659], [142.5, 0.609], [146.25, 0.556], [150, 0.5], [153.75, 0.442], [157.5, 0.383], [161.25, 0.321], [165, 0.259], [168.75, 0.195], [172.5, 0.131], [176.25, 0.065], [180, 0], [183.75, -0.065], [187.5, -0.131], [191.25, -0.195], [195, -0.259], [198.75, -0.321], [202.5, -0.383], [206.25, -0.442], [210, -0.5], [213.75, -0.556], [217.5, -0.609], [221.25, -0.659], [225, -0.707], [228.75, -0.752], [232.5, -0.793], [236.25, -0.831], [240, -0.866], [243.75, -0.897], [247.5, -0.924], [251.25, -0.947], [255, -0.966], [258.75, -0.981], [262.5, -0.991], [266.25, -0.998], [270, -1], [273.75, -0.998], [277.5, -0.991], [281.25, -0.981], [285, -0.966], [288.75, -0.947], [292.5, -0.924], [296.25, -0.897], [300, -0.866], [303.75, -0.831], [307.5, -0.793], [311.25, -0.752], [315, -0.707], [318.75, -0.659], [322.5, -0.609], [326.25, -0.556], [330, -0.5], [333.75, -0.442], [337.5, -0.383], [341.25, -0.321], [345, -0.259], [348.75, -0.195], [352.5, -0.131], [356.25, -0.065], [360, 0]], step: 2 },
            { kind: "label", at: [10, 1], label: "NΦ", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "label", at: [130, 0.77], label: "e", labelAt: "ne", step: 2 },
            { kind: "label", at: [90, 1], label: "e₀", labelAt: "n", step: 3 },
            { kind: "segment", from: [90, 0], to: [90, 1], tone: "good", step: 4 },
            { kind: "segment", from: [180, -1], to: [180, 0], tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Inside a generator",
        points: [
          t`In an **a.c. generator** the coil, called the **armature**, turns between the poles of a magnet.`,
          t`Its ends join two **slip rings**; **brushes** pressing on the rings lead the current out.`,
          t`A side of length $l$ at distance $r$ from the axis moves at $v = \omega r$.`,
          t`Moving across $\vec{B}$ it gives an emf $Blv$; moving along $\vec{B}$, none.`,
          t`Use $\omega = 2\pi f$ with $f$ in rev/s; divide rev/min (rpm) by $60$ first.`,
        ],
      },
      {
        title: "Back emf in a motor",
        points: [
          t`In a **motor**, a supply $V$ drives a current through a coil in a field, and the coil turns.`,
          t`The turning coil is also a generator, so an emf $e$ is induced in it.`,
          t`By Lenz's law this **back emf** opposes the supply that drives the current.`,
          t`The current is $I = \dfrac{V - e}{R}$, where $R$ is the armature's resistance.`,
          t`At the start $e = 0$, so the current is large; it falls as the motor speeds up.`,
        ],
      },
      {
        title: "Energy transfer",
        points: [
          t`In a generator, the induced current in the coil feels a force from the field.`,
          t`By Lenz's law this force opposes the turning, at any speed, steady or not.`,
          t`So work must be done to keep the coil turning; this work becomes electrical energy.`,
          t`With the terminals open, no current flows and nothing opposes the turning.`,
          t`The magnet gives up no energy: the work done by whatever turns the coil supplies it.`,
        ],
      },
    ],
    worked: {
      prompt: t`A generator coil of $50$ turns, each of area $0.1\ \mathrm{m^2}$, turns at $600$ rpm in a field of $0.4\ \mathrm{T}$. Its normal is along the field at $t = 0$. Find the peak emf and the emf at $t = \dfrac{1}{120}\ \mathrm{s}$.`,
      steps: [
        t`$f = \dfrac{600}{60}$ $= 10\ \mathrm{rev/s}$, so $\omega = 20\pi$ $= 62.8\ \mathrm{rad/s}$.`,
        t`$e_0 = NBA\omega$ $= 50 \times 0.4 \times 0.1 \times 62.8$ $= 125.7\ \mathrm{V}$.`,
        t`At $t = \dfrac{1}{120}\ \mathrm{s}$, $\omega t = \dfrac{20\pi}{120}$ $= \dfrac{\pi}{6}$.`,
        t`$e = e_0\sin\dfrac{\pi}{6}$ $= 125.7 \times 0.5$ $= 62.8\ \mathrm{V}$.`,
      ],
      answer: t`$e_0 = 125.7\ \mathrm{V}$; $e = 62.8\ \mathrm{V}$ at $t = \dfrac{1}{120}\ \mathrm{s}$`,
    },
    visualSpec: t`Turn a coil in a field with a slider and watch the flux and emf curves trace out, the emf peaking as the flux passes zero.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Takes the emf to follow the flux: largest when the flux is largest, zero when it is zero.",
      remediation: t`The emf is the rate of change of flux: $e = e_0\sin\omega t$ is greatest when the flux $NBA\cos\omega t$ passes through zero.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M2",
      mistake: t`Leaves out the number of turns $N$.`,
      remediation: t`Each turn adds its own emf: $e_0 = NBA\omega$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Uses the revolutions per second $f$ for $\omega$.`,
      remediation: t`$\omega$ is in rad/s: $\omega = 2\pi f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Uses revolutions per minute as revolutions per second.",
      remediation: t`Divide rpm by $60$ to get rev/s, then $\omega = 2\pi f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Adds the back emf to the supply voltage.",
      remediation: t`The back emf opposes the supply: the net emf driving the current is $V - e$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M6",
      mistake: "Ignores the back emf of a running motor.",
      remediation: t`A turning motor coil generates a back emf; the current is $\dfrac{V - e}{R}$, much less than $\dfrac{V}{R}$ at full speed.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M7",
      mistake: "Takes the back emf as what drives the current.",
      remediation: t`The supply drives the current; the back emf works against it, so $I = \dfrac{V - e}{R}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M8",
      mistake: "Leaves the area in square centimetres.",
      remediation: t`Work in SI units: $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks the magnet supplies the electrical energy, so turning needs no extra work.",
      remediation: "The magnet gives up no energy. The current's force opposes the turning, and the work done against it becomes electrical energy.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks a coil turning steadily gives a steady emf.",
      remediation: t`The flux changes at different rates round a turn, so the emf varies as $e_0\sin\omega t$; $e_0$ is only its peak.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks the induced current helps the coil round.",
      remediation: "By Lenz's law the induced current opposes the change that causes it, so its force opposes the turning.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks the opposing force acts only while the coil speeds up.",
      remediation: "The force acts whenever a current flows in the coil, at a steady speed too; a steady speed needs a steady push.",
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.3" },
      stem: t`The armature of a simple generator is a wire DABC (see the figure). The arms DA and CB, each $5\ \mathrm{cm}$ long, run out from the axis, and AB, $12\ \mathrm{cm}$ long, is parallel to it. The armature turns at $3000$ rpm in a uniform field of $0.4\ \mathrm{T}$. At the instant shown, the plane DABC lies along the field. What emf is induced between the terminals at this instant?`,
      figure: {
        alt: "Side view of the armature: the axis runs left to right, dashed, through D and C. Arms DA and CB, 5 cm long, rise from the axis, and AB, 12 cm long, runs parallel to it. Arrows on both sides show the field B pointing up the page, in the plane DABC. A dot in a circle above AB marks its velocity v, out of the page.",
        axes: "none",
        view: { x: [-2.6, 7.6], y: [-1.3, 3.1] },
        elements: [
          { kind: "segment", from: [-2.2, 0], to: [7.2, 0], dashed: true, tone: "muted", label: "axis", labelAt: "s" },
          { kind: "vector", from: [-1.4, -0.9], to: [-1.4, 2.7], label: "B", labelAt: "e", tone: "muted" },
          { kind: "vector", from: [6.4, -0.9], to: [6.4, 2.7], label: "B", labelAt: "e", tone: "muted" },
          { kind: "segment", from: [1, 0], to: [1, 1.6], label: "5 cm", labelAt: "w" },
          { kind: "segment", from: [1, 1.6], to: [5, 1.6], label: "12 cm", labelAt: "s" },
          { kind: "segment", from: [5, 1.6], to: [5, 0] },
          { kind: "label", at: [1, 0], label: "D", labelAt: "sw" },
          { kind: "label", at: [1, 1.6], label: "A", labelAt: "nw" },
          { kind: "label", at: [5, 1.6], label: "B", labelAt: "ne" },
          { kind: "label", at: [5, 0], label: "C", labelAt: "se" },
          { kind: "circle", centre: [3, 2.3], r: 0.22 },
          { kind: "point", at: [3, 2.3] },
          { kind: "label", at: [3.3, 2.3], label: "v", labelAt: "e" },
        ],
      },
      verify: { kind: "value", inputs: { B: "2/5", l_cm: "12", r_cm: "5", rpm: "3000" }, params: { ask: "arm" } },
      options: [
        { key: "A", text: t`$45.2\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M4", value: "45.2000000000000" },
        { key: "B", text: t`$0.12\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M3", value: "0.120000000000000" },
        { key: "C", text: t`$0\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M1", value: "0" },
        { key: "D", text: t`$0.754\ \mathrm{V}$`, correct: true, value: "0.754000000000000" },
      ],
      solution: {
        steps: [
          t`$f = \dfrac{3000}{60}$ $= 50\ \mathrm{rev/s}$, and AB moves at $v = 2\pi fr$ $= 2\pi \times 50 \times 0.05$ $= 15.7\ \mathrm{m/s}$.`,
          t`AB moves at right angles to $\vec{B}$: the flux is zero but changing fastest, so the emf is greatest.`,
          t`$e = Blv$ $= 0.4 \times 0.12 \times 15.7$ $= 0.754\ \mathrm{V}$; the arms DA and CB add nothing.`,
        ],
        figure: {
          alt: "Side view of the armature: the axis runs left to right, dashed, through D and C. Arms DA and CB, 5 cm long, rise from the axis, and AB, 12 cm long, runs parallel to it. Arrows on both sides show the field B pointing up the page, in the plane DABC. A dot in a circle above AB marks its velocity v, out of the page.",
          axes: "none",
          view: { x: [-2.6, 7.6], y: [-1.3, 3.1] },
          elements: [
            { kind: "segment", from: [-2.2, 0], to: [7.2, 0], dashed: true, tone: "muted", label: "axis", labelAt: "s" },
            { kind: "vector", from: [-1.4, -0.9], to: [-1.4, 2.7], label: "B", labelAt: "e", tone: "muted" },
            { kind: "vector", from: [6.4, -0.9], to: [6.4, 2.7], label: "B", labelAt: "e", tone: "muted" },
            { kind: "segment", from: [1, 0], to: [1, 1.6], label: "5 cm", labelAt: "w" },
            { kind: "segment", from: [1, 1.6], to: [5, 1.6], label: "12 cm", labelAt: "s" },
            { kind: "segment", from: [5, 1.6], to: [5, 0] },
            { kind: "label", at: [1, 0], label: "D", labelAt: "sw" },
            { kind: "label", at: [1, 1.6], label: "A", labelAt: "nw" },
            { kind: "label", at: [5, 1.6], label: "B", labelAt: "ne" },
            { kind: "label", at: [5, 0], label: "C", labelAt: "se" },
            { kind: "circle", centre: [3, 2.3], r: 0.22, step: 1 },
            { kind: "point", at: [3, 2.3], step: 1 },
            { kind: "label", at: [3.3, 2.3], label: "v", labelAt: "e", step: 1 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`A generator coil has $100$ turns, each of area $200\ \mathrm{cm^2}$. It turns at $50$ revolutions per second in a uniform field of $0.5\ \mathrm{T}$, about an axis at right angles to the field. What is the peak emf?`,
      verify: { kind: "value", inputs: { N: "100", B: "1/2", A_cm2: "200", f: "50" }, params: { ask: "peak" } },
      options: [
        { key: "A", text: t`$314\ \mathrm{V}$`, correct: true, value: "314" },
        { key: "B", text: t`$3.14\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M2", value: "3.14000000000000" },
        { key: "C", text: t`$50\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M3", value: "50" },
        { key: "D", text: t`$3.14 \times 10^{6}\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M8", value: "3140000" },
      ],
      solution: {
        steps: [
          t`$A = 200\ \mathrm{cm^2}$ $= 0.02\ \mathrm{m^2}$ and $\omega = 2\pi \times 50$ $= 100\pi\ \mathrm{rad/s}$.`,
          t`$e_0 = NBA\omega$ $= 100 \times 0.5 \times 0.02 \times 100\pi$ $= 314\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`A coil of $50$ turns, each of area $0.04\ \mathrm{m^2}$, turns at $100\ \mathrm{rad/s}$ in a uniform field of $0.2\ \mathrm{T}$, about an axis at right angles to the field. What is the emf at the instant the normal to the coil makes an angle of $30^\circ$ with the field?`,
      verify: { kind: "value", inputs: { N: "50", B: "1/5", A: "1/25", w: "100", th: "30" }, params: { ask: "inst" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{V}$`, correct: true, value: "20" },
        { key: "B", text: t`$34.6\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M1", value: "34.6000000000000" },
        { key: "C", text: t`$0.4\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M2", value: "0.400000000000000" },
        { key: "D", text: t`$40\ \mathrm{V}$`, correct: false, misconceptionId: "C06-M10", value: "40" },
      ],
      solution: {
        steps: [
          t`$e_0 = NBA\omega$ $= 50 \times 0.2 \times 0.04 \times 100$ $= 40\ \mathrm{V}$.`,
          t`With $\theta$ the angle between the normal and $\vec{B}$, $e = e_0\sin\theta$.`,
          t`$e = 40 \times \sin 30^\circ$ $= 20\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`A motor runs on a $220\ \mathrm{V}$ supply. Its armature has a resistance of $2\ \Omega$, and at full speed the back emf is $200\ \mathrm{V}$. What current does it draw at full speed?`,
      verify: { kind: "value", inputs: { V: "220", e: "200", R: "2" }, params: { ask: "motor" } },
      options: [
        { key: "A", text: t`$100\ \mathrm{A}$`, correct: false, misconceptionId: "C06-M7", value: "100" },
        { key: "B", text: t`$10\ \mathrm{A}$`, correct: true, value: "10" },
        { key: "C", text: t`$210\ \mathrm{A}$`, correct: false, misconceptionId: "C06-M5", value: "210" },
        { key: "D", text: t`$110\ \mathrm{A}$`, correct: false, misconceptionId: "C06-M6", value: "110" },
      ],
      solution: {
        steps: [
          t`The back emf opposes the supply: the net emf is $V - e = 220 - 200$ $= 20\ \mathrm{V}$.`,
          t`$I = \dfrac{V - e}{R}$ $= \dfrac{20}{2}$ $= 10\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`A small generator is turned by hand at a steady speed, first with its terminals open, then with them joined through a lamp. What does the person turning it notice?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "feel" } },
      options: [
        { key: "A", text: t`Harder with the lamp joined: the coil's current is pushed against the turning`, correct: true, value: "harder_opposes" },
        { key: "B", text: t`No difference: the magnet supplies the lamp's energy`, correct: false, misconceptionId: "C06-M9", value: "same_magnet" },
        { key: "C", text: t`Easier with the lamp joined: the current pushes the coil round`, correct: false, misconceptionId: "C06-M11", value: "easier" },
        { key: "D", text: t`Harder only while speeding up; at a steady speed nothing opposes it`, correct: false, misconceptionId: "C06-M12", value: "steady_free" },
      ],
      solution: {
        steps: [
          t`With the terminals open no current flows, so the field pushes on nothing in the coil.`,
          t`With the lamp joined, the induced current feels a force that, by Lenz's law, opposes the turning at any speed.`,
          t`The work done against this force is the energy the lamp receives, so turning is harder.`,
        ],
      },
    },
  ],
};
