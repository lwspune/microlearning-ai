import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A human egg is released from an ovary but is fertilized in a tube and grows in another organ. Which parts do what?`,
    reveal: t`The ovary releases it, the ampulla of the oviduct is where it meets a sperm, and the uterus houses the growing embryo.`,
  },
  explanation: {
    intuition: [
      t`The **ovaries** are the primary female sex organs.`,
      t`They hold **follicles**, each with an oocyte.`,
      t`The **oviduct** (fallopian tube) catches the egg; fertilization happens in its **ampulla**.`,
      t`The **uterus**, or womb, holds the developing young.`,
    ],
    formal: [
      {
        title: "The organs",
        points: [
          t`Oviduct: infundibulum, ampulla, isthmus.`,
          t`Uterus wall: perimetrium, myometrium (muscle), **endometrium** (lining).`,
          t`The embryo implants in the endometrium.`,
          t`The cervix opens into the vagina.`,
        ],
      },
      {
        title: "The Graafian follicle",
        points: [
          t`A mature follicle with a fluid-filled **antrum**.`,
          t`**Theca externa**: an outer fibrous cover.`,
          t`**Theca interna**: an inner cellular layer that makes **estrogen**.`,
          t`The **corona radiata** surrounds the ovum.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which layer of the uterus contracts during childbirth?`,
      steps: [
        t`The uterus wall has three layers.`,
        t`The muscular one, the myometrium, contracts.`,
      ],
      answer: t`The myometrium`,
    },
    visualSpec: t`The female tract with the egg's path from ovary to uterus drawn on it.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks the ovary.",
      remediation: "The ovary makes eggs; the womb is the uterus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks the vagina.",
      remediation: "The vagina is the birth canal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks the oviduct.",
      remediation: "The oviduct carries the egg.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks the uterus.",
      remediation: "Fertilization is in the oviduct's ampulla.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks the isthmus.",
      remediation: "The isthmus is the narrow part next to the uterus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks the infundibulum.",
      remediation: "The infundibulum catches the egg; fertilization is in the ampulla.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks the myometrium.",
      remediation: "The myometrium is muscle; implantation is in the lining.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks the perimetrium.",
      remediation: "The perimetrium is the outer cover.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks the cervix.",
      remediation: "The cervix is the neck of the uterus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks the theca externa.",
      remediation: "The theca externa is fibrous; the theca interna makes estrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks the corona radiata.",
      remediation: "The corona radiata surrounds the ovum.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks the antrum.",
      remediation: "The antrum is a fluid-filled cavity.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks the uterus.",
      remediation: "The uterus is a secondary sex organ.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks the mammary glands.",
      remediation: "Mammary glands are accessory organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks the vagina.",
      remediation: "The vagina is a duct.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q3(2)" },
      stem: t`The organ also called the womb is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "womb" } },
      options: [
        { key: "A", text: t`vagina`, correct: false, misconceptionId: "C03-M2", value: "vagina" },
        { key: "B", text: t`oviduct`, correct: false, misconceptionId: "C03-M3", value: "oviduct" },
        { key: "C", text: t`uterus`, correct: true, value: "uterus" },
        { key: "D", text: t`ovary`, correct: false, misconceptionId: "C03-M1", value: "ovary" },
      ],
      solution: {
        steps: [
          t`The uterus holds the developing young.`,
          t`It is the womb.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q3(3)" },
      stem: t`Fertilization takes place in this part of the fallopian tube:`,
      verify: { kind: "value", inputs: {  }, params: { q: "ampulla" } },
      options: [
        { key: "A", text: t`isthmus`, correct: false, misconceptionId: "C03-M5", value: "isthmus" },
        { key: "B", text: t`infundibulum`, correct: false, misconceptionId: "C03-M6", value: "infundibulum" },
        { key: "C", text: t`ampulla`, correct: true, value: "ampulla" },
        { key: "D", text: t`uterus`, correct: false, misconceptionId: "C03-M4", value: "uterus" },
      ],
      solution: {
        steps: [
          t`The ampulla is the long middle part of the oviduct.`,
          t`Fertilization happens there.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q2(5)" },
      stem: t`The embryo implants in this layer of the uterus:`,
      verify: { kind: "value", inputs: {  }, params: { q: "implant" } },
      options: [
        { key: "A", text: t`myometrium`, correct: false, misconceptionId: "C03-M7", value: "myometrium" },
        { key: "B", text: t`perimetrium`, correct: false, misconceptionId: "C03-M8", value: "perimetrium" },
        { key: "C", text: t`cervix`, correct: false, misconceptionId: "C03-M9", value: "cervix" },
        { key: "D", text: t`endometrium`, correct: true, value: "endometrium" },
      ],
      solution: {
        steps: [
          t`The endometrium is the uterine lining.`,
          t`The embryo implants in it.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2025 Q. 16" },
      stem: t`The layer of a Graafian follicle that produces estrogen is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "theca" } },
      options: [
        { key: "A", text: t`corona radiata`, correct: false, misconceptionId: "C03-M11", value: "corona_radiata" },
        { key: "B", text: t`antrum`, correct: false, misconceptionId: "C03-M12", value: "antrum" },
        { key: "C", text: t`theca interna`, correct: true, value: "theca_interna" },
        { key: "D", text: t`theca externa`, correct: false, misconceptionId: "C03-M10", value: "theca_externa" },
      ],
      solution: {
        steps: [
          t`The theca interna is cellular.`,
          t`It produces estrogen.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q6(2)" },
      stem: t`The primary female sex organs are the`,
      verify: { kind: "value", inputs: {  }, params: { q: "primary" } },
      options: [
        { key: "A", text: t`ovaries`, correct: true, value: "ovaries" },
        { key: "B", text: t`uterus`, correct: false, misconceptionId: "C03-M13", value: "uterus" },
        { key: "C", text: t`mammary glands`, correct: false, misconceptionId: "C03-M14", value: "mammary_glands" },
        { key: "D", text: t`vagina`, correct: false, misconceptionId: "C03-M15", value: "vagina" },
      ],
      solution: {
        steps: [
          t`The ovaries make eggs and hormones.`,
          t`They are the primary female sex organs.`,
        ],
      },
    },
  ],
};
