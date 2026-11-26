import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Elements of Groups 16, 17 and 18 prerequisite graph (Balbharati Chemistry Std XII, Ch.7): trends, oxygen and fluorine's anomalies, oxidation states and hydrides, oxygen and ozone, sulfur and its compounds, oxoacids, chlorine, interhalogens and xenon compounds.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/p-block-16-17-18-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Trends
  {
    id: "C01", slug: "group-trends", title: "Trends in groups 16, 17 and 18", group: "Trends", tier: "core",
    oneLiner: t`Down each group atomic radius rises and ionisation enthalpy and electronegativity fall; chlorine, not fluorine, has the most negative electron gain enthalpy`,
    prereqs: [], ext: ["periodic trends (Std XI Chemistry)"], sources: [S("Occurrence and Electronic Configuration"), S("Atomic and Physical Properties")],
  },
  {
    id: "C02", slug: "anomalous-oxygen-fluorine", title: "Why oxygen and fluorine differ", group: "Trends", tier: "core",
    oneLiner: t`Small size, high electronegativity and no $d$ orbitals make $\ce{O2}$ a gas, $\ce{F2}$'s bond weak and fluorine show only $-1$`,
    prereqs: ["C01"], ext: [], sources: [S("Anomalous Behaviour"), S("Atomic and Physical Properties")],
  },
  {
    id: "C03", slug: "oxidation-states-hydrides", title: "Oxidation states and hydrides", group: "Trends", tier: "core",
    oneLiner: t`Group 16 shows $-2$ to $+6$, halogens $-1$ to $+7$; hydride acid strength rises down a group ($\ce{H2O} < \ce{H2Te}$, $\ce{HF} < \ce{HI}$) as thermal stability falls`,
    prereqs: ["C01"], ext: [], sources: [S("Chemical Properties of the Elements")],
  },
  // Group 16
  {
    id: "C04", slug: "oxygen-ozone", title: "Dioxygen and ozone", group: "Group 16", tier: "core",
    oneLiner: t`Dioxygen from $\ce{KClO3}$, paramagnetic despite even electrons; ozone is a bent, powerful oxidant whose layer is depleted by NO and CFCs`,
    prereqs: ["C01"], ext: [], sources: [S("Oxygen and Compounds of Oxygen")],
  },
  {
    id: "C05", slug: "allotropes-of-sulfur", title: "Allotropes of sulfur", group: "Group 16", tier: "core",
    oneLiner: t`Rhombic sulfur (stable below 369 K) and monoclinic sulfur are both $\ce{S8}$ rings packed differently; $\ce{S2}$ vapour is paramagnetic`,
    prereqs: ["C01"], ext: [], sources: [S("Allotropy")],
  },
  {
    id: "C06", slug: "sulfur-dioxide-sulfuric-acid", title: "Sulfur dioxide and sulfuric acid", group: "Group 16", tier: "core",
    oneLiner: t`$\ce{SO2}$ from sodium sulfite and acid; $\ce{H2SO4}$ by the contact process; concentrated $\ce{H2SO4}$ dehydrates sugar and oxidises HBr and HI`,
    prereqs: ["C03"], ext: [], sources: [S("Compounds of Sulfur")],
  },
  // Groups 16 and 17
  {
    id: "C07", slug: "oxoacids", title: "Oxoacids of sulfur and chlorine", group: "Groups 16 and 17", tier: "core",
    oneLiner: t`Oxoacids by name, formula and the central atom's oxidation state; acid strength rises with oxidation state: $\ce{HOCl} < \ce{HClO2} < \ce{HClO3} < \ce{HClO4}$`,
    prereqs: ["C03"], ext: [], sources: [S("Oxoacids")],
  },
  // Group 17
  {
    id: "C08", slug: "chlorine-hydrogen-chloride", title: "Chlorine and hydrogen chloride", group: "Group 17", tier: "core",
    oneLiner: t`Chlorine's preparation and reactions (with Fe, with excess $\ce{NH3}$, bleaching); HCl from NaCl and conc. $\ce{H2SO4}$, and its reactions`,
    prereqs: ["C03"], ext: [], sources: [S("Chlorine and Compounds of Chlorine")],
  },
  {
    id: "C09", slug: "interhalogen-compounds", title: "Interhalogen compounds", group: "Group 17", tier: "core",
    oneLiner: t`$\ce{XX'}$, $\ce{XX'3}$, $\ce{XX'5}$, $\ce{XX'7}$ with the larger halogen central (never F); shapes by VSEPR; they hydrolyse to acids`,
    prereqs: ["C03"], ext: ["VSEPR theory (Std XI Chemistry)"], sources: [S("Interhalogen Compounds")],
  },
  // Group 18
  {
    id: "C10", slug: "xenon-compounds", title: "Noble gases and xenon compounds", group: "Group 18", tier: "core",
    oneLiner: t`Xenon fluorides form from Xe and $\ce{F2}$ in set ratios; $\ce{XeO3}$ and $\ce{XeOF4}$ by hydrolysis; oxidation states and VSEPR shapes; uses of noble gases`,
    prereqs: ["C01"], ext: ["VSEPR theory (Std XI Chemistry)"], sources: [S("Compounds of Xenon"), S("Occurrence and Electronic Configuration")],
  },
];
