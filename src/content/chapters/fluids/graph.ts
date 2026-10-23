import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Mechanical Properties of Fluids prerequisite graph (Balbharati Physics Std XII, Ch.2): pressure, surface
 * tension and capillarity, viscosity, and the flow of fluids.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/fluids-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Pressure
  {
    id: "C01", slug: "fluid-pressure", title: "Pressure in a fluid", group: "Pressure", tier: "core", visual: true,
    oneLiner: t`At depth $h$ in a liquid, $p = p_0 + h\rho g$, whatever the shape of the vessel`,
    prereqs: [], ext: ["density and pressure (Std XI Physics)"], sources: [S("Fluid Pressure and Pascal's Law")],
  },
  {
    id: "C02", slug: "pascals-law", title: "Pascal's law and the hydraulic lift", group: "Pressure", tier: "core", visual: true,
    oneLiner: t`Pressure applied to an enclosed fluid reaches every part of it, so $\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}$`,
    prereqs: ["C01"], ext: [], sources: [S("Fluid Pressure and Pascal's Law")],
  },

  // Surface tension
  {
    id: "C03", slug: "surface-tension", title: "Surface tension", group: "Surface tension", tier: "core", visual: true,
    oneLiner: t`A liquid surface pulls like a stretched skin: $T = \dfrac{F}{L}$, the force per unit length of a line in it`,
    prereqs: [], ext: ["intermolecular forces (Std XI Physics)"], sources: [S("Surface Tension and Surface Energy")],
  },
  {
    id: "C04", slug: "surface-energy", title: "Surface energy", group: "Surface tension", tier: "core",
    oneLiner: t`Making new surface takes work $T\,\Delta A$; a soap film or bubble has two surfaces`,
    prereqs: ["C03"], ext: [], sources: [S("Surface Tension and Surface Energy")],
  },
  {
    id: "C05", slug: "drops-merging", title: "Drops merging and splitting", group: "Surface tension", tier: "core",
    oneLiner: t`Small drops merging into one lose surface and release energy; one drop split into many needs work`,
    prereqs: ["C04"], ext: ["volume and surface area of a sphere (Std X Maths)"], sources: [S("Surface Tension and Surface Energy")],
  },
  {
    id: "C06", slug: "excess-pressure", title: "Excess pressure in drops and bubbles", group: "Surface tension", tier: "core", visual: true,
    oneLiner: t`Inside a drop the pressure is higher by $\dfrac{2T}{R}$; inside a soap bubble, with two surfaces, by $\dfrac{4T}{R}$`,
    prereqs: ["C01", "C04"], ext: [], sources: [S("Excess Pressure, Drops and Bubbles")],
  },
  {
    id: "C07", slug: "capillarity", title: "Angle of contact and capillarity", group: "Surface tension", tier: "core", visual: true,
    oneLiner: t`A liquid that wets the tube rises to $h = \dfrac{2T\cos\theta}{r\rho g}$; one with $\theta > 90^\circ$ falls`,
    prereqs: ["C01", "C03"], ext: [], sources: [S("Capillary Action"), S("Surface Tension and Surface Energy")],
  },

  // Viscosity
  {
    id: "C08", slug: "viscosity", title: "Viscosity and Reynolds number", group: "Viscosity", tier: "core",
    oneLiner: t`Layers of a fluid drag on each other: $F = \eta A\dfrac{dv}{dx}$; flow stays streamline below a critical speed`,
    prereqs: [], ext: [], sources: [S("Viscosity, Critical Velocity and Reynolds Number")],
  },
  {
    id: "C09", slug: "terminal-velocity", title: "Stokes' law and terminal velocity", group: "Viscosity", tier: "core", visual: true,
    oneLiner: t`A sphere falling through a fluid feels $6\pi\eta rv$ and settles at $v_t = \dfrac{2r^2(\rho - \sigma)g}{9\eta}$`,
    prereqs: ["C08"], ext: ["Archimedes' principle (Std IX Science)"], sources: [S("Stokes' Law and Terminal Velocity")],
  },

  // Fluid flow
  {
    id: "C10", slug: "continuity", title: "Equation of continuity", group: "Fluid flow", tier: "core", visual: true,
    oneLiner: t`An incompressible fluid flows faster where the pipe is narrower: $A_1v_1 = A_2v_2$`,
    prereqs: [], ext: [], sources: [S("Equation of Continuity and Bernoulli's Equation")],
  },
  {
    id: "C11", slug: "bernoulli", title: "Bernoulli's equation", group: "Fluid flow", tier: "core", visual: true,
    oneLiner: t`Along a streamline $p + \dfrac{1}{2}\rho v^2 + \rho gh$ is constant; water leaves a tank at $\sqrt{2gh}$`,
    prereqs: ["C01", "C10"], ext: ["conservation of mechanical energy (Std XI Physics)"],
    sources: [S("Equation of Continuity and Bernoulli's Equation")],
  },
];
