import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A couple has tried for years to have a child. Can medicine help the egg and sperm meet?`,
    reveal: t`Yes: assisted reproductive technologies such as IVF, ZIFT and GIFT bring them together outside or inside the body.`,
  },
  explanation: {
    intuition: [
      t`**Infertility**: no conception after a year of trying.`,
      t`**Assisted reproductive technologies** (ART) help.`,
      t`**Sexually transmitted diseases** (STDs) can also cause infertility.`,
    ],
    formal: [
      {
        title: "ART",
        points: [
          t`**IVF**: eggs fertilized outside the body (the test tube baby).`,
          t`**ZIFT**: zygote intrafallopian transfer.`,
          t`**GIFT**: gametes placed in the fallopian tube to fertilize there.`,
          t`**Artificial insemination**: sperms placed into the female tract.`,
        ],
      },
      {
        title: "STDs",
        points: [
          t`Gonorrhoea: the bacterium *Neisseria gonorrhoeae*.`,
          t`Syphilis: the bacterium *Treponema pallidum*.`,
          t`Genital herpes, warts and AIDS: viruses.`,
        ],
      },
    ],
    worked: {
      prompt: t`In which technique is fertilization outside the body, but the early embryo placed in the uterus?`,
      steps: [
        t`Fertilization outside the body is IVF.`,
        t`The embryo is then transferred to the uterus.`,
      ],
      answer: t`IVF with embryo transfer`,
    },
    visualSpec: t`Two paths, IVF and GIFT, showing where fertilization happens in each.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Picks in vivo.",
      remediation: "In vivo means inside the body.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: "Picks in situ.",
      remediation: "In situ means in place.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Picks artificial insemination.",
      remediation: "That places sperms in the tract; fertilization is inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Picks gamete transfer.",
      remediation: "GIFT transfers gametes; ZIFT a zygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Expands the Z wrongly.",
      remediation: "Z is zygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Puts it in the uterus.",
      remediation: "ZIFT goes to the fallopian tube.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Picks *Treponema*.",
      remediation: "*Treponema* causes syphilis.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: "Picks HIV.",
      remediation: "HIV causes AIDS.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M9",
      mistake: "Picks *Candida*.",
      remediation: "*Candida* is a fungus.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M10",
      mistake: "Picks *Neisseria*.",
      remediation: "*Neisseria* causes gonorrhoea.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M11",
      mistake: "Picks HIV.",
      remediation: "HIV causes AIDS.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M12",
      mistake: "Picks the herpes virus.",
      remediation: "Herpes causes genital herpes.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M13",
      mistake: "Says a zygote.",
      remediation: "That is ZIFT.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M14",
      mistake: "Says an embryo in the uterus.",
      remediation: "That is IVF-ET.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M15",
      mistake: "Says sperms in the vagina.",
      remediation: "That is artificial insemination.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(6)" },
      stem: t`The test tube baby technique is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ivf" } },
      options: [
        { key: "A", text: t`in vivo fertilization`, correct: false, misconceptionId: "C12-M1", value: "in_vivo" },
        { key: "B", text: t`in situ fertilization`, correct: false, misconceptionId: "C12-M2", value: "in_situ" },
        { key: "C", text: t`artificial insemination`, correct: false, misconceptionId: "C12-M3", value: "artificial_insemination" },
        { key: "D", text: t`in vitro fertilization`, correct: true, value: "in_vitro" },
      ],
      solution: {
        steps: [
          t`Fertilization outside the body.`,
          t`In vitro fertilization.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 2(ii)" },
      stem: t`ZIFT stands for`,
      verify: { kind: "value", inputs: {  }, params: { q: "zift" } },
      options: [
        { key: "A", text: t`zygote intrauterine transfer`, correct: false, misconceptionId: "C12-M6", value: "zygote_intrauterine" },
        { key: "B", text: t`zygote intrafallopian transfer`, correct: true, value: "zygote_intrafallopian" },
        { key: "C", text: t`gamete intrafallopian transfer`, correct: false, misconceptionId: "C12-M4", value: "gamete_intrafallopian" },
        { key: "D", text: t`zona in vitro fertilization technique`, correct: false, misconceptionId: "C12-M5", value: "zona_ivf" },
      ],
      solution: {
        steps: [
          t`Z for zygote, IFT for intrafallopian transfer.`,
          t`Zygote intrafallopian transfer.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q3(5)" },
      stem: t`Gonorrhoea is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "gonorrhoea" } },
      options: [
        { key: "A", text: t`*Candida*`, correct: false, misconceptionId: "C12-M9", value: "candida" },
        { key: "B", text: t`*Neisseria gonorrhoeae*`, correct: true, value: "neisseria" },
        { key: "C", text: t`*Treponema pallidum*`, correct: false, misconceptionId: "C12-M7", value: "treponema" },
        { key: "D", text: t`HIV`, correct: false, misconceptionId: "C12-M8", value: "hiv" },
      ],
      solution: {
        steps: [
          t`Gonorrhoea is bacterial.`,
          t`*Neisseria gonorrhoeae*.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q4(6)" },
      stem: t`Syphilis is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "syphilis" } },
      options: [
        { key: "A", text: t`the herpes virus`, correct: false, misconceptionId: "C12-M12", value: "herpes_virus" },
        { key: "B", text: t`*Treponema pallidum*`, correct: true, value: "treponema" },
        { key: "C", text: t`*Neisseria gonorrhoeae*`, correct: false, misconceptionId: "C12-M10", value: "neisseria" },
        { key: "D", text: t`HIV`, correct: false, misconceptionId: "C12-M11", value: "hiv" },
      ],
      solution: {
        steps: [
          t`Syphilis is bacterial.`,
          t`*Treponema pallidum*.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2026 Q. 23" },
      stem: t`In GIFT,`,
      verify: { kind: "value", inputs: {  }, params: { q: "gift" } },
      options: [
        { key: "A", text: t`an embryo is placed in the uterus`, correct: false, misconceptionId: "C12-M14", value: "embryo_to_uterus" },
        { key: "B", text: t`sperms are placed in the vagina`, correct: false, misconceptionId: "C12-M15", value: "sperm_to_vagina" },
        { key: "C", text: t`eggs and sperms are placed in the fallopian tube to fertilize there`, correct: true, value: "gametes_to_tube" },
        { key: "D", text: t`a zygote is placed in the fallopian tube`, correct: false, misconceptionId: "C12-M13", value: "zygote_to_tube" },
      ],
      solution: {
        steps: [
          t`GIFT transfers gametes.`,
          t`They fertilize in the fallopian tube.`,
        ],
      },
    },
  ],
};
