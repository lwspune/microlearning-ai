import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A seal in icy water stays warm under its skin. What tissue does that?`,
    reveal: t`Adipose tissue: a layer of fat cells that insulates, stores energy and absorbs shocks.`,
  },
  explanation: {
    intuition: [
      t`Connective tissue binds and supports other tissues.`,
      t`**Areolar** tissue is loose packing between organs.`,
      t`**Adipose** tissue stores fat; **tendons** are dense and strong.`,
    ],
    formal: [
      {
        title: "Areolar tissue",
        points: [
          t`A semisolid, jelly-like **matrix**: white fibres (**collagen**, tensile strength) and yellow fibres (**elastin**).`,
          t`**Fibroblasts** make the fibres; **mast cells** secrete **heparin** and **histamine**.`,
          t`**Macrophages** are phagocytic; **fat cells** store fat.`,
        ],
      },
      {
        title: "Adipose and dense",
        points: [
          t`**Adipose** tissue of adipocytes is a good insulator and energy store.`,
          t`It also acts as a shock absorber.`,
          t`**Tendons** are dense regular tissue; they connect skeletal muscles to bones.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which areolar cell would you expect to engulf bacteria?`,
      steps: [
        t`Engulfing is phagocytosis.`,
        t`Macrophages are amoeboid and phagocytic.`,
      ],
      answer: t`Macrophage`,
    },
    visualSpec: t`Areolar tissue: a jelly matrix crossed by white and yellow fibres, with four labelled cell types.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks fibroblasts.",
      remediation: "Fibroblasts make fibres.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks macrophages.",
      remediation: "Macrophages are phagocytic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks fat cells.",
      remediation: "Fat cells store fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks mast cells.",
      remediation: "Mast cells secrete heparin.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks macrophages.",
      remediation: "Macrophages are phagocytic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks fat cells.",
      remediation: "Fat cells store fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks elastin.",
      remediation: "Elastin makes yellow fibres.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks chondrin.",
      remediation: "Chondrin is cartilage matrix.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks ossein.",
      remediation: "Ossein is bone matrix.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks areolar.",
      remediation: "Fat storage and insulation is adipose.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks tendon.",
      remediation: "Tendons join muscle to bone.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks cartilage.",
      remediation: "Cartilage supports shape.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks adipose.",
      remediation: "Adipose stores fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks areolar.",
      remediation: "Areolar is loose packing.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks elastic cartilage.",
      remediation: "That supports the pinna.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(B)" },
      stem: t`In areolar tissue, the oval cells that secrete heparin and histamine are`,
      verify: { kind: "value", inputs: {  }, params: { q: "heparin" } },
      options: [
        { key: "A", text: t`macrophages`, correct: false, misconceptionId: "C04-M2", value: "macrophage_c" },
        { key: "B", text: t`fat cells`, correct: false, misconceptionId: "C04-M3", value: "adipocyte_c" },
        { key: "C", text: t`mast cells`, correct: true, value: "mast_cell" },
        { key: "D", text: t`fibroblasts`, correct: false, misconceptionId: "C04-M1", value: "fibroblast_c" },
      ],
      solution: {
        steps: [
          t`Heparin, histamine.`,
          t`Mast cells.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(B)" },
      stem: t`In areolar tissue, the fibres and the polysaccharides of the matrix are made by`,
      verify: { kind: "value", inputs: {  }, params: { q: "fibre_maker" } },
      options: [
        { key: "A", text: t`mast cells`, correct: false, misconceptionId: "C04-M4", value: "mast_cell" },
        { key: "B", text: t`macrophages`, correct: false, misconceptionId: "C04-M5", value: "macrophage_c" },
        { key: "C", text: t`fat cells`, correct: false, misconceptionId: "C04-M6", value: "adipocyte_c" },
        { key: "D", text: t`fibroblasts`, correct: true, value: "fibroblast_c" },
      ],
      solution: {
        steps: [
          t`Fibres and matrix.`,
          t`Fibroblasts.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(B)" },
      stem: t`The white fibres of areolar tissue, which give tensile strength, are made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "white" } },
      options: [
        { key: "A", text: t`chondrin`, correct: false, misconceptionId: "C04-M8", value: "chondrin_p" },
        { key: "B", text: t`ossein`, correct: false, misconceptionId: "C04-M9", value: "ossein_p" },
        { key: "C", text: t`collagen`, correct: true, value: "collagen_p" },
        { key: "D", text: t`elastin`, correct: false, misconceptionId: "C04-M7", value: "elastin_p" },
      ],
      solution: {
        steps: [
          t`White fibres.`,
          t`Collagen.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(B)" },
      stem: t`Animals of cold regions have a layer below the skin that cuts heat loss. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cold" } },
      options: [
        { key: "A", text: t`areolar tissue`, correct: false, misconceptionId: "C04-M10", value: "areolar_t" },
        { key: "B", text: t`tendon`, correct: false, misconceptionId: "C04-M11", value: "tendon_t" },
        { key: "C", text: t`cartilage`, correct: false, misconceptionId: "C04-M12", value: "cartilage_t" },
        { key: "D", text: t`adipose tissue`, correct: true, value: "adipose_t" },
      ],
      solution: {
        steps: [
          t`Insulating fat layer.`,
          t`Adipose tissue.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q4" },
      stem: t`Skeletal muscles are connected to bones by`,
      verify: { kind: "value", inputs: {  }, params: { q: "tendon" } },
      options: [
        { key: "A", text: t`elastic cartilage`, correct: false, misconceptionId: "C04-M15", value: "elastic_cartilage" },
        { key: "B", text: t`tendons`, correct: true, value: "tendon_t" },
        { key: "C", text: t`adipose tissue`, correct: false, misconceptionId: "C04-M13", value: "adipose_t" },
        { key: "D", text: t`areolar tissue`, correct: false, misconceptionId: "C04-M14", value: "areolar_t" },
      ],
      solution: {
        steps: [
          t`Muscle to bone.`,
          t`Tendons.`,
        ],
      },
    },
  ],
};
