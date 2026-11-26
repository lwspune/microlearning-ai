import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A fresh cell and a nearly used one have the same electrodes and the same $E^0_{cell}$. Why does the used one give a lower voltage?`,
    reveal: t`As a cell runs, its reactant ions get used up and its product ions build up. The Nernst equation shows that the potential falls as this ratio of products to reactants grows.`,
  },
  explanation: {
    intuition: [
      t`$E^0$ holds only under standard conditions: every ion at $1\ \mathrm{M}$, every gas at $1$ atm.`,
      t`As a cell runs, reactant ions are used up and product ions build up.`,
      t`The **reaction quotient** $Q$ is products over reactants, each concentration raised to its coefficient.`,
      t`A larger $Q$ lowers the cell potential; a smaller $Q$ raises it.`,
      t`The **Nernst equation**, at $298$ K: $E_{cell} = E^0_{cell}$ $- \dfrac{0.0592}{n}\log_{10} Q$.`,
      t`Here $n$ is the number of electrons transferred in the balanced cell reaction.`,
    ],
    formal: [
      {
        title: "The Nernst equation",
        points: [
          t`In general, $E_{cell} = E^0_{cell}$ $- \dfrac{2.303\,RT}{nF}\log_{10} Q$.`,
          t`At $298$ K, $\dfrac{2.303\,RT}{F} = 0.0592$ V, so $E_{cell} = E^0_{cell}$ $- \dfrac{0.0592}{n}\log_{10} Q$.`,
          t`The term $\dfrac{0.0592}{n}\log_{10} Q$ is the correction for nonstandard conditions.`,
          t`For $aA + bB \rightarrow cC + dD$, $Q = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$.`,
          t`Pure solids and liquids are left out of $Q$; a gas enters as its pressure in atm.`,
        ],
      },
      {
        title: "Using it for a cell",
        points: [
          t`Write the balanced cell reaction and read $n$, the electrons transferred, from it.`,
          t`Daniell cell: $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$, with $n = 2$.`,
          t`So $E_{cell} = 1.10$ $- \dfrac{0.0592}{2}\log_{10}\dfrac{[\ce{Zn^2+}]}{[\ce{Cu^2+}]}$.`,
          t`Raising $[\ce{Zn^2+}]$, a product, lowers $E_{cell}$; raising $[\ce{Cu^2+}]$, a reactant, raises it.`,
        ],
      },
      {
        title: "A single electrode",
        points: [
          t`Write the electrode as a reduction: $\ce{M^n+ + ne- -> M}$.`,
          t`The solid metal is left out, so $Q = \dfrac{1}{[\ce{M^n+}]}$.`,
          t`Then $E = E^0$ $- \dfrac{0.0592}{n}\log_{10} Q$.`,
          t`A more dilute solution of the ion gives a lower electrode potential.`,
        ],
      },
    ],
    worked: {
      prompt: t`$E^0_{cell}$ of the Daniell cell is $1.10$ V. Find its emf at $25^\circ\mathrm{C}$ when $[\ce{Zn^2+}] = 0.1\ \mathrm{M}$ and $[\ce{Cu^2+}] = 0.001\ \mathrm{M}$.`,
      steps: [
        t`Cell reaction: $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$, so $n = 2$.`,
        t`$Q = \dfrac{[\ce{Zn^2+}]}{[\ce{Cu^2+}]}$ $= \dfrac{0.1}{0.001} = 100$; the solid metals are left out.`,
        t`$E_{cell} = 1.10$ $- \dfrac{0.0592}{2}\log_{10} 100$.`,
        t`$E_{cell} = 1.10 - 0.0296 \times 2$ $= 1.04$ V.`,
      ],
      answer: t`$E_{cell} = 1.04$ V, below $E^0_{cell}$ because $Q > 1$`,
    },
    visualSpec: t`Drag the two ion concentrations of a Daniell cell and watch Q, the log term and the voltmeter reading change together.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Writes $Q$ upside down, reactants over products.`,
      remediation: t`$Q$ is products over reactants; for an electrode written as a reduction, $Q = \dfrac{1}{[\ce{M^n+}]}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Leaves out the powers in $Q$.`,
      remediation: t`Each concentration is raised to its coefficient in the balanced equation: $\ce{2Ag+}$ enters as $[\ce{Ag+}]^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Leaves out $n$.`,
      remediation: t`The factor is $\dfrac{0.0592}{n}$, with $n$ the electrons transferred in the balanced cell reaction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Uses $\ln Q$ with the factor $0.0592$.`,
      remediation: t`$0.0592$ V already contains $2.303$, the factor that turns $\ln$ into $\log_{10}$: use $\log_{10} Q$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.10" },
      stem: t`With $E^0_{Sn} = -0.136$ V and $E^0_{Ag} = 0.800$ V, the voltage at $25^\circ\mathrm{C}$ of the cell $\ce{Sn(s) | Sn^2+}(0.02\ \mathrm{M})$ $\ce{|| Ag+}(0.01\ \mathrm{M})\ce{| Ag(s)}$ is`,
      verify: { kind: "value", inputs: { Ec: "0.800", Ea: "-0.136", n: "2", ca: "0.02", xa: "1", cc: "0.01", xc: "2" }, params: { ask: "E" } },
      options: [
        { key: "A", text: t`$0.868\ \mathrm{V}$`, correct: true, value: "0.868000000000000" },
        { key: "B", text: t`$1.00\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M1", value: "1" },
        { key: "C", text: t`$0.927\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M2", value: "0.927000000000000" },
        { key: "D", text: t`$0.800\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M3", value: "0.800000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{Sn + 2Ag+ -> Sn^2+ + 2Ag}$: $n = 2$ and $E^0_{cell} = 0.800 + 0.136$ $= 0.936$ V.`,
          t`$Q = \dfrac{[\ce{Sn^2+}]}{[\ce{Ag+}]^2}$ $= \dfrac{0.02}{(0.01)^2} = 200$.`,
          t`$E_{cell} = 0.936$ $- 0.0296 \log_{10} 200$ $= 0.868$ V.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (vi)" },
      stem: t`With $E^0_{Zn} = -0.76$ V and $E^0_{Cr} = -0.74$ V, the emf at $25^\circ\mathrm{C}$ of the cell $\ce{Zn(s) | Zn^2+}(0.08\ \mathrm{M})$ $\ce{|| Cr^3+}(0.1\ \mathrm{M})\ce{| Cr(s)}$ is`,
      verify: { kind: "value", inputs: { Ec: "-0.74", Ea: "-0.76", n: "6", ca: "0.08", xa: "3", cc: "0.1", xc: "2" }, params: { ask: "E" } },
      options: [
        { key: "A", text: t`$0.0210\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M2", value: "0.0210000000000000" },
        { key: "B", text: t`$0.0964\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M3", value: "0.0964000000000000" },
        { key: "C", text: t`$0.0493\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M4", value: "0.0493000000000000" },
        { key: "D", text: t`$0.0327\ \mathrm{V}$`, correct: true, value: "0.0327000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{3Zn + 2Cr^3+ -> 3Zn^2+ + 2Cr}$: $n = 6$ and $E^0_{cell} = -0.74 + 0.76$ $= 0.02$ V.`,
          t`$Q = \dfrac{(0.08)^3}{(0.1)^2}$ $= 0.0512$.`,
          t`$E_{cell} = 0.02$ $- \dfrac{0.0592}{6}\log_{10} 0.0512$.`,
          t`$E_{cell} = 0.02 + 0.0127$ $= 0.0327$ V.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (v)" },
      stem: t`With $E^0_{Zn} = -0.76$ V, the emf at $25^\circ\mathrm{C}$ of the cell $\ce{Zn(s) | Zn^2+}(0.2\ \mathrm{M})$ $\ce{|| H+}(1.6\ \mathrm{M})$ $\ce{| H2}(\mathrm{g},\ 1.8\ \mathrm{atm})\ce{| Pt}$ is`,
      verify: { kind: "value", inputs: { Ec: "0", Ea: "-0.76", n: "2", ca: "0.2", xa: "1", cc: "1.6", xc: "2", gas: "1.8" }, params: { ask: "E" } },
      options: [
        { key: "A", text: t`$0.735\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M1", value: "0.735000000000000" },
        { key: "B", text: t`$0.810\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M3", value: "0.810000000000000" },
        { key: "C", text: t`$0.818\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M4", value: "0.818000000000000" },
        { key: "D", text: t`$0.785\ \mathrm{V}$`, correct: true, value: "0.785000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{Zn + 2H+ -> Zn^2+ + H2}$: $n = 2$ and $E^0_{cell} = 0 - (-0.76)$ $= 0.76$ V.`,
          t`$Q = \dfrac{[\ce{Zn^2+}]\,p_{\ce{H2}}}{[\ce{H+}]^2}$ $= \dfrac{0.2 \times 1.8}{(1.6)^2} = 0.141$.`,
          t`$E_{cell} = 0.76$ $- 0.0296 \log_{10} 0.141$ $= 0.76 + 0.0252$ $= 0.785$ V.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (v)" },
      stem: t`In the cell $\ce{Pb(s) | Pb^2+}(1\ \mathrm{M})$ $\ce{|| Ag+}(1\ \mathrm{M})\ce{| Ag(s)}$ at $25^\circ\mathrm{C}$, the concentration of the ion in the anode compartment is increased by a factor of $10$. The emf of the cell`,
      verify: { kind: "value", inputs: { n: "2", f: "10", xa: "1" }, params: { ask: "dE" } },
      options: [
        { key: "A", text: t`decreases by $0.0592$ V`, correct: false, misconceptionId: "C08-M3", value: "-0.0592000000000000" },
        { key: "B", text: t`decreases by $0.0682$ V`, correct: false, misconceptionId: "C08-M4", value: "-0.0682000000000000" },
        { key: "C", text: t`decreases by $0.0296$ V`, correct: true, value: "-0.0296000000000000" },
        { key: "D", text: t`increases by $0.0296$ V`, correct: false, misconceptionId: "C08-M1", value: "0.0296000000000000" },
      ],
      solution: {
        steps: [
          t`Lead is the anode: $\ce{Pb + 2Ag+ -> Pb^2+ + 2Ag}$, $n = 2$, and $[\ce{Pb^2+}]$ is on top of $Q$.`,
          t`$Q$ grows $10$ times, so $E$ changes by $-\dfrac{0.0592}{2}\log_{10} 10$.`,
          t`The emf decreases by $0.0296$ V.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.11" },
      stem: t`The standard potential of the $\ce{Zn^2+ | Zn}$ electrode is $-0.76$ V. At $25^\circ\mathrm{C}$, the potential of the electrode $\ce{Zn^2+}(0.02\ \mathrm{M})\ce{| Zn(s)}$ is`,
      verify: { kind: "value", inputs: { Ec: "-0.76", n: "2", cc: "0.02", xc: "1" }, params: { ask: "E" } },
      options: [
        { key: "A", text: t`$-0.876\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M4", value: "-0.876000000000000" },
        { key: "B", text: t`$-0.810\ \mathrm{V}$`, correct: true, value: "-0.810000000000000" },
        { key: "C", text: t`$-0.710\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M1", value: "-0.710000000000000" },
        { key: "D", text: t`$-0.861\ \mathrm{V}$`, correct: false, misconceptionId: "C08-M3", value: "-0.861000000000000" },
      ],
      solution: {
        steps: [
          t`As a reduction, $\ce{Zn^2+ + 2e- -> Zn}$: $n = 2$ and $Q = \dfrac{1}{0.02} = 50$.`,
          t`$E = -0.76$ $- 0.0296 \log_{10} 50$.`,
          t`$E = -0.76 - 0.0503$ $= -0.810$ V.`,
        ],
      },
    },
  ],
};
