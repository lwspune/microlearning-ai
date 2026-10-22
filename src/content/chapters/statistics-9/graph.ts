import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Statistics prerequisite graph (Balbharati Std IX Part 1, Ch.7): collecting and organising data, and the mean, median and mode.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/statistics-9#${sub}`;

export const graph: GraphNode[] = [
  // Collecting data
  {
    id: "C01", slug: "primary-and-secondary-data", title: "Primary and secondary data", group: "Collecting data", tier: "core",
    oneLiner: t`Data you collect yourself is primary; data taken from records that others collected is secondary`,
    prereqs: [], ext: [], sources: [S("Primary and Secondary Data")],
  },

  // Organising data
  {
    id: "C02", slug: "class-limits-and-class-marks", title: "Class limits, width and class mark", group: "Organising data", tier: "core",
    oneLiner: t`For the class $20$–$25$: lower limit $20$, upper limit $25$, width $5$, class mark $\frac{20 + 25}{2} = 22.5$`,
    prereqs: [], ext: [], sources: [S("Classification of Data and Frequency Distribution")],
  },
  {
    id: "C03", slug: "frequency-tables", title: "Frequency distribution tables", group: "Organising data", tier: "core",
    oneLiner: t`Tally each observation into its class; in exclusive classes such as $20$–$25$, $25$ belongs to the next class`,
    prereqs: ["C02"], ext: [], sources: [S("Classification of Data and Frequency Distribution")],
  },
  {
    id: "C04", slug: "cumulative-frequency", title: "Cumulative frequency", group: "Organising data", tier: "core",
    oneLiner: t`Add the frequencies down the table: a less-than cumulative frequency counts every observation up to that class's upper limit`,
    prereqs: ["C03"], ext: [], sources: [S("Cumulative Frequency")],
  },

  // Averages
  {
    id: "C05", slug: "mean", title: "Mean", group: "Averages", tier: "core",
    oneLiner: t`Mean $=$ sum of the observations $\div$ their number; from a table, $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$`,
    prereqs: [], ext: [], sources: [S("Measures of Central Tendency")],
  },
  {
    id: "C06", slug: "problems-on-the-mean", title: "Problems on the mean", group: "Averages", tier: "adv",
    oneLiner: t`Sum $=$ mean $\times$ number: use it to correct a misread value, add or remove an observation, or combine two groups`,
    prereqs: ["C05"], ext: [], sources: [S("Measures of Central Tendency")],
  },
  {
    id: "C07", slug: "median", title: "Median", group: "Averages", tier: "core",
    oneLiner: t`Arrange the data in order: the median is the middle value, or the mean of the two middle values when the count is even`,
    prereqs: [], ext: [], sources: [S("Measures of Central Tendency")],
  },
  {
    id: "C08", slug: "mode", title: "Mode", group: "Averages", tier: "core",
    oneLiner: t`The mode is the value that occurs most often; from a table, the value with the highest frequency`,
    prereqs: [], ext: [], sources: [S("Measures of Central Tendency")],
  },

  // Pictures of data
  {
    id: "C09", slug: "bar-diagrams", title: "Sub-divided and percentage bar diagrams", group: "Pictures of data", tier: "core", visual: true,
    oneLiner: t`A sub-divided bar splits each total into its parts; a percentage bar shows each part as a percentage, every bar $100$ high`,
    prereqs: [], ext: ["bar graphs (Std VIII)"], sources: [S("Percentage Bar Diagram"), S("Sub-divided Bar Diagram")],
  },
];
