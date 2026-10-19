import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Binomial Theorem prerequisite graph (Balbharati Std XI Part 2, Ch.4, §4.2–4.5; the owner left
 * mathematical induction out). Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/binomial-theorem-11#${sub}`;

export const graph: GraphNode[] = [
  // Positive integral index
  {
    id: "C01", slug: "binomial-expansion", title: "Expanding (a + b)ⁿ", group: "Positive integral index", tier: "core",
    oneLiner: t`$n + 1$ terms with coefficients $^nC_0, {}^nC_1, \ldots, {}^nC_n$; powers of $a$ fall as powers of $b$ rise`,
    prereqs: [], ext: ["combinations nCr"], sources: [S("Binomial Theorem for a Positive Integral Index")],
  },
  {
    id: "C02", slug: "general-term", title: "The general term", group: "Positive integral index", tier: "core",
    oneLiner: t`$T_{r+1} = {}^nC_r\,a^{n-r}b^r$: the $(r+1)$th term, not the $r$th`,
    prereqs: ["C01"], ext: [], sources: [S("General Term in the Expansion")],
  },
  {
    id: "C03", slug: "coefficient-of-a-power", title: "Coefficient of a given power", group: "Positive integral index", tier: "core",
    oneLiner: t`Collect the power of $x$ in $T_{r+1}$, set it equal to the one asked, solve for $r$`,
    prereqs: ["C02"], ext: ["laws of indices"], sources: [S("General Term in the Expansion")],
  },
  {
    id: "C04", slug: "term-independent-of-x", title: "The term independent of x", group: "Positive integral index", tier: "core",
    oneLiner: t`The power of $x$ in $T_{r+1}$ is $0$; signs and constants come along with $^nC_r$`,
    prereqs: ["C03"], ext: [], sources: [S("General Term in the Expansion")],
  },
  {
    id: "C05", slug: "middle-terms", title: "Middle terms", group: "Positive integral index", tier: "core",
    oneLiner: t`$n$ even: one middle term $T_{\frac{n}{2}+1}$; $n$ odd: two, $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$`,
    prereqs: ["C02"], ext: [], sources: [S("General Term in the Expansion")],
  },
  {
    id: "C06", slug: "sum-of-coefficients", title: "Sums of binomial coefficients", group: "Positive integral index", tier: "core",
    oneLiner: t`Put $x = 1$: $^nC_0 + \ldots + {}^nC_n = 2^n$; odd-placed and even-placed each give $2^{n-1}$`,
    prereqs: ["C01"], ext: [], sources: [S("Binomial Coefficients")],
  },
  {
    id: "C07", slug: "binomial-for-numbers", title: "Expanding to evaluate numbers", group: "Positive integral index", tier: "core",
    oneLiner: t`$(101)^4 = (100 + 1)^4$; in $(a+b)^n + (a-b)^n$ the odd terms cancel`,
    prereqs: ["C01"], ext: ["surds"], sources: [S("Binomial Theorem for a Positive Integral Index")],
  },

  // Any rational index
  {
    id: "C08", slug: "negative-fractional-index", title: "Negative or fractional index", group: "Any rational index", tier: "core",
    oneLiner: t`$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \ldots$, an endless series, valid only for $|x| < 1$`,
    prereqs: ["C02"], ext: [], sources: [S("Binomial Theorem for a Negative or Fractional Index")],
  },
  {
    id: "C09", slug: "binomial-approximation", title: "Approximating with the first terms", group: "Any rational index", tier: "core",
    oneLiner: t`Write the number as $a(1 + x)$ with small $x$, keep the first two or three terms`,
    prereqs: ["C08"], ext: [], sources: [S("Binomial Theorem for a Negative or Fractional Index")],
  },

  // NDA: not in the book (PLAN.md "NDA Maths course", phase 2c)
  {
    id: "C10", slug: "remainders-and-integer-parts", title: "Remainders and integer parts", group: "Using the expansion", tier: "adv",
    oneLiner: t`Write $9^n = (1 + 8)^n$ to find remainders; pair $(a + \sqrt{b})^n$ with $(a - \sqrt{b})^n$ to find integer and fractional parts`,
    prereqs: ["C07"], ext: [], sources: [`nda/binomial-theorem#Integer and Fractional Parts of Binomial Expressions`, `nda/binomial-theorem#Remainders and Divisibility via Binomial Expansion`],
  },
];
