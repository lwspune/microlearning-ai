import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A cockroach leaves a small brown capsule in a crack. What is inside?`,
    reveal: t`An ootheca: 14 to 16 fertilized eggs in two rows.`,
  },
  explanation: {
    intuition: [
      t`The female has primary and secondary reproductive organs.`,
      t`Eggs are fertilized inside her genital chamber.`,
      t`Fertilized eggs are packed in an egg case.`,
    ],
    formal: [
      {
        title: "Organs",
        points: [
          t`Two **ovaries** (segments 2 to 6), each of eight **ovarioles**.`,
          t`Lateral oviducts join into the common oviduct (vagina), which opens into the **genital chamber**.`,
          t`The **spermatheca** (segment 6) stores sperms and opens into the genital chamber.`,
        ],
      },
      {
        title: "Fertilization and ootheca",
        points: [
          t`Eggs are fertilized in the genital chamber by sperms from the spermatheca.`,
          t`**Colleterial glands** secrete the **ootheca** around fertilized eggs.`,
          t`Female gonapophyses: six chitinous plates around the genital pore.`,
        ],
      },
    ],
    worked: {
      prompt: t`Trace an egg from where it forms to where it is fertilized.`,
      steps: [
        t`It forms in an ovariole of the ovary.`,
        t`It passes by the oviduct and vagina into the genital chamber.`,
      ],
      answer: t`Ovary to genital chamber`,
    },
    visualSpec: t`Two ovaries, oviducts joining at the vagina, and the genital chamber with spermatheca and colleterial glands.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Says ovary.",
      remediation: "The ovary only makes ova.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says spermatheca.",
      remediation: "It stores sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says colleterial gland.",
      remediation: "It forms the ootheca.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says spermatheca.",
      remediation: "It stores sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says ovarioles.",
      remediation: "They make the ova.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says oviducts.",
      remediation: "They carry the eggs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says makes eggs.",
      remediation: "Ovarioles make ova.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says forms ootheca.",
      remediation: "Colleterial glands do that.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Says copulation.",
      remediation: "The genital chamber is that organ.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says single egg.",
      remediation: "It holds 14 to 16 eggs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says unfertilized.",
      remediation: "The eggs are fertilized.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says ovary part.",
      remediation: "It is laid outside the body.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says phallomeres.",
      remediation: "Those are male.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says anal styles.",
      remediation: "Those are male.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says anal cerci.",
      remediation: "Both sexes have cerci.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(D)" },
      stem: t`The eggs of the cockroach are fertilized in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "fertilized" } },
      options: [
        { key: "A", text: t`spermatheca`, correct: false, misconceptionId: "C07-M2", value: "spermatheca_t" },
        { key: "B", text: t`colleterial gland`, correct: false, misconceptionId: "C07-M3", value: "colleterial_t" },
        { key: "C", text: t`genital chamber`, correct: true, value: "genital_chamber" },
        { key: "D", text: t`ovary`, correct: false, misconceptionId: "C07-M1", value: "ovary_t" },
      ],
      solution: {
        steps: [
          t`Sperms from spermatheca.`,
          t`Genital chamber.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(F)" },
      stem: t`The ootheca is formed by the secretion of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ootheca" } },
      options: [
        { key: "A", text: t`spermatheca`, correct: false, misconceptionId: "C07-M4", value: "spermatheca_t" },
        { key: "B", text: t`ovarioles`, correct: false, misconceptionId: "C07-M5", value: "ovarioles_t" },
        { key: "C", text: t`oviducts`, correct: false, misconceptionId: "C07-M6", value: "oviduct_t" },
        { key: "D", text: t`colleterial glands`, correct: true, value: "colleterial_t" },
      ],
      solution: {
        steps: [
          t`Accessory gland secretion.`,
          t`Colleterial glands.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(D)" },
      stem: t`The spermatheca of the female cockroach`,
      verify: { kind: "value", inputs: {  }, params: { q: "spermatheca" } },
      options: [
        { key: "A", text: t`is the organ of copulation`, correct: false, misconceptionId: "C07-M9", value: "copulation_organ" },
        { key: "B", text: t`stores sperms`, correct: true, value: "stores_sperms" },
        { key: "C", text: t`produces the ova`, correct: false, misconceptionId: "C07-M7", value: "makes_eggs" },
        { key: "D", text: t`forms the ootheca`, correct: false, misconceptionId: "C07-M8", value: "forms_ootheca" },
      ],
      solution: {
        steps: [
          t`Sperm store.`,
          t`Stores sperms.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(F)" },
      stem: t`An ootheca is`,
      verify: { kind: "value", inputs: {  }, params: { q: "egg_case" } },
      options: [
        { key: "A", text: t`an egg case holding 14 to 16 fertilized eggs`, correct: true, value: "fertilized_case" },
        { key: "B", text: t`a single large egg`, correct: false, misconceptionId: "C07-M10", value: "single_egg" },
        { key: "C", text: t`a case of unfertilized eggs`, correct: false, misconceptionId: "C07-M11", value: "unfertilized_case" },
        { key: "D", text: t`a part of the ovary`, correct: false, misconceptionId: "C07-M12", value: "ovary_part" },
      ],
      solution: {
        steps: [
          t`Egg case.`,
          t`14 to 16 fertilized eggs.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(D)" },
      stem: t`The female gonapophyses are`,
      verify: { kind: "value", inputs: {  }, params: { q: "gonapophyses" } },
      options: [
        { key: "A", text: t`three asymmetrical phallomeres`, correct: false, misconceptionId: "C07-M13", value: "three_phallomeres" },
        { key: "B", text: t`a pair of anal styles`, correct: false, misconceptionId: "C07-M14", value: "anal_styles" },
        { key: "C", text: t`a pair of anal cerci`, correct: false, misconceptionId: "C07-M15", value: "anal_cerci" },
        { key: "D", text: t`six chitinous plates around the genital pore`, correct: true, value: "six_plates" },
      ],
      solution: {
        steps: [
          t`Female plates.`,
          t`Six chitinous plates.`,
        ],
      },
    },
  ],
};
