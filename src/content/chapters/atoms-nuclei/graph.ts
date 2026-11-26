import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Structure of Atoms and Nuclei prerequisite graph (Balbharati Physics Std XII, Ch.15): atomic models, Bohr's
 * hydrogen atom and its spectrum, the nucleus and its binding energy, radioactivity, fission and fusion.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/atoms-nuclei-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // The atom
  {
    id: "C01", slug: "atomic-models", title: "Thomson's and Rutherford's models", group: "The atom", tier: "core", visual: true,
    oneLiner: t`Rutherford's alpha scattering showed a tiny, dense, positive nucleus; an orbiting electron should radiate and spiral in, which his model could not explain`,
    prereqs: [], ext: [], sources: [S("Thomson's and Rutherford's Atomic Models")],
  },
  {
    id: "C02", slug: "bohr-postulates", title: "Bohr's postulates", group: "The atom", tier: "core",
    oneLiner: t`Electrons move in stationary orbits with $L = \dfrac{nh}{2\pi}$, without radiating, and emit or absorb a photon $h\nu = E_i - E_f$ only on jumping between them`,
    prereqs: ["C01"], ext: [], sources: [S("Bohr's Atomic Model")],
  },
  {
    id: "C03", slug: "bohr-radius-speed", title: "Radius and speed in Bohr orbits", group: "The atom", tier: "core",
    oneLiner: t`In hydrogen $r_n = \dfrac{\varepsilon_0h^2n^2}{\pi me^2} \propto n^2$ and $v_n = \dfrac{e^2}{2\varepsilon_0nh} \propto \dfrac{1}{n}$`,
    prereqs: ["C02"], ext: ["circular motion and Coulomb's law (Std XI Physics; Electrostatics, Ch.8)"], sources: [S("Bohr's Atomic Model")],
  },
  {
    id: "C04", slug: "bohr-energy", title: "Energy levels of hydrogen", group: "The atom", tier: "core",
    oneLiner: t`$E_n = -\dfrac{13.6}{n^2}\ \mathrm{eV}$; ionization from the ground state takes $13.6\ \mathrm{eV}$, and excitation energies are differences of levels`,
    prereqs: ["C03"], ext: [], sources: [S("Bohr's Atomic Model")],
  },
  {
    id: "C05", slug: "hydrogen-spectrum", title: "The hydrogen spectrum", group: "The atom", tier: "core", visual: true,
    oneLiner: t`$\dfrac{1}{\lambda} = R\left(\dfrac{1}{n^2} - \dfrac{1}{m^2}\right)$: Lyman, Balmer, Paschen, Brackett and Pfund series end on $n = 1, 2, 3, 4, 5$`,
    prereqs: ["C04"], ext: ["photon energy (Dual Nature of Radiation and Matter, Ch.14)"], sources: [S("Atomic Spectra")],
  },
  // The nucleus
  {
    id: "C06", slug: "nucleus-size", title: "Constituents and size of the nucleus", group: "The nucleus", tier: "core",
    oneLiner: t`A nucleus holds $Z$ protons and $A - Z$ neutrons in a radius $R = R_0A^{1/3}$, so all nuclei have about the same density`,
    prereqs: [], ext: [], sources: [S("Atomic Nucleus: Constituents, Size and Forces")],
  },
  {
    id: "C07", slug: "binding-energy", title: "Mass defect and binding energy", group: "The nucleus", tier: "core",
    oneLiner: t`A nucleus weighs less than its parts; the mass defect $\Delta m$ is its binding energy $\Delta mc^2$, $931.5\ \mathrm{MeV}$ per u`,
    prereqs: ["C06"], ext: [], sources: [S("Nuclear Binding Energy")],
  },
  // Radioactivity
  {
    id: "C08", slug: "radioactive-decays", title: "Alpha, beta and gamma decay", group: "Radioactivity", tier: "core",
    oneLiner: t`Alpha decay removes $^4_2\mathrm{He}$, beta decay turns a neutron into a proton (or back), gamma decay lowers energy; the energy released is $Q = \Delta mc^2$`,
    prereqs: ["C07"], ext: [], sources: [S("Radioactive Decays")],
  },
  {
    id: "C09", slug: "decay-law", title: "The law of radioactive decay", group: "Radioactivity", tier: "core",
    oneLiner: t`$\dfrac{dN}{dt} = -\lambda N$ gives $N = N_0e^{-\lambda t}$; the activity $A = \lambda N$ falls the same way`,
    prereqs: ["C08"], ext: ["exponential and logarithmic functions (Std XI Maths)"], sources: [S("Law of Radioactive Decay, Half-Life and Average Life")],
  },
  {
    id: "C10", slug: "half-life", title: "Half-life and mean life", group: "Radioactivity", tier: "core", visual: true,
    oneLiner: t`$T_{1/2} = \dfrac{0.693}{\lambda}$ and $\tau = \dfrac{1}{\lambda}$; after $n$ half-lives a fraction $\dfrac{1}{2^n}$ remains`,
    prereqs: ["C09"], ext: [], sources: [S("Law of Radioactive Decay, Half-Life and Average Life")],
  },
  // Nuclear energy
  {
    id: "C11", slug: "fission-fusion", title: "Fission, fusion and reactors", group: "Nuclear energy", tier: "core",
    oneLiner: t`Splitting heavy nuclei or joining light ones raises the binding energy per nucleon and releases energy; a reactor controls a fission chain reaction`,
    prereqs: ["C07"], ext: [], sources: [S("Nuclear Fission and Fusion")],
  },
  {
    id: "C12", slug: "de-broglie-bohr", title: "de Broglie's explanation of Bohr's orbits", group: "The atom", tier: "core", visual: true,
    oneLiner: t`An allowed orbit holds a whole number of electron waves: $2\pi r_n = n\lambda$, which gives Bohr's $mvr = \dfrac{nh}{2\pi}$`,
    prereqs: ["C02"], ext: ["the de Broglie wavelength (Dual Nature, Ch.14)"],
    sources: ["cbse-12/atoms#de Broglie's Explanation of Bohr's Postulate"],
  },
];
