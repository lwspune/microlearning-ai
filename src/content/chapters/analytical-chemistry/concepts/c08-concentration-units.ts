import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`A bottle reads 1 M NaCl at 25 °C. Warm it to 60 °C and, without adding anything, its molarity falls. How?`,
    reveal: t`The solution expands on warming, so the same moles of salt sit in a larger volume. Molality, based on mass, stays put.`,
  },
  explanation: {
    intuition: [
      t`Concentration says how much solute is in a given amount of solution or solvent.`,
      t`Different units suit different jobs.`,
      t`Molarity uses volume, which changes with temperature.`,
      t`Molality and mole fraction use masses or moles, which do not.`,
    ],
    formal: [
      {
        title: "Units",
        points: [
          t`Mass percent $= \dfrac{\text{mass of solute}}{\text{mass of solution}} \times 100$.`,
          t`Mole fraction $x_A = \dfrac{n_A}{n_A + n_B}$; the fractions add to 1.`,
          t`Molarity $M = \dfrac{\text{mol solute}}{\text{L of solution}}$.`,
          t`Molality $m = \dfrac{\text{mol solute}}{\text{kg of solvent}}$.`,
        ],
      },
      {
        title: "Molarity to molality",
        points: [
          t`Take 1 L of solution: its mass = 1000 × density (g).`,
          t`Solvent mass = solution mass − solute mass.`,
        ],
      },
    ],
    worked: {
      prompt: t`5.85 g of NaCl is dissolved to make 500 mL of solution. Find the molarity.`,
      steps: [
        t`5.85 ÷ 58.5 = 0.1 mol.`,
        t`0.1 ÷ 0.5 L = 0.2 M.`,
      ],
      answer: t`0.2 M`,
    },
    visualSpec: t`Fill flasks to compare a litre of solution with a kilogram of solvent for the same moles of solute.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Divides by the solvent's mass.",
      remediation: "Mass percent divides by the solution's mass: solute + solvent.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Gives the solute mass.",
      remediation: "Divide by the solution's mass and multiply by 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Gives the solvent's share.",
      remediation: "The solute's share is asked: 2 of 20 g.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Gives the moles.",
      remediation: "Divide the moles by the volume in litres.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Multiplies by the volume.",
      remediation: "Molarity = moles ÷ litres.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Uses the volume in mL.",
      remediation: "Convert to litres: 250 mL = 0.25 L.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Divides by the solution's mass.",
      remediation: "Molality divides by the solvent's mass only.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Takes molality equal to molarity.",
      remediation: "They differ: one uses litres of solution, the other kg of solvent.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Multiplies by the density.",
      remediation: "Use the density to find the solvent's mass, then divide.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks the moles change.",
      remediation: "Warming does not change the moles of solute.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks the solvent's mass changes.",
      remediation: "Mass does not change with temperature; volume does.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the solute decomposes.",
      remediation: "The solute is unchanged; the solution's volume changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Divides by the water's moles only.",
      remediation: "Divide by the total moles: ethanol + water.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Gives the mass fraction.",
      remediation: "Mole fraction uses moles, not grams.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Gives the water's mole fraction.",
      remediation: "The question asks for ethanol's: 1 of 10 mol.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.16" },
      stem: t`2 g of a substance is dissolved in 18 g of water. What is the mass percent of the solute?`,
      verify: { kind: "value", inputs: { a: "2", w: "18" }, params: { q: "mass_pct" } },
      options: [
        { key: "A", text: t`$11.1\%$`, correct: false, misconceptionId: "C08-M1", value: "11.1000000000000" },
        { key: "B", text: t`$10\%$`, correct: true, value: "10" },
        { key: "C", text: t`$2\%$`, correct: false, misconceptionId: "C08-M2", value: "2" },
        { key: "D", text: t`$90\%$`, correct: false, misconceptionId: "C08-M3", value: "90" },
      ],
      solution: {
        steps: [
          t`Solution = 2 + 18 = 20 g.`,
          t`2 ÷ 20 × 100 = 10 %.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.17" },
      stem: t`4 g of NaOH is dissolved in water to make 250 mL of solution. What is its molarity? (NaOH = 40 g/mol)`,
      verify: { kind: "value", inputs: { m: "4", V: "250" }, params: { q: "molarity" } },
      options: [
        { key: "A", text: t`$0.1\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C08-M4", value: "0.100000000000000" },
        { key: "B", text: t`$0.025\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C08-M5", value: "0.0250000000000000" },
        { key: "C", text: t`$0.4\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "0.400000000000000" },
        { key: "D", text: t`$4 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C08-M6", value: "0.000400000000000000" },
      ],
      solution: {
        steps: [
          t`4 ÷ 40 = 0.1 mol; 250 mL = 0.25 L.`,
          t`0.1 ÷ 0.25 = 0.4 mol/L.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.18" },
      stem: t`A 3 M NaCl solution has density $1.25\ \mathrm{g\,mL^{-1}}$. What is its molality? (NaCl = 58.5 g/mol)`,
      verify: { kind: "value", inputs: { c: "3", d: "1.25" }, params: { q: "molality" } },
      options: [
        { key: "A", text: t`$2.4\ \mathrm{mol\,kg^{-1}}$`, correct: false, misconceptionId: "C08-M7", value: "2.40000000000000" },
        { key: "B", text: t`$3\ \mathrm{mol\,kg^{-1}}$`, correct: false, misconceptionId: "C08-M8", value: "3" },
        { key: "C", text: t`$3.75\ \mathrm{mol\,kg^{-1}}$`, correct: false, misconceptionId: "C08-M9", value: "3.75000000000000" },
        { key: "D", text: t`$2.79\ \mathrm{mol\,kg^{-1}}$`, correct: true, value: "2.79000000000000" },
      ],
      solution: {
        steps: [
          t`1 L: 1250 g solution; NaCl = 3 × 58.5 = 175.5 g; water = 1074.5 g.`,
          t`3 ÷ 1.0745 = 2.79 mol/kg.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.2 (J)" },
      stem: t`The molarity of a solution changes with temperature because`,
      verify: { kind: "value", inputs: {  }, params: { q: "temperature" } },
      options: [
        { key: "A", text: t`the volume of the solution changes with temperature`, correct: true, value: "volume_changes" },
        { key: "B", text: t`the solute decomposes on warming`, correct: false, misconceptionId: "C08-M12", value: "decomposes" },
        { key: "C", text: t`the mass of the solvent changes with temperature`, correct: false, misconceptionId: "C08-M11", value: "solvent_mass_changes" },
        { key: "D", text: t`the moles of solute change with temperature`, correct: false, misconceptionId: "C08-M10", value: "moles_change" },
      ],
      solution: {
        steps: [
          t`Molarity divides by litres of solution.`,
          t`Volume changes with temperature.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.2 (G)" },
      stem: t`46 g of ethanol (46 g/mol) is mixed with 162 g of water (18 g/mol). What is the mole fraction of ethanol?`,
      verify: { kind: "value", inputs: { a: "46", w: "162" }, params: { q: "mole_fraction" } },
      options: [
        { key: "A", text: t`$0.9$`, correct: false, misconceptionId: "C08-M15", value: "0.900000000000000" },
        { key: "B", text: t`$0.1$`, correct: true, value: "0.100000000000000" },
        { key: "C", text: t`$0.111$`, correct: false, misconceptionId: "C08-M13", value: "0.111000000000000" },
        { key: "D", text: t`$0.221$`, correct: false, misconceptionId: "C08-M14", value: "0.221000000000000" },
      ],
      solution: {
        steps: [
          t`Ethanol 1 mol; water 162 ÷ 18 = 9 mol.`,
          t`1 ÷ 10 = 0.1.`,
        ],
      },
    },
  ],
};
