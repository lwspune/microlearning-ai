import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`You can fold your ear pinna and it springs back. Why can't you fold a bone?`,
    reveal: t`The pinna has elastic cartilage with elastic fibres; bone has a hard matrix.`,
  },
  explanation: {
    intuition: [
      t`**Cartilage** is firm but flexible.`,
      t`**Bone** is hard and rigid.`,
      t`Each is wrapped in its own fibrous sheath.`,
    ],
    formal: [
      {
        title: "Cartilage",
        points: [
          t`Matrix is **chondrin**; **chondrocytes** lie in lacunae.`,
          t`**Chondroblasts** are immature cells that mature into chondrocytes.`,
          t`**Elastic cartilage** has elastic fibres: the pinna bends; a **perichondrium** encloses the matrix.`,
        ],
      },
      {
        title: "Bone",
        points: [
          t`The hard matrix of bone is **ossein**.`,
          t`A tough **periosteum** encloses the bone.`,
          t`Long bones have **spongy bone** with **red bone marrow**, where blood cells form.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the sheaths around cartilage and bone.`,
      steps: [
        t`Cartilage matrix is delimited by the perichondrium.`,
        t`Bone is enclosed by the periosteum.`,
      ],
      answer: t`Perichondrium; periosteum`,
    },
    visualSpec: t`Two side-by-side panels: cartilage cells in lacunae within chondrin, and a long bone with spongy bone and marrow.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks ossein.",
      remediation: "Ossein is bone matrix.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks haemoglobin.",
      remediation: "It is the pigment of red cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks renin.",
      remediation: "Renin is a kidney enzyme.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks fine collagen.",
      remediation: "Those are hyaline; they do not fold.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks ossein.",
      remediation: "Ossein is rigid bone matrix.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks fat.",
      remediation: "Fat does not give spring.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says mature.",
      remediation: "Those are chondrocytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says heparin.",
      remediation: "Mast cells secrete heparin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says phagocytic.",
      remediation: "Macrophages are phagocytic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks periosteum.",
      remediation: "Periosteum encloses bone.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks sarcolemma.",
      remediation: "That covers muscle fibres.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks neurilemma.",
      remediation: "That covers myelin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks periosteum.",
      remediation: "It is only the outer covering.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks chondrin.",
      remediation: "Chondrin is cartilage matrix.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks tendon.",
      remediation: "Tendons join muscle to bone.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q1(D)" },
      stem: t`The protein found in cartilage is`,
      verify: { kind: "value", inputs: {  }, params: { q: "chondrin" } },
      options: [
        { key: "A", text: t`renin`, correct: false, misconceptionId: "C05-M3", value: "renin_p" },
        { key: "B", text: t`chondrin`, correct: true, value: "chondrin_p" },
        { key: "C", text: t`ossein`, correct: false, misconceptionId: "C05-M1", value: "ossein_p" },
        { key: "D", text: t`haemoglobin`, correct: false, misconceptionId: "C05-M2", value: "haemoglobin_p" },
      ],
      solution: {
        steps: [
          t`Cartilage matrix.`,
          t`Chondrin.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(C)" },
      stem: t`The ear pinna can be folded and twisted because its cartilage matrix has`,
      verify: { kind: "value", inputs: {  }, params: { q: "pinna" } },
      options: [
        { key: "A", text: t`only very fine collagen fibres`, correct: false, misconceptionId: "C05-M4", value: "fine_collagen" },
        { key: "B", text: t`ossein`, correct: false, misconceptionId: "C05-M5", value: "ossein_p" },
        { key: "C", text: t`fat droplets`, correct: false, misconceptionId: "C05-M6", value: "fat_droplets" },
        { key: "D", text: t`elastic fibres`, correct: true, value: "elastic_fibres" },
      ],
      solution: {
        steps: [
          t`Elastin is elastic.`,
          t`Elastic fibres.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q4" },
      stem: t`Chondroblasts are`,
      verify: { kind: "value", inputs: {  }, params: { q: "chondroblast" } },
      options: [
        { key: "A", text: t`immature cartilage-forming cells that mature into chondrocytes`, correct: true, value: "immature_chondrocyte" },
        { key: "B", text: t`mature cells lying in lacunae`, correct: false, misconceptionId: "C05-M7", value: "mature_lacuna" },
        { key: "C", text: t`cells that secrete heparin`, correct: false, misconceptionId: "C05-M8", value: "heparin_secreting" },
        { key: "D", text: t`phagocytic cells`, correct: false, misconceptionId: "C05-M9", value: "phagocytic_c" },
      ],
      solution: {
        steps: [
          t`Young cartilage cells.`,
          t`Mature into chondrocytes.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q5" },
      stem: t`The sheath of collagenous fibres that delimits the matrix of cartilage is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "perichondrium" } },
      options: [
        { key: "A", text: t`sarcolemma`, correct: false, misconceptionId: "C05-M11", value: "sarcolemma_s" },
        { key: "B", text: t`neurilemma`, correct: false, misconceptionId: "C05-M12", value: "neurilemma_s" },
        { key: "C", text: t`perichondrium`, correct: true, value: "perichondrium_s" },
        { key: "D", text: t`periosteum`, correct: false, misconceptionId: "C05-M10", value: "periosteum_s" },
      ],
      solution: {
        steps: [
          t`Cartilage sheath.`,
          t`Perichondrium.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(E)" },
      stem: t`Priya hurt a long bone and later had anaemia. The damaged part, where blood cells form, is most likely the`,
      verify: { kind: "value", inputs: {  }, params: { q: "marrow" } },
      options: [
        { key: "A", text: t`red bone marrow of spongy bone`, correct: true, value: "red_marrow" },
        { key: "B", text: t`periosteum`, correct: false, misconceptionId: "C05-M13", value: "periosteum_s" },
        { key: "C", text: t`chondrin matrix`, correct: false, misconceptionId: "C05-M14", value: "chondrin_p" },
        { key: "D", text: t`tendon`, correct: false, misconceptionId: "C05-M15", value: "tendon_t" },
      ],
      solution: {
        steps: [
          t`Spongy bone marrow.`,
          t`Red bone marrow.`,
        ],
      },
    },
  ],
};
