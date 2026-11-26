import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Magnetic Fields due to Electric Current prerequisite graph (Balbharati Physics Std XII, Ch.10): forces on moving
 * charges and currents, the cyclotron, torque and the moving coil galvanometer, Biot-Savart and Ampere's laws.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/magnetic-fields-current-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Forces in a magnetic field
  {
    id: "C01", slug: "magnetic-force-charge", title: "Magnetic force on a moving charge", group: "Forces in a magnetic field", tier: "core",
    oneLiner: t`$\vec{F} = q\vec{v} \times \vec{B}$: size $qvB\sin\theta$, at right angles to both $\vec{v}$ and $\vec{B}$, so it does no work`,
    prereqs: [], ext: ["magnetic field and the vector product (Std XI Physics)"], sources: [S("Magnetic Force on a Moving Charge")],
  },
  {
    id: "C02", slug: "circular-motion-field", title: "Circular and helical motion in a field", group: "Forces in a magnetic field", tier: "core", visual: true,
    oneLiner: t`Moving across a uniform field, a charge circles with $r = \dfrac{mv}{qB}$ and frequency $\dfrac{qB}{2\pi m}$, whatever its speed`,
    prereqs: ["C01"], ext: ["uniform circular motion (Std XI Physics)"], sources: [S("Cyclotron and Helical Motion")],
  },
  {
    id: "C03", slug: "cyclotron", title: "The cyclotron", group: "Forces in a magnetic field", tier: "core",
    oneLiner: t`An alternating voltage at the cyclotron frequency $\dfrac{qB}{2\pi m}$ kicks ions across the gap; they leave with $\dfrac{q^2B^2R^2}{2m}$`,
    prereqs: ["C02"], ext: [], sources: [S("Cyclotron and Helical Motion")],
  },
  {
    id: "C04", slug: "force-on-wire", title: "Force on a current-carrying wire", group: "Forces in a magnetic field", tier: "core",
    oneLiner: t`A wire of length $l$ carrying $I$ across a field feels $F = BIl\sin\theta$; a closed loop in a uniform field feels no net force`,
    prereqs: ["C01"], ext: [], sources: [S("Force on a Current-Carrying Wire")],
  },
  // Fields of currents
  {
    id: "C05", slug: "straight-wire-field", title: "Biot-Savart law and a long straight wire", group: "Fields of currents", tier: "core", visual: true,
    oneLiner: t`$dB = \dfrac{\mu_0}{4\pi}\dfrac{I\,dl\sin\theta}{r^2}$; a long straight wire gives $B = \dfrac{\mu_0I}{2\pi r}$ in circles round it`,
    prereqs: [], ext: ["magnetic field lines (Std XI Physics)"], sources: [S("Magnetic Field due to a Current")],
  },
  {
    id: "C06", slug: "loop-field", title: "Field of a circular loop and an arc", group: "Fields of currents", tier: "core",
    oneLiner: t`At the centre of $N$ turns of radius $R$, $B = \dfrac{\mu_0NI}{2R}$; an arc of angle $\theta$ gives $\dfrac{\mu_0I\theta}{4\pi R}$`,
    prereqs: ["C05"], ext: [], sources: [S("Magnetic Field due to a Current")],
  },
  {
    id: "C07", slug: "parallel-currents", title: "Force between parallel currents", group: "Fields of currents", tier: "core",
    oneLiner: t`Two long parallel wires attract if their currents run the same way, with $\dfrac{F}{l} = \dfrac{\mu_0I_1I_2}{2\pi d}$`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Force Between Two Parallel Currents")],
  },
  {
    id: "C08", slug: "magnetic-dipole-moment", title: "Magnetic dipole moment of a loop", group: "Fields of currents", tier: "core",
    oneLiner: t`A current loop is a magnetic dipole of moment $m = NIA$, with potential energy $-\vec{m} \cdot \vec{B}$ in a field`,
    prereqs: ["C06"], ext: [], sources: [S("Magnetic Dipole Moment and Potential Energy")],
  },
  {
    id: "C09", slug: "torque-galvanometer", title: "Torque on a coil and the moving coil galvanometer", group: "Fields of currents", tier: "core",
    oneLiner: t`A coil in a field feels $\tau = NIAB\sin\theta = mB\sin\theta$; in a radial field the galvanometer's deflection is proportional to $I$`,
    prereqs: ["C04", "C08"], ext: [], sources: [S("Torque on a Current Loop and the Moving Coil Galvanometer")],
  },
  // Ampere's law
  {
    id: "C10", slug: "ampere-law", title: "Ampere's circuital law", group: "Ampere's law", tier: "core",
    oneLiner: t`Round any closed loop, $\oint\vec{B} \cdot d\vec{l} = \mu_0I$, where $I$ is the current threading the loop`,
    prereqs: ["C05"], ext: [], sources: [S("Ampere's Law, Solenoid and Toroid")],
  },
  {
    id: "C11", slug: "solenoid-toroid", title: "Solenoid and toroid", group: "Ampere's law", tier: "core",
    oneLiner: t`Inside a long solenoid $B = \mu_0nI$, uniform; inside a toroid $B = \dfrac{\mu_0NI}{2\pi r}$`,
    prereqs: ["C10"], ext: [], sources: [S("Ampere's Law, Solenoid and Toroid")],
  },
];
