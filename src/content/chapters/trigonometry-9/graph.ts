import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Trigonometry prerequisite graph (Balbharati Std IX Part 2, Ch.8): the trigonometric ratios, their values at particular angles, and the relations among them.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/trigonometry-9#${sub}`;

export const graph: GraphNode[] = [
  // Ratios
  {
    id: "C01", slug: "trigonometric-ratios", title: "Sine, cosine and tangent", group: "Ratios", tier: "core", visual: true,
    oneLiner: t`In a right triangle, $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$, $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$ and $\tan\theta = \frac{\text{opposite}}{\text{adjacent}}$`,
    prereqs: [], ext: ["Pythagoras theorem (Std VII)", "similar triangles (Std IX Triangles)"], sources: [S("Trigonometric Ratios")],
  },
  {
    id: "C02", slug: "ratios-from-two-sides", title: "Ratios from two sides", group: "Ratios", tier: "core", visual: true,
    oneLiner: t`Given two sides of a right triangle, Pythagoras gives the third; then every ratio of both acute angles follows`,
    prereqs: ["C01"], ext: [], sources: [S("Trigonometric Ratios")],
  },

  // Particular angles
  {
    id: "C03", slug: "particular-angles", title: "Ratios of 0°, 30°, 45°, 60° and 90°", group: "Particular angles", tier: "core",
    oneLiner: t`$\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 45^\circ = 1$, $\sin 90^\circ = 1$: values from the 30-60-90 and 45-45-90 triangles`,
    prereqs: ["C01"], ext: [], sources: [S("Trigonometric Ratios of Particular Angles")],
  },

  // Relations
  {
    id: "C04", slug: "relations-among-ratios", title: "Relations among the ratios", group: "Relations", tier: "core",
    oneLiner: t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sin\theta = \cos(90^\circ - \theta)$ and $\sin^2\theta + \cos^2\theta = 1$`,
    prereqs: ["C01"], ext: [], sources: [S("Relations among Trigonometric Ratios")],
  },
];
