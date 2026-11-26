import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Push a magnet into a coil joined to a galvanometer and the needle kicks. Hold the magnet still inside the coil, and the needle falls back to zero. Why?`,
    reveal: t`The galvanometer responds to a **change** in the field through the coil, not to the field itself. Faraday's law, $e = -N\dfrac{d\Phi}{dt}$, measures that change.`,
  },
  explanation: {
    intuition: [
      t`The amount of magnetic field passing through a coil is its **magnetic flux**.`,
      t`When that flux changes, an **emf** appears in the coil: a push on its charges, measured in volts.`,
      t`This is **electromagnetic induction**: no cell, only a changing flux.`,
      t`The faster the flux changes, the larger the emf.`,
      t`Each turn of a coil adds its own share, so more turns give more emf.`,
      t`A steady flux, however strong, induces nothing.`,
    ],
    formal: [
      {
        title: "Magnetic flux",
        points: [
          t`**Magnetic flux** $\Phi$ through a flat surface of area $A$ measures the field $\vec{B}$ passing through it.`,
          t`The **normal** is the line at right angles to the surface; $\theta$ is the angle between $\vec{B}$ and the normal.`,
          t`$\Phi = \vec{B} \cdot \vec{A}$ $= BA\cos\theta$, where the **area vector** $\vec{A}$ points along the normal.`,
          t`The unit of flux is the **weber**: $1\ \mathrm{Wb}$ $= 1\ \mathrm{T\,m^2}$.`,
          t`$\Phi = BA$ when $\vec{B}$ is along the normal, and $\Phi = 0$ when $\vec{B}$ lies in the plane.`,
          t`The book's 'plane perpendicular to the field' means $\vec{B}$ is along the normal: $\theta = 0$.`,
        ],
        figure: {
          alt: "A flat coil seen edge-on as a vertical line, with a uniform field B crossing it at a slant. Step 2: the normal to the coil, an arrow at right angles to it, and the angle θ between the normal and B.",
          axes: "none",
          view: { x: [1.5, 9.5], y: [-2.8, 2.4] },
          elements: [
            { kind: "segment", from: [5, -1.9], to: [5, 1.9], step: 1 },
            { kind: "label", at: [5, -1.9], label: "coil, edge-on", labelAt: "s", step: 1 },
            { kind: "vector", from: [3.1979, -1.2619], to: [6.8021, 1.2619], label: "B", labelAt: "ne", step: 1 },
            { kind: "vector", from: [3.4436, 0.1102], to: [6.0649, 1.9456], tone: "muted", step: 1 },
            { kind: "vector", from: [3.8532, -2.003], to: [6.3106, -0.2823], tone: "muted", step: 1 },
            { kind: "vector", from: [5, 0], to: [7.6, 0], label: "normal", labelAt: "e", tone: "good", step: 2 },
            { kind: "angle", at: [5, 0], from: 0, to: 35, label: "θ", labelAt: "e", step: 2 },
          ],
        },
      },
      {
        title: "Flux linkage",
        points: [
          t`In a coil of $N$ turns, the same flux $\Phi$ passes through every turn.`,
          t`The coil's **flux linkage** is $N\Phi$, the flux counted once for each turn.`,
          t`For example, $50$ turns with $0.2\ \mathrm{Wb}$ each give a flux linkage of $10\ \mathrm{Wb}$.`,
          t`Work in SI units: $1\ \mathrm{cm}$ $= 10^{-2}\ \mathrm{m}$, so $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
        ],
      },
      {
        title: "Faraday's laws",
        points: [
          t`**First law:** whenever the flux linked with a circuit changes, an emf is induced in it.`,
          t`The induced emf lasts only while the change lasts.`,
          t`**Second law:** the induced emf is proportional to the rate of change of flux linkage.`,
          t`In SI units, $e$ $= -\dfrac{d\left(N\Phi\right)}{dt}$ $= -N\dfrac{d\Phi}{dt}$.`,
          t`The flux can change through $B$, through the area $A$, or through the angle $\theta$.`,
          t`The minus sign gives the emf's direction: that is Lenz's law, the next concept.`,
        ],
      },
      {
        title: "Average and instant emf",
        points: [
          t`Over a time $\Delta t$, the average emf has size $|e|$ $= \dfrac{N\,|\Delta\Phi|}{\Delta t}$.`,
          t`$\Delta\Phi$ $= \Phi_{\text{final}} - \Phi_{\text{initial}}$: the change, not either value.`,
          t`When $\Phi$ is given as a function of $t$, differentiate, then put in the instant asked for.`,
          t`A flux in $\mathrm{mWb}$ changing per second gives an emf in $\mathrm{mV}$.`,
        ],
      },
      {
        title: "Charge through a coil",
        points: [
          t`The induced current is $I = \dfrac{|e|}{R}$, where $R$ is the total resistance of the circuit.`,
          t`The charge that flows is $q = I\,\Delta t$ $= \dfrac{N\,|\Delta\Phi|}{R}$.`,
          t`The time cancels: a fast pull and a slow pull send the same charge.`,
          t`A **search coil** joined to a galvanometer uses this charge to measure $B$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A coil of $400$ turns is wound on a square frame of side $20\ \mathrm{cm}$. A field normal to the coil rises uniformly from $0$ to $0.50\ \mathrm{T}$ in $0.8\ \mathrm{s}$. Find the size of the emf induced while it changes.`,
      steps: [
        t`The area is $A$ $= \left(0.20\ \mathrm{m}\right)^2$ $= 0.040\ \mathrm{m^2}$.`,
        t`The field is along the normal, so $\Phi = BA$ and $\Delta\Phi = A\,\Delta B$.`,
        t`$N\,\Delta\Phi$ $= 400 \times 0.040 \times 0.50$ $= 8.0\ \mathrm{Wb}$.`,
        t`$|e|$ $= \dfrac{N\,\Delta\Phi}{\Delta t}$ $= \dfrac{8.0}{0.8}$ $= 10\ \mathrm{V}$.`,
      ],
      answer: t`$|e| = 10\ \mathrm{V}$`,
    },
    visualSpec: t`Drag a magnet towards and away from a coil and watch a meter needle follow the rate of change of the flux, not the flux.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes the flux through one turn for the whole coil.",
      remediation: t`Each of the $N$ turns links the flux $\Phi$, so the flux linkage is $N\Phi$ and $e = -N\dfrac{d\Phi}{dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Takes $\theta$ as the angle between the field and the plane of the coil.`,
      remediation: t`$\theta$ is measured from the normal. A field at $60^\circ$ to the plane is at $30^\circ$ to the normal.`,
      fallback: { kind: "ext", topic: "scalar product of two vectors (Std XI Physics)" },
    },
    {
      id: "C01-M3",
      mistake: t`Converts $\mathrm{cm^2}$ to $\mathrm{m^2}$ by dividing by 100.`,
      remediation: t`$1\ \mathrm{cm}$ $= 10^{-2}\ \mathrm{m}$, so $1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Takes the flux as $BA$ whatever the angle.`,
      remediation: t`Only the part of $\vec{B}$ along the normal passes through the coil: $\Phi = BA\cos\theta$.`,
      fallback: { kind: "ext", topic: "scalar product of two vectors (Std XI Physics)" },
    },
    {
      id: "C01-M5",
      mistake: "Takes the emf as the flux, or its change, rather than its rate of change.",
      remediation: t`The emf is the rate of change of flux linkage: divide the change by the time it takes, or differentiate $\Phi(t)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Uses the final field in place of the change in the field.",
      remediation: t`The emf comes from the change: $\Delta\Phi$ $= \left(B_{\text{final}} - B_{\text{initial}}\right)A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Uses the average rate since $t = 0$ for the emf at one instant.`,
      remediation: t`The emf at an instant is $\dfrac{d\Phi}{dt}$ at that instant: differentiate, then put in $t$.`,
      fallback: { kind: "ext", topic: "differentiation (Std XII Maths)" },
    },
    {
      id: "C01-M8",
      mistake: "Reads milliweber as weber.",
      remediation: t`$1\ \mathrm{mWb}$ $= 10^{-3}\ \mathrm{Wb}$, so a rate in $\mathrm{mWb/s}$ is an emf in $\mathrm{mV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Divides the charge by the time as well.",
      remediation: t`$q = I\,\Delta t$ $= \dfrac{|e|}{R}\Delta t$ $= \dfrac{N\,|\Delta\Phi|}{R}$: the time cancels. Dividing by $\Delta t$ again gives the current, not the charge.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks an emf is induced only when the coil moves.",
      remediation: "Any change of flux linkage induces an emf. A changing field through a coil at rest works just as well.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks the emf stays on once the flux has changed.",
      remediation: t`The emf lasts only while the flux is changing. Once the flux is steady again, $e = 0$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M6 gives the key when the field starts from zero, C01-M1 when $N = 1$, and C01-M2 when the field is at $45^\circ$ to the plane: diagnose them on other inputs.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.1(v)" },
      stem: t`A circular coil of $100$ turns has an area of $0.50\ \mathrm{m^2}$. A uniform field of $0.40\ \mathrm{T}$ makes an angle of $60^\circ$ with the plane of the coil. What is the magnetic flux linked with the coil?`,
      verify: { kind: "value", inputs: { N: "100", B: "0.40", A: "0.50", plane: "pi/3" }, params: { ask: "link" } },
      options: [
        { key: "A", text: t`$17.3\ \mathrm{Wb}$`, correct: true, value: "17.3000000000000" },
        { key: "B", text: t`$0.173\ \mathrm{Wb}$`, correct: false, misconceptionId: "C01-M1", value: "0.173000000000000" },
        { key: "C", text: t`$10\ \mathrm{Wb}$`, correct: false, misconceptionId: "C01-M2", value: "10" },
        { key: "D", text: t`$20\ \mathrm{Wb}$`, correct: false, misconceptionId: "C01-M4", value: "20" },
      ],
      solution: {
        steps: [
          t`The field is at $60^\circ$ to the plane, so it is at $\theta = 30^\circ$ to the normal.`,
          t`Per turn, $\Phi = BA\cos\theta$ $= 0.40 \times 0.50 \times \cos 30^\circ$ $= 0.173\ \mathrm{Wb}$.`,
          t`Flux linkage $N\Phi = 100 \times 0.173$ $= 17.3\ \mathrm{Wb}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.8" },
      stem: t`A search coil of $2000$ turns and area $1.5\ \mathrm{cm^2}$ is placed with its plane normal to a magnetic field of $0.60\ \mathrm{T}$. It is pulled right out of the field in $0.2\ \mathrm{s}$. What is the average emf induced in the coil?`,
      verify: { kind: "value", inputs: { N: "2000", A_cm2: "1.5", B1: "0.60", B2: "0", dt: "0.2" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$0.9\ \mathrm{V}$`, correct: true, value: "0.900000000000000" },
        { key: "B", text: t`$4.5 \times 10^{-4}\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M1", value: "0.000450000000000000" },
        { key: "C", text: t`$90\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M3", value: "90" },
        { key: "D", text: t`$0.18\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M5", value: "0.180000000000000" },
      ],
      solution: {
        steps: [
          t`$A = 1.5\ \mathrm{cm^2}$ $= 1.5 \times 10^{-4}\ \mathrm{m^2}$.`,
          t`The linkage falls from $NBA$ $= 2000 \times 0.60 \times 1.5 \times 10^{-4}$ $= 0.18\ \mathrm{Wb}$ to zero.`,
          t`$|e| = \dfrac{0.18}{0.2}$ $= 0.9\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Solved Ex.12.4" },
      stem: t`A coil of $20$ turns and area $0.05\ \mathrm{m^2}$ lies normal to a uniform field of $3.0\ \mathrm{T}$. The field is reduced uniformly to $1.0\ \mathrm{T}$ in $0.4\ \mathrm{s}$. What emf is induced in the coil?`,
      verify: { kind: "value", inputs: { N: "20", A: "0.05", B1: "3.0", B2: "1.0", dt: "0.4" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M5", value: "2" },
        { key: "B", text: t`$2.5\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M6", value: "2.50000000000000" },
        { key: "C", text: t`$5\ \mathrm{V}$`, correct: true, value: "5" },
        { key: "D", text: t`$0.25\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M1", value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`The field changes by $3.0 - 1.0 = 2.0\ \mathrm{T}$.`,
          t`$N\,|\Delta\Phi| = NA\,|\Delta B|$ $= 20 \times 0.05 \times 2.0$ $= 2.0\ \mathrm{Wb}$.`,
          t`$|e| = \dfrac{2.0}{0.4}$ $= 5\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.6(vi)" },
      stem: t`The magnetic flux through a loop varies as $\phi = 6t^2 + 7t + 1$, where $\phi$ is in milliweber and $t$ in seconds. What is the size of the emf induced in the loop at $t = 2\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { a: "6", b: "7", c: "1", t0: "2" }, params: { ask: "rate" } },
      options: [
        { key: "A", text: t`$0.031\ \mathrm{V}$`, correct: true, value: "0.0310000000000000" },
        { key: "B", text: t`$0.039\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M5", value: "0.0390000000000000" },
        { key: "C", text: t`$0.019\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M7", value: "0.0190000000000000" },
        { key: "D", text: t`$31\ \mathrm{V}$`, correct: false, misconceptionId: "C01-M8", value: "31" },
      ],
      solution: {
        steps: [
          t`$\dfrac{d\phi}{dt} = 12t + 7$, in milliweber per second.`,
          t`At $t = 2\ \mathrm{s}$: $12 \times 2 + 7$ $= 31\ \mathrm{mWb/s}$.`,
          t`$|e| = 31\ \mathrm{mV}$ $= 0.031\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A search coil of $50$ turns and area $4.0\ \mathrm{cm^2}$ lies normal to a field of $0.50\ \mathrm{T}$. The total resistance of the coil and its galvanometer is $20\ \Omega$. The coil is pulled out of the field in $0.1\ \mathrm{s}$. What charge flows through the galvanometer?`,
      verify: { kind: "value", inputs: { N: "50", A_cm2: "4.0", B: "0.50", R: "20", dt: "0.1" }, params: { ask: "charge" } },
      options: [
        { key: "A", text: t`$5 \times 10^{-4}\ \mathrm{C}$`, correct: true, value: "0.000500000000000000" },
        { key: "B", text: t`$1 \times 10^{-5}\ \mathrm{C}$`, correct: false, misconceptionId: "C01-M1", value: "1.00000000000000e-5" },
        { key: "C", text: t`$0.05\ \mathrm{C}$`, correct: false, misconceptionId: "C01-M3", value: "0.0500000000000000" },
        { key: "D", text: t`$0.005\ \mathrm{C}$`, correct: false, misconceptionId: "C01-M9", value: "0.00500000000000000" },
      ],
      solution: {
        steps: [
          t`$A$ $= 4.0 \times 10^{-4}\ \mathrm{m^2}$; the linkage falls by $NBA$ $= 50 \times 0.50 \times 4.0 \times 10^{-4}$ $= 0.01\ \mathrm{Wb}$.`,
          t`$q = \dfrac{N\,|\Delta\Phi|}{R}$ $= \dfrac{0.01}{20}$ $= 5 \times 10^{-4}\ \mathrm{C}$.`,
          t`The time, $0.1\ \mathrm{s}$, is not needed: it cancels.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.2 (i)" },
      stem: t`According to Faraday's laws of electromagnetic induction, an emf is induced in a coil:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "law" } },
      options: [
        { key: "A", text: t`only when the coil itself moves through a magnetic field`, correct: false, misconceptionId: "C01-M10", value: "coil_moves" },
        { key: "B", text: t`when the flux linked with it changes, and it stays on after the change ends`, correct: false, misconceptionId: "C01-M11", value: "lasts_after" },
        { key: "C", text: t`whenever the flux linked with it changes, and only while it changes`, correct: true, value: "rate_of_change" },
        { key: "D", text: t`whenever magnetic flux passes through it, even a steady flux`, correct: false, misconceptionId: "C01-M5", value: "flux_itself" },
      ],
      solution: {
        steps: [
          t`First law: an emf appears whenever the flux linked with the coil changes, by any means.`,
          t`It lasts only while the change lasts: a steady flux, however large, induces nothing.`,
        ],
      },
    },
  ],
};
