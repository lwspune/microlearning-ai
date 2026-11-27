import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Slice a root, a stem and a leaf. Could you tell which is which, and monocot from dicot?`,
    reveal: t`Yes: each has its own layers and bundle pattern, which a stained section shows clearly.`,
  },
  explanation: {
    intuition: [
      t`Each organ has epidermis, ground tissue and vascular tissue.`,
      t`The **arrangement** of these differs.`,
      t`Bundle type and number are the best clues.`,
    ],
    formal: [
      {
        title: "Root and stem",
        points: [
          t`Dicot root: 2 to 6 **radial** bundles, exarch xylem, narrow pith.`,
          t`Monocot root: more than six bundles (**polyarch**), large pith.`,
          t`Endodermis has **Casparian strips** of suberin; sunflower hypodermis is collenchyma.`,
        ],
      },
      {
        title: "Leaf",
        points: [
          t`**Mesophyll**: the photosynthetic tissue of the leaf.`,
          t`Dicot leaf: **dorsiventral**; palisade and spongy mesophyll; stomata mostly below.`,
          t`Monocot leaf: **isobilateral**; mesophyll not divided; stomata on both surfaces.`,
        ],
      },
    ],
    worked: {
      prompt: t`A leaf has palisade cells below the upper epidermis and stomata mostly on the lower side. What type is it?`,
      steps: [
        t`Palisade and spongy layers: dicot.`,
        t`Upper side faces the sun: dorsiventral.`,
      ],
      answer: t`Dicot, dorsiventral leaf`,
    },
    visualSpec: t`Four outline sections: dicot root, monocot root, dicot stem and dicot leaf.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks root.",
      remediation: "Root has cortex.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks stem.",
      remediation: "Stem has cortex and pith.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks flower.",
      remediation: "Mesophyll is in leaves.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says dicot root.",
      remediation: "That has 2 to 6.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says monocot stem.",
      remediation: "Stem bundles are scattered.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says dicot stem.",
      remediation: "Those form a ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks lignin.",
      remediation: "Strips are suberin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks cellulose.",
      remediation: "Strips are suberin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks cutin.",
      remediation: "Cutin is on exodermis.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says upside down.",
      remediation: "Monocot leaves have both.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says dicot.",
      remediation: "Dicots lack upper stomata.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says dorsiventral.",
      remediation: "Monocot leaves are isobilateral.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks parenchyma.",
      remediation: "That is general cortex.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks sclerenchyma.",
      remediation: "That is hard bast.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks endodermis.",
      remediation: "Endodermis is innermost cortex.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q1(E)" },
      stem: t`Mesophyll tissue is present in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "mesophyll" } },
      options: [
        { key: "A", text: t`flower`, correct: false, misconceptionId: "C05-M3", value: "flower_o" },
        { key: "B", text: t`leaf`, correct: true, value: "leaf_o" },
        { key: "C", text: t`root`, correct: false, misconceptionId: "C05-M1", value: "root_o" },
        { key: "D", text: t`stem`, correct: false, misconceptionId: "C05-M2", value: "stem_o" },
      ],
      solution: {
        steps: [
          t`Palisade and spongy tissue.`,
          t`Leaf.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q5(B)" },
      stem: t`A section shows more than six xylem bundles alternating with phloem and a large pith. It is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "polyarch" } },
      options: [
        { key: "A", text: t`dicot root`, correct: false, misconceptionId: "C05-M4", value: "dicot_root" },
        { key: "B", text: t`monocot stem`, correct: false, misconceptionId: "C05-M5", value: "monocot_stem" },
        { key: "C", text: t`dicot stem`, correct: false, misconceptionId: "C05-M6", value: "dicot_stem" },
        { key: "D", text: t`monocot root`, correct: true, value: "monocot_root" },
      ],
      solution: {
        steps: [
          t`Polyarch, large pith.`,
          t`Monocot root.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q7(a)" },
      stem: t`The Casparian strips on the radial walls of endodermis cells are made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "casparian" } },
      options: [
        { key: "A", text: t`suberin`, correct: true, value: "suberin_s" },
        { key: "B", text: t`lignin`, correct: false, misconceptionId: "C05-M7", value: "lignin_s" },
        { key: "C", text: t`cellulose`, correct: false, misconceptionId: "C05-M8", value: "cellulose_s" },
        { key: "D", text: t`cutin`, correct: false, misconceptionId: "C05-M9", value: "cutin_s" },
      ],
      solution: {
        steps: [
          t`Radial walls of endodermis.`,
          t`Suberin.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(H)" },
      stem: t`A leaf section shows stomata on both surfaces and mesophyll not divided into palisade and spongy tissue. It is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "upper_stomata" } },
      options: [
        { key: "A", text: t`dicot, dorsiventral leaf`, correct: false, misconceptionId: "C05-M11", value: "dicot_dorsiventral" },
        { key: "B", text: t`monocot, dorsiventral leaf`, correct: false, misconceptionId: "C05-M12", value: "monocot_dorsiventral" },
        { key: "C", text: t`monocot, isobilateral leaf`, correct: true, value: "monocot_isobilateral" },
        { key: "D", text: t`dicot leaf placed upside down`, correct: false, misconceptionId: "C05-M10", value: "dicot_upside_down" },
      ],
      solution: {
        steps: [
          t`Stomata both sides.`,
          t`Monocot, isobilateral.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q5(C)" },
      stem: t`In a sunflower (dicot) stem, the hypodermis is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "hypodermis" } },
      options: [
        { key: "A", text: t`collenchyma`, correct: true, value: "collenchyma_h" },
        { key: "B", text: t`parenchyma`, correct: false, misconceptionId: "C05-M13", value: "parenchyma_h" },
        { key: "C", text: t`sclerenchyma`, correct: false, misconceptionId: "C05-M14", value: "sclerenchyma_h" },
        { key: "D", text: t`endodermis cells`, correct: false, misconceptionId: "C05-M15", value: "endodermis_h" },
      ],
      solution: {
        steps: [
          t`Below the epidermis.`,
          t`Collenchyma.`,
        ],
      },
    },
  ],
};
