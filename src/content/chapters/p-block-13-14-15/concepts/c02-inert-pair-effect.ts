import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Carbon and silicon happily form four bonds, but lead mostly forms two: $\ce{PbCl2}$ is stable while $\ce{PbCl4}$ decomposes. Why does lead hold back?`,
    reveal: t`Its $6s^2$ pair is held tightly and reluctant to bond, the inert pair effect, so lead prefers +2.`,
  },
  explanation: {
    intuition: [
      t`Heavy p-block elements have an $ns^2$ pair that resists bonding.`,
      t`So their lower oxidation state, two below the group maximum, becomes more stable.`,
      t`The effect grows down a group.`,
      t`It explains Tl(I), Pb(II) and Bi(III).`,
    ],
    formal: [
      {
        title: "Examples",
        points: [
          t`Group 13: $\ce{Tl+}$ more stable than $\ce{Tl^{3+}}$; Tl(III) salts are oxidising.`,
          t`Group 14: $\ce{GeCl4}$ stable, but $\ce{PbCl2}$ more stable than $\ce{PbCl4}$.`,
          t`Pb shows the effect most in group 14.`,
          t`Down group 13 the +1 state becomes steadily more stable.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which is the more stable chloride of tin, $\ce{SnCl2}$ or $\ce{SnCl4}$?`,
      steps: [
        t`Tin is above lead, so the inert pair effect is weaker.`,
        t`Sn(IV) is still stable: $\ce{SnCl4}$.`,
      ],
      answer: t`$\ce{SnCl4}$`,
    },
    visualSpec: t`Follow the $ns^2$ pair down a group and watch it stop joining in bonding.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks the effect is strongest at the top.",
      remediation: "It grows down the group: Pb shows it most.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks metalloids show it most.",
      remediation: "The heaviest element, Pb, shows it most.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks germanium.",
      remediation: t`$\ce{GeCl4}$ is stable; the effect is weak for Ge.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Calls thallium an inner transition element.",
      remediation: "Tl is a p-block element in group 13.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Credits its being a metal.",
      remediation: "Being a metal does not decide its oxidation state; the inert pair does.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Credits electronegativity.",
      remediation: t`The $6s^2$ pair's reluctance to bond decides.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks more chlorine means more stable.",
      remediation: "Pb(IV) is less stable because of the inert pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks lead prefers +4 like carbon.",
      remediation: "Lead prefers +2: the inert pair effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks chlorine cannot oxidise lead.",
      remediation: t`$\ce{PbCl4}$ forms but decomposes to $\ce{PbCl2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks Tl(III) loses electrons.",
      remediation: t`An oxidising agent gains electrons: $\ce{Tl^{3+} -> Tl+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: t`Thinks $\ce{Tl+}$ is unstable.`,
      remediation: t`$\ce{Tl+}$ is the stable state.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Calls thallium a nonmetal.",
      remediation: "Thallium is a metal.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks +1 gets less stable down the group.",
      remediation: "The inert pair effect makes +1 more stable lower down.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks it stays the same.",
      remediation: "B has no stable +1; Tl prefers +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Thinks only +3 exists.",
      remediation: "Ga, In and Tl also show +1.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.1 (E)" },
      stem: t`Which element shows the most prominent inert pair effect?`,
      verify: { kind: "value", inputs: {  }, params: { q: "most" } },
      options: [
        { key: "A", text: t`C`, correct: false, misconceptionId: "C02-M1", value: "carbon" },
        { key: "B", text: t`Pb`, correct: true, value: "lead" },
        { key: "C", text: t`Si`, correct: false, misconceptionId: "C02-M2", value: "silicon" },
        { key: "D", text: t`Ge`, correct: false, misconceptionId: "C02-M3", value: "germanium" },
      ],
      solution: {
        steps: [
          t`The effect grows down the group.`,
          t`Pb, the heaviest, shows it most.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Solved Ex.9.4" },
      stem: t`$\ce{Tl+}$ is more stable than $\ce{Tl^{3+}}$ because`,
      verify: { kind: "value", inputs: {  }, params: { q: "thallium" } },
      options: [
        { key: "A", text: t`thallium is an inner transition element`, correct: false, misconceptionId: "C02-M4", value: "inner_transition" },
        { key: "B", text: t`thallium is a metal`, correct: false, misconceptionId: "C02-M5", value: "is_metal" },
        { key: "C", text: t`of the inert pair effect: its $6s^2$ pair resists taking part in bonding`, correct: true, value: "inert_pair" },
        { key: "D", text: t`thallium has a high electronegativity`, correct: false, misconceptionId: "C02-M6", value: "electronegativity" },
      ],
      solution: {
        steps: [
          t`Tl's $6s^2$ pair is reluctant to bond.`,
          t`So +1 is more stable.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.3 (B)" },
      stem: t`$\ce{PbCl2}$ is more stable than $\ce{PbCl4}$ because`,
      verify: { kind: "value", inputs: {  }, params: { q: "pbcl2" } },
      options: [
        { key: "A", text: t`chlorine cannot oxidise lead`, correct: false, misconceptionId: "C02-M9", value: "cl_cannot_oxidise" },
        { key: "B", text: t`lead prefers +4, like carbon`, correct: false, misconceptionId: "C02-M8", value: "prefers_plus4" },
        { key: "C", text: t`$\ce{PbCl4}$ has more chlorine, so it should be more stable`, correct: false, misconceptionId: "C02-M7", value: "more_chlorine" },
        { key: "D", text: t`the inert pair effect makes +2 the more stable state for Pb`, correct: true, value: "inert_pair_plus2" },
      ],
      solution: {
        steps: [
          t`Pb's $6s^2$ pair holds back.`,
          t`+2 is more stable.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.3 (A)" },
      stem: t`Thallium(III) salts are good oxidising agents because`,
      verify: { kind: "value", inputs: {  }, params: { q: "tl3_oxidant" } },
      options: [
        { key: "A", text: t`$\ce{Tl^{3+}}$ readily gains two electrons to form the more stable $\ce{Tl+}$`, correct: true, value: "gains_two" },
        { key: "B", text: t`thallium is a nonmetal`, correct: false, misconceptionId: "C02-M12", value: "nonmetal" },
        { key: "C", text: t`$\ce{Tl^{3+}}$ readily loses electrons`, correct: false, misconceptionId: "C02-M10", value: "loses_electrons" },
        { key: "D", text: t`$\ce{Tl+}$ is unstable`, correct: false, misconceptionId: "C02-M11", value: "tl_plus_unstable" },
      ],
      solution: {
        steps: [
          t`$\ce{Tl^{3+}}$ gains two electrons to form $\ce{Tl+}$.`,
          t`It is reduced, so it oxidises others.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.1 (D)" },
      stem: t`Going down group 13, the stability of the +1 oxidation state`,
      verify: { kind: "value", inputs: {  }, params: { q: "plus1_trend" } },
      options: [
        { key: "A", text: t`does not exist: only +3 is found`, correct: false, misconceptionId: "C02-M15", value: "only_plus3" },
        { key: "B", text: t`increases`, correct: true, value: "increases" },
        { key: "C", text: t`decreases`, correct: false, misconceptionId: "C02-M13", value: "decreases" },
        { key: "D", text: t`stays the same`, correct: false, misconceptionId: "C02-M14", value: "constant" },
      ],
      solution: {
        steps: [
          t`The inert pair effect grows down the group.`,
          t`+1 becomes more stable.`,
        ],
      },
    },
  ],
};
