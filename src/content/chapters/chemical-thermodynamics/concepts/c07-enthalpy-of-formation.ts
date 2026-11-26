import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Tables list one number for each compound, its enthalpy of formation, yet chemists use them to find $\Delta H$ for thousands of reactions. How can one list cover every reaction?`,
    reveal: t`Every reaction can be pictured as breaking the reactants down to their elements and building the products back up. So $\Delta_r H^0$ is the products' formation enthalpies minus the reactants', each times its coefficient.`,
  },
  explanation: {
    intuition: [
      t`A **thermochemical equation** is a balanced equation with its $\Delta H$ and the physical states.`,
      t`Its $\Delta H$ belongs to the moles written in the equation.`,
      t`The **standard state** of a substance is its pure, most stable form at $1\ \mathrm{bar}$ and the stated temperature, usually $298\ \mathrm{K}$.`,
      t`The **standard enthalpy of formation** $\Delta_f H^0$ is the enthalpy change when one mole of a compound forms from its elements in their standard states.`,
      t`An element in its standard state needs no forming, so its $\Delta_f H^0$ is zero.`,
    ],
    formal: [
      {
        title: "Enthalpy of formation",
        points: [
          t`$\Delta_f H^0(\ce{CO2})$ is $\Delta_r H^0$ of $\ce{C(graphite) + O2(g)}$ $\ce{-> CO2(g)}$: $-393.5\ \mathrm{kJ\,mol^{-1}}$.`,
          t`Exactly one mole of the compound is formed, so fractions like $\ce{1/2 O2}$ may appear.`,
          t`The elements are in their standard states: graphite, not diamond; $\ce{O2(g)}$, not ozone.`,
          t`$\Delta_f H^0 = 0$ for $\ce{H2(g)}$, $\ce{O2(g)}$, $\ce{C(graphite)}$, $\ce{Fe(s)}$.`,
        ],
      },
      {
        title: "Reaction enthalpy from formation",
        points: [
          t`$\Delta_r H^0 = \sum \Delta_f H^0(\text{products})$ $- \sum \Delta_f H^0(\text{reactants})$.`,
          t`Multiply each $\Delta_f H^0$ by that substance's coefficient in the equation.`,
          t`Products come first: $\Delta H$ is always final minus initial.`,
          t`Elements in their standard states add nothing to either sum.`,
        ],
      },
      {
        title: "Enthalpy of combustion",
        points: [
          t`The **standard enthalpy of combustion** $\Delta_c H^0$ is the enthalpy change when one mole of a substance burns completely in oxygen, all in standard states.`,
          t`Example: $\ce{CH4(g) + 2O2(g)}$ $\ce{-> CO2(g) + 2H2O(l)}$ has $\Delta_c H^0 = -890\ \mathrm{kJ\,mol^{-1}}$.`,
          t`Combustion is always exothermic, so $\Delta_c H^0$ is negative.`,
          t`If the equation burns $2$ mol of fuel, divide its $\Delta_r H^0$ by $2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the standard enthalpy of combustion of ethene, $\ce{C2H4(g) + 3O2(g)}$ $\ce{-> 2CO2(g) + 2H2O(l)}$. $\Delta_f H^0$: $\ce{C2H4}$ $+52.3$, $\ce{CO2}$ $-393.5$, $\ce{H2O(l)}$ $-285.8\ \mathrm{kJ\,mol^{-1}}$.`,
      steps: [
        t`Products: $2(-393.5) + 2(-285.8)$ $= -1358.6\ \mathrm{kJ}$.`,
        t`Reactants: $52.3 + 3(0) = 52.3\ \mathrm{kJ}$, since $\ce{O2(g)}$ is an element.`,
        t`$\Delta_r H^0 = -1358.6 - 52.3$ $= -1410.9\ \mathrm{kJ}$.`,
        t`One mole of ethene burns, so $\Delta_c H^0 = -1410.9\ \mathrm{kJ\,mol^{-1}}$.`,
      ],
      answer: t`$\Delta_c H^0 = -1410.9\ \mathrm{kJ\,mol^{-1}}$`,
    },
    visualSpec: t`Drag reactants down to an 'elements' baseline and products up from it, and watch the two formation-enthalpy bars combine into $\Delta_r H^0$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Subtracts the products' formation enthalpies from the reactants'.",
      remediation: t`$\Delta H$ is final minus initial: $\sum \Delta_f H^0(\text{products})$ $- \sum \Delta_f H^0(\text{reactants})$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M2",
      mistake: t`Uses each $\Delta_f H^0$ once, ignoring the coefficients.`,
      remediation: t`$\Delta_f H^0$ is per mole: multiply it by the substance's coefficient in the balanced equation.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Takes $\Delta H$ of the equation as written as the value for one mole of a substance whose coefficient is not $1$.`,
      remediation: t`$\Delta_f H^0$ and $\Delta_c H^0$ are for one mole of the substance: divide the equation's $\Delta H$ by its coefficient.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Adds the products' and reactants' sums.",
      remediation: t`The reactants' sum is subtracted: $\Delta_r H^0 = \sum \Delta_f H^0(\text{products})$ $- \sum \Delta_f H^0(\text{reactants})$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks any form of an element can be the starting point, such as diamond or ozone.",
      remediation: t`Formation starts from the elements in their standard states, the most stable forms: graphite for carbon, $\ce{O2(g)}$ for oxygen.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks any reaction that makes the compound gives its enthalpy of formation.",
      remediation: t`Formation starts from the elements only, never from other compounds such as $\ce{CO}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M3 gives the key when the substance asked about has coefficient 1 in the equation; diagnose it on an equation that burns 2 mol of fuel.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.10" },
      stem: t`Given $\Delta_f H^0(\ce{CO2}) = -393.5$, $\Delta_f H^0(\ce{H2O}) = -285.8$ and $\Delta_f H^0(\ce{C2H6}) = -84.9$, all in $\mathrm{kJ\,mol^{-1}}$, the standard enthalpy of the reaction $\ce{2C2H6(g) + 7O2(g)}$ $\ce{-> 4CO2(g) + 6H2O(l)}$ is`,
      verify: { kind: "value", inputs: { CO2: "-393.5", H2O: "-285.8", C2H6: "-84.9" }, params: { ask: "dHr", prod: "CO2:4,H2O:6", reac: "C2H6:2,O2:7", sf: "4" } },
      options: [
        { key: "A", text: t`$-594.4\ \mathrm{kJ}$`, correct: false, misconceptionId: "C07-M2", value: "-594.400000000000" },
        { key: "B", text: t`$-3459\ \mathrm{kJ}$`, correct: false, misconceptionId: "C07-M4", value: "-3459" },
        { key: "C", text: t`$-3119\ \mathrm{kJ}$`, correct: true, value: "-3119" },
        { key: "D", text: t`$3119\ \mathrm{kJ}$`, correct: false, misconceptionId: "C07-M1", value: "3119" },
      ],
      solution: {
        steps: [
          t`Products: $4(-393.5) + 6(-285.8)$ $= -3288.8\ \mathrm{kJ}$.`,
          t`Reactants: $2(-84.9) + 7(0) = -169.8\ \mathrm{kJ}$.`,
          t`$\Delta_r H^0 = -3288.8 - (-169.8)$ $= -3119\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#31" },
      stem: t`The standard enthalpies of formation of methane, carbon dioxide and water are $-74.8$, $-393.5$ and $-285.8\ \mathrm{kJ\,mol^{-1}}$. The standard enthalpy of combustion of methane, $\ce{CH4(g) + 2O2(g)}$ $\ce{-> CO2(g) + 2H2O(l)}$, is`,
      verify: { kind: "value", inputs: { CH4: "-74.8", CO2: "-393.5", H2O: "-285.8" }, params: { ask: "dHc", per: "CH4", prod: "CO2:1,H2O:2", reac: "CH4:1,O2:2", sf: "4" } },
      options: [
        { key: "A", text: t`$890.3\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "890.300000000000" },
        { key: "B", text: t`$-604.5\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "-604.500000000000" },
        { key: "C", text: t`$-1040\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M4", value: "-1040" },
        { key: "D", text: t`$-890.3\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-890.300000000000" },
      ],
      solution: {
        steps: [
          t`Products: $-393.5 + 2(-285.8)$ $= -965.1\ \mathrm{kJ}$.`,
          t`Reactants: $-74.8 + 2(0) = -74.8\ \mathrm{kJ}$.`,
          t`$\Delta_c H^0 = -965.1 - (-74.8)$ $= -890.3\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (ix)" },
      stem: t`Given $\Delta_f H^0(\ce{Fe2O3}) = -824$, $\Delta_f H^0(\ce{CO}) = -110$ and $\Delta_f H^0(\ce{CO2}) = -393$, all in $\mathrm{kJ\,mol^{-1}}$, the standard enthalpy of the reaction $\ce{Fe2O3(s) + 3CO(g)}$ $\ce{-> 2Fe(s) + 3CO2(g)}$ is`,
      verify: { kind: "value", inputs: { Fe2O3: "-824", CO: "-110", CO2: "-393" }, params: { ask: "dHr", prod: "Fe:2,CO2:3", reac: "Fe2O3:1,CO:3", sf: "4" } },
      options: [
        { key: "A", text: t`$-2333\ \mathrm{kJ}$`, correct: false, misconceptionId: "C07-M4", value: "-2333" },
        { key: "B", text: t`$-25\ \mathrm{kJ}$`, correct: true, value: "-25" },
        { key: "C", text: t`$25\ \mathrm{kJ}$`, correct: false, misconceptionId: "C07-M1", value: "25" },
        { key: "D", text: t`$541\ \mathrm{kJ}$`, correct: false, misconceptionId: "C07-M2", value: "541" },
      ],
      solution: {
        steps: [
          t`Products: $2(0) + 3(-393)$ $= -1179\ \mathrm{kJ}$; iron is an element.`,
          t`Reactants: $-824 + 3(-110)$ $= -1154\ \mathrm{kJ}$.`,
          t`$\Delta_r H^0 = -1179 - (-1154)$ $= -25\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#43" },
      stem: t`Ethyne burns as $\ce{2C2H2(g) + 5O2(g)}$ $\ce{-> 4CO2(g) + 2H2O(l)}$. Given $\Delta_f H^0(\ce{C2H2}) = +226.7$, $\Delta_f H^0(\ce{CO2}) = -393.5$ and $\Delta_f H^0(\ce{H2O}) = -285.8$, all in $\mathrm{kJ\,mol^{-1}}$, the standard enthalpy of combustion of ethyne is`,
      verify: { kind: "value", inputs: { C2H2: "226.7", CO2: "-393.5", H2O: "-285.8" }, params: { ask: "dHc", per: "C2H2", prod: "CO2:4,H2O:2", reac: "C2H2:2,O2:5", sf: "4" } },
      options: [
        { key: "A", text: t`$-1300\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-1300" },
        { key: "B", text: t`$1300\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "1300" },
        { key: "C", text: t`$-906\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "-906" },
        { key: "D", text: t`$-2599\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M3", value: "-2599" },
      ],
      solution: {
        steps: [
          t`Products: $4(-393.5) + 2(-285.8)$ $= -2145.6\ \mathrm{kJ}$.`,
          t`Reactants: $2(226.7) + 5(0) = 453.4\ \mathrm{kJ}$.`,
          t`$\Delta_r H^0 = -2145.6 - 453.4$ $= -2599\ \mathrm{kJ}$ for $2$ mol of ethyne.`,
          t`Per mole: $\Delta_c H^0 = \dfrac{-2599}{2}$ $\approx -1300\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (iv)" },
      stem: t`For which reaction is $\Delta_r H^0$ the standard enthalpy of formation of $\ce{CO2(g)}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formation" } },
      options: [
        { key: "A", text: t`$\ce{2C(graphite) + 2O2(g)}$ $\ce{-> 2CO2(g)}$`, correct: false, misconceptionId: "C07-M3", value: "two_mol_eq" },
        { key: "B", text: t`$\ce{C(diamond) + O2(g)}$ $\ce{-> CO2(g)}$`, correct: false, misconceptionId: "C07-M5", value: "diamond_eq" },
        { key: "C", text: t`$\ce{CO(g) + 1/2 O2(g)}$ $\ce{-> CO2(g)}$`, correct: false, misconceptionId: "C07-M6", value: "from_CO_eq" },
        { key: "D", text: t`$\ce{C(graphite) + O2(g)}$ $\ce{-> CO2(g)}$`, correct: true, value: "graphite_eq" },
      ],
      solution: {
        steps: [
          t`Formation makes one mole of $\ce{CO2}$ from its elements in their standard states.`,
          t`Carbon's standard state is graphite and oxygen's is $\ce{O2(g)}$.`,
          t`So it is $\ce{C(graphite) + O2(g)}$ $\ce{-> CO2(g)}$.`,
        ],
      },
    },
  ],
};
