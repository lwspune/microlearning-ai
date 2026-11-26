import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Squeeze a soft carry bag and a hard bucket. Both are polythene, from the same monomer, ethene. Why is one flimsy and the other rigid?`,
    reveal: t`The bag's chains are branched and pack loosely (LDP); the bucket's are straight and pack tightly (HDP).`,
  },
  explanation: {
    intuition: [
      t`Ethene polymerizes in two ways, giving two kinds of polythene.`,
      t`Branched chains pack poorly: low density, soft. Linear chains pack well: high density, hard.`,
      t`Replace every H of ethene by F and you get Teflon.`,
      t`Other monomers of the type $\ce{CH2=CHX}$ give PVC and PAN.`,
    ],
    formal: [
      {
        title: "Polythene",
        points: [
          t`**LDP**: free-radical polymerization at 1000–2000 atm and 350–570 K; branched; for bags and films.`,
          t`**HDP**: Ziegler-Natta catalyst ($\ce{TiCl4 + Al(C2H5)3}$) at low pressure, about 333–343 K; linear; for buckets and pipes.`,
        ],
      },
      {
        title: "Other addition polymers",
        points: [
          t`**Teflon**: $n\,\ce{CF2=CF2}$ → $\ce{-(CF2-CF2)}_n\ce{-}$; strong C-F bonds make it inert and heat resistant.`,
          t`**PVC** from vinyl chloride, $\ce{CH2=CHCl}$.`,
          t`**PAN** (Orlon) from acrylonitrile, $\ce{CH2=CH-CN}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the repeat unit of PVC.`,
      steps: [
        t`Monomer: $\ce{CH2=CHCl}$.`,
        t`The double bond opens to link units.`,
      ],
      answer: t`$\ce{-CH2-CHCl-}$`,
    },
    visualSpec: t`Pack branched and straight chains into the same box and compare how many fit.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Confuses Teflon's monomer with caprolactam.",
      remediation: t`Caprolactam makes nylon 6; Teflon comes from $\ce{CF2=CF2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Confuses the monomer with vinyl chloride.",
      remediation: "Vinyl chloride makes PVC; each polymer has its own monomer.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Confuses Teflon's monomer with styrene.",
      remediation: t`Styrene makes polystyrene; Teflon comes from $\ce{CF2=CF2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks Teflon has C-H bonds.",
      remediation: "Every H of polythene is replaced by F in Teflon.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Credits hydrogen bonds.",
      remediation: "Teflon has no H; its strong C-F bonds make it inert.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks the polymer keeps C=C bonds.",
      remediation: "The C=C bonds open during polymerization; Teflon is saturated.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Swaps LDP and HDP.",
      remediation: "HDP: linear, Ziegler-Natta. LDP: branched, free radicals at high pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks HDP is cross-linked.",
      remediation: "HDP's chains are linear and closely packed, not cross-linked.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks HDP has a different monomer.",
      remediation: "Both are made from ethene; the conditions differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks a saturated nitrile can add.",
      remediation: t`Addition needs a C=C bond: acrylonitrile, $\ce{CH2=CH-CN}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Confuses acrylonitrile with acrylic acid.",
      remediation: t`PAN has CN groups: its monomer is $\ce{CH2=CH-CN}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks polythene forms by condensation of ethanol.",
      remediation: "Polythene forms by addition of ethene; nothing is lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks polythene is made from ethyne.",
      remediation: t`Polythene is made from ethene, $\ce{CH2=CH2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#21" },
      stem: t`The monomer used to make Teflon is`,
      verify: { kind: "value", inputs: {  }, params: { q: "teflon" } },
      options: [
        { key: "A", text: t`vinyl chloride`, correct: false, misconceptionId: "C04-M2", value: "vinyl_chloride" },
        { key: "B", text: t`tetrafluoroethene`, correct: true, value: "tetrafluoroethene" },
        { key: "C", text: t`styrene`, correct: false, misconceptionId: "C04-M3", value: "styrene" },
        { key: "D", text: t`caprolactam`, correct: false, misconceptionId: "C04-M1", value: "caprolactam" },
      ],
      solution: {
        steps: [
          t`Teflon is $\ce{-(CF2-CF2)}_n\ce{-}$.`,
          t`Its monomer is tetrafluoroethene.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.1 (x)" },
      stem: t`Teflon is chemically inert because of its`,
      verify: { kind: "value", inputs: {  }, params: { q: "inert" } },
      options: [
        { key: "A", text: t`C-H bonds`, correct: false, misconceptionId: "C04-M4", value: "c_h" },
        { key: "B", text: t`hydrogen bonds`, correct: false, misconceptionId: "C04-M5", value: "h_bond" },
        { key: "C", text: t`strong C-F bonds`, correct: true, value: "c_f" },
        { key: "D", text: t`C=C bonds`, correct: false, misconceptionId: "C04-M6", value: "c_c_double" },
      ],
      solution: {
        steps: [
          t`The C-F bond is very strong.`,
          t`So Teflon resists heat and chemicals.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.4 (v)" },
      stem: t`High-density polythene (HDP) differs from LDP in that HDP`,
      verify: { kind: "value", inputs: {  }, params: { q: "hdp" } },
      options: [
        { key: "A", text: t`has cross-linked chains`, correct: false, misconceptionId: "C04-M8", value: "cross_linked" },
        { key: "B", text: t`is made from a different monomer`, correct: false, misconceptionId: "C04-M9", value: "other_monomer" },
        { key: "C", text: t`has branched chains, made by free radicals at high pressure`, correct: false, misconceptionId: "C04-M7", value: "branched_high_p" },
        { key: "D", text: t`has linear chains, made with a Ziegler-Natta catalyst, that pack closely`, correct: true, value: "linear_ziegler" },
      ],
      solution: {
        steps: [
          t`Ziegler-Natta catalysts give linear chains.`,
          t`They pack closely: high density.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#14" },
      stem: t`Polyacrylonitrile (PAN, Orlon) is made from`,
      verify: { kind: "value", inputs: {  }, params: { q: "pan" } },
      options: [
        { key: "A", text: t`$\ce{CH2=CH-CN}$`, correct: true, value: "acrylonitrile" },
        { key: "B", text: t`$\ce{CH3-CN}$`, correct: false, misconceptionId: "C04-M10", value: "acetonitrile" },
        { key: "C", text: t`$\ce{CH2=CH-COOH}$`, correct: false, misconceptionId: "C04-M11", value: "acrylic_acid" },
        { key: "D", text: t`$\ce{CH2=CHCl}$`, correct: false, misconceptionId: "C04-M2", value: "vinyl_chloride" },
      ],
      solution: {
        steps: [
          t`PAN carries CN groups on a C-C chain.`,
          t`Its monomer is acrylonitrile, $\ce{CH2=CH-CN}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.5 (i)" },
      stem: t`Low-density polythene (LDP) is made by`,
      verify: { kind: "value", inputs: {  }, params: { q: "ldp" } },
      options: [
        { key: "A", text: t`addition polymerization of ethyne`, correct: false, misconceptionId: "C04-M13", value: "ethyne" },
        { key: "B", text: t`free-radical polymerization of ethene at high pressure`, correct: true, value: "radical_high_p" },
        { key: "C", text: t`a Ziegler-Natta catalyst at low pressure`, correct: false, misconceptionId: "C04-M7", value: "ziegler_low_p" },
        { key: "D", text: t`condensation of ethanol, losing water`, correct: false, misconceptionId: "C04-M12", value: "ethanol_condensation" },
      ],
      solution: {
        steps: [
          t`High pressure and free radicals give branched chains.`,
          t`That is LDP.`,
        ],
      },
    },
  ],
};
