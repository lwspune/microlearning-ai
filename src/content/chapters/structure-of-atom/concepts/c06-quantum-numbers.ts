import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`A postal address needs a country, city, street and house number. An electron's 'address' in an atom needs four numbers too. What are they?`,
    reveal: t`The quantum numbers: $n$ (shell), $l$ (subshell), $m_l$ (orbital) and $m_s$ (spin).`,
  },
  explanation: {
    intuition: [
      t`The quantum model replaces orbits with orbitals: regions where an electron is likely to be.`,
      t`Three quantum numbers fix an orbital; the fourth fixes the electron's spin.`,
      t`Shells contain subshells, which contain orbitals.`,
      t`Each orbital holds at most two electrons.`,
    ],
    formal: [
      {
        title: "The four numbers",
        points: [
          t`$n$ = 1, 2, 3 …: size and energy (K, L, M, N shells).`,
          t`$l$ = 0 to $n - 1$: shape (s, p, d, f).`,
          t`$m_l$ = $-l$ to $+l$: orientation.`,
          t`$m_s$ = $+\tfrac12$ or $-\tfrac12$: spin.`,
        ],
      },
      {
        title: "Counting and shapes",
        points: [
          t`Shell $n$ has $n^2$ orbitals and holds $2n^2$ electrons.`,
          t`s orbitals are spherical; p orbitals dumbbell-shaped.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many orbitals and electrons does the M shell ($n = 3$) hold?`,
      steps: [
        t`Orbitals: $3^2 = 9$ (one 3s, three 3p, five 3d).`,
        t`Electrons: $2 \times 9 = 18$.`,
      ],
      answer: t`9 orbitals, 18 electrons`,
    },
    visualSpec: t`Expand each shell into its subshells and orbitals, and fill the boxes with spin arrows.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Confuses $n$ with $l$.`,
      remediation: t`$l$ gives the shape; $n$ gives the size.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Confuses $n$ with $m_s$.`,
      remediation: t`$m_s$ gives the spin; $n$ gives the size.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Confuses $n$ with $m_l$.`,
      remediation: t`$m_l$ gives the orientation; $n$ gives the size.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Gives the s shape.",
      remediation: "s orbitals are spherical; p orbitals are dumbbells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Gives the d shape.",
      remediation: "Most d orbitals are double dumbbells; p are single dumbbells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Invents a shape.",
      remediation: "p orbitals are dumbbell-shaped.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: t`Gives $n$.`,
      remediation: t`Shell $n$ has $n^2$ orbitals.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Gives $2n$.`,
      remediation: t`Count the orbitals: $n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Gives the number of electrons.",
      remediation: t`$2n^2$ counts electrons; orbitals are $n^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: t`Counts $l$ from 1 to $n$.`,
      remediation: t`$l$ runs from 0 to $n - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: t`Counts $l$ up to $n$.`,
      remediation: t`The largest $l$ is $n - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: t`Gives the $m_l$ values.`,
      remediation: t`$m_l$ runs $-l$ to $+l$; $l$ runs 0 to $n - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: t`Takes $l = 2$ for p.`,
      remediation: t`$l$ = 0, 1, 2, 3 is s, p, d, f: $l = 2$ is d.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: t`Swaps $n$ and $l$.`,
      remediation: t`The number in front is $n$ = 4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Takes $l = 2$ for f.`,
      remediation: t`f is $l = 3$; $l = 2$ is d.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.1 (E)" },
      stem: t`The principal quantum number describes the orbital's`,
      verify: { kind: "value", inputs: {  }, params: { q: "n_describes" } },
      options: [
        { key: "A", text: t`shape`, correct: false, misconceptionId: "C06-M1", value: "shape_l" },
        { key: "B", text: t`size`, correct: true, value: "size" },
        { key: "C", text: t`orientation`, correct: false, misconceptionId: "C06-M3", value: "orientation" },
        { key: "D", text: t`electron spin`, correct: false, misconceptionId: "C06-M2", value: "spin" },
      ],
      solution: {
        steps: [
          t`$n$ is the shell number.`,
          t`It sets the orbital's size and energy.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.1 (C)" },
      stem: t`p orbitals are`,
      verify: { kind: "value", inputs: {  }, params: { q: "p_shape" } },
      options: [
        { key: "A", text: t`double dumbbell-shaped`, correct: false, misconceptionId: "C06-M5", value: "double_dumbbell" },
        { key: "B", text: t`spherical`, correct: false, misconceptionId: "C06-M4", value: "spherical" },
        { key: "C", text: t`dumbbell-shaped`, correct: true, value: "dumbbell" },
        { key: "D", text: t`diagonal`, correct: false, misconceptionId: "C06-M6", value: "diagonal" },
      ],
      solution: {
        steps: [
          t`p orbitals have two lobes.`,
          t`Dumbbell-shaped.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Solved Ex.4.9" },
      stem: t`How many orbitals are there in the N shell ($n = 4$)?`,
      verify: { kind: "value", inputs: { n: "4" }, params: { q: "n_shell" } },
      options: [
        { key: "A", text: t`$32$`, correct: false, misconceptionId: "C06-M9", value: "32" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C06-M7", value: "4" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C06-M8", value: "8" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`Orbitals in shell $n$ = $n^2$.`,
          t`$4^2 = 16$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (O)" },
      stem: t`For $n = 3$, the possible values of $l$ are`,
      verify: { kind: "value", inputs: {  }, params: { q: "l_values" } },
      options: [
        { key: "A", text: t`0, 1, 2`, correct: true, value: "l_012" },
        { key: "B", text: t`−2, −1, 0, +1, +2`, correct: false, misconceptionId: "C06-M12", value: "l_m2_to_2" },
        { key: "C", text: t`1, 2, 3`, correct: false, misconceptionId: "C06-M10", value: "l_123" },
        { key: "D", text: t`0, 1, 2, 3`, correct: false, misconceptionId: "C06-M11", value: "l_0123" },
      ],
      solution: {
        steps: [
          t`$l$ = 0 to $n - 1$.`,
          t`0, 1, 2.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (J)" },
      stem: t`An electron has $n = 4$ and $l = 2$. Its orbital is`,
      verify: { kind: "value", inputs: {  }, params: { q: "notation" } },
      options: [
        { key: "A", text: t`4p`, correct: false, misconceptionId: "C06-M13", value: "o_4p" },
        { key: "B", text: t`4d`, correct: true, value: "o_4d" },
        { key: "C", text: t`2d`, correct: false, misconceptionId: "C06-M14", value: "o_2d" },
        { key: "D", text: t`4f`, correct: false, misconceptionId: "C06-M15", value: "o_4f" },
      ],
      solution: {
        steps: [
          t`$l = 2$ is d.`,
          t`4d.`,
        ],
      },
    },
  ],
};
