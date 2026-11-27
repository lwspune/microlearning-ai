import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A blacksmith develops strong arms. Will his children be born with strong arms?`,
    reveal: t`No: Lamarck thought so, but changes acquired in life are not inherited; Weismann showed only the germplasm passes on.`,
  },
  explanation: {
    intuition: [
      t`Several theories tried to explain how evolution happens.`,
      t`**Lamarck**: inheritance of acquired characters.`,
      t`**Darwin**: natural selection.`,
      t`**Hugo de Vries**: mutation.`,
    ],
    formal: [
      {
        title: "The theories",
        points: [
          t`Lamarck: use and disuse change organs, and the changes pass on.`,
          t`**Weismann** cut mice's tails for generations: no tailless mice. Germplasm theory.`,
          t`Darwin: small, directional variations; the fittest survive and breed.`,
          t`De Vries: large, sudden, random **mutations** in the evening primrose, *Oenothera*.`,
        ],
      },
      {
        title: "Darwin's drawbacks",
        points: [
          t`He couldn't explain how variations arise or are inherited.`,
          t`He did not separate inherited from environmental variation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why did Weismann cut mice's tails for 22 generations?`,
      steps: [
        t`To test whether acquired changes are inherited.`,
        t`Tails stayed normal, so they are not.`,
      ],
      answer: t`To test Lamarck's theory`,
    },
    visualSpec: t`Three panels: Lamarck's stretching giraffe, Darwin's selection, de Vries's sudden mutant.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks de Vries.",
      remediation: "De Vries gave the mutation theory.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks Darwin.",
      remediation: "Darwin gave natural selection.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks Lamarck.",
      remediation: "Lamarck gave acquired characters.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks Darwin.",
      remediation: "Darwin gave natural selection.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks de Vries.",
      remediation: "De Vries gave mutation.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks Weismann.",
      remediation: "Weismann disproved it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks Darwin's small directional variations.",
      remediation: "That statement is true.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks random mutations.",
      remediation: "That statement is true.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks divergent radiation.",
      remediation: "That statement is true.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks the pea.",
      remediation: "The pea was Mendel's plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks *Drosophila*.",
      remediation: "*Drosophila* was Morgan's.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks the peppered moth.",
      remediation: "That is industrial melanism.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says too much genetics.",
      remediation: "Darwin knew no genetics.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says he denied selection.",
      remediation: "Selection was his idea.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says he relied on mutations.",
      remediation: "Mutation was de Vries's idea.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q4" },
      stem: t`The germplasm theory was given by`,
      verify: { kind: "value", inputs: {  }, params: { q: "weismann" } },
      options: [
        { key: "A", text: t`Charles Darwin`, correct: false, misconceptionId: "C04-M2", value: "darwin" },
        { key: "B", text: t`Lamarck`, correct: false, misconceptionId: "C04-M3", value: "lamarck" },
        { key: "C", text: t`August Weismann`, correct: true, value: "weismann" },
        { key: "D", text: t`Hugo de Vries`, correct: false, misconceptionId: "C04-M1", value: "de_vries" },
      ],
      solution: {
        steps: [
          t`He separated germplasm from body.`,
          t`Weismann.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q4" },
      stem: t`The theory of inheritance of acquired characters was given by`,
      verify: { kind: "value", inputs: {  }, params: { q: "lamarck" } },
      options: [
        { key: "A", text: t`Charles Darwin`, correct: false, misconceptionId: "C04-M4", value: "darwin" },
        { key: "B", text: t`Hugo de Vries`, correct: false, misconceptionId: "C04-M5", value: "de_vries" },
        { key: "C", text: t`August Weismann`, correct: false, misconceptionId: "C04-M6", value: "weismann" },
        { key: "D", text: t`Lamarck`, correct: true, value: "lamarck" },
      ],
      solution: {
        steps: [
          t`Acquired characters are inherited, he said.`,
          t`Lamarck.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(6)" },
      stem: t`Which statement about evolution is wrong?`,
      verify: { kind: "value", inputs: {  }, params: { q: "wrong" } },
      options: [
        { key: "A", text: t`Mutations are random and non-directional.`, correct: false, misconceptionId: "C04-M8", value: "mutations_random" },
        { key: "B", text: t`Adaptive radiation leads to divergent evolution.`, correct: false, misconceptionId: "C04-M9", value: "radiation_divergent" },
        { key: "C", text: t`Mutations are non-random and directional.`, correct: true, value: "mutations_directional" },
        { key: "D", text: t`Darwin's variations are small and directional.`, correct: false, misconceptionId: "C04-M7", value: "darwin_small_directional" },
      ],
      solution: {
        steps: [
          t`Mutations are random and non-directional.`,
          t`So 'directional' is wrong.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q3(5)" },
      stem: t`Hugo de Vries based his mutation theory on`,
      verify: { kind: "value", inputs: {  }, params: { q: "oenothera" } },
      options: [
        { key: "A", text: t`the garden pea`, correct: false, misconceptionId: "C04-M10", value: "pea" },
        { key: "B", text: t`*Drosophila*`, correct: false, misconceptionId: "C04-M11", value: "drosophila" },
        { key: "C", text: t`the peppered moth`, correct: false, misconceptionId: "C04-M12", value: "peppered_moth" },
        { key: "D", text: t`the evening primrose, *Oenothera*`, correct: true, value: "evening_primrose" },
      ],
      solution: {
        steps: [
          t`De Vries studied the evening primrose.`,
          t`*Oenothera*.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2025 Q. 11" },
      stem: t`A drawback of Darwinism is that it`,
      verify: { kind: "value", inputs: {  }, params: { q: "drawback" } },
      options: [
        { key: "A", text: t`relied on large mutations`, correct: false, misconceptionId: "C04-M15", value: "relied_on_mutations" },
        { key: "B", text: t`could not explain how variations arise and are inherited`, correct: true, value: "no_inheritance_explained" },
        { key: "C", text: t`relied too much on genetics`, correct: false, misconceptionId: "C04-M13", value: "too_much_genetics" },
        { key: "D", text: t`denied natural selection`, correct: false, misconceptionId: "C04-M14", value: "denied_selection" },
      ],
      solution: {
        steps: [
          t`Darwin knew nothing of genes.`,
          t`He couldn't explain inheritance of variation.`,
        ],
      },
    },
  ],
};
