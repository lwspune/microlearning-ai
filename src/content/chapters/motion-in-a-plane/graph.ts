import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Motion in a Plane prerequisite graph (Balbharati Physics Std XI, Ch.3): straight-line motion and its graphs, motion in a plane, relative velocity, projectiles and circular motion.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/motion-in-a-plane-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Straight-line motion
  {
    id: "C01", slug: "kinematics-1d", title: "Motion in a straight line", group: "Straight-line motion", tier: "core",
    oneLiner: t`Displacement, velocity and acceleration along a line; for constant acceleration $v = u + at$, $s = ut + \dfrac{1}{2}at^2$, $v^2 = u^2 + 2as$`,
    prereqs: [], ext: [], sources: [S("Rectilinear Motion"), S("Average and Instantaneous Velocities"), S("Average and Instantaneous Acceleration")],
  },
  {
    id: "C02", slug: "motion-graphs", title: "Graphs of motion", group: "Straight-line motion", tier: "core", visual: true,
    oneLiner: t`The slope of an $x$–$t$ graph is velocity, the slope of a $v$–$t$ graph is acceleration, and the area under a $v$–$t$ graph is displacement`,
    prereqs: ["C01"], ext: [], sources: [S("Rectilinear Motion")],
  },
  // Motion in a plane
  {
    id: "C03", slug: "motion-in-plane", title: "Velocity and acceleration in a plane", group: "Motion in a plane", tier: "core",
    oneLiner: t`In a plane, position, velocity and acceleration are vectors; with constant $\vec{a}$, $\vec{v} = \vec{u} + \vec{a}t$ and $\vec{r} = \vec{u}t + \dfrac{1}{2}\vec{a}t^2$ hold component by component`,
    prereqs: ["C01"], ext: ["vectors (Mathematical Methods, Ch.2)"], sources: [S("Equations of Motion in a Plane"), S("Average and Instantaneous Velocities")],
  },
  {
    id: "C04", slug: "relative-velocity", title: "Relative velocity", group: "Motion in a plane", tier: "core",
    oneLiner: t`The velocity of A relative to B is $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$: rain on a moving person, a boat crossing a river`,
    prereqs: ["C03"], ext: [], sources: [S("Relative Velocity")],
  },
  {
    id: "C05", slug: "projectile-motion", title: "Projectile motion", group: "Motion in a plane", tier: "core", visual: true,
    oneLiner: t`A projectile moves at constant horizontal velocity while falling freely: a parabola with time of flight $\dfrac{2u\sin\theta}{g}$, range $\dfrac{u^2\sin 2\theta}{g}$ and greatest height $\dfrac{u^2\sin^2\theta}{2g}$`,
    prereqs: ["C03"], ext: [], sources: [S("Projectile Motion")],
  },
  {
    id: "C06", slug: "circular-motion", title: "Uniform circular motion", group: "Motion in a plane", tier: "core", visual: true,
    oneLiner: t`At constant speed round a circle the velocity turns, giving a centripetal acceleration $\dfrac{v^2}{r} = \omega^2r$ towards the centre`,
    prereqs: ["C03"], ext: [], sources: [S("Uniform Circular Motion")],
  },
];
