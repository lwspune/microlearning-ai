import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Magnesium chloride melts at 987 K and conducts when molten. Beryllium chloride melts at 672 K and barely conducts. Same group, same chlorine. Why?`,
    reveal: t`$\ce{Be^{2+}}$ is so small that it pulls chloride's electron cloud towards itself, making the bond largely covalent.`,
  },
  explanation: {
    intuition: [
      t`A cation pulls on a nearby anion's electron cloud: **polarisation**.`,
      t`Small, highly charged cations polarise most.`,
      t`Large anions are easiest to polarise.`,
      t`Heavy polarisation makes an ionic bond partly covalent.`,
    ],
    formal: [
      {
        title: "Fajans' rules",
        points: [
          t`Covalent character rises as the cation gets smaller and more highly charged.`,
          t`It rises as the anion gets larger.`,
          t`$\ce{BeCl2}$ is covalent, $\ce{MgCl2}$ ionic; LiCl has covalent character, NaCl is ionic.`,
          t`$\ce{BeCl2}$ is electron deficient, so it is a Lewis acid.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which is more covalent, LiI or LiF?`,
      steps: [
        t`Same cation.`,
        t`$\ce{I-}$ is larger and more easily polarised.`,
      ],
      answer: t`LiI`,
    },
    visualSpec: t`Bring cations of different sizes up to an anion and watch its electron cloud distort.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Calls Be more electropositive.",
      remediation: "Be is less electropositive; its small size polarises chloride.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Counts chlorine atoms.",
      remediation: "Both have two Cl; the cation's size differs.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Calls $\ce{Be^{2+}}$ larger.`,
      remediation: t`$\ce{Be^{2+}}$ is much smaller than $\ce{Mg^{2+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Gives $\ce{Li+}$ a higher charge.`,
      remediation: t`Both are +1; $\ce{Li+}$ is smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Counts electrons.",
      remediation: "Polarisation depends on the cation's size and charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Calls $\ce{Na+}$ smaller.`,
      remediation: t`$\ce{Li+}$ is the smaller ion.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks any group 2 chloride is a Lewis acid.",
      remediation: t`$\ce{BaCl2}$ is ionic; only covalent, electron-deficient $\ce{BeCl2}$ is.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks KCl accepts electron pairs.",
      remediation: "KCl is an ionic salt with no empty orbital to offer.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks LiCl is electron deficient.",
      remediation: t`LiCl is largely ionic; Be in $\ce{BeCl2}$ has only four valence electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks big cations polarise more.",
      remediation: "Small cations polarise more.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: t`Picks $\ce{Na+}$.`,
      remediation: t`$\ce{Be^{2+}}$ is smaller and doubly charged.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: t`Picks $\ce{K+}$.`,
      remediation: t`$\ce{K+}$ is large and singly charged: weakly polarising.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says a large cation.",
      remediation: "Small cations give more covalent character.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says a small anion.",
      remediation: "Large anions are more easily polarised.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says single charges.",
      remediation: "Higher charges increase polarisation.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.1 (E)" },
      stem: t`$\ce{BeCl2}$ is covalent while $\ce{MgCl2}$ is ionic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "becl2" } },
      options: [
        { key: "A", text: t`$\ce{Be^{2+}}$ is larger than $\ce{Mg^{2+}}$`, correct: false, misconceptionId: "C05-M3", value: "be_larger" },
        { key: "B", text: t`$\ce{MgCl2}$ contains more chlorine`, correct: false, misconceptionId: "C05-M2", value: "more_chlorine" },
        { key: "C", text: t`Be is more electropositive than Mg`, correct: false, misconceptionId: "C05-M1", value: "be_electropositive" },
        { key: "D", text: t`the very small $\ce{Be^{2+}}$ ion strongly polarises $\ce{Cl-}$`, correct: true, value: "be_small_polarising" },
      ],
      solution: {
        steps: [
          t`$\ce{Be^{2+}}$ is tiny and doubly charged.`,
          t`It polarises $\ce{Cl-}$ strongly: covalent.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Solved Ex.8.6" },
      stem: t`NaCl is ionic but LiCl has some covalent character because`,
      verify: { kind: "value", inputs: {  }, params: { q: "licl" } },
      options: [
        { key: "A", text: t`the smaller $\ce{Li+}$ polarises $\ce{Cl-}$ more`, correct: true, value: "li_smaller" },
        { key: "B", text: t`LiCl has more electrons`, correct: false, misconceptionId: "C05-M5", value: "more_electrons" },
        { key: "C", text: t`$\ce{Na+}$ is smaller than $\ce{Li+}$`, correct: false, misconceptionId: "C05-M6", value: "na_smaller" },
        { key: "D", text: t`$\ce{Li+}$ has a higher charge than $\ce{Na+}$`, correct: false, misconceptionId: "C05-M4", value: "li_higher_charge" },
      ],
      solution: {
        steps: [
          t`$\ce{Li+}$ is smaller than $\ce{Na+}$.`,
          t`It polarises $\ce{Cl-}$ more.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.5 (C)" },
      stem: t`Which of these is a Lewis acid?`,
      verify: { kind: "value", inputs: {  }, params: { q: "lewis" } },
      options: [
        { key: "A", text: t`$\ce{BaCl2}$`, correct: false, misconceptionId: "C05-M7", value: "bacl2" },
        { key: "B", text: t`$\ce{BeCl2}$`, correct: true, value: "becl2" },
        { key: "C", text: t`KCl`, correct: false, misconceptionId: "C05-M8", value: "kcl" },
        { key: "D", text: t`LiCl`, correct: false, misconceptionId: "C05-M9", value: "licl" },
      ],
      solution: {
        steps: [
          t`Be in $\ce{BeCl2}$ has only four valence electrons.`,
          t`It accepts electron pairs: a Lewis acid.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`Which cation has the greatest polarising power?`,
      verify: { kind: "value", inputs: {  }, params: { q: "polarising" } },
      options: [
        { key: "A", text: t`$\ce{Na+}$`, correct: false, misconceptionId: "C05-M11", value: "na_ion" },
        { key: "B", text: t`$\ce{K+}$`, correct: false, misconceptionId: "C05-M12", value: "k_ion" },
        { key: "C", text: t`$\ce{Be^{2+}}$`, correct: true, value: "be2" },
        { key: "D", text: t`$\ce{Ba^{2+}}$`, correct: false, misconceptionId: "C05-M10", value: "ba2" },
      ],
      solution: {
        steps: [
          t`Smallest and doubly charged.`,
          t`$\ce{Be^{2+}}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`An ionic compound has more covalent character when`,
      verify: { kind: "value", inputs: {  }, params: { q: "fajans" } },
      options: [
        { key: "A", text: t`both ions carry single charges`, correct: false, misconceptionId: "C05-M15", value: "single_charges" },
        { key: "B", text: t`the cation is large`, correct: false, misconceptionId: "C05-M13", value: "large_cation" },
        { key: "C", text: t`the anion is small`, correct: false, misconceptionId: "C05-M14", value: "small_anion" },
        { key: "D", text: t`the cation is small and highly charged and the anion large`, correct: true, value: "small_charged_cation" },
      ],
      solution: {
        steps: [
          t`Small, highly charged cations polarise most.`,
          t`Large anions are most easily polarised.`,
        ],
      },
    },
  ],
};
