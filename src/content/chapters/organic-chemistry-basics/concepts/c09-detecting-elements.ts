import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Nitrogen, sulfur and chlorine in an organic compound are bound by covalent bonds, so they give no ions in water and silver nitrate shows nothing. How do chemists detect them?`,
    reveal: t`Fusing the compound with sodium turns them into ionic NaCN, Na₂S and NaCl, which ordinary ion tests can detect.`,
  },
  explanation: {
    intuition: [
      t`Organic compounds hold N, S and halogens by covalent bonds, so they give no ions.`,
      t`**Lassaigne's test**: fuse the compound with sodium metal.`,
      t`This turns N, S and halogens into ionic sodium salts.`,
      t`Boil the fused mass with water: the **sodium fusion extract**.`,
      t`Each element then shows its own colour or precipitate.`,
    ],
    formal: [
      {
        title: "Sodium fusion",
        points: [
          t`Nitrogen becomes sodium cyanide: $\ce{Na + C + N -> NaCN}$.`,
          t`Sulfur becomes sodium sulfide, $\ce{Na2S}$.`,
          t`A halogen X becomes sodium halide, NaX.`,
          t`N and S together give sodium thiocyanate, NaSCN: blood red with $\ce{Fe^3+}$.`,
        ],
      },
      {
        title: "Nitrogen and sulfur",
        points: [
          t`Nitrogen: boil the extract with $\ce{FeSO4}$, acidify, add $\ce{FeCl3}$.`,
          t`A **Prussian blue** colour, $\ce{Fe4[Fe(CN)6]3}$, shows nitrogen.`,
          t`Sulfur: sodium nitroprusside gives a violet colour.`,
          t`Or lead acetate gives a black precipitate of $\ce{PbS}$.`,
        ],
      },
      {
        title: "Halogens",
        points: [
          t`First boil the extract with conc. $\ce{HNO3}$.`,
          t`This decomposes $\ce{NaCN}$ and $\ce{Na2S}$, which would also precipitate with $\ce{Ag+}$.`,
          t`Then add $\ce{AgNO3}$: AgCl is white and dissolves in ammonia.`,
          t`AgBr is pale yellow and dissolves only partly in ammonia.`,
          t`AgI is yellow and does not dissolve in ammonia.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sodium fusion extract gives a blood red colour with $\ce{FeCl3}$. What does the compound contain?`,
      steps: [
        t`Blood red with $\ce{Fe^3+}$ comes from thiocyanate, $\ce{SCN-}$.`,
        t`NaSCN forms only when N and S are both present.`,
      ],
      answer: t`Both nitrogen and sulfur`,
    },
    visualSpec: t`Test tubes that change colour as each reagent is added to a sodium fusion extract.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Reads Prussian blue as sulfur.",
      remediation: "Prussian blue comes from cyanide, so it shows nitrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Reads Prussian blue as chlorine.",
      remediation: "Halogens are shown by silver halide precipitates, not Prussian blue.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Reads Prussian blue as phosphorus.",
      remediation: "Prussian blue is an iron cyanide: it shows nitrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks nitrogen leaves as ammonia.",
      remediation: t`Fused with sodium and carbon, nitrogen stays as $\ce{NaCN}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Thinks nitrogen becomes a nitrate.",
      remediation: t`Sodium fusion reduces; it gives cyanide, $\ce{NaCN}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks nitrogen escapes as a gas.",
      remediation: t`The point of fusion is to trap nitrogen as $\ce{NaCN}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Reads the violet as nitrogen.",
      remediation: "Nitroprusside's violet shows sulfide ions: sulfur.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Reads the violet as iron.",
      remediation: "The iron is in the reagent; the violet shows sulfur.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Reads the violet as sodium.",
      remediation: "Sodium comes from the fusion; the violet shows sulfur.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Thinks the acid dissolves the precipitate.",
      remediation: t`Boiling with $\ce{HNO3}$ removes $\ce{CN-}$ and $\ce{S^2-}$ that would precipitate too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Thinks the acid oxidises the halide.",
      remediation: t`The halide must stay as $\ce{X-}$ to precipitate with $\ce{Ag+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Thinks the acid precipitates the halogens.",
      remediation: t`$\ce{AgNO3}$ precipitates them; the acid only clears interfering ions.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Reads pale yellow as chlorine.",
      remediation: "AgCl is white and dissolves easily in ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Reads pale yellow as iodine.",
      remediation: "AgI is yellow and does not dissolve in ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Reads it as fluorine.",
      remediation: "AgF is soluble, so fluorine gives no precipitate.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`In Lassaigne's test, the sodium fusion extract is boiled with $\ce{FeSO4}$, then acidified and treated with $\ce{FeCl3}$. A Prussian blue colour shows`,
      verify: { kind: "value", inputs: {  }, params: { q: "prussian" } },
      options: [
        { key: "A", text: t`chlorine`, correct: false, misconceptionId: "C09-M2", value: "chlorine" },
        { key: "B", text: t`phosphorus`, correct: false, misconceptionId: "C09-M3", value: "phosphorus" },
        { key: "C", text: t`nitrogen`, correct: true, value: "nitrogen" },
        { key: "D", text: t`sulfur`, correct: false, misconceptionId: "C09-M1", value: "sulfur" },
      ],
      solution: {
        steps: [
          t`Prussian blue is iron(III) ferrocyanide.`,
          t`Its cyanide came from nitrogen.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`After sodium fusion, the nitrogen of an organic compound is present in the extract as`,
      verify: { kind: "value", inputs: {  }, params: { q: "fusion" } },
      options: [
        { key: "A", text: t`sodium cyanide, $\ce{NaCN}$`, correct: true, value: "sodium_cyanide" },
        { key: "B", text: t`ammonia, $\ce{NH3}$`, correct: false, misconceptionId: "C09-M4", value: "ammonia" },
        { key: "C", text: t`sodium nitrate, $\ce{NaNO3}$`, correct: false, misconceptionId: "C09-M5", value: "sodium_nitrate" },
        { key: "D", text: t`nitrogen gas, $\ce{N2}$`, correct: false, misconceptionId: "C09-M6", value: "nitrogen_gas" },
      ],
      solution: {
        steps: [
          t`Sodium and carbon trap nitrogen.`,
          t`As sodium cyanide, $\ce{NaCN}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`Sodium nitroprusside added to a sodium fusion extract gives a violet colour. The compound contains`,
      verify: { kind: "value", inputs: {  }, params: { q: "violet" } },
      options: [
        { key: "A", text: t`nitrogen`, correct: false, misconceptionId: "C09-M7", value: "nitrogen" },
        { key: "B", text: t`iron`, correct: false, misconceptionId: "C09-M8", value: "iron" },
        { key: "C", text: t`sodium`, correct: false, misconceptionId: "C09-M9", value: "sodium" },
        { key: "D", text: t`sulfur`, correct: true, value: "sulfur" },
      ],
      solution: {
        steps: [
          t`Nitroprusside turns violet with sulfide ions.`,
          t`The compound contains sulfur.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`Before testing for halogens with $\ce{AgNO3}$, the sodium fusion extract is boiled with concentrated $\ce{HNO3}$ to`,
      verify: { kind: "value", inputs: {  }, params: { q: "boil" } },
      options: [
        { key: "A", text: t`decompose any $\ce{NaCN}$ and $\ce{Na2S}$, which would also precipitate with $\ce{Ag+}$`, correct: true, value: "remove_cn_s" },
        { key: "B", text: t`dissolve the silver halide as it forms`, correct: false, misconceptionId: "C09-M10", value: "dissolve_agx" },
        { key: "C", text: t`oxidise the halide ions to halogens`, correct: false, misconceptionId: "C09-M11", value: "oxidise_halide" },
        { key: "D", text: t`precipitate the halogens`, correct: false, misconceptionId: "C09-M12", value: "precipitate_x" },
      ],
      solution: {
        steps: [
          t`$\ce{CN-}$ and $\ce{S^2-}$ also precipitate with $\ce{Ag+}$.`,
          t`Boiling with $\ce{HNO3}$ decomposes them first.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`With $\ce{AgNO3}$, the acidified extract gives a pale yellow precipitate that dissolves only partly in ammonia. The halogen is`,
      verify: { kind: "value", inputs: {  }, params: { q: "silver" } },
      options: [
        { key: "A", text: t`iodine`, correct: false, misconceptionId: "C09-M14", value: "iodine" },
        { key: "B", text: t`fluorine`, correct: false, misconceptionId: "C09-M15", value: "fluorine" },
        { key: "C", text: t`bromine`, correct: true, value: "bromine" },
        { key: "D", text: t`chlorine`, correct: false, misconceptionId: "C09-M13", value: "chlorine" },
      ],
      solution: {
        steps: [
          t`Pale yellow, partly soluble in ammonia, is AgBr.`,
          t`The halogen is bromine.`,
        ],
      },
    },
  ],
};
