import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Electrostatics prerequisite graph (Balbharati Physics Std XII, Ch.8): Gauss' law and its applications, electric
 * potential and potential energy, dipoles, conductors and dielectrics, and capacitors.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/electrostatics-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Gauss' law
  {
    id: "C01", slug: "gauss-law", title: "Gauss' law", group: "Gauss' law", tier: "core",
    oneLiner: t`The electric flux through any closed surface is $\dfrac{q}{\varepsilon_0}$, where $q$ is the charge enclosed`,
    prereqs: [], ext: ["electric field and electric flux (Std XI Physics)"], sources: [S("Applications of Gauss' Law")],
  },
  {
    id: "C02", slug: "field-sphere", title: "Field of a charged sphere", group: "Gauss' law", tier: "core",
    oneLiner: t`Outside a charged spherical shell $E = \dfrac{q}{4\pi\varepsilon_0r^2}$, as if the charge sat at the centre; inside, $E = 0$`,
    prereqs: ["C01"], ext: [], sources: [S("Applications of Gauss' Law")],
  },
  {
    id: "C03", slug: "field-line", title: "Field of a line of charge", group: "Gauss' law", tier: "core",
    oneLiner: t`A long wire or cylinder with charge $\lambda$ per metre gives $E = \dfrac{\lambda}{2\pi\varepsilon_0r}$`,
    prereqs: ["C01"], ext: [], sources: [S("Applications of Gauss' Law")],
  },
  {
    id: "C04", slug: "field-sheet", title: "Field of a plane sheet", group: "Gauss' law", tier: "core",
    oneLiner: t`A large sheet with charge $\sigma$ per square metre gives $E = \dfrac{\sigma}{2\varepsilon_0}$ on each side; next to a charged conductor, $\dfrac{\sigma}{\varepsilon_0}$`,
    prereqs: ["C01"], ext: [], sources: [S("Applications of Gauss' Law")],
  },
  // Potential
  {
    id: "C05", slug: "electric-potential", title: "Electric potential", group: "Potential", tier: "core",
    oneLiner: t`Potential is work per unit charge from infinity: $V = \dfrac{q}{4\pi\varepsilon_0r}$, and potentials of several charges add as numbers`,
    prereqs: [], ext: ["Coulomb's law (Std XI Physics)"], sources: [S("Electric Potential and Potential Energy")],
  },
  {
    id: "C06", slug: "potential-gradient", title: "Potential gradient", group: "Potential", tier: "core",
    oneLiner: t`The field is the negative potential gradient, $E = -\dfrac{dV}{dx}$; between parallel plates, $E = \dfrac{V}{d}$`,
    prereqs: ["C05"], ext: [], sources: [S("Electric Potential and Potential Energy"), S("Equipotential Surfaces")],
  },
  {
    id: "C07", slug: "dipole-potential", title: "Potential of a dipole and equipotentials", group: "Potential", tier: "core", visual: true,
    oneLiner: t`A dipole gives $V = \dfrac{p\cos\theta}{4\pi\varepsilon_0r^2}$: zero all over its equatorial plane, an equipotential surface`,
    prereqs: ["C05"], ext: [], sources: [S("Electric Potential and Potential Energy"), S("Equipotential Surfaces")],
  },
  {
    id: "C08", slug: "potential-energy", title: "Potential energy of a system of charges", group: "Potential", tier: "core",
    oneLiner: t`Two charges have $U = \dfrac{q_1q_2}{4\pi\varepsilon_0r}$; for more, add the energy of every pair`,
    prereqs: ["C05"], ext: [], sources: [S("Potential Energy of Charges and Dipoles")],
  },
  {
    id: "C09", slug: "dipole-in-field", title: "A dipole in a uniform field", group: "Potential", tier: "core", visual: true,
    oneLiner: t`A uniform field twists a dipole with torque $pE\sin\theta$; its potential energy is $-pE\cos\theta$`,
    prereqs: ["C07", "C08"], ext: [], sources: [S("Potential Energy of Charges and Dipoles")],
  },
  // Capacitors
  {
    id: "C10", slug: "conductors-dielectrics", title: "Conductors and dielectrics", group: "Capacitors", tier: "core",
    oneLiner: t`Inside a conductor $E = 0$ and charge sits on its surface; a dielectric polarizes and cuts the field by its dielectric constant $k$`,
    prereqs: ["C02"], ext: [], sources: [S("Conductors, Insulators and Dielectrics")],
  },
  {
    id: "C11", slug: "capacitance", title: "Capacitance and the parallel plate capacitor", group: "Capacitors", tier: "core",
    oneLiner: t`$C = \dfrac{Q}{V}$; a parallel plate capacitor has $C = \dfrac{\varepsilon_0A}{d}$`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Capacitors and Combination of Capacitors")],
  },
  {
    id: "C12", slug: "capacitor-combinations", title: "Capacitors in series and parallel", group: "Capacitors", tier: "core",
    oneLiner: t`In parallel capacitances add; in series their reciprocals add`,
    prereqs: ["C11"], ext: [], sources: [S("Capacitors and Combination of Capacitors")],
  },
  {
    id: "C13", slug: "capacitor-dielectric", title: "A capacitor with a dielectric", group: "Capacitors", tier: "core",
    oneLiner: t`Filling with a dielectric multiplies $C$ by $k$; a slab of thickness $t$ gives $C = \dfrac{\varepsilon_0A}{d - t + \dfrac{t}{k}}$`,
    prereqs: ["C10", "C11"], ext: [], sources: [S("Parallel Plate Capacitor with a Dielectric")],
  },
  {
    id: "C14", slug: "capacitor-energy", title: "Energy stored in a capacitor", group: "Capacitors", tier: "core",
    oneLiner: t`$U = \dfrac{Q^2}{2C} = \dfrac{1}{2}CV^2$, stored in the field at $\dfrac{1}{2}\varepsilon_0E^2$ per cubic metre`,
    prereqs: ["C12"], ext: [], sources: [S("Energy Stored in a Capacitor")],
  },
];
