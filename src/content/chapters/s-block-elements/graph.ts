import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Elements of Group 1 and 2 prerequisite graph (Balbharati Chemistry Std XI, Ch.8): hydrogen, dihydrogen and hydrogen peroxide, trends in groups 1 and 2, their reactions, ionic and covalent character, and important compounds.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/s-block-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Hydrogen
  {
    id: "C01", slug: "hydrogen-position-isotopes", title: "Hydrogen and its isotopes", group: "Hydrogen", tier: "core",
    oneLiner: t`Hydrogen resembles both alkali metals and halogens; its isotopes are protium, deuterium and radioactive tritium`,
    prereqs: [], ext: [], sources: [S("Hydrogen")],
  },
  {
    id: "C02", slug: "dihydrogen-peroxide", title: "Dihydrogen and hydrogen peroxide", group: "Hydrogen", tier: "core",
    oneLiner: t`Dihydrogen from steam and coke (water gas); $\ce{H2O2}$ by electrolysis of 50% $\ce{H2SO4}$; a '10 volume' $\ce{H2O2}$ gives 10 L of $\ce{O2}$ per litre`,
    prereqs: ["C01"], ext: [], sources: [S("Hydrogen"), S("Some Important Compounds of s-Block Elements")],
  },
  // Alkali and alkaline earth metals
  {
    id: "C03", slug: "group-1-2-trends", title: "Trends in groups 1 and 2", group: "Alkali and alkaline earth metals", tier: "core",
    oneLiner: t`$ns^1$ and $ns^2$ metals: radii grow and ionisation enthalpies fall down the group; very negative reduction potentials; lithium resembles magnesium diagonally`,
    prereqs: [], ext: ["periodic trends (Modern Periodic Table)"], sources: [S("Alkali Metals and Alkaline Earth Metals")],
  },
  {
    id: "C04", slug: "reactions-s-block", title: "Reactions of s-block metals", group: "Alkali and alkaline earth metals", tier: "core",
    oneLiner: t`They react with water (Li slowly, Na violently), burn in air ($\ce{Na2O2}$, MgO and $\ce{Mg3N2}$), and dissolve in liquid ammonia to blue conducting solutions; BeO is amphoteric`,
    prereqs: ["C03"], ext: [], sources: [S("Alkali Metals and Alkaline Earth Metals")],
  },
  {
    id: "C05", slug: "ionic-covalent-character", title: "Ionic and covalent character", group: "Alkali and alkaline earth metals", tier: "core",
    oneLiner: t`A small, highly charged cation polarises an anion, so $\ce{BeCl2}$ and $\ce{LiCl}$ are partly covalent while $\ce{MgCl2}$ and NaCl are ionic`,
    prereqs: ["C03"], ext: ["ionic and covalent bonds (Chemical Bonding)"], sources: [S("Alkali Metals and Alkaline Earth Metals")],
  },
  // Compounds
  {
    id: "C06", slug: "s-block-compounds", title: "Important compounds", group: "Compounds", tier: "core",
    oneLiner: t`Solvay process: $\ce{CO2}$ through ammoniated brine gives $\ce{NaHCO3}$, then washing soda; temporary hardness ($\ce{Ca(HCO3)2}$) boils out; $\ce{LiAlH4}$ as a reducing agent`,
    prereqs: ["C04"], ext: [], sources: [S("Some Important Compounds of s-Block Elements")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C07", slug: "hard-water", title: "Hard water", group: "Compounds", tier: "core",
    oneLiner: t`Calcium and magnesium salts make water hard: hydrogencarbonates give temporary hardness (boiling removes it), chlorides and sulfates permanent hardness (washing soda)`,
    prereqs: ["C06"], ext: [],
    sources: ["nda/hydrogen-and-water#Hardness and Purity of Water"],
  },
];
