import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Electrons can't vanish or appear from nowhere. How can that single fact balance a messy equation like dichromate with iron(II)?`,
    reveal: t`Electrons lost by iron must equal electrons gained by chromium. Match the rise and fall in oxidation number, and the coefficients follow.`,
  },
  explanation: {
    intuition: [
      t`Every electron lost must be gained by something else.`,
      t`So the total rise in oxidation number equals the total fall.`,
      t`Find the multipliers that make them equal.`,
      t`Then balance oxygen with water and hydrogen with $\ce{H+}$.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`Assign oxidation numbers; find what rises and what falls.`,
          t`Work out the change per formula unit (count all atoms that change).`,
          t`Multiply so the total rise = total fall.`,
          t`Balance O with $\ce{H2O}$, then H with $\ce{H+}$ (acid) or $\ce{OH-}$ (base).`,
          t`Check atoms and charge.`,
        ],
      },
    ],
    worked: {
      prompt: t`Balance the electron change in $\ce{MnO4- + Fe^{2+}}$ $\ce{-> Mn^{2+} + Fe^{3+}}$.`,
      steps: [
        t`Mn falls 5 (+7 → +2); Fe rises 1.`,
        t`So 1 $\ce{MnO4-}$ : 5 $\ce{Fe^{2+}}$.`,
      ],
      answer: t`$\ce{MnO4- + 5Fe^{2+} + 8H+}$ $\ce{-> Mn^{2+} + 5Fe^{3+} + 4H2O}$`,
    },
    visualSpec: t`Put the rise and fall on a balance and add multipliers until it levels.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Counts the change of one Cr only.",
      remediation: t`$\ce{Cr2O7^{2-}}$ has two Cr, each falling 3: 6 in all.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Forgets the 2 Cr on the right.",
      remediation: t`Two Cr atoms give two $\ce{Cr^{3+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Swaps the coefficients.",
      remediation: t`One dichromate takes six $\ce{Fe^{2+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Ignores the size of the changes.",
      remediation: "Mn falls 5, Fe rises 1: five Fe per Mn.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Uses Mn's oxidation number.",
      remediation: "Use the change, +7 to +2: 5.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Guesses a small ratio.",
      remediation: "Match the fall of 5 with five rises of 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Balances atoms but not electrons.",
      remediation: "Cu falls 2 per atom; two N rise 6 in all: 3 CuO.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Counts the N change twice.",
      remediation: t`$\ce{N2}$'s two N rise 3 each: 6 in all, matched by 3 Cu.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Leaves CuO at 1.",
      remediation: "Balance the electron changes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Balances atoms only.",
      remediation: "Match the electron changes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Sets each side's total to zero.",
      remediation: "Match the total rise with the total fall.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Gives oxidant and reductant equal coefficients.",
      remediation: "Their coefficients depend on the size of each change.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: t`Adds $\ce{O2}$ gas.`,
      remediation: "Balance O with water in solution.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: t`Adds $\ce{OH-}$ in acid.`,
      remediation: t`In acid use $\ce{H2O}$ and $\ce{H+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: t`Adds $\ce{H2O2}$.`,
      remediation: "Use water to balance O.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (D)" },
      stem: t`In $p\,\ce{Cr2O7^{2-}} + q\,\ce{Fe^{2+}}$ $\to r\,\ce{Cr^{3+}} + s\,\ce{Fe^{3+}}$ (acidic, with water), the coefficients $p, q, r, s$ are`,
      verify: { kind: "value", inputs: {  }, params: { q: "dichromate" } },
      options: [
        { key: "A", text: t`6, 1, 2, 1`, correct: false, misconceptionId: "C05-M3", value: "c_6_1_2_1" },
        { key: "B", text: t`1, 6, 1, 6`, correct: false, misconceptionId: "C05-M2", value: "c_1_6_1_6" },
        { key: "C", text: t`1, 3, 2, 3`, correct: false, misconceptionId: "C05-M1", value: "c_1_3_2_3" },
        { key: "D", text: t`1, 6, 2, 6`, correct: true, value: "c_1_6_2_6" },
      ],
      solution: {
        steps: [
          t`Cr: 2 × (6 − 3) = 6 fall; Fe: 1 rise each.`,
          t`1 $\ce{Cr2O7^{2-}}$ : 6 $\ce{Fe^{2+}}$ → 2 $\ce{Cr^{3+}}$ + 6 $\ce{Fe^{3+}}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.5" },
      stem: t`In acid, $\ce{MnO4-}$ is reduced to $\ce{Mn^{2+}}$ and $\ce{Fe^{2+}}$ oxidised to $\ce{Fe^{3+}}$. How many $\ce{Fe^{2+}}$ ions react with one $\ce{MnO4-}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "permanganate" } },
      options: [
        { key: "A", text: t`5`, correct: true, value: "five" },
        { key: "B", text: t`7`, correct: false, misconceptionId: "C05-M5", value: "seven" },
        { key: "C", text: t`2`, correct: false, misconceptionId: "C05-M6", value: "two" },
        { key: "D", text: t`1`, correct: false, misconceptionId: "C05-M4", value: "one" },
      ],
      solution: {
        steps: [
          t`Mn falls 5; Fe rises 1.`,
          t`Five $\ce{Fe^{2+}}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.6" },
      stem: t`Balance $\ce{CuO + NH3}$ $\ce{-> Cu + N2 + H2O}$. What is the coefficient of CuO?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cuo" } },
      options: [
        { key: "A", text: t`2`, correct: false, misconceptionId: "C05-M7", value: "two" },
        { key: "B", text: t`3`, correct: true, value: "three" },
        { key: "C", text: t`6`, correct: false, misconceptionId: "C05-M8", value: "six" },
        { key: "D", text: t`1`, correct: false, misconceptionId: "C05-M9", value: "one" },
      ],
      solution: {
        steps: [
          t`Cu falls 2; 2 N rise 3 each = 6.`,
          t`3 CuO : 2 $\ce{NH3}$ → 3 Cu + $\ce{N2}$ + 3 $\ce{H2O}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.4 (A)" },
      stem: t`In the oxidation number method, coefficients are chosen so that`,
      verify: { kind: "value", inputs: {  }, params: { q: "rule" } },
      options: [
        { key: "A", text: t`the oxidation numbers on each side add to zero`, correct: false, misconceptionId: "C05-M11", value: "total_zero" },
        { key: "B", text: t`the oxidant and reductant have equal coefficients`, correct: false, misconceptionId: "C05-M12", value: "equal_coefficients" },
        { key: "C", text: t`the total rise in oxidation number equals the total fall`, correct: true, value: "rise_equals_fall" },
        { key: "D", text: t`atoms balance, ignoring oxidation numbers`, correct: false, misconceptionId: "C05-M10", value: "atoms_only" },
      ],
      solution: {
        steps: [
          t`Electrons lost = electrons gained.`,
          t`Total rise = total fall.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.5" },
      stem: t`Balancing a redox reaction in acidic solution, oxygen atoms are balanced by adding`,
      verify: { kind: "value", inputs: {  }, params: { q: "acid_o" } },
      options: [
        { key: "A", text: t`$\ce{H2O2}$`, correct: false, misconceptionId: "C05-M15", value: "peroxide" },
        { key: "B", text: t`$\ce{O2}$ gas`, correct: false, misconceptionId: "C05-M13", value: "o2_gas" },
        { key: "C", text: t`$\ce{OH-}$ ions`, correct: false, misconceptionId: "C05-M14", value: "hydroxide" },
        { key: "D", text: t`$\ce{H2O}$, then balancing H with $\ce{H+}$`, correct: true, value: "water_then_h" },
      ],
      solution: {
        steps: [
          t`Add $\ce{H2O}$ where O is short.`,
          t`Then add $\ce{H+}$ to balance H.`,
        ],
      },
    },
  ],
};
