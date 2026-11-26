import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`How big is a hydrogen atom? Bohr's rules give a definite answer: in its lowest orbit the electron circles at about $0.053\ \mathrm{nm}$, moving at more than two million metres a second. Where do such numbers come from?`,
    reveal: t`From combining the force balance with the quantised angular momentum. Together they fix each orbit's radius, $r_n \propto n^2$, and speed, $v_n \propto \dfrac{1}{n}$.`,
  },
  explanation: {
    intuition: [
      t`Two conditions hold in every Bohr orbit: the Coulomb force supplies the centripetal force, and $mvr = \dfrac{nh}{2\pi}$.`,
      t`Solving them together gives one allowed radius and one speed for each $n$.`,
      t`Higher orbits are much bigger: the radius grows as $n^2$.`,
      t`Higher orbits are slower: the speed falls as $\dfrac{1}{n}$.`,
      t`A heavier nuclear charge $Z$ pulls the orbits in: $r \propto \dfrac{1}{Z}$.`,
    ],
    formal: [
      {
        title: "Radius of the nth orbit",
        points: [
          t`From $\dfrac{mv^2}{r}$ $= \dfrac{e^2}{4\pi\varepsilon_0r^2}$ and $mvr = \dfrac{nh}{2\pi}$: $r_n$ $= \dfrac{\varepsilon_0h^2n^2}{\pi me^2}$.`,
          t`So $r_n = a_0n^2$, with the **Bohr radius** $a_0 = 0.053\ \mathrm{nm}$.`,
          t`For a nucleus of charge $Ze$ with one electron, $r_n = \dfrac{a_0n^2}{Z}$.`,
        ],
      },
      {
        title: "Speed and revolutions",
        points: [
          t`$v_n$ $= \dfrac{e^2}{2\varepsilon_0nh}$: in the first orbit about $2.18 \times 10^6\ \mathrm{m/s}$, falling as $\dfrac{1}{n}$.`,
          t`Period $T = \dfrac{2\pi r}{v}$; frequency of revolution $f = \dfrac{v}{2\pi r}$ $\propto \dfrac{1}{n^3}$.`,
          t`Revolutions in a time $t$: $N = ft$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the radius of the second Bohr orbit of hydrogen and the electron's speed in it. (Take $a_0$ $= 0.053\ \mathrm{nm}$ and the first-orbit speed $2.18 \times 10^6\ \mathrm{m/s}$.)`,
      steps: [
        t`$r_2 = a_0 \times 2^2$ $= 4 \times 0.053$ $= 0.212\ \mathrm{nm}$.`,
        t`$v_2 = \dfrac{v_1}{2}$ $= \dfrac{2.18 \times 10^6}{2}$ $= 1.09 \times 10^6\ \mathrm{m/s}$.`,
      ],
      answer: t`$0.212\ \mathrm{nm}$; $1.09 \times 10^6\ \mathrm{m/s}$`,
    },
    visualSpec: t`Step the quantum number up and watch the orbit swell as n² while the electron slows as 1/n.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Takes the radius as proportional to $n$.`,
      remediation: t`$r_n = a_0n^2$: the third orbit is $9$ times the first, not $3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes the radius as proportional to $\dfrac{1}{n^2}$.`,
      remediation: t`That is how the energy's size goes; the radius grows: $r_n = a_0n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Takes $a_0$ as $0.53\ \mathrm{nm}$.`,
      remediation: t`$a_0 = 0.53\ \mathring{A}$ $= 0.053\ \mathrm{nm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Divides by $Z^2$.`,
      remediation: t`$r_n = \dfrac{a_0n^2}{Z}$; it is the energy that goes as $Z^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Multiplies by $Z$.`,
      remediation: t`A larger nuclear charge pulls the electron in: $r \propto \dfrac{1}{Z}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Ignores the nuclear charge.",
      remediation: t`$\mathrm{He^+}$ has $Z = 2$, which halves the radius: $r_1 = \dfrac{a_0}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Squares the ratio of the squares.",
      remediation: t`$\dfrac{r_8}{r_4}$ $= \dfrac{8^2}{4^2}$ $= 4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Forgets the $2\pi$.`,
      remediation: t`One revolution is a distance $2\pi r$: $T = \dfrac{2\pi r}{v}$, $f = \dfrac{v}{2\pi r}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: t`Leaves the radius in $\mathring{A}$.`,
      remediation: t`$1\ \mathring{A}$ $= 10^{-10}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Gives the frequency instead of the period.",
      remediation: t`The period is the time for one turn, $\dfrac{2\pi r}{v}$; its inverse is the frequency.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Uses the first orbit's frequency.",
      remediation: t`The electron is in the second orbit: $f_2 = \dfrac{f_1}{2^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: t`Takes $f$ as proportional to $\dfrac{1}{n^2}$.`,
      remediation: t`$f = \dfrac{v}{2\pi r}$ with $v \propto \dfrac{1}{n}$ and $r \propto n^2$: $f \propto \dfrac{1}{n^3}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.1" },
      stem: t`The radius of the first Bohr orbit of hydrogen is $0.053\ \mathrm{nm}$. What is the radius of its third orbit?`,
      verify: { kind: "value", inputs: { n: "3" }, params: { ask: "rn" } },
      options: [
        { key: "A", text: t`$0.00589\ \mathrm{nm}$`, correct: false, misconceptionId: "C03-M2", value: "0.00589000000000000" },
        { key: "B", text: t`$4.77\ \mathrm{nm}$`, correct: false, misconceptionId: "C03-M3", value: "4.77000000000000" },
        { key: "C", text: t`$0.477\ \mathrm{nm}$`, correct: true, value: "0.477000000000000" },
        { key: "D", text: t`$0.159\ \mathrm{nm}$`, correct: false, misconceptionId: "C03-M1", value: "0.159000000000000" },
      ],
      solution: {
        steps: [
          t`$r_n = a_0n^2$.`,
          t`$r_3 = 9 \times 0.053$ $= 0.477\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.1 (i)" },
      stem: t`The first Bohr orbit of hydrogen has radius $0.053\ \mathrm{nm}$. What is the radius of the first orbit of singly ionized helium, $\mathrm{He^+}$ ($Z = 2$)?`,
      verify: { kind: "value", inputs: { Z: "2" }, params: { ask: "rZ" } },
      options: [
        { key: "A", text: t`$0.106\ \mathrm{nm}$`, correct: false, misconceptionId: "C03-M5", value: "0.106000000000000" },
        { key: "B", text: t`$0.053\ \mathrm{nm}$`, correct: false, misconceptionId: "C03-M6", value: "0.0530000000000000" },
        { key: "C", text: t`$0.0265\ \mathrm{nm}$`, correct: true, value: "0.0265000000000000" },
        { key: "D", text: t`$0.0132\ \mathrm{nm}$`, correct: false, misconceptionId: "C03-M4", value: "0.0132000000000000" },
      ],
      solution: {
        steps: [
          t`For one electron round charge $Ze$, $r_1 = \dfrac{a_0}{Z}$.`,
          t`$r_1 = \dfrac{0.053}{2}$ $= 0.0265\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.1 (ii)" },
      stem: t`By what factor is the radius of the $8^{\text{th}}$ Bohr orbit larger than that of the $4^{\text{th}}$?`,
      verify: { kind: "value", inputs: { n1: "4", n2: "8" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C03-M1", value: "2" },
        { key: "B", text: t`$0.25$`, correct: false, misconceptionId: "C03-M2", value: "0.250000000000000" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C03-M7", value: "16" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`$r_n \propto n^2$, so $\dfrac{r_8}{r_4} = \dfrac{64}{16}$.`,
          t`$= 4$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.6(v)" },
      stem: t`The electron in a hydrogen atom moves at $2.3 \times 10^6\ \mathrm{m/s}$ in an orbit of radius $0.53\ \mathring{A}$. What is its period of revolution?`,
      verify: { kind: "value", inputs: { v: "2.3e6", r_A: "0.53" }, params: { ask: "T" } },
      options: [
        { key: "A", text: t`$1.45 \times 10^{-6}\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M9", value: "1.45000000000000e-6" },
        { key: "B", text: t`$6.91 \times 10^{15}\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M10", value: "6910000000000000" },
        { key: "C", text: t`$1.45 \times 10^{-16}\ \mathrm{s}$`, correct: true, value: "1.45000000000000e-16" },
        { key: "D", text: t`$2.3 \times 10^{-17}\ \mathrm{s}$`, correct: false, misconceptionId: "C03-M8", value: "2.30000000000000e-17" },
      ],
      solution: {
        steps: [
          t`$r$ $= 0.53 \times 10^{-10}\ \mathrm{m}$.`,
          t`$T = \dfrac{2\pi r}{v}$ $= \dfrac{2\pi \times 0.53 \times 10^{-10}}{2.3 \times 10^6}$ $\approx 1.45 \times 10^{-16}\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.11" },
      stem: t`An electron in a hydrogen atom stays in its second orbit for $10^{-8}\ \mathrm{s}$. How many revolutions does it make? (Take $h$ $= 6.63 \times 10^{-34}\ \mathrm{J\,s}$, $e = 1.6 \times 10^{-19}\ \mathrm{C}$, $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$, $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { n: "2", t: "1e-8" }, params: { ask: "revs" } },
      options: [
        { key: "A", text: t`$8.16 \times 10^{6}$`, correct: true, value: "8160000" },
        { key: "B", text: t`$5.13 \times 10^{7}$`, correct: false, misconceptionId: "C03-M8", value: "51300000" },
        { key: "C", text: t`$6.53 \times 10^{7}$`, correct: false, misconceptionId: "C03-M11", value: "65300000" },
        { key: "D", text: t`$1.63 \times 10^{7}$`, correct: false, misconceptionId: "C03-M12", value: "16300000" },
      ],
      solution: {
        steps: [
          t`$f_n$ $= \dfrac{me^4}{4\varepsilon_0^2h^3n^3}$; for $n = 1$ this is about $6.53 \times 10^{15}\ \mathrm{Hz}$.`,
          t`For $n = 2$, $f_2$ $= \dfrac{f_1}{8} \approx 8.16 \times 10^{14}\ \mathrm{Hz}$.`,
          t`$N = f_2t$ $= 8.16 \times 10^{14} \times 10^{-8}$ $\approx 8.16 \times 10^6$.`,
        ],
      },
    },
  ],
};
