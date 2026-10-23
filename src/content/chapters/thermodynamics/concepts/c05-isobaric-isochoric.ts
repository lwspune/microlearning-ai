import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Heating a gas by $10\ \mathrm{K}$ takes more heat if it can push a piston out than if it is sealed in a rigid can. Why the difference?`,
    reveal: t`In the can, all the heat raises the internal energy. With a free piston, some of it also goes into work pushing the piston out, so more heat is needed.`,
  },
  explanation: {
    intuition: [
      t`A **thermodynamic process** takes a system from one state to another, usually keeping one quantity fixed.`,
      t`**Isobaric**: the pressure stays fixed, as under a free piston.`,
      t`**Isochoric**: the volume stays fixed, as in a rigid can.`,
      t`In a rigid can, no work is done, so all the heat goes into internal energy.`,
      t`At constant pressure, the gas expands and does work too, so it needs more heat for the same warming.`,
    ],
    formal: [
      {
        title: "Isobaric process",
        points: [
          t`At constant pressure, $W = p\,\Delta V = nR\,\Delta T$ for an ideal gas.`,
          t`The heat supplied is $Q = nC_P\,\Delta T$.`,
          t`The internal energy changes by $\Delta U = nC_V\,\Delta T$, so $Q = \Delta U + W$ gives $C_P = C_V + R$.`,
          t`For a monatomic gas $C_V = \dfrac{3}{2}R$; for a diatomic gas, $C_V = \dfrac{5}{2}R$.`,
          t`Doubling the volume at constant pressure doubles the absolute temperature.`,
        ],
      },
      {
        title: "Isochoric process",
        points: [
          t`At constant volume, $\Delta V = 0$, so $W = 0$.`,
          t`The first law gives $\Delta U = Q$: all the heat goes into internal energy.`,
          t`So $Q = \Delta U = nC_V\,\Delta T$.`,
          t`The pressure rises as the gas warms, but with no movement there is no work.`,
        ],
      },
    ],
    worked: {
      prompt: t`$1$ mole of a monatomic ideal gas is warmed by $20\ \mathrm{K}$ at constant pressure. Find the work it does, the rise in its internal energy and the heat supplied. (Take $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.)`,
      steps: [
        t`$W = nR\,\Delta T = 1 \times 8.314 \times 20 \approx 166.3\ \mathrm{J}$.`,
        t`$\Delta U = nC_V\,\Delta T = \dfrac{3}{2} \times 8.314 \times 20 \approx 249.4\ \mathrm{J}$.`,
        t`$Q = \Delta U + W \approx 249.4 + 166.3 = 415.7\ \mathrm{J}$.`,
        t`Check: $Q = nC_P\,\Delta T = \dfrac{5}{2} \times 8.314 \times 20 \approx 415.7\ \mathrm{J}$.`,
      ],
      answer: t`$W \approx 166.3\ \mathrm{J}$, $\Delta U \approx 249.4\ \mathrm{J}$, $Q \approx 415.7\ \mathrm{J}$`,
    },
    visualSpec: t`Warm two identical gas samples by the same amount, one in a rigid can and one under a free piston, and compare the heat each needs.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Uses the Celsius temperature.",
      remediation: t`$pV = nRT$ needs the absolute temperature: add 273 to a Celsius reading.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Uses the final volume instead of the change: $W = pV_f$.`,
      remediation: t`Work at constant pressure is $p\,\Delta V = p\left(V_f - V_i\right)$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: t`Uses the isothermal formula, $W = nRT\ln\dfrac{V_2}{V_1}$.`,
      remediation: t`That formula is for constant temperature. At constant pressure, $W = p\,\Delta V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Mixes up $C_P$ and $C_V$.`,
      remediation: t`At constant pressure $Q = nC_P\,\Delta T$; at constant volume $Q = \Delta U = nC_V\,\Delta T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Mixes the process up with an isothermal one, taking $\Delta U = 0$.`,
      remediation: t`$\Delta U = 0$ only when the temperature is fixed. Here the temperature changes, so $U$ does too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Mixes the process up with an adiabatic one, taking $Q = 0$.`,
      remediation: t`$Q = 0$ only when no heat is exchanged. Here heat is supplied.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks a pressure change at constant volume does work.",
      remediation: t`Work needs the boundary to move: at constant volume, $W = 0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M8",
      mistake: t`Counts only the work, $nR\,\Delta T$.`,
      remediation: t`The heat also raises the internal energy, by $nC_V\,\Delta T$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M9",
      mistake: t`Uses a diatomic gas's $C_P$ for a monatomic gas.`,
      remediation: t`A monatomic gas has $C_V = \dfrac{3}{2}R$, so $C_P = \dfrac{5}{2}R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Mixes up isobaric and isochoric.",
      remediation: "Iso**baric**: constant pressure. Iso**choric**: constant volume.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.6" },
      stem: t`One mole of an ideal gas at $1.01\ \mathrm{MPa}$ and $27^\circ\mathrm{C}$ sits in a cylinder under a free, frictionless piston. It expands at constant pressure until its volume doubles. How much work does it do? (Take $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.)`,
      verify: { kind: "value", inputs: { n: "1", T_C: "27", p: "1.01e6", ratio: "2" }, params: { ask: "W_double" } },
      options: [
        { key: "A", text: t`$1729\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "1729" },
        { key: "B", text: t`$2494\ \mathrm{J}$`, correct: true, value: "2494" },
        { key: "C", text: t`$224.5\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M1", value: "224.500000000000" },
        { key: "D", text: t`$4988\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "4988" },
      ],
      solution: {
        steps: [
          t`$T = 300\ \mathrm{K}$. Doubling $V$ at constant $p$: $W = p\left(2V_i - V_i\right) = pV_i = nRT$.`,
          t`$W = 1 \times 8.314 \times 300 \approx 2494\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`A gas is heated in a rigid, sealed container. What does the first law give for this isochoric process?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "isochoric" } },
      options: [
        { key: "A", text: t`$\Delta U = 0$, so $W = Q$`, correct: false, misconceptionId: "C05-M5", value: "dU0_WQ" },
        { key: "B", text: t`$Q = 0$, so $\Delta U = -W$`, correct: false, misconceptionId: "C05-M6", value: "Q0_dUminusW" },
        { key: "C", text: t`$W = V\,\Delta p$, so $\Delta U = Q - V\,\Delta p$`, correct: false, misconceptionId: "C05-M7", value: "W_Vdp" },
        { key: "D", text: t`$W = 0$, so $\Delta U = Q$`, correct: true, value: "W0_dUQ" },
      ],
      solution: {
        steps: [
          t`The container is rigid, so $\Delta V = 0$ and $W = 0$.`,
          t`The first law gives $\Delta U = Q - 0 = Q$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`$2$ moles of a monatomic ideal gas are warmed from $300\ \mathrm{K}$ to $400\ \mathrm{K}$ at constant pressure. How much heat is supplied? (Take $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.)`,
      verify: { kind: "value", inputs: { n: "2", T1: "300", T2: "400" }, params: { ask: "Q_p", atoms: "mono" } },
      options: [
        { key: "A", text: t`$4157\ \mathrm{J}$`, correct: true, value: "4157" },
        { key: "B", text: t`$2494\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "2494" },
        { key: "C", text: t`$1663\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M8", value: "1663" },
        { key: "D", text: t`$5820\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M9", value: "5820" },
      ],
      solution: {
        steps: [
          t`Monatomic: $C_P = \dfrac{5}{2}R$.`,
          t`$Q = nC_P\,\Delta T = 2 \times \dfrac{5}{2} \times 8.314 \times 100 \approx 4157\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`$1$ mole of a diatomic ideal gas is warmed from $300\ \mathrm{K}$ to $350\ \mathrm{K}$ in a rigid container. What is the change in its internal energy? (Take $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$ and leave out vibration.)`,
      verify: { kind: "value", inputs: { n: "1", T1: "300", T2: "350" }, params: { ask: "dU_v", atoms: "di" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "0" },
        { key: "B", text: t`$415.7\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M8", value: "415.700000000000" },
        { key: "C", text: t`$1039\ \mathrm{J}$`, correct: true, value: "1039" },
        { key: "D", text: t`$1455\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "1455" },
      ],
      solution: {
        steps: [
          t`Diatomic: $C_V = \dfrac{5}{2}R$.`,
          t`$\Delta U = nC_V\,\Delta T = 1 \times \dfrac{5}{2} \times 8.314 \times 50 \approx 1039\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.5" },
      stem: t`What is a thermodynamic process at constant pressure called?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "name" } },
      options: [
        { key: "A", text: t`Isobaric`, correct: true, value: "isobaric" },
        { key: "B", text: t`Isothermal`, correct: false, misconceptionId: "C05-M5", value: "isothermal" },
        { key: "C", text: t`Adiabatic`, correct: false, misconceptionId: "C05-M6", value: "adiabatic" },
        { key: "D", text: t`Isochoric`, correct: false, misconceptionId: "C05-M10", value: "isochoric" },
      ],
      solution: {
        steps: [
          t`Isobaric means constant pressure.`,
          t`Isochoric is constant volume, isothermal constant temperature, adiabatic no heat exchanged.`,
        ],
      },
    },
  ],
};
