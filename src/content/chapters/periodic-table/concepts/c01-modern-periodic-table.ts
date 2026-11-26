import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Mendeleev ordered elements by mass and had to swap tellurium and iodine to keep their families together. The modern table never needs such swaps. Why?`,
    reveal: t`It orders elements by atomic number, the number of protons, which rises by exactly one from each element to the next.`,
  },
  explanation: {
    intuition: [
      t`Elements are arranged by increasing atomic number.`,
      t`Rows are **periods** (7) and columns are **groups** (18).`,
      t`The period number is the valence shell's principal quantum number.`,
      t`The table divides into s, p, d and f blocks; the f block sits at the bottom.`,
    ],
    formal: [
      {
        title: "Structure",
        points: [
          t`Periodic law: properties are periodic functions of atomic number.`,
          t`Period lengths: 2, 8, 8, 18, 18, 32, 32.`,
          t`Period 6: 6s, 4f, 5d, 6p = 2 + 14 + 10 + 6 = 32 elements.`,
          t`Lanthanoids and actinoids are placed in two rows at the bottom.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many elements are in period 4?`,
      steps: [
        t`Subshells filled: 4s, 3d, 4p.`,
        t`2 + 10 + 6 = 18.`,
      ],
      answer: t`18`,
    },
    visualSpec: t`Build the table period by period, adding s, p, d and f blocks as the subshells fill.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks the period gives the atomic number.",
      remediation: t`The period number is the valence shell's $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks the period gives the atomic mass.",
      remediation: t`Atomic mass does not set the period; $n$ of the valence shell does.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Confuses it with the azimuthal quantum number.",
      remediation: t`$l$ gives the block; $n$ gives the period.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Puts lanthanoids on the left.",
      remediation: "They are placed in a separate row at the bottom.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Puts lanthanoids on the right.",
      remediation: "The right side holds the p block; lanthanoids go below.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Puts lanthanoids in the middle.",
      remediation: "The middle holds the d block; lanthanoids go below.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Forgets the 4f subshell.",
      remediation: "Period 6 fills 6s, 4f, 5d, 6p: 32 elements.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Counts only s and p.",
      remediation: "Add the d (10) and f (14) elements too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Counts only the f elements.",
      remediation: "Add 6s, 5d and 6p: 32 in all.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Orders by atomic mass.",
      remediation: "The modern table uses atomic number.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Orders by neutrons.",
      remediation: "Isotopes differ in neutrons yet share a place: order is by protons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Orders by density.",
      remediation: "Order is by atomic number.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Starts period 6 in 5d.",
      remediation: "Each period begins with an s subshell: 6s.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Starts period 6 in 4f.",
      remediation: t`Period 6 begins with Cs, $6s^1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Starts period 6 in 6p.",
      remediation: "6p fills last in period 6; it begins with 6s.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.4 (B)" },
      stem: t`In the modern periodic table, the period number indicates the`,
      verify: { kind: "value", inputs: {  }, params: { q: "period" } },
      options: [
        { key: "A", text: t`azimuthal quantum number`, correct: false, misconceptionId: "C01-M3", value: "azimuthal_qn" },
        { key: "B", text: t`atomic number`, correct: false, misconceptionId: "C01-M1", value: "atomic_number" },
        { key: "C", text: t`atomic mass`, correct: false, misconceptionId: "C01-M2", value: "atomic_mass" },
        { key: "D", text: t`principal quantum number of the valence shell`, correct: true, value: "principal_qn" },
      ],
      solution: {
        steps: [
          t`Each period fills a new shell.`,
          t`The period number is that shell's $n$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.4 (C)" },
      stem: t`The lanthanides are placed in the periodic table`,
      verify: { kind: "value", inputs: {  }, params: { q: "lanthanides" } },
      options: [
        { key: "A", text: t`at the bottom`, correct: true, value: "bottom" },
        { key: "B", text: t`on the left-hand side`, correct: false, misconceptionId: "C01-M4", value: "left" },
        { key: "C", text: t`on the right-hand side`, correct: false, misconceptionId: "C01-M5", value: "right" },
        { key: "D", text: t`in the middle`, correct: false, misconceptionId: "C01-M6", value: "middle" },
      ],
      solution: {
        steps: [
          t`The f block would make the table too wide.`,
          t`It is placed at the bottom.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.2" },
      stem: t`How many elements are there in the 6th period?`,
      verify: { kind: "value", inputs: {  }, params: { q: "period6" } },
      options: [
        { key: "A", text: t`8`, correct: false, misconceptionId: "C01-M8", value: "eight" },
        { key: "B", text: t`32`, correct: true, value: "thirty_two" },
        { key: "C", text: t`14`, correct: false, misconceptionId: "C01-M9", value: "fourteen" },
        { key: "D", text: t`18`, correct: false, misconceptionId: "C01-M7", value: "eighteen" },
      ],
      solution: {
        steps: [
          t`6s, 4f, 5d, 6p fill in period 6.`,
          t`2 + 14 + 10 + 6 = 32.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`The modern periodic table arranges elements in order of increasing`,
      verify: { kind: "value", inputs: {  }, params: { q: "basis" } },
      options: [
        { key: "A", text: t`number of neutrons`, correct: false, misconceptionId: "C01-M11", value: "neutrons" },
        { key: "B", text: t`atomic mass`, correct: false, misconceptionId: "C01-M10", value: "atomic_mass" },
        { key: "C", text: t`atomic number`, correct: true, value: "atomic_number" },
        { key: "D", text: t`density`, correct: false, misconceptionId: "C01-M12", value: "density" },
      ],
      solution: {
        steps: [
          t`Moseley showed atomic number is fundamental.`,
          t`The table follows atomic number.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.1" },
      stem: t`In the first element of the 6th period, the last electron enters the`,
      verify: { kind: "value", inputs: {  }, params: { q: "first6" } },
      options: [
        { key: "A", text: t`6p subshell`, correct: false, misconceptionId: "C01-M15", value: "p6" },
        { key: "B", text: t`5d subshell`, correct: false, misconceptionId: "C01-M13", value: "d5" },
        { key: "C", text: t`4f subshell`, correct: false, misconceptionId: "C01-M14", value: "f4" },
        { key: "D", text: t`6s subshell`, correct: true, value: "s6" },
      ],
      solution: {
        steps: [
          t`Period 6 begins with Cs.`,
          t`Its last electron enters 6s.`,
        ],
      },
    },
  ],
};
