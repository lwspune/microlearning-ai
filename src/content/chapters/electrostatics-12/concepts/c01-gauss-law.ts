import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Wrap a charge in a small box or in a huge balloon. The field lines crossing the balloon are far more spread out. Is the total number crossing each surface the same?`,
    reveal: t`Yes. Every field line from the charge must cross any surface that surrounds it, however big or oddly shaped. So the total flux depends only on the charge inside: $\phi = \dfrac{q}{\varepsilon_0}$.`,
  },
  explanation: {
    intuition: [
      t`**Electric flux** through a surface counts the field lines crossing it: $\phi = \vec{E} \cdot \vec{A}$ for a flat surface in a uniform field.`,
      t`A **closed surface** has an inside and an outside, like a box or a balloon.`,
      t`Every line leaving a charge inside must cross the surface; lines from a charge outside enter and leave again.`,
      t`So only the charge inside decides the net flux out.`,
      t`Outward flux counts positive, inward negative: a negative charge inside gives negative flux.`,
    ],
    formal: [
      {
        title: "Gauss' law",
        points: [
          t`The net electric flux through any closed surface is $\phi = \dfrac{q}{\varepsilon_0}$.`,
          t`$q$ is the algebraic sum of the charges inside; $\varepsilon_0$ $= 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.`,
          t`The closed surface used is called a **Gaussian surface**; it is imagined, not real.`,
          t`The flux does not depend on the surface's size or shape, or on where the charge sits inside.`,
        ],
      },
      {
        title: "Using it",
        points: [
          t`Charges outside the surface add nothing to the net flux, though they change the field on it.`,
          t`Flux is measured in $\mathrm{N\,m^2/C}$.`,
          t`A charge at the centre of a cube sends equal flux through all six faces: $\dfrac{q}{6\varepsilon_0}$ each.`,
          t`With a symmetric surface, $E$ is the same all over it, and Gauss' law gives $E$ directly.`,
        ],
      },
    ],
    worked: {
      prompt: t`A closed surface encloses charges of $+2\ \mu\mathrm{C}$, $+3\ \mu\mathrm{C}$ and $-4\ \mu\mathrm{C}$; a charge of $+6\ \mu\mathrm{C}$ lies just outside. Find the net flux through the surface.`,
      steps: [
        t`Only the charges inside count: $q = 2 + 3 - 4 = 1\ \mu\mathrm{C}$.`,
        t`$\phi = \dfrac{q}{\varepsilon_0}$ $= \dfrac{1 \times 10^{-6}}{8.85 \times 10^{-12}}$.`,
        t`$\phi \approx 1.13 \times 10^5\ \mathrm{N\,m^2/C}$, outward.`,
      ],
      answer: t`$1.13 \times 10^5\ \mathrm{N\,m^2/C}$`,
    },
    visualSpec: t`Grow and reshape a closed surface around a charge and watch the count of field lines crossing it stay fixed.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Counts charges outside the surface too.",
      remediation: "Field lines from an outside charge enter the surface and leave it again: their net flux is zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Drops the sign of the enclosed charge.",
      remediation: "Use the algebraic charge: a net negative charge inside gives negative, inward flux.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Multiplies by $\varepsilon_0$ instead of dividing.`,
      remediation: t`Gauss' law is $\phi = \dfrac{q}{\varepsilon_0}$: a tiny $\varepsilon_0$ makes the flux large.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Forgets that one face of the cube takes only a sixth of the flux.",
      remediation: t`$\dfrac{q}{\varepsilon_0}$ is the flux through the whole closed surface; by symmetry each of the six faces gets an equal share.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Uses $\dfrac{q}{4\pi\varepsilon_0}$, the constant of Coulomb's law, instead of $\dfrac{q}{\varepsilon_0}$.`,
      remediation: t`$\dfrac{1}{4\pi\varepsilon_0}$ belongs to the field of a point charge; the total flux is $\dfrac{q}{\varepsilon_0}$, with no $4\pi$.`,
      fallback: { kind: "ext", topic: "Coulomb's law (Std XI Physics)" },
    },
    {
      id: "C01-M6",
      mistake: "Adds the sizes of the charges, ignoring their signs.",
      remediation: t`Lines from a positive charge inside can end on a negative one inside: use $q_1 + q_2$ with signs.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Counts only the positive charge.",
      remediation: t`Every enclosed charge counts, with its sign: $+5 - 3 = +2\ \mu\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks the flux depends on the size of the surface.",
      remediation: t`A bigger surface has a weaker field over a larger area: the two cancel, and the flux stays $\dfrac{q}{\varepsilon_0}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks the position of the charge inside matters.",
      remediation: "Every line from the charge crosses the closed surface once, wherever the charge sits inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks the flux falls with distance, as the field does.",
      remediation: t`$E$ falls as $\dfrac{1}{r^2}$ but the area grows as $r^2$: their product, the flux, is constant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks the flux grows with the area.",
      remediation: "The field weakens as the area grows, in the same ratio: the flux is unchanged.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrostatics-12-phy/Ex Q.7" },
      stem: t`Charges $-4Q$ and $+2Q$ sit at the points $(2a, 0)$ and $(5a, 0)$. What is the electric flux through a sphere of radius $4a$ centred at the origin?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sphere" } },
      options: [
        { key: "A", text: t`$-\dfrac{4Q}{\varepsilon_0}$`, correct: true, value: "m4" },
        { key: "B", text: t`$-\dfrac{2Q}{\varepsilon_0}$`, correct: false, misconceptionId: "C01-M1", value: "m2" },
        { key: "C", text: t`$+\dfrac{4Q}{\varepsilon_0}$`, correct: false, misconceptionId: "C01-M2", value: "p4" },
        { key: "D", text: t`$-4Q\varepsilon_0$`, correct: false, misconceptionId: "C01-M3", value: "m4eps" },
      ],
      solution: {
        steps: [
          t`$-4Q$ at $(2a, 0)$ is $2a$ from the origin, inside; $+2Q$ at $(5a, 0)$ is $5a$ away, outside.`,
          t`Only the enclosed $-4Q$ counts: $\phi = -\dfrac{4Q}{\varepsilon_0}$, inward.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`A charge of $8.85\ \mu\mathrm{C}$ sits at the centre of a cube. What is the electric flux through one face of the cube? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { q_uC: "8.85" }, params: { ask: "face" } },
      options: [
        { key: "A", text: t`$1.67 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: true, value: "167000" },
        { key: "B", text: t`$1 \times 10^{6}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C01-M4", value: "1000000" },
        { key: "C", text: t`$1.31 \times 10^{-17}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C01-M3", value: "1.31000000000000e-17" },
        { key: "D", text: t`$13300\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C01-M5", value: "13300" },
      ],
      solution: {
        steps: [
          t`Through the whole cube: $\dfrac{q}{\varepsilon_0}$ $= \dfrac{8.85 \times 10^{-6}}{8.85 \times 10^{-12}}$ $= 10^6\ \mathrm{N\,m^2/C}$.`,
          t`By symmetry each face takes a sixth: $\dfrac{10^6}{6} \approx 1.67 \times 10^5\ \mathrm{N\,m^2/C}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`A closed surface encloses charges of $+5\ \mu\mathrm{C}$ and $-3\ \mu\mathrm{C}$. What is the net electric flux through it? (Take $\varepsilon_0 = 8.85 \times 10^{-12}\ \mathrm{C^2/(N\,m^2)}$.)`,
      verify: { kind: "value", inputs: { q1_uC: "5", q2_uC: "-3" }, params: { ask: "net" } },
      options: [
        { key: "A", text: t`$5.65 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C01-M7", value: "565000" },
        { key: "B", text: t`$18000\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C01-M5", value: "18000" },
        { key: "C", text: t`$2.26 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: true, value: "226000" },
        { key: "D", text: t`$9.04 \times 10^{5}\ \mathrm{N\,m^2/C}$`, correct: false, misconceptionId: "C01-M6", value: "904000" },
      ],
      solution: {
        steps: [
          t`Net charge enclosed: $+5 - 3 = +2\ \mu\mathrm{C}$.`,
          t`$\phi$ $= \dfrac{2 \times 10^{-6}}{8.85 \times 10^{-12}} \approx 2.26 \times 10^5\ \mathrm{N\,m^2/C}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`What does the electric flux through a closed surface depend on?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "depends" } },
      options: [
        { key: "A", text: t`Only on the total charge enclosed by the surface`, correct: true, value: "enclosed" },
        { key: "B", text: t`On the charges inside the surface and those near it outside`, correct: false, misconceptionId: "C01-M1", value: "outside_too" },
        { key: "C", text: t`On the size of the surface as well as the charge inside`, correct: false, misconceptionId: "C01-M8", value: "size" },
        { key: "D", text: t`On where the charge sits inside the surface`, correct: false, misconceptionId: "C01-M9", value: "position" },
      ],
      solution: {
        steps: [
          t`Gauss' law: $\phi = \dfrac{q}{\varepsilon_0}$, with $q$ the charge enclosed.`,
          t`Nothing else enters: not the surface's size or shape, not charges outside, not where the charge sits.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A point charge sits at the centre of a Gaussian sphere. The sphere's radius is doubled. What happens to the electric flux through it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "double" } },
      options: [
        { key: "A", text: t`It stays the same`, correct: true, value: "same" },
        { key: "B", text: t`It becomes a quarter`, correct: false, misconceptionId: "C01-M10", value: "quarter" },
        { key: "C", text: t`It becomes four times as large`, correct: false, misconceptionId: "C01-M11", value: "four_times" },
        { key: "D", text: t`It doubles`, correct: false, misconceptionId: "C01-M8", value: "doubles" },
      ],
      solution: {
        steps: [
          t`The enclosed charge is unchanged, so $\phi = \dfrac{q}{\varepsilon_0}$ is unchanged.`,
          t`$E$ falls to a quarter while the area grows four times: the flux stays the same.`,
        ],
      },
    },
  ],
};
