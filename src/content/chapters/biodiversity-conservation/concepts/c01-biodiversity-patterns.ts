import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A single hectare of Amazon forest can hold more tree species than all of Europe. Why are the tropics so rich?`,
    reveal: t`They have been warm and stable for millions of years, with plenty of sunlight, giving species time and energy to diversify.`,
  },
  explanation: {
    intuition: [
      t`**Biodiversity** exists at three levels.`,
      t`It is not spread evenly over the Earth.`,
      t`Losing species weakens ecosystems.`,
    ],
    formal: [
      {
        title: "Levels and patterns",
        points: [
          t`**Genetic** (within a species), **species**, and **ecological** (habitats) diversity.`,
          t`**Latitudinal gradient**: richest in the tropics, falling towards the poles.`,
          t`Forest canopies create many niches, favouring diversity.`,
        ],
      },
      {
        title: "Species and area",
        points: [
          t`$S = CA^Z$: species richness $S$ rises with area $A$, then levels off.`,
          t`On log axes it is a straight line: $\log S = \log C + Z \log A$.`,
          t`Ehrlich's **rivet popper hypothesis**: each species is a rivet holding the ecosystem 'aeroplane' together.`,
        ],
      },
    ],
    worked: {
      prompt: t`With $C = 5$ and $Z = 0.5$, how many species live on an island of area 400 km²?`,
      steps: [
        t`$S = 5 \times 400^{0.5}$.`,
        t`$5 \times 20 = 100$.`,
      ],
      answer: t`100`,
    },
    visualSpec: t`A species-area curve rising and flattening, beside its straight-line log-log form.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Picks $S = CA^2$.`,
      remediation: t`The power is $Z$, not 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Swaps $S$ and $C$ in the log form.`,
      remediation: t`It is $\log S = \log C + Z \log A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Mixes up $Z$ and $C$.`,
      remediation: t`$Z$ multiplies $\log A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks invasive species.",
      remediation: "They reduce diversity.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks glaciation.",
      remediation: "Ice wipes out species.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks co-extinction.",
      remediation: "That removes species.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says colder.",
      remediation: "The tropics are warmer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says younger.",
      remediation: "They are older and stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says less sunlight.",
      remediation: "They get more.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks loss of biodiversity.",
      remediation: "It shows why diversity matters.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks biomagnification.",
      remediation: "That is about toxins.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks species-area.",
      remediation: t`That is $S = CA^Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Multiplies A by Z.",
      remediation: t`$Z$ is a power.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Ignores Z.",
      remediation: t`$A$ is raised to $Z$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Adds C.",
      remediation: t`$C$ multiplies.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2024 Q. 1(x)" },
      stem: t`On a graph of species richness against area, curve A rises steeply and then flattens. Curve A represents`,
      verify: { kind: "value", inputs: {  }, params: { q: "graph" } },
      options: [
        { key: "A", text: t`$S = CA^Z$`, correct: true, value: "line_a_power" },
        { key: "B", text: t`$S = CA^2$`, correct: false, misconceptionId: "C01-M1", value: "line_a_square" },
        { key: "C", text: t`$\log C = \log A + Z \log S$`, correct: false, misconceptionId: "C01-M2", value: "line_b_swapped" },
        { key: "D", text: t`$\log S = \log Z + C \log A$`, correct: false, misconceptionId: "C01-M3", value: "line_b_mixed" },
      ],
      solution: {
        steps: [
          t`Rises, then flattens.`,
          t`$S = CA^Z$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q1(3)" },
      stem: t`Which of these favours species diversity?`,
      verify: { kind: "value", inputs: {  }, params: { q: "favour" } },
      options: [
        { key: "A", text: t`A forest canopy`, correct: true, value: "forest_canopy" },
        { key: "B", text: t`Invasive species`, correct: false, misconceptionId: "C01-M4", value: "invasive_species" },
        { key: "C", text: t`Glaciation`, correct: false, misconceptionId: "C01-M5", value: "glaciation_f" },
        { key: "D", text: t`Co-extinction`, correct: false, misconceptionId: "C01-M6", value: "coextinction_f" },
      ],
      solution: {
        steps: [
          t`Layers of niches.`,
          t`A forest canopy.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q3(2)" },
      stem: t`Tropical regions are richer in species than polar regions because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "tropics" } },
      options: [
        { key: "A", text: t`are younger`, correct: false, misconceptionId: "C01-M8", value: "younger_f" },
        { key: "B", text: t`get less sunlight`, correct: false, misconceptionId: "C01-M9", value: "less_sunlight" },
        { key: "C", text: t`have been stable for millions of years and get more sunlight`, correct: true, value: "stable_sunny" },
        { key: "D", text: t`are colder`, correct: false, misconceptionId: "C01-M7", value: "colder_f" },
      ],
      solution: {
        steps: [
          t`Old, stable and sunny.`,
          t`Stable and sunny.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2024 Q. 1(x)" },
      stem: t`The rivet popper hypothesis explains`,
      verify: { kind: "value", inputs: {  }, params: { q: "rivet" } },
      options: [
        { key: "A", text: t`the significance of diversity`, correct: true, value: "significance_diversity" },
        { key: "B", text: t`the loss of biodiversity`, correct: false, misconceptionId: "C01-M10", value: "loss_biodiversity" },
        { key: "C", text: t`biomagnification`, correct: false, misconceptionId: "C01-M11", value: "biomagnification_f" },
        { key: "D", text: t`the species-area relationship`, correct: false, misconceptionId: "C01-M12", value: "species_area_f" },
      ],
      solution: {
        steps: [
          t`Rivets in a plane.`,
          t`Significance of diversity.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2025 Q. 2(v)" },
      stem: t`For a group of islands, $S = CA^Z$ with $C = 10$ and $Z = 0.5$. How many species does an island of area $A = 100$ km² hold?`,
      verify: { kind: "value", inputs: { c: "10", a: "100" }, params: { q: "sca" } },
      options: [
        { key: "A", text: t`$100$`, correct: true, value: "100" },
        { key: "B", text: t`$500$`, correct: false, misconceptionId: "C01-M13", value: "500" },
        { key: "C", text: t`$1000$`, correct: false, misconceptionId: "C01-M14", value: "1000" },
        { key: "D", text: t`$20$`, correct: false, misconceptionId: "C01-M15", value: "20" },
      ],
      solution: {
        steps: [
          t`$10 \times 100^{0.5} = 10 \times 10$.`,
          t`100.`,
        ],
      },
    },
  ],
};
