import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A sodium atom is 186 pm across, a sodium ion only 102 pm. Losing a single electron nearly halves its size. How?`,
    reveal: t`Na loses its whole outer shell, $3s^1$. The ion has one shell fewer, and its 11 protons pull the remaining 10 electrons tighter.`,
  },
  explanation: {
    intuition: [
      t`Across a period, more protons pull the same shell inward: radius shrinks.`,
      t`Down a group, each new shell makes atoms bigger.`,
      t`Cations are smaller than their atoms; anions larger.`,
      t`Among isoelectronic ions, more protons mean a smaller ion.`,
    ],
    formal: [
      {
        title: "Trends",
        points: [
          t`Across a period: effective nuclear charge rises, radius falls.`,
          t`Down a group: Cl 99, Br 114, I 133 pm.`,
          t`Higher cation charge, smaller ion: $\ce{Fe^{2+}}$ > $\ce{Fe^{3+}}$.`,
          t`Isoelectronic: $\ce{N^{3-}}$ > $\ce{O^{2-}}$ > $\ce{F-}$ > $\ce{Na+}$ > $\ce{Mg^{2+}}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which is larger, $\ce{Mg^{2+}}$ or $\ce{Ca^{2+}}$?`,
      steps: [
        t`Same charge; Ca is one period lower.`,
        t`An extra shell: $\ce{Ca^{2+}}$.`,
      ],
      answer: t`$\ce{Ca^{2+}}$`,
    },
    visualSpec: t`Line up atoms and ions to scale and watch sizes change across, down and on ionising.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks nuclear charge falls down a group.",
      remediation: "Nuclear charge rises, but each new shell outweighs it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Credits atomic mass.",
      remediation: "Mass rises down the group; the new shells cause the growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Credits electron pairing.",
      remediation: "The number of shells decides the radius.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Thinks $\ce{F-}$ has more electrons.`,
      remediation: "Both have 10 electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Credits sodium being a metal.",
      remediation: "Na has 11 protons to F's 9: a stronger pull on 10 electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Gives $\ce{F-}$ an extra shell.`,
      remediation: "Both have the configuration of Ne: two shells.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks cations are larger than their atoms.",
      remediation: t`Na loses its outer shell: $\ce{Na+}$ is smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks higher charge means larger.",
      remediation: "Higher positive charge pulls electrons in: smaller.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks more protons mean larger.",
      remediation: t`$\ce{Mg^{2+}}$'s 12 protons pull 10 electrons tighter than $\ce{Na+}$'s 11.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks higher charge means larger.",
      remediation: t`$\ce{Fe^{3+}}$ has fewer electrons for the same nucleus: smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks ions of one element are equal.",
      remediation: "Removing more electrons shrinks the ion.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks data are needed.",
      remediation: "The trend is reliable: higher charge, smaller cation.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks larger negative charge means smaller.",
      remediation: t`$\ce{N^{3-}}$ has only 7 protons for 10 electrons: larger.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks isoelectronic ions are equal in size.",
      remediation: "Nuclear charge differs, so their sizes differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks different elements cannot be compared.",
      remediation: "Isoelectronic ions are compared by their proton numbers.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.1 (B)" },
      stem: t`The atomic radii of Cl, Br and I are 99, 114 and 133 pm. Radius grows down the group because`,
      verify: { kind: "value", inputs: {  }, params: { q: "halogens" } },
      options: [
        { key: "A", text: t`atomic mass falls down the group`, correct: false, misconceptionId: "C04-M2", value: "mass" },
        { key: "B", text: t`a new electron shell is added in each period`, correct: true, value: "new_shell" },
        { key: "C", text: t`the electrons pair up`, correct: false, misconceptionId: "C04-M3", value: "pairing" },
        { key: "D", text: t`nuclear charge falls down the group`, correct: false, misconceptionId: "C04-M1", value: "charge_falls" },
      ],
      solution: {
        steps: [
          t`Cl, Br, I have 3, 4, 5 shells.`,
          t`A new shell each period.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.1 (C)" },
      stem: t`$\ce{F-}$ (133 pm) is larger than $\ce{Na+}$ (98 pm), though both have 10 electrons, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "f_na" } },
      options: [
        { key: "A", text: t`$\ce{F-}$ has more electrons`, correct: false, misconceptionId: "C04-M4", value: "f_more_electrons" },
        { key: "B", text: t`sodium is a metal`, correct: false, misconceptionId: "C04-M5", value: "na_metal" },
        { key: "C", text: t`$\ce{Na+}$ has more protons pulling on the same number of electrons`, correct: true, value: "more_protons" },
        { key: "D", text: t`$\ce{F-}$ has an extra electron shell`, correct: false, misconceptionId: "C04-M6", value: "f_extra_shell" },
      ],
      solution: {
        steps: [
          t`Same 10 electrons.`,
          t`Na (11 protons) pulls harder than F (9).`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.5" },
      stem: t`Arrange Na, $\ce{Na+}$ and $\ce{Mg^{2+}}$ in decreasing order of size.`,
      verify: { kind: "value", inputs: {  }, params: { q: "na_series" } },
      options: [
        { key: "A", text: t`$\ce{Mg^{2+}}$ > $\ce{Na+}$ > Na`, correct: false, misconceptionId: "C04-M8", value: "mg_naplus_na" },
        { key: "B", text: t`Na > $\ce{Mg^{2+}}$ > $\ce{Na+}$`, correct: false, misconceptionId: "C04-M9", value: "na_mg_naplus" },
        { key: "C", text: t`$\ce{Na+}$ > Na > $\ce{Mg^{2+}}$`, correct: false, misconceptionId: "C04-M7", value: "naplus_na_mg" },
        { key: "D", text: t`Na > $\ce{Na+}$ > $\ce{Mg^{2+}}$`, correct: true, value: "na_naplus_mg" },
      ],
      solution: {
        steps: [
          t`Na loses its outer shell: $\ce{Na+}$ smaller.`,
          t`$\ce{Mg^{2+}}$ has more protons: smaller still.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (B)" },
      stem: t`Which is larger, $\ce{Fe^{2+}}$ or $\ce{Fe^{3+}}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "iron" } },
      options: [
        { key: "A", text: t`$\ce{Fe^{2+}}$`, correct: true, value: "fe2_larger" },
        { key: "B", text: t`they are equal`, correct: false, misconceptionId: "C04-M11", value: "equal" },
        { key: "C", text: t`it cannot be told without data`, correct: false, misconceptionId: "C04-M12", value: "need_data" },
        { key: "D", text: t`$\ce{Fe^{3+}}$`, correct: false, misconceptionId: "C04-M10", value: "fe3_larger" },
      ],
      solution: {
        steps: [
          t`$\ce{Fe^{2+}}$ has one more electron.`,
          t`Less pull per electron: larger.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (C)" },
      stem: t`Which is the smaller ion, $\ce{N^{3-}}$ or $\ce{F-}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "n_f" } },
      options: [
        { key: "A", text: t`ions of different elements cannot be compared`, correct: false, misconceptionId: "C04-M15", value: "cannot_compare" },
        { key: "B", text: t`$\ce{F-}$`, correct: true, value: "f_minus" },
        { key: "C", text: t`$\ce{N^{3-}}$`, correct: false, misconceptionId: "C04-M13", value: "n3_minus" },
        { key: "D", text: t`they are equal, being isoelectronic`, correct: false, misconceptionId: "C04-M14", value: "equal" },
      ],
      solution: {
        steps: [
          t`Both have 10 electrons.`,
          t`F has more protons (9 > 7): $\ce{F-}$ is smaller.`,
        ],
      },
    },
  ],
};
