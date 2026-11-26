import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`A drop of sodium in liquid ammonia makes a deep blue solution that conducts like a metal. No ordinary salt solution does that. What carries the current?`,
    reveal: t`Electrons. Sodium gives up its electron, which becomes surrounded by ammonia molecules: an ammoniated electron, which is blue and mobile.`,
  },
  explanation: {
    intuition: [
      t`s-block metals give up electrons readily.`,
      t`They react with water to form hydroxides and hydrogen.`,
      t`They burn in air to oxides; Mg also forms a nitride.`,
      t`Beryllium is the odd one: its oxide is amphoteric.`,
    ],
    formal: [
      {
        title: "Reactions",
        points: [
          t`$\ce{2Na + 2H2O -> 2NaOH + H2}$; Li reacts slowly, Na and K violently.`,
          t`$\ce{2Mg + O2 -> 2MgO}$ and $\ce{3Mg + N2 -> Mg3N2}$.`,
          t`Na in excess air forms the peroxide $\ce{Na2O2}$, with Na +1.`,
          t`BeO reacts with both acids and bases: amphoteric.`,
          t`Na in liquid ammonia: $\ce{Na+}$ and ammoniated electrons, blue and conducting.`,
        ],
      },
    ],
    worked: {
      prompt: t`What forms when calcium reacts with water?`,
      steps: [
        t`$\ce{Ca + 2H2O}$ $\ce{-> Ca(OH)2 + H2}$.`,
        t`Calcium hydroxide and hydrogen.`,
      ],
      answer: t`$\ce{Ca(OH)2}$ and $\ce{H2}$`,
    },
    visualSpec: t`Drop each metal into water and compare how fast it fizzes.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Gives $\ce{Na2O}$.`,
      remediation: "With water the product is the hydroxide.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Gives oxygen.",
      remediation: t`Sodium reduces water's hydrogen: $\ce{H2}$ forms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Gives NaH.",
      remediation: "NaH forms with hydrogen gas, not water.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Forgets the nitride.",
      remediation: t`Mg also burns in the air's nitrogen: $\ce{Mg3N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Gives a peroxide.",
      remediation: "Mg forms the normal oxide, MgO.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Gives the hydroxide.",
      remediation: "Burning in dry air gives oxide and nitride.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Calls BeO basic.",
      remediation: "BeO also dissolves in NaOH.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Calls BeO acidic.",
      remediation: "BeO also dissolves in HCl.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says BeO reacts with neither.",
      remediation: "BeO reacts with both: amphoteric.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Credits metal particles.",
      remediation: "Sodium dissolves, releasing electrons into the ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Credits a precipitate.",
      remediation: "The solution is clear blue, with mobile electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Credits $\ce{H+}$ from ammonia.`,
      remediation: "Ammonia stays intact; it surrounds the electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Takes oxygen as −2.",
      remediation: "Peroxide oxygen is −1: Na is +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks Na stays at 0.",
      remediation: "Na is combined: +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Swaps Na and O.",
      remediation: "Sodium is the positive partner.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.1 (F)" },
      stem: t`Sodium reacts with water to give`,
      verify: { kind: "value", inputs: {  }, params: { q: "na_water" } },
      options: [
        { key: "A", text: t`NaOH and $\ce{O2}$`, correct: false, misconceptionId: "C04-M2", value: "naoh_o2" },
        { key: "B", text: t`NaOH and $\ce{H2}$`, correct: true, value: "naoh_h2" },
        { key: "C", text: t`NaH and $\ce{O2}$`, correct: false, misconceptionId: "C04-M3", value: "nah_o2" },
        { key: "D", text: t`$\ce{Na2O}$ and $\ce{H2}$`, correct: false, misconceptionId: "C04-M1", value: "na2o_h2" },
      ],
      solution: {
        steps: [
          t`$\ce{2Na + 2H2O -> 2NaOH + H2}$.`,
          t`NaOH and $\ce{H2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.2 (C)" },
      stem: t`Magnesium burns in air to give`,
      verify: { kind: "value", inputs: {  }, params: { q: "mg_air" } },
      options: [
        { key: "A", text: t`MgO only`, correct: false, misconceptionId: "C04-M4", value: "mgo_only" },
        { key: "B", text: t`$\ce{MgO2}$`, correct: false, misconceptionId: "C04-M5", value: "mgo2" },
        { key: "C", text: t`MgO and $\ce{Mg3N2}$`, correct: true, value: "mgo_mg3n2" },
        { key: "D", text: t`$\ce{Mg(OH)2}$`, correct: false, misconceptionId: "C04-M6", value: "mg_oh_2" },
      ],
      solution: {
        steps: [
          t`Mg burns in $\ce{O2}$ and $\ce{N2}$.`,
          t`MgO and $\ce{Mg3N2}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.2 (D)" },
      stem: t`Beryllium oxide is treated separately with aqueous HCl and aqueous NaOH. It`,
      verify: { kind: "value", inputs: {  }, params: { q: "beo" } },
      options: [
        { key: "A", text: t`reacts only with NaOH: it is acidic`, correct: false, misconceptionId: "C04-M8", value: "acidic" },
        { key: "B", text: t`reacts with neither`, correct: false, misconceptionId: "C04-M9", value: "neither" },
        { key: "C", text: t`reacts only with HCl: it is basic`, correct: false, misconceptionId: "C04-M7", value: "basic" },
        { key: "D", text: t`reacts with both: it is amphoteric`, correct: true, value: "amphoteric" },
      ],
      solution: {
        steps: [
          t`BeO + 2HCl gives $\ce{BeCl2}$; BeO + NaOH gives a beryllate.`,
          t`Amphoteric.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.1 (D)" },
      stem: t`A solution of sodium in liquid ammonia conducts electricity because it contains`,
      verify: { kind: "value", inputs: {  }, params: { q: "ammonia" } },
      options: [
        { key: "A", text: t`$\ce{Na+}$ ions and ammoniated electrons`, correct: true, value: "ammoniated_electrons" },
        { key: "B", text: t`a precipitate of $\ce{NaNH2}$`, correct: false, misconceptionId: "C04-M11", value: "precipitate" },
        { key: "C", text: t`$\ce{H+}$ ions from the ammonia`, correct: false, misconceptionId: "C04-M12", value: "h_plus" },
        { key: "D", text: t`tiny particles of sodium metal`, correct: false, misconceptionId: "C04-M10", value: "metal_particles" },
      ],
      solution: {
        steps: [
          t`Na gives $\ce{Na+}$ and an electron.`,
          t`Ammoniated electrons carry the current.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Solved Ex.8.4" },
      stem: t`What is the oxidation state of Na in $\ce{Na2O2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "na2o2" } },
      options: [
        { key: "A", text: t`−1`, correct: false, misconceptionId: "C04-M15", value: "minus_1" },
        { key: "B", text: t`+1`, correct: true, value: "plus_1" },
        { key: "C", text: t`+2`, correct: false, misconceptionId: "C04-M13", value: "plus_2" },
        { key: "D", text: t`0`, correct: false, misconceptionId: "C04-M14", value: "zero" },
      ],
      solution: {
        steps: [
          t`Peroxide O is −1: 2x − 2 = 0.`,
          t`Na is +1.`,
        ],
      },
    },
  ],
};
