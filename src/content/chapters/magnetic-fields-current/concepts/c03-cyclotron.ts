import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A cyclotron gives protons several MeV of energy, yet the voltage across its gap is only some tens of kilovolts. Where does all that energy come from?`,
    reveal: t`From the same small voltage, used again and again. The magnetic field brings each proton back to the gap every half-turn, just as the voltage reverses, so it gains a little energy hundreds of times.`,
  },
  explanation: {
    intuition: [
      t`A **cyclotron** speeds up charged particles, such as protons, to very high energies.`,
      t`A magnetic field bends each ion round in a circle, back to the same gap.`,
      t`Each time it crosses the gap, an electric field gives it a small push.`,
      t`The faster ion swings round a wider circle, but each half-turn takes the same time.`,
      t`So an alternating voltage of one fixed frequency stays in step with the ion.`,
      t`The ion spirals outwards, gaining energy at every crossing, until it leaves at the rim.`,
    ],
    formal: [
      {
        title: "Construction",
        points: [
          t`Two hollow D-shaped metal boxes, the **dees** $D_1$ and $D_2$, face each other across a narrow gap.`,
          t`A strong electromagnet gives a uniform field $\vec{B}$ at right angles to the dees.`,
          t`A high-frequency **oscillator** joined across the dees makes an alternating electric field in the gap.`,
          t`Ions come from a source $S$ at the centre; the dees sit in a vacuum chamber.`,
          t`At the rim, a deflecting plate leads the fast ions out to a target.`,
        ],
        figure: {
          alt: "A cyclotron seen from above. Step 1: two D-shaped dees, D₁ on the left and D₂ on the right, with a narrow gap between their straight edges. Step 2: the magnetic field B, into the page. Step 3: an oscillator joined across the two dees. Step 4: the source S at the centre and the ion's path, semicircles that grow wider at each gap crossing. Step 5: at the rim the ion leaves along a straight path to the target.",
          axes: "none",
          view: { x: [-5.6, 6.6], y: [-7, 4.8] },
          elements: [
            { kind: "arc", centre: [-0.3, 0], r: 4, from: 90, to: 270, step: 1, tone: "muted" },
            { kind: "segment", from: [-0.3, 4], to: [-0.3, -4], step: 1, tone: "muted" },
            { kind: "arc", centre: [0.3, 0], r: 4, from: -90, to: 90, step: 1, tone: "muted" },
            { kind: "segment", from: [0.3, 4], to: [0.3, -4], step: 1, tone: "muted" },
            { kind: "label", at: [-3.4, 3.2], label: "D₁", labelAt: "nw", step: 1, tone: "muted" },
            { kind: "label", at: [3.4, 3.2], label: "D₂", labelAt: "ne", step: 1, tone: "muted" },
            { kind: "label", at: [-4.6, -4.2], label: "B ⊗", labelAt: "n", tone: "muted", step: 2 },
            { kind: "circle", centre: [0, -5.3], r: 0.45, step: 3, tone: "muted" },
            { kind: "label", at: [0, -5.8], label: "oscillator", labelAt: "s", tone: "muted", step: 3 },
            { kind: "segment", from: [-0.45, -5.3], to: [-2.6, -5.3], step: 3, tone: "muted" },
            { kind: "segment", from: [-2.6, -5.3], to: [-2.6, -3.2726], step: 3, tone: "muted" },
            { kind: "segment", from: [0.45, -5.3], to: [2.6, -5.3], step: 3, tone: "muted" },
            { kind: "segment", from: [2.6, -5.3], to: [2.6, -3.2726], step: 3, tone: "muted" },
            { kind: "point", at: [0, 0], label: "S", labelAt: "s", step: 4 },
            { kind: "segment", from: [0, 0], to: [0.3, 0.6], step: 4 },
            { kind: "arc", centre: [0.3, 0], r: 0.6, from: -90, to: 90, step: 4 },
            { kind: "segment", from: [0.3, -0.6], to: [-0.3, -1.1], step: 4 },
            { kind: "arc", centre: [-0.3, 0], r: 1.1, from: 90, to: 270, step: 4 },
            { kind: "segment", from: [-0.3, 1.1], to: [0.3, 1.6], step: 4 },
            { kind: "arc", centre: [0.3, 0], r: 1.6, from: -90, to: 90, step: 4 },
            { kind: "segment", from: [0.3, -1.6], to: [-0.3, -2.1], step: 4 },
            { kind: "arc", centre: [-0.3, 0], r: 2.1, from: 90, to: 270, step: 4 },
            { kind: "segment", from: [-0.3, 2.1], to: [0.3, 2.6], step: 4 },
            { kind: "arc", centre: [0.3, 0], r: 2.6, from: -90, to: 90, step: 4 },
            { kind: "segment", from: [0.3, -2.6], to: [-0.3, -3.1], step: 4 },
            { kind: "arc", centre: [-0.3, 0], r: 3.1, from: 90, to: 270, step: 4 },
            { kind: "segment", from: [-0.3, 3.1], to: [0.3, 3.6], step: 4 },
            { kind: "arc", centre: [0.3, 0], r: 3.6, from: 20, to: 90, step: 5 },
            { kind: "vector", from: [3.6829, 1.2313], to: [4.7774, -1.7757], label: "to target", labelAt: "s", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Working",
        points: [
          t`Inside a dee there is no electric field: the ion goes round a semicircle at a steady speed.`,
          t`In the gap the electric field speeds it up, so its next semicircle is wider.`,
          t`Each semicircle takes $\dfrac{T}{2} = \dfrac{\pi m}{qB}$, whatever the speed.`,
          t`So the field across the gap must reverse every $\dfrac{T}{2}$, twice per revolution.`,
          t`The oscillator frequency then equals the **cyclotron frequency** $f = \dfrac{qB}{2\pi m}$.`,
          t`The magnetic field only turns the ion; all the energy comes from the gap.`,
        ],
      },
      {
        title: "Maximum kinetic energy",
        points: [
          t`An ion leaves at the rim, where its radius is the dee radius $R$.`,
          t`From $R = \dfrac{mv}{qB}$, its speed there is $v = \dfrac{qBR}{m}$.`,
          t`So $KE_{max} = \tfrac{1}{2}mv^2 = \dfrac{q^2B^2R^2}{2m}$.`,
          t`Since $f = \dfrac{v}{2\pi R}$, also $v = 2\pi fR$ at the rim.`,
          t`$KE_{max}$ depends on $B$ and $R$, not on the gap voltage.`,
          t`A larger voltage gives more energy per crossing, but the ion makes fewer turns.`,
        ],
      },
      {
        title: "Limitations",
        points: [
          t`At speeds near that of light, an ion's mass grows (relativity).`,
          t`Then $\dfrac{qB}{2\pi m}$ falls, and the ion falls out of step with the oscillator.`,
          t`Electrons are so light that they reach such speeds at small energies.`,
          t`So a cyclotron cannot take electrons to high energies.`,
          t`Neutral particles, such as neutrons, feel no force and cannot be accelerated.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cyclotron for protons ($m = 1.67 \times 10^{-27}\ \mathrm{kg}$) has a field of $0.80\ \mathrm{T}$ and dees of radius $0.50\ \mathrm{m}$. Find the oscillator frequency and the maximum kinetic energy in MeV.`,
      steps: [
        t`$f = \dfrac{qB}{2\pi m}$ $= \dfrac{1.6 \times 10^{-19} \times 0.80}{2\pi \times 1.67 \times 10^{-27}}$ $= 1.22 \times 10^{7}\ \mathrm{Hz}$.`,
        t`$qBR = 1.6 \times 10^{-19} \times 0.80 \times 0.50$ $= 6.4 \times 10^{-20}\ \mathrm{kg\,m/s}$.`,
        t`$KE_{max} = \dfrac{(qBR)^2}{2m}$ $= \dfrac{\left(6.4 \times 10^{-20}\right)^2}{2 \times 1.67 \times 10^{-27}}$ $= 1.23 \times 10^{-12}\ \mathrm{J}$.`,
        t`In MeV: $\dfrac{1.23 \times 10^{-12}}{1.6 \times 10^{-13}}$ $= 7.66\ \mathrm{MeV}$.`,
      ],
      answer: t`$f = 12.2\ \mathrm{MHz}$, $KE_{max} = 7.66\ \mathrm{MeV}$`,
    },
    visualSpec: t`Animate an ion spiralling out through the dees while the gap's field arrow flips every half-turn; drag B and watch the exit energy change.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks the field across the gap reverses once per revolution.",
      remediation: t`The ion crosses the gap twice per turn, once each way, so the field must reverse every half-turn, $\dfrac{T}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Drops the $2\pi$: takes $\dfrac{m}{qB}$ as the period, or $v = fR$.`,
      remediation: t`One turn is $2\pi$ radians, so $T = \dfrac{2\pi m}{qB}$; at the rim, $v = 2\pi fR$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: t`Drops the $\tfrac{1}{2}$ in the kinetic energy.`,
      remediation: t`$KE = \tfrac{1}{2}mv^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks the ions are speeded up inside the dees.",
      remediation: "The metal dees shield their inside from the electric field. The ion gains energy only in the gap.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks the magnetic field gives the ions their energy.",
      remediation: "The magnetic force is at right angles to the velocity and does no work. It only brings the ion back to the gap.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks a faster oscillator drives the ions round faster.",
      remediation: t`An ion's revolution frequency is fixed at $\dfrac{qB}{2\pi m}$. An oscillator at any other frequency falls out of step with it.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the final energy is set by the voltage across the gap.",
      remediation: t`$KE_{max} = \dfrac{q^2B^2R^2}{2m}$ is set by the field and the dee radius. A larger voltage only means fewer turns.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Takes each reversal of the field as a full cycle of the oscillator.",
      remediation: t`One oscillator cycle has two reversals. Two reversals per turn means one cycle per turn: the oscillator runs at $f = \dfrac{qB}{2\pi m}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.13" },
      stem: t`A cyclotron accelerating protons ($m = 1.67 \times 10^{-27}\ \mathrm{kg}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$) uses a magnetic field of $1.4\ \mathrm{Wb/m^2}$. How often must the electric field between the dees be reversed?`,
      verify: { kind: "value", inputs: { m: "1.67e-27", q: "1.6e-19", B: "1.4" }, params: { ask: "rev" } },
      options: [
        { key: "A", text: t`$3.73 \times 10^{-9}\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M2", value: "3.73000000000000e-9" },
        { key: "B", text: t`$1.17 \times 10^{-8}\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M8", value: "1.17000000000000e-8" },
        { key: "C", text: t`$2.34 \times 10^{-8}\ \mathrm{s}$`, correct: true, value: "2.34000000000000e-8" },
        { key: "D", text: t`$4.68 \times 10^{-8}\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M1", value: "4.68000000000000e-8" },
      ],
      solution: {
        steps: [
          t`$T = \dfrac{2\pi m}{eB}$ $= \dfrac{2\pi \times 1.67 \times 10^{-27}}{1.6 \times 10^{-19} \times 1.4}$ $= 4.68 \times 10^{-8}\ \mathrm{s}$.`,
          t`The proton crosses the gap twice per revolution, so the field must reverse every half period.`,
          t`$\dfrac{T}{2} = 2.34 \times 10^{-8}\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.24" },
      stem: t`A cyclotron accelerates protons ($m = 1.67 \times 10^{-27}\ \mathrm{kg}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$) to a kinetic energy of $5\ \mathrm{MeV}$ in a magnetic field of $2\ \mathrm{T}$. What frequency must the applied alternating voltage have?`,
      verify: { kind: "value", inputs: { m: "1.67e-27", q: "1.6e-19", B: "2" }, params: { ask: "fosc" } },
      options: [
        { key: "A", text: t`$1.92 \times 10^{8}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C03-M2", value: "192000000" },
        { key: "B", text: t`$6.1 \times 10^{7}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C03-M8", value: "61000000" },
        { key: "C", text: t`$3.05 \times 10^{7}\ \mathrm{Hz}$`, correct: true, value: "30500000" },
        { key: "D", text: t`$1.52 \times 10^{7}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C03-M1", value: "15200000" },
      ],
      solution: {
        steps: [
          t`The voltage must keep step with the revolutions, so its frequency is the cyclotron frequency; the energy does not enter.`,
          t`$f = \dfrac{eB}{2\pi m}$ $= \dfrac{1.6 \times 10^{-19} \times 2}{2\pi \times 1.67 \times 10^{-27}}$ $= 3.05 \times 10^{7}\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-fields-current-12-phy/Ex Q.17" },
      stem: t`A cyclotron accelerates protons ($m = 1.67 \times 10^{-27}\ \mathrm{kg}$). Its dees have radius $60\ \mathrm{cm}$ and its oscillator frequency is $10\ \mathrm{MHz}$. With $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$, what kinetic energy do the protons leave with?`,
      verify: { kind: "value", inputs: { m: "1.67e-27", q: "1.6e-19", R_cm: "60", f_MHz: "10" }, params: { ask: "KE" } },
      options: [
        { key: "A", text: t`$29.7\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M1", value: "29.7000000000000" },
        { key: "B", text: t`$0.188\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M2", value: "0.188000000000000" },
        { key: "C", text: t`$14.8\ \mathrm{MeV}$`, correct: false, misconceptionId: "C03-M3", value: "14.8000000000000" },
        { key: "D", text: t`$7.42\ \mathrm{MeV}$`, correct: true, value: "7.42000000000000" },
      ],
      solution: {
        steps: [
          t`The proton's revolution frequency equals the oscillator's, $10^{7}\ \mathrm{Hz}$; at the rim $R = 0.60\ \mathrm{m}$.`,
          t`$v = 2\pi fR$ $= 2\pi \times 10^{7} \times 0.60$ $= 3.77 \times 10^{7}\ \mathrm{m/s}$.`,
          t`$KE = \tfrac{1}{2}mv^2$ $= 1.19 \times 10^{-12}\ \mathrm{J}$.`,
          t`In MeV: $\dfrac{1.19 \times 10^{-12}}{1.6 \times 10^{-13}}$ $= 7.42\ \mathrm{MeV}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`How can the maximum kinetic energy of the protons from a given cyclotron be raised?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "raise" } },
      options: [
        { key: "A", text: t`Run the oscillator faster than the cyclotron frequency`, correct: false, misconceptionId: "C03-M6", value: "faster_osc" },
        { key: "B", text: t`Put a stronger electric field inside the dees`, correct: false, misconceptionId: "C03-M4", value: "field_in_dees" },
        { key: "C", text: t`Use a stronger magnetic field, with the oscillator retuned to match`, correct: true, value: "stronger_B" },
        { key: "D", text: t`Use a larger alternating voltage across the gap`, correct: false, misconceptionId: "C03-M7", value: "more_voltage" },
      ],
      solution: {
        steps: [
          t`$KE_{max} = \dfrac{q^2B^2R^2}{2m}$: for a given cyclotron, only $B$ can change.`,
          t`A stronger field raises $KE_{max}$ as $B^2$; the oscillator must be retuned to the new $\dfrac{qB}{2\pi m}$.`,
          t`The gap voltage changes only the number of turns, not the final energy.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.5(ii)" },
      stem: t`In a cyclotron, where and how often does an ion gain kinetic energy?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gain" } },
      options: [
        { key: "A", text: t`In the gap between the dees, twice in every revolution`, correct: true, value: "at_gap" },
        { key: "B", text: t`Inside each dee, all along its semicircle`, correct: false, misconceptionId: "C03-M4", value: "inside_dee" },
        { key: "C", text: t`From the magnetic field, all along its path`, correct: false, misconceptionId: "C03-M5", value: "from_B" },
        { key: "D", text: t`In the gap between the dees, once in every revolution`, correct: false, misconceptionId: "C03-M1", value: "once_per_rev" },
      ],
      solution: {
        steps: [
          t`Inside the dees there is no electric field, and the magnetic force does no work.`,
          t`The ion gains energy only in the gap, which it crosses twice in each revolution.`,
        ],
      },
    },
  ],
};
