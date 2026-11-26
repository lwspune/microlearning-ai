import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Every carbon atom has 6 protons, but some have 6 neutrons and some 8. Both are still carbon. What, then, makes an atom carbon?`,
    reveal: t`Its number of protons, the atomic number. Neutrons change the mass but not the element.`,
  },
  explanation: {
    intuition: [
      t`An atom has a nucleus of protons and neutrons, with electrons around it.`,
      t`The number of protons, $Z$, fixes the element.`,
      t`Protons plus neutrons give the mass number, $A$.`,
      t`Ions gain or lose electrons; the nucleus is unchanged.`,
    ],
    formal: [
      {
        title: "Particles",
        points: [
          t`Proton: charge $+1.6 \times 10^{-19}$ C, mass about 1 u.`,
          t`Neutron: no charge, mass about 1 u.`,
          t`Electron: charge $-1.6 \times 10^{-19}$ C, mass $9.1 \times 10^{-31}$ kg.`,
        ],
      },
      {
        title: "Counting",
        points: [
          t`A nuclide is written $^{A}_{Z}\mathrm{X}$.`,
          t`Neutrons $= A - Z$.`,
          t`A neutral atom has $Z$ electrons; an ion of charge $+q$ has $Z - q$.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many protons, neutrons and electrons are in $\ce{^{35}_{17}Cl-}$?`,
      steps: [
        t`Protons = 17; neutrons = 35 − 17 = 18.`,
        t`Charge −1: electrons = 17 + 1 = 18.`,
      ],
      answer: t`17 p, 18 n, 18 e`,
    },
    visualSpec: t`Build an atom from protons, neutrons and electrons and watch its symbol change.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Gives the number of protons.",
      remediation: t`Neutrons $= A - Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Gives the mass number.",
      remediation: "Subtract the protons from the mass number.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Adds $A$ and $Z$.`,
      remediation: t`Neutrons $= A - Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Takes the neutron count as $Z$.`,
      remediation: t`$Z$ = protons = 11 − 6 = 5.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Swaps $A$ and $Z$ in the symbol.`,
      remediation: "Mass number goes on top, atomic number below.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Adds the mass number and neutrons.",
      remediation: t`$A$ already includes the neutrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Gives the number of neutrons.",
      remediation: "Mass number = protons + neutrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Subtracts instead of adding.",
      remediation: t`$A$ = protons + neutrons = 29 + 35.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Adds the charge to the electrons.",
      remediation: t`A positive ion has lost electrons: $Z - 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Ignores the charge.",
      remediation: t`$\ce{Mg^{2+}}$ has lost two electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Subtracts the charge from the mass number.",
      remediation: t`Electrons come from $Z$, not $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Drops the minus sign.",
      remediation: "The electron is negatively charged.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Gives the electron's mass.",
      remediation: t`Its charge is $-1.6 \times 10^{-19}$ C.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Confuses the electron with the neutron.",
      remediation: "The neutron is neutral; the electron is negative.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.1" },
      stem: t`How many neutrons are there in $^{40}_{18}\mathrm{Ar}$?`,
      verify: { kind: "value", inputs: { A: "40", Z: "18" }, params: { q: "neutrons" } },
      options: [
        { key: "A", text: t`$58$`, correct: false, misconceptionId: "C01-M3", value: "58" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C01-M1", value: "18" },
        { key: "C", text: t`$40$`, correct: false, misconceptionId: "C01-M2", value: "40" },
        { key: "D", text: t`$22$`, correct: true, value: "22" },
      ],
      solution: {
        steps: [
          t`Neutrons $= A - Z$.`,
          t`40 − 18 = 22.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.5 (A)" },
      stem: t`An element X has mass number 11 and 6 neutrons. Its symbol is`,
      verify: { kind: "value", inputs: {  }, params: { q: "symbol" } },
      options: [
        { key: "A", text: t`$^{11}_{5}\mathrm{X}$`, correct: true, value: "x_11_5" },
        { key: "B", text: t`$^{11}_{6}\mathrm{X}$`, correct: false, misconceptionId: "C01-M4", value: "x_11_6" },
        { key: "C", text: t`$^{5}_{11}\mathrm{X}$`, correct: false, misconceptionId: "C01-M5", value: "x_5_11" },
        { key: "D", text: t`$^{17}_{6}\mathrm{X}$`, correct: false, misconceptionId: "C01-M6", value: "x_17_6" },
      ],
      solution: {
        steps: [
          t`$Z$ = 11 − 6 = 5.`,
          t`$^{11}_{5}\mathrm{X}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (T)" },
      stem: t`A neutral atom has 29 electrons and 35 neutrons. What is its mass number?`,
      verify: { kind: "value", inputs: { e: "29", n: "35" }, params: { q: "mass_number" } },
      options: [
        { key: "A", text: t`$35$`, correct: false, misconceptionId: "C01-M7", value: "35" },
        { key: "B", text: t`$64$`, correct: true, value: "64" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C01-M8", value: "6" },
        { key: "D", text: t`$29$`, correct: false, misconceptionId: "C01-M1", value: "29" },
      ],
      solution: {
        steps: [
          t`Protons = electrons = 29.`,
          t`$A$ = 29 + 35 = 64.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`How many electrons are there in $\ce{^{24}_{12}Mg^{2+}}$?`,
      verify: { kind: "value", inputs: { Z: "12", q: "2", A: "24" }, params: { q: "ion_electrons" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C01-M10", value: "12" },
        { key: "B", text: t`$14$`, correct: false, misconceptionId: "C01-M9", value: "14" },
        { key: "C", text: t`$10$`, correct: true, value: "10" },
        { key: "D", text: t`$22$`, correct: false, misconceptionId: "C01-M11", value: "22" },
      ],
      solution: {
        steps: [
          t`Mg has 12 electrons.`,
          t`$\ce{Mg^{2+}}$ has lost 2: 10.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.2" },
      stem: t`The charge on an electron is`,
      verify: { kind: "value", inputs: {  }, params: { q: "charge" } },
      options: [
        { key: "A", text: t`zero`, correct: false, misconceptionId: "C01-M14", value: "zero" },
        { key: "B", text: t`$+1.6 \times 10^{-19}$ C`, correct: false, misconceptionId: "C01-M12", value: "plus_1_6e_19" },
        { key: "C", text: t`$9.1 \times 10^{-31}$ kg`, correct: false, misconceptionId: "C01-M13", value: "mass_9_1e_31" },
        { key: "D", text: t`$-1.6 \times 10^{-19}$ C`, correct: true, value: "minus_1_6e_19" },
      ],
      solution: {
        steps: [
          t`The electron is negative.`,
          t`Its charge is $-1.6 \times 10^{-19}$ C.`,
        ],
      },
    },
  ],
};
