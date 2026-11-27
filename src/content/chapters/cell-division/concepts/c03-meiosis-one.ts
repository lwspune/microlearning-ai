import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Brothers and sisters from the same parents differ from one another, unless they are identical twins. Where does the shuffling happen?`,
    reveal: t`In meiosis I: paired chromosomes swap pieces (crossing over), then separate at random.`,
  },
  explanation: {
    intuition: [
      t`**Meiosis** forms gametes or spores with half the chromosome number.`,
      t`**Meiosis I** is the reduction division.`,
      t`**Prophase I** is long and has five sub-stages.`,
    ],
    formal: [
      {
        title: "Prophase I",
        points: [
          t`**Leptotene**: long threads; the **bouquet** stage.`,
          t`**Zygotene**: homologues pair: **synapsis**.`,
          t`**Pachytene**: **crossing over** between non-sister chromatids. **Diplotene**: **desynapsis**, chiasmata seen. **Diakinesis**: further condensing.`,
        ],
      },
      {
        title: "Later stages",
        points: [
          t`Metaphase I: pairs line up at the equator.`,
          t`**Anaphase I**: **homologues** separate; sister chromatids stay joined.`,
          t`So a cell with $2n$ chromosomes has $2 \times 2n$ chromatids in anaphase I.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell has 2n = 12. How many chromatids are there in anaphase I?`,
      steps: [
        t`12 chromosomes, each with 2 chromatids.`,
        t`$12 \times 2 = 24$.`,
      ],
      answer: t`24`,
    },
    visualSpec: t`A pair of homologous chromosomes crossing over at a chiasma.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Says any two.",
      remediation: "Only homologues pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Says non-homologous.",
      remediation: "Non-homologues do not pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Says sister chromatids.",
      remediation: "Those are already joined.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks leptotene.",
      remediation: "That is the bouquet stage.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks zygotene.",
      remediation: "That is synapsis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks diplotene.",
      remediation: "That is desynapsis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks zygotene.",
      remediation: "That is synapsis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks pachytene.",
      remediation: "That is crossing over.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks diakinesis.",
      remediation: "That is final condensing.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks pachytene.",
      remediation: "That is crossing over.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks zygotene.",
      remediation: "That is synapsis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks leptotene.",
      remediation: "That is the bouquet.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Counts chromosomes.",
      remediation: "Each has 2 chromatids.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Halves it.",
      remediation: "The cell still holds all 20 chromosomes until telophase I.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Doubles twice.",
      remediation: "Each has only 2 chromatids.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(B)" },
      stem: t`Synapsis is the pairing of`,
      verify: { kind: "value", inputs: {  }, params: { q: "synapsis" } },
      options: [
        { key: "A", text: t`non-homologous chromosomes`, correct: false, misconceptionId: "C03-M2", value: "non_homologous" },
        { key: "B", text: t`sister chromatids`, correct: false, misconceptionId: "C03-M3", value: "sister_chromatids" },
        { key: "C", text: t`homologous chromosomes`, correct: true, value: "homologous_c" },
        { key: "D", text: t`any two chromosomes`, correct: false, misconceptionId: "C03-M1", value: "any_two" },
      ],
      solution: {
        steps: [
          t`Homologues pair.`,
          t`Homologous chromosomes.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q4" },
      stem: t`Crossing over takes place in`,
      verify: { kind: "value", inputs: {  }, params: { q: "crossing" } },
      options: [
        { key: "A", text: t`Zygotene`, correct: false, misconceptionId: "C03-M5", value: "zygotene_s" },
        { key: "B", text: t`Diplotene`, correct: false, misconceptionId: "C03-M6", value: "diplotene_s" },
        { key: "C", text: t`Pachytene`, correct: true, value: "pachytene_s" },
        { key: "D", text: t`Leptotene`, correct: false, misconceptionId: "C03-M4", value: "leptotene_s" },
      ],
      solution: {
        steps: [
          t`Swapping segments.`,
          t`Pachytene.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q4" },
      stem: t`The bouquet stage, with chromosome ends drawn towards the centrioles, is seen in`,
      verify: { kind: "value", inputs: {  }, params: { q: "bouquet" } },
      options: [
        { key: "A", text: t`Zygotene`, correct: false, misconceptionId: "C03-M7", value: "zygotene_s" },
        { key: "B", text: t`Pachytene`, correct: false, misconceptionId: "C03-M8", value: "pachytene_s" },
        { key: "C", text: t`Diakinesis`, correct: false, misconceptionId: "C03-M9", value: "diakinesis_s" },
        { key: "D", text: t`Leptotene`, correct: true, value: "leptotene_s" },
      ],
      solution: {
        steps: [
          t`Ends converge.`,
          t`Leptotene.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q4" },
      stem: t`Desynapsis, when homologues begin to separate but stay joined at chiasmata, occurs in`,
      verify: { kind: "value", inputs: {  }, params: { q: "desynapsis" } },
      options: [
        { key: "A", text: t`Zygotene`, correct: false, misconceptionId: "C03-M11", value: "zygotene_s" },
        { key: "B", text: t`Leptotene`, correct: false, misconceptionId: "C03-M12", value: "leptotene_s" },
        { key: "C", text: t`Diplotene`, correct: true, value: "diplotene_s" },
        { key: "D", text: t`Pachytene`, correct: false, misconceptionId: "C03-M10", value: "pachytene_s" },
      ],
      solution: {
        steps: [
          t`Homologues part.`,
          t`Diplotene.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-division-11-bio/Ex Q1(F)" },
      stem: t`A diploid cell has 20 chromosomes. How many chromatids are present in anaphase I of meiosis?`,
      verify: { kind: "value", inputs: { n: "20" }, params: { q: "chromatids" } },
      options: [
        { key: "A", text: t`$40$`, correct: true, value: "40" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C03-M13", value: "20" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C03-M14", value: "10" },
        { key: "D", text: t`$80$`, correct: false, misconceptionId: "C03-M15", value: "80" },
      ],
      solution: {
        steps: [
          t`$20 \times 2$.`,
          t`40.`,
        ],
      },
    },
  ],
};
