import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Two charged balloons push each other apart. Bring them to half their distance. Does the push double?`,
    reveal: t`It becomes **four times** as large. The force between two charges varies as $\dfrac{1}{r^2}$: halve $r$ and $r^2$ falls to a quarter.`,
  },
  explanation: {
    intuition: [
      t`Two charged bodies push or pull each other, even across empty space.`,
      t`A **point charge** is a charged body so small that its size does not matter.`,
      t`The force grows with each charge and falls quickly as the charges move apart.`,
      t`It acts along the line joining the two charges: like charges repel, unlike charges attract.`,
      t`Coulomb measured this force with a torsion balance and found a simple law.`,
    ],
    formal: [
      {
        title: "Coulomb's law",
        points: [
          t`The force between two point charges $q_1$ and $q_2$ a distance $r$ apart is $F$ $= \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$.`,
          t`$\varepsilon_0$ $= 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$ is the **permittivity of free space**.`,
          t`So $\dfrac{1}{4\pi\varepsilon_0}$ $= 9 \times 10^{9}\ \mathrm{N\,m^2/C^2}$.`,
          t`Put charges in coulomb and $r$ in metre: convert $\mathrm{cm}$ to $\mathrm{m}$ first.`,
          t`The force on $q_1$ and the force on $q_2$ are equal and opposite, even when $q_1 \ne q_2$.`,
        ],
      },
      {
        title: "The unit of charge",
        points: [
          t`Put $q_1 = q_2 = 1\ \mathrm{C}$ and $r = 1\ \mathrm{m}$ in vacuum: $F = 9 \times 10^{9}\ \mathrm{N}$.`,
          t`So **one coulomb** is the charge that repels an equal charge $1\ \mathrm{m}$ away in vacuum with $9 \times 10^{9}\ \mathrm{N}$.`,
          t`That is an enormous force: the coulomb is a very large unit.`,
          t`Everyday charges are in $\mu\mathrm{C}$ ($10^{-6}\ \mathrm{C}$) or $\mathrm{nC}$ ($10^{-9}\ \mathrm{C}$).`,
        ],
      },
      {
        title: "Force in a medium",
        points: [
          t`In a medium such as water or oil, the force between the same charges at the same distance is smaller.`,
          t`The **relative permittivity** (dielectric constant) is $\varepsilon_r$ $= \dfrac{F_{vac}}{F_{med}}$.`,
          t`Also $\varepsilon_r$ $= \dfrac{\varepsilon}{\varepsilon_0}$, where $\varepsilon$ is the permittivity of the medium.`,
          t`It is a ratio of like quantities, so it is a pure number: about $1$ for air, $80$ for water.`,
          t`So in a medium $F$ $= \dfrac{1}{4\pi\varepsilon_0\varepsilon_r}\dfrac{q_1q_2}{r^2}$.`,
        ],
      },
      {
        title: "Electric and gravitational force",
        points: [
          t`Both follow an inverse square law and act along the line joining the two bodies.`,
          t`Gravity only attracts; the electric force attracts or repels.`,
          t`Between two protons the electric force is about $10^{36}$ times the gravitational force.`,
          t`Gravity rules planets because big bodies are neutral: their charges cancel.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two protons are $10^{-15}\ \mathrm{m}$ apart. Find the electric force and the gravitational force between them, and their ratio. ($e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$, $m_p$ $= 1.67 \times 10^{-27}\ \mathrm{kg}$, $G$ $= 6.674 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.)`,
      steps: [
        t`$F_e$ $= 9 \times 10^{9} \times \dfrac{(1.6 \times 10^{-19})^2}{(10^{-15})^2}$ $\approx 230\ \mathrm{N}$, a repulsion.`,
        t`$F_g$ $= 6.674 \times 10^{-11} \times \dfrac{(1.67 \times 10^{-27})^2}{(10^{-15})^2}$ $\approx 1.86 \times 10^{-34}\ \mathrm{N}$.`,
        t`$\dfrac{F_e}{F_g} \approx 1.24 \times 10^{36}$: the electric force is far stronger.`,
      ],
      answer: t`$F_e \approx 230\ \mathrm{N}$, $F_g \approx 1.86 \times 10^{-34}\ \mathrm{N}$, ratio $\approx 1.24 \times 10^{36}$`,
    },
    visualSpec: t`Drag two charges closer or farther and watch the force arrows grow four times when the distance halves.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Takes the force as varying with $\dfrac{1}{r}$, not $\dfrac{1}{r^2}$.`,
      remediation: t`Coulomb's law is an inverse square law: $F \propto \dfrac{1}{r^2}$, so square the distance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Leaves the distance in centimetre.",
      remediation: t`Use SI units in $F$ $= \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$: convert $\mathrm{cm}$ to $\mathrm{m}$ first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Gives the charge on one sphere for the total.",
      remediation: t`Coulomb's law gives each sphere's charge $q$; the total on both is $2q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Multiplies the force by $\varepsilon_r$ in a medium.`,
      remediation: t`A medium weakens the force: $F_{med}$ $= \dfrac{F_{vac}}{\varepsilon_r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Uses $q \times q$ for the product $q \times 2q$.`,
      remediation: t`The product of the charges is $q \times 2q = 2q^2$; keep the factor $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Stops at $q^2$, forgetting the square root.`,
      remediation: t`Coulomb's law gives $q^2$; take its square root to get $q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Ignores the medium between the charges.",
      remediation: t`A medium of relative permittivity $\varepsilon_r$ reduces the force $\varepsilon_r$ times.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks relative permittivity has units.",
      remediation: t`$\varepsilon_r$ $= \dfrac{\varepsilon}{\varepsilon_0}$ is a ratio of like quantities, so it is a pure number.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Leaves out $\dfrac{1}{4\pi\varepsilon_0}$.`,
      remediation: t`$F$ $= \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$ with $\dfrac{1}{4\pi\varepsilon_0}$ $= 9 \times 10^{9}\ \mathrm{N\,m^2/C^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks the larger charge pushes harder on the smaller one.",
      remediation: t`Both forces contain the same product $q_1q_2$: they are equal and opposite.`,
      fallback: { kind: "ext", topic: "Newton's third law" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks the larger charge feels the larger force.",
      remediation: t`The force on each charge is $\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$, the same for both.`,
      fallback: { kind: "ext", topic: "Newton's third law" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks the two forces point the same way.",
      remediation: "Like charges push each other apart, so the two forces point in opposite directions.",
      fallback: { kind: "ext", topic: "Newton's third law" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.3 (i)" },
      stem: t`Two small spheres $18\ \mathrm{cm}$ apart carry equal negative charges and repel each other with a force of $6 \times 10^{-3}\ \mathrm{N}$. What is the total charge on both spheres, in magnitude? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^{9}\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { F: "6e-3", r: "18" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`$2.94 \times 10^{-7}\ \mathrm{C}$`, correct: true, value: "2.94000000000000e-7" },
        { key: "B", text: t`$6.93 \times 10^{-7}\ \mathrm{C}$`, correct: false, misconceptionId: "C02-M1", value: "6.93000000000000e-7" },
        { key: "C", text: t`$2.94 \times 10^{-5}\ \mathrm{C}$`, correct: false, misconceptionId: "C02-M2", value: "2.94000000000000e-5" },
        { key: "D", text: t`$1.47 \times 10^{-7}\ \mathrm{C}$`, correct: false, misconceptionId: "C02-M3", value: "1.47000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$q^2$ $= \dfrac{Fr^2}{9 \times 10^{9}}$ $= \dfrac{6 \times 10^{-3} \times (0.18)^2}{9 \times 10^{9}}$ $= 2.16 \times 10^{-14}$.`,
          t`$q \approx 1.47 \times 10^{-7}\ \mathrm{C}$ on each sphere.`,
          t`Total $= 2q \approx 2.94 \times 10^{-7}\ \mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.3 (ii)" },
      stem: t`A charge $+q$ attracts a charge $-2q$ with a force of $0.2\ \mathrm{N}$ when they are $25.0\ \mathrm{cm}$ apart in air. What is $q$? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^{9}\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { F: "0.2", r: "25" }, params: { ask: "q2q" } },
      options: [
        { key: "A", text: t`$1.67 \times 10^{-6}\ \mathrm{C}$`, correct: false, misconceptionId: "C02-M1", value: "1.67000000000000e-6" },
        { key: "B", text: t`$1.18 \times 10^{-6}\ \mathrm{C}$`, correct: false, misconceptionId: "C02-M5", value: "1.18000000000000e-6" },
        { key: "C", text: t`$6.94 \times 10^{-13}\ \mathrm{C}$`, correct: false, misconceptionId: "C02-M6", value: "6.94000000000000e-13" },
        { key: "D", text: t`$8.33 \times 10^{-7}\ \mathrm{C}$`, correct: true, value: "8.33000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$F$ $= 9 \times 10^{9} \times \dfrac{q \times 2q}{r^2}$, with $r = 0.25\ \mathrm{m}$.`,
          t`$q^2$ $= \dfrac{0.2 \times 0.0625}{1.8 \times 10^{10}}$ $\approx 6.94 \times 10^{-13}$.`,
          t`$q \approx 8.33 \times 10^{-7}\ \mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`Two point charges in vacuum repel each other with a force of $0.9\ \mathrm{N}$. They are placed in a medium of relative permittivity $6$, at half their earlier distance. What is the force now?`,
      verify: { kind: "value", inputs: { F0: "0.9", er: "6", s: "1/2" }, params: { ask: "medium" } },
      options: [
        { key: "A", text: t`$3.6\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M7", value: "3.60000000000000" },
        { key: "B", text: t`$0.6\ \mathrm{N}$`, correct: true, value: "0.600000000000000" },
        { key: "C", text: t`$0.3\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "0.300000000000000" },
        { key: "D", text: t`$21.6\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M4", value: "21.6000000000000" },
      ],
      solution: {
        steps: [
          t`Halving the distance makes the force $4$ times: $3.6\ \mathrm{N}$ in vacuum.`,
          t`The medium divides it by $\varepsilon_r$: $\dfrac{3.6}{6}$ $= 0.6\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.2 (ix)" },
      stem: t`The relative permittivity $\varepsilon_r$ of a medium is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "eps_r" } },
      options: [
        { key: "A", text: t`$\varepsilon\varepsilon_0$, measured in $\mathrm{C^2/(N\,m^2)}$`, correct: false, misconceptionId: "C02-M8", value: "has_units" },
        { key: "B", text: t`$\dfrac{F_{vac}}{F_{med}}$, the force between two charges in vacuum over that at the same distance in the medium; a pure number`, correct: true, value: "ratio_vac_med" },
        { key: "C", text: t`$\dfrac{F_{med}}{F_{vac}}$, the force in the medium over that in vacuum; a pure number`, correct: false, misconceptionId: "C02-M4", value: "ratio_med_vac" },
        { key: "D", text: t`$1$ for every medium, since a medium does not change the force between charges`, correct: false, misconceptionId: "C02-M7", value: "always_one" },
      ],
      solution: {
        steps: [
          t`$\varepsilon_r$ $= \dfrac{\varepsilon}{\varepsilon_0}$ $= \dfrac{F_{vac}}{F_{med}}$, for the same charges at the same distance.`,
          t`It is a ratio of like quantities, so it has no unit.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Two point charges of $2\ \mu\mathrm{C}$ each are $3\ \mathrm{cm}$ apart in air. What is the force between them? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^{9}\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q: "2", r: "3" }, params: { ask: "force" } },
      options: [
        { key: "A", text: t`$4.44 \times 10^{-9}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M9", value: "4.44000000000000e-9" },
        { key: "B", text: t`$40\ \mathrm{N}$`, correct: true, value: "40" },
        { key: "C", text: t`$1.2\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "1.20000000000000" },
        { key: "D", text: t`$0.004\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M2", value: "0.00400000000000000" },
      ],
      solution: {
        steps: [
          t`$q = 2 \times 10^{-6}\ \mathrm{C}$, $r = 0.03\ \mathrm{m}$.`,
          t`$F$ $= 9 \times 10^{9} \times \dfrac{(2 \times 10^{-6})^2}{(0.03)^2}$ $= 40\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`A charge of $+2\ \mu\mathrm{C}$ and a charge of $+8\ \mu\mathrm{C}$ are $10\ \mathrm{cm}$ apart. How do the forces on the two charges compare?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "third" } },
      options: [
        { key: "A", text: t`They are equal in size and opposite in direction, along the line joining the charges`, correct: true, value: "equal_opposite" },
        { key: "B", text: t`The force on the $2\ \mu\mathrm{C}$ charge is $4$ times the force on the $8\ \mu\mathrm{C}$ charge`, correct: false, misconceptionId: "C02-M10", value: "small_feels_more" },
        { key: "C", text: t`The force on the $8\ \mu\mathrm{C}$ charge is $4$ times the force on the $2\ \mu\mathrm{C}$ charge`, correct: false, misconceptionId: "C02-M11", value: "large_feels_more" },
        { key: "D", text: t`They are equal in size and point the same way`, correct: false, misconceptionId: "C02-M12", value: "same_direction" },
      ],
      solution: {
        steps: [
          t`Each force is $\dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$, with the same product $q_1q_2$.`,
          t`So the forces are equal; the charges repel, so they point away from each other, along the line joining them.`,
        ],
      },
    },
  ],
};
