import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A cockroach eats almost anything, hard or soft. What lets it handle such food?`,
    reveal: t`Chewing and biting mouthparts cut the food, and its gizzard crushes and filters it.`,
  },
  explanation: {
    intuition: [
      t`The cockroach is omnivorous.`,
      t`Its **mouthparts** chew and bite.`,
      t`The **foregut** stores and grinds the food.`,
    ],
    formal: [
      {
        title: "Mouth and saliva",
        points: [
          t`Mouthparts: labrum, mandibles, maxillae, labium and hypopharynx; they chew and bite.`,
          t`The **hypopharynx** (lingua) sits at the centre of the mouth.`,
          t`The salivary duct opens at its base; it mixes saliva with food.`,
        ],
      },
      {
        title: "Foregut",
        points: [
          t`Pharynx: short, muscular, with taste sensillae; then the narrow oesophagus.`,
          t`**Crop**: a large pear-shaped sac that stores food for a time.`,
          t`**Gizzard**: six chitinous teeth crush food; backward bristles filter it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Food leaves the crop. Where does it go next, and what happens there?`,
      steps: [
        t`The crop sends food to the gizzard.`,
        t`Its teeth crush and its bristles filter the food.`,
      ],
      answer: t`The gizzard: crushed and filtered`,
    },
    visualSpec: t`A tube from mouth to gizzard: pharynx, oesophagus, crop, then gizzard.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says sponging.",
      remediation: "Sponging is the housefly's type.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says piercing and sucking.",
      remediation: "That is the mosquito's type.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says lapping.",
      remediation: "Lapping is the honey bee's type.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Says trachea.",
      remediation: "Trachea is respiratory.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says haemocyte.",
      remediation: "Haemocytes are blood cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Says seminal vesicle.",
      remediation: "It is male reproductive.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says crushing.",
      remediation: "Mandibles and gizzard crush.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says storing.",
      remediation: "The crop stores food.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says digesting.",
      remediation: "Enzymes digest food in the midgut.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says gizzard.",
      remediation: "The gizzard crushes; it does not store.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says oesophagus.",
      remediation: "The oesophagus is a narrow tube.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says pharynx.",
      remediation: "The pharynx is very short.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says enzyme epithelium.",
      remediation: "That lines the stomach.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says rectal pads.",
      remediation: "Rectal pads are in the rectum.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says taste sensillae.",
      remediation: "Those are in the pharynx.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q1(B)" },
      stem: t`Cockroach has ____ type of mouthparts.`,
      verify: { kind: "value", inputs: {  }, params: { q: "mouthparts" } },
      options: [
        { key: "A", text: t`chewing and biting`, correct: true, value: "chewing_biting" },
        { key: "B", text: t`sponging`, correct: false, misconceptionId: "C02-M1", value: "sponging_t" },
        { key: "C", text: t`piercing and sucking`, correct: false, misconceptionId: "C02-M2", value: "piercing_sucking" },
        { key: "D", text: t`lapping`, correct: false, misconceptionId: "C02-M3", value: "lapping_t" },
      ],
      solution: {
        steps: [
          t`Omnivorous feeder.`,
          t`Chewing and biting.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q1(D)" },
      stem: t`____ is a part of the digestive system.`,
      verify: { kind: "value", inputs: {  }, params: { q: "digestive" } },
      options: [
        { key: "A", text: t`Trachea`, correct: false, misconceptionId: "C02-M4", value: "trachea_t" },
        { key: "B", text: t`Haemocyte`, correct: false, misconceptionId: "C02-M5", value: "haemocyte_t" },
        { key: "C", text: t`Seminal vesicle`, correct: false, misconceptionId: "C02-M6", value: "seminal_vesicle" },
        { key: "D", text: t`Hypopharynx`, correct: true, value: "hypopharynx_t" },
      ],
      solution: {
        steps: [
          t`Saliva duct at its base.`,
          t`Hypopharynx.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(C)" },
      stem: t`The hypopharynx, with the salivary duct opening at its base, helps in`,
      verify: { kind: "value", inputs: {  }, params: { q: "lingua" } },
      options: [
        { key: "A", text: t`digesting the food`, correct: false, misconceptionId: "C02-M9", value: "tastes_food" },
        { key: "B", text: t`mixing saliva with the food`, correct: true, value: "mixes_saliva" },
        { key: "C", text: t`crushing the food`, correct: false, misconceptionId: "C02-M7", value: "crushes_food" },
        { key: "D", text: t`storing the food`, correct: false, misconceptionId: "C02-M8", value: "stores_food" },
      ],
      solution: {
        steps: [
          t`Saliva opens at its base.`,
          t`Mixes saliva with food.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(A)" },
      stem: t`The large pear-shaped sac of the foregut that stores food for a time is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "store" } },
      options: [
        { key: "A", text: t`pharynx`, correct: false, misconceptionId: "C02-M12", value: "pharynx_t" },
        { key: "B", text: t`crop`, correct: true, value: "crop_t" },
        { key: "C", text: t`gizzard`, correct: false, misconceptionId: "C02-M10", value: "gizzard_t" },
        { key: "D", text: t`oesophagus`, correct: false, misconceptionId: "C02-M11", value: "oesophagus_t" },
      ],
      solution: {
        steps: [
          t`Pear-shaped store.`,
          t`Crop.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(B)" },
      stem: t`The gizzard (proventriculus) works on food with its`,
      verify: { kind: "value", inputs: {  }, params: { q: "gizzard" } },
      options: [
        { key: "A", text: t`taste sensillae`, correct: false, misconceptionId: "C02-M15", value: "taste_sensillae" },
        { key: "B", text: t`six chitinous teeth and backwardly directed bristles`, correct: true, value: "teeth_bristles" },
        { key: "C", text: t`glandular epithelium that secretes enzymes`, correct: false, misconceptionId: "C02-M13", value: "enzyme_epithelium" },
        { key: "D", text: t`six rectal pads`, correct: false, misconceptionId: "C02-M14", value: "rectal_pads" },
      ],
      solution: {
        steps: [
          t`Teeth crush, bristles filter.`,
          t`Teeth and bristles.`,
        ],
      },
    },
  ],
};
