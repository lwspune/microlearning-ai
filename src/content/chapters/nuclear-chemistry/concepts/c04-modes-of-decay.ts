import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Thorium-232 ends up, after a long chain of decays, as lead-208. How many α and β particles does it shed on the way?`,
    reveal: t`Six α and four β. Mass number falls only by α decay; atomic number falls by α and rises by β.`,
  },
  explanation: {
    intuition: [
      t`Unstable nuclei decay by emitting particles or rays.`,
      t`α decay removes a helium nucleus: A falls by 4, Z by 2.`,
      t`$\beta^-$ decay turns a neutron into a proton: Z rises by 1.`,
      t`γ emission changes neither A nor Z.`,
    ],
    formal: [
      {
        title: "Decay modes",
        points: [
          t`α: $^{A}_{Z}\mathrm{X} \to {}^{A-4}_{Z-2}\mathrm{Y} + {}^{4}_{2}\mathrm{He}$.`,
          t`$\beta^-$: $^{A}_{Z}\mathrm{X} \to {}^{A}_{Z+1}\mathrm{Y} + \beta^-$.`,
          t`Mass and charge numbers balance on both sides.`,
        ],
      },
      {
        title: "Counting a chain",
        points: [
          t`Number of α = (change in A) ÷ 4.`,
          t`Number of $\beta^-$ = 2 × (number of α) − (fall in Z).`,
          t`An α particle is $\ce{He^{2+}}$, a helium nucleus without electrons.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many α and $\beta^-$ are emitted in $^{238}_{92}\mathrm{U} \to {}^{206}_{82}\mathrm{Pb}$?`,
      steps: [
        t`α = (238 − 206) ÷ 4 = 8.`,
        t`$\beta^-$ = 2 × 8 − (92 − 82) = 6.`,
      ],
      answer: t`8 α and 6 $\beta^-$`,
    },
    visualSpec: t`Step a nucleus down an A–Z chart, one α or β at a time.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Ignores β emission.",
      remediation: "α alone would lower Z too far; β emissions raise it back.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Swaps the counts.",
      remediation: "α count comes from the change in A.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Takes the β count from the total change in Z.",
      remediation: t`$\beta^-$ = 2 × α − fall in Z.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks α decay raises Z.",
      remediation: "α decay lowers Z by 2, so A was two groups to the right.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks α leaves Z unchanged.",
      remediation: "α removes 2 protons.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks α changes Z by 1.",
      remediation: "α removes two protons: Z falls by 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Equates the α particle with a helium atom.",
      remediation: t`An α particle has no electrons: $\ce{He^{2+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Gives it four protons.",
      remediation: "It has 2 protons and 2 neutrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Calls it an electron.",
      remediation: "β particles are electrons; α is a helium nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks Z falls.",
      remediation: "A neutron becomes a proton: Z rises.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks A falls by 4.",
      remediation: "That is α decay.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks nothing changes.",
      remediation: "That is γ emission.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Solved Ex.13.6" },
      stem: t`How many α and $\beta^-$ particles are emitted in $^{237}_{93}\mathrm{Np}$ → $^{209}_{83}\mathrm{Bi}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "np" } },
      options: [
        { key: "A", text: t`4 α and 7 $\beta^-$`, correct: false, misconceptionId: "C04-M2", value: "a4_b7" },
        { key: "B", text: t`7 α and 4 $\beta^-$`, correct: true, value: "a7_b4" },
        { key: "C", text: t`7 α and 10 $\beta^-$`, correct: false, misconceptionId: "C04-M3", value: "a7_b10" },
        { key: "D", text: t`7 α and no $\beta^-$`, correct: false, misconceptionId: "C04-M1", value: "a7_b0" },
      ],
      solution: {
        steps: [
          t`α = (237 − 209) ÷ 4 = 7.`,
          t`$\beta^-$ = 14 − (93 − 83) = 4.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (P)" },
      stem: t`How many α and $\beta^-$ particles are emitted in $^{232}_{90}\mathrm{Th}$ → $^{208}_{82}\mathrm{Pb}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "th" } },
      options: [
        { key: "A", text: t`6 α and no $\beta^-$`, correct: false, misconceptionId: "C04-M1", value: "a6_b0" },
        { key: "B", text: t`4 α and 6 $\beta^-$`, correct: false, misconceptionId: "C04-M2", value: "a4_b6" },
        { key: "C", text: t`6 α and 4 $\beta^-$`, correct: true, value: "a6_b4" },
        { key: "D", text: t`6 α and 8 $\beta^-$`, correct: false, misconceptionId: "C04-M3", value: "a6_b8" },
      ],
      solution: {
        steps: [
          t`α = (232 − 208) ÷ 4 = 6.`,
          t`$\beta^-$ = 12 − (90 − 82) = 4.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (Q)" },
      stem: t`Element A forms B by α emission. B is a p-block element of group 16. A is in group`,
      verify: { kind: "value", inputs: {  }, params: { q: "group" } },
      options: [
        { key: "A", text: t`16`, correct: false, misconceptionId: "C04-M5", value: "group_16" },
        { key: "B", text: t`17`, correct: false, misconceptionId: "C04-M6", value: "group_17" },
        { key: "C", text: t`14`, correct: false, misconceptionId: "C04-M4", value: "group_14" },
        { key: "D", text: t`18`, correct: true, value: "group_18" },
      ],
      solution: {
        steps: [
          t`α emission lowers Z by 2.`,
          t`A is two groups after 16: group 18.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (E)" },
      stem: t`An α-particle differs from a helium atom in that it`,
      verify: { kind: "value", inputs: {  }, params: { q: "alpha_he" } },
      options: [
        { key: "A", text: t`is a helium nucleus with no electrons, $\ce{He^{2+}}$`, correct: true, value: "nucleus_no_electrons" },
        { key: "B", text: t`has four protons`, correct: false, misconceptionId: "C04-M8", value: "four_protons" },
        { key: "C", text: t`is an electron`, correct: false, misconceptionId: "C04-M9", value: "electron" },
        { key: "D", text: t`does not differ at all`, correct: false, misconceptionId: "C04-M7", value: "identical" },
      ],
      solution: {
        steps: [
          t`An α particle has 2 p and 2 n.`,
          t`No electrons: $\ce{He^{2+}}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.2 (G)" },
      stem: t`In $\beta^-$ decay,`,
      verify: { kind: "value", inputs: {  }, params: { q: "beta" } },
      options: [
        { key: "A", text: t`neither $Z$ nor $A$ changes`, correct: false, misconceptionId: "C04-M12", value: "nothing" },
        { key: "B", text: t`$Z$ rises by 1 and $A$ is unchanged`, correct: true, value: "z_up_a_same" },
        { key: "C", text: t`$Z$ falls by 1`, correct: false, misconceptionId: "C04-M10", value: "z_down" },
        { key: "D", text: t`$A$ falls by 4`, correct: false, misconceptionId: "C04-M11", value: "a_down_4" },
      ],
      solution: {
        steps: [
          t`n → p + $\beta^-$.`,
          t`Z rises by 1; A unchanged.`,
        ],
      },
    },
  ],
};
