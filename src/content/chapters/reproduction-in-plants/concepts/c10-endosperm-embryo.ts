import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Tender coconut water is a liquid, but the white coconut meat around it is solid. Are they different tissues?`,
    reveal: t`Both are endosperm: the water is free-nuclear endosperm, the meat the cellular endosperm that forms later.`,
  },
  explanation: {
    intuition: [
      t`After fertilization, the endosperm forms first, to feed the embryo.`,
      t`The **primary endosperm nucleus** ($3n$) divides to form the endosperm.`,
      t`The zygote then grows into the **embryo**.`,
    ],
    formal: [
      {
        title: "Endosperm types",
        points: [
          t`**Nuclear**: free nuclear divisions first, walls later; the most common type.`,
          t`Coconut water is free-nuclear endosperm; the meat is cellular.`,
          t`**Cellular**: every division is followed by a wall.`,
          t`**Helobial**: a mix, with the first division making two cells.`,
        ],
      },
      {
        title: "The embryo",
        points: [
          t`A dicot embryo has two cotyledons on an axis: plumule above, radicle below.`,
          t`A monocot embryo has one shield-shaped cotyledon, the **scutellum**.`,
          t`Its plumule is sheathed by the **coleoptile**, its radicle by the **coleorhiza**.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a maize grain, which sheath covers the young root of the embryo?`,
      steps: [
        t`Maize is a monocot.`,
        t`The radicle's sheath in a monocot is the coleorhiza.`,
      ],
      answer: t`The coleorhiza`,
    },
    visualSpec: t`A monocot embryo with its scutellum, coleoptile and coleorhiza labelled as they appear.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Picks the coleorhiza.",
      remediation: "The coleorhiza covers the radicle; the plumule's sheath is the coleoptile.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Picks the scutellum.",
      remediation: "The scutellum is the cotyledon.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Picks the perisperm.",
      remediation: "Perisperm is leftover nucellus, not part of the embryo.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Calls it cellular endosperm.",
      remediation: "Coconut water has free nuclei with no walls.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Calls it perisperm.",
      remediation: "Coconut water forms from the primary endosperm nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Calls it the embryo.",
      remediation: "The embryo is small; the water is endosperm.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Picks the coleoptile.",
      remediation: "The coleoptile is the plumule's sheath; the cotyledon is the scutellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Picks the coleorhiza.",
      remediation: "The coleorhiza is the radicle's sheath.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Picks the plumule.",
      remediation: "The plumule is the shoot tip; the cotyledon is the scutellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks the embryo comes first.",
      remediation: "The endosperm forms first, to feed the embryo.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Thinks the seed coat comes first.",
      remediation: "The seed coat forms from the integuments later.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Thinks the fruit comes first.",
      remediation: "The fruit forms from the ovary; the endosperm starts first inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Picks cellular.",
      remediation: "Nuclear endosperm is the most common.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Picks helobial.",
      remediation: "Helobial is less common; nuclear is the most common.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Picks perisperm.",
      remediation: "Perisperm is not endosperm.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2024 Q. 1(i)" },
      stem: t`In a monocot embryo, the protective sheath of the plumule is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "coleoptile" } },
      options: [
        { key: "A", text: t`coleorhiza`, correct: false, misconceptionId: "C10-M1", value: "coleorhiza" },
        { key: "B", text: t`scutellum`, correct: false, misconceptionId: "C10-M2", value: "scutellum" },
        { key: "C", text: t`perisperm`, correct: false, misconceptionId: "C10-M3", value: "perisperm" },
        { key: "D", text: t`coleoptile`, correct: true, value: "coleoptile" },
      ],
      solution: {
        steps: [
          t`The plumule is the young shoot.`,
          t`In monocots its sheath is the coleoptile.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2025 Q. 27" },
      stem: t`Tender coconut water is`,
      verify: { kind: "value", inputs: {  }, params: { q: "coconut" } },
      options: [
        { key: "A", text: t`free-nuclear endosperm`, correct: true, value: "free_nuclear" },
        { key: "B", text: t`cellular endosperm`, correct: false, misconceptionId: "C10-M4", value: "cellular_endosperm" },
        { key: "C", text: t`perisperm`, correct: false, misconceptionId: "C10-M5", value: "perisperm" },
        { key: "D", text: t`the embryo`, correct: false, misconceptionId: "C10-M6", value: "embryo" },
      ],
      solution: {
        steps: [
          t`Coconut water has free nuclei, without walls.`,
          t`Free-nuclear endosperm.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`The single, shield-shaped cotyledon of a monocot embryo is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "scutellum" } },
      options: [
        { key: "A", text: t`plumule`, correct: false, misconceptionId: "C10-M9", value: "plumule" },
        { key: "B", text: t`scutellum`, correct: true, value: "scutellum" },
        { key: "C", text: t`coleoptile`, correct: false, misconceptionId: "C10-M7", value: "coleoptile" },
        { key: "D", text: t`coleorhiza`, correct: false, misconceptionId: "C10-M8", value: "coleorhiza" },
      ],
      solution: {
        steps: [
          t`A monocot embryo has one cotyledon.`,
          t`It is shield-shaped: the scutellum.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`In most angiosperms, which develops first after fertilization?`,
      verify: { kind: "value", inputs: {  }, params: { q: "first" } },
      options: [
        { key: "A", text: t`the seed coat`, correct: false, misconceptionId: "C10-M11", value: "seed_coat_first" },
        { key: "B", text: t`the fruit`, correct: false, misconceptionId: "C10-M12", value: "fruit_first" },
        { key: "C", text: t`the endosperm, which feeds the embryo`, correct: true, value: "endosperm_first" },
        { key: "D", text: t`the embryo`, correct: false, misconceptionId: "C10-M10", value: "embryo_first" },
      ],
      solution: {
        steps: [
          t`The endosperm forms first.`,
          t`It feeds the developing embryo.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2026 Q. 30" },
      stem: t`The most common type of endosperm development in angiosperms is`,
      verify: { kind: "value", inputs: {  }, params: { q: "common" } },
      options: [
        { key: "A", text: t`nuclear`, correct: true, value: "nuclear" },
        { key: "B", text: t`cellular`, correct: false, misconceptionId: "C10-M13", value: "cellular" },
        { key: "C", text: t`helobial`, correct: false, misconceptionId: "C10-M14", value: "helobial" },
        { key: "D", text: t`perisperm`, correct: false, misconceptionId: "C10-M15", value: "perisperm" },
      ],
      solution: {
        steps: [
          t`Free nuclear divisions come first in most angiosperms.`,
          t`Nuclear endosperm is the most common.`,
        ],
      },
    },
  ],
};
