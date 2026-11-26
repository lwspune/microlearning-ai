import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`In $\ce{CO}$ carbon is +2; in $\ce{CO2}$ +4; in $\ce{CH4}$ −4. How can one element have so many 'charges'?`,
    reveal: t`Oxidation numbers are bookkeeping charges: each bond's electrons are given to the more electronegative atom, and they vary with partners.`,
  },
  explanation: {
    intuition: [
      t`An oxidation number is the charge an atom would carry if every bond were ionic.`,
      t`Simple rules fix most of them.`,
      t`The numbers in a species add up to its overall charge.`,
      t`Unknown numbers follow from that sum.`,
    ],
    formal: [
      {
        title: "Rules",
        points: [
          t`Free elements: 0.`,
          t`O: −2 (peroxides −1, superoxides $-\tfrac12$, in $\ce{OF2}$ +2).`,
          t`H: +1 (in metal hydrides −1).`,
          t`F: always −1; group 1 metals +1, group 2 +2.`,
          t`Sum = 0 for a compound, = charge for an ion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the oxidation number of Cr in $\ce{K2Cr2O7}$.`,
      steps: [
        t`$2(+1) + 2x + 7(-2) = 0$.`,
        t`$2x = 12$, so $x = +6$.`,
      ],
      answer: t`+6`,
    },
    visualSpec: t`Fill in known oxidation numbers and balance the sum to find the unknown one.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Counts one O atom.",
      remediation: "Multiply −2 by the number of O atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Flips the sign.",
      remediation: "Positive H and negative O leave the central atom positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Leaves out the H atoms.",
      remediation: "Include every atom: 2 H at +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Always uses −2 for O.",
      remediation: t`In a superoxide, $\ce{O2-}$, each O is $-\tfrac12$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Uses the peroxide value.",
      remediation: t`Peroxide $\ce{O2^{2-}}$ is −1; superoxide $\ce{O2-}$ is $-\tfrac12$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Gives 0.",
      remediation: "Only free elements are 0.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Leaves out K.",
      remediation: t`K is +1: $1 + x - 8 = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Takes K as +2.",
      remediation: "Group 1 metals are +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Ignores the ion's charge.",
      remediation: t`The sum must equal −2 for $\ce{SO4^{2-}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Counts three O atoms.",
      remediation: "Sulfate has four O atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Adds the charge the wrong way.",
      remediation: t`$x - 8 = -2$, so $x = +6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Averages the two Cl atoms.",
      remediation: "The two Cl atoms are bonded differently: −1 and +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Swaps them.",
      remediation: "Cl on Ca is chloride (−1); Cl on O is hypochlorite (+1).",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Makes every Cl −1.",
      remediation: "The Cl bonded to O is +1.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (F)" },
      stem: t`The oxidation number of carbon in $\ce{H2CO3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "carbonic" } },
      options: [
        { key: "A", text: t`+2`, correct: false, misconceptionId: "C02-M1", value: "plus_2" },
        { key: "B", text: t`+4`, correct: true, value: "plus_4" },
        { key: "C", text: t`−4`, correct: false, misconceptionId: "C02-M2", value: "minus_4" },
        { key: "D", text: t`+6`, correct: false, misconceptionId: "C02-M3", value: "plus_6" },
      ],
      solution: {
        steps: [
          t`$2(+1) + x + 3(-2) = 0$.`,
          t`$x = +4$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (I)" },
      stem: t`The oxidation number of oxygen in a superoxide, such as $\ce{KO2}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "superoxide" } },
      options: [
        { key: "A", text: t`−2`, correct: false, misconceptionId: "C02-M4", value: "minus_2" },
        { key: "B", text: t`−1`, correct: false, misconceptionId: "C02-M5", value: "minus_1" },
        { key: "C", text: t`$-\tfrac12$`, correct: true, value: "minus_half" },
        { key: "D", text: t`0`, correct: false, misconceptionId: "C02-M6", value: "zero" },
      ],
      solution: {
        steps: [
          t`$\ce{O2-}$: $2x = -1$.`,
          t`$x = -\tfrac12$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.2" },
      stem: t`The oxidation number of Mn in $\ce{KMnO4}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "permanganate" } },
      options: [
        { key: "A", text: t`+6`, correct: false, misconceptionId: "C02-M8", value: "plus_6" },
        { key: "B", text: t`−7`, correct: false, misconceptionId: "C02-M2", value: "minus_7" },
        { key: "C", text: t`+8`, correct: false, misconceptionId: "C02-M7", value: "plus_8" },
        { key: "D", text: t`+7`, correct: true, value: "plus_7" },
      ],
      solution: {
        steps: [
          t`$+1 + x + 4(-2) = 0$.`,
          t`$x = +7$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.1" },
      stem: t`The oxidation number of S in $\ce{SO4^{2-}}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sulfate" } },
      options: [
        { key: "A", text: t`+6`, correct: true, value: "plus_6" },
        { key: "B", text: t`+10`, correct: false, misconceptionId: "C02-M11", value: "plus_10" },
        { key: "C", text: t`+8`, correct: false, misconceptionId: "C02-M9", value: "plus_8" },
        { key: "D", text: t`+4`, correct: false, misconceptionId: "C02-M10", value: "plus_4" },
      ],
      solution: {
        steps: [
          t`$x + 4(-2) = -2$.`,
          t`$x = +6$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (A)" },
      stem: t`In bleaching powder, $\ce{Cl^a-Ca-O-Cl^b}$, the oxidation numbers of the two chlorine atoms are`,
      verify: { kind: "value", inputs: {  }, params: { q: "bleaching" } },
      options: [
        { key: "A", text: t`−1 for each`, correct: false, misconceptionId: "C02-M14", value: "both_minus1" },
        { key: "B", text: t`−1 for $\mathrm{Cl^a}$ and +1 for $\mathrm{Cl^b}$`, correct: true, value: "a_minus1_b_plus1" },
        { key: "C", text: t`0 for each`, correct: false, misconceptionId: "C02-M12", value: "both_zero" },
        { key: "D", text: t`+1 for $\mathrm{Cl^a}$ and −1 for $\mathrm{Cl^b}$`, correct: false, misconceptionId: "C02-M13", value: "a_plus1_b_minus1" },
      ],
      solution: {
        steps: [
          t`$\mathrm{Cl^a}$ is chloride on Ca: −1.`,
          t`$\mathrm{Cl^b}$ is bonded to O, as in hypochlorite: +1.`,
        ],
      },
    },
  ],
};
