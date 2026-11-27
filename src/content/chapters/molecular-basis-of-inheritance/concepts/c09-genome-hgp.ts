import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Reading every letter of the human genome took 13 years and thousands of scientists. What did they find?`,
    reveal: t`About 3 billion base pairs, of which less than 2% code for proteins.`,
  },
  explanation: {
    intuition: [
      t`A **genome** is an organism's complete genetic information.`,
      t`**Genomics** studies whole genomes.`,
      t`The **Human Genome Project** read the human genome.`,
    ],
    formal: [
      {
        title: "The HGP",
        points: [
          t`Began in 1990; completed in 2003.`,
          t`About $3 \times 10^9$ base pairs.`,
          t`Less than 2% of the genome codes for proteins.`,
          t`**SNPs**: single-base differences between people.`,
          t`It helps find disease genes.`,
        ],
      },
    ],
    worked: {
      prompt: t`If 2% of 3 × 10⁹ base pairs code for proteins, about how many base pairs is that?`,
      steps: [
        t`$0.02 \times 3 \times 10^9$`,
        t`$= 6 \times 10^7$`,
      ],
      answer: t`About $6 \times 10^7$`,
    },
    visualSpec: t`A long genome bar with the tiny protein-coding parts lit up.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Says one gene.",
      remediation: "A genome is all the genes and more.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Says one chromosome.",
      remediation: "A genome is a whole set.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Says all proteins.",
      remediation: "That is the proteome.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Picks 1953.",
      remediation: "1953 is the double helix.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Picks 1990.",
      remediation: "1990 is when it began.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Picks 2010.",
      remediation: "It finished in 2003.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Says about half.",
      remediation: "Under 2% codes for proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Says all of it.",
      remediation: "Most is non-coding.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Says a quarter.",
      remediation: "Under 2%.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Picks VNTRs.",
      remediation: "VNTRs are repeat numbers.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Picks introns.",
      remediation: "Introns are non-coding parts.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Picks codons.",
      remediation: "Codons are triplets.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Gives 3 × 10⁶.",
      remediation: "It is about 3 × 10⁹.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Gives 3 × 10¹².",
      remediation: "It is about 3 × 10⁹.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Gives 46.",
      remediation: "46 is chromosomes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(3)" },
      stem: t`A genome is`,
      verify: { kind: "value", inputs: {  }, params: { q: "genome" } },
      options: [
        { key: "A", text: t`a single chromosome`, correct: false, misconceptionId: "C09-M2", value: "one_chromosome" },
        { key: "B", text: t`all of an organism's proteins`, correct: false, misconceptionId: "C09-M3", value: "all_proteins" },
        { key: "C", text: t`the complete set of an organism's genetic information`, correct: true, value: "complete_set" },
        { key: "D", text: t`a single gene`, correct: false, misconceptionId: "C09-M1", value: "one_gene" },
      ],
      solution: {
        steps: [
          t`All of an organism's genetic information.`,
          t`Its genome.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(1)" },
      stem: t`The Human Genome Project, begun in 1990, was completed in`,
      verify: { kind: "value", inputs: {  }, params: { q: "year" } },
      options: [
        { key: "A", text: t`2003`, correct: true, value: "2003" },
        { key: "B", text: t`1953`, correct: false, misconceptionId: "C09-M4", value: "1953" },
        { key: "C", text: t`1990`, correct: false, misconceptionId: "C09-M5", value: "1990" },
        { key: "D", text: t`2010`, correct: false, misconceptionId: "C09-M6", value: "2010" },
      ],
      solution: {
        steps: [
          t`The HGP ran 1990 to 2003.`,
          t`2003.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(1)" },
      stem: t`The fraction of the human genome that codes for proteins is`,
      verify: { kind: "value", inputs: {  }, params: { q: "coding" } },
      options: [
        { key: "A", text: t`about half`, correct: false, misconceptionId: "C09-M7", value: "about_half" },
        { key: "B", text: t`all of it`, correct: false, misconceptionId: "C09-M8", value: "all_of_it" },
        { key: "C", text: t`about a quarter`, correct: false, misconceptionId: "C09-M9", value: "about_quarter" },
        { key: "D", text: t`less than 2%`, correct: true, value: "under_two" },
      ],
      solution: {
        steps: [
          t`Most of the genome is non-coding.`,
          t`Under 2% codes.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(1)" },
      stem: t`Single-base differences in DNA sequence between people are`,
      verify: { kind: "value", inputs: {  }, params: { q: "snp" } },
      options: [
        { key: "A", text: t`SNPs`, correct: true, value: "snps" },
        { key: "B", text: t`VNTRs`, correct: false, misconceptionId: "C09-M10", value: "vntrs" },
        { key: "C", text: t`introns`, correct: false, misconceptionId: "C09-M11", value: "introns" },
        { key: "D", text: t`codons`, correct: false, misconceptionId: "C09-M12", value: "codons" },
      ],
      solution: {
        steps: [
          t`Single-base variations.`,
          t`SNPs.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(1)" },
      stem: t`The human genome holds roughly how many base pairs?`,
      verify: { kind: "value", inputs: {  }, params: { q: "size" } },
      options: [
        { key: "A", text: t`$3 \times 10^{12}$`, correct: false, misconceptionId: "C09-M14", value: "3000000000000" },
        { key: "B", text: t`$46$`, correct: false, misconceptionId: "C09-M15", value: "46" },
        { key: "C", text: t`$3 \times 10^{9}$`, correct: true, value: "3000000000" },
        { key: "D", text: t`$3 \times 10^{6}$`, correct: false, misconceptionId: "C09-M13", value: "3000000" },
      ],
      solution: {
        steps: [
          t`The HGP counted about 3 × 10⁹ base pairs.`,
          t`$3 \times 10^9$`,
        ],
      },
    },
  ],
};
