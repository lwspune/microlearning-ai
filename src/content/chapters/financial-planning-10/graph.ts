import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Financial Planning prerequisite graph (Balbharati Std X Part 1, Ch.4): GST, then shares and
 * mutual funds. Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/alg-financial-planning-10#${sub}`;
const GST = S("Goods and Services Tax (GST)");
const SHARES = S("Shares — Face Value, Market Value, Brokerage");

export const graph: GraphNode[] = [
  // GST
  {
    id: "C01", slug: "cgst-and-sgst", title: "CGST, SGST and IGST", group: "GST", tier: "core",
    oneLiner: t`Within a state, GST is split equally into CGST and SGST; a sale to another state pays IGST at the whole rate`,
    prereqs: [], ext: ["percentages (Std VIII)"], sources: [GST],
  },
  {
    id: "C02", slug: "discount-then-gst", title: "Discount, then GST", group: "GST", tier: "core",
    oneLiner: t`GST is charged on the price after the discount: taxable value $=$ printed price $-$ discount`,
    prereqs: ["C01"], ext: [], sources: [GST],
  },
  {
    id: "C03", slug: "taxable-value-from-total", title: "Taxable value from the total", group: "GST", tier: "core",
    oneLiner: t`Total $=$ taxable value $\times \frac{100 + \text{rate}}{100}$, so divide the total by that factor, never take the rate off the total`,
    prereqs: ["C01"], ext: [], sources: [GST],
  },
  {
    id: "C04", slug: "input-tax-credit", title: "Input tax credit", group: "GST", tier: "core",
    oneLiner: t`GST payable $=$ output tax (collected on sales) $-$ input tax (paid on purchases); along a chain each trader pays on the value added`,
    prereqs: ["C01"], ext: [], sources: [GST],
  },

  // Shares and mutual funds
  {
    id: "C05", slug: "face-and-market-value", title: "Face value, market value and the sum invested", group: "Shares and mutual funds", tier: "core",
    oneLiner: t`MV $=$ FV $+$ premium (or $-$ discount); sum invested $=$ number of shares $\times$ MV, and shares bought $=$ sum $\div$ MV`,
    prereqs: [], ext: [], sources: [SHARES],
  },
  {
    id: "C06", slug: "dividend-and-rate-of-return", title: "Dividend and rate of return", group: "Shares and mutual funds", tier: "core",
    oneLiner: t`Dividend is a percentage of the face value; rate of return $= \frac{\text{dividend}}{\text{MV}} \times 100$`,
    prereqs: ["C05"], ext: [], sources: [SHARES],
  },
  {
    id: "C07", slug: "brokerage", title: "Brokerage and GST on it", group: "Shares and mutual funds", tier: "core",
    oneLiner: t`Brokerage is a percentage of MV and GST is $18\%$ of the brokerage: buying adds both to MV, selling takes both off`,
    prereqs: ["C05"], ext: [], sources: [SHARES],
  },
  {
    id: "C08", slug: "gain-or-loss-on-shares", title: "Gain or loss on shares", group: "Shares and mutual funds", tier: "adv",
    oneLiner: t`Add up what the sale and the dividends bring in, and compare it with all that the purchase cost`,
    prereqs: ["C06", "C07"], ext: [], sources: [SHARES],
  },
  {
    id: "C09", slug: "mutual-funds", title: "Mutual funds and NAV", group: "Shares and mutual funds", tier: "core",
    oneLiner: t`NAV $=$ value of the scheme $\div$ number of units; units allotted $=$ amount invested $\div$ NAV`,
    prereqs: [], ext: [], sources: [SHARES],
  },
];
