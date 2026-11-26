import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Phosphorus forms $\ce{PCl3}$ and $\ce{PCl5}$, but nitrogen, just above it, forms only $\ce{NCl3}$. What stops nitrogen at three?`,
    reveal: t`Nitrogen's valence shell ($n$ = 2) has no d orbitals, so it cannot hold more than four electron pairs.`,
  },
  explanation: {
    intuition: [
      t`Group 13 shows +3, group 14 +4 and +2, group 15 from −3 to +5.`,
      t`Second-period elements cannot expand their octet: no d orbitals.`,
      t`Lower down, the higher states become less stable.`,
      t`Oxides grow more basic down a group, more acidic across.`,
    ],
    formal: [
      {
        title: "Oxidation states",
        points: [
          t`Group 15: −3 (in $\ce{NH3}$) up to +5 (in $\ce{HNO3}$); +5 grows less stable down the group.`,
          t`C shows −4 in $\ce{CH4}$ and +4 in $\ce{CO2}$.`,
          t`N cannot form $\ce{NCl5}$; P forms $\ce{PCl5}$ using 3d orbitals.`,
        ],
      },
      {
        title: "Oxides",
        points: [
          t`Group 15: $\ce{N2O5}$ and $\ce{P4O10}$ acidic; $\ce{Bi2O3}$ basic.`,
          t`Group 13: $\ce{B2O3}$ acidic, $\ce{Al2O3}$ amphoteric, $\ce{Tl2O}$ basic.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $\ce{Al2O3}$ acidic, basic or amphoteric?`,
      steps: [
        t`Al is between nonmetallic B and metallic Tl.`,
        t`$\ce{Al2O3}$ reacts with acids and bases.`,
      ],
      answer: t`Amphoteric`,
    },
    visualSpec: t`Chart each element's oxidation states and colour its oxides from acidic to basic.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Calls nitrogen too large.",
      remediation: "Nitrogen is small; it lacks d orbitals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Blames chlorine.",
      remediation: t`Phosphorus forms $\ce{PCl5}$ with the same chlorine.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks nitrogen forms no covalent bonds.",
      remediation: t`It forms $\ce{NCl3}$; it cannot exceed four bonds.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks +5 grows more stable down the group.",
      remediation: "Bi(V) is a strong oxidant: +5 grows less stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks it stays the same.",
      remediation: "+3 becomes more stable than +5 lower down.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks only N shows +5.",
      remediation: "P, As, Sb and Bi show +5 too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Flips the sign.",
      remediation: "H is +1, so C is −4.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Gives 0.",
      remediation: "Only free elements are 0.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Counts one H.",
      remediation: "Four H at +1 give C −4.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Reverses the trend.",
      remediation: "Acidity falls down the group: N's oxide is most acidic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Counts O atoms.",
      remediation: "Acidity depends on the element's nonmetallic character.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks arsenic.",
      remediation: "Nitrogen, at the top, gives the most acidic oxide.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says more acidic.",
      remediation: "Metallic character rises down the group, so oxides grow more basic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says no different.",
      remediation: t`$\ce{B2O3}$ is acidic, $\ce{Tl2O}$ basic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says neutral.",
      remediation: "They range from acidic to basic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Solved Ex.9.6" },
      stem: t`Nitrogen does not form $\ce{NCl5}$, though phosphorus forms $\ce{PCl5}$, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "ncl5" } },
      options: [
        { key: "A", text: t`chlorine is too electronegative`, correct: false, misconceptionId: "C03-M2", value: "cl_too_electronegative" },
        { key: "B", text: t`nitrogen cannot form covalent bonds`, correct: false, misconceptionId: "C03-M3", value: "no_covalent" },
        { key: "C", text: t`nitrogen atoms are too large`, correct: false, misconceptionId: "C03-M1", value: "n_too_large" },
        { key: "D", text: t`nitrogen has no d orbitals in its valence shell, so it cannot form five bonds`, correct: true, value: "no_d_orbitals" },
      ],
      solution: {
        steps: [
          t`N's valence shell has only 2s and 2p.`,
          t`No d orbitals: at most four bonds.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.10" },
      stem: t`Going down group 15 from N to Bi, the stability of the +5 oxidation state`,
      verify: { kind: "value", inputs: {  }, params: { q: "plus5" } },
      options: [
        { key: "A", text: t`decreases`, correct: true, value: "decreases" },
        { key: "B", text: t`exists only for nitrogen`, correct: false, misconceptionId: "C03-M6", value: "only_nitrogen" },
        { key: "C", text: t`stays the same`, correct: false, misconceptionId: "C03-M5", value: "constant" },
        { key: "D", text: t`increases`, correct: false, misconceptionId: "C03-M4", value: "increases" },
      ],
      solution: {
        steps: [
          t`The inert pair effect grows down the group.`,
          t`+5 becomes less stable.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.4 (C)" },
      stem: t`What is the oxidation state of carbon in methane, $\ce{CH4}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ch4" } },
      options: [
        { key: "A", text: t`+4`, correct: false, misconceptionId: "C03-M7", value: "plus_4" },
        { key: "B", text: t`−4`, correct: true, value: "minus_4" },
        { key: "C", text: t`−1`, correct: false, misconceptionId: "C03-M9", value: "minus_1" },
        { key: "D", text: t`0`, correct: false, misconceptionId: "C03-M8", value: "zero" },
      ],
      solution: {
        steps: [
          t`$x + 4(+1) = 0$.`,
          t`$x = -4$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.2 (B)" },
      stem: t`Which group 15 oxide is the most acidic?`,
      verify: { kind: "value", inputs: {  }, params: { q: "acidic_oxide" } },
      options: [
        { key: "A", text: t`$\ce{P4O10}$`, correct: false, misconceptionId: "C03-M11", value: "p4o10" },
        { key: "B", text: t`$\ce{As2O5}$`, correct: false, misconceptionId: "C03-M12", value: "as2o5" },
        { key: "C", text: t`$\ce{N2O5}$`, correct: true, value: "n2o5" },
        { key: "D", text: t`$\ce{Bi2O5}$`, correct: false, misconceptionId: "C03-M10", value: "bi2o5" },
      ],
      solution: {
        steps: [
          t`Nonmetallic character is greatest at the top.`,
          t`$\ce{N2O5}$ is most acidic.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.15 (A)" },
      stem: t`Going down group 13, the oxides become`,
      verify: { kind: "value", inputs: {  }, params: { q: "group13_oxides" } },
      options: [
        { key: "A", text: t`neutral`, correct: false, misconceptionId: "C03-M15", value: "neutral" },
        { key: "B", text: t`more acidic`, correct: false, misconceptionId: "C03-M13", value: "more_acidic" },
        { key: "C", text: t`no different from each other`, correct: false, misconceptionId: "C03-M14", value: "unchanged" },
        { key: "D", text: t`more basic: $\ce{B2O3}$ acidic, $\ce{Al2O3}$ amphoteric, $\ce{Tl2O}$ basic`, correct: true, value: "more_basic" },
      ],
      solution: {
        steps: [
          t`Metallic character rises down group 13.`,
          t`Oxides become more basic.`,
        ],
      },
    },
  ],
};
