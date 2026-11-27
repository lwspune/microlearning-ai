import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Butter is solid at room temperature, and sunflower oil is liquid. Both are fats. Why the difference?`,
    reveal: t`Butter's fatty acids are mostly saturated, packing tightly; oil's are unsaturated, with bent chains that cannot.`,
  },
  explanation: {
    intuition: [
      t`**Lipids** are greasy, soluble in organic solvents.`,
      t`They are fatty acids and their derivatives.`,
      t`Types: simple, compound and derived lipids.`,
    ],
    formal: [
      {
        title: "Fatty acids",
        points: [
          t`**Saturated**: no double bonds (palmitic, stearic).`,
          t`**Unsaturated**: one or more double bonds (oleic, linoleic).`,
          t`**Essential**: linoleic, linolenic, **arachidonic**; must come from the diet. Omega-3s from **flax seeds**.`,
        ],
      },
      {
        title: "Phospholipids",
        points: [
          t`Compound lipids: **glycerol + two fatty acids + a phosphate group**.`,
          t`A polar head and non-polar tails.`,
          t`They form the bilayer of cell membranes.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why do phospholipids form a bilayer in water?`,
      steps: [
        t`Heads are polar and face water.`,
        t`Tails are non-polar and hide inside.`,
      ],
      answer: t`Heads face out, tails face in`,
    },
    visualSpec: t`A phospholipid with a round polar head and two fatty-acid tails, in a bilayer.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks oleic.",
      remediation: "Oleic is not essential.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks stearic.",
      remediation: "Stearic is saturated.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks palmitic.",
      remediation: "Palmitic is saturated.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says double bonds.",
      remediation: "That is unsaturated.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says triple bonds.",
      remediation: "Fatty acids lack them.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says rings.",
      remediation: "Fatty acids are chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says three fatty acids.",
      remediation: "That is a fat (triglyceride).",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says glucose.",
      remediation: "Lipids have glycerol.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says amino acids.",
      remediation: "That is protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says yam.",
      remediation: "Yam gives steroid drugs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says sugarcane.",
      remediation: "Sugarcane gives sucrose.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says wheat.",
      remediation: "Wheat is mainly starch.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks oleic.",
      remediation: "Oleic has a double bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks linoleic.",
      remediation: "Linoleic is unsaturated.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks linolenic.",
      remediation: "Linolenic is unsaturated.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(E)" },
      stem: t`Linoleic, linolenic and which other acid are the essential fatty acids?`,
      verify: { kind: "value", inputs: {  }, params: { q: "essential" } },
      options: [
        { key: "A", text: t`Stearic`, correct: false, misconceptionId: "C04-M2", value: "stearic_f" },
        { key: "B", text: t`Palmitic`, correct: false, misconceptionId: "C04-M3", value: "palmitic_f" },
        { key: "C", text: t`Arachidonic`, correct: true, value: "arachidonic_f" },
        { key: "D", text: t`Oleic`, correct: false, misconceptionId: "C04-M1", value: "oleic_f" },
      ],
      solution: {
        steps: [
          t`The third essential one.`,
          t`Arachidonic.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(F)" },
      stem: t`A saturated fatty acid has`,
      verify: { kind: "value", inputs: {  }, params: { q: "saturated" } },
      options: [
        { key: "A", text: t`one or more double bonds`, correct: false, misconceptionId: "C04-M4", value: "has_double" },
        { key: "B", text: t`triple bonds`, correct: false, misconceptionId: "C04-M5", value: "triple_bonds" },
        { key: "C", text: t`rings of carbon`, correct: false, misconceptionId: "C04-M6", value: "rings_f" },
        { key: "D", text: t`no double bonds in its carbon chain`, correct: true, value: "no_double" },
      ],
      solution: {
        steps: [
          t`No double bonds.`,
          t`Saturated.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q5(D)" },
      stem: t`A phospholipid molecule is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "phospholipid" } },
      options: [
        { key: "A", text: t`glucose and phosphate`, correct: false, misconceptionId: "C04-M8", value: "glucose_phosphate" },
        { key: "B", text: t`amino acids`, correct: false, misconceptionId: "C04-M9", value: "amino_acids_l" },
        { key: "C", text: t`glycerol, two fatty acids and a phosphate group`, correct: true, value: "glycerol_two_fa_phosphate" },
        { key: "D", text: t`glycerol and three fatty acids`, correct: false, misconceptionId: "C04-M7", value: "glycerol_three_fa" },
      ],
      solution: {
        steps: [
          t`Membrane lipid.`,
          t`Glycerol, two fatty acids, phosphate.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q4(C)" },
      stem: t`A good source of omega-3 fatty acids is`,
      verify: { kind: "value", inputs: {  }, params: { q: "omega" } },
      options: [
        { key: "A", text: t`yam`, correct: false, misconceptionId: "C04-M10", value: "yam_l" },
        { key: "B", text: t`sugarcane`, correct: false, misconceptionId: "C04-M11", value: "sugarcane_l" },
        { key: "C", text: t`wheat`, correct: false, misconceptionId: "C04-M12", value: "wheat_l" },
        { key: "D", text: t`flax seeds`, correct: true, value: "flax_seeds" },
      ],
      solution: {
        steps: [
          t`Omega-3.`,
          t`Flax seeds.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(F)" },
      stem: t`Which is a saturated fatty acid?`,
      verify: { kind: "value", inputs: {  }, params: { q: "example" } },
      options: [
        { key: "A", text: t`Linolenic acid`, correct: false, misconceptionId: "C04-M15", value: "linolenic_f" },
        { key: "B", text: t`Palmitic acid`, correct: true, value: "palmitic_f" },
        { key: "C", text: t`Oleic acid`, correct: false, misconceptionId: "C04-M13", value: "oleic_f" },
        { key: "D", text: t`Linoleic acid`, correct: false, misconceptionId: "C04-M14", value: "linoleic_f" },
      ],
      solution: {
        steps: [
          t`Saturated example.`,
          t`Palmitic acid.`,
        ],
      },
    },
  ],
};
