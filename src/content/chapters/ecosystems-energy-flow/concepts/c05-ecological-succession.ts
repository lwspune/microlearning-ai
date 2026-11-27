import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A new volcanic island is bare rock. Centuries later it is a forest. What came first?`,
    reveal: t`Lichens: they grip bare rock, release acids and start making the first soil, so other plants can follow.`,
  },
  explanation: {
    intuition: [
      t`**Succession** is the gradual change of communities in an area.`,
      t`Its stages are **seral** communities.`,
      t`It ends in a stable **climax community**.`,
    ],
    formal: [
      {
        title: "Primary and secondary",
        points: [
          t`**Primary**: starts where no life existed: bare rock, cooled lava, a **landslide**, a new **volcanic island**.`,
          t`**Secondary**: starts where life was removed but soil remains: abandoned farms, burnt or cut forests.`,
          t`Secondary is faster.`,
        ],
      },
      {
        title: "Pioneers",
        points: [
          t`On rock: **lichens** → mosses → herbs → shrubs → trees.`,
          t`In water: **phytoplankton** → submerged plants such as *Hydrilla* → reed swamp → forest.`,
          t`The **climax** community does not evolve further.`,
        ],
      },
    ],
    worked: {
      prompt: t`A field is abandoned and weeds then shrubs grow back. Which succession is this?`,
      steps: [
        t`Soil was already present.`,
        t`Life is returning, not starting.`,
      ],
      answer: t`Secondary`,
    },
    visualSpec: t`A timeline from bare rock with lichens to mosses, grasses, shrubs and a climax forest.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks end community.",
      remediation: "The term is climax.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks final community.",
      remediation: "The term is climax.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks dark community.",
      remediation: "The term is climax.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks secondary.",
      remediation: "The soil is stripped too.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks tertiary.",
      remediation: "There is no tertiary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks climax.",
      remediation: "Climax is the end.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks abandoned farm.",
      remediation: "Soil remains: secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks burnt savanna.",
      remediation: "Soil remains: secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks cut forest.",
      remediation: "Soil remains: secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks *Hydrilla*.",
      remediation: "*Hydrilla* comes later.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks lichens.",
      remediation: "Lichens are on rock.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks fishes.",
      remediation: "Fishes are consumers.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks mosses.",
      remediation: "Mosses come after lichens.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks grasses.",
      remediation: "Grasses come later.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks trees.",
      remediation: "Trees come last.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2024 Q. 1(viii)" },
      stem: t`The final, stable community of a succession, which does not evolve further, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "climax" } },
      options: [
        { key: "A", text: t`dark community`, correct: false, misconceptionId: "C05-M3", value: "dark_c" },
        { key: "B", text: t`climax community`, correct: true, value: "climax_c" },
        { key: "C", text: t`end community`, correct: false, misconceptionId: "C05-M1", value: "end_c" },
        { key: "D", text: t`final community`, correct: false, misconceptionId: "C05-M2", value: "final_c" },
      ],
      solution: {
        steps: [
          t`Stable, final.`,
          t`Climax community.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q1(7)" },
      stem: t`After a landslide, the succession that occurs is`,
      verify: { kind: "value", inputs: {  }, params: { q: "landslide" } },
      options: [
        { key: "A", text: t`secondary`, correct: false, misconceptionId: "C05-M4", value: "secondary_s" },
        { key: "B", text: t`tertiary`, correct: false, misconceptionId: "C05-M5", value: "tertiary_s" },
        { key: "C", text: t`climax`, correct: false, misconceptionId: "C05-M6", value: "climax_s" },
        { key: "D", text: t`primary`, correct: true, value: "primary_s" },
      ],
      solution: {
        steps: [
          t`Soil stripped away.`,
          t`Primary.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2026 Q. 1(x)" },
      stem: t`Which is an example of primary succession?`,
      verify: { kind: "value", inputs: {  }, params: { q: "example" } },
      options: [
        { key: "A", text: t`Lichens colonising a newly formed volcanic island`, correct: true, value: "volcanic_island" },
        { key: "B", text: t`Wild plants on an abandoned farm`, correct: false, misconceptionId: "C05-M7", value: "abandoned_field" },
        { key: "C", text: t`New grass on a savanna after a fire`, correct: false, misconceptionId: "C05-M8", value: "burnt_savanna" },
        { key: "D", text: t`Regrowth after a forest is cut`, correct: false, misconceptionId: "C05-M9", value: "cut_forest" },
      ],
      solution: {
        steps: [
          t`No life before.`,
          t`A new volcanic island.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2024 Q. 2(viii)" },
      stem: t`In primary succession in water, the pioneer species are`,
      verify: { kind: "value", inputs: {  }, params: { q: "aquatic" } },
      options: [
        { key: "A", text: t`lichens`, correct: false, misconceptionId: "C05-M11", value: "lichens_p" },
        { key: "B", text: t`fishes`, correct: false, misconceptionId: "C05-M12", value: "fishes_p" },
        { key: "C", text: t`small phytoplankton`, correct: true, value: "phytoplankton_p" },
        { key: "D", text: t`rooted plants such as *Hydrilla*`, correct: false, misconceptionId: "C05-M10", value: "hydrilla_p" },
      ],
      solution: {
        steps: [
          t`In water.`,
          t`Phytoplankton.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2026 Q. 8" },
      stem: t`On bare rock, the pioneers that start turning rock into soil are`,
      verify: { kind: "value", inputs: {  }, params: { q: "rock" } },
      options: [
        { key: "A", text: t`lichens`, correct: true, value: "lichens_p" },
        { key: "B", text: t`mosses`, correct: false, misconceptionId: "C05-M13", value: "mosses_p" },
        { key: "C", text: t`grasses`, correct: false, misconceptionId: "C05-M14", value: "grasses_p" },
        { key: "D", text: t`trees`, correct: false, misconceptionId: "C05-M15", value: "trees_p" },
      ],
      solution: {
        steps: [
          t`On rock.`,
          t`Lichens.`,
        ],
      },
    },
  ],
};
