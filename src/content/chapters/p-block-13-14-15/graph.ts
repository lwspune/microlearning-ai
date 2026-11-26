import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Elements of Group 13, 14 and 15 prerequisite graph (Balbharati Chemistry Std XI, Ch.9): trends, the inert pair effect, oxidation states and oxides, catenation and pi bonds, allotropes, structures of boron and other compounds, and notable compounds.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/p-block-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Trends
  {
    id: "C01", slug: "group-13-14-15-trends", title: "Trends in groups 13, 14 and 15", group: "Trends", tier: "core",
    oneLiner: t`$ns^2np^{1-3}$ elements: radii grow down a group (but Ga is smaller than Al), ionisation enthalpy rises across ($\ce{Al} < \ce{Si} < \ce{P}$), metallic character rises down`,
    prereqs: [], ext: ["periodic trends (Modern Periodic Table)"], sources: [S("Trends in Atomic and Physical Properties")],
  },
  {
    id: "C02", slug: "inert-pair-effect", title: "The inert pair effect", group: "Trends", tier: "core",
    oneLiner: t`Down a group the $ns^2$ pair holds back, so the lower oxidation state wins: $\ce{Tl+}$ over $\ce{Tl^3+}$, $\ce{PbCl2}$ over $\ce{PbCl4}$, while $\ce{GeCl4}$ is stable`,
    prereqs: ["C01"], ext: [], sources: [S("Chemical Properties of the Elements")],
  },
  {
    id: "C03", slug: "oxidation-states-oxides", title: "Oxidation states and oxides", group: "Trends", tier: "core",
    oneLiner: t`Group 13 shows $+3$, group 14 $+4$ and $+2$, group 15 $-3$ to $+5$ (nitrogen cannot exceed four bonds: no $\ce{NCl5}$); oxides turn more basic down a group`,
    prereqs: ["C01"], ext: [], sources: [S("Chemical Properties of the Elements")],
  },
  // Carbon and nitrogen
  {
    id: "C04", slug: "catenation-pi-bonds", title: "Catenation and pi bonds", group: "Carbon and nitrogen", tier: "core",
    oneLiner: t`Carbon catenates far more than silicon (strong C–C bonds); carbon and nitrogen form strong $p\pi$–$p\pi$ multiple bonds, heavier elements do not`,
    prereqs: ["C01"], ext: [], sources: [S("Catenation")],
  },
  {
    id: "C05", slug: "allotropes", title: "Allotropes of carbon and phosphorus", group: "Carbon and nitrogen", tier: "core",
    oneLiner: t`Diamond ($sp^3$ network, hard, insulating) and graphite ($sp^2$ layers, soft, conducting), fullerenes; reactive white and stable red phosphorus`,
    prereqs: ["C04"], ext: [], sources: [S("Allotropy")],
  },
  // Compounds
  {
    id: "C06", slug: "structures-of-compounds", title: "Structures of boron and other compounds", group: "Compounds", tier: "core",
    oneLiner: t`$\ce{BCl3}$ is trigonal planar ($sp^2$); diborane has two three-centre two-electron (banana) bonds; structures of $\ce{H3PO4}$ and resonance in $\ce{HNO3}$`,
    prereqs: ["C01"], ext: ["hybridisation (Chemical Bonding)"], sources: [S("Molecular Structures of Important Compounds")],
  },
  {
    id: "C07", slug: "notable-compounds", title: "Notable compounds", group: "Compounds", tier: "core",
    oneLiner: t`Borax and boric acid (borate test), boron nitride (inorganic graphite), silicones and their uses, ammonia by Haber's process as a base and complexing agent`,
    prereqs: ["C03"], ext: [], sources: [S("Chemistry of Notable Compounds")],
  },
];
