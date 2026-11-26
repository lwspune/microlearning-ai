import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Rest an electric toothbrush on its stand and it charges, with no metal contacts between them. How does energy cross the gap?`,
    reveal: t`Through mutual induction. An alternating current in a coil in the stand sends a changing flux through a coil in the handle, and that changing flux induces an emf there: $e_2 = -M\dfrac{dI_1}{dt}$.`,
  },
  explanation: {
    intuition: [
      t`A current in one coil sets up a flux, and some of it threads a nearby coil.`,
      t`Change the first coil's current and that flux changes, inducing an emf in the second coil: **mutual induction**.`,
      t`The **mutual inductance** $M$ says how much flux linkage one coil's current gives the other.`,
      t`It works both ways: the same $M$ links coil 2's current to coil 1.`,
    ],
    formal: [
      {
        title: "Mutual inductance",
        points: [
          t`The flux linkage of coil 2 is proportional to the current in coil 1: $N_2\Phi_2 = MI_1$.`,
          t`So $M = \dfrac{N_2\Phi_2}{I_1}$, in henry; the same $M$ gives $N_1\Phi_1 = MI_2$.`,
          t`$M$ depends on the coils' shapes, turns, separation, orientation and core.`,
        ],
      },
      {
        title: "The induced emf",
        points: [
          t`By Faraday's law, $e_2$ $= -\dfrac{d\left(N_2\Phi_2\right)}{dt}$ $= -M\dfrac{dI_1}{dt}$.`,
          t`For a steady change, $|e_2|$ $= M\dfrac{\Delta I_1}{\Delta t}$; and $M = \dfrac{|e_2|}{dI_1/dt}$.`,
          t`The change of flux linkage is $M\,\Delta I_1$.`,
        ],
      },
      {
        title: "A coil round a solenoid",
        points: [
          t`A long solenoid of $N_1$ turns, length $l$, area $A$: $B = \dfrac{\mu_0N_1I_1}{l}$ inside.`,
          t`A coil of $N_2$ turns round its middle links $N_2BA$.`,
          t`So $M = \dfrac{\mu_0N_1N_2A}{l}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`An emf of $96.0\ \mathrm{mV}$ is induced in a coil while the current in a nearby coil rises at $1.20\ \mathrm{A/s}$. Find their mutual inductance.`,
      steps: [
        t`$M = \dfrac{|e|}{dI/dt}$.`,
        t`$M$ $= \dfrac{96.0 \times 10^{-3}}{1.20}$.`,
        t`$M = 0.08\ \mathrm{H}$ $= 80\ \mathrm{mH}$.`,
      ],
      answer: t`$80\ \mathrm{mH}$`,
    },
    visualSpec: t`Ramp the current in one coil and watch flux thread a neighbouring coil and drive a current round it.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Divides by the time, giving the emf instead.",
      remediation: t`The change of flux linkage is $M\,\Delta I$; dividing by $\Delta t$ gives the emf, in volts.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Divides $M$ by the change in current.`,
      remediation: t`$N_2\Phi_2 = MI_1$, so the change is $M\,\Delta I_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Multiplies by the time instead of dividing.",
      remediation: t`The emf depends on the rate, $\dfrac{\Delta I}{\Delta t}$: divide by the time.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: t`Reads $\mathrm{mH}$ as $\mathrm{H}$.`,
      remediation: t`$1\ \mathrm{mH}$ $= 10^{-3}\ \mathrm{H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Adds the two currents.",
      remediation: t`Only the change matters: $\Delta I = 5 - 1 = 4\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Uses one value of the current instead of the change.",
      remediation: t`The emf depends on how much the current changes: $\Delta I = 5 - 1 = 4\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Multiplies the emf by the rate.",
      remediation: t`$|e| = M\dfrac{dI}{dt}$, so $M = \dfrac{|e|}{dI/dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Turns the ratio upside down.",
      remediation: t`$M$ is emf per unit rate of change of current: $\dfrac{|e|}{dI/dt}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: t`Reads $\mathrm{mV}$ as $\mathrm{V}$.`,
      remediation: t`$1\ \mathrm{mV}$ $= 10^{-3}\ \mathrm{V}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Forgets to divide by the time.",
      remediation: t`$|e| = M\dfrac{\Delta I}{\Delta t}$: a fast cut-off gives a large emf.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Thinks a current falling to zero induces nothing.",
      remediation: t`What counts is the change: $4\ \mathrm{A}$ to $0$ is a change of $4\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Uses the solenoid's self-inductance.",
      remediation: t`The flux threads the $N_2$ turns of the small coil, so $N_2$ enters, not a second $N_1$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M13",
      mistake: t`Multiplies by $l$.`,
      remediation: t`$B = \dfrac{\mu_0N_1I}{l}$: the length divides.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: t`Forgets $N_1$.`,
      remediation: t`The solenoid's field $\dfrac{\mu_0N_1I}{l}$ grows with its turns $N_1$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.6" },
      stem: t`Two neighbouring coils have a mutual inductance of $1.5\ \mathrm{H}$. The current in one changes from $0$ to $10\ \mathrm{A}$ in $0.2\ \mathrm{s}$. By how much does the flux linkage with the other coil change?`,
      verify: { kind: "value", inputs: { M: "1.5", I1a: "0", I1b: "10", t: "0.2" }, params: { ask: "link" } },
      options: [
        { key: "A", text: t`$15\ \mathrm{Wb}$`, correct: true, value: "15" },
        { key: "B", text: t`$75\ \mathrm{Wb}$`, correct: false, misconceptionId: "C11-M1", value: "75" },
        { key: "C", text: t`$0.15\ \mathrm{Wb}$`, correct: false, misconceptionId: "C11-M2", value: "0.150000000000000" },
        { key: "D", text: t`$3\ \mathrm{Wb}$`, correct: false, misconceptionId: "C11-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`$\Delta\left(N_2\Phi_2\right)$ $= M\,\Delta I_1$.`,
          t`$= 1.5 \times 10 = 15\ \mathrm{Wb}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.12" },
      stem: t`Two coils have a mutual inductance of $10\ \mathrm{mH}$. The current in one falls from $5\ \mathrm{A}$ to $1\ \mathrm{A}$ in $0.2\ \mathrm{s}$. What is the size of the emf induced in the other?`,
      verify: { kind: "value", inputs: { M_mH: "10", I1a: "5", I1b: "1", t: "0.2" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$0.3\ \mathrm{V}$`, correct: false, misconceptionId: "C11-M5", value: "0.300000000000000" },
        { key: "B", text: t`$0.05\ \mathrm{V}$`, correct: false, misconceptionId: "C11-M6", value: "0.0500000000000000" },
        { key: "C", text: t`$0.2\ \mathrm{V}$`, correct: true, value: "0.200000000000000" },
        { key: "D", text: t`$200\ \mathrm{V}$`, correct: false, misconceptionId: "C11-M4", value: "200" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta I}{\Delta t}$ $= \dfrac{5 - 1}{0.2}$ $= 20\ \mathrm{A/s}$.`,
          t`$|e| = M\dfrac{\Delta I}{\Delta t}$ $= 10 \times 10^{-3} \times 20$ $= 0.2\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.25" },
      stem: t`An emf of $91\ \mathrm{mV}$ is induced in a coil when the current in a nearby coil is rising at $1.3\ \mathrm{A/s}$. What is the mutual inductance of the pair?`,
      verify: { kind: "value", inputs: { e_mV: "91", r: "1.3" }, params: { ask: "M" } },
      options: [
        { key: "A", text: t`$118\ \mathrm{mH}$`, correct: false, misconceptionId: "C11-M7", value: "118" },
        { key: "B", text: t`$14300\ \mathrm{mH}$`, correct: false, misconceptionId: "C11-M8", value: "14300" },
        { key: "C", text: t`$70000\ \mathrm{mH}$`, correct: false, misconceptionId: "C11-M9", value: "70000" },
        { key: "D", text: t`$70\ \mathrm{mH}$`, correct: true, value: "70" },
      ],
      solution: {
        steps: [
          t`$M = \dfrac{|e|}{dI/dt}$ $= \dfrac{91 \times 10^{-3}}{1.3}$.`,
          t`$M = 0.07\ \mathrm{H}$ $= 70\ \mathrm{mH}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.5(vii)" },
      stem: t`The mutual inductance of a primary and a secondary coil is $2\ \mathrm{H}$. A current of $4\ \mathrm{A}$ in the primary is cut off in $2.5 \times 10^{-4}\ \mathrm{s}$. What is the size of the emf induced in the secondary?`,
      verify: { kind: "value", inputs: { M_mH: "2000", I1a: "4", I1b: "0", t: "2.5e-4" }, params: { ask: "emf" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{V}$`, correct: false, misconceptionId: "C11-M10", value: "8" },
        { key: "B", text: t`$0\ \mathrm{V}$`, correct: false, misconceptionId: "C11-M11", value: "0" },
        { key: "C", text: t`$32000\ \mathrm{V}$`, correct: true, value: "32000" },
        { key: "D", text: t`$0.002\ \mathrm{V}$`, correct: false, misconceptionId: "C11-M3", value: "0.00200000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\Delta I}{\Delta t}$ $= \dfrac{4}{2.5 \times 10^{-4}}$ $= 1.6 \times 10^4\ \mathrm{A/s}$.`,
          t`$|e| = 2 \times 1.6 \times 10^4$ $= 3.2 \times 10^4\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/em-induction-12-phy/Ex Q.14" },
      stem: t`A long solenoid of length $l$ and cross-section $A$ has $N_1$ turns. A small coil of $N_2$ turns is wound round its middle. What is their mutual inductance?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{\mu_0N_1^2A}{l}$`, correct: false, misconceptionId: "C11-M12", value: "N1sq" },
        { key: "B", text: t`$\mu_0N_1N_2Al$`, correct: false, misconceptionId: "C11-M13", value: "times_l" },
        { key: "C", text: t`$\dfrac{\mu_0N_2A}{l}$`, correct: false, misconceptionId: "C11-M14", value: "no_N1" },
        { key: "D", text: t`$\dfrac{\mu_0N_1N_2A}{l}$`, correct: true, value: "N1N2A_over_l" },
      ],
      solution: {
        steps: [
          t`Inside the solenoid, $B = \dfrac{\mu_0N_1I_1}{l}$; the small coil links $N_2BA$.`,
          t`$M = \dfrac{N_2BA}{I_1}$ $= \dfrac{\mu_0N_1N_2A}{l}$.`,
        ],
      },
    },
  ],
};
