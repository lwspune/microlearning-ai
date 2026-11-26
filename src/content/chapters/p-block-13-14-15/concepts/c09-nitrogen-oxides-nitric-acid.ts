import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A copper coin dropped into concentrated nitric acid fizzes and gives off a choking brown gas, but no hydrogen. Why not hydrogen, as with other acids?`,
    reveal: t`The nitrate ion is a strong oxidant: it takes the electrons instead of $\ce{H+}$, giving brown $\ce{NO2}$.`,
  },
  explanation: {
    intuition: [
      t`Nitrogen forms oxides in every oxidation state from $+1$ to $+5$.`,
      t`Most are colourless gases; $\ce{NO2}$ is brown.`,
      t`Nitric acid, $\ce{HNO3}$, is made from ammonia by **Ostwald's process**.`,
      t`It is a strong acid and a strong oxidising agent.`,
      t`So metals usually give oxides of nitrogen with it, not hydrogen.`,
    ],
    formal: [
      {
        title: "Oxides of nitrogen",
        points: [
          t`$\ce{N2O}$ ($+1$): laughing gas. NO ($+2$): colourless, paramagnetic.`,
          t`$\ce{N2O3}$ ($+3$): blue solid. $\ce{N2O5}$ ($+5$): colourless solid.`,
          t`$\ce{NO2}$ ($+4$): brown, paramagnetic (an odd electron).`,
          t`$\ce{NO2}$ dimerises on cooling: $\ce{2NO2 <=> N2O4}$, colourless.`,
        ],
      },
      {
        title: "Ostwald's process",
        points: [
          t`Ammonia burns over platinum gauze: $\ce{4NH3 + 5O2}$ $\ce{-> 4NO + 6H2O}$.`,
          t`NO meets air: $\ce{2NO + O2 -> 2NO2}$.`,
          t`$\ce{NO2}$ dissolves in water: $\ce{3NO2 + H2O}$ $\ce{-> 2HNO3 + NO}$.`,
        ],
      },
      {
        title: "Nitric acid as an oxidant",
        points: [
          t`Concentrated, with copper: $\ce{NO2}$ (brown).`,
          t`Dilute, with copper: NO (colourless).`,
          t`No hydrogen is given off: nitrate oxidises it.`,
          t`Concentrated acid makes iron and aluminium **passive**: a thin oxide layer stops the attack.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the oxidation state of nitrogen in $\ce{N2O4}$.`,
      steps: [
        t`$2x + 4(-2) = 0$`,
        t`$x = +4$, the same as in $\ce{NO2}$.`,
      ],
      answer: t`$+4$`,
    },
    visualSpec: t`A colour strip of nitrogen's oxides by oxidation state, with brown $\ce{NO2}$ fading to $\ce{N2O4}$ in the cold.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Picks $\ce{N2O}$.`,
      remediation: t`$\ce{N2O}$ is colourless laughing gas; brown is $\ce{NO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks NO.",
      remediation: t`NO is paramagnetic but colourless; $\ce{NO2}$ is brown.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Picks $\ce{N2O5}$.`,
      remediation: t`$\ce{N2O5}$ is a colourless solid; brown is $\ce{NO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Forgets to divide by two.",
      remediation: t`Two N share $+6$: each is $+3$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M5",
      mistake: "Gives NO's state.",
      remediation: t`In $\ce{N2O3}$, $2x = 6$, so $x = +3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Gives +5.",
      remediation: t`$+5$ is $\ce{N2O5}$; in $\ce{N2O3}$ it is $+3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Gives the dilute acid's product.",
      remediation: t`Dilute acid gives NO; concentrated gives $\ce{NO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Expects hydrogen.",
      remediation: "Nitrate oxidises any hydrogen, so none is given off.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: t`Expects $\ce{N2O}$.`,
      remediation: t`Copper with concentrated acid gives $\ce{NO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Uses Haber's iron catalyst.",
      remediation: "Iron catalyses ammonia's synthesis; its oxidation uses platinum.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: t`Uses the contact process's $\ce{V2O5}$.`,
      remediation: t`$\ce{V2O5}$ oxidises $\ce{SO2}$; ammonia is oxidised over platinum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Uses nickel.",
      remediation: "Nickel catalyses hydrogenation; Ostwald's process uses platinum.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Expects hydrogen.",
      remediation: "Concentrated nitric acid gives no hydrogen; iron turns passive.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Expects fast dissolving.",
      remediation: "A thin oxide layer forms at once and stops the reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Expects a nitride.",
      remediation: "The acid oxidises the surface to an oxide layer, not a nitride.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`The brown, paramagnetic oxide of nitrogen is`,
      verify: { kind: "value", inputs: {  }, params: { q: "brown" } },
      options: [
        { key: "A", text: t`NO`, correct: false, misconceptionId: "C09-M2", value: "no" },
        { key: "B", text: t`$\ce{N2O5}$`, correct: false, misconceptionId: "C09-M3", value: "n2o5" },
        { key: "C", text: t`$\ce{NO2}$`, correct: true, value: "no2" },
        { key: "D", text: t`$\ce{N2O}$`, correct: false, misconceptionId: "C09-M1", value: "n2o" },
      ],
      solution: {
        steps: [
          t`$\ce{NO2}$ has an odd electron: paramagnetic.`,
          t`It is the brown oxide.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`The oxidation state of nitrogen in dinitrogen trioxide, $\ce{N2O3}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ox" } },
      options: [
        { key: "A", text: t`$+3$`, correct: true, value: "ox_plus_three" },
        { key: "B", text: t`$+6$`, correct: false, misconceptionId: "C09-M4", value: "ox_plus_six" },
        { key: "C", text: t`$+2$`, correct: false, misconceptionId: "C09-M5", value: "ox_plus_two" },
        { key: "D", text: t`$+5$`, correct: false, misconceptionId: "C09-M6", value: "ox_plus_five" },
      ],
      solution: {
        steps: [
          t`$2x + 3(-2) = 0$`,
          t`$x = +3$`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`Copper reacts with concentrated nitric acid. The gas given off is`,
      verify: { kind: "value", inputs: {  }, params: { q: "copper" } },
      options: [
        { key: "A", text: t`NO, colourless`, correct: false, misconceptionId: "C09-M7", value: "no" },
        { key: "B", text: t`$\ce{H2}$`, correct: false, misconceptionId: "C09-M8", value: "hydrogen" },
        { key: "C", text: t`$\ce{N2O}$`, correct: false, misconceptionId: "C09-M9", value: "n2o" },
        { key: "D", text: t`$\ce{NO2}$, brown`, correct: true, value: "no2" },
      ],
      solution: {
        steps: [
          t`Concentrated nitric acid is a strong oxidant.`,
          t`Copper gives brown $\ce{NO2}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`In Ostwald's process for nitric acid, ammonia is oxidised to NO over`,
      verify: { kind: "value", inputs: {  }, params: { q: "ostwald" } },
      options: [
        { key: "A", text: t`platinum gauze`, correct: true, value: "platinum" },
        { key: "B", text: t`iron`, correct: false, misconceptionId: "C09-M10", value: "iron" },
        { key: "C", text: t`$\ce{V2O5}$`, correct: false, misconceptionId: "C09-M11", value: "vanadium_pentoxide" },
        { key: "D", text: t`nickel`, correct: false, misconceptionId: "C09-M12", value: "nickel" },
      ],
      solution: {
        steps: [
          t`Ammonia is burnt in air in Ostwald's process.`,
          t`Over platinum gauze.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`An iron nail is dipped in concentrated nitric acid. The iron`,
      verify: { kind: "value", inputs: {  }, params: { q: "iron" } },
      options: [
        { key: "A", text: t`dissolves rapidly, giving $\ce{NO2}$`, correct: false, misconceptionId: "C09-M14", value: "dissolves_fast" },
        { key: "B", text: t`turns into iron nitride`, correct: false, misconceptionId: "C09-M15", value: "nitride" },
        { key: "C", text: t`becomes passive: a thin oxide layer stops the reaction`, correct: true, value: "passive" },
        { key: "D", text: t`dissolves, giving hydrogen`, correct: false, misconceptionId: "C09-M13", value: "gives_hydrogen" },
      ],
      solution: {
        steps: [
          t`A thin oxide layer forms on the iron.`,
          t`It becomes passive.`,
        ],
      },
    },
  ],
};
