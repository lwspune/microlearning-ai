import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`In rock salt the chloride ions form a ccp lattice, and the sodium ions sit in **every** octahedral void and in no tetrahedral void. Why must the formula then be $\ce{NaCl}$?`,
    reveal: t`$N$ chloride ions leave exactly $N$ octahedral voids. Filling all of them puts $N$ sodium ions with $N$ chloride ions: a $1 : 1$ ratio, $\ce{NaCl}$.`,
  },
  explanation: {
    intuition: [
      t`In many ionic solids the larger ions, usually the anions, form a close-packed lattice.`,
      t`The smaller ions sit in the voids of that lattice.`,
      t`$N$ lattice ions leave $2N$ tetrahedral voids and $N$ octahedral voids.`,
      t`The fraction of voids the small ions fill fixes how many there are per lattice ion.`,
      t`That ratio of the two kinds of ion is the formula.`,
    ],
    formal: [
      {
        title: "Counting the void-fillers",
        points: [
          t`Take $N$ ions in the close-packed lattice; hcp and ccp give the same counts.`,
          t`Ions filling a fraction $f$ of the tetrahedral voids number $f \times 2N$.`,
          t`Ions filling a fraction $f$ of the octahedral voids number $f \times N$.`,
        ],
      },
      {
        title: "From counts to formula",
        points: [
          t`Write the ratio of the counts, with the lattice ions as $N$.`,
          t`Clear the fractions to the smallest whole numbers: that is the formula.`,
          t`Example: B in ccp, A in all octahedral voids: A $= N$, B $= N$, so $\ce{AB}$.`,
          t`For ions, check that the charges balance: the formula must be neutral.`,
        ],
      },
    ],
    worked: {
      prompt: t`In spinel, the oxide ions form a ccp lattice, $\ce{Mg^2+}$ ions occupy one eighth of the tetrahedral voids and $\ce{Al^3+}$ ions occupy half of the octahedral voids. What is its formula?`,
      steps: [
        t`$N$ oxide ions leave $2N$ tetrahedral and $N$ octahedral voids.`,
        t`Mg: $\tfrac18 \times 2N = \tfrac{N}{4}$.`,
        t`Al: $\tfrac12 \times N = \tfrac{N}{2}$.`,
        t`Mg : Al : O $= \tfrac14 : \tfrac12 : 1$ $= 1 : 2 : 4$, so $\ce{MgAl2O4}$.`,
        t`Check: $2 + 2(3) + 4(-2) = 0$, so the formula is neutral.`,
      ],
      answer: t`$\ce{MgAl2O4}$`,
    },
    visualSpec: t`Fill a chosen fraction of the tetrahedral or octahedral voids of a close-packed layer and watch the formula update as the count of each ion changes.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Swaps the void counts: $N$ tetrahedral and $2N$ octahedral.`,
      remediation: t`$N$ lattice ions leave $2N$ tetrahedral voids and $N$ octahedral voids: the tetrahedral ones are twice as many.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: t`Takes the fraction of all $3N$ voids instead of one kind.`,
      remediation: t`The fraction applies only to the kind of void named: $2N$ tetrahedral or $N$ octahedral, not the $3N$ total.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: "Ignores the fraction and fills every void of that kind.",
      remediation: "Only the stated fraction of the voids is filled: multiply the number of voids by that fraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Writes the ratio upside down, giving the lattice ions' count to the void-fillers.",
      remediation: t`The ions in the voids number $f \times$ (voids); the lattice ions number $N$. Put each count under its own element.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.6" },
      stem: t`In an ionic crystalline solid, atoms of element Y form an hcp lattice. Atoms of element X occupy one third of the tetrahedral voids. What is the formula of the compound?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", order: ["X", "Y"], sphere: "Y", fill: ["X=tetra:1/3"] } },
      options: [
        { key: "A", text: t`$\ce{X3Y2}$`, correct: false, misconceptionId: "C05-M4", value: "X3Y2" },
        { key: "B", text: t`$\ce{X2Y3}$`, correct: true, value: "X2Y3" },
        { key: "C", text: t`$\ce{XY3}$`, correct: false, misconceptionId: "C05-M1", value: "XY3" },
        { key: "D", text: t`$\ce{XY}$`, correct: false, misconceptionId: "C05-M2", value: "XY" },
      ],
      solution: {
        steps: [
          t`$N$ Y atoms in hcp leave $2N$ tetrahedral voids.`,
          t`X fills one third of them: $\tfrac13 \times 2N = \tfrac{2N}{3}$.`,
          t`X : Y $= \tfrac23 : 1 = 2 : 3$, so the formula is $\ce{X2Y3}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Solved Ex.1.4" },
      stem: t`Anions Z form a ccp lattice, and cations M occupy half of the octahedral voids. What is the formula of the compound?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", order: ["M", "Z"], sphere: "Z", fill: ["M=octa:1/2"] } },
      options: [
        { key: "A", text: t`$\ce{MZ}$`, correct: false, misconceptionId: "C05-M1", value: "MZ" },
        { key: "B", text: t`$\ce{M3Z2}$`, correct: false, misconceptionId: "C05-M2", value: "M3Z2" },
        { key: "C", text: t`$\ce{M2Z}$`, correct: false, misconceptionId: "C05-M4", value: "M2Z" },
        { key: "D", text: t`$\ce{MZ2}$`, correct: true, value: "MZ2" },
      ],
      solution: {
        steps: [
          t`$N$ Z ions in ccp leave $N$ octahedral voids.`,
          t`M fills half of them: $\tfrac{N}{2}$.`,
          t`M : Z $= \tfrac12 : 1 = 1 : 2$, so the formula is $\ce{MZ2}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Solved Ex.1.4" },
      stem: t`In zinc blende, the sulfide ions form a ccp lattice and the zinc ions occupy half of the tetrahedral voids. What is the formula?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", order: ["Zn", "S"], sphere: "S", fill: ["Zn=tetra:1/2"] } },
      options: [
        { key: "A", text: t`$\ce{ZnS}$`, correct: true, value: "ZnS" },
        { key: "B", text: t`$\ce{ZnS2}$`, correct: false, misconceptionId: "C05-M1", value: "ZnS2" },
        { key: "C", text: t`$\ce{Zn3S2}$`, correct: false, misconceptionId: "C05-M2", value: "Zn3S2" },
        { key: "D", text: t`$\ce{Zn2S}$`, correct: false, misconceptionId: "C05-M3", value: "Zn2S" },
      ],
      solution: {
        steps: [
          t`$N$ sulfide ions leave $2N$ tetrahedral voids.`,
          t`Zinc fills half of them: $\tfrac12 \times 2N = N$.`,
          t`Zn : S $= 1 : 1$, so the formula is $\ce{ZnS}$; the charges $+2$ and $-2$ balance.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.6" },
      stem: t`In sodium oxide, the oxide ions form a ccp lattice and the sodium ions occupy all the tetrahedral voids. What is the formula?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", order: ["Na", "O"], sphere: "O", fill: ["Na=tetra:1"] } },
      options: [
        { key: "A", text: t`$\ce{Na3O}$`, correct: false, misconceptionId: "C05-M2", value: "Na3O" },
        { key: "B", text: t`$\ce{NaO2}$`, correct: false, misconceptionId: "C05-M4", value: "NaO2" },
        { key: "C", text: t`$\ce{Na2O}$`, correct: true, value: "Na2O" },
        { key: "D", text: t`$\ce{NaO}$`, correct: false, misconceptionId: "C05-M1", value: "NaO" },
      ],
      solution: {
        steps: [
          t`$N$ oxide ions leave $2N$ tetrahedral voids.`,
          t`Sodium fills all of them: $2N$ sodium ions.`,
          t`Na : O $= 2 : 1$, so the formula is $\ce{Na2O}$; $2(+1) - 2 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.6" },
      stem: t`In alumina, $\ce{Al2O3}$, the oxide ions form an hcp lattice and the $\ce{Al^3+}$ ions occupy octahedral voids. What fraction of the octahedral voids is occupied?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "fraction", formula: ["Al=2", "O=3"], sphere: "O", void: "octa" } },
      options: [
        { key: "A", text: t`$\frac{2}{3}$`, correct: true, value: "2/3" },
        { key: "B", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C05-M1", value: "1/3" },
        { key: "C", text: t`$\frac{2}{9}$`, correct: false, misconceptionId: "C05-M2", value: "2/9" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C05-M3", value: "1" },
      ],
      solution: {
        steps: [
          t`Al : O $= 2 : 3$, so $N$ oxide ions go with $\tfrac{2N}{3}$ aluminium ions.`,
          t`$N$ oxide ions leave $N$ octahedral voids.`,
          t`Fraction filled $= \tfrac{2N/3}{N} = \tfrac23$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Solved Ex.1.4" },
      stem: t`Atoms of B form a ccp lattice. Atoms of A occupy one quarter of the tetrahedral voids and atoms of C occupy half of the octahedral voids. What is the formula of the compound?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula", order: ["A", "B", "C"], sphere: "B", fill: ["A=tetra:1/4", "C=octa:1/2"] } },
      options: [
        { key: "A", text: t`$\ce{AB2C}$`, correct: true, value: "AB2C" },
        { key: "B", text: t`$\ce{AB4C4}$`, correct: false, misconceptionId: "C05-M1", value: "AB4C4" },
        { key: "C", text: t`$\ce{A3B4C6}$`, correct: false, misconceptionId: "C05-M2", value: "A3B4C6" },
        { key: "D", text: t`$\ce{A2BC}$`, correct: false, misconceptionId: "C05-M3", value: "A2BC" },
      ],
      solution: {
        steps: [
          t`$N$ B atoms leave $2N$ tetrahedral and $N$ octahedral voids.`,
          t`A: $\tfrac14 \times 2N = \tfrac{N}{2}$; C: $\tfrac12 \times N = \tfrac{N}{2}$.`,
          t`A : B : C $= \tfrac12 : 1 : \tfrac12 = 1 : 2 : 1$, so the formula is $\ce{AB2C}$.`,
        ],
      },
    },
  ],
};
