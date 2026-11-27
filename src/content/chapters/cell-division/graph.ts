import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Cell Division prerequisite graph (Balbharati Biology Std XI, Ch.7): the cell cycle and amitosis, the stages and significance of mitosis, the sub-stages of prophase I, and meiosis II and why meiosis matters.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/cell-division-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Cycle
  {
    id: "C01", slug: "cell-cycle", title: "The cell cycle", group: "Cycle", tier: "core",
    oneLiner: t`Interphase is G₁ (growth, the main control point), S (DNA and histones made) and G₂, then the M phase; amitosis, as in Paramoecium, splits the nucleus with no spindle`,
    prereqs: [], ext: [], sources: [S("Cell Cycle"), S("Amitosis")],
  },
  // Division
  {
    id: "C02", slug: "mitosis", title: "Mitosis", group: "Division", tier: "core",
    oneLiner: t`Prophase: chromosomes condense and the spindle forms; metaphase: chromosomes on the equator; anaphase: chromatids pulled to the poles; telophase: nuclei re-form; mitosis is homotypic`,
    prereqs: ["C01"], ext: [], sources: [S("Mitosis"), S("Significance of Mitosis")],
  },
  {
    id: "C03", slug: "meiosis-one", title: "Meiosis I", group: "Division", tier: "core",
    oneLiner: t`Prophase I: leptotene (bouquet), zygotene (synapsis of homologues), pachytene (crossing over), diplotene (desynapsis), diakinesis; in anaphase I homologues separate while chromatids stay joined`,
    prereqs: ["C02"], ext: [], sources: [S("Meiosis I")],
  },
  {
    id: "C04", slug: "meiosis-two-significance", title: "Meiosis II and its significance", group: "Division", tier: "core",
    oneLiner: t`After interkinesis, meiosis II splits the chromatids, so one diploid cell gives four haploid cells; crossing over makes variation for evolution and halving keeps chromosome numbers constant across generations`,
    prereqs: ["C03"], ext: [], sources: [S("Meiosis II"), S("Significance of Meiosis")],
  },
];
