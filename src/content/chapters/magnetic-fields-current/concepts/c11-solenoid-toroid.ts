import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`MRI scanners need a strong, perfectly even magnetic field across a whole body. How can coils of wire give a field that is the same everywhere inside them?`,
    reveal: t`Wind the wire into a long **solenoid**. Inside, the fields of all the turns add to a uniform $B = \mu_0nI$; outside they nearly cancel. Bend it into a ring, a **toroid**, and the field is trapped inside completely.`,
  },
  explanation: {
    intuition: [
      t`A **solenoid** is a long wire wound closely into a helix, like a spring.`,
      t`Inside, the fields of all the turns point the same way along the axis and add up.`,
      t`Outside, the fields of turns on opposite sides nearly cancel, so the field there is very weak.`,
      t`A **toroid** is a solenoid bent round into a ring; its field runs round inside the windings.`,
    ],
    formal: [
      {
        title: "Long solenoid",
        points: [
          t`Take a rectangular Amperian loop with one side, of length $l$, inside along the axis.`,
          t`Only that side contributes: $Bl$. The loop encloses $nl$ turns, each carrying $I$.`,
          t`$Bl = \mu_0nlI$, so $B = \mu_0nI$, where $n = \dfrac{N}{L}$ is turns per metre.`,
          t`The field is uniform inside, about half as much at an end, and nearly zero outside.`,
        ],
      },
      {
        title: "Toroid",
        points: [
          t`Take a circular Amperian loop of radius $r$ along the middle of the windings.`,
          t`It is threaded $N$ times by the current: $B \times 2\pi r = \mu_0NI$.`,
          t`So $B = \dfrac{\mu_0NI}{2\pi r}$ inside; outside the windings $B = 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A solenoid $50\ \mathrm{cm}$ long has $500$ turns and carries $2\ \mathrm{A}$. Find the field at its centre and at one end. (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      steps: [
        t`$n = \dfrac{500}{0.5} = 1000$ turns per metre.`,
        t`$B = \mu_0nI = 4\pi \times 10^{-7} \times 1000 \times 2$.`,
        t`$B \approx 2.51 \times 10^{-3}\ \mathrm{T}$ at the centre.`,
        t`At an end it is about half: $1.26 \times 10^{-3}\ \mathrm{T}$.`,
      ],
      answer: t`$2.51 \times 10^{-3}\ \mathrm{T}$ at the centre; $1.26 \times 10^{-3}\ \mathrm{T}$ at an end`,
    },
    visualSpec: t`Stretch a coil from a loose spiral into a tight solenoid and watch the field lines inside straighten and the outside field fade.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Uses the total number of turns for $n$.`,
      remediation: t`$n$ is turns per metre: $n = \dfrac{N}{L}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Leaves the length in cm.",
      remediation: t`Turns per metre needs the length in metres: $25\ \mathrm{cm} = 0.25\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Uses the circular loop's formula.",
      remediation: t`$\dfrac{\mu_0NI}{2R}$ is the field at the centre of a flat coil. A long solenoid gives $\mu_0nI$; a toroid, $\dfrac{\mu_0NI}{2\pi r}$.`,
      fallback: { kind: "ext", topic: "field of a circular loop (this chapter)" },
    },
    {
      id: "C11-M4",
      mistake: "Gives the field at an end instead of at the centre.",
      remediation: t`Half of $\mu_0nI$ is the field at an end; at the centre it is the full $\mu_0nI$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Takes the diameter as the length.",
      remediation: t`$n$ uses the solenoid's length, $\pi\ \mathrm{m}$, not its diameter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: t`Forgets the $2\pi$ of the toroid's circle.`,
      remediation: t`The Amperian loop's length is $2\pi r$: $B \times 2\pi r = \mu_0NI$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Uses the diameter for the radius.",
      remediation: t`$r$ is the radius of the circle through the windings: $10\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Turns the formula upside down.",
      remediation: t`From $B \times 2\pi r = \mu_0NI$, $I = \dfrac{2\pi rB}{\mu_0N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: t`Leaves out the toroid's length: $B = \mu_0NI$.`,
      remediation: t`$\mu_0NI$ is $\oint\vec{B} \cdot d\vec{l}$; divide by the loop's length $2\pi r$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M10",
      mistake: t`Multiplies by $2\pi r$ instead of dividing.`,
      remediation: t`$B \times 2\pi r = \mu_0NI$, so $B = \dfrac{\mu_0NI}{2\pi r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Thinks the field outside a long solenoid equals the field inside.",
      remediation: t`Outside, the fields of the turns on opposite sides nearly cancel: $B \approx 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Thinks the field outside is half the field inside.",
      remediation: "Half is the value at an end, on the axis; outside the windings the field is nearly zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Uses the toroid formula outside a solenoid.",
      remediation: t`Outside a long solenoid, an Amperian loop encloses no net current: $B \approx 0$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Solved Ex.10.8" },
      stem: t`A solenoid $25\ \mathrm{cm}$ long, of radius $1\ \mathrm{cm}$, has $250$ turns and carries $3\ \mathrm{A}$. What is the magnetic field inside it? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { L_cm: "25", R_cm: "1", N: "250", I: "3" }, params: { ask: "sol" } },
      options: [
        { key: "A", text: t`$0.00377\ \mathrm{T}$`, correct: true, value: "0.00377000000000000" },
        { key: "B", text: t`$9.42 \times 10^{-4}\ \mathrm{T}$`, correct: false, misconceptionId: "C11-M1", value: "0.000942000000000000" },
        { key: "C", text: t`$3.77 \times 10^{-5}\ \mathrm{T}$`, correct: false, misconceptionId: "C11-M2", value: "3.77000000000000e-5" },
        { key: "D", text: t`$0.0471\ \mathrm{T}$`, correct: false, misconceptionId: "C11-M3", value: "0.0471000000000000" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{250}{0.25} = 1000$ turns per metre.`,
          t`$B = \mu_0nI = 4\pi \times 10^{-7} \times 1000 \times 3 \approx 3.77 \times 10^{-3}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.26" },
      stem: t`A solenoid $\pi\ \mathrm{m}$ long and $5\ \mathrm{cm}$ in diameter has $1000$ turns and carries $5\ \mathrm{A}$. What is the magnetic field at its centre, on the axis? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { d_cm: "5", N: "1000", I: "5" }, params: { ask: "sol_pi" } },
      options: [
        { key: "A", text: t`$0.001\ \mathrm{T}$`, correct: false, misconceptionId: "C11-M4", value: "0.00100000000000000" },
        { key: "B", text: t`$0.126\ \mathrm{T}$`, correct: false, misconceptionId: "C11-M5", value: "0.126000000000000" },
        { key: "C", text: t`$0.002\ \mathrm{T}$`, correct: true, value: "0.00200000000000000" },
        { key: "D", text: t`$0.00628\ \mathrm{T}$`, correct: false, misconceptionId: "C11-M1", value: "0.00628000000000000" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{1000}{\pi}$ turns per metre.`,
          t`$B = 4\pi \times 10^{-7} \times \dfrac{1000}{\pi} \times 5 = 2 \times 10^{-3}\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.16" },
      stem: t`A toroid of mean radius $10\ \mathrm{cm}$ has $1000$ turns. What current gives a field of $5 \times 10^{-2}\ \mathrm{T}$ inside it? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { B: "0.05", r_cm: "10", N: "1000" }, params: { ask: "tor_i" } },
      options: [
        { key: "A", text: t`$3.98\ \mathrm{A}$`, correct: false, misconceptionId: "C11-M6", value: "3.98000000000000" },
        { key: "B", text: t`$50\ \mathrm{A}$`, correct: false, misconceptionId: "C11-M7", value: "50" },
        { key: "C", text: t`$0.04\ \mathrm{A}$`, correct: false, misconceptionId: "C11-M8", value: "0.0400000000000000" },
        { key: "D", text: t`$25\ \mathrm{A}$`, correct: true, value: "25" },
      ],
      solution: {
        steps: [
          t`$B \times 2\pi r = \mu_0NI$, so $I = \dfrac{2\pi rB}{\mu_0N}$.`,
          t`$I = \dfrac{2\pi \times 0.1 \times 0.05}{4\pi \times 10^{-7} \times 1000} = 25\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.4" },
      stem: t`A toroid of $N$ turns carries a current $I$. What is the magnetic field inside it, on the circle of radius $r$ through the middle of its windings?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "tor" } },
      options: [
        { key: "A", text: t`$\dfrac{\mu_0NI}{2r}$`, correct: false, misconceptionId: "C11-M3", value: "loop" },
        { key: "B", text: t`$2\pi r\mu_0NI$`, correct: false, misconceptionId: "C11-M10", value: "times_2pir" },
        { key: "C", text: t`$\dfrac{\mu_0NI}{2\pi r}$`, correct: true, value: "toroid" },
        { key: "D", text: t`$\mu_0NI$`, correct: false, misconceptionId: "C11-M9", value: "mu0NI" },
      ],
      solution: {
        steps: [
          t`A circle of radius $r$ through the windings is threaded $N$ times: $B \times 2\pi r = \mu_0NI$.`,
          t`$B = \dfrac{\mu_0NI}{2\pi r}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`A long, closely wound solenoid has a field $B$ inside it. What is the field just outside it, near its middle?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "outside" } },
      options: [
        { key: "A", text: t`$B$, the same as inside`, correct: false, misconceptionId: "C11-M11", value: "same" },
        { key: "B", text: t`$\dfrac{B}{2}$`, correct: false, misconceptionId: "C11-M12", value: "half" },
        { key: "C", text: t`$\dfrac{\mu_0NI}{2\pi r}$, with $r$ the distance from the axis`, correct: false, misconceptionId: "C11-M13", value: "toroid_out" },
        { key: "D", text: t`Nearly zero`, correct: true, value: "zero" },
      ],
      solution: {
        steps: [
          t`Just outside, the fields of turns on opposite sides of the solenoid nearly cancel.`,
          t`So the field there is nearly zero.`,
        ],
      },
    },
  ],
};
