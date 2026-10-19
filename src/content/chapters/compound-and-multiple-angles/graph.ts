import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Compound and Multiple Angles prerequisite graph (Balbharati Std XI Part 1, Ch.3, "Trigonometry - II").
 * Edges are hard prerequisites, transitively reduced. The book's "prove that" exercises become
 * "evaluate" and "is equal to" questions.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/trigonometry-2-11#${sub}`;
const M = S("Multiple Angles — Double and Triple");

export const graph: GraphNode[] = [
  // Compound angles
  {
    id: "C01", slug: "sin-cos-of-sum", title: "sin and cos of a sum or difference", group: "Compound angles", tier: "core",
    oneLiner: t`$\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$; $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$`,
    prereqs: [], ext: ["values at standard angles", "signs in the four quadrants"], sources: [S("Compound Angles")],
  },
  {
    id: "C02", slug: "tan-of-sum", title: "tan of a sum or difference", group: "Compound angles", tier: "core",
    oneLiner: t`$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$; $\tan\left(\frac{\pi}{4} + x\right) = \frac{1 + \tan x}{1 - \tan x}$`,
    prereqs: ["C01"], ext: [], sources: [S("Compound Angles")],
  },
  {
    id: "C03", slug: "allied-angles", title: "Allied angles", group: "Compound angles", tier: "core",
    oneLiner: t`$90^\circ \pm \theta$, $270^\circ \pm \theta$ switch the function; $180^\circ \pm \theta$, $360^\circ - \theta$ keep it; the quadrant gives the sign`,
    prereqs: ["C01"], ext: [], sources: [S("Allied Angles")],
  },

  // Multiple angles
  {
    id: "C04", slug: "double-angles", title: "Double angles", group: "Multiple angles", tier: "core",
    oneLiner: t`$\sin 2A = 2\sin A\cos A$; $\cos 2A = \cos^2 A - \sin^2 A = 1 - 2\sin^2 A = 2\cos^2 A - 1$; $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$`,
    prereqs: ["C02"], ext: [], sources: [M],
  },
  {
    id: "C05", slug: "half-angles", title: "Half angles", group: "Multiple angles", tier: "core",
    oneLiner: t`$\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$, $\cos^2\frac{x}{2} = \frac{1 + \cos x}{2}$; the quadrant of $\frac{x}{2}$ picks the sign`,
    prereqs: ["C04"], ext: [], sources: [M],
  },
  {
    id: "C06", slug: "triple-angles", title: "Triple angles", group: "Multiple angles", tier: "core",
    oneLiner: t`$\sin 3A = 3\sin A - 4\sin^3 A$; $\cos 3A = 4\cos^3 A - 3\cos A$; $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$`,
    prereqs: ["C04"], ext: [], sources: [M],
  },
  {
    id: "C07", slug: "angles-18-and-36", title: "sin 18° and cos 36°", group: "Multiple angles", tier: "adv",
    oneLiner: t`From $2\theta = 90^\circ - 3\theta$: $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$, $\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$`,
    prereqs: ["C06"], ext: ["quadratic equations"], sources: [M],
  },

  // Factorization
  {
    id: "C08", slug: "sum-to-product", title: "Sum into product", group: "Factorization", tier: "core",
    oneLiner: t`$\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$, and three more of the same shape`,
    prereqs: ["C01"], ext: [], sources: [S("Factorization Formulae — Sum or Difference into Product")],
  },
  {
    id: "C09", slug: "product-to-sum", title: "Product into sum", group: "Factorization", tier: "core",
    oneLiner: t`$2\sin A\cos B = \sin(A + B) + \sin(A - B)$; $2\sin A\sin B = \cos(A - B) - \cos(A + B)$`,
    prereqs: ["C01"], ext: [], sources: [S("Defactorization Formulae — Product into Sum or Difference")],
  },
  {
    id: "C10", slug: "angles-of-a-triangle", title: "Angles of a triangle", group: "Factorization", tier: "adv",
    oneLiner: t`With $A + B + C = \pi$: $\sin(A + B) = \sin C$, and $\tan A + \tan B + \tan C = \tan A\tan B\tan C$`,
    prereqs: ["C02", "C03", "C08"], ext: [], sources: [S("Trigonometric Functions of Angles of a Triangle")],
  },

  // NDA: not in the book (PLAN.md "NDA Maths course", phase 2c)
  {
    id: "C11", slug: "a-sin-plus-b-cos", title: "Greatest and least values of a sin θ + b cos θ", group: "Greatest and least values", tier: "adv",
    oneLiner: t`Write $a\sin\theta + b\cos\theta = \sqrt{a^2 + b^2}\sin(\theta + \alpha)$: it runs from $-\sqrt{a^2 + b^2}$ to $\sqrt{a^2 + b^2}$`,
    prereqs: ["C01"], ext: ["range of sine and cosine (Trigonometric Functions)"], sources: [`nda/trigonometric-identities#Maximum and Minimum of Trigonometric Expressions`],
  },
];
