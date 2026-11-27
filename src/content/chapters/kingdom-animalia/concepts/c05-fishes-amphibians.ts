import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A fish's heart only ever pumps deoxygenated blood. How does oxygen still reach its body?`,
    reveal: t`The heart pumps the blood to the gills, where it picks up oxygen on its way to the body: single circulation.`,
  },
  explanation: {
    intuition: [
      t`Vertebrates have a backbone.`,
      t`The simplest are jawless cyclostomes; then fishes and amphibians.`,
      t`Each class adapts to water or land.`,
    ],
    formal: [
      {
        title: "Cyclostomes and fishes",
        points: [
          t`**Cyclostomata** (lamprey, hagfish): **jawless**, eel-like, no scales or paired fins.`,
          t`**Chondrichthyes** (*Scoliodon*): cartilage, **placoid** scales, ventral mouth, **no operculum**.`,
          t`**Osteichthyes** (*Catla*, Rohu): bone, cycloid or ctenoid scales, an **operculum**; two-chambered **venous heart**.`,
        ],
      },
      {
        title: "Amphibia",
        points: [
          t`Live in water and on land; **moist, glandular skin**.`,
          t`Breathe by skin, lungs and buccopharynx.`,
          t`Develop by **metamorphosis** from an aquatic larva (tadpole).`,
        ],
      },
    ],
    worked: {
      prompt: t`A fish has gills covered by a flap and bony scales. Which class?`,
      steps: [
        t`The flap is an operculum.`,
        t`That marks bony fishes.`,
      ],
      answer: t`Osteichthyes`,
    },
    visualSpec: t`Side views of Scoliodon (gill clefts open) and Catla (operculum covering the gills).`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks crocodile.",
      remediation: "It has four chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks salamander.",
      remediation: "Amphibians have three chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks toad.",
      remediation: "Amphibians have three chambers.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says bony fish.",
      remediation: "Bony fish have an operculum.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says cyclostome.",
      remediation: "Cyclostomes are jawless.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says amphibian.",
      remediation: "It is a fish.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says jawed.",
      remediation: "They are jawless.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says scales and fins.",
      remediation: "They lack both.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says operculum.",
      remediation: "They have pore-like gill openings.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says adult gills.",
      remediation: "Adult frogs have lungs.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says dry scales.",
      remediation: "Frog skin is moist.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says it cannot.",
      remediation: "Skin breathing works.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks Aves.",
      remediation: "Birds develop directly.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks Mammalia.",
      remediation: "Mammals develop directly.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks Reptilia.",
      remediation: "Reptiles develop directly.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q1(B)" },
      stem: t`Which animal has a venous heart?`,
      verify: { kind: "value", inputs: {  }, params: { q: "venous" } },
      options: [
        { key: "A", text: t`Toad`, correct: false, misconceptionId: "C05-M3", value: "toad_a" },
        { key: "B", text: t`Rohu`, correct: true, value: "rohu_a" },
        { key: "C", text: t`Crocodile`, correct: false, misconceptionId: "C05-M1", value: "crocodile_a" },
        { key: "D", text: t`Salamander`, correct: false, misconceptionId: "C05-M2", value: "salamander_a" },
      ],
      solution: {
        steps: [
          t`Two chambers, deoxygenated blood.`,
          t`Rohu.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q3(F)" },
      stem: t`*Scoliodon*, the dog fish, with a ventral mouth and gill clefts not covered by an operculum, is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "scoliodon" } },
      options: [
        { key: "A", text: t`bony fish`, correct: false, misconceptionId: "C05-M4", value: "bony_fish" },
        { key: "B", text: t`cyclostome`, correct: false, misconceptionId: "C05-M5", value: "cyclostome_a" },
        { key: "C", text: t`amphibian`, correct: false, misconceptionId: "C05-M6", value: "amphibian_a" },
        { key: "D", text: t`cartilaginous fish`, correct: true, value: "cartilaginous_fish" },
      ],
      solution: {
        steps: [
          t`Open gill clefts.`,
          t`Cartilaginous fish.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q5(B)" },
      stem: t`Cyclostomes such as lampreys are`,
      verify: { kind: "value", inputs: {  }, params: { q: "cyclostome" } },
      options: [
        { key: "A", text: t`jawless, with no scales or paired fins`, correct: true, value: "jawless_c" },
        { key: "B", text: t`jawed`, correct: false, misconceptionId: "C05-M7", value: "jawed_c" },
        { key: "C", text: t`scaly, with paired fins`, correct: false, misconceptionId: "C05-M8", value: "scales_paired_fins" },
        { key: "D", text: t`covered by a bony operculum`, correct: false, misconceptionId: "C05-M9", value: "operculum_c" },
      ],
      solution: {
        steps: [
          t`No jaws.`,
          t`Jawless.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(D)" },
      stem: t`A frog can respire in water through`,
      verify: { kind: "value", inputs: {  }, params: { q: "frog_skin" } },
      options: [
        { key: "A", text: t`dry, scaly skin`, correct: false, misconceptionId: "C05-M11", value: "dry_scales" },
        { key: "B", text: t`nothing: it cannot`, correct: false, misconceptionId: "C05-M12", value: "cannot_c" },
        { key: "C", text: t`its moist, glandular skin`, correct: true, value: "moist_skin" },
        { key: "D", text: t`gills in the adult`, correct: false, misconceptionId: "C05-M10", value: "adult_gills" },
      ],
      solution: {
        steps: [
          t`Moist skin.`,
          t`Its moist, glandular skin.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(J)" },
      stem: t`Among vertebrates, metamorphosis through an aquatic larva is seen in class`,
      verify: { kind: "value", inputs: {  }, params: { q: "metamorphosis" } },
      options: [
        { key: "A", text: t`Amphibia`, correct: true, value: "amphibia_c" },
        { key: "B", text: t`Aves`, correct: false, misconceptionId: "C05-M13", value: "aves_c" },
        { key: "C", text: t`Mammalia`, correct: false, misconceptionId: "C05-M14", value: "mammalia_c" },
        { key: "D", text: t`Reptilia`, correct: false, misconceptionId: "C05-M15", value: "reptilia_c" },
      ],
      solution: {
        steps: [
          t`Tadpole to frog.`,
          t`Amphibia.`,
        ],
      },
    },
  ],
};
