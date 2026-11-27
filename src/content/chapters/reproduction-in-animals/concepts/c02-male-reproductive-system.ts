import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A sperm made deep in a testis travels several metres of tubes before it leaves the body. What is that route?`,
    reveal: t`Seminiferous tubules, rete testis, vasa efferentia, epididymis, vas deferens, ejaculatory duct, then the urethra.`,
  },
  explanation: {
    intuition: [
      t`The **testes** are the primary male sex organs.`,
      t`Each holds coiled **seminiferous tubules**, where sperms form.`,
      t`Between the tubules, **Leydig cells** make **testosterone**.`,
      t`Ducts carry the sperms out; glands add fluid to make **semen**.`,
    ],
    formal: [
      {
        title: "Ducts",
        points: [
          t`Seminiferous tubules → rete testis → vasa efferentia → **epididymis**.`,
          t`Epididymis → **vas deferens** → ejaculatory duct → urethra.`,
          t`The epididymis stores and matures sperms.`,
        ],
      },
      {
        title: "Accessory glands",
        points: [
          t`**Seminal vesicles**: about 60% of semen; fructose for energy.`,
          t`**Prostate**: about 30% of semen.`,
          t`**Cowper's glands**: a lubricating secretion.`,
          t`Testosterone brings out **secondary sexual characters**: beard, deep voice.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which part of the male system both stores sperms and lets them mature?`,
      steps: [
        t`Sperms leave the testis immature.`,
        t`They mature and are stored in the epididymis.`,
      ],
      answer: t`The epididymis`,
    },
    visualSpec: t`A diagram of the male system whose ducts light up in the order sperms travel.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks the sperm.",
      remediation: "The sperm is a gamete, not an organ.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks seminal fluid.",
      remediation: "Seminal fluid is a secretion.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks the ovary.",
      remediation: "The ovary is female.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks FSH.",
      remediation: "FSH comes from the pituitary.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks estrogen.",
      remediation: "Estrogen is mainly a female hormone.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks sperms.",
      remediation: "Sperms form in the seminiferous tubules, not Leydig cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Reverses the order.",
      remediation: "The epididymis comes before the vas deferens.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Sends them to the urethra first.",
      remediation: "The urethra is the last duct.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Sends them through the prostate first.",
      remediation: "The prostate adds fluid near the end of the route.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks the prostate.",
      remediation: "The prostate's fluid has no fructose; the seminal vesicles' does.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks Cowper's glands.",
      remediation: "Cowper's glands lubricate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks the epididymis.",
      remediation: "The epididymis stores sperms; fructose comes from the seminal vesicles.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Calls it a primary sex organ.",
      remediation: "The testis is the primary sex organ; a beard is a character.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Calls it a secondary sex organ.",
      remediation: "Secondary sex organs are ducts and glands.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Calls it a primary character.",
      remediation: "Primary characters are the sex organs present from birth.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(2)" },
      stem: t`The primary male reproductive organ in humans is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "organ" } },
      options: [
        { key: "A", text: t`testes`, correct: true, value: "testes" },
        { key: "B", text: t`sperm`, correct: false, misconceptionId: "C02-M1", value: "sperm" },
        { key: "C", text: t`seminal fluid`, correct: false, misconceptionId: "C02-M2", value: "seminal_fluid" },
        { key: "D", text: t`ovary`, correct: false, misconceptionId: "C02-M3", value: "ovary" },
      ],
      solution: {
        steps: [
          t`The testes make sperms and testosterone.`,
          t`They are the primary male sex organs.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2026 Q. 2(i)" },
      stem: t`The Leydig (interstitial) cells of the testis secrete`,
      verify: { kind: "value", inputs: {  }, params: { q: "leydig" } },
      options: [
        { key: "A", text: t`FSH`, correct: false, misconceptionId: "C02-M4", value: "fsh" },
        { key: "B", text: t`estrogen`, correct: false, misconceptionId: "C02-M5", value: "estrogen" },
        { key: "C", text: t`sperms`, correct: false, misconceptionId: "C02-M6", value: "sperms" },
        { key: "D", text: t`testosterone`, correct: true, value: "testosterone" },
      ],
      solution: {
        steps: [
          t`Leydig cells lie between the seminiferous tubules.`,
          t`They secrete testosterone.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q2(2)" },
      stem: t`After the seminiferous tubules and rete testis, sperms travel through`,
      verify: { kind: "value", inputs: {  }, params: { q: "path" } },
      options: [
        { key: "A", text: t`the prostate gland first`, correct: false, misconceptionId: "C02-M9", value: "prostate_first" },
        { key: "B", text: t`the vasa efferentia, epididymis and vas deferens`, correct: true, value: "epididymis_vas" },
        { key: "C", text: t`the vas deferens, then the epididymis`, correct: false, misconceptionId: "C02-M7", value: "vas_epididymis" },
        { key: "D", text: t`the urethra first`, correct: false, misconceptionId: "C02-M8", value: "urethra_first" },
      ],
      solution: {
        steps: [
          t`Rete testis → vasa efferentia → epididymis.`,
          t`Then the vas deferens.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q5(9)" },
      stem: t`The fructose that gives sperms energy comes from the`,
      verify: { kind: "value", inputs: {  }, params: { q: "fructose" } },
      options: [
        { key: "A", text: t`epididymis`, correct: false, misconceptionId: "C02-M12", value: "epididymis" },
        { key: "B", text: t`seminal vesicles`, correct: true, value: "seminal_vesicles" },
        { key: "C", text: t`prostate gland`, correct: false, misconceptionId: "C02-M10", value: "prostate" },
        { key: "D", text: t`Cowper's glands`, correct: false, misconceptionId: "C02-M11", value: "cowpers_glands" },
      ],
      solution: {
        steps: [
          t`The seminal vesicles' fluid holds fructose.`,
          t`It powers the sperms.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q1(8)" },
      stem: t`A beard in boys is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "beard" } },
      options: [
        { key: "A", text: t`primary sexual character`, correct: false, misconceptionId: "C02-M15", value: "primary_character" },
        { key: "B", text: t`secondary sexual character`, correct: true, value: "secondary_character" },
        { key: "C", text: t`primary sex organ`, correct: false, misconceptionId: "C02-M13", value: "primary_organ" },
        { key: "D", text: t`secondary sex organ`, correct: false, misconceptionId: "C02-M14", value: "secondary_organ" },
      ],
      solution: {
        steps: [
          t`A beard appears at puberty under testosterone.`,
          t`It is a secondary sexual character.`,
        ],
      },
    },
  ],
};
