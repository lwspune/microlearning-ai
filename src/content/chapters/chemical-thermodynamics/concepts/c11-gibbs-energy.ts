import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Ice melts at $10^\circ\mathrm{C}$ but not at $-10^\circ\mathrm{C}$, though melting takes in about the same heat and gains about the same entropy at both. What changes?`,
    reveal: t`The temperature. Melting needs heat ($\Delta H > 0$) but gains entropy ($\Delta S > 0$), and the entropy term counts $T$ times over. Above $0^\circ\mathrm{C}$, $T\Delta S$ beats $\Delta H$, so $\Delta G = \Delta H - T\Delta S$ turns negative.`,
  },
  explanation: {
    intuition: [
      t`Two things favour a change: giving out heat ($\Delta H < 0$) and gaining disorder ($\Delta S > 0$).`,
      t`**Gibbs energy** $G$ weighs both for the system alone: $G = H - TS$.`,
      t`At constant $T$ and $P$, $\Delta G = \Delta H - T\Delta S$.`,
      t`A reaction is spontaneous when $\Delta G < 0$ and at equilibrium when $\Delta G = 0$.`,
      t`The higher the temperature, the more the $T\Delta S$ term counts.`,
    ],
    formal: [
      {
        title: "Gibbs energy and the second law",
        points: [
          t`$\Delta S_{total} = \Delta S_{sys} - \dfrac{\Delta H}{T}$.`,
          t`Multiply by $-T$: $-T\Delta S_{total}$ $= \Delta H - T\Delta S_{sys} = \Delta G$.`,
          t`So $\Delta S_{total} > 0$ means $\Delta G < 0$: the reaction is spontaneous.`,
          t`$\Delta G > 0$: nonspontaneous, though the reverse reaction is spontaneous.`,
          t`$\Delta G = 0$: the system is at equilibrium.`,
          t`Keep units together: $\Delta H$ in kJ needs $\Delta S$ in $\mathrm{kJ\,K^{-1}}$.`,
        ],
      },
      {
        title: "Signs of ΔH and ΔS",
        points: [
          t`$\Delta H < 0$, $\Delta S > 0$: $\Delta G < 0$ at all temperatures.`,
          t`$\Delta H > 0$, $\Delta S < 0$: $\Delta G > 0$ at all temperatures, never spontaneous.`,
          t`$\Delta H < 0$, $\Delta S < 0$: spontaneous only at low temperatures.`,
          t`$\Delta H > 0$, $\Delta S > 0$: spontaneous only at high temperatures.`,
        ],
      },
      {
        title: "The change-over temperature",
        points: [
          t`When $\Delta H$ and $\Delta S$ have the same sign, $\Delta G = 0$ at $T = \dfrac{\Delta H}{\Delta S}$.`,
          t`On one side of this temperature the reaction is spontaneous; on the other, not.`,
          t`Find the side by asking which term wins: $\Delta H$ at low $T$, $T\Delta S$ at high $T$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{CaCO3(s) -> CaO(s) + CO2(g)}$, $\Delta H^0 = +178\ \mathrm{kJ}$ and $\Delta S^0 = +161\ \mathrm{J\,K^{-1}}$. Is it spontaneous at $298\ \mathrm{K}$, and above what temperature is it spontaneous?`,
      steps: [
        t`$\Delta S^0 = 0.161\ \mathrm{kJ\,K^{-1}}$, so $T\Delta S^0$ $= 298 \times 0.161 = 48.0\ \mathrm{kJ}$.`,
        t`$\Delta G^0 = 178 - 48.0$ $= +130\ \mathrm{kJ}$: nonspontaneous at $298\ \mathrm{K}$.`,
        t`Both are positive, so it becomes spontaneous at high $T$.`,
        t`$T = \dfrac{178}{0.161}$ $\approx 1106\ \mathrm{K}$: spontaneous above about $1106\ \mathrm{K}$.`,
      ],
      answer: t`Nonspontaneous at $298\ \mathrm{K}$; spontaneous above about $1106\ \mathrm{K}$`,
    },
    visualSpec: t`Slide the temperature and watch the $\Delta H$ bar and the growing $T\Delta S$ bar; $\Delta G$ changes sign where they are equal.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Uses $\Delta H$ in kJ with $\Delta S$ in $\mathrm{J\,K^{-1}}$.`,
      remediation: t`Put both in the same energy unit: divide $\Delta S$ in $\mathrm{J\,K^{-1}}$ by $1000$ to use it with kJ.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Adds the entropy term: $\Delta G = \Delta H + T\Delta S$.`,
      remediation: t`A gain in entropy lowers $G$: $\Delta G = \Delta H - T\Delta S$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Uses the Celsius temperature.",
      remediation: t`$T$ is the absolute temperature: add $273$ to the Celsius figure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: t`Thinks a reaction is spontaneous when $\Delta G > 0$.`,
      remediation: t`$\Delta G = -T\Delta S_{total}$, so a spontaneous change, with $\Delta S_{total} > 0$, has $\Delta G < 0$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M5",
      mistake: t`Decides spontaneity from $\Delta H$ alone.`,
      remediation: t`$\Delta H$ is only half of $\Delta G = \Delta H - T\Delta S$; the $T\Delta S$ term can outweigh it.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M6",
      mistake: t`Decides spontaneity from $\Delta S$ of the system alone.`,
      remediation: t`$\Delta S_{sys}$ is only half of $\Delta G = \Delta H - T\Delta S$; the $\Delta H$ term can outweigh it.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    t`C11-M5 and C11-M6 give the key when $\Delta H < 0$ and $\Delta S > 0$ (or both opposite); diagnose them on reactions whose two signs agree.`,
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (xi)" },
      stem: t`For $\ce{2H2O(l) + O2(g)}$ $\ce{-> 2H2O2(l)}$, $\Delta H^0 = 196\ \mathrm{kJ}$ and $\Delta S^0 = -126\ \mathrm{J\,K^{-1}}$. At $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$), $\Delta G^0$ is`,
      verify: { kind: "value", inputs: { dH: "196", dS: "-126", T: "298" }, params: { ask: "dG", sf: "4" } },
      options: [
        { key: "A", text: t`$233.5\ \mathrm{kJ}$`, correct: true, value: "233.500000000000" },
        { key: "B", text: t`$37740\ \mathrm{kJ}$`, correct: false, misconceptionId: "C11-M1", value: "37740" },
        { key: "C", text: t`$158.5\ \mathrm{kJ}$`, correct: false, misconceptionId: "C11-M2", value: "158.500000000000" },
        { key: "D", text: t`$199.2\ \mathrm{kJ}$`, correct: false, misconceptionId: "C11-M3", value: "199.200000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta S^0 = -0.126\ \mathrm{kJ\,K^{-1}}$, so $T\Delta S^0$ $= 298 \times (-0.126) = -37.55\ \mathrm{kJ}$.`,
          t`$\Delta G^0 = 196 - (-37.55)$ $= 233.5\ \mathrm{kJ}$.`,
          t`$\Delta G^0 > 0$ at every temperature here, so the reaction is nonspontaneous and has no change-over temperature.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#19" },
      stem: t`For a reaction $\ce{A -> B}$, $\Delta H^0 = -37.4\ \mathrm{kJ}$ and $\Delta S^0 = 175.8\ \mathrm{J\,K^{-1}}$. At $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$), $\Delta G^0$ is`,
      verify: { kind: "value", inputs: { dH: "-37.4", dS: "175.8", T: "298" }, params: { ask: "dG", sf: "4" } },
      options: [
        { key: "A", text: t`$14.99\ \mathrm{kJ}$`, correct: false, misconceptionId: "C11-M2", value: "14.9900000000000" },
        { key: "B", text: t`$-41.8\ \mathrm{kJ}$`, correct: false, misconceptionId: "C11-M3", value: "-41.8000000000000" },
        { key: "C", text: t`$-89.79\ \mathrm{kJ}$`, correct: true, value: "-89.7900000000000" },
        { key: "D", text: t`$-52430\ \mathrm{kJ}$`, correct: false, misconceptionId: "C11-M1", value: "-52430" },
      ],
      solution: {
        steps: [
          t`$T\Delta S^0 = 298 \times 0.1758$ $= 52.39\ \mathrm{kJ}$.`,
          t`$\Delta G^0 = -37.4 - 52.39$ $= -89.79\ \mathrm{kJ}$.`,
          t`$\Delta H < 0$ and $\Delta S > 0$, so it is spontaneous at all temperatures.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.17" },
      stem: t`For a certain reaction $\Delta H^0 = -224\ \mathrm{kJ}$ and $\Delta S^0 = -153\ \mathrm{J\,K^{-1}}$. Assuming these do not change with temperature, the reaction is spontaneous`,
      verify: { kind: "value", inputs: { dH: "-224", dS: "-153" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`Only above $1464\ \mathrm{K}$`, correct: false, misconceptionId: "C11-M4", value: "above_T" },
        { key: "B", text: t`At all temperatures`, correct: false, misconceptionId: "C11-M5", value: "all_T" },
        { key: "C", text: t`At no temperature`, correct: false, misconceptionId: "C11-M6", value: "no_T" },
        { key: "D", text: t`Only below $1464\ \mathrm{K}$`, correct: true, value: "below_T" },
      ],
      solution: {
        steps: [
          t`Both $\Delta H^0$ and $\Delta S^0$ are negative: $\Delta H$ wins at low $T$.`,
          t`Change-over: $T = \dfrac{-224}{-0.153}$ $= 1464\ \mathrm{K}$.`,
          t`So the reaction is spontaneous only below $1464\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (ix)" },
      stem: t`For the vaporisation of water at $1\ \mathrm{bar}$, $\Delta H = 40.63\ \mathrm{kJ\,mol^{-1}}$ and $\Delta S = 108.8\ \mathrm{J\,K^{-1}\,mol^{-1}}$. Taking these as constant, vaporisation is spontaneous`,
      verify: { kind: "value", inputs: { dH: "40.63", dS: "108.8" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`At no temperature`, correct: false, misconceptionId: "C11-M5", value: "no_T" },
        { key: "B", text: t`At all temperatures`, correct: false, misconceptionId: "C11-M6", value: "all_T" },
        { key: "C", text: t`Only above $373.4\ \mathrm{K}$`, correct: true, value: "above_T" },
        { key: "D", text: t`Only below $373.4\ \mathrm{K}$`, correct: false, misconceptionId: "C11-M4", value: "below_T" },
      ],
      solution: {
        steps: [
          t`Both $\Delta H$ and $\Delta S$ are positive: $T\Delta S$ wins at high $T$.`,
          t`$\Delta G = 0$ at $T = \dfrac{40.63}{0.1088}$ $= 373.4\ \mathrm{K}$, the boiling point.`,
          t`So vaporisation is spontaneous only above $373.4\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#10" },
      stem: t`At constant temperature and pressure, the correct condition for a reaction to be spontaneous is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "criterion" } },
      options: [
        { key: "A", text: t`$\Delta G > 0$`, correct: false, misconceptionId: "C11-M4", value: "dG_positive" },
        { key: "B", text: t`$\Delta H < 0$`, correct: false, misconceptionId: "C11-M5", value: "dH_negative" },
        { key: "C", text: t`$\Delta S_{sys} > 0$`, correct: false, misconceptionId: "C11-M6", value: "dS_positive" },
        { key: "D", text: t`$\Delta G < 0$`, correct: true, value: "dG_negative" },
      ],
      solution: {
        steps: [
          t`$\Delta G = -T\Delta S_{total}$, and a spontaneous change has $\Delta S_{total} > 0$.`,
          t`So a reaction is spontaneous when $\Delta G < 0$.`,
        ],
      },
    },
  ],
};
