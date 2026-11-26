import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A balloon of hydrogen and a balloon of carbon dioxide are the same size at the same temperature and pressure. One weighs 22 times as much. Which number is the same in both?`,
    reveal: t`The number of molecules, and so the number of moles. At STP a mole of any gas fills 22.4 litres.`,
  },
  explanation: {
    intuition: [
      t`Avogadro's law means a mole of any gas takes the same volume at the same T and P.`,
      t`At STP (273 K, 1 atm) that **molar volume** is $22.4\ \mathrm{dm^3}$.`,
      t`So for gases, volume measures moles directly.`,
      t`From moles we can reach mass and molecules too.`,
    ],
    formal: [
      {
        title: "Molar volume",
        points: [
          t`$n = \dfrac{V\ (\mathrm{dm^3})}{22.4\ \mathrm{dm^3\,mol^{-1}}}$ at STP.`,
          t`$1\ \mathrm{dm^3} = 1\ \mathrm{L} = 1000\ \mathrm{cm^3}$, so 1 mol = $22\,400\ \mathrm{cm^3}$.`,
          t`In a reaction, use the balanced equation's mole ratio between gases and solids.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the mass of $11.2\ \mathrm{dm^3}$ of oxygen at STP?`,
      steps: [
        t`$n = 11.2 \div 22.4 = 0.5$ mol.`,
        t`$0.5 \times 32 = 16$ g.`,
      ],
      answer: t`16 g`,
    },
    visualSpec: t`Fill identical 22.4 L boxes with different gases and weigh each one mole.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Multiplies the volume by 22.4.",
      remediation: t`Divide: $n = V \div 22.4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Divides 22.4 by the volume.",
      remediation: t`$n = V \div 22.4$, not $22.4 \div V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Gives molecules instead of moles.",
      remediation: t`Stop at $n = V \div 22.4$; multiply by $N_A$ only for molecules.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses 22 400 with a volume in $\mathrm{dm^3}$.`,
      remediation: t`22 400 is in $\mathrm{cm^3}$; for litres use 22.4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Treats $\mathrm{cm^3}$ as $\mathrm{dm^3}$.`,
      remediation: t`$22.4\ \mathrm{cm^3} = 0.0224\ \mathrm{dm^3}$: a thousandth of a mole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Multiplies the volume by $N_A$.`,
      remediation: "Convert volume to moles first.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Counts N atoms.",
      remediation: t`The question asks for molecules of $\ce{N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Divides 22.4 by the moles.",
      remediation: t`$V = n \times 22.4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Ignores the number of moles.",
      remediation: t`22.4 $\mathrm{dm^3}$ is for one mole; multiply by $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Gives the mass.",
      remediation: t`Volume = moles × 22.4 $\mathrm{dm^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Ignores the mole ratio.",
      remediation: t`2 mol $\ce{KClO3}$ give 3 mol $\ce{O2}$: multiply by $\tfrac23$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Inverts the mole ratio.",
      remediation: t`$\ce{KClO3}$ moles $= \tfrac23 \times$ $\ce{O2}$ moles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Gives the mass of oxygen.",
      remediation: t`Convert to moles of $\ce{KClO3}$ and use its molar mass.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Solved Ex.1.7" },
      stem: t`How many moles of ammonia are there in $67.2\ \mathrm{dm^3}$ of it at STP?`,
      verify: { kind: "value", inputs: { V: "67.2" }, params: { q: "nh3_moles" } },
      options: [
        { key: "A", text: t`$0.333\ \mathrm{mol}$`, correct: false, misconceptionId: "C07-M2", value: "0.333000000000000" },
        { key: "B", text: t`$1.81 \times 10^{24}\ \mathrm{mol}$`, correct: false, misconceptionId: "C07-M3", value: "1809999999999999878365184" },
        { key: "C", text: t`$1510\ \mathrm{mol}$`, correct: false, misconceptionId: "C07-M1", value: "1510" },
        { key: "D", text: t`$3\ \mathrm{mol}$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$n = 67.2 \div 22.4$.`,
          t`= 3 mol.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (B)" },
      stem: t`How many moles of hydrogen are there in 0.448 L of hydrogen gas at STP?`,
      verify: { kind: "value", inputs: { V: "0.448" }, params: { q: "h2_moles" } },
      options: [
        { key: "A", text: t`$0.02\ \mathrm{mol}$`, correct: true, value: "0.0200000000000000" },
        { key: "B", text: t`$50\ \mathrm{mol}$`, correct: false, misconceptionId: "C07-M2", value: "50" },
        { key: "C", text: t`$2 \times 10^{-5}\ \mathrm{mol}$`, correct: false, misconceptionId: "C07-M4", value: "2.00000000000000e-5" },
        { key: "D", text: t`$10\ \mathrm{mol}$`, correct: false, misconceptionId: "C07-M1", value: "10" },
      ],
      solution: {
        steps: [
          t`$n = 0.448 \div 22.4$.`,
          t`= 0.02 mol.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (H)" },
      stem: t`How many molecules are there in $22.4\ \mathrm{cm^3}$ of nitrogen gas at STP?`,
      verify: { kind: "value", inputs: { V: "22.4" }, params: { q: "n2_molecules" } },
      options: [
        { key: "A", text: t`$1.2 \times 10^{21}$`, correct: false, misconceptionId: "C07-M7", value: "1200000000000000000000" },
        { key: "B", text: t`$6.02 \times 10^{20}$`, correct: true, value: "602000000000000000000" },
        { key: "C", text: t`$6.02 \times 10^{23}$`, correct: false, misconceptionId: "C07-M5", value: "601999999999999995805696" },
        { key: "D", text: t`$1.35 \times 10^{25}$`, correct: false, misconceptionId: "C07-M6", value: "13500000000000000041943040" },
      ],
      solution: {
        steps: [
          t`$22.4\ \mathrm{cm^3} = 0.0224\ \mathrm{dm^3} = 0.001$ mol.`,
          t`0.001 × 6.022 × $10^{23}$ = 6.02 × $10^{20}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (O)" },
      stem: t`What volume does 0.5 mol of carbon dioxide occupy at STP?`,
      verify: { kind: "value", inputs: { n: "0.5" }, params: { q: "co2_volume" } },
      options: [
        { key: "A", text: t`$22.4\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C07-M9", value: "22.4000000000000" },
        { key: "B", text: t`$44.8\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C07-M8", value: "44.8000000000000" },
        { key: "C", text: t`$11.2\ \mathrm{dm^{3}}$`, correct: true, value: "11.2000000000000" },
        { key: "D", text: t`$22\ \mathrm{dm^{3}}$`, correct: false, misconceptionId: "C07-M10", value: "22" },
      ],
      solution: {
        steps: [
          t`$V = n \times 22.4$.`,
          t`0.5 × 22.4 = 11.2 $\mathrm{dm^3}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (P)" },
      stem: t`$\ce{2KClO3 -> 2KCl + 3O2}$. What mass of $\ce{KClO3}$ (122.5 g/mol) gives $6.72\ \mathrm{dm^3}$ of oxygen at STP?`,
      verify: { kind: "value", inputs: { V: "6.72", M: "122.5" }, params: { q: "kclo3_mass" } },
      options: [
        { key: "A", text: t`$36.8\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M11", value: "36.8000000000000" },
        { key: "B", text: t`$55.1\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M12", value: "55.1000000000000" },
        { key: "C", text: t`$9.6\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M13", value: "9.60000000000000" },
        { key: "D", text: t`$24.5\ \mathrm{g}$`, correct: true, value: "24.5000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{O2}$: 6.72 ÷ 22.4 = 0.3 mol; $\ce{KClO3}$: 0.3 × $\tfrac23$ = 0.2 mol.`,
          t`0.2 × 122.5 = 24.5 g.`,
        ],
      },
    },
  ],
};
