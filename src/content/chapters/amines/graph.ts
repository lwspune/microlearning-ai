import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Amines prerequisite graph (Balbharati Chemistry Std XII, Ch.13): classes and names, preparation, physical properties, basicity, reactions, substitution in aniline and diazonium salts.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/amines-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "classes-names-amines", title: "Classes and names of amines", group: "Basics", tier: "core",
    oneLiner: t`Amines are primary, secondary or tertiary by the number of carbons on N ($sp^3$, pyramidal); IUPAC names end in -amine, with N- for groups on nitrogen`,
    prereqs: [], ext: ["IUPAC nomenclature (Std XI Chemistry)"], sources: [S("Classification and Nomenclature of Amines")],
  },
  // Preparation
  {
    id: "C02", slug: "preparing-amines", title: "Preparing amines", group: "Preparation", tier: "core",
    oneLiner: t`Reduce nitro compounds, nitriles (one carbon more) or amides; ammonolysis gives a mixture; Gabriel gives primary amines only; Hofmann bromamide removes one carbon`,
    prereqs: ["C01"], ext: [], sources: [S("Preparation of Amines")],
  },
  // Properties
  {
    id: "C03", slug: "physical-properties-amines", title: "Boiling points of amines", group: "Properties", tier: "core",
    oneLiner: t`N–H hydrogen bonds give boiling points primary > secondary > tertiary, below those of alcohols of similar mass`,
    prereqs: ["C01"], ext: [], sources: [S("Physical Properties of Amines")],
  },
  {
    id: "C04", slug: "basicity-of-amines", title: "Basic strength of amines", group: "Properties", tier: "core",
    oneLiner: t`The lone pair makes amines bases; alkyl groups raise basicity, resonance makes aniline weaker than ammonia; in water secondary > primary > tertiary`,
    prereqs: ["C01"], ext: [], sources: [S("Basicity of Amines")],
  },
  // Reactions
  {
    id: "C05", slug: "reactions-of-amines", title: "Reactions and tests of amines", group: "Reactions", tier: "core",
    oneLiner: t`Primary and secondary amines are acylated, tertiary not; carbylamine test for primary amines; Hinsberg's reagent sorts primary, secondary and tertiary`,
    prereqs: ["C01"], ext: [], sources: [S("Chemical Properties of Amines")],
  },
  {
    id: "C06", slug: "aniline-substitution", title: "Electrophilic substitution in aniline", group: "Reactions", tier: "core",
    oneLiner: t`$\ce{NH2}$ strongly activates ortho and para: bromine water gives 2,4,6-tribromoaniline, so acetylation first is needed for a single para product`,
    prereqs: ["C05"], ext: [], sources: [S("Electrophilic Aromatic Substitution in Aromatic Amines")],
  },
  {
    id: "C07", slug: "diazonium-salts", title: "Diazonium salts", group: "Reactions", tier: "core",
    oneLiner: t`Aniline with $\ce{NaNO2}$ and HCl at 273–278 K gives benzenediazonium chloride, which is replaced by Cl, Br, CN, I, OH or H, or couples to azo dyes`,
    prereqs: ["C05"], ext: [], sources: [S("Arene Diazonium Salts"), S("Chemical Properties of Amines")],
  },
];
