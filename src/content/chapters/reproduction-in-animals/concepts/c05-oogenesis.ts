import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A man's meiosis makes four sperms, but a woman's meiosis makes just one egg. Where do the other three cells go?`,
    reveal: t`They become tiny polar bodies that degenerate, so the egg keeps nearly all the cytoplasm.`,
  },
  explanation: {
    intuition: [
      t`**Oogenesis** makes eggs in the ovary.`,
      t`It begins before birth: primary oocytes form in the foetus.`,
      t`Each meiosis gives one large egg and small **polar bodies**.`,
    ],
    formal: [
      {
        title: "Stages",
        points: [
          t`**Oogonia** (2n) form **primary oocytes** (2n) before birth.`,
          t`Primary oocytes stay arrested in **prophase I** until puberty.`,
          t`Meiosis I, just before ovulation: a **secondary oocyte** and the first polar body.`,
          t`The secondary oocyte is released; meiosis II finishes only if a sperm enters.`,
          t`So one primary oocyte gives one ovum.`,
        ],
      },
      {
        title: "Its coverings",
        points: [
          t`The **zona pellucida**: a thick, non-cellular layer.`,
          t`The **corona radiata**: follicle cells around it.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many polar bodies can one primary oocyte give in all?`,
      steps: [
        t`Meiosis I gives one; it may divide again into two.`,
        t`Meiosis II gives one more.`,
      ],
      answer: t`Up to three`,
    },
    visualSpec: t`An oocyte dividing unequally, a big cell and tiny polar bodies at each step.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Gives four ova.",
      remediation: "Only one of the four meiotic products becomes an ovum.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives two.",
      remediation: "One ovum per primary oocyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Gives three.",
      remediation: "Three are polar bodies, not ova.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks metaphase II.",
      remediation: "The secondary oocyte waits in metaphase II; primary oocytes wait in prophase I.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks interphase.",
      remediation: "Meiosis has begun; it stops in prophase I.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks anaphase I.",
      remediation: "The arrest is in prophase I.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks a mature ovum.",
      remediation: "Meiosis II is not finished at ovulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks a primary oocyte.",
      remediation: "Meiosis I finishes just before ovulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks an oogonium.",
      remediation: "Oogonia stay in the ovary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks the corona radiata.",
      remediation: "The corona radiata is cellular; the zona pellucida is not.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks the theca externa.",
      remediation: "The theca externa covers the follicle.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks the vitelline layer.",
      remediation: "The thick layer of the human egg is the zona pellucida.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks the divisions are equal.",
      remediation: "They are unequal, so polar bodies form.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks they are mitotic.",
      remediation: "Oogenesis is meiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Thinks the cytoplasm doesn't divide.",
      remediation: "It divides, but unequally.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "authored" },
      stem: t`How many ova do 50 primary oocytes produce?`,
      verify: { kind: "value", inputs: { p: "50" }, params: { q: "count" } },
      options: [
        { key: "A", text: t`$150$`, correct: false, misconceptionId: "C05-M3", value: "150" },
        { key: "B", text: t`$50$`, correct: true, value: "50" },
        { key: "C", text: t`$200$`, correct: false, misconceptionId: "C05-M1", value: "200" },
        { key: "D", text: t`$100$`, correct: false, misconceptionId: "C05-M2", value: "100" },
      ],
      solution: {
        steps: [
          t`Each primary oocyte gives one ovum.`,
          t`50 ova.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`Before puberty, primary oocytes stay arrested in`,
      verify: { kind: "value", inputs: {  }, params: { q: "arrest" } },
      options: [
        { key: "A", text: t`metaphase II`, correct: false, misconceptionId: "C05-M4", value: "metaphase_two" },
        { key: "B", text: t`interphase`, correct: false, misconceptionId: "C05-M5", value: "interphase" },
        { key: "C", text: t`anaphase I`, correct: false, misconceptionId: "C05-M6", value: "anaphase_one" },
        { key: "D", text: t`prophase I`, correct: true, value: "prophase_one" },
      ],
      solution: {
        steps: [
          t`Primary oocytes begin meiosis before birth.`,
          t`They stop in prophase I.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(4)" },
      stem: t`At ovulation, the cell released from the ovary is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "released" } },
      options: [
        { key: "A", text: t`secondary oocyte`, correct: true, value: "secondary_oocyte" },
        { key: "B", text: t`mature ovum`, correct: false, misconceptionId: "C05-M7", value: "mature_ovum" },
        { key: "C", text: t`primary oocyte`, correct: false, misconceptionId: "C05-M8", value: "primary_oocyte" },
        { key: "D", text: t`oogonium`, correct: false, misconceptionId: "C05-M9", value: "oogonium" },
      ],
      solution: {
        steps: [
          t`Meiosis I finishes before ovulation.`,
          t`A secondary oocyte is released.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 10" },
      stem: t`The thick, non-cellular layer around the ovum, which sperms must cross, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "zona" } },
      options: [
        { key: "A", text: t`theca externa`, correct: false, misconceptionId: "C05-M11", value: "theca_externa" },
        { key: "B", text: t`vitelline layer`, correct: false, misconceptionId: "C05-M12", value: "vitelline_layer" },
        { key: "C", text: t`zona pellucida`, correct: true, value: "zona_pellucida" },
        { key: "D", text: t`corona radiata`, correct: false, misconceptionId: "C05-M10", value: "corona_radiata" },
      ],
      solution: {
        steps: [
          t`The thick non-cellular layer is the zona pellucida.`,
          t`Sperms must cross it.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`Polar bodies form during oogenesis because the meiotic divisions are`,
      verify: { kind: "value", inputs: {  }, params: { q: "polar" } },
      options: [
        { key: "A", text: t`unequal: one cell keeps nearly all the cytoplasm`, correct: true, value: "unequal_division" },
        { key: "B", text: t`equal`, correct: false, misconceptionId: "C05-M13", value: "equal_division" },
        { key: "C", text: t`mitotic`, correct: false, misconceptionId: "C05-M14", value: "mitosis" },
        { key: "D", text: t`without cytoplasmic division`, correct: false, misconceptionId: "C05-M15", value: "no_cytokinesis" },
      ],
      solution: {
        steps: [
          t`One cell keeps most of the cytoplasm.`,
          t`The small cells are polar bodies.`,
        ],
      },
    },
  ],
};
