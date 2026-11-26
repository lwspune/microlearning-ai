import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Air is mostly nitrogen and oxygen. At sea level its pressure is 1 atm. How much of that does the oxygen alone supply?`,
    reveal: t`About 0.21 atm: each gas presses as if it were alone, in proportion to its mole fraction.`,
  },
  explanation: {
    intuition: [
      t`In a mixture, each gas behaves as if the others were not there.`,
      t`Each gas's own pressure is its **partial pressure**.`,
      t`The partial pressures add up to the total.`,
      t`A gas's share of the pressure equals its share of the moles.`,
    ],
    formal: [
      {
        title: "Dalton's law",
        points: [
          t`$P_{\text{total}} = p_1 + p_2 + p_3 + \dots$`,
          t`$p_i = x_i P_{\text{total}}$, where $x_i$ is the mole fraction.`,
          t`Convert masses to moles first.`,
        ],
      },
      {
        title: "Gas over water",
        points: [
          t`Gas collected over water contains water vapour.`,
          t`$p_{\text{dry gas}} = P_{\text{total}} -$ aqueous tension.`,
        ],
      },
    ],
    worked: {
      prompt: t`1 mol $\ce{O2}$ and 3 mol $\ce{N2}$ are at 2 atm. Find $p_{\ce{O2}}$.`,
      steps: [
        t`$x_{\ce{O2}} = 1/4$.`,
        t`$p_{\ce{O2}} = 0.25 \times 2 = 0.5$ atm.`,
      ],
      answer: t`0.5 atm`,
    },
    visualSpec: t`Split a column of mixed gas into slices, one for each gas, in proportion to its moles.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Uses the mass fraction.",
      remediation: "Partial pressure follows the mole fraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Shares the pressure equally.",
      remediation: "Each gas gets a share equal to its mole fraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Gives the mole fraction.",
      remediation: "Multiply by the total pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Gives the other gas's pressure.",
      remediation: "Use the mole fraction of the gas asked for.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says vapour pressure.",
      remediation: "Vapour pressure belongs to a liquid's vapour.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says total pressure.",
      remediation: "Total pressure is the sum of all the partial pressures.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says critical pressure.",
      remediation: t`Critical pressure is needed to liquefy a gas at $T_c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Averages the pressures.",
      remediation: "The total is their sum.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Takes the largest.",
      remediation: "Every gas adds to the total.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks the heaviest gas.",
      remediation: "Every gas contributes in proportion to its moles.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Adds the aqueous tension.",
      remediation: "Subtract the water vapour's pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Ignores the aqueous tension.",
      remediation: "Part of the total is water vapour.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Gives the aqueous tension.",
      remediation: "Subtract it from the total.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.5" },
      stem: t`A mixture of 28 g $\ce{N2}$, 8 g He and 40 g Ne is at 20 bar. What is the partial pressure of $\ce{N2}$? (He = 4, Ne = 20)`,
      verify: { kind: "value", inputs: { P: "20" }, params: { q: "three_gases" } },
      options: [
        { key: "A", text: t`$0.2\ \mathrm{bar}$`, correct: false, misconceptionId: "C05-M3", value: "0.200000000000000" },
        { key: "B", text: t`$6.67\ \mathrm{bar}$`, correct: false, misconceptionId: "C05-M2", value: "6.67000000000000" },
        { key: "C", text: t`$7.37\ \mathrm{bar}$`, correct: false, misconceptionId: "C05-M1", value: "7.37000000000000" },
        { key: "D", text: t`$4\ \mathrm{bar}$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`Moles: $\ce{N2}$ 1, He 2, Ne 2; $x_{\ce{N2}} = 1/5$.`,
          t`$p = 0.2 \times 20 = 4$ bar.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.5 (I)" },
      stem: t`A cylinder holds 70.6 g of $\ce{O2}$ and 167.5 g of Ne at 25 bar. Find the partial pressure of $\ce{O2}$. (O = 16, Ne = 20.2)`,
      verify: { kind: "value", inputs: { mO2: "70.6", mNe: "167.5", MNe: "20.2", P: "25" }, params: { q: "oxygen" } },
      options: [
        { key: "A", text: t`$5.25\ \mathrm{bar}$`, correct: true, value: "5.25000000000000" },
        { key: "B", text: t`$12.5\ \mathrm{bar}$`, correct: false, misconceptionId: "C05-M2", value: "12.5000000000000" },
        { key: "C", text: t`$19.7\ \mathrm{bar}$`, correct: false, misconceptionId: "C05-M4", value: "19.7000000000000" },
        { key: "D", text: t`$7.41\ \mathrm{bar}$`, correct: false, misconceptionId: "C05-M1", value: "7.41000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{O2}$ 2.21 mol; Ne 8.29 mol; $x_{\ce{O2}} = 0.210$.`,
          t`$p = 0.210 \times 25 = 5.25$ bar.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.2 (B)" },
      stem: t`The pressure a gas in a mixture would exert if it were alone in the container is its`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`vapour pressure`, correct: false, misconceptionId: "C05-M5", value: "vapour_pressure" },
        { key: "B", text: t`partial pressure`, correct: true, value: "partial_pressure" },
        { key: "C", text: t`total pressure`, correct: false, misconceptionId: "C05-M6", value: "total_pressure" },
        { key: "D", text: t`critical pressure`, correct: false, misconceptionId: "C05-M7", value: "critical_pressure" },
      ],
      solution: {
        steps: [
          t`Each gas's pressure alone in the container.`,
          t`Its partial pressure.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.4 (A)" },
      stem: t`By Dalton's law, the total pressure of a mixture of non-reacting gases`,
      verify: { kind: "value", inputs: {  }, params: { q: "statement" } },
      options: [
        { key: "A", text: t`equals the largest partial pressure`, correct: false, misconceptionId: "C05-M9", value: "largest" },
        { key: "B", text: t`depends only on the heaviest gas`, correct: false, misconceptionId: "C05-M10", value: "heaviest" },
        { key: "C", text: t`is the sum of their partial pressures`, correct: true, value: "sum_of_partials" },
        { key: "D", text: t`is the average of their partial pressures`, correct: false, misconceptionId: "C05-M8", value: "average" },
      ],
      solution: {
        steps: [
          t`Each gas presses independently.`,
          t`Total = sum of partial pressures.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (E)" },
      stem: t`A gas is collected over water at a total pressure of 760 mm Hg. The aqueous tension is 24 mm Hg. What is the pressure of the dry gas?`,
      verify: { kind: "value", inputs: { P: "760", a: "24" }, params: { q: "over_water" } },
      options: [
        { key: "A", text: t`$24\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C05-M13", value: "24" },
        { key: "B", text: t`$784\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C05-M11", value: "784" },
        { key: "C", text: t`$760\ \mathrm{mm\ Hg}$`, correct: false, misconceptionId: "C05-M12", value: "760" },
        { key: "D", text: t`$736\ \mathrm{mm\ Hg}$`, correct: true, value: "736" },
      ],
      solution: {
        steps: [
          t`$p_{\text{dry}} = 760 - 24$.`,
          t`$= 736$ mm Hg.`,
        ],
      },
    },
  ],
};
