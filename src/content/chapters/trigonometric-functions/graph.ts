import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Trigonometric Functions prerequisite graph (Balbharati Std XI Part 1, Ch.2, "Trigonometry - I").
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/trigonometry-1-11#${sub}`;

export const graph: GraphNode[] = [
  // Values
  {
    id: "C01", slug: "ratios-from-a-point", title: "Trigonometric functions from a point", group: "Values", tier: "core", visual: true,
    oneLiner: t`For $P(x, y)$ on the terminal arm, $r = \sqrt{x^2 + y^2}$: $\sin\theta = \frac{y}{r}$, $\cos\theta = \frac{x}{r}$, $\tan\theta = \frac{y}{x}$`,
    prereqs: [], ext: ["directed angles", "Pythagoras theorem"], sources: [S("Trigonometric Functions on the Unit Circle"), S("Trigonometric Functions of Specific and Negative Angles")],
  },
  {
    id: "C02", slug: "signs-in-quadrants", title: "Signs in the four quadrants", group: "Values", tier: "core", visual: true,
    oneLiner: "All positive in I; only sin and cosec in II; tan and cot in III; cos and sec in IV",
    prereqs: ["C01"], ext: [], sources: [S("Signs of Trigonometric Functions in Quadrants")],
  },
  {
    id: "C03", slug: "standard-angles", title: "Values at standard angles", group: "Values", tier: "core",
    oneLiner: t`$0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$ and the axes: $\sin 30^\circ = \frac{1}{2}$, $\tan 60^\circ = \sqrt{3}$, $\cos 180^\circ = -1$`,
    prereqs: ["C01"], ext: [], sources: [S("Trigonometric Functions of Specific and Negative Angles")],
  },
  {
    id: "C04", slug: "large-and-negative-angles", title: "Large and negative angles", group: "Values", tier: "core",
    oneLiner: t`Drop whole turns ($2\pi$); $\sin(-\theta) = -\sin\theta$, $\cos(-\theta) = \cos\theta$`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("Domain, Range and Periodicity"), S("Signs of Trigonometric Functions in Quadrants")],
  },

  // Identities
  {
    id: "C05", slug: "fundamental-identities", title: "The fundamental identities", group: "Identities", tier: "core",
    oneLiner: t`$\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$, $1 + \cot^2\theta = \operatorname{cosec}^2\theta$`,
    prereqs: ["C01"], ext: [], sources: [S("Fundamental Identities")],
  },
  {
    id: "C06", slug: "one-ratio-gives-all", title: "All six from one", group: "Identities", tier: "core",
    oneLiner: "Find the others from one value and the quadrant: the identity gives the size, the quadrant the sign",
    prereqs: ["C02", "C05"], ext: [], sources: [S("Fundamental Identities")],
  },
  {
    id: "C07", slug: "simplifying-expressions", title: "Simplifying with identities", group: "Identities", tier: "core",
    oneLiner: t`Turn everything into $\sin$ and $\cos$, or divide through by $\cos\theta$ when $\tan\theta$ is given`,
    prereqs: ["C05"], ext: ["algebraic identities"], sources: [S("Fundamental Identities")],
  },
  {
    id: "C08", slug: "eliminating-theta", title: "Eliminating θ", group: "Identities", tier: "core",
    oneLiner: t`From $x = a\cos\theta$, $y = b\sin\theta$: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$`,
    prereqs: ["C05"], ext: [], sources: [S("Fundamental Identities")],
  },

  // Graph and plane
  {
    id: "C09", slug: "range-and-period", title: "Range and period", group: "Range and the plane", tier: "core",
    oneLiner: t`$-1 \le \sin\theta, \cos\theta \le 1$; $\sin$ and $\cos$ repeat every $2\pi$, $\tan$ every $\pi$`,
    prereqs: ["C03"], ext: ["quadratic equations"], sources: [S("Domain, Range and Periodicity")],
  },
  {
    id: "C10", slug: "polar-coordinates", title: "Polar co-ordinates", group: "Range and the plane", tier: "core", visual: true,
    oneLiner: t`$(r, \theta)$ with $x = r\cos\theta$, $y = r\sin\theta$; pick $\theta$ in the point's quadrant`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("Polar Co-ordinate System")],
  },
];
