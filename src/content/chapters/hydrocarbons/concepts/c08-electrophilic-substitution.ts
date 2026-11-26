import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Benzene and nitric acid will not react on their own. Add concentrated sulfuric acid and nitrobenzene forms. What does the sulfuric acid do?`,
    reveal: t`It turns nitric acid into the nitronium ion, $\ce{NO2+}$, an electrophile strong enough to attack the ring.`,
  },
  explanation: {
    intuition: [
      t`Benzene's π electrons attract electrophiles.`,
      t`The electrophile replaces an H, so the aromatic ring survives.`,
      t`Catalysts generate the electrophile.`,
      t`Groups already present direct newcomers ortho-para or meta.`,
    ],
    formal: [
      {
        title: "Reactions",
        points: [
          t`Nitration: conc. $\ce{HNO3}$ + conc. $\ce{H2SO4}$; electrophile $\ce{NO2+}$.`,
          t`Halogenation: $\ce{Cl2}$/$\ce{FeCl3}$; sulfonation: fuming $\ce{H2SO4}$.`,
          t`Friedel-Crafts alkylation ($\ce{CH3Cl}$/$\ce{AlCl3}$) and acylation ($\ce{CH3COCl}$/$\ce{AlCl3}$).`,
        ],
      },
      {
        title: "Directing groups",
        points: [
          t`Ortho-para: $\ce{-CH3}$, $\ce{-C2H5}$, $\ce{-OH}$, $\ce{-Cl}$; para usually major.`,
          t`Meta: $\ce{-NO2}$, $\ce{-CHO}$, $\ce{-COOH}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the main product when toluene is nitrated?`,
      steps: [
        t`$\ce{CH3}$ directs ortho and para.`,
        t`Para is less crowded: p-nitrotoluene is major.`,
      ],
      answer: t`p-nitrotoluene (with some ortho)`,
    },
    visualSpec: t`Bring an electrophile to the ring and see where the existing group sends it.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Says $\ce{NO2-}$.`,
      remediation: t`An electrophile is electron-poor: $\ce{NO2+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Says $\ce{HNO3}$ itself.`,
      remediation: t`$\ce{H2SO4}$ converts $\ce{HNO3}$ into $\ce{NO2+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Says $\ce{NO3-}$.`,
      remediation: "Anions are not electrophiles.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Calls ethyl meta-directing.",
      remediation: "Alkyl groups direct ortho-para.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Replaces the ethyl group.",
      remediation: "Cl replaces a ring H.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks ortho over para.",
      remediation: "Para is less crowded and usually major.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Gives the alkylation reagents.",
      remediation: t`Acylation uses an acyl chloride, $\ce{CH3COCl}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Gives the nitrating mixture.",
      remediation: t`That nitrates; acylation uses $\ce{CH3COCl}$/$\ce{AlCl3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Gives the chlorinating reagents.",
      remediation: "That chlorinates the ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: t`Calls $\ce{NO2}$ ortho-para directing.`,
      remediation: t`$\ce{NO2}$ withdraws electrons and directs meta.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: t`Replaces $\ce{NO2}$.`,
      remediation: t`Cl replaces a ring H, meta to $\ce{NO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Expects no reaction.",
      remediation: "Nitrobenzene reacts, though slowly.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Thinks benzene has no double bonds.",
      remediation: "It has six delocalised π electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Thinks addition is faster.",
      remediation: "Addition would destroy the stable aromatic ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Calls benzene saturated.",
      remediation: "Benzene is unsaturated but aromatic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.8 (B)" },
      stem: t`In the nitration of benzene, the electrophile is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitration" } },
      options: [
        { key: "A", text: t`$\ce{NO2-}$`, correct: false, misconceptionId: "C08-M1", value: "nitrite" },
        { key: "B", text: t`$\ce{NO2+}$`, correct: true, value: "nitronium" },
        { key: "C", text: t`$\ce{HNO3}$ itself`, correct: false, misconceptionId: "C08-M2", value: "nitric_acid" },
        { key: "D", text: t`$\ce{NO3-}$`, correct: false, misconceptionId: "C08-M3", value: "nitrate" },
      ],
      solution: {
        steps: [
          t`$\ce{HNO3 + 2H2SO4}$ $\ce{-> NO2+ + H3O+ + 2HSO4-}$.`,
          t`$\ce{NO2+}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.1 (D)" },
      stem: t`The major product of chlorinating ethylbenzene (with $\ce{FeCl3}$) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ethylbenzene" } },
      options: [
        { key: "A", text: t`m-chloroethylbenzene`, correct: false, misconceptionId: "C08-M4", value: "meta" },
        { key: "B", text: t`chlorobenzene`, correct: false, misconceptionId: "C08-M5", value: "chlorobenzene" },
        { key: "C", text: t`p-chloroethylbenzene`, correct: true, value: "para" },
        { key: "D", text: t`o-chloroethylbenzene`, correct: false, misconceptionId: "C08-M6", value: "ortho" },
      ],
      solution: {
        steps: [
          t`Ethyl directs ortho and para.`,
          t`Para is less crowded: major.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.7" },
      stem: t`Which reagents are used for acylation of benzene?`,
      verify: { kind: "value", inputs: {  }, params: { q: "acylation" } },
      options: [
        { key: "A", text: t`$\ce{CH3Cl}$ and anhydrous $\ce{AlCl3}$`, correct: false, misconceptionId: "C08-M7", value: "methyl_chloride_alcl3" },
        { key: "B", text: t`conc. $\ce{HNO3}$ and conc. $\ce{H2SO4}$`, correct: false, misconceptionId: "C08-M8", value: "nitrating_mix" },
        { key: "C", text: t`$\ce{Cl2}$ and $\ce{FeCl3}$`, correct: false, misconceptionId: "C08-M9", value: "cl2_fecl3" },
        { key: "D", text: t`$\ce{CH3COCl}$ and anhydrous $\ce{AlCl3}$`, correct: true, value: "acyl_chloride_alcl3" },
      ],
      solution: {
        steps: [
          t`An acyl group comes from an acyl chloride.`,
          t`$\ce{CH3COCl}$ with anhydrous $\ce{AlCl3}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (R)" },
      stem: t`Nitrobenzene is chlorinated. The main product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitrobenzene" } },
      options: [
        { key: "A", text: t`m-chloronitrobenzene`, correct: true, value: "meta" },
        { key: "B", text: t`nothing: no reaction`, correct: false, misconceptionId: "C08-M12", value: "no_reaction" },
        { key: "C", text: t`chlorobenzene`, correct: false, misconceptionId: "C08-M11", value: "replaces_no2" },
        { key: "D", text: t`o- and p-chloronitrobenzene`, correct: false, misconceptionId: "C08-M10", value: "ortho_para" },
      ],
      solution: {
        steps: [
          t`$\ce{NO2}$ directs meta.`,
          t`m-chloronitrobenzene.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.8 (A)" },
      stem: t`Benzene usually undergoes substitution rather than addition because`,
      verify: { kind: "value", inputs: {  }, params: { q: "substitution" } },
      options: [
        { key: "A", text: t`benzene is saturated`, correct: false, misconceptionId: "C08-M15", value: "saturated" },
        { key: "B", text: t`substitution keeps the stable aromatic ring intact`, correct: true, value: "keeps_aromatic" },
        { key: "C", text: t`benzene has no double bonds`, correct: false, misconceptionId: "C08-M13", value: "no_double_bonds" },
        { key: "D", text: t`addition is always faster`, correct: false, misconceptionId: "C08-M14", value: "addition_faster" },
      ],
      solution: {
        steps: [
          t`Addition would break the aromatic ring.`,
          t`Substitution keeps it.`,
        ],
      },
    },
  ],
};
