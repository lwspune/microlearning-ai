import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A sea squirt sits on a rock like a blob, yet it is closer to you than to a starfish. How?`,
    reveal: t`Its larva has a notochord and a dorsal nerve cord: the hallmarks of chordates.`,
  },
  explanation: {
    intuition: [
      t`**Chordates** share three features.`,
      t`A **notochord**, a **dorsal hollow nerve cord**, and **pharyngeal gill slits**.`,
      t`**Protochordates** are chordates without a backbone.`,
    ],
    formal: [
      {
        title: "Protochordates",
        points: [
          t`**Urochordata** (tunicates, *Herdmania*): notochord only in the **larval tail**.`,
          t`**Cephalochordata** (*Amphioxus*): notochord from **head to tail, throughout life**.`,
          t`Both are marine.`,
        ],
      },
      {
        title: "Hemichordata",
        points: [
          t`***Balanoglossus***: worm-like, with **proboscis, collar and trunk**.`,
          t`Grouped as a non-chordate phylum.`,
          t`It has gill slits but no true notochord.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is *Amphioxus* placed in Chordata though it has no backbone?`,
      steps: [
        t`It has a notochord, a dorsal nerve cord and gill slits.`,
        t`Those define chordates.`,
      ],
      answer: t`It has all three chordate features`,
    },
    visualSpec: t`Amphioxus with its notochord, dorsal nerve cord and gill slits labelled.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks Cephalochordata.",
      remediation: "That is *Amphioxus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks Vertebrata.",
      remediation: "Tunicates have no backbone.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks Hemichordata.",
      remediation: "That is *Balanoglossus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks Urochordata.",
      remediation: "That is tunicates.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks Cyclostomata.",
      remediation: "Cyclostomes are vertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks Hemichordata.",
      remediation: "That is *Balanoglossus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says whole life.",
      remediation: "That is cephalochordates.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says head only.",
      remediation: "It is in the tail.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says never.",
      remediation: "The larva has it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says larval tail.",
      remediation: "That is urochordates.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says absent.",
      remediation: "It is present all life.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says replaced by vertebrae.",
      remediation: "That is vertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks Annelida.",
      remediation: "It is not segmented.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks Urochordata.",
      remediation: "It is worm-like.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks Cephalochordata.",
      remediation: "It has a proboscis.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q5(G)" },
      stem: t`*Herdmania*, a sac-like tunicate with two siphons, belongs to`,
      verify: { kind: "value", inputs: {  }, params: { q: "herdmania" } },
      options: [
        { key: "A", text: t`Vertebrata`, correct: false, misconceptionId: "C04-M2", value: "vertebrata_s" },
        { key: "B", text: t`Hemichordata`, correct: false, misconceptionId: "C04-M3", value: "hemichordata_p" },
        { key: "C", text: t`Urochordata`, correct: true, value: "urochordata_s" },
        { key: "D", text: t`Cephalochordata`, correct: false, misconceptionId: "C04-M1", value: "cephalochordata_s" },
      ],
      solution: {
        steps: [
          t`Tunicate.`,
          t`Urochordata.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q5(I)" },
      stem: t`*Amphioxus*, the lancelet, belongs to`,
      verify: { kind: "value", inputs: {  }, params: { q: "amphioxus" } },
      options: [
        { key: "A", text: t`Urochordata`, correct: false, misconceptionId: "C04-M4", value: "urochordata_s" },
        { key: "B", text: t`Cyclostomata`, correct: false, misconceptionId: "C04-M5", value: "cyclostomata_s" },
        { key: "C", text: t`Hemichordata`, correct: false, misconceptionId: "C04-M6", value: "hemichordata_p" },
        { key: "D", text: t`Cephalochordata`, correct: true, value: "cephalochordata_s" },
      ],
      solution: {
        steps: [
          t`Lancelet.`,
          t`Cephalochordata.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(J)" },
      stem: t`In urochordates, the notochord is present`,
      verify: { kind: "value", inputs: {  }, params: { q: "uro_notochord" } },
      options: [
        { key: "A", text: t`only in the head`, correct: false, misconceptionId: "C04-M8", value: "head_only" },
        { key: "B", text: t`never`, correct: false, misconceptionId: "C04-M9", value: "never_n" },
        { key: "C", text: t`only in the tail of the larva`, correct: true, value: "larval_tail" },
        { key: "D", text: t`throughout life`, correct: false, misconceptionId: "C04-M7", value: "whole_life" },
      ],
      solution: {
        steps: [
          t`Larva only.`,
          t`Only in the larval tail.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q3(C)" },
      stem: t`In cephalochordates, the notochord`,
      verify: { kind: "value", inputs: {  }, params: { q: "cephalo_notochord" } },
      options: [
        { key: "A", text: t`is only in the larval tail`, correct: false, misconceptionId: "C04-M10", value: "larval_tail" },
        { key: "B", text: t`is absent`, correct: false, misconceptionId: "C04-M11", value: "absent_n" },
        { key: "C", text: t`is replaced by vertebrae`, correct: false, misconceptionId: "C04-M12", value: "vertebrae_replace" },
        { key: "D", text: t`runs from head to tail throughout life`, correct: true, value: "head_to_tail_life" },
      ],
      solution: {
        steps: [
          t`All life, full length.`,
          t`Head to tail throughout life.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q3(E)" },
      stem: t`*Balanoglossus*, a worm-like animal with proboscis, collar and trunk, belongs to`,
      verify: { kind: "value", inputs: {  }, params: { q: "balanoglossus" } },
      options: [
        { key: "A", text: t`Cephalochordata`, correct: false, misconceptionId: "C04-M15", value: "cephalochordata_s" },
        { key: "B", text: t`Hemichordata`, correct: true, value: "hemichordata_p" },
        { key: "C", text: t`Annelida`, correct: false, misconceptionId: "C04-M13", value: "annelida_p" },
        { key: "D", text: t`Urochordata`, correct: false, misconceptionId: "C04-M14", value: "urochordata_s" },
      ],
      solution: {
        steps: [
          t`Proboscis, collar, trunk.`,
          t`Hemichordata.`,
        ],
      },
    },
  ],
};
