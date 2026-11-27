import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Why does a woman's body prepare the uterine lining every month, and then shed it?`,
    reveal: t`Each cycle readies the uterus for an embryo; if no egg is fertilized, the hormones fall and the lining is shed.`,
  },
  explanation: {
    intuition: [
      t`The **menstrual cycle** repeats about every 28 days.`,
      t`It is run by pituitary hormones (FSH, LH) and ovarian hormones.`,
      t`Its aim: release an egg and prepare the uterus to receive an embryo.`,
    ],
    formal: [
      {
        title: "Phases",
        points: [
          t`**Menstrual** (days 1–5): the lining is shed.`,
          t`**Proliferative** (follicular): estrogen rebuilds the lining.`,
          t`**Ovulation** (day 14): an **LH surge** ruptures the Graafian follicle.`,
          t`**Secretory** (luteal, days 15–28): the **corpus luteum** makes progesterone.`,
          t`No fertilization: the corpus luteum becomes the **corpus albicans**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which hormone keeps the uterine lining ready after ovulation?`,
      steps: [
        t`After ovulation the corpus luteum forms.`,
        t`It secretes progesterone.`,
      ],
      answer: t`Progesterone`,
    },
    visualSpec: t`A 28-day dial with the hormone levels rising and falling around it.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks day 1.",
      remediation: "Day 1 starts menstruation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks day 28.",
      remediation: "Day 28 ends the cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks day 5.",
      remediation: "Day 5 ends menstruation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks a fall in FSH.",
      remediation: "Ovulation follows a surge of LH.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks progesterone.",
      remediation: "Progesterone rises after ovulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks a fall in estrogen.",
      remediation: "Estrogen peaks before ovulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks the tunica albuginea.",
      remediation: "That covers the testis or ovary.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks the membrana granulosa.",
      remediation: "That lines the follicle.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks the zona pellucida.",
      remediation: "That surrounds the egg.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks FSH.",
      remediation: "FSH acts before ovulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks testosterone.",
      remediation: "Testosterone is male.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks oxytocin.",
      remediation: "Oxytocin acts at birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks capacitation.",
      remediation: "Capacitation readies sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks gestation.",
      remediation: "Gestation is pregnancy.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks copulation.",
      remediation: "Copulation is mating.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(1)" },
      stem: t`In a 28-day menstrual cycle, ovulation happens on about day`,
      verify: { kind: "value", inputs: {  }, params: { q: "day" } },
      options: [
        { key: "A", text: t`1`, correct: false, misconceptionId: "C06-M1", value: "1" },
        { key: "B", text: t`28`, correct: false, misconceptionId: "C06-M2", value: "28" },
        { key: "C", text: t`5`, correct: false, misconceptionId: "C06-M3", value: "5" },
        { key: "D", text: t`14`, correct: true, value: "14" },
      ],
      solution: {
        steps: [
          t`Ovulation is mid-cycle.`,
          t`About day 14.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(1)" },
      stem: t`Ovulation is triggered by`,
      verify: { kind: "value", inputs: {  }, params: { q: "lh" } },
      options: [
        { key: "A", text: t`a surge of LH`, correct: true, value: "lh_surge" },
        { key: "B", text: t`a fall in FSH`, correct: false, misconceptionId: "C06-M4", value: "fsh_fall" },
        { key: "C", text: t`a surge of progesterone`, correct: false, misconceptionId: "C06-M5", value: "progesterone_surge" },
        { key: "D", text: t`a fall in estrogen`, correct: false, misconceptionId: "C06-M6", value: "estrogen_fall" },
      ],
      solution: {
        steps: [
          t`LH rises sharply mid-cycle.`,
          t`The surge ruptures the follicle.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 1(iii)" },
      stem: t`If fertilization does not happen, the corpus luteum degenerates into the`,
      verify: { kind: "value", inputs: {  }, params: { q: "albicans" } },
      options: [
        { key: "A", text: t`corpus albicans`, correct: true, value: "corpus_albicans" },
        { key: "B", text: t`tunica albuginea`, correct: false, misconceptionId: "C06-M7", value: "tunica_albuginea" },
        { key: "C", text: t`membrana granulosa`, correct: false, misconceptionId: "C06-M8", value: "membrana_granulosa" },
        { key: "D", text: t`zona pellucida`, correct: false, misconceptionId: "C06-M9", value: "zona_pellucida" },
      ],
      solution: {
        steps: [
          t`Without fertilization the corpus luteum degenerates.`,
          t`It becomes the corpus albicans.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2026 Q. 24" },
      stem: t`In the secretory (luteal) phase, the corpus luteum mainly secretes`,
      verify: { kind: "value", inputs: {  }, params: { q: "luteal" } },
      options: [
        { key: "A", text: t`oxytocin`, correct: false, misconceptionId: "C06-M12", value: "oxytocin" },
        { key: "B", text: t`progesterone`, correct: true, value: "progesterone" },
        { key: "C", text: t`FSH`, correct: false, misconceptionId: "C06-M10", value: "fsh" },
        { key: "D", text: t`testosterone`, correct: false, misconceptionId: "C06-M11", value: "testosterone" },
      ],
      solution: {
        steps: [
          t`The corpus luteum forms after ovulation.`,
          t`It secretes progesterone.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(4)" },
      stem: t`The rupture of a follicle and release of the ovum is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ovulation" } },
      options: [
        { key: "A", text: t`ovulation`, correct: true, value: "ovulation" },
        { key: "B", text: t`capacitation`, correct: false, misconceptionId: "C06-M13", value: "capacitation" },
        { key: "C", text: t`gestation`, correct: false, misconceptionId: "C06-M14", value: "gestation" },
        { key: "D", text: t`copulation`, correct: false, misconceptionId: "C06-M15", value: "copulation" },
      ],
      solution: {
        steps: [
          t`The follicle ruptures and releases the ovum.`,
          t`This is ovulation.`,
        ],
      },
    },
  ],
};
