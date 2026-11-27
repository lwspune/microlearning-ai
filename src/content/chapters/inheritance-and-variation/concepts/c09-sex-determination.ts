import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A family has four daughters, and someone blames the mother. Is that fair?`,
    reveal: t`No: in humans the father's sperm, carrying X or Y, decides the child's sex; every egg carries an X.`,
  },
  explanation: {
    intuition: [
      t`Sex is often set by sex chromosomes.`,
      t`Humans are XX (female) and XY (male).`,
      t`The male is **heterogametic**: half his sperms carry X, half Y.`,
    ],
    formal: [
      {
        title: "Other systems",
        points: [
          t`XX–XO: grasshoppers; the male has one X (XO).`,
          t`ZW–ZZ: birds; the female is ZW.`,
          t`Haplo-diploidy: honey bees.`,
          t`Drones (males) come from unfertilized eggs: haploid.`,
          t`Queens and workers come from fertilized eggs: diploid.`,
        ],
      },
    ],
    worked: {
      prompt: t`In birds, which parent decides the sex of the chick?`,
      steps: [
        t`Females are ZW, males ZZ.`,
        t`The mother's egg carries Z or W.`,
      ],
      answer: t`The mother`,
    },
    visualSpec: t`Sperm marked X and Y meeting an egg marked X.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Blames the mother.",
      remediation: "Every egg carries X; the sperm decides.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Says both equally.",
      remediation: "Only the sperm differs.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Blames the environment.",
      remediation: "In humans chromosomes decide.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Picks a fertilized egg.",
      remediation: "Fertilized eggs give females.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Picks royal jelly.",
      remediation: "Royal jelly makes queens.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Picks a worker's egg.",
      remediation: "Drones come from unfertilized eggs.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Picks female.",
      remediation: "Females are XX: one kind of egg.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Picks both.",
      remediation: "Only males make two kinds.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Picks neither.",
      remediation: "Males make X and Y sperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Picks XX.",
      remediation: "Birds use Z and W.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Picks ZZ.",
      remediation: "ZZ is the male bird.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Picks XO.",
      remediation: "XO is the male grasshopper.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Picks XY.",
      remediation: "Grasshoppers lack a Y.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Picks XX.",
      remediation: "XX is the female grasshopper.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Picks ZW.",
      remediation: "ZW is the female bird.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(5)" },
      stem: t`In humans, the sex of a child is decided by`,
      verify: { kind: "value", inputs: {  }, params: { q: "father" } },
      options: [
        { key: "A", text: t`both parents equally`, correct: false, misconceptionId: "C09-M2", value: "both_equally" },
        { key: "B", text: t`the environment`, correct: false, misconceptionId: "C09-M3", value: "environment" },
        { key: "C", text: t`the father's sperm`, correct: true, value: "father_sperm" },
        { key: "D", text: t`the mother's egg`, correct: false, misconceptionId: "C09-M1", value: "mother_egg" },
      ],
      solution: {
        steps: [
          t`Half the sperms carry Y.`,
          t`The father decides.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2024 Q. 15" },
      stem: t`A male honey bee (drone) develops from`,
      verify: { kind: "value", inputs: {  }, params: { q: "drone" } },
      options: [
        { key: "A", text: t`an unfertilized egg`, correct: true, value: "unfertilized_egg" },
        { key: "B", text: t`a fertilized egg`, correct: false, misconceptionId: "C09-M4", value: "fertilized_egg" },
        { key: "C", text: t`royal jelly`, correct: false, misconceptionId: "C09-M5", value: "royal_jelly" },
        { key: "D", text: t`a worker's egg`, correct: false, misconceptionId: "C09-M6", value: "worker_egg" },
      ],
      solution: {
        steps: [
          t`Drones are haploid.`,
          t`From unfertilized eggs.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(5)" },
      stem: t`In humans, the heterogametic sex is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "hetero" } },
      options: [
        { key: "A", text: t`female`, correct: false, misconceptionId: "C09-M7", value: "female" },
        { key: "B", text: t`both`, correct: false, misconceptionId: "C09-M8", value: "both" },
        { key: "C", text: t`neither`, correct: false, misconceptionId: "C09-M9", value: "neither" },
        { key: "D", text: t`male`, correct: true, value: "male" },
      ],
      solution: {
        steps: [
          t`Males make X and Y sperms.`,
          t`The male is heterogametic.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`In birds, the female's sex chromosomes are`,
      verify: { kind: "value", inputs: {  }, params: { q: "birds" } },
      options: [
        { key: "A", text: t`ZW`, correct: true, value: "zw" },
        { key: "B", text: t`XX`, correct: false, misconceptionId: "C09-M10", value: "xx" },
        { key: "C", text: t`ZZ`, correct: false, misconceptionId: "C09-M11", value: "zz" },
        { key: "D", text: t`XO`, correct: false, misconceptionId: "C09-M12", value: "xo" },
      ],
      solution: {
        steps: [
          t`Birds use Z and W.`,
          t`The female is ZW.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`A male grasshopper's sex chromosomes are`,
      verify: { kind: "value", inputs: {  }, params: { q: "grasshopper" } },
      options: [
        { key: "A", text: t`XX`, correct: false, misconceptionId: "C09-M14", value: "xx_male" },
        { key: "B", text: t`ZW`, correct: false, misconceptionId: "C09-M15", value: "zw_male" },
        { key: "C", text: t`XO`, correct: true, value: "xo" },
        { key: "D", text: t`XY`, correct: false, misconceptionId: "C09-M13", value: "xy" },
      ],
      solution: {
        steps: [
          t`Grasshopper males have one X.`,
          t`XO.`,
        ],
      },
    },
  ],
};
