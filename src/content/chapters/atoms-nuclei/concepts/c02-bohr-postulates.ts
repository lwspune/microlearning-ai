import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`By the laws of electromagnetism, an electron circling a nucleus should radiate, lose energy and crash into it in a split second. Yet hydrogen atoms last for ever. How did Bohr rescue the atom?`,
    reveal: t`By making bold rules. He postulated that only certain orbits are allowed, those with angular momentum $\dfrac{nh}{2\pi}$, that an electron in one does not radiate, and that light is given out only when it jumps between them.`,
  },
  explanation: {
    intuition: [
      t`Rutherford's orbiting electron should radiate and spiral in; real atoms are stable.`,
      t`Bohr kept the orbits but allowed only some of them: **stationary orbits**.`,
      t`In a stationary orbit the electron radiates nothing, so it keeps its energy.`,
      t`The allowed orbits are those where the angular momentum is a whole number times $\dfrac{h}{2\pi}$.`,
      t`Light is emitted only when the electron jumps from one allowed orbit down to another.`,
    ],
    formal: [
      {
        title: "Bohr's three postulates",
        points: [
          t`**1.** The electron moves in a circle round the nucleus; the Coulomb attraction is the centripetal force: $\dfrac{mv^2}{r}$ $= \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$.`,
          t`**2.** Only orbits with angular momentum $L = mvr = \dfrac{nh}{2\pi}$ are allowed, $n = 1, 2, 3, \dots$; in them it does not radiate.`,
          t`**3.** A jump from energy $E_m$ to a lower $E_n$ emits one photon: $h\nu = E_m - E_n$.`,
        ],
      },
      {
        title: "Using the postulates",
        points: [
          t`$n$ is the **principal quantum number**: $L$ comes only in steps of $\dfrac{h}{2\pi}$.`,
          t`A jump from orbit $m$ to orbit $n$ changes $L$ by $\left(m - n\right)\dfrac{h}{2\pi}$.`,
          t`The photon's frequency depends on the difference of the two energies: $\nu = \dfrac{E_m - E_n}{h}$.`,
          t`Absorbing a photon of exactly that energy lifts the electron back up.`,
        ],
      },
    ],
    worked: {
      prompt: t`An electron in hydrogen drops from the fifth orbit, energy $-0.544\ \mathrm{eV}$, to the second, energy $-3.4\ \mathrm{eV}$. Find the change in its angular momentum and the energy of the photon. (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$.)`,
      steps: [
        t`$\Delta L$ $= \left(5 - 2\right)\dfrac{h}{2\pi}$ $= \dfrac{3 \times 6.63 \times 10^{-34}}{2\pi}$ $\approx 3.17 \times 10^{-34}\ \mathrm{J\,s}$.`,
        t`$h\nu = E_5 - E_2$ $= -0.544 - \left(-3.4\right)$ $= 2.856\ \mathrm{eV}$.`,
      ],
      answer: t`$\Delta L \approx 3.17 \times 10^{-34}\ \mathrm{J\,s}$; photon $2.856\ \mathrm{eV}$`,
    },
    visualSpec: t`Let an electron sit in one allowed orbit without radiating, then make it jump down and watch a single photon leave.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Forgets the $2\pi$.`,
      remediation: t`$L = \dfrac{nh}{2\pi}$: each step is $\dfrac{h}{2\pi} \approx 1.055 \times 10^{-34}\ \mathrm{J\,s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Gives one orbit's angular momentum, not the change.",
      remediation: t`The change is $L_3 - L_1$ $= \left(3 - 1\right)\dfrac{h}{2\pi}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Takes $L$ as proportional to $n^2$.`,
      remediation: t`$L = \dfrac{nh}{2\pi}$ is proportional to $n$; it is the radius that goes as $n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Gives the second postulate for the third.",
      remediation: t`The second fixes the allowed orbits; the third, $h\nu = E_m - E_n$, gives the light emitted.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Adds the two energies.",
      remediation: t`The photon carries the difference: $h\nu = E_m - E_n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Leaves the energies in eV.",
      remediation: t`$1\ \mathrm{eV}$ $= 1.6 \times 10^{-19}\ \mathrm{J}$: convert before dividing by $h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Gives the first postulate for the third.",
      remediation: t`The first is the force balance in an orbit; the third is about jumps: $h\nu = E_m - E_n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Keeps the classical idea that the electron radiates and spirals in.",
      remediation: "That was the trouble with Rutherford's model; Bohr postulated that stationary orbits do not radiate.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks it radiates at its frequency of revolution.",
      remediation: t`In a stationary orbit nothing is radiated; light comes only from a jump, at $\nu = \dfrac{E_m - E_n}{h}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks any angular momentum is allowed.",
      remediation: t`Only whole multiples of $\dfrac{h}{2\pi}$ are allowed: $L$ is quantised.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: t`Divides by $n$ instead of multiplying.`,
      remediation: t`$L = \dfrac{nh}{2\pi}$ grows with $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Uses one level's energy, not the difference.",
      remediation: t`The photon carries away the drop in energy: $E_m - E_n$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.1(viii)" },
      stem: t`In a hydrogen atom, the electron jumps from the third orbit to the first. By how much does its angular momentum change? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$.)`,
      verify: { kind: "value", inputs: { n1: "3", n2: "1" }, params: { ask: "dL" } },
      options: [
        { key: "A", text: t`$2.11 \times 10^{-34}\ \mathrm{J\,s}$`, correct: true, value: "2.11000000000000e-34" },
        { key: "B", text: t`$1.33 \times 10^{-33}\ \mathrm{J\,s}$`, correct: false, misconceptionId: "C02-M1", value: "1.33000000000000e-33" },
        { key: "C", text: t`$3.17 \times 10^{-34}\ \mathrm{J\,s}$`, correct: false, misconceptionId: "C02-M2", value: "3.17000000000000e-34" },
        { key: "D", text: t`$8.44 \times 10^{-34}\ \mathrm{J\,s}$`, correct: false, misconceptionId: "C02-M3", value: "8.44000000000000e-34" },
      ],
      solution: {
        steps: [
          t`$L = \dfrac{nh}{2\pi}$, so $\Delta L$ $= \left(3 - 1\right)\dfrac{h}{2\pi}$ $= \dfrac{h}{\pi}$.`,
          t`$\Delta L$ $= \dfrac{6.63 \times 10^{-34}}{\pi}$ $\approx 2.11 \times 10^{-34}\ \mathrm{J\,s}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.2(vi)" },
      stem: t`Which formula expresses the third postulate of Bohr's atomic model?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "third" } },
      options: [
        { key: "A", text: t`$mvr = \dfrac{nh}{2\pi}$`, correct: false, misconceptionId: "C02-M4", value: "L_quant" },
        { key: "B", text: t`$h\nu = E_m + E_n$`, correct: false, misconceptionId: "C02-M5", value: "hnu_sum" },
        { key: "C", text: t`$\dfrac{mv^2}{r} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$`, correct: false, misconceptionId: "C02-M7", value: "force_bal" },
        { key: "D", text: t`$h\nu = E_m - E_n$`, correct: true, value: "hnu_diff" },
      ],
      solution: {
        steps: [
          t`The third postulate is about a jump between orbits.`,
          t`The energy lost goes into one photon: $h\nu = E_m - E_n$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.2 (i)" },
      stem: t`According to Bohr, what does an electron do while it moves in one of its allowed orbits?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "orbit" } },
      options: [
        { key: "A", text: t`It can have any angular momentum it likes`, correct: false, misconceptionId: "C02-M10", value: "any_L" },
        { key: "B", text: t`It radiates no energy`, correct: true, value: "no_radiation" },
        { key: "C", text: t`It radiates energy and slowly spirals into the nucleus`, correct: false, misconceptionId: "C02-M8", value: "spirals_in" },
        { key: "D", text: t`It radiates light at its frequency of revolution`, correct: false, misconceptionId: "C02-M9", value: "radiates_f" },
      ],
      solution: {
        steps: [
          t`Bohr postulated that the allowed orbits are stationary states.`,
          t`In them the electron radiates no energy; it radiates only on jumping to a lower orbit.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`What is the angular momentum of the electron in the fourth Bohr orbit of hydrogen? (Take $h = 6.63 \times 10^{-34}\ \mathrm{J\,s}$.)`,
      verify: { kind: "value", inputs: { n: "4" }, params: { ask: "L" } },
      options: [
        { key: "A", text: t`$2.64 \times 10^{-35}\ \mathrm{J\,s}$`, correct: false, misconceptionId: "C02-M11", value: "2.64000000000000e-35" },
        { key: "B", text: t`$4.22 \times 10^{-34}\ \mathrm{J\,s}$`, correct: true, value: "4.22000000000000e-34" },
        { key: "C", text: t`$2.65 \times 10^{-33}\ \mathrm{J\,s}$`, correct: false, misconceptionId: "C02-M1", value: "2.65000000000000e-33" },
        { key: "D", text: t`$1.69 \times 10^{-33}\ \mathrm{J\,s}$`, correct: false, misconceptionId: "C02-M3", value: "1.69000000000000e-33" },
      ],
      solution: {
        steps: [
          t`$L = \dfrac{nh}{2\pi}$ $= \dfrac{4 \times 6.63 \times 10^{-34}}{2\pi}$.`,
          t`$L \approx 4.22 \times 10^{-34}\ \mathrm{J\,s}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`The electron in a hydrogen atom drops from a level of energy $-1.51\ \mathrm{eV}$ to one of $-3.4\ \mathrm{eV}$. What is the frequency of the photon emitted? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $1\ \mathrm{eV} = 1.6 \times 10^{-19}\ \mathrm{J}$.)`,
      verify: { kind: "value", inputs: { Em: "-1.51", En: "-3.4" }, params: { ask: "nu" } },
      options: [
        { key: "A", text: t`$8.21 \times 10^{14}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M12", value: "821000000000000" },
        { key: "B", text: t`$4.56 \times 10^{14}\ \mathrm{Hz}$`, correct: true, value: "456000000000000" },
        { key: "C", text: t`$1.18 \times 10^{15}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M5", value: "1180000000000000" },
        { key: "D", text: t`$2.85 \times 10^{33}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C02-M6", value: "2849999999999999873712445928243200" },
      ],
      solution: {
        steps: [
          t`$h\nu = -1.51 - \left(-3.4\right)$ $= 1.89\ \mathrm{eV}$ $= 1.89 \times 1.6 \times 10^{-19}\ \mathrm{J}$.`,
          t`$\nu$ $= \dfrac{3.02 \times 10^{-19}}{6.63 \times 10^{-34}}$ $\approx 4.56 \times 10^{14}\ \mathrm{Hz}$.`,
        ],
      },
    },
  ],
};
