import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Freons were hailed as perfect refrigerants: non-toxic, non-flammable and unreactive. Why were they then banned worldwide?`,
    reveal: t`Their very stability let them drift up to the stratosphere, where sunlight breaks them to free chlorine atoms. Each chlorine atom destroys thousands of ozone molecules.`,
  },
  explanation: {
    intuition: [
      t`**Polyhalogen compounds** carry more than one halogen atom, such as $\ce{CH2Cl2}$, $\ce{CHCl3}$ and $\ce{CCl4}$.`,
      t`Many are useful solvents, refrigerants or pesticides.`,
      t`Their stability is useful, but it also lets them persist in the environment.`,
      t`So each has a use and a risk to weigh.`,
    ],
    formal: [
      {
        title: "Chlorinated solvents",
        points: [
          t`**Dichloromethane**, $\ce{CH2Cl2}$: solvent and paint remover; it can harm the nervous system.`,
          t`**Chloroform**, $\ce{CHCl3}$: solvent, once an anaesthetic; it harms the liver.`,
          t`Light and air oxidise chloroform to poisonous **phosgene**, $\ce{COCl2}$, so it is kept in dark, full bottles.`,
          t`With a strong base, chloroform loses $\ce{HCl}$ to give **dichlorocarbene**, $\ce{:CCl2}$.`,
          t`**Carbon tetrachloride**, $\ce{CCl4}$: solvent and fire extinguisher; it harms the liver and depletes ozone.`,
        ],
      },
      {
        title: "Freons",
        points: [
          t`**Freons** are chlorofluorocarbons (CFCs), such as $\ce{CCl2F2}$ (freon-12).`,
          t`They were used as refrigerants and aerosol propellants.`,
          t`Unreactive near the ground, they rise to the stratosphere.`,
          t`There ultraviolet light releases $\ce{Cl}$ atoms, which destroy the ozone layer.`,
        ],
      },
      {
        title: "DDT",
        points: [
          t`**DDT** is a chlorinated insecticide, used against mosquitoes that spread malaria.`,
          t`It does not break down easily and dissolves in fat.`,
          t`So it builds up along food chains, harming birds and fish.`,
          t`Its use is now banned or restricted in many countries.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the polyhalogen compound that matches each clue: (a) a fire extinguisher, (b) an insecticide that builds up in food chains, (c) a refrigerant that depletes ozone.`,
      steps: [
        t`(a) Carbon tetrachloride, $\ce{CCl4}$, is used in fire extinguishers.`,
        t`(b) DDT is the persistent insecticide.`,
        t`(c) Freons, such as $\ce{CCl2F2}$, are the ozone-depleting refrigerants.`,
      ],
      answer: t`$\ce{CCl4}$; DDT; freons`,
    },
    visualSpec: t`Follow a freon molecule from a refrigerator up into the stratosphere and watch its chlorine atoms break ozone apart.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Thinks a stable, unreactive compound must be harmless.",
      remediation: "Stability lets these compounds build up or reach the stratosphere, which is where they do harm.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Gives other compounds DDT's use as an insecticide.",
      remediation: "DDT is the insecticide; freons are refrigerants and dichloromethane is a solvent.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Thinks DDT breaks down quickly in the environment.",
      remediation: "DDT persists for years and dissolves in fat, so it builds up along food chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Thinks freons do their harm in the air near the ground.",
      remediation: t`Freons are harmless near the ground; in the stratosphere ultraviolet light frees $\ce{Cl}$ atoms that destroy ozone.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Thinks chloroform is stable in light and air.",
      remediation: "Light and air oxidise chloroform to poisonous phosgene, so it is kept in dark, full, closed bottles.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Takes carbon tetrachloride as the source of dichlorocarbene.",
      remediation: t`A base removes $\ce{H+}$ and then $\ce{Cl-}$ from $\ce{CHCl3}$; $\ce{CCl4}$ has no hydrogen to lose.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Goes by the name: thinks dichloromethane gives dichlorocarbene, or that chloroform turns into it.",
      remediation: t`Dichlorocarbene comes from chloroform, $\ce{CHCl3}$, which loses $\ce{HCl}$ with a strong base.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Gives other compounds the freons' use as refrigerants.",
      remediation: "Freons are the refrigerants; DDT is an insecticide and dichloromethane a solvent.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (x)" },
      stem: t`Which compound, treated with a strong base, is used as a source of dichlorocarbene, $\ce{:CCl2}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "carbene" } },
      options: [
        { key: "A", text: t`Chloroform, $\ce{CHCl3}$`, correct: true, value: "chloroform" },
        { key: "B", text: t`Carbon tetrachloride, $\ce{CCl4}$`, correct: false, misconceptionId: "C11-M6", value: "carbon_tetrachloride" },
        { key: "C", text: t`Dichloromethane, $\ce{CH2Cl2}$`, correct: false, misconceptionId: "C11-M7", value: "dichloromethane" },
        { key: "D", text: t`Freon-12, $\ce{CCl2F2}$`, correct: false, misconceptionId: "C11-M8", value: "freon_12" },
      ],
      solution: {
        steps: [
          t`A strong base removes $\ce{H+}$ from $\ce{CHCl3}$, giving $\ce{CCl3-}$.`,
          t`$\ce{CCl3-}$ loses $\ce{Cl-}$, leaving dichlorocarbene, $\ce{:CCl2}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#9" },
      stem: t`What are freons such as $\ce{CCl2F2}$ used for, and what harm do they do?`,
      verify: { kind: "value", inputs: {  }, params: { q: "freon" } },
      options: [
        { key: "A", text: t`Insecticides; they build up in food chains and poison birds`, correct: false, misconceptionId: "C11-M2", value: "insecticide_food_chain" },
        { key: "B", text: t`Refrigerants and propellants; they poison the air we breathe near the ground`, correct: false, misconceptionId: "C11-M4", value: "refrigerant_ground_level" },
        { key: "C", text: t`Refrigerants and propellants; high up, they release Cl atoms that destroy the ozone layer`, correct: true, value: "refrigerant_stratosphere_ozone" },
        { key: "D", text: t`Refrigerants and propellants; being unreactive, they do no harm`, correct: false, misconceptionId: "C11-M1", value: "refrigerant_harmless" },
      ],
      solution: {
        steps: [
          t`Freons are refrigerants and aerosol propellants.`,
          t`In the stratosphere ultraviolet light frees $\ce{Cl}$ atoms, which destroy ozone.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`What is DDT used for, and why is its use now restricted?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ddt" } },
      options: [
        { key: "A", text: t`An insecticide; it breaks down quickly in soil, so it stops working`, correct: false, misconceptionId: "C11-M3", value: "insecticide_breaks_down" },
        { key: "B", text: t`An insecticide; it is restricted only because insects became resistant, being harmless to others`, correct: false, misconceptionId: "C11-M1", value: "insecticide_harmless" },
        { key: "C", text: t`A refrigerant; it destroys the ozone layer`, correct: false, misconceptionId: "C11-M8", value: "refrigerant_ozone" },
        { key: "D", text: t`An insecticide; it does not break down and builds up along food chains`, correct: true, value: "insecticide_persistent" },
      ],
      solution: {
        steps: [
          t`DDT is an insecticide.`,
          t`It does not break down and builds up in fatty tissue along food chains.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`Why is chloroform stored in dark, completely filled, closed bottles?`,
      verify: { kind: "value", inputs: {  }, params: { q: "store" } },
      options: [
        { key: "A", text: t`No special reason: chloroform and its products are harmless`, correct: false, misconceptionId: "C11-M1", value: "no_care_harmless" },
        { key: "B", text: t`Light turns it into dichloromethane, a different solvent`, correct: false, misconceptionId: "C11-M7", value: "dark_bottles_dichloromethane" },
        { key: "C", text: t`Light and air slowly oxidise it to poisonous phosgene, $\ce{COCl2}$`, correct: true, value: "dark_bottles_phosgene" },
        { key: "D", text: t`Only to stop it evaporating: it is stable in light and air`, correct: false, misconceptionId: "C11-M5", value: "clear_bottles_stable" },
      ],
      solution: {
        steps: [
          t`Light and air oxidise chloroform: $\ce{2CHCl3 + O2}$ $\ce{-> 2COCl2 + 2HCl}$.`,
          t`Phosgene is poisonous, so light and air are kept out.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`What is dichloromethane, $\ce{CH2Cl2}$, mainly used for, and what is its risk?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dcm" } },
      options: [
        { key: "A", text: t`A solvent and paint remover; it is harmless to people`, correct: false, misconceptionId: "C11-M1", value: "solvent_harmless" },
        { key: "B", text: t`An insecticide; it builds up in food chains`, correct: false, misconceptionId: "C11-M2", value: "insecticide" },
        { key: "C", text: t`A refrigerant; it destroys the ozone layer`, correct: false, misconceptionId: "C11-M8", value: "refrigerant" },
        { key: "D", text: t`A solvent and paint remover; it can harm the central nervous system`, correct: true, value: "solvent_nervous_system" },
      ],
      solution: {
        steps: [
          t`Dichloromethane is a solvent and paint remover.`,
          t`Breathing it can harm the central nervous system.`,
        ],
      },
    },
  ],
};
