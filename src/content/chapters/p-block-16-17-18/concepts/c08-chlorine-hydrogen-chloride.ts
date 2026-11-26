import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Chlorine gas is poisonous, yet a trace of it makes drinking water safe, and it turns brown wood pulp into white paper. What does chlorine do that makes it so useful?`,
    reveal: t`It is a strong oxidising agent. It takes electrons from the molecules of germs and of dyes, destroying them.`,
  },
  explanation: {
    intuition: [
      t`Chlorine, $\ce{Cl2}$, is a greenish-yellow, poisonous gas with a choking smell.`,
      t`It is a strong **oxidising agent**: it takes electrons and becomes chloride, $\ce{Cl-}$.`,
      t`So it takes metals to their higher oxidation state, and it oxidises ammonia and dyes.`,
      t`With alkalis it **disproportionates**: part of the chlorine is reduced and part oxidised.`,
      t`**Hydrogen chloride**, HCl, is a colourless gas; its solution in water is hydrochloric acid.`,
      t`HCl acts as an acid, not as an oxidant: it neutralises bases and decomposes carbonates.`,
    ],
    formal: [
      {
        title: "Preparing chlorine",
        points: [
          t`In the laboratory, manganese dioxide oxidises concentrated HCl.`,
          t`$\ce{MnO2 + 4HCl}$ $\ce{-> MnCl2 + Cl2 + 2H2O}$`,
          t`Potassium permanganate and concentrated HCl also give chlorine.`,
          t`In **Deacon's process**, air oxidises HCl over a $\ce{CuCl2}$ catalyst at $723$ K.`,
          t`$\ce{4HCl + O2}$ $\ce{-> 2Cl2 + 2H2O}$`,
        ],
      },
      {
        title: "Chlorine with metals and ammonia",
        points: [
          t`Chlorine forms chlorides with metals, taking the metal to its higher oxidation state.`,
          t`With iron: $\ce{2Fe + 3Cl2 -> 2FeCl3}$.`,
          t`With excess ammonia: $\ce{8NH3 + 3Cl2}$ $\ce{-> 6NH4Cl + N2}$.`,
          t`Ammonia is oxidised to $\ce{N2}$, and the HCl formed combines with the excess ammonia.`,
          t`With excess chlorine: $\ce{NH3 + 3Cl2}$ $\ce{-> NCl3 + 3HCl}$, the explosive nitrogen trichloride.`,
        ],
      },
      {
        title: "Chlorine with alkalis",
        points: [
          t`In a **disproportionation**, one substance is both oxidised and reduced in the same reaction.`,
          t`Cold, dilute NaOH: $\ce{Cl2 + 2NaOH}$ $\ce{-> NaCl + NaOCl + H2O}$.`,
          t`Here chlorine goes from $0$ to $-1$ in NaCl and to $+1$ in NaOCl.`,
          t`Hot, concentrated NaOH: $\ce{3Cl2 + 6NaOH}$ $\ce{-> 5NaCl + NaClO3 + 3H2O}$, with $+5$ in $\ce{NaClO3}$.`,
          t`Dry slaked lime gives **bleaching powder**: $\ce{2Ca(OH)2 + 2Cl2}$ $\ce{-> Ca(OCl)2 + CaCl2 + 2H2O}$.`,
          t`Each time, part of the chlorine becomes chloride and the rest an oxoanion.`,
        ],
      },
      {
        title: "Bleaching and uses",
        points: [
          t`Moist chlorine forms hypochlorous acid: $\ce{Cl2 + H2O -> HCl + HOCl}$.`,
          t`HOCl gives **nascent oxygen**, freshly formed atomic oxygen: $\ce{HOCl -> HCl + [O]}$.`,
          t`Nascent oxygen oxidises a coloured substance to a colourless one.`,
          t`Bleaching by oxidation is permanent; $\ce{SO2}$ bleaches by reduction, and the colour returns in air.`,
          t`Dry chlorine does not bleach: water is needed.`,
          t`Uses: sterilising drinking water, bleaching wood pulp and cotton, and making $\ce{CCl4}$, $\ce{CHCl3}$ and DDT.`,
        ],
      },
      {
        title: "Hydrogen chloride",
        points: [
          t`Heat NaCl with concentrated $\ce{H2SO4}$ at $420$ K: $\ce{NaCl + H2SO4}$ $\ce{-> NaHSO4 + HCl}$.`,
          t`The less volatile sulfuric acid drives out the volatile HCl; the gas is dried with concentrated $\ce{H2SO4}$.`,
          t`With ammonia it gives dense white fumes: $\ce{NH3 + HCl -> NH4Cl}$.`,
          t`With sodium carbonate it gives $\ce{CO2}$: $\ce{Na2CO3 + 2HCl}$ $\ce{-> 2NaCl + H2O + CO2}$.`,
          t`**Aqua regia**, $3$ parts concentrated HCl to $1$ part concentrated $\ce{HNO3}$, dissolves gold and platinum.`,
          t`HCl is a strong acid ($K_a = 10^7$) but a weak oxidant: it never oxidises ammonia.`,
        ],
      },
    ],
    worked: {
      prompt: t`Iron filings are heated in chlorine, and separately added to dilute hydrochloric acid. What forms in each case, and why do they differ?`,
      steps: [
        t`Chlorine is a strong oxidising agent, so it takes iron to its higher state, $+3$.`,
        t`$\ce{2Fe + 3Cl2 -> 2FeCl3}$`,
        t`In dilute HCl the only oxidant is $\ce{H+}$, a weak one: iron goes only to $+2$, and hydrogen is given off.`,
        t`$\ce{Fe + 2HCl -> FeCl2 + H2}$`,
      ],
      answer: t`$\ce{FeCl3}$ with chlorine; $\ce{FeCl2}$ and $\ce{H2}$ with dilute HCl.`,
    },
    visualSpec: t`Pass chlorine into ammonia, iron, cold alkali and hot alkali, and tag each chlorine atom with its new oxidation state.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Treats chlorine as if it were hydrochloric acid: expects only acid reactions (a chloride and water, NH4Cl with ammonia), never oxidation or disproportionation.",
      remediation: t`Chlorine is an oxidising agent, not an acid. It oxidises ammonia to $\ce{N2}$ and dyes to colourless matter, and with alkalis it gives chloride and an oxoanion.`,
      fallback: { kind: "ext", topic: "redox reactions (Std XI Chemistry)" },
    },
    {
      id: "C08-M2",
      mistake: "Ignores which reactant is in excess when ammonia meets chlorine, giving NCl3 even when ammonia is in excess.",
      remediation: t`Proportions decide the product. Excess ammonia gives $\ce{NH4Cl}$ and $\ce{N2}$; only excess chlorine gives $\ce{NCl3}$ and HCl.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks hydrogen chloride is an oxidant like chlorine.",
      remediation: t`HCl is a strong acid but a weak oxidant. With ammonia it only forms $\ce{NH4Cl}$; it is the HOCl from chlorine that bleaches.`,
      fallback: { kind: "ext", topic: "redox reactions (Std XI Chemistry)" },
    },
    {
      id: "C08-M4",
      mistake: "Thinks chlorine bleaches by reduction, like sulfur dioxide, so the colour comes back.",
      remediation: t`Chlorine bleaches by oxidation: HOCl gives nascent oxygen, which oxidises the dye. Oxidation bleaching is permanent; only $\ce{SO2}$'s reduction bleaching fades.`,
      fallback: { kind: "ext", topic: "redox reactions (Std XI Chemistry)" },
    },
    {
      id: "C08-M5",
      mistake: "Swaps the products of cold, dilute and hot, concentrated alkali.",
      remediation: t`Cold, dilute alkali gives the hypochlorite, $\ce{OCl-}$ $(+1)$; hot, concentrated alkali gives the chlorate, $\ce{ClO3-}$ $(+5)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks all the chlorine is oxidised to the oxoanion, missing the part reduced to chloride.",
      remediation: "In a disproportionation the electrons lost by some chlorine atoms are gained by others. So a chloride always forms alongside the hypochlorite or chlorate.",
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C08-M1 is caught on every item; C08-M2 and C08-M3 on the ammonia item, C08-M4 on the bleaching item, C08-M5 and C08-M6 on the alkali items.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#23" },
      stem: t`Excess ammonia reacts (a) with hydrogen chloride gas and (b) with chlorine gas. What forms in each?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "nh3_pair" } },
      options: [
        { key: "A", text: t`(a) $\ce{NH4Cl}$; (b) $\ce{NH4Cl}$ and $\ce{N2}$`, correct: true, value: "nh4cl__nh4cl_n2" },
        { key: "B", text: t`(a) $\ce{NH4Cl}$; (b) $\ce{NH4Cl}$ only`, correct: false, misconceptionId: "C08-M1", value: "nh4cl__nh4cl" },
        { key: "C", text: t`(a) $\ce{NH4Cl}$; (b) $\ce{NCl3}$ and HCl`, correct: false, misconceptionId: "C08-M2", value: "nh4cl__ncl3_hcl" },
        { key: "D", text: t`(a) $\ce{NH4Cl}$ and $\ce{N2}$; (b) $\ce{NH4Cl}$ and $\ce{N2}$`, correct: false, misconceptionId: "C08-M3", value: "nh4cl_n2__nh4cl_n2" },
      ],
      solution: {
        steps: [
          t`HCl is an acid: with ammonia it simply forms $\ce{NH4Cl}$, the white fumes.`,
          t`Chlorine is an oxidant: it oxidises ammonia to $\ce{N2}$, and the HCl formed combines with the excess ammonia.`,
          t`$\ce{8NH3 + 3Cl2}$ $\ce{-> 6NH4Cl + N2}$`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#22" },
      stem: t`Chlorine is passed over dry slaked lime, $\ce{Ca(OH)2}$. What are the products?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "slaked_lime" } },
      options: [
        { key: "A", text: t`$\ce{Ca(ClO3)2}$, $\ce{CaCl2}$ and $\ce{H2O}$`, correct: false, misconceptionId: "C08-M5", value: "caclo32_cacl2_h2o" },
        { key: "B", text: t`$\ce{Ca(OCl)2}$ and $\ce{H2O}$ only`, correct: false, misconceptionId: "C08-M6", value: "caocl2_h2o" },
        { key: "C", text: t`$\ce{Ca(OCl)2}$, $\ce{CaCl2}$ and $\ce{H2O}$`, correct: true, value: "caocl2_cacl2_h2o" },
        { key: "D", text: t`$\ce{CaCl2}$ and $\ce{H2O}$ only`, correct: false, misconceptionId: "C08-M1", value: "cacl2_h2o" },
      ],
      solution: {
        steps: [
          t`Chlorine disproportionates with the alkali: part goes to chloride $(-1)$, part to hypochlorite $(+1)$.`,
          t`$\ce{2Ca(OH)2 + 2Cl2}$ $\ce{-> Ca(OCl)2 + CaCl2 + 2H2O}$`,
          t`The product is bleaching powder.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (viii)" },
      stem: t`Chlorine is bubbled through cold, dilute sodium hydroxide solution. What are the products?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "naoh_cold" } },
      options: [
        { key: "A", text: t`NaCl and $\ce{H2O}$ only`, correct: false, misconceptionId: "C08-M1", value: "nacl_h2o" },
        { key: "B", text: t`NaCl, $\ce{NaClO3}$ and $\ce{H2O}$`, correct: false, misconceptionId: "C08-M5", value: "nacl_naclo3_h2o" },
        { key: "C", text: t`NaOCl and $\ce{H2O}$ only`, correct: false, misconceptionId: "C08-M6", value: "naocl_h2o" },
        { key: "D", text: t`NaCl, NaOCl and $\ce{H2O}$`, correct: true, value: "nacl_naocl_h2o" },
      ],
      solution: {
        steps: [
          t`With cold, dilute alkali, chlorine disproportionates to chloride $(-1)$ and hypochlorite $(+1)$.`,
          t`$\ce{Cl2 + 2NaOH}$ $\ce{-> NaCl + NaOCl + H2O}$`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#21" },
      stem: t`A coloured flower is placed in moist chlorine and loses its colour. How does chlorine bleach it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bleach" } },
      options: [
        { key: "A", text: t`It reduces the dye, as $\ce{SO2}$ does, so the colour returns in air`, correct: false, misconceptionId: "C08-M4", value: "reduction_temporary" },
        { key: "B", text: t`It forms HOCl with water, whose nascent oxygen oxidises the dye for good`, correct: true, value: "hocl_oxidises_permanent" },
        { key: "C", text: t`It acts as an acid with water, and the acid destroys the dye for good`, correct: false, misconceptionId: "C08-M1", value: "acid_destroys_colour" },
        { key: "D", text: t`It forms HCl with water, and the HCl oxidises the dye for good`, correct: false, misconceptionId: "C08-M3", value: "hcl_oxidises" },
      ],
      solution: {
        steps: [
          t`Chlorine reacts with water: $\ce{Cl2 + H2O -> HCl + HOCl}$.`,
          t`HOCl gives nascent oxygen, $\ce{HOCl -> HCl + [O]}$, which oxidises the dye to a colourless substance.`,
          t`Bleaching by oxidation is permanent.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (viii)" },
      stem: t`Chlorine is passed into hot, concentrated sodium hydroxide solution. What are the products?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "naoh_hot" } },
      options: [
        { key: "A", text: t`NaCl, $\ce{NaClO3}$ and $\ce{H2O}$`, correct: true, value: "nacl_naclo3_h2o" },
        { key: "B", text: t`NaCl and $\ce{H2O}$ only`, correct: false, misconceptionId: "C08-M1", value: "nacl_h2o" },
        { key: "C", text: t`NaCl, NaOCl and $\ce{H2O}$`, correct: false, misconceptionId: "C08-M5", value: "nacl_naocl_h2o" },
        { key: "D", text: t`$\ce{NaClO3}$ and $\ce{H2O}$ only`, correct: false, misconceptionId: "C08-M6", value: "naclo3_h2o" },
      ],
      solution: {
        steps: [
          t`With hot, concentrated alkali, chlorine disproportionates to chloride $(-1)$ and chlorate $(+5)$.`,
          t`$\ce{3Cl2 + 6NaOH}$ $\ce{-> 5NaCl + NaClO3 + 3H2O}$`,
        ],
      },
    },
  ],
};
