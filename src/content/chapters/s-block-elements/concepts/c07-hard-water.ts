import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`In some towns, soap gives a grey scum instead of lather and kettles grow a white crust. Rainwater in the same town lathers at once. What is in the tap water?`,
    reveal: t`Dissolved calcium and magnesium salts: they make water **hard**, react with soap, and leave $\ce{CaCO3}$ on heating.`,
  },
  explanation: {
    intuition: [
      t`Water that does not lather easily with soap is **hard water**.`,
      t`It holds dissolved calcium and magnesium salts, picked up from rocks.`,
      t`Soft water, like rainwater, has almost none.`,
      t`Hardness is **temporary** or **permanent**, by which salts cause it.`,
    ],
    formal: [
      {
        title: "Temporary hardness",
        points: [
          t`Caused by $\ce{Ca(HCO3)2}$ and $\ce{Mg(HCO3)2}$, the hydrogencarbonates.`,
          t`Boiling removes it: $\ce{Ca(HCO3)2}$ $\ce{-> CaCO3 v + H2O + CO2}$.`,
          t`**Clark's method**: slaked lime, $\ce{Ca(OH)2}$, precipitates the carbonate.`,
        ],
      },
      {
        title: "Permanent hardness",
        points: [
          t`Caused by chlorides and sulfates of calcium and magnesium.`,
          t`Boiling does not remove it.`,
          t`**Washing soda**, $\ce{Na2CO3}$, precipitates $\ce{CaCO3}$ and $\ce{MgCO3}$.`,
          t`Ion exchange swaps $\ce{Ca^2+}$ and $\ce{Mg^2+}$ for $\ce{Na+}$.`,
        ],
      },
      {
        title: "Why it matters",
        points: [
          t`Soap's anions form insoluble calcium and magnesium salts: scum.`,
          t`So soap is wasted until all those ions are used up.`,
          t`Detergents work in hard water, since their calcium salts dissolve.`,
        ],
      },
    ],
    worked: {
      prompt: t`A water sample loses its hardness on boiling. Which salt caused it?`,
      steps: [
        t`Boiling removes only temporary hardness.`,
        t`Temporary hardness comes from hydrogencarbonates.`,
        t`So it was $\ce{Ca(HCO3)2}$ or $\ce{Mg(HCO3)2}$.`,
      ],
      answer: t`A hydrogencarbonate of calcium or magnesium`,
    },
    visualSpec: t`A beaker of hard water where ions grab soap molecules and fall out as scum, until washing soda removes them first.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Blames chlorides and sulfates.",
      remediation: "Those cause permanent hardness; temporary is hydrogencarbonates.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Blames sodium salts.",
      remediation: "Sodium salts do not make water hard; calcium and magnesium do.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Blames dissolved carbon dioxide.",
      remediation: t`$\ce{CO2}$ does not react with soap; calcium and magnesium salts do.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks filtering removes it.",
      remediation: "The salts are dissolved, so they pass through a filter.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Adds common salt.",
      remediation: t`NaCl does not remove $\ce{Ca^2+}$ or $\ce{Mg^2+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks it cannot be removed.",
      remediation: t`Boiling turns the hydrogencarbonate into insoluble $\ce{CaCO3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Boils it.",
      remediation: "Chlorides and sulfates do not decompose on boiling.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Filters it.",
      remediation: "Dissolved salts pass through a filter.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Adds baking soda.",
      remediation: t`Washing soda, $\ce{Na2CO3}$, gives the carbonate that precipitates calcium.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks soap dissolves too well.",
      remediation: "Soap forms insoluble calcium and magnesium salts.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Blames acidity.",
      remediation: "Hard water is not strongly acidic; its calcium ions react with soap.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Blames sodium ions.",
      remediation: "Sodium salts of fatty acids are soap itself; calcium and magnesium cause scum.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Adds washing soda.",
      remediation: "Clark's method uses slaked lime; washing soda is for permanent hardness.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Adds common salt.",
      remediation: "Common salt removes no hardness; Clark's method uses slaked lime.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Adds bleaching powder.",
      remediation: "Bleaching powder disinfects; it does not soften water.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "authored" },
      stem: t`Temporary hardness of water is caused by dissolved`,
      verify: { kind: "value", inputs: {  }, params: { q: "temporary" } },
      options: [
        { key: "A", text: t`sodium salts`, correct: false, misconceptionId: "C07-M2", value: "sodium_salts" },
        { key: "B", text: t`carbon dioxide`, correct: false, misconceptionId: "C07-M3", value: "dissolved_co2" },
        { key: "C", text: t`calcium and magnesium hydrogencarbonates`, correct: true, value: "hydrogencarbonates" },
        { key: "D", text: t`calcium and magnesium chlorides and sulfates`, correct: false, misconceptionId: "C07-M1", value: "chlorides_sulfates" },
      ],
      solution: {
        steps: [
          t`Temporary hardness goes on boiling.`,
          t`It comes from calcium and magnesium hydrogencarbonates.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "authored" },
      stem: t`Temporary hardness is removed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "boil" } },
      options: [
        { key: "A", text: t`filtering the water`, correct: false, misconceptionId: "C07-M4", value: "filtering" },
        { key: "B", text: t`adding common salt`, correct: false, misconceptionId: "C07-M5", value: "common_salt" },
        { key: "C", text: t`nothing: it cannot be removed`, correct: false, misconceptionId: "C07-M6", value: "cannot_remove" },
        { key: "D", text: t`boiling the water`, correct: true, value: "boiling" },
      ],
      solution: {
        steps: [
          t`Boiling decomposes $\ce{Ca(HCO3)2}$.`,
          t`Insoluble $\ce{CaCO3}$ settles out.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`Permanent hardness is removed by adding`,
      verify: { kind: "value", inputs: {  }, params: { q: "permanent" } },
      options: [
        { key: "A", text: t`baking soda, $\ce{NaHCO3}$`, correct: false, misconceptionId: "C07-M9", value: "baking_soda" },
        { key: "B", text: t`washing soda, $\ce{Na2CO3}$`, correct: true, value: "washing_soda" },
        { key: "C", text: t`nothing: boiling removes it`, correct: false, misconceptionId: "C07-M7", value: "boiling" },
        { key: "D", text: t`nothing: filtering removes it`, correct: false, misconceptionId: "C07-M8", value: "filtering" },
      ],
      solution: {
        steps: [
          t`$\ce{Na2CO3}$ gives carbonate ions.`,
          t`They precipitate $\ce{CaCO3}$ and $\ce{MgCO3}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`Soap forms a scum and lathers poorly in hard water because`,
      verify: { kind: "value", inputs: {  }, params: { q: "soap" } },
      options: [
        { key: "A", text: t`calcium and magnesium ions form insoluble salts with it`, correct: true, value: "insoluble_salts" },
        { key: "B", text: t`soap dissolves too well in hard water`, correct: false, misconceptionId: "C07-M10", value: "soap_too_soluble" },
        { key: "C", text: t`hard water is strongly acidic`, correct: false, misconceptionId: "C07-M11", value: "too_acidic" },
        { key: "D", text: t`sodium ions in hard water react with it`, correct: false, misconceptionId: "C07-M12", value: "sodium_ions" },
      ],
      solution: {
        steps: [
          t`$\ce{Ca^2+}$ and $\ce{Mg^2+}$ react with soap's anions.`,
          t`They form insoluble scum.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`In Clark's method for removing temporary hardness, the water is treated with`,
      verify: { kind: "value", inputs: {  }, params: { q: "clark" } },
      options: [
        { key: "A", text: t`washing soda, $\ce{Na2CO3}$`, correct: false, misconceptionId: "C07-M13", value: "washing_soda" },
        { key: "B", text: t`common salt`, correct: false, misconceptionId: "C07-M14", value: "common_salt" },
        { key: "C", text: t`bleaching powder`, correct: false, misconceptionId: "C07-M15", value: "bleaching_powder" },
        { key: "D", text: t`slaked lime, $\ce{Ca(OH)2}$`, correct: true, value: "slaked_lime" },
      ],
      solution: {
        steps: [
          t`Slaked lime turns hydrogencarbonate into carbonate.`,
          t`$\ce{CaCO3}$ precipitates.`,
        ],
      },
    },
  ],
};
