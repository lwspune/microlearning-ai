import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Your heart, your skin and your nerve cord look nothing alike. Are they built from countless kinds of cells?`,
    reveal: t`No: every organ is built from just four basic tissues, mixed in different ways.`,
  },
  explanation: {
    intuition: [
      t`A **tissue** is a group of similar cells doing a common job.`,
      t`**Histology** is the study of the structure and arrangement of tissues.`,
      t`Animals have four basic tissues: **epithelial**, **connective**, **muscular** and **nervous**.`,
    ],
    formal: [
      {
        title: "Histology",
        points: [
          t`Histology studies the structure and arrangement of tissues.`,
          t`Bichat is known as the 'Father of Histology'.`,
          t`Anatomy is internal structure in general; morphology is external form.`,
        ],
      },
      {
        title: "Tissues in organs",
        points: [
          t`Intestine lining and skin epidermis: **epithelial** tissue.`,
          t`Heart wall: **cardiac muscle**; dermis: **dense irregular connective tissue**.`,
          t`Nerve cord: **nervous tissue** of neurons and neuroglial cells.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the tissue in the heart wall and its basic type.`,
      steps: [
        t`The heart wall is the myocardium.`,
        t`The myocardium is cardiac muscle, a muscular tissue.`,
      ],
      answer: t`Cardiac muscle (muscular tissue)`,
    },
    visualSpec: t`Four boxes, epithelial, connective, muscular and nervous, each with an organ that shows it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks anatomy.",
      remediation: "Anatomy is internal structure in general.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks microbiology.",
      remediation: "That studies microorganisms.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks morphology.",
      remediation: "That studies external form.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks skeletal muscle.",
      remediation: "Skeletal muscle is attached to bones.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks smooth muscle.",
      remediation: "Smooth muscle lines visceral organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks nervous tissue.",
      remediation: "The heart wall is muscle.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks muscular tissue.",
      remediation: "Neurons make nervous tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks connective tissue.",
      remediation: "Neurons make nervous tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks epithelial tissue.",
      remediation: "Neurons make nervous tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks stratified epithelium.",
      remediation: "That is the epidermis above.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks adipose tissue.",
      remediation: "The fat layer lies below the skin.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks columnar epithelium.",
      remediation: "That lines the intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks bone.",
      remediation: "Bone is covered by periosteum.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks nerve cell.",
      remediation: "A nerve cell has a neurilemma.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks cartilage.",
      remediation: "Cartilage has a perichondrium.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q1(A)" },
      stem: t`The study of the structure and arrangement of tissues is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "histology" } },
      options: [
        { key: "A", text: t`histology`, correct: true, value: "histology_s" },
        { key: "B", text: t`anatomy`, correct: false, misconceptionId: "C01-M1", value: "anatomy_s" },
        { key: "C", text: t`microbiology`, correct: false, misconceptionId: "C01-M2", value: "microbiology_s" },
        { key: "D", text: t`morphology`, correct: false, misconceptionId: "C01-M3", value: "morphology_s" },
      ],
      solution: {
        steps: [
          t`Study of tissues.`,
          t`Histology.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(A)" },
      stem: t`The wall of the heart is made mainly of`,
      verify: { kind: "value", inputs: {  }, params: { q: "heart" } },
      options: [
        { key: "A", text: t`cardiac muscle`, correct: true, value: "cardiac_muscle" },
        { key: "B", text: t`skeletal muscle`, correct: false, misconceptionId: "C01-M4", value: "skeletal_muscle" },
        { key: "C", text: t`smooth muscle`, correct: false, misconceptionId: "C01-M5", value: "smooth_muscle" },
        { key: "D", text: t`nervous tissue`, correct: false, misconceptionId: "C01-M6", value: "nervous_tissue" },
      ],
      solution: {
        steps: [
          t`Myocardium.`,
          t`Cardiac muscle.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(A)" },
      stem: t`The nerve cord, made of neurons and neuroglial cells, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nerve_cord" } },
      options: [
        { key: "A", text: t`connective tissue`, correct: false, misconceptionId: "C01-M8", value: "connective_tissue" },
        { key: "B", text: t`epithelial tissue`, correct: false, misconceptionId: "C01-M9", value: "epithelial_tissue" },
        { key: "C", text: t`nervous tissue`, correct: true, value: "nervous_tissue" },
        { key: "D", text: t`muscular tissue`, correct: false, misconceptionId: "C01-M7", value: "muscular_tissue" },
      ],
      solution: {
        steps: [
          t`Neurons and neuroglia.`,
          t`Nervous tissue.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(A)" },
      stem: t`The dermis of the skin, below the epidermis, is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "dermis" } },
      options: [
        { key: "A", text: t`dense irregular connective tissue`, correct: true, value: "dense_irregular" },
        { key: "B", text: t`stratified epithelium`, correct: false, misconceptionId: "C01-M10", value: "stratified_epithelium" },
        { key: "C", text: t`adipose tissue`, correct: false, misconceptionId: "C01-M11", value: "adipose_tissue" },
        { key: "D", text: t`columnar epithelium`, correct: false, misconceptionId: "C01-M12", value: "columnar_epithelium" },
      ],
      solution: {
        steps: [
          t`Below the epidermis.`,
          t`Dense irregular connective tissue.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q5" },
      stem: t`The sarcolemma is the membrane that covers each`,
      verify: { kind: "value", inputs: {  }, params: { q: "sarcolemma" } },
      options: [
        { key: "A", text: t`muscle fibre`, correct: true, value: "muscle_fibre" },
        { key: "B", text: t`bone`, correct: false, misconceptionId: "C01-M13", value: "bone_t" },
        { key: "C", text: t`nerve cell`, correct: false, misconceptionId: "C01-M14", value: "nerve_cell" },
        { key: "D", text: t`cartilage`, correct: false, misconceptionId: "C01-M15", value: "cartilage_t" },
      ],
      solution: {
        steps: [
          t`Covers a muscle fibre.`,
          t`Muscle fibre.`,
        ],
      },
    },
  ],
};
