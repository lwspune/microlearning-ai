import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A drop of concentrated sulfuric acid falls on a cotton shirt. With no flame anywhere, a black, charred hole appears. Where did the black come from?`,
    reveal: t`Cotton is cellulose, made of carbon, hydrogen and oxygen. Concentrated sulfuric acid pulls the hydrogen and oxygen out as water, leaving black carbon behind.`,
  },
  explanation: {
    intuition: [
      t`**Sulfur dioxide**, $\ce{SO2}$, is the choking gas given off when sulfur burns.`,
      t`Sulfur is $+4$ in $\ce{SO2}$ and $+6$, its highest state, in **sulfuric acid**, $\ce{H2SO4}$.`,
      t`Industry turns $\ce{SO2}$ into sulfuric acid by the **contact process**.`,
      t`Dilute sulfuric acid behaves simply as a strong acid, giving $\ce{H+}$ ions.`,
      t`Hot concentrated acid is also an **oxidising agent**: it takes electrons and is reduced to $\ce{SO2}$.`,
      t`It is a **dehydrating agent** too: it pulls the elements of water out of compounds.`,
    ],
    formal: [
      {
        title: "Preparing sulfur dioxide",
        points: [
          t`In the laboratory, $\ce{SO2}$ is made by adding dilute $\ce{H2SO4}$ to sodium sulfite.`,
          t`$\ce{Na2SO3 + H2SO4}$ $\ce{-> Na2SO4 + H2O + SO2}$`,
          t`The less volatile $\ce{H2SO4}$ drives out sulfurous acid, which at once breaks into water and $\ce{SO2}$.`,
          t`Burning sulfur in air also gives it: $\ce{S + O2 -> SO2}$.`,
          t`So does roasting iron pyrites: $\ce{4FeS2 + 11O2}$ $\ce{-> 2Fe2O3 + 8SO2}$.`,
        ],
      },
      {
        title: "Properties of sulfur dioxide",
        points: [
          t`$\ce{SO2}$ is a colourless, poisonous gas with a pungent smell.`,
          t`It is highly soluble in water; the solution is **sulfurous acid**, $\ce{H2SO3}$.`,
          t`It liquefies at room temperature under $2$ atm, and boils at $263$ K.`,
          t`The molecule is bent: the lone pair on sulfur squeezes the $\ce{O-S-O}$ angle to $119.5^\circ$.`,
          t`With sulfur at $+4$, $\ce{SO2}$ can still be oxidised to the $+6$ state.`,
        ],
      },
      {
        title: "The contact process",
        points: [
          t`Step 1: burn sulfur, or roast pyrites, to get $\ce{SO2}$.`,
          t`Step 2: $\ce{2SO2 + O2 <=> 2SO3}$ over a **catalyst**, $\ce{V2O5}$, a substance that speeds a reaction without being used up.`,
          t`This step is exothermic and lowers the number of gas molecules.`,
          t`So a fairly low temperature ($720$ K) and a high pressure ($2$ bar) give the most $\ce{SO3}$.`,
          t`Step 3: absorb $\ce{SO3}$ in concentrated $\ce{H2SO4}$, giving **oleum**: $\ce{SO3 + H2SO4 -> H2S2O7}$.`,
          t`Dilute the oleum to the strength needed: $\ce{H2S2O7 + H2O -> 2H2SO4}$.`,
        ],
      },
      {
        title: "A dehydrating agent",
        points: [
          t`A **dehydrating agent** removes hydrogen and oxygen from a compound, in the $2:1$ ratio of water.`,
          t`This is more than drying, which only takes up water already present as water.`,
          t`Concentrated $\ce{H2SO4}$ chars sugar: $\ce{C12H22O11 -> 12C + 11H2O}$.`,
          t`The black carbon left is **sugar charcoal**, and the process is called **charring**.`,
        ],
      },
      {
        title: "An oxidising agent",
        points: [
          t`Hot concentrated $\ce{H2SO4}$ oxidises metals and non-metals; its sulfur goes from $+6$ to $+4$, in $\ce{SO2}$.`,
          t`With carbon: $\ce{C + 2H2SO4}$ $\ce{-> CO2 + 2SO2 + 2H2O}$.`,
          t`Copper, which dilute acid cannot attack, dissolves as copper sulfate, giving off $\ce{SO2}$.`,
          t`The oxidant here is sulfur $(+6)$, not $\ce{H+}$, so no hydrogen gas forms.`,
          t`Reducing power of the halogen acids rises down the group: $\ce{HCl} < \ce{HBr} < \ce{HI}$.`,
          t`So the acid oxidises HBr to $\ce{Br2}$ and HI to $\ce{I2}$, but leaves HCl alone.`,
        ],
      },
    ],
    worked: {
      prompt: t`Powdered sulfur is heated with concentrated $\ce{H2SO4}$. What gas forms, and what is the balanced equation?`,
      steps: [
        t`Sulfur in $\ce{H2SO4}$ is $+6$, so hot concentrated acid acts as an oxidising agent and is reduced to $\ce{SO2}$ ($+4$).`,
        t`Elemental sulfur ($0$) is oxidised; its usual oxide is also $\ce{SO2}$ ($+4$).`,
        t`Electrons: each sulfur atom loses $4$, each $\ce{H2SO4}$ gains $2$, so two acid molecules per sulfur atom.`,
        t`$\ce{S + 2H2SO4 -> 3SO2 + 2H2O}$`,
      ],
      answer: t`$\ce{SO2}$: $\ce{S + 2H2SO4 -> 3SO2 + 2H2O}$`,
    },
    visualSpec: t`Drop a reagent into dilute and into hot concentrated sulfuric acid and watch which gives hydrogen, which gives sulfur dioxide and which chars.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Treats concentrated H2SO4 as only an acid, like the dilute acid, so expects it neither to oxidise nor to dehydrate.",
      remediation: t`Concentrated $\ce{H2SO4}$ is more than an acid: its sulfur $(+6)$ oxidises, and it strips out water's elements. Only the dilute acid acts just as $\ce{H+}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks an oxidising agent always adds oxygen, so the substance oxidised must end up as an oxide or an oxoacid.",
      remediation: t`Oxidation is loss of electrons. HI is oxidised to $\ce{I2}$ and copper to $\ce{Cu^2+}$ in $\ce{CuSO4}$; sugar is dehydrated to carbon, not burnt.`,
      fallback: { kind: "ext", topic: "redox reactions (Std XI Chemistry)" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks the reducing power of the halogen acids falls down the group, so HCl is the easiest to oxidise.",
      remediation: t`Reducing power rises down the group: $\ce{HCl} < \ce{HBr} < \ce{HI}$. Concentrated $\ce{H2SO4}$ oxidises HBr and HI, but not HCl.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks concentrated H2SO4 oxidises every halogen acid, HCl included.",
      remediation: t`HCl is too weak a reducing agent for concentrated $\ce{H2SO4}$; that is why NaCl and the acid give HCl gas.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks the acid's H+ is the oxidant, so hydrogen gas is given off, as with dilute acid and zinc.",
      remediation: t`In hot concentrated $\ce{H2SO4}$ the oxidant is sulfur $(+6)$, which is reduced to $\ce{SO2}$; no hydrogen forms.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks a dehydrating agent only removes free water, as when it dries a gas.",
      remediation: t`Concentrated $\ce{H2SO4}$ pulls hydrogen and oxygen out of a compound as water, even when no water is present as such.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M3 and C06-M4 are about the halogen acids only; they are caught by the items that ask which acids are oxidised or can be prepared.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.1 (iv)" },
      stem: t`Hydriodic acid, HI, is heated with concentrated $\ce{H2SO4}$. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "products", reagent: "HI" } },
      options: [
        { key: "A", text: t`$\ce{HIO3}$ and $\ce{SO2}$`, correct: false, misconceptionId: "C06-M2", value: "hio3_so2" },
        { key: "B", text: t`$\ce{I2}$ and $\ce{H2}$`, correct: false, misconceptionId: "C06-M5", value: "iodine_h2" },
        { key: "C", text: t`$\ce{I2}$, $\ce{SO2}$ and $\ce{H2O}$`, correct: true, value: "iodine_so2_water" },
        { key: "D", text: t`No reaction: both are acids`, correct: false, misconceptionId: "C06-M1", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`Hot concentrated $\ce{H2SO4}$ is an oxidising agent: its sulfur $(+6)$ is reduced to $\ce{SO2}$ $(+4)$.`,
          t`HI is a strong reducing agent, so iodide is oxidised to iodine.`,
          t`$\ce{2HI + H2SO4}$ $\ce{-> I2 + SO2 + 2H2O}$`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.10" },
      stem: t`Concentrated $\ce{H2SO4}$ is heated separately with HCl, HBr and HI. Which of them are oxidised to the halogen?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "oxidised" } },
      options: [
        { key: "A", text: t`None of them`, correct: false, misconceptionId: "C06-M1", value: "none_of_them" },
        { key: "B", text: t`HBr and HI only`, correct: true, value: "hbr_hi" },
        { key: "C", text: t`HCl and HBr only`, correct: false, misconceptionId: "C06-M3", value: "hcl_hbr" },
        { key: "D", text: t`All three`, correct: false, misconceptionId: "C06-M4", value: "hcl_hbr_hi" },
      ],
      solution: {
        steps: [
          t`Reducing power rises down the group: $\ce{HCl} < \ce{HBr} < \ce{HI}$.`,
          t`Concentrated $\ce{H2SO4}$ oxidises HBr to $\ce{Br2}$ and HI to $\ce{I2}$, and is reduced to $\ce{SO2}$.`,
          t`HCl is too weak a reducing agent to be oxidised, so the answer is HBr and HI only.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (ix)" },
      stem: t`Which hydrogen halides can be prepared by heating the sodium halide with concentrated $\ce{H2SO4}$: HCl, HBr, HI?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "prepare" } },
      options: [
        { key: "A", text: t`All three`, correct: false, misconceptionId: "C06-M1", value: "hcl_hbr_hi" },
        { key: "B", text: t`HI only`, correct: false, misconceptionId: "C06-M3", value: "hi" },
        { key: "C", text: t`None of them`, correct: false, misconceptionId: "C06-M4", value: "none_of_them" },
        { key: "D", text: t`HCl only`, correct: true, value: "hcl" },
      ],
      solution: {
        steps: [
          t`The acid first gives the hydrogen halide, e.g. $\ce{NaCl + H2SO4}$ $\ce{-> NaHSO4 + HCl}$.`,
          t`HBr and HI are strong enough reducers to be oxidised at once by the hot acid, to $\ce{Br2}$ and $\ce{I2}$.`,
          t`HCl is not oxidised, so only HCl can be prepared this way.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.2 (x)" },
      stem: t`Concentrated $\ce{H2SO4}$ is added to sugar (sucrose, $\ce{C12H22O11}$). What is left behind?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "products", reagent: "sugar" } },
      options: [
        { key: "A", text: t`A black mass of carbon, the water removed`, correct: true, value: "carbon_water" },
        { key: "B", text: t`A solution of glucose and fructose`, correct: false, misconceptionId: "C06-M1", value: "glucose_fructose" },
        { key: "C", text: t`Nothing: it burns to $\ce{CO2}$ and $\ce{H2O}$`, correct: false, misconceptionId: "C06-M2", value: "co2_water" },
        { key: "D", text: t`Unchanged sugar: it holds no water to remove`, correct: false, misconceptionId: "C06-M6", value: "no_change" },
      ],
      solution: {
        steps: [
          t`Concentrated $\ce{H2SO4}$ is a dehydrating agent: it removes hydrogen and oxygen from a compound as water.`,
          t`$\ce{C12H22O11 -> 12C + 11H2O}$`,
          t`A black mass of carbon, sugar charcoal, is left.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (v)" },
      stem: t`Copper turnings are heated with concentrated $\ce{H2SO4}$. What are the products?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "products", reagent: "Cu" } },
      options: [
        { key: "A", text: t`No reaction: copper is below hydrogen`, correct: false, misconceptionId: "C06-M1", value: "no_reaction" },
        { key: "B", text: t`$\ce{CuSO4}$, $\ce{SO2}$ and $\ce{H2O}$`, correct: true, value: "cuso4_so2_water" },
        { key: "C", text: t`$\ce{CuO}$ and $\ce{SO2}$ only`, correct: false, misconceptionId: "C06-M2", value: "cuo_so2" },
        { key: "D", text: t`$\ce{CuSO4}$ and $\ce{H2}$`, correct: false, misconceptionId: "C06-M5", value: "cuso4_h2" },
      ],
      solution: {
        steps: [
          t`Copper is below hydrogen, so $\ce{H+}$ cannot oxidise it; the sulfur $(+6)$ of the hot concentrated acid can.`,
          t`Copper becomes $\ce{Cu^2+}$, and the acid is reduced to $\ce{SO2}$.`,
          t`$\ce{Cu + 2H2SO4}$ $\ce{-> CuSO4 + SO2 + 2H2O}$`,
        ],
      },
    },
  ],
};
