import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`At the same temperature, which moves faster on average: a hydrogen molecule or an oxygen molecule?`,
    reveal: t`Hydrogen, four times as fast. Both have the same average kinetic energy, so the lighter molecule must move faster: $v_{rms} \propto \dfrac{1}{\sqrt{M}}$.`,
  },
  explanation: {
    intuition: [
      t`The molecules of a gas move at many different speeds.`,
      t`The **root mean square (rms) speed** is the square root of the average of their squared speeds.`,
      t`It is the speed that fixes the gas's pressure and its kinetic energy.`,
      t`Heating a gas speeds up its molecules: $v_{rms}$ grows as $\sqrt{T}$.`,
      t`At the same temperature, lighter molecules move faster: $v_{rms}$ falls as $\dfrac{1}{\sqrt{M}}$.`,
    ],
    formal: [
      {
        title: "RMS speed",
        points: [
          t`$v_{rms} = \sqrt{\dfrac{v_1^2 + v_2^2 + \cdots + v_N^2}{N}}$.`,
          t`From $P = \dfrac{1}{3}\rho v_{rms}^2$: $v_{rms} = \sqrt{\dfrac{3P}{\rho}}$.`,
          t`With $PV = nRT$: $v_{rms} = \sqrt{\dfrac{3RT}{M}}$, where $M$ is the molar mass in kg/mol.`,
          t`Per molecule: $v_{rms} = \sqrt{\dfrac{3k_BT}{m}}$, where $m$ is the mass of one molecule.`,
          t`The **mean square speed**, $\overline{v^2} = v_{rms}^2$, grows in proportion to $T$.`,
        ],
      },
      {
        title: "Comparing gases",
        points: [
          t`$v_{rms} \propto \sqrt{T}$: four times the absolute temperature doubles the rms speed.`,
          t`$v_{rms} \propto \dfrac{1}{\sqrt{M}}$: at the same $T$, oxygen ($M = 32$) moves a quarter as fast as hydrogen ($M = 2$).`,
          t`Two gases have equal rms speeds when $\dfrac{T_1}{M_1} = \dfrac{T_2}{M_2}$.`,
          t`Always use absolute temperature, $T = t + 273$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the rms speed of nitrogen molecules ($M = 28\ \mathrm{g/mol}$) at $27\ ^\circ\mathrm{C}$. Take $R = 8.31\ \mathrm{J\,mol^{-1}K^{-1}}$.`,
      steps: [
        t`$T = 27 + 273 = 300\ \mathrm{K}$, and $M = 0.028\ \mathrm{kg/mol}$.`,
        t`$v_{rms} = \sqrt{\dfrac{3RT}{M}}$.`,
        t`$v_{rms} = \sqrt{\dfrac{3 \times 8.31 \times 300}{0.028}}$.`,
        t`$v_{rms} \approx 517\ \mathrm{m/s}$.`,
      ],
      answer: t`$v_{rms} \approx 517\ \mathrm{m/s}$`,
    },
    visualSpec: t`Heat a box holding a light gas and a heavy gas with a slider and watch both sets of molecules speed up, the light ones always faster.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses 2 in place of 3 in $\sqrt{\dfrac{3k_BT}{m}}$.`,
      remediation: t`The 3 comes from the three directions of motion: $\dfrac{1}{2}mv_{rms}^2 = \dfrac{3}{2}k_BT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Forgets the square root, taking the speed to grow as $T$.`,
      remediation: t`$\dfrac{3k_BT}{m}$ is the mean square speed; $v_{rms}$ is its square root, so $v_{rms} \propto \sqrt{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Takes one atomic mass unit as the atom's mass.",
      remediation: t`A helium atom has a mass of $4\ \mathrm{u}$: multiply $1\ \mathrm{u}$ by the atom's mass number.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Takes the square root of the mass ratio when finding a temperature.",
      remediation: t`Equal rms speeds need $\dfrac{T_1}{M_1} = \dfrac{T_2}{M_2}$, so the temperatures are in the plain ratio of the masses.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Turns the ratio upside down.",
      remediation: "Heavier molecules need a higher temperature to move as fast, and at one temperature they are slower. Keep each quantity on its own side.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Uses temperatures in degrees Celsius.",
      remediation: t`Use absolute temperature: $T = t + 273$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks the rms speed does not depend on the temperature.",
      remediation: t`$v_{rms} = \sqrt{\dfrac{3RT}{M}}$: a hotter gas has faster molecules.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Leaves the molar masses out.",
      remediation: t`$v_{rms} \propto \sqrt{\dfrac{T}{M}}$: compare both the temperature and the molar mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Gives the ratio of rms speeds when the mean square speeds are asked.",
      remediation: t`The mean square speed $\overline{v^2}$ is proportional to $T$ itself; the rms speed is its square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Squares the temperature ratio.",
      remediation: t`$\overline{v^2} \propto T$, not $T^2$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Solved Ex.3.2" },
      stem: t`What is the rms speed of helium atoms at $300\ \mathrm{K}$? A helium atom's mass is $4\ \mathrm{u}$, with $1\ \mathrm{u} = 1.66 \times 10^{-27}\ \mathrm{kg}$ and $k_B = 1.38 \times 10^{-23}\ \mathrm{J/K}$.`,
      verify: { kind: "value", inputs: { A: "4", T: "300", k: "1.38e-23", u: "1.66e-27" }, params: { ask: "vrms" } },
      options: [
        { key: "A", text: t`$1.87 \times 10^{6}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M2", value: "1870000" },
        { key: "B", text: t`$2740\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M3", value: "2740" },
        { key: "C", text: t`$1370\ \mathrm{m/s}$`, correct: true, value: "1370" },
        { key: "D", text: t`$1120\ \mathrm{m/s}$`, correct: false, misconceptionId: "C04-M1", value: "1120" },
      ],
      solution: {
        steps: [
          t`$m = 4 \times 1.66 \times 10^{-27} = 6.64 \times 10^{-27}\ \mathrm{kg}$.`,
          t`$v_{rms} = \sqrt{\dfrac{3k_BT}{m}} = \sqrt{\dfrac{3 \times 1.38 \times 10^{-23} \times 300}{6.64 \times 10^{-27}}}$.`,
          t`$v_{rms} \approx 1370\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.15" },
      stem: t`At what temperature will oxygen molecules ($M = 32$) have the same rms speed as helium atoms ($M = 4$) at $273\ \mathrm{K}$?`,
      verify: { kind: "value", inputs: { M1: "4", T1: "273", M2: "32" }, params: { ask: "T_same", sf: "4" } },
      options: [
        { key: "A", text: t`$772.2\ \mathrm{K}$`, correct: false, misconceptionId: "C04-M4", value: "772.200000000000" },
        { key: "B", text: t`$34.12\ \mathrm{K}$`, correct: false, misconceptionId: "C04-M5", value: "34.1200000000000" },
        { key: "C", text: t`$273\ \mathrm{K}$`, correct: false, misconceptionId: "C04-M7", value: "273" },
        { key: "D", text: t`$2184\ \mathrm{K}$`, correct: true, value: "2184" },
      ],
      solution: {
        steps: [
          t`Equal rms speeds need $\dfrac{T_O}{M_O} = \dfrac{T_{He}}{M_{He}}$.`,
          t`$T_O = 273 \times \dfrac{32}{4} = 2184\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.16" },
      stem: t`What is the ratio of the rms speed of hydrogen molecules ($M = 2$) at $127\ ^\circ\mathrm{C}$ to that of oxygen molecules ($M = 32$) at $27\ ^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { M1: "2", t1: "127", M2: "32", t2: "27" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$8.68 : 1$`, correct: false, misconceptionId: "C04-M6", value: "8.68000000000000" },
        { key: "B", text: t`$2 : \sqrt{3}$`, correct: false, misconceptionId: "C04-M8", value: "1.15000000000000" },
        { key: "C", text: t`$8 : \sqrt{3}$`, correct: true, value: "4.62000000000000" },
        { key: "D", text: t`$64 : 3$`, correct: false, misconceptionId: "C04-M2", value: "21.3000000000000" },
      ],
      solution: {
        steps: [
          t`$v_{rms} \propto \sqrt{\dfrac{T}{M}}$, with $T = 400\ \mathrm{K}$ and $300\ \mathrm{K}$: $\dfrac{v_H}{v_O} = \sqrt{\dfrac{400/2}{300/32}}$.`,
          t`$= \sqrt{\dfrac{64}{3}} = \dfrac{8}{\sqrt{3}}$, a ratio of $8 : \sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.11" },
      stem: t`What is the ratio of the mean square speeds of the molecules of a gas at $30\ \mathrm{K}$ and at $120\ \mathrm{K}$?`,
      verify: { kind: "value", inputs: { T1: "30", T2: "120" }, params: { ask: "msq" } },
      options: [
        { key: "A", text: t`$4 : 1$`, correct: false, misconceptionId: "C04-M5", value: "4" },
        { key: "B", text: t`$1 : 2$`, correct: false, misconceptionId: "C04-M9", value: "1/2" },
        { key: "C", text: t`$1 : 16$`, correct: false, misconceptionId: "C04-M10", value: "1/16" },
        { key: "D", text: t`$1 : 4$`, correct: true, value: "1/4" },
      ],
      solution: {
        steps: [
          t`$\overline{v^2} \propto T$.`,
          t`$\dfrac{30}{120} = \dfrac{1}{4}$, so the ratio is $1 : 4$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.1(v)" },
      stem: t`The rms speed of the molecules of a gas is proportional to which of these? ($T$ is the absolute temperature.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "propto" } },
      options: [
        { key: "A", text: t`None: it does not depend on $T$`, correct: false, misconceptionId: "C04-M7", value: "independent_of_T" },
        { key: "B", text: t`$\sqrt{T}$`, correct: true, value: "sqrt_T" },
        { key: "C", text: t`$T$`, correct: false, misconceptionId: "C04-M2", value: "T" },
        { key: "D", text: t`$\dfrac{1}{\sqrt{T}}$`, correct: false, misconceptionId: "C04-M5", value: "one_over_sqrt_T" },
      ],
      solution: {
        steps: [
          t`$v_{rms} = \sqrt{\dfrac{3RT}{M}}$.`,
          t`So $v_{rms} \propto \sqrt{T}$.`,
        ],
      },
    },
  ],
};
