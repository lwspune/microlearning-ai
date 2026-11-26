import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A burn from steam at $100^\circ\mathrm{C}$ is far worse than a splash of boiling water at the same temperature. Why?`,
    reveal: t`Steam first gives out its enthalpy of vaporization as it condenses on the skin, about $41\ \mathrm{kJ}$ per mole, before it even starts to cool.`,
  },
  explanation: {
    intuition: [
      t`Melting, boiling and subliming change the physical state of a substance, not what it is.`,
      t`Each needs heat to pull the particles apart, while the temperature stays constant.`,
      t`The enthalpy change per mole for such a change is its **enthalpy of transformation**.`,
      t`The reverse change gives the same amount of heat back out.`,
      t`For $n$ moles, the heat is $n$ times the molar enthalpy.`,
    ],
    formal: [
      {
        title: "Fusion and vaporization",
        points: [
          t`**Enthalpy of fusion** $\Delta_{fus}H$: the enthalpy change when 1 mol of a solid melts at constant $T$ and $P$.`,
          t`For ice, $\ce{H2O(s) -> H2O(l)}$, $\Delta_{fus}H^0 = 6.01\ \mathrm{kJ\,mol^{-1}}$.`,
          t`**Enthalpy of vaporization** $\Delta_{vap}H$: the enthalpy change when 1 mol of a liquid vaporizes.`,
          t`For water at $100^\circ\mathrm{C}$, $\Delta_{vap}H^0 = 40.7\ \mathrm{kJ\,mol^{-1}}$.`,
          t`Freezing releases heat: its enthalpy change is $-\Delta_{fus}H$.`,
          t`Condensation releases heat: its enthalpy change is $-\Delta_{vap}H$.`,
        ],
      },
      {
        title: "Sublimation and atomization",
        points: [
          t`**Enthalpy of sublimation** $\Delta_{sub}H$: 1 mol of a solid turns directly into vapour, like iodine.`,
          t`Enthalpy is a state function, so solid → liquid → vapour gives the same $\Delta H$ as the direct route.`,
          t`So $\Delta_{sub}H = \Delta_{fus}H + \Delta_{vap}H$.`,
          t`**Enthalpy of atomization** $\Delta_{atom}H$: 1 mol of a gaseous substance breaks into its gaseous atoms.`,
          t`$\ce{Cl2(g) -> 2Cl(g)}$: $\Delta_{atom}H = 242\ \mathrm{kJ\,mol^{-1}}$.`,
          t`$\ce{CH4(g) -> C(g) + 4H(g)}$: $\Delta_{atom}H = 1660\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
      {
        title: "Heat for several stages",
        points: [
          t`Heat for a phase change: $Q = n\,\Delta H$, with $n = \dfrac{m}{M}$.`,
          t`Heat to warm a liquid: $Q = m\,c\,\Delta T$, with $m$ in grams.`,
          t`$c$ is the specific heat, $4.18\ \mathrm{J\,g^{-1}\,K^{-1}}$ for water; $\Delta T$ is the change in temperature.`,
          t`A change of $1^\circ\mathrm{C}$ is a change of $1\ \mathrm{K}$.`,
          t`Add the stages in kJ: for example melt, warm, then vaporize.`,
        ],
      },
    ],
    worked: {
      prompt: t`$6.24\ \mathrm{g}$ of ethanol ($\ce{C2H5OH}$, $46\ \mathrm{g\,mol^{-1}}$) is vaporized by supplying $5.89\ \mathrm{kJ}$ of heat. Find $\Delta_{vap}H$ of ethanol.`,
      steps: [
        t`$n = \dfrac{6.24}{46} = 0.1357\ \mathrm{mol}$.`,
        t`$Q = n\,\Delta_{vap}H$, so $\Delta_{vap}H = \dfrac{Q}{n}$.`,
        t`$\Delta_{vap}H = \dfrac{5.89}{0.1357}$ $= 43.4\ \mathrm{kJ\,mol^{-1}}$.`,
      ],
      answer: t`$\Delta_{vap}H = 43.4\ \mathrm{kJ\,mol^{-1}}$`,
    },
    visualSpec: t`Heat a block of ice at a steady rate and watch the temperature-time graph rise, then flatten at each phase change.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Swaps moles and grams: multiplies a molar enthalpy by grams, or the specific heat by moles.",
      remediation: t`Molar enthalpies multiply moles, $n = \dfrac{m}{M}$; the specific heat multiplies grams.`,
      fallback: { kind: "ext", topic: "mole concept (Std XI Chemistry)" },
    },
    {
      id: "C06-M2",
      mistake: t`Takes $\Delta_{sub}H = \Delta_{vap}H - \Delta_{fus}H$.`,
      remediation: t`Sublimation is melting followed by vaporizing, so the enthalpies add: $\Delta_{sub}H = \Delta_{fus}H + \Delta_{vap}H$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: t`Takes $\Delta_{sub}H = \Delta_{vap}H$, leaving out melting.`,
      remediation: t`Solid to vapour includes the melting step too: add $\Delta_{fus}H$ to $\Delta_{vap}H$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Keeps the + sign for the reverse change, such as freezing or condensing.",
      remediation: t`The reverse change releases the same heat: condensing has $\Delta H = -\Delta_{vap}H$, freezing $-\Delta_{fus}H$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Leaves out the stage that warms or cools the liquid.",
      remediation: t`Add every stage: the heat to change the temperature, $m\,c\,\Delta T$, as well as each phase change.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Uses the final temperature in kelvin in place of the change $\Delta T$.`,
      remediation: t`$\Delta T$ is the change in temperature, final minus initial; a change of $1^\circ\mathrm{C}$ is a change of $1\ \mathrm{K}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (xviii)" },
      stem: t`What is the total heat needed to melt $180\ \mathrm{g}$ of ice at $0^\circ\mathrm{C}$, heat the water to $100^\circ\mathrm{C}$ and vaporise it? ($\Delta_{fus}H = 6.01$ and $\Delta_{vap}H = 40.7\ \mathrm{kJ\,mol^{-1}}$; $c = 4.18\ \mathrm{J\,g^{-1}\,K^{-1}}$)`,
      verify: { kind: "value", inputs: { m: "180", fus: "6.01", vap: "40.7", T1: "0", T2: "100", M: "18", c: "4.18" }, params: { stages: "melt heat vap", sf: "4" } },
      options: [
        { key: "A", text: t`$8412\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M1", value: "8412" },
        { key: "B", text: t`$467.1\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M5", value: "467.100000000000" },
        { key: "C", text: t`$747.7\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M6", value: "747.700000000000" },
        { key: "D", text: t`$542.3\ \mathrm{kJ}$`, correct: true, value: "542.300000000000" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{180}{18} = 10\ \mathrm{mol}$; melting: $10 \times 6.01 = 60.1\ \mathrm{kJ}$.`,
          t`Warming: $180 \times 4.18 \times 100$ $= 75240\ \mathrm{J} = 75.24\ \mathrm{kJ}$.`,
          t`Vaporizing: $10 \times 40.7 = 407\ \mathrm{kJ}$.`,
          t`Total $= 60.1 + 75.24 + 407$ $= 542.3\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.2 (iii)" },
      stem: t`What heat is needed to sublime $36\ \mathrm{g}$ of ice at $0^\circ\mathrm{C}$? At $0^\circ\mathrm{C}$, $\Delta_{fus}H = 6.01$ and $\Delta_{vap}H = 45.07\ \mathrm{kJ\,mol^{-1}}$.`,
      verify: { kind: "value", inputs: { m: "36", fus: "6.01", vap: "45.07", M: "18", c: "4.18" }, params: { stages: "sub" } },
      options: [
        { key: "A", text: t`$102\ \mathrm{kJ}$`, correct: true, value: "102" },
        { key: "B", text: t`$1840\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M1", value: "1840" },
        { key: "C", text: t`$78.1\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M2", value: "78.1000000000000" },
        { key: "D", text: t`$90.1\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M3", value: "90.1000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta_{sub}H = 6.01 + 45.07$ $= 51.08\ \mathrm{kJ\,mol^{-1}}$.`,
          t`$n = \dfrac{36}{18} = 2\ \mathrm{mol}$.`,
          t`Heat $= 2 \times 51.08 = 102\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#38" },
      stem: t`$9\ \mathrm{g}$ of water vapour turns directly into ice at $0^\circ\mathrm{C}$. What is the enthalpy change? At $0^\circ\mathrm{C}$, $\Delta_{fus}H = 6.01$ and $\Delta_{vap}H = 45.07\ \mathrm{kJ\,mol^{-1}}$.`,
      verify: { kind: "value", inputs: { m: "9", fus: "6.01", vap: "45.07", M: "18", c: "4.18" }, params: { stages: "sub", sign: "-1" } },
      options: [
        { key: "A", text: t`$-25.5\ \mathrm{kJ}$`, correct: true, value: "-25.5000000000000" },
        { key: "B", text: t`$-19.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M2", value: "-19.5000000000000" },
        { key: "C", text: t`$-22.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M3", value: "-22.5000000000000" },
        { key: "D", text: t`$+25.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M4", value: "25.5000000000000" },
      ],
      solution: {
        steps: [
          t`Vapour to ice is the reverse of sublimation: $\Delta H = -\Delta_{sub}H$ per mole.`,
          t`$\Delta_{sub}H = 6.01 + 45.07$ $= 51.08\ \mathrm{kJ\,mol^{-1}}$; $n = \dfrac{9}{18} = 0.5$.`,
          t`$\Delta H = -0.5 \times 51.08 = -25.5\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#44" },
      stem: t`$18\ \mathrm{g}$ of steam at $100^\circ\mathrm{C}$ condenses and the water cools to $25^\circ\mathrm{C}$. What is the enthalpy change? ($\Delta_{vap}H = 40.7\ \mathrm{kJ\,mol^{-1}}$; $c = 4.18\ \mathrm{J\,g^{-1}\,K^{-1}}$)`,
      verify: { kind: "value", inputs: { m: "18", vap: "40.7", T1: "25", T2: "100", M: "18", c: "4.18" }, params: { stages: "heat vap", sign: "-1" } },
      options: [
        { key: "A", text: t`$-40.7\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M5", value: "-40.7000000000000" },
        { key: "B", text: t`$-46.3\ \mathrm{kJ}$`, correct: true, value: "-46.3000000000000" },
        { key: "C", text: t`$-733\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M1", value: "-733" },
        { key: "D", text: t`$+46.3\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M4", value: "46.3000000000000" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{18}{18} = 1\ \mathrm{mol}$; condensing: $-1 \times 40.7 = -40.7\ \mathrm{kJ}$.`,
          t`Cooling: $-18 \times 4.18 \times 75$ $= -5643\ \mathrm{J} = -5.64\ \mathrm{kJ}$.`,
          t`Total $= -40.7 - 5.64 = -46.3\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#35" },
      stem: t`What heat is needed to warm $90\ \mathrm{g}$ of water from $25^\circ\mathrm{C}$ to $100^\circ\mathrm{C}$ and then vaporise it? ($\Delta_{vap}H = 40.7\ \mathrm{kJ\,mol^{-1}}$; $c = 4.18\ \mathrm{J\,g^{-1}\,K^{-1}}$)`,
      verify: { kind: "value", inputs: { m: "90", vap: "40.7", T1: "25", T2: "100", M: "18", c: "4.18" }, params: { stages: "heat vap" } },
      options: [
        { key: "A", text: t`$232\ \mathrm{kJ}$`, correct: true, value: "232" },
        { key: "B", text: t`$3660\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M1", value: "3660" },
        { key: "C", text: t`$204\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M5", value: "204" },
        { key: "D", text: t`$344\ \mathrm{kJ}$`, correct: false, misconceptionId: "C06-M6", value: "344" },
      ],
      solution: {
        steps: [
          t`Warming: $90 \times 4.18 \times 75$ $= 28215\ \mathrm{J} = 28.2\ \mathrm{kJ}$.`,
          t`$n = \dfrac{90}{18} = 5\ \mathrm{mol}$; vaporizing: $5 \times 40.7 = 203.5\ \mathrm{kJ}$.`,
          t`Total $= 28.2 + 203.5 = 232\ \mathrm{kJ}$.`,
        ],
      },
    },
  ],
};
