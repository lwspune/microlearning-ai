import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Laws of Motion prerequisite graph (Balbharati Physics Std XI, Ch.4): Newton's laws, kinds of force, work and energy, momentum and collisions, centre of mass, torque and equilibrium.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/laws-of-motion-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Forces
  {
    id: "C01", slug: "newtons-laws", title: "Newton's laws of motion", group: "Forces", tier: "core",
    oneLiner: t`A body keeps its state of motion unless a net force acts; $\vec{F} = m\vec{a}$; forces come in equal and opposite pairs. They hold in inertial frames`,
    prereqs: [], ext: [], sources: [S("Newton's Laws of Motion"), S("Aristotle's Fallacy"), S("Inertial and Non-Inertial Frames of Reference")],
  },
  {
    id: "C02", slug: "types-of-forces", title: "Kinds of force", group: "Forces", tier: "core",
    oneLiner: t`Weight, normal reaction, tension, friction and spring forces; fundamental forces; and pseudo forces in an accelerating frame`,
    prereqs: ["C01"], ext: [], sources: [S("Types of Forces")],
  },
  // Energy and momentum
  {
    id: "C03", slug: "work-energy", title: "Work and the work-energy theorem", group: "Energy and momentum", tier: "core",
    oneLiner: t`Work $W = \vec{F} \cdot \vec{s}$; the net work on a body equals its change in kinetic energy, $W = \Delta K$`,
    prereqs: ["C01"], ext: ["dot product (Mathematical Methods, Ch.2)"], sources: [S("Work Energy Theorem")],
  },
  {
    id: "C04", slug: "momentum-impulse", title: "Momentum, impulse and its conservation", group: "Energy and momentum", tier: "core",
    oneLiner: t`Impulse $\vec{F}\Delta t = \Delta\vec{p}$; with no external force the total momentum of a system stays constant`,
    prereqs: ["C01"], ext: [], sources: [S("Impulse of a Force"), S("Principle of Conservation of Linear Momentum")],
  },
  {
    id: "C05", slug: "collisions", title: "Collisions", group: "Energy and momentum", tier: "core", visual: true,
    oneLiner: t`Momentum is conserved in every collision; kinetic energy only in an elastic one. The coefficient of restitution $e$ ranges from $0$ to $1$`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Collisions")],
  },
  // Systems of particles
  {
    id: "C06", slug: "centre-of-mass", title: "Centre of mass", group: "Systems of particles", tier: "core",
    oneLiner: t`$\vec{r}_{cm} = \dfrac{\sum m_i\vec{r}_i}{\sum m_i}$; the centre of mass moves as if all the mass were there, acted on by the external forces`,
    prereqs: ["C04"], ext: [], sources: [S("Centre of Mass")],
  },
  {
    id: "C07", slug: "torque-equilibrium", title: "Torque, couples and equilibrium", group: "Systems of particles", tier: "core",
    oneLiner: t`Torque $\vec{\tau} = \vec{r} \times \vec{F}$; a body is in equilibrium when the net force and the net torque are zero`,
    prereqs: ["C01"], ext: ["cross product (Mathematical Methods, Ch.2)"], sources: [S("Moment of a Force and Torque"), S("Couple and its Torque"), S("Mechanical Equilibrium"), S("Centre of Gravity")],
  },
  {
    id: "C08", slug: "potential-energy", title: "Potential energy and conservation of mechanical energy", group: "Energy and momentum", tier: "core", visual: true,
    oneLiner: t`For a conservative force $F = -\dfrac{dU}{dx}$; a stretched spring stores $\tfrac{1}{2}kx^2$; with no friction, $K + U$ stays the same`,
    prereqs: ["C03"], ext: [],
    sources: ["jee-main/work-energy-and-power#Potential Energy and Conservation of Mechanical Energy", "neet/work-energy-and-power#Potential Energy and Conservation", "nda/work-energy-and-power#Energy and Conservation"],
  },
];
