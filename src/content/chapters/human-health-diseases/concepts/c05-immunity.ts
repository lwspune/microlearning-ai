import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`You catch chicken pox once and almost never again. What does your body remember?`,
    reveal: t`The germ itself: acquired immunity keeps memory cells that recognise it and destroy it fast next time.`,
  },
  explanation: {
    intuition: [
      t`**Immunity** is the body's ability to resist disease.`,
      t`**Innate** immunity is inborn and nonspecific.`,
      t`**Acquired** immunity develops during life and is specific.`,
    ],
    formal: [
      {
        title: "Innate",
        points: [
          t`Barriers: skin, mucus, **lysozyme** in tears.`,
          t`**Phagocytes** engulf germs.`,
          t`Virus-infected cells release **interferons**.`,
        ],
      },
      {
        title: "Acquired",
        points: [
          t`Features: specificity, diversity, memory.`,
          t`**Active**: own antibodies (infection or vaccine; Jenner's cowpox vaccine).`,
          t`**Passive**: ready-made antibodies (antiserum, mother's milk).`,
        ],
      },
    ],
    worked: {
      prompt: t`A snake-bite victim is given antivenom. What kind of immunity is this?`,
      steps: [
        t`Antivenom contains ready-made antibodies.`,
        t`Ready-made antibodies give passive immunity.`,
      ],
      answer: t`Passive`,
    },
    visualSpec: t`Two shields: innate (skin, phagocytes) and acquired (antibodies, memory cells).`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks antibodies.",
      remediation: "Antibodies are acquired.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks T cells.",
      remediation: "T cells are acquired.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks B cells.",
      remediation: "B cells are acquired.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks histamines.",
      remediation: "Histamines cause inflammation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks pyrogens.",
      remediation: "Pyrogens cause fever.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks allergens.",
      remediation: "Allergens trigger allergy.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks bile.",
      remediation: "Bile digests fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks urine.",
      remediation: "Lysozyme is in tears.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks RBCs.",
      remediation: "RBCs carry oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks active.",
      remediation: "Active means own antibodies.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks innate.",
      remediation: "Innate is inborn.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks autoimmunity.",
      remediation: "That attacks self.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says no specificity.",
      remediation: "Acquired immunity is specific.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says inborn.",
      remediation: "Acquired immunity develops.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says only phagocytes.",
      remediation: "Those are innate.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(11)" },
      stem: t`Innate immunity is provided by`,
      verify: { kind: "value", inputs: {  }, params: { q: "innate" } },
      options: [
        { key: "A", text: t`B-lymphocytes`, correct: false, misconceptionId: "C05-M3", value: "b_lymphocytes" },
        { key: "B", text: t`phagocytes`, correct: true, value: "phagocytes_c" },
        { key: "C", text: t`antibodies`, correct: false, misconceptionId: "C05-M1", value: "antibody_c" },
        { key: "D", text: t`T-lymphocytes`, correct: false, misconceptionId: "C05-M2", value: "t_lymphocytes" },
      ],
      solution: {
        steps: [
          t`Engulfing cells.`,
          t`Phagocytes.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(6)" },
      stem: t`The antiviral proteins released by a virus-infected cell are`,
      verify: { kind: "value", inputs: {  }, params: { q: "antiviral" } },
      options: [
        { key: "A", text: t`histamines`, correct: false, misconceptionId: "C05-M4", value: "histamines_p" },
        { key: "B", text: t`pyrogens`, correct: false, misconceptionId: "C05-M5", value: "pyrogens_p" },
        { key: "C", text: t`allergens`, correct: false, misconceptionId: "C05-M6", value: "allergens_p" },
        { key: "D", text: t`interferons`, correct: true, value: "interferons_p" },
      ],
      solution: {
        steps: [
          t`Protect nearby cells.`,
          t`Interferons.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q5" },
      stem: t`The antibacterial enzyme lysozyme is found in`,
      verify: { kind: "value", inputs: {  }, params: { q: "lysozyme" } },
      options: [
        { key: "A", text: t`tears`, correct: true, value: "tears_f" },
        { key: "B", text: t`bile`, correct: false, misconceptionId: "C05-M7", value: "bile_f" },
        { key: "C", text: t`urine`, correct: false, misconceptionId: "C05-M8", value: "urine_f" },
        { key: "D", text: t`red blood cells`, correct: false, misconceptionId: "C05-M9", value: "rbc_f" },
      ],
      solution: {
        steps: [
          t`Antibacterial in tears.`,
          t`Tears.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q3(8)" },
      stem: t`A person given ready-made antibodies gains`,
      verify: { kind: "value", inputs: {  }, params: { q: "readymade" } },
      options: [
        { key: "A", text: t`innate immunity`, correct: false, misconceptionId: "C05-M11", value: "innate_i" },
        { key: "B", text: t`autoimmunity`, correct: false, misconceptionId: "C05-M12", value: "autoimmunity_i" },
        { key: "C", text: t`passive immunity`, correct: true, value: "passive_i" },
        { key: "D", text: t`active immunity`, correct: false, misconceptionId: "C05-M10", value: "active_i" },
      ],
      solution: {
        steps: [
          t`Ready-made antibodies.`,
          t`Passive immunity.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2024 Q. 17" },
      stem: t`A second infection by the same germ is fought off faster, because acquired immunity has`,
      verify: { kind: "value", inputs: {  }, params: { q: "second" } },
      options: [
        { key: "A", text: t`memory`, correct: true, value: "memory_i" },
        { key: "B", text: t`no specificity`, correct: false, misconceptionId: "C05-M13", value: "no_specificity" },
        { key: "C", text: t`an inborn nature`, correct: false, misconceptionId: "C05-M14", value: "inborn_i" },
        { key: "D", text: t`only phagocytes`, correct: false, misconceptionId: "C05-M15", value: "phagocytes_only" },
      ],
      solution: {
        steps: [
          t`It remembers the germ.`,
          t`Memory.`,
        ],
      },
    },
  ],
};
