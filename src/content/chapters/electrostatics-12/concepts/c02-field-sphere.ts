import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Sitting inside a metal car during a lightning storm is safe, even when lightning strikes the car. Why does no field reach you?`,
    reveal: t`The charge on a conductor sits on its outer surface, and by Gauss' law the field inside a closed conducting shell is zero. Outside, a charged sphere acts as if all its charge were at its centre.`,
  },
  explanation: {
    intuition: [
      t`Charge given to a conductor spreads out over its outer surface.`,
      t`For a charged sphere, symmetry makes the field point straight out and be the same all round at any distance.`,
      t`So a spherical Gaussian surface through the point gives $E$ directly.`,
      t`Outside, the surface encloses all the charge; inside, it encloses none.`,
    ],
    formal: [
      {
        title: "Outside the sphere",
        points: [
          t`Take a concentric Gaussian sphere of radius $r > R$ through the point.`,
          t`Gauss' law: $E \times 4\pi r^2$ $= \dfrac{q}{\varepsilon_0}$.`,
          t`So $E$ $= \dfrac{q}{4\pi\varepsilon_0r^2}$, as if the charge sat at the centre; $r$ is measured from the centre.`,
          t`In a medium of dielectric constant $K$, $E$ $= \dfrac{q}{4\pi\varepsilon_0Kr^2}$.`,
        ],
      },
      {
        title: "At the surface and inside",
        points: [
          t`At the surface, $r = R$: $E$ $= \dfrac{q}{4\pi\varepsilon_0R^2}$.`,
          t`With $q = 4\pi R^2\sigma$, this is $E = \dfrac{\sigma}{\varepsilon_0}$; outside, $E$ $= \dfrac{\sigma}{\varepsilon_0}\left(\dfrac{R}{r}\right)^2$.`,
          t`Inside, $r < R$, a Gaussian sphere encloses no charge, so $E = 0$.`,
          t`So a hollow conductor shields its inside from outside charges: **electrostatic shielding**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A conducting sphere of radius $20\ \mathrm{cm}$ carries $3\ \mu\mathrm{C}$. Find the field at its surface and $60\ \mathrm{cm}$ from its centre.`,
      steps: [
        t`At the surface: $E$ $= \dfrac{9 \times 10^9 \times 3 \times 10^{-6}}{0.2^2}$.`,
        t`$E = 6.75 \times 10^5\ \mathrm{N/C}$.`,
        t`At $60\ \mathrm{cm}$, three times as far, $E$ is $\dfrac{1}{9}$ as much: $7.5 \times 10^4\ \mathrm{N/C}$.`,
      ],
      answer: t`$6.75 \times 10^5\ \mathrm{N/C}$ at the surface; $7.5 \times 10^4\ \mathrm{N/C}$ at $60\ \mathrm{cm}$`,
    },
    visualSpec: t`Move a test point from inside a charged sphere outwards and plot E: zero inside, a jump at the surface, then falling as 1/r².`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Measures the distance from the surface instead of the centre.",
      remediation: t`Outside, the sphere acts as if its charge were at the centre: $r$ is from the centre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Uses $\dfrac{1}{r}$ instead of $\dfrac{1}{r^2}$.`,
      remediation: t`$E \times 4\pi r^2$ $= \dfrac{q}{\varepsilon_0}$: the field falls as $\dfrac{1}{r^2}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Leaves the distances in cm.",
      remediation: t`With $\dfrac{1}{4\pi\varepsilon_0}$ in SI units, put $r$ in metres: $30\ \mathrm{cm} = 0.3\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Uses $\dfrac{kq}{r^2}$ at a point inside the conductor.`,
      remediation: t`A Gaussian sphere inside encloses no charge, since the charge sits on the surface: $E = 0$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Treats the conductor as a solid with charge spread through it.",
      remediation: t`On a conductor the charge moves to the outer surface; nothing is left inside, so $E = 0$ there.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Takes the surface value of the field inside.",
      remediation: t`The field jumps from $0$ just inside to $\dfrac{\sigma}{\varepsilon_0}$ at the surface.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Turns $\dfrac{R}{r}$ upside down.`,
      remediation: t`The field falls with distance: $E$ $= \dfrac{\sigma}{\varepsilon_0}\left(\dfrac{R}{r}\right)^2$, smaller as $r$ grows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Squares $r$ twice when putting $q = 4\pi R^2\sigma$ into the formula.`,
      remediation: t`$E$ $= \dfrac{4\pi R^2\sigma}{4\pi\epsilon r^2}$ $= \dfrac{\sigma}{\epsilon}\dfrac{R^2}{r^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Turns both $\dfrac{\sigma}{\epsilon}$ and $\dfrac{R}{r}$ upside down.`,
      remediation: t`Charge makes the field, so $\sigma$ is on top: $E$ $= \dfrac{\sigma}{\epsilon}\left(\dfrac{R}{r}\right)^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: t`Uses the sheet's $\dfrac{\sigma}{2\varepsilon_0}$.`,
      remediation: t`Next to a conductor all the field is on the outside: $E = \dfrac{\sigma}{\varepsilon_0}$, twice an isolated sheet's.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: t`Uses $k\sigma$.`,
      remediation: t`From $E$ $= \dfrac{q}{4\pi\varepsilon_0R^2}$ and $q = 4\pi R^2\sigma$, the $4\pi$ cancels: $E = \dfrac{\sigma}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Stops at the flux, forgetting to divide by the area.",
      remediation: t`$\dfrac{q}{\varepsilon_0}$ is the flux; divide by $4\pi R^2$ for the field.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M13",
      mistake: "Multiplies by the dielectric constant instead of dividing.",
      remediation: t`A dielectric weakens the field: $E$ $= \dfrac{q}{4\pi\varepsilon_0Kr^2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.1" },
      stem: t`A conducting sphere of radius $10\ \mathrm{cm}$ carries a charge of $2\ \mu\mathrm{C}$. What is the electric field $30\ \mathrm{cm}$ from its centre? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q_uC: "2", R_cm: "10", r_cm: "30" }, params: { ask: "out" } },
      options: [
        { key: "A", text: t`$2 \times 10^{5}\ \mathrm{N/C}$`, correct: true, value: "200000" },
        { key: "B", text: t`$4.5 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M1", value: "450000" },
        { key: "C", text: t`$60000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M2", value: "60000" },
        { key: "D", text: t`$20\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M3", value: "20" },
      ],
      solution: {
        steps: [
          t`$E$ $= \dfrac{q}{4\pi\varepsilon_0r^2}$ $= \dfrac{9 \times 10^9 \times 2 \times 10^{-6}}{0.3^2}$.`,
          t`$E = 2 \times 10^5\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Solved Ex.8.1" },
      stem: t`A conducting sphere of radius $10\ \mathrm{cm}$ carries a charge of $1\ \mu\mathrm{C}$. What is the electric field $5\ \mathrm{cm}$ from its centre?`,
      verify: { kind: "value", inputs: { q_uC: "1", R_cm: "10", r_cm: "5" }, params: { ask: "in" } },
      options: [
        { key: "A", text: t`$3.6 \times 10^{6}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M4", value: "3600000" },
        { key: "B", text: t`$4.5 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M5", value: "450000" },
        { key: "C", text: t`$9 \times 10^{5}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M6", value: "900000" },
        { key: "D", text: t`$0\ \mathrm{N/C}$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`$5\ \mathrm{cm}$ from the centre is inside the conductor.`,
          t`A Gaussian sphere there encloses no charge, all of which is on the surface: $E = 0$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.3" },
      stem: t`A conducting sphere of radius $R$ with surface charge density $\sigma$ sits in a medium of permittivity $\epsilon$. What is the electric field at a distance $r$ from its centre, outside it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sigma" } },
      options: [
        { key: "A", text: t`$\dfrac{\epsilon}{\sigma}\left(\dfrac{r}{R}\right)^2$`, correct: false, misconceptionId: "C02-M9", value: "eps_over_sigma" },
        { key: "B", text: t`$\dfrac{\sigma}{\epsilon}\left(\dfrac{R}{r}\right)^2$`, correct: true, value: "R_over_r" },
        { key: "C", text: t`$\dfrac{\sigma}{\epsilon}\left(\dfrac{r}{R}\right)^2$`, correct: false, misconceptionId: "C02-M7", value: "r_over_R" },
        { key: "D", text: t`$\dfrac{\sigma}{\epsilon}\left(\dfrac{R}{r^2}\right)^2$`, correct: false, misconceptionId: "C02-M8", value: "R_over_r2" },
      ],
      solution: {
        steps: [
          t`$q = 4\pi R^2\sigma$, and outside $E = \dfrac{q}{4\pi\epsilon r^2}$.`,
          t`$E$ $= \dfrac{4\pi R^2\sigma}{4\pi\epsilon r^2}$ $= \dfrac{\sigma}{\epsilon}\left(\dfrac{R}{r}\right)^2$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`A conducting sphere of radius $10\ \mathrm{cm}$ has a surface charge density of $8.85 \times 10^{-7}\ \mathrm{C/m^2}$. What is the electric field just outside its surface? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { sigma: "8.85e-7", R_cm: "10" }, params: { ask: "surf" } },
      options: [
        { key: "A", text: t`$12600\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M12", value: "12600" },
        { key: "B", text: t`$1 \times 10^{5}\ \mathrm{N/C}$`, correct: true, value: "100000" },
        { key: "C", text: t`$50000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M10", value: "50000" },
        { key: "D", text: t`$7960\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M11", value: "7960" },
      ],
      solution: {
        steps: [
          t`Just outside a conductor, $E = \dfrac{\sigma}{\varepsilon_0}$.`,
          t`$E$ $= \dfrac{8.85 \times 10^{-7}}{8.85 \times 10^{-12}}$ $= 1 \times 10^5\ \mathrm{N/C}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.6(iii)" },
      stem: t`A conducting sphere of radius $10\ \mathrm{cm}$ carrying $6\ \mu\mathrm{C}$ is placed in oil of dielectric constant $3$. What is the electric field $20\ \mathrm{cm}$ from its centre? (Take $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\ \mathrm{N\,m^2/C^2}$.)`,
      verify: { kind: "value", inputs: { q_uC: "6", R_cm: "10", r_cm: "20", K: "3" }, params: { ask: "out" } },
      options: [
        { key: "A", text: t`$1.8 \times 10^{6}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M1", value: "1800000" },
        { key: "B", text: t`$4.5 \times 10^{5}\ \mathrm{N/C}$`, correct: true, value: "450000" },
        { key: "C", text: t`$4.05 \times 10^{6}\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M13", value: "4050000" },
        { key: "D", text: t`$90000\ \mathrm{N/C}$`, correct: false, misconceptionId: "C02-M2", value: "90000" },
      ],
      solution: {
        steps: [
          t`$E$ $= \dfrac{q}{4\pi\varepsilon_0Kr^2}$ $= \dfrac{9 \times 10^9 \times 6 \times 10^{-6}}{3 \times 0.2^2}$.`,
          t`$E = 4.5 \times 10^5\ \mathrm{N/C}$.`,
        ],
      },
    },
  ],
};
