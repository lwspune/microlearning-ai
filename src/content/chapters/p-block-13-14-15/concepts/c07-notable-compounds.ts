import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Silicone bakeware goes from freezer to oven without cracking, and water beads on it. What kind of material is it?`,
    reveal: t`A silicone: a polymer with a backbone of alternating silicon and oxygen atoms, carrying organic groups.`,
  },
  explanation: {
    intuition: [
      t`Many p-block compounds are useful in everyday life and industry.`,
      t`Boron gives borax, boric acid and boron nitride.`,
      t`Silicon gives silicones.`,
      t`Nitrogen gives ammonia, made by Haber's process.`,
    ],
    formal: [
      {
        title: "Boron and silicon",
        points: [
          t`Borate test: with ethanol and conc. $\ce{H2SO4}$, ethyl borate burns with a green-edged flame.`,
          t`Boron nitride, $\ce{(BN)_{x}}$: layered like graphite, 'inorganic graphite'.`,
          t`Silicones: $\ce{-Si(R2)-O-}$ chains; water-repellent, heat-stable, used in sealants and lubricants.`,
        ],
      },
      {
        title: "Ammonia",
        points: [
          t`Haber's process: $\ce{N2 + 3H2 <=> 2NH3}$ with an iron catalyst.`,
          t`A base: $\ce{NH3 + HCl -> NH4Cl}$.`,
          t`A complexing agent: its lone pair binds metal ions, as in $\ce{[Cu(NH3)4]^{2+}}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What forms when ammonia meets hydrogen chloride gas?`,
      steps: [
        t`$\ce{NH3 + HCl -> NH4Cl}$.`,
        t`White fumes of ammonium chloride.`,
      ],
      answer: t`$\ce{NH4Cl}$`,
    },
    visualSpec: t`Match each compound to its use: bakeware, lubricants, fertilisers and lab tests.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks borax.",
      remediation: "Borax is a sodium borate; boron nitride is the graphite-like solid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks diborane.",
      remediation: "Diborane is a gas; boron nitride is the layered solid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks colemanite.",
      remediation: "Colemanite is a calcium borate ore.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Confuses Haber's with Ostwald's process.",
      remediation: t`Ostwald's process makes $\ce{HNO3}$ from ammonia.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks urea.",
      remediation: "Urea is made from ammonia; Haber's process makes the ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Picks $\ce{NH4OH}$.`,
      remediation: "Haber's process makes ammonia gas.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Gives calcium's flame.",
      remediation: "Brick-red is calcium; borate gives green.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Gives sodium's flame.",
      remediation: "Golden-yellow is sodium; borate gives green.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Gives the nitrate test.",
      remediation: "The brown ring test is for nitrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Calls silicones pure silicon.",
      remediation: "Silicones are Si–O polymers with organic groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Calls them sand.",
      remediation: t`Sand is $\ce{SiO2}$; silicones carry organic groups.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Thinks they contain no silicon.",
      remediation: "Their backbone is –Si–O–Si–.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Calls ammonia an acid.",
      remediation: "Ammonia is a base and a lone-pair donor.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Credits hydrogen bonds.",
      remediation: "Complexes form by donation of N's lone pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Denies its lone pair.",
      remediation: t`N in $\ce{NH3}$ has one lone pair.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.1 (B)" },
      stem: t`'Inorganic graphite' is`,
      verify: { kind: "value", inputs: {  }, params: { q: "inorganic_graphite" } },
      options: [
        { key: "A", text: t`diborane`, correct: false, misconceptionId: "C07-M2", value: "diborane" },
        { key: "B", text: t`colemanite`, correct: false, misconceptionId: "C07-M3", value: "colemanite" },
        { key: "C", text: t`borax`, correct: false, misconceptionId: "C07-M1", value: "borax" },
        { key: "D", text: t`boron nitride`, correct: true, value: "boron_nitride" },
      ],
      solution: {
        steps: [
          t`BN is layered and slippery like graphite.`,
          t`Boron nitride.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.1 (C)" },
      stem: t`Haber's process is used to make`,
      verify: { kind: "value", inputs: {  }, params: { q: "haber" } },
      options: [
        { key: "A", text: t`$\ce{NH3}$`, correct: true, value: "ammonia" },
        { key: "B", text: t`urea`, correct: false, misconceptionId: "C07-M5", value: "urea" },
        { key: "C", text: t`$\ce{NH4OH}$`, correct: false, misconceptionId: "C07-M6", value: "ammonium_hydroxide" },
        { key: "D", text: t`$\ce{HNO3}$`, correct: false, misconceptionId: "C07-M4", value: "nitric_acid" },
      ],
      solution: {
        steps: [
          t`$\ce{N2 + 3H2 <=> 2NH3}$.`,
          t`Ammonia.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.11" },
      stem: t`In qualitative analysis, the borate radical is detected by`,
      verify: { kind: "value", inputs: {  }, params: { q: "borate" } },
      options: [
        { key: "A", text: t`the brown ring test`, correct: false, misconceptionId: "C07-M9", value: "brown_ring" },
        { key: "B", text: t`the green-edged flame of ethyl borate, made with ethanol and conc. $\ce{H2SO4}$`, correct: true, value: "green_flame" },
        { key: "C", text: t`a brick-red flame`, correct: false, misconceptionId: "C07-M7", value: "brick_red" },
        { key: "D", text: t`a golden-yellow flame`, correct: false, misconceptionId: "C07-M8", value: "golden_yellow" },
      ],
      solution: {
        steps: [
          t`Borate forms volatile ethyl borate.`,
          t`It burns with a green-edged flame.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.9" },
      stem: t`Silicones are`,
      verify: { kind: "value", inputs: {  }, params: { q: "silicones" } },
      options: [
        { key: "A", text: t`silicon dioxide (sand)`, correct: false, misconceptionId: "C07-M11", value: "sand" },
        { key: "B", text: t`pure silicon crystals`, correct: false, misconceptionId: "C07-M10", value: "pure_silicon" },
        { key: "C", text: t`polymers with –Si–O–Si– chains carrying organic groups`, correct: true, value: "si_o_polymers" },
        { key: "D", text: t`organic polymers containing no silicon`, correct: false, misconceptionId: "C07-M12", value: "no_silicon" },
      ],
      solution: {
        steps: [
          t`Backbone –Si–O–Si–.`,
          t`Organic groups on Si.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.14" },
      stem: t`Ammonia is a good complexing agent because`,
      verify: { kind: "value", inputs: {  }, params: { q: "complexing" } },
      options: [
        { key: "A", text: t`it is an acid`, correct: false, misconceptionId: "C07-M13", value: "acid" },
        { key: "B", text: t`it forms hydrogen bonds`, correct: false, misconceptionId: "C07-M14", value: "hydrogen_bonds" },
        { key: "C", text: t`it has no lone pair`, correct: false, misconceptionId: "C07-M15", value: "no_lone_pair" },
        { key: "D", text: t`its N lone pair is donated to metal ions, as in $\ce{[Cu(NH3)4]^{2+}}$`, correct: true, value: "lone_pair_donor" },
      ],
      solution: {
        steps: [
          t`N's lone pair bonds to the metal ion.`,
          t`$\ce{[Cu(NH3)4]^{2+}}$.`,
        ],
      },
    },
  ],
};
