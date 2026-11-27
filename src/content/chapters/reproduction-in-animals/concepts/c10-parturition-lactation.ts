import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Who decides when a baby is born: the mother, or the baby?`,
    reveal: t`Largely the baby: the mature foetus releases ACTH and corticosteroids, which set off the hormones of labour.`,
  },
  explanation: {
    intuition: [
      t`**Parturition** is giving birth, about 9 months after conception.`,
      t`It is controlled by nerves and hormones together.`,
      t`**Lactation** is milk secretion by the mammary glands.`,
    ],
    formal: [
      {
        title: "Labour",
        points: [
          t`The mature foetus's ACTH and corticosteroids signal readiness.`,
          t`The estrogen–progesterone ratio rises.`,
          t`**Oxytocin** drives strong uterine contractions.`,
          t`**Relaxin** softens the pubic ligaments.`,
        ],
      },
      {
        title: "Milk",
        points: [
          t`**Prolactin** starts milk secretion.`,
          t`The first milk, **colostrum**, is yellow and rich in **IgA** antibodies.`,
          t`Colostrum protects the newborn against infection.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why are newborns fed colostrum soon after birth?`,
      steps: [
        t`Colostrum carries the mother's IgA antibodies.`,
        t`These protect the baby before its own immunity develops.`,
      ],
      answer: t`For its antibodies`,
    },
    visualSpec: t`A timeline from the foetus's signal to contractions and birth.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Credits the mother's choice.",
      remediation: "The foetus's hormones signal readiness.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Thinks the placenta bursts.",
      remediation: "The placenta is delivered after the baby.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks a fixed day triggers it.",
      remediation: "Hormones, not a calendar, start labour.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Picks progesterone.",
      remediation: "Progesterone calms the uterus; oxytocin contracts it.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Picks insulin.",
      remediation: "Insulin controls blood sugar.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Picks thyroxine.",
      remediation: "Thyroxine controls metabolism.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Calls it ordinary milk.",
      remediation: "The first milk is colostrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Calls it amniotic fluid.",
      remediation: "Amniotic fluid surrounds the foetus.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Calls it chyme.",
      remediation: "Chyme is food in the stomach.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Picks IgE.",
      remediation: "IgE acts in allergy; colostrum has IgA.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Picks IgM.",
      remediation: "Colostrum is rich in IgA.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Picks insulin.",
      remediation: "Insulin is a hormone, not an antibody.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Picks prolactin.",
      remediation: "Prolactin starts milk; relaxin loosens ligaments.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Picks thyroxine.",
      remediation: "Relaxin softens the ligaments.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Picks adrenaline.",
      remediation: "Relaxin softens the ligaments.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(2)" },
      stem: t`The signal that starts labour comes from`,
      verify: { kind: "value", inputs: {  }, params: { q: "signal" } },
      options: [
        { key: "A", text: t`the mother's choice`, correct: false, misconceptionId: "C10-M1", value: "mother_decides" },
        { key: "B", text: t`the placenta bursting`, correct: false, misconceptionId: "C10-M2", value: "placenta_bursts" },
        { key: "C", text: t`a fixed calendar day`, correct: false, misconceptionId: "C10-M3", value: "fixed_day" },
        { key: "D", text: t`the fully developed foetus (ACTH and corticosteroids)`, correct: true, value: "foetal_signal" },
      ],
      solution: {
        steps: [
          t`The mature foetus releases ACTH and corticosteroids.`,
          t`They signal labour.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(8)" },
      stem: t`The hormone that causes strong contractions of the uterus during labour is`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxytocin" } },
      options: [
        { key: "A", text: t`oxytocin`, correct: true, value: "oxytocin" },
        { key: "B", text: t`progesterone`, correct: false, misconceptionId: "C10-M4", value: "progesterone" },
        { key: "C", text: t`insulin`, correct: false, misconceptionId: "C10-M5", value: "insulin" },
        { key: "D", text: t`thyroxine`, correct: false, misconceptionId: "C10-M6", value: "thyroxine" },
      ],
      solution: {
        steps: [
          t`Oxytocin makes the uterus contract.`,
          t`It drives labour.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2026 Q. 2(vii)" },
      stem: t`The milk secreted by the mammary glands soon after childbirth is`,
      verify: { kind: "value", inputs: {  }, params: { q: "colostrum" } },
      options: [
        { key: "A", text: t`chyme`, correct: false, misconceptionId: "C10-M9", value: "chyme" },
        { key: "B", text: t`colostrum`, correct: true, value: "colostrum" },
        { key: "C", text: t`ordinary lactose-rich milk`, correct: false, misconceptionId: "C10-M7", value: "lactose_milk" },
        { key: "D", text: t`amniotic fluid`, correct: false, misconceptionId: "C10-M8", value: "amniotic_fluid" },
      ],
      solution: {
        steps: [
          t`The first milk after birth.`,
          t`Colostrum.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q4(7)" },
      stem: t`Colostrum protects the newborn because it carries the mother's antibodies of the type`,
      verify: { kind: "value", inputs: {  }, params: { q: "iga" } },
      options: [
        { key: "A", text: t`IgM`, correct: false, misconceptionId: "C10-M11", value: "igm" },
        { key: "B", text: t`insulin`, correct: false, misconceptionId: "C10-M12", value: "insulin_c" },
        { key: "C", text: t`IgA`, correct: true, value: "iga" },
        { key: "D", text: t`IgE`, correct: false, misconceptionId: "C10-M10", value: "ige" },
      ],
      solution: {
        steps: [
          t`Colostrum carries antibodies.`,
          t`Mainly IgA.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(8)" },
      stem: t`The hormone that softens the pubic ligaments for birth is`,
      verify: { kind: "value", inputs: {  }, params: { q: "relaxin" } },
      options: [
        { key: "A", text: t`relaxin`, correct: true, value: "relaxin" },
        { key: "B", text: t`prolactin`, correct: false, misconceptionId: "C10-M13", value: "prolactin" },
        { key: "C", text: t`thyroxine`, correct: false, misconceptionId: "C10-M14", value: "thyroxine" },
        { key: "D", text: t`adrenaline`, correct: false, misconceptionId: "C10-M15", value: "adrenaline" },
      ],
      solution: {
        steps: [
          t`Relaxin acts at birth.`,
          t`It softens the pubic ligaments.`,
        ],
      },
    },
  ],
};
