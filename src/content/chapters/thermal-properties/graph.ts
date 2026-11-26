import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Thermal Properties of Matter prerequisite graph (Balbharati Physics Std XI, Ch.7): temperature and its scales, the ideal gas equation, thermal expansion, specific heat, change of state, heat transfer and cooling.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/thermal-properties-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Temperature
  {
    id: "C01", slug: "temperature-scales", title: "Temperature, heat and temperature scales", group: "Temperature", tier: "core",
    oneLiner: t`Heat flows from hot to cold; temperature is measured on the Celsius, Fahrenheit and Kelvin scales, with $\dfrac{C}{100} = \dfrac{F - 32}{180} = \dfrac{K - 273}{100}$`,
    prereqs: [], ext: [], sources: [S("Temperature and Heat"), S("Measurement of Temperature")],
  },
  {
    id: "C02", slug: "ideal-gas", title: "Absolute temperature and the ideal gas equation", group: "Temperature", tier: "core",
    oneLiner: t`Boyle's and Charles' laws combine into $PV = nRT$, with $T$ in kelvin; absolute zero is $-273.15^\circ\mathrm{C}$`,
    prereqs: ["C01"], ext: [], sources: [S("Absolute Temperature and Ideal Gas Equation")],
  },
  // Thermal expansion
  {
    id: "C03", slug: "linear-expansion", title: "Linear expansion", group: "Thermal expansion", tier: "core",
    oneLiner: t`A rod heated by $\Delta T$ grows by $\Delta l = \alpha l\Delta T$`,
    prereqs: ["C01"], ext: [], sources: [S("Thermal Expansion")],
  },
  {
    id: "C04", slug: "area-volume-expansion", title: "Area and volume expansion", group: "Thermal expansion", tier: "core",
    oneLiner: t`$\beta \approx 2\alpha$ for area and $\gamma \approx 3\alpha$ for volume; water contracts when warmed from $0$ to $4^\circ\mathrm{C}$`,
    prereqs: ["C03"], ext: [], sources: [S("Thermal Expansion")],
  },
  // Heat and change of state
  {
    id: "C05", slug: "specific-heat", title: "Specific heat capacity and calorimetry", group: "Heat and change of state", tier: "core",
    oneLiner: t`Heat $Q = ms\Delta T$; in a calorimeter, heat lost by the hot bodies equals heat gained by the cold`,
    prereqs: [], ext: [], sources: [S("Specific Heat Capacity"), S("Calorimetry")],
  },
  {
    id: "C06", slug: "change-of-state", title: "Change of state and latent heat", group: "Heat and change of state", tier: "core", visual: true,
    oneLiner: t`Melting or boiling takes heat $Q = mL$ at constant temperature; the heating curve shows flat steps at each change`,
    prereqs: ["C05"], ext: [], sources: [S("Change of State")],
  },
  // Heat transfer
  {
    id: "C07", slug: "heat-transfer", title: "Conduction, convection and radiation", group: "Heat transfer", tier: "core",
    oneLiner: t`Heat flows through a slab at $\dfrac{Q}{t} = \dfrac{kA\Delta T}{x}$; convection carries it by moving fluid; radiation needs no medium`,
    prereqs: [], ext: [], sources: [S("Heat Transfer")],
  },
  {
    id: "C08", slug: "newtons-cooling", title: "Newton's law of cooling", group: "Heat transfer", tier: "core", visual: true,
    oneLiner: t`A hot body cools at a rate proportional to its excess temperature over the surroundings, for small differences`,
    prereqs: ["C07"], ext: [], sources: [S("Newton's Law of Cooling")],
  },
];
