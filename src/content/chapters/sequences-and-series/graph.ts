import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Sequences and Series prerequisite graph (Balbharati Std XI Part 2, Ch.2).
 * Edges are hard prerequisites, transitively reduced. A.P. is Std X work: the book assumes it, so the
 * chapter teaches it first (C15–C18) from NCERT Class 10 and the Maharashtra SSC Algebra papers.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics (and `ncert-10`, `mh-ssc-10` for A.P.).
 */
const GP = "mh-sb-11/sequences-series-11#Geometric Progression — General Term and Sum";
const AP_NCERT = "ncert-10/c10ArithmeticProgressions";
const AP_SSC = "mh-ssc-10/algebra#Arithmetic Progression";
const AP_TEXT = (sub: string) => `mh-ssc-10-text/alg-arithmetic-progression-10#${sub}`;

export const graph: GraphNode[] = [
  // Sequences and A.P. (Std X work, taught first at the owner's request, 2026-10-16; ids C15–C18 so the
  // existing C01–C14 keep their ids and every student's progress)
  {
    id: "C15", slug: "sequences-and-series", title: "Sequences and series", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`A sequence is a list in order, $t_n$ its $n$th term; a series adds the terms, $S_n$ the first $n$`,
    prereqs: [], ext: [], sources: [AP_NCERT, AP_SSC],
  },
  // C19–C21: the Std X book's A.P. work beyond C15–C18 (PLAN.md "Std IX and X Maths"), shown in the
  // Maharashtra Board's Std X Arithmetic Progression; Std XI's Sequences and Series keeps C01–C18.
  {
    id: "C19", slug: "recognising-an-ap", title: "Is it an A.P.?", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`Check that $t_{n+1} - t_n$ is the same every time; from $a$ and $d$ the terms are $a, a + d, a + 2d, \ldots$`,
    prereqs: ["C15"], ext: [], sources: [AP_TEXT("Concept of Arithmetic Progression"), AP_TEXT("Common Difference of an A.P.")],
  },
  {
    id: "C16", slug: "ap-nth-term", title: "A.P. and its nth term", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`An A.P. adds the same $d$ each time: $t_n = a + (n-1)d$`,
    prereqs: ["C15"], ext: [], sources: [AP_NCERT, AP_SSC],
  },
  {
    id: "C20", slug: "counting-terms", title: "Counting the terms of an A.P.", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`Which term is $560$? How many multiples of $4$ lie between $10$ and $250$? Set $t_n$ equal to it and solve for a whole $n$`,
    prereqs: ["C16"], ext: [], sources: [AP_TEXT("nth Term of an A.P.")],
  },
  {
    id: "C17", slug: "ap-sum", title: "Sum of n terms of an A.P.", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`$S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a + l)$: pair the first and last terms`,
    prereqs: ["C16"], ext: [], sources: [AP_NCERT, AP_SSC],
  },
  {
    id: "C18", slug: "numbers-in-ap", title: "Three or four numbers in A.P.", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`Take $a - d, a, a + d$ so the sum fixes $a$; for consecutive terms $2b = a + c$`,
    prereqs: ["C16"], ext: [], sources: [AP_NCERT, AP_SSC],
  },
  {
    id: "C21", slug: "ap-word-problems", title: "A.P. in daily life", group: "Sequences and A.P.", tier: "core",
    oneLiner: t`Savings, instalments, seats in rows: find $a$ and $d$, then decide whether the question wants one term $t_n$ or a total $S_n$`,
    prereqs: ["C17"], ext: [], sources: [AP_TEXT("Word Problems and Applications")],
  },
  // Geometric progressions
  {
    id: "C01", slug: "gp-common-ratio", title: "Spotting a G.P.", group: "Geometric progressions", tier: "core",
    oneLiner: t`A G.P. multiplies by the same $r$ each time: $r = \frac{t_{n+1}}{t_n}$, not a difference`,
    prereqs: ["C16"], ext: [], sources: [GP],
  },
  {
    id: "C02", slug: "gp-nth-term", title: "The nth term of a G.P.", group: "Geometric progressions", tier: "core",
    oneLiner: t`$t_n = ar^{n-1}$: find a term, which term, or $a$ and $r$ from two terms`,
    prereqs: ["C01"], ext: ["laws of indices"], sources: [GP],
  },
  {
    id: "C03", slug: "numbers-in-gp", title: "Three or four numbers in G.P.", group: "Geometric progressions", tier: "core",
    oneLiner: t`Take $\frac{a}{r}, a, ar$ (or $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$) so the product gives $a$ at once`,
    prereqs: ["C02"], ext: [], sources: [GP],
  },
  {
    id: "C04", slug: "gp-sum", title: "Sum of n terms of a G.P.", group: "Geometric progressions", tier: "core",
    oneLiner: t`$S_n = \frac{a(r^n - 1)}{r - 1}$ for $r \ne 1$; $S_n = na$ when $r = 1$`,
    prereqs: ["C02"], ext: [], sources: [GP],
  },
  {
    id: "C05", slug: "sums-like-5-55-555", title: "Sums like 5 + 55 + 555", group: "Geometric progressions", tier: "adv",
    oneLiner: t`Write $55\ldots5$ as $\frac{5}{9}(10^k - 1)$, then sum a G.P. and a constant`,
    prereqs: ["C04"], ext: [], sources: [GP],
  },
  {
    id: "C06", slug: "term-from-sum", title: "The nth term from the sum", group: "Geometric progressions", tier: "core",
    oneLiner: t`$t_n = S_n - S_{n-1}$ for $n \ge 2$, and $t_1 = S_1$`,
    prereqs: ["C04"], ext: [], sources: [GP],
  },
  {
    id: "C07", slug: "infinite-gp", title: "Sum to infinity", group: "Geometric progressions", tier: "core",
    oneLiner: t`When $|r| < 1$, $S_\infty = \frac{a}{1 - r}$; otherwise there is no sum`,
    prereqs: ["C04"], ext: [], sources: ["mh-sb-11/sequences-series-11#Sum of Infinite Terms of a G.P."],
  },
  {
    id: "C08", slug: "recurring-decimals", title: "Recurring decimals as fractions", group: "Geometric progressions", tier: "core",
    oneLiner: t`$0.\overline{36} = \frac{36}{100} + \frac{36}{100^2} + \ldots = \frac{36}{99}$`,
    prereqs: ["C07"], ext: [], sources: ["mh-sb-11/sequences-series-11#Recurring Decimals as Rational Numbers"],
  },

  // H.P. and means
  {
    id: "C09", slug: "harmonic-progression", title: "Harmonic progression", group: "H.P. and means", tier: "core",
    oneLiner: "Take reciprocals: they form an A.P.; work there, then flip back",
    prereqs: ["C16"], ext: [], sources: ["mh-sb-11/sequences-series-11#Harmonic Progression"],
  },
  {
    id: "C10", slug: "am-gm-hm", title: "A.M., G.M. and H.M.", group: "H.P. and means", tier: "core",
    oneLiner: t`$A = \frac{a+b}{2}$, $G = \sqrt{ab}$, $H = \frac{2ab}{a+b}$; $G^2 = AH$ and $A \ge G \ge H$`,
    prereqs: ["C01", "C09"], ext: [], sources: ["mh-sb-11/sequences-series-11#Arithmetic, Geometric and Harmonic Means"],
  },
  {
    id: "C11", slug: "inserting-means", title: "Inserting means", group: "H.P. and means", tier: "core",
    oneLiner: t`$k$ numbers between $a$ and $b$ make $k + 2$ terms: find $d$ or $r$ from the last term`,
    prereqs: ["C02", "C10"], ext: [], sources: ["mh-sb-11/sequences-series-11#Arithmetic, Geometric and Harmonic Means"],
  },

  // Special series
  {
    id: "C12", slug: "arithmetico-geometric", title: "Arithmetico-geometric series", group: "Special series", tier: "adv",
    oneLiner: t`Multiply $S$ by $r$, subtract, and the rest is a G.P.`,
    prereqs: ["C07"], ext: [], sources: ["mh-sb-11/sequences-series-11#Arithmetico-Geometric Progression"],
  },
  {
    id: "C13", slug: "sigma-formulas", title: "Sums of r, r² and r³", group: "Special series", tier: "core",
    oneLiner: t`$\sum r = \frac{n(n+1)}{2}$, $\sum r^2 = \frac{n(n+1)(2n+1)}{6}$, $\sum r^3 = \left(\frac{n(n+1)}{2}\right)^2$`,
    prereqs: [], ext: ["arithmetic progressions"], sources: ["mh-sb-11/sequences-series-11#Properties of Summation"],
  },
  {
    id: "C14", slug: "series-by-sigma", title: "Summing a series with Σ", group: "Special series", tier: "core",
    oneLiner: t`Write the $r$th term, expand it, and sum each power of $r$ separately`,
    prereqs: ["C13"], ext: [], sources: ["mh-sb-11/sequences-series-11#Properties of Summation"],
  },
];
