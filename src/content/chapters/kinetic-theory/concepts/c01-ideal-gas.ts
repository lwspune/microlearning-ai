import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`A sealed packet of chips puffs up when carried up a hill. Why?`,
    reveal: t`The air pressure outside falls with height. The air in the packet stays at the same temperature, so with less pressure on it, it takes up more volume: $PV$ stays the same.`,
  },
  explanation: {
    intuition: [
      t`A gas is a huge number of tiny molecules moving at random in every direction.`,
      t`In an **ideal gas** the molecules are points that do not attract each other; they only collide.`,
      t`Such a gas obeys the **ideal gas equation**, $PV = nRT$, exactly.`,
      t`Real gases behave almost ideally when their molecules are far apart: at low pressure and high temperature.`,
      t`At high pressure or low temperature, the molecules' size and attraction start to matter.`,
    ],
    formal: [
      {
        title: "The ideal gas equation",
        points: [
          t`$PV = nRT$, where $n$ is the number of moles and $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.`,
          t`$n = \dfrac{\text{mass}}{\text{molar mass}}$: for example, $14\ \mathrm{g}$ of nitrogen gas, $\mathrm{N_2}$ of molar mass $28\ \mathrm{g/mol}$, is $\dfrac{1}{2}$ mol.`,
          t`$T$ must be in kelvin: $T = t + 273$.`,
          t`For a fixed amount of gas, $\dfrac{PV}{T}$ stays the same.`,
          t`At constant $T$, $PV$ is constant (**Boyle's law**): halve the pressure and the volume doubles.`,
        ],
      },
      {
        title: "Ideal and real gases",
        points: [
          t`An ideal gas has no forces between its molecules, so they have kinetic energy only.`,
          t`Its molecules take up no volume of their own.`,
          t`No real gas is ideal, but most come close at low pressure and high temperature.`,
          t`At high pressure or low temperature, real gases stray from $PV = nRT$ and can even turn to liquid.`,
        ],
      },
    ],
    worked: {
      prompt: t`A gas occupies $4\ \mathrm{L}$ at $2\ \mathrm{atm}$ and $300\ \mathrm{K}$. What volume does it occupy at $1\ \mathrm{atm}$ and $450\ \mathrm{K}$?`,
      steps: [
        t`For a fixed amount of gas, $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$.`,
        t`$V_2 = V_1 \times \dfrac{P_1}{P_2} \times \dfrac{T_2}{T_1}$.`,
        t`$V_2 = 4 \times \dfrac{2}{1} \times \dfrac{450}{300}$.`,
        t`$V_2 = 12\ \mathrm{L}$.`,
      ],
      answer: t`$V_2 = 12\ \mathrm{L}$`,
    },
    visualSpec: t`Squeeze, heat and fill a gas cylinder with sliders and watch $P$, $V$ and $T$ change together, with $\dfrac{PV}{nT}$ staying fixed.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes the percentage change in volume to match the change in pressure.",
      remediation: t`At constant $T$, $V \propto \dfrac{1}{P}$. If the pressure drops to $0.8$ of its value, the volume becomes $\dfrac{V}{0.8} = 1.25V$: a $25\%$ rise, not $20\%$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks the volume goes up and down with the pressure.",
      remediation: t`Squeezing a gas harder makes it smaller: at constant $T$, $PV$ is constant, so $V \propto \dfrac{1}{P}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks the volume cannot change while the temperature is fixed.",
      remediation: t`Constant temperature fixes $T$, not $V$. It is $PV$ that stays fixed, so if $P$ falls, $V$ rises.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Leaves the temperature out.",
      remediation: t`$PV = nRT$: the temperature counts just as the pressure and the volume do.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Puts $T$ on top, taking $n$ to grow with $T$.`,
      remediation: t`$n = \dfrac{PV}{RT}$: at the same $P$ and $V$, a hotter gas holds fewer moles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Turns the ratio upside down.",
      remediation: t`$n = \dfrac{\text{mass}}{\text{molar mass}}$ and $n = \dfrac{PV}{RT}$: keep the right quantity on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Uses the mass in grams as the number of moles.",
      remediation: t`Divide the mass by the molar mass: moles $= \dfrac{m}{M}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Divides by the atomic mass instead of the molecule's molar mass.",
      remediation: t`Nitrogen gas is made of $\mathrm{N_2}$ molecules, so its molar mass is $2 \times 14 = 28\ \mathrm{g/mol}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks the molecules of an ideal gas have only potential energy.",
      remediation: "With no forces between the molecules there is no potential energy; the moving molecules have kinetic energy only.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks they have both kinetic and potential energy.",
      remediation: "Potential energy would need forces between the molecules, which an ideal gas does not have.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks they have no energy at all.",
      remediation: "The molecules are always moving, so they have kinetic energy; that energy is what the temperature measures.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Uses temperatures in degrees Celsius.",
      remediation: t`The gas laws need absolute temperature: $T = t + 273$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.1 (iii)" },
      stem: t`The pressure of an ideal gas is lowered by $10\%$, keeping its temperature constant. What happens to its volume?`,
      verify: { kind: "value", inputs: { p_pct: "10" }, params: { ask: "iso_pct" } },
      options: [
        { key: "A", text: t`It increases by about $11.1\%$`, correct: true, value: "11.1000000000000" },
        { key: "B", text: t`It increases by $10\%$`, correct: false, misconceptionId: "C01-M1", value: "10" },
        { key: "C", text: t`It decreases by $10\%$`, correct: false, misconceptionId: "C01-M2", value: "-10" },
        { key: "D", text: t`It stays the same`, correct: false, misconceptionId: "C01-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`At constant $T$, $P_1V_1 = P_2V_2$, with $P_2 = 0.9P_1$.`,
          t`$V_2 = \dfrac{V_1}{0.9} \approx 1.111V_1$: the volume rises by about $11.1\%$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.12" },
      stem: t`Two vessels A and B hold the same gas. The volume, the temperature and the pressure in A are each twice those in B. What is the ratio of the number of moles in A to that in B?`,
      verify: { kind: "value", inputs: { k: "2" }, params: { ask: "moles" } },
      options: [
        { key: "A", text: t`$2 : 1$`, correct: true, value: "2" },
        { key: "B", text: t`$4 : 1$`, correct: false, misconceptionId: "C01-M4", value: "4" },
        { key: "C", text: t`$8 : 1$`, correct: false, misconceptionId: "C01-M5", value: "8" },
        { key: "D", text: t`$1 : 2$`, correct: false, misconceptionId: "C01-M6", value: "1/2" },
      ],
      solution: {
        steps: [
          t`$n = \dfrac{PV}{RT}$, so $\dfrac{n_A}{n_B} = \dfrac{2 \times 2}{2} = 2$.`,
          t`The ratio is $2 : 1$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.2 (iii)" },
      stem: t`Which is the ideal gas equation for $7\ \mathrm{g}$ of nitrogen gas? The atomic mass of nitrogen is $14$.`,
      verify: { kind: "value", inputs: { m_g: "7", M: "28", Ma: "14" }, params: { ask: "n" } },
      options: [
        { key: "A", text: t`$PV = 7RT$`, correct: false, misconceptionId: "C01-M7", value: "7" },
        { key: "B", text: t`$PV = \dfrac{1}{2}RT$`, correct: false, misconceptionId: "C01-M8", value: "1/2" },
        { key: "C", text: t`$PV = \dfrac{1}{4}RT$`, correct: true, value: "1/4" },
        { key: "D", text: t`$PV = 4RT$`, correct: false, misconceptionId: "C01-M6", value: "4" },
      ],
      solution: {
        steps: [
          t`Nitrogen gas is $\mathrm{N_2}$, of molar mass $28\ \mathrm{g/mol}$, so $n = \dfrac{7}{28} = \dfrac{1}{4}$.`,
          t`So $PV = \dfrac{1}{4}RT$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.1 (i)" },
      stem: t`What kind of energy do the molecules of an ideal gas have?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "energy" } },
      options: [
        { key: "A", text: t`Kinetic energy only`, correct: true, value: "kinetic_only" },
        { key: "B", text: t`Potential energy only`, correct: false, misconceptionId: "C01-M9", value: "potential_only" },
        { key: "C", text: t`Both kinetic and potential energy`, correct: false, misconceptionId: "C01-M10", value: "kinetic_and_potential" },
        { key: "D", text: t`Neither kinetic nor potential energy`, correct: false, misconceptionId: "C01-M11", value: "neither" },
      ],
      solution: {
        steps: [
          t`An ideal gas has no forces between its molecules, so they have no potential energy.`,
          t`Moving at random, they have kinetic energy only.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.5" },
      stem: t`A gas occupies $3\ \mathrm{L}$ at $27\ ^\circ\mathrm{C}$ and $2\ \mathrm{atm}$. What volume does it occupy at $127\ ^\circ\mathrm{C}$ and $1\ \mathrm{atm}$?`,
      verify: { kind: "value", inputs: { P1: "2", V1: "3", t1: "27", P2: "1", t2: "127" }, params: { ask: "V2" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{L}$`, correct: true, value: "8" },
        { key: "B", text: t`$2\ \mathrm{L}$`, correct: false, misconceptionId: "C01-M2", value: "2" },
        { key: "C", text: t`$6\ \mathrm{L}$`, correct: false, misconceptionId: "C01-M4", value: "6" },
        { key: "D", text: t`$28.2\ \mathrm{L}$`, correct: false, misconceptionId: "C01-M12", value: "28.2000000000000" },
      ],
      solution: {
        steps: [
          t`$T_1 = 300\ \mathrm{K}$ and $T_2 = 400\ \mathrm{K}$; $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$.`,
          t`$V_2 = 3 \times \dfrac{2}{1} \times \dfrac{400}{300} = 8\ \mathrm{L}$.`,
        ],
      },
    },
  ],
};
