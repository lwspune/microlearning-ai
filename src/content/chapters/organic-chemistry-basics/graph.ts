import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Basic Principles of Organic Chemistry prerequisite graph (Balbharati Chemistry Std XI, Ch.14): structural formulas, functional groups and homologous series, IUPAC names, isomerism, bond fission and intermediates, and the inductive, resonance and hyperconjugation effects.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/organic-basics-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Structures
  {
    id: "C01", slug: "structural-formulas", title: "Writing organic structures", group: "Structures", tier: "core",
    oneLiner: t`Complete, condensed and bond-line formulas show the same molecule; a carbon is primary, secondary, tertiary or quaternary by how many carbons it bonds to`,
    prereqs: [], ext: [], sources: [S("Structural Representation of Organic Molecules"), S("Classification of Organic Compounds")],
  },
  {
    id: "C02", slug: "functional-groups-series", title: "Functional groups and homologous series", group: "Structures", tier: "core",
    oneLiner: t`A functional group fixes a compound's reactions; a homologous series shares a general formula, each member one $\ce{CH2}$ more ($\ce{C_nH_{2n+1}OH}$)`,
    prereqs: ["C01"], ext: [], sources: [S("Classification of Organic Compounds")],
  },
  // Names and isomers
  {
    id: "C03", slug: "iupac-nomenclature", title: "IUPAC names", group: "Names and isomers", tier: "core",
    oneLiner: t`Find the longest chain holding the principal group, number it for lowest locants, add the suffix of the highest-priority group and alphabetical prefixes`,
    prereqs: ["C02"], ext: [], sources: [S("Nomenclature of Organic Compounds")],
  },
  {
    id: "C04", slug: "isomerism", title: "Structural and geometrical isomerism", group: "Names and isomers", tier: "core",
    oneLiner: t`Chain, position, functional group and metamers share a formula but differ in structure; but-2-ene has cis and trans isomers`,
    prereqs: ["C02"], ext: [], sources: [S("Isomerism")],
  },
  // Reaction basics
  {
    id: "C05", slug: "bond-fission-intermediates", title: "Bond fission and reactive intermediates", group: "Reaction basics", tier: "core",
    oneLiner: t`Homolysis gives free radicals, heterolysis a carbocation ($sp^2$, planar; tertiary most stable) and a carbanion; electrophiles seek electrons, nucleophiles donate them`,
    prereqs: ["C01"], ext: [], sources: [S("Theoretical Basis of Organic Reactions")],
  },
  // Electronic effects
  {
    id: "C06", slug: "inductive-effect", title: "The inductive effect", group: "Electronic effects", tier: "core",
    oneLiner: t`A permanent shift of $\sigma$ electrons toward electronegative atoms ($-I$: Cl, $\ce{NO2}$) or away from alkyl groups ($+I$), fading along the chain`,
    prereqs: ["C05"], ext: [], sources: [S("Theoretical Basis of Organic Reactions")],
  },
  {
    id: "C07", slug: "resonance-effect", title: "Resonance", group: "Electronic effects", tier: "core",
    oneLiner: t`When one Lewis structure is not enough, the molecule is a hybrid of resonance structures; conjugated $\pi$ electrons delocalise, stabilising ions like acetate`,
    prereqs: ["C05"], ext: [], sources: [S("Theoretical Basis of Organic Reactions")],
  },
  {
    id: "C08", slug: "hyperconjugation", title: "Hyperconjugation", group: "Electronic effects", tier: "core",
    oneLiner: t`C–H $\sigma$ bonds next to a carbocation or double bond overlap with its p orbital (no-bond resonance); more $\alpha$-hydrogens give more stabilisation`,
    prereqs: ["C07"], ext: [], sources: [S("Theoretical Basis of Organic Reactions")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C09", slug: "detecting-elements", title: "Detecting nitrogen, sulfur and halogens", group: "Analysis", tier: "core",
    oneLiner: t`Lassaigne's sodium fusion turns N, S and halogens into NaCN, $\ce{Na2S}$ and NaX: Prussian blue shows N, violet with nitroprusside S, a silver halide precipitate X`,
    prereqs: ["C01"], ext: [],
    sources: ["jee-main/organic-chemistry#Lassaigne's Test and Estimation of Nitrogen", "cbse/organic-chemistry#Qualitative Analysis of Organic Compounds", "neet/organic-chemistry#Purification and Analysis"],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C10", slug: "estimating-elements", title: "Estimating the elements", group: "Analysis", tier: "core",
    oneLiner: t`Percentages from what each element becomes: C and H from $\ce{CO2}$ and $\ce{H2O}$, N as $\ce{N2}$ (Dumas) or $\ce{NH3}$ (Kjeldahl), halogen as AgX (Carius), S as $\ce{BaSO4}$`,
    prereqs: ["C09"], ext: ["molar mass (Some Basic Concepts of Chemistry)"],
    sources: ["jee-main/organic-chemistry#Estimation of Carbon, Hydrogen, Halogens, Sulphur and Phosphorus", "cbse/organic-chemistry#Quantitative Analysis"],
  },
];
