import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`A battery pushes charge $Q$ through a voltage $V$, doing work $QV$, to charge a capacitor. Yet the capacitor stores only $\dfrac{1}{2}QV$. Where did the other half go?`,
    reveal: t`Into heat and radiation in the wires while charging. The capacitor's voltage rose from $0$ to $V$ as it filled, so on average each coulomb was stored at only half the final voltage.`,
  },
  explanation: {
    intuition: [
      t`Charging a capacitor means moving charge from one plate to the other against a growing voltage.`,
      t`The first bit of charge moves at almost no voltage; the last at the full $V$.`,
      t`So the work done, and the energy stored, is the charge times the average voltage, $\dfrac{1}{2}QV$.`,
      t`That energy sits in the electric field between the plates.`,
    ],
    formal: [
      {
        title: "Stored energy",
        points: [
          t`Moving $dq$ at voltage $\dfrac{q}{C}$ takes work $\dfrac{q}{C}dq$; adding up from $0$ to $Q$ gives $\dfrac{Q^2}{2C}$.`,
          t`So $U = \dfrac{Q^2}{2C}$ $= \dfrac{1}{2}CV^2$ $= \dfrac{1}{2}QV$.`,
          t`For a fixed capacitor, doubling $Q$ or $V$ makes the energy four times as large.`,
          t`The battery supplies $QV$: half is stored and half lost while charging.`,
        ],
      },
      {
        title: "Energy density",
        points: [
          t`Between parallel plates, $U = \dfrac{1}{2}CV^2$ $= \dfrac{1}{2}\varepsilon_0E^2 \times Ad$.`,
          t`So the energy per unit volume of the field is $u = \dfrac{1}{2}\varepsilon_0E^2$.`,
          t`In a dielectric of constant $k$, $u = \dfrac{1}{2}k\varepsilon_0E^2$.`,
        ],
      },
      {
        title: "Sharing charge",
        points: [
          t`Join a charged capacitor to an uncharged one: the charge spreads until both reach a common voltage.`,
          t`The total charge is conserved, but some energy is lost as heat and radiation.`,
          t`Find the energy before and after, using $U = \dfrac{Q^2}{2C}$ with the total charge and total capacitance.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $4\ \mu\mathrm{F}$ capacitor is charged to $200\ \mathrm{V}$. Find the energy stored and the charge, and the energy the battery supplied.`,
      steps: [
        t`$U = \dfrac{1}{2}CV^2$ $= \dfrac{1}{2} \times 4 \times 10^{-6} \times 200^2$ $= 0.08\ \mathrm{J}$.`,
        t`$Q = CV$ $= 4 \times 10^{-6} \times 200$ $= 8 \times 10^{-4}\ \mathrm{C}$.`,
        t`The battery supplied $QV = 0.16\ \mathrm{J}$: twice what is stored.`,
      ],
      answer: t`$0.08\ \mathrm{J}$ stored; $8 \times 10^{-4}\ \mathrm{C}$; $0.16\ \mathrm{J}$ supplied`,
    },
    visualSpec: t`Fill a capacitor charge by charge and shade the triangle under its V–Q line: its area is the stored energy.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: "Takes the energy as proportional to the charge.",
      remediation: t`$U = \dfrac{Q^2}{2C}$: energy goes as the square of the charge.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M2",
      mistake: "Thinks more charge means less energy.",
      remediation: t`More charge means more work done against the plates' field: $U = \dfrac{Q^2}{2C}$ grows with $Q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: "Thinks the stored energy depends only on the capacitance.",
      remediation: t`$C$ is fixed for one capacitor, but $U = \dfrac{Q^2}{2C}$ depends on how much charge it holds.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C14-M4",
      mistake: "Gives the final energy instead of the energy lost.",
      remediation: "Energy lost = energy before − energy after.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M5",
      mistake: "Takes all the initial energy as lost.",
      remediation: "Most of the energy stays stored in the two capacitors; only the difference is lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M6",
      mistake: "Takes half the initial energy as lost.",
      remediation: t`Half is lost only when two equal capacitors share; work it out from $U = \dfrac{Q^2}{2C}$ before and after.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M7",
      mistake: "Confuses the energy supplied with the energy dissipated.",
      remediation: t`The battery supplies $QV$; the capacitor stores $\dfrac{1}{2}QV$; the other $\dfrac{1}{2}QV$ is dissipated. Stored : dissipated $= 1 : 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M8",
      mistake: "Thinks twice as much energy is stored as is dissipated.",
      remediation: t`Of the $QV$ supplied, exactly half is stored and half dissipated.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M9",
      mistake: "Thinks no energy is dissipated while charging.",
      remediation: t`The capacitor stores only $\dfrac{1}{2}QV$ of the $QV$ the battery supplies: the rest heats the wires.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M10",
      mistake: "Treats the charge as fixed though the voltage is held constant.",
      remediation: t`With the battery holding $V$, use $U = \dfrac{1}{2}CV^2$: a smaller $C$ means less energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M11",
      mistake: "Gives the air capacitor's energy as the change.",
      remediation: t`The change is the energy with the slab minus the energy without it: $\dfrac{1}{2}\left(kC - C\right)V^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M12",
      mistake: t`Forgets the $\dfrac{1}{2}$.`,
      remediation: t`The voltage grows from $0$ while charging, so the energy is $\dfrac{1}{2}CV^2$, and the density $\dfrac{1}{2}\varepsilon_0E^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M13",
      mistake: "Forgets the dielectric constant in the energy density.",
      remediation: t`In a dielectric, $u = \dfrac{1}{2}k\varepsilon_0E^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M14",
      mistake: t`Leaves the volume in $\mathrm{cm^3}$.`,
      remediation: t`$1\ \mathrm{cm^3}$ $= 10^{-6}\ \mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M15",
      mistake: "Turns the voltage ratio upside down.",
      remediation: t`The parallel combination has the larger capacitance, so it needs the smaller voltage: $V_p < V_s$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M16",
      mistake: "Forgets the square root.",
      remediation: t`$\dfrac{V_p^2}{V_s^2}$ $= \dfrac{C_s}{C_p}$ $= \dfrac{2}{9}$; take the square root: $\dfrac{\sqrt{2}}{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M17",
      mistake: "Thinks equal energies need equal voltages.",
      remediation: t`$U = \dfrac{1}{2}CV^2$ also depends on $C$, which differs between series and parallel.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.5(vii)" },
      stem: t`The charge on a $10\ \mu\mathrm{F}$ capacitor is doubled. What happens to the energy stored in it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "double_q" } },
      options: [
        { key: "A", text: t`It stays the same, as the capacitance is unchanged`, correct: false, misconceptionId: "C14-M3", value: "same" },
        { key: "B", text: t`It becomes four times as large`, correct: true, value: "four" },
        { key: "C", text: t`It doubles`, correct: false, misconceptionId: "C14-M1", value: "two" },
        { key: "D", text: t`It halves`, correct: false, misconceptionId: "C14-M2", value: "half" },
      ],
      solution: {
        steps: [
          t`$U = \dfrac{Q^2}{2C}$ with $C$ unchanged, so $U \propto Q^2$.`,
          t`Doubling $Q$ makes $U$ four times as large.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.8" },
      stem: t`A $6\ \mu\mathrm{F}$ capacitor is charged to $300\ \mathrm{V}$, disconnected, and then joined to an uncharged $3\ \mu\mathrm{F}$ capacitor. How much energy is lost as heat and radiation?`,
      verify: { kind: "value", inputs: { C1_uF: "6", C2_uF: "3", V: "300" }, params: { ask: "share" } },
      options: [
        { key: "A", text: t`$0.09\ \mathrm{J}$`, correct: true, value: "0.0900000000000000" },
        { key: "B", text: t`$0.18\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M4", value: "0.180000000000000" },
        { key: "C", text: t`$0.27\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M5", value: "0.270000000000000" },
        { key: "D", text: t`$0.135\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M6", value: "0.135000000000000" },
      ],
      solution: {
        steps: [
          t`Before: $U_1$ $= \dfrac{1}{2} \times 6 \times 10^{-6} \times 300^2$ $= 0.27\ \mathrm{J}$, with $Q = 1.8 \times 10^{-3}\ \mathrm{C}$.`,
          t`After: $U_2$ $= \dfrac{Q^2}{2\left(9 \times 10^{-6}\right)}$ $= 0.18\ \mathrm{J}$.`,
          t`Lost: $0.27 - 0.18 = 0.09\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.1 (iii)" },
      stem: t`A capacitor is charged from a battery. What is the ratio of the energy stored in the capacitor to the energy dissipated during charging?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1 : 1$`, correct: true, value: "one_one" },
        { key: "B", text: t`$1 : 2$`, correct: false, misconceptionId: "C14-M7", value: "one_two" },
        { key: "C", text: t`$2 : 1$`, correct: false, misconceptionId: "C14-M8", value: "two_one" },
        { key: "D", text: t`All the energy supplied is stored; none is dissipated`, correct: false, misconceptionId: "C14-M9", value: "none_lost" },
      ],
      solution: {
        steps: [
          t`The battery supplies $QV$; the capacitor stores $\dfrac{1}{2}QV$.`,
          t`The other $\dfrac{1}{2}QV$ is dissipated: the ratio is $1 : 1$.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.19" },
      stem: t`A $3 \times 10^{-9}\ \mathrm{F}$ air capacitor is completely filled with a slab of dielectric constant $3$, and its potential difference is held at $400\ \mathrm{V}$. What happens to the stored energy when the slab is removed?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "slab" } },
      options: [
        { key: "A", text: t`It increases by $1.44 \times 10^{-3}\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M10", value: "up_1440" },
        { key: "B", text: t`It decreases by $2.4 \times 10^{-4}\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M11", value: "down_240" },
        { key: "C", text: t`It decreases by $9.6 \times 10^{-4}\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M12", value: "down_960" },
        { key: "D", text: t`It decreases by $4.8 \times 10^{-4}\ \mathrm{J}$`, correct: true, value: "down_480" },
      ],
      solution: {
        steps: [
          t`With the slab: $\dfrac{1}{2} \times 9 \times 10^{-9} \times 400^2$ $= 7.2 \times 10^{-4}\ \mathrm{J}$.`,
          t`Without it: $\dfrac{1}{2} \times 3 \times 10^{-9} \times 400^2$ $= 2.4 \times 10^{-4}\ \mathrm{J}$.`,
          t`The energy decreases by $4.8 \times 10^{-4}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.7(iii)" },
      stem: t`A marble cube of side $1\ \mathrm{cm}$, dielectric constant $8$, sits in an electric field of $300\ \mathrm{V/m}$ inside it. How much energy does the cube contain? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { a_cm: "1", k: "8", E: "300" }, params: { ask: "density" } },
      options: [
        { key: "A", text: t`$6.37 \times 10^{-12}\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M12", value: "6.37000000000000e-12" },
        { key: "B", text: t`$3.98 \times 10^{-13}\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M13", value: "3.98000000000000e-13" },
        { key: "C", text: t`$3.19 \times 10^{-6}\ \mathrm{J}$`, correct: false, misconceptionId: "C14-M14", value: "3.19000000000000e-6" },
        { key: "D", text: t`$3.19 \times 10^{-12}\ \mathrm{J}$`, correct: true, value: "3.19000000000000e-12" },
      ],
      solution: {
        steps: [
          t`$u = \dfrac{1}{2}k\varepsilon_0E^2$ $= \dfrac{1}{2} \times 8 \times 8.85 \times 10^{-12} \times 300^2$.`,
          t`$u \approx 3.19 \times 10^{-6}\ \mathrm{J/m^3}$; the volume is $10^{-6}\ \mathrm{m^3}$.`,
          t`Energy $\approx 3.19 \times 10^{-12}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.6" },
      stem: t`Two capacitors with capacitances in the ratio $1 : 2$ are joined first in parallel and then in series. What must be the ratio $V_p : V_s$ of the voltages applied so that both store the same energy?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "vratio" } },
      options: [
        { key: "A", text: t`$2 : 9$`, correct: false, misconceptionId: "C14-M16", value: "two_nine" },
        { key: "B", text: t`$1 : 1$`, correct: false, misconceptionId: "C14-M17", value: "one_one" },
        { key: "C", text: t`$\sqrt{2} : 3$`, correct: true, value: "r2_3" },
        { key: "D", text: t`$3 : \sqrt{2}$`, correct: false, misconceptionId: "C14-M15", value: "three_r2" },
      ],
      solution: {
        steps: [
          t`With $C$ and $2C$: $C_p = 3C$ and $C_s = \dfrac{2C}{3}$.`,
          t`$\dfrac{1}{2}C_pV_p^2$ $= \dfrac{1}{2}C_sV_s^2$ gives $\dfrac{V_p^2}{V_s^2}$ $= \dfrac{2}{9}$.`,
          t`$V_p : V_s = \sqrt{2} : 3$.`,
        ],
      },
    },
  ],
};
