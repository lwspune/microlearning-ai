import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A gas can expand in one jump against a small fixed pressure, or slowly, with the outside pressure always just below its own. Which way gets more work out?`,
    reveal: t`The slow, reversible way. The gas always pushes against nearly its own pressure, so it does the most work possible.`,
  },
  explanation: {
    intuition: [
      t`A gas pushing against a small pressure wastes its push and does little work.`,
      t`Against a pressure larger than its own, it cannot expand at all.`,
      t`The most work comes when $P_{ext}$ is always just below the gas pressure.`,
      t`Such a change goes in infinitely small steps: it is **reversible**.`,
      t`Done at constant temperature, it gives the **maximum work**, $W_{max}$.`,
    ],
    formal: [
      {
        title: "Reversible isothermal expansion",
        points: [
          t`In each tiny step, $P_{ext}$ is less than the gas pressure $P$ by an infinitesimal amount.`,
          t`The work in one step is $dW = -P_{ext}\,dV$, which is $-P\,dV$ in the limit.`,
          t`For an ideal gas $P = \dfrac{nRT}{V}$, with $T$ constant.`,
          t`Adding all the steps from $V_1$ to $V_2$ gives $W_{max} = -nRT\ln\dfrac{V_2}{V_1}$.`,
        ],
      },
      {
        title: "The working formula",
        points: [
          t`With $\ln x = 2.303\log_{10}x$:`,
          t`$W_{max}$ $= -2.303\,nRT\log_{10}\dfrac{V_2}{V_1}$.`,
          t`At constant $T$, Boyle's law gives $\dfrac{V_2}{V_1} = \dfrac{P_1}{P_2}$.`,
          t`So also $W_{max}$ $= -2.303\,nRT\log_{10}\dfrac{P_1}{P_2}$.`,
          t`Take $n$ in moles, $T$ in kelvin and $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$: $W$ comes in J.`,
          t`An expansion gives a negative $W_{max}$; a compression gives a positive one.`,
        ],
      },
      {
        title: "Conditions for maximum work",
        points: [
          t`The change must be isothermal: $T$ stays constant throughout.`,
          t`It must be reversible: $P_{ext}$ differs from the gas pressure only infinitesimally at every stage.`,
          t`Any real, faster expansion against a lower pressure gives less work.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the maximum work when $0.5$ mol of an ideal gas expands isothermally and reversibly from $2\ \mathrm{bar}$ to $1\ \mathrm{bar}$ at $300\ \mathrm{K}$.`,
      steps: [
        t`Pressures are given: $\log_{10}\dfrac{P_1}{P_2}$ $= \log_{10} 2 = 0.3010$.`,
        t`$2.303\,nRT$ $= 2.303 \times 0.5 \times 8.314 \times 300$ $= 2872\ \mathrm{J}$.`,
        t`$W_{max} = -2872 \times 0.3010$ $= -864.5\ \mathrm{J}$.`,
        t`Negative: the gas does $864.5\ \mathrm{J}$ of work on the surroundings.`,
      ],
      answer: t`$W_{max} = -864.5\ \mathrm{J}$`,
    },
    visualSpec: t`Lower the outside pressure step by step and watch the work area under the curve grow toward the smooth isotherm.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Turns the ratio upside down: uses $\dfrac{V_1}{V_2}$ or $\dfrac{P_2}{P_1}$.`,
      remediation: t`Volumes go final over initial, $\dfrac{V_2}{V_1}$; pressures go initial over final, $\dfrac{P_1}{P_2}$. An expansion then gives a negative $W$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Keeps the 2.303 but uses the natural logarithm.",
      remediation: t`$2.303$ converts $\log_{10}$ into $\ln$: use $nRT\ln$ or $2.303\,nRT\log_{10}$, never both.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C03-M3",
      mistake: t`Uses $\log_{10}$ but drops the 2.303.`,
      remediation: t`$\ln x = 2.303\log_{10}x$: with $\log_{10}$ the factor 2.303 must stay.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C03-M4",
      mistake: "Uses the mass in grams as the number of moles.",
      remediation: t`$n$ is in moles: divide the mass by the molar mass first, $n = \dfrac{m}{M}$.`,
      fallback: { kind: "ext", topic: "mole concept (Std XI Chemistry)" },
    },
    {
      id: "C03-M5",
      mistake: "Uses the temperature in degrees Celsius.",
      remediation: t`$T$ must be in kelvin: add 273 to the Celsius temperature.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#26" },
      stem: t`One mole of an ideal gas expands isothermally and reversibly from $10\ \mathrm{L}$ to $15\ \mathrm{L}$ at $300\ \mathrm{K}$. What is the work done? ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { n: "1", T: "300", V1: "10", V2: "15" }, params: { ask: "W" } },
      options: [
        { key: "A", text: t`$-2330\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M2", value: "-2330" },
        { key: "B", text: t`$-439\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M3", value: "-439" },
        { key: "C", text: t`$-1010\ \mathrm{J}$`, correct: true, value: "-1010" },
        { key: "D", text: t`$+1010\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M1", value: "1010" },
      ],
      solution: {
        steps: [
          t`$\dfrac{V_2}{V_1} = \dfrac{15}{10} = 1.5$ and $\log_{10} 1.5 = 0.1761$.`,
          t`$W_{max} = -2.303 \times 1 \times 8.314 \times 300$ $\times 0.1761$.`,
          t`$W_{max} = -1011\ \mathrm{J} \approx -1010\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#29" },
      stem: t`$2000\ \mathrm{mmol}$ of an ideal gas expand isothermally and reversibly from $20\ \mathrm{L}$ to $30\ \mathrm{L}$ at $300\ \mathrm{K}$. What is the work done? ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { n: "2", T: "300", V1: "20", V2: "30" }, params: { ask: "W" } },
      options: [
        { key: "A", text: t`$-4660\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M2", value: "-4660" },
        { key: "B", text: t`$-878\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M3", value: "-878" },
        { key: "C", text: t`$-2020\ \mathrm{J}$`, correct: true, value: "-2020" },
        { key: "D", text: t`$+2020\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M1", value: "2020" },
      ],
      solution: {
        steps: [
          t`$n = 2000\ \mathrm{mmol} = 2\ \mathrm{mol}$; $\dfrac{V_2}{V_1} = \dfrac{30}{20} = 1.5$.`,
          t`$W_{max} = -2.303 \times 2 \times 8.314 \times 300$ $\times 0.1761$.`,
          t`$W_{max} = -2023\ \mathrm{J} \approx -2020\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (vii)" },
      stem: t`What is the maximum work when $24\ \mathrm{g}$ of $\ce{O2}$ expand isothermally and reversibly from $1.6\ \mathrm{bar}$ to $1\ \mathrm{bar}$ at $298\ \mathrm{K}$? ($\ce{O2} = 32\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { mass: "24", M: "32", T: "298", P1: "1.6", P2: "1" }, params: { ask: "W" } },
      options: [
        { key: "A", text: t`$+873\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M1", value: "873" },
        { key: "B", text: t`$-379\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M3", value: "-379" },
        { key: "C", text: t`$-27900\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M4", value: "-27900" },
        { key: "D", text: t`$-873\ \mathrm{J}$`, correct: true, value: "-873" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{24}{32} = 0.75\ \mathrm{mol}$; $\dfrac{P_1}{P_2} = 1.6$, $\log_{10} 1.6 = 0.2041$.`,
          t`$W_{max} = -2.303 \times 0.75 \times 8.314 \times 298$ $\times 0.2041$.`,
          t`$W_{max} = -873\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.5" },
      stem: t`$22\ \mathrm{g}$ of $\ce{CO2}$ is compressed isothermally and reversibly at $298\ \mathrm{K}$ from $100\ \mathrm{kPa}$; the work obtained is $1.2\ \mathrm{kJ}$. What is the final pressure? ($\ce{CO2} = 44\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { mass: "22", M: "44", T: "298", W: "1200", P1: "100" }, params: { ask: "P2" } },
      options: [
        { key: "A", text: t`$930\ \mathrm{kPa}$`, correct: false, misconceptionId: "C03-M3", value: "930" },
        { key: "B", text: t`$102\ \mathrm{kPa}$`, correct: false, misconceptionId: "C03-M4", value: "102" },
        { key: "C", text: t`$263\ \mathrm{kPa}$`, correct: true, value: "263" },
        { key: "D", text: t`$38\ \mathrm{kPa}$`, correct: false, misconceptionId: "C03-M1", value: "38" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{22}{44} = 0.5\ \mathrm{mol}$; work done on the gas, $W = +1200\ \mathrm{J}$.`,
          t`$2.303\,nRT = 2.303 \times 0.5 \times 8.314 \times 298$ $= 2853\ \mathrm{J}$.`,
          t`$\log_{10}\dfrac{100}{P_2} = -\dfrac{1200}{2853}$ $= -0.4206$.`,
          t`$\dfrac{100}{P_2} = 0.3797$, so $P_2 = 263\ \mathrm{kPa}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.6" },
      stem: t`$300\ \mathrm{mmol}$ of an ideal gas at $27^\circ\mathrm{C}$ expand isothermally and reversibly from $13.7\ \mathrm{dm^3}$ to $16.0\ \mathrm{dm^3}$. What is the work done?`,
      verify: { kind: "value", inputs: { n: "0.3", Tc: "27", V1: "13.7", V2: "16" }, params: { ask: "W" } },
      options: [
        { key: "A", text: t`$-116\ \mathrm{J}$`, correct: true, value: "-116" },
        { key: "B", text: t`$+116\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M1", value: "116" },
        { key: "C", text: t`$-50.4\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M3", value: "-50.4000000000000" },
        { key: "D", text: t`$-10.5\ \mathrm{J}$`, correct: false, misconceptionId: "C03-M5", value: "-10.5000000000000" },
      ],
      solution: {
        steps: [
          t`$n = 0.3\ \mathrm{mol}$; $T = 27 + 273 = 300\ \mathrm{K}$; $\log_{10}\dfrac{16.0}{13.7} = 0.0674$.`,
          t`$W_{max} = -2.303 \times 0.3 \times 8.314 \times 300$ $\times 0.0674$.`,
          t`$W_{max} = -116\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
