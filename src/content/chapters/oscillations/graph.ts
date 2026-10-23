import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Oscillations prerequisite graph (Balbharati Physics Std XII, Ch.5): linear S.H.M. and its equation, the
 * reference circle, energy, pendulums, angular S.H.M., damping and composition.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/oscillations-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Linear S.H.M.
  {
    id: "C01", slug: "linear-shm", title: "Linear simple harmonic motion", group: "Linear S.H.M.", tier: "core",
    oneLiner: t`A body pulled back towards its mean position by a force proportional to its displacement, $F = -kx$, performs S.H.M.`,
    prereqs: [], ext: ["Newton's second law (Std XI Physics)"], sources: [S("Periodic Motion and Linear S.H.M.")],
  },
  {
    id: "C02", slug: "shm-equation", title: "The S.H.M. equation", group: "Linear S.H.M.", tier: "core",
    oneLiner: t`$\dfrac{d^2x}{dt^2} + \omega^2x = 0$, with $\omega = \sqrt{\dfrac{k}{m}}$ and period $T = 2\pi\sqrt{\dfrac{m}{k}}$`,
    prereqs: ["C01"], ext: [], sources: [S("Periodic Motion and Linear S.H.M."), S("Amplitude, Period and Frequency of S.H.M.")],
  },
  {
    id: "C03", slug: "velocity-acceleration", title: "Velocity and acceleration in S.H.M.", group: "Linear S.H.M.", tier: "core",
    oneLiner: t`$v = \omega\sqrt{A^2 - x^2}$ and $a = -\omega^2x$: fastest at the mean position, greatest acceleration at the extremes`,
    prereqs: ["C02"], ext: [], sources: [S("Acceleration, Velocity and Displacement in S.H.M.")],
  },
  {
    id: "C04", slug: "reference-circle", title: "Reference circle and phase", group: "Linear S.H.M.", tier: "core", visual: true,
    oneLiner: t`S.H.M. is the projection of uniform circular motion on a diameter; the angle $\omega t + \alpha$ is its phase`,
    prereqs: ["C02"], ext: ["uniform circular motion (Std XI Physics)"], sources: [S("Reference Circle, Phase and Graphical Representation")],
  },
  {
    id: "C05", slug: "shm-time", title: "Position and time in S.H.M.", group: "Linear S.H.M.", tier: "core",
    oneLiner: t`$x = A\sin\left(\omega t + \alpha\right)$ gives where the particle is at any time, and when it reaches any point`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Acceleration, Velocity and Displacement in S.H.M.")],
  },
  {
    id: "C06", slug: "shm-graphs", title: "Graphs of S.H.M.", group: "Linear S.H.M.", tier: "core", visual: true,
    oneLiner: t`Displacement, velocity and acceleration are sine curves, each a quarter cycle ahead of the last`,
    prereqs: ["C05"], ext: [], sources: [S("Reference Circle, Phase and Graphical Representation")],
  },
  {
    id: "C07", slug: "shm-energy", title: "Energy in S.H.M.", group: "Linear S.H.M.", tier: "core", visual: true,
    oneLiner: t`Kinetic and potential energy trade places, but their total $\dfrac{1}{2}m\omega^2A^2$ stays constant`,
    prereqs: ["C03"], ext: [], sources: [S("Energy of a Particle Performing S.H.M.")],
  },
  // Pendulums and angular S.H.M.
  {
    id: "C08", slug: "simple-pendulum", title: "Simple pendulum", group: "Pendulums and angular S.H.M.", tier: "core",
    oneLiner: t`For small swings a pendulum performs S.H.M. with $T = 2\pi\sqrt{\dfrac{L}{g}}$`,
    prereqs: ["C02"], ext: [], sources: [S("Simple Pendulum")],
  },
  {
    id: "C09", slug: "seconds-pendulum", title: "Second's pendulum", group: "Pendulums and angular S.H.M.", tier: "core",
    oneLiner: t`A pendulum of period 2 s has length $L = \dfrac{g}{\pi^2}$, nearly 1 m`,
    prereqs: ["C08"], ext: [], sources: [S("Simple Pendulum")],
  },
  {
    id: "C10", slug: "angular-shm", title: "Angular S.H.M. and a vibrating magnet", group: "Pendulums and angular S.H.M.", tier: "core",
    oneLiner: t`A restoring torque proportional to the twist gives angular S.H.M.; a magnet in a field has $T = 2\pi\sqrt{\dfrac{I}{\mu B}}$`,
    prereqs: ["C02"], ext: ["moment of inertia (Rotational Dynamics, Ch.1)"], sources: [S("Angular S.H.M. and Magnet Vibrating in a Magnetic Field")],
  },
  // Damping and composition
  {
    id: "C11", slug: "damped-forced", title: "Damped and forced oscillations", group: "Damping and composition", tier: "core",
    oneLiner: t`Friction makes the amplitude die away; a periodic push keeps it going, most strongly at resonance`,
    prereqs: ["C07"], ext: [], sources: [S("Periodic Motion and Linear S.H.M.")],
  },
  {
    id: "C12", slug: "composition", title: "Composition of two S.H.M.s", group: "Damping and composition", tier: "adv",
    oneLiner: t`Two parallel S.H.M.s of the same period add to one S.H.M., with $R^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\left(\alpha_1 - \alpha_2\right)$`,
    prereqs: ["C04"], ext: [], sources: [S("Composition of Two S.H.M.s")],
  },
];
