import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Some genes refuse to assort independently: they travel together generation after generation. Why?`,
    reveal: t`They lie close together on the same chromosome, so they are inherited as a unit: they are linked.`,
  },
  explanation: {
    intuition: [
      t`**Sutton and Boveri**: chromosomes carry the genes.`,
      t`Genes on one chromosome are **linked**: inherited together.`,
      t`The genes of one chromosome form a **linkage group**; humans have 23.`,
      t`**Crossing over** can separate linked genes.`,
    ],
    formal: [
      {
        title: "Crossing over",
        points: [
          t`It happens in **pachytene** of prophase I of meiosis.`,
          t`**Non-sister chromatids** of homologous chromosomes exchange segments.`,
          t`It makes new combinations: **recombinants**.`,
        ],
      },
      {
        title: "Distance matters",
        points: [
          t`Crossing over is likelier between genes far apart.`,
          t`So distant genes recombine more; close genes stay linked.`,
          t`Complete linkage: no crossing over, as in *Drosophila* males.`,
        ],
      },
    ],
    worked: {
      prompt: t`Genes A, B and C lie in the order A–B–C. Which pair recombines most often?`,
      steps: [
        t`Crossing over is likelier over longer stretches.`,
        t`A and C are farthest apart.`,
      ],
      answer: t`A and C`,
    },
    visualSpec: t`Two homologous chromosomes crossing over and swapping segments.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks Watson and Crick.",
      remediation: "They found the DNA double helix.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks Miller and Urey.",
      remediation: "They simulated the early atmosphere.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks Oparin and Haldane.",
      remediation: "They proposed the origin of life.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks p and q.",
      remediation: "Adjacent genes are tightly linked.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks r and s.",
      remediation: "Adjacent genes are tightly linked.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks s and t.",
      remediation: "Adjacent genes are tightly linked.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Counts 46.",
      remediation: "Linkage groups match the haploid number, 23.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Counts 22.",
      remediation: "Add the X: 23.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Counts 2.",
      remediation: "Each chromosome pair is one group: 23.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks leptotene.",
      remediation: "Chromosomes are only condensing then.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks diplotene.",
      remediation: "Chiasmata show in diplotene, after crossing over.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks metaphase.",
      remediation: "Crossing over is in prophase I.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks sister chromatids.",
      remediation: "Sister chromatids are identical: no new combinations.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks non-homologous chromosomes.",
      remediation: "That would be a translocation.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks whole chromosomes.",
      remediation: "Only segments are exchanged.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(6)" },
      stem: t`The chromosomal theory of inheritance was proposed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "theory" } },
      options: [
        { key: "A", text: t`Sutton and Boveri`, correct: true, value: "sutton_boveri" },
        { key: "B", text: t`Watson and Crick`, correct: false, misconceptionId: "C08-M1", value: "watson_crick" },
        { key: "C", text: t`Miller and Urey`, correct: false, misconceptionId: "C08-M2", value: "miller_urey" },
        { key: "D", text: t`Oparin and Haldane`, correct: false, misconceptionId: "C08-M3", value: "oparin_haldane" },
      ],
      solution: {
        steps: [
          t`Chromosomes behave like Mendel's factors.`,
          t`Sutton and Boveri.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(7)" },
      stem: t`Genes lie on a chromosome in the order p–q–r–s–t. Which pair is least likely to be inherited together?`,
      verify: { kind: "value", inputs: {  }, params: { q: "least" } },
      options: [
        { key: "A", text: t`p and q`, correct: false, misconceptionId: "C08-M4", value: "p_and_q" },
        { key: "B", text: t`r and s`, correct: false, misconceptionId: "C08-M5", value: "r_and_s" },
        { key: "C", text: t`s and t`, correct: false, misconceptionId: "C08-M6", value: "s_and_t" },
        { key: "D", text: t`p and s`, correct: true, value: "p_and_s" },
      ],
      solution: {
        steps: [
          t`p and s have the most genes between them.`,
          t`They recombine most.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(6)" },
      stem: t`How many linkage groups does a human (female) have?`,
      verify: { kind: "value", inputs: {  }, params: { q: "groups" } },
      options: [
        { key: "A", text: t`$46$`, correct: false, misconceptionId: "C08-M7", value: "46" },
        { key: "B", text: t`$22$`, correct: false, misconceptionId: "C08-M8", value: "22" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C08-M9", value: "2" },
        { key: "D", text: t`$23$`, correct: true, value: "23" },
      ],
      solution: {
        steps: [
          t`One group per chromosome pair.`,
          t`23 in a human female.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(4)" },
      stem: t`Crossing over takes place during`,
      verify: { kind: "value", inputs: {  }, params: { q: "stage" } },
      options: [
        { key: "A", text: t`diplotene`, correct: false, misconceptionId: "C08-M11", value: "diplotene" },
        { key: "B", text: t`metaphase`, correct: false, misconceptionId: "C08-M12", value: "metaphase" },
        { key: "C", text: t`pachytene of prophase I`, correct: true, value: "pachytene" },
        { key: "D", text: t`leptotene`, correct: false, misconceptionId: "C08-M10", value: "leptotene" },
      ],
      solution: {
        steps: [
          t`Crossing over is in pachytene.`,
          t`Of prophase I.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(4)" },
      stem: t`In crossing over, segments are exchanged between`,
      verify: { kind: "value", inputs: {  }, params: { q: "between" } },
      options: [
        { key: "A", text: t`whole chromosomes`, correct: false, misconceptionId: "C08-M15", value: "whole_chromosomes" },
        { key: "B", text: t`non-sister chromatids of homologous chromosomes`, correct: true, value: "non_sister_homologous" },
        { key: "C", text: t`sister chromatids`, correct: false, misconceptionId: "C08-M13", value: "sister_chromatids" },
        { key: "D", text: t`non-homologous chromosomes`, correct: false, misconceptionId: "C08-M14", value: "non_homologous" },
      ],
      solution: {
        steps: [
          t`Segments swap between non-sister chromatids.`,
          t`Of homologous chromosomes.`,
        ],
      },
    },
  ],
};
