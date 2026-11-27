import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`One pollen grain lands on a stigma, yet two separate male gametes reach the ovule. Where does the second one come from?`,
    reveal: t`Inside the pollen grain the generative cell divides once more, forming two male gametes.`,
  },
  explanation: {
    intuition: [
      t`The pollen grain is the first cell of the **male gametophyte**.`,
      t`Its nucleus divides by mitosis into two unequal cells.`,
      t`The large **vegetative (tube) cell** will grow the pollen tube.`,
      t`The small **generative cell** divides again to form **two male gametes**.`,
    ],
    formal: [
      {
        title: "Development",
        points: [
          t`Microspore → vegetative cell + generative cell (first mitosis).`,
          t`Generative cell → two male gametes (second mitosis).`,
          t`In many plants pollen is shed at the two-celled stage; the second division happens in the tube.`,
          t`The vegetative nucleus leads the growing tube.`,
        ],
      },
      {
        title: "Counting",
        points: [
          t`One microspore mother cell, one meiosis: four pollen grains.`,
          t`Each pollen grain gives two male gametes: eight per meiosis.`,
          t`So male gametes ÷ 8 = meiotic divisions needed.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many meiotic divisions are needed to give 48 male gametes?`,
      steps: [
        t`Pollen grains: $48 \div 2 = 24$.`,
        t`Meioses: $24 \div 4 = 6$.`,
      ],
      answer: t`6`,
    },
    visualSpec: t`A pollen grain dividing step by step into a vegetative cell and two male gametes.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks the first division gives the gametes.",
      remediation: "The first mitosis gives the vegetative and generative cells; the gametes come next.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Expects four microspores.",
      remediation: "The microspore already exists; its mitosis gives two cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Expects two equal cells.",
      remediation: "The division is unequal: a large vegetative and a small generative cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks the vegetative cell.",
      remediation: "The vegetative cell grows the tube; the generative cell gives the gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks the tapetum.",
      remediation: "The tapetum feeds pollen in the anther; it forms no gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks the mother cell.",
      remediation: "The mother cell forms microspores; gametes come later, from the generative cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Counts pollen grains, not meioses.",
      remediation: t`40 pollen grains need $40 \div 4 = 10$ meioses.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Takes one meiosis per four gametes.",
      remediation: "One meiosis gives four pollen grains, which give eight gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Takes one meiosis per gamete.",
      remediation: "Each meiosis gives eight gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Takes one pollen grain per mother cell.",
      remediation: "Meiosis gives a tetrad: four per mother cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Takes two per mother cell.",
      remediation: "Meiosis gives four, not two.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Counts the gametes.",
      remediation: "25 mother cells give 100 pollen grains, which give 200 gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks the generative cell.",
      remediation: "The generative cell forms the gametes; the vegetative nucleus leads the tube.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks the male gametes.",
      remediation: "The gametes ride in the tube; the vegetative nucleus directs it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks the exine.",
      remediation: "The exine is the wall; the tube's growth is led by the vegetative nucleus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2025 Q. 21" },
      stem: t`The first mitotic division of a microspore produces`,
      verify: { kind: "value", inputs: {  }, params: { q: "first" } },
      options: [
        { key: "A", text: t`four microspores`, correct: false, misconceptionId: "C04-M2", value: "four_microspores" },
        { key: "B", text: t`two equal cells`, correct: false, misconceptionId: "C04-M3", value: "two_equal_cells" },
        { key: "C", text: t`a large vegetative cell and a small generative cell`, correct: true, value: "vegetative_generative" },
        { key: "D", text: t`two male gametes`, correct: false, misconceptionId: "C04-M1", value: "two_male_gametes" },
      ],
      solution: {
        steps: [
          t`The first mitosis is unequal.`,
          t`A large vegetative and a small generative cell.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2025 Q. 21" },
      stem: t`The two male gametes of a pollen grain are formed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "gametes" } },
      options: [
        { key: "A", text: t`the vegetative cell`, correct: false, misconceptionId: "C04-M4", value: "vegetative_cell" },
        { key: "B", text: t`the tapetum`, correct: false, misconceptionId: "C04-M5", value: "tapetum_cells" },
        { key: "C", text: t`the microspore mother cell`, correct: false, misconceptionId: "C04-M6", value: "mother_cell" },
        { key: "D", text: t`the generative cell`, correct: true, value: "generative_cell" },
      ],
      solution: {
        steps: [
          t`The generative cell divides by mitosis.`,
          t`It gives two male gametes.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2026 Q. 2(i)" },
      stem: t`How many meiotic divisions are needed to produce 80 male gametes in an angiosperm?`,
      verify: { kind: "value", inputs: { g: "80" }, params: { q: "meioses" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C04-M8", value: "20" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C04-M9", value: "80" },
        { key: "C", text: t`$10$`, correct: true, value: "10" },
        { key: "D", text: t`$40$`, correct: false, misconceptionId: "C04-M7", value: "40" },
      ],
      solution: {
        steps: [
          t`Pollen grains: $80 \div 2 = 40$.`,
          t`Meioses: $40 \div 4 = 10$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`How many pollen grains do 25 microspore mother cells produce?`,
      verify: { kind: "value", inputs: { n: "25" }, params: { q: "grains" } },
      options: [
        { key: "A", text: t`$25$`, correct: false, misconceptionId: "C04-M10", value: "25" },
        { key: "B", text: t`$50$`, correct: false, misconceptionId: "C04-M11", value: "50" },
        { key: "C", text: t`$200$`, correct: false, misconceptionId: "C04-M12", value: "200" },
        { key: "D", text: t`$100$`, correct: true, value: "100" },
      ],
      solution: {
        steps: [
          t`Each mother cell gives a tetrad of 4.`,
          t`$25 \times 4 = 100$`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`The growth of the pollen tube is directed by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "tube" } },
      options: [
        { key: "A", text: t`exine`, correct: false, misconceptionId: "C04-M15", value: "exine" },
        { key: "B", text: t`vegetative (tube) nucleus`, correct: true, value: "vegetative_nucleus" },
        { key: "C", text: t`generative cell`, correct: false, misconceptionId: "C04-M13", value: "generative_cell" },
        { key: "D", text: t`male gametes`, correct: false, misconceptionId: "C04-M14", value: "male_gametes" },
      ],
      solution: {
        steps: [
          t`The tube grows from the vegetative cell.`,
          t`Its vegetative nucleus leads the tube.`,
        ],
      },
    },
  ],
};
