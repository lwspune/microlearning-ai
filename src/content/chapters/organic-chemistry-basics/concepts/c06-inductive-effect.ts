import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Chloroacetic acid is a hundred times stronger an acid than acetic acid. How can one chlorine atom, two bonds away, make such a difference?`,
    reveal: t`Chlorine pulls σ electrons along the chain towards itself, the −I effect, stabilising the acid's anion.`,
  },
  explanation: {
    intuition: [
      t`Electronegative atoms pull σ electrons towards themselves.`,
      t`This shift passes along the chain: the **inductive effect**.`,
      t`Groups that pull are −I; groups that push are +I.`,
      t`The effect weakens quickly with distance.`,
    ],
    formal: [
      {
        title: "Effects",
        points: [
          t`−I: $\ce{NO2}$, CN, COOH, F > Cl > Br > I.`,
          t`+I: alkyl groups such as $\ce{CH3}$.`,
          t`More −I groups: stronger effect ($\ce{CHCl2}$ > $\ce{CH2Cl}$).`,
        ],
      },
      {
        title: "Character",
        points: [
          t`Permanent: present in the molecule at all times.`,
          t`Fades along the chain; negligible beyond about three carbons.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which is the stronger acid, $\ce{FCH2COOH}$ or $\ce{ClCH2COOH}$?`,
      steps: [
        t`F is more electronegative: stronger −I.`,
        t`Its anion is more stabilised.`,
      ],
      answer: t`$\ce{FCH2COOH}$`,
    },
    visualSpec: t`Show δ+ and δ− charges fading along a chain from an electronegative atom.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks one Cl.",
      remediation: "Two Cl atoms pull more strongly.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Calls them equal.",
      remediation: "Each Cl adds to the −I effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Calls Cl +I.",
      remediation: "Electronegative Cl pulls electrons: −I.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Calls the shift temporary.",
      remediation: "Inductive shifts are permanent; electromeric ones are temporary.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks it needs an attacking reagent.",
      remediation: "It exists without any reagent.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Limits it to ions.",
      remediation: "It acts in neutral molecules too.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks Br.",
      remediation: "Cl is more electronegative than Br.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks I.",
      remediation: "Larger halogens pull less: I is weakest.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Calls them equal.",
      remediation: "−I follows electronegativity: Cl > Br > I.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: t`Picks $\ce{NO2}$.`,
      remediation: t`$\ce{NO2}$ withdraws: −I.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks Cl.",
      remediation: "Cl withdraws: −I.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks COOH.",
      remediation: "COOH withdraws: −I.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks it grows along the chain.",
      remediation: "It weakens with distance.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Thinks it stays the same.",
      remediation: "Each bond passes on less of the effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks it acts through π bonds.",
      remediation: "The inductive effect acts through σ bonds.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.7" },
      stem: t`Which has the stronger −I effect on the ethyl skeleton: $\ce{CH3CHCl2}$ or $\ce{CH3CH2Cl}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dichloro" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH2Cl}$`, correct: false, misconceptionId: "C06-M1", value: "ch2cl" },
        { key: "B", text: t`$\ce{CH3CHCl2}$`, correct: true, value: "chcl2" },
        { key: "C", text: t`neither: Cl has a +I effect`, correct: false, misconceptionId: "C06-M3", value: "cl_plus_i" },
        { key: "D", text: t`they are equal`, correct: false, misconceptionId: "C06-M2", value: "equal" },
      ],
      solution: {
        steps: [
          t`Two Cl atoms both pull electrons.`,
          t`$\ce{CH3CHCl2}$ has the stronger −I effect.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.12 (B)" },
      stem: t`The displacement of electrons in the inductive effect is`,
      verify: { kind: "value", inputs: {  }, params: { q: "permanent" } },
      options: [
        { key: "A", text: t`present only when a reagent attacks`, correct: false, misconceptionId: "C06-M5", value: "reagent_only" },
        { key: "B", text: t`temporary`, correct: false, misconceptionId: "C06-M4", value: "temporary" },
        { key: "C", text: t`permanent`, correct: true, value: "permanent" },
        { key: "D", text: t`found only in ions`, correct: false, misconceptionId: "C06-M6", value: "ions_only" },
      ],
      solution: {
        steps: [
          t`Electronegativity differences are always present.`,
          t`The shift is permanent.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.6" },
      stem: t`Which halide has the strongest −I effect?`,
      verify: { kind: "value", inputs: {  }, params: { q: "halides" } },
      options: [
        { key: "A", text: t`all are equal`, correct: false, misconceptionId: "C06-M9", value: "equal" },
        { key: "B", text: t`$\ce{CH3CH2CH2Br}$`, correct: false, misconceptionId: "C06-M7", value: "bromide" },
        { key: "C", text: t`$\ce{CH3CH2CH2I}$`, correct: false, misconceptionId: "C06-M8", value: "iodide" },
        { key: "D", text: t`$\ce{CH3CH2CH2Cl}$`, correct: true, value: "chloride" },
      ],
      solution: {
        steps: [
          t`Cl is the most electronegative of the three.`,
          t`Strongest −I: the chloride.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`Which group shows a +I effect?`,
      verify: { kind: "value", inputs: {  }, params: { q: "plus_i" } },
      options: [
        { key: "A", text: t`$\ce{-CH3}$`, correct: true, value: "methyl" },
        { key: "B", text: t`$\ce{-COOH}$`, correct: false, misconceptionId: "C06-M12", value: "carboxyl" },
        { key: "C", text: t`$\ce{-NO2}$`, correct: false, misconceptionId: "C06-M10", value: "nitro" },
        { key: "D", text: t`$\ce{-Cl}$`, correct: false, misconceptionId: "C06-M11", value: "chloro" },
      ],
      solution: {
        steps: [
          t`Alkyl groups push electrons.`,
          t`$\ce{-CH3}$ is +I.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.15 (A)" },
      stem: t`Along a carbon chain, the inductive effect`,
      verify: { kind: "value", inputs: {  }, params: { q: "distance" } },
      options: [
        { key: "A", text: t`grows stronger`, correct: false, misconceptionId: "C06-M13", value: "grows" },
        { key: "B", text: t`fades quickly, becoming negligible after about three carbons`, correct: true, value: "fades" },
        { key: "C", text: t`stays the same`, correct: false, misconceptionId: "C06-M14", value: "constant" },
        { key: "D", text: t`acts only through π bonds`, correct: false, misconceptionId: "C06-M15", value: "pi_only" },
      ],
      solution: {
        steps: [
          t`Each bond transmits less.`,
          t`Negligible after about three carbons.`,
        ],
      },
    },
  ],
};
