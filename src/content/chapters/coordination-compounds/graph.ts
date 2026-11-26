import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Coordination Compounds prerequisite graph (Balbharati Chemistry Std XII, Ch.9): terms, ligands, Werner's counting, classes and names of complexes, isomerism, valence bond and crystal field theories, stability and uses.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/coordination-compounds-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "complex-terms", title: "Complexes and their terms", group: "Basics", tier: "core",
    oneLiner: t`A complex has a central metal ion bonded to ligands in a coordination sphere, with counter ions outside; coordination number and the metal's oxidation state`,
    prereqs: [], ext: ["oxidation numbers (Std XI Chemistry)"], sources: [S("Terms Used in Coordination Chemistry")],
  },
  {
    id: "C02", slug: "types-of-ligands", title: "Types of ligands", group: "Basics", tier: "core",
    oneLiner: t`Ligands are Lewis bases: monodentate, bidentate (en, ox), polydentate (EDTA) or ambidentate ($\ce{NO2-}$, $\ce{SCN-}$); chelating ligands form rings`,
    prereqs: ["C01"], ext: [], sources: [S("Types of Ligands")],
  },
  {
    id: "C03", slug: "counting-ionisable-ions", title: "Ionisable ions and Werner's theory", group: "Basics", tier: "core",
    oneLiner: t`Only ions outside the coordination sphere precipitate: moles of AgCl from excess $\ce{AgNO3}$ give the formula of a cobalt ammine chloride`,
    prereqs: ["C01"], ext: [], sources: [S("Terms Used in Coordination Chemistry")],
  },
  // Naming
  {
    id: "C04", slug: "classes-of-complexes", title: "Classes of complexes", group: "Naming", tier: "core",
    oneLiner: t`Complexes are cationic, anionic or neutral, and homoleptic (one kind of ligand) or heteroleptic`,
    prereqs: ["C02"], ext: [], sources: [S("Classification of Complexes")],
  },
  {
    id: "C05", slug: "iupac-names-complexes", title: "Naming coordination compounds", group: "Naming", tier: "core",
    oneLiner: t`Name the cation first; ligands alphabetically with di-, tri- (bis-, tris-), then the metal with its oxidation state; an anionic complex ends in -ate`,
    prereqs: ["C04"], ext: [], sources: [S("IUPAC Nomenclature of Coordination Compounds")],
  },
  // Isomerism
  {
    id: "C06", slug: "structural-isomerism", title: "Structural isomerism", group: "Isomerism", tier: "core",
    oneLiner: t`Ionisation, linkage, coordination and solvate isomers have the same formula but different bonds or ions in the coordination sphere`,
    prereqs: ["C02"], ext: [], sources: [S("Isomerism in Coordination Compounds")],
  },
  {
    id: "C07", slug: "stereoisomerism", title: "Geometric and optical isomers", group: "Isomerism", tier: "core", visual: true,
    oneLiner: t`Square planar $\ce{MA2B2}$ and octahedral $\ce{MA4B2}$ have cis and trans isomers; complexes like cis-$\ce{[Co(en)2Cl2]+}$ are chiral`,
    prereqs: ["C02"], ext: [], sources: [S("Isomerism in Coordination Compounds")],
  },
  // Bonding
  {
    id: "C08", slug: "valence-bond-theory", title: "Valence bond theory of complexes", group: "Bonding", tier: "core",
    oneLiner: t`The metal's empty orbitals hybridise to take ligand pairs: $sp^3$ tetrahedral, $dsp^2$ square planar, $d^2sp^3$ or $sp^3d^2$ octahedral; unpaired electrons give the magnetism`,
    prereqs: ["C01"], ext: ["electronic configuration of transition metal ions (Transition and Inner Transition Elements)"], sources: [S("Theories of Bonding in Complexes")],
  },
  {
    id: "C09", slug: "crystal-field-theory", title: "Crystal field theory", group: "Bonding", tier: "core", visual: true,
    oneLiner: t`Octahedral ligands split $d$ orbitals into $t_{2g}$ and $e_g$ by $\Delta_o$; strong field ligands pair electrons (low spin), weak field ones do not (high spin)`,
    prereqs: ["C02"], ext: ["electronic configuration of transition metal ions (Transition and Inner Transition Elements)"], sources: [S("Theories of Bonding in Complexes")],
  },
  {
    id: "C10", slug: "stability-applications", title: "Stability and uses of complexes", group: "Bonding", tier: "core",
    oneLiner: t`A larger stability constant means a more stable complex; charge, size and chelation raise it; uses in medicine, analysis and biology`,
    prereqs: ["C02"], ext: [], sources: [S("Stability of Coordination Compounds"), S("Applications of Coordination Compounds")],
  },
];
