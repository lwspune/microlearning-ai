import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A hectare of grass can feed many deer but only a few tigers. Why so few?`,
    reveal: t`Each step up the food chain passes on only about a tenth of the energy; the rest is used or lost as heat.`,
  },
  explanation: {
    intuition: [
      t`Energy enters as sunlight and flows through **trophic levels**.`,
      t`Producers → herbivores (primary consumers) → carnivores (secondary consumers).`,
      t`Energy flow is **one-way**; it is not recycled.`,
    ],
    formal: [
      {
        title: "Trophic levels",
        points: [
          t`In a lake: phytoplankton (1st) → **zooplankton** (2nd) → fish.`,
          t`Secondary consumers are **carnivores**.`,
          t`Food chains interlink into a **food web**.`,
        ],
      },
      {
        title: "The 10% law",
        points: [
          t`About **10%** of energy passes to the next level.`,
          t`Producers 5000 J → herbivores 500 J → carnivores 50 J.`,
          t`So food chains rarely have more than 4–5 levels.`,
        ],
      },
    ],
    worked: {
      prompt: t`Producers fix 10,000 J. How much reaches the herbivores?`,
      steps: [
        t`10% passes to the next level.`,
        t`$10\% \times 10{,}000 = 1000$.`,
      ],
      answer: t`1000 J`,
    },
    visualSpec: t`An energy staircase from producers to top carnivores, each step a tenth of the last.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks phytoplankton.",
      remediation: "That is the 1st level.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks benthos.",
      remediation: "Benthos live on the bottom.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks fishes.",
      remediation: "Fishes are higher.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks herbivores.",
      remediation: "Those are primary.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks producers.",
      remediation: "Producers are first.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks autotrophs.",
      remediation: "Autotrophs are producers.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Stops at herbivores.",
      remediation: "Take 10% twice.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Takes 10% three times.",
      remediation: "Secondary is two steps up.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Subtracts 10% twice.",
      remediation: "Only 10% passes on.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks one chain.",
      remediation: "A web links many.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks one level.",
      remediation: "A web spans levels.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks decomposers.",
      remediation: "A web includes all.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says cyclic.",
      remediation: "Nutrients cycle; energy does not.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says two-way.",
      remediation: "Energy flows one way.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says it rises.",
      remediation: "Energy falls upward.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q1(2)" },
      stem: t`The second trophic level in a lake is`,
      verify: { kind: "value", inputs: {  }, params: { q: "lake" } },
      options: [
        { key: "A", text: t`benthos`, correct: false, misconceptionId: "C03-M2", value: "benthos_o" },
        { key: "B", text: t`fishes`, correct: false, misconceptionId: "C03-M3", value: "fishes_o" },
        { key: "C", text: t`zooplankton`, correct: true, value: "zooplankton_o" },
        { key: "D", text: t`phytoplankton`, correct: false, misconceptionId: "C03-M1", value: "phytoplankton_o" },
      ],
      solution: {
        steps: [
          t`Grazers of phytoplankton.`,
          t`Zooplankton.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q1(3)" },
      stem: t`Secondary consumers are`,
      verify: { kind: "value", inputs: {  }, params: { q: "secondary" } },
      options: [
        { key: "A", text: t`producers`, correct: false, misconceptionId: "C03-M5", value: "producers_o" },
        { key: "B", text: t`autotrophs`, correct: false, misconceptionId: "C03-M6", value: "autotrophs_o" },
        { key: "C", text: t`carnivores`, correct: true, value: "carnivores_o" },
        { key: "D", text: t`herbivores`, correct: false, misconceptionId: "C03-M4", value: "herbivores_o" },
      ],
      solution: {
        steps: [
          t`Eat herbivores.`,
          t`Carnivores.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2026 Q. 2(iv)" },
      stem: t`Producers trap 5000 J of light energy. By the 10% law, how much energy (J) reaches the secondary consumers?`,
      verify: { kind: "value", inputs: { e: "5000" }, params: { q: "ten" } },
      options: [
        { key: "A", text: t`$500$`, correct: false, misconceptionId: "C03-M7", value: "500" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C03-M8", value: "5" },
        { key: "C", text: t`$4000$`, correct: false, misconceptionId: "C03-M9", value: "4000" },
        { key: "D", text: t`$50$`, correct: true, value: "50" },
      ],
      solution: {
        steps: [
          t`$5000 \to 500 \to 50$.`,
          t`50 J.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q3(2)" },
      stem: t`A food web is`,
      verify: { kind: "value", inputs: {  }, params: { q: "web" } },
      options: [
        { key: "A", text: t`one trophic level`, correct: false, misconceptionId: "C03-M11", value: "one_level" },
        { key: "B", text: t`the decomposers alone`, correct: false, misconceptionId: "C03-M12", value: "decomposers_only" },
        { key: "C", text: t`many food chains interlinked`, correct: true, value: "linked_chains" },
        { key: "D", text: t`a single food chain`, correct: false, misconceptionId: "C03-M10", value: "single_chain" },
      ],
      solution: {
        steps: [
          t`Interlinked chains.`,
          t`Many chains linked.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q3(2)" },
      stem: t`The flow of energy in an ecosystem is`,
      verify: { kind: "value", inputs: {  }, params: { q: "flow" } },
      options: [
        { key: "A", text: t`one-way: from producers to consumers, lost as heat`, correct: true, value: "one_way" },
        { key: "B", text: t`cyclic, like nutrients`, correct: false, misconceptionId: "C03-M13", value: "cyclic_f" },
        { key: "C", text: t`two-way between levels`, correct: false, misconceptionId: "C03-M14", value: "two_way" },
        { key: "D", text: t`greater at higher levels`, correct: false, misconceptionId: "C03-M15", value: "rises_upward" },
      ],
      solution: {
        steps: [
          t`Lost as heat.`,
          t`One-way.`,
        ],
      },
    },
  ],
};
