import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A cheap magnifying glass shows coloured fringes round the letters, and the edges of the page look blurred. A good camera lens shows neither. What has the camera maker fixed?`,
    reveal: t`Two **defects** of a simple lens: **chromatic aberration**, which makes the colour fringes, and **spherical aberration**, which blurs the image. Camera lenses combine several lenses to cancel both.`,
  },
  explanation: {
    intuition: [
      t`The lens formulae assume one colour of light and rays close to the axis.`,
      t`Glass bends violet more than red, so each colour has its own focus: **chromatic aberration**.`,
      t`A mirror reflects every colour alike, so it has no chromatic aberration.`,
      t`Rays far from the axis also meet nearer the lens than those close to it: **spherical aberration**.`,
    ],
    formal: [
      {
        title: "Chromatic aberration",
        points: [
          t`For each colour, $\dfrac{1}{f}$ $= (n - 1)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)$; since $n_V > n_R$, $f_V < f_R$.`,
          t`**Longitudinal chromatic aberration** is the gap between the two foci, $f_R - f_V$.`,
          t`A combination free of it for two colours is **achromatic**.`,
          t`A convex and a concave lens in contact are achromatic when $\dfrac{\omega_1}{f_1} + \dfrac{\omega_2}{f_2}$ $= 0$.`,
          t`Since $\omega$ is always positive, one lens must be converging and the other diverging, of different glasses.`,
        ],
      },
      {
        title: "Spherical aberration",
        points: [
          t`Rays near the edge of a lens, **marginal rays**, meet nearer the lens than **paraxial rays** close to the axis.`,
          t`This **spherical aberration** blurs the image; it happens even with light of one colour, and with spherical mirrors too.`,
          t`The cheapest cure: a plano-convex lens with its curved face towards the incident rays.`,
          t`Other cures: stopping down the aperture, a suitable ratio of radii, or two lenses with a proper gap.`,
        ],
        figure: {
          alt: "Spherical aberration of a convex lens: rays near the edge (marginal rays) meet nearer the lens than rays close to the axis (paraxial rays).",
          axes: "none",
          view: { x: [-5.4, 6.8], y: [-2.6, 2.6] },
          elements: [
            { kind: "segment", from: [-5.2, 0], to: [6.2, 0], tone: "muted", dashed: true },
            { kind: "curve", points: [[0, 2.2], [0.1055, 1.925], [0.1969, 1.65], [0.2742, 1.375], [0.3375, 1.1], [0.3867, 0.825], [0.4219, 0.55], [0.443, 0.275], [0.45, 0], [0.443, -0.275], [0.4219, -0.55], [0.3867, -0.825], [0.3375, -1.1], [0.2742, -1.375], [0.1969, -1.65], [0.1055, -1.925], [0, -2.2], [-0.1055, -1.925], [-0.1969, -1.65], [-0.2742, -1.375], [-0.3375, -1.1], [-0.3867, -0.825], [-0.4219, -0.55], [-0.443, -0.275], [-0.45, 0], [-0.443, 0.275], [-0.4219, 0.55], [-0.3867, 0.825], [-0.3375, 1.1], [-0.2742, 1.375], [-0.1969, 1.65], [-0.1055, 1.925], [0, 2.2]] },
            { kind: "vector", from: [-4.8, 1.8], to: [0, 1.8], tone: "muted" },
            { kind: "segment", from: [0, 1.8], to: [3.4, -0.5538], tone: "bad" },
            { kind: "vector", from: [-4.8, -1.8], to: [0, -1.8], tone: "muted" },
            { kind: "segment", from: [0, -1.8], to: [3.4, 0.5538], tone: "bad" },
            { kind: "vector", from: [-4.8, 0.5], to: [0, 0.5], tone: "muted" },
            { kind: "segment", from: [0, 0.5], to: [4.6, -0.1053], tone: "accent" },
            { kind: "vector", from: [-4.8, -0.5], to: [0, -0.5], tone: "muted" },
            { kind: "segment", from: [0, -0.5], to: [4.6, 0.1053], tone: "accent" },
            { kind: "point", at: [2.6, 0], tone: "bad" },
            { kind: "segment", from: [2.6, -0.22], to: [2.6, -1.7], dashed: true, tone: "muted" },
            { kind: "label", at: [2.6, -1.7], label: "marginal focus", labelAt: "s", tone: "bad" },
            { kind: "point", at: [3.8, 0], tone: "accent" },
            { kind: "segment", from: [3.8, 0.22], to: [3.8, 1.7], dashed: true, tone: "muted" },
            { kind: "label", at: [3.8, 1.7], label: "paraxial focus", labelAt: "n", tone: "accent" },
          ],
        },
      },
      {
        title: "Other defects",
        points: [
          t`Objects far off the axis give images spoilt by **coma**, **astigmatism**, **curvature** and **distortion**.`,
          t`Mirrors share these, and spherical aberration, but never chromatic aberration.`,
        ],
      },
    ],
    worked: {
      prompt: t`A thin equiconvex lens has radii of curvature $20\ \mathrm{cm}$, and its glass has $n_R = 1.51$, $n_V = 1.53$. Find its longitudinal chromatic aberration.`,
      steps: [
        t`$R_1 = +20\ \mathrm{cm}$, $R_2 = -20\ \mathrm{cm}$, so $\dfrac{1}{R_1} - \dfrac{1}{R_2}$ $= \dfrac{2}{20}$ $= 0.1\ \mathrm{cm^{-1}}$.`,
        t`$f_R = \dfrac{1}{0.51 \times 0.1}$ $\approx 19.61\ \mathrm{cm}$; $f_V = \dfrac{1}{0.53 \times 0.1}$ $\approx 18.87\ \mathrm{cm}$.`,
        t`Chromatic aberration $= f_R - f_V$ $\approx 0.74\ \mathrm{cm}$; violet focuses nearer the lens.`,
      ],
      answer: t`About $0.74\ \mathrm{cm}$`,
    },
    figure: {
      alt: "Chromatic aberration of a convex lens. Step 1: white light parallel to the axis. Step 2: violet, bent most, comes to a focus nearer the lens than red.",
      axes: "none",
      view: { x: [-5.4, 6.4], y: [-2.4, 2.4] },
      elements: [
        { kind: "segment", from: [-5.2, 0], to: [6.2, 0], tone: "muted", dashed: true },
        { kind: "curve", points: [[0, 2], [0.0938, 1.75], [0.175, 1.5], [0.2438, 1.25], [0.3, 1], [0.3438, 0.75], [0.375, 0.5], [0.3938, 0.25], [0.4, 0], [0.3938, -0.25], [0.375, -0.5], [0.3438, -0.75], [0.3, -1], [0.2438, -1.25], [0.175, -1.5], [0.0938, -1.75], [0, -2], [-0.0938, -1.75], [-0.175, -1.5], [-0.2438, -1.25], [-0.3, -1], [-0.3438, -0.75], [-0.375, -0.5], [-0.3938, -0.25], [-0.4, 0], [-0.3938, 0.25], [-0.375, 0.5], [-0.3438, 0.75], [-0.3, 1], [-0.2438, 1.25], [-0.175, 1.5], [-0.0938, 1.75], [0, 2]] },
        { kind: "vector", from: [-4.8, 1.4], to: [0, 1.4], tone: "muted", step: 1 },
        { kind: "vector", from: [-4.8, -1.4], to: [0, -1.4], tone: "muted", step: 1 },
        { kind: "segment", from: [0, 1.4], to: [3.9, -0.42], tone: "accent", step: 2 },
        { kind: "segment", from: [0, 1.4], to: [5.1, -0.3], tone: "bad", step: 2 },
        { kind: "segment", from: [0, -1.4], to: [3.9, 0.42], tone: "accent", step: 2 },
        { kind: "segment", from: [0, -1.4], to: [5.1, 0.3], tone: "bad", step: 2 },
        { kind: "point", at: [3, 0], tone: "accent", step: 2 },
        { kind: "segment", from: [3, -0.22], to: [3, -1.6], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [3, -1.6], label: "violet", labelAt: "s", tone: "accent", step: 2 },
        { kind: "point", at: [4.2, 0], tone: "bad", step: 2 },
        { kind: "segment", from: [4.2, 0.22], to: [4.2, 1.6], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [4.2, 1.6], label: "red", labelAt: "n", tone: "bad", step: 2 },
      ],
    },
    visualSpec: t`Switch a lens's light from white to one colour and narrow its aperture, and watch the coloured fringes and the blur disappear in turn.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Gives $R_2$ the wrong sign for the lens's shape.`,
      remediation: t`Double convex: centres on opposite sides, $R_1 > 0 > R_2$. A meniscus: both centres on one side, same sign.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M2",
      mistake: t`Uses $n$ in place of $n - 1$ in the lens maker's equation.`,
      remediation: t`$\dfrac{1}{f}$ $= (n - 1)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)$ for each colour.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M3",
      mistake: "Inverts the difference of the two powers instead of subtracting the focal lengths.",
      remediation: t`Find $f_R$ and $f_V$ separately, then subtract: the aberration is $f_R - f_V$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks spherical aberration needs refraction, so mirrors are free of it.",
      remediation: "Spherical aberration comes from the spherical shape: marginal rays reflect to a nearer focus too.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks a mirror suffers from every defect a lens does.",
      remediation: "Reflection does not depend on colour, so a mirror has no chromatic aberration.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks a spherical mirror forms perfect images.",
      remediation: "A spherical mirror still suffers spherical aberration, coma and the off-axis defects.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Turns the flat face of a plano-convex lens towards the incident rays.",
      remediation: "With the curved face towards the rays, the bending is shared between both faces, which keeps spherical aberration small.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks a wider aperture gives a sharper image.",
      remediation: "A wider aperture lets in more marginal rays, which increases spherical aberration.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks a thicker, more curved lens reduces aberration.",
      remediation: "Strongly curved, thick lenses make both aberrations worse.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Takes the second lens of an achromatic pair as converging too.",
      remediation: t`$\dfrac{\omega_1}{f_1} + \dfrac{\omega_2}{f_2}$ $= 0$ with both $\omega$ positive needs $f_2$ of opposite sign: a concave lens.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Inverts the ratio of the dispersive powers.",
      remediation: t`$f_2$ $= -\dfrac{\omega_2}{\omega_1}f_1$: the more dispersive glass needs the longer focal length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: t`Thinks the second lens must cancel the first, $f_2 = -f_1$.`,
      remediation: t`Equal and opposite lenses cancel the power as well; achromatism cancels only the dispersion: $\dfrac{\omega_1}{f_1} + \dfrac{\omega_2}{f_2}$ $= 0$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.3 (xi)" },
      stem: t`The refractive index of a flint glass varies from $1.60$ (red) to $1.66$ (violet). A thin double convex lens of this glass has radii of curvature $10\ \mathrm{cm}$ and $15\ \mathrm{cm}$. What is its longitudinal chromatic aberration between these colours?`,
      verify: { kind: "value", inputs: { nR: "1.60", nV: "1.66", R1: "10", R2: "-15" }, params: { ask: "chrom" } },
      options: [
        { key: "A", text: t`$0.136\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M2", value: "0.136000000000000" },
        { key: "B", text: t`$100\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M3", value: "100" },
        { key: "C", text: t`$0.909\ \mathrm{cm}$`, correct: true, value: "0.909000000000000" },
        { key: "D", text: t`$4.55\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M1", value: "4.55000000000000" },
      ],
      solution: {
        steps: [
          t`$R_1 = +10\ \mathrm{cm}$, $R_2 = -15\ \mathrm{cm}$: $\dfrac{1}{10} + \dfrac{1}{15}$ $= \dfrac{1}{6}\ \mathrm{cm^{-1}}$.`,
          t`$f_R = \dfrac{6}{0.60}$ $= 10\ \mathrm{cm}$; $f_V = \dfrac{6}{0.66}$ $\approx 9.09\ \mathrm{cm}$.`,
          t`$f_R - f_V = \dfrac{10}{11}$ $\approx 0.909\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Solved Ex.9.11" },
      stem: t`A concavo-convex spectacle lens has surfaces of radii of curvature $10\ \mathrm{cm}$ and $40\ \mathrm{cm}$, both centres on the same side. Its crown glass has refractive index $1.51$ for red and $1.53$ for violet. What is its longitudinal chromatic aberration?`,
      verify: { kind: "value", inputs: { nR: "1.51", nV: "1.53", R1: "10", R2: "40" }, params: { ask: "chrom" } },
      options: [
        { key: "A", text: t`$0.592\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M1", value: "0.592000000000000" },
        { key: "B", text: t`$0.115\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M2", value: "0.115000000000000" },
        { key: "C", text: t`$667\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M3", value: "667" },
        { key: "D", text: t`$0.987\ \mathrm{cm}$`, correct: true, value: "0.987000000000000" },
      ],
      solution: {
        steps: [
          t`Both radii positive: $\dfrac{1}{10} - \dfrac{1}{40}$ $= 0.075\ \mathrm{cm^{-1}}$.`,
          t`$f_R = \dfrac{1}{0.51 \times 0.075}$ $\approx 26.14\ \mathrm{cm}$; $f_V = \dfrac{1}{0.53 \times 0.075}$ $\approx 25.16\ \mathrm{cm}$.`,
          t`$f_R - f_V \approx 0.987\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.1 (v)" },
      stem: t`Which of these defects does a spherical mirror NOT suffer from?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mirror" } },
      options: [
        { key: "A", text: t`All of them: a mirror forms perfect images`, correct: false, misconceptionId: "C07-M6", value: "all_free" },
        { key: "B", text: t`Chromatic aberration`, correct: true, value: "chromatic" },
        { key: "C", text: t`Spherical aberration`, correct: false, misconceptionId: "C07-M4", value: "spherical" },
        { key: "D", text: t`None of them: a mirror suffers from every defect a lens does`, correct: false, misconceptionId: "C07-M5", value: "none_free" },
      ],
      solution: {
        steps: [
          t`Chromatic aberration comes from $n$ changing with colour, in refraction.`,
          t`A mirror only reflects, the same for every colour, so it has no chromatic aberration.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.2b (vi)" },
      stem: t`What is the cheapest way to reduce the spherical aberration of a plano-convex lens?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "reduce" } },
      options: [
        { key: "A", text: t`Turn its curved face towards the incident rays`, correct: true, value: "curved_to_rays" },
        { key: "B", text: t`Turn its flat face towards the incident rays`, correct: false, misconceptionId: "C07-M7", value: "flat_to_rays" },
        { key: "C", text: t`Use a lens of wider aperture, so more rays reach the image`, correct: false, misconceptionId: "C07-M8", value: "wider_aperture" },
        { key: "D", text: t`Use a thicker lens with a more strongly curved face`, correct: false, misconceptionId: "C07-M9", value: "thicker_lens" },
      ],
      solution: {
        steps: [
          t`Spherical aberration is least when the bending is shared between the two faces.`,
          t`So turn the curved face towards the incident rays.`,
        ],
        figure: {
          alt: "Spherical aberration of a convex lens: rays near the edge (marginal rays) meet nearer the lens than rays close to the axis (paraxial rays).",
          axes: "none",
          view: { x: [-5.4, 6.8], y: [-2.6, 2.6] },
          elements: [
            { kind: "segment", from: [-5.2, 0], to: [6.2, 0], tone: "muted", dashed: true },
            { kind: "curve", points: [[0, 2.2], [0.1055, 1.925], [0.1969, 1.65], [0.2742, 1.375], [0.3375, 1.1], [0.3867, 0.825], [0.4219, 0.55], [0.443, 0.275], [0.45, 0], [0.443, -0.275], [0.4219, -0.55], [0.3867, -0.825], [0.3375, -1.1], [0.2742, -1.375], [0.1969, -1.65], [0.1055, -1.925], [0, -2.2], [-0.1055, -1.925], [-0.1969, -1.65], [-0.2742, -1.375], [-0.3375, -1.1], [-0.3867, -0.825], [-0.4219, -0.55], [-0.443, -0.275], [-0.45, 0], [-0.443, 0.275], [-0.4219, 0.55], [-0.3867, 0.825], [-0.3375, 1.1], [-0.2742, 1.375], [-0.1969, 1.65], [-0.1055, 1.925], [0, 2.2]] },
            { kind: "vector", from: [-4.8, 1.8], to: [0, 1.8], tone: "muted" },
            { kind: "segment", from: [0, 1.8], to: [3.4, -0.5538], tone: "bad" },
            { kind: "vector", from: [-4.8, -1.8], to: [0, -1.8], tone: "muted" },
            { kind: "segment", from: [0, -1.8], to: [3.4, 0.5538], tone: "bad" },
            { kind: "vector", from: [-4.8, 0.5], to: [0, 0.5], tone: "muted" },
            { kind: "segment", from: [0, 0.5], to: [4.6, -0.1053], tone: "accent" },
            { kind: "vector", from: [-4.8, -0.5], to: [0, -0.5], tone: "muted" },
            { kind: "segment", from: [0, -0.5], to: [4.6, 0.1053], tone: "accent" },
            { kind: "point", at: [2.6, 0], tone: "bad" },
            { kind: "segment", from: [2.6, -0.22], to: [2.6, -1.7], dashed: true, tone: "muted" },
            { kind: "label", at: [2.6, -1.7], label: "marginal focus", labelAt: "s", tone: "bad" },
            { kind: "point", at: [3.8, 0], tone: "accent" },
            { kind: "segment", from: [3.8, 0.22], to: [3.8, 1.7], dashed: true, tone: "muted" },
            { kind: "label", at: [3.8, 1.7], label: "paraxial focus", labelAt: "n", tone: "accent" },
          ],
        },
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.2b (v)" },
      stem: t`A convex lens of crown glass (dispersive power $0.02$) has focal length $20\ \mathrm{cm}$. What focal length must a flint-glass lens (dispersive power $0.04$) in contact with it have, so that the pair is achromatic?`,
      verify: { kind: "value", inputs: { w1: "0.02", f1: "20", w2: "0.04" }, params: { ask: "achro" } },
      options: [
        { key: "A", text: t`$+40\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M10", value: "40" },
        { key: "B", text: t`$-10\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M11", value: "-10" },
        { key: "C", text: t`$-20\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M12", value: "-20" },
        { key: "D", text: t`$-40\ \mathrm{cm}$`, correct: true, value: "-40" },
      ],
      solution: {
        steps: [
          t`Achromatism: $\dfrac{\omega_1}{f_1} + \dfrac{\omega_2}{f_2}$ $= 0$, so $f_2$ $= -\dfrac{\omega_2}{\omega_1}f_1$.`,
          t`$f_2$ $= -\dfrac{0.04}{0.02} \times 20$ $= -40\ \mathrm{cm}$, a concave lens.`,
        ],
      },
    },
  ],
};
