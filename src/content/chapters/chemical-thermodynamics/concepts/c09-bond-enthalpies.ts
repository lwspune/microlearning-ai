import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Burning methane breaks strong $\ce{C-H}$ and $\ce{O=O}$ bonds, and breaking bonds always costs energy. So why does a gas flame give out heat?`,
    reveal: t`Because new bonds form too, in $\ce{CO2}$ and $\ce{H2O}$, and forming a bond gives out energy. The new bonds are stronger overall, so more energy comes out than went in.`,
  },
  explanation: {
    intuition: [
      t`A reaction breaks some bonds in the reactants and forms new bonds in the products.`,
      t`Breaking a bond always takes in energy; forming a bond always gives it out.`,
      t`The **bond enthalpy** is the energy needed to break one mole of a bond in gaseous molecules into gaseous atoms.`,
      t`If the bonds formed are stronger than those broken, the reaction is exothermic.`,
      t`If the bonds broken are stronger, it is endothermic.`,
    ],
    formal: [
      {
        title: "The bond enthalpy rule",
        points: [
          t`$\Delta_r H^0 = \sum$ (bonds broken) $- \sum$ (bonds formed), each in bond enthalpies.`,
          t`Multiply each bond enthalpy by the number of such bonds broken or formed.`,
          t`So $\ce{2Cl(g) -> Cl2(g)}$ is exothermic: a bond forms and none breaks.`,
          t`Bond enthalpies are averages over many molecules, so the result is an estimate.`,
          t`The rule applies to reactions in which everything is a gas.`,
        ],
      },
      {
        title: "Counting the bonds",
        points: [
          t`Write the structure of each molecule and list its bonds.`,
          t`A bond present on both sides unchanged can be left out of both sums.`,
          t`If you break every reactant bond, form every product bond too.`,
          t`For an enthalpy of formation, write the equation for one mole of product, with fractions if needed.`,
          t`An unknown bond enthalpy comes from a known $\Delta_r H^0$ by solving the same equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Bond enthalpies: $\ce{N#N}$ $946$, $\ce{H-H}$ $435$, $\ce{N-H}$ $389\ \mathrm{kJ\,mol^{-1}}$. Estimate $\Delta_r H^0$ for $\ce{N2(g) + 3H2(g)}$ $\ce{-> 2NH3(g)}$.`,
      steps: [
        t`Bonds broken: one $\ce{N#N}$ and three $\ce{H-H}$: $946 + 3(435)$ $= 2251\ \mathrm{kJ}$.`,
        t`Bonds formed: each $\ce{NH3}$ has three $\ce{N-H}$, so six: $6(389) = 2334\ \mathrm{kJ}$.`,
        t`$\Delta_r H^0 = 2251 - 2334$ $= -83\ \mathrm{kJ}$.`,
      ],
      answer: t`$\Delta_r H^0 \approx -83\ \mathrm{kJ}$`,
    },
    visualSpec: t`Break the reactant bonds to lift atoms up an energy ladder, then snap the product bonds together and watch the drop: the net step is $\Delta_r H^0$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Subtracts the bonds broken from the bonds formed, as with products minus reactants.",
      remediation: t`Breaking bonds takes energy in and forming them gives it out: $\Delta_r H^0 = \sum$ (broken) $- \sum$ (formed).`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Counts each kind of bond once, whatever the number of such bonds.",
      remediation: "Multiply each bond enthalpy by how many of those bonds break or form in the balanced equation.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Gives $\Delta H$ for the whole-number equation as the enthalpy of formation.`,
      remediation: t`An enthalpy of formation is for one mole of product: use $\ce{1/2 H2 + 1/2 Cl2 -> HCl}$, or halve the value for $2$ mol.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C09-M4",
      mistake: "Adds the bond enthalpies of the bonds broken and formed.",
      remediation: "Energy goes in to break bonds and comes out when they form, so the second sum is subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Breaks every bond in the reactants but forms only the new bonds.",
      remediation: "Bonds that survive the reaction are formed again in the products: count them on both sides, or leave them out of both.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C09-M5 gives the key when no bond survives unchanged (as in the combustion of methane); diagnose it on a reaction that keeps some bonds.",
    "C09-M3 applies only to an enthalpy of formation whose one-mole equation has fractions.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (x)" },
      stem: t`The bond enthalpies of $\ce{H-H}$, $\ce{Cl-Cl}$ and $\ce{H-Cl}$ are $434$, $242$ and $431\ \mathrm{kJ\,mol^{-1}}$. The standard enthalpy of formation of $\ce{HCl(g)}$ is`,
      verify: { kind: "value", inputs: { HH: "434", ClCl: "242", HCl: "431" }, params: { ask: "dHf", broken: "HH:1/2,ClCl:1/2", formed: "HCl:1", scale: "2" } },
      options: [
        { key: "A", text: t`$245\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M2", value: "245" },
        { key: "B", text: t`$-186\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M3", value: "-186" },
        { key: "C", text: t`$-93\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "-93" },
        { key: "D", text: t`$93\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M1", value: "93" },
      ],
      solution: {
        steps: [
          t`For one mole: $\ce{1/2 H2(g) + 1/2 Cl2(g)}$ $\ce{-> HCl(g)}$.`,
          t`Broken: $\frac{1}{2}(434) + \frac{1}{2}(242)$ $= 338\ \mathrm{kJ}$. Formed: $431\ \mathrm{kJ}$.`,
          t`$\Delta_f H^0 = 338 - 431$ $= -93\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.12" },
      stem: t`Bond enthalpies: $\ce{N-H}$ $389$, $\ce{H-H}$ $435$, $\ce{N-N}$ $159\ \mathrm{kJ\,mol^{-1}}$. Hydrazine has one $\ce{N-N}$ and four $\ce{N-H}$ bonds. The standard enthalpy of $\ce{N2H4(g) + H2(g)}$ $\ce{-> 2NH3(g)}$ is`,
      verify: { kind: "value", inputs: { NH: "389", HH: "435", NN: "159" }, params: { ask: "dH", broken: "NN:1,HH:1", formed: "NH:2", kept: "NH:4", sf: "4" } },
      options: [
        { key: "A", text: t`$-184\ \mathrm{kJ}$`, correct: true, value: "-184" },
        { key: "B", text: t`$184\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M1", value: "184" },
        { key: "C", text: t`$205\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M2", value: "205" },
        { key: "D", text: t`$1372\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M5", value: "1372" },
      ],
      solution: {
        steps: [
          t`The four $\ce{N-H}$ bonds of $\ce{N2H4}$ survive; the change breaks one $\ce{N-N}$ and one $\ce{H-H}$.`,
          t`The two $\ce{NH3}$ have six $\ce{N-H}$, so two new $\ce{N-H}$ form.`,
          t`$\Delta_r H^0 = 159 + 435 - 2(389)$ $= -184\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#18" },
      stem: t`For $\ce{CH4(g) + 2Cl2(g)}$ $\ce{-> CH2Cl2(g) + 2HCl(g)}$, $\Delta_r H^0 = -208\ \mathrm{kJ}$. The bond enthalpies of $\ce{C-H}$, $\ce{Cl-Cl}$ and $\ce{H-Cl}$ are $414$, $243$ and $431\ \mathrm{kJ\,mol^{-1}}$. The $\ce{C-Cl}$ bond enthalpy is`,
      verify: { kind: "value", inputs: { CH: "414", ClCl: "243", HCl: "431", dH: "-208" }, params: { ask: "bond", x: "CCl", broken: "CH:2,ClCl:2", formed: "CCl:2,HCl:2", kept: "CH:2" } },
      options: [
        { key: "A", text: t`$122\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M1", value: "122" },
        { key: "B", text: t`$434\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M2", value: "434" },
        { key: "C", text: t`$744\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M5", value: "744" },
        { key: "D", text: t`$330\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "330" },
      ],
      solution: {
        steps: [
          t`Two $\ce{C-H}$ and two $\ce{Cl-Cl}$ break: $2(414) + 2(243)$ $= 1314\ \mathrm{kJ}$.`,
          t`Two $\ce{C-Cl}$ and two $\ce{H-Cl}$ form: $2x + 862$.`,
          t`$-208 = 1314 - (2x + 862)$, so $2x = 660$.`,
          t`$\ce{C-Cl}$ bond enthalpy $x = 330\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.3 (iii)" },
      stem: t`Bond enthalpies: $\ce{C=C}$ $611$, $\ce{C-C}$ $346$, $\ce{C-H}$ $414$, $\ce{H-H}$ $435\ \mathrm{kJ\,mol^{-1}}$. The standard enthalpy of $\ce{CH2=CH2(g) + H2(g)}$ $\ce{-> CH3-CH3(g)}$ is`,
      verify: { kind: "value", inputs: { CC2: "611", CC: "346", CH: "414", HH: "435" }, params: { ask: "dH", broken: "CC2:1,HH:1", formed: "CC:1,CH:2", kept: "CH:4", sf: "4" } },
      options: [
        { key: "A", text: t`$-128\ \mathrm{kJ}$`, correct: true, value: "-128" },
        { key: "B", text: t`$128\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M1", value: "128" },
        { key: "C", text: t`$2220\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M4", value: "2220" },
        { key: "D", text: t`$1528\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M5", value: "1528" },
      ],
      solution: {
        steps: [
          t`The four $\ce{C-H}$ bonds of ethene survive.`,
          t`Broken: $\ce{C=C}$ and $\ce{H-H}$: $611 + 435$ $= 1046\ \mathrm{kJ}$.`,
          t`Formed: one $\ce{C-C}$ and two new $\ce{C-H}$: $346 + 2(414)$ $= 1174\ \mathrm{kJ}$.`,
          t`$\Delta_r H^0 = 1046 - 1174$ $= -128\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`Bond enthalpies: $\ce{C-H}$ $414$, $\ce{O=O}$ $498$, $\ce{C=O}$ $799$, $\ce{O-H}$ $463\ \mathrm{kJ\,mol^{-1}}$. The enthalpy of $\ce{CH4(g) + 2O2(g)}$ $\ce{-> CO2(g) + 2H2O(g)}$ is`,
      verify: { kind: "value", inputs: { CH: "414", OO: "498", CO: "799", OH: "463" }, params: { ask: "dH", broken: "CH:4,OO:2", formed: "CO:2,OH:4", sf: "4" } },
      options: [
        { key: "A", text: t`$-350\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M2", value: "-350" },
        { key: "B", text: t`$6102\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M4", value: "6102" },
        { key: "C", text: t`$-798\ \mathrm{kJ}$`, correct: true, value: "-798" },
        { key: "D", text: t`$798\ \mathrm{kJ}$`, correct: false, misconceptionId: "C09-M1", value: "798" },
      ],
      solution: {
        steps: [
          t`Broken: four $\ce{C-H}$ and two $\ce{O=O}$: $4(414) + 2(498)$ $= 2652\ \mathrm{kJ}$.`,
          t`Formed: two $\ce{C=O}$ and four $\ce{O-H}$: $2(799) + 4(463)$ $= 3450\ \mathrm{kJ}$.`,
          t`$\Delta_r H^0 = 2652 - 3450$ $= -798\ \mathrm{kJ}$.`,
        ],
      },
    },
  ],
};
