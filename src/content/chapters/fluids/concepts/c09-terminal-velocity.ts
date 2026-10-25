import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A raindrop falls from a cloud more than a kilometre up, yet lands gently. Why doesn't it keep speeding up all the way down?`,
    reveal: t`Air drag grows with speed. Soon the drag and the upthrust balance the drop's weight, and it falls at a steady **terminal velocity**.`,
  },
  explanation: {
    intuition: [
      t`A ball let go in a fluid speeds up at first, pulled by its weight.`,
      t`The fluid's drag on it grows as it goes faster.`,
      t`The fluid also pushes up with an **upthrust**, the weight of the fluid it pushes aside.`,
      t`Soon drag plus upthrust equal the weight: no net force, so no more speeding up.`,
      t`It then falls at a steady **terminal velocity**.`,
    ],
    formal: [
      {
        title: "Stokes' law",
        points: [
          t`A small sphere of radius $r$ moving at $v$ through a fluid of viscosity $\eta$ feels a drag $F = 6\pi\eta rv$.`,
          t`The drag points opposite to the motion.`,
          t`It holds for slow, streamline flow past small spheres, such as raindrops and dust.`,
          t`Doubling either $r$ or $v$ doubles the drag.`,
        ],
        figure: {
          alt: "A sphere moving down through a fluid at speed v. The viscous drag 6 pi eta r v points up, against the motion.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
            { kind: "circle", centre: [0, 0], r: 0.7 },
            { kind: "point", at: [0, 0] },
            { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 1 },
            { kind: "vector", from: [-1.8, 0.6], to: [-1.8, -0.6], label: "v", labelAt: "w", tone: "good", step: 1 },
          ],
        },
      },
      {
        title: "Terminal velocity",
        points: [
          t`Weight: $\dfrac{4}{3}\pi r^3\rho g$, where $\rho$ is the sphere's density.`,
          t`Upthrust: $\dfrac{4}{3}\pi r^3\sigma g$, where $\sigma$ is the fluid's density.`,
          t`At terminal velocity, weight = upthrust + drag.`,
          t`So $v_t = \dfrac{2}{9}\dfrac{r^2(\rho - \sigma)g}{\eta}$.`,
          t`$v_t \propto r^2$: a hailstone of 4 times the radius falls 16 times as fast.`,
          t`If $\sigma > \rho$, as for an air bubble in water, $v_t$ comes out negative: the bubble rises.`,
        ],
        figure: {
          alt: "A sphere falling at its terminal velocity: its weight down, and the upthrust and the drag up, all balanced.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
            { kind: "circle", centre: [0, 0], r: 0.7 },
            { kind: "point", at: [0, 0] },
            { kind: "vector", from: [0, -0.7], to: [0, -1.9], label: "weight", labelAt: "e", step: 1 },
            { kind: "vector", from: [-0.35, 0.62], to: [-0.35, 1.5], label: "upthrust", labelAt: "w", step: 2 },
            { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "Reaching terminal velocity",
        points: [
          t`At first the speed rises quickly, while the drag is still small.`,
          t`As the drag grows, the acceleration gets smaller.`,
          t`The speed levels off at $v_t$, where the net force is zero.`,
        ],
        figure: {
          alt: "A graph of speed against time for a sphere let go from rest in a fluid: the speed rises quickly at first, then levels off. Last, a dashed line marks the terminal velocity.",
          chart: { x: 1, y: 0.5, xTitle: "t", yTitle: "v" },
          view: { x: [0, 6], y: [0, 1.3] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.1, 0.095], [0.2, 0.181], [0.3, 0.259], [0.4, 0.33], [0.5, 0.393], [0.6, 0.451], [0.7, 0.503], [0.8, 0.551], [0.9, 0.593], [1, 0.632], [1.1, 0.667], [1.2, 0.699], [1.3, 0.727], [1.4, 0.753], [1.5, 0.777], [1.6, 0.798], [1.7, 0.817], [1.8, 0.835], [1.9, 0.85], [2, 0.865], [2.1, 0.878], [2.2, 0.889], [2.3, 0.9], [2.4, 0.909], [2.5, 0.918], [2.6, 0.926], [2.7, 0.933], [2.8, 0.939], [2.9, 0.945], [3, 0.95], [3.1, 0.955], [3.2, 0.959], [3.3, 0.963], [3.4, 0.967], [3.5, 0.97], [3.6, 0.973], [3.7, 0.975], [3.8, 0.978], [3.9, 0.98], [4, 0.982], [4.1, 0.983], [4.2, 0.985], [4.3, 0.986], [4.4, 0.988], [4.5, 0.989], [4.6, 0.99], [4.7, 0.991], [4.8, 0.992], [4.9, 0.993], [5, 0.993], [5.1, 0.994], [5.2, 0.994], [5.3, 0.995], [5.4, 0.995], [5.5, 0.996], [5.6, 0.996], [5.7, 0.997], [5.8, 0.997], [5.9, 0.997], [6, 0.998]], step: 1 },
            { kind: "segment", from: [0, 1], to: [6, 1], dashed: true, tone: "muted", step: 3 },
            { kind: "label", at: [4.2, 1], label: "terminal velocity", labelAt: "n", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A water droplet of radius $0.01\ \mathrm{mm}$ falls through air, of viscosity $1.8 \times 10^{-5}\ \mathrm{N\,s/m^2}$. Taking $\rho = 1000\ \mathrm{kg/m^3}$, $g = 9.8\ \mathrm{m/s^2}$ and the air's upthrust as negligible, find its terminal velocity.`,
      steps: [
        t`$r = 10^{-5}\ \mathrm{m}$; air is so much lighter than water that its upthrust can be left out.`,
        t`Weight = drag: $\dfrac{4}{3}\pi r^3\rho g = 6\pi\eta rv_t$.`,
        t`$v_t = \dfrac{2}{9}\dfrac{r^2\rho g}{\eta}$ $= \dfrac{2 \times 10^{-10} \times 1000 \times 9.8}{9 \times 1.8 \times 10^{-5}}$.`,
        t`$v_t \approx 0.0121\ \mathrm{m/s}$.`,
      ],
      answer: t`$v_t \approx 0.0121\ \mathrm{m/s}$`,
      figure: {
        alt: "A water droplet falling through air: its weight down balanced by the drag up; the tiny upthrust is left out.",
        axes: "none",
        view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
        elements: [
          { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
          { kind: "circle", centre: [0, 0], r: 0.7 },
          { kind: "point", at: [0, 0] },
          { kind: "vector", from: [0, -0.7], to: [0, -1.9], label: "weight", labelAt: "e", step: 2 },
          { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 2 },
          { kind: "vector", from: [-1.8, 0.6], to: [-1.8, -0.6], label: "v", labelAt: "w", tone: "good", step: 1 },
        ],
      },
    },
    figure: {
      alt: "A small sphere in a fluid, moving down. First its weight, down. Then the viscous drag, up. Then the upthrust, also up.",
      axes: "none",
      view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
      elements: [
        { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
        { kind: "circle", centre: [0, 0], r: 0.7 },
        { kind: "point", at: [0, 0] },
        { kind: "vector", from: [0, -0.7], to: [0, -1.9], label: "weight", labelAt: "e", step: 1 },
        { kind: "vector", from: [-0.35, 0.62], to: [-0.35, 1.5], label: "upthrust", labelAt: "w", step: 3 },
        { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 2 },
        { kind: "vector", from: [-1.8, 0.6], to: [-1.8, -0.6], label: "v", labelAt: "w", tone: "good", step: 1 },
      ],
    },
    visualSpec: t`Drop spheres of different sizes into a tall jar of glycerin and watch each speed up and level off, the bigger ones at higher terminal velocities.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Drops the $6\pi$ from Stokes' law.`,
      remediation: t`Stokes' law is $F = 6\pi\eta rv$; the $6\pi$ comes from the sphere's shape.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Leaves millimetres unconverted.",
      remediation: t`Divide millimetres by 1000 to get metres before using $6\pi\eta rv$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Uses $r^2$ in Stokes' law.`,
      remediation: t`The drag goes as $r$: $F = 6\pi\eta rv$. It is the terminal velocity that goes as $r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Uses the diameter as the radius.",
      remediation: t`Halve the diameter first: $r = \dfrac{d}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Thinks the terminal velocity grows in proportion to the radius.",
      remediation: t`The weight grows as $r^3$ but the drag only as $r$, so $v_t \propto r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Thinks the terminal velocity grows as $r^3$, like the weight.`,
      remediation: t`The drag grows with $r$ too, cancelling one power: $v_t \propto \dfrac{r^3}{r} = r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Thinks all spheres reach the same terminal velocity.",
      remediation: t`Bigger spheres fall faster: $v_t \propto r^2$, so radii in the ratio 1 : 4 give speeds 1 : 16.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Ignores the upthrust, leaving out the fluid's density.",
      remediation: t`The fluid pushes up with $\dfrac{4}{3}\pi r^3\sigma g$, so use $\rho - \sigma$. Leave $\sigma$ out only when the fluid is far lighter, as air is for a raindrop.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: t`Uses $r$ where $r^2$ belongs in the terminal velocity.`,
      remediation: t`$v_t = \dfrac{2}{9}\dfrac{r^2(\rho - \sigma)g}{\eta}$: square the radius.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: t`Swaps $\dfrac{2}{9}$ for $\dfrac{9}{2}$.`,
      remediation: t`From $\dfrac{4}{3}\pi r^3(\rho - \sigma)g = 6\pi\eta rv_t$: $v_t = \dfrac{4}{18}\dfrac{r^2(\rho - \sigma)g}{\eta} = \dfrac{2}{9}\dfrac{r^2(\rho - \sigma)g}{\eta}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Solved Ex.2.8" },
      stem: t`A steel ball of radius $0.3\ \mathrm{mm}$ is falling at $2\ \mathrm{m/s}$ through glycerin, of coefficient of viscosity $0.833\ \mathrm{N\,s/m^2}$. What viscous force acts on it?`,
      verify: { kind: "value", inputs: { r_mm: "0.3", v: "2", eta: "0.833" }, params: { ask: "stokes" } },
      options: [
        { key: "A", text: t`$9.42\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M2", value: "9.42000000000000" },
        { key: "B", text: t`$2.83 \times 10^{-6}\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M3", value: "2.83000000000000e-6" },
        { key: "C", text: t`$0.00942\ \mathrm{N}$`, correct: true, value: "0.00942000000000000" },
        { key: "D", text: t`$5 \times 10^{-4}\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M1", value: "0.000500000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 3 \times 10^{-4}\ \mathrm{m}$, and $F = 6\pi\eta rv$.`,
          t`$F = 6\pi \times 0.833 \times 3 \times 10^{-4} \times 2$ $\approx 9.42 \times 10^{-3}\ \mathrm{N}$.`,
        ],
        figure: {
          alt: "A ball moving down through glycerin, with the drag pointing up.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
            { kind: "circle", centre: [0, 0], r: 0.7 },
            { kind: "point", at: [0, 0] },
            { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 1 },
            { kind: "vector", from: [-1.8, 0.6], to: [-1.8, -0.6], label: "v", labelAt: "w", tone: "good", step: 1 },
          ],
        },
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.12" },
      stem: t`A raindrop of diameter $1\ \mathrm{mm}$ falls at a steady $2\ \mathrm{m/s}$ through air, of coefficient of viscosity $1.8 \times 10^{-5}\ \mathrm{N\,s/m^2}$. What viscous force acts on it?`,
      verify: { kind: "value", inputs: { d_mm: "1", v: "2", eta: "1.8e-5" }, params: { ask: "stokes" } },
      options: [
        { key: "A", text: t`$3.39 \times 10^{-7}\ \mathrm{N}$`, correct: true, value: "3.39000000000000e-7" },
        { key: "B", text: t`$1.8 \times 10^{-8}\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M1", value: "1.80000000000000e-8" },
        { key: "C", text: t`$3.39 \times 10^{-4}\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M2", value: "0.000339000000000000" },
        { key: "D", text: t`$6.79 \times 10^{-7}\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M4", value: "6.79000000000000e-7" },
      ],
      solution: {
        steps: [
          t`$r = 0.5\ \mathrm{mm} = 5 \times 10^{-4}\ \mathrm{m}$.`,
          t`$F = 6\pi \times 1.8 \times 10^{-5} \times 5 \times 10^{-4} \times 2$ $\approx 3.39 \times 10^{-7}\ \mathrm{N}$.`,
        ],
        figure: {
          alt: "A raindrop falling through air, with the drag pointing up.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
            { kind: "circle", centre: [0, 0], r: 0.7 },
            { kind: "point", at: [0, 0] },
            { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 1 },
            { kind: "vector", from: [-1.8, 0.6], to: [-1.8, -0.6], label: "v", labelAt: "w", tone: "good", step: 1 },
          ],
        },
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.1 (iv)" },
      stem: t`Two hailstones with radii in the ratio $1 : 4$ fall from a great height through the air. What is the ratio of their terminal velocities?`,
      verify: { kind: "value", inputs: { k: "1/4" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1 : 4$`, correct: false, misconceptionId: "C09-M5", value: "1/4" },
        { key: "B", text: t`$1 : 64$`, correct: false, misconceptionId: "C09-M6", value: "1/64" },
        { key: "C", text: t`$1 : 1$`, correct: false, misconceptionId: "C09-M7", value: "1" },
        { key: "D", text: t`$1 : 16$`, correct: true, value: "1/16" },
      ],
      solution: {
        steps: [
          t`For the same material falling through air, $v_t \propto r^2$.`,
          t`Radii $1 : 4$ give terminal velocities $1 : 16$.`,
        ],
        figure: {
          alt: "Speed against time for a falling hailstone, levelling off at its terminal velocity.",
          chart: { x: 1, y: 0.5, xTitle: "t", yTitle: "v" },
          view: { x: [0, 6], y: [0, 1.3] },
          elements: [
            { kind: "curve", points: [[0, 0], [0.1, 0.095], [0.2, 0.181], [0.3, 0.259], [0.4, 0.33], [0.5, 0.393], [0.6, 0.451], [0.7, 0.503], [0.8, 0.551], [0.9, 0.593], [1, 0.632], [1.1, 0.667], [1.2, 0.699], [1.3, 0.727], [1.4, 0.753], [1.5, 0.777], [1.6, 0.798], [1.7, 0.817], [1.8, 0.835], [1.9, 0.85], [2, 0.865], [2.1, 0.878], [2.2, 0.889], [2.3, 0.9], [2.4, 0.909], [2.5, 0.918], [2.6, 0.926], [2.7, 0.933], [2.8, 0.939], [2.9, 0.945], [3, 0.95], [3.1, 0.955], [3.2, 0.959], [3.3, 0.963], [3.4, 0.967], [3.5, 0.97], [3.6, 0.973], [3.7, 0.975], [3.8, 0.978], [3.9, 0.98], [4, 0.982], [4.1, 0.983], [4.2, 0.985], [4.3, 0.986], [4.4, 0.988], [4.5, 0.989], [4.6, 0.99], [4.7, 0.991], [4.8, 0.992], [4.9, 0.993], [5, 0.993], [5.1, 0.994], [5.2, 0.994], [5.3, 0.995], [5.4, 0.995], [5.5, 0.996], [5.6, 0.996], [5.7, 0.997], [5.8, 0.997], [5.9, 0.997], [6, 0.998]], step: 1 },
            { kind: "segment", from: [0, 1], to: [6, 1], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [4.2, 1], label: "terminal velocity", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/fluids-12-phy/Ex Q.14" },
      stem: t`An air bubble $0.4\ \mathrm{mm}$ in diameter rises through a liquid of viscosity $0.1\ \mathrm{N\,s/m^2}$ and density $900\ \mathrm{kg/m^3}$. The density of air is $1.29\ \mathrm{kg/m^3}$ and $g = 9.8\ \mathrm{m/s^2}$. At what steady speed does it rise?`,
      verify: { kind: "value", inputs: { d_mm: "0.4", eta: "0.1", rho: "1.29", sigma: "900", g: "9.8" }, params: { ask: "vt" } },
      options: [
        { key: "A", text: t`$7.83 \times 10^{-4}\ \mathrm{m/s}$`, correct: true, value: "0.000783000000000000" },
        { key: "B", text: t`$0.00313\ \mathrm{m/s}$`, correct: false, misconceptionId: "C09-M4", value: "0.00313000000000000" },
        { key: "C", text: t`$1.12 \times 10^{-6}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C09-M8", value: "1.12000000000000e-6" },
        { key: "D", text: t`$3.91\ \mathrm{m/s}$`, correct: false, misconceptionId: "C09-M9", value: "3.91000000000000" },
      ],
      solution: {
        steps: [
          t`$r = 2 \times 10^{-4}\ \mathrm{m}$, $\rho = 1.29\ \mathrm{kg/m^3}$, $\sigma = 900\ \mathrm{kg/m^3}$.`,
          t`$v_t = \dfrac{2}{9}\dfrac{r^2(\rho - \sigma)g}{\eta} = \dfrac{2 \times 4 \times 10^{-8} \times (-898.7) \times 9.8}{0.9}$.`,
          t`$v_t \approx -7.83 \times 10^{-4}\ \mathrm{m/s}$: the bubble rises at $7.83 \times 10^{-4}\ \mathrm{m/s}$.`,
        ],
        figure: {
          alt: "An air bubble rising through a liquid: the upthrust up, its weight and the drag down.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
            { kind: "circle", centre: [0, 0], r: 0.7 },
            { kind: "point", at: [0, 0] },
            { kind: "vector", from: [0, -0.7], to: [0, -1.9], label: "weight", labelAt: "w", step: 1 },
            { kind: "vector", from: [-0.35, 0.62], to: [-0.35, 1.5], label: "upthrust", labelAt: "w", step: 1 },
            { kind: "vector", from: [0.35, -0.62], to: [0.35, -1.7], label: "drag", labelAt: "e", tone: "bad", step: 2 },
            { kind: "vector", from: [1.6, -0.4], to: [1.6, 0.8], label: "v", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.21" },
      stem: t`A steel ball of radius $1\ \mathrm{mm}$ and density $7800\ \mathrm{kg/m^3}$ falls through glycerin of density $1260\ \mathrm{kg/m^3}$ and viscosity $0.833\ \mathrm{N\,s/m^2}$. Taking $g = 9.8\ \mathrm{m/s^2}$, what is its terminal velocity?`,
      verify: { kind: "value", inputs: { r_mm: "1", eta: "0.833", rho: "7800", sigma: "1260", g: "9.8" }, params: { ask: "vt" } },
      options: [
        { key: "A", text: t`$17.1\ \mathrm{m/s}$`, correct: false, misconceptionId: "C09-M9", value: "17.1000000000000" },
        { key: "B", text: t`$0.346\ \mathrm{m/s}$`, correct: false, misconceptionId: "C09-M10", value: "0.346000000000000" },
        { key: "C", text: t`$0.0171\ \mathrm{m/s}$`, correct: true, value: "0.0171000000000000" },
        { key: "D", text: t`$0.0204\ \mathrm{m/s}$`, correct: false, misconceptionId: "C09-M8", value: "0.0204000000000000" },
      ],
      solution: {
        steps: [
          t`$v_t = \dfrac{2}{9}\dfrac{r^2(\rho - \sigma)g}{\eta}$, with $\rho - \sigma = 6540\ \mathrm{kg/m^3}$.`,
          t`$v_t = \dfrac{2 \times 10^{-6} \times 6540 \times 9.8}{9 \times 0.833}$ $\approx 0.0171\ \mathrm{m/s}$.`,
        ],
        figure: {
          alt: "A steel ball falling through glycerin at its terminal velocity: weight down, upthrust and drag up.",
          axes: "none",
          view: { x: [-3.6, 3.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "region", tone: "muted", within: [{ kind: "halfPlane", through: [[-3.2, -2.6], [3.2, -2.6]] }, { kind: "halfPlane", through: [[3.2, -2.6], [3.2, 2.6]] }, { kind: "halfPlane", through: [[3.2, 2.6], [-3.2, 2.6]] }, { kind: "halfPlane", through: [[-3.2, 2.6], [-3.2, -2.6]] }] },
            { kind: "circle", centre: [0, 0], r: 0.7 },
            { kind: "point", at: [0, 0] },
            { kind: "vector", from: [0, -0.7], to: [0, -1.9], label: "weight", labelAt: "e", step: 1 },
            { kind: "vector", from: [-0.35, 0.62], to: [-0.35, 1.5], label: "upthrust", labelAt: "w", step: 1 },
            { kind: "vector", from: [0.35, 0.62], to: [0.35, 1.9], label: "drag 6πηrv", labelAt: "e", tone: "bad", step: 1 },
          ],
        },
      },
    },
  ],
};
