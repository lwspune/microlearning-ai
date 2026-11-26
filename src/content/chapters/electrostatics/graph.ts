import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Electrostatics prerequisite graph (Balbharati Physics Std XI, Ch.10): electric charge, Coulomb's law and superposition, the electric field and its lines, flux and Gauss' law, and the electric dipole.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/electrostatics-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Charge and force
  {
    id: "C01", slug: "electric-charge", title: "Electric charge and its properties", group: "Charge and force", tier: "core",
    oneLiner: t`Charge is quantised, $q = ne$, conserved and additive; bodies charge by friction, conduction or induction`,
    prereqs: [], ext: [], sources: [S("Electric Charges and Their Basic Properties")],
  },
  {
    id: "C02", slug: "coulombs-law", title: "Coulomb's law", group: "Charge and force", tier: "core",
    oneLiner: t`$F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$ along the line joining two point charges; a medium reduces it by $\varepsilon_r$`,
    prereqs: ["C01"], ext: [], sources: [S("Coulomb's Law")],
  },
  {
    id: "C03", slug: "superposition", title: "Superposition of forces", group: "Charge and force", tier: "core", visual: true,
    oneLiner: t`The force on a charge from several others is the vector sum of the separate Coulomb forces`,
    prereqs: ["C02"], ext: [], sources: [S("Principle of Superposition")],
  },
  // Field
  {
    id: "C04", slug: "electric-field", title: "Electric field and lines of force", group: "Field", tier: "core", visual: true,
    oneLiner: t`$\vec{E} = \dfrac{\vec{F}}{q_0}$; a point charge gives $E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r^2}$, and field lines start on $+$ and end on $-$ charges`,
    prereqs: ["C02"], ext: [], sources: [S("Electric Field and Lines of Force")],
  },
  {
    id: "C05", slug: "gauss-law", title: "Electric flux and Gauss' law", group: "Field", tier: "core",
    oneLiner: t`Flux $\phi = \vec{E}\cdot\vec{A}$; the total flux out of a closed surface is $\dfrac{q}{\varepsilon_0}$; charge may spread with densities $\lambda$, $\sigma$, $\rho$`,
    prereqs: ["C04"], ext: [], sources: [S("Electric Flux and Gauss' Law"), S("Continuous Charge Distribution")],
  },
  {
    id: "C06", slug: "electric-dipole", title: "The electric dipole", group: "Field", tier: "core", visual: true,
    oneLiner: t`A dipole has moment $p = q \times 2l$; its field on the axis is twice that on the equator at the same far distance`,
    prereqs: ["C04"], ext: [], sources: [S("Electric Dipole")],
  },
];
