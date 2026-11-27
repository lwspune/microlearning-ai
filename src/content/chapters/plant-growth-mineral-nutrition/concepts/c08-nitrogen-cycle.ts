import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Air is 78% nitrogen, yet plants can starve for nitrogen. Why can't they use the air's?`,
    reveal: t`$\ce{N2}$ has a very strong triple bond. Only some bacteria can break it, turning it into ammonia that plants can use.`,
  },
  explanation: {
    intuition: [
      t`Plants use nitrogen as $\ce{NH4+}$ and $\ce{NO3-}$, not as $\ce{N2}$.`,
      t`Bacteria move nitrogen around a cycle.`,
      t`Fixing $\ce{N2}$ costs a lot of energy.`,
    ],
    formal: [
      {
        title: "Fixation",
        points: [
          t`**Diazotrophs** fix $\ce{N2}$ to ammonia, e.g. *Rhizobium* in root nodules.`,
          t`$\ce{N2 + 8H+ + 8e- + 16ATP}$ $\rightarrow$ $\ce{2NH3 + H2}$ $+$ $\ce{16ADP + 16Pi}$`,
          t`So 16 ATP per $\ce{N2}$, or 8 ATP per ammonia. Cyanobacteria fix it in **heterocysts**.`,
        ],
      },
      {
        title: "The cycle",
        points: [
          t`**Ammonification**: dead matter → ammonia.`,
          t`**Nitrification**: ammonia → nitrite (*Nitrosomonas*) → nitrate (*Nitrobacter*).`,
          t`**Denitrification**: nitrate → $\ce{N2}$ (*Pseudomonas*).`,
        ],
      },
    ],
    worked: {
      prompt: t`How many ATP are used to form 10 molecules of ammonia?`,
      steps: [
        t`One $\ce{N2}$ gives 2 ammonia for 16 ATP.`,
        t`8 ATP per ammonia; $10 \times 8 = 80$.`,
      ],
      answer: t`80 ATP`,
    },
    visualSpec: t`A loop from air to root nodule, soil ammonia, nitrite, nitrate, plant, and back to air.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks ammonification.",
      remediation: "Ammonification makes ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks nitrification.",
      remediation: "Nitrification makes nitrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks fixation.",
      remediation: t`Fixation uses $\ce{N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Gives ATP per ammonia.",
      remediation: t`One $\ce{N2}$ needs 16.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Doubles 16.",
      remediation: t`16 ATP per $\ce{N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Gives the ammonia count.",
      remediation: t`One $\ce{N2}$ gives 2 ammonia.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Uses 16 per ammonia.",
      remediation: "16 ATP make 2 ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: t`Counts the $\ce{N2}$ molecules.`,
      remediation: "Multiply by 8 ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Uses 32 per ammonia.",
      remediation: "8 ATP per ammonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks *Nitrosomonas*.",
      remediation: "*Nitrosomonas* makes nitrite.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks *Pseudomonas*.",
      remediation: "*Pseudomonas* denitrifies.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks *Rhizobium*.",
      remediation: t`*Rhizobium* fixes $\ce{N2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks akinetes.",
      remediation: "Akinetes are resting spores.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks vegetative cells.",
      remediation: "Those photosynthesise.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks root nodules.",
      remediation: "Nodules are on legumes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(11)" },
      stem: t`The conversion of nitrates to nitrogen gas is`,
      verify: { kind: "value", inputs: {  }, params: { q: "denitrification" } },
      options: [
        { key: "A", text: t`denitrification`, correct: true, value: "denitrification_p" },
        { key: "B", text: t`ammonification`, correct: false, misconceptionId: "C08-M1", value: "ammonification_p" },
        { key: "C", text: t`nitrification`, correct: false, misconceptionId: "C08-M2", value: "nitrification_p" },
        { key: "D", text: t`nitrogen fixation`, correct: false, misconceptionId: "C08-M3", value: "fixation_p" },
      ],
      solution: {
        steps: [
          t`Nitrate back to $\ce{N2}$.`,
          t`Denitrification.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(12)" },
      stem: t`How many molecules of ATP are needed to fix one molecule of $\ce{N2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "atp" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C08-M4", value: "8" },
        { key: "B", text: t`$32$`, correct: false, misconceptionId: "C08-M5", value: "32" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C08-M6", value: "2" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`From the fixation equation.`,
          t`16 ATP.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 14" },
      stem: t`How many ATP molecules does a nitrogen fixer need to form 1000 molecules of ammonia?`,
      verify: { kind: "value", inputs: { n: "1000" }, params: { q: "ammonia" } },
      options: [
        { key: "A", text: t`$16000$`, correct: false, misconceptionId: "C08-M7", value: "16000" },
        { key: "B", text: t`$500$`, correct: false, misconceptionId: "C08-M8", value: "500" },
        { key: "C", text: t`$32000$`, correct: false, misconceptionId: "C08-M9", value: "32000" },
        { key: "D", text: t`$8000$`, correct: true, value: "8000" },
      ],
      solution: {
        steps: [
          t`8 ATP per ammonia.`,
          t`$1000 \times 8 = 8000$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(6)" },
      stem: t`Nitrite is converted to nitrate by`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitrite" } },
      options: [
        { key: "A", text: t`*Pseudomonas*`, correct: false, misconceptionId: "C08-M11", value: "pseudomonas_b" },
        { key: "B", text: t`*Rhizobium*`, correct: false, misconceptionId: "C08-M12", value: "rhizobium_b" },
        { key: "C", text: t`*Nitrobacter*`, correct: true, value: "nitrobacter_b" },
        { key: "D", text: t`*Nitrosomonas*`, correct: false, misconceptionId: "C08-M10", value: "nitrosomonas_b" },
      ],
      solution: {
        steps: [
          t`The second step of nitrification.`,
          t`*Nitrobacter*.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 14" },
      stem: t`In cyanobacteria, nitrogen is fixed in specialised cells called`,
      verify: { kind: "value", inputs: {  }, params: { q: "heterocyst" } },
      options: [
        { key: "A", text: t`root nodules`, correct: false, misconceptionId: "C08-M15", value: "root_nodule_c" },
        { key: "B", text: t`heterocysts`, correct: true, value: "heterocyst_c" },
        { key: "C", text: t`akinetes`, correct: false, misconceptionId: "C08-M13", value: "akinete_c" },
        { key: "D", text: t`vegetative cells`, correct: false, misconceptionId: "C08-M14", value: "vegetative_c" },
      ],
      solution: {
        steps: [
          t`Thick-walled fixing cells.`,
          t`Heterocysts.`,
        ],
      },
    },
  ],
};
