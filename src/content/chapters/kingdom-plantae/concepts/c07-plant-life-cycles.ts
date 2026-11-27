import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A fern spore grows into a tiny heart-shaped plant that looks nothing like a fern. How does it become a fern again?`,
    reveal: t`That tiny plant makes gametes; after fertilization, the zygote grows into a new fern. Two generations take turns.`,
  },
  explanation: {
    intuition: [
      t`Plant life cycles alternate between two generations.`,
      t`The **sporophyte** (2n) and the **gametophyte** (n).`,
      t`This is **alternation of generations**.`,
    ],
    formal: [
      {
        title: "The cycle",
        points: [
          t`Sporophyte (2n) → **meiosis** → spores (n).`,
          t`Spores → gametophyte (n) → gametes (n).`,
          t`Gametes → **fertilization** → zygote (2n) → sporophyte.`,
        ],
      },
      {
        title: "Types",
        points: [
          t`**Haplontic** (fungi, some algae): the zygote is the only diploid cell.`,
          t`**Haplo-diplontic** (land plants, many algae): both phases are multicellular.`,
          t`Which phase dominates differs: gametophyte in mosses, sporophyte in ferns and seed plants.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a fern, which generation is the large plant you see?`,
      steps: [
        t`The fern plant is diploid.`,
        t`It forms spores by meiosis.`,
      ],
      answer: t`The sporophyte`,
    },
    visualSpec: t`A loop: sporophyte, meiosis, spores, gametophyte, gametes, fertilization, zygote.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Says mitosis.",
      remediation: "Spores halve the chromosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says fertilization.",
      remediation: "Fertilization makes the zygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says budding.",
      remediation: "Budding is asexual.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says diplontic.",
      remediation: "Diplontic has diploid adults.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says haplo-diplontic.",
      remediation: "Both phases are multicellular there.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says no cycle.",
      remediation: "It is a cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says haplontic.",
      remediation: "Only the zygote is diploid there.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says diplontic.",
      remediation: "Only gametes are haploid there.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Says no cycle.",
      remediation: "It is a cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says diploid.",
      remediation: "The sporophyte is diploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says triploid.",
      remediation: "Endosperm can be 3n.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says tetraploid.",
      remediation: "It is haploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Puts fertilization first.",
      remediation: "Meiosis comes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says spores from gametes.",
      remediation: "Spores come from the sporophyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says zygote to gametophyte.",
      remediation: "The zygote forms the sporophyte.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q10" },
      stem: t`In a plant's life cycle, haploid spores are formed from the sporophyte by`,
      verify: { kind: "value", inputs: {  }, params: { q: "spores" } },
      options: [
        { key: "A", text: t`fertilization`, correct: false, misconceptionId: "C07-M2", value: "fertilization_s" },
        { key: "B", text: t`budding`, correct: false, misconceptionId: "C07-M3", value: "budding_s" },
        { key: "C", text: t`meiosis`, correct: true, value: "meiosis_s" },
        { key: "D", text: t`mitosis`, correct: false, misconceptionId: "C07-M1", value: "mitosis_s" },
      ],
      solution: {
        steps: [
          t`Halving chromosomes.`,
          t`Meiosis.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q8(E)" },
      stem: t`A life cycle in which the zygote is the only diploid cell is`,
      verify: { kind: "value", inputs: {  }, params: { q: "zygote_only" } },
      options: [
        { key: "A", text: t`diplontic`, correct: false, misconceptionId: "C07-M4", value: "diplontic_c" },
        { key: "B", text: t`haplo-diplontic`, correct: false, misconceptionId: "C07-M5", value: "haplodiplontic_c" },
        { key: "C", text: t`not a life cycle`, correct: false, misconceptionId: "C07-M6", value: "no_cycle" },
        { key: "D", text: t`haplontic`, correct: true, value: "haplontic_c" },
      ],
      solution: {
        steps: [
          t`Only the zygote is 2n.`,
          t`Haplontic.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q8(E)" },
      stem: t`Land plants, with both a multicellular gametophyte and a multicellular sporophyte, show a life cycle that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "both_phases" } },
      options: [
        { key: "A", text: t`not a life cycle`, correct: false, misconceptionId: "C07-M9", value: "no_cycle" },
        { key: "B", text: t`haplo-diplontic`, correct: true, value: "haplodiplontic_c" },
        { key: "C", text: t`haplontic`, correct: false, misconceptionId: "C07-M7", value: "haplontic_c" },
        { key: "D", text: t`diplontic`, correct: false, misconceptionId: "C07-M8", value: "diplontic_c" },
      ],
      solution: {
        steps: [
          t`Two multicellular phases.`,
          t`Haplo-diplontic.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q10" },
      stem: t`The gametophyte generation of a plant is`,
      verify: { kind: "value", inputs: {  }, params: { q: "gametophyte" } },
      options: [
        { key: "A", text: t`haploid (n)`, correct: true, value: "haploid_g" },
        { key: "B", text: t`diploid (2n)`, correct: false, misconceptionId: "C07-M10", value: "diploid_g" },
        { key: "C", text: t`triploid (3n)`, correct: false, misconceptionId: "C07-M11", value: "triploid_g" },
        { key: "D", text: t`tetraploid (4n)`, correct: false, misconceptionId: "C07-M12", value: "tetraploid_g" },
      ],
      solution: {
        steps: [
          t`Gamete-maker.`,
          t`Haploid (n).`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q10" },
      stem: t`The correct order of alternation of generations, starting from the sporophyte, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`fertilization → spores → gametophyte → zygote`, correct: false, misconceptionId: "C07-M13", value: "fertilization_first" },
        { key: "B", text: t`gametophyte → spores → gametes → meiosis`, correct: false, misconceptionId: "C07-M14", value: "spores_from_gametes" },
        { key: "C", text: t`zygote → gametophyte → spores → meiosis`, correct: false, misconceptionId: "C07-M15", value: "zygote_to_gametophyte" },
        { key: "D", text: t`meiosis → spores → gametophyte → gametes → fertilization → zygote`, correct: true, value: "correct_order" },
      ],
      solution: {
        steps: [
          t`Sporophyte first.`,
          t`Meiosis → spores → gametophyte → gametes → fertilization → zygote.`,
        ],
      },
    },
  ],
};
