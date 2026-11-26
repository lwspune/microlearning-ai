import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Transition and Inner Transition Elements prerequisite graph (Balbharati Chemistry Std XII, Ch.8): d-block configurations and oxidation states, atomic trends, magnetism and colour, common properties, extraction of iron, KMnO₄ and K₂Cr₂O₇, lanthanoids and actinoids.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/transition-elements-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // d-block
  {
    id: "C01", slug: "d-block-configuration", title: "Electronic configuration of d-block elements", group: "d-block", tier: "core",
    oneLiner: t`$(n-1)d^{1-10}ns^{1-2}$, with Cr $3d^5 4s^1$ and Cu $3d^{10}4s^1$; ions lose the $4s$ electrons first`,
    prereqs: [], ext: ["electronic configuration (Std XI Chemistry)"], sources: [S("Position in the Periodic Table and Electronic Configuration")],
  },
  {
    id: "C02", slug: "oxidation-states-d", title: "Variable oxidation states", group: "d-block", tier: "core",
    oneLiner: t`Transition metals show many oxidation states; half-filled and full $d$ subshells ($\ce{Fe^3+}$ $d^5$, $\ce{Mn^2+}$ $d^5$) are extra stable`,
    prereqs: ["C01"], ext: [], sources: [S("Oxidation States of the First Transition Series")],
  },
  {
    id: "C03", slug: "atomic-trends-d", title: "Atomic radii and ionisation enthalpy", group: "d-block", tier: "core",
    oneLiner: t`Across a series radii shrink then level off as added $d$ electrons shield poorly; ionisation enthalpies rise slowly`,
    prereqs: ["C01"], ext: [], sources: [S("Trends in Atomic Properties"), S("Common Properties of d-Block Elements")],
  },
  {
    id: "C04", slug: "magnetism-colour", title: "Magnetic moment and colour", group: "d-block", tier: "core",
    oneLiner: t`Unpaired electrons give paramagnetism, $\mu = \sqrt{n(n+2)}$ B.M.; partly filled $d$ orbitals give colour, so $d^0$ and $d^{10}$ ions are colourless`,
    prereqs: ["C01"], ext: [], sources: [S("Trends in Atomic Properties")],
  },
  {
    id: "C05", slug: "d-block-properties", title: "Catalysts, complexes and alloys", group: "d-block", tier: "core",
    oneLiner: t`Transition metals are hard, high-melting, catalytic, form complexes and interstitial compounds, and make alloys such as nichrome`,
    prereqs: ["C03"], ext: [], sources: [S("Common Properties of d-Block Elements")],
  },
  // Compounds and metallurgy
  {
    id: "C06", slug: "extraction-of-iron", title: "Metallurgy and iron", group: "Compounds and metallurgy", tier: "core",
    oneLiner: t`Metallurgy: concentration, roasting or calcination, reduction, refining; the blast furnace zones reduce haematite; cast iron, wrought iron and steel differ in carbon`,
    prereqs: [], ext: [], sources: [S("Extraction of Metals")],
  },
  {
    id: "C07", slug: "permanganate-dichromate", title: "Potassium permanganate and dichromate", group: "Compounds and metallurgy", tier: "core",
    oneLiner: t`$\ce{K2Cr2O7}$ from chromite and $\ce{KMnO4}$ from pyrolusite; both are strong oxidants in acid ($\ce{MnO4-}$ to $\ce{Mn^2+}$, $\ce{Cr2O7^2-}$ to $\ce{Cr^3+}$)`,
    prereqs: ["C02"], ext: ["balancing redox equations (Std XI Chemistry)"], sources: [S("Compounds of Mn and Cr")],
  },
  // f-block
  {
    id: "C08", slug: "lanthanoids", title: "Lanthanoids", group: "f-block", tier: "core",
    oneLiner: t`Lanthanoids fill $4f$, mostly show $+3$ ($\ce{Ce^4+}$ oxidises, $\ce{Eu^2+}$ reduces); lanthanoid contraction makes $4d$ and $5d$ partners alike in size`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("Lanthanoids")],
  },
  {
    id: "C09", slug: "actinoids", title: "Actinoids", group: "f-block", tier: "core",
    oneLiner: t`Actinoids fill $5f$, are all radioactive and show more oxidation states than lanthanoids`,
    prereqs: ["C08"], ext: [], sources: [S("Actinoids")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C10", slug: "tests-for-metal-ions", title: "Tests for metal ions", group: "Salt analysis", tier: "core",
    oneLiner: t`Group reagents sort cations; colours confirm them: $\ce{Cu^2+}$ deep blue with ammonia, $\ce{Fe^3+}$ blood red with thiocyanate, $\ce{Ni^2+}$ red with dimethylglyoxime`,
    prereqs: ["C04"], ext: [],
    sources: ["jee-main/d-and-f-block-elements#Qualitative Analysis of Ions"],
  },
];
