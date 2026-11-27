import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`To move a human gene into a bacterium, you first have to cut it out of a chromosome millions of bases long. What can cut DNA at exactly the right spot?`,
    reveal: t`Restriction enzymes: bacterial enzymes that cut DNA only where they find a particular short sequence.`,
  },
  explanation: {
    intuition: [
      t`**Restriction enzymes** (restriction endonucleases) are 'molecular scissors'.`,
      t`Bacteria use them to destroy invading viral DNA.`,
      t`Type II enzymes are the ones used in rDNA technology.`,
    ],
    formal: [
      {
        title: "Recognition sites",
        points: [
          t`Sites are **4 to 8 nucleotides** long and **palindromic**: the same 5′→3′ on both strands.`,
          t`*Eco*RI: GAATTC. *Hin*d III: **AAGCTT**. *Alu* I: AGCT.`,
          t`They cut the **phosphodiester** bonds of both strands.`,
        ],
      },
      {
        title: "Ends",
        points: [
          t`A staggered cut leaves **sticky ends** (*Eco*RI, *Bam*HI).`,
          t`A straight cut leaves **blunt ends** (*Alu* I).`,
          t`Sticky ends pair with matching ends cut by the same enzyme.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is 5′–GGATCC–3′ a palindrome?`,
      steps: [
        t`Its complement, read 5′→3′, is GGATCC.`,
        t`Both strands read the same.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`A DNA double strand with the GAATTC site, cut in a zigzag to leave sticky ends.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks DNA ligase.",
      remediation: "Ligase joins DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks DNA polymerase.",
      remediation: "Polymerase builds DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks reverse transcriptase.",
      remediation: "It makes DNA from RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Gives 2 to 4.",
      remediation: "Sites are 4 to 8 long.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Gives 8 to 10.",
      remediation: "Sites are 4 to 8 long.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Gives 14 to 18.",
      remediation: "Sites are 4 to 8 long.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks GAATTC.",
      remediation: "That is *Eco*RI.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks AGCT.",
      remediation: "That is *Alu* I.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks GGATCC.",
      remediation: "That is *Bam*HI.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks hydrogen bonds.",
      remediation: "Those hold the two strands.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks glycosidic bonds.",
      remediation: "Those join base to sugar.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks peptide bonds.",
      remediation: "Those are in proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks sticky end.",
      remediation: "A sticky end is a cut product.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks blunt end.",
      remediation: "A blunt end is a cut product.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks primer.",
      remediation: "A primer starts PCR.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2026 Q. 2(ii)" },
      stem: t`The tool of rDNA technology called 'molecular scissors' is`,
      verify: { kind: "value", inputs: {  }, params: { q: "scissors" } },
      options: [
        { key: "A", text: t`restriction enzymes`, correct: true, value: "restriction_enzymes" },
        { key: "B", text: t`DNA ligase`, correct: false, misconceptionId: "C01-M1", value: "dna_ligase" },
        { key: "C", text: t`DNA polymerase`, correct: false, misconceptionId: "C01-M2", value: "dna_polymerase" },
        { key: "D", text: t`reverse transcriptase`, correct: false, misconceptionId: "C01-M3", value: "reverse_transcriptase" },
      ],
      solution: {
        steps: [
          t`They cut DNA at sites.`,
          t`Restriction enzymes.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2024 Q. 1(vi)" },
      stem: t`Recognition sequences of restriction enzymes are generally how many nucleotides long?`,
      verify: { kind: "value", inputs: {  }, params: { q: "length" } },
      options: [
        { key: "A", text: t`4 to 8`, correct: true, value: "len4_8" },
        { key: "B", text: t`2 to 4`, correct: false, misconceptionId: "C01-M4", value: "len2_4" },
        { key: "C", text: t`8 to 10`, correct: false, misconceptionId: "C01-M5", value: "len8_10" },
        { key: "D", text: t`14 to 18`, correct: false, misconceptionId: "C01-M6", value: "len14_18" },
      ],
      solution: {
        steps: [
          t`Short palindromes.`,
          t`4 to 8.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q1(4)" },
      stem: t`The recognition sequence of *Hin*d III (5′→3′ on one strand) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hindiii" } },
      options: [
        { key: "A", text: t`AGCT`, correct: false, misconceptionId: "C01-M8", value: "seq_agct" },
        { key: "B", text: t`GGATCC`, correct: false, misconceptionId: "C01-M9", value: "seq_ggatcc" },
        { key: "C", text: t`AAGCTT`, correct: true, value: "seq_aagctt" },
        { key: "D", text: t`GAATTC`, correct: false, misconceptionId: "C01-M7", value: "seq_gaattc" },
      ],
      solution: {
        steps: [
          t`From *Haemophilus influenzae*.`,
          t`AAGCTT.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q1(2)" },
      stem: t`Nucleases hydrolyse which bonds of a DNA strand?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nuclease" } },
      options: [
        { key: "A", text: t`Phosphodiester bonds`, correct: true, value: "phosphodiester_b" },
        { key: "B", text: t`Hydrogen bonds`, correct: false, misconceptionId: "C01-M10", value: "hydrogen_b" },
        { key: "C", text: t`Glycosidic bonds`, correct: false, misconceptionId: "C01-M11", value: "glycosidic_b" },
        { key: "D", text: t`Peptide bonds`, correct: false, misconceptionId: "C01-M12", value: "peptide_b" },
      ],
      solution: {
        steps: [
          t`The sugar–phosphate backbone.`,
          t`Phosphodiester bonds.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2025 Q. 2(iv)" },
      stem: t`5′–GAATTC–3′ paired with 3′–CTTAAG–5′ reads the same on both strands, 5′ to 3′. Such a sequence is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "palindrome" } },
      options: [
        { key: "A", text: t`palindrome`, correct: true, value: "palindrome_t" },
        { key: "B", text: t`sticky end`, correct: false, misconceptionId: "C01-M13", value: "sticky_end_t" },
        { key: "C", text: t`blunt end`, correct: false, misconceptionId: "C01-M14", value: "blunt_end_t" },
        { key: "D", text: t`primer`, correct: false, misconceptionId: "C01-M15", value: "primer_t" },
      ],
      solution: {
        steps: [
          t`Reads the same both ways.`,
          t`Palindrome.`,
        ],
      },
    },
  ],
};
