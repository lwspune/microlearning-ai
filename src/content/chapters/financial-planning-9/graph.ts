import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Financial Planning prerequisite graph (Balbharati Std IX Part 1, Ch.6): savings, investments and income tax.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/financial-planning-9#${sub}`;

export const graph: GraphNode[] = [
  // Planning
  {
    id: "C01", slug: "savings-and-expenditure", title: "Income, expenditure and savings", group: "Planning", tier: "core",
    oneLiner: t`Savings $=$ income $-$ expenditure; work with percentages of the income, or of what is left after each step`,
    prereqs: [], ext: ["percentages (Std VIII)"], sources: [S("Savings and Expenditure")],
  },
  {
    id: "C02", slug: "comparing-investments", title: "Comparing investments", group: "Planning", tier: "core",
    oneLiner: t`Profit as a percentage of the sum invested compares two investments; compound interest gives $A = P\left(1 + \frac{R}{100}\right)^n$`,
    prereqs: [], ext: ["compound interest (Std VIII)"], sources: [S("Investments")],
  },

  // Income tax
  {
    id: "C03", slug: "taxable-income", title: "Taxable income", group: "Income tax", tier: "core",
    oneLiner: t`Taxable income is total income minus the allowed deductions; if it is within the first slab, no tax is due`,
    prereqs: [], ext: [], sources: [S("Tax Structure")],
  },
  {
    id: "C04", slug: "computing-income-tax", title: "Computing income tax", group: "Income tax", tier: "core",
    oneLiner: t`Tax each slab of the taxable income at its own rate, add the amounts, then add the cess on that tax`,
    prereqs: ["C03"], ext: [], sources: [S("Computation of Income Tax")],
  },
];
