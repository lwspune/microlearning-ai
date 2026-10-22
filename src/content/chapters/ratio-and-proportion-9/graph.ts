import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Ratio and Proportion prerequisite graph (Balbharati Std IX Part 1, Ch.4): ratios, the operations on equal ratios and continued proportion.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/ratio-proportion-9#${sub}`;

export const graph: GraphNode[] = [
  // Ratio
  {
    id: "C01", slug: "ratios-in-reduced-form", title: "Ratios in reduced form", group: "Ratio", tier: "core",
    oneLiner: t`Write both quantities in one unit and divide by their HCF; a ratio is also a percentage: $15 : 25 = 3 : 5 = 60\%$`,
    prereqs: [], ext: ["fractions and percentages (Std VIII)"], sources: [S("Ratio and Proportion"), S("Properties of Ratio")],
  },
  {
    id: "C02", slug: "ratio-word-problems", title: "Word problems with ratios", group: "Ratio", tier: "core",
    oneLiner: t`Write the quantities as $3k$ and $5k$, then use the other fact: ages after some years, or one number added to both`,
    prereqs: ["C01"], ext: [], sources: [S("Properties of Ratio"), S("Direct and Inverse Proportion")],
  },
  {
    id: "C03", slug: "comparing-ratios", title: "Comparing ratios", group: "Ratio", tier: "core",
    oneLiner: t`To compare $\frac{a}{b}$ and $\frac{c}{d}$ (with $b, d > 0$), compare $ad$ with $bc$`,
    prereqs: ["C01"], ext: [], sources: [S("Comparison of Ratios")],
  },
  {
    id: "C04", slug: "combining-ratios", title: "Combining ratios", group: "Ratio", tier: "core",
    oneLiner: t`From $a : b = 2 : 1$ and $b : c = 4 : 1$, make $b$ the same in both: $a : b : c = 8 : 4 : 1$`,
    prereqs: ["C01"], ext: [], sources: [S("Properties of Ratio")],
  },

  // Equal ratios
  {
    id: "C05", slug: "operations-on-equal-ratios", title: "Invertendo to componendo-dividendo", group: "Equal ratios", tier: "core",
    oneLiner: t`If $\frac{a}{b} = \frac{c}{d}$, then $\frac{b}{a} = \frac{d}{c}$, $\frac{a + b}{b} = \frac{c + d}{d}$ and $\frac{a + b}{a - b} = \frac{c + d}{c - d}$`,
    prereqs: ["C01"], ext: [], sources: [S("Operations on Equal Ratios")],
  },
  {
    id: "C06", slug: "solving-with-componendo-dividendo", title: "Solving equations with componendo-dividendo", group: "Equal ratios", tier: "adv",
    oneLiner: t`An equation of the form $\frac{a + b}{a - b} = \frac{c + d}{c - d}$ goes back to $\frac{a}{b} = \frac{c}{d}$, which is easier to solve`,
    prereqs: ["C05"], ext: [], sources: [S("Operations on Equal Ratios")],
  },
  {
    id: "C07", slug: "theorem-on-equal-ratios", title: "Theorem on equal ratios", group: "Equal ratios", tier: "adv",
    oneLiner: t`If $\frac{a}{b} = \frac{c}{d} = k$, then $\frac{a + c}{b + d} = k$ too, and so is $\frac{la + mc}{lb + md}$`,
    prereqs: ["C05"], ext: [], sources: [S("Theorem on Equal Ratios")],
  },

  // Proportion
  {
    id: "C08", slug: "continued-proportion", title: "Continued proportion", group: "Proportion", tier: "core",
    oneLiner: t`$a$, $b$, $c$ are in continued proportion when $\frac{a}{b} = \frac{b}{c}$, so $b^2 = ac$: $b$ is the mean proportional`,
    prereqs: ["C01"], ext: [], sources: [S("Continued Proportion")],
  },
  {
    id: "C09", slug: "k-method", title: "The k-method", group: "Proportion", tier: "adv",
    oneLiner: t`Put each equal ratio equal to $k$ ($a = bk$, $c = dk$), substitute, and both sides simplify to the same expression in $k$`,
    prereqs: ["C08"], ext: [], sources: [S("k-Method")],
  },
];
