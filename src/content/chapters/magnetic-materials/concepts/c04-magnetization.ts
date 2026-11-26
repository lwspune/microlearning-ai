import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Slide an iron rod into a solenoid and the field inside jumps hundreds of times stronger, though the current has not changed. Where does the extra field come from?`,
    reveal: t`From the iron itself. Its atomic dipoles line up with the field and add their own: the iron is **magnetized**, and $B = \mu_0\left(H + M\right)$.`,
  },
  explanation: {
    intuition: [
      t`The current in a winding sets up a **magnetic intensity** $H$, whatever fills the winding.`,
      t`A material in that field lines up its atomic dipoles, gaining a net moment: its **magnetization** $M$.`,
      t`The field inside, $B$, comes from both the current and the material.`,
      t`The **susceptibility** $\chi$ says how readily a material is magnetized.`,
    ],
    formal: [
      {
        title: "Magnetization and intensity",
        points: [
          t`**Magnetization** is the net magnetic moment per unit volume: $M = \dfrac{m_{net}}{V}$, in $\mathrm{A/m}$.`,
          t`**Magnetic intensity** $H = \dfrac{B_0}{\mu_0}$, where $B_0$ is the field with no material; also in $\mathrm{A/m}$.`,
          t`The field inside the material: $B = \mu_0\left(H + M\right)$.`,
        ],
      },
      {
        title: "Susceptibility and permeability",
        points: [
          t`**Susceptibility** $\chi = \dfrac{M}{H}$, a pure number.`,
          t`Then $B = \mu_0\left(1 + \chi\right)H$ $= \mu H$, with **permeability** $\mu$ $= \mu_0\left(1 + \chi\right)$.`,
          t`**Relative permeability** $\mu_r = \dfrac{\mu}{\mu_0}$ $= 1 + \chi$, also a pure number.`,
          t`Filling a winding raises the field by the fraction $\dfrac{B - B_0}{B_0} = \chi$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A magnetising field of $1000\ \mathrm{A/m}$ produces a field of $0.5\ \mathrm{T}$ in a material. Find its relative permeability and susceptibility. (Take $\mu_0$ $= 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      steps: [
        t`$\mu = \dfrac{B}{H}$ $= \dfrac{0.5}{1000}$ $= 5 \times 10^{-4}\ \mathrm{T\,m/A}$.`,
        t`$\mu_r = \dfrac{\mu}{\mu_0}$ $= \dfrac{5 \times 10^{-4}}{4\pi \times 10^{-7}}$ $\approx 398$.`,
        t`$\chi = \mu_r - 1 \approx 397$.`,
      ],
      answer: t`$\mu_r \approx 398$, $\chi \approx 397$`,
    },
    visualSpec: t`Push a rod into a current-carrying coil and watch its atomic dipoles line up and add to the field.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Forgets $H$ in $B = \mu_0\left(H + M\right)$.`,
      remediation: t`The field inside comes from the current as well as the material: add $H$ to $M$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Leaves the volume in $\mathrm{cm^3}$.`,
      remediation: t`$1\ \mathrm{cm^3}$ $= 10^{-6}\ \mathrm{m^3}$: convert before finding $M = \dfrac{m}{V}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Forgets $\mu_0$.`,
      remediation: t`$H$ and $M$ are in $\mathrm{A/m}$; multiply by $\mu_0$ to get $B$ in tesla.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Gives $\mu$ instead of $\mu_r$.`,
      remediation: t`$\mu_r = \dfrac{\mu}{\mu_0}$: divide the permeability by $\mu_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Turns $\dfrac{B}{H}$ upside down.`,
      remediation: t`$B = \mu H$, so $\mu = \dfrac{B}{H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Leaves the area in $\mathrm{cm^2}$.`,
      remediation: t`$1\ \mathrm{cm^2}$ $= 10^{-4}\ \mathrm{m^2}$: convert before finding $B = \dfrac{\phi}{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: t`Mixes up $\mu_r$ and $\chi$.`,
      remediation: t`$\mu_r = 1 + \chi$: the rise in the field is $\chi$, and $\mu_r$ is one more than $\chi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Gives the fraction, not the percentage.",
      remediation: t`Multiply the fractional rise $\chi$ by $100$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: t`Multiplies $\chi$ by $\mu_0$.`,
      remediation: t`$\chi$ is a pure number and is itself the fractional rise: $\dfrac{B - B_0}{B_0} = \chi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: t`Multiplies $B$ by $H$.`,
      remediation: t`$B = \mu H$, so divide: $\mu = \dfrac{B}{H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Gives the relative permeability instead of the permeability.",
      remediation: t`$\mu = \dfrac{B}{H}$ in $\mathrm{T\,m/A}$; dividing by $\mu_0$ again gives $\mu_r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Gives the unit of magnetic moment.",
      remediation: t`Magnetization is moment per volume: $\dfrac{\mathrm{A\,m^2}}{\mathrm{m^3}}$ $= \mathrm{A/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Gives the unit of the magnetic field.",
      remediation: t`$M$ is measured like $H$, in $\mathrm{A/m}$; only $\mu_0\left(H + M\right)$ is in tesla.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks magnetization has no unit, like susceptibility.",
      remediation: t`$\chi = \dfrac{M}{H}$ is a pure number because $M$ and $H$ share the unit $\mathrm{A/m}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.3" },
      stem: t`A plate of magnetic material, $10\ \mathrm{cm} \times 0.5\ \mathrm{cm} \times 0.2\ \mathrm{cm}$, is placed in a magnetising field of $5 \times 10^3\ \mathrm{A/m}$ and acquires a magnetic moment of $0.5\ \mathrm{A\,m^2}$. What is the magnetic induction in the plate? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { l_cm: "10", b_cm: "0.5", t_cm: "0.2", H: "5000", m: "0.5" }, params: { ask: "B" } },
      options: [
        { key: "A", text: t`$0.00628\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M2", value: "0.00628000000000000" },
        { key: "B", text: t`$5.05 \times 10^{5}\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M3", value: "505000" },
        { key: "C", text: t`$0.635\ \mathrm{T}$`, correct: true, value: "0.635000000000000" },
        { key: "D", text: t`$0.628\ \mathrm{T}$`, correct: false, misconceptionId: "C04-M1", value: "0.628000000000000" },
      ],
      solution: {
        steps: [
          t`$V = 0.1 \times 0.005 \times 0.002$ $= 10^{-6}\ \mathrm{m^3}$, so $M = \dfrac{0.5}{10^{-6}}$ $= 5 \times 10^5\ \mathrm{A/m}$.`,
          t`$B = \mu_0\left(H + M\right)$ $= 4\pi \times 10^{-7} \times 5.05 \times 10^5$.`,
          t`$B \approx 0.635\ \mathrm{T}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.4" },
      stem: t`A rod of magnetic material of cross-section $0.25\ \mathrm{cm^2}$ is placed in a magnetising field of $4000\ \mathrm{A/m}$. The flux through it is $25 \times 10^{-6}\ \mathrm{Wb}$. What is its relative permeability? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { A_cm2: "0.25", H: "4000", phi: "25e-6" }, params: { ask: "mur" } },
      options: [
        { key: "A", text: t`$0.00025$`, correct: false, misconceptionId: "C04-M4", value: "0.000250000000000000" },
        { key: "B", text: t`$0.0199$`, correct: false, misconceptionId: "C04-M6", value: "0.0199000000000000" },
        { key: "C", text: t`$198$`, correct: false, misconceptionId: "C04-M7", value: "198" },
        { key: "D", text: t`$199$`, correct: true, value: "199" },
      ],
      solution: {
        steps: [
          t`$B = \dfrac{\phi}{A}$ $= \dfrac{25 \times 10^{-6}}{0.25 \times 10^{-4}}$ $= 1\ \mathrm{T}$.`,
          t`$\mu = \dfrac{B}{H}$ $= \dfrac{1}{4000}$ $= 2.5 \times 10^{-4}\ \mathrm{T\,m/A}$.`,
          t`$\mu_r$ $= \dfrac{2.5 \times 10^{-4}}{4\pi \times 10^{-7}}$ $\approx 199$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.23" },
      stem: t`A current-carrying toroid is filled with lithium, of susceptibility $2.1 \times 10^{-5}$. By what percentage does the field inside rise, compared with the empty toroid? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { chi: "2.1e-5" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`$2.1 \times 10^{-5}\ \mathrm{\%}$`, correct: false, misconceptionId: "C04-M8", value: "2.10000000000000e-5" },
        { key: "B", text: t`$2.64 \times 10^{-9}\ \mathrm{\%}$`, correct: false, misconceptionId: "C04-M9", value: "2.64000000000000e-9" },
        { key: "C", text: t`$0.0021\ \mathrm{\%}$`, correct: true, value: "0.00210000000000000" },
        { key: "D", text: t`$100\ \mathrm{\%}$`, correct: false, misconceptionId: "C04-M7", value: "100" },
      ],
      solution: {
        steps: [
          t`$H$ is the same with or without lithium, so $\dfrac{B - B_0}{B_0}$ $= \dfrac{\mu - \mu_0}{\mu_0}$ $= \chi$.`,
          t`Percentage rise $= 2.1 \times 10^{-5} \times 100$ $= 0.0021\%$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.1 (v)" },
      stem: t`A magnetising field of $360\ \mathrm{A/m}$ produces a flux density of $0.6\ \mathrm{T}$ in a ferromagnetic material. What is its permeability? (Take $\mu_0 = 4\pi \times 10^{-7}\ \mathrm{T\,m/A}$.)`,
      verify: { kind: "value", inputs: { B: "0.6", H: "360" }, params: { ask: "mu" } },
      options: [
        { key: "A", text: t`$600\ \mathrm{T\,m/A}$`, correct: false, misconceptionId: "C04-M5", value: "600" },
        { key: "B", text: t`$216\ \mathrm{T\,m/A}$`, correct: false, misconceptionId: "C04-M10", value: "216" },
        { key: "C", text: t`$1330\ \mathrm{T\,m/A}$`, correct: false, misconceptionId: "C04-M11", value: "1330" },
        { key: "D", text: t`$0.00167\ \mathrm{T\,m/A}$`, correct: true, value: "0.00167000000000000" },
      ],
      solution: {
        steps: [
          t`$\mu = \dfrac{B}{H}$ $= \dfrac{0.6}{360}$.`,
          t`$\mu$ $= \dfrac{1}{600} \approx 1.67 \times 10^{-3}\ \mathrm{T\,m/A}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.6(iv)" },
      stem: t`What is the SI unit of magnetization?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unit" } },
      options: [
        { key: "A", text: t`It has no unit`, correct: false, misconceptionId: "C04-M14", value: "none" },
        { key: "B", text: t`$\mathrm{A/m}$`, correct: true, value: "A_per_m" },
        { key: "C", text: t`$\mathrm{A\,m^2}$`, correct: false, misconceptionId: "C04-M12", value: "A_m2" },
        { key: "D", text: t`$\mathrm{T}$`, correct: false, misconceptionId: "C04-M13", value: "tesla" },
      ],
      solution: {
        steps: [
          t`$M = \dfrac{m_{net}}{V}$: moment in $\mathrm{A\,m^2}$ over volume in $\mathrm{m^3}$.`,
          t`So $M$ is in $\mathrm{A/m}$.`,
        ],
      },
    },
  ],
};
