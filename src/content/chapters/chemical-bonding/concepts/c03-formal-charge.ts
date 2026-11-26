import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`The thiocyanate ion, $\ce{SCN-}$, can be drawn three ways, all obeying the octet rule. Which drawing is the real one?`,
    reveal: t`Formal charge decides: the best structure keeps the charges on each atom as small as possible.`,
  },
  explanation: {
    intuition: [
      t`A Lewis structure can give an atom more or fewer electrons than it brought.`,
      t`**Formal charge** keeps that bookkeeping.`,
      t`An atom owns its lone-pair electrons and half of each bond.`,
      t`The best structure has the smallest formal charges.`,
    ],
    formal: [
      {
        title: "Formula",
        points: [
          t`$\mathrm{FC} = V - N - \tfrac12 B$`,
          t`$V$: valence electrons of the free atom; $N$: non-bonding (lone-pair) electrons; $B$: bonding electrons.`,
          t`The formal charges add up to the overall charge.`,
        ],
      },
      {
        title: "Choosing a structure",
        points: [
          t`Prefer the smallest formal charges.`,
          t`Put any negative charge on the more electronegative atom.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the formal charge on C in $\ce{CO2}$ (O=C=O).`,
      steps: [
        t`C: $V$ = 4, $N$ = 0, $B$ = 8.`,
        t`FC = 4 − 0 − 4 = 0.`,
      ],
      answer: t`0`,
    },
    visualSpec: t`Split each bond's electrons between its two atoms and tally what each atom owns.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Subtracts all the bonding electrons.",
      remediation: "Each bond is shared: subtract half the bonding electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Leaves out the non-bonding electrons.",
      remediation: "Lone-pair electrons belong to the atom: subtract them.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Counts lone pairs instead of lone electrons.",
      remediation: "Each lone pair is two electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Prefers the structure with the most bonds.",
      remediation: "Prefer the smallest formal charges.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Prefers the largest formal charges.",
      remediation: "Large separated charges make a structure less stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Puts positive charge on the more electronegative atom.",
      remediation: "Negative charge belongs on the more electronegative atom.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Solved Ex.5.3" },
      stem: t`In the ion $\ce{(S=C=N)-}$, N has two lone pairs and a double bond. What is the formal charge on N?`,
      verify: { kind: "value", inputs: { V: "5", N: "4", B: "4" }, params: { q: "fc" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C03-M2", value: "3" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "C", text: t`$-3$`, correct: false, misconceptionId: "C03-M1", value: "-3" },
        { key: "D", text: t`$-1$`, correct: true, value: "-1" },
      ],
      solution: {
        steps: [
          t`N: $V$ = 5, $N$ = 4, $B$ = 4.`,
          t`FC = 5 − 4 − 2 = −1.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Solved Ex.5.3" },
      stem: t`In the ion $\ce{(S-C#N)-}$, S has three lone pairs and a single bond. What is the formal charge on S?`,
      verify: { kind: "value", inputs: { V: "6", N: "6", B: "2" }, params: { q: "fc" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C03-M2", value: "5" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C03-M1", value: "-2" },
      ],
      solution: {
        steps: [
          t`S: $V$ = 6, $N$ = 6, $B$ = 2.`,
          t`FC = 6 − 6 − 1 = −1.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`In $\ce{H3O+}$, O has one lone pair and three single bonds. What is the formal charge on O?`,
      verify: { kind: "value", inputs: { V: "6", N: "2", B: "6" }, params: { q: "fc" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C03-M1", value: "-2" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C03-M2", value: "3" },
      ],
      solution: {
        steps: [
          t`O: $V$ = 6, $N$ = 2, $B$ = 6.`,
          t`FC = 6 − 2 − 3 = +1.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (J)" },
      stem: t`Of several possible Lewis structures for a molecule, the preferred one has`,
      verify: { kind: "value", inputs: {  }, params: { q: "best" } },
      options: [
        { key: "A", text: t`the largest formal charges`, correct: false, misconceptionId: "C03-M5", value: "largest_charges" },
        { key: "B", text: t`a positive charge on the most electronegative atom`, correct: false, misconceptionId: "C03-M6", value: "positive_on_en" },
        { key: "C", text: t`the smallest formal charges, any negative charge on the more electronegative atom`, correct: true, value: "smallest_charges" },
        { key: "D", text: t`the most bonds`, correct: false, misconceptionId: "C03-M4", value: "most_bonds" },
      ],
      solution: {
        steps: [
          t`Small formal charges mean little charge separation.`,
          t`Negative charge on the more electronegative atom.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Solved Ex.5.1" },
      stem: t`In the nitrite ion, O=N–O$^-$, N has one lone pair, one double bond and one single bond. What is the formal charge on N?`,
      verify: { kind: "value", inputs: { V: "5", N: "2", B: "6" }, params: { q: "fc" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "B", text: t`$-3$`, correct: false, misconceptionId: "C03-M1", value: "-3" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "D", text: t`$0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`N: $V$ = 5, $N$ = 2, $B$ = 6.`,
          t`FC = 5 − 2 − 3 = 0.`,
        ],
      },
    },
  ],
};
