import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A zygote divides again and again over several days, yet the ball of cells stays about the same size. How?`,
    reveal: t`In cleavage there is no growth between divisions, so the cells just get smaller.`,
  },
  explanation: {
    intuition: [
      t`**Cleavage**: rapid mitotic divisions of the zygote into **blastomeres**.`,
      t`They form a solid ball, the **morula**, then a hollow **blastocyst**.`,
      t`The blastocyst sinks into the uterine lining: **implantation**.`,
    ],
    formal: [
      {
        title: "The blastocyst",
        points: [
          t`Outer layer: the **trophoblast**, which forms the placenta.`,
          t`Inside: the **inner cell mass**, which forms the embryo.`,
          t`Trophoblast cells touching the inner cell mass: the **cells of Rauber**.`,
          t`A fluid-filled cavity, the blastocoel.`,
        ],
      },
      {
        title: "Implantation",
        points: [
          t`About day 7 after fertilization.`,
          t`Into the **endometrium**, usually in the fundus.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which part of the blastocyst helps form the placenta?`,
      steps: [
        t`The outer layer is the trophoblast.`,
        t`It forms the placenta.`,
      ],
      answer: t`The trophoblast`,
    },
    visualSpec: t`A zygote dividing into 2, 4, 8 cells, then a hollow blastocyst settling into the lining.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks fertilization.",
      remediation: "Fertilization is fusion of gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks gestation.",
      remediation: "Gestation is the whole pregnancy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks cleavage.",
      remediation: "Cleavage is early division.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks 30 days.",
      remediation: "Implantation starts about day 7.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks 60 days.",
      remediation: "By then the embryo is well formed.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks 21 days.",
      remediation: "Implantation is complete by day 10.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks the inner cell mass.",
      remediation: "The cells of Rauber are trophoblast cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks blastomeres.",
      remediation: "Blastomeres are cleavage cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks the morula.",
      remediation: "The morula is a solid ball.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks the cells grow.",
      remediation: "No growth between divisions, so they shrink.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks it is meiosis.",
      remediation: "Cleavage is mitotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the cells grow before dividing.",
      remediation: "Divisions follow each other without growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Says the placenta alone.",
      remediation: "The trophoblast forms the placenta.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Says the chorion alone.",
      remediation: "The chorion comes from the trophoblast.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Says it degenerates.",
      remediation: "The inner cell mass becomes the embryo.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(3)" },
      stem: t`Attachment of the embryo to the wall of the uterus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "implantation" } },
      options: [
        { key: "A", text: t`implantation`, correct: true, value: "implantation" },
        { key: "B", text: t`fertilization`, correct: false, misconceptionId: "C08-M1", value: "fertilization" },
        { key: "C", text: t`gestation`, correct: false, misconceptionId: "C08-M2", value: "gestation" },
        { key: "D", text: t`cleavage`, correct: false, misconceptionId: "C08-M3", value: "cleavage" },
      ],
      solution: {
        steps: [
          t`The embryo attaches to the uterine wall.`,
          t`Implantation.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(5)" },
      stem: t`In humans, the blastocyst begins to implant about how many days after fertilization?`,
      verify: { kind: "value", inputs: {  }, params: { q: "day" } },
      options: [
        { key: "A", text: t`30`, correct: false, misconceptionId: "C08-M4", value: "30" },
        { key: "B", text: t`60`, correct: false, misconceptionId: "C08-M5", value: "60" },
        { key: "C", text: t`21`, correct: false, misconceptionId: "C08-M6", value: "21" },
        { key: "D", text: t`7`, correct: true, value: "7" },
      ],
      solution: {
        steps: [
          t`The blastocyst floats for some days.`,
          t`It implants about day 7.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 2(ii)" },
      stem: t`The trophoblast cells in contact with the inner cell mass are the`,
      verify: { kind: "value", inputs: {  }, params: { q: "rauber" } },
      options: [
        { key: "A", text: t`inner cell mass`, correct: false, misconceptionId: "C08-M7", value: "inner_cell_mass" },
        { key: "B", text: t`blastomeres`, correct: false, misconceptionId: "C08-M8", value: "blastomeres" },
        { key: "C", text: t`morula`, correct: false, misconceptionId: "C08-M9", value: "morula" },
        { key: "D", text: t`cells of Rauber`, correct: true, value: "cells_of_rauber" },
      ],
      solution: {
        steps: [
          t`Trophoblast cells in contact with the inner cell mass.`,
          t`The cells of Rauber.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q6(4)" },
      stem: t`During cleavage, the blastomeres`,
      verify: { kind: "value", inputs: {  }, params: { q: "cleavage" } },
      options: [
        { key: "A", text: t`divide by meiosis`, correct: false, misconceptionId: "C08-M11", value: "meiosis" },
        { key: "B", text: t`grow before each division`, correct: false, misconceptionId: "C08-M12", value: "growth_between" },
        { key: "C", text: t`get smaller with each division, since there is no growth between`, correct: true, value: "smaller_cells" },
        { key: "D", text: t`get larger`, correct: false, misconceptionId: "C08-M10", value: "larger_cells" },
      ],
      solution: {
        steps: [
          t`No growth between divisions.`,
          t`The blastomeres get smaller.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(4)" },
      stem: t`The inner cell mass of the blastocyst develops into the`,
      verify: { kind: "value", inputs: {  }, params: { q: "inner" } },
      options: [
        { key: "A", text: t`nothing: it degenerates`, correct: false, misconceptionId: "C08-M15", value: "nothing" },
        { key: "B", text: t`embryo`, correct: true, value: "embryo" },
        { key: "C", text: t`placenta alone`, correct: false, misconceptionId: "C08-M13", value: "placenta_only" },
        { key: "D", text: t`chorion alone`, correct: false, misconceptionId: "C08-M14", value: "chorion_only" },
      ],
      solution: {
        steps: [
          t`The inner cell mass is the embryonal knob.`,
          t`It becomes the embryo.`,
        ],
      },
    },
  ],
};
