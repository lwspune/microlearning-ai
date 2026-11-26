import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Alcohols, Phenols and Ethers prerequisite graph (Balbharati Chemistry Std XII, Ch.11): classes and names, preparation of alcohols and phenols, physical properties, acidity, reactions of alcohols and phenol, and ethers.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/alcohols-phenols-ethers-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "classes-names-alcohols", title: "Classes and names", group: "Basics", tier: "core",
    oneLiner: t`Alcohols are primary, secondary or tertiary and mono-, di- or trihydric; phenols carry OH on a benzene ring; ethers are R–O–R′; IUPAC names end in -ol or use alkoxy-`,
    prereqs: [], ext: ["IUPAC nomenclature (Std XI Chemistry)"], sources: [S("Nomenclature"), S("Alcohols and Phenols")],
  },
  // Preparation
  {
    id: "C02", slug: "preparing-alcohols", title: "Preparing alcohols", group: "Preparation", tier: "core",
    oneLiner: t`Acid hydration of alkenes adds OH Markovnikov, hydroboration-oxidation anti-Markovnikov; reducing aldehydes and ketones, or Grignard reagents with carbonyls, give alcohols`,
    prereqs: ["C01"], ext: ["addition to alkenes (Std XI Chemistry)"], sources: [S("Alcohols and Phenols")],
  },
  {
    id: "C03", slug: "preparing-phenols", title: "Preparing phenol", group: "Preparation", tier: "core",
    oneLiner: t`Phenol from chlorobenzene (NaOH, high pressure), from sodium benzenesulfonate, from diazonium salts, and from cumene (giving acetone too)`,
    prereqs: ["C01"], ext: [], sources: [S("Alcohols and Phenols")],
  },
  // Properties
  {
    id: "C04", slug: "physical-properties-alcohols", title: "Hydrogen bonding and boiling points", group: "Properties", tier: "core",
    oneLiner: t`Hydrogen bonding gives alcohols high boiling points and water solubility; branching lowers boiling points; o-nitrophenol bonds internally, so it is more volatile`,
    prereqs: ["C01"], ext: [], sources: [S("Alcohols and Phenols")],
  },
  {
    id: "C05", slug: "acidity-alcohols-phenols", title: "Acidity of alcohols and phenols", group: "Properties", tier: "core",
    oneLiner: t`Phenol is more acidic than alcohols because the phenoxide ion is resonance stabilised; electron-withdrawing groups like $\ce{NO2}$ raise acidity, donating groups lower it`,
    prereqs: ["C01"], ext: [], sources: [S("Alcohols and Phenols")],
  },
  // Reactions
  {
    id: "C06", slug: "reactions-of-alcohols", title: "Reactions of alcohols", group: "Reactions", tier: "core",
    oneLiner: t`Alcohols react with HX and $\ce{PCl5}$; conc. $\ce{H2SO4}$ dehydrates them to the more substituted alkene; oxidation gives aldehydes, acids or ketones, while tertiary alcohols resist`,
    prereqs: ["C01"], ext: [], sources: [S("Alcohols and Phenols")],
  },
  {
    id: "C07", slug: "reactions-of-phenol", title: "Reactions of phenol", group: "Reactions", tier: "core",
    oneLiner: t`OH directs ortho and para: bromine water gives 2,4,6-tribromophenol; Kolbe's reaction ($\ce{CO2}$) gives salicylic acid; zinc dust reduces phenol to benzene`,
    prereqs: ["C05"], ext: [], sources: [S("Alcohols and Phenols")],
  },
  {
    id: "C08", slug: "ethers", title: "Preparing and cleaving ethers", group: "Reactions", tier: "core",
    oneLiner: t`Williamson synthesis needs a primary halide (else elimination wins); hot HI cleaves ethers, anisole to phenol and $\ce{CH3I}$; ethers form peroxides in air`,
    prereqs: ["C01"], ext: ["SN1 and SN2 (Halogen Derivatives)"], sources: [S("Ethers")],
  },
];
