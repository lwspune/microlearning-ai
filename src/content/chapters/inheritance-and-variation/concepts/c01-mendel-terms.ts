import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Two tall pea plants can have a dwarf offspring. How can tall parents hide a dwarf trait?`,
    reveal: t`Each carries a hidden recessive allele for dwarfness; the two recessive alleles meet in the dwarf offspring.`,
  },
  explanation: {
    intuition: [
      t`Gregor Mendel studied inheritance in the garden pea, *Pisum sativum*.`,
      t`He followed **seven** pairs of contrasting traits, such as tall and dwarf.`,
      t`A **gene** for a trait comes in alternative forms, its **alleles**.`,
      t`Peas self-pollinate naturally and their traits are clear, which helped him.`,
    ],
    formal: [
      {
        title: "Genetic terms",
        points: [
          t`**Genotype**: the alleles an individual has, such as $TT$, $Tt$ or $tt$.`,
          t`**Phenotype**: the trait that shows, such as tall or dwarf.`,
          t`**Homozygous**: two identical alleles ($TT$, $tt$). **Heterozygous**: two different ($Tt$).`,
          t`A **dominant** allele shows in the heterozygote; a **recessive** one is hidden.`,
        ],
      },
      {
        title: "Why he succeeded",
        points: [
          t`Large samples, counted and expressed as ratios.`,
          t`One trait at a time, with pure-breeding parents.`,
          t`A self-pollinating plant with clear contrasting traits.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is a plant of genotype $Tt$ tall or dwarf, and is it pure-breeding?`,
      steps: [
        t`$T$ (tall) is dominant over $t$.`,
        t`So $Tt$ is tall but heterozygous, not pure-breeding.`,
      ],
      answer: t`Tall, but not pure-breeding`,
    },
    visualSpec: t`Seven trait cards of the pea, each with its dominant and recessive form.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Calls them genotypes.",
      remediation: "A genotype is a combination of alleles.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Calls them phenotypes.",
      remediation: "A phenotype is the visible trait.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls them chromatids.",
      remediation: "Chromatids are halves of a chromosome.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Calls it heterozygous.",
      remediation: "Two identical alleles make it homozygous.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls it a hybrid.",
      remediation: "A hybrid is heterozygous.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Calls it recessive.",
      remediation: "TT is homozygous dominant.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks the genotype.",
      remediation: "The genotype is the alleles; the phenotype is what shows.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks the allele.",
      remediation: "An allele is one form of a gene.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks the karyotype.",
      remediation: "A karyotype is the chromosome set.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks peas live long.",
      remediation: "Peas are annuals, with a short life cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks peas give few seeds.",
      remediation: "Peas give many seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks peas can only cross.",
      remediation: "Peas self-pollinate naturally.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Counts two.",
      remediation: "He studied seven pairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Counts four.",
      remediation: "He studied seven pairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Counts 23.",
      remediation: "23 is the human chromosome count.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(2)" },
      stem: t`The alternative forms of a gene, such as $T$ and $t$, are called`,
      verify: { kind: "value", inputs: {  }, params: { q: "allele" } },
      options: [
        { key: "A", text: t`alleles`, correct: true, value: "alleles" },
        { key: "B", text: t`genotypes`, correct: false, misconceptionId: "C01-M1", value: "genotypes" },
        { key: "C", text: t`phenotypes`, correct: false, misconceptionId: "C01-M2", value: "phenotypes" },
        { key: "D", text: t`chromatids`, correct: false, misconceptionId: "C01-M3", value: "chromatids" },
      ],
      solution: {
        steps: [
          t`Alternative forms of one gene.`,
          t`Alleles.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(2)" },
      stem: t`A plant with the genotype $TT$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "homozygous" } },
      options: [
        { key: "A", text: t`homozygous`, correct: true, value: "homozygous" },
        { key: "B", text: t`heterozygous`, correct: false, misconceptionId: "C01-M4", value: "heterozygous" },
        { key: "C", text: t`a hybrid`, correct: false, misconceptionId: "C01-M5", value: "hybrid" },
        { key: "D", text: t`recessive`, correct: false, misconceptionId: "C01-M6", value: "recessive_only" },
      ],
      solution: {
        steps: [
          t`Two identical alleles, $T$ and $T$.`,
          t`Homozygous.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`The observable form of a trait, such as tall or dwarf, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "phenotype" } },
      options: [
        { key: "A", text: t`allele`, correct: false, misconceptionId: "C01-M8", value: "allele_word" },
        { key: "B", text: t`karyotype`, correct: false, misconceptionId: "C01-M9", value: "karyotype" },
        { key: "C", text: t`phenotype`, correct: true, value: "phenotype" },
        { key: "D", text: t`genotype`, correct: false, misconceptionId: "C01-M7", value: "genotype" },
      ],
      solution: {
        steps: [
          t`The visible form of a trait.`,
          t`The phenotype.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(4)" },
      stem: t`One reason Mendel chose the garden pea was that it`,
      verify: { kind: "value", inputs: {  }, params: { q: "pea" } },
      options: [
        { key: "A", text: t`is naturally self-pollinating, with clear contrasting traits`, correct: true, value: "self_pollinating" },
        { key: "B", text: t`lives for many years`, correct: false, misconceptionId: "C01-M10", value: "long_lived" },
        { key: "C", text: t`gives very few seeds`, correct: false, misconceptionId: "C01-M11", value: "few_seeds" },
        { key: "D", text: t`can only be cross-pollinated`, correct: false, misconceptionId: "C01-M12", value: "cross_only" },
      ],
      solution: {
        steps: [
          t`Peas self-pollinate and have clear contrasting traits.`,
          t`This made Mendel's crosses reliable.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(1)" },
      stem: t`How many pairs of contrasting characters did Mendel study in the pea?`,
      verify: { kind: "value", inputs: {  }, params: { q: "traits" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C01-M13", value: "2" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C01-M14", value: "4" },
        { key: "D", text: t`$23$`, correct: false, misconceptionId: "C01-M15", value: "23" },
      ],
      solution: {
        steps: [
          t`Mendel followed seven characters.`,
          t`Seven pairs.`,
        ],
      },
    },
  ],
};
