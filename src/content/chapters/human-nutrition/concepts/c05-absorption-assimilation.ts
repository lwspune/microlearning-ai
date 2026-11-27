import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Before a race, why is a glucose drink better than sugarcane juice?`,
    reveal: t`Glucose needs no digestion and is absorbed at once; sucrose of sugarcane juice must first be split by sucrase.`,
  },
  explanation: {
    intuition: [
      t`Only small, digested molecules can be absorbed.`,
      t`Sugars are absorbed in the small intestine.`,
      t`Absorbed food is then used by the tissues.`,
    ],
    formal: [
      {
        title: "Absorption",
        points: [
          t`**Monosaccharides** such as glucose and fructose need no digestion.`,
          t`They pass directly into the **blood capillaries of the villi**.`,
          t`**Sucrose**, a disaccharide, is first split by **sucrase** of intestinal juice into glucose and fructose.`,
        ],
      },
      {
        title: "Stomach and after",
        points: [
          t`Gastric mucosa is impermeable to most substances.`,
          t`The stomach absorbs only some water, electrolytes, alcohol and drugs like aspirin.`,
          t`**Assimilation**: absorbed food is used by the tissues; **egestion** removes undigested food.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does sugarcane juice give energy more slowly than fruit juice?`,
      steps: [
        t`Sugarcane juice has sucrose, a disaccharide.`,
        t`Sucrase must split it before absorption.`,
      ],
      answer: t`Sucrose must be digested first`,
    },
    visualSpec: t`A villus with its blood capillaries taking up glucose from the intestine.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks sugarcane juice.",
      remediation: "Sucrose needs digestion first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks starch.",
      remediation: "Starch needs digestion first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks protein.",
      remediation: "Protein needs digestion first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks salivary amylase.",
      remediation: "Amylase acts on starch.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks pepsin.",
      remediation: "Pepsin acts on proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks lipase.",
      remediation: "Lipase acts on fats.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says the stomach wall.",
      remediation: "Gastric mucosa absorbs little.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks gall bladder.",
      remediation: "It stores bile.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks bile ducts.",
      remediation: "They carry bile.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks sucrose.",
      remediation: "Sucrose is digested in the intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks starch.",
      remediation: "Starch must be digested.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks proteins.",
      remediation: "Proteins must be digested.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks absorption.",
      remediation: "Absorption is entry into blood or lymph; assimilation is use by the tissues.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks digestion.",
      remediation: "Digestion breaks food down.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks egestion.",
      remediation: "Egestion removes undigested food.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q2(A)" },
      stem: t`An athlete needs energy at once, from a drink that needs no digestion. The best choice is`,
      verify: { kind: "value", inputs: {  }, params: { q: "quick" } },
      options: [
        { key: "A", text: t`a protein drink`, correct: false, misconceptionId: "C05-M3", value: "protein_food" },
        { key: "B", text: t`Glucon-D or fruit juice`, correct: true, value: "glucose_drink" },
        { key: "C", text: t`sugarcane juice`, correct: false, misconceptionId: "C05-M1", value: "sugarcane_juice" },
        { key: "D", text: t`a starchy snack`, correct: false, misconceptionId: "C05-M2", value: "starchy_food" },
      ],
      solution: {
        steps: [
          t`Monosaccharides need no digestion.`,
          t`Glucon-D or fruit juice.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q2(A)" },
      stem: t`Sucrose of sugarcane juice is split into glucose and fructose by`,
      verify: { kind: "value", inputs: {  }, params: { q: "sucrose" } },
      options: [
        { key: "A", text: t`salivary amylase`, correct: false, misconceptionId: "C05-M4", value: "amylase_t" },
        { key: "B", text: t`pepsin`, correct: false, misconceptionId: "C05-M5", value: "pepsin_t" },
        { key: "C", text: t`lipase`, correct: false, misconceptionId: "C05-M6", value: "lipase_t" },
        { key: "D", text: t`sucrase`, correct: true, value: "sucrase_t" },
      ],
      solution: {
        steps: [
          t`Enzyme of intestinal juice.`,
          t`Sucrase.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q2(A)" },
      stem: t`Glucose and fructose are absorbed directly into the`,
      verify: { kind: "value", inputs: {  }, params: { q: "villi" } },
      options: [
        { key: "A", text: t`blood capillaries of the villi`, correct: true, value: "villi_capillaries" },
        { key: "B", text: t`stomach wall`, correct: false, misconceptionId: "C05-M7", value: "stomach_wall" },
        { key: "C", text: t`gall bladder`, correct: false, misconceptionId: "C05-M8", value: "gall_bladder" },
        { key: "D", text: t`bile ducts`, correct: false, misconceptionId: "C05-M9", value: "bile_ducts" },
      ],
      solution: {
        steps: [
          t`Absorbed in the intestine.`,
          t`Blood capillaries of villi.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q5" },
      stem: t`The gastric mucosa absorbs very little. Which of these is absorbed from the stomach?`,
      verify: { kind: "value", inputs: {  }, params: { q: "stomach" } },
      options: [
        { key: "A", text: t`Starch`, correct: false, misconceptionId: "C05-M11", value: "starch_t" },
        { key: "B", text: t`Proteins`, correct: false, misconceptionId: "C05-M12", value: "proteins_t" },
        { key: "C", text: t`Alcohol`, correct: true, value: "alcohol_t" },
        { key: "D", text: t`Sucrose`, correct: false, misconceptionId: "C05-M10", value: "sucrose_t" },
      ],
      solution: {
        steps: [
          t`Stomach absorbs little.`,
          t`Alcohol.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`Absorbed glucose reaches the tissues and is used there for energy. This use of absorbed food is`,
      verify: { kind: "value", inputs: {  }, params: { q: "assimilation" } },
      options: [
        { key: "A", text: t`assimilation`, correct: true, value: "assimilation_t" },
        { key: "B", text: t`absorption`, correct: false, misconceptionId: "C05-M13", value: "absorption_t" },
        { key: "C", text: t`digestion`, correct: false, misconceptionId: "C05-M14", value: "digestion_t" },
        { key: "D", text: t`egestion`, correct: false, misconceptionId: "C05-M15", value: "egestion_t" },
      ],
      solution: {
        steps: [
          t`Use in tissues.`,
          t`Assimilation.`,
        ],
      },
    },
  ],
};
