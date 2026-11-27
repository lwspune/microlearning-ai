import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A man makes millions of sperms a day, each with half his chromosomes. How does one cell give four sperms?`,
    reveal: t`A primary spermatocyte goes through meiosis into four spermatids, and each spermatid becomes a sperm.`,
  },
  explanation: {
    intuition: [
      t`**Spermatogenesis** makes sperms in the seminiferous tubules.`,
      t`It starts at puberty and goes on through life.`,
      t`Meiosis halves the chromosomes: a human sperm has 23.`,
    ],
    formal: [
      {
        title: "Stages",
        points: [
          t`**Spermatogonia** (2n) multiply by mitosis.`,
          t`Some grow into **primary spermatocytes** (2n).`,
          t`Meiosis I gives two **secondary spermatocytes** (n).`,
          t`Meiosis II gives four **spermatids** (n).`,
          t`**Spermiogenesis** turns each spermatid into a sperm.`,
        ],
      },
      {
        title: "The sperm",
        points: [
          t`Head: the haploid nucleus under a cap, the **acrosome**, made by the Golgi body.`,
          t`The acrosome holds lytic enzymes.`,
          t`Middle piece: the **nebenkern**, a spiral of mitochondria for energy.`,
          t`Tail: for swimming.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many spermatids do 30 secondary spermatocytes give?`,
      steps: [
        t`Each secondary spermatocyte divides once (meiosis II).`,
        t`$30 \times 2 = 60$`,
      ],
      answer: t`60`,
    },
    visualSpec: t`One primary spermatocyte splitting into two, then four, then four sperms.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Gives one sperm per spermatocyte.",
      remediation: "Meiosis gives four sperms per primary spermatocyte.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Gives two per spermatocyte.",
      remediation: "Meiosis II doubles them again: four.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Counts eight.",
      remediation: "Each primary spermatocyte gives four sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks spermatogenesis.",
      remediation: "Spermatogenesis is the whole process; the last step is spermiogenesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks spermiation.",
      remediation: "Spermiation is the release of sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks oogenesis.",
      remediation: "Oogenesis makes eggs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks it holds mitochondria.",
      remediation: "Mitochondria are in the middle piece.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks it holds the genes.",
      remediation: "The genes are in the nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks it forms the tail.",
      remediation: "The acrosome is a cap on the head.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Puts it in the head.",
      remediation: "The nebenkern is in the middle piece.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Calls it the centriole.",
      remediation: "Centrioles are in the neck; the nebenkern is mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Calls it the nucleus.",
      remediation: "The nucleus is in the head.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Counts 46.",
      remediation: "46 is diploid; sperms are haploid: 23.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Counts 92.",
      remediation: "92 is a doubled diploid set.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Counts 22.",
      remediation: "22 autosomes plus one sex chromosome: 23.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "authored" },
      stem: t`How many sperms do 50 primary spermatocytes produce?`,
      verify: { kind: "value", inputs: { p: "50" }, params: { q: "count" } },
      options: [
        { key: "A", text: t`$100$`, correct: false, misconceptionId: "C04-M2", value: "100" },
        { key: "B", text: t`$400$`, correct: false, misconceptionId: "C04-M3", value: "400" },
        { key: "C", text: t`$200$`, correct: true, value: "200" },
        { key: "D", text: t`$50$`, correct: false, misconceptionId: "C04-M1", value: "50" },
      ],
      solution: {
        steps: [
          t`Each primary spermatocyte gives four sperms.`,
          t`$50 \times 4 = 200$`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 1(iv)" },
      stem: t`Spermatids are transformed into functional spermatozoa by`,
      verify: { kind: "value", inputs: {  }, params: { q: "spermiogenesis" } },
      options: [
        { key: "A", text: t`spermatogenesis`, correct: false, misconceptionId: "C04-M4", value: "spermatogenesis" },
        { key: "B", text: t`spermiation`, correct: false, misconceptionId: "C04-M5", value: "spermiation" },
        { key: "C", text: t`oogenesis`, correct: false, misconceptionId: "C04-M6", value: "oogenesis" },
        { key: "D", text: t`spermiogenesis`, correct: true, value: "spermiogenesis" },
      ],
      solution: {
        steps: [
          t`Spermatids are non-motile.`,
          t`Spermiogenesis turns them into spermatozoa.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2026 Q. 7" },
      stem: t`The acrosome of a sperm`,
      verify: { kind: "value", inputs: {  }, params: { q: "acrosome" } },
      options: [
        { key: "A", text: t`holds the genes`, correct: false, misconceptionId: "C04-M8", value: "nucleus_genes" },
        { key: "B", text: t`forms the tail`, correct: false, misconceptionId: "C04-M9", value: "centriole_tail" },
        { key: "C", text: t`is formed from the Golgi body and holds enzymes that dissolve the egg's coverings`, correct: true, value: "golgi_enzymes" },
        { key: "D", text: t`holds mitochondria that power the tail`, correct: false, misconceptionId: "C04-M7", value: "mitochondria_energy" },
      ],
      solution: {
        steps: [
          t`The acrosome comes from the Golgi body.`,
          t`Its enzymes dissolve the egg's coverings.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 10" },
      stem: t`The nebenkern of a sperm is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nebenkern" } },
      options: [
        { key: "A", text: t`the Golgi cap of the head`, correct: false, misconceptionId: "C04-M10", value: "golgi_head" },
        { key: "B", text: t`the centriole of the neck`, correct: false, misconceptionId: "C04-M11", value: "centriole_neck" },
        { key: "C", text: t`the nucleus`, correct: false, misconceptionId: "C04-M12", value: "nucleus_head" },
        { key: "D", text: t`the mitochondrial spiral of the middle piece, which provides energy`, correct: true, value: "mitochondria_middle" },
      ],
      solution: {
        steps: [
          t`The middle piece holds a mitochondrial spiral.`,
          t`This nebenkern provides energy.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 5" },
      stem: t`How many chromosomes does a human sperm carry?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chromosomes" } },
      options: [
        { key: "A", text: t`22`, correct: false, misconceptionId: "C04-M15", value: "22" },
        { key: "B", text: t`23`, correct: true, value: "23" },
        { key: "C", text: t`46`, correct: false, misconceptionId: "C04-M13", value: "46" },
        { key: "D", text: t`92`, correct: false, misconceptionId: "C04-M14", value: "92" },
      ],
      solution: {
        steps: [
          t`Sperms are haploid.`,
          t`A human sperm has 23 chromosomes.`,
        ],
      },
    },
  ],
};
