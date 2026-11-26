import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Barium sulphate is called insoluble, yet patients drink it before an X-ray. Does any of it dissolve at all?`,
    reveal: t`A tiny amount does: with $K_{sp} = 1.1 \times 10^{-10}$, about $1.05 \times 10^{-5}\ \mathrm{mol}$ dissolves per litre. $K_{sp}$ tells us how much.`,
  },
  explanation: {
    intuition: [
      t`A **sparingly soluble** salt, such as $\ce{AgCl}$, dissolves only very slightly in water.`,
      t`In a **saturated solution** the undissolved solid is in equilibrium with its ions.`,
      t`$\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)}$.`,
      t`The solid's concentration is constant, so it is left out of the equilibrium constant.`,
      t`That constant is the **solubility product**: $K_{sp} = [\ce{Ag+}][\ce{Cl-}]$.`,
      t`A smaller $K_{sp}$ (for the same formula type) means a less soluble salt.`,
    ],
    formal: [
      {
        title: "The solubility product",
        points: [
          t`$K_{sp}$ is the product of the ions' equilibrium concentrations in a saturated solution.`,
          t`Each concentration is raised to its coefficient in the balanced equation.`,
          t`For $\ce{A_xB_y(s) <=> xA^{y+} + yB^{x-}}$:`,
          t`$K_{sp} = [\ce{A^{y+}}]^x [\ce{B^{x-}}]^y$.`,
          t`$K_{sp}$ is constant at a given temperature.`,
        ],
      },
      {
        title: "Molar solubility and Ksp",
        points: [
          t`The **molar solubility** $S$ is the moles of salt that dissolve per litre of saturated solution.`,
          t`Each formula unit gives $x$ cations and $y$ anions: $[\text{cation}] = xS$, $[\text{anion}] = yS$.`,
          t`So $K_{sp} = (xS)^x (yS)^y$ $= x^x y^y S^{x+y}$.`,
          t`AX type ($\ce{AgCl}$): $K_{sp} = S^2$, so $S = \sqrt{K_{sp}}$.`,
          t`$\ce{AX2}$ type ($\ce{PbI2}$): $K_{sp} = S \times (2S)^2 = 4S^3$.`,
          t`$\ce{A2X}$ type ($\ce{Ag2CrO4}$): $K_{sp} = (2S)^2 \times S = 4S^3$.`,
        ],
      },
      {
        title: "Moles and grams",
        points: [
          t`$K_{sp}$ always uses concentrations in $\mathrm{mol\,L^{-1}}$.`,
          t`Solubility in $\mathrm{g\,L^{-1}}$ $= S \times$ molar mass.`,
          t`So divide a solubility in $\mathrm{g\,L^{-1}}$ by the molar mass before using it in $K_{sp}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The molar solubility of $\ce{PbI2}$ is $1.5 \times 10^{-3}\ \mathrm{mol\,L^{-1}}$. Find its $K_{sp}$.`,
      steps: [
        t`$\ce{PbI2(s) <=> Pb^2+ + 2I-}$, so $[\ce{Pb^2+}] = S$ and $[\ce{I-}] = 2S$.`,
        t`$K_{sp} = S \times (2S)^2 = 4S^3$.`,
        t`$K_{sp} = 4 \times (1.5 \times 10^{-3})^3$ $= 4 \times 3.375 \times 10^{-9}$.`,
        t`$K_{sp} = 1.35 \times 10^{-8}$.`,
      ],
      answer: t`$K_{sp} = 1.35 \times 10^{-8}$`,
    },
    visualSpec: t`Pick a salt type and drag S; watch each ion's bar grow as xS and yS and their product build up K_sp.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Uses $K_{sp} = S^2$ for every salt, whatever its formula.`,
      remediation: t`Write the dissociation first: $\ce{AX2}$ gives $S$ and $2S$, so $K_{sp} = S(2S)^2 = 4S^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Multiplies by the coefficients but does not raise them to powers: $2S^3$ for $\ce{AX2}$.`,
      remediation: t`The coefficient goes inside the bracket that is raised to the power: $(2S)^2 = 4S^2$, not $2S^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Raises $S$ to the powers but leaves out the coefficients: $S^3$ for $\ce{AX2}$.`,
      remediation: t`Two anions per formula unit means $[\ce{X-}] = 2S$, so $K_{sp} = S(2S)^2 = 4S^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Treats $K_{sp}$ as the solubility itself.`,
      remediation: t`$K_{sp}$ is a product of concentrations; for AX, $S = \sqrt{K_{sp}}$ and $K_{sp} = S^2$.`,
      fallback: { kind: "ext", topic: "equilibrium constant (Std XI Chemistry)" },
    },
    {
      id: "C08-M5",
      mistake: "Converts between grams and moles the wrong way round.",
      remediation: t`Grams $=$ moles $\times$ molar mass; moles $=$ grams $\div$ molar mass.`,
      fallback: { kind: "ext", topic: "mole concept (Std XI Chemistry)" },
    },
    {
      id: "C08-M6",
      mistake: t`Skips the conversion: stops at $\mathrm{mol\,L^{-1}}$ when grams are asked, or puts $\mathrm{g\,L^{-1}}$ into $K_{sp}$.`,
      remediation: t`$K_{sp}$ uses $\mathrm{mol\,L^{-1}}$; convert to or from $\mathrm{g\,L^{-1}}$ with the molar mass as the question needs.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.12" },
      stem: t`The solubility product of $\ce{AgBr}$ is $5.2 \times 10^{-13}$. What is its solubility in $\mathrm{g\,dm^{-3}}$? (Molar mass of $\ce{AgBr}$ $= 187.8\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { Ksp: "5.2e-13", M: "187.8" }, params: { ask: "g_from_ksp" } },
      options: [
        { key: "A", text: t`$1.35 \times 10^{-4}\ \mathrm{g\,dm^{-3}}$`, correct: true, value: "0.000135000000000000" },
        { key: "B", text: t`$9.77 \times 10^{-11}\ \mathrm{g\,dm^{-3}}$`, correct: false, misconceptionId: "C08-M4", value: "9.77000000000000e-11" },
        { key: "C", text: t`$3.84 \times 10^{-9}\ \mathrm{g\,dm^{-3}}$`, correct: false, misconceptionId: "C08-M5", value: "3.84000000000000e-9" },
        { key: "D", text: t`$7.21 \times 10^{-7}\ \mathrm{g\,dm^{-3}}$`, correct: false, misconceptionId: "C08-M6", value: "7.21000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$\ce{AgBr}$ is AX type: $S = \sqrt{K_{sp}}$ $= \sqrt{5.2 \times 10^{-13}}$ $= 7.21 \times 10^{-7}\ \mathrm{mol\,dm^{-3}}$.`,
          t`In grams: $7.21 \times 10^{-7} \times 187.8$ $= 1.35 \times 10^{-4}\ \mathrm{g\,dm^{-3}}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`The molar solubility of $\ce{CaF2}$ in water is $2 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$. What is its $K_{sp}$?`,
      verify: { kind: "value", inputs: { S: "2e-4", x: "1", y: "2" }, params: { ask: "ksp_from_s" } },
      options: [
        { key: "A", text: t`$4 \times 10^{-8}$`, correct: false, misconceptionId: "C08-M1", value: "4.00000000000000e-8" },
        { key: "B", text: t`$1.6 \times 10^{-11}$`, correct: false, misconceptionId: "C08-M2", value: "1.60000000000000e-11" },
        { key: "C", text: t`$8 \times 10^{-12}$`, correct: false, misconceptionId: "C08-M3", value: "8.00000000000000e-12" },
        { key: "D", text: t`$3.2 \times 10^{-11}$`, correct: true, value: "3.20000000000000e-11" },
      ],
      solution: {
        steps: [
          t`$\ce{CaF2 <=> Ca^2+ + 2F-}$: $[\ce{Ca^2+}] = S$, $[\ce{F-}] = 2S$.`,
          t`$K_{sp} = S(2S)^2 = 4S^3$ $= 4 \times (2 \times 10^{-4})^3$.`,
          t`$K_{sp} = 4 \times 8 \times 10^{-12}$ $= 3.2 \times 10^{-11}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`The $K_{sp}$ of $\ce{Ag2CrO4}$ is $1.1 \times 10^{-12}$. What is its molar solubility?`,
      verify: { kind: "value", inputs: { Ksp: "1.1e-12", x: "2", y: "1" }, params: { ask: "s_from_ksp" } },
      options: [
        { key: "A", text: t`$1.05 \times 10^{-6}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C08-M1", value: "1.05000000000000e-6" },
        { key: "B", text: t`$8.19 \times 10^{-5}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C08-M2", value: "8.19000000000000e-5" },
        { key: "C", text: t`$1.03 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C08-M3", value: "0.000103000000000000" },
        { key: "D", text: t`$6.5 \times 10^{-5}\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "6.50000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$\ce{Ag2CrO4 <=> 2Ag+ + CrO4^2-}$: $K_{sp} = (2S)^2 S = 4S^3$.`,
          t`$S^3 = \dfrac{1.1 \times 10^{-12}}{4}$ $= 2.75 \times 10^{-13}$.`,
          t`$S = 6.5 \times 10^{-5}\ \mathrm{mol\,L^{-1}}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.12" },
      stem: t`The solubility of $\ce{AgCl}$ in water is $1.435 \times 10^{-3}\ \mathrm{g\,L^{-1}}$. What is its $K_{sp}$? (Molar mass $= 143.5\ \mathrm{g\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { g: "1.435e-3", M: "143.5" }, params: { ask: "ksp_from_g" } },
      options: [
        { key: "A", text: t`$0.0424$`, correct: false, misconceptionId: "C08-M5", value: "0.0424000000000000" },
        { key: "B", text: t`$2.06 \times 10^{-6}$`, correct: false, misconceptionId: "C08-M6", value: "2.06000000000000e-6" },
        { key: "C", text: t`$1 \times 10^{-10}$`, correct: true, value: "1.00000000000000e-10" },
        { key: "D", text: t`$1 \times 10^{-5}$`, correct: false, misconceptionId: "C08-M4", value: "1.00000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$S = \dfrac{1.435 \times 10^{-3}}{143.5}$ $= 1 \times 10^{-5}\ \mathrm{mol\,L^{-1}}$.`,
          t`$\ce{AgCl}$ is AX type: $K_{sp} = S^2$ $= (1 \times 10^{-5})^2$.`,
          t`$K_{sp} = 1 \times 10^{-10}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`The molar solubility of $\ce{Ca3(PO4)2}$ is $S$. Its $K_{sp}$ is`,
      verify: { kind: "value", inputs: { x: "3", y: "2" }, params: { ask: "expr" } },
      options: [
        { key: "A", text: t`$S^5$`, correct: false, misconceptionId: "C08-M3", value: "s**5" },
        { key: "B", text: t`$108\,S^5$`, correct: true, value: "108*s**5" },
        { key: "C", text: t`$S^2$`, correct: false, misconceptionId: "C08-M1", value: "s**2" },
        { key: "D", text: t`$6\,S^5$`, correct: false, misconceptionId: "C08-M2", value: "6*s**5" },
      ],
      solution: {
        steps: [
          t`$\ce{Ca3(PO4)2 <=> 3Ca^2+ + 2PO4^3-}$: $[\ce{Ca^2+}] = 3S$, $[\ce{PO4^3-}] = 2S$.`,
          t`$K_{sp} = (3S)^3 (2S)^2$ $= 27S^3 \times 4S^2$.`,
          t`$K_{sp} = 108\,S^5$.`,
        ],
      },
    },
  ],
};
