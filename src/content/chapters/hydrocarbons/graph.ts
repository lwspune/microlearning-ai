import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Hydrocarbons prerequisite graph (Balbharati Chemistry Std XI, Ch.15): alkanes, alkenes and their additions and oxidation, alkynes, aromaticity and electrophilic substitution in benzene.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/hydrocarbons-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Alkanes
  {
    id: "C01", slug: "alkanes-preparation-properties", title: "Preparing alkanes", group: "Alkanes", tier: "core",
    oneLiner: t`Alkanes come from petroleum, from alkyl halides (reduction, Wurtz) and from sodium carboxylates (soda lime, Kolbe); branching lowers the boiling point`,
    prereqs: [], ext: ["IUPAC names (Basic Principles of Organic Chemistry)"], sources: [S("Alkanes")],
  },
  {
    id: "C02", slug: "alkane-reactions", title: "Reactions of alkanes", group: "Alkanes", tier: "core",
    oneLiner: t`Free-radical halogenation gives one product per kind of hydrogen; alkanes burn to $\ce{CO2}$ and water and crack on strong heating (pyrolysis)`,
    prereqs: ["C01"], ext: [], sources: [S("Alkanes")],
  },
  // Alkenes
  {
    id: "C03", slug: "preparing-alkenes", title: "Preparing alkenes and their isomers", group: "Alkenes", tier: "core",
    oneLiner: t`Alcoholic KOH removes HX and hot conc. $\ce{H2SO4}$ removes water, favouring the more substituted alkene; alkenes with two different groups on each carbon have cis and trans forms`,
    prereqs: [], ext: ["isomerism (Basic Principles of Organic Chemistry)"], sources: [S("Alkenes")],
  },
  {
    id: "C04", slug: "alkene-addition", title: "Addition to alkenes", group: "Alkenes", tier: "core",
    oneLiner: t`Alkenes add $\ce{H2}$, $\ce{X2}$, HX and water; HX adds Markovnikov (H to the carbon with more H), but HBr with peroxide adds the other way`,
    prereqs: ["C03"], ext: ["carbocation stability (Basic Principles of Organic Chemistry)"], sources: [S("Alkenes")],
  },
  {
    id: "C05", slug: "alkene-oxidation-ozonolysis", title: "Oxidation and ozonolysis of alkenes", group: "Alkenes", tier: "core",
    oneLiner: t`Cold dilute alkaline $\ce{KMnO4}$ gives a diol; ozonolysis splits the double bond into two carbonyls, so the products reveal the alkene`,
    prereqs: ["C03"], ext: [], sources: [S("Alkenes")],
  },
  // Alkynes
  {
    id: "C06", slug: "alkynes", title: "Alkynes", group: "Alkynes", tier: "core",
    oneLiner: t`Terminal alkynes have an acidic hydrogen (sodamide removes it); Lindlar's catalyst gives cis alkenes; $\ce{HgSO4}$/$\ce{H2SO4}$ adds water to give a carbonyl`,
    prereqs: ["C04"], ext: [], sources: [S("Alkynes")],
  },
  // Aromatic hydrocarbons
  {
    id: "C07", slug: "aromaticity-benzene", title: "Benzene and aromaticity", group: "Aromatic hydrocarbons", tier: "core",
    oneLiner: t`A planar, cyclic, fully conjugated ring with $(4n + 2)$ $\pi$ electrons is aromatic (Hückel); benzene is a resonance hybrid, made from sodium benzoate, phenol or ethyne`,
    prereqs: [], ext: ["resonance (Basic Principles of Organic Chemistry)"], sources: [S("Aromatic Hydrocarbons")],
  },
  {
    id: "C08", slug: "electrophilic-substitution", title: "Electrophilic substitution in benzene", group: "Aromatic hydrocarbons", tier: "core",
    oneLiner: t`Benzene substitutes rather than adds: nitration ($\ce{NO2+}$), halogenation, sulfonation, Friedel-Crafts alkylation and acylation; groups direct ortho-para or meta`,
    prereqs: ["C07"], ext: [], sources: [S("Aromatic Hydrocarbons")],
  },
];
