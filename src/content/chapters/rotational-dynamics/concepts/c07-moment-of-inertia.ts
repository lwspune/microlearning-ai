import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Two wheels have the same mass. One has all of it in a thin rim; the other is a solid disc. Which is harder to start spinning?`,
    reveal: t`The rim wheel. What resists turning is mass and how far it sits from the axis: the rim wheel's $I = MR^2$ is twice the disc's $\dfrac{1}{2}MR^2$.`,
  },
  explanation: {
    intuition: [
      t`In straight-line motion, mass measures how hard it is to change the motion.`,
      t`In rotation, what matters is the mass and how far it sits from the axis.`,
      t`The **moment of inertia** $I$ is the rotational partner of mass: $I = \sum mr^2$.`,
      t`Mass far from the axis counts for much more, because its distance is squared.`,
      t`So $I$ depends on the axis chosen, not just on the body.`,
    ],
    formal: [
      {
        title: "Moment of inertia",
        points: [
          t`For particles of masses $m_1, m_2, \ldots$ at distances $r_1, r_2, \ldots$ from the axis: $I = \sum m_i r_i^2$.`,
          t`Each $r$ is a perpendicular distance from the axis of rotation.`,
          t`SI unit: kg m²; dimensions $[M^1L^2T^0]$.`,
          t`For a body with its mass spread out, $I = \int r^2\,dm$.`,
        ],
      },
      {
        title: "Standard results",
        points: [
          t`Thin ring, axis through its centre at right angles to its plane: $I = MR^2$, as all its mass is at $R$.`,
          t`Uniform disc, same axis: $I = \dfrac{1}{2}MR^2$, as its mass spreads from $0$ to $R$.`,
          t`A hollow cone about its axis also has $\dfrac{1}{2}MR^2$: its mass is spread about the axis just like a disc's.`,
          t`About a diameter: ring $\dfrac{1}{2}MR^2$, disc $\dfrac{1}{4}MR^2$.`,
          t`Thin rod about a perpendicular axis through its centre: $\dfrac{1}{12}ML^2$. Solid sphere about a diameter: $\dfrac{2}{5}MR^2$.`,
          t`Only the spread of mass about the axis matters, so different shapes can share a formula.`,
        ],
      },
      {
        title: "Radius of gyration",
        points: [
          t`Write $I = MK^2$; $K$ is the **radius of gyration**.`,
          t`It is the distance at which all the mass, put at one point, would have the same $I$.`,
          t`So $K = \sqrt{\dfrac{I}{M}}$, in metres.`,
          t`Ring: $K = R$. Disc: $K = \dfrac{R}{\sqrt{2}}$.`,
          t`$K$ depends on the shape and the axis, not on the mass: it describes how the mass is spread.`,
          t`Like the centre of mass, it lets us picture a whole body as a single point.`,
        ],
      },
    ],
    worked: {
      prompt: t`A uniform disc has mass $4\ \mathrm{kg}$ and radius $50\ \mathrm{cm}$. Find its moment of inertia about its central axis and its radius of gyration.`,
      steps: [
        t`$R = 50\ \mathrm{cm} = 0.5\ \mathrm{m}$.`,
        t`Disc about its central axis: $I = \dfrac{1}{2}MR^2$ $= \dfrac{1}{2} \times 4 \times 0.25 = 0.5\ \mathrm{kg\,m^2}$.`,
        t`$K = \sqrt{\dfrac{I}{M}} = \sqrt{\dfrac{0.5}{4}}$ $\approx 0.354\ \mathrm{m}$.`,
        t`Check: $K = \dfrac{R}{\sqrt{2}} = \dfrac{0.5}{1.414}$ $\approx 0.354\ \mathrm{m}$.`,
      ],
      answer: t`$I = 0.5\ \mathrm{kg\,m^2}$, $K \approx 0.354\ \mathrm{m}$`,
    },
    visualSpec: t`Slide beads along the spokes of a wheel and watch $I = \sum mr^2$ and the radius of gyration change, while the total mass stays fixed.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Mixes up the ring and the disc formulas.",
      remediation: t`A ring has all its mass at $R$, so $I = MR^2$. A disc spreads its mass from $0$ to $R$, so its $I$ is half that, $\dfrac{1}{2}MR^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Uses $R$ where $R^2$ belongs.`,
      remediation: t`Each bit of mass counts with the square of its distance, $I = \sum mr^2$, so $I$ is in kg m².`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Uses the diameter as the radius.",
      remediation: t`Every formula here uses the radius. Halve the diameter first: $R = \dfrac{D}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Leaves centimetres unconverted.",
      remediation: t`Convert to metres before squaring: $I$ in kg m² needs $R$ in m.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Uses the formula for the wrong axis.",
      remediation: t`About its central axis, at right angles to its face, a disc has $\dfrac{1}{2}MR^2$. The $\dfrac{1}{4}MR^2$ is about a diameter, which lies in the face.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Forgets the square root in the radius of gyration.",
      remediation: t`$I = MK^2$, so $K = \sqrt{\dfrac{I}{M}}$. For a disc that gives $K = \dfrac{R}{\sqrt{2}}$, not $\dfrac{R}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Thinks different objects must have different expressions for $I$.`,
      remediation: t`$I$ depends only on how the mass is spread about the axis. A disc and a hollow cone spread it the same way about their axes, so both have $\dfrac{1}{2}MR^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Thinks every dimension of a body enters its $I$.`,
      remediation: "Only distances from the axis count. For a block turning about an axis along its depth, the depth is parallel to the axis and drops out.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks a plane sheet is just a wide rod.",
      remediation: t`A sheet also spreads mass across its width, so about the transverse axis $I = \dfrac{M(L^2 + b^2)}{12}$, more than a rod's $\dfrac{ML^2}{12}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.1(vii)" },
      stem: t`A thin ring has mass $0.25\ \mathrm{kg}$ and radius $0.5\ \mathrm{m}$. What is its moment of inertia about an axis through its centre, perpendicular to its plane?`,
      verify: { kind: "value", inputs: { M: "0.25", R: "0.5" }, params: { ask: "ring" } },
      options: [
        { key: "A", text: t`$0.125\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C07-M2", value: "0.125000000000000" },
        { key: "B", text: t`$0.25\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C07-M3", value: "0.250000000000000" },
        { key: "C", text: t`$0.0625\ \mathrm{kg\,m^2}$`, correct: true, value: "0.0625000000000000" },
        { key: "D", text: t`$0.0312\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C07-M1", value: "0.0312000000000000" },
      ],
      solution: {
        steps: [
          t`All of the ring's mass is at $R$ from the axis, so $I = MR^2$.`,
          t`$I = 0.25 \times 0.5^2 = 0.0625\ \mathrm{kg\,m^2}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.2(viii)" },
      stem: t`A uniform disc has mass $10\ \mathrm{kg}$ and radius $60\ \mathrm{cm}$. What is its moment of inertia about the axis through its centre, perpendicular to its plane?`,
      verify: { kind: "value", inputs: { M: "10", R_cm: "60" }, params: { ask: "disc" } },
      options: [
        { key: "A", text: t`$3.6\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C07-M1", value: "3.60000000000000" },
        { key: "B", text: t`$3\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C07-M2", value: "3" },
        { key: "C", text: t`$18000\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C07-M4", value: "18000" },
        { key: "D", text: t`$1.8\ \mathrm{kg\,m^2}$`, correct: true, value: "1.80000000000000" },
      ],
      solution: {
        steps: [
          t`$R = 0.6\ \mathrm{m}$. A disc about its central axis has $I = \dfrac{1}{2}MR^2$.`,
          t`$I = \dfrac{1}{2} \times 10 \times 0.36 = 1.8\ \mathrm{kg\,m^2}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.1(i)" },
      stem: t`What is the moment of inertia of a uniform disc of mass $M$ and radius $R$ about its central axis?`,
      verify: { kind: "value", inputs: { M: "M", R: "R" }, params: { ask: "disc_formula" } },
      options: [
        { key: "A", text: t`$\dfrac{MR^2}{4}$`, correct: false, misconceptionId: "C07-M5", value: "M*R**2/4" },
        { key: "B", text: t`$\dfrac{MR^2}{2}$`, correct: true, value: "M*R**2/2" },
        { key: "C", text: t`$MR^2$`, correct: false, misconceptionId: "C07-M1", value: "M*R**2" },
        { key: "D", text: t`$\dfrac{MR}{2}$`, correct: false, misconceptionId: "C07-M2", value: "M*R/2" },
      ],
      solution: {
        steps: [
          t`Split the disc into thin rings: a ring of radius $x$ and width $dx$ has mass $\dfrac{2Mx\,dx}{R^2}$.`,
          t`$I = \displaystyle\int_0^R \dfrac{2M}{R^2}x^3\,dx = \dfrac{MR^2}{2}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.5" },
      stem: t`A uniform disc has radius $0.4\ \mathrm{m}$. What is its radius of gyration about its central axis?`,
      verify: { kind: "value", inputs: { R: "0.4" }, params: { ask: "K_disc" } },
      options: [
        { key: "A", text: t`$0.283\ \mathrm{m}$`, correct: true, value: "0.283000000000000" },
        { key: "B", text: t`$0.4\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M1", value: "0.400000000000000" },
        { key: "C", text: t`$0.566\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M3", value: "0.566000000000000" },
        { key: "D", text: t`$0.2\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M6", value: "0.200000000000000" },
      ],
      solution: {
        steps: [
          t`Disc about its central axis: $I = \dfrac{1}{2}MR^2 = MK^2$.`,
          t`So $K = \dfrac{R}{\sqrt{2}} = \dfrac{0.4}{1.414}$ $\approx 0.283\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.1 (iii)" },
      stem: t`Which statement about the expressions for moment of inertia is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`Different objects must always have different expressions`, correct: false, misconceptionId: "C07-M7", value: "each_object_its_own" },
        { key: "B", text: t`A block's expression about a transverse axis through its centre includes its depth`, correct: false, misconceptionId: "C07-M8", value: "depth_counts" },
        { key: "C", text: t`A rod and a plane sheet have the same expression about a transverse axis`, correct: false, misconceptionId: "C07-M9", value: "rod_equals_sheet" },
        { key: "D", text: t`A hollow cone and a disc have the same expression about their central axes`, correct: true, value: "cone_and_disc_alike" },
      ],
      solution: {
        steps: [
          t`$I$ depends only on how far each bit of mass is from the axis.`,
          t`About their axes, a disc and a hollow cone spread their mass the same way, so both have $I = \dfrac{1}{2}MR^2$.`,
        ],
      },
    },
  ],
};
