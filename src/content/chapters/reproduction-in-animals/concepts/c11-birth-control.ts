import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`A couple wants no more children, permanently. What surgery can each of them have?`,
    reveal: t`The man can have a vasectomy (vas deferens tied and cut), the woman a tubectomy (fallopian tubes tied and cut).`,
  },
  explanation: {
    intuition: [
      t`**Reproductive health** covers the physical, emotional and social sides of reproduction.`,
      t`The **RCH programme** builds awareness and care.`,
      t`**Contraceptives** prevent pregnancy: temporary or permanent.`,
    ],
    formal: [
      {
        title: "Temporary methods",
        points: [
          t`Natural: avoiding intercourse around ovulation (the rhythm method).`,
          t`Barrier: **condoms** stop sperms reaching the egg.`,
          t`**IUDs** such as Copper-T in the uterus.`,
          t`**Oral pills** of hormones stop ovulation.`,
        ],
      },
      {
        title: "Permanent methods",
        points: [
          t`**Vasectomy**: the vas deferens is tied and cut.`,
          t`**Tubectomy**: the fallopian tubes are tied and cut.`,
        ],
      },
    ],
    worked: {
      prompt: t`How does a Copper-T prevent pregnancy?`,
      steps: [
        t`It sits in the uterus.`,
        t`Its copper ions reduce sperm movement and fertilizing power.`,
      ],
      answer: t`It hinders sperms and fertilization`,
    },
    visualSpec: t`A table of methods sorted by how they block sperm, egg or implantation.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Picks vasectomy.",
      remediation: "Vasectomy is the male operation.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Picks an IUD.",
      remediation: "An IUD is temporary.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Picks a condom.",
      remediation: "A condom is temporary.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Picks the fallopian tube.",
      remediation: "That is tubectomy, in women.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Picks the urethra.",
      remediation: "The urethra is never cut.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Picks the epididymis.",
      remediation: "The vas deferens is cut.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Picks the oral pill.",
      remediation: "Pills are hormonal.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Picks Copper-T.",
      remediation: "Copper-T is an IUD.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Picks the rhythm method.",
      remediation: "That is natural.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Thinks the pill kills sperms.",
      remediation: "Pills stop ovulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Thinks it blocks the tubes.",
      remediation: "That is tubectomy.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Thinks it is a barrier.",
      remediation: "Pills are hormonal.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Says contraception only.",
      remediation: "RCH covers awareness and health care widely.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Says abortion only.",
      remediation: "RCH aims at health, not just abortion.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: "Says census only.",
      remediation: "RCH is about health.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2025 Q. 2(vii)" },
      stem: t`The permanent birth control method in which the fallopian tube is tied and cut is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tubectomy" } },
      options: [
        { key: "A", text: t`tubectomy`, correct: true, value: "tubectomy" },
        { key: "B", text: t`vasectomy`, correct: false, misconceptionId: "C11-M1", value: "vasectomy" },
        { key: "C", text: t`an IUD`, correct: false, misconceptionId: "C11-M2", value: "iud" },
        { key: "D", text: t`a condom`, correct: false, misconceptionId: "C11-M3", value: "condom" },
      ],
      solution: {
        steps: [
          t`The fallopian tube is tied and cut.`,
          t`Tubectomy.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(6)" },
      stem: t`In vasectomy, the tube that is tied and cut is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "vasectomy" } },
      options: [
        { key: "A", text: t`urethra`, correct: false, misconceptionId: "C11-M5", value: "urethra" },
        { key: "B", text: t`epididymis`, correct: false, misconceptionId: "C11-M6", value: "epididymis" },
        { key: "C", text: t`vas deferens`, correct: true, value: "vas_deferens" },
        { key: "D", text: t`fallopian tube`, correct: false, misconceptionId: "C11-M4", value: "fallopian_tube" },
      ],
      solution: {
        steps: [
          t`Vasectomy is the male operation.`,
          t`The vas deferens is cut.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q4(4)" },
      stem: t`A barrier (mechanical) contraceptive is`,
      verify: { kind: "value", inputs: {  }, params: { q: "barrier" } },
      options: [
        { key: "A", text: t`an oral pill`, correct: false, misconceptionId: "C11-M7", value: "oral_pill" },
        { key: "B", text: t`a Copper-T`, correct: false, misconceptionId: "C11-M8", value: "copper_t" },
        { key: "C", text: t`the rhythm method`, correct: false, misconceptionId: "C11-M9", value: "rhythm" },
        { key: "D", text: t`a condom`, correct: true, value: "condom" },
      ],
      solution: {
        steps: [
          t`A condom physically blocks sperms.`,
          t`It is a barrier method.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(6)" },
      stem: t`Oral contraceptive pills mainly work by`,
      verify: { kind: "value", inputs: {  }, params: { q: "pill" } },
      options: [
        { key: "A", text: t`blocking the fallopian tubes`, correct: false, misconceptionId: "C11-M11", value: "blocks_tube" },
        { key: "B", text: t`forming a barrier`, correct: false, misconceptionId: "C11-M12", value: "barrier" },
        { key: "C", text: t`stopping ovulation`, correct: true, value: "blocks_ovulation" },
        { key: "D", text: t`killing sperms`, correct: false, misconceptionId: "C11-M10", value: "kills_sperm" },
      ],
      solution: {
        steps: [
          t`Pills contain hormones.`,
          t`They stop ovulation.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(7)" },
      stem: t`The RCH programme aims to`,
      verify: { kind: "value", inputs: {  }, params: { q: "rch" } },
      options: [
        { key: "A", text: t`provide contraceptives only`, correct: false, misconceptionId: "C11-M13", value: "only_contraception" },
        { key: "B", text: t`provide abortions only`, correct: false, misconceptionId: "C11-M14", value: "only_abortion" },
        { key: "C", text: t`count the population only`, correct: false, misconceptionId: "C11-M15", value: "only_census" },
        { key: "D", text: t`build awareness and care for reproductive and child health`, correct: true, value: "awareness_care" },
      ],
      solution: {
        steps: [
          t`RCH aims at awareness and care.`,
          t`For reproductive and child health.`,
        ],
      },
    },
  ],
};
