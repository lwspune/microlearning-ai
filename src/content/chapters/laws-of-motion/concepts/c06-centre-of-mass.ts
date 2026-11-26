import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Throw a hammer spinning through the air. Its head and handle tumble about wildly, yet one point of it traces a smooth parabola, like a thrown ball. Which point?`,
    reveal: t`Its **centre of mass**. Gravity, the only external force, acts as if all the hammer's mass were at that point, so it moves like a single particle; the rest of the hammer turns about it.`,
  },
  explanation: {
    intuition: [
      t`Newton's laws are stated for point masses, but real bodies have size.`,
      t`The **centre of mass** is the point where the whole mass may be taken to be concentrated.`,
      t`It is an average position, with each part weighted by its mass.`,
      t`For a uniform symmetric body it is at the geometric centre.`,
      t`It moves as if all the external forces acted on a single particle there.`,
    ],
    formal: [
      {
        title: "Centre of mass of particles",
        points: [
          t`For masses $m_1, m_2, \ldots$ at position vectors $\vec{r}_1, \vec{r}_2, \ldots$:`,
          t`$\vec{r}_{cm}$ $= \dfrac{\sum m_i\vec{r}_i}{\sum m_i}$.`,
          t`In components, $x_{cm}$ $= \dfrac{\sum m_ix_i}{\sum m_i}$, and likewise for $y_{cm}$ and $z_{cm}$.`,
          t`For two masses it lies on the line joining them, nearer the heavier one.`,
          t`Its position in the body does not depend on where we put the origin.`,
        ],
      },
      {
        title: "Extended bodies",
        points: [
          t`A uniform body with a centre of symmetry has its centre of mass there: a rod's midpoint, a disc's centre.`,
          t`It need not be on the body: a ring's is at its empty centre.`,
          t`Split a body into simple parts and replace each part by its mass at its own centre of mass.`,
          t`For uniform sheets, mass is proportional to area; for uniform solids, to volume.`,
          t`So a disc's mass goes as $r^2$, a solid sphere's or cube's as (size)$^3$.`,
        ],
      },
      {
        title: "Bodies with a hole",
        points: [
          t`Treat the body as the full body **minus** the part removed.`,
          t`The removed part counts as a negative mass at its own centre of mass.`,
          t`Full body $M$ with centre at O, removed mass $m$ at distance $d$: $x_{cm} = \dfrac{-md}{M - m}$.`,
          t`The minus sign puts the centre of mass on the side away from the hole.`,
        ],
      },
      {
        title: "Motion of the centre of mass",
        points: [
          t`Total mass $M$ times $\vec{v}_{cm}$ is the total momentum: $M\vec{v}_{cm} = \sum m_i\vec{v}_i$.`,
          t`Internal forces cancel in pairs, so $M\vec{a}_{cm} = \vec{F}_{ext}$, the net external force.`,
          t`With no external force, the centre of mass moves with constant velocity.`,
          t`A shell that bursts in flight: its pieces' centre of mass follows the original parabola.`,
        ],
      },
    ],
    worked: {
      prompt: t`Masses of $1\ \mathrm{kg}$, $2\ \mathrm{kg}$ and $3\ \mathrm{kg}$ lie at the points $(0, 0)$, $(4, 0)$ and $(0, 3)$, in metres. Locate their centre of mass.`,
      steps: [
        t`Total mass: $1 + 2 + 3 = 6\ \mathrm{kg}$.`,
        t`$x_{cm}$ $= \dfrac{1(0) + 2(4) + 3(0)}{6}$ $= \dfrac{8}{6} \approx 1.33\ \mathrm{m}$.`,
        t`$y_{cm}$ $= \dfrac{1(0) + 2(0) + 3(3)}{6}$ $= \dfrac{9}{6} = 1.5\ \mathrm{m}$.`,
      ],
      answer: t`$(1.33\ \mathrm{m}, 1.5\ \mathrm{m})$`,
    },
    visualSpec: t`Drag masses along a rod and watch the centre of mass slide towards the heavier ones.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Takes the geometric centre, ignoring how the mass is spread.",
      remediation: t`The centre of mass weights each position by its mass: $x_{cm}$ $= \dfrac{\sum m_ix_i}{\sum m_i}$. It is the middle only for a uniform symmetric body.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Adds the removed part's mass instead of subtracting it.",
      remediation: "A hole is missing mass: count it as a negative mass. The centre of mass moves **away** from the hole.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Uses the wrong power of the size for the mass.",
      remediation: t`For a uniform sheet mass goes as area ($r^2$); for a uniform solid, as volume ($r^3$, or edge$^3$).`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Places each cube's mass at its face, not its centre.",
      remediation: "Each uniform cube's mass acts at its own centre, half an edge in from its faces.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Weights each position with the other body's mass.",
      remediation: t`Each mass multiplies its own position: $x_{cm}$ $= \dfrac{m_1x_1 + m_2x_2}{m_1 + m_2}$, nearer the heavier mass.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Divides by the number of bodies instead of the total mass.",
      remediation: t`The denominator is the total mass $\sum m_i$, not how many bodies there are.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Divides by the mass of the full body, before the hole was cut.",
      remediation: t`The remaining part has mass $M - m$: $x_{cm} = \dfrac{-md}{M - m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks the burst sends the centre of mass on a new path.",
      remediation: "The burst's forces are internal. Only gravity acts from outside, so the centre of mass keeps to its parabola.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks the centre of mass goes with the heavier piece.",
      remediation: t`The centre of mass is a weighted average of **all** the pieces, and it moves as $M\vec{a}_{cm} = \vec{F}_{ext}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks the centre of mass stops moving sideways after the burst.",
      remediation: "The total horizontal momentum is unchanged by internal forces, so the centre of mass keeps its horizontal velocity.",
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "authored" },
      stem: t`A light rod $0.8\ \mathrm{m}$ long carries a $2\ \mathrm{kg}$ mass at one end and a $6\ \mathrm{kg}$ mass at the other. How far from the $2\ \mathrm{kg}$ mass is the centre of mass?`,
      verify: { kind: "value", inputs: { m1: "2", m2: "6", L: "4/5" }, params: { ask: "two" } },
      options: [
        { key: "A", text: t`$0.4\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M1", value: "0.400000000000000" },
        { key: "B", text: t`$0.2\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M5", value: "0.200000000000000" },
        { key: "C", text: t`$2.4\ \mathrm{m}$`, correct: false, misconceptionId: "C06-M6", value: "2.40000000000000" },
        { key: "D", text: t`$0.6\ \mathrm{m}$`, correct: true, value: "0.600000000000000" },
      ],
      solution: {
        steps: [
          t`Origin at the $2\ \mathrm{kg}$ mass: $x_{cm}$ $= \dfrac{2(0) + 6(0.8)}{2 + 6}$.`,
          t`$x_{cm} = \dfrac{4.8}{8}$ $= 0.6\ \mathrm{m}$, nearer the heavier mass.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Solved Ex.4.14" },
      stem: t`A circular hole of radius $r$ is cut from a uniform disc of radius $3r$. The hole's centre is $2r$ from the disc's centre O. Take the $x$-axis from O through the hole's centre. Where is the centre of mass of the remaining part?`,
      verify: { kind: "value", inputs: { k: "3", c: "2" }, params: { ask: "disc" } },
      options: [
        { key: "A", text: t`$x = -\dfrac{r}{4}$`, correct: true, value: "-r/4" },
        { key: "B", text: t`$x = \dfrac{r}{5}$`, correct: false, misconceptionId: "C06-M2", value: "r/5" },
        { key: "C", text: t`$x = -r$`, correct: false, misconceptionId: "C06-M3", value: "-r" },
        { key: "D", text: t`$x = -\dfrac{2r}{9}$`, correct: false, misconceptionId: "C06-M7", value: "-2*r/9" },
      ],
      solution: {
        steps: [
          t`Mass goes as area: full disc $9m$ at O, hole $m$ at $x = 2r$.`,
          t`Remaining part: $x_{cm}$ $= \dfrac{9m(0) - m(2r)}{9m - m}$.`,
          t`$x_{cm} = -\dfrac{2r}{8}$ $= -\dfrac{r}{4}$, on the side away from the hole.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (xvii)" },
      stem: t`A uniform solid sphere of radius $R$ has a spherical hole of radius $\dfrac{R}{2}$ inside it. One end of the hole is at the sphere's centre O and the other at its surface. Take the $x$-axis from O through the hole's centre. Where is the centre of mass of the remaining sphere?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sphere" } },
      options: [
        { key: "A", text: t`$x = -\dfrac{R}{14}$`, correct: true, value: "-R/14" },
        { key: "B", text: t`$x = 0$, at O`, correct: false, misconceptionId: "C06-M1", value: "0" },
        { key: "C", text: t`$x = \dfrac{R}{18}$`, correct: false, misconceptionId: "C06-M2", value: "R/18" },
        { key: "D", text: t`$x = -\dfrac{R}{6}$`, correct: false, misconceptionId: "C06-M3", value: "-R/6" },
      ],
      solution: {
        steps: [
          t`Mass goes as volume: the hole has $\left(\dfrac{1}{2}\right)^3$ $= \dfrac{1}{8}$ of the sphere's mass, at $x = \dfrac{R}{2}$.`,
          t`$x_{cm}$ $= \dfrac{-\dfrac{1}{8} \times \dfrac{R}{2}}{1 - \dfrac{1}{8}}$.`,
          t`$x_{cm}$ $= -\dfrac{R}{16} \times \dfrac{8}{7}$ $= -\dfrac{R}{14}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/laws-of-motion-11-phy/Ex Q.3 (xvi)" },
      stem: t`Three uniform solid cubes of the same material, of edges $10\ \mathrm{cm}$, $20\ \mathrm{cm}$ and $30\ \mathrm{cm}$, stand on the ground in a row, in that order, each touching the next. Measured along the row from the outer face of the smallest cube, where is their centre of mass?`,
      verify: { kind: "value", inputs: { a1: "10", a2: "20", a3: "30" }, params: { ask: "cubes" } },
      options: [
        { key: "A", text: t`$24.7\ \mathrm{cm}$`, correct: false, misconceptionId: "C06-M4", value: "24.7000000000000" },
        { key: "B", text: t`$38.3\ \mathrm{cm}$`, correct: true, value: "38.3000000000000" },
        { key: "C", text: t`$23.3\ \mathrm{cm}$`, correct: false, misconceptionId: "C06-M1", value: "23.3000000000000" },
        { key: "D", text: t`$35\ \mathrm{cm}$`, correct: false, misconceptionId: "C06-M3", value: "35" },
      ],
      solution: {
        steps: [
          t`Masses go as edge$^3$: $1 : 8 : 27$, total $36$. Centres at $5$, $20$ and $45\ \mathrm{cm}$.`,
          t`$x_{cm}$ $= \dfrac{1(5) + 8(20) + 27(45)}{36}$ $= \dfrac{1380}{36}$.`,
          t`$x_{cm} \approx 38.3\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`A shell is fired and flies along a parabola. At the top of its path it bursts into two unequal pieces, which fly off in different directions. Ignoring air resistance, what does the centre of mass of the pieces do until the first piece lands?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "shell" } },
      options: [
        { key: "A", text: t`It carries on along the same parabola`, correct: true, value: "sameParabola" },
        { key: "B", text: t`It follows a new path, set by the energy of the burst`, correct: false, misconceptionId: "C06-M8", value: "newPath" },
        { key: "C", text: t`It moves along with the heavier piece`, correct: false, misconceptionId: "C06-M9", value: "withHeavier" },
        { key: "D", text: t`It stops moving sideways and falls straight down`, correct: false, misconceptionId: "C06-M10", value: "fallsStraight" },
      ],
      solution: {
        steps: [
          t`The burst's forces are internal; the only external force on the pieces is still their total weight.`,
          t`So $M\vec{a}_{cm} = M\vec{g}$, as before: the centre of mass carries on along the same parabola.`,
        ],
      },
    },
  ],
};
