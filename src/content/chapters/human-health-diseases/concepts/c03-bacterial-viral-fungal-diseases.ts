import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Ringworm has 'worm' in its name. Is it really caused by a worm?`,
    reveal: t`No. It is a fungus that feeds on the keratin of skin, hair and nails, making ring-shaped patches.`,
  },
  explanation: {
    intuition: [
      t`Bacteria, viruses and fungi also cause common diseases.`,
      t`Each spreads in its own way.`,
      t`Tests help identify them.`,
    ],
    formal: [
      {
        title: "Bacterial",
        points: [
          t`**Typhoid**: *Salmonella typhi*, through contaminated food and water; high fever; **Widal test**.`,
          t`**Pneumonia**: *Streptococcus pneumoniae*; spreads by **droplets** and contact.`,
          t`The alveoli fill with fluid.`,
        ],
      },
      {
        title: "Viral and fungal",
        points: [
          t`**Chicken pox**: the **varicella zoster virus**; itchy blisters; droplets.`,
          t`**Ringworm**: **fungi** *Trichophyton* and *Microsporum*.`,
          t`It spreads by contact and shared towels or combs.`,
        ],
      },
    ],
    worked: {
      prompt: t`A patient has a fever of 104 °F and abdominal pain. A Widal test is positive. What is the disease?`,
      steps: [
        t`The Widal test detects typhoid.`,
        t`Typhoid gives prolonged high fever.`,
      ],
      answer: t`Typhoid`,
    },
    visualSpec: t`Four cards: typhoid, pneumonia, chicken pox and ringworm, each with its germ and route.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks *Mycobacterium*.",
      remediation: "That causes tuberculosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks *Streptococcus*.",
      remediation: "That causes pneumonia.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks *Plasmodium*.",
      remediation: "That causes malaria.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks AIDS.",
      remediation: "AIDS uses ELISA.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks malaria.",
      remediation: "Malaria uses a blood smear.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks tuberculosis.",
      remediation: "TB uses other tests.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks a roundworm.",
      remediation: "The name misleads: it is a fungus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks bacteria.",
      remediation: "It is fungal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks a virus.",
      remediation: "It is fungal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks mosquito bites.",
      remediation: "Pneumonia is airborne.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks food.",
      remediation: "Pneumonia is airborne.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks needles.",
      remediation: "Pneumonia is airborne.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks a bacterium.",
      remediation: "It is a virus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks a fungus.",
      remediation: "It is a virus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks a protozoan.",
      remediation: "It is a virus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2026 Q. 2(viii)" },
      stem: t`Typhoid is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "typhoid" } },
      options: [
        { key: "A", text: t`*Streptococcus pneumoniae*`, correct: false, misconceptionId: "C03-M2", value: "streptococcus_b" },
        { key: "B", text: t`*Plasmodium*`, correct: false, misconceptionId: "C03-M3", value: "plasmodium_p" },
        { key: "C", text: t`*Salmonella typhi*`, correct: true, value: "salmonella_typhi" },
        { key: "D", text: t`*Mycobacterium tuberculosis*`, correct: false, misconceptionId: "C03-M1", value: "mycobacterium_b" },
      ],
      solution: {
        steps: [
          t`A Gram-negative bacterium.`,
          t`*Salmonella typhi*.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2024 Q. 14" },
      stem: t`The Widal test is used to diagnose`,
      verify: { kind: "value", inputs: {  }, params: { q: "widal" } },
      options: [
        { key: "A", text: t`malaria`, correct: false, misconceptionId: "C03-M5", value: "malaria_t" },
        { key: "B", text: t`tuberculosis`, correct: false, misconceptionId: "C03-M6", value: "tuberculosis_t" },
        { key: "C", text: t`typhoid`, correct: true, value: "typhoid_t" },
        { key: "D", text: t`AIDS`, correct: false, misconceptionId: "C03-M4", value: "aids_t" },
      ],
      solution: {
        steps: [
          t`Antibodies against *Salmonella*.`,
          t`Typhoid.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(11)" },
      stem: t`Ringworm is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "ringworm" } },
      options: [
        { key: "A", text: t`a roundworm`, correct: false, misconceptionId: "C03-M7", value: "roundworm_c" },
        { key: "B", text: t`bacteria`, correct: false, misconceptionId: "C03-M8", value: "bacteria_c" },
        { key: "C", text: t`a virus`, correct: false, misconceptionId: "C03-M9", value: "virus_c" },
        { key: "D", text: t`fungi (*Trichophyton*, *Microsporum*)`, correct: true, value: "fungi_c" },
      ],
      solution: {
        steps: [
          t`Feeds on keratin.`,
          t`Fungi.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q4(8)" },
      stem: t`Pneumonia spreads mainly by`,
      verify: { kind: "value", inputs: {  }, params: { q: "pneumonia" } },
      options: [
        { key: "A", text: t`contaminated food`, correct: false, misconceptionId: "C03-M11", value: "contaminated_food" },
        { key: "B", text: t`shared needles`, correct: false, misconceptionId: "C03-M12", value: "needles_r" },
        { key: "C", text: t`droplets from an infected person, and direct contact`, correct: true, value: "droplets_r" },
        { key: "D", text: t`mosquito bites`, correct: false, misconceptionId: "C03-M10", value: "mosquito_bite" },
      ],
      solution: {
        steps: [
          t`Coughs and sneezes.`,
          t`Droplets and contact.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Chicken pox is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "chickenpox" } },
      options: [
        { key: "A", text: t`the varicella zoster virus`, correct: true, value: "varicella_virus" },
        { key: "B", text: t`a bacterium`, correct: false, misconceptionId: "C03-M13", value: "bacterium_c" },
        { key: "C", text: t`a fungus`, correct: false, misconceptionId: "C03-M14", value: "fungus_c" },
        { key: "D", text: t`a protozoan`, correct: false, misconceptionId: "C03-M15", value: "protozoan_c" },
      ],
      solution: {
        steps: [
          t`A virus.`,
          t`Varicella zoster virus.`,
        ],
      },
    },
  ],
};
