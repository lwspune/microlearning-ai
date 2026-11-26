import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A steady current of $1\ \mathrm{A}$ plates silver from $\ce{AgNO3}$ solution. How long until one whole mole of silver has formed? And one mole of copper from $\ce{CuSO4}$?`,
    reveal: t`One mole of $\ce{Ag}$ needs 1 mol of electrons, $96500\ \mathrm{C}$: that is $96500\ \mathrm{s}$, nearly 27 hours. Copper needs 2 electrons per atom, so it takes twice as long.`,
  },
  explanation: {
    intuition: [
      t`Electrolysis is driven by electrons, so the amount of product depends on how many electrons pass.`,
      t`The **charge** passed is $Q = I \times t$: current in amperes, time in seconds, $Q$ in coulombs.`,
      t`One mole of electrons carries $96500\ \mathrm{C}$, called one **faraday** ($F$).`,
      t`The electrode reaction tells how many electrons each ion needs: $\ce{Cu^2+ + 2e- -> Cu}$ needs two.`,
      t`So charge gives moles of electrons, which give moles of product, which give its mass.`,
    ],
    formal: [
      {
        title: "Faraday's first law",
        points: [
          t`**Faraday's first law**: the mass deposited at an electrode is proportional to the charge passed.`,
          t`$W = ZQ = ZIt$, where $Z$, the **electrochemical equivalent**, is the mass deposited by $1\ \mathrm{C}$.`,
          t`Moles of electrons $= \dfrac{Q}{F} = \dfrac{It}{96500}$.`,
          t`Time must be in seconds: $1\ \mathrm{h} = 3600\ \mathrm{s}$.`,
        ],
      },
      {
        title: "Mass from the electrode reaction",
        points: [
          t`For $\ce{M^{n+} + ne- -> M}$, the **mole ratio** is 1 mol of M per $n$ mol of electrons.`,
          t`Moles of M $= \dfrac{Q}{F} \times \dfrac{1}{n}$.`,
          t`So mass $W = \dfrac{Q}{F} \times \dfrac{M}{n}$, where $M$ is the molar mass.`,
          t`$\ce{Ag+}$ needs 1 electron, $\ce{Cu^2+}$ needs 2, and $\ce{Al^3+}$ needs 3.`,
          t`So one faraday gives 1 mol of Ag, $\tfrac{1}{2}$ mol of Cu or $\tfrac{1}{3}$ mol of Al.`,
        ],
      },
      {
        title: "Faraday's second law",
        points: [
          t`**Faraday's second law**: the same charge passed through cells in series deposits masses in proportion to $M/n$.`,
          t`$\dfrac{W_1}{W_2} = \dfrac{M_1 / n_1}{M_2 / n_2}$.`,
          t`$M/n$ is the mass deposited by one faraday.`,
          t`Equal charge means equal moles of electrons, not equal masses.`,
        ],
      },
    ],
    worked: {
      prompt: t`A current of $2\ \mathrm{A}$ is passed through $\ce{AgNO3}$ solution for $25$ minutes. What mass of silver is deposited? (Molar mass of $\ce{Ag} = 108\ \mathrm{g\,mol^{-1}}$)`,
      steps: [
        t`$t = 25 \times 60 = 1500\ \mathrm{s}$, so $Q = 2 \times 1500$ $= 3000\ \mathrm{C}$.`,
        t`Moles of electrons $= \dfrac{3000}{96500}$ $= 0.0311$.`,
        t`$\ce{Ag+ + e- -> Ag}$: 1 mol of Ag per mol of electrons, so 0.0311 mol of Ag.`,
        t`Mass $= 0.0311 \times 108$ $= 3.36\ \mathrm{g}$.`,
      ],
      answer: t`$3.36\ \mathrm{g}$ of silver`,
    },
    visualSpec: t`Turn up the current or run the clock and watch electrons stream in while metal atoms pile up, one Ag per electron but one Cu per two.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Leaves the time in minutes or hours.",
      remediation: t`A coulomb is an ampere-second: change the time to seconds before using $Q = It$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Ignores the ion's charge, taking one electron for every atom deposited.",
      remediation: t`Read $n$ from the electrode reaction: $\ce{Cu^2+ + 2e- -> Cu}$ needs 2 mol of electrons per mol of Cu.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: t`Turns the mole ratio upside down: multiplies by $n$ where it should divide, or divides where it should multiply.`,
      remediation: t`Each mole of metal needs $n$ moles of electrons: moles of metal $= \dfrac{Q}{nF}$, and faradays needed $= n \times$ moles of metal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Mixes up faradays and coulombs.",
      remediation: t`One faraday is the charge on 1 mol of electrons, $96500\ \mathrm{C}$: multiply faradays by 96500 to get coulombs.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks cells in series deposit equal masses.",
      remediation: t`The same charge gives the same moles of electrons; the masses differ as $M/n$: $\dfrac{W_1}{W_2} = \dfrac{M_1 / n_1}{M_2 / n_2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.6" },
      stem: t`A current of $5\ \mathrm{A}$ is passed through $\ce{CuSO4}$ solution for $100$ minutes. What mass of copper is deposited at the cathode? (Molar mass of $\ce{Cu} = 63.5\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { I: "5", t: "6000", tg: "100", M: "63.5", n: "2" }, params: { ask: "mass" } },
      options: [
        { key: "A", text: t`$39.5\ \mathrm{g}$`, correct: false, misconceptionId: "C05-M3", value: "39.5000000000000" },
        { key: "B", text: t`$9.87\ \mathrm{g}$`, correct: true, value: "9.87000000000000" },
        { key: "C", text: t`$0.165\ \mathrm{g}$`, correct: false, misconceptionId: "C05-M1", value: "0.165000000000000" },
        { key: "D", text: t`$19.7\ \mathrm{g}$`, correct: false, misconceptionId: "C05-M2", value: "19.7000000000000" },
      ],
      solution: {
        steps: [
          t`$Q = It = 5 \times 100 \times 60$ $= 30000\ \mathrm{C}$.`,
          t`$\ce{Cu^2+ + 2e- -> Cu}$, so $W = \dfrac{30000}{96500} \times \dfrac{63.5}{2}$.`,
          t`$W = 9.87\ \mathrm{g}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (iii)" },
      stem: t`What current is needed to deposit $2.4\ \mathrm{g}$ of copper from $\ce{CuSO4}$ solution in $1$ hour? (Molar mass of $\ce{Cu} = 63.5\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { W: "2.4", t: "3600", tg: "1", M: "63.5", n: "2" }, params: { ask: "current" } },
      options: [
        { key: "A", text: t`$7290\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M1", value: "7290" },
        { key: "B", text: t`$1.01\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M2", value: "1.01000000000000" },
        { key: "C", text: t`$0.507\ \mathrm{A}$`, correct: false, misconceptionId: "C05-M3", value: "0.507000000000000" },
        { key: "D", text: t`$2.03\ \mathrm{A}$`, correct: true, value: "2.03000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{Cu^2+ + 2e- -> Cu}$, and $t = 3600\ \mathrm{s}$.`,
          t`$I = \dfrac{W n F}{M t}$ $= \dfrac{2.4 \times 2 \times 96500}{63.5 \times 3600}$.`,
          t`$I = 2.03\ \mathrm{A}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#23" },
      stem: t`How many faradays of electricity are needed to produce $13\ \mathrm{g}$ of aluminium from aluminium chloride? (Molar mass of $\ce{Al} = 27.0\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { W: "13", M: "27.0", n: "3" }, params: { ask: "faradays" } },
      options: [
        { key: "A", text: t`$1.44\ \mathrm{F}$`, correct: true, value: "1.44000000000000" },
        { key: "B", text: t`$0.481\ \mathrm{F}$`, correct: false, misconceptionId: "C05-M2", value: "0.481000000000000" },
        { key: "C", text: t`$0.16\ \mathrm{F}$`, correct: false, misconceptionId: "C05-M3", value: "0.160000000000000" },
        { key: "D", text: t`$1.39 \times 10^{5}\ \mathrm{F}$`, correct: false, misconceptionId: "C05-M4", value: "139000" },
      ],
      solution: {
        steps: [
          t`Moles of Al $= \dfrac{13}{27.0}$ $= 0.481$.`,
          t`$\ce{Al^3+ + 3e- -> Al}$, so faradays $= 3 \times 0.481$ $= 1.44\ \mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.9" },
      stem: t`Two cells, one with $\ce{ZnSO4}$ solution and one with $\ce{AlCl3}$ solution, are joined in series. $4.36\ \mathrm{g}$ of zinc is deposited in the first. What mass of aluminium is deposited in the second? (Molar masses: $\ce{Zn}$ $65.4$, $\ce{Al}$ $27\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { W1: "4.36", M1: "65.4", n1: "2", M2: "27", n2: "3" }, params: { ask: "series" } },
      options: [
        { key: "A", text: t`$2.7\ \mathrm{g}$`, correct: false, misconceptionId: "C05-M3", value: "2.70000000000000" },
        { key: "B", text: t`$4.36\ \mathrm{g}$`, correct: false, misconceptionId: "C05-M5", value: "4.36000000000000" },
        { key: "C", text: t`$1.2\ \mathrm{g}$`, correct: true, value: "1.20000000000000" },
        { key: "D", text: t`$1.8\ \mathrm{g}$`, correct: false, misconceptionId: "C05-M2", value: "1.80000000000000" },
      ],
      solution: {
        steps: [
          t`The same charge passes through both, so $\dfrac{W_{\ce{Zn}}}{65.4/2} = \dfrac{W_{\ce{Al}}}{27/3}$.`,
          t`$W_{\ce{Al}} = 4.36 \times \dfrac{9}{32.7}$ $= 1.2\ \mathrm{g}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#24" },
      stem: t`How many coulombs of electricity are needed to reduce $2$ moles of $\ce{Zn^2+}$ to $\ce{Zn}$?`,
      verify: { kind: "value", inputs: { mol: "2", n: "2" }, params: { ask: "charge" } },
      options: [
        { key: "A", text: t`$3.86 \times 10^{5}\ \mathrm{C}$`, correct: true, value: "386000" },
        { key: "B", text: t`$1.93 \times 10^{5}\ \mathrm{C}$`, correct: false, misconceptionId: "C05-M2", value: "193000" },
        { key: "C", text: t`$96500\ \mathrm{C}$`, correct: false, misconceptionId: "C05-M3", value: "96500" },
        { key: "D", text: t`$4\ \mathrm{C}$`, correct: false, misconceptionId: "C05-M4", value: "4" },
      ],
      solution: {
        steps: [
          t`$\ce{Zn^2+ + 2e- -> Zn}$: 2 mol of $\ce{Zn^2+}$ need 4 mol of electrons, that is $4\ \mathrm{F}$.`,
          t`Charge $= 4 \times 96500$ $= 3.86 \times 10^5\ \mathrm{C}$.`,
        ],
      },
    },
  ],
};
