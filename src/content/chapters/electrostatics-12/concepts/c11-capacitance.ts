import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`A camera flash charges up for a few seconds, then dumps its energy in a thousandth of a second. What device stores the charge, and what decides how much it holds?`,
    reveal: t`A **capacitor**: two conductors close together. The charge it holds per volt is its capacitance, $C = \dfrac{Q}{V}$; for parallel plates $C = \dfrac{\varepsilon_0A}{d}$, so big plates close together hold the most.`,
  },
  explanation: {
    intuition: [
      t`A **capacitor** is two conductors, often plates, separated by an insulator.`,
      t`Charging it moves charge $Q$ from one conductor to the other, leaving $+Q$ and $-Q$.`,
      t`The potential difference $V$ between them grows in proportion to $Q$.`,
      t`The **capacitance** $C = \dfrac{Q}{V}$ is the charge stored per volt.`,
      t`Its unit is the **farad**, $1\ \mathrm{F} = 1\ \mathrm{C/V}$: a huge unit, so $\mu\mathrm{F}$ and $\mathrm{pF}$ are common.`,
    ],
    formal: [
      {
        title: "Parallel plate capacitor",
        points: [
          t`Two plates of area $A$, a distance $d$ apart, carry $+Q$ and $-Q$.`,
          t`Between them $E = \dfrac{\sigma}{\varepsilon_0}$ $= \dfrac{Q}{\varepsilon_0A}$, a uniform field.`,
          t`So $V = Ed$ $= \dfrac{Qd}{\varepsilon_0A}$, and $C = \dfrac{Q}{V}$ $= \dfrac{\varepsilon_0A}{d}$.`,
          t`Larger plates or a smaller gap give a larger capacitance.`,
        ],
      },
      {
        title: "Charged and then isolated",
        points: [
          t`Once disconnected, no charge can leave: $Q$ stays the same.`,
          t`Pulling the plates apart makes $C = \dfrac{\varepsilon_0A}{d}$ smaller.`,
          t`So $V = \dfrac{Q}{C}$ grows: the same charge at a higher potential difference.`,
          t`Kept connected to a battery instead, $V$ stays fixed and $Q = CV$ changes.`,
        ],
      },
    ],
    worked: {
      prompt: t`Square plates of side $10\ \mathrm{cm}$ are $0.5\ \mathrm{mm}$ apart in air. Find the capacitance and the charge at $200\ \mathrm{V}$.`,
      steps: [
        t`$A = 0.1^2 = 0.01\ \mathrm{m^2}$ and $d = 5 \times 10^{-4}\ \mathrm{m}$.`,
        t`$C$ $= \dfrac{8.85 \times 10^{-12} \times 0.01}{5 \times 10^{-4}}$ $= 1.77 \times 10^{-10}\ \mathrm{F}$.`,
        t`$Q = CV$ $= 1.77 \times 10^{-10} \times 200$ $= 3.54 \times 10^{-8}\ \mathrm{C}$.`,
      ],
      answer: t`$1.77 \times 10^{-10}\ \mathrm{F}$; $3.54 \times 10^{-8}\ \mathrm{C}$`,
    },
    visualSpec: t`Slide two plates apart and change their area, watching the stored charge per volt rise and fall.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Forgets to multiply the number of electrons by $e$.`,
      remediation: t`The charge moved is $Q = ne$, with $e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Turns $\dfrac{Q}{V}$ upside down.`,
      remediation: t`Capacitance is charge stored per volt: $C = \dfrac{Q}{V}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Multiplies the charge by the potential difference.",
      remediation: t`$C = \dfrac{Q}{V}$: divide the charge by the voltage.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: t`Leaves the area in $\mathrm{cm^2}$.`,
      remediation: t`$1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$: $6\ \mathrm{cm^2}$ $= 6 \times 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Leaves the gap in mm.",
      remediation: t`$3\ \mathrm{mm}$ $= 3 \times 10^{-3}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: t`Turns $\dfrac{A}{d}$ upside down.`,
      remediation: t`Bigger plates hold more charge, and so does a smaller gap: $C = \dfrac{\varepsilon_0A}{d}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Uses the circumference as the plate area.",
      remediation: t`A circular plate's area is $\pi r^2$, not $2\pi r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: t`Forgets the $\pi$ in the area of a circular plate.`,
      remediation: t`$A = \pi r^2$ $= \pi \times 0.08^2 \approx 2.01 \times 10^{-2}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Gives the capacitance instead of the charge.",
      remediation: t`After $C = \dfrac{\varepsilon_0A}{d}$, multiply by the voltage: $Q = CV$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Thinks the potential difference falls along with the capacitance when the charge is fixed.",
      remediation: t`$V = \dfrac{Q}{C}$: with $Q$ fixed, a smaller $C$ means a larger $V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Thinks the charge on an isolated capacitor changes.",
      remediation: t`Disconnected, the plates have nowhere to send or take charge: $Q$ stays the same.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Takes the capacitance as proportional to the plate gap.",
      remediation: t`$C = \dfrac{\varepsilon_0A}{d}$: a wider gap gives a smaller capacitance.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C11-M13",
      mistake: t`Takes the capacitance as proportional to $\dfrac{1}{d^2}$.`,
      remediation: t`$V = Ed$ grows in proportion to $d$, so $C \propto \dfrac{1}{d}$: doubling $d$ halves $C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Thinks the capacitance depends only on the plate area.",
      remediation: t`$C = \dfrac{\varepsilon_0A}{d}$ depends on the gap too.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.15" },
      stem: t`When $10^8$ electrons are moved from one conductor to another, a potential difference of $10\ \mathrm{V}$ appears between them. What is their capacitance? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      verify: { kind: "value", inputs: { N: "10**8", V: "10" }, params: { ask: "electrons" } },
      options: [
        { key: "A", text: t`$1.6 \times 10^{-12}\ \mathrm{F}$`, correct: true, value: "1.60000000000000e-12" },
        { key: "B", text: t`$1 \times 10^{7}\ \mathrm{F}$`, correct: false, misconceptionId: "C11-M1", value: "10000000" },
        { key: "C", text: t`$6.25 \times 10^{11}\ \mathrm{F}$`, correct: false, misconceptionId: "C11-M2", value: "625000000000" },
        { key: "D", text: t`$1.6 \times 10^{-10}\ \mathrm{F}$`, correct: false, misconceptionId: "C11-M3", value: "1.60000000000000e-10" },
      ],
      solution: {
        steps: [
          t`$Q = ne$ $= 10^8 \times 1.6 \times 10^{-19}$ $= 1.6 \times 10^{-11}\ \mathrm{C}$.`,
          t`$C = \dfrac{Q}{V}$ $= \dfrac{1.6 \times 10^{-11}}{10}$ $= 1.6 \times 10^{-12}\ \mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.24" },
      stem: t`An air-filled parallel plate capacitor has plates of area $6\ \mathrm{cm^2}$, $3\ \mathrm{mm}$ apart. What is its capacitance? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { A_cm2: "6", d_mm: "3" }, params: { ask: "plates" } },
      options: [
        { key: "A", text: t`$1.77 \times 10^{-15}\ \mathrm{F}$`, correct: false, misconceptionId: "C11-M5", value: "1.77000000000000e-15" },
        { key: "B", text: t`$4.43 \times 10^{-11}\ \mathrm{F}$`, correct: false, misconceptionId: "C11-M6", value: "4.43000000000000e-11" },
        { key: "C", text: t`$1.77 \times 10^{-12}\ \mathrm{F}$`, correct: true, value: "1.77000000000000e-12" },
        { key: "D", text: t`$1.77 \times 10^{-8}\ \mathrm{F}$`, correct: false, misconceptionId: "C11-M4", value: "1.77000000000000e-8" },
      ],
      solution: {
        steps: [
          t`$A = 6 \times 10^{-4}\ \mathrm{m^2}$, $d = 3 \times 10^{-3}\ \mathrm{m}$.`,
          t`$C$ $= \dfrac{8.85 \times 10^{-12} \times 6 \times 10^{-4}}{3 \times 10^{-3}}$ $= 1.77 \times 10^{-12}\ \mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.1 (v)" },
      stem: t`A parallel plate capacitor has circular plates of radius $8\ \mathrm{cm}$, $1\ \mathrm{mm}$ apart. What charge is on the plates when $100\ \mathrm{V}$ is applied? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { r_cm: "8", d_mm: "1", V: "100" }, params: { ask: "circle" } },
      options: [
        { key: "A", text: t`$4.45 \times 10^{-7}\ \mathrm{C}$`, correct: false, misconceptionId: "C11-M7", value: "4.45000000000000e-7" },
        { key: "B", text: t`$5.66 \times 10^{-9}\ \mathrm{C}$`, correct: false, misconceptionId: "C11-M8", value: "5.66000000000000e-9" },
        { key: "C", text: t`$1.78 \times 10^{-10}\ \mathrm{C}$`, correct: false, misconceptionId: "C11-M9", value: "1.78000000000000e-10" },
        { key: "D", text: t`$1.78 \times 10^{-8}\ \mathrm{C}$`, correct: true, value: "1.78000000000000e-8" },
      ],
      solution: {
        steps: [
          t`$A$ $= \pi \times 0.08^2 \approx 2.01 \times 10^{-2}\ \mathrm{m^2}$.`,
          t`$C$ $= \dfrac{8.85 \times 10^{-12} \times 2.01 \times 10^{-2}}{10^{-3}} \approx 1.78 \times 10^{-10}\ \mathrm{F}$.`,
          t`$Q$ $= CV \approx 1.78 \times 10^{-8}\ \mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.1 (i)" },
      stem: t`A parallel plate capacitor is charged and then disconnected. Its plates are then pulled further apart. What happens to its charge, potential difference and capacitance, in that order?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isolate" } },
      options: [
        { key: "A", text: t`Increases, decreases, decreases`, correct: false, misconceptionId: "C11-M11", value: "up_down_down" },
        { key: "B", text: t`Constant, decreases, increases`, correct: false, misconceptionId: "C11-M12", value: "c_down_up" },
        { key: "C", text: t`Constant, increases, decreases`, correct: true, value: "c_up_down" },
        { key: "D", text: t`Constant, decreases, decreases`, correct: false, misconceptionId: "C11-M10", value: "c_down_down" },
      ],
      solution: {
        steps: [
          t`Disconnected, $Q$ is constant; a wider gap makes $C = \dfrac{\varepsilon_0A}{d}$ smaller.`,
          t`So $V = \dfrac{Q}{C}$ increases: constant, increases, decreases.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.8.B" },
      stem: t`A parallel plate air capacitor has a capacitance of $20\ \mu\mathrm{F}$. What is its capacitance when the distance between its plates is doubled?`,
      verify: { kind: "value", inputs: { C_uF: "20" }, params: { ask: "double" } },
      options: [
        { key: "A", text: t`$40\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C11-M12", value: "40" },
        { key: "B", text: t`$5\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C11-M13", value: "5" },
        { key: "C", text: t`$20\ \mathrm{\mu F}$`, correct: false, misconceptionId: "C11-M14", value: "20" },
        { key: "D", text: t`$10\ \mathrm{\mu F}$`, correct: true, value: "10" },
      ],
      solution: {
        steps: [
          t`$C \propto \dfrac{1}{d}$ with the area and the medium unchanged.`,
          t`Doubling $d$ halves $C$: $10\ \mu\mathrm{F}$.`,
        ],
      },
    },
  ],
};
