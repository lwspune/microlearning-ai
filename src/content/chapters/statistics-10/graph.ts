import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Statistics prerequisite graph (Balbharati Std X Part 1, Ch.6): averages of grouped data, then
 * pictures of data. The pool's other Statistics chapter is NDA's.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/alg-statistics-10#${sub}`;
const AVERAGES = S("Mean, Median and Mode of Grouped Data");
const PICTURES = S("Pictorial Representation of Statistical Data");

export const graph: GraphNode[] = [
  // Mean
  {
    id: "C01", slug: "mean-direct-method", title: "Mean: direct method", group: "Mean", tier: "core",
    oneLiner: t`Take each class mark $x_i$; then $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$`,
    prereqs: [], ext: ["class marks and grouped frequency tables (Std IX Statistics)"], sources: [AVERAGES],
  },
  {
    id: "C02", slug: "mean-assumed-mean", title: "Mean: assumed mean method", group: "Mean", tier: "core",
    oneLiner: t`With $d_i = x_i - A$, $\bar{x} = A + \frac{\sum f_i d_i}{\sum f_i}$: smaller numbers, same mean`,
    prereqs: ["C01"], ext: [], sources: [AVERAGES],
  },
  {
    id: "C03", slug: "mean-step-deviation", title: "Mean: step deviation method", group: "Mean", tier: "core",
    oneLiner: t`With $u_i = \frac{x_i - A}{g}$, $\bar{x} = A + g \cdot \frac{\sum f_i u_i}{\sum f_i}$, where $g$ is the class width`,
    prereqs: ["C02"], ext: [], sources: [AVERAGES],
  },

  // Median and mode
  {
    id: "C04", slug: "median-of-grouped-data", title: "Median of grouped data", group: "Median and mode", tier: "core",
    oneLiner: t`The median class is where the cumulative frequency first reaches $\frac{N}{2}$; median $= L + \left[\frac{N/2 - cf}{f}\right] \times h$`,
    prereqs: [], ext: ["cumulative frequency (Std IX Statistics)"], sources: [AVERAGES],
  },
  {
    id: "C05", slug: "mode-of-grouped-data", title: "Mode of grouped data", group: "Median and mode", tier: "core",
    oneLiner: t`The modal class has the highest frequency; mode $= L + \left[\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right] \times h$`,
    prereqs: [], ext: [], sources: [AVERAGES],
  },

  // Pictures of data
  {
    id: "C06", slug: "histogram", title: "Histogram", group: "Pictures of data", tier: "core", visual: true,
    oneLiner: t`Bars standing side by side on continuous classes, each as tall as its frequency`,
    prereqs: [], ext: [], sources: [PICTURES],
  },
  {
    id: "C07", slug: "frequency-polygon", title: "Frequency polygon", group: "Pictures of data", tier: "core", visual: true,
    oneLiner: t`Plot (class mark, frequency), join the points, and close the polygon at the class marks just outside each end`,
    prereqs: ["C06"], ext: [], sources: [PICTURES],
  },
  {
    id: "C08", slug: "pie-diagram", title: "Pie diagram", group: "Pictures of data", tier: "core", visual: true,
    oneLiner: t`Each part gets a central angle $\theta = \frac{\text{its value}}{\text{total}} \times 360^\circ$`,
    prereqs: [], ext: [], sources: [PICTURES],
  },
];
