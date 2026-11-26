import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`At the centre of a charged ring the electric field is zero: the pulls from all sides cancel. Is the electric potential there zero too?`,
    reveal: t`No. Potential is work per unit charge, a number, not a direction, so the contributions from every bit of the ring add up: $V = \dfrac{q}{4\pi\varepsilon_0R}$.`,
  },
  explanation: {
    intuition: [
      t`Pushing a positive charge towards another positive charge takes work, which is stored as energy.`,
      t`The **electric potential** at a point is the work done per unit positive charge to bring a charge there from infinity, slowly.`,
      t`Its unit is the **volt**: $1\ \mathrm{V} = 1\ \mathrm{J/C}$.`,
      t`Potential is a scalar: the potentials of several charges simply add, with their signs.`,
      t`Near a positive charge the potential is positive; near a negative one, negative.`,
    ],
    formal: [
      {
        title: "Potential of a point charge",
        points: [
          t`At a distance $r$ from a point charge $q$: $V = \dfrac{q}{4\pi\varepsilon_0r}$, so $V \propto \dfrac{1}{r}$.`,
          t`The field falls as $\dfrac{1}{r^2}$, but the potential only as $\dfrac{1}{r}$.`,
          t`For several charges, $V$ $= \dfrac{1}{4\pi\varepsilon_0}\left(\dfrac{q_1}{r_1} + \dfrac{q_2}{r_2} + \ldots\right)$, each $r$ a straight-line distance.`,
          t`All the charge on a ring is the same distance $R$ from its centre: $V = \dfrac{q}{4\pi\varepsilon_0R}$.`,
        ],
      },
      {
        title: "Work and potential difference",
        points: [
          t`Work to bring $q_0$ from infinity to a point at potential $V$: $W = q_0V$.`,
          t`Work to carry $q_0$ from A to B: $W_{AB} = q_0\left(V_B - V_A\right)$, whatever the path.`,
          t`So $V_B = V_A + \dfrac{W_{AB}}{q_0}$.`,
        ],
      },
      {
        title: "Charged drops and zero potential",
        points: [
          t`When $N$ equal drops merge, the volume adds: the big drop's radius is $N^{1/3}$ times a small one's.`,
          t`The charge adds too: $Q = Nq$. Then $V = \dfrac{Q}{4\pi\varepsilon_0R}$ at its surface.`,
          t`Between unlike charges $q_1$ and $-q_2$, $V = 0$ where $\dfrac{q_1}{x}$ $= \dfrac{q_2}{d - x}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Charges of $+4\ \mu\mathrm{C}$ and $-2\ \mu\mathrm{C}$ are $0.6\ \mathrm{m}$ apart. Find the potential at the midpoint, and the work to bring a $1\ \mu\mathrm{C}$ charge there from infinity.`,
      steps: [
        t`Each charge is $0.3\ \mathrm{m}$ from the midpoint.`,
        t`$V$ $= 9 \times 10^9 \times \dfrac{4 \times 10^{-6} - 2 \times 10^{-6}}{0.3}$.`,
        t`$V = 6 \times 10^4\ \mathrm{V}$.`,
        t`$W = q_0V$ $= 10^{-6} \times 6 \times 10^4$ $= 0.06\ \mathrm{J}$.`,
      ],
      answer: t`$6 \times 10^4\ \mathrm{V}$; $0.06\ \mathrm{J}$`,
    },
    visualSpec: t`Move a test charge around two charges and read the potential at each point as a height on a landscape of hills and pits.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Forgets the starting potential.",
      remediation: t`$\dfrac{W}{q_0}$ is the potential difference $V_B - V_A$; add it to $V_A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Subtracts the potential difference from the starting potential.",
      remediation: t`Positive work done on a positive charge carries it to a higher potential: $V_B = V_A + \dfrac{W}{q_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Turns $\dfrac{W}{q_0}$ upside down.`,
      remediation: "Potential is work per unit charge: joules divided by coulombs.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Uses $\dfrac{1}{r^2}$, the field's law, for the potential.`,
      remediation: t`The field falls as $\dfrac{1}{r^2}$; the potential, as $\dfrac{1}{r}$: $V = \dfrac{q}{4\pi\varepsilon_0r}$.`,
      fallback: { kind: "ext", topic: "Coulomb's law (Std XI Physics)" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks the potential is zero where the field cancels.",
      remediation: t`Fields cancel as vectors, but potentials are numbers that add: at the ring's centre $V = \dfrac{q}{4\pi\varepsilon_0R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Leaves the distance in cm.",
      remediation: t`With $9 \times 10^9$ in SI units, put $r$ in metres.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Makes the radius grow with the number of drops.",
      remediation: t`Volume adds, not radius: $R^3 = Nr^3$, so $R = N^{1/3}r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Takes the diameter as the radius.",
      remediation: t`A drop of diameter $0.1\ \mathrm{m}$ has radius $0.05\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Keeps one drop's charge for the big drop.",
      remediation: t`Charge is conserved: the big drop carries all $N$ charges, $Q = Nq$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Adds the sizes of the potentials, ignoring the signs of the charges.",
      remediation: t`A negative charge gives a negative potential: add $\dfrac{q_1}{r_1}$ and $\dfrac{q_2}{r_2}$ with their signs.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Uses a coordinate instead of the distance.",
      remediation: t`$r$ is the straight-line distance: from $(0, 6)$ to $(8, 0)$ it is $\sqrt{8^2 + 6^2} = 10\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: t`Takes the potential as proportional to $r$.`,
      remediation: t`Potential falls with distance from the charge: $V \propto \dfrac{1}{r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: t`Takes the potential as proportional to $r^2$.`,
      remediation: t`$V = \dfrac{q}{4\pi\varepsilon_0r}$: it falls as $\dfrac{1}{r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Finds where the field is zero instead of the potential.",
      remediation: t`For zero potential set $\dfrac{q_1}{x}$ $= \dfrac{q_2}{d - x}$, with first powers, not squares.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Measures the distance from the negative charge.",
      remediation: t`The question asks for the distance from the positive charge: $x$, not $d - x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M16",
      mistake: "Takes the midpoint.",
      remediation: "The midpoint has zero potential only for equal and opposite charges; the bigger charge pushes the point away from itself.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.5" },
      stem: t`$120\ \mu\mathrm{J}$ of work is done in carrying a charge of $6\ \mu\mathrm{C}$ from a place at a potential of $10\ \mathrm{V}$ to another place. What is the potential there?`,
      verify: { kind: "value", inputs: { W_uJ: "120", q_uC: "6", VA: "10" }, params: { ask: "vb" } },
      options: [
        { key: "A", text: t`$10.1\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M3", value: "10.1000000000000" },
        { key: "B", text: t`$30\ \mathrm{V}$`, correct: true, value: "30" },
        { key: "C", text: t`$20\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M1", value: "20" },
        { key: "D", text: t`$-10\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M2", value: "-10" },
      ],
      solution: {
        steps: [
          t`$V_B - V_A = \dfrac{W}{q_0}$ $= \dfrac{120 \times 10^{-6}}{6 \times 10^{-6}}$ $= 20\ \mathrm{V}$.`,
          t`$V_B = 10 + 20 = 30\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.6" },
      stem: t`A wire bent into a circle of radius $10\ \mathrm{cm}$ carries $30\ \mu\mathrm{C}$ spread evenly round it. What is the electric potential at the centre? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q_uC: "30", R_cm: "10" }, params: { ask: "ring" } },
      options: [
        { key: "A", text: t`$2.7 \times 10^{7}\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M4", value: "27000000" },
        { key: "B", text: t`$0\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M5", value: "0" },
        { key: "C", text: t`$27000\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M6", value: "27000" },
        { key: "D", text: t`$2.7 \times 10^{6}\ \mathrm{V}$`, correct: true, value: "2700000" },
      ],
      solution: {
        steps: [
          t`Every bit of charge is $0.1\ \mathrm{m}$ from the centre, and potentials add as numbers.`,
          t`$V$ $= \dfrac{9 \times 10^9 \times 30 \times 10^{-6}}{0.1}$ $= 2.7 \times 10^6\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.9" },
      stem: t`$125$ small drops, each of diameter $0.1\ \mathrm{m}$ and carrying $0.5\ \mu\mathrm{C}$, merge into one big drop. What is the potential at its surface? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { N: "125", d: "0.1", q_uC: "0.5" }, params: { ask: "drops" } },
      options: [
        { key: "A", text: t`$2.25 \times 10^{6}\ \mathrm{V}$`, correct: true, value: "2250000" },
        { key: "B", text: t`$90000\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M7", value: "90000" },
        { key: "C", text: t`$1.12 \times 10^{6}\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M8", value: "1120000" },
        { key: "D", text: t`$18000\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M9", value: "18000" },
      ],
      solution: {
        steps: [
          t`$R = 125^{1/3} \times 0.05$ $= 0.25\ \mathrm{m}$, and $Q = 125 \times 0.5$ $= 62.5\ \mu\mathrm{C}$.`,
          t`$V$ $= \dfrac{9 \times 10^9 \times 62.5 \times 10^{-6}}{0.25}$ $= 2.25 \times 10^6\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.11" },
      stem: t`A charge of $6\ \mu\mathrm{C}$ sits at the origin and $-5\ \mu\mathrm{C}$ at $(0, 6)\ \mathrm{m}$. What is the electric potential at $P(8, 0)\ \mathrm{m}$? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q1_uC: "6", q2_uC: "-5", xP: "8", y2: "6" }, params: { ask: "two" } },
      options: [
        { key: "A", text: t`$-750\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M11", value: "-750" },
        { key: "B", text: t`$394\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M4", value: "394" },
        { key: "C", text: t`$2250\ \mathrm{V}$`, correct: true, value: "2250" },
        { key: "D", text: t`$11200\ \mathrm{V}$`, correct: false, misconceptionId: "C05-M10", value: "11200" },
      ],
      solution: {
        steps: [
          t`$r_1 = 8\ \mathrm{m}$ and $r_2 = \sqrt{8^2 + 6^2}$ $= 10\ \mathrm{m}$.`,
          t`$V$ $= 9 \times 10^9\left(\dfrac{6 \times 10^{-6}}{8} - \dfrac{5 \times 10^{-6}}{10}\right)$.`,
          t`$V$ $= 9 \times 10^9 \times 2.5 \times 10^{-7}$ $= 2250\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.1(iv)" },
      stem: t`The electric potential $V$ at a distance $r$ from a point charge is directly proportional to`,
      verify: { kind: "value", inputs: {  }, params: { ask: "prop" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{r}$`, correct: true, value: "inv_r" },
        { key: "B", text: t`$\dfrac{1}{r^2}$`, correct: false, misconceptionId: "C05-M4", value: "inv_r2" },
        { key: "C", text: t`$r$`, correct: false, misconceptionId: "C05-M12", value: "r" },
        { key: "D", text: t`$r^2$`, correct: false, misconceptionId: "C05-M13", value: "r2" },
      ],
      solution: {
        steps: [
          t`$V = \dfrac{q}{4\pi\varepsilon_0r}$, and $\dfrac{q}{4\pi\varepsilon_0}$ is fixed for one charge.`,
          t`So $V \propto \dfrac{1}{r}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.8" },
      stem: t`Charges of $5 \times 10^{-8}\ \mathrm{C}$ and $-3 \times 10^{-8}\ \mathrm{C}$ are $16\ \mathrm{cm}$ apart. How far from the positive charge, on the segment joining them, is the electric potential zero?`,
      verify: { kind: "value", inputs: { q1: "5", q2: "-3", d_cm: "16" }, params: { ask: "zero" } },
      options: [
        { key: "A", text: t`$10\ \mathrm{cm}$`, correct: true, value: "10" },
        { key: "B", text: t`$9.02\ \mathrm{cm}$`, correct: false, misconceptionId: "C05-M14", value: "9.02000000000000" },
        { key: "C", text: t`$6\ \mathrm{cm}$`, correct: false, misconceptionId: "C05-M15", value: "6" },
        { key: "D", text: t`$8\ \mathrm{cm}$`, correct: false, misconceptionId: "C05-M16", value: "8" },
      ],
      solution: {
        steps: [
          t`Let the point be $x$ from the positive charge: $\dfrac{5}{x} = \dfrac{3}{16 - x}$.`,
          t`$80 - 5x = 3x$, so $x = 10\ \mathrm{cm}$.`,
        ],
      },
    },
  ],
};
