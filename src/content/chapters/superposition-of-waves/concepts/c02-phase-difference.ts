import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Two buoys ride a sea swell, half a wavelength apart. When one is on a crest, where is the other?`,
    reveal: t`In a trough. Half a wavelength is half a cycle, a phase difference of $\pi$: the two buoys always move opposite ways, at equal speeds.`,
  },
  explanation: {
    intuition: [
      t`The **phase** of a particle tells where it is in its cycle: at a crest, at the mean, on its way down.`,
      t`Along a progressive wave, each particle runs a little behind the one before it.`,
      t`One wavelength further along, a particle is one whole cycle behind: a phase difference of $2\pi$.`,
      t`At one point, one period later the particle is back where it was: again a phase of $2\pi$.`,
      t`So a **phase difference** is the fraction of a cycle, times $2\pi$ rad.`,
    ],
    formal: [
      {
        title: "Between two points",
        points: [
          t`In $y = A\sin\left(\omega t - kx\right)$ the phase is the angle $\omega t - kx$.`,
          t`At one instant, points $\Delta x$ apart differ in phase by $k\Delta x$.`,
          t`With $k = \dfrac{2\pi}{\lambda}$: $\Delta\phi = \dfrac{2\pi}{\lambda}\Delta x$.`,
          t`The **path difference** $\Delta x$ of one wavelength gives a phase difference of $2\pi$ rad, or $360^\circ$.`,
          t`For two sources in phase, use the difference of the two distances, $\Delta x = d_1 - d_2$.`,
        ],
      },
      {
        title: "Between two instants",
        points: [
          t`At one point $x$, the phase $\omega t - kx$ grows by $\omega\Delta t$ in a time $\Delta t$.`,
          t`With $\omega = \dfrac{2\pi}{T}$: $\Delta\phi = \dfrac{2\pi}{T}\Delta t$ $= 2\pi n\Delta t$.`,
          t`A time of one period $T$ gives a phase difference of $2\pi$ rad.`,
          t`Put $\Delta t$ in seconds, so that $n\Delta t$ is a pure number.`,
        ],
      },
      {
        title: "In phase and antiphase",
        points: [
          t`Points $\Delta x = p\lambda$ apart, $p = 1, 2, 3, \ldots$, differ by $2p\pi$: they are **in phase**.`,
          t`Particles in phase have the same displacement and the same velocity at every instant.`,
          t`Points $\Delta x = \dfrac{(2p - 1)\lambda}{2}$ apart differ by $(2p - 1)\pi$: they are in **antiphase**.`,
          t`Particles in antiphase have equal and opposite displacements and velocities.`,
          t`Both pairs always have the same speed; the nearest such pair is $\dfrac{\lambda}{2}$ apart.`,
          t`Points $\dfrac{\lambda}{4}$ apart differ by $\dfrac{\pi}{2}$: one is at rest at an extreme while the other is fastest.`,
        ],
        figure: {
          alt: "A wave of wavelength λ at one instant. Step 1: two crests a whole wavelength apart, marked λ, in phase. Step 3: a crest and the trough half a wavelength after it, marked λ/2, in antiphase.",
          axes: "xy",
          chart: { x: 1, y: 1, xTitle: "x", yTitle: "y" },
          view: { x: [0, 9], y: [-1.8, 1.8] },
          elements: [
            { kind: "segment", from: [0, 0], to: [9, 0], dashed: true, tone: "muted" },
            { kind: "curve", points: [[0, 0], [0.094, 0.147], [0.188, 0.29], [0.281, 0.428], [0.375, 0.556], [0.469, 0.672], [0.562, 0.773], [0.656, 0.858], [0.75, 0.924], [0.844, 0.97], [0.938, 0.995], [1.031, 0.999], [1.125, 0.981], [1.219, 0.942], [1.312, 0.882], [1.406, 0.803], [1.5, 0.707], [1.594, 0.596], [1.688, 0.471], [1.781, 0.337], [1.875, 0.195], [1.969, 0.049], [2.062, -0.098], [2.156, -0.243], [2.25, -0.383], [2.344, -0.514], [2.438, -0.634], [2.531, -0.741], [2.625, -0.831], [2.719, -0.904], [2.812, -0.957], [2.906, -0.989], [3, -1], [3.094, -0.989], [3.188, -0.957], [3.281, -0.904], [3.375, -0.831], [3.469, -0.741], [3.562, -0.634], [3.656, -0.514], [3.75, -0.383], [3.844, -0.243], [3.938, -0.098], [4.031, 0.049], [4.125, 0.195], [4.219, 0.337], [4.312, 0.471], [4.406, 0.596], [4.5, 0.707], [4.594, 0.803], [4.688, 0.882], [4.781, 0.942], [4.875, 0.981], [4.969, 0.999], [5.062, 0.995], [5.156, 0.97], [5.25, 0.924], [5.344, 0.858], [5.438, 0.773], [5.531, 0.672], [5.625, 0.556], [5.719, 0.428], [5.812, 0.29], [5.906, 0.147], [6, 0], [6.094, -0.147], [6.188, -0.29], [6.281, -0.428], [6.375, -0.556], [6.469, -0.672], [6.562, -0.773], [6.656, -0.858], [6.75, -0.924], [6.844, -0.97], [6.938, -0.995], [7.031, -0.999], [7.125, -0.981], [7.219, -0.942], [7.312, -0.882], [7.406, -0.803], [7.5, -0.707], [7.594, -0.596], [7.688, -0.471], [7.781, -0.337], [7.875, -0.195], [7.969, -0.049], [8.062, 0.098], [8.156, 0.243], [8.25, 0.383], [8.344, 0.514], [8.438, 0.634], [8.531, 0.741], [8.625, 0.831], [8.719, 0.904], [8.812, 0.957], [8.906, 0.989], [9, 1]] },
            { kind: "point", at: [1, 1], step: 1 },
            { kind: "point", at: [5, 1], step: 1 },
            { kind: "segment", from: [1, 1.3], to: [5, 1.3], label: "λ: in phase", labelAt: "n", tone: "good", step: 1 },
            { kind: "point", at: [7, -1], step: 3 },
            { kind: "segment", from: [5, -1.3], to: [7, -1.3], label: "λ/2: antiphase", labelAt: "s", tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "From phase back to path",
        points: [
          t`Turn the formula round: $\Delta x = \dfrac{\lambda}{2\pi}\Delta\phi$, with $\Delta\phi$ in radians.`,
          t`With the phase in degrees: $\Delta x = \dfrac{\Delta\phi}{360^\circ}\lambda$.`,
          t`So $90^\circ$ is a quarter wavelength and $180^\circ$ is half a wavelength.`,
          t`Find $\lambda = \dfrac{v}{n}$ first when the question gives $n$ and $v$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A wave of frequency $400\ \mathrm{Hz}$ travels at $360\ \mathrm{m/s}$. Find (a) the phase difference between two points $0.15\ \mathrm{m}$ apart, (b) the phase difference at one point between instants $0.5\ \mathrm{ms}$ apart, (c) the distance from a particle to the nearest particle in antiphase with it.`,
      steps: [
        t`$\lambda = \dfrac{v}{n} = \dfrac{360}{400}$ $= 0.9\ \mathrm{m}$.`,
        t`(a) $\Delta\phi = \dfrac{2\pi}{\lambda}\Delta x$ $= \dfrac{2\pi \times 0.15}{0.9}$ $= \dfrac{\pi}{3}\ \mathrm{rad}$.`,
        t`(b) $\Delta\phi = 2\pi n\Delta t$ $= 2\pi \times 400 \times 0.5 \times 10^{-3}$ $= 0.4\pi\ \mathrm{rad}$.`,
        t`(c) Antiphase needs $\Delta\phi = \pi$, so $\Delta x = \dfrac{\lambda}{2} = 0.45\ \mathrm{m}$.`,
      ],
      answer: t`(a) $\dfrac{\pi}{3}\ \mathrm{rad}$, (b) $0.4\pi\ \mathrm{rad}$, (c) $0.45\ \mathrm{m}$`,
    },
    visualSpec: t`Drag two markers along a moving wave and read their phase difference, with the pair lighting up when it is in phase or in antiphase.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Takes the fraction of a cycle, $\dfrac{\Delta x}{\lambda}$ or $\dfrac{\Delta t}{T}$, as the phase difference in radians.`,
      remediation: t`A whole cycle is $2\pi$ rad, so multiply the fraction by $2\pi$: $\Delta\phi = \dfrac{2\pi}{\lambda}\Delta x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Inverts the ratio, writing $\dfrac{2\pi\lambda}{\Delta x}$ or $\dfrac{2\pi T}{\Delta t}$.`,
      remediation: t`A larger separation gives a larger phase difference: $\Delta\phi = 2\pi\dfrac{\Delta x}{\lambda}$, and $2\pi\dfrac{\Delta t}{T}$ in time.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Puts a phase difference in degrees into the radian formula.",
      remediation: t`$\Delta x = \dfrac{\lambda}{2\pi}\Delta\phi$ needs $\Delta\phi$ in radians; with degrees use $\Delta x = \dfrac{\Delta\phi}{360^\circ}\lambda$.`,
      fallback: { kind: "ext", topic: "radian measure (Std XI Maths)" },
    },
    {
      id: "C02-M4",
      mistake: t`Takes $\lambda = \dfrac{n}{v}$.`,
      remediation: t`From $v = n\lambda$, $\lambda = \dfrac{v}{n}$: metres per second over cycles per second gives metres.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Uses the distance from one source instead of the path difference.",
      remediation: t`With the sources in phase, only the difference of the two paths shifts one wave against the other: use $\Delta x = d_1 - d_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Leaves a time in ms or a distance in cm unconverted.",
      remediation: t`Put times in s and distances in m before using $2\pi n\Delta t$ or $k\Delta x$ in SI units.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks two particles have equal speeds at every instant only when they are in phase.",
      remediation: t`Particles in antiphase move opposite ways at equal speeds; the nearest are $\dfrac{\lambda}{2}$ apart, closer than $\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks particles a quarter wavelength apart move oppositely at equal speeds.",
      remediation: t`$\dfrac{\lambda}{4}$ is a phase difference of $\dfrac{\pi}{2}$: when one is at an extreme, at rest, the other is at the mean, moving fastest.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.10" },
      stem: t`A wave of frequency $500\ \mathrm{Hz}$ travels with a speed of $350\ \mathrm{m/s}$. What is the phase difference between the displacements at one point at two instants $1.0\ \mathrm{ms}$ apart?`,
      verify: { kind: "value", inputs: { n: "500", dt_ms: "1" }, params: { ask: "dt" } },
      options: [
        { key: "A", text: t`$\pi\ \mathrm{rad}$`, correct: true, value: "pi" },
        { key: "B", text: t`$0.5\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M1", value: "0.500000000000000" },
        { key: "C", text: t`$4\pi\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M2", value: "4*pi" },
        { key: "D", text: t`$1000\pi\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M6", value: "1000*pi" },
      ],
      solution: {
        steps: [
          t`At one point only time matters: $T = \dfrac{1}{n} = \dfrac{1}{500}\ \mathrm{s}$ $= 2.0\ \mathrm{ms}$.`,
          t`$\Delta\phi = \dfrac{2\pi}{T}\Delta t$ $= 2\pi \times \dfrac{1.0}{2.0}$ $= \pi\ \mathrm{rad}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.10" },
      stem: t`A wave of frequency $500\ \mathrm{Hz}$ travels with a speed of $350\ \mathrm{m/s}$. What is the smallest distance between two points that are $45^\circ$ out of phase at an instant?`,
      verify: { kind: "value", inputs: { n: "500", v: "350", deg: "45" }, params: { ask: "deg" } },
      options: [
        { key: "A", text: t`$501\ \mathrm{cm}$`, correct: false, misconceptionId: "C02-M3", value: "501" },
        { key: "B", text: t`$55\ \mathrm{cm}$`, correct: false, misconceptionId: "C02-M1", value: "55" },
        { key: "C", text: t`$17.9\ \mathrm{cm}$`, correct: false, misconceptionId: "C02-M4", value: "17.9000000000000" },
        { key: "D", text: t`$8.75\ \mathrm{cm}$`, correct: true, value: "8.75000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{v}{n} = \dfrac{350}{500}$ $= 0.7\ \mathrm{m}$.`,
          t`$\Delta x = \dfrac{45^\circ}{360^\circ}\lambda$ $= \dfrac{0.7}{8}$ $= 0.0875\ \mathrm{m}$.`,
          t`$0.0875\ \mathrm{m} = 8.75\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.13" },
      stem: t`Two sources in phase each send out sound of frequency $540\ \mathrm{Hz}$, travelling at $330\ \mathrm{m/s}$. What is the phase difference between the two waves at a point $3.5\ \mathrm{m}$ from one source and $3\ \mathrm{m}$ from the other?`,
      verify: { kind: "value", inputs: { n: "540", v: "330", d1: "7/2", d2: "3" }, params: { ask: "path" } },
      options: [
        { key: "A", text: t`$11.5\pi\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M5", value: "11.5*pi" },
        { key: "B", text: t`$1.64\pi\ \mathrm{rad}$`, correct: true, value: "1.64*pi" },
        { key: "C", text: t`$0.818\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M1", value: "0.818000000000000" },
        { key: "D", text: t`$0.611\pi\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M4", value: "0.611*pi" },
      ],
      solution: {
        steps: [
          t`The sources are in phase, so the path difference sets the phase: $\Delta x = 3.5 - 3 = 0.5\ \mathrm{m}$.`,
          t`$\lambda = \dfrac{v}{n} = \dfrac{330}{540}\ \mathrm{m}$.`,
          t`$\Delta\phi = \dfrac{2\pi}{\lambda}\Delta x$ $= 2\pi \times 0.5 \times \dfrac{540}{330}$ $= \dfrac{18\pi}{11} \approx 1.64\pi\ \mathrm{rad}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.1(v)" },
      stem: t`A sine wave of frequency $250\ \mathrm{Hz}$ travels through a medium at $200\ \mathrm{m/s}$. What is the minimum distance between two particles of the medium that always have the same speed?`,
      verify: { kind: "value", inputs: { n: "250", v: "200" }, params: { ask: "same" } },
      options: [
        { key: "A", text: t`$0.625\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M4", value: "0.625000000000000" },
        { key: "B", text: t`$0.4\ \mathrm{m}$`, correct: true, value: "0.400000000000000" },
        { key: "C", text: t`$0.8\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M7", value: "0.800000000000000" },
        { key: "D", text: t`$0.2\ \mathrm{m}$`, correct: false, misconceptionId: "C02-M8", value: "0.200000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{v}{n} = \dfrac{200}{250}$ $= 0.8\ \mathrm{m}$.`,
          t`Equal speeds at every instant need the particles in phase or in antiphase.`,
          t`The nearest such pair is in antiphase, $\dfrac{\lambda}{2} = 0.4\ \mathrm{m}$ apart.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`A wave is $y = 0.05\sin\left(100\pi t - 2.5\pi x\right)$ in SI units. What is the phase difference between two points on its path $30\ \mathrm{cm}$ apart?`,
      verify: { kind: "value", inputs: { k: "5*pi/2", dx_cm: "30" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$5.33\pi\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M2", value: "5.33*pi" },
        { key: "B", text: t`$0.75\pi\ \mathrm{rad}$`, correct: true, value: "0.75*pi" },
        { key: "C", text: t`$75\pi\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M6", value: "75*pi" },
        { key: "D", text: t`$0.375\ \mathrm{rad}$`, correct: false, misconceptionId: "C02-M1", value: "0.375000000000000" },
      ],
      solution: {
        steps: [
          t`Compare with $y = A\sin\left(\omega t - kx\right)$: $k = 2.5\pi\ \mathrm{rad/m}$.`,
          t`$\Delta x = 30\ \mathrm{cm} = 0.30\ \mathrm{m}$.`,
          t`$\Delta\phi = k\Delta x = 2.5\pi \times 0.30$ $= 0.75\pi\ \mathrm{rad}$.`,
        ],
      },
    },
  ],
};
