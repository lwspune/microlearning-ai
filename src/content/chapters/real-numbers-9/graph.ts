import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Real Numbers prerequisite graph (Balbharati Std IX Part 1, Ch.2): decimals, irrational numbers, surds and absolute value.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/real-numbers-9#${sub}`;

export const graph: GraphNode[] = [
  // Rational numbers
  {
    id: "C01", slug: "terminating-and-recurring-decimals", title: "Terminating and recurring decimals", group: "Rational numbers", tier: "core",
    oneLiner: t`$\frac{p}{q}$ terminates when $q$ has no prime factor but 2 and 5; otherwise its digits repeat, like $\frac{1}{3} = 0.\overline{3}$`,
    prereqs: [], ext: ["fractions and division (Std VIII)"], sources: [S("Properties of Rational Numbers and Decimal Expansion")],
  },
  {
    id: "C02", slug: "recurring-to-fraction", title: "Recurring decimals as fractions", group: "Rational numbers", tier: "core",
    oneLiner: t`For $x = 0.\overline{7}$, $10x - x = 7$, so $x = \frac{7}{9}$: shift by as many places as repeat, then subtract`,
    prereqs: ["C01"], ext: [], sources: [S("Properties of Rational Numbers and Decimal Expansion")],
  },
  {
    id: "C03", slug: "rationals-between", title: "Rational numbers between two numbers", group: "Rational numbers", tier: "core",
    oneLiner: t`Between any two rational numbers lie infinitely many more: take their average, or write both with more decimal places`,
    prereqs: ["C01"], ext: [], sources: [S("Properties of Rational Numbers and Decimal Expansion")],
  },

  // Irrational numbers
  {
    id: "C04", slug: "irrational-numbers", title: "Irrational numbers", group: "Irrational numbers", tier: "core", visual: true,
    oneLiner: t`A decimal that neither ends nor repeats, like $\sqrt{2} = 1.4142\ldots$, is irrational; $\sqrt{n}$ can still be marked on the number line`,
    prereqs: ["C01"], ext: [], sources: [S("Irrational Numbers and the Number Line")],
  },

  // Surds
  {
    id: "C05", slug: "surds", title: "Surds: order and simplest form", group: "Surds", tier: "core",
    oneLiner: t`$\sqrt[n]{a}$ is a surd of order $n$ when it is irrational; $\sqrt{50} = 5\sqrt{2}$ is its simplest form, and like surds share the same root`,
    prereqs: ["C04"], ext: [], sources: [S("Surds — Order, Like and Unlike, Simplification")],
  },
  {
    id: "C06", slug: "comparing-surds", title: "Comparing surds", group: "Surds", tier: "core",
    oneLiner: t`Square both: $7\sqrt{2} = \sqrt{98}$ and $5\sqrt{3} = \sqrt{75}$, so $7\sqrt{2} > 5\sqrt{3}$`,
    prereqs: ["C05"], ext: [], sources: [S("Comparison of Quadratic Surds")],
  },
  {
    id: "C07", slug: "adding-surds", title: "Adding and subtracting surds", group: "Surds", tier: "core",
    oneLiner: t`Only like surds combine: $9\sqrt{5} - 4\sqrt{5} + \sqrt{125} = 10\sqrt{5}$`,
    prereqs: ["C05"], ext: [], sources: [S("Operations on Quadratic Surds")],
  },
  {
    id: "C08", slug: "multiplying-surds", title: "Multiplying and dividing surds", group: "Surds", tier: "core",
    oneLiner: t`$\sqrt{a} \times \sqrt{b} = \sqrt{ab}$ and $\sqrt{a} \div \sqrt{b} = \sqrt{\frac{a}{b}}$; then simplify`,
    prereqs: ["C05"], ext: [], sources: [S("Operations on Quadratic Surds")],
  },
  {
    id: "C09", slug: "binomial-surds", title: "Multiplying binomial surds", group: "Surds", tier: "core",
    oneLiner: t`Multiply term by term: $(\sqrt{3} - \sqrt{2})(2\sqrt{3} - 3\sqrt{2})$ $= 12 - 5\sqrt{6}$`,
    prereqs: ["C07", "C08"], ext: [], sources: [S("Operations on Quadratic Surds")],
  },

  // Rationalising
  {
    id: "C10", slug: "rationalising-a-denominator", title: "Rationalising a denominator", group: "Rationalising", tier: "core",
    oneLiner: t`Multiply top and bottom by the surd: $\frac{3}{\sqrt{5}} = \frac{3\sqrt{5}}{5}$`,
    prereqs: ["C08"], ext: [], sources: [S("Rationalization of the Denominator")],
  },
  {
    id: "C11", slug: "rationalising-with-a-conjugate", title: "Rationalising with a conjugate", group: "Rationalising", tier: "adv",
    oneLiner: t`$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$, so multiplying by the conjugate clears the root from $\frac{1}{\sqrt{5} - \sqrt{3}}$`,
    prereqs: ["C09", "C10"], ext: [], sources: [S("Rationalization of the Denominator")],
  },

  // Absolute value
  {
    id: "C12", slug: "absolute-value", title: "Absolute value", group: "Absolute value", tier: "core",
    oneLiner: t`$|x|$ is the distance of $x$ from 0: $|-3| = 3$ and $|0| = 0$; work out what is inside the bars first`,
    prereqs: [], ext: ["integers on the number line (Std VII)"], sources: [S("Absolute Value")],
  },
  {
    id: "C13", slug: "absolute-value-equations", title: "Equations with absolute value", group: "Absolute value", tier: "core",
    oneLiner: t`$|x - 5| = 2$ means $x - 5 = 2$ or $x - 5 = -2$: two answers, $7$ and $3$`,
    prereqs: ["C12"], ext: [], sources: [S("Absolute Value")],
  },
];
