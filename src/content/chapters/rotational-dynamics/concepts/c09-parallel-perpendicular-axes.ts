import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A door turns about its hinges, not about its middle. Tables give a slab's moment of inertia about its centre. How do we get it about the hinge line?`,
    reveal: t`Shift the axis: $I_{hinge} = I_{centre} + Mh^2$, where $h$ is the distance between the two parallel axes.`,
  },
  explanation: {
    intuition: [
      t`Tables give $I$ about axes through a body's centre of mass.`,
      t`To turn it about a parallel axis elsewhere, add a shift term $Mh^2$.`,
      t`Moving the axis away from the centre of mass always increases $I$.`,
      t`For a flat body, the axis at right angles to it is linked to two axes in its plane.`,
      t`These two theorems give $I$ about many new axes without any new integration.`,
    ],
    formal: [
      {
        title: "Theorem of parallel axes",
        points: [
          t`Let $I_c$ be the moment of inertia about an axis through the centre of mass C.`,
          t`Take a parallel axis through O, a distance $h$ from C.`,
          t`Then $I_o = I_c + Mh^2$.`,
          t`In radii of gyration: $K_o^2 = K_c^2 + h^2$.`,
          t`It holds for every body, but one of the two axes must pass through the centre of mass.`,
          t`A rod about one end: $\dfrac{ML^2}{12} + M\left(\dfrac{L}{2}\right)^2 = \dfrac{ML^2}{3}$.`,
        ],
        figure: {
          alt: "A rod with C at its centre and O at one end. A dashed axis through C, at right angles to the rod. Then the parallel axis through O, a distance h = L/2 from C.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-2, 2] },
          elements: [
            { kind: "segment", from: [-2.4, 0], to: [2.4, 0] },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "point", at: [-2.4, 0], label: "O", labelAt: "sw" },
            { kind: "segment", from: [0, -1.6], to: [0, 1.6], dashed: true, tone: "muted" },
            { kind: "segment", from: [-2.4, -1.6], to: [-2.4, 1.6], dashed: true, tone: "good", step: 2 },
            { kind: "segment", from: [-2.4, 0.9], to: [0, 0.9], tone: "muted", label: "h = L/2", labelAt: "n", step: 2 },
          ],
        },
      },
      {
        title: "Theorem of perpendicular axes",
        points: [
          t`It applies only to a **lamina**, a flat body of negligible thickness.`,
          t`Take axes $x$ and $y$ in its plane, meeting at O, and $z$ through O at right angles to the plane.`,
          t`A particle at $(x, y)$ is $r$ from the $z$ axis, with $r^2 = x^2 + y^2$.`,
          t`Summing $mr^2 = mx^2 + my^2$ over the lamina gives $I_z = I_x + I_y$.`,
          t`A disc's diameters are all alike, so $I_x = I_y = \dfrac{1}{2}I_z = \dfrac{1}{4}MR^2$.`,
        ],
        figure: {
          alt: "A disc seen face on, centre C, where the z axis passes at right angles to the page. Then the x and y axes in its plane. Then a particle P at (x, y), a distance r from C.",
          axes: "none",
          view: { x: [-3.4, 4.2], y: [-3, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.4, tone: "muted" },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "segment", from: [-3, 0], to: [3, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [3, 0], label: "x", labelAt: "e", step: 2 },
            { kind: "segment", from: [0, -3], to: [0, 3], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [0, 3], label: "y", labelAt: "n", step: 2 },
            { kind: "point", at: [1.5, 1.1], label: "P (x, y)", labelAt: "ne", step: 3 },
            { kind: "segment", from: [0, 0], to: [1.5, 1.1], label: "r", labelAt: "nw", tone: "good", step: 3 },
            { kind: "segment", from: [1.5, 0], to: [1.5, 1.1], dashed: true, tone: "muted", step: 3 },
          ],
        },
      },
      {
        title: "Combining the two",
        points: [
          t`A disc about a tangent in its plane: start from a diameter, $\dfrac{1}{4}MR^2$.`,
          t`Shift by $h = R$ to the parallel tangent: $I = \dfrac{1}{4}MR^2 + MR^2 = \dfrac{5}{4}MR^2$.`,
          t`About a tangent at right angles to its plane: $\dfrac{1}{2}MR^2 + MR^2 = \dfrac{3}{2}MR^2$.`,
          t`Always shift from the axis through the centre, by the distance between the two axes.`,
        ],
        figure: {
          alt: "A disc seen face on with a dashed diameter through C. Then the tangent parallel to it, a distance h = R away.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-3.2, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.4, tone: "muted" },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "segment", from: [0, -3], to: [0, 3], dashed: true, step: 1 },
            { kind: "label", at: [0, 3], label: "diameter", labelAt: "n", step: 1 },
            { kind: "segment", from: [2.4, -3], to: [2.4, 3], tone: "good", step: 2 },
            { kind: "label", at: [2.4, 3], label: "tangent", labelAt: "n", step: 2 },
            { kind: "segment", from: [0, -0.6], to: [2.4, -0.6], tone: "muted", label: "h = R", labelAt: "s", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A uniform rod has mass $0.6\ \mathrm{kg}$ and length $0.8\ \mathrm{m}$. What is its moment of inertia about an axis through one end, perpendicular to the rod?`,
      steps: [
        t`About its centre: $I_c = \dfrac{ML^2}{12}$ $= \dfrac{0.6 \times 0.64}{12}$ $= 0.032\ \mathrm{kg\,m^2}$.`,
        t`The end is $h = \dfrac{L}{2} = 0.4\ \mathrm{m}$ from the centre.`,
        t`$I = I_c + Mh^2 = 0.032 + 0.6 \times 0.16$.`,
        t`$I = 0.128\ \mathrm{kg\,m^2}$; check: $\dfrac{ML^2}{3}$ $= 0.128$.`,
      ],
      answer: t`$I = 0.128\ \mathrm{kg\,m^2}$`,
      figure: {
        alt: "A rod with C at its centre and O at one end. The axis through C, then the parallel axis through O, 0.4 m away. Last, I = 0.128 kg m squared.",
        axes: "none",
        view: { x: [-3.4, 3.4], y: [-2, 2] },
        elements: [
          { kind: "segment", from: [-2.4, 0], to: [2.4, 0] },
          { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
          { kind: "point", at: [-2.4, 0], label: "O", labelAt: "sw" },
          { kind: "segment", from: [0, -1.6], to: [0, 1.6], dashed: true, tone: "muted" },
          { kind: "segment", from: [-2.4, -1.6], to: [-2.4, 1.6], dashed: true, tone: "good", step: 2 },
          { kind: "segment", from: [-2.4, 0.9], to: [0, 0.9], tone: "muted", label: "h = 0.4 m", labelAt: "n", step: 2 },
          { kind: "label", at: [0.6, -1.4], label: "I = 0.128 kg m²", labelAt: "e", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A disc seen face on, with its centre C, where an axis at right angles to the disc passes. Then a parallel axis through O, a distance h from C.",
      axes: "none",
      view: { x: [-3.4, 4.2], y: [-3, 3.6] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2.4, tone: "muted" },
        { kind: "point", at: [0, 0], label: "C", labelAt: "sw", step: 1 },
        { kind: "point", at: [1.6, 1.2], label: "O", labelAt: "ne", step: 2 },
        { kind: "segment", from: [0, 0], to: [1.6, 1.2], label: "h", labelAt: "nw", tone: "good", step: 2 },
      ],
    },
    visualSpec: t`Drag an axis across a disc and watch $I = I_c + Mh^2$ grow from its least value at the centre.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Adds $h^2$ when going towards the centre of mass.`,
      remediation: t`The axis through the centre of mass has the least $I$. Going to it, subtract: $K_c^2 = K_o^2 - h^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Uses $h$, or the lengths themselves, where their squares belong.`,
      remediation: t`The shift term is $Mh^2$, and it is the squares $K^2$ that add, not the $K$'s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Forgets the square root at the end.",
      remediation: t`The theorem gives $K^2$; take its square root to get $K$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Takes $I$ about a diameter to equal $I$ about the central axis.`,
      remediation: t`By perpendicular axes, $I_z = I_x + I_y$. A disc's diameters share $I_z$ equally, so each is $\dfrac{1}{4}MR^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Measures the shift $h$ wrongly.`,
      remediation: t`$h$ is the distance between the two parallel axes: centre to end of a rod is $\dfrac{L}{2}$, centre to tangent of a disc is $R$, and the rod's centre to a sphere's centre is $\dfrac{L}{2} + R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Leaves out the body's own $I$ about its centre.`,
      remediation: t`$I_o = I_c + Mh^2$ has two terms. A sphere is not a point, so add its own $\dfrac{2}{5}mR^2$ too.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M7",
      mistake: "Uses the formula for the wrong axis.",
      remediation: t`A rod about a perpendicular axis through its centre has $\dfrac{ML^2}{12}$; $\dfrac{ML^2}{3}$ is about an end.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.27OR" },
      stem: t`A body's radius of gyration about an axis $0.4\ \mathrm{m}$ from its centre of mass is $0.5\ \mathrm{m}$. What is its radius of gyration about a parallel axis through its centre of mass?`,
      verify: { kind: "value", inputs: { K: "0.5", h: "0.4" }, params: { ask: "Kc" } },
      options: [
        { key: "A", text: t`$0.1\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M2", value: "0.100000000000000" },
        { key: "B", text: t`$0.09\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M3", value: "0.0900000000000000" },
        { key: "C", text: t`$0.3\ \mathrm{m}$`, correct: true, value: "0.300000000000000" },
        { key: "D", text: t`$0.64\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M1", value: "0.640000000000000" },
      ],
      solution: {
        steps: [
          t`Parallel axes: $K_o^2 = K_c^2 + h^2$.`,
          t`$K_c^2 = 0.5^2 - 0.4^2 = 0.09$.`,
          t`$K_c = 0.3\ \mathrm{m}$.`,
        ],
        figure: {
          alt: "A body with its centre of mass C and a parallel axis through O, a distance h = 0.4 m away.",
          axes: "none",
          view: { x: [-3.4, 4.2], y: [-3, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.4, tone: "muted" },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "point", at: [1.6, 1.2], label: "O", labelAt: "ne", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.6, 1.2], label: "h", labelAt: "nw", tone: "good", step: 1 },
          ],
        },
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.1 (iv)" },
      stem: t`In a certain unit, a uniform disc's radius of gyration about its central axis, at right angles to its plane, is $\sqrt{2.5}$. What is its radius of gyration about a tangent in its plane, in the same unit?`,
      verify: { kind: "value", inputs: { K2: "2.5" }, params: { ask: "K_tangent" } },
      options: [
        { key: "A", text: t`$2.5$`, correct: true, value: "2.50000000000000" },
        { key: "B", text: t`$6.25$`, correct: false, misconceptionId: "C09-M3", value: "6.25000000000000" },
        { key: "C", text: t`$2.74$`, correct: false, misconceptionId: "C09-M4", value: "2.74000000000000" },
        { key: "D", text: t`$4.61$`, correct: false, misconceptionId: "C09-M5", value: "4.61000000000000" },
      ],
      solution: {
        steps: [
          t`Central axis: $K^2 = \dfrac{R^2}{2} = 2.5$, so $R^2 = 5$.`,
          t`A diameter, by perpendicular axes: $K_d^2 = \dfrac{R^2}{4} = 1.25$.`,
          t`Tangent in the plane, shifted by $R$: $K^2 = 1.25 + 5 = 6.25$, so $K = 2.5$.`,
        ],
        figure: {
          alt: "A disc face on with a dashed diameter through C and the parallel tangent a distance R away.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-3.2, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.4, tone: "muted" },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "segment", from: [0, -3], to: [0, 3], dashed: true, step: 2 },
            { kind: "label", at: [0, 3], label: "diameter", labelAt: "n", step: 2 },
            { kind: "segment", from: [2.4, -3], to: [2.4, 3], tone: "good", step: 3 },
            { kind: "label", at: [2.4, 3], label: "tangent", labelAt: "n", step: 3 },
            { kind: "segment", from: [0, -0.6], to: [2.4, -0.6], tone: "muted", label: "h = R", labelAt: "s", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Ex Q.20" },
      stem: t`A dumb-bell is a uniform rod of mass $60\ \mathrm{g}$ and length $20\ \mathrm{cm}$, with a solid sphere of mass $25\ \mathrm{g}$ and radius $10\ \mathrm{cm}$ fixed at each end. What is its moment of inertia about an axis through its centre, perpendicular to the rod?`,
      verify: { kind: "value", inputs: { M: "60", L: "20", m: "25", R: "10" }, params: { ask: "dumbbell" } },
      options: [
        { key: "A", text: t`$9000\ \mathrm{g\,cm^2}$`, correct: false, misconceptionId: "C09-M5", value: "9000" },
        { key: "B", text: t`$22000\ \mathrm{g\,cm^2}$`, correct: false, misconceptionId: "C09-M6", value: "22000" },
        { key: "C", text: t`$30000\ \mathrm{g\,cm^2}$`, correct: false, misconceptionId: "C09-M7", value: "30000" },
        { key: "D", text: t`$24000\ \mathrm{g\,cm^2}$`, correct: true, value: "24000" },
      ],
      solution: {
        steps: [
          t`Rod: $\dfrac{ML^2}{12} = \dfrac{60 \times 400}{12} = 2000\ \mathrm{g\,cm^2}$.`,
          t`Each sphere: $\dfrac{2}{5}mR^2 + md^2$ with $d = 10 + 10 = 20\ \mathrm{cm}$, giving $1000 + 10000 = 11000$.`,
          t`Total $= 2000 + 2 \times 11000 = 24000\ \mathrm{g\,cm^2}$.`,
        ],
        figure: {
          alt: "A dumb-bell: a rod with a sphere at each end, and the axis through its centre. Then the distance d = 20 cm from the axis to a sphere's centre.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-2.1, 1.9] },
          elements: [
            { kind: "segment", from: [-1, 0], to: [1, 0] },
            { kind: "circle", centre: [-2, 0], r: 1 },
            { kind: "circle", centre: [2, 0], r: 1 },
            { kind: "point", at: [2, 0], label: "centre", labelAt: "s" },
            { kind: "segment", from: [0, -1.5], to: [0, 1.5], dashed: true, tone: "muted" },
            { kind: "label", at: [0, -1.5], label: "axis", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, 1.15], to: [2, 1.15], tone: "good", label: "d = 20 cm", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/rotational-dynamics-12-phy/Solved Ex.1.7" },
      stem: t`A flywheel is a uniform disc of mass $20\ \mathrm{kg}$ and diameter $0.5\ \mathrm{m}$. What is its moment of inertia about a tangent in its plane?`,
      verify: { kind: "value", inputs: { M: "20", D: "0.5" }, params: { ask: "disc_tangent" } },
      options: [
        { key: "A", text: t`$1.56\ \mathrm{kg\,m^2}$`, correct: true, value: "1.56000000000000" },
        { key: "B", text: t`$1.88\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C09-M4", value: "1.88000000000000" },
        { key: "C", text: t`$5.31\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C09-M5", value: "5.31000000000000" },
        { key: "D", text: t`$1.25\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C09-M6", value: "1.25000000000000" },
      ],
      solution: {
        steps: [
          t`$R = 0.25\ \mathrm{m}$. About a diameter: $I_d = \dfrac{1}{4}MR^2 = 0.3125\ \mathrm{kg\,m^2}$.`,
          t`Tangent in the plane, $h = R$: $I = 0.3125 + 20 \times 0.0625$ $= 1.5625$.`,
          t`$I \approx 1.56\ \mathrm{kg\,m^2}$.`,
        ],
        figure: {
          alt: "A disc face on with a dashed diameter through C and the parallel tangent a distance R away.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-3.2, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.4, tone: "muted" },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "segment", from: [0, -3], to: [0, 3], dashed: true, step: 1 },
            { kind: "label", at: [0, 3], label: "diameter", labelAt: "n", step: 1 },
            { kind: "segment", from: [2.4, -3], to: [2.4, 3], tone: "good", step: 2 },
            { kind: "label", at: [2.4, 3], label: "tangent", labelAt: "n", step: 2 },
            { kind: "segment", from: [0, -0.6], to: [2.4, -0.6], tone: "muted", label: "h = R", labelAt: "s", step: 2 },
          ],
        },
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.18" },
      stem: t`A uniform rod of mass $0.3\ \mathrm{kg}$ and length $1\ \mathrm{m}$ turns about an axis through one end, perpendicular to the rod. What is its moment of inertia?`,
      verify: { kind: "value", inputs: { M: "0.3", L: "1" }, params: { ask: "rod_end" } },
      options: [
        { key: "A", text: t`$0.325\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C09-M5", value: "0.325000000000000" },
        { key: "B", text: t`$0.075\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C09-M6", value: "0.0750000000000000" },
        { key: "C", text: t`$0.1\ \mathrm{kg\,m^2}$`, correct: true, value: "0.100000000000000" },
        { key: "D", text: t`$0.175\ \mathrm{kg\,m^2}$`, correct: false, misconceptionId: "C09-M2", value: "0.175000000000000" },
      ],
      solution: {
        steps: [
          t`About the centre: $\dfrac{ML^2}{12} = \dfrac{0.3 \times 1}{12} = 0.025\ \mathrm{kg\,m^2}$.`,
          t`The end is $h = 0.5\ \mathrm{m}$ away: $I = 0.025 + 0.3 \times 0.25 = 0.1\ \mathrm{kg\,m^2}$.`,
        ],
        figure: {
          alt: "A rod with C at its centre and O at one end, with the parallel axes through them 0.5 m apart.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-2, 2] },
          elements: [
            { kind: "segment", from: [-2.4, 0], to: [2.4, 0] },
            { kind: "point", at: [0, 0], label: "C", labelAt: "sw" },
            { kind: "point", at: [-2.4, 0], label: "O", labelAt: "sw" },
            { kind: "segment", from: [0, -1.6], to: [0, 1.6], dashed: true, tone: "muted" },
            { kind: "segment", from: [-2.4, -1.6], to: [-2.4, 1.6], dashed: true, tone: "good", step: 2 },
            { kind: "segment", from: [-2.4, 0.9], to: [0, 0.9], tone: "muted", label: "h = 0.5 m", labelAt: "n", step: 2 },
          ],
        },
      },
    },
  ],
};
