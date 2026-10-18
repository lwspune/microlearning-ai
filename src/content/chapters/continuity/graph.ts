import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Continuity prerequisite graph (Balbharati Std XI Part 2, Ch.8).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/continuity-11#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "continuity-at-a-point", title: "Continuity at a point", group: "Continuity", tier: "core", visual: true,
    oneLiner: t`$f$ is continuous at $a$ when $f(a)$ is defined, the limit exists, and $\lim_{x \to a} f(x) = f(a)$`,
    prereqs: [], ext: ["limits", "one-sided limits"], sources: [S("Continuity of a Function at a Point")],
  },
  {
    id: "C02", slug: "left-and-right-continuity", title: "Continuity from the left and right", group: "Continuity", tier: "core", visual: true,
    oneLiner: t`Left-continuous: $\lim_{x \to a^-} f(x) = f(a)$; continuous means both sides`,
    prereqs: ["C01"], ext: [], sources: [S("Continuity from the Left and from the Right")],
  },
  {
    id: "C03", slug: "finding-constants", title: "Finding constants for continuity", group: "Continuity", tier: "core",
    oneLiner: "Set each one-sided limit equal to the value at the joining point and solve for the constants",
    prereqs: ["C02"], ext: ["simultaneous linear equations"], sources: [S("Continuity of a Function at a Point")],
  },
  {
    id: "C04", slug: "types-of-discontinuity", title: "Types of discontinuity", group: "Discontinuity", tier: "core", visual: true,
    oneLiner: "Removable: the limit exists but isn't f(a); jump: the two sides differ; infinite: a side runs off",
    prereqs: ["C02"], ext: [], sources: [S("Types of Discontinuity")],
  },
  {
    id: "C05", slug: "continuity-on-an-interval", title: "Continuity on an interval", group: "Discontinuity", tier: "core", visual: true,
    oneLiner: t`Polynomials, $\sin$, $\cos$ and $e^x$ are continuous everywhere; check rational functions, $[x]$ and the joins of pieces`,
    prereqs: ["C04"], ext: [], sources: [S("Continuity Over an Interval")],
  },
  {
    id: "C06", slug: "intermediate-value-theorem", title: "The intermediate value theorem", group: "Discontinuity", tier: "adv", visual: true,
    oneLiner: t`Continuous on $[a, b]$ with $f(a)$ and $f(b)$ of opposite signs: $f(c) = 0$ for some $c$ between`,
    prereqs: ["C05"], ext: [], sources: [S("The Intermediate Value Theorem")],
  },
];
