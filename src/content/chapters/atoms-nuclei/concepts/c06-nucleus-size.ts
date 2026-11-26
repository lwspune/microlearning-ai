import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A uranium nucleus holds more than eight times as many particles as an aluminium nucleus, yet its radius is only about twice as large. How can so many more particles fit in?`,
    reveal: t`Because nucleons pack like marbles in a bag: volume grows in step with the number of particles, so the radius grows only as the cube root, $R = R_0A^{1/3}$. Every nucleus ends up with about the same enormous density.`,
  },
  explanation: {
    intuition: [
      t`A nucleus is made of **nucleons**: $Z$ protons and $N$ neutrons.`,
      t`The **mass number** $A = Z + N$ counts them all; we write the nucleus as $^A_Z\mathrm{X}$.`,
      t`**Isotopes** share $Z$ but differ in $N$; an element's atomic mass averages its isotopes by abundance.`,
      t`Nucleons pack closely, each taking about the same space, so the volume is proportional to $A$.`,
      t`So every nucleus has nearly the same density, about $2.3 \times 10^{17}\ \mathrm{kg/m^3}$.`,
    ],
    formal: [
      {
        title: "Constituents",
        points: [
          t`$^A_Z\mathrm{X}$ has $Z$ protons and $N = A - Z$ neutrons.`,
          t`Masses are measured in **atomic mass units**: $1\ \mathrm{u}$ $= 1.66 \times 10^{-27}\ \mathrm{kg}$, one-twelfth of a $^{12}\mathrm{C}$ atom.`,
          t`An element's atomic mass is the abundance-weighted mean of its isotopes' masses.`,
        ],
      },
      {
        title: "Size and density",
        points: [
          t`Radius $R = R_0A^{1/3}$, with $R_0 = 1.2\ \mathrm{fm}$ ($1\ \mathrm{fm}$ $= 10^{-15}\ \mathrm{m}$).`,
          t`Volume $\dfrac{4}{3}\pi R^3$ $= \dfrac{4}{3}\pi R_0^3A$, proportional to $A$.`,
          t`Density $\rho$ $= \dfrac{m}{\frac{4}{3}\pi R^3}$: the $A$ cancels, so all nuclei have about the same density.`,
          t`Nucleons are held together by the **nuclear force**: strong, short-ranged, and the same between any two nucleons.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the number of neutrons in $^{125}_{52}\mathrm{Te}$ and its nuclear radius. (Take $R_0$ $= 1.2\ \mathrm{fm}$.)`,
      steps: [
        t`$N = A - Z = 125 - 52 = 73$ neutrons.`,
        t`$R = R_0A^{1/3}$ $= 1.2 \times 125^{1/3}$ $= 1.2 \times 5$.`,
        t`$R = 6\ \mathrm{fm}$.`,
      ],
      answer: t`$73$ neutrons; $6\ \mathrm{fm}$`,
    },
    visualSpec: t`Add nucleons one at a time and watch the nucleus grow in volume, its radius creeping up only as the cube root.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Uses $A$ instead of $A^{1/3}$.`,
      remediation: t`Volume, not radius, is proportional to $A$: $R = R_0A^{1/3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Uses $\sqrt{A}$.`,
      remediation: t`Volume $\propto R^3 \propto A$, so $R \propto A^{1/3}$: a cube root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Uses $A^{2/3}$.`,
      remediation: t`$A^{2/3}$ goes with the surface area; the radius goes as $A^{1/3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Leaves out the $\dfrac{4}{3}\pi$.`,
      remediation: t`A sphere's volume is $\dfrac{4}{3}\pi R^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Leaves the mass in u.",
      remediation: t`$1\ \mathrm{u}$ $= 1.66 \times 10^{-27}\ \mathrm{kg}$: convert for a density in $\mathrm{kg/m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Uses $R_0$ as the nucleus's radius.`,
      remediation: t`$R_0 = 1.2\ \mathrm{fm}$ is a constant; the radius is $R_0A^{1/3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Thinks every nucleus has the same radius.",
      remediation: t`$R = R_0A^{1/3}$ grows with $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks every nucleus has the same volume.",
      remediation: t`The volume is proportional to $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks every nucleus has the same mass.",
      remediation: t`The mass is about $A$ times a nucleon's mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Uses the mass numbers in place of the isotopes' masses.",
      remediation: t`Use the measured masses, $24.98584\ \mathrm{u}$ and so on; the small differences matter here.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Splits the remaining abundance equally.",
      remediation: t`Two conditions fix the two unknowns: the abundances add to $100\%$, and the weighted mean is $24.312\ \mathrm{u}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Gives the other isotope's abundance.",
      remediation: t`$^{25}\mathrm{Mg}$ is $9.3\%$; the heavier $^{26}\mathrm{Mg}$ is the rest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Takes the mass number as the number of neutrons.",
      remediation: t`$A$ counts all nucleons; neutrons are $A - Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Takes the atomic number as the number of neutrons.",
      remediation: t`$Z$ counts protons; neutrons are $A - Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Adds $A$ and $Z$.`,
      remediation: t`$A = Z + N$, so $N = A - Z$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.5" },
      stem: t`What is the radius of a $^{70}\mathrm{Ge}$ nucleus? (Take $R_0 = 1.2\ \mathrm{fm}$.)`,
      verify: { kind: "value", inputs: { A: "70" }, params: { ask: "R" } },
      options: [
        { key: "A", text: t`$84\ \mathrm{fm}$`, correct: false, misconceptionId: "C06-M1", value: "84" },
        { key: "B", text: t`$10\ \mathrm{fm}$`, correct: false, misconceptionId: "C06-M2", value: "10" },
        { key: "C", text: t`$20.4\ \mathrm{fm}$`, correct: false, misconceptionId: "C06-M3", value: "20.4000000000000" },
        { key: "D", text: t`$4.95\ \mathrm{fm}$`, correct: true, value: "4.95000000000000" },
      ],
      solution: {
        steps: [
          t`$R = R_0A^{1/3}$ $= 1.2 \times 70^{1/3}$ $\approx 1.2 \times 4.12$.`,
          t`$R \approx 4.95\ \mathrm{fm}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Solved Ex.15.5" },
      stem: t`A $^{70}\mathrm{Ge}$ nucleus has a mass of $69.924\ \mathrm{u}$. What is its density? (Take $R_0$ $= 1.2\ \mathrm{fm}$, $1\ \mathrm{u} = 1.66 \times 10^{-27}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: { A: "70", m_u: "69.924" }, params: { ask: "rho" } },
      options: [
        { key: "A", text: t`$2.29 \times 10^{17}\ \mathrm{kg/m^3}$`, correct: true, value: "229000000000000000" },
        { key: "B", text: t`$9.6 \times 10^{17}\ \mathrm{kg/m^3}$`, correct: false, misconceptionId: "C06-M4", value: "960000000000000000" },
        { key: "C", text: t`$1.38 \times 10^{44}\ \mathrm{kg/m^3}$`, correct: false, misconceptionId: "C06-M5", value: "137999999999999994743282986184708973588905984" },
        { key: "D", text: t`$1.6 \times 10^{19}\ \mathrm{kg/m^3}$`, correct: false, misconceptionId: "C06-M6", value: "16000000000000000000" },
      ],
      solution: {
        steps: [
          t`$m$ $= 69.924 \times 1.66 \times 10^{-27}$ $\approx 1.161 \times 10^{-25}\ \mathrm{kg}$; $R \approx 4.95 \times 10^{-15}\ \mathrm{m}$.`,
          t`$V$ $= \dfrac{4}{3}\pi R^3 \approx 5.07 \times 10^{-43}\ \mathrm{m^3}$.`,
          t`$\rho$ $= \dfrac{m}{V} \approx 2.29 \times 10^{17}\ \mathrm{kg/m^3}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.1 (iv)" },
      stem: t`Which property of a nucleus does not depend on its mass number?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "indep" } },
      options: [
        { key: "A", text: t`Its density`, correct: true, value: "density_n" },
        { key: "B", text: t`Its radius`, correct: false, misconceptionId: "C06-M7", value: "radius_n" },
        { key: "C", text: t`Its volume`, correct: false, misconceptionId: "C06-M8", value: "volume_n" },
        { key: "D", text: t`Its mass`, correct: false, misconceptionId: "C06-M9", value: "mass_n" },
      ],
      solution: {
        steps: [
          t`Radius, volume and mass all grow with $A$.`,
          t`$\rho$ $= \dfrac{Am_n}{\frac{4}{3}\pi R_0^3A}$: $A$ cancels, so the density does not depend on $A$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.24" },
      stem: t`Magnesium's average atomic mass is $24.312\ \mathrm{u}$. Its isotopes are $^{24}\mathrm{Mg}$ ($23.98504\ \mathrm{u}$, $78.99\%$), $^{25}\mathrm{Mg}$ ($24.98584\ \mathrm{u}$) and $^{26}\mathrm{Mg}$ ($25.98259\ \mathrm{u}$). What is the abundance of $^{26}\mathrm{Mg}$?`,
      verify: { kind: "value", inputs: { a1: "78.99", m1: "23.98504", m2: "24.98584", m3: "25.98259", M: "24.312", A1: "24", A2: "25", A3: "26" }, params: { ask: "abund" } },
      options: [
        { key: "A", text: t`$9.3\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M12", value: "9.30000000000000" },
        { key: "B", text: t`$11.7\ \mathrm{\%}$`, correct: true, value: "11.7000000000000" },
        { key: "C", text: t`$10.2\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M10", value: "10.2000000000000" },
        { key: "D", text: t`$10.5\ \mathrm{\%}$`, correct: false, misconceptionId: "C06-M11", value: "10.5000000000000" },
      ],
      solution: {
        steps: [
          t`Let the fractions be $x$ for $^{25}\mathrm{Mg}$ and $y$ for $^{26}\mathrm{Mg}$: $x + y = 0.2101$.`,
          t`$0.7899 \times 23.98504 + 24.98584x + 25.98259y$ $= 24.312$.`,
          t`Solving, $y \approx 0.117$: $^{26}\mathrm{Mg}$ is about $11.7\%$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`How many neutrons are there in a $^{238}_{92}\mathrm{U}$ nucleus?`,
      verify: { kind: "value", inputs: { A: "238", Z: "92" }, params: { ask: "neutrons" } },
      options: [
        { key: "A", text: t`$146$`, correct: true, value: "146" },
        { key: "B", text: t`$238$`, correct: false, misconceptionId: "C06-M13", value: "238" },
        { key: "C", text: t`$92$`, correct: false, misconceptionId: "C06-M14", value: "92" },
        { key: "D", text: t`$330$`, correct: false, misconceptionId: "C06-M15", value: "330" },
      ],
      solution: {
        steps: [
          t`$A = 238$ nucleons, of which $Z = 92$ are protons.`,
          t`$N = 238 - 92 = 146$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`What is the ratio of the radius of a nucleus of mass number $216$ to that of a nucleus of mass number $27$?`,
      verify: { kind: "value", inputs: { A1: "27", A2: "216" }, params: { ask: "Rratio" } },
      options: [
        { key: "A", text: t`$2.83$`, correct: false, misconceptionId: "C06-M2", value: "2.83000000000000" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C06-M3", value: "4" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C06-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`$\dfrac{R_2}{R_1}$ $= \left(\dfrac{216}{27}\right)^{1/3}$ $= 8^{1/3}$.`,
          t`$= 2$.`,
        ],
      },
    },
  ],
};
