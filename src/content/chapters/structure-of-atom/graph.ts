import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Structure of Atom prerequisite graph (Balbharati Chemistry Std XI, Ch.4): subatomic particles and nuclides, isotopes, Rutherford's model, radiation and quanta, Bohr's model, quantum numbers and electronic configuration.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/structure-of-atom-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Nucleus
  {
    id: "C01", slug: "subatomic-particles", title: "Protons, neutrons and electrons", group: "Nucleus", tier: "core",
    oneLiner: t`Atomic number $Z$ counts protons, mass number $A$ protons plus neutrons; a nuclide $^{A}_{Z}\mathrm{X}$ has $A - Z$ neutrons, and an ion's charge changes only its electrons`,
    prereqs: [], ext: [], sources: [S("Subatomic Particles"), S("Atomic Number and Atomic Mass Number")],
  },
  {
    id: "C02", slug: "isotopes-isobars", title: "Isotopes, isobars and isotones", group: "Nucleus", tier: "core",
    oneLiner: t`Isotopes share $Z$, isobars share $A$, isotones share the neutron count; isoelectronic species have the same number of electrons`,
    prereqs: ["C01"], ext: [], sources: [S("Isotopes, Isobars and Isotones")],
  },
  // Models
  {
    id: "C03", slug: "rutherford-model", title: "Rutherford's model and its drawbacks", group: "Models", tier: "core",
    oneLiner: t`A tiny dense nucleus with electrons around it; an orbiting electron should radiate and spiral in, and the model cannot explain line spectra`,
    prereqs: ["C01"], ext: [], sources: [S("Drawbacks of Rutherford's Atomic Model")],
  },
  {
    id: "C04", slug: "radiation-and-quanta", title: "Light, quanta and line spectra", group: "Models", tier: "core",
    oneLiner: t`$c = \nu\lambda$ and wavenumber $\bar\nu = 1/\lambda$; light comes in quanta of energy $E = h\nu$; hydrogen gives the simplest line spectrum`,
    prereqs: [], ext: [], sources: [S("Developments Leading to the Bohr Model")],
  },
  {
    id: "C05", slug: "bohr-model", title: "Bohr's model of the hydrogen atom", group: "Models", tier: "core",
    oneLiner: t`Electrons move in fixed orbits of energy $E_n \propto -\dfrac{Z^2}{n^2}$ and radius $r_n \propto \dfrac{n^2}{Z}$; a jump between orbits emits or absorbs one photon`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Bohr's Model for the Hydrogen Atom")],
  },
  // Quantum model
  {
    id: "C06", slug: "quantum-numbers", title: "Quantum numbers and orbitals", group: "Quantum model", tier: "core",
    oneLiner: t`$n$, $l$ ($0$ to $n-1$), $m_l$ ($-l$ to $+l$) and $m_s$ ($\pm\tfrac12$) label an electron; shell $n$ has $n^2$ orbitals and holds $2n^2$ electrons; s orbitals are spherical, p dumbbell-shaped`,
    prereqs: ["C05"], ext: [], sources: [S("Quantum Mechanical Model of the Atom")],
  },
  {
    id: "C07", slug: "electronic-configuration", title: "Electronic configuration", group: "Quantum model", tier: "core",
    oneLiner: t`Fill orbitals by the $(n + l)$ rule (Aufbau), at most two opposite spins each (Pauli), singly first (Hund); Cr and Cu take half-filled and full $d$`,
    prereqs: ["C06"], ext: [], sources: [S("Quantum Mechanical Model of the Atom")],
  },
];
