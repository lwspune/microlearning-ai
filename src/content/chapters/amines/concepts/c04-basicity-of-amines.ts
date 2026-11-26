import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Methyl groups push electrons onto nitrogen, so trimethylamine should be the strongest base of the methylamines. Yet in water dimethylamine beats it. What holds trimethylamine back?`,
    reveal: t`Its cation, $\ce{(CH3)3NH+}$, has only one N-H to hydrogen bond with water, and its crowded N is hard to reach. In the gas phase, with no water, trimethylamine is strongest.`,
  },
  explanation: {
    intuition: [
      t`The lone pair on N accepts a proton: $\ce{RNH2 + H2O <=> RNH3+ + OH-}$.`,
      t`Anything that makes the lone pair richer or the cation more stable makes a stronger base.`,
      t`Alkyl groups push electrons (+I), so aliphatic amines are stronger bases than ammonia.`,
      t`In aniline the lone pair spreads into the ring, so aniline is weaker than ammonia.`,
    ],
    formal: [
      {
        title: "Measuring basic strength",
        points: [
          t`$K_b = \frac{[\ce{RNH3+}][\ce{OH-}]}{[\ce{RNH2}]}$ and $pK_b = -\log K_b$.`,
          t`A larger $K_b$ or a smaller $pK_b$ means a stronger base.`,
        ],
      },
      {
        title: "Aliphatic amines",
        points: [
          t`Gas phase (+I only): tertiary > secondary > primary > $\ce{NH3}$.`,
          t`In water, solvation of the cation and crowding also count.`,
          t`For methylamines: $\ce{(CH3)2NH}$ > $\ce{CH3NH2}$ > $\ce{(CH3)3N}$ > $\ce{NH3}$.`,
        ],
      },
      {
        title: "Aromatic amines",
        points: [
          t`Aniline ($pK_b$ 9.4) is far weaker than cyclohexylamine ($pK_b$ 3.3).`,
          t`Electron-donating ring groups ($\ce{CH3}$, $\ce{OCH3}$, $\ce{NH2}$) raise basicity.`,
          t`Electron-withdrawing groups ($\ce{NO2}$, $\ce{COOH}$, Cl) lower it: 4-nitroaniline has $pK_b$ 13.0.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which is the stronger base: aniline or 4-methylaniline?`,
      steps: [
        t`$\ce{CH3}$ pushes electrons into the ring and towards N.`,
        t`The lone pair is richer, so it takes a proton more readily.`,
      ],
      answer: t`4-Methylaniline`,
    },
    visualSpec: t`Slide groups onto the nitrogen or the ring and watch the lone pair grow richer or drain into the ring.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Counts only the +I effect in water, so picks the tertiary amine.",
      remediation: "In water, the tertiary cation is poorly solvated and its N crowded, so the secondary amine is strongest.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks solvation alone decides basicity in water.",
      remediation: "Solvation, +I and crowding act together; for methylamines the secondary amine wins.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks alkyl groups lower basicity.",
      remediation: "Alkyl groups push electrons onto N (+I), making the lone pair more available.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Thinks $\ce{OCH3}$ withdraws electrons from the ring.`,
      remediation: t`$\ce{OCH3}$ donates electrons into the ring by resonance, raising the basicity of aniline.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Thinks $\ce{CH3}$ withdraws electrons.`,
      remediation: t`$\ce{CH3}$ pushes electrons (+I), so toluidines are about as basic as aniline or more.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Thinks a second $\ce{NH2}$ weakens the base.`,
      remediation: t`$\ce{NH2}$ donates electrons into the ring, so the diamine is more basic than aniline.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: t`Thinks a larger $pK_b$ means a stronger base.`,
      remediation: t`$pK_b = -\log K_b$: the smaller the $pK_b$, the stronger the base.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks all amines of one class are equally basic.",
      remediation: t`Basicity also depends on the groups present; $pK_b$ values show the difference.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks amines are neutral, like alcohols.",
      remediation: "The lone pair on N accepts protons, so amines are bases.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M10",
      mistake: t`Reads increasing $pK_b$ as increasing basicity.`,
      remediation: t`Increasing $pK_b$ means decreasing basicity, so the strongest base comes first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Ignores the resonance of aniline's lone pair.",
      remediation: "Aniline's lone pair spreads into the ring, so aniline is far weaker than cyclohexylamine.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Thinks $\ce{NO2}$ donates electrons.`,
      remediation: t`$\ce{NO2}$ withdraws electrons strongly, so 4-nitroaniline is the weakest base.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Uses the order in water for the gas phase.",
      remediation: "With no water to solvate the cations, only the +I effect counts: tertiary is strongest.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks crowding decides basicity in the gas phase.",
      remediation: "A proton is tiny; in the gas phase the +I effect decides: tertiary > secondary > primary.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (iv)" },
      stem: t`Which of these has the highest basic strength in water?`,
      verify: { kind: "value", inputs: {  }, params: { q: "highest" } },
      options: [
        { key: "A", text: t`methylamine`, correct: false, misconceptionId: "C04-M2", value: "methylamine" },
        { key: "B", text: t`dimethylamine`, correct: true, value: "dimethylamine" },
        { key: "C", text: t`ammonia`, correct: false, misconceptionId: "C04-M3", value: "ammonia" },
        { key: "D", text: t`trimethylamine`, correct: false, misconceptionId: "C04-M1", value: "trimethylamine" },
      ],
      solution: {
        steps: [
          t`In water, +I, solvation and crowding act together.`,
          t`For methylamines, dimethylamine is strongest.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#13" },
      stem: t`Identify the weakest base among these.`,
      verify: { kind: "value", inputs: {  }, params: { q: "weakest" } },
      options: [
        { key: "A", text: t`2,4-dimethoxyaniline`, correct: false, misconceptionId: "C04-M4", value: "dimethoxyaniline" },
        { key: "B", text: t`o-toluidine (2-methylaniline)`, correct: false, misconceptionId: "C04-M5", value: "o_toluidine" },
        { key: "C", text: t`4-aminobenzoic acid`, correct: true, value: "aminobenzoic_acid" },
        { key: "D", text: t`benzene-1,4-diamine`, correct: false, misconceptionId: "C04-M6", value: "phenylenediamine" },
      ],
      solution: {
        steps: [
          t`COOH withdraws electrons from the ring and the $\ce{NH2}$.`,
          t`So 4-aminobenzoic acid is the weakest base.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/amines-12-pyq#17" },
      stem: t`Dimethylamine has $pK_b = 3.27$ and diethylamine has $pK_b = 3.0$. Which is the stronger base?`,
      verify: { kind: "value", inputs: {  }, params: { q: "pkb" } },
      options: [
        { key: "A", text: t`they are equally basic: both are secondary amines`, correct: false, misconceptionId: "C04-M8", value: "equal" },
        { key: "B", text: t`neither: amines are neutral, like alcohols`, correct: false, misconceptionId: "C04-M9", value: "neutral" },
        { key: "C", text: t`dimethylamine`, correct: false, misconceptionId: "C04-M7", value: "dimethylamine" },
        { key: "D", text: t`diethylamine`, correct: true, value: "diethylamine" },
      ],
      solution: {
        steps: [
          t`A smaller $pK_b$ means a stronger base.`,
          t`3.0 < 3.27, so diethylamine is stronger.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.2 (x)" },
      stem: t`Arrange aniline, cyclohexylamine and 4-nitroaniline in increasing order of $pK_b$.`,
      verify: { kind: "value", inputs: {  }, params: { q: "pkb_order" } },
      options: [
        { key: "A", text: t`cyclohexylamine < aniline < 4-nitroaniline`, correct: true, value: "cyclohexyl_lt_aniline_lt_nitroaniline" },
        { key: "B", text: t`aniline < cyclohexylamine < 4-nitroaniline`, correct: false, misconceptionId: "C04-M11", value: "aniline_lt_cyclohexyl_lt_nitroaniline" },
        { key: "C", text: t`cyclohexylamine < 4-nitroaniline < aniline`, correct: false, misconceptionId: "C04-M12", value: "cyclohexyl_lt_nitroaniline_lt_aniline" },
        { key: "D", text: t`4-nitroaniline < aniline < cyclohexylamine`, correct: false, misconceptionId: "C04-M10", value: "nitroaniline_lt_aniline_lt_cyclohexyl" },
      ],
      solution: {
        steps: [
          t`Basicity: cyclohexylamine > aniline > 4-nitroaniline.`,
          t`$pK_b$ runs the other way: cyclohexylamine < aniline < 4-nitroaniline.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.2 (iv)" },
      stem: t`What is the order of basicity of methylamines and ammonia in the gas phase?`,
      verify: { kind: "value", inputs: {  }, params: { q: "gas" } },
      options: [
        { key: "A", text: t`primary > secondary > tertiary > $\ce{NH3}$`, correct: false, misconceptionId: "C04-M14", value: "prim_sec_tert_nh3" },
        { key: "B", text: t`tertiary > secondary > primary > $\ce{NH3}$`, correct: true, value: "tert_sec_prim_nh3" },
        { key: "C", text: t`secondary > primary > tertiary > $\ce{NH3}$`, correct: false, misconceptionId: "C04-M13", value: "sec_prim_tert_nh3" },
        { key: "D", text: t`$\ce{NH3}$ > primary > secondary > tertiary`, correct: false, misconceptionId: "C04-M3", value: "nh3_prim_sec_tert" },
      ],
      solution: {
        steps: [
          t`In the gas phase only the +I effect counts.`,
          t`More alkyl groups, stronger base: tertiary > secondary > primary > $\ce{NH3}$.`,
        ],
      },
    },
  ],
};
