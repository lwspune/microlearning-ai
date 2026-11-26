import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Units and Measurements prerequisite graph (Balbharati Physics Std XI, Ch.1): units, measuring length, dimensions, errors and significant figures.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/units-measurements-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Units
  {
    id: "C01", slug: "si-units", title: "Units and the SI system", group: "Units", tier: "core",
    oneLiner: t`Physical quantities are numbers times units; the SI system builds every unit from seven base units`,
    prereqs: [], ext: [], sources: [S("System of Units")],
  },
  {
    id: "C02", slug: "measuring-length", title: "Measuring large and small lengths", group: "Units", tier: "core", visual: true,
    oneLiner: t`Parallax measures distances to far objects, $D = \dfrac{b}{\theta}$; angular size gives their diameters, $d = D\theta$`,
    prereqs: ["C01"], ext: [], sources: [S("Measurement of Length")],
  },
  // Dimensions
  {
    id: "C03", slug: "dimensional-formulae", title: "Dimensions and dimensional formulae", group: "Dimensions", tier: "core",
    oneLiner: t`A quantity's dimensions show how it depends on mass, length and time: force is $\left[M^1L^1T^{-2}\right]$`,
    prereqs: ["C01"], ext: [], sources: [S("Dimensions and Dimensional Analysis")],
  },
  {
    id: "C04", slug: "dimensional-analysis", title: "Using dimensional analysis", group: "Dimensions", tier: "core",
    oneLiner: t`Dimensions check whether an equation can be right, convert units between systems, and suggest how a quantity depends on others`,
    prereqs: ["C03"], ext: [], sources: [S("Dimensions and Dimensional Analysis")],
  },
  // Errors
  {
    id: "C05", slug: "errors", title: "Errors in measurement", group: "Errors", tier: "core",
    oneLiner: t`Repeated readings scatter: the mean absolute error, relative error and percentage error say how far to trust the mean`,
    prereqs: [], ext: [], sources: [S("Errors in Measurements")],
  },
  {
    id: "C06", slug: "combining-errors", title: "Combining errors", group: "Errors", tier: "core",
    oneLiner: t`Absolute errors add in sums and differences; relative errors add in products and quotients, times the power in $x^n$`,
    prereqs: ["C05"], ext: [], sources: [S("Errors in Measurements")],
  },
  {
    id: "C07", slug: "significant-figures", title: "Significant figures", group: "Errors", tier: "core",
    oneLiner: t`The reliable digits of a measurement are its significant figures; a result keeps no more than the least precise data allow`,
    prereqs: [], ext: [], sources: [S("Significant Figures")],
  },
  {
    id: "C08", slug: "vernier-screw-gauge", title: "Vernier callipers and screw gauge", group: "Instruments", tier: "core", visual: true,
    oneLiner: t`Least count is one main-scale division minus one vernier division, or the pitch over the circular divisions; subtract the zero error from every reading`,
    prereqs: [], ext: ["reading a metre scale (Std IX Science)"],
    sources: ["jee-main/units-and-measurements#Vernier Callipers, Screw Gauge and Zero Error", "neet/units-and-measurements#Vernier Callipers and Screw Gauge"],
  },
];
