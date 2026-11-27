import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A cockroach and a crab look nothing alike. Why are both called arthropods?`,
    reveal: t`Both have jointed appendages, a segmented body and a hard chitinous exoskeleton.`,
  },
  explanation: {
    intuition: [
      t`The common cockroach is *Periplaneta americana*.`,
      t`Its body is covered by a hard exoskeleton of **chitin**.`,
      t`Each segment is boxed in by chitinous plates.`,
    ],
    formal: [
      {
        title: "Systematic position",
        points: [
          t`Kingdom Animalia: no cell wall, heterotrophic nutrition.`,
          t`Phylum **Arthropoda**: jointed appendages, segmented body, chitinous exoskeleton.`,
          t`Class **Insecta**: two pairs of wings, three pairs of walking legs. Genus *Periplaneta*: nocturnal, straight wings.`,
        ],
      },
      {
        title: "Plates and sexes",
        points: [
          t`**Chitin** is a nitrogenous polysaccharide: a carbohydrate.`,
          t`Each segment has a dorsal **tergum**, a ventral **sternum** and lateral **pleurons**.`,
          t`Only the male has **anal styles** on the ninth sternum; both sexes have **anal cerci** on the tenth tergum.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cockroach shows anal cerci but no anal styles. Is it male or female?`,
      steps: [
        t`Anal cerci are present in both sexes.`,
        t`Anal styles are present only in the male.`,
      ],
      answer: t`Female`,
    },
    visualSpec: t`A ladder of ranks from kingdom Animalia down to species *americana*, one character beside each.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Says no cell wall.",
      remediation: "That is the kingdom character.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Says wings and legs.",
      remediation: "That is the class character.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Says nocturnal.",
      remediation: "That is the genus character.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says Arthropoda.",
      remediation: "The phylum is jointed legs and chitin.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says *Periplaneta*.",
      remediation: "The genus is nocturnal, straight wings.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says Animalia.",
      remediation: "The kingdom is no cell wall.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says protein.",
      remediation: "Chitin has nitrogen, but it is a polysaccharide.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says lipid.",
      remediation: "Chitin is a polysaccharide, not a fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says glycoprotein.",
      remediation: "Chitin has no protein part.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says ventral.",
      remediation: "The ventral plate is the sternum.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says lateral.",
      remediation: "The lateral plates are the pleurons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says soft cuticle.",
      remediation: "Soft cuticle joins the plates.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says anal cerci.",
      remediation: "Both sexes have cerci.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says broad abdomen.",
      remediation: "The female's abdomen is broader.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says six gonapophyses.",
      remediation: "Six plates belong to the female.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(C)" },
      stem: t`*Periplaneta americana* is placed in phylum Arthropoda because it has`,
      verify: { kind: "value", inputs: {  }, params: { q: "phylum" } },
      options: [
        { key: "A", text: t`jointed appendages, a segmented body and a chitinous exoskeleton`, correct: true, value: "jointed_chitin" },
        { key: "B", text: t`no cell wall and heterotrophic nutrition`, correct: false, misconceptionId: "C01-M1", value: "no_cell_wall" },
        { key: "C", text: t`two pairs of wings and three pairs of walking legs`, correct: false, misconceptionId: "C01-M2", value: "wings_legs" },
        { key: "D", text: t`a nocturnal habit and straight wings`, correct: false, misconceptionId: "C01-M3", value: "nocturnal_t" },
      ],
      solution: {
        steps: [
          t`Jointed appendages and chitin.`,
          t`Arthropoda.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(C)" },
      stem: t`In the systematic position of the cockroach, 'two pairs of wings and three pairs of walking legs' are the characters given for`,
      verify: { kind: "value", inputs: {  }, params: { q: "insecta" } },
      options: [
        { key: "A", text: t`class Insecta`, correct: true, value: "class_insecta" },
        { key: "B", text: t`phylum Arthropoda`, correct: false, misconceptionId: "C01-M4", value: "phylum_arthropoda" },
        { key: "C", text: t`genus *Periplaneta*`, correct: false, misconceptionId: "C01-M5", value: "genus_periplaneta" },
        { key: "D", text: t`kingdom Animalia`, correct: false, misconceptionId: "C01-M6", value: "kingdom_animalia" },
      ],
      solution: {
        steps: [
          t`Wings and legs.`,
          t`Class Insecta.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q1(A)" },
      stem: t`Chemical nature of chitin is`,
      verify: { kind: "value", inputs: {  }, params: { q: "chitin" } },
      options: [
        { key: "A", text: t`lipid`, correct: false, misconceptionId: "C01-M8", value: "lipid_t" },
        { key: "B", text: t`glycoprotein`, correct: false, misconceptionId: "C01-M9", value: "glycoprotein_t" },
        { key: "C", text: t`carbohydrate`, correct: true, value: "carbohydrate_t" },
        { key: "D", text: t`protein`, correct: false, misconceptionId: "C01-M7", value: "protein_t" },
      ],
      solution: {
        steps: [
          t`Nitrogenous polysaccharide.`,
          t`Carbohydrate.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(E)" },
      stem: t`The tergum of a body segment of the cockroach is its`,
      verify: { kind: "value", inputs: {  }, params: { q: "tergum" } },
      options: [
        { key: "A", text: t`dorsal chitinous plate`, correct: true, value: "dorsal_plate" },
        { key: "B", text: t`ventral chitinous plate`, correct: false, misconceptionId: "C01-M10", value: "ventral_plate" },
        { key: "C", text: t`lateral chitinous plate`, correct: false, misconceptionId: "C01-M11", value: "lateral_plate" },
        { key: "D", text: t`soft cuticle joining the plates`, correct: false, misconceptionId: "C01-M12", value: "soft_cuticle" },
      ],
      solution: {
        steps: [
          t`Tergum is on top.`,
          t`Dorsal plate.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(A)" },
      stem: t`Which feature is found only in the male cockroach?`,
      verify: { kind: "value", inputs: {  }, params: { q: "male" } },
      options: [
        { key: "A", text: t`a pair of anal styles on the ninth sternum`, correct: true, value: "anal_styles" },
        { key: "B", text: t`a pair of anal cerci on the tenth tergum`, correct: false, misconceptionId: "C01-M13", value: "anal_cerci" },
        { key: "C", text: t`a broader abdomen`, correct: false, misconceptionId: "C01-M14", value: "broad_abdomen" },
        { key: "D", text: t`six chitinous gonapophyses around the genital pore`, correct: false, misconceptionId: "C01-M15", value: "six_gonapophyses" },
      ],
      solution: {
        steps: [
          t`Only males have styles.`,
          t`Anal styles.`,
        ],
      },
    },
  ],
};
