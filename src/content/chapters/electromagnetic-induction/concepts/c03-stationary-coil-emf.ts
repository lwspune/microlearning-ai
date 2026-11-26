import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A transformer's secondary coil never moves and never touches the primary, yet a current appears in it. With nothing moving, what pushes its charges?`,
    reveal: t`The changing current in the primary changes the flux through the secondary. A changing magnetic field creates an **induced electric field**, and that field drives the charges round the coil at rest.`,
  },
  explanation: {
    intuition: [
      t`A **stationary coil** is one at rest; even so, the flux through it can change.`,
      t`Change the current in a nearby solenoid and the field through the coil changes.`,
      t`Faraday's law then gives an emf in the coil, though nothing moves.`,
      t`The push comes from an **induced electric field**, made by the changing magnetic field.`,
      t`Its lines are closed loops round the changing field.`,
      t`A coil at rest in a steady field has no emf at all.`,
    ],
    formal: [
      {
        title: "A coil and a solenoid",
        points: [
          t`Inside a long solenoid with $n$ turns per metre and current $I$, the field is uniform: $B = \mu_0 nI$.`,
          t`Outside a long solenoid, the field is almost zero.`,
          t`A coil on the same axis has flux $\Phi = \mu_0 nIA$ through each turn.`,
          t`$A$ is the area that carries field: the coil's own area inside, the solenoid's for a coil wound round it.`,
        ],
        figure: {
          alt: "A long solenoid seen end-on: a circle with its field coming out of the page inside it. Step 2: outside the solenoid the field is almost zero. Step 3: a smaller coil inside it on the same axis. Step 4: dashed, a larger coil wound round the outside, which encloses field only over the solenoid's cross-section.",
          axes: "none",
          view: { x: [-2.6, 6.6], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1.5, step: 1 },
            { kind: "circle", centre: [0, 0], r: 0.18, tone: "muted", step: 1 },
            { kind: "point", at: [0, 0], tone: "muted", step: 1 },
            { kind: "circle", centre: [1.15, 0], r: 0.18, tone: "muted", step: 1 },
            { kind: "point", at: [1.15, 0], tone: "muted", step: 1 },
            { kind: "circle", centre: [-1.15, 0], r: 0.18, tone: "muted", step: 1 },
            { kind: "point", at: [-1.15, 0], tone: "muted", step: 1 },
            { kind: "label", at: [2.5, 1.2], label: "solenoid, B = μ₀nI", labelAt: "e", step: 1 },
            { kind: "label", at: [2.5, -1.9], label: "B ≈ 0 outside", labelAt: "e", step: 2 },
            { kind: "circle", centre: [0, 0], r: 0.85, tone: "good", step: 3 },
            { kind: "label", at: [0, -0.85], label: "coil", labelAt: "s", tone: "good", step: 3 },
            { kind: "circle", centre: [0, 0], r: 2.2, dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [2.5, 2.05], label: "coil round it (dashed)", labelAt: "e", tone: "muted", step: 4 },
          ],
        },
      },
      {
        title: "Changing the current",
        points: [
          t`When $I$ changes, $\Phi$ changes, so the coil has an emf though nothing moves.`,
          t`$e = -N\dfrac{d\Phi}{dt}$ $= -N\mu_0 nA\dfrac{dI}{dt}$.`,
          t`For a steady change in a time $\Delta t$: $|e|$ $= \dfrac{N\mu_0 nA\,|\Delta I|}{\Delta t}$.`,
          t`Reversing a current $I$ changes it by $2I$, so the flux changes by $2\Phi$.`,
          t`Convert first: turns per cm times 100 gives turns per metre.`,
        ],
      },
      {
        title: "No change, no emf",
        points: [
          t`A coil at rest in a steady uniform field keeps the same $B$, $A$ and $\theta$.`,
          t`Its flux stays constant, so $e = 0$ and no current flows.`,
          t`Being in a field is not enough: the flux must change.`,
        ],
      },
      {
        title: "The induced electric field",
        points: [
          t`A magnetic field exerts no force on charges at rest, yet the charges in a coil at rest do move.`,
          t`The changing magnetic field creates an **induced electric field** $\vec{E}$, which pushes them.`,
          t`Its lines are closed loops round the changing field, unlike the field of charges.`,
          t`Round any closed path, $\oint \vec{E} \cdot d\vec{l}$ $= -\dfrac{d\Phi}{dt}$: this is the emf round the path.`,
        ],
      },
      {
        title: "A changing circular field",
        points: [
          t`Let a uniform field $B$ fill a circle of radius $s$ and change at the rate $\dfrac{dB}{dt}$.`,
          t`Inside, $r \le s$: a circle of radius $r$ holds flux $\pi r^2B$, so $E = \dfrac{r}{2}\dfrac{dB}{dt}$.`,
          t`Outside, $r > s$: only $\pi s^2$ carries field, so $E = \dfrac{s^2}{2r}\dfrac{dB}{dt}$.`,
          t`$E$ grows from zero at the centre to its largest at the edge, then falls as $\dfrac{1}{r}$.`,
          t`$E$, in $\mathrm{V/m}$, is not the emf, in volts: divide the emf by $2\pi r$.`,
        ],
        figure: {
          alt: "A circular region of radius s with a uniform field out of the page that is increasing. Step 2: a dashed circle inside the region, with the induced electric field E running clockwise round it. Step 3: a dashed circle outside the region, where E also runs clockwise, weaker.",
          axes: "none",
          view: { x: [-4, 4], y: [-2.8, 2.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1.4, step: 1 },
            { kind: "circle", centre: [0, 0], r: 0.18, tone: "muted", step: 1 },
            { kind: "point", at: [0, 0], tone: "muted", step: 1 },
            { kind: "circle", centre: [0, 1.12], r: 0.18, tone: "muted", step: 1 },
            { kind: "point", at: [0, 1.12], tone: "muted", step: 1 },
            { kind: "circle", centre: [0, -1.12], r: 0.18, tone: "muted", step: 1 },
            { kind: "point", at: [0, -1.12], tone: "muted", step: 1 },
            { kind: "label", at: [-3.9, 2.45], label: "B increasing", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [0.7, -1.2124], step: 1 },
            { kind: "label", at: [0.7, -1.2124], label: "s", labelAt: "se", step: 1 },
            { kind: "circle", centre: [0, 0], r: 0.85, dashed: true, tone: "good", step: 2 },
            { kind: "vector", from: [-0.85, -0.3], to: [-0.85, 0.3], tone: "good", label: "E", labelAt: "e", step: 2 },
            { kind: "vector", from: [0.85, 0.3], to: [0.85, -0.3], tone: "good", step: 2 },
            { kind: "circle", centre: [0, 0], r: 2.3, dashed: true, tone: "good", step: 3 },
            { kind: "vector", from: [-2.3, -0.3], to: [-2.3, 0.3], tone: "good", step: 3 },
            { kind: "vector", from: [2.3, 0.3], to: [2.3, -0.3], tone: "good", label: "E", labelAt: "e", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A long solenoid has $1000$ turns/m. A coil of $200$ turns and area $4.0\ \mathrm{cm^2}$ sits inside it on the same axis. The current rises steadily from $0$ to $5.0\ \mathrm{A}$ in $0.10\ \mathrm{s}$. Find the emf in the coil.`,
      steps: [
        t`$\Delta B = \mu_0 n\,\Delta I$ $= 4\pi \times 10^{-7} \times 1000 \times 5.0$ $= 6.28 \times 10^{-3}\ \mathrm{T}$.`,
        t`$A$ $= 4.0 \times 10^{-4}\ \mathrm{m^2}$, so $\Delta\Phi = A\,\Delta B$ $= 2.513 \times 10^{-6}\ \mathrm{Wb}$.`,
        t`$|e|$ $= \dfrac{N\,\Delta\Phi}{\Delta t}$ $= \dfrac{200 \times 2.513 \times 10^{-6}}{0.10}$ $= 5.03 \times 10^{-3}\ \mathrm{V}$.`,
      ],
      answer: t`$|e| = 5.03\ \mathrm{mV}$`,
    },
    visualSpec: t`Drag a slider for the solenoid current's rate of change and watch the emf meter in a coil at rest follow it, reading zero whenever the current is steady.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Takes the change on reversing a current $I$ as $I$, not $2I$.`,
      remediation: t`Reversing goes from $+I$ to $-I$: the current, and the flux, change by twice their value.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Uses the solenoid's cross-section for a smaller coil inside it.",
      remediation: "Each turn of the coil links only the flux through its own area: for a coil inside the solenoid, the coil's area.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Uses the coil's own area for a coil wound round a thinner solenoid.",
      remediation: "Outside a long solenoid the field is almost zero, so only the solenoid's cross-section carries flux through the outer coil.",
      fallback: { kind: "ext", topic: "magnetic field of a solenoid (Magnetic Fields due to Electric Current, Ch.10)" },
    },
    {
      id: "C03-M4",
      mistake: "Uses turns per cm as if they were turns per metre.",
      remediation: t`$n$ in $B = \mu_0 nI$ is turns per metre: $200$ turns/cm is $2.0 \times 10^4$ turns/m.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Forgets the number of turns of the coil.",
      remediation: t`Each of the coil's $N$ turns links the flux: $e = -N\dfrac{d\Phi}{dt}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: t`Converts $\mathrm{cm^2}$ to $\mathrm{m^2}$ by dividing by 100.`,
      remediation: t`$1\ \mathrm{cm}$ $= 10^{-2}\ \mathrm{m}$, so $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives the emf round the circle as the induced electric field.",
      remediation: t`The emf is $\oint \vec{E} \cdot d\vec{l}$ $= E(2\pi r)$; divide it by $2\pi r$ to get $E$ in $\mathrm{V/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks a coil in a field has an emf just because flux passes through it.",
      remediation: "Only a changing flux induces an emf; a steady flux, however large, induces none.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks a current needs a cell even when an emf is induced.",
      remediation: "An induced emf drives a current round a closed coil just as a cell's emf does. Here, though, the flux is steady, so there is no emf at all.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks a magnetic field pushes on charges at rest.",
      remediation: "A magnetic field exerts no force on charges at rest; only a changing field, through its induced electric field, moves them.",
      fallback: { kind: "ext", topic: "force on a moving charge (Magnetic Fields due to Electric Current, Ch.10)" },
    },
    {
      id: "C03-M11",
      mistake: "Uses the whole region's flux for a circle inside the region.",
      remediation: t`A circle of radius $r < s$ encloses field only over $\pi r^2$: $E = \dfrac{r}{2}\dfrac{dB}{dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: t`Uses $\pi r^2B$ for a circle outside the field region.`,
      remediation: t`Outside, the field fills only $\pi s^2$ of the circle: $E = \dfrac{s^2}{2r}\dfrac{dB}{dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Thinks there is no induced electric field outside the region where the field changes.",
      remediation: t`The induced field circles the changing flux and reaches outside it, falling as $\dfrac{1}{r}$: $E = \dfrac{s^2}{2r}\dfrac{dB}{dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Thinks the induced field is the same everywhere inside the region.",
      remediation: t`Inside, $E = \dfrac{r}{2}\dfrac{dB}{dt}$ grows from zero at the centre to its largest at the edge.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M2 gives the key for a coil wound round the solenoid and C03-M3 for a coil inside it; C03-M11 and C03-M14 apply only inside the field region, C03-M12 and C03-M13 only outside it.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.2" },
      stem: t`A long solenoid of diameter $3\ \mathrm{cm}$ has $200$ turns/cm and carries $1.4\ \mathrm{A}$. A coil of $80$ turns and diameter $2\ \mathrm{cm}$ sits inside it, on the same axis. The current falls steadily to zero in $20\ \mathrm{ms}$. What emf is induced in the coil? Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.`,
      verify: { kind: "value", inputs: { n_cm: "200", I1: "1.4", I2: "0", N: "80", rc_cm: "1", rs_cm: "1.5", dt: "0.020" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$4.42 \times 10^{-4}\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M4", value: "0.000442000000000000" },
        { key: "B", text: t`$5.53 \times 10^{-4}\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M5", value: "0.000553000000000000" },
        { key: "C", text: t`$0.0442\ \mathrm{V}$`, correct: true, value: "0.0442000000000000" },
        { key: "D", text: t`$0.0995\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M2", value: "0.0995000000000000" },
      ],
      solution: {
        steps: [
          t`$n = 2.0 \times 10^4$ turns/m, so $B = \mu_0 nI$ $= 4\pi \times 10^{-7} \times 2.0 \times 10^4 \times 1.4$ $= 0.0352\ \mathrm{T}$.`,
          t`The coil is inside, so its own area counts: $A = \pi\left(0.01\right)^2$ $= 3.14 \times 10^{-4}\ \mathrm{m^2}$.`,
          t`$|e| = \dfrac{NBA}{\Delta t}$ $= \dfrac{80 \times 0.0352 \times 3.14 \times 10^{-4}}{0.020}$ $= 0.0442\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.7" },
      stem: t`A long solenoid has $1500$ turns/m and carries $3.0\ \mathrm{A}$. A coil of $150$ turns and area $25\ \mathrm{cm^2}$ is wound tightly round its middle. The current is reversed in $0.5\ \mathrm{s}$. What average emf is induced in the coil? Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.`,
      verify: { kind: "value", inputs: { n: "1500", I1: "3.0", I2: "-3.0", N: "150", A_cm2: "25", dt: "0.5" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$5.65 \times 10^{-5}\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M5", value: "5.65000000000000e-5" },
        { key: "B", text: t`$0.848\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M6", value: "0.848000000000000" },
        { key: "C", text: t`$0.00848\ \mathrm{V}$`, correct: true, value: "0.00848000000000000" },
        { key: "D", text: t`$0.00424\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M1", value: "0.00424000000000000" },
      ],
      solution: {
        steps: [
          t`$B = \mu_0 nI$ $= 4\pi \times 10^{-7} \times 1500 \times 3.0$ $= 5.65 \times 10^{-3}\ \mathrm{T}$.`,
          t`Linkage $NBA$ $= 150 \times 5.65 \times 10^{-3} \times 25 \times 10^{-4}$ $= 2.12 \times 10^{-3}\ \mathrm{Wb}$.`,
          t`Reversing takes it to $-2.12 \times 10^{-3}\ \mathrm{Wb}$: a change of $4.24 \times 10^{-3}\ \mathrm{Wb}$.`,
          t`$|e|$ $= \dfrac{4.24 \times 10^{-3}}{0.5}$ $= 8.48 \times 10^{-3}\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.1(ii)" },
      stem: t`A coil of metal wire is kept at rest in a uniform, steady magnetic field. Then:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "steady" } },
      options: [
        { key: "A", text: t`both an emf and a current are induced, since flux passes through the coil`, correct: false, misconceptionId: "C03-M8", value: "both" },
        { key: "B", text: t`an emf is induced, but no current flows without a cell in the circuit`, correct: false, misconceptionId: "C03-M9", value: "emf_only" },
        { key: "C", text: t`a current is induced, since the field pushes on the coil's free electrons`, correct: false, misconceptionId: "C03-M10", value: "current_only" },
        { key: "D", text: t`neither an emf nor a current is induced, since the flux through it is constant`, correct: true, value: "neither" },
      ],
      solution: {
        steps: [
          t`At rest in a steady uniform field, $B$, $A$ and $\theta$ all stay the same, so $\Phi$ is constant.`,
          t`$e = -N\dfrac{d\Phi}{dt} = 0$: no emf, and so no current.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.17" },
      stem: t`A uniform magnetic field fills a circular region of radius $10\ \mathrm{cm}$ and increases at $0.020\ \mathrm{T/s}$. What is the size of the induced electric field at $4.0\ \mathrm{cm}$ from the centre of the region?`,
      verify: { kind: "value", inputs: { s_cm: "10", r_cm: "4", dBdt: "0.020" }, params: { ask: "E" } },
      options: [
        { key: "A", text: t`$0.0025\ \mathrm{V/m}$`, correct: false, misconceptionId: "C03-M11", value: "0.00250000000000000" },
        { key: "B", text: t`$0.001\ \mathrm{V/m}$`, correct: false, misconceptionId: "C03-M14", value: "0.00100000000000000" },
        { key: "C", text: t`$4 \times 10^{-4}\ \mathrm{V/m}$`, correct: true, value: "0.000400000000000000" },
        { key: "D", text: t`$1.01 \times 10^{-4}\ \mathrm{V/m}$`, correct: false, misconceptionId: "C03-M7", value: "0.000101000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 4.0\ \mathrm{cm}$ is inside the region, so the circle of radius $r$ holds flux $\pi r^2B$.`,
          t`$E\left(2\pi r\right)$ $= \pi r^2\dfrac{dB}{dt}$, so $E = \dfrac{r}{2}\dfrac{dB}{dt}$.`,
          t`$E = \dfrac{0.040}{2} \times 0.020$ $= 4 \times 10^{-4}\ \mathrm{V/m}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.17" },
      stem: t`A uniform magnetic field fills a circular region of radius $8.0\ \mathrm{cm}$ and increases at $0.040\ \mathrm{T/s}$. What is the size of the induced electric field at $24\ \mathrm{cm}$ from the centre, outside the region?`,
      verify: { kind: "value", inputs: { s_cm: "8", r_cm: "24", dBdt: "0.040" }, params: { ask: "E" } },
      options: [
        { key: "A", text: t`$5.33 \times 10^{-4}\ \mathrm{V/m}$`, correct: true, value: "0.000533000000000000" },
        { key: "B", text: t`$8.04 \times 10^{-4}\ \mathrm{V/m}$`, correct: false, misconceptionId: "C03-M7", value: "0.000804000000000000" },
        { key: "C", text: t`$0.0048\ \mathrm{V/m}$`, correct: false, misconceptionId: "C03-M12", value: "0.00480000000000000" },
        { key: "D", text: t`$0\ \mathrm{V/m}$`, correct: false, misconceptionId: "C03-M13", value: "0" },
      ],
      solution: {
        steps: [
          t`$r = 24\ \mathrm{cm}$ is outside the region, so the circle holds flux only $\pi s^2B$.`,
          t`$E\left(2\pi r\right)$ $= \pi s^2\dfrac{dB}{dt}$, so $E = \dfrac{s^2}{2r}\dfrac{dB}{dt}$.`,
          t`$E$ $= \dfrac{\left(0.080\right)^2}{2 \times 0.24} \times 0.040$ $= 5.33 \times 10^{-4}\ \mathrm{V/m}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`A long solenoid of radius $1.0\ \mathrm{cm}$ has $20$ turns/cm. A coil of $50$ turns and radius $3.0\ \mathrm{cm}$ is wound round its middle. The solenoid's current rises steadily from $0$ to $4.0\ \mathrm{A}$ in $0.10\ \mathrm{s}$. What emf is induced in the coil? Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.`,
      verify: { kind: "value", inputs: { n_cm: "20", I1: "0", I2: "4.0", N: "50", rc_cm: "3", rs_cm: "1", dt: "0.10" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$0.00158\ \mathrm{V}$`, correct: true, value: "0.00158000000000000" },
        { key: "B", text: t`$0.0142\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M3", value: "0.0142000000000000" },
        { key: "C", text: t`$1.58 \times 10^{-5}\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M4", value: "1.58000000000000e-5" },
        { key: "D", text: t`$3.16 \times 10^{-5}\ \mathrm{V}$`, correct: false, misconceptionId: "C03-M5", value: "3.16000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$n = 2000$ turns/m; the field is $\mu_0 nI$ inside the solenoid and almost zero outside it.`,
          t`So the flux uses the solenoid's area, $\pi\left(0.010\right)^2$ $= 3.14 \times 10^{-4}\ \mathrm{m^2}$, not the coil's.`,
          t`$\Delta\Phi = \mu_0 n\,\Delta I\,A$ $= 4\pi \times 10^{-7} \times 2000 \times 4.0 \times 3.14 \times 10^{-4}$ $= 3.16 \times 10^{-6}\ \mathrm{Wb}$.`,
          t`$|e|$ $= \dfrac{50 \times 3.16 \times 10^{-6}}{0.10}$ $= 1.58 \times 10^{-3}\ \mathrm{V}$.`,
        ],
      },
    },
  ],
};
