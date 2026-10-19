import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Binary Numbers prerequisite graph: NDA's "binary system of numbers", taught in neither the
 * Std XI nor the Std XII book (PLAN.md "NDA Maths course", phase 2b).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
const S = (sub: string) => `nda/binary-numbers#${sub}`;
const ARITHMETIC = S("Binary Arithmetic — Addition, Division, and Algebraic Identities");
const REPRESENTATION = S("Binary Representation and Number Theory");
const CONVERSION = S("Binary to Decimal Conversion");

export const graph: GraphNode[] = [
  // Writing numbers in base 2
  {
    id: "C01", slug: "binary-to-decimal", title: "Binary place value", group: "Writing numbers in base 2", tier: "core",
    oneLiner: t`Each binary digit is worth a power of $2$: $(1011)_2 = 8 + 0 + 2 + 1 = 11$`,
    prereqs: [], ext: ["powers of 2"], sources: [CONVERSION],
  },
  {
    id: "C02", slug: "decimal-to-binary", title: "Decimal to binary", group: "Writing numbers in base 2", tier: "core",
    oneLiner: t`Divide by $2$ again and again; the remainders, read from the last to the first, are the binary digits`,
    prereqs: ["C01"], ext: [], sources: [REPRESENTATION, CONVERSION],
  },

  // Binary arithmetic
  {
    id: "C03", slug: "binary-addition-and-subtraction", title: "Adding and subtracting in binary", group: "Binary arithmetic", tier: "core",
    oneLiner: t`Add column by column: $1 + 1 = (10)_2$, write $0$ and carry $1$; subtraction borrows a $2$`,
    prereqs: ["C01"], ext: [], sources: [ARITHMETIC, CONVERSION],
  },
  {
    id: "C04", slug: "binary-multiplication-and-division", title: "Multiplying and dividing in binary", group: "Binary arithmetic", tier: "adv",
    oneLiner: t`Multiply by shifting and adding; divide by long division, or convert to decimal, work there and convert back`,
    prereqs: ["C02", "C03"], ext: [], sources: [ARITHMETIC, REPRESENTATION],
  },
];
