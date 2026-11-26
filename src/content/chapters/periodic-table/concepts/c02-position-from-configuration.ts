import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Tell a chemist only that an element ends in $3s^2\,3p^4$ and they will name it at once: sulfur. How?`,
    reveal: t`The 3 gives period 3; the p gives the p block; 2 + 4 = 6 valence electrons give group 10 + 6 = 16.`,
  },
  explanation: {
    intuition: [
      t`The configuration fixes the element's place in the table.`,
      t`The valence shell gives the period.`,
      t`The last subshell filled gives the block.`,
      t`Valence electrons give the group.`,
    ],
    formal: [
      {
        title: "Rules",
        points: [
          t`Period = principal quantum number of the valence shell.`,
          t`s block: group = number of valence electrons (1 or 2).`,
          t`p block: group = 10 + number of valence electrons.`,
          t`d block: group = $(n-1)d$ + $ns$ electrons.`,
          t`Elements in one group share outer configurations, so similar properties.`,
        ],
      },
    ],
    worked: {
      prompt: t`Place $[\mathrm{Ar}]\,3d^{10}\,4s^1$.`,
      steps: [
        t`Valence shell $n$ = 4: period 4; last filled d: d block.`,
        t`10 + 1 = 11: group 11 (copper).`,
      ],
      answer: t`Period 4, group 11`,
    },
    visualSpec: t`Read a configuration from left to right and drop the element into its period, block and group.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Counts only the p electrons.",
      remediation: "Count s and p: 7 valence electrons, group 10 + 7.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Forgets to add 10.",
      remediation: "For the p block, group = 10 + valence electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Reads only the s electrons.",
      remediation: t`The $np^5$ electrons count too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Puts 4 electrons in 4p.",
      remediation: t`Group 14 = 10 + 4 valence electrons: $4s^2\,4p^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Uses shell 3.",
      remediation: t`Period 4 means the valence shell is $n$ = 4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Writes d for p.",
      remediation: "Group 14 is in the p block.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks N and P.",
      remediation: "Z = 7 and 15 are group 15, p block.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks C and Si.",
      remediation: "Z = 6 and 14 are group 14, p block.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks the halogens.",
      remediation: "Z = 9 and 17 are group 17, p block.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks Na and Ca.",
      remediation: "Na is group 1 and Ca group 2: different groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks Mg and Ne.",
      remediation: "Mg (group 2) and Ne (group 18) differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks Sc and As.",
      remediation: "Sc is group 3 and As group 15.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Forgets to add 10.",
      remediation: t`$2s^2\,2p^6$: 8 valence electrons, group 10 + 8 = 18.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Miscounts the shells.",
      remediation: t`The highest shell is $n$ = 2: period 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Counts only the p electrons.",
      remediation: "Add the s electrons: 10 + 2 + 6 = 18.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.4 (D)" },
      stem: t`An element has the valence shell configuration $ns^2\,np^5$. It belongs to`,
      verify: { kind: "value", inputs: {  }, params: { q: "ns2np5" } },
      options: [
        { key: "A", text: t`group 5`, correct: false, misconceptionId: "C02-M1", value: "group_5" },
        { key: "B", text: t`group 17, the halogens`, correct: true, value: "group_17" },
        { key: "C", text: t`group 7`, correct: false, misconceptionId: "C02-M2", value: "group_7" },
        { key: "D", text: t`group 2, the alkaline earth metals`, correct: false, misconceptionId: "C02-M3", value: "group_2" },
      ],
      solution: {
        steps: [
          t`Valence electrons: 2 + 5 = 7.`,
          t`Group 10 + 7 = 17: halogens.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.2 (A)" },
      stem: t`Germanium is in period 4 and group 14. Its outer electronic configuration is`,
      verify: { kind: "value", inputs: {  }, params: { q: "germanium" } },
      options: [
        { key: "A", text: t`$4s^2\,4p^4$`, correct: false, misconceptionId: "C02-M4", value: "s4_2_p4_4" },
        { key: "B", text: t`$3s^2\,3p^2$`, correct: false, misconceptionId: "C02-M5", value: "s3_2_p3_2" },
        { key: "C", text: t`$4s^2\,4p^2$`, correct: true, value: "s4_2_p4_2" },
        { key: "D", text: t`$4s^2\,4d^2$`, correct: false, misconceptionId: "C02-M6", value: "s4_2_d4_2" },
      ],
      solution: {
        steps: [
          t`Period 4: $n$ = 4; group 14: 4 valence electrons.`,
          t`$4s^2\,4p^2$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.4 (F)" },
      stem: t`Which pair of atomic numbers are both s-block elements?`,
      verify: { kind: "value", inputs: {  }, params: { q: "s_block" } },
      options: [
        { key: "A", text: t`9 and 17`, correct: false, misconceptionId: "C02-M9", value: "z_9_17" },
        { key: "B", text: t`6 and 14`, correct: false, misconceptionId: "C02-M8", value: "z_6_14" },
        { key: "C", text: t`7 and 15`, correct: false, misconceptionId: "C02-M7", value: "z_7_15" },
        { key: "D", text: t`3 and 12`, correct: true, value: "z_3_12" },
      ],
      solution: {
        steps: [
          t`Z = 3 is Li ($2s^1$); Z = 12 is Mg ($3s^2$).`,
          t`Both s block.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.4 (H)" },
      stem: t`Which pair of atomic numbers belongs to elements with similar properties?`,
      verify: { kind: "value", inputs: {  }, params: { q: "similar" } },
      options: [
        { key: "A", text: t`13 and 31`, correct: true, value: "z_13_31" },
        { key: "B", text: t`21 and 33`, correct: false, misconceptionId: "C02-M12", value: "z_21_33" },
        { key: "C", text: t`11 and 20`, correct: false, misconceptionId: "C02-M10", value: "z_11_20" },
        { key: "D", text: t`12 and 10`, correct: false, misconceptionId: "C02-M11", value: "z_12_10" },
      ],
      solution: {
        steps: [
          t`Z = 13 (Al) and 31 (Ga) end in $ns^2\,np^1$.`,
          t`Same group: similar properties.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (A)" },
      stem: t`An element has the configuration $1s^2\,2s^2\,2p^6$. Its period and group are`,
      verify: { kind: "value", inputs: {  }, params: { q: "neon" } },
      options: [
        { key: "A", text: t`period 2, group 16`, correct: false, misconceptionId: "C02-M15", value: "p2_g16" },
        { key: "B", text: t`period 2, group 18`, correct: true, value: "p2_g18" },
        { key: "C", text: t`period 2, group 8`, correct: false, misconceptionId: "C02-M13", value: "p2_g8" },
        { key: "D", text: t`period 3, group 18`, correct: false, misconceptionId: "C02-M14", value: "p3_g18" },
      ],
      solution: {
        steps: [
          t`$n$ = 2: period 2.`,
          t`8 valence electrons: group 18.`,
        ],
      },
    },
  ],
};
