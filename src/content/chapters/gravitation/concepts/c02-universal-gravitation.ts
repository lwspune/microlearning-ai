import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Newton's law says you attract the person sitting next to you, and they attract you. So why don't the two of you slide together?`,
    reveal: t`The pull is real but tiny: for two $60\ \mathrm{kg}$ people half a metre apart it is about $10^{-6}\ \mathrm{N}$, far less than friction. $G$ is very small, so gravity shows only when one mass is huge, like the Earth.`,
  },
  explanation: {
    intuition: [
      t`Every body in the universe attracts every other body; this pull is **gravitation**.`,
      t`The pull is bigger when the masses are bigger: it goes as the product $m_1m_2$.`,
      t`It weakens fast with distance: double the distance and the pull drops to a quarter.`,
      t`The two bodies pull each other with equal and opposite forces, whatever their masses.`,
      t`The constant $G$ in the law is tiny, so the pull between everyday objects is too small to feel.`,
    ],
    formal: [
      {
        title: "The law of gravitation",
        points: [
          t`**Newton's law:** every particle attracts every other with a force along the line joining them.`,
          t`The force is proportional to the product of the masses and inversely proportional to the square of their distance.`,
          t`So $F = \dfrac{Gm_1m_2}{r^2}$, where $G$ is the **universal gravitational constant**.`,
          t`$G$ $= 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$: the force between two $1\ \mathrm{kg}$ masses $1\ \mathrm{m}$ apart.`,
          t`For uniform spheres, $r$ is the distance between their **centres**, not between their surfaces.`,
          t`By Newton's third law, $m_1$ pulls $m_2$ exactly as hard as $m_2$ pulls $m_1$.`,
        ],
      },
      {
        title: "Vector form and several masses",
        points: [
          t`Let $\hat{r}_{21}$ be the unit vector from $m_1$ towards $m_2$.`,
          t`The force on $m_2$ is $\vec{F}_{21}$ $= -\dfrac{Gm_1m_2}{r^2}\,\hat{r}_{21}$.`,
          t`The minus sign says the force on $m_2$ points back towards $m_1$: gravity attracts.`,
          t`The force on $m_1$ is equal and opposite: $\vec{F}_{12} = -\vec{F}_{21}$.`,
          t`With several masses, find each pull alone, then add them as **vectors**, using their components.`,
        ],
      },
      {
        title: "Measuring G",
        points: [
          t`Cavendish first measured $G$ in 1798, with a **torsion balance**: a light rod hung from a fine wire.`,
          t`A small sphere sits at each end of the rod; two large spheres are brought close to them.`,
          t`The large spheres pull the small ones, twisting the wire by a small, measurable angle.`,
          t`The twist gives the force $F$, and then $G = \dfrac{Fr^2}{Mm}$.`,
          t`From $G = \dfrac{Fr^2}{m_1m_2}$, the dimensions of $G$ are $[\mathrm{L^3M^{-1}T^{-2}}]$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the gravitational force between two students, each of mass $60\ \mathrm{kg}$, standing $0.5\ \mathrm{m}$ apart. Compare it with the weight of one student. Take $G$ $= 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      steps: [
        t`$F = \dfrac{Gm_1m_2}{r^2}$ $= \dfrac{6.67 \times 10^{-11} \times 60 \times 60}{0.5^2}$.`,
        t`$F$ $= \dfrac{2.40 \times 10^{-7}}{0.25}$ $\approx 9.6 \times 10^{-7}\ \mathrm{N}$.`,
        t`One student's weight is $mg = 60 \times 9.8$ $= 588\ \mathrm{N}$.`,
        t`The pull between them is about $6 \times 10^{8}$ times smaller than that weight.`,
      ],
      answer: t`$9.6 \times 10^{-7}\ \mathrm{N}$, about $6 \times 10^{8}$ times smaller than one weight`,
    },
    visualSpec: t`Drag two masses apart and together and watch the pair of equal and opposite force arrows shrink and grow as $1/r^2$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Takes the force as varying as $\dfrac{1}{r}$.`,
      remediation: t`Gravitation is an inverse square law: $F = \dfrac{Gm_1m_2}{r^2}$, with $r$ squared.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks the bigger body pulls harder than it is pulled.",
      remediation: "By Newton's third law the two forces are equal and opposite; the smaller body just accelerates more.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Measures the distance between the surfaces of the spheres.",
      remediation: t`For uniform spheres $r$ is the distance between the centres: add both radii to the gap.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Adds the sizes of the forces, ignoring their directions.",
      remediation: "Forces are vectors: resolve each one into components and add those.",
      fallback: { kind: "ext", topic: "addition of vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks the pulls of A and C cancel completely.",
      remediation: "Only their sideways parts cancel; their parts along DB add to the pull of B.",
      fallback: { kind: "ext", topic: "resolution of vectors (Mathematical Methods, Ch.2)" },
    },
    {
      id: "C02-M6",
      mistake: t`Rearranges the law to $G = \dfrac{F}{m_1m_2r^2}$.`,
      remediation: t`Multiply both sides of $F = \dfrac{Gm_1m_2}{r^2}$ by $r^2$: $G = \dfrac{Fr^2}{m_1m_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Thinks a constant such as $G$ has no dimensions.`,
      remediation: t`$G$ is a constant but carries units, $\mathrm{N\,m^2/kg^2}$, so it has dimensions $[\mathrm{L^3M^{-1}T^{-2}}]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Takes the force as proportional to the sum of the masses.",
      remediation: t`The force goes as the **product** $m_1m_2$, not the sum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Squares the number part of $r$ but not its power of ten.`,
      remediation: t`$(a \times 10^{n})^2$ $= a^2 \times 10^{2n}$: the power of ten doubles too.`,
      fallback: { kind: "ext", topic: "powers of ten (Units and Measurements, Ch.1)" },
    },
    {
      id: "C02-M10",
      mistake: t`Takes AD and CD as $l$.`,
      remediation: t`AD is the hypotenuse of a right triangle with legs $l$ and $l$: $AD = l\sqrt{2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.4 (v)" },
      stem: t`The Sun's mass is $1.99 \times 10^{30}\ \mathrm{kg}$, the Earth's is $5.98 \times 10^{24}\ \mathrm{kg}$, and their average distance apart is $1.5 \times 10^{11}\ \mathrm{m}$. What is the gravitational force between them? Take $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", m1: "1.99*10**30", m2: "5.98*10**24", rm: "1.5", re: "11" }, params: { ask: "force" } },
      options: [
        { key: "A", text: t`$3.53 \times 10^{22}\ \mathrm{N}$`, correct: true, value: "35299999999999998951424" },
        { key: "B", text: t`$5.29 \times 10^{33}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "5290000000000000271259901655777280" },
        { key: "C", text: t`$0.0059\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M8", value: "0.00590000000000000" },
        { key: "D", text: t`$3.53 \times 10^{33}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M9", value: "3529999999999999975054183552253952" },
      ],
      solution: {
        steps: [
          t`$F = \dfrac{GM_SM_E}{r^2}$ $= \dfrac{6.67 \times 10^{-11} \times 1.99 \times 10^{30} \times 5.98 \times 10^{24}}{(1.5 \times 10^{11})^2}$.`,
          t`Numerator $\approx 7.94 \times 10^{44}$; $r^2 = 2.25 \times 10^{22}$.`,
          t`$F \approx 3.53 \times 10^{22}\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Solved Ex.5.3" },
      stem: t`Three particles A, B and C, each of mass $m$, lie on a straight line with $AB = BC = l$. A fourth particle D, also of mass $m$, lies on the perpendicular bisector of AC at a distance $l$ from B. What is the net gravitational force on D?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "net" } },
      options: [
        { key: "A", text: t`$2\,\dfrac{Gm^2}{l^2}$`, correct: false, misconceptionId: "C02-M4", value: "2" },
        { key: "B", text: t`$\dfrac{Gm^2}{l^2}$`, correct: false, misconceptionId: "C02-M5", value: "1" },
        { key: "C", text: t`$2.41\,\dfrac{Gm^2}{l^2}$`, correct: false, misconceptionId: "C02-M10", value: "2.41000000000000" },
        { key: "D", text: t`$1.71\,\dfrac{Gm^2}{l^2}$`, correct: true, value: "1.71000000000000" },
      ],
      solution: {
        steps: [
          t`$AD = CD = l\sqrt{2}$, so A and C each pull D with $\dfrac{Gm^2}{2l^2}$; B pulls with $\dfrac{Gm^2}{l^2}$.`,
          t`The pulls of A and C make $45^\circ$ with DB: their sideways parts cancel and their parts along DB add to $2 \times \dfrac{Gm^2}{2l^2}\cos 45^\circ$ $= \dfrac{Gm^2}{\sqrt{2}\,l^2}$.`,
          t`Net force $= \left(1 + \dfrac{1}{\sqrt{2}}\right)\dfrac{Gm^2}{l^2}$ $\approx 1.71\,\dfrac{Gm^2}{l^2}$, along DB.`,
        ],
        figure: {
          alt: "A, B and C on a horizontal line, B in the middle, with D a distance l above B. Step 1: the slant distances AD and CD, each l√2. Step 2: from D, a long arrow down towards B and two shorter arrows towards A and C; their sideways parts cancel and their downward parts add to the pull towards B.",
          axes: "none",
          view: { x: [-2.6, 2.6], y: [-0.9, 2.6] },
          elements: [
            { kind: "point", at: [-2, 0], label: "A", labelAt: "s" },
            { kind: "point", at: [0, 0], label: "B", labelAt: "s" },
            { kind: "point", at: [2, 0], label: "C", labelAt: "s" },
            { kind: "point", at: [0, 2], label: "D", labelAt: "n" },
            { kind: "segment", from: [-2, 0], to: [2, 0], tone: "muted" },
            { kind: "segment", from: [0, 0], to: [0, 2], label: "l", labelAt: "e", tone: "muted" },
            { kind: "segment", from: [-2, 0], to: [0, 2], label: "l√2", labelAt: "nw", tone: "muted", dashed: true, step: 1 },
            { kind: "segment", from: [2, 0], to: [0, 2], label: "l√2", labelAt: "ne", tone: "muted", dashed: true, step: 1 },
            { kind: "vector", from: [0, 2], to: [0, 0.6], tone: "good", step: 2 },
            { kind: "vector", from: [0, 2], to: [-0.75, 1.25], tone: "good", step: 2 },
            { kind: "vector", from: [0, 2], to: [0.75, 1.25], tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/gravitation-11-phy/Ex Q.2 (iii)" },
      stem: t`What are the dimensions of the universal gravitational constant $G$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dims" } },
      options: [
        { key: "A", text: t`None: $G$ is a pure number`, correct: false, misconceptionId: "C02-M7", value: "1" },
        { key: "B", text: t`$[\mathrm{L^3M^{-1}T^{-2}}]$`, correct: true, value: "L**3/(M*T**2)" },
        { key: "C", text: t`$[\mathrm{L^2M^{-1}T^{-2}}]$`, correct: false, misconceptionId: "C02-M1", value: "L**2/(M*T**2)" },
        { key: "D", text: t`$[\mathrm{L^{-1}M^{-1}T^{-2}}]$`, correct: false, misconceptionId: "C02-M6", value: "1/(L*M*T**2)" },
      ],
      solution: {
        steps: [
          t`From $F = \dfrac{Gm_1m_2}{r^2}$: $G = \dfrac{Fr^2}{m_1m_2}$.`,
          t`$[G]$ $= \dfrac{[\mathrm{MLT^{-2}}][\mathrm{L^2}]}{[\mathrm{M^2}]}$ $= [\mathrm{L^3M^{-1}T^{-2}}]$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Two uniform spheres of masses $20\ \mathrm{kg}$ and $30\ \mathrm{kg}$, each of radius $0.1\ \mathrm{m}$, rest with their surfaces $0.3\ \mathrm{m}$ apart. What is the gravitational force between them? Take $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", m1: "20", m2: "30", d: "3/10", R: "1/10" }, params: { ask: "force" } },
      options: [
        { key: "A", text: t`$1.33 \times 10^{-8}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M8", value: "1.33000000000000e-8" },
        { key: "B", text: t`$1.6 \times 10^{-7}\ \mathrm{N}$`, correct: true, value: "1.60000000000000e-7" },
        { key: "C", text: t`$4.45 \times 10^{-7}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M3", value: "4.45000000000000e-7" },
        { key: "D", text: t`$8 \times 10^{-8}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "8.00000000000000e-8" },
      ],
      solution: {
        steps: [
          t`Distance between centres: $r = 0.3 + 0.1 + 0.1$ $= 0.5\ \mathrm{m}$.`,
          t`$F$ $= \dfrac{6.67 \times 10^{-11} \times 20 \times 30}{0.5^2}$ $\approx 1.6 \times 10^{-7}\ \mathrm{N}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`In a Cavendish-type experiment a $158\ \mathrm{kg}$ sphere attracts a $0.73\ \mathrm{kg}$ sphere, centres $0.23\ \mathrm{m}$ apart, with a force of $1.47 \times 10^{-7}\ \mathrm{N}$. What value of $G$ does this give?`,
      verify: { kind: "value", inputs: { F: "1.47*10**-7", M: "158", m: "0.73", r: "0.23" }, params: { ask: "G" } },
      options: [
        { key: "A", text: t`$4.9 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$`, correct: false, misconceptionId: "C02-M8", value: "4.90000000000000e-11" },
        { key: "B", text: t`$6.74 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$`, correct: true, value: "6.74000000000000e-11" },
        { key: "C", text: t`$2.41 \times 10^{-8}\ \mathrm{N\,m^2/kg^2}$`, correct: false, misconceptionId: "C02-M6", value: "2.41000000000000e-8" },
        { key: "D", text: t`$2.93 \times 10^{-10}\ \mathrm{N\,m^2/kg^2}$`, correct: false, misconceptionId: "C02-M1", value: "2.93000000000000e-10" },
      ],
      solution: {
        steps: [
          t`$G = \dfrac{Fr^2}{Mm}$ $= \dfrac{1.47 \times 10^{-7} \times 0.23^2}{158 \times 0.73}$.`,
          t`$= \dfrac{7.78 \times 10^{-9}}{115.3}$ $\approx 6.74 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`The Earth ($6 \times 10^{24}\ \mathrm{kg}$) and the Moon ($7.4 \times 10^{22}\ \mathrm{kg}$) are $3.84 \times 10^{8}\ \mathrm{m}$ apart. With what force does the Moon pull the Earth? Take $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$.`,
      verify: { kind: "value", inputs: { G: "6.67*10**-11", m1: "6*10**24", m2: "7.4*10**22", rm: "3.84", re: "8" }, params: { ask: "pull" } },
      options: [
        { key: "A", text: t`$2.01 \times 10^{20}\ \mathrm{N}$`, correct: true, value: "201000000000000000000" },
        { key: "B", text: t`$2.48 \times 10^{18}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M2", value: "2480000000000000000" },
        { key: "C", text: t`$7.71 \times 10^{28}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M1", value: "77100000000000000942007123968" },
        { key: "D", text: t`$2.01 \times 10^{28}\ \mathrm{N}$`, correct: false, misconceptionId: "C02-M9", value: "20099999999999998260471136256" },
      ],
      solution: {
        steps: [
          t`By Newton's third law the Moon pulls the Earth exactly as hard as the Earth pulls the Moon.`,
          t`$F$ $= \dfrac{6.67 \times 10^{-11} \times 6 \times 10^{24} \times 7.4 \times 10^{22}}{(3.84 \times 10^{8})^2}$.`,
          t`$F$ $= \dfrac{2.96 \times 10^{37}}{1.47 \times 10^{17}}$ $\approx 2.01 \times 10^{20}\ \mathrm{N}$.`,
        ],
      },
    },
  ],
};
