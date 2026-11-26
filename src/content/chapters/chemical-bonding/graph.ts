import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Chemical Bonding prerequisite graph (Balbharati Chemistry Std XI, Ch.5): the octet rule and Lewis structures, lattice energy, formal charge, bond parameters and polarity, VSEPR shapes, orbital overlap, hybridisation and molecular orbitals.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/chemical-bonding-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Lewis approach
  {
    id: "C01", slug: "octet-lewis-structures", title: "Octet rule and Lewis structures", group: "Lewis approach", tier: "core",
    oneLiner: t`Atoms bond to reach an octet by transferring (ionic) or sharing (covalent, coordinate) electrons; exceptions: incomplete ($\ce{BF3}$), expanded ($\ce{SF6}$) and odd-electron octets`,
    prereqs: [], ext: ["electronic configuration (Structure of Atom)"], sources: [S("Kossel and Lewis Approach to Chemical Bonding")],
  },
  {
    id: "C02", slug: "lattice-energy", title: "Ionic bonds and lattice energy", group: "Lewis approach", tier: "core",
    oneLiner: t`Lattice energy measures an ionic solid's stability; it grows with ionic charge and as ions get smaller`,
    prereqs: ["C01"], ext: [], sources: [S("Kossel and Lewis Approach to Chemical Bonding")],
  },
  {
    id: "C03", slug: "formal-charge", title: "Formal charge", group: "Lewis approach", tier: "core",
    oneLiner: t`Formal charge $=$ valence electrons $-$ lone-pair electrons $- \tfrac12$ bonding electrons; the best Lewis structure has the smallest formal charges`,
    prereqs: ["C01"], ext: [], sources: [S("Kossel and Lewis Approach to Chemical Bonding")],
  },
  // Bond properties
  {
    id: "C04", slug: "bond-parameters-polarity", title: "Bond parameters and polarity", group: "Bond properties", tier: "core",
    oneLiner: t`More bonds between two atoms make the bond shorter and stronger; unequal sharing makes a bond polar, but symmetric molecules like $\ce{CO2}$ have zero dipole moment`,
    prereqs: ["C01"], ext: [], sources: [S("Parameters of Covalent Bond"), S("Dipole Moment")],
  },
  // Shapes
  {
    id: "C05", slug: "vsepr-shapes", title: "VSEPR and molecular shapes", group: "Shapes", tier: "core",
    oneLiner: t`Electron pairs around the central atom spread apart; lone pairs repel more, so $\ce{CH4}$ is $109.5^\circ$, $\ce{NH3}$ $107^\circ$, $\ce{H2O}$ $104.5^\circ$`,
    prereqs: ["C01"], ext: [], sources: [S("Valence Shell Electron Pair Repulsion Theory")],
  },
  // Valence bond theory
  {
    id: "C06", slug: "orbital-overlap", title: "Orbital overlap: sigma and pi", group: "Valence bond theory", tier: "core",
    oneLiner: t`A bond forms where half-filled orbitals overlap: head-on overlap gives a $\sigma$ bond, sideways overlap of p orbitals a weaker $\pi$ bond`,
    prereqs: ["C01"], ext: [], sources: [S("Valence Bond Theory")],
  },
  {
    id: "C07", slug: "hybridisation", title: "Hybridisation", group: "Valence bond theory", tier: "core",
    oneLiner: t`Orbitals mix into equal hybrids: $sp$ linear ($\ce{BeCl2}$), $sp^2$ trigonal planar ($\ce{BF3}$, ethene), $sp^3$ tetrahedral ($\ce{CH4}$, $\ce{NH3}$, $\ce{H2O}$)`,
    prereqs: ["C05", "C06"], ext: [], sources: [S("Valence Bond Theory")],
  },
  // Molecular orbitals
  {
    id: "C08", slug: "molecular-orbital-theory", title: "Molecular orbital theory", group: "Molecular orbitals", tier: "core",
    oneLiner: t`Atomic orbitals combine into bonding and antibonding molecular orbitals; bond order $= \tfrac12(N_b - N_a)$; unpaired electrons make $\ce{O2}$ paramagnetic`,
    prereqs: ["C06"], ext: [], sources: [S("Molecular Orbital Theory")],
  },
];
