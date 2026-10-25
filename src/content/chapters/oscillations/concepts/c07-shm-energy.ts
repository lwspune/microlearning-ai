import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A swing, once started, keeps going for a long time with no one pushing. Where is its energy as it slows at the top and races through the bottom?`,
    reveal: t`It keeps changing form: all potential at the ends, all kinetic in the middle. In S.H.M. the total stays fixed at $\dfrac{1}{2}m\omega^2A^2$.`,
  },
  explanation: {
    intuition: [
      t`A body in S.H.M. has potential energy from its displacement and kinetic energy from its speed.`,
      t`Potential energy $\dfrac{1}{2}m\omega^2x^2$ is zero at the mean position and greatest at the extremes.`,
      t`Kinetic energy $\dfrac{1}{2}m\omega^2\left(A^2 - x^2\right)$ is greatest at the mean position and zero at the extremes.`,
      t`Their sum, $E = \dfrac{1}{2}m\omega^2A^2$, is the same everywhere.`,
      t`So energy flows back and forth between the two forms, twice in every oscillation.`,
    ],
    formal: [
      {
        title: "Potential and kinetic energy",
        points: [
          t`The work done against the restoring force $kx$ is stored as $\text{PE} = \dfrac{1}{2}kx^2 = \dfrac{1}{2}m\omega^2x^2$.`,
          t`With $v = \omega\sqrt{A^2 - x^2}$: $\text{KE} = \dfrac{1}{2}mv^2 = \dfrac{1}{2}m\omega^2\left(A^2 - x^2\right)$.`,
          t`At the mean position the energy is all kinetic; at an extreme, all potential.`,
          t`$\text{KE} = \text{PE}$ where $x = \dfrac{A}{\sqrt{2}}$.`,
        ],
        figure: {
          alt: "Potential energy, a parabola from zero at the centre to its greatest at the extremes, and kinetic energy, the upside-down parabola. At point 4, a dashed line where they are equal, at A over root 2.",
          chart: { x: 0.5, y: 0.5, xTitle: "x (in A)", yTitle: "energy (in E)" },
          view: { x: [-1.15, 1.15], y: [0, 1.25] },
          elements: [
            { kind: "curve", points: [[-1, 1], [-0.975, 0.9506], [-0.95, 0.9025], [-0.925, 0.8556], [-0.9, 0.81], [-0.875, 0.7656], [-0.85, 0.7225], [-0.825, 0.6806], [-0.8, 0.64], [-0.775, 0.6006], [-0.75, 0.5625], [-0.725, 0.5256], [-0.7, 0.49], [-0.675, 0.4556], [-0.65, 0.4225], [-0.625, 0.3906], [-0.6, 0.36], [-0.575, 0.3306], [-0.55, 0.3025], [-0.525, 0.2756], [-0.5, 0.25], [-0.475, 0.2256], [-0.45, 0.2025], [-0.425, 0.1806], [-0.4, 0.16], [-0.375, 0.1406], [-0.35, 0.1225], [-0.325, 0.1056], [-0.3, 0.09], [-0.275, 0.0756], [-0.25, 0.0625], [-0.225, 0.0506], [-0.2, 0.04], [-0.175, 0.0306], [-0.15, 0.0225], [-0.125, 0.0156], [-0.1, 0.01], [-0.075, 0.0056], [-0.05, 0.0025], [-0.025, 0.0006], [0, 0], [0.025, 0.0006], [0.05, 0.0025], [0.075, 0.0056], [0.1, 0.01], [0.125, 0.0156], [0.15, 0.0225], [0.175, 0.0306], [0.2, 0.04], [0.225, 0.0506], [0.25, 0.0625], [0.275, 0.0756], [0.3, 0.09], [0.325, 0.1056], [0.35, 0.1225], [0.375, 0.1406], [0.4, 0.16], [0.425, 0.1806], [0.45, 0.2025], [0.475, 0.2256], [0.5, 0.25], [0.525, 0.2756], [0.55, 0.3025], [0.575, 0.3306], [0.6, 0.36], [0.625, 0.3906], [0.65, 0.4225], [0.675, 0.4556], [0.7, 0.49], [0.725, 0.5256], [0.75, 0.5625], [0.775, 0.6006], [0.8, 0.64], [0.825, 0.6806], [0.85, 0.7225], [0.875, 0.7656], [0.9, 0.81], [0.925, 0.8556], [0.95, 0.9025], [0.975, 0.9506], [1, 1]], tone: "bad" },
            { kind: "label", at: [0.86, 0.74], label: "PE", labelAt: "e", tone: "bad" },
            { kind: "curve", points: [[-1, 0], [-0.975, 0.0494], [-0.95, 0.0975], [-0.925, 0.1444], [-0.9, 0.19], [-0.875, 0.2344], [-0.85, 0.2775], [-0.825, 0.3194], [-0.8, 0.36], [-0.775, 0.3994], [-0.75, 0.4375], [-0.725, 0.4744], [-0.7, 0.51], [-0.675, 0.5444], [-0.65, 0.5775], [-0.625, 0.6094], [-0.6, 0.64], [-0.575, 0.6694], [-0.55, 0.6975], [-0.525, 0.7244], [-0.5, 0.75], [-0.475, 0.7744], [-0.45, 0.7975], [-0.425, 0.8194], [-0.4, 0.84], [-0.375, 0.8594], [-0.35, 0.8775], [-0.325, 0.8944], [-0.3, 0.91], [-0.275, 0.9244], [-0.25, 0.9375], [-0.225, 0.9494], [-0.2, 0.96], [-0.175, 0.9694], [-0.15, 0.9775], [-0.125, 0.9844], [-0.1, 0.99], [-0.075, 0.9944], [-0.05, 0.9975], [-0.025, 0.9994], [0, 1], [0.025, 0.9994], [0.05, 0.9975], [0.075, 0.9944], [0.1, 0.99], [0.125, 0.9844], [0.15, 0.9775], [0.175, 0.9694], [0.2, 0.96], [0.225, 0.9494], [0.25, 0.9375], [0.275, 0.9244], [0.3, 0.91], [0.325, 0.8944], [0.35, 0.8775], [0.375, 0.8594], [0.4, 0.84], [0.425, 0.8194], [0.45, 0.7975], [0.475, 0.7744], [0.5, 0.75], [0.525, 0.7244], [0.55, 0.6975], [0.575, 0.6694], [0.6, 0.64], [0.625, 0.6094], [0.65, 0.5775], [0.675, 0.5444], [0.7, 0.51], [0.725, 0.4744], [0.75, 0.4375], [0.775, 0.3994], [0.8, 0.36], [0.825, 0.3194], [0.85, 0.2775], [0.875, 0.2344], [0.9, 0.19], [0.925, 0.1444], [0.95, 0.0975], [0.975, 0.0494], [1, 0]], tone: "good" },
            { kind: "label", at: [-0.42, 0.55], label: "KE", labelAt: "e", tone: "good" },
            { kind: "segment", from: [-1, 1], to: [1, 1], tone: "accent" },
            { kind: "label", at: [0.55, 1], label: "E = KE + PE", labelAt: "n" },
            { kind: "segment", from: [0.7071, 0], to: [0.7071, 1], dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [0.7071, 0.06], label: "A/√2", labelAt: "w", step: 4 },
          ],
        },
      },
      {
        title: "Total energy",
        points: [
          t`$E = \text{KE} + \text{PE} = \dfrac{1}{2}m\omega^2A^2 = \dfrac{1}{2}kA^2$, the same at every $x$.`,
          t`So $E = \dfrac{1}{2}mv_{max}^2$: at the centre, all of it is kinetic.`,
          t`$\dfrac{\text{KE}}{E} = 1 - \dfrac{x^2}{A^2}$ and $\dfrac{\text{PE}}{E} = \dfrac{x^2}{A^2}$.`,
          t`$E \propto A^2$: double the amplitude, four times the energy.`,
        ],
        figure: {
          alt: "Kinetic and potential energy against displacement, with the total energy a flat line across the top: their sum is the same at every point.",
          chart: { x: 0.5, y: 0.5, xTitle: "x (in A)", yTitle: "energy (in E)" },
          view: { x: [-1.15, 1.15], y: [0, 1.25] },
          elements: [
            { kind: "curve", points: [[-1, 1], [-0.975, 0.9506], [-0.95, 0.9025], [-0.925, 0.8556], [-0.9, 0.81], [-0.875, 0.7656], [-0.85, 0.7225], [-0.825, 0.6806], [-0.8, 0.64], [-0.775, 0.6006], [-0.75, 0.5625], [-0.725, 0.5256], [-0.7, 0.49], [-0.675, 0.4556], [-0.65, 0.4225], [-0.625, 0.3906], [-0.6, 0.36], [-0.575, 0.3306], [-0.55, 0.3025], [-0.525, 0.2756], [-0.5, 0.25], [-0.475, 0.2256], [-0.45, 0.2025], [-0.425, 0.1806], [-0.4, 0.16], [-0.375, 0.1406], [-0.35, 0.1225], [-0.325, 0.1056], [-0.3, 0.09], [-0.275, 0.0756], [-0.25, 0.0625], [-0.225, 0.0506], [-0.2, 0.04], [-0.175, 0.0306], [-0.15, 0.0225], [-0.125, 0.0156], [-0.1, 0.01], [-0.075, 0.0056], [-0.05, 0.0025], [-0.025, 0.0006], [0, 0], [0.025, 0.0006], [0.05, 0.0025], [0.075, 0.0056], [0.1, 0.01], [0.125, 0.0156], [0.15, 0.0225], [0.175, 0.0306], [0.2, 0.04], [0.225, 0.0506], [0.25, 0.0625], [0.275, 0.0756], [0.3, 0.09], [0.325, 0.1056], [0.35, 0.1225], [0.375, 0.1406], [0.4, 0.16], [0.425, 0.1806], [0.45, 0.2025], [0.475, 0.2256], [0.5, 0.25], [0.525, 0.2756], [0.55, 0.3025], [0.575, 0.3306], [0.6, 0.36], [0.625, 0.3906], [0.65, 0.4225], [0.675, 0.4556], [0.7, 0.49], [0.725, 0.5256], [0.75, 0.5625], [0.775, 0.6006], [0.8, 0.64], [0.825, 0.6806], [0.85, 0.7225], [0.875, 0.7656], [0.9, 0.81], [0.925, 0.8556], [0.95, 0.9025], [0.975, 0.9506], [1, 1]], tone: "bad" },
            { kind: "label", at: [0.86, 0.74], label: "PE", labelAt: "e", tone: "bad" },
            { kind: "curve", points: [[-1, 0], [-0.975, 0.0494], [-0.95, 0.0975], [-0.925, 0.1444], [-0.9, 0.19], [-0.875, 0.2344], [-0.85, 0.2775], [-0.825, 0.3194], [-0.8, 0.36], [-0.775, 0.3994], [-0.75, 0.4375], [-0.725, 0.4744], [-0.7, 0.51], [-0.675, 0.5444], [-0.65, 0.5775], [-0.625, 0.6094], [-0.6, 0.64], [-0.575, 0.6694], [-0.55, 0.6975], [-0.525, 0.7244], [-0.5, 0.75], [-0.475, 0.7744], [-0.45, 0.7975], [-0.425, 0.8194], [-0.4, 0.84], [-0.375, 0.8594], [-0.35, 0.8775], [-0.325, 0.8944], [-0.3, 0.91], [-0.275, 0.9244], [-0.25, 0.9375], [-0.225, 0.9494], [-0.2, 0.96], [-0.175, 0.9694], [-0.15, 0.9775], [-0.125, 0.9844], [-0.1, 0.99], [-0.075, 0.9944], [-0.05, 0.9975], [-0.025, 0.9994], [0, 1], [0.025, 0.9994], [0.05, 0.9975], [0.075, 0.9944], [0.1, 0.99], [0.125, 0.9844], [0.15, 0.9775], [0.175, 0.9694], [0.2, 0.96], [0.225, 0.9494], [0.25, 0.9375], [0.275, 0.9244], [0.3, 0.91], [0.325, 0.8944], [0.35, 0.8775], [0.375, 0.8594], [0.4, 0.84], [0.425, 0.8194], [0.45, 0.7975], [0.475, 0.7744], [0.5, 0.75], [0.525, 0.7244], [0.55, 0.6975], [0.575, 0.6694], [0.6, 0.64], [0.625, 0.6094], [0.65, 0.5775], [0.675, 0.5444], [0.7, 0.51], [0.725, 0.4744], [0.75, 0.4375], [0.775, 0.3994], [0.8, 0.36], [0.825, 0.3194], [0.85, 0.2775], [0.875, 0.2344], [0.9, 0.19], [0.925, 0.1444], [0.95, 0.0975], [0.975, 0.0494], [1, 0]], tone: "good" },
            { kind: "label", at: [-0.42, 0.55], label: "KE", labelAt: "e", tone: "good" },
            { kind: "segment", from: [-1, 1], to: [1, 1], tone: "accent" },
            { kind: "label", at: [0.55, 1], label: "E = KE + PE", labelAt: "n" },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A particle of mass $200\ \mathrm{g}$ performs S.H.M. of amplitude $7\ \mathrm{cm}$ with a total energy of $10^{-2}\ \mathrm{J}$. Find its maximum speed and its period.`,
      steps: [
        t`At the mean position all of $E$ is kinetic: $E = \dfrac{1}{2}mv_{max}^2$.`,
        t`$v_{max} = \sqrt{\dfrac{2E}{m}}$ $= \sqrt{\dfrac{2 \times 10^{-2}}{0.2}}$ $\approx 0.316\ \mathrm{m/s}$.`,
        t`$v_{max} = A\omega$, so $\omega = \dfrac{0.316}{0.07}$ $\approx 4.52\ \mathrm{rad/s}$.`,
        t`$T = \dfrac{2\pi}{\omega} \approx 1.39\ \mathrm{s}$.`,
      ],
      answer: t`$v_{max} \approx 0.316\ \mathrm{m/s}$, $T \approx 1.39\ \mathrm{s}$`,
      figure: {
        alt: "Energy against displacement. At step 1, a dashed line at the centre, where the potential energy is zero and all the energy is kinetic.",
        chart: { x: 0.5, y: 0.5, xTitle: "x (in A)", yTitle: "energy (in E)" },
        view: { x: [-1.15, 1.15], y: [0, 1.25] },
        elements: [
          { kind: "curve", points: [[-1, 1], [-0.975, 0.9506], [-0.95, 0.9025], [-0.925, 0.8556], [-0.9, 0.81], [-0.875, 0.7656], [-0.85, 0.7225], [-0.825, 0.6806], [-0.8, 0.64], [-0.775, 0.6006], [-0.75, 0.5625], [-0.725, 0.5256], [-0.7, 0.49], [-0.675, 0.4556], [-0.65, 0.4225], [-0.625, 0.3906], [-0.6, 0.36], [-0.575, 0.3306], [-0.55, 0.3025], [-0.525, 0.2756], [-0.5, 0.25], [-0.475, 0.2256], [-0.45, 0.2025], [-0.425, 0.1806], [-0.4, 0.16], [-0.375, 0.1406], [-0.35, 0.1225], [-0.325, 0.1056], [-0.3, 0.09], [-0.275, 0.0756], [-0.25, 0.0625], [-0.225, 0.0506], [-0.2, 0.04], [-0.175, 0.0306], [-0.15, 0.0225], [-0.125, 0.0156], [-0.1, 0.01], [-0.075, 0.0056], [-0.05, 0.0025], [-0.025, 0.0006], [0, 0], [0.025, 0.0006], [0.05, 0.0025], [0.075, 0.0056], [0.1, 0.01], [0.125, 0.0156], [0.15, 0.0225], [0.175, 0.0306], [0.2, 0.04], [0.225, 0.0506], [0.25, 0.0625], [0.275, 0.0756], [0.3, 0.09], [0.325, 0.1056], [0.35, 0.1225], [0.375, 0.1406], [0.4, 0.16], [0.425, 0.1806], [0.45, 0.2025], [0.475, 0.2256], [0.5, 0.25], [0.525, 0.2756], [0.55, 0.3025], [0.575, 0.3306], [0.6, 0.36], [0.625, 0.3906], [0.65, 0.4225], [0.675, 0.4556], [0.7, 0.49], [0.725, 0.5256], [0.75, 0.5625], [0.775, 0.6006], [0.8, 0.64], [0.825, 0.6806], [0.85, 0.7225], [0.875, 0.7656], [0.9, 0.81], [0.925, 0.8556], [0.95, 0.9025], [0.975, 0.9506], [1, 1]], tone: "bad" },
          { kind: "label", at: [0.86, 0.74], label: "PE", labelAt: "e", tone: "bad" },
          { kind: "curve", points: [[-1, 0], [-0.975, 0.0494], [-0.95, 0.0975], [-0.925, 0.1444], [-0.9, 0.19], [-0.875, 0.2344], [-0.85, 0.2775], [-0.825, 0.3194], [-0.8, 0.36], [-0.775, 0.3994], [-0.75, 0.4375], [-0.725, 0.4744], [-0.7, 0.51], [-0.675, 0.5444], [-0.65, 0.5775], [-0.625, 0.6094], [-0.6, 0.64], [-0.575, 0.6694], [-0.55, 0.6975], [-0.525, 0.7244], [-0.5, 0.75], [-0.475, 0.7744], [-0.45, 0.7975], [-0.425, 0.8194], [-0.4, 0.84], [-0.375, 0.8594], [-0.35, 0.8775], [-0.325, 0.8944], [-0.3, 0.91], [-0.275, 0.9244], [-0.25, 0.9375], [-0.225, 0.9494], [-0.2, 0.96], [-0.175, 0.9694], [-0.15, 0.9775], [-0.125, 0.9844], [-0.1, 0.99], [-0.075, 0.9944], [-0.05, 0.9975], [-0.025, 0.9994], [0, 1], [0.025, 0.9994], [0.05, 0.9975], [0.075, 0.9944], [0.1, 0.99], [0.125, 0.9844], [0.15, 0.9775], [0.175, 0.9694], [0.2, 0.96], [0.225, 0.9494], [0.25, 0.9375], [0.275, 0.9244], [0.3, 0.91], [0.325, 0.8944], [0.35, 0.8775], [0.375, 0.8594], [0.4, 0.84], [0.425, 0.8194], [0.45, 0.7975], [0.475, 0.7744], [0.5, 0.75], [0.525, 0.7244], [0.55, 0.6975], [0.575, 0.6694], [0.6, 0.64], [0.625, 0.6094], [0.65, 0.5775], [0.675, 0.5444], [0.7, 0.51], [0.725, 0.4744], [0.75, 0.4375], [0.775, 0.3994], [0.8, 0.36], [0.825, 0.3194], [0.85, 0.2775], [0.875, 0.2344], [0.9, 0.19], [0.925, 0.1444], [0.95, 0.0975], [0.975, 0.0494], [1, 0]], tone: "good" },
          { kind: "label", at: [-0.42, 0.55], label: "KE", labelAt: "e", tone: "good" },
          { kind: "segment", from: [-1, 1], to: [1, 1], tone: "accent" },
          { kind: "label", at: [0.55, 1], label: "E = KE + PE", labelAt: "n" },
          { kind: "segment", from: [0, 0], to: [0, 1], dashed: true, tone: "muted", step: 1 },
          { kind: "label", at: [0, 0.3], label: "all KE", labelAt: "e", step: 1 },
        ],
      },
    },
    figure: {
      alt: "Energy against displacement, from minus A to plus A. First potential energy, a parabola rising from zero at the centre. Then kinetic energy, an upside-down parabola, greatest at the centre. Then the total energy, a flat line at the top.",
      chart: { x: 0.5, y: 0.5, xTitle: "x (in A)", yTitle: "energy (in E)" },
      view: { x: [-1.15, 1.15], y: [0, 1.25] },
      elements: [
        { kind: "curve", points: [[-1, 1], [-0.975, 0.9506], [-0.95, 0.9025], [-0.925, 0.8556], [-0.9, 0.81], [-0.875, 0.7656], [-0.85, 0.7225], [-0.825, 0.6806], [-0.8, 0.64], [-0.775, 0.6006], [-0.75, 0.5625], [-0.725, 0.5256], [-0.7, 0.49], [-0.675, 0.4556], [-0.65, 0.4225], [-0.625, 0.3906], [-0.6, 0.36], [-0.575, 0.3306], [-0.55, 0.3025], [-0.525, 0.2756], [-0.5, 0.25], [-0.475, 0.2256], [-0.45, 0.2025], [-0.425, 0.1806], [-0.4, 0.16], [-0.375, 0.1406], [-0.35, 0.1225], [-0.325, 0.1056], [-0.3, 0.09], [-0.275, 0.0756], [-0.25, 0.0625], [-0.225, 0.0506], [-0.2, 0.04], [-0.175, 0.0306], [-0.15, 0.0225], [-0.125, 0.0156], [-0.1, 0.01], [-0.075, 0.0056], [-0.05, 0.0025], [-0.025, 0.0006], [0, 0], [0.025, 0.0006], [0.05, 0.0025], [0.075, 0.0056], [0.1, 0.01], [0.125, 0.0156], [0.15, 0.0225], [0.175, 0.0306], [0.2, 0.04], [0.225, 0.0506], [0.25, 0.0625], [0.275, 0.0756], [0.3, 0.09], [0.325, 0.1056], [0.35, 0.1225], [0.375, 0.1406], [0.4, 0.16], [0.425, 0.1806], [0.45, 0.2025], [0.475, 0.2256], [0.5, 0.25], [0.525, 0.2756], [0.55, 0.3025], [0.575, 0.3306], [0.6, 0.36], [0.625, 0.3906], [0.65, 0.4225], [0.675, 0.4556], [0.7, 0.49], [0.725, 0.5256], [0.75, 0.5625], [0.775, 0.6006], [0.8, 0.64], [0.825, 0.6806], [0.85, 0.7225], [0.875, 0.7656], [0.9, 0.81], [0.925, 0.8556], [0.95, 0.9025], [0.975, 0.9506], [1, 1]], tone: "bad", step: 1 },
        { kind: "label", at: [0.86, 0.74], label: "PE", labelAt: "e", tone: "bad", step: 1 },
        { kind: "curve", points: [[-1, 0], [-0.975, 0.0494], [-0.95, 0.0975], [-0.925, 0.1444], [-0.9, 0.19], [-0.875, 0.2344], [-0.85, 0.2775], [-0.825, 0.3194], [-0.8, 0.36], [-0.775, 0.3994], [-0.75, 0.4375], [-0.725, 0.4744], [-0.7, 0.51], [-0.675, 0.5444], [-0.65, 0.5775], [-0.625, 0.6094], [-0.6, 0.64], [-0.575, 0.6694], [-0.55, 0.6975], [-0.525, 0.7244], [-0.5, 0.75], [-0.475, 0.7744], [-0.45, 0.7975], [-0.425, 0.8194], [-0.4, 0.84], [-0.375, 0.8594], [-0.35, 0.8775], [-0.325, 0.8944], [-0.3, 0.91], [-0.275, 0.9244], [-0.25, 0.9375], [-0.225, 0.9494], [-0.2, 0.96], [-0.175, 0.9694], [-0.15, 0.9775], [-0.125, 0.9844], [-0.1, 0.99], [-0.075, 0.9944], [-0.05, 0.9975], [-0.025, 0.9994], [0, 1], [0.025, 0.9994], [0.05, 0.9975], [0.075, 0.9944], [0.1, 0.99], [0.125, 0.9844], [0.15, 0.9775], [0.175, 0.9694], [0.2, 0.96], [0.225, 0.9494], [0.25, 0.9375], [0.275, 0.9244], [0.3, 0.91], [0.325, 0.8944], [0.35, 0.8775], [0.375, 0.8594], [0.4, 0.84], [0.425, 0.8194], [0.45, 0.7975], [0.475, 0.7744], [0.5, 0.75], [0.525, 0.7244], [0.55, 0.6975], [0.575, 0.6694], [0.6, 0.64], [0.625, 0.6094], [0.65, 0.5775], [0.675, 0.5444], [0.7, 0.51], [0.725, 0.4744], [0.75, 0.4375], [0.775, 0.3994], [0.8, 0.36], [0.825, 0.3194], [0.85, 0.2775], [0.875, 0.2344], [0.9, 0.19], [0.925, 0.1444], [0.95, 0.0975], [0.975, 0.0494], [1, 0]], tone: "good", step: 2 },
        { kind: "label", at: [-0.42, 0.55], label: "KE", labelAt: "e", tone: "good", step: 2 },
        { kind: "segment", from: [-1, 1], to: [1, 1], tone: "accent", step: 4 },
        { kind: "label", at: [0.55, 1], label: "E = KE + PE", labelAt: "n", step: 4 },
      ],
    },
    visualSpec: t`Watch two energy bars beside an oscillating mass, one filling as the other empties, their total never changing.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Takes the energies to vary linearly with $x$.`,
      remediation: t`$\text{PE} \propto x^2$ and $\text{KE} \propto A^2 - x^2$: squares, not $x$ and $A - x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Sets the potential energy to a third of the total.",
      remediation: t`$\text{KE} = 3\,\text{PE}$ makes $\text{PE}$ a quarter of the total: $\dfrac{x^2}{A^2} = \dfrac{1}{4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Swaps kinetic and potential energy.",
      remediation: t`$\text{PE} = \dfrac{1}{2}m\omega^2x^2$ grows with $x$; $\text{KE} = \dfrac{1}{2}m\omega^2\left(A^2 - x^2\right)$ shrinks.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Takes the kinetic fraction as $\left(1 - \dfrac{x}{A}\right)^2$.`,
      remediation: t`$\dfrac{\text{KE}}{E} = \dfrac{A^2 - x^2}{A^2} = 1 - \dfrac{x^2}{A^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Forgets the $\dfrac{1}{2}$.`,
      remediation: t`$\text{KE} = \dfrac{1}{2}mv^2$ and $\text{PE} = \dfrac{1}{2}m\omega^2x^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Leaves out the square root.",
      remediation: t`$E = \dfrac{1}{2}mv^2$ gives $v^2 = \dfrac{2E}{m}$; take the root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks the energy at the centre is all potential.",
      remediation: t`At the mean position $x = 0$, so $\text{PE} = 0$: all the energy is kinetic, and the speed is greatest.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M8",
      mistake: "Leaves the amplitude in cm.",
      remediation: t`For joules, use metres: $6\ \mathrm{cm} = 0.06\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Uses the kinetic energy at $t = 0$.`,
      remediation: t`The maximum kinetic energy is at the mean position, $\dfrac{1}{2}m\omega^2A^2$, whatever the epoch.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Takes $\omega$ as the frequency.`,
      remediation: t`$\omega$ is in rad/s; $n = \dfrac{\omega}{2\pi}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M11",
      mistake: "Leaves the mass in grams.",
      remediation: t`For joules, use kilograms: $20\ \mathrm{g} = 0.02\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.16" },
      stem: t`A particle performs S.H.M. of amplitude $8\ \mathrm{cm}$. How far from the mean position is its kinetic energy three times its potential energy?`,
      verify: { kind: "value", inputs: { A: "8", r: "3" }, params: { ask: "x_ratio" } },
      options: [
        { key: "A", text: t`$4.62\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M2", value: "4.62000000000000" },
        { key: "B", text: t`$6.93\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M3", value: "6.93000000000000" },
        { key: "C", text: t`$4\ \mathrm{cm}$`, correct: true, value: "4" },
        { key: "D", text: t`$2\ \mathrm{cm}$`, correct: false, misconceptionId: "C07-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`$\text{KE} = 3\,\text{PE}$: $A^2 - x^2 = 3x^2$, so $x^2 = \dfrac{A^2}{4}$.`,
          t`$x = \dfrac{A}{2} = 4\ \mathrm{cm}$.`,
        ],
        figure: {
          alt: "Energy against displacement with a dashed line at half the amplitude, where the kinetic energy is three times the potential energy.",
          chart: { x: 0.5, y: 0.5, xTitle: "x (in A)", yTitle: "energy (in E)" },
          view: { x: [-1.15, 1.15], y: [0, 1.25] },
          elements: [
            { kind: "curve", points: [[-1, 1], [-0.975, 0.9506], [-0.95, 0.9025], [-0.925, 0.8556], [-0.9, 0.81], [-0.875, 0.7656], [-0.85, 0.7225], [-0.825, 0.6806], [-0.8, 0.64], [-0.775, 0.6006], [-0.75, 0.5625], [-0.725, 0.5256], [-0.7, 0.49], [-0.675, 0.4556], [-0.65, 0.4225], [-0.625, 0.3906], [-0.6, 0.36], [-0.575, 0.3306], [-0.55, 0.3025], [-0.525, 0.2756], [-0.5, 0.25], [-0.475, 0.2256], [-0.45, 0.2025], [-0.425, 0.1806], [-0.4, 0.16], [-0.375, 0.1406], [-0.35, 0.1225], [-0.325, 0.1056], [-0.3, 0.09], [-0.275, 0.0756], [-0.25, 0.0625], [-0.225, 0.0506], [-0.2, 0.04], [-0.175, 0.0306], [-0.15, 0.0225], [-0.125, 0.0156], [-0.1, 0.01], [-0.075, 0.0056], [-0.05, 0.0025], [-0.025, 0.0006], [0, 0], [0.025, 0.0006], [0.05, 0.0025], [0.075, 0.0056], [0.1, 0.01], [0.125, 0.0156], [0.15, 0.0225], [0.175, 0.0306], [0.2, 0.04], [0.225, 0.0506], [0.25, 0.0625], [0.275, 0.0756], [0.3, 0.09], [0.325, 0.1056], [0.35, 0.1225], [0.375, 0.1406], [0.4, 0.16], [0.425, 0.1806], [0.45, 0.2025], [0.475, 0.2256], [0.5, 0.25], [0.525, 0.2756], [0.55, 0.3025], [0.575, 0.3306], [0.6, 0.36], [0.625, 0.3906], [0.65, 0.4225], [0.675, 0.4556], [0.7, 0.49], [0.725, 0.5256], [0.75, 0.5625], [0.775, 0.6006], [0.8, 0.64], [0.825, 0.6806], [0.85, 0.7225], [0.875, 0.7656], [0.9, 0.81], [0.925, 0.8556], [0.95, 0.9025], [0.975, 0.9506], [1, 1]], tone: "bad" },
            { kind: "label", at: [0.86, 0.74], label: "PE", labelAt: "e", tone: "bad" },
            { kind: "curve", points: [[-1, 0], [-0.975, 0.0494], [-0.95, 0.0975], [-0.925, 0.1444], [-0.9, 0.19], [-0.875, 0.2344], [-0.85, 0.2775], [-0.825, 0.3194], [-0.8, 0.36], [-0.775, 0.3994], [-0.75, 0.4375], [-0.725, 0.4744], [-0.7, 0.51], [-0.675, 0.5444], [-0.65, 0.5775], [-0.625, 0.6094], [-0.6, 0.64], [-0.575, 0.6694], [-0.55, 0.6975], [-0.525, 0.7244], [-0.5, 0.75], [-0.475, 0.7744], [-0.45, 0.7975], [-0.425, 0.8194], [-0.4, 0.84], [-0.375, 0.8594], [-0.35, 0.8775], [-0.325, 0.8944], [-0.3, 0.91], [-0.275, 0.9244], [-0.25, 0.9375], [-0.225, 0.9494], [-0.2, 0.96], [-0.175, 0.9694], [-0.15, 0.9775], [-0.125, 0.9844], [-0.1, 0.99], [-0.075, 0.9944], [-0.05, 0.9975], [-0.025, 0.9994], [0, 1], [0.025, 0.9994], [0.05, 0.9975], [0.075, 0.9944], [0.1, 0.99], [0.125, 0.9844], [0.15, 0.9775], [0.175, 0.9694], [0.2, 0.96], [0.225, 0.9494], [0.25, 0.9375], [0.275, 0.9244], [0.3, 0.91], [0.325, 0.8944], [0.35, 0.8775], [0.375, 0.8594], [0.4, 0.84], [0.425, 0.8194], [0.45, 0.7975], [0.475, 0.7744], [0.5, 0.75], [0.525, 0.7244], [0.55, 0.6975], [0.575, 0.6694], [0.6, 0.64], [0.625, 0.6094], [0.65, 0.5775], [0.675, 0.5444], [0.7, 0.51], [0.725, 0.4744], [0.75, 0.4375], [0.775, 0.3994], [0.8, 0.36], [0.825, 0.3194], [0.85, 0.2775], [0.875, 0.2344], [0.9, 0.19], [0.925, 0.1444], [0.95, 0.0975], [0.975, 0.0494], [1, 0]], tone: "good" },
            { kind: "label", at: [-0.42, 0.55], label: "KE", labelAt: "e", tone: "good" },
            { kind: "segment", from: [-1, 1], to: [1, 1], tone: "accent" },
            { kind: "label", at: [0.55, 1], label: "E = KE + PE", labelAt: "n" },
            { kind: "segment", from: [0.5, 0], to: [0.5, 1], dashed: true, tone: "muted" },
            { kind: "label", at: [0.5, 0.02], label: "A/2", labelAt: "e" },
          ],
        },
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.29" },
      stem: t`A particle in S.H.M. is at one third of its amplitude from the mean position. What fraction of its total energy is kinetic?`,
      verify: { kind: "value", inputs: { f: "1/3" }, params: { ask: "ke_frac" } },
      options: [
        { key: "A", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C07-M1", value: "2/3" },
        { key: "B", text: t`$\frac{1}{9}$`, correct: false, misconceptionId: "C07-M3", value: "1/9" },
        { key: "C", text: t`$\frac{4}{9}$`, correct: false, misconceptionId: "C07-M4", value: "4/9" },
        { key: "D", text: t`$\frac{8}{9}$`, correct: true, value: "8/9" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\text{KE}}{E} = 1 - \dfrac{x^2}{A^2}$.`,
          t`$= 1 - \dfrac{1}{9} = \dfrac{8}{9}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.12" },
      stem: t`A body of mass $2\ \mathrm{kg}$ performs S.H.M. with a total energy of $40\ \mathrm{J}$. What is its speed as it crosses the centre of its path?`,
      verify: { kind: "value", inputs: { m: "2", E: "40" }, params: { ask: "v_centre" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M7", value: "0" },
        { key: "B", text: t`$6.32\ \mathrm{m/s}$`, correct: true, value: "6.32000000000000" },
        { key: "C", text: t`$4.47\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M5", value: "4.47000000000000" },
        { key: "D", text: t`$40\ \mathrm{m/s}$`, correct: false, misconceptionId: "C07-M6", value: "40" },
      ],
      solution: {
        steps: [
          t`At the centre all $40\ \mathrm{J}$ is kinetic: $\dfrac{1}{2}mv^2 = 40$.`,
          t`$v = \sqrt{\dfrac{2 \times 40}{2}} = \sqrt{40} \approx 6.32\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.1 (ii)" },
      stem: t`A body of mass $1\ \mathrm{kg}$ performs S.H.M. with $x = 6\sin\left(100t + \dfrac{\pi}{4}\right)$, $x$ in cm and $t$ in s. What is its maximum kinetic energy?`,
      verify: { kind: "value", inputs: { m: "1", A_cm: "6", w: "100", alpha: "pi/4" }, params: { ask: "ke_max" } },
      options: [
        { key: "A", text: t`$18\ \mathrm{J}$`, correct: true, value: "18" },
        { key: "B", text: t`$36\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M5", value: "36" },
        { key: "C", text: t`$1.8 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M8", value: "180000" },
        { key: "D", text: t`$9\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M9", value: "9" },
      ],
      solution: {
        steps: [
          t`$A = 6\ \mathrm{cm} = 0.06\ \mathrm{m}$ and $\omega = 100\ \mathrm{rad/s}$.`,
          t`$\text{KE}_{max} = \dfrac{1}{2}m\omega^2A^2 = \dfrac{1}{2} \times 1 \times 10^4 \times 0.0036 = 18\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.11" },
      stem: t`The potential energy of a particle of mass $20\ \mathrm{g}$ in S.H.M. is $0.1\pi^2x^2$ joules, with $x$ in metres. What is the frequency?`,
      verify: { kind: "value", inputs: { m_g: "20", c: "0.1*pi**2" }, params: { ask: "n_pe", sf: "4" } },
      options: [
        { key: "A", text: t`$1.118\ \mathrm{Hz}$`, correct: false, misconceptionId: "C07-M5", value: "1.11800000000000" },
        { key: "B", text: t`$9.935\ \mathrm{Hz}$`, correct: false, misconceptionId: "C07-M10", value: "9.93500000000000" },
        { key: "C", text: t`$0.05\ \mathrm{Hz}$`, correct: false, misconceptionId: "C07-M11", value: "0.0500000000000000" },
        { key: "D", text: t`$1.581\ \mathrm{Hz}$`, correct: true, value: "1.58100000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{2}m\omega^2 = 0.1\pi^2$ with $m = 0.02\ \mathrm{kg}$: $\omega^2 = 10\pi^2$, so $\omega = \pi\sqrt{10}$.`,
          t`$n = \dfrac{\omega}{2\pi} = \dfrac{\sqrt{10}}{2} \approx 1.581\ \mathrm{Hz}$.`,
        ],
      },
    },
  ],
};
