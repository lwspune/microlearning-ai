import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Rub your hands together and they warm up, though no heat flowed into them. Hold them over a fire and they warm up too. What has changed in both cases?`,
    reveal: t`In both, the **internal energy** of your hands rose. Heat from the fire and work done by rubbing are two ways of changing it.`,
  },
  explanation: {
    intuition: [
      t`The molecules of a body are always moving and pulling on each other.`,
      t`Their random kinetic and potential energies add up to the body's **internal energy** $U$.`,
      t`**Heat** is energy that flows because of a temperature difference.`,
      t`**Work** is energy transferred by a force moving something, such as a piston.`,
      t`Both heat and work can change a system's internal energy; a body holds internal energy, not heat.`,
    ],
    formal: [
      {
        title: "Internal energy",
        points: [
          t`Internal energy $U$ is the total of the random kinetic and potential energies of a system's molecules.`,
          t`It does not include the motion of the system as a whole.`,
          t`In an ideal gas the molecules do not attract, so $U$ is all kinetic and depends only on $T$.`,
          t`Each degree of freedom carries $\dfrac{1}{2}kT$: a monatomic molecule has 3, so $U = \dfrac{3}{2}kT$.`,
          t`A diatomic molecule also rotates, giving 5: $U = \dfrac{5}{2}kT$. For $n$ moles, replace $k$ by $nR$.`,
        ],
      },
      {
        title: "Heat and work",
        points: [
          t`Heat flows from the hotter body to the colder one until their temperatures match.`,
          t`Work is done when a force moves its point of application, as when a gas pushes a piston.`,
          t`Heat and work are energy in transit; a body does not contain either.`,
          t`Heat taken in can raise $U$ without changing $T$: melting ice stays at $0^\circ\mathrm{C}$.`,
          t`There, the energy frees the molecules from the solid, raising their potential energy.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the internal energy of $2$ moles of oxygen, a diatomic ideal gas, at $300\ \mathrm{K}$, leaving out vibration. (Take $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.)`,
      steps: [
        t`A diatomic molecule has 3 translational and 2 rotational degrees of freedom: $f = 5$.`,
        t`Each mole has $\dfrac{1}{2}RT$ per degree of freedom, so $U = \dfrac{5}{2}nRT$.`,
        t`$U = \dfrac{5}{2} \times 2 \times 8.314 \times 300$.`,
        t`$U \approx 12\,470\ \mathrm{J}$.`,
      ],
      answer: t`$U \approx 1.25 \times 10^{4}\ \mathrm{J}$`,
    },
    visualSpec: t`Heat a gas in a cylinder with the piston locked and watch its molecules speed up; then push the piston in instead and watch the same speed-up.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Leaves out the rotational energy of a diatomic molecule.",
      remediation: t`A diatomic molecule also rotates about two axes: $f = 5$, so $U = \dfrac{5}{2}kT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Gives each degree of freedom $kT$ instead of $\dfrac{1}{2}kT$.`,
      remediation: t`By equipartition each degree of freedom carries $\dfrac{1}{2}kT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Counts only one degree of freedom.",
      remediation: "A molecule moves along three axes, each a degree of freedom; a diatomic one also rotates about two.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Gives a single atom rotational energy too.",
      remediation: t`A single atom's rotation is negligible: a monatomic molecule has only 3 degrees of freedom, so $U = \dfrac{3}{2}kT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks adding heat always raises the temperature.",
      remediation: "During melting or boiling, heat taken in raises the internal energy while the temperature stays fixed.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Mixes up heat and work.",
      remediation: t`Heat flows because of a temperature difference; work is done by a force moving something. Both change $U$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks a body contains heat.",
      remediation: "A body holds internal energy. Heat is energy only while it flows.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M8",
      mistake: "Counts the motion of the whole body as internal energy.",
      remediation: "Internal energy is only the molecules' random motion; the motion of the body as a whole is not part of it.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.1" },
      stem: t`Argon is a monatomic gas. What is the internal energy of one argon atom at absolute temperature $T$? ($k$ is Boltzmann's constant.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "U_molecule", atoms: "mono" } },
      options: [
        { key: "A", text: t`$\dfrac{3}{2}kT$`, correct: true, value: "3*T*k/2" },
        { key: "B", text: t`$3kT$`, correct: false, misconceptionId: "C02-M2", value: "3*T*k" },
        { key: "C", text: t`$\dfrac{1}{2}kT$`, correct: false, misconceptionId: "C02-M3", value: "T*k/2" },
        { key: "D", text: t`$\dfrac{5}{2}kT$`, correct: false, misconceptionId: "C02-M4", value: "5*T*k/2" },
      ],
      solution: {
        steps: [
          t`An argon atom has 3 translational degrees of freedom.`,
          t`Each carries $\dfrac{1}{2}kT$, so $U = \dfrac{3}{2}kT$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Solved Ex.4.1" },
      stem: t`Oxygen is a diatomic gas. What is the internal energy of one oxygen molecule at absolute temperature $T$, leaving out vibration? ($k$ is Boltzmann's constant.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "U_molecule", atoms: "di" } },
      options: [
        { key: "A", text: t`$\dfrac{3}{2}kT$`, correct: false, misconceptionId: "C02-M1", value: "3*T*k/2" },
        { key: "B", text: t`$5kT$`, correct: false, misconceptionId: "C02-M2", value: "5*T*k" },
        { key: "C", text: t`$\dfrac{1}{2}kT$`, correct: false, misconceptionId: "C02-M3", value: "T*k/2" },
        { key: "D", text: t`$\dfrac{5}{2}kT$`, correct: true, value: "5*T*k/2" },
      ],
      solution: {
        steps: [
          t`An oxygen molecule has 3 translational and 2 rotational degrees of freedom.`,
          t`Each carries $\dfrac{1}{2}kT$, so $U = \dfrac{5}{2}kT$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.2 (iii)" },
      stem: t`Ice at $0^\circ\mathrm{C}$ takes in heat and melts, staying at $0^\circ\mathrm{C}$ the whole time. What happens to the heat it takes in?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "melt" } },
      options: [
        { key: "A", text: t`The ice stores it as heat, ready to give back`, correct: false, misconceptionId: "C02-M7", value: "stored_as_heat" },
        { key: "B", text: t`It raises the internal energy, freeing the molecules from the solid`, correct: true, value: "internal_energy" },
        { key: "C", text: t`Nothing: ice cannot take in heat without warming up`, correct: false, misconceptionId: "C02-M5", value: "cannot_take_heat" },
        { key: "D", text: t`The ice turns it all into work on its surroundings`, correct: false, misconceptionId: "C02-M6", value: "becomes_work" },
      ],
      solution: {
        steps: [
          t`The temperature, and so the molecules' kinetic energy, does not change.`,
          t`The heat raises the internal energy by freeing the molecules from the solid, raising their potential energy.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.3" },
      stem: t`A car drives along a road. What makes up the internal energy of the air in its tyres?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "includes" } },
      options: [
        { key: "A", text: t`Its molecules' random energies plus the kinetic energy of the car's motion`, correct: false, misconceptionId: "C02-M8", value: "bulk_motion" },
        { key: "B", text: t`The random kinetic and potential energies of its molecules`, correct: true, value: "molecular_ke_pe" },
        { key: "C", text: t`The work the air has done on the tyre`, correct: false, misconceptionId: "C02-M6", value: "work_done" },
        { key: "D", text: t`The heat the air contains`, correct: false, misconceptionId: "C02-M7", value: "heat_contained" },
      ],
      solution: {
        steps: [
          t`Internal energy is the random kinetic and potential energy of the molecules.`,
          t`The car's motion moves all the air together, so it is not part of the internal energy.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Find the internal energy of $1$ mole of argon, a monatomic ideal gas, at $300\ \mathrm{K}$. (Take $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.)`,
      verify: { kind: "value", inputs: { n: "1", T: "300" }, params: { ask: "U_mol", atoms: "mono" } },
      options: [
        { key: "A", text: t`$6240\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M4", value: "6240" },
        { key: "B", text: t`$3740\ \mathrm{J}$`, correct: true, value: "3740" },
        { key: "C", text: t`$7480\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M2", value: "7480" },
        { key: "D", text: t`$1250\ \mathrm{J}$`, correct: false, misconceptionId: "C02-M3", value: "1250" },
      ],
      solution: {
        steps: [
          t`Argon is monatomic: $U = \dfrac{3}{2}nRT$.`,
          t`$U = \dfrac{3}{2} \times 1 \times 8.314 \times 300 \approx 3740\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
