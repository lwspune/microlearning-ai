import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Pinch the tip off a basil plant and it grows bushy. Why does removing one bud wake up the others?`,
    reveal: t`The tip makes auxin, which flows down and holds the side buds back. Remove the tip, and the side buds grow.`,
  },
  explanation: {
    intuition: [
      t`Plant hormones are chemicals made in tiny amounts that control growth.`,
      t`**Auxins** and **gibberellins** mainly promote growth.`,
      t`They act far from where they are made.`,
    ],
    formal: [
      {
        title: "Auxins",
        points: [
          t`The main natural auxin is **IAA**, indole-3-acetic acid, made from **tryptophan**.`,
          t`It causes cell elongation and **apical dominance**.`,
          t`Synthetic auxins (IBA, NAA) make cuttings root.`,
        ],
      },
      {
        title: "Gibberellins",
        points: [
          t`They elongate stems; in rosette plants such as cabbage and beet they cause **bolting**.`,
          t`They break seed dormancy and can replace the cold treatment for flowering.`,
          t`Gibberellins make grapes larger.`,
        ],
      },
    ],
    worked: {
      prompt: t`A gardener cuts off a plant's shoot tip. Why do side branches appear?`,
      steps: [
        t`The tip was the source of auxin.`,
        t`Without auxin, apical dominance ends.`,
      ],
      answer: t`Apical dominance is removed`,
    },
    visualSpec: t`A shoot tip releasing auxin downwards, side buds dormant until the tip is cut.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks IBA.",
      remediation: "IBA is a synthetic auxin.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks 'indole amino acid'.",
      remediation: "IAA is an acid of indole.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks inositol.",
      remediation: "IAA is indole-based.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks gibberellin.",
      remediation: "Gibberellin lengthens stems.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks ethylene.",
      remediation: "Ethylene ripens fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks abscisic acid.",
      remediation: "ABA inhibits growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks tyrosine.",
      remediation: "IAA comes from tryptophan.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks glycine.",
      remediation: "IAA comes from tryptophan.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks methionine.",
      remediation: "Methionine makes ethylene.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks cytokinin.",
      remediation: "Cytokinin breaks apical dominance.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks gibberellin.",
      remediation: "Gibberellin lengthens stems.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks ethylene.",
      remediation: "Ethylene ripens fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks auxin.",
      remediation: "Auxin causes apical dominance.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks cytokinin.",
      remediation: "Cytokinin drives cell division.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks abscisic acid.",
      remediation: "ABA inhibits growth.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2024 Q. 2(iv)" },
      stem: t`IAA stands for`,
      verify: { kind: "value", inputs: {  }, params: { q: "iaa" } },
      options: [
        { key: "A", text: t`indole amino acid`, correct: false, misconceptionId: "C04-M2", value: "indole_amino" },
        { key: "B", text: t`inositol acetic acid`, correct: false, misconceptionId: "C04-M3", value: "inositol_acetic" },
        { key: "C", text: t`indole-3-acetic acid`, correct: true, value: "indole_acetic" },
        { key: "D", text: t`indole-3-butyric acid`, correct: false, misconceptionId: "C04-M1", value: "indole_butyric" },
      ],
      solution: {
        steps: [
          t`The main natural auxin.`,
          t`Indole-3-acetic acid.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(2)" },
      stem: t`Gardeners dip stem cuttings in a hormone powder to make them root. The hormone is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cuttings" } },
      options: [
        { key: "A", text: t`Gibberellin`, correct: false, misconceptionId: "C04-M4", value: "gibberellin_h" },
        { key: "B", text: t`Ethylene`, correct: false, misconceptionId: "C04-M5", value: "ethylene_h" },
        { key: "C", text: t`Abscisic acid`, correct: false, misconceptionId: "C04-M6", value: "abscisic_h" },
        { key: "D", text: t`Auxin`, correct: true, value: "auxin_h" },
      ],
      solution: {
        steps: [
          t`Root-forming hormone.`,
          t`Auxin.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(2)" },
      stem: t`The primary precursor of IAA in plants is the amino acid`,
      verify: { kind: "value", inputs: {  }, params: { q: "precursor" } },
      options: [
        { key: "A", text: t`glycine`, correct: false, misconceptionId: "C04-M8", value: "glycine_aa" },
        { key: "B", text: t`methionine`, correct: false, misconceptionId: "C04-M9", value: "methionine_aa" },
        { key: "C", text: t`tryptophan`, correct: true, value: "tryptophan_aa" },
        { key: "D", text: t`tyrosine`, correct: false, misconceptionId: "C04-M7", value: "tyrosine_aa" },
      ],
      solution: {
        steps: [
          t`IAA is made from it.`,
          t`Tryptophan.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`The apical bud suppresses the growth of lateral buds. This apical dominance is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "apical" } },
      options: [
        { key: "A", text: t`Cytokinin`, correct: false, misconceptionId: "C04-M10", value: "cytokinin_h" },
        { key: "B", text: t`Gibberellin`, correct: false, misconceptionId: "C04-M11", value: "gibberellin_h" },
        { key: "C", text: t`Ethylene`, correct: false, misconceptionId: "C04-M12", value: "ethylene_h" },
        { key: "D", text: t`Auxin`, correct: true, value: "auxin_h" },
      ],
      solution: {
        steps: [
          t`The tip's auxin holds side buds back.`,
          t`Auxin.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(7)" },
      stem: t`Just before flowering, the internodes of cabbage and beet elongate (bolting). This is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "bolting" } },
      options: [
        { key: "A", text: t`Abscisic acid`, correct: false, misconceptionId: "C04-M15", value: "abscisic_h" },
        { key: "B", text: t`Gibberellin`, correct: true, value: "gibberellin_h" },
        { key: "C", text: t`Auxin`, correct: false, misconceptionId: "C04-M13", value: "auxin_h" },
        { key: "D", text: t`Cytokinin`, correct: false, misconceptionId: "C04-M14", value: "cytokinin_h" },
      ],
      solution: {
        steps: [
          t`Internodes elongate before flowering.`,
          t`Gibberellin.`,
        ],
      },
    },
  ],
};
