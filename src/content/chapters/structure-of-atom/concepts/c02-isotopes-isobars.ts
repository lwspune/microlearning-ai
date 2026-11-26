import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Argon-40 and potassium-40 weigh almost the same, yet one is an inert gas and the other a reactive metal. Why does equal mass not mean the same element?`,
    reveal: t`They are isobars: same mass number, but 18 versus 19 protons. The proton count, not the mass, decides the element.`,
  },
  explanation: {
    intuition: [
      t`Atoms can match in different ways.`,
      t`**Isotopes**: same element ($Z$), different mass ($A$).`,
      t`**Isobars**: same $A$, different elements.`,
      t`**Isotones**: same number of neutrons; **isoelectronic** species: same number of electrons.`,
    ],
    formal: [
      {
        title: "Definitions",
        points: [
          t`Isotopes: $^{12}_{6}\mathrm{C}$, $^{14}_{6}\mathrm{C}$ (same $Z$).`,
          t`Isobars: $^{40}_{18}\mathrm{Ar}$, $^{40}_{19}\mathrm{K}$ (same $A$).`,
          t`Isotones: $^{14}_{6}\mathrm{C}$, $^{16}_{8}\mathrm{O}$ (8 neutrons each).`,
          t`Isoelectronic: $\ce{O^{2-}}$, $\ce{Na+}$, Ne (10 electrons each).`,
        ],
      },
      {
        title: "Average atomic mass",
        points: [
          t`Weight each isotope's mass by its share of the atoms.`,
          t`Chlorine, 3 : 1 of $^{35}\mathrm{Cl}$ and $^{37}\mathrm{Cl}$: $(3 \times 35 + 37)/4 = 35.5$ u.`,
        ],
      },
    ],
    worked: {
      prompt: t`Are $\ce{Na+}$ and $\ce{F-}$ isoelectronic?`,
      steps: [
        t`$\ce{Na+}$: 11 − 1 = 10 electrons.`,
        t`$\ce{F-}$: 9 + 1 = 10 electrons.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`Sort nuclides into a grid of protons and neutrons and trace rows, columns and diagonals.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Swaps isobars and isotopes.",
      remediation: t`Isotopes share $Z$; isobars share $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Confuses isobars with isotones.",
      remediation: "Isotones share the neutron count.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Confuses isobars with isoelectronic species.",
      remediation: "Isoelectronic species share the electron count.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks isotopes.",
      remediation: t`$^{12}\mathrm{C}$ and $^{14}\mathrm{C}$ have 6 and 8 neutrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks isobars.",
      remediation: t`$^{14}\mathrm{C}$ and $^{14}\mathrm{N}$ have 8 and 7 neutrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks an isoelectronic pair.",
      remediation: t`$\ce{Na+}$ and Ne share electrons, not neutrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Ignores the ion's charge.",
      remediation: "A neutral O atom has 8 electrons, not 10.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks a negative charge means fewer electrons.",
      remediation: "A negative ion has gained electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks elements of one group are isoelectronic.",
      remediation: t`$\ce{S^{2-}}$ has 18 electrons, like Ar.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Averages without weights.",
      remediation: t`Three atoms in four are $^{35}\mathrm{Cl}$; weight by abundance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Swaps the abundances.",
      remediation: t`$^{35}\mathrm{Cl}$ is the more abundant: weight 3.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Forgets to divide by the total.",
      remediation: "Divide by 3 + 1 = 4.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (A)" },
      stem: t`Isobars are atoms with the same`,
      verify: { kind: "value", inputs: {  }, params: { q: "isobars" } },
      options: [
        { key: "A", text: t`atomic number but different mass numbers`, correct: false, misconceptionId: "C02-M1", value: "same_z" },
        { key: "B", text: t`mass number but different atomic numbers`, correct: true, value: "same_a" },
        { key: "C", text: t`number of neutrons`, correct: false, misconceptionId: "C02-M2", value: "same_neutrons" },
        { key: "D", text: t`number of electrons`, correct: false, misconceptionId: "C02-M3", value: "same_electrons" },
      ],
      solution: {
        steps: [
          t`Iso-bar: same weight.`,
          t`Same mass number, different atomic numbers.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.4" },
      stem: t`$^{40}_{18}\mathrm{Ar}$ and $^{40}_{19}\mathrm{K}$ are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ar_k" } },
      options: [
        { key: "A", text: t`isotopes`, correct: false, misconceptionId: "C02-M1", value: "isotopes" },
        { key: "B", text: t`isotones`, correct: false, misconceptionId: "C02-M2", value: "isotones" },
        { key: "C", text: t`isobars`, correct: true, value: "isobars" },
        { key: "D", text: t`isoelectronic`, correct: false, misconceptionId: "C02-M3", value: "isoelectronic" },
      ],
      solution: {
        steps: [
          t`Both have $A$ = 40; $Z$ = 18 and 19.`,
          t`Isobars.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (B)" },
      stem: t`Which pair are isotones?`,
      verify: { kind: "value", inputs: {  }, params: { q: "isotones" } },
      options: [
        { key: "A", text: t`$\ce{Na+}$ and Ne`, correct: false, misconceptionId: "C02-M6", value: "na_ion_ne" },
        { key: "B", text: t`$^{14}_{6}\mathrm{C}$ and $^{14}_{7}\mathrm{N}$`, correct: false, misconceptionId: "C02-M5", value: "c14_n14" },
        { key: "C", text: t`$^{12}_{6}\mathrm{C}$ and $^{14}_{6}\mathrm{C}$`, correct: false, misconceptionId: "C02-M4", value: "c12_c14" },
        { key: "D", text: t`$^{14}_{6}\mathrm{C}$ and $^{16}_{8}\mathrm{O}$`, correct: true, value: "c14_o16" },
      ],
      solution: {
        steps: [
          t`$^{14}\mathrm{C}$: 14 − 6 = 8; $^{16}\mathrm{O}$: 16 − 8 = 8.`,
          t`Same neutrons: isotones.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.5 (E)" },
      stem: t`Which species is isoelectronic with neon?`,
      verify: { kind: "value", inputs: {  }, params: { q: "isoelectronic" } },
      options: [
        { key: "A", text: t`$\ce{O^{2-}}$`, correct: true, value: "o2_minus" },
        { key: "B", text: t`$\ce{S^{2-}}$`, correct: false, misconceptionId: "C02-M9", value: "s2_minus" },
        { key: "C", text: t`O`, correct: false, misconceptionId: "C02-M7", value: "o_atom" },
        { key: "D", text: t`$\ce{O^{2+}}$`, correct: false, misconceptionId: "C02-M8", value: "o2_plus" },
      ],
      solution: {
        steps: [
          t`Ne has 10 electrons.`,
          t`$\ce{O^{2-}}$: 8 + 2 = 10.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.2" },
      stem: t`Chlorine is $^{35}\mathrm{Cl}$ and $^{37}\mathrm{Cl}$ in the ratio 3 : 1. Find its average atomic mass.`,
      verify: { kind: "value", inputs: { a1: "3", m1: "35", a2: "1", m2: "37" }, params: { q: "chlorine" } },
      options: [
        { key: "A", text: t`$142\ \mathrm{u}$`, correct: false, misconceptionId: "C02-M12", value: "142" },
        { key: "B", text: t`$35.5\ \mathrm{u}$`, correct: true, value: "35.5000000000000" },
        { key: "C", text: t`$36\ \mathrm{u}$`, correct: false, misconceptionId: "C02-M10", value: "36" },
        { key: "D", text: t`$36.5\ \mathrm{u}$`, correct: false, misconceptionId: "C02-M11", value: "36.5000000000000" },
      ],
      solution: {
        steps: [
          t`$(3 \times 35 + 1 \times 37) \div 4$.`,
          t`= 35.5 u.`,
        ],
      },
    },
  ],
};
