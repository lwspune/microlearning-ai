import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Aldehydes, Ketones and Carboxylic Acids prerequisite graph (Balbharati Chemistry Std XII, Ch.12): classes and names, the carbonyl group, preparation, physical properties, nucleophilic addition, reduction and oxidation, aldol and Cannizzaro reactions, and carboxylic acids.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/aldehydes-ketones-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "classes-names-carbonyl", title: "Classes and names", group: "Basics", tier: "core",
    oneLiner: t`Aldehydes end in -al, ketones -one, carboxylic acids -oic acid; aromatic ones have the group on or beside a benzene ring`,
    prereqs: [], ext: ["IUPAC nomenclature (Std XI Chemistry)"], sources: [S("Classification of Aldehydes, Ketones and Carboxylic Acids"), S("Nomenclature")],
  },
  {
    id: "C02", slug: "carbonyl-polarity", title: "Polarity of the carbonyl group", group: "Basics", tier: "core",
    oneLiner: t`C=O is polar, carbon $\delta+$; nucleophiles add to it; aldehydes react faster than ketones (less crowded, less electron-rich carbon)`,
    prereqs: ["C01"], ext: [], sources: [S("Polarity of the Carbonyl Group")],
  },
  // Preparation
  {
    id: "C03", slug: "preparing-aldehydes-ketones", title: "Preparing aldehydes and ketones", group: "Preparation", tier: "core",
    oneLiner: t`From alcohols (oxidation, dehydrogenation), nitriles (Stephen; Grignard gives ketones), esters (DIBAL-H), toluene (Etard, Gattermann-Koch) and benzene (Friedel-Crafts acylation)`,
    prereqs: ["C01"], ext: [], sources: [S("Preparation of Aldehydes and Ketones")],
  },
  {
    id: "C04", slug: "physical-properties-carbonyl", title: "Boiling points and solubility", group: "Preparation", tier: "core",
    oneLiner: t`Boiling points: alkanes < ethers < aldehydes and ketones < alcohols < carboxylic acids (dimers); small ones dissolve in water; formalin is 40% methanal`,
    prereqs: ["C02"], ext: [], sources: [S("Physical Properties")],
  },
  // Reactions
  {
    id: "C05", slug: "nucleophilic-addition", title: "Nucleophilic addition", group: "Reactions", tier: "core",
    oneLiner: t`Aldehydes and ketones add HCN (cyanohydrins), $\ce{NaHSO3}$ and alcohols (acetals), and condense with ammonia derivatives to oximes and hydrazones`,
    prereqs: ["C02"], ext: [], sources: [S("Chemical Properties of Aldehydes and Ketones")],
  },
  {
    id: "C06", slug: "reduction-oxidation-carbonyl", title: "Reduction and oxidation tests", group: "Reactions", tier: "core",
    oneLiner: t`$\ce{NaBH4}$ reduces to alcohols; Clemmensen and Wolff-Kishner to hydrocarbons; Tollens' and Fehling's reagents oxidise aldehydes, not ketones (benzaldehyde fails Fehling's)`,
    prereqs: ["C02"], ext: [], sources: [S("Chemical Properties of Aldehydes and Ketones")],
  },
  {
    id: "C07", slug: "aldol-cannizzaro", title: "Aldol and Cannizzaro reactions", group: "Reactions", tier: "core",
    oneLiner: t`With an $\alpha$-hydrogen, dilute alkali gives an aldol, which dehydrates to an enal; without one, conc. alkali gives Cannizzaro's alcohol and acid salt`,
    prereqs: ["C05"], ext: [], sources: [S("Chemical Properties of Aldehydes and Ketones")],
  },
  // Carboxylic acids
  {
    id: "C08", slug: "preparing-carboxylic-acids", title: "Preparing carboxylic acids", group: "Carboxylic acids", tier: "core",
    oneLiner: t`Oxidise primary alcohols or aldehydes, or any alkylbenzene side chain (to benzoic acid); hydrolyse nitriles; or add a Grignard reagent to dry ice`,
    prereqs: ["C01"], ext: [], sources: [S("Preparation of Carboxylic Acids")],
  },
  {
    id: "C09", slug: "acidity-carboxylic-acids", title: "Acid strength of carboxylic acids", group: "Carboxylic acids", tier: "core",
    oneLiner: t`Carboxylic acids beat phenols in acidity; electron-withdrawing groups (Cl, nearer = stronger) raise it, alkyl groups lower it, so $\ce{HCOOH} > \ce{CH3COOH}$`,
    prereqs: ["C01"], ext: ["acidity of phenols (Alcohols, Phenols and Ethers)"], sources: [S("Chemical Properties of Carboxylic Acids")],
  },
  {
    id: "C10", slug: "reactions-carboxylic-acids", title: "Reactions of carboxylic acids", group: "Carboxylic acids", tier: "core",
    oneLiner: t`Acids give salts and $\ce{CO2}$ with $\ce{NaHCO3}$, esters with alcohols, acid chlorides with $\ce{SOCl2}$; $\ce{LiAlH4}$ or diborane reduces them to alcohols`,
    prereqs: ["C08"], ext: [], sources: [S("Chemical Properties of Carboxylic Acids")],
  },
];
