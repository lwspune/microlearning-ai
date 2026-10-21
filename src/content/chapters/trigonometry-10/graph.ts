import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Trigonometry prerequisite graph (Balbharati Std X Part 2, Ch.6). It assumes the Std IX ratios and
 * standard angles. Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/geo-trigonometry-10#${sub}`;
const IDENTITIES = S("Trigonometric Ratios and Identities");
const HEIGHTS = S("Heights and Distances");

export const graph: GraphNode[] = [
  // Identities
  {
    id: "C01", slug: "trigonometric-identities", title: "The three identities", group: "Identities", tier: "core",
    oneLiner: t`$\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$`,
    prereqs: [], ext: ["trigonometric ratios and standard angles (Std IX Trigonometry)"], sources: [IDENTITIES],
  },
  {
    id: "C02", slug: "ratios-from-one", title: "All the ratios from one", group: "Identities", tier: "core", visual: true,
    oneLiner: t`Given one ratio, an identity (or a right triangle) gives the rest; $5\sin\theta = 12\cos\theta$ means $\tan\theta = \frac{12}{5}$`,
    prereqs: ["C01"], ext: [], sources: [IDENTITIES],
  },
  {
    id: "C03", slug: "proving-identities", title: "Proving identities", group: "Identities", tier: "adv",
    oneLiner: t`Start from the harder side, write it in $\sin\theta$ and $\cos\theta$ or use an identity, and simplify until it becomes the other side`,
    prereqs: ["C01"], ext: ["algebraic identities and fractions (Std IX Polynomials)"], sources: [IDENTITIES],
  },

  // Heights and distances
  {
    id: "C04", slug: "elevation-and-depression", title: "Angles of elevation and depression", group: "Heights and distances", tier: "core", visual: true,
    oneLiner: t`Looking up from the horizontal gives an angle of elevation, looking down an angle of depression; one right triangle and $\tan\theta$ give the height or distance`,
    prereqs: [], ext: ["trigonometric ratios and standard angles (Std IX Trigonometry)"], sources: [HEIGHTS],
  },
  {
    id: "C05", slug: "two-triangle-problems", title: "Problems with two triangles", group: "Heights and distances", tier: "adv", visual: true,
    oneLiner: t`Buildings facing each other, a broken tree, a kite's string: draw the figure, find the right triangle(s), and solve one before the other`,
    prereqs: ["C04"], ext: [], sources: [HEIGHTS],
  },
];
