import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Lithium, sodium and potassium all fizz in water, but potassium bursts into lilac flame. Why does reactivity grow down group 1?`,
    reveal: t`The outer electron is further from the nucleus in each new period, so it is lost more easily.`,
  },
  explanation: {
    intuition: [
      t`Group 1 metals have one outer electron, $ns^1$; group 2 have $ns^2$.`,
      t`Down a group atoms get bigger and lose electrons more easily.`,
      t`They are strong reducing agents with very negative $E^0$.`,
      t`The first member of each group resembles the second member of the next: Li with Mg.`,
    ],
    formal: [
      {
        title: "Trends",
        points: [
          t`Radius grows down the group: Na 186, K 227 pm; Mg (group 2) 160 pm.`,
          t`Ionisation enthalpy falls down the group; group 2 values exceed group 1 (Na 496, Mg 737).`,
          t`Electronegativity is low and falls down the group.`,
          t`Very negative $E^0$: strong reducing agents.`,
        ],
      },
      {
        title: "Diagonal relationship",
        points: [
          t`Li resembles Mg: both form nitrides and normal oxides, and their carbonates decompose on heating.`,
          t`Francium is the radioactive alkali metal.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which has the lower ionisation enthalpy, Na or K?`,
      steps: [
        t`K's outer electron is in shell 4, Na's in shell 3.`,
        t`Further out: easier to remove.`,
      ],
      answer: t`K`,
    },
    visualSpec: t`Step down groups 1 and 2 and watch radius grow and ionisation enthalpy fall.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks Na has more electrons.",
      remediation: "Mg has more; its larger nuclear charge holds them tighter.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Puts Mg's electron in a higher shell.",
      remediation: "Both lose a 3s electron.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Calls Na an alkaline earth metal.",
      remediation: "Na is group 1; Mg is group 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Gives K a smaller nuclear charge.",
      remediation: "K has more protons, but an extra shell outweighs them.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Calls K lighter.",
      remediation: "K is heavier; its extra shell makes it larger.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Gives K fewer electrons.",
      remediation: "K has 19 electrons to Na's 11.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks alkali metals gain electrons.",
      remediation: "They lose their ns electron easily.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Calls them oxidising agents.",
      remediation: "Losing electrons, they are reducing agents.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Gives them high ionisation enthalpies.",
      remediation: "Their ionisation enthalpies are the lowest in each period.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks sodium.",
      remediation: "Li and Na share a group; the diagonal partner is Mg.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks beryllium.",
      remediation: "Be is Li's period neighbour; its diagonal partner is Al.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks aluminium.",
      remediation: "Al is diagonal to Be; Li's partner is Mg.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks caesium.",
      remediation: "Caesium is stable; francium is radioactive.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks radium.",
      remediation: "Radium is a radioactive alkaline earth metal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks lithium.",
      remediation: "Lithium is stable.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Solved Ex.8.3" },
      stem: t`The first ionisation enthalpies of Na and Mg are 496 and 737 kJ/mol. Mg's is higher because`,
      verify: { kind: "value", inputs: {  }, params: { q: "na_mg_ie" } },
      options: [
        { key: "A", text: t`Mg's outer electron is in a higher shell`, correct: false, misconceptionId: "C03-M2", value: "mg_higher_shell" },
        { key: "B", text: t`Na is an alkaline earth metal`, correct: false, misconceptionId: "C03-M3", value: "na_group2" },
        { key: "C", text: t`Na has more electrons`, correct: false, misconceptionId: "C03-M1", value: "na_more_electrons" },
        { key: "D", text: t`Mg has a larger nuclear charge and smaller radius, and its 3s is full`, correct: true, value: "mg_charge_radius" },
      ],
      solution: {
        steps: [
          t`Mg has 12 protons to Na's 11, in a smaller atom.`,
          t`Its full 3s holds tighter.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Solved Ex.8.5" },
      stem: t`The atomic radii of Na, K and Mg are 186, 227 and 160 pm. K is larger than Na because`,
      verify: { kind: "value", inputs: {  }, params: { q: "k_na" } },
      options: [
        { key: "A", text: t`K has an extra electron shell`, correct: true, value: "extra_shell" },
        { key: "B", text: t`K has fewer electrons`, correct: false, misconceptionId: "C03-M6", value: "fewer_electrons" },
        { key: "C", text: t`K is lighter`, correct: false, misconceptionId: "C03-M5", value: "lighter" },
        { key: "D", text: t`K has a smaller nuclear charge`, correct: false, misconceptionId: "C03-M4", value: "smaller_charge" },
      ],
      solution: {
        steps: [
          t`K has four shells; Na three.`,
          t`The extra shell makes K larger.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.1 (B)" },
      stem: t`Alkali metals have very negative standard reduction potentials because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "e0" } },
      options: [
        { key: "A", text: t`gain electrons easily`, correct: false, misconceptionId: "C03-M7", value: "gain_electrons" },
        { key: "B", text: t`lose their single $ns$ electron very easily: strong reducing agents`, correct: true, value: "lose_easily" },
        { key: "C", text: t`have high ionisation enthalpies`, correct: false, misconceptionId: "C03-M9", value: "high_ie" },
        { key: "D", text: t`are strong oxidising agents`, correct: false, misconceptionId: "C03-M8", value: "oxidising" },
      ],
      solution: {
        steps: [
          t`They lose their one ns electron easily.`,
          t`Strong reducing agents: very negative $E^0$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.3 (A)" },
      stem: t`Lithium shows a diagonal relationship with`,
      verify: { kind: "value", inputs: {  }, params: { q: "diagonal" } },
      options: [
        { key: "A", text: t`beryllium`, correct: false, misconceptionId: "C03-M11", value: "beryllium" },
        { key: "B", text: t`aluminium`, correct: false, misconceptionId: "C03-M12", value: "aluminium" },
        { key: "C", text: t`magnesium`, correct: true, value: "magnesium" },
        { key: "D", text: t`sodium`, correct: false, misconceptionId: "C03-M10", value: "sodium" },
      ],
      solution: {
        steps: [
          t`Li is above-left of Mg.`,
          t`Diagonal relationship.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.4 (C)" },
      stem: t`The radioactive alkali metal is`,
      verify: { kind: "value", inputs: {  }, params: { q: "radioactive" } },
      options: [
        { key: "A", text: t`lithium`, correct: false, misconceptionId: "C03-M15", value: "lithium" },
        { key: "B", text: t`caesium`, correct: false, misconceptionId: "C03-M13", value: "caesium" },
        { key: "C", text: t`radium`, correct: false, misconceptionId: "C03-M14", value: "radium" },
        { key: "D", text: t`francium`, correct: true, value: "francium" },
      ],
      solution: {
        steps: [
          t`Francium has no stable isotope.`,
          t`It is radioactive.`,
        ],
      },
    },
  ],
};
