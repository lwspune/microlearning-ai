import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Halogen Derivatives prerequisite graph (Balbharati Chemistry Std XII, Ch.10): classes and names, preparation, physical properties, optical isomerism, SN1 and SN2, substitution and elimination products, haloarenes, reactions with metals and polyhalogen compounds.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/halogen-derivatives-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "classes-of-halides", title: "Classes of halogen derivatives", group: "Basics", tier: "core",
    oneLiner: t`Alkyl halides are primary, secondary or tertiary; allylic, benzylic, vinylic and aryl halides differ by the carbon the halogen sits on`,
    prereqs: [], ext: ["organic structures (Std XI Chemistry)"], sources: [S("Classification of Halogen Derivatives")],
  },
  {
    id: "C02", slug: "naming-halides", title: "Naming halogen derivatives", group: "Basics", tier: "core",
    oneLiner: t`IUPAC names treat the halogen as a prefix (bromo-, chloro-) on the longest chain, numbered for the lowest locants`,
    prereqs: ["C01"], ext: ["IUPAC nomenclature (Std XI Chemistry)"], sources: [S("Nomenclature of Halogen Derivatives")],
  },
  // Preparation
  {
    id: "C03", slug: "preparing-halides", title: "Preparing alkyl and aryl halides", group: "Preparation", tier: "core",
    oneLiner: t`From alcohols (HX, $\ce{PCl5}$, $\ce{SOCl2}$), from alkenes (Markovnikov; HBr with peroxide adds anti-Markovnikov), by halogen exchange (NaI, $\ce{SbF3}$); arenes with $\ce{Cl2}$/Fe`,
    prereqs: ["C01"], ext: ["addition to alkenes (Std XI Chemistry)"], sources: [S("Nucleophilic Substitution Reactions of Alkyl Halides")],
  },
  {
    id: "C04", slug: "physical-properties-halides", title: "Physical properties of halides", group: "Preparation", tier: "core",
    oneLiner: t`Boiling points rise with molar mass and fall with branching; alkyl halides, though polar, do not mix with water`,
    prereqs: ["C01"], ext: [], sources: [S("Physical Properties")],
  },
  // Mechanisms
  {
    id: "C05", slug: "optical-isomerism", title: "Chirality and optical isomerism", group: "Mechanisms", tier: "core",
    oneLiner: t`A carbon with four different groups is chiral; its two enantiomers rotate plane-polarised light oppositely; an equal mixture is racemic`,
    prereqs: ["C01"], ext: [], sources: [S("Optical Isomerism in Halogen Derivatives")],
  },
  {
    id: "C06", slug: "sn2-mechanism", title: "The SN2 mechanism", group: "Mechanisms", tier: "core",
    oneLiner: t`One step, backside attack, inversion of configuration, rate $= k[\ce{RX}][\ce{Nu-}]$; fastest for methyl and primary halides`,
    prereqs: ["C05"], ext: [], sources: [S("Nucleophilic Substitution Reactions of Alkyl Halides")],
  },
  {
    id: "C07", slug: "sn1-mechanism", title: "The SN1 mechanism", group: "Mechanisms", tier: "core",
    oneLiner: t`Two steps through a carbocation, rate $= k[\ce{RX}]$, racemisation; fastest for tertiary, allylic and benzylic halides`,
    prereqs: ["C05"], ext: [], sources: [S("Nucleophilic Substitution Reactions of Alkyl Halides")],
  },
  // Reactions
  {
    id: "C08", slug: "substitution-elimination-products", title: "Substitution and elimination products", group: "Reactions", tier: "core",
    oneLiner: t`Aqueous KOH gives alcohols, KCN nitriles, AgCN isocyanides, $\ce{AgNO2}$ nitroalkanes, alkoxides ethers; alcoholic KOH eliminates to the more substituted alkene`,
    prereqs: ["C03"], ext: [], sources: [S("Nucleophilic Substitution Reactions of Alkyl Halides")],
  },
  {
    id: "C09", slug: "haloarenes", title: "Reactivity of haloarenes", group: "Reactions", tier: "core",
    oneLiner: t`Aryl halides resist nucleophilic substitution (resonance, $sp^2$ carbon) unless ortho or para nitro groups help; they direct electrophiles ortho and para`,
    prereqs: ["C08"], ext: [], sources: [S("Nucleophilic Substitution Reactions of Alkyl Halides")],
  },
  {
    id: "C10", slug: "reactions-with-metals", title: "Wurtz, Fittig and Grignard", group: "Reactions", tier: "core",
    oneLiner: t`Sodium joins alkyl halides (Wurtz) or aryl halides (Fittig); magnesium in dry ether gives a Grignard reagent, which water turns to an alkane`,
    prereqs: ["C01"], ext: [], sources: [S("Reaction with Active Metals")],
  },
  {
    id: "C11", slug: "polyhalogen-compounds", title: "Polyhalogen compounds", group: "Reactions", tier: "core",
    oneLiner: t`Dichloromethane, chloroform (a source of dichlorocarbene), carbon tetrachloride, freons and DDT: uses and harm`,
    prereqs: [], ext: [], sources: [S("Uses and Environmental Effects of Polyhalogen Compounds")],
  },
];
