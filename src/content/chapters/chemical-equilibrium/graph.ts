import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Chemical Equilibrium prerequisite graph (Balbharati Chemistry Std XI, Ch.12): reversible reactions and dynamic equilibrium, the law of mass action, Kc and Kp, heterogeneous equilibria, using K, Le Chatelier's principle and the Haber process.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/chemical-equilibrium-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Equilibrium
  {
    id: "C01", slug: "dynamic-equilibrium", title: "Reversible reactions and dynamic equilibrium", group: "Equilibrium", tier: "core",
    oneLiner: t`In a closed system a reversible reaction reaches equilibrium when forward and backward rates are equal; concentrations then stay constant though reactions continue`,
    prereqs: [], ext: [], sources: [S("Equilibrium in Chemical Processes")],
  },
  // Equilibrium constant
  {
    id: "C02", slug: "equilibrium-constant", title: "Law of mass action and Kc", group: "Equilibrium constant", tier: "core",
    oneLiner: t`For $a\ce{A} + b\ce{B} <=> c\ce{C} + d\ce{D}$, $K_c = \dfrac{[\ce{C}]^c[\ce{D}]^d}{[\ce{A}]^a[\ce{B}]^b}$; reversing the equation inverts $K$, doubling it squares $K$`,
    prereqs: ["C01"], ext: [], sources: [S("Law of Mass Action and Equilibrium Constant"), S("Characteristics of the Equilibrium Constant")],
  },
  {
    id: "C03", slug: "kp-and-kc", title: "Kp and its relation to Kc", group: "Equilibrium constant", tier: "core",
    oneLiner: t`$K_p$ uses partial pressures; $K_p = K_c(RT)^{\Delta n}$, with $\Delta n$ the change in moles of gas`,
    prereqs: ["C02"], ext: [], sources: [S("Law of Mass Action and Equilibrium Constant")],
  },
  {
    id: "C04", slug: "heterogeneous-equilibria", title: "Homogeneous and heterogeneous equilibria", group: "Equilibrium constant", tier: "core",
    oneLiner: t`Pure solids and liquids are left out of $K$: for $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$, $K_p = p_{\ce{CO2}}$`,
    prereqs: ["C02"], ext: [], sources: [S("Homogeneous and Heterogeneous Equilibria")],
  },
  // Using K
  {
    id: "C05", slug: "using-k", title: "Using the equilibrium constant", group: "Using K", tier: "core",
    oneLiner: t`A large $K$ means mostly products; the reaction quotient $Q$ against $K$ gives the direction; $K$ and starting amounts give equilibrium concentrations`,
    prereqs: ["C02"], ext: [], sources: [S("Applications of the Equilibrium Constant")],
  },
  {
    id: "C06", slug: "le-chatelier", title: "Le Chatelier's principle", group: "Using K", tier: "core",
    oneLiner: t`An equilibrium shifts to oppose a change: added reactant, higher pressure (toward fewer gas moles), or heat (toward the endothermic side); a catalyst shifts nothing`,
    prereqs: ["C05"], ext: [], sources: [S("Le Chatelier's Principle")],
  },
  {
    id: "C07", slug: "haber-process", title: "The Haber process", group: "Using K", tier: "core",
    oneLiner: t`$\ce{N2 + 3H2 <=> 2NH3}$ is exothermic with fewer gas moles: high pressure, moderate temperature (about 700 K), iron catalyst, and removing ammonia`,
    prereqs: ["C06"], ext: [], sources: [S("Industrial Application: The Haber Process")],
  },
];
