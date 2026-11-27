import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A pregnancy test works by detecting a hormone in urine. What makes that hormone, and why so early?`,
    reveal: t`The young placenta makes hCG within days of implantation; it keeps the corpus luteum working.`,
  },
  explanation: {
    intuition: [
      t`**Gastrulation** turns the embryo's cells into three **germ layers**.`,
      t`The young is an **embryo** for 8 weeks, then a **foetus**.`,
      t`The **placenta** links mother and foetus for the whole pregnancy.`,
    ],
    formal: [
      {
        title: "Development",
        points: [
          t`Blastula: a hollow ball. Gastrula: three germ layers.`,
          t`Ectoderm, mesoderm and endoderm form all the organs.`,
          t`A zygote is one diploid cell; an embryo has many.`,
        ],
      },
      {
        title: "The placenta",
        points: [
          t`A disc-like organ joining foetal and maternal blood.`,
          t`It passes food, oxygen and antibodies; removes wastes.`,
          t`It makes hormones: **hCG**, estrogen and progesterone.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why can't mother's and foetus's blood mix in the placenta?`,
      steps: [
        t`The two circulations are separate.`,
        t`Substances cross by diffusion through thin layers.`,
      ],
      answer: t`They are kept separate; only substances cross`,
    },
    visualSpec: t`A cross-section of the placenta with arrows of food, oxygen and wastes.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Says at birth.",
      remediation: "Before birth the young is already a foetus.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Says at implantation.",
      remediation: "At implantation it is a blastocyst.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Says at fertilization.",
      remediation: "That gives a zygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Picks the umbilical cord.",
      remediation: "The cord only connects; the placenta exchanges.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Picks the amnion.",
      remediation: "The amnion holds fluid around the foetus.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Picks the yolk sac.",
      remediation: "The human yolk sac is small and early.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Picks FSH.",
      remediation: "FSH comes from the pituitary.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Picks oxytocin.",
      remediation: "Oxytocin acts at birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Picks testosterone.",
      remediation: "Testosterone is male.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Calls it a hollow ball.",
      remediation: "That is the blastula.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Calls it a solid ball.",
      remediation: "That is the morula.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Calls it one cell.",
      remediation: "That is the zygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Says many cells.",
      remediation: "The embryo has many cells; the zygote one.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Calls it haploid.",
      remediation: "The zygote is diploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Calls it a foetus.",
      remediation: "A foetus is the young after 8 weeks.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q2(1)" },
      stem: t`The developing young is called a foetus from`,
      verify: { kind: "value", inputs: {  }, params: { q: "foetus" } },
      options: [
        { key: "A", text: t`implantation`, correct: false, misconceptionId: "C09-M2", value: "at_implantation" },
        { key: "B", text: t`fertilization`, correct: false, misconceptionId: "C09-M3", value: "at_fertilization" },
        { key: "C", text: t`the end of the eighth week`, correct: true, value: "eight_weeks" },
        { key: "D", text: t`birth`, correct: false, misconceptionId: "C09-M1", value: "at_birth" },
      ],
      solution: {
        steps: [
          t`Major structures form by the end of week 8.`,
          t`From then it is a foetus.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q3(4)" },
      stem: t`The disc-like organ that passes substances between mother and foetus is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "placenta" } },
      options: [
        { key: "A", text: t`placenta`, correct: true, value: "placenta" },
        { key: "B", text: t`umbilical cord`, correct: false, misconceptionId: "C09-M4", value: "umbilical_cord" },
        { key: "C", text: t`amnion`, correct: false, misconceptionId: "C09-M5", value: "amnion" },
        { key: "D", text: t`yolk sac`, correct: false, misconceptionId: "C09-M6", value: "yolk_sac" },
      ],
      solution: {
        steps: [
          t`A disc-like exchange organ.`,
          t`The placenta.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`The hormone that the placenta makes early in pregnancy, detected by pregnancy tests, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hcg" } },
      options: [
        { key: "A", text: t`FSH`, correct: false, misconceptionId: "C09-M7", value: "fsh" },
        { key: "B", text: t`oxytocin`, correct: false, misconceptionId: "C09-M8", value: "oxytocin" },
        { key: "C", text: t`testosterone`, correct: false, misconceptionId: "C09-M9", value: "testosterone" },
        { key: "D", text: t`hCG`, correct: true, value: "hcg" },
      ],
      solution: {
        steps: [
          t`The placenta makes hCG early.`,
          t`Pregnancy tests detect it.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q2(7)" },
      stem: t`Unlike a blastula, a gastrula has`,
      verify: { kind: "value", inputs: {  }, params: { q: "gastrula" } },
      options: [
        { key: "A", text: t`three germ layers: ectoderm, mesoderm and endoderm`, correct: true, value: "three_layers" },
        { key: "B", text: t`a hollow ball of one layer`, correct: false, misconceptionId: "C09-M10", value: "hollow_ball" },
        { key: "C", text: t`a solid ball of cells`, correct: false, misconceptionId: "C09-M11", value: "solid_ball" },
        { key: "D", text: t`only one cell`, correct: false, misconceptionId: "C09-M12", value: "one_cell" },
      ],
      solution: {
        steps: [
          t`Gastrulation forms germ layers.`,
          t`Three: ectoderm, mesoderm, endoderm.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q2(8)" },
      stem: t`A zygote, unlike an embryo, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "zygote_embryo" } },
      options: [
        { key: "A", text: t`haploid`, correct: false, misconceptionId: "C09-M14", value: "haploid" },
        { key: "B", text: t`a foetus`, correct: false, misconceptionId: "C09-M15", value: "foetus" },
        { key: "C", text: t`a single diploid cell`, correct: true, value: "one_cell" },
        { key: "D", text: t`many cells`, correct: false, misconceptionId: "C09-M13", value: "many_cells" },
      ],
      solution: {
        steps: [
          t`A zygote is the fertilized egg.`,
          t`One diploid cell.`,
        ],
      },
    },
  ],
};
