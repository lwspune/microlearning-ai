import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`It takes exactly $13.6\ \mathrm{eV}$ to pull the electron out of a hydrogen atom, never a little more or less. Why such a sharp, fixed number?`,
    reveal: t`Because the electron's energy in each Bohr orbit is fixed: $E_n$ $= -\dfrac{13.6}{n^2}\ \mathrm{eV}$. From the ground state, $n = 1$, it must be raised by $13.6\ \mathrm{eV}$ to reach $E = 0$ and escape.`,
  },
  explanation: {
    intuition: [
      t`An electron's total energy is kinetic plus potential: the kinetic part is positive, the potential part negative and twice as large.`,
      t`So its total energy is negative: it is bound to the nucleus.`,
      t`In Bohr's orbits the energy can take only the values $E_n$ $= -\dfrac{13.6}{n^2}\ \mathrm{eV}$.`,
      t`Higher orbits have energies closer to zero; at $E = 0$ the electron is free.`,
      t`The lowest level, $n = 1$, is the **ground state**; the rest are **excited states**.`,
    ],
    formal: [
      {
        title: "Energy in the nth orbit",
        points: [
          t`Kinetic energy $K = \dfrac{1}{2}mv^2$ $= \dfrac{e^2}{8\pi\varepsilon_0r}$; potential energy $U$ $= -\dfrac{e^2}{4\pi\varepsilon_0r}$ $= -2K$.`,
          t`Total $E = K + U = -K$ $= -\dfrac{me^4}{8\varepsilon_0^2h^2n^2}$ $= -\dfrac{13.6}{n^2}\ \mathrm{eV}$.`,
          t`$E_1 = -13.6$, $E_2 = -3.4$, $E_3 = -1.51\ \mathrm{eV}$; the levels crowd together towards $E = 0$.`,
        ],
      },
      {
        title: "Excitation and ionization",
        points: [
          t`**Excitation energy** of orbit $n$: $E_n - E_1$, the energy to lift the electron from the ground state to it.`,
          t`The first excited state is $n = 2$ ($10.2\ \mathrm{eV}$); the second is $n = 3$.`,
          t`**Ionization energy**: the least energy to free the electron from the ground state, $13.6\ \mathrm{eV}$ for hydrogen.`,
          t`**Binding energy** of the atom: the same $13.6\ \mathrm{eV}$; from orbit $n$, freeing the electron takes $\dfrac{13.6}{n^2}\ \mathrm{eV}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For the electron of hydrogen in the fourth orbit, find its energy, its excitation energy and the energy needed to ionize it from there.`,
      steps: [
        t`$E_4 = -\dfrac{13.6}{16}$ $= -0.85\ \mathrm{eV}$.`,
        t`Excitation energy $= E_4 - E_1$ $= -0.85 - \left(-13.6\right)$ $= 12.75\ \mathrm{eV}$.`,
        t`To ionize from $n = 4$: raise $E$ from $-0.85$ to $0$, so $0.85\ \mathrm{eV}$.`,
      ],
      answer: t`$-0.85\ \mathrm{eV}$; $12.75\ \mathrm{eV}$; $0.85\ \mathrm{eV}$`,
    },
    visualSpec: t`Lift the electron up the ladder of levels and watch the rungs crowd together as they approach zero energy.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Takes the energy as proportional to $\dfrac{1}{n}$.`,
      remediation: t`$E_n = -\dfrac{13.6}{n^2}$: from $n = 2$ to $3$ it scales by $\dfrac{4}{9}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Drops the minus sign.",
      remediation: t`A bound electron has negative energy; $E_3 = -1.51\ \mathrm{eV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Takes the energy as proportional to $n^2$.`,
      remediation: t`It is the radius that grows as $n^2$; the energy goes as $-\dfrac{1}{n^2}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: "Gives the level's own energy as its excitation energy.",
      remediation: t`Excitation energy is a difference: $E_n - E_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Adds the sizes of the two energies.",
      remediation: t`$E_3 - E_1$ $= -1.51 - \left(-13.6\right)$ $= 12.09\ \mathrm{eV}$: subtract, with signs.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Takes the second excited state as $n = 2$.`,
      remediation: t`The ground state is $n = 1$, so the first excited state is $n = 2$ and the second $n = 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Gives the binding energy a minus sign.",
      remediation: t`The binding energy is the energy needed to free the electron, a positive $13.6\ \mathrm{eV}$; $-13.6\ \mathrm{eV}$ is its total energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Gives the first excitation energy.",
      remediation: t`$10.2\ \mathrm{eV}$ only lifts the electron to $n = 2$; freeing it takes $13.6\ \mathrm{eV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks it is zero, the energy of a free electron.",
      remediation: t`The free electron has $E = 0$; the binding energy is how much must be added to get there: $13.6\ \mathrm{eV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Uses the ground state.",
      remediation: t`The electron starts in $n = 2$, at $-3.4\ \mathrm{eV}$; only $3.4\ \mathrm{eV}$ is needed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Gives the excitation energy instead.",
      remediation: t`Ionizing from $n = 2$ raises $E$ from $-3.4$ to $0$; $10.2\ \mathrm{eV}$ is the step from $n = 1$ to $n = 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Multiplies by $n^2$.`,
      remediation: t`$E_n = -\dfrac{13.6}{n^2}$: divide by $n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Takes the kinetic energy equal to the total energy.",
      remediation: t`$K$ is always positive; $E = -K$, so $K = +1.51\ \mathrm{eV}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Gives the size of the potential energy.",
      remediation: t`$U = 2E = -3.02\ \mathrm{eV}$; the kinetic energy is $-E$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Halves the energy.",
      remediation: t`$E = K + U = K - 2K = -K$: $K$ is the whole of $-E$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.14" },
      stem: t`The energy of an electron in the second Bohr orbit of hydrogen is $-3.4\ \mathrm{eV}$. What is its energy in the third orbit?`,
      verify: { kind: "value", inputs: { E1: "-3.4", n1: "2", n2: "3" }, params: { ask: "En_from" } },
      options: [
        { key: "A", text: t`$1.51\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M2", value: "1.51000000000000" },
        { key: "B", text: t`$-7.65\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M3", value: "-7.65000000000000" },
        { key: "C", text: t`$-1.51\ \mathrm{eV}$`, correct: true, value: "-1.51000000000000" },
        { key: "D", text: t`$-2.27\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M1", value: "-2.27000000000000" },
      ],
      solution: {
        steps: [
          t`$E_n \propto \dfrac{1}{n^2}$, so $E_3 = E_2 \times \dfrac{2^2}{3^2}$.`,
          t`$E_3$ $= -3.4 \times \dfrac{4}{9} \approx -1.51\ \mathrm{eV}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.3" },
      stem: t`What is the excitation energy of the second excited state of the electron in a hydrogen atom? (Take $E_n = -\dfrac{13.6}{n^2}\ \mathrm{eV}$.)`,
      verify: { kind: "value", inputs: { k: "2" }, params: { ask: "excite" } },
      options: [
        { key: "A", text: t`$1.51\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M4", value: "1.51000000000000" },
        { key: "B", text: t`$15.1\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M5", value: "15.1000000000000" },
        { key: "C", text: t`$10.2\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M6", value: "10.2000000000000" },
        { key: "D", text: t`$12.1\ \mathrm{eV}$`, correct: true, value: "12.1000000000000" },
      ],
      solution: {
        steps: [
          t`The second excited state is $n = 3$: $E_3 = -1.51\ \mathrm{eV}$.`,
          t`Excitation energy $= -1.51 - \left(-13.6\right)$ $\approx 12.1\ \mathrm{eV}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.2(v)" },
      stem: t`What is the binding energy of a hydrogen atom in its ground state?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "binding" } },
      options: [
        { key: "A", text: t`$10.2\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M8", value: "ten_point_2" },
        { key: "B", text: t`$0\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M9", value: "zero_BE" },
        { key: "C", text: t`$13.6\ \mathrm{eV}$`, correct: true, value: "plus_13_6" },
        { key: "D", text: t`$-13.6\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M7", value: "minus_13_6" },
      ],
      solution: {
        steps: [
          t`In the ground state $E_1 = -13.6\ \mathrm{eV}$.`,
          t`Freeing the electron raises its energy to $0$, so the binding energy is $13.6\ \mathrm{eV}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.2 (iv)" },
      stem: t`The electron of a hydrogen atom is in the second orbit. How much energy will set it free from the atom? (Take $E_n = -\dfrac{13.6}{n^2}\ \mathrm{eV}$.)`,
      verify: { kind: "value", inputs: { n: "2" }, params: { ask: "ionize" } },
      options: [
        { key: "A", text: t`$13.6\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M10", value: "13.6000000000000" },
        { key: "B", text: t`$10.2\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M11", value: "10.2000000000000" },
        { key: "C", text: t`$54.4\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M12", value: "54.4000000000000" },
        { key: "D", text: t`$3.4\ \mathrm{eV}$`, correct: true, value: "3.40000000000000" },
      ],
      solution: {
        steps: [
          t`$E_2 = -\dfrac{13.6}{4}$ $= -3.4\ \mathrm{eV}$.`,
          t`Raising it to $0$ takes $3.4\ \mathrm{eV}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`The total energy of an electron in a Bohr orbit is $-1.51\ \mathrm{eV}$. What is its kinetic energy?`,
      verify: { kind: "value", inputs: { E: "-1.51" }, params: { ask: "KE" } },
      options: [
        { key: "A", text: t`$0.755\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M15", value: "0.755000000000000" },
        { key: "B", text: t`$1.51\ \mathrm{eV}$`, correct: true, value: "1.51000000000000" },
        { key: "C", text: t`$-1.51\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M13", value: "-1.51000000000000" },
        { key: "D", text: t`$3.02\ \mathrm{eV}$`, correct: false, misconceptionId: "C04-M14", value: "3.02000000000000" },
      ],
      solution: {
        steps: [
          t`In a Bohr orbit $U = -2K$, so $E = K + U = -K$.`,
          t`$K = -E = 1.51\ \mathrm{eV}$.`,
        ],
      },
    },
  ],
};
