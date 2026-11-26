import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Solid State prerequisite graph (Balbharati Chemistry Std XII, Ch.1): types of solids, cubic unit cells, close packing and voids, packing efficiency and density, defects, and electrical and magnetic properties.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/solid-state-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Solids
  {
    id: "C01", slug: "types-of-solids", title: "Crystalline and amorphous solids", group: "Solids", tier: "core",
    oneLiner: t`Crystalline solids have long-range order and sharp melting points, amorphous ones do not; crystals are ionic, molecular, covalent network or metallic`,
    prereqs: [], ext: [], sources: [S("Classification of Crystalline Solids")],
  },
  // Unit cells
  {
    id: "C02", slug: "unit-cells", title: "Crystal lattice and unit cells", group: "Unit cells", tier: "core", visual: true,
    oneLiner: t`A crystal lattice repeats a unit cell; cubic unit cells are simple, body-centred (bcc) or face-centred (fcc)`,
    prereqs: ["C01"], ext: [], sources: [S("Crystal Structure and Unit Cells")],
  },
  {
    id: "C03", slug: "atoms-per-unit-cell", title: "Counting particles in a unit cell", group: "Unit cells", tier: "core", visual: true,
    oneLiner: t`A corner particle counts $\tfrac18$, a face $\tfrac12$, an edge $\tfrac14$, the body $1$: simple cubic 1, bcc 2, fcc 4; a formula from positions`,
    prereqs: ["C02"], ext: [], sources: [S("Cubic System")],
  },
  // Packing
  {
    id: "C04", slug: "close-packing-voids", title: "Close packing and voids", group: "Packing", tier: "core", visual: true,
    oneLiner: t`Spheres pack as hcp (ABAB) or ccp (ABCABC) with coordination number 12; $N$ spheres leave $2N$ tetrahedral and $N$ octahedral voids`,
    prereqs: ["C02"], ext: [], sources: [S("Packing of Particles in Crystal Lattice")],
  },
  {
    id: "C05", slug: "formula-from-voids", title: "Formula from occupied voids", group: "Packing", tier: "core",
    oneLiner: t`A compound's formula follows from the lattice and the fraction of voids its other ion fills`,
    prereqs: ["C04"], ext: [], sources: [S("Packing of Particles in Crystal Lattice")],
  },
  {
    id: "C06", slug: "packing-efficiency", title: "Radius and packing efficiency", group: "Packing", tier: "core", visual: true,
    oneLiner: t`Edge and radius: $a = 2r$ (simple cubic), $\sqrt3 a = 4r$ (bcc), $\sqrt2 a = 4r$ (fcc); packing efficiency 52.4%, 68%, 74%`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Packing Efficiency"), S("Cubic System")],
  },
  {
    id: "C07", slug: "density-of-unit-cell", title: "Density from the unit cell", group: "Packing", tier: "core",
    oneLiner: t`Density $\rho = \dfrac{nM}{a^3 N_A}$ links density, molar mass, edge length and the number of atoms per unit cell`,
    prereqs: ["C06"], ext: [], sources: [S("Cubic System")],
  },
  // Properties
  {
    id: "C08", slug: "crystal-defects", title: "Point defects in crystals", group: "Properties", tier: "core",
    oneLiner: t`Schottky defects (missing ion pairs) lower density; Frenkel defects (a cation moved to an interstitial site) do not; impurity defects create vacancies`,
    prereqs: ["C01"], ext: [], sources: [S("Crystal Defects and Imperfections")],
  },
  {
    id: "C09", slug: "band-theory", title: "Conductors, semiconductors and insulators", group: "Properties", tier: "core",
    oneLiner: t`Band theory: the gap between valence and conduction bands makes a conductor, semiconductor or insulator; doping gives n-type and p-type`,
    prereqs: ["C01"], ext: [], sources: [S("Electrical Properties of Solids")],
  },
  {
    id: "C10", slug: "magnetic-properties", title: "Magnetic properties of solids", group: "Properties", tier: "core",
    oneLiner: t`Paired electrons make a solid diamagnetic, unpaired ones paramagnetic; aligned domains make it ferromagnetic`,
    prereqs: [], ext: [], sources: [S("Magnetic Properties of Solids")],
  },
];
