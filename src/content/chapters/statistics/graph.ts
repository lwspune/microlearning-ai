import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Statistics prerequisite graph: what NDA asks beyond the Std XI book's Measures of Dispersion
 * (PLAN.md "NDA Maths course", phase 2a). Data and graphs, averages, mean deviation, and
 * correlation and regression; the book's chapter teaches variance and S.D.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
const S = (sub: string) => `nda/statistics#${sub}`;
const CENTRAL = S("Measures of Central Tendency — Mean, Median, Mode");
const GRAPHS = S("Frequency Distributions and Graphical Representation");
const REGRESSION = S("Regression and Correlation");

export const graph: GraphNode[] = [
  // Data and graphs
  {
    id: "C01", slug: "frequency-distributions", title: "Frequency distributions", group: "Data and graphs", tier: "core",
    oneLiner: t`Group data into classes; a class mark is the middle of a class, and cumulative frequency adds up the classes so far`,
    prereqs: [], ext: [], sources: [GRAPHS],
  },
  {
    id: "C02", slug: "graphs-of-data", title: "Histograms, ogives and pie charts", group: "Data and graphs", tier: "core", visual: true,
    oneLiner: t`A histogram's areas show frequency; ogives plot cumulative frequency and cross at the median; a pie chart's angle is $\frac{f}{N} \times 360^\circ$`,
    prereqs: ["C01"], ext: [], sources: [GRAPHS],
  },

  // Averages
  {
    id: "C03", slug: "arithmetic-mean", title: "The arithmetic mean", group: "Averages", tier: "core",
    oneLiner: t`$\bar{x} = \frac{\sum x_i}{n}$, or $\frac{\sum f_ix_i}{\sum f_i}$ with frequencies; deviations from the mean add up to $0$`,
    prereqs: [], ext: [], sources: [CENTRAL],
  },
  {
    id: "C04", slug: "mean-shortcuts", title: "Shifting, scaling and correcting the mean", group: "Averages", tier: "core",
    oneLiner: t`The mean of $a + bx_i$ is $a + b\bar{x}$; a wrong or removed value changes the total $n\bar{x}$ first`,
    prereqs: ["C03"], ext: [], sources: [CENTRAL],
  },
  {
    id: "C05", slug: "combined-mean", title: "The combined mean", group: "Averages", tier: "core",
    oneLiner: t`Two groups combine to $\frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$: weight each mean by its group's size`,
    prereqs: ["C03"], ext: [], sources: [CENTRAL],
  },
  {
    id: "C06", slug: "mean-of-grouped-data", title: "The mean of grouped data", group: "Averages", tier: "core",
    oneLiner: t`Use class marks as the values; an assumed mean or step deviations keep the arithmetic small`,
    prereqs: ["C01", "C03"], ext: [], sources: [CENTRAL],
  },
  {
    id: "C07", slug: "median", title: "The median", group: "Averages", tier: "core",
    oneLiner: t`The middle value of sorted data; with frequencies, find the class where the cumulative frequency passes $\frac{N}{2}$`,
    prereqs: ["C01"], ext: [], sources: [CENTRAL],
  },
  {
    id: "C08", slug: "mode", title: "The mode and the empirical relation", group: "Averages", tier: "core",
    oneLiner: t`The most frequent value; for moderately skewed data, mode $= 3$ median $- 2$ mean`,
    prereqs: ["C03", "C07"], ext: [], sources: [CENTRAL],
  },
  {
    id: "C09", slug: "geometric-and-harmonic-means", title: "Geometric and harmonic means", group: "Averages", tier: "adv",
    oneLiner: t`G.M. $= \sqrt[n]{x_1x_2\cdots x_n}$; H.M. $= \frac{n}{\sum 1/x_i}$ gives an average speed over equal distances; A.M. $\ge$ G.M. $\ge$ H.M.`,
    prereqs: ["C03"], ext: ["A.M., G.M. and H.M. of two numbers (Sequences and Series)"], sources: [CENTRAL],
  },

  // Spread about an average
  {
    id: "C10", slug: "mean-deviation", title: "Mean deviation", group: "Mean deviation", tier: "core",
    oneLiner: t`The average distance from the mean (or median): $\frac{\sum |x_i - \bar{x}|}{n}$, with frequencies as weights`,
    prereqs: ["C03", "C07"], ext: [], sources: [S("Dispersion — Standard Deviation, Variance, Mean Deviation")],
  },

  // Correlation and regression
  {
    id: "C11", slug: "correlation-coefficient", title: "The correlation coefficient", group: "Correlation and regression", tier: "core", visual: true,
    oneLiner: t`$r = \frac{\operatorname{cov}(x, y)}{\sigma_x\sigma_y}$ lies in $[-1, 1]$; shifting leaves it alone, and a negative scale flips its sign`,
    prereqs: ["C03"], ext: ["standard deviation (Measures of Dispersion)"], sources: [REGRESSION],
  },
  {
    id: "C12", slug: "regression-lines", title: "Lines of regression", group: "Correlation and regression", tier: "core", visual: true,
    oneLiner: t`$y - \bar{y} = b_{yx}(x - \bar{x})$ with $b_{yx} = r\frac{\sigma_y}{\sigma_x}$; both lines pass through $(\bar{x}, \bar{y})$`,
    prereqs: ["C11"], ext: [], sources: [REGRESSION],
  },
  {
    id: "C13", slug: "two-regression-lines", title: "Working with two regression lines", group: "Correlation and regression", tier: "adv", visual: true,
    oneLiner: t`They meet at the means; $r^2 = b_{yx}b_{xy}$, with $r$ taking the coefficients' sign; tell the lines apart because $b_{yx}b_{xy} \le 1$`,
    prereqs: ["C12"], ext: ["solving simultaneous linear equations"], sources: [REGRESSION],
  },
];
