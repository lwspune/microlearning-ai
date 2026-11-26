import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Washing soda is made from salt, limestone and ammonia, and almost nothing is wasted. How does the Solvay process manage that?`,
    reveal: t`$\ce{CO2}$ through ammoniated brine precipitates sodium bicarbonate; heating it gives washing soda; the ammonia and $\ce{CO2}$ are recycled.`,
  },
  explanation: {
    intuition: [
      t`Sodium carbonate is made by the Solvay process.`,
      t`Hard water contains calcium and magnesium salts that spoil soap.`,
      t`Temporary hardness comes from hydrogencarbonates and is removed by boiling.`,
      t`Lithium aluminium hydride is a powerful reducing agent.`,
    ],
    formal: [
      {
        title: "Solvay process",
        points: [
          t`$\ce{NH3 + H2O + CO2}$ $\ce{-> NH4HCO3}$.`,
          t`$\ce{NaCl + NH4HCO3}$ $\ce{-> NaHCO3 + NH4Cl}$: $\ce{NaHCO3}$ precipitates.`,
          t`$\ce{2NaHCO3}$ $\ce{-> Na2CO3 + CO2 + H2O}$.`,
        ],
      },
      {
        title: "Other compounds",
        points: [
          t`Washing soda crystals, $\ce{Na2CO3.10H2O}$, lose water on heating.`,
          t`Boiling: $\ce{Ca(HCO3)2}$ $\ce{-> CaCO3 + H2O + CO2}$, removing temporary hardness.`,
          t`$\ce{LiAlH4}$ reduces aldehydes, ketones and acids.`,
          t`$\ce{K+}$ is the chief cation in cell sap; $\ce{Na+}$ in blood plasma.`,
        ],
      },
    ],
    worked: {
      prompt: t`What gas is given off when sodium bicarbonate is heated?`,
      steps: [
        t`$\ce{2NaHCO3}$ $\ce{-> Na2CO3 + CO2 + H2O}$.`,
        t`Carbon dioxide.`,
      ],
      answer: t`$\ce{CO2}$`,
    },
    visualSpec: t`Follow brine, ammonia and $\ce{CO2}$ through the Solvay plant to the sodium carbonate at the end.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Skips to $\ce{Na2CO3}$.`,
      remediation: t`The precipitate is $\ce{NaHCO3}$; heating it gives $\ce{Na2CO3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Says only $\ce{NH4Cl}$.`,
      remediation: t`$\ce{NH4Cl}$ stays dissolved; $\ce{NaHCO3}$ precipitates.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says NaOH.",
      remediation: t`The process makes $\ce{NaHCO3}$, not NaOH.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Confuses it with $\ce{NaHCO3}$.`,
      remediation: t`$\ce{Na2CO3}$ is stable to heat; it only loses its water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Thinks it turns into $\ce{NaHCO3}$.`,
      remediation: "Heating removes water of crystallisation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Expects a colour change.",
      remediation: "The crystals lose water and crumble to a white powder.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Adds common salt.",
      remediation: t`Salt does not remove $\ce{Ca^{2+}}$ or $\ce{Mg^{2+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Filters the water.",
      remediation: "The hardness salts are dissolved.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Adds more soap.",
      remediation: "Soap is wasted as scum; boiling removes temporary hardness.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: t`Calls $\ce{LiAlH4}$ an oxidant.`,
      remediation: "Its hydride ions donate electrons: a reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Calls it a drying agent.",
      remediation: "It reacts violently with water; it is a reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Calls it a fertiliser.",
      remediation: "It is a laboratory reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: t`Picks $\ce{Na+}$.`,
      remediation: t`$\ce{Na+}$ dominates blood plasma; $\ce{K+}$ dominates cell sap.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: t`Picks $\ce{Ca^{2+}}$.`,
      remediation: "Calcium is mainly in bones and teeth.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Picks $\ce{Mg^{2+}}$.`,
      remediation: t`Magnesium is in chlorophyll; $\ce{K+}$ fills cell sap.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.2 (A)" },
      stem: t`$\ce{CO2}$ is passed into concentrated brine saturated with ammonia. The substance that precipitates is`,
      verify: { kind: "value", inputs: {  }, params: { q: "solvay" } },
      options: [
        { key: "A", text: t`$\ce{Na2CO3}$`, correct: false, misconceptionId: "C06-M1", value: "na2co3" },
        { key: "B", text: t`$\ce{NaHCO3}$`, correct: true, value: "nahco3" },
        { key: "C", text: t`NaOH`, correct: false, misconceptionId: "C06-M3", value: "naoh" },
        { key: "D", text: t`$\ce{NH4Cl}$`, correct: false, misconceptionId: "C06-M2", value: "nh4cl_only" },
      ],
      solution: {
        steps: [
          t`$\ce{NaCl + NH4HCO3}$ $\ce{-> NaHCO3 + NH4Cl}$.`,
          t`$\ce{NaHCO3}$, less soluble, precipitates.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.5 (D)" },
      stem: t`When crystalline sodium carbonate, $\ce{Na2CO3.10H2O}$, is heated, it`,
      verify: { kind: "value", inputs: {  }, params: { q: "heat_soda" } },
      options: [
        { key: "A", text: t`decomposes into $\ce{NaHCO3}$`, correct: false, misconceptionId: "C06-M5", value: "forms_nahco3" },
        { key: "B", text: t`releases $\ce{CO2}$`, correct: false, misconceptionId: "C06-M4", value: "releases_co2" },
        { key: "C", text: t`loses water`, correct: true, value: "loses_water" },
        { key: "D", text: t`changes colour`, correct: false, misconceptionId: "C06-M6", value: "colour_change" },
      ],
      solution: {
        steps: [
          t`$\ce{Na2CO3.10H2O}$ holds water of crystallisation.`,
          t`Heating drives it off.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.3 (C)" },
      stem: t`Water containing $\ce{Ca(HCO3)2}$ and $\ce{Mg(HCO3)2}$ will not lather with soap. Its hardness can be removed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "hardness" } },
      options: [
        { key: "A", text: t`adding more soap`, correct: false, misconceptionId: "C06-M9", value: "more_soap" },
        { key: "B", text: t`adding common salt`, correct: false, misconceptionId: "C06-M7", value: "common_salt" },
        { key: "C", text: t`filtering it`, correct: false, misconceptionId: "C06-M8", value: "filtering" },
        { key: "D", text: t`boiling the water`, correct: true, value: "boiling" },
      ],
      solution: {
        steps: [
          t`Hydrogencarbonates cause temporary hardness.`,
          t`Boiling precipitates them as carbonates.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.4 (E)" },
      stem: t`Lithium aluminium hydride, $\ce{LiAlH4}$, is used as`,
      verify: { kind: "value", inputs: {  }, params: { q: "lialh4" } },
      options: [
        { key: "A", text: t`a reducing agent`, correct: true, value: "reducing_agent" },
        { key: "B", text: t`a fertiliser`, correct: false, misconceptionId: "C06-M12", value: "fertiliser" },
        { key: "C", text: t`an oxidising agent`, correct: false, misconceptionId: "C06-M10", value: "oxidising_agent" },
        { key: "D", text: t`a drying agent`, correct: false, misconceptionId: "C06-M11", value: "drying_agent" },
      ],
      solution: {
        steps: [
          t`$\ce{LiAlH4}$ supplies hydride ions.`,
          t`A reducing agent.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.4 (D)" },
      stem: t`The ion present in high concentration in plant cell sap is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cell_sap" } },
      options: [
        { key: "A", text: t`$\ce{Na+}$`, correct: false, misconceptionId: "C06-M13", value: "na_ion" },
        { key: "B", text: t`$\ce{K+}$`, correct: true, value: "k_ion" },
        { key: "C", text: t`$\ce{Ca^{2+}}$`, correct: false, misconceptionId: "C06-M14", value: "ca_ion" },
        { key: "D", text: t`$\ce{Mg^{2+}}$`, correct: false, misconceptionId: "C06-M15", value: "mg_ion" },
      ],
      solution: {
        steps: [
          t`Plant cells store potassium.`,
          t`$\ce{K+}$.`,
        ],
      },
    },
  ],
};
