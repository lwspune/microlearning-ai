import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Two identical Daniell cells can deliver twice the energy of one, yet each still reads $1.10$ V. How can the energy double while the potential stays the same?`,
    reveal: t`Potential is energy per unit charge, so it does not depend on how much reacts. The energy, $\Delta G = -nFE$, grows with the amount reacting through $n$; $E$ does not.`,
  },
  explanation: {
    intuition: [
      t`A galvanic cell turns the Gibbs energy of its reaction into electrical work.`,
      t`The **faraday**, $F = 96500\ \mathrm{C}$, is the charge on one mole of electrons.`,
      t`The most electrical work a cell can do is charge times potential: $nFE_{cell}$.`,
      t`The work is done at the expense of Gibbs energy, so $\Delta G = -nFE_{cell}$.`,
      t`A positive $E_{cell}$ gives a negative $\Delta G$: the reaction is spontaneous.`,
      t`Since $\Delta G^0$ also fixes the equilibrium constant, $E^0_{cell}$ tells how far the reaction goes.`,
    ],
    formal: [
      {
        title: "Gibbs energy and cell potential",
        points: [
          t`Electrical work $= -\Delta G$, and its largest value is $nFE_{cell}$.`,
          t`So $\Delta G = -nFE_{cell}$; under standard conditions $\Delta G^0 = -nFE^0_{cell}$.`,
          t`$n$ is the number of electrons transferred in the balanced cell reaction.`,
          t`With $E$ in volts and $F$ in $\mathrm{C\,mol^{-1}}$, $\Delta G$ comes out in joules; divide by $1000$ for kJ.`,
          t`$E^0_{cell} > 0$ means $\Delta G^0 < 0$: the cell reaction is spontaneous.`,
        ],
      },
      {
        title: "Intensive and extensive",
        points: [
          t`Doubling the cell equation doubles $n$, so $\Delta G^0$ doubles: Gibbs energy is **extensive**.`,
          t`But $E^0_{cell} = -\dfrac{\Delta G^0}{nF}$ does not change: cell potential is **intensive**.`,
          t`That is why $E^0$ is never multiplied when a half reaction is multiplied.`,
        ],
      },
      {
        title: "Cell potential and K",
        points: [
          t`From thermodynamics, $\Delta G^0 = -2.303\,RT\log_{10} K$.`,
          t`Equating with $-nFE^0_{cell}$: $E^0_{cell} = \dfrac{2.303\,RT}{nF}\log_{10} K$.`,
          t`At $298$ K, $E^0_{cell} = \dfrac{0.0592}{n}\log_{10} K$.`,
          t`So $\log_{10} K = \dfrac{nE^0_{cell}}{0.0592}$; its antilog is $K$.`,
          t`A positive $E^0_{cell}$ gives $K > 1$; even a few tenths of a volt make $K$ huge.`,
        ],
      },
    ],
    worked: {
      prompt: t`$E^0_{cell}$ of the Daniell cell, $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$, is $1.10$ V. Find $\Delta G^0$ and $K$ at $25^\circ\mathrm{C}$.`,
      steps: [
        t`Zinc gives two electrons to $\ce{Cu^2+}$, so $n = 2$.`,
        t`$\Delta G^0 = -2 \times 96500 \times 1.10$ $= -212300$ J $= -212$ kJ.`,
        t`$\log_{10} K = \dfrac{2 \times 1.10}{0.0592}$ $= 37.16$.`,
        t`$K = 10^{37.16}$ $= 1.45 \times 10^{37}$.`,
      ],
      answer: t`$\Delta G^0 = -212$ kJ and $K = 1.45 \times 10^{37}$`,
    },
    visualSpec: t`Slide E°cell from negative to positive and watch ΔG° fall through zero while log K climbs past zero.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Drops the minus sign in $\Delta G^0 = -nFE^0_{cell}$.`,
      remediation: t`A cell with a positive $E^0$ does work, so its Gibbs energy falls: $\Delta G^0 = -nFE^0_{cell}$, and $\log_{10} K = +\dfrac{nE^0}{0.0592}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Uses the wrong $n$.`,
      remediation: t`$n$ is the number of electrons transferred in the balanced cell reaction, found by balancing the two half reactions.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Reports the joules as kilojoules.",
      remediation: t`$nFE$ in coulombs times volts gives joules; divide by $1000$ for kJ.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Gives $\log_{10} K$ as the answer for $K$.`,
      remediation: t`$\dfrac{nE^0}{0.0592}$ is $\log_{10} K$; $K$ is its antilog, $10^{nE^0/0.0592}$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C09-M5",
      mistake: t`Treats $E^0$ as extensive.`,
      remediation: t`Multiplying a reaction multiplies $\Delta G^0$ and $n$ together, so $E^0 = -\dfrac{\Delta G^0}{nF}$ stays the same.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M6",
      mistake: t`Uses $\ln K$ with the factor $0.0592$.`,
      remediation: t`$0.0592$ V already contains the $2.303$ that turns $\ln$ into $\log_{10}$: use $\log_{10} K$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (vii)" },
      stem: t`For the reaction $\ce{Ni(s) + Cu^2+(aq)}$ $\ce{-> Ni^2+(aq) + Cu(s)}$, with both ions at $1\ \mathrm{M}$, $E^0_{cell} = 0.57$ V. Taking $F = 96500\ \mathrm{C\,mol^{-1}}$, $\Delta G^0$ of the reaction is`,
      verify: { kind: "value", inputs: { E0: "0.57", n: "2", nw: "1" }, params: { ask: "dG" } },
      options: [
        { key: "A", text: t`$-55.0\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M2", value: "-55" },
        { key: "B", text: t`$-1.10 \times 10^{5}\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M3", value: "-110000" },
        { key: "C", text: t`$-110\ \mathrm{kJ}$`, correct: true, value: "-110" },
        { key: "D", text: t`$110\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M1", value: "110" },
      ],
      solution: {
        steps: [
          t`$\ce{Ni -> Ni^2+ + 2e-}$, so $n = 2$.`,
          t`$\Delta G^0 = -2 \times 96500 \times 0.57$ $= -110010$ J $\approx -110$ kJ.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#18" },
      stem: t`With $E^0_{Cd} = -0.403$ V, $E^0_{Sn} = -0.136$ V and $F = 96500\ \mathrm{C\,mol^{-1}}$, the standard Gibbs energy change at $25^\circ\mathrm{C}$ for the cell reaction $\ce{Cd(s) + Sn^2+(aq)}$ $\ce{-> Cd^2+(aq) + Sn(s)}$ is`,
      verify: { kind: "value", inputs: { Ec: "-0.136", Ea: "-0.403", n: "2", nw: "1" }, params: { ask: "dG" } },
      options: [
        { key: "A", text: t`$-51.5\ \mathrm{kJ}$`, correct: true, value: "-51.5000000000000" },
        { key: "B", text: t`$51.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M1", value: "51.5000000000000" },
        { key: "C", text: t`$-25.8\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M2", value: "-25.8000000000000" },
        { key: "D", text: t`$-51500\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M3", value: "-51500" },
      ],
      solution: {
        steps: [
          t`$E^0_{cell} = E^0_{Sn} - E^0_{Cd}$ $= -0.136 + 0.403 = 0.267$ V, with $n = 2$.`,
          t`$\Delta G^0 = -2 \times 96500 \times 0.267$ $= -51531$ J $= -51.5$ kJ.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.12" },
      stem: t`$E^0_{cell}$ for $\ce{Cu(s) + 2Ag+(aq)}$ $\ce{-> Cu^2+(aq) + 2Ag(s)}$ is $0.46$ V. Its equilibrium constant at $25^\circ\mathrm{C}$ is`,
      verify: { kind: "value", inputs: { E0: "0.46", n: "2", nw: "1" }, params: { ask: "K" } },
      options: [
        { key: "A", text: t`$2.88 \times 10^{-16}$`, correct: false, misconceptionId: "C09-M1", value: "2.88000000000000e-16" },
        { key: "B", text: t`$5.89 \times 10^{7}$`, correct: false, misconceptionId: "C09-M2", value: "58900000" },
        { key: "C", text: t`$15.5$`, correct: false, misconceptionId: "C09-M4", value: "15.5000000000000" },
        { key: "D", text: t`$3.47 \times 10^{15}$`, correct: true, value: "3470000000000000" },
      ],
      solution: {
        steps: [
          t`Two $\ce{Ag+}$ ions take one electron each, so $n = 2$.`,
          t`$\log_{10} K = \dfrac{2 \times 0.46}{0.0592}$ $= 15.54$.`,
          t`$K = 10^{15.54}$ $= 3.47 \times 10^{15}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (iv)" },
      stem: t`The equilibrium constant of the reaction $\ce{2Cu+(aq) -> Cu^2+(aq) + Cu(s)}$ is $1.2 \times 10^6$ at $25^\circ\mathrm{C}$. The standard potential of the cell in which it takes place is`,
      verify: { kind: "value", inputs: { K: "1.2e6", n: "1", nw: "2" }, params: { ask: "E_K" } },
      options: [
        { key: "A", text: t`$0.360\ \mathrm{V}$`, correct: true, value: "0.360000000000000" },
        { key: "B", text: t`$-0.360\ \mathrm{V}$`, correct: false, misconceptionId: "C09-M1", value: "-0.360000000000000" },
        { key: "C", text: t`$0.180\ \mathrm{V}$`, correct: false, misconceptionId: "C09-M2", value: "0.180000000000000" },
        { key: "D", text: t`$0.829\ \mathrm{V}$`, correct: false, misconceptionId: "C09-M6", value: "0.829000000000000" },
      ],
      solution: {
        steps: [
          t`One $\ce{Cu+}$ gives one electron to the other, so $n = 1$.`,
          t`$E^0_{cell} = 0.0592$ $\times \log_{10}(1.2 \times 10^6)$.`,
          t`$E^0_{cell} = 0.0592 \times 6.08$ $= 0.360$ V.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (viii)" },
      stem: t`Which of the following is not correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "statement" } },
      options: [
        { key: "A", text: t`In $\Delta G^0 = -nFE^0_{cell}$, $n$ is the number of electrons transferred in the balanced cell reaction`, correct: false, misconceptionId: "C09-M2", value: "n_balanced_statement" },
        { key: "B", text: t`Electrode potential and cell potential are intensive properties`, correct: false, misconceptionId: "C09-M5", value: "E_intensive_statement" },
        { key: "C", text: t`If a half reaction is multiplied by a number, its $E^0$ is multiplied by the same number`, correct: true, value: "E_scaled_statement" },
        { key: "D", text: t`The electrical work done by a cell equals $-\Delta G$`, correct: false, misconceptionId: "C09-M1", value: "work_minus_dG_statement" },
      ],
      solution: {
        steps: [
          t`$E^0$ is intensive: multiplying a half reaction leaves its $E^0$ unchanged, so that statement is wrong.`,
          t`The others are correct: work $= -\Delta G$, $n$ comes from the balanced reaction, and potentials are intensive.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "authored" },
      stem: t`$E^0_{cell}$ for $\ce{Mg(s) + Sn^2+(aq)}$ $\ce{-> Mg^2+(aq) + Sn(s)}$ is $2.23$ V. Its equilibrium constant at $25^\circ\mathrm{C}$ is`,
      verify: { kind: "value", inputs: { E0: "2.23", n: "2", nw: "1" }, params: { ask: "K" } },
      options: [
        { key: "A", text: t`$5.23 \times 10^{32}$`, correct: false, misconceptionId: "C09-M6", value: "523000000000000008429333953642496" },
        { key: "B", text: t`$2.18 \times 10^{75}$`, correct: true, value: "2180000000000000173296367148469495828206325169926080017589690405050703151104" },
        { key: "C", text: t`$4.59 \times 10^{-76}$`, correct: false, misconceptionId: "C09-M1", value: "4.59000000000000e-76" },
        { key: "D", text: t`$75.3$`, correct: false, misconceptionId: "C09-M4", value: "75.3000000000000" },
      ],
      solution: {
        steps: [
          t`Magnesium gives two electrons to $\ce{Sn^2+}$, so $n = 2$.`,
          t`$\log_{10} K = \dfrac{2 \times 2.23}{0.0592}$ $= 75.34$.`,
          t`$K = 10^{75.34}$ $= 2.18 \times 10^{75}$.`,
        ],
      },
    },
  ],
};
