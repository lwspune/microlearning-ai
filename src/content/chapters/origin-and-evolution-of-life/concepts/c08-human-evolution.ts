import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Our ancestors' skulls held smaller brains than ours. How did brain size change on the way to modern humans?`,
    reveal: t`It grew: from about 450–600 cc in *Australopithecus* to about 1450 cc in *Homo sapiens*.`,
  },
  explanation: {
    intuition: [
      t`Humans are primates, related to the apes.`,
      t`Apes are tailless, with no chin and long arms.`,
      t`Fossils trace human ancestors by brain size and posture.`,
    ],
    formal: [
      {
        title: "The stages",
        points: [
          t`***Australopithecus***: 450–600 cc, upright; the 'man with ape brain', linking ape and man.`,
          t`***Homo habilis***: the handy man, using tools.`,
          t`***Homo erectus***: about 900 cc, erect.`,
          t`**Neanderthal man**: about 1400 cc.`,
          t`***Homo sapiens***: about 1450 cc, modern man.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which ancestor first used tools regularly?`,
      steps: [
        t`*Homo habilis* means 'handy man'.`,
        t`It made simple stone tools.`,
      ],
      answer: t`*Homo habilis*`,
    },
    visualSpec: t`Skulls in a row, their brain cases growing from left to right.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Gives 900.",
      remediation: "900 cc is *Homo erectus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Gives 1450.",
      remediation: "1450 cc is *Homo sapiens*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Gives 600.",
      remediation: "600 cc is *Australopithecus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks *Homo habilis*.",
      remediation: "*Homo habilis* came after the link.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks *Homo erectus*.",
      remediation: "*Homo erectus* was already human-like.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks Neanderthal man.",
      remediation: "Neanderthals were close to us.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks a prognathous face.",
      remediation: "Apes do have a projecting face.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks no chin.",
      remediation: "Apes do lack a chin.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks long forelimbs.",
      remediation: "Apes do have long arms.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Reverses the order.",
      remediation: "Brain size grew over time.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Puts *erectus* before *Australopithecus*.",
      remediation: "*Australopithecus* was smallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Puts Neanderthal before *erectus*.",
      remediation: "*Erectus* (900) < Neanderthal (1400).",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks *Homo erectus*.",
      remediation: "*Homo erectus* is extinct.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks *Homo habilis*.",
      remediation: "*Homo habilis* is extinct.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks *Australopithecus*.",
      remediation: "*Australopithecus* is extinct.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2026 Q. 1(iii)" },
      stem: t`The cranial capacity of Neanderthal man was about (in cc)`,
      verify: { kind: "value", inputs: {  }, params: { q: "neanderthal" } },
      options: [
        { key: "A", text: t`1400`, correct: true, value: "1400" },
        { key: "B", text: t`900`, correct: false, misconceptionId: "C08-M1", value: "900" },
        { key: "C", text: t`1450`, correct: false, misconceptionId: "C08-M2", value: "1450" },
        { key: "D", text: t`600`, correct: false, misconceptionId: "C08-M3", value: "600" },
      ],
      solution: {
        steps: [
          t`Neanderthals had large brains.`,
          t`About 1400 cc.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(9)" },
      stem: t`The connecting link between ape and man is`,
      verify: { kind: "value", inputs: {  }, params: { q: "link" } },
      options: [
        { key: "A", text: t`*Homo habilis*`, correct: false, misconceptionId: "C08-M4", value: "homo_habilis" },
        { key: "B", text: t`*Homo erectus*`, correct: false, misconceptionId: "C08-M5", value: "homo_erectus" },
        { key: "C", text: t`Neanderthal man`, correct: false, misconceptionId: "C08-M6", value: "neanderthal" },
        { key: "D", text: t`*Australopithecus*`, correct: true, value: "australopithecus" },
      ],
      solution: {
        steps: [
          t`Upright but with an ape-sized brain.`,
          t`*Australopithecus*.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(8)" },
      stem: t`Which feature is not shown by apes?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ape" } },
      options: [
        { key: "A", text: t`a projecting (prognathous) face`, correct: false, misconceptionId: "C08-M7", value: "prognathous_face" },
        { key: "B", text: t`no chin`, correct: false, misconceptionId: "C08-M8", value: "no_chin" },
        { key: "C", text: t`forelimbs longer than hind limbs`, correct: false, misconceptionId: "C08-M9", value: "long_forelimbs" },
        { key: "D", text: t`a tail`, correct: true, value: "tail_present" },
      ],
      solution: {
        steps: [
          t`Apes are tailless.`,
          t`A tail is not shown.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2024 Q. 5" },
      stem: t`In order of increasing cranial capacity:`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`*Homo erectus*, *Australopithecus*, Neanderthal man, *Homo sapiens*`, correct: false, misconceptionId: "C08-M11", value: "ere_aus_nea_sap" },
        { key: "B", text: t`*Australopithecus*, Neanderthal man, *Homo erectus*, *Homo sapiens*`, correct: false, misconceptionId: "C08-M12", value: "aus_nea_ere_sap" },
        { key: "C", text: t`*Australopithecus*, *Homo erectus*, Neanderthal man, *Homo sapiens*`, correct: true, value: "aus_ere_nea_sap" },
        { key: "D", text: t`*Homo sapiens*, Neanderthal man, *Homo erectus*, *Australopithecus*`, correct: false, misconceptionId: "C08-M10", value: "sap_nea_ere_aus" },
      ],
      solution: {
        steps: [
          t`450–600, 900, 1400, 1450 cc.`,
          t`*Australopithecus*, *erectus*, Neanderthal, *sapiens*.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(7)" },
      stem: t`The scientific name of modern man is`,
      verify: { kind: "value", inputs: {  }, params: { q: "modern" } },
      options: [
        { key: "A", text: t`*Australopithecus*`, correct: false, misconceptionId: "C08-M15", value: "australopithecus" },
        { key: "B", text: t`*Homo sapiens*`, correct: true, value: "homo_sapiens" },
        { key: "C", text: t`*Homo erectus*`, correct: false, misconceptionId: "C08-M13", value: "homo_erectus" },
        { key: "D", text: t`*Homo habilis*`, correct: false, misconceptionId: "C08-M14", value: "homo_habilis" },
      ],
      solution: {
        steps: [
          t`Modern man.`,
          t`*Homo sapiens*.`,
        ],
      },
    },
  ],
};
