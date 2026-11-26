import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Boyle's, Charles' and Avogadro's laws each hold one variable fixed. Can they be combined into a single equation?`,
    reveal: t`Yes: $PV = nRT$, which holds for any ideal gas under any conditions.`,
  },
  explanation: {
    intuition: [
      t`Combining the gas laws gives $PV = nRT$.`,
      t`$R$ is the same for every gas.`,
      t`For a fixed amount, $P_1V_1/T_1 = P_2V_2/T_2$.`,
      t`It also links a gas's density to its molar mass.`,
    ],
    formal: [
      {
        title: "The equation",
        points: [
          t`$PV = nRT$, with $R = 0.0821$ L atm $\mathrm{K^{-1}\,mol^{-1}}$ $= 8.314$ J $\mathrm{K^{-1}\,mol^{-1}}$.`,
          t`Use $R$ in units that match $P$ and $V$.`,
          t`$T$ is always in kelvin.`,
        ],
      },
      {
        title: "Uses",
        points: [
          t`Combined gas law: $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$.`,
          t`Molar mass: $M = \dfrac{dRT}{P}$; at fixed $T$ and $P$, density is proportional to $M$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the volume of 1 mol of gas at 1 atm and 273 K.`,
      steps: [
        t`$V = nRT/P$ $= 1 \times 0.0821 \times 273 \div 1$.`,
        t`$= 22.4$ L.`,
      ],
      answer: t`22.4 L`,
    },
    visualSpec: t`Set any three of $P$, $V$, $n$ and $T$ and let the equation fix the fourth.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Drops $n$.`,
      remediation: t`For 2 moles, $PV = 2RT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Drops $R$.`,
      remediation: t`The equation needs the gas constant: $PV = nRT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Halves instead of doubling.",
      remediation: t`$n = 2$ multiplies $RT$ by 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Uses Celsius.",
      remediation: "Convert to kelvin: add 273.15.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Uses $R = 8.314$ with litres and atmospheres.`,
      remediation: t`With L and atm, use $R = 0.0821$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Inverts the equation.",
      remediation: t`$n = PV/RT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: t`Uses $R = 8.314$.`,
      remediation: t`With L and atm, use $R = 0.0821$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Multiplies $PV$ by $R$.`,
      remediation: t`$T = PV/(nR)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Inverts the expression.",
      remediation: t`$T = PV/(nR)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: t`Forgets to divide by $V$.`,
      remediation: t`$P = nRT/V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: t`Makes density inversely proportional to $M$.`,
      remediation: t`$d = PM/RT$: proportional to $M$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Makes density independent of $M$.`,
      remediation: "Heavier molecules make a denser gas.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Ties density to volume.",
      remediation: t`At fixed $T$ and $P$, density depends on $M$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.1 (B)" },
      stem: t`For 2 moles of an ideal gas, the gas equation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "two_moles" } },
      options: [
        { key: "A", text: t`$PV = T$`, correct: false, misconceptionId: "C04-M2", value: "pv_t" },
        { key: "B", text: t`$PV = 2RT$`, correct: true, value: "pv_2rt" },
        { key: "C", text: t`$PV = \tfrac12 RT$`, correct: false, misconceptionId: "C04-M3", value: "pv_half_rt" },
        { key: "D", text: t`$PV = RT$`, correct: false, misconceptionId: "C04-M1", value: "pv_rt" },
      ],
      solution: {
        steps: [
          t`$PV = nRT$ with $n = 2$.`,
          t`$PV = 2RT$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.5 (G)" },
      stem: t`Nitrogen fills a 2.32 L container at $32\ ^\circ\mathrm{C}$ and 4.7 atm. How many moles are there? ($R = 0.0821$ L atm/(K mol))`,
      verify: { kind: "value", inputs: { P: "4.7", V: "2.32", t: "32" }, params: { q: "moles" } },
      options: [
        { key: "A", text: t`$4.15\ \mathrm{mol}$`, correct: false, misconceptionId: "C04-M4", value: "4.15000000000000" },
        { key: "B", text: t`$0.0043\ \mathrm{mol}$`, correct: false, misconceptionId: "C04-M5", value: "0.00430000000000000" },
        { key: "C", text: t`$0.435\ \mathrm{mol}$`, correct: true, value: "0.435000000000000" },
        { key: "D", text: t`$2.3\ \mathrm{mol}$`, correct: false, misconceptionId: "C04-M6", value: "2.30000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 305.15$ K.`,
          t`$n = 4.7 \times 2.32 \div (0.0821 \times 305.15) = 0.435$ mol.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.4" },
      stem: t`At what temperature does 1 mol of nitrogen occupy $10\ \mathrm{dm^3}$ at 2.46 atm? ($R = 0.0821$ L atm/(K mol))`,
      verify: { kind: "value", inputs: { P: "2.46", V: "10", n: "1" }, params: { q: "temperature" } },
      options: [
        { key: "A", text: t`$2.02\ \mathrm{K}$`, correct: false, misconceptionId: "C04-M8", value: "2.02000000000000" },
        { key: "B", text: t`$0.00334\ \mathrm{K}$`, correct: false, misconceptionId: "C04-M9", value: "0.00334000000000000" },
        { key: "C", text: t`$2.96\ \mathrm{K}$`, correct: false, misconceptionId: "C04-M7", value: "2.96000000000000" },
        { key: "D", text: t`$300\ \mathrm{K}$`, correct: true, value: "300" },
      ],
      solution: {
        steps: [
          t`$T = PV/(nR) = 2.46 \times 10 \div 0.0821$.`,
          t`$= 300$ K.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.5 (J)" },
      stem: t`Find the pressure of 1.0 mol of helium in a $2.0\ \mathrm{dm^3}$ container at $20\ ^\circ\mathrm{C}$. ($R = 0.0821$ L atm/(K mol))`,
      verify: { kind: "value", inputs: { n: "1.0", V: "2.0", t: "20" }, params: { q: "pressure" } },
      options: [
        { key: "A", text: t`$12\ \mathrm{atm}$`, correct: true, value: "12" },
        { key: "B", text: t`$24.1\ \mathrm{atm}$`, correct: false, misconceptionId: "C04-M10", value: "24.1000000000000" },
        { key: "C", text: t`$1220\ \mathrm{atm}$`, correct: false, misconceptionId: "C04-M5", value: "1220" },
        { key: "D", text: t`$0.821\ \mathrm{atm}$`, correct: false, misconceptionId: "C04-M4", value: "0.821000000000000" },
      ],
      solution: {
        steps: [
          t`$T = 293.15$ K.`,
          t`$P = 1.0 \times 0.0821 \times 293.15 \div 2.0 = 12.0$ atm.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.2 (H)" },
      stem: t`At constant temperature and pressure, the density of a gas is`,
      verify: { kind: "value", inputs: {  }, params: { q: "density" } },
      options: [
        { key: "A", text: t`proportional to its volume`, correct: false, misconceptionId: "C04-M13", value: "volume" },
        { key: "B", text: t`directly proportional to its molar mass`, correct: true, value: "proportional_m" },
        { key: "C", text: t`inversely proportional to its molar mass`, correct: false, misconceptionId: "C04-M11", value: "inverse_m" },
        { key: "D", text: t`independent of its molar mass`, correct: false, misconceptionId: "C04-M12", value: "independent" },
      ],
      solution: {
        steps: [
          t`$d = PM/RT$.`,
          t`At fixed $P$ and $T$, $d \propto M$.`,
        ],
      },
    },
  ],
};
