import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A meiosis in the anther gives four working pollen grains. A meiosis in the ovule also gives four megaspores, yet only one survives. Why waste three?`,
    reveal: t`The one survivor gets all the food and room to grow into a large embryo sac; the other three degenerate.`,
  },
  explanation: {
    intuition: [
      t`The **ovule** is the megasporangium; it becomes the seed.`,
      t`Inside it, a diploid **megaspore mother cell** divides by meiosis.`,
      t`This is **megasporogenesis**: a linear tetrad of four haploid megaspores.`,
      t`Usually only the chalazal one survives: the **functional megaspore**.`,
    ],
    formal: [
      {
        title: "The anatropous ovule",
        points: [
          t`The commonest ovule in angiosperms is **anatropous**: turned upside down.`,
          t`Its **micropyle** points down, close beside the **funicle** (stalk).`,
          t`One or two **integuments** cover the **nucellus**, the inner tissue.`,
          t`The **chalaza** is the base of the ovule, opposite the micropyle.`,
        ],
      },
      {
        title: "Counting meioses for seeds",
        points: [
          t`Each seed needs one embryo sac: one meiosis on the female side.`,
          t`It also needs one pollen grain: a quarter of a meiosis on the male side.`,
          t`So $n$ seeds need $n + \frac{n}{4}$ meiotic divisions.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many meiotic divisions are needed to form 100 seeds?`,
      steps: [
        t`Female side: 100 meioses.`,
        t`Male side: $100 \div 4 = 25$.`,
        t`$100 + 25 = 125$`,
      ],
      answer: t`125`,
    },
    visualSpec: t`An ovule that turns upside down as it grows, ending anatropous.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Puts the micropyle opposite the funicle.",
      remediation: "That is an orthotropous ovule; an anatropous one turns down beside the funicle.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Puts it at the chalaza.",
      remediation: "The chalaza is the base, opposite the micropyle.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Puts it at a right angle.",
      remediation: "That is a hemianatropous ovule (body at right angles to the funicle); an anatropous one turns fully down.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks the megaspore.",
      remediation: "The megaspore is the product of meiosis; it divides by mitosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks the nucellus.",
      remediation: "The nucellus is the tissue around the mother cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks the integument.",
      remediation: "Integuments are protective coats; they don't undergo meiosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks all four survive.",
      remediation: "Three megaspores degenerate; one is functional.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks the micropylar one.",
      remediation: "Usually the chalazal megaspore survives.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks two survive.",
      remediation: "Only one megaspore is functional.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Counts only the female side.",
      remediation: t`Each seed also needs a pollen grain: add $n \div 4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Counts only the male side.",
      remediation: "Each seed needs its own embryo sac: one meiosis each.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Takes one meiosis per side per seed.",
      remediation: "One meiosis on the male side gives four pollen grains.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks the chalaza.",
      remediation: "The chalaza is the base; the nucellus is the tissue inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks the funicle.",
      remediation: "The funicle is the stalk outside the ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks the embryo sac.",
      remediation: "The embryo sac forms inside the nucellus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2024 Q. 29" },
      stem: t`In an anatropous ovule, the micropyle lies`,
      verify: { kind: "value", inputs: {  }, params: { q: "anatropous" } },
      options: [
        { key: "A", text: t`on the side, at right angles to the funicle`, correct: false, misconceptionId: "C05-M3", value: "at_side" },
        { key: "B", text: t`turned down, close beside the funicle`, correct: true, value: "beside_funicle" },
        { key: "C", text: t`opposite the funicle, at the top`, correct: false, misconceptionId: "C05-M1", value: "opposite_funicle" },
        { key: "D", text: t`at the chalaza`, correct: false, misconceptionId: "C05-M2", value: "at_chalaza" },
      ],
      solution: {
        steps: [
          t`An anatropous ovule is inverted.`,
          t`Its micropyle lies close beside the funicle.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q1(2)" },
      stem: t`In an ovule, meiosis takes place in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "meiosis" } },
      options: [
        { key: "A", text: t`megaspore`, correct: false, misconceptionId: "C05-M4", value: "megaspore" },
        { key: "B", text: t`nucellus`, correct: false, misconceptionId: "C05-M5", value: "nucellus" },
        { key: "C", text: t`integument`, correct: false, misconceptionId: "C05-M6", value: "integument" },
        { key: "D", text: t`megaspore mother cell`, correct: true, value: "megaspore_mother_cell" },
      ],
      solution: {
        steps: [
          t`Megaspores are haploid, so they come from meiosis.`,
          t`The megaspore mother cell divides by meiosis.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`Of the linear tetrad of megaspores, the one that usually survives is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tetrad" } },
      options: [
        { key: "A", text: t`one, the chalazal megaspore`, correct: true, value: "one_chalazal" },
        { key: "B", text: t`all four`, correct: false, misconceptionId: "C05-M7", value: "all_four" },
        { key: "C", text: t`one, the micropylar megaspore`, correct: false, misconceptionId: "C05-M8", value: "one_micropylar" },
        { key: "D", text: t`two`, correct: false, misconceptionId: "C05-M9", value: "two_megaspores" },
      ],
      solution: {
        steps: [
          t`Of the linear tetrad, three degenerate.`,
          t`The chalazal megaspore usually survives.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2024 Q. 2(vii)" },
      stem: t`How many meiotic divisions are needed to form 300 seeds in an angiosperm?`,
      verify: { kind: "value", inputs: { s: "300" }, params: { q: "seeds" } },
      options: [
        { key: "A", text: t`$75$`, correct: false, misconceptionId: "C05-M11", value: "75" },
        { key: "B", text: t`$600$`, correct: false, misconceptionId: "C05-M12", value: "600" },
        { key: "C", text: t`$375$`, correct: true, value: "375" },
        { key: "D", text: t`$300$`, correct: false, misconceptionId: "C05-M10", value: "300" },
      ],
      solution: {
        steps: [
          t`Female side: 300.`,
          t`Male side: $300 \div 4 = 75$.`,
          t`$300 + 75 = 375$`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`The mass of cells inside the integuments of an ovule, in which the embryo sac forms, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "nucellus" } },
      options: [
        { key: "A", text: t`nucellus`, correct: true, value: "nucellus" },
        { key: "B", text: t`chalaza`, correct: false, misconceptionId: "C05-M13", value: "chalaza" },
        { key: "C", text: t`funicle`, correct: false, misconceptionId: "C05-M14", value: "funicle" },
        { key: "D", text: t`embryo sac`, correct: false, misconceptionId: "C05-M15", value: "embryo_sac" },
      ],
      solution: {
        steps: [
          t`The integuments are the outer coats.`,
          t`The tissue inside them is the nucellus.`,
        ],
      },
    },
  ],
};
