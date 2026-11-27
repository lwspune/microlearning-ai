import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`You find a plant you have never seen on a trek. How can a botanist far away name it from what you bring back?`,
    reveal: t`Press it, dry it and label it: a herbarium sheet keeps the plant for study, and keys and floras help name it.`,
  },
  explanation: {
    intuition: [
      t`**Taxonomic aids** help collect, preserve and identify organisms.`,
      t`Some keep specimens; some help identify them.`,
      t`They let organisms be studied all year.`,
    ],
    formal: [
      {
        title: "Herbarium",
        points: [
          t`A plant is **dried, pressed** and mounted on a standard sheet.`,
          t`The **label** at the **lower right corner** records date, place, local name, collector and notes.`,
          t`Useful for seasonal plants, studied all year.`,
        ],
      },
      {
        title: "Keys, floras and museums",
        points: [
          t`A **dichotomous key** uses pairs of **contrasting characters**.`,
          t`A **manual** gives keys to identify the species of an area; a **flora** is the plant life of an area.`,
          t`A **museum** keeps preserved specimens and herbaria.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which aid suits a plant that flowers only in the monsoon?`,
      steps: [
        t`It is alive only part of the year.`,
        t`A herbarium specimen lasts all year.`,
      ],
      answer: t`A herbarium`,
    },
    visualSpec: t`A herbarium sheet: a pressed plant with its label in the lower right corner.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks a museum.",
      remediation: "Museums keep animals and herbaria.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks a garden.",
      remediation: "The plant is seasonal there too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks an exhibition.",
      remediation: "Exhibitions are brief.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Says potted.",
      remediation: "A herbarium specimen is dried.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says formalin.",
      remediation: "That is a museum jar.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Says photograph.",
      remediation: "A specimen is kept.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says upper left.",
      remediation: "It is lower right.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says centre.",
      remediation: "The plant goes there.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says back.",
      remediation: "It is on the front.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says similar characters.",
      remediation: "Keys use contrasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says colour alone.",
      remediation: "Keys use many characters.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says size alone.",
      remediation: "Keys use many characters.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks herbarium.",
      remediation: "A herbarium holds specimens.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks museum.",
      remediation: "A museum holds specimens.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks dictionary.",
      remediation: "A manual has keys.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q1(B)" },
      stem: t`A plant appears only in one season. To study it in the laboratory all year, the best aid is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "seasonal" } },
      options: [
        { key: "A", text: t`herbarium`, correct: true, value: "herbarium_a" },
        { key: "B", text: t`museum`, correct: false, misconceptionId: "C02-M1", value: "museum_a" },
        { key: "C", text: t`botanical garden`, correct: false, misconceptionId: "C02-M2", value: "botanical_garden_a" },
        { key: "D", text: t`flower exhibition`, correct: false, misconceptionId: "C02-M3", value: "flower_show_a" },
      ],
      solution: {
        steps: [
          t`Dried, all year.`,
          t`Herbarium.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(B)" },
      stem: t`A herbarium specimen is a plant that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "specimen" } },
      options: [
        { key: "A", text: t`growing in a pot`, correct: false, misconceptionId: "C02-M4", value: "living_potted" },
        { key: "B", text: t`kept in a jar of formalin`, correct: false, misconceptionId: "C02-M5", value: "in_formalin" },
        { key: "C", text: t`photographed`, correct: false, misconceptionId: "C02-M6", value: "photograph_s" },
        { key: "D", text: t`dried, pressed and mounted on a standard sheet`, correct: true, value: "dried_pressed" },
      ],
      solution: {
        steps: [
          t`Pressed and mounted.`,
          t`Dried, pressed and mounted.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(B)" },
      stem: t`On a herbarium sheet, the label is placed at the`,
      verify: { kind: "value", inputs: {  }, params: { q: "label" } },
      options: [
        { key: "A", text: t`back of the sheet`, correct: false, misconceptionId: "C02-M9", value: "back_of_sheet" },
        { key: "B", text: t`lower right corner`, correct: true, value: "lower_right" },
        { key: "C", text: t`upper left corner`, correct: false, misconceptionId: "C02-M7", value: "upper_left" },
        { key: "D", text: t`centre`, correct: false, misconceptionId: "C02-M8", value: "centre_l" },
      ],
      solution: {
        steps: [
          t`The label's place.`,
          t`Lower right corner.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(B)" },
      stem: t`A dichotomous key identifies an organism by`,
      verify: { kind: "value", inputs: {  }, params: { q: "key" } },
      options: [
        { key: "A", text: t`size alone`, correct: false, misconceptionId: "C02-M12", value: "size_only" },
        { key: "B", text: t`pairs of contrasting characters`, correct: true, value: "contrasting_characters" },
        { key: "C", text: t`similar characters`, correct: false, misconceptionId: "C02-M10", value: "similar_characters" },
        { key: "D", text: t`colour alone`, correct: false, misconceptionId: "C02-M11", value: "colour_only" },
      ],
      solution: {
        steps: [
          t`Pairs of choices.`,
          t`Contrasting characters.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(B)" },
      stem: t`A book giving keys to identify the species of a particular area is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "flora" } },
      options: [
        { key: "A", text: t`dictionary`, correct: false, misconceptionId: "C02-M15", value: "dictionary_a" },
        { key: "B", text: t`manual`, correct: true, value: "flora_manual" },
        { key: "C", text: t`herbarium`, correct: false, misconceptionId: "C02-M13", value: "herbarium_a" },
        { key: "D", text: t`museum`, correct: false, misconceptionId: "C02-M14", value: "museum_a" },
      ],
      solution: {
        steps: [
          t`An area's species.`,
          t`Manual.`,
        ],
      },
    },
  ],
};
