import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Sodium burns in chlorine to make salt, with no oxygen anywhere. Chemists still call it an oxidation of sodium. Why?`,
    reveal: t`Oxidation means losing electrons. Sodium hands an electron to chlorine, so sodium is oxidised and chlorine reduced.`,
  },
  explanation: {
    intuition: [
      t`Oxidation once meant adding oxygen; now it means losing electrons.`,
      t`Reduction is gaining electrons.`,
      t`The two always happen together: electrons lost by one are gained by another.`,
      t`The species that takes electrons is the **oxidising agent**; it is reduced.`,
    ],
    formal: [
      {
        title: "Definitions",
        points: [
          t`Oxidation: loss of electrons, rise in oxidation number.`,
          t`Reduction: gain of electrons, fall in oxidation number.`,
          t`Oxidising agent: accepts electrons, so is reduced.`,
          t`Reducing agent: donates electrons, so is oxidised.`,
        ],
      },
    ],
    worked: {
      prompt: t`In $\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$, name the oxidising agent.`,
      steps: [
        t`$\ce{Cu^{2+}}$ gains two electrons: it is reduced.`,
        t`So $\ce{Cu^{2+}}$ is the oxidising agent.`,
      ],
      answer: t`$\ce{Cu^{2+}}$`,
    },
    visualSpec: t`Pass electrons from one species to another and label who is oxidised and who reduced.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Swaps oxidation and reduction.",
      remediation: "Oxidation is loss of electrons: OIL RIG.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Calls gain of hydrogen oxidation.",
      remediation: "Gaining hydrogen is reduction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls loss of oxygen oxidation.",
      remediation: "Losing oxygen is reduction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Reverses which species is oxidised.",
      remediation: t`$\ce{Sn^{2+}}$ goes to $\ce{Sn^{4+}}$: it loses electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls the oxidised species the oxidising agent.",
      remediation: "The species oxidised is the reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Labels a product.",
      remediation: t`$\ce{Fe^{2+}}$ is formed; it is $\ce{Fe^{3+}}$ that is reduced.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks the species that is oxidised.",
      remediation: "Na loses electrons: it is the reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks the product.",
      remediation: "The oxidising agent is a reactant: sulfur.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks redox needs oxygen.",
      remediation: "Electron transfer, not oxygen, defines redox.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks gaining negative charge is oxidation.",
      remediation: t`$\ce{O2}$ gains electrons to become $\ce{O^{2-}}$: reduction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks forming a metal is oxidation.",
      remediation: t`$\ce{Cu^{2+}}$ gains electrons to form Cu: reduction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks any change of charge is oxidation.",
      remediation: t`$\ce{Fe^{3+}}$ to $\ce{Fe^{2+}}$ gains an electron: reduction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks gaining chlorine is oxidation.",
      remediation: "S falls from +4 to +1: reduction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says neither.",
      remediation: "S's oxidation number changes, from +4 to +1.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says both.",
      remediation: "Only sulfur changes here, and it falls.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (E)" },
      stem: t`In terms of electrons, oxidation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`loss of oxygen`, correct: false, misconceptionId: "C01-M3", value: "loss_oxygen" },
        { key: "B", text: t`gain of electrons`, correct: false, misconceptionId: "C01-M1", value: "gain_electrons" },
        { key: "C", text: t`gain of hydrogen`, correct: false, misconceptionId: "C01-M2", value: "gain_hydrogen" },
        { key: "D", text: t`loss of electrons`, correct: true, value: "loss_electrons" },
      ],
      solution: {
        steps: [
          t`Oxidation is loss of electrons.`,
          t`Reduction is gain.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (E)" },
      stem: t`For $\ce{Sn^{2+} + 2Fe^{3+}}$ $\ce{-> Sn^{4+} + 2Fe^{2+}}$, which statement is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "tin" } },
      options: [
        { key: "A", text: t`$\ce{Sn^{2+}}$ is oxidised`, correct: true, value: "sn_oxidised" },
        { key: "B", text: t`$\ce{Fe^{3+}}$ is oxidised`, correct: false, misconceptionId: "C01-M4", value: "fe_oxidised" },
        { key: "C", text: t`$\ce{Sn^{2+}}$ is the oxidising agent`, correct: false, misconceptionId: "C01-M5", value: "sn_oxidant" },
        { key: "D", text: t`$\ce{Fe^{2+}}$ is reduced`, correct: false, misconceptionId: "C01-M6", value: "fe2_reduced" },
      ],
      solution: {
        steps: [
          t`$\ce{Sn^{2+} -> Sn^{4+}}$: loses two electrons.`,
          t`$\ce{Sn^{2+}}$ is oxidised.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (F)" },
      stem: t`In $\ce{2Na + S -> Na2S}$, the oxidising agent is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sodium" } },
      options: [
        { key: "A", text: t`sodium sulfide`, correct: false, misconceptionId: "C01-M8", value: "sodium_sulfide" },
        { key: "B", text: t`sulfur`, correct: true, value: "sulfur" },
        { key: "C", text: t`none: no oxygen is involved`, correct: false, misconceptionId: "C01-M9", value: "none" },
        { key: "D", text: t`sodium`, correct: false, misconceptionId: "C01-M7", value: "sodium" },
      ],
      solution: {
        steps: [
          t`S goes from 0 to −2: it gains electrons.`,
          t`S is reduced, so it is the oxidising agent.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (E)" },
      stem: t`Which change is an oxidation?`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxidised" } },
      options: [
        { key: "A", text: t`$\ce{Cu^{2+} -> Cu}$`, correct: false, misconceptionId: "C01-M11", value: "cu2_to_cu" },
        { key: "B", text: t`$\ce{O2 -> O^{2-}}$`, correct: false, misconceptionId: "C01-M10", value: "o2_to_o2minus" },
        { key: "C", text: t`$\ce{Mg -> Mg^{2+}}$`, correct: true, value: "mg_to_mg2" },
        { key: "D", text: t`$\ce{Fe^{3+} -> Fe^{2+}}$`, correct: false, misconceptionId: "C01-M12", value: "fe3_to_fe2" },
      ],
      solution: {
        steps: [
          t`Mg loses two electrons.`,
          t`That is oxidation.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (K)" },
      stem: t`In the change $\ce{SO2 -> S2Cl2}$, sulfur undergoes`,
      verify: { kind: "value", inputs: {  }, params: { q: "so2" } },
      options: [
        { key: "A", text: t`both oxidation and reduction`, correct: false, misconceptionId: "C01-M15", value: "both" },
        { key: "B", text: t`oxidation`, correct: false, misconceptionId: "C01-M13", value: "oxidation" },
        { key: "C", text: t`neither oxidation nor reduction`, correct: false, misconceptionId: "C01-M14", value: "neither" },
        { key: "D", text: t`reduction`, correct: true, value: "reduction" },
      ],
      solution: {
        steps: [
          t`S: +4 in $\ce{SO2}$, +1 in $\ce{S2Cl2}$.`,
          t`A fall: reduction.`,
        ],
      },
    },
  ],
};
