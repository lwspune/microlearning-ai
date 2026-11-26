import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`A battery keeps oxidation and reduction in separate compartments, joined by a wire. Can we split a redox equation the same way to balance it?`,
    reveal: t`Yes. Write the oxidation and reduction as separate half reactions, balance each with electrons, then add them so the electrons cancel.`,
  },
  explanation: {
    intuition: [
      t`Split the reaction into an oxidation half and a reduction half.`,
      t`Balance each half for atoms, then for charge using electrons.`,
      t`Multiply so both halves have the same number of electrons.`,
      t`Add them; electrons cancel.`,
    ],
    formal: [
      {
        title: "Steps (acid)",
        points: [
          t`Balance atoms other than O and H.`,
          t`Balance O with $\ce{H2O}$ and H with $\ce{H+}$.`,
          t`Add electrons to the more positive side to balance charge.`,
          t`Equalise electrons, add, and cancel.`,
          t`In base, add $\ce{OH-}$ to both sides to turn $\ce{H+}$ into water.`,
        ],
      },
    ],
    worked: {
      prompt: t`Balance $\ce{Cr2O7^{2-} -> Cr^{3+}}$ in acid.`,
      steps: [
        t`$\ce{Cr2O7^{2-} + 14H+}$ $\ce{-> 2Cr^{3+} + 7H2O}$.`,
        t`Charge: 12 left, 6 right: add $6\ce{e-}$ on the left.`,
      ],
      answer: t`$\ce{Cr2O7^{2-} + 14H+ + 6e-}$ $\ce{-> 2Cr^{3+} + 7H2O}$`,
    },
    visualSpec: t`Balance two half reactions on separate lines, then slide them together so the electrons cancel.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Uses Mn's oxidation number.",
      remediation: "Balance charge: −1 + 8 − n = +2, so n = 5.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Uses the number of waters.",
      remediation: "Electrons balance charge, not the water count.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Uses the number of $\ce{H+}$.`,
      remediation: "Balance charge: 5 electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Leaves the iron half alone.",
      remediation: "Five electrons gained need five electrons lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Inverts the factor.",
      remediation: "Multiply the 1-electron half by 5.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Doubles it.",
      remediation: "Match 5 electrons: multiply by 5.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Takes a 1 : 1 ratio.",
      remediation: t`Mn gives 2 electrons; each $\ce{ClO3-}$ takes 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Inverts the ratio.",
      remediation: t`Two $\ce{ClO3-}$ take Mn's two electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Uses Mn's +7 change.",
      remediation: "Mn goes +2 → +4: two electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Adds electrons only to the oxidation half.",
      remediation: "Both halves are balanced with electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Always adds electrons to the products.",
      remediation: "In a reduction half, electrons are reactants.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks electrons balance oxygen.",
      remediation: "Water balances O; electrons balance charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: t`Replaces $\ce{H+}$ by $\ce{O2}$.`,
      remediation: t`Add $\ce{OH-}$ to both sides.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Removes all the water.",
      remediation: t`Water stays; $\ce{OH-}$ neutralises the $\ce{H+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Adds $\ce{H+}$ in basic solution.`,
      remediation: t`Basic solutions use $\ce{OH-}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.4 (B)" },
      stem: t`In $\ce{MnO4- + 8H+ + ?e-}$ $\ce{-> Mn^{2+} + 4H2O}$, how many electrons are needed?`,
      verify: { kind: "value", inputs: {  }, params: { q: "electrons" } },
      options: [
        { key: "A", text: t`7`, correct: false, misconceptionId: "C06-M1", value: "seven" },
        { key: "B", text: t`5`, correct: true, value: "five" },
        { key: "C", text: t`8`, correct: false, misconceptionId: "C06-M3", value: "eight" },
        { key: "D", text: t`4`, correct: false, misconceptionId: "C06-M2", value: "four" },
      ],
      solution: {
        steps: [
          t`Left: −1 + 8 = +7; right: +2.`,
          t`Add 5 electrons on the left.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.5" },
      stem: t`To combine $\ce{MnO4-}$ → $\ce{Mn^{2+}}$ (5 electrons gained) with $\ce{Fe^{2+} -> Fe^{3+} + e-}$, the iron half reaction is multiplied by`,
      verify: { kind: "value", inputs: {  }, params: { q: "multiply" } },
      options: [
        { key: "A", text: t`$\tfrac15$`, correct: false, misconceptionId: "C06-M5", value: "one_fifth" },
        { key: "B", text: t`1`, correct: false, misconceptionId: "C06-M4", value: "one" },
        { key: "C", text: t`5`, correct: true, value: "five" },
        { key: "D", text: t`2`, correct: false, misconceptionId: "C06-M6", value: "two" },
      ],
      solution: {
        steps: [
          t`Reduction gains 5; each Fe loses 1.`,
          t`Multiply the iron half by 5.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.7" },
      stem: t`Balancing $\ce{Mn^{2+} + ClO3-}$ $\ce{-> MnO2 + ClO2}$ in acid, how many $\ce{ClO3-}$ ions react per $\ce{Mn^{2+}}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chlorate" } },
      options: [
        { key: "A", text: t`5`, correct: false, misconceptionId: "C06-M9", value: "five_to_one" },
        { key: "B", text: t`1`, correct: false, misconceptionId: "C06-M7", value: "one_to_one" },
        { key: "C", text: t`$\tfrac12$`, correct: false, misconceptionId: "C06-M8", value: "one_to_two" },
        { key: "D", text: t`2`, correct: true, value: "two_to_one" },
      ],
      solution: {
        steps: [
          t`Mn: +2 → +4 loses 2; Cl: +5 → +4 gains 1.`,
          t`2 $\ce{ClO3-}$ per $\ce{Mn^{2+}}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.8" },
      stem: t`In the half-reaction method, electrons are added`,
      verify: { kind: "value", inputs: {  }, params: { q: "where" } },
      options: [
        { key: "A", text: t`to the more positive side of each half reaction, to balance charge`, correct: true, value: "positive_side" },
        { key: "B", text: t`to balance the oxygen atoms`, correct: false, misconceptionId: "C06-M12", value: "balance_oxygen" },
        { key: "C", text: t`to the oxidation half reaction only`, correct: false, misconceptionId: "C06-M10", value: "oxidation_only" },
        { key: "D", text: t`always to the product side`, correct: false, misconceptionId: "C06-M11", value: "products_always" },
      ],
      solution: {
        steps: [
          t`Electrons go where positive charge is greater.`,
          t`That balances charge.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.4 (B)" },
      stem: t`To balance a half reaction in basic solution after balancing it as if acidic, you`,
      verify: { kind: "value", inputs: {  }, params: { q: "basic" } },
      options: [
        { key: "A", text: t`replace each $\ce{H+}$ by $\ce{O2}$`, correct: false, misconceptionId: "C06-M13", value: "replace_with_o2" },
        { key: "B", text: t`add $\ce{OH-}$ to both sides to turn each $\ce{H+}$ into water`, correct: true, value: "add_oh" },
        { key: "C", text: t`remove all the water`, correct: false, misconceptionId: "C06-M14", value: "remove_water" },
        { key: "D", text: t`add $\ce{H+}$ to both sides`, correct: false, misconceptionId: "C06-M15", value: "add_h" },
      ],
      solution: {
        steps: [
          t`Add $\ce{OH-}$ to both sides.`,
          t`$\ce{H+ + OH- -> H2O}$.`,
        ],
      },
    },
  ],
};
