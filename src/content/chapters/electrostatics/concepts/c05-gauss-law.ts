import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A charge sits inside a balloon. Blow the balloon up to twice its radius. Do more lines of force now pass out through its skin?`,
    reveal: t`No. Every line from the charge crosses the skin once, whatever its size. The total **flux** out of a closed surface depends only on the charge inside: $\dfrac{q}{\varepsilon_0}$.`,
  },
  explanation: {
    intuition: [
      t`Picture the lines of force of a field passing through a surface, like rain through a window.`,
      t`**Electric flux** measures how much field passes through the surface.`,
      t`More flux passes when the field is stronger, the area larger, or the surface faces the field squarely.`,
      t`A surface turned edge-on to the field lets no flux through.`,
      t`For a closed surface, the total flux out counts only the charge enclosed.`,
    ],
    formal: [
      {
        title: "Electric flux",
        points: [
          t`A flat area $A$ is a vector $\vec{A}$, of size $A$, along the **normal**, the line perpendicular to the surface.`,
          t`In a uniform field the flux through it is $\phi = \vec{E}\cdot\vec{A}$ $= EA\cos\theta$.`,
          t`$\theta$ is the angle between $\vec{E}$ and the normal, not the surface itself.`,
          t`Facing the field, $\theta = 0^\circ$ and $\phi = EA$; edge-on, $\theta = 90^\circ$ and $\phi = 0$.`,
          t`Flux is a scalar, in $\mathrm{N\,m^2/C}$, the same as $\mathrm{V\,m}$.`,
        ],
      },
      {
        title: "Gauss' law",
        points: [
          t`**Gauss' law**: the total flux out of a closed surface is $\phi = \dfrac{q}{\varepsilon_0}$.`,
          t`Here $q$ is the net charge enclosed by the surface.`,
          t`A charge outside sends in as many lines as it sends out, so it adds nothing to the total.`,
          t`For $q$ at the centre of a sphere of radius $r$: $\phi = E \times 4\pi r^2$ $= \dfrac{q}{4\pi\varepsilon_0 r^2} \times 4\pi r^2$ $= \dfrac{q}{\varepsilon_0}$.`,
          t`The $r^2$ cancels: the flux is the same through every closed surface round the charge, whatever its size or shape.`,
        ],
      },
      {
        title: "Continuous charge distribution",
        points: [
          t`Charge spread over a body is treated as many small pieces, each a point charge.`,
          t`Along a line of length $l$: **linear charge density** $\lambda = \dfrac{q}{l}$, in $\mathrm{C/m}$.`,
          t`Over an area $A$: **surface charge density** $\sigma = \dfrac{q}{A}$, in $\mathrm{C/m^2}$.`,
          t`Through a volume $V$: **volume charge density** $\rho = \dfrac{q}{V}$, in $\mathrm{C/m^3}$.`,
          t`The field of the body is the vector sum of the fields of all its pieces.`,
        ],
      },
    ],
    worked: {
      prompt: t`A charge of $5.0\ \mathrm{C}$ is at the centre of a sphere of radius $1\ \mathrm{m}$. Find the flux through the sphere. How does it change if the radius is doubled? (Take $\dfrac{1}{4\pi\varepsilon_0}$ $= 9 \times 10^{9}\ \mathrm{N\,m^2/C^2}$.)`,
      steps: [
        t`On the sphere $E$ $= 9 \times 10^{9} \times \dfrac{5.0}{1^2}$ $= 4.5 \times 10^{10}\ \mathrm{N/C}$, along the normal everywhere.`,
        t`$\phi = E \times 4\pi r^2$ $= 4.5 \times 10^{10} \times 4\pi$ $\approx 5.65 \times 10^{11}\ \mathrm{N\,m^2/C}$.`,
        t`Doubling $r$ makes $E$ a quarter and the area four times, so $\phi$ is unchanged, as Gauss' law $\dfrac{q}{\varepsilon_0}$ says.`,
      ],
      answer: t`$5.65 \times 10^{11}\ \mathrm{N\,m^2/C}$, unchanged when the radius is doubled`,
    },
    visualSpec: t`Tilt a square in a uniform field and watch the number of lines crossing it fall as $\cos\theta$; grow a sphere round a charge and watch the count stay fixed.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks flux grows with the area of the sphere.",
      remediation: t`The field falls as $\dfrac{1}{r^2}$ while the area grows as $r^2$: the flux $\dfrac{q}{\varepsilon_0}$ does not change.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks flux grows with the radius.",
      remediation: t`By Gauss' law the flux through any closed surface round the charge is $\dfrac{q}{\varepsilon_0}$, whatever its size.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks flux follows the field strength.",
      remediation: "The field is weaker on the bigger sphere, but its area is larger in the same ratio: the flux is the same.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: "Takes the angle from the surface, not from its normal.",
      remediation: t`In $\phi = EA\cos\theta$, $\theta$ is the angle between $\vec{E}$ and the normal to the surface.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Ignores the angle between the field and the normal.",
      remediation: t`Only the part of the field along the normal passes through: $\phi = EA\cos\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Leaves the length in centimetre.",
      remediation: t`Convert to metre before finding the area: $10\ \mathrm{cm} = 0.1\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: t`Multiplies the charge by $\varepsilon_0$.`,
      remediation: t`Gauss' law divides: $\phi = \dfrac{q}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: t`Uses $\dfrac{q}{4\pi\varepsilon_0}$ for the flux.`,
      remediation: t`$\dfrac{q}{4\pi\varepsilon_0 r^2}$ is the field; times the area $4\pi r^2$ it gives the flux $\dfrac{q}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Multiplies the field at one face by the whole area.",
      remediation: t`The field varies over a cube's surface; Gauss' law gives the total directly: $\dfrac{q}{\varepsilon_0}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M10",
      mistake: "Counts a charge outside the surface.",
      remediation: "Only the enclosed charge counts: an outside charge's lines enter and leave, adding no net flux.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: t`Gives $\lambda$ in $\mathrm{C/m^2}$.`,
      remediation: t`$\lambda = \dfrac{q}{l}$ is charge per unit length, so its unit is $\mathrm{C/m}$; $\mathrm{C/m^2}$ is for $\sigma$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: t`Gives $\lambda$ in $\mathrm{C/m^3}$.`,
      remediation: t`$\mathrm{C/m^3}$ is for the volume density $\rho$; $\lambda = \dfrac{q}{l}$ is in $\mathrm{C/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Multiplies charge by length.",
      remediation: t`A density divides the charge by the length: $\lambda = \dfrac{q}{l}$, in $\mathrm{C/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: t`Uses $\pi R^2$ for the area of a sphere.`,
      remediation: t`The surface area of a sphere is $4\pi R^2$; $\pi R^2$ is the area of a circle.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Divides by the volume of the sphere.",
      remediation: t`The charge is on the surface, so divide by the area $4\pi R^2$: $\sigma = \dfrac{q}{4\pi R^2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.1 (iii)" },
      stem: t`A charge of $+7\ \mu\mathrm{C}$ is placed at the centre of two concentric spheres of radii $2.0\ \mathrm{cm}$ and $4.0\ \mathrm{cm}$. What is the ratio of the flux through the smaller sphere to the flux through the larger one?`,
      verify: { kind: "value", inputs: { r1: "2", r2: "4" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C05-M3", value: "4" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C05-M1", value: "1/4" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C05-M2", value: "1/2" },
      ],
      solution: {
        steps: [
          t`By Gauss' law the flux through each sphere is $\dfrac{q}{\varepsilon_0}$, the same charge enclosed.`,
          t`So the ratio is $1 : 1$, that is $1$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`A charge of $2\ \mu\mathrm{C}$ sits at the centre of a cube of side $10\ \mathrm{cm}$. What is the total electric flux out of the cube? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { q: "2e-6", a: "10" }, params: { ask: "cube" } },
      options: [
        { key: "A", text: t`$1.77 \times 10^{-17}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M7", value: "1.77000000000000e-17" },
        { key: "B", text: t`$18000\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M8", value: "18000" },
        { key: "C", text: t`$4.32 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M9", value: "432000" },
        { key: "D", text: t`$2.26 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: true, value: "226000" },
      ],
      solution: {
        steps: [
          t`The cube is a closed surface enclosing $2\ \mu\mathrm{C}$.`,
          t`$\phi = \dfrac{q}{\varepsilon_0}$ $= \dfrac{2 \times 10^{-6}}{8.85 \times 10^{-12}}$ $\approx 2.26 \times 10^{5}\ \mathrm{N\,m^2/C}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`A closed surface encloses a charge of $+3\ \mu\mathrm{C}$. A charge of $+5\ \mu\mathrm{C}$ lies just outside it. What is the total electric flux out of the surface? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { qin: "3e-6", qout: "5e-6" }, params: { ask: "inside" } },
      options: [
        { key: "A", text: t`$3.39 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: true, value: "339000" },
        { key: "B", text: t`$2.66 \times 10^{-17}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M7", value: "2.66000000000000e-17" },
        { key: "C", text: t`$27000\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M8", value: "27000" },
        { key: "D", text: t`$9.04 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M10", value: "904000" },
      ],
      solution: {
        steps: [
          t`Only the enclosed $3\ \mu\mathrm{C}$ counts; the outside charge adds no net flux.`,
          t`$\phi$ $= \dfrac{3 \times 10^{-6}}{8.85 \times 10^{-12}}$ $\approx 3.39 \times 10^{5}\ \mathrm{N\,m^2/C}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.3 (iv)" },
      stem: t`A uniform electric field of $5.0\ \mathrm{kN/C}$ points along the Z axis. What is the flux through a square of side $10.0\ \mathrm{cm}$ whose normal makes $60^\circ$ with the Z axis?`,
      verify: { kind: "value", inputs: { E: "5000", s: "10", theta: "60" }, params: { ask: "tilt" } },
      options: [
        { key: "A", text: t`$50\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M5", value: "50" },
        { key: "B", text: t`$2.5 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M6", value: "250000" },
        { key: "C", text: t`$25\ \mathrm{N\,m^2/C}$`, correct: true, value: "25" },
        { key: "D", text: t`$43.3\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C05-M4", value: "43.3000000000000" },
      ],
      solution: {
        steps: [
          t`$A = (0.1)^2$ $= 10^{-2}\ \mathrm{m^2}$, and $\theta = 60^\circ$ is the angle between $\vec{E}$ and the normal.`,
          t`$\phi = EA\cos\theta$ $= 5000 \times 10^{-2} \times 0.5$ $= 25\ \mathrm{N\,m^2/C}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.2 (vii)" },
      stem: t`What is the SI unit of linear charge density $\lambda$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lambda_unit" } },
      options: [
        { key: "A", text: t`$\mathrm{C/m}$, charge per unit length`, correct: true, value: "C_per_m" },
        { key: "B", text: t`$\mathrm{C/m^2}$, charge per unit area`, correct: false, misconceptionId: "C05-M11", value: "C_per_m2" },
        { key: "C", text: t`$\mathrm{C/m^3}$, charge per unit volume`, correct: false, misconceptionId: "C05-M12", value: "C_per_m3" },
        { key: "D", text: t`$\mathrm{C\,m}$, charge times length`, correct: false, misconceptionId: "C05-M13", value: "C_times_m" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{q}{l}$, charge per unit length.`,
          t`So its unit is coulomb per metre, $\mathrm{C/m}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`A charge of $5\ \mu\mathrm{C}$ is spread uniformly over the surface of a sphere of radius $20\ \mathrm{cm}$. What is the surface charge density?`,
      verify: { kind: "value", inputs: { q: "5e-6", R: "20" }, params: { ask: "sigma" } },
      options: [
        { key: "A", text: t`$9.95 \times 10^{-6}\ \mathrm{C/m^2}$`, correct: true, value: "9.95000000000000e-6" },
        { key: "B", text: t`$9.95 \times 10^{-10}\ \mathrm{C/m^2}$`, correct: false, misconceptionId: "C05-M6", value: "9.95000000000000e-10" },
        { key: "C", text: t`$3.98 \times 10^{-5}\ \mathrm{C/m^2}$`, correct: false, misconceptionId: "C05-M14", value: "3.98000000000000e-5" },
        { key: "D", text: t`$1.49 \times 10^{-4}\ \mathrm{C/m^2}$`, correct: false, misconceptionId: "C05-M15", value: "0.000149000000000000" },
      ],
      solution: {
        steps: [
          t`Area $= 4\pi R^2$ $= 4\pi \times (0.2)^2$ $\approx 0.503\ \mathrm{m^2}$.`,
          t`$\sigma = \dfrac{q}{4\pi R^2}$ $= \dfrac{5 \times 10^{-6}}{0.503}$ $\approx 9.95 \times 10^{-6}\ \mathrm{C/m^2}$.`,
        ],
      },
    },
  ],
};
