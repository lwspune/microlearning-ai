import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A tall pea plant could be $TT$ or $Tt$; they look the same. How can a breeder tell?`,
    reveal: t`Cross it with a dwarf ($tt$): all tall offspring mean $TT$, half dwarf mean $Tt$.`,
  },
  explanation: {
    intuition: [
      t`A dominant phenotype can hide two genotypes.`,
      t`A **test cross** crosses it with the **homozygous recessive**.`,
      t`The offspring reveal the hidden genotype.`,
      t`A **back cross** is a cross of F₁ with either parent.`,
    ],
    formal: [
      {
        title: "Reading a test cross",
        points: [
          t`All offspring dominant: the parent is homozygous dominant.`,
          t`Dominant : recessive $= 1 : 1$: the parent is heterozygous.`,
          t`Dihybrid test cross $RrYy \times rryy$: $1 : 1 : 1 : 1$.`,
        ],
      },
      {
        title: "Back cross and test cross",
        points: [
          t`A back cross may use the dominant or the recessive parent.`,
          t`Only the cross with the recessive parent is a test cross.`,
          t`So a test cross is a back cross, not the other way round.`,
        ],
      },
    ],
    worked: {
      prompt: t`A test cross gives 48 tall and 52 dwarf plants. What is the tall parent's genotype?`,
      steps: [
        t`48 : 52 is about $1 : 1$.`,
        t`So the parent is heterozygous, $Tt$.`,
      ],
      answer: t`$Tt$`,
    },
    visualSpec: t`Two test crosses side by side, one giving all tall, one half dwarf.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Calls it any back cross.",
      remediation: "Only a cross with the recessive is a test cross.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Calls it reciprocal.",
      remediation: "A reciprocal cross swaps which parent is male.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Calls it monohybrid.",
      remediation: "Monohybrid describes one trait, not the parent used.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Calls it homozygous dominant.",
      remediation: "That would give all dominant offspring.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Calls it recessive.",
      remediation: "A recessive parent would give all recessive offspring.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Calls it a pure line.",
      remediation: "A pure line gives uniform offspring.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Calls it heterozygous.",
      remediation: "A heterozygote would give 1 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Calls it recessive.",
      remediation: "The parent shows the dominant trait.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says it can't be told.",
      remediation: "All-dominant offspring prove a homozygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Gives 9 : 3 : 3 : 1.",
      remediation: t`That is $RrYy$ selfed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Gives 3 : 1.",
      remediation: "That is a monohybrid selfing.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Gives 1 : 2 : 1.",
      remediation: "That is a monohybrid genotypic ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks a test cross uses the dominant parent.",
      remediation: "A test cross uses the recessive parent.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks they are the same.",
      remediation: "A back cross can use the dominant parent too.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks a back cross uses an unrelated plant.",
      remediation: "A back cross uses a parent.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(3)" },
      stem: t`A cross between an individual of unknown genotype and a recessive plant for that trait is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "name" } },
      options: [
        { key: "A", text: t`reciprocal cross`, correct: false, misconceptionId: "C04-M2", value: "reciprocal_cross" },
        { key: "B", text: t`monohybrid cross`, correct: false, misconceptionId: "C04-M3", value: "monohybrid_cross" },
        { key: "C", text: t`test cross`, correct: true, value: "test_cross" },
        { key: "D", text: t`back cross with either parent`, correct: false, misconceptionId: "C04-M1", value: "back_cross_any" },
      ],
      solution: {
        steps: [
          t`Unknown genotype × homozygous recessive.`,
          t`A test cross.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(3)" },
      stem: t`A violet-flowered pea crossed with a white-flowered one gives 1 violet : 1 white. The violet parent was`,
      verify: { kind: "value", inputs: {  }, params: { q: "half" } },
      options: [
        { key: "A", text: t`homozygous dominant`, correct: false, misconceptionId: "C04-M4", value: "homozygous_dominant" },
        { key: "B", text: t`homozygous recessive`, correct: false, misconceptionId: "C04-M5", value: "homozygous_recessive" },
        { key: "C", text: t`a pure line`, correct: false, misconceptionId: "C04-M6", value: "pure_line" },
        { key: "D", text: t`heterozygous`, correct: true, value: "heterozygous" },
      ],
      solution: {
        steps: [
          t`1 violet : 1 white.`,
          t`The violet parent is heterozygous.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(3)" },
      stem: t`In a test cross, every offspring shows the dominant trait. The tested parent is`,
      verify: { kind: "value", inputs: {  }, params: { q: "all" } },
      options: [
        { key: "A", text: t`recessive`, correct: false, misconceptionId: "C04-M8", value: "recessive" },
        { key: "B", text: t`impossible to tell`, correct: false, misconceptionId: "C04-M9", value: "cannot_tell" },
        { key: "C", text: t`homozygous dominant`, correct: true, value: "homozygous_dominant" },
        { key: "D", text: t`heterozygous`, correct: false, misconceptionId: "C04-M7", value: "heterozygous" },
      ],
      solution: {
        steps: [
          t`Every offspring is dominant.`,
          t`The parent is homozygous dominant.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`The dihybrid test cross $RrYy \times rryy$ gives the phenotypic ratio`,
      verify: { kind: "value", inputs: {  }, params: { q: "dihybrid" } },
      options: [
        { key: "A", text: t`$9 : 3 : 3 : 1$`, correct: false, misconceptionId: "C04-M10", value: "nine_three_three_one" },
        { key: "B", text: t`$3 : 1$`, correct: false, misconceptionId: "C04-M11", value: "three_one" },
        { key: "C", text: t`$1 : 2 : 1$`, correct: false, misconceptionId: "C04-M12", value: "one_two_one" },
        { key: "D", text: t`$1 : 1 : 1 : 1$`, correct: true, value: "one_one_one_one" },
      ],
      solution: {
        steps: [
          t`$RrYy$ makes four gametes; $rryy$ only $ry$.`,
          t`$1 : 1 : 1 : 1$`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(1)" },
      stem: t`A test cross is a back cross, but not every back cross is a test cross, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "back" } },
      options: [
        { key: "A", text: t`a back cross uses an unrelated plant`, correct: false, misconceptionId: "C04-M15", value: "back_unrelated" },
        { key: "B", text: t`a back cross may be with either parent, including the dominant one`, correct: true, value: "back_either_parent" },
        { key: "C", text: t`a test cross uses the dominant parent`, correct: false, misconceptionId: "C04-M13", value: "test_with_dominant" },
        { key: "D", text: t`the two are exactly the same`, correct: false, misconceptionId: "C04-M14", value: "same_thing" },
      ],
      solution: {
        steps: [
          t`A back cross can be with the dominant parent.`,
          t`Only the recessive one makes it a test cross.`,
        ],
      },
    },
  ],
};
