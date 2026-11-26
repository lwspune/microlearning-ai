import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Burning hydrogen in a sealed steel bomb and in an open vessel gives out different amounts of heat. Why?`,
    reveal: t`In the open vessel the gas volume shrinks, so the surroundings do $PV$ work too. Heat at constant volume is $\Delta U$; at constant pressure it is $\Delta H$.`,
  },
  explanation: {
    intuition: [
      t`Most reactions run in open vessels, at constant atmospheric pressure.`,
      t`There the system may expand or contract and so exchange $PV$ work.`,
      t`**Enthalpy** $H$ packs internal energy and this $PV$ term into one state function.`,
      t`The heat absorbed at constant pressure is simply $\Delta H$.`,
      t`$\Delta H$ and $\Delta U$ differ only when the moles of gas change.`,
    ],
    formal: [
      {
        title: "Enthalpy",
        points: [
          t`**Enthalpy** is defined as $H = U + PV$; it is a state function.`,
          t`At constant pressure, $\Delta H = \Delta U + P\Delta V$.`,
          t`With $\Delta U = Q_p - P\Delta V$, this gives $\Delta H = Q_p$.`,
          t`At constant volume no work is done, so $\Delta U = Q_v$.`,
          t`$\Delta H$ negative: an exothermic change; $\Delta H$ positive: an endothermic change.`,
        ],
      },
      {
        title: "ΔH and ΔU for gases",
        points: [
          t`For ideal gases at constant $T$ and $P$, $P\Delta V = \Delta n_g RT$.`,
          t`$\Delta n_g$ = moles of gaseous products $-$ moles of gaseous reactants.`,
          t`Solids and liquids are left out: their volumes are negligible.`,
          t`So $\Delta H = \Delta U + \Delta n_g RT$.`,
          t`If $\Delta n_g = 0$, as in $\ce{H2(g) + Cl2(g)}$ $\ce{-> 2HCl(g)}$, then $\Delta H = \Delta U$.`,
        ],
      },
      {
        title: "Work in a reaction",
        points: [
          t`The $PV$ work of a gas reaction is $W = -P\Delta V = -\Delta n_g RT$.`,
          t`$\Delta n_g$ negative (gas moles fall): $W$ is positive, work done on the system.`,
          t`$\Delta n_g$ positive (gas moles rise): $W$ is negative, work done by the system.`,
          t`Scale $\Delta n_g$ to the amount that actually reacts.`,
          t`Use $T$ in kelvin and $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$; divide by 1000 for kJ.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the work done when 4 moles of $\ce{SO2}$ are oxidised at $25^\circ\mathrm{C}$: $\ce{2SO2(g) + O2(g)}$ $\ce{-> 2SO3(g)}$. Is work done on or by the system?`,
      steps: [
        t`For the equation, $\Delta n_g = 2 - 3 = -1$.`,
        t`4 mol of $\ce{SO2}$ is twice the equation, so $\Delta n_g = -2\ \mathrm{mol}$.`,
        t`$W = -\Delta n_g RT$ $= 2 \times 8.314 \times 298$.`,
        t`$W = +4955\ \mathrm{J}$: positive, so work is done on the system.`,
      ],
      answer: t`$W = +4955\ \mathrm{J}$, done on the system`,
    },
    visualSpec: t`Pick a gas reaction and watch the piston move as gas moles change, with ΔH and ΔU bars differing by Δn_g RT.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Counts solids and liquids in $\Delta n_g$.`,
      remediation: t`Only gases count in $\Delta n_g$: the volumes of solids and liquids are negligible.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Takes $\Delta n_g$ as reactants minus products.`,
      remediation: t`$\Delta n_g$ = gaseous products $-$ gaseous reactants: like every $\Delta$, final minus initial.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Uses the temperature in degrees Celsius.",
      remediation: t`$RT$ needs $T$ in kelvin: add 273 to the Celsius temperature.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Uses the equation's $\Delta n_g$ whatever amount reacts.`,
      remediation: t`The equation's $\Delta n_g$ is for the amounts written; scale it to the moles that actually react.`,
      fallback: { kind: "ext", topic: "stoichiometry (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#34" },
      stem: t`For the formation of ethane, $\ce{2C(s) + 3H2(g) -> C2H6(g)}$, $\Delta H = -84.4\ \mathrm{kJ}$ at $27^\circ\mathrm{C}$. What is $\Delta U$? ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { gp: "1", gr: "3", cr: "2", Tc: "27", dH: "-84.4" }, params: { ask: "dU" } },
      options: [
        { key: "A", text: t`$-84.0\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M3", value: "-84" },
        { key: "B", text: t`$-79.4\ \mathrm{kJ}$`, correct: true, value: "-79.4000000000000" },
        { key: "C", text: t`$-74.4\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M1", value: "-74.4000000000000" },
        { key: "D", text: t`$-89.4\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M2", value: "-89.4000000000000" },
      ],
      solution: {
        steps: [
          t`Carbon is a solid: $\Delta n_g = 1 - 3 = -2$; $T = 27 + 273 = 300\ \mathrm{K}$.`,
          t`$\Delta n_g RT = -2 \times 8.314 \times 300$ $= -4988\ \mathrm{J}$ $= -4.988\ \mathrm{kJ}$.`,
          t`$\Delta U = \Delta H - \Delta n_g RT$ $= -84.4 + 4.988 = -79.4\ \mathrm{kJ}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#20" },
      stem: t`What is the work done in the reaction $\ce{CH4(g) + 2O2(g)}$ $\ce{-> CO2(g) + 2H2O(l)}$ at $27^\circ\mathrm{C}$? ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$)`,
      verify: { kind: "value", inputs: { gp: "1", gr: "3", cp: "2", Tc: "27" }, params: { ask: "W", out: "kJ" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M1", value: "0" },
        { key: "B", text: t`$-4.99\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M2", value: "-4.99000000000000" },
        { key: "C", text: t`$+0.449\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M3", value: "0.449000000000000" },
        { key: "D", text: t`$+4.99\ \mathrm{kJ}$`, correct: true, value: "4.99000000000000" },
      ],
      solution: {
        steps: [
          t`Water is a liquid: $\Delta n_g = 1 - 3 = -2$; $T = 300\ \mathrm{K}$.`,
          t`$W = -\Delta n_g RT$ $= 2 \times 8.314 \times 300 = 4988\ \mathrm{J}$.`,
          t`$W = +4.99\ \mathrm{kJ}$, done on the system.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (xiv)" },
      stem: t`What is the work done when $1$ mole of $\ce{HCl(g)}$ is oxidised at $200^\circ\mathrm{C}$ by the reaction $\ce{4HCl(g) + O2(g)}$ $\ce{-> 2Cl2(g) + 2H2O(g)}$?`,
      verify: { kind: "value", inputs: { gp: "4", gr: "5", k: "1/4", Tc: "200" }, params: { ask: "W" } },
      options: [
        { key: "A", text: t`$+983\ \mathrm{J}$`, correct: true, value: "983" },
        { key: "B", text: t`$-983\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "-983" },
        { key: "C", text: t`$+416\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "416" },
        { key: "D", text: t`$+3930\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "3930" },
      ],
      solution: {
        steps: [
          t`For the equation $\Delta n_g = 4 - 5 = -1$; for 1 mol of $\ce{HCl}$, $\Delta n_g = -0.25$.`,
          t`$T = 200 + 273 = 473\ \mathrm{K}$.`,
          t`$W = -\Delta n_g RT$ $= 0.25 \times 8.314 \times 473 = +983\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (xx)" },
      stem: t`What is the work done in the decomposition of $2$ moles of $\ce{NH4NO3}$ at $100^\circ\mathrm{C}$? $\ce{NH4NO3(s) -> N2O(g) + 2H2O(g)}$`,
      verify: { kind: "value", inputs: { gp: "3", gr: "0", cr: "1", k: "2", Tc: "100" }, params: { ask: "W", out: "kJ" } },
      options: [
        { key: "A", text: t`$-4.99\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M3", value: "-4.99000000000000" },
        { key: "B", text: t`$-9.30\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M4", value: "-9.30000000000000" },
        { key: "C", text: t`$-18.6\ \mathrm{kJ}$`, correct: true, value: "-18.6000000000000" },
        { key: "D", text: t`$-12.4\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M1", value: "-12.4000000000000" },
      ],
      solution: {
        steps: [
          t`Each $\ce{NH4NO3(s)}$ gives 3 mol of gas from a solid: for 2 mol, $\Delta n_g = 6$.`,
          t`$T = 100 + 273 = 373\ \mathrm{K}$.`,
          t`$W = -6 \times 8.314 \times 373$ $= -18607\ \mathrm{J} = -18.6\ \mathrm{kJ}$, done by the system.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (viii)" },
      stem: t`What is the work done in the decomposition of $132\ \mathrm{g}$ of $\ce{NH4NO3}$ ($80\ \mathrm{g\,mol^{-1}}$) at $100^\circ\mathrm{C}$? $\ce{NH4NO3(s) -> N2O(g) + 2H2O(g)}$`,
      verify: { kind: "value", inputs: { gp: "3", gr: "0", cr: "1", k: "132/80", Tc: "100" }, params: { ask: "W", out: "kJ" } },
      options: [
        { key: "A", text: t`$-15.4\ \mathrm{kJ}$`, correct: true, value: "-15.4000000000000" },
        { key: "B", text: t`$-10.2\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M1", value: "-10.2000000000000" },
        { key: "C", text: t`$+15.4\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M2", value: "15.4000000000000" },
        { key: "D", text: t`$-9.30\ \mathrm{kJ}$`, correct: false, misconceptionId: "C05-M4", value: "-9.30000000000000" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{132}{80} = 1.65\ \mathrm{mol}$, so $\Delta n_g = 1.65 \times 3 = 4.95$.`,
          t`$W = -4.95 \times 8.314 \times 373$ $= -15351\ \mathrm{J}$.`,
          t`$W = -15.4\ \mathrm{kJ}$: work is done by the system.`,
        ],
      },
    },
  ],
};
