import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Helium and xenon are at the same temperature. Whose molecules have more kinetic energy on average?`,
    reveal: t`Neither. Temperature alone fixes the average kinetic energy of a molecule, $\dfrac{3}{2}k_BT$; xenon's heavier molecules simply move more slowly.`,
  },
  explanation: {
    intuition: [
      t`In $P = \dfrac{1}{3}\dfrac{N}{V}mv_{rms}^2$, the molecules' motion makes the pressure.`,
      t`Comparing it with the gas equation, $PV = Nk_BT$, links that motion to temperature.`,
      t`The average kinetic energy of a molecule turns out to be $\dfrac{3}{2}k_BT$.`,
      t`So temperature is a measure of the average kinetic energy of the molecules.`,
      t`Heating a gas gives its molecules more kinetic energy; at absolute zero their motion would stop.`,
    ],
    formal: [
      {
        title: "Kinetic meaning of temperature",
        points: [
          t`$PV = \dfrac{1}{3}Nmv_{rms}^2$ and $PV = Nk_BT$, where $k_B = \dfrac{R}{N_A}$.`,
          t`So $\dfrac{1}{2}mv_{rms}^2 = \dfrac{3}{2}k_BT$: the average kinetic energy of a molecule.`,
          t`It depends only on $T$, not on which gas it is.`,
          t`$k_B = 1.38 \times 10^{-23}\ \mathrm{J/K}$ is **Boltzmann's constant**.`,
        ],
      },
      {
        title: "Kinetic energy of a sample",
        points: [
          t`Per mole: $N_A \times \dfrac{3}{2}k_BT = \dfrac{3}{2}RT$.`,
          t`Per kilogram: $\dfrac{3}{2}\dfrac{RT}{M}$, with $M$ in kg/mol.`,
          t`For a sample at pressure $P$ and volume $V$, the total is $\dfrac{3}{2}PV$.`,
          t`Use SI units: $1\ \mathrm{L} = 1000\ \mathrm{cc} = 10^{-3}\ \mathrm{m^3}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the average kinetic energy of a gas molecule at $227\ ^\circ\mathrm{C}$? Take $k_B = 1.38 \times 10^{-23}\ \mathrm{J/K}$.`,
      steps: [
        t`$T = 227 + 273 = 500\ \mathrm{K}$.`,
        t`Average kinetic energy $= \dfrac{3}{2}k_BT$.`,
        t`$= \dfrac{3}{2} \times 1.38 \times 10^{-23} \times 500$.`,
        t`$\approx 1.04 \times 10^{-20}\ \mathrm{J}$.`,
      ],
      answer: t`$\approx 1.04 \times 10^{-20}\ \mathrm{J}$`,
    },
    visualSpec: t`Heat a box of gas with a slider and watch a bar for the average kinetic energy per molecule rise in step with $T$, the same for any gas.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Leaves out the $\dfrac{3}{2}$.`,
      remediation: t`$\dfrac{1}{2}mv_{rms}^2 = \dfrac{3}{2}k_BT$, and for a whole sample $E = \dfrac{3}{2}PV$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Uses $\dfrac{1}{2}$ in place of $\dfrac{3}{2}$.`,
      remediation: t`$\dfrac{1}{2}k_BT$ is the share of one direction of motion; three directions give $\dfrac{3}{2}k_BT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Leaves cubic centimetres unconverted.",
      remediation: t`$1\ \mathrm{cc} = 10^{-6}\ \mathrm{m^3}$ and $1\ \mathrm{L} = 10^{-3}\ \mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Uses temperatures in degrees Celsius.",
      remediation: t`Use absolute temperature: $T = t + 273$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Uses $R$ in place of $k_B$, giving the energy of a mole instead of a molecule.`,
      remediation: t`$k_B = \dfrac{R}{N_A}$ is per molecule; $R$ is per mole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Uses the molar mass in grams per mole.",
      remediation: t`Per kilogram, divide by the molar mass in kg/mol: oxygen's is $0.032$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Multiplies by the molar mass instead of dividing.",
      remediation: "Energy per kilogram = energy per mole divided by kilograms per mole.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks heating makes the molecules themselves bigger.",
      remediation: "Molecules keep their size; heating makes them move faster.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks heating raises the potential energy between the molecules.",
      remediation: "An ideal gas has no forces between its molecules, so the heat goes into their kinetic energy.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks heating makes the molecules collide less often.",
      remediation: "Faster molecules collide more often, not less; what rises is their average kinetic energy.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.17" },
      stem: t`Find the total kinetic energy of the molecules in $5000\ \mathrm{cc}$ of a gas at S.T.P., where the pressure is $1.013 \times 10^5\ \mathrm{N/m^2}$.`,
      verify: { kind: "value", inputs: { P: "1.013e5", V_cc: "5000" }, params: { ask: "sample", sf: "4" } },
      options: [
        { key: "A", text: t`$7.598 \times 10^{8}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "759800000" },
        { key: "B", text: t`$759.8\ \mathrm{J}$`, correct: true, value: "759.800000000000" },
        { key: "C", text: t`$506.5\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M1", value: "506.500000000000" },
        { key: "D", text: t`$253.2\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "253.200000000000" },
      ],
      solution: {
        steps: [
          t`$V = 5000\ \mathrm{cc} = 5 \times 10^{-3}\ \mathrm{m^3}$.`,
          t`$E = \dfrac{3}{2}PV = \dfrac{3}{2} \times 1.013 \times 10^5 \times 5 \times 10^{-3}$ $\approx 759.8\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.18" },
      stem: t`What is the average kinetic energy of an oxygen molecule at $127\ ^\circ\mathrm{C}$? Take $k_B = 1.38 \times 10^{-23}\ \mathrm{J/K}$ and $R = 8.31\ \mathrm{J\,mol^{-1}K^{-1}}$.`,
      verify: { kind: "value", inputs: { t: "127", k: "1.38e-23", R: "8.31" }, params: { ask: "molecule" } },
      options: [
        { key: "A", text: t`$5.52 \times 10^{-21}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M1", value: "5.52000000000000e-21" },
        { key: "B", text: t`$2.63 \times 10^{-21}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "2.63000000000000e-21" },
        { key: "C", text: t`$4990\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "4990" },
        { key: "D", text: t`$8.28 \times 10^{-21}\ \mathrm{J}$`, correct: true, value: "8.28000000000000e-21" },
      ],
      solution: {
        steps: [
          t`$T = 127 + 273 = 400\ \mathrm{K}$.`,
          t`$E = \dfrac{3}{2}k_BT = \dfrac{3}{2} \times 1.38 \times 10^{-23} \times 400$ $\approx 8.28 \times 10^{-21}\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.18" },
      stem: t`What is the average kinetic energy of the molecules in $1\ \mathrm{kg}$ of oxygen ($M = 32\ \mathrm{g/mol}$) at $127\ ^\circ\mathrm{C}$? Take $R = 8.31\ \mathrm{J\,mol^{-1}K^{-1}}$.`,
      verify: { kind: "value", inputs: { t: "127", R: "8.31", M_g: "32" }, params: { ask: "per_kg", sf: "4" } },
      options: [
        { key: "A", text: t`$1.558 \times 10^{5}\ \mathrm{J}$`, correct: true, value: "155800" },
        { key: "B", text: t`$49470\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M4", value: "49470" },
        { key: "C", text: t`$155.8\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M6", value: "155.800000000000" },
        { key: "D", text: t`$159.6\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M7", value: "159.600000000000" },
      ],
      solution: {
        steps: [
          t`Per mole: $\dfrac{3}{2}RT = 1.5 \times 8.31 \times 400 = 4986\ \mathrm{J}$.`,
          t`Per kilogram: $\dfrac{4986}{0.032} \approx 1.558 \times 10^5\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.1(vi)" },
      stem: t`What is the average kinetic energy of one molecule of a gas at absolute temperature $T$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{2}k_BT$`, correct: false, misconceptionId: "C05-M2", value: "half_kT" },
        { key: "B", text: t`$\dfrac{3}{2}RT$`, correct: false, misconceptionId: "C05-M5", value: "three_halves_RT" },
        { key: "C", text: t`$\dfrac{3}{2}k_BT$`, correct: true, value: "three_halves_kT" },
        { key: "D", text: t`$k_BT$`, correct: false, misconceptionId: "C05-M1", value: "kT" },
      ],
      solution: {
        steps: [
          t`$PV = \dfrac{1}{3}Nmv_{rms}^2$ and $PV = Nk_BT$.`,
          t`So $\dfrac{1}{2}mv_{rms}^2 = \dfrac{3}{2}k_BT$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.3" },
      stem: t`According to kinetic theory, why does the temperature of a gas rise when it is heated?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "heating" } },
      options: [
        { key: "A", text: t`The average kinetic energy of its molecules increases`, correct: true, value: "more_kinetic_energy" },
        { key: "B", text: t`Its molecules expand and become bigger`, correct: false, misconceptionId: "C05-M8", value: "bigger_molecules" },
        { key: "C", text: t`The potential energy between its molecules increases`, correct: false, misconceptionId: "C05-M9", value: "more_potential_energy" },
        { key: "D", text: t`Its molecules collide with one another less often`, correct: false, misconceptionId: "C05-M10", value: "fewer_collisions" },
      ],
      solution: {
        steps: [
          t`Temperature measures the average kinetic energy of the molecules, $\dfrac{3}{2}k_BT$.`,
          t`Heating gives the molecules more kinetic energy, so the temperature rises.`,
        ],
      },
    },
  ],
};
