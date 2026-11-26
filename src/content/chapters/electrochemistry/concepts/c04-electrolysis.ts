import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Pass a current through molten common salt and shiny sodium collects at one electrode. Pass it through salt water and no sodium appears at all. Why?`,
    reveal: t`In water, two reductions compete at the cathode. Water ($E^0 = -0.83\ \mathrm{V}$) is reduced far more easily than $\ce{Na+}$ ($E^0 = -2.71\ \mathrm{V}$), so hydrogen forms instead.`,
  },
  explanation: {
    intuition: [
      t`In **electrolysis**, electrical energy from a battery drives a redox reaction that would not happen on its own.`,
      t`The vessel of electrolyte with its two electrodes is an **electrolytic cell**.`,
      t`The electrode joined to the battery's negative terminal is the **cathode**; the one joined to the positive terminal is the **anode**.`,
      t`Cations move to the cathode and gain electrons there: **reduction**.`,
      t`Anions move to the anode and lose electrons there: **oxidation**.`,
    ],
    formal: [
      {
        title: "Electrolysis of molten NaCl",
        points: [
          t`Molten $\ce{NaCl}$ holds freely moving $\ce{Na+}$ and $\ce{Cl-}$ ions, between two graphite electrodes.`,
          t`Cathode (−), reduction: $\ce{2Na+ + 2e- -> 2Na}$.`,
          t`Anode (+), oxidation: $\ce{2Cl- -> Cl2 + 2e-}$.`,
          t`Net reaction: $\ce{2Na+ + 2Cl-}$ $\ce{-> 2Na + Cl2}$.`,
          t`Molten sodium forms at the cathode, and pale green chlorine gas at the anode.`,
          t`The battery's energy forces this nonspontaneous decomposition.`,
        ],
      },
      {
        title: "Aqueous NaCl: the cathode",
        points: [
          t`In water, two reductions compete at the cathode: of $\ce{Na+}$ and of $\ce{H2O}$.`,
          t`$\ce{Na+ + e- -> Na}$ has $E^0 = -2.71\ \mathrm{V}$.`,
          t`$\ce{2H2O + 2e-}$ $\ce{-> H2 + 2OH-}$ has $E^0 = -0.83\ \mathrm{V}$.`,
          t`Water has the higher reduction potential, so it is reduced: $\ce{H2}$ forms, not sodium.`,
        ],
      },
      {
        title: "Aqueous NaCl: the anode",
        points: [
          t`At the anode, oxidation of $\ce{Cl-}$ competes with oxidation of water.`,
          t`Standard potentials alone favour water, which would give $\ce{O2}$.`,
          t`But experiment gives $\ce{Cl2}$: oxidising water needs an extra voltage, the **overvoltage**.`,
          t`Anode: $\ce{2Cl- -> Cl2 + 2e-}$.`,
          t`Net: $\ce{2Cl- + 2H2O}$ $\ce{-> Cl2 + H2 + 2OH-}$, so $\ce{NaOH}$ is left in solution.`,
        ],
      },
    ],
    worked: {
      prompt: t`Molten $\ce{CaCl2}$ is electrolysed between graphite electrodes. Write the electrode reactions and name the products.`,
      steps: [
        t`The melt holds $\ce{Ca^2+}$ and $\ce{Cl-}$ ions, and no water.`,
        t`Cathode (−), reduction: $\ce{Ca^2+ + 2e- -> Ca}$.`,
        t`Anode (+), oxidation: $\ce{2Cl- -> Cl2 + 2e-}$.`,
        t`Net: $\ce{Ca^2+ + 2Cl- -> Ca + Cl2}$.`,
      ],
      answer: t`Calcium metal at the cathode and $\ce{Cl2}$ gas at the anode`,
    },
    visualSpec: t`Switch the cell between molten and aqueous NaCl and watch which ions reach each electrode and what bubbles or collects there.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Swaps the processes: oxidation at the cathode and reduction at the anode.",
      remediation: "Reduction always happens at the cathode and oxidation at the anode, in every kind of cell.",
      fallback: { kind: "ext", topic: "oxidation and reduction (Std XI Chemistry)" },
    },
    {
      id: "C04-M2",
      mistake: "Carries over the galvanic cell's signs: takes the cathode as the positive electrode.",
      remediation: "In an electrolytic cell the cathode is joined to the battery's negative terminal, so it is negative; the anode is positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Thinks $\ce{Na+}$ is reduced to sodium in aqueous $\ce{NaCl}$ too.`,
      remediation: t`Water ($E^0 = -0.83\ \mathrm{V}$) is reduced more easily than $\ce{Na+}$ ($E^0 = -2.71\ \mathrm{V}$), so $\ce{H2}$ forms at the cathode.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Goes by standard potentials alone at the anode, so expects $\ce{O2}$ from aqueous $\ce{NaCl}$.`,
      remediation: t`Oxidising water needs an extra overvoltage, so $\ce{Cl-}$ is oxidised and $\ce{Cl2}$ is given off.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Treats a molten salt as if it held water.",
      remediation: "A melt has only the salt's own ions: the metal ion is reduced at the cathode and the anion oxidised at the anode.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks an electrolytic cell, like a galvanic cell, turns a spontaneous reaction into electricity.",
      remediation: "An electrolytic cell uses electrical energy from outside to force a nonspontaneous reaction.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/electrochemistry-12-pyq#28" },
      stem: t`In electrometallurgy, sodium is extracted by electrolysing molten $\ce{NaCl}$ between graphite electrodes. What is the electrode joined to the battery's negative terminal, and what happens there?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "neg_molten_NaCl" } },
      options: [
        { key: "A", text: t`The anode: $\ce{Cl-}$ is oxidised to $\ce{Cl2}$`, correct: false, misconceptionId: "C04-M2", value: "anode_Cl_oxidised" },
        { key: "B", text: t`The cathode: water is reduced to $\ce{H2}$`, correct: false, misconceptionId: "C04-M5", value: "cathode_water_reduced" },
        { key: "C", text: t`The cathode: $\ce{Na+}$ is reduced to $\ce{Na}$`, correct: true, value: "cathode_Na_reduced" },
        { key: "D", text: t`The cathode: $\ce{Cl-}$ is oxidised to $\ce{Cl2}$`, correct: false, misconceptionId: "C04-M1", value: "cathode_Cl_oxidised" },
      ],
      solution: {
        steps: [
          t`The electrode joined to the negative terminal is the cathode, where reduction takes place.`,
          t`The melt has no water, so $\ce{Na+}$ is reduced: $\ce{Na+ + e- -> Na}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.3 (iii)" },
      stem: t`What are the products at the cathode and at the anode when aqueous $\ce{NaCl}$ is electrolysed?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "aq_NaCl" } },
      options: [
        { key: "A", text: t`Cathode $\ce{Cl2}$; anode $\ce{H2}$`, correct: false, misconceptionId: "C04-M1", value: "Cl2_cathode_H2_anode" },
        { key: "B", text: t`Cathode $\ce{Na}$; anode $\ce{Cl2}$`, correct: false, misconceptionId: "C04-M3", value: "Na_cathode_Cl2_anode" },
        { key: "C", text: t`Cathode $\ce{H2}$; anode $\ce{O2}$`, correct: false, misconceptionId: "C04-M4", value: "H2_cathode_O2_anode" },
        { key: "D", text: t`Cathode $\ce{H2}$; anode $\ce{Cl2}$`, correct: true, value: "H2_cathode_Cl2_anode" },
      ],
      solution: {
        steps: [
          t`Cathode: water ($-0.83\ \mathrm{V}$) is reduced before $\ce{Na+}$ ($-2.71\ \mathrm{V}$), giving $\ce{H2}$.`,
          t`Anode: overvoltage holds back water's oxidation, so $\ce{Cl-}$ gives $\ce{Cl2}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.2 (iii)" },
      stem: t`Molten $\ce{KCl}$ is electrolysed. Which reaction takes place at the anode, and what is the anode's sign?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "anode_molten_KCl" } },
      options: [
        { key: "A", text: t`$\ce{2Cl- -> Cl2 + 2e-}$, at the negative anode`, correct: false, misconceptionId: "C04-M2", value: "Cl_oxidised_negative" },
        { key: "B", text: t`$\ce{2H2O -> O2 + 4H+ + 4e-}$, at the positive anode`, correct: false, misconceptionId: "C04-M5", value: "water_oxidised_positive" },
        { key: "C", text: t`$\ce{2Cl- -> Cl2 + 2e-}$, at the positive anode`, correct: true, value: "Cl_oxidised_positive" },
        { key: "D", text: t`$\ce{K+ + e- -> K}$, at the positive anode`, correct: false, misconceptionId: "C04-M1", value: "K_reduced_positive" },
      ],
      solution: {
        steps: [
          t`The anode is joined to the battery's positive terminal, so it is positive.`,
          t`Oxidation happens there, and the melt has no water: $\ce{2Cl- -> Cl2 + 2e-}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (ii)" },
      stem: t`Which statement about an electrolytic cell, such as one decomposing molten $\ce{NaCl}$, is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "statement" } },
      options: [
        { key: "A", text: t`Oxidation takes place at the cathode.`, correct: false, misconceptionId: "C04-M1", value: "oxidation_at_cathode" },
        { key: "B", text: t`The cathode is the positive electrode.`, correct: false, misconceptionId: "C04-M2", value: "cathode_positive" },
        { key: "C", text: t`A spontaneous redox reaction produces electrical energy.`, correct: false, misconceptionId: "C04-M6", value: "spontaneous_makes_electricity" },
        { key: "D", text: t`Electrical energy drives a nonspontaneous redox reaction.`, correct: true, value: "electricity_drives_nonspontaneous" },
      ],
      solution: {
        steps: [
          t`Decomposing $\ce{NaCl}$ into $\ce{Na}$ and $\ce{Cl2}$ is nonspontaneous; the battery's electrical energy forces it.`,
          t`Reduction takes place at the cathode, which is the negative electrode.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.3 (iii)" },
      stem: t`In the electrolysis of aqueous $\ce{NaCl}$, what forms at the cathode, and what is the cathode's sign?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cathode_aq_NaCl" } },
      options: [
        { key: "A", text: t`$\ce{Na}$, at the negative cathode`, correct: false, misconceptionId: "C04-M3", value: "Na_negative_cathode" },
        { key: "B", text: t`$\ce{H2}$, at the negative cathode`, correct: true, value: "H2_negative_cathode" },
        { key: "C", text: t`$\ce{Cl2}$, at the negative cathode`, correct: false, misconceptionId: "C04-M1", value: "Cl2_negative_cathode" },
        { key: "D", text: t`$\ce{H2}$, at the positive cathode`, correct: false, misconceptionId: "C04-M2", value: "H2_positive_cathode" },
      ],
      solution: {
        steps: [
          t`The cathode is joined to the negative terminal, so it is negative.`,
          t`Water is reduced there, not $\ce{Na+}$: $\ce{2H2O + 2e-}$ $\ce{-> H2 + 2OH-}$.`,
        ],
      },
    },
  ],
};
