import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Sodium oxide dissolves in water to make a strong alkali, while sulfur trioxide makes a strong acid. Both are oxides of period 3. Why are they opposites?`,
    reveal: t`Metallic character falls across the period. Metal oxides are basic; nonmetal oxides are acidic; aluminium's, in between, is amphoteric.`,
  },
  explanation: {
    intuition: [
      t`Metallic character is how readily an atom loses electrons.`,
      t`It falls across a period and rises down a group.`,
      t`Metal oxides are basic, nonmetal oxides acidic.`,
      t`Some, like $\ce{Al2O3}$, react with both acids and bases: amphoteric.`,
    ],
    formal: [
      {
        title: "Trends",
        points: [
          t`Metallic character: K > Mg > Al > B.`,
          t`Period 3 oxides: $\ce{Na2O}$, MgO basic; $\ce{Al2O3}$ amphoteric; $\ce{P4O10}$, $\ce{SO3}$, $\ce{Cl2O7}$ acidic.`,
          t`$\ce{Al2O3}$ reacts with HCl and with NaOH.`,
          t`Group valences predict formulas: Ge (4) and S (2) give $\ce{GeS2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $\ce{CO2}$ acidic or basic?`,
      steps: [
        t`Carbon is a nonmetal.`,
        t`Nonmetal oxides are acidic: $\ce{CO2 + H2O -> H2CO3}$.`,
      ],
      answer: t`Acidic`,
    },
    visualSpec: t`Colour period 3's oxides from basic to acidic and test each with acid and alkali.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Reverses the order.",
      remediation: "K, lowest and furthest left, is most metallic.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Mixes up the trends.",
      remediation: "Metallic character rises down a group and falls across: K first, B last.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Mixes up the trends.",
      remediation: "K (group 1, period 4) is the most metallic.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Picks $\ce{CO2}$.`,
      remediation: t`Carbon is a nonmetal: $\ce{CO2}$ is acidic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Picks $\ce{B2O3}$.`,
      remediation: t`Boron is near the metalloid line: $\ce{B2O3}$ is weakly acidic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Calls them equally basic.",
      remediation: "Li is a metal; B and C are not.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Calls $\ce{Al2O3}$ basic.`,
      remediation: "It also reacts with NaOH: amphoteric.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Calls $\ce{Al2O3}$ acidic.`,
      remediation: "It also reacts with HCl: amphoteric.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Calls $\ce{Al2O3}$ neutral.`,
      remediation: "It reacts with both acids and bases.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Takes Ge's valence as 2.",
      remediation: "Group 14 elements have valence 4.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Swaps the valencies.",
      remediation: t`Ge 4, S 2: $\ce{GeS2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Takes S's valence as 1.",
      remediation: "Group 16 elements have valence 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Thinks metallic character falls down a group.",
      remediation: "Outer electrons are further out and lost more easily: it rises.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Thinks it stays the same.",
      remediation: "It rises: Li < Na < K.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Thinks it rises then falls.",
      remediation: "It rises steadily down a group.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.4 (A)" },
      stem: t`The correct order of metallic character for B, Al, Mg and K is`,
      verify: { kind: "value", inputs: {  }, params: { q: "metallic" } },
      options: [
        { key: "A", text: t`Al > Mg > B > K`, correct: false, misconceptionId: "C07-M2", value: "al_mg_b_k" },
        { key: "B", text: t`Mg > Al > K > B`, correct: false, misconceptionId: "C07-M3", value: "mg_al_k_b" },
        { key: "C", text: t`B > Al > Mg > K`, correct: false, misconceptionId: "C07-M1", value: "b_al_mg_k" },
        { key: "D", text: t`K > Mg > Al > B`, correct: true, value: "k_mg_al_b" },
      ],
      solution: {
        steps: [
          t`Rises down a group, falls across a period.`,
          t`K > Mg > Al > B.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (K)" },
      stem: t`Of $\ce{Li2O}$, $\ce{CO2}$ and $\ce{B2O3}$, the most basic oxide is`,
      verify: { kind: "value", inputs: {  }, params: { q: "basic_oxide" } },
      options: [
        { key: "A", text: t`$\ce{Li2O}$`, correct: true, value: "li2o" },
        { key: "B", text: t`$\ce{B2O3}$`, correct: false, misconceptionId: "C07-M5", value: "b2o3" },
        { key: "C", text: t`all are equally basic`, correct: false, misconceptionId: "C07-M6", value: "equal" },
        { key: "D", text: t`$\ce{CO2}$`, correct: false, misconceptionId: "C07-M4", value: "co2" },
      ],
      solution: {
        steps: [
          t`Li is the only metal.`,
          t`$\ce{Li2O}$ is the most basic.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.9" },
      stem: t`$\ce{Al2O3}$ reacts with both HCl and NaOH. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "alumina" } },
      options: [
        { key: "A", text: t`neutral`, correct: false, misconceptionId: "C07-M9", value: "neutral" },
        { key: "B", text: t`amphoteric`, correct: true, value: "amphoteric" },
        { key: "C", text: t`basic`, correct: false, misconceptionId: "C07-M7", value: "basic" },
        { key: "D", text: t`acidic`, correct: false, misconceptionId: "C07-M8", value: "acidic" },
      ],
      solution: {
        steps: [
          t`It reacts with an acid and with a base.`,
          t`Amphoteric.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.8" },
      stem: t`Ge is in group 14 and S in group 16. The likely formula of their compound is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ge_s" } },
      options: [
        { key: "A", text: t`$\ce{Ge2S}$`, correct: false, misconceptionId: "C07-M11", value: "ge2s" },
        { key: "B", text: t`GeS`, correct: false, misconceptionId: "C07-M10", value: "ges" },
        { key: "C", text: t`$\ce{GeS2}$`, correct: true, value: "ges2" },
        { key: "D", text: t`$\ce{GeS4}$`, correct: false, misconceptionId: "C07-M12", value: "ges4" },
      ],
      solution: {
        steps: [
          t`Ge valence 4, S valence 2.`,
          t`$\ce{GeS2}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (F)" },
      stem: t`Down a group, metallic character`,
      verify: { kind: "value", inputs: {  }, params: { q: "down_group" } },
      options: [
        { key: "A", text: t`decreases`, correct: false, misconceptionId: "C07-M13", value: "decreases" },
        { key: "B", text: t`stays the same`, correct: false, misconceptionId: "C07-M14", value: "unchanged" },
        { key: "C", text: t`rises, then falls`, correct: false, misconceptionId: "C07-M15", value: "rises_falls" },
        { key: "D", text: t`increases`, correct: true, value: "increases" },
      ],
      solution: {
        steps: [
          t`Outer electrons are further from the nucleus.`,
          t`They are lost more easily: metallic character rises.`,
        ],
      },
    },
  ],
};
