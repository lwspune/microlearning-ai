import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Pollen grains millions of years old survive in rocks, their patterns still clear. What makes the pollen wall so tough?`,
    reveal: t`Its outer layer, the exine, is made of sporopollenin, one of the most resistant natural substances known.`,
  },
  explanation: {
    intuition: [
      t`**Microsporogenesis** is the making of microspores (pollen grains) in the anther.`,
      t`A typical anther has two lobes and four pollen sacs: bilobed and tetrasporangiate.`,
      t`In each sac, diploid microspore mother cells divide by meiosis.`,
      t`Each gives a tetrad of four haploid microspores.`,
    ],
    formal: [
      {
        title: "The anther wall",
        points: [
          t`Four layers, outside in: epidermis, endothecium, middle layers and **tapetum**.`,
          t`The tapetum is the innermost layer; it **nourishes** the developing pollen.`,
          t`The sporogenous tissue inside forms the microspore mother cells.`,
        ],
      },
      {
        title: "The pollen wall",
        points: [
          t`The outer **exine** is made of **sporopollenin**, resistant to heat, acids and enzymes.`,
          t`**Germ pores** are thin places in the exine where the pollen tube emerges.`,
          t`The inner **intine** is thin, made of cellulose and pectin.`,
        ],
      },
    ],
    worked: {
      prompt: t`An anther has 12 microspore mother cells in one pollen sac. How many microspores will that sac produce?`,
      steps: [
        t`Each microspore mother cell undergoes one meiosis.`,
        t`Each meiosis gives a tetrad of 4.`,
        t`$12 \times 4 = 48$`,
      ],
      answer: t`48 microspores`,
    },
    visualSpec: t`A cross-section of an anther whose wall layers light up one by one, tapetum last.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks the endothecium.",
      remediation: "The endothecium helps the anther split open; the tapetum feeds the pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks the epidermis.",
      remediation: "The epidermis protects; the innermost tapetum feeds the pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks the middle layers.",
      remediation: "The middle layers break down; the tapetum feeds the pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks cellulose.",
      remediation: "Cellulose is in the intine; the exine is sporopollenin.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks pectin.",
      remediation: "Pectin is in the intine; the exine is sporopollenin.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks lignin.",
      remediation: "Lignin hardens wood; the exine is sporopollenin.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks it divides by mitosis into two.",
      remediation: "Microspores are haploid, so the mother cell divides by meiosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks mitosis gives four.",
      remediation: "Mitosis would keep cells diploid; meiosis gives four haploid microspores.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks meiosis gives two.",
      remediation: "One meiosis gives a tetrad: four microspores.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks the micropyle.",
      remediation: "The micropyle is the ovule's opening; pollen tubes leave through germ pores.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks the hilum.",
      remediation: "The hilum is a scar on a seed; pollen has germ pores.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks the tube can leave anywhere.",
      remediation: "The sporopollenin exine is too tough; the tube leaves at a germ pore.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Calls it one-lobed with two sacs.",
      remediation: "A typical anther has two lobes, each with two sacs.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Calls it two-lobed with two sacs.",
      remediation: "Each lobe has two pollen sacs, so there are four.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Calls it four-lobed.",
      remediation: "There are two lobes, with four sporangia in all.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(6)" },
      stem: t`The layer of the anther wall that supplies nourishment to the developing pollen grains is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "tapetum" } },
      options: [
        { key: "A", text: t`epidermis`, correct: false, misconceptionId: "C03-M2", value: "epidermis" },
        { key: "B", text: t`middle layers`, correct: false, misconceptionId: "C03-M3", value: "middle_layers" },
        { key: "C", text: t`tapetum`, correct: true, value: "tapetum" },
        { key: "D", text: t`endothecium`, correct: false, misconceptionId: "C03-M1", value: "endothecium" },
      ],
      solution: {
        steps: [
          t`The tapetum is the innermost anther wall layer.`,
          t`It nourishes the developing pollen.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2025 Q. 1(viii)" },
      stem: t`The substance in the exine that protects pollen grains from chemicals is`,
      verify: { kind: "value", inputs: {  }, params: { q: "exine" } },
      options: [
        { key: "A", text: t`pectin`, correct: false, misconceptionId: "C03-M5", value: "pectin" },
        { key: "B", text: t`lignin`, correct: false, misconceptionId: "C03-M6", value: "lignin" },
        { key: "C", text: t`sporopollenin`, correct: true, value: "sporopollenin" },
        { key: "D", text: t`cellulose`, correct: false, misconceptionId: "C03-M4", value: "cellulose" },
      ],
      solution: {
        steps: [
          t`The exine is made of sporopollenin.`,
          t`It resists chemicals.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`A microspore mother cell in the anther divides by`,
      verify: { kind: "value", inputs: {  }, params: { q: "mmc" } },
      options: [
        { key: "A", text: t`mitosis, forming two pollen grains`, correct: false, misconceptionId: "C03-M7", value: "mitosis_two" },
        { key: "B", text: t`mitosis, forming four pollen grains`, correct: false, misconceptionId: "C03-M8", value: "mitosis_four" },
        { key: "C", text: t`meiosis, forming two microspores`, correct: false, misconceptionId: "C03-M9", value: "meiosis_two" },
        { key: "D", text: t`meiosis, forming a tetrad of four haploid microspores`, correct: true, value: "meiosis_tetrad" },
      ],
      solution: {
        steps: [
          t`Microspores are haploid.`,
          t`So the mother cell divides by meiosis into a tetrad.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`The pollen tube grows out of the pollen grain through`,
      verify: { kind: "value", inputs: {  }, params: { q: "pores" } },
      options: [
        { key: "A", text: t`the hilum`, correct: false, misconceptionId: "C03-M11", value: "hilum" },
        { key: "B", text: t`any point of the thick exine`, correct: false, misconceptionId: "C03-M12", value: "anywhere_exine" },
        { key: "C", text: t`a germ pore, where the exine is thin or absent`, correct: true, value: "germ_pores" },
        { key: "D", text: t`the micropyle`, correct: false, misconceptionId: "C03-M10", value: "micropyle" },
      ],
      solution: {
        steps: [
          t`The exine is thin or absent at the germ pores.`,
          t`The tube grows out there.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`A typical angiosperm anther is`,
      verify: { kind: "value", inputs: {  }, params: { q: "lobes" } },
      options: [
        { key: "A", text: t`bilobed and tetrasporangiate`, correct: true, value: "bilobed_tetrasporangiate" },
        { key: "B", text: t`monolobed and bisporangiate`, correct: false, misconceptionId: "C03-M13", value: "monolobed_bisporangiate" },
        { key: "C", text: t`bilobed and bisporangiate`, correct: false, misconceptionId: "C03-M14", value: "bilobed_bisporangiate" },
        { key: "D", text: t`four-lobed with one sporangium`, correct: false, misconceptionId: "C03-M15", value: "tetralobed" },
      ],
      solution: {
        steps: [
          t`Two lobes, each with two pollen sacs.`,
          t`Bilobed and tetrasporangiate.`,
        ],
      },
    },
  ],
};
