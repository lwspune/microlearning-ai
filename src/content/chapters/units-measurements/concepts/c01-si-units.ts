import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`In 1999 a spacecraft bound for Mars was lost because one team worked in pound-force seconds and another in newton seconds. How can a number alone be so dangerous?`,
    reveal: t`Because a measurement is a number **and** a unit. $5$ means nothing until we say $5$ what. Scientists everywhere now use one agreed system of units, the **SI**, so that numbers mean the same thing to everyone.`,
  },
  explanation: {
    intuition: [
      t`Measuring compares a quantity with a fixed standard, its **unit**: $2\ \mathrm{m}$ is twice the metre.`,
      t`Every measured value is a number times a unit, and both are needed.`,
      t`A few quantities are chosen as **base quantities**, with units fixed by agreement.`,
      t`All other units, the **derived units**, are built from the base units.`,
      t`The **SI** system has seven base units; every unit in physics is made from them.`,
    ],
    formal: [
      {
        title: "The seven SI base units",
        points: [
          t`Length: metre ($\mathrm{m}$); mass: kilogram ($\mathrm{kg}$); time: second ($\mathrm{s}$).`,
          t`Electric current: ampere ($\mathrm{A}$); temperature: kelvin ($\mathrm{K}$).`,
          t`Amount of substance: mole ($\mathrm{mol}$); luminous intensity: candela ($\mathrm{cd}$).`,
          t`Multiples of base units, such as the centimetre or the gram, are still units of a base quantity.`,
        ],
      },
      {
        title: "Derived units",
        points: [
          t`A derived unit comes from the formula of its quantity: speed $= \dfrac{\text{distance}}{\text{time}}$, in $\mathrm{m\,s^{-1}}$.`,
          t`Force $= ma$, so $1\ \mathrm{N}$ $= 1\ \mathrm{kg\,m\,s^{-2}}$; energy $= Fd$, so $1\ \mathrm{J}$ $= 1\ \mathrm{kg\,m^2\,s^{-2}}$.`,
          t`To convert units, replace each unit by its value: $1\ \mathrm{km/h}$ $= \dfrac{1000\ \mathrm{m}}{3600\ \mathrm{s}}$.`,
        ],
      },
      {
        title: "Plane and solid angle",
        points: [
          t`A **plane angle** is arc over radius, $\theta = \dfrac{s}{r}$, in **radian** ($\mathrm{rad}$).`,
          t`A **solid angle** is area over radius squared, $\Omega = \dfrac{A}{r^2}$, in **steradian** ($\mathrm{sr}$).`,
          t`A far disc of radius $a$ at distance $d$ subtends $\Omega \approx \dfrac{\pi a^2}{d^2}$; a whole sphere subtends $4\pi\ \mathrm{sr}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The Sun, of diameter $1.39 \times 10^9\ \mathrm{m}$, is $1.5 \times 10^{11}\ \mathrm{m}$ from the Earth. Find the solid angle it subtends at the Earth.`,
      steps: [
        t`The Sun's radius is $a = 6.95 \times 10^8\ \mathrm{m}$.`,
        t`$\Omega = \dfrac{\pi a^2}{d^2}$ $= \dfrac{\pi \times \left(6.95 \times 10^8\right)^2}{\left(1.5 \times 10^{11}\right)^2}$.`,
        t`$\Omega \approx 6.74 \times 10^{-5}\ \mathrm{sr}$.`,
      ],
      answer: t`$6.74 \times 10^{-5}\ \mathrm{sr}$`,
    },
    visualSpec: t`Build a derived unit from base units, then shrink a disc's size against its distance and watch the solid angle it subtends.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks the centimetre is not a unit of a base quantity.",
      remediation: "The centimetre is a fraction of the metre; it measures length, a base quantity.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks the kilogram is derived because of its prefix.",
      remediation: "The kilogram is the SI base unit of mass, prefix and all.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks temperature is not a base quantity.",
      remediation: "Temperature is a base quantity; its SI unit is the kelvin, and degree Celsius measures it too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Uses the diameter as the radius.",
      remediation: t`The disc's area is $\pi a^2$ with $a$ the radius, half the diameter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Leaves out the $\pi$.`,
      remediation: t`A disc's area is $\pi a^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Leaves the diameter in kilometres.",
      remediation: t`Use one unit for both lengths: $3474\ \mathrm{km}$ $= 3.474 \times 10^6\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Confuses solid angle with plane angle.",
      remediation: "A plane angle is arc over radius, in radian; a solid angle is area over radius squared, in steradian.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Gives the degree, a unit of plane angle.",
      remediation: "Degrees and radians measure plane angles; solid angle is in steradian.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Takes a solid angle for an area.",
      remediation: t`$\Omega = \dfrac{A}{r^2}$ is an area divided by a length squared: a pure number, the steradian.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Gives the unit of momentum.",
      remediation: t`Acceleration is in $\mathrm{m\,s^{-2}}$, so force is $\mathrm{kg\,m\,s^{-2}}$; $\mathrm{kg\,m\,s^{-1}}$ is momentum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Gives the unit of energy.",
      remediation: t`$\mathrm{kg\,m^2\,s^{-2}}$ is the joule, force times distance; the newton has one power of the metre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Leaves out the metre.",
      remediation: t`Acceleration has the unit $\mathrm{m\,s^{-2}}$, so force needs the metre: $\mathrm{kg\,m\,s^{-2}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: t`Multiplies by $3.6$ instead of dividing.`,
      remediation: t`$1\ \mathrm{km/h}$ $= \dfrac{1000}{3600}\ \mathrm{m/s}$, so divide by $3.6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Converts the kilometres but not the hours.",
      remediation: t`Both units change: $\dfrac{72 \times 1000\ \mathrm{m}}{3600\ \mathrm{s}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: t`Divides by $60$ instead of $3600$.`,
      remediation: t`An hour is $60 \times 60 = 3600$ seconds.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.1 (v)" },
      stem: t`Which of these is not a fundamental (base) unit?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "notbase" } },
      options: [
        { key: "A", text: t`volt`, correct: true, value: "volt_u" },
        { key: "B", text: t`centimetre`, correct: false, misconceptionId: "C01-M1", value: "cm_u" },
        { key: "C", text: t`kilogram`, correct: false, misconceptionId: "C01-M2", value: "kg_u" },
        { key: "D", text: t`degree Celsius`, correct: false, misconceptionId: "C01-M3", value: "centigrade_u" },
      ],
      solution: {
        steps: [
          t`Centimetre (length), kilogram (mass) and degree Celsius (temperature) all measure base quantities.`,
          t`The volt, the unit of potential difference, is a derived unit.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.1" },
      stem: t`The Moon, of diameter $3474\ \mathrm{km}$, is $3.84 \times 10^8\ \mathrm{m}$ from the Earth. What solid angle does it subtend at the Earth?`,
      verify: { kind: "value", inputs: { D_km: "3474", d_m: "3.84e8" }, params: { ask: "omega" } },
      options: [
        { key: "A", text: t`$6.43 \times 10^{-5}\ \mathrm{sr}$`, correct: true, value: "6.43000000000000e-5" },
        { key: "B", text: t`$2.57 \times 10^{-4}\ \mathrm{sr}$`, correct: false, misconceptionId: "C01-M4", value: "0.000257000000000000" },
        { key: "C", text: t`$2.05 \times 10^{-5}\ \mathrm{sr}$`, correct: false, misconceptionId: "C01-M5", value: "2.05000000000000e-5" },
        { key: "D", text: t`$6.43 \times 10^{-11}\ \mathrm{sr}$`, correct: false, misconceptionId: "C01-M6", value: "6.43000000000000e-11" },
      ],
      solution: {
        steps: [
          t`The radius is $1737\ \mathrm{km}$ $= 1.737 \times 10^6\ \mathrm{m}$.`,
          t`$\Omega$ $= \dfrac{\pi \times \left(1.737 \times 10^6\right)^2}{\left(3.84 \times 10^8\right)^2}$ $\approx 6.43 \times 10^{-5}\ \mathrm{sr}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`What is the SI unit of solid angle?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sr" } },
      options: [
        { key: "A", text: t`The degree`, correct: false, misconceptionId: "C01-M8", value: "degree_u" },
        { key: "B", text: t`The square metre`, correct: false, misconceptionId: "C01-M9", value: "square_metre" },
        { key: "C", text: t`The steradian`, correct: true, value: "steradian" },
        { key: "D", text: t`The radian`, correct: false, misconceptionId: "C01-M7", value: "radian" },
      ],
      solution: {
        steps: [
          t`Solid angle is area over radius squared.`,
          t`Its SI unit is the steradian.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`Force is mass times acceleration. How is the newton written in SI base units?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "newton" } },
      options: [
        { key: "A", text: t`$\mathrm{kg\,m\,s^{-2}}$`, correct: true, value: "kg_m_s2" },
        { key: "B", text: t`$\mathrm{kg\,m\,s^{-1}}$`, correct: false, misconceptionId: "C01-M10", value: "kg_m_s1" },
        { key: "C", text: t`$\mathrm{kg\,m^2\,s^{-2}}$`, correct: false, misconceptionId: "C01-M11", value: "kg_m2_s2" },
        { key: "D", text: t`$\mathrm{kg\,s^{-2}}$`, correct: false, misconceptionId: "C01-M12", value: "kg_s2" },
      ],
      solution: {
        steps: [
          t`$F = ma$, with $m$ in $\mathrm{kg}$ and $a$ in $\mathrm{m\,s^{-2}}$.`,
          t`So $1\ \mathrm{N}$ $= 1\ \mathrm{kg\,m\,s^{-2}}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A car travels at $72\ \mathrm{km/h}$. What is its speed in SI units?`,
      verify: { kind: "value", inputs: { v: "72" }, params: { ask: "kmh" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{m/s}$`, correct: true, value: "20" },
        { key: "B", text: t`$259\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M13", value: "259" },
        { key: "C", text: t`$72000\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M14", value: "72000" },
        { key: "D", text: t`$1200\ \mathrm{m/s}$`, correct: false, misconceptionId: "C01-M15", value: "1200" },
      ],
      solution: {
        steps: [
          t`$72\ \mathrm{km/h}$ $= \dfrac{72 \times 1000\ \mathrm{m}}{3600\ \mathrm{s}}$.`,
          t`$= 20\ \mathrm{m/s}$.`,
        ],
      },
    },
  ],
};
