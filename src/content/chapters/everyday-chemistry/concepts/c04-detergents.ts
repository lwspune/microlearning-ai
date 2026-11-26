import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`In hard water, soap leaves grey scum on clothes, but washing powder still works. What makes detergents different?`,
    reveal: t`Their calcium and magnesium salts dissolve, so hard water cannot precipitate them.`,
  },
  explanation: {
    intuition: [
      t`Synthetic detergents clean like soap but are not fatty acid salts.`,
      t`They are anionic, cationic or nonionic.`,
      t`They work in hard water.`,
      t`Some cationic detergents also kill germs.`,
    ],
    formal: [
      {
        title: "Kinds",
        points: [
          t`Anionic: sulfonates, e.g. sodium dodecylbenzenesulfonate (washing powders).`,
          t`Cationic: quaternary ammonium salts, e.g. cetyltrimethylammonium bromide; germicidal.`,
          t`Nonionic: no ions, e.g. polyethylene glycol esters (dishwashing liquids).`,
        ],
      },
      {
        title: "Hard water",
        points: [
          t`Detergents' $\ce{Ca^{2+}}$ and $\ce{Mg^{2+}}$ salts are soluble.`,
          t`So they lather and clean in hard water.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which kind of detergent carries a positive head group?`,
      steps: [
        t`Positive head: a quaternary ammonium ion.`,
        t`Cationic.`,
      ],
      answer: t`Cationic`,
    },
    visualSpec: t`Sort detergent molecules by the charge on their water-loving head.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks a sulfonate.",
      remediation: "Sulfonates are anionic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks a nonionic ester.",
      remediation: "PEG esters carry no charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks a soap.",
      remediation: "Sodium stearate is a soap.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks a cationic detergent.",
      remediation: "CTAB carries a positive charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks a nonionic detergent.",
      remediation: "PEG esters have no charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks a soap.",
      remediation: "Soaps are not synthetic detergents.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Gives them positive charge.",
      remediation: "Nonionic means no charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Gives them negative charge.",
      remediation: "Nonionic means no charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Calls them soaps.",
      remediation: "They are synthetic, not fatty acid salts.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks detergents contain no carbon.",
      remediation: "Detergents are organic molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks they soften water by boiling.",
      remediation: "Their salts simply stay dissolved.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks scum cleans.",
      remediation: "No scum forms; that is why they work.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says food additives.",
      remediation: "Cationic detergents kill germs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says antibiotics.",
      remediation: "They are germicides used outside the body.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says fertilisers.",
      remediation: "They are germicides.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.7 (C)" },
      stem: t`Which is a cationic detergent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cationic" } },
      options: [
        { key: "A", text: t`an ester of polyethylene glycol`, correct: false, misconceptionId: "C04-M2", value: "peg_ester" },
        { key: "B", text: t`cetyltrimethylammonium bromide, a quaternary ammonium salt`, correct: true, value: "quaternary_ammonium" },
        { key: "C", text: t`sodium stearate`, correct: false, misconceptionId: "C04-M3", value: "sodium_stearate" },
        { key: "D", text: t`sodium dodecylbenzenesulfonate`, correct: false, misconceptionId: "C04-M1", value: "sulfonate" },
      ],
      solution: {
        steps: [
          t`A quaternary ammonium salt has a positive head.`,
          t`Cationic.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.7 (D)" },
      stem: t`Which is an anionic detergent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "anionic" } },
      options: [
        { key: "A", text: t`cetyltrimethylammonium bromide`, correct: false, misconceptionId: "C04-M4", value: "ctab" },
        { key: "B", text: t`an ester of polyethylene glycol`, correct: false, misconceptionId: "C04-M5", value: "peg_ester" },
        { key: "C", text: t`sodium dodecylbenzenesulfonate`, correct: true, value: "dodecylbenzenesulfonate" },
        { key: "D", text: t`sodium stearate`, correct: false, misconceptionId: "C04-M6", value: "sodium_stearate" },
      ],
      solution: {
        steps: [
          t`A sulfonate head is negative.`,
          t`Anionic.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.7 (E)" },
      stem: t`Nonionic detergents`,
      verify: { kind: "value", inputs: {  }, params: { q: "nonionic" } },
      options: [
        { key: "A", text: t`carry a negative charge`, correct: false, misconceptionId: "C04-M8", value: "negative" },
        { key: "B", text: t`are simply soaps`, correct: false, misconceptionId: "C04-M9", value: "soaps" },
        { key: "C", text: t`carry a positive charge`, correct: false, misconceptionId: "C04-M7", value: "positive" },
        { key: "D", text: t`carry no ions, like esters of polyethylene glycol`, correct: true, value: "no_ions" },
      ],
      solution: {
        steps: [
          t`No charged head.`,
          t`Nonionic.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.4 (B)" },
      stem: t`Synthetic detergents work in hard water because`,
      verify: { kind: "value", inputs: {  }, params: { q: "hard_water" } },
      options: [
        { key: "A", text: t`their calcium and magnesium salts are soluble`, correct: true, value: "soluble_salts" },
        { key: "B", text: t`they soften water by boiling it`, correct: false, misconceptionId: "C04-M11", value: "boil_water" },
        { key: "C", text: t`the scum they form does the cleaning`, correct: false, misconceptionId: "C04-M12", value: "scum_cleans" },
        { key: "D", text: t`they contain no carbon`, correct: false, misconceptionId: "C04-M10", value: "no_carbon" },
      ],
      solution: {
        steps: [
          t`Their Ca and Mg salts dissolve.`,
          t`No scum forms.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.7 (C)" },
      stem: t`Besides cleaning, cationic detergents are used as`,
      verify: { kind: "value", inputs: {  }, params: { q: "germicide" } },
      options: [
        { key: "A", text: t`fertilisers`, correct: false, misconceptionId: "C04-M15", value: "fertilisers" },
        { key: "B", text: t`germicides`, correct: true, value: "germicides" },
        { key: "C", text: t`food additives`, correct: false, misconceptionId: "C04-M13", value: "food_additives" },
        { key: "D", text: t`antibiotics`, correct: false, misconceptionId: "C04-M14", value: "antibiotics" },
      ],
      solution: {
        steps: [
          t`Quaternary ammonium salts kill microbes.`,
          t`Germicides.`,
        ],
      },
    },
  ],
};
