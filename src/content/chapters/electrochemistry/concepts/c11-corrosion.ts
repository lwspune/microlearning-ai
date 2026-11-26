import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`An iron nail kept in dry air stays bright, and one kept in boiled water under oil stays bright too. A nail half in tap water rusts in days. What does rusting need?`,
    reveal: t`Both water and oxygen: together they let the iron surface work as a tiny electrochemical cell.`,
  },
  explanation: {
    intuition: [
      t`**Corrosion** is a metal slowly eaten away by its surroundings; rusting is iron's.`,
      t`A rusting iron surface works as a tiny galvanic cell.`,
      t`Some spots act as anodes, where iron is oxidised.`,
      t`Others act as cathodes, where oxygen is reduced.`,
      t`Water joins them; salt in it speeds the cell up.`,
    ],
    formal: [
      {
        title: "How iron rusts",
        points: [
          t`Anode: $\ce{2Fe -> 2Fe^2+ + 4e-}$.`,
          t`Cathode: $\ce{O2 + 4H+ + 4e- -> 2H2O}$.`,
          t`$\ce{H+}$ comes from $\ce{CO2}$ dissolved in water.`,
          t`$\ce{Fe^2+}$ is oxidised further by air to rust, $\ce{Fe2O3.xH2O}$.`,
        ],
      },
      {
        title: "Preventing corrosion",
        points: [
          t`A barrier keeps out water and air: paint, oil, grease.`,
          t`**Galvanising**: a coat of zinc, which corrodes in place of iron.`,
          t`**Sacrificial protection**: a more reactive metal (Mg, Zn) is joined to the iron.`,
          t`Its lower $E^0$ makes it the anode, so it is oxidised instead of the iron.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is a zinc block bolted to an iron water pipe buried in soil?`,
      steps: [
        t`Zinc's $E^0$ ($-0.76\ \mathrm{V}$) is below iron's ($-0.44\ \mathrm{V}$).`,
        t`So zinc becomes the anode and is oxidised.`,
        t`The iron is protected until the zinc is used up.`,
      ],
      answer: t`As a sacrificial anode: zinc corrodes instead of the iron`,
    },
    visualSpec: t`A water drop on iron with the anode at its centre and the cathode at its oxygen-rich edge, and electrons flowing between.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Swaps the electrodes.",
      remediation: "Oxygen is reduced at the cathode; the anode is where iron is oxidised.",
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M2",
      mistake: "Expects hydrogen gas.",
      remediation: "In rusting, oxygen takes the electrons; no hydrogen is given off.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Has iron reduced.",
      remediation: "Iron loses electrons: it is oxidised at the anode.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Thinks oxygen alone is enough.",
      remediation: "Iron in dry air does not rust: water is needed too.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Thinks water alone is enough.",
      remediation: "Iron in boiled water without air does not rust: oxygen is needed too.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Blames carbon dioxide alone.",
      remediation: t`$\ce{CO2}$ only speeds it up; water and oxygen are needed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Picks tin.",
      remediation: "Tin plating is for food cans; galvanising is zinc.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Picks copper.",
      remediation: "Copper is less reactive than iron and would speed rusting at a scratch.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Picks chromium.",
      remediation: "Chromium plating is decorative; galvanising is zinc.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Thinks magnesium is less reactive.",
      remediation: t`Magnesium is more reactive (lower $E^0$), so it is oxidised first.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M11",
      mistake: "Treats magnesium as a coating.",
      remediation: "The block covers only a small spot; it works by being oxidised instead.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Thinks magnesium undoes rust.",
      remediation: "It prevents rusting; it does not turn rust back to iron.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Gives FeO.",
      remediation: t`Air oxidises iron to iron(III): rust is $\ce{Fe2O3.xH2O}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: t`Gives $\ce{Fe3O4}$.`,
      remediation: t`$\ce{Fe3O4}$ is magnetite; rust is hydrated $\ce{Fe2O3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: t`Gives $\ce{FeCO3}$.`,
      remediation: t`$\ce{FeCO3}$ is siderite ore; rust is hydrated $\ce{Fe2O3}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`When iron rusts, what happens at the anodic spots on its surface?`,
      verify: { kind: "value", inputs: {  }, params: { q: "anode" } },
      options: [
        { key: "A", text: t`Iron is oxidised: $\ce{Fe -> Fe^2+ + 2e-}$`, correct: true, value: "fe_oxidised" },
        { key: "B", text: t`Oxygen is reduced to water`, correct: false, misconceptionId: "C11-M1", value: "o2_reduced" },
        { key: "C", text: t`Hydrogen gas is given off`, correct: false, misconceptionId: "C11-M2", value: "h2_evolved" },
        { key: "D", text: t`$\ce{Fe^2+}$ is reduced to iron`, correct: false, misconceptionId: "C11-M3", value: "fe_reduced" },
      ],
      solution: {
        steps: [
          t`At the anode iron loses electrons.`,
          t`$\ce{Fe -> Fe^2+ + 2e-}$: iron is oxidised.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`For iron to rust, it needs`,
      verify: { kind: "value", inputs: {  }, params: { q: "needs" } },
      options: [
        { key: "A", text: t`water alone`, correct: false, misconceptionId: "C11-M5", value: "water_only" },
        { key: "B", text: t`carbon dioxide alone`, correct: false, misconceptionId: "C11-M6", value: "co2_only" },
        { key: "C", text: t`both water and oxygen`, correct: true, value: "water_and_oxygen" },
        { key: "D", text: t`oxygen alone`, correct: false, misconceptionId: "C11-M4", value: "oxygen_only" },
      ],
      solution: {
        steps: [
          t`Oxygen takes the electrons; water carries the ions.`,
          t`Both are needed.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`Galvanised iron is iron coated with`,
      verify: { kind: "value", inputs: {  }, params: { q: "galvanise" } },
      options: [
        { key: "A", text: t`tin`, correct: false, misconceptionId: "C11-M7", value: "tin" },
        { key: "B", text: t`copper`, correct: false, misconceptionId: "C11-M8", value: "copper" },
        { key: "C", text: t`chromium`, correct: false, misconceptionId: "C11-M9", value: "chromium" },
        { key: "D", text: t`zinc`, correct: true, value: "zinc" },
      ],
      solution: {
        steps: [
          t`Galvanising coats iron with a more reactive metal.`,
          t`That metal is zinc.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`A block of magnesium joined to a ship's steel hull stops the hull rusting because`,
      verify: { kind: "value", inputs: {  }, params: { q: "sacrificial" } },
      options: [
        { key: "A", text: t`magnesium covers the hull like paint`, correct: false, misconceptionId: "C11-M11", value: "mg_barrier" },
        { key: "B", text: t`magnesium turns the rust back into iron`, correct: false, misconceptionId: "C11-M12", value: "mg_reduces_rust" },
        { key: "C", text: t`magnesium is more reactive and is oxidised instead of the iron`, correct: true, value: "mg_oxidised_first" },
        { key: "D", text: t`magnesium is less reactive than iron`, correct: false, misconceptionId: "C11-M10", value: "mg_less_reactive" },
      ],
      solution: {
        steps: [
          t`Magnesium has a lower $E^0$ than iron.`,
          t`It becomes the anode and is oxidised instead.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`Rust is mainly`,
      verify: { kind: "value", inputs: {  }, params: { q: "rust" } },
      options: [
        { key: "A", text: t`iron(II) oxide, $\ce{FeO}$`, correct: false, misconceptionId: "C11-M13", value: "iron_ii_oxide" },
        { key: "B", text: t`magnetic oxide, $\ce{Fe3O4}$`, correct: false, misconceptionId: "C11-M14", value: "magnetite" },
        { key: "C", text: t`iron(II) carbonate, $\ce{FeCO3}$`, correct: false, misconceptionId: "C11-M15", value: "siderite" },
        { key: "D", text: t`hydrated iron(III) oxide, $\ce{Fe2O3.xH2O}$`, correct: true, value: "hydrated_fe2o3" },
      ],
      solution: {
        steps: [
          t`Air oxidises $\ce{Fe^2+}$ to iron(III).`,
          t`Rust is $\ce{Fe2O3.xH2O}$.`,
        ],
      },
    },
  ],
};
