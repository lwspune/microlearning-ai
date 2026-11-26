import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Drop a zinc strip in blue copper sulfate solution and copper coats the zinc. Drop a silver strip in and nothing happens. Who decides?`,
    reveal: t`Standard electrode potentials. Zinc's $E^0$ is below copper's, so zinc gives electrons to $\ce{Cu^{2+}}$; silver's is above, so it does not.`,
  },
  explanation: {
    intuition: [
      t`Each redox couple has a standard reduction potential, $E^0$.`,
      t`A higher $E^0$ means the oxidised form grabs electrons more readily: a stronger oxidant.`,
      t`A lower $E^0$ means the reduced form gives electrons readily: a stronger reductant.`,
      t`A reaction goes when the oxidant's couple lies above the reductant's.`,
    ],
    formal: [
      {
        title: t`Using $E^0$`,
        points: [
          t`Stronger oxidising agent: higher $E^0$ ($\ce{Cl2}$ 1.36 V > $\ce{Br2}$ 1.09 V).`,
          t`Stronger reducing agent: lower $E^0$ (Li −3.05 V < Mg −2.36 V).`,
          t`$E^0 = E^0_{\text{ox}} - E^0_{\text{red}}$ (oxidant couple minus reductant couple); positive means spontaneous.`,
          t`$E^0$ does not change when an equation is multiplied.`,
        ],
      },
    ],
    worked: {
      prompt: t`Will Zn reduce $\ce{Cu^{2+}}$? ($E^0$: Zn −0.76 V, Cu +0.34 V)`,
      steps: [
        t`$E^0 = 0.34 - (-0.76) = 1.10$ V.`,
        t`Positive: yes.`,
      ],
      answer: t`Yes, $E^0$ = 1.10 V`,
    },
    visualSpec: t`Place couples on a vertical $E^0$ ladder and draw arrows for reactions that go downhill.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Thinks a lower $E^0$ means a stronger oxidant.`,
      remediation: t`A higher $E^0$ means a stronger oxidant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks they are equally strong.",
      remediation: t`Different $E^0$ values mean different strengths.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Thinks concentrations are needed.",
      remediation: "Standard potentials compare strengths under standard conditions.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Thinks a higher $E^0$ means a stronger reductant.`,
      remediation: t`The more negative $E^0$ belongs to the stronger reductant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Credits atomic mass.",
      remediation: t`$E^0$, not mass, decides.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Reverses the comparison.",
      remediation: t`The oxidant's $E^0$ (0.77) above the reductant's (0.54): it goes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Calls $\ce{Fe^{3+}}$ a reductant.`,
      remediation: t`$\ce{Fe^{3+}}$ is the oxidised form; it accepts electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks heat is needed.",
      remediation: t`A positive $E^0$ means it goes at room temperature.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Adds the potentials.",
      remediation: "Subtract: oxidant − reductant.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Subtracts the wrong way.",
      remediation: t`$E^0$ = 0.77 − 0.54.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Doubles the iodine potential.",
      remediation: t`Multiplying an equation does not change $E^0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: t`Thinks a higher $E^0$ metal is more reactive.`,
      remediation: t`Silver's $E^0$ is above copper's: it cannot reduce $\ce{Cu^{2+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks gold.",
      remediation: t`Gold's $E^0$ is highest: the least reactive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Thinks none displaces copper.",
      remediation: t`Zinc's $E^0$ is below copper's, so zinc displaces it.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (I)" },
      stem: t`$E^0$: $\ce{Cl2}$ 1.36 V, $\ce{Br2}$ 1.09 V. Which is the stronger oxidising agent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxidant" } },
      options: [
        { key: "A", text: t`they are equally strong`, correct: false, misconceptionId: "C07-M2", value: "equal" },
        { key: "B", text: t`it cannot be told without concentrations`, correct: false, misconceptionId: "C07-M3", value: "need_concentration" },
        { key: "C", text: t`$\ce{Br2}$`, correct: false, misconceptionId: "C07-M1", value: "br2" },
        { key: "D", text: t`$\ce{Cl2}$`, correct: true, value: "cl2" },
      ],
      solution: {
        steps: [
          t`Higher $E^0$: stronger oxidant.`,
          t`$\ce{Cl2}$ (1.36 V).`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (J)" },
      stem: t`$E^0$: Li −3.05 V, Mg −2.36 V. Which is the stronger reducing agent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "reductant" } },
      options: [
        { key: "A", text: t`Li`, correct: true, value: "lithium" },
        { key: "B", text: t`they are equally strong`, correct: false, misconceptionId: "C07-M2", value: "equal" },
        { key: "C", text: t`whichever has the larger atomic mass`, correct: false, misconceptionId: "C07-M5", value: "heavier" },
        { key: "D", text: t`Mg`, correct: false, misconceptionId: "C07-M4", value: "magnesium" },
      ],
      solution: {
        steps: [
          t`More negative $E^0$: stronger reductant.`,
          t`Li (−3.05 V).`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.9" },
      stem: t`$E^0$: $\ce{Fe^{3+}/Fe^{2+}}$ 0.77 V, $\ce{I2/I-}$ 0.54 V. Does $\ce{Fe^{3+}}$ oxidise $\ce{I-}$ to $\ce{I2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "fe_i" } },
      options: [
        { key: "A", text: t`only on heating`, correct: false, misconceptionId: "C07-M8", value: "only_heated" },
        { key: "B", text: t`yes, because 0.77 V is above 0.54 V`, correct: true, value: "yes_higher" },
        { key: "C", text: t`no, because 0.54 V is below 0.77 V`, correct: false, misconceptionId: "C07-M6", value: "no_lower" },
        { key: "D", text: t`no, because $\ce{Fe^{3+}}$ is a reducing agent`, correct: false, misconceptionId: "C07-M7", value: "no_reductant" },
      ],
      solution: {
        steps: [
          t`Oxidant 0.77 V is above reductant 0.54 V.`,
          t`$E^0$ > 0: yes.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.9" },
      stem: t`For $\ce{2Fe^{3+} + 2I-}$ $\ce{-> 2Fe^{2+} + I2}$, $E^0(\ce{Fe^{3+}/Fe^{2+}})$ = 0.77 V and $E^0(\ce{I2/I-})$ = 0.54 V. Find $E^0$ for the reaction.`,
      verify: { kind: "value", inputs: { ox: "0.77", red: "0.54" }, params: { q: "e_cell" } },
      options: [
        { key: "A", text: t`$-0.23\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M10", value: "-0.230000000000000" },
        { key: "B", text: t`$1.31\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M9", value: "1.31000000000000" },
        { key: "C", text: t`$0.23\ \mathrm{V}$`, correct: true, value: "0.230000000000000" },
        { key: "D", text: t`$-0.31\ \mathrm{V}$`, correct: false, misconceptionId: "C07-M11", value: "-0.310000000000000" },
      ],
      solution: {
        steps: [
          t`$E^0$ = 0.77 − 0.54.`,
          t`= 0.23 V.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`$E^0$: Zn −0.76, Cu +0.34, Ag +0.80, Au +1.50 V. Which metal displaces copper from $\ce{CuSO4}$ solution?`,
      verify: { kind: "value", inputs: {  }, params: { q: "displace" } },
      options: [
        { key: "A", text: t`Ag`, correct: false, misconceptionId: "C07-M12", value: "ag" },
        { key: "B", text: t`Au`, correct: false, misconceptionId: "C07-M13", value: "au" },
        { key: "C", text: t`none of them`, correct: false, misconceptionId: "C07-M14", value: "none" },
        { key: "D", text: t`Zn`, correct: true, value: "zn" },
      ],
      solution: {
        steps: [
          t`Only Zn has $E^0$ below copper's.`,
          t`Zinc displaces copper.`,
        ],
      },
    },
  ],
};
