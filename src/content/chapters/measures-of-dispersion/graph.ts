import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Measures of Dispersion prerequisite graph (Balbharati Std XI Part 1, Ch.8).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/dispersion-11#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "range", title: "Range and its coefficient", group: "Spread", tier: "core",
    oneLiner: t`Range $= L - S$; coefficient of range $= \frac{L - S}{L + S}$; for classes, use the class limits`,
    prereqs: [], ext: [], sources: [S("Range")],
  },
  {
    id: "C02", slug: "variance-raw-data", title: "Variance of raw data", group: "Variance and S.D.", tier: "core",
    oneLiner: t`$\sigma^2 = \frac{\sum(x_i - \bar{x})^2}{n} = \frac{\sum x_i^2}{n} - \bar{x}^2$`,
    prereqs: [], ext: ["mean"], sources: [S("Variance and Standard Deviation")],
  },
  {
    id: "C03", slug: "variance-frequency-data", title: "Variance with frequencies", group: "Variance and S.D.", tier: "core",
    oneLiner: t`$\sigma^2 = \frac{\sum f_i x_i^2}{N} - \bar{x}^2$ with $N = \sum f_i$; for classes, $x_i$ is the class mark`,
    prereqs: ["C02"], ext: [], sources: [S("Variance and Standard Deviation")],
  },
  {
    id: "C04", slug: "standard-deviation", title: "Standard deviation", group: "Variance and S.D.", tier: "core",
    oneLiner: t`$\sigma = \sqrt{\text{variance}}$, in the data's own units; it is never negative`,
    prereqs: ["C02"], ext: [], sources: [S("Variance and Standard Deviation")],
  },
  {
    id: "C05", slug: "change-of-origin-and-scale", title: "Change of origin and scale", group: "Variance and S.D.", tier: "core",
    oneLiner: t`For $u = \frac{x - a}{h}$: $\sigma_x = |h|\,\sigma_u$; adding a constant changes nothing`,
    prereqs: ["C04"], ext: [], sources: [S("Change of Origin and Scale")],
  },
  {
    id: "C06", slug: "coefficient-of-variation", title: "Coefficient of variation", group: "Comparing spread", tier: "core",
    oneLiner: t`C.V. $= \frac{\sigma}{\bar{x}} \times 100$; the smaller C.V. is the more consistent`,
    prereqs: ["C04"], ext: [], sources: [S("Coefficient of Variation")],
  },
  {
    id: "C07", slug: "combined-sd", title: "Standard deviation of combined data", group: "Comparing spread", tier: "adv",
    oneLiner: t`$\sigma^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$ with $d_i = \bar{x}_i - \bar{x}$`,
    prereqs: ["C04"], ext: [], sources: [S("Standard Deviation for Combined Data")],
  },
];
