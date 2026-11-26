import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Pure silicon conducts poorly at room temperature, yet a trace of arsenic, one atom in a million, makes it conduct far better. How can so little matter so much?`,
    reveal: t`Each arsenic atom brings one spare electron that is free to move. Even one in a million gives a tiny chip billions of extra carriers.`,
  },
  explanation: {
    intuition: [
      t`In a solid, the energy levels of many close atoms merge into broad **bands**.`,
      t`The **valence band** holds electrons tightly bound to their atoms; they cannot move.`,
      t`The **conduction band** lies above it; electrons that reach it move through the whole solid.`,
      t`The **band gap** is the energy difference between the two bands.`,
      t`The size of the gap decides whether a solid conducts well, a little, or hardly at all.`,
    ],
    formal: [
      {
        title: "Metals, semiconductors and insulators",
        points: [
          t`**Metal**: no band gap; the band is partly filled or overlaps an empty band, so electrons move freely.`,
          t`**Semiconductor**: a full valence band and an empty conduction band with a small gap, as in Si and Ge.`,
          t`**Insulator**: the gap, called the forbidden zone, is large, as in diamond ($5.47\ \mathrm{eV}$).`,
          t`Conductivity: metals $10^{4}$ to $10^{7}$, insulators $10^{-20}$ to $10^{-10}\ \mathrm{ohm^{-1}\,m^{-1}}$.`,
        ],
        figure: {
          alt: "Three band pictures side by side. Metal: the filled band overlaps an empty band, no gap. Semiconductor: a filled valence band, a small gap, an empty conduction band. Insulator: the same with a large gap.",
          axes: "none",
          view: { x: [-0.4, 7.6], y: [-0.9, 3.7] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [1.6, 0]] }, { kind: "halfPlane", through: [[1.6, 0], [1.6, 1.6]] }, { kind: "halfPlane", through: [[1.6, 1.6], [0, 1.6]] }, { kind: "halfPlane", through: [[0, 1.6], [0, 0]] }], step: 1 },
            { kind: "segment", from: [0, 0], to: [1.6, 0], step: 1 },
            { kind: "segment", from: [1.6, 0], to: [1.6, 1.6], step: 1 },
            { kind: "segment", from: [1.6, 1.6], to: [0, 1.6], step: 1 },
            { kind: "segment", from: [0, 1.6], to: [0, 0], step: 1 },
            { kind: "segment", from: [0, 1.2], to: [1.6, 1.2], step: 1 },
            { kind: "segment", from: [1.6, 1.2], to: [1.6, 3], step: 1 },
            { kind: "segment", from: [1.6, 3], to: [0, 3], step: 1 },
            { kind: "segment", from: [0, 3], to: [0, 1.2], step: 1 },
            { kind: "label", at: [0.8, -0.1], label: "metal", labelAt: "s", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[3, 0], [4.6, 0]] }, { kind: "halfPlane", through: [[4.6, 0], [4.6, 1]] }, { kind: "halfPlane", through: [[4.6, 1], [3, 1]] }, { kind: "halfPlane", through: [[3, 1], [3, 0]] }], step: 2 },
            { kind: "segment", from: [3, 0], to: [4.6, 0], step: 2 },
            { kind: "segment", from: [4.6, 0], to: [4.6, 1], step: 2 },
            { kind: "segment", from: [4.6, 1], to: [3, 1], step: 2 },
            { kind: "segment", from: [3, 1], to: [3, 0], step: 2 },
            { kind: "segment", from: [3, 1.8], to: [4.6, 1.8], step: 2 },
            { kind: "segment", from: [4.6, 1.8], to: [4.6, 3], step: 2 },
            { kind: "segment", from: [4.6, 3], to: [3, 3], step: 2 },
            { kind: "segment", from: [3, 3], to: [3, 1.8], step: 2 },
            { kind: "label", at: [3.8, -0.1], label: "semiconductor", labelAt: "s", step: 2 },
            { kind: "label", at: [3.8, 1.13], label: "small gap", labelAt: "n", step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "halfPlane", through: [[5.6, 0], [7.2, 0]] }, { kind: "halfPlane", through: [[7.2, 0], [7.2, 1]] }, { kind: "halfPlane", through: [[7.2, 1], [5.6, 1]] }, { kind: "halfPlane", through: [[5.6, 1], [5.6, 0]] }], step: 3 },
            { kind: "segment", from: [5.6, 0], to: [7.2, 0], step: 3 },
            { kind: "segment", from: [7.2, 0], to: [7.2, 1], step: 3 },
            { kind: "segment", from: [7.2, 1], to: [5.6, 1], step: 3 },
            { kind: "segment", from: [5.6, 1], to: [5.6, 0], step: 3 },
            { kind: "segment", from: [5.6, 2.4], to: [7.2, 2.4], step: 3 },
            { kind: "segment", from: [7.2, 2.4], to: [7.2, 3.4], step: 3 },
            { kind: "segment", from: [7.2, 3.4], to: [5.6, 3.4], step: 3 },
            { kind: "segment", from: [5.6, 3.4], to: [5.6, 2.4], step: 3 },
            { kind: "label", at: [6.4, -0.1], label: "insulator", labelAt: "s", step: 3 },
            { kind: "label", at: [6.4, 1.5], label: "large gap", labelAt: "n", step: 3, tone: "bad" },
          ],
        },
      },
      {
        title: "Effect of temperature",
        points: [
          t`Heating a metal makes its cations vibrate more; they hinder the electrons, so conductivity falls.`,
          t`Heating a semiconductor lifts more electrons across the small gap, so conductivity rises.`,
          t`Semiconductors behave as insulators at low temperature and as conductors at high temperature.`,
        ],
      },
      {
        title: "Doping: n-type semiconductors",
        points: [
          t`**Doping** adds a tiny amount of an impurity to a pure (intrinsic) semiconductor such as Si or Ge.`,
          t`A group 15 atom (P, As) has 5 valence electrons; 4 bond with Si, 1 is spare.`,
          t`The spare electrons enter the conduction band: an **n-type** semiconductor, n for negative carriers.`,
          t`The crystal as a whole stays electrically neutral: each P atom brings its own extra proton.`,
        ],
      },
      {
        title: "Doping: p-type semiconductors",
        points: [
          t`A group 13 atom (B, Ga, In) has only 3 valence electrons, one short of four bonds.`,
          t`The missing electron is a **hole**, a vacancy in the valence band that carries current.`,
          t`This is a **p-type** semiconductor, p for the positive holes.`,
          t`Both types conduct better than the pure semiconductor, and both stay electrically neutral.`,
        ],
      },
    ],
    worked: {
      prompt: t`Silicon is doped with boron. What type of semiconductor forms, what carries the current, and how does its conductivity compare with pure silicon's?`,
      steps: [
        t`Boron is in group 13: it has 3 valence electrons.`,
        t`It bonds with three Si neighbours; the fourth bond lacks an electron: a hole.`,
        t`Holes in the valence band carry the current: a p-type semiconductor.`,
        t`Extra carriers mean it conducts better than pure Si, and it stays neutral.`,
      ],
      answer: t`p-type; holes carry the current; it conducts better than pure silicon`,
    },
    visualSpec: t`Slide the band gap from zero to large and watch a metal turn into a semiconductor and then an insulator.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Swaps the dopants: thinks a group 13 impurity gives n-type and a group 15 impurity p-type.",
      remediation: "Group 15 (5 valence electrons) leaves a spare electron: n-type. Group 13 (3 valence electrons) leaves a hole: p-type.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Thinks a doped semiconductor carries a net charge: n-type negative, p-type positive.",
      remediation: "Every dopant atom is neutral, bringing as many protons as electrons, so the doped crystal stays electrically neutral.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Thinks an impurity lowers a semiconductor's conductivity.",
      remediation: "Doping adds charge carriers, spare electrons or holes, so the doped semiconductor conducts better than the pure one.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks a semiconductor, like a metal, conducts less when heated.",
      remediation: "Heat lifts more electrons across a semiconductor's small gap, so its conductivity rises; only a metal's falls.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Swaps the gaps: thinks a small band gap makes an insulator and a large one a semiconductor.",
      remediation: "A small gap lets heat lift electrons across: a semiconductor. A large gap, the forbidden zone, stops them: an insulator.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks a metal, like a semiconductor, conducts better when heated.",
      remediation: "A metal has no gap to cross; heating makes its cations vibrate and hinder the electrons, so its conductivity falls.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.1 (ii)" },
      stem: t`Germanium is doped with a little indium, a group 13 element. Which statement about the doped germanium is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "p_doped_ge" } },
      options: [
        { key: "A", text: t`It is p-type, carries a net positive charge and conducts better than pure Ge`, correct: false, misconceptionId: "C09-M2", value: "p_type_charged_better" },
        { key: "B", text: t`It is p-type, stays neutral and conducts worse than pure Ge`, correct: false, misconceptionId: "C09-M3", value: "p_type_neutral_worse" },
        { key: "C", text: t`It is p-type, stays neutral and conducts better than pure Ge`, correct: true, value: "p_type_neutral_better" },
        { key: "D", text: t`It is n-type, stays neutral and conducts better than pure Ge`, correct: false, misconceptionId: "C09-M1", value: "n_type_neutral_better" },
      ],
      solution: {
        steps: [
          t`Indium has 3 valence electrons: one bond in four lacks an electron, a hole.`,
          t`Holes carry the current, so the doped germanium is p-type.`,
          t`The extra carriers raise its conductivity, and the neutral In atoms leave it neutral.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/solid-state-12-pyq#24" },
      stem: t`To prepare an **n-type** semiconductor, an impurity is added to silicon. Which statement is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "n_dopant" } },
      options: [
        { key: "A", text: t`The impurity has 5 valence electrons; the crystal stays neutral and conducts better`, correct: true, value: "five_neutral_better" },
        { key: "B", text: t`The impurity has 3 valence electrons; the crystal stays neutral and conducts better`, correct: false, misconceptionId: "C09-M1", value: "three_neutral_better" },
        { key: "C", text: t`The impurity has 5 valence electrons; the crystal turns negative and conducts better`, correct: false, misconceptionId: "C09-M2", value: "five_charged_better" },
        { key: "D", text: t`The impurity has 5 valence electrons; the crystal stays neutral but conducts worse`, correct: false, misconceptionId: "C09-M3", value: "five_neutral_worse" },
      ],
      solution: {
        steps: [
          t`An n-type semiconductor needs spare electrons: a group 15 impurity with 5 valence electrons.`,
          t`Four of them bond with Si; the fifth enters the conduction band, so conductivity rises.`,
          t`Each impurity atom is neutral, so the crystal stays neutral.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.12" },
      stem: t`Silicon is doped with a little phosphorus, a group 15 element. What mainly carries the current in the doped silicon?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "p_in_si" } },
      options: [
        { key: "A", text: t`Holes in the valence band, one hole at each P atom`, correct: false, misconceptionId: "C09-M1", value: "holes_at_p" },
        { key: "B", text: t`Spare electrons from the P atoms, which leave the crystal negatively charged`, correct: false, misconceptionId: "C09-M2", value: "electrons_crystal_negative" },
        { key: "C", text: t`Fewer carriers than in pure Si, since the P atoms block their flow`, correct: false, misconceptionId: "C09-M3", value: "fewer_carriers" },
        { key: "D", text: t`Electrons in the conduction band, one spare electron from each P atom`, correct: true, value: "electrons_from_p" },
      ],
      solution: {
        steps: [
          t`Phosphorus has 5 valence electrons; four bond with Si neighbours.`,
          t`The fifth is spare and enters the conduction band.`,
          t`These electrons carry the current; the crystal stays neutral.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.2 (v)" },
      stem: t`Sodium, a metal, and silicon, whose band gap is small, are both cooled from $300\ \mathrm{K}$ to $250\ \mathrm{K}$. What happens to their electrical conductivities?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "na_si_cool" } },
      options: [
        { key: "A", text: t`Sodium's rises; silicon's falls`, correct: true, value: "na_rises_si_falls" },
        { key: "B", text: t`Both rise`, correct: false, misconceptionId: "C09-M4", value: "both_rise" },
        { key: "C", text: t`Sodium's rises; silicon's stays near zero, as in an insulator`, correct: false, misconceptionId: "C09-M5", value: "na_rises_si_stays_low" },
        { key: "D", text: t`Both fall`, correct: false, misconceptionId: "C09-M6", value: "both_fall" },
      ],
      solution: {
        steps: [
          t`Cooling a metal calms the vibration of its cations, so electrons flow more easily: sodium's conductivity rises.`,
          t`Cooling silicon leaves fewer electrons with the energy to cross its small gap: its conductivity falls.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.11" },
      stem: t`Copper, a metal, and silicon, whose band gap is small, are both warmed from $300\ \mathrm{K}$ to $350\ \mathrm{K}$. What happens to their electrical conductivities?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cu_si_heat" } },
      options: [
        { key: "A", text: t`Copper's falls; silicon's stays near zero, as in an insulator`, correct: false, misconceptionId: "C09-M5", value: "cu_falls_si_stays_low" },
        { key: "B", text: t`Both rise`, correct: false, misconceptionId: "C09-M6", value: "both_rise" },
        { key: "C", text: t`Copper's falls; silicon's rises`, correct: true, value: "cu_falls_si_rises" },
        { key: "D", text: t`Both fall`, correct: false, misconceptionId: "C09-M4", value: "both_fall" },
      ],
      solution: {
        steps: [
          t`Warming copper makes its cations vibrate more and hinder the electrons: its conductivity falls.`,
          t`Warming silicon lifts more electrons across its small gap: its conductivity rises.`,
        ],
      },
    },
  ],
};
