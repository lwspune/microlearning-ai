import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Graphite turns into diamond far too slowly to measure the heat. Yet tables give $\Delta H$ for $\ce{C(graphite) -> C(diamond)}$. Where does the number come from?`,
    reveal: t`Burn each: graphite gives $-393.5$ and diamond $-395.4\ \mathrm{kJ\,mol^{-1}}$. Burning graphite equals turning it into diamond and then burning the diamond, so $\Delta H = -393.5 - (-395.4)$ $= +1.9\ \mathrm{kJ\,mol^{-1}}$.`,
  },
  explanation: {
    intuition: [
      t`Enthalpy is a **state function**: its change depends only on the start and the end.`,
      t`So $\Delta H$ is the same whether a reaction goes in one step or in several.`,
      t`Thermochemical equations can be added and subtracted like algebraic equations.`,
      t`Their $\Delta H$ values add and subtract in exactly the same way.`,
      t`This finds $\Delta H$ for reactions we cannot carry out or measure directly.`,
    ],
    formal: [
      {
        title: "Hess's law",
        points: [
          t`**Hess's law of constant heat summation**: the enthalpy change of a reaction is the same in one step or in several.`,
          t`So the $\Delta H$ of a reaction is the sum of the $\Delta H$ values of the steps that add up to it.`,
          t`It follows because enthalpy is a state function.`,
        ],
      },
      {
        title: "Rules for combining equations",
        points: [
          t`Reversing an equation changes the sign of its $\Delta H$.`,
          t`Multiplying an equation by a number multiplies its $\Delta H$ by that number.`,
          t`Adding equations adds their $\Delta H$ values.`,
          t`A substance on both sides of the sum cancels, like a term in algebra.`,
        ],
      },
      {
        title: "Finding an unknown ΔH",
        points: [
          t`Write the target equation first.`,
          t`Pick each given equation for a substance in the target; reverse it if that substance is on the wrong side.`,
          t`Scale it so the coefficient matches the target.`,
          t`Add the adjusted equations and check that only the target is left.`,
          t`Add the adjusted $\Delta H$ values the same way.`,
        ],
      },
    ],
    worked: {
      prompt: t`Given $\ce{C(graphite) + O2(g)}$ $\ce{-> CO2(g)}$, $\Delta H^0 = -393.5\ \mathrm{kJ}$, and $\ce{CO(g) + 1/2 O2(g)}$ $\ce{-> CO2(g)}$, $\Delta H^0 = -283.0\ \mathrm{kJ}$, find $\Delta H^0$ for $\ce{C(graphite) + 1/2 O2(g)}$ $\ce{-> CO(g)}$.`,
      steps: [
        t`The target has $\ce{CO}$ as a product, so reverse the second equation: $\ce{CO2(g)}$ $\ce{-> CO(g) + 1/2 O2(g)}$, $\Delta H^0 = +283.0\ \mathrm{kJ}$.`,
        t`Keep the first equation as it is: $\Delta H^0 = -393.5\ \mathrm{kJ}$.`,
        t`Add: $\ce{CO2}$ cancels and half the $\ce{O2}$ cancels, leaving the target.`,
        t`$\Delta H^0 = -393.5 + 283.0$ $= -110.5\ \mathrm{kJ}$.`,
      ],
      answer: t`$\Delta H^0 = -110.5\ \mathrm{kJ}$`,
    },
    visualSpec: t`Drag given equations into a sum, flip and scale them, and watch their $\Delta H$ bars flip and stretch until they stack into the target's $\Delta H$.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Reverses an equation but keeps the sign of its $\Delta H$.`,
      remediation: t`Reversing an equation changes the sign of its $\Delta H$: the heat given out one way is taken in the other way.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Multiplies an equation but not its $\Delta H$.`,
      remediation: t`$\Delta H$ is extensive: doubling the moles in an equation doubles its $\Delta H$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Adds the given $\Delta H$ values as printed, without reversing or scaling.`,
      remediation: t`First make the given equations add up to the target, reversing and multiplying them; then combine $\Delta H$ in the same way.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Combines the equations into the reverse of the target reaction.",
      remediation: t`Check the sum against the target: the target's reactants must end up on the left. The reverse reaction has the opposite sign of $\Delta H$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M2 gives the key when every equation is used once (only reversed); diagnose it on an item that scales an equation.",
    "C08-M1 and C08-M3 agree when no equation is scaled; an item lists only one of them then.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.15" },
      stem: t`Given (i) $\ce{Si(s) + O2(g) -> SiO2(s)}$, $\Delta_r H^0 = -911\ \mathrm{kJ}$; (ii) $\ce{C(graphite) + 1/2 O2(g)}$ $\ce{-> CO(g)}$, $\Delta_r H^0 = -110.5\ \mathrm{kJ}$; (iii) $\ce{Si(s) + C(graphite)}$ $\ce{-> SiC(s)}$, $\Delta_r H^0 = -65.3\ \mathrm{kJ}$. The standard enthalpy of $\ce{SiO2(s) + 3C(graphite)}$ $\ce{-> SiC(s) + 2CO(g)}$ is`,
      verify: { kind: "value", inputs: { h1: "-911", h2: "-110.5", h3: "-65.3" }, params: { c: "-1,2,1", sf: "4" } },
      options: [
        { key: "A", text: t`$624.7\ \mathrm{kJ}$`, correct: true, value: "624.700000000000" },
        { key: "B", text: t`$-1197\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M1", value: "-1197" },
        { key: "C", text: t`$735.2\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M2", value: "735.200000000000" },
        { key: "D", text: t`$-624.7\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M4", value: "-624.700000000000" },
      ],
      solution: {
        steps: [
          t`Reverse (i): $\ce{SiO2(s) -> Si(s) + O2(g)}$, $+911\ \mathrm{kJ}$.`,
          t`Double (ii): $\ce{2C + O2 -> 2CO}$, $2(-110.5) = -221\ \mathrm{kJ}$; keep (iii), $-65.3\ \mathrm{kJ}$.`,
          t`Adding cancels $\ce{Si}$ and $\ce{O2}$ and gives the target.`,
          t`$\Delta_r H^0 = 911 - 221 - 65.3$ $= 624.7\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.14" },
      stem: t`Given (i) $\ce{2Al(s) + Fe2O3(s)}$ $\ce{-> 2Fe(s) + Al2O3(s)}$, $\Delta_r H^0 = -847.6\ \mathrm{kJ}$; (ii) $\ce{2Al(s) + 3/2 O2(g)}$ $\ce{-> Al2O3(s)}$, $\Delta_r H^0 = -1670\ \mathrm{kJ}$. The standard enthalpy of $\ce{4Fe(s) + 3O2(g)}$ $\ce{-> 2Fe2O3(s)}$ is`,
      verify: { kind: "value", inputs: { h1: "-847.6", h2: "-1670" }, params: { c: "-2,2", sf: "4" } },
      options: [
        { key: "A", text: t`$-822.4\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M2", value: "-822.400000000000" },
        { key: "B", text: t`$-2518\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M3", value: "-2518" },
        { key: "C", text: t`$1645\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M4", value: "1645" },
        { key: "D", text: t`$-1645\ \mathrm{kJ}$`, correct: true, value: "-1645" },
      ],
      solution: {
        steps: [
          t`Reverse (i) and double it: $\ce{4Fe + 2Al2O3}$ $\ce{-> 4Al + 2Fe2O3}$, $+1695.2\ \mathrm{kJ}$.`,
          t`Double (ii): $\ce{4Al + 3O2 -> 2Al2O3}$, $-3340\ \mathrm{kJ}$.`,
          t`Adding cancels $\ce{Al}$ and $\ce{Al2O3}$: $\Delta_r H^0 = 1695.2 - 3340$ $\approx -1645\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#27" },
      stem: t`Given (i) $\ce{CH3OH(l) + 3/2 O2(g)}$ $\ce{-> CO2(g) + 2H2O(l)}$, $\Delta H^0 = -726\ \mathrm{kJ}$; (ii) $\ce{C(graphite) + O2(g)}$ $\ce{-> CO2(g)}$, $\Delta H^0 = -393\ \mathrm{kJ}$; (iii) $\ce{H2(g) + 1/2 O2(g)}$ $\ce{-> H2O(l)}$, $\Delta H^0 = -286\ \mathrm{kJ}$. The standard enthalpy of formation of $\ce{CH3OH(l)}$ is`,
      verify: { kind: "value", inputs: { h1: "-726", h2: "-393", h3: "-286" }, params: { c: "-1,1,2", sf: "4" } },
      options: [
        { key: "A", text: t`$-1691\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C08-M1", value: "-1691" },
        { key: "B", text: t`$47\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C08-M2", value: "47" },
        { key: "C", text: t`$-1405\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C08-M3", value: "-1405" },
        { key: "D", text: t`$-239\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-239" },
      ],
      solution: {
        steps: [
          t`Target: $\ce{C + 2H2 + 1/2 O2}$ $\ce{-> CH3OH(l)}$.`,
          t`Reverse (i): $+726\ \mathrm{kJ}$; keep (ii): $-393\ \mathrm{kJ}$; double (iii): $-572\ \mathrm{kJ}$.`,
          t`$\ce{CO2}$, $\ce{H2O}$ and the extra $\ce{O2}$ cancel.`,
          t`$\Delta_f H^0 = 726 - 393 - 572$ $= -239\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (xvii)" },
      stem: t`Given (i) $\ce{2H3BO3(aq)}$ $\ce{-> B2O3(s) + 3H2O(l)}$, $\Delta H^0 = 14.4\ \mathrm{kJ}$; (ii) $\ce{H3BO3(aq)}$ $\ce{-> HBO2(aq) + H2O(l)}$, $\Delta H^0 = -0.02\ \mathrm{kJ}$; (iii) $\ce{H2B4O7(s)}$ $\ce{-> 2B2O3(s) + H2O(l)}$, $\Delta H^0 = 17.3\ \mathrm{kJ}$. At $298\ \mathrm{K}$, $\Delta H^0$ for $\ce{H2B4O7(s) + H2O(l)}$ $\ce{-> 4HBO2(aq)}$ is`,
      verify: { kind: "value", inputs: { h1: "14.4", h2: "-0.02", h3: "17.3" }, params: { c: "-2,4,1", sf: "4" } },
      options: [
        { key: "A", text: t`$31.68\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M3", value: "31.6800000000000" },
        { key: "B", text: t`$11.58\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M4", value: "11.5800000000000" },
        { key: "C", text: t`$-11.58\ \mathrm{kJ}$`, correct: true, value: "-11.5800000000000" },
        { key: "D", text: t`$2.88\ \mathrm{kJ}$`, correct: false, misconceptionId: "C08-M2", value: "2.88000000000000" },
      ],
      solution: {
        steps: [
          t`Keep (iii): $17.3\ \mathrm{kJ}$.`,
          t`Reverse (i) and double it: $\ce{2B2O3 + 6H2O}$ $\ce{-> 4H3BO3}$, $-28.8\ \mathrm{kJ}$.`,
          t`Multiply (ii) by $4$: $\ce{4H3BO3}$ $\ce{-> 4HBO2 + 4H2O}$, $-0.08\ \mathrm{kJ}$.`,
          t`Adding gives the target: $\Delta H^0 = 17.3 - 28.8 - 0.08$ $= -11.58\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#21" },
      stem: t`Given (i) $\ce{C2H5OH(l) + 3O2(g)}$ $\ce{-> 2CO2(g) + 3H2O(l)}$, $\Delta H^0 = -1368\ \mathrm{kJ}$; (ii) $\ce{C(s) + O2(g) -> CO2(g)}$, $\Delta H^0 = -393.5\ \mathrm{kJ}$; (iii) $\ce{H2(g) + 1/2 O2(g)}$ $\ce{-> H2O(l)}$, $\Delta H^0 = -286\ \mathrm{kJ}$. The molar heat of formation of liquid ethanol is`,
      verify: { kind: "value", inputs: { h1: "-1368", h2: "-393.5", h3: "-286" }, params: { c: "-1,2,3", sf: "4" } },
      options: [
        { key: "A", text: t`$277\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C08-M4", value: "277" },
        { key: "B", text: t`$-277\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-277" },
        { key: "C", text: t`$-3013\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C08-M1", value: "-3013" },
        { key: "D", text: t`$-2048\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C08-M3", value: "-2048" },
      ],
      solution: {
        steps: [
          t`Target: $\ce{2C + 3H2 + 1/2 O2}$ $\ce{-> C2H5OH(l)}$.`,
          t`Reverse (i): $+1368$; double (ii): $-787$; triple (iii): $-858\ \mathrm{kJ}$.`,
          t`$\Delta_f H^0 = 1368 - 787 - 858$ $= -277\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
  ],
};
