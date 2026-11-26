import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A reaction with a positive $\Delta G^0$ is called nonspontaneous, yet a little product still forms when its reactants are mixed. How?`,
    reveal: t`$\Delta G^0$ is for every substance in its standard state. Starting from pure reactants, $\Delta G$ is negative at first, so some product forms until equilibrium. A positive $\Delta G^0$ only means $K < 1$: little product at equilibrium.`,
  },
  explanation: {
    intuition: [
      t`$\Delta G^0$ is the Gibbs energy change when all reactants and products are in their standard states.`,
      t`The actual $\Delta G$ depends on the mixture's composition, through the **reaction quotient** $Q$.`,
      t`As the reaction proceeds, $\Delta G$ rises towards zero.`,
      t`At equilibrium $\Delta G = 0$ and $Q$ equals the equilibrium constant $K$.`,
      t`So $\Delta G^0$ fixes $K$: the more negative $\Delta G^0$, the larger $K$.`,
    ],
    formal: [
      {
        title: "Gibbs energy and Q",
        points: [
          t`$\Delta G = \Delta G^0 + RT\ln Q$.`,
          t`With $\ln Q = 2.303\log_{10} Q$: $\Delta G$ $= \Delta G^0 + 2.303\,RT\log_{10} Q$.`,
          t`$Q$ has products over reactants, each to the power of its coefficient; for gases, partial pressures in bar.`,
          t`At equilibrium $\Delta G = 0$ and $Q = K$.`,
        ],
      },
      {
        title: "The relation with K",
        points: [
          t`So $0 = \Delta G^0 + 2.303\,RT\log_{10} K$.`,
          t`$\Delta G^0 = -2.303\,RT\log_{10} K$.`,
          t`$\Delta G^0 < 0$: $K > 1$, products are favoured at equilibrium.`,
          t`$\Delta G^0 > 0$: $K < 1$, reactants are favoured.`,
          t`$\Delta G^0 = 0$: $K = 1$.`,
        ],
      },
      {
        title: "Using the relation",
        points: [
          t`Take $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$ and $T$ in kelvin.`,
          t`$\Delta G^0$ then comes out in $\mathrm{J\,mol^{-1}}$; divide by $1000$ for kJ.`,
          t`At $298\ \mathrm{K}$, $2.303\,RT$ $= 5706\ \mathrm{J\,mol^{-1}}$.`,
          t`To find $K$: $\log_{10} K = -\dfrac{\Delta G^0}{2.303\,RT}$, then take the antilog.`,
        ],
      },
    ],
    worked: {
      prompt: t`At $298\ \mathrm{K}$ a reaction has $K = 1.0 \times 10^{5}$. Find $\Delta G^0$ ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$).`,
      steps: [
        t`$\log_{10} K = \log_{10}(1.0 \times 10^{5}) = 5$.`,
        t`$2.303\,RT = 2.303 \times 8.314 \times 298$ $= 5706\ \mathrm{J\,mol^{-1}}$.`,
        t`$\Delta G^0 = -5706 \times 5$ $= -28530\ \mathrm{J\,mol^{-1}}$.`,
        t`$\Delta G^0 \approx -28.5\ \mathrm{kJ\,mol^{-1}}$, negative as $K > 1$.`,
      ],
      answer: t`$\Delta G^0 \approx -28.5\ \mathrm{kJ\,mol^{-1}}$`,
    },
    visualSpec: t`Slide $\Delta G^0$ from negative to positive and watch $K$ on a log scale fall through $1$ as the equilibrium mixture shifts from products to reactants.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Uses $\log_{10}$ but leaves out the $2.303$.`,
      remediation: t`$RT\ln K$ in common logs is $2.303\,RT\log_{10} K$: keep the $2.303$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C12-M2",
      mistake: t`Drops the minus sign: $\Delta G^0 = +2.303\,RT\log_{10} K$.`,
      remediation: t`$\Delta G^0 = -2.303\,RT\log_{10} K$: a large $K$ goes with a negative $\Delta G^0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Uses the Celsius temperature.",
      remediation: t`$T$ is the absolute temperature: add $273$ to the Celsius figure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: t`Uses $\Delta G^0$ in kJ with $R$ in $\mathrm{J\,K^{-1}\,mol^{-1}}$.`,
      remediation: t`With $R$ in joules, put $\Delta G^0$ in joules too: multiply kJ by $1000$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: t`Writes $Q$ as reactants over products.`,
      remediation: t`$Q$, like $K$, has the products on top, each raised to its coefficient.`,
      fallback: { kind: "ext", topic: "equilibrium constant (Std XI Chemistry)" },
    },
    {
      id: "C12-M6",
      mistake: t`Thinks $\Delta G^0$ is zero at equilibrium, confusing it with $\Delta G$.`,
      remediation: t`At equilibrium $\Delta G = 0$; $\Delta G^0$ is a fixed number for the reaction, equal to $-2.303\,RT\log_{10} K$.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.18" },
      stem: t`For $\ce{C2H4(g) + H2(g)}$ $\ce{-> C2H6(g)}$, $K_p = 3.356 \times 10^{17}$ at $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$). With $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$, $\Delta G^0$ for the reaction is`,
      verify: { kind: "value", inputs: { K: "3.356e17", T: "298" }, params: { ask: "dG0" } },
      options: [
        { key: "A", text: t`$-43.4\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M1", value: "-43.4000000000000" },
        { key: "B", text: t`$100\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M2", value: "100" },
        { key: "C", text: t`$-8.39\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M3", value: "-8.39000000000000" },
        { key: "D", text: t`$-100\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-100" },
      ],
      solution: {
        steps: [
          t`$\log_{10}(3.356 \times 10^{17}) = 17.526$.`,
          t`$\Delta G^0 = -2.303 \times 8.314 \times 298 \times 17.526$ $\approx -100000\ \mathrm{J\,mol^{-1}}$.`,
          t`$\Delta G^0 = -100\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.3 (i)" },
      stem: t`For $\ce{CO(g) + 2H2(g)}$ $\ce{<=> CH3OH(g)}$, $\Delta G^0 = -24.8\ \mathrm{kJ\,mol^{-1}}$ at $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$). With $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$, the equilibrium constant $K_p$ is`,
      verify: { kind: "value", inputs: { dG0: "-24.8", T: "298" }, params: { ask: "K" } },
      options: [
        { key: "A", text: t`$1.01$`, correct: false, misconceptionId: "C12-M4", value: "1.01000000000000" },
        { key: "B", text: t`$2.22 \times 10^{4}$`, correct: true, value: "22200" },
        { key: "C", text: t`$1.02 \times 10^{10}$`, correct: false, misconceptionId: "C12-M1", value: "10200000000" },
        { key: "D", text: t`$4.5 \times 10^{-5}$`, correct: false, misconceptionId: "C12-M2", value: "4.50000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$\log_{10} K = -\dfrac{\Delta G^0}{2.303\,RT}$ $= \dfrac{24800}{5706}$ $= 4.346$.`,
          t`$K = 10^{4.346}$ $\approx 2.22 \times 10^{4}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.20" },
      stem: t`For $\ce{CO(g) + 2H2(g)}$ $\ce{-> CH3OH(g)}$, $\Delta G^0 = -24.8\ \mathrm{kJ\,mol^{-1}}$ at $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$). With $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$, $\Delta G$ when $P_{CO} = 4\ \mathrm{bar}$, $P_{H_2} = 2\ \mathrm{bar}$ and $P_{CH_3OH} = 2\ \mathrm{bar}$ is`,
      verify: { kind: "value", inputs: { dG0: "-24.8", T: "298", P_CO: "4", P_H2: "2", P_M: "2" }, params: { ask: "dG_Q", sf: "4" } },
      options: [
        { key: "A", text: t`$-19.65\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M5", value: "-19.6500000000000" },
        { key: "B", text: t`$-29.95\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-29.9500000000000" },
        { key: "C", text: t`$-27.04\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M1", value: "-27.0400000000000" },
        { key: "D", text: t`$-25.23\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M3", value: "-25.2300000000000" },
      ],
      solution: {
        steps: [
          t`$Q = \dfrac{P_{CH_3OH}}{P_{CO} \times P_{H_2}^2}$ $= \dfrac{2}{4 \times 2^2} = 0.125$.`,
          t`$2.303\,RT = 5.706\ \mathrm{kJ\,mol^{-1}}$ and $\log_{10} 0.125 = -0.903$.`,
          t`$\Delta G = -24.8 + 5.706 \times (-0.903)$ $= -29.95\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.3 (i)" },
      stem: t`At equilibrium $\Delta G = 0$ and the reaction quotient equals $K$. So the standard Gibbs energy change $\Delta G^0$ equals`,
      verify: { kind: "value", inputs: {  }, params: { ask: "relation" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C12-M6", value: "zero_at_eq" },
        { key: "B", text: t`$-2.303\,RT\log_{10} K$`, correct: true, value: "minus_2303RTlogK" },
        { key: "C", text: t`$-RT\log_{10} K$`, correct: false, misconceptionId: "C12-M1", value: "minus_RTlogK" },
        { key: "D", text: t`$+2.303\,RT\log_{10} K$`, correct: false, misconceptionId: "C12-M2", value: "plus_2303RTlogK" },
      ],
      solution: {
        steps: [
          t`$\Delta G = \Delta G^0 + 2.303\,RT\log_{10} Q$.`,
          t`At equilibrium: $0 = \Delta G^0 + 2.303\,RT\log_{10} K$.`,
          t`So $\Delta G^0 = -2.303\,RT\log_{10} K$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`For $\ce{N2(g) + O2(g) <=> 2NO(g)}$, $K = 4.8 \times 10^{-31}$ at $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$). With $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$, $\Delta G^0$ is`,
      verify: { kind: "value", inputs: { K: "4.8e-31", T: "298" }, params: { ask: "dG0" } },
      options: [
        { key: "A", text: t`$-173\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M2", value: "-173" },
        { key: "B", text: t`$14.5\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M3", value: "14.5000000000000" },
        { key: "C", text: t`$173\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "173" },
        { key: "D", text: t`$75.1\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C12-M1", value: "75.1000000000000" },
      ],
      solution: {
        steps: [
          t`$\log_{10}(4.8 \times 10^{-31}) = -30.32$.`,
          t`$\Delta G^0 = -5706 \times (-30.32)$ $\approx 173000\ \mathrm{J\,mol^{-1}}$.`,
          t`$\Delta G^0 = +173\ \mathrm{kJ\,mol^{-1}}$: positive, as $K < 1$.`,
        ],
      },
    },
  ],
};
