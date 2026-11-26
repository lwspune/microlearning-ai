import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Flick a switch and the lamp lights at once. Yet the electrons in the wire crawl along at less than a millimetre per second. How can both be true?`,
    reveal: t`The switch sets up an electric field all along the wire almost instantly, so **free electrons everywhere** start drifting at the same moment. No electron has to travel from the switch to the lamp.`,
  },
  explanation: {
    intuition: [
      t`In a metal, some electrons are only loosely held: these **free electrons** wander through the whole metal.`,
      t`**Electric current** is the rate at which charge flows past a point: $I = \dfrac{q}{t}$.`,
      t`Its unit is the **ampere**: $1\ \mathrm{A} = 1\ \mathrm{C/s}$.`,
      t`With no voltage, free electrons dart about at random, so no net charge flows.`,
      t`A voltage makes them **drift** slowly one way; their average speed is the **drift speed** $v_d$.`,
      t`The drift speed is tiny, about a millimetre per second or less.`,
    ],
    formal: [
      {
        title: "Current and its direction",
        points: [
          t`Current $I = \dfrac{q}{t}$, where $q$ is the charge crossing a section in time $t$.`,
          t`Charge comes in electrons: $N$ electrons carry $q = Ne$, with $e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$.`,
          t`**Conventional current** flows the way positive charge would move: from $+$ to $-$ outside the cell.`,
          t`Electrons drift the other way, so the current is opposite to the electrons' motion.`,
        ],
      },
      {
        title: "Drift speed",
        points: [
          t`Free electrons move at random at about $10^5\ \mathrm{m/s}$, but equally in every direction.`,
          t`A voltage across the wire sets up an **electric field** $E$ inside it.`,
          t`The field pushes each electron opposite to $E$, but collisions with the metal's ions keep stopping it.`,
          t`So it gains only a small average velocity along the wire: the **drift velocity** $v_d$.`,
          t`The field itself spreads along the wire almost at the speed of light, so all electrons start drifting together.`,
        ],
      },
      {
        title: "Current in a wire",
        points: [
          t`Take a length $L$ of wire of cross-section $A$; its volume is $AL$.`,
          t`With $n$ free electrons per unit volume, it holds $nAL$ electrons, of charge $q = nALe$.`,
          t`They drift at $v_d$, so all of them cross the end face in $t = \dfrac{L}{v_d}$.`,
          t`So $I = \dfrac{q}{t}$ $= \dfrac{nALe}{L/v_d}$ $= nAev_d$.`,
        ],
        figure: {
          alt: "A length L of wire with cross-section A. Step 1: the wire's end face A and its length L. Step 2: the free electrons inside it, n in every unit volume. Step 3: they drift to the left at speed vd. Step 4: the conventional current I flows to the right, opposite to the electrons.",
          axes: "none",
          view: { x: [-2.8, 10], y: [-2.5, 2.5] },
          elements: [
            { kind: "segment", from: [0, 1], to: [8, 1], step: 1 },
            { kind: "segment", from: [0, -1], to: [8, -1], step: 1 },
            { kind: "ellipse", centre: [0, 0], rx: 0.35, ry: 1, step: 1 },
            { kind: "ellipse", centre: [8, 0], rx: 0.35, ry: 1, dashed: true, step: 1 },
            { kind: "label", at: [-0.65, 0], label: "area A", labelAt: "w", step: 1 },
            { kind: "segment", from: [0, -1.55], to: [8, -1.55], tone: "muted", step: 1 },
            { kind: "label", at: [4, -1.6], label: "L", labelAt: "s", step: 1 },
            { kind: "point", at: [1, 0.55], tone: "muted", step: 2 },
            { kind: "point", at: [1.9, -0.35], tone: "muted", step: 2 },
            { kind: "point", at: [2.9, 0.6], tone: "muted", step: 2 },
            { kind: "point", at: [4.4, 0.55], tone: "muted", step: 2 },
            { kind: "point", at: [6.6, 0.5], tone: "muted", step: 2 },
            { kind: "point", at: [7.2, -0.4], tone: "muted", step: 2 },
            { kind: "point", at: [1.3, -0.65], tone: "muted", step: 2 },
            { kind: "point", at: [6, -0.75], tone: "muted", step: 2 },
            { kind: "vector", from: [5.4, -0.15], to: [3.4, -0.15], tone: "bad", step: 3 },
            { kind: "label", at: [4.4, -0.2], label: "vd", labelAt: "s", tone: "bad", step: 3 },
            { kind: "vector", from: [3.2, 1.6], to: [5.6, 1.6], tone: "good", step: 4 },
            { kind: "label", at: [5.7, 1.6], label: "current I", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Current density",
        points: [
          t`**Current density** $J$ is the current per unit area of cross-section: $J = \dfrac{I}{A}$, in $\mathrm{A/m^2}$.`,
          t`From $I = nAev_d$, $J = nev_d$: current density is proportional to the drift speed.`,
          t`In a steady current no charge piles up anywhere, so $I$ is the same at every cross-section.`,
          t`Where a conductor narrows, $A$ is smaller, so $J$ and $v_d$ are larger.`,
        ],
      },
    ],
    worked: {
      prompt: t`A metal wire of cross-section $1\ \mathrm{mm^2}$ carries $2\ \mathrm{A}$. It has $10^{29}$ free electrons per $\mathrm{m^3}$. Find the drift speed, and the time an electron takes to drift $1\ \mathrm{m}$. (Take $e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      steps: [
        t`$1\ \mathrm{mm}$ $= 10^{-3}\ \mathrm{m}$, so $A = 1\ \mathrm{mm^2}$ $= (10^{-3})^2$ $= 10^{-6}\ \mathrm{m^2}$.`,
        t`$nAe = 10^{29} \times 10^{-6}$ $\times 1.6 \times 10^{-19}$ $= 1.6 \times 10^{4}$.`,
        t`$v_d = \dfrac{I}{nAe}$ $= \dfrac{2}{1.6 \times 10^4}$ $= 1.25 \times 10^{-4}\ \mathrm{m/s}$.`,
        t`Time for $1\ \mathrm{m}$: $t = \dfrac{1}{1.25 \times 10^{-4}}$ $= 8000\ \mathrm{s}$, more than two hours.`,
      ],
      answer: t`$v_d$ $= 1.25 \times 10^{-4}\ \mathrm{m/s}$; $8000\ \mathrm{s}$`,
    },
    visualSpec: t`Raise the voltage across a wire that narrows in the middle and watch the electrons drift, faster where the wire is thin.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Mixes up the radius and the diameter.",
      remediation: t`The area is $\pi r^2$ with $r$ the radius, half the diameter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Converts a squared or cubed unit with the plain factor ($1\ \mathrm{mm^2}$ $= 10^{-3}\ \mathrm{m^2}$).`,
      remediation: t`Square or cube the factor too: $1\ \mathrm{mm^2}$ $= 10^{-6}\ \mathrm{m^2}$, $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$, $1\ \mathrm{cm^3}$ $= 10^{-6}\ \mathrm{m^3}$.`,
      fallback: { kind: "ext", topic: "converting units of area and volume" },
    },
    {
      id: "C01-M3",
      mistake: "Forgets to square the radius.",
      remediation: t`The cross-section of a wire is a circle of area $\pi r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Works in centimetres and gives the answer in $\mathrm{cm/s}$ as if it were $\mathrm{m/s}$.`,
      remediation: t`Working in $\mathrm{cm}$ gives $v_d$ in $\mathrm{cm/s}$; divide by $100$ for $\mathrm{m/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Converts $J$ to $\mathrm{A/m^2}$ but leaves $n$ per $\mathrm{cm^3}$.`,
      remediation: t`Put every quantity in SI before dividing: $n$ per $\mathrm{cm^3}$ times $10^6$ is $n$ per $\mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Leaves the time in hours.",
      remediation: t`In $q = It$ the time must be in seconds: $1\ \mathrm{h} = 3600\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Takes the current itself as the charge that flows.",
      remediation: t`Current is a rate, charge per second; the charge in time $t$ is $q = It$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: t`Divides by the time instead of multiplying ($q = I/t$).`,
      remediation: t`$I = \dfrac{q}{t}$ gives $q = It$: a longer time lets more charge through.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks the drift speed is fixed by the metal, so it is the same everywhere.",
      remediation: t`$v_d = \dfrac{I}{nAe}$: with $I$ fixed, the electrons drift faster where $A$ is smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks the current density stays the same along the conductor.",
      remediation: t`$J = \dfrac{I}{A}$: the same current through a smaller area gives a larger $J$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks the current, current density and drift speed are all the same everywhere.",
      remediation: t`Only $I$ is fixed, since no charge piles up; $J$ and $v_d$ both vary as $\dfrac{1}{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks electrons travel from the switch to the lamp at nearly the speed of light.",
      remediation: t`Electrons drift at under $1\ \mathrm{mm/s}$; it is the field that spreads almost at the speed of light.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Confuses the drift speed with the electrons' random thermal speed.",
      remediation: t`The random motion, about $10^5\ \mathrm{m/s}$, carries no net charge; the drift is far slower.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks the electrons in a wire do not move at all.",
      remediation: "Current is a flow of charge: free electrons do drift along the wire, only slowly.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Solved Ex.11.1" },
      stem: t`A copper wire of diameter $1.6\ \mathrm{mm}$ carries a current of $3\ \mathrm{A}$. It has $8.5 \times 10^{28}$ free electrons per cubic metre. What is the drift speed of the electrons? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { I: "3", d: "1.6", n: "8.5e28", e: "1.6e-19" }, params: { ask: "vd" } },
      options: [
        { key: "A", text: t`$1.1 \times 10^{-4}\ \mathrm{m/s}$`, correct: true, value: "0.000110000000000000" },
        { key: "B", text: t`$2.74 \times 10^{-5}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M1", value: "2.74000000000000e-5" },
        { key: "C", text: t`$1.1 \times 10^{-7}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M2", value: "1.10000000000000e-7" },
        { key: "D", text: t`$8.78 \times 10^{-8}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M3", value: "8.78000000000000e-8" },
      ],
      solution: {
        steps: [
          t`$r = 0.8\ \mathrm{mm}$ $= 0.8 \times 10^{-3}\ \mathrm{m}$, so $A = \pi r^2$ $= 2.01 \times 10^{-6}\ \mathrm{m^2}$.`,
          t`$nAe = 8.5 \times 10^{28}$ $\times 2.01 \times 10^{-6}$ $\times 1.6 \times 10^{-19}$ $= 2.73 \times 10^{4}$.`,
          t`$v_d = \dfrac{I}{nAe}$ $= \dfrac{3}{2.73 \times 10^4}$ $\approx 1.1 \times 10^{-4}\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Solved Ex.11.2" },
      stem: t`A copper wire of radius $0.6\ \mathrm{mm}$ carries a current of $1\ \mathrm{A}$, spread evenly over its cross-section. What is the magnitude of the current density?`,
      verify: { kind: "value", inputs: { I: "1", r: "0.6" }, params: { ask: "J" } },
      options: [
        { key: "A", text: t`$8.84 \times 10^{5}\ \mathrm{A/m^2}$`, correct: true, value: "884000" },
        { key: "B", text: t`$3.54 \times 10^{6}\ \mathrm{A/m^2}$`, correct: false, misconceptionId: "C01-M1", value: "3540000" },
        { key: "C", text: t`$884\ \mathrm{A/m^2}$`, correct: false, misconceptionId: "C01-M2", value: "884" },
        { key: "D", text: t`$531\ \mathrm{A/m^2}$`, correct: false, misconceptionId: "C01-M3", value: "531" },
      ],
      solution: {
        steps: [
          t`$A = \pi r^2$ $= \pi (0.6 \times 10^{-3})^2$ $= 1.13 \times 10^{-6}\ \mathrm{m^2}$.`,
          t`$J = \dfrac{I}{A}$ $= \dfrac{1}{1.13 \times 10^{-6}}$ $\approx 8.84 \times 10^{5}\ \mathrm{A/m^2}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.4 (iv)" },
      stem: t`The current density in a copper wire is $500\ \mathrm{A/cm^2}$, and copper has $8.47 \times 10^{22}$ free electrons per $\mathrm{cm^3}$. What is the drift speed of the electrons, in $\mathrm{m/s}$? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { J: "500", n: "8.47e22", e: "1.6e-19" }, params: { ask: "vdJ" } },
      options: [
        { key: "A", text: t`$0.0369\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M4", value: "0.0369000000000000" },
        { key: "B", text: t`$369\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M5", value: "369" },
        { key: "C", text: t`$3.69 \times 10^{-4}\ \mathrm{m/s}$`, correct: true, value: "0.000369000000000000" },
        { key: "D", text: t`$0.00369\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M2", value: "0.00369000000000000" },
      ],
      solution: {
        steps: [
          t`$J = 500 \times 10^4$ $= 5 \times 10^6\ \mathrm{A/m^2}$, since $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
          t`$n$ $= 8.47 \times 10^{22} \times 10^6$ $= 8.47 \times 10^{28}\ \mathrm{m^{-3}}$.`,
          t`$v_d = \dfrac{J}{ne}$ $= \dfrac{5 \times 10^6}{1.355 \times 10^{10}}$ $\approx 3.69 \times 10^{-4}\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.4 (xi)" },
      stem: t`A current of $4\ \mathrm{A}$ flows through an automobile headlight. How many electrons flow through it in $2$ hours? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { I: "4", t: "2", e: "1.6e-19" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$1.8 \times 10^{23}$`, correct: true, value: "179999999999999991611392" },
        { key: "B", text: t`$5 \times 10^{19}$`, correct: false, misconceptionId: "C01-M6", value: "50000000000000000000" },
        { key: "C", text: t`$2.5 \times 10^{19}$`, correct: false, misconceptionId: "C01-M7", value: "25000000000000000000" },
        { key: "D", text: t`$3.47 \times 10^{15}$`, correct: false, misconceptionId: "C01-M8", value: "3470000000000000" },
      ],
      solution: {
        steps: [
          t`$t = 2 \times 3600$ $= 7200\ \mathrm{s}$.`,
          t`$q = It$ $= 4 \times 7200$ $= 28800\ \mathrm{C}$.`,
          t`$N = \dfrac{q}{e}$ $= \dfrac{28800}{1.6 \times 10^{-19}}$ $= 1.8 \times 10^{23}$ electrons.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.3 (ii)" },
      stem: t`A steady current flows through a metal piece whose cross-section is wide in some places and narrow in others. Which quantity is the same all along the piece?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "steady" } },
      options: [
        { key: "A", text: t`The current only`, correct: true, value: "current_only" },
        { key: "B", text: t`The drift speed only`, correct: false, misconceptionId: "C01-M9", value: "drift_only" },
        { key: "C", text: t`The current density only`, correct: false, misconceptionId: "C01-M10", value: "density_only" },
        { key: "D", text: t`The current, the current density and the drift speed, all three`, correct: false, misconceptionId: "C01-M11", value: "all_three" },
      ],
      solution: {
        steps: [
          t`The current is steady, so no charge piles up: the same $I$ crosses every section.`,
          t`$J = \dfrac{I}{A}$ and $v_d = \dfrac{I}{nAe}$ both change with $A$.`,
          t`So only the current is the same all along.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`Electrons in a lamp's wires drift at well under $1\ \mathrm{mm/s}$, yet the lamp lights the moment the switch is closed. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "instant" } },
      options: [
        { key: "A", text: t`The drift speed is really about $10^5\ \mathrm{m/s}$, the speed of the electrons' random motion`, correct: false, misconceptionId: "C01-M13", value: "thermal_speed" },
        { key: "B", text: t`Electrons do not move in a wire at all; only the energy travels along it`, correct: false, misconceptionId: "C01-M14", value: "no_motion" },
        { key: "C", text: t`The electric field is set up along the whole wire almost at once, so free electrons everywhere start drifting together`, correct: true, value: "field_at_once" },
        { key: "D", text: t`Electrons leave the switch and race to the lamp at nearly the speed of light`, correct: false, misconceptionId: "C01-M12", value: "light_speed" },
      ],
      solution: {
        steps: [
          t`Closing the switch sets up the electric field along the whole circuit almost at once.`,
          t`Free electrons already fill every part of the wire, so those in the lamp start drifting at once.`,
        ],
      },
    },
  ],
};
