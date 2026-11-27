import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`Some bananas have no seeds, and some *Citrus* seeds sprout several seedlings. Do these plants follow the usual rules of sexual reproduction?`,
    reveal: t`Not quite: bananas form fruit without fertilization (parthenocarpy), and *Citrus* forms extra embryos from nucellus cells (polyembryony).`,
  },
  explanation: {
    intuition: [
      t`Seeds and fruits usually need fertilization.`,
      t`**Apomixis** forms seeds without fertilization: an asexual route.`,
      t`**Polyembryony**: more than one embryo in a seed.`,
      t`**Parthenocarpy**: a fruit without fertilization, so it is seedless.`,
    ],
    formal: [
      {
        title: "Apomixis and polyembryony",
        points: [
          t`In apomixis there is no meiosis and no syngamy, so neither pollination nor fertilization is needed.`,
          t`Its offspring are clones of the parent.`,
          t`**Adventive polyembryony**: extra embryos grow from nucellus or integument cells (*Citrus*).`,
          t`Such nucellar embryos are true to type: used to raise uniform plants.`,
        ],
      },
      {
        title: "Parthenocarpy",
        points: [
          t`The ovary grows into a fruit without fertilization.`,
          t`Examples: some bananas, pineapple and papaya.`,
          t`Hormone sprays can induce it.`,
        ],
      },
    ],
    worked: {
      prompt: t`A grower wants seedlings identical to a prized *Citrus* tree. Why do nucellar embryos help?`,
      steps: [
        t`Nucellar embryos come from the mother's diploid cells.`,
        t`No fertilization is involved.`,
        t`So they are true to type.`,
      ],
      answer: t`They are genetically identical to the parent`,
    },
    visualSpec: t`Three seeds side by side: normal, apomictic and polyembryonic, with their embryos' origins traced.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Thinks both are needed.",
      remediation: "Apomixis skips fertilization, so pollination is not needed either.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: "Thinks pollination is needed.",
      remediation: "Pollination serves fertilization, which apomixis skips.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Thinks fertilization is needed.",
      remediation: "Apomixis forms seeds without fertilization.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Picks apomixis.",
      remediation: "Apomixis forms seeds; a seedless fruit is parthenocarpy.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Picks polyembryony.",
      remediation: "Polyembryony is about extra embryos, not seedless fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Picks parthenogenesis.",
      remediation: "Parthenogenesis is an egg developing unfertilized; seedless fruit is parthenocarpy.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Picks parthenocarpy.",
      remediation: "Parthenocarpic fruits are seedless; these seeds have several embryos.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: "Picks double fertilization.",
      remediation: "Double fertilization gives one embryo per ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M9",
      mistake: "Picks vivipary.",
      remediation: "Vivipary is germination on the parent plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M10",
      mistake: "Calls them hybrids.",
      remediation: "No fertilization is involved, so they carry only the mother's genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M11",
      mistake: "Calls them haploid.",
      remediation: "Nucellus cells are diploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M12",
      mistake: "Calls them triploid.",
      remediation: "Triploid is the endosperm; nucellar embryos are diploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M13",
      mistake: "Picks mango.",
      remediation: "Mango fruits have a seed.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M14",
      mistake: "Picks pea.",
      remediation: "Pea pods hold seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M15",
      mistake: "Picks coconut.",
      remediation: "A coconut is a seed-bearing fruit.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(8)" },
      stem: t`Are pollination and fertilization necessary in apomixis?`,
      verify: { kind: "value", inputs: {  }, params: { q: "apomixis" } },
      options: [
        { key: "A", text: t`Both are needed`, correct: false, misconceptionId: "C12-M1", value: "both_needed" },
        { key: "B", text: t`Only pollination is needed`, correct: false, misconceptionId: "C12-M2", value: "pollination_only" },
        { key: "C", text: t`Only fertilization is needed`, correct: false, misconceptionId: "C12-M3", value: "fertilization_only" },
        { key: "D", text: t`Neither: the seed forms without fertilization`, correct: true, value: "neither_needed" },
      ],
      solution: {
        steps: [
          t`Apomixis has no fertilization.`,
          t`So pollination isn't needed either.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(7)" },
      stem: t`A fruit that develops without fertilization and has no seeds is formed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "seedless" } },
      options: [
        { key: "A", text: t`parthenogenesis`, correct: false, misconceptionId: "C12-M6", value: "parthenogenesis" },
        { key: "B", text: t`parthenocarpy`, correct: true, value: "parthenocarpy" },
        { key: "C", text: t`apomixis`, correct: false, misconceptionId: "C12-M4", value: "apomixis" },
        { key: "D", text: t`polyembryony`, correct: false, misconceptionId: "C12-M5", value: "polyembryony" },
      ],
      solution: {
        steps: [
          t`No fertilization means no seeds.`,
          t`A seedless fruit formed this way is parthenocarpic.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q3(1)" },
      stem: t`A *Citrus* seed often holds several embryos, some growing from cells of the nucellus. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "citrus" } },
      options: [
        { key: "A", text: t`vivipary`, correct: false, misconceptionId: "C12-M9", value: "vivipary" },
        { key: "B", text: t`polyembryony`, correct: true, value: "polyembryony" },
        { key: "C", text: t`parthenocarpy`, correct: false, misconceptionId: "C12-M7", value: "parthenocarpy" },
        { key: "D", text: t`double fertilization`, correct: false, misconceptionId: "C12-M8", value: "double_fertilization" },
      ],
      solution: {
        steps: [
          t`Extra embryos grow from nucellus cells.`,
          t`Several embryos in one seed is polyembryony.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q3(1)" },
      stem: t`Embryos that grow from nucellus cells, as in *Citrus*, are`,
      verify: { kind: "value", inputs: {  }, params: { q: "nucellar" } },
      options: [
        { key: "A", text: t`triploid`, correct: false, misconceptionId: "C12-M12", value: "triploid" },
        { key: "B", text: t`genetically identical to the parent: true to type`, correct: true, value: "true_to_type" },
        { key: "C", text: t`hybrids`, correct: false, misconceptionId: "C12-M10", value: "hybrid" },
        { key: "D", text: t`haploid`, correct: false, misconceptionId: "C12-M11", value: "haploid" },
      ],
      solution: {
        steps: [
          t`They come from the mother's diploid cells.`,
          t`True to type.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2026 Q. 18" },
      stem: t`Which of these fruits is often parthenocarpic?`,
      verify: { kind: "value", inputs: {  }, params: { q: "banana" } },
      options: [
        { key: "A", text: t`pea`, correct: false, misconceptionId: "C12-M14", value: "pea" },
        { key: "B", text: t`coconut`, correct: false, misconceptionId: "C12-M15", value: "coconut" },
        { key: "C", text: t`banana`, correct: true, value: "banana" },
        { key: "D", text: t`mango`, correct: false, misconceptionId: "C12-M13", value: "mango" },
      ],
      solution: {
        steps: [
          t`Cultivated bananas are often seedless.`,
          t`They form fruit without fertilization: parthenocarpy.`,
        ],
      },
    },
  ],
};
